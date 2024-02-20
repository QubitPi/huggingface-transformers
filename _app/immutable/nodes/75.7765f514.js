import{s as To,o as Mo,n as P}from"../chunks/scheduler.9bc65507.js";import{S as ko,i as vo,g as p,s as a,r as h,A as wo,h as m,f as s,c as r,j as J,u as f,x as M,k as j,y as c,a as d,v as g,d as _,t as b,w as y}from"../chunks/index.707bf1b6.js";import{T as yt}from"../chunks/Tip.c2ecdbf4.js";import{D as L}from"../chunks/Docstring.17db21ae.js";import{C as Xe}from"../chunks/CodeBlock.54a9f38d.js";import{E as Qe}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as S}from"../chunks/Heading.342b1fa6.js";function $o(v){let o,T="Example:",l,i,u;return i=new Xe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEJpb0dwdE1vZGVsJTJDJTIwQmlvR3B0Q29uZmlnJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyMEJpb0dQVCUyMG1pY3Jvc29mdCUyRmJpb2dwdCUyMHN0eWxlJTIwY29uZmlndXJhdGlvbiUwQWNvbmZpZ3VyYXRpb24lMjAlM0QlMjBCaW9HcHRDb25maWcoKSUwQSUwQSUyMyUyMEluaXRpYWxpemluZyUyMGElMjBtb2RlbCUyMGZyb20lMjB0aGUlMjBtaWNyb3NvZnQlMkZiaW9ncHQlMjBzdHlsZSUyMGNvbmZpZ3VyYXRpb24lMEFtb2RlbCUyMCUzRCUyMEJpb0dwdE1vZGVsKGNvbmZpZ3VyYXRpb24pJTBBJTBBJTIzJTIwQWNjZXNzaW5nJTIwdGhlJTIwbW9kZWwlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMG1vZGVsLmNvbmZpZw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BioGptModel, BioGptConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BioGPT microsoft/biogpt style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BioGptConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the microsoft/biogpt style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BioGptModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){o=p("p"),o.textContent=T,l=a(),h(i.$$.fragment)},l(t){o=m(t,"P",{"data-svelte-h":!0}),M(o)!=="svelte-11lpom8"&&(o.textContent=T),l=r(t),f(i.$$.fragment,t)},m(t,k){d(t,o,k),d(t,l,k),g(i,t,k),u=!0},p:P,i(t){u||(_(i.$$.fragment,t),u=!0)},o(t){b(i.$$.fragment,t),u=!1},d(t){t&&(s(o),s(l)),y(i,t)}}}function Co(v){let o,T=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){o=p("p"),o.innerHTML=T},l(l){o=m(l,"P",{"data-svelte-h":!0}),M(o)!=="svelte-fincs2"&&(o.innerHTML=T)},m(l,i){d(l,o,i)},p:P,d(l){l&&s(o)}}}function Go(v){let o,T="Example:",l,i,u;return i=new Xe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBCaW9HcHRNb2RlbCUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGYmlvZ3B0JTIyKSUwQW1vZGVsJTIwJTNEJTIwQmlvR3B0TW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRmJpb2dwdCUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQWxhc3RfaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, BioGptModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/biogpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BioGptModel.from_pretrained(<span class="hljs-string">&quot;microsoft/biogpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){o=p("p"),o.textContent=T,l=a(),h(i.$$.fragment)},l(t){o=m(t,"P",{"data-svelte-h":!0}),M(o)!=="svelte-11lpom8"&&(o.textContent=T),l=r(t),f(i.$$.fragment,t)},m(t,k){d(t,o,k),d(t,l,k),g(i,t,k),u=!0},p:P,i(t){u||(_(i.$$.fragment,t),u=!0)},o(t){b(i.$$.fragment,t),u=!1},d(t){t&&(s(o),s(l)),y(i,t)}}}function Bo(v){let o,T=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){o=p("p"),o.innerHTML=T},l(l){o=m(l,"P",{"data-svelte-h":!0}),M(o)!=="svelte-fincs2"&&(o.innerHTML=T)},m(l,i){d(l,o,i)},p:P,d(l){l&&s(o)}}}function xo(v){let o,T="Example:",l,i,u;return i=new Xe({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEJpb0dwdEZvckNhdXNhbExNJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGYmlvZ3B0JTIyKSUwQW1vZGVsJTIwJTNEJTIwQmlvR3B0Rm9yQ2F1c2FsTE0uZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRmJpb2dwdCUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEaW5wdXRzJTVCJTIyaW5wdXRfaWRzJTIyJTVEKSUwQWxvc3MlMjAlM0QlMjBvdXRwdXRzLmxvc3MlMEFsb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, BioGptForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/biogpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BioGptForCausalLM.from_pretrained(<span class="hljs-string">&quot;microsoft/biogpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){o=p("p"),o.textContent=T,l=a(),h(i.$$.fragment)},l(t){o=m(t,"P",{"data-svelte-h":!0}),M(o)!=="svelte-11lpom8"&&(o.textContent=T),l=r(t),f(i.$$.fragment,t)},m(t,k){d(t,o,k),d(t,l,k),g(i,t,k),u=!0},p:P,i(t){u||(_(i.$$.fragment,t),u=!0)},o(t){b(i.$$.fragment,t),u=!1},d(t){t&&(s(o),s(l)),y(i,t)}}}function Jo(v){let o,T=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){o=p("p"),o.innerHTML=T},l(l){o=m(l,"P",{"data-svelte-h":!0}),M(o)!=="svelte-fincs2"&&(o.innerHTML=T)},m(l,i){d(l,o,i)},p:P,d(l){l&&s(o)}}}function jo(v){let o,T="Example:",l,i,u;return i=new Xe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBCaW9HcHRGb3JUb2tlbkNsYXNzaWZpY2F0aW9uJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZiaW9ncHQlMjIpJTBBbW9kZWwlMjAlM0QlMjBCaW9HcHRGb3JUb2tlbkNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZiaW9ncHQlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUwQSUyMCUyMCUyMCUyMCUyMkh1Z2dpbmdGYWNlJTIwaXMlMjBhJTIwY29tcGFueSUyMGJhc2VkJTIwaW4lMjBQYXJpcyUyMGFuZCUyME5ldyUyMFlvcmslMjIlMkMlMjBhZGRfc3BlY2lhbF90b2tlbnMlM0RGYWxzZSUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIlMEEpJTBBJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEFwcmVkaWN0ZWRfdG9rZW5fY2xhc3NfaWRzJTIwJTNEJTIwbG9naXRzLmFyZ21heCgtMSklMEElMEElMjMlMjBOb3RlJTIwdGhhdCUyMHRva2VucyUyMGFyZSUyMGNsYXNzaWZpZWQlMjByYXRoZXIlMjB0aGVuJTIwaW5wdXQlMjB3b3JkcyUyMHdoaWNoJTIwbWVhbnMlMjB0aGF0JTBBJTIzJTIwdGhlcmUlMjBtaWdodCUyMGJlJTIwbW9yZSUyMHByZWRpY3RlZCUyMHRva2VuJTIwY2xhc3NlcyUyMHRoYW4lMjB3b3Jkcy4lMEElMjMlMjBNdWx0aXBsZSUyMHRva2VuJTIwY2xhc3NlcyUyMG1pZ2h0JTIwYWNjb3VudCUyMGZvciUyMHRoZSUyMHNhbWUlMjB3b3JkJTBBcHJlZGljdGVkX3Rva2Vuc19jbGFzc2VzJTIwJTNEJTIwJTVCbW9kZWwuY29uZmlnLmlkMmxhYmVsJTVCdC5pdGVtKCklNUQlMjBmb3IlMjB0JTIwaW4lMjBwcmVkaWN0ZWRfdG9rZW5fY2xhc3NfaWRzJTVCMCU1RCU1RCUwQSUwQWxhYmVscyUyMCUzRCUyMHByZWRpY3RlZF90b2tlbl9jbGFzc19pZHMlMEFsb3NzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMlMkMlMjBsYWJlbHMlM0RsYWJlbHMpLmxvc3M=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, BioGptForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/biogpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BioGptForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/biogpt&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){o=p("p"),o.textContent=T,l=a(),h(i.$$.fragment)},l(t){o=m(t,"P",{"data-svelte-h":!0}),M(o)!=="svelte-11lpom8"&&(o.textContent=T),l=r(t),f(i.$$.fragment,t)},m(t,k){d(t,o,k),d(t,l,k),g(i,t,k),u=!0},p:P,i(t){u||(_(i.$$.fragment,t),u=!0)},o(t){b(i.$$.fragment,t),u=!1},d(t){t&&(s(o),s(l)),y(i,t)}}}function zo(v){let o,T=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){o=p("p"),o.innerHTML=T},l(l){o=m(l,"P",{"data-svelte-h":!0}),M(o)!=="svelte-fincs2"&&(o.innerHTML=T)},m(l,i){d(l,o,i)},p:P,d(l){l&&s(o)}}}function Fo(v){let o,T="Example of single-label classification:",l,i,u;return i=new Xe({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEJpb0dwdEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZiaW9ncHQlMjIpJTBBbW9kZWwlMjAlM0QlMjBCaW9HcHRGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZiaW9ncHQlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX2NsYXNzX2lkJTIwJTNEJTIwbG9naXRzLmFyZ21heCgpLml0ZW0oKSUwQSUwQSUyMyUyMFRvJTIwdHJhaW4lMjBhJTIwbW9kZWwlMjBvbiUyMCU2MG51bV9sYWJlbHMlNjAlMjBjbGFzc2VzJTJDJTIweW91JTIwY2FuJTIwcGFzcyUyMCU2MG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTYwJTIwdG8lMjAlNjAuZnJvbV9wcmV0cmFpbmVkKC4uLiklNjAlMEFudW1fbGFiZWxzJTIwJTNEJTIwbGVuKG1vZGVsLmNvbmZpZy5pZDJsYWJlbCklMEFtb2RlbCUyMCUzRCUyMEJpb0dwdEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRmJpb2dwdCUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzKSUwQSUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxJTVEKSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, BioGptForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/biogpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BioGptForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/biogpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BioGptForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/biogpt&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){o=p("p"),o.textContent=T,l=a(),h(i.$$.fragment)},l(t){o=m(t,"P",{"data-svelte-h":!0}),M(o)!=="svelte-ykxpe4"&&(o.textContent=T),l=r(t),f(i.$$.fragment,t)},m(t,k){d(t,o,k),d(t,l,k),g(i,t,k),u=!0},p:P,i(t){u||(_(i.$$.fragment,t),u=!0)},o(t){b(i.$$.fragment,t),u=!1},d(t){t&&(s(o),s(l)),y(i,t)}}}function Uo(v){let o,T="Example of multi-label classification:",l,i,u;return i=new Xe({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEJpb0dwdEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZiaW9ncHQlMjIpJTBBbW9kZWwlMjAlM0QlMjBCaW9HcHRGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZiaW9ncHQlMjIlMkMlMjBwcm9ibGVtX3R5cGUlM0QlMjJtdWx0aV9sYWJlbF9jbGFzc2lmaWNhdGlvbiUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEFwcmVkaWN0ZWRfY2xhc3NfaWRzJTIwJTNEJTIwdG9yY2guYXJhbmdlKDAlMkMlMjBsb2dpdHMuc2hhcGUlNUItMSU1RCklNUJ0b3JjaC5zaWdtb2lkKGxvZ2l0cykuc3F1ZWV6ZShkaW0lM0QwKSUyMCUzRSUyMDAuNSU1RCUwQSUwQSUyMyUyMFRvJTIwdHJhaW4lMjBhJTIwbW9kZWwlMjBvbiUyMCU2MG51bV9sYWJlbHMlNjAlMjBjbGFzc2VzJTJDJTIweW91JTIwY2FuJTIwcGFzcyUyMCU2MG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTYwJTIwdG8lMjAlNjAuZnJvbV9wcmV0cmFpbmVkKC4uLiklNjAlMEFudW1fbGFiZWxzJTIwJTNEJTIwbGVuKG1vZGVsLmNvbmZpZy5pZDJsYWJlbCklMEFtb2RlbCUyMCUzRCUyMEJpb0dwdEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUwQSUyMCUyMCUyMCUyMCUyMm1pY3Jvc29mdCUyRmJpb2dwdCUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIlMEEpJTBBJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2guc3VtKCUwQSUyMCUyMCUyMCUyMHRvcmNoLm5uLmZ1bmN0aW9uYWwub25lX2hvdChwcmVkaWN0ZWRfY2xhc3NfaWRzJTVCTm9uZSUyQyUyMCUzQSU1RC5jbG9uZSgpJTJDJTIwbnVtX2NsYXNzZXMlM0RudW1fbGFiZWxzKSUyQyUyMGRpbSUzRDElMEEpLnRvKHRvcmNoLmZsb2F0KSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, BioGptForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/biogpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BioGptForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/biogpt&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.arange(<span class="hljs-number">0</span>, logits.shape[-<span class="hljs-number">1</span>])[torch.sigmoid(logits).squeeze(dim=<span class="hljs-number">0</span>) &gt; <span class="hljs-number">0.5</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BioGptForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;microsoft/biogpt&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.<span class="hljs-built_in">sum</span>(
<span class="hljs-meta">... </span>    torch.nn.functional.one_hot(predicted_class_ids[<span class="hljs-literal">None</span>, :].clone(), num_classes=num_labels), dim=<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>).to(torch.<span class="hljs-built_in">float</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){o=p("p"),o.textContent=T,l=a(),h(i.$$.fragment)},l(t){o=m(t,"P",{"data-svelte-h":!0}),M(o)!=="svelte-1l8e32d"&&(o.textContent=T),l=r(t),f(i.$$.fragment,t)},m(t,k){d(t,o,k),d(t,l,k),g(i,t,k),u=!0},p:P,i(t){u||(_(i.$$.fragment,t),u=!0)},o(t){b(i.$$.fragment,t),u=!1},d(t){t&&(s(o),s(l)),y(i,t)}}}function Wo(v){let o,T,l,i,u,t,k,Oe,ae,Ot='The BioGPT model was proposed in <a href="https://academic.oup.com/bib/advance-article/doi/10.1093/bib/bbac409/6713511?guestAccessKey=a66d9b5d-4f83-4017-bb52-405815c907b9" rel="nofollow">BioGPT: generative pre-trained transformer for biomedical text generation and mining</a> by Renqian Luo, Liai Sun, Yingce Xia, Tao Qin, Sheng Zhang, Hoifung Poon and Tie-Yan Liu. BioGPT is a domain-specific generative pre-trained Transformer language model for biomedical text generation and mining. BioGPT follows the Transformer language model backbone, and is pre-trained on 15M PubMed abstracts from scratch.',De,re,Dt="The abstract from the paper is the following:",Ke,ie,Kt="<em>Pre-trained language models have attracted increasing attention in the biomedical domain, inspired by their great success in the general natural language domain. Among the two main branches of pre-trained language models in the general language domain, i.e. BERT (and its variants) and GPT (and its variants), the first one has been extensively studied in the biomedical domain, such as BioBERT and PubMedBERT. While they have achieved great success on a variety of discriminative downstream biomedical tasks, the lack of generation ability constrains their application scope. In this paper, we propose BioGPT, a domain-specific generative Transformer language model pre-trained on large-scale biomedical literature. We evaluate BioGPT on six biomedical natural language processing tasks and demonstrate that our model outperforms previous models on most tasks. Especially, we get 44.98%, 38.42% and 40.76% F1 score on BC5CDR, KD-DTI and DDI end-to-end relation extraction tasks, respectively, and 78.2% accuracy on PubMedQA, creating a new record. Our case study on text generation further demonstrates the advantage of BioGPT on biomedical literature to generate fluent descriptions for biomedical terms.</em>",et,le,eo='This model was contributed by <a href="https://huggingface.co/kamalkraj" rel="nofollow">kamalkraj</a>. The original code can be found <a href="https://github.com/microsoft/BioGPT" rel="nofollow">here</a>.',tt,de,ot,ce,to="<li>BioGPT is a model with absolute position embeddings so it’s usually advised to pad the inputs on the right rather than the left.</li> <li>BioGPT was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next token in a sequence. Leveraging this feature allows BioGPT to generate syntactically coherent text as it can be observed in the run_generation.py example script.</li> <li>The model can take the <code>past_key_values</code> (for PyTorch) as input, which is the previously computed key/value attention pairs. Using this (past_key_values or past) value prevents the model from re-computing pre-computed values in the context of text generation. For PyTorch, see past_key_values argument of the BioGptForCausalLM.forward() method for more information on its usage.</li>",nt,pe,st,me,oo='<li><a href="../tasks/language_modeling">Causal language modeling task guide</a></li>',at,ue,rt,G,he,Tt,Je,no=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/biogpt#transformers.BioGptModel">BioGptModel</a>. It is used to instantiate an
BioGPT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the BioGPT
<a href="https://huggingface.co/microsoft/biogpt" rel="nofollow">microsoft/biogpt</a> architecture.`,Mt,je,so=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,kt,Y,it,fe,lt,B,ge,vt,ze,ao="Construct an FAIRSEQ Transformer tokenizer. Moses tokenization followed by Byte-Pair Encoding.",wt,Fe,ro=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`,$t,Ue,_e,dt,be,ct,W,ye,Ct,We,io=`The bare BioGPT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,Gt,z,Te,Bt,qe,lo='The <a href="/docs/transformers/main/en/model_doc/biogpt#transformers.BioGptModel">BioGptModel</a> forward method, overrides the <code>__call__</code> special method.',xt,A,Jt,O,pt,Me,mt,q,ke,jt,Ze,co=`BioGPT Model with a <code>language modeling</code> head on top for CLM fine-tuning.
This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,zt,F,ve,Ft,Ie,po='The <a href="/docs/transformers/main/en/model_doc/biogpt#transformers.BioGptForCausalLM">BioGptForCausalLM</a> forward method, overrides the <code>__call__</code> special method.',Ut,D,Wt,K,ut,we,ht,x,$e,qt,Ne,mo=`BioGPT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`,Zt,He,uo=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,It,U,Ce,Nt,Re,ho='The <a href="/docs/transformers/main/en/model_doc/biogpt#transformers.BioGptForTokenClassification">BioGptForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',Ht,ee,Rt,te,ft,Ge,gt,w,Be,Vt,Ve,fo="The BioGpt Model transformer with a sequence classification head on top (linear layer).",Lt,Le,go=`<a href="/docs/transformers/main/en/model_doc/biogpt#transformers.BioGptForSequenceClassification">BioGptForSequenceClassification</a> uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do.`,Et,Ee,_o=`Since it does classification on the last token, it is required to know the position of the last token. If a
<code>pad_token_id</code> is defined in the configuration, it finds the last token that is not a padding token in each row. If
no <code>pad_token_id</code> is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when <code>inputs_embeds</code> are passed instead of <code>input_ids</code>, it does the same (take the last value in
each row of the batch).`,St,Se,bo=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,Pt,C,xe,Qt,Pe,yo='The <a href="/docs/transformers/main/en/model_doc/biogpt#transformers.BioGptForSequenceClassification">BioGptForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',Xt,oe,Yt,ne,At,se,_t,Ye,bt;return u=new S({props:{title:"BioGPT",local:"biogpt",headingTag:"h1"}}),k=new S({props:{title:"Overview",local:"overview",headingTag:"h2"}}),de=new S({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),pe=new S({props:{title:"Resources",local:"resources",headingTag:"h2"}}),ue=new S({props:{title:"BioGptConfig",local:"transformers.BioGptConfig",headingTag:"h2"}}),he=new L({props:{name:"class transformers.BioGptConfig",anchor:"transformers.BioGptConfig",parameters:[{name:"vocab_size",val:" = 42384"},{name:"hidden_size",val:" = 1024"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 16"},{name:"intermediate_size",val:" = 4096"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 1024"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"scale_embedding",val:" = True"},{name:"use_cache",val:" = True"},{name:"layerdrop",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BioGptConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 42384) &#x2014;
Vocabulary size of the BioGPT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/biogpt#transformers.BioGptModel">BioGptModel</a>.`,name:"vocab_size"},{anchor:"transformers.BioGptConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.BioGptConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.BioGptConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.BioGptConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.BioGptConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.BioGptConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.BioGptConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.BioGptConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.BioGptConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.BioGptConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.BioGptConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.BioGptConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.BioGptConfig.layerdrop",description:`<strong>layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Please refer to the paper about LayerDrop: <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a> for further details`,name:"layerdrop"},{anchor:"transformers.BioGptConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.BioGptConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Padding token id.`,name:"pad_token_id"},{anchor:"transformers.BioGptConfig.bos_token_id",description:`<strong>bos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
Beginning of stream token id.`,name:"bos_token_id"},{anchor:"transformers.BioGptConfig.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
End of stream token id.`,name:"eos_token_id"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/biogpt/configuration_biogpt.py#L29"}}),Y=new Qe({props:{anchor:"transformers.BioGptConfig.example",$$slots:{default:[$o]},$$scope:{ctx:v}}}),fe=new S({props:{title:"BioGptTokenizer",local:"transformers.BioGptTokenizer",headingTag:"h2"}}),ge=new L({props:{name:"class transformers.BioGptTokenizer",anchor:"transformers.BioGptTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BioGptTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.BioGptTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Merges file.`,name:"merges_file"},{anchor:"transformers.BioGptTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BioGptTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.BioGptTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.BioGptTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BioGptTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/biogpt/tokenization_biogpt.py#L56"}}),_e=new L({props:{name:"save_vocabulary",anchor:"transformers.BioGptTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/biogpt/tokenization_biogpt.py#L326"}}),be=new S({props:{title:"BioGptModel",local:"transformers.BioGptModel",headingTag:"h2"}}),ye=new L({props:{name:"class transformers.BioGptModel",anchor:"transformers.BioGptModel",parameters:[{name:"config",val:": BioGptConfig"}],parametersDescription:[{anchor:"transformers.BioGptModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/biogpt#transformers.BioGptConfig">~BioGptConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/biogpt/modeling_biogpt.py#L418"}}),Te=new L({props:{name:"forward",anchor:"transformers.BioGptModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.BioGptModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BioGptModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BioGptModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BioGptModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BioGptModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BioGptModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BioGptModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BioGptModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BioGptModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BioGptModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/biogpt/modeling_biogpt.py#L448",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/biogpt#transformers.BioGptConfig"
>BioGptConfig</a>) and inputs.</p>
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
`}}),A=new yt({props:{$$slots:{default:[Co]},$$scope:{ctx:v}}}),O=new Qe({props:{anchor:"transformers.BioGptModel.forward.example",$$slots:{default:[Go]},$$scope:{ctx:v}}}),Me=new S({props:{title:"BioGptForCausalLM",local:"transformers.BioGptForCausalLM",headingTag:"h2"}}),ke=new L({props:{name:"class transformers.BioGptForCausalLM",anchor:"transformers.BioGptForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BioGptForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/biogpt#transformers.BioGptConfig">~BioGptConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/biogpt/modeling_biogpt.py#L588"}}),ve=new L({props:{name:"forward",anchor:"transformers.BioGptForCausalLM.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.BioGptForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BioGptForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BioGptForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BioGptForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BioGptForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BioGptForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BioGptForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BioGptForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BioGptForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BioGptForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BioGptForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/biogpt/modeling_biogpt.py#L609",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/biogpt#transformers.BioGptConfig"
>BioGptConfig</a>) and inputs.</p>
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
`}}),D=new yt({props:{$$slots:{default:[Bo]},$$scope:{ctx:v}}}),K=new Qe({props:{anchor:"transformers.BioGptForCausalLM.forward.example",$$slots:{default:[xo]},$$scope:{ctx:v}}}),we=new S({props:{title:"BioGptForTokenClassification",local:"transformers.BioGptForTokenClassification",headingTag:"h2"}}),$e=new L({props:{name:"class transformers.BioGptForTokenClassification",anchor:"transformers.BioGptForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BioGptForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/biogpt#transformers.BioGptConfig">~BioGptConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/biogpt/modeling_biogpt.py#L713"}}),Ce=new L({props:{name:"forward",anchor:"transformers.BioGptForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.BioGptForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BioGptForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BioGptForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BioGptForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BioGptForTokenClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BioGptForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BioGptForTokenClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BioGptForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BioGptForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BioGptForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BioGptForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/biogpt/modeling_biogpt.py#L735",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/biogpt#transformers.BioGptConfig"
>BioGptConfig</a>) and inputs.</p>
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
`}}),ee=new yt({props:{$$slots:{default:[Jo]},$$scope:{ctx:v}}}),te=new Qe({props:{anchor:"transformers.BioGptForTokenClassification.forward.example",$$slots:{default:[jo]},$$scope:{ctx:v}}}),Ge=new S({props:{title:"BioGptForSequenceClassification",local:"transformers.BioGptForSequenceClassification",headingTag:"h2"}}),Be=new L({props:{name:"class transformers.BioGptForSequenceClassification",anchor:"transformers.BioGptForSequenceClassification",parameters:[{name:"config",val:": BioGptConfig"}],parametersDescription:[{anchor:"transformers.BioGptForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/biogpt#transformers.BioGptConfig">~BioGptConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/biogpt/modeling_biogpt.py#L805"}}),xe=new L({props:{name:"forward",anchor:"transformers.BioGptForSequenceClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.BioGptForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BioGptForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BioGptForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BioGptForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BioGptForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BioGptForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BioGptForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.BioGptForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BioGptForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BioGptForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BioGptForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/biogpt/modeling_biogpt.py#L830",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/biogpt#transformers.BioGptConfig"
>BioGptConfig</a>) and inputs.</p>
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
`}}),oe=new yt({props:{$$slots:{default:[zo]},$$scope:{ctx:v}}}),ne=new Qe({props:{anchor:"transformers.BioGptForSequenceClassification.forward.example",$$slots:{default:[Fo]},$$scope:{ctx:v}}}),se=new Qe({props:{anchor:"transformers.BioGptForSequenceClassification.forward.example-2",$$slots:{default:[Uo]},$$scope:{ctx:v}}}),{c(){o=p("meta"),T=a(),l=p("p"),i=a(),h(u.$$.fragment),t=a(),h(k.$$.fragment),Oe=a(),ae=p("p"),ae.innerHTML=Ot,De=a(),re=p("p"),re.textContent=Dt,Ke=a(),ie=p("p"),ie.innerHTML=Kt,et=a(),le=p("p"),le.innerHTML=eo,tt=a(),h(de.$$.fragment),ot=a(),ce=p("ul"),ce.innerHTML=to,nt=a(),h(pe.$$.fragment),st=a(),me=p("ul"),me.innerHTML=oo,at=a(),h(ue.$$.fragment),rt=a(),G=p("div"),h(he.$$.fragment),Tt=a(),Je=p("p"),Je.innerHTML=no,Mt=a(),je=p("p"),je.innerHTML=so,kt=a(),h(Y.$$.fragment),it=a(),h(fe.$$.fragment),lt=a(),B=p("div"),h(ge.$$.fragment),vt=a(),ze=p("p"),ze.textContent=ao,wt=a(),Fe=p("p"),Fe.innerHTML=ro,$t=a(),Ue=p("div"),h(_e.$$.fragment),dt=a(),h(be.$$.fragment),ct=a(),W=p("div"),h(ye.$$.fragment),Ct=a(),We=p("p"),We.innerHTML=io,Gt=a(),z=p("div"),h(Te.$$.fragment),Bt=a(),qe=p("p"),qe.innerHTML=lo,xt=a(),h(A.$$.fragment),Jt=a(),h(O.$$.fragment),pt=a(),h(Me.$$.fragment),mt=a(),q=p("div"),h(ke.$$.fragment),jt=a(),Ze=p("p"),Ze.innerHTML=co,zt=a(),F=p("div"),h(ve.$$.fragment),Ft=a(),Ie=p("p"),Ie.innerHTML=po,Ut=a(),h(D.$$.fragment),Wt=a(),h(K.$$.fragment),ut=a(),h(we.$$.fragment),ht=a(),x=p("div"),h($e.$$.fragment),qt=a(),Ne=p("p"),Ne.textContent=mo,Zt=a(),He=p("p"),He.innerHTML=uo,It=a(),U=p("div"),h(Ce.$$.fragment),Nt=a(),Re=p("p"),Re.innerHTML=ho,Ht=a(),h(ee.$$.fragment),Rt=a(),h(te.$$.fragment),ft=a(),h(Ge.$$.fragment),gt=a(),w=p("div"),h(Be.$$.fragment),Vt=a(),Ve=p("p"),Ve.textContent=fo,Lt=a(),Le=p("p"),Le.innerHTML=go,Et=a(),Ee=p("p"),Ee.innerHTML=_o,St=a(),Se=p("p"),Se.innerHTML=bo,Pt=a(),C=p("div"),h(xe.$$.fragment),Qt=a(),Pe=p("p"),Pe.innerHTML=yo,Xt=a(),h(oe.$$.fragment),Yt=a(),h(ne.$$.fragment),At=a(),h(se.$$.fragment),_t=a(),Ye=p("p"),this.h()},l(e){const n=wo("svelte-u9bgzb",document.head);o=m(n,"META",{name:!0,content:!0}),n.forEach(s),T=r(e),l=m(e,"P",{}),J(l).forEach(s),i=r(e),f(u.$$.fragment,e),t=r(e),f(k.$$.fragment,e),Oe=r(e),ae=m(e,"P",{"data-svelte-h":!0}),M(ae)!=="svelte-sog51v"&&(ae.innerHTML=Ot),De=r(e),re=m(e,"P",{"data-svelte-h":!0}),M(re)!=="svelte-vfdo9a"&&(re.textContent=Dt),Ke=r(e),ie=m(e,"P",{"data-svelte-h":!0}),M(ie)!=="svelte-ihk4bt"&&(ie.innerHTML=Kt),et=r(e),le=m(e,"P",{"data-svelte-h":!0}),M(le)!=="svelte-fg0afc"&&(le.innerHTML=eo),tt=r(e),f(de.$$.fragment,e),ot=r(e),ce=m(e,"UL",{"data-svelte-h":!0}),M(ce)!=="svelte-1gszp1d"&&(ce.innerHTML=to),nt=r(e),f(pe.$$.fragment,e),st=r(e),me=m(e,"UL",{"data-svelte-h":!0}),M(me)!=="svelte-162aebv"&&(me.innerHTML=oo),at=r(e),f(ue.$$.fragment,e),rt=r(e),G=m(e,"DIV",{class:!0});var Z=J(G);f(he.$$.fragment,Z),Tt=r(Z),Je=m(Z,"P",{"data-svelte-h":!0}),M(Je)!=="svelte-17rw8ci"&&(Je.innerHTML=no),Mt=r(Z),je=m(Z,"P",{"data-svelte-h":!0}),M(je)!=="svelte-o55m63"&&(je.innerHTML=so),kt=r(Z),f(Y.$$.fragment,Z),Z.forEach(s),it=r(e),f(fe.$$.fragment,e),lt=r(e),B=m(e,"DIV",{class:!0});var I=J(B);f(ge.$$.fragment,I),vt=r(I),ze=m(I,"P",{"data-svelte-h":!0}),M(ze)!=="svelte-rkichk"&&(ze.textContent=ao),wt=r(I),Fe=m(I,"P",{"data-svelte-h":!0}),M(Fe)!=="svelte-1c3t5ty"&&(Fe.innerHTML=ro),$t=r(I),Ue=m(I,"DIV",{class:!0});var Ae=J(Ue);f(_e.$$.fragment,Ae),Ae.forEach(s),I.forEach(s),dt=r(e),f(be.$$.fragment,e),ct=r(e),W=m(e,"DIV",{class:!0});var Q=J(W);f(ye.$$.fragment,Q),Ct=r(Q),We=m(Q,"P",{"data-svelte-h":!0}),M(We)!=="svelte-qardyf"&&(We.innerHTML=io),Gt=r(Q),z=m(Q,"DIV",{class:!0});var N=J(z);f(Te.$$.fragment,N),Bt=r(N),qe=m(N,"P",{"data-svelte-h":!0}),M(qe)!=="svelte-1nkwh4q"&&(qe.innerHTML=lo),xt=r(N),f(A.$$.fragment,N),Jt=r(N),f(O.$$.fragment,N),N.forEach(s),Q.forEach(s),pt=r(e),f(Me.$$.fragment,e),mt=r(e),q=m(e,"DIV",{class:!0});var X=J(q);f(ke.$$.fragment,X),jt=r(X),Ze=m(X,"P",{"data-svelte-h":!0}),M(Ze)!=="svelte-f4sq5v"&&(Ze.innerHTML=co),zt=r(X),F=m(X,"DIV",{class:!0});var H=J(F);f(ve.$$.fragment,H),Ft=r(H),Ie=m(H,"P",{"data-svelte-h":!0}),M(Ie)!=="svelte-7kyte"&&(Ie.innerHTML=po),Ut=r(H),f(D.$$.fragment,H),Wt=r(H),f(K.$$.fragment,H),H.forEach(s),X.forEach(s),ut=r(e),f(we.$$.fragment,e),ht=r(e),x=m(e,"DIV",{class:!0});var R=J(x);f($e.$$.fragment,R),qt=r(R),Ne=m(R,"P",{"data-svelte-h":!0}),M(Ne)!=="svelte-18enhwc"&&(Ne.textContent=mo),Zt=r(R),He=m(R,"P",{"data-svelte-h":!0}),M(He)!=="svelte-68lg8f"&&(He.innerHTML=uo),It=r(R),U=m(R,"DIV",{class:!0});var V=J(U);f(Ce.$$.fragment,V),Nt=r(V),Re=m(V,"P",{"data-svelte-h":!0}),M(Re)!=="svelte-14znva4"&&(Re.innerHTML=ho),Ht=r(V),f(ee.$$.fragment,V),Rt=r(V),f(te.$$.fragment,V),V.forEach(s),R.forEach(s),ft=r(e),f(Ge.$$.fragment,e),gt=r(e),w=m(e,"DIV",{class:!0});var $=J(w);f(Be.$$.fragment,$),Vt=r($),Ve=m($,"P",{"data-svelte-h":!0}),M(Ve)!=="svelte-1u6ikyr"&&(Ve.textContent=fo),Lt=r($),Le=m($,"P",{"data-svelte-h":!0}),M(Le)!=="svelte-1xohaar"&&(Le.innerHTML=go),Et=r($),Ee=m($,"P",{"data-svelte-h":!0}),M(Ee)!=="svelte-wtyfap"&&(Ee.innerHTML=_o),St=r($),Se=m($,"P",{"data-svelte-h":!0}),M(Se)!=="svelte-68lg8f"&&(Se.innerHTML=bo),Pt=r($),C=m($,"DIV",{class:!0});var E=J(C);f(xe.$$.fragment,E),Qt=r(E),Pe=m(E,"P",{"data-svelte-h":!0}),M(Pe)!=="svelte-1ntan9y"&&(Pe.innerHTML=yo),Xt=r(E),f(oe.$$.fragment,E),Yt=r(E),f(ne.$$.fragment,E),At=r(E),f(se.$$.fragment,E),E.forEach(s),$.forEach(s),_t=r(e),Ye=m(e,"P",{}),J(Ye).forEach(s),this.h()},h(){j(o,"name","hf:doc:metadata"),j(o,"content",qo),j(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),j(w,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,n){c(document.head,o),d(e,T,n),d(e,l,n),d(e,i,n),g(u,e,n),d(e,t,n),g(k,e,n),d(e,Oe,n),d(e,ae,n),d(e,De,n),d(e,re,n),d(e,Ke,n),d(e,ie,n),d(e,et,n),d(e,le,n),d(e,tt,n),g(de,e,n),d(e,ot,n),d(e,ce,n),d(e,nt,n),g(pe,e,n),d(e,st,n),d(e,me,n),d(e,at,n),g(ue,e,n),d(e,rt,n),d(e,G,n),g(he,G,null),c(G,Tt),c(G,Je),c(G,Mt),c(G,je),c(G,kt),g(Y,G,null),d(e,it,n),g(fe,e,n),d(e,lt,n),d(e,B,n),g(ge,B,null),c(B,vt),c(B,ze),c(B,wt),c(B,Fe),c(B,$t),c(B,Ue),g(_e,Ue,null),d(e,dt,n),g(be,e,n),d(e,ct,n),d(e,W,n),g(ye,W,null),c(W,Ct),c(W,We),c(W,Gt),c(W,z),g(Te,z,null),c(z,Bt),c(z,qe),c(z,xt),g(A,z,null),c(z,Jt),g(O,z,null),d(e,pt,n),g(Me,e,n),d(e,mt,n),d(e,q,n),g(ke,q,null),c(q,jt),c(q,Ze),c(q,zt),c(q,F),g(ve,F,null),c(F,Ft),c(F,Ie),c(F,Ut),g(D,F,null),c(F,Wt),g(K,F,null),d(e,ut,n),g(we,e,n),d(e,ht,n),d(e,x,n),g($e,x,null),c(x,qt),c(x,Ne),c(x,Zt),c(x,He),c(x,It),c(x,U),g(Ce,U,null),c(U,Nt),c(U,Re),c(U,Ht),g(ee,U,null),c(U,Rt),g(te,U,null),d(e,ft,n),g(Ge,e,n),d(e,gt,n),d(e,w,n),g(Be,w,null),c(w,Vt),c(w,Ve),c(w,Lt),c(w,Le),c(w,Et),c(w,Ee),c(w,St),c(w,Se),c(w,Pt),c(w,C),g(xe,C,null),c(C,Qt),c(C,Pe),c(C,Xt),g(oe,C,null),c(C,Yt),g(ne,C,null),c(C,At),g(se,C,null),d(e,_t,n),d(e,Ye,n),bt=!0},p(e,[n]){const Z={};n&2&&(Z.$$scope={dirty:n,ctx:e}),Y.$set(Z);const I={};n&2&&(I.$$scope={dirty:n,ctx:e}),A.$set(I);const Ae={};n&2&&(Ae.$$scope={dirty:n,ctx:e}),O.$set(Ae);const Q={};n&2&&(Q.$$scope={dirty:n,ctx:e}),D.$set(Q);const N={};n&2&&(N.$$scope={dirty:n,ctx:e}),K.$set(N);const X={};n&2&&(X.$$scope={dirty:n,ctx:e}),ee.$set(X);const H={};n&2&&(H.$$scope={dirty:n,ctx:e}),te.$set(H);const R={};n&2&&(R.$$scope={dirty:n,ctx:e}),oe.$set(R);const V={};n&2&&(V.$$scope={dirty:n,ctx:e}),ne.$set(V);const $={};n&2&&($.$$scope={dirty:n,ctx:e}),se.$set($)},i(e){bt||(_(u.$$.fragment,e),_(k.$$.fragment,e),_(de.$$.fragment,e),_(pe.$$.fragment,e),_(ue.$$.fragment,e),_(he.$$.fragment,e),_(Y.$$.fragment,e),_(fe.$$.fragment,e),_(ge.$$.fragment,e),_(_e.$$.fragment,e),_(be.$$.fragment,e),_(ye.$$.fragment,e),_(Te.$$.fragment,e),_(A.$$.fragment,e),_(O.$$.fragment,e),_(Me.$$.fragment,e),_(ke.$$.fragment,e),_(ve.$$.fragment,e),_(D.$$.fragment,e),_(K.$$.fragment,e),_(we.$$.fragment,e),_($e.$$.fragment,e),_(Ce.$$.fragment,e),_(ee.$$.fragment,e),_(te.$$.fragment,e),_(Ge.$$.fragment,e),_(Be.$$.fragment,e),_(xe.$$.fragment,e),_(oe.$$.fragment,e),_(ne.$$.fragment,e),_(se.$$.fragment,e),bt=!0)},o(e){b(u.$$.fragment,e),b(k.$$.fragment,e),b(de.$$.fragment,e),b(pe.$$.fragment,e),b(ue.$$.fragment,e),b(he.$$.fragment,e),b(Y.$$.fragment,e),b(fe.$$.fragment,e),b(ge.$$.fragment,e),b(_e.$$.fragment,e),b(be.$$.fragment,e),b(ye.$$.fragment,e),b(Te.$$.fragment,e),b(A.$$.fragment,e),b(O.$$.fragment,e),b(Me.$$.fragment,e),b(ke.$$.fragment,e),b(ve.$$.fragment,e),b(D.$$.fragment,e),b(K.$$.fragment,e),b(we.$$.fragment,e),b($e.$$.fragment,e),b(Ce.$$.fragment,e),b(ee.$$.fragment,e),b(te.$$.fragment,e),b(Ge.$$.fragment,e),b(Be.$$.fragment,e),b(xe.$$.fragment,e),b(oe.$$.fragment,e),b(ne.$$.fragment,e),b(se.$$.fragment,e),bt=!1},d(e){e&&(s(T),s(l),s(i),s(t),s(Oe),s(ae),s(De),s(re),s(Ke),s(ie),s(et),s(le),s(tt),s(ot),s(ce),s(nt),s(st),s(me),s(at),s(rt),s(G),s(it),s(lt),s(B),s(dt),s(ct),s(W),s(pt),s(mt),s(q),s(ut),s(ht),s(x),s(ft),s(gt),s(w),s(_t),s(Ye)),s(o),y(u,e),y(k,e),y(de,e),y(pe,e),y(ue,e),y(he),y(Y),y(fe,e),y(ge),y(_e),y(be,e),y(ye),y(Te),y(A),y(O),y(Me,e),y(ke),y(ve),y(D),y(K),y(we,e),y($e),y(Ce),y(ee),y(te),y(Ge,e),y(Be),y(xe),y(oe),y(ne),y(se)}}}const qo='{"title":"BioGPT","local":"biogpt","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"BioGptConfig","local":"transformers.BioGptConfig","sections":[],"depth":2},{"title":"BioGptTokenizer","local":"transformers.BioGptTokenizer","sections":[],"depth":2},{"title":"BioGptModel","local":"transformers.BioGptModel","sections":[],"depth":2},{"title":"BioGptForCausalLM","local":"transformers.BioGptForCausalLM","sections":[],"depth":2},{"title":"BioGptForTokenClassification","local":"transformers.BioGptForTokenClassification","sections":[],"depth":2},{"title":"BioGptForSequenceClassification","local":"transformers.BioGptForSequenceClassification","sections":[],"depth":2}],"depth":1}';function Zo(v){return Mo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class So extends ko{constructor(o){super(),vo(this,o,Zo,Wo,To,{})}}export{So as component};
