import{s as Bt,o as jt,n as be}from"../chunks/scheduler.9bc65507.js";import{S as zt,i as Jt,g as p,s as r,r as _,A as Ct,h as m,f as a,c as d,j as Y,u as g,x,k as P,y as l,a as c,v as b,d as y,t as T,w as k}from"../chunks/index.707bf1b6.js";import{T as at}from"../chunks/Tip.c2ecdbf4.js";import{D as K}from"../chunks/Docstring.17db21ae.js";import{C as We}from"../chunks/CodeBlock.54a9f38d.js";import{F as St,M as wt}from"../chunks/Markdown.fef84341.js";import{E as Ie}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as Ze}from"../chunks/Heading.342b1fa6.js";function Ut($){let t,u="Example:",n,o,i;return o=new We({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEJsZW5kZXJib3RTbWFsbENvbmZpZyUyQyUyMEJsZW5kZXJib3RTbWFsbE1vZGVsJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyMEJsZW5kZXJib3RTbWFsbCUyMGZhY2Vib29rJTJGYmxlbmRlcmJvdF9zbWFsbC05ME0lMjBzdHlsZSUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwQmxlbmRlcmJvdFNtYWxsQ29uZmlnKCklMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwbW9kZWwlMjAod2l0aCUyMHJhbmRvbSUyMHdlaWdodHMpJTIwZnJvbSUyMHRoZSUyMGZhY2Vib29rJTJGYmxlbmRlcmJvdF9zbWFsbC05ME0lMjBzdHlsZSUyMGNvbmZpZ3VyYXRpb24lMEFtb2RlbCUyMCUzRCUyMEJsZW5kZXJib3RTbWFsbE1vZGVsKGNvbmZpZ3VyYXRpb24pJTBBJTBBJTIzJTIwQWNjZXNzaW5nJTIwdGhlJTIwbW9kZWwlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMG1vZGVsLmNvbmZpZw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BlenderbotSmallConfig, BlenderbotSmallModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BlenderbotSmall facebook/blenderbot_small-90M style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BlenderbotSmallConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the facebook/blenderbot_small-90M style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotSmallModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){t=p("p"),t.textContent=u,n=r(),_(o.$$.fragment)},l(e){t=m(e,"P",{"data-svelte-h":!0}),x(t)!=="svelte-11lpom8"&&(t.textContent=u),n=d(e),g(o.$$.fragment,e)},m(e,h){c(e,t,h),c(e,n,h),b(o,e,h),i=!0},p:be,i(e){i||(y(o.$$.fragment,e),i=!0)},o(e){T(o.$$.fragment,e),i=!1},d(e){e&&(a(t),a(n)),k(o,e)}}}function qt($){let t,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=p("p"),t.innerHTML=u},l(n){t=m(n,"P",{"data-svelte-h":!0}),x(t)!=="svelte-fincs2"&&(t.innerHTML=u)},m(n,o){c(n,t,o)},p:be,d(n){n&&a(t)}}}function Gt($){let t,u="Example:",n,o,i;return o=new We({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBCbGVuZGVyYm90U21hbGxNb2RlbCUwQSUwQW1vZGVsJTIwJTNEJTIwQmxlbmRlcmJvdFNtYWxsTW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGYmxlbmRlcmJvdF9zbWFsbC05ME0lMjIpJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZibGVuZGVyYm90X3NtYWxsLTkwTSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIyU3R1ZGllcyUyMGhhdmUlMjBiZWVuJTIwc2hvd24lMjB0aGF0JTIwb3duaW5nJTIwYSUyMGRvZyUyMGlzJTIwZ29vZCUyMGZvciUyMHlvdSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBZGVjb2Rlcl9pbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIyU3R1ZGllcyUyMHNob3clMjB0aGF0JTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMjAlMjAlMjMlMjBCYXRjaCUyMHNpemUlMjAxJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKGlucHV0X2lkcyUzRGlucHV0cy5pbnB1dF9pZHMlMkMlMjBkZWNvZGVyX2lucHV0X2lkcyUzRGRlY29kZXJfaW5wdXRzLmlucHV0X2lkcyklMEElMEFsYXN0X2hpZGRlbl9zdGF0ZXMlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRlJTBBbGlzdChsYXN0X2hpZGRlbl9zdGF0ZXMuc2hhcGUp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, BlenderbotSmallModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotSmallModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_inputs = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=inputs.input_ids, decoder_input_ids=decoder_inputs.input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">512</span>]`,wrap:!1}}),{c(){t=p("p"),t.textContent=u,n=r(),_(o.$$.fragment)},l(e){t=m(e,"P",{"data-svelte-h":!0}),x(t)!=="svelte-11lpom8"&&(t.textContent=u),n=d(e),g(o.$$.fragment,e)},m(e,h){c(e,t,h),c(e,n,h),b(o,e,h),i=!0},p:be,i(e){i||(y(o.$$.fragment,e),i=!0)},o(e){T(o.$$.fragment,e),i=!1},d(e){e&&(a(t),a(n)),k(o,e)}}}function Zt($){let t,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=p("p"),t.innerHTML=u},l(n){t=m(n,"P",{"data-svelte-h":!0}),x(t)!=="svelte-fincs2"&&(t.innerHTML=u)},m(n,o){c(n,t,o)},p:be,d(n){n&&a(t)}}}function It($){let t,u="Conversation example:",n,o,i;return o=new We({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBCbGVuZGVyYm90U21hbGxGb3JDb25kaXRpb25hbEdlbmVyYXRpb24lMEElMEFtbmFtZSUyMCUzRCUyMCUyMmZhY2Vib29rJTJGYmxlbmRlcmJvdF9zbWFsbC05ME0lMjIlMEFtb2RlbCUyMCUzRCUyMEJsZW5kZXJib3RTbWFsbEZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbi5mcm9tX3ByZXRyYWluZWQobW5hbWUpJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQobW5hbWUpJTBBVVRURVJBTkNFJTIwJTNEJTIwJTIyTXklMjBmcmllbmRzJTIwYXJlJTIwY29vbCUyMGJ1dCUyMHRoZXklMjBlYXQlMjB0b28lMjBtYW55JTIwY2FyYnMuJTIyJTBBcHJpbnQoJTIySHVtYW4lM0ElMjAlMjIlMkMlMjBVVFRFUkFOQ0UpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCU1QlVUVEVSQU5DRSU1RCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBcmVwbHlfaWRzJTIwJTNEJTIwbW9kZWwuZ2VuZXJhdGUoKippbnB1dHMpJTBBcHJpbnQoJTIyQm90JTNBJTIwJTIyJTJDJTIwdG9rZW5pemVyLmJhdGNoX2RlY29kZShyZXBseV9pZHMlMkMlMjBza2lwX3NwZWNpYWxfdG9rZW5zJTNEVHJ1ZSklNUIwJTVEKSUwQSUwQVJFUExZJTIwJTNEJTIwJTIySSdtJTIwbm90JTIwc3VyZSUyMiUwQXByaW50KCUyMkh1bWFuJTNBJTIwJTIyJTJDJTIwUkVQTFkpJTBBJTBBTkVYVF9VVFRFUkFOQ0UlMjAlM0QlMjAoJTBBJTIwJTIwJTIwJTIwJTIyTXklMjBmcmllbmRzJTIwYXJlJTIwY29vbCUyMGJ1dCUyMHRoZXklMjBlYXQlMjB0b28lMjBtYW55JTIwY2FyYnMuX19lbmRfXyUyMF9fc3RhcnRfX3doYXQlMjBraW5kJTIwb2YlMjBjYXJicyUyMGRvJTIwdGhleSUyMGVhdCUzRiUyMCUyMiUwQSUyMCUyMCUyMCUyMCUyMmklMjBkb24ndCUyMGtub3clMjBtdWNoJTIwYWJvdXQlMjBjYXJic19fZW5kX18lMjAlMjIlMEElMjAlMjAlMjAlMjAlMjJfX3N0YXJ0X18lMjBJJ20lMjBub3QlMjBzdXJlLiUyMiUwQSklMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTVCTkVYVF9VVFRFUkFOQ0UlNUQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQW5leHRfcmVwbHlfaWRzJTIwJTNEJTIwbW9kZWwuZ2VuZXJhdGUoKippbnB1dHMpJTBBcHJpbnQoJTIyQm90JTNBJTIwJTIyJTJDJTIwdG9rZW5pemVyLmJhdGNoX2RlY29kZShuZXh0X3JlcGx5X2lkcyUyQyUyMHNraXBfc3BlY2lhbF90b2tlbnMlM0RUcnVlKSU1QjAlNUQp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, BlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>mname = <span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>UTTERANCE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Human: &quot;</span>, UTTERANCE)
Human:  My friends are cool but they eat too many carbs.

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([UTTERANCE], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>reply_ids = model.generate(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Bot: &quot;</span>, tokenizer.batch_decode(reply_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>])
Bot:  what kind of carbs do they eat? i don<span class="hljs-string">&#x27;t know much about carbs.

&gt;&gt;&gt; REPLY = &quot;I&#x27;</span>m <span class="hljs-keyword">not</span> sure<span class="hljs-string">&quot;
&gt;&gt;&gt; print(&quot;</span>Human: <span class="hljs-string">&quot;, REPLY)
Human: I&#x27;m not sure

&gt;&gt;&gt; NEXT_UTTERANCE = (
...     &quot;</span>My friends are cool but they eat too many carbs.__end__ __start__what kind of carbs do they eat? <span class="hljs-string">&quot;
...     &quot;</span>i don<span class="hljs-string">&#x27;t know much about carbs__end__ &quot;
...     &quot;__start__ I&#x27;</span>m <span class="hljs-keyword">not</span> sure.<span class="hljs-string">&quot;
... )
&gt;&gt;&gt; inputs = tokenizer([NEXT_UTTERANCE], return_tensors=&quot;</span>pt<span class="hljs-string">&quot;)
&gt;&gt;&gt; next_reply_ids = model.generate(**inputs)
&gt;&gt;&gt; print(&quot;</span>Bot: <span class="hljs-string">&quot;, tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])
Bot:  they eat a lot of carbs. carbs are high in fat, protein, and fats.</span>`,wrap:!1}}),{c(){t=p("p"),t.textContent=u,n=r(),_(o.$$.fragment)},l(e){t=m(e,"P",{"data-svelte-h":!0}),x(t)!=="svelte-ncurnt"&&(t.textContent=u),n=d(e),g(o.$$.fragment,e)},m(e,h){c(e,t,h),c(e,n,h),b(o,e,h),i=!0},p:be,i(e){i||(y(o.$$.fragment,e),i=!0)},o(e){T(o.$$.fragment,e),i=!1},d(e){e&&(a(t),a(n)),k(o,e)}}}function Wt($){let t,u="Example:",n,o,i;return o=new We({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBCbGVuZGVyYm90U21hbGxGb3JDYXVzYWxMTSUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGYmxlbmRlcmJvdF9zbWFsbC05ME0lMjIpJTBBbW9kZWwlMjAlM0QlMjBCbGVuZGVyYm90U21hbGxGb3JDYXVzYWxMTS5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZibGVuZGVyYm90X3NtYWxsLTkwTSUyMiUyQyUyMGFkZF9jcm9zc19hdHRlbnRpb24lM0RGYWxzZSklMEFhc3NlcnQlMjBtb2RlbC5jb25maWcuaXNfZGVjb2RlciUyQyUyMGYlMjIlN0Jtb2RlbC5fX2NsYXNzX18lN0QlMjBoYXMlMjB0byUyMGJlJTIwY29uZmlndXJlZCUyMGFzJTIwYSUyMGRlY29kZXIuJTIyJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEFsb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cyUwQWV4cGVjdGVkX3NoYXBlJTIwJTNEJTIwJTVCMSUyQyUyMGlucHV0cy5pbnB1dF9pZHMuc2hhcGUlNUItMSU1RCUyQyUyMG1vZGVsLmNvbmZpZy52b2NhYl9zaXplJTVEJTBBbGlzdChsb2dpdHMuc2hhcGUpJTIwJTNEJTNEJTIwZXhwZWN0ZWRfc2hhcGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, BlenderbotSmallForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotSmallForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_shape = [<span class="hljs-number">1</span>, inputs.input_ids.shape[-<span class="hljs-number">1</span>], model.config.vocab_size]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape) == expected_shape
<span class="hljs-literal">True</span>`,wrap:!1}}),{c(){t=p("p"),t.textContent=u,n=r(),_(o.$$.fragment)},l(e){t=m(e,"P",{"data-svelte-h":!0}),x(t)!=="svelte-11lpom8"&&(t.textContent=u),n=d(e),g(o.$$.fragment,e)},m(e,h){c(e,t,h),c(e,n,h),b(o,e,h),i=!0},p:be,i(e){i||(y(o.$$.fragment,e),i=!0)},o(e){T(o.$$.fragment,e),i=!1},d(e){e&&(a(t),a(n)),k(o,e)}}}function Nt($){let t,u,n,o,i,e,h=`The bare BlenderbotSmall Model outputting raw hidden-states without any specific head on top.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,_e,Z,W=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,de,z,I,X,M,N='The <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel">BlenderbotSmallModel</a> forward method, overrides the <code>__call__</code> special method.',ye,E,ve,O,ee,ne,oe,q,ue,G,he,ge=`The BlenderbotSmall Model with a language modeling head. Can be used for summarization.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,D,we,se=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,xe,L,te,U,V,Q='The <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallForConditionalGeneration">BlenderbotSmallForConditionalGeneration</a> forward method, overrides the <code>__call__</code> special method.',le,ie,Be,ce,$e,ae,Te,H,fe,v,B,J,S,R,Fe;return t=new Ze({props:{title:"BlenderbotSmallModel",local:"transformers.BlenderbotSmallModel",headingTag:"h2"}}),o=new K({props:{name:"class transformers.BlenderbotSmallModel",anchor:"transformers.BlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1041"}}),I=new K({props:{name:"forward",anchor:"transformers.BlenderbotSmallModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Union = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>BlenderbotSmall uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BlenderbotSmallModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BlenderbotSmallModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BlenderbotSmallModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BlenderbotSmallModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BlenderbotSmallModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BlenderbotSmallModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotSmallModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotSmallModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1074",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
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
`}}),E=new at({props:{$$slots:{default:[qt]},$$scope:{ctx:$}}}),O=new Ie({props:{anchor:"transformers.BlenderbotSmallModel.forward.example",$$slots:{default:[Gt]},$$scope:{ctx:$}}}),ne=new Ze({props:{title:"BlenderbotSmallForConditionalGeneration",local:"transformers.BlenderbotSmallForConditionalGeneration",headingTag:"h2"}}),ue=new K({props:{name:"class transformers.BlenderbotSmallForConditionalGeneration",anchor:"transformers.BlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1169"}}),te=new K({props:{name:"forward",anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Union = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>BlenderbotSmall uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1213",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
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
`}}),ie=new at({props:{$$slots:{default:[Zt]},$$scope:{ctx:$}}}),ce=new Ie({props:{anchor:"transformers.BlenderbotSmallForConditionalGeneration.forward.example",$$slots:{default:[It]},$$scope:{ctx:$}}}),ae=new Ze({props:{title:"BlenderbotSmallForCausalLM",local:"transformers.BlenderbotSmallForCausalLM",headingTag:"h2"}}),fe=new K({props:{name:"class transformers.BlenderbotSmallForCausalLM",anchor:"transformers.BlenderbotSmallForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1359"}}),J=new K({props:{name:"forward",anchor:"transformers.BlenderbotSmallForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.BlenderbotSmallForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/blenderbot_small/modeling_blenderbot_small.py#L1392",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
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
`}}),R=new Ie({props:{anchor:"transformers.BlenderbotSmallForCausalLM.forward.example",$$slots:{default:[Wt]},$$scope:{ctx:$}}}),{c(){_(t.$$.fragment),u=r(),n=p("div"),_(o.$$.fragment),i=r(),e=p("p"),e.innerHTML=h,_e=r(),Z=p("p"),Z.innerHTML=W,de=r(),z=p("div"),_(I.$$.fragment),X=r(),M=p("p"),M.innerHTML=N,ye=r(),_(E.$$.fragment),ve=r(),_(O.$$.fragment),ee=r(),_(ne.$$.fragment),oe=r(),q=p("div"),_(ue.$$.fragment),G=r(),he=p("p"),he.innerHTML=ge,D=r(),we=p("p"),we.innerHTML=se,xe=r(),L=p("div"),_(te.$$.fragment),U=r(),V=p("p"),V.innerHTML=Q,le=r(),_(ie.$$.fragment),Be=r(),_(ce.$$.fragment),$e=r(),_(ae.$$.fragment),Te=r(),H=p("div"),_(fe.$$.fragment),v=r(),B=p("div"),_(J.$$.fragment),S=r(),_(R.$$.fragment),this.h()},l(f){g(t.$$.fragment,f),u=d(f),n=m(f,"DIV",{class:!0});var C=Y(n);g(o.$$.fragment,C),i=d(C),e=m(C,"P",{"data-svelte-h":!0}),x(e)!=="svelte-1cnei1w"&&(e.innerHTML=h),_e=d(C),Z=m(C,"P",{"data-svelte-h":!0}),x(Z)!=="svelte-hswkmf"&&(Z.innerHTML=W),de=d(C),z=m(C,"DIV",{class:!0});var pe=Y(z);g(I.$$.fragment,pe),X=d(pe),M=m(pe,"P",{"data-svelte-h":!0}),x(M)!=="svelte-1ji4na8"&&(M.innerHTML=N),ye=d(pe),g(E.$$.fragment,pe),ve=d(pe),g(O.$$.fragment,pe),pe.forEach(a),C.forEach(a),ee=d(f),g(ne.$$.fragment,f),oe=d(f),q=m(f,"DIV",{class:!0});var re=Y(q);g(ue.$$.fragment,re),G=d(re),he=m(re,"P",{"data-svelte-h":!0}),x(he)!=="svelte-1d0fncs"&&(he.innerHTML=ge),D=d(re),we=m(re,"P",{"data-svelte-h":!0}),x(we)!=="svelte-hswkmf"&&(we.innerHTML=se),xe=d(re),L=m(re,"DIV",{class:!0});var ke=Y(L);g(te.$$.fragment,ke),U=d(ke),V=m(ke,"P",{"data-svelte-h":!0}),x(V)!=="svelte-1pnwg5e"&&(V.innerHTML=Q),le=d(ke),g(ie.$$.fragment,ke),Be=d(ke),g(ce.$$.fragment,ke),ke.forEach(a),re.forEach(a),$e=d(f),g(ae.$$.fragment,f),Te=d(f),H=m(f,"DIV",{class:!0});var A=Y(H);g(fe.$$.fragment,A),v=d(A),B=m(A,"DIV",{class:!0});var Me=Y(B);g(J.$$.fragment,Me),S=d(Me),g(R.$$.fragment,Me),Me.forEach(a),A.forEach(a),this.h()},h(){P(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),P(n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),P(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),P(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),P(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),P(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(f,C){b(t,f,C),c(f,u,C),c(f,n,C),b(o,n,null),l(n,i),l(n,e),l(n,_e),l(n,Z),l(n,de),l(n,z),b(I,z,null),l(z,X),l(z,M),l(z,ye),b(E,z,null),l(z,ve),b(O,z,null),c(f,ee,C),b(ne,f,C),c(f,oe,C),c(f,q,C),b(ue,q,null),l(q,G),l(q,he),l(q,D),l(q,we),l(q,xe),l(q,L),b(te,L,null),l(L,U),l(L,V),l(L,le),b(ie,L,null),l(L,Be),b(ce,L,null),c(f,$e,C),b(ae,f,C),c(f,Te,C),c(f,H,C),b(fe,H,null),l(H,v),l(H,B),b(J,B,null),l(B,S),b(R,B,null),Fe=!0},p(f,C){const pe={};C&2&&(pe.$$scope={dirty:C,ctx:f}),E.$set(pe);const re={};C&2&&(re.$$scope={dirty:C,ctx:f}),O.$set(re);const ke={};C&2&&(ke.$$scope={dirty:C,ctx:f}),ie.$set(ke);const A={};C&2&&(A.$$scope={dirty:C,ctx:f}),ce.$set(A);const Me={};C&2&&(Me.$$scope={dirty:C,ctx:f}),R.$set(Me)},i(f){Fe||(y(t.$$.fragment,f),y(o.$$.fragment,f),y(I.$$.fragment,f),y(E.$$.fragment,f),y(O.$$.fragment,f),y(ne.$$.fragment,f),y(ue.$$.fragment,f),y(te.$$.fragment,f),y(ie.$$.fragment,f),y(ce.$$.fragment,f),y(ae.$$.fragment,f),y(fe.$$.fragment,f),y(J.$$.fragment,f),y(R.$$.fragment,f),Fe=!0)},o(f){T(t.$$.fragment,f),T(o.$$.fragment,f),T(I.$$.fragment,f),T(E.$$.fragment,f),T(O.$$.fragment,f),T(ne.$$.fragment,f),T(ue.$$.fragment,f),T(te.$$.fragment,f),T(ie.$$.fragment,f),T(ce.$$.fragment,f),T(ae.$$.fragment,f),T(fe.$$.fragment,f),T(J.$$.fragment,f),T(R.$$.fragment,f),Fe=!1},d(f){f&&(a(u),a(n),a(ee),a(oe),a(q),a($e),a(Te),a(H)),k(t,f),k(o),k(I),k(E),k(O),k(ne,f),k(ue),k(te),k(ie),k(ce),k(ae,f),k(fe),k(J),k(R)}}}function Vt($){let t,u;return t=new wt({props:{$$slots:{default:[Nt]},$$scope:{ctx:$}}}),{c(){_(t.$$.fragment)},l(n){g(t.$$.fragment,n)},m(n,o){b(t,n,o),u=!0},p(n,o){const i={};o&2&&(i.$$scope={dirty:o,ctx:n}),t.$set(i)},i(n){u||(y(t.$$.fragment,n),u=!0)},o(n){T(t.$$.fragment,n),u=!1},d(n){k(t,n)}}}function Rt($){let t,u="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",n,o,i="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",e,h,_e=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,Z,W,de=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,z,I,X=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){t=p("p"),t.innerHTML=u,n=r(),o=p("ul"),o.innerHTML=i,e=r(),h=p("p"),h.innerHTML=_e,Z=r(),W=p("ul"),W.innerHTML=de,z=r(),I=p("p"),I.innerHTML=X},l(M){t=m(M,"P",{"data-svelte-h":!0}),x(t)!=="svelte-1ajbfxg"&&(t.innerHTML=u),n=d(M),o=m(M,"UL",{"data-svelte-h":!0}),x(o)!=="svelte-qm1t26"&&(o.innerHTML=i),e=d(M),h=m(M,"P",{"data-svelte-h":!0}),x(h)!=="svelte-1v9qsc5"&&(h.innerHTML=_e),Z=d(M),W=m(M,"UL",{"data-svelte-h":!0}),x(W)!=="svelte-15scerc"&&(W.innerHTML=de),z=d(M),I=m(M,"P",{"data-svelte-h":!0}),x(I)!=="svelte-1an3odd"&&(I.innerHTML=X)},m(M,N){c(M,t,N),c(M,n,N),c(M,o,N),c(M,e,N),c(M,h,N),c(M,Z,N),c(M,W,N),c(M,z,N),c(M,I,N)},p:be,d(M){M&&(a(t),a(n),a(o),a(e),a(h),a(Z),a(W),a(z),a(I))}}}function Xt($){let t,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=p("p"),t.innerHTML=u},l(n){t=m(n,"P",{"data-svelte-h":!0}),x(t)!=="svelte-fincs2"&&(t.innerHTML=u)},m(n,o){c(n,t,o)},p:be,d(n){n&&a(t)}}}function Ht($){let t,u="Example:",n,o,i;return o=new We({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkJsZW5kZXJib3RTbWFsbE1vZGVsJTBBaW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmJsZW5kZXJib3Rfc21hbGwtOTBNJTIyKSUwQW1vZGVsJTIwJTNEJTIwVEZCbGVuZGVyYm90U21hbGxNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZibGVuZGVyYm90X3NtYWxsLTkwTSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIydGYlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKGlucHV0cyklMEElMEFsYXN0X2hpZGRlbl9zdGF0ZXMlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRl",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFBlenderbotSmallModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBlenderbotSmallModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){t=p("p"),t.textContent=u,n=r(),_(o.$$.fragment)},l(e){t=m(e,"P",{"data-svelte-h":!0}),x(t)!=="svelte-11lpom8"&&(t.textContent=u),n=d(e),g(o.$$.fragment,e)},m(e,h){c(e,t,h),c(e,n,h),b(o,e,h),i=!0},p:be,i(e){i||(y(o.$$.fragment,e),i=!0)},o(e){T(o.$$.fragment,e),i=!1},d(e){e&&(a(t),a(n)),k(o,e)}}}function Et($){let t,u="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",n,o,i="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",e,h,_e=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,Z,W,de=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,z,I,X=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){t=p("p"),t.innerHTML=u,n=r(),o=p("ul"),o.innerHTML=i,e=r(),h=p("p"),h.innerHTML=_e,Z=r(),W=p("ul"),W.innerHTML=de,z=r(),I=p("p"),I.innerHTML=X},l(M){t=m(M,"P",{"data-svelte-h":!0}),x(t)!=="svelte-1ajbfxg"&&(t.innerHTML=u),n=d(M),o=m(M,"UL",{"data-svelte-h":!0}),x(o)!=="svelte-qm1t26"&&(o.innerHTML=i),e=d(M),h=m(M,"P",{"data-svelte-h":!0}),x(h)!=="svelte-1v9qsc5"&&(h.innerHTML=_e),Z=d(M),W=m(M,"UL",{"data-svelte-h":!0}),x(W)!=="svelte-15scerc"&&(W.innerHTML=de),z=d(M),I=m(M,"P",{"data-svelte-h":!0}),x(I)!=="svelte-1an3odd"&&(I.innerHTML=X)},m(M,N){c(M,t,N),c(M,n,N),c(M,o,N),c(M,e,N),c(M,h,N),c(M,Z,N),c(M,W,N),c(M,z,N),c(M,I,N)},p:be,d(M){M&&(a(t),a(n),a(o),a(e),a(h),a(Z),a(W),a(z),a(I))}}}function Lt($){let t,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=p("p"),t.innerHTML=u},l(n){t=m(n,"P",{"data-svelte-h":!0}),x(t)!=="svelte-fincs2"&&(t.innerHTML=u)},m(n,o){c(n,t,o)},p:be,d(n){n&&a(t)}}}function Yt($){let t,u="Conversation example::",n,o,i;return o=new We({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkJsZW5kZXJib3RTbWFsbEZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbiUwQSUwQW1uYW1lJTIwJTNEJTIwJTIyZmFjZWJvb2slMkZibGVuZGVyYm90X3NtYWxsLTkwTSUyMiUwQW1vZGVsJTIwJTNEJTIwQmxlbmRlcmJvdFNtYWxsRm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uLmZyb21fcHJldHJhaW5lZChtbmFtZSklMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZChtbmFtZSklMEElMEFVVFRFUkFOQ0UlMjAlM0QlMjAlMjJNeSUyMGZyaWVuZHMlMjBhcmUlMjBjb29sJTIwYnV0JTIwdGhleSUyMGVhdCUyMHRvbyUyMG1hbnklMjBjYXJicy4lMjIlMEFwcmludCglMjJIdW1hbiUzQSUyMCUyMiUyQyUyMFVUVEVSQU5DRSklMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTVCVVRURVJBTkNFJTVEJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiklMEElMEFyZXBseV9pZHMlMjAlM0QlMjBtb2RlbC5nZW5lcmF0ZSgqKmlucHV0cyklMEFwcmludCglMjJCb3QlM0ElMjAlMjIlMkMlMjB0b2tlbml6ZXIuYmF0Y2hfZGVjb2RlKHJlcGx5X2lkcyUyQyUyMHNraXBfc3BlY2lhbF90b2tlbnMlM0RUcnVlKSU1QjAlNUQpJTBBJTBBUkVQTFklMjAlM0QlMjAlMjJJJ20lMjBub3QlMjBzdXJlJTIyJTBBcHJpbnQoJTIySHVtYW4lM0ElMjAlMjIlMkMlMjBSRVBMWSklMEFORVhUX1VUVEVSQU5DRSUyMCUzRCUyMCglMEElMjAlMjAlMjAlMjAlMjJNeSUyMGZyaWVuZHMlMjBhcmUlMjBjb29sJTIwYnV0JTIwdGhleSUyMGVhdCUyMHRvbyUyMG1hbnklMjBjYXJicy4lM0MlMkZzJTNFJTIwJTIyJTBBJTIwJTIwJTIwJTIwJTIyJTNDcyUzRXdoYXQlMjBraW5kJTIwb2YlMjBjYXJicyUyMGRvJTIwdGhleSUyMGVhdCUzRiUyMGklMjBkb24ndCUyMGtub3clMjBtdWNoJTIwYWJvdXQlMjBjYXJicy4lM0MlMkZzJTNFJTIwJTIyJTBBJTIwJTIwJTIwJTIwJTIyJTNDcyUzRUknbSUyMG5vdCUyMHN1cmUuJTIyJTBBKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglNUJORVhUX1VUVEVSQU5DRSU1RCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIydGYlMjIpJTBBaW5wdXRzLnBvcCglMjJ0b2tlbl90eXBlX2lkcyUyMiklMEFuZXh0X3JlcGx5X2lkcyUyMCUzRCUyMG1vZGVsLmdlbmVyYXRlKCoqaW5wdXRzKSUwQXByaW50KCUyMkJvdCUzQSUyMCUyMiUyQyUyMHRva2VuaXplci5iYXRjaF9kZWNvZGUobmV4dF9yZXBseV9pZHMlMkMlMjBza2lwX3NwZWNpYWxfdG9rZW5zJTNEVHJ1ZSklNUIwJTVEKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>mname = <span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BlenderbotSmallForConditionalGeneration.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(mname)

<span class="hljs-meta">&gt;&gt;&gt; </span>UTTERANCE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Human: &quot;</span>, UTTERANCE)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([UTTERANCE], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>reply_ids = model.generate(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Bot: &quot;</span>, tokenizer.batch_decode(reply_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>])
what kind of carbs do they eat? i don<span class="hljs-string">&#x27;t know much about carbs.

&gt;&gt;&gt; REPLY = &quot;I&#x27;</span>m <span class="hljs-keyword">not</span> sure<span class="hljs-string">&quot;
&gt;&gt;&gt; print(&quot;</span>Human: <span class="hljs-string">&quot;, REPLY)
&gt;&gt;&gt; NEXT_UTTERANCE = (
...     &quot;</span>My friends are cool but they eat too many carbs.&lt;/s&gt; <span class="hljs-string">&quot;
...     &quot;</span>&lt;s&gt;what kind of carbs do they eat? i don<span class="hljs-string">&#x27;t know much about carbs.&lt;/s&gt; &quot;
...     &quot;&lt;s&gt;I&#x27;</span>m <span class="hljs-keyword">not</span> sure.<span class="hljs-string">&quot;
... )

&gt;&gt;&gt; inputs = tokenizer([NEXT_UTTERANCE], return_tensors=&quot;</span>t<span class="hljs-string">f&quot;)
&gt;&gt;&gt; inputs.pop(&quot;</span>token_type_ids<span class="hljs-string">&quot;)
&gt;&gt;&gt; next_reply_ids = model.generate(**inputs)
&gt;&gt;&gt; print(&quot;</span>Bot: <span class="hljs-string">&quot;, tokenizer.batch_decode(next_reply_ids, skip_special_tokens=True)[0])</span>`,wrap:!1}}),{c(){t=p("p"),t.textContent=u,n=r(),_(o.$$.fragment)},l(e){t=m(e,"P",{"data-svelte-h":!0}),x(t)!=="svelte-1tzd5rn"&&(t.textContent=u),n=d(e),g(o.$$.fragment,e)},m(e,h){c(e,t,h),c(e,n,h),b(o,e,h),i=!0},p:be,i(e){i||(y(o.$$.fragment,e),i=!0)},o(e){T(o.$$.fragment,e),i=!1},d(e){e&&(a(t),a(n)),k(o,e)}}}function Pt($){let t,u,n,o,i,e,h=`The bare BLENDERBOT_SMALL Model outputting raw hidden-states without any specific head on top.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,_e,Z,W=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,de,z,I,X,M,N,ye,E='The <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallModel">TFBlenderbotSmallModel</a> forward method, overrides the <code>__call__</code> special method.',ve,O,ee,ne,oe,q,ue,G,he,ge,D,we=`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,se,xe,L=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,te,U,V,Q,le,ie,Be,ce='The <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallForConditionalGeneration">TFBlenderbotSmallForConditionalGeneration</a> forward method, overrides the <code>__call__</code> special method.',$e,ae,Te,H,fe;return t=new Ze({props:{title:"TFBlenderbotSmallModel",local:"transformers.TFBlenderbotSmallModel",headingTag:"h2"}}),o=new K({props:{name:"class transformers.TFBlenderbotSmallModel",anchor:"transformers.TFBlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1218"}}),z=new at({props:{$$slots:{default:[Rt]},$$scope:{ctx:$}}}),M=new K({props:{name:"call",anchor:"transformers.TFBlenderbotSmallModel.call",parameters:[{name:"input_ids",val:": tf.Tensor | None = None"},{name:"attention_mask",val:": tf.Tensor | None = None"},{name:"decoder_input_ids",val:": tf.Tensor | None = None"},{name:"decoder_attention_mask",val:": tf.Tensor | None = None"},{name:"decoder_position_ids",val:": tf.Tensor | None = None"},{name:"head_mask",val:": tf.Tensor | None = None"},{name:"decoder_head_mask",val:": tf.Tensor | None = None"},{name:"cross_attn_head_mask",val:": tf.Tensor | None = None"},{name:"encoder_outputs",val:": Optional[Union[Tuple, TFBaseModelOutput]] = None"},{name:"past_key_values",val:": List[tf.Tensor] | None = None"},{name:"inputs_embeds",val:": tf.Tensor | None = None"},{name:"decoder_inputs_embeds",val:": tf.Tensor | None = None"},{name:"use_cache",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotSmallModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>BlenderbotSmall uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFBlenderbotSmallModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.TFBlenderbotSmallModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFBlenderbotSmallModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFBlenderbotSmallModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBlenderbotSmallModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBlenderbotSmallModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBlenderbotSmallModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBlenderbotSmallModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotSmallModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1234",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
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
`}}),O=new at({props:{$$slots:{default:[Xt]},$$scope:{ctx:$}}}),ne=new Ie({props:{anchor:"transformers.TFBlenderbotSmallModel.call.example",$$slots:{default:[Ht]},$$scope:{ctx:$}}}),q=new Ze({props:{title:"TFBlenderbotSmallForConditionalGeneration",local:"transformers.TFBlenderbotSmallForConditionalGeneration",headingTag:"h2"}}),he=new K({props:{name:"class transformers.TFBlenderbotSmallForConditionalGeneration",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1331"}}),U=new at({props:{$$slots:{default:[Et]},$$scope:{ctx:$}}}),le=new K({props:{name:"call",anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call",parameters:[{name:"input_ids",val:": tf.Tensor | None = None"},{name:"attention_mask",val:": tf.Tensor | None = None"},{name:"decoder_input_ids",val:": tf.Tensor | None = None"},{name:"decoder_attention_mask",val:": tf.Tensor | None = None"},{name:"decoder_position_ids",val:": tf.Tensor | None = None"},{name:"head_mask",val:": tf.Tensor | None = None"},{name:"decoder_head_mask",val:": tf.Tensor | None = None"},{name:"cross_attn_head_mask",val:": tf.Tensor | None = None"},{name:"encoder_outputs",val:": Optional[TFBaseModelOutput] = None"},{name:"past_key_values",val:": List[tf.Tensor] | None = None"},{name:"inputs_embeds",val:": tf.Tensor | None = None"},{name:"decoder_inputs_embeds",val:": tf.Tensor | None = None"},{name:"use_cache",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>BlenderbotSmall uses the <code>bos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/blenderbot_small/modeling_tf_blenderbot_small.py#L1373",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
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
`}}),ae=new at({props:{$$slots:{default:[Lt]},$$scope:{ctx:$}}}),H=new Ie({props:{anchor:"transformers.TFBlenderbotSmallForConditionalGeneration.call.example",$$slots:{default:[Yt]},$$scope:{ctx:$}}}),{c(){_(t.$$.fragment),u=r(),n=p("div"),_(o.$$.fragment),i=r(),e=p("p"),e.innerHTML=h,_e=r(),Z=p("p"),Z.innerHTML=W,de=r(),_(z.$$.fragment),I=r(),X=p("div"),_(M.$$.fragment),N=r(),ye=p("p"),ye.innerHTML=E,ve=r(),_(O.$$.fragment),ee=r(),_(ne.$$.fragment),oe=r(),_(q.$$.fragment),ue=r(),G=p("div"),_(he.$$.fragment),ge=r(),D=p("p"),D.innerHTML=we,se=r(),xe=p("p"),xe.innerHTML=L,te=r(),_(U.$$.fragment),V=r(),Q=p("div"),_(le.$$.fragment),ie=r(),Be=p("p"),Be.innerHTML=ce,$e=r(),_(ae.$$.fragment),Te=r(),_(H.$$.fragment),this.h()},l(v){g(t.$$.fragment,v),u=d(v),n=m(v,"DIV",{class:!0});var B=Y(n);g(o.$$.fragment,B),i=d(B),e=m(B,"P",{"data-svelte-h":!0}),x(e)!=="svelte-1aam0ub"&&(e.innerHTML=h),_e=d(B),Z=m(B,"P",{"data-svelte-h":!0}),x(Z)!=="svelte-1be7e3c"&&(Z.innerHTML=W),de=d(B),g(z.$$.fragment,B),I=d(B),X=m(B,"DIV",{class:!0});var J=Y(X);g(M.$$.fragment,J),N=d(J),ye=m(J,"P",{"data-svelte-h":!0}),x(ye)!=="svelte-1gcdg3g"&&(ye.innerHTML=E),ve=d(J),g(O.$$.fragment,J),ee=d(J),g(ne.$$.fragment,J),J.forEach(a),B.forEach(a),oe=d(v),g(q.$$.fragment,v),ue=d(v),G=m(v,"DIV",{class:!0});var S=Y(G);g(he.$$.fragment,S),ge=d(S),D=m(S,"P",{"data-svelte-h":!0}),x(D)!=="svelte-1n8bbc5"&&(D.innerHTML=we),se=d(S),xe=m(S,"P",{"data-svelte-h":!0}),x(xe)!=="svelte-1be7e3c"&&(xe.innerHTML=L),te=d(S),g(U.$$.fragment,S),V=d(S),Q=m(S,"DIV",{class:!0});var R=Y(Q);g(le.$$.fragment,R),ie=d(R),Be=m(R,"P",{"data-svelte-h":!0}),x(Be)!=="svelte-1iw6c6q"&&(Be.innerHTML=ce),$e=d(R),g(ae.$$.fragment,R),Te=d(R),g(H.$$.fragment,R),R.forEach(a),S.forEach(a),this.h()},h(){P(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),P(n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),P(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),P(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(v,B){b(t,v,B),c(v,u,B),c(v,n,B),b(o,n,null),l(n,i),l(n,e),l(n,_e),l(n,Z),l(n,de),b(z,n,null),l(n,I),l(n,X),b(M,X,null),l(X,N),l(X,ye),l(X,ve),b(O,X,null),l(X,ee),b(ne,X,null),c(v,oe,B),b(q,v,B),c(v,ue,B),c(v,G,B),b(he,G,null),l(G,ge),l(G,D),l(G,se),l(G,xe),l(G,te),b(U,G,null),l(G,V),l(G,Q),b(le,Q,null),l(Q,ie),l(Q,Be),l(Q,$e),b(ae,Q,null),l(Q,Te),b(H,Q,null),fe=!0},p(v,B){const J={};B&2&&(J.$$scope={dirty:B,ctx:v}),z.$set(J);const S={};B&2&&(S.$$scope={dirty:B,ctx:v}),O.$set(S);const R={};B&2&&(R.$$scope={dirty:B,ctx:v}),ne.$set(R);const Fe={};B&2&&(Fe.$$scope={dirty:B,ctx:v}),U.$set(Fe);const f={};B&2&&(f.$$scope={dirty:B,ctx:v}),ae.$set(f);const C={};B&2&&(C.$$scope={dirty:B,ctx:v}),H.$set(C)},i(v){fe||(y(t.$$.fragment,v),y(o.$$.fragment,v),y(z.$$.fragment,v),y(M.$$.fragment,v),y(O.$$.fragment,v),y(ne.$$.fragment,v),y(q.$$.fragment,v),y(he.$$.fragment,v),y(U.$$.fragment,v),y(le.$$.fragment,v),y(ae.$$.fragment,v),y(H.$$.fragment,v),fe=!0)},o(v){T(t.$$.fragment,v),T(o.$$.fragment,v),T(z.$$.fragment,v),T(M.$$.fragment,v),T(O.$$.fragment,v),T(ne.$$.fragment,v),T(q.$$.fragment,v),T(he.$$.fragment,v),T(U.$$.fragment,v),T(le.$$.fragment,v),T(ae.$$.fragment,v),T(H.$$.fragment,v),fe=!1},d(v){v&&(a(u),a(n),a(oe),a(ue),a(G)),k(t,v),k(o),k(z),k(M),k(O),k(ne),k(q,v),k(he),k(U),k(le),k(ae),k(H)}}}function Qt($){let t,u;return t=new wt({props:{$$slots:{default:[Pt]},$$scope:{ctx:$}}}),{c(){_(t.$$.fragment)},l(n){g(t.$$.fragment,n)},m(n,o){b(t,n,o),u=!0},p(n,o){const i={};o&2&&(i.$$scope={dirty:o,ctx:n}),t.$set(i)},i(n){u||(y(t.$$.fragment,n),u=!0)},o(n){T(t.$$.fragment,n),u=!1},d(n){k(t,n)}}}function At($){let t,u="Example:",n,o,i;return o=new We({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4QmxlbmRlcmJvdFNtYWxsTW9kZWwlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmJsZW5kZXJib3Rfc21hbGwtOTBNJTIyKSUwQW1vZGVsJTIwJTNEJTIwRmxheEJsZW5kZXJib3RTbWFsbE1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmJsZW5kZXJib3Rfc21hbGwtOTBNJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJqYXglMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQWxhc3RfaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxBlenderbotSmallModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallModel.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){t=p("p"),t.textContent=u,n=r(),_(o.$$.fragment)},l(e){t=m(e,"P",{"data-svelte-h":!0}),x(t)!=="svelte-11lpom8"&&(t.textContent=u),n=d(e),g(o.$$.fragment,e)},m(e,h){c(e,t,h),c(e,n,h),b(o,e,h),i=!0},p:be,i(e){i||(y(o.$$.fragment,e),i=!0)},o(e){T(o.$$.fragment,e),i=!1},d(e){e&&(a(t),a(n)),k(o,e)}}}function Ot($){let t,u="Example:",n,o,i;return o=new We({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4QmxlbmRlcmJvdFNtYWxsRm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uJTBBJTBBbW9kZWwlMjAlM0QlMjBGbGF4QmxlbmRlcmJvdFNtYWxsRm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmJsZW5kZXJib3Rfc21hbGwtOTBNJTIyKSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGYmxlbmRlcmJvdF9zbWFsbC05ME0lMjIpJTBBJTBBdGV4dCUyMCUzRCUyMCUyMk15JTIwZnJpZW5kcyUyMGFyZSUyMGNvb2wlMjBidXQlMjB0aGV5JTIwZWF0JTIwdG9vJTIwbWFueSUyMGNhcmJzLiUyMiUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplcih0ZXh0JTJDJTIwbWF4X2xlbmd0aCUzRDEwMjQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMm5wJTIyKSUwQWVuY29kZXJfb3V0cHV0cyUyMCUzRCUyMG1vZGVsLmVuY29kZSgqKmlucHV0cyk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`,wrap:!1}}),{c(){t=p("p"),t.textContent=u,n=r(),_(o.$$.fragment)},l(e){t=m(e,"P",{"data-svelte-h":!0}),x(t)!=="svelte-11lpom8"&&(t.textContent=u),n=d(e),g(o.$$.fragment,e)},m(e,h){c(e,t,h),c(e,n,h),b(o,e,h),i=!0},p:be,i(e){i||(y(o.$$.fragment,e),i=!0)},o(e){T(o.$$.fragment,e),i=!1},d(e){e&&(a(t),a(n)),k(o,e)}}}function Dt($){let t,u="Example:",n,o,i;return o=new We({props:{code:"aW1wb3J0JTIwamF4Lm51bXB5JTIwYXMlMjBqbnAlMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEZsYXhCbGVuZGVyYm90U21hbGxGb3JDb25kaXRpb25hbEdlbmVyYXRpb24lMEElMEFtb2RlbCUyMCUzRCUyMEZsYXhCbGVuZGVyYm90U21hbGxGb3JDb25kaXRpb25hbEdlbmVyYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGYmxlbmRlcmJvdF9zbWFsbC05ME0lMjIpJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZibGVuZGVyYm90X3NtYWxsLTkwTSUyMiklMEElMEF0ZXh0JTIwJTNEJTIwJTIyTXklMjBmcmllbmRzJTIwYXJlJTIwY29vbCUyMGJ1dCUyMHRoZXklMjBlYXQlMjB0b28lMjBtYW55JTIwY2FyYnMuJTIyJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKHRleHQlMkMlMjBtYXhfbGVuZ3RoJTNEMTAyNCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIybnAlMjIpJTBBZW5jb2Rlcl9vdXRwdXRzJTIwJTNEJTIwbW9kZWwuZW5jb2RlKCoqaW5wdXRzKSUwQSUwQWRlY29kZXJfc3RhcnRfdG9rZW5faWQlMjAlM0QlMjBtb2RlbC5jb25maWcuZGVjb2Rlcl9zdGFydF90b2tlbl9pZCUwQWRlY29kZXJfaW5wdXRfaWRzJTIwJTNEJTIwam5wLm9uZXMoKGlucHV0cy5pbnB1dF9pZHMuc2hhcGUlNUIwJTVEJTJDJTIwMSklMkMlMjBkdHlwZSUzRCUyMmk0JTIyKSUyMColMjBkZWNvZGVyX3N0YXJ0X3Rva2VuX2lkJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsLmRlY29kZShkZWNvZGVyX2lucHV0X2lkcyUyQyUyMGVuY29kZXJfb3V0cHV0cyklMEFsYXN0X2RlY29kZXJfaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_decoder_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){t=p("p"),t.textContent=u,n=r(),_(o.$$.fragment)},l(e){t=m(e,"P",{"data-svelte-h":!0}),x(t)!=="svelte-11lpom8"&&(t.textContent=u),n=d(e),g(o.$$.fragment,e)},m(e,h){c(e,t,h),c(e,n,h),b(o,e,h),i=!0},p:be,i(e){i||(y(o.$$.fragment,e),i=!0)},o(e){T(o.$$.fragment,e),i=!1},d(e){e&&(a(t),a(n)),k(o,e)}}}function Kt($){let t,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=p("p"),t.innerHTML=u},l(n){t=m(n,"P",{"data-svelte-h":!0}),x(t)!=="svelte-fincs2"&&(t.innerHTML=u)},m(n,o){c(n,t,o)},p:be,d(n){n&&a(t)}}}function en($){let t,u="Summarization example:",n,o,i;return o=new We({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4QmxlbmRlcmJvdFNtYWxsRm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uJTBBJTBBbW9kZWwlMjAlM0QlMjBGbGF4QmxlbmRlcmJvdFNtYWxsRm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmJsZW5kZXJib3Rfc21hbGwtOTBNJTIyKSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGYmxlbmRlcmJvdF9zbWFsbC05ME0lMjIpJTBBJTBBQVJUSUNMRV9UT19TVU1NQVJJWkUlMjAlM0QlMjAlMjJNeSUyMGZyaWVuZHMlMjBhcmUlMjBjb29sJTIwYnV0JTIwdGhleSUyMGVhdCUyMHRvbyUyMG1hbnklMjBjYXJicy4lMjIlMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTVCQVJUSUNMRV9UT19TVU1NQVJJWkUlNUQlMkMlMjBtYXhfbGVuZ3RoJTNEMTAyNCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIybnAlMjIpJTBBJTBBJTIzJTIwR2VuZXJhdGUlMjBTdW1tYXJ5JTBBc3VtbWFyeV9pZHMlMjAlM0QlMjBtb2RlbC5nZW5lcmF0ZShpbnB1dHMlNUIlMjJpbnB1dF9pZHMlMjIlNUQpLnNlcXVlbmNlcyUwQXByaW50KHRva2VuaXplci5iYXRjaF9kZWNvZGUoc3VtbWFyeV9pZHMlMkMlMjBza2lwX3NwZWNpYWxfdG9rZW5zJTNEVHJ1ZSUyQyUyMGNsZWFuX3VwX3Rva2VuaXphdGlvbl9zcGFjZXMlM0RGYWxzZSkp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([ARTICLE_TO_SUMMARIZE], max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]).sequences
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(summary_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>))`,wrap:!1}}),{c(){t=p("p"),t.textContent=u,n=r(),_(o.$$.fragment)},l(e){t=m(e,"P",{"data-svelte-h":!0}),x(t)!=="svelte-4eu60v"&&(t.textContent=u),n=d(e),g(o.$$.fragment,e)},m(e,h){c(e,t,h),c(e,n,h),b(o,e,h),i=!0},p:be,i(e){i||(y(o.$$.fragment,e),i=!0)},o(e){T(o.$$.fragment,e),i=!1},d(e){e&&(a(t),a(n)),k(o,e)}}}function tn($){let t,u="Mask filling example:",n,o,i;return o=new We({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4QmxlbmRlcmJvdFNtYWxsRm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZibGVuZGVyYm90X3NtYWxsLTkwTSUyMiklMEFUWFQlMjAlM0QlMjAlMjJNeSUyMGZyaWVuZHMlMjBhcmUlMjAlM0NtYXNrJTNFJTIwYnV0JTIwdGhleSUyMGVhdCUyMHRvbyUyMG1hbnklMjBjYXJicy4lMjIlMEElMEFtb2RlbCUyMCUzRCUyMEZsYXhCbGVuZGVyYm90U21hbGxGb3JDb25kaXRpb25hbEdlbmVyYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGYmxlbmRlcmJvdF9zbWFsbC05ME0lMjIpJTBBaW5wdXRfaWRzJTIwJTNEJTIwdG9rZW5pemVyKCU1QlRYVCU1RCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIybnAlMjIpJTVCJTIyaW5wdXRfaWRzJTIyJTVEJTBBbG9naXRzJTIwJTNEJTIwbW9kZWwoaW5wdXRfaWRzKS5sb2dpdHMlMEElMEFtYXNrZWRfaW5kZXglMjAlM0QlMjAoaW5wdXRfaWRzJTVCMCU1RCUyMCUzRCUzRCUyMHRva2VuaXplci5tYXNrX3Rva2VuX2lkKS5ub256ZXJvKCkuaXRlbSgpJTBBcHJvYnMlMjAlM0QlMjBqYXgubm4uc29mdG1heChsb2dpdHMlNUIwJTJDJTIwbWFza2VkX2luZGV4JTVEJTJDJTIwYXhpcyUzRDApJTBBdmFsdWVzJTJDJTIwcHJlZGljdGlvbnMlMjAlM0QlMjBqYXgubGF4LnRvcF9rKHByb2JzKSUwQSUwQXRva2VuaXplci5kZWNvZGUocHJlZGljdGlvbnMpLnNwbGl0KCk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;np&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(input_ids).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = jax.nn.softmax(logits[<span class="hljs-number">0</span>, masked_index], axis=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = jax.lax.top_k(probs)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predictions).split()`,wrap:!1}}),{c(){t=p("p"),t.textContent=u,n=r(),_(o.$$.fragment)},l(e){t=m(e,"P",{"data-svelte-h":!0}),x(t)!=="svelte-1p9uukt"&&(t.textContent=u),n=d(e),g(o.$$.fragment,e)},m(e,h){c(e,t,h),c(e,n,h),b(o,e,h),i=!0},p:be,i(e){i||(y(o.$$.fragment,e),i=!0)},o(e){T(o.$$.fragment,e),i=!1},d(e){e&&(a(t),a(n)),k(o,e)}}}function nn($){let t,u="Example:",n,o,i;return o=new We({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4QmxlbmRlcmJvdFNtYWxsRm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uJTBBJTBBbW9kZWwlMjAlM0QlMjBGbGF4QmxlbmRlcmJvdFNtYWxsRm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmJsZW5kZXJib3Rfc21hbGwtOTBNJTIyKSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGYmxlbmRlcmJvdF9zbWFsbC05ME0lMjIpJTBBJTBBdGV4dCUyMCUzRCUyMCUyMk15JTIwZnJpZW5kcyUyMGFyZSUyMGNvb2wlMjBidXQlMjB0aGV5JTIwZWF0JTIwdG9vJTIwbWFueSUyMGNhcmJzLiUyMiUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplcih0ZXh0JTJDJTIwbWF4X2xlbmd0aCUzRDEwMjQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMm5wJTIyKSUwQWVuY29kZXJfb3V0cHV0cyUyMCUzRCUyMG1vZGVsLmVuY29kZSgqKmlucHV0cyk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)`,wrap:!1}}),{c(){t=p("p"),t.textContent=u,n=r(),_(o.$$.fragment)},l(e){t=m(e,"P",{"data-svelte-h":!0}),x(t)!=="svelte-11lpom8"&&(t.textContent=u),n=d(e),g(o.$$.fragment,e)},m(e,h){c(e,t,h),c(e,n,h),b(o,e,h),i=!0},p:be,i(e){i||(y(o.$$.fragment,e),i=!0)},o(e){T(o.$$.fragment,e),i=!1},d(e){e&&(a(t),a(n)),k(o,e)}}}function on($){let t,u="Example:",n,o,i;return o=new We({props:{code:"aW1wb3J0JTIwamF4Lm51bXB5JTIwYXMlMjBqbnAlMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEZsYXhCbGVuZGVyYm90U21hbGxGb3JDb25kaXRpb25hbEdlbmVyYXRpb24lMEElMEFtb2RlbCUyMCUzRCUyMEZsYXhCbGVuZGVyYm90U21hbGxGb3JDb25kaXRpb25hbEdlbmVyYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGYmxlbmRlcmJvdF9zbWFsbC05ME0lMjIpJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZibGVuZGVyYm90X3NtYWxsLTkwTSUyMiklMEElMEF0ZXh0JTIwJTNEJTIwJTIyTXklMjBmcmllbmRzJTIwYXJlJTIwY29vbCUyMGJ1dCUyMHRoZXklMjBlYXQlMjB0b28lMjBtYW55JTIwY2FyYnMuJTIyJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKHRleHQlMkMlMjBtYXhfbGVuZ3RoJTNEMTAyNCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIybnAlMjIpJTBBZW5jb2Rlcl9vdXRwdXRzJTIwJTNEJTIwbW9kZWwuZW5jb2RlKCoqaW5wdXRzKSUwQSUwQWRlY29kZXJfc3RhcnRfdG9rZW5faWQlMjAlM0QlMjBtb2RlbC5jb25maWcuZGVjb2Rlcl9zdGFydF90b2tlbl9pZCUwQWRlY29kZXJfaW5wdXRfaWRzJTIwJTNEJTIwam5wLm9uZXMoKGlucHV0cy5pbnB1dF9pZHMuc2hhcGUlNUIwJTVEJTJDJTIwMSklMkMlMjBkdHlwZSUzRCUyMmk0JTIyKSUyMColMjBkZWNvZGVyX3N0YXJ0X3Rva2VuX2lkJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsLmRlY29kZShkZWNvZGVyX2lucHV0X2lkcyUyQyUyMGVuY29kZXJfb3V0cHV0cyklMEFsb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> jax.numpy <span class="hljs-keyword">as</span> jnp
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxBlenderbotSmallForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBlenderbotSmallForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/blenderbot_small-90M&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, max_length=<span class="hljs-number">1024</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_outputs = model.encode(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_start_token_id = model.config.decoder_start_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = jnp.ones((inputs.input_ids.shape[<span class="hljs-number">0</span>], <span class="hljs-number">1</span>), dtype=<span class="hljs-string">&quot;i4&quot;</span>) * decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.decode(decoder_input_ids, encoder_outputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){t=p("p"),t.textContent=u,n=r(),_(o.$$.fragment)},l(e){t=m(e,"P",{"data-svelte-h":!0}),x(t)!=="svelte-11lpom8"&&(t.textContent=u),n=d(e),g(o.$$.fragment,e)},m(e,h){c(e,t,h),c(e,n,h),b(o,e,h),i=!0},p:be,i(e){i||(y(o.$$.fragment,e),i=!0)},o(e){T(o.$$.fragment,e),i=!1},d(e){e&&(a(t),a(n)),k(o,e)}}}function sn($){let t,u,n,o,i,e,h=`The bare BlenderbotSmall Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,_e,Z,W=`This model is also a Flax Linen
<a href="https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html" rel="nofollow">flax.nn.Module</a> subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`,de,z,I="Finally, this model supports inherent JAX features such as:",X,M,N='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',ye,E,ve,O,ee,ne,oe,q,ue,G,he,ge,D,we,se,xe,L,te,U,V,Q,le,ie=`The BLENDERBOT_SMALL Model with a language modeling head. Can be used for summarization.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Be,ce,$e=`This model is also a Flax Linen
<a href="https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html" rel="nofollow">flax.nn.Module</a> subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`,ae,Te,H="Finally, this model supports inherent JAX features such as:",fe,v,B='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',J,S,R,Fe,f,C="The <code>FlaxBlenderbotSmallPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",pe,re,ke,A,Me,Ne,Ye,Ve,Re,Pe,Xe,De,je,Ce,Ke,Se,et;return t=new Ze({props:{title:"FlaxBlenderbotSmallModel",local:"transformers.FlaxBlenderbotSmallModel",headingTag:"h2"}}),o=new K({props:{name:"class transformers.FlaxBlenderbotSmallModel",anchor:"transformers.FlaxBlenderbotSmallModel",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1209"}}),ve=new K({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotSmallModel.__call__",parameters:[{name:"input_ids",val:": Array"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"decoder_position_ids",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1149",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ee=new Ie({props:{anchor:"transformers.FlaxBlenderbotSmallModel.__call__.example",$$slots:{default:[At]},$$scope:{ctx:$}}}),q=new K({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallModel.encode",parameters:[{name:"input_ids",val:": Array"},{name:"attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotSmallModel.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallModel.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotSmallModel.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallModel.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallModel.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L970",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot_small.configuration_blenderbot_small.BlenderbotSmallConfig'&gt;</code>) and inputs.</p>
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
`}}),G=new Ie({props:{anchor:"transformers.FlaxBlenderbotSmallModel.encode.example",$$slots:{default:[Ot]},$$scope:{ctx:$}}}),D=new K({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallModel.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"decoder_position_ids",val:": Optional = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallModel.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallModel.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1033",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot_small.configuration_blenderbot_small.BlenderbotSmallConfig'&gt;</code>) and inputs.</p>
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
`}}),se=new Ie({props:{anchor:"transformers.FlaxBlenderbotSmallModel.decode.example",$$slots:{default:[Dt]},$$scope:{ctx:$}}}),L=new Ze({props:{title:"FlaxBlenderbotForConditionalGeneration",local:"transformers.FlaxBlenderbotSmallForConditionalGeneration",headingTag:"h2"}}),V=new K({props:{name:"class transformers.FlaxBlenderbotSmallForConditionalGeneration",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration",parameters:[{name:"config",val:": BlenderbotSmallConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig">BlenderbotSmallConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1295"}}),R=new K({props:{name:"__call__",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__",parameters:[{name:"input_ids",val:": Array"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"decoder_position_ids",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1149",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallConfig"
>BlenderbotSmallConfig</a>) and inputs.</p>
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
`}}),re=new at({props:{$$slots:{default:[Kt]},$$scope:{ctx:$}}}),A=new Ie({props:{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.example",$$slots:{default:[en]},$$scope:{ctx:$}}}),Ne=new Ie({props:{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.__call__.example-2",$$slots:{default:[tn]},$$scope:{ctx:$}}}),Re=new K({props:{name:"encode",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode",parameters:[{name:"input_ids",val:": Array"},{name:"attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L970",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot_small.configuration_blenderbot_small.BlenderbotSmallConfig'&gt;</code>) and inputs.</p>
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
`}}),Xe=new Ie({props:{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.encode.example",$$slots:{default:[nn]},$$scope:{ctx:$}}}),Ce=new K({props:{name:"decode",anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode",parameters:[{name:"decoder_input_ids",val:""},{name:"encoder_outputs",val:""},{name:"encoder_attention_mask",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"decoder_position_ids",val:": Optional = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"deterministic",val:": bool = True"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(jnp.ndarray)</code>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"encoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/blenderbot_small/modeling_flax_blenderbot_small.py#L1303",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<code>&lt;class 'transformers.models.blenderbot_small.configuration_blenderbot_small.BlenderbotSmallConfig'&gt;</code>) and inputs.</p>
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
`}}),Se=new Ie({props:{anchor:"transformers.FlaxBlenderbotSmallForConditionalGeneration.decode.example",$$slots:{default:[on]},$$scope:{ctx:$}}}),{c(){_(t.$$.fragment),u=r(),n=p("div"),_(o.$$.fragment),i=r(),e=p("p"),e.innerHTML=h,_e=r(),Z=p("p"),Z.innerHTML=W,de=r(),z=p("p"),z.textContent=I,X=r(),M=p("ul"),M.innerHTML=N,ye=r(),E=p("div"),_(ve.$$.fragment),O=r(),_(ee.$$.fragment),ne=r(),oe=p("div"),_(q.$$.fragment),ue=r(),_(G.$$.fragment),he=r(),ge=p("div"),_(D.$$.fragment),we=r(),_(se.$$.fragment),xe=r(),_(L.$$.fragment),te=r(),U=p("div"),_(V.$$.fragment),Q=r(),le=p("p"),le.innerHTML=ie,Be=r(),ce=p("p"),ce.innerHTML=$e,ae=r(),Te=p("p"),Te.textContent=H,fe=r(),v=p("ul"),v.innerHTML=B,J=r(),S=p("div"),_(R.$$.fragment),Fe=r(),f=p("p"),f.innerHTML=C,pe=r(),_(re.$$.fragment),ke=r(),_(A.$$.fragment),Me=r(),_(Ne.$$.fragment),Ye=r(),Ve=p("div"),_(Re.$$.fragment),Pe=r(),_(Xe.$$.fragment),De=r(),je=p("div"),_(Ce.$$.fragment),Ke=r(),_(Se.$$.fragment),this.h()},l(w){g(t.$$.fragment,w),u=d(w),n=m(w,"DIV",{class:!0});var F=Y(n);g(o.$$.fragment,F),i=d(F),e=m(F,"P",{"data-svelte-h":!0}),x(e)!=="svelte-1uea2st"&&(e.innerHTML=h),_e=d(F),Z=m(F,"P",{"data-svelte-h":!0}),x(Z)!=="svelte-idybz1"&&(Z.innerHTML=W),de=d(F),z=m(F,"P",{"data-svelte-h":!0}),x(z)!=="svelte-1pplc4a"&&(z.textContent=I),X=d(F),M=m(F,"UL",{"data-svelte-h":!0}),x(M)!=="svelte-1w7z84m"&&(M.innerHTML=N),ye=d(F),E=m(F,"DIV",{class:!0});var Ue=Y(E);g(ve.$$.fragment,Ue),O=d(Ue),g(ee.$$.fragment,Ue),Ue.forEach(a),ne=d(F),oe=m(F,"DIV",{class:!0});var He=Y(oe);g(q.$$.fragment,He),ue=d(He),g(G.$$.fragment,He),He.forEach(a),he=d(F),ge=m(F,"DIV",{class:!0});var qe=Y(ge);g(D.$$.fragment,qe),we=d(qe),g(se.$$.fragment,qe),qe.forEach(a),F.forEach(a),xe=d(w),g(L.$$.fragment,w),te=d(w),U=m(w,"DIV",{class:!0});var me=Y(U);g(V.$$.fragment,me),Q=d(me),le=m(me,"P",{"data-svelte-h":!0}),x(le)!=="svelte-1evqd2p"&&(le.innerHTML=ie),Be=d(me),ce=m(me,"P",{"data-svelte-h":!0}),x(ce)!=="svelte-idybz1"&&(ce.innerHTML=$e),ae=d(me),Te=m(me,"P",{"data-svelte-h":!0}),x(Te)!=="svelte-1pplc4a"&&(Te.textContent=H),fe=d(me),v=m(me,"UL",{"data-svelte-h":!0}),x(v)!=="svelte-1w7z84m"&&(v.innerHTML=B),J=d(me),S=m(me,"DIV",{class:!0});var ze=Y(S);g(R.$$.fragment,ze),Fe=d(ze),f=m(ze,"P",{"data-svelte-h":!0}),x(f)!=="svelte-qowgzr"&&(f.innerHTML=C),pe=d(ze),g(re.$$.fragment,ze),ke=d(ze),g(A.$$.fragment,ze),Me=d(ze),g(Ne.$$.fragment,ze),ze.forEach(a),Ye=d(me),Ve=m(me,"DIV",{class:!0});var Ge=Y(Ve);g(Re.$$.fragment,Ge),Pe=d(Ge),g(Xe.$$.fragment,Ge),Ge.forEach(a),De=d(me),je=m(me,"DIV",{class:!0});var Qe=Y(je);g(Ce.$$.fragment,Qe),Ke=d(Qe),g(Se.$$.fragment,Qe),Qe.forEach(a),me.forEach(a),this.h()},h(){P(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),P(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),P(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),P(n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),P(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),P(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),P(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),P(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(w,F){b(t,w,F),c(w,u,F),c(w,n,F),b(o,n,null),l(n,i),l(n,e),l(n,_e),l(n,Z),l(n,de),l(n,z),l(n,X),l(n,M),l(n,ye),l(n,E),b(ve,E,null),l(E,O),b(ee,E,null),l(n,ne),l(n,oe),b(q,oe,null),l(oe,ue),b(G,oe,null),l(n,he),l(n,ge),b(D,ge,null),l(ge,we),b(se,ge,null),c(w,xe,F),b(L,w,F),c(w,te,F),c(w,U,F),b(V,U,null),l(U,Q),l(U,le),l(U,Be),l(U,ce),l(U,ae),l(U,Te),l(U,fe),l(U,v),l(U,J),l(U,S),b(R,S,null),l(S,Fe),l(S,f),l(S,pe),b(re,S,null),l(S,ke),b(A,S,null),l(S,Me),b(Ne,S,null),l(U,Ye),l(U,Ve),b(Re,Ve,null),l(Ve,Pe),b(Xe,Ve,null),l(U,De),l(U,je),b(Ce,je,null),l(je,Ke),b(Se,je,null),et=!0},p(w,F){const Ue={};F&2&&(Ue.$$scope={dirty:F,ctx:w}),ee.$set(Ue);const He={};F&2&&(He.$$scope={dirty:F,ctx:w}),G.$set(He);const qe={};F&2&&(qe.$$scope={dirty:F,ctx:w}),se.$set(qe);const me={};F&2&&(me.$$scope={dirty:F,ctx:w}),re.$set(me);const ze={};F&2&&(ze.$$scope={dirty:F,ctx:w}),A.$set(ze);const Ge={};F&2&&(Ge.$$scope={dirty:F,ctx:w}),Ne.$set(Ge);const Qe={};F&2&&(Qe.$$scope={dirty:F,ctx:w}),Xe.$set(Qe);const rt={};F&2&&(rt.$$scope={dirty:F,ctx:w}),Se.$set(rt)},i(w){et||(y(t.$$.fragment,w),y(o.$$.fragment,w),y(ve.$$.fragment,w),y(ee.$$.fragment,w),y(q.$$.fragment,w),y(G.$$.fragment,w),y(D.$$.fragment,w),y(se.$$.fragment,w),y(L.$$.fragment,w),y(V.$$.fragment,w),y(R.$$.fragment,w),y(re.$$.fragment,w),y(A.$$.fragment,w),y(Ne.$$.fragment,w),y(Re.$$.fragment,w),y(Xe.$$.fragment,w),y(Ce.$$.fragment,w),y(Se.$$.fragment,w),et=!0)},o(w){T(t.$$.fragment,w),T(o.$$.fragment,w),T(ve.$$.fragment,w),T(ee.$$.fragment,w),T(q.$$.fragment,w),T(G.$$.fragment,w),T(D.$$.fragment,w),T(se.$$.fragment,w),T(L.$$.fragment,w),T(V.$$.fragment,w),T(R.$$.fragment,w),T(re.$$.fragment,w),T(A.$$.fragment,w),T(Ne.$$.fragment,w),T(Re.$$.fragment,w),T(Xe.$$.fragment,w),T(Ce.$$.fragment,w),T(Se.$$.fragment,w),et=!1},d(w){w&&(a(u),a(n),a(xe),a(te),a(U)),k(t,w),k(o),k(ve),k(ee),k(q),k(G),k(D),k(se),k(L,w),k(V),k(R),k(re),k(A),k(Ne),k(Re),k(Xe),k(Ce),k(Se)}}}function an($){let t,u;return t=new wt({props:{$$slots:{default:[sn]},$$scope:{ctx:$}}}),{c(){_(t.$$.fragment)},l(n){g(t.$$.fragment,n)},m(n,o){b(t,n,o),u=!0},p(n,o){const i={};o&2&&(i.$$scope={dirty:o,ctx:n}),t.$set(i)},i(n){u||(y(t.$$.fragment,n),u=!0)},o(n){T(t.$$.fragment,n),u=!1},d(n){k(t,n)}}}function rn($){let t,u,n,o,i,e,h,_e=`Note that <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel">BlenderbotSmallModel</a> and
<a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallForConditionalGeneration">BlenderbotSmallForConditionalGeneration</a> are only used in combination with the checkpoint
<a href="https://huggingface.co/facebook/blenderbot-90M" rel="nofollow">facebook/blenderbot-90M</a>. Larger Blenderbot checkpoints should
instead be used with <a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotModel">BlenderbotModel</a> and
<a href="/docs/transformers/main/en/model_doc/blenderbot#transformers.BlenderbotForConditionalGeneration">BlenderbotForConditionalGeneration</a>`,Z,W,de,z,I=`The Blender chatbot model was proposed in <a href="https://arxiv.org/pdf/2004.13637.pdf" rel="nofollow">Recipes for building an open-domain chatbot</a> Stephen Roller, Emily Dinan, Naman Goyal, Da Ju, Mary Williamson, Yinhan Liu,
Jing Xu, Myle Ott, Kurt Shuster, Eric M. Smith, Y-Lan Boureau, Jason Weston on 30 Apr 2020.`,X,M,N="The abstract of the paper is the following:",ye,E,ve=`<em>Building open-domain chatbots is a challenging area for machine learning research. While prior work has shown that
scaling neural models in the number of parameters and the size of the data they are trained on gives improved results,
we show that other ingredients are important for a high-performing chatbot. Good conversation requires a number of
skills that an expert conversationalist blends in a seamless way: providing engaging talking points and listening to
their partners, and displaying knowledge, empathy and personality appropriately, while maintaining a consistent
persona. We show that large scale models can learn these skills when given appropriate training data and choice of
generation strategy. We build variants of these recipes with 90M, 2.7B and 9.4B parameter models, and make our models
and code publicly available. Human evaluations show our best models are superior to existing approaches in multi-turn
dialogue in terms of engagingness and humanness measurements. We then discuss the limitations of this work by analyzing
failure cases of our models.</em>`,O,ee,ne=`This model was contributed by <a href="https://huggingface.co/patrickvonplaten" rel="nofollow">patrickvonplaten</a>. The authors’ code can be
found <a href="https://github.com/facebookresearch/ParlAI" rel="nofollow">here</a>.`,oe,q,ue,G,he=`Blenderbot Small is a model with absolute position embeddings so it’s usually advised to pad the inputs on the right rather than
the left.`,ge,D,we,se,xe='<li><a href="../tasks/language_modeling">Causal language modeling task guide</a></li> <li><a href="../tasks/translation">Translation task guide</a></li> <li><a href="../tasks/summarization">Summarization task guide</a></li>',L,te,U,V,Q,le,ie,Be=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel">BlenderbotSmallModel</a>. It is used to instantiate
an BlenderbotSmall model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BlenderbotSmall
<a href="https://huggingface.co/facebook/blenderbot_small-90M" rel="nofollow">facebook/blenderbot_small-90M</a> architecture.`,ce,$e,ae=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,Te,H,fe,v,B,J,S,R,Fe,f="Constructs a Blenderbot-90M tokenizer based on BPE (Byte-Pair-Encoding)",C,pe,re=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which contains most of the main methods. Users should refer to
the superclass for more information regarding methods.`,ke,A,Me,Ne,Ye,Ve=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens.`,Re,Pe,Xe="This implementation does not add special tokens and this method should be overridden in a subclass.",De,je,Ce,Ke,Se,et=`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer <code>prepare_for_model</code> or <code>encode_plus</code> methods.`,w,F,Ue,He,qe,me=`Create the token type IDs corresponding to the sequences passed. <a href="../glossary#token-type-ids">What are token type
IDs?</a>`,ze,Ge,Qe="Should be overridden in a subclass if the model has a special way of building those.",rt,dt,tt,ht,nt,ft,Ee,ot,kt,lt,xt="Construct a “fast” BlenderbotSmall tokenizer (backed by HuggingFace’s <em>tokenizers</em> library).",Mt,Ae,st,vt,it,$t=`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BlenderbotSmall
does not make use of token type ids, therefore a list of zeros is returned.`,_t,Oe,gt,ut,bt;return i=new Ze({props:{title:"Blenderbot Small",local:"blenderbot-small",headingTag:"h1"}}),W=new Ze({props:{title:"Overview",local:"overview",headingTag:"h2"}}),q=new Ze({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),D=new Ze({props:{title:"Resources",local:"resources",headingTag:"h2"}}),te=new Ze({props:{title:"BlenderbotSmallConfig",local:"transformers.BlenderbotSmallConfig",headingTag:"h2"}}),Q=new K({props:{name:"class transformers.BlenderbotSmallConfig",anchor:"transformers.BlenderbotSmallConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_position_embeddings",val:" = 512"},{name:"encoder_layers",val:" = 8"},{name:"encoder_ffn_dim",val:" = 2048"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 8"},{name:"decoder_ffn_dim",val:" = 2048"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 512"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 1"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotSmallConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the BlenderbotSmall model. Defines the number of different tokens that can be
represented by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.BlenderbotSmallModel">BlenderbotSmallModel</a> or <a href="/docs/transformers/main/en/model_doc/blenderbot-small#transformers.TFBlenderbotSmallModel">TFBlenderbotSmallModel</a>.`,name:"vocab_size"},{anchor:"transformers.BlenderbotSmallConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.BlenderbotSmallConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.BlenderbotSmallConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.BlenderbotSmallConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.BlenderbotSmallConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.BlenderbotSmallConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.BlenderbotSmallConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.BlenderbotSmallConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.BlenderbotSmallConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.BlenderbotSmallConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.BlenderbotSmallConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.BlenderbotSmallConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.BlenderbotSmallConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.BlenderbotSmallConfig.encoder_layerdrop",description:`<strong>encoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"encoder_layerdrop"},{anchor:"transformers.BlenderbotSmallConfig.decoder_layerdrop",description:`<strong>decoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"decoder_layerdrop"},{anchor:"transformers.BlenderbotSmallConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.BlenderbotSmallConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.BlenderbotSmallConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/blenderbot_small/configuration_blenderbot_small.py#L36"}}),H=new Ie({props:{anchor:"transformers.BlenderbotSmallConfig.example",$$slots:{default:[Ut]},$$scope:{ctx:$}}}),v=new Ze({props:{title:"BlenderbotSmallTokenizer",local:"transformers.BlenderbotSmallTokenizer",headingTag:"h2"}}),S=new K({props:{name:"class transformers.BlenderbotSmallTokenizer",anchor:"transformers.BlenderbotSmallTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"bos_token",val:" = '__start__'"},{name:"eos_token",val:" = '__end__'"},{name:"unk_token",val:" = '__unk__'"},{name:"pad_token",val:" = '__null__'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.BlenderbotSmallTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BlenderbotSmallTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__start__&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__end__&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.BlenderbotSmallTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__unk__&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BlenderbotSmallTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;__null__&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BlenderbotSmallTokenizer.kwargs",description:`<strong>kwargs</strong> (<em>optional</em>) &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/blenderbot_small/tokenization_blenderbot_small.py#L69"}}),Me=new K({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BlenderbotSmallTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.build_inputs_with_special_tokens.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizer.build_inputs_with_special_tokens.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L3348",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The model input with special tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Ce=new K({props:{name:"get_special_tokens_mask",anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids of the first sequence.`,name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
List of ids of the second sequence.`,name:"token_ids_1"},{anchor:"transformers.BlenderbotSmallTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils.py#L915",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>1 for a special token, 0 for a sequence token.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list of integers in the range [0, 1]</p>
`}}),Ue=new K({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BlenderbotSmallTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:"<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014; The first tokenized sequence.",name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:"<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014; The second tokenized sequence.",name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L3328",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The token type ids.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),tt=new K({props:{name:"save_vocabulary",anchor:"transformers.BlenderbotSmallTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/blenderbot_small/tokenization_blenderbot_small.py#L210"}}),nt=new Ze({props:{title:"BlenderbotSmallTokenizerFast",local:"transformers.BlenderbotSmallTokenizerFast",headingTag:"h2"}}),ot=new K({props:{name:"class transformers.BlenderbotSmallTokenizerFast",anchor:"transformers.BlenderbotSmallTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L52"}}),st=new K({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BlenderbotSmallTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/blenderbot_small/tokenization_blenderbot_small_fast.py#L98",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of zeros.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Oe=new St({props:{pytorch:!0,tensorflow:!0,jax:!0,$$slots:{jax:[an],tensorflow:[Qt],pytorch:[Vt]},$$scope:{ctx:$}}}),{c(){t=p("meta"),u=r(),n=p("p"),o=r(),_(i.$$.fragment),e=r(),h=p("p"),h.innerHTML=_e,Z=r(),_(W.$$.fragment),de=r(),z=p("p"),z.innerHTML=I,X=r(),M=p("p"),M.textContent=N,ye=r(),E=p("p"),E.innerHTML=ve,O=r(),ee=p("p"),ee.innerHTML=ne,oe=r(),_(q.$$.fragment),ue=r(),G=p("p"),G.textContent=he,ge=r(),_(D.$$.fragment),we=r(),se=p("ul"),se.innerHTML=xe,L=r(),_(te.$$.fragment),U=r(),V=p("div"),_(Q.$$.fragment),le=r(),ie=p("p"),ie.innerHTML=Be,ce=r(),$e=p("p"),$e.innerHTML=ae,Te=r(),_(H.$$.fragment),fe=r(),_(v.$$.fragment),B=r(),J=p("div"),_(S.$$.fragment),R=r(),Fe=p("p"),Fe.textContent=f,C=r(),pe=p("p"),pe.innerHTML=re,ke=r(),A=p("div"),_(Me.$$.fragment),Ne=r(),Ye=p("p"),Ye.textContent=Ve,Re=r(),Pe=p("p"),Pe.textContent=Xe,De=r(),je=p("div"),_(Ce.$$.fragment),Ke=r(),Se=p("p"),Se.innerHTML=et,w=r(),F=p("div"),_(Ue.$$.fragment),He=r(),qe=p("p"),qe.innerHTML=me,ze=r(),Ge=p("p"),Ge.textContent=Qe,rt=r(),dt=p("div"),_(tt.$$.fragment),ht=r(),_(nt.$$.fragment),ft=r(),Ee=p("div"),_(ot.$$.fragment),kt=r(),lt=p("p"),lt.innerHTML=xt,Mt=r(),Ae=p("div"),_(st.$$.fragment),vt=r(),it=p("p"),it.textContent=$t,_t=r(),_(Oe.$$.fragment),gt=r(),ut=p("p"),this.h()},l(s){const j=Ct("svelte-u9bgzb",document.head);t=m(j,"META",{name:!0,content:!0}),j.forEach(a),u=d(s),n=m(s,"P",{}),Y(n).forEach(a),o=d(s),g(i.$$.fragment,s),e=d(s),h=m(s,"P",{"data-svelte-h":!0}),x(h)!=="svelte-12tcllo"&&(h.innerHTML=_e),Z=d(s),g(W.$$.fragment,s),de=d(s),z=m(s,"P",{"data-svelte-h":!0}),x(z)!=="svelte-5ljyqt"&&(z.innerHTML=I),X=d(s),M=m(s,"P",{"data-svelte-h":!0}),x(M)!=="svelte-wu27l3"&&(M.textContent=N),ye=d(s),E=m(s,"P",{"data-svelte-h":!0}),x(E)!=="svelte-1t366g8"&&(E.innerHTML=ve),O=d(s),ee=m(s,"P",{"data-svelte-h":!0}),x(ee)!=="svelte-t1s4wn"&&(ee.innerHTML=ne),oe=d(s),g(q.$$.fragment,s),ue=d(s),G=m(s,"P",{"data-svelte-h":!0}),x(G)!=="svelte-sco7tr"&&(G.textContent=he),ge=d(s),g(D.$$.fragment,s),we=d(s),se=m(s,"UL",{"data-svelte-h":!0}),x(se)!=="svelte-jwyjs9"&&(se.innerHTML=xe),L=d(s),g(te.$$.fragment,s),U=d(s),V=m(s,"DIV",{class:!0});var Le=Y(V);g(Q.$$.fragment,Le),le=d(Le),ie=m(Le,"P",{"data-svelte-h":!0}),x(ie)!=="svelte-2uks4i"&&(ie.innerHTML=Be),ce=d(Le),$e=m(Le,"P",{"data-svelte-h":!0}),x($e)!=="svelte-o55m63"&&($e.innerHTML=ae),Te=d(Le),g(H.$$.fragment,Le),Le.forEach(a),fe=d(s),g(v.$$.fragment,s),B=d(s),J=m(s,"DIV",{class:!0});var Je=Y(J);g(S.$$.fragment,Je),R=d(Je),Fe=m(Je,"P",{"data-svelte-h":!0}),x(Fe)!=="svelte-12wmyl5"&&(Fe.textContent=f),C=d(Je),pe=m(Je,"P",{"data-svelte-h":!0}),x(pe)!=="svelte-1u01m26"&&(pe.innerHTML=re),ke=d(Je),A=m(Je,"DIV",{class:!0});var ct=Y(A);g(Me.$$.fragment,ct),Ne=d(ct),Ye=m(ct,"P",{"data-svelte-h":!0}),x(Ye)!=="svelte-xip562"&&(Ye.textContent=Ve),Re=d(ct),Pe=m(ct,"P",{"data-svelte-h":!0}),x(Pe)!=="svelte-1yvfiyo"&&(Pe.textContent=Xe),ct.forEach(a),De=d(Je),je=m(Je,"DIV",{class:!0});var yt=Y(je);g(Ce.$$.fragment,yt),Ke=d(yt),Se=m(yt,"P",{"data-svelte-h":!0}),x(Se)!=="svelte-1wmjg8a"&&(Se.innerHTML=et),yt.forEach(a),w=d(Je),F=m(Je,"DIV",{class:!0});var pt=Y(F);g(Ue.$$.fragment,pt),He=d(pt),qe=m(pt,"P",{"data-svelte-h":!0}),x(qe)!=="svelte-zj1vf1"&&(qe.innerHTML=me),ze=d(pt),Ge=m(pt,"P",{"data-svelte-h":!0}),x(Ge)!=="svelte-9vptpw"&&(Ge.textContent=Qe),pt.forEach(a),rt=d(Je),dt=m(Je,"DIV",{class:!0});var Ft=Y(dt);g(tt.$$.fragment,Ft),Ft.forEach(a),Je.forEach(a),ht=d(s),g(nt.$$.fragment,s),ft=d(s),Ee=m(s,"DIV",{class:!0});var mt=Y(Ee);g(ot.$$.fragment,mt),kt=d(mt),lt=m(mt,"P",{"data-svelte-h":!0}),x(lt)!=="svelte-1w2pysy"&&(lt.innerHTML=xt),Mt=d(mt),Ae=m(mt,"DIV",{class:!0});var Tt=Y(Ae);g(st.$$.fragment,Tt),vt=d(Tt),it=m(Tt,"P",{"data-svelte-h":!0}),x(it)!=="svelte-a0gg85"&&(it.textContent=$t),Tt.forEach(a),mt.forEach(a),_t=d(s),g(Oe.$$.fragment,s),gt=d(s),ut=m(s,"P",{}),Y(ut).forEach(a),this.h()},h(){P(t,"name","hf:doc:metadata"),P(t,"content",dn),P(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),P(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),P(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),P(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),P(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),P(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),P(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),P(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,j){l(document.head,t),c(s,u,j),c(s,n,j),c(s,o,j),b(i,s,j),c(s,e,j),c(s,h,j),c(s,Z,j),b(W,s,j),c(s,de,j),c(s,z,j),c(s,X,j),c(s,M,j),c(s,ye,j),c(s,E,j),c(s,O,j),c(s,ee,j),c(s,oe,j),b(q,s,j),c(s,ue,j),c(s,G,j),c(s,ge,j),b(D,s,j),c(s,we,j),c(s,se,j),c(s,L,j),b(te,s,j),c(s,U,j),c(s,V,j),b(Q,V,null),l(V,le),l(V,ie),l(V,ce),l(V,$e),l(V,Te),b(H,V,null),c(s,fe,j),b(v,s,j),c(s,B,j),c(s,J,j),b(S,J,null),l(J,R),l(J,Fe),l(J,C),l(J,pe),l(J,ke),l(J,A),b(Me,A,null),l(A,Ne),l(A,Ye),l(A,Re),l(A,Pe),l(J,De),l(J,je),b(Ce,je,null),l(je,Ke),l(je,Se),l(J,w),l(J,F),b(Ue,F,null),l(F,He),l(F,qe),l(F,ze),l(F,Ge),l(J,rt),l(J,dt),b(tt,dt,null),c(s,ht,j),b(nt,s,j),c(s,ft,j),c(s,Ee,j),b(ot,Ee,null),l(Ee,kt),l(Ee,lt),l(Ee,Mt),l(Ee,Ae),b(st,Ae,null),l(Ae,vt),l(Ae,it),c(s,_t,j),b(Oe,s,j),c(s,gt,j),c(s,ut,j),bt=!0},p(s,[j]){const Le={};j&2&&(Le.$$scope={dirty:j,ctx:s}),H.$set(Le);const Je={};j&2&&(Je.$$scope={dirty:j,ctx:s}),Oe.$set(Je)},i(s){bt||(y(i.$$.fragment,s),y(W.$$.fragment,s),y(q.$$.fragment,s),y(D.$$.fragment,s),y(te.$$.fragment,s),y(Q.$$.fragment,s),y(H.$$.fragment,s),y(v.$$.fragment,s),y(S.$$.fragment,s),y(Me.$$.fragment,s),y(Ce.$$.fragment,s),y(Ue.$$.fragment,s),y(tt.$$.fragment,s),y(nt.$$.fragment,s),y(ot.$$.fragment,s),y(st.$$.fragment,s),y(Oe.$$.fragment,s),bt=!0)},o(s){T(i.$$.fragment,s),T(W.$$.fragment,s),T(q.$$.fragment,s),T(D.$$.fragment,s),T(te.$$.fragment,s),T(Q.$$.fragment,s),T(H.$$.fragment,s),T(v.$$.fragment,s),T(S.$$.fragment,s),T(Me.$$.fragment,s),T(Ce.$$.fragment,s),T(Ue.$$.fragment,s),T(tt.$$.fragment,s),T(nt.$$.fragment,s),T(ot.$$.fragment,s),T(st.$$.fragment,s),T(Oe.$$.fragment,s),bt=!1},d(s){s&&(a(u),a(n),a(o),a(e),a(h),a(Z),a(de),a(z),a(X),a(M),a(ye),a(E),a(O),a(ee),a(oe),a(ue),a(G),a(ge),a(we),a(se),a(L),a(U),a(V),a(fe),a(B),a(J),a(ht),a(ft),a(Ee),a(_t),a(gt),a(ut)),a(t),k(i,s),k(W,s),k(q,s),k(D,s),k(te,s),k(Q),k(H),k(v,s),k(S),k(Me),k(Ce),k(Ue),k(tt),k(nt,s),k(ot),k(st),k(Oe,s)}}}const dn='{"title":"Blenderbot Small","local":"blenderbot-small","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"BlenderbotSmallConfig","local":"transformers.BlenderbotSmallConfig","sections":[],"depth":2},{"title":"BlenderbotSmallTokenizer","local":"transformers.BlenderbotSmallTokenizer","sections":[],"depth":2},{"title":"BlenderbotSmallTokenizerFast","local":"transformers.BlenderbotSmallTokenizerFast","sections":[],"depth":2},{"title":"BlenderbotSmallModel","local":"transformers.BlenderbotSmallModel","sections":[],"depth":2},{"title":"BlenderbotSmallForConditionalGeneration","local":"transformers.BlenderbotSmallForConditionalGeneration","sections":[],"depth":2},{"title":"BlenderbotSmallForCausalLM","local":"transformers.BlenderbotSmallForCausalLM","sections":[],"depth":2},{"title":"TFBlenderbotSmallModel","local":"transformers.TFBlenderbotSmallModel","sections":[],"depth":2},{"title":"TFBlenderbotSmallForConditionalGeneration","local":"transformers.TFBlenderbotSmallForConditionalGeneration","sections":[],"depth":2},{"title":"FlaxBlenderbotSmallModel","local":"transformers.FlaxBlenderbotSmallModel","sections":[],"depth":2},{"title":"FlaxBlenderbotForConditionalGeneration","local":"transformers.FlaxBlenderbotSmallForConditionalGeneration","sections":[],"depth":2}],"depth":1}';function ln($){return jt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class bn extends zt{constructor(t){super(),Jt(this,t,ln,rn,Bt,{})}}export{bn as component};
