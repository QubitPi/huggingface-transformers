import{s as Ta,o as Ma,n as C}from"../chunks/scheduler.9bc65507.js";import{S as wa,i as va,g as c,s,r as h,A as za,h as p,f as l,c as a,j as v,u as f,x as u,k as z,y as o,a as m,v as g,d as _,t as y,w as k}from"../chunks/index.707bf1b6.js";import{T as fe}from"../chunks/Tip.c2ecdbf4.js";import{D as L}from"../chunks/Docstring.17db21ae.js";import{C as ae}from"../chunks/CodeBlock.54a9f38d.js";import{E as ue}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as N}from"../chunks/Heading.342b1fa6.js";function ja(w){let t,b="Examples:",i,d,T;return d=new ae({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEx1a2VDb25maWclMkMlMjBMdWtlTW9kZWwlMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwTFVLRSUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwTHVrZUNvbmZpZygpJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyMG1vZGVsJTIwZnJvbSUyMHRoZSUyMGNvbmZpZ3VyYXRpb24lMEFtb2RlbCUyMCUzRCUyMEx1a2VNb2RlbChjb25maWd1cmF0aW9uKSUwQSUwQSUyMyUyMEFjY2Vzc2luZyUyMHRoZSUyMG1vZGVsJTIwY29uZmlndXJhdGlvbiUwQWNvbmZpZ3VyYXRpb24lMjAlM0QlMjBtb2RlbC5jb25maWc=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LukeConfig, LukeModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a LUKE configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = LukeConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LukeModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){t=c("p"),t.textContent=b,i=s(),h(d.$$.fragment)},l(n){t=p(n,"P",{"data-svelte-h":!0}),u(t)!=="svelte-kvfsh7"&&(t.textContent=b),i=a(n),f(d.$$.fragment,n)},m(n,M){m(n,t,M),m(n,i,M),g(d,n,M),T=!0},p:C,i(n){T||(_(d.$$.fragment,n),T=!0)},o(n){y(d.$$.fragment,n),T=!1},d(n){n&&(l(t),l(i)),k(d,n)}}}function La(w){let t,b="be encoded differently whether it is at the beginning of the sentence (without space) or not:",i,d,T;return d=new ae({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEx1a2VUb2tlbml6ZXIlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBMdWtlVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJzdHVkaW8tb3VzaWElMkZsdWtlLWJhc2UlMjIpJTBBdG9rZW5pemVyKCUyMkhlbGxvJTIwd29ybGQlMjIpJTVCJTIyaW5wdXRfaWRzJTIyJTVEJTBBJTBBdG9rZW5pemVyKCUyMiUyMEhlbGxvJTIwd29ybGQlMjIpJTVCJTIyaW5wdXRfaWRzJTIyJTVE",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LukeTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LukeTokenizer.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
[<span class="hljs-number">0</span>, <span class="hljs-number">31414</span>, <span class="hljs-number">232</span>, <span class="hljs-number">2</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
[<span class="hljs-number">0</span>, <span class="hljs-number">20920</span>, <span class="hljs-number">232</span>, <span class="hljs-number">2</span>]`,wrap:!1}}),{c(){t=c("p"),t.textContent=b,i=s(),h(d.$$.fragment)},l(n){t=p(n,"P",{"data-svelte-h":!0}),u(t)!=="svelte-12atnao"&&(t.textContent=b),i=a(n),f(d.$$.fragment,n)},m(n,M){m(n,t,M),m(n,i,M),g(d,n,M),T=!0},p:C,i(n){T||(_(d.$$.fragment,n),T=!0)},o(n){y(d.$$.fragment,n),T=!1},d(n){n&&(l(t),l(i)),k(d,n)}}}function Ja(w){let t,b="When used with <code>is_split_into_words=True</code>, this tokenizer will add a space before each word (even the first one).";return{c(){t=c("p"),t.innerHTML=b},l(i){t=p(i,"P",{"data-svelte-h":!0}),u(t)!=="svelte-jhmxzm"&&(t.innerHTML=b)},m(i,d){m(i,t,d)},p:C,d(i){i&&l(t)}}}function Ca(w){let t,b=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=b},l(i){t=p(i,"P",{"data-svelte-h":!0}),u(t)!=="svelte-fincs2"&&(t.innerHTML=b)},m(i,d){m(i,t,d)},p:C,d(i){i&&l(t)}}}function xa(w){let t,b="Examples:",i,d,T;return d=new ae({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBMdWtlTW9kZWwlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJzdHVkaW8tb3VzaWElMkZsdWtlLWJhc2UlMjIpJTBBbW9kZWwlMjAlM0QlMjBMdWtlTW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMnN0dWRpby1vdXNpYSUyRmx1a2UtYmFzZSUyMiklMEElMEF0ZXh0JTIwJTNEJTIwJTIyQmV5b25jJUMzJUE5JTIwbGl2ZXMlMjBpbiUyMExvcyUyMEFuZ2VsZXMuJTIyJTBBZW50aXR5X3NwYW5zJTIwJTNEJTIwJTVCKDAlMkMlMjA3KSU1RCUyMCUyMCUyMyUyMGNoYXJhY3Rlci1iYXNlZCUyMGVudGl0eSUyMHNwYW4lMjBjb3JyZXNwb25kaW5nJTIwdG8lMjAlMjJCZXlvbmMlQzMlQTklMjIlMEElMEFlbmNvZGluZyUyMCUzRCUyMHRva2VuaXplcih0ZXh0JTJDJTIwZW50aXR5X3NwYW5zJTNEZW50aXR5X3NwYW5zJTJDJTIwYWRkX3ByZWZpeF9zcGFjZSUzRFRydWUlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmVuY29kaW5nKSUwQXdvcmRfbGFzdF9oaWRkZW5fc3RhdGUlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRlJTBBZW50aXR5X2xhc3RfaGlkZGVuX3N0YXRlJTIwJTNEJTIwb3V0cHV0cy5lbnRpdHlfbGFzdF9oaWRkZW5fc3RhdGUlMEElMEF0ZXh0JTIwJTNEJTIwJTIyQmV5b25jJUMzJUE5JTIwbGl2ZXMlMjBpbiUyMExvcyUyMEFuZ2VsZXMuJTIyJTBBZW50aXRpZXMlMjAlM0QlMjAlNUIlMEElMjAlMjAlMjAlMjAlMjJCZXlvbmMlQzMlQTklMjIlMkMlMEElMjAlMjAlMjAlMjAlMjJMb3MlMjBBbmdlbGVzJTIyJTJDJTBBJTVEJTIwJTIwJTIzJTIwV2lraXBlZGlhJTIwZW50aXR5JTIwdGl0bGVzJTIwY29ycmVzcG9uZGluZyUyMHRvJTIwdGhlJTIwZW50aXR5JTIwbWVudGlvbnMlMjAlMjJCZXlvbmMlQzMlQTklMjIlMjBhbmQlMjAlMjJMb3MlMjBBbmdlbGVzJTIyJTBBZW50aXR5X3NwYW5zJTIwJTNEJTIwJTVCJTBBJTIwJTIwJTIwJTIwKDAlMkMlMjA3KSUyQyUwQSUyMCUyMCUyMCUyMCgxNyUyQyUyMDI4KSUyQyUwQSU1RCUyMCUyMCUyMyUyMGNoYXJhY3Rlci1iYXNlZCUyMGVudGl0eSUyMHNwYW5zJTIwY29ycmVzcG9uZGluZyUyMHRvJTIwJTIyQmV5b25jJUMzJUE5JTIyJTIwYW5kJTIwJTIyTG9zJTIwQW5nZWxlcyUyMiUwQSUwQWVuY29kaW5nJTIwJTNEJTIwdG9rZW5pemVyKCUwQSUyMCUyMCUyMCUyMHRleHQlMkMlMjBlbnRpdGllcyUzRGVudGl0aWVzJTJDJTIwZW50aXR5X3NwYW5zJTNEZW50aXR5X3NwYW5zJTJDJTIwYWRkX3ByZWZpeF9zcGFjZSUzRFRydWUlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTBBKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmVuY29kaW5nKSUwQXdvcmRfbGFzdF9oaWRkZW5fc3RhdGUlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRlJTBBZW50aXR5X2xhc3RfaGlkZGVuX3N0YXRlJTIwJTNEJTIwb3V0cHV0cy5lbnRpdHlfbGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, LukeModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LukeModel.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-base&quot;</span>)
<span class="hljs-comment"># Compute the contextualized entity representation corresponding to the entity mention &quot;Beyoncé&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;Beyoncé lives in Los Angeles.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>entity_spans = [(<span class="hljs-number">0</span>, <span class="hljs-number">7</span>)]  <span class="hljs-comment"># character-based entity span corresponding to &quot;Beyoncé&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(text, entity_spans=entity_spans, add_prefix_space=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>word_last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>entity_last_hidden_state = outputs.entity_last_hidden_state
<span class="hljs-comment"># Input Wikipedia entities to obtain enriched contextualized representations of word tokens</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;Beyoncé lives in Los Angeles.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>entities = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Beyoncé&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Los Angeles&quot;</span>,
<span class="hljs-meta">... </span>]  <span class="hljs-comment"># Wikipedia entity titles corresponding to the entity mentions &quot;Beyoncé&quot; and &quot;Los Angeles&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>entity_spans = [
<span class="hljs-meta">... </span>    (<span class="hljs-number">0</span>, <span class="hljs-number">7</span>),
<span class="hljs-meta">... </span>    (<span class="hljs-number">17</span>, <span class="hljs-number">28</span>),
<span class="hljs-meta">... </span>]  <span class="hljs-comment"># character-based entity spans corresponding to &quot;Beyoncé&quot; and &quot;Los Angeles&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(
<span class="hljs-meta">... </span>    text, entities=entities, entity_spans=entity_spans, add_prefix_space=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>word_last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>entity_last_hidden_state = outputs.entity_last_hidden_state`,wrap:!1}}),{c(){t=c("p"),t.textContent=b,i=s(),h(d.$$.fragment)},l(n){t=p(n,"P",{"data-svelte-h":!0}),u(t)!=="svelte-kvfsh7"&&(t.textContent=b),i=a(n),f(d.$$.fragment,n)},m(n,M){m(n,t,M),m(n,i,M),g(d,n,M),T=!0},p:C,i(n){T||(_(d.$$.fragment,n),T=!0)},o(n){y(d.$$.fragment,n),T=!1},d(n){n&&(l(t),l(i)),k(d,n)}}}function $a(w){let t,b=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=b},l(i){t=p(i,"P",{"data-svelte-h":!0}),u(t)!=="svelte-fincs2"&&(t.innerHTML=b)},m(i,d){m(i,t,d)},p:C,d(i){i&&l(t)}}}function Ua(w){let t,b=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=b},l(i){t=p(i,"P",{"data-svelte-h":!0}),u(t)!=="svelte-fincs2"&&(t.innerHTML=b)},m(i,d){m(i,t,d)},p:C,d(i){i&&l(t)}}}function Fa(w){let t,b="Examples:",i,d,T;return d=new ae({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBMdWtlRm9yRW50aXR5Q2xhc3NpZmljYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJzdHVkaW8tb3VzaWElMkZsdWtlLWxhcmdlLWZpbmV0dW5lZC1vcGVuLWVudGl0eSUyMiklMEFtb2RlbCUyMCUzRCUyMEx1a2VGb3JFbnRpdHlDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyc3R1ZGlvLW91c2lhJTJGbHVrZS1sYXJnZS1maW5ldHVuZWQtb3Blbi1lbnRpdHklMjIpJTBBJTBBdGV4dCUyMCUzRCUyMCUyMkJleW9uYyVDMyVBOSUyMGxpdmVzJTIwaW4lMjBMb3MlMjBBbmdlbGVzLiUyMiUwQWVudGl0eV9zcGFucyUyMCUzRCUyMCU1QigwJTJDJTIwNyklNUQlMjAlMjAlMjMlMjBjaGFyYWN0ZXItYmFzZWQlMjBlbnRpdHklMjBzcGFuJTIwY29ycmVzcG9uZGluZyUyMHRvJTIwJTIyQmV5b25jJUMzJUE5JTIyJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKHRleHQlMkMlMjBlbnRpdHlfc3BhbnMlM0RlbnRpdHlfc3BhbnMlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEFsb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cyUwQXByZWRpY3RlZF9jbGFzc19pZHglMjAlM0QlMjBsb2dpdHMuYXJnbWF4KC0xKS5pdGVtKCklMEFwcmludCglMjJQcmVkaWN0ZWQlMjBjbGFzcyUzQSUyMiUyQyUyMG1vZGVsLmNvbmZpZy5pZDJsYWJlbCU1QnByZWRpY3RlZF9jbGFzc19pZHglNUQp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, LukeForEntityClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-large-finetuned-open-entity&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LukeForEntityClassification.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-large-finetuned-open-entity&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;Beyoncé lives in Los Angeles.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>entity_spans = [(<span class="hljs-number">0</span>, <span class="hljs-number">7</span>)]  <span class="hljs-comment"># character-based entity span corresponding to &quot;Beyoncé&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, entity_spans=entity_spans, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_idx = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx])
Predicted <span class="hljs-keyword">class</span>: person`,wrap:!1}}),{c(){t=c("p"),t.textContent=b,i=s(),h(d.$$.fragment)},l(n){t=p(n,"P",{"data-svelte-h":!0}),u(t)!=="svelte-kvfsh7"&&(t.textContent=b),i=a(n),f(d.$$.fragment,n)},m(n,M){m(n,t,M),m(n,i,M),g(d,n,M),T=!0},p:C,i(n){T||(_(d.$$.fragment,n),T=!0)},o(n){y(d.$$.fragment,n),T=!1},d(n){n&&(l(t),l(i)),k(d,n)}}}function Wa(w){let t,b=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=b},l(i){t=p(i,"P",{"data-svelte-h":!0}),u(t)!=="svelte-fincs2"&&(t.innerHTML=b)},m(i,d){m(i,t,d)},p:C,d(i){i&&l(t)}}}function Ia(w){let t,b="Examples:",i,d,T;return d=new ae({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBMdWtlRm9yRW50aXR5UGFpckNsYXNzaWZpY2F0aW9uJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyc3R1ZGlvLW91c2lhJTJGbHVrZS1sYXJnZS1maW5ldHVuZWQtdGFjcmVkJTIyKSUwQW1vZGVsJTIwJTNEJTIwTHVrZUZvckVudGl0eVBhaXJDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyc3R1ZGlvLW91c2lhJTJGbHVrZS1sYXJnZS1maW5ldHVuZWQtdGFjcmVkJTIyKSUwQSUwQXRleHQlMjAlM0QlMjAlMjJCZXlvbmMlQzMlQTklMjBsaXZlcyUyMGluJTIwTG9zJTIwQW5nZWxlcy4lMjIlMEFlbnRpdHlfc3BhbnMlMjAlM0QlMjAlNUIlMEElMjAlMjAlMjAlMjAoMCUyQyUyMDcpJTJDJTBBJTIwJTIwJTIwJTIwKDE3JTJDJTIwMjgpJTJDJTBBJTVEJTIwJTIwJTIzJTIwY2hhcmFjdGVyLWJhc2VkJTIwZW50aXR5JTIwc3BhbnMlMjBjb3JyZXNwb25kaW5nJTIwdG8lMjAlMjJCZXlvbmMlQzMlQTklMjIlMjBhbmQlMjAlMjJMb3MlMjBBbmdlbGVzJTIyJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKHRleHQlMkMlMjBlbnRpdHlfc3BhbnMlM0RlbnRpdHlfc3BhbnMlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEFsb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cyUwQXByZWRpY3RlZF9jbGFzc19pZHglMjAlM0QlMjBsb2dpdHMuYXJnbWF4KC0xKS5pdGVtKCklMEFwcmludCglMjJQcmVkaWN0ZWQlMjBjbGFzcyUzQSUyMiUyQyUyMG1vZGVsLmNvbmZpZy5pZDJsYWJlbCU1QnByZWRpY3RlZF9jbGFzc19pZHglNUQp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, LukeForEntityPairClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-large-finetuned-tacred&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LukeForEntityPairClassification.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-large-finetuned-tacred&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;Beyoncé lives in Los Angeles.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>entity_spans = [
<span class="hljs-meta">... </span>    (<span class="hljs-number">0</span>, <span class="hljs-number">7</span>),
<span class="hljs-meta">... </span>    (<span class="hljs-number">17</span>, <span class="hljs-number">28</span>),
<span class="hljs-meta">... </span>]  <span class="hljs-comment"># character-based entity spans corresponding to &quot;Beyoncé&quot; and &quot;Los Angeles&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, entity_spans=entity_spans, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_idx = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx])
Predicted <span class="hljs-keyword">class</span>: per:cities_of_residence`,wrap:!1}}),{c(){t=c("p"),t.textContent=b,i=s(),h(d.$$.fragment)},l(n){t=p(n,"P",{"data-svelte-h":!0}),u(t)!=="svelte-kvfsh7"&&(t.textContent=b),i=a(n),f(d.$$.fragment,n)},m(n,M){m(n,t,M),m(n,i,M),g(d,n,M),T=!0},p:C,i(n){T||(_(d.$$.fragment,n),T=!0)},o(n){y(d.$$.fragment,n),T=!1},d(n){n&&(l(t),l(i)),k(d,n)}}}function Za(w){let t,b=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=b},l(i){t=p(i,"P",{"data-svelte-h":!0}),u(t)!=="svelte-fincs2"&&(t.innerHTML=b)},m(i,d){m(i,t,d)},p:C,d(i){i&&l(t)}}}function qa(w){let t,b="Examples:",i,d,T;return d=new ae({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBMdWtlRm9yRW50aXR5U3BhbkNsYXNzaWZpY2F0aW9uJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyc3R1ZGlvLW91c2lhJTJGbHVrZS1sYXJnZS1maW5ldHVuZWQtY29ubGwtMjAwMyUyMiklMEFtb2RlbCUyMCUzRCUyMEx1a2VGb3JFbnRpdHlTcGFuQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMnN0dWRpby1vdXNpYSUyRmx1a2UtbGFyZ2UtZmluZXR1bmVkLWNvbmxsLTIwMDMlMjIpJTBBJTBBdGV4dCUyMCUzRCUyMCUyMkJleW9uYyVDMyVBOSUyMGxpdmVzJTIwaW4lMjBMb3MlMjBBbmdlbGVzJTIyJTBBJTBBd29yZF9zdGFydF9wb3NpdGlvbnMlMjAlM0QlMjAlNUIwJTJDJTIwOCUyQyUyMDE0JTJDJTIwMTclMkMlMjAyMSU1RCUyMCUyMCUyMyUyMGNoYXJhY3Rlci1iYXNlZCUyMHN0YXJ0JTIwcG9zaXRpb25zJTIwb2YlMjB3b3JkJTIwdG9rZW5zJTBBd29yZF9lbmRfcG9zaXRpb25zJTIwJTNEJTIwJTVCNyUyQyUyMDEzJTJDJTIwMTYlMkMlMjAyMCUyQyUyMDI4JTVEJTIwJTIwJTIzJTIwY2hhcmFjdGVyLWJhc2VkJTIwZW5kJTIwcG9zaXRpb25zJTIwb2YlMjB3b3JkJTIwdG9rZW5zJTBBZW50aXR5X3NwYW5zJTIwJTNEJTIwJTVCJTVEJTBBZm9yJTIwaSUyQyUyMHN0YXJ0X3BvcyUyMGluJTIwZW51bWVyYXRlKHdvcmRfc3RhcnRfcG9zaXRpb25zKSUzQSUwQSUyMCUyMCUyMCUyMGZvciUyMGVuZF9wb3MlMjBpbiUyMHdvcmRfZW5kX3Bvc2l0aW9ucyU1QmklM0ElNUQlM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBlbnRpdHlfc3BhbnMuYXBwZW5kKChzdGFydF9wb3MlMkMlMjBlbmRfcG9zKSklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIodGV4dCUyQyUyMGVudGl0eV9zcGFucyUzRGVudGl0eV9zcGFucyUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQWxvZ2l0cyUyMCUzRCUyMG91dHB1dHMubG9naXRzJTBBcHJlZGljdGVkX2NsYXNzX2luZGljZXMlMjAlM0QlMjBsb2dpdHMuYXJnbWF4KC0xKS5zcXVlZXplKCkudG9saXN0KCklMEFmb3IlMjBzcGFuJTJDJTIwcHJlZGljdGVkX2NsYXNzX2lkeCUyMGluJTIwemlwKGVudGl0eV9zcGFucyUyQyUyMHByZWRpY3RlZF9jbGFzc19pbmRpY2VzKSUzQSUwQSUyMCUyMCUyMCUyMGlmJTIwcHJlZGljdGVkX2NsYXNzX2lkeCUyMCElM0QlMjAwJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcHJpbnQodGV4dCU1QnNwYW4lNUIwJTVEJTIwJTNBJTIwc3BhbiU1QjElNUQlNUQlMkMlMjBtb2RlbC5jb25maWcuaWQybGFiZWwlNUJwcmVkaWN0ZWRfY2xhc3NfaWR4JTVEKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, LukeForEntitySpanClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-large-finetuned-conll-2003&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LukeForEntitySpanClassification.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-large-finetuned-conll-2003&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;Beyoncé lives in Los Angeles&quot;</span>
<span class="hljs-comment"># List all possible entity spans in the text</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>word_start_positions = [<span class="hljs-number">0</span>, <span class="hljs-number">8</span>, <span class="hljs-number">14</span>, <span class="hljs-number">17</span>, <span class="hljs-number">21</span>]  <span class="hljs-comment"># character-based start positions of word tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>word_end_positions = [<span class="hljs-number">7</span>, <span class="hljs-number">13</span>, <span class="hljs-number">16</span>, <span class="hljs-number">20</span>, <span class="hljs-number">28</span>]  <span class="hljs-comment"># character-based end positions of word tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>entity_spans = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> i, start_pos <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(word_start_positions):
<span class="hljs-meta">... </span>    <span class="hljs-keyword">for</span> end_pos <span class="hljs-keyword">in</span> word_end_positions[i:]:
<span class="hljs-meta">... </span>        entity_spans.append((start_pos, end_pos))

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, entity_spans=entity_spans, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_indices = logits.argmax(-<span class="hljs-number">1</span>).squeeze().tolist()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> span, predicted_class_idx <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(entity_spans, predicted_class_indices):
<span class="hljs-meta">... </span>    <span class="hljs-keyword">if</span> predicted_class_idx != <span class="hljs-number">0</span>:
<span class="hljs-meta">... </span>        <span class="hljs-built_in">print</span>(text[span[<span class="hljs-number">0</span>] : span[<span class="hljs-number">1</span>]], model.config.id2label[predicted_class_idx])
Beyoncé PER
Los Angeles LOC`,wrap:!1}}),{c(){t=c("p"),t.textContent=b,i=s(),h(d.$$.fragment)},l(n){t=p(n,"P",{"data-svelte-h":!0}),u(t)!=="svelte-kvfsh7"&&(t.textContent=b),i=a(n),f(d.$$.fragment,n)},m(n,M){m(n,t,M),m(n,i,M),g(d,n,M),T=!0},p:C,i(n){T||(_(d.$$.fragment,n),T=!0)},o(n){y(d.$$.fragment,n),T=!1},d(n){n&&(l(t),l(i)),k(d,n)}}}function Ba(w){let t,b=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=b},l(i){t=p(i,"P",{"data-svelte-h":!0}),u(t)!=="svelte-fincs2"&&(t.innerHTML=b)},m(i,d){m(i,t,d)},p:C,d(i){i&&l(t)}}}function Na(w){let t,b="Example of single-label classification:",i,d,T;return d=new ae({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEx1a2VGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyc3R1ZGlvLW91c2lhJTJGbHVrZS1iYXNlJTIyKSUwQW1vZGVsJTIwJTNEJTIwTHVrZUZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMnN0dWRpby1vdXNpYSUyRmx1a2UtYmFzZSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEFwcmVkaWN0ZWRfY2xhc3NfaWQlMjAlM0QlMjBsb2dpdHMuYXJnbWF4KCkuaXRlbSgpJTBBJTBBJTIzJTIwVG8lMjB0cmFpbiUyMGElMjBtb2RlbCUyMG9uJTIwJTYwbnVtX2xhYmVscyU2MCUyMGNsYXNzZXMlMkMlMjB5b3UlMjBjYW4lMjBwYXNzJTIwJTYwbnVtX2xhYmVscyUzRG51bV9sYWJlbHMlNjAlMjB0byUyMCU2MC5mcm9tX3ByZXRyYWluZWQoLi4uKSU2MCUwQW51bV9sYWJlbHMlMjAlM0QlMjBsZW4obW9kZWwuY29uZmlnLmlkMmxhYmVsKSUwQW1vZGVsJTIwJTNEJTIwTHVrZUZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMnN0dWRpby1vdXNpYSUyRmx1a2UtYmFzZSUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzKSUwQSUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxJTVEKSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, LukeForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LukeForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LukeForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){t=c("p"),t.textContent=b,i=s(),h(d.$$.fragment)},l(n){t=p(n,"P",{"data-svelte-h":!0}),u(t)!=="svelte-ykxpe4"&&(t.textContent=b),i=a(n),f(d.$$.fragment,n)},m(n,M){m(n,t,M),m(n,i,M),g(d,n,M),T=!0},p:C,i(n){T||(_(d.$$.fragment,n),T=!0)},o(n){y(d.$$.fragment,n),T=!1},d(n){n&&(l(t),l(i)),k(d,n)}}}function Ea(w){let t,b="Example of multi-label classification:",i,d,T;return d=new ae({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEx1a2VGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyc3R1ZGlvLW91c2lhJTJGbHVrZS1iYXNlJTIyKSUwQW1vZGVsJTIwJTNEJTIwTHVrZUZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMnN0dWRpby1vdXNpYSUyRmx1a2UtYmFzZSUyMiUyQyUyMHByb2JsZW1fdHlwZSUzRCUyMm11bHRpX2xhYmVsX2NsYXNzaWZpY2F0aW9uJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEElMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQXByZWRpY3RlZF9jbGFzc19pZHMlMjAlM0QlMjB0b3JjaC5hcmFuZ2UoMCUyQyUyMGxvZ2l0cy5zaGFwZSU1Qi0xJTVEKSU1QnRvcmNoLnNpZ21vaWQobG9naXRzKS5zcXVlZXplKGRpbSUzRDApJTIwJTNFJTIwMC41JTVEJTBBJTBBJTIzJTIwVG8lMjB0cmFpbiUyMGElMjBtb2RlbCUyMG9uJTIwJTYwbnVtX2xhYmVscyU2MCUyMGNsYXNzZXMlMkMlMjB5b3UlMjBjYW4lMjBwYXNzJTIwJTYwbnVtX2xhYmVscyUzRG51bV9sYWJlbHMlNjAlMjB0byUyMCU2MC5mcm9tX3ByZXRyYWluZWQoLi4uKSU2MCUwQW51bV9sYWJlbHMlMjAlM0QlMjBsZW4obW9kZWwuY29uZmlnLmlkMmxhYmVsKSUwQW1vZGVsJTIwJTNEJTIwTHVrZUZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUwQSUyMCUyMCUyMCUyMCUyMnN0dWRpby1vdXNpYSUyRmx1a2UtYmFzZSUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIlMEEpJTBBJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2guc3VtKCUwQSUyMCUyMCUyMCUyMHRvcmNoLm5uLmZ1bmN0aW9uYWwub25lX2hvdChwcmVkaWN0ZWRfY2xhc3NfaWRzJTVCTm9uZSUyQyUyMCUzQSU1RC5jbG9uZSgpJTJDJTIwbnVtX2NsYXNzZXMlM0RudW1fbGFiZWxzKSUyQyUyMGRpbSUzRDElMEEpLnRvKHRvcmNoLmZsb2F0KSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, LukeForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LukeForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.arange(<span class="hljs-number">0</span>, logits.shape[-<span class="hljs-number">1</span>])[torch.sigmoid(logits).squeeze(dim=<span class="hljs-number">0</span>) &gt; <span class="hljs-number">0.5</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LukeForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;studio-ousia/luke-base&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.<span class="hljs-built_in">sum</span>(
<span class="hljs-meta">... </span>    torch.nn.functional.one_hot(predicted_class_ids[<span class="hljs-literal">None</span>, :].clone(), num_classes=num_labels), dim=<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>).to(torch.<span class="hljs-built_in">float</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){t=c("p"),t.textContent=b,i=s(),h(d.$$.fragment)},l(n){t=p(n,"P",{"data-svelte-h":!0}),u(t)!=="svelte-1l8e32d"&&(t.textContent=b),i=a(n),f(d.$$.fragment,n)},m(n,M){m(n,t,M),m(n,i,M),g(d,n,M),T=!0},p:C,i(n){T||(_(d.$$.fragment,n),T=!0)},o(n){y(d.$$.fragment,n),T=!1},d(n){n&&(l(t),l(i)),k(d,n)}}}function Ra(w){let t,b=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=b},l(i){t=p(i,"P",{"data-svelte-h":!0}),u(t)!=="svelte-fincs2"&&(t.innerHTML=b)},m(i,d){m(i,t,d)},p:C,d(i){i&&l(t)}}}function Ga(w){let t,b="Example:",i,d,T;return d=new ae({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBMdWtlRm9yTXVsdGlwbGVDaG9pY2UlMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMnN0dWRpby1vdXNpYSUyRmx1a2UtYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyMEx1a2VGb3JNdWx0aXBsZUNob2ljZS5mcm9tX3ByZXRyYWluZWQoJTIyc3R1ZGlvLW91c2lhJTJGbHVrZS1iYXNlJTIyKSUwQSUwQXByb21wdCUyMCUzRCUyMCUyMkluJTIwSXRhbHklMkMlMjBwaXp6YSUyMHNlcnZlZCUyMGluJTIwZm9ybWFsJTIwc2V0dGluZ3MlMkMlMjBzdWNoJTIwYXMlMjBhdCUyMGElMjByZXN0YXVyYW50JTJDJTIwaXMlMjBwcmVzZW50ZWQlMjB1bnNsaWNlZC4lMjIlMEFjaG9pY2UwJTIwJTNEJTIwJTIySXQlMjBpcyUyMGVhdGVuJTIwd2l0aCUyMGElMjBmb3JrJTIwYW5kJTIwYSUyMGtuaWZlLiUyMiUwQWNob2ljZTElMjAlM0QlMjAlMjJJdCUyMGlzJTIwZWF0ZW4lMjB3aGlsZSUyMGhlbGQlMjBpbiUyMHRoZSUyMGhhbmQuJTIyJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2gudGVuc29yKDApLnVuc3F1ZWV6ZSgwKSUyMCUyMCUyMyUyMGNob2ljZTAlMjBpcyUyMGNvcnJlY3QlMjAoYWNjb3JkaW5nJTIwdG8lMjBXaWtpcGVkaWElMjAlM0IpKSUyQyUyMGJhdGNoJTIwc2l6ZSUyMDElMEElMEFlbmNvZGluZyUyMCUzRCUyMHRva2VuaXplciglNUJwcm9tcHQlMkMlMjBwcm9tcHQlNUQlMkMlMjAlNUJjaG9pY2UwJTJDJTIwY2hvaWNlMSU1RCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIlMkMlMjBwYWRkaW5nJTNEVHJ1ZSklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKiolN0JrJTNBJTIwdi51bnNxdWVlemUoMCklMjBmb3IlMjBrJTJDJTIwdiUyMGluJTIwZW5jb2RpbmcuaXRlbXMoKSU3RCUyQyUyMGxhYmVscyUzRGxhYmVscyklMjAlMjAlMjMlMjBiYXRjaCUyMHNpemUlMjBpcyUyMDElMEElMEElMjMlMjB0aGUlMjBsaW5lYXIlMjBjbGFzc2lmaWVyJTIwc3RpbGwlMjBuZWVkcyUyMHRvJTIwYmUlMjB0cmFpbmVkJTBBbG9zcyUyMCUzRCUyMG91dHB1dHMubG9zcyUwQWxvZ2l0cyUyMCUzRCUyMG91dHB1dHMubG9naXRz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, LukeForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LukeForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){t=c("p"),t.textContent=b,i=s(),h(d.$$.fragment)},l(n){t=p(n,"P",{"data-svelte-h":!0}),u(t)!=="svelte-11lpom8"&&(t.textContent=b),i=a(n),f(d.$$.fragment,n)},m(n,M){m(n,t,M),m(n,i,M),g(d,n,M),T=!0},p:C,i(n){T||(_(d.$$.fragment,n),T=!0)},o(n){y(d.$$.fragment,n),T=!1},d(n){n&&(l(t),l(i)),k(d,n)}}}function Va(w){let t,b=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=b},l(i){t=p(i,"P",{"data-svelte-h":!0}),u(t)!=="svelte-fincs2"&&(t.innerHTML=b)},m(i,d){m(i,t,d)},p:C,d(i){i&&l(t)}}}function Xa(w){let t,b="Example:",i,d,T;return d=new ae({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBMdWtlRm9yVG9rZW5DbGFzc2lmaWNhdGlvbiUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyc3R1ZGlvLW91c2lhJTJGbHVrZS1iYXNlJTIyKSUwQW1vZGVsJTIwJTNEJTIwTHVrZUZvclRva2VuQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMnN0dWRpby1vdXNpYSUyRmx1a2UtYmFzZSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTBBJTIwJTIwJTIwJTIwJTIySHVnZ2luZ0ZhY2UlMjBpcyUyMGElMjBjb21wYW55JTIwYmFzZWQlMjBpbiUyMFBhcmlzJTIwYW5kJTIwTmV3JTIwWW9yayUyMiUyQyUyMGFkZF9zcGVjaWFsX3Rva2VucyUzREZhbHNlJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiUwQSklMEElMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQXByZWRpY3RlZF90b2tlbl9jbGFzc19pZHMlMjAlM0QlMjBsb2dpdHMuYXJnbWF4KC0xKSUwQSUwQSUyMyUyME5vdGUlMjB0aGF0JTIwdG9rZW5zJTIwYXJlJTIwY2xhc3NpZmllZCUyMHJhdGhlciUyMHRoZW4lMjBpbnB1dCUyMHdvcmRzJTIwd2hpY2glMjBtZWFucyUyMHRoYXQlMEElMjMlMjB0aGVyZSUyMG1pZ2h0JTIwYmUlMjBtb3JlJTIwcHJlZGljdGVkJTIwdG9rZW4lMjBjbGFzc2VzJTIwdGhhbiUyMHdvcmRzLiUwQSUyMyUyME11bHRpcGxlJTIwdG9rZW4lMjBjbGFzc2VzJTIwbWlnaHQlMjBhY2NvdW50JTIwZm9yJTIwdGhlJTIwc2FtZSUyMHdvcmQlMEFwcmVkaWN0ZWRfdG9rZW5zX2NsYXNzZXMlMjAlM0QlMjAlNUJtb2RlbC5jb25maWcuaWQybGFiZWwlNUJ0Lml0ZW0oKSU1RCUyMGZvciUyMHQlMjBpbiUyMHByZWRpY3RlZF90b2tlbl9jbGFzc19pZHMlNUIwJTVEJTVEJTBBJTBBbGFiZWxzJTIwJTNEJTIwcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, LukeForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LukeForTokenClassification.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-base&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){t=c("p"),t.textContent=b,i=s(),h(d.$$.fragment)},l(n){t=p(n,"P",{"data-svelte-h":!0}),u(t)!=="svelte-11lpom8"&&(t.textContent=b),i=a(n),f(d.$$.fragment,n)},m(n,M){m(n,t,M),m(n,i,M),g(d,n,M),T=!0},p:C,i(n){T||(_(d.$$.fragment,n),T=!0)},o(n){y(d.$$.fragment,n),T=!1},d(n){n&&(l(t),l(i)),k(d,n)}}}function Sa(w){let t,b=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=b},l(i){t=p(i,"P",{"data-svelte-h":!0}),u(t)!=="svelte-fincs2"&&(t.innerHTML=b)},m(i,d){m(i,t,d)},p:C,d(i){i&&l(t)}}}function Ha(w){let t,b="Example:",i,d,T;return d=new ae({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBMdWtlRm9yUXVlc3Rpb25BbnN3ZXJpbmclMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMnN0dWRpby1vdXNpYSUyRmx1a2UtYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyMEx1a2VGb3JRdWVzdGlvbkFuc3dlcmluZy5mcm9tX3ByZXRyYWluZWQoJTIyc3R1ZGlvLW91c2lhJTJGbHVrZS1iYXNlJTIyKSUwQSUwQXF1ZXN0aW9uJTJDJTIwdGV4dCUyMCUzRCUyMCUyMldobyUyMHdhcyUyMEppbSUyMEhlbnNvbiUzRiUyMiUyQyUyMCUyMkppbSUyMEhlbnNvbiUyMHdhcyUyMGElMjBuaWNlJTIwcHVwcGV0JTIyJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKHF1ZXN0aW9uJTJDJTIwdGV4dCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMG91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEFhbnN3ZXJfc3RhcnRfaW5kZXglMjAlM0QlMjBvdXRwdXRzLnN0YXJ0X2xvZ2l0cy5hcmdtYXgoKSUwQWFuc3dlcl9lbmRfaW5kZXglMjAlM0QlMjBvdXRwdXRzLmVuZF9sb2dpdHMuYXJnbWF4KCklMEElMEFwcmVkaWN0X2Fuc3dlcl90b2tlbnMlMjAlM0QlMjBpbnB1dHMuaW5wdXRfaWRzJTVCMCUyQyUyMGFuc3dlcl9zdGFydF9pbmRleCUyMCUzQSUyMGFuc3dlcl9lbmRfaW5kZXglMjAlMkIlMjAxJTVEJTBBJTBBJTIzJTIwdGFyZ2V0JTIwaXMlMjAlMjJuaWNlJTIwcHVwcGV0JTIyJTBBdGFyZ2V0X3N0YXJ0X2luZGV4JTIwJTNEJTIwdG9yY2gudGVuc29yKCU1QjE0JTVEKSUwQXRhcmdldF9lbmRfaW5kZXglMjAlM0QlMjB0b3JjaC50ZW5zb3IoJTVCMTUlNUQpJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwc3RhcnRfcG9zaXRpb25zJTNEdGFyZ2V0X3N0YXJ0X2luZGV4JTJDJTIwZW5kX3Bvc2l0aW9ucyUzRHRhcmdldF9lbmRfaW5kZXgpJTBBbG9zcyUyMCUzRCUyMG91dHB1dHMubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, LukeForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LukeForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-base&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`,wrap:!1}}),{c(){t=c("p"),t.textContent=b,i=s(),h(d.$$.fragment)},l(n){t=p(n,"P",{"data-svelte-h":!0}),u(t)!=="svelte-11lpom8"&&(t.textContent=b),i=a(n),f(d.$$.fragment,n)},m(n,M){m(n,t,M),m(n,i,M),g(d,n,M),T=!0},p:C,i(n){T||(_(d.$$.fragment,n),T=!0)},o(n){y(d.$$.fragment,n),T=!1},d(n){n&&(l(t),l(i)),k(d,n)}}}function Qa(w){let t,b,i,d,T,n,M,wn,Ee,zs=`The LUKE model was proposed in <a href="https://arxiv.org/abs/2010.01057" rel="nofollow">LUKE: Deep Contextualized Entity Representations with Entity-aware Self-attention</a> by Ikuya Yamada, Akari Asai, Hiroyuki Shindo, Hideaki Takeda and Yuji Matsumoto.
It is based on RoBERTa and adds entity embeddings as well as an entity-aware self-attention mechanism, which helps
improve performance on various downstream tasks involving reasoning about entities such as named entity recognition,
extractive and cloze-style question answering, entity typing, and relation classification.`,vn,Re,js="The abstract from the paper is the following:",zn,Ge,Ls=`<em>Entity representations are useful in natural language tasks involving entities. In this paper, we propose new
pretrained contextualized representations of words and entities based on the bidirectional transformer. The proposed
model treats words and entities in a given text as independent tokens, and outputs contextualized representations of
them. Our model is trained using a new pretraining task based on the masked language model of BERT. The task involves
predicting randomly masked words and entities in a large entity-annotated corpus retrieved from Wikipedia. We also
propose an entity-aware self-attention mechanism that is an extension of the self-attention mechanism of the
transformer, and considers the types of tokens (words or entities) when computing attention scores. The proposed model
achieves impressive empirical performance on a wide range of entity-related tasks. In particular, it obtains
state-of-the-art results on five well-known datasets: Open Entity (entity typing), TACRED (relation classification),
CoNLL-2003 (named entity recognition), ReCoRD (cloze-style question answering), and SQuAD 1.1 (extractive question
answering).</em>`,jn,Ve,Js='This model was contributed by <a href="https://huggingface.co/ikuyamada" rel="nofollow">ikuyamada</a> and <a href="https://huggingface.co/nielsr" rel="nofollow">nielsr</a>. The original code can be found <a href="https://github.com/studio-ousia/luke" rel="nofollow">here</a>.',Ln,Xe,Jn,Se,Cs=`<li><p>This implementation is the same as <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaModel">RobertaModel</a> with the addition of entity embeddings as well
as an entity-aware self-attention mechanism, which improves performance on tasks involving reasoning about entities.</p></li> <li><p>LUKE treats entities as input tokens; therefore, it takes <code>entity_ids</code>, <code>entity_attention_mask</code>,
<code>entity_token_type_ids</code> and <code>entity_position_ids</code> as extra input. You can obtain those using
<a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>.</p></li> <li><p><a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a> takes <code>entities</code> and <code>entity_spans</code> (character-based start and end
positions of the entities in the input text) as extra input. <code>entities</code> typically consist of [MASK] entities or
Wikipedia entities. The brief description when inputting these entities are as follows:</p> <ul><li><em>Inputting [MASK] entities to compute entity representations</em>: The [MASK] entity is used to mask entities to be
predicted during pretraining. When LUKE receives the [MASK] entity, it tries to predict the original entity by
gathering the information about the entity from the input text. Therefore, the [MASK] entity can be used to address
downstream tasks requiring the information of entities in text such as entity typing, relation classification, and
named entity recognition.</li> <li><em>Inputting Wikipedia entities to compute knowledge-enhanced token representations</em>: LUKE learns rich information
(or knowledge) about Wikipedia entities during pretraining and stores the information in its entity embedding. By
using Wikipedia entities as input tokens, LUKE outputs token representations enriched by the information stored in
the embeddings of these entities. This is particularly effective for tasks requiring real-world knowledge, such as
question answering.</li></ul></li> <li><p>There are three head models for the former use case:</p> <ul><li><a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeForEntityClassification">LukeForEntityClassification</a>, for tasks to classify a single entity in an input text such as
entity typing, e.g. the <a href="https://www.cs.utexas.edu/~eunsol/html_pages/open_entity.html" rel="nofollow">Open Entity dataset</a>.
This model places a linear head on top of the output entity representation.</li> <li><a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeForEntityPairClassification">LukeForEntityPairClassification</a>, for tasks to classify the relationship between two entities
such as relation classification, e.g. the <a href="https://nlp.stanford.edu/projects/tacred/" rel="nofollow">TACRED dataset</a>. This
model places a linear head on top of the concatenated output representation of the pair of given entities.</li> <li><a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeForEntitySpanClassification">LukeForEntitySpanClassification</a>, for tasks to classify the sequence of entity spans, such as
named entity recognition (NER). This model places a linear head on top of the output entity representations. You
can address NER using this model by inputting all possible entity spans in the text to the model.</li></ul> <p><a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a> has a <code>task</code> argument, which enables you to easily create an input to these
head models by specifying <code>task=&quot;entity_classification&quot;</code>, <code>task=&quot;entity_pair_classification&quot;</code>, or
<code>task=&quot;entity_span_classification&quot;</code>. Please refer to the example code of each head models.</p></li>`,Cn,He,xs="Usage example:",xn,Qe,$n,Ae,Un,Pe,$s='<li><a href="https://github.com/NielsRogge/Transformers-Tutorials/tree/master/LUKE" rel="nofollow">A demo notebook on how to fine-tune [LukeForEntityPairClassification](/docs/transformers/main/en/model_doc/luke#transformers.LukeForEntityPairClassification) for relation classification</a></li> <li><a href="https://github.com/studio-ousia/luke/tree/master/notebooks" rel="nofollow">Notebooks showcasing how you to reproduce the results as reported in the paper with the HuggingFace implementation of LUKE</a></li> <li><a href="../tasks/sequence_classification">Text classification task guide</a></li> <li><a href="../tasks/token_classification">Token classification task guide</a></li> <li><a href="../tasks/question_answering">Question answering task guide</a></li> <li><a href="../tasks/masked_language_modeling">Masked language modeling task guide</a></li> <li><a href="../tasks/multiple_choice">Multiple choice task guide</a></li>',Fn,Ye,Wn,R,Oe,oo,xt,Us=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeModel">LukeModel</a>. It is used to instantiate a LUKE
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LUKE
<a href="https://huggingface.co/studio-ousia/luke-base" rel="nofollow">studio-ousia/luke-base</a> architecture.`,so,$t,Fs=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,ao,_e,In,De,Zn,j,Ke,io,Ut,Ws="Constructs a LUKE tokenizer, derived from the GPT-2 tokenizer, using byte-level Byte-Pair-Encoding.",ro,Ft,Is="This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will",lo,ye,co,Wt,Zs=`You can get around that behavior by passing <code>add_prefix_space=True</code> when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`,po,ke,mo,It,qs=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods. It also creates entity sequences, namely
<code>entity_ids</code>, <code>entity_attention_mask</code>, <code>entity_token_type_ids</code>, and <code>entity_position_ids</code> to be used by the LUKE
model.`,uo,be,et,ho,Zt,Bs=`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences, depending on the task you want to prepare them for.`,fo,qt,tt,qn,nt,Bn,x,ot,go,Bt,Ns="The bare LUKE model transformer outputting raw hidden-states for both word tokens and entities without any specific head on top.",_o,Nt,Es=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,yo,Et,Rs=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,ko,D,st,bo,Rt,Gs='The <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeModel">LukeModel</a> forward method, overrides the <code>__call__</code> special method.',To,Te,Mo,Me,Nn,at,En,$,it,wo,Gt,Vs=`The LUKE model with a language modeling head and entity prediction head on top for masked language modeling and
masked entity prediction.`,vo,Vt,Xs=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,zo,Xt,Ss=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,jo,he,rt,Lo,St,Hs='The <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeForMaskedLM">LukeForMaskedLM</a> forward method, overrides the <code>__call__</code> special method.',Jo,we,Rn,lt,Gn,U,dt,Co,Ht,Qs=`The LUKE model with a classification head on top (a linear layer on top of the hidden state of the first entity
token) for entity classification tasks, such as Open Entity.`,xo,Qt,As=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,$o,At,Ps=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Uo,K,ct,Fo,Pt,Ys='The <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeForEntityClassification">LukeForEntityClassification</a> forward method, overrides the <code>__call__</code> special method.',Wo,ve,Io,ze,Vn,pt,Xn,F,mt,Zo,Yt,Os=`The LUKE model with a classification head on top (a linear layer on top of the hidden states of the two entity
tokens) for entity pair classification tasks, such as TACRED.`,qo,Ot,Ds=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Bo,Dt,Ks=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,No,ee,ut,Eo,Kt,ea='The <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeForEntityPairClassification">LukeForEntityPairClassification</a> forward method, overrides the <code>__call__</code> special method.',Ro,je,Go,Le,Sn,ht,Hn,W,ft,Vo,en,ta=`The LUKE model with a span classification head on top (a linear layer on top of the hidden states output) for tasks
such as named entity recognition.`,Xo,tn,na=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,So,nn,oa=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Ho,te,gt,Qo,on,sa='The <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeForEntitySpanClassification">LukeForEntitySpanClassification</a> forward method, overrides the <code>__call__</code> special method.',Ao,Je,Po,Ce,Qn,_t,An,I,yt,Yo,sn,aa=`The LUKE Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`,Oo,an,ia=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Do,rn,ra=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Ko,E,kt,es,ln,la='The <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeForSequenceClassification">LukeForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',ts,xe,ns,$e,os,Ue,Pn,bt,Yn,Z,Tt,ss,dn,da=`The LUKE Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`,as,cn,ca=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,is,pn,pa=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,rs,ne,Mt,ls,mn,ma='The <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeForMultipleChoice">LukeForMultipleChoice</a> forward method, overrides the <code>__call__</code> special method.',ds,Fe,cs,We,On,wt,Dn,q,vt,ps,un,ua=`The LUKE Model with a token classification head on top (a linear layer on top of the hidden-states output). To
solve Named-Entity Recognition (NER) task using LUKE, <code>LukeForEntitySpanClassification</code> is more suitable than this
class.`,ms,hn,ha=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,us,fn,fa=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,hs,oe,zt,fs,gn,ga='The <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeForTokenClassification">LukeForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',gs,Ie,_s,Ze,Kn,jt,eo,B,Lt,ys,_n,_a=`The LUKE Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,ks,yn,ya=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,bs,kn,ka=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Ts,se,Jt,Ms,bn,ba='The <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeForQuestionAnswering">LukeForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',ws,qe,vs,Be,to,Tn,no;return T=new N({props:{title:"LUKE",local:"luke",headingTag:"h1"}}),M=new N({props:{title:"Overview",local:"overview",headingTag:"h2"}}),Xe=new N({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),Qe=new ae({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEx1a2VUb2tlbml6ZXIlMkMlMjBMdWtlTW9kZWwlMkMlMjBMdWtlRm9yRW50aXR5UGFpckNsYXNzaWZpY2F0aW9uJTBBJTBBbW9kZWwlMjAlM0QlMjBMdWtlTW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMnN0dWRpby1vdXNpYSUyRmx1a2UtYmFzZSUyMiklMEF0b2tlbml6ZXIlMjAlM0QlMjBMdWtlVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJzdHVkaW8tb3VzaWElMkZsdWtlLWJhc2UlMjIpJTBBJTBBdGV4dCUyMCUzRCUyMCUyMkJleW9uYyVDMyVBOSUyMGxpdmVzJTIwaW4lMjBMb3MlMjBBbmdlbGVzLiUyMiUwQWVudGl0eV9zcGFucyUyMCUzRCUyMCU1QigwJTJDJTIwNyklNUQlMjAlMjAlMjMlMjBjaGFyYWN0ZXItYmFzZWQlMjBlbnRpdHklMjBzcGFuJTIwY29ycmVzcG9uZGluZyUyMHRvJTIwJTIyQmV5b25jJUMzJUE5JTIyJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKHRleHQlMkMlMjBlbnRpdHlfc3BhbnMlM0RlbnRpdHlfc3BhbnMlMkMlMjBhZGRfcHJlZml4X3NwYWNlJTNEVHJ1ZSUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQXdvcmRfbGFzdF9oaWRkZW5fc3RhdGUlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRlJTBBZW50aXR5X2xhc3RfaGlkZGVuX3N0YXRlJTIwJTNEJTIwb3V0cHV0cy5lbnRpdHlfbGFzdF9oaWRkZW5fc3RhdGUlMEElMEFlbnRpdGllcyUyMCUzRCUyMCU1QiUwQSUyMCUyMCUyMCUyMCUyMkJleW9uYyVDMyVBOSUyMiUyQyUwQSUyMCUyMCUyMCUyMCUyMkxvcyUyMEFuZ2VsZXMlMjIlMkMlMEElNUQlMjAlMjAlMjMlMjBXaWtpcGVkaWElMjBlbnRpdHklMjB0aXRsZXMlMjBjb3JyZXNwb25kaW5nJTIwdG8lMjB0aGUlMjBlbnRpdHklMjBtZW50aW9ucyUyMCUyMkJleW9uYyVDMyVBOSUyMiUyMGFuZCUyMCUyMkxvcyUyMEFuZ2VsZXMlMjIlMEFlbnRpdHlfc3BhbnMlMjAlM0QlMjAlNUIoMCUyQyUyMDcpJTJDJTIwKDE3JTJDJTIwMjgpJTVEJTIwJTIwJTIzJTIwY2hhcmFjdGVyLWJhc2VkJTIwZW50aXR5JTIwc3BhbnMlMjBjb3JyZXNwb25kaW5nJTIwdG8lMjAlMjJCZXlvbmMlQzMlQTklMjIlMjBhbmQlMjAlMjJMb3MlMjBBbmdlbGVzJTIyJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKHRleHQlMkMlMjBlbnRpdGllcyUzRGVudGl0aWVzJTJDJTIwZW50aXR5X3NwYW5zJTNEZW50aXR5X3NwYW5zJTJDJTIwYWRkX3ByZWZpeF9zcGFjZSUzRFRydWUlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEF3b3JkX2xhc3RfaGlkZGVuX3N0YXRlJTIwJTNEJTIwb3V0cHV0cy5sYXN0X2hpZGRlbl9zdGF0ZSUwQWVudGl0eV9sYXN0X2hpZGRlbl9zdGF0ZSUyMCUzRCUyMG91dHB1dHMuZW50aXR5X2xhc3RfaGlkZGVuX3N0YXRlJTBBJTBBbW9kZWwlMjAlM0QlMjBMdWtlRm9yRW50aXR5UGFpckNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJzdHVkaW8tb3VzaWElMkZsdWtlLWxhcmdlLWZpbmV0dW5lZC10YWNyZWQlMjIpJTBBdG9rZW5pemVyJTIwJTNEJTIwTHVrZVRva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyc3R1ZGlvLW91c2lhJTJGbHVrZS1sYXJnZS1maW5ldHVuZWQtdGFjcmVkJTIyKSUwQWVudGl0eV9zcGFucyUyMCUzRCUyMCU1QigwJTJDJTIwNyklMkMlMjAoMTclMkMlMjAyOCklNUQlMjAlMjAlMjMlMjBjaGFyYWN0ZXItYmFzZWQlMjBlbnRpdHklMjBzcGFucyUyMGNvcnJlc3BvbmRpbmclMjB0byUyMCUyMkJleW9uYyVDMyVBOSUyMiUyMGFuZCUyMCUyMkxvcyUyMEFuZ2VsZXMlMjIlMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIodGV4dCUyQyUyMGVudGl0eV9zcGFucyUzRGVudGl0eV9zcGFucyUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQWxvZ2l0cyUyMCUzRCUyMG91dHB1dHMubG9naXRzJTBBcHJlZGljdGVkX2NsYXNzX2lkeCUyMCUzRCUyMGludChsb2dpdHMlNUIwJTVELmFyZ21heCgpKSUwQXByaW50KCUyMlByZWRpY3RlZCUyMGNsYXNzJTNBJTIyJTJDJTIwbW9kZWwuY29uZmlnLmlkMmxhYmVsJTVCcHJlZGljdGVkX2NsYXNzX2lkeCU1RCk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LukeTokenizer, LukeModel, LukeForEntityPairClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>model = LukeModel.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LukeTokenizer.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-base&quot;</span>)
<span class="hljs-comment"># Example 1: Computing the contextualized entity representation corresponding to the entity mention &quot;Beyoncé&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;Beyoncé lives in Los Angeles.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>entity_spans = [(<span class="hljs-number">0</span>, <span class="hljs-number">7</span>)]  <span class="hljs-comment"># character-based entity span corresponding to &quot;Beyoncé&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, entity_spans=entity_spans, add_prefix_space=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>word_last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>entity_last_hidden_state = outputs.entity_last_hidden_state
<span class="hljs-comment"># Example 2: Inputting Wikipedia entities to obtain enriched contextualized representations</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>entities = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Beyoncé&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Los Angeles&quot;</span>,
<span class="hljs-meta">... </span>]  <span class="hljs-comment"># Wikipedia entity titles corresponding to the entity mentions &quot;Beyoncé&quot; and &quot;Los Angeles&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>entity_spans = [(<span class="hljs-number">0</span>, <span class="hljs-number">7</span>), (<span class="hljs-number">17</span>, <span class="hljs-number">28</span>)]  <span class="hljs-comment"># character-based entity spans corresponding to &quot;Beyoncé&quot; and &quot;Los Angeles&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, entities=entities, entity_spans=entity_spans, add_prefix_space=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>word_last_hidden_state = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>entity_last_hidden_state = outputs.entity_last_hidden_state
<span class="hljs-comment"># Example 3: Classifying the relationship between two entities using LukeForEntityPairClassification head model</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = LukeForEntityPairClassification.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-large-finetuned-tacred&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LukeTokenizer.from_pretrained(<span class="hljs-string">&quot;studio-ousia/luke-large-finetuned-tacred&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>entity_spans = [(<span class="hljs-number">0</span>, <span class="hljs-number">7</span>), (<span class="hljs-number">17</span>, <span class="hljs-number">28</span>)]  <span class="hljs-comment"># character-based entity spans corresponding to &quot;Beyoncé&quot; and &quot;Los Angeles&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text, entity_spans=entity_spans, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_idx = <span class="hljs-built_in">int</span>(logits[<span class="hljs-number">0</span>].argmax())
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted class:&quot;</span>, model.config.id2label[predicted_class_idx])`,wrap:!1}}),Ae=new N({props:{title:"Resources",local:"resources",headingTag:"h2"}}),Ye=new N({props:{title:"LukeConfig",local:"transformers.LukeConfig",headingTag:"h2"}}),Oe=new L({props:{name:"class transformers.LukeConfig",anchor:"transformers.LukeConfig",parameters:[{name:"vocab_size",val:" = 50267"},{name:"entity_vocab_size",val:" = 500000"},{name:"hidden_size",val:" = 768"},{name:"entity_emb_size",val:" = 256"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"use_entity_aware_attention",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LukeConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50267) &#x2014;
Vocabulary size of the LUKE model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeModel">LukeModel</a>.`,name:"vocab_size"},{anchor:"transformers.LukeConfig.entity_vocab_size",description:`<strong>entity_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 500000) &#x2014;
Entity vocabulary size of the LUKE model. Defines the number of different entities that can be represented
by the <code>entity_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeModel">LukeModel</a>.`,name:"entity_vocab_size"},{anchor:"transformers.LukeConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.LukeConfig.entity_emb_size",description:`<strong>entity_emb_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
The number of dimensions of the entity embedding.`,name:"entity_emb_size"},{anchor:"transformers.LukeConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.LukeConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.LukeConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.LukeConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.LukeConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.LukeConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.LukeConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.LukeConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeModel">LukeModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.LukeConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.LukeConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.LukeConfig.use_entity_aware_attention",description:`<strong>use_entity_aware_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should use the entity-aware self-attention mechanism proposed in <a href="https://arxiv.org/abs/2010.01057" rel="nofollow">LUKE: Deep
Contextualized Entity Representations with Entity-aware Self-attention (Yamada et
al.)</a>.`,name:"use_entity_aware_attention"},{anchor:"transformers.LukeConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"},{anchor:"transformers.LukeConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Padding token id.`,name:"pad_token_id"},{anchor:"transformers.LukeConfig.bos_token_id",description:`<strong>bos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
Beginning of stream token id.`,name:"bos_token_id"},{anchor:"transformers.LukeConfig.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
End of stream token id.`,name:"eos_token_id"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/luke/configuration_luke.py#L29"}}),_e=new ue({props:{anchor:"transformers.LukeConfig.example",$$slots:{default:[ja]},$$scope:{ctx:w}}}),De=new N({props:{title:"LukeTokenizer",local:"transformers.LukeTokenizer",headingTag:"h2"}}),Ke=new L({props:{name:"class transformers.LukeTokenizer",anchor:"transformers.LukeTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"entity_vocab_file",val:""},{name:"task",val:" = None"},{name:"max_entity_length",val:" = 32"},{name:"max_mention_length",val:" = 30"},{name:"entity_token_1",val:" = '<ent>'"},{name:"entity_token_2",val:" = '<ent2>'"},{name:"entity_unk_token",val:" = '[UNK]'"},{name:"entity_pad_token",val:" = '[PAD]'"},{name:"entity_mask_token",val:" = '[MASK]'"},{name:"entity_mask2_token",val:" = '[MASK2]'"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LukeTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.LukeTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.LukeTokenizer.entity_vocab_file",description:`<strong>entity_vocab_file</strong> (<code>str</code>) &#x2014;
Path to the entity vocabulary file.`,name:"entity_vocab_file"},{anchor:"transformers.LukeTokenizer.task",description:`<strong>task</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Task for which you want to prepare sequences. One of <code>&quot;entity_classification&quot;</code>,
<code>&quot;entity_pair_classification&quot;</code>, or <code>&quot;entity_span_classification&quot;</code>. If you specify this argument, the entity
sequence is automatically created based on the given entity span(s).`,name:"task"},{anchor:"transformers.LukeTokenizer.max_entity_length",description:`<strong>max_entity_length</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The maximum length of <code>entity_ids</code>.`,name:"max_entity_length"},{anchor:"transformers.LukeTokenizer.max_mention_length",description:`<strong>max_mention_length</strong> (<code>int</code>, <em>optional</em>, defaults to 30) &#x2014;
The maximum number of tokens inside an entity span.`,name:"max_mention_length"},{anchor:"transformers.LukeTokenizer.entity_token_1",description:`<strong>entity_token_1</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;ent&gt;</code>) &#x2014;
The special token used to represent an entity span in a word token sequence. This token is only used when
<code>task</code> is set to <code>&quot;entity_classification&quot;</code> or <code>&quot;entity_pair_classification&quot;</code>.`,name:"entity_token_1"},{anchor:"transformers.LukeTokenizer.entity_token_2",description:`<strong>entity_token_2</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;ent2&gt;</code>) &#x2014;
The special token used to represent an entity span in a word token sequence. This token is only used when
<code>task</code> is set to <code>&quot;entity_pair_classification&quot;</code>.`,name:"entity_token_2"},{anchor:"transformers.LukeTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.LukeTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.LukeTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.LukeTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.LukeTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.LukeTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.LukeTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.LukeTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.LukeTokenizer.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (LUKE tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/luke/tokenization_luke.py#L193"}}),ye=new ue({props:{anchor:"transformers.LukeTokenizer.example",$$slots:{default:[La]},$$scope:{ctx:w}}}),ke=new fe({props:{$$slots:{default:[Ja]},$$scope:{ctx:w}}}),et=new L({props:{name:"__call__",anchor:"transformers.LukeTokenizer.__call__",parameters:[{name:"text",val:": Union"},{name:"text_pair",val:": Union = None"},{name:"entity_spans",val:": Union = None"},{name:"entity_spans_pair",val:": Union = None"},{name:"entities",val:": Union = None"},{name:"entities_pair",val:": Union = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": Union = False"},{name:"truncation",val:": Union = None"},{name:"max_length",val:": Optional = None"},{name:"max_entity_length",val:": Optional = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": Optional = False"},{name:"pad_to_multiple_of",val:": Optional = None"},{name:"return_tensors",val:": Union = None"},{name:"return_token_type_ids",val:": Optional = None"},{name:"return_attention_mask",val:": Optional = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LukeTokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence must be a string. Note that this
tokenizer does not support tokenization based on pretokenized strings.`,name:"text"},{anchor:"transformers.LukeTokenizer.__call__.text_pair",description:`<strong>text_pair</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence must be a string. Note that this
tokenizer does not support tokenization based on pretokenized strings.`,name:"text_pair"},{anchor:"transformers.LukeTokenizer.__call__.entity_spans",description:`<strong>entity_spans</strong> (<code>List[Tuple[int, int]]</code>, <code>List[List[Tuple[int, int]]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences of entity spans to be encoded. Each sequence consists of tuples each
with two integers denoting character-based start and end positions of entities. If you specify
<code>&quot;entity_classification&quot;</code> or <code>&quot;entity_pair_classification&quot;</code> as the <code>task</code> argument in the constructor,
the length of each sequence must be 1 or 2, respectively. If you specify <code>entities</code>, the length of each
sequence must be equal to the length of each sequence of <code>entities</code>.`,name:"entity_spans"},{anchor:"transformers.LukeTokenizer.__call__.entity_spans_pair",description:`<strong>entity_spans_pair</strong> (<code>List[Tuple[int, int]]</code>, <code>List[List[Tuple[int, int]]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences of entity spans to be encoded. Each sequence consists of tuples each
with two integers denoting character-based start and end positions of entities. If you specify the
<code>task</code> argument in the constructor, this argument is ignored. If you specify <code>entities_pair</code>, the
length of each sequence must be equal to the length of each sequence of <code>entities_pair</code>.`,name:"entity_spans_pair"},{anchor:"transformers.LukeTokenizer.__call__.entities",description:`<strong>entities</strong> (<code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences of entities to be encoded. Each sequence consists of strings
representing entities, i.e., special entities (e.g., [MASK]) or entity titles of Wikipedia (e.g., Los
Angeles). This argument is ignored if you specify the <code>task</code> argument in the constructor. The length of
each sequence must be equal to the length of each sequence of <code>entity_spans</code>. If you specify
<code>entity_spans</code> without specifying this argument, the entity sequence or the batch of entity sequences
is automatically constructed by filling it with the [MASK] entity.`,name:"entities"},{anchor:"transformers.LukeTokenizer.__call__.entities_pair",description:`<strong>entities_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences of entities to be encoded. Each sequence consists of strings
representing entities, i.e., special entities (e.g., [MASK]) or entity titles of Wikipedia (e.g., Los
Angeles). This argument is ignored if you specify the <code>task</code> argument in the constructor. The length of
each sequence must be equal to the length of each sequence of <code>entity_spans_pair</code>. If you specify
<code>entity_spans_pair</code> without specifying this argument, the entity sequence or the batch of entity
sequences is automatically constructed by filling it with the [MASK] entity.`,name:"entities_pair"},{anchor:"transformers.LukeTokenizer.__call__.max_entity_length",description:`<strong>max_entity_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The maximum length of <code>entity_ids</code>.`,name:"max_entity_length"},{anchor:"transformers.LukeTokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to add special tokens when encoding the sequences. This will use the underlying
<code>PretrainedTokenizerBase.build_inputs_with_special_tokens</code> function, which defines which tokens are
automatically added to the input ids. This is usefull if you want to add <code>bos</code> or <code>eos</code> tokens
automatically.`,name:"add_special_tokens"},{anchor:"transformers.LukeTokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LukeTokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or
to the maximum acceptable input length for the model if that argument is not provided. This will
truncate token by token, removing a token from the longest sequence in the pair if a pair of
sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_second&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.LukeTokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LukeTokenizer.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LukeTokenizer.__call__.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.LukeTokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. Requires <code>padding</code> to be activated.
This is especially useful to enable the use of Tensor Cores on NVIDIA hardware with compute capability
<code>&gt;= 7.5</code> (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LukeTokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LukeTokenizer.__call__.return_token_type_ids",description:`<strong>return_token_type_ids</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return token type IDs. If left to the default, will return the token type IDs according to
the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"return_token_type_ids"},{anchor:"transformers.LukeTokenizer.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"return_attention_mask"},{anchor:"transformers.LukeTokenizer.__call__.return_overflowing_tokens",description:`<strong>return_overflowing_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return overflowing token sequences. If a pair of sequences of input ids (or a batch
of pairs) is provided with <code>truncation_strategy = longest_first</code> or <code>True</code>, an error is raised instead
of returning overflowing tokens.`,name:"return_overflowing_tokens"},{anchor:"transformers.LukeTokenizer.__call__.return_special_tokens_mask",description:`<strong>return_special_tokens_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return special tokens mask information.`,name:"return_special_tokens_mask"},{anchor:"transformers.LukeTokenizer.__call__.return_offsets_mapping",description:`<strong>return_offsets_mapping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return <code>(char_start, char_end)</code> for each token.</p>
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.LukeTokenizer.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.LukeTokenizer.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/luke/tokenization_luke.py#L577",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a> with the following fields:</p>
<ul>
<li>
<p><strong>input_ids</strong> — List of token ids to be fed to a model.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
</li>
<li>
<p><strong>token_type_ids</strong> — List of token type ids to be fed to a model (when <code>return_token_type_ids=True</code> or
if <em>“token_type_ids”</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a></p>
</li>
<li>
<p><strong>attention_mask</strong> — List of indices specifying which tokens should be attended to by the model (when
<code>return_attention_mask=True</code> or if <em>“attention_mask”</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
</li>
<li>
<p><strong>entity_ids</strong> — List of entity ids to be fed to a model.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
</li>
<li>
<p><strong>entity_position_ids</strong> — List of entity positions in the input sequence to be fed to a model.</p>
</li>
<li>
<p><strong>entity_token_type_ids</strong> — List of entity token type ids to be fed to a model (when
<code>return_token_type_ids=True</code> or if <em>“entity_token_type_ids”</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a></p>
</li>
<li>
<p><strong>entity_attention_mask</strong> — List of indices specifying which entities should be attended to by the model
(when <code>return_attention_mask=True</code> or if <em>“entity_attention_mask”</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
</li>
<li>
<p><strong>entity_start_positions</strong> — List of the start positions of entities in the word token sequence (when
<code>task="entity_span_classification"</code>).</p>
</li>
<li>
<p><strong>entity_end_positions</strong> — List of the end positions of entities in the word token sequence (when
<code>task="entity_span_classification"</code>).</p>
</li>
<li>
<p><strong>overflowing_tokens</strong> — List of overflowing tokens sequences (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>num_truncated_tokens</strong> — Number of tokens truncated (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>special_tokens_mask</strong> — List of 0s and 1s, with 1 specifying added special tokens and 0 specifying
regular sequence tokens (when <code>add_special_tokens=True</code> and <code>return_special_tokens_mask=True</code>).</p>
</li>
<li>
<p><strong>length</strong> — The length of the inputs (when <code>return_length=True</code>)</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),tt=new L({props:{name:"save_vocabulary",anchor:"transformers.LukeTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/luke/tokenization_luke.py#L1692"}}),nt=new N({props:{title:"LukeModel",local:"transformers.LukeModel",headingTag:"h2"}}),ot=new L({props:{name:"class transformers.LukeModel",anchor:"transformers.LukeModel",parameters:[{name:"config",val:": LukeConfig"},{name:"add_pooling_layer",val:": bool = True"}],parametersDescription:[{anchor:"transformers.LukeModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1009"}}),st=new L({props:{name:"forward",anchor:"transformers.LukeModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"entity_ids",val:": Optional = None"},{name:"entity_attention_mask",val:": Optional = None"},{name:"entity_token_type_ids",val:": Optional = None"},{name:"entity_position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.LukeModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LukeModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LukeModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LukeModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LukeModel.forward.entity_ids",description:`<strong>entity_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>) &#x2014;
Indices of entity tokens in the entity vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeModel.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding entity token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for entity tokens that are <strong>not masked</strong>,</li>
<li>0 for entity tokens that are <strong>masked</strong>.</li>
</ul>`,name:"entity_attention_mask"},{anchor:"transformers.LukeModel.forward.entity_token_type_ids",description:`<strong>entity_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the entity token inputs. Indices are
selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>portion A</em> entity token,</li>
<li>1 corresponds to a <em>portion B</em> entity token.</li>
</ul>`,name:"entity_token_type_ids"},{anchor:"transformers.LukeModel.forward.entity_position_ids",description:`<strong>entity_position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length, max_mention_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input entity in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"entity_position_ids"},{anchor:"transformers.LukeModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LukeModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LukeModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LukeModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LukeModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1043",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.models.luke.modeling_luke.BaseLukeModelOutputWithPooling</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig"
>LukeConfig</a>) and inputs.</p>
<ul>
<li><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the model.</li>
<li><strong>entity_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length, hidden_size)</code>) — Sequence of entity hidden-states at the output of the last layer of the model.</li>
<li><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) — Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function.</li>
<li><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer
plus the initial embedding outputs.</li>
<li><strong>entity_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, entity_length, hidden_size)</code>. Entity hidden-states of the model at the output of each
layer plus the initial entity embedding outputs.</li>
<li><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length + entity_length, sequence_length + entity_length)</code>. Attentions weights after the attention softmax, used to
compute the weighted average in the self-attention heads.</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.models.luke.modeling_luke.BaseLukeModelOutputWithPooling</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Te=new fe({props:{$$slots:{default:[Ca]},$$scope:{ctx:w}}}),Me=new ue({props:{anchor:"transformers.LukeModel.forward.example",$$slots:{default:[xa]},$$scope:{ctx:w}}}),at=new N({props:{title:"LukeForMaskedLM",local:"transformers.LukeForMaskedLM",headingTag:"h2"}}),it=new L({props:{name:"class transformers.LukeForMaskedLM",anchor:"transformers.LukeForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1262"}}),rt=new L({props:{name:"forward",anchor:"transformers.LukeForMaskedLM.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"entity_ids",val:": Optional = None"},{name:"entity_attention_mask",val:": Optional = None"},{name:"entity_token_type_ids",val:": Optional = None"},{name:"entity_position_ids",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"entity_labels",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.LukeForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LukeForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LukeForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LukeForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LukeForMaskedLM.forward.entity_ids",description:`<strong>entity_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>) &#x2014;
Indices of entity tokens in the entity vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForMaskedLM.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding entity token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for entity tokens that are <strong>not masked</strong>,</li>
<li>0 for entity tokens that are <strong>masked</strong>.</li>
</ul>`,name:"entity_attention_mask"},{anchor:"transformers.LukeForMaskedLM.forward.entity_token_type_ids",description:`<strong>entity_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the entity token inputs. Indices are
selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>portion A</em> entity token,</li>
<li>1 corresponds to a <em>portion B</em> entity token.</li>
</ul>`,name:"entity_token_type_ids"},{anchor:"transformers.LukeForMaskedLM.forward.entity_position_ids",description:`<strong>entity_position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length, max_mention_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input entity in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"entity_position_ids"},{anchor:"transformers.LukeForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LukeForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LukeForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LukeForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LukeForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LukeForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.LukeForMaskedLM.forward.entity_labels",description:`<strong>entity_labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"entity_labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1295",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.models.luke.modeling_luke.LukeMaskedLMOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig"
>LukeConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — The sum of masked language modeling (MLM) loss and entity prediction loss.</p>
</li>
<li>
<p><strong>mlm_loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>mep_loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Masked entity prediction (MEP) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) — Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>entity_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) — Prediction scores of the entity prediction head (scores for each entity vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>entity_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, entity_length, hidden_size)</code>. Entity hidden-states of the model at the output of each
layer plus the initial entity embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.models.luke.modeling_luke.LukeMaskedLMOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),we=new fe({props:{$$slots:{default:[$a]},$$scope:{ctx:w}}}),lt=new N({props:{title:"LukeForEntityClassification",local:"transformers.LukeForEntityClassification",headingTag:"h2"}}),dt=new L({props:{name:"class transformers.LukeForEntityClassification",anchor:"transformers.LukeForEntityClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForEntityClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1397"}}),ct=new L({props:{name:"forward",anchor:"transformers.LukeForEntityClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"entity_ids",val:": Optional = None"},{name:"entity_attention_mask",val:": Optional = None"},{name:"entity_token_type_ids",val:": Optional = None"},{name:"entity_position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.LukeForEntityClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LukeForEntityClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LukeForEntityClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LukeForEntityClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LukeForEntityClassification.forward.entity_ids",description:`<strong>entity_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>) &#x2014;
Indices of entity tokens in the entity vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForEntityClassification.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding entity token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for entity tokens that are <strong>not masked</strong>,</li>
<li>0 for entity tokens that are <strong>masked</strong>.</li>
</ul>`,name:"entity_attention_mask"},{anchor:"transformers.LukeForEntityClassification.forward.entity_token_type_ids",description:`<strong>entity_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the entity token inputs. Indices are
selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>portion A</em> entity token,</li>
<li>1 corresponds to a <em>portion B</em> entity token.</li>
</ul>`,name:"entity_token_type_ids"},{anchor:"transformers.LukeForEntityClassification.forward.entity_position_ids",description:`<strong>entity_position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length, max_mention_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input entity in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"entity_position_ids"},{anchor:"transformers.LukeForEntityClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LukeForEntityClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LukeForEntityClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LukeForEntityClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LukeForEntityClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LukeForEntityClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code> or <code>(batch_size, num_labels)</code>, <em>optional</em>) &#x2014;
Labels for computing the classification loss. If the shape is <code>(batch_size,)</code>, the cross entropy loss is
used for the single-label classification. In this case, labels should contain the indices that should be in
<code>[0, ..., config.num_labels - 1]</code>. If the shape is <code>(batch_size, num_labels)</code>, the binary cross entropy
loss is used for the multi-label classification. In this case, labels should only contain <code>[0, 1]</code>, where 0
and 1 indicate false and true, respectively.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1417",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.models.luke.modeling_luke.EntityClassificationOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig"
>LukeConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Classification loss.</li>
<li><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) — Classification scores (before SoftMax).</li>
<li><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer
plus the initial embedding outputs.</li>
<li><strong>entity_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, entity_length, hidden_size)</code>. Entity hidden-states of the model at the output of each
layer plus the initial entity embedding outputs.</li>
<li><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.models.luke.modeling_luke.EntityClassificationOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ve=new fe({props:{$$slots:{default:[Ua]},$$scope:{ctx:w}}}),ze=new ue({props:{anchor:"transformers.LukeForEntityClassification.forward.example",$$slots:{default:[Fa]},$$scope:{ctx:w}}}),pt=new N({props:{title:"LukeForEntityPairClassification",local:"transformers.LukeForEntityPairClassification",headingTag:"h2"}}),mt=new L({props:{name:"class transformers.LukeForEntityPairClassification",anchor:"transformers.LukeForEntityPairClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForEntityPairClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1512"}}),ut=new L({props:{name:"forward",anchor:"transformers.LukeForEntityPairClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"entity_ids",val:": Optional = None"},{name:"entity_attention_mask",val:": Optional = None"},{name:"entity_token_type_ids",val:": Optional = None"},{name:"entity_position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.LukeForEntityPairClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LukeForEntityPairClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LukeForEntityPairClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LukeForEntityPairClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LukeForEntityPairClassification.forward.entity_ids",description:`<strong>entity_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>) &#x2014;
Indices of entity tokens in the entity vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForEntityPairClassification.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding entity token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for entity tokens that are <strong>not masked</strong>,</li>
<li>0 for entity tokens that are <strong>masked</strong>.</li>
</ul>`,name:"entity_attention_mask"},{anchor:"transformers.LukeForEntityPairClassification.forward.entity_token_type_ids",description:`<strong>entity_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the entity token inputs. Indices are
selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>portion A</em> entity token,</li>
<li>1 corresponds to a <em>portion B</em> entity token.</li>
</ul>`,name:"entity_token_type_ids"},{anchor:"transformers.LukeForEntityPairClassification.forward.entity_position_ids",description:`<strong>entity_position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length, max_mention_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input entity in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"entity_position_ids"},{anchor:"transformers.LukeForEntityPairClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LukeForEntityPairClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LukeForEntityPairClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LukeForEntityPairClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LukeForEntityPairClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LukeForEntityPairClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code> or <code>(batch_size, num_labels)</code>, <em>optional</em>) &#x2014;
Labels for computing the classification loss. If the shape is <code>(batch_size,)</code>, the cross entropy loss is
used for the single-label classification. In this case, labels should contain the indices that should be in
<code>[0, ..., config.num_labels - 1]</code>. If the shape is <code>(batch_size, num_labels)</code>, the binary cross entropy
loss is used for the multi-label classification. In this case, labels should only contain <code>[0, 1]</code>, where 0
and 1 indicate false and true, respectively.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1532",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.models.luke.modeling_luke.EntityPairClassificationOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig"
>LukeConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Classification loss.</li>
<li><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) — Classification scores (before SoftMax).</li>
<li><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer
plus the initial embedding outputs.</li>
<li><strong>entity_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, entity_length, hidden_size)</code>. Entity hidden-states of the model at the output of each
layer plus the initial entity embedding outputs.</li>
<li><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.models.luke.modeling_luke.EntityPairClassificationOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),je=new fe({props:{$$slots:{default:[Wa]},$$scope:{ctx:w}}}),Le=new ue({props:{anchor:"transformers.LukeForEntityPairClassification.forward.example",$$slots:{default:[Ia]},$$scope:{ctx:w}}}),ht=new N({props:{title:"LukeForEntitySpanClassification",local:"transformers.LukeForEntitySpanClassification",headingTag:"h2"}}),ft=new L({props:{name:"class transformers.LukeForEntitySpanClassification",anchor:"transformers.LukeForEntitySpanClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForEntitySpanClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1632"}}),gt=new L({props:{name:"forward",anchor:"transformers.LukeForEntitySpanClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"entity_ids",val:": Optional = None"},{name:"entity_attention_mask",val:": Optional = None"},{name:"entity_token_type_ids",val:": Optional = None"},{name:"entity_position_ids",val:": Optional = None"},{name:"entity_start_positions",val:": Optional = None"},{name:"entity_end_positions",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.LukeForEntitySpanClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LukeForEntitySpanClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LukeForEntitySpanClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LukeForEntitySpanClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LukeForEntitySpanClassification.forward.entity_ids",description:`<strong>entity_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>) &#x2014;
Indices of entity tokens in the entity vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForEntitySpanClassification.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding entity token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for entity tokens that are <strong>not masked</strong>,</li>
<li>0 for entity tokens that are <strong>masked</strong>.</li>
</ul>`,name:"entity_attention_mask"},{anchor:"transformers.LukeForEntitySpanClassification.forward.entity_token_type_ids",description:`<strong>entity_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the entity token inputs. Indices are
selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>portion A</em> entity token,</li>
<li>1 corresponds to a <em>portion B</em> entity token.</li>
</ul>`,name:"entity_token_type_ids"},{anchor:"transformers.LukeForEntitySpanClassification.forward.entity_position_ids",description:`<strong>entity_position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length, max_mention_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input entity in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"entity_position_ids"},{anchor:"transformers.LukeForEntitySpanClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LukeForEntitySpanClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LukeForEntitySpanClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LukeForEntitySpanClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LukeForEntitySpanClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LukeForEntitySpanClassification.forward.entity_start_positions",description:`<strong>entity_start_positions</strong> (<code>torch.LongTensor</code>) &#x2014;
The start positions of entities in the word token sequence.`,name:"entity_start_positions"},{anchor:"transformers.LukeForEntitySpanClassification.forward.entity_end_positions",description:`<strong>entity_end_positions</strong> (<code>torch.LongTensor</code>) &#x2014;
The end positions of entities in the word token sequence.`,name:"entity_end_positions"},{anchor:"transformers.LukeForEntitySpanClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code> or <code>(batch_size, entity_length, num_labels)</code>, <em>optional</em>) &#x2014;
Labels for computing the classification loss. If the shape is <code>(batch_size, entity_length)</code>, the cross
entropy loss is used for the single-label classification. In this case, labels should contain the indices
that should be in <code>[0, ..., config.num_labels - 1]</code>. If the shape is <code>(batch_size, entity_length, num_labels)</code>, the binary cross entropy loss is used for the multi-label classification. In this case,
labels should only contain <code>[0, 1]</code>, where 0 and 1 indicate false and true, respectively.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1652",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.models.luke.modeling_luke.EntitySpanClassificationOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig"
>LukeConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Classification loss.</li>
<li><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length, config.num_labels)</code>) — Classification scores (before SoftMax).</li>
<li><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer
plus the initial embedding outputs.</li>
<li><strong>entity_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, entity_length, hidden_size)</code>. Entity hidden-states of the model at the output of each
layer plus the initial entity embedding outputs.</li>
<li><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.models.luke.modeling_luke.EntitySpanClassificationOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Je=new fe({props:{$$slots:{default:[Za]},$$scope:{ctx:w}}}),Ce=new ue({props:{anchor:"transformers.LukeForEntitySpanClassification.forward.example",$$slots:{default:[qa]},$$scope:{ctx:w}}}),_t=new N({props:{title:"LukeForSequenceClassification",local:"transformers.LukeForSequenceClassification",headingTag:"h2"}}),yt=new L({props:{name:"class transformers.LukeForSequenceClassification",anchor:"transformers.LukeForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1778"}}),kt=new L({props:{name:"forward",anchor:"transformers.LukeForSequenceClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"entity_ids",val:": Optional = None"},{name:"entity_attention_mask",val:": Optional = None"},{name:"entity_token_type_ids",val:": Optional = None"},{name:"entity_position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.LukeForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LukeForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LukeForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LukeForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LukeForSequenceClassification.forward.entity_ids",description:`<strong>entity_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>) &#x2014;
Indices of entity tokens in the entity vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForSequenceClassification.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding entity token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for entity tokens that are <strong>not masked</strong>,</li>
<li>0 for entity tokens that are <strong>masked</strong>.</li>
</ul>`,name:"entity_attention_mask"},{anchor:"transformers.LukeForSequenceClassification.forward.entity_token_type_ids",description:`<strong>entity_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the entity token inputs. Indices are
selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>portion A</em> entity token,</li>
<li>1 corresponds to a <em>portion B</em> entity token.</li>
</ul>`,name:"entity_token_type_ids"},{anchor:"transformers.LukeForSequenceClassification.forward.entity_position_ids",description:`<strong>entity_position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length, max_mention_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input entity in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"entity_position_ids"},{anchor:"transformers.LukeForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LukeForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LukeForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LukeForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LukeForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LukeForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1798",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.models.luke.modeling_luke.LukeSequenceClassifierOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig"
>LukeConfig</a>) and inputs.</p>
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
<p><strong>entity_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, entity_length, hidden_size)</code>. Entity hidden-states of the model at the output of each
layer plus the initial entity embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.models.luke.modeling_luke.LukeSequenceClassifierOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xe=new fe({props:{$$slots:{default:[Ba]},$$scope:{ctx:w}}}),$e=new ue({props:{anchor:"transformers.LukeForSequenceClassification.forward.example",$$slots:{default:[Na]},$$scope:{ctx:w}}}),Ue=new ue({props:{anchor:"transformers.LukeForSequenceClassification.forward.example-2",$$slots:{default:[Ea]},$$scope:{ctx:w}}}),bt=new N({props:{title:"LukeForMultipleChoice",local:"transformers.LukeForMultipleChoice",headingTag:"h2"}}),Tt=new L({props:{name:"class transformers.LukeForMultipleChoice",anchor:"transformers.LukeForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L2107"}}),Mt=new L({props:{name:"forward",anchor:"transformers.LukeForMultipleChoice.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"entity_ids",val:": Optional = None"},{name:"entity_attention_mask",val:": Optional = None"},{name:"entity_token_type_ids",val:": Optional = None"},{name:"entity_position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.LukeForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LukeForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LukeForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LukeForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LukeForMultipleChoice.forward.entity_ids",description:`<strong>entity_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>) &#x2014;
Indices of entity tokens in the entity vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForMultipleChoice.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding entity token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for entity tokens that are <strong>not masked</strong>,</li>
<li>0 for entity tokens that are <strong>masked</strong>.</li>
</ul>`,name:"entity_attention_mask"},{anchor:"transformers.LukeForMultipleChoice.forward.entity_token_type_ids",description:`<strong>entity_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the entity token inputs. Indices are
selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>portion A</em> entity token,</li>
<li>1 corresponds to a <em>portion B</em> entity token.</li>
</ul>`,name:"entity_token_type_ids"},{anchor:"transformers.LukeForMultipleChoice.forward.entity_position_ids",description:`<strong>entity_position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length, max_mention_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input entity in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"entity_position_ids"},{anchor:"transformers.LukeForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LukeForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LukeForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LukeForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LukeForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LukeForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L2127",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.models.luke.modeling_luke.LukeMultipleChoiceModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig"
>LukeConfig</a>) and inputs.</p>
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
<p><strong>entity_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, entity_length, hidden_size)</code>. Entity hidden-states of the model at the output of each
layer plus the initial entity embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.models.luke.modeling_luke.LukeMultipleChoiceModelOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fe=new fe({props:{$$slots:{default:[Ra]},$$scope:{ctx:w}}}),We=new ue({props:{anchor:"transformers.LukeForMultipleChoice.forward.example",$$slots:{default:[Ga]},$$scope:{ctx:w}}}),wt=new N({props:{title:"LukeForTokenClassification",local:"transformers.LukeForTokenClassification",headingTag:"h2"}}),vt=new L({props:{name:"class transformers.LukeForTokenClassification",anchor:"transformers.LukeForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1891"}}),zt=new L({props:{name:"forward",anchor:"transformers.LukeForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"entity_ids",val:": Optional = None"},{name:"entity_attention_mask",val:": Optional = None"},{name:"entity_token_type_ids",val:": Optional = None"},{name:"entity_position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.LukeForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LukeForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LukeForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LukeForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LukeForTokenClassification.forward.entity_ids",description:`<strong>entity_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>) &#x2014;
Indices of entity tokens in the entity vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForTokenClassification.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding entity token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for entity tokens that are <strong>not masked</strong>,</li>
<li>0 for entity tokens that are <strong>masked</strong>.</li>
</ul>`,name:"entity_attention_mask"},{anchor:"transformers.LukeForTokenClassification.forward.entity_token_type_ids",description:`<strong>entity_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the entity token inputs. Indices are
selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>portion A</em> entity token,</li>
<li>1 corresponds to a <em>portion B</em> entity token.</li>
</ul>`,name:"entity_token_type_ids"},{anchor:"transformers.LukeForTokenClassification.forward.entity_position_ids",description:`<strong>entity_position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length, max_mention_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input entity in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"entity_position_ids"},{anchor:"transformers.LukeForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LukeForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LukeForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LukeForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LukeForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LukeForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1913",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.models.luke.modeling_luke.LukeTokenClassifierOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig"
>LukeConfig</a>) and inputs.</p>
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
<p><strong>entity_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, entity_length, hidden_size)</code>. Entity hidden-states of the model at the output of each
layer plus the initial entity embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.models.luke.modeling_luke.LukeTokenClassifierOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ie=new fe({props:{$$slots:{default:[Va]},$$scope:{ctx:w}}}),Ze=new ue({props:{anchor:"transformers.LukeForTokenClassification.forward.example",$$slots:{default:[Xa]},$$scope:{ctx:w}}}),jt=new N({props:{title:"LukeForQuestionAnswering",local:"transformers.LukeForQuestionAnswering",headingTag:"h2"}}),Lt=new L({props:{name:"class transformers.LukeForQuestionAnswering",anchor:"transformers.LukeForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LukeForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig">LukeConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L1988"}}),Jt=new L({props:{name:"forward",anchor:"transformers.LukeForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"entity_ids",val:": Optional = None"},{name:"entity_attention_mask",val:": Optional = None"},{name:"entity_token_type_ids",val:": Optional = None"},{name:"entity_position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"start_positions",val:": Optional = None"},{name:"end_positions",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.LukeForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LukeForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LukeForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LukeForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LukeForQuestionAnswering.forward.entity_ids",description:`<strong>entity_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>) &#x2014;
Indices of entity tokens in the entity vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.`,name:"entity_ids"},{anchor:"transformers.LukeForQuestionAnswering.forward.entity_attention_mask",description:`<strong>entity_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding entity token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for entity tokens that are <strong>not masked</strong>,</li>
<li>0 for entity tokens that are <strong>masked</strong>.</li>
</ul>`,name:"entity_attention_mask"},{anchor:"transformers.LukeForQuestionAnswering.forward.entity_token_type_ids",description:`<strong>entity_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the entity token inputs. Indices are
selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>portion A</em> entity token,</li>
<li>1 corresponds to a <em>portion B</em> entity token.</li>
</ul>`,name:"entity_token_type_ids"},{anchor:"transformers.LukeForQuestionAnswering.forward.entity_position_ids",description:`<strong>entity_position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, entity_length, max_mention_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input entity in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"entity_position_ids"},{anchor:"transformers.LukeForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LukeForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LukeForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LukeForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LukeForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LukeForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LukeForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/luke/modeling_luke.py#L2007",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.models.luke.modeling_luke.LukeQuestionAnsweringModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/luke#transformers.LukeConfig"
>LukeConfig</a>) and inputs.</p>
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
<p><strong>entity_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, entity_length, hidden_size)</code>. Entity hidden-states of the model at the output of each
layer plus the initial entity embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.models.luke.modeling_luke.LukeQuestionAnsweringModelOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qe=new fe({props:{$$slots:{default:[Sa]},$$scope:{ctx:w}}}),Be=new ue({props:{anchor:"transformers.LukeForQuestionAnswering.forward.example",$$slots:{default:[Ha]},$$scope:{ctx:w}}}),{c(){t=c("meta"),b=s(),i=c("p"),d=s(),h(T.$$.fragment),n=s(),h(M.$$.fragment),wn=s(),Ee=c("p"),Ee.innerHTML=zs,vn=s(),Re=c("p"),Re.textContent=js,zn=s(),Ge=c("p"),Ge.innerHTML=Ls,jn=s(),Ve=c("p"),Ve.innerHTML=Js,Ln=s(),h(Xe.$$.fragment),Jn=s(),Se=c("ul"),Se.innerHTML=Cs,Cn=s(),He=c("p"),He.textContent=xs,xn=s(),h(Qe.$$.fragment),$n=s(),h(Ae.$$.fragment),Un=s(),Pe=c("ul"),Pe.innerHTML=$s,Fn=s(),h(Ye.$$.fragment),Wn=s(),R=c("div"),h(Oe.$$.fragment),oo=s(),xt=c("p"),xt.innerHTML=Us,so=s(),$t=c("p"),$t.innerHTML=Fs,ao=s(),h(_e.$$.fragment),In=s(),h(De.$$.fragment),Zn=s(),j=c("div"),h(Ke.$$.fragment),io=s(),Ut=c("p"),Ut.textContent=Ws,ro=s(),Ft=c("p"),Ft.textContent=Is,lo=s(),h(ye.$$.fragment),co=s(),Wt=c("p"),Wt.innerHTML=Zs,po=s(),h(ke.$$.fragment),mo=s(),It=c("p"),It.innerHTML=qs,uo=s(),be=c("div"),h(et.$$.fragment),ho=s(),Zt=c("p"),Zt.textContent=Bs,fo=s(),qt=c("div"),h(tt.$$.fragment),qn=s(),h(nt.$$.fragment),Bn=s(),x=c("div"),h(ot.$$.fragment),go=s(),Bt=c("p"),Bt.textContent=Ns,_o=s(),Nt=c("p"),Nt.innerHTML=Es,yo=s(),Et=c("p"),Et.innerHTML=Rs,ko=s(),D=c("div"),h(st.$$.fragment),bo=s(),Rt=c("p"),Rt.innerHTML=Gs,To=s(),h(Te.$$.fragment),Mo=s(),h(Me.$$.fragment),Nn=s(),h(at.$$.fragment),En=s(),$=c("div"),h(it.$$.fragment),wo=s(),Gt=c("p"),Gt.textContent=Vs,vo=s(),Vt=c("p"),Vt.innerHTML=Xs,zo=s(),Xt=c("p"),Xt.innerHTML=Ss,jo=s(),he=c("div"),h(rt.$$.fragment),Lo=s(),St=c("p"),St.innerHTML=Hs,Jo=s(),h(we.$$.fragment),Rn=s(),h(lt.$$.fragment),Gn=s(),U=c("div"),h(dt.$$.fragment),Co=s(),Ht=c("p"),Ht.textContent=Qs,xo=s(),Qt=c("p"),Qt.innerHTML=As,$o=s(),At=c("p"),At.innerHTML=Ps,Uo=s(),K=c("div"),h(ct.$$.fragment),Fo=s(),Pt=c("p"),Pt.innerHTML=Ys,Wo=s(),h(ve.$$.fragment),Io=s(),h(ze.$$.fragment),Vn=s(),h(pt.$$.fragment),Xn=s(),F=c("div"),h(mt.$$.fragment),Zo=s(),Yt=c("p"),Yt.textContent=Os,qo=s(),Ot=c("p"),Ot.innerHTML=Ds,Bo=s(),Dt=c("p"),Dt.innerHTML=Ks,No=s(),ee=c("div"),h(ut.$$.fragment),Eo=s(),Kt=c("p"),Kt.innerHTML=ea,Ro=s(),h(je.$$.fragment),Go=s(),h(Le.$$.fragment),Sn=s(),h(ht.$$.fragment),Hn=s(),W=c("div"),h(ft.$$.fragment),Vo=s(),en=c("p"),en.textContent=ta,Xo=s(),tn=c("p"),tn.innerHTML=na,So=s(),nn=c("p"),nn.innerHTML=oa,Ho=s(),te=c("div"),h(gt.$$.fragment),Qo=s(),on=c("p"),on.innerHTML=sa,Ao=s(),h(Je.$$.fragment),Po=s(),h(Ce.$$.fragment),Qn=s(),h(_t.$$.fragment),An=s(),I=c("div"),h(yt.$$.fragment),Yo=s(),sn=c("p"),sn.textContent=aa,Oo=s(),an=c("p"),an.innerHTML=ia,Do=s(),rn=c("p"),rn.innerHTML=ra,Ko=s(),E=c("div"),h(kt.$$.fragment),es=s(),ln=c("p"),ln.innerHTML=la,ts=s(),h(xe.$$.fragment),ns=s(),h($e.$$.fragment),os=s(),h(Ue.$$.fragment),Pn=s(),h(bt.$$.fragment),Yn=s(),Z=c("div"),h(Tt.$$.fragment),ss=s(),dn=c("p"),dn.textContent=da,as=s(),cn=c("p"),cn.innerHTML=ca,is=s(),pn=c("p"),pn.innerHTML=pa,rs=s(),ne=c("div"),h(Mt.$$.fragment),ls=s(),mn=c("p"),mn.innerHTML=ma,ds=s(),h(Fe.$$.fragment),cs=s(),h(We.$$.fragment),On=s(),h(wt.$$.fragment),Dn=s(),q=c("div"),h(vt.$$.fragment),ps=s(),un=c("p"),un.innerHTML=ua,ms=s(),hn=c("p"),hn.innerHTML=ha,us=s(),fn=c("p"),fn.innerHTML=fa,hs=s(),oe=c("div"),h(zt.$$.fragment),fs=s(),gn=c("p"),gn.innerHTML=ga,gs=s(),h(Ie.$$.fragment),_s=s(),h(Ze.$$.fragment),Kn=s(),h(jt.$$.fragment),eo=s(),B=c("div"),h(Lt.$$.fragment),ys=s(),_n=c("p"),_n.innerHTML=_a,ks=s(),yn=c("p"),yn.innerHTML=ya,bs=s(),kn=c("p"),kn.innerHTML=ka,Ts=s(),se=c("div"),h(Jt.$$.fragment),Ms=s(),bn=c("p"),bn.innerHTML=ba,ws=s(),h(qe.$$.fragment),vs=s(),h(Be.$$.fragment),to=s(),Tn=c("p"),this.h()},l(e){const r=za("svelte-u9bgzb",document.head);t=p(r,"META",{name:!0,content:!0}),r.forEach(l),b=a(e),i=p(e,"P",{}),v(i).forEach(l),d=a(e),f(T.$$.fragment,e),n=a(e),f(M.$$.fragment,e),wn=a(e),Ee=p(e,"P",{"data-svelte-h":!0}),u(Ee)!=="svelte-1oaehw3"&&(Ee.innerHTML=zs),vn=a(e),Re=p(e,"P",{"data-svelte-h":!0}),u(Re)!=="svelte-vfdo9a"&&(Re.textContent=js),zn=a(e),Ge=p(e,"P",{"data-svelte-h":!0}),u(Ge)!=="svelte-cwy98g"&&(Ge.innerHTML=Ls),jn=a(e),Ve=p(e,"P",{"data-svelte-h":!0}),u(Ve)!=="svelte-165dmn4"&&(Ve.innerHTML=Js),Ln=a(e),f(Xe.$$.fragment,e),Jn=a(e),Se=p(e,"UL",{"data-svelte-h":!0}),u(Se)!=="svelte-fba2cf"&&(Se.innerHTML=Cs),Cn=a(e),He=p(e,"P",{"data-svelte-h":!0}),u(He)!=="svelte-1vn55jb"&&(He.textContent=xs),xn=a(e),f(Qe.$$.fragment,e),$n=a(e),f(Ae.$$.fragment,e),Un=a(e),Pe=p(e,"UL",{"data-svelte-h":!0}),u(Pe)!=="svelte-wdelg9"&&(Pe.innerHTML=$s),Fn=a(e),f(Ye.$$.fragment,e),Wn=a(e),R=p(e,"DIV",{class:!0});var ie=v(R);f(Oe.$$.fragment,ie),oo=a(ie),xt=p(ie,"P",{"data-svelte-h":!0}),u(xt)!=="svelte-vf0gpk"&&(xt.innerHTML=Us),so=a(ie),$t=p(ie,"P",{"data-svelte-h":!0}),u($t)!=="svelte-o55m63"&&($t.innerHTML=Fs),ao=a(ie),f(_e.$$.fragment,ie),ie.forEach(l),In=a(e),f(De.$$.fragment,e),Zn=a(e),j=p(e,"DIV",{class:!0});var J=v(j);f(Ke.$$.fragment,J),io=a(J),Ut=p(J,"P",{"data-svelte-h":!0}),u(Ut)!=="svelte-1dy4zle"&&(Ut.textContent=Ws),ro=a(J),Ft=p(J,"P",{"data-svelte-h":!0}),u(Ft)!=="svelte-1s077p3"&&(Ft.textContent=Is),lo=a(J),f(ye.$$.fragment,J),co=a(J),Wt=p(J,"P",{"data-svelte-h":!0}),u(Wt)!=="svelte-1jfcabo"&&(Wt.innerHTML=Zs),po=a(J),f(ke.$$.fragment,J),mo=a(J),It=p(J,"P",{"data-svelte-h":!0}),u(It)!=="svelte-1qqca8q"&&(It.innerHTML=qs),uo=a(J),be=p(J,"DIV",{class:!0});var Ct=v(be);f(et.$$.fragment,Ct),ho=a(Ct),Zt=p(Ct,"P",{"data-svelte-h":!0}),u(Zt)!=="svelte-16lcbtv"&&(Zt.textContent=Bs),Ct.forEach(l),fo=a(J),qt=p(J,"DIV",{class:!0});var Mn=v(qt);f(tt.$$.fragment,Mn),Mn.forEach(l),J.forEach(l),qn=a(e),f(nt.$$.fragment,e),Bn=a(e),x=p(e,"DIV",{class:!0});var G=v(x);f(ot.$$.fragment,G),go=a(G),Bt=p(G,"P",{"data-svelte-h":!0}),u(Bt)!=="svelte-h3pm2w"&&(Bt.textContent=Ns),_o=a(G),Nt=p(G,"P",{"data-svelte-h":!0}),u(Nt)!=="svelte-6pahdo"&&(Nt.innerHTML=Es),yo=a(G),Et=p(G,"P",{"data-svelte-h":!0}),u(Et)!=="svelte-hswkmf"&&(Et.innerHTML=Rs),ko=a(G),D=p(G,"DIV",{class:!0});var re=v(D);f(st.$$.fragment,re),bo=a(re),Rt=p(re,"P",{"data-svelte-h":!0}),u(Rt)!=="svelte-1kdc4la"&&(Rt.innerHTML=Gs),To=a(re),f(Te.$$.fragment,re),Mo=a(re),f(Me.$$.fragment,re),re.forEach(l),G.forEach(l),Nn=a(e),f(at.$$.fragment,e),En=a(e),$=p(e,"DIV",{class:!0});var V=v($);f(it.$$.fragment,V),wo=a(V),Gt=p(V,"P",{"data-svelte-h":!0}),u(Gt)!=="svelte-1ebahsp"&&(Gt.textContent=Vs),vo=a(V),Vt=p(V,"P",{"data-svelte-h":!0}),u(Vt)!=="svelte-6pahdo"&&(Vt.innerHTML=Xs),zo=a(V),Xt=p(V,"P",{"data-svelte-h":!0}),u(Xt)!=="svelte-hswkmf"&&(Xt.innerHTML=Ss),jo=a(V),he=p(V,"DIV",{class:!0});var ge=v(he);f(rt.$$.fragment,ge),Lo=a(ge),St=p(ge,"P",{"data-svelte-h":!0}),u(St)!=="svelte-1mzgwbi"&&(St.innerHTML=Hs),Jo=a(ge),f(we.$$.fragment,ge),ge.forEach(l),V.forEach(l),Rn=a(e),f(lt.$$.fragment,e),Gn=a(e),U=p(e,"DIV",{class:!0});var X=v(U);f(dt.$$.fragment,X),Co=a(X),Ht=p(X,"P",{"data-svelte-h":!0}),u(Ht)!=="svelte-fm8z69"&&(Ht.textContent=Qs),xo=a(X),Qt=p(X,"P",{"data-svelte-h":!0}),u(Qt)!=="svelte-6pahdo"&&(Qt.innerHTML=As),$o=a(X),At=p(X,"P",{"data-svelte-h":!0}),u(At)!=="svelte-hswkmf"&&(At.innerHTML=Ps),Uo=a(X),K=p(X,"DIV",{class:!0});var le=v(K);f(ct.$$.fragment,le),Fo=a(le),Pt=p(le,"P",{"data-svelte-h":!0}),u(Pt)!=="svelte-1uq656a"&&(Pt.innerHTML=Ys),Wo=a(le),f(ve.$$.fragment,le),Io=a(le),f(ze.$$.fragment,le),le.forEach(l),X.forEach(l),Vn=a(e),f(pt.$$.fragment,e),Xn=a(e),F=p(e,"DIV",{class:!0});var S=v(F);f(mt.$$.fragment,S),Zo=a(S),Yt=p(S,"P",{"data-svelte-h":!0}),u(Yt)!=="svelte-1qackjh"&&(Yt.textContent=Os),qo=a(S),Ot=p(S,"P",{"data-svelte-h":!0}),u(Ot)!=="svelte-6pahdo"&&(Ot.innerHTML=Ds),Bo=a(S),Dt=p(S,"P",{"data-svelte-h":!0}),u(Dt)!=="svelte-hswkmf"&&(Dt.innerHTML=Ks),No=a(S),ee=p(S,"DIV",{class:!0});var de=v(ee);f(ut.$$.fragment,de),Eo=a(de),Kt=p(de,"P",{"data-svelte-h":!0}),u(Kt)!=="svelte-f9s64e"&&(Kt.innerHTML=ea),Ro=a(de),f(je.$$.fragment,de),Go=a(de),f(Le.$$.fragment,de),de.forEach(l),S.forEach(l),Sn=a(e),f(ht.$$.fragment,e),Hn=a(e),W=p(e,"DIV",{class:!0});var H=v(W);f(ft.$$.fragment,H),Vo=a(H),en=p(H,"P",{"data-svelte-h":!0}),u(en)!=="svelte-3wjma0"&&(en.textContent=ta),Xo=a(H),tn=p(H,"P",{"data-svelte-h":!0}),u(tn)!=="svelte-6pahdo"&&(tn.innerHTML=na),So=a(H),nn=p(H,"P",{"data-svelte-h":!0}),u(nn)!=="svelte-hswkmf"&&(nn.innerHTML=oa),Ho=a(H),te=p(H,"DIV",{class:!0});var ce=v(te);f(gt.$$.fragment,ce),Qo=a(ce),on=p(ce,"P",{"data-svelte-h":!0}),u(on)!=="svelte-70rkjy"&&(on.innerHTML=sa),Ao=a(ce),f(Je.$$.fragment,ce),Po=a(ce),f(Ce.$$.fragment,ce),ce.forEach(l),H.forEach(l),Qn=a(e),f(_t.$$.fragment,e),An=a(e),I=p(e,"DIV",{class:!0});var Q=v(I);f(yt.$$.fragment,Q),Yo=a(Q),sn=p(Q,"P",{"data-svelte-h":!0}),u(sn)!=="svelte-1k7t2k"&&(sn.textContent=aa),Oo=a(Q),an=p(Q,"P",{"data-svelte-h":!0}),u(an)!=="svelte-6pahdo"&&(an.innerHTML=ia),Do=a(Q),rn=p(Q,"P",{"data-svelte-h":!0}),u(rn)!=="svelte-hswkmf"&&(rn.innerHTML=ra),Ko=a(Q),E=p(Q,"DIV",{class:!0});var A=v(E);f(kt.$$.fragment,A),es=a(A),ln=p(A,"P",{"data-svelte-h":!0}),u(ln)!=="svelte-eyyh52"&&(ln.innerHTML=la),ts=a(A),f(xe.$$.fragment,A),ns=a(A),f($e.$$.fragment,A),os=a(A),f(Ue.$$.fragment,A),A.forEach(l),Q.forEach(l),Pn=a(e),f(bt.$$.fragment,e),Yn=a(e),Z=p(e,"DIV",{class:!0});var P=v(Z);f(Tt.$$.fragment,P),ss=a(P),dn=p(P,"P",{"data-svelte-h":!0}),u(dn)!=="svelte-1j59g8c"&&(dn.textContent=da),as=a(P),cn=p(P,"P",{"data-svelte-h":!0}),u(cn)!=="svelte-6pahdo"&&(cn.innerHTML=ca),is=a(P),pn=p(P,"P",{"data-svelte-h":!0}),u(pn)!=="svelte-hswkmf"&&(pn.innerHTML=pa),rs=a(P),ne=p(P,"DIV",{class:!0});var pe=v(ne);f(Mt.$$.fragment,pe),ls=a(pe),mn=p(pe,"P",{"data-svelte-h":!0}),u(mn)!=="svelte-17xwb9a"&&(mn.innerHTML=ma),ds=a(pe),f(Fe.$$.fragment,pe),cs=a(pe),f(We.$$.fragment,pe),pe.forEach(l),P.forEach(l),On=a(e),f(wt.$$.fragment,e),Dn=a(e),q=p(e,"DIV",{class:!0});var Y=v(q);f(vt.$$.fragment,Y),ps=a(Y),un=p(Y,"P",{"data-svelte-h":!0}),u(un)!=="svelte-19t8p80"&&(un.innerHTML=ua),ms=a(Y),hn=p(Y,"P",{"data-svelte-h":!0}),u(hn)!=="svelte-6pahdo"&&(hn.innerHTML=ha),us=a(Y),fn=p(Y,"P",{"data-svelte-h":!0}),u(fn)!=="svelte-hswkmf"&&(fn.innerHTML=fa),hs=a(Y),oe=p(Y,"DIV",{class:!0});var me=v(oe);f(zt.$$.fragment,me),fs=a(me),gn=p(me,"P",{"data-svelte-h":!0}),u(gn)!=="svelte-q45qng"&&(gn.innerHTML=ga),gs=a(me),f(Ie.$$.fragment,me),_s=a(me),f(Ze.$$.fragment,me),me.forEach(l),Y.forEach(l),Kn=a(e),f(jt.$$.fragment,e),eo=a(e),B=p(e,"DIV",{class:!0});var O=v(B);f(Lt.$$.fragment,O),ys=a(O),_n=p(O,"P",{"data-svelte-h":!0}),u(_n)!=="svelte-1ji88o5"&&(_n.innerHTML=_a),ks=a(O),yn=p(O,"P",{"data-svelte-h":!0}),u(yn)!=="svelte-6pahdo"&&(yn.innerHTML=ya),bs=a(O),kn=p(O,"P",{"data-svelte-h":!0}),u(kn)!=="svelte-hswkmf"&&(kn.innerHTML=ka),Ts=a(O),se=p(O,"DIV",{class:!0});var Ne=v(se);f(Jt.$$.fragment,Ne),Ms=a(Ne),bn=p(Ne,"P",{"data-svelte-h":!0}),u(bn)!=="svelte-kj4uhy"&&(bn.innerHTML=ba),ws=a(Ne),f(qe.$$.fragment,Ne),vs=a(Ne),f(Be.$$.fragment,Ne),Ne.forEach(l),O.forEach(l),to=a(e),Tn=p(e,"P",{}),v(Tn).forEach(l),this.h()},h(){z(t,"name","hf:doc:metadata"),z(t,"content",Aa),z(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),z(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),z(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),z(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),z(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),z(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),z(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),z($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),z(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),z(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),z(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),z(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),z(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),z(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),z(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),z(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),z(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),z(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),z(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),z(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),z(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),z(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,r){o(document.head,t),m(e,b,r),m(e,i,r),m(e,d,r),g(T,e,r),m(e,n,r),g(M,e,r),m(e,wn,r),m(e,Ee,r),m(e,vn,r),m(e,Re,r),m(e,zn,r),m(e,Ge,r),m(e,jn,r),m(e,Ve,r),m(e,Ln,r),g(Xe,e,r),m(e,Jn,r),m(e,Se,r),m(e,Cn,r),m(e,He,r),m(e,xn,r),g(Qe,e,r),m(e,$n,r),g(Ae,e,r),m(e,Un,r),m(e,Pe,r),m(e,Fn,r),g(Ye,e,r),m(e,Wn,r),m(e,R,r),g(Oe,R,null),o(R,oo),o(R,xt),o(R,so),o(R,$t),o(R,ao),g(_e,R,null),m(e,In,r),g(De,e,r),m(e,Zn,r),m(e,j,r),g(Ke,j,null),o(j,io),o(j,Ut),o(j,ro),o(j,Ft),o(j,lo),g(ye,j,null),o(j,co),o(j,Wt),o(j,po),g(ke,j,null),o(j,mo),o(j,It),o(j,uo),o(j,be),g(et,be,null),o(be,ho),o(be,Zt),o(j,fo),o(j,qt),g(tt,qt,null),m(e,qn,r),g(nt,e,r),m(e,Bn,r),m(e,x,r),g(ot,x,null),o(x,go),o(x,Bt),o(x,_o),o(x,Nt),o(x,yo),o(x,Et),o(x,ko),o(x,D),g(st,D,null),o(D,bo),o(D,Rt),o(D,To),g(Te,D,null),o(D,Mo),g(Me,D,null),m(e,Nn,r),g(at,e,r),m(e,En,r),m(e,$,r),g(it,$,null),o($,wo),o($,Gt),o($,vo),o($,Vt),o($,zo),o($,Xt),o($,jo),o($,he),g(rt,he,null),o(he,Lo),o(he,St),o(he,Jo),g(we,he,null),m(e,Rn,r),g(lt,e,r),m(e,Gn,r),m(e,U,r),g(dt,U,null),o(U,Co),o(U,Ht),o(U,xo),o(U,Qt),o(U,$o),o(U,At),o(U,Uo),o(U,K),g(ct,K,null),o(K,Fo),o(K,Pt),o(K,Wo),g(ve,K,null),o(K,Io),g(ze,K,null),m(e,Vn,r),g(pt,e,r),m(e,Xn,r),m(e,F,r),g(mt,F,null),o(F,Zo),o(F,Yt),o(F,qo),o(F,Ot),o(F,Bo),o(F,Dt),o(F,No),o(F,ee),g(ut,ee,null),o(ee,Eo),o(ee,Kt),o(ee,Ro),g(je,ee,null),o(ee,Go),g(Le,ee,null),m(e,Sn,r),g(ht,e,r),m(e,Hn,r),m(e,W,r),g(ft,W,null),o(W,Vo),o(W,en),o(W,Xo),o(W,tn),o(W,So),o(W,nn),o(W,Ho),o(W,te),g(gt,te,null),o(te,Qo),o(te,on),o(te,Ao),g(Je,te,null),o(te,Po),g(Ce,te,null),m(e,Qn,r),g(_t,e,r),m(e,An,r),m(e,I,r),g(yt,I,null),o(I,Yo),o(I,sn),o(I,Oo),o(I,an),o(I,Do),o(I,rn),o(I,Ko),o(I,E),g(kt,E,null),o(E,es),o(E,ln),o(E,ts),g(xe,E,null),o(E,ns),g($e,E,null),o(E,os),g(Ue,E,null),m(e,Pn,r),g(bt,e,r),m(e,Yn,r),m(e,Z,r),g(Tt,Z,null),o(Z,ss),o(Z,dn),o(Z,as),o(Z,cn),o(Z,is),o(Z,pn),o(Z,rs),o(Z,ne),g(Mt,ne,null),o(ne,ls),o(ne,mn),o(ne,ds),g(Fe,ne,null),o(ne,cs),g(We,ne,null),m(e,On,r),g(wt,e,r),m(e,Dn,r),m(e,q,r),g(vt,q,null),o(q,ps),o(q,un),o(q,ms),o(q,hn),o(q,us),o(q,fn),o(q,hs),o(q,oe),g(zt,oe,null),o(oe,fs),o(oe,gn),o(oe,gs),g(Ie,oe,null),o(oe,_s),g(Ze,oe,null),m(e,Kn,r),g(jt,e,r),m(e,eo,r),m(e,B,r),g(Lt,B,null),o(B,ys),o(B,_n),o(B,ks),o(B,yn),o(B,bs),o(B,kn),o(B,Ts),o(B,se),g(Jt,se,null),o(se,Ms),o(se,bn),o(se,ws),g(qe,se,null),o(se,vs),g(Be,se,null),m(e,to,r),m(e,Tn,r),no=!0},p(e,[r]){const ie={};r&2&&(ie.$$scope={dirty:r,ctx:e}),_e.$set(ie);const J={};r&2&&(J.$$scope={dirty:r,ctx:e}),ye.$set(J);const Ct={};r&2&&(Ct.$$scope={dirty:r,ctx:e}),ke.$set(Ct);const Mn={};r&2&&(Mn.$$scope={dirty:r,ctx:e}),Te.$set(Mn);const G={};r&2&&(G.$$scope={dirty:r,ctx:e}),Me.$set(G);const re={};r&2&&(re.$$scope={dirty:r,ctx:e}),we.$set(re);const V={};r&2&&(V.$$scope={dirty:r,ctx:e}),ve.$set(V);const ge={};r&2&&(ge.$$scope={dirty:r,ctx:e}),ze.$set(ge);const X={};r&2&&(X.$$scope={dirty:r,ctx:e}),je.$set(X);const le={};r&2&&(le.$$scope={dirty:r,ctx:e}),Le.$set(le);const S={};r&2&&(S.$$scope={dirty:r,ctx:e}),Je.$set(S);const de={};r&2&&(de.$$scope={dirty:r,ctx:e}),Ce.$set(de);const H={};r&2&&(H.$$scope={dirty:r,ctx:e}),xe.$set(H);const ce={};r&2&&(ce.$$scope={dirty:r,ctx:e}),$e.$set(ce);const Q={};r&2&&(Q.$$scope={dirty:r,ctx:e}),Ue.$set(Q);const A={};r&2&&(A.$$scope={dirty:r,ctx:e}),Fe.$set(A);const P={};r&2&&(P.$$scope={dirty:r,ctx:e}),We.$set(P);const pe={};r&2&&(pe.$$scope={dirty:r,ctx:e}),Ie.$set(pe);const Y={};r&2&&(Y.$$scope={dirty:r,ctx:e}),Ze.$set(Y);const me={};r&2&&(me.$$scope={dirty:r,ctx:e}),qe.$set(me);const O={};r&2&&(O.$$scope={dirty:r,ctx:e}),Be.$set(O)},i(e){no||(_(T.$$.fragment,e),_(M.$$.fragment,e),_(Xe.$$.fragment,e),_(Qe.$$.fragment,e),_(Ae.$$.fragment,e),_(Ye.$$.fragment,e),_(Oe.$$.fragment,e),_(_e.$$.fragment,e),_(De.$$.fragment,e),_(Ke.$$.fragment,e),_(ye.$$.fragment,e),_(ke.$$.fragment,e),_(et.$$.fragment,e),_(tt.$$.fragment,e),_(nt.$$.fragment,e),_(ot.$$.fragment,e),_(st.$$.fragment,e),_(Te.$$.fragment,e),_(Me.$$.fragment,e),_(at.$$.fragment,e),_(it.$$.fragment,e),_(rt.$$.fragment,e),_(we.$$.fragment,e),_(lt.$$.fragment,e),_(dt.$$.fragment,e),_(ct.$$.fragment,e),_(ve.$$.fragment,e),_(ze.$$.fragment,e),_(pt.$$.fragment,e),_(mt.$$.fragment,e),_(ut.$$.fragment,e),_(je.$$.fragment,e),_(Le.$$.fragment,e),_(ht.$$.fragment,e),_(ft.$$.fragment,e),_(gt.$$.fragment,e),_(Je.$$.fragment,e),_(Ce.$$.fragment,e),_(_t.$$.fragment,e),_(yt.$$.fragment,e),_(kt.$$.fragment,e),_(xe.$$.fragment,e),_($e.$$.fragment,e),_(Ue.$$.fragment,e),_(bt.$$.fragment,e),_(Tt.$$.fragment,e),_(Mt.$$.fragment,e),_(Fe.$$.fragment,e),_(We.$$.fragment,e),_(wt.$$.fragment,e),_(vt.$$.fragment,e),_(zt.$$.fragment,e),_(Ie.$$.fragment,e),_(Ze.$$.fragment,e),_(jt.$$.fragment,e),_(Lt.$$.fragment,e),_(Jt.$$.fragment,e),_(qe.$$.fragment,e),_(Be.$$.fragment,e),no=!0)},o(e){y(T.$$.fragment,e),y(M.$$.fragment,e),y(Xe.$$.fragment,e),y(Qe.$$.fragment,e),y(Ae.$$.fragment,e),y(Ye.$$.fragment,e),y(Oe.$$.fragment,e),y(_e.$$.fragment,e),y(De.$$.fragment,e),y(Ke.$$.fragment,e),y(ye.$$.fragment,e),y(ke.$$.fragment,e),y(et.$$.fragment,e),y(tt.$$.fragment,e),y(nt.$$.fragment,e),y(ot.$$.fragment,e),y(st.$$.fragment,e),y(Te.$$.fragment,e),y(Me.$$.fragment,e),y(at.$$.fragment,e),y(it.$$.fragment,e),y(rt.$$.fragment,e),y(we.$$.fragment,e),y(lt.$$.fragment,e),y(dt.$$.fragment,e),y(ct.$$.fragment,e),y(ve.$$.fragment,e),y(ze.$$.fragment,e),y(pt.$$.fragment,e),y(mt.$$.fragment,e),y(ut.$$.fragment,e),y(je.$$.fragment,e),y(Le.$$.fragment,e),y(ht.$$.fragment,e),y(ft.$$.fragment,e),y(gt.$$.fragment,e),y(Je.$$.fragment,e),y(Ce.$$.fragment,e),y(_t.$$.fragment,e),y(yt.$$.fragment,e),y(kt.$$.fragment,e),y(xe.$$.fragment,e),y($e.$$.fragment,e),y(Ue.$$.fragment,e),y(bt.$$.fragment,e),y(Tt.$$.fragment,e),y(Mt.$$.fragment,e),y(Fe.$$.fragment,e),y(We.$$.fragment,e),y(wt.$$.fragment,e),y(vt.$$.fragment,e),y(zt.$$.fragment,e),y(Ie.$$.fragment,e),y(Ze.$$.fragment,e),y(jt.$$.fragment,e),y(Lt.$$.fragment,e),y(Jt.$$.fragment,e),y(qe.$$.fragment,e),y(Be.$$.fragment,e),no=!1},d(e){e&&(l(b),l(i),l(d),l(n),l(wn),l(Ee),l(vn),l(Re),l(zn),l(Ge),l(jn),l(Ve),l(Ln),l(Jn),l(Se),l(Cn),l(He),l(xn),l($n),l(Un),l(Pe),l(Fn),l(Wn),l(R),l(In),l(Zn),l(j),l(qn),l(Bn),l(x),l(Nn),l(En),l($),l(Rn),l(Gn),l(U),l(Vn),l(Xn),l(F),l(Sn),l(Hn),l(W),l(Qn),l(An),l(I),l(Pn),l(Yn),l(Z),l(On),l(Dn),l(q),l(Kn),l(eo),l(B),l(to),l(Tn)),l(t),k(T,e),k(M,e),k(Xe,e),k(Qe,e),k(Ae,e),k(Ye,e),k(Oe),k(_e),k(De,e),k(Ke),k(ye),k(ke),k(et),k(tt),k(nt,e),k(ot),k(st),k(Te),k(Me),k(at,e),k(it),k(rt),k(we),k(lt,e),k(dt),k(ct),k(ve),k(ze),k(pt,e),k(mt),k(ut),k(je),k(Le),k(ht,e),k(ft),k(gt),k(Je),k(Ce),k(_t,e),k(yt),k(kt),k(xe),k($e),k(Ue),k(bt,e),k(Tt),k(Mt),k(Fe),k(We),k(wt,e),k(vt),k(zt),k(Ie),k(Ze),k(jt,e),k(Lt),k(Jt),k(qe),k(Be)}}}const Aa='{"title":"LUKE","local":"luke","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"LukeConfig","local":"transformers.LukeConfig","sections":[],"depth":2},{"title":"LukeTokenizer","local":"transformers.LukeTokenizer","sections":[],"depth":2},{"title":"LukeModel","local":"transformers.LukeModel","sections":[],"depth":2},{"title":"LukeForMaskedLM","local":"transformers.LukeForMaskedLM","sections":[],"depth":2},{"title":"LukeForEntityClassification","local":"transformers.LukeForEntityClassification","sections":[],"depth":2},{"title":"LukeForEntityPairClassification","local":"transformers.LukeForEntityPairClassification","sections":[],"depth":2},{"title":"LukeForEntitySpanClassification","local":"transformers.LukeForEntitySpanClassification","sections":[],"depth":2},{"title":"LukeForSequenceClassification","local":"transformers.LukeForSequenceClassification","sections":[],"depth":2},{"title":"LukeForMultipleChoice","local":"transformers.LukeForMultipleChoice","sections":[],"depth":2},{"title":"LukeForTokenClassification","local":"transformers.LukeForTokenClassification","sections":[],"depth":2},{"title":"LukeForQuestionAnswering","local":"transformers.LukeForQuestionAnswering","sections":[],"depth":2}],"depth":1}';function Pa(w){return Ma(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class oi extends wa{constructor(t){super(),va(this,t,Pa,Qa,Ta,{})}}export{oi as component};
