import{s as Po,o as Ao,n as X}from"../chunks/scheduler.9bc65507.js";import{S as Yo,i as Oo,g as d,s,r as u,A as Do,h as c,f as i,c as r,j as v,u as f,x as h,k as $,y as n,a as p,v as g,d as _,t as M,w as b}from"../chunks/index.707bf1b6.js";import{T as Ut}from"../chunks/Tip.c2ecdbf4.js";import{D as E}from"../chunks/Docstring.17db21ae.js";import{C as Wt}from"../chunks/CodeBlock.54a9f38d.js";import{E as It}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as S}from"../chunks/Heading.342b1fa6.js";function Ko(w){let t,T=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=d("p"),t.innerHTML=T},l(l){t=c(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-fincs2"&&(t.innerHTML=T)},m(l,m){p(l,t,m)},p:X,d(l){l&&i(t)}}}function es(w){let t,T="Example:",l,m,y;return m=new Wt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBFcm5pZU1Nb2RlbCUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyc3VzbmF0byUyRmVybmllLW0tYmFzZV9weXRvcmNoJTIyKSUwQW1vZGVsJTIwJTNEJTIwRXJuaWVNTW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMnN1c25hdG8lMkZlcm5pZS1tLWJhc2VfcHl0b3JjaCUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQWxhc3RfaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, ErnieMModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;susnato/ernie-m-base_pytorch&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ErnieMModel.from_pretrained(<span class="hljs-string">&quot;susnato/ernie-m-base_pytorch&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){t=d("p"),t.textContent=T,l=s(),u(m.$$.fragment)},l(o){t=c(o,"P",{"data-svelte-h":!0}),h(t)!=="svelte-11lpom8"&&(t.textContent=T),l=r(o),f(m.$$.fragment,o)},m(o,k){p(o,t,k),p(o,l,k),g(m,o,k),y=!0},p:X,i(o){y||(_(m.$$.fragment,o),y=!0)},o(o){M(m.$$.fragment,o),y=!1},d(o){o&&(i(t),i(l)),b(m,o)}}}function ts(w){let t,T=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=d("p"),t.innerHTML=T},l(l){t=c(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-fincs2"&&(t.innerHTML=T)},m(l,m){p(l,t,m)},p:X,d(l){l&&i(t)}}}function ns(w){let t,T="Example of single-label classification:",l,m,y;return m=new Wt({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEVybmllTUZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJzdXNuYXRvJTJGZXJuaWUtbS1iYXNlX3B5dG9yY2glMjIpJTBBbW9kZWwlMjAlM0QlMjBFcm5pZU1Gb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJzdXNuYXRvJTJGZXJuaWUtbS1iYXNlX3B5dG9yY2glMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX2NsYXNzX2lkJTIwJTNEJTIwbG9naXRzLmFyZ21heCgpLml0ZW0oKSUwQSUwQSUyMyUyMFRvJTIwdHJhaW4lMjBhJTIwbW9kZWwlMjBvbiUyMCU2MG51bV9sYWJlbHMlNjAlMjBjbGFzc2VzJTJDJTIweW91JTIwY2FuJTIwcGFzcyUyMCU2MG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTYwJTIwdG8lMjAlNjAuZnJvbV9wcmV0cmFpbmVkKC4uLiklNjAlMEFudW1fbGFiZWxzJTIwJTNEJTIwbGVuKG1vZGVsLmNvbmZpZy5pZDJsYWJlbCklMEFtb2RlbCUyMCUzRCUyMEVybmllTUZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMnN1c25hdG8lMkZlcm5pZS1tLWJhc2VfcHl0b3JjaCUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzKSUwQSUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxJTVEKSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, ErnieMForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;susnato/ernie-m-base_pytorch&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ErnieMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;susnato/ernie-m-base_pytorch&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ErnieMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;susnato/ernie-m-base_pytorch&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){t=d("p"),t.textContent=T,l=s(),u(m.$$.fragment)},l(o){t=c(o,"P",{"data-svelte-h":!0}),h(t)!=="svelte-ykxpe4"&&(t.textContent=T),l=r(o),f(m.$$.fragment,o)},m(o,k){p(o,t,k),p(o,l,k),g(m,o,k),y=!0},p:X,i(o){y||(_(m.$$.fragment,o),y=!0)},o(o){M(m.$$.fragment,o),y=!1},d(o){o&&(i(t),i(l)),b(m,o)}}}function os(w){let t,T="Example of multi-label classification:",l,m,y;return m=new Wt({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEVybmllTUZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJzdXNuYXRvJTJGZXJuaWUtbS1iYXNlX3B5dG9yY2glMjIpJTBBbW9kZWwlMjAlM0QlMjBFcm5pZU1Gb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJzdXNuYXRvJTJGZXJuaWUtbS1iYXNlX3B5dG9yY2glMjIlMkMlMjBwcm9ibGVtX3R5cGUlM0QlMjJtdWx0aV9sYWJlbF9jbGFzc2lmaWNhdGlvbiUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEFwcmVkaWN0ZWRfY2xhc3NfaWRzJTIwJTNEJTIwdG9yY2guYXJhbmdlKDAlMkMlMjBsb2dpdHMuc2hhcGUlNUItMSU1RCklNUJ0b3JjaC5zaWdtb2lkKGxvZ2l0cykuc3F1ZWV6ZShkaW0lM0QwKSUyMCUzRSUyMDAuNSU1RCUwQSUwQSUyMyUyMFRvJTIwdHJhaW4lMjBhJTIwbW9kZWwlMjBvbiUyMCU2MG51bV9sYWJlbHMlNjAlMjBjbGFzc2VzJTJDJTIweW91JTIwY2FuJTIwcGFzcyUyMCU2MG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTYwJTIwdG8lMjAlNjAuZnJvbV9wcmV0cmFpbmVkKC4uLiklNjAlMEFudW1fbGFiZWxzJTIwJTNEJTIwbGVuKG1vZGVsLmNvbmZpZy5pZDJsYWJlbCklMEFtb2RlbCUyMCUzRCUyMEVybmllTUZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUwQSUyMCUyMCUyMCUyMCUyMnN1c25hdG8lMkZlcm5pZS1tLWJhc2VfcHl0b3JjaCUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIlMEEpJTBBJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2guc3VtKCUwQSUyMCUyMCUyMCUyMHRvcmNoLm5uLmZ1bmN0aW9uYWwub25lX2hvdChwcmVkaWN0ZWRfY2xhc3NfaWRzJTVCTm9uZSUyQyUyMCUzQSU1RC5jbG9uZSgpJTJDJTIwbnVtX2NsYXNzZXMlM0RudW1fbGFiZWxzKSUyQyUyMGRpbSUzRDElMEEpLnRvKHRvcmNoLmZsb2F0KSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, ErnieMForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;susnato/ernie-m-base_pytorch&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ErnieMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;susnato/ernie-m-base_pytorch&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.arange(<span class="hljs-number">0</span>, logits.shape[-<span class="hljs-number">1</span>])[torch.sigmoid(logits).squeeze(dim=<span class="hljs-number">0</span>) &gt; <span class="hljs-number">0.5</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ErnieMForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;susnato/ernie-m-base_pytorch&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.<span class="hljs-built_in">sum</span>(
<span class="hljs-meta">... </span>    torch.nn.functional.one_hot(predicted_class_ids[<span class="hljs-literal">None</span>, :].clone(), num_classes=num_labels), dim=<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>).to(torch.<span class="hljs-built_in">float</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){t=d("p"),t.textContent=T,l=s(),u(m.$$.fragment)},l(o){t=c(o,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1l8e32d"&&(t.textContent=T),l=r(o),f(m.$$.fragment,o)},m(o,k){p(o,t,k),p(o,l,k),g(m,o,k),y=!0},p:X,i(o){y||(_(m.$$.fragment,o),y=!0)},o(o){M(m.$$.fragment,o),y=!1},d(o){o&&(i(t),i(l)),b(m,o)}}}function ss(w){let t,T=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=d("p"),t.innerHTML=T},l(l){t=c(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-fincs2"&&(t.innerHTML=T)},m(l,m){p(l,t,m)},p:X,d(l){l&&i(t)}}}function rs(w){let t,T="Example:",l,m,y;return m=new Wt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBFcm5pZU1Gb3JNdWx0aXBsZUNob2ljZSUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyc3VzbmF0byUyRmVybmllLW0tYmFzZV9weXRvcmNoJTIyKSUwQW1vZGVsJTIwJTNEJTIwRXJuaWVNRm9yTXVsdGlwbGVDaG9pY2UuZnJvbV9wcmV0cmFpbmVkKCUyMnN1c25hdG8lMkZlcm5pZS1tLWJhc2VfcHl0b3JjaCUyMiklMEElMEFwcm9tcHQlMjAlM0QlMjAlMjJJbiUyMEl0YWx5JTJDJTIwcGl6emElMjBzZXJ2ZWQlMjBpbiUyMGZvcm1hbCUyMHNldHRpbmdzJTJDJTIwc3VjaCUyMGFzJTIwYXQlMjBhJTIwcmVzdGF1cmFudCUyQyUyMGlzJTIwcHJlc2VudGVkJTIwdW5zbGljZWQuJTIyJTBBY2hvaWNlMCUyMCUzRCUyMCUyMkl0JTIwaXMlMjBlYXRlbiUyMHdpdGglMjBhJTIwZm9yayUyMGFuZCUyMGElMjBrbmlmZS4lMjIlMEFjaG9pY2UxJTIwJTNEJTIwJTIySXQlMjBpcyUyMGVhdGVuJTIwd2hpbGUlMjBoZWxkJTIwaW4lMjB0aGUlMjBoYW5kLiUyMiUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvcigwKS51bnNxdWVlemUoMCklMjAlMjAlMjMlMjBjaG9pY2UwJTIwaXMlMjBjb3JyZWN0JTIwKGFjY29yZGluZyUyMHRvJTIwV2lraXBlZGlhJTIwJTNCKSklMkMlMjBiYXRjaCUyMHNpemUlMjAxJTBBJTBBZW5jb2RpbmclMjAlM0QlMjB0b2tlbml6ZXIoJTVCcHJvbXB0JTJDJTIwcHJvbXB0JTVEJTJDJTIwJTVCY2hvaWNlMCUyQyUyMGNob2ljZTElNUQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTJDJTIwcGFkZGluZyUzRFRydWUpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqJTdCayUzQSUyMHYudW5zcXVlZXplKDApJTIwZm9yJTIwayUyQyUyMHYlMjBpbiUyMGVuY29kaW5nLml0ZW1zKCklN0QlMkMlMjBsYWJlbHMlM0RsYWJlbHMpJTIwJTIwJTIzJTIwYmF0Y2glMjBzaXplJTIwaXMlMjAxJTBBJTBBJTIzJTIwdGhlJTIwbGluZWFyJTIwY2xhc3NpZmllciUyMHN0aWxsJTIwbmVlZHMlMjB0byUyMGJlJTIwdHJhaW5lZCUwQWxvc3MlMjAlM0QlMjBvdXRwdXRzLmxvc3MlMEFsb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, ErnieMForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;susnato/ernie-m-base_pytorch&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ErnieMForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;susnato/ernie-m-base_pytorch&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){t=d("p"),t.textContent=T,l=s(),u(m.$$.fragment)},l(o){t=c(o,"P",{"data-svelte-h":!0}),h(t)!=="svelte-11lpom8"&&(t.textContent=T),l=r(o),f(m.$$.fragment,o)},m(o,k){p(o,t,k),p(o,l,k),g(m,o,k),y=!0},p:X,i(o){y||(_(m.$$.fragment,o),y=!0)},o(o){M(m.$$.fragment,o),y=!1},d(o){o&&(i(t),i(l)),b(m,o)}}}function as(w){let t,T=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=d("p"),t.innerHTML=T},l(l){t=c(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-fincs2"&&(t.innerHTML=T)},m(l,m){p(l,t,m)},p:X,d(l){l&&i(t)}}}function is(w){let t,T="Example:",l,m,y;return m=new Wt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBFcm5pZU1Gb3JUb2tlbkNsYXNzaWZpY2F0aW9uJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJzdXNuYXRvJTJGZXJuaWUtbS1iYXNlX3B5dG9yY2glMjIpJTBBbW9kZWwlMjAlM0QlMjBFcm5pZU1Gb3JUb2tlbkNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJzdXNuYXRvJTJGZXJuaWUtbS1iYXNlX3B5dG9yY2glMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUwQSUyMCUyMCUyMCUyMCUyMkh1Z2dpbmdGYWNlJTIwaXMlMjBhJTIwY29tcGFueSUyMGJhc2VkJTIwaW4lMjBQYXJpcyUyMGFuZCUyME5ldyUyMFlvcmslMjIlMkMlMjBhZGRfc3BlY2lhbF90b2tlbnMlM0RGYWxzZSUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIlMEEpJTBBJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEFwcmVkaWN0ZWRfdG9rZW5fY2xhc3NfaWRzJTIwJTNEJTIwbG9naXRzLmFyZ21heCgtMSklMEElMEElMjMlMjBOb3RlJTIwdGhhdCUyMHRva2VucyUyMGFyZSUyMGNsYXNzaWZpZWQlMjByYXRoZXIlMjB0aGVuJTIwaW5wdXQlMjB3b3JkcyUyMHdoaWNoJTIwbWVhbnMlMjB0aGF0JTBBJTIzJTIwdGhlcmUlMjBtaWdodCUyMGJlJTIwbW9yZSUyMHByZWRpY3RlZCUyMHRva2VuJTIwY2xhc3NlcyUyMHRoYW4lMjB3b3Jkcy4lMEElMjMlMjBNdWx0aXBsZSUyMHRva2VuJTIwY2xhc3NlcyUyMG1pZ2h0JTIwYWNjb3VudCUyMGZvciUyMHRoZSUyMHNhbWUlMjB3b3JkJTBBcHJlZGljdGVkX3Rva2Vuc19jbGFzc2VzJTIwJTNEJTIwJTVCbW9kZWwuY29uZmlnLmlkMmxhYmVsJTVCdC5pdGVtKCklNUQlMjBmb3IlMjB0JTIwaW4lMjBwcmVkaWN0ZWRfdG9rZW5fY2xhc3NfaWRzJTVCMCU1RCU1RCUwQSUwQWxhYmVscyUyMCUzRCUyMHByZWRpY3RlZF90b2tlbl9jbGFzc19pZHMlMEFsb3NzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMlMkMlMjBsYWJlbHMlM0RsYWJlbHMpLmxvc3M=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, ErnieMForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;susnato/ernie-m-base_pytorch&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ErnieMForTokenClassification.from_pretrained(<span class="hljs-string">&quot;susnato/ernie-m-base_pytorch&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){t=d("p"),t.textContent=T,l=s(),u(m.$$.fragment)},l(o){t=c(o,"P",{"data-svelte-h":!0}),h(t)!=="svelte-11lpom8"&&(t.textContent=T),l=r(o),f(m.$$.fragment,o)},m(o,k){p(o,t,k),p(o,l,k),g(m,o,k),y=!0},p:X,i(o){y||(_(m.$$.fragment,o),y=!0)},o(o){M(m.$$.fragment,o),y=!1},d(o){o&&(i(t),i(l)),b(m,o)}}}function ls(w){let t,T=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=d("p"),t.innerHTML=T},l(l){t=c(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-fincs2"&&(t.innerHTML=T)},m(l,m){p(l,t,m)},p:X,d(l){l&&i(t)}}}function ds(w){let t,T="Example:",l,m,y;return m=new Wt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBFcm5pZU1Gb3JRdWVzdGlvbkFuc3dlcmluZyUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyc3VzbmF0byUyRmVybmllLW0tYmFzZV9weXRvcmNoJTIyKSUwQW1vZGVsJTIwJTNEJTIwRXJuaWVNRm9yUXVlc3Rpb25BbnN3ZXJpbmcuZnJvbV9wcmV0cmFpbmVkKCUyMnN1c25hdG8lMkZlcm5pZS1tLWJhc2VfcHl0b3JjaCUyMiklMEElMEFxdWVzdGlvbiUyQyUyMHRleHQlMjAlM0QlMjAlMjJXaG8lMjB3YXMlMjBKaW0lMjBIZW5zb24lM0YlMjIlMkMlMjAlMjJKaW0lMjBIZW5zb24lMjB3YXMlMjBhJTIwbmljZSUyMHB1cHBldCUyMiUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplcihxdWVzdGlvbiUyQyUyMHRleHQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBYW5zd2VyX3N0YXJ0X2luZGV4JTIwJTNEJTIwb3V0cHV0cy5zdGFydF9sb2dpdHMuYXJnbWF4KCklMEFhbnN3ZXJfZW5kX2luZGV4JTIwJTNEJTIwb3V0cHV0cy5lbmRfbG9naXRzLmFyZ21heCgpJTBBJTBBcHJlZGljdF9hbnN3ZXJfdG9rZW5zJTIwJTNEJTIwaW5wdXRzLmlucHV0X2lkcyU1QjAlMkMlMjBhbnN3ZXJfc3RhcnRfaW5kZXglMjAlM0ElMjBhbnN3ZXJfZW5kX2luZGV4JTIwJTJCJTIwMSU1RCUwQSUwQSUyMyUyMHRhcmdldCUyMGlzJTIwJTIybmljZSUyMHB1cHBldCUyMiUwQXRhcmdldF9zdGFydF9pbmRleCUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxNCU1RCklMEF0YXJnZXRfZW5kX2luZGV4JTIwJTNEJTIwdG9yY2gudGVuc29yKCU1QjE1JTVEKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMHN0YXJ0X3Bvc2l0aW9ucyUzRHRhcmdldF9zdGFydF9pbmRleCUyQyUyMGVuZF9wb3NpdGlvbnMlM0R0YXJnZXRfZW5kX2luZGV4KSUwQWxvc3MlMjAlM0QlMjBvdXRwdXRzLmxvc3M=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, ErnieMForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;susnato/ernie-m-base_pytorch&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ErnieMForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;susnato/ernie-m-base_pytorch&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`,wrap:!1}}),{c(){t=d("p"),t.textContent=T,l=s(),u(m.$$.fragment)},l(o){t=c(o,"P",{"data-svelte-h":!0}),h(t)!=="svelte-11lpom8"&&(t.textContent=T),l=r(o),f(m.$$.fragment,o)},m(o,k){p(o,t,k),p(o,l,k),g(m,o,k),y=!0},p:X,i(o){y||(_(m.$$.fragment,o),y=!0)},o(o){M(m.$$.fragment,o),y=!1},d(o){o&&(i(t),i(l)),b(m,o)}}}function cs(w){let t,T=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=d("p"),t.innerHTML=T},l(l){t=c(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-fincs2"&&(t.innerHTML=T)},m(l,m){p(l,t,m)},p:X,d(l){l&&i(t)}}}function ms(w){let t,T,l,m,y,o,k,Nt,Me,mo=`The ErnieM model was proposed in <a href="https://arxiv.org/abs/2012.15674" rel="nofollow">ERNIE-M: Enhanced Multilingual Representation by Aligning
Cross-lingual Semantics with Monolingual Corpora</a>  by Xuan Ouyang, Shuohuan Wang, Chao Pang, Yu Sun,
Hao Tian, Hua Wu, Haifeng Wang.`,Ht,be,po="The abstract from the paper is the following:",Gt,Te,ho=`<em>Recent studies have demonstrated that pre-trained cross-lingual models achieve impressive performance in downstream cross-lingual tasks. This improvement benefits from learning a large amount of monolingual and parallel corpora. Although it is generally acknowledged that parallel corpora are critical for improving the model performance, existing methods are often constrained by the size of parallel corpora, especially for lowresource languages. In this paper, we propose ERNIE-M, a new training method that encourages the model to align the representation of multiple languages with monolingual corpora, to overcome the constraint that the parallel corpus size places on the model performance. Our key insight is to integrate back-translation into the pre-training process. We generate pseudo-parallel sentence pairs on a monolingual corpus to enable the learning of semantic alignments between different languages, thereby enhancing the semantic modeling of cross-lingual models. Experimental results show that ERNIE-M outperforms existing cross-lingual models and delivers new state-of-the-art results in various cross-lingual downstream tasks.</em>
This model was contributed by <a href="https://huggingface.co/susnato" rel="nofollow">Susnato Dhar</a>. The original code can be found <a href="https://github.com/PaddlePaddle/PaddleNLP/tree/develop/paddlenlp/transformers/ernie_m" rel="nofollow">here</a>.`,Vt,ye,Bt,ke,uo="<li>Ernie-M is a BERT-like model so it is a stacked Transformer Encoder.</li> <li>Instead of using MaskedLM for pretraining (like BERT) the authors used two novel techniques: <code>Cross-attention Masked Language Modeling</code> and <code>Back-translation Masked Language Modeling</code>. For now these two LMHead objectives are not implemented here.</li> <li>It is a multilingual language model.</li> <li>Next Sentence Prediction was not used in pretraining process.</li>",Lt,we,Rt,ve,fo='<li><a href="../tasks/sequence_classification">Text classification task guide</a></li> <li><a href="../tasks/token_classification">Token classification task guide</a></li> <li><a href="../tasks/question_answering">Question answering task guide</a></li> <li><a href="../tasks/multiple_choice">Multiple choice task guide</a></li>',St,$e,Xt,Z,Ee,cn,Ke,go=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/ernie_m#transformers.ErnieMModel">ErnieMModel</a>. It is used to instantiate a
Ernie-M model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the <code>Ernie-M</code> <a href="https://huggingface.co/susnato/ernie-m-base_pytorch" rel="nofollow">susnato/ernie-m-base_pytorch</a> architecture.`,mn,et,_o=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,pn,tt,Mo=`A normal_initializer initializes weight matrices as normal distributions. See
<code>ErnieMPretrainedModel._init_weights()</code> for how weights are initialized in <code>ErnieMModel</code>.`,Qt,Ce,Pt,C,xe,hn,nt,bo="Constructs a Ernie-M tokenizer. It uses the <code>sentencepiece</code> tools to cut the words to sub-words.",un,Y,Je,fn,ot,To=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An ErnieM sequence has the following format:`,gn,st,yo="<li>single sequence: <code>[CLS] X [SEP]</code></li> <li>pair of sequences: <code>[CLS] A [SEP] [SEP] B [SEP]</code></li>",_n,ne,je,Mn,rt,ko=`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer <code>encode</code> method.`,bn,oe,ze,Tn,at,wo=`Create the token type IDs corresponding to the sequences passed. <a href="../glossary#token-type-ids">What are token type
IDs?</a> Should be overridden in a subclass if the model has a special way of
building: those.`,yn,it,Fe,At,Ue,Yt,x,Ie,kn,lt,vo="The bare ErnieM Model transformer outputting raw hidden-states without any specific head on top.",wn,dt,$o=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,vn,ct,Eo=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,$n,V,We,En,mt,Co='The <a href="/docs/transformers/main/en/model_doc/ernie_m#transformers.ErnieMModel">ErnieMModel</a> forward method, overrides the <code>__call__</code> special method.',Cn,se,xn,re,Ot,Ze,Dt,J,qe,Jn,pt,xo=`ErnieM Model transformer with a sequence classification/regression head on top (a linear layer on top of
the pooled output) e.g. for GLUE tasks.`,jn,ht,Jo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,zn,ut,jo=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,Fn,W,Ne,Un,ft,zo='The <a href="/docs/transformers/main/en/model_doc/ernie_m#transformers.ErnieMForSequenceClassification">ErnieMForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',In,ae,Wn,ie,Zn,le,Kt,He,en,j,Ge,qn,gt,Fo=`ErnieM Model with a multiple choice classification head on top (a linear layer on top of
the pooled output and a softmax) e.g. for RocStories/SWAG tasks.`,Nn,_t,Uo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Hn,Mt,Io=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,Gn,B,Ve,Vn,bt,Wo='The <a href="/docs/transformers/main/en/model_doc/ernie_m#transformers.ErnieMForMultipleChoice">ErnieMForMultipleChoice</a> forward method, overrides the <code>__call__</code> special method.',Bn,de,Ln,ce,tn,Be,nn,z,Le,Rn,Tt,Zo=`ErnieM Model with a token classification head on top (a linear layer on top of
the hidden-states output) e.g. for Named-Entity-Recognition (NER) tasks.`,Sn,yt,qo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Xn,kt,No=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,Qn,L,Re,Pn,wt,Ho='The <a href="/docs/transformers/main/en/model_doc/ernie_m#transformers.ErnieMForTokenClassification">ErnieMForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',An,me,Yn,pe,on,Se,sn,F,Xe,On,vt,Go=`ErnieM Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,Dn,$t,Vo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Kn,Et,Bo=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,eo,R,Qe,to,Ct,Lo='The <a href="/docs/transformers/main/en/model_doc/ernie_m#transformers.ErnieMForQuestionAnswering">ErnieMForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',no,he,oo,ue,rn,Pe,an,U,Ae,so,xt,Ro=`ErnieMForInformationExtraction is a Ernie-M Model with two linear layer on top of the hidden-states output to
compute <code>start_prob</code> and <code>end_prob</code>, designed for Universal Information Extraction.`,ro,Jt,So=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,ao,jt,Xo=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,io,O,Ye,lo,zt,Qo='The <a href="/docs/transformers/main/en/model_doc/ernie_m#transformers.ErnieMForInformationExtraction">ErnieMForInformationExtraction</a> forward method, overrides the <code>__call__</code> special method.',co,fe,ln,Zt,dn;return y=new S({props:{title:"ErnieM",local:"erniem",headingTag:"h1"}}),k=new S({props:{title:"Overview",local:"overview",headingTag:"h2"}}),ye=new S({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),we=new S({props:{title:"Resources",local:"resources",headingTag:"h2"}}),$e=new S({props:{title:"ErnieMConfig",local:"transformers.ErnieMConfig",headingTag:"h2"}}),Ee=new E({props:{name:"class transformers.ErnieMConfig",anchor:"transformers.ErnieMConfig",parameters:[{name:"vocab_size",val:": int = 250002"},{name:"hidden_size",val:": int = 768"},{name:"num_hidden_layers",val:": int = 12"},{name:"num_attention_heads",val:": int = 12"},{name:"intermediate_size",val:": int = 3072"},{name:"hidden_act",val:": str = 'gelu'"},{name:"hidden_dropout_prob",val:": float = 0.1"},{name:"attention_probs_dropout_prob",val:": float = 0.1"},{name:"max_position_embeddings",val:": int = 514"},{name:"initializer_range",val:": float = 0.02"},{name:"pad_token_id",val:": int = 1"},{name:"layer_norm_eps",val:": float = 1e-05"},{name:"classifier_dropout",val:" = None"},{name:"act_dropout",val:" = 0.0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ErnieMConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 250002) &#x2014;
Vocabulary size of <code>inputs_ids</code> in <a href="/docs/transformers/main/en/model_doc/ernie_m#transformers.ErnieMModel">ErnieMModel</a>. Also is the vocab size of token embedding matrix.
Defines the number of different tokens that can be represented by the <code>inputs_ids</code> passed when calling
<a href="/docs/transformers/main/en/model_doc/ernie_m#transformers.ErnieMModel">ErnieMModel</a>.`,name:"vocab_size"},{anchor:"transformers.ErnieMConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the embedding layer, encoder layers and pooler layer.`,name:"hidden_size"},{anchor:"transformers.ErnieMConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.ErnieMConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.ErnieMConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the feed-forward (ff) layer in the encoder. Input tensors to feed-forward layers are
firstly projected from hidden_size to intermediate_size, and then projected back to hidden_size. Typically
intermediate_size is larger than hidden_size.`,name:"intermediate_size"},{anchor:"transformers.ErnieMConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function in the feed-forward layer. <code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code> and any other torch
supported activation functions are supported.`,name:"hidden_act"},{anchor:"transformers.ErnieMConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings and encoder.`,name:"hidden_dropout_prob"},{anchor:"transformers.ErnieMConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability used in <code>MultiHeadAttention</code> in all encoder layers to drop some attention target.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.ErnieMConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 514) &#x2014;
The maximum value of the dimensionality of position encoding, which dictates the maximum supported length
of an input sequence.`,name:"max_position_embeddings"},{anchor:"transformers.ErnieMConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the normal initializer for initializing all weight matrices. The index of padding
token in the token vocabulary.`,name:"initializer_range"},{anchor:"transformers.ErnieMConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Padding token id.`,name:"pad_token_id"},{anchor:"transformers.ErnieMConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-05) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.ErnieMConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"},{anchor:"transformers.ErnieMConfig.act_dropout",description:`<strong>act_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
This dropout probability is used in <code>ErnieMEncoderLayer</code> after activation.`,name:"act_dropout"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie_m/configuration_ernie_m.py#L31"}}),Ce=new S({props:{title:"ErnieMTokenizer",local:"transformers.ErnieMTokenizer",headingTag:"h2"}}),xe=new E({props:{name:"class transformers.ErnieMTokenizer",anchor:"transformers.ErnieMTokenizer",parameters:[{name:"sentencepiece_model_ckpt",val:""},{name:"vocab_file",val:" = None"},{name:"do_lower_case",val:" = False"},{name:"encoding",val:" = 'utf8'"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ErnieMTokenizer.sentencepiece_model_file",description:`<strong>sentencepiece_model_file</strong> (<code>str</code>) &#x2014;
The file path of sentencepiece model.`,name:"sentencepiece_model_file"},{anchor:"transformers.ErnieMTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The file path of the vocabulary.`,name:"vocab_file"},{anchor:"transformers.ErnieMTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>str</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.ErnieMTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
A special token representing the <code>unknown (out-of-vocabulary)</code> token. An unknown token is set to be
<code>unk_token</code> inorder to be converted to an ID.`,name:"unk_token"},{anchor:"transformers.ErnieMTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
A special token separating two different sentences in the same input.`,name:"sep_token"},{anchor:"transformers.ErnieMTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
A special token used to make arrays of tokens the same size for batching purposes.`,name:"pad_token"},{anchor:"transformers.ErnieMTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
A special token used for sequence classification. It is the last token of the sequence when built with
special tokens.`,name:"cls_token"},{anchor:"transformers.ErnieMTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
A special token representing a masked token. This is the token used in the masked language modeling task
which the model tries to predict the original unmasked ones.`,name:"mask_token"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie_m/tokenization_ernie_m.py#L62"}}),Je=new E({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.ErnieMTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.ErnieMTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.ErnieMTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie_m/tokenization_ernie_m.py#L264",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of input_id with the appropriate special tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),je=new E({props:{name:"get_special_tokens_mask",anchor:"transformers.ErnieMTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"},{name:"already_has_special_tokens",val:" = False"}],parametersDescription:[{anchor:"transformers.ErnieMTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids of the first sequence.`,name:"token_ids_0"},{anchor:"transformers.ErnieMTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.ErnieMTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>str</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie_m/tokenization_ernie_m.py#L307",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),ze=new E({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.ErnieMTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.ErnieMTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
The first tokenized sequence.`,name:"token_ids_0"},{anchor:"transformers.ErnieMTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
The second tokenized sequence.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie_m/tokenization_ernie_m.py#L336",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The token type ids.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Fe=new E({props:{name:"save_vocabulary",anchor:"transformers.ErnieMTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie_m/tokenization_ernie_m.py#L405"}}),Ue=new S({props:{title:"ErnieMModel",local:"transformers.ErnieMModel",headingTag:"h2"}}),Ie=new E({props:{name:"class transformers.ErnieMModel",anchor:"transformers.ErnieMModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.ErnieMModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ernie_m#transformers.ErnieMConfig">ErnieMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie_m/modeling_ernie_m.py#L490"}}),We=new E({props:{name:"forward",anchor:"transformers.ErnieMModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.ErnieMModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/ernie_m#transformers.ErnieMTokenizer">ErnieMTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ErnieMModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ErnieMModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ErnieMModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ErnieMModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ErnieMModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ErnieMModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ErnieMModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie_m/modeling_ernie_m.py#L517",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/ernie_m#transformers.ErnieMConfig"
>ErnieMConfig</a>) and inputs.</p>
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
`}}),se=new Ut({props:{$$slots:{default:[Ko]},$$scope:{ctx:w}}}),re=new It({props:{anchor:"transformers.ErnieMModel.forward.example",$$slots:{default:[es]},$$scope:{ctx:w}}}),Ze=new S({props:{title:"ErnieMForSequenceClassification",local:"transformers.ErnieMForSequenceClassification",headingTag:"h2"}}),qe=new E({props:{name:"class transformers.ErnieMForSequenceClassification",anchor:"transformers.ErnieMForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ErnieMForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ernie_m#transformers.ErnieMConfig">ErnieMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie_m/modeling_ernie_m.py#L603"}}),Ne=new E({props:{name:"forward",anchor:"transformers.ErnieMForSequenceClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"return_dict",val:": Optional = True"},{name:"labels",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.ErnieMForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/ernie_m#transformers.ErnieMTokenizer">ErnieMTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ErnieMForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ErnieMForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ErnieMForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ErnieMForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ErnieMForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ErnieMForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ErnieMForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ErnieMForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie_m/modeling_ernie_m.py#L625",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/ernie_m#transformers.ErnieMConfig"
>ErnieMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) — Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ae=new Ut({props:{$$slots:{default:[ts]},$$scope:{ctx:w}}}),ie=new It({props:{anchor:"transformers.ErnieMForSequenceClassification.forward.example",$$slots:{default:[ns]},$$scope:{ctx:w}}}),le=new It({props:{anchor:"transformers.ErnieMForSequenceClassification.forward.example-2",$$slots:{default:[os]},$$scope:{ctx:w}}}),He=new S({props:{title:"ErnieMForMultipleChoice",local:"transformers.ErnieMForMultipleChoice",headingTag:"h2"}}),Ge=new E({props:{name:"class transformers.ErnieMForMultipleChoice",anchor:"transformers.ErnieMForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ErnieMForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ernie_m#transformers.ErnieMConfig">ErnieMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie_m/modeling_ernie_m.py#L705"}}),Ve=new E({props:{name:"forward",anchor:"transformers.ErnieMForMultipleChoice.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = True"}],parametersDescription:[{anchor:"transformers.ErnieMForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/ernie_m#transformers.ErnieMTokenizer">ErnieMTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ErnieMForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ErnieMForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ErnieMForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ErnieMForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ErnieMForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ErnieMForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ErnieMForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ErnieMForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie_m/modeling_ernie_m.py#L725",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/ernie_m#transformers.ErnieMConfig"
>ErnieMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) — Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) — <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),de=new Ut({props:{$$slots:{default:[ss]},$$scope:{ctx:w}}}),ce=new It({props:{anchor:"transformers.ErnieMForMultipleChoice.forward.example",$$slots:{default:[rs]},$$scope:{ctx:w}}}),Be=new S({props:{title:"ErnieMForTokenClassification",local:"transformers.ErnieMForTokenClassification",headingTag:"h2"}}),Le=new E({props:{name:"class transformers.ErnieMForTokenClassification",anchor:"transformers.ErnieMForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ErnieMForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ernie_m#transformers.ErnieMConfig">ErnieMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie_m/modeling_ernie_m.py#L795"}}),Re=new E({props:{name:"forward",anchor:"transformers.ErnieMForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"return_dict",val:": Optional = True"},{name:"labels",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.ErnieMForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/ernie_m#transformers.ErnieMTokenizer">ErnieMTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ErnieMForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ErnieMForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ErnieMForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ErnieMForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ErnieMForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ErnieMForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ErnieMForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ErnieMForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie_m/modeling_ernie_m.py#L816",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/ernie_m#transformers.ErnieMConfig"
>ErnieMConfig</a>) and inputs.</p>
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
`}}),me=new Ut({props:{$$slots:{default:[as]},$$scope:{ctx:w}}}),pe=new It({props:{anchor:"transformers.ErnieMForTokenClassification.forward.example",$$slots:{default:[is]},$$scope:{ctx:w}}}),Se=new S({props:{title:"ErnieMForQuestionAnswering",local:"transformers.ErnieMForQuestionAnswering",headingTag:"h2"}}),Xe=new E({props:{name:"class transformers.ErnieMForQuestionAnswering",anchor:"transformers.ErnieMForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ErnieMForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ernie_m#transformers.ErnieMConfig">ErnieMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie_m/modeling_ernie_m.py#L876"}}),Qe=new E({props:{name:"forward",anchor:"transformers.ErnieMForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"start_positions",val:": Optional = None"},{name:"end_positions",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = True"}],parametersDescription:[{anchor:"transformers.ErnieMForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/ernie_m#transformers.ErnieMTokenizer">ErnieMTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ErnieMForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ErnieMForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ErnieMForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ErnieMForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ErnieMForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ErnieMForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ErnieMForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ErnieMForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.ErnieMForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie_m/modeling_ernie_m.py#L893",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/ernie_m#transformers.ErnieMConfig"
>ErnieMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),he=new Ut({props:{$$slots:{default:[ls]},$$scope:{ctx:w}}}),ue=new It({props:{anchor:"transformers.ErnieMForQuestionAnswering.forward.example",$$slots:{default:[ds]},$$scope:{ctx:w}}}),Pe=new S({props:{title:"ErnieMForInformationExtraction",local:"transformers.ErnieMForInformationExtraction",headingTag:"h2"}}),Ae=new E({props:{name:"class transformers.ErnieMForInformationExtraction",anchor:"transformers.ErnieMForInformationExtraction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ErnieMForInformationExtraction.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ernie_m#transformers.ErnieMConfig">ErnieMConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie_m/modeling_ernie_m.py#L973"}}),Ye=new E({props:{name:"forward",anchor:"transformers.ErnieMForInformationExtraction.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"start_positions",val:": Optional = None"},{name:"end_positions",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = True"}],parametersDescription:[{anchor:"transformers.ErnieMForInformationExtraction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/ernie_m#transformers.ErnieMTokenizer">ErnieMTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ErnieMForInformationExtraction.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.ErnieMForInformationExtraction.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.ErnieMForInformationExtraction.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ErnieMForInformationExtraction.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ErnieMForInformationExtraction.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ErnieMForInformationExtraction.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ErnieMForInformationExtraction.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ErnieMForInformationExtraction.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for position (index) for computing the start_positions loss. Position outside of the sequence are
not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.ErnieMForInformationExtraction.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) for computing the end_positions loss. Position outside of the sequence are not
taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ernie_m/modeling_ernie_m.py#L988"}}),fe=new Ut({props:{$$slots:{default:[cs]},$$scope:{ctx:w}}}),{c(){t=d("meta"),T=s(),l=d("p"),m=s(),u(y.$$.fragment),o=s(),u(k.$$.fragment),Nt=s(),Me=d("p"),Me.innerHTML=mo,Ht=s(),be=d("p"),be.textContent=po,Gt=s(),Te=d("p"),Te.innerHTML=ho,Vt=s(),u(ye.$$.fragment),Bt=s(),ke=d("ul"),ke.innerHTML=uo,Lt=s(),u(we.$$.fragment),Rt=s(),ve=d("ul"),ve.innerHTML=fo,St=s(),u($e.$$.fragment),Xt=s(),Z=d("div"),u(Ee.$$.fragment),cn=s(),Ke=d("p"),Ke.innerHTML=go,mn=s(),et=d("p"),et.innerHTML=_o,pn=s(),tt=d("p"),tt.innerHTML=Mo,Qt=s(),u(Ce.$$.fragment),Pt=s(),C=d("div"),u(xe.$$.fragment),hn=s(),nt=d("p"),nt.innerHTML=bo,un=s(),Y=d("div"),u(Je.$$.fragment),fn=s(),ot=d("p"),ot.textContent=To,gn=s(),st=d("ul"),st.innerHTML=yo,_n=s(),ne=d("div"),u(je.$$.fragment),Mn=s(),rt=d("p"),rt.innerHTML=ko,bn=s(),oe=d("div"),u(ze.$$.fragment),Tn=s(),at=d("p"),at.innerHTML=wo,yn=s(),it=d("div"),u(Fe.$$.fragment),At=s(),u(Ue.$$.fragment),Yt=s(),x=d("div"),u(Ie.$$.fragment),kn=s(),lt=d("p"),lt.textContent=vo,wn=s(),dt=d("p"),dt.innerHTML=$o,vn=s(),ct=d("p"),ct.innerHTML=Eo,$n=s(),V=d("div"),u(We.$$.fragment),En=s(),mt=d("p"),mt.innerHTML=Co,Cn=s(),u(se.$$.fragment),xn=s(),u(re.$$.fragment),Ot=s(),u(Ze.$$.fragment),Dt=s(),J=d("div"),u(qe.$$.fragment),Jn=s(),pt=d("p"),pt.textContent=xo,jn=s(),ht=d("p"),ht.innerHTML=Jo,zn=s(),ut=d("p"),ut.innerHTML=jo,Fn=s(),W=d("div"),u(Ne.$$.fragment),Un=s(),ft=d("p"),ft.innerHTML=zo,In=s(),u(ae.$$.fragment),Wn=s(),u(ie.$$.fragment),Zn=s(),u(le.$$.fragment),Kt=s(),u(He.$$.fragment),en=s(),j=d("div"),u(Ge.$$.fragment),qn=s(),gt=d("p"),gt.textContent=Fo,Nn=s(),_t=d("p"),_t.innerHTML=Uo,Hn=s(),Mt=d("p"),Mt.innerHTML=Io,Gn=s(),B=d("div"),u(Ve.$$.fragment),Vn=s(),bt=d("p"),bt.innerHTML=Wo,Bn=s(),u(de.$$.fragment),Ln=s(),u(ce.$$.fragment),tn=s(),u(Be.$$.fragment),nn=s(),z=d("div"),u(Le.$$.fragment),Rn=s(),Tt=d("p"),Tt.textContent=Zo,Sn=s(),yt=d("p"),yt.innerHTML=qo,Xn=s(),kt=d("p"),kt.innerHTML=No,Qn=s(),L=d("div"),u(Re.$$.fragment),Pn=s(),wt=d("p"),wt.innerHTML=Ho,An=s(),u(me.$$.fragment),Yn=s(),u(pe.$$.fragment),on=s(),u(Se.$$.fragment),sn=s(),F=d("div"),u(Xe.$$.fragment),On=s(),vt=d("p"),vt.innerHTML=Go,Dn=s(),$t=d("p"),$t.innerHTML=Vo,Kn=s(),Et=d("p"),Et.innerHTML=Bo,eo=s(),R=d("div"),u(Qe.$$.fragment),to=s(),Ct=d("p"),Ct.innerHTML=Lo,no=s(),u(he.$$.fragment),oo=s(),u(ue.$$.fragment),rn=s(),u(Pe.$$.fragment),an=s(),U=d("div"),u(Ae.$$.fragment),so=s(),xt=d("p"),xt.innerHTML=Ro,ro=s(),Jt=d("p"),Jt.innerHTML=So,ao=s(),jt=d("p"),jt.innerHTML=Xo,io=s(),O=d("div"),u(Ye.$$.fragment),lo=s(),zt=d("p"),zt.innerHTML=Qo,co=s(),u(fe.$$.fragment),ln=s(),Zt=d("p"),this.h()},l(e){const a=Do("svelte-u9bgzb",document.head);t=c(a,"META",{name:!0,content:!0}),a.forEach(i),T=r(e),l=c(e,"P",{}),v(l).forEach(i),m=r(e),f(y.$$.fragment,e),o=r(e),f(k.$$.fragment,e),Nt=r(e),Me=c(e,"P",{"data-svelte-h":!0}),h(Me)!=="svelte-1leh8xw"&&(Me.innerHTML=mo),Ht=r(e),be=c(e,"P",{"data-svelte-h":!0}),h(be)!=="svelte-vfdo9a"&&(be.textContent=po),Gt=r(e),Te=c(e,"P",{"data-svelte-h":!0}),h(Te)!=="svelte-15v2r9b"&&(Te.innerHTML=ho),Vt=r(e),f(ye.$$.fragment,e),Bt=r(e),ke=c(e,"UL",{"data-svelte-h":!0}),h(ke)!=="svelte-ipjuel"&&(ke.innerHTML=uo),Lt=r(e),f(we.$$.fragment,e),Rt=r(e),ve=c(e,"UL",{"data-svelte-h":!0}),h(ve)!=="svelte-1521k64"&&(ve.innerHTML=fo),St=r(e),f($e.$$.fragment,e),Xt=r(e),Z=c(e,"DIV",{class:!0});var Q=v(Z);f(Ee.$$.fragment,Q),cn=r(Q),Ke=c(Q,"P",{"data-svelte-h":!0}),h(Ke)!=="svelte-1jx0izf"&&(Ke.innerHTML=go),mn=r(Q),et=c(Q,"P",{"data-svelte-h":!0}),h(et)!=="svelte-o55m63"&&(et.innerHTML=_o),pn=r(Q),tt=c(Q,"P",{"data-svelte-h":!0}),h(tt)!=="svelte-199crak"&&(tt.innerHTML=Mo),Q.forEach(i),Qt=r(e),f(Ce.$$.fragment,e),Pt=r(e),C=c(e,"DIV",{class:!0});var I=v(C);f(xe.$$.fragment,I),hn=r(I),nt=c(I,"P",{"data-svelte-h":!0}),h(nt)!=="svelte-16hpk2a"&&(nt.innerHTML=bo),un=r(I),Y=c(I,"DIV",{class:!0});var te=v(Y);f(Je.$$.fragment,te),fn=r(te),ot=c(te,"P",{"data-svelte-h":!0}),h(ot)!=="svelte-ld95nz"&&(ot.textContent=To),gn=r(te),st=c(te,"UL",{"data-svelte-h":!0}),h(st)!=="svelte-fnydu1"&&(st.innerHTML=yo),te.forEach(i),_n=r(I),ne=c(I,"DIV",{class:!0});var Oe=v(ne);f(je.$$.fragment,Oe),Mn=r(Oe),rt=c(Oe,"P",{"data-svelte-h":!0}),h(rt)!=="svelte-9bhc6n"&&(rt.innerHTML=ko),Oe.forEach(i),bn=r(I),oe=c(I,"DIV",{class:!0});var De=v(oe);f(ze.$$.fragment,De),Tn=r(De),at=c(De,"P",{"data-svelte-h":!0}),h(at)!=="svelte-sahzwn"&&(at.innerHTML=wo),De.forEach(i),yn=r(I),it=c(I,"DIV",{class:!0});var qt=v(it);f(Fe.$$.fragment,qt),qt.forEach(i),I.forEach(i),At=r(e),f(Ue.$$.fragment,e),Yt=r(e),x=c(e,"DIV",{class:!0});var q=v(x);f(Ie.$$.fragment,q),kn=r(q),lt=c(q,"P",{"data-svelte-h":!0}),h(lt)!=="svelte-x3zjez"&&(lt.textContent=vo),wn=r(q),dt=c(q,"P",{"data-svelte-h":!0}),h(dt)!=="svelte-6pahdo"&&(dt.innerHTML=$o),vn=r(q),ct=c(q,"P",{"data-svelte-h":!0}),h(ct)!=="svelte-68lg8f"&&(ct.innerHTML=Eo),$n=r(q),V=c(q,"DIV",{class:!0});var P=v(V);f(We.$$.fragment,P),En=r(P),mt=c(P,"P",{"data-svelte-h":!0}),h(mt)!=="svelte-19qxv8a"&&(mt.innerHTML=Co),Cn=r(P),f(se.$$.fragment,P),xn=r(P),f(re.$$.fragment,P),P.forEach(i),q.forEach(i),Ot=r(e),f(Ze.$$.fragment,e),Dt=r(e),J=c(e,"DIV",{class:!0});var N=v(J);f(qe.$$.fragment,N),Jn=r(N),pt=c(N,"P",{"data-svelte-h":!0}),h(pt)!=="svelte-jluzg6"&&(pt.textContent=xo),jn=r(N),ht=c(N,"P",{"data-svelte-h":!0}),h(ht)!=="svelte-6pahdo"&&(ht.innerHTML=Jo),zn=r(N),ut=c(N,"P",{"data-svelte-h":!0}),h(ut)!=="svelte-68lg8f"&&(ut.innerHTML=jo),Fn=r(N),W=c(N,"DIV",{class:!0});var H=v(W);f(Ne.$$.fragment,H),Un=r(H),ft=c(H,"P",{"data-svelte-h":!0}),h(ft)!=="svelte-1jsdpju"&&(ft.innerHTML=zo),In=r(H),f(ae.$$.fragment,H),Wn=r(H),f(ie.$$.fragment,H),Zn=r(H),f(le.$$.fragment,H),H.forEach(i),N.forEach(i),Kt=r(e),f(He.$$.fragment,e),en=r(e),j=c(e,"DIV",{class:!0});var G=v(j);f(Ge.$$.fragment,G),qn=r(G),gt=c(G,"P",{"data-svelte-h":!0}),h(gt)!=="svelte-d30d0y"&&(gt.textContent=Fo),Nn=r(G),_t=c(G,"P",{"data-svelte-h":!0}),h(_t)!=="svelte-6pahdo"&&(_t.innerHTML=Uo),Hn=r(G),Mt=c(G,"P",{"data-svelte-h":!0}),h(Mt)!=="svelte-68lg8f"&&(Mt.innerHTML=Io),Gn=r(G),B=c(G,"DIV",{class:!0});var A=v(B);f(Ve.$$.fragment,A),Vn=r(A),bt=c(A,"P",{"data-svelte-h":!0}),h(bt)!=="svelte-14akmq"&&(bt.innerHTML=Wo),Bn=r(A),f(de.$$.fragment,A),Ln=r(A),f(ce.$$.fragment,A),A.forEach(i),G.forEach(i),tn=r(e),f(Be.$$.fragment,e),nn=r(e),z=c(e,"DIV",{class:!0});var D=v(z);f(Le.$$.fragment,D),Rn=r(D),Tt=c(D,"P",{"data-svelte-h":!0}),h(Tt)!=="svelte-pdhuup"&&(Tt.textContent=Zo),Sn=r(D),yt=c(D,"P",{"data-svelte-h":!0}),h(yt)!=="svelte-6pahdo"&&(yt.innerHTML=qo),Xn=r(D),kt=c(D,"P",{"data-svelte-h":!0}),h(kt)!=="svelte-68lg8f"&&(kt.innerHTML=No),Qn=r(D),L=c(D,"DIV",{class:!0});var ge=v(L);f(Re.$$.fragment,ge),Pn=r(ge),wt=c(ge,"P",{"data-svelte-h":!0}),h(wt)!=="svelte-11c66ey"&&(wt.innerHTML=Ho),An=r(ge),f(me.$$.fragment,ge),Yn=r(ge),f(pe.$$.fragment,ge),ge.forEach(i),D.forEach(i),on=r(e),f(Se.$$.fragment,e),sn=r(e),F=c(e,"DIV",{class:!0});var K=v(F);f(Xe.$$.fragment,K),On=r(K),vt=c(K,"P",{"data-svelte-h":!0}),h(vt)!=="svelte-cu4xzn"&&(vt.innerHTML=Go),Dn=r(K),$t=c(K,"P",{"data-svelte-h":!0}),h($t)!=="svelte-6pahdo"&&($t.innerHTML=Vo),Kn=r(K),Et=c(K,"P",{"data-svelte-h":!0}),h(Et)!=="svelte-68lg8f"&&(Et.innerHTML=Bo),eo=r(K),R=c(K,"DIV",{class:!0});var _e=v(R);f(Qe.$$.fragment,_e),to=r(_e),Ct=c(_e,"P",{"data-svelte-h":!0}),h(Ct)!=="svelte-1hz8zoc"&&(Ct.innerHTML=Lo),no=r(_e),f(he.$$.fragment,_e),oo=r(_e),f(ue.$$.fragment,_e),_e.forEach(i),K.forEach(i),rn=r(e),f(Pe.$$.fragment,e),an=r(e),U=c(e,"DIV",{class:!0});var ee=v(U);f(Ae.$$.fragment,ee),so=r(ee),xt=c(ee,"P",{"data-svelte-h":!0}),h(xt)!=="svelte-192fs6z"&&(xt.innerHTML=Ro),ro=r(ee),Jt=c(ee,"P",{"data-svelte-h":!0}),h(Jt)!=="svelte-6pahdo"&&(Jt.innerHTML=So),ao=r(ee),jt=c(ee,"P",{"data-svelte-h":!0}),h(jt)!=="svelte-68lg8f"&&(jt.innerHTML=Xo),io=r(ee),O=c(ee,"DIV",{class:!0});var Ft=v(O);f(Ye.$$.fragment,Ft),lo=r(Ft),zt=c(Ft,"P",{"data-svelte-h":!0}),h(zt)!=="svelte-yxm2c2"&&(zt.innerHTML=Qo),co=r(Ft),f(fe.$$.fragment,Ft),Ft.forEach(i),ee.forEach(i),ln=r(e),Zt=c(e,"P",{}),v(Zt).forEach(i),this.h()},h(){$(t,"name","hf:doc:metadata"),$(t,"content",ps),$(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),$(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,a){n(document.head,t),p(e,T,a),p(e,l,a),p(e,m,a),g(y,e,a),p(e,o,a),g(k,e,a),p(e,Nt,a),p(e,Me,a),p(e,Ht,a),p(e,be,a),p(e,Gt,a),p(e,Te,a),p(e,Vt,a),g(ye,e,a),p(e,Bt,a),p(e,ke,a),p(e,Lt,a),g(we,e,a),p(e,Rt,a),p(e,ve,a),p(e,St,a),g($e,e,a),p(e,Xt,a),p(e,Z,a),g(Ee,Z,null),n(Z,cn),n(Z,Ke),n(Z,mn),n(Z,et),n(Z,pn),n(Z,tt),p(e,Qt,a),g(Ce,e,a),p(e,Pt,a),p(e,C,a),g(xe,C,null),n(C,hn),n(C,nt),n(C,un),n(C,Y),g(Je,Y,null),n(Y,fn),n(Y,ot),n(Y,gn),n(Y,st),n(C,_n),n(C,ne),g(je,ne,null),n(ne,Mn),n(ne,rt),n(C,bn),n(C,oe),g(ze,oe,null),n(oe,Tn),n(oe,at),n(C,yn),n(C,it),g(Fe,it,null),p(e,At,a),g(Ue,e,a),p(e,Yt,a),p(e,x,a),g(Ie,x,null),n(x,kn),n(x,lt),n(x,wn),n(x,dt),n(x,vn),n(x,ct),n(x,$n),n(x,V),g(We,V,null),n(V,En),n(V,mt),n(V,Cn),g(se,V,null),n(V,xn),g(re,V,null),p(e,Ot,a),g(Ze,e,a),p(e,Dt,a),p(e,J,a),g(qe,J,null),n(J,Jn),n(J,pt),n(J,jn),n(J,ht),n(J,zn),n(J,ut),n(J,Fn),n(J,W),g(Ne,W,null),n(W,Un),n(W,ft),n(W,In),g(ae,W,null),n(W,Wn),g(ie,W,null),n(W,Zn),g(le,W,null),p(e,Kt,a),g(He,e,a),p(e,en,a),p(e,j,a),g(Ge,j,null),n(j,qn),n(j,gt),n(j,Nn),n(j,_t),n(j,Hn),n(j,Mt),n(j,Gn),n(j,B),g(Ve,B,null),n(B,Vn),n(B,bt),n(B,Bn),g(de,B,null),n(B,Ln),g(ce,B,null),p(e,tn,a),g(Be,e,a),p(e,nn,a),p(e,z,a),g(Le,z,null),n(z,Rn),n(z,Tt),n(z,Sn),n(z,yt),n(z,Xn),n(z,kt),n(z,Qn),n(z,L),g(Re,L,null),n(L,Pn),n(L,wt),n(L,An),g(me,L,null),n(L,Yn),g(pe,L,null),p(e,on,a),g(Se,e,a),p(e,sn,a),p(e,F,a),g(Xe,F,null),n(F,On),n(F,vt),n(F,Dn),n(F,$t),n(F,Kn),n(F,Et),n(F,eo),n(F,R),g(Qe,R,null),n(R,to),n(R,Ct),n(R,no),g(he,R,null),n(R,oo),g(ue,R,null),p(e,rn,a),g(Pe,e,a),p(e,an,a),p(e,U,a),g(Ae,U,null),n(U,so),n(U,xt),n(U,ro),n(U,Jt),n(U,ao),n(U,jt),n(U,io),n(U,O),g(Ye,O,null),n(O,lo),n(O,zt),n(O,co),g(fe,O,null),p(e,ln,a),p(e,Zt,a),dn=!0},p(e,[a]){const Q={};a&2&&(Q.$$scope={dirty:a,ctx:e}),se.$set(Q);const I={};a&2&&(I.$$scope={dirty:a,ctx:e}),re.$set(I);const te={};a&2&&(te.$$scope={dirty:a,ctx:e}),ae.$set(te);const Oe={};a&2&&(Oe.$$scope={dirty:a,ctx:e}),ie.$set(Oe);const De={};a&2&&(De.$$scope={dirty:a,ctx:e}),le.$set(De);const qt={};a&2&&(qt.$$scope={dirty:a,ctx:e}),de.$set(qt);const q={};a&2&&(q.$$scope={dirty:a,ctx:e}),ce.$set(q);const P={};a&2&&(P.$$scope={dirty:a,ctx:e}),me.$set(P);const N={};a&2&&(N.$$scope={dirty:a,ctx:e}),pe.$set(N);const H={};a&2&&(H.$$scope={dirty:a,ctx:e}),he.$set(H);const G={};a&2&&(G.$$scope={dirty:a,ctx:e}),ue.$set(G);const A={};a&2&&(A.$$scope={dirty:a,ctx:e}),fe.$set(A)},i(e){dn||(_(y.$$.fragment,e),_(k.$$.fragment,e),_(ye.$$.fragment,e),_(we.$$.fragment,e),_($e.$$.fragment,e),_(Ee.$$.fragment,e),_(Ce.$$.fragment,e),_(xe.$$.fragment,e),_(Je.$$.fragment,e),_(je.$$.fragment,e),_(ze.$$.fragment,e),_(Fe.$$.fragment,e),_(Ue.$$.fragment,e),_(Ie.$$.fragment,e),_(We.$$.fragment,e),_(se.$$.fragment,e),_(re.$$.fragment,e),_(Ze.$$.fragment,e),_(qe.$$.fragment,e),_(Ne.$$.fragment,e),_(ae.$$.fragment,e),_(ie.$$.fragment,e),_(le.$$.fragment,e),_(He.$$.fragment,e),_(Ge.$$.fragment,e),_(Ve.$$.fragment,e),_(de.$$.fragment,e),_(ce.$$.fragment,e),_(Be.$$.fragment,e),_(Le.$$.fragment,e),_(Re.$$.fragment,e),_(me.$$.fragment,e),_(pe.$$.fragment,e),_(Se.$$.fragment,e),_(Xe.$$.fragment,e),_(Qe.$$.fragment,e),_(he.$$.fragment,e),_(ue.$$.fragment,e),_(Pe.$$.fragment,e),_(Ae.$$.fragment,e),_(Ye.$$.fragment,e),_(fe.$$.fragment,e),dn=!0)},o(e){M(y.$$.fragment,e),M(k.$$.fragment,e),M(ye.$$.fragment,e),M(we.$$.fragment,e),M($e.$$.fragment,e),M(Ee.$$.fragment,e),M(Ce.$$.fragment,e),M(xe.$$.fragment,e),M(Je.$$.fragment,e),M(je.$$.fragment,e),M(ze.$$.fragment,e),M(Fe.$$.fragment,e),M(Ue.$$.fragment,e),M(Ie.$$.fragment,e),M(We.$$.fragment,e),M(se.$$.fragment,e),M(re.$$.fragment,e),M(Ze.$$.fragment,e),M(qe.$$.fragment,e),M(Ne.$$.fragment,e),M(ae.$$.fragment,e),M(ie.$$.fragment,e),M(le.$$.fragment,e),M(He.$$.fragment,e),M(Ge.$$.fragment,e),M(Ve.$$.fragment,e),M(de.$$.fragment,e),M(ce.$$.fragment,e),M(Be.$$.fragment,e),M(Le.$$.fragment,e),M(Re.$$.fragment,e),M(me.$$.fragment,e),M(pe.$$.fragment,e),M(Se.$$.fragment,e),M(Xe.$$.fragment,e),M(Qe.$$.fragment,e),M(he.$$.fragment,e),M(ue.$$.fragment,e),M(Pe.$$.fragment,e),M(Ae.$$.fragment,e),M(Ye.$$.fragment,e),M(fe.$$.fragment,e),dn=!1},d(e){e&&(i(T),i(l),i(m),i(o),i(Nt),i(Me),i(Ht),i(be),i(Gt),i(Te),i(Vt),i(Bt),i(ke),i(Lt),i(Rt),i(ve),i(St),i(Xt),i(Z),i(Qt),i(Pt),i(C),i(At),i(Yt),i(x),i(Ot),i(Dt),i(J),i(Kt),i(en),i(j),i(tn),i(nn),i(z),i(on),i(sn),i(F),i(rn),i(an),i(U),i(ln),i(Zt)),i(t),b(y,e),b(k,e),b(ye,e),b(we,e),b($e,e),b(Ee),b(Ce,e),b(xe),b(Je),b(je),b(ze),b(Fe),b(Ue,e),b(Ie),b(We),b(se),b(re),b(Ze,e),b(qe),b(Ne),b(ae),b(ie),b(le),b(He,e),b(Ge),b(Ve),b(de),b(ce),b(Be,e),b(Le),b(Re),b(me),b(pe),b(Se,e),b(Xe),b(Qe),b(he),b(ue),b(Pe,e),b(Ae),b(Ye),b(fe)}}}const ps='{"title":"ErnieM","local":"erniem","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"ErnieMConfig","local":"transformers.ErnieMConfig","sections":[],"depth":2},{"title":"ErnieMTokenizer","local":"transformers.ErnieMTokenizer","sections":[],"depth":2},{"title":"ErnieMModel","local":"transformers.ErnieMModel","sections":[],"depth":2},{"title":"ErnieMForSequenceClassification","local":"transformers.ErnieMForSequenceClassification","sections":[],"depth":2},{"title":"ErnieMForMultipleChoice","local":"transformers.ErnieMForMultipleChoice","sections":[],"depth":2},{"title":"ErnieMForTokenClassification","local":"transformers.ErnieMForTokenClassification","sections":[],"depth":2},{"title":"ErnieMForQuestionAnswering","local":"transformers.ErnieMForQuestionAnswering","sections":[],"depth":2},{"title":"ErnieMForInformationExtraction","local":"transformers.ErnieMForInformationExtraction","sections":[],"depth":2}],"depth":1}';function hs(w){return Ao(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ys extends Yo{constructor(t){super(),Oo(this,t,hs,ms,Po,{})}}export{ys as component};
