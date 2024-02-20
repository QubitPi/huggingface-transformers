import{s as Xn,o as Bn,n as S}from"../chunks/scheduler.9bc65507.js";import{S as Pn,i as An,g as l,s as a,r as m,A as En,h as c,f as d,c as r,j as H,u as f,x as h,k as j,y as s,a as p,v as g,d as _,t as T,w as M}from"../chunks/index.707bf1b6.js";import{T as Ae}from"../chunks/Tip.c2ecdbf4.js";import{D as R}from"../chunks/Docstring.17db21ae.js";import{C as Ee}from"../chunks/CodeBlock.54a9f38d.js";import{E as zt}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as L}from"../chunks/Heading.342b1fa6.js";function On(w){let t,b='Refer to <a href="t5">T5’s documentation page</a> for more tips, code examples and notebooks.';return{c(){t=l("p"),t.innerHTML=b},l(i){t=c(i,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1he4oyy"&&(t.innerHTML=b)},m(i,u){p(i,t,u)},p:S,d(i){i&&d(t)}}}function Qn(w){let t,b="Examples:",i,u,y;return u=new Ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFVNVDVNb2RlbCUyQyUyMEF1dG9Ub2tlbml6ZXIlMEElMEFtb2RlbCUyMCUzRCUyMFVNVDVNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlJTJGdW10NS1zbWFsbCUyMiklMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUlMkZ1bXQ1LXNtYWxsJTIyKSUwQW5vaXN5X3RleHQlMjAlM0QlMjAlMjJVTiUyME9mZml6aWVyJTIwc2FndCUyQyUyMGRhc3MlMjB3ZWl0ZXIlMjAlM0NleHRyYV9pZF8wJTNFJTIwd2VyZGVuJTIwbXVzcyUyMGluJTIwU3lyaWVuLiUyMiUwQWxhYmVsJTIwJTNEJTIwJTIyJTNDZXh0cmFfaWRfMCUzRSUyMHZlcmhhbmRlbHQlMjIlMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoaW5wdXRzJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEFsYWJlbHMlMjAlM0QlMjB0b2tlbml6ZXIobGFiZWwlM0RsYWJlbCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKGlucHV0X2lkcyUzRGlucHV0cyU1QiUyMmlucHV0X2lkcyUyMiU1RCUyQyUyMGRlY29kZXJfaW5wdXRfaWRzJTNEbGFiZWxzJTVCJTIyaW5wdXRfaWRzJTIyJTVEKSUwQWhpZGRlbl9zdGF0ZXMlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRl",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> UMT5Model, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = UMT5Model.from_pretrained(<span class="hljs-string">&quot;google/umt5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/umt5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>noisy_text = <span class="hljs-string">&quot;UN Offizier sagt, dass weiter &lt;extra_id_0&gt; werden muss in Syrien.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>label = <span class="hljs-string">&quot;&lt;extra_id_0&gt; verhandelt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(inputs, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(label=label, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], decoder_input_ids=labels[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){t=l("p"),t.textContent=b,i=a(),m(u.$$.fragment)},l(o){t=c(o,"P",{"data-svelte-h":!0}),h(t)!=="svelte-kvfsh7"&&(t.textContent=b),i=r(o),f(u.$$.fragment,o)},m(o,k){p(o,t,k),p(o,i,k),g(u,o,k),y=!0},p:S,i(o){y||(_(u.$$.fragment,o),y=!0)},o(o){T(u.$$.fragment,o),y=!1},d(o){o&&(d(t),d(i)),M(u,o)}}}function Dn(w){let t,b=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=l("p"),t.innerHTML=b},l(i){t=c(i,"P",{"data-svelte-h":!0}),h(t)!=="svelte-fincs2"&&(t.innerHTML=b)},m(i,u){p(i,t,u)},p:S,d(i){i&&d(t)}}}function Yn(w){let t,b="Example:",i,u,y;return u=new Ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBVTVQ1TW9kZWwlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUlMkZ1bXQ1LXNtYWxsJTIyKSUwQW1vZGVsJTIwJTNEJTIwVU1UNU1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUlMkZ1bXQ1LXNtYWxsJTIyKSUwQSUwQWlucHV0X2lkcyUyMCUzRCUyMHRva2VuaXplciglMEElMjAlMjAlMjAlMjAlMjJTdHVkaWVzJTIwaGF2ZSUyMGJlZW4lMjBzaG93biUyMHRoYXQlMjBvd25pbmclMjBhJTIwZG9nJTIwaXMlMjBnb29kJTIwZm9yJTIweW91JTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiUwQSkuaW5wdXRfaWRzJTIwJTIwJTIzJTIwQmF0Y2glMjBzaXplJTIwMSUwQWRlY29kZXJfaW5wdXRfaWRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMlN0dWRpZXMlMjBzaG93JTIwdGhhdCUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpLmlucHV0X2lkcyUyMCUyMCUyMyUyMEJhdGNoJTIwc2l6ZSUyMDElMEElMEElMjMlMjBwcmVwcm9jZXNzJTNBJTIwUHJlcGVuZCUyMGRlY29kZXJfaW5wdXRfaWRzJTIwd2l0aCUyMHN0YXJ0JTIwdG9rZW4lMjB3aGljaCUyMGlzJTIwcGFkJTIwdG9rZW4lMjBmb3IlMjBVTVQ1TW9kZWwuJTBBJTIzJTIwVGhpcyUyMGlzJTIwbm90JTIwbmVlZGVkJTIwZm9yJTIwdG9yY2gncyUyMFVNVDVGb3JDb25kaXRpb25hbEdlbmVyYXRpb24lMjBhcyUyMGl0JTIwZG9lcyUyMHRoaXMlMjBpbnRlcm5hbGx5JTIwdXNpbmclMjBsYWJlbHMlMjBhcmcuJTBBZGVjb2Rlcl9pbnB1dF9pZHMlMjAlM0QlMjBtb2RlbC5fc2hpZnRfcmlnaHQoZGVjb2Rlcl9pbnB1dF9pZHMpJTBBJTBBJTIzJTIwZm9yd2FyZCUyMHBhc3MlMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoaW5wdXRfaWRzJTNEaW5wdXRfaWRzJTJDJTIwZGVjb2Rlcl9pbnB1dF9pZHMlM0RkZWNvZGVyX2lucHV0X2lkcyklMEFsYXN0X2hpZGRlbl9zdGF0ZXMlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRl",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, UMT5Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/umt5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = UMT5Model.from_pretrained(<span class="hljs-string">&quot;google/umt5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># preprocess: Prepend decoder_input_ids with start token which is pad token for UMT5Model.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># This is not needed for torch&#x27;s UMT5ForConditionalGeneration as it does this internally using labels arg.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = model._shift_right(decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){t=l("p"),t.textContent=b,i=a(),m(u.$$.fragment)},l(o){t=c(o,"P",{"data-svelte-h":!0}),h(t)!=="svelte-11lpom8"&&(t.textContent=b),i=r(o),f(u.$$.fragment,o)},m(o,k){p(o,t,k),p(o,i,k),g(u,o,k),y=!0},p:S,i(o){y||(_(u.$$.fragment,o),y=!0)},o(o){T(u.$$.fragment,o),y=!1},d(o){o&&(d(t),d(i)),M(u,o)}}}function Kn(w){let t,b="Examples:",i,u,y;return u=new Ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFVNVDVGb3JDb25kaXRpb25hbEdlbmVyYXRpb24lMkMlMjBBdXRvVG9rZW5pemVyJTBBJTBBbW9kZWwlMjAlM0QlMjBVTVQ1Rm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUlMkZ1bXQ1LXNtYWxsJTIyKSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZSUyRnVtdDUtc21hbGwlMjIpJTBBYXJ0aWNsZSUyMCUzRCUyMCUyMlVOJTIwT2ZmaXppZXIlMjBzYWd0JTJDJTIwZGFzcyUyMHdlaXRlciUyMHZlcmhhbmRlbHQlMjB3ZXJkZW4lMjBtdXNzJTIwaW4lMjBTeXJpZW4uJTIyJTBBc3VtbWFyeSUyMCUzRCUyMCUyMldlaXRlciUyMFZlcmhhbmRsdW5nJTIwaW4lMjBTeXJpZW4uJTIyJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKGFydGljbGUlMkMlMjB0ZXh0X3RhcmdldCUzRHN1bW1hcnklMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEFsb3NzJTIwJTNEJTIwb3V0cHV0cy5sb3Nz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> UMT5ForConditionalGeneration, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = UMT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/umt5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/umt5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>article = <span class="hljs-string">&quot;UN Offizier sagt, dass weiter verhandelt werden muss in Syrien.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary = <span class="hljs-string">&quot;Weiter Verhandlung in Syrien.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(article, text_target=summary, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`,wrap:!1}}),{c(){t=l("p"),t.textContent=b,i=a(),m(u.$$.fragment)},l(o){t=c(o,"P",{"data-svelte-h":!0}),h(t)!=="svelte-kvfsh7"&&(t.textContent=b),i=r(o),f(u.$$.fragment,o)},m(o,k){p(o,t,k),p(o,i,k),g(u,o,k),y=!0},p:S,i(o){y||(_(u.$$.fragment,o),y=!0)},o(o){T(u.$$.fragment,o),y=!1},d(o){o&&(d(t),d(i)),M(u,o)}}}function es(w){let t,b=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=l("p"),t.innerHTML=b},l(i){t=c(i,"P",{"data-svelte-h":!0}),h(t)!=="svelte-fincs2"&&(t.innerHTML=b)},m(i,u){p(i,t,u)},p:S,d(i){i&&d(t)}}}function ts(w){let t,b="Examples:",i,u,y;return u=new Ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBVTVQ1Rm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlJTJGdW10NS1zbWFsbCUyMiklMEFtb2RlbCUyMCUzRCUyMFVNVDVGb3JDb25kaXRpb25hbEdlbmVyYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZSUyRnVtdDUtc21hbGwlMjIpJTBBJTBBJTIzJTIwdHJhaW5pbmclMEFpbnB1dF9pZHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIyVGhlJTIwJTNDZXh0cmFfaWRfMCUzRSUyMHdhbGtzJTIwaW4lMjAlM0NleHRyYV9pZF8xJTNFJTIwcGFyayUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpLmlucHV0X2lkcyUwQWxhYmVscyUyMCUzRCUyMHRva2VuaXplciglMjIlM0NleHRyYV9pZF8wJTNFJTIwY3V0ZSUyMGRvZyUyMCUzQ2V4dHJhX2lkXzElM0UlMjB0aGUlMjAlM0NleHRyYV9pZF8yJTNFJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMikuaW5wdXRfaWRzJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKGlucHV0X2lkcyUzRGlucHV0X2lkcyUyQyUyMGxhYmVscyUzRGxhYmVscyklMEFsb3NzJTIwJTNEJTIwb3V0cHV0cy5sb3NzJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHMlMEElMEElMjMlMjBpbmZlcmVuY2UlMEFpbnB1dF9pZHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIyU3R1ZGllcyUyMGhhdmUlMjBzaG93biUyMHRoYXQlMjAlM0NleHRyYV9pZF8wJTNFJTIwZ29vZCUyMGZvciUyMHlvdSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpLmlucHV0X2lkcyUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbC5nZW5lcmF0ZShpbnB1dF9pZHMpJTBBdG9rZW5pemVyLmRlY29kZShvdXRwdXRzJTVCMCU1RCUyQyUyMHNraXBfc3BlY2lhbF90b2tlbnMlM0RUcnVlKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, UMT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/umt5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = UMT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/umt5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;The &lt;extra_id_0&gt; walks in &lt;extra_id_1&gt; park&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;&lt;extra_id_0&gt; cute dog &lt;extra_id_1&gt; the &lt;extra_id_2&gt;&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># inference</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;Studies have shown that &lt;extra_id_0&gt; good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>)`,wrap:!1}}),{c(){t=l("p"),t.textContent=b,i=a(),m(u.$$.fragment)},l(o){t=c(o,"P",{"data-svelte-h":!0}),h(t)!=="svelte-kvfsh7"&&(t.textContent=b),i=r(o),f(u.$$.fragment,o)},m(o,k){p(o,t,k),p(o,i,k),g(u,o,k),y=!0},p:S,i(o){y||(_(u.$$.fragment,o),y=!0)},o(o){T(u.$$.fragment,o),y=!1},d(o){o&&(d(t),d(i)),M(u,o)}}}function os(w){let t,b="Examples:",i,u,y;return u=new Ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFVNVDVFbmNvZGVyTW9kZWwlMkMlMjBBdXRvVG9rZW5pemVyJTBBJTBBbW9kZWwlMjAlM0QlMjBVTVQ1RW5jb2Rlck1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUlMkZ1bXQ1LXNtYWxsJTIyKSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZSUyRnVtdDUtc21hbGwlMjIpJTBBYXJ0aWNsZSUyMCUzRCUyMCUyMlVOJTIwT2ZmaXppZXIlMjBzYWd0JTJDJTIwZGFzcyUyMHdlaXRlciUyMHZlcmhhbmRlbHQlMjB3ZXJkZW4lMjBtdXNzJTIwaW4lMjBTeXJpZW4uJTIyJTBBaW5wdXRfaWRzJTIwJTNEJTIwdG9rZW5pemVyKGFydGljbGUlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKS5pbnB1dF9pZHMlMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoaW5wdXRfaWRzKSUwQWhpZGRlbl9zdGF0ZSUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> UMT5EncoderModel, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = UMT5EncoderModel.from_pretrained(<span class="hljs-string">&quot;google/umt5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/umt5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>article = <span class="hljs-string">&quot;UN Offizier sagt, dass weiter verhandelt werden muss in Syrien.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(article, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>hidden_state = outputs.last_hidden_state`,wrap:!1}}),{c(){t=l("p"),t.textContent=b,i=a(),m(u.$$.fragment)},l(o){t=c(o,"P",{"data-svelte-h":!0}),h(t)!=="svelte-kvfsh7"&&(t.textContent=b),i=r(o),f(u.$$.fragment,o)},m(o,k){p(o,t,k),p(o,i,k),g(u,o,k),y=!0},p:S,i(o){y||(_(u.$$.fragment,o),y=!0)},o(o){T(u.$$.fragment,o),y=!1},d(o){o&&(d(t),d(i)),M(u,o)}}}function ns(w){let t,b=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=l("p"),t.innerHTML=b},l(i){t=c(i,"P",{"data-svelte-h":!0}),h(t)!=="svelte-fincs2"&&(t.innerHTML=b)},m(i,u){p(i,t,u)},p:S,d(i){i&&d(t)}}}function ss(w){let t,b="Example:",i,u,y;return u=new Ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBVTVQ1RW5jb2Rlck1vZGVsJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlJTJGdW10NS1zbWFsbCUyMiklMEFtb2RlbCUyMCUzRCUyMFVNVDVFbmNvZGVyTW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZSUyRnVtdDUtc21hbGwlMjIpJTBBaW5wdXRfaWRzJTIwJTNEJTIwdG9rZW5pemVyKCUwQSUyMCUyMCUyMCUyMCUyMlN0dWRpZXMlMjBoYXZlJTIwYmVlbiUyMHNob3duJTIwdGhhdCUyMG93bmluZyUyMGElMjBkb2clMjBpcyUyMGdvb2QlMjBmb3IlMjB5b3UlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTBBKS5pbnB1dF9pZHMlMjAlMjAlMjMlMjBCYXRjaCUyMHNpemUlMjAxJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKGlucHV0X2lkcyUzRGlucHV0X2lkcyklMEFsYXN0X2hpZGRlbl9zdGF0ZXMlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRl",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, UMT5EncoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/umt5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = UMT5EncoderModel.from_pretrained(<span class="hljs-string">&quot;google/umt5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){t=l("p"),t.textContent=b,i=a(),m(u.$$.fragment)},l(o){t=c(o,"P",{"data-svelte-h":!0}),h(t)!=="svelte-11lpom8"&&(t.textContent=b),i=r(o),f(u.$$.fragment,o)},m(o,k){p(o,t,k),p(o,i,k),g(u,o,k),y=!0},p:S,i(o){y||(_(u.$$.fragment,o),y=!0)},o(o){T(u.$$.fragment,o),y=!1},d(o){o&&(d(t),d(i)),M(u,o)}}}function as(w){let t,b=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=l("p"),t.innerHTML=b},l(i){t=c(i,"P",{"data-svelte-h":!0}),h(t)!=="svelte-fincs2"&&(t.innerHTML=b)},m(i,u){p(i,t,u)},p:S,d(i){i&&d(t)}}}function rs(w){let t,b=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=l("p"),t.innerHTML=b},l(i){t=c(i,"P",{"data-svelte-h":!0}),h(t)!=="svelte-fincs2"&&(t.innerHTML=b)},m(i,u){p(i,t,u)},p:S,d(i){i&&d(t)}}}function ds(w){let t,b=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=l("p"),t.innerHTML=b},l(i){t=c(i,"P",{"data-svelte-h":!0}),h(t)!=="svelte-fincs2"&&(t.innerHTML=b)},m(i,u){p(i,t,u)},p:S,d(i){i&&d(t)}}}function is(w){let t,b,i,u,y,o,k,on='<a href="https://huggingface.co/models?filter=umt5"><img alt="Models" src="https://img.shields.io/badge/All_model_pages-mt5-blueviolet"/></a> <a href="https://huggingface.co/spaces/docs-demos/mt5-small-finetuned-arxiv-cs-finetuned-arxiv-cs-full"><img alt="Spaces" src="https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Spaces-blue"/></a>',Ct,me,Ft,fe,nn='The UMT5 model was proposed in <a href="https://openreview.net/forum?id=kXwdL1cWOAi" rel="nofollow">UniMax: Fairer and More Effective Language Sampling for Large-Scale Multilingual Pretraining</a> by Hyung Won Chung, Xavier Garcia, Adam Roberts, Yi Tay, Orhan Firat, Sharan Narang, Noah Constant.',qt,ge,sn="The abstract from the paper is the following:",Jt,_e,an="<em>Pretrained multilingual large language models have typically used heuristic temperature-based sampling to balance between different languages. However previous work has not systematically evaluated the efficacy of different pretraining language distributions across model scales. In this paper, we propose a new sampling method, UniMax, that delivers more uniform coverage of head languages while mitigating overfitting on tail languages by explicitly capping the number of repeats over each language’s corpus. We perform an extensive series of ablations testing a range of sampling strategies on a suite of multilingual benchmarks, while varying model scale. We find that UniMax outperforms standard temperature-based sampling, and the benefits persist as scale increases. As part of our contribution, we release: (i) an improved and refreshed mC4 multilingual corpus consisting of 29 trillion characters across 107 languages, and (ii) a suite of pretrained umT5 model checkpoints trained with UniMax sampling.</em>",jt,Te,rn="Google has released the following variants:",It,Me,dn='<li><a href="https://huggingface.co/google/umt5-small" rel="nofollow">google/umt5-small</a></li> <li><a href="https://huggingface.co/google/umt5-base" rel="nofollow">google/umt5-base</a></li> <li><a href="https://huggingface.co/google/umt5-xl" rel="nofollow">google/umt5-xl</a></li> <li><a href="https://huggingface.co/google/umt5-xxl" rel="nofollow">google/umt5-xxl</a>.</li>',Zt,be,ln=`This model was contributed by <a href="https://huggingface.co/agemagician" rel="nofollow">agemagician</a> and <a href="https://huggingface.co/stefan-it" rel="nofollow">stefan-it</a>. The original code can be
found <a href="https://github.com/google-research/t5x" rel="nofollow">here</a>.`,Wt,ye,Ht,ke,cn=`<li>UMT5 was only pre-trained on <a href="https://huggingface.co/datasets/mc4" rel="nofollow">mC4</a> excluding any supervised training.
Therefore, this model has to be fine-tuned before it is usable on a downstream task, unlike the original T5 model.</li> <li>Since umT5 was pre-trained in an unsupervised manner, there’s no real advantage to using a task prefix during single-task
fine-tuning. If you are doing multi-task fine-tuning, you should use a prefix.</li>`,Rt,we,St,ve,pn=`<code>UmT5</code> is based on mT5, with a non-shared relative positional bias that is computed for each layer. This means that the model set <code>has_relative_bias</code> for each layer.
The conversion script is also different because the model was saved in t5x’s latest checkpointing format.`,Nt,Ue,Vt,$e,Gt,te,Lt,ze,Xt,X,xe,ao,Oe,un=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/umt5#transformers.UMT5Model">UMT5Model</a>. It is used to instantiate a UMT5
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the UMT5
<a href="https://huggingface.co/google/umt5-small" rel="nofollow">google/umt5-small</a> architecture.`,ro,Qe,hn=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,Bt,Ce,Pt,v,Fe,io,De,mn="The bare UMT5 Model transformer outputting raw hidden-states without any specific head on top.",lo,Ye,fn=`The UMT5 model was proposed in <a href="https://arxiv.org/abs/1910.10683" rel="nofollow">Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer</a> by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It’s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`,co,Ke,gn=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,po,et,_n=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,uo,oe,ho,N,qe,mo,tt,Tn='The <a href="/docs/transformers/main/en/model_doc/umt5#transformers.UMT5Model">UMT5Model</a> forward method, overrides the <code>__call__</code> special method.',fo,ne,go,se,At,Je,Et,U,je,_o,ot,Mn="UMT5 Model with a <code>language modeling</code> head on top.",To,nt,bn=`The UMT5 model was proposed in <a href="https://arxiv.org/abs/1910.10683" rel="nofollow">Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer</a> by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It’s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`,Mo,st,yn=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,bo,at,kn=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,yo,ae,ko,V,Ie,wo,rt,wn='The <a href="/docs/transformers/main/en/model_doc/umt5#transformers.UMT5ForConditionalGeneration">UMT5ForConditionalGeneration</a> forward method, overrides the <code>__call__</code> special method.',vo,re,Uo,de,Ot,Ze,Qt,$,We,$o,dt,vn="The bare UMT5 Model transformer outputting encoder’s raw hidden-states without any specific head on top.",zo,it,Un=`The UMT5 model was proposed in <a href="https://arxiv.org/abs/1910.10683" rel="nofollow">Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer</a> by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It’s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`,xo,lt,$n=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Co,ct,zn=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Fo,ie,qo,G,He,Jo,pt,xn='The <a href="/docs/transformers/main/en/model_doc/umt5#transformers.UMT5EncoderModel">UMT5EncoderModel</a> forward method, overrides the <code>__call__</code> special method.',jo,le,Io,ce,Dt,Re,Yt,z,Se,Zo,ut,Cn=`UMT5 model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`,Wo,ht,Fn=`The UMT5 model was proposed in <a href="https://arxiv.org/abs/1910.10683" rel="nofollow">Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer</a> by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It’s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`,Ho,mt,qn=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Ro,ft,Jn=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,So,E,Ne,No,gt,jn='The <a href="/docs/transformers/main/en/model_doc/umt5#transformers.UMT5ForSequenceClassification">UMT5ForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',Vo,pe,Kt,Ve,eo,x,Ge,Go,_t,In=`UMT5 Encoder Model with a token classification head on top (a linear layer on top of the hidden-states output)
e.g. for Named-Entity-Recognition (NER) tasks.`,Lo,Tt,Zn=`The UMT5 model was proposed in <a href="https://arxiv.org/abs/1910.10683" rel="nofollow">Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer</a> by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It’s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`,Xo,Mt,Wn=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Bo,bt,Hn=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Po,O,Le,Ao,yt,Rn='The <a href="/docs/transformers/main/en/model_doc/umt5#transformers.UMT5ForTokenClassification">UMT5ForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',Eo,ue,to,Xe,oo,C,Be,Oo,kt,Sn=`UMT5 Model with a span classification head on top for extractive question-answering tasks like SQuAD (linear layers
on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,Qo,wt,Nn=`The UMT5 model was proposed in <a href="https://arxiv.org/abs/1910.10683" rel="nofollow">Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer</a> by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It’s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`,Do,vt,Vn=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Yo,Ut,Gn=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Ko,Q,Pe,en,$t,Ln='The <a href="/docs/transformers/main/en/model_doc/umt5#transformers.UMT5ForQuestionAnswering">UMT5ForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',tn,he,no,xt,so;return y=new L({props:{title:"UMT5",local:"umt5",headingTag:"h1"}}),me=new L({props:{title:"Overview",local:"overview",headingTag:"h2"}}),ye=new L({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),we=new L({props:{title:"Differences with mT5?",local:"differences-with-mt5",headingTag:"h2"}}),Ue=new L({props:{title:"Sample usage",local:"sample-usage",headingTag:"h1"}}),$e=new Ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Nb2RlbEZvclNlcTJTZXFMTSUyQyUyMEF1dG9Ub2tlbml6ZXIlMEElMEFtb2RlbCUyMCUzRCUyMEF1dG9Nb2RlbEZvclNlcTJTZXFMTS5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlJTJGdW10NS1zbWFsbCUyMiklMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUlMkZ1bXQ1LXNtYWxsJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMEElMjAlMjAlMjAlMjAlMjJBJTIwJTNDZXh0cmFfaWRfMCUzRSUyMHdhbGtzJTIwaW50byUyMGElMjBiYXIlMjBhbmQlMjBvcmRlcnMlMjBhJTIwJTNDZXh0cmFfaWRfMSUzRSUyMHdpdGglMjAlM0NleHRyYV9pZF8yJTNFJTIwcGluY2glMjBvZiUyMCUzQ2V4dHJhX2lkXzMlM0UuJTIyJTJDJTBBJTIwJTIwJTIwJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiUyQyUwQSklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwuZ2VuZXJhdGUoKippbnB1dHMpJTBBcHJpbnQodG9rZW5pemVyLmJhdGNoX2RlY29kZShvdXRwdXRzKSk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSeq2SeqLM, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;google/umt5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/umt5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;A &lt;extra_id_0&gt; walks into a bar and orders a &lt;extra_id_1&gt; with &lt;extra_id_2&gt; pinch of &lt;extra_id_3&gt;.&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.batch_decode(outputs))
[<span class="hljs-string">&#x27;&lt;pad&gt;&lt;extra_id_0&gt;nyone who&lt;extra_id_1&gt; drink&lt;extra_id_2&gt; a&lt;extra_id_3&gt; alcohol&lt;extra_id_4&gt; A&lt;extra_id_5&gt; A. This&lt;extra_id_6&gt; I&lt;extra_id_7&gt;&lt;extra_id_52&gt;&lt;extra_id_53&gt;&lt;/s&gt;&#x27;</span>]`,wrap:!1}}),te=new Ae({props:{$$slots:{default:[On]},$$scope:{ctx:w}}}),ze=new L({props:{title:"UMT5Config",local:"transformers.UMT5Config",headingTag:"h2"}}),xe=new R({props:{name:"class transformers.UMT5Config",anchor:"transformers.UMT5Config",parameters:[{name:"vocab_size",val:" = 250112"},{name:"d_model",val:" = 512"},{name:"d_kv",val:" = 64"},{name:"d_ff",val:" = 1024"},{name:"num_layers",val:" = 8"},{name:"num_decoder_layers",val:" = None"},{name:"num_heads",val:" = 6"},{name:"relative_attention_num_buckets",val:" = 32"},{name:"relative_attention_max_distance",val:" = 128"},{name:"dropout_rate",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_factor",val:" = 1.0"},{name:"feed_forward_proj",val:" = 'gated-gelu'"},{name:"is_encoder_decoder",val:" = True"},{name:"use_cache",val:" = True"},{name:"tokenizer_class",val:" = 'T5Tokenizer'"},{name:"tie_word_embeddings",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"eos_token_id",val:" = 1"},{name:"decoder_start_token_id",val:" = 0"},{name:"classifier_dropout",val:" = 0.0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.UMT5Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 250112) &#x2014;
Vocabulary size of the UMT5 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/umt5#transformers.UMT5Model">UMT5Model</a> or <code>TFUMT5Model</code>.`,name:"vocab_size"},{anchor:"transformers.UMT5Config.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Size of the encoder layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.UMT5Config.d_kv",description:`<strong>d_kv</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Size of the key, query, value projections per attention head. <code>d_kv</code> has to be equal to <code>d_model // num_heads</code>.`,name:"d_kv"},{anchor:"transformers.UMT5Config.d_ff",description:`<strong>d_ff</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Size of the intermediate feed forward layer in each <code>UMT5Block</code>.`,name:"d_ff"},{anchor:"transformers.UMT5Config.num_layers",description:`<strong>num_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_layers"},{anchor:"transformers.UMT5Config.num_decoder_layers",description:`<strong>num_decoder_layers</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Number of hidden layers in the Transformer decoder. Will use the same value as <code>num_layers</code> if not set.`,name:"num_decoder_layers"},{anchor:"transformers.UMT5Config.num_heads",description:`<strong>num_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_heads"},{anchor:"transformers.UMT5Config.relative_attention_num_buckets",description:`<strong>relative_attention_num_buckets</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The number of buckets to use for each attention layer.`,name:"relative_attention_num_buckets"},{anchor:"transformers.UMT5Config.relative_attention_max_distance",description:`<strong>relative_attention_max_distance</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
The maximum distance of the longer sequences for the bucket separation.`,name:"relative_attention_max_distance"},{anchor:"transformers.UMT5Config.dropout_rate",description:`<strong>dropout_rate</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The ratio for all dropout layers.`,name:"dropout_rate"},{anchor:"transformers.UMT5Config.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.UMT5Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-6) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.UMT5Config.initializer_factor",description:`<strong>initializer_factor</strong> (<code>float</code>, <em>optional</em>, defaults to 1) &#x2014;
A factor for initializing all weight matrices (should be kept to 1, used internally for initialization
testing).`,name:"initializer_factor"},{anchor:"transformers.UMT5Config.feed_forward_proj",description:`<strong>feed_forward_proj</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;gated-gelu&quot;</code>) &#x2014;
Type of feed forward layer to be used. Should be one of <code>&quot;relu&quot;</code> or <code>&quot;gated-gelu&quot;</code>.`,name:"feed_forward_proj"},{anchor:"transformers.UMT5Config.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/umt5/configuration_umt5.py#L31"}}),Ce=new L({props:{title:"UMT5Model",local:"transformers.UMT5Model",headingTag:"h2"}}),Fe=new R({props:{name:"class transformers.UMT5Model",anchor:"transformers.UMT5Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.UMT5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/umt5#transformers.UMT5Config">UMT5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/umt5/modeling_umt5.py#L927"}}),oe=new zt({props:{anchor:"transformers.UMT5Model.example",$$slots:{default:[Qn]},$$scope:{ctx:w}}}),qe=new R({props:{name:"forward",anchor:"transformers.UMT5Model.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.UMT5Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. UMT5 is a model with relative position embeddings so
you should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./umt5#training">UMT5 Training</a>.`,name:"input_ids"},{anchor:"transformers.UMT5Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.UMT5Model.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>UMT5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./umt5#training">UMT5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.UMT5Model.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.UMT5Model.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.UMT5Model.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.UMT5Model.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.UMT5Model.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.UMT5Model.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.UMT5Model.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.UMT5Model.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.UMT5Model.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.UMT5Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.UMT5Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.UMT5Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/umt5/modeling_umt5.py#L1005",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/umt5#transformers.UMT5Config"
>UMT5Config</a>) and inputs.</p>
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
`}}),ne=new Ae({props:{$$slots:{default:[Dn]},$$scope:{ctx:w}}}),se=new zt({props:{anchor:"transformers.UMT5Model.forward.example",$$slots:{default:[Yn]},$$scope:{ctx:w}}}),Je=new L({props:{title:"UMT5ForConditionalGeneration",local:"transformers.UMT5ForConditionalGeneration",headingTag:"h2"}}),je=new R({props:{name:"class transformers.UMT5ForConditionalGeneration",anchor:"transformers.UMT5ForConditionalGeneration",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.UMT5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/umt5#transformers.UMT5Config">UMT5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/umt5/modeling_umt5.py#L1103"}}),ae=new zt({props:{anchor:"transformers.UMT5ForConditionalGeneration.example",$$slots:{default:[Kn]},$$scope:{ctx:w}}}),Ie=new R({props:{name:"forward",anchor:"transformers.UMT5ForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.UMT5ForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. UMT5 is a model with relative position embeddings so
you should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./umt5#training">UMT5 Training</a>.`,name:"input_ids"},{anchor:"transformers.UMT5ForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.UMT5ForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>UMT5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./umt5#training">UMT5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.UMT5ForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.UMT5ForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.UMT5ForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.UMT5ForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.UMT5ForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.UMT5ForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.UMT5ForConditionalGeneration.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.UMT5ForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.UMT5ForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.UMT5ForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.UMT5ForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.UMT5ForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.UMT5ForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[-100, 0, ..., config.vocab_size - 1]</code>. All labels set to <code>-100</code> are ignored (masked), the loss is only computed for
labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/umt5/modeling_umt5.py#L1179",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/umt5#transformers.UMT5Config"
>UMT5Config</a>) and inputs.</p>
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
`}}),re=new Ae({props:{$$slots:{default:[es]},$$scope:{ctx:w}}}),de=new zt({props:{anchor:"transformers.UMT5ForConditionalGeneration.forward.example",$$slots:{default:[ts]},$$scope:{ctx:w}}}),Ze=new L({props:{title:"UMT5EncoderModel",local:"transformers.UMT5EncoderModel",headingTag:"h2"}}),We=new R({props:{name:"class transformers.UMT5EncoderModel",anchor:"transformers.UMT5EncoderModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.UMT5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/umt5#transformers.UMT5Config">UMT5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/umt5/modeling_umt5.py#L1357"}}),ie=new zt({props:{anchor:"transformers.UMT5EncoderModel.example",$$slots:{default:[os]},$$scope:{ctx:w}}}),He=new R({props:{name:"forward",anchor:"transformers.UMT5EncoderModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.UMT5EncoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. UMT5 is a model with relative position embeddings so
you should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./umt5#training">UMT5 Training</a>.`,name:"input_ids"},{anchor:"transformers.UMT5EncoderModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.UMT5EncoderModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.UMT5EncoderModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.UMT5EncoderModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.UMT5EncoderModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.UMT5EncoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/umt5/modeling_umt5.py#L1419",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/umt5#transformers.UMT5Config"
>UMT5Config</a>) and inputs.</p>
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
`}}),le=new Ae({props:{$$slots:{default:[ns]},$$scope:{ctx:w}}}),ce=new zt({props:{anchor:"transformers.UMT5EncoderModel.forward.example",$$slots:{default:[ss]},$$scope:{ctx:w}}}),Re=new L({props:{title:"UMT5ForSequenceClassification",local:"transformers.UMT5ForSequenceClassification",headingTag:"h2"}}),Se=new R({props:{name:"class transformers.UMT5ForSequenceClassification",anchor:"transformers.UMT5ForSequenceClassification",parameters:[{name:"config",val:": UMT5Config"}],parametersDescription:[{anchor:"transformers.UMT5ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/umt5#transformers.UMT5Config">UMT5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/umt5/modeling_umt5.py#L1463"}}),Ne=new R({props:{name:"forward",anchor:"transformers.UMT5ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.UMT5ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. UMT5 is a model with relative position embeddings so
you should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./umt5#training">UMT5 Training</a>.`,name:"input_ids"},{anchor:"transformers.UMT5ForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.UMT5ForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>UMT5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./umt5#training">UMT5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.UMT5ForSequenceClassification.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.UMT5ForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.UMT5ForSequenceClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.UMT5ForSequenceClassification.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.UMT5ForSequenceClassification.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.UMT5ForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.UMT5ForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.UMT5ForSequenceClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.UMT5ForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.UMT5ForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.UMT5ForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.UMT5ForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.UMT5ForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/umt5/modeling_umt5.py#L1485",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/umt5#transformers.UMT5Config"
>UMT5Config</a>) and inputs.</p>
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
`}}),pe=new Ae({props:{$$slots:{default:[as]},$$scope:{ctx:w}}}),Ve=new L({props:{title:"UMT5ForTokenClassification",local:"transformers.UMT5ForTokenClassification",headingTag:"h2"}}),Ge=new R({props:{name:"class transformers.UMT5ForTokenClassification",anchor:"transformers.UMT5ForTokenClassification",parameters:[{name:"config",val:": UMT5Config"}],parametersDescription:[{anchor:"transformers.UMT5ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/umt5#transformers.UMT5Config">UMT5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/umt5/modeling_umt5.py#L1597"}}),Le=new R({props:{name:"forward",anchor:"transformers.UMT5ForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.UMT5ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. UMT5 is a model with relative position embeddings so
you should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./umt5#training">UMT5 Training</a>.`,name:"input_ids"},{anchor:"transformers.UMT5ForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.UMT5ForTokenClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>UMT5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./umt5#training">UMT5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.UMT5ForTokenClassification.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.UMT5ForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.UMT5ForTokenClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.UMT5ForTokenClassification.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.UMT5ForTokenClassification.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.UMT5ForTokenClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.UMT5ForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.UMT5ForTokenClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.UMT5ForTokenClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.UMT5ForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.UMT5ForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.UMT5ForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.UMT5ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/umt5/modeling_umt5.py#L1620",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/umt5#transformers.UMT5Config"
>UMT5Config</a>) and inputs.</p>
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
`}}),ue=new Ae({props:{$$slots:{default:[rs]},$$scope:{ctx:w}}}),Xe=new L({props:{title:"UMT5ForQuestionAnswering",local:"transformers.UMT5ForQuestionAnswering",headingTag:"h2"}}),Be=new R({props:{name:"class transformers.UMT5ForQuestionAnswering",anchor:"transformers.UMT5ForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.UMT5ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/umt5#transformers.UMT5Config">UMT5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/umt5/modeling_umt5.py#L1672"}}),Pe=new R({props:{name:"forward",anchor:"transformers.UMT5ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"start_positions",val:": Optional = None"},{name:"end_positions",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.UMT5ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. UMT5 is a model with relative position embeddings so
you should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./umt5#training">UMT5 Training</a>.`,name:"input_ids"},{anchor:"transformers.UMT5ForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.UMT5ForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>UMT5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./umt5#training">UMT5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.UMT5ForQuestionAnswering.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.UMT5ForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.UMT5ForQuestionAnswering.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.UMT5ForQuestionAnswering.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.UMT5ForQuestionAnswering.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.UMT5ForQuestionAnswering.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.UMT5ForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.UMT5ForQuestionAnswering.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.UMT5ForQuestionAnswering.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.UMT5ForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.UMT5ForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.UMT5ForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.UMT5ForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.UMT5ForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/umt5/modeling_umt5.py#L1730",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/umt5#transformers.UMT5Config"
>UMT5Config</a>) and inputs.</p>
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
`}}),he=new Ae({props:{$$slots:{default:[ds]},$$scope:{ctx:w}}}),{c(){t=l("meta"),b=a(),i=l("p"),u=a(),m(y.$$.fragment),o=a(),k=l("div"),k.innerHTML=on,Ct=a(),m(me.$$.fragment),Ft=a(),fe=l("p"),fe.innerHTML=nn,qt=a(),ge=l("p"),ge.textContent=sn,Jt=a(),_e=l("p"),_e.innerHTML=an,jt=a(),Te=l("p"),Te.textContent=rn,It=a(),Me=l("ul"),Me.innerHTML=dn,Zt=a(),be=l("p"),be.innerHTML=ln,Wt=a(),m(ye.$$.fragment),Ht=a(),ke=l("ul"),ke.innerHTML=cn,Rt=a(),m(we.$$.fragment),St=a(),ve=l("p"),ve.innerHTML=pn,Nt=a(),m(Ue.$$.fragment),Vt=a(),m($e.$$.fragment),Gt=a(),m(te.$$.fragment),Lt=a(),m(ze.$$.fragment),Xt=a(),X=l("div"),m(xe.$$.fragment),ao=a(),Oe=l("p"),Oe.innerHTML=un,ro=a(),Qe=l("p"),Qe.innerHTML=hn,Bt=a(),m(Ce.$$.fragment),Pt=a(),v=l("div"),m(Fe.$$.fragment),io=a(),De=l("p"),De.textContent=mn,lo=a(),Ye=l("p"),Ye.innerHTML=fn,co=a(),Ke=l("p"),Ke.innerHTML=gn,po=a(),et=l("p"),et.innerHTML=_n,uo=a(),m(oe.$$.fragment),ho=a(),N=l("div"),m(qe.$$.fragment),mo=a(),tt=l("p"),tt.innerHTML=Tn,fo=a(),m(ne.$$.fragment),go=a(),m(se.$$.fragment),At=a(),m(Je.$$.fragment),Et=a(),U=l("div"),m(je.$$.fragment),_o=a(),ot=l("p"),ot.innerHTML=Mn,To=a(),nt=l("p"),nt.innerHTML=bn,Mo=a(),st=l("p"),st.innerHTML=yn,bo=a(),at=l("p"),at.innerHTML=kn,yo=a(),m(ae.$$.fragment),ko=a(),V=l("div"),m(Ie.$$.fragment),wo=a(),rt=l("p"),rt.innerHTML=wn,vo=a(),m(re.$$.fragment),Uo=a(),m(de.$$.fragment),Ot=a(),m(Ze.$$.fragment),Qt=a(),$=l("div"),m(We.$$.fragment),$o=a(),dt=l("p"),dt.textContent=vn,zo=a(),it=l("p"),it.innerHTML=Un,xo=a(),lt=l("p"),lt.innerHTML=$n,Co=a(),ct=l("p"),ct.innerHTML=zn,Fo=a(),m(ie.$$.fragment),qo=a(),G=l("div"),m(He.$$.fragment),Jo=a(),pt=l("p"),pt.innerHTML=xn,jo=a(),m(le.$$.fragment),Io=a(),m(ce.$$.fragment),Dt=a(),m(Re.$$.fragment),Yt=a(),z=l("div"),m(Se.$$.fragment),Zo=a(),ut=l("p"),ut.textContent=Cn,Wo=a(),ht=l("p"),ht.innerHTML=Fn,Ho=a(),mt=l("p"),mt.innerHTML=qn,Ro=a(),ft=l("p"),ft.innerHTML=Jn,So=a(),E=l("div"),m(Ne.$$.fragment),No=a(),gt=l("p"),gt.innerHTML=jn,Vo=a(),m(pe.$$.fragment),Kt=a(),m(Ve.$$.fragment),eo=a(),x=l("div"),m(Ge.$$.fragment),Go=a(),_t=l("p"),_t.textContent=In,Lo=a(),Tt=l("p"),Tt.innerHTML=Zn,Xo=a(),Mt=l("p"),Mt.innerHTML=Wn,Bo=a(),bt=l("p"),bt.innerHTML=Hn,Po=a(),O=l("div"),m(Le.$$.fragment),Ao=a(),yt=l("p"),yt.innerHTML=Rn,Eo=a(),m(ue.$$.fragment),to=a(),m(Xe.$$.fragment),oo=a(),C=l("div"),m(Be.$$.fragment),Oo=a(),kt=l("p"),kt.innerHTML=Sn,Qo=a(),wt=l("p"),wt.innerHTML=Nn,Do=a(),vt=l("p"),vt.innerHTML=Vn,Yo=a(),Ut=l("p"),Ut.innerHTML=Gn,Ko=a(),Q=l("div"),m(Pe.$$.fragment),en=a(),$t=l("p"),$t.innerHTML=Ln,tn=a(),m(he.$$.fragment),no=a(),xt=l("p"),this.h()},l(e){const n=En("svelte-u9bgzb",document.head);t=c(n,"META",{name:!0,content:!0}),n.forEach(d),b=r(e),i=c(e,"P",{}),H(i).forEach(d),u=r(e),f(y.$$.fragment,e),o=r(e),k=c(e,"DIV",{class:!0,"data-svelte-h":!0}),h(k)!=="svelte-aa8zp4"&&(k.innerHTML=on),Ct=r(e),f(me.$$.fragment,e),Ft=r(e),fe=c(e,"P",{"data-svelte-h":!0}),h(fe)!=="svelte-1r3qk5i"&&(fe.innerHTML=nn),qt=r(e),ge=c(e,"P",{"data-svelte-h":!0}),h(ge)!=="svelte-vfdo9a"&&(ge.textContent=sn),Jt=r(e),_e=c(e,"P",{"data-svelte-h":!0}),h(_e)!=="svelte-10kmzrd"&&(_e.innerHTML=an),jt=r(e),Te=c(e,"P",{"data-svelte-h":!0}),h(Te)!=="svelte-1p0jqca"&&(Te.textContent=rn),It=r(e),Me=c(e,"UL",{"data-svelte-h":!0}),h(Me)!=="svelte-coj30a"&&(Me.innerHTML=dn),Zt=r(e),be=c(e,"P",{"data-svelte-h":!0}),h(be)!=="svelte-1orfdft"&&(be.innerHTML=ln),Wt=r(e),f(ye.$$.fragment,e),Ht=r(e),ke=c(e,"UL",{"data-svelte-h":!0}),h(ke)!=="svelte-gb6546"&&(ke.innerHTML=cn),Rt=r(e),f(we.$$.fragment,e),St=r(e),ve=c(e,"P",{"data-svelte-h":!0}),h(ve)!=="svelte-4mli02"&&(ve.innerHTML=pn),Nt=r(e),f(Ue.$$.fragment,e),Vt=r(e),f($e.$$.fragment,e),Gt=r(e),f(te.$$.fragment,e),Lt=r(e),f(ze.$$.fragment,e),Xt=r(e),X=c(e,"DIV",{class:!0});var D=H(X);f(xe.$$.fragment,D),ao=r(D),Oe=c(D,"P",{"data-svelte-h":!0}),h(Oe)!=="svelte-vpcm6g"&&(Oe.innerHTML=un),ro=r(D),Qe=c(D,"P",{"data-svelte-h":!0}),h(Qe)!=="svelte-o55m63"&&(Qe.innerHTML=hn),D.forEach(d),Bt=r(e),f(Ce.$$.fragment,e),Pt=r(e),v=c(e,"DIV",{class:!0});var F=H(v);f(Fe.$$.fragment,F),io=r(F),De=c(F,"P",{"data-svelte-h":!0}),h(De)!=="svelte-j7l1ea"&&(De.textContent=mn),lo=r(F),Ye=c(F,"P",{"data-svelte-h":!0}),h(Ye)!=="svelte-4ex3z6"&&(Ye.innerHTML=fn),co=r(F),Ke=c(F,"P",{"data-svelte-h":!0}),h(Ke)!=="svelte-6pahdo"&&(Ke.innerHTML=gn),po=r(F),et=c(F,"P",{"data-svelte-h":!0}),h(et)!=="svelte-hswkmf"&&(et.innerHTML=_n),uo=r(F),f(oe.$$.fragment,F),ho=r(F),N=c(F,"DIV",{class:!0});var B=H(N);f(qe.$$.fragment,B),mo=r(B),tt=c(B,"P",{"data-svelte-h":!0}),h(tt)!=="svelte-pwa4co"&&(tt.innerHTML=Tn),fo=r(B),f(ne.$$.fragment,B),go=r(B),f(se.$$.fragment,B),B.forEach(d),F.forEach(d),At=r(e),f(Je.$$.fragment,e),Et=r(e),U=c(e,"DIV",{class:!0});var q=H(U);f(je.$$.fragment,q),_o=r(q),ot=c(q,"P",{"data-svelte-h":!0}),h(ot)!=="svelte-1h0jipp"&&(ot.innerHTML=Mn),To=r(q),nt=c(q,"P",{"data-svelte-h":!0}),h(nt)!=="svelte-4ex3z6"&&(nt.innerHTML=bn),Mo=r(q),st=c(q,"P",{"data-svelte-h":!0}),h(st)!=="svelte-6pahdo"&&(st.innerHTML=yn),bo=r(q),at=c(q,"P",{"data-svelte-h":!0}),h(at)!=="svelte-hswkmf"&&(at.innerHTML=kn),yo=r(q),f(ae.$$.fragment,q),ko=r(q),V=c(q,"DIV",{class:!0});var P=H(V);f(Ie.$$.fragment,P),wo=r(P),rt=c(P,"P",{"data-svelte-h":!0}),h(rt)!=="svelte-1qazqo8"&&(rt.innerHTML=wn),vo=r(P),f(re.$$.fragment,P),Uo=r(P),f(de.$$.fragment,P),P.forEach(d),q.forEach(d),Ot=r(e),f(Ze.$$.fragment,e),Qt=r(e),$=c(e,"DIV",{class:!0});var J=H($);f(We.$$.fragment,J),$o=r(J),dt=c(J,"P",{"data-svelte-h":!0}),h(dt)!=="svelte-k2qq32"&&(dt.textContent=vn),zo=r(J),it=c(J,"P",{"data-svelte-h":!0}),h(it)!=="svelte-4ex3z6"&&(it.innerHTML=Un),xo=r(J),lt=c(J,"P",{"data-svelte-h":!0}),h(lt)!=="svelte-6pahdo"&&(lt.innerHTML=$n),Co=r(J),ct=c(J,"P",{"data-svelte-h":!0}),h(ct)!=="svelte-hswkmf"&&(ct.innerHTML=zn),Fo=r(J),f(ie.$$.fragment,J),qo=r(J),G=c(J,"DIV",{class:!0});var A=H(G);f(He.$$.fragment,A),Jo=r(A),pt=c(A,"P",{"data-svelte-h":!0}),h(pt)!=="svelte-w2nlnk"&&(pt.innerHTML=xn),jo=r(A),f(le.$$.fragment,A),Io=r(A),f(ce.$$.fragment,A),A.forEach(d),J.forEach(d),Dt=r(e),f(Re.$$.fragment,e),Yt=r(e),z=c(e,"DIV",{class:!0});var I=H(z);f(Se.$$.fragment,I),Zo=r(I),ut=c(I,"P",{"data-svelte-h":!0}),h(ut)!=="svelte-1o18zcb"&&(ut.textContent=Cn),Wo=r(I),ht=c(I,"P",{"data-svelte-h":!0}),h(ht)!=="svelte-4ex3z6"&&(ht.innerHTML=Fn),Ho=r(I),mt=c(I,"P",{"data-svelte-h":!0}),h(mt)!=="svelte-6pahdo"&&(mt.innerHTML=qn),Ro=r(I),ft=c(I,"P",{"data-svelte-h":!0}),h(ft)!=="svelte-hswkmf"&&(ft.innerHTML=Jn),So=r(I),E=c(I,"DIV",{class:!0});var Y=H(E);f(Ne.$$.fragment,Y),No=r(Y),gt=c(Y,"P",{"data-svelte-h":!0}),h(gt)!=="svelte-g34fmw"&&(gt.innerHTML=jn),Vo=r(Y),f(pe.$$.fragment,Y),Y.forEach(d),I.forEach(d),Kt=r(e),f(Ve.$$.fragment,e),eo=r(e),x=c(e,"DIV",{class:!0});var Z=H(x);f(Ge.$$.fragment,Z),Go=r(Z),_t=c(Z,"P",{"data-svelte-h":!0}),h(_t)!=="svelte-12ryp6"&&(_t.textContent=In),Lo=r(Z),Tt=c(Z,"P",{"data-svelte-h":!0}),h(Tt)!=="svelte-4ex3z6"&&(Tt.innerHTML=Zn),Xo=r(Z),Mt=c(Z,"P",{"data-svelte-h":!0}),h(Mt)!=="svelte-6pahdo"&&(Mt.innerHTML=Wn),Bo=r(Z),bt=c(Z,"P",{"data-svelte-h":!0}),h(bt)!=="svelte-hswkmf"&&(bt.innerHTML=Hn),Po=r(Z),O=c(Z,"DIV",{class:!0});var K=H(O);f(Le.$$.fragment,K),Ao=r(K),yt=c(K,"P",{"data-svelte-h":!0}),h(yt)!=="svelte-1iuka2y"&&(yt.innerHTML=Rn),Eo=r(K),f(ue.$$.fragment,K),K.forEach(d),Z.forEach(d),to=r(e),f(Xe.$$.fragment,e),oo=r(e),C=c(e,"DIV",{class:!0});var W=H(C);f(Be.$$.fragment,W),Oo=r(W),kt=c(W,"P",{"data-svelte-h":!0}),h(kt)!=="svelte-m1fu1b"&&(kt.innerHTML=Sn),Qo=r(W),wt=c(W,"P",{"data-svelte-h":!0}),h(wt)!=="svelte-4ex3z6"&&(wt.innerHTML=Nn),Do=r(W),vt=c(W,"P",{"data-svelte-h":!0}),h(vt)!=="svelte-6pahdo"&&(vt.innerHTML=Vn),Yo=r(W),Ut=c(W,"P",{"data-svelte-h":!0}),h(Ut)!=="svelte-hswkmf"&&(Ut.innerHTML=Gn),Ko=r(W),Q=c(W,"DIV",{class:!0});var ee=H(Q);f(Pe.$$.fragment,ee),en=r(ee),$t=c(ee,"P",{"data-svelte-h":!0}),h($t)!=="svelte-1ybqdzw"&&($t.innerHTML=Ln),tn=r(ee),f(he.$$.fragment,ee),ee.forEach(d),W.forEach(d),no=r(e),xt=c(e,"P",{}),H(xt).forEach(d),this.h()},h(){j(t,"name","hf:doc:metadata"),j(t,"content",ls),j(k,"class","flex flex-wrap space-x-1"),j(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(v,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,n){s(document.head,t),p(e,b,n),p(e,i,n),p(e,u,n),g(y,e,n),p(e,o,n),p(e,k,n),p(e,Ct,n),g(me,e,n),p(e,Ft,n),p(e,fe,n),p(e,qt,n),p(e,ge,n),p(e,Jt,n),p(e,_e,n),p(e,jt,n),p(e,Te,n),p(e,It,n),p(e,Me,n),p(e,Zt,n),p(e,be,n),p(e,Wt,n),g(ye,e,n),p(e,Ht,n),p(e,ke,n),p(e,Rt,n),g(we,e,n),p(e,St,n),p(e,ve,n),p(e,Nt,n),g(Ue,e,n),p(e,Vt,n),g($e,e,n),p(e,Gt,n),g(te,e,n),p(e,Lt,n),g(ze,e,n),p(e,Xt,n),p(e,X,n),g(xe,X,null),s(X,ao),s(X,Oe),s(X,ro),s(X,Qe),p(e,Bt,n),g(Ce,e,n),p(e,Pt,n),p(e,v,n),g(Fe,v,null),s(v,io),s(v,De),s(v,lo),s(v,Ye),s(v,co),s(v,Ke),s(v,po),s(v,et),s(v,uo),g(oe,v,null),s(v,ho),s(v,N),g(qe,N,null),s(N,mo),s(N,tt),s(N,fo),g(ne,N,null),s(N,go),g(se,N,null),p(e,At,n),g(Je,e,n),p(e,Et,n),p(e,U,n),g(je,U,null),s(U,_o),s(U,ot),s(U,To),s(U,nt),s(U,Mo),s(U,st),s(U,bo),s(U,at),s(U,yo),g(ae,U,null),s(U,ko),s(U,V),g(Ie,V,null),s(V,wo),s(V,rt),s(V,vo),g(re,V,null),s(V,Uo),g(de,V,null),p(e,Ot,n),g(Ze,e,n),p(e,Qt,n),p(e,$,n),g(We,$,null),s($,$o),s($,dt),s($,zo),s($,it),s($,xo),s($,lt),s($,Co),s($,ct),s($,Fo),g(ie,$,null),s($,qo),s($,G),g(He,G,null),s(G,Jo),s(G,pt),s(G,jo),g(le,G,null),s(G,Io),g(ce,G,null),p(e,Dt,n),g(Re,e,n),p(e,Yt,n),p(e,z,n),g(Se,z,null),s(z,Zo),s(z,ut),s(z,Wo),s(z,ht),s(z,Ho),s(z,mt),s(z,Ro),s(z,ft),s(z,So),s(z,E),g(Ne,E,null),s(E,No),s(E,gt),s(E,Vo),g(pe,E,null),p(e,Kt,n),g(Ve,e,n),p(e,eo,n),p(e,x,n),g(Ge,x,null),s(x,Go),s(x,_t),s(x,Lo),s(x,Tt),s(x,Xo),s(x,Mt),s(x,Bo),s(x,bt),s(x,Po),s(x,O),g(Le,O,null),s(O,Ao),s(O,yt),s(O,Eo),g(ue,O,null),p(e,to,n),g(Xe,e,n),p(e,oo,n),p(e,C,n),g(Be,C,null),s(C,Oo),s(C,kt),s(C,Qo),s(C,wt),s(C,Do),s(C,vt),s(C,Yo),s(C,Ut),s(C,Ko),s(C,Q),g(Pe,Q,null),s(Q,en),s(Q,$t),s(Q,tn),g(he,Q,null),p(e,no,n),p(e,xt,n),so=!0},p(e,[n]){const D={};n&2&&(D.$$scope={dirty:n,ctx:e}),te.$set(D);const F={};n&2&&(F.$$scope={dirty:n,ctx:e}),oe.$set(F);const B={};n&2&&(B.$$scope={dirty:n,ctx:e}),ne.$set(B);const q={};n&2&&(q.$$scope={dirty:n,ctx:e}),se.$set(q);const P={};n&2&&(P.$$scope={dirty:n,ctx:e}),ae.$set(P);const J={};n&2&&(J.$$scope={dirty:n,ctx:e}),re.$set(J);const A={};n&2&&(A.$$scope={dirty:n,ctx:e}),de.$set(A);const I={};n&2&&(I.$$scope={dirty:n,ctx:e}),ie.$set(I);const Y={};n&2&&(Y.$$scope={dirty:n,ctx:e}),le.$set(Y);const Z={};n&2&&(Z.$$scope={dirty:n,ctx:e}),ce.$set(Z);const K={};n&2&&(K.$$scope={dirty:n,ctx:e}),pe.$set(K);const W={};n&2&&(W.$$scope={dirty:n,ctx:e}),ue.$set(W);const ee={};n&2&&(ee.$$scope={dirty:n,ctx:e}),he.$set(ee)},i(e){so||(_(y.$$.fragment,e),_(me.$$.fragment,e),_(ye.$$.fragment,e),_(we.$$.fragment,e),_(Ue.$$.fragment,e),_($e.$$.fragment,e),_(te.$$.fragment,e),_(ze.$$.fragment,e),_(xe.$$.fragment,e),_(Ce.$$.fragment,e),_(Fe.$$.fragment,e),_(oe.$$.fragment,e),_(qe.$$.fragment,e),_(ne.$$.fragment,e),_(se.$$.fragment,e),_(Je.$$.fragment,e),_(je.$$.fragment,e),_(ae.$$.fragment,e),_(Ie.$$.fragment,e),_(re.$$.fragment,e),_(de.$$.fragment,e),_(Ze.$$.fragment,e),_(We.$$.fragment,e),_(ie.$$.fragment,e),_(He.$$.fragment,e),_(le.$$.fragment,e),_(ce.$$.fragment,e),_(Re.$$.fragment,e),_(Se.$$.fragment,e),_(Ne.$$.fragment,e),_(pe.$$.fragment,e),_(Ve.$$.fragment,e),_(Ge.$$.fragment,e),_(Le.$$.fragment,e),_(ue.$$.fragment,e),_(Xe.$$.fragment,e),_(Be.$$.fragment,e),_(Pe.$$.fragment,e),_(he.$$.fragment,e),so=!0)},o(e){T(y.$$.fragment,e),T(me.$$.fragment,e),T(ye.$$.fragment,e),T(we.$$.fragment,e),T(Ue.$$.fragment,e),T($e.$$.fragment,e),T(te.$$.fragment,e),T(ze.$$.fragment,e),T(xe.$$.fragment,e),T(Ce.$$.fragment,e),T(Fe.$$.fragment,e),T(oe.$$.fragment,e),T(qe.$$.fragment,e),T(ne.$$.fragment,e),T(se.$$.fragment,e),T(Je.$$.fragment,e),T(je.$$.fragment,e),T(ae.$$.fragment,e),T(Ie.$$.fragment,e),T(re.$$.fragment,e),T(de.$$.fragment,e),T(Ze.$$.fragment,e),T(We.$$.fragment,e),T(ie.$$.fragment,e),T(He.$$.fragment,e),T(le.$$.fragment,e),T(ce.$$.fragment,e),T(Re.$$.fragment,e),T(Se.$$.fragment,e),T(Ne.$$.fragment,e),T(pe.$$.fragment,e),T(Ve.$$.fragment,e),T(Ge.$$.fragment,e),T(Le.$$.fragment,e),T(ue.$$.fragment,e),T(Xe.$$.fragment,e),T(Be.$$.fragment,e),T(Pe.$$.fragment,e),T(he.$$.fragment,e),so=!1},d(e){e&&(d(b),d(i),d(u),d(o),d(k),d(Ct),d(Ft),d(fe),d(qt),d(ge),d(Jt),d(_e),d(jt),d(Te),d(It),d(Me),d(Zt),d(be),d(Wt),d(Ht),d(ke),d(Rt),d(St),d(ve),d(Nt),d(Vt),d(Gt),d(Lt),d(Xt),d(X),d(Bt),d(Pt),d(v),d(At),d(Et),d(U),d(Ot),d(Qt),d($),d(Dt),d(Yt),d(z),d(Kt),d(eo),d(x),d(to),d(oo),d(C),d(no),d(xt)),d(t),M(y,e),M(me,e),M(ye,e),M(we,e),M(Ue,e),M($e,e),M(te,e),M(ze,e),M(xe),M(Ce,e),M(Fe),M(oe),M(qe),M(ne),M(se),M(Je,e),M(je),M(ae),M(Ie),M(re),M(de),M(Ze,e),M(We),M(ie),M(He),M(le),M(ce),M(Re,e),M(Se),M(Ne),M(pe),M(Ve,e),M(Ge),M(Le),M(ue),M(Xe,e),M(Be),M(Pe),M(he)}}}const ls='{"title":"UMT5","local":"umt5","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"Differences with mT5?","local":"differences-with-mt5","sections":[],"depth":2}],"depth":1}';function cs(w){return Bn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ts extends Pn{constructor(t){super(),An(this,t,cs,is,Xn,{})}}export{Ts as component};
