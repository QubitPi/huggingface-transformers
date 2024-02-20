import{s as So,o as Yo,n as Q}from"../chunks/scheduler.9bc65507.js";import{S as Oo,i as Do,g as p,s as a,r as h,A as Ko,h as m,f as s,c as r,j as Z,u as f,x as u,k as B,y as i,a as c,v as g,d as _,t as b,w as M}from"../chunks/index.707bf1b6.js";import{T as it}from"../chunks/Tip.c2ecdbf4.js";import{D as V}from"../chunks/Docstring.17db21ae.js";import{C as at}from"../chunks/CodeBlock.54a9f38d.js";import{E as st}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as S}from"../chunks/Heading.342b1fa6.js";function en(w){let t,y="Example:",l,d,T;return d=new at({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyME1wdENvbmZpZyUyQyUyME1wdE1vZGVsJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyME1wdCUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwTXB0Q29uZmlnKCklMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwbW9kZWwlMjAod2l0aCUyMHJhbmRvbSUyMHdlaWdodHMpJTIwZnJvbSUyMHRoZSUyMGNvbmZpZ3VyYXRpb24lMEFtb2RlbCUyMCUzRCUyME1wdE1vZGVsKGNvbmZpZ3VyYXRpb24pJTBBJTBBJTIzJTIwQWNjZXNzaW5nJTIwdGhlJTIwbW9kZWwlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMG1vZGVsLmNvbmZpZw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MptConfig, MptModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Mpt configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = MptConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MptModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){t=p("p"),t.textContent=y,l=a(),h(d.$$.fragment)},l(o){t=m(o,"P",{"data-svelte-h":!0}),u(t)!=="svelte-11lpom8"&&(t.textContent=y),l=r(o),f(d.$$.fragment,o)},m(o,v){c(o,t,v),c(o,l,v),g(d,o,v),T=!0},p:Q,i(o){T||(_(d.$$.fragment,o),T=!0)},o(o){b(d.$$.fragment,o),T=!1},d(o){o&&(s(t),s(l)),M(d,o)}}}function tn(w){let t,y=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=p("p"),t.innerHTML=y},l(l){t=m(l,"P",{"data-svelte-h":!0}),u(t)!=="svelte-fincs2"&&(t.innerHTML=y)},m(l,d){c(l,t,d)},p:Q,d(l){l&&s(t)}}}function on(w){let t,y="Example:",l,d,T;return d=new at({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBNcHRNb2RlbCUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIybW9zYWljbWwlMkZtcHQtN2IlMjIpJTBBbW9kZWwlMjAlM0QlMjBNcHRNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIybW9zYWljbWwlMkZtcHQtN2IlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEFsYXN0X2hpZGRlbl9zdGF0ZXMlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRl",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, MptModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;mosaicml/mpt-7b&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MptModel.from_pretrained(<span class="hljs-string">&quot;mosaicml/mpt-7b&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){t=p("p"),t.textContent=y,l=a(),h(d.$$.fragment)},l(o){t=m(o,"P",{"data-svelte-h":!0}),u(t)!=="svelte-11lpom8"&&(t.textContent=y),l=r(o),f(d.$$.fragment,o)},m(o,v){c(o,t,v),c(o,l,v),g(d,o,v),T=!0},p:Q,i(o){T||(_(d.$$.fragment,o),T=!0)},o(o){b(d.$$.fragment,o),T=!1},d(o){o&&(s(t),s(l)),M(d,o)}}}function nn(w){let t,y=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=p("p"),t.innerHTML=y},l(l){t=m(l,"P",{"data-svelte-h":!0}),u(t)!=="svelte-fincs2"&&(t.innerHTML=y)},m(l,d){c(l,t,d)},p:Q,d(l){l&&s(t)}}}function sn(w){let t,y="Example:",l,d,T;return d=new at({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyME1wdEZvckNhdXNhbExNJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIybW9zYWljbWwlMkZtcHQtN2IlMjIpJTBBbW9kZWwlMjAlM0QlMjBNcHRGb3JDYXVzYWxMTS5mcm9tX3ByZXRyYWluZWQoJTIybW9zYWljbWwlMkZtcHQtN2IlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGlucHV0cyU1QiUyMmlucHV0X2lkcyUyMiU1RCklMEFsb3NzJTIwJTNEJTIwb3V0cHV0cy5sb3NzJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, MptForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;mosaicml/mpt-7b&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MptForCausalLM.from_pretrained(<span class="hljs-string">&quot;mosaicml/mpt-7b&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){t=p("p"),t.textContent=y,l=a(),h(d.$$.fragment)},l(o){t=m(o,"P",{"data-svelte-h":!0}),u(t)!=="svelte-11lpom8"&&(t.textContent=y),l=r(o),f(d.$$.fragment,o)},m(o,v){c(o,t,v),c(o,l,v),g(d,o,v),T=!0},p:Q,i(o){T||(_(d.$$.fragment,o),T=!0)},o(o){b(d.$$.fragment,o),T=!1},d(o){o&&(s(t),s(l)),M(d,o)}}}function an(w){let t,y=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=p("p"),t.innerHTML=y},l(l){t=m(l,"P",{"data-svelte-h":!0}),u(t)!=="svelte-fincs2"&&(t.innerHTML=y)},m(l,d){c(l,t,d)},p:Q,d(l){l&&s(t)}}}function rn(w){let t,y="Example of single-label classification:",l,d,T;return d=new at({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyME1wdEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJtb3NhaWNtbCUyRm1wdC03YiUyMiklMEFtb2RlbCUyMCUzRCUyME1wdEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMm1vc2FpY21sJTJGbXB0LTdiJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEElMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQXByZWRpY3RlZF9jbGFzc19pZCUyMCUzRCUyMGxvZ2l0cy5hcmdtYXgoKS5pdGVtKCklMEElMEElMjMlMjBUbyUyMHRyYWluJTIwYSUyMG1vZGVsJTIwb24lMjAlNjBudW1fbGFiZWxzJTYwJTIwY2xhc3NlcyUyQyUyMHlvdSUyMGNhbiUyMHBhc3MlMjAlNjBudW1fbGFiZWxzJTNEbnVtX2xhYmVscyU2MCUyMHRvJTIwJTYwLmZyb21fcHJldHJhaW5lZCguLi4pJTYwJTBBbnVtX2xhYmVscyUyMCUzRCUyMGxlbihtb2RlbC5jb25maWcuaWQybGFiZWwpJTBBbW9kZWwlMjAlM0QlMjBNcHRGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJtb3NhaWNtbCUyRm1wdC03YiUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzKSUwQSUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxJTVEKSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, MptForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;mosaicml/mpt-7b&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MptForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;mosaicml/mpt-7b&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MptForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;mosaicml/mpt-7b&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){t=p("p"),t.textContent=y,l=a(),h(d.$$.fragment)},l(o){t=m(o,"P",{"data-svelte-h":!0}),u(t)!=="svelte-ykxpe4"&&(t.textContent=y),l=r(o),f(d.$$.fragment,o)},m(o,v){c(o,t,v),c(o,l,v),g(d,o,v),T=!0},p:Q,i(o){T||(_(d.$$.fragment,o),T=!0)},o(o){b(d.$$.fragment,o),T=!1},d(o){o&&(s(t),s(l)),M(d,o)}}}function ln(w){let t,y="Example of multi-label classification:",l,d,T;return d=new at({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyME1wdEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJtb3NhaWNtbCUyRm1wdC03YiUyMiklMEFtb2RlbCUyMCUzRCUyME1wdEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMm1vc2FpY21sJTJGbXB0LTdiJTIyJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX2NsYXNzX2lkcyUyMCUzRCUyMHRvcmNoLmFyYW5nZSgwJTJDJTIwbG9naXRzLnNoYXBlJTVCLTElNUQpJTVCdG9yY2guc2lnbW9pZChsb2dpdHMpLnNxdWVlemUoZGltJTNEMCklMjAlM0UlMjAwLjUlNUQlMEElMEElMjMlMjBUbyUyMHRyYWluJTIwYSUyMG1vZGVsJTIwb24lMjAlNjBudW1fbGFiZWxzJTYwJTIwY2xhc3NlcyUyQyUyMHlvdSUyMGNhbiUyMHBhc3MlMjAlNjBudW1fbGFiZWxzJTNEbnVtX2xhYmVscyU2MCUyMHRvJTIwJTYwLmZyb21fcHJldHJhaW5lZCguLi4pJTYwJTBBbnVtX2xhYmVscyUyMCUzRCUyMGxlbihtb2RlbC5jb25maWcuaWQybGFiZWwpJTBBbW9kZWwlMjAlM0QlMjBNcHRGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMEElMjAlMjAlMjAlMjAlMjJtb3NhaWNtbCUyRm1wdC03YiUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIlMEEpJTBBJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2guc3VtKCUwQSUyMCUyMCUyMCUyMHRvcmNoLm5uLmZ1bmN0aW9uYWwub25lX2hvdChwcmVkaWN0ZWRfY2xhc3NfaWRzJTVCTm9uZSUyQyUyMCUzQSU1RC5jbG9uZSgpJTJDJTIwbnVtX2NsYXNzZXMlM0RudW1fbGFiZWxzKSUyQyUyMGRpbSUzRDElMEEpLnRvKHRvcmNoLmZsb2F0KSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, MptForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;mosaicml/mpt-7b&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MptForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;mosaicml/mpt-7b&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.arange(<span class="hljs-number">0</span>, logits.shape[-<span class="hljs-number">1</span>])[torch.sigmoid(logits).squeeze(dim=<span class="hljs-number">0</span>) &gt; <span class="hljs-number">0.5</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MptForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;mosaicml/mpt-7b&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.<span class="hljs-built_in">sum</span>(
<span class="hljs-meta">... </span>    torch.nn.functional.one_hot(predicted_class_ids[<span class="hljs-literal">None</span>, :].clone(), num_classes=num_labels), dim=<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>).to(torch.<span class="hljs-built_in">float</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){t=p("p"),t.textContent=y,l=a(),h(d.$$.fragment)},l(o){t=m(o,"P",{"data-svelte-h":!0}),u(t)!=="svelte-1l8e32d"&&(t.textContent=y),l=r(o),f(d.$$.fragment,o)},m(o,v){c(o,t,v),c(o,l,v),g(d,o,v),T=!0},p:Q,i(o){T||(_(d.$$.fragment,o),T=!0)},o(o){b(d.$$.fragment,o),T=!1},d(o){o&&(s(t),s(l)),M(d,o)}}}function dn(w){let t,y=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=p("p"),t.innerHTML=y},l(l){t=m(l,"P",{"data-svelte-h":!0}),u(t)!=="svelte-fincs2"&&(t.innerHTML=y)},m(l,d){c(l,t,d)},p:Q,d(l){l&&s(t)}}}function cn(w){let t,y="Example:",l,d,T;return d=new at({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBNcHRGb3JUb2tlbkNsYXNzaWZpY2F0aW9uJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJtb3NhaWNtbCUyRm1wdC03YiUyMiklMEFtb2RlbCUyMCUzRCUyME1wdEZvclRva2VuQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMm1vc2FpY21sJTJGbXB0LTdiJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMEElMjAlMjAlMjAlMjAlMjJIdWdnaW5nRmFjZSUyMGlzJTIwYSUyMGNvbXBhbnklMjBiYXNlZCUyMGluJTIwUGFyaXMlMjBhbmQlMjBOZXclMjBZb3JrJTIyJTJDJTIwYWRkX3NwZWNpYWxfdG9rZW5zJTNERmFsc2UlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTBBKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyUyMCUzRCUyMGxvZ2l0cy5hcmdtYXgoLTEpJTBBJTBBJTIzJTIwTm90ZSUyMHRoYXQlMjB0b2tlbnMlMjBhcmUlMjBjbGFzc2lmaWVkJTIwcmF0aGVyJTIwdGhlbiUyMGlucHV0JTIwd29yZHMlMjB3aGljaCUyMG1lYW5zJTIwdGhhdCUwQSUyMyUyMHRoZXJlJTIwbWlnaHQlMjBiZSUyMG1vcmUlMjBwcmVkaWN0ZWQlMjB0b2tlbiUyMGNsYXNzZXMlMjB0aGFuJTIwd29yZHMuJTBBJTIzJTIwTXVsdGlwbGUlMjB0b2tlbiUyMGNsYXNzZXMlMjBtaWdodCUyMGFjY291bnQlMjBmb3IlMjB0aGUlMjBzYW1lJTIwd29yZCUwQXByZWRpY3RlZF90b2tlbnNfY2xhc3NlcyUyMCUzRCUyMCU1Qm1vZGVsLmNvbmZpZy5pZDJsYWJlbCU1QnQuaXRlbSgpJTVEJTIwZm9yJTIwdCUyMGluJTIwcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyU1QjAlNUQlNUQlMEElMEFsYWJlbHMlMjAlM0QlMjBwcmVkaWN0ZWRfdG9rZW5fY2xhc3NfaWRzJTBBbG9zcyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKS5sb3Nz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, MptForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;mosaicml/mpt-7b&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MptForTokenClassification.from_pretrained(<span class="hljs-string">&quot;mosaicml/mpt-7b&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){t=p("p"),t.textContent=y,l=a(),h(d.$$.fragment)},l(o){t=m(o,"P",{"data-svelte-h":!0}),u(t)!=="svelte-11lpom8"&&(t.textContent=y),l=r(o),f(d.$$.fragment,o)},m(o,v){c(o,t,v),c(o,l,v),g(d,o,v),T=!0},p:Q,i(o){T||(_(d.$$.fragment,o),T=!0)},o(o){b(d.$$.fragment,o),T=!1},d(o){o&&(s(t),s(l)),M(d,o)}}}function pn(w){let t,y=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=p("p"),t.innerHTML=y},l(l){t=m(l,"P",{"data-svelte-h":!0}),u(t)!=="svelte-fincs2"&&(t.innerHTML=y)},m(l,d){c(l,t,d)},p:Q,d(l){l&&s(t)}}}function mn(w){let t,y,l,d,T,o,v,lt,le,bo='The MPT model was proposed by the <a href="https://www.mosaicml.com/" rel="nofollow">MosaicML</a> team and released with multiple sizes and finetuned variants. The MPT models is a series of open source and commercially usable LLMs pre-trained on 1T tokens.',dt,de,Mo="MPT models are GPT-style decoder-only transformers with several improvements: performance-optimized layer implementations, architecture changes that provide greater training stability, and the elimination of context length limits by replacing positional embeddings with ALiBi.",ct,ce,yo="<li>MPT base: MPT base pre-trained models on next token prediction</li> <li>MPT instruct: MPT base models fine-tuned on instruction based tasks</li> <li>MPT storywriter: MPT base models fine-tuned for 2500 steps on 65k-token excerpts of fiction books contained in the books3 corpus, this enables the model to handle very long sequences</li>",pt,pe,To='The original code is available at the  <a href="https://github.com/mosaicml/llm-foundry/tree/main" rel="nofollow"><code>llm-foundry</code></a> repository.',mt,me,vo='Read more about it <a href="https://www.mosaicml.com/blog/mpt-7b" rel="nofollow">in the release blogpost</a>',ut,ue,ht,he,wo='<li>Learn more about some techniques behind training of the model <a href="https://github.com/mosaicml/llm-foundry/blob/main/TUTORIAL.md#faqs" rel="nofollow">in this section of llm-foundry repository</a></li> <li>If you want to use the advanced version of the model (triton kernels, direct flash attention integration), you can still use the original model implementation by adding <code>trust_remote_code=True</code> when calling <code>from_pretrained</code>.</li>',ft,fe,gt,ge,ko='<li><a href="https://colab.research.google.com/drive/1HCpQkLL7UXW8xJUJJ29X7QAeNJKO0frZ?usp=sharing" rel="nofollow">Fine-tuning Notebook</a> on how to fine-tune MPT-7B on a free Google Colab instance to turn the model into a Chatbot.</li>',_t,_e,bt,F,be,Ft,Ne,$o=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/mpt#transformers.MptModel">MptModel</a>. It is used to instantiate a Mpt model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to the Mpt-7b architecture
<a href="https://huggingface.co/mosaicml/mpt-7b" rel="nofollow">mosaicml/mpt-7b</a>.`,Ut,Ie,Co=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,Wt,O,Mt,Me,yt,C,ye,Nt,qe,jo="The bare Mpt Model transformer outputting raw hidden-states without any specific head on top.",It,Ze,xo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`,qt,Be,Jo=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Zt,H,Te,Bt,He,zo='The <a href="/docs/transformers/main/en/model_doc/mpt#transformers.MptModel">MptModel</a> forward method, overrides the <code>__call__</code> special method.',Ht,D,Lt,K,Tt,ve,vt,j,we,Gt,Le,Fo=`The MPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`,Rt,Ge,Uo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`,Pt,Re,Wo=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Xt,L,ke,Et,Pe,No='The <a href="/docs/transformers/main/en/model_doc/mpt#transformers.MptForCausalLM">MptForCausalLM</a> forward method, overrides the <code>__call__</code> special method.',Vt,ee,Qt,te,wt,$e,kt,k,Ce,At,Xe,Io="The MPT Model transformer with a sequence classification head on top (linear layer).",St,Ee,qo=`<a href="/docs/transformers/main/en/model_doc/mpt#transformers.MptForSequenceClassification">MptForSequenceClassification</a> uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`,Yt,Ve,Zo=`Since it does classification on the last token, it requires to know the position of the last token. If a
<code>pad_token_id</code> is defined in the configuration, it finds the last token that is not a padding token in each row. If
no <code>pad_token_id</code> is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when <code>inputs_embeds</code> are passed instead of <code>input_ids</code>, it does the same (take the last value in
each row of the batch).`,Ot,Qe,Bo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`,Dt,Ae,Ho=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Kt,z,je,eo,Se,Lo='The <a href="/docs/transformers/main/en/model_doc/mpt#transformers.MptForSequenceClassification">MptForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',to,oe,oo,ne,no,se,$t,xe,Ct,x,Je,so,Ye,Go=`MPT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`,ao,Oe,Ro=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`,ro,De,Po=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,io,G,ze,lo,Ke,Xo='The <a href="/docs/transformers/main/en/model_doc/mpt#transformers.MptForTokenClassification">MptForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',co,ae,po,re,jt,Fe,xt,J,Ue,mo,et,Eo=`The MPT Model transformer with a span classification head on top for extractive question-answering tasks like SQuAD
(a linear layers on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,uo,tt,Vo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings etc.)`,ho,ot,Qo=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,fo,A,We,go,nt,Ao='The <a href="/docs/transformers/main/en/model_doc/mpt#transformers.MptForQuestionAnswering">MptForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',_o,ie,Jt,rt,zt;return T=new S({props:{title:"MPT",local:"mpt",headingTag:"h1"}}),v=new S({props:{title:"Overview",local:"overview",headingTag:"h2"}}),ue=new S({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),fe=new S({props:{title:"Resources",local:"resources",headingTag:"h2"}}),_e=new S({props:{title:"MptConfig",local:"transformers.MptConfig",headingTag:"h2"}}),be=new V({props:{name:"class transformers.MptConfig",anchor:"transformers.MptConfig",parameters:[{name:"d_model",val:": int = 2048"},{name:"n_heads",val:": int = 16"},{name:"n_layers",val:": int = 24"},{name:"expansion_ratio",val:": int = 4"},{name:"max_seq_len",val:": int = 2048"},{name:"vocab_size",val:": int = 50368"},{name:"resid_pdrop",val:": float = 0.0"},{name:"layer_norm_epsilon",val:": float = 1e-05"},{name:"emb_pdrop",val:": float = 0.0"},{name:"learned_pos_emb",val:": bool = True"},{name:"attn_config",val:": MptAttentionConfig = None"},{name:"init_device",val:": str = 'cpu'"},{name:"logit_scale",val:": Union = None"},{name:"no_bias",val:": bool = True"},{name:"verbose",val:": int = 0"},{name:"embedding_fraction",val:": float = 1.0"},{name:"norm_type",val:": str = 'low_precision_layernorm'"},{name:"use_cache",val:": bool = False"},{name:"initializer_range",val:" = 0.02"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MptConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimensionality of the embeddings and hidden states.`,name:"d_model"},{anchor:"transformers.MptConfig.n_heads",description:`<strong>n_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_heads"},{anchor:"transformers.MptConfig.n_layers",description:`<strong>n_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layers"},{anchor:"transformers.MptConfig.expansion_ratio",description:`<strong>expansion_ratio</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The ratio of the up/down scale in the MLP.`,name:"expansion_ratio"},{anchor:"transformers.MptConfig.max_seq_len",description:`<strong>max_seq_len</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
The maximum sequence length of the model.`,name:"max_seq_len"},{anchor:"transformers.MptConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50368) &#x2014;
Vocabulary size of the Mpt model. Defines the maximum number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/mpt#transformers.MptModel">MptModel</a>. Check <a href="https://huggingface.co/bigscience/mpt/discussions/120#633d28389addb8530b406c2a" rel="nofollow">this
discussion</a> on how the
<code>vocab_size</code> has been defined.`,name:"vocab_size"},{anchor:"transformers.MptConfig.resid_pdrop",description:`<strong>resid_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability applied to the attention output before combining with residual.`,name:"resid_pdrop"},{anchor:"transformers.MptConfig.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-05) &#x2014;
The epsilon to use in the layer normalization layers.`,name:"layer_norm_epsilon"},{anchor:"transformers.MptConfig.emb_pdrop",description:`<strong>emb_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for the embedding layer.`,name:"emb_pdrop"},{anchor:"transformers.MptConfig.learned_pos_emb",description:`<strong>learned_pos_emb</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use learned positional embeddings.`,name:"learned_pos_emb"},{anchor:"transformers.MptConfig.attn_config",description:`<strong>attn_config</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
A dictionary used to configure the model&#x2019;s attention module.`,name:"attn_config"},{anchor:"transformers.MptConfig.init_device",description:`<strong>init_device</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;cpu&quot;</code>) &#x2014;
The device to use for parameter initialization. Defined for backward compatibility`,name:"init_device"},{anchor:"transformers.MptConfig.logit_scale",description:`<strong>logit_scale</strong> (<code>float</code>, <em>optional</em>) &#x2014;
If not None, scale the logits by this value.`,name:"logit_scale"},{anchor:"transformers.MptConfig.no_bias",description:`<strong>no_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use bias in all linear layers.`,name:"no_bias"},{anchor:"transformers.MptConfig.verbose",description:`<strong>verbose</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The verbosity level to use for logging. Used in the previous versions of MPT models for logging. This
argument is deprecated.`,name:"verbose"},{anchor:"transformers.MptConfig.embedding_fraction",description:`<strong>embedding_fraction</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
The fraction to scale the gradients of the embedding layer by.`,name:"embedding_fraction"},{anchor:"transformers.MptConfig.norm_type",description:`<strong>norm_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;low_precision_layernorm&quot;</code>) &#x2014;
Type of layer norm to use. All MPT models uses the same layer norm implementation. Defined for backward
compatibility.`,name:"norm_type"},{anchor:"transformers.MptConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.MptConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpt/configuration_mpt.py#L121"}}),O=new st({props:{anchor:"transformers.MptConfig.example",$$slots:{default:[en]},$$scope:{ctx:w}}}),Me=new S({props:{title:"MptModel",local:"transformers.MptModel",headingTag:"h2"}}),ye=new V({props:{name:"class transformers.MptModel",anchor:"transformers.MptModel",parameters:[{name:"config",val:": MptConfig"}],parametersDescription:[{anchor:"transformers.MptModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpt#transformers.MptConfig">MptConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpt/modeling_mpt.py#L351"}}),Te=new V({props:{name:"forward",anchor:"transformers.MptModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MptModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0][0].shape[2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MptModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.</p>
<p>Each element of <code>past_key_values</code> is a tuple (past_key, past_value):</p>
<ul>
<li>past_key: [batch_size * num_heads, head_dim, kv_length]</li>
<li>past_value: [batch_size * num_heads, kv_length, head_dim]</li>
</ul>`,name:"past_key_values"},{anchor:"transformers.MptModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MptModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.MptModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MptModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MptModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MptModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpt/modeling_mpt.py#L387",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mpt#transformers.MptConfig"
>MptConfig</a>) and inputs.</p>
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
`}}),D=new it({props:{$$slots:{default:[tn]},$$scope:{ctx:w}}}),K=new st({props:{anchor:"transformers.MptModel.forward.example",$$slots:{default:[on]},$$scope:{ctx:w}}}),ve=new S({props:{title:"MptForCausalLM",local:"transformers.MptForCausalLM",headingTag:"h2"}}),we=new V({props:{name:"class transformers.MptForCausalLM",anchor:"transformers.MptForCausalLM",parameters:[{name:"config",val:": MptConfig"}],parametersDescription:[{anchor:"transformers.MptForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpt#transformers.MptConfig">MptConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpt/modeling_mpt.py#L505"}}),ke=new V({props:{name:"forward",anchor:"transformers.MptForCausalLM.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MptForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0][0].shape[2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MptForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.</p>
<p>Each element of <code>past_key_values</code> is a tuple (past_key, past_value):</p>
<ul>
<li>past_key: [batch_size * num_heads, head_dim, kv_length]</li>
<li>past_value: [batch_size * num_heads, kv_length, head_dim]</li>
</ul>`,name:"past_key_values"},{anchor:"transformers.MptForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MptForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.MptForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MptForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MptForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MptForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MptForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpt/modeling_mpt.py#L566",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mpt#transformers.MptConfig"
>MptConfig</a>) and inputs.</p>
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
`}}),ee=new it({props:{$$slots:{default:[nn]},$$scope:{ctx:w}}}),te=new st({props:{anchor:"transformers.MptForCausalLM.forward.example",$$slots:{default:[sn]},$$scope:{ctx:w}}}),$e=new S({props:{title:"MptForSequenceClassification",local:"transformers.MptForSequenceClassification",headingTag:"h2"}}),Ce=new V({props:{name:"class transformers.MptForSequenceClassification",anchor:"transformers.MptForSequenceClassification",parameters:[{name:"config",val:": MptConfig"}],parametersDescription:[{anchor:"transformers.MptForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpt#transformers.MptConfig">MptConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpt/modeling_mpt.py#L656"}}),je=new V({props:{name:"forward",anchor:"transformers.MptForSequenceClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MptForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0][0].shape[2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MptForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.</p>
<p>Each element of <code>past_key_values</code> is a tuple (past_key, past_value):</p>
<ul>
<li>past_key: [batch_size * num_heads, head_dim, kv_length]</li>
<li>past_value: [batch_size * num_heads, kv_length, head_dim]</li>
</ul>`,name:"past_key_values"},{anchor:"transformers.MptForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MptForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.MptForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MptForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MptForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MptForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MptForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpt/modeling_mpt.py#L681",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mpt#transformers.MptConfig"
>MptConfig</a>) and inputs.</p>
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
`}}),oe=new it({props:{$$slots:{default:[an]},$$scope:{ctx:w}}}),ne=new st({props:{anchor:"transformers.MptForSequenceClassification.forward.example",$$slots:{default:[rn]},$$scope:{ctx:w}}}),se=new st({props:{anchor:"transformers.MptForSequenceClassification.forward.example-2",$$slots:{default:[ln]},$$scope:{ctx:w}}}),xe=new S({props:{title:"MptForTokenClassification",local:"transformers.MptForTokenClassification",headingTag:"h2"}}),Je=new V({props:{name:"class transformers.MptForTokenClassification",anchor:"transformers.MptForTokenClassification",parameters:[{name:"config",val:": MptConfig"}],parametersDescription:[{anchor:"transformers.MptForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpt#transformers.MptConfig">MptConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpt/modeling_mpt.py#L780"}}),ze=new V({props:{name:"forward",anchor:"transformers.MptForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"**deprecated_arguments",val:""}],parametersDescription:[{anchor:"transformers.MptForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0][0].shape[2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MptForTokenClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.</p>
<p>Each element of <code>past_key_values</code> is a tuple (past_key, past_value):</p>
<ul>
<li>past_key: [batch_size * num_heads, head_dim, kv_length]</li>
<li>past_value: [batch_size * num_heads, kv_length, head_dim]</li>
</ul>`,name:"past_key_values"},{anchor:"transformers.MptForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MptForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.MptForTokenClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MptForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MptForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MptForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MptForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpt/modeling_mpt.py#L805",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mpt#transformers.MptConfig"
>MptConfig</a>) and inputs.</p>
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
`}}),ae=new it({props:{$$slots:{default:[dn]},$$scope:{ctx:w}}}),re=new st({props:{anchor:"transformers.MptForTokenClassification.forward.example",$$slots:{default:[cn]},$$scope:{ctx:w}}}),Fe=new S({props:{title:"MptForQuestionAnswering",local:"transformers.MptForQuestionAnswering",headingTag:"h2"}}),Ue=new V({props:{name:"class transformers.MptForQuestionAnswering",anchor:"transformers.MptForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MptForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpt#transformers.MptConfig">MptConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpt/modeling_mpt.py#L869"}}),We=new V({props:{name:"forward",anchor:"transformers.MptForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"start_positions",val:": Optional = None"},{name:"end_positions",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MptForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0][0].shape[2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MptForQuestionAnswering.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.</p>
<p>Each element of <code>past_key_values</code> is a tuple (past_key, past_value):</p>
<ul>
<li>past_key: [batch_size * num_heads, head_dim, kv_length]</li>
<li>past_value: [batch_size * num_heads, kv_length, head_dim]</li>
</ul>`,name:"past_key_values"},{anchor:"transformers.MptForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MptForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.MptForQuestionAnswering.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MptForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MptForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MptForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MptForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MptForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mpt/modeling_mpt.py#L885"}}),ie=new it({props:{$$slots:{default:[pn]},$$scope:{ctx:w}}}),{c(){t=p("meta"),y=a(),l=p("p"),d=a(),h(T.$$.fragment),o=a(),h(v.$$.fragment),lt=a(),le=p("p"),le.innerHTML=bo,dt=a(),de=p("p"),de.textContent=Mo,ct=a(),ce=p("ul"),ce.innerHTML=yo,pt=a(),pe=p("p"),pe.innerHTML=To,mt=a(),me=p("p"),me.innerHTML=vo,ut=a(),h(ue.$$.fragment),ht=a(),he=p("ul"),he.innerHTML=wo,ft=a(),h(fe.$$.fragment),gt=a(),ge=p("ul"),ge.innerHTML=ko,_t=a(),h(_e.$$.fragment),bt=a(),F=p("div"),h(be.$$.fragment),Ft=a(),Ne=p("p"),Ne.innerHTML=$o,Ut=a(),Ie=p("p"),Ie.innerHTML=Co,Wt=a(),h(O.$$.fragment),Mt=a(),h(Me.$$.fragment),yt=a(),C=p("div"),h(ye.$$.fragment),Nt=a(),qe=p("p"),qe.textContent=jo,It=a(),Ze=p("p"),Ze.innerHTML=xo,qt=a(),Be=p("p"),Be.innerHTML=Jo,Zt=a(),H=p("div"),h(Te.$$.fragment),Bt=a(),He=p("p"),He.innerHTML=zo,Ht=a(),h(D.$$.fragment),Lt=a(),h(K.$$.fragment),Tt=a(),h(ve.$$.fragment),vt=a(),j=p("div"),h(we.$$.fragment),Gt=a(),Le=p("p"),Le.textContent=Fo,Rt=a(),Ge=p("p"),Ge.innerHTML=Uo,Pt=a(),Re=p("p"),Re.innerHTML=Wo,Xt=a(),L=p("div"),h(ke.$$.fragment),Et=a(),Pe=p("p"),Pe.innerHTML=No,Vt=a(),h(ee.$$.fragment),Qt=a(),h(te.$$.fragment),wt=a(),h($e.$$.fragment),kt=a(),k=p("div"),h(Ce.$$.fragment),At=a(),Xe=p("p"),Xe.textContent=Io,St=a(),Ee=p("p"),Ee.innerHTML=qo,Yt=a(),Ve=p("p"),Ve.innerHTML=Zo,Ot=a(),Qe=p("p"),Qe.innerHTML=Bo,Dt=a(),Ae=p("p"),Ae.innerHTML=Ho,Kt=a(),z=p("div"),h(je.$$.fragment),eo=a(),Se=p("p"),Se.innerHTML=Lo,to=a(),h(oe.$$.fragment),oo=a(),h(ne.$$.fragment),no=a(),h(se.$$.fragment),$t=a(),h(xe.$$.fragment),Ct=a(),x=p("div"),h(Je.$$.fragment),so=a(),Ye=p("p"),Ye.textContent=Go,ao=a(),Oe=p("p"),Oe.innerHTML=Ro,ro=a(),De=p("p"),De.innerHTML=Po,io=a(),G=p("div"),h(ze.$$.fragment),lo=a(),Ke=p("p"),Ke.innerHTML=Xo,co=a(),h(ae.$$.fragment),po=a(),h(re.$$.fragment),jt=a(),h(Fe.$$.fragment),xt=a(),J=p("div"),h(Ue.$$.fragment),mo=a(),et=p("p"),et.innerHTML=Eo,uo=a(),tt=p("p"),tt.innerHTML=Vo,ho=a(),ot=p("p"),ot.innerHTML=Qo,fo=a(),A=p("div"),h(We.$$.fragment),go=a(),nt=p("p"),nt.innerHTML=Ao,_o=a(),h(ie.$$.fragment),Jt=a(),rt=p("p"),this.h()},l(e){const n=Ko("svelte-u9bgzb",document.head);t=m(n,"META",{name:!0,content:!0}),n.forEach(s),y=r(e),l=m(e,"P",{}),Z(l).forEach(s),d=r(e),f(T.$$.fragment,e),o=r(e),f(v.$$.fragment,e),lt=r(e),le=m(e,"P",{"data-svelte-h":!0}),u(le)!=="svelte-1f4n6zy"&&(le.innerHTML=bo),dt=r(e),de=m(e,"P",{"data-svelte-h":!0}),u(de)!=="svelte-1ipzlev"&&(de.textContent=Mo),ct=r(e),ce=m(e,"UL",{"data-svelte-h":!0}),u(ce)!=="svelte-re1aby"&&(ce.innerHTML=yo),pt=r(e),pe=m(e,"P",{"data-svelte-h":!0}),u(pe)!=="svelte-si6x57"&&(pe.innerHTML=To),mt=r(e),me=m(e,"P",{"data-svelte-h":!0}),u(me)!=="svelte-124zaeu"&&(me.innerHTML=vo),ut=r(e),f(ue.$$.fragment,e),ht=r(e),he=m(e,"UL",{"data-svelte-h":!0}),u(he)!=="svelte-u5wuo0"&&(he.innerHTML=wo),ft=r(e),f(fe.$$.fragment,e),gt=r(e),ge=m(e,"UL",{"data-svelte-h":!0}),u(ge)!=="svelte-1bd79e6"&&(ge.innerHTML=ko),_t=r(e),f(_e.$$.fragment,e),bt=r(e),F=m(e,"DIV",{class:!0});var R=Z(F);f(be.$$.fragment,R),Ft=r(R),Ne=m(R,"P",{"data-svelte-h":!0}),u(Ne)!=="svelte-1i1d0io"&&(Ne.innerHTML=$o),Ut=r(R),Ie=m(R,"P",{"data-svelte-h":!0}),u(Ie)!=="svelte-o55m63"&&(Ie.innerHTML=Co),Wt=r(R),f(O.$$.fragment,R),R.forEach(s),Mt=r(e),f(Me.$$.fragment,e),yt=r(e),C=m(e,"DIV",{class:!0});var U=Z(C);f(ye.$$.fragment,U),Nt=r(U),qe=m(U,"P",{"data-svelte-h":!0}),u(qe)!=="svelte-1tl93fy"&&(qe.textContent=jo),It=r(U),Ze=m(U,"P",{"data-svelte-h":!0}),u(Ze)!=="svelte-1ymzemc"&&(Ze.innerHTML=xo),qt=r(U),Be=m(U,"P",{"data-svelte-h":!0}),u(Be)!=="svelte-hswkmf"&&(Be.innerHTML=Jo),Zt=r(U),H=m(U,"DIV",{class:!0});var P=Z(H);f(Te.$$.fragment,P),Bt=r(P),He=m(P,"P",{"data-svelte-h":!0}),u(He)!=="svelte-10g2gzo"&&(He.innerHTML=zo),Ht=r(P),f(D.$$.fragment,P),Lt=r(P),f(K.$$.fragment,P),P.forEach(s),U.forEach(s),Tt=r(e),f(ve.$$.fragment,e),vt=r(e),j=m(e,"DIV",{class:!0});var W=Z(j);f(we.$$.fragment,W),Gt=r(W),Le=m(W,"P",{"data-svelte-h":!0}),u(Le)!=="svelte-fj8rfo"&&(Le.textContent=Fo),Rt=r(W),Ge=m(W,"P",{"data-svelte-h":!0}),u(Ge)!=="svelte-1ymzemc"&&(Ge.innerHTML=Uo),Pt=r(W),Re=m(W,"P",{"data-svelte-h":!0}),u(Re)!=="svelte-hswkmf"&&(Re.innerHTML=Wo),Xt=r(W),L=m(W,"DIV",{class:!0});var X=Z(L);f(ke.$$.fragment,X),Et=r(X),Pe=m(X,"P",{"data-svelte-h":!0}),u(Pe)!=="svelte-13tbzng"&&(Pe.innerHTML=No),Vt=r(X),f(ee.$$.fragment,X),Qt=r(X),f(te.$$.fragment,X),X.forEach(s),W.forEach(s),wt=r(e),f($e.$$.fragment,e),kt=r(e),k=m(e,"DIV",{class:!0});var $=Z(k);f(Ce.$$.fragment,$),At=r($),Xe=m($,"P",{"data-svelte-h":!0}),u(Xe)!=="svelte-15wt48j"&&(Xe.textContent=Io),St=r($),Ee=m($,"P",{"data-svelte-h":!0}),u(Ee)!=="svelte-q1992o"&&(Ee.innerHTML=qo),Yt=r($),Ve=m($,"P",{"data-svelte-h":!0}),u(Ve)!=="svelte-10ugs3m"&&(Ve.innerHTML=Zo),Ot=r($),Qe=m($,"P",{"data-svelte-h":!0}),u(Qe)!=="svelte-1ymzemc"&&(Qe.innerHTML=Bo),Dt=r($),Ae=m($,"P",{"data-svelte-h":!0}),u(Ae)!=="svelte-hswkmf"&&(Ae.innerHTML=Ho),Kt=r($),z=m($,"DIV",{class:!0});var N=Z(z);f(je.$$.fragment,N),eo=r(N),Se=m(N,"P",{"data-svelte-h":!0}),u(Se)!=="svelte-i17e5a"&&(Se.innerHTML=Lo),to=r(N),f(oe.$$.fragment,N),oo=r(N),f(ne.$$.fragment,N),no=r(N),f(se.$$.fragment,N),N.forEach(s),$.forEach(s),$t=r(e),f(xe.$$.fragment,e),Ct=r(e),x=m(e,"DIV",{class:!0});var I=Z(x);f(Je.$$.fragment,I),so=r(I),Ye=m(I,"P",{"data-svelte-h":!0}),u(Ye)!=="svelte-9z7yxo"&&(Ye.textContent=Go),ao=r(I),Oe=m(I,"P",{"data-svelte-h":!0}),u(Oe)!=="svelte-1ymzemc"&&(Oe.innerHTML=Ro),ro=r(I),De=m(I,"P",{"data-svelte-h":!0}),u(De)!=="svelte-hswkmf"&&(De.innerHTML=Po),io=r(I),G=m(I,"DIV",{class:!0});var E=Z(G);f(ze.$$.fragment,E),lo=r(E),Ke=m(E,"P",{"data-svelte-h":!0}),u(Ke)!=="svelte-1fxeom4"&&(Ke.innerHTML=Xo),co=r(E),f(ae.$$.fragment,E),po=r(E),f(re.$$.fragment,E),E.forEach(s),I.forEach(s),jt=r(e),f(Fe.$$.fragment,e),xt=r(e),J=m(e,"DIV",{class:!0});var q=Z(J);f(Ue.$$.fragment,q),mo=r(q),et=m(q,"P",{"data-svelte-h":!0}),u(et)!=="svelte-n1oyui"&&(et.innerHTML=Eo),uo=r(q),tt=m(q,"P",{"data-svelte-h":!0}),u(tt)!=="svelte-1ymzemc"&&(tt.innerHTML=Vo),ho=r(q),ot=m(q,"P",{"data-svelte-h":!0}),u(ot)!=="svelte-hswkmf"&&(ot.innerHTML=Qo),fo=r(q),A=m(q,"DIV",{class:!0});var Y=Z(A);f(We.$$.fragment,Y),go=r(Y),nt=m(Y,"P",{"data-svelte-h":!0}),u(nt)!=="svelte-1pr97os"&&(nt.innerHTML=Ao),_o=r(Y),f(ie.$$.fragment,Y),Y.forEach(s),q.forEach(s),Jt=r(e),rt=m(e,"P",{}),Z(rt).forEach(s),this.h()},h(){B(t,"name","hf:doc:metadata"),B(t,"content",un),B(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,n){i(document.head,t),c(e,y,n),c(e,l,n),c(e,d,n),g(T,e,n),c(e,o,n),g(v,e,n),c(e,lt,n),c(e,le,n),c(e,dt,n),c(e,de,n),c(e,ct,n),c(e,ce,n),c(e,pt,n),c(e,pe,n),c(e,mt,n),c(e,me,n),c(e,ut,n),g(ue,e,n),c(e,ht,n),c(e,he,n),c(e,ft,n),g(fe,e,n),c(e,gt,n),c(e,ge,n),c(e,_t,n),g(_e,e,n),c(e,bt,n),c(e,F,n),g(be,F,null),i(F,Ft),i(F,Ne),i(F,Ut),i(F,Ie),i(F,Wt),g(O,F,null),c(e,Mt,n),g(Me,e,n),c(e,yt,n),c(e,C,n),g(ye,C,null),i(C,Nt),i(C,qe),i(C,It),i(C,Ze),i(C,qt),i(C,Be),i(C,Zt),i(C,H),g(Te,H,null),i(H,Bt),i(H,He),i(H,Ht),g(D,H,null),i(H,Lt),g(K,H,null),c(e,Tt,n),g(ve,e,n),c(e,vt,n),c(e,j,n),g(we,j,null),i(j,Gt),i(j,Le),i(j,Rt),i(j,Ge),i(j,Pt),i(j,Re),i(j,Xt),i(j,L),g(ke,L,null),i(L,Et),i(L,Pe),i(L,Vt),g(ee,L,null),i(L,Qt),g(te,L,null),c(e,wt,n),g($e,e,n),c(e,kt,n),c(e,k,n),g(Ce,k,null),i(k,At),i(k,Xe),i(k,St),i(k,Ee),i(k,Yt),i(k,Ve),i(k,Ot),i(k,Qe),i(k,Dt),i(k,Ae),i(k,Kt),i(k,z),g(je,z,null),i(z,eo),i(z,Se),i(z,to),g(oe,z,null),i(z,oo),g(ne,z,null),i(z,no),g(se,z,null),c(e,$t,n),g(xe,e,n),c(e,Ct,n),c(e,x,n),g(Je,x,null),i(x,so),i(x,Ye),i(x,ao),i(x,Oe),i(x,ro),i(x,De),i(x,io),i(x,G),g(ze,G,null),i(G,lo),i(G,Ke),i(G,co),g(ae,G,null),i(G,po),g(re,G,null),c(e,jt,n),g(Fe,e,n),c(e,xt,n),c(e,J,n),g(Ue,J,null),i(J,mo),i(J,et),i(J,uo),i(J,tt),i(J,ho),i(J,ot),i(J,fo),i(J,A),g(We,A,null),i(A,go),i(A,nt),i(A,_o),g(ie,A,null),c(e,Jt,n),c(e,rt,n),zt=!0},p(e,[n]){const R={};n&2&&(R.$$scope={dirty:n,ctx:e}),O.$set(R);const U={};n&2&&(U.$$scope={dirty:n,ctx:e}),D.$set(U);const P={};n&2&&(P.$$scope={dirty:n,ctx:e}),K.$set(P);const W={};n&2&&(W.$$scope={dirty:n,ctx:e}),ee.$set(W);const X={};n&2&&(X.$$scope={dirty:n,ctx:e}),te.$set(X);const $={};n&2&&($.$$scope={dirty:n,ctx:e}),oe.$set($);const N={};n&2&&(N.$$scope={dirty:n,ctx:e}),ne.$set(N);const I={};n&2&&(I.$$scope={dirty:n,ctx:e}),se.$set(I);const E={};n&2&&(E.$$scope={dirty:n,ctx:e}),ae.$set(E);const q={};n&2&&(q.$$scope={dirty:n,ctx:e}),re.$set(q);const Y={};n&2&&(Y.$$scope={dirty:n,ctx:e}),ie.$set(Y)},i(e){zt||(_(T.$$.fragment,e),_(v.$$.fragment,e),_(ue.$$.fragment,e),_(fe.$$.fragment,e),_(_e.$$.fragment,e),_(be.$$.fragment,e),_(O.$$.fragment,e),_(Me.$$.fragment,e),_(ye.$$.fragment,e),_(Te.$$.fragment,e),_(D.$$.fragment,e),_(K.$$.fragment,e),_(ve.$$.fragment,e),_(we.$$.fragment,e),_(ke.$$.fragment,e),_(ee.$$.fragment,e),_(te.$$.fragment,e),_($e.$$.fragment,e),_(Ce.$$.fragment,e),_(je.$$.fragment,e),_(oe.$$.fragment,e),_(ne.$$.fragment,e),_(se.$$.fragment,e),_(xe.$$.fragment,e),_(Je.$$.fragment,e),_(ze.$$.fragment,e),_(ae.$$.fragment,e),_(re.$$.fragment,e),_(Fe.$$.fragment,e),_(Ue.$$.fragment,e),_(We.$$.fragment,e),_(ie.$$.fragment,e),zt=!0)},o(e){b(T.$$.fragment,e),b(v.$$.fragment,e),b(ue.$$.fragment,e),b(fe.$$.fragment,e),b(_e.$$.fragment,e),b(be.$$.fragment,e),b(O.$$.fragment,e),b(Me.$$.fragment,e),b(ye.$$.fragment,e),b(Te.$$.fragment,e),b(D.$$.fragment,e),b(K.$$.fragment,e),b(ve.$$.fragment,e),b(we.$$.fragment,e),b(ke.$$.fragment,e),b(ee.$$.fragment,e),b(te.$$.fragment,e),b($e.$$.fragment,e),b(Ce.$$.fragment,e),b(je.$$.fragment,e),b(oe.$$.fragment,e),b(ne.$$.fragment,e),b(se.$$.fragment,e),b(xe.$$.fragment,e),b(Je.$$.fragment,e),b(ze.$$.fragment,e),b(ae.$$.fragment,e),b(re.$$.fragment,e),b(Fe.$$.fragment,e),b(Ue.$$.fragment,e),b(We.$$.fragment,e),b(ie.$$.fragment,e),zt=!1},d(e){e&&(s(y),s(l),s(d),s(o),s(lt),s(le),s(dt),s(de),s(ct),s(ce),s(pt),s(pe),s(mt),s(me),s(ut),s(ht),s(he),s(ft),s(gt),s(ge),s(_t),s(bt),s(F),s(Mt),s(yt),s(C),s(Tt),s(vt),s(j),s(wt),s(kt),s(k),s($t),s(Ct),s(x),s(jt),s(xt),s(J),s(Jt),s(rt)),s(t),M(T,e),M(v,e),M(ue,e),M(fe,e),M(_e,e),M(be),M(O),M(Me,e),M(ye),M(Te),M(D),M(K),M(ve,e),M(we),M(ke),M(ee),M(te),M($e,e),M(Ce),M(je),M(oe),M(ne),M(se),M(xe,e),M(Je),M(ze),M(ae),M(re),M(Fe,e),M(Ue),M(We),M(ie)}}}const un='{"title":"MPT","local":"mpt","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"MptConfig","local":"transformers.MptConfig","sections":[],"depth":2},{"title":"MptModel","local":"transformers.MptModel","sections":[],"depth":2},{"title":"MptForCausalLM","local":"transformers.MptForCausalLM","sections":[],"depth":2},{"title":"MptForSequenceClassification","local":"transformers.MptForSequenceClassification","sections":[],"depth":2},{"title":"MptForTokenClassification","local":"transformers.MptForTokenClassification","sections":[],"depth":2},{"title":"MptForQuestionAnswering","local":"transformers.MptForQuestionAnswering","sections":[],"depth":2}],"depth":1}';function hn(w){return Yo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class vn extends Oo{constructor(t){super(),Do(this,t,hn,mn,So,{})}}export{vn as component};
