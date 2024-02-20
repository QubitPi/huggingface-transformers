import{s as Jo,o as Fo,n as j}from"../chunks/scheduler.9bc65507.js";import{S as Uo,i as Po,g as p,s as r,r as u,A as zo,h as m,f as s,c as l,j as F,u as h,x as y,k as U,l as Wo,y as c,a as i,v as f,d as g,t as _,w as T}from"../chunks/index.707bf1b6.js";import{T as ge}from"../chunks/Tip.c2ecdbf4.js";import{D as q}from"../chunks/Docstring.17db21ae.js";import{C as R}from"../chunks/CodeBlock.54a9f38d.js";import{E as _e}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as N}from"../chunks/Heading.342b1fa6.js";function Zo(k){let t,b;return t=new R({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEdQVE5lb1hDb25maWclMkMlMjBHUFROZW9YTW9kZWwlMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwR1BUTmVvWCUyMGdwdC1uZW94LTIwYiUyMHN0eWxlJTIwY29uZmlndXJhdGlvbiUwQWNvbmZpZ3VyYXRpb24lMjAlM0QlMjBHUFROZW9YQ29uZmlnKCklMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwbW9kZWwlMjAod2l0aCUyMHJhbmRvbSUyMHdlaWdodHMpJTIwZnJvbSUyMHRoZSUyMGdwdC1uZW94LTIwYiUyMHN0eWxlJTIwY29uZmlndXJhdGlvbiUwQW1vZGVsJTIwJTNEJTIwR1BUTmVvWE1vZGVsKGNvbmZpZ3VyYXRpb24pJTBBJTIzJTIwQWNjZXNzaW5nJTIwdGhlJTIwbW9kZWwlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMG1vZGVsLmNvbmZpZw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTNeoXConfig, GPTNeoXModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GPTNeoX gpt-neox-20b style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = GPTNeoXConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the gpt-neox-20b style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoXModel(configuration)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){u(t.$$.fragment)},l(a){h(t.$$.fragment,a)},m(a,d){f(t,a,d),b=!0},p:j,i(a){b||(g(t.$$.fragment,a),b=!0)},o(a){_(t.$$.fragment,a),b=!1},d(a){T(t,a)}}}function Io(k){let t,b="be encoded differently whether it is at the beginning of the sentence (without space) or not:",a,d,M;return d=new R({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEdQVE5lb1hUb2tlbml6ZXJGYXN0JTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwR1BUTmVvWFRva2VuaXplckZhc3QuZnJvbV9wcmV0cmFpbmVkKCUyMm9wZW5haS1jb21tdW5pdHklMkZncHQyJTIyKSUwQXRva2VuaXplciglMjJIZWxsbyUyMHdvcmxkJTIyKSU1QiUyMmlucHV0X2lkcyUyMiU1RCUwQSUwQXRva2VuaXplciglMjIlMjBIZWxsbyUyMHdvcmxkJTIyKSU1QiUyMmlucHV0X2lkcyUyMiU1RA==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTNeoXTokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPTNeoXTokenizerFast.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
[<span class="hljs-number">15496</span>, <span class="hljs-number">995</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
[<span class="hljs-number">18435</span>, <span class="hljs-number">995</span>]`,wrap:!1}}),{c(){t=p("p"),t.textContent=b,a=r(),u(d.$$.fragment)},l(o){t=m(o,"P",{"data-svelte-h":!0}),y(t)!=="svelte-12atnao"&&(t.textContent=b),a=l(o),h(d.$$.fragment,o)},m(o,w){i(o,t,w),i(o,a,w),f(d,o,w),M=!0},p:j,i(o){M||(g(d.$$.fragment,o),M=!0)},o(o){_(d.$$.fragment,o),M=!1},d(o){o&&(s(t),s(a)),T(d,o)}}}function Vo(k){let t,b="When used with <code>is_split_into_words=True</code>, this tokenizer needs to be instantiated with <code>add_prefix_space=True</code>.";return{c(){t=p("p"),t.innerHTML=b},l(a){t=m(a,"P",{"data-svelte-h":!0}),y(t)!=="svelte-9gg91e"&&(t.innerHTML=b)},m(a,d){i(a,t,d)},p:j,d(a){a&&s(t)}}}function Bo(k){let t,b=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=p("p"),t.innerHTML=b},l(a){t=m(a,"P",{"data-svelte-h":!0}),y(t)!=="svelte-fincs2"&&(t.innerHTML=b)},m(a,d){i(a,t,d)},p:j,d(a){a&&s(t)}}}function qo(k){let t,b=`This example uses a random model as the real ones are all very big. To get proper results, you should use
EleutherAI/gpt-neox-20b instead of trl-internal-testing/tiny-random-GPTNeoXForCausalLM. If you get out-of-memory when loading that checkpoint, you can try
adding <code>device_map=&quot;auto&quot;</code> in the <code>from_pretrained</code> call.`;return{c(){t=p("p"),t.innerHTML=b},l(a){t=m(a,"P",{"data-svelte-h":!0}),y(t)!=="svelte-1lgpfzy"&&(t.innerHTML=b)},m(a,d){i(a,t,d)},p:j,d(a){a&&s(t)}}}function Ro(k){let t,b="Example:",a,d,M;return d=new R({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBHUFROZW9YTW9kZWwlMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMnRybC1pbnRlcm5hbC10ZXN0aW5nJTJGdGlueS1yYW5kb20tR1BUTmVvWEZvckNhdXNhbExNJTIyKSUwQW1vZGVsJTIwJTNEJTIwR1BUTmVvWE1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJ0cmwtaW50ZXJuYWwtdGVzdGluZyUyRnRpbnktcmFuZG9tLUdQVE5lb1hGb3JDYXVzYWxMTSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQWxhc3RfaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, GPTNeoXModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;trl-internal-testing/tiny-random-GPTNeoXForCausalLM&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoXModel.from_pretrained(<span class="hljs-string">&quot;trl-internal-testing/tiny-random-GPTNeoXForCausalLM&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){t=p("p"),t.textContent=b,a=r(),u(d.$$.fragment)},l(o){t=m(o,"P",{"data-svelte-h":!0}),y(t)!=="svelte-11lpom8"&&(t.textContent=b),a=l(o),h(d.$$.fragment,o)},m(o,w){i(o,t,w),i(o,a,w),f(d,o,w),M=!0},p:j,i(o){M||(g(d.$$.fragment,o),M=!0)},o(o){_(d.$$.fragment,o),M=!1},d(o){o&&(s(t),s(a)),T(d,o)}}}function Ho(k){let t,b=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=p("p"),t.innerHTML=b},l(a){t=m(a,"P",{"data-svelte-h":!0}),y(t)!=="svelte-fincs2"&&(t.innerHTML=b)},m(a,d){i(a,t,d)},p:j,d(a){a&&s(t)}}}function Qo(k){let t,b="Example:",a,d,M;return d=new R({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBHUFROZW9YRm9yQ2F1c2FsTE0lMkMlMjBHUFROZW9YQ29uZmlnJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJFbGV1dGhlckFJJTJGZ3B0LW5lb3gtMjBiJTIyKSUwQWNvbmZpZyUyMCUzRCUyMEdQVE5lb1hDb25maWcuZnJvbV9wcmV0cmFpbmVkKCUyMkVsZXV0aGVyQUklMkZncHQtbmVveC0yMGIlMjIpJTBBY29uZmlnLmlzX2RlY29kZXIlMjAlM0QlMjBUcnVlJTBBbW9kZWwlMjAlM0QlMjBHUFROZW9YRm9yQ2F1c2FsTE0uZnJvbV9wcmV0cmFpbmVkKCUyMkVsZXV0aGVyQUklMkZncHQtbmVveC0yMGIlMjIlMkMlMjBjb25maWclM0Rjb25maWcpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEFwcmVkaWN0aW9uX2xvZ2l0cyUyMCUzRCUyMG91dHB1dHMubG9naXRz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, GPTNeoXForCausalLM, GPTNeoXConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neox-20b&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = GPTNeoXConfig.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neox-20b&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoXForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neox-20b&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`,wrap:!1}}),{c(){t=p("p"),t.textContent=b,a=r(),u(d.$$.fragment)},l(o){t=m(o,"P",{"data-svelte-h":!0}),y(t)!=="svelte-11lpom8"&&(t.textContent=b),a=l(o),h(d.$$.fragment,o)},m(o,w){i(o,t,w),i(o,a,w),f(d,o,w),M=!0},p:j,i(o){M||(g(d.$$.fragment,o),M=!0)},o(o){_(d.$$.fragment,o),M=!1},d(o){o&&(s(t),s(a)),T(d,o)}}}function Lo(k){let t,b=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=p("p"),t.innerHTML=b},l(a){t=m(a,"P",{"data-svelte-h":!0}),y(t)!=="svelte-fincs2"&&(t.innerHTML=b)},m(a,d){i(a,t,d)},p:j,d(a){a&&s(t)}}}function Eo(k){let t,b=`This example uses a random model as the real ones are all very big. To get proper results, you should use
EleutherAI/gpt-neox-20b instead of trl-internal-testing/tiny-random-GPTNeoXForCausalLM. If you get out-of-memory when loading that checkpoint, you can try
adding <code>device_map=&quot;auto&quot;</code> in the <code>from_pretrained</code> call.`;return{c(){t=p("p"),t.innerHTML=b},l(a){t=m(a,"P",{"data-svelte-h":!0}),y(t)!=="svelte-1lgpfzy"&&(t.innerHTML=b)},m(a,d){i(a,t,d)},p:j,d(a){a&&s(t)}}}function So(k){let t,b="Example:",a,d,M;return d=new R({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBHUFROZW9YRm9yUXVlc3Rpb25BbnN3ZXJpbmclMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMnRybC1pbnRlcm5hbC10ZXN0aW5nJTJGdGlueS1yYW5kb20tR1BUTmVvWEZvckNhdXNhbExNJTIyKSUwQW1vZGVsJTIwJTNEJTIwR1BUTmVvWEZvclF1ZXN0aW9uQW5zd2VyaW5nLmZyb21fcHJldHJhaW5lZCglMjJ0cmwtaW50ZXJuYWwtdGVzdGluZyUyRnRpbnktcmFuZG9tLUdQVE5lb1hGb3JDYXVzYWxMTSUyMiklMEElMEFxdWVzdGlvbiUyQyUyMHRleHQlMjAlM0QlMjAlMjJXaG8lMjB3YXMlMjBKaW0lMjBIZW5zb24lM0YlMjIlMkMlMjAlMjJKaW0lMjBIZW5zb24lMjB3YXMlMjBhJTIwbmljZSUyMHB1cHBldCUyMiUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplcihxdWVzdGlvbiUyQyUyMHRleHQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBYW5zd2VyX3N0YXJ0X2luZGV4JTIwJTNEJTIwb3V0cHV0cy5zdGFydF9sb2dpdHMuYXJnbWF4KCklMEFhbnN3ZXJfZW5kX2luZGV4JTIwJTNEJTIwb3V0cHV0cy5lbmRfbG9naXRzLmFyZ21heCgpJTBBJTBBcHJlZGljdF9hbnN3ZXJfdG9rZW5zJTIwJTNEJTIwaW5wdXRzLmlucHV0X2lkcyU1QjAlMkMlMjBhbnN3ZXJfc3RhcnRfaW5kZXglMjAlM0ElMjBhbnN3ZXJfZW5kX2luZGV4JTIwJTJCJTIwMSU1RCUwQSUwQSUyMyUyMHRhcmdldCUyMGlzJTIwJTIybmljZSUyMHB1cHBldCUyMiUwQXRhcmdldF9zdGFydF9pbmRleCUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxNCU1RCklMEF0YXJnZXRfZW5kX2luZGV4JTIwJTNEJTIwdG9yY2gudGVuc29yKCU1QjE1JTVEKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMHN0YXJ0X3Bvc2l0aW9ucyUzRHRhcmdldF9zdGFydF9pbmRleCUyQyUyMGVuZF9wb3NpdGlvbnMlM0R0YXJnZXRfZW5kX2luZGV4KSUwQWxvc3MlMjAlM0QlMjBvdXRwdXRzLmxvc3M=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, GPTNeoXForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;trl-internal-testing/tiny-random-GPTNeoXForCausalLM&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoXForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;trl-internal-testing/tiny-random-GPTNeoXForCausalLM&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`,wrap:!1}}),{c(){t=p("p"),t.textContent=b,a=r(),u(d.$$.fragment)},l(o){t=m(o,"P",{"data-svelte-h":!0}),y(t)!=="svelte-11lpom8"&&(t.textContent=b),a=l(o),h(d.$$.fragment,o)},m(o,w){i(o,t,w),i(o,a,w),f(d,o,w),M=!0},p:j,i(o){M||(g(d.$$.fragment,o),M=!0)},o(o){_(d.$$.fragment,o),M=!1},d(o){o&&(s(t),s(a)),T(d,o)}}}function Ao(k){let t,b=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=p("p"),t.innerHTML=b},l(a){t=m(a,"P",{"data-svelte-h":!0}),y(t)!=="svelte-fincs2"&&(t.innerHTML=b)},m(a,d){i(a,t,d)},p:j,d(a){a&&s(t)}}}function Yo(k){let t,b="Example of single-label classification:",a,d,M;return d=new R({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEdQVE5lb1hGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIydHJsLWludGVybmFsLXRlc3RpbmclMkZ0aW55LXJhbmRvbS1HUFROZW9YRm9yQ2F1c2FsTE0lMjIpJTBBbW9kZWwlMjAlM0QlMjBHUFROZW9YRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIydHJsLWludGVybmFsLXRlc3RpbmclMkZ0aW55LXJhbmRvbS1HUFROZW9YRm9yQ2F1c2FsTE0lMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX2NsYXNzX2lkJTIwJTNEJTIwbG9naXRzLmFyZ21heCgpLml0ZW0oKSUwQSUwQSUyMyUyMFRvJTIwdHJhaW4lMjBhJTIwbW9kZWwlMjBvbiUyMCU2MG51bV9sYWJlbHMlNjAlMjBjbGFzc2VzJTJDJTIweW91JTIwY2FuJTIwcGFzcyUyMCU2MG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTYwJTIwdG8lMjAlNjAuZnJvbV9wcmV0cmFpbmVkKC4uLiklNjAlMEFudW1fbGFiZWxzJTIwJTNEJTIwbGVuKG1vZGVsLmNvbmZpZy5pZDJsYWJlbCklMEFtb2RlbCUyMCUzRCUyMEdQVE5lb1hGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJ0cmwtaW50ZXJuYWwtdGVzdGluZyUyRnRpbnktcmFuZG9tLUdQVE5lb1hGb3JDYXVzYWxMTSUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzKSUwQSUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxJTVEKSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, GPTNeoXForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;trl-internal-testing/tiny-random-GPTNeoXForCausalLM&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoXForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;trl-internal-testing/tiny-random-GPTNeoXForCausalLM&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoXForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;trl-internal-testing/tiny-random-GPTNeoXForCausalLM&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){t=p("p"),t.textContent=b,a=r(),u(d.$$.fragment)},l(o){t=m(o,"P",{"data-svelte-h":!0}),y(t)!=="svelte-ykxpe4"&&(t.textContent=b),a=l(o),h(d.$$.fragment,o)},m(o,w){i(o,t,w),i(o,a,w),f(d,o,w),M=!0},p:j,i(o){M||(g(d.$$.fragment,o),M=!0)},o(o){_(d.$$.fragment,o),M=!1},d(o){o&&(s(t),s(a)),T(d,o)}}}function Oo(k){let t,b="Example of multi-label classification:",a,d,M;return d=new R({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEdQVE5lb1hGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIydHJsLWludGVybmFsLXRlc3RpbmclMkZ0aW55LXJhbmRvbS1HUFROZW9YRm9yQ2F1c2FsTE0lMjIpJTBBbW9kZWwlMjAlM0QlMjBHUFROZW9YRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIydHJsLWludGVybmFsLXRlc3RpbmclMkZ0aW55LXJhbmRvbS1HUFROZW9YRm9yQ2F1c2FsTE0lMjIlMkMlMjBwcm9ibGVtX3R5cGUlM0QlMjJtdWx0aV9sYWJlbF9jbGFzc2lmaWNhdGlvbiUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEFwcmVkaWN0ZWRfY2xhc3NfaWRzJTIwJTNEJTIwdG9yY2guYXJhbmdlKDAlMkMlMjBsb2dpdHMuc2hhcGUlNUItMSU1RCklNUJ0b3JjaC5zaWdtb2lkKGxvZ2l0cykuc3F1ZWV6ZShkaW0lM0QwKSUyMCUzRSUyMDAuNSU1RCUwQSUwQSUyMyUyMFRvJTIwdHJhaW4lMjBhJTIwbW9kZWwlMjBvbiUyMCU2MG51bV9sYWJlbHMlNjAlMjBjbGFzc2VzJTJDJTIweW91JTIwY2FuJTIwcGFzcyUyMCU2MG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTYwJTIwdG8lMjAlNjAuZnJvbV9wcmV0cmFpbmVkKC4uLiklNjAlMEFudW1fbGFiZWxzJTIwJTNEJTIwbGVuKG1vZGVsLmNvbmZpZy5pZDJsYWJlbCklMEFtb2RlbCUyMCUzRCUyMEdQVE5lb1hGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMEElMjAlMjAlMjAlMjAlMjJ0cmwtaW50ZXJuYWwtdGVzdGluZyUyRnRpbnktcmFuZG9tLUdQVE5lb1hGb3JDYXVzYWxMTSUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIlMEEpJTBBJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2guc3VtKCUwQSUyMCUyMCUyMCUyMHRvcmNoLm5uLmZ1bmN0aW9uYWwub25lX2hvdChwcmVkaWN0ZWRfY2xhc3NfaWRzJTVCTm9uZSUyQyUyMCUzQSU1RC5jbG9uZSgpJTJDJTIwbnVtX2NsYXNzZXMlM0RudW1fbGFiZWxzKSUyQyUyMGRpbSUzRDElMEEpLnRvKHRvcmNoLmZsb2F0KSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, GPTNeoXForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;trl-internal-testing/tiny-random-GPTNeoXForCausalLM&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoXForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;trl-internal-testing/tiny-random-GPTNeoXForCausalLM&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.arange(<span class="hljs-number">0</span>, logits.shape[-<span class="hljs-number">1</span>])[torch.sigmoid(logits).squeeze(dim=<span class="hljs-number">0</span>) &gt; <span class="hljs-number">0.5</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoXForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;trl-internal-testing/tiny-random-GPTNeoXForCausalLM&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.<span class="hljs-built_in">sum</span>(
<span class="hljs-meta">... </span>    torch.nn.functional.one_hot(predicted_class_ids[<span class="hljs-literal">None</span>, :].clone(), num_classes=num_labels), dim=<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>).to(torch.<span class="hljs-built_in">float</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){t=p("p"),t.textContent=b,a=r(),u(d.$$.fragment)},l(o){t=m(o,"P",{"data-svelte-h":!0}),y(t)!=="svelte-1l8e32d"&&(t.textContent=b),a=l(o),h(d.$$.fragment,o)},m(o,w){i(o,t,w),i(o,a,w),f(d,o,w),M=!0},p:j,i(o){M||(g(d.$$.fragment,o),M=!0)},o(o){_(d.$$.fragment,o),M=!1},d(o){o&&(s(t),s(a)),T(d,o)}}}function Do(k){let t,b=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=p("p"),t.innerHTML=b},l(a){t=m(a,"P",{"data-svelte-h":!0}),y(t)!=="svelte-fincs2"&&(t.innerHTML=b)},m(a,d){i(a,t,d)},p:j,d(a){a&&s(t)}}}function Ko(k){let t,b="Example:",a,d,M;return d=new R({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBHUFROZW9YRm9yVG9rZW5DbGFzc2lmaWNhdGlvbiUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyTGFyc0pvbmFzc29uJTJGcHl0aGlhLTQxMG0tZGVkdXBlZC1zZnQtc3dlZGlzaCUyMiklMEFtb2RlbCUyMCUzRCUyMEdQVE5lb1hGb3JUb2tlbkNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJMYXJzSm9uYXNzb24lMkZweXRoaWEtNDEwbS1kZWR1cGVkLXNmdC1zd2VkaXNoJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMEElMjAlMjAlMjAlMjAlMjJIdWdnaW5nRmFjZSUyMGlzJTIwYSUyMGNvbXBhbnklMjBiYXNlZCUyMGluJTIwUGFyaXMlMjBhbmQlMjBOZXclMjBZb3JrJTIyJTJDJTIwYWRkX3NwZWNpYWxfdG9rZW5zJTNERmFsc2UlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTBBKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyUyMCUzRCUyMGxvZ2l0cy5hcmdtYXgoLTEpJTBBJTBBJTIzJTIwTm90ZSUyMHRoYXQlMjB0b2tlbnMlMjBhcmUlMjBjbGFzc2lmaWVkJTIwcmF0aGVyJTIwdGhlbiUyMGlucHV0JTIwd29yZHMlMjB3aGljaCUyMG1lYW5zJTIwdGhhdCUwQSUyMyUyMHRoZXJlJTIwbWlnaHQlMjBiZSUyMG1vcmUlMjBwcmVkaWN0ZWQlMjB0b2tlbiUyMGNsYXNzZXMlMjB0aGFuJTIwd29yZHMuJTBBJTIzJTIwTXVsdGlwbGUlMjB0b2tlbiUyMGNsYXNzZXMlMjBtaWdodCUyMGFjY291bnQlMjBmb3IlMjB0aGUlMjBzYW1lJTIwd29yZCUwQXByZWRpY3RlZF90b2tlbnNfY2xhc3NlcyUyMCUzRCUyMCU1Qm1vZGVsLmNvbmZpZy5pZDJsYWJlbCU1QnQuaXRlbSgpJTVEJTIwZm9yJTIwdCUyMGluJTIwcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyU1QjAlNUQlNUQlMEElMEFsYWJlbHMlMjAlM0QlMjBwcmVkaWN0ZWRfdG9rZW5fY2xhc3NfaWRzJTBBbG9zcyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKS5sb3NzJTBBcm91bmQobG9zcy5pdGVtKCklMkMlMjAyKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, GPTNeoXForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;LarsJonasson/pythia-410m-deduped-sft-swedish&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoXForTokenClassification.from_pretrained(<span class="hljs-string">&quot;LarsJonasson/pythia-410m-deduped-sft-swedish&quot;</span>)

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
<span class="hljs-number">0.25</span>`,wrap:!1}}),{c(){t=p("p"),t.textContent=b,a=r(),u(d.$$.fragment)},l(o){t=m(o,"P",{"data-svelte-h":!0}),y(t)!=="svelte-11lpom8"&&(t.textContent=b),a=l(o),h(d.$$.fragment,o)},m(o,w){i(o,t,w),i(o,a,w),f(d,o,w),M=!0},p:j,i(o){M||(g(d.$$.fragment,o),M=!0)},o(o){_(d.$$.fragment,o),M=!1},d(o){o&&(s(t),s(a)),T(d,o)}}}function es(k){let t,b,a,d,M,o,w,vt,Te,Yn=`We introduce GPT-NeoX-20B, a 20 billion parameter autoregressive language model trained on the Pile, whose weights will
be made freely and openly available to the public through a permissive license. It is, to the best of our knowledge,
the largest dense autoregressive model that has publicly available weights at the time of submission. In this work,
we describe GPT-NeoX-20B’s architecture and training and evaluate its performance on a range of language-understanding,
mathematics, and knowledge-based tasks. We find that GPT-NeoX-20B is a particularly powerful few-shot reasoner and
gains far more in performance when evaluated five-shot than similarly sized GPT-3 and FairSeq models. We open-source
the training and evaluation code, as well as the model weights, at <a href="https://github.com/EleutherAI/gpt-neox" rel="nofollow">https://github.com/EleutherAI/gpt-neox</a>.`,Gt,be,On=`Development of the model was led by Sid Black, Stella Biderman and Eric Hallahan, and the model was trained with
generous the support of <a href="https://www.coreweave.com/" rel="nofollow">CoreWeave</a>.`,jt,ye,Dn="GPT-NeoX-20B was trained with fp16, thus it is recommended to initialize the model as follows:",Xt,Me,Nt,we,Kn=`GPT-NeoX-20B also has a different tokenizer from the one used in GPT-J-6B and GPT-Neo. The new tokenizer allocates
additional tokens to whitespace characters, making the model more suitable for certain tasks like code generation.`,Ct,ke,xt,$e,eo="The <code>generate()</code> method can be used to generate text using GPT Neo model.",Jt,ve,Ft,Ge,Ut,je,to="Flash Attention 2 is an faster, optimized version of the model.",Pt,Xe,zt,Ne,no='First, check whether your hardware is compatible with Flash Attention 2. The latest list of compatible hardware can be found in the <a href="https://github.com/Dao-AILab/flash-attention#installation-and-features" rel="nofollow">official documentation</a>. If your hardware is not compatible with Flash Attention 2, you can still benefit from attention kernel optimisations through Better Transformer support covered <a href="https://huggingface.co/docs/transformers/main/en/model_doc/bark#using-better-transformer" rel="nofollow">above</a>.',Wt,Ce,oo='Next, <a href="https://github.com/Dao-AILab/flash-attention#installation-and-features" rel="nofollow">install</a> the latest version of Flash Attention 2:',Zt,xe,It,Je,Vt,Fe,so='To load a model using Flash Attention 2, we can pass the argument <code>attn_implementation=&quot;flash_attention_2&quot;</code> to <a href="https://huggingface.co/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained" rel="nofollow"><code>.from_pretrained</code></a>. We’ll also load the model in half-precision (e.g. <code>torch.float16</code>), since it results in almost no degradation to audio quality but significantly lower memory usage and faster inference:',Bt,Ue,qt,Pe,Rt,ze,ao="Below is an expected speedup diagram that compares pure inference time between the native implementation in transformers using <code>stockmark/gpt-neox-japanese-1.4b</code> checkpoint and the Flash Attention 2 version of the model using a sequence length of 2048.",Ht,K,ro='<img src="https://huggingface.co/datasets/ybelkada/documentation-images/resolve/main/gpt-neox-1.8b-speedup.jpg"/>',Qt,We,Lt,Ze,lo='<li><a href="../tasks/language_modeling">Causal language modeling task guide</a></li>',Et,Ie,St,P,Ve,cn,at,io=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/gpt_neox#transformers.GPTNeoXModel">GPTNeoXModel</a>. It is used to instantiate an
GPTNeoX model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the GPTNeoX
<a href="https://huggingface.co/EleutherAI/gpt-neox-20b" rel="nofollow">EleutherAI/gpt-neox-20b</a> architecture.`,pn,rt,co=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,mn,ee,At,Be,Yt,$,qe,un,lt,po=`Construct a “fast” GPT-NeoX-20B tokenizer (backed by HuggingFace’s <em>tokenizers</em> library). Based on byte-level
Byte-Pair-Encoding.`,hn,it,mo="This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will",fn,te,gn,dt,uo=`You can get around that behavior by passing <code>add_prefix_space=True</code> when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`,_n,ne,Tn,ct,ho=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a> which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`,Ot,Re,Dt,H,He,bn,pt,fo=`The bare GPTNeoX Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,yn,C,Qe,Mn,mt,go='The <a href="/docs/transformers/main/en/model_doc/gpt_neox#transformers.GPTNeoXModel">GPTNeoXModel</a> forward method, overrides the <code>__call__</code> special method.',wn,oe,kn,se,$n,ae,Kt,Le,en,Q,Ee,vn,ut,_o=`GPTNeoX Model with a <code>language modeling</code> head on top for CLM fine-tuning.
This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,Gn,V,Se,jn,ht,To='The <a href="/docs/transformers/main/en/model_doc/gpt_neox#transformers.GPTNeoXForCausalLM">GPTNeoXForCausalLM</a> forward method, overrides the <code>__call__</code> special method.',Xn,re,Nn,le,tn,Ae,nn,z,Ye,Cn,ft,bo=`The GPT-NeoX Model transformer with a span classification head on top for extractive question-answering tasks like
SQuAD (a linear layer on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,xn,gt,yo=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,Jn,x,Oe,Fn,_t,Mo='The <a href="/docs/transformers/main/en/model_doc/gpt_neox#transformers.GPTNeoXForQuestionAnswering">GPTNeoXForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',Un,ie,Pn,de,zn,ce,on,De,sn,v,Ke,Wn,Tt,wo="The GPTNeoX Model transformer with a sequence classification head on top (linear layer).",Zn,bt,ko=`<a href="/docs/transformers/main/en/model_doc/gpt_neox#transformers.GPTNeoXForSequenceClassification">GPTNeoXForSequenceClassification</a> uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`,In,yt,$o=`Since it does classification on the last token, it requires to know the position of the last token. If a
<code>pad_token_id</code> is defined in the configuration, it finds the last token that is not a padding token in each row. If
no <code>pad_token_id</code> is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when <code>inputs_embeds</code> are passed instead of <code>input_ids</code>, it does the same (take the last value in
each row of the batch).`,Vn,Mt,vo=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,Bn,J,et,qn,wt,Go='The <a href="/docs/transformers/main/en/model_doc/gpt_neox#transformers.GPTNeoXForSequenceClassification">GPTNeoXForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',Rn,pe,Hn,me,Qn,ue,an,tt,rn,Y,nt,Ln,B,ot,En,kt,jo='The <a href="/docs/transformers/main/en/model_doc/gpt_neox#transformers.GPTNeoXForTokenClassification">GPTNeoXForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',Sn,he,An,fe,ln,$t,dn;return M=new N({props:{title:"GPT-NeoX",local:"gpt-neox",headingTag:"h1"}}),w=new N({props:{title:"Overview",local:"overview",headingTag:"h2"}}),Me=new R({props:{code:"bW9kZWwlMjAlM0QlMjBHUFROZW9YRm9yQ2F1c2FsTE0uZnJvbV9wcmV0cmFpbmVkKCUyMkVsZXV0aGVyQUklMkZncHQtbmVveC0yMGIlMjIpLmhhbGYoKS5jdWRhKCk=",highlighted:'model = GPTNeoXForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neox-20b&quot;</span>).half().cuda()',wrap:!1}}),ke=new N({props:{title:"Usage example",local:"usage-example",headingTag:"h2"}}),ve=new R({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEdQVE5lb1hGb3JDYXVzYWxMTSUyQyUyMEdQVE5lb1hUb2tlbml6ZXJGYXN0JTBBJTBBbW9kZWwlMjAlM0QlMjBHUFROZW9YRm9yQ2F1c2FsTE0uZnJvbV9wcmV0cmFpbmVkKCUyMkVsZXV0aGVyQUklMkZncHQtbmVveC0yMGIlMjIpJTBBdG9rZW5pemVyJTIwJTNEJTIwR1BUTmVvWFRva2VuaXplckZhc3QuZnJvbV9wcmV0cmFpbmVkKCUyMkVsZXV0aGVyQUklMkZncHQtbmVveC0yMGIlMjIpJTBBJTBBcHJvbXB0JTIwJTNEJTIwJTIyR1BUTmVvWDIwQiUyMGlzJTIwYSUyMDIwQi1wYXJhbWV0ZXIlMjBhdXRvcmVncmVzc2l2ZSUyMFRyYW5zZm9ybWVyJTIwbW9kZWwlMjBkZXZlbG9wZWQlMjBieSUyMEVsZXV0aGVyQUkuJTIyJTBBJTBBaW5wdXRfaWRzJTIwJTNEJTIwdG9rZW5pemVyKHByb21wdCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpLmlucHV0X2lkcyUwQSUwQWdlbl90b2tlbnMlMjAlM0QlMjBtb2RlbC5nZW5lcmF0ZSglMEElMjAlMjAlMjAlMjBpbnB1dF9pZHMlMkMlMEElMjAlMjAlMjAlMjBkb19zYW1wbGUlM0RUcnVlJTJDJTBBJTIwJTIwJTIwJTIwdGVtcGVyYXR1cmUlM0QwLjklMkMlMEElMjAlMjAlMjAlMjBtYXhfbGVuZ3RoJTNEMTAwJTJDJTBBKSUwQWdlbl90ZXh0JTIwJTNEJTIwdG9rZW5pemVyLmJhdGNoX2RlY29kZShnZW5fdG9rZW5zKSU1QjAlNUQ=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTNeoXForCausalLM, GPTNeoXTokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTNeoXForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neox-20b&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPTNeoXTokenizerFast.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neox-20b&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;GPTNeoX20B is a 20B-parameter autoregressive Transformer model developed by EleutherAI.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>gen_tokens = model.generate(
<span class="hljs-meta">... </span>    input_ids,
<span class="hljs-meta">... </span>    do_sample=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    temperature=<span class="hljs-number">0.9</span>,
<span class="hljs-meta">... </span>    max_length=<span class="hljs-number">100</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>gen_text = tokenizer.batch_decode(gen_tokens)[<span class="hljs-number">0</span>]`,wrap:!1}}),Ge=new N({props:{title:"Using Flash Attention 2",local:"using-flash-attention-2",headingTag:"h2"}}),Xe=new N({props:{title:"Installation",local:"installation",headingTag:"h3"}}),xe=new R({props:{code:"cGlwJTIwaW5zdGFsbCUyMC1VJTIwZmxhc2gtYXR0biUyMC0tbm8tYnVpbGQtaXNvbGF0aW9u",highlighted:"pip install -U flash-attn --no-build-isolation",wrap:!1}}),Je=new N({props:{title:"Usage",local:"usage",headingTag:"h3"}}),Ue=new R({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEdQVE5lb1hGb3JDYXVzYWxMTSUyQyUyMEdQVE5lb1hUb2tlbml6ZXJGYXN0JTBB",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTNeoXForCausalLM, GPTNeoXTokenizerFast

model = GPTNeoXForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-neox-20b&quot;</span>, torch_dtype=torch.float16, attn_implementation=<span class="hljs-string">&quot;flash_attention_2&quot;</span>).to(device)
...`,wrap:!1}}),Pe=new N({props:{title:"Expected speedups",local:"expected-speedups",headingTag:"h3"}}),We=new N({props:{title:"Resources",local:"resources",headingTag:"h2"}}),Ie=new N({props:{title:"GPTNeoXConfig",local:"transformers.GPTNeoXConfig",headingTag:"h2"}}),Ve=new q({props:{name:"class transformers.GPTNeoXConfig",anchor:"transformers.GPTNeoXConfig",parameters:[{name:"vocab_size",val:" = 50432"},{name:"hidden_size",val:" = 6144"},{name:"num_hidden_layers",val:" = 44"},{name:"num_attention_heads",val:" = 64"},{name:"intermediate_size",val:" = 24576"},{name:"hidden_act",val:" = 'gelu'"},{name:"rotary_pct",val:" = 0.25"},{name:"rotary_emb_base",val:" = 10000"},{name:"attention_dropout",val:" = 0.0"},{name:"hidden_dropout",val:" = 0.0"},{name:"classifier_dropout",val:" = 0.1"},{name:"max_position_embeddings",val:" = 2048"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"use_cache",val:" = True"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"tie_word_embeddings",val:" = False"},{name:"use_parallel_residual",val:" = True"},{name:"rope_scaling",val:" = None"},{name:"attention_bias",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoXConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50432) &#x2014;
Vocabulary size of the GPTNeoX model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/gpt_neox#transformers.GPTNeoXModel">GPTNeoXModel</a>.`,name:"vocab_size"},{anchor:"transformers.GPTNeoXConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 6144) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.GPTNeoXConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 44) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.GPTNeoXConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.GPTNeoXConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 24576) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.GPTNeoXConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.GPTNeoXConfig.rotary_pct",description:`<strong>rotary_pct</strong> (<code>float</code>, <em>optional</em>, defaults to 0.25) &#x2014;
percentage of hidden dimensions to allocate to rotary embeddings`,name:"rotary_pct"},{anchor:"transformers.GPTNeoXConfig.rotary_emb_base",description:`<strong>rotary_emb_base</strong> (<code>int</code>, <em>optional</em>, defaults to 10000) &#x2014;
base for computing rotary embeddings frequency`,name:"rotary_emb_base"},{anchor:"transformers.GPTNeoXConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio probability of the attention score.`,name:"attention_dropout"},{anchor:"transformers.GPTNeoXConfig.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio of (1) the word embeddings, (2) the post-attention hidden states, and (3) the post-mlp
hidden states.`,name:"hidden_dropout"},{anchor:"transformers.GPTNeoXConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Argument used when doing token classification, used in the model <a href="/docs/transformers/main/en/model_doc/gpt_neox#transformers.GPTNeoXForTokenClassification">GPTNeoXForTokenClassification</a>.</p>
<p>The dropout ratio for the hidden layer.`,name:"classifier_dropout"},{anchor:"transformers.GPTNeoXConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.GPTNeoXConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.GPTNeoXConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.GPTNeoXConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.GPTNeoXConfig.use_parallel_residual",description:`<strong>use_parallel_residual</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use a &#x201C;parallel&#x201D; formulation in each Transformer layer, which can provide a slight training
speedup at large scales (e.g. 20B).`,name:"use_parallel_residual"},{anchor:"transformers.GPTNeoXConfig.rope_scaling",description:`<strong>rope_scaling</strong> (<code>Dict</code>, <em>optional</em>) &#x2014;
Dictionary containing the scaling configuration for the RoPE embeddings. Currently supports two scaling
strategies: linear and dynamic. Their scaling factor must be a float greater than 1. The expected format is
<code>{&quot;type&quot;: strategy name, &quot;factor&quot;: scaling factor}</code>. When using this flag, don&#x2019;t update
<code>max_position_embeddings</code> to the expected new maximum. See the following thread for more information on how
these scaling strategies behave:
<a href="https://www.reddit.com/r/LocalLLaMA/comments/14mrgpr/dynamically_scaled_rope_further_increases/" rel="nofollow">https://www.reddit.com/r/LocalLLaMA/comments/14mrgpr/dynamically_scaled_rope_further_increases/</a>. This is an
experimental feature, subject to breaking API changes in future versions.`,name:"rope_scaling"},{anchor:"transformers.GPTNeoXConfig.attention_bias",description:`<strong>attention_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use a bias in the query, key, value and output projection layers during self-attention.</p>
<p>Example &#x2014;`,name:"attention_bias"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt_neox/configuration_gpt_neox.py#L29"}}),ee=new _e({props:{anchor:"transformers.GPTNeoXConfig.example",$$slots:{default:[Zo]},$$scope:{ctx:k}}}),Be=new N({props:{title:"GPTNeoXTokenizerFast",local:"transformers.GPTNeoXTokenizerFast",headingTag:"h2"}}),qe=new q({props:{name:"class transformers.GPTNeoXTokenizerFast",anchor:"transformers.GPTNeoXTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoXTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.GPTNeoXTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.GPTNeoXTokenizerFast.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.GPTNeoXTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.GPTNeoXTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.GPTNeoXTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;|endoftext|&gt;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.GPTNeoXTokenizerFast.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (GPTNeoX tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.GPTNeoXTokenizerFast.trim_offsets",description:`<strong>trim_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the post-processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt_neox/tokenization_gpt_neox_fast.py#L40"}}),te=new _e({props:{anchor:"transformers.GPTNeoXTokenizerFast.example",$$slots:{default:[Io]},$$scope:{ctx:k}}}),ne=new ge({props:{$$slots:{default:[Vo]},$$scope:{ctx:k}}}),Re=new N({props:{title:"GPTNeoXModel",local:"transformers.GPTNeoXModel",headingTag:"h2"}}),He=new q({props:{name:"class transformers.GPTNeoXModel",anchor:"transformers.GPTNeoXModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoXModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt_neox#transformers.GPTNeoXConfig">~GPTNeoXConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt_neox/modeling_gpt_neox.py#L779"}}),Qe=new q({props:{name:"forward",anchor:"transformers.GPTNeoXModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.GPTNeoXModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTNeoXModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTNeoXModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.n_positions - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTNeoXModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTNeoXModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.GPTNeoXModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTNeoXModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTNeoXModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTNeoXModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.GPTNeoXModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt_neox/modeling_gpt_neox.py#L805",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt_neox#transformers.GPTNeoXConfig"
>GPTNeoXConfig</a>) and inputs.</p>
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
`}}),oe=new ge({props:{$$slots:{default:[Bo]},$$scope:{ctx:k}}}),se=new ge({props:{warning:!0,$$slots:{default:[qo]},$$scope:{ctx:k}}}),ae=new _e({props:{anchor:"transformers.GPTNeoXModel.forward.example",$$slots:{default:[Ro]},$$scope:{ctx:k}}}),Le=new N({props:{title:"GPTNeoXForCausalLM",local:"transformers.GPTNeoXForCausalLM",headingTag:"h2"}}),Ee=new q({props:{name:"class transformers.GPTNeoXForCausalLM",anchor:"transformers.GPTNeoXForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoXForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt_neox#transformers.GPTNeoXConfig">~GPTNeoXConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt_neox/modeling_gpt_neox.py#L956"}}),Se=new q({props:{name:"forward",anchor:"transformers.GPTNeoXForCausalLM.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.GPTNeoXForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTNeoXForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTNeoXForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.n_positions - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTNeoXForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTNeoXForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.GPTNeoXForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTNeoXForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTNeoXForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTNeoXForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional tensors are
only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.GPTNeoXForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels n <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.GPTNeoXForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt_neox/modeling_gpt_neox.py#L977",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt_neox#transformers.GPTNeoXConfig"
>GPTNeoXConfig</a>) and inputs.</p>
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
`}}),re=new ge({props:{$$slots:{default:[Ho]},$$scope:{ctx:k}}}),le=new _e({props:{anchor:"transformers.GPTNeoXForCausalLM.forward.example",$$slots:{default:[Qo]},$$scope:{ctx:k}}}),Ae=new N({props:{title:"GPTNeoXForQuestionAnswering",local:"transformers.GPTNeoXForQuestionAnswering",headingTag:"h2"}}),Ye=new q({props:{name:"class transformers.GPTNeoXForQuestionAnswering",anchor:"transformers.GPTNeoXForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoXForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt_neox#transformers.GPTNeoXConfig">~GPTNeoXConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt_neox/modeling_gpt_neox.py#L1331"}}),Oe=new q({props:{name:"forward",anchor:"transformers.GPTNeoXForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"start_positions",val:": Optional = None"},{name:"end_positions",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.GPTNeoXForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTNeoXForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTNeoXForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.n_positions - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTNeoXForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTNeoXForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.GPTNeoXForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTNeoXForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTNeoXForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTNeoXForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.GPTNeoXForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt_neox/modeling_gpt_neox.py#L1348",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt_neox#transformers.GPTNeoXConfig"
>GPTNeoXConfig</a>) and inputs.</p>
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
`}}),ie=new ge({props:{$$slots:{default:[Lo]},$$scope:{ctx:k}}}),de=new ge({props:{warning:!0,$$slots:{default:[Eo]},$$scope:{ctx:k}}}),ce=new _e({props:{anchor:"transformers.GPTNeoXForQuestionAnswering.forward.example",$$slots:{default:[So]},$$scope:{ctx:k}}}),De=new N({props:{title:"GPTNeoXForSequenceClassification",local:"transformers.GPTNeoXForSequenceClassification",headingTag:"h2"}}),Ke=new q({props:{name:"class transformers.GPTNeoXForSequenceClassification",anchor:"transformers.GPTNeoXForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTNeoXForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt_neox#transformers.GPTNeoXConfig">~GPTNeoXConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt_neox/modeling_gpt_neox.py#L1126"}}),et=new q({props:{name:"forward",anchor:"transformers.GPTNeoXForSequenceClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.GPTNeoXForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTNeoXForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTNeoXForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.n_positions - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTNeoXForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTNeoXForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.GPTNeoXForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTNeoXForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTNeoXForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTNeoXForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt_neox/modeling_gpt_neox.py#L1151",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt_neox#transformers.GPTNeoXConfig"
>GPTNeoXConfig</a>) and inputs.</p>
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
`}}),pe=new ge({props:{$$slots:{default:[Ao]},$$scope:{ctx:k}}}),me=new _e({props:{anchor:"transformers.GPTNeoXForSequenceClassification.forward.example",$$slots:{default:[Yo]},$$scope:{ctx:k}}}),ue=new _e({props:{anchor:"transformers.GPTNeoXForSequenceClassification.forward.example-2",$$slots:{default:[Oo]},$$scope:{ctx:k}}}),tt=new N({props:{title:"GPTNeoXForTokenClassification",local:"transformers.GPTNeoXForTokenClassification",headingTag:"h2"}}),nt=new q({props:{name:"class transformers.GPTNeoXForTokenClassification",anchor:"transformers.GPTNeoXForTokenClassification",parameters:[{name:"config",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt_neox/modeling_gpt_neox.py#L1254"}}),ot=new q({props:{name:"forward",anchor:"transformers.GPTNeoXForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.GPTNeoXForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTNeoXForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTNeoXForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.n_positions - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTNeoXForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTNeoXForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.GPTNeoXForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTNeoXForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTNeoXForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTNeoXForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt_neox/modeling_gpt_neox.py#L1266",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt_neox#transformers.GPTNeoXConfig"
>GPTNeoXConfig</a>) and inputs.</p>
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
`}}),he=new ge({props:{$$slots:{default:[Do]},$$scope:{ctx:k}}}),fe=new _e({props:{anchor:"transformers.GPTNeoXForTokenClassification.forward.example",$$slots:{default:[Ko]},$$scope:{ctx:k}}}),{c(){t=p("meta"),b=r(),a=p("p"),d=r(),u(M.$$.fragment),o=r(),u(w.$$.fragment),vt=r(),Te=p("p"),Te.innerHTML=Yn,Gt=r(),be=p("p"),be.innerHTML=On,jt=r(),ye=p("p"),ye.textContent=Dn,Xt=r(),u(Me.$$.fragment),Nt=r(),we=p("p"),we.textContent=Kn,Ct=r(),u(ke.$$.fragment),xt=r(),$e=p("p"),$e.innerHTML=eo,Jt=r(),u(ve.$$.fragment),Ft=r(),u(Ge.$$.fragment),Ut=r(),je=p("p"),je.textContent=to,Pt=r(),u(Xe.$$.fragment),zt=r(),Ne=p("p"),Ne.innerHTML=no,Wt=r(),Ce=p("p"),Ce.innerHTML=oo,Zt=r(),u(xe.$$.fragment),It=r(),u(Je.$$.fragment),Vt=r(),Fe=p("p"),Fe.innerHTML=so,Bt=r(),u(Ue.$$.fragment),qt=r(),u(Pe.$$.fragment),Rt=r(),ze=p("p"),ze.innerHTML=ao,Ht=r(),K=p("div"),K.innerHTML=ro,Qt=r(),u(We.$$.fragment),Lt=r(),Ze=p("ul"),Ze.innerHTML=lo,Et=r(),u(Ie.$$.fragment),St=r(),P=p("div"),u(Ve.$$.fragment),cn=r(),at=p("p"),at.innerHTML=io,pn=r(),rt=p("p"),rt.innerHTML=co,mn=r(),u(ee.$$.fragment),At=r(),u(Be.$$.fragment),Yt=r(),$=p("div"),u(qe.$$.fragment),un=r(),lt=p("p"),lt.innerHTML=po,hn=r(),it=p("p"),it.textContent=mo,fn=r(),u(te.$$.fragment),gn=r(),dt=p("p"),dt.innerHTML=uo,_n=r(),u(ne.$$.fragment),Tn=r(),ct=p("p"),ct.innerHTML=ho,Ot=r(),u(Re.$$.fragment),Dt=r(),H=p("div"),u(He.$$.fragment),bn=r(),pt=p("p"),pt.innerHTML=fo,yn=r(),C=p("div"),u(Qe.$$.fragment),Mn=r(),mt=p("p"),mt.innerHTML=go,wn=r(),u(oe.$$.fragment),kn=r(),u(se.$$.fragment),$n=r(),u(ae.$$.fragment),Kt=r(),u(Le.$$.fragment),en=r(),Q=p("div"),u(Ee.$$.fragment),vn=r(),ut=p("p"),ut.innerHTML=_o,Gn=r(),V=p("div"),u(Se.$$.fragment),jn=r(),ht=p("p"),ht.innerHTML=To,Xn=r(),u(re.$$.fragment),Nn=r(),u(le.$$.fragment),tn=r(),u(Ae.$$.fragment),nn=r(),z=p("div"),u(Ye.$$.fragment),Cn=r(),ft=p("p"),ft.innerHTML=bo,xn=r(),gt=p("p"),gt.innerHTML=yo,Jn=r(),x=p("div"),u(Oe.$$.fragment),Fn=r(),_t=p("p"),_t.innerHTML=Mo,Un=r(),u(ie.$$.fragment),Pn=r(),u(de.$$.fragment),zn=r(),u(ce.$$.fragment),on=r(),u(De.$$.fragment),sn=r(),v=p("div"),u(Ke.$$.fragment),Wn=r(),Tt=p("p"),Tt.textContent=wo,Zn=r(),bt=p("p"),bt.innerHTML=ko,In=r(),yt=p("p"),yt.innerHTML=$o,Vn=r(),Mt=p("p"),Mt.innerHTML=vo,Bn=r(),J=p("div"),u(et.$$.fragment),qn=r(),wt=p("p"),wt.innerHTML=Go,Rn=r(),u(pe.$$.fragment),Hn=r(),u(me.$$.fragment),Qn=r(),u(ue.$$.fragment),an=r(),u(tt.$$.fragment),rn=r(),Y=p("div"),u(nt.$$.fragment),Ln=r(),B=p("div"),u(ot.$$.fragment),En=r(),kt=p("p"),kt.innerHTML=jo,Sn=r(),u(he.$$.fragment),An=r(),u(fe.$$.fragment),ln=r(),$t=p("p"),this.h()},l(e){const n=zo("svelte-u9bgzb",document.head);t=m(n,"META",{name:!0,content:!0}),n.forEach(s),b=l(e),a=m(e,"P",{}),F(a).forEach(s),d=l(e),h(M.$$.fragment,e),o=l(e),h(w.$$.fragment,e),vt=l(e),Te=m(e,"P",{"data-svelte-h":!0}),y(Te)!=="svelte-utq0jy"&&(Te.innerHTML=Yn),Gt=l(e),be=m(e,"P",{"data-svelte-h":!0}),y(be)!=="svelte-ar2m2l"&&(be.innerHTML=On),jt=l(e),ye=m(e,"P",{"data-svelte-h":!0}),y(ye)!=="svelte-1fkanz5"&&(ye.textContent=Dn),Xt=l(e),h(Me.$$.fragment,e),Nt=l(e),we=m(e,"P",{"data-svelte-h":!0}),y(we)!=="svelte-cswlyd"&&(we.textContent=Kn),Ct=l(e),h(ke.$$.fragment,e),xt=l(e),$e=m(e,"P",{"data-svelte-h":!0}),y($e)!=="svelte-mhi95y"&&($e.innerHTML=eo),Jt=l(e),h(ve.$$.fragment,e),Ft=l(e),h(Ge.$$.fragment,e),Ut=l(e),je=m(e,"P",{"data-svelte-h":!0}),y(je)!=="svelte-1r79v6g"&&(je.textContent=to),Pt=l(e),h(Xe.$$.fragment,e),zt=l(e),Ne=m(e,"P",{"data-svelte-h":!0}),y(Ne)!=="svelte-ib5l43"&&(Ne.innerHTML=no),Wt=l(e),Ce=m(e,"P",{"data-svelte-h":!0}),y(Ce)!=="svelte-1pp3dkd"&&(Ce.innerHTML=oo),Zt=l(e),h(xe.$$.fragment,e),It=l(e),h(Je.$$.fragment,e),Vt=l(e),Fe=m(e,"P",{"data-svelte-h":!0}),y(Fe)!=="svelte-10jrnsm"&&(Fe.innerHTML=so),Bt=l(e),h(Ue.$$.fragment,e),qt=l(e),h(Pe.$$.fragment,e),Rt=l(e),ze=m(e,"P",{"data-svelte-h":!0}),y(ze)!=="svelte-1mm1lh6"&&(ze.innerHTML=ao),Ht=l(e),K=m(e,"DIV",{style:!0,"data-svelte-h":!0}),y(K)!=="svelte-1gyvfup"&&(K.innerHTML=ro),Qt=l(e),h(We.$$.fragment,e),Lt=l(e),Ze=m(e,"UL",{"data-svelte-h":!0}),y(Ze)!=="svelte-162aebv"&&(Ze.innerHTML=lo),Et=l(e),h(Ie.$$.fragment,e),St=l(e),P=m(e,"DIV",{class:!0});var L=F(P);h(Ve.$$.fragment,L),cn=l(L),at=m(L,"P",{"data-svelte-h":!0}),y(at)!=="svelte-1tddkzt"&&(at.innerHTML=io),pn=l(L),rt=m(L,"P",{"data-svelte-h":!0}),y(rt)!=="svelte-o55m63"&&(rt.innerHTML=co),mn=l(L),h(ee.$$.fragment,L),L.forEach(s),At=l(e),h(Be.$$.fragment,e),Yt=l(e),$=m(e,"DIV",{class:!0});var G=F($);h(qe.$$.fragment,G),un=l(G),lt=m(G,"P",{"data-svelte-h":!0}),y(lt)!=="svelte-1w4843d"&&(lt.innerHTML=po),hn=l(G),it=m(G,"P",{"data-svelte-h":!0}),y(it)!=="svelte-1s077p3"&&(it.textContent=mo),fn=l(G),h(te.$$.fragment,G),gn=l(G),dt=m(G,"P",{"data-svelte-h":!0}),y(dt)!=="svelte-1afeqmz"&&(dt.innerHTML=uo),_n=l(G),h(ne.$$.fragment,G),Tn=l(G),ct=m(G,"P",{"data-svelte-h":!0}),y(ct)!=="svelte-fh0aq"&&(ct.innerHTML=ho),G.forEach(s),Ot=l(e),h(Re.$$.fragment,e),Dt=l(e),H=m(e,"DIV",{class:!0});var O=F(H);h(He.$$.fragment,O),bn=l(O),pt=m(O,"P",{"data-svelte-h":!0}),y(pt)!=="svelte-qega57"&&(pt.innerHTML=fo),yn=l(O),C=m(O,"DIV",{class:!0});var W=F(C);h(Qe.$$.fragment,W),Mn=l(W),mt=m(W,"P",{"data-svelte-h":!0}),y(mt)!=="svelte-1u81ycn"&&(mt.innerHTML=go),wn=l(W),h(oe.$$.fragment,W),kn=l(W),h(se.$$.fragment,W),$n=l(W),h(ae.$$.fragment,W),W.forEach(s),O.forEach(s),Kt=l(e),h(Le.$$.fragment,e),en=l(e),Q=m(e,"DIV",{class:!0});var D=F(Q);h(Ee.$$.fragment,D),vn=l(D),ut=m(D,"P",{"data-svelte-h":!0}),y(ut)!=="svelte-5dl4wd"&&(ut.innerHTML=_o),Gn=l(D),V=m(D,"DIV",{class:!0});var E=F(V);h(Se.$$.fragment,E),jn=l(E),ht=m(E,"P",{"data-svelte-h":!0}),y(ht)!=="svelte-1hpyzov"&&(ht.innerHTML=To),Xn=l(E),h(re.$$.fragment,E),Nn=l(E),h(le.$$.fragment,E),E.forEach(s),D.forEach(s),tn=l(e),h(Ae.$$.fragment,e),nn=l(e),z=m(e,"DIV",{class:!0});var S=F(z);h(Ye.$$.fragment,S),Cn=l(S),ft=m(S,"P",{"data-svelte-h":!0}),y(ft)!=="svelte-1ednh70"&&(ft.innerHTML=bo),xn=l(S),gt=m(S,"P",{"data-svelte-h":!0}),y(gt)!=="svelte-68lg8f"&&(gt.innerHTML=yo),Jn=l(S),x=m(S,"DIV",{class:!0});var Z=F(x);h(Oe.$$.fragment,Z),Fn=l(Z),_t=m(Z,"P",{"data-svelte-h":!0}),y(_t)!=="svelte-c1ihr7"&&(_t.innerHTML=Mo),Un=l(Z),h(ie.$$.fragment,Z),Pn=l(Z),h(de.$$.fragment,Z),zn=l(Z),h(ce.$$.fragment,Z),Z.forEach(s),S.forEach(s),on=l(e),h(De.$$.fragment,e),sn=l(e),v=m(e,"DIV",{class:!0});var X=F(v);h(Ke.$$.fragment,X),Wn=l(X),Tt=m(X,"P",{"data-svelte-h":!0}),y(Tt)!=="svelte-16cei4n"&&(Tt.textContent=wo),Zn=l(X),bt=m(X,"P",{"data-svelte-h":!0}),y(bt)!=="svelte-66iibd"&&(bt.innerHTML=ko),In=l(X),yt=m(X,"P",{"data-svelte-h":!0}),y(yt)!=="svelte-10ugs3m"&&(yt.innerHTML=$o),Vn=l(X),Mt=m(X,"P",{"data-svelte-h":!0}),y(Mt)!=="svelte-68lg8f"&&(Mt.innerHTML=vo),Bn=l(X),J=m(X,"DIV",{class:!0});var I=F(J);h(et.$$.fragment,I),qn=l(I),wt=m(I,"P",{"data-svelte-h":!0}),y(wt)!=="svelte-1d9zwvd"&&(wt.innerHTML=Go),Rn=l(I),h(pe.$$.fragment,I),Hn=l(I),h(me.$$.fragment,I),Qn=l(I),h(ue.$$.fragment,I),I.forEach(s),X.forEach(s),an=l(e),h(tt.$$.fragment,e),rn=l(e),Y=m(e,"DIV",{class:!0});var st=F(Y);h(nt.$$.fragment,st),Ln=l(st),B=m(st,"DIV",{class:!0});var A=F(B);h(ot.$$.fragment,A),En=l(A),kt=m(A,"P",{"data-svelte-h":!0}),y(kt)!=="svelte-u6cunr"&&(kt.innerHTML=jo),Sn=l(A),h(he.$$.fragment,A),An=l(A),h(fe.$$.fragment,A),A.forEach(s),st.forEach(s),ln=l(e),$t=m(e,"P",{}),F($t).forEach(s),this.h()},h(){U(t,"name","hf:doc:metadata"),U(t,"content",ts),Wo(K,"text-align","center"),U(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(v,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,n){c(document.head,t),i(e,b,n),i(e,a,n),i(e,d,n),f(M,e,n),i(e,o,n),f(w,e,n),i(e,vt,n),i(e,Te,n),i(e,Gt,n),i(e,be,n),i(e,jt,n),i(e,ye,n),i(e,Xt,n),f(Me,e,n),i(e,Nt,n),i(e,we,n),i(e,Ct,n),f(ke,e,n),i(e,xt,n),i(e,$e,n),i(e,Jt,n),f(ve,e,n),i(e,Ft,n),f(Ge,e,n),i(e,Ut,n),i(e,je,n),i(e,Pt,n),f(Xe,e,n),i(e,zt,n),i(e,Ne,n),i(e,Wt,n),i(e,Ce,n),i(e,Zt,n),f(xe,e,n),i(e,It,n),f(Je,e,n),i(e,Vt,n),i(e,Fe,n),i(e,Bt,n),f(Ue,e,n),i(e,qt,n),f(Pe,e,n),i(e,Rt,n),i(e,ze,n),i(e,Ht,n),i(e,K,n),i(e,Qt,n),f(We,e,n),i(e,Lt,n),i(e,Ze,n),i(e,Et,n),f(Ie,e,n),i(e,St,n),i(e,P,n),f(Ve,P,null),c(P,cn),c(P,at),c(P,pn),c(P,rt),c(P,mn),f(ee,P,null),i(e,At,n),f(Be,e,n),i(e,Yt,n),i(e,$,n),f(qe,$,null),c($,un),c($,lt),c($,hn),c($,it),c($,fn),f(te,$,null),c($,gn),c($,dt),c($,_n),f(ne,$,null),c($,Tn),c($,ct),i(e,Ot,n),f(Re,e,n),i(e,Dt,n),i(e,H,n),f(He,H,null),c(H,bn),c(H,pt),c(H,yn),c(H,C),f(Qe,C,null),c(C,Mn),c(C,mt),c(C,wn),f(oe,C,null),c(C,kn),f(se,C,null),c(C,$n),f(ae,C,null),i(e,Kt,n),f(Le,e,n),i(e,en,n),i(e,Q,n),f(Ee,Q,null),c(Q,vn),c(Q,ut),c(Q,Gn),c(Q,V),f(Se,V,null),c(V,jn),c(V,ht),c(V,Xn),f(re,V,null),c(V,Nn),f(le,V,null),i(e,tn,n),f(Ae,e,n),i(e,nn,n),i(e,z,n),f(Ye,z,null),c(z,Cn),c(z,ft),c(z,xn),c(z,gt),c(z,Jn),c(z,x),f(Oe,x,null),c(x,Fn),c(x,_t),c(x,Un),f(ie,x,null),c(x,Pn),f(de,x,null),c(x,zn),f(ce,x,null),i(e,on,n),f(De,e,n),i(e,sn,n),i(e,v,n),f(Ke,v,null),c(v,Wn),c(v,Tt),c(v,Zn),c(v,bt),c(v,In),c(v,yt),c(v,Vn),c(v,Mt),c(v,Bn),c(v,J),f(et,J,null),c(J,qn),c(J,wt),c(J,Rn),f(pe,J,null),c(J,Hn),f(me,J,null),c(J,Qn),f(ue,J,null),i(e,an,n),f(tt,e,n),i(e,rn,n),i(e,Y,n),f(nt,Y,null),c(Y,Ln),c(Y,B),f(ot,B,null),c(B,En),c(B,kt),c(B,Sn),f(he,B,null),c(B,An),f(fe,B,null),i(e,ln,n),i(e,$t,n),dn=!0},p(e,[n]){const L={};n&2&&(L.$$scope={dirty:n,ctx:e}),ee.$set(L);const G={};n&2&&(G.$$scope={dirty:n,ctx:e}),te.$set(G);const O={};n&2&&(O.$$scope={dirty:n,ctx:e}),ne.$set(O);const W={};n&2&&(W.$$scope={dirty:n,ctx:e}),oe.$set(W);const D={};n&2&&(D.$$scope={dirty:n,ctx:e}),se.$set(D);const E={};n&2&&(E.$$scope={dirty:n,ctx:e}),ae.$set(E);const S={};n&2&&(S.$$scope={dirty:n,ctx:e}),re.$set(S);const Z={};n&2&&(Z.$$scope={dirty:n,ctx:e}),le.$set(Z);const X={};n&2&&(X.$$scope={dirty:n,ctx:e}),ie.$set(X);const I={};n&2&&(I.$$scope={dirty:n,ctx:e}),de.$set(I);const st={};n&2&&(st.$$scope={dirty:n,ctx:e}),ce.$set(st);const A={};n&2&&(A.$$scope={dirty:n,ctx:e}),pe.$set(A);const Xo={};n&2&&(Xo.$$scope={dirty:n,ctx:e}),me.$set(Xo);const No={};n&2&&(No.$$scope={dirty:n,ctx:e}),ue.$set(No);const Co={};n&2&&(Co.$$scope={dirty:n,ctx:e}),he.$set(Co);const xo={};n&2&&(xo.$$scope={dirty:n,ctx:e}),fe.$set(xo)},i(e){dn||(g(M.$$.fragment,e),g(w.$$.fragment,e),g(Me.$$.fragment,e),g(ke.$$.fragment,e),g(ve.$$.fragment,e),g(Ge.$$.fragment,e),g(Xe.$$.fragment,e),g(xe.$$.fragment,e),g(Je.$$.fragment,e),g(Ue.$$.fragment,e),g(Pe.$$.fragment,e),g(We.$$.fragment,e),g(Ie.$$.fragment,e),g(Ve.$$.fragment,e),g(ee.$$.fragment,e),g(Be.$$.fragment,e),g(qe.$$.fragment,e),g(te.$$.fragment,e),g(ne.$$.fragment,e),g(Re.$$.fragment,e),g(He.$$.fragment,e),g(Qe.$$.fragment,e),g(oe.$$.fragment,e),g(se.$$.fragment,e),g(ae.$$.fragment,e),g(Le.$$.fragment,e),g(Ee.$$.fragment,e),g(Se.$$.fragment,e),g(re.$$.fragment,e),g(le.$$.fragment,e),g(Ae.$$.fragment,e),g(Ye.$$.fragment,e),g(Oe.$$.fragment,e),g(ie.$$.fragment,e),g(de.$$.fragment,e),g(ce.$$.fragment,e),g(De.$$.fragment,e),g(Ke.$$.fragment,e),g(et.$$.fragment,e),g(pe.$$.fragment,e),g(me.$$.fragment,e),g(ue.$$.fragment,e),g(tt.$$.fragment,e),g(nt.$$.fragment,e),g(ot.$$.fragment,e),g(he.$$.fragment,e),g(fe.$$.fragment,e),dn=!0)},o(e){_(M.$$.fragment,e),_(w.$$.fragment,e),_(Me.$$.fragment,e),_(ke.$$.fragment,e),_(ve.$$.fragment,e),_(Ge.$$.fragment,e),_(Xe.$$.fragment,e),_(xe.$$.fragment,e),_(Je.$$.fragment,e),_(Ue.$$.fragment,e),_(Pe.$$.fragment,e),_(We.$$.fragment,e),_(Ie.$$.fragment,e),_(Ve.$$.fragment,e),_(ee.$$.fragment,e),_(Be.$$.fragment,e),_(qe.$$.fragment,e),_(te.$$.fragment,e),_(ne.$$.fragment,e),_(Re.$$.fragment,e),_(He.$$.fragment,e),_(Qe.$$.fragment,e),_(oe.$$.fragment,e),_(se.$$.fragment,e),_(ae.$$.fragment,e),_(Le.$$.fragment,e),_(Ee.$$.fragment,e),_(Se.$$.fragment,e),_(re.$$.fragment,e),_(le.$$.fragment,e),_(Ae.$$.fragment,e),_(Ye.$$.fragment,e),_(Oe.$$.fragment,e),_(ie.$$.fragment,e),_(de.$$.fragment,e),_(ce.$$.fragment,e),_(De.$$.fragment,e),_(Ke.$$.fragment,e),_(et.$$.fragment,e),_(pe.$$.fragment,e),_(me.$$.fragment,e),_(ue.$$.fragment,e),_(tt.$$.fragment,e),_(nt.$$.fragment,e),_(ot.$$.fragment,e),_(he.$$.fragment,e),_(fe.$$.fragment,e),dn=!1},d(e){e&&(s(b),s(a),s(d),s(o),s(vt),s(Te),s(Gt),s(be),s(jt),s(ye),s(Xt),s(Nt),s(we),s(Ct),s(xt),s($e),s(Jt),s(Ft),s(Ut),s(je),s(Pt),s(zt),s(Ne),s(Wt),s(Ce),s(Zt),s(It),s(Vt),s(Fe),s(Bt),s(qt),s(Rt),s(ze),s(Ht),s(K),s(Qt),s(Lt),s(Ze),s(Et),s(St),s(P),s(At),s(Yt),s($),s(Ot),s(Dt),s(H),s(Kt),s(en),s(Q),s(tn),s(nn),s(z),s(on),s(sn),s(v),s(an),s(rn),s(Y),s(ln),s($t)),s(t),T(M,e),T(w,e),T(Me,e),T(ke,e),T(ve,e),T(Ge,e),T(Xe,e),T(xe,e),T(Je,e),T(Ue,e),T(Pe,e),T(We,e),T(Ie,e),T(Ve),T(ee),T(Be,e),T(qe),T(te),T(ne),T(Re,e),T(He),T(Qe),T(oe),T(se),T(ae),T(Le,e),T(Ee),T(Se),T(re),T(le),T(Ae,e),T(Ye),T(Oe),T(ie),T(de),T(ce),T(De,e),T(Ke),T(et),T(pe),T(me),T(ue),T(tt,e),T(nt),T(ot),T(he),T(fe)}}}const ts='{"title":"GPT-NeoX","local":"gpt-neox","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage example","local":"usage-example","sections":[],"depth":2},{"title":"Using Flash Attention 2","local":"using-flash-attention-2","sections":[{"title":"Installation","local":"installation","sections":[],"depth":3},{"title":"Usage","local":"usage","sections":[],"depth":3},{"title":"Expected speedups","local":"expected-speedups","sections":[],"depth":3}],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"GPTNeoXConfig","local":"transformers.GPTNeoXConfig","sections":[],"depth":2},{"title":"GPTNeoXTokenizerFast","local":"transformers.GPTNeoXTokenizerFast","sections":[],"depth":2},{"title":"GPTNeoXModel","local":"transformers.GPTNeoXModel","sections":[],"depth":2},{"title":"GPTNeoXForCausalLM","local":"transformers.GPTNeoXForCausalLM","sections":[],"depth":2},{"title":"GPTNeoXForQuestionAnswering","local":"transformers.GPTNeoXForQuestionAnswering","sections":[],"depth":2},{"title":"GPTNeoXForSequenceClassification","local":"transformers.GPTNeoXForSequenceClassification","sections":[],"depth":2},{"title":"GPTNeoXForTokenClassification","local":"transformers.GPTNeoXForTokenClassification","sections":[],"depth":2}],"depth":1}';function ns(k){return Fo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class cs extends Uo{constructor(t){super(),Po(this,t,ns,es,Jo,{})}}export{cs as component};
