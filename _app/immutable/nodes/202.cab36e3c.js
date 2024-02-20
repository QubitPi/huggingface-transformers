import{s as Ls,o as Ns,n as G}from"../chunks/scheduler.9bc65507.js";import{S as Ps,i as Es,g as d,s as a,r as h,A as As,h as l,f as i,c as r,j as F,u as f,x as k,k as U,y as o,a as p,v as g,d as _,t as v,w as b}from"../chunks/index.707bf1b6.js";import{T as tn}from"../chunks/Tip.c2ecdbf4.js";import{D as Z}from"../chunks/Docstring.17db21ae.js";import{C as B}from"../chunks/CodeBlock.54a9f38d.js";import{E as D}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as N}from"../chunks/Heading.342b1fa6.js";function Ys(M){let t,u="Example:",n,m,y;return m=new B({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyME12cENvbmZpZyUyQyUyME12cE1vZGVsJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyME1WUCUyMFJVQ0FJQm94JTJGbXZwJTIwc3R5bGUlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyME12cENvbmZpZygpJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyMG1vZGVsJTIwKHdpdGglMjByYW5kb20lMjB3ZWlnaHRzKSUyMGZyb20lMjB0aGUlMjBSVUNBSUJveCUyRm12cCUyMHN0eWxlJTIwY29uZmlndXJhdGlvbiUwQW1vZGVsJTIwJTNEJTIwTXZwTW9kZWwoY29uZmlndXJhdGlvbiklMEElMEElMjMlMjBBY2Nlc3NpbmclMjB0aGUlMjBtb2RlbCUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwbW9kZWwuY29uZmln",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MvpConfig, MvpModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a MVP RUCAIBox/mvp style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = MvpConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the RUCAIBox/mvp style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MvpModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){t=d("p"),t.textContent=u,n=a(),h(m.$$.fragment)},l(c){t=l(c,"P",{"data-svelte-h":!0}),k(t)!=="svelte-11lpom8"&&(t.textContent=u),n=r(c),f(m.$$.fragment,c)},m(c,w){p(c,t,w),p(c,n,w),g(m,c,w),y=!0},p:G,i(c){y||(_(m.$$.fragment,c),y=!0)},o(c){v(m.$$.fragment,c),y=!1},d(c){c&&(i(t),i(n)),b(m,c)}}}function Os(M){let t,u="be encoded differently whether it is at the beginning of the sentence (without space) or not:",n,m,y;return m=new B({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyME12cFRva2VuaXplciUwQSUwQXRva2VuaXplciUyMCUzRCUyME12cFRva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyUlVDQUlCb3glMkZtdnAlMjIpJTBBdG9rZW5pemVyKCUyMkhlbGxvJTIwd29ybGQlMjIpJTVCJTIyaW5wdXRfaWRzJTIyJTVEJTBBJTBBdG9rZW5pemVyKCUyMiUyMEhlbGxvJTIwd29ybGQlMjIpJTVCJTIyaW5wdXRfaWRzJTIyJTVE",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MvpTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MvpTokenizer.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
[<span class="hljs-number">0</span>, <span class="hljs-number">31414</span>, <span class="hljs-number">232</span>, <span class="hljs-number">2</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
[<span class="hljs-number">0</span>, <span class="hljs-number">20920</span>, <span class="hljs-number">232</span>, <span class="hljs-number">2</span>]`,wrap:!1}}),{c(){t=d("p"),t.textContent=u,n=a(),h(m.$$.fragment)},l(c){t=l(c,"P",{"data-svelte-h":!0}),k(t)!=="svelte-12atnao"&&(t.textContent=u),n=r(c),f(m.$$.fragment,c)},m(c,w){p(c,t,w),p(c,n,w),g(m,c,w),y=!0},p:G,i(c){y||(_(m.$$.fragment,c),y=!0)},o(c){v(m.$$.fragment,c),y=!1},d(c){c&&(i(t),i(n)),b(m,c)}}}function Ds(M){let t,u="When used with <code>is_split_into_words=True</code>, this tokenizer will add a space before each word (even the first one).";return{c(){t=d("p"),t.innerHTML=u},l(n){t=l(n,"P",{"data-svelte-h":!0}),k(t)!=="svelte-jhmxzm"&&(t.innerHTML=u)},m(n,m){p(n,t,m)},p:G,d(n){n&&i(t)}}}function Ks(M){let t,u="be encoded differently whether it is at the beginning of the sentence (without space) or not:",n,m,y;return m=new B({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyME12cFRva2VuaXplckZhc3QlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBNdnBUb2tlbml6ZXJGYXN0LmZyb21fcHJldHJhaW5lZCglMjJSVUNBSUJveCUyRm12cCUyMiklMEF0b2tlbml6ZXIoJTIySGVsbG8lMjB3b3JsZCUyMiklNUIlMjJpbnB1dF9pZHMlMjIlNUQlMEElMEF0b2tlbml6ZXIoJTIyJTIwSGVsbG8lMjB3b3JsZCUyMiklNUIlMjJpbnB1dF9pZHMlMjIlNUQ=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MvpTokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MvpTokenizerFast.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
[<span class="hljs-number">0</span>, <span class="hljs-number">31414</span>, <span class="hljs-number">232</span>, <span class="hljs-number">2</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
[<span class="hljs-number">0</span>, <span class="hljs-number">20920</span>, <span class="hljs-number">232</span>, <span class="hljs-number">2</span>]`,wrap:!1}}),{c(){t=d("p"),t.textContent=u,n=a(),h(m.$$.fragment)},l(c){t=l(c,"P",{"data-svelte-h":!0}),k(t)!=="svelte-12atnao"&&(t.textContent=u),n=r(c),f(m.$$.fragment,c)},m(c,w){p(c,t,w),p(c,n,w),g(m,c,w),y=!0},p:G,i(c){y||(_(m.$$.fragment,c),y=!0)},o(c){v(m.$$.fragment,c),y=!1},d(c){c&&(i(t),i(n)),b(m,c)}}}function ea(M){let t,u="When used with <code>is_split_into_words=True</code>, this tokenizer needs to be instantiated with <code>add_prefix_space=True</code>.";return{c(){t=d("p"),t.innerHTML=u},l(n){t=l(n,"P",{"data-svelte-h":!0}),k(t)!=="svelte-9gg91e"&&(t.innerHTML=u)},m(n,m){p(n,t,m)},p:G,d(n){n&&i(t)}}}function ta(M){let t,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=d("p"),t.innerHTML=u},l(n){t=l(n,"P",{"data-svelte-h":!0}),k(t)!=="svelte-fincs2"&&(t.innerHTML=u)},m(n,m){p(n,t,m)},p:G,d(n){n&&i(t)}}}function na(M){let t,u="Example:",n,m,y;return m=new B({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBNdnBNb2RlbCUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyUlVDQUlCb3glMkZtdnAlMjIpJTBBbW9kZWwlMjAlM0QlMjBNdnBNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyUlVDQUlCb3glMkZtdnAlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEFsYXN0X2hpZGRlbl9zdGF0ZXMlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRl",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, MvpModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MvpModel.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){t=d("p"),t.textContent=u,n=a(),h(m.$$.fragment)},l(c){t=l(c,"P",{"data-svelte-h":!0}),k(t)!=="svelte-11lpom8"&&(t.textContent=u),n=r(c),f(m.$$.fragment,c)},m(c,w){p(c,t,w),p(c,n,w),g(m,c,w),y=!0},p:G,i(c){y||(_(m.$$.fragment,c),y=!0)},o(c){v(m.$$.fragment,c),y=!1},d(c){c&&(i(t),i(n)),b(m,c)}}}function oa(M){let t,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=d("p"),t.innerHTML=u},l(n){t=l(n,"P",{"data-svelte-h":!0}),k(t)!=="svelte-fincs2"&&(t.innerHTML=u)},m(n,m){p(n,t,m)},p:G,d(n){n&&i(t)}}}function sa(M){let t,u;return t=new B({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyME12cEZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMlJVQ0FJQm94JTJGbXZwJTIyKSUwQW1vZGVsJTIwJTNEJTIwTXZwRm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uLmZyb21fcHJldHJhaW5lZCglMjJSVUNBSUJveCUyRm12cCUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTBBJTIwJTIwJTIwJTIwJTIyU3VtbWFyaXplJTNBJTIwWW91JTIwbWF5JTIwd2FudCUyMHRvJTIwc3RpY2slMjBpdCUyMHRvJTIweW91ciUyMGJvc3MlMjBhbmQlMjBsZWF2ZSUyMHlvdXIlMjBqb2IlMkMlMjBidXQlMjBkb24ndCUyMGRvJTIwaXQlMjBpZiUyMHRoZXNlJTIwYXJlJTIweW91ciUyMHJlYXNvbnMuJTIyJTJDJTBBJTIwJTIwJTIwJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiUyQyUwQSklMEFsYWJlbHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIyQmFkJTIwUmVhc29ucyUyMFRvJTIwUXVpdCUyMFlvdXIlMjBKb2IlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSU1QiUyMmlucHV0X2lkcyUyMiU1RCUwQSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcyUwQWxvc3MuYmFja3dhcmQoKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, MvpForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MvpForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Summarize: You may want to stick it to your boss and leave your job, but don&#x27;t do it if these are your reasons.&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;Bad Reasons To Quit Your Job&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`,wrap:!1}}),{c(){h(t.$$.fragment)},l(n){f(t.$$.fragment,n)},m(n,m){g(t,n,m),u=!0},p:G,i(n){u||(_(t.$$.fragment,n),u=!0)},o(n){v(t.$$.fragment,n),u=!1},d(n){b(t,n)}}}function aa(M){let t,u;return t=new B({props:{code:"d2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGdlbmVyYXRlZF9pZHMlMjAlM0QlMjBtb2RlbC5nZW5lcmF0ZSgqKmlucHV0cyklMEElMEFnZW5lcmF0ZWRfdGV4dCUyMCUzRCUyMHRva2VuaXplci5iYXRjaF9kZWNvZGUoZ2VuZXJhdGVkX2lkcyUyQyUyMHNraXBfc3BlY2lhbF90b2tlbnMlM0RUcnVlKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    generated_ids = model.generate(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>generated_text = tokenizer.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)`,wrap:!1}}),{c(){h(t.$$.fragment)},l(n){f(t.$$.fragment,n)},m(n,m){g(t,n,m),u=!0},p:G,i(n){u||(_(t.$$.fragment,n),u=!0)},o(n){v(t.$$.fragment,n),u=!1},d(n){b(t,n)}}}function ra(M){let t,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=d("p"),t.innerHTML=u},l(n){t=l(n,"P",{"data-svelte-h":!0}),k(t)!=="svelte-fincs2"&&(t.innerHTML=u)},m(n,m){p(n,t,m)},p:G,d(n){n&&i(t)}}}function ia(M){let t,u;return t=new B({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyME12cEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMEElMEFudW1fbGFiZWxzJTIwJTNEJTIwMiUyMCUyMCUyMyUyMGZvciUyMGV4YW1wbGUlMkMlMjB0aGlzJTIwaXMlMjBhJTIwYmluYXJ5JTIwY2xhc3NpZmljYXRpb24lMjB0YXNrJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyUlVDQUlCb3glMkZtdnAlMjIpJTBBbW9kZWwlMjAlM0QlMjBNdnBGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJSVUNBSUJveCUyRm12cCUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJDbGFzc2lmeSUzQSUyMEhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvcigxKSUyMCUyMCUyMyUyMHRoZSUyMHJlYWwlMjBsYWJlbCUyMGZvciUyMGlucHV0cyUwQSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcyUwQWxvc3MuYmFja3dhcmQoKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, MvpForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-number">2</span>  <span class="hljs-comment"># for example, this is a binary classification task</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MvpForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Classify: Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)  <span class="hljs-comment"># the real label for inputs</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`,wrap:!1}}),{c(){h(t.$$.fragment)},l(n){f(t.$$.fragment,n)},m(n,m){g(t,n,m),u=!0},p:G,i(n){u||(_(t.$$.fragment,n),u=!0)},o(n){v(t.$$.fragment,n),u=!1},d(n){b(t,n)}}}function da(M){let t,u;return t=new B({props:{code:"d2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEFwcmVkaWN0ZWRfY2xhc3NfaWQlMjAlM0QlMjBsb2dpdHMuYXJnbWF4KCk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax()`,wrap:!1}}),{c(){h(t.$$.fragment)},l(n){f(t.$$.fragment,n)},m(n,m){g(t,n,m),u=!0},p:G,i(n){u||(_(t.$$.fragment,n),u=!0)},o(n){v(t.$$.fragment,n),u=!1},d(n){b(t,n)}}}function la(M){let t,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=d("p"),t.innerHTML=u},l(n){t=l(n,"P",{"data-svelte-h":!0}),k(t)!=="svelte-fincs2"&&(t.innerHTML=u)},m(n,m){p(n,t,m)},p:G,d(n){n&&i(t)}}}function ca(M){let t,u;return t=new B({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyME12cEZvclF1ZXN0aW9uQW5zd2VyaW5nJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyUlVDQUlCb3glMkZtdnAlMjIpJTBBbW9kZWwlMjAlM0QlMjBNdnBGb3JRdWVzdGlvbkFuc3dlcmluZy5mcm9tX3ByZXRyYWluZWQoJTIyUlVDQUlCb3glMkZtdnAlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUwQSUyMCUyMCUyMCUyMCUyMkFuc3dlciUyMHRoZSUyMGZvbGxvd2luZyUyMHF1ZXN0aW9uJTNBJTIwV2hvJTIwd2FzJTIwSmltJTIwSGVuc29uJTNGJTIwJTVCU0VQJTVEJTIwSmltJTIwSGVuc29uJTIwd2FzJTIwYSUyMG5pY2UlMjBwdXBwZXQlMjIlMkMlMEElMjAlMjAlMjAlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTJDJTBBKSUwQXRhcmdldF9zdGFydF9pbmRleCUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxOCU1RCklMEF0YXJnZXRfZW5kX2luZGV4JTIwJTNEJTIwdG9yY2gudGVuc29yKCU1QjE5JTVEKSUwQSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMHN0YXJ0X3Bvc2l0aW9ucyUzRHRhcmdldF9zdGFydF9pbmRleCUyQyUyMGVuZF9wb3NpdGlvbnMlM0R0YXJnZXRfZW5kX2luZGV4KS5sb3NzJTBBbG9zcy5iYWNrd2FyZCgp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, MvpForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MvpForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Answer the following question: Who was Jim Henson? [SEP] Jim Henson was a nice puppet&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">18</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">19</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, start_positions=target_start_index, end_positions=target_end_index).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`,wrap:!1}}),{c(){h(t.$$.fragment)},l(n){f(t.$$.fragment,n)},m(n,m){g(t,n,m),u=!0},p:G,i(n){u||(_(t.$$.fragment,n),u=!0)},o(n){v(t.$$.fragment,n),u=!1},d(n){b(t,n)}}}function pa(M){let t,u;return t=new B({props:{code:"d2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMG91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEFhbnN3ZXJfc3RhcnRfaW5kZXglMjAlM0QlMjBvdXRwdXRzLnN0YXJ0X2xvZ2l0cy5hcmdtYXgoKSUwQWFuc3dlcl9lbmRfaW5kZXglMjAlM0QlMjBvdXRwdXRzLmVuZF9sb2dpdHMuYXJnbWF4KCklMEElMEFwcmVkaWN0X2Fuc3dlcl90b2tlbnMlMjAlM0QlMjBpbnB1dHMuaW5wdXRfaWRzJTVCMCUyQyUyMGFuc3dlcl9zdGFydF9pbmRleCUyMCUzQSUyMGFuc3dlcl9lbmRfaW5kZXglMjAlMkIlMjAxJTVEJTBBcHJlZGljdF9hbnN3ZXIlMjAlM0QlMjB0b2tlbml6ZXIuZGVjb2RlKHByZWRpY3RfYW5zd2VyX3Rva2Vucyk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer = tokenizer.decode(predict_answer_tokens)`,wrap:!1}}),{c(){h(t.$$.fragment)},l(n){f(t.$$.fragment,n)},m(n,m){g(t,n,m),u=!0},p:G,i(n){u||(_(t.$$.fragment,n),u=!0)},o(n){v(t.$$.fragment,n),u=!1},d(n){b(t,n)}}}function ma(M){let t,u="Example:",n,m,y;return m=new B({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBNdnBGb3JDYXVzYWxMTSUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMlJVQ0FJQm94JTJGbXZwJTIyKSUwQW1vZGVsJTIwJTNEJTIwTXZwRm9yQ2F1c2FsTE0uZnJvbV9wcmV0cmFpbmVkKCUyMlJVQ0FJQm94JTJGbXZwJTIyJTJDJTIwYWRkX2Nyb3NzX2F0dGVudGlvbiUzREZhbHNlKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHMlMEFsaXN0KGxvZ2l0cy5zaGFwZSk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, MvpForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MvpForCausalLM.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp&quot;</span>, add_cross_attention=<span class="hljs-literal">False</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">8</span>, <span class="hljs-number">50267</span>]`,wrap:!1}}),{c(){t=d("p"),t.textContent=u,n=a(),h(m.$$.fragment)},l(c){t=l(c,"P",{"data-svelte-h":!0}),k(t)!=="svelte-11lpom8"&&(t.textContent=u),n=r(c),f(m.$$.fragment,c)},m(c,w){p(c,t,w),p(c,n,w),g(m,c,w),y=!0},p:G,i(c){y||(_(m.$$.fragment,c),y=!0)},o(c){v(m.$$.fragment,c),y=!1},d(c){c&&(i(t),i(n)),b(m,c)}}}function ua(M){let t,u,n,m,y,c,w,on,Te,Oo='The MVP model was proposed in <a href="https://arxiv.org/abs/2206.12131" rel="nofollow">MVP: Multi-task Supervised Pre-training for Natural Language Generation</a> by Tianyi Tang, Junyi Li, Wayne Xin Zhao and Ji-Rong Wen.',sn,$e,Do="According to the abstract,",an,xe,Ko="<li>MVP follows a standard Transformer encoder-decoder architecture.</li> <li>MVP is supervised pre-trained using labeled datasets.</li> <li>MVP also has task-specific soft prompts to stimulate the model’s capacity in performing a certain task.</li> <li>MVP is specially designed for natural language generation and can be adapted to a wide range of generation tasks, including but not limited to summarization, data-to-text generation, open-ended dialogue system, story generation, question answering, question generation, task-oriented dialogue system, commonsense generation, paraphrase generation, text style transfer, and text simplification. Our model can also be adapted to natural language understanding tasks such as sequence classification and (extractive) question answering.</li>",rn,Ce,es='This model was contributed by <a href="https://huggingface.co/StevenTang" rel="nofollow">Tianyi Tang</a>. The detailed information and instructions can be found <a href="https://github.com/RUCAIBox/MVP" rel="nofollow">here</a>.',dn,ze,ln,je,ts='<li>We have released a series of models <a href="https://huggingface.co/models?filter=mvp" rel="nofollow">here</a>, including MVP, MVP with task-specific prompts, and multi-task pre-trained variants.</li> <li>If you want to use a model without prompts (standard Transformer), you can load it through <code>MvpForConditionalGeneration.from_pretrained(&#39;RUCAIBox/mvp&#39;)</code>.</li> <li>If you want to use a model with task-specific prompts, such as summarization, you can load it through <code>MvpForConditionalGeneration.from_pretrained(&#39;RUCAIBox/mvp-summarization&#39;)</code>.</li> <li>Our model supports lightweight prompt tuning following <a href="https://arxiv.org/abs/2101.00190" rel="nofollow">Prefix-tuning</a> with method <code>set_lightweight_tuning()</code>.</li>',cn,Fe,pn,Ue,ns="For summarization, it is an example to use MVP and MVP with summarization-specific prompts.",mn,Je,un,qe,os="For data-to-text generation, it is an example to use MVP and multi-task pre-trained variants.",hn,Ie,fn,We,ss='For lightweight tuning, <em>i.e.</em>, fixing the model and only tuning prompts, you can load MVP with randomly initialized prompts or with task-specific prompts. Our code also supports Prefix-tuning with BART following the <a href="https://arxiv.org/abs/2101.00190" rel="nofollow">original paper</a>.',gn,Ze,_n,Ge,vn,Ve,as='<li><a href="../tasks/sequence_classification">Text classification task guide</a></li> <li><a href="../tasks/question_answering">Question answering task guide</a></li> <li><a href="../tasks/language_modeling">Causal language modeling task guide</a></li> <li><a href="../tasks/masked_language_modeling">Masked language modeling task guide</a></li> <li><a href="../tasks/translation">Translation task guide</a></li> <li><a href="../tasks/summarization">Summarization task guide</a></li>',bn,Re,kn,Q,Be,Vn,gt,rs=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/mvp#transformers.MvpModel">MvpModel</a>. It is used to instantiate a MVP model
according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the MVP <a href="https://huggingface.co/RUCAIBox/mvp" rel="nofollow">RUCAIBox/mvp</a>
architecture.`,Rn,_t,is=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,Bn,ne,Mn,Qe,yn,T,Xe,Qn,vt,ds="Constructs a MVP tokenizer, which is smilar to the RoBERTa tokenizer, using byte-level Byte-Pair-Encoding.",Xn,bt,ls="This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will",Hn,oe,Sn,kt,cs=`You can get around that behavior by passing <code>add_prefix_space=True</code> when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`,Ln,se,Nn,Mt,ps=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`,Pn,K,He,En,yt,ms=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A MVP sequence has the following format:`,An,wt,us="<li>single sequence: <code>&lt;s&gt; X &lt;/s&gt;</code></li> <li>pair of sequences: <code>&lt;s&gt; A &lt;/s&gt;&lt;/s&gt; B &lt;/s&gt;</code></li>",Yn,ae,Se,On,Tt,hs="Converts a sequence of tokens (string) in a single string.",Dn,re,Le,Kn,$t,fs=`Create a mask from the two sequences passed to be used in a sequence-pair classification task. MVP does not
make use of token type ids, therefore a list of zeros is returned.`,eo,ie,Ne,to,xt,gs=`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer <code>prepare_for_model</code> method.`,wn,Pe,Tn,x,Ee,no,Ct,_s=`Construct a “fast” MVP tokenizer (backed by HuggingFace’s <em>tokenizers</em> library), derived from the GPT-2 tokenizer,
using byte-level Byte-Pair-Encoding.`,oo,zt,vs="This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will",so,de,ao,jt,bs=`You can get around that behavior by passing <code>add_prefix_space=True</code> when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`,ro,le,io,Ft,ks=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a> which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`,lo,ce,Ae,co,Ut,Ms=`Create a mask from the two sequences passed to be used in a sequence-pair classification task. MVP does not
make use of token type ids, therefore a list of zeros is returned.`,$n,Ye,xn,X,Oe,po,Jt,ys=`The bare MVP Model outputting raw hidden-states without any specific head on top.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,mo,qt,ws=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,uo,P,De,ho,It,Ts='The <a href="/docs/transformers/main/en/model_doc/mvp#transformers.MvpModel">MvpModel</a> forward method, overrides the <code>__call__</code> special method.',fo,pe,go,me,Cn,Ke,zn,H,et,_o,Wt,$s=`The MVP Model with a language modeling head. Can be used for various text generation tasks.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,vo,Zt,xs=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,bo,C,tt,ko,Gt,Cs='The <a href="/docs/transformers/main/en/model_doc/mvp#transformers.MvpForConditionalGeneration">MvpForConditionalGeneration</a> forward method, overrides the <code>__call__</code> special method.',Mo,ue,yo,Vt,zs="Example of summarization:",wo,Rt,js="Fine-tuning a model",To,he,$o,Bt,Fs="Inference after the model fine-tuned",xo,fe,jn,nt,Fn,V,ot,Co,Qt,Us=`Mvp model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`,zo,Xt,Js=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,jo,Ht,qs=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Fo,z,st,Uo,St,Is='The <a href="/docs/transformers/main/en/model_doc/mvp#transformers.MvpForSequenceClassification">MvpForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',Jo,ge,qo,Lt,Ws="Example of single-label classification:",Io,Nt,Zs="Fine-tuning a model on <code>num_labels</code> classes",Wo,_e,Zo,Pt,Gs="Inference after the model fine-tuned",Go,ve,Un,at,Jn,R,rt,Vo,Et,Vs=`MVP Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear layer
on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,Ro,At,Rs=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Bo,Yt,Bs=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Qo,j,it,Xo,Ot,Qs='The <a href="/docs/transformers/main/en/model_doc/mvp#transformers.MvpForQuestionAnswering">MvpForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',Ho,be,So,Dt,Xs="Example:",Lo,Kt,Hs=`Fine-tuning a model for extrative question answering, and our model also supports generative question answering
using <code>BartForConditionalGeneration</code>`,No,ke,Po,en,Ss="Inference after the model fine-tuned",Eo,Me,qn,dt,In,ee,lt,Ao,ye,ct,Yo,we,Wn,nn,Zn;return y=new N({props:{title:"MVP",local:"mvp",headingTag:"h1"}}),w=new N({props:{title:"Overview",local:"overview",headingTag:"h2"}}),ze=new N({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),Fe=new N({props:{title:"Usage examples",local:"usage-examples",headingTag:"h2"}}),Je=new B({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyME12cFRva2VuaXplciUyQyUyME12cEZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbiUwQSUwQXRva2VuaXplciUyMCUzRCUyME12cFRva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyUlVDQUlCb3glMkZtdnAlMjIpJTBBbW9kZWwlMjAlM0QlMjBNdnBGb3JDb25kaXRpb25hbEdlbmVyYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMlJVQ0FJQm94JTJGbXZwJTIyKSUwQW1vZGVsX3dpdGhfcHJvbXB0JTIwJTNEJTIwTXZwRm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uLmZyb21fcHJldHJhaW5lZCglMjJSVUNBSUJveCUyRm12cC1zdW1tYXJpemF0aW9uJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMEElMjAlMjAlMjAlMjAlMjJTdW1tYXJpemUlM0ElMjBZb3UlMjBtYXklMjB3YW50JTIwdG8lMjBzdGljayUyMGl0JTIwdG8lMjB5b3VyJTIwYm9zcyUyMGFuZCUyMGxlYXZlJTIweW91ciUyMGpvYiUyQyUyMGJ1dCUyMGRvbid0JTIwZG8lMjBpdCUyMGlmJTIwdGhlc2UlMjBhcmUlMjB5b3VyJTIwcmVhc29ucy4lMjIlMkMlMEElMjAlMjAlMjAlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTJDJTBBKSUwQWdlbmVyYXRlZF9pZHMlMjAlM0QlMjBtb2RlbC5nZW5lcmF0ZSgqKmlucHV0cyklMEF0b2tlbml6ZXIuYmF0Y2hfZGVjb2RlKGdlbmVyYXRlZF9pZHMlMkMlMjBza2lwX3NwZWNpYWxfdG9rZW5zJTNEVHJ1ZSklMEElMEFnZW5lcmF0ZWRfaWRzJTIwJTNEJTIwbW9kZWxfd2l0aF9wcm9tcHQuZ2VuZXJhdGUoKippbnB1dHMpJTBBdG9rZW5pemVyLmJhdGNoX2RlY29kZShnZW5lcmF0ZWRfaWRzJTJDJTIwc2tpcF9zcGVjaWFsX3Rva2VucyUzRFRydWUp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MvpTokenizer, MvpForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MvpTokenizer.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MvpForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model_with_prompt = MvpForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp-summarization&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Summarize: You may want to stick it to your boss and leave your job, but don&#x27;t do it if these are your reasons.&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&quot;Why You Shouldn&#x27;t Quit Your Job&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model_with_prompt.generate(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&quot;Don&#x27;t do it if these are your reasons&quot;</span>]`,wrap:!1}}),Ie=new B({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyME12cFRva2VuaXplckZhc3QlMkMlMjBNdnBGb3JDb25kaXRpb25hbEdlbmVyYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBNdnBUb2tlbml6ZXJGYXN0LmZyb21fcHJldHJhaW5lZCglMjJSVUNBSUJveCUyRm12cCUyMiklMEFtb2RlbCUyMCUzRCUyME12cEZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyUlVDQUlCb3glMkZtdnAlMjIpJTBBbW9kZWxfd2l0aF9tdGwlMjAlM0QlMjBNdnBGb3JDb25kaXRpb25hbEdlbmVyYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMlJVQ0FJQm94JTJGbXRsLWRhdGEtdG8tdGV4dCUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTBBJTIwJTIwJTIwJTIwJTIyRGVzY3JpYmUlMjB0aGUlMjBmb2xsb3dpbmclMjBkYXRhJTNBJTIwSXJvbiUyME1hbiUyMCU3QyUyMGluc3RhbmNlJTIwb2YlMjAlN0MlMjBTdXBlcmhlcm8lMjAlNUJTRVAlNUQlMjBTdGFuJTIwTGVlJTIwJTdDJTIwY3JlYXRvciUyMCU3QyUyMElyb24lMjBNYW4lMjIlMkMlMEElMjAlMjAlMjAlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTJDJTBBKSUwQWdlbmVyYXRlZF9pZHMlMjAlM0QlMjBtb2RlbC5nZW5lcmF0ZSgqKmlucHV0cyklMEF0b2tlbml6ZXIuYmF0Y2hfZGVjb2RlKGdlbmVyYXRlZF9pZHMlMkMlMjBza2lwX3NwZWNpYWxfdG9rZW5zJTNEVHJ1ZSklMEElMEFnZW5lcmF0ZWRfaWRzJTIwJTNEJTIwbW9kZWxfd2l0aF9tdGwuZ2VuZXJhdGUoKippbnB1dHMpJTBBdG9rZW5pemVyLmJhdGNoX2RlY29kZShnZW5lcmF0ZWRfaWRzJTJDJTIwc2tpcF9zcGVjaWFsX3Rva2VucyUzRFRydWUp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MvpTokenizerFast, MvpForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MvpTokenizerFast.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MvpForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model_with_mtl = MvpForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mtl-data-to-text&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Describe the following data: Iron Man | instance of | Superhero [SEP] Stan Lee | creator | Iron Man&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model.generate(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&#x27;Stan Lee created the character of Iron Man, a fictional superhero appearing in American comic&#x27;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>generated_ids = model_with_mtl.generate(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(generated_ids, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&#x27;Iron Man is a fictional superhero appearing in American comic books published by Marvel Comics.&#x27;</span>]`,wrap:!1}}),Ze=new B({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyME12cEZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbiUwQSUwQW1vZGVsJTIwJTNEJTIwTXZwRm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uLmZyb21fcHJldHJhaW5lZCglMjJSVUNBSUJveCUyRm12cCUyMiUyQyUyMHVzZV9wcm9tcHQlM0RUcnVlKSUwQSUyMyUyMHRoZSUyMG51bWJlciUyMG9mJTIwdHJhaW5hYmxlJTIwcGFyYW1ldGVycyUyMChmdWxsJTIwdHVuaW5nKSUwQXN1bShwLm51bWVsKCklMjBmb3IlMjBwJTIwaW4lMjBtb2RlbC5wYXJhbWV0ZXJzKCklMjBpZiUyMHAucmVxdWlyZXNfZ3JhZCklMEElMEElMjMlMjBsaWdodHdlaWdodCUyMHR1bmluZyUyMHdpdGglMjByYW5kb21seSUyMGluaXRpYWxpemVkJTIwcHJvbXB0cyUwQW1vZGVsLnNldF9saWdodHdlaWdodF90dW5pbmcoKSUwQSUyMyUyMHRoZSUyMG51bWJlciUyMG9mJTIwdHJhaW5hYmxlJTIwcGFyYW1ldGVycyUyMChsaWdodHdlaWdodCUyMHR1bmluZyklMEFzdW0ocC5udW1lbCgpJTIwZm9yJTIwcCUyMGluJTIwbW9kZWwucGFyYW1ldGVycygpJTIwaWYlMjBwLnJlcXVpcmVzX2dyYWQpJTBBJTBBJTIzJTIwbGlnaHR3ZWlnaHQlMjB0dW5pbmclMjB3aXRoJTIwdGFzay1zcGVjaWZpYyUyMHByb21wdHMlMEFtb2RlbCUyMCUzRCUyME12cEZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyUlVDQUlCb3glMkZtdGwtZGF0YS10by10ZXh0JTIyKSUwQW1vZGVsLnNldF9saWdodHdlaWdodF90dW5pbmcoKSUwQSUyMyUyMG9yaWdpbmFsJTIwbGlnaHR3ZWlnaHQlMjBQcmVmaXgtdHVuaW5nJTBBbW9kZWwlMjAlM0QlMjBNdnBGb3JDb25kaXRpb25hbEdlbmVyYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGYmFydC1sYXJnZSUyMiUyQyUyMHVzZV9wcm9tcHQlM0RUcnVlKSUwQW1vZGVsLnNldF9saWdodHdlaWdodF90dW5pbmcoKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MvpForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MvpForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mvp&quot;</span>, use_prompt=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the number of trainable parameters (full tuning)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">sum</span>(p.numel() <span class="hljs-keyword">for</span> p <span class="hljs-keyword">in</span> model.parameters() <span class="hljs-keyword">if</span> p.requires_grad)
<span class="hljs-number">468116832</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># lightweight tuning with randomly initialized prompts</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.set_lightweight_tuning()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the number of trainable parameters (lightweight tuning)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">sum</span>(p.numel() <span class="hljs-keyword">for</span> p <span class="hljs-keyword">in</span> model.parameters() <span class="hljs-keyword">if</span> p.requires_grad)
<span class="hljs-number">61823328</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># lightweight tuning with task-specific prompts</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MvpForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;RUCAIBox/mtl-data-to-text&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.set_lightweight_tuning()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># original lightweight Prefix-tuning</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MvpForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/bart-large&quot;</span>, use_prompt=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.set_lightweight_tuning()`,wrap:!1}}),Ge=new N({props:{title:"Resources",local:"resources",headingTag:"h2"}}),Re=new N({props:{title:"MvpConfig",local:"transformers.MvpConfig",headingTag:"h2"}}),Be=new Z({props:{name:"class transformers.MvpConfig",anchor:"transformers.MvpConfig",parameters:[{name:"vocab_size",val:" = 50267"},{name:"max_position_embeddings",val:" = 1024"},{name:"encoder_layers",val:" = 12"},{name:"encoder_ffn_dim",val:" = 4096"},{name:"encoder_attention_heads",val:" = 16"},{name:"decoder_layers",val:" = 12"},{name:"decoder_ffn_dim",val:" = 4096"},{name:"decoder_attention_heads",val:" = 16"},{name:"encoder_layerdrop",val:" = 0.0"},{name:"decoder_layerdrop",val:" = 0.0"},{name:"activation_function",val:" = 'gelu'"},{name:"d_model",val:" = 1024"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.0"},{name:"activation_dropout",val:" = 0.0"},{name:"init_std",val:" = 0.02"},{name:"classifier_dropout",val:" = 0.0"},{name:"scale_embedding",val:" = False"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"is_encoder_decoder",val:" = True"},{name:"decoder_start_token_id",val:" = 2"},{name:"forced_eos_token_id",val:" = 2"},{name:"use_prompt",val:" = False"},{name:"prompt_length",val:" = 100"},{name:"prompt_mid_dim",val:" = 800"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MvpConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50267) &#x2014;
Vocabulary size of the MVP model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/mvp#transformers.MvpModel">MvpModel</a>.`,name:"vocab_size"},{anchor:"transformers.MvpConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.MvpConfig.encoder_layers",description:`<strong>encoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of encoder layers.`,name:"encoder_layers"},{anchor:"transformers.MvpConfig.decoder_layers",description:`<strong>decoder_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of decoder layers.`,name:"decoder_layers"},{anchor:"transformers.MvpConfig.encoder_attention_heads",description:`<strong>encoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"encoder_attention_heads"},{anchor:"transformers.MvpConfig.decoder_attention_heads",description:`<strong>decoder_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer decoder.`,name:"decoder_attention_heads"},{anchor:"transformers.MvpConfig.decoder_ffn_dim",description:`<strong>decoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"decoder_ffn_dim"},{anchor:"transformers.MvpConfig.encoder_ffn_dim",description:`<strong>encoder_ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in decoder.`,name:"encoder_ffn_dim"},{anchor:"transformers.MvpConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"activation_function"},{anchor:"transformers.MvpConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.MvpConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.MvpConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.MvpConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.MvpConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.MvpConfig.init_std",description:`<strong>init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"init_std"},{anchor:"transformers.MvpConfig.encoder_layerdrop",description:`<strong>encoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"encoder_layerdrop"},{anchor:"transformers.MvpConfig.decoder_layerdrop",description:`<strong>decoder_layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The LayerDrop probability for the decoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"decoder_layerdrop"},{anchor:"transformers.MvpConfig.scale_embedding",description:`<strong>scale_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Scale embeddings by diving by sqrt(d_model).`,name:"scale_embedding"},{anchor:"transformers.MvpConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.MvpConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"},{anchor:"transformers.MvpConfig.use_prompt",description:`<strong>use_prompt</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use prompt.`,name:"use_prompt"},{anchor:"transformers.MvpConfig.prompt_length",description:`<strong>prompt_length</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
The length of prompt.`,name:"prompt_length"},{anchor:"transformers.MvpConfig.prompt_mid_dim",description:`<strong>prompt_mid_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 800) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; layer in prompt.`,name:"prompt_mid_dim"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mvp/configuration_mvp.py#L29"}}),ne=new D({props:{anchor:"transformers.MvpConfig.example",$$slots:{default:[Ys]},$$scope:{ctx:M}}}),Qe=new N({props:{title:"MvpTokenizer",local:"transformers.MvpTokenizer",headingTag:"h2"}}),Xe=new Z({props:{name:"class transformers.MvpTokenizer",anchor:"transformers.MvpTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MvpTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.MvpTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.MvpTokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.MvpTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.MvpTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.MvpTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.MvpTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.MvpTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MvpTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MvpTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.MvpTokenizer.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (MVP tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mvp/tokenization_mvp.py#L89"}}),oe=new D({props:{anchor:"transformers.MvpTokenizer.example",$$slots:{default:[Os]},$$scope:{ctx:M}}}),se=new tn({props:{$$slots:{default:[Ds]},$$scope:{ctx:M}}}),He=new Z({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MvpTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MvpTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MvpTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mvp/tokenization_mvp.py#L329",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Se=new Z({props:{name:"convert_tokens_to_string",anchor:"transformers.MvpTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mvp/tokenization_mvp.py#L294"}}),Le=new Z({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MvpTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MvpTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MvpTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mvp/tokenization_mvp.py#L381",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of zeros.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Ne=new Z({props:{name:"get_special_tokens_mask",anchor:"transformers.MvpTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.MvpTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MvpTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.MvpTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mvp/tokenization_mvp.py#L354",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Pe=new N({props:{title:"MvpTokenizerFast",local:"transformers.MvpTokenizerFast",headingTag:"h2"}}),Ee=new Z({props:{name:"class transformers.MvpTokenizerFast",anchor:"transformers.MvpTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MvpTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.MvpTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.MvpTokenizerFast.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.MvpTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.MvpTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.MvpTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.MvpTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.MvpTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MvpTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MvpTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.MvpTokenizerFast.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (MVP tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.MvpTokenizerFast.trim_offsets",description:`<strong>trim_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether the post processing step should trim offsets to avoid including whitespaces.`,name:"trim_offsets"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mvp/tokenization_mvp_fast.py#L53"}}),de=new D({props:{anchor:"transformers.MvpTokenizerFast.example",$$slots:{default:[Ks]},$$scope:{ctx:M}}}),le=new tn({props:{$$slots:{default:[ea]},$$scope:{ctx:M}}}),Ae=new Z({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MvpTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MvpTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MvpTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mvp/tokenization_mvp_fast.py#L278",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of zeros.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Ye=new N({props:{title:"MvpModel",local:"transformers.MvpModel",headingTag:"h2"}}),Oe=new Z({props:{name:"class transformers.MvpModel",anchor:"transformers.MvpModel",parameters:[{name:"config",val:": MvpConfig"}],parametersDescription:[{anchor:"transformers.MvpModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mvp#transformers.MvpConfig">MvpConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mvp/modeling_mvp.py#L1231"}}),De=new Z({props:{name:"forward",anchor:"transformers.MvpModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MvpModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MvpModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MvpModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Mvp uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MvpModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_mvp._prepare_decoder_attention_mask</code>
and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.MvpModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MvpModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MvpModel.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MvpModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MvpModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MvpModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MvpModel.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MvpModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MvpModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MvpModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MvpModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mvp/modeling_mvp.py#L1274",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mvp#transformers.MvpConfig"
>MvpConfig</a>) and inputs.</p>
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
`}}),pe=new tn({props:{$$slots:{default:[ta]},$$scope:{ctx:M}}}),me=new D({props:{anchor:"transformers.MvpModel.forward.example",$$slots:{default:[na]},$$scope:{ctx:M}}}),Ke=new N({props:{title:"MvpForConditionalGeneration",local:"transformers.MvpForConditionalGeneration",headingTag:"h2"}}),et=new Z({props:{name:"class transformers.MvpForConditionalGeneration",anchor:"transformers.MvpForConditionalGeneration",parameters:[{name:"config",val:": MvpConfig"}],parametersDescription:[{anchor:"transformers.MvpForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mvp#transformers.MvpConfig">MvpConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mvp/modeling_mvp.py#L1369"}}),tt=new Z({props:{name:"forward",anchor:"transformers.MvpForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MvpForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MvpForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MvpForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Mvp uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MvpForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_mvp._prepare_decoder_attention_mask</code>
and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.MvpForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MvpForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MvpForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MvpForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MvpForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MvpForConditionalGeneration.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MvpForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MvpForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MvpForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MvpForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MvpForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MvpForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mvp/modeling_mvp.py#L1414",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mvp#transformers.MvpConfig"
>MvpConfig</a>) and inputs.</p>
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
`}}),ue=new tn({props:{$$slots:{default:[oa]},$$scope:{ctx:M}}}),he=new D({props:{anchor:"transformers.MvpForConditionalGeneration.forward.example",$$slots:{default:[sa]},$$scope:{ctx:M}}}),fe=new D({props:{anchor:"transformers.MvpForConditionalGeneration.forward.example-2",$$slots:{default:[aa]},$$scope:{ctx:M}}}),nt=new N({props:{title:"MvpForSequenceClassification",local:"transformers.MvpForSequenceClassification",headingTag:"h2"}}),ot=new Z({props:{name:"class transformers.MvpForSequenceClassification",anchor:"transformers.MvpForSequenceClassification",parameters:[{name:"config",val:": MvpConfig"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MvpForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mvp#transformers.MvpConfig">MvpConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mvp/modeling_mvp.py#L1547"}}),st=new Z({props:{name:"forward",anchor:"transformers.MvpForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MvpForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MvpForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MvpForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Mvp uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MvpForSequenceClassification.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_mvp._prepare_decoder_attention_mask</code>
and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.MvpForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MvpForSequenceClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MvpForSequenceClassification.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MvpForSequenceClassification.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MvpForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MvpForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MvpForSequenceClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MvpForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MvpForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MvpForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MvpForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MvpForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mvp/modeling_mvp.py#L1574"}}),ge=new tn({props:{$$slots:{default:[ra]},$$scope:{ctx:M}}}),_e=new D({props:{anchor:"transformers.MvpForSequenceClassification.forward.example",$$slots:{default:[ia]},$$scope:{ctx:M}}}),ve=new D({props:{anchor:"transformers.MvpForSequenceClassification.forward.example-2",$$slots:{default:[da]},$$scope:{ctx:M}}}),at=new N({props:{title:"MvpForQuestionAnswering",local:"transformers.MvpForQuestionAnswering",headingTag:"h2"}}),rt=new Z({props:{name:"class transformers.MvpForQuestionAnswering",anchor:"transformers.MvpForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MvpForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mvp#transformers.MvpConfig">MvpConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mvp/modeling_mvp.py#L1674"}}),it=new Z({props:{name:"forward",anchor:"transformers.MvpForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Tensor = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"start_positions",val:": Optional = None"},{name:"end_positions",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MvpForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MvpForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MvpForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>Mvp uses the <code>eos_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>For translation and summarization training, <code>decoder_input_ids</code> should be provided. If no
<code>decoder_input_ids</code> is provided, the model will create this tensor by shifting the <code>input_ids</code> to the right
for denoising pre-training following the paper.`,name:"decoder_input_ids"},{anchor:"transformers.MvpForQuestionAnswering.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.</p>
<p>If you want to change padding behavior, you should read <code>modeling_mvp._prepare_decoder_attention_mask</code>
and modify to your needs. See diagram 1 in <a href="https://arxiv.org/abs/1910.13461" rel="nofollow">the paper</a> for more
information on the default strategy.`,name:"decoder_attention_mask"},{anchor:"transformers.MvpForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MvpForQuestionAnswering.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MvpForQuestionAnswering.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MvpForQuestionAnswering.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <em>optional</em>: <code>hidden_states</code>, <em>optional</em>: <code>attentions</code>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) is a sequence of
hidden-states at the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MvpForQuestionAnswering.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MvpForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors
than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MvpForQuestionAnswering.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MvpForQuestionAnswering.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MvpForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MvpForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MvpForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MvpForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MvpForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mvp/modeling_mvp.py#L1700"}}),be=new tn({props:{$$slots:{default:[la]},$$scope:{ctx:M}}}),ke=new D({props:{anchor:"transformers.MvpForQuestionAnswering.forward.example",$$slots:{default:[ca]},$$scope:{ctx:M}}}),Me=new D({props:{anchor:"transformers.MvpForQuestionAnswering.forward.example-2",$$slots:{default:[pa]},$$scope:{ctx:M}}}),dt=new N({props:{title:"MvpForCausalLM",local:"transformers.MvpForCausalLM",headingTag:"h2"}}),lt=new Z({props:{name:"class transformers.MvpForCausalLM",anchor:"transformers.MvpForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mvp/modeling_mvp.py#L1812"}}),ct=new Z({props:{name:"forward",anchor:"transformers.MvpForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MvpForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you
provide it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MvpForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MvpForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention
if the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.MvpForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used
in the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:`,name:"encoder_attention_mask"},{anchor:"transformers.MvpForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MvpForCausalLM.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(decoder_layers, decoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MvpForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of
shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of
shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional
tensors are only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the
cross-attention blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those
that don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of
all <code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MvpForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should either be in <code>[0, ..., config.vocab_size]</code> or -100 (see <code>input_ids</code> docstring). Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.MvpForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding
(see <code>past_key_values</code>).</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"use_cache"},{anchor:"transformers.MvpForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MvpForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more detail.`,name:"output_hidden_states"},{anchor:"transformers.MvpForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mvp/modeling_mvp.py#L1849",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mvp#transformers.MvpConfig"
>MvpConfig</a>) and inputs.</p>
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
`}}),we=new D({props:{anchor:"transformers.MvpForCausalLM.forward.example",$$slots:{default:[ma]},$$scope:{ctx:M}}}),{c(){t=d("meta"),u=a(),n=d("p"),m=a(),h(y.$$.fragment),c=a(),h(w.$$.fragment),on=a(),Te=d("p"),Te.innerHTML=Oo,sn=a(),$e=d("p"),$e.textContent=Do,an=a(),xe=d("ul"),xe.innerHTML=Ko,rn=a(),Ce=d("p"),Ce.innerHTML=es,dn=a(),h(ze.$$.fragment),ln=a(),je=d("ul"),je.innerHTML=ts,cn=a(),h(Fe.$$.fragment),pn=a(),Ue=d("p"),Ue.textContent=ns,mn=a(),h(Je.$$.fragment),un=a(),qe=d("p"),qe.textContent=os,hn=a(),h(Ie.$$.fragment),fn=a(),We=d("p"),We.innerHTML=ss,gn=a(),h(Ze.$$.fragment),_n=a(),h(Ge.$$.fragment),vn=a(),Ve=d("ul"),Ve.innerHTML=as,bn=a(),h(Re.$$.fragment),kn=a(),Q=d("div"),h(Be.$$.fragment),Vn=a(),gt=d("p"),gt.innerHTML=rs,Rn=a(),_t=d("p"),_t.innerHTML=is,Bn=a(),h(ne.$$.fragment),Mn=a(),h(Qe.$$.fragment),yn=a(),T=d("div"),h(Xe.$$.fragment),Qn=a(),vt=d("p"),vt.textContent=ds,Xn=a(),bt=d("p"),bt.textContent=ls,Hn=a(),h(oe.$$.fragment),Sn=a(),kt=d("p"),kt.innerHTML=cs,Ln=a(),h(se.$$.fragment),Nn=a(),Mt=d("p"),Mt.innerHTML=ps,Pn=a(),K=d("div"),h(He.$$.fragment),En=a(),yt=d("p"),yt.textContent=ms,An=a(),wt=d("ul"),wt.innerHTML=us,Yn=a(),ae=d("div"),h(Se.$$.fragment),On=a(),Tt=d("p"),Tt.textContent=hs,Dn=a(),re=d("div"),h(Le.$$.fragment),Kn=a(),$t=d("p"),$t.textContent=fs,eo=a(),ie=d("div"),h(Ne.$$.fragment),to=a(),xt=d("p"),xt.innerHTML=gs,wn=a(),h(Pe.$$.fragment),Tn=a(),x=d("div"),h(Ee.$$.fragment),no=a(),Ct=d("p"),Ct.innerHTML=_s,oo=a(),zt=d("p"),zt.textContent=vs,so=a(),h(de.$$.fragment),ao=a(),jt=d("p"),jt.innerHTML=bs,ro=a(),h(le.$$.fragment),io=a(),Ft=d("p"),Ft.innerHTML=ks,lo=a(),ce=d("div"),h(Ae.$$.fragment),co=a(),Ut=d("p"),Ut.textContent=Ms,$n=a(),h(Ye.$$.fragment),xn=a(),X=d("div"),h(Oe.$$.fragment),po=a(),Jt=d("p"),Jt.innerHTML=ys,mo=a(),qt=d("p"),qt.innerHTML=ws,uo=a(),P=d("div"),h(De.$$.fragment),ho=a(),It=d("p"),It.innerHTML=Ts,fo=a(),h(pe.$$.fragment),go=a(),h(me.$$.fragment),Cn=a(),h(Ke.$$.fragment),zn=a(),H=d("div"),h(et.$$.fragment),_o=a(),Wt=d("p"),Wt.innerHTML=$s,vo=a(),Zt=d("p"),Zt.innerHTML=xs,bo=a(),C=d("div"),h(tt.$$.fragment),ko=a(),Gt=d("p"),Gt.innerHTML=Cs,Mo=a(),h(ue.$$.fragment),yo=a(),Vt=d("p"),Vt.textContent=zs,wo=a(),Rt=d("p"),Rt.textContent=js,To=a(),h(he.$$.fragment),$o=a(),Bt=d("p"),Bt.textContent=Fs,xo=a(),h(fe.$$.fragment),jn=a(),h(nt.$$.fragment),Fn=a(),V=d("div"),h(ot.$$.fragment),Co=a(),Qt=d("p"),Qt.textContent=Us,zo=a(),Xt=d("p"),Xt.innerHTML=Js,jo=a(),Ht=d("p"),Ht.innerHTML=qs,Fo=a(),z=d("div"),h(st.$$.fragment),Uo=a(),St=d("p"),St.innerHTML=Is,Jo=a(),h(ge.$$.fragment),qo=a(),Lt=d("p"),Lt.textContent=Ws,Io=a(),Nt=d("p"),Nt.innerHTML=Zs,Wo=a(),h(_e.$$.fragment),Zo=a(),Pt=d("p"),Pt.textContent=Gs,Go=a(),h(ve.$$.fragment),Un=a(),h(at.$$.fragment),Jn=a(),R=d("div"),h(rt.$$.fragment),Vo=a(),Et=d("p"),Et.innerHTML=Vs,Ro=a(),At=d("p"),At.innerHTML=Rs,Bo=a(),Yt=d("p"),Yt.innerHTML=Bs,Qo=a(),j=d("div"),h(it.$$.fragment),Xo=a(),Ot=d("p"),Ot.innerHTML=Qs,Ho=a(),h(be.$$.fragment),So=a(),Dt=d("p"),Dt.textContent=Xs,Lo=a(),Kt=d("p"),Kt.innerHTML=Hs,No=a(),h(ke.$$.fragment),Po=a(),en=d("p"),en.textContent=Ss,Eo=a(),h(Me.$$.fragment),qn=a(),h(dt.$$.fragment),In=a(),ee=d("div"),h(lt.$$.fragment),Ao=a(),ye=d("div"),h(ct.$$.fragment),Yo=a(),h(we.$$.fragment),Wn=a(),nn=d("p"),this.h()},l(e){const s=As("svelte-u9bgzb",document.head);t=l(s,"META",{name:!0,content:!0}),s.forEach(i),u=r(e),n=l(e,"P",{}),F(n).forEach(i),m=r(e),f(y.$$.fragment,e),c=r(e),f(w.$$.fragment,e),on=r(e),Te=l(e,"P",{"data-svelte-h":!0}),k(Te)!=="svelte-13golba"&&(Te.innerHTML=Oo),sn=r(e),$e=l(e,"P",{"data-svelte-h":!0}),k($e)!=="svelte-1j5100k"&&($e.textContent=Do),an=r(e),xe=l(e,"UL",{"data-svelte-h":!0}),k(xe)!=="svelte-wsulm6"&&(xe.innerHTML=Ko),rn=r(e),Ce=l(e,"P",{"data-svelte-h":!0}),k(Ce)!=="svelte-z7b5m6"&&(Ce.innerHTML=es),dn=r(e),f(ze.$$.fragment,e),ln=r(e),je=l(e,"UL",{"data-svelte-h":!0}),k(je)!=="svelte-iih86f"&&(je.innerHTML=ts),cn=r(e),f(Fe.$$.fragment,e),pn=r(e),Ue=l(e,"P",{"data-svelte-h":!0}),k(Ue)!=="svelte-6z8y0c"&&(Ue.textContent=ns),mn=r(e),f(Je.$$.fragment,e),un=r(e),qe=l(e,"P",{"data-svelte-h":!0}),k(qe)!=="svelte-15tmjxf"&&(qe.textContent=os),hn=r(e),f(Ie.$$.fragment,e),fn=r(e),We=l(e,"P",{"data-svelte-h":!0}),k(We)!=="svelte-351a4s"&&(We.innerHTML=ss),gn=r(e),f(Ze.$$.fragment,e),_n=r(e),f(Ge.$$.fragment,e),vn=r(e),Ve=l(e,"UL",{"data-svelte-h":!0}),k(Ve)!=="svelte-1mjt1kg"&&(Ve.innerHTML=as),bn=r(e),f(Re.$$.fragment,e),kn=r(e),Q=l(e,"DIV",{class:!0});var E=F(Q);f(Be.$$.fragment,E),Vn=r(E),gt=l(E,"P",{"data-svelte-h":!0}),k(gt)!=="svelte-1wxh7wo"&&(gt.innerHTML=rs),Rn=r(E),_t=l(E,"P",{"data-svelte-h":!0}),k(_t)!=="svelte-o55m63"&&(_t.innerHTML=is),Bn=r(E),f(ne.$$.fragment,E),E.forEach(i),Mn=r(e),f(Qe.$$.fragment,e),yn=r(e),T=l(e,"DIV",{class:!0});var $=F(T);f(Xe.$$.fragment,$),Qn=r($),vt=l($,"P",{"data-svelte-h":!0}),k(vt)!=="svelte-34vcv8"&&(vt.textContent=ds),Xn=r($),bt=l($,"P",{"data-svelte-h":!0}),k(bt)!=="svelte-1s077p3"&&(bt.textContent=ls),Hn=r($),f(oe.$$.fragment,$),Sn=r($),kt=l($,"P",{"data-svelte-h":!0}),k(kt)!=="svelte-1jfcabo"&&(kt.innerHTML=cs),Ln=r($),f(se.$$.fragment,$),Nn=r($),Mt=l($,"P",{"data-svelte-h":!0}),k(Mt)!=="svelte-1c3t5ty"&&(Mt.innerHTML=ps),Pn=r($),K=l($,"DIV",{class:!0});var te=F(K);f(He.$$.fragment,te),En=r(te),yt=l(te,"P",{"data-svelte-h":!0}),k(yt)!=="svelte-1w2ttey"&&(yt.textContent=ms),An=r(te),wt=l(te,"UL",{"data-svelte-h":!0}),k(wt)!=="svelte-rq8uot"&&(wt.innerHTML=us),te.forEach(i),Yn=r($),ae=l($,"DIV",{class:!0});var pt=F(ae);f(Se.$$.fragment,pt),On=r(pt),Tt=l(pt,"P",{"data-svelte-h":!0}),k(Tt)!=="svelte-b3k2yi"&&(Tt.textContent=hs),pt.forEach(i),Dn=r($),re=l($,"DIV",{class:!0});var mt=F(re);f(Le.$$.fragment,mt),Kn=r(mt),$t=l(mt,"P",{"data-svelte-h":!0}),k($t)!=="svelte-ycp5iu"&&($t.textContent=fs),mt.forEach(i),eo=r($),ie=l($,"DIV",{class:!0});var ut=F(ie);f(Ne.$$.fragment,ut),to=r(ut),xt=l(ut,"P",{"data-svelte-h":!0}),k(xt)!=="svelte-1f4f5kp"&&(xt.innerHTML=gs),ut.forEach(i),$.forEach(i),wn=r(e),f(Pe.$$.fragment,e),Tn=r(e),x=l(e,"DIV",{class:!0});var J=F(x);f(Ee.$$.fragment,J),no=r(J),Ct=l(J,"P",{"data-svelte-h":!0}),k(Ct)!=="svelte-9entgk"&&(Ct.innerHTML=_s),oo=r(J),zt=l(J,"P",{"data-svelte-h":!0}),k(zt)!=="svelte-1s077p3"&&(zt.textContent=vs),so=r(J),f(de.$$.fragment,J),ao=r(J),jt=l(J,"P",{"data-svelte-h":!0}),k(jt)!=="svelte-1jfcabo"&&(jt.innerHTML=bs),ro=r(J),f(le.$$.fragment,J),io=r(J),Ft=l(J,"P",{"data-svelte-h":!0}),k(Ft)!=="svelte-fh0aq"&&(Ft.innerHTML=ks),lo=r(J),ce=l(J,"DIV",{class:!0});var ht=F(ce);f(Ae.$$.fragment,ht),co=r(ht),Ut=l(ht,"P",{"data-svelte-h":!0}),k(Ut)!=="svelte-ycp5iu"&&(Ut.textContent=Ms),ht.forEach(i),J.forEach(i),$n=r(e),f(Ye.$$.fragment,e),xn=r(e),X=l(e,"DIV",{class:!0});var A=F(X);f(Oe.$$.fragment,A),po=r(A),Jt=l(A,"P",{"data-svelte-h":!0}),k(Jt)!=="svelte-1v1qyxn"&&(Jt.innerHTML=ys),mo=r(A),qt=l(A,"P",{"data-svelte-h":!0}),k(qt)!=="svelte-hswkmf"&&(qt.innerHTML=ws),uo=r(A),P=l(A,"DIV",{class:!0});var Y=F(P);f(De.$$.fragment,Y),ho=r(Y),It=l(Y,"P",{"data-svelte-h":!0}),k(It)!=="svelte-n4tiri"&&(It.innerHTML=Ts),fo=r(Y),f(pe.$$.fragment,Y),go=r(Y),f(me.$$.fragment,Y),Y.forEach(i),A.forEach(i),Cn=r(e),f(Ke.$$.fragment,e),zn=r(e),H=l(e,"DIV",{class:!0});var O=F(H);f(et.$$.fragment,O),_o=r(O),Wt=l(O,"P",{"data-svelte-h":!0}),k(Wt)!=="svelte-1src7u8"&&(Wt.innerHTML=$s),vo=r(O),Zt=l(O,"P",{"data-svelte-h":!0}),k(Zt)!=="svelte-hswkmf"&&(Zt.innerHTML=xs),bo=r(O),C=l(O,"DIV",{class:!0});var q=F(C);f(tt.$$.fragment,q),ko=r(q),Gt=l(q,"P",{"data-svelte-h":!0}),k(Gt)!=="svelte-xslb1m"&&(Gt.innerHTML=Cs),Mo=r(q),f(ue.$$.fragment,q),yo=r(q),Vt=l(q,"P",{"data-svelte-h":!0}),k(Vt)!=="svelte-a8wege"&&(Vt.textContent=zs),wo=r(q),Rt=l(q,"P",{"data-svelte-h":!0}),k(Rt)!=="svelte-qrgbe4"&&(Rt.textContent=js),To=r(q),f(he.$$.fragment,q),$o=r(q),Bt=l(q,"P",{"data-svelte-h":!0}),k(Bt)!=="svelte-1t77lwe"&&(Bt.textContent=Fs),xo=r(q),f(fe.$$.fragment,q),q.forEach(i),O.forEach(i),jn=r(e),f(nt.$$.fragment,e),Fn=r(e),V=l(e,"DIV",{class:!0});var S=F(V);f(ot.$$.fragment,S),Co=r(S),Qt=l(S,"P",{"data-svelte-h":!0}),k(Qt)!=="svelte-cuuv55"&&(Qt.textContent=Us),zo=r(S),Xt=l(S,"P",{"data-svelte-h":!0}),k(Xt)!=="svelte-6pahdo"&&(Xt.innerHTML=Js),jo=r(S),Ht=l(S,"P",{"data-svelte-h":!0}),k(Ht)!=="svelte-hswkmf"&&(Ht.innerHTML=qs),Fo=r(S),z=l(S,"DIV",{class:!0});var I=F(z);f(st.$$.fragment,I),Uo=r(I),St=l(I,"P",{"data-svelte-h":!0}),k(St)!=="svelte-b9e7bc"&&(St.innerHTML=Is),Jo=r(I),f(ge.$$.fragment,I),qo=r(I),Lt=l(I,"P",{"data-svelte-h":!0}),k(Lt)!=="svelte-ykxpe4"&&(Lt.textContent=Ws),Io=r(I),Nt=l(I,"P",{"data-svelte-h":!0}),k(Nt)!=="svelte-eulckq"&&(Nt.innerHTML=Zs),Wo=r(I),f(_e.$$.fragment,I),Zo=r(I),Pt=l(I,"P",{"data-svelte-h":!0}),k(Pt)!=="svelte-1t77lwe"&&(Pt.textContent=Gs),Go=r(I),f(ve.$$.fragment,I),I.forEach(i),S.forEach(i),Un=r(e),f(at.$$.fragment,e),Jn=r(e),R=l(e,"DIV",{class:!0});var L=F(R);f(rt.$$.fragment,L),Vo=r(L),Et=l(L,"P",{"data-svelte-h":!0}),k(Et)!=="svelte-1ujsnm5"&&(Et.innerHTML=Vs),Ro=r(L),At=l(L,"P",{"data-svelte-h":!0}),k(At)!=="svelte-6pahdo"&&(At.innerHTML=Rs),Bo=r(L),Yt=l(L,"P",{"data-svelte-h":!0}),k(Yt)!=="svelte-hswkmf"&&(Yt.innerHTML=Bs),Qo=r(L),j=l(L,"DIV",{class:!0});var W=F(j);f(it.$$.fragment,W),Xo=r(W),Ot=l(W,"P",{"data-svelte-h":!0}),k(Ot)!=="svelte-2vj4wa"&&(Ot.innerHTML=Qs),Ho=r(W),f(be.$$.fragment,W),So=r(W),Dt=l(W,"P",{"data-svelte-h":!0}),k(Dt)!=="svelte-11lpom8"&&(Dt.textContent=Xs),Lo=r(W),Kt=l(W,"P",{"data-svelte-h":!0}),k(Kt)!=="svelte-heukip"&&(Kt.innerHTML=Hs),No=r(W),f(ke.$$.fragment,W),Po=r(W),en=l(W,"P",{"data-svelte-h":!0}),k(en)!=="svelte-1t77lwe"&&(en.textContent=Ss),Eo=r(W),f(Me.$$.fragment,W),W.forEach(i),L.forEach(i),qn=r(e),f(dt.$$.fragment,e),In=r(e),ee=l(e,"DIV",{class:!0});var ft=F(ee);f(lt.$$.fragment,ft),Ao=r(ft),ye=l(ft,"DIV",{class:!0});var Gn=F(ye);f(ct.$$.fragment,Gn),Yo=r(Gn),f(we.$$.fragment,Gn),Gn.forEach(i),ft.forEach(i),Wn=r(e),nn=l(e,"P",{}),F(nn).forEach(i),this.h()},h(){U(t,"name","hf:doc:metadata"),U(t,"content",ha),U(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,s){o(document.head,t),p(e,u,s),p(e,n,s),p(e,m,s),g(y,e,s),p(e,c,s),g(w,e,s),p(e,on,s),p(e,Te,s),p(e,sn,s),p(e,$e,s),p(e,an,s),p(e,xe,s),p(e,rn,s),p(e,Ce,s),p(e,dn,s),g(ze,e,s),p(e,ln,s),p(e,je,s),p(e,cn,s),g(Fe,e,s),p(e,pn,s),p(e,Ue,s),p(e,mn,s),g(Je,e,s),p(e,un,s),p(e,qe,s),p(e,hn,s),g(Ie,e,s),p(e,fn,s),p(e,We,s),p(e,gn,s),g(Ze,e,s),p(e,_n,s),g(Ge,e,s),p(e,vn,s),p(e,Ve,s),p(e,bn,s),g(Re,e,s),p(e,kn,s),p(e,Q,s),g(Be,Q,null),o(Q,Vn),o(Q,gt),o(Q,Rn),o(Q,_t),o(Q,Bn),g(ne,Q,null),p(e,Mn,s),g(Qe,e,s),p(e,yn,s),p(e,T,s),g(Xe,T,null),o(T,Qn),o(T,vt),o(T,Xn),o(T,bt),o(T,Hn),g(oe,T,null),o(T,Sn),o(T,kt),o(T,Ln),g(se,T,null),o(T,Nn),o(T,Mt),o(T,Pn),o(T,K),g(He,K,null),o(K,En),o(K,yt),o(K,An),o(K,wt),o(T,Yn),o(T,ae),g(Se,ae,null),o(ae,On),o(ae,Tt),o(T,Dn),o(T,re),g(Le,re,null),o(re,Kn),o(re,$t),o(T,eo),o(T,ie),g(Ne,ie,null),o(ie,to),o(ie,xt),p(e,wn,s),g(Pe,e,s),p(e,Tn,s),p(e,x,s),g(Ee,x,null),o(x,no),o(x,Ct),o(x,oo),o(x,zt),o(x,so),g(de,x,null),o(x,ao),o(x,jt),o(x,ro),g(le,x,null),o(x,io),o(x,Ft),o(x,lo),o(x,ce),g(Ae,ce,null),o(ce,co),o(ce,Ut),p(e,$n,s),g(Ye,e,s),p(e,xn,s),p(e,X,s),g(Oe,X,null),o(X,po),o(X,Jt),o(X,mo),o(X,qt),o(X,uo),o(X,P),g(De,P,null),o(P,ho),o(P,It),o(P,fo),g(pe,P,null),o(P,go),g(me,P,null),p(e,Cn,s),g(Ke,e,s),p(e,zn,s),p(e,H,s),g(et,H,null),o(H,_o),o(H,Wt),o(H,vo),o(H,Zt),o(H,bo),o(H,C),g(tt,C,null),o(C,ko),o(C,Gt),o(C,Mo),g(ue,C,null),o(C,yo),o(C,Vt),o(C,wo),o(C,Rt),o(C,To),g(he,C,null),o(C,$o),o(C,Bt),o(C,xo),g(fe,C,null),p(e,jn,s),g(nt,e,s),p(e,Fn,s),p(e,V,s),g(ot,V,null),o(V,Co),o(V,Qt),o(V,zo),o(V,Xt),o(V,jo),o(V,Ht),o(V,Fo),o(V,z),g(st,z,null),o(z,Uo),o(z,St),o(z,Jo),g(ge,z,null),o(z,qo),o(z,Lt),o(z,Io),o(z,Nt),o(z,Wo),g(_e,z,null),o(z,Zo),o(z,Pt),o(z,Go),g(ve,z,null),p(e,Un,s),g(at,e,s),p(e,Jn,s),p(e,R,s),g(rt,R,null),o(R,Vo),o(R,Et),o(R,Ro),o(R,At),o(R,Bo),o(R,Yt),o(R,Qo),o(R,j),g(it,j,null),o(j,Xo),o(j,Ot),o(j,Ho),g(be,j,null),o(j,So),o(j,Dt),o(j,Lo),o(j,Kt),o(j,No),g(ke,j,null),o(j,Po),o(j,en),o(j,Eo),g(Me,j,null),p(e,qn,s),g(dt,e,s),p(e,In,s),p(e,ee,s),g(lt,ee,null),o(ee,Ao),o(ee,ye),g(ct,ye,null),o(ye,Yo),g(we,ye,null),p(e,Wn,s),p(e,nn,s),Zn=!0},p(e,[s]){const E={};s&2&&(E.$$scope={dirty:s,ctx:e}),ne.$set(E);const $={};s&2&&($.$$scope={dirty:s,ctx:e}),oe.$set($);const te={};s&2&&(te.$$scope={dirty:s,ctx:e}),se.$set(te);const pt={};s&2&&(pt.$$scope={dirty:s,ctx:e}),de.$set(pt);const mt={};s&2&&(mt.$$scope={dirty:s,ctx:e}),le.$set(mt);const ut={};s&2&&(ut.$$scope={dirty:s,ctx:e}),pe.$set(ut);const J={};s&2&&(J.$$scope={dirty:s,ctx:e}),me.$set(J);const ht={};s&2&&(ht.$$scope={dirty:s,ctx:e}),ue.$set(ht);const A={};s&2&&(A.$$scope={dirty:s,ctx:e}),he.$set(A);const Y={};s&2&&(Y.$$scope={dirty:s,ctx:e}),fe.$set(Y);const O={};s&2&&(O.$$scope={dirty:s,ctx:e}),ge.$set(O);const q={};s&2&&(q.$$scope={dirty:s,ctx:e}),_e.$set(q);const S={};s&2&&(S.$$scope={dirty:s,ctx:e}),ve.$set(S);const I={};s&2&&(I.$$scope={dirty:s,ctx:e}),be.$set(I);const L={};s&2&&(L.$$scope={dirty:s,ctx:e}),ke.$set(L);const W={};s&2&&(W.$$scope={dirty:s,ctx:e}),Me.$set(W);const ft={};s&2&&(ft.$$scope={dirty:s,ctx:e}),we.$set(ft)},i(e){Zn||(_(y.$$.fragment,e),_(w.$$.fragment,e),_(ze.$$.fragment,e),_(Fe.$$.fragment,e),_(Je.$$.fragment,e),_(Ie.$$.fragment,e),_(Ze.$$.fragment,e),_(Ge.$$.fragment,e),_(Re.$$.fragment,e),_(Be.$$.fragment,e),_(ne.$$.fragment,e),_(Qe.$$.fragment,e),_(Xe.$$.fragment,e),_(oe.$$.fragment,e),_(se.$$.fragment,e),_(He.$$.fragment,e),_(Se.$$.fragment,e),_(Le.$$.fragment,e),_(Ne.$$.fragment,e),_(Pe.$$.fragment,e),_(Ee.$$.fragment,e),_(de.$$.fragment,e),_(le.$$.fragment,e),_(Ae.$$.fragment,e),_(Ye.$$.fragment,e),_(Oe.$$.fragment,e),_(De.$$.fragment,e),_(pe.$$.fragment,e),_(me.$$.fragment,e),_(Ke.$$.fragment,e),_(et.$$.fragment,e),_(tt.$$.fragment,e),_(ue.$$.fragment,e),_(he.$$.fragment,e),_(fe.$$.fragment,e),_(nt.$$.fragment,e),_(ot.$$.fragment,e),_(st.$$.fragment,e),_(ge.$$.fragment,e),_(_e.$$.fragment,e),_(ve.$$.fragment,e),_(at.$$.fragment,e),_(rt.$$.fragment,e),_(it.$$.fragment,e),_(be.$$.fragment,e),_(ke.$$.fragment,e),_(Me.$$.fragment,e),_(dt.$$.fragment,e),_(lt.$$.fragment,e),_(ct.$$.fragment,e),_(we.$$.fragment,e),Zn=!0)},o(e){v(y.$$.fragment,e),v(w.$$.fragment,e),v(ze.$$.fragment,e),v(Fe.$$.fragment,e),v(Je.$$.fragment,e),v(Ie.$$.fragment,e),v(Ze.$$.fragment,e),v(Ge.$$.fragment,e),v(Re.$$.fragment,e),v(Be.$$.fragment,e),v(ne.$$.fragment,e),v(Qe.$$.fragment,e),v(Xe.$$.fragment,e),v(oe.$$.fragment,e),v(se.$$.fragment,e),v(He.$$.fragment,e),v(Se.$$.fragment,e),v(Le.$$.fragment,e),v(Ne.$$.fragment,e),v(Pe.$$.fragment,e),v(Ee.$$.fragment,e),v(de.$$.fragment,e),v(le.$$.fragment,e),v(Ae.$$.fragment,e),v(Ye.$$.fragment,e),v(Oe.$$.fragment,e),v(De.$$.fragment,e),v(pe.$$.fragment,e),v(me.$$.fragment,e),v(Ke.$$.fragment,e),v(et.$$.fragment,e),v(tt.$$.fragment,e),v(ue.$$.fragment,e),v(he.$$.fragment,e),v(fe.$$.fragment,e),v(nt.$$.fragment,e),v(ot.$$.fragment,e),v(st.$$.fragment,e),v(ge.$$.fragment,e),v(_e.$$.fragment,e),v(ve.$$.fragment,e),v(at.$$.fragment,e),v(rt.$$.fragment,e),v(it.$$.fragment,e),v(be.$$.fragment,e),v(ke.$$.fragment,e),v(Me.$$.fragment,e),v(dt.$$.fragment,e),v(lt.$$.fragment,e),v(ct.$$.fragment,e),v(we.$$.fragment,e),Zn=!1},d(e){e&&(i(u),i(n),i(m),i(c),i(on),i(Te),i(sn),i($e),i(an),i(xe),i(rn),i(Ce),i(dn),i(ln),i(je),i(cn),i(pn),i(Ue),i(mn),i(un),i(qe),i(hn),i(fn),i(We),i(gn),i(_n),i(vn),i(Ve),i(bn),i(kn),i(Q),i(Mn),i(yn),i(T),i(wn),i(Tn),i(x),i($n),i(xn),i(X),i(Cn),i(zn),i(H),i(jn),i(Fn),i(V),i(Un),i(Jn),i(R),i(qn),i(In),i(ee),i(Wn),i(nn)),i(t),b(y,e),b(w,e),b(ze,e),b(Fe,e),b(Je,e),b(Ie,e),b(Ze,e),b(Ge,e),b(Re,e),b(Be),b(ne),b(Qe,e),b(Xe),b(oe),b(se),b(He),b(Se),b(Le),b(Ne),b(Pe,e),b(Ee),b(de),b(le),b(Ae),b(Ye,e),b(Oe),b(De),b(pe),b(me),b(Ke,e),b(et),b(tt),b(ue),b(he),b(fe),b(nt,e),b(ot),b(st),b(ge),b(_e),b(ve),b(at,e),b(rt),b(it),b(be),b(ke),b(Me),b(dt,e),b(lt),b(ct),b(we)}}}const ha='{"title":"MVP","local":"mvp","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"Usage examples","local":"usage-examples","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"MvpConfig","local":"transformers.MvpConfig","sections":[],"depth":2},{"title":"MvpTokenizer","local":"transformers.MvpTokenizer","sections":[],"depth":2},{"title":"MvpTokenizerFast","local":"transformers.MvpTokenizerFast","sections":[],"depth":2},{"title":"MvpModel","local":"transformers.MvpModel","sections":[],"depth":2},{"title":"MvpForConditionalGeneration","local":"transformers.MvpForConditionalGeneration","sections":[],"depth":2},{"title":"MvpForSequenceClassification","local":"transformers.MvpForSequenceClassification","sections":[],"depth":2},{"title":"MvpForQuestionAnswering","local":"transformers.MvpForQuestionAnswering","sections":[],"depth":2},{"title":"MvpForCausalLM","local":"transformers.MvpForCausalLM","sections":[],"depth":2}],"depth":1}';function fa(M){return Ns(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class wa extends Ps{constructor(t){super(),Es(this,t,fa,ua,Ls,{})}}export{wa as component};
