import{s as eo,o as to,n as le}from"../chunks/scheduler.9bc65507.js";import{S as oo,i as no,g as c,s as l,r as _,A as so,h as m,f as d,c as i,j as ne,u as b,x as h,k as se,y as a,a as p,v as y,d as T,t as M,w as v}from"../chunks/index.707bf1b6.js";import{T as ut}from"../chunks/Tip.c2ecdbf4.js";import{D as pe}from"../chunks/Docstring.17db21ae.js";import{C as at}from"../chunks/CodeBlock.54a9f38d.js";import{F as ao,M as Kt}from"../chunks/Markdown.8ab98a13.js";import{E as st}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{P as ro}from"../chunks/PipelineTag.44585822.js";import{H as qe}from"../chunks/Heading.342b1fa6.js";function lo(x){let e,u="Example:",t,s,f;return s=new at({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEJsb29tQ29uZmlnJTJDJTIwQmxvb21Nb2RlbCUwQSUwQSUyMyUyMEluaXRpYWxpemluZyUyMGElMjBCbG9vbSUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwQmxvb21Db25maWcoKSUwQSUwQSUyMyUyMEluaXRpYWxpemluZyUyMGElMjBtb2RlbCUyMCh3aXRoJTIwcmFuZG9tJTIwd2VpZ2h0cyklMjBmcm9tJTIwdGhlJTIwY29uZmlndXJhdGlvbiUwQW1vZGVsJTIwJTNEJTIwQmxvb21Nb2RlbChjb25maWd1cmF0aW9uKSUwQSUwQSUyMyUyMEFjY2Vzc2luZyUyMHRoZSUyMG1vZGVsJTIwY29uZmlndXJhdGlvbiUwQWNvbmZpZ3VyYXRpb24lMjAlM0QlMjBtb2RlbC5jb25maWc=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomConfig, BloomModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Bloom configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BloomConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,t=l(),_(s.$$.fragment)},l(o){e=m(o,"P",{"data-svelte-h":!0}),h(e)!=="svelte-11lpom8"&&(e.textContent=u),t=i(o),b(s.$$.fragment,o)},m(o,$){p(o,e,$),p(o,t,$),y(s,o,$),f=!0},p:le,i(o){f||(T(s.$$.fragment,o),f=!0)},o(o){M(s.$$.fragment,o),f=!1},d(o){o&&(d(e),d(t)),v(s,o)}}}function io(x){let e,u="be encoded differently whether it is at the beginning of the sentence (without space) or not:",t,s,f;return s=new at({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEJsb29tVG9rZW5pemVyRmFzdCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEJsb29tVG9rZW5pemVyRmFzdC5mcm9tX3ByZXRyYWluZWQoJTIyYmlnc2NpZW5jZSUyRmJsb29tJTIyKSUwQXRva2VuaXplciglMjJIZWxsbyUyMHdvcmxkJTIyKSU1QiUyMmlucHV0X2lkcyUyMiU1RCUwQSUwQXRva2VuaXplciglMjIlMjBIZWxsbyUyMHdvcmxkJTIyKSU1QiUyMmlucHV0X2lkcyUyMiU1RA==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BloomTokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BloomTokenizerFast.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
[<span class="hljs-number">59414</span>, <span class="hljs-number">8876</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
[<span class="hljs-number">86153</span>, <span class="hljs-number">8876</span>]`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,t=l(),_(s.$$.fragment)},l(o){e=m(o,"P",{"data-svelte-h":!0}),h(e)!=="svelte-12atnao"&&(e.textContent=u),t=i(o),b(s.$$.fragment,o)},m(o,$){p(o,e,$),p(o,t,$),y(s,o,$),f=!0},p:le,i(o){f||(T(s.$$.fragment,o),f=!0)},o(o){M(s.$$.fragment,o),f=!1},d(o){o&&(d(e),d(t)),v(s,o)}}}function co(x){let e,u="When used with <code>is_split_into_words=True</code>, this tokenizer needs to be instantiated with <code>add_prefix_space=True</code>.";return{c(){e=c("p"),e.innerHTML=u},l(t){e=m(t,"P",{"data-svelte-h":!0}),h(e)!=="svelte-9gg91e"&&(e.innerHTML=u)},m(t,s){p(t,e,s)},p:le,d(t){t&&d(e)}}}function mo(x){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=c("p"),e.innerHTML=u},l(t){e=m(t,"P",{"data-svelte-h":!0}),h(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(t,s){p(t,e,s)},p:le,d(t){t&&d(e)}}}function po(x){let e,u="Example:",t,s,f;return s=new at({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBCbG9vbU1vZGVsJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJiaWdzY2llbmNlJTJGYmxvb20tNTYwbSUyMiklMEFtb2RlbCUyMCUzRCUyMEJsb29tTW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMmJpZ3NjaWVuY2UlMkZibG9vbS01NjBtJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBbGFzdF9oaWRkZW5fc3RhdGVzJTIwJTNEJTIwb3V0cHV0cy5sYXN0X2hpZGRlbl9zdGF0ZQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, BloomModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom-560m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomModel.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom-560m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,t=l(),_(s.$$.fragment)},l(o){e=m(o,"P",{"data-svelte-h":!0}),h(e)!=="svelte-11lpom8"&&(e.textContent=u),t=i(o),b(s.$$.fragment,o)},m(o,$){p(o,e,$),p(o,t,$),y(s,o,$),f=!0},p:le,i(o){f||(T(s.$$.fragment,o),f=!0)},o(o){M(s.$$.fragment,o),f=!1},d(o){o&&(d(e),d(t)),v(s,o)}}}function uo(x){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=c("p"),e.innerHTML=u},l(t){e=m(t,"P",{"data-svelte-h":!0}),h(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(t,s){p(t,e,s)},p:le,d(t){t&&d(e)}}}function ho(x){let e,u="Example:",t,s,f;return s=new at({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEJsb29tRm9yQ2F1c2FsTE0lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJiaWdzY2llbmNlJTJGYmxvb20tNTYwbSUyMiklMEFtb2RlbCUyMCUzRCUyMEJsb29tRm9yQ2F1c2FsTE0uZnJvbV9wcmV0cmFpbmVkKCUyMmJpZ3NjaWVuY2UlMkZibG9vbS01NjBtJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMlMkMlMjBsYWJlbHMlM0RpbnB1dHMlNUIlMjJpbnB1dF9pZHMlMjIlNUQpJTBBbG9zcyUyMCUzRCUyMG91dHB1dHMubG9zcyUwQWxvZ2l0cyUyMCUzRCUyMG91dHB1dHMubG9naXRz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, BloomForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom-560m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomForCausalLM.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom-560m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,t=l(),_(s.$$.fragment)},l(o){e=m(o,"P",{"data-svelte-h":!0}),h(e)!=="svelte-11lpom8"&&(e.textContent=u),t=i(o),b(s.$$.fragment,o)},m(o,$){p(o,e,$),p(o,t,$),y(s,o,$),f=!0},p:le,i(o){f||(T(s.$$.fragment,o),f=!0)},o(o){M(s.$$.fragment,o),f=!1},d(o){o&&(d(e),d(t)),v(s,o)}}}function fo(x){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=c("p"),e.innerHTML=u},l(t){e=m(t,"P",{"data-svelte-h":!0}),h(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(t,s){p(t,e,s)},p:le,d(t){t&&d(e)}}}function go(x){let e,u="Example of single-label classification:",t,s,f;return s=new at({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEJsb29tRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmJpZ3NjaWVuY2UlMkZibG9vbS01NjBtJTIyKSUwQW1vZGVsJTIwJTNEJTIwQmxvb21Gb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJiaWdzY2llbmNlJTJGYmxvb20tNTYwbSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEFwcmVkaWN0ZWRfY2xhc3NfaWQlMjAlM0QlMjBsb2dpdHMuYXJnbWF4KCkuaXRlbSgpJTBBJTBBJTIzJTIwVG8lMjB0cmFpbiUyMGElMjBtb2RlbCUyMG9uJTIwJTYwbnVtX2xhYmVscyU2MCUyMGNsYXNzZXMlMkMlMjB5b3UlMjBjYW4lMjBwYXNzJTIwJTYwbnVtX2xhYmVscyUzRG51bV9sYWJlbHMlNjAlMjB0byUyMCU2MC5mcm9tX3ByZXRyYWluZWQoLi4uKSU2MCUwQW51bV9sYWJlbHMlMjAlM0QlMjBsZW4obW9kZWwuY29uZmlnLmlkMmxhYmVsKSUwQW1vZGVsJTIwJTNEJTIwQmxvb21Gb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJiaWdzY2llbmNlJTJGYmxvb20tNTYwbSUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzKSUwQSUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxJTVEKSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, BloomForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom-560m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom-560m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom-560m&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,t=l(),_(s.$$.fragment)},l(o){e=m(o,"P",{"data-svelte-h":!0}),h(e)!=="svelte-ykxpe4"&&(e.textContent=u),t=i(o),b(s.$$.fragment,o)},m(o,$){p(o,e,$),p(o,t,$),y(s,o,$),f=!0},p:le,i(o){f||(T(s.$$.fragment,o),f=!0)},o(o){M(s.$$.fragment,o),f=!1},d(o){o&&(d(e),d(t)),v(s,o)}}}function _o(x){let e,u="Example of multi-label classification:",t,s,f;return s=new at({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEJsb29tRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmJpZ3NjaWVuY2UlMkZibG9vbS01NjBtJTIyKSUwQW1vZGVsJTIwJTNEJTIwQmxvb21Gb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJiaWdzY2llbmNlJTJGYmxvb20tNTYwbSUyMiUyQyUyMHByb2JsZW1fdHlwZSUzRCUyMm11bHRpX2xhYmVsX2NsYXNzaWZpY2F0aW9uJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEElMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQXByZWRpY3RlZF9jbGFzc19pZHMlMjAlM0QlMjB0b3JjaC5hcmFuZ2UoMCUyQyUyMGxvZ2l0cy5zaGFwZSU1Qi0xJTVEKSU1QnRvcmNoLnNpZ21vaWQobG9naXRzKS5zcXVlZXplKGRpbSUzRDApJTIwJTNFJTIwMC41JTVEJTBBJTBBJTIzJTIwVG8lMjB0cmFpbiUyMGElMjBtb2RlbCUyMG9uJTIwJTYwbnVtX2xhYmVscyU2MCUyMGNsYXNzZXMlMkMlMjB5b3UlMjBjYW4lMjBwYXNzJTIwJTYwbnVtX2xhYmVscyUzRG51bV9sYWJlbHMlNjAlMjB0byUyMCU2MC5mcm9tX3ByZXRyYWluZWQoLi4uKSU2MCUwQW51bV9sYWJlbHMlMjAlM0QlMjBsZW4obW9kZWwuY29uZmlnLmlkMmxhYmVsKSUwQW1vZGVsJTIwJTNEJTIwQmxvb21Gb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMEElMjAlMjAlMjAlMjAlMjJiaWdzY2llbmNlJTJGYmxvb20tNTYwbSUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIlMEEpJTBBJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2guc3VtKCUwQSUyMCUyMCUyMCUyMHRvcmNoLm5uLmZ1bmN0aW9uYWwub25lX2hvdChwcmVkaWN0ZWRfY2xhc3NfaWRzJTVCTm9uZSUyQyUyMCUzQSU1RC5jbG9uZSgpJTJDJTIwbnVtX2NsYXNzZXMlM0RudW1fbGFiZWxzKSUyQyUyMGRpbSUzRDElMEEpLnRvKHRvcmNoLmZsb2F0KSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, BloomForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom-560m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom-560m&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.arange(<span class="hljs-number">0</span>, logits.shape[-<span class="hljs-number">1</span>])[torch.sigmoid(logits).squeeze(dim=<span class="hljs-number">0</span>) &gt; <span class="hljs-number">0.5</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;bigscience/bloom-560m&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.<span class="hljs-built_in">sum</span>(
<span class="hljs-meta">... </span>    torch.nn.functional.one_hot(predicted_class_ids[<span class="hljs-literal">None</span>, :].clone(), num_classes=num_labels), dim=<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>).to(torch.<span class="hljs-built_in">float</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,t=l(),_(s.$$.fragment)},l(o){e=m(o,"P",{"data-svelte-h":!0}),h(e)!=="svelte-1l8e32d"&&(e.textContent=u),t=i(o),b(s.$$.fragment,o)},m(o,$){p(o,e,$),p(o,t,$),y(s,o,$),f=!0},p:le,i(o){f||(T(s.$$.fragment,o),f=!0)},o(o){M(s.$$.fragment,o),f=!1},d(o){o&&(d(e),d(t)),v(s,o)}}}function bo(x){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=c("p"),e.innerHTML=u},l(t){e=m(t,"P",{"data-svelte-h":!0}),h(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(t,s){p(t,e,s)},p:le,d(t){t&&d(e)}}}function yo(x){let e,u="Example:",t,s,f;return s=new at({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBCbG9vbUZvclRva2VuQ2xhc3NpZmljYXRpb24lMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmJpZ3NjaWVuY2UlMkZibG9vbS01NjBtJTIyKSUwQW1vZGVsJTIwJTNEJTIwQmxvb21Gb3JUb2tlbkNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJiaWdzY2llbmNlJTJGYmxvb20tNTYwbSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTBBJTIwJTIwJTIwJTIwJTIySHVnZ2luZ0ZhY2UlMjBpcyUyMGElMjBjb21wYW55JTIwYmFzZWQlMjBpbiUyMFBhcmlzJTIwYW5kJTIwTmV3JTIwWW9yayUyMiUyQyUyMGFkZF9zcGVjaWFsX3Rva2VucyUzREZhbHNlJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiUwQSklMEElMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQXByZWRpY3RlZF90b2tlbl9jbGFzc19pZHMlMjAlM0QlMjBsb2dpdHMuYXJnbWF4KC0xKSUwQSUwQSUyMyUyME5vdGUlMjB0aGF0JTIwdG9rZW5zJTIwYXJlJTIwY2xhc3NpZmllZCUyMHJhdGhlciUyMHRoZW4lMjBpbnB1dCUyMHdvcmRzJTIwd2hpY2glMjBtZWFucyUyMHRoYXQlMEElMjMlMjB0aGVyZSUyMG1pZ2h0JTIwYmUlMjBtb3JlJTIwcHJlZGljdGVkJTIwdG9rZW4lMjBjbGFzc2VzJTIwdGhhbiUyMHdvcmRzLiUwQSUyMyUyME11bHRpcGxlJTIwdG9rZW4lMjBjbGFzc2VzJTIwbWlnaHQlMjBhY2NvdW50JTIwZm9yJTIwdGhlJTIwc2FtZSUyMHdvcmQlMEFwcmVkaWN0ZWRfdG9rZW5zX2NsYXNzZXMlMjAlM0QlMjAlNUJtb2RlbC5jb25maWcuaWQybGFiZWwlNUJ0Lml0ZW0oKSU1RCUyMGZvciUyMHQlMjBpbiUyMHByZWRpY3RlZF90b2tlbl9jbGFzc19pZHMlNUIwJTVEJTVEJTBBJTBBbGFiZWxzJTIwJTNEJTIwcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, BloomForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom-560m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BloomForTokenClassification.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom-560m&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,t=l(),_(s.$$.fragment)},l(o){e=m(o,"P",{"data-svelte-h":!0}),h(e)!=="svelte-11lpom8"&&(e.textContent=u),t=i(o),b(s.$$.fragment,o)},m(o,$){p(o,e,$),p(o,t,$),y(s,o,$),f=!0},p:le,i(o){f||(T(s.$$.fragment,o),f=!0)},o(o){M(s.$$.fragment,o),f=!1},d(o){o&&(d(e),d(t)),v(s,o)}}}function To(x){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=c("p"),e.innerHTML=u},l(t){e=m(t,"P",{"data-svelte-h":!0}),h(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(t,s){p(t,e,s)},p:le,d(t){t&&d(e)}}}function Mo(x){let e,u,t,s,f,o,$="The bare Bloom Model transformer outputting raw hidden-states without any specific head on top.",Je,P,rt=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`,Ue,G,lt=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Ie,J,ue,he,ie,Xe='The <a href="/docs/transformers/main/ja/model_doc/bloom#transformers.BloomModel">BloomModel</a> forward method, overrides the <code>__call__</code> special method.',fe,W,S,ge,de,E,He,F,X,_e,ce,Y=`The Bloom Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`,Ne,B,O=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`,Ee,A,ke=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Ye,q,D,Oe,K,$e='The <a href="/docs/transformers/main/ja/model_doc/bloom#transformers.BloomForCausalLM">BloomForCausalLM</a> forward method, overrides the <code>__call__</code> special method.',We,z,ve,me,ee,xe,Ze,j,te,Pe,H,Ae="The Bloom Model transformer with a sequence classification head on top (linear layer).",be,Q,Z=`<a href="/docs/transformers/main/ja/model_doc/bloom#transformers.BloomForSequenceClassification">BloomForSequenceClassification</a> uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`,R,ye,w=`Since it does classification on the last token, it requires to know the position of the last token. If a
<code>pad_token_id</code> is defined in the configuration, it finds the last token that is not a padding token in each row. If
no <code>pad_token_id</code> is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when <code>inputs_embeds</code> are passed instead of <code>input_ids</code>, it does the same (take the last value in
each row of the batch).`,C,N,U=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`,oe,je,Ge=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,ht,V,De,ft,Te,Tt='The <a href="/docs/transformers/main/ja/model_doc/bloom#transformers.BloomForSequenceClassification">BloomForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',Ke,Ve,it,ae,dt,we,tt,n,g,I,L,Mt,ot,Qt=`Bloom Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`,Jt,vt,Rt=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`,Ut,wt,St=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,It,Le,gt,Wt,kt,Xt='The <a href="/docs/transformers/main/ja/model_doc/bloom#transformers.BloomForTokenClassification">BloomForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',Zt,ct,Lt,mt,Bt,_t,Ft,Me,bt,qt,$t,Et=`The BLOOM Model transformer with a span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,Ht,xt,Yt=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`,Nt,jt,Ot=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Pt,et,yt,Gt,Ct,At='The <a href="/docs/transformers/main/ja/model_doc/bloom#transformers.BloomForQuestionAnswering">BloomForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',Vt,pt,zt;return e=new qe({props:{title:"BloomModel",local:"transformers.BloomModel",headingTag:"h2"}}),s=new pe({props:{name:"class transformers.BloomModel",anchor:"transformers.BloomModel",parameters:[{name:"config",val:": BloomConfig"}],parametersDescription:[{anchor:"transformers.BloomModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bloom/modeling_bloom.py#L580"}}),ue=new pe({props:{name:"forward",anchor:"transformers.BloomModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"**deprecated_arguments",val:""}],parametersDescription:[{anchor:"transformers.BloomModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0][0].shape[2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BloomModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.</p>
<p>Each element of <code>past_key_values</code> is a tuple (past_key, past_value):</p>
<ul>
<li>past_key: [batch_size * num_heads, head_dim, kv_length]</li>
<li>past_value: [batch_size * num_heads, kv_length, head_dim]</li>
</ul>`,name:"past_key_values"},{anchor:"transformers.BloomModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BloomModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BloomModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.BloomModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BloomModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BloomModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BloomModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bloom/modeling_bloom.py#L615",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/bloom#transformers.BloomConfig"
>BloomConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),W=new ut({props:{$$slots:{default:[mo]},$$scope:{ctx:x}}}),ge=new st({props:{anchor:"transformers.BloomModel.forward.example",$$slots:{default:[po]},$$scope:{ctx:x}}}),E=new qe({props:{title:"BloomForCausalLM",local:"transformers.BloomForCausalLM",headingTag:"h2"}}),X=new pe({props:{name:"class transformers.BloomForCausalLM",anchor:"transformers.BloomForCausalLM",parameters:[{name:"config",val:": BloomConfig"}],parametersDescription:[{anchor:"transformers.BloomForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bloom/modeling_bloom.py#L756"}}),D=new pe({props:{name:"forward",anchor:"transformers.BloomForCausalLM.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"**deprecated_arguments",val:""}],parametersDescription:[{anchor:"transformers.BloomForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0][0].shape[2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BloomForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.</p>
<p>Each element of <code>past_key_values</code> is a tuple (past_key, past_value):</p>
<ul>
<li>past_key: [batch_size * num_heads, head_dim, kv_length]</li>
<li>past_value: [batch_size * num_heads, kv_length, head_dim]</li>
</ul>`,name:"past_key_values"},{anchor:"transformers.BloomForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BloomForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BloomForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.BloomForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BloomForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BloomForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BloomForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BloomForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bloom/modeling_bloom.py#L820",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/bloom#transformers.BloomConfig"
>BloomConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),z=new ut({props:{$$slots:{default:[uo]},$$scope:{ctx:x}}}),me=new st({props:{anchor:"transformers.BloomForCausalLM.forward.example",$$slots:{default:[ho]},$$scope:{ctx:x}}}),xe=new qe({props:{title:"BloomForSequenceClassification",local:"transformers.BloomForSequenceClassification",headingTag:"h2"}}),te=new pe({props:{name:"class transformers.BloomForSequenceClassification",anchor:"transformers.BloomForSequenceClassification",parameters:[{name:"config",val:": BloomConfig"}],parametersDescription:[{anchor:"transformers.BloomForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bloom/modeling_bloom.py#L925"}}),De=new pe({props:{name:"forward",anchor:"transformers.BloomForSequenceClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"**deprecated_arguments",val:""}],parametersDescription:[{anchor:"transformers.BloomForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0][0].shape[2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BloomForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.</p>
<p>Each element of <code>past_key_values</code> is a tuple (past_key, past_value):</p>
<ul>
<li>past_key: [batch_size * num_heads, head_dim, kv_length]</li>
<li>past_value: [batch_size * num_heads, kv_length, head_dim]</li>
</ul>`,name:"past_key_values"},{anchor:"transformers.BloomForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BloomForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BloomForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.BloomForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BloomForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BloomForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BloomForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BloomForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bloom/modeling_bloom.py#L950",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/bloom#transformers.BloomConfig"
>BloomConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) — Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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


<p><code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ve=new ut({props:{$$slots:{default:[fo]},$$scope:{ctx:x}}}),ae=new st({props:{anchor:"transformers.BloomForSequenceClassification.forward.example",$$slots:{default:[go]},$$scope:{ctx:x}}}),we=new st({props:{anchor:"transformers.BloomForSequenceClassification.forward.example-2",$$slots:{default:[_o]},$$scope:{ctx:x}}}),n=new qe({props:{title:"BloomForTokenClassification",local:"transformers.BloomForTokenClassification",headingTag:"h2"}}),L=new pe({props:{name:"class transformers.BloomForTokenClassification",anchor:"transformers.BloomForTokenClassification",parameters:[{name:"config",val:": BloomConfig"}],parametersDescription:[{anchor:"transformers.BloomForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bloom/modeling_bloom.py#L1062"}}),gt=new pe({props:{name:"forward",anchor:"transformers.BloomForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"**deprecated_arguments",val:""}],parametersDescription:[{anchor:"transformers.BloomForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0][0].shape[2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BloomForTokenClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.</p>
<p>Each element of <code>past_key_values</code> is a tuple (past_key, past_value):</p>
<ul>
<li>past_key: [batch_size * num_heads, head_dim, kv_length]</li>
<li>past_value: [batch_size * num_heads, kv_length, head_dim]</li>
</ul>`,name:"past_key_values"},{anchor:"transformers.BloomForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BloomForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BloomForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.BloomForTokenClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BloomForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BloomForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BloomForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BloomForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bloom/modeling_bloom.py#L1087",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/bloom#transformers.BloomConfig"
>BloomConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ct=new ut({props:{$$slots:{default:[bo]},$$scope:{ctx:x}}}),mt=new st({props:{anchor:"transformers.BloomForTokenClassification.forward.example",$$slots:{default:[yo]},$$scope:{ctx:x}}}),_t=new qe({props:{title:"BloomForQuestionAnswering",local:"transformers.BloomForQuestionAnswering",headingTag:"h2"}}),bt=new pe({props:{name:"class transformers.BloomForQuestionAnswering",anchor:"transformers.BloomForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BloomForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bloom/modeling_bloom.py#L1163"}}),yt=new pe({props:{name:"forward",anchor:"transformers.BloomForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"start_positions",val:": Optional = None"},{name:"end_positions",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.BloomForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0][0].shape[2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BloomForQuestionAnswering.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.</p>
<p>Each element of <code>past_key_values</code> is a tuple (past_key, past_value):</p>
<ul>
<li>past_key: [batch_size * num_heads, head_dim, kv_length]</li>
<li>past_value: [batch_size * num_heads, kv_length, head_dim]</li>
</ul>`,name:"past_key_values"},{anchor:"transformers.BloomForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BloomForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BloomForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.BloomForQuestionAnswering.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BloomForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BloomForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BloomForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BloomForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BloomForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bloom/modeling_bloom.py#L1179"}}),pt=new ut({props:{$$slots:{default:[To]},$$scope:{ctx:x}}}),{c(){_(e.$$.fragment),u=l(),t=c("div"),_(s.$$.fragment),f=l(),o=c("p"),o.textContent=$,Je=l(),P=c("p"),P.innerHTML=rt,Ue=l(),G=c("p"),G.innerHTML=lt,Ie=l(),J=c("div"),_(ue.$$.fragment),he=l(),ie=c("p"),ie.innerHTML=Xe,fe=l(),_(W.$$.fragment),S=l(),_(ge.$$.fragment),de=l(),_(E.$$.fragment),He=l(),F=c("div"),_(X.$$.fragment),_e=l(),ce=c("p"),ce.textContent=Y,Ne=l(),B=c("p"),B.innerHTML=O,Ee=l(),A=c("p"),A.innerHTML=ke,Ye=l(),q=c("div"),_(D.$$.fragment),Oe=l(),K=c("p"),K.innerHTML=$e,We=l(),_(z.$$.fragment),ve=l(),_(me.$$.fragment),ee=l(),_(xe.$$.fragment),Ze=l(),j=c("div"),_(te.$$.fragment),Pe=l(),H=c("p"),H.textContent=Ae,be=l(),Q=c("p"),Q.innerHTML=Z,R=l(),ye=c("p"),ye.innerHTML=w,C=l(),N=c("p"),N.innerHTML=U,oe=l(),je=c("p"),je.innerHTML=Ge,ht=l(),V=c("div"),_(De.$$.fragment),ft=l(),Te=c("p"),Te.innerHTML=Tt,Ke=l(),_(Ve.$$.fragment),it=l(),_(ae.$$.fragment),dt=l(),_(we.$$.fragment),tt=l(),_(n.$$.fragment),g=l(),I=c("div"),_(L.$$.fragment),Mt=l(),ot=c("p"),ot.textContent=Qt,Jt=l(),vt=c("p"),vt.innerHTML=Rt,Ut=l(),wt=c("p"),wt.innerHTML=St,It=l(),Le=c("div"),_(gt.$$.fragment),Wt=l(),kt=c("p"),kt.innerHTML=Xt,Zt=l(),_(ct.$$.fragment),Lt=l(),_(mt.$$.fragment),Bt=l(),_(_t.$$.fragment),Ft=l(),Me=c("div"),_(bt.$$.fragment),qt=l(),$t=c("p"),$t.innerHTML=Et,Ht=l(),xt=c("p"),xt.innerHTML=Yt,Nt=l(),jt=c("p"),jt.innerHTML=Ot,Pt=l(),et=c("div"),_(yt.$$.fragment),Gt=l(),Ct=c("p"),Ct.innerHTML=At,Vt=l(),_(pt.$$.fragment),this.h()},l(r){b(e.$$.fragment,r),u=i(r),t=m(r,"DIV",{class:!0});var k=ne(t);b(s.$$.fragment,k),f=i(k),o=m(k,"P",{"data-svelte-h":!0}),h(o)!=="svelte-evl57a"&&(o.textContent=$),Je=i(k),P=m(k,"P",{"data-svelte-h":!0}),h(P)!=="svelte-fk8iuy"&&(P.innerHTML=rt),Ue=i(k),G=m(k,"P",{"data-svelte-h":!0}),h(G)!=="svelte-hswkmf"&&(G.innerHTML=lt),Ie=i(k),J=m(k,"DIV",{class:!0});var Qe=ne(J);b(ue.$$.fragment,Qe),he=i(Qe),ie=m(Qe,"P",{"data-svelte-h":!0}),h(ie)!=="svelte-n5thby"&&(ie.innerHTML=Xe),fe=i(Qe),b(W.$$.fragment,Qe),S=i(Qe),b(ge.$$.fragment,Qe),Qe.forEach(d),k.forEach(d),de=i(r),b(E.$$.fragment,r),He=i(r),F=m(r,"DIV",{class:!0});var Ce=ne(F);b(X.$$.fragment,Ce),_e=i(Ce),ce=m(Ce,"P",{"data-svelte-h":!0}),h(ce)!=="svelte-ywufu4"&&(ce.textContent=Y),Ne=i(Ce),B=m(Ce,"P",{"data-svelte-h":!0}),h(B)!=="svelte-fk8iuy"&&(B.innerHTML=O),Ee=i(Ce),A=m(Ce,"P",{"data-svelte-h":!0}),h(A)!=="svelte-hswkmf"&&(A.innerHTML=ke),Ye=i(Ce),q=m(Ce,"DIV",{class:!0});var Re=ne(q);b(D.$$.fragment,Re),Oe=i(Re),K=m(Re,"P",{"data-svelte-h":!0}),h(K)!=="svelte-qebxpi"&&(K.innerHTML=$e),We=i(Re),b(z.$$.fragment,Re),ve=i(Re),b(me.$$.fragment,Re),Re.forEach(d),Ce.forEach(d),ee=i(r),b(xe.$$.fragment,r),Ze=i(r),j=m(r,"DIV",{class:!0});var re=ne(j);b(te.$$.fragment,re),Pe=i(re),H=m(re,"P",{"data-svelte-h":!0}),h(H)!=="svelte-5utzhf"&&(H.textContent=Ae),be=i(re),Q=m(re,"P",{"data-svelte-h":!0}),h(Q)!=="svelte-1jtrmqm"&&(Q.innerHTML=Z),R=i(re),ye=m(re,"P",{"data-svelte-h":!0}),h(ye)!=="svelte-10ugs3m"&&(ye.innerHTML=w),C=i(re),N=m(re,"P",{"data-svelte-h":!0}),h(N)!=="svelte-fk8iuy"&&(N.innerHTML=U),oe=i(re),je=m(re,"P",{"data-svelte-h":!0}),h(je)!=="svelte-hswkmf"&&(je.innerHTML=Ge),ht=i(re),V=m(re,"DIV",{class:!0});var Be=ne(V);b(De.$$.fragment,Be),ft=i(Be),Te=m(Be,"P",{"data-svelte-h":!0}),h(Te)!=="svelte-1c4l54c"&&(Te.innerHTML=Tt),Ke=i(Be),b(Ve.$$.fragment,Be),it=i(Be),b(ae.$$.fragment,Be),dt=i(Be),b(we.$$.fragment,Be),Be.forEach(d),re.forEach(d),tt=i(r),b(n.$$.fragment,r),g=i(r),I=m(r,"DIV",{class:!0});var Fe=ne(I);b(L.$$.fragment,Fe),Mt=i(Fe),ot=m(Fe,"P",{"data-svelte-h":!0}),h(ot)!=="svelte-1ruyp1o"&&(ot.textContent=Qt),Jt=i(Fe),vt=m(Fe,"P",{"data-svelte-h":!0}),h(vt)!=="svelte-fk8iuy"&&(vt.innerHTML=Rt),Ut=i(Fe),wt=m(Fe,"P",{"data-svelte-h":!0}),h(wt)!=="svelte-hswkmf"&&(wt.innerHTML=St),It=i(Fe),Le=m(Fe,"DIV",{class:!0});var Se=ne(Le);b(gt.$$.fragment,Se),Wt=i(Se),kt=m(Se,"P",{"data-svelte-h":!0}),h(kt)!=="svelte-esub6"&&(kt.innerHTML=Xt),Zt=i(Se),b(ct.$$.fragment,Se),Lt=i(Se),b(mt.$$.fragment,Se),Se.forEach(d),Fe.forEach(d),Bt=i(r),b(_t.$$.fragment,r),Ft=i(r),Me=m(r,"DIV",{class:!0});var ze=ne(Me);b(bt.$$.fragment,ze),qt=i(ze),$t=m(ze,"P",{"data-svelte-h":!0}),h($t)!=="svelte-id2e"&&($t.innerHTML=Et),Ht=i(ze),xt=m(ze,"P",{"data-svelte-h":!0}),h(xt)!=="svelte-fk8iuy"&&(xt.innerHTML=Yt),Nt=i(ze),jt=m(ze,"P",{"data-svelte-h":!0}),h(jt)!=="svelte-hswkmf"&&(jt.innerHTML=Ot),Pt=i(ze),et=m(ze,"DIV",{class:!0});var nt=ne(et);b(yt.$$.fragment,nt),Gt=i(nt),Ct=m(nt,"P",{"data-svelte-h":!0}),h(Ct)!=="svelte-16wb5sa"&&(Ct.innerHTML=At),Vt=i(nt),b(pt.$$.fragment,nt),nt.forEach(d),ze.forEach(d),this.h()},h(){se(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),se(t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),se(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),se(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),se(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),se(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),se(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),se(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),se(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),se(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(r,k){y(e,r,k),p(r,u,k),p(r,t,k),y(s,t,null),a(t,f),a(t,o),a(t,Je),a(t,P),a(t,Ue),a(t,G),a(t,Ie),a(t,J),y(ue,J,null),a(J,he),a(J,ie),a(J,fe),y(W,J,null),a(J,S),y(ge,J,null),p(r,de,k),y(E,r,k),p(r,He,k),p(r,F,k),y(X,F,null),a(F,_e),a(F,ce),a(F,Ne),a(F,B),a(F,Ee),a(F,A),a(F,Ye),a(F,q),y(D,q,null),a(q,Oe),a(q,K),a(q,We),y(z,q,null),a(q,ve),y(me,q,null),p(r,ee,k),y(xe,r,k),p(r,Ze,k),p(r,j,k),y(te,j,null),a(j,Pe),a(j,H),a(j,be),a(j,Q),a(j,R),a(j,ye),a(j,C),a(j,N),a(j,oe),a(j,je),a(j,ht),a(j,V),y(De,V,null),a(V,ft),a(V,Te),a(V,Ke),y(Ve,V,null),a(V,it),y(ae,V,null),a(V,dt),y(we,V,null),p(r,tt,k),y(n,r,k),p(r,g,k),p(r,I,k),y(L,I,null),a(I,Mt),a(I,ot),a(I,Jt),a(I,vt),a(I,Ut),a(I,wt),a(I,It),a(I,Le),y(gt,Le,null),a(Le,Wt),a(Le,kt),a(Le,Zt),y(ct,Le,null),a(Le,Lt),y(mt,Le,null),p(r,Bt,k),y(_t,r,k),p(r,Ft,k),p(r,Me,k),y(bt,Me,null),a(Me,qt),a(Me,$t),a(Me,Ht),a(Me,xt),a(Me,Nt),a(Me,jt),a(Me,Pt),a(Me,et),y(yt,et,null),a(et,Gt),a(et,Ct),a(et,Vt),y(pt,et,null),zt=!0},p(r,k){const Qe={};k&2&&(Qe.$$scope={dirty:k,ctx:r}),W.$set(Qe);const Ce={};k&2&&(Ce.$$scope={dirty:k,ctx:r}),ge.$set(Ce);const Re={};k&2&&(Re.$$scope={dirty:k,ctx:r}),z.$set(Re);const re={};k&2&&(re.$$scope={dirty:k,ctx:r}),me.$set(re);const Be={};k&2&&(Be.$$scope={dirty:k,ctx:r}),Ve.$set(Be);const Fe={};k&2&&(Fe.$$scope={dirty:k,ctx:r}),ae.$set(Fe);const Se={};k&2&&(Se.$$scope={dirty:k,ctx:r}),we.$set(Se);const ze={};k&2&&(ze.$$scope={dirty:k,ctx:r}),ct.$set(ze);const nt={};k&2&&(nt.$$scope={dirty:k,ctx:r}),mt.$set(nt);const Dt={};k&2&&(Dt.$$scope={dirty:k,ctx:r}),pt.$set(Dt)},i(r){zt||(T(e.$$.fragment,r),T(s.$$.fragment,r),T(ue.$$.fragment,r),T(W.$$.fragment,r),T(ge.$$.fragment,r),T(E.$$.fragment,r),T(X.$$.fragment,r),T(D.$$.fragment,r),T(z.$$.fragment,r),T(me.$$.fragment,r),T(xe.$$.fragment,r),T(te.$$.fragment,r),T(De.$$.fragment,r),T(Ve.$$.fragment,r),T(ae.$$.fragment,r),T(we.$$.fragment,r),T(n.$$.fragment,r),T(L.$$.fragment,r),T(gt.$$.fragment,r),T(ct.$$.fragment,r),T(mt.$$.fragment,r),T(_t.$$.fragment,r),T(bt.$$.fragment,r),T(yt.$$.fragment,r),T(pt.$$.fragment,r),zt=!0)},o(r){M(e.$$.fragment,r),M(s.$$.fragment,r),M(ue.$$.fragment,r),M(W.$$.fragment,r),M(ge.$$.fragment,r),M(E.$$.fragment,r),M(X.$$.fragment,r),M(D.$$.fragment,r),M(z.$$.fragment,r),M(me.$$.fragment,r),M(xe.$$.fragment,r),M(te.$$.fragment,r),M(De.$$.fragment,r),M(Ve.$$.fragment,r),M(ae.$$.fragment,r),M(we.$$.fragment,r),M(n.$$.fragment,r),M(L.$$.fragment,r),M(gt.$$.fragment,r),M(ct.$$.fragment,r),M(mt.$$.fragment,r),M(_t.$$.fragment,r),M(bt.$$.fragment,r),M(yt.$$.fragment,r),M(pt.$$.fragment,r),zt=!1},d(r){r&&(d(u),d(t),d(de),d(He),d(F),d(ee),d(Ze),d(j),d(tt),d(g),d(I),d(Bt),d(Ft),d(Me)),v(e,r),v(s),v(ue),v(W),v(ge),v(E,r),v(X),v(D),v(z),v(me),v(xe,r),v(te),v(De),v(Ve),v(ae),v(we),v(n,r),v(L),v(gt),v(ct),v(mt),v(_t,r),v(bt),v(yt),v(pt)}}}function vo(x){let e,u;return e=new Kt({props:{$$slots:{default:[Mo]},$$scope:{ctx:x}}}),{c(){_(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,s){y(e,t,s),u=!0},p(t,s){const f={};s&2&&(f.$$scope={dirty:s,ctx:t}),e.$set(f)},i(t){u||(T(e.$$.fragment,t),u=!0)},o(t){M(e.$$.fragment,t),u=!1},d(t){v(e,t)}}}function wo(x){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=c("p"),e.innerHTML=u},l(t){e=m(t,"P",{"data-svelte-h":!0}),h(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(t,s){p(t,e,s)},p:le,d(t){t&&d(e)}}}function ko(x){let e,u="Example:",t,s,f;return s=new at({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4Qmxvb21Nb2RlbCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmJpZ3NjaWVuY2UlMkZibG9vbSUyMiklMEFtb2RlbCUyMCUzRCUyMEZsYXhCbG9vbU1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJiaWdzY2llbmNlJTJGYmxvb20lMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMmpheCUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBbGFzdF9oaWRkZW5fc3RhdGVzJTIwJTNEJTIwb3V0cHV0cy5sYXN0X2hpZGRlbl9zdGF0ZQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxBloomModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBloomModel.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,t=l(),_(s.$$.fragment)},l(o){e=m(o,"P",{"data-svelte-h":!0}),h(e)!=="svelte-11lpom8"&&(e.textContent=u),t=i(o),b(s.$$.fragment,o)},m(o,$){p(o,e,$),p(o,t,$),y(s,o,$),f=!0},p:le,i(o){f||(T(s.$$.fragment,o),f=!0)},o(o){M(s.$$.fragment,o),f=!1},d(o){o&&(d(e),d(t)),v(s,o)}}}function $o(x){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=c("p"),e.innerHTML=u},l(t){e=m(t,"P",{"data-svelte-h":!0}),h(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(t,s){p(t,e,s)},p:le,d(t){t&&d(e)}}}function xo(x){let e,u="Example:",t,s,f;return s=new at({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4Qmxvb21Gb3JDYXVzYWxMTSUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmJpZ3NjaWVuY2UlMkZibG9vbSUyMiklMEFtb2RlbCUyMCUzRCUyMEZsYXhCbG9vbUZvckNhdXNhbExNLmZyb21fcHJldHJhaW5lZCglMjJiaWdzY2llbmNlJTJGYmxvb20lMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMm5wJTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEElMjMlMjByZXRyaWV2ZSUyMGxvZ3RzJTIwZm9yJTIwbmV4dCUyMHRva2VuJTBBbmV4dF90b2tlbl9sb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cyU1QiUzQSUyQyUyMC0xJTVE",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxBloomForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBloomForCausalLM.from_pretrained(<span class="hljs-string">&quot;bigscience/bloom&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve logts for next token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,t=l(),_(s.$$.fragment)},l(o){e=m(o,"P",{"data-svelte-h":!0}),h(e)!=="svelte-11lpom8"&&(e.textContent=u),t=i(o),b(s.$$.fragment,o)},m(o,$){p(o,e,$),p(o,t,$),y(s,o,$),f=!0},p:le,i(o){f||(T(s.$$.fragment,o),f=!0)},o(o){M(s.$$.fragment,o),f=!1},d(o){o&&(d(e),d(t)),v(s,o)}}}function jo(x){let e,u,t,s,f,o,$="The bare Bloom Model transformer outputting raw hidden-states without any specific head on top.",Je,P,rt=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Ue,G,lt=`This model is also a Flax Linen
<a href="https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html" rel="nofollow">flax.nn.Module</a> subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`,Ie,J,ue="Finally, this model supports inherent JAX features such as:",he,ie,Xe='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',fe,W,S,ge,de,E="The <code>FlaxBloomPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",He,F,X,_e,ce,Y,Ne,B,O,Ee,A,ke=`The Bloom Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`,Ye,q,D=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Oe,K,$e=`This model is also a Flax Linen
<a href="https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html" rel="nofollow">flax.nn.Module</a> subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`,We,z,ve="Finally, this model supports inherent JAX features such as:",me,ee,xe='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',Ze,j,te,Pe,H,Ae="The <code>FlaxBloomPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",be,Q,Z,R,ye;return e=new qe({props:{title:"FlaxBloomModel",local:"transformers.FlaxBloomModel",headingTag:"h2"}}),s=new pe({props:{name:"class transformers.FlaxBloomModel",anchor:"transformers.FlaxBloomModel",parameters:[{name:"config",val:": BloomConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBloomModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBloomModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bloom/modeling_flax_bloom.py#L642"}}),S=new pe({props:{name:"__call__",anchor:"transformers.FlaxBloomModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"past_key_values",val:": dict = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FlaxBloomModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>BloomTokenizer</code>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBloomModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBloomModel.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBloomModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBloomModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBloomModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bloom/modeling_flax_bloom.py#L461",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/bloom#transformers.BloomConfig"
>BloomConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),F=new ut({props:{$$slots:{default:[wo]},$$scope:{ctx:x}}}),_e=new st({props:{anchor:"transformers.FlaxBloomModel.__call__.example",$$slots:{default:[ko]},$$scope:{ctx:x}}}),Y=new qe({props:{title:"FlaxBloomForCausalLM",local:"transformers.FlaxBloomForCausalLM",headingTag:"h2"}}),O=new pe({props:{name:"class transformers.FlaxBloomForCausalLM",anchor:"transformers.FlaxBloomForCausalLM",parameters:[{name:"config",val:": BloomConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBloomForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/bloom#transformers.BloomConfig">BloomConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBloomForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/ja/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bloom/modeling_flax_bloom.py#L701"}}),te=new pe({props:{name:"__call__",anchor:"transformers.FlaxBloomForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"past_key_values",val:": dict = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FlaxBloomForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>BloomTokenizer</code>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBloomForCausalLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBloomForCausalLM.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxBloomForCausalLM.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxBloomForCausalLM.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxBloomForCausalLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bloom/modeling_flax_bloom.py#L461",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/bloom#transformers.BloomConfig"
>BloomConfig</a>) and inputs.</p>
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
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Q=new ut({props:{$$slots:{default:[$o]},$$scope:{ctx:x}}}),R=new st({props:{anchor:"transformers.FlaxBloomForCausalLM.__call__.example",$$slots:{default:[xo]},$$scope:{ctx:x}}}),{c(){_(e.$$.fragment),u=l(),t=c("div"),_(s.$$.fragment),f=l(),o=c("p"),o.textContent=$,Je=l(),P=c("p"),P.innerHTML=rt,Ue=l(),G=c("p"),G.innerHTML=lt,Ie=l(),J=c("p"),J.textContent=ue,he=l(),ie=c("ul"),ie.innerHTML=Xe,fe=l(),W=c("div"),_(S.$$.fragment),ge=l(),de=c("p"),de.innerHTML=E,He=l(),_(F.$$.fragment),X=l(),_(_e.$$.fragment),ce=l(),_(Y.$$.fragment),Ne=l(),B=c("div"),_(O.$$.fragment),Ee=l(),A=c("p"),A.textContent=ke,Ye=l(),q=c("p"),q.innerHTML=D,Oe=l(),K=c("p"),K.innerHTML=$e,We=l(),z=c("p"),z.textContent=ve,me=l(),ee=c("ul"),ee.innerHTML=xe,Ze=l(),j=c("div"),_(te.$$.fragment),Pe=l(),H=c("p"),H.innerHTML=Ae,be=l(),_(Q.$$.fragment),Z=l(),_(R.$$.fragment),this.h()},l(w){b(e.$$.fragment,w),u=i(w),t=m(w,"DIV",{class:!0});var C=ne(t);b(s.$$.fragment,C),f=i(C),o=m(C,"P",{"data-svelte-h":!0}),h(o)!=="svelte-evl57a"&&(o.textContent=$),Je=i(C),P=m(C,"P",{"data-svelte-h":!0}),h(P)!=="svelte-16zl5na"&&(P.innerHTML=rt),Ue=i(C),G=m(C,"P",{"data-svelte-h":!0}),h(G)!=="svelte-idybz1"&&(G.innerHTML=lt),Ie=i(C),J=m(C,"P",{"data-svelte-h":!0}),h(J)!=="svelte-1pplc4a"&&(J.textContent=ue),he=i(C),ie=m(C,"UL",{"data-svelte-h":!0}),h(ie)!=="svelte-1w7z84m"&&(ie.innerHTML=Xe),fe=i(C),W=m(C,"DIV",{class:!0});var N=ne(W);b(S.$$.fragment,N),ge=i(N),de=m(N,"P",{"data-svelte-h":!0}),h(de)!=="svelte-1ppfflc"&&(de.innerHTML=E),He=i(N),b(F.$$.fragment,N),X=i(N),b(_e.$$.fragment,N),N.forEach(d),C.forEach(d),ce=i(w),b(Y.$$.fragment,w),Ne=i(w),B=m(w,"DIV",{class:!0});var U=ne(B);b(O.$$.fragment,U),Ee=i(U),A=m(U,"P",{"data-svelte-h":!0}),h(A)!=="svelte-ywufu4"&&(A.textContent=ke),Ye=i(U),q=m(U,"P",{"data-svelte-h":!0}),h(q)!=="svelte-16zl5na"&&(q.innerHTML=D),Oe=i(U),K=m(U,"P",{"data-svelte-h":!0}),h(K)!=="svelte-idybz1"&&(K.innerHTML=$e),We=i(U),z=m(U,"P",{"data-svelte-h":!0}),h(z)!=="svelte-1pplc4a"&&(z.textContent=ve),me=i(U),ee=m(U,"UL",{"data-svelte-h":!0}),h(ee)!=="svelte-1w7z84m"&&(ee.innerHTML=xe),Ze=i(U),j=m(U,"DIV",{class:!0});var oe=ne(j);b(te.$$.fragment,oe),Pe=i(oe),H=m(oe,"P",{"data-svelte-h":!0}),h(H)!=="svelte-1ppfflc"&&(H.innerHTML=Ae),be=i(oe),b(Q.$$.fragment,oe),Z=i(oe),b(R.$$.fragment,oe),oe.forEach(d),U.forEach(d),this.h()},h(){se(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),se(t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),se(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),se(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(w,C){y(e,w,C),p(w,u,C),p(w,t,C),y(s,t,null),a(t,f),a(t,o),a(t,Je),a(t,P),a(t,Ue),a(t,G),a(t,Ie),a(t,J),a(t,he),a(t,ie),a(t,fe),a(t,W),y(S,W,null),a(W,ge),a(W,de),a(W,He),y(F,W,null),a(W,X),y(_e,W,null),p(w,ce,C),y(Y,w,C),p(w,Ne,C),p(w,B,C),y(O,B,null),a(B,Ee),a(B,A),a(B,Ye),a(B,q),a(B,Oe),a(B,K),a(B,We),a(B,z),a(B,me),a(B,ee),a(B,Ze),a(B,j),y(te,j,null),a(j,Pe),a(j,H),a(j,be),y(Q,j,null),a(j,Z),y(R,j,null),ye=!0},p(w,C){const N={};C&2&&(N.$$scope={dirty:C,ctx:w}),F.$set(N);const U={};C&2&&(U.$$scope={dirty:C,ctx:w}),_e.$set(U);const oe={};C&2&&(oe.$$scope={dirty:C,ctx:w}),Q.$set(oe);const je={};C&2&&(je.$$scope={dirty:C,ctx:w}),R.$set(je)},i(w){ye||(T(e.$$.fragment,w),T(s.$$.fragment,w),T(S.$$.fragment,w),T(F.$$.fragment,w),T(_e.$$.fragment,w),T(Y.$$.fragment,w),T(O.$$.fragment,w),T(te.$$.fragment,w),T(Q.$$.fragment,w),T(R.$$.fragment,w),ye=!0)},o(w){M(e.$$.fragment,w),M(s.$$.fragment,w),M(S.$$.fragment,w),M(F.$$.fragment,w),M(_e.$$.fragment,w),M(Y.$$.fragment,w),M(O.$$.fragment,w),M(te.$$.fragment,w),M(Q.$$.fragment,w),M(R.$$.fragment,w),ye=!1},d(w){w&&(d(u),d(t),d(ce),d(Ne),d(B)),v(e,w),v(s),v(S),v(F),v(_e),v(Y,w),v(O),v(te),v(Q),v(R)}}}function Co(x){let e,u;return e=new Kt({props:{$$slots:{default:[jo]},$$scope:{ctx:x}}}),{c(){_(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,s){y(e,t,s),u=!0},p(t,s){const f={};s&2&&(f.$$scope={dirty:s,ctx:t}),e.$set(f)},i(t){u||(T(e.$$.fragment,t),u=!0)},o(t){M(e.$$.fragment,t),u=!1},d(t){v(e,t)}}}function Bo(x){let e,u,t,s,f,o,$,Je,P,rt=`BLOOM モデルは、<a href="https://bigscience.huggingface.co/" rel="nofollow">BigScience Workshop</a> を通じてさまざまなバージョンで提案されています。 BigScience は、研究者が時間とリソースをプールして共同でより高い効果を達成する他のオープン サイエンス イニシアチブからインスピレーションを得ています。
BLOOM のアーキテクチャは基本的に GPT3 (次のトークン予測のための自己回帰モデル) に似ていますが、46 の異なる言語と 13 のプログラミング言語でトレーニングされています。
モデルのいくつかの小さいバージョンが同じデータセットでトレーニングされています。 BLOOM は次のバージョンで利用できます。`,Ue,G,lt='<li><a href="https://huggingface.co/bigscience/bloom-560m" rel="nofollow">bloom-560m</a></li> <li><a href="https://huggingface.co/bigscience/bloom-1b1" rel="nofollow">bloom-1b1</a></li> <li><a href="https://huggingface.co/bigscience/bloom-1b7" rel="nofollow">bloom-1b7</a></li> <li><a href="https://huggingface.co/bigscience/bloom-3b" rel="nofollow">bloom-3b</a></li> <li><a href="https://huggingface.co/bigscience/bloom-7b1" rel="nofollow">bloom-7b1</a></li> <li><a href="https://huggingface.co/bigscience/bloom" rel="nofollow">bloom</a> (176B parameters)</li>',Ie,J,ue,he,ie="BLOOM を使い始めるのに役立つ公式 Hugging Face およびコミュニティ (🌎 で示されている) リソースのリスト。ここに含めるリソースの送信に興味がある場合は、お気軽にプル リクエストを開いてください。審査させていただきます。リソースは、既存のリソースを複製するのではなく、何か新しいものを示すことが理想的です。",Xe,fe,W,S,ge='<li><a href="/docs/transformers/main/ja/model_doc/bloom#transformers.BloomForCausalLM">BloomForCausalLM</a> これによってサポートされています <a href="https://github.com/huggingface/transformers/tree/main/examples/pytorch/language-modeling#gpt-2gpt-and-causal-language-modeling" rel="nofollow">causal language modeling example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/language_modeling.ipynb" rel="nofollow">notebook</a>.</li>',de,E,He="以下も参照してください。",F,X,_e='<li><a href="../tasks/language_modeling">因果言語モデリング タスク ガイド</a></li> <li><a href="../tasks/sequence_classification">テキスト分類タスクガイド</a></li> <li><a href="../tasks/token_classification">トークン分類タスクガイド</a></li> <li><a href="../tasks/question_answering">質問回答タスク ガイド</a></li>',ce,Y,Ne="⚡️ 推論",B,O,Ee='<li>に関するブログ  <a href="https://huggingface.co/blog/bloom-inference-optimization" rel="nofollow">最適化の話: ブルーム推論</a>。</li> <li>に関するブログ <a href="https://huggingface.co/blog/bloom-inference-pytorch-scripts" rel="nofollow">DeepSpeed と Accelerate を使用した信じられないほど高速な BLOOM 推論</a>。</li>',A,ke,Ye="⚙️トレーニング",q,D,Oe='<li>に関するブログ <a href="https://huggingface.co/blog/bloom-megatron-deepspeed" rel="nofollow">BLOOM トレーニングの背後にあるテクノロジー</a>。</li>',K,$e,We,z,ve,me,ee,xe=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/ja/model_doc/bloom#transformers.BloomModel">BloomModel</a>. It is used to instantiate a Bloom
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to the Bloom architecture
<a href="https://huggingface.co/bigscience/bloom" rel="nofollow">bigscience/bloom</a>.`,Ze,j,te=`Configuration objects inherit from <a href="/docs/transformers/main/ja/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/ja/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,Pe,H,Ae,be,Q,Z,R,ye,w,C=`Construct a “fast” Bloom tokenizer (backed by HuggingFace’s <em>tokenizers</em> library). Based on byte-level
Byte-Pair-Encoding.`,N,U,oe="This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will",je,Ge,ht,V,De=`You can get around that behavior by passing <code>add_prefix_space=True</code> when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`,ft,Te,Tt,Ke,Ve=`This tokenizer inherits from <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a> which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`,it,ae,dt,we,tt;return f=new qe({props:{title:"BLOOM",local:"bloom",headingTag:"h1"}}),$=new qe({props:{title:"Overview",local:"overview",headingTag:"h2"}}),J=new qe({props:{title:"Resources",local:"resources",headingTag:"h2"}}),fe=new ro({props:{pipeline:"text-generation"}}),$e=new qe({props:{title:"BloomConfig",local:"transformers.BloomConfig",headingTag:"h2"}}),ve=new pe({props:{name:"class transformers.BloomConfig",anchor:"transformers.BloomConfig",parameters:[{name:"vocab_size",val:" = 250880"},{name:"hidden_size",val:" = 64"},{name:"n_layer",val:" = 2"},{name:"n_head",val:" = 8"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"use_cache",val:" = True"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"apply_residual_connection_post_layernorm",val:" = False"},{name:"hidden_dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"pretraining_tp",val:" = 1"},{name:"slow_but_exact",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BloomConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 250880) &#x2014;
Vocabulary size of the Bloom model. Defines the maximum number of different tokens that can be represented
by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/ja/model_doc/bloom#transformers.BloomModel">BloomModel</a>. Check <a href="https://huggingface.co/bigscience/bloom/discussions/120#633d28389addb8530b406c2a" rel="nofollow">this
discussion</a> on how the
<code>vocab_size</code> has been defined.`,name:"vocab_size"},{anchor:"transformers.BloomConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Dimensionality of the embeddings and hidden states.`,name:"hidden_size"},{anchor:"transformers.BloomConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.BloomConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.BloomConfig.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon to use in the layer normalization layers.`,name:"layer_norm_epsilon"},{anchor:"transformers.BloomConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.BloomConfig.apply_residual_connection_post_layernorm",description:`<strong>apply_residual_connection_post_layernorm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If enabled, use the layer norm of the hidden states as the residual in the transformer blocks`,name:"apply_residual_connection_post_layernorm"},{anchor:"transformers.BloomConfig.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Dropout rate of the dropout function on the bias dropout.`,name:"hidden_dropout"},{anchor:"transformers.BloomConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Dropout rate applied to the attention probs`,name:"attention_dropout"},{anchor:"transformers.BloomConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.BloomConfig.pretraining_tp",description:`<strong>pretraining_tp</strong> (<code>int</code>, <em>optional</em>, defaults to <code>1</code>) &#x2014;
Experimental feature. Tensor parallelism rank used during pretraining with Megatron. Please refer to <a href="https://huggingface.co/docs/transformers/parallelism" rel="nofollow">this
document</a> to understand more about it. This value is
necessary to ensure exact reproducibility of the pretraining results. Please refer to <a href="https://github.com/pytorch/pytorch/issues/76232" rel="nofollow">this
issue</a>. Note also that this is enabled only when
<code>slow_but_exact=True</code>.`,name:"pretraining_tp"},{anchor:"transformers.BloomConfig.slow_but_exact",description:`<strong>slow_but_exact</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Experimental feature. Whether to use slow but exact implementation of the attention mechanism. While
merging the TP rank tensors, due to slicing operations the results may be slightly different between the
model trained on Megatron and our model. Please refer to <a href="https://github.com/pytorch/pytorch/issues/76232" rel="nofollow">this
issue</a>. A solution to obtain more accurate results is to
enable this feature. Enabling this will hurt the computational time of the inference. Will be probably
resolved in the future once the main model has been fine-tuned with TP_rank=1.`,name:"slow_but_exact"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bloom/configuration_bloom.py#L42"}}),H=new st({props:{anchor:"transformers.BloomConfig.example",$$slots:{default:[lo]},$$scope:{ctx:x}}}),be=new qe({props:{title:"BloomTokenizerFast",local:"transformers.BloomTokenizerFast",headingTag:"h2"}}),R=new pe({props:{name:"class transformers.BloomTokenizerFast",anchor:"transformers.BloomTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"add_prefix_space",val:" = False"},{name:"clean_up_tokenization_spaces",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BloomTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.BloomTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.BloomTokenizerFast.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.BloomTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BloomTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.BloomTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.BloomTokenizerFast.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (Bloom tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.BloomTokenizerFast.trim_offsets",description:`<strong>trim_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the post-processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bloom/tokenization_bloom_fast.py#L43"}}),Ge=new st({props:{anchor:"transformers.BloomTokenizerFast.example",$$slots:{default:[io]},$$scope:{ctx:x}}}),Te=new ut({props:{$$slots:{default:[co]},$$scope:{ctx:x}}}),ae=new ao({props:{pytorch:!0,tensorflow:!1,jax:!0,$$slots:{jax:[Co],pytorch:[vo]},$$scope:{ctx:x}}}),{c(){e=c("meta"),u=l(),t=c("p"),s=l(),_(f.$$.fragment),o=l(),_($.$$.fragment),Je=l(),P=c("p"),P.innerHTML=rt,Ue=l(),G=c("ul"),G.innerHTML=lt,Ie=l(),_(J.$$.fragment),ue=l(),he=c("p"),he.textContent=ie,Xe=l(),_(fe.$$.fragment),W=l(),S=c("ul"),S.innerHTML=ge,de=l(),E=c("p"),E.textContent=He,F=l(),X=c("ul"),X.innerHTML=_e,ce=l(),Y=c("p"),Y.textContent=Ne,B=l(),O=c("ul"),O.innerHTML=Ee,A=l(),ke=c("p"),ke.textContent=Ye,q=l(),D=c("ul"),D.innerHTML=Oe,K=l(),_($e.$$.fragment),We=l(),z=c("div"),_(ve.$$.fragment),me=l(),ee=c("p"),ee.innerHTML=xe,Ze=l(),j=c("p"),j.innerHTML=te,Pe=l(),_(H.$$.fragment),Ae=l(),_(be.$$.fragment),Q=l(),Z=c("div"),_(R.$$.fragment),ye=l(),w=c("p"),w.innerHTML=C,N=l(),U=c("p"),U.textContent=oe,je=l(),_(Ge.$$.fragment),ht=l(),V=c("p"),V.innerHTML=De,ft=l(),_(Te.$$.fragment),Tt=l(),Ke=c("p"),Ke.innerHTML=Ve,it=l(),_(ae.$$.fragment),dt=l(),we=c("p"),this.h()},l(n){const g=so("svelte-u9bgzb",document.head);e=m(g,"META",{name:!0,content:!0}),g.forEach(d),u=i(n),t=m(n,"P",{}),ne(t).forEach(d),s=i(n),b(f.$$.fragment,n),o=i(n),b($.$$.fragment,n),Je=i(n),P=m(n,"P",{"data-svelte-h":!0}),h(P)!=="svelte-15ul9i3"&&(P.innerHTML=rt),Ue=i(n),G=m(n,"UL",{"data-svelte-h":!0}),h(G)!=="svelte-aurotn"&&(G.innerHTML=lt),Ie=i(n),b(J.$$.fragment,n),ue=i(n),he=m(n,"P",{"data-svelte-h":!0}),h(he)!=="svelte-z3xvm4"&&(he.textContent=ie),Xe=i(n),b(fe.$$.fragment,n),W=i(n),S=m(n,"UL",{"data-svelte-h":!0}),h(S)!=="svelte-3nmiwv"&&(S.innerHTML=ge),de=i(n),E=m(n,"P",{"data-svelte-h":!0}),h(E)!=="svelte-1uqkcs8"&&(E.textContent=He),F=i(n),X=m(n,"UL",{"data-svelte-h":!0}),h(X)!=="svelte-1l7tvok"&&(X.innerHTML=_e),ce=i(n),Y=m(n,"P",{"data-svelte-h":!0}),h(Y)!=="svelte-u831vu"&&(Y.textContent=Ne),B=i(n),O=m(n,"UL",{"data-svelte-h":!0}),h(O)!=="svelte-199enyb"&&(O.innerHTML=Ee),A=i(n),ke=m(n,"P",{"data-svelte-h":!0}),h(ke)!=="svelte-166ryta"&&(ke.textContent=Ye),q=i(n),D=m(n,"UL",{"data-svelte-h":!0}),h(D)!=="svelte-e9wcbr"&&(D.innerHTML=Oe),K=i(n),b($e.$$.fragment,n),We=i(n),z=m(n,"DIV",{class:!0});var I=ne(z);b(ve.$$.fragment,I),me=i(I),ee=m(I,"P",{"data-svelte-h":!0}),h(ee)!=="svelte-rzjnxa"&&(ee.innerHTML=xe),Ze=i(I),j=m(I,"P",{"data-svelte-h":!0}),h(j)!=="svelte-1s6wgpv"&&(j.innerHTML=te),Pe=i(I),b(H.$$.fragment,I),I.forEach(d),Ae=i(n),b(be.$$.fragment,n),Q=i(n),Z=m(n,"DIV",{class:!0});var L=ne(Z);b(R.$$.fragment,L),ye=i(L),w=m(L,"P",{"data-svelte-h":!0}),h(w)!=="svelte-18ugbid"&&(w.innerHTML=C),N=i(L),U=m(L,"P",{"data-svelte-h":!0}),h(U)!=="svelte-1s077p3"&&(U.textContent=oe),je=i(L),b(Ge.$$.fragment,L),ht=i(L),V=m(L,"P",{"data-svelte-h":!0}),h(V)!=="svelte-1afeqmz"&&(V.innerHTML=De),ft=i(L),b(Te.$$.fragment,L),Tt=i(L),Ke=m(L,"P",{"data-svelte-h":!0}),h(Ke)!=="svelte-y6yfrk"&&(Ke.innerHTML=Ve),L.forEach(d),it=i(n),b(ae.$$.fragment,n),dt=i(n),we=m(n,"P",{}),ne(we).forEach(d),this.h()},h(){se(e,"name","hf:doc:metadata"),se(e,"content",Fo),se(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),se(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(n,g){a(document.head,e),p(n,u,g),p(n,t,g),p(n,s,g),y(f,n,g),p(n,o,g),y($,n,g),p(n,Je,g),p(n,P,g),p(n,Ue,g),p(n,G,g),p(n,Ie,g),y(J,n,g),p(n,ue,g),p(n,he,g),p(n,Xe,g),y(fe,n,g),p(n,W,g),p(n,S,g),p(n,de,g),p(n,E,g),p(n,F,g),p(n,X,g),p(n,ce,g),p(n,Y,g),p(n,B,g),p(n,O,g),p(n,A,g),p(n,ke,g),p(n,q,g),p(n,D,g),p(n,K,g),y($e,n,g),p(n,We,g),p(n,z,g),y(ve,z,null),a(z,me),a(z,ee),a(z,Ze),a(z,j),a(z,Pe),y(H,z,null),p(n,Ae,g),y(be,n,g),p(n,Q,g),p(n,Z,g),y(R,Z,null),a(Z,ye),a(Z,w),a(Z,N),a(Z,U),a(Z,je),y(Ge,Z,null),a(Z,ht),a(Z,V),a(Z,ft),y(Te,Z,null),a(Z,Tt),a(Z,Ke),p(n,it,g),y(ae,n,g),p(n,dt,g),p(n,we,g),tt=!0},p(n,[g]){const I={};g&2&&(I.$$scope={dirty:g,ctx:n}),H.$set(I);const L={};g&2&&(L.$$scope={dirty:g,ctx:n}),Ge.$set(L);const Mt={};g&2&&(Mt.$$scope={dirty:g,ctx:n}),Te.$set(Mt);const ot={};g&2&&(ot.$$scope={dirty:g,ctx:n}),ae.$set(ot)},i(n){tt||(T(f.$$.fragment,n),T($.$$.fragment,n),T(J.$$.fragment,n),T(fe.$$.fragment,n),T($e.$$.fragment,n),T(ve.$$.fragment,n),T(H.$$.fragment,n),T(be.$$.fragment,n),T(R.$$.fragment,n),T(Ge.$$.fragment,n),T(Te.$$.fragment,n),T(ae.$$.fragment,n),tt=!0)},o(n){M(f.$$.fragment,n),M($.$$.fragment,n),M(J.$$.fragment,n),M(fe.$$.fragment,n),M($e.$$.fragment,n),M(ve.$$.fragment,n),M(H.$$.fragment,n),M(be.$$.fragment,n),M(R.$$.fragment,n),M(Ge.$$.fragment,n),M(Te.$$.fragment,n),M(ae.$$.fragment,n),tt=!1},d(n){n&&(d(u),d(t),d(s),d(o),d(Je),d(P),d(Ue),d(G),d(Ie),d(ue),d(he),d(Xe),d(W),d(S),d(de),d(E),d(F),d(X),d(ce),d(Y),d(B),d(O),d(A),d(ke),d(q),d(D),d(K),d(We),d(z),d(Ae),d(Q),d(Z),d(it),d(dt),d(we)),d(e),v(f,n),v($,n),v(J,n),v(fe,n),v($e,n),v(ve),v(H),v(be,n),v(R),v(Ge),v(Te),v(ae,n)}}}const Fo='{"title":"BLOOM","local":"bloom","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"BloomConfig","local":"transformers.BloomConfig","sections":[],"depth":2},{"title":"BloomTokenizerFast","local":"transformers.BloomTokenizerFast","sections":[],"depth":2},{"title":"BloomModel","local":"transformers.BloomModel","sections":[],"depth":2},{"title":"BloomForCausalLM","local":"transformers.BloomForCausalLM","sections":[],"depth":2},{"title":"BloomForSequenceClassification","local":"transformers.BloomForSequenceClassification","sections":[],"depth":2},{"title":"BloomForTokenClassification","local":"transformers.BloomForTokenClassification","sections":[],"depth":2},{"title":"BloomForQuestionAnswering","local":"transformers.BloomForQuestionAnswering","sections":[],"depth":2},{"title":"FlaxBloomModel","local":"transformers.FlaxBloomModel","sections":[],"depth":2},{"title":"FlaxBloomForCausalLM","local":"transformers.FlaxBloomForCausalLM","sections":[],"depth":2}],"depth":1}';function zo(x){return to(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Po extends oo{constructor(e){super(),no(this,e,zo,Bo,eo,{})}}export{Po as component};
