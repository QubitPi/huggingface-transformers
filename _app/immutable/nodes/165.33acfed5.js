import{s as Ao,o as Po,n as P}from"../chunks/scheduler.9bc65507.js";import{S as Yo,i as Ko,g as c,s as r,r as _,A as en,h,f as a,c as d,j as J,u as g,x as f,k as U,y as i,a as l,v as b,d as T,t as y,w as k}from"../chunks/index.707bf1b6.js";import{T as ct}from"../chunks/Tip.c2ecdbf4.js";import{D as G}from"../chunks/Docstring.17db21ae.js";import{C as nt}from"../chunks/CodeBlock.54a9f38d.js";import{F as tn,M as Xo}from"../chunks/Markdown.fef84341.js";import{E as ot}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as je}from"../chunks/Heading.342b1fa6.js";function on(q){let e,u="Example:",n,s,m;return s=new nt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMExFRE1vZGVsJTJDJTIwTEVEQ29uZmlnJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyMExFRCUyMGFsbGVuYWklMkZsZWQtYmFzZS0xNjM4NCUyMHN0eWxlJTIwY29uZmlndXJhdGlvbiUwQWNvbmZpZ3VyYXRpb24lMjAlM0QlMjBMRURDb25maWcoKSUwQSUwQSUyMyUyMEluaXRpYWxpemluZyUyMGElMjBtb2RlbCUyMGZyb20lMjB0aGUlMjBhbGxlbmFpJTJGbGVkLWJhc2UtMTYzODQlMjBzdHlsZSUyMGNvbmZpZ3VyYXRpb24lMEFtb2RlbCUyMCUzRCUyMExFRE1vZGVsKGNvbmZpZ3VyYXRpb24pJTBBJTBBJTIzJTIwQWNjZXNzaW5nJTIwdGhlJTIwbW9kZWwlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMG1vZGVsLmNvbmZpZw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDModel, LEDConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a LED allenai/led-base-16384 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = LEDConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the allenai/led-base-16384 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,n=r(),_(s.$$.fragment)},l(t){e=h(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=u),n=d(t),g(s.$$.fragment,t)},m(t,v){l(t,e,v),l(t,n,v),b(s,t,v),m=!0},p:P,i(t){m||(T(s.$$.fragment,t),m=!0)},o(t){y(s.$$.fragment,t),m=!1},d(t){t&&(a(e),a(n)),k(s,t)}}}function nn(q){let e,u="be encoded differently whether it is at the beginning of the sentence (without space) or not:",n,s,m;return s=new nt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMExFRFRva2VuaXplciUwQSUwQXRva2VuaXplciUyMCUzRCUyMExFRFRva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyYWxsZW5haSUyRmxlZC1iYXNlLTE2Mzg0JTIyKSUwQXRva2VuaXplciglMjJIZWxsbyUyMHdvcmxkJTIyKSU1QiUyMmlucHV0X2lkcyUyMiU1RCUwQSUwQXRva2VuaXplciglMjIlMjBIZWxsbyUyMHdvcmxkJTIyKSU1QiUyMmlucHV0X2lkcyUyMiU1RA==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
[<span class="hljs-number">0</span>, <span class="hljs-number">31414</span>, <span class="hljs-number">232</span>, <span class="hljs-number">2</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
[<span class="hljs-number">0</span>, <span class="hljs-number">20920</span>, <span class="hljs-number">232</span>, <span class="hljs-number">2</span>]`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,n=r(),_(s.$$.fragment)},l(t){e=h(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-12atnao"&&(e.textContent=u),n=d(t),g(s.$$.fragment,t)},m(t,v){l(t,e,v),l(t,n,v),b(s,t,v),m=!0},p:P,i(t){m||(T(s.$$.fragment,t),m=!0)},o(t){y(s.$$.fragment,t),m=!1},d(t){t&&(a(e),a(n)),k(s,t)}}}function sn(q){let e,u="When used with <code>is_split_into_words=True</code>, this tokenizer will add a space before each word (even the first one).";return{c(){e=c("p"),e.innerHTML=u},l(n){e=h(n,"P",{"data-svelte-h":!0}),f(e)!=="svelte-jhmxzm"&&(e.innerHTML=u)},m(n,s){l(n,e,s)},p:P,d(n){n&&a(e)}}}function an(q){let e,u="be encoded differently whether it is at the beginning of the sentence (without space) or not:",n,s,m;return s=new nt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMExFRFRva2VuaXplckZhc3QlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBMRURUb2tlbml6ZXJGYXN0LmZyb21fcHJldHJhaW5lZCglMjJhbGxlbmFpJTJGbGVkLWJhc2UtMTYzODQlMjIpJTBBdG9rZW5pemVyKCUyMkhlbGxvJTIwd29ybGQlMjIpJTVCJTIyaW5wdXRfaWRzJTIyJTVEJTBBJTBBdG9rZW5pemVyKCUyMiUyMEhlbGxvJTIwd29ybGQlMjIpJTVCJTIyaW5wdXRfaWRzJTIyJTVE",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LEDTokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LEDTokenizerFast.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
[<span class="hljs-number">0</span>, <span class="hljs-number">31414</span>, <span class="hljs-number">232</span>, <span class="hljs-number">2</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
[<span class="hljs-number">0</span>, <span class="hljs-number">20920</span>, <span class="hljs-number">232</span>, <span class="hljs-number">2</span>]`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,n=r(),_(s.$$.fragment)},l(t){e=h(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-12atnao"&&(e.textContent=u),n=d(t),g(s.$$.fragment,t)},m(t,v){l(t,e,v),l(t,n,v),b(s,t,v),m=!0},p:P,i(t){m||(T(s.$$.fragment,t),m=!0)},o(t){y(s.$$.fragment,t),m=!1},d(t){t&&(a(e),a(n)),k(s,t)}}}function rn(q){let e,u="When used with <code>is_split_into_words=True</code>, this tokenizer needs to be instantiated with <code>add_prefix_space=True</code>.";return{c(){e=c("p"),e.innerHTML=u},l(n){e=h(n,"P",{"data-svelte-h":!0}),f(e)!=="svelte-9gg91e"&&(e.innerHTML=u)},m(n,s){l(n,e,s)},p:P,d(n){n&&a(e)}}}function dn(q){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=c("p"),e.innerHTML=u},l(n){e=h(n,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(n,s){l(n,e,s)},p:P,d(n){n&&a(e)}}}function ln(q){let e,u="Example:",n,s,m;return s=new nt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBMRURNb2RlbCUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyYWxsZW5haSUyRmxlZC1iYXNlLTE2Mzg0JTIyKSUwQW1vZGVsJTIwJTNEJTIwTEVETW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMmFsbGVuYWklMkZsZWQtYmFzZS0xNjM4NCUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQWxhc3RfaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, LEDModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDModel.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,n=r(),_(s.$$.fragment)},l(t){e=h(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=u),n=d(t),g(s.$$.fragment,t)},m(t,v){l(t,e,v),l(t,n,v),b(s,t,v),m=!0},p:P,i(t){m||(T(s.$$.fragment,t),m=!0)},o(t){y(s.$$.fragment,t),m=!1},d(t){t&&(a(e),a(n)),k(s,t)}}}function cn(q){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=c("p"),e.innerHTML=u},l(n){e=h(n,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(n,s){l(n,e,s)},p:P,d(n){n&&a(e)}}}function hn(q){let e,u="Conditional generation example:",n,s,m;return s=new nt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBMRURGb3JDb25kaXRpb25hbEdlbmVyYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJhbGxlbmFpJTJGbGVkLWJhc2UtMTYzODQlMjIpJTBBVFhUJTIwJTNEJTIwJTIyTXklMjBmcmllbmRzJTIwYXJlJTIwJTNDbWFzayUzRSUyMGJ1dCUyMHRoZXklMjBlYXQlMjB0b28lMjBtYW55JTIwY2FyYnMuJTIyJTBBJTBBbW9kZWwlMjAlM0QlMjBMRURGb3JDb25kaXRpb25hbEdlbmVyYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmFsbGVuYWklMkZsZWQtYmFzZS0xNjM4NCUyMiklMEFpbnB1dF9pZHMlMjAlM0QlMjB0b2tlbml6ZXIoJTVCVFhUJTVEJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklNUIlMjJpbnB1dF9pZHMlMjIlNUQlMEElMEFwcmVkaWN0aW9uJTIwJTNEJTIwbW9kZWwuZ2VuZXJhdGUoaW5wdXRfaWRzKSU1QjAlNUQlMEFwcmludCh0b2tlbml6ZXIuZGVjb2RlKHByZWRpY3Rpb24lMkMlMjBza2lwX3NwZWNpYWxfdG9rZW5zJTNEVHJ1ZSkp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, LEDForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction = model.generate(input_ids)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(prediction, skip_special_tokens=<span class="hljs-literal">True</span>))`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,n=r(),_(s.$$.fragment)},l(t){e=h(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-mdsrnu"&&(e.textContent=u),n=d(t),g(s.$$.fragment,t)},m(t,v){l(t,e,v),l(t,n,v),b(s,t,v),m=!0},p:P,i(t){m||(T(s.$$.fragment,t),m=!0)},o(t){y(s.$$.fragment,t),m=!1},d(t){t&&(a(e),a(n)),k(s,t)}}}function pn(q){let e,u="Summarization example:",n,s,m;return s=new nt({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMExFREZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbiUwQSUwQW1vZGVsJTIwJTNEJTIwTEVERm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uLmZyb21fcHJldHJhaW5lZCglMjJhbGxlbmFpJTJGbGVkLWxhcmdlLTE2Mzg0LWFyeGl2JTIyKSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmFsbGVuYWklMkZsZWQtbGFyZ2UtMTYzODQtYXJ4aXYlMjIpJTBBJTBBQVJUSUNMRV9UT19TVU1NQVJJWkUlMjAlM0QlMjAnJydUcmFuc2Zvcm1lcnMlMjAoVmFzd2FuaSUyMGV0JTIwYWwuJTJDJTIwMjAxNyklMjBoYXZlJTIwYWNoaWV2ZWQlMjBzdGF0ZS1vZi10aGUtYXJ0JTBBJTIwJTIwJTIwJTIwcmVzdWx0cyUyMGluJTIwYSUyMHdpZGUlMjByYW5nZSUyMG9mJTIwbmF0dXJhbCUyMGxhbmd1YWdlJTIwdGFza3MlMjBpbmNsdWRpbmclMjBnZW5lcmF0aXZlJTIwbGFuZ3VhZ2UlMjBtb2RlbGluZyUwQSUyMCUyMCUyMCUyMChEYWklMjBldCUyMGFsLiUyQyUyMDIwMTklM0IlMjBSYWRmb3JkJTIwZXQlMjBhbC4lMkMlMjAyMDE5KSUyMGFuZCUyMGRpc2NyaW1pbmF0aXZlJTIwLi4uJTIwbGFuZ3VhZ2UlMjB1bmRlcnN0YW5kaW5nJTIwKERldmxpbiUyMGV0JTIwYWwuJTJDJTIwMjAxOSkuJTBBJTIwJTIwJTIwJTIwVGhpcyUyMHN1Y2Nlc3MlMjBpcyUyMHBhcnRseSUyMGR1ZSUyMHRvJTIwdGhlJTIwc2VsZi1hdHRlbnRpb24lMjBjb21wb25lbnQlMjB3aGljaCUyMGVuYWJsZXMlMjB0aGUlMjBuZXR3b3JrJTIwdG8lMjBjYXB0dXJlJTIwY29udGV4dHVhbCUwQSUyMCUyMCUyMCUyMGluZm9ybWF0aW9uJTIwZnJvbSUyMHRoZSUyMGVudGlyZSUyMHNlcXVlbmNlLiUyMFdoaWxlJTIwcG93ZXJmdWwlMkMlMjB0aGUlMjBtZW1vcnklMjBhbmQlMjBjb21wdXRhdGlvbmFsJTIwcmVxdWlyZW1lbnRzJTIwb2YlMEElMjAlMjAlMjAlMjBzZWxmLWF0dGVudGlvbiUyMGdyb3clMjBxdWFkcmF0aWNhbGx5JTIwd2l0aCUyMHNlcXVlbmNlJTIwbGVuZ3RoJTJDJTIwbWFraW5nJTIwaXQlMjBpbmZlYXNpYmxlJTIwKG9yJTIwdmVyeSUyMGV4cGVuc2l2ZSklMjB0byUwQSUyMCUyMCUyMCUyMHByb2Nlc3MlMjBsb25nJTIwc2VxdWVuY2VzLiUyMFRvJTIwYWRkcmVzcyUyMHRoaXMlMjBsaW1pdGF0aW9uJTJDJTIwd2UlMjBwcmVzZW50JTIwTG9uZ2Zvcm1lciUyQyUyMGElMjBtb2RpZmllZCUyMFRyYW5zZm9ybWVyJTBBJTIwJTIwJTIwJTIwYXJjaGl0ZWN0dXJlJTIwd2l0aCUyMGElMjBzZWxmLWF0dGVudGlvbiUyMG9wZXJhdGlvbiUyMHRoYXQlMjBzY2FsZXMlMjBsaW5lYXJseSUyMHdpdGglMjB0aGUlMjBzZXF1ZW5jZSUyMGxlbmd0aCUyQyUyMG1ha2luZyUyMGl0JTBBJTIwJTIwJTIwJTIwdmVyc2F0aWxlJTIwZm9yJTIwcHJvY2Vzc2luZyUyMGxvbmclMjBkb2N1bWVudHMlMjAoRmlnJTIwMSkuJTIwVGhpcyUyMGlzJTIwYW4lMjBhZHZhbnRhZ2UlMjBmb3IlMjBuYXR1cmFsJTIwbGFuZ3VhZ2UlMjB0YXNrcyUyMHN1Y2glMjBhcyUwQSUyMCUyMCUyMCUyMGxvbmclMjBkb2N1bWVudCUyMGNsYXNzaWZpY2F0aW9uJTJDJTIwcXVlc3Rpb24lMjBhbnN3ZXJpbmclMjAoUUEpJTJDJTIwYW5kJTIwY29yZWZlcmVuY2UlMjByZXNvbHV0aW9uJTJDJTIwd2hlcmUlMjBleGlzdGluZyUyMGFwcHJvYWNoZXMlMEElMjAlMjAlMjAlMjBwYXJ0aXRpb24lMjBvciUyMHNob3J0ZW4lMjB0aGUlMjBsb25nJTIwY29udGV4dCUyMGludG8lMjBzbWFsbGVyJTIwc2VxdWVuY2VzJTIwdGhhdCUyMGZhbGwlMjB3aXRoaW4lMjB0aGUlMjB0eXBpY2FsJTIwNTEyJTIwdG9rZW4lMjBsaW1pdCUwQSUyMCUyMCUyMCUyMG9mJTIwQkVSVC1zdHlsZSUyMHByZXRyYWluZWQlMjBtb2RlbHMuJTIwU3VjaCUyMHBhcnRpdGlvbmluZyUyMGNvdWxkJTIwcG90ZW50aWFsbHklMjByZXN1bHQlMjBpbiUyMGxvc3MlMjBvZiUyMGltcG9ydGFudCUwQSUyMCUyMCUyMCUyMGNyb3NzLXBhcnRpdGlvbiUyMGluZm9ybWF0aW9uJTJDJTIwYW5kJTIwdG8lMjBtaXRpZ2F0ZSUyMHRoaXMlMjBwcm9ibGVtJTJDJTIwZXhpc3RpbmclMjBtZXRob2RzJTIwb2Z0ZW4lMjByZWx5JTIwb24lMjBjb21wbGV4JTBBJTIwJTIwJTIwJTIwYXJjaGl0ZWN0dXJlcyUyMHRvJTIwYWRkcmVzcyUyMHN1Y2glMjBpbnRlcmFjdGlvbnMuJTIwT24lMjB0aGUlMjBvdGhlciUyMGhhbmQlMkMlMjBvdXIlMjBwcm9wb3NlZCUyMExvbmdmb3JtZXIlMjBpcyUyMGFibGUlMjB0byUyMGJ1aWxkJTBBJTIwJTIwJTIwJTIwY29udGV4dHVhbCUyMHJlcHJlc2VudGF0aW9ucyUyMG9mJTIwdGhlJTIwZW50aXJlJTIwY29udGV4dCUyMHVzaW5nJTIwbXVsdGlwbGUlMjBsYXllcnMlMjBvZiUyMGF0dGVudGlvbiUyQyUyMHJlZHVjaW5nJTIwdGhlJTIwbmVlZCUyMGZvciUwQSUyMCUyMCUyMCUyMHRhc2stc3BlY2lmaWMlMjBhcmNoaXRlY3R1cmVzLicnJyUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplci5lbmNvZGUoQVJUSUNMRV9UT19TVU1NQVJJWkUlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQSUyMyUyMEdsb2JhbCUyMGF0dGVudGlvbiUyMG9uJTIwdGhlJTIwZmlyc3QlMjB0b2tlbiUyMChjZi4lMjBCZWx0YWd5JTIwZXQlMjBhbC4lMjAyMDIwKSUwQWdsb2JhbF9hdHRlbnRpb25fbWFzayUyMCUzRCUyMHRvcmNoLnplcm9zX2xpa2UoaW5wdXRzKSUwQWdsb2JhbF9hdHRlbnRpb25fbWFzayU1QiUzQSUyQyUyMDAlNUQlMjAlM0QlMjAxJTBBJTBBJTIzJTIwR2VuZXJhdGUlMjBTdW1tYXJ5JTBBc3VtbWFyeV9pZHMlMjAlM0QlMjBtb2RlbC5nZW5lcmF0ZShpbnB1dHMlMkMlMjBnbG9iYWxfYXR0ZW50aW9uX21hc2slM0RnbG9iYWxfYXR0ZW50aW9uX21hc2slMkMlMjBudW1fYmVhbXMlM0QzJTJDJTIwbWF4X2xlbmd0aCUzRDMyKSUwQXByaW50KHRva2VuaXplci5kZWNvZGUoc3VtbWFyeV9pZHMlNUIwJTVEJTJDJTIwc2tpcF9zcGVjaWFsX3Rva2VucyUzRFRydWUlMkMlMjBjbGVhbl91cF90b2tlbml6YXRpb25fc3BhY2VzJTNEVHJ1ZSkp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, LEDForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;allenai/led-large-16384-arxiv&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-large-16384-arxiv&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>ARTICLE_TO_SUMMARIZE = <span class="hljs-string">&#x27;&#x27;&#x27;Transformers (Vaswani et al., 2017) have achieved state-of-the-art
<span class="hljs-meta">... </span>    results in a wide range of natural language tasks including generative language modeling
<span class="hljs-meta">... </span>    (Dai et al., 2019; Radford et al., 2019) and discriminative ... language understanding (Devlin et al., 2019).
<span class="hljs-meta">... </span>    This success is partly due to the self-attention component which enables the network to capture contextual
<span class="hljs-meta">... </span>    information from the entire sequence. While powerful, the memory and computational requirements of
<span class="hljs-meta">... </span>    self-attention grow quadratically with sequence length, making it infeasible (or very expensive) to
<span class="hljs-meta">... </span>    process long sequences. To address this limitation, we present Longformer, a modified Transformer
<span class="hljs-meta">... </span>    architecture with a self-attention operation that scales linearly with the sequence length, making it
<span class="hljs-meta">... </span>    versatile for processing long documents (Fig 1). This is an advantage for natural language tasks such as
<span class="hljs-meta">... </span>    long document classification, question answering (QA), and coreference resolution, where existing approaches
<span class="hljs-meta">... </span>    partition or shorten the long context into smaller sequences that fall within the typical 512 token limit
<span class="hljs-meta">... </span>    of BERT-style pretrained models. Such partitioning could potentially result in loss of important
<span class="hljs-meta">... </span>    cross-partition information, and to mitigate this problem, existing methods often rely on complex
<span class="hljs-meta">... </span>    architectures to address such interactions. On the other hand, our proposed Longformer is able to build
<span class="hljs-meta">... </span>    contextual representations of the entire context using multiple layers of attention, reducing the need for
<span class="hljs-meta">... </span>    task-specific architectures.&#x27;&#x27;&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer.encode(ARTICLE_TO_SUMMARIZE, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Global attention on the first token (cf. Beltagy et al. 2020)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>global_attention_mask = torch.zeros_like(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>global_attention_mask[:, <span class="hljs-number">0</span>] = <span class="hljs-number">1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Generate Summary</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary_ids = model.generate(inputs, global_attention_mask=global_attention_mask, num_beams=<span class="hljs-number">3</span>, max_length=<span class="hljs-number">32</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(summary_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>, clean_up_tokenization_spaces=<span class="hljs-literal">True</span>))`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,n=r(),_(s.$$.fragment)},l(t){e=h(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-4eu60v"&&(e.textContent=u),n=d(t),g(s.$$.fragment,t)},m(t,v){l(t,e,v),l(t,n,v),b(s,t,v),m=!0},p:P,i(t){m||(T(s.$$.fragment,t),m=!0)},o(t){y(s.$$.fragment,t),m=!1},d(t){t&&(a(e),a(n)),k(s,t)}}}function un(q){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=c("p"),e.innerHTML=u},l(n){e=h(n,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(n,s){l(n,e,s)},p:P,d(n){n&&a(e)}}}function mn(q){let e,u="Example of single-label classification:",n,s,m;return s=new nt({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMExFREZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJhbGxlbmFpJTJGbGVkLWJhc2UtMTYzODQlMjIpJTBBbW9kZWwlMjAlM0QlMjBMRURGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJhbGxlbmFpJTJGbGVkLWJhc2UtMTYzODQlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX2NsYXNzX2lkJTIwJTNEJTIwbG9naXRzLmFyZ21heCgpLml0ZW0oKSUwQSUwQSUyMyUyMFRvJTIwdHJhaW4lMjBhJTIwbW9kZWwlMjBvbiUyMCU2MG51bV9sYWJlbHMlNjAlMjBjbGFzc2VzJTJDJTIweW91JTIwY2FuJTIwcGFzcyUyMCU2MG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTYwJTIwdG8lMjAlNjAuZnJvbV9wcmV0cmFpbmVkKC4uLiklNjAlMEFudW1fbGFiZWxzJTIwJTNEJTIwbGVuKG1vZGVsLmNvbmZpZy5pZDJsYWJlbCklMEFtb2RlbCUyMCUzRCUyMExFREZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmFsbGVuYWklMkZsZWQtYmFzZS0xNjM4NCUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzKSUwQSUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxJTVEKSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, LEDForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,n=r(),_(s.$$.fragment)},l(t){e=h(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-ykxpe4"&&(e.textContent=u),n=d(t),g(s.$$.fragment,t)},m(t,v){l(t,e,v),l(t,n,v),b(s,t,v),m=!0},p:P,i(t){m||(T(s.$$.fragment,t),m=!0)},o(t){y(s.$$.fragment,t),m=!1},d(t){t&&(a(e),a(n)),k(s,t)}}}function fn(q){let e,u="Example of multi-label classification:",n,s,m;return s=new nt({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMExFREZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJhbGxlbmFpJTJGbGVkLWJhc2UtMTYzODQlMjIpJTBBbW9kZWwlMjAlM0QlMjBMRURGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJhbGxlbmFpJTJGbGVkLWJhc2UtMTYzODQlMjIlMkMlMjBwcm9ibGVtX3R5cGUlM0QlMjJtdWx0aV9sYWJlbF9jbGFzc2lmaWNhdGlvbiUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEFwcmVkaWN0ZWRfY2xhc3NfaWRzJTIwJTNEJTIwdG9yY2guYXJhbmdlKDAlMkMlMjBsb2dpdHMuc2hhcGUlNUItMSU1RCklNUJ0b3JjaC5zaWdtb2lkKGxvZ2l0cykuc3F1ZWV6ZShkaW0lM0QwKSUyMCUzRSUyMDAuNSU1RCUwQSUwQSUyMyUyMFRvJTIwdHJhaW4lMjBhJTIwbW9kZWwlMjBvbiUyMCU2MG51bV9sYWJlbHMlNjAlMjBjbGFzc2VzJTJDJTIweW91JTIwY2FuJTIwcGFzcyUyMCU2MG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTYwJTIwdG8lMjAlNjAuZnJvbV9wcmV0cmFpbmVkKC4uLiklNjAlMEFudW1fbGFiZWxzJTIwJTNEJTIwbGVuKG1vZGVsLmNvbmZpZy5pZDJsYWJlbCklMEFtb2RlbCUyMCUzRCUyMExFREZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUwQSUyMCUyMCUyMCUyMCUyMmFsbGVuYWklMkZsZWQtYmFzZS0xNjM4NCUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIlMEEpJTBBJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2guc3VtKCUwQSUyMCUyMCUyMCUyMHRvcmNoLm5uLmZ1bmN0aW9uYWwub25lX2hvdChwcmVkaWN0ZWRfY2xhc3NfaWRzJTVCTm9uZSUyQyUyMCUzQSU1RC5jbG9uZSgpJTJDJTIwbnVtX2NsYXNzZXMlM0RudW1fbGFiZWxzKSUyQyUyMGRpbSUzRDElMEEpLnRvKHRvcmNoLmZsb2F0KSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, LEDForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.arange(<span class="hljs-number">0</span>, logits.shape[-<span class="hljs-number">1</span>])[torch.sigmoid(logits).squeeze(dim=<span class="hljs-number">0</span>) &gt; <span class="hljs-number">0.5</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.<span class="hljs-built_in">sum</span>(
<span class="hljs-meta">... </span>    torch.nn.functional.one_hot(predicted_class_ids[<span class="hljs-literal">None</span>, :].clone(), num_classes=num_labels), dim=<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>).to(torch.<span class="hljs-built_in">float</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,n=r(),_(s.$$.fragment)},l(t){e=h(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-1l8e32d"&&(e.textContent=u),n=d(t),g(s.$$.fragment,t)},m(t,v){l(t,e,v),l(t,n,v),b(s,t,v),m=!0},p:P,i(t){m||(T(s.$$.fragment,t),m=!0)},o(t){y(s.$$.fragment,t),m=!1},d(t){t&&(a(e),a(n)),k(s,t)}}}function _n(q){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=c("p"),e.innerHTML=u},l(n){e=h(n,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(n,s){l(n,e,s)},p:P,d(n){n&&a(e)}}}function gn(q){let e,u="Example:",n,s,m;return s=new nt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBMRURGb3JRdWVzdGlvbkFuc3dlcmluZyUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyYWxsZW5haSUyRmxlZC1iYXNlLTE2Mzg0JTIyKSUwQW1vZGVsJTIwJTNEJTIwTEVERm9yUXVlc3Rpb25BbnN3ZXJpbmcuZnJvbV9wcmV0cmFpbmVkKCUyMmFsbGVuYWklMkZsZWQtYmFzZS0xNjM4NCUyMiklMEElMEFxdWVzdGlvbiUyQyUyMHRleHQlMjAlM0QlMjAlMjJXaG8lMjB3YXMlMjBKaW0lMjBIZW5zb24lM0YlMjIlMkMlMjAlMjJKaW0lMjBIZW5zb24lMjB3YXMlMjBhJTIwbmljZSUyMHB1cHBldCUyMiUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplcihxdWVzdGlvbiUyQyUyMHRleHQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBYW5zd2VyX3N0YXJ0X2luZGV4JTIwJTNEJTIwb3V0cHV0cy5zdGFydF9sb2dpdHMuYXJnbWF4KCklMEFhbnN3ZXJfZW5kX2luZGV4JTIwJTNEJTIwb3V0cHV0cy5lbmRfbG9naXRzLmFyZ21heCgpJTBBJTBBcHJlZGljdF9hbnN3ZXJfdG9rZW5zJTIwJTNEJTIwaW5wdXRzLmlucHV0X2lkcyU1QjAlMkMlMjBhbnN3ZXJfc3RhcnRfaW5kZXglMjAlM0ElMjBhbnN3ZXJfZW5kX2luZGV4JTIwJTJCJTIwMSU1RCUwQSUwQSUyMyUyMHRhcmdldCUyMGlzJTIwJTIybmljZSUyMHB1cHBldCUyMiUwQXRhcmdldF9zdGFydF9pbmRleCUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxNCU1RCklMEF0YXJnZXRfZW5kX2luZGV4JTIwJTNEJTIwdG9yY2gudGVuc29yKCU1QjE1JTVEKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMHN0YXJ0X3Bvc2l0aW9ucyUzRHRhcmdldF9zdGFydF9pbmRleCUyQyUyMGVuZF9wb3NpdGlvbnMlM0R0YXJnZXRfZW5kX2luZGV4KSUwQWxvc3MlMjAlM0QlMjBvdXRwdXRzLmxvc3M=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, LEDForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LEDForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,n=r(),_(s.$$.fragment)},l(t){e=h(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=u),n=d(t),g(s.$$.fragment,t)},m(t,v){l(t,e,v),l(t,n,v),b(s,t,v),m=!0},p:P,i(t){m||(T(s.$$.fragment,t),m=!0)},o(t){y(s.$$.fragment,t),m=!1},d(t){t&&(a(e),a(n)),k(s,t)}}}function bn(q){let e,u,n,s,m,t,v=`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`,ae,E,B=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`,re,F,C,I,x,S='The <a href="/docs/transformers/main/en/model_doc/led#transformers.LEDModel">LEDModel</a> forward method, overrides the <code>__call__</code> special method.',ve,K,Ie,W,Ve,X,he,V,pe,N,ee,$e=`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`,Je,Le,Fe=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`,Me,D,te,_e,ue,de='The <a href="/docs/transformers/main/en/model_doc/led#transformers.LEDForConditionalGeneration">LEDForConditionalGeneration</a> forward method, overrides the <code>__call__</code> special method.',xe,oe,Ue,qe,ge,R,be,A,z,w,L,O,H,ie=`LED model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`,Se,Ne,ht=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`,We,st,pt=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`,Bt,le,Te,Lt,Ge,so='The <a href="/docs/transformers/main/en/model_doc/led#transformers.LEDForSequenceClassification">LEDForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',Ft,ne,He,Ze,at,Re,Mt,ze,zt,se,ye,Oe,rt,ut=`LED Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,Vt,dt,Qe=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. See the superclass documentation for the generic methods the library
implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads etc.)`,Xe,it,mt=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for general usage and behavior.`,Ht,ke,Ee,Ae,Pe,lt='The <a href="/docs/transformers/main/en/model_doc/led#transformers.LEDForQuestionAnswering">LEDForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',xt,j,Ye,Be,Ke;return e=new je({props:{title:"LEDModel",local:"transformers.LEDModel",headingTag:"h2"}}),s=new G({props:{name:"class transformers.LEDModel",anchor:"transformers.LEDModel",parameters:[{name:"config",val:": LEDConfig"}],parametersDescription:[{anchor:"transformers.LEDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/led/modeling_led.py#L2180"}}),C=new G({props:{name:"forward",anchor:"transformers.LEDModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"global_attention_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.LEDModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.LEDModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_led._prepare_decoder_inputs</code> and modify
to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the
default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.LEDModel.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention for the encoder.
Tokens with global attention attends to all other tokens, and all other tokens attend to them. This is
important for task-specific finetuning because it makes the model more flexible at representing the task.
For example, for classification, the <s> token should be given global attention. For QA, all question
tokens should also have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer
paper</a> for more details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LEDModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LEDModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LEDModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.LEDModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.LEDModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.LEDModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LEDModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.LEDModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.LEDModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LEDModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LEDModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/led/modeling_led.py#L2213",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder’s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) — Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),K=new ct({props:{$$slots:{default:[dn]},$$scope:{ctx:q}}}),W=new ot({props:{anchor:"transformers.LEDModel.forward.example",$$slots:{default:[ln]},$$scope:{ctx:q}}}),X=new je({props:{title:"LEDForConditionalGeneration",local:"transformers.LEDForConditionalGeneration",headingTag:"h2"}}),pe=new G({props:{name:"class transformers.LEDForConditionalGeneration",anchor:"transformers.LEDForConditionalGeneration",parameters:[{name:"config",val:": LEDConfig"}],parametersDescription:[{anchor:"transformers.LEDForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/led/modeling_led.py#L2305"}}),te=new G({props:{name:"forward",anchor:"transformers.LEDForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"global_attention_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.LEDForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_led._prepare_decoder_inputs</code> and modify
to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the
default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention for the encoder.
Tokens with global attention attends to all other tokens, and all other tokens attend to them. This is
important for task-specific finetuning because it makes the model more flexible at representing the task.
For example, for classification, the <s> token should be given global attention. For QA, all question
tokens should also have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer
paper</a> for more details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.LEDForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.LEDForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.LEDForConditionalGeneration.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LEDForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.LEDForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.LEDForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LEDForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LEDForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/led/modeling_led.py#L2348",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) — Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder’s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) — Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),oe=new ct({props:{$$slots:{default:[cn]},$$scope:{ctx:q}}}),qe=new ot({props:{anchor:"transformers.LEDForConditionalGeneration.forward.example",$$slots:{default:[hn]},$$scope:{ctx:q}}}),R=new ot({props:{anchor:"transformers.LEDForConditionalGeneration.forward.example-2",$$slots:{default:[pn]},$$scope:{ctx:q}}}),A=new je({props:{title:"LEDForSequenceClassification",local:"transformers.LEDForSequenceClassification",headingTag:"h2"}}),L=new G({props:{name:"class transformers.LEDForSequenceClassification",anchor:"transformers.LEDForSequenceClassification",parameters:[{name:"config",val:": LEDConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LEDForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/led/modeling_led.py#L2491"}}),Te=new G({props:{name:"forward",anchor:"transformers.LEDForSequenceClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"global_attention_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.LEDForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_led._prepare_decoder_inputs</code> and modify
to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the
default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention for the encoder.
Tokens with global attention attends to all other tokens, and all other tokens attend to them. This is
important for task-specific finetuning because it makes the model more flexible at representing the task.
For example, for classification, the <s> token should be given global attention. For QA, all question
tokens should also have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer
paper</a> for more details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.LEDForSequenceClassification.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.LEDForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.LEDForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LEDForSequenceClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.LEDForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.LEDForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LEDForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LEDForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/led/modeling_led.py#L2520",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) — Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) — Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder’s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) — Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ne=new ct({props:{$$slots:{default:[un]},$$scope:{ctx:q}}}),Ze=new ot({props:{anchor:"transformers.LEDForSequenceClassification.forward.example",$$slots:{default:[mn]},$$scope:{ctx:q}}}),Re=new ot({props:{anchor:"transformers.LEDForSequenceClassification.forward.example-2",$$slots:{default:[fn]},$$scope:{ctx:q}}}),ze=new je({props:{title:"LEDForQuestionAnswering",local:"transformers.LEDForQuestionAnswering",headingTag:"h2"}}),ye=new G({props:{name:"class transformers.LEDForQuestionAnswering",anchor:"transformers.LEDForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LEDForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/led/modeling_led.py#L2627"}}),Ee=new G({props:{name:"forward",anchor:"transformers.LEDForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"global_attention_mask",val:": Optional = None"},{name:"start_positions",val:": Optional = None"},{name:"end_positions",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.LEDForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LEDForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_led._prepare_decoder_inputs</code> and modify
to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more information on the
default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention for the encoder.
Tokens with global attention attends to all other tokens, and all other tokens attend to them. This is
important for task-specific finetuning because it makes the model more flexible at representing the task.
For example, for classification, the <s> token should be given global attention. For QA, all question
tokens should also have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer
paper</a> for more details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.LEDForQuestionAnswering.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.LEDForQuestionAnswering.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.LEDForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LEDForQuestionAnswering.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.LEDForQuestionAnswering.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.LEDForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LEDForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LEDForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LEDForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LEDForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/led/modeling_led.py#L2649",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
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
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder’s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) — Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),j=new ct({props:{$$slots:{default:[_n]},$$scope:{ctx:q}}}),Be=new ot({props:{anchor:"transformers.LEDForQuestionAnswering.forward.example",$$slots:{default:[gn]},$$scope:{ctx:q}}}),{c(){_(e.$$.fragment),u=r(),n=c("div"),_(s.$$.fragment),m=r(),t=c("p"),t.innerHTML=v,ae=r(),E=c("p"),E.innerHTML=B,re=r(),F=c("div"),_(C.$$.fragment),I=r(),x=c("p"),x.innerHTML=S,ve=r(),_(K.$$.fragment),Ie=r(),_(W.$$.fragment),Ve=r(),_(X.$$.fragment),he=r(),V=c("div"),_(pe.$$.fragment),N=r(),ee=c("p"),ee.innerHTML=$e,Je=r(),Le=c("p"),Le.innerHTML=Fe,Me=r(),D=c("div"),_(te.$$.fragment),_e=r(),ue=c("p"),ue.innerHTML=de,xe=r(),_(oe.$$.fragment),Ue=r(),_(qe.$$.fragment),ge=r(),_(R.$$.fragment),be=r(),_(A.$$.fragment),z=r(),w=c("div"),_(L.$$.fragment),O=r(),H=c("p"),H.textContent=ie,Se=r(),Ne=c("p"),Ne.innerHTML=ht,We=r(),st=c("p"),st.innerHTML=pt,Bt=r(),le=c("div"),_(Te.$$.fragment),Lt=r(),Ge=c("p"),Ge.innerHTML=so,Ft=r(),_(ne.$$.fragment),He=r(),_(Ze.$$.fragment),at=r(),_(Re.$$.fragment),Mt=r(),_(ze.$$.fragment),zt=r(),se=c("div"),_(ye.$$.fragment),Oe=r(),rt=c("p"),rt.innerHTML=ut,Vt=r(),dt=c("p"),dt.innerHTML=Qe,Xe=r(),it=c("p"),it.innerHTML=mt,Ht=r(),ke=c("div"),_(Ee.$$.fragment),Ae=r(),Pe=c("p"),Pe.innerHTML=lt,xt=r(),_(j.$$.fragment),Ye=r(),_(Be.$$.fragment),this.h()},l(p){g(e.$$.fragment,p),u=d(p),n=h(p,"DIV",{class:!0});var $=J(n);g(s.$$.fragment,$),m=d($),t=h($,"P",{"data-svelte-h":!0}),f(t)!=="svelte-14av6wv"&&(t.innerHTML=v),ae=d($),E=h($,"P",{"data-svelte-h":!0}),f(E)!=="svelte-ngxyy9"&&(E.innerHTML=B),re=d($),F=h($,"DIV",{class:!0});var ce=J(F);g(C.$$.fragment,ce),I=d(ce),x=h(ce,"P",{"data-svelte-h":!0}),f(x)!=="svelte-81huwy"&&(x.innerHTML=S),ve=d(ce),g(K.$$.fragment,ce),Ie=d(ce),g(W.$$.fragment,ce),ce.forEach(a),$.forEach(a),Ve=d(p),g(X.$$.fragment,p),he=d(p),V=h(p,"DIV",{class:!0});var De=J(V);g(pe.$$.fragment,De),N=d(De),ee=h(De,"P",{"data-svelte-h":!0}),f(ee)!=="svelte-o0jka1"&&(ee.innerHTML=$e),Je=d(De),Le=h(De,"P",{"data-svelte-h":!0}),f(Le)!=="svelte-ngxyy9"&&(Le.innerHTML=Fe),Me=d(De),D=h(De,"DIV",{class:!0});var me=J(D);g(te.$$.fragment,me),_e=d(me),ue=h(me,"P",{"data-svelte-h":!0}),f(ue)!=="svelte-var5ve"&&(ue.innerHTML=de),xe=d(me),g(oe.$$.fragment,me),Ue=d(me),g(qe.$$.fragment,me),ge=d(me),g(R.$$.fragment,me),me.forEach(a),De.forEach(a),be=d(p),g(A.$$.fragment,p),z=d(p),w=h(p,"DIV",{class:!0});var Q=J(w);g(L.$$.fragment,Q),O=d(Q),H=h(Q,"P",{"data-svelte-h":!0}),f(H)!=="svelte-1qflz41"&&(H.textContent=ie),Se=d(Q),Ne=h(Q,"P",{"data-svelte-h":!0}),f(Ne)!=="svelte-1lda5yc"&&(Ne.innerHTML=ht),We=d(Q),st=h(Q,"P",{"data-svelte-h":!0}),f(st)!=="svelte-ngxyy9"&&(st.innerHTML=pt),Bt=d(Q),le=h(Q,"DIV",{class:!0});var fe=J(le);g(Te.$$.fragment,fe),Lt=d(fe),Ge=h(fe,"P",{"data-svelte-h":!0}),f(Ge)!=="svelte-13xp7g0"&&(Ge.innerHTML=so),Ft=d(fe),g(ne.$$.fragment,fe),He=d(fe),g(Ze.$$.fragment,fe),at=d(fe),g(Re.$$.fragment,fe),fe.forEach(a),Q.forEach(a),Mt=d(p),g(ze.$$.fragment,p),zt=d(p),se=h(p,"DIV",{class:!0});var Y=J(se);g(ye.$$.fragment,Y),Oe=d(Y),rt=h(Y,"P",{"data-svelte-h":!0}),f(rt)!=="svelte-1krd699"&&(rt.innerHTML=ut),Vt=d(Y),dt=h(Y,"P",{"data-svelte-h":!0}),f(dt)!=="svelte-1lda5yc"&&(dt.innerHTML=Qe),Xe=d(Y),it=h(Y,"P",{"data-svelte-h":!0}),f(it)!=="svelte-ngxyy9"&&(it.innerHTML=mt),Ht=d(Y),ke=h(Y,"DIV",{class:!0});var Ce=J(ke);g(Ee.$$.fragment,Ce),Ae=d(Ce),Pe=h(Ce,"P",{"data-svelte-h":!0}),f(Pe)!=="svelte-sc0jmy"&&(Pe.innerHTML=lt),xt=d(Ce),g(j.$$.fragment,Ce),Ye=d(Ce),g(Be.$$.fragment,Ce),Ce.forEach(a),Y.forEach(a),this.h()},h(){U(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(w,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(p,$){b(e,p,$),l(p,u,$),l(p,n,$),b(s,n,null),i(n,m),i(n,t),i(n,ae),i(n,E),i(n,re),i(n,F),b(C,F,null),i(F,I),i(F,x),i(F,ve),b(K,F,null),i(F,Ie),b(W,F,null),l(p,Ve,$),b(X,p,$),l(p,he,$),l(p,V,$),b(pe,V,null),i(V,N),i(V,ee),i(V,Je),i(V,Le),i(V,Me),i(V,D),b(te,D,null),i(D,_e),i(D,ue),i(D,xe),b(oe,D,null),i(D,Ue),b(qe,D,null),i(D,ge),b(R,D,null),l(p,be,$),b(A,p,$),l(p,z,$),l(p,w,$),b(L,w,null),i(w,O),i(w,H),i(w,Se),i(w,Ne),i(w,We),i(w,st),i(w,Bt),i(w,le),b(Te,le,null),i(le,Lt),i(le,Ge),i(le,Ft),b(ne,le,null),i(le,He),b(Ze,le,null),i(le,at),b(Re,le,null),l(p,Mt,$),b(ze,p,$),l(p,zt,$),l(p,se,$),b(ye,se,null),i(se,Oe),i(se,rt),i(se,Vt),i(se,dt),i(se,Xe),i(se,it),i(se,Ht),i(se,ke),b(Ee,ke,null),i(ke,Ae),i(ke,Pe),i(ke,xt),b(j,ke,null),i(ke,Ye),b(Be,ke,null),Ke=!0},p(p,$){const ce={};$&2&&(ce.$$scope={dirty:$,ctx:p}),K.$set(ce);const De={};$&2&&(De.$$scope={dirty:$,ctx:p}),W.$set(De);const me={};$&2&&(me.$$scope={dirty:$,ctx:p}),oe.$set(me);const Q={};$&2&&(Q.$$scope={dirty:$,ctx:p}),qe.$set(Q);const fe={};$&2&&(fe.$$scope={dirty:$,ctx:p}),R.$set(fe);const Y={};$&2&&(Y.$$scope={dirty:$,ctx:p}),ne.$set(Y);const Ce={};$&2&&(Ce.$$scope={dirty:$,ctx:p}),Ze.$set(Ce);const Rt={};$&2&&(Rt.$$scope={dirty:$,ctx:p}),Re.$set(Rt);const et={};$&2&&(et.$$scope={dirty:$,ctx:p}),j.$set(et);const Ot={};$&2&&(Ot.$$scope={dirty:$,ctx:p}),Be.$set(Ot)},i(p){Ke||(T(e.$$.fragment,p),T(s.$$.fragment,p),T(C.$$.fragment,p),T(K.$$.fragment,p),T(W.$$.fragment,p),T(X.$$.fragment,p),T(pe.$$.fragment,p),T(te.$$.fragment,p),T(oe.$$.fragment,p),T(qe.$$.fragment,p),T(R.$$.fragment,p),T(A.$$.fragment,p),T(L.$$.fragment,p),T(Te.$$.fragment,p),T(ne.$$.fragment,p),T(Ze.$$.fragment,p),T(Re.$$.fragment,p),T(ze.$$.fragment,p),T(ye.$$.fragment,p),T(Ee.$$.fragment,p),T(j.$$.fragment,p),T(Be.$$.fragment,p),Ke=!0)},o(p){y(e.$$.fragment,p),y(s.$$.fragment,p),y(C.$$.fragment,p),y(K.$$.fragment,p),y(W.$$.fragment,p),y(X.$$.fragment,p),y(pe.$$.fragment,p),y(te.$$.fragment,p),y(oe.$$.fragment,p),y(qe.$$.fragment,p),y(R.$$.fragment,p),y(A.$$.fragment,p),y(L.$$.fragment,p),y(Te.$$.fragment,p),y(ne.$$.fragment,p),y(Ze.$$.fragment,p),y(Re.$$.fragment,p),y(ze.$$.fragment,p),y(ye.$$.fragment,p),y(Ee.$$.fragment,p),y(j.$$.fragment,p),y(Be.$$.fragment,p),Ke=!1},d(p){p&&(a(u),a(n),a(Ve),a(he),a(V),a(be),a(z),a(w),a(Mt),a(zt),a(se)),k(e,p),k(s),k(C),k(K),k(W),k(X,p),k(pe),k(te),k(oe),k(qe),k(R),k(A,p),k(L),k(Te),k(ne),k(Ze),k(Re),k(ze,p),k(ye),k(Ee),k(j),k(Be)}}}function Tn(q){let e,u;return e=new Xo({props:{$$slots:{default:[bn]},$$scope:{ctx:q}}}),{c(){_(e.$$.fragment)},l(n){g(e.$$.fragment,n)},m(n,s){b(e,n,s),u=!0},p(n,s){const m={};s&2&&(m.$$scope={dirty:s,ctx:n}),e.$set(m)},i(n){u||(T(e.$$.fragment,n),u=!0)},o(n){y(e.$$.fragment,n),u=!1},d(n){k(e,n)}}}function yn(q){let e,u="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",n,s,m="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,v,ae=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,E,B,re=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,F,C,I=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=c("p"),e.innerHTML=u,n=r(),s=c("ul"),s.innerHTML=m,t=r(),v=c("p"),v.innerHTML=ae,E=r(),B=c("ul"),B.innerHTML=re,F=r(),C=c("p"),C.innerHTML=I},l(x){e=h(x,"P",{"data-svelte-h":!0}),f(e)!=="svelte-1ajbfxg"&&(e.innerHTML=u),n=d(x),s=h(x,"UL",{"data-svelte-h":!0}),f(s)!=="svelte-qm1t26"&&(s.innerHTML=m),t=d(x),v=h(x,"P",{"data-svelte-h":!0}),f(v)!=="svelte-1v9qsc5"&&(v.innerHTML=ae),E=d(x),B=h(x,"UL",{"data-svelte-h":!0}),f(B)!=="svelte-15scerc"&&(B.innerHTML=re),F=d(x),C=h(x,"P",{"data-svelte-h":!0}),f(C)!=="svelte-1an3odd"&&(C.innerHTML=I)},m(x,S){l(x,e,S),l(x,n,S),l(x,s,S),l(x,t,S),l(x,v,S),l(x,E,S),l(x,B,S),l(x,F,S),l(x,C,S)},p:P,d(x){x&&(a(e),a(n),a(s),a(t),a(v),a(E),a(B),a(F),a(C))}}}function kn(q){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=c("p"),e.innerHTML=u},l(n){e=h(n,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(n,s){l(n,e,s)},p:P,d(n){n&&a(e)}}}function wn(q){let e,u="Example:",n,s,m;return s=new nt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkxFRE1vZGVsJTBBaW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJhbGxlbmFpJTJGbGVkLWJhc2UtMTYzODQlMjIpJTBBbW9kZWwlMjAlM0QlMjBURkxFRE1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJhbGxlbmFpJTJGbGVkLWJhc2UtMTYzODQlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbChpbnB1dHMpJTBBJTBBbGFzdF9oaWRkZW5fc3RhdGVzJTIwJTNEJTIwb3V0cHV0cy5sYXN0X2hpZGRlbl9zdGF0ZQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFLEDModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLEDModel.from_pretrained(<span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,n=r(),_(s.$$.fragment)},l(t){e=h(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=u),n=d(t),g(s.$$.fragment,t)},m(t,v){l(t,e,v),l(t,n,v),b(s,t,v),m=!0},p:P,i(t){m||(T(s.$$.fragment,t),m=!0)},o(t){y(s.$$.fragment,t),m=!1},d(t){t&&(a(e),a(n)),k(s,t)}}}function vn(q){let e,u="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",n,s,m="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,v,ae=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,E,B,re=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,F,C,I=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=c("p"),e.innerHTML=u,n=r(),s=c("ul"),s.innerHTML=m,t=r(),v=c("p"),v.innerHTML=ae,E=r(),B=c("ul"),B.innerHTML=re,F=r(),C=c("p"),C.innerHTML=I},l(x){e=h(x,"P",{"data-svelte-h":!0}),f(e)!=="svelte-1ajbfxg"&&(e.innerHTML=u),n=d(x),s=h(x,"UL",{"data-svelte-h":!0}),f(s)!=="svelte-qm1t26"&&(s.innerHTML=m),t=d(x),v=h(x,"P",{"data-svelte-h":!0}),f(v)!=="svelte-1v9qsc5"&&(v.innerHTML=ae),E=d(x),B=h(x,"UL",{"data-svelte-h":!0}),f(B)!=="svelte-15scerc"&&(B.innerHTML=re),F=d(x),C=h(x,"P",{"data-svelte-h":!0}),f(C)!=="svelte-1an3odd"&&(C.innerHTML=I)},m(x,S){l(x,e,S),l(x,n,S),l(x,s,S),l(x,t,S),l(x,v,S),l(x,E,S),l(x,B,S),l(x,F,S),l(x,C,S)},p:P,d(x){x&&(a(e),a(n),a(s),a(t),a(v),a(E),a(B),a(F),a(C))}}}function Mn(q){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=c("p"),e.innerHTML=u},l(n){e=h(n,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(n,s){l(n,e,s)},p:P,d(n){n&&a(e)}}}function xn(q){let e,u="Examples:",n,s,m;return s=new nt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkxFREZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbiUwQWltcG9ydCUyMHRlbnNvcmZsb3clMjBhcyUyMHRmJTBBJTBBbW5hbWUlMjAlM0QlMjAlMjJhbGxlbmFpJTJGbGVkLWJhc2UtMTYzODQlMjIlMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZChtbmFtZSklMEFUWFQlMjAlM0QlMjAlMjJNeSUyMGZyaWVuZHMlMjBhcmUlMjAlM0NtYXNrJTNFJTIwYnV0JTIwdGhleSUyMGVhdCUyMHRvbyUyMG1hbnklMjBjYXJicy4lMjIlMEFtb2RlbCUyMCUzRCUyMFRGTEVERm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uLmZyb21fcHJldHJhaW5lZChtbmFtZSklMEFiYXRjaCUyMCUzRCUyMHRva2VuaXplciglNUJUWFQlNUQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyKSUwQWxvZ2l0cyUyMCUzRCUyMG1vZGVsKGlucHV0cyUzRGJhdGNoLmlucHV0X2lkcykubG9naXRzJTBBcHJvYnMlMjAlM0QlMjB0Zi5ubi5zb2Z0bWF4KGxvZ2l0cyU1QjAlNUQpJTBBJTIzJTIwcHJvYnMlNUI1JTVEJTIwaXMlMjBhc3NvY2lhdGVkJTIwd2l0aCUyMHRoZSUyMG1hc2slMjB0b2tlbg==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFLEDForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>mname = <span class="hljs-string">&quot;allenai/led-base-16384&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;My friends are &lt;mask&gt; but they eat too many carbs.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLEDForConditionalGeneration.from_pretrained(mname)
<span class="hljs-meta">&gt;&gt;&gt; </span>batch = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(inputs=batch.input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = tf.nn.softmax(logits[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># probs[5] is associated with the mask token</span>`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,n=r(),_(s.$$.fragment)},l(t){e=h(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-kvfsh7"&&(e.textContent=u),n=d(t),g(s.$$.fragment,t)},m(t,v){l(t,e,v),l(t,n,v),b(s,t,v),m=!0},p:P,i(t){m||(T(s.$$.fragment,t),m=!0)},o(t){y(s.$$.fragment,t),m=!1},d(t){t&&(a(e),a(n)),k(s,t)}}}function qn(q){let e,u,n,s,m,t,v=`The bare LED Model outputting raw hidden-states without any specific head on top.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,ae,E,B=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,re,F,C,I,x,S,ve,K='The <a href="/docs/transformers/main/en/model_doc/led#transformers.TFLEDModel">TFLEDModel</a> forward method, overrides the <code>__call__</code> special method.',Ie,W,Ve,X,he,V,pe,N,ee,$e,Je,Le=`The LED Model with a language modeling head. Can be used for summarization.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Fe,Me,D=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,te,_e,ue,de,xe,oe,Ue,qe='The <a href="/docs/transformers/main/en/model_doc/led#transformers.TFLEDForConditionalGeneration">TFLEDForConditionalGeneration</a> forward method, overrides the <code>__call__</code> special method.',ge,R,be,A,z;return e=new je({props:{title:"TFLEDModel",local:"transformers.TFLEDModel",headingTag:"h2"}}),s=new G({props:{name:"class transformers.TFLEDModel",anchor:"transformers.TFLEDModel",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLEDModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L2343"}}),F=new ct({props:{$$slots:{default:[yn]},$$scope:{ctx:q}}}),x=new G({props:{name:"call",anchor:"transformers.TFLEDModel.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": tf.Tensor | None = None"},{name:"decoder_input_ids",val:": tf.Tensor | None = None"},{name:"decoder_attention_mask",val:": tf.Tensor | None = None"},{name:"head_mask",val:": tf.Tensor | None = None"},{name:"decoder_head_mask",val:": tf.Tensor | None = None"},{name:"encoder_outputs",val:": tf.Tensor | None = None"},{name:"global_attention_mask",val:": tf.Tensor | None = None"},{name:"past_key_values",val:": Tuple[Tuple[tf.Tensor]] | None = None"},{name:"inputs_embeds",val:": tf.Tensor | None = None"},{name:"decoder_inputs_embeds",val:": tf.Tensor | None = None"},{name:"use_cache",val:": bool | None = None"},{name:"output_attentions",val:": bool | None = None"},{name:"output_hidden_states",val:": bool | None = None"},{name:"return_dict",val:": bool | None = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLEDModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLEDModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLEDModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFLEDModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFLEDModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLEDModel.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFLEDModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.Tensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFLEDModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFLEDModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFLEDModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLEDModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLEDModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLEDModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L2359",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder’s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) — Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>encoder_global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),W=new ct({props:{$$slots:{default:[kn]},$$scope:{ctx:q}}}),X=new ot({props:{anchor:"transformers.TFLEDModel.call.example",$$slots:{default:[wn]},$$scope:{ctx:q}}}),V=new je({props:{title:"TFLEDForConditionalGeneration",local:"transformers.TFLEDForConditionalGeneration",headingTag:"h2"}}),ee=new G({props:{name:"class transformers.TFLEDForConditionalGeneration",anchor:"transformers.TFLEDForConditionalGeneration",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLEDForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig">LEDConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L2455"}}),_e=new ct({props:{$$slots:{default:[vn]},$$scope:{ctx:q}}}),xe=new G({props:{name:"call",anchor:"transformers.TFLEDForConditionalGeneration.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_input_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_outputs",val:": TFLEDEncoderBaseModelOutput | None = None"},{name:"global_attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"past_key_values",val:": Tuple[Tuple[Union[np.ndarray, tf.Tensor]]] | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"use_cache",val:": bool | None = None"},{name:"output_attentions",val:": bool | None = None"},{name:"output_hidden_states",val:": bool | None = None"},{name:"return_dict",val:": bool | None = None"},{name:"labels",val:": tf.Tensor | None = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFLEDForConditionalGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLEDForConditionalGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLEDForConditionalGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>LedTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>LED uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).`,name:"decoder_input_ids"},{anchor:"transformers.TFLEDForConditionalGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
will be made by default and ignore pad tokens. It is not recommended to set this for most use cases.`,name:"decoder_attention_mask"},{anchor:"transformers.TFLEDForConditionalGeneration.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLEDForConditionalGeneration.call.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>tf.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.TFLEDForConditionalGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tf.Tensor</code>, <em>optional</em>) &#x2014;
hidden states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.
of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of`,name:"encoder_outputs"},{anchor:"transformers.TFLEDForConditionalGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFLEDForConditionalGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFLEDForConditionalGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLEDForConditionalGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLEDForConditionalGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLEDForConditionalGeneration.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L2500",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/led#transformers.LEDConfig"
>LEDConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) — Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder’s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) — Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>encoder_global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/model_doc/led#transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput"
>transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),R=new ct({props:{$$slots:{default:[Mn]},$$scope:{ctx:q}}}),A=new ot({props:{anchor:"transformers.TFLEDForConditionalGeneration.call.example",$$slots:{default:[xn]},$$scope:{ctx:q}}}),{c(){_(e.$$.fragment),u=r(),n=c("div"),_(s.$$.fragment),m=r(),t=c("p"),t.innerHTML=v,ae=r(),E=c("p"),E.innerHTML=B,re=r(),_(F.$$.fragment),C=r(),I=c("div"),_(x.$$.fragment),S=r(),ve=c("p"),ve.innerHTML=K,Ie=r(),_(W.$$.fragment),Ve=r(),_(X.$$.fragment),he=r(),_(V.$$.fragment),pe=r(),N=c("div"),_(ee.$$.fragment),$e=r(),Je=c("p"),Je.innerHTML=Le,Fe=r(),Me=c("p"),Me.innerHTML=D,te=r(),_(_e.$$.fragment),ue=r(),de=c("div"),_(xe.$$.fragment),oe=r(),Ue=c("p"),Ue.innerHTML=qe,ge=r(),_(R.$$.fragment),be=r(),_(A.$$.fragment),this.h()},l(w){g(e.$$.fragment,w),u=d(w),n=h(w,"DIV",{class:!0});var L=J(n);g(s.$$.fragment,L),m=d(L),t=h(L,"P",{"data-svelte-h":!0}),f(t)!=="svelte-1ic0gqv"&&(t.innerHTML=v),ae=d(L),E=h(L,"P",{"data-svelte-h":!0}),f(E)!=="svelte-1be7e3c"&&(E.innerHTML=B),re=d(L),g(F.$$.fragment,L),C=d(L),I=h(L,"DIV",{class:!0});var O=J(I);g(x.$$.fragment,O),S=d(O),ve=h(O,"P",{"data-svelte-h":!0}),f(ve)!=="svelte-1h71v2a"&&(ve.innerHTML=K),Ie=d(O),g(W.$$.fragment,O),Ve=d(O),g(X.$$.fragment,O),O.forEach(a),L.forEach(a),he=d(w),g(V.$$.fragment,w),pe=d(w),N=h(w,"DIV",{class:!0});var H=J(N);g(ee.$$.fragment,H),$e=d(H),Je=h(H,"P",{"data-svelte-h":!0}),f(Je)!=="svelte-1hyfx69"&&(Je.innerHTML=Le),Fe=d(H),Me=h(H,"P",{"data-svelte-h":!0}),f(Me)!=="svelte-1be7e3c"&&(Me.innerHTML=D),te=d(H),g(_e.$$.fragment,H),ue=d(H),de=h(H,"DIV",{class:!0});var ie=J(de);g(xe.$$.fragment,ie),oe=d(ie),Ue=h(ie,"P",{"data-svelte-h":!0}),f(Ue)!=="svelte-osc19u"&&(Ue.innerHTML=qe),ge=d(ie),g(R.$$.fragment,ie),be=d(ie),g(A.$$.fragment,ie),ie.forEach(a),H.forEach(a),this.h()},h(){U(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(w,L){b(e,w,L),l(w,u,L),l(w,n,L),b(s,n,null),i(n,m),i(n,t),i(n,ae),i(n,E),i(n,re),b(F,n,null),i(n,C),i(n,I),b(x,I,null),i(I,S),i(I,ve),i(I,Ie),b(W,I,null),i(I,Ve),b(X,I,null),l(w,he,L),b(V,w,L),l(w,pe,L),l(w,N,L),b(ee,N,null),i(N,$e),i(N,Je),i(N,Fe),i(N,Me),i(N,te),b(_e,N,null),i(N,ue),i(N,de),b(xe,de,null),i(de,oe),i(de,Ue),i(de,ge),b(R,de,null),i(de,be),b(A,de,null),z=!0},p(w,L){const O={};L&2&&(O.$$scope={dirty:L,ctx:w}),F.$set(O);const H={};L&2&&(H.$$scope={dirty:L,ctx:w}),W.$set(H);const ie={};L&2&&(ie.$$scope={dirty:L,ctx:w}),X.$set(ie);const Se={};L&2&&(Se.$$scope={dirty:L,ctx:w}),_e.$set(Se);const Ne={};L&2&&(Ne.$$scope={dirty:L,ctx:w}),R.$set(Ne);const ht={};L&2&&(ht.$$scope={dirty:L,ctx:w}),A.$set(ht)},i(w){z||(T(e.$$.fragment,w),T(s.$$.fragment,w),T(F.$$.fragment,w),T(x.$$.fragment,w),T(W.$$.fragment,w),T(X.$$.fragment,w),T(V.$$.fragment,w),T(ee.$$.fragment,w),T(_e.$$.fragment,w),T(xe.$$.fragment,w),T(R.$$.fragment,w),T(A.$$.fragment,w),z=!0)},o(w){y(e.$$.fragment,w),y(s.$$.fragment,w),y(F.$$.fragment,w),y(x.$$.fragment,w),y(W.$$.fragment,w),y(X.$$.fragment,w),y(V.$$.fragment,w),y(ee.$$.fragment,w),y(_e.$$.fragment,w),y(xe.$$.fragment,w),y(R.$$.fragment,w),y(A.$$.fragment,w),z=!1},d(w){w&&(a(u),a(n),a(he),a(pe),a(N)),k(e,w),k(s),k(F),k(x),k(W),k(X),k(V,w),k(ee),k(_e),k(xe),k(R),k(A)}}}function $n(q){let e,u;return e=new Xo({props:{$$slots:{default:[qn]},$$scope:{ctx:q}}}),{c(){_(e.$$.fragment)},l(n){g(e.$$.fragment,n)},m(n,s){b(e,n,s),u=!0},p(n,s){const m={};s&2&&(m.$$scope={dirty:s,ctx:n}),e.$set(m)},i(n){u||(T(e.$$.fragment,n),u=!0)},o(n){y(e.$$.fragment,n),u=!1},d(n){k(e,n)}}}function Ln(q){let e,u,n,s,m,t,v,ae,E,B=`The LED model was proposed in <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer: The Long-Document Transformer</a> by Iz
Beltagy, Matthew E. Peters, Arman Cohan.`,re,F,C="The abstract from the paper is the following:",I,x,S=`<em>Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer’s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA. We finally introduce the Longformer-Encoder-Decoder (LED), a Longformer variant for supporting
long document generative sequence-to-sequence tasks, and demonstrate its effectiveness on the arXiv summarization
dataset.</em>`,ve,K,Ie,W,Ve=`<li><a href="/docs/transformers/main/en/model_doc/led#transformers.LEDForConditionalGeneration">LEDForConditionalGeneration</a> is an extension of
<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration">BartForConditionalGeneration</a> exchanging the traditional <em>self-attention</em> layer with
<em>Longformer</em>’s <em>chunked self-attention</em> layer. <a href="/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a> is an alias of
<a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>.</li> <li>LED works very well on long-range <em>sequence-to-sequence</em> tasks where the <code>input_ids</code> largely exceed a length of
1024 tokens.</li> <li>LED pads the <code>input_ids</code> to be a multiple of <code>config.attention_window</code> if required. Therefore a small speed-up is
gained, when <a href="/docs/transformers/main/en/model_doc/led#transformers.LEDTokenizer">LEDTokenizer</a> is used with the <code>pad_to_multiple_of</code> argument.</li> <li>LED makes use of <em>global attention</em> by means of the <code>global_attention_mask</code> (see
<a href="/docs/transformers/main/en/model_doc/longformer#transformers.LongformerModel">LongformerModel</a>). For summarization, it is advised to put <em>global attention</em> only on the first
<code>&lt;s&gt;</code> token. For question answering, it is advised to put <em>global attention</em> on all tokens of the question.</li> <li>To fine-tune LED on all 16384, <em>gradient checkpointing</em> can be enabled in case training leads to out-of-memory (OOM)
errors. This can be done by executing <code>model.gradient_checkpointing_enable()</code>.
Moreover, the <code>use_cache=False</code>
flag can be used to disable the caching mechanism to save memory.</li> <li>LED is a model with absolute position embeddings so it’s usually advised to pad the inputs on the right rather than
the left.</li>`,X,he,V='This model was contributed by <a href="https://huggingface.co/patrickvonplaten" rel="nofollow">patrickvonplaten</a>.',pe,N,ee,$e,Je='<li><a href="https://colab.research.google.com/drive/12INTTR6n64TzS4RrXZxMSXfrOd9Xzamo?usp=sharing" rel="nofollow">A notebook showing how to evaluate LED</a>.</li> <li><a href="https://colab.research.google.com/drive/12LjJazBl7Gam0XBPy_y0CTOJZeZ34c2v?usp=sharing" rel="nofollow">A notebook showing how to fine-tune LED</a>.</li> <li><a href="../tasks/sequence_classification">Text classification task guide</a></li> <li><a href="../tasks/question_answering">Question answering task guide</a></li> <li><a href="../tasks/translation">Translation task guide</a></li> <li><a href="../tasks/summarization">Summarization task guide</a></li>',Le,Fe,Me,D,te,_e,ue,de=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/led#transformers.LEDModel">LEDModel</a>. It is used to instantiate an LED
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the LED
<a href="https://huggingface.co/allenai/led-base-16384" rel="nofollow">allenai/led-base-16384</a> architecture.`,xe,oe,Ue=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,qe,ge,R,be,A,z,w,L,O,H="Constructs a LED tokenizer, which is smilar to the ROBERTa tokenizer, using byte-level Byte-Pair-Encoding.",ie,Se,Ne="This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will",ht,We,st,pt,Bt=`You can get around that behavior by passing <code>add_prefix_space=True</code> when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`,le,Te,Lt,Ge,so=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`,Ft,ne,He,Ze,at,Re=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A LED sequence has the following format:`,Mt,ze,zt="<li>single sequence: <code>&lt;s&gt; X &lt;/s&gt;</code></li> <li>pair of sequences: <code>&lt;s&gt; A &lt;/s&gt;&lt;/s&gt; B &lt;/s&gt;</code></li>",se,ye,Oe,rt,ut,Vt=`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer <code>prepare_for_model</code> method.`,dt,Qe,Xe,it,mt,Ht=`Create a mask from the two sequences passed to be used in a sequence-pair classification task. LED does not
make use of token type ids, therefore a list of zeros is returned.`,ke,Ee,Ae,Pe,lt,xt,j,Ye,Be,Ke,p=`Construct a “fast” LED tokenizer (backed by HuggingFace’s <em>tokenizers</em> library), derived from the GPT-2 tokenizer,
using byte-level Byte-Pair-Encoding.`,$,ce,De="This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will",me,Q,fe,Y,Ce=`You can get around that behavior by passing <code>add_prefix_space=True</code> when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`,Rt,et,Ot,Qt,Io=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a> which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`,Fo,qt,Et,zo,Xt,No=`Create a mask from the two sequences passed to be used in a sequence-pair classification task. LED does not
make use of token type ids, therefore a list of zeros is returned.`,io,Dt,lo,ft,Ct,Eo,At,Wo="Base class for LEDEncoder’s outputs, with potential hidden states, local and global attentions.",co,_t,jt,Do,Pt,Zo=`Base class for model encoder’s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`,ho,gt,Jt,Co,Yt,Bo="Base class for sequence-to-sequence language models outputs.",po,bt,Ut,jo,Kt,Vo="Base class for outputs of sequence-to-sequence sentence classification models.",uo,Tt,St,Jo,eo,Ho="Base class for outputs of sequence-to-sequence question answering models.",mo,yt,Gt,Uo,to,Ro="Base class for Longformer’s outputs, with potential hidden states, local and global attentions.",fo,kt,It,So,oo,Oo=`Base class for model encoder’s outputs that also contains : pre-computed hidden states that can speed up sequential
decoding.`,_o,wt,Nt,Go,no,Qo="Base class for sequence-to-sequence language models outputs.",go,$t,bo,ao,To;return m=new je({props:{title:"LED",local:"led",headingTag:"h1"}}),v=new je({props:{title:"Overview",local:"overview",headingTag:"h2"}}),K=new je({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),N=new je({props:{title:"Resources",local:"resources",headingTag:"h2"}}),Fe=new je({props:{title:"LEDConfig",local:"transformers.LEDConfig",headingTag:"h2"}}),te=new G({props:{name:"class transformers.LEDConfig",anchor:"transformers.LEDConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"max_encoder_position_embeddings",val:" = 16384"},{name:"max_decoder_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = True"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"decoder_start_token_id",val:" = 2"},{name:"classifier_dropout",val:" = 0.0"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"attention_window",val:": Union = 512"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LEDConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the LED model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/led#transformers.LEDModel">LEDModel</a> or <a href="/docs/transformers/main/en/model_doc/led#transformers.TFLEDModel">TFLEDModel</a>.`,name:"vocab_size"},{anchor:"transformers.LEDConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.LEDConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.LEDConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.LEDConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.LEDConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.LEDConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.LEDConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.LEDConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.LEDConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.LEDConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.LEDConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.LEDConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.LEDConfig.max_encoder_position_embeddings",description:`<strong>max_encoder_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 16384) &#x2014;
The maximum sequence length that the encoder might ever be used with.`,name:"max_encoder_position_embeddings"},{anchor:"transformers.LEDConfig.max_decoder_position_embeddings",description:`<strong>max_decoder_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 16384) &#x2014;
The maximum sequence length that the decoder might ever be used with.`,name:"max_decoder_position_embeddings"},{anchor:"transformers.LEDConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.LEDConfig.encoder_layerdrop",description:`<strong>encoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"encoder_layerdrop"},{anchor:"transformers.LEDConfig.decoder_layerdrop",description:`<strong>decoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"decoder_layerdrop"},{anchor:"transformers.LEDConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models)`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/led/configuration_led.py#L31"}}),ge=new ot({props:{anchor:"transformers.LEDConfig.example",$$slots:{default:[on]},$$scope:{ctx:q}}}),be=new je({props:{title:"LEDTokenizer",local:"transformers.LEDTokenizer",headingTag:"h2"}}),w=new G({props:{name:"class transformers.LEDTokenizer",anchor:"transformers.LEDTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LEDTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.LEDTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.LEDTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.LEDTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.LEDTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.LEDTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.LEDTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.LEDTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.LEDTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.LEDTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.LEDTokenizer.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (BART tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/led/tokenization_led.py#L93"}}),We=new ot({props:{anchor:"transformers.LEDTokenizer.example",$$slots:{default:[nn]},$$scope:{ctx:q}}}),Te=new ct({props:{$$slots:{default:[sn]},$$scope:{ctx:q}}}),He=new G({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.LEDTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.LEDTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.LEDTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/led/tokenization_led.py#L342",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Oe=new G({props:{name:"get_special_tokens_mask",anchor:"transformers.LEDTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.LEDTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.LEDTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.LEDTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/led/tokenization_led.py#L368",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Xe=new G({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.LEDTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.LEDTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.LEDTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/led/tokenization_led.py#L396",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of zeros.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Ae=new G({props:{name:"save_vocabulary",anchor:"transformers.LEDTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/led/tokenization_led.py#L312"}}),lt=new je({props:{title:"LEDTokenizerFast",local:"transformers.LEDTokenizerFast",headingTag:"h2"}}),Ye=new G({props:{name:"class transformers.LEDTokenizerFast",anchor:"transformers.LEDTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LEDTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.LEDTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.LEDTokenizerFast.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.LEDTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.LEDTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.LEDTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.LEDTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.LEDTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.LEDTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.LEDTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.LEDTokenizerFast.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (LED tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.LEDTokenizerFast.trim_offsets",description:`<strong>trim_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether the post processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/led/tokenization_led_fast.py#L50"}}),Q=new ot({props:{anchor:"transformers.LEDTokenizerFast.example",$$slots:{default:[an]},$$scope:{ctx:q}}}),et=new ct({props:{$$slots:{default:[rn]},$$scope:{ctx:q}}}),Et=new G({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.LEDTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.LEDTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.LEDTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/led/tokenization_led_fast.py#L279",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of zeros.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Dt=new je({props:{title:"LED specific outputs",local:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",headingTag:"h2"}}),Ct=new G({props:{name:"class transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"hidden_states",val:": Optional = None"},{name:"attentions",val:": Optional = None"},{name:"global_attentions",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/led/modeling_led.py#L1155"}}),jt=new G({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqModelOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor = None"},{name:"past_key_values",val:": Optional = None"},{name:"decoder_hidden_states",val:": Optional = None"},{name:"decoder_attentions",val:": Optional = None"},{name:"cross_attentions",val:": Optional = None"},{name:"encoder_last_hidden_state",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attentions",val:": Optional = None"},{name:"encoder_global_attentions",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.`,name:"last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqModelOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/led/modeling_led.py#L1199"}}),Jt=new G({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqLMOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput",parameters:[{name:"loss",val:": Optional = None"},{name:"logits",val:": FloatTensor = None"},{name:"past_key_values",val:": Optional = None"},{name:"decoder_hidden_states",val:": Optional = None"},{name:"decoder_attentions",val:": Optional = None"},{name:"cross_attentions",val:": Optional = None"},{name:"encoder_last_hidden_state",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attentions",val:": Optional = None"},{name:"encoder_global_attentions",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss.`,name:"loss"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqLMOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/led/modeling_led.py#L1267"}}),Ut=new G({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput",parameters:[{name:"loss",val:": Optional = None"},{name:"logits",val:": FloatTensor = None"},{name:"past_key_values",val:": Optional = None"},{name:"decoder_hidden_states",val:": Optional = None"},{name:"decoder_attentions",val:": Optional = None"},{name:"cross_attentions",val:": Optional = None"},{name:"encoder_last_hidden_state",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attentions",val:": Optional = None"},{name:"encoder_global_attentions",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) &#x2014;
Classification (or regression if config.num_labels==1) loss.`,name:"loss"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) &#x2014;
Classification (or regression if config.num_labels==1) scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqSequenceClassifierOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/led/modeling_led.py#L1334"}}),St=new G({props:{name:"class transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput",anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": Optional = None"},{name:"start_logits",val:": FloatTensor = None"},{name:"end_logits",val:": FloatTensor = None"},{name:"past_key_values",val:": Optional = None"},{name:"decoder_hidden_states",val:": Optional = None"},{name:"decoder_attentions",val:": Optional = None"},{name:"cross_attentions",val:": Optional = None"},{name:"encoder_last_hidden_state",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attentions",val:": Optional = None"},{name:"encoder_global_attentions",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.`,name:"loss"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.start_logits",description:`<strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-start scores (before SoftMax).`,name:"start_logits"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.end_logits",description:`<strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-end scores (before SoftMax).`,name:"end_logits"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_led.LEDSeq2SeqQuestionAnsweringModelOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/led/modeling_led.py#L1401"}}),Gt=new G({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput",parameters:[{name:"last_hidden_state",val:": tf.Tensor = None"},{name:"hidden_states",val:": Tuple[tf.Tensor, ...] | None = None"},{name:"attentions",val:": Tuple[tf.Tensor, ...] | None = None"},{name:"global_attentions",val:": Tuple[tf.Tensor, ...] | None = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDEncoderBaseModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L1436"}}),It=new G({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput",parameters:[{name:"last_hidden_state",val:": tf.Tensor = None"},{name:"past_key_values",val:": List[tf.Tensor] | None = None"},{name:"decoder_hidden_states",val:": Tuple[tf.Tensor, ...] | None = None"},{name:"decoder_attentions",val:": Tuple[tf.Tensor, ...] | None = None"},{name:"cross_attentions",val:": Tuple[tf.Tensor, ...] | None = None"},{name:"encoder_last_hidden_state",val:": tf.Tensor | None = None"},{name:"encoder_hidden_states",val:": Tuple[tf.Tensor, ...] | None = None"},{name:"encoder_attentions",val:": Tuple[tf.Tensor, ...] | None = None"},{name:"encoder_global_attentions",val:": Tuple[tf.Tensor, ...] | None = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.`,name:"last_hidden_state"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqModelOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L1480"}}),Nt=new G({props:{name:"class transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput",anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput",parameters:[{name:"loss",val:": tf.Tensor | None = None"},{name:"logits",val:": tf.Tensor = None"},{name:"past_key_values",val:": List[tf.Tensor] | None = None"},{name:"decoder_hidden_states",val:": Tuple[tf.Tensor, ...] | None = None"},{name:"decoder_attentions",val:": Tuple[tf.Tensor, ...] | None = None"},{name:"cross_attentions",val:": Tuple[tf.Tensor, ...] | None = None"},{name:"encoder_last_hidden_state",val:": tf.Tensor | None = None"},{name:"encoder_hidden_states",val:": Tuple[tf.Tensor, ...] | None = None"},{name:"encoder_attentions",val:": Tuple[tf.Tensor, ...] | None = None"},{name:"encoder_global_attentions",val:": Tuple[tf.Tensor, ...] | None = None"}],parametersDescription:[{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss.`,name:"loss"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) of the decoder that can be
used (see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.decoder_hidden_states",description:`<strong>decoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.`,name:"decoder_hidden_states"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.decoder_attentions",description:`<strong>decoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"decoder_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.cross_attentions",description:`<strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder&#x2019;s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"cross_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.encoder_last_hidden_state",description:`<strong>encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder of the model.`,name:"encoder_last_hidden_state"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.`,name:"encoder_hidden_states"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.encoder_attentions",description:`<strong>encoder_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"encoder_attentions"},{anchor:"transformers.models.led.modeling_tf_led.TFLEDSeq2SeqLMOutput.encoder_global_attentions",description:`<strong>encoder_global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"encoder_global_attentions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/led/modeling_tf_led.py#L1548"}}),$t=new tn({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[$n],pytorch:[Tn]},$$scope:{ctx:q}}}),{c(){e=c("meta"),u=r(),n=c("p"),s=r(),_(m.$$.fragment),t=r(),_(v.$$.fragment),ae=r(),E=c("p"),E.innerHTML=B,re=r(),F=c("p"),F.textContent=C,I=r(),x=c("p"),x.innerHTML=S,ve=r(),_(K.$$.fragment),Ie=r(),W=c("ul"),W.innerHTML=Ve,X=r(),he=c("p"),he.innerHTML=V,pe=r(),_(N.$$.fragment),ee=r(),$e=c("ul"),$e.innerHTML=Je,Le=r(),_(Fe.$$.fragment),Me=r(),D=c("div"),_(te.$$.fragment),_e=r(),ue=c("p"),ue.innerHTML=de,xe=r(),oe=c("p"),oe.innerHTML=Ue,qe=r(),_(ge.$$.fragment),R=r(),_(be.$$.fragment),A=r(),z=c("div"),_(w.$$.fragment),L=r(),O=c("p"),O.textContent=H,ie=r(),Se=c("p"),Se.textContent=Ne,ht=r(),_(We.$$.fragment),st=r(),pt=c("p"),pt.innerHTML=Bt,le=r(),_(Te.$$.fragment),Lt=r(),Ge=c("p"),Ge.innerHTML=so,Ft=r(),ne=c("div"),_(He.$$.fragment),Ze=r(),at=c("p"),at.textContent=Re,Mt=r(),ze=c("ul"),ze.innerHTML=zt,se=r(),ye=c("div"),_(Oe.$$.fragment),rt=r(),ut=c("p"),ut.innerHTML=Vt,dt=r(),Qe=c("div"),_(Xe.$$.fragment),it=r(),mt=c("p"),mt.textContent=Ht,ke=r(),Ee=c("div"),_(Ae.$$.fragment),Pe=r(),_(lt.$$.fragment),xt=r(),j=c("div"),_(Ye.$$.fragment),Be=r(),Ke=c("p"),Ke.innerHTML=p,$=r(),ce=c("p"),ce.textContent=De,me=r(),_(Q.$$.fragment),fe=r(),Y=c("p"),Y.innerHTML=Ce,Rt=r(),_(et.$$.fragment),Ot=r(),Qt=c("p"),Qt.innerHTML=Io,Fo=r(),qt=c("div"),_(Et.$$.fragment),zo=r(),Xt=c("p"),Xt.textContent=No,io=r(),_(Dt.$$.fragment),lo=r(),ft=c("div"),_(Ct.$$.fragment),Eo=r(),At=c("p"),At.textContent=Wo,co=r(),_t=c("div"),_(jt.$$.fragment),Do=r(),Pt=c("p"),Pt.textContent=Zo,ho=r(),gt=c("div"),_(Jt.$$.fragment),Co=r(),Yt=c("p"),Yt.textContent=Bo,po=r(),bt=c("div"),_(Ut.$$.fragment),jo=r(),Kt=c("p"),Kt.textContent=Vo,uo=r(),Tt=c("div"),_(St.$$.fragment),Jo=r(),eo=c("p"),eo.textContent=Ho,mo=r(),yt=c("div"),_(Gt.$$.fragment),Uo=r(),to=c("p"),to.textContent=Ro,fo=r(),kt=c("div"),_(It.$$.fragment),So=r(),oo=c("p"),oo.textContent=Oo,_o=r(),wt=c("div"),_(Nt.$$.fragment),Go=r(),no=c("p"),no.textContent=Qo,go=r(),_($t.$$.fragment),bo=r(),ao=c("p"),this.h()},l(o){const M=en("svelte-u9bgzb",document.head);e=h(M,"META",{name:!0,content:!0}),M.forEach(a),u=d(o),n=h(o,"P",{}),J(n).forEach(a),s=d(o),g(m.$$.fragment,o),t=d(o),g(v.$$.fragment,o),ae=d(o),E=h(o,"P",{"data-svelte-h":!0}),f(E)!=="svelte-n7qjbr"&&(E.innerHTML=B),re=d(o),F=h(o,"P",{"data-svelte-h":!0}),f(F)!=="svelte-vfdo9a"&&(F.textContent=C),I=d(o),x=h(o,"P",{"data-svelte-h":!0}),f(x)!=="svelte-132s9ii"&&(x.innerHTML=S),ve=d(o),g(K.$$.fragment,o),Ie=d(o),W=h(o,"UL",{"data-svelte-h":!0}),f(W)!=="svelte-18gn68n"&&(W.innerHTML=Ve),X=d(o),he=h(o,"P",{"data-svelte-h":!0}),f(he)!=="svelte-1t6iyb9"&&(he.innerHTML=V),pe=d(o),g(N.$$.fragment,o),ee=d(o),$e=h(o,"UL",{"data-svelte-h":!0}),f($e)!=="svelte-g09pd2"&&($e.innerHTML=Je),Le=d(o),g(Fe.$$.fragment,o),Me=d(o),D=h(o,"DIV",{class:!0});var tt=J(D);g(te.$$.fragment,tt),_e=d(tt),ue=h(tt,"P",{"data-svelte-h":!0}),f(ue)!=="svelte-116ftyy"&&(ue.innerHTML=de),xe=d(tt),oe=h(tt,"P",{"data-svelte-h":!0}),f(oe)!=="svelte-o55m63"&&(oe.innerHTML=Ue),qe=d(tt),g(ge.$$.fragment,tt),tt.forEach(a),R=d(o),g(be.$$.fragment,o),A=d(o),z=h(o,"DIV",{class:!0});var Z=J(z);g(w.$$.fragment,Z),L=d(Z),O=h(Z,"P",{"data-svelte-h":!0}),f(O)!=="svelte-yvtm5g"&&(O.textContent=H),ie=d(Z),Se=h(Z,"P",{"data-svelte-h":!0}),f(Se)!=="svelte-1s077p3"&&(Se.textContent=Ne),ht=d(Z),g(We.$$.fragment,Z),st=d(Z),pt=h(Z,"P",{"data-svelte-h":!0}),f(pt)!=="svelte-1jfcabo"&&(pt.innerHTML=Bt),le=d(Z),g(Te.$$.fragment,Z),Lt=d(Z),Ge=h(Z,"P",{"data-svelte-h":!0}),f(Ge)!=="svelte-1c3t5ty"&&(Ge.innerHTML=so),Ft=d(Z),ne=h(Z,"DIV",{class:!0});var vt=J(ne);g(He.$$.fragment,vt),Ze=d(vt),at=h(vt,"P",{"data-svelte-h":!0}),f(at)!=="svelte-18ay4ie"&&(at.textContent=Re),Mt=d(vt),ze=h(vt,"UL",{"data-svelte-h":!0}),f(ze)!=="svelte-rq8uot"&&(ze.innerHTML=zt),vt.forEach(a),se=d(Z),ye=h(Z,"DIV",{class:!0});var Wt=J(ye);g(Oe.$$.fragment,Wt),rt=d(Wt),ut=h(Wt,"P",{"data-svelte-h":!0}),f(ut)!=="svelte-1f4f5kp"&&(ut.innerHTML=Vt),Wt.forEach(a),dt=d(Z),Qe=h(Z,"DIV",{class:!0});var Zt=J(Qe);g(Xe.$$.fragment,Zt),it=d(Zt),mt=h(Zt,"P",{"data-svelte-h":!0}),f(mt)!=="svelte-1yc510y"&&(mt.textContent=Ht),Zt.forEach(a),ke=d(Z),Ee=h(Z,"DIV",{class:!0});var ro=J(Ee);g(Ae.$$.fragment,ro),ro.forEach(a),Z.forEach(a),Pe=d(o),g(lt.$$.fragment,o),xt=d(o),j=h(o,"DIV",{class:!0});var we=J(j);g(Ye.$$.fragment,we),Be=d(we),Ke=h(we,"P",{"data-svelte-h":!0}),f(Ke)!=="svelte-1itngog"&&(Ke.innerHTML=p),$=d(we),ce=h(we,"P",{"data-svelte-h":!0}),f(ce)!=="svelte-1s077p3"&&(ce.textContent=De),me=d(we),g(Q.$$.fragment,we),fe=d(we),Y=h(we,"P",{"data-svelte-h":!0}),f(Y)!=="svelte-1jfcabo"&&(Y.innerHTML=Ce),Rt=d(we),g(et.$$.fragment,we),Ot=d(we),Qt=h(we,"P",{"data-svelte-h":!0}),f(Qt)!=="svelte-fh0aq"&&(Qt.innerHTML=Io),Fo=d(we),qt=h(we,"DIV",{class:!0});var yo=J(qt);g(Et.$$.fragment,yo),zo=d(yo),Xt=h(yo,"P",{"data-svelte-h":!0}),f(Xt)!=="svelte-1yc510y"&&(Xt.textContent=No),yo.forEach(a),we.forEach(a),io=d(o),g(Dt.$$.fragment,o),lo=d(o),ft=h(o,"DIV",{class:!0});var ko=J(ft);g(Ct.$$.fragment,ko),Eo=d(ko),At=h(ko,"P",{"data-svelte-h":!0}),f(At)!=="svelte-zrcml9"&&(At.textContent=Wo),ko.forEach(a),co=d(o),_t=h(o,"DIV",{class:!0});var wo=J(_t);g(jt.$$.fragment,wo),Do=d(wo),Pt=h(wo,"P",{"data-svelte-h":!0}),f(Pt)!=="svelte-k12cko"&&(Pt.textContent=Zo),wo.forEach(a),ho=d(o),gt=h(o,"DIV",{class:!0});var vo=J(gt);g(Jt.$$.fragment,vo),Co=d(vo),Yt=h(vo,"P",{"data-svelte-h":!0}),f(Yt)!=="svelte-1dobm33"&&(Yt.textContent=Bo),vo.forEach(a),po=d(o),bt=h(o,"DIV",{class:!0});var Mo=J(bt);g(Ut.$$.fragment,Mo),jo=d(Mo),Kt=h(Mo,"P",{"data-svelte-h":!0}),f(Kt)!=="svelte-1kfw2sn"&&(Kt.textContent=Vo),Mo.forEach(a),uo=d(o),Tt=h(o,"DIV",{class:!0});var xo=J(Tt);g(St.$$.fragment,xo),Jo=d(xo),eo=h(xo,"P",{"data-svelte-h":!0}),f(eo)!=="svelte-dhzux4"&&(eo.textContent=Ho),xo.forEach(a),mo=d(o),yt=h(o,"DIV",{class:!0});var qo=J(yt);g(Gt.$$.fragment,qo),Uo=d(qo),to=h(qo,"P",{"data-svelte-h":!0}),f(to)!=="svelte-ttzn2d"&&(to.textContent=Ro),qo.forEach(a),fo=d(o),kt=h(o,"DIV",{class:!0});var $o=J(kt);g(It.$$.fragment,$o),So=d($o),oo=h($o,"P",{"data-svelte-h":!0}),f(oo)!=="svelte-k12cko"&&(oo.textContent=Oo),$o.forEach(a),_o=d(o),wt=h(o,"DIV",{class:!0});var Lo=J(wt);g(Nt.$$.fragment,Lo),Go=d(Lo),no=h(Lo,"P",{"data-svelte-h":!0}),f(no)!=="svelte-1dobm33"&&(no.textContent=Qo),Lo.forEach(a),go=d(o),g($t.$$.fragment,o),bo=d(o),ao=h(o,"P",{}),J(ao).forEach(a),this.h()},h(){U(e,"name","hf:doc:metadata"),U(e,"content",Fn),U(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,M){i(document.head,e),l(o,u,M),l(o,n,M),l(o,s,M),b(m,o,M),l(o,t,M),b(v,o,M),l(o,ae,M),l(o,E,M),l(o,re,M),l(o,F,M),l(o,I,M),l(o,x,M),l(o,ve,M),b(K,o,M),l(o,Ie,M),l(o,W,M),l(o,X,M),l(o,he,M),l(o,pe,M),b(N,o,M),l(o,ee,M),l(o,$e,M),l(o,Le,M),b(Fe,o,M),l(o,Me,M),l(o,D,M),b(te,D,null),i(D,_e),i(D,ue),i(D,xe),i(D,oe),i(D,qe),b(ge,D,null),l(o,R,M),b(be,o,M),l(o,A,M),l(o,z,M),b(w,z,null),i(z,L),i(z,O),i(z,ie),i(z,Se),i(z,ht),b(We,z,null),i(z,st),i(z,pt),i(z,le),b(Te,z,null),i(z,Lt),i(z,Ge),i(z,Ft),i(z,ne),b(He,ne,null),i(ne,Ze),i(ne,at),i(ne,Mt),i(ne,ze),i(z,se),i(z,ye),b(Oe,ye,null),i(ye,rt),i(ye,ut),i(z,dt),i(z,Qe),b(Xe,Qe,null),i(Qe,it),i(Qe,mt),i(z,ke),i(z,Ee),b(Ae,Ee,null),l(o,Pe,M),b(lt,o,M),l(o,xt,M),l(o,j,M),b(Ye,j,null),i(j,Be),i(j,Ke),i(j,$),i(j,ce),i(j,me),b(Q,j,null),i(j,fe),i(j,Y),i(j,Rt),b(et,j,null),i(j,Ot),i(j,Qt),i(j,Fo),i(j,qt),b(Et,qt,null),i(qt,zo),i(qt,Xt),l(o,io,M),b(Dt,o,M),l(o,lo,M),l(o,ft,M),b(Ct,ft,null),i(ft,Eo),i(ft,At),l(o,co,M),l(o,_t,M),b(jt,_t,null),i(_t,Do),i(_t,Pt),l(o,ho,M),l(o,gt,M),b(Jt,gt,null),i(gt,Co),i(gt,Yt),l(o,po,M),l(o,bt,M),b(Ut,bt,null),i(bt,jo),i(bt,Kt),l(o,uo,M),l(o,Tt,M),b(St,Tt,null),i(Tt,Jo),i(Tt,eo),l(o,mo,M),l(o,yt,M),b(Gt,yt,null),i(yt,Uo),i(yt,to),l(o,fo,M),l(o,kt,M),b(It,kt,null),i(kt,So),i(kt,oo),l(o,_o,M),l(o,wt,M),b(Nt,wt,null),i(wt,Go),i(wt,no),l(o,go,M),b($t,o,M),l(o,bo,M),l(o,ao,M),To=!0},p(o,[M]){const tt={};M&2&&(tt.$$scope={dirty:M,ctx:o}),ge.$set(tt);const Z={};M&2&&(Z.$$scope={dirty:M,ctx:o}),We.$set(Z);const vt={};M&2&&(vt.$$scope={dirty:M,ctx:o}),Te.$set(vt);const Wt={};M&2&&(Wt.$$scope={dirty:M,ctx:o}),Q.$set(Wt);const Zt={};M&2&&(Zt.$$scope={dirty:M,ctx:o}),et.$set(Zt);const ro={};M&2&&(ro.$$scope={dirty:M,ctx:o}),$t.$set(ro)},i(o){To||(T(m.$$.fragment,o),T(v.$$.fragment,o),T(K.$$.fragment,o),T(N.$$.fragment,o),T(Fe.$$.fragment,o),T(te.$$.fragment,o),T(ge.$$.fragment,o),T(be.$$.fragment,o),T(w.$$.fragment,o),T(We.$$.fragment,o),T(Te.$$.fragment,o),T(He.$$.fragment,o),T(Oe.$$.fragment,o),T(Xe.$$.fragment,o),T(Ae.$$.fragment,o),T(lt.$$.fragment,o),T(Ye.$$.fragment,o),T(Q.$$.fragment,o),T(et.$$.fragment,o),T(Et.$$.fragment,o),T(Dt.$$.fragment,o),T(Ct.$$.fragment,o),T(jt.$$.fragment,o),T(Jt.$$.fragment,o),T(Ut.$$.fragment,o),T(St.$$.fragment,o),T(Gt.$$.fragment,o),T(It.$$.fragment,o),T(Nt.$$.fragment,o),T($t.$$.fragment,o),To=!0)},o(o){y(m.$$.fragment,o),y(v.$$.fragment,o),y(K.$$.fragment,o),y(N.$$.fragment,o),y(Fe.$$.fragment,o),y(te.$$.fragment,o),y(ge.$$.fragment,o),y(be.$$.fragment,o),y(w.$$.fragment,o),y(We.$$.fragment,o),y(Te.$$.fragment,o),y(He.$$.fragment,o),y(Oe.$$.fragment,o),y(Xe.$$.fragment,o),y(Ae.$$.fragment,o),y(lt.$$.fragment,o),y(Ye.$$.fragment,o),y(Q.$$.fragment,o),y(et.$$.fragment,o),y(Et.$$.fragment,o),y(Dt.$$.fragment,o),y(Ct.$$.fragment,o),y(jt.$$.fragment,o),y(Jt.$$.fragment,o),y(Ut.$$.fragment,o),y(St.$$.fragment,o),y(Gt.$$.fragment,o),y(It.$$.fragment,o),y(Nt.$$.fragment,o),y($t.$$.fragment,o),To=!1},d(o){o&&(a(u),a(n),a(s),a(t),a(ae),a(E),a(re),a(F),a(I),a(x),a(ve),a(Ie),a(W),a(X),a(he),a(pe),a(ee),a($e),a(Le),a(Me),a(D),a(R),a(A),a(z),a(Pe),a(xt),a(j),a(io),a(lo),a(ft),a(co),a(_t),a(ho),a(gt),a(po),a(bt),a(uo),a(Tt),a(mo),a(yt),a(fo),a(kt),a(_o),a(wt),a(go),a(bo),a(ao)),a(e),k(m,o),k(v,o),k(K,o),k(N,o),k(Fe,o),k(te),k(ge),k(be,o),k(w),k(We),k(Te),k(He),k(Oe),k(Xe),k(Ae),k(lt,o),k(Ye),k(Q),k(et),k(Et),k(Dt,o),k(Ct),k(jt),k(Jt),k(Ut),k(St),k(Gt),k(It),k(Nt),k($t,o)}}}const Fn='{"title":"LED","local":"led","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"LEDConfig","local":"transformers.LEDConfig","sections":[],"depth":2},{"title":"LEDTokenizer","local":"transformers.LEDTokenizer","sections":[],"depth":2},{"title":"LEDTokenizerFast","local":"transformers.LEDTokenizerFast","sections":[],"depth":2},{"title":"LED specific outputs","local":"transformers.models.led.modeling_led.LEDEncoderBaseModelOutput","sections":[],"depth":2},{"title":"LEDModel","local":"transformers.LEDModel","sections":[],"depth":2},{"title":"LEDForConditionalGeneration","local":"transformers.LEDForConditionalGeneration","sections":[],"depth":2},{"title":"LEDForSequenceClassification","local":"transformers.LEDForSequenceClassification","sections":[],"depth":2},{"title":"LEDForQuestionAnswering","local":"transformers.LEDForQuestionAnswering","sections":[],"depth":2},{"title":"TFLEDModel","local":"transformers.TFLEDModel","sections":[],"depth":2},{"title":"TFLEDForConditionalGeneration","local":"transformers.TFLEDForConditionalGeneration","sections":[],"depth":2}],"depth":1}';function zn(q){return Po(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class In extends Yo{constructor(e){super(),Ko(this,e,zn,Ln,Ao,{})}}export{In as component};
