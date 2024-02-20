import{s as Qt,o as Xt,n as V}from"../chunks/scheduler.9bc65507.js";import{S as Et,i as At,g as p,s as r,r as y,A as Yt,h as m,f as s,c as i,j as fe,u as b,x as _,k as ge,y as l,a as d,v as M,d as w,t as k,w as $}from"../chunks/index.707bf1b6.js";import{T as Le}from"../chunks/Tip.c2ecdbf4.js";import{D as ve}from"../chunks/Docstring.17db21ae.js";import{C as Ee}from"../chunks/CodeBlock.54a9f38d.js";import{F as Ot,M as qt}from"../chunks/Markdown.fef84341.js";import{E as rt}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{P as Dt}from"../chunks/PipelineTag.44585822.js";import{H as Ye}from"../chunks/Heading.342b1fa6.js";function Kt(J){let e,c="Example:",t,o,g;return o=new Ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEdQVEpNb2RlbCUyQyUyMEdQVEpDb25maWclMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwR1BULUolMjA2QiUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwR1BUSkNvbmZpZygpJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyMG1vZGVsJTIwZnJvbSUyMHRoZSUyMGNvbmZpZ3VyYXRpb24lMEFtb2RlbCUyMCUzRCUyMEdQVEpNb2RlbChjb25maWd1cmF0aW9uKSUwQSUwQSUyMyUyMEFjY2Vzc2luZyUyMHRoZSUyMG1vZGVsJTIwY29uZmlndXJhdGlvbiUwQWNvbmZpZ3VyYXRpb24lMjAlM0QlMjBtb2RlbC5jb25maWc=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJModel, GPTJConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GPT-J 6B configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = GPTJConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){e=p("p"),e.textContent=c,t=r(),y(o.$$.fragment)},l(n){e=m(n,"P",{"data-svelte-h":!0}),_(e)!=="svelte-11lpom8"&&(e.textContent=c),t=i(n),b(o.$$.fragment,n)},m(n,T){d(n,e,T),d(n,t,T),M(o,n,T),g=!0},p:V,i(n){g||(w(o.$$.fragment,n),g=!0)},o(n){k(o.$$.fragment,n),g=!1},d(n){n&&(s(e),s(t)),$(o,n)}}}function en(J){let e,c=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=p("p"),e.innerHTML=c},l(t){e=m(t,"P",{"data-svelte-h":!0}),_(e)!=="svelte-fincs2"&&(e.innerHTML=c)},m(t,o){d(t,e,o)},p:V,d(t){t&&s(e)}}}function tn(J){let e,c=`This example uses a random model as the real ones are all very big. To get proper results, you should use
EleutherAI/gpt-j-6B instead of hf-internal-testing/tiny-random-gptj. If you get out-of-memory when loading that checkpoint, you can try
adding <code>device_map=&quot;auto&quot;</code> in the <code>from_pretrained</code> call.`;return{c(){e=p("p"),e.innerHTML=c},l(t){e=m(t,"P",{"data-svelte-h":!0}),_(e)!=="svelte-ywmzjv"&&(e.innerHTML=c)},m(t,o){d(t,e,o)},p:V,d(t){t&&s(e)}}}function nn(J){let e,c="Example:",t,o,g;return o=new Ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBHUFRKTW9kZWwlMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmhmLWludGVybmFsLXRlc3RpbmclMkZ0aW55LXJhbmRvbS1ncHRqJTIyKSUwQW1vZGVsJTIwJTNEJTIwR1BUSk1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJoZi1pbnRlcm5hbC10ZXN0aW5nJTJGdGlueS1yYW5kb20tZ3B0aiUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQWxhc3RfaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, GPTJModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-gptj&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJModel.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-gptj&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=p("p"),e.textContent=c,t=r(),y(o.$$.fragment)},l(n){e=m(n,"P",{"data-svelte-h":!0}),_(e)!=="svelte-11lpom8"&&(e.textContent=c),t=i(n),b(o.$$.fragment,n)},m(n,T){d(n,e,T),d(n,t,T),M(o,n,T),g=!0},p:V,i(n){g||(w(o.$$.fragment,n),g=!0)},o(n){k(o.$$.fragment,n),g=!1},d(n){n&&(s(e),s(t)),$(o,n)}}}function on(J){let e,c=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=p("p"),e.innerHTML=c},l(t){e=m(t,"P",{"data-svelte-h":!0}),_(e)!=="svelte-fincs2"&&(e.innerHTML=c)},m(t,o){d(t,e,o)},p:V,d(t){t&&s(e)}}}function sn(J){let e,c=`This example uses a random model as the real ones are all very big. To get proper results, you should use
EleutherAI/gpt-j-6B instead of hf-internal-testing/tiny-random-gptj. If you get out-of-memory when loading that checkpoint, you can try
adding <code>device_map=&quot;auto&quot;</code> in the <code>from_pretrained</code> call.`;return{c(){e=p("p"),e.innerHTML=c},l(t){e=m(t,"P",{"data-svelte-h":!0}),_(e)!=="svelte-ywmzjv"&&(e.innerHTML=c)},m(t,o){d(t,e,o)},p:V,d(t){t&&s(e)}}}function an(J){let e,c="Example:",t,o,g;return o=new Ee({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEdQVEpGb3JDYXVzYWxMTSUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmhmLWludGVybmFsLXRlc3RpbmclMkZ0aW55LXJhbmRvbS1ncHRqJTIyKSUwQW1vZGVsJTIwJTNEJTIwR1BUSkZvckNhdXNhbExNLmZyb21fcHJldHJhaW5lZCglMjJoZi1pbnRlcm5hbC10ZXN0aW5nJTJGdGlueS1yYW5kb20tZ3B0aiUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEaW5wdXRzJTVCJTIyaW5wdXRfaWRzJTIyJTVEKSUwQWxvc3MlMjAlM0QlMjBvdXRwdXRzLmxvc3MlMEFsb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, GPTJForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-gptj&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForCausalLM.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-gptj&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=p("p"),e.textContent=c,t=r(),y(o.$$.fragment)},l(n){e=m(n,"P",{"data-svelte-h":!0}),_(e)!=="svelte-11lpom8"&&(e.textContent=c),t=i(n),b(o.$$.fragment,n)},m(n,T){d(n,e,T),d(n,t,T),M(o,n,T),g=!0},p:V,i(n){g||(w(o.$$.fragment,n),g=!0)},o(n){k(o.$$.fragment,n),g=!1},d(n){n&&(s(e),s(t)),$(o,n)}}}function rn(J){let e,c=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=p("p"),e.innerHTML=c},l(t){e=m(t,"P",{"data-svelte-h":!0}),_(e)!=="svelte-fincs2"&&(e.innerHTML=c)},m(t,o){d(t,e,o)},p:V,d(t){t&&s(e)}}}function ln(J){let e,c=`This example uses a random model as the real ones are all very big. To get proper results, you should use
EleutherAI/gpt-j-6B instead of ydshieh/tiny-random-gptj-for-sequence-classification. If you get out-of-memory when loading that checkpoint, you can try
adding <code>device_map=&quot;auto&quot;</code> in the <code>from_pretrained</code> call.`;return{c(){e=p("p"),e.innerHTML=c},l(t){e=m(t,"P",{"data-svelte-h":!0}),_(e)!=="svelte-106klvj"&&(e.innerHTML=c)},m(t,o){d(t,e,o)},p:V,d(t){t&&s(e)}}}function dn(J){let e,c="Example of single-label classification:",t,o,g;return o=new Ee({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEdQVEpGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyeWRzaGllaCUyRnRpbnktcmFuZG9tLWdwdGotZm9yLXNlcXVlbmNlLWNsYXNzaWZpY2F0aW9uJTIyKSUwQW1vZGVsJTIwJTNEJTIwR1BUSkZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMnlkc2hpZWglMkZ0aW55LXJhbmRvbS1ncHRqLWZvci1zZXF1ZW5jZS1jbGFzc2lmaWNhdGlvbiUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEFwcmVkaWN0ZWRfY2xhc3NfaWQlMjAlM0QlMjBsb2dpdHMuYXJnbWF4KCkuaXRlbSgpJTBBJTBBJTIzJTIwVG8lMjB0cmFpbiUyMGElMjBtb2RlbCUyMG9uJTIwJTYwbnVtX2xhYmVscyU2MCUyMGNsYXNzZXMlMkMlMjB5b3UlMjBjYW4lMjBwYXNzJTIwJTYwbnVtX2xhYmVscyUzRG51bV9sYWJlbHMlNjAlMjB0byUyMCU2MC5mcm9tX3ByZXRyYWluZWQoLi4uKSU2MCUwQW51bV9sYWJlbHMlMjAlM0QlMjBsZW4obW9kZWwuY29uZmlnLmlkMmxhYmVsKSUwQW1vZGVsJTIwJTNEJTIwR1BUSkZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMnlkc2hpZWglMkZ0aW55LXJhbmRvbS1ncHRqLWZvci1zZXF1ZW5jZS1jbGFzc2lmaWNhdGlvbiUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzKSUwQSUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxJTVEKSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, GPTJForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;ydshieh/tiny-random-gptj-for-sequence-classification&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ydshieh/tiny-random-gptj-for-sequence-classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ydshieh/tiny-random-gptj-for-sequence-classification&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=p("p"),e.textContent=c,t=r(),y(o.$$.fragment)},l(n){e=m(n,"P",{"data-svelte-h":!0}),_(e)!=="svelte-ykxpe4"&&(e.textContent=c),t=i(n),b(o.$$.fragment,n)},m(n,T){d(n,e,T),d(n,t,T),M(o,n,T),g=!0},p:V,i(n){g||(w(o.$$.fragment,n),g=!0)},o(n){k(o.$$.fragment,n),g=!1},d(n){n&&(s(e),s(t)),$(o,n)}}}function cn(J){let e,c="Example of multi-label classification:",t,o,g;return o=new Ee({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEdQVEpGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyeWRzaGllaCUyRnRpbnktcmFuZG9tLWdwdGotZm9yLXNlcXVlbmNlLWNsYXNzaWZpY2F0aW9uJTIyKSUwQW1vZGVsJTIwJTNEJTIwR1BUSkZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMnlkc2hpZWglMkZ0aW55LXJhbmRvbS1ncHRqLWZvci1zZXF1ZW5jZS1jbGFzc2lmaWNhdGlvbiUyMiUyQyUyMHByb2JsZW1fdHlwZSUzRCUyMm11bHRpX2xhYmVsX2NsYXNzaWZpY2F0aW9uJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEElMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQXByZWRpY3RlZF9jbGFzc19pZHMlMjAlM0QlMjB0b3JjaC5hcmFuZ2UoMCUyQyUyMGxvZ2l0cy5zaGFwZSU1Qi0xJTVEKSU1QnRvcmNoLnNpZ21vaWQobG9naXRzKS5zcXVlZXplKGRpbSUzRDApJTIwJTNFJTIwMC41JTVEJTBBJTBBJTIzJTIwVG8lMjB0cmFpbiUyMGElMjBtb2RlbCUyMG9uJTIwJTYwbnVtX2xhYmVscyU2MCUyMGNsYXNzZXMlMkMlMjB5b3UlMjBjYW4lMjBwYXNzJTIwJTYwbnVtX2xhYmVscyUzRG51bV9sYWJlbHMlNjAlMjB0byUyMCU2MC5mcm9tX3ByZXRyYWluZWQoLi4uKSU2MCUwQW51bV9sYWJlbHMlMjAlM0QlMjBsZW4obW9kZWwuY29uZmlnLmlkMmxhYmVsKSUwQW1vZGVsJTIwJTNEJTIwR1BUSkZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUwQSUyMCUyMCUyMCUyMCUyMnlkc2hpZWglMkZ0aW55LXJhbmRvbS1ncHRqLWZvci1zZXF1ZW5jZS1jbGFzc2lmaWNhdGlvbiUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIlMEEpJTBBJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2guc3VtKCUwQSUyMCUyMCUyMCUyMHRvcmNoLm5uLmZ1bmN0aW9uYWwub25lX2hvdChwcmVkaWN0ZWRfY2xhc3NfaWRzJTVCTm9uZSUyQyUyMCUzQSU1RC5jbG9uZSgpJTJDJTIwbnVtX2NsYXNzZXMlM0RudW1fbGFiZWxzKSUyQyUyMGRpbSUzRDElMEEpLnRvKHRvcmNoLmZsb2F0KSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, GPTJForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;ydshieh/tiny-random-gptj-for-sequence-classification&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ydshieh/tiny-random-gptj-for-sequence-classification&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.arange(<span class="hljs-number">0</span>, logits.shape[-<span class="hljs-number">1</span>])[torch.sigmoid(logits).squeeze(dim=<span class="hljs-number">0</span>) &gt; <span class="hljs-number">0.5</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;ydshieh/tiny-random-gptj-for-sequence-classification&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.<span class="hljs-built_in">sum</span>(
<span class="hljs-meta">... </span>    torch.nn.functional.one_hot(predicted_class_ids[<span class="hljs-literal">None</span>, :].clone(), num_classes=num_labels), dim=<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>).to(torch.<span class="hljs-built_in">float</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=p("p"),e.textContent=c,t=r(),y(o.$$.fragment)},l(n){e=m(n,"P",{"data-svelte-h":!0}),_(e)!=="svelte-1l8e32d"&&(e.textContent=c),t=i(n),b(o.$$.fragment,n)},m(n,T){d(n,e,T),d(n,t,T),M(o,n,T),g=!0},p:V,i(n){g||(w(o.$$.fragment,n),g=!0)},o(n){k(o.$$.fragment,n),g=!1},d(n){n&&(s(e),s(t)),$(o,n)}}}function pn(J){let e,c=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=p("p"),e.innerHTML=c},l(t){e=m(t,"P",{"data-svelte-h":!0}),_(e)!=="svelte-fincs2"&&(e.innerHTML=c)},m(t,o){d(t,e,o)},p:V,d(t){t&&s(e)}}}function mn(J){let e,c=`This example uses a random model as the real ones are all very big. To get proper results, you should use
EleutherAI/gpt-j-6B instead of hf-internal-testing/tiny-random-gptj. If you get out-of-memory when loading that checkpoint, you can try
adding <code>device_map=&quot;auto&quot;</code> in the <code>from_pretrained</code> call.`;return{c(){e=p("p"),e.innerHTML=c},l(t){e=m(t,"P",{"data-svelte-h":!0}),_(e)!=="svelte-ywmzjv"&&(e.innerHTML=c)},m(t,o){d(t,e,o)},p:V,d(t){t&&s(e)}}}function un(J){let e,c="Example:",t,o,g;return o=new Ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBHUFRKRm9yUXVlc3Rpb25BbnN3ZXJpbmclMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmhmLWludGVybmFsLXRlc3RpbmclMkZ0aW55LXJhbmRvbS1ncHRqJTIyKSUwQW1vZGVsJTIwJTNEJTIwR1BUSkZvclF1ZXN0aW9uQW5zd2VyaW5nLmZyb21fcHJldHJhaW5lZCglMjJoZi1pbnRlcm5hbC10ZXN0aW5nJTJGdGlueS1yYW5kb20tZ3B0aiUyMiklMEElMEFxdWVzdGlvbiUyQyUyMHRleHQlMjAlM0QlMjAlMjJXaG8lMjB3YXMlMjBKaW0lMjBIZW5zb24lM0YlMjIlMkMlMjAlMjJKaW0lMjBIZW5zb24lMjB3YXMlMjBhJTIwbmljZSUyMHB1cHBldCUyMiUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplcihxdWVzdGlvbiUyQyUyMHRleHQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBYW5zd2VyX3N0YXJ0X2luZGV4JTIwJTNEJTIwb3V0cHV0cy5zdGFydF9sb2dpdHMuYXJnbWF4KCklMEFhbnN3ZXJfZW5kX2luZGV4JTIwJTNEJTIwb3V0cHV0cy5lbmRfbG9naXRzLmFyZ21heCgpJTBBJTBBcHJlZGljdF9hbnN3ZXJfdG9rZW5zJTIwJTNEJTIwaW5wdXRzLmlucHV0X2lkcyU1QjAlMkMlMjBhbnN3ZXJfc3RhcnRfaW5kZXglMjAlM0ElMjBhbnN3ZXJfZW5kX2luZGV4JTIwJTJCJTIwMSU1RCUwQSUwQSUyMyUyMHRhcmdldCUyMGlzJTIwJTIybmljZSUyMHB1cHBldCUyMiUwQXRhcmdldF9zdGFydF9pbmRleCUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxNCU1RCklMEF0YXJnZXRfZW5kX2luZGV4JTIwJTNEJTIwdG9yY2gudGVuc29yKCU1QjE1JTVEKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMHN0YXJ0X3Bvc2l0aW9ucyUzRHRhcmdldF9zdGFydF9pbmRleCUyQyUyMGVuZF9wb3NpdGlvbnMlM0R0YXJnZXRfZW5kX2luZGV4KSUwQWxvc3MlMjAlM0QlMjBvdXRwdXRzLmxvc3M=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, GPTJForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-gptj&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-gptj&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`,wrap:!1}}),{c(){e=p("p"),e.textContent=c,t=r(),y(o.$$.fragment)},l(n){e=m(n,"P",{"data-svelte-h":!0}),_(e)!=="svelte-11lpom8"&&(e.textContent=c),t=i(n),b(o.$$.fragment,n)},m(n,T){d(n,e,T),d(n,t,T),M(o,n,T),g=!0},p:V,i(n){g||(w(o.$$.fragment,n),g=!0)},o(n){k(o.$$.fragment,n),g=!1},d(n){n&&(s(e),s(t)),$(o,n)}}}function hn(J){let e,c,t,o,g,n,T=`The bare GPT-J Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,Q,x,P,X,U,I='The <a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJModel">GPTJModel</a> forward method, overrides the <code>__call__</code> special method.',E,u,F,L,we,Je,le,A,oe,S,de,ce,je,D="The GPT-J Model transformer with a language modeling head on top.",Oe,W,pe=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,Ge,B,N,xe,te,Ne='The <a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJForCausalLM">GPTJForCausalLM</a> forward method, overrides the <code>__call__</code> special method.',Ze,se,ke,We,$e,K,ne,ee,qe,H,_e,He,me,Be="The GPT-J Model transformer with a sequence classification head on top (linear layer).",Y,ae,Te=`<a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJForSequenceClassification">GPTJForSequenceClassification</a> uses the last token in order to do the classification, as other causal models
(e.g. GPT, GPT-2, GPT-Neo) do.`,Fe,Z,ye=`Since it does classification on the last token, it requires to know the position of the last token. If a
<code>pad_token_id</code> is defined in the configuration, it finds the last token that is not a padding token in each row. If
no <code>pad_token_id</code> is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when <code>inputs_embeds</code> are passed instead of <code>input_ids</code>, it does the same (take the last value in
each row of the batch).`,Ce,re,Ve=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,Ae,v,z,O,q,ue='The <a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJForSequenceClassification">GPTJForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',De,a,j,be,it,ut,jt,Re,kt,Me,ct,Se,at,Ft,bt,ht=`The GPT-J Model transformer with a span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,Gt,Ke,Ct=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,pt,ze,et,$t,ie,Mt='The <a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJForQuestionAnswering">GPTJForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',xt,tt,Pt,mt,wt,ft,vt;return e=new Ye({props:{title:"GPTJModel",local:"transformers.GPTJModel",headingTag:"h2"}}),o=new ve({props:{name:"class transformers.GPTJModel",anchor:"transformers.GPTJModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTJModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gptj/modeling_gptj.py#L476"}}),P=new ve({props:{name:"forward",anchor:"transformers.GPTJModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.GPTJModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTJModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTJModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPTJModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.n_positions - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTJModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_attention_heads,)</code> or <code>(n_layer, num_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTJModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_dim)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.GPTJModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTJModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTJModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gptj/modeling_gptj.py#L547",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
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
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),u=new Le({props:{$$slots:{default:[en]},$$scope:{ctx:J}}}),L=new Le({props:{warning:!0,$$slots:{default:[tn]},$$scope:{ctx:J}}}),Je=new rt({props:{anchor:"transformers.GPTJModel.forward.example",$$slots:{default:[nn]},$$scope:{ctx:J}}}),A=new Ye({props:{title:"GPTJForCausalLM",local:"transformers.GPTJForCausalLM",headingTag:"h2"}}),de=new ve({props:{name:"class transformers.GPTJForCausalLM",anchor:"transformers.GPTJForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTJForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gptj/modeling_gptj.py#L720"}}),N=new ve({props:{name:"forward",anchor:"transformers.GPTJForCausalLM.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.GPTJForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTJForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTJForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPTJForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.n_positions - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTJForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_attention_heads,)</code> or <code>(n_layer, num_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTJForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_dim)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.GPTJForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTJForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTJForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTJForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gptj/modeling_gptj.py#L823",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
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
`}}),se=new Le({props:{$$slots:{default:[on]},$$scope:{ctx:J}}}),We=new Le({props:{warning:!0,$$slots:{default:[sn]},$$scope:{ctx:J}}}),K=new rt({props:{anchor:"transformers.GPTJForCausalLM.forward.example",$$slots:{default:[an]},$$scope:{ctx:J}}}),ee=new Ye({props:{title:"GPTJForSequenceClassification",local:"transformers.GPTJForSequenceClassification",headingTag:"h2"}}),_e=new ve({props:{name:"class transformers.GPTJForSequenceClassification",anchor:"transformers.GPTJForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTJForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gptj/modeling_gptj.py#L918"}}),z=new ve({props:{name:"forward",anchor:"transformers.GPTJForSequenceClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.GPTJForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTJForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTJForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPTJForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.n_positions - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTJForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_attention_heads,)</code> or <code>(n_layer, num_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTJForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_dim)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.GPTJForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTJForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTJForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTJForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gptj/modeling_gptj.py#L947",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
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
`}}),a=new Le({props:{$$slots:{default:[rn]},$$scope:{ctx:J}}}),be=new Le({props:{warning:!0,$$slots:{default:[ln]},$$scope:{ctx:J}}}),ut=new rt({props:{anchor:"transformers.GPTJForSequenceClassification.forward.example",$$slots:{default:[dn]},$$scope:{ctx:J}}}),Re=new rt({props:{anchor:"transformers.GPTJForSequenceClassification.forward.example-2",$$slots:{default:[cn]},$$scope:{ctx:J}}}),Me=new Ye({props:{title:"GPTJForQuestionAnswering",local:"transformers.GPTJForQuestionAnswering",headingTag:"h2"}}),at=new ve({props:{name:"class transformers.GPTJForQuestionAnswering",anchor:"transformers.GPTJForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTJForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gptj/modeling_gptj.py#L1053"}}),et=new ve({props:{name:"forward",anchor:"transformers.GPTJForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"start_positions",val:": Optional = None"},{name:"end_positions",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.GPTJForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTJForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTJForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPTJForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.n_positions - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTJForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_attention_heads,)</code> or <code>(n_layer, num_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTJForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_dim)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.GPTJForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTJForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTJForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTJForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.GPTJForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gptj/modeling_gptj.py#L1074",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
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
`}}),tt=new Le({props:{$$slots:{default:[pn]},$$scope:{ctx:J}}}),mt=new Le({props:{warning:!0,$$slots:{default:[mn]},$$scope:{ctx:J}}}),ft=new rt({props:{anchor:"transformers.GPTJForQuestionAnswering.forward.example",$$slots:{default:[un]},$$scope:{ctx:J}}}),{c(){y(e.$$.fragment),c=r(),t=p("div"),y(o.$$.fragment),g=r(),n=p("p"),n.innerHTML=T,Q=r(),x=p("div"),y(P.$$.fragment),X=r(),U=p("p"),U.innerHTML=I,E=r(),y(u.$$.fragment),F=r(),y(L.$$.fragment),we=r(),y(Je.$$.fragment),le=r(),y(A.$$.fragment),oe=r(),S=p("div"),y(de.$$.fragment),ce=r(),je=p("p"),je.textContent=D,Oe=r(),W=p("p"),W.innerHTML=pe,Ge=r(),B=p("div"),y(N.$$.fragment),xe=r(),te=p("p"),te.innerHTML=Ne,Ze=r(),y(se.$$.fragment),ke=r(),y(We.$$.fragment),$e=r(),y(K.$$.fragment),ne=r(),y(ee.$$.fragment),qe=r(),H=p("div"),y(_e.$$.fragment),He=r(),me=p("p"),me.textContent=Be,Y=r(),ae=p("p"),ae.innerHTML=Te,Fe=r(),Z=p("p"),Z.innerHTML=ye,Ce=r(),re=p("p"),re.innerHTML=Ve,Ae=r(),v=p("div"),y(z.$$.fragment),O=r(),q=p("p"),q.innerHTML=ue,De=r(),y(a.$$.fragment),j=r(),y(be.$$.fragment),it=r(),y(ut.$$.fragment),jt=r(),y(Re.$$.fragment),kt=r(),y(Me.$$.fragment),ct=r(),Se=p("div"),y(at.$$.fragment),Ft=r(),bt=p("p"),bt.innerHTML=ht,Gt=r(),Ke=p("p"),Ke.innerHTML=Ct,pt=r(),ze=p("div"),y(et.$$.fragment),$t=r(),ie=p("p"),ie.innerHTML=Mt,xt=r(),y(tt.$$.fragment),Pt=r(),y(mt.$$.fragment),wt=r(),y(ft.$$.fragment),this.h()},l(h){b(e.$$.fragment,h),c=i(h),t=m(h,"DIV",{class:!0});var C=fe(t);b(o.$$.fragment,C),g=i(C),n=m(C,"P",{"data-svelte-h":!0}),_(n)!=="svelte-10fsg68"&&(n.innerHTML=T),Q=i(C),x=m(C,"DIV",{class:!0});var Qe=fe(x);b(P.$$.fragment,Qe),X=i(Qe),U=m(Qe,"P",{"data-svelte-h":!0}),_(U)!=="svelte-157fv64"&&(U.innerHTML=I),E=i(Qe),b(u.$$.fragment,Qe),F=i(Qe),b(L.$$.fragment,Qe),we=i(Qe),b(Je.$$.fragment,Qe),Qe.forEach(s),C.forEach(s),le=i(h),b(A.$$.fragment,h),oe=i(h),S=m(h,"DIV",{class:!0});var Pe=fe(S);b(de.$$.fragment,Pe),ce=i(Pe),je=m(Pe,"P",{"data-svelte-h":!0}),_(je)!=="svelte-1p892on"&&(je.textContent=D),Oe=i(Pe),W=m(Pe,"P",{"data-svelte-h":!0}),_(W)!=="svelte-68lg8f"&&(W.innerHTML=pe),Ge=i(Pe),B=m(Pe,"DIV",{class:!0});var Xe=fe(B);b(N.$$.fragment,Xe),xe=i(Xe),te=m(Xe,"P",{"data-svelte-h":!0}),_(te)!=="svelte-sssrz8"&&(te.innerHTML=Ne),Ze=i(Xe),b(se.$$.fragment,Xe),ke=i(Xe),b(We.$$.fragment,Xe),$e=i(Xe),b(K.$$.fragment,Xe),Xe.forEach(s),Pe.forEach(s),ne=i(h),b(ee.$$.fragment,h),qe=i(h),H=m(h,"DIV",{class:!0});var R=fe(H);b(_e.$$.fragment,R),He=i(R),me=m(R,"P",{"data-svelte-h":!0}),_(me)!=="svelte-ujk30i"&&(me.textContent=Be),Y=i(R),ae=m(R,"P",{"data-svelte-h":!0}),_(ae)!=="svelte-16megri"&&(ae.innerHTML=Te),Fe=i(R),Z=m(R,"P",{"data-svelte-h":!0}),_(Z)!=="svelte-10ugs3m"&&(Z.innerHTML=ye),Ce=i(R),re=m(R,"P",{"data-svelte-h":!0}),_(re)!=="svelte-68lg8f"&&(re.innerHTML=Ve),Ae=i(R),v=m(R,"DIV",{class:!0});var he=fe(v);b(z.$$.fragment,he),O=i(he),q=m(he,"P",{"data-svelte-h":!0}),_(q)!=="svelte-ila1kg"&&(q.innerHTML=ue),De=i(he),b(a.$$.fragment,he),j=i(he),b(be.$$.fragment,he),it=i(he),b(ut.$$.fragment,he),jt=i(he),b(Re.$$.fragment,he),he.forEach(s),R.forEach(s),kt=i(h),b(Me.$$.fragment,h),ct=i(h),Se=m(h,"DIV",{class:!0});var nt=fe(Se);b(at.$$.fragment,nt),Ft=i(nt),bt=m(nt,"P",{"data-svelte-h":!0}),_(bt)!=="svelte-lq2977"&&(bt.innerHTML=ht),Gt=i(nt),Ke=m(nt,"P",{"data-svelte-h":!0}),_(Ke)!=="svelte-68lg8f"&&(Ke.innerHTML=Ct),pt=i(nt),ze=m(nt,"DIV",{class:!0});var Ue=fe(ze);b(et.$$.fragment,Ue),$t=i(Ue),ie=m(Ue,"P",{"data-svelte-h":!0}),_(ie)!=="svelte-1de1fls"&&(ie.innerHTML=Mt),xt=i(Ue),b(tt.$$.fragment,Ue),Pt=i(Ue),b(mt.$$.fragment,Ue),wt=i(Ue),b(ft.$$.fragment,Ue),Ue.forEach(s),nt.forEach(s),this.h()},h(){ge(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ge(t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ge(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ge(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ge(v,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ge(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ge(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ge(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(h,C){M(e,h,C),d(h,c,C),d(h,t,C),M(o,t,null),l(t,g),l(t,n),l(t,Q),l(t,x),M(P,x,null),l(x,X),l(x,U),l(x,E),M(u,x,null),l(x,F),M(L,x,null),l(x,we),M(Je,x,null),d(h,le,C),M(A,h,C),d(h,oe,C),d(h,S,C),M(de,S,null),l(S,ce),l(S,je),l(S,Oe),l(S,W),l(S,Ge),l(S,B),M(N,B,null),l(B,xe),l(B,te),l(B,Ze),M(se,B,null),l(B,ke),M(We,B,null),l(B,$e),M(K,B,null),d(h,ne,C),M(ee,h,C),d(h,qe,C),d(h,H,C),M(_e,H,null),l(H,He),l(H,me),l(H,Y),l(H,ae),l(H,Fe),l(H,Z),l(H,Ce),l(H,re),l(H,Ae),l(H,v),M(z,v,null),l(v,O),l(v,q),l(v,De),M(a,v,null),l(v,j),M(be,v,null),l(v,it),M(ut,v,null),l(v,jt),M(Re,v,null),d(h,kt,C),M(Me,h,C),d(h,ct,C),d(h,Se,C),M(at,Se,null),l(Se,Ft),l(Se,bt),l(Se,Gt),l(Se,Ke),l(Se,pt),l(Se,ze),M(et,ze,null),l(ze,$t),l(ze,ie),l(ze,xt),M(tt,ze,null),l(ze,Pt),M(mt,ze,null),l(ze,wt),M(ft,ze,null),vt=!0},p(h,C){const Qe={};C&2&&(Qe.$$scope={dirty:C,ctx:h}),u.$set(Qe);const Pe={};C&2&&(Pe.$$scope={dirty:C,ctx:h}),L.$set(Pe);const Xe={};C&2&&(Xe.$$scope={dirty:C,ctx:h}),Je.$set(Xe);const R={};C&2&&(R.$$scope={dirty:C,ctx:h}),se.$set(R);const he={};C&2&&(he.$$scope={dirty:C,ctx:h}),We.$set(he);const nt={};C&2&&(nt.$$scope={dirty:C,ctx:h}),K.$set(nt);const Ue={};C&2&&(Ue.$$scope={dirty:C,ctx:h}),a.$set(Ue);const Zt={};C&2&&(Zt.$$scope={dirty:C,ctx:h}),be.$set(Zt);const Ut={};C&2&&(Ut.$$scope={dirty:C,ctx:h}),ut.$set(Ut);const gt={};C&2&&(gt.$$scope={dirty:C,ctx:h}),Re.$set(gt);const zt={};C&2&&(zt.$$scope={dirty:C,ctx:h}),tt.$set(zt);const _t={};C&2&&(_t.$$scope={dirty:C,ctx:h}),mt.$set(_t);const It={};C&2&&(It.$$scope={dirty:C,ctx:h}),ft.$set(It)},i(h){vt||(w(e.$$.fragment,h),w(o.$$.fragment,h),w(P.$$.fragment,h),w(u.$$.fragment,h),w(L.$$.fragment,h),w(Je.$$.fragment,h),w(A.$$.fragment,h),w(de.$$.fragment,h),w(N.$$.fragment,h),w(se.$$.fragment,h),w(We.$$.fragment,h),w(K.$$.fragment,h),w(ee.$$.fragment,h),w(_e.$$.fragment,h),w(z.$$.fragment,h),w(a.$$.fragment,h),w(be.$$.fragment,h),w(ut.$$.fragment,h),w(Re.$$.fragment,h),w(Me.$$.fragment,h),w(at.$$.fragment,h),w(et.$$.fragment,h),w(tt.$$.fragment,h),w(mt.$$.fragment,h),w(ft.$$.fragment,h),vt=!0)},o(h){k(e.$$.fragment,h),k(o.$$.fragment,h),k(P.$$.fragment,h),k(u.$$.fragment,h),k(L.$$.fragment,h),k(Je.$$.fragment,h),k(A.$$.fragment,h),k(de.$$.fragment,h),k(N.$$.fragment,h),k(se.$$.fragment,h),k(We.$$.fragment,h),k(K.$$.fragment,h),k(ee.$$.fragment,h),k(_e.$$.fragment,h),k(z.$$.fragment,h),k(a.$$.fragment,h),k(be.$$.fragment,h),k(ut.$$.fragment,h),k(Re.$$.fragment,h),k(Me.$$.fragment,h),k(at.$$.fragment,h),k(et.$$.fragment,h),k(tt.$$.fragment,h),k(mt.$$.fragment,h),k(ft.$$.fragment,h),vt=!1},d(h){h&&(s(c),s(t),s(le),s(oe),s(S),s(ne),s(qe),s(H),s(kt),s(ct),s(Se)),$(e,h),$(o),$(P),$(u),$(L),$(Je),$(A,h),$(de),$(N),$(se),$(We),$(K),$(ee,h),$(_e),$(z),$(a),$(be),$(ut),$(Re),$(Me,h),$(at),$(et),$(tt),$(mt),$(ft)}}}function fn(J){let e,c;return e=new qt({props:{$$slots:{default:[hn]},$$scope:{ctx:J}}}),{c(){y(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,o){M(e,t,o),c=!0},p(t,o){const g={};o&2&&(g.$$scope={dirty:o,ctx:t}),e.$set(g)},i(t){c||(w(e.$$.fragment,t),c=!0)},o(t){k(e.$$.fragment,t),c=!1},d(t){$(e,t)}}}function gn(J){let e,c="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,o,g="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",n,T,Q=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,x,P,X=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,U,I,E=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=p("p"),e.innerHTML=c,t=r(),o=p("ul"),o.innerHTML=g,n=r(),T=p("p"),T.innerHTML=Q,x=r(),P=p("ul"),P.innerHTML=X,U=r(),I=p("p"),I.innerHTML=E},l(u){e=m(u,"P",{"data-svelte-h":!0}),_(e)!=="svelte-1ajbfxg"&&(e.innerHTML=c),t=i(u),o=m(u,"UL",{"data-svelte-h":!0}),_(o)!=="svelte-qm1t26"&&(o.innerHTML=g),n=i(u),T=m(u,"P",{"data-svelte-h":!0}),_(T)!=="svelte-1v9qsc5"&&(T.innerHTML=Q),x=i(u),P=m(u,"UL",{"data-svelte-h":!0}),_(P)!=="svelte-15scerc"&&(P.innerHTML=X),U=i(u),I=m(u,"P",{"data-svelte-h":!0}),_(I)!=="svelte-1an3odd"&&(I.innerHTML=E)},m(u,F){d(u,e,F),d(u,t,F),d(u,o,F),d(u,n,F),d(u,T,F),d(u,x,F),d(u,P,F),d(u,U,F),d(u,I,F)},p:V,d(u){u&&(s(e),s(t),s(o),s(n),s(T),s(x),s(P),s(U),s(I))}}}function _n(J){let e,c=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=p("p"),e.innerHTML=c},l(t){e=m(t,"P",{"data-svelte-h":!0}),_(e)!=="svelte-fincs2"&&(e.innerHTML=c)},m(t,o){d(t,e,o)},p:V,d(t){t&&s(e)}}}function Tn(J){let e,c="Example:",t,o,g;return o=new Ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkdQVEpNb2RlbCUwQWltcG9ydCUyMHRlbnNvcmZsb3clMjBhcyUyMHRmJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyRWxldXRoZXJBSSUyRmdwdC1qLTZCJTIyKSUwQW1vZGVsJTIwJTNEJTIwVEZHUFRKTW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMkVsZXV0aGVyQUklMkZncHQtai02QiUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIydGYlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKGlucHV0cyklMEElMEFsYXN0X2hpZGRlbl9zdGF0ZXMlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRl",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFGPTJModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGPTJModel.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=p("p"),e.textContent=c,t=r(),y(o.$$.fragment)},l(n){e=m(n,"P",{"data-svelte-h":!0}),_(e)!=="svelte-11lpom8"&&(e.textContent=c),t=i(n),b(o.$$.fragment,n)},m(n,T){d(n,e,T),d(n,t,T),M(o,n,T),g=!0},p:V,i(n){g||(w(o.$$.fragment,n),g=!0)},o(n){k(o.$$.fragment,n),g=!1},d(n){n&&(s(e),s(t)),$(o,n)}}}function yn(J){let e,c="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,o,g="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",n,T,Q=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,x,P,X=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,U,I,E=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=p("p"),e.innerHTML=c,t=r(),o=p("ul"),o.innerHTML=g,n=r(),T=p("p"),T.innerHTML=Q,x=r(),P=p("ul"),P.innerHTML=X,U=r(),I=p("p"),I.innerHTML=E},l(u){e=m(u,"P",{"data-svelte-h":!0}),_(e)!=="svelte-1ajbfxg"&&(e.innerHTML=c),t=i(u),o=m(u,"UL",{"data-svelte-h":!0}),_(o)!=="svelte-qm1t26"&&(o.innerHTML=g),n=i(u),T=m(u,"P",{"data-svelte-h":!0}),_(T)!=="svelte-1v9qsc5"&&(T.innerHTML=Q),x=i(u),P=m(u,"UL",{"data-svelte-h":!0}),_(P)!=="svelte-15scerc"&&(P.innerHTML=X),U=i(u),I=m(u,"P",{"data-svelte-h":!0}),_(I)!=="svelte-1an3odd"&&(I.innerHTML=E)},m(u,F){d(u,e,F),d(u,t,F),d(u,o,F),d(u,n,F),d(u,T,F),d(u,x,F),d(u,P,F),d(u,U,F),d(u,I,F)},p:V,d(u){u&&(s(e),s(t),s(o),s(n),s(T),s(x),s(P),s(U),s(I))}}}function bn(J){let e,c=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=p("p"),e.innerHTML=c},l(t){e=m(t,"P",{"data-svelte-h":!0}),_(e)!=="svelte-fincs2"&&(e.innerHTML=c)},m(t,o){d(t,e,o)},p:V,d(t){t&&s(e)}}}function Mn(J){let e,c="Example:",t,o,g;return o=new Ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkdQVEpGb3JDYXVzYWxMTSUwQWltcG9ydCUyMHRlbnNvcmZsb3clMjBhcyUyMHRmJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyRWxldXRoZXJBSSUyRmdwdC1qLTZCJTIyKSUwQW1vZGVsJTIwJTNEJTIwVEZHUFRKRm9yQ2F1c2FsTE0uZnJvbV9wcmV0cmFpbmVkKCUyMkVsZXV0aGVyQUklMkZncHQtai02QiUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIydGYlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKGlucHV0cyklMEFsb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFGPTJForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGPTJForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=p("p"),e.textContent=c,t=r(),y(o.$$.fragment)},l(n){e=m(n,"P",{"data-svelte-h":!0}),_(e)!=="svelte-11lpom8"&&(e.textContent=c),t=i(n),b(o.$$.fragment,n)},m(n,T){d(n,e,T),d(n,t,T),M(o,n,T),g=!0},p:V,i(n){g||(w(o.$$.fragment,n),g=!0)},o(n){k(o.$$.fragment,n),g=!1},d(n){n&&(s(e),s(t)),$(o,n)}}}function wn(J){let e,c="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,o,g="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",n,T,Q=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,x,P,X=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,U,I,E=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=p("p"),e.innerHTML=c,t=r(),o=p("ul"),o.innerHTML=g,n=r(),T=p("p"),T.innerHTML=Q,x=r(),P=p("ul"),P.innerHTML=X,U=r(),I=p("p"),I.innerHTML=E},l(u){e=m(u,"P",{"data-svelte-h":!0}),_(e)!=="svelte-1ajbfxg"&&(e.innerHTML=c),t=i(u),o=m(u,"UL",{"data-svelte-h":!0}),_(o)!=="svelte-qm1t26"&&(o.innerHTML=g),n=i(u),T=m(u,"P",{"data-svelte-h":!0}),_(T)!=="svelte-1v9qsc5"&&(T.innerHTML=Q),x=i(u),P=m(u,"UL",{"data-svelte-h":!0}),_(P)!=="svelte-15scerc"&&(P.innerHTML=X),U=i(u),I=m(u,"P",{"data-svelte-h":!0}),_(I)!=="svelte-1an3odd"&&(I.innerHTML=E)},m(u,F){d(u,e,F),d(u,t,F),d(u,o,F),d(u,n,F),d(u,T,F),d(u,x,F),d(u,P,F),d(u,U,F),d(u,I,F)},p:V,d(u){u&&(s(e),s(t),s(o),s(n),s(T),s(x),s(P),s(U),s(I))}}}function kn(J){let e,c=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=p("p"),e.innerHTML=c},l(t){e=m(t,"P",{"data-svelte-h":!0}),_(e)!=="svelte-fincs2"&&(e.innerHTML=c)},m(t,o){d(t,e,o)},p:V,d(t){t&&s(e)}}}function $n(J){let e,c="Example:",t,o,g;return o=new Ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkdQVEpGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uJTBBaW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJFbGV1dGhlckFJJTJGZ3B0LWotNkIlMjIpJTBBbW9kZWwlMjAlM0QlMjBURkdQVEpGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJFbGV1dGhlckFJJTJGZ3B0LWotNkIlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyKSUwQSUwQWxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEFwcmVkaWN0ZWRfY2xhc3NfaWQlMjAlM0QlMjBpbnQodGYubWF0aC5hcmdtYXgobG9naXRzJTJDJTIwYXhpcyUzRC0xKSU1QjAlNUQp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFGPTJForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGPTJForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])`,wrap:!1}}),{c(){e=p("p"),e.textContent=c,t=r(),y(o.$$.fragment)},l(n){e=m(n,"P",{"data-svelte-h":!0}),_(e)!=="svelte-11lpom8"&&(e.textContent=c),t=i(n),b(o.$$.fragment,n)},m(n,T){d(n,e,T),d(n,t,T),M(o,n,T),g=!0},p:V,i(n){g||(w(o.$$.fragment,n),g=!0)},o(n){k(o.$$.fragment,n),g=!1},d(n){n&&(s(e),s(t)),$(o,n)}}}function vn(J){let e,c;return e=new Ee({props:{code:"JTIzJTIwVG8lMjB0cmFpbiUyMGElMjBtb2RlbCUyMG9uJTIwJTYwbnVtX2xhYmVscyU2MCUyMGNsYXNzZXMlMkMlMjB5b3UlMjBjYW4lMjBwYXNzJTIwJTYwbnVtX2xhYmVscyUzRG51bV9sYWJlbHMlNjAlMjB0byUyMCU2MC5mcm9tX3ByZXRyYWluZWQoLi4uKSU2MCUwQW51bV9sYWJlbHMlMjAlM0QlMjBsZW4obW9kZWwuY29uZmlnLmlkMmxhYmVsKSUwQW1vZGVsJTIwJTNEJTIwVEZHUFRKRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyRWxldXRoZXJBSSUyRmdwdC1qLTZCJTIyJTJDJTIwbnVtX2xhYmVscyUzRG51bV9sYWJlbHMpJTBBJTBBbGFiZWxzJTIwJTNEJTIwdGYuY29uc3RhbnQoMSklMEFsb3NzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMlMkMlMjBsYWJlbHMlM0RsYWJlbHMpLmxvc3M=",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`</span>\n<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)\n<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGPTJForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>, num_labels=num_labels)\n\n<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)\n<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss',wrap:!1}}),{c(){y(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,o){M(e,t,o),c=!0},p:V,i(t){c||(w(e.$$.fragment,t),c=!0)},o(t){k(e.$$.fragment,t),c=!1},d(t){$(e,t)}}}function Jn(J){let e,c="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,o,g="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",n,T,Q=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,x,P,X=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,U,I,E=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=p("p"),e.innerHTML=c,t=r(),o=p("ul"),o.innerHTML=g,n=r(),T=p("p"),T.innerHTML=Q,x=r(),P=p("ul"),P.innerHTML=X,U=r(),I=p("p"),I.innerHTML=E},l(u){e=m(u,"P",{"data-svelte-h":!0}),_(e)!=="svelte-1ajbfxg"&&(e.innerHTML=c),t=i(u),o=m(u,"UL",{"data-svelte-h":!0}),_(o)!=="svelte-qm1t26"&&(o.innerHTML=g),n=i(u),T=m(u,"P",{"data-svelte-h":!0}),_(T)!=="svelte-1v9qsc5"&&(T.innerHTML=Q),x=i(u),P=m(u,"UL",{"data-svelte-h":!0}),_(P)!=="svelte-15scerc"&&(P.innerHTML=X),U=i(u),I=m(u,"P",{"data-svelte-h":!0}),_(I)!=="svelte-1an3odd"&&(I.innerHTML=E)},m(u,F){d(u,e,F),d(u,t,F),d(u,o,F),d(u,n,F),d(u,T,F),d(u,x,F),d(u,P,F),d(u,U,F),d(u,I,F)},p:V,d(u){u&&(s(e),s(t),s(o),s(n),s(T),s(x),s(P),s(U),s(I))}}}function jn(J){let e,c=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=p("p"),e.innerHTML=c},l(t){e=m(t,"P",{"data-svelte-h":!0}),_(e)!=="svelte-fincs2"&&(e.innerHTML=c)},m(t,o){d(t,e,o)},p:V,d(t){t&&s(e)}}}function Gn(J){let e,c="Example:",t,o,g;return o=new Ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkdQVEpGb3JRdWVzdGlvbkFuc3dlcmluZyUwQWltcG9ydCUyMHRlbnNvcmZsb3clMjBhcyUyMHRmJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyRWxldXRoZXJBSSUyRmdwdC1qLTZCJTIyKSUwQW1vZGVsJTIwJTNEJTIwVEZHUFRKRm9yUXVlc3Rpb25BbnN3ZXJpbmcuZnJvbV9wcmV0cmFpbmVkKCUyMkVsZXV0aGVyQUklMkZncHQtai02QiUyMiklMEElMEFxdWVzdGlvbiUyQyUyMHRleHQlMjAlM0QlMjAlMjJXaG8lMjB3YXMlMjBKaW0lMjBIZW5zb24lM0YlMjIlMkMlMjAlMjJKaW0lMjBIZW5zb24lMjB3YXMlMjBhJTIwbmljZSUyMHB1cHBldCUyMiUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplcihxdWVzdGlvbiUyQyUyMHRleHQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEFhbnN3ZXJfc3RhcnRfaW5kZXglMjAlM0QlMjBpbnQodGYubWF0aC5hcmdtYXgob3V0cHV0cy5zdGFydF9sb2dpdHMlMkMlMjBheGlzJTNELTEpJTVCMCU1RCklMEFhbnN3ZXJfZW5kX2luZGV4JTIwJTNEJTIwaW50KHRmLm1hdGguYXJnbWF4KG91dHB1dHMuZW5kX2xvZ2l0cyUyQyUyMGF4aXMlM0QtMSklNUIwJTVEKSUwQSUwQXByZWRpY3RfYW5zd2VyX3Rva2VucyUyMCUzRCUyMGlucHV0cy5pbnB1dF9pZHMlNUIwJTJDJTIwYW5zd2VyX3N0YXJ0X2luZGV4JTIwJTNBJTIwYW5zd2VyX2VuZF9pbmRleCUyMCUyQiUyMDElNUQ=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFGPTJForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGPTJForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]`,wrap:!1}}),{c(){e=p("p"),e.textContent=c,t=r(),y(o.$$.fragment)},l(n){e=m(n,"P",{"data-svelte-h":!0}),_(e)!=="svelte-11lpom8"&&(e.textContent=c),t=i(n),b(o.$$.fragment,n)},m(n,T){d(n,e,T),d(n,t,T),M(o,n,T),g=!0},p:V,i(n){g||(w(o.$$.fragment,n),g=!0)},o(n){k(o.$$.fragment,n),g=!1},d(n){n&&(s(e),s(t)),$(o,n)}}}function xn(J){let e,c;return e=new Ee({props:{code:"JTIzJTIwdGFyZ2V0JTIwaXMlMjAlMjJuaWNlJTIwcHVwcGV0JTIyJTBBdGFyZ2V0X3N0YXJ0X2luZGV4JTIwJTNEJTIwdGYuY29uc3RhbnQoJTVCMTQlNUQpJTBBdGFyZ2V0X2VuZF9pbmRleCUyMCUzRCUyMHRmLmNvbnN0YW50KCU1QjE1JTVEKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMHN0YXJ0X3Bvc2l0aW9ucyUzRHRhcmdldF9zdGFydF9pbmRleCUyQyUyMGVuZF9wb3NpdGlvbnMlM0R0YXJnZXRfZW5kX2luZGV4KSUwQWxvc3MlMjAlM0QlMjB0Zi5tYXRoLnJlZHVjZV9tZWFuKG91dHB1dHMubG9zcyk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = tf.constant([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)`,wrap:!1}}),{c(){y(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,o){M(e,t,o),c=!0},p:V,i(t){c||(w(e.$$.fragment,t),c=!0)},o(t){k(e.$$.fragment,t),c=!1},d(t){$(e,t)}}}function Fn(J){let e,c,t,o,g,n,T="The bare GPT-J Model transformer outputting raw hidden-states without any specific head on top.",Q,x,P=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,X,U,I=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,E,u,F,L,we,Je,le,A='The <a href="/docs/transformers/main/en/model_doc/gptj#transformers.TFGPTJModel">TFGPTJModel</a> forward method, overrides the <code>__call__</code> special method.',oe,S,de,ce,je,D,Oe,W,pe,Ge,B,N="The GPT-J Model transformer with a language modeling head on top.",xe,te,Ne=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Ze,se,ke=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,We,$e,K,ne,ee,qe,H,_e='The <a href="/docs/transformers/main/en/model_doc/gptj#transformers.TFGPTJForCausalLM">TFGPTJForCausalLM</a> forward method, overrides the <code>__call__</code> special method.',He,me,Be,Y,ae,Te,Fe,Z,ye,Ce,re,Ve="The GPT-J Model transformer with a sequence classification head on top (linear layer).",Ae,v,z=`<a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJForSequenceClassification">GPTJForSequenceClassification</a> uses the last token in order to do the classification, as other causal models
(e.g. GPT, GPT-2, GPT-Neo) do.`,O,q,ue=`Since it does classification on the last token, it requires to know the position of the last token. If a
<code>pad_token_id</code> is defined in the configuration, it finds the last token that is not a padding token in each row. If
no <code>pad_token_id</code> is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when <code>inputs_embeds</code> are passed instead of <code>input_ids</code>, it does the same (take the last value in
each row of the batch).`,De,a,j=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,be,it,ut=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,jt,Re,kt,Me,ct,Se,at,Ft='The <a href="/docs/transformers/main/en/model_doc/gptj#transformers.TFGPTJForSequenceClassification">TFGPTJForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',bt,ht,Gt,Ke,Ct,pt,ze,et,$t,ie,Mt,xt,tt,Pt=`The GPT-J Model transformer with a span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,mt,wt,ft=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,vt,h,C=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,Qe,Pe,Xe,R,he,nt,Ue,Zt='The <a href="/docs/transformers/main/en/model_doc/gptj#transformers.TFGPTJForQuestionAnswering">TFGPTJForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',Ut,gt,zt,_t,It,Jt,Wt;return e=new Ye({props:{title:"TFGPTJModel",local:"transformers.TFGPTJModel",headingTag:"h2"}}),o=new ve({props:{name:"class transformers.TFGPTJModel",anchor:"transformers.TFGPTJModel",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPTJModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gptj/modeling_tf_gptj.py#L683"}}),u=new Le({props:{$$slots:{default:[gn]},$$scope:{ctx:J}}}),we=new ve({props:{name:"call",anchor:"transformers.TFGPTJModel.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"past_key_values",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"use_cache",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPTJModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPTJModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.TFGPTJModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFGPTJModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFGPTJModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFGPTJModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFGPTJModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFGPTJModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFGPTJModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFGPTJModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPTJModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPTJModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gptj/modeling_tf_gptj.py#L692",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
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
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),S=new Le({props:{$$slots:{default:[_n]},$$scope:{ctx:J}}}),ce=new rt({props:{anchor:"transformers.TFGPTJModel.call.example",$$slots:{default:[Tn]},$$scope:{ctx:J}}}),D=new Ye({props:{title:"TFGPTJForCausalLM",local:"transformers.TFGPTJForCausalLM",headingTag:"h2"}}),pe=new ve({props:{name:"class transformers.TFGPTJForCausalLM",anchor:"transformers.TFGPTJForCausalLM",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPTJForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gptj/modeling_tf_gptj.py#L746"}}),$e=new Le({props:{$$slots:{default:[yn]},$$scope:{ctx:J}}}),ee=new ve({props:{name:"call",anchor:"transformers.TFGPTJForCausalLM.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"past_key_values",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"use_cache",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPTJForCausalLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPTJForCausalLM.call.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.TFGPTJForCausalLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFGPTJForCausalLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFGPTJForCausalLM.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFGPTJForCausalLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFGPTJForCausalLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFGPTJForCausalLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFGPTJForCausalLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFGPTJForCausalLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPTJForCausalLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPTJForCausalLM.call.labels",description:`<strong>labels</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gptj/modeling_tf_gptj.py#L792",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) — Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) — Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
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
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),me=new Le({props:{$$slots:{default:[bn]},$$scope:{ctx:J}}}),Y=new rt({props:{anchor:"transformers.TFGPTJForCausalLM.call.example",$$slots:{default:[Mn]},$$scope:{ctx:J}}}),Te=new Ye({props:{title:"TFGPTJForSequenceClassification",local:"transformers.TFGPTJForSequenceClassification",headingTag:"h2"}}),ye=new ve({props:{name:"class transformers.TFGPTJForSequenceClassification",anchor:"transformers.TFGPTJForSequenceClassification",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPTJForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gptj/modeling_tf_gptj.py#L870"}}),Re=new Le({props:{$$slots:{default:[wn]},$$scope:{ctx:J}}}),ct=new ve({props:{name:"call",anchor:"transformers.TFGPTJForSequenceClassification.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"past_key_values",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"use_cache",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPTJForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPTJForSequenceClassification.call.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.TFGPTJForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFGPTJForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFGPTJForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFGPTJForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFGPTJForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFGPTJForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFGPTJForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFGPTJForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPTJForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPTJForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gptj/modeling_tf_gptj.py#L900",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) — Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
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
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ht=new Le({props:{$$slots:{default:[kn]},$$scope:{ctx:J}}}),Ke=new rt({props:{anchor:"transformers.TFGPTJForSequenceClassification.call.example",$$slots:{default:[$n]},$$scope:{ctx:J}}}),pt=new rt({props:{anchor:"transformers.TFGPTJForSequenceClassification.call.example-2",$$slots:{default:[vn]},$$scope:{ctx:J}}}),et=new Ye({props:{title:"TFGPTJForQuestionAnswering",local:"transformers.TFGPTJForQuestionAnswering",headingTag:"h2"}}),Mt=new ve({props:{name:"class transformers.TFGPTJForQuestionAnswering",anchor:"transformers.TFGPTJForQuestionAnswering",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPTJForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gptj/modeling_tf_gptj.py#L1004"}}),Pe=new Le({props:{$$slots:{default:[Jn]},$$scope:{ctx:J}}}),he=new ve({props:{name:"call",anchor:"transformers.TFGPTJForQuestionAnswering.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"past_key_values",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"start_positions",val:": np.ndarray | tf.Tensor | None = None"},{name:"end_positions",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPTJForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gptj/modeling_tf_gptj.py#L1023",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>start_positions</code> and <code>end_positions</code> are provided) — Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) — Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) — Span-end scores (before SoftMax).</p>
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
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),gt=new Le({props:{$$slots:{default:[jn]},$$scope:{ctx:J}}}),_t=new rt({props:{anchor:"transformers.TFGPTJForQuestionAnswering.call.example",$$slots:{default:[Gn]},$$scope:{ctx:J}}}),Jt=new rt({props:{anchor:"transformers.TFGPTJForQuestionAnswering.call.example-2",$$slots:{default:[xn]},$$scope:{ctx:J}}}),{c(){y(e.$$.fragment),c=r(),t=p("div"),y(o.$$.fragment),g=r(),n=p("p"),n.textContent=T,Q=r(),x=p("p"),x.innerHTML=P,X=r(),U=p("p"),U.innerHTML=I,E=r(),y(u.$$.fragment),F=r(),L=p("div"),y(we.$$.fragment),Je=r(),le=p("p"),le.innerHTML=A,oe=r(),y(S.$$.fragment),de=r(),y(ce.$$.fragment),je=r(),y(D.$$.fragment),Oe=r(),W=p("div"),y(pe.$$.fragment),Ge=r(),B=p("p"),B.textContent=N,xe=r(),te=p("p"),te.innerHTML=Ne,Ze=r(),se=p("p"),se.innerHTML=ke,We=r(),y($e.$$.fragment),K=r(),ne=p("div"),y(ee.$$.fragment),qe=r(),H=p("p"),H.innerHTML=_e,He=r(),y(me.$$.fragment),Be=r(),y(Y.$$.fragment),ae=r(),y(Te.$$.fragment),Fe=r(),Z=p("div"),y(ye.$$.fragment),Ce=r(),re=p("p"),re.textContent=Ve,Ae=r(),v=p("p"),v.innerHTML=z,O=r(),q=p("p"),q.innerHTML=ue,De=r(),a=p("p"),a.innerHTML=j,be=r(),it=p("p"),it.innerHTML=ut,jt=r(),y(Re.$$.fragment),kt=r(),Me=p("div"),y(ct.$$.fragment),Se=r(),at=p("p"),at.innerHTML=Ft,bt=r(),y(ht.$$.fragment),Gt=r(),y(Ke.$$.fragment),Ct=r(),y(pt.$$.fragment),ze=r(),y(et.$$.fragment),$t=r(),ie=p("div"),y(Mt.$$.fragment),xt=r(),tt=p("p"),tt.innerHTML=Pt,mt=r(),wt=p("p"),wt.innerHTML=ft,vt=r(),h=p("p"),h.innerHTML=C,Qe=r(),y(Pe.$$.fragment),Xe=r(),R=p("div"),y(he.$$.fragment),nt=r(),Ue=p("p"),Ue.innerHTML=Zt,Ut=r(),y(gt.$$.fragment),zt=r(),y(_t.$$.fragment),It=r(),y(Jt.$$.fragment),this.h()},l(f){b(e.$$.fragment,f),c=i(f),t=m(f,"DIV",{class:!0});var G=fe(t);b(o.$$.fragment,G),g=i(G),n=m(G,"P",{"data-svelte-h":!0}),_(n)!=="svelte-1mdqejp"&&(n.textContent=T),Q=i(G),x=m(G,"P",{"data-svelte-h":!0}),_(x)!=="svelte-1qaxm70"&&(x.innerHTML=P),X=i(G),U=m(G,"P",{"data-svelte-h":!0}),_(U)!=="svelte-1be7e3c"&&(U.innerHTML=I),E=i(G),b(u.$$.fragment,G),F=i(G),L=m(G,"DIV",{class:!0});var Tt=fe(L);b(we.$$.fragment,Tt),Je=i(Tt),le=m(Tt,"P",{"data-svelte-h":!0}),_(le)!=="svelte-1ytb2fg"&&(le.innerHTML=A),oe=i(Tt),b(S.$$.fragment,Tt),de=i(Tt),b(ce.$$.fragment,Tt),Tt.forEach(s),G.forEach(s),je=i(f),b(D.$$.fragment,f),Oe=i(f),W=m(f,"DIV",{class:!0});var ot=fe(W);b(pe.$$.fragment,ot),Ge=i(ot),B=m(ot,"P",{"data-svelte-h":!0}),_(B)!=="svelte-1p892on"&&(B.textContent=N),xe=i(ot),te=m(ot,"P",{"data-svelte-h":!0}),_(te)!=="svelte-1qaxm70"&&(te.innerHTML=Ne),Ze=i(ot),se=m(ot,"P",{"data-svelte-h":!0}),_(se)!=="svelte-1be7e3c"&&(se.innerHTML=ke),We=i(ot),b($e.$$.fragment,ot),K=i(ot),ne=m(ot,"DIV",{class:!0});var yt=fe(ne);b(ee.$$.fragment,yt),qe=i(yt),H=m(yt,"P",{"data-svelte-h":!0}),_(H)!=="svelte-1cdm4l8"&&(H.innerHTML=_e),He=i(yt),b(me.$$.fragment,yt),Be=i(yt),b(Y.$$.fragment,yt),yt.forEach(s),ot.forEach(s),ae=i(f),b(Te.$$.fragment,f),Fe=i(f),Z=m(f,"DIV",{class:!0});var Ie=fe(Z);b(ye.$$.fragment,Ie),Ce=i(Ie),re=m(Ie,"P",{"data-svelte-h":!0}),_(re)!=="svelte-ujk30i"&&(re.textContent=Ve),Ae=i(Ie),v=m(Ie,"P",{"data-svelte-h":!0}),_(v)!=="svelte-16megri"&&(v.innerHTML=z),O=i(Ie),q=m(Ie,"P",{"data-svelte-h":!0}),_(q)!=="svelte-10ugs3m"&&(q.innerHTML=ue),De=i(Ie),a=m(Ie,"P",{"data-svelte-h":!0}),_(a)!=="svelte-1qaxm70"&&(a.innerHTML=j),be=i(Ie),it=m(Ie,"P",{"data-svelte-h":!0}),_(it)!=="svelte-1be7e3c"&&(it.innerHTML=ut),jt=i(Ie),b(Re.$$.fragment,Ie),kt=i(Ie),Me=m(Ie,"DIV",{class:!0});var lt=fe(Me);b(ct.$$.fragment,lt),Se=i(lt),at=m(lt,"P",{"data-svelte-h":!0}),_(at)!=="svelte-97m258"&&(at.innerHTML=Ft),bt=i(lt),b(ht.$$.fragment,lt),Gt=i(lt),b(Ke.$$.fragment,lt),Ct=i(lt),b(pt.$$.fragment,lt),lt.forEach(s),Ie.forEach(s),ze=i(f),b(et.$$.fragment,f),$t=i(f),ie=m(f,"DIV",{class:!0});var st=fe(ie);b(Mt.$$.fragment,st),xt=i(st),tt=m(st,"P",{"data-svelte-h":!0}),_(tt)!=="svelte-lq2977"&&(tt.innerHTML=Pt),mt=i(st),wt=m(st,"P",{"data-svelte-h":!0}),_(wt)!=="svelte-1qaxm70"&&(wt.innerHTML=ft),vt=i(st),h=m(st,"P",{"data-svelte-h":!0}),_(h)!=="svelte-1be7e3c"&&(h.innerHTML=C),Qe=i(st),b(Pe.$$.fragment,st),Xe=i(st),R=m(st,"DIV",{class:!0});var dt=fe(R);b(he.$$.fragment,dt),nt=i(dt),Ue=m(dt,"P",{"data-svelte-h":!0}),_(Ue)!=="svelte-694tz8"&&(Ue.innerHTML=Zt),Ut=i(dt),b(gt.$$.fragment,dt),zt=i(dt),b(_t.$$.fragment,dt),It=i(dt),b(Jt.$$.fragment,dt),dt.forEach(s),st.forEach(s),this.h()},h(){ge(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ge(t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ge(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ge(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ge(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ge(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ge(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ge(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(f,G){M(e,f,G),d(f,c,G),d(f,t,G),M(o,t,null),l(t,g),l(t,n),l(t,Q),l(t,x),l(t,X),l(t,U),l(t,E),M(u,t,null),l(t,F),l(t,L),M(we,L,null),l(L,Je),l(L,le),l(L,oe),M(S,L,null),l(L,de),M(ce,L,null),d(f,je,G),M(D,f,G),d(f,Oe,G),d(f,W,G),M(pe,W,null),l(W,Ge),l(W,B),l(W,xe),l(W,te),l(W,Ze),l(W,se),l(W,We),M($e,W,null),l(W,K),l(W,ne),M(ee,ne,null),l(ne,qe),l(ne,H),l(ne,He),M(me,ne,null),l(ne,Be),M(Y,ne,null),d(f,ae,G),M(Te,f,G),d(f,Fe,G),d(f,Z,G),M(ye,Z,null),l(Z,Ce),l(Z,re),l(Z,Ae),l(Z,v),l(Z,O),l(Z,q),l(Z,De),l(Z,a),l(Z,be),l(Z,it),l(Z,jt),M(Re,Z,null),l(Z,kt),l(Z,Me),M(ct,Me,null),l(Me,Se),l(Me,at),l(Me,bt),M(ht,Me,null),l(Me,Gt),M(Ke,Me,null),l(Me,Ct),M(pt,Me,null),d(f,ze,G),M(et,f,G),d(f,$t,G),d(f,ie,G),M(Mt,ie,null),l(ie,xt),l(ie,tt),l(ie,mt),l(ie,wt),l(ie,vt),l(ie,h),l(ie,Qe),M(Pe,ie,null),l(ie,Xe),l(ie,R),M(he,R,null),l(R,nt),l(R,Ue),l(R,Ut),M(gt,R,null),l(R,zt),M(_t,R,null),l(R,It),M(Jt,R,null),Wt=!0},p(f,G){const Tt={};G&2&&(Tt.$$scope={dirty:G,ctx:f}),u.$set(Tt);const ot={};G&2&&(ot.$$scope={dirty:G,ctx:f}),S.$set(ot);const yt={};G&2&&(yt.$$scope={dirty:G,ctx:f}),ce.$set(yt);const Ie={};G&2&&(Ie.$$scope={dirty:G,ctx:f}),$e.$set(Ie);const lt={};G&2&&(lt.$$scope={dirty:G,ctx:f}),me.$set(lt);const st={};G&2&&(st.$$scope={dirty:G,ctx:f}),Y.$set(st);const dt={};G&2&&(dt.$$scope={dirty:G,ctx:f}),Re.$set(dt);const Bt={};G&2&&(Bt.$$scope={dirty:G,ctx:f}),ht.$set(Bt);const Lt={};G&2&&(Lt.$$scope={dirty:G,ctx:f}),Ke.$set(Lt);const Nt={};G&2&&(Nt.$$scope={dirty:G,ctx:f}),pt.$set(Nt);const Ht={};G&2&&(Ht.$$scope={dirty:G,ctx:f}),Pe.$set(Ht);const Vt={};G&2&&(Vt.$$scope={dirty:G,ctx:f}),gt.$set(Vt);const Rt={};G&2&&(Rt.$$scope={dirty:G,ctx:f}),_t.$set(Rt);const St={};G&2&&(St.$$scope={dirty:G,ctx:f}),Jt.$set(St)},i(f){Wt||(w(e.$$.fragment,f),w(o.$$.fragment,f),w(u.$$.fragment,f),w(we.$$.fragment,f),w(S.$$.fragment,f),w(ce.$$.fragment,f),w(D.$$.fragment,f),w(pe.$$.fragment,f),w($e.$$.fragment,f),w(ee.$$.fragment,f),w(me.$$.fragment,f),w(Y.$$.fragment,f),w(Te.$$.fragment,f),w(ye.$$.fragment,f),w(Re.$$.fragment,f),w(ct.$$.fragment,f),w(ht.$$.fragment,f),w(Ke.$$.fragment,f),w(pt.$$.fragment,f),w(et.$$.fragment,f),w(Mt.$$.fragment,f),w(Pe.$$.fragment,f),w(he.$$.fragment,f),w(gt.$$.fragment,f),w(_t.$$.fragment,f),w(Jt.$$.fragment,f),Wt=!0)},o(f){k(e.$$.fragment,f),k(o.$$.fragment,f),k(u.$$.fragment,f),k(we.$$.fragment,f),k(S.$$.fragment,f),k(ce.$$.fragment,f),k(D.$$.fragment,f),k(pe.$$.fragment,f),k($e.$$.fragment,f),k(ee.$$.fragment,f),k(me.$$.fragment,f),k(Y.$$.fragment,f),k(Te.$$.fragment,f),k(ye.$$.fragment,f),k(Re.$$.fragment,f),k(ct.$$.fragment,f),k(ht.$$.fragment,f),k(Ke.$$.fragment,f),k(pt.$$.fragment,f),k(et.$$.fragment,f),k(Mt.$$.fragment,f),k(Pe.$$.fragment,f),k(he.$$.fragment,f),k(gt.$$.fragment,f),k(_t.$$.fragment,f),k(Jt.$$.fragment,f),Wt=!1},d(f){f&&(s(c),s(t),s(je),s(Oe),s(W),s(ae),s(Fe),s(Z),s(ze),s($t),s(ie)),$(e,f),$(o),$(u),$(we),$(S),$(ce),$(D,f),$(pe),$($e),$(ee),$(me),$(Y),$(Te,f),$(ye),$(Re),$(ct),$(ht),$(Ke),$(pt),$(et,f),$(Mt),$(Pe),$(he),$(gt),$(_t),$(Jt)}}}function Cn(J){let e,c;return e=new qt({props:{$$slots:{default:[Fn]},$$scope:{ctx:J}}}),{c(){y(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,o){M(e,t,o),c=!0},p(t,o){const g={};o&2&&(g.$$scope={dirty:o,ctx:t}),e.$set(g)},i(t){c||(w(e.$$.fragment,t),c=!0)},o(t){k(e.$$.fragment,t),c=!1},d(t){$(e,t)}}}function Pn(J){let e,c=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=p("p"),e.innerHTML=c},l(t){e=m(t,"P",{"data-svelte-h":!0}),_(e)!=="svelte-fincs2"&&(e.innerHTML=c)},m(t,o){d(t,e,o)},p:V,d(t){t&&s(e)}}}function Un(J){let e,c="Example:",t,o,g;return o=new Ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4R1BUSk1vZGVsJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZ3B0aiUyMiklMEFtb2RlbCUyMCUzRCUyMEZsYXhHUFRKTW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMmdwdGolMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMmpheCUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBbGFzdF9oaWRkZW5fc3RhdGVzJTIwJTNEJTIwb3V0cHV0cy5sYXN0X2hpZGRlbl9zdGF0ZQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxGPTJModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;gptj&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxGPTJModel.from_pretrained(<span class="hljs-string">&quot;gptj&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=p("p"),e.textContent=c,t=r(),y(o.$$.fragment)},l(n){e=m(n,"P",{"data-svelte-h":!0}),_(e)!=="svelte-11lpom8"&&(e.textContent=c),t=i(n),b(o.$$.fragment,n)},m(n,T){d(n,e,T),d(n,t,T),M(o,n,T),g=!0},p:V,i(n){g||(w(o.$$.fragment,n),g=!0)},o(n){k(o.$$.fragment,n),g=!1},d(n){n&&(s(e),s(t)),$(o,n)}}}function zn(J){let e,c=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=p("p"),e.innerHTML=c},l(t){e=m(t,"P",{"data-svelte-h":!0}),_(e)!=="svelte-fincs2"&&(e.innerHTML=c)},m(t,o){d(t,e,o)},p:V,d(t){t&&s(e)}}}function In(J){let e,c="Example:",t,o,g;return o=new Ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4R1BUSkZvckNhdXNhbExNJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZ3B0aiUyMiklMEFtb2RlbCUyMCUzRCUyMEZsYXhHUFRKRm9yQ2F1c2FsTE0uZnJvbV9wcmV0cmFpbmVkKCUyMmdwdGolMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMm5wJTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEElMjMlMjByZXRyaWV2ZSUyMGxvZ3RzJTIwZm9yJTIwbmV4dCUyMHRva2VuJTBBbmV4dF90b2tlbl9sb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cyU1QiUzQSUyQyUyMC0xJTVE",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxGPTJForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;gptj&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxGPTJForCausalLM.from_pretrained(<span class="hljs-string">&quot;gptj&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve logts for next token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`,wrap:!1}}),{c(){e=p("p"),e.textContent=c,t=r(),y(o.$$.fragment)},l(n){e=m(n,"P",{"data-svelte-h":!0}),_(e)!=="svelte-11lpom8"&&(e.textContent=c),t=i(n),b(o.$$.fragment,n)},m(n,T){d(n,e,T),d(n,t,T),M(o,n,T),g=!0},p:V,i(n){g||(w(o.$$.fragment,n),g=!0)},o(n){k(o.$$.fragment,n),g=!1},d(n){n&&(s(e),s(t)),$(o,n)}}}function Zn(J){let e,c,t,o,g,n,T="The bare GPTJ Model transformer outputting raw hidden-states without any specific head on top.",Q,x,P=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,X,U,I=`This model is also a Flax Linen
<a href="https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html" rel="nofollow">flax.nn.Module</a> subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`,E,u,F="Finally, this model supports inherent JAX features such as:",L,we,Je='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',le,A,oe,S,de,ce="The <code>FlaxGPTJPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",je,D,Oe,W,pe,Ge,B,N,xe,te,Ne,Ze="The GPTJ Model transformer with a language modeling head on top.",se,ke,We=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,$e,K,ne=`This model is also a Flax Linen
<a href="https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html" rel="nofollow">flax.nn.Module</a> subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`,ee,qe,H="Finally, this model supports inherent JAX features such as:",_e,He,me='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',Be,Y,ae,Te,Fe,Z="The <code>FlaxGPTJPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",ye,Ce,re,Ve,Ae;return e=new Ye({props:{title:"FlaxGPTJModel",local:"transformers.FlaxGPTJModel",headingTag:"h2"}}),o=new ve({props:{name:"class transformers.FlaxGPTJModel",anchor:"transformers.FlaxGPTJModel",parameters:[{name:"config",val:": GPTJConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxGPTJModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPTJModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gptj/modeling_flax_gptj.py#L613"}}),oe=new ve({props:{name:"__call__",anchor:"transformers.FlaxGPTJModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FlaxGPTJModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxGPTJModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxGPTJModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxGPTJModel.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxGPTJModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxGPTJModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxGPTJModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gptj/modeling_flax_gptj.py#L435",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),D=new Le({props:{$$slots:{default:[Pn]},$$scope:{ctx:J}}}),W=new rt({props:{anchor:"transformers.FlaxGPTJModel.__call__.example",$$slots:{default:[Un]},$$scope:{ctx:J}}}),Ge=new Ye({props:{title:"FlaxGPTJForCausalLM",local:"transformers.FlaxGPTJForCausalLM",headingTag:"h2"}}),xe=new ve({props:{name:"class transformers.FlaxGPTJForCausalLM",anchor:"transformers.FlaxGPTJForCausalLM",parameters:[{name:"config",val:": GPTJConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxGPTJForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPTJForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gptj/modeling_flax_gptj.py#L677"}}),ae=new ve({props:{name:"__call__",anchor:"transformers.FlaxGPTJForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FlaxGPTJForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxGPTJForCausalLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxGPTJForCausalLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxGPTJForCausalLM.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxGPTJForCausalLM.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxGPTJForCausalLM.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxGPTJForCausalLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gptj/modeling_flax_gptj.py#L435",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ce=new Le({props:{$$slots:{default:[zn]},$$scope:{ctx:J}}}),Ve=new rt({props:{anchor:"transformers.FlaxGPTJForCausalLM.__call__.example",$$slots:{default:[In]},$$scope:{ctx:J}}}),{c(){y(e.$$.fragment),c=r(),t=p("div"),y(o.$$.fragment),g=r(),n=p("p"),n.textContent=T,Q=r(),x=p("p"),x.innerHTML=P,X=r(),U=p("p"),U.innerHTML=I,E=r(),u=p("p"),u.textContent=F,L=r(),we=p("ul"),we.innerHTML=Je,le=r(),A=p("div"),y(oe.$$.fragment),S=r(),de=p("p"),de.innerHTML=ce,je=r(),y(D.$$.fragment),Oe=r(),y(W.$$.fragment),pe=r(),y(Ge.$$.fragment),B=r(),N=p("div"),y(xe.$$.fragment),te=r(),Ne=p("p"),Ne.textContent=Ze,se=r(),ke=p("p"),ke.innerHTML=We,$e=r(),K=p("p"),K.innerHTML=ne,ee=r(),qe=p("p"),qe.textContent=H,_e=r(),He=p("ul"),He.innerHTML=me,Be=r(),Y=p("div"),y(ae.$$.fragment),Te=r(),Fe=p("p"),Fe.innerHTML=Z,ye=r(),y(Ce.$$.fragment),re=r(),y(Ve.$$.fragment),this.h()},l(v){b(e.$$.fragment,v),c=i(v),t=m(v,"DIV",{class:!0});var z=fe(t);b(o.$$.fragment,z),g=i(z),n=m(z,"P",{"data-svelte-h":!0}),_(n)!=="svelte-13d2eu6"&&(n.textContent=T),Q=i(z),x=m(z,"P",{"data-svelte-h":!0}),_(x)!=="svelte-18ki9f4"&&(x.innerHTML=P),X=i(z),U=m(z,"P",{"data-svelte-h":!0}),_(U)!=="svelte-idybz1"&&(U.innerHTML=I),E=i(z),u=m(z,"P",{"data-svelte-h":!0}),_(u)!=="svelte-1pplc4a"&&(u.textContent=F),L=i(z),we=m(z,"UL",{"data-svelte-h":!0}),_(we)!=="svelte-1w7z84m"&&(we.innerHTML=Je),le=i(z),A=m(z,"DIV",{class:!0});var O=fe(A);b(oe.$$.fragment,O),S=i(O),de=m(O,"P",{"data-svelte-h":!0}),_(de)!=="svelte-hsz4ps"&&(de.innerHTML=ce),je=i(O),b(D.$$.fragment,O),Oe=i(O),b(W.$$.fragment,O),O.forEach(s),z.forEach(s),pe=i(v),b(Ge.$$.fragment,v),B=i(v),N=m(v,"DIV",{class:!0});var q=fe(N);b(xe.$$.fragment,q),te=i(q),Ne=m(q,"P",{"data-svelte-h":!0}),_(Ne)!=="svelte-48xytm"&&(Ne.textContent=Ze),se=i(q),ke=m(q,"P",{"data-svelte-h":!0}),_(ke)!=="svelte-18ki9f4"&&(ke.innerHTML=We),$e=i(q),K=m(q,"P",{"data-svelte-h":!0}),_(K)!=="svelte-idybz1"&&(K.innerHTML=ne),ee=i(q),qe=m(q,"P",{"data-svelte-h":!0}),_(qe)!=="svelte-1pplc4a"&&(qe.textContent=H),_e=i(q),He=m(q,"UL",{"data-svelte-h":!0}),_(He)!=="svelte-1w7z84m"&&(He.innerHTML=me),Be=i(q),Y=m(q,"DIV",{class:!0});var ue=fe(Y);b(ae.$$.fragment,ue),Te=i(ue),Fe=m(ue,"P",{"data-svelte-h":!0}),_(Fe)!=="svelte-hsz4ps"&&(Fe.innerHTML=Z),ye=i(ue),b(Ce.$$.fragment,ue),re=i(ue),b(Ve.$$.fragment,ue),ue.forEach(s),q.forEach(s),this.h()},h(){ge(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ge(t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ge(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ge(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(v,z){M(e,v,z),d(v,c,z),d(v,t,z),M(o,t,null),l(t,g),l(t,n),l(t,Q),l(t,x),l(t,X),l(t,U),l(t,E),l(t,u),l(t,L),l(t,we),l(t,le),l(t,A),M(oe,A,null),l(A,S),l(A,de),l(A,je),M(D,A,null),l(A,Oe),M(W,A,null),d(v,pe,z),M(Ge,v,z),d(v,B,z),d(v,N,z),M(xe,N,null),l(N,te),l(N,Ne),l(N,se),l(N,ke),l(N,$e),l(N,K),l(N,ee),l(N,qe),l(N,_e),l(N,He),l(N,Be),l(N,Y),M(ae,Y,null),l(Y,Te),l(Y,Fe),l(Y,ye),M(Ce,Y,null),l(Y,re),M(Ve,Y,null),Ae=!0},p(v,z){const O={};z&2&&(O.$$scope={dirty:z,ctx:v}),D.$set(O);const q={};z&2&&(q.$$scope={dirty:z,ctx:v}),W.$set(q);const ue={};z&2&&(ue.$$scope={dirty:z,ctx:v}),Ce.$set(ue);const De={};z&2&&(De.$$scope={dirty:z,ctx:v}),Ve.$set(De)},i(v){Ae||(w(e.$$.fragment,v),w(o.$$.fragment,v),w(oe.$$.fragment,v),w(D.$$.fragment,v),w(W.$$.fragment,v),w(Ge.$$.fragment,v),w(xe.$$.fragment,v),w(ae.$$.fragment,v),w(Ce.$$.fragment,v),w(Ve.$$.fragment,v),Ae=!0)},o(v){k(e.$$.fragment,v),k(o.$$.fragment,v),k(oe.$$.fragment,v),k(D.$$.fragment,v),k(W.$$.fragment,v),k(Ge.$$.fragment,v),k(xe.$$.fragment,v),k(ae.$$.fragment,v),k(Ce.$$.fragment,v),k(Ve.$$.fragment,v),Ae=!1},d(v){v&&(s(c),s(t),s(pe),s(B),s(N)),$(e,v),$(o),$(oe),$(D),$(W),$(Ge,v),$(xe),$(ae),$(Ce),$(Ve)}}}function Wn(J){let e,c;return e=new qt({props:{$$slots:{default:[Zn]},$$scope:{ctx:J}}}),{c(){y(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,o){M(e,t,o),c=!0},p(t,o){const g={};o&2&&(g.$$scope={dirty:o,ctx:t}),e.$set(g)},i(t){c||(w(e.$$.fragment,t),c=!0)},o(t){k(e.$$.fragment,t),c=!1},d(t){$(e,t)}}}function qn(J){let e,c,t,o,g,n,T,Q,x,P=`The GPT-J model was released in the <a href="https://github.com/kingoflolz/mesh-transformer-jax" rel="nofollow">kingoflolz/mesh-transformer-jax</a> repository by Ben Wang and Aran Komatsuzaki. It is a GPT-2-like
causal language model trained on <a href="https://pile.eleuther.ai/" rel="nofollow">the Pile</a> dataset.`,X,U,I='This model was contributed by <a href="https://huggingface.co/stellaathena" rel="nofollow">Stella Biderman</a>.',E,u,F,L,we=`<li>To load <a href="https://huggingface.co/EleutherAI/gpt-j-6B" rel="nofollow">GPT-J</a> in float32 one would need at least 2x model size
RAM: 1x for initial weights and another 1x to load the checkpoint. So for GPT-J it would take at least 48GB
RAM to just load the model. To reduce the RAM usage there are a few options. The <code>torch_dtype</code> argument can be
used to initialize the model in half-precision on a CUDA device only. There is also a fp16 branch which stores the fp16 weights,
which could be used to further minimize the RAM usage:</li>`,Je,le,A,oe,S=`<li><p>The model should fit on 16GB GPU for inference. For training/fine-tuning it would take much more GPU RAM. Adam
optimizer for example makes four copies of the model: model, gradients, average and squared average of the gradients.
So it would need at least 4x model size GPU memory, even with mixed precision as gradient updates are in fp32. This
is not including the activations and data batches, which would again require some more GPU RAM. So one should explore
solutions such as DeepSpeed, to train/fine-tune the model. Another option is to use the original codebase to
train/fine-tune the model on TPU and then convert the model to Transformers format for inference. Instructions for
that could be found <a href="https://github.com/kingoflolz/mesh-transformer-jax/blob/master/howto_finetune.md" rel="nofollow">here</a></p></li> <li><p>Although the embedding matrix has a size of 50400, only 50257 entries are used by the GPT-2 tokenizer. These extra
tokens are added for the sake of efficiency on TPUs. To avoid the mismatch between embedding matrix size and vocab
size, the tokenizer for <a href="https://huggingface.co/EleutherAI/gpt-j-6B" rel="nofollow">GPT-J</a> contains 143 extra tokens
<code>&lt;|extratoken_1|&gt;... &lt;|extratoken_143|&gt;</code>, so the <code>vocab_size</code> of tokenizer also becomes 50400.</p></li>`,de,ce,je,D,Oe=`The <a href="/docs/transformers/main/en/model_doc/phi#transformers.PhiForCausalLM.generate">generate()</a> method can be used to generate text using GPT-J
model.`,W,pe,Ge,B,N="…or in float16 precision:",xe,te,Ne,Ze,se,ke,We="A list of official Hugging Face and community (indicated by 🌎) resources to help you get started with GPT-J. If you’re interested in submitting a resource to be included here, please feel free to open a Pull Request and we’ll review it! The resource should ideally demonstrate something new instead of duplicating an existing resource.",$e,K,ne,ee,qe='<li>Description of <a href="https://huggingface.co/EleutherAI/gpt-j-6B" rel="nofollow">GPT-J</a>.</li> <li>A blog on how to <a href="https://huggingface.co/blog/gptj-sagemaker" rel="nofollow">Deploy GPT-J 6B for inference using Hugging Face Transformers and Amazon SageMaker</a>.</li> <li>A blog on how to <a href="https://www.philschmid.de/gptj-deepspeed-inference" rel="nofollow">Accelerate GPT-J inference with DeepSpeed-Inference on GPUs</a>.</li> <li>A blog post introducing <a href="https://arankomatsuzaki.wordpress.com/2021/06/04/gpt-j/" rel="nofollow">GPT-J-6B: 6B JAX-Based Transformer</a>. 🌎</li> <li>A notebook for <a href="https://colab.research.google.com/github/kingoflolz/mesh-transformer-jax/blob/master/colab_demo.ipynb" rel="nofollow">GPT-J-6B Inference Demo</a>. 🌎</li> <li>Another notebook demonstrating <a href="https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/GPT-J-6B/Inference_with_GPT_J_6B.ipynb" rel="nofollow">Inference with GPT-J-6B</a>.</li> <li><a href="https://huggingface.co/course/en/chapter7/6?fw=pt#training-a-causal-language-model-from-scratch" rel="nofollow">Causal language modeling</a> chapter of the 🤗 Hugging Face Course.</li> <li><a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJForCausalLM">GPTJForCausalLM</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/pytorch/language-modeling#gpt-2gpt-and-causal-language-modeling" rel="nofollow">causal language modeling example script</a>, <a href="https://github.com/huggingface/transformers/tree/main/examples/pytorch/text-generation" rel="nofollow">text generation example script</a>, and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/language_modeling.ipynb" rel="nofollow">notebook</a>.</li> <li><a href="/docs/transformers/main/en/model_doc/gptj#transformers.TFGPTJForCausalLM">TFGPTJForCausalLM</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/tensorflow/language-modeling#run_clmpy" rel="nofollow">causal language modeling example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/language_modeling-tf.ipynb" rel="nofollow">notebook</a>.</li> <li><a href="/docs/transformers/main/en/model_doc/gptj#transformers.FlaxGPTJForCausalLM">FlaxGPTJForCausalLM</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/flax/language-modeling#causal-language-modeling" rel="nofollow">causal language modeling example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/causal_language_modeling_flax.ipynb" rel="nofollow">notebook</a>.</li>',H,_e,He="<strong>Documentation resources</strong>",me,Be,Y='<li><a href="../tasks/sequence_classification">Text classification task guide</a></li> <li><a href="../tasks/question_answering">Question answering task guide</a></li> <li><a href="../tasks/language_modeling">Causal language modeling task guide</a></li>',ae,Te,Fe,Z,ye,Ce,re,Ve=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJModel">GPTJModel</a>. It is used to instantiate a GPT-J
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the GPT-J
<a href="https://huggingface.co/EleutherAI/gpt-j-6B" rel="nofollow">EleutherAI/gpt-j-6B</a> architecture. Configuration objects inherit from
<a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>
for more information.`,Ae,v,z,O,q,ue,De;return g=new Ye({props:{title:"GPT-J",local:"gpt-j",headingTag:"h1"}}),T=new Ye({props:{title:"Overview",local:"overview",headingTag:"h2"}}),u=new Ye({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),le=new Ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEdQVEpGb3JDYXVzYWxMTSUwQWltcG9ydCUyMHRvcmNoJTBBJTBBZGV2aWNlJTIwJTNEJTIwJTIyY3VkYSUyMiUwQW1vZGVsJTIwJTNEJTIwR1BUSkZvckNhdXNhbExNLmZyb21fcHJldHJhaW5lZCglMEElMjAlMjAlMjAlMjAlMjJFbGV1dGhlckFJJTJGZ3B0LWotNkIlMjIlMkMlMEElMjAlMjAlMjAlMjByZXZpc2lvbiUzRCUyMmZsb2F0MTYlMjIlMkMlMEElMjAlMjAlMjAlMjB0b3JjaF9kdHlwZSUzRHRvcmNoLmZsb2F0MTYlMkMlMEEpLnRvKGRldmljZSk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>device = <span class="hljs-string">&quot;cuda&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForCausalLM.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>,
<span class="hljs-meta">... </span>    revision=<span class="hljs-string">&quot;float16&quot;</span>,
<span class="hljs-meta">... </span>    torch_dtype=torch.float16,
<span class="hljs-meta">... </span>).to(device)`,wrap:!1}}),ce=new Ye({props:{title:"Usage examples",local:"usage-examples",headingTag:"h2"}}),pe=new Ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Nb2RlbEZvckNhdXNhbExNJTJDJTIwQXV0b1Rva2VuaXplciUwQSUwQW1vZGVsJTIwJTNEJTIwQXV0b01vZGVsRm9yQ2F1c2FsTE0uZnJvbV9wcmV0cmFpbmVkKCUyMkVsZXV0aGVyQUklMkZncHQtai02QiUyMiklMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJFbGV1dGhlckFJJTJGZ3B0LWotNkIlMjIpJTBBJTBBcHJvbXB0JTIwJTNEJTIwKCUwQSUyMCUyMCUyMCUyMCUyMkluJTIwYSUyMHNob2NraW5nJTIwZmluZGluZyUyQyUyMHNjaWVudGlzdHMlMjBkaXNjb3ZlcmVkJTIwYSUyMGhlcmQlMjBvZiUyMHVuaWNvcm5zJTIwbGl2aW5nJTIwaW4lMjBhJTIwcmVtb3RlJTJDJTIwJTIyJTBBJTIwJTIwJTIwJTIwJTIycHJldmlvdXNseSUyMHVuZXhwbG9yZWQlMjB2YWxsZXklMkMlMjBpbiUyMHRoZSUyMEFuZGVzJTIwTW91bnRhaW5zLiUyMEV2ZW4lMjBtb3JlJTIwc3VycHJpc2luZyUyMHRvJTIwdGhlJTIwJTIyJTBBJTIwJTIwJTIwJTIwJTIycmVzZWFyY2hlcnMlMjB3YXMlMjB0aGUlMjBmYWN0JTIwdGhhdCUyMHRoZSUyMHVuaWNvcm5zJTIwc3Bva2UlMjBwZXJmZWN0JTIwRW5nbGlzaC4lMjIlMEEpJTBBJTBBaW5wdXRfaWRzJTIwJTNEJTIwdG9rZW5pemVyKHByb21wdCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpLmlucHV0X2lkcyUwQSUwQWdlbl90b2tlbnMlMjAlM0QlMjBtb2RlbC5nZW5lcmF0ZSglMEElMjAlMjAlMjAlMjBpbnB1dF9pZHMlMkMlMEElMjAlMjAlMjAlMjBkb19zYW1wbGUlM0RUcnVlJTJDJTBBJTIwJTIwJTIwJTIwdGVtcGVyYXR1cmUlM0QwLjklMkMlMEElMjAlMjAlMjAlMjBtYXhfbGVuZ3RoJTNEMTAwJTJDJTBBKSUwQWdlbl90ZXh0JTIwJTNEJTIwdG9rZW5pemVyLmJhdGNoX2RlY29kZShnZW5fdG9rZW5zKSU1QjAlNUQ=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForCausalLM, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;In a shocking finding, scientists discovered a herd of unicorns living in a remote, &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;previously unexplored valley, in the Andes Mountains. Even more surprising to the &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;researchers was the fact that the unicorns spoke perfect English.&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>gen_tokens = model.generate(
<span class="hljs-meta">... </span>    input_ids,
<span class="hljs-meta">... </span>    do_sample=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    temperature=<span class="hljs-number">0.9</span>,
<span class="hljs-meta">... </span>    max_length=<span class="hljs-number">100</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>gen_text = tokenizer.batch_decode(gen_tokens)[<span class="hljs-number">0</span>]`,wrap:!1}}),te=new Ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEdQVEpGb3JDYXVzYWxMTSUyQyUyMEF1dG9Ub2tlbml6ZXIlMEFpbXBvcnQlMjB0b3JjaCUwQSUwQWRldmljZSUyMCUzRCUyMCUyMmN1ZGElMjIlMEFtb2RlbCUyMCUzRCUyMEdQVEpGb3JDYXVzYWxMTS5mcm9tX3ByZXRyYWluZWQoJTIyRWxldXRoZXJBSSUyRmdwdC1qLTZCJTIyJTJDJTIwdG9yY2hfZHR5cGUlM0R0b3JjaC5mbG9hdDE2KS50byhkZXZpY2UpJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyRWxldXRoZXJBSSUyRmdwdC1qLTZCJTIyKSUwQSUwQXByb21wdCUyMCUzRCUyMCglMEElMjAlMjAlMjAlMjAlMjJJbiUyMGElMjBzaG9ja2luZyUyMGZpbmRpbmclMkMlMjBzY2llbnRpc3RzJTIwZGlzY292ZXJlZCUyMGElMjBoZXJkJTIwb2YlMjB1bmljb3JucyUyMGxpdmluZyUyMGluJTIwYSUyMHJlbW90ZSUyQyUyMCUyMiUwQSUyMCUyMCUyMCUyMCUyMnByZXZpb3VzbHklMjB1bmV4cGxvcmVkJTIwdmFsbGV5JTJDJTIwaW4lMjB0aGUlMjBBbmRlcyUyME1vdW50YWlucy4lMjBFdmVuJTIwbW9yZSUyMHN1cnByaXNpbmclMjB0byUyMHRoZSUyMCUyMiUwQSUyMCUyMCUyMCUyMCUyMnJlc2VhcmNoZXJzJTIwd2FzJTIwdGhlJTIwZmFjdCUyMHRoYXQlMjB0aGUlMjB1bmljb3JucyUyMHNwb2tlJTIwcGVyZmVjdCUyMEVuZ2xpc2guJTIyJTBBKSUwQSUwQWlucHV0X2lkcyUyMCUzRCUyMHRva2VuaXplcihwcm9tcHQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKS5pbnB1dF9pZHMudG8oZGV2aWNlKSUwQSUwQWdlbl90b2tlbnMlMjAlM0QlMjBtb2RlbC5nZW5lcmF0ZSglMEElMjAlMjAlMjAlMjBpbnB1dF9pZHMlMkMlMEElMjAlMjAlMjAlMjBkb19zYW1wbGUlM0RUcnVlJTJDJTBBJTIwJTIwJTIwJTIwdGVtcGVyYXR1cmUlM0QwLjklMkMlMEElMjAlMjAlMjAlMjBtYXhfbGVuZ3RoJTNEMTAwJTJDJTBBKSUwQWdlbl90ZXh0JTIwJTNEJTIwdG9rZW5pemVyLmJhdGNoX2RlY29kZShnZW5fdG9rZW5zKSU1QjAlNUQ=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJForCausalLM, AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>device = <span class="hljs-string">&quot;cuda&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>, torch_dtype=torch.float16).to(device)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;In a shocking finding, scientists discovered a herd of unicorns living in a remote, &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;previously unexplored valley, in the Andes Mountains. Even more surprising to the &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;researchers was the fact that the unicorns spoke perfect English.&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids.to(device)

<span class="hljs-meta">&gt;&gt;&gt; </span>gen_tokens = model.generate(
<span class="hljs-meta">... </span>    input_ids,
<span class="hljs-meta">... </span>    do_sample=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    temperature=<span class="hljs-number">0.9</span>,
<span class="hljs-meta">... </span>    max_length=<span class="hljs-number">100</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>gen_text = tokenizer.batch_decode(gen_tokens)[<span class="hljs-number">0</span>]`,wrap:!1}}),Ze=new Ye({props:{title:"Resources",local:"resources",headingTag:"h2"}}),K=new Dt({props:{pipeline:"text-generation"}}),Te=new Ye({props:{title:"GPTJConfig",local:"transformers.GPTJConfig",headingTag:"h2"}}),ye=new ve({props:{name:"class transformers.GPTJConfig",anchor:"transformers.GPTJConfig",parameters:[{name:"vocab_size",val:" = 50400"},{name:"n_positions",val:" = 2048"},{name:"n_embd",val:" = 4096"},{name:"n_layer",val:" = 28"},{name:"n_head",val:" = 16"},{name:"rotary_dim",val:" = 64"},{name:"n_inner",val:" = None"},{name:"activation_function",val:" = 'gelu_new'"},{name:"resid_pdrop",val:" = 0.0"},{name:"embd_pdrop",val:" = 0.0"},{name:"attn_pdrop",val:" = 0.0"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"use_cache",val:" = True"},{name:"bos_token_id",val:" = 50256"},{name:"eos_token_id",val:" = 50256"},{name:"tie_word_embeddings",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPTJConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50400) &#x2014;
Vocabulary size of the GPT-J model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJModel">GPTJModel</a>.`,name:"vocab_size"},{anchor:"transformers.GPTJConfig.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"n_positions"},{anchor:"transformers.GPTJConfig.n_embd",description:`<strong>n_embd</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the embeddings and hidden states.`,name:"n_embd"},{anchor:"transformers.GPTJConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 28) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.GPTJConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.GPTJConfig.rotary_dim",description:`<strong>rotary_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Number of dimensions in the embedding that Rotary Position Embedding is applied to.`,name:"rotary_dim"},{anchor:"transformers.GPTJConfig.n_inner",description:`<strong>n_inner</strong> (<code>int</code>, <em>optional</em>, defaults to None) &#x2014;
Dimensionality of the inner feed-forward layers. <code>None</code> will set it to 4 times n_embd`,name:"n_inner"},{anchor:"transformers.GPTJConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;gelu_new&quot;</code>) &#x2014;
Activation function, to be selected in the list <code>[&quot;relu&quot;, &quot;silu&quot;, &quot;gelu&quot;, &quot;tanh&quot;, &quot;gelu_new&quot;]</code>.`,name:"activation_function"},{anchor:"transformers.GPTJConfig.resid_pdrop",description:`<strong>resid_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"resid_pdrop"},{anchor:"transformers.GPTJConfig.embd_pdrop",description:`<strong>embd_pdrop</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the embeddings.`,name:"embd_pdrop"},{anchor:"transformers.GPTJConfig.attn_pdrop",description:`<strong>attn_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention.`,name:"attn_pdrop"},{anchor:"transformers.GPTJConfig.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon to use in the layer normalization layers.`,name:"layer_norm_epsilon"},{anchor:"transformers.GPTJConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.GPTJConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gptj/configuration_gptj.py#L33"}}),v=new rt({props:{anchor:"transformers.GPTJConfig.example",$$slots:{default:[Kt]},$$scope:{ctx:J}}}),O=new Ot({props:{pytorch:!0,tensorflow:!0,jax:!0,$$slots:{jax:[Wn],tensorflow:[Cn],pytorch:[fn]},$$scope:{ctx:J}}}),{c(){e=p("meta"),c=r(),t=p("p"),o=r(),y(g.$$.fragment),n=r(),y(T.$$.fragment),Q=r(),x=p("p"),x.innerHTML=P,X=r(),U=p("p"),U.innerHTML=I,E=r(),y(u.$$.fragment),F=r(),L=p("ul"),L.innerHTML=we,Je=r(),y(le.$$.fragment),A=r(),oe=p("ul"),oe.innerHTML=S,de=r(),y(ce.$$.fragment),je=r(),D=p("p"),D.innerHTML=Oe,W=r(),y(pe.$$.fragment),Ge=r(),B=p("p"),B.textContent=N,xe=r(),y(te.$$.fragment),Ne=r(),y(Ze.$$.fragment),se=r(),ke=p("p"),ke.textContent=We,$e=r(),y(K.$$.fragment),ne=r(),ee=p("ul"),ee.innerHTML=qe,H=r(),_e=p("p"),_e.innerHTML=He,me=r(),Be=p("ul"),Be.innerHTML=Y,ae=r(),y(Te.$$.fragment),Fe=r(),Z=p("div"),y(ye.$$.fragment),Ce=r(),re=p("p"),re.innerHTML=Ve,Ae=r(),y(v.$$.fragment),z=r(),y(O.$$.fragment),q=r(),ue=p("p"),this.h()},l(a){const j=Yt("svelte-u9bgzb",document.head);e=m(j,"META",{name:!0,content:!0}),j.forEach(s),c=i(a),t=m(a,"P",{}),fe(t).forEach(s),o=i(a),b(g.$$.fragment,a),n=i(a),b(T.$$.fragment,a),Q=i(a),x=m(a,"P",{"data-svelte-h":!0}),_(x)!=="svelte-1sn2o8i"&&(x.innerHTML=P),X=i(a),U=m(a,"P",{"data-svelte-h":!0}),_(U)!=="svelte-krw0hk"&&(U.innerHTML=I),E=i(a),b(u.$$.fragment,a),F=i(a),L=m(a,"UL",{"data-svelte-h":!0}),_(L)!=="svelte-13opr9l"&&(L.innerHTML=we),Je=i(a),b(le.$$.fragment,a),A=i(a),oe=m(a,"UL",{"data-svelte-h":!0}),_(oe)!=="svelte-18jwdgq"&&(oe.innerHTML=S),de=i(a),b(ce.$$.fragment,a),je=i(a),D=m(a,"P",{"data-svelte-h":!0}),_(D)!=="svelte-hcuv01"&&(D.innerHTML=Oe),W=i(a),b(pe.$$.fragment,a),Ge=i(a),B=m(a,"P",{"data-svelte-h":!0}),_(B)!=="svelte-i0o9lv"&&(B.textContent=N),xe=i(a),b(te.$$.fragment,a),Ne=i(a),b(Ze.$$.fragment,a),se=i(a),ke=m(a,"P",{"data-svelte-h":!0}),_(ke)!=="svelte-shud4z"&&(ke.textContent=We),$e=i(a),b(K.$$.fragment,a),ne=i(a),ee=m(a,"UL",{"data-svelte-h":!0}),_(ee)!=="svelte-uld84c"&&(ee.innerHTML=qe),H=i(a),_e=m(a,"P",{"data-svelte-h":!0}),_(_e)!=="svelte-27ts0a"&&(_e.innerHTML=He),me=i(a),Be=m(a,"UL",{"data-svelte-h":!0}),_(Be)!=="svelte-cjapdz"&&(Be.innerHTML=Y),ae=i(a),b(Te.$$.fragment,a),Fe=i(a),Z=m(a,"DIV",{class:!0});var be=fe(Z);b(ye.$$.fragment,be),Ce=i(be),re=m(be,"P",{"data-svelte-h":!0}),_(re)!=="svelte-1377uix"&&(re.innerHTML=Ve),Ae=i(be),b(v.$$.fragment,be),be.forEach(s),z=i(a),b(O.$$.fragment,a),q=i(a),ue=m(a,"P",{}),fe(ue).forEach(s),this.h()},h(){ge(e,"name","hf:doc:metadata"),ge(e,"content",Bn),ge(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(a,j){l(document.head,e),d(a,c,j),d(a,t,j),d(a,o,j),M(g,a,j),d(a,n,j),M(T,a,j),d(a,Q,j),d(a,x,j),d(a,X,j),d(a,U,j),d(a,E,j),M(u,a,j),d(a,F,j),d(a,L,j),d(a,Je,j),M(le,a,j),d(a,A,j),d(a,oe,j),d(a,de,j),M(ce,a,j),d(a,je,j),d(a,D,j),d(a,W,j),M(pe,a,j),d(a,Ge,j),d(a,B,j),d(a,xe,j),M(te,a,j),d(a,Ne,j),M(Ze,a,j),d(a,se,j),d(a,ke,j),d(a,$e,j),M(K,a,j),d(a,ne,j),d(a,ee,j),d(a,H,j),d(a,_e,j),d(a,me,j),d(a,Be,j),d(a,ae,j),M(Te,a,j),d(a,Fe,j),d(a,Z,j),M(ye,Z,null),l(Z,Ce),l(Z,re),l(Z,Ae),M(v,Z,null),d(a,z,j),M(O,a,j),d(a,q,j),d(a,ue,j),De=!0},p(a,[j]){const be={};j&2&&(be.$$scope={dirty:j,ctx:a}),v.$set(be);const it={};j&2&&(it.$$scope={dirty:j,ctx:a}),O.$set(it)},i(a){De||(w(g.$$.fragment,a),w(T.$$.fragment,a),w(u.$$.fragment,a),w(le.$$.fragment,a),w(ce.$$.fragment,a),w(pe.$$.fragment,a),w(te.$$.fragment,a),w(Ze.$$.fragment,a),w(K.$$.fragment,a),w(Te.$$.fragment,a),w(ye.$$.fragment,a),w(v.$$.fragment,a),w(O.$$.fragment,a),De=!0)},o(a){k(g.$$.fragment,a),k(T.$$.fragment,a),k(u.$$.fragment,a),k(le.$$.fragment,a),k(ce.$$.fragment,a),k(pe.$$.fragment,a),k(te.$$.fragment,a),k(Ze.$$.fragment,a),k(K.$$.fragment,a),k(Te.$$.fragment,a),k(ye.$$.fragment,a),k(v.$$.fragment,a),k(O.$$.fragment,a),De=!1},d(a){a&&(s(c),s(t),s(o),s(n),s(Q),s(x),s(X),s(U),s(E),s(F),s(L),s(Je),s(A),s(oe),s(de),s(je),s(D),s(W),s(Ge),s(B),s(xe),s(Ne),s(se),s(ke),s($e),s(ne),s(ee),s(H),s(_e),s(me),s(Be),s(ae),s(Fe),s(Z),s(z),s(q),s(ue)),s(e),$(g,a),$(T,a),$(u,a),$(le,a),$(ce,a),$(pe,a),$(te,a),$(Ze,a),$(K,a),$(Te,a),$(ye),$(v),$(O,a)}}}const Bn='{"title":"GPT-J","local":"gpt-j","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"Usage examples","local":"usage-examples","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"GPTJConfig","local":"transformers.GPTJConfig","sections":[],"depth":2},{"title":"GPTJModel","local":"transformers.GPTJModel","sections":[],"depth":2},{"title":"GPTJForCausalLM","local":"transformers.GPTJForCausalLM","sections":[],"depth":2},{"title":"GPTJForSequenceClassification","local":"transformers.GPTJForSequenceClassification","sections":[],"depth":2},{"title":"GPTJForQuestionAnswering","local":"transformers.GPTJForQuestionAnswering","sections":[],"depth":2},{"title":"TFGPTJModel","local":"transformers.TFGPTJModel","sections":[],"depth":2},{"title":"TFGPTJForCausalLM","local":"transformers.TFGPTJForCausalLM","sections":[],"depth":2},{"title":"TFGPTJForSequenceClassification","local":"transformers.TFGPTJForSequenceClassification","sections":[],"depth":2},{"title":"TFGPTJForQuestionAnswering","local":"transformers.TFGPTJForQuestionAnswering","sections":[],"depth":2},{"title":"FlaxGPTJModel","local":"transformers.FlaxGPTJModel","sections":[],"depth":2},{"title":"FlaxGPTJForCausalLM","local":"transformers.FlaxGPTJForCausalLM","sections":[],"depth":2}],"depth":1}';function Ln(J){return Xt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Yn extends Et{constructor(e){super(),At(this,e,Ln,qn,Qt,{})}}export{Yn as component};
