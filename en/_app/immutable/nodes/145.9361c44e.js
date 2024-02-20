import{s as ro,o as lo,n as ae}from"../chunks/scheduler.9bc65507.js";import{S as io,i as co,g as p,s as l,r as _,A as po,h as m,f as d,c as i,j as ne,u as T,x as g,k as se,l as mo,y as r,a as c,v as y,d as b,t as M,w}from"../chunks/index.707bf1b6.js";import{T as at}from"../chunks/Tip.c2ecdbf4.js";import{D as ue}from"../chunks/Docstring.17db21ae.js";import{C as He}from"../chunks/CodeBlock.54a9f38d.js";import{F as uo,M as ao}from"../chunks/Markdown.fef84341.js";import{E as Ye}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as be}from"../chunks/Heading.342b1fa6.js";function ho(G){let e,u="Example:",t,s,h;return s=new He({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEdQVE5lb0NvbmZpZyUyQyUyMEdQVE5lb01vZGVsJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyMEdQVE5lbyUyMEVsZXV0aGVyQUklMkZncHQtbmVvLTEuM0IlMjBzdHlsZSUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwR1BUTmVvQ29uZmlnKCklMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwbW9kZWwlMjAod2l0aCUyMHJhbmRvbSUyMHdlaWdodHMpJTIwZnJvbSUyMHRoZSUyMEVsZXV0aGVyQUklMkZncHQtbmVvLTEuM0IlMjBzdHlsZSUyMGNvbmZpZ3VyYXRpb24lMEFtb2RlbCUyMCUzRCUyMEdQVE5lb01vZGVsKGNvbmZpZ3VyYXRpb24pJTBBJTBBJTIzJTIwQWNjZXNzaW5nJTIwdGhlJTIwbW9kZWwlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMG1vZGVsLmNvbmZpZw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTNeoConfig, GPTNeoModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GPTNeo EleutherAI/gpt-neo-1.3B style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = GPTNeoConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the EleutherAI/gpt-neo-1.3B style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){e=p("p"),e.textContent=u,t=l(),_(s.$$.fragment)},l(o){e=m(o,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11lpom8"&&(e.textContent=u),t=i(o),T(s.$$.fragment,o)},m(o,$){c(o,e,$),c(o,t,$),y(s,o,$),h=!0},p:ae,i(o){h||(b(s.$$.fragment,o),h=!0)},o(o){M(s.$$.fragment,o),h=!1},d(o){o&&(d(e),d(t)),w(s,o)}}}function fo(G){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=p("p"),e.innerHTML=u},l(t){e=m(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(t,s){c(t,e,s)},p:ae,d(t){t&&d(e)}}}function go(G){let e,u="Example:",t,s,h;return s=new He({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBHUFROZW9Nb2RlbCUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyRWxldXRoZXJBSSUyRmdwdC1uZW8tMS4zQiUyMiklMEFtb2RlbCUyMCUzRCUyMEdQVE5lb01vZGVsLmZyb21fcHJldHJhaW5lZCglMjJFbGV1dGhlckFJJTJGZ3B0LW5lby0xLjNCJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBbGFzdF9oaWRkZW5fc3RhdGVzJTIwJTNEJTIwb3V0cHV0cy5sYXN0X2hpZGRlbl9zdGF0ZQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, GPTNeoModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoModel.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=p("p"),e.textContent=u,t=l(),_(s.$$.fragment)},l(o){e=m(o,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11lpom8"&&(e.textContent=u),t=i(o),T(s.$$.fragment,o)},m(o,$){c(o,e,$),c(o,t,$),y(s,o,$),h=!0},p:ae,i(o){h||(b(s.$$.fragment,o),h=!0)},o(o){M(s.$$.fragment,o),h=!1},d(o){o&&(d(e),d(t)),w(s,o)}}}function _o(G){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=p("p"),e.innerHTML=u},l(t){e=m(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(t,s){c(t,e,s)},p:ae,d(t){t&&d(e)}}}function To(G){let e,u="Example:",t,s,h;return s=new He({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEdQVE5lb0ZvckNhdXNhbExNJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyRWxldXRoZXJBSSUyRmdwdC1uZW8tMS4zQiUyMiklMEFtb2RlbCUyMCUzRCUyMEdQVE5lb0ZvckNhdXNhbExNLmZyb21fcHJldHJhaW5lZCglMjJFbGV1dGhlckFJJTJGZ3B0LW5lby0xLjNCJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMlMkMlMjBsYWJlbHMlM0RpbnB1dHMlNUIlMjJpbnB1dF9pZHMlMjIlNUQpJTBBbG9zcyUyMCUzRCUyMG91dHB1dHMubG9zcyUwQWxvZ2l0cyUyMCUzRCUyMG91dHB1dHMubG9naXRz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, GPTNeoForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=p("p"),e.textContent=u,t=l(),_(s.$$.fragment)},l(o){e=m(o,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11lpom8"&&(e.textContent=u),t=i(o),T(s.$$.fragment,o)},m(o,$){c(o,e,$),c(o,t,$),y(s,o,$),h=!0},p:ae,i(o){h||(b(s.$$.fragment,o),h=!0)},o(o){M(s.$$.fragment,o),h=!1},d(o){o&&(d(e),d(t)),w(s,o)}}}function yo(G){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=p("p"),e.innerHTML=u},l(t){e=m(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(t,s){c(t,e,s)},p:ae,d(t){t&&d(e)}}}function bo(G){let e,u=`This example uses a random model as the real ones are all very big. To get proper results, you should use
EleutherAI/gpt-neo-1.3B instead of EleutherAI/gpt-neo-1.3B. If you get out-of-memory when loading that checkpoint, you can try
adding <code>device_map=&quot;auto&quot;</code> in the <code>from_pretrained</code> call.`;return{c(){e=p("p"),e.innerHTML=u},l(t){e=m(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-ayav4f"&&(e.innerHTML=u)},m(t,s){c(t,e,s)},p:ae,d(t){t&&d(e)}}}function Mo(G){let e,u="Example:",t,s,h;return s=new He({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBHUFROZW9Gb3JRdWVzdGlvbkFuc3dlcmluZyUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyRWxldXRoZXJBSSUyRmdwdC1uZW8tMS4zQiUyMiklMEFtb2RlbCUyMCUzRCUyMEdQVE5lb0ZvclF1ZXN0aW9uQW5zd2VyaW5nLmZyb21fcHJldHJhaW5lZCglMjJFbGV1dGhlckFJJTJGZ3B0LW5lby0xLjNCJTIyKSUwQSUwQXF1ZXN0aW9uJTJDJTIwdGV4dCUyMCUzRCUyMCUyMldobyUyMHdhcyUyMEppbSUyMEhlbnNvbiUzRiUyMiUyQyUyMCUyMkppbSUyMEhlbnNvbiUyMHdhcyUyMGElMjBuaWNlJTIwcHVwcGV0JTIyJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKHF1ZXN0aW9uJTJDJTIwdGV4dCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMG91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEFhbnN3ZXJfc3RhcnRfaW5kZXglMjAlM0QlMjBvdXRwdXRzLnN0YXJ0X2xvZ2l0cy5hcmdtYXgoKSUwQWFuc3dlcl9lbmRfaW5kZXglMjAlM0QlMjBvdXRwdXRzLmVuZF9sb2dpdHMuYXJnbWF4KCklMEElMEFwcmVkaWN0X2Fuc3dlcl90b2tlbnMlMjAlM0QlMjBpbnB1dHMuaW5wdXRfaWRzJTVCMCUyQyUyMGFuc3dlcl9zdGFydF9pbmRleCUyMCUzQSUyMGFuc3dlcl9lbmRfaW5kZXglMjAlMkIlMjAxJTVEJTBBJTBBJTIzJTIwdGFyZ2V0JTIwaXMlMjAlMjJuaWNlJTIwcHVwcGV0JTIyJTBBdGFyZ2V0X3N0YXJ0X2luZGV4JTIwJTNEJTIwdG9yY2gudGVuc29yKCU1QjE0JTVEKSUwQXRhcmdldF9lbmRfaW5kZXglMjAlM0QlMjB0b3JjaC50ZW5zb3IoJTVCMTUlNUQpJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwc3RhcnRfcG9zaXRpb25zJTNEdGFyZ2V0X3N0YXJ0X2luZGV4JTJDJTIwZW5kX3Bvc2l0aW9ucyUzRHRhcmdldF9lbmRfaW5kZXgpJTBBbG9zcyUyMCUzRCUyMG91dHB1dHMubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, GPTNeoForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`,wrap:!1}}),{c(){e=p("p"),e.textContent=u,t=l(),_(s.$$.fragment)},l(o){e=m(o,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11lpom8"&&(e.textContent=u),t=i(o),T(s.$$.fragment,o)},m(o,$){c(o,e,$),c(o,t,$),y(s,o,$),h=!0},p:ae,i(o){h||(b(s.$$.fragment,o),h=!0)},o(o){M(s.$$.fragment,o),h=!1},d(o){o&&(d(e),d(t)),w(s,o)}}}function wo(G){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=p("p"),e.innerHTML=u},l(t){e=m(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(t,s){c(t,e,s)},p:ae,d(t){t&&d(e)}}}function vo(G){let e,u="Example of single-label classification:",t,s,h;return s=new He({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEdQVE5lb0ZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJFbGV1dGhlckFJJTJGZ3B0LW5lby0xLjNCJTIyKSUwQW1vZGVsJTIwJTNEJTIwR1BUTmVvRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyRWxldXRoZXJBSSUyRmdwdC1uZW8tMS4zQiUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEFwcmVkaWN0ZWRfY2xhc3NfaWQlMjAlM0QlMjBsb2dpdHMuYXJnbWF4KCkuaXRlbSgpJTBBJTBBJTIzJTIwVG8lMjB0cmFpbiUyMGElMjBtb2RlbCUyMG9uJTIwJTYwbnVtX2xhYmVscyU2MCUyMGNsYXNzZXMlMkMlMjB5b3UlMjBjYW4lMjBwYXNzJTIwJTYwbnVtX2xhYmVscyUzRG51bV9sYWJlbHMlNjAlMjB0byUyMCU2MC5mcm9tX3ByZXRyYWluZWQoLi4uKSU2MCUwQW51bV9sYWJlbHMlMjAlM0QlMjBsZW4obW9kZWwuY29uZmlnLmlkMmxhYmVsKSUwQW1vZGVsJTIwJTNEJTIwR1BUTmVvRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyRWxldXRoZXJBSSUyRmdwdC1uZW8tMS4zQiUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzKSUwQSUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxJTVEKSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, GPTNeoForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=p("p"),e.textContent=u,t=l(),_(s.$$.fragment)},l(o){e=m(o,"P",{"data-svelte-h":!0}),g(e)!=="svelte-ykxpe4"&&(e.textContent=u),t=i(o),T(s.$$.fragment,o)},m(o,$){c(o,e,$),c(o,t,$),y(s,o,$),h=!0},p:ae,i(o){h||(b(s.$$.fragment,o),h=!0)},o(o){M(s.$$.fragment,o),h=!1},d(o){o&&(d(e),d(t)),w(s,o)}}}function ko(G){let e,u="Example of multi-label classification:",t,s,h;return s=new He({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEdQVE5lb0ZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJFbGV1dGhlckFJJTJGZ3B0LW5lby0xLjNCJTIyKSUwQW1vZGVsJTIwJTNEJTIwR1BUTmVvRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyRWxldXRoZXJBSSUyRmdwdC1uZW8tMS4zQiUyMiUyQyUyMHByb2JsZW1fdHlwZSUzRCUyMm11bHRpX2xhYmVsX2NsYXNzaWZpY2F0aW9uJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEElMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQXByZWRpY3RlZF9jbGFzc19pZHMlMjAlM0QlMjB0b3JjaC5hcmFuZ2UoMCUyQyUyMGxvZ2l0cy5zaGFwZSU1Qi0xJTVEKSU1QnRvcmNoLnNpZ21vaWQobG9naXRzKS5zcXVlZXplKGRpbSUzRDApJTIwJTNFJTIwMC41JTVEJTBBJTBBJTIzJTIwVG8lMjB0cmFpbiUyMGElMjBtb2RlbCUyMG9uJTIwJTYwbnVtX2xhYmVscyU2MCUyMGNsYXNzZXMlMkMlMjB5b3UlMjBjYW4lMjBwYXNzJTIwJTYwbnVtX2xhYmVscyUzRG51bV9sYWJlbHMlNjAlMjB0byUyMCU2MC5mcm9tX3ByZXRyYWluZWQoLi4uKSU2MCUwQW51bV9sYWJlbHMlMjAlM0QlMjBsZW4obW9kZWwuY29uZmlnLmlkMmxhYmVsKSUwQW1vZGVsJTIwJTNEJTIwR1BUTmVvRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTBBJTIwJTIwJTIwJTIwJTIyRWxldXRoZXJBSSUyRmdwdC1uZW8tMS4zQiUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIlMEEpJTBBJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2guc3VtKCUwQSUyMCUyMCUyMCUyMHRvcmNoLm5uLmZ1bmN0aW9uYWwub25lX2hvdChwcmVkaWN0ZWRfY2xhc3NfaWRzJTVCTm9uZSUyQyUyMCUzQSU1RC5jbG9uZSgpJTJDJTIwbnVtX2NsYXNzZXMlM0RudW1fbGFiZWxzKSUyQyUyMGRpbSUzRDElMEEpLnRvKHRvcmNoLmZsb2F0KSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, GPTNeoForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.arange(<span class="hljs-number">0</span>, logits.shape[-<span class="hljs-number">1</span>])[torch.sigmoid(logits).squeeze(dim=<span class="hljs-number">0</span>) &gt; <span class="hljs-number">0.5</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.<span class="hljs-built_in">sum</span>(
<span class="hljs-meta">... </span>    torch.nn.functional.one_hot(predicted_class_ids[<span class="hljs-literal">None</span>, :].clone(), num_classes=num_labels), dim=<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>).to(torch.<span class="hljs-built_in">float</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=p("p"),e.textContent=u,t=l(),_(s.$$.fragment)},l(o){e=m(o,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1l8e32d"&&(e.textContent=u),t=i(o),T(s.$$.fragment,o)},m(o,$){c(o,e,$),c(o,t,$),y(s,o,$),h=!0},p:ae,i(o){h||(b(s.$$.fragment,o),h=!0)},o(o){M(s.$$.fragment,o),h=!1},d(o){o&&(d(e),d(t)),w(s,o)}}}function $o(G){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=p("p"),e.innerHTML=u},l(t){e=m(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(t,s){c(t,e,s)},p:ae,d(t){t&&d(e)}}}function xo(G){let e,u="Example:",t,s,h;return s=new He({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBHUFROZW9Gb3JUb2tlbkNsYXNzaWZpY2F0aW9uJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJFbGV1dGhlckFJJTJGZ3B0LW5lby0xMjVtJTIyKSUwQW1vZGVsJTIwJTNEJTIwR1BUTmVvRm9yVG9rZW5DbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyRWxldXRoZXJBSSUyRmdwdC1uZW8tMTI1bSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTBBJTIwJTIwJTIwJTIwJTIySHVnZ2luZ0ZhY2UlMjBpcyUyMGElMjBjb21wYW55JTIwYmFzZWQlMjBpbiUyMFBhcmlzJTIwYW5kJTIwTmV3JTIwWW9yayUyMiUyQyUyMGFkZF9zcGVjaWFsX3Rva2VucyUzREZhbHNlJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiUwQSklMEElMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQXByZWRpY3RlZF90b2tlbl9jbGFzc19pZHMlMjAlM0QlMjBsb2dpdHMuYXJnbWF4KC0xKSUwQSUwQSUyMyUyME5vdGUlMjB0aGF0JTIwdG9rZW5zJTIwYXJlJTIwY2xhc3NpZmllZCUyMHJhdGhlciUyMHRoZW4lMjBpbnB1dCUyMHdvcmRzJTIwd2hpY2glMjBtZWFucyUyMHRoYXQlMEElMjMlMjB0aGVyZSUyMG1pZ2h0JTIwYmUlMjBtb3JlJTIwcHJlZGljdGVkJTIwdG9rZW4lMjBjbGFzc2VzJTIwdGhhbiUyMHdvcmRzLiUwQSUyMyUyME11bHRpcGxlJTIwdG9rZW4lMjBjbGFzc2VzJTIwbWlnaHQlMjBhY2NvdW50JTIwZm9yJTIwdGhlJTIwc2FtZSUyMHdvcmQlMEFwcmVkaWN0ZWRfdG9rZW5zX2NsYXNzZXMlMjAlM0QlMjAlNUJtb2RlbC5jb25maWcuaWQybGFiZWwlNUJ0Lml0ZW0oKSU1RCUyMGZvciUyMHQlMjBpbiUyMHByZWRpY3RlZF90b2tlbl9jbGFzc19pZHMlNUIwJTVEJTVEJTBBJTBBbGFiZWxzJTIwJTNEJTIwcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcyUwQXJvdW5kKGxvc3MuaXRlbSgpJTJDJTIwMik=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, GPTNeoForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-125m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoForTokenClassification.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-125m&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.25</span>`,wrap:!1}}),{c(){e=p("p"),e.textContent=u,t=l(),_(s.$$.fragment)},l(o){e=m(o,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11lpom8"&&(e.textContent=u),t=i(o),T(s.$$.fragment,o)},m(o,$){c(o,e,$),c(o,t,$),y(s,o,$),h=!0},p:ae,i(o){h||(b(s.$$.fragment,o),h=!0)},o(o){M(s.$$.fragment,o),h=!1},d(o){o&&(d(e),d(t)),w(s,o)}}}function Go(G){let e,u,t,s,h,o,$="The bare GPT Neo Model transformer outputting raw hidden-states without any specific head on top.",Pe,z,Oe=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Ue,W,De=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Ie,P,Me,ze,Z,Xe='The <a href="/docs/transformers/main/en/model_doc/gpt_neo#transformers.GPTNeoModel">GPTNeoModel</a> forward method, overrides the <code>__call__</code> special method.',ie,U,re,R,le,Y,we,N,he,ee,L,ve=`The GPT Neo Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`,ke,j,$e=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,We,B,Qe=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,de,I,O,Le,D,fe='The <a href="/docs/transformers/main/en/model_doc/gpt_neo#transformers.GPTNeoForCausalLM">GPTNeoForCausalLM</a> forward method, overrides the <code>__call__</code> special method.',Ee,H,ge,te,E,xe,Ge,J,X,q,V,Ae=`The GPT-Neo Model transformer with a span classification head on top for extractive question-answering tasks like
SQuAD (a linear layer on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,_e,K,Se=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,S,Te,k=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,x,F,C,Q,ce,rt='The <a href="/docs/transformers/main/en/model_doc/gpt_neo#transformers.GPTNeoForQuestionAnswering">GPTNeoForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',n,f,pe,Be,Jt,Ke,vt,lt,kt,A,it,jt,ut,Lt="The GPTNeo Model transformer with a sequence classification head on top (linear layer).",Ct,ht,Et=`<a href="/docs/transformers/main/en/model_doc/gpt_neo#transformers.GPTNeoForSequenceClassification">GPTNeoForSequenceClassification</a> uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`,Nt,ft,St=`Since it does classification on the last token, it requires to know the position of the last token. If a
<code>pad_token_id</code> is defined in the configuration, it finds the last token that is not a padding token in each row. If
no <code>pad_token_id</code> is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when <code>inputs_embeds</code> are passed instead of <code>input_ids</code>, it does the same (take the last value in
each row of the batch).`,Ft,gt,At=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Pt,_t,Yt=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Ut,ye,dt,It,Tt,Ot='The <a href="/docs/transformers/main/en/model_doc/gpt_neo#transformers.GPTNeoForSequenceClassification">GPTNeoForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',zt,et,Wt,tt,Zt,ot,$t,ct,xt,me,pt,Bt,yt,Dt=`GPT Neo model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`,qt,bt,Kt=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Vt,Mt,eo=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Rt,Ze,mt,Ht,wt,to='The <a href="/docs/transformers/main/en/model_doc/gpt_neo#transformers.GPTNeoForTokenClassification">GPTNeoForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',Xt,nt,Qt,st,Gt;return e=new be({props:{title:"GPTNeoModel",local:"transformers.GPTNeoModel",headingTag:"h2"}}),s=new ue({props:{name:"class transformers.GPTNeoModel",anchor:"transformers.GPTNeoModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt_neo#transformers.GPTNeoConfig">GPTNeoConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt_neo/modeling_gpt_neo.py#L712"}}),Me=new ue({props:{name:"forward",anchor:"transformers.GPTNeoModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.GPTNeoModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTNeoModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.num_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.GPTNeoModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTNeoModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPTNeoModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTNeoModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTNeoModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.GPTNeoModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.GPTNeoModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTNeoModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTNeoModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt_neo/modeling_gpt_neo.py#L738",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt_neo#transformers.GPTNeoConfig"
>GPTNeoConfig</a>) and inputs.</p>
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
`}}),U=new at({props:{$$slots:{default:[fo]},$$scope:{ctx:G}}}),R=new Ye({props:{anchor:"transformers.GPTNeoModel.forward.example",$$slots:{default:[go]},$$scope:{ctx:G}}}),Y=new be({props:{title:"GPTNeoForCausalLM",local:"transformers.GPTNeoForCausalLM",headingTag:"h2"}}),he=new ue({props:{name:"class transformers.GPTNeoForCausalLM",anchor:"transformers.GPTNeoForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt_neo#transformers.GPTNeoConfig">GPTNeoConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt_neo/modeling_gpt_neo.py#L877"}}),O=new ue({props:{name:"forward",anchor:"transformers.GPTNeoForCausalLM.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.GPTNeoForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTNeoForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.num_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.GPTNeoForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTNeoForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPTNeoForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTNeoForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTNeoForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.GPTNeoForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.GPTNeoForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTNeoForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTNeoForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTNeoForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt_neo/modeling_gpt_neo.py#L946",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt_neo#transformers.GPTNeoConfig"
>GPTNeoConfig</a>) and inputs.</p>
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
`}}),H=new at({props:{$$slots:{default:[_o]},$$scope:{ctx:G}}}),te=new Ye({props:{anchor:"transformers.GPTNeoForCausalLM.forward.example",$$slots:{default:[To]},$$scope:{ctx:G}}}),xe=new be({props:{title:"GPTNeoForQuestionAnswering",local:"transformers.GPTNeoForQuestionAnswering",headingTag:"h2"}}),X=new ue({props:{name:"class transformers.GPTNeoForQuestionAnswering",anchor:"transformers.GPTNeoForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt_neo#transformers.GPTNeoConfig">GPTNeoConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt_neo/modeling_gpt_neo.py#L1251"}}),C=new ue({props:{name:"forward",anchor:"transformers.GPTNeoForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"start_positions",val:": Optional = None"},{name:"end_positions",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.GPTNeoForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTNeoForQuestionAnswering.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.num_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.GPTNeoForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTNeoForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPTNeoForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTNeoForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTNeoForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.GPTNeoForQuestionAnswering.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.GPTNeoForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTNeoForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTNeoForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTNeoForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.GPTNeoForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt_neo/modeling_gpt_neo.py#L1268",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt_neo#transformers.GPTNeoConfig"
>GPTNeoConfig</a>) and inputs.</p>
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
`}}),f=new at({props:{$$slots:{default:[yo]},$$scope:{ctx:G}}}),Be=new at({props:{warning:!0,$$slots:{default:[bo]},$$scope:{ctx:G}}}),Ke=new Ye({props:{anchor:"transformers.GPTNeoForQuestionAnswering.forward.example",$$slots:{default:[Mo]},$$scope:{ctx:G}}}),lt=new be({props:{title:"GPTNeoForSequenceClassification",local:"transformers.GPTNeoForSequenceClassification",headingTag:"h2"}}),it=new ue({props:{name:"class transformers.GPTNeoForSequenceClassification",anchor:"transformers.GPTNeoForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt_neo#transformers.GPTNeoConfig">GPTNeoConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt_neo/modeling_gpt_neo.py#L1037"}}),dt=new ue({props:{name:"forward",anchor:"transformers.GPTNeoForSequenceClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.GPTNeoForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTNeoForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.num_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.GPTNeoForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTNeoForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPTNeoForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTNeoForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTNeoForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.GPTNeoForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.GPTNeoForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTNeoForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTNeoForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTNeoForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt_neo/modeling_gpt_neo.py#L1062",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt_neo#transformers.GPTNeoConfig"
>GPTNeoConfig</a>) and inputs.</p>
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
`}}),et=new at({props:{$$slots:{default:[wo]},$$scope:{ctx:G}}}),tt=new Ye({props:{anchor:"transformers.GPTNeoForSequenceClassification.forward.example",$$slots:{default:[vo]},$$scope:{ctx:G}}}),ot=new Ye({props:{anchor:"transformers.GPTNeoForSequenceClassification.forward.example-2",$$slots:{default:[ko]},$$scope:{ctx:G}}}),ct=new be({props:{title:"GPTNeoForTokenClassification",local:"transformers.GPTNeoForTokenClassification",headingTag:"h2"}}),pt=new ue({props:{name:"class transformers.GPTNeoForTokenClassification",anchor:"transformers.GPTNeoForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt_neo#transformers.GPTNeoConfig">GPTNeoConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt_neo/modeling_gpt_neo.py#L1166"}}),mt=new ue({props:{name:"forward",anchor:"transformers.GPTNeoForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.GPTNeoForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTNeoForTokenClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.num_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.GPTNeoForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTNeoForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPTNeoForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTNeoForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTNeoForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.GPTNeoForTokenClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.GPTNeoForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTNeoForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTNeoForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTNeoForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt_neo/modeling_gpt_neo.py#L1185",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt_neo#transformers.GPTNeoConfig"
>GPTNeoConfig</a>) and inputs.</p>
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
`}}),nt=new at({props:{$$slots:{default:[$o]},$$scope:{ctx:G}}}),st=new Ye({props:{anchor:"transformers.GPTNeoForTokenClassification.forward.example",$$slots:{default:[xo]},$$scope:{ctx:G}}}),{c(){_(e.$$.fragment),u=l(),t=p("div"),_(s.$$.fragment),h=l(),o=p("p"),o.textContent=$,Pe=l(),z=p("p"),z.innerHTML=Oe,Ue=l(),W=p("p"),W.innerHTML=De,Ie=l(),P=p("div"),_(Me.$$.fragment),ze=l(),Z=p("p"),Z.innerHTML=Xe,ie=l(),_(U.$$.fragment),re=l(),_(R.$$.fragment),le=l(),_(Y.$$.fragment),we=l(),N=p("div"),_(he.$$.fragment),ee=l(),L=p("p"),L.textContent=ve,ke=l(),j=p("p"),j.innerHTML=$e,We=l(),B=p("p"),B.innerHTML=Qe,de=l(),I=p("div"),_(O.$$.fragment),Le=l(),D=p("p"),D.innerHTML=fe,Ee=l(),_(H.$$.fragment),ge=l(),_(te.$$.fragment),E=l(),_(xe.$$.fragment),Ge=l(),J=p("div"),_(X.$$.fragment),q=l(),V=p("p"),V.innerHTML=Ae,_e=l(),K=p("p"),K.innerHTML=Se,S=l(),Te=p("p"),Te.innerHTML=k,x=l(),F=p("div"),_(C.$$.fragment),Q=l(),ce=p("p"),ce.innerHTML=rt,n=l(),_(f.$$.fragment),pe=l(),_(Be.$$.fragment),Jt=l(),_(Ke.$$.fragment),vt=l(),_(lt.$$.fragment),kt=l(),A=p("div"),_(it.$$.fragment),jt=l(),ut=p("p"),ut.textContent=Lt,Ct=l(),ht=p("p"),ht.innerHTML=Et,Nt=l(),ft=p("p"),ft.innerHTML=St,Ft=l(),gt=p("p"),gt.innerHTML=At,Pt=l(),_t=p("p"),_t.innerHTML=Yt,Ut=l(),ye=p("div"),_(dt.$$.fragment),It=l(),Tt=p("p"),Tt.innerHTML=Ot,zt=l(),_(et.$$.fragment),Wt=l(),_(tt.$$.fragment),Zt=l(),_(ot.$$.fragment),$t=l(),_(ct.$$.fragment),xt=l(),me=p("div"),_(pt.$$.fragment),Bt=l(),yt=p("p"),yt.textContent=Dt,qt=l(),bt=p("p"),bt.innerHTML=Kt,Vt=l(),Mt=p("p"),Mt.innerHTML=eo,Rt=l(),Ze=p("div"),_(mt.$$.fragment),Ht=l(),wt=p("p"),wt.innerHTML=to,Xt=l(),_(nt.$$.fragment),Qt=l(),_(st.$$.fragment),this.h()},l(a){T(e.$$.fragment,a),u=i(a),t=m(a,"DIV",{class:!0});var v=ne(t);T(s.$$.fragment,v),h=i(v),o=m(v,"P",{"data-svelte-h":!0}),g(o)!=="svelte-1vkbqia"&&(o.textContent=$),Pe=i(v),z=m(v,"P",{"data-svelte-h":!0}),g(z)!=="svelte-6pahdo"&&(z.innerHTML=Oe),Ue=i(v),W=m(v,"P",{"data-svelte-h":!0}),g(W)!=="svelte-hswkmf"&&(W.innerHTML=De),Ie=i(v),P=m(v,"DIV",{class:!0});var qe=ne(P);T(Me.$$.fragment,qe),ze=i(qe),Z=m(qe,"P",{"data-svelte-h":!0}),g(Z)!=="svelte-5212kj"&&(Z.innerHTML=Xe),ie=i(qe),T(U.$$.fragment,qe),re=i(qe),T(R.$$.fragment,qe),qe.forEach(d),v.forEach(d),le=i(a),T(Y.$$.fragment,a),we=i(a),N=m(a,"DIV",{class:!0});var Je=ne(N);T(he.$$.fragment,Je),ee=i(Je),L=m(Je,"P",{"data-svelte-h":!0}),g(L)!=="svelte-ygetm0"&&(L.textContent=ve),ke=i(Je),j=m(Je,"P",{"data-svelte-h":!0}),g(j)!=="svelte-6pahdo"&&(j.innerHTML=$e),We=i(Je),B=m(Je,"P",{"data-svelte-h":!0}),g(B)!=="svelte-hswkmf"&&(B.innerHTML=Qe),de=i(Je),I=m(Je,"DIV",{class:!0});var Ve=ne(I);T(O.$$.fragment,Ve),Le=i(Ve),D=m(Ve,"P",{"data-svelte-h":!0}),g(D)!=="svelte-1sa3soj"&&(D.innerHTML=fe),Ee=i(Ve),T(H.$$.fragment,Ve),ge=i(Ve),T(te.$$.fragment,Ve),Ve.forEach(d),Je.forEach(d),E=i(a),T(xe.$$.fragment,a),Ge=i(a),J=m(a,"DIV",{class:!0});var je=ne(J);T(X.$$.fragment,je),q=i(je),V=m(je,"P",{"data-svelte-h":!0}),g(V)!=="svelte-gjginq"&&(V.innerHTML=Ae),_e=i(je),K=m(je,"P",{"data-svelte-h":!0}),g(K)!=="svelte-6pahdo"&&(K.innerHTML=Se),S=i(je),Te=m(je,"P",{"data-svelte-h":!0}),g(Te)!=="svelte-hswkmf"&&(Te.innerHTML=k),x=i(je),F=m(je,"DIV",{class:!0});var Ce=ne(F);T(C.$$.fragment,Ce),Q=i(Ce),ce=m(Ce,"P",{"data-svelte-h":!0}),g(ce)!=="svelte-tjxrl7"&&(ce.innerHTML=rt),n=i(Ce),T(f.$$.fragment,Ce),pe=i(Ce),T(Be.$$.fragment,Ce),Jt=i(Ce),T(Ke.$$.fragment,Ce),Ce.forEach(d),je.forEach(d),vt=i(a),T(lt.$$.fragment,a),kt=i(a),A=m(a,"DIV",{class:!0});var oe=ne(A);T(it.$$.fragment,oe),jt=i(oe),ut=m(oe,"P",{"data-svelte-h":!0}),g(ut)!=="svelte-17hgce5"&&(ut.textContent=Lt),Ct=i(oe),ht=m(oe,"P",{"data-svelte-h":!0}),g(ht)!=="svelte-1xsuh2x"&&(ht.innerHTML=Et),Nt=i(oe),ft=m(oe,"P",{"data-svelte-h":!0}),g(ft)!=="svelte-10ugs3m"&&(ft.innerHTML=St),Ft=i(oe),gt=m(oe,"P",{"data-svelte-h":!0}),g(gt)!=="svelte-6pahdo"&&(gt.innerHTML=At),Pt=i(oe),_t=m(oe,"P",{"data-svelte-h":!0}),g(_t)!=="svelte-hswkmf"&&(_t.innerHTML=Yt),Ut=i(oe),ye=m(oe,"DIV",{class:!0});var Ne=ne(ye);T(dt.$$.fragment,Ne),It=i(Ne),Tt=m(Ne,"P",{"data-svelte-h":!0}),g(Tt)!=="svelte-1ksq5j3"&&(Tt.innerHTML=Ot),zt=i(Ne),T(et.$$.fragment,Ne),Wt=i(Ne),T(tt.$$.fragment,Ne),Zt=i(Ne),T(ot.$$.fragment,Ne),Ne.forEach(d),oe.forEach(d),$t=i(a),T(ct.$$.fragment,a),xt=i(a),me=m(a,"DIV",{class:!0});var Fe=ne(me);T(pt.$$.fragment,Fe),Bt=i(Fe),yt=m(Fe,"P",{"data-svelte-h":!0}),g(yt)!=="svelte-1pit5xw"&&(yt.textContent=Dt),qt=i(Fe),bt=m(Fe,"P",{"data-svelte-h":!0}),g(bt)!=="svelte-6pahdo"&&(bt.innerHTML=Kt),Vt=i(Fe),Mt=m(Fe,"P",{"data-svelte-h":!0}),g(Mt)!=="svelte-hswkmf"&&(Mt.innerHTML=eo),Rt=i(Fe),Ze=m(Fe,"DIV",{class:!0});var Re=ne(Ze);T(mt.$$.fragment,Re),Ht=i(Re),wt=m(Re,"P",{"data-svelte-h":!0}),g(wt)!=="svelte-n1rn9d"&&(wt.innerHTML=to),Xt=i(Re),T(nt.$$.fragment,Re),Qt=i(Re),T(st.$$.fragment,Re),Re.forEach(d),Fe.forEach(d),this.h()},h(){se(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),se(t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),se(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),se(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),se(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),se(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),se(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),se(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),se(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),se(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(a,v){y(e,a,v),c(a,u,v),c(a,t,v),y(s,t,null),r(t,h),r(t,o),r(t,Pe),r(t,z),r(t,Ue),r(t,W),r(t,Ie),r(t,P),y(Me,P,null),r(P,ze),r(P,Z),r(P,ie),y(U,P,null),r(P,re),y(R,P,null),c(a,le,v),y(Y,a,v),c(a,we,v),c(a,N,v),y(he,N,null),r(N,ee),r(N,L),r(N,ke),r(N,j),r(N,We),r(N,B),r(N,de),r(N,I),y(O,I,null),r(I,Le),r(I,D),r(I,Ee),y(H,I,null),r(I,ge),y(te,I,null),c(a,E,v),y(xe,a,v),c(a,Ge,v),c(a,J,v),y(X,J,null),r(J,q),r(J,V),r(J,_e),r(J,K),r(J,S),r(J,Te),r(J,x),r(J,F),y(C,F,null),r(F,Q),r(F,ce),r(F,n),y(f,F,null),r(F,pe),y(Be,F,null),r(F,Jt),y(Ke,F,null),c(a,vt,v),y(lt,a,v),c(a,kt,v),c(a,A,v),y(it,A,null),r(A,jt),r(A,ut),r(A,Ct),r(A,ht),r(A,Nt),r(A,ft),r(A,Ft),r(A,gt),r(A,Pt),r(A,_t),r(A,Ut),r(A,ye),y(dt,ye,null),r(ye,It),r(ye,Tt),r(ye,zt),y(et,ye,null),r(ye,Wt),y(tt,ye,null),r(ye,Zt),y(ot,ye,null),c(a,$t,v),y(ct,a,v),c(a,xt,v),c(a,me,v),y(pt,me,null),r(me,Bt),r(me,yt),r(me,qt),r(me,bt),r(me,Vt),r(me,Mt),r(me,Rt),r(me,Ze),y(mt,Ze,null),r(Ze,Ht),r(Ze,wt),r(Ze,Xt),y(nt,Ze,null),r(Ze,Qt),y(st,Ze,null),Gt=!0},p(a,v){const qe={};v&2&&(qe.$$scope={dirty:v,ctx:a}),U.$set(qe);const Je={};v&2&&(Je.$$scope={dirty:v,ctx:a}),R.$set(Je);const Ve={};v&2&&(Ve.$$scope={dirty:v,ctx:a}),H.$set(Ve);const je={};v&2&&(je.$$scope={dirty:v,ctx:a}),te.$set(je);const Ce={};v&2&&(Ce.$$scope={dirty:v,ctx:a}),f.$set(Ce);const oe={};v&2&&(oe.$$scope={dirty:v,ctx:a}),Be.$set(oe);const Ne={};v&2&&(Ne.$$scope={dirty:v,ctx:a}),Ke.$set(Ne);const Fe={};v&2&&(Fe.$$scope={dirty:v,ctx:a}),et.$set(Fe);const Re={};v&2&&(Re.$$scope={dirty:v,ctx:a}),tt.$set(Re);const oo={};v&2&&(oo.$$scope={dirty:v,ctx:a}),ot.$set(oo);const no={};v&2&&(no.$$scope={dirty:v,ctx:a}),nt.$set(no);const so={};v&2&&(so.$$scope={dirty:v,ctx:a}),st.$set(so)},i(a){Gt||(b(e.$$.fragment,a),b(s.$$.fragment,a),b(Me.$$.fragment,a),b(U.$$.fragment,a),b(R.$$.fragment,a),b(Y.$$.fragment,a),b(he.$$.fragment,a),b(O.$$.fragment,a),b(H.$$.fragment,a),b(te.$$.fragment,a),b(xe.$$.fragment,a),b(X.$$.fragment,a),b(C.$$.fragment,a),b(f.$$.fragment,a),b(Be.$$.fragment,a),b(Ke.$$.fragment,a),b(lt.$$.fragment,a),b(it.$$.fragment,a),b(dt.$$.fragment,a),b(et.$$.fragment,a),b(tt.$$.fragment,a),b(ot.$$.fragment,a),b(ct.$$.fragment,a),b(pt.$$.fragment,a),b(mt.$$.fragment,a),b(nt.$$.fragment,a),b(st.$$.fragment,a),Gt=!0)},o(a){M(e.$$.fragment,a),M(s.$$.fragment,a),M(Me.$$.fragment,a),M(U.$$.fragment,a),M(R.$$.fragment,a),M(Y.$$.fragment,a),M(he.$$.fragment,a),M(O.$$.fragment,a),M(H.$$.fragment,a),M(te.$$.fragment,a),M(xe.$$.fragment,a),M(X.$$.fragment,a),M(C.$$.fragment,a),M(f.$$.fragment,a),M(Be.$$.fragment,a),M(Ke.$$.fragment,a),M(lt.$$.fragment,a),M(it.$$.fragment,a),M(dt.$$.fragment,a),M(et.$$.fragment,a),M(tt.$$.fragment,a),M(ot.$$.fragment,a),M(ct.$$.fragment,a),M(pt.$$.fragment,a),M(mt.$$.fragment,a),M(nt.$$.fragment,a),M(st.$$.fragment,a),Gt=!1},d(a){a&&(d(u),d(t),d(le),d(we),d(N),d(E),d(Ge),d(J),d(vt),d(kt),d(A),d($t),d(xt),d(me)),w(e,a),w(s),w(Me),w(U),w(R),w(Y,a),w(he),w(O),w(H),w(te),w(xe,a),w(X),w(C),w(f),w(Be),w(Ke),w(lt,a),w(it),w(dt),w(et),w(tt),w(ot),w(ct,a),w(pt),w(mt),w(nt),w(st)}}}function Jo(G){let e,u;return e=new ao({props:{$$slots:{default:[Go]},$$scope:{ctx:G}}}),{c(){_(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,s){y(e,t,s),u=!0},p(t,s){const h={};s&2&&(h.$$scope={dirty:s,ctx:t}),e.$set(h)},i(t){u||(b(e.$$.fragment,t),u=!0)},o(t){M(e.$$.fragment,t),u=!1},d(t){w(e,t)}}}function jo(G){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=p("p"),e.innerHTML=u},l(t){e=m(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(t,s){c(t,e,s)},p:ae,d(t){t&&d(e)}}}function Co(G){let e,u="Example:",t,s,h;return s=new He({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4R1BUTmVvTW9kZWwlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJFbGV1dGhlckFJJTJGZ3B0LW5lby0xLjNCJTIyKSUwQW1vZGVsJTIwJTNEJTIwRmxheEdQVE5lb01vZGVsLmZyb21fcHJldHJhaW5lZCglMjJFbGV1dGhlckFJJTJGZ3B0LW5lby0xLjNCJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJqYXglMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQWxhc3RfaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxGPTNeoModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxGPTNeoModel.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=p("p"),e.textContent=u,t=l(),_(s.$$.fragment)},l(o){e=m(o,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11lpom8"&&(e.textContent=u),t=i(o),T(s.$$.fragment,o)},m(o,$){c(o,e,$),c(o,t,$),y(s,o,$),h=!0},p:ae,i(o){h||(b(s.$$.fragment,o),h=!0)},o(o){M(s.$$.fragment,o),h=!1},d(o){o&&(d(e),d(t)),w(s,o)}}}function No(G){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=p("p"),e.innerHTML=u},l(t){e=m(t,"P",{"data-svelte-h":!0}),g(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(t,s){c(t,e,s)},p:ae,d(t){t&&d(e)}}}function Fo(G){let e,u="Example:",t,s,h;return s=new He({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4R1BUTmVvRm9yQ2F1c2FsTE0lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJFbGV1dGhlckFJJTJGZ3B0LW5lby0xLjNCJTIyKSUwQW1vZGVsJTIwJTNEJTIwRmxheEdQVE5lb0ZvckNhdXNhbExNLmZyb21fcHJldHJhaW5lZCglMjJFbGV1dGhlckFJJTJGZ3B0LW5lby0xLjNCJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJucCUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBJTIzJTIwcmV0cmlldmUlMjBsb2d0cyUyMGZvciUyMG5leHQlMjB0b2tlbiUwQW5leHRfdG9rZW5fbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHMlNUIlM0ElMkMlMjAtMSU1RA==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxGPTNeoForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxGPTNeoForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve logts for next token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`,wrap:!1}}),{c(){e=p("p"),e.textContent=u,t=l(),_(s.$$.fragment)},l(o){e=m(o,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11lpom8"&&(e.textContent=u),t=i(o),T(s.$$.fragment,o)},m(o,$){c(o,e,$),c(o,t,$),y(s,o,$),h=!0},p:ae,i(o){h||(b(s.$$.fragment,o),h=!0)},o(o){M(s.$$.fragment,o),h=!1},d(o){o&&(d(e),d(t)),w(s,o)}}}function Po(G){let e,u,t,s,h,o,$="The bare GPTNeo Model transformer outputting raw hidden-states without any specific head on top.",Pe,z,Oe=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Ue,W,De=`This model is also a Flax Linen
<a href="https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html" rel="nofollow">flax.nn.Module</a> subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`,Ie,P,Me="Finally, this model supports inherent JAX features such as:",ze,Z,Xe='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',ie,U,re,R,le,Y="The <code>FlaxGPTNeoPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",we,N,he,ee,L,ve,ke,j,$e,We,B,Qe=`The GPTNeo Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`,de,I,O=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Le,D,fe=`This model is also a Flax Linen
<a href="https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html" rel="nofollow">flax.nn.Module</a> subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`,Ee,H,ge="Finally, this model supports inherent JAX features such as:",te,E,xe='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',Ge,J,X,q,V,Ae="The <code>FlaxGPTNeoPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",_e,K,Se,S,Te;return e=new be({props:{title:"FlaxGPTNeoModel",local:"transformers.FlaxGPTNeoModel",headingTag:"h2"}}),s=new ue({props:{name:"class transformers.FlaxGPTNeoModel",anchor:"transformers.FlaxGPTNeoModel",parameters:[{name:"config",val:": GPTNeoConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxGPTNeoModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt_neo#transformers.GPTNeoConfig">GPTNeoConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPTNeoModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt_neo/modeling_flax_gpt_neo.py#L587"}}),re=new ue({props:{name:"__call__",anchor:"transformers.FlaxGPTNeoModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FlaxGPTNeoModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxGPTNeoModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxGPTNeoModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxGPTNeoModel.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxGPTNeoModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxGPTNeoModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxGPTNeoModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt_neo/modeling_flax_gpt_neo.py#L401",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt_neo#transformers.GPTNeoConfig"
>GPTNeoConfig</a>) and inputs.</p>
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
`}}),N=new at({props:{$$slots:{default:[jo]},$$scope:{ctx:G}}}),ee=new Ye({props:{anchor:"transformers.FlaxGPTNeoModel.__call__.example",$$slots:{default:[Co]},$$scope:{ctx:G}}}),ve=new be({props:{title:"FlaxGPTNeoForCausalLM",local:"transformers.FlaxGPTNeoForCausalLM",headingTag:"h2"}}),$e=new ue({props:{name:"class transformers.FlaxGPTNeoForCausalLM",anchor:"transformers.FlaxGPTNeoForCausalLM",parameters:[{name:"config",val:": GPTNeoConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxGPTNeoForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt_neo#transformers.GPTNeoConfig">GPTNeoConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPTNeoForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt_neo/modeling_flax_gpt_neo.py#L647"}}),X=new ue({props:{name:"__call__",anchor:"transformers.FlaxGPTNeoForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FlaxGPTNeoForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxGPTNeoForCausalLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxGPTNeoForCausalLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxGPTNeoForCausalLM.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxGPTNeoForCausalLM.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxGPTNeoForCausalLM.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxGPTNeoForCausalLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt_neo/modeling_flax_gpt_neo.py#L401",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt_neo#transformers.GPTNeoConfig"
>GPTNeoConfig</a>) and inputs.</p>
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
`}}),K=new at({props:{$$slots:{default:[No]},$$scope:{ctx:G}}}),S=new Ye({props:{anchor:"transformers.FlaxGPTNeoForCausalLM.__call__.example",$$slots:{default:[Fo]},$$scope:{ctx:G}}}),{c(){_(e.$$.fragment),u=l(),t=p("div"),_(s.$$.fragment),h=l(),o=p("p"),o.textContent=$,Pe=l(),z=p("p"),z.innerHTML=Oe,Ue=l(),W=p("p"),W.innerHTML=De,Ie=l(),P=p("p"),P.textContent=Me,ze=l(),Z=p("ul"),Z.innerHTML=Xe,ie=l(),U=p("div"),_(re.$$.fragment),R=l(),le=p("p"),le.innerHTML=Y,we=l(),_(N.$$.fragment),he=l(),_(ee.$$.fragment),L=l(),_(ve.$$.fragment),ke=l(),j=p("div"),_($e.$$.fragment),We=l(),B=p("p"),B.textContent=Qe,de=l(),I=p("p"),I.innerHTML=O,Le=l(),D=p("p"),D.innerHTML=fe,Ee=l(),H=p("p"),H.textContent=ge,te=l(),E=p("ul"),E.innerHTML=xe,Ge=l(),J=p("div"),_(X.$$.fragment),q=l(),V=p("p"),V.innerHTML=Ae,_e=l(),_(K.$$.fragment),Se=l(),_(S.$$.fragment),this.h()},l(k){T(e.$$.fragment,k),u=i(k),t=m(k,"DIV",{class:!0});var x=ne(t);T(s.$$.fragment,x),h=i(x),o=m(x,"P",{"data-svelte-h":!0}),g(o)!=="svelte-1k424oq"&&(o.textContent=$),Pe=i(x),z=m(x,"P",{"data-svelte-h":!0}),g(z)!=="svelte-18ki9f4"&&(z.innerHTML=Oe),Ue=i(x),W=m(x,"P",{"data-svelte-h":!0}),g(W)!=="svelte-idybz1"&&(W.innerHTML=De),Ie=i(x),P=m(x,"P",{"data-svelte-h":!0}),g(P)!=="svelte-1pplc4a"&&(P.textContent=Me),ze=i(x),Z=m(x,"UL",{"data-svelte-h":!0}),g(Z)!=="svelte-1w7z84m"&&(Z.innerHTML=Xe),ie=i(x),U=m(x,"DIV",{class:!0});var F=ne(U);T(re.$$.fragment,F),R=i(F),le=m(F,"P",{"data-svelte-h":!0}),g(le)!=="svelte-f61feg"&&(le.innerHTML=Y),we=i(F),T(N.$$.fragment,F),he=i(F),T(ee.$$.fragment,F),F.forEach(d),x.forEach(d),L=i(k),T(ve.$$.fragment,k),ke=i(k),j=m(k,"DIV",{class:!0});var C=ne(j);T($e.$$.fragment,C),We=i(C),B=m(C,"P",{"data-svelte-h":!0}),g(B)!=="svelte-1889ma8"&&(B.textContent=Qe),de=i(C),I=m(C,"P",{"data-svelte-h":!0}),g(I)!=="svelte-18ki9f4"&&(I.innerHTML=O),Le=i(C),D=m(C,"P",{"data-svelte-h":!0}),g(D)!=="svelte-idybz1"&&(D.innerHTML=fe),Ee=i(C),H=m(C,"P",{"data-svelte-h":!0}),g(H)!=="svelte-1pplc4a"&&(H.textContent=ge),te=i(C),E=m(C,"UL",{"data-svelte-h":!0}),g(E)!=="svelte-1w7z84m"&&(E.innerHTML=xe),Ge=i(C),J=m(C,"DIV",{class:!0});var Q=ne(J);T(X.$$.fragment,Q),q=i(Q),V=m(Q,"P",{"data-svelte-h":!0}),g(V)!=="svelte-f61feg"&&(V.innerHTML=Ae),_e=i(Q),T(K.$$.fragment,Q),Se=i(Q),T(S.$$.fragment,Q),Q.forEach(d),C.forEach(d),this.h()},h(){se(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),se(t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),se(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),se(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(k,x){y(e,k,x),c(k,u,x),c(k,t,x),y(s,t,null),r(t,h),r(t,o),r(t,Pe),r(t,z),r(t,Ue),r(t,W),r(t,Ie),r(t,P),r(t,ze),r(t,Z),r(t,ie),r(t,U),y(re,U,null),r(U,R),r(U,le),r(U,we),y(N,U,null),r(U,he),y(ee,U,null),c(k,L,x),y(ve,k,x),c(k,ke,x),c(k,j,x),y($e,j,null),r(j,We),r(j,B),r(j,de),r(j,I),r(j,Le),r(j,D),r(j,Ee),r(j,H),r(j,te),r(j,E),r(j,Ge),r(j,J),y(X,J,null),r(J,q),r(J,V),r(J,_e),y(K,J,null),r(J,Se),y(S,J,null),Te=!0},p(k,x){const F={};x&2&&(F.$$scope={dirty:x,ctx:k}),N.$set(F);const C={};x&2&&(C.$$scope={dirty:x,ctx:k}),ee.$set(C);const Q={};x&2&&(Q.$$scope={dirty:x,ctx:k}),K.$set(Q);const ce={};x&2&&(ce.$$scope={dirty:x,ctx:k}),S.$set(ce)},i(k){Te||(b(e.$$.fragment,k),b(s.$$.fragment,k),b(re.$$.fragment,k),b(N.$$.fragment,k),b(ee.$$.fragment,k),b(ve.$$.fragment,k),b($e.$$.fragment,k),b(X.$$.fragment,k),b(K.$$.fragment,k),b(S.$$.fragment,k),Te=!0)},o(k){M(e.$$.fragment,k),M(s.$$.fragment,k),M(re.$$.fragment,k),M(N.$$.fragment,k),M(ee.$$.fragment,k),M(ve.$$.fragment,k),M($e.$$.fragment,k),M(X.$$.fragment,k),M(K.$$.fragment,k),M(S.$$.fragment,k),Te=!1},d(k){k&&(d(u),d(t),d(L),d(ke),d(j)),w(e,k),w(s),w(re),w(N),w(ee),w(ve,k),w($e),w(X),w(K),w(S)}}}function Uo(G){let e,u;return e=new ao({props:{$$slots:{default:[Po]},$$scope:{ctx:G}}}),{c(){_(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,s){y(e,t,s),u=!0},p(t,s){const h={};s&2&&(h.$$scope={dirty:s,ctx:t}),e.$set(h)},i(t){u||(b(e.$$.fragment,t),u=!0)},o(t){M(e.$$.fragment,t),u=!1},d(t){w(e,t)}}}function Io(G){let e,u,t,s,h,o,$,Pe,z,Oe=`The GPTNeo model was released in the <a href="https://github.com/EleutherAI/gpt-neo" rel="nofollow">EleutherAI/gpt-neo</a> repository by Sid
Black, Stella Biderman, Leo Gao, Phil Wang and Connor Leahy. It is a GPT2 like causal language model trained on the
<a href="https://pile.eleuther.ai/" rel="nofollow">Pile</a> dataset.`,Ue,W,De=`The architecture is similar to GPT2 except that GPT Neo uses local attention in every other layer with a window size of
256 tokens.`,Ie,P,Me='This model was contributed by <a href="https://huggingface.co/valhalla" rel="nofollow">valhalla</a>.',ze,Z,Xe,ie,U="The <code>generate()</code> method can be used to generate text using GPT Neo model.",re,R,le,Y,we,N,he='First, make sure to install the latest version of Flash Attention 2 to include the sliding window attention feature, and make sure your hardware is compatible with Flash-Attention 2. More details are available <a href="https://huggingface.co/docs/transformers/perf_infer_gpu_one#flashattention-2" rel="nofollow">here</a> concerning the installation.',ee,L,ve="Make sure as well to load your model in half-precision (e.g. <code>torch.float16</code>).",ke,j,$e="To load and run a model using Flash Attention 2, refer to the snippet below:",We,B,Qe,de,I,O,Le=`Below is an expected speedup diagram that compares pure inference time between the native implementation in transformers using <code>EleutherAI/gpt-neo-2.7B</code> checkpoint and the Flash Attention 2 version of the model.
Note that for GPT-Neo it is not possible to train / run on very long context as the max <a href="https://huggingface.co/EleutherAI/gpt-neo-2.7B/blob/main/config.json#L58" rel="nofollow">position embeddings</a> is limited to 2048 - but this is applicable to all gpt-neo models and not specific to FA-2`,D,fe,Ee='<img src="https://user-images.githubusercontent.com/49240599/272241893-b1c66b75-3a48-4265-bc47-688448568b3d.png"/>',H,ge,te,E,xe='<li><a href="../tasks/sequence_classification">Text classification task guide</a></li> <li><a href="../tasks/language_modeling">Causal language modeling task guide</a></li>',Ge,J,X,q,V,Ae,_e,K=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/gpt_neo#transformers.GPTNeoModel">GPTNeoModel</a>. It is used to instantiate a GPT
Neo model according to the specified arguments, defining the model architecture. Instantiating a configuration with
the defaults will yield a similar configuration to that of the GPTNeo
<a href="https://huggingface.co/EleutherAI/gpt-neo-1.3B" rel="nofollow">EleutherAI/gpt-neo-1.3B</a> architecture.`,Se,S,Te=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,k,x,F,C,Q,ce,rt;return h=new be({props:{title:"GPT Neo",local:"gpt-neo",headingTag:"h1"}}),$=new be({props:{title:"Overview",local:"overview",headingTag:"h2"}}),Z=new be({props:{title:"Usage example",local:"usage-example",headingTag:"h2"}}),R=new He({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEdQVE5lb0ZvckNhdXNhbExNJTJDJTIwR1BUMlRva2VuaXplciUwQSUwQW1vZGVsJTIwJTNEJTIwR1BUTmVvRm9yQ2F1c2FsTE0uZnJvbV9wcmV0cmFpbmVkKCUyMkVsZXV0aGVyQUklMkZncHQtbmVvLTEuM0IlMjIpJTBBdG9rZW5pemVyJTIwJTNEJTIwR1BUMlRva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyRWxldXRoZXJBSSUyRmdwdC1uZW8tMS4zQiUyMiklMEElMEFwcm9tcHQlMjAlM0QlMjAoJTBBJTIwJTIwJTIwJTIwJTIySW4lMjBhJTIwc2hvY2tpbmclMjBmaW5kaW5nJTJDJTIwc2NpZW50aXN0cyUyMGRpc2NvdmVyZWQlMjBhJTIwaGVyZCUyMG9mJTIwdW5pY29ybnMlMjBsaXZpbmclMjBpbiUyMGElMjByZW1vdGUlMkMlMjAlMjIlMEElMjAlMjAlMjAlMjAlMjJwcmV2aW91c2x5JTIwdW5leHBsb3JlZCUyMHZhbGxleSUyQyUyMGluJTIwdGhlJTIwQW5kZXMlMjBNb3VudGFpbnMuJTIwRXZlbiUyMG1vcmUlMjBzdXJwcmlzaW5nJTIwdG8lMjB0aGUlMjAlMjIlMEElMjAlMjAlMjAlMjAlMjJyZXNlYXJjaGVycyUyMHdhcyUyMHRoZSUyMGZhY3QlMjB0aGF0JTIwdGhlJTIwdW5pY29ybnMlMjBzcG9rZSUyMHBlcmZlY3QlMjBFbmdsaXNoLiUyMiUwQSklMEElMEFpbnB1dF9pZHMlMjAlM0QlMjB0b2tlbml6ZXIocHJvbXB0JTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMikuaW5wdXRfaWRzJTBBJTBBZ2VuX3Rva2VucyUyMCUzRCUyMG1vZGVsLmdlbmVyYXRlKCUwQSUyMCUyMCUyMCUyMGlucHV0X2lkcyUyQyUwQSUyMCUyMCUyMCUyMGRvX3NhbXBsZSUzRFRydWUlMkMlMEElMjAlMjAlMjAlMjB0ZW1wZXJhdHVyZSUzRDAuOSUyQyUwQSUyMCUyMCUyMCUyMG1heF9sZW5ndGglM0QxMDAlMkMlMEEpJTBBZ2VuX3RleHQlMjAlM0QlMjB0b2tlbml6ZXIuYmF0Y2hfZGVjb2RlKGdlbl90b2tlbnMpJTVCMCU1RA==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTNeoForCausalLM, GPT2Tokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-1.3B&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>gen_text = tokenizer.batch_decode(gen_tokens)[<span class="hljs-number">0</span>]`,wrap:!1}}),Y=new be({props:{title:"Combining GPT-Neo and Flash Attention 2",local:"combining-gpt-neo-and-flash-attention-2",headingTag:"h2"}}),B=new He({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b01vZGVsRm9yQ2F1c2FsTE0lMkMlMjBBdXRvVG9rZW5pemVyJTBBZGV2aWNlJTIwJTNEJTIwJTIyY3VkYSUyMiUyMCUyMyUyMHRoZSUyMGRldmljZSUyMHRvJTIwbG9hZCUyMHRoZSUyMG1vZGVsJTIwb250byUwQSUwQW1vZGVsJTIwJTNEJTIwQXV0b01vZGVsRm9yQ2F1c2FsTE0uZnJvbV9wcmV0cmFpbmVkKCUyMkVsZXV0aGVyQUklMkZncHQtbmVvLTIuN0IlMjIlMkMlMjB0b3JjaF9kdHlwZSUzRHRvcmNoLmZsb2F0MTYlMkMlMjBhdHRuX2ltcGxlbWVudGF0aW9uJTNEJTIyZmxhc2hfYXR0ZW50aW9uXzIlMjIpJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyRWxldXRoZXJBSSUyRmdwdC1uZW8tMi43QiUyMiklMEElMEFwcm9tcHQlMjAlM0QlMjAlMjJkZWYlMjBoZWxsb193b3JsZCgpJTNBJTIyJTBBJTBBbW9kZWxfaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCU1QnByb21wdCU1RCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpLnRvKGRldmljZSklMEFtb2RlbC50byhkZXZpY2UpJTBBJTBBZ2VuZXJhdGVkX2lkcyUyMCUzRCUyMG1vZGVsLmdlbmVyYXRlKCoqbW9kZWxfaW5wdXRzJTJDJTIwbWF4X25ld190b2tlbnMlM0QxMDAlMkMlMjBkb19zYW1wbGUlM0RUcnVlKSUwQXRva2VuaXplci5iYXRjaF9kZWNvZGUoZ2VuZXJhdGVkX2lkcyklNUIwJTVE",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForCausalLM, AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span>device = <span class="hljs-string">&quot;cuda&quot;</span> <span class="hljs-comment"># the device to load the model onto</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-2.7B&quot;</span>, torch_dtype=torch.float16, attn_implementation=<span class="hljs-string">&quot;flash_attention_2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neo-2.7B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;def hello_world():&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer([prompt], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).to(device)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.to(device)

<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(**model_inputs, max_new_tokens=<span class="hljs-number">100</span>, do_sample=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generated_ids)[<span class="hljs-number">0</span>]
<span class="hljs-string">&quot;def hello_world():\\n    &gt;&gt;&gt; run_script(&quot;</span>hello.py<span class="hljs-string">&quot;)\\n    &gt;&gt;&gt; exit(0)\\n&lt;|endoftext|&gt;&quot;</span>`,wrap:!1}}),de=new be({props:{title:"Expected speedups",local:"expected-speedups",headingTag:"h3"}}),ge=new be({props:{title:"Resources",local:"resources",headingTag:"h2"}}),J=new be({props:{title:"GPTNeoConfig",local:"transformers.GPTNeoConfig",headingTag:"h2"}}),V=new ue({props:{name:"class transformers.GPTNeoConfig",anchor:"transformers.GPTNeoConfig",parameters:[{name:"vocab_size",val:" = 50257"},{name:"max_position_embeddings",val:" = 2048"},{name:"hidden_size",val:" = 2048"},{name:"num_layers",val:" = 24"},{name:"attention_types",val:" = [[['global', 'local'], 12]]"},{name:"num_heads",val:" = 16"},{name:"intermediate_size",val:" = None"},{name:"window_size",val:" = 256"},{name:"activation_function",val:" = 'gelu_new'"},{name:"resid_dropout",val:" = 0.0"},{name:"embed_dropout",val:" = 0.0"},{name:"attention_dropout",val:" = 0.0"},{name:"classifier_dropout",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"use_cache",val:" = True"},{name:"bos_token_id",val:" = 50256"},{name:"eos_token_id",val:" = 50256"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50257) &#x2014;
Vocabulary size of the GPT Neo model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/gpt_neo#transformers.GPTNeoModel">GPTNeoModel</a>. Vocabulary size of the model. Defines the different
tokens that can be represented by the <em>inputs_ids</em> passed to the forward method of <a href="/docs/transformers/main/en/model_doc/gpt_neo#transformers.GPTNeoModel">GPTNeoModel</a>.`,name:"vocab_size"},{anchor:"transformers.GPTNeoConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.GPTNeoConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.GPTNeoConfig.num_layers",description:`<strong>num_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_layers"},{anchor:"transformers.GPTNeoConfig.attention_types",description:`<strong>attention_types</strong> (<code>List</code>, <em>optional</em>, defaults to <code>[[[&apos;global&apos;, &apos;local&apos;], 12]]</code>) &#x2014;
The type of attention for each layer in a <code>List</code> of the following format <code>[[[&quot;attention_type&quot;], num_layerss]]</code> e.g. for a 24 layer model <code>[[[&quot;global&quot;], 24]]</code> or <code>[[[&quot;global&quot;, &quot;local&quot;], 12]]</code> Choose the
value of <code>attention_type</code> from <code>[&quot;global&quot;, &quot;local&quot;]</code>`,name:"attention_types"},{anchor:"transformers.GPTNeoConfig.num_heads",description:`<strong>num_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_heads"},{anchor:"transformers.GPTNeoConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 8192) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.GPTNeoConfig.window_size",description:`<strong>window_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
The size of the sliding window for local attention.`,name:"window_size"},{anchor:"transformers.GPTNeoConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu_new&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.GPTNeoConfig.resid_dropout",description:`<strong>resid_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Residual dropout used in the attention pattern.`,name:"resid_dropout"},{anchor:"transformers.GPTNeoConfig.embed_dropout",description:`<strong>embed_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"embed_dropout"},{anchor:"transformers.GPTNeoConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.GPTNeoConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Argument used when doing token classification, used in the model <a href="/docs/transformers/main/en/model_doc/gpt_neo#transformers.GPTNeoForTokenClassification">GPTNeoForTokenClassification</a>. The
dropout ratio for the hidden layer.`,name:"classifier_dropout"},{anchor:"transformers.GPTNeoConfig.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-05) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_epsilon"},{anchor:"transformers.GPTNeoConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.GPTNeoConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.GPTNeoConfig.bos_token_id",description:`<strong>bos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 50256) &#x2014;
The id of the beginning of sentence token in the vocabulary.`,name:"bos_token_id"},{anchor:"transformers.GPTNeoConfig.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 50256) &#x2014;
The id of the end of sentence token in the vocabulary.`,name:"eos_token_id"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt_neo/configuration_gpt_neo.py#L34"}}),x=new Ye({props:{anchor:"transformers.GPTNeoConfig.example",$$slots:{default:[ho]},$$scope:{ctx:G}}}),C=new uo({props:{pytorch:!0,tensorflow:!1,jax:!0,$$slots:{jax:[Uo],pytorch:[Jo]},$$scope:{ctx:G}}}),{c(){e=p("meta"),u=l(),t=p("p"),s=l(),_(h.$$.fragment),o=l(),_($.$$.fragment),Pe=l(),z=p("p"),z.innerHTML=Oe,Ue=l(),W=p("p"),W.textContent=De,Ie=l(),P=p("p"),P.innerHTML=Me,ze=l(),_(Z.$$.fragment),Xe=l(),ie=p("p"),ie.innerHTML=U,re=l(),_(R.$$.fragment),le=l(),_(Y.$$.fragment),we=l(),N=p("p"),N.innerHTML=he,ee=l(),L=p("p"),L.innerHTML=ve,ke=l(),j=p("p"),j.textContent=$e,We=l(),_(B.$$.fragment),Qe=l(),_(de.$$.fragment),I=l(),O=p("p"),O.innerHTML=Le,D=l(),fe=p("div"),fe.innerHTML=Ee,H=l(),_(ge.$$.fragment),te=l(),E=p("ul"),E.innerHTML=xe,Ge=l(),_(J.$$.fragment),X=l(),q=p("div"),_(V.$$.fragment),Ae=l(),_e=p("p"),_e.innerHTML=K,Se=l(),S=p("p"),S.innerHTML=Te,k=l(),_(x.$$.fragment),F=l(),_(C.$$.fragment),Q=l(),ce=p("p"),this.h()},l(n){const f=po("svelte-u9bgzb",document.head);e=m(f,"META",{name:!0,content:!0}),f.forEach(d),u=i(n),t=m(n,"P",{}),ne(t).forEach(d),s=i(n),T(h.$$.fragment,n),o=i(n),T($.$$.fragment,n),Pe=i(n),z=m(n,"P",{"data-svelte-h":!0}),g(z)!=="svelte-1bj8qi3"&&(z.innerHTML=Oe),Ue=i(n),W=m(n,"P",{"data-svelte-h":!0}),g(W)!=="svelte-1wf6p9c"&&(W.textContent=De),Ie=i(n),P=m(n,"P",{"data-svelte-h":!0}),g(P)!=="svelte-z2se1l"&&(P.innerHTML=Me),ze=i(n),T(Z.$$.fragment,n),Xe=i(n),ie=m(n,"P",{"data-svelte-h":!0}),g(ie)!=="svelte-mhi95y"&&(ie.innerHTML=U),re=i(n),T(R.$$.fragment,n),le=i(n),T(Y.$$.fragment,n),we=i(n),N=m(n,"P",{"data-svelte-h":!0}),g(N)!=="svelte-i9dlab"&&(N.innerHTML=he),ee=i(n),L=m(n,"P",{"data-svelte-h":!0}),g(L)!=="svelte-1g1dfjg"&&(L.innerHTML=ve),ke=i(n),j=m(n,"P",{"data-svelte-h":!0}),g(j)!=="svelte-14hchid"&&(j.textContent=$e),We=i(n),T(B.$$.fragment,n),Qe=i(n),T(de.$$.fragment,n),I=i(n),O=m(n,"P",{"data-svelte-h":!0}),g(O)!=="svelte-1r7180s"&&(O.innerHTML=Le),D=i(n),fe=m(n,"DIV",{style:!0,"data-svelte-h":!0}),g(fe)!=="svelte-duh08u"&&(fe.innerHTML=Ee),H=i(n),T(ge.$$.fragment,n),te=i(n),E=m(n,"UL",{"data-svelte-h":!0}),g(E)!=="svelte-17u5l9r"&&(E.innerHTML=xe),Ge=i(n),T(J.$$.fragment,n),X=i(n),q=m(n,"DIV",{class:!0});var pe=ne(q);T(V.$$.fragment,pe),Ae=i(pe),_e=m(pe,"P",{"data-svelte-h":!0}),g(_e)!=="svelte-1ihl3n5"&&(_e.innerHTML=K),Se=i(pe),S=m(pe,"P",{"data-svelte-h":!0}),g(S)!=="svelte-o55m63"&&(S.innerHTML=Te),k=i(pe),T(x.$$.fragment,pe),pe.forEach(d),F=i(n),T(C.$$.fragment,n),Q=i(n),ce=m(n,"P",{}),ne(ce).forEach(d),this.h()},h(){se(e,"name","hf:doc:metadata"),se(e,"content",zo),mo(fe,"text-align","center"),se(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(n,f){r(document.head,e),c(n,u,f),c(n,t,f),c(n,s,f),y(h,n,f),c(n,o,f),y($,n,f),c(n,Pe,f),c(n,z,f),c(n,Ue,f),c(n,W,f),c(n,Ie,f),c(n,P,f),c(n,ze,f),y(Z,n,f),c(n,Xe,f),c(n,ie,f),c(n,re,f),y(R,n,f),c(n,le,f),y(Y,n,f),c(n,we,f),c(n,N,f),c(n,ee,f),c(n,L,f),c(n,ke,f),c(n,j,f),c(n,We,f),y(B,n,f),c(n,Qe,f),y(de,n,f),c(n,I,f),c(n,O,f),c(n,D,f),c(n,fe,f),c(n,H,f),y(ge,n,f),c(n,te,f),c(n,E,f),c(n,Ge,f),y(J,n,f),c(n,X,f),c(n,q,f),y(V,q,null),r(q,Ae),r(q,_e),r(q,Se),r(q,S),r(q,k),y(x,q,null),c(n,F,f),y(C,n,f),c(n,Q,f),c(n,ce,f),rt=!0},p(n,[f]){const pe={};f&2&&(pe.$$scope={dirty:f,ctx:n}),x.$set(pe);const Be={};f&2&&(Be.$$scope={dirty:f,ctx:n}),C.$set(Be)},i(n){rt||(b(h.$$.fragment,n),b($.$$.fragment,n),b(Z.$$.fragment,n),b(R.$$.fragment,n),b(Y.$$.fragment,n),b(B.$$.fragment,n),b(de.$$.fragment,n),b(ge.$$.fragment,n),b(J.$$.fragment,n),b(V.$$.fragment,n),b(x.$$.fragment,n),b(C.$$.fragment,n),rt=!0)},o(n){M(h.$$.fragment,n),M($.$$.fragment,n),M(Z.$$.fragment,n),M(R.$$.fragment,n),M(Y.$$.fragment,n),M(B.$$.fragment,n),M(de.$$.fragment,n),M(ge.$$.fragment,n),M(J.$$.fragment,n),M(V.$$.fragment,n),M(x.$$.fragment,n),M(C.$$.fragment,n),rt=!1},d(n){n&&(d(u),d(t),d(s),d(o),d(Pe),d(z),d(Ue),d(W),d(Ie),d(P),d(ze),d(Xe),d(ie),d(re),d(le),d(we),d(N),d(ee),d(L),d(ke),d(j),d(We),d(Qe),d(I),d(O),d(D),d(fe),d(H),d(te),d(E),d(Ge),d(X),d(q),d(F),d(Q),d(ce)),d(e),w(h,n),w($,n),w(Z,n),w(R,n),w(Y,n),w(B,n),w(de,n),w(ge,n),w(J,n),w(V),w(x),w(C,n)}}}const zo='{"title":"GPT Neo","local":"gpt-neo","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage example","local":"usage-example","sections":[],"depth":2},{"title":"Combining GPT-Neo and Flash Attention 2","local":"combining-gpt-neo-and-flash-attention-2","sections":[{"title":"Expected speedups","local":"expected-speedups","sections":[],"depth":3}],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"GPTNeoConfig","local":"transformers.GPTNeoConfig","sections":[],"depth":2},{"title":"GPTNeoModel","local":"transformers.GPTNeoModel","sections":[],"depth":2},{"title":"GPTNeoForCausalLM","local":"transformers.GPTNeoForCausalLM","sections":[],"depth":2},{"title":"GPTNeoForQuestionAnswering","local":"transformers.GPTNeoForQuestionAnswering","sections":[],"depth":2},{"title":"GPTNeoForSequenceClassification","local":"transformers.GPTNeoForSequenceClassification","sections":[],"depth":2},{"title":"GPTNeoForTokenClassification","local":"transformers.GPTNeoForTokenClassification","sections":[],"depth":2},{"title":"FlaxGPTNeoModel","local":"transformers.FlaxGPTNeoModel","sections":[],"depth":2},{"title":"FlaxGPTNeoForCausalLM","local":"transformers.FlaxGPTNeoForCausalLM","sections":[],"depth":2}],"depth":1}';function Wo(G){return lo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Lo extends io{constructor(e){super(),co(this,e,Wo,Io,ro,{})}}export{Lo as component};
