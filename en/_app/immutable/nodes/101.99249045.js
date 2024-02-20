import{s as ht,o as ft,n as ee}from"../chunks/scheduler.9bc65507.js";import{S as gt,i as _t,g as m,s as r,r as b,A as Tt,h as u,f as a,c as l,j as Te,u as y,x as T,k as pe,y as d,a as c,v as M,d as w,t as k,w as v}from"../chunks/index.707bf1b6.js";import{T as st}from"../chunks/Tip.c2ecdbf4.js";import{D as Je}from"../chunks/Docstring.17db21ae.js";import{C as et}from"../chunks/CodeBlock.54a9f38d.js";import{F as bt,M as ut}from"../chunks/Markdown.fef84341.js";import{E as Ke}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as Ee}from"../chunks/Heading.342b1fa6.js";function yt(C){let e,p="Examples:",t,o,g;return o=new et({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMENUUkxDb25maWclMkMlMjBDVFJMTW9kZWwlMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwQ1RSTCUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwQ1RSTENvbmZpZygpJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyMG1vZGVsJTIwKHdpdGglMjByYW5kb20lMjB3ZWlnaHRzKSUyMGZyb20lMjB0aGUlMjBjb25maWd1cmF0aW9uJTBBbW9kZWwlMjAlM0QlMjBDVFJMTW9kZWwoY29uZmlndXJhdGlvbiklMEElMEElMjMlMjBBY2Nlc3NpbmclMjB0aGUlMjBtb2RlbCUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwbW9kZWwuY29uZmln",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CTRLConfig, CTRLModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a CTRL configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = CTRLConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){e=m("p"),e.textContent=p,t=r(),b(o.$$.fragment)},l(n){e=u(n,"P",{"data-svelte-h":!0}),T(e)!=="svelte-kvfsh7"&&(e.textContent=p),t=l(n),y(o.$$.fragment,n)},m(n,_){c(n,e,_),c(n,t,_),M(o,n,_),g=!0},p:ee,i(n){g||(w(o.$$.fragment,n),g=!0)},o(n){k(o.$$.fragment,n),g=!1},d(n){n&&(a(e),a(t)),v(o,n)}}}function Mt(C){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=m("p"),e.innerHTML=p},l(t){e=u(t,"P",{"data-svelte-h":!0}),T(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(t,o){c(t,e,o)},p:ee,d(t){t&&a(e)}}}function wt(C){let e,p="Example:",t,o,g;return o=new et({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBDVFJMTW9kZWwlMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMlNhbGVzZm9yY2UlMkZjdHJsJTIyKSUwQW1vZGVsJTIwJTNEJTIwQ1RSTE1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJTYWxlc2ZvcmNlJTJGY3RybCUyMiklMEElMEElMjMlMjBDVFJMJTIwd2FzJTIwdHJhaW5lZCUyMHdpdGglMjBjb250cm9sJTIwY29kZXMlMjBhcyUyMHRoZSUyMGZpcnN0JTIwdG9rZW4lMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIyT3BpbmlvbiUyME15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEFhc3NlcnQlMjBpbnB1dHMlNUIlMjJpbnB1dF9pZHMlMjIlNUQlNUIwJTJDJTIwMCU1RC5pdGVtKCklMjBpbiUyMHRva2VuaXplci5jb250cm9sX2NvZGVzLnZhbHVlcygpJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQWxhc3RfaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGUlMEFsaXN0KGxhc3RfaGlkZGVuX3N0YXRlcy5zaGFwZSk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, CTRLModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;Salesforce/ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLModel.from_pretrained(<span class="hljs-string">&quot;Salesforce/ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># CTRL was trained with control codes as the first token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Opinion My dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> inputs[<span class="hljs-string">&quot;input_ids&quot;</span>][<span class="hljs-number">0</span>, <span class="hljs-number">0</span>].item() <span class="hljs-keyword">in</span> tokenizer.control_codes.values()

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">5</span>, <span class="hljs-number">1280</span>]`,wrap:!1}}),{c(){e=m("p"),e.textContent=p,t=r(),b(o.$$.fragment)},l(n){e=u(n,"P",{"data-svelte-h":!0}),T(e)!=="svelte-11lpom8"&&(e.textContent=p),t=l(n),y(o.$$.fragment,n)},m(n,_){c(n,e,_),c(n,t,_),M(o,n,_),g=!0},p:ee,i(n){g||(w(o.$$.fragment,n),g=!0)},o(n){k(o.$$.fragment,n),g=!1},d(n){n&&(a(e),a(t)),v(o,n)}}}function kt(C){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=m("p"),e.innerHTML=p},l(t){e=u(t,"P",{"data-svelte-h":!0}),T(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(t,o){c(t,e,o)},p:ee,d(t){t&&a(e)}}}function vt(C){let e,p="Example:",t,o,g;return o=new et({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMENUUkxMTUhlYWRNb2RlbCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMlNhbGVzZm9yY2UlMkZjdHJsJTIyKSUwQW1vZGVsJTIwJTNEJTIwQ1RSTExNSGVhZE1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJTYWxlc2ZvcmNlJTJGY3RybCUyMiklMEElMEElMjMlMjBDVFJMJTIwd2FzJTIwdHJhaW5lZCUyMHdpdGglMjBjb250cm9sJTIwY29kZXMlMjBhcyUyMHRoZSUyMGZpcnN0JTIwdG9rZW4lMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIyV2lraXBlZGlhJTIwVGhlJTIwbGxhbWElMjBpcyUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBYXNzZXJ0JTIwaW5wdXRzJTVCJTIyaW5wdXRfaWRzJTIyJTVEJTVCMCUyQyUyMDAlNUQuaXRlbSgpJTIwaW4lMjB0b2tlbml6ZXIuY29udHJvbF9jb2Rlcy52YWx1ZXMoKSUwQSUwQXNlcXVlbmNlX2lkcyUyMCUzRCUyMG1vZGVsLmdlbmVyYXRlKGlucHV0cyU1QiUyMmlucHV0X2lkcyUyMiU1RCklMEFzZXF1ZW5jZXMlMjAlM0QlMjB0b2tlbml6ZXIuYmF0Y2hfZGVjb2RlKHNlcXVlbmNlX2lkcyklMEFzZXF1ZW5jZXMlMEElMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMlMkMlMjBsYWJlbHMlM0RpbnB1dHMlNUIlMjJpbnB1dF9pZHMlMjIlNUQpJTBBcm91bmQob3V0cHV0cy5sb3NzLml0ZW0oKSUyQyUyMDIpJTBBJTBBbGlzdChvdXRwdXRzLmxvZ2l0cy5zaGFwZSk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, CTRLLMHeadModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;Salesforce/ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLLMHeadModel.from_pretrained(<span class="hljs-string">&quot;Salesforce/ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># CTRL was trained with control codes as the first token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Wikipedia The llama is&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> inputs[<span class="hljs-string">&quot;input_ids&quot;</span>][<span class="hljs-number">0</span>, <span class="hljs-number">0</span>].item() <span class="hljs-keyword">in</span> tokenizer.control_codes.values()

<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_ids = model.generate(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>sequences = tokenizer.batch_decode(sequence_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>sequences
[<span class="hljs-string">&#x27;Wikipedia The llama is a member of the family Bovidae. It is native to the Andes of Peru,&#x27;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">9.21</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(outputs.logits.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">5</span>, <span class="hljs-number">246534</span>]`,wrap:!1}}),{c(){e=m("p"),e.textContent=p,t=r(),b(o.$$.fragment)},l(n){e=u(n,"P",{"data-svelte-h":!0}),T(e)!=="svelte-11lpom8"&&(e.textContent=p),t=l(n),y(o.$$.fragment,n)},m(n,_){c(n,e,_),c(n,t,_),M(o,n,_),g=!0},p:ee,i(n){g||(w(o.$$.fragment,n),g=!0)},o(n){k(o.$$.fragment,n),g=!1},d(n){n&&(a(e),a(t)),v(o,n)}}}function $t(C){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=m("p"),e.innerHTML=p},l(t){e=u(t,"P",{"data-svelte-h":!0}),T(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(t,o){c(t,e,o)},p:ee,d(t){t&&a(e)}}}function Ct(C){let e,p="Example of single-label classification:",t,o,g;return o=new et({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMENUUkxGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyU2FsZXNmb3JjZSUyRmN0cmwlMjIpJTBBbW9kZWwlMjAlM0QlMjBDVFJMRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyU2FsZXNmb3JjZSUyRmN0cmwlMjIpJTBBJTBBJTIzJTIwQ1RSTCUyMHdhcyUyMHRyYWluZWQlMjB3aXRoJTIwY29udHJvbCUyMGNvZGVzJTIwYXMlMjB0aGUlMjBmaXJzdCUyMHRva2VuJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMk9waW5pb24lMjBNeSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBYXNzZXJ0JTIwaW5wdXRzJTVCJTIyaW5wdXRfaWRzJTIyJTVEJTVCMCUyQyUyMDAlNUQuaXRlbSgpJTIwaW4lMjB0b2tlbml6ZXIuY29udHJvbF9jb2Rlcy52YWx1ZXMoKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX2NsYXNzX2lkJTIwJTNEJTIwbG9naXRzLmFyZ21heCgpLml0ZW0oKSUwQW1vZGVsLmNvbmZpZy5pZDJsYWJlbCU1QnByZWRpY3RlZF9jbGFzc19pZCU1RA==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, CTRLForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;Salesforce/ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;Salesforce/ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># CTRL was trained with control codes as the first token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Opinion My dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> inputs[<span class="hljs-string">&quot;input_ids&quot;</span>][<span class="hljs-number">0</span>, <span class="hljs-number">0</span>].item() <span class="hljs-keyword">in</span> tokenizer.control_codes.values()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`,wrap:!1}}),{c(){e=m("p"),e.textContent=p,t=r(),b(o.$$.fragment)},l(n){e=u(n,"P",{"data-svelte-h":!0}),T(e)!=="svelte-ykxpe4"&&(e.textContent=p),t=l(n),y(o.$$.fragment,n)},m(n,_){c(n,e,_),c(n,t,_),M(o,n,_),g=!0},p:ee,i(n){g||(w(o.$$.fragment,n),g=!0)},o(n){k(o.$$.fragment,n),g=!1},d(n){n&&(a(e),a(t)),v(o,n)}}}function Lt(C){let e,p;return e=new et({props:{code:"aW1wb3J0JTIwdG9yY2glMEElMEF0b3JjaC5tYW51YWxfc2VlZCg0MiklMEElMjMlMjBUbyUyMHRyYWluJTIwYSUyMG1vZGVsJTIwb24lMjAlNjBudW1fbGFiZWxzJTYwJTIwY2xhc3NlcyUyQyUyMHlvdSUyMGNhbiUyMHBhc3MlMjAlNjBudW1fbGFiZWxzJTNEbnVtX2xhYmVscyU2MCUyMHRvJTIwJTYwLmZyb21fcHJldHJhaW5lZCguLi4pJTYwJTBBbnVtX2xhYmVscyUyMCUzRCUyMGxlbihtb2RlbC5jb25maWcuaWQybGFiZWwpJTBBbW9kZWwlMjAlM0QlMjBDVFJMRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyU2FsZXNmb3JjZSUyRmN0cmwlMjIlMkMlMjBudW1fbGFiZWxzJTNEbnVtX2xhYmVscyklMEElMEFsYWJlbHMlMjAlM0QlMjB0b3JjaC50ZW5zb3IoMSklMEFsb3NzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMlMkMlMjBsYWJlbHMlM0RsYWJlbHMpLmxvc3MlMEFyb3VuZChsb3NzLml0ZW0oKSUyQyUyMDIp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">42</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;Salesforce/ctrl&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.35</span>`,wrap:!1}}),{c(){b(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,o){M(e,t,o),p=!0},p:ee,i(t){p||(w(e.$$.fragment,t),p=!0)},o(t){k(e.$$.fragment,t),p=!1},d(t){v(e,t)}}}function jt(C){let e,p="Example of multi-label classification:",t,o,g;return o=new et({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMENUUkxGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyU2FsZXNmb3JjZSUyRmN0cmwlMjIpJTBBbW9kZWwlMjAlM0QlMjBDVFJMRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTBBJTIwJTIwJTIwJTIwJTIyU2FsZXNmb3JjZSUyRmN0cmwlMjIlMkMlMjBwcm9ibGVtX3R5cGUlM0QlMjJtdWx0aV9sYWJlbF9jbGFzc2lmaWNhdGlvbiUyMiUwQSklMEElMEElMjMlMjBDVFJMJTIwd2FzJTIwdHJhaW5lZCUyMHdpdGglMjBjb250cm9sJTIwY29kZXMlMjBhcyUyMHRoZSUyMGZpcnN0JTIwdG9rZW4lMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIyT3BpbmlvbiUyME15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEFhc3NlcnQlMjBpbnB1dHMlNUIlMjJpbnB1dF9pZHMlMjIlNUQlNUIwJTJDJTIwMCU1RC5pdGVtKCklMjBpbiUyMHRva2VuaXplci5jb250cm9sX2NvZGVzLnZhbHVlcygpJTBBJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEFwcmVkaWN0ZWRfY2xhc3NfaWQlMjAlM0QlMjBsb2dpdHMuYXJnbWF4KCkuaXRlbSgpJTBBbW9kZWwuY29uZmlnLmlkMmxhYmVsJTVCcHJlZGljdGVkX2NsYXNzX2lkJTVE",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, CTRLForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;Salesforce/ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Salesforce/ctrl&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># CTRL was trained with control codes as the first token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Opinion My dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> inputs[<span class="hljs-string">&quot;input_ids&quot;</span>][<span class="hljs-number">0</span>, <span class="hljs-number">0</span>].item() <span class="hljs-keyword">in</span> tokenizer.control_codes.values()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`,wrap:!1}}),{c(){e=m("p"),e.textContent=p,t=r(),b(o.$$.fragment)},l(n){e=u(n,"P",{"data-svelte-h":!0}),T(e)!=="svelte-1l8e32d"&&(e.textContent=p),t=l(n),y(o.$$.fragment,n)},m(n,_){c(n,e,_),c(n,t,_),M(o,n,_),g=!0},p:ee,i(n){g||(w(o.$$.fragment,n),g=!0)},o(n){k(o.$$.fragment,n),g=!1},d(n){n&&(a(e),a(t)),v(o,n)}}}function Rt(C){let e,p;return e=new et({props:{code:"JTIzJTIwVG8lMjB0cmFpbiUyMGElMjBtb2RlbCUyMG9uJTIwJTYwbnVtX2xhYmVscyU2MCUyMGNsYXNzZXMlMkMlMjB5b3UlMjBjYW4lMjBwYXNzJTIwJTYwbnVtX2xhYmVscyUzRG51bV9sYWJlbHMlNjAlMjB0byUyMCU2MC5mcm9tX3ByZXRyYWluZWQoLi4uKSU2MCUwQW51bV9sYWJlbHMlMjAlM0QlMjBsZW4obW9kZWwuY29uZmlnLmlkMmxhYmVsKSUwQW1vZGVsJTIwJTNEJTIwQ1RSTEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMlNhbGVzZm9yY2UlMkZjdHJsJTIyJTJDJTIwbnVtX2xhYmVscyUzRG51bV9sYWJlbHMpJTBBJTBBbnVtX2xhYmVscyUyMCUzRCUyMGxlbihtb2RlbC5jb25maWcuaWQybGFiZWwpJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2gubm4uZnVuY3Rpb25hbC5vbmVfaG90KHRvcmNoLnRlbnNvciglNUJwcmVkaWN0ZWRfY2xhc3NfaWQlNUQpJTJDJTIwbnVtX2NsYXNzZXMlM0RudW1fbGFiZWxzKS50byglMEElMjAlMjAlMjAlMjB0b3JjaC5mbG9hdCUwQSklMEFsb3NzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMlMkMlMjBsYWJlbHMlM0RsYWJlbHMpLmxvc3MlMEFsb3NzLmJhY2t3YXJkKCk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CTRLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;Salesforce/ctrl&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`,wrap:!1}}),{c(){b(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,o){M(e,t,o),p=!0},p:ee,i(t){p||(w(e.$$.fragment,t),p=!0)},o(t){k(e.$$.fragment,t),p=!1},d(t){v(e,t)}}}function xt(C){let e,p,t,o,g,n,_="The bare CTRL Model transformer outputting raw hidden-states without any specific head on top.",te,F,x=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,P,J,z=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,E,i,R,Y,V,ot='The <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLModel">CTRLModel</a> forward method, overrides the <code>__call__</code> special method.',ke,ne,tt,X,be,Q,me,H,ue,q,oe,Fe=`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`,Ve,ze,Ie=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,ve,B,Ue=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,qe,G,We,ye,he,ie='The <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLLMHeadModel">CTRLLMHeadModel</a> forward method, overrides the <code>__call__</code> special method.',$e,O,Ce,se,Xe,U,Me,W,ae,Ne,Le,I=`The CTRL Model transformer with a sequence classification head on top (linear layer).
<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLForSequenceClassification">CTRLForSequenceClassification</a> uses the last token in order to do the classification, as other causal models
(e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the last
token. If a <code>pad_token_id</code> is defined in the configuration, it finds the last token that is not a padding token in
each row. If no <code>pad_token_id</code> is defined, it simply takes the last value in each row of the batch. Since it cannot
guess the padding tokens when <code>inputs_embeds</code> are passed instead of <code>input_ids</code>, it does the same (take the last
value in each row of the batch).`,He,Ze,we=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Be,je,de=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Ye,N,re,s,$,A='The <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLForSequenceClassification">CTRLForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',ce,Re,nt,Qe,at,fe,rt,S,Oe,Pe,Ae;return e=new Ee({props:{title:"CTRLModel",local:"transformers.CTRLModel",headingTag:"h2"}}),o=new Je({props:{name:"class transformers.CTRLModel",anchor:"transformers.CTRLModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CTRLModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ctrl/modeling_ctrl.py#L315"}}),R=new Je({props:{name:"forward",anchor:"transformers.CTRLModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.CTRLModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CTRLModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.FloatTensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.CTRLModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CTRLModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CTRLModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CTRLModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CTRLModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CTRLModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.CTRLModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CTRLModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CTRLModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ctrl/modeling_ctrl.py#L352",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig"
>CTRLConfig</a>) and inputs.</p>
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
`}}),ne=new st({props:{$$slots:{default:[Mt]},$$scope:{ctx:C}}}),X=new Ke({props:{anchor:"transformers.CTRLModel.forward.example",$$slots:{default:[wt]},$$scope:{ctx:C}}}),Q=new Ee({props:{title:"CTRLLMHeadModel",local:"transformers.CTRLLMHeadModel",headingTag:"h2"}}),ue=new Je({props:{name:"class transformers.CTRLLMHeadModel",anchor:"transformers.CTRLLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CTRLLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ctrl/modeling_ctrl.py#L504"}}),We=new Je({props:{name:"forward",anchor:"transformers.CTRLLMHeadModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.CTRLLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CTRLLMHeadModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.FloatTensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.CTRLLMHeadModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CTRLLMHeadModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CTRLLMHeadModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CTRLLMHeadModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CTRLLMHeadModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CTRLLMHeadModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.CTRLLMHeadModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CTRLLMHeadModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CTRLLMHeadModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CTRLLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ctrl/modeling_ctrl.py#L544",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig"
>CTRLConfig</a>) and inputs.</p>
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
`}}),O=new st({props:{$$slots:{default:[kt]},$$scope:{ctx:C}}}),se=new Ke({props:{anchor:"transformers.CTRLLMHeadModel.forward.example",$$slots:{default:[vt]},$$scope:{ctx:C}}}),U=new Ee({props:{title:"CTRLForSequenceClassification",local:"transformers.CTRLForSequenceClassification",headingTag:"h2"}}),ae=new Je({props:{name:"class transformers.CTRLForSequenceClassification",anchor:"transformers.CTRLForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CTRLForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ctrl/modeling_ctrl.py#L650"}}),re=new Je({props:{name:"forward",anchor:"transformers.CTRLForSequenceClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.CTRLForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CTRLForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.FloatTensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.CTRLForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CTRLForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CTRLForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CTRLForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CTRLForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CTRLForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.CTRLForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CTRLForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CTRLForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CTRLForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ctrl/modeling_ctrl.py#L672",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig"
>CTRLConfig</a>) and inputs.</p>
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
`}}),Re=new st({props:{$$slots:{default:[$t]},$$scope:{ctx:C}}}),Qe=new Ke({props:{anchor:"transformers.CTRLForSequenceClassification.forward.example",$$slots:{default:[Ct]},$$scope:{ctx:C}}}),fe=new Ke({props:{anchor:"transformers.CTRLForSequenceClassification.forward.example-2",$$slots:{default:[Lt]},$$scope:{ctx:C}}}),S=new Ke({props:{anchor:"transformers.CTRLForSequenceClassification.forward.example-3",$$slots:{default:[jt]},$$scope:{ctx:C}}}),Pe=new Ke({props:{anchor:"transformers.CTRLForSequenceClassification.forward.example-4",$$slots:{default:[Rt]},$$scope:{ctx:C}}}),{c(){b(e.$$.fragment),p=r(),t=m("div"),b(o.$$.fragment),g=r(),n=m("p"),n.textContent=_,te=r(),F=m("p"),F.innerHTML=x,P=r(),J=m("p"),J.innerHTML=z,E=r(),i=m("div"),b(R.$$.fragment),Y=r(),V=m("p"),V.innerHTML=ot,ke=r(),b(ne.$$.fragment),tt=r(),b(X.$$.fragment),be=r(),b(Q.$$.fragment),me=r(),H=m("div"),b(ue.$$.fragment),q=r(),oe=m("p"),oe.textContent=Fe,Ve=r(),ze=m("p"),ze.innerHTML=Ie,ve=r(),B=m("p"),B.innerHTML=Ue,qe=r(),G=m("div"),b(We.$$.fragment),ye=r(),he=m("p"),he.innerHTML=ie,$e=r(),b(O.$$.fragment),Ce=r(),b(se.$$.fragment),Xe=r(),b(U.$$.fragment),Me=r(),W=m("div"),b(ae.$$.fragment),Ne=r(),Le=m("p"),Le.innerHTML=I,He=r(),Ze=m("p"),Ze.innerHTML=we,Be=r(),je=m("p"),je.innerHTML=de,Ye=r(),N=m("div"),b(re.$$.fragment),s=r(),$=m("p"),$.innerHTML=A,ce=r(),b(Re.$$.fragment),nt=r(),b(Qe.$$.fragment),at=r(),b(fe.$$.fragment),rt=r(),b(S.$$.fragment),Oe=r(),b(Pe.$$.fragment),this.h()},l(f){y(e.$$.fragment,f),p=l(f),t=u(f,"DIV",{class:!0});var j=Te(t);y(o.$$.fragment,j),g=l(j),n=u(j,"P",{"data-svelte-h":!0}),T(n)!=="svelte-418ah6"&&(n.textContent=_),te=l(j),F=u(j,"P",{"data-svelte-h":!0}),T(F)!=="svelte-6pahdo"&&(F.innerHTML=x),P=l(j),J=u(j,"P",{"data-svelte-h":!0}),T(J)!=="svelte-hswkmf"&&(J.innerHTML=z),E=l(j),i=u(j,"DIV",{class:!0});var D=Te(i);y(R.$$.fragment,D),Y=l(D),V=u(D,"P",{"data-svelte-h":!0}),T(V)!=="svelte-1cc26kw"&&(V.innerHTML=ot),ke=l(D),y(ne.$$.fragment,D),tt=l(D),y(X.$$.fragment,D),D.forEach(a),j.forEach(a),be=l(f),y(Q.$$.fragment,f),me=l(f),H=u(f,"DIV",{class:!0});var ge=Te(H);y(ue.$$.fragment,ge),q=l(ge),oe=u(ge,"P",{"data-svelte-h":!0}),T(oe)!=="svelte-ej2g0g"&&(oe.textContent=Fe),Ve=l(ge),ze=u(ge,"P",{"data-svelte-h":!0}),T(ze)!=="svelte-6pahdo"&&(ze.innerHTML=Ie),ve=l(ge),B=u(ge,"P",{"data-svelte-h":!0}),T(B)!=="svelte-hswkmf"&&(B.innerHTML=Ue),qe=l(ge),G=u(ge,"DIV",{class:!0});var K=Te(G);y(We.$$.fragment,K),ye=l(K),he=u(K,"P",{"data-svelte-h":!0}),T(he)!=="svelte-180xaak"&&(he.innerHTML=ie),$e=l(K),y(O.$$.fragment,K),Ce=l(K),y(se.$$.fragment,K),K.forEach(a),ge.forEach(a),Xe=l(f),y(U.$$.fragment,f),Me=l(f),W=u(f,"DIV",{class:!0});var _e=Te(W);y(ae.$$.fragment,_e),Ne=l(_e),Le=u(_e,"P",{"data-svelte-h":!0}),T(Le)!=="svelte-tja3rc"&&(Le.innerHTML=I),He=l(_e),Ze=u(_e,"P",{"data-svelte-h":!0}),T(Ze)!=="svelte-6pahdo"&&(Ze.innerHTML=we),Be=l(_e),je=u(_e,"P",{"data-svelte-h":!0}),T(je)!=="svelte-hswkmf"&&(je.innerHTML=de),Ye=l(_e),N=u(_e,"DIV",{class:!0});var Z=Te(N);y(re.$$.fragment,Z),s=l(Z),$=u(Z,"P",{"data-svelte-h":!0}),T($)!=="svelte-1938r40"&&($.innerHTML=A),ce=l(Z),y(Re.$$.fragment,Z),nt=l(Z),y(Qe.$$.fragment,Z),at=l(Z),y(fe.$$.fragment,Z),rt=l(Z),y(S.$$.fragment,Z),Oe=l(Z),y(Pe.$$.fragment,Z),Z.forEach(a),_e.forEach(a),this.h()},h(){pe(i,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),pe(t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),pe(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),pe(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),pe(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),pe(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(f,j){M(e,f,j),c(f,p,j),c(f,t,j),M(o,t,null),d(t,g),d(t,n),d(t,te),d(t,F),d(t,P),d(t,J),d(t,E),d(t,i),M(R,i,null),d(i,Y),d(i,V),d(i,ke),M(ne,i,null),d(i,tt),M(X,i,null),c(f,be,j),M(Q,f,j),c(f,me,j),c(f,H,j),M(ue,H,null),d(H,q),d(H,oe),d(H,Ve),d(H,ze),d(H,ve),d(H,B),d(H,qe),d(H,G),M(We,G,null),d(G,ye),d(G,he),d(G,$e),M(O,G,null),d(G,Ce),M(se,G,null),c(f,Xe,j),M(U,f,j),c(f,Me,j),c(f,W,j),M(ae,W,null),d(W,Ne),d(W,Le),d(W,He),d(W,Ze),d(W,Be),d(W,je),d(W,Ye),d(W,N),M(re,N,null),d(N,s),d(N,$),d(N,ce),M(Re,N,null),d(N,nt),M(Qe,N,null),d(N,at),M(fe,N,null),d(N,rt),M(S,N,null),d(N,Oe),M(Pe,N,null),Ae=!0},p(f,j){const D={};j&2&&(D.$$scope={dirty:j,ctx:f}),ne.$set(D);const ge={};j&2&&(ge.$$scope={dirty:j,ctx:f}),X.$set(ge);const K={};j&2&&(K.$$scope={dirty:j,ctx:f}),O.$set(K);const _e={};j&2&&(_e.$$scope={dirty:j,ctx:f}),se.$set(_e);const Z={};j&2&&(Z.$$scope={dirty:j,ctx:f}),Re.$set(Z);const lt={};j&2&&(lt.$$scope={dirty:j,ctx:f}),Qe.$set(lt);const h={};j&2&&(h.$$scope={dirty:j,ctx:f}),fe.$set(h);const L={};j&2&&(L.$$scope={dirty:j,ctx:f}),S.$set(L);const Se={};j&2&&(Se.$$scope={dirty:j,ctx:f}),Pe.$set(Se)},i(f){Ae||(w(e.$$.fragment,f),w(o.$$.fragment,f),w(R.$$.fragment,f),w(ne.$$.fragment,f),w(X.$$.fragment,f),w(Q.$$.fragment,f),w(ue.$$.fragment,f),w(We.$$.fragment,f),w(O.$$.fragment,f),w(se.$$.fragment,f),w(U.$$.fragment,f),w(ae.$$.fragment,f),w(re.$$.fragment,f),w(Re.$$.fragment,f),w(Qe.$$.fragment,f),w(fe.$$.fragment,f),w(S.$$.fragment,f),w(Pe.$$.fragment,f),Ae=!0)},o(f){k(e.$$.fragment,f),k(o.$$.fragment,f),k(R.$$.fragment,f),k(ne.$$.fragment,f),k(X.$$.fragment,f),k(Q.$$.fragment,f),k(ue.$$.fragment,f),k(We.$$.fragment,f),k(O.$$.fragment,f),k(se.$$.fragment,f),k(U.$$.fragment,f),k(ae.$$.fragment,f),k(re.$$.fragment,f),k(Re.$$.fragment,f),k(Qe.$$.fragment,f),k(fe.$$.fragment,f),k(S.$$.fragment,f),k(Pe.$$.fragment,f),Ae=!1},d(f){f&&(a(p),a(t),a(be),a(me),a(H),a(Xe),a(Me),a(W)),v(e,f),v(o),v(R),v(ne),v(X),v(Q,f),v(ue),v(We),v(O),v(se),v(U,f),v(ae),v(re),v(Re),v(Qe),v(fe),v(S),v(Pe)}}}function Jt(C){let e,p;return e=new ut({props:{$$slots:{default:[xt]},$$scope:{ctx:C}}}),{c(){b(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,o){M(e,t,o),p=!0},p(t,o){const g={};o&2&&(g.$$scope={dirty:o,ctx:t}),e.$set(g)},i(t){p||(w(e.$$.fragment,t),p=!0)},o(t){k(e.$$.fragment,t),p=!1},d(t){v(e,t)}}}function Ft(C){let e,p="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,o,g="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",n,_,te=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,F,x,P=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,J,z,E=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=m("p"),e.innerHTML=p,t=r(),o=m("ul"),o.innerHTML=g,n=r(),_=m("p"),_.innerHTML=te,F=r(),x=m("ul"),x.innerHTML=P,J=r(),z=m("p"),z.innerHTML=E},l(i){e=u(i,"P",{"data-svelte-h":!0}),T(e)!=="svelte-1ajbfxg"&&(e.innerHTML=p),t=l(i),o=u(i,"UL",{"data-svelte-h":!0}),T(o)!=="svelte-qm1t26"&&(o.innerHTML=g),n=l(i),_=u(i,"P",{"data-svelte-h":!0}),T(_)!=="svelte-1v9qsc5"&&(_.innerHTML=te),F=l(i),x=u(i,"UL",{"data-svelte-h":!0}),T(x)!=="svelte-15scerc"&&(x.innerHTML=P),J=l(i),z=u(i,"P",{"data-svelte-h":!0}),T(z)!=="svelte-1an3odd"&&(z.innerHTML=E)},m(i,R){c(i,e,R),c(i,t,R),c(i,o,R),c(i,n,R),c(i,_,R),c(i,F,R),c(i,x,R),c(i,J,R),c(i,z,R)},p:ee,d(i){i&&(a(e),a(t),a(o),a(n),a(_),a(F),a(x),a(J),a(z))}}}function zt(C){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=m("p"),e.innerHTML=p},l(t){e=u(t,"P",{"data-svelte-h":!0}),T(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(t,o){c(t,e,o)},p:ee,d(t){t&&a(e)}}}function It(C){let e,p="Example:",t,o,g;return o=new et({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkNUUkxNb2RlbCUwQWltcG9ydCUyMHRlbnNvcmZsb3clMjBhcyUyMHRmJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyU2FsZXNmb3JjZSUyRmN0cmwlMjIpJTBBbW9kZWwlMjAlM0QlMjBURkNUUkxNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyU2FsZXNmb3JjZSUyRmN0cmwlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbChpbnB1dHMpJTBBJTBBbGFzdF9oaWRkZW5fc3RhdGVzJTIwJTNEJTIwb3V0cHV0cy5sYXN0X2hpZGRlbl9zdGF0ZQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFCTRLModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;Salesforce/ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCTRLModel.from_pretrained(<span class="hljs-string">&quot;Salesforce/ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=m("p"),e.textContent=p,t=r(),b(o.$$.fragment)},l(n){e=u(n,"P",{"data-svelte-h":!0}),T(e)!=="svelte-11lpom8"&&(e.textContent=p),t=l(n),y(o.$$.fragment,n)},m(n,_){c(n,e,_),c(n,t,_),M(o,n,_),g=!0},p:ee,i(n){g||(w(o.$$.fragment,n),g=!0)},o(n){k(o.$$.fragment,n),g=!1},d(n){n&&(a(e),a(t)),v(o,n)}}}function Ut(C){let e,p="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,o,g="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",n,_,te=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,F,x,P=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,J,z,E=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=m("p"),e.innerHTML=p,t=r(),o=m("ul"),o.innerHTML=g,n=r(),_=m("p"),_.innerHTML=te,F=r(),x=m("ul"),x.innerHTML=P,J=r(),z=m("p"),z.innerHTML=E},l(i){e=u(i,"P",{"data-svelte-h":!0}),T(e)!=="svelte-1ajbfxg"&&(e.innerHTML=p),t=l(i),o=u(i,"UL",{"data-svelte-h":!0}),T(o)!=="svelte-qm1t26"&&(o.innerHTML=g),n=l(i),_=u(i,"P",{"data-svelte-h":!0}),T(_)!=="svelte-1v9qsc5"&&(_.innerHTML=te),F=l(i),x=u(i,"UL",{"data-svelte-h":!0}),T(x)!=="svelte-15scerc"&&(x.innerHTML=P),J=l(i),z=u(i,"P",{"data-svelte-h":!0}),T(z)!=="svelte-1an3odd"&&(z.innerHTML=E)},m(i,R){c(i,e,R),c(i,t,R),c(i,o,R),c(i,n,R),c(i,_,R),c(i,F,R),c(i,x,R),c(i,J,R),c(i,z,R)},p:ee,d(i){i&&(a(e),a(t),a(o),a(n),a(_),a(F),a(x),a(J),a(z))}}}function qt(C){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=m("p"),e.innerHTML=p},l(t){e=u(t,"P",{"data-svelte-h":!0}),T(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(t,o){c(t,e,o)},p:ee,d(t){t&&a(e)}}}function Wt(C){let e,p="Example:",t,o,g;return o=new et({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkNUUkxMTUhlYWRNb2RlbCUwQWltcG9ydCUyMHRlbnNvcmZsb3clMjBhcyUyMHRmJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyU2FsZXNmb3JjZSUyRmN0cmwlMjIpJTBBbW9kZWwlMjAlM0QlMjBURkNUUkxMTUhlYWRNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyU2FsZXNmb3JjZSUyRmN0cmwlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbChpbnB1dHMpJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFCTRLLMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;Salesforce/ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCTRLLMHeadModel.from_pretrained(<span class="hljs-string">&quot;Salesforce/ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=m("p"),e.textContent=p,t=r(),b(o.$$.fragment)},l(n){e=u(n,"P",{"data-svelte-h":!0}),T(e)!=="svelte-11lpom8"&&(e.textContent=p),t=l(n),y(o.$$.fragment,n)},m(n,_){c(n,e,_),c(n,t,_),M(o,n,_),g=!0},p:ee,i(n){g||(w(o.$$.fragment,n),g=!0)},o(n){k(o.$$.fragment,n),g=!1},d(n){n&&(a(e),a(t)),v(o,n)}}}function Nt(C){let e,p="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,o,g="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",n,_,te=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,F,x,P=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,J,z,E=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=m("p"),e.innerHTML=p,t=r(),o=m("ul"),o.innerHTML=g,n=r(),_=m("p"),_.innerHTML=te,F=r(),x=m("ul"),x.innerHTML=P,J=r(),z=m("p"),z.innerHTML=E},l(i){e=u(i,"P",{"data-svelte-h":!0}),T(e)!=="svelte-1ajbfxg"&&(e.innerHTML=p),t=l(i),o=u(i,"UL",{"data-svelte-h":!0}),T(o)!=="svelte-qm1t26"&&(o.innerHTML=g),n=l(i),_=u(i,"P",{"data-svelte-h":!0}),T(_)!=="svelte-1v9qsc5"&&(_.innerHTML=te),F=l(i),x=u(i,"UL",{"data-svelte-h":!0}),T(x)!=="svelte-15scerc"&&(x.innerHTML=P),J=l(i),z=u(i,"P",{"data-svelte-h":!0}),T(z)!=="svelte-1an3odd"&&(z.innerHTML=E)},m(i,R){c(i,e,R),c(i,t,R),c(i,o,R),c(i,n,R),c(i,_,R),c(i,F,R),c(i,x,R),c(i,J,R),c(i,z,R)},p:ee,d(i){i&&(a(e),a(t),a(o),a(n),a(_),a(F),a(x),a(J),a(z))}}}function Ht(C){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=m("p"),e.innerHTML=p},l(t){e=u(t,"P",{"data-svelte-h":!0}),T(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(t,o){c(t,e,o)},p:ee,d(t){t&&a(e)}}}function Zt(C){let e,p="Example:",t,o,g;return o=new et({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkNUUkxGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uJTBBaW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJTYWxlc2ZvcmNlJTJGY3RybCUyMiklMEFtb2RlbCUyMCUzRCUyMFRGQ1RSTEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMlNhbGVzZm9yY2UlMkZjdHJsJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiklMEElMEFsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX2NsYXNzX2lkJTIwJTNEJTIwaW50KHRmLm1hdGguYXJnbWF4KGxvZ2l0cyUyQyUyMGF4aXMlM0QtMSklNUIwJTVEKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFCTRLForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;Salesforce/ctrl&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCTRLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;Salesforce/ctrl&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])`,wrap:!1}}),{c(){e=m("p"),e.textContent=p,t=r(),b(o.$$.fragment)},l(n){e=u(n,"P",{"data-svelte-h":!0}),T(e)!=="svelte-11lpom8"&&(e.textContent=p),t=l(n),y(o.$$.fragment,n)},m(n,_){c(n,e,_),c(n,t,_),M(o,n,_),g=!0},p:ee,i(n){g||(w(o.$$.fragment,n),g=!0)},o(n){k(o.$$.fragment,n),g=!1},d(n){n&&(a(e),a(t)),v(o,n)}}}function Bt(C){let e,p;return e=new et({props:{code:"JTIzJTIwVG8lMjB0cmFpbiUyMGElMjBtb2RlbCUyMG9uJTIwJTYwbnVtX2xhYmVscyU2MCUyMGNsYXNzZXMlMkMlMjB5b3UlMjBjYW4lMjBwYXNzJTIwJTYwbnVtX2xhYmVscyUzRG51bV9sYWJlbHMlNjAlMjB0byUyMCU2MC5mcm9tX3ByZXRyYWluZWQoLi4uKSU2MCUwQW51bV9sYWJlbHMlMjAlM0QlMjBsZW4obW9kZWwuY29uZmlnLmlkMmxhYmVsKSUwQW1vZGVsJTIwJTNEJTIwVEZDVFJMRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyU2FsZXNmb3JjZSUyRmN0cmwlMjIlMkMlMjBudW1fbGFiZWxzJTNEbnVtX2xhYmVscyklMEElMEFsYWJlbHMlMjAlM0QlMjB0Zi5jb25zdGFudCgxKSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`</span>\n<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)\n<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCTRLForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;Salesforce/ctrl&quot;</span>, num_labels=num_labels)\n\n<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)\n<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss',wrap:!1}}),{c(){b(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,o){M(e,t,o),p=!0},p:ee,i(t){p||(w(e.$$.fragment,t),p=!0)},o(t){k(e.$$.fragment,t),p=!1},d(t){v(e,t)}}}function St(C){let e,p,t,o,g,n,_="The bare CTRL Model transformer outputting raw hidden-states without any specific head on top.",te,F,x=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,P,J,z=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,E,i,R,Y,V,ot,ke,ne='The <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.TFCTRLModel">TFCTRLModel</a> forward method, overrides the <code>__call__</code> special method.',tt,X,be,Q,me,H,ue,q,oe,Fe,Ve,ze=`The CTRL Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`,Ie,ve,B=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Ue,qe,G=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,We,ye,he,ie,$e,O,Ce,se='The <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.TFCTRLLMHeadModel">TFCTRLLMHeadModel</a> forward method, overrides the <code>__call__</code> special method.',Xe,U,Me,W,ae,Ne,Le,I,He,Ze,we,Be="The CTRL Model transformer with a sequence classification head on top (linear layer).",je,de,Ye=`<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.TFCTRLForSequenceClassification">TFCTRLForSequenceClassification</a> uses the last token in order to do the classification, as other causal models
(e.g. GPT-1, GPT-2) do.`,N,re,s=`Since it does classification on the last token, it requires to know the position of the last token. If a
<code>pad_token_id</code> is defined in the configuration, it finds the last token that is not a padding token in each row. If
no <code>pad_token_id</code> is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when <code>inputs_embeds</code> are passed instead of <code>input_ids</code>, it does the same (take the last value in
each row of the batch).`,$,A,ce=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Re,nt,Qe=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,at,fe,rt,S,Oe,Pe,Ae,f='The <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.TFCTRLForSequenceClassification">TFCTRLForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',j,D,ge,K,_e,Z,lt;return e=new Ee({props:{title:"TFCTRLModel",local:"transformers.TFCTRLModel",headingTag:"h2"}}),o=new Je({props:{name:"class transformers.TFCTRLModel",anchor:"transformers.TFCTRLModel",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCTRLModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L583"}}),i=new st({props:{$$slots:{default:[Ft]},$$scope:{ctx:C}}}),V=new Je({props:{name:"call",anchor:"transformers.TFCTRLModel.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"past_key_values",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"use_cache",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCTRLModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states).</p>
<p>Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCTRLModel.call.past",description:`<strong>past</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past"},{anchor:"transformers.TFCTRLModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCTRLModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFCTRLModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCTRLModel.call.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFCTRLModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFCTRLModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past</code> key value states are returned and can be used to speed up decoding (see <code>past</code>).`,name:"use_cache"},{anchor:"transformers.TFCTRLModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCTRLModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCTRLModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCTRLModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L592",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig"
>CTRLConfig</a>) and inputs.</p>
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
`}}),X=new st({props:{$$slots:{default:[zt]},$$scope:{ctx:C}}}),Q=new Ke({props:{anchor:"transformers.TFCTRLModel.call.example",$$slots:{default:[It]},$$scope:{ctx:C}}}),H=new Ee({props:{title:"TFCTRLLMHeadModel",local:"transformers.TFCTRLLMHeadModel",headingTag:"h2"}}),oe=new Je({props:{name:"class transformers.TFCTRLLMHeadModel",anchor:"transformers.TFCTRLLMHeadModel",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCTRLLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L661"}}),ye=new st({props:{$$slots:{default:[Ut]},$$scope:{ctx:C}}}),$e=new Je({props:{name:"call",anchor:"transformers.TFCTRLLMHeadModel.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"past_key_values",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"use_cache",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCTRLLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states).</p>
<p>Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCTRLLMHeadModel.call.past",description:`<strong>past</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past"},{anchor:"transformers.TFCTRLLMHeadModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCTRLLMHeadModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFCTRLLMHeadModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCTRLLMHeadModel.call.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFCTRLLMHeadModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFCTRLLMHeadModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past</code> key value states are returned and can be used to speed up decoding (see <code>past</code>).`,name:"use_cache"},{anchor:"transformers.TFCTRLLMHeadModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCTRLLMHeadModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCTRLLMHeadModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCTRLLMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCTRLLMHeadModel.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L720",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig"
>CTRLConfig</a>) and inputs.</p>
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
`}}),U=new st({props:{$$slots:{default:[qt]},$$scope:{ctx:C}}}),W=new Ke({props:{anchor:"transformers.TFCTRLLMHeadModel.call.example",$$slots:{default:[Wt]},$$scope:{ctx:C}}}),Ne=new Ee({props:{title:"TFCTRLForSequenceClassification",local:"transformers.TFCTRLForSequenceClassification",headingTag:"h2"}}),He=new Je({props:{name:"class transformers.TFCTRLForSequenceClassification",anchor:"transformers.TFCTRLForSequenceClassification",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCTRLForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig">CTRLConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L797"}}),fe=new st({props:{$$slots:{default:[Nt]},$$scope:{ctx:C}}}),Oe=new Je({props:{name:"call",anchor:"transformers.TFCTRLForSequenceClassification.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"past_key_values",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"use_cache",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCTRLForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states).</p>
<p>Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCTRLForSequenceClassification.call.past",description:`<strong>past</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past"},{anchor:"transformers.TFCTRLForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCTRLForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFCTRLForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCTRLForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFCTRLForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFCTRLForSequenceClassification.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past</code> key value states are returned and can be used to speed up decoding (see <code>past</code>).`,name:"use_cache"},{anchor:"transformers.TFCTRLForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCTRLForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCTRLForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCTRLForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCTRLForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ctrl/modeling_tf_ctrl.py#L833",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLConfig"
>CTRLConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) — Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),D=new st({props:{$$slots:{default:[Ht]},$$scope:{ctx:C}}}),K=new Ke({props:{anchor:"transformers.TFCTRLForSequenceClassification.call.example",$$slots:{default:[Zt]},$$scope:{ctx:C}}}),Z=new Ke({props:{anchor:"transformers.TFCTRLForSequenceClassification.call.example-2",$$slots:{default:[Bt]},$$scope:{ctx:C}}}),{c(){b(e.$$.fragment),p=r(),t=m("div"),b(o.$$.fragment),g=r(),n=m("p"),n.textContent=_,te=r(),F=m("p"),F.innerHTML=x,P=r(),J=m("p"),J.innerHTML=z,E=r(),b(i.$$.fragment),R=r(),Y=m("div"),b(V.$$.fragment),ot=r(),ke=m("p"),ke.innerHTML=ne,tt=r(),b(X.$$.fragment),be=r(),b(Q.$$.fragment),me=r(),b(H.$$.fragment),ue=r(),q=m("div"),b(oe.$$.fragment),Fe=r(),Ve=m("p"),Ve.textContent=ze,Ie=r(),ve=m("p"),ve.innerHTML=B,Ue=r(),qe=m("p"),qe.innerHTML=G,We=r(),b(ye.$$.fragment),he=r(),ie=m("div"),b($e.$$.fragment),O=r(),Ce=m("p"),Ce.innerHTML=se,Xe=r(),b(U.$$.fragment),Me=r(),b(W.$$.fragment),ae=r(),b(Ne.$$.fragment),Le=r(),I=m("div"),b(He.$$.fragment),Ze=r(),we=m("p"),we.textContent=Be,je=r(),de=m("p"),de.innerHTML=Ye,N=r(),re=m("p"),re.innerHTML=s,$=r(),A=m("p"),A.innerHTML=ce,Re=r(),nt=m("p"),nt.innerHTML=Qe,at=r(),b(fe.$$.fragment),rt=r(),S=m("div"),b(Oe.$$.fragment),Pe=r(),Ae=m("p"),Ae.innerHTML=f,j=r(),b(D.$$.fragment),ge=r(),b(K.$$.fragment),_e=r(),b(Z.$$.fragment),this.h()},l(h){y(e.$$.fragment,h),p=l(h),t=u(h,"DIV",{class:!0});var L=Te(t);y(o.$$.fragment,L),g=l(L),n=u(L,"P",{"data-svelte-h":!0}),T(n)!=="svelte-418ah6"&&(n.textContent=_),te=l(L),F=u(L,"P",{"data-svelte-h":!0}),T(F)!=="svelte-1qaxm70"&&(F.innerHTML=x),P=l(L),J=u(L,"P",{"data-svelte-h":!0}),T(J)!=="svelte-1be7e3c"&&(J.innerHTML=z),E=l(L),y(i.$$.fragment,L),R=l(L),Y=u(L,"DIV",{class:!0});var Se=Te(Y);y(V.$$.fragment,Se),ot=l(Se),ke=u(Se,"P",{"data-svelte-h":!0}),T(ke)!=="svelte-1tiboeg"&&(ke.innerHTML=ne),tt=l(Se),y(X.$$.fragment,Se),be=l(Se),y(Q.$$.fragment,Se),Se.forEach(a),L.forEach(a),me=l(h),y(H.$$.fragment,h),ue=l(h),q=u(h,"DIV",{class:!0});var xe=Te(q);y(oe.$$.fragment,xe),Fe=l(xe),Ve=u(xe,"P",{"data-svelte-h":!0}),T(Ve)!=="svelte-ej2g0g"&&(Ve.textContent=ze),Ie=l(xe),ve=u(xe,"P",{"data-svelte-h":!0}),T(ve)!=="svelte-1qaxm70"&&(ve.innerHTML=B),Ue=l(xe),qe=u(xe,"P",{"data-svelte-h":!0}),T(qe)!=="svelte-1be7e3c"&&(qe.innerHTML=G),We=l(xe),y(ye.$$.fragment,xe),he=l(xe),ie=u(xe,"DIV",{class:!0});var De=Te(ie);y($e.$$.fragment,De),O=l(De),Ce=u(De,"P",{"data-svelte-h":!0}),T(Ce)!=="svelte-18v59q8"&&(Ce.innerHTML=se),Xe=l(De),y(U.$$.fragment,De),Me=l(De),y(W.$$.fragment,De),De.forEach(a),xe.forEach(a),ae=l(h),y(Ne.$$.fragment,h),Le=l(h),I=u(h,"DIV",{class:!0});var le=Te(I);y(He.$$.fragment,le),Ze=l(le),we=u(le,"P",{"data-svelte-h":!0}),T(we)!=="svelte-1f84wtp"&&(we.textContent=Be),je=l(le),de=u(le,"P",{"data-svelte-h":!0}),T(de)!=="svelte-aqpwpu"&&(de.innerHTML=Ye),N=l(le),re=u(le,"P",{"data-svelte-h":!0}),T(re)!=="svelte-10ugs3m"&&(re.innerHTML=s),$=l(le),A=u(le,"P",{"data-svelte-h":!0}),T(A)!=="svelte-1qaxm70"&&(A.innerHTML=ce),Re=l(le),nt=u(le,"P",{"data-svelte-h":!0}),T(nt)!=="svelte-1be7e3c"&&(nt.innerHTML=Qe),at=l(le),y(fe.$$.fragment,le),rt=l(le),S=u(le,"DIV",{class:!0});var Ge=Te(S);y(Oe.$$.fragment,Ge),Pe=l(Ge),Ae=u(Ge,"P",{"data-svelte-h":!0}),T(Ae)!=="svelte-1tq6tt0"&&(Ae.innerHTML=f),j=l(Ge),y(D.$$.fragment,Ge),ge=l(Ge),y(K.$$.fragment,Ge),_e=l(Ge),y(Z.$$.fragment,Ge),Ge.forEach(a),le.forEach(a),this.h()},h(){pe(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),pe(t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),pe(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),pe(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),pe(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),pe(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(h,L){M(e,h,L),c(h,p,L),c(h,t,L),M(o,t,null),d(t,g),d(t,n),d(t,te),d(t,F),d(t,P),d(t,J),d(t,E),M(i,t,null),d(t,R),d(t,Y),M(V,Y,null),d(Y,ot),d(Y,ke),d(Y,tt),M(X,Y,null),d(Y,be),M(Q,Y,null),c(h,me,L),M(H,h,L),c(h,ue,L),c(h,q,L),M(oe,q,null),d(q,Fe),d(q,Ve),d(q,Ie),d(q,ve),d(q,Ue),d(q,qe),d(q,We),M(ye,q,null),d(q,he),d(q,ie),M($e,ie,null),d(ie,O),d(ie,Ce),d(ie,Xe),M(U,ie,null),d(ie,Me),M(W,ie,null),c(h,ae,L),M(Ne,h,L),c(h,Le,L),c(h,I,L),M(He,I,null),d(I,Ze),d(I,we),d(I,je),d(I,de),d(I,N),d(I,re),d(I,$),d(I,A),d(I,Re),d(I,nt),d(I,at),M(fe,I,null),d(I,rt),d(I,S),M(Oe,S,null),d(S,Pe),d(S,Ae),d(S,j),M(D,S,null),d(S,ge),M(K,S,null),d(S,_e),M(Z,S,null),lt=!0},p(h,L){const Se={};L&2&&(Se.$$scope={dirty:L,ctx:h}),i.$set(Se);const xe={};L&2&&(xe.$$scope={dirty:L,ctx:h}),X.$set(xe);const De={};L&2&&(De.$$scope={dirty:L,ctx:h}),Q.$set(De);const le={};L&2&&(le.$$scope={dirty:L,ctx:h}),ye.$set(le);const Ge={};L&2&&(Ge.$$scope={dirty:L,ctx:h}),U.$set(Ge);const it={};L&2&&(it.$$scope={dirty:L,ctx:h}),W.$set(it);const dt={};L&2&&(dt.$$scope={dirty:L,ctx:h}),fe.$set(dt);const ct={};L&2&&(ct.$$scope={dirty:L,ctx:h}),D.$set(ct);const pt={};L&2&&(pt.$$scope={dirty:L,ctx:h}),K.$set(pt);const mt={};L&2&&(mt.$$scope={dirty:L,ctx:h}),Z.$set(mt)},i(h){lt||(w(e.$$.fragment,h),w(o.$$.fragment,h),w(i.$$.fragment,h),w(V.$$.fragment,h),w(X.$$.fragment,h),w(Q.$$.fragment,h),w(H.$$.fragment,h),w(oe.$$.fragment,h),w(ye.$$.fragment,h),w($e.$$.fragment,h),w(U.$$.fragment,h),w(W.$$.fragment,h),w(Ne.$$.fragment,h),w(He.$$.fragment,h),w(fe.$$.fragment,h),w(Oe.$$.fragment,h),w(D.$$.fragment,h),w(K.$$.fragment,h),w(Z.$$.fragment,h),lt=!0)},o(h){k(e.$$.fragment,h),k(o.$$.fragment,h),k(i.$$.fragment,h),k(V.$$.fragment,h),k(X.$$.fragment,h),k(Q.$$.fragment,h),k(H.$$.fragment,h),k(oe.$$.fragment,h),k(ye.$$.fragment,h),k($e.$$.fragment,h),k(U.$$.fragment,h),k(W.$$.fragment,h),k(Ne.$$.fragment,h),k(He.$$.fragment,h),k(fe.$$.fragment,h),k(Oe.$$.fragment,h),k(D.$$.fragment,h),k(K.$$.fragment,h),k(Z.$$.fragment,h),lt=!1},d(h){h&&(a(p),a(t),a(me),a(ue),a(q),a(ae),a(Le),a(I)),v(e,h),v(o),v(i),v(V),v(X),v(Q),v(H,h),v(oe),v(ye),v($e),v(U),v(W),v(Ne,h),v(He),v(fe),v(Oe),v(D),v(K),v(Z)}}}function Vt(C){let e,p;return e=new ut({props:{$$slots:{default:[St]},$$scope:{ctx:C}}}),{c(){b(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,o){M(e,t,o),p=!0},p(t,o){const g={};o&2&&(g.$$scope={dirty:o,ctx:t}),e.$set(g)},i(t){p||(w(e.$$.fragment,t),p=!0)},o(t){k(e.$$.fragment,t),p=!1},d(t){v(e,t)}}}function Xt(C){let e,p,t,o,g,n,_,te='<a href="https://huggingface.co/models?filter=ctrl"><img alt="Models" src="https://img.shields.io/badge/All_model_pages-ctrl-blueviolet"/></a> <a href="https://huggingface.co/spaces/docs-demos/tiny-ctrl"><img alt="Spaces" src="https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Spaces-blue"/></a>',F,x,P,J,z=`CTRL model was proposed in <a href="https://arxiv.org/abs/1909.05858" rel="nofollow">CTRL: A Conditional Transformer Language Model for Controllable Generation</a> by Nitish Shirish Keskar<em>, Bryan McCann</em>, Lav R. Varshney, Caiming Xiong and
Richard Socher. It’s a causal (unidirectional) transformer pre-trained using language modeling on a very large corpus
of ~140 GB of text data with the first token reserved as a control code (such as Links, Books, Wikipedia etc.).`,E,i,R="The abstract from the paper is the following:",Y,V,ot=`<em>Large-scale language models show promising text generation capabilities, but users cannot easily control particular
aspects of the generated text. We release CTRL, a 1.63 billion-parameter conditional transformer language model,
trained to condition on control codes that govern style, content, and task-specific behavior. Control codes were
derived from structure that naturally co-occurs with raw text, preserving the advantages of unsupervised learning while
providing more explicit control over text generation. These codes also allow CTRL to predict which parts of the
training data are most likely given a sequence. This provides a potential method for analyzing large amounts of data
via model-based source attribution.</em>`,ke,ne,tt=`This model was contributed by <a href="https://huggingface.co/keskarnitishr" rel="nofollow">keskarnitishr</a>. The original code can be found
<a href="https://github.com/salesforce/ctrl" rel="nofollow">here</a>.`,X,be,Q,me,H=`<li>CTRL makes use of control codes to generate text: it requires generations to be started by certain words, sentences
or links to generate coherent text. Refer to the <a href="https://github.com/salesforce/ctrl" rel="nofollow">original implementation</a> for
more information.</li> <li>CTRL is a model with absolute position embeddings so it’s usually advised to pad the inputs on the right rather than
the left.</li> <li>CTRL was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows CTRL to generate syntactically coherent text as it can be
observed in the <em>run_generation.py</em> example script.</li> <li>The PyTorch models can take the <code>past_key_values</code> as input, which is the previously computed key/value attention pairs.
TensorFlow models accepts <code>past</code> as input. Using the <code>past_key_values</code> value prevents the model from re-computing
pre-computed values in the context of text generation. See the <a href="model_doc/ctrl#transformers.CTRLModel.forward"><code>forward</code></a>
method for more information on the usage of this argument.</li>`,ue,q,oe,Fe,Ve='<li><a href="../tasks/sequence_classification">Text classification task guide</a></li> <li><a href="../tasks/language_modeling">Causal language modeling task guide</a></li>',ze,Ie,ve,B,Ue,qe,G,We=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLModel">CTRLModel</a> or a <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.TFCTRLModel">TFCTRLModel</a>. It is used to
instantiate a CTRL model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
<a href="https://huggingface.co/Salesforce/ctrl" rel="nofollow">Salesforce/ctrl</a> architecture from SalesForce.`,ye,he,ie=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,$e,O,Ce,se,Xe,U,Me,W,ae,Ne="Construct a CTRL tokenizer. Based on Byte-Pair-Encoding.",Le,I,He=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`,Ze,we,Be,je,de,Ye,N,re;return g=new Ee({props:{title:"CTRL",local:"ctrl",headingTag:"h1"}}),x=new Ee({props:{title:"Overview",local:"overview",headingTag:"h2"}}),be=new Ee({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),q=new Ee({props:{title:"Resources",local:"resources",headingTag:"h2"}}),Ie=new Ee({props:{title:"CTRLConfig",local:"transformers.CTRLConfig",headingTag:"h2"}}),Ue=new Je({props:{name:"class transformers.CTRLConfig",anchor:"transformers.CTRLConfig",parameters:[{name:"vocab_size",val:" = 246534"},{name:"n_positions",val:" = 256"},{name:"n_embd",val:" = 1280"},{name:"dff",val:" = 8192"},{name:"n_layer",val:" = 48"},{name:"n_head",val:" = 16"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_range",val:" = 0.02"},{name:"use_cache",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CTRLConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 246534) &#x2014;
Vocabulary size of the CTRL model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.CTRLModel">CTRLModel</a> or <a href="/docs/transformers/main/en/model_doc/ctrl#transformers.TFCTRLModel">TFCTRLModel</a>.`,name:"vocab_size"},{anchor:"transformers.CTRLConfig.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"n_positions"},{anchor:"transformers.CTRLConfig.n_embd",description:`<strong>n_embd</strong> (<code>int</code>, <em>optional</em>, defaults to 1280) &#x2014;
Dimensionality of the embeddings and hidden states.`,name:"n_embd"},{anchor:"transformers.CTRLConfig.dff",description:`<strong>dff</strong> (<code>int</code>, <em>optional</em>, defaults to 8192) &#x2014;
Dimensionality of the inner dimension of the feed forward networks (FFN).`,name:"dff"},{anchor:"transformers.CTRLConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 48) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.CTRLConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.CTRLConfig.resid_pdrop",description:`<strong>resid_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"resid_pdrop"},{anchor:"transformers.CTRLConfig.embd_pdrop",description:`<strong>embd_pdrop</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the embeddings.`,name:"embd_pdrop"},{anchor:"transformers.CTRLConfig.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-06) &#x2014;
The epsilon to use in the layer normalization layers`,name:"layer_norm_epsilon"},{anchor:"transformers.CTRLConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.CTRLConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ctrl/configuration_ctrl.py#L28"}}),O=new Ke({props:{anchor:"transformers.CTRLConfig.example",$$slots:{default:[yt]},$$scope:{ctx:C}}}),se=new Ee({props:{title:"CTRLTokenizer",local:"transformers.CTRLTokenizer",headingTag:"h2"}}),Me=new Je({props:{name:"class transformers.CTRLTokenizer",anchor:"transformers.CTRLTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CTRLTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.CTRLTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.CTRLTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ctrl/tokenization_ctrl.py#L119"}}),Be=new Je({props:{name:"save_vocabulary",anchor:"transformers.CTRLTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/ctrl/tokenization_ctrl.py#L226"}}),de=new bt({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[Vt],pytorch:[Jt]},$$scope:{ctx:C}}}),{c(){e=m("meta"),p=r(),t=m("p"),o=r(),b(g.$$.fragment),n=r(),_=m("div"),_.innerHTML=te,F=r(),b(x.$$.fragment),P=r(),J=m("p"),J.innerHTML=z,E=r(),i=m("p"),i.textContent=R,Y=r(),V=m("p"),V.innerHTML=ot,ke=r(),ne=m("p"),ne.innerHTML=tt,X=r(),b(be.$$.fragment),Q=r(),me=m("ul"),me.innerHTML=H,ue=r(),b(q.$$.fragment),oe=r(),Fe=m("ul"),Fe.innerHTML=Ve,ze=r(),b(Ie.$$.fragment),ve=r(),B=m("div"),b(Ue.$$.fragment),qe=r(),G=m("p"),G.innerHTML=We,ye=r(),he=m("p"),he.innerHTML=ie,$e=r(),b(O.$$.fragment),Ce=r(),b(se.$$.fragment),Xe=r(),U=m("div"),b(Me.$$.fragment),W=r(),ae=m("p"),ae.textContent=Ne,Le=r(),I=m("p"),I.innerHTML=He,Ze=r(),we=m("div"),b(Be.$$.fragment),je=r(),b(de.$$.fragment),Ye=r(),N=m("p"),this.h()},l(s){const $=Tt("svelte-u9bgzb",document.head);e=u($,"META",{name:!0,content:!0}),$.forEach(a),p=l(s),t=u(s,"P",{}),Te(t).forEach(a),o=l(s),y(g.$$.fragment,s),n=l(s),_=u(s,"DIV",{class:!0,"data-svelte-h":!0}),T(_)!=="svelte-1jjt97v"&&(_.innerHTML=te),F=l(s),y(x.$$.fragment,s),P=l(s),J=u(s,"P",{"data-svelte-h":!0}),T(J)!=="svelte-z0k74f"&&(J.innerHTML=z),E=l(s),i=u(s,"P",{"data-svelte-h":!0}),T(i)!=="svelte-vfdo9a"&&(i.textContent=R),Y=l(s),V=u(s,"P",{"data-svelte-h":!0}),T(V)!=="svelte-f7zzo4"&&(V.innerHTML=ot),ke=l(s),ne=u(s,"P",{"data-svelte-h":!0}),T(ne)!=="svelte-3n853r"&&(ne.innerHTML=tt),X=l(s),y(be.$$.fragment,s),Q=l(s),me=u(s,"UL",{"data-svelte-h":!0}),T(me)!=="svelte-yfbkp1"&&(me.innerHTML=H),ue=l(s),y(q.$$.fragment,s),oe=l(s),Fe=u(s,"UL",{"data-svelte-h":!0}),T(Fe)!=="svelte-17u5l9r"&&(Fe.innerHTML=Ve),ze=l(s),y(Ie.$$.fragment,s),ve=l(s),B=u(s,"DIV",{class:!0});var A=Te(B);y(Ue.$$.fragment,A),qe=l(A),G=u(A,"P",{"data-svelte-h":!0}),T(G)!=="svelte-1i6i6i6"&&(G.innerHTML=We),ye=l(A),he=u(A,"P",{"data-svelte-h":!0}),T(he)!=="svelte-o55m63"&&(he.innerHTML=ie),$e=l(A),y(O.$$.fragment,A),A.forEach(a),Ce=l(s),y(se.$$.fragment,s),Xe=l(s),U=u(s,"DIV",{class:!0});var ce=Te(U);y(Me.$$.fragment,ce),W=l(ce),ae=u(ce,"P",{"data-svelte-h":!0}),T(ae)!=="svelte-1ry85wb"&&(ae.textContent=Ne),Le=l(ce),I=u(ce,"P",{"data-svelte-h":!0}),T(I)!=="svelte-1c3t5ty"&&(I.innerHTML=He),Ze=l(ce),we=u(ce,"DIV",{class:!0});var Re=Te(we);y(Be.$$.fragment,Re),Re.forEach(a),ce.forEach(a),je=l(s),y(de.$$.fragment,s),Ye=l(s),N=u(s,"P",{}),Te(N).forEach(a),this.h()},h(){pe(e,"name","hf:doc:metadata"),pe(e,"content",Gt),pe(_,"class","flex flex-wrap space-x-1"),pe(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),pe(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),pe(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,$){d(document.head,e),c(s,p,$),c(s,t,$),c(s,o,$),M(g,s,$),c(s,n,$),c(s,_,$),c(s,F,$),M(x,s,$),c(s,P,$),c(s,J,$),c(s,E,$),c(s,i,$),c(s,Y,$),c(s,V,$),c(s,ke,$),c(s,ne,$),c(s,X,$),M(be,s,$),c(s,Q,$),c(s,me,$),c(s,ue,$),M(q,s,$),c(s,oe,$),c(s,Fe,$),c(s,ze,$),M(Ie,s,$),c(s,ve,$),c(s,B,$),M(Ue,B,null),d(B,qe),d(B,G),d(B,ye),d(B,he),d(B,$e),M(O,B,null),c(s,Ce,$),M(se,s,$),c(s,Xe,$),c(s,U,$),M(Me,U,null),d(U,W),d(U,ae),d(U,Le),d(U,I),d(U,Ze),d(U,we),M(Be,we,null),c(s,je,$),M(de,s,$),c(s,Ye,$),c(s,N,$),re=!0},p(s,[$]){const A={};$&2&&(A.$$scope={dirty:$,ctx:s}),O.$set(A);const ce={};$&2&&(ce.$$scope={dirty:$,ctx:s}),de.$set(ce)},i(s){re||(w(g.$$.fragment,s),w(x.$$.fragment,s),w(be.$$.fragment,s),w(q.$$.fragment,s),w(Ie.$$.fragment,s),w(Ue.$$.fragment,s),w(O.$$.fragment,s),w(se.$$.fragment,s),w(Me.$$.fragment,s),w(Be.$$.fragment,s),w(de.$$.fragment,s),re=!0)},o(s){k(g.$$.fragment,s),k(x.$$.fragment,s),k(be.$$.fragment,s),k(q.$$.fragment,s),k(Ie.$$.fragment,s),k(Ue.$$.fragment,s),k(O.$$.fragment,s),k(se.$$.fragment,s),k(Me.$$.fragment,s),k(Be.$$.fragment,s),k(de.$$.fragment,s),re=!1},d(s){s&&(a(p),a(t),a(o),a(n),a(_),a(F),a(P),a(J),a(E),a(i),a(Y),a(V),a(ke),a(ne),a(X),a(Q),a(me),a(ue),a(oe),a(Fe),a(ze),a(ve),a(B),a(Ce),a(Xe),a(U),a(je),a(Ye),a(N)),a(e),v(g,s),v(x,s),v(be,s),v(q,s),v(Ie,s),v(Ue),v(O),v(se,s),v(Me),v(Be),v(de,s)}}}const Gt='{"title":"CTRL","local":"ctrl","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"CTRLConfig","local":"transformers.CTRLConfig","sections":[],"depth":2},{"title":"CTRLTokenizer","local":"transformers.CTRLTokenizer","sections":[],"depth":2},{"title":"CTRLModel","local":"transformers.CTRLModel","sections":[],"depth":2},{"title":"CTRLLMHeadModel","local":"transformers.CTRLLMHeadModel","sections":[],"depth":2},{"title":"CTRLForSequenceClassification","local":"transformers.CTRLForSequenceClassification","sections":[],"depth":2},{"title":"TFCTRLModel","local":"transformers.TFCTRLModel","sections":[],"depth":2},{"title":"TFCTRLLMHeadModel","local":"transformers.TFCTRLLMHeadModel","sections":[],"depth":2},{"title":"TFCTRLForSequenceClassification","local":"transformers.TFCTRLForSequenceClassification","sections":[],"depth":2}],"depth":1}';function Pt(C){return ft(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class tn extends gt{constructor(e){super(),_t(this,e,Pt,Xt,ht,{})}}export{tn as component};
