import{s as Mt,o as Tt,n as ve}from"../chunks/scheduler.9bc65507.js";import{S as yt,i as bt,g as m,s as r,r as T,A as kt,h,f as a,c as i,j as ye,u as y,x as v,k as ge,y as c,a as l,v as b,d as k,t as w,w as x}from"../chunks/index.707bf1b6.js";import{T as Le}from"../chunks/Tip.c2ecdbf4.js";import{D as xe}from"../chunks/Docstring.17db21ae.js";import{C as Fe}from"../chunks/CodeBlock.54a9f38d.js";import{F as wt,M as mt}from"../chunks/Markdown.fef84341.js";import{E as qe}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as we}from"../chunks/Heading.342b1fa6.js";function xt(z){let e,p="Examples:",n,s,u;return s=new Fe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyME1hcmlhbk1vZGVsJTJDJTIwTWFyaWFuQ29uZmlnJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyME1hcmlhbiUyMEhlbHNpbmtpLU5MUCUyRm9wdXMtbXQtZW4tZGUlMjBzdHlsZSUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwTWFyaWFuQ29uZmlnKCklMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwbW9kZWwlMjBmcm9tJTIwdGhlJTIwSGVsc2lua2ktTkxQJTJGb3B1cy1tdC1lbi1kZSUyMHN0eWxlJTIwY29uZmlndXJhdGlvbiUwQW1vZGVsJTIwJTNEJTIwTWFyaWFuTW9kZWwoY29uZmlndXJhdGlvbiklMEElMEElMjMlMjBBY2Nlc3NpbmclMjB0aGUlMjBtb2RlbCUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwbW9kZWwuY29uZmln",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianModel, MarianConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Marian Helsinki-NLP/opus-mt-en-de style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = MarianConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the Helsinki-NLP/opus-mt-en-de style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){e=m("p"),e.textContent=p,n=r(),T(s.$$.fragment)},l(o){e=h(o,"P",{"data-svelte-h":!0}),v(e)!=="svelte-kvfsh7"&&(e.textContent=p),n=i(o),y(s.$$.fragment,o)},m(o,_){l(o,e,_),l(o,n,_),b(s,o,_),u=!0},p:ve,i(o){u||(k(s.$$.fragment,o),u=!0)},o(o){w(s.$$.fragment,o),u=!1},d(o){o&&(a(e),a(n)),x(s,o)}}}function vt(z){let e,p="Examples:",n,s,u;return s=new Fe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyME1hcmlhbkZvckNhdXNhbExNJTJDJTIwTWFyaWFuVG9rZW5pemVyJTBBJTBBbW9kZWwlMjAlM0QlMjBNYXJpYW5Gb3JDYXVzYWxMTS5mcm9tX3ByZXRyYWluZWQoJTIySGVsc2lua2ktTkxQJTJGb3B1cy1tdC1lbi1kZSUyMiklMEF0b2tlbml6ZXIlMjAlM0QlMjBNYXJpYW5Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMkhlbHNpbmtpLU5MUCUyRm9wdXMtbXQtZW4tZGUlMjIpJTBBc3JjX3RleHRzJTIwJTNEJTIwJTVCJTIySSUyMGFtJTIwYSUyMHNtYWxsJTIwZnJvZy4lMjIlMkMlMjAlMjJUb20lMjBhc2tlZCUyMGhpcyUyMHRlYWNoZXIlMjBmb3IlMjBhZHZpY2UuJTIyJTVEJTBBdGd0X3RleHRzJTIwJTNEJTIwJTVCJTIySWNoJTIwYmluJTIwZWluJTIwa2xlaW5lciUyMEZyb3NjaC4lMjIlMkMlMjAlMjJUb20lMjBiYXQlMjBzZWluZW4lMjBMZWhyZXIlMjB1bSUyMFJhdC4lMjIlNUQlMjAlMjAlMjMlMjBvcHRpb25hbCUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplcihzcmNfdGV4dHMlMkMlMjB0ZXh0X3RhcmdldCUzRHRndF90ZXh0cyUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIlMkMlMjBwYWRkaW5nJTNEVHJ1ZSklMEElMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTIwJTIwJTIzJTIwc2hvdWxkJTIwd29yaw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianForCausalLM, MarianTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianForCausalLM.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>src_texts = [<span class="hljs-string">&quot;I am a small frog.&quot;</span>, <span class="hljs-string">&quot;Tom asked his teacher for advice.&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_texts = [<span class="hljs-string">&quot;Ich bin ein kleiner Frosch.&quot;</span>, <span class="hljs-string">&quot;Tom bat seinen Lehrer um Rat.&quot;</span>]  <span class="hljs-comment"># optional</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(src_texts, text_target=tgt_texts, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)  <span class="hljs-comment"># should work</span>`,wrap:!1}}),{c(){e=m("p"),e.textContent=p,n=r(),T(s.$$.fragment)},l(o){e=h(o,"P",{"data-svelte-h":!0}),v(e)!=="svelte-kvfsh7"&&(e.textContent=p),n=i(o),y(s.$$.fragment,o)},m(o,_){l(o,e,_),l(o,n,_),b(s,o,_),u=!0},p:ve,i(o){u||(k(s.$$.fragment,o),u=!0)},o(o){w(s.$$.fragment,o),u=!1},d(o){o&&(a(e),a(n)),x(s,o)}}}function jt(z){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=m("p"),e.innerHTML=p},l(n){e=h(n,"P",{"data-svelte-h":!0}),v(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(n,s){l(n,e,s)},p:ve,d(n){n&&a(e)}}}function $t(z){let e,p="Example:",n,s,u;return s=new Fe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBNYXJpYW5Nb2RlbCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMkhlbHNpbmtpLU5MUCUyRm9wdXMtbXQtZW4tZGUlMjIpJTBBbW9kZWwlMjAlM0QlMjBNYXJpYW5Nb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIySGVsc2lua2ktTkxQJTJGb3B1cy1tdC1lbi1kZSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIyU3R1ZGllcyUyMGhhdmUlMjBiZWVuJTIwc2hvd24lMjB0aGF0JTIwb3duaW5nJTIwYSUyMGRvZyUyMGlzJTIwZ29vZCUyMGZvciUyMHlvdSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBZGVjb2Rlcl9pbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTBBJTIwJTIwJTIwJTIwJTIyJTNDcGFkJTNFJTIwU3R1ZGllbiUyMGhhYmVuJTIwZ2V6ZWlndCUyMGRhc3MlMjBlcyUyMGhpbGZyZWljaCUyMGlzdCUyMGVpbmVuJTIwSHVuZCUyMHp1JTIwYmVzaXR6ZW4lMjIlMkMlMEElMjAlMjAlMjAlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTJDJTBBJTIwJTIwJTIwJTIwYWRkX3NwZWNpYWxfdG9rZW5zJTNERmFsc2UlMkMlMEEpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKGlucHV0X2lkcyUzRGlucHV0cy5pbnB1dF9pZHMlMkMlMjBkZWNvZGVyX2lucHV0X2lkcyUzRGRlY29kZXJfaW5wdXRzLmlucHV0X2lkcyklMEElMEFsYXN0X2hpZGRlbl9zdGF0ZXMlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRlJTBBbGlzdChsYXN0X2hpZGRlbl9zdGF0ZXMuc2hhcGUp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, MarianModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianModel.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&lt;pad&gt; Studien haben gezeigt dass es hilfreich ist einen Hund zu besitzen&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>    add_special_tokens=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=inputs.input_ids, decoder_input_ids=decoder_inputs.input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">26</span>, <span class="hljs-number">512</span>]`,wrap:!1}}),{c(){e=m("p"),e.textContent=p,n=r(),T(s.$$.fragment)},l(o){e=h(o,"P",{"data-svelte-h":!0}),v(e)!=="svelte-11lpom8"&&(e.textContent=p),n=i(o),y(s.$$.fragment,o)},m(o,_){l(o,e,_),l(o,n,_),b(s,o,_),u=!0},p:ve,i(o){u||(k(s.$$.fragment,o),u=!0)},o(o){w(s.$$.fragment,o),u=!1},d(o){o&&(a(e),a(n)),x(s,o)}}}function Jt(z){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=m("p"),e.innerHTML=p},l(n){e=h(n,"P",{"data-svelte-h":!0}),v(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(n,s){l(n,e,s)},p:ve,d(n){n&&a(e)}}}function zt(z){let e,p="Examples:",n,s,u;return s=new Fe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBNYXJpYW5NVE1vZGVsJTBBJTBBc3JjJTIwJTNEJTIwJTIyZnIlMjIlMjAlMjAlMjMlMjBzb3VyY2UlMjBsYW5ndWFnZSUwQXRyZyUyMCUzRCUyMCUyMmVuJTIyJTIwJTIwJTIzJTIwdGFyZ2V0JTIwbGFuZ3VhZ2UlMEElMEFtb2RlbF9uYW1lJTIwJTNEJTIwZiUyMkhlbHNpbmtpLU5MUCUyRm9wdXMtbXQtJTdCc3JjJTdELSU3QnRyZyU3RCUyMiUwQW1vZGVsJTIwJTNEJTIwTWFyaWFuTVRNb2RlbC5mcm9tX3ByZXRyYWluZWQobW9kZWxfbmFtZSklMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZChtb2RlbF9uYW1lKSUwQSUwQXNhbXBsZV90ZXh0JTIwJTNEJTIwJTIybyVDMyVCOSUyMGVzdCUyMGwnYXJyJUMzJUFBdCUyMGRlJTIwYnVzJTIwJTNGJTIyJTBBYmF0Y2glMjAlM0QlMjB0b2tlbml6ZXIoJTVCc2FtcGxlX3RleHQlNUQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQWdlbmVyYXRlZF9pZHMlMjAlM0QlMjBtb2RlbC5nZW5lcmF0ZSgqKmJhdGNoKSUwQXRva2VuaXplci5iYXRjaF9kZWNvZGUoZ2VuZXJhdGVkX2lkcyUyQyUyMHNraXBfc3BlY2lhbF90b2tlbnMlM0RUcnVlKSU1QjAlNUQ=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, MarianMTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>src = <span class="hljs-string">&quot;fr&quot;</span>  <span class="hljs-comment"># source language</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>trg = <span class="hljs-string">&quot;en&quot;</span>  <span class="hljs-comment"># target language</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">f&quot;Helsinki-NLP/opus-mt-<span class="hljs-subst">{src}</span>-<span class="hljs-subst">{trg}</span>&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianMTModel.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>sample_text = <span class="hljs-string">&quot;où est l&#x27;arrêt de bus ?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>batch = tokenizer([sample_text], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(**batch)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&quot;Where&#x27;s the bus stop?&quot;</span>`,wrap:!1}}),{c(){e=m("p"),e.textContent=p,n=r(),T(s.$$.fragment)},l(o){e=h(o,"P",{"data-svelte-h":!0}),v(e)!=="svelte-kvfsh7"&&(e.textContent=p),n=i(o),y(s.$$.fragment,o)},m(o,_){l(o,e,_),l(o,n,_),b(s,o,_),u=!0},p:ve,i(o){u||(k(s.$$.fragment,o),u=!0)},o(o){w(s.$$.fragment,o),u=!1},d(o){o&&(a(e),a(n)),x(s,o)}}}function Ut(z){let e,p="Example:",n,s,u;return s=new Fe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBNYXJpYW5Gb3JDYXVzYWxMTSUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMkhlbHNpbmtpLU5MUCUyRm9wdXMtbXQtZnItZW4lMjIpJTBBbW9kZWwlMjAlM0QlMjBNYXJpYW5Gb3JDYXVzYWxMTS5mcm9tX3ByZXRyYWluZWQoJTIySGVsc2lua2ktTkxQJTJGb3B1cy1tdC1mci1lbiUyMiUyQyUyMGFkZF9jcm9zc19hdHRlbnRpb24lM0RGYWxzZSklMEFhc3NlcnQlMjBtb2RlbC5jb25maWcuaXNfZGVjb2RlciUyQyUyMGYlMjIlN0Jtb2RlbC5fX2NsYXNzX18lN0QlMjBoYXMlMjB0byUyMGJlJTIwY29uZmlndXJlZCUyMGFzJTIwYSUyMGRlY29kZXIuJTIyJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEFsb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cyUwQWV4cGVjdGVkX3NoYXBlJTIwJTNEJTIwJTVCMSUyQyUyMGlucHV0cy5pbnB1dF9pZHMuc2hhcGUlNUItMSU1RCUyQyUyMG1vZGVsLmNvbmZpZy52b2NhYl9zaXplJTVEJTBBbGlzdChsb2dpdHMuc2hhcGUpJTIwJTNEJTNEJTIwZXhwZWN0ZWRfc2hhcGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, MarianForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-fr-en&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianForCausalLM.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-fr-en&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> model.config.is_decoder, <span class="hljs-string">f&quot;<span class="hljs-subst">{model.__class__}</span> has to be configured as a decoder.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>expected_shape = [<span class="hljs-number">1</span>, inputs.input_ids.shape[-<span class="hljs-number">1</span>], model.config.vocab_size]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape) == expected_shape
<span class="hljs-literal">True</span>`,wrap:!1}}),{c(){e=m("p"),e.textContent=p,n=r(),T(s.$$.fragment)},l(o){e=h(o,"P",{"data-svelte-h":!0}),v(e)!=="svelte-11lpom8"&&(e.textContent=p),n=i(o),y(s.$$.fragment,o)},m(o,_){l(o,e,_),l(o,n,_),b(s,o,_),u=!0},p:ve,i(o){u||(k(s.$$.fragment,o),u=!0)},o(o){w(s.$$.fragment,o),u=!1},d(o){o&&(a(e),a(n)),x(s,o)}}}function Ct(z){let e,p,n,s,u,o,_=`The bare Marian Model outputting raw hidden-states without any specific head on top.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,de,C,W=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,se,U,q,V,f,N='The <a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianModel">MarianModel</a> forward method, overrides the <code>__call__</code> special method.',ae,P,ce,B,pe,A,je,F,D,Z,E,ke=`The Marian Model with a language modeling head. Can be used for summarization.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,me,I,_e=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,re,Y,Me,K,he,O='The <a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianMTModel">MarianMTModel</a> forward method, overrides the <code>__call__</code> special method.',te,ee,ie,$e,be=`Pytorch version of marian-nmt’s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints. Available
models are listed <a href="https://huggingface.co/models?search=Helsinki-NLP" rel="nofollow">here</a>.`,ne,le,H,oe,ue,Q,fe,M,$,R,X,S,j;return e=new we({props:{title:"MarianModel",local:"transformers.MarianModel",headingTag:"h2"}}),s=new xe({props:{name:"class transformers.MarianModel",anchor:"transformers.MarianModel",parameters:[{name:"config",val:": MarianConfig"}],parametersDescription:[{anchor:"transformers.MarianModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/marian/modeling_marian.py#L1045"}}),q=new xe({props:{name:"forward",anchor:"transformers.MarianModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Union = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MarianModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MarianModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MarianModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Marian uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.MarianModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MarianModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MarianModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MarianModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MarianModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MarianModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MarianModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MarianModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MarianModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MarianModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MarianModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MarianModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/marian/modeling_marian.py#L1132",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
`}}),P=new Le({props:{$$slots:{default:[jt]},$$scope:{ctx:z}}}),B=new qe({props:{anchor:"transformers.MarianModel.forward.example",$$slots:{default:[$t]},$$scope:{ctx:z}}}),A=new we({props:{title:"MarianMTModel",local:"transformers.MarianMTModel",headingTag:"h2"}}),D=new xe({props:{name:"class transformers.MarianMTModel",anchor:"transformers.MarianMTModel",parameters:[{name:"config",val:": MarianConfig"}],parametersDescription:[{anchor:"transformers.MarianMTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/marian/modeling_marian.py#L1231"}}),Me=new xe({props:{name:"forward",anchor:"transformers.MarianMTModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Union = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MarianMTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MarianMTModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MarianMTModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Marian uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.MarianMTModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MarianMTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MarianMTModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MarianMTModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MarianMTModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MarianMTModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MarianMTModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MarianMTModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MarianMTModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MarianMTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MarianMTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MarianMTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MarianMTModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/marian/modeling_marian.py#L1358",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
`}}),ee=new Le({props:{$$slots:{default:[Jt]},$$scope:{ctx:z}}}),le=new qe({props:{anchor:"transformers.MarianMTModel.forward.example",$$slots:{default:[zt]},$$scope:{ctx:z}}}),oe=new we({props:{title:"MarianForCausalLM",local:"transformers.MarianForCausalLM",headingTag:"h2"}}),fe=new xe({props:{name:"class transformers.MarianForCausalLM",anchor:"transformers.MarianForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/marian/modeling_marian.py#L1508"}}),R=new xe({props:{name:"forward",anchor:"transformers.MarianForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MarianForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MarianForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MarianForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.MarianForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.MarianForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MarianForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MarianForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MarianForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.MarianForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.MarianForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MarianForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.MarianForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/marian/modeling_marian.py#L1541",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
`}}),S=new qe({props:{anchor:"transformers.MarianForCausalLM.forward.example",$$slots:{default:[Ut]},$$scope:{ctx:z}}}),{c(){T(e.$$.fragment),p=r(),n=m("div"),T(s.$$.fragment),u=r(),o=m("p"),o.innerHTML=_,de=r(),C=m("p"),C.innerHTML=W,se=r(),U=m("div"),T(q.$$.fragment),V=r(),f=m("p"),f.innerHTML=N,ae=r(),T(P.$$.fragment),ce=r(),T(B.$$.fragment),pe=r(),T(A.$$.fragment),je=r(),F=m("div"),T(D.$$.fragment),Z=r(),E=m("p"),E.innerHTML=ke,me=r(),I=m("p"),I.innerHTML=_e,re=r(),Y=m("div"),T(Me.$$.fragment),K=r(),he=m("p"),he.innerHTML=O,te=r(),T(ee.$$.fragment),ie=r(),$e=m("p"),$e.innerHTML=be,ne=r(),T(le.$$.fragment),H=r(),T(oe.$$.fragment),ue=r(),Q=m("div"),T(fe.$$.fragment),M=r(),$=m("div"),T(R.$$.fragment),X=r(),T(S.$$.fragment),this.h()},l(d){y(e.$$.fragment,d),p=i(d),n=h(d,"DIV",{class:!0});var J=ye(n);y(s.$$.fragment,J),u=i(J),o=h(J,"P",{"data-svelte-h":!0}),v(o)!=="svelte-17dte9y"&&(o.innerHTML=_),de=i(J),C=h(J,"P",{"data-svelte-h":!0}),v(C)!=="svelte-hswkmf"&&(C.innerHTML=W),se=i(J),U=h(J,"DIV",{class:!0});var L=ye(U);y(q.$$.fragment,L),V=i(L),f=h(L,"P",{"data-svelte-h":!0}),v(f)!=="svelte-17la98z"&&(f.innerHTML=N),ae=i(L),y(P.$$.fragment,L),ce=i(L),y(B.$$.fragment,L),L.forEach(a),J.forEach(a),pe=i(d),y(A.$$.fragment,d),je=i(d),F=h(d,"DIV",{class:!0});var G=ye(F);y(D.$$.fragment,G),Z=i(G),E=h(G,"P",{"data-svelte-h":!0}),v(E)!=="svelte-rzrj2"&&(E.innerHTML=ke),me=i(G),I=h(G,"P",{"data-svelte-h":!0}),v(I)!=="svelte-hswkmf"&&(I.innerHTML=_e),re=i(G),Y=h(G,"DIV",{class:!0});var Te=ye(Y);y(Me.$$.fragment,Te),K=i(Te),he=h(Te,"P",{"data-svelte-h":!0}),v(he)!=="svelte-1dh5u4z"&&(he.innerHTML=O),te=i(Te),y(ee.$$.fragment,Te),ie=i(Te),$e=h(Te,"P",{"data-svelte-h":!0}),v($e)!=="svelte-vjyygk"&&($e.innerHTML=be),ne=i(Te),y(le.$$.fragment,Te),Te.forEach(a),G.forEach(a),H=i(d),y(oe.$$.fragment,d),ue=i(d),Q=h(d,"DIV",{class:!0});var Ie=ye(Q);y(fe.$$.fragment,Ie),M=i(Ie),$=h(Ie,"DIV",{class:!0});var Je=ye($);y(R.$$.fragment,Je),X=i(Je),y(S.$$.fragment,Je),Je.forEach(a),Ie.forEach(a),this.h()},h(){ge(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ge(n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ge(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ge(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ge($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ge(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(d,J){b(e,d,J),l(d,p,J),l(d,n,J),b(s,n,null),c(n,u),c(n,o),c(n,de),c(n,C),c(n,se),c(n,U),b(q,U,null),c(U,V),c(U,f),c(U,ae),b(P,U,null),c(U,ce),b(B,U,null),l(d,pe,J),b(A,d,J),l(d,je,J),l(d,F,J),b(D,F,null),c(F,Z),c(F,E),c(F,me),c(F,I),c(F,re),c(F,Y),b(Me,Y,null),c(Y,K),c(Y,he),c(Y,te),b(ee,Y,null),c(Y,ie),c(Y,$e),c(Y,ne),b(le,Y,null),l(d,H,J),b(oe,d,J),l(d,ue,J),l(d,Q,J),b(fe,Q,null),c(Q,M),c(Q,$),b(R,$,null),c($,X),b(S,$,null),j=!0},p(d,J){const L={};J&2&&(L.$$scope={dirty:J,ctx:d}),P.$set(L);const G={};J&2&&(G.$$scope={dirty:J,ctx:d}),B.$set(G);const Te={};J&2&&(Te.$$scope={dirty:J,ctx:d}),ee.$set(Te);const Ie={};J&2&&(Ie.$$scope={dirty:J,ctx:d}),le.$set(Ie);const Je={};J&2&&(Je.$$scope={dirty:J,ctx:d}),S.$set(Je)},i(d){j||(k(e.$$.fragment,d),k(s.$$.fragment,d),k(q.$$.fragment,d),k(P.$$.fragment,d),k(B.$$.fragment,d),k(A.$$.fragment,d),k(D.$$.fragment,d),k(Me.$$.fragment,d),k(ee.$$.fragment,d),k(le.$$.fragment,d),k(oe.$$.fragment,d),k(fe.$$.fragment,d),k(R.$$.fragment,d),k(S.$$.fragment,d),j=!0)},o(d){w(e.$$.fragment,d),w(s.$$.fragment,d),w(q.$$.fragment,d),w(P.$$.fragment,d),w(B.$$.fragment,d),w(A.$$.fragment,d),w(D.$$.fragment,d),w(Me.$$.fragment,d),w(ee.$$.fragment,d),w(le.$$.fragment,d),w(oe.$$.fragment,d),w(fe.$$.fragment,d),w(R.$$.fragment,d),w(S.$$.fragment,d),j=!1},d(d){d&&(a(p),a(n),a(pe),a(je),a(F),a(H),a(ue),a(Q)),x(e,d),x(s),x(q),x(P),x(B),x(A,d),x(D),x(Me),x(ee),x(le),x(oe,d),x(fe),x(R),x(S)}}}function Ft(z){let e,p;return e=new mt({props:{$$slots:{default:[Ct]},$$scope:{ctx:z}}}),{c(){T(e.$$.fragment)},l(n){y(e.$$.fragment,n)},m(n,s){b(e,n,s),p=!0},p(n,s){const u={};s&2&&(u.$$scope={dirty:s,ctx:n}),e.$set(u)},i(n){p||(k(e.$$.fragment,n),p=!0)},o(n){w(e.$$.fragment,n),p=!1},d(n){x(e,n)}}}function It(z){let e,p="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",n,s,u="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",o,_,de=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,C,W,se=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,U,q,V=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=m("p"),e.innerHTML=p,n=r(),s=m("ul"),s.innerHTML=u,o=r(),_=m("p"),_.innerHTML=de,C=r(),W=m("ul"),W.innerHTML=se,U=r(),q=m("p"),q.innerHTML=V},l(f){e=h(f,"P",{"data-svelte-h":!0}),v(e)!=="svelte-1ajbfxg"&&(e.innerHTML=p),n=i(f),s=h(f,"UL",{"data-svelte-h":!0}),v(s)!=="svelte-qm1t26"&&(s.innerHTML=u),o=i(f),_=h(f,"P",{"data-svelte-h":!0}),v(_)!=="svelte-1v9qsc5"&&(_.innerHTML=de),C=i(f),W=h(f,"UL",{"data-svelte-h":!0}),v(W)!=="svelte-15scerc"&&(W.innerHTML=se),U=i(f),q=h(f,"P",{"data-svelte-h":!0}),v(q)!=="svelte-1an3odd"&&(q.innerHTML=V)},m(f,N){l(f,e,N),l(f,n,N),l(f,s,N),l(f,o,N),l(f,_,N),l(f,C,N),l(f,W,N),l(f,U,N),l(f,q,N)},p:ve,d(f){f&&(a(e),a(n),a(s),a(o),a(_),a(C),a(W),a(U),a(q))}}}function Nt(z){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=m("p"),e.innerHTML=p},l(n){e=h(n,"P",{"data-svelte-h":!0}),v(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(n,s){l(n,e,s)},p:ve,d(n){n&&a(e)}}}function qt(z){let e,p="Example:",n,s,u;return s=new Fe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURk1hcmlhbk1vZGVsJTBBaW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJIZWxzaW5raS1OTFAlMkZvcHVzLW10LWVuLWRlJTIyKSUwQW1vZGVsJTIwJTNEJTIwVEZNYXJpYW5Nb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIySGVsc2lua2ktTkxQJTJGb3B1cy1tdC1lbi1kZSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIydGYlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKGlucHV0cyklMEElMEFsYXN0X2hpZGRlbl9zdGF0ZXMlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRl",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFMarianModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMarianModel.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=m("p"),e.textContent=p,n=r(),T(s.$$.fragment)},l(o){e=h(o,"P",{"data-svelte-h":!0}),v(e)!=="svelte-11lpom8"&&(e.textContent=p),n=i(o),y(s.$$.fragment,o)},m(o,_){l(o,e,_),l(o,n,_),b(s,o,_),u=!0},p:ve,i(o){u||(k(s.$$.fragment,o),u=!0)},o(o){w(s.$$.fragment,o),u=!1},d(o){o&&(a(e),a(n)),x(s,o)}}}function Zt(z){let e,p="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",n,s,u="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",o,_,de=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,C,W,se=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,U,q,V=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=m("p"),e.innerHTML=p,n=r(),s=m("ul"),s.innerHTML=u,o=r(),_=m("p"),_.innerHTML=de,C=r(),W=m("ul"),W.innerHTML=se,U=r(),q=m("p"),q.innerHTML=V},l(f){e=h(f,"P",{"data-svelte-h":!0}),v(e)!=="svelte-1ajbfxg"&&(e.innerHTML=p),n=i(f),s=h(f,"UL",{"data-svelte-h":!0}),v(s)!=="svelte-qm1t26"&&(s.innerHTML=u),o=i(f),_=h(f,"P",{"data-svelte-h":!0}),v(_)!=="svelte-1v9qsc5"&&(_.innerHTML=de),C=i(f),W=h(f,"UL",{"data-svelte-h":!0}),v(W)!=="svelte-15scerc"&&(W.innerHTML=se),U=i(f),q=h(f,"P",{"data-svelte-h":!0}),v(q)!=="svelte-1an3odd"&&(q.innerHTML=V)},m(f,N){l(f,e,N),l(f,n,N),l(f,s,N),l(f,o,N),l(f,_,N),l(f,C,N),l(f,W,N),l(f,U,N),l(f,q,N)},p:ve,d(f){f&&(a(e),a(n),a(s),a(o),a(_),a(C),a(W),a(U),a(q))}}}function Wt(z){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=m("p"),e.innerHTML=p},l(n){e=h(n,"P",{"data-svelte-h":!0}),v(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(n,s){l(n,e,s)},p:ve,d(n){n&&a(e)}}}function Ht(z){let e,p="Examples:",n,s,u;return s=new Fe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURk1hcmlhbk1UTW9kZWwlMEFmcm9tJTIwdHlwaW5nJTIwaW1wb3J0JTIwTGlzdCUwQSUwQXNyYyUyMCUzRCUyMCUyMmZyJTIyJTIwJTIwJTIzJTIwc291cmNlJTIwbGFuZ3VhZ2UlMEF0cmclMjAlM0QlMjAlMjJlbiUyMiUyMCUyMCUyMyUyMHRhcmdldCUyMGxhbmd1YWdlJTBBc2FtcGxlX3RleHQlMjAlM0QlMjAlMjJvJUMzJUI5JTIwZXN0JTIwbCdhcnIlQzMlQUF0JTIwZGUlMjBidXMlMjAlM0YlMjIlMEFtb2RlbF9uYW1lJTIwJTNEJTIwZiUyMkhlbHNpbmtpLU5MUCUyRm9wdXMtbXQtJTdCc3JjJTdELSU3QnRyZyU3RCUyMiUwQSUwQW1vZGVsJTIwJTNEJTIwVEZNYXJpYW5NVE1vZGVsLmZyb21fcHJldHJhaW5lZChtb2RlbF9uYW1lKSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKG1vZGVsX25hbWUpJTBBYmF0Y2glMjAlM0QlMjB0b2tlbml6ZXIoJTVCc2FtcGxlX3RleHQlNUQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyKSUwQWdlbiUyMCUzRCUyMG1vZGVsLmdlbmVyYXRlKCoqYmF0Y2gpJTBBdG9rZW5pemVyLmJhdGNoX2RlY29kZShnZW4lMkMlMjBza2lwX3NwZWNpYWxfdG9rZW5zJTNEVHJ1ZSk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFMarianMTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> typing <span class="hljs-keyword">import</span> <span class="hljs-type">List</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>src = <span class="hljs-string">&quot;fr&quot;</span>  <span class="hljs-comment"># source language</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>trg = <span class="hljs-string">&quot;en&quot;</span>  <span class="hljs-comment"># target language</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>sample_text = <span class="hljs-string">&quot;où est l&#x27;arrêt de bus ?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">f&quot;Helsinki-NLP/opus-mt-<span class="hljs-subst">{src}</span>-<span class="hljs-subst">{trg}</span>&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMarianMTModel.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>batch = tokenizer([sample_text], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>gen = model.generate(**batch)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(gen, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-string">&quot;Where is the bus stop ?&quot;</span>`,wrap:!1}}),{c(){e=m("p"),e.textContent=p,n=r(),T(s.$$.fragment)},l(o){e=h(o,"P",{"data-svelte-h":!0}),v(e)!=="svelte-kvfsh7"&&(e.textContent=p),n=i(o),y(s.$$.fragment,o)},m(o,_){l(o,e,_),l(o,n,_),b(s,o,_),u=!0},p:ve,i(o){u||(k(s.$$.fragment,o),u=!0)},o(o){w(s.$$.fragment,o),u=!1},d(o){o&&(a(e),a(n)),x(s,o)}}}function St(z){let e,p,n,s,u,o,_=`The bare MARIAN Model outputting raw hidden-states without any specific head on top.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,de,C,W=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,se,U,q,V,f,N,ae,P='The <a href="/docs/transformers/main/en/model_doc/marian#transformers.TFMarianModel">TFMarianModel</a> forward method, overrides the <code>__call__</code> special method.',ce,B,pe,A,je,F,D,Z,E,ke,me,I=`The MARIAN Model with a language modeling head. Can be used for summarization.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,_e,re,Y=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,Me,K,he,O,te,ee,ie,$e='The <a href="/docs/transformers/main/en/model_doc/marian#transformers.TFMarianMTModel">TFMarianMTModel</a> forward method, overrides the <code>__call__</code> special method.',be,ne,le,H,oe=`TF version of marian-nmt’s transformer.h (c++). Designed for the OPUS-NMT translation checkpoints. Available
models are listed <a href="https://huggingface.co/models?search=Helsinki-NLP" rel="nofollow">here</a>.`,ue,Q,fe;return e=new we({props:{title:"TFMarianModel",local:"transformers.TFMarianModel",headingTag:"h2"}}),s=new xe({props:{name:"class transformers.TFMarianModel",anchor:"transformers.TFMarianModel",parameters:[{name:"config",val:": MarianConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMarianModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/marian/modeling_tf_marian.py#L1246"}}),U=new Le({props:{$$slots:{default:[It]},$$scope:{ctx:z}}}),f=new xe({props:{name:"call",anchor:"transformers.TFMarianModel.call",parameters:[{name:"input_ids",val:": tf.Tensor | None = None"},{name:"attention_mask",val:": tf.Tensor | None = None"},{name:"decoder_input_ids",val:": tf.Tensor | None = None"},{name:"decoder_attention_mask",val:": tf.Tensor | None = None"},{name:"decoder_position_ids",val:": tf.Tensor | None = None"},{name:"head_mask",val:": tf.Tensor | None = None"},{name:"decoder_head_mask",val:": tf.Tensor | None = None"},{name:"cross_attn_head_mask",val:": tf.Tensor | None = None"},{name:"encoder_outputs",val:": tf.Tensor | None = None"},{name:"past_key_values",val:": Tuple[Tuple[tf.Tensor]] | None = None"},{name:"inputs_embeds",val:": tf.Tensor | None = None"},{name:"decoder_inputs_embeds",val:": tf.Tensor | None = None"},{name:"use_cache",val:": bool | None = None"},{name:"output_attentions",val:": bool | None = None"},{name:"output_hidden_states",val:": bool | None = None"},{name:"return_dict",val:": bool | None = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMarianModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMarianModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMarianModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Marian uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFMarianModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFMarianModel.call.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.TFMarianModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMarianModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFMarianModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFMarianModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFMarianModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFMarianModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMarianModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFMarianModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMarianModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMarianModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMarianModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/marian/modeling_tf_marian.py#L1262",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqModelOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
`}}),B=new Le({props:{$$slots:{default:[Nt]},$$scope:{ctx:z}}}),A=new qe({props:{anchor:"transformers.TFMarianModel.call.example",$$slots:{default:[qt]},$$scope:{ctx:z}}}),F=new we({props:{title:"TFMarianMTModel",local:"transformers.TFMarianMTModel",headingTag:"h2"}}),E=new xe({props:{name:"class transformers.TFMarianMTModel",anchor:"transformers.TFMarianMTModel",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMarianMTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/marian/modeling_tf_marian.py#L1359"}}),K=new Le({props:{$$slots:{default:[Zt]},$$scope:{ctx:z}}}),te=new xe({props:{name:"call",anchor:"transformers.TFMarianMTModel.call",parameters:[{name:"input_ids",val:": tf.Tensor | None = None"},{name:"attention_mask",val:": tf.Tensor | None = None"},{name:"decoder_input_ids",val:": tf.Tensor | None = None"},{name:"decoder_attention_mask",val:": tf.Tensor | None = None"},{name:"decoder_position_ids",val:": tf.Tensor | None = None"},{name:"head_mask",val:": tf.Tensor | None = None"},{name:"decoder_head_mask",val:": tf.Tensor | None = None"},{name:"cross_attn_head_mask",val:": tf.Tensor | None = None"},{name:"encoder_outputs",val:": TFBaseModelOutput | None = None"},{name:"past_key_values",val:": Tuple[Tuple[tf.Tensor]] | None = None"},{name:"inputs_embeds",val:": tf.Tensor | None = None"},{name:"decoder_inputs_embeds",val:": tf.Tensor | None = None"},{name:"use_cache",val:": bool | None = None"},{name:"output_attentions",val:": bool | None = None"},{name:"output_hidden_states",val:": bool | None = None"},{name:"return_dict",val:": bool | None = None"},{name:"labels",val:": tf.Tensor | None = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFMarianMTModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMarianMTModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMarianMTModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Marian uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If
<code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFMarianMTModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFMarianMTModel.call.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.TFMarianMTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMarianMTModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFMarianMTModel.call.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.TFMarianMTModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.FloatTensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFMarianMTModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFMarianMTModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMarianMTModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFMarianMTModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMarianMTModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMarianMTModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMarianMTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMarianMTModel.call.labels",description:`<strong>labels</strong> (<code>tf.tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/marian/modeling_tf_marian.py#L1401",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSeq2SeqLMOutput"
>transformers.modeling_tf_outputs.TFSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
`}}),ne=new Le({props:{$$slots:{default:[Wt]},$$scope:{ctx:z}}}),Q=new qe({props:{anchor:"transformers.TFMarianMTModel.call.example",$$slots:{default:[Ht]},$$scope:{ctx:z}}}),{c(){T(e.$$.fragment),p=r(),n=m("div"),T(s.$$.fragment),u=r(),o=m("p"),o.innerHTML=_,de=r(),C=m("p"),C.innerHTML=W,se=r(),T(U.$$.fragment),q=r(),V=m("div"),T(f.$$.fragment),N=r(),ae=m("p"),ae.innerHTML=P,ce=r(),T(B.$$.fragment),pe=r(),T(A.$$.fragment),je=r(),T(F.$$.fragment),D=r(),Z=m("div"),T(E.$$.fragment),ke=r(),me=m("p"),me.innerHTML=I,_e=r(),re=m("p"),re.innerHTML=Y,Me=r(),T(K.$$.fragment),he=r(),O=m("div"),T(te.$$.fragment),ee=r(),ie=m("p"),ie.innerHTML=$e,be=r(),T(ne.$$.fragment),le=r(),H=m("p"),H.innerHTML=oe,ue=r(),T(Q.$$.fragment),this.h()},l(M){y(e.$$.fragment,M),p=i(M),n=h(M,"DIV",{class:!0});var $=ye(n);y(s.$$.fragment,$),u=i($),o=h($,"P",{"data-svelte-h":!0}),v(o)!=="svelte-1724q6e"&&(o.innerHTML=_),de=i($),C=h($,"P",{"data-svelte-h":!0}),v(C)!=="svelte-1be7e3c"&&(C.innerHTML=W),se=i($),y(U.$$.fragment,$),q=i($),V=h($,"DIV",{class:!0});var R=ye(V);y(f.$$.fragment,R),N=i(R),ae=h(R,"P",{"data-svelte-h":!0}),v(ae)!=="svelte-1vgdc5b"&&(ae.innerHTML=P),ce=i(R),y(B.$$.fragment,R),pe=i(R),y(A.$$.fragment,R),R.forEach(a),$.forEach(a),je=i(M),y(F.$$.fragment,M),D=i(M),Z=h(M,"DIV",{class:!0});var X=ye(Z);y(E.$$.fragment,X),ke=i(X),me=h(X,"P",{"data-svelte-h":!0}),v(me)!=="svelte-1ugjku"&&(me.innerHTML=I),_e=i(X),re=h(X,"P",{"data-svelte-h":!0}),v(re)!=="svelte-1be7e3c"&&(re.innerHTML=Y),Me=i(X),y(K.$$.fragment,X),he=i(X),O=h(X,"DIV",{class:!0});var S=ye(O);y(te.$$.fragment,S),ee=i(S),ie=h(S,"P",{"data-svelte-h":!0}),v(ie)!=="svelte-hui2uj"&&(ie.innerHTML=$e),be=i(S),y(ne.$$.fragment,S),le=i(S),H=h(S,"P",{"data-svelte-h":!0}),v(H)!=="svelte-11jr0s7"&&(H.innerHTML=oe),ue=i(S),y(Q.$$.fragment,S),S.forEach(a),X.forEach(a),this.h()},h(){ge(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ge(n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ge(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ge(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(M,$){b(e,M,$),l(M,p,$),l(M,n,$),b(s,n,null),c(n,u),c(n,o),c(n,de),c(n,C),c(n,se),b(U,n,null),c(n,q),c(n,V),b(f,V,null),c(V,N),c(V,ae),c(V,ce),b(B,V,null),c(V,pe),b(A,V,null),l(M,je,$),b(F,M,$),l(M,D,$),l(M,Z,$),b(E,Z,null),c(Z,ke),c(Z,me),c(Z,_e),c(Z,re),c(Z,Me),b(K,Z,null),c(Z,he),c(Z,O),b(te,O,null),c(O,ee),c(O,ie),c(O,be),b(ne,O,null),c(O,le),c(O,H),c(O,ue),b(Q,O,null),fe=!0},p(M,$){const R={};$&2&&(R.$$scope={dirty:$,ctx:M}),U.$set(R);const X={};$&2&&(X.$$scope={dirty:$,ctx:M}),B.$set(X);const S={};$&2&&(S.$$scope={dirty:$,ctx:M}),A.$set(S);const j={};$&2&&(j.$$scope={dirty:$,ctx:M}),K.$set(j);const d={};$&2&&(d.$$scope={dirty:$,ctx:M}),ne.$set(d);const J={};$&2&&(J.$$scope={dirty:$,ctx:M}),Q.$set(J)},i(M){fe||(k(e.$$.fragment,M),k(s.$$.fragment,M),k(U.$$.fragment,M),k(f.$$.fragment,M),k(B.$$.fragment,M),k(A.$$.fragment,M),k(F.$$.fragment,M),k(E.$$.fragment,M),k(K.$$.fragment,M),k(te.$$.fragment,M),k(ne.$$.fragment,M),k(Q.$$.fragment,M),fe=!0)},o(M){w(e.$$.fragment,M),w(s.$$.fragment,M),w(U.$$.fragment,M),w(f.$$.fragment,M),w(B.$$.fragment,M),w(A.$$.fragment,M),w(F.$$.fragment,M),w(E.$$.fragment,M),w(K.$$.fragment,M),w(te.$$.fragment,M),w(ne.$$.fragment,M),w(Q.$$.fragment,M),fe=!1},d(M){M&&(a(p),a(n),a(je),a(D),a(Z)),x(e,M),x(s),x(U),x(f),x(B),x(A),x(F,M),x(E),x(K),x(te),x(ne),x(Q)}}}function Lt(z){let e,p;return e=new mt({props:{$$slots:{default:[St]},$$scope:{ctx:z}}}),{c(){T(e.$$.fragment)},l(n){y(e.$$.fragment,n)},m(n,s){b(e,n,s),p=!0},p(n,s){const u={};s&2&&(u.$$scope={dirty:s,ctx:n}),e.$set(u)},i(n){p||(k(e.$$.fragment,n),p=!0)},o(n){w(e.$$.fragment,n),p=!1},d(n){x(e,n)}}}function Vt(z){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=m("p"),e.innerHTML=p},l(n){e=h(n,"P",{"data-svelte-h":!0}),v(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(n,s){l(n,e,s)},p:ve,d(n){n&&a(e)}}}function Rt(z){let e,p="Example:",n,s,u;return s=new Fe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4TWFyaWFuTW9kZWwlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJIZWxzaW5raS1OTFAlMkZvcHVzLW10LWVuLWRlJTIyKSUwQW1vZGVsJTIwJTNEJTIwRmxheE1hcmlhbk1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJIZWxzaW5raS1OTFAlMkZvcHVzLW10LWVuLWRlJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJqYXglMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQWxhc3RfaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxMarianModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMarianModel.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=m("p"),e.textContent=p,n=r(),T(s.$$.fragment)},l(o){e=h(o,"P",{"data-svelte-h":!0}),v(e)!=="svelte-11lpom8"&&(e.textContent=p),n=i(o),y(s.$$.fragment,o)},m(o,_){l(o,e,_),l(o,n,_),b(s,o,_),u=!0},p:ve,i(o){u||(k(s.$$.fragment,o),u=!0)},o(o){w(s.$$.fragment,o),u=!1},d(o){o&&(a(e),a(n)),x(s,o)}}}function Gt(z){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=m("p"),e.innerHTML=p},l(n){e=h(n,"P",{"data-svelte-h":!0}),v(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(n,s){l(n,e,s)},p:ve,d(n){n&&a(e)}}}function Bt(z){let e,p="Example:",n,s,u;return s=new Fe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4TWFyaWFuTVRNb2RlbCUwQSUwQW1vZGVsJTIwJTNEJTIwRmxheE1hcmlhbk1UTW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMkhlbHNpbmtpLU5MUCUyRm9wdXMtbXQtZW4tZGUlMjIpJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIySGVsc2lua2ktTkxQJTJGb3B1cy1tdC1lbi1kZSUyMiklMEElMEF0ZXh0JTIwJTNEJTIwJTIyTXklMjBmcmllbmRzJTIwYXJlJTIwY29vbCUyMGJ1dCUyMHRoZXklMjBlYXQlMjB0b28lMjBtYW55JTIwY2FyYnMuJTIyJTBBaW5wdXRfaWRzJTIwJTNEJTIwdG9rZW5pemVyKHRleHQlMkMlMjBtYXhfbGVuZ3RoJTNENjQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMmpheCUyMikuaW5wdXRfaWRzJTBBJTBBc2VxdWVuY2VzJTIwJTNEJTIwbW9kZWwuZ2VuZXJhdGUoaW5wdXRfaWRzJTJDJTIwbWF4X2xlbmd0aCUzRDY0JTJDJTIwbnVtX2JlYW1zJTNEMikuc2VxdWVuY2VzJTBBJTBBb3V0cHV0cyUyMCUzRCUyMHRva2VuaXplci5iYXRjaF9kZWNvZGUoc2VxdWVuY2VzJTJDJTIwc2tpcF9zcGVjaWFsX3Rva2VucyUzRFRydWUpJTBBJTIzJTIwc2hvdWxkJTIwZ2l2ZSUyMCpNZWluZSUyMEZyZXVuZGUlMjBzaW5kJTIwY29vbCUyQyUyMGFiZXIlMjBzaWUlMjBlc3NlbiUyMHp1JTIwdmllbGUlMjBLb2hsZW5oeWRyYXRlLio=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxMarianMTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMarianMTModel.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-de&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;My friends are cool but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(text, max_length=<span class="hljs-number">64</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>sequences = model.generate(input_ids, max_length=<span class="hljs-number">64</span>, num_beams=<span class="hljs-number">2</span>).sequences

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = tokenizer.batch_decode(sequences, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># should give *Meine Freunde sind cool, aber sie essen zu viele Kohlenhydrate.*</span>`,wrap:!1}}),{c(){e=m("p"),e.textContent=p,n=r(),T(s.$$.fragment)},l(o){e=h(o,"P",{"data-svelte-h":!0}),v(e)!=="svelte-11lpom8"&&(e.textContent=p),n=i(o),y(s.$$.fragment,o)},m(o,_){l(o,e,_),l(o,n,_),b(s,o,_),u=!0},p:ve,i(o){u||(k(s.$$.fragment,o),u=!0)},o(o){w(s.$$.fragment,o),u=!1},d(o){o&&(a(e),a(n)),x(s,o)}}}function Xt(z){let e,p,n,s,u,o,_=`The bare Marian Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,de,C,W=`This model is also a Flax Linen
<a href="https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html" rel="nofollow">flax.nn.Module</a> subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`,se,U,q="Finally, this model supports inherent JAX features such as:",V,f,N='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',ae,P,ce,B,pe,A="The <code>FlaxMarianPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",je,F,D,Z,E,ke,me,I,_e,re,Y,Me=`The MARIAN Model with a language modeling head. Can be used for translation.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,K,he,O=`This model is also a Flax Linen
<a href="https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html" rel="nofollow">flax.nn.Module</a> subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`,te,ee,ie="Finally, this model supports inherent JAX features such as:",$e,be,ne='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',le,H,oe,ue,Q,fe="The <code>FlaxMarianPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",M,$,R,X,S;return e=new we({props:{title:"FlaxMarianModel",local:"transformers.FlaxMarianModel",headingTag:"h2"}}),s=new xe({props:{name:"class transformers.FlaxMarianModel",anchor:"transformers.FlaxMarianModel",parameters:[{name:"config",val:": MarianConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMarianModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMarianModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/marian/modeling_flax_marian.py#L1201"}}),ce=new xe({props:{name:"__call__",anchor:"transformers.FlaxMarianModel.__call__",parameters:[{name:"input_ids",val:": Array"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"decoder_position_ids",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMarianModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMarianModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMarianModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMarianModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMarianModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMarianModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMarianModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMarianModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMarianModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/marian/modeling_flax_marian.py#L1140",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
`}}),F=new Le({props:{$$slots:{default:[Vt]},$$scope:{ctx:z}}}),Z=new qe({props:{anchor:"transformers.FlaxMarianModel.__call__.example",$$slots:{default:[Rt]},$$scope:{ctx:z}}}),ke=new we({props:{title:"FlaxMarianMTModel",local:"transformers.FlaxMarianMTModel",headingTag:"h2"}}),_e=new xe({props:{name:"class transformers.FlaxMarianMTModel",anchor:"transformers.FlaxMarianMTModel",parameters:[{name:"config",val:": MarianConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxMarianMTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianConfig">MarianConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxMarianMTModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/marian/modeling_flax_marian.py#L1286"}}),oe=new xe({props:{name:"__call__",anchor:"transformers.FlaxMarianMTModel.__call__",parameters:[{name:"input_ids",val:": Array"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"decoder_position_ids",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"train",val:": bool = False"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"}],parametersDescription:[{anchor:"transformers.FlaxMarianMTModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxMarianMTModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxMarianMTModel.__call__.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.FlaxMarianMTModel.__call__.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the
paper</a> for more information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.FlaxMarianMTModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxMarianMTModel.__call__.decoder_position_ids",description:`<strong>decoder_position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each decoder input sequence tokens in the position embeddings. Selected in the
range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"decoder_position_ids"},{anchor:"transformers.FlaxMarianMTModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxMarianMTModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxMarianMTModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/marian/modeling_flax_marian.py#L1140",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput"
>transformers.modeling_flax_outputs.FlaxSeq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/marian#transformers.MarianConfig"
>MarianConfig</a>) and inputs.</p>
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
`}}),$=new Le({props:{$$slots:{default:[Gt]},$$scope:{ctx:z}}}),X=new qe({props:{anchor:"transformers.FlaxMarianMTModel.__call__.example",$$slots:{default:[Bt]},$$scope:{ctx:z}}}),{c(){T(e.$$.fragment),p=r(),n=m("div"),T(s.$$.fragment),u=r(),o=m("p"),o.innerHTML=_,de=r(),C=m("p"),C.innerHTML=W,se=r(),U=m("p"),U.textContent=q,V=r(),f=m("ul"),f.innerHTML=N,ae=r(),P=m("div"),T(ce.$$.fragment),B=r(),pe=m("p"),pe.innerHTML=A,je=r(),T(F.$$.fragment),D=r(),T(Z.$$.fragment),E=r(),T(ke.$$.fragment),me=r(),I=m("div"),T(_e.$$.fragment),re=r(),Y=m("p"),Y.innerHTML=Me,K=r(),he=m("p"),he.innerHTML=O,te=r(),ee=m("p"),ee.textContent=ie,$e=r(),be=m("ul"),be.innerHTML=ne,le=r(),H=m("div"),T(oe.$$.fragment),ue=r(),Q=m("p"),Q.innerHTML=fe,M=r(),T($.$$.fragment),R=r(),T(X.$$.fragment),this.h()},l(j){y(e.$$.fragment,j),p=i(j),n=h(j,"DIV",{class:!0});var d=ye(n);y(s.$$.fragment,d),u=i(d),o=h(d,"P",{"data-svelte-h":!0}),v(o)!=="svelte-lfsrwp"&&(o.innerHTML=_),de=i(d),C=h(d,"P",{"data-svelte-h":!0}),v(C)!=="svelte-idybz1"&&(C.innerHTML=W),se=i(d),U=h(d,"P",{"data-svelte-h":!0}),v(U)!=="svelte-1pplc4a"&&(U.textContent=q),V=i(d),f=h(d,"UL",{"data-svelte-h":!0}),v(f)!=="svelte-1w7z84m"&&(f.innerHTML=N),ae=i(d),P=h(d,"DIV",{class:!0});var J=ye(P);y(ce.$$.fragment,J),B=i(J),pe=h(J,"P",{"data-svelte-h":!0}),v(pe)!=="svelte-1pl959f"&&(pe.innerHTML=A),je=i(J),y(F.$$.fragment,J),D=i(J),y(Z.$$.fragment,J),J.forEach(a),d.forEach(a),E=i(j),y(ke.$$.fragment,j),me=i(j),I=h(j,"DIV",{class:!0});var L=ye(I);y(_e.$$.fragment,L),re=i(L),Y=h(L,"P",{"data-svelte-h":!0}),v(Y)!=="svelte-mn1ap2"&&(Y.innerHTML=Me),K=i(L),he=h(L,"P",{"data-svelte-h":!0}),v(he)!=="svelte-idybz1"&&(he.innerHTML=O),te=i(L),ee=h(L,"P",{"data-svelte-h":!0}),v(ee)!=="svelte-1pplc4a"&&(ee.textContent=ie),$e=i(L),be=h(L,"UL",{"data-svelte-h":!0}),v(be)!=="svelte-1w7z84m"&&(be.innerHTML=ne),le=i(L),H=h(L,"DIV",{class:!0});var G=ye(H);y(oe.$$.fragment,G),ue=i(G),Q=h(G,"P",{"data-svelte-h":!0}),v(Q)!=="svelte-1pl959f"&&(Q.innerHTML=fe),M=i(G),y($.$$.fragment,G),R=i(G),y(X.$$.fragment,G),G.forEach(a),L.forEach(a),this.h()},h(){ge(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ge(n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ge(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ge(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(j,d){b(e,j,d),l(j,p,d),l(j,n,d),b(s,n,null),c(n,u),c(n,o),c(n,de),c(n,C),c(n,se),c(n,U),c(n,V),c(n,f),c(n,ae),c(n,P),b(ce,P,null),c(P,B),c(P,pe),c(P,je),b(F,P,null),c(P,D),b(Z,P,null),l(j,E,d),b(ke,j,d),l(j,me,d),l(j,I,d),b(_e,I,null),c(I,re),c(I,Y),c(I,K),c(I,he),c(I,te),c(I,ee),c(I,$e),c(I,be),c(I,le),c(I,H),b(oe,H,null),c(H,ue),c(H,Q),c(H,M),b($,H,null),c(H,R),b(X,H,null),S=!0},p(j,d){const J={};d&2&&(J.$$scope={dirty:d,ctx:j}),F.$set(J);const L={};d&2&&(L.$$scope={dirty:d,ctx:j}),Z.$set(L);const G={};d&2&&(G.$$scope={dirty:d,ctx:j}),$.$set(G);const Te={};d&2&&(Te.$$scope={dirty:d,ctx:j}),X.$set(Te)},i(j){S||(k(e.$$.fragment,j),k(s.$$.fragment,j),k(ce.$$.fragment,j),k(F.$$.fragment,j),k(Z.$$.fragment,j),k(ke.$$.fragment,j),k(_e.$$.fragment,j),k(oe.$$.fragment,j),k($.$$.fragment,j),k(X.$$.fragment,j),S=!0)},o(j){w(e.$$.fragment,j),w(s.$$.fragment,j),w(ce.$$.fragment,j),w(F.$$.fragment,j),w(Z.$$.fragment,j),w(ke.$$.fragment,j),w(_e.$$.fragment,j),w(oe.$$.fragment,j),w($.$$.fragment,j),w(X.$$.fragment,j),S=!1},d(j){j&&(a(p),a(n),a(E),a(me),a(I)),x(e,j),x(s),x(ce),x(F),x(Z),x(ke,j),x(_e),x(oe),x($),x(X)}}}function Qt(z){let e,p;return e=new mt({props:{$$slots:{default:[Xt]},$$scope:{ctx:z}}}),{c(){T(e.$$.fragment)},l(n){y(e.$$.fragment,n)},m(n,s){b(e,n,s),p=!0},p(n,s){const u={};s&2&&(u.$$scope={dirty:s,ctx:n}),e.$set(u)},i(n){p||(k(e.$$.fragment,n),p=!0)},o(n){w(e.$$.fragment,n),p=!1},d(n){x(e,n)}}}function Pt(z){let e,p,n,s,u,o,_,de='<a href="https://huggingface.co/models?filter=marian"><img alt="Models" src="https://img.shields.io/badge/All_model_pages-marian-blueviolet"/></a> <a href="https://huggingface.co/spaces/docs-demos/opus-mt-zh-en"><img alt="Spaces" src="https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Spaces-blue"/></a>',C,W,se,U,q=`A framework for translation models, using the same models as BART. Translations should be similar, but not identical to output in the test set linked to in each model card.
This model was contributed by <a href="https://huggingface.co/sshleifer" rel="nofollow">sshleifer</a>.`,V,f,N,ae,P=`<li><p>Each model is about 298 MB on disk, there are more than 1,000 models.</p></li> <li><p>The list of supported language pairs can be found <a href="https://huggingface.co/Helsinki-NLP" rel="nofollow">here</a>.</p></li> <li><p>Models were originally trained by <a href="https://researchportal.helsinki.fi/en/persons/j%C3%B6rg-tiedemann" rel="nofollow">Jörg Tiedemann</a> using the <a href="https://marian-nmt.github.io/" rel="nofollow">Marian</a> C++ library, which supports fast training and translation.</p></li> <li><p>All models are transformer encoder-decoders with 6 layers in each component. Each model’s performance is documented
in a model card.</p></li> <li><p>The 80 opus models that require BPE preprocessing are not supported.</p></li> <li><p>The modeling code is the same as <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration">BartForConditionalGeneration</a> with a few minor modifications:</p> <ul><li>static (sinusoid) positional embeddings (<code>MarianConfig.static_position_embeddings=True</code>)</li> <li>no layernorm_embedding (<code>MarianConfig.normalize_embedding=False</code>)</li> <li>the model starts generating with <code>pad_token_id</code> (which has 0 as a token_embedding) as the prefix (Bart uses
<code>&lt;s/&gt;</code>),</li></ul></li> <li><p>Code to bulk convert models can be found in <code>convert_marian_to_pytorch.py</code>.</p></li>`,ce,B,pe,A,je=`<li>All model names use the following format: <code>Helsinki-NLP/opus-mt-{src}-{tgt}</code></li> <li>The language codes used to name models are inconsistent. Two digit codes can usually be found <a href="https://developers.google.com/admin-sdk/directory/v1/languages" rel="nofollow">here</a>, three digit codes require googling “language
code {code}“.</li> <li>Codes formatted like <code>es_AR</code> are usually <code>code_{region}</code>. That one is Spanish from Argentina.</li> <li>The models were converted in two stages. The first 1000 models use ISO-639-2 codes to identify languages, the second
group use a combination of ISO-639-5 codes and ISO-639-2 codes.</li>`,F,D,Z,E,ke=`<li>Since Marian models are smaller than many other translation models available in the library, they can be useful for
fine-tuning experiments and integration tests.</li> <li><a href="https://github.com/huggingface/transformers/blob/master/examples/legacy/seq2seq/train_distil_marian_enro.sh" rel="nofollow">Fine-tune on GPU</a></li>`,me,I,_e,re,Y=`<li>All model names use the following format: <code>Helsinki-NLP/opus-mt-{src}-{tgt}</code>:</li> <li>If a model can output multiple languages, and you should specify a language code by prepending the desired output
language to the <code>src_text</code>.</li> <li>You can see a models’s supported language codes in its model card, under target constituents, like in <a href="https://huggingface.co/Helsinki-NLP/opus-mt-en-roa" rel="nofollow">opus-mt-en-roa</a>.</li> <li>Note that if a model is only multilingual on the source side, like <code>Helsinki-NLP/opus-mt-roa-en</code>, no language
codes are required.</li>`,Me,K,he=`New multi-lingual models from the <a href="https://github.com/Helsinki-NLP/Tatoeba-Challenge" rel="nofollow">Tatoeba-Challenge repo</a>
require 3 character language codes:`,O,te,ee,ie,$e="Here is the code to see all available pretrained models on the hub:",be,ne,le,H,oe,ue,Q=`These are the old style multi-lingual models ported from the OPUS-MT-Train repo: and the members of each language
group:`,fe,M,$,R,X="Example of translating english to many romance languages, using old-style 2 character language codes",S,j,d,J,L,G,Te='<li><a href="../tasks/translation">Translation task guide</a></li> <li><a href="../tasks/summarization">Summarization task guide</a></li> <li><a href="../tasks/language_modeling">Causal language modeling task guide</a></li>',Ie,Je,De,Ue,Ve,st,Qe,ht=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianModel">MarianModel</a>. It is used to instantiate an
Marian model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the Marian
<a href="https://huggingface.co/Helsinki-NLP/opus-mt-en-de" rel="nofollow">Helsinki-NLP/opus-mt-en-de</a> architecture.`,at,Pe,ut=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,rt,Ze,Ke,Re,et,ze,Ge,it,Ae,ft='Construct a Marian tokenizer. Based on <a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a>.',lt,Ee,gt=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`,dt,We,ct,He,Be,pt,Ye,_t="Build model inputs from a sequence by appending eos_token_id.",tt,Se,nt,Oe,ot;return u=new we({props:{title:"MarianMT",local:"marianmt",headingTag:"h1"}}),W=new we({props:{title:"Overview",local:"overview",headingTag:"h2"}}),f=new we({props:{title:"Implementation Notes",local:"implementation-notes",headingTag:"h2"}}),B=new we({props:{title:"Naming",local:"naming",headingTag:"h2"}}),D=new we({props:{title:"Examples",local:"examples",headingTag:"h2"}}),I=new we({props:{title:"Multilingual Models",local:"multilingual-models",headingTag:"h2"}}),te=new Fe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyME1hcmlhbk1UTW9kZWwlMkMlMjBNYXJpYW5Ub2tlbml6ZXIlMEElMEFzcmNfdGV4dCUyMCUzRCUyMCU1QiUwQSUyMCUyMCUyMCUyMCUyMiUzRSUzRWZyYSUzQyUzQyUyMHRoaXMlMjBpcyUyMGElMjBzZW50ZW5jZSUyMGluJTIwZW5nbGlzaCUyMHRoYXQlMjB3ZSUyMHdhbnQlMjB0byUyMHRyYW5zbGF0ZSUyMHRvJTIwZnJlbmNoJTIyJTJDJTBBJTIwJTIwJTIwJTIwJTIyJTNFJTNFcG9yJTNDJTNDJTIwVGhpcyUyMHNob3VsZCUyMGdvJTIwdG8lMjBwb3J0dWd1ZXNlJTIyJTJDJTBBJTIwJTIwJTIwJTIwJTIyJTNFJTNFZXNwJTNDJTNDJTIwQW5kJTIwdGhpcyUyMHRvJTIwU3BhbmlzaCUyMiUyQyUwQSU1RCUwQSUwQW1vZGVsX25hbWUlMjAlM0QlMjAlMjJIZWxzaW5raS1OTFAlMkZvcHVzLW10LWVuLXJvYSUyMiUwQXRva2VuaXplciUyMCUzRCUyME1hcmlhblRva2VuaXplci5mcm9tX3ByZXRyYWluZWQobW9kZWxfbmFtZSklMEFwcmludCh0b2tlbml6ZXIuc3VwcG9ydGVkX2xhbmd1YWdlX2NvZGVzKSUwQSUwQW1vZGVsJTIwJTNEJTIwTWFyaWFuTVRNb2RlbC5mcm9tX3ByZXRyYWluZWQobW9kZWxfbmFtZSklMEF0cmFuc2xhdGVkJTIwJTNEJTIwbW9kZWwuZ2VuZXJhdGUoKip0b2tlbml6ZXIoc3JjX3RleHQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTJDJTIwcGFkZGluZyUzRFRydWUpKSUwQSU1QnRva2VuaXplci5kZWNvZGUodCUyQyUyMHNraXBfc3BlY2lhbF90b2tlbnMlM0RUcnVlKSUyMGZvciUyMHQlMjBpbiUyMHRyYW5zbGF0ZWQlNUQ=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianMTModel, MarianTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&gt;&gt;fra&lt;&lt; this is a sentence in english that we want to translate to french&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&gt;&gt;por&lt;&lt; This should go to portuguese&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&gt;&gt;esp&lt;&lt; And this to Spanish&quot;</span>,
<span class="hljs-meta">... </span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-roa&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.supported_language_codes)
[<span class="hljs-string">&#x27;&gt;&gt;zlm_Latn&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;mfe&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;hat&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;pap&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;ast&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;cat&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;ind&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;glg&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;wln&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;spa&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;fra&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;ron&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;por&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;ita&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;oci&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;arg&lt;&lt;&#x27;</span>, <span class="hljs-string">&#x27;&gt;&gt;min&lt;&lt;&#x27;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianMTModel.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>translated = model.generate(**tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>[tokenizer.decode(t, skip_special_tokens=<span class="hljs-literal">True</span>) <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> translated]
[<span class="hljs-string">&quot;c&#x27;est une phrase en anglais que nous voulons traduire en français&quot;</span>,
 <span class="hljs-string">&#x27;Isto deve ir para o português.&#x27;</span>,
 <span class="hljs-string">&#x27;Y esto al español&#x27;</span>]`,wrap:!1}}),ne=new Fe({props:{code:"ZnJvbSUyMGh1Z2dpbmdmYWNlX2h1YiUyMGltcG9ydCUyMGxpc3RfbW9kZWxzJTBBJTBBbW9kZWxfbGlzdCUyMCUzRCUyMGxpc3RfbW9kZWxzKCklMEFvcmclMjAlM0QlMjAlMjJIZWxzaW5raS1OTFAlMjIlMEFtb2RlbF9pZHMlMjAlM0QlMjAlNUJ4Lm1vZGVsSWQlMjBmb3IlMjB4JTIwaW4lMjBtb2RlbF9saXN0JTIwaWYlMjB4Lm1vZGVsSWQuc3RhcnRzd2l0aChvcmcpJTVEJTBBc3VmZml4JTIwJTNEJTIwJTVCeC5zcGxpdCglMjIlMkYlMjIpJTVCMSU1RCUyMGZvciUyMHglMjBpbiUyMG1vZGVsX2lkcyU1RCUwQW9sZF9zdHlsZV9tdWx0aV9tb2RlbHMlMjAlM0QlMjAlNUJmJTIyJTdCb3JnJTdEJTJGJTdCcyU3RCUyMiUyMGZvciUyMHMlMjBpbiUyMHN1ZmZpeCUyMGlmJTIwcyUyMCElM0QlMjBzLmxvd2VyKCklNUQ=",highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> list_models

model_list = list_models()
org = <span class="hljs-string">&quot;Helsinki-NLP&quot;</span>
model_ids = [x.modelId <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> model_list <span class="hljs-keyword">if</span> x.modelId.startswith(org)]
suffix = [x.split(<span class="hljs-string">&quot;/&quot;</span>)[<span class="hljs-number">1</span>] <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> model_ids]
old_style_multi_models = [<span class="hljs-string">f&quot;<span class="hljs-subst">{org}</span>/<span class="hljs-subst">{s}</span>&quot;</span> <span class="hljs-keyword">for</span> s <span class="hljs-keyword">in</span> suffix <span class="hljs-keyword">if</span> s != s.lower()]`,wrap:!1}}),H=new we({props:{title:"Old Style Multi-Lingual Models",local:"old-style-multi-lingual-models",headingTag:"h2"}}),M=new Fe({props:{code:"JTVCJ0hlbHNpbmtpLU5MUCUyRm9wdXMtbXQtTk9SVEhfRVUtTk9SVEhfRVUnJTJDJTBBJTIwJ0hlbHNpbmtpLU5MUCUyRm9wdXMtbXQtUk9NQU5DRS1lbiclMkMlMEElMjAnSGVsc2lua2ktTkxQJTJGb3B1cy1tdC1TQ0FORElOQVZJQS1TQ0FORElOQVZJQSclMkMlMEElMjAnSGVsc2lua2ktTkxQJTJGb3B1cy1tdC1kZS1aSCclMkMlMEElMjAnSGVsc2lua2ktTkxQJTJGb3B1cy1tdC1lbi1DRUxUSUMnJTJDJTBBJTIwJ0hlbHNpbmtpLU5MUCUyRm9wdXMtbXQtZW4tUk9NQU5DRSclMkMlMEElMjAnSGVsc2lua2ktTkxQJTJGb3B1cy1tdC1lcy1OT1JXQVknJTJDJTBBJTIwJ0hlbHNpbmtpLU5MUCUyRm9wdXMtbXQtZmktTk9SV0FZJyUyQyUwQSUyMCdIZWxzaW5raS1OTFAlMkZvcHVzLW10LWZpLVpIJyUyQyUwQSUyMCdIZWxzaW5raS1OTFAlMkZvcHVzLW10LWZpX25iX25vX25uX3J1X3N2X2VuLVNBTUknJTJDJTBBJTIwJ0hlbHNpbmtpLU5MUCUyRm9wdXMtbXQtc3YtTk9SV0FZJyUyQyUwQSUyMCdIZWxzaW5raS1OTFAlMkZvcHVzLW10LXN2LVpIJyU1RCUwQUdST1VQX01FTUJFUlMlMjAlM0QlMjAlN0IlMEElMjAnWkgnJTNBJTIwJTVCJ2NtbiclMkMlMjAnY24nJTJDJTIwJ3l1ZSclMkMlMjAnemVfemgnJTJDJTIwJ3poX2NuJyUyQyUyMCd6aF9DTiclMkMlMjAnemhfSEsnJTJDJTIwJ3poX3R3JyUyQyUyMCd6aF9UVyclMkMlMjAnemhfeXVlJyUyQyUyMCd6aHMnJTJDJTIwJ3podCclMkMlMjAnemgnJTVEJTJDJTBBJTIwJ1JPTUFOQ0UnJTNBJTIwJTVCJ2ZyJyUyQyUyMCdmcl9CRSclMkMlMjAnZnJfQ0EnJTJDJTIwJ2ZyX0ZSJyUyQyUyMCd3YSclMkMlMjAnZnJwJyUyQyUyMCdvYyclMkMlMjAnY2EnJTJDJTIwJ3JtJyUyQyUyMCdsbGQnJTJDJTIwJ2Z1ciclMkMlMjAnbGlqJyUyQyUyMCdsbW8nJTJDJTIwJ2VzJyUyQyUyMCdlc19BUiclMkMlMjAnZXNfQ0wnJTJDJTIwJ2VzX0NPJyUyQyUyMCdlc19DUiclMkMlMjAnZXNfRE8nJTJDJTIwJ2VzX0VDJyUyQyUyMCdlc19FUyclMkMlMjAnZXNfR1QnJTJDJTIwJ2VzX0hOJyUyQyUyMCdlc19NWCclMkMlMjAnZXNfTkknJTJDJTIwJ2VzX1BBJyUyQyUyMCdlc19QRSclMkMlMjAnZXNfUFInJTJDJTIwJ2VzX1NWJyUyQyUyMCdlc19VWSclMkMlMjAnZXNfVkUnJTJDJTIwJ3B0JyUyQyUyMCdwdF9iciclMkMlMjAncHRfQlInJTJDJTIwJ3B0X1BUJyUyQyUyMCdnbCclMkMlMjAnbGFkJyUyQyUyMCdhbiclMkMlMjAnbXdsJyUyQyUyMCdpdCclMkMlMjAnaXRfSVQnJTJDJTIwJ2NvJyUyQyUyMCduYXAnJTJDJTIwJ3NjbiclMkMlMjAndmVjJyUyQyUyMCdzYyclMkMlMjAncm8nJTJDJTIwJ2xhJyU1RCUyQyUwQSUyMCdOT1JUSF9FVSclM0ElMjAlNUInZGUnJTJDJTIwJ25sJyUyQyUyMCdmeSclMkMlMjAnYWYnJTJDJTIwJ2RhJyUyQyUyMCdmbyclMkMlMjAnaXMnJTJDJTIwJ25vJyUyQyUyMCduYiclMkMlMjAnbm4nJTJDJTIwJ3N2JyU1RCUyQyUwQSUyMCdTQ0FORElOQVZJQSclM0ElMjAlNUInZGEnJTJDJTIwJ2ZvJyUyQyUyMCdpcyclMkMlMjAnbm8nJTJDJTIwJ25iJyUyQyUyMCdubiclMkMlMjAnc3YnJTVEJTJDJTBBJTIwJ1NBTUknJTNBJTIwJTVCJ3NlJyUyQyUyMCdzbWEnJTJDJTIwJ3NtaiclMkMlMjAnc21uJyUyQyUyMCdzbXMnJTVEJTJDJTBBJTIwJ05PUldBWSclM0ElMjAlNUInbmJfTk8nJTJDJTIwJ25iJyUyQyUyMCdubl9OTyclMkMlMjAnbm4nJTJDJTIwJ25vZyclMkMlMjAnbm9fbmInJTJDJTIwJ25vJyU1RCUyQyUwQSUyMCdDRUxUSUMnJTNBJTIwJTVCJ2dhJyUyQyUyMCdjeSclMkMlMjAnYnInJTJDJTIwJ2dkJyUyQyUyMCdrdyclMkMlMjAnZ3YnJTVEJTBBJTdE",highlighted:`[<span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-NORTH_EU-NORTH_EU&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-ROMANCE-en&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-SCANDINAVIA-SCANDINAVIA&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-de-ZH&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-en-CELTIC&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-en-ROMANCE&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-es-NORWAY&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-fi-NORWAY&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-fi-ZH&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-fi_nb_no_nn_ru_sv_en-SAMI&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-sv-NORWAY&#x27;</span>,
 <span class="hljs-string">&#x27;Helsinki-NLP/opus-mt-sv-ZH&#x27;</span>]
GROUP_MEMBERS = {
 <span class="hljs-string">&#x27;ZH&#x27;</span>: [<span class="hljs-string">&#x27;cmn&#x27;</span>, <span class="hljs-string">&#x27;cn&#x27;</span>, <span class="hljs-string">&#x27;yue&#x27;</span>, <span class="hljs-string">&#x27;ze_zh&#x27;</span>, <span class="hljs-string">&#x27;zh_cn&#x27;</span>, <span class="hljs-string">&#x27;zh_CN&#x27;</span>, <span class="hljs-string">&#x27;zh_HK&#x27;</span>, <span class="hljs-string">&#x27;zh_tw&#x27;</span>, <span class="hljs-string">&#x27;zh_TW&#x27;</span>, <span class="hljs-string">&#x27;zh_yue&#x27;</span>, <span class="hljs-string">&#x27;zhs&#x27;</span>, <span class="hljs-string">&#x27;zht&#x27;</span>, <span class="hljs-string">&#x27;zh&#x27;</span>],
 <span class="hljs-string">&#x27;ROMANCE&#x27;</span>: [<span class="hljs-string">&#x27;fr&#x27;</span>, <span class="hljs-string">&#x27;fr_BE&#x27;</span>, <span class="hljs-string">&#x27;fr_CA&#x27;</span>, <span class="hljs-string">&#x27;fr_FR&#x27;</span>, <span class="hljs-string">&#x27;wa&#x27;</span>, <span class="hljs-string">&#x27;frp&#x27;</span>, <span class="hljs-string">&#x27;oc&#x27;</span>, <span class="hljs-string">&#x27;ca&#x27;</span>, <span class="hljs-string">&#x27;rm&#x27;</span>, <span class="hljs-string">&#x27;lld&#x27;</span>, <span class="hljs-string">&#x27;fur&#x27;</span>, <span class="hljs-string">&#x27;lij&#x27;</span>, <span class="hljs-string">&#x27;lmo&#x27;</span>, <span class="hljs-string">&#x27;es&#x27;</span>, <span class="hljs-string">&#x27;es_AR&#x27;</span>, <span class="hljs-string">&#x27;es_CL&#x27;</span>, <span class="hljs-string">&#x27;es_CO&#x27;</span>, <span class="hljs-string">&#x27;es_CR&#x27;</span>, <span class="hljs-string">&#x27;es_DO&#x27;</span>, <span class="hljs-string">&#x27;es_EC&#x27;</span>, <span class="hljs-string">&#x27;es_ES&#x27;</span>, <span class="hljs-string">&#x27;es_GT&#x27;</span>, <span class="hljs-string">&#x27;es_HN&#x27;</span>, <span class="hljs-string">&#x27;es_MX&#x27;</span>, <span class="hljs-string">&#x27;es_NI&#x27;</span>, <span class="hljs-string">&#x27;es_PA&#x27;</span>, <span class="hljs-string">&#x27;es_PE&#x27;</span>, <span class="hljs-string">&#x27;es_PR&#x27;</span>, <span class="hljs-string">&#x27;es_SV&#x27;</span>, <span class="hljs-string">&#x27;es_UY&#x27;</span>, <span class="hljs-string">&#x27;es_VE&#x27;</span>, <span class="hljs-string">&#x27;pt&#x27;</span>, <span class="hljs-string">&#x27;pt_br&#x27;</span>, <span class="hljs-string">&#x27;pt_BR&#x27;</span>, <span class="hljs-string">&#x27;pt_PT&#x27;</span>, <span class="hljs-string">&#x27;gl&#x27;</span>, <span class="hljs-string">&#x27;lad&#x27;</span>, <span class="hljs-string">&#x27;an&#x27;</span>, <span class="hljs-string">&#x27;mwl&#x27;</span>, <span class="hljs-string">&#x27;it&#x27;</span>, <span class="hljs-string">&#x27;it_IT&#x27;</span>, <span class="hljs-string">&#x27;co&#x27;</span>, <span class="hljs-string">&#x27;nap&#x27;</span>, <span class="hljs-string">&#x27;scn&#x27;</span>, <span class="hljs-string">&#x27;vec&#x27;</span>, <span class="hljs-string">&#x27;sc&#x27;</span>, <span class="hljs-string">&#x27;ro&#x27;</span>, <span class="hljs-string">&#x27;la&#x27;</span>],
 <span class="hljs-string">&#x27;NORTH_EU&#x27;</span>: [<span class="hljs-string">&#x27;de&#x27;</span>, <span class="hljs-string">&#x27;nl&#x27;</span>, <span class="hljs-string">&#x27;fy&#x27;</span>, <span class="hljs-string">&#x27;af&#x27;</span>, <span class="hljs-string">&#x27;da&#x27;</span>, <span class="hljs-string">&#x27;fo&#x27;</span>, <span class="hljs-string">&#x27;is&#x27;</span>, <span class="hljs-string">&#x27;no&#x27;</span>, <span class="hljs-string">&#x27;nb&#x27;</span>, <span class="hljs-string">&#x27;nn&#x27;</span>, <span class="hljs-string">&#x27;sv&#x27;</span>],
 <span class="hljs-string">&#x27;SCANDINAVIA&#x27;</span>: [<span class="hljs-string">&#x27;da&#x27;</span>, <span class="hljs-string">&#x27;fo&#x27;</span>, <span class="hljs-string">&#x27;is&#x27;</span>, <span class="hljs-string">&#x27;no&#x27;</span>, <span class="hljs-string">&#x27;nb&#x27;</span>, <span class="hljs-string">&#x27;nn&#x27;</span>, <span class="hljs-string">&#x27;sv&#x27;</span>],
 <span class="hljs-string">&#x27;SAMI&#x27;</span>: [<span class="hljs-string">&#x27;se&#x27;</span>, <span class="hljs-string">&#x27;sma&#x27;</span>, <span class="hljs-string">&#x27;smj&#x27;</span>, <span class="hljs-string">&#x27;smn&#x27;</span>, <span class="hljs-string">&#x27;sms&#x27;</span>],
 <span class="hljs-string">&#x27;NORWAY&#x27;</span>: [<span class="hljs-string">&#x27;nb_NO&#x27;</span>, <span class="hljs-string">&#x27;nb&#x27;</span>, <span class="hljs-string">&#x27;nn_NO&#x27;</span>, <span class="hljs-string">&#x27;nn&#x27;</span>, <span class="hljs-string">&#x27;nog&#x27;</span>, <span class="hljs-string">&#x27;no_nb&#x27;</span>, <span class="hljs-string">&#x27;no&#x27;</span>],
 <span class="hljs-string">&#x27;CELTIC&#x27;</span>: [<span class="hljs-string">&#x27;ga&#x27;</span>, <span class="hljs-string">&#x27;cy&#x27;</span>, <span class="hljs-string">&#x27;br&#x27;</span>, <span class="hljs-string">&#x27;gd&#x27;</span>, <span class="hljs-string">&#x27;kw&#x27;</span>, <span class="hljs-string">&#x27;gv&#x27;</span>]
}`,wrap:!1}}),j=new Fe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyME1hcmlhbk1UTW9kZWwlMkMlMjBNYXJpYW5Ub2tlbml6ZXIlMEElMEFzcmNfdGV4dCUyMCUzRCUyMCU1QiUwQSUyMCUyMCUyMCUyMCUyMiUzRSUzRWZyJTNDJTNDJTIwdGhpcyUyMGlzJTIwYSUyMHNlbnRlbmNlJTIwaW4lMjBlbmdsaXNoJTIwdGhhdCUyMHdlJTIwd2FudCUyMHRvJTIwdHJhbnNsYXRlJTIwdG8lMjBmcmVuY2glMjIlMkMlMEElMjAlMjAlMjAlMjAlMjIlM0UlM0VwdCUzQyUzQyUyMFRoaXMlMjBzaG91bGQlMjBnbyUyMHRvJTIwcG9ydHVndWVzZSUyMiUyQyUwQSUyMCUyMCUyMCUyMCUyMiUzRSUzRWVzJTNDJTNDJTIwQW5kJTIwdGhpcyUyMHRvJTIwU3BhbmlzaCUyMiUyQyUwQSU1RCUwQSUwQW1vZGVsX25hbWUlMjAlM0QlMjAlMjJIZWxzaW5raS1OTFAlMkZvcHVzLW10LWVuLVJPTUFOQ0UlMjIlMEF0b2tlbml6ZXIlMjAlM0QlMjBNYXJpYW5Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKG1vZGVsX25hbWUpJTBBJTBBbW9kZWwlMjAlM0QlMjBNYXJpYW5NVE1vZGVsLmZyb21fcHJldHJhaW5lZChtb2RlbF9uYW1lKSUwQXRyYW5zbGF0ZWQlMjAlM0QlMjBtb2RlbC5nZW5lcmF0ZSgqKnRva2VuaXplcihzcmNfdGV4dCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIlMkMlMjBwYWRkaW5nJTNEVHJ1ZSkpJTBBdGd0X3RleHQlMjAlM0QlMjAlNUJ0b2tlbml6ZXIuZGVjb2RlKHQlMkMlMjBza2lwX3NwZWNpYWxfdG9rZW5zJTNEVHJ1ZSklMjBmb3IlMjB0JTIwaW4lMjB0cmFuc2xhdGVkJTVE",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MarianMTModel, MarianTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>src_text = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&gt;&gt;fr&lt;&lt; this is a sentence in english that we want to translate to french&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&gt;&gt;pt&lt;&lt; This should go to portuguese&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&gt;&gt;es&lt;&lt; And this to Spanish&quot;</span>,
<span class="hljs-meta">... </span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&quot;Helsinki-NLP/opus-mt-en-ROMANCE&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MarianTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MarianMTModel.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>translated = model.generate(**tokenizer(src_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>tgt_text = [tokenizer.decode(t, skip_special_tokens=<span class="hljs-literal">True</span>) <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> translated]
[<span class="hljs-string">&quot;c&#x27;est une phrase en anglais que nous voulons traduire en français&quot;</span>, 
 <span class="hljs-string">&#x27;Isto deve ir para o português.&#x27;</span>,
 <span class="hljs-string">&#x27;Y esto al español&#x27;</span>]`,wrap:!1}}),J=new we({props:{title:"Resources",local:"resources",headingTag:"h2"}}),Je=new we({props:{title:"MarianConfig",local:"transformers.MarianConfig",headingTag:"h2"}}),Ve=new xe({props:{name:"class transformers.MarianConfig",anchor:"transformers.MarianConfig",parameters:[{name:"vocab_size",val:" = 58101"},{name:"decoder_vocab_size",val:" = None"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 58100"},{name:"scale_embedding",val:" = False"},{name:"pad_token_id",val:" = 58100"},{name:"eos_token_id",val:" = 0"},{name:"forced_eos_token_id",val:" = 0"},{name:"share_encoder_decoder_embeddings",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MarianConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 58101) &#x2014;
Vocabulary size of the Marian model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/marian#transformers.MarianModel">MarianModel</a> or <a href="/docs/transformers/main/en/model_doc/marian#transformers.TFMarianModel">TFMarianModel</a>.`,name:"vocab_size"},{anchor:"transformers.MarianConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.MarianConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.MarianConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.MarianConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.MarianConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.MarianConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.MarianConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.MarianConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.MarianConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.MarianConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.MarianConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.MarianConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.MarianConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.MarianConfig.encoder_layerdrop",description:`<strong>encoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"encoder_layerdrop"},{anchor:"transformers.MarianConfig.decoder_layerdrop",description:`<strong>decoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"decoder_layerdrop"},{anchor:"transformers.MarianConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.MarianConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"},{anchor:"transformers.MarianConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/marian/configuration_marian.py#L34"}}),Ze=new qe({props:{anchor:"transformers.MarianConfig.example",$$slots:{default:[xt]},$$scope:{ctx:z}}}),Re=new we({props:{title:"MarianTokenizer",local:"transformers.MarianTokenizer",headingTag:"h2"}}),Ge=new xe({props:{name:"class transformers.MarianTokenizer",anchor:"transformers.MarianTokenizer",parameters:[{name:"source_spm",val:""},{name:"target_spm",val:""},{name:"vocab",val:""},{name:"target_vocab_file",val:" = None"},{name:"source_lang",val:" = None"},{name:"target_lang",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"model_max_length",val:" = 512"},{name:"sp_model_kwargs",val:": Optional = None"},{name:"separate_vocabs",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MarianTokenizer.source_spm",description:`<strong>source_spm</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a .spm extension) that
contains the vocabulary for the source language.`,name:"source_spm"},{anchor:"transformers.MarianTokenizer.target_spm",description:`<strong>target_spm</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a .spm extension) that
contains the vocabulary for the target language.`,name:"target_spm"},{anchor:"transformers.MarianTokenizer.source_lang",description:`<strong>source_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the source language.`,name:"source_lang"},{anchor:"transformers.MarianTokenizer.target_lang",description:`<strong>target_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A string representing the target language.`,name:"target_lang"},{anchor:"transformers.MarianTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MarianTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.MarianTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MarianTokenizer.model_max_length",description:`<strong>model_max_length</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sentence length the model accepts.`,name:"model_max_length"},{anchor:"transformers.MarianTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;eop&gt;&quot;, &quot;&lt;eod&gt;&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.MarianTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/marian/tokenization_marian.py#L63"}}),We=new qe({props:{anchor:"transformers.MarianTokenizer.example",$$slots:{default:[vt]},$$scope:{ctx:z}}}),Be=new xe({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MarianTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/marian/tokenization_marian.py#L287"}}),Se=new wt({props:{pytorch:!0,tensorflow:!0,jax:!0,$$slots:{jax:[Qt],tensorflow:[Lt],pytorch:[Ft]},$$scope:{ctx:z}}}),{c(){e=m("meta"),p=r(),n=m("p"),s=r(),T(u.$$.fragment),o=r(),_=m("div"),_.innerHTML=de,C=r(),T(W.$$.fragment),se=r(),U=m("p"),U.innerHTML=q,V=r(),T(f.$$.fragment),N=r(),ae=m("ul"),ae.innerHTML=P,ce=r(),T(B.$$.fragment),pe=r(),A=m("ul"),A.innerHTML=je,F=r(),T(D.$$.fragment),Z=r(),E=m("ul"),E.innerHTML=ke,me=r(),T(I.$$.fragment),_e=r(),re=m("ul"),re.innerHTML=Y,Me=r(),K=m("p"),K.innerHTML=he,O=r(),T(te.$$.fragment),ee=r(),ie=m("p"),ie.textContent=$e,be=r(),T(ne.$$.fragment),le=r(),T(H.$$.fragment),oe=r(),ue=m("p"),ue.textContent=Q,fe=r(),T(M.$$.fragment),$=r(),R=m("p"),R.textContent=X,S=r(),T(j.$$.fragment),d=r(),T(J.$$.fragment),L=r(),G=m("ul"),G.innerHTML=Te,Ie=r(),T(Je.$$.fragment),De=r(),Ue=m("div"),T(Ve.$$.fragment),st=r(),Qe=m("p"),Qe.innerHTML=ht,at=r(),Pe=m("p"),Pe.innerHTML=ut,rt=r(),T(Ze.$$.fragment),Ke=r(),T(Re.$$.fragment),et=r(),ze=m("div"),T(Ge.$$.fragment),it=r(),Ae=m("p"),Ae.innerHTML=ft,lt=r(),Ee=m("p"),Ee.innerHTML=gt,dt=r(),T(We.$$.fragment),ct=r(),He=m("div"),T(Be.$$.fragment),pt=r(),Ye=m("p"),Ye.textContent=_t,tt=r(),T(Se.$$.fragment),nt=r(),Oe=m("p"),this.h()},l(t){const g=kt("svelte-u9bgzb",document.head);e=h(g,"META",{name:!0,content:!0}),g.forEach(a),p=i(t),n=h(t,"P",{}),ye(n).forEach(a),s=i(t),y(u.$$.fragment,t),o=i(t),_=h(t,"DIV",{class:!0,"data-svelte-h":!0}),v(_)!=="svelte-28p0nh"&&(_.innerHTML=de),C=i(t),y(W.$$.fragment,t),se=i(t),U=h(t,"P",{"data-svelte-h":!0}),v(U)!=="svelte-1rx9mzx"&&(U.innerHTML=q),V=i(t),y(f.$$.fragment,t),N=i(t),ae=h(t,"UL",{"data-svelte-h":!0}),v(ae)!=="svelte-8dg9h8"&&(ae.innerHTML=P),ce=i(t),y(B.$$.fragment,t),pe=i(t),A=h(t,"UL",{"data-svelte-h":!0}),v(A)!=="svelte-1teg5jx"&&(A.innerHTML=je),F=i(t),y(D.$$.fragment,t),Z=i(t),E=h(t,"UL",{"data-svelte-h":!0}),v(E)!=="svelte-ivqdaf"&&(E.innerHTML=ke),me=i(t),y(I.$$.fragment,t),_e=i(t),re=h(t,"UL",{"data-svelte-h":!0}),v(re)!=="svelte-1yiu6u"&&(re.innerHTML=Y),Me=i(t),K=h(t,"P",{"data-svelte-h":!0}),v(K)!=="svelte-n5hft2"&&(K.innerHTML=he),O=i(t),y(te.$$.fragment,t),ee=i(t),ie=h(t,"P",{"data-svelte-h":!0}),v(ie)!=="svelte-1jqi7uz"&&(ie.textContent=$e),be=i(t),y(ne.$$.fragment,t),le=i(t),y(H.$$.fragment,t),oe=i(t),ue=h(t,"P",{"data-svelte-h":!0}),v(ue)!=="svelte-h75jvn"&&(ue.textContent=Q),fe=i(t),y(M.$$.fragment,t),$=i(t),R=h(t,"P",{"data-svelte-h":!0}),v(R)!=="svelte-1vkdk78"&&(R.textContent=X),S=i(t),y(j.$$.fragment,t),d=i(t),y(J.$$.fragment,t),L=i(t),G=h(t,"UL",{"data-svelte-h":!0}),v(G)!=="svelte-1kdght5"&&(G.innerHTML=Te),Ie=i(t),y(Je.$$.fragment,t),De=i(t),Ue=h(t,"DIV",{class:!0});var Ne=ye(Ue);y(Ve.$$.fragment,Ne),st=i(Ne),Qe=h(Ne,"P",{"data-svelte-h":!0}),v(Qe)!=="svelte-5p65dr"&&(Qe.innerHTML=ht),at=i(Ne),Pe=h(Ne,"P",{"data-svelte-h":!0}),v(Pe)!=="svelte-o55m63"&&(Pe.innerHTML=ut),rt=i(Ne),y(Ze.$$.fragment,Ne),Ne.forEach(a),Ke=i(t),y(Re.$$.fragment,t),et=i(t),ze=h(t,"DIV",{class:!0});var Ce=ye(ze);y(Ge.$$.fragment,Ce),it=i(Ce),Ae=h(Ce,"P",{"data-svelte-h":!0}),v(Ae)!=="svelte-1giw7lm"&&(Ae.innerHTML=ft),lt=i(Ce),Ee=h(Ce,"P",{"data-svelte-h":!0}),v(Ee)!=="svelte-1c3t5ty"&&(Ee.innerHTML=gt),dt=i(Ce),y(We.$$.fragment,Ce),ct=i(Ce),He=h(Ce,"DIV",{class:!0});var Xe=ye(He);y(Be.$$.fragment,Xe),pt=i(Xe),Ye=h(Xe,"P",{"data-svelte-h":!0}),v(Ye)!=="svelte-wv4s2m"&&(Ye.textContent=_t),Xe.forEach(a),Ce.forEach(a),tt=i(t),y(Se.$$.fragment,t),nt=i(t),Oe=h(t,"P",{}),ye(Oe).forEach(a),this.h()},h(){ge(e,"name","hf:doc:metadata"),ge(e,"content",At),ge(_,"class","flex flex-wrap space-x-1"),ge(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ge(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ge(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){c(document.head,e),l(t,p,g),l(t,n,g),l(t,s,g),b(u,t,g),l(t,o,g),l(t,_,g),l(t,C,g),b(W,t,g),l(t,se,g),l(t,U,g),l(t,V,g),b(f,t,g),l(t,N,g),l(t,ae,g),l(t,ce,g),b(B,t,g),l(t,pe,g),l(t,A,g),l(t,F,g),b(D,t,g),l(t,Z,g),l(t,E,g),l(t,me,g),b(I,t,g),l(t,_e,g),l(t,re,g),l(t,Me,g),l(t,K,g),l(t,O,g),b(te,t,g),l(t,ee,g),l(t,ie,g),l(t,be,g),b(ne,t,g),l(t,le,g),b(H,t,g),l(t,oe,g),l(t,ue,g),l(t,fe,g),b(M,t,g),l(t,$,g),l(t,R,g),l(t,S,g),b(j,t,g),l(t,d,g),b(J,t,g),l(t,L,g),l(t,G,g),l(t,Ie,g),b(Je,t,g),l(t,De,g),l(t,Ue,g),b(Ve,Ue,null),c(Ue,st),c(Ue,Qe),c(Ue,at),c(Ue,Pe),c(Ue,rt),b(Ze,Ue,null),l(t,Ke,g),b(Re,t,g),l(t,et,g),l(t,ze,g),b(Ge,ze,null),c(ze,it),c(ze,Ae),c(ze,lt),c(ze,Ee),c(ze,dt),b(We,ze,null),c(ze,ct),c(ze,He),b(Be,He,null),c(He,pt),c(He,Ye),l(t,tt,g),b(Se,t,g),l(t,nt,g),l(t,Oe,g),ot=!0},p(t,[g]){const Ne={};g&2&&(Ne.$$scope={dirty:g,ctx:t}),Ze.$set(Ne);const Ce={};g&2&&(Ce.$$scope={dirty:g,ctx:t}),We.$set(Ce);const Xe={};g&2&&(Xe.$$scope={dirty:g,ctx:t}),Se.$set(Xe)},i(t){ot||(k(u.$$.fragment,t),k(W.$$.fragment,t),k(f.$$.fragment,t),k(B.$$.fragment,t),k(D.$$.fragment,t),k(I.$$.fragment,t),k(te.$$.fragment,t),k(ne.$$.fragment,t),k(H.$$.fragment,t),k(M.$$.fragment,t),k(j.$$.fragment,t),k(J.$$.fragment,t),k(Je.$$.fragment,t),k(Ve.$$.fragment,t),k(Ze.$$.fragment,t),k(Re.$$.fragment,t),k(Ge.$$.fragment,t),k(We.$$.fragment,t),k(Be.$$.fragment,t),k(Se.$$.fragment,t),ot=!0)},o(t){w(u.$$.fragment,t),w(W.$$.fragment,t),w(f.$$.fragment,t),w(B.$$.fragment,t),w(D.$$.fragment,t),w(I.$$.fragment,t),w(te.$$.fragment,t),w(ne.$$.fragment,t),w(H.$$.fragment,t),w(M.$$.fragment,t),w(j.$$.fragment,t),w(J.$$.fragment,t),w(Je.$$.fragment,t),w(Ve.$$.fragment,t),w(Ze.$$.fragment,t),w(Re.$$.fragment,t),w(Ge.$$.fragment,t),w(We.$$.fragment,t),w(Be.$$.fragment,t),w(Se.$$.fragment,t),ot=!1},d(t){t&&(a(p),a(n),a(s),a(o),a(_),a(C),a(se),a(U),a(V),a(N),a(ae),a(ce),a(pe),a(A),a(F),a(Z),a(E),a(me),a(_e),a(re),a(Me),a(K),a(O),a(ee),a(ie),a(be),a(le),a(oe),a(ue),a(fe),a($),a(R),a(S),a(d),a(L),a(G),a(Ie),a(De),a(Ue),a(Ke),a(et),a(ze),a(tt),a(nt),a(Oe)),a(e),x(u,t),x(W,t),x(f,t),x(B,t),x(D,t),x(I,t),x(te,t),x(ne,t),x(H,t),x(M,t),x(j,t),x(J,t),x(Je,t),x(Ve),x(Ze),x(Re,t),x(Ge),x(We),x(Be),x(Se,t)}}}const At='{"title":"MarianMT","local":"marianmt","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Implementation Notes","local":"implementation-notes","sections":[],"depth":2},{"title":"Naming","local":"naming","sections":[],"depth":2},{"title":"Examples","local":"examples","sections":[],"depth":2},{"title":"Multilingual Models","local":"multilingual-models","sections":[],"depth":2},{"title":"Old Style Multi-Lingual Models","local":"old-style-multi-lingual-models","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"MarianConfig","local":"transformers.MarianConfig","sections":[],"depth":2},{"title":"MarianTokenizer","local":"transformers.MarianTokenizer","sections":[],"depth":2},{"title":"MarianModel","local":"transformers.MarianModel","sections":[],"depth":2},{"title":"MarianMTModel","local":"transformers.MarianMTModel","sections":[],"depth":2},{"title":"MarianForCausalLM","local":"transformers.MarianForCausalLM","sections":[],"depth":2},{"title":"TFMarianModel","local":"transformers.TFMarianModel","sections":[],"depth":2},{"title":"TFMarianMTModel","local":"transformers.TFMarianMTModel","sections":[],"depth":2},{"title":"FlaxMarianModel","local":"transformers.FlaxMarianModel","sections":[],"depth":2},{"title":"FlaxMarianMTModel","local":"transformers.FlaxMarianMTModel","sections":[],"depth":2}],"depth":1}';function Et(z){return Tt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class sn extends yt{constructor(e){super(),bt(this,e,Et,Pt,Mt,{})}}export{sn as component};
