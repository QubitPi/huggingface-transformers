import{s as yt,o as Mt,n as xe}from"../chunks/scheduler.9bc65507.js";import{S as wt,i as vt,g as c,s as l,r as b,A as kt,h as p,f as a,c as i,j as pe,u as y,x as T,k as ue,l as bt,y as u,a as r,v as M,d as w,t as v,w as k}from"../chunks/index.707bf1b6.js";import{T as mt}from"../chunks/Tip.c2ecdbf4.js";import{D as ye}from"../chunks/Docstring.17db21ae.js";import{C as qe}from"../chunks/CodeBlock.54a9f38d.js";import{F as $t,M as _t}from"../chunks/Markdown.fef84341.js";import{E as et}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{P as gt}from"../chunks/PipelineTag.44585822.js";import{H as ze}from"../chunks/Heading.342b1fa6.js";function xt(F){let e,h="Example:",o,s,m;return s=new qe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyME9QVENvbmZpZyUyQyUyME9QVE1vZGVsJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyME9QVCUyMGZhY2Vib29rJTJGb3B0LWxhcmdlJTIwc3R5bGUlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyME9QVENvbmZpZygpJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyMG1vZGVsJTIwKHdpdGglMjByYW5kb20lMjB3ZWlnaHRzKSUyMGZyb20lMjB0aGUlMjBmYWNlYm9vayUyRm9wdC1sYXJnZSUyMHN0eWxlJTIwY29uZmlndXJhdGlvbiUwQW1vZGVsJTIwJTNEJTIwT1BUTW9kZWwoY29uZmlndXJhdGlvbiklMEElMEElMjMlMjBBY2Nlc3NpbmclMjB0aGUlMjBtb2RlbCUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwbW9kZWwuY29uZmln",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OPTConfig, OPTModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a OPT facebook/opt-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = OPTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the facebook/opt-large style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){e=c("p"),e.textContent=h,o=l(),b(s.$$.fragment)},l(t){e=p(t,"P",{"data-svelte-h":!0}),T(e)!=="svelte-11lpom8"&&(e.textContent=h),o=i(t),y(s.$$.fragment,t)},m(t,f){r(t,e,f),r(t,o,f),M(s,t,f),m=!0},p:xe,i(t){m||(w(s.$$.fragment,t),m=!0)},o(t){v(s.$$.fragment,t),m=!1},d(t){t&&(a(e),a(o)),k(s,t)}}}function jt(F){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=c("p"),e.innerHTML=h},l(o){e=p(o,"P",{"data-svelte-h":!0}),T(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(o,s){r(o,e,s)},p:xe,d(o){o&&a(e)}}}function Ct(F){let e,h="Example:",o,s,m;return s=new qe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBPUFRNb2RlbCUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZvcHQtMzUwbSUyMiklMEFtb2RlbCUyMCUzRCUyME9QVE1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRm9wdC0zNTBtJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBbGFzdF9oaWRkZW5fc3RhdGVzJTIwJTNEJTIwb3V0cHV0cy5sYXN0X2hpZGRlbl9zdGF0ZQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, OPTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTModel.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=c("p"),e.textContent=h,o=l(),b(s.$$.fragment)},l(t){e=p(t,"P",{"data-svelte-h":!0}),T(e)!=="svelte-11lpom8"&&(e.textContent=h),o=i(t),y(s.$$.fragment,t)},m(t,f){r(t,e,f),r(t,o,f),M(s,t,f),m=!0},p:xe,i(t){m||(w(s.$$.fragment,t),m=!0)},o(t){v(s.$$.fragment,t),m=!1},d(t){t&&(a(e),a(o)),k(s,t)}}}function Ft(F){let e,h="Example:",o,s,m;return s=new qe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBPUFRGb3JDYXVzYWxMTSUwQSUwQW1vZGVsJTIwJTNEJTIwT1BURm9yQ2F1c2FsTE0uZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGb3B0LTM1MG0lMjIpJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZvcHQtMzUwbSUyMiklMEElMEFwcm9tcHQlMjAlM0QlMjAlMjJIZXklMkMlMjBhcmUlMjB5b3UlMjBjb25zY2lvdXMlM0YlMjBDYW4lMjB5b3UlMjB0YWxrJTIwdG8lMjBtZSUzRiUyMiUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplcihwcm9tcHQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQSUyMyUyMEdlbmVyYXRlJTBBZ2VuZXJhdGVfaWRzJTIwJTNEJTIwbW9kZWwuZ2VuZXJhdGUoaW5wdXRzLmlucHV0X2lkcyUyQyUyMG1heF9sZW5ndGglM0QzMCklMEF0b2tlbml6ZXIuYmF0Y2hfZGVjb2RlKGdlbmVyYXRlX2lkcyUyQyUyMHNraXBfc3BlY2lhbF90b2tlbnMlM0RUcnVlJTJDJTIwY2xlYW5fdXBfdG9rZW5pemF0aW9uX3NwYWNlcyUzREZhbHNlKSU1QjAlNUQ=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, OPTForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;Hey, are you conscious? Can you talk to me?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generate_ids = model.generate(inputs.input_ids, max_length=<span class="hljs-number">30</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generate_ids, skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">False</span>)[<span class="hljs-number">0</span>]
<span class="hljs-string">&quot;Hey, are you conscious? Can you talk to me?\\nI&#x27;m not conscious. I&#x27;m just a little bit of a weirdo.&quot;</span>`,wrap:!1}}),{c(){e=c("p"),e.textContent=h,o=l(),b(s.$$.fragment)},l(t){e=p(t,"P",{"data-svelte-h":!0}),T(e)!=="svelte-11lpom8"&&(e.textContent=h),o=i(t),y(s.$$.fragment,t)},m(t,f){r(t,e,f),r(t,o,f),M(s,t,f),m=!0},p:xe,i(t){m||(w(s.$$.fragment,t),m=!0)},o(t){v(s.$$.fragment,t),m=!1},d(t){t&&(a(e),a(o)),k(s,t)}}}function Pt(F){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=c("p"),e.innerHTML=h},l(o){e=p(o,"P",{"data-svelte-h":!0}),T(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(o,s){r(o,e,s)},p:xe,d(o){o&&a(e)}}}function Jt(F){let e,h="Example of single-label classification:",o,s,m;return s=new qe({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyME9QVEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJBcnRodXJaJTJGb3B0LTM1MG0tZHVtbXktc2MlMjIpJTBBbW9kZWwlMjAlM0QlMjBPUFRGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJBcnRodXJaJTJGb3B0LTM1MG0tZHVtbXktc2MlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX2NsYXNzX2lkJTIwJTNEJTIwbG9naXRzLmFyZ21heCgpLml0ZW0oKSUwQW1vZGVsLmNvbmZpZy5pZDJsYWJlbCU1QnByZWRpY3RlZF9jbGFzc19pZCU1RCUwQSUwQSUyMyUyMFRvJTIwdHJhaW4lMjBhJTIwbW9kZWwlMjBvbiUyMCU2MG51bV9sYWJlbHMlNjAlMjBjbGFzc2VzJTJDJTIweW91JTIwY2FuJTIwcGFzcyUyMCU2MG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTYwJTIwdG8lMjAlNjAuZnJvbV9wcmV0cmFpbmVkKC4uLiklNjAlMEFudW1fbGFiZWxzJTIwJTNEJTIwbGVuKG1vZGVsLmNvbmZpZy5pZDJsYWJlbCklMEFtb2RlbCUyMCUzRCUyME9QVEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMkFydGh1clolMkZvcHQtMzUwbS1kdW1teS1zYyUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzKSUwQSUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxJTVEKSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcyUwQXJvdW5kKGxvc3MuaXRlbSgpJTJDJTIwMik=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, OPTForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;ArthurZ/opt-350m-dummy-sc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ArthurZ/opt-350m-dummy-sc&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ArthurZ/opt-350m-dummy-sc&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">1.71</span>`,wrap:!1}}),{c(){e=c("p"),e.textContent=h,o=l(),b(s.$$.fragment)},l(t){e=p(t,"P",{"data-svelte-h":!0}),T(e)!=="svelte-ykxpe4"&&(e.textContent=h),o=i(t),y(s.$$.fragment,t)},m(t,f){r(t,e,f),r(t,o,f),M(s,t,f),m=!0},p:xe,i(t){m||(w(s.$$.fragment,t),m=!0)},o(t){v(s.$$.fragment,t),m=!1},d(t){t&&(a(e),a(o)),k(s,t)}}}function zt(F){let e,h="Example of multi-label classification:",o,s,m;return s=new qe({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyME9QVEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJBcnRodXJaJTJGb3B0LTM1MG0tZHVtbXktc2MlMjIpJTBBbW9kZWwlMjAlM0QlMjBPUFRGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJBcnRodXJaJTJGb3B0LTM1MG0tZHVtbXktc2MlMjIlMkMlMjBwcm9ibGVtX3R5cGUlM0QlMjJtdWx0aV9sYWJlbF9jbGFzc2lmaWNhdGlvbiUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEFwcmVkaWN0ZWRfY2xhc3NfaWRzJTIwJTNEJTIwdG9yY2guYXJhbmdlKDAlMkMlMjBsb2dpdHMuc2hhcGUlNUItMSU1RCklNUJ0b3JjaC5zaWdtb2lkKGxvZ2l0cykuc3F1ZWV6ZShkaW0lM0QwKSUyMCUzRSUyMDAuNSU1RCUwQSUwQSUyMyUyMFRvJTIwdHJhaW4lMjBhJTIwbW9kZWwlMjBvbiUyMCU2MG51bV9sYWJlbHMlNjAlMjBjbGFzc2VzJTJDJTIweW91JTIwY2FuJTIwcGFzcyUyMCU2MG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTYwJTIwdG8lMjAlNjAuZnJvbV9wcmV0cmFpbmVkKC4uLiklNjAlMEFudW1fbGFiZWxzJTIwJTNEJTIwbGVuKG1vZGVsLmNvbmZpZy5pZDJsYWJlbCklMEFtb2RlbCUyMCUzRCUyME9QVEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUwQSUyMCUyMCUyMCUyMCUyMkFydGh1clolMkZvcHQtMzUwbS1kdW1teS1zYyUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIlMEEpJTBBJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2guc3VtKCUwQSUyMCUyMCUyMCUyMHRvcmNoLm5uLmZ1bmN0aW9uYWwub25lX2hvdChwcmVkaWN0ZWRfY2xhc3NfaWRzJTVCTm9uZSUyQyUyMCUzQSU1RC5jbG9uZSgpJTJDJTIwbnVtX2NsYXNzZXMlM0RudW1fbGFiZWxzKSUyQyUyMGRpbSUzRDElMEEpLnRvKHRvcmNoLmZsb2F0KSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, OPTForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;ArthurZ/opt-350m-dummy-sc&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ArthurZ/opt-350m-dummy-sc&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.arange(<span class="hljs-number">0</span>, logits.shape[-<span class="hljs-number">1</span>])[torch.sigmoid(logits).squeeze(dim=<span class="hljs-number">0</span>) &gt; <span class="hljs-number">0.5</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;ArthurZ/opt-350m-dummy-sc&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.<span class="hljs-built_in">sum</span>(
<span class="hljs-meta">... </span>    torch.nn.functional.one_hot(predicted_class_ids[<span class="hljs-literal">None</span>, :].clone(), num_classes=num_labels), dim=<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>).to(torch.<span class="hljs-built_in">float</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=c("p"),e.textContent=h,o=l(),b(s.$$.fragment)},l(t){e=p(t,"P",{"data-svelte-h":!0}),T(e)!=="svelte-1l8e32d"&&(e.textContent=h),o=i(t),y(s.$$.fragment,t)},m(t,f){r(t,e,f),r(t,o,f),M(s,t,f),m=!0},p:xe,i(t){m||(w(s.$$.fragment,t),m=!0)},o(t){v(s.$$.fragment,t),m=!1},d(t){t&&(a(e),a(o)),k(s,t)}}}function Ut(F){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=c("p"),e.innerHTML=h},l(o){e=p(o,"P",{"data-svelte-h":!0}),T(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(o,s){r(o,e,s)},p:xe,d(o){o&&a(e)}}}function Ot(F){let e,h="Example:",o,s,m;return s=new qe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBPUFRGb3JRdWVzdGlvbkFuc3dlcmluZyUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9yY2gubWFudWFsX3NlZWQoNCklMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRm9wdC0zNTBtJTIyKSUwQSUwQSUyMyUyMG5vdGUlM0ElMjB3ZSUyMGFyZSUyMGxvYWRpbmclMjBhJTIwT1BURm9yUXVlc3Rpb25BbnN3ZXJpbmclMjBmcm9tJTIwdGhlJTIwaHViJTIwaGVyZSUyQyUwQSUyMyUyMHNvJTIwdGhlJTIwaGVhZCUyMHdpbGwlMjBiZSUyMHJhbmRvbWx5JTIwaW5pdGlhbGl6ZWQlMkMlMjBoZW5jZSUyMHRoZSUyMHByZWRpY3Rpb25zJTIwd2lsbCUyMGJlJTIwcmFuZG9tJTBBbW9kZWwlMjAlM0QlMjBPUFRGb3JRdWVzdGlvbkFuc3dlcmluZy5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZvcHQtMzUwbSUyMiklMEElMEFxdWVzdGlvbiUyQyUyMHRleHQlMjAlM0QlMjAlMjJXaG8lMjB3YXMlMjBKaW0lMjBIZW5zb24lM0YlMjIlMkMlMjAlMjJKaW0lMjBIZW5zb24lMjB3YXMlMjBhJTIwbmljZSUyMHB1cHBldCUyMiUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplcihxdWVzdGlvbiUyQyUyMHRleHQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBYW5zd2VyX3N0YXJ0X2luZGV4JTIwJTNEJTIwb3V0cHV0cy5zdGFydF9sb2dpdHMuYXJnbWF4KCklMEFhbnN3ZXJfZW5kX2luZGV4JTIwJTNEJTIwb3V0cHV0cy5lbmRfbG9naXRzLmFyZ21heCgpJTBBJTBBYW5zd2VyX29mZnNldCUyMCUzRCUyMGxlbih0b2tlbml6ZXIocXVlc3Rpb24pJTVCMCU1RCklMEElMEFwcmVkaWN0X2Fuc3dlcl90b2tlbnMlMjAlM0QlMjBpbnB1dHMuaW5wdXRfaWRzJTVCJTBBJTIwJTIwJTIwJTIwMCUyQyUyMGFuc3dlcl9vZmZzZXQlMjAlMkIlMjBhbnN3ZXJfc3RhcnRfaW5kZXglMjAlM0ElMjBhbnN3ZXJfb2Zmc2V0JTIwJTJCJTIwYW5zd2VyX2VuZF9pbmRleCUyMCUyQiUyMDElMEElNUQlMEFwcmVkaWN0ZWQlMjAlM0QlMjB0b2tlbml6ZXIuZGVjb2RlKHByZWRpY3RfYW5zd2VyX3Rva2VucyklMEFwcmVkaWN0ZWQ=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, OPTForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">4</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># note: we are loading a OPTForQuestionAnswering from the hub here,</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># so the head will be randomly initialized, hence the predictions will be random</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_offset = <span class="hljs-built_in">len</span>(tokenizer(question)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[
<span class="hljs-meta">... </span>    <span class="hljs-number">0</span>, answer_offset + answer_start_index : answer_offset + answer_end_index + <span class="hljs-number">1</span>
<span class="hljs-meta">... </span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted = tokenizer.decode(predict_answer_tokens)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted
<span class="hljs-string">&#x27; a nice puppet&#x27;</span>`,wrap:!1}}),{c(){e=c("p"),e.textContent=h,o=l(),b(s.$$.fragment)},l(t){e=p(t,"P",{"data-svelte-h":!0}),T(e)!=="svelte-11lpom8"&&(e.textContent=h),o=i(t),y(s.$$.fragment,t)},m(t,f){r(t,e,f),r(t,o,f),M(s,t,f),m=!0},p:xe,i(t){m||(w(s.$$.fragment,t),m=!0)},o(t){v(s.$$.fragment,t),m=!1},d(t){t&&(a(e),a(o)),k(s,t)}}}function Zt(F){let e,h,o,s,m,t,f=`The bare OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,D,z,G=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,N,P,j,W,_,O='The <a href="/docs/transformers/main/en/model_doc/opt#transformers.OPTModel">OPTModel</a> forward method, overrides the <code>__call__</code> special method.',me,E,_e,Q,le,V,Te,H,K,L,B,X,re,he,ee,q,Me,U,te,x,Z,S="The OPT Model transformer with a sequence classification head on top (linear layer).",I,A,je=`<a href="/docs/transformers/main/en/model_doc/opt#transformers.OPTForSequenceClassification">OPTForSequenceClassification</a> uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do.`,Ce,ie,Fe=`Since it does classification on the last token, it requires to know the position of the last token. If a
<code>pad_token_id</code> is defined in the configuration, it finds the last token that is not a padding token in each row. If
no <code>pad_token_id</code> is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when <code>inputs_embeds</code> are passed instead of <code>input_ids</code>, it does the same (take the last value in
each row of the batch).`,$,J,ne=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,oe,de,Ue=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,tt,ce,Pe,ot,Je,ht='The <a href="/docs/transformers/main/en/model_doc/opt#transformers.OPTForSequenceClassification">OPTForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',st,we,at,ve,it,Oe,Ze,Xe,nt,Y,We,Ge,He,Ae=`The OPT Model transformer with a span classification head on top for extractive question-answering tasks like SQuAD
(a linear layers on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,dt,Le,Be=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,ct,Ne,Ye=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,pt,be,ke,ut,Ve,De='The <a href="/docs/transformers/main/en/model_doc/opt#transformers.OPTForQuestionAnswering">OPTForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',rt,se,Re,Ie,Qe;return e=new ze({props:{title:"OPTModel",local:"transformers.OPTModel",headingTag:"h2"}}),s=new ye({props:{name:"class transformers.OPTModel",anchor:"transformers.OPTModel",parameters:[{name:"config",val:": OPTConfig"}],parametersDescription:[{anchor:"transformers.OPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/opt/modeling_opt.py#L949"}}),j=new ye({props:{name:"forward",anchor:"transformers.OPTModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.OPTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OPTModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>If you want to change padding behavior, you should read <code>modeling_opt._prepare_decoder_attention_mask</code>
and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"attention_mask"},{anchor:"transformers.OPTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OPTModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.OPTModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OPTModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.OPTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OPTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OPTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/opt/modeling_opt.py#L969",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig"
>OPTConfig</a>) and inputs.</p>
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
`}}),E=new mt({props:{$$slots:{default:[jt]},$$scope:{ctx:F}}}),Q=new et({props:{anchor:"transformers.OPTModel.forward.example",$$slots:{default:[Ct]},$$scope:{ctx:F}}}),V=new ze({props:{title:"OPTForCausalLM",local:"transformers.OPTForCausalLM",headingTag:"h2"}}),K=new ye({props:{name:"class transformers.OPTForCausalLM",anchor:"transformers.OPTForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/opt/modeling_opt.py#L1019"}}),X=new ye({props:{name:"forward",anchor:"transformers.OPTForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.OPTForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OPTForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.OPTForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_hidden_layers, num_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OPTForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.OPTForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OPTForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.OPTForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.OPTForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OPTForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.OPTForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/opt/modeling_opt.py#L1050",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig"
>OPTConfig</a>) and inputs.</p>
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
`}}),he=new et({props:{anchor:"transformers.OPTForCausalLM.forward.example",$$slots:{default:[Ft]},$$scope:{ctx:F}}}),q=new ze({props:{title:"OPTForSequenceClassification",local:"transformers.OPTForSequenceClassification",headingTag:"h2"}}),te=new ye({props:{name:"class transformers.OPTForSequenceClassification",anchor:"transformers.OPTForSequenceClassification",parameters:[{name:"config",val:": OPTConfig"}],parametersDescription:[{anchor:"transformers.OPTForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/opt/modeling_opt.py#L1222"}}),Pe=new ye({props:{name:"forward",anchor:"transformers.OPTForSequenceClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.OPTForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OPTForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>If you want to change padding behavior, you should read <code>modeling_opt._prepare_decoder_attention_mask</code>
and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"attention_mask"},{anchor:"transformers.OPTForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OPTForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.OPTForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OPTForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.OPTForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OPTForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OPTForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OPTForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/opt/modeling_opt.py#L1247",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig"
>OPTConfig</a>) and inputs.</p>
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
`}}),we=new mt({props:{$$slots:{default:[Pt]},$$scope:{ctx:F}}}),ve=new et({props:{anchor:"transformers.OPTForSequenceClassification.forward.example",$$slots:{default:[Jt]},$$scope:{ctx:F}}}),Oe=new et({props:{anchor:"transformers.OPTForSequenceClassification.forward.example-2",$$slots:{default:[zt]},$$scope:{ctx:F}}}),Xe=new ze({props:{title:"OPTForQuestionAnswering",local:"transformers.OPTForQuestionAnswering",headingTag:"h2"}}),We=new ye({props:{name:"class transformers.OPTForQuestionAnswering",anchor:"transformers.OPTForQuestionAnswering",parameters:[{name:"config",val:": OPTConfig"}],parametersDescription:[{anchor:"transformers.OPTForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/opt/modeling_opt.py#L1353"}}),ke=new ye({props:{name:"forward",anchor:"transformers.OPTForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"start_positions",val:": Optional = None"},{name:"end_positions",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.OPTForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OPTForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>decoder_input_ids</code> have to be input (see
<code>past_key_values</code>).</p>
<p>If you want to change padding behavior, you should read <code>modeling_opt._prepare_decoder_attention_mask</code>
and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"attention_mask"},{anchor:"transformers.OPTForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OPTForQuestionAnswering.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.OPTForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OPTForQuestionAnswering.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.OPTForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OPTForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OPTForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OPTForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.OPTForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/opt/modeling_opt.py#L1369",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig"
>OPTConfig</a>) and inputs.</p>
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
`}}),se=new mt({props:{$$slots:{default:[Ut]},$$scope:{ctx:F}}}),Ie=new et({props:{anchor:"transformers.OPTForQuestionAnswering.forward.example",$$slots:{default:[Ot]},$$scope:{ctx:F}}}),{c(){b(e.$$.fragment),h=l(),o=c("div"),b(s.$$.fragment),m=l(),t=c("p"),t.innerHTML=f,D=l(),z=c("p"),z.innerHTML=G,N=l(),P=c("div"),b(j.$$.fragment),W=l(),_=c("p"),_.innerHTML=O,me=l(),b(E.$$.fragment),_e=l(),b(Q.$$.fragment),le=l(),b(V.$$.fragment),Te=l(),H=c("div"),b(K.$$.fragment),L=l(),B=c("div"),b(X.$$.fragment),re=l(),b(he.$$.fragment),ee=l(),b(q.$$.fragment),Me=l(),U=c("div"),b(te.$$.fragment),x=l(),Z=c("p"),Z.textContent=S,I=l(),A=c("p"),A.innerHTML=je,Ce=l(),ie=c("p"),ie.innerHTML=Fe,$=l(),J=c("p"),J.innerHTML=ne,oe=l(),de=c("p"),de.innerHTML=Ue,tt=l(),ce=c("div"),b(Pe.$$.fragment),ot=l(),Je=c("p"),Je.innerHTML=ht,st=l(),b(we.$$.fragment),at=l(),b(ve.$$.fragment),it=l(),b(Oe.$$.fragment),Ze=l(),b(Xe.$$.fragment),nt=l(),Y=c("div"),b(We.$$.fragment),Ge=l(),He=c("p"),He.innerHTML=Ae,dt=l(),Le=c("p"),Le.innerHTML=Be,ct=l(),Ne=c("p"),Ne.innerHTML=Ye,pt=l(),be=c("div"),b(ke.$$.fragment),ut=l(),Ve=c("p"),Ve.innerHTML=De,rt=l(),b(se.$$.fragment),Re=l(),b(Ie.$$.fragment),this.h()},l(d){y(e.$$.fragment,d),h=i(d),o=p(d,"DIV",{class:!0});var C=pe(o);y(s.$$.fragment,C),m=i(C),t=p(C,"P",{"data-svelte-h":!0}),T(t)!=="svelte-19zlmzf"&&(t.innerHTML=f),D=i(C),z=p(C,"P",{"data-svelte-h":!0}),T(z)!=="svelte-hswkmf"&&(z.innerHTML=G),N=i(C),P=p(C,"DIV",{class:!0});var fe=pe(P);y(j.$$.fragment,fe),W=i(fe),_=p(fe,"P",{"data-svelte-h":!0}),T(_)!=="svelte-1l5tgze"&&(_.innerHTML=O),me=i(fe),y(E.$$.fragment,fe),_e=i(fe),y(Q.$$.fragment,fe),fe.forEach(a),C.forEach(a),le=i(d),y(V.$$.fragment,d),Te=i(d),H=p(d,"DIV",{class:!0});var Ke=pe(H);y(K.$$.fragment,Ke),L=i(Ke),B=p(Ke,"DIV",{class:!0});var Se=pe(B);y(X.$$.fragment,Se),re=i(Se),y(he.$$.fragment,Se),Se.forEach(a),Ke.forEach(a),ee=i(d),y(q.$$.fragment,d),Me=i(d),U=p(d,"DIV",{class:!0});var R=pe(U);y(te.$$.fragment,R),x=i(R),Z=p(R,"P",{"data-svelte-h":!0}),T(Z)!=="svelte-1hcah69"&&(Z.textContent=S),I=i(R),A=p(R,"P",{"data-svelte-h":!0}),T(A)!=="svelte-v93vpl"&&(A.innerHTML=je),Ce=i(R),ie=p(R,"P",{"data-svelte-h":!0}),T(ie)!=="svelte-10ugs3m"&&(ie.innerHTML=Fe),$=i(R),J=p(R,"P",{"data-svelte-h":!0}),T(J)!=="svelte-6pahdo"&&(J.innerHTML=ne),oe=i(R),de=p(R,"P",{"data-svelte-h":!0}),T(de)!=="svelte-hswkmf"&&(de.innerHTML=Ue),tt=i(R),ce=p(R,"DIV",{class:!0});var ge=pe(ce);y(Pe.$$.fragment,ge),ot=i(ge),Je=p(ge,"P",{"data-svelte-h":!0}),T(Je)!=="svelte-vm54g"&&(Je.innerHTML=ht),st=i(ge),y(we.$$.fragment,ge),at=i(ge),y(ve.$$.fragment,ge),it=i(ge),y(Oe.$$.fragment,ge),ge.forEach(a),R.forEach(a),Ze=i(d),y(Xe.$$.fragment,d),nt=i(d),Y=p(d,"DIV",{class:!0});var ae=pe(Y);y(We.$$.fragment,ae),Ge=i(ae),He=p(ae,"P",{"data-svelte-h":!0}),T(He)!=="svelte-7pga04"&&(He.innerHTML=Ae),dt=i(ae),Le=p(ae,"P",{"data-svelte-h":!0}),T(Le)!=="svelte-6pahdo"&&(Le.innerHTML=Be),ct=i(ae),Ne=p(ae,"P",{"data-svelte-h":!0}),T(Ne)!=="svelte-hswkmf"&&(Ne.innerHTML=Ye),pt=i(ae),be=p(ae,"DIV",{class:!0});var $e=pe(be);y(ke.$$.fragment,$e),ut=i($e),Ve=p($e,"P",{"data-svelte-h":!0}),T(Ve)!=="svelte-jhpkae"&&(Ve.innerHTML=De),rt=i($e),y(se.$$.fragment,$e),Re=i($e),y(Ie.$$.fragment,$e),$e.forEach(a),ae.forEach(a),this.h()},h(){ue(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ue(o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ue(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ue(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ue(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ue(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ue(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ue(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(d,C){M(e,d,C),r(d,h,C),r(d,o,C),M(s,o,null),u(o,m),u(o,t),u(o,D),u(o,z),u(o,N),u(o,P),M(j,P,null),u(P,W),u(P,_),u(P,me),M(E,P,null),u(P,_e),M(Q,P,null),r(d,le,C),M(V,d,C),r(d,Te,C),r(d,H,C),M(K,H,null),u(H,L),u(H,B),M(X,B,null),u(B,re),M(he,B,null),r(d,ee,C),M(q,d,C),r(d,Me,C),r(d,U,C),M(te,U,null),u(U,x),u(U,Z),u(U,I),u(U,A),u(U,Ce),u(U,ie),u(U,$),u(U,J),u(U,oe),u(U,de),u(U,tt),u(U,ce),M(Pe,ce,null),u(ce,ot),u(ce,Je),u(ce,st),M(we,ce,null),u(ce,at),M(ve,ce,null),u(ce,it),M(Oe,ce,null),r(d,Ze,C),M(Xe,d,C),r(d,nt,C),r(d,Y,C),M(We,Y,null),u(Y,Ge),u(Y,He),u(Y,dt),u(Y,Le),u(Y,ct),u(Y,Ne),u(Y,pt),u(Y,be),M(ke,be,null),u(be,ut),u(be,Ve),u(be,rt),M(se,be,null),u(be,Re),M(Ie,be,null),Qe=!0},p(d,C){const fe={};C&2&&(fe.$$scope={dirty:C,ctx:d}),E.$set(fe);const Ke={};C&2&&(Ke.$$scope={dirty:C,ctx:d}),Q.$set(Ke);const Se={};C&2&&(Se.$$scope={dirty:C,ctx:d}),he.$set(Se);const R={};C&2&&(R.$$scope={dirty:C,ctx:d}),we.$set(R);const ge={};C&2&&(ge.$$scope={dirty:C,ctx:d}),ve.$set(ge);const ae={};C&2&&(ae.$$scope={dirty:C,ctx:d}),Oe.$set(ae);const $e={};C&2&&($e.$$scope={dirty:C,ctx:d}),se.$set($e);const lt={};C&2&&(lt.$$scope={dirty:C,ctx:d}),Ie.$set(lt)},i(d){Qe||(w(e.$$.fragment,d),w(s.$$.fragment,d),w(j.$$.fragment,d),w(E.$$.fragment,d),w(Q.$$.fragment,d),w(V.$$.fragment,d),w(K.$$.fragment,d),w(X.$$.fragment,d),w(he.$$.fragment,d),w(q.$$.fragment,d),w(te.$$.fragment,d),w(Pe.$$.fragment,d),w(we.$$.fragment,d),w(ve.$$.fragment,d),w(Oe.$$.fragment,d),w(Xe.$$.fragment,d),w(We.$$.fragment,d),w(ke.$$.fragment,d),w(se.$$.fragment,d),w(Ie.$$.fragment,d),Qe=!0)},o(d){v(e.$$.fragment,d),v(s.$$.fragment,d),v(j.$$.fragment,d),v(E.$$.fragment,d),v(Q.$$.fragment,d),v(V.$$.fragment,d),v(K.$$.fragment,d),v(X.$$.fragment,d),v(he.$$.fragment,d),v(q.$$.fragment,d),v(te.$$.fragment,d),v(Pe.$$.fragment,d),v(we.$$.fragment,d),v(ve.$$.fragment,d),v(Oe.$$.fragment,d),v(Xe.$$.fragment,d),v(We.$$.fragment,d),v(ke.$$.fragment,d),v(se.$$.fragment,d),v(Ie.$$.fragment,d),Qe=!1},d(d){d&&(a(h),a(o),a(le),a(Te),a(H),a(ee),a(Me),a(U),a(Ze),a(nt),a(Y)),k(e,d),k(s),k(j),k(E),k(Q),k(V,d),k(K),k(X),k(he),k(q,d),k(te),k(Pe),k(we),k(ve),k(Oe),k(Xe,d),k(We),k(ke),k(se),k(Ie)}}}function Wt(F){let e,h;return e=new _t({props:{$$slots:{default:[Zt]},$$scope:{ctx:F}}}),{c(){b(e.$$.fragment)},l(o){y(e.$$.fragment,o)},m(o,s){M(e,o,s),h=!0},p(o,s){const m={};s&2&&(m.$$scope={dirty:s,ctx:o}),e.$set(m)},i(o){h||(w(e.$$.fragment,o),h=!0)},o(o){v(e.$$.fragment,o),h=!1},d(o){k(e,o)}}}function It(F){let e,h="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",o,s,m="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,f,D=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,z,G,N=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,P,j,W=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=c("p"),e.innerHTML=h,o=l(),s=c("ul"),s.innerHTML=m,t=l(),f=c("p"),f.innerHTML=D,z=l(),G=c("ul"),G.innerHTML=N,P=l(),j=c("p"),j.innerHTML=W},l(_){e=p(_,"P",{"data-svelte-h":!0}),T(e)!=="svelte-1ajbfxg"&&(e.innerHTML=h),o=i(_),s=p(_,"UL",{"data-svelte-h":!0}),T(s)!=="svelte-qm1t26"&&(s.innerHTML=m),t=i(_),f=p(_,"P",{"data-svelte-h":!0}),T(f)!=="svelte-1v9qsc5"&&(f.innerHTML=D),z=i(_),G=p(_,"UL",{"data-svelte-h":!0}),T(G)!=="svelte-15scerc"&&(G.innerHTML=N),P=i(_),j=p(_,"P",{"data-svelte-h":!0}),T(j)!=="svelte-1an3odd"&&(j.innerHTML=W)},m(_,O){r(_,e,O),r(_,o,O),r(_,s,O),r(_,t,O),r(_,f,O),r(_,z,O),r(_,G,O),r(_,P,O),r(_,j,O)},p:xe,d(_){_&&(a(e),a(o),a(s),a(t),a(f),a(z),a(G),a(P),a(j))}}}function qt(F){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=c("p"),e.innerHTML=h},l(o){e=p(o,"P",{"data-svelte-h":!0}),T(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(o,s){r(o,e,s)},p:xe,d(o){o&&a(e)}}}function Gt(F){let e,h="Example:",o,s,m;return s=new qe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURk9QVE1vZGVsJTBBaW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRm9wdC0zNTBtJTIyKSUwQW1vZGVsJTIwJTNEJTIwVEZPUFRNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZvcHQtMzUwbSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIydGYlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKGlucHV0cyklMEElMEFsYXN0X2hpZGRlbl9zdGF0ZXMlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRl",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFOPTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOPTModel.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=c("p"),e.textContent=h,o=l(),b(s.$$.fragment)},l(t){e=p(t,"P",{"data-svelte-h":!0}),T(e)!=="svelte-11lpom8"&&(e.textContent=h),o=i(t),y(s.$$.fragment,t)},m(t,f){r(t,e,f),r(t,o,f),M(s,t,f),m=!0},p:xe,i(t){m||(w(s.$$.fragment,t),m=!0)},o(t){v(s.$$.fragment,t),m=!1},d(t){t&&(a(e),a(o)),k(s,t)}}}function Ht(F){let e,h="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",o,s,m="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,f,D=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,z,G,N=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,P,j,W=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=c("p"),e.innerHTML=h,o=l(),s=c("ul"),s.innerHTML=m,t=l(),f=c("p"),f.innerHTML=D,z=l(),G=c("ul"),G.innerHTML=N,P=l(),j=c("p"),j.innerHTML=W},l(_){e=p(_,"P",{"data-svelte-h":!0}),T(e)!=="svelte-1ajbfxg"&&(e.innerHTML=h),o=i(_),s=p(_,"UL",{"data-svelte-h":!0}),T(s)!=="svelte-qm1t26"&&(s.innerHTML=m),t=i(_),f=p(_,"P",{"data-svelte-h":!0}),T(f)!=="svelte-1v9qsc5"&&(f.innerHTML=D),z=i(_),G=p(_,"UL",{"data-svelte-h":!0}),T(G)!=="svelte-15scerc"&&(G.innerHTML=N),P=i(_),j=p(_,"P",{"data-svelte-h":!0}),T(j)!=="svelte-1an3odd"&&(j.innerHTML=W)},m(_,O){r(_,e,O),r(_,o,O),r(_,s,O),r(_,t,O),r(_,f,O),r(_,z,O),r(_,G,O),r(_,P,O),r(_,j,O)},p:xe,d(_){_&&(a(e),a(o),a(s),a(t),a(f),a(z),a(G),a(P),a(j))}}}function Lt(F){let e,h="Example:",o,s,m;return s=new qe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURk9QVEZvckNhdXNhbExNJTBBaW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRm9wdC0zNTBtJTIyKSUwQW1vZGVsJTIwJTNEJTIwVEZPUFRGb3JDYXVzYWxMTS5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZvcHQtMzUwbSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIydGYlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKGlucHV0cyklMEFsb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFOPTForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOPTForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=c("p"),e.textContent=h,o=l(),b(s.$$.fragment)},l(t){e=p(t,"P",{"data-svelte-h":!0}),T(e)!=="svelte-11lpom8"&&(e.textContent=h),o=i(t),y(s.$$.fragment,t)},m(t,f){r(t,e,f),r(t,o,f),M(s,t,f),m=!0},p:xe,i(t){m||(w(s.$$.fragment,t),m=!0)},o(t){v(s.$$.fragment,t),m=!1},d(t){t&&(a(e),a(o)),k(s,t)}}}function Bt(F){let e,h,o,s,m,t,f=`The bare TF OPT Model outputting raw hidden-states without any specific head on top.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,D,z,G=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,N,P,j,W,_,O,me,E='The <a href="/docs/transformers/main/en/model_doc/opt#transformers.TFOPTModel">TFOPTModel</a> forward method, overrides the <code>__call__</code> special method.',_e,Q,le,V,Te,H,K,L,B,X,re,he="The OPT Model transformer with a language modeling head on top.",ee,q,Me=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,U,te,x=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,Z,S,I,A,je,Ce,ie,Fe;return e=new ze({props:{title:"TFOPTModel",local:"transformers.TFOPTModel",headingTag:"h2"}}),s=new ye({props:{name:"class transformers.TFOPTModel",anchor:"transformers.TFOPTModel",parameters:[{name:"config",val:": OPTConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/opt/modeling_tf_opt.py#L832"}}),P=new mt({props:{$$slots:{default:[It]},$$scope:{ctx:F}}}),_=new ye({props:{name:"call",anchor:"transformers.TFOPTModel.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"past_key_values",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"use_cache",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOPTModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFOPTModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFOPTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFOPTModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFOPTModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFOPTModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFOPTModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFOPTModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOPTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/opt/modeling_tf_opt.py#L851",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig"
>OPTConfig</a>) and inputs.</p>
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
`}}),Q=new mt({props:{$$slots:{default:[qt]},$$scope:{ctx:F}}}),V=new et({props:{anchor:"transformers.TFOPTModel.call.example",$$slots:{default:[Gt]},$$scope:{ctx:F}}}),H=new ze({props:{title:"TFOPTForCausalLM",local:"transformers.TFOPTForCausalLM",headingTag:"h2"}}),B=new ye({props:{name:"class transformers.TFOPTForCausalLM",anchor:"transformers.TFOPTForCausalLM",parameters:[{name:"config",val:": OPTConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOPTForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/opt/modeling_tf_opt.py#L924"}}),S=new mt({props:{$$slots:{default:[Ht]},$$scope:{ctx:F}}}),je=new ye({props:{name:"call",anchor:"transformers.TFOPTForCausalLM.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"past_key_values",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"use_cache",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": Optional[bool] = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFOPTForCausalLM.call.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFOPTForCausalLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFOPTForCausalLM.call.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_hidden_layers, num_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFOPTForCausalLM.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFOPTForCausalLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFOPTForCausalLM.call.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.TFOPTForCausalLM.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFOPTForCausalLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFOPTForCausalLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFOPTForCausalLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/opt/modeling_tf_opt.py#L956",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig"
>OPTConfig</a>) and inputs.</p>
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
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or <code>tuple(tf.Tensor)</code>: A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig"
>OPTConfig</a>) and inputs.</p>
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
`}}),ie=new et({props:{anchor:"transformers.TFOPTForCausalLM.call.example",$$slots:{default:[Lt]},$$scope:{ctx:F}}}),{c(){b(e.$$.fragment),h=l(),o=c("div"),b(s.$$.fragment),m=l(),t=c("p"),t.innerHTML=f,D=l(),z=c("p"),z.innerHTML=G,N=l(),b(P.$$.fragment),j=l(),W=c("div"),b(_.$$.fragment),O=l(),me=c("p"),me.innerHTML=E,_e=l(),b(Q.$$.fragment),le=l(),b(V.$$.fragment),Te=l(),b(H.$$.fragment),K=l(),L=c("div"),b(B.$$.fragment),X=l(),re=c("p"),re.textContent=he,ee=l(),q=c("p"),q.innerHTML=Me,U=l(),te=c("p"),te.innerHTML=x,Z=l(),b(S.$$.fragment),I=l(),A=c("div"),b(je.$$.fragment),Ce=l(),b(ie.$$.fragment),this.h()},l($){y(e.$$.fragment,$),h=i($),o=p($,"DIV",{class:!0});var J=pe(o);y(s.$$.fragment,J),m=i(J),t=p(J,"P",{"data-svelte-h":!0}),T(t)!=="svelte-11rvf79"&&(t.innerHTML=f),D=i(J),z=p(J,"P",{"data-svelte-h":!0}),T(z)!=="svelte-1be7e3c"&&(z.innerHTML=G),N=i(J),y(P.$$.fragment,J),j=i(J),W=p(J,"DIV",{class:!0});var ne=pe(W);y(_.$$.fragment,ne),O=i(ne),me=p(ne,"P",{"data-svelte-h":!0}),T(me)!=="svelte-1t5qzja"&&(me.innerHTML=E),_e=i(ne),y(Q.$$.fragment,ne),le=i(ne),y(V.$$.fragment,ne),ne.forEach(a),J.forEach(a),Te=i($),y(H.$$.fragment,$),K=i($),L=p($,"DIV",{class:!0});var oe=pe(L);y(B.$$.fragment,oe),X=i(oe),re=p(oe,"P",{"data-svelte-h":!0}),T(re)!=="svelte-17041eg"&&(re.textContent=he),ee=i(oe),q=p(oe,"P",{"data-svelte-h":!0}),T(q)!=="svelte-1qaxm70"&&(q.innerHTML=Me),U=i(oe),te=p(oe,"P",{"data-svelte-h":!0}),T(te)!=="svelte-1be7e3c"&&(te.innerHTML=x),Z=i(oe),y(S.$$.fragment,oe),I=i(oe),A=p(oe,"DIV",{class:!0});var de=pe(A);y(je.$$.fragment,de),Ce=i(de),y(ie.$$.fragment,de),de.forEach(a),oe.forEach(a),this.h()},h(){ue(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ue(o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ue(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ue(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m($,J){M(e,$,J),r($,h,J),r($,o,J),M(s,o,null),u(o,m),u(o,t),u(o,D),u(o,z),u(o,N),M(P,o,null),u(o,j),u(o,W),M(_,W,null),u(W,O),u(W,me),u(W,_e),M(Q,W,null),u(W,le),M(V,W,null),r($,Te,J),M(H,$,J),r($,K,J),r($,L,J),M(B,L,null),u(L,X),u(L,re),u(L,ee),u(L,q),u(L,U),u(L,te),u(L,Z),M(S,L,null),u(L,I),u(L,A),M(je,A,null),u(A,Ce),M(ie,A,null),Fe=!0},p($,J){const ne={};J&2&&(ne.$$scope={dirty:J,ctx:$}),P.$set(ne);const oe={};J&2&&(oe.$$scope={dirty:J,ctx:$}),Q.$set(oe);const de={};J&2&&(de.$$scope={dirty:J,ctx:$}),V.$set(de);const Ue={};J&2&&(Ue.$$scope={dirty:J,ctx:$}),S.$set(Ue);const tt={};J&2&&(tt.$$scope={dirty:J,ctx:$}),ie.$set(tt)},i($){Fe||(w(e.$$.fragment,$),w(s.$$.fragment,$),w(P.$$.fragment,$),w(_.$$.fragment,$),w(Q.$$.fragment,$),w(V.$$.fragment,$),w(H.$$.fragment,$),w(B.$$.fragment,$),w(S.$$.fragment,$),w(je.$$.fragment,$),w(ie.$$.fragment,$),Fe=!0)},o($){v(e.$$.fragment,$),v(s.$$.fragment,$),v(P.$$.fragment,$),v(_.$$.fragment,$),v(Q.$$.fragment,$),v(V.$$.fragment,$),v(H.$$.fragment,$),v(B.$$.fragment,$),v(S.$$.fragment,$),v(je.$$.fragment,$),v(ie.$$.fragment,$),Fe=!1},d($){$&&(a(h),a(o),a(Te),a(K),a(L)),k(e,$),k(s),k(P),k(_),k(Q),k(V),k(H,$),k(B),k(S),k(je),k(ie)}}}function Nt(F){let e,h;return e=new _t({props:{$$slots:{default:[Bt]},$$scope:{ctx:F}}}),{c(){b(e.$$.fragment)},l(o){y(e.$$.fragment,o)},m(o,s){M(e,o,s),h=!0},p(o,s){const m={};s&2&&(m.$$scope={dirty:s,ctx:o}),e.$set(m)},i(o){h||(w(e.$$.fragment,o),h=!0)},o(o){v(e.$$.fragment,o),h=!1},d(o){k(e,o)}}}function Vt(F){let e,h="Example:",o,s,m;return s=new qe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4T1BUTW9kZWwlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRm9wdC0zNTBtJTIyKSUwQW1vZGVsJTIwJTNEJTIwRmxheE9QVE1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRm9wdC0zNTBtJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJqYXglMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQWxhc3RfaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxOPTModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxOPTModel.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=c("p"),e.textContent=h,o=l(),b(s.$$.fragment)},l(t){e=p(t,"P",{"data-svelte-h":!0}),T(e)!=="svelte-11lpom8"&&(e.textContent=h),o=i(t),y(s.$$.fragment,t)},m(t,f){r(t,e,f),r(t,o,f),M(s,t,f),m=!0},p:xe,i(t){m||(w(s.$$.fragment,t),m=!0)},o(t){v(s.$$.fragment,t),m=!1},d(t){t&&(a(e),a(o)),k(s,t)}}}function Rt(F){let e,h="Example:",o,s,m;return s=new qe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4T1BURm9yQ2F1c2FsTE0lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRm9wdC0zNTBtJTIyKSUwQW1vZGVsJTIwJTNEJTIwRmxheE9QVEZvckNhdXNhbExNLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRm9wdC0zNTBtJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJucCUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBJTIzJTIwcmV0cmlldmUlMjBsb2d0cyUyMGZvciUyMG5leHQlMjB0b2tlbiUwQW5leHRfdG9rZW5fbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHMlNUIlM0ElMkMlMjAtMSU1RA==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxOPTForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxOPTForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve logts for next token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`,wrap:!1}}),{c(){e=c("p"),e.textContent=h,o=l(),b(s.$$.fragment)},l(t){e=p(t,"P",{"data-svelte-h":!0}),T(e)!=="svelte-11lpom8"&&(e.textContent=h),o=i(t),y(s.$$.fragment,t)},m(t,f){r(t,e,f),r(t,o,f),M(s,t,f),m=!0},p:xe,i(t){m||(w(s.$$.fragment,t),m=!0)},o(t){v(s.$$.fragment,t),m=!1},d(t){t&&(a(e),a(o)),k(s,t)}}}function Qt(F){let e,h,o,s,m,t,f,D,z,G,N,P,j,W,_,O,me=`OPT Model with a language modeling head on top (linear layer with weights tied to the input embeddings) e.g for
autoregressive tasks.`,E,_e,Q=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,le,V,Te=`This model is also a Flax Linen
<a href="https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html" rel="nofollow">flax.nn.Module</a> subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`,H,K,L="Finally, this model supports inherent JAX features such as:",B,X,re='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',he,ee,q,Me,U,te;return e=new ze({props:{title:"FlaxOPTModel",local:"transformers.FlaxOPTModel",headingTag:"h2"}}),s=new ye({props:{name:"class transformers.FlaxOPTModel",anchor:"transformers.FlaxOPTModel",parameters:[{name:"config",val:": OPTConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/opt/modeling_flax_opt.py#L690"}}),f=new ye({props:{name:"__call__",anchor:"transformers.FlaxOPTModel.__call__",parameters:[{name:"input_ids",val:": Array"},{name:"attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"deterministic",val:": bool = True"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/opt/modeling_flax_opt.py#L583",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig"
>OPTConfig</a>) and inputs.</p>
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
`}}),z=new et({props:{anchor:"transformers.FlaxOPTModel.__call__.example",$$slots:{default:[Vt]},$$scope:{ctx:F}}}),N=new ze({props:{title:"FlaxOPTForCausalLM",local:"transformers.FlaxOPTForCausalLM",headingTag:"h2"}}),W=new ye({props:{name:"class transformers.FlaxOPTForCausalLM",anchor:"transformers.FlaxOPTForCausalLM",parameters:[{name:"config",val:": OPTConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxOPTForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig">OPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxOPTForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/opt/modeling_flax_opt.py#L756"}}),q=new ye({props:{name:"__call__",anchor:"transformers.FlaxOPTForCausalLM.__call__",parameters:[{name:"input_ids",val:": Array"},{name:"attention_mask",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"deterministic",val:": bool = True"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/opt/modeling_flax_opt.py#L583",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutput"
>transformers.modeling_flax_outputs.FlaxBaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/opt#transformers.OPTConfig"
>OPTConfig</a>) and inputs.</p>
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
`}}),U=new et({props:{anchor:"transformers.FlaxOPTForCausalLM.__call__.example",$$slots:{default:[Rt]},$$scope:{ctx:F}}}),{c(){b(e.$$.fragment),h=l(),o=c("div"),b(s.$$.fragment),m=l(),t=c("div"),b(f.$$.fragment),D=l(),b(z.$$.fragment),G=l(),b(N.$$.fragment),P=l(),j=c("div"),b(W.$$.fragment),_=l(),O=c("p"),O.textContent=me,E=l(),_e=c("p"),_e.innerHTML=Q,le=l(),V=c("p"),V.innerHTML=Te,H=l(),K=c("p"),K.textContent=L,B=l(),X=c("ul"),X.innerHTML=re,he=l(),ee=c("div"),b(q.$$.fragment),Me=l(),b(U.$$.fragment),this.h()},l(x){y(e.$$.fragment,x),h=i(x),o=p(x,"DIV",{class:!0});var Z=pe(o);y(s.$$.fragment,Z),m=i(Z),t=p(Z,"DIV",{class:!0});var S=pe(t);y(f.$$.fragment,S),D=i(S),y(z.$$.fragment,S),S.forEach(a),Z.forEach(a),G=i(x),y(N.$$.fragment,x),P=i(x),j=p(x,"DIV",{class:!0});var I=pe(j);y(W.$$.fragment,I),_=i(I),O=p(I,"P",{"data-svelte-h":!0}),T(O)!=="svelte-lbc411"&&(O.textContent=me),E=i(I),_e=p(I,"P",{"data-svelte-h":!0}),T(_e)!=="svelte-18ki9f4"&&(_e.innerHTML=Q),le=i(I),V=p(I,"P",{"data-svelte-h":!0}),T(V)!=="svelte-idybz1"&&(V.innerHTML=Te),H=i(I),K=p(I,"P",{"data-svelte-h":!0}),T(K)!=="svelte-1pplc4a"&&(K.textContent=L),B=i(I),X=p(I,"UL",{"data-svelte-h":!0}),T(X)!=="svelte-1w7z84m"&&(X.innerHTML=re),he=i(I),ee=p(I,"DIV",{class:!0});var A=pe(ee);y(q.$$.fragment,A),Me=i(A),y(U.$$.fragment,A),A.forEach(a),I.forEach(a),this.h()},h(){ue(t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ue(o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ue(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ue(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(x,Z){M(e,x,Z),r(x,h,Z),r(x,o,Z),M(s,o,null),u(o,m),u(o,t),M(f,t,null),u(t,D),M(z,t,null),r(x,G,Z),M(N,x,Z),r(x,P,Z),r(x,j,Z),M(W,j,null),u(j,_),u(j,O),u(j,E),u(j,_e),u(j,le),u(j,V),u(j,H),u(j,K),u(j,B),u(j,X),u(j,he),u(j,ee),M(q,ee,null),u(ee,Me),M(U,ee,null),te=!0},p(x,Z){const S={};Z&2&&(S.$$scope={dirty:Z,ctx:x}),z.$set(S);const I={};Z&2&&(I.$$scope={dirty:Z,ctx:x}),U.$set(I)},i(x){te||(w(e.$$.fragment,x),w(s.$$.fragment,x),w(f.$$.fragment,x),w(z.$$.fragment,x),w(N.$$.fragment,x),w(W.$$.fragment,x),w(q.$$.fragment,x),w(U.$$.fragment,x),te=!0)},o(x){v(e.$$.fragment,x),v(s.$$.fragment,x),v(f.$$.fragment,x),v(z.$$.fragment,x),v(N.$$.fragment,x),v(W.$$.fragment,x),v(q.$$.fragment,x),v(U.$$.fragment,x),te=!1},d(x){x&&(a(h),a(o),a(G),a(P),a(j)),k(e,x),k(s),k(f),k(z),k(N,x),k(W),k(q),k(U)}}}function St(F){let e,h;return e=new _t({props:{$$slots:{default:[Qt]},$$scope:{ctx:F}}}),{c(){b(e.$$.fragment)},l(o){y(e.$$.fragment,o)},m(o,s){M(e,o,s),h=!0},p(o,s){const m={};s&2&&(m.$$scope={dirty:s,ctx:o}),e.$set(m)},i(o){h||(w(e.$$.fragment,o),h=!0)},o(o){v(e.$$.fragment,o),h=!1},d(o){k(e,o)}}}function Et(F){let e,h,o,s,m,t,f,D,z,G=`The OPT model was proposed in <a href="https://arxiv.org/pdf/2205.01068" rel="nofollow">Open Pre-trained Transformer Language Models</a> by Meta AI.
OPT is a series of open-sourced large causal language models which perform similar in performance to GPT3.`,N,P,j="The abstract from the paper is the following:",W,_,O="<em>Large language models, which are often trained for hundreds of thousands of compute days, have shown remarkable capabilities for zero- and few-shot learning. Given their computational cost, these models are difficult to replicate without significant capital. For the few that are available through APIs, no access is granted to the full model weights, making them difficult to study. We present Open Pre-trained Transformers (OPT), a suite of decoder-only pre-trained transformers ranging from 125M to 175B parameters, which we aim to fully and responsibly share with interested researchers. We show that OPT-175B is comparable to GPT-3, while requiring only 1/7th the carbon footprint to develop. We are also releasing our logbook detailing the infrastructure challenges we faced, along with code for experimenting with all of the released models.</em>",me,E,_e=`This model was contributed by <a href="https://huggingface.co/ArthurZ" rel="nofollow">Arthur Zucker</a>, <a href="https://huggingface.co/ybelkada" rel="nofollow">Younes Belkada</a>, and <a href="https://huggingface.co/patrickvonplaten" rel="nofollow">Patrick Von Platen</a>.
The original code can be found <a href="https://github.com/facebookresearch/metaseq" rel="nofollow">here</a>.`,Q,le,V="Tips:",Te,H,K="<li>OPT has the same architecture as <code>BartDecoder</code>.</li> <li>Contrary to GPT2, OPT adds the EOS token <code>&lt;/s&gt;</code> to the beginning of every prompt.</li>",L,B,X,re,he=`A list of official Hugging Face and community (indicated by 🌎) resources to help you get started with OPT. If you’re
interested in submitting a resource to be included here, please feel free to open a Pull Request and we will review it.
The resource should ideally demonstrate something new instead of duplicating an existing resource.`,ee,q,Me,U,te='<li>A notebook on <a href="https://colab.research.google.com/drive/1jCkpikz0J2o20FBQmYmAGdiKmJGOMo-o?usp=sharing" rel="nofollow">fine-tuning OPT with PEFT, bitsandbytes, and Transformers</a>. 🌎</li> <li>A blog post on <a href="https://huggingface.co/blog/introducing-csearch#62-example-two---opt" rel="nofollow">decoding strategies with OPT</a>.</li> <li><a href="https://huggingface.co/course/en/chapter7/6?fw=pt#training-a-causal-language-model-from-scratch" rel="nofollow">Causal language modeling</a> chapter of the 🤗 Hugging Face Course.</li> <li><a href="/docs/transformers/main/en/model_doc/opt#transformers.OPTForCausalLM">OPTForCausalLM</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/pytorch/language-modeling#gpt-2gpt-and-causal-language-modeling" rel="nofollow">causal language modeling example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/language_modeling.ipynb" rel="nofollow">notebook</a>.</li> <li><a href="/docs/transformers/main/en/model_doc/opt#transformers.TFOPTForCausalLM">TFOPTForCausalLM</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/tensorflow/language-modeling#run_clmpy" rel="nofollow">causal language modeling example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/language_modeling-tf.ipynb" rel="nofollow">notebook</a>.</li> <li><a href="/docs/transformers/main/en/model_doc/opt#transformers.FlaxOPTForCausalLM">FlaxOPTForCausalLM</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/flax/language-modeling#causal-language-modeling" rel="nofollow">causal language modeling example script</a>.</li>',x,Z,S,I,A='<li><a href="sequence_classification.md">Text classification task guide</a></li> <li><a href="/docs/transformers/main/en/model_doc/opt#transformers.OPTForSequenceClassification">OPTForSequenceClassification</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/pytorch/text-classification" rel="nofollow">example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/text_classification.ipynb" rel="nofollow">notebook</a>.</li>',je,Ce,ie,Fe,$=`<li><a href="/docs/transformers/main/en/model_doc/opt#transformers.OPTForQuestionAnswering">OPTForQuestionAnswering</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/pytorch/question-answering" rel="nofollow">question answering example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/question_answering.ipynb" rel="nofollow">notebook</a>.</li> <li><a href="https://huggingface.co/course/chapter7/7?fw=pt" rel="nofollow">Question answering</a> chapter
of the 🤗 Hugging Face Course.</li>`,J,ne,oe="⚡️ Inference",de,Ue,tt='<li>A blog post on <a href="https://huggingface.co/blog/accelerate-large-models" rel="nofollow">How 🤗 Accelerate runs very large models thanks to PyTorch</a> with OPT.</li>',ce,Pe,ot,Je,ht="First, make sure to install the latest version of Flash Attention 2 to include the sliding window attention feature.",st,we,at,ve,it="Make also sure that you have a hardware that is compatible with Flash-Attention 2. Read more about it in the official documentation of flash-attn repository. Make also sure to load your model in half-precision (e.g. `torch.float16“)",Oe,Ze,Xe="To load and run a model using Flash Attention 2, refer to the snippet below:",nt,Y,We,Ge,He,Ae,dt="Below is an expected speedup diagram that compares pure inference time between the native implementation in transformers using <code>facebook/opt-2.7b</code> checkpoint and the Flash Attention 2 version of the model using two different sequence lengths.",Le,Be,ct='<img src="https://user-images.githubusercontent.com/49240599/281101546-d2fca6d2-ee44-48f3-9534-ba8d5bee4531.png"/>',Ne,Ye,pt="Below is an expected speedup diagram that compares pure inference time between the native implementation in transformers using <code>facebook/opt-350m</code> checkpoint and the Flash Attention 2 version of the model using two different sequence lengths.",be,ke,ut='<img src="https://user-images.githubusercontent.com/49240599/281101682-d1144e90-0dbc-46f4-8fc8-c6206cb793c9.png"/>',Ve,De,rt,se,Re,Ie,Qe,d=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/opt#transformers.OPTModel">OPTModel</a>. It is used to instantiate a OPT model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the OPT
<a href="https://huggingface.co/facebook/opt-350m" rel="nofollow">facebook/opt-350m</a> architecture.`,C,fe,Ke=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,Se,R,ge,ae,$e,lt,ft;return m=new ze({props:{title:"OPT",local:"opt",headingTag:"h1"}}),f=new ze({props:{title:"Overview",local:"overview",headingTag:"h2"}}),B=new ze({props:{title:"Resources",local:"resources",headingTag:"h2"}}),q=new gt({props:{pipeline:"text-generation"}}),Z=new gt({props:{pipeline:"text-classification"}}),Ce=new gt({props:{pipeline:"question-answering"}}),Pe=new ze({props:{title:"Combining OPT and Flash Attention 2",local:"combining-opt-and-flash-attention-2",headingTag:"h2"}}),we=new qe({props:{code:"cGlwJTIwaW5zdGFsbCUyMC1VJTIwZmxhc2gtYXR0biUyMC0tbm8tYnVpbGQtaXNvbGF0aW9u",highlighted:"pip install -U flash-attn --no-build-isolation",wrap:!1}}),Y=new qe({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwT1BURm9yQ2F1c2FsTE0lMkMlMjBHUFQyVG9rZW5pemVyJTBBZGV2aWNlJTIwJTNEJTIwJTIyY3VkYSUyMiUyMCUyMyUyMHRoZSUyMGRldmljZSUyMHRvJTIwbG9hZCUyMHRoZSUyMG1vZGVsJTIwb250byUwQSUwQW1vZGVsJTIwJTNEJTIwT1BURm9yQ2F1c2FsTE0uZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGb3B0LTM1MG0lMjIlMkMlMjB0b3JjaF9kdHlwZSUzRHRvcmNoLmZsb2F0MTYlMkMlMjBhdHRuX2ltcGxlbWVudGF0aW9uJTNEJTIyZmxhc2hfYXR0ZW50aW9uXzIlMjIpJTBBdG9rZW5pemVyJTIwJTNEJTIwR1BUMlRva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZvcHQtMzUwbSUyMiklMEElMEFwcm9tcHQlMjAlM0QlMjAoJTIyQSUyMGNoYXQlMjBiZXR3ZWVuJTIwYSUyMGN1cmlvdXMlMjBodW1hbiUyMGFuZCUyMHRoZSUyMFN0YXR1ZSUyMG9mJTIwTGliZXJ0eS4lNUNuJTVDbkh1bWFuJTNBJTIwV2hhdCUyMGlzJTIweW91ciUyMG5hbWUlM0YlNUNuU3RhdHVlJTNBJTIwSSUyMGFtJTIwdGhlJTIwJTIyJTBBJTBBbW9kZWxfaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCU1QnByb21wdCU1RCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpLnRvKGRldmljZSklMEFtb2RlbC50byhkZXZpY2UpJTBBJTBBZ2VuZXJhdGVkX2lkcyUyMCUzRCUyMG1vZGVsLmdlbmVyYXRlKCoqbW9kZWxfaW5wdXRzJTJDJTIwbWF4X25ld190b2tlbnMlM0QzMCUyQyUyMGRvX3NhbXBsZSUzREZhbHNlKSUwQXRva2VuaXplci5iYXRjaF9kZWNvZGUoZ2VuZXJhdGVkX2lkcyklNUIwJTVE",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OPTForCausalLM, GPT2Tokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span>device = <span class="hljs-string">&quot;cuda&quot;</span> <span class="hljs-comment"># the device to load the model onto</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = OPTForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>, torch_dtype=torch.float16, attn_implementation=<span class="hljs-string">&quot;flash_attention_2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/opt-350m&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = (<span class="hljs-string">&quot;A chat between a curious human and the Statue of Liberty.\\n\\nHuman: What is your name?\\nStatue: I am the &quot;</span>
              <span class="hljs-string">&quot;Statue of Liberty.\\nHuman: Where do you live?\\nStatue: New York City.\\nHuman: How long have you lived &quot;</span>
              <span class="hljs-string">&quot;there?&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer([prompt], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).to(device)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.to(device)

<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(**model_inputs, max_new_tokens=<span class="hljs-number">30</span>, do_sample=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generated_ids)[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;&lt;/s&gt;A chat between a curious human and the Statue of Liberty.\\n\\nHuman: What is your name?\\nStatue: I am the Statue of Liberty.\\nHuman: Where do you live?\\nStatue: New York City.\\nHuman: How long have you lived there?\\nStatue: I have lived here for about a year.\\nHuman: What is your favorite place to eat?\\nStatue: I love&#x27;</span>`,wrap:!1}}),Ge=new ze({props:{title:"Expected speedups",local:"expected-speedups",headingTag:"h3"}}),De=new ze({props:{title:"OPTConfig",local:"transformers.OPTConfig",headingTag:"h2"}}),Re=new ye({props:{name:"class transformers.OPTConfig",anchor:"transformers.OPTConfig",parameters:[{name:"vocab_size",val:" = 50272"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"ffn_dim",val:" = 3072"},{name:"max_position_embeddings",val:" = 2048"},{name:"do_layer_norm_before",val:" = True"},{name:"_remove_final_layer_norm",val:" = False"},{name:"word_embed_proj_dim",val:" = None"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"num_attention_heads",val:" = 12"},{name:"activation_function",val:" = 'relu'"},{name:"layerdrop",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 2"},{name:"eos_token_id",val:" = 2"},{name:"enable_bias",val:" = True"},{name:"layer_norm_elementwise_affine",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.OPTConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50272) &#x2014;
Vocabulary size of the OPT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/opt#transformers.OPTModel">OPTModel</a>`,name:"vocab_size"},{anchor:"transformers.OPTConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.OPTConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"num_hidden_layers"},{anchor:"transformers.OPTConfig.ffn_dim",description:`<strong>ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"ffn_dim"},{anchor:"transformers.OPTConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"num_attention_heads"},{anchor:"transformers.OPTConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;relu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.OPTConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.OPTConfig.do_layer_norm_before",description:`<strong>do_layer_norm_before</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to perform layer normalization before the attention block.`,name:"do_layer_norm_before"},{anchor:"transformers.OPTConfig.word_embed_proj_dim",description:`<strong>word_embed_proj_dim</strong> (<code>int</code>, <em>optional</em>) &#x2014;
<code>word_embed_proj_dim</code> can be set to down-project word embeddings, <em>e.g.</em> <code>opt-350m</code>. Defaults to
<code>hidden_size</code>.`,name:"word_embed_proj_dim"},{anchor:"transformers.OPTConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.OPTConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.OPTConfig.layerdrop",description:`<strong>layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more
details.`,name:"layerdrop"},{anchor:"transformers.OPTConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.OPTConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.OPTConfig.enable_bias",description:`<strong>enable_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not if the linear layers in the attention blocks should use the bias term.`,name:"enable_bias"},{anchor:"transformers.OPTConfig.layer_norm_elementwise_affine",description:`<strong>layer_norm_elementwise_affine</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not if the layer norms should have learnable parameters.`,name:"layer_norm_elementwise_affine"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/opt/configuration_opt.py#L32"}}),R=new et({props:{anchor:"transformers.OPTConfig.example",$$slots:{default:[xt]},$$scope:{ctx:F}}}),ae=new $t({props:{pytorch:!0,tensorflow:!0,jax:!0,$$slots:{jax:[St],tensorflow:[Nt],pytorch:[Wt]},$$scope:{ctx:F}}}),{c(){e=c("meta"),h=l(),o=c("p"),s=l(),b(m.$$.fragment),t=l(),b(f.$$.fragment),D=l(),z=c("p"),z.innerHTML=G,N=l(),P=c("p"),P.textContent=j,W=l(),_=c("p"),_.innerHTML=O,me=l(),E=c("p"),E.innerHTML=_e,Q=l(),le=c("p"),le.textContent=V,Te=l(),H=c("ul"),H.innerHTML=K,L=l(),b(B.$$.fragment),X=l(),re=c("p"),re.textContent=he,ee=l(),b(q.$$.fragment),Me=l(),U=c("ul"),U.innerHTML=te,x=l(),b(Z.$$.fragment),S=l(),I=c("ul"),I.innerHTML=A,je=l(),b(Ce.$$.fragment),ie=l(),Fe=c("ul"),Fe.innerHTML=$,J=l(),ne=c("p"),ne.textContent=oe,de=l(),Ue=c("ul"),Ue.innerHTML=tt,ce=l(),b(Pe.$$.fragment),ot=l(),Je=c("p"),Je.textContent=ht,st=l(),b(we.$$.fragment),at=l(),ve=c("p"),ve.textContent=it,Oe=l(),Ze=c("p"),Ze.textContent=Xe,nt=l(),b(Y.$$.fragment),We=l(),b(Ge.$$.fragment),He=l(),Ae=c("p"),Ae.innerHTML=dt,Le=l(),Be=c("div"),Be.innerHTML=ct,Ne=l(),Ye=c("p"),Ye.innerHTML=pt,be=l(),ke=c("div"),ke.innerHTML=ut,Ve=l(),b(De.$$.fragment),rt=l(),se=c("div"),b(Re.$$.fragment),Ie=l(),Qe=c("p"),Qe.innerHTML=d,C=l(),fe=c("p"),fe.innerHTML=Ke,Se=l(),b(R.$$.fragment),ge=l(),b(ae.$$.fragment),$e=l(),lt=c("p"),this.h()},l(n){const g=kt("svelte-u9bgzb",document.head);e=p(g,"META",{name:!0,content:!0}),g.forEach(a),h=i(n),o=p(n,"P",{}),pe(o).forEach(a),s=i(n),y(m.$$.fragment,n),t=i(n),y(f.$$.fragment,n),D=i(n),z=p(n,"P",{"data-svelte-h":!0}),T(z)!=="svelte-uv4l0c"&&(z.innerHTML=G),N=i(n),P=p(n,"P",{"data-svelte-h":!0}),T(P)!=="svelte-vfdo9a"&&(P.textContent=j),W=i(n),_=p(n,"P",{"data-svelte-h":!0}),T(_)!=="svelte-lygqbw"&&(_.innerHTML=O),me=i(n),E=p(n,"P",{"data-svelte-h":!0}),T(E)!=="svelte-1muftuv"&&(E.innerHTML=_e),Q=i(n),le=p(n,"P",{"data-svelte-h":!0}),T(le)!=="svelte-axv494"&&(le.textContent=V),Te=i(n),H=p(n,"UL",{"data-svelte-h":!0}),T(H)!=="svelte-1bmdbn0"&&(H.innerHTML=K),L=i(n),y(B.$$.fragment,n),X=i(n),re=p(n,"P",{"data-svelte-h":!0}),T(re)!=="svelte-1uxlnve"&&(re.textContent=he),ee=i(n),y(q.$$.fragment,n),Me=i(n),U=p(n,"UL",{"data-svelte-h":!0}),T(U)!=="svelte-32kdey"&&(U.innerHTML=te),x=i(n),y(Z.$$.fragment,n),S=i(n),I=p(n,"UL",{"data-svelte-h":!0}),T(I)!=="svelte-5gprd3"&&(I.innerHTML=A),je=i(n),y(Ce.$$.fragment,n),ie=i(n),Fe=p(n,"UL",{"data-svelte-h":!0}),T(Fe)!=="svelte-1j1azns"&&(Fe.innerHTML=$),J=i(n),ne=p(n,"P",{"data-svelte-h":!0}),T(ne)!=="svelte-1wntqpp"&&(ne.textContent=oe),de=i(n),Ue=p(n,"UL",{"data-svelte-h":!0}),T(Ue)!=="svelte-jbh4b4"&&(Ue.innerHTML=tt),ce=i(n),y(Pe.$$.fragment,n),ot=i(n),Je=p(n,"P",{"data-svelte-h":!0}),T(Je)!=="svelte-o3pzzu"&&(Je.textContent=ht),st=i(n),y(we.$$.fragment,n),at=i(n),ve=p(n,"P",{"data-svelte-h":!0}),T(ve)!=="svelte-enej3y"&&(ve.textContent=it),Oe=i(n),Ze=p(n,"P",{"data-svelte-h":!0}),T(Ze)!=="svelte-14hchid"&&(Ze.textContent=Xe),nt=i(n),y(Y.$$.fragment,n),We=i(n),y(Ge.$$.fragment,n),He=i(n),Ae=p(n,"P",{"data-svelte-h":!0}),T(Ae)!=="svelte-1qq0atk"&&(Ae.innerHTML=dt),Le=i(n),Be=p(n,"DIV",{style:!0,"data-svelte-h":!0}),T(Be)!=="svelte-zu70eq"&&(Be.innerHTML=ct),Ne=i(n),Ye=p(n,"P",{"data-svelte-h":!0}),T(Ye)!=="svelte-kfzpee"&&(Ye.innerHTML=pt),be=i(n),ke=p(n,"DIV",{style:!0,"data-svelte-h":!0}),T(ke)!=="svelte-z4xso5"&&(ke.innerHTML=ut),Ve=i(n),y(De.$$.fragment,n),rt=i(n),se=p(n,"DIV",{class:!0});var Ee=pe(se);y(Re.$$.fragment,Ee),Ie=i(Ee),Qe=p(Ee,"P",{"data-svelte-h":!0}),T(Qe)!=="svelte-hz3o8c"&&(Qe.innerHTML=d),C=i(Ee),fe=p(Ee,"P",{"data-svelte-h":!0}),T(fe)!=="svelte-o55m63"&&(fe.innerHTML=Ke),Se=i(Ee),y(R.$$.fragment,Ee),Ee.forEach(a),ge=i(n),y(ae.$$.fragment,n),$e=i(n),lt=p(n,"P",{}),pe(lt).forEach(a),this.h()},h(){ue(e,"name","hf:doc:metadata"),ue(e,"content",Xt),bt(Be,"text-align","center"),bt(ke,"text-align","center"),ue(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(n,g){u(document.head,e),r(n,h,g),r(n,o,g),r(n,s,g),M(m,n,g),r(n,t,g),M(f,n,g),r(n,D,g),r(n,z,g),r(n,N,g),r(n,P,g),r(n,W,g),r(n,_,g),r(n,me,g),r(n,E,g),r(n,Q,g),r(n,le,g),r(n,Te,g),r(n,H,g),r(n,L,g),M(B,n,g),r(n,X,g),r(n,re,g),r(n,ee,g),M(q,n,g),r(n,Me,g),r(n,U,g),r(n,x,g),M(Z,n,g),r(n,S,g),r(n,I,g),r(n,je,g),M(Ce,n,g),r(n,ie,g),r(n,Fe,g),r(n,J,g),r(n,ne,g),r(n,de,g),r(n,Ue,g),r(n,ce,g),M(Pe,n,g),r(n,ot,g),r(n,Je,g),r(n,st,g),M(we,n,g),r(n,at,g),r(n,ve,g),r(n,Oe,g),r(n,Ze,g),r(n,nt,g),M(Y,n,g),r(n,We,g),M(Ge,n,g),r(n,He,g),r(n,Ae,g),r(n,Le,g),r(n,Be,g),r(n,Ne,g),r(n,Ye,g),r(n,be,g),r(n,ke,g),r(n,Ve,g),M(De,n,g),r(n,rt,g),r(n,se,g),M(Re,se,null),u(se,Ie),u(se,Qe),u(se,C),u(se,fe),u(se,Se),M(R,se,null),r(n,ge,g),M(ae,n,g),r(n,$e,g),r(n,lt,g),ft=!0},p(n,[g]){const Ee={};g&2&&(Ee.$$scope={dirty:g,ctx:n}),R.$set(Ee);const Tt={};g&2&&(Tt.$$scope={dirty:g,ctx:n}),ae.$set(Tt)},i(n){ft||(w(m.$$.fragment,n),w(f.$$.fragment,n),w(B.$$.fragment,n),w(q.$$.fragment,n),w(Z.$$.fragment,n),w(Ce.$$.fragment,n),w(Pe.$$.fragment,n),w(we.$$.fragment,n),w(Y.$$.fragment,n),w(Ge.$$.fragment,n),w(De.$$.fragment,n),w(Re.$$.fragment,n),w(R.$$.fragment,n),w(ae.$$.fragment,n),ft=!0)},o(n){v(m.$$.fragment,n),v(f.$$.fragment,n),v(B.$$.fragment,n),v(q.$$.fragment,n),v(Z.$$.fragment,n),v(Ce.$$.fragment,n),v(Pe.$$.fragment,n),v(we.$$.fragment,n),v(Y.$$.fragment,n),v(Ge.$$.fragment,n),v(De.$$.fragment,n),v(Re.$$.fragment,n),v(R.$$.fragment,n),v(ae.$$.fragment,n),ft=!1},d(n){n&&(a(h),a(o),a(s),a(t),a(D),a(z),a(N),a(P),a(W),a(_),a(me),a(E),a(Q),a(le),a(Te),a(H),a(L),a(X),a(re),a(ee),a(Me),a(U),a(x),a(S),a(I),a(je),a(ie),a(Fe),a(J),a(ne),a(de),a(Ue),a(ce),a(ot),a(Je),a(st),a(at),a(ve),a(Oe),a(Ze),a(nt),a(We),a(He),a(Ae),a(Le),a(Be),a(Ne),a(Ye),a(be),a(ke),a(Ve),a(rt),a(se),a(ge),a($e),a(lt)),a(e),k(m,n),k(f,n),k(B,n),k(q,n),k(Z,n),k(Ce,n),k(Pe,n),k(we,n),k(Y,n),k(Ge,n),k(De,n),k(Re),k(R),k(ae,n)}}}const Xt='{"title":"OPT","local":"opt","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"Combining OPT and Flash Attention 2","local":"combining-opt-and-flash-attention-2","sections":[{"title":"Expected speedups","local":"expected-speedups","sections":[],"depth":3}],"depth":2},{"title":"OPTConfig","local":"transformers.OPTConfig","sections":[],"depth":2},{"title":"OPTModel","local":"transformers.OPTModel","sections":[],"depth":2},{"title":"OPTForCausalLM","local":"transformers.OPTForCausalLM","sections":[],"depth":2},{"title":"OPTForSequenceClassification","local":"transformers.OPTForSequenceClassification","sections":[],"depth":2},{"title":"OPTForQuestionAnswering","local":"transformers.OPTForQuestionAnswering","sections":[],"depth":2},{"title":"TFOPTModel","local":"transformers.TFOPTModel","sections":[],"depth":2},{"title":"TFOPTForCausalLM","local":"transformers.TFOPTForCausalLM","sections":[],"depth":2},{"title":"FlaxOPTModel","local":"transformers.FlaxOPTModel","sections":[],"depth":2},{"title":"FlaxOPTForCausalLM","local":"transformers.FlaxOPTForCausalLM","sections":[],"depth":2}],"depth":1}';function At(F){return Mt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class rn extends wt{constructor(e){super(),vt(this,e,At,Et,yt,{})}}export{rn as component};
