import{s as Jo,o as Uo,n as R}from"../chunks/scheduler.9bc65507.js";import{S as Ho,i as Wo,g as c,s as a,r as b,A as Io,h as p,f as i,c as r,j as V,u as y,x as f,k as B,y as s,a as m,v as k,d as M,t as v,w}from"../chunks/index.707bf1b6.js";import{T as lt}from"../chunks/Tip.c2ecdbf4.js";import{D as Q}from"../chunks/Docstring.17db21ae.js";import{C as ct}from"../chunks/CodeBlock.54a9f38d.js";import{F as qo,M as zo}from"../chunks/Markdown.fef84341.js";import{E as dt}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{P as No}from"../chunks/PipelineTag.44585822.js";import{H as Ie}from"../chunks/Heading.342b1fa6.js";function Zo($){let e,u="Example:",o,n,g;return n=new ct({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEdQVDJDb25maWclMkMlMjBHUFQyTW9kZWwlMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwR1BUMiUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwR1BUMkNvbmZpZygpJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyMG1vZGVsJTIwKHdpdGglMjByYW5kb20lMjB3ZWlnaHRzKSUyMGZyb20lMjB0aGUlMjBjb25maWd1cmF0aW9uJTBBbW9kZWwlMjAlM0QlMjBHUFQyTW9kZWwoY29uZmlndXJhdGlvbiklMEElMEElMjMlMjBBY2Nlc3NpbmclMjB0aGUlMjBtb2RlbCUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwbW9kZWwuY29uZmln",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Config, GPT2Model

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GPT2 configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = GPT2Config()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2Model(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,o=a(),b(n.$$.fragment)},l(t){e=p(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=u),o=r(t),y(n.$$.fragment,t)},m(t,T){m(t,e,T),m(t,o,T),k(n,t,T),g=!0},p:R,i(t){g||(M(n.$$.fragment,t),g=!0)},o(t){v(n.$$.fragment,t),g=!1},d(t){t&&(i(e),i(o)),w(n,t)}}}function Lo($){let e,u="be encoded differently whether it is at the beginning of the sentence (without space) or not:",o,n,g;return n=new ct({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEdQVDJUb2tlbml6ZXIlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBHUFQyVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJvcGVuYWktY29tbXVuaXR5JTJGZ3B0MiUyMiklMEF0b2tlbml6ZXIoJTIySGVsbG8lMjB3b3JsZCUyMiklNUIlMjJpbnB1dF9pZHMlMjIlNUQlMEElMEF0b2tlbml6ZXIoJTIyJTIwSGVsbG8lMjB3b3JsZCUyMiklNUIlMjJpbnB1dF9pZHMlMjIlNUQ=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
[<span class="hljs-number">15496</span>, <span class="hljs-number">995</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
[<span class="hljs-number">18435</span>, <span class="hljs-number">995</span>]`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,o=a(),b(n.$$.fragment)},l(t){e=p(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-12atnao"&&(e.textContent=u),o=r(t),y(n.$$.fragment,t)},m(t,T){m(t,e,T),m(t,o,T),k(n,t,T),g=!0},p:R,i(t){g||(M(n.$$.fragment,t),g=!0)},o(t){v(n.$$.fragment,t),g=!1},d(t){t&&(i(e),i(o)),w(n,t)}}}function Bo($){let e,u="When used with <code>is_split_into_words=True</code>, this tokenizer will add a space before each word (even the first one).";return{c(){e=c("p"),e.innerHTML=u},l(o){e=p(o,"P",{"data-svelte-h":!0}),f(e)!=="svelte-jhmxzm"&&(e.innerHTML=u)},m(o,n){m(o,e,n)},p:R,d(o){o&&i(e)}}}function Ro($){let e,u="be encoded differently whether it is at the beginning of the sentence (without space) or not:",o,n,g;return n=new ct({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEdQVDJUb2tlbml6ZXJGYXN0JTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwR1BUMlRva2VuaXplckZhc3QuZnJvbV9wcmV0cmFpbmVkKCUyMm9wZW5haS1jb21tdW5pdHklMkZncHQyJTIyKSUwQXRva2VuaXplciglMjJIZWxsbyUyMHdvcmxkJTIyKSU1QiUyMmlucHV0X2lkcyUyMiU1RCUwQSUwQXRva2VuaXplciglMjIlMjBIZWxsbyUyMHdvcmxkJTIyKSU1QiUyMmlucHV0X2lkcyUyMiU1RA==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2TokenizerFast

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2TokenizerFast.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer(<span class="hljs-string">&quot;Hello world&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
[<span class="hljs-number">15496</span>, <span class="hljs-number">995</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer(<span class="hljs-string">&quot; Hello world&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
[<span class="hljs-number">18435</span>, <span class="hljs-number">995</span>]`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,o=a(),b(n.$$.fragment)},l(t){e=p(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-12atnao"&&(e.textContent=u),o=r(t),y(n.$$.fragment,t)},m(t,T){m(t,e,T),m(t,o,T),k(n,t,T),g=!0},p:R,i(t){g||(M(n.$$.fragment,t),g=!0)},o(t){v(n.$$.fragment,t),g=!1},d(t){t&&(i(e),i(o)),w(n,t)}}}function Vo($){let e,u="When used with <code>is_split_into_words=True</code>, this tokenizer needs to be instantiated with <code>add_prefix_space=True</code>.";return{c(){e=c("p"),e.innerHTML=u},l(o){e=p(o,"P",{"data-svelte-h":!0}),f(e)!=="svelte-9gg91e"&&(e.innerHTML=u)},m(o,n){m(o,e,n)},p:R,d(o){o&&i(e)}}}function Xo($){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=c("p"),e.innerHTML=u},l(o){e=p(o,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(o,n){m(o,e,n)},p:R,d(o){o&&i(e)}}}function So($){let e,u="Example:",o,n,g;return n=new ct({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBHUFQyTW9kZWwlMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMm9wZW5haS1jb21tdW5pdHklMkZncHQyJTIyKSUwQW1vZGVsJTIwJTNEJTIwR1BUMk1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJvcGVuYWktY29tbXVuaXR5JTJGZ3B0MiUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQWxhc3RfaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, GPT2Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2Model.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,o=a(),b(n.$$.fragment)},l(t){e=p(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=u),o=r(t),y(n.$$.fragment,t)},m(t,T){m(t,e,T),m(t,o,T),k(n,t,T),g=!0},p:R,i(t){g||(M(n.$$.fragment,t),g=!0)},o(t){v(n.$$.fragment,t),g=!1},d(t){t&&(i(e),i(o)),w(n,t)}}}function Qo($){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=c("p"),e.innerHTML=u},l(o){e=p(o,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(o,n){m(o,e,n)},p:R,d(o){o&&i(e)}}}function Do($){let e,u="Example:",o,n,g;return n=new ct({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEdQVDJMTUhlYWRNb2RlbCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMm9wZW5haS1jb21tdW5pdHklMkZncHQyJTIyKSUwQW1vZGVsJTIwJTNEJTIwR1BUMkxNSGVhZE1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJvcGVuYWktY29tbXVuaXR5JTJGZ3B0MiUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEaW5wdXRzJTVCJTIyaW5wdXRfaWRzJTIyJTVEKSUwQWxvc3MlMjAlM0QlMjBvdXRwdXRzLmxvc3MlMEFsb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, GPT2LMHeadModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2LMHeadModel.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,o=a(),b(n.$$.fragment)},l(t){e=p(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=u),o=r(t),y(n.$$.fragment,t)},m(t,T){m(t,e,T),m(t,o,T),k(n,t,T),g=!0},p:R,i(t){g||(M(n.$$.fragment,t),g=!0)},o(t){v(n.$$.fragment,t),g=!1},d(t){t&&(i(e),i(o)),w(n,t)}}}function Ao($){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=c("p"),e.innerHTML=u},l(o){e=p(o,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(o,n){m(o,e,n)},p:R,d(o){o&&i(e)}}}function Eo($){let e,u="Example:",o,n,g;return n=new ct({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEdQVDJEb3VibGVIZWFkc01vZGVsJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyb3BlbmFpLWNvbW11bml0eSUyRmdwdDIlMjIpJTBBbW9kZWwlMjAlM0QlMjBHUFQyRG91YmxlSGVhZHNNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyb3BlbmFpLWNvbW11bml0eSUyRmdwdDIlMjIpJTBBJTBBJTIzJTIwQWRkJTIwYSUyMCU1QkNMUyU1RCUyMHRvJTIwdGhlJTIwdm9jYWJ1bGFyeSUyMCh3ZSUyMHNob3VsZCUyMHRyYWluJTIwaXQlMjBhbHNvISklMEFudW1fYWRkZWRfdG9rZW5zJTIwJTNEJTIwdG9rZW5pemVyLmFkZF9zcGVjaWFsX3Rva2VucyglN0IlMjJjbHNfdG9rZW4lMjIlM0ElMjAlMjIlNUJDTFMlNUQlMjIlN0QpJTBBJTIzJTIwVXBkYXRlJTIwdGhlJTIwbW9kZWwlMjBlbWJlZGRpbmdzJTIwd2l0aCUyMHRoZSUyMG5ldyUyMHZvY2FidWxhcnklMjBzaXplJTBBZW1iZWRkaW5nX2xheWVyJTIwJTNEJTIwbW9kZWwucmVzaXplX3Rva2VuX2VtYmVkZGluZ3MobGVuKHRva2VuaXplcikpJTBBJTBBY2hvaWNlcyUyMCUzRCUyMCU1QiUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjAlNUJDTFMlNUQlMjIlMkMlMjAlMjJIZWxsbyUyQyUyMG15JTIwY2F0JTIwaXMlMjBjdXRlJTIwJTVCQ0xTJTVEJTIyJTVEJTBBZW5jb2RlZF9jaG9pY2VzJTIwJTNEJTIwJTVCdG9rZW5pemVyLmVuY29kZShzKSUyMGZvciUyMHMlMjBpbiUyMGNob2ljZXMlNUQlMEFjbHNfdG9rZW5fbG9jYXRpb24lMjAlM0QlMjAlNUJ0b2tlbnMuaW5kZXgodG9rZW5pemVyLmNsc190b2tlbl9pZCklMjBmb3IlMjB0b2tlbnMlMjBpbiUyMGVuY29kZWRfY2hvaWNlcyU1RCUwQSUwQWlucHV0X2lkcyUyMCUzRCUyMHRvcmNoLnRlbnNvcihlbmNvZGVkX2Nob2ljZXMpLnVuc3F1ZWV6ZSgwKSUyMCUyMCUyMyUyMEJhdGNoJTIwc2l6ZSUzQSUyMDElMkMlMjBudW1iZXIlMjBvZiUyMGNob2ljZXMlM0ElMjAyJTBBbWNfdG9rZW5faWRzJTIwJTNEJTIwdG9yY2gudGVuc29yKCU1QmNsc190b2tlbl9sb2NhdGlvbiU1RCklMjAlMjAlMjMlMjBCYXRjaCUyMHNpemUlM0ElMjAxJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKGlucHV0X2lkcyUyQyUyMG1jX3Rva2VuX2lkcyUzRG1jX3Rva2VuX2lkcyklMEFsbV9sb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cyUwQW1jX2xvZ2l0cyUyMCUzRCUyMG91dHB1dHMubWNfbG9naXRz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, GPT2DoubleHeadsModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2DoubleHeadsModel.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Add a [CLS] to the vocabulary (we should train it also!)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_added_tokens = tokenizer.add_special_tokens({<span class="hljs-string">&quot;cls_token&quot;</span>: <span class="hljs-string">&quot;[CLS]&quot;</span>})
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Update the model embeddings with the new vocabulary size</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>embedding_layer = model.resize_token_embeddings(<span class="hljs-built_in">len</span>(tokenizer))

<span class="hljs-meta">&gt;&gt;&gt; </span>choices = [<span class="hljs-string">&quot;Hello, my dog is cute [CLS]&quot;</span>, <span class="hljs-string">&quot;Hello, my cat is cute [CLS]&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_choices = [tokenizer.encode(s) <span class="hljs-keyword">for</span> s <span class="hljs-keyword">in</span> choices]
<span class="hljs-meta">&gt;&gt;&gt; </span>cls_token_location = [tokens.index(tokenizer.cls_token_id) <span class="hljs-keyword">for</span> tokens <span class="hljs-keyword">in</span> encoded_choices]

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(encoded_choices).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size: 1, number of choices: 2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mc_token_ids = torch.tensor([cls_token_location])  <span class="hljs-comment"># Batch size: 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, mc_token_ids=mc_token_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>lm_logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>mc_logits = outputs.mc_logits`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,o=a(),b(n.$$.fragment)},l(t){e=p(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=u),o=r(t),y(n.$$.fragment,t)},m(t,T){m(t,e,T),m(t,o,T),k(n,t,T),g=!0},p:R,i(t){g||(M(n.$$.fragment,t),g=!0)},o(t){v(n.$$.fragment,t),g=!1},d(t){t&&(i(e),i(o)),w(n,t)}}}function Oo($){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=c("p"),e.innerHTML=u},l(o){e=p(o,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(o,n){m(o,e,n)},p:R,d(o){o&&i(e)}}}function Yo($){let e,u=`This example uses a random model as the real ones are all very big. To get proper results, you should use
openai-community/gpt2 instead of openai-community/gpt2. If you get out-of-memory when loading that checkpoint, you can try
adding <code>device_map=&quot;auto&quot;</code> in the <code>from_pretrained</code> call.`;return{c(){e=c("p"),e.innerHTML=u},l(o){e=p(o,"P",{"data-svelte-h":!0}),f(e)!=="svelte-1nao4uz"&&(e.innerHTML=u)},m(o,n){m(o,e,n)},p:R,d(o){o&&i(e)}}}function Ko($){let e,u="Example:",o,n,g;return n=new ct({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBHUFQyRm9yUXVlc3Rpb25BbnN3ZXJpbmclMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMm9wZW5haS1jb21tdW5pdHklMkZncHQyJTIyKSUwQW1vZGVsJTIwJTNEJTIwR1BUMkZvclF1ZXN0aW9uQW5zd2VyaW5nLmZyb21fcHJldHJhaW5lZCglMjJvcGVuYWktY29tbXVuaXR5JTJGZ3B0MiUyMiklMEElMEFxdWVzdGlvbiUyQyUyMHRleHQlMjAlM0QlMjAlMjJXaG8lMjB3YXMlMjBKaW0lMjBIZW5zb24lM0YlMjIlMkMlMjAlMjJKaW0lMjBIZW5zb24lMjB3YXMlMjBhJTIwbmljZSUyMHB1cHBldCUyMiUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplcihxdWVzdGlvbiUyQyUyMHRleHQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBYW5zd2VyX3N0YXJ0X2luZGV4JTIwJTNEJTIwb3V0cHV0cy5zdGFydF9sb2dpdHMuYXJnbWF4KCklMEFhbnN3ZXJfZW5kX2luZGV4JTIwJTNEJTIwb3V0cHV0cy5lbmRfbG9naXRzLmFyZ21heCgpJTBBJTBBcHJlZGljdF9hbnN3ZXJfdG9rZW5zJTIwJTNEJTIwaW5wdXRzLmlucHV0X2lkcyU1QjAlMkMlMjBhbnN3ZXJfc3RhcnRfaW5kZXglMjAlM0ElMjBhbnN3ZXJfZW5kX2luZGV4JTIwJTJCJTIwMSU1RCUwQSUwQSUyMyUyMHRhcmdldCUyMGlzJTIwJTIybmljZSUyMHB1cHBldCUyMiUwQXRhcmdldF9zdGFydF9pbmRleCUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxNCU1RCklMEF0YXJnZXRfZW5kX2luZGV4JTIwJTNEJTIwdG9yY2gudGVuc29yKCU1QjE1JTVEKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMHN0YXJ0X3Bvc2l0aW9ucyUzRHRhcmdldF9zdGFydF9pbmRleCUyQyUyMGVuZF9wb3NpdGlvbnMlM0R0YXJnZXRfZW5kX2luZGV4KSUwQWxvc3MlMjAlM0QlMjBvdXRwdXRzLmxvc3M=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, GPT2ForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2ForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,o=a(),b(n.$$.fragment)},l(t){e=p(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=u),o=r(t),y(n.$$.fragment,t)},m(t,T){m(t,e,T),m(t,o,T),k(n,t,T),g=!0},p:R,i(t){g||(M(n.$$.fragment,t),g=!0)},o(t){v(n.$$.fragment,t),g=!1},d(t){t&&(i(e),i(o)),w(n,t)}}}function en($){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=c("p"),e.innerHTML=u},l(o){e=p(o,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(o,n){m(o,e,n)},p:R,d(o){o&&i(e)}}}function tn($){let e,u="Example of single-label classification:",o,n,g;return n=new ct({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEdQVDJGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGRGlhbG9nUlBULXVwZG93biUyMiklMEFtb2RlbCUyMCUzRCUyMEdQVDJGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZEaWFsb2dSUFQtdXBkb3duJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEElMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQXByZWRpY3RlZF9jbGFzc19pZCUyMCUzRCUyMGxvZ2l0cy5hcmdtYXgoKS5pdGVtKCklMEElMEElMjMlMjBUbyUyMHRyYWluJTIwYSUyMG1vZGVsJTIwb24lMjAlNjBudW1fbGFiZWxzJTYwJTIwY2xhc3NlcyUyQyUyMHlvdSUyMGNhbiUyMHBhc3MlMjAlNjBudW1fbGFiZWxzJTNEbnVtX2xhYmVscyU2MCUyMHRvJTIwJTYwLmZyb21fcHJldHJhaW5lZCguLi4pJTYwJTBBbnVtX2xhYmVscyUyMCUzRCUyMGxlbihtb2RlbC5jb25maWcuaWQybGFiZWwpJTBBbW9kZWwlMjAlM0QlMjBHUFQyRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGRGlhbG9nUlBULXVwZG93biUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzKSUwQSUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxJTVEKSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, GPT2ForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,o=a(),b(n.$$.fragment)},l(t){e=p(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-ykxpe4"&&(e.textContent=u),o=r(t),y(n.$$.fragment,t)},m(t,T){m(t,e,T),m(t,o,T),k(n,t,T),g=!0},p:R,i(t){g||(M(n.$$.fragment,t),g=!0)},o(t){v(n.$$.fragment,t),g=!1},d(t){t&&(i(e),i(o)),w(n,t)}}}function on($){let e,u="Example of multi-label classification:",o,n,g;return n=new ct({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMEdQVDJGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGRGlhbG9nUlBULXVwZG93biUyMiklMEFtb2RlbCUyMCUzRCUyMEdQVDJGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZEaWFsb2dSUFQtdXBkb3duJTIyJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX2NsYXNzX2lkcyUyMCUzRCUyMHRvcmNoLmFyYW5nZSgwJTJDJTIwbG9naXRzLnNoYXBlJTVCLTElNUQpJTVCdG9yY2guc2lnbW9pZChsb2dpdHMpLnNxdWVlemUoZGltJTNEMCklMjAlM0UlMjAwLjUlNUQlMEElMEElMjMlMjBUbyUyMHRyYWluJTIwYSUyMG1vZGVsJTIwb24lMjAlNjBudW1fbGFiZWxzJTYwJTIwY2xhc3NlcyUyQyUyMHlvdSUyMGNhbiUyMHBhc3MlMjAlNjBudW1fbGFiZWxzJTNEbnVtX2xhYmVscyU2MCUyMHRvJTIwJTYwLmZyb21fcHJldHJhaW5lZCguLi4pJTYwJTBBbnVtX2xhYmVscyUyMCUzRCUyMGxlbihtb2RlbC5jb25maWcuaWQybGFiZWwpJTBBbW9kZWwlMjAlM0QlMjBHUFQyRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTBBJTIwJTIwJTIwJTIwJTIybWljcm9zb2Z0JTJGRGlhbG9nUlBULXVwZG93biUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIlMEEpJTBBJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2guc3VtKCUwQSUyMCUyMCUyMCUyMHRvcmNoLm5uLmZ1bmN0aW9uYWwub25lX2hvdChwcmVkaWN0ZWRfY2xhc3NfaWRzJTVCTm9uZSUyQyUyMCUzQSU1RC5jbG9uZSgpJTJDJTIwbnVtX2NsYXNzZXMlM0RudW1fbGFiZWxzKSUyQyUyMGRpbSUzRDElMEEpLnRvKHRvcmNoLmZsb2F0KSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, GPT2ForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.arange(<span class="hljs-number">0</span>, logits.shape[-<span class="hljs-number">1</span>])[torch.sigmoid(logits).squeeze(dim=<span class="hljs-number">0</span>) &gt; <span class="hljs-number">0.5</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2ForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.<span class="hljs-built_in">sum</span>(
<span class="hljs-meta">... </span>    torch.nn.functional.one_hot(predicted_class_ids[<span class="hljs-literal">None</span>, :].clone(), num_classes=num_labels), dim=<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>).to(torch.<span class="hljs-built_in">float</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,o=a(),b(n.$$.fragment)},l(t){e=p(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-1l8e32d"&&(e.textContent=u),o=r(t),y(n.$$.fragment,t)},m(t,T){m(t,e,T),m(t,o,T),k(n,t,T),g=!0},p:R,i(t){g||(M(n.$$.fragment,t),g=!0)},o(t){v(n.$$.fragment,t),g=!1},d(t){t&&(i(e),i(o)),w(n,t)}}}function nn($){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=c("p"),e.innerHTML=u},l(o){e=p(o,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(o,n){m(o,e,n)},p:R,d(o){o&&i(e)}}}function sn($){let e,u="Example:",o,n,g;return n=new ct({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBHUFQyRm9yVG9rZW5DbGFzc2lmaWNhdGlvbiUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyYnJhZDExNDElMkZncHQyLWZpbmV0dW5lZC1jb21wMiUyMiklMEFtb2RlbCUyMCUzRCUyMEdQVDJGb3JUb2tlbkNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJicmFkMTE0MSUyRmdwdDItZmluZXR1bmVkLWNvbXAyJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMEElMjAlMjAlMjAlMjAlMjJIdWdnaW5nRmFjZSUyMGlzJTIwYSUyMGNvbXBhbnklMjBiYXNlZCUyMGluJTIwUGFyaXMlMjBhbmQlMjBOZXclMjBZb3JrJTIyJTJDJTIwYWRkX3NwZWNpYWxfdG9rZW5zJTNERmFsc2UlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTBBKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyUyMCUzRCUyMGxvZ2l0cy5hcmdtYXgoLTEpJTBBJTBBJTIzJTIwTm90ZSUyMHRoYXQlMjB0b2tlbnMlMjBhcmUlMjBjbGFzc2lmaWVkJTIwcmF0aGVyJTIwdGhlbiUyMGlucHV0JTIwd29yZHMlMjB3aGljaCUyMG1lYW5zJTIwdGhhdCUwQSUyMyUyMHRoZXJlJTIwbWlnaHQlMjBiZSUyMG1vcmUlMjBwcmVkaWN0ZWQlMjB0b2tlbiUyMGNsYXNzZXMlMjB0aGFuJTIwd29yZHMuJTBBJTIzJTIwTXVsdGlwbGUlMjB0b2tlbiUyMGNsYXNzZXMlMjBtaWdodCUyMGFjY291bnQlMjBmb3IlMjB0aGUlMjBzYW1lJTIwd29yZCUwQXByZWRpY3RlZF90b2tlbnNfY2xhc3NlcyUyMCUzRCUyMCU1Qm1vZGVsLmNvbmZpZy5pZDJsYWJlbCU1QnQuaXRlbSgpJTVEJTIwZm9yJTIwdCUyMGluJTIwcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyU1QjAlNUQlNUQlMEFwcmVkaWN0ZWRfdG9rZW5zX2NsYXNzZXMlMEElMEFsYWJlbHMlMjAlM0QlMjBwcmVkaWN0ZWRfdG9rZW5fY2xhc3NfaWRzJTBBbG9zcyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKS5sb3NzJTBBcm91bmQobG9zcy5pdGVtKCklMkMlMjAyKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, GPT2ForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;brad1141/gpt2-finetuned-comp2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPT2ForTokenClassification.from_pretrained(<span class="hljs-string">&quot;brad1141/gpt2-finetuned-comp2&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes
[<span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Position&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>, <span class="hljs-string">&#x27;Lead&#x27;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.25</span>`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,o=a(),b(n.$$.fragment)},l(t){e=p(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=u),o=r(t),y(n.$$.fragment,t)},m(t,T){m(t,e,T),m(t,o,T),k(n,t,T),g=!0},p:R,i(t){g||(M(n.$$.fragment,t),g=!0)},o(t){v(n.$$.fragment,t),g=!1},d(t){t&&(i(e),i(o)),w(n,t)}}}function an($){let e,u,o,n,g,t,T="The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top.",pe,J,C=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,ne,F,U=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,se,_,j,ue,te,At='The <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Model">GPT2Model</a> forward method, overrides the <code>__call__</code> special method.',tt,E,pt,me,Me,je,mt,I,qe,Z,Ce,ot=`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`,ve,D,Fe=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Mt,Ne,vt=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,nt,ee,wt,Ze,he,we='The <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2LMHeadModel">GPT2LMHeadModel</a> forward method, overrides the <code>__call__</code> special method.',oe,ie,$t,ze,ut,$e,st,q,Te,be,xe,O=`The GPT2 Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`,De,W,Le=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,at,Je,P=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,H,X,S,Ue,He,Ut='The <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a> forward method, overrides the <code>__call__</code> special method.',Nt,ye,Ht,Be,Wt,xt,eo,ae,ht,Ae,jt,ft=`The GPT-2 Model transformer with a span classification head on top for extractive question-answering tasks like
SQuAD (a linear layer on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,Xt,z,gt=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,to,Ee,Mo=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,oo,re,St,no,We,To='The <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2ForQuestionAnswering">GPT2ForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',Zt,_t,mo,Re,Lt,Tt,so,Ve,Ct,N,fe,It,Gt,Et="The GPT2 Model transformer with a sequence classification head on top (linear layer).",uo,Oe,Ft=`<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2ForSequenceClassification">GPT2ForSequenceClassification</a> uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`,Ye,Bt,bt=`Since it does classification on the last token, it requires to know the position of the last token. If a
<code>pad_token_id</code> is defined in the configuration, it finds the last token that is not a padding token in each row. If
no <code>pad_token_id</code> is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when <code>inputs_embeds</code> are passed instead of <code>input_ids</code>, it does the same (take the last value in
each row of the batch).`,ao,rt,zt=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,yt,Ke,ro=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,d,x,ke,Y,Pt,L='The <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2ForSequenceClassification">GPT2ForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',it,et,ho,io,vo,qt,wo,lo,Qt,Ge,co,fo,bo,$o=`GPT2 Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`,Rt,Vt,xo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,go,yo,Go=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Ot,Jt,kt,po,_o,ko='The <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2ForTokenClassification">GPT2ForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',Po,Yt,Kt,Dt,h;return e=new Ie({props:{title:"GPT2Model",local:"transformers.GPT2Model",headingTag:"h2"}}),n=new Q({props:{name:"class transformers.GPT2Model",anchor:"transformers.GPT2Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L661"}}),j=new Q({props:{name:"forward",anchor:"transformers.GPT2Model.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.GPT2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPT2Model.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.GPT2Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p>If <code>past_key_values</code> is used, <code>attention_mask</code> needs to contain the masking strategy that was used for
<code>past_key_values</code>. In other words, the <code>attention_mask</code> always has to have the length:
<code>len(past_key_values) + len(input_ids)</code></p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPT2Model.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPT2Model.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPT2Model.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPT2Model.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.GPT2Model.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.GPT2Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPT2Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPT2Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L743",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config"
>GPT2Config</a>) and inputs.</p>
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
`}}),E=new lt({props:{$$slots:{default:[Xo]},$$scope:{ctx:$}}}),me=new dt({props:{anchor:"transformers.GPT2Model.forward.example",$$slots:{default:[So]},$$scope:{ctx:$}}}),je=new Ie({props:{title:"GPT2LMHeadModel",local:"transformers.GPT2LMHeadModel",headingTag:"h2"}}),qe=new Q({props:{name:"class transformers.GPT2LMHeadModel",anchor:"transformers.GPT2LMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2LMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L937"}}),wt=new Q({props:{name:"forward",anchor:"transformers.GPT2LMHeadModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.GPT2LMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPT2LMHeadModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.GPT2LMHeadModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p>If <code>past_key_values</code> is used, <code>attention_mask</code> needs to contain the masking strategy that was used for
<code>past_key_values</code>. In other words, the <code>attention_mask</code> always has to have the length:
<code>len(past_key_values) + len(input_ids)</code></p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPT2LMHeadModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPT2LMHeadModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPT2LMHeadModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPT2LMHeadModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.GPT2LMHeadModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.GPT2LMHeadModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPT2LMHeadModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPT2LMHeadModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPT2LMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L1043",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config"
>GPT2Config</a>) and inputs.</p>
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
`}}),ie=new lt({props:{$$slots:{default:[Qo]},$$scope:{ctx:$}}}),ze=new dt({props:{anchor:"transformers.GPT2LMHeadModel.forward.example",$$slots:{default:[Do]},$$scope:{ctx:$}}}),$e=new Ie({props:{title:"GPT2DoubleHeadsModel",local:"transformers.GPT2DoubleHeadsModel",headingTag:"h2"}}),Te=new Q({props:{name:"class transformers.GPT2DoubleHeadsModel",anchor:"transformers.GPT2DoubleHeadsModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2DoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L1137"}}),S=new Q({props:{name:"forward",anchor:"transformers.GPT2DoubleHeadsModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"mc_token_ids",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"mc_labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPT2DoubleHeadsModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p>If <code>past_key_values</code> is used, <code>attention_mask</code> needs to contain the masking strategy that was used for
<code>past_key_values</code>. In other words, the <code>attention_mask</code> always has to have the length:
<code>len(past_key_values) + len(input_ids)</code></p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.mc_token_ids",description:`<strong>mc_token_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>, default to index of the last token of the input) &#x2014;
Index of the classification token in each input sequence. Selected in the range <code>[0, input_ids.size(-1) - 1]</code>.`,name:"mc_token_ids"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code>. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>. All labels set to
<code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>`,name:"labels"},{anchor:"transformers.GPT2DoubleHeadsModel.forward.mc_labels",description:`<strong>mc_labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <em>num_choices</em> is the size of the second dimension of the input tensors. (see <em>input_ids</em> above)`,name:"mc_labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L1240",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput"
>transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config"
>GPT2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Language modeling loss.</p>
</li>
<li>
<p><strong>mc_loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>mc_labels</code> is provided) — Multiple choice classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) — Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>mc_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) — Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — Tuple of length <code>config.n_layers</code>, containing tuples of tensors of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>GPT2Attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput"
>transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ye=new lt({props:{$$slots:{default:[Ao]},$$scope:{ctx:$}}}),Be=new dt({props:{anchor:"transformers.GPT2DoubleHeadsModel.forward.example",$$slots:{default:[Eo]},$$scope:{ctx:$}}}),xt=new Ie({props:{title:"GPT2ForQuestionAnswering",local:"transformers.GPT2ForQuestionAnswering",headingTag:"h2"}}),ht=new Q({props:{name:"class transformers.GPT2ForQuestionAnswering",anchor:"transformers.GPT2ForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L1613"}}),St=new Q({props:{name:"forward",anchor:"transformers.GPT2ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"start_positions",val:": Optional = None"},{name:"end_positions",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.GPT2ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPT2ForQuestionAnswering.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.GPT2ForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p>If <code>past_key_values</code> is used, <code>attention_mask</code> needs to contain the masking strategy that was used for
<code>past_key_values</code>. In other words, the <code>attention_mask</code> always has to have the length:
<code>len(past_key_values) + len(input_ids)</code></p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPT2ForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPT2ForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPT2ForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPT2ForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.GPT2ForQuestionAnswering.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.GPT2ForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPT2ForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPT2ForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPT2ForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.GPT2ForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L1634",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config"
>GPT2Config</a>) and inputs.</p>
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
`}}),_t=new lt({props:{$$slots:{default:[Oo]},$$scope:{ctx:$}}}),Re=new lt({props:{warning:!0,$$slots:{default:[Yo]},$$scope:{ctx:$}}}),Tt=new dt({props:{anchor:"transformers.GPT2ForQuestionAnswering.forward.example",$$slots:{default:[Ko]},$$scope:{ctx:$}}}),Ve=new Ie({props:{title:"GPT2ForSequenceClassification",local:"transformers.GPT2ForSequenceClassification",headingTag:"h2"}}),fe=new Q({props:{name:"class transformers.GPT2ForSequenceClassification",anchor:"transformers.GPT2ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L1368"}}),ke=new Q({props:{name:"forward",anchor:"transformers.GPT2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.GPT2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPT2ForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.GPT2ForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p>If <code>past_key_values</code> is used, <code>attention_mask</code> needs to contain the masking strategy that was used for
<code>past_key_values</code>. In other words, the <code>attention_mask</code> always has to have the length:
<code>len(past_key_values) + len(input_ids)</code></p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPT2ForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPT2ForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPT2ForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPT2ForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.GPT2ForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.GPT2ForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPT2ForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPT2ForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPT2ForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L1397",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config"
>GPT2Config</a>) and inputs.</p>
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
`}}),et=new lt({props:{$$slots:{default:[en]},$$scope:{ctx:$}}}),io=new dt({props:{anchor:"transformers.GPT2ForSequenceClassification.forward.example",$$slots:{default:[tn]},$$scope:{ctx:$}}}),qt=new dt({props:{anchor:"transformers.GPT2ForSequenceClassification.forward.example-2",$$slots:{default:[on]},$$scope:{ctx:$}}}),lo=new Ie({props:{title:"GPT2ForTokenClassification",local:"transformers.GPT2ForTokenClassification",headingTag:"h2"}}),co=new Q({props:{name:"class transformers.GPT2ForTokenClassification",anchor:"transformers.GPT2ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPT2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L1502"}}),kt=new Q({props:{name:"forward",anchor:"transformers.GPT2ForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.GPT2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else
<code>past_key_values[0][0].shape[-2]</code> (<code>sequence_length</code> of input past key value states). Indices of input
sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only <code>input_ids</code> that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPT2ForTokenClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
Contains precomputed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The <code>input_ids</code> which have
their past given to this model should not be passed as <code>input_ids</code> as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.GPT2ForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p>If <code>past_key_values</code> is used, <code>attention_mask</code> needs to contain the masking strategy that was used for
<code>past_key_values</code>. In other words, the <code>attention_mask</code> always has to have the length:
<code>len(past_key_values) + len(input_ids)</code></p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPT2ForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, input_ids_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPT2ForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPT2ForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPT2ForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>past_key_values</code> is used, optionally only the last <code>inputs_embeds</code> have to be input (see
<code>past_key_values</code>).`,name:"inputs_embeds"},{anchor:"transformers.GPT2ForTokenClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.GPT2ForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPT2ForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPT2ForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPT2ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L1531",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config"
>GPT2Config</a>) and inputs.</p>
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
`}}),Yt=new lt({props:{$$slots:{default:[nn]},$$scope:{ctx:$}}}),Dt=new dt({props:{anchor:"transformers.GPT2ForTokenClassification.forward.example",$$slots:{default:[sn]},$$scope:{ctx:$}}}),{c(){b(e.$$.fragment),u=a(),o=c("div"),b(n.$$.fragment),g=a(),t=c("p"),t.textContent=T,pe=a(),J=c("p"),J.innerHTML=C,ne=a(),F=c("p"),F.innerHTML=U,se=a(),_=c("div"),b(j.$$.fragment),ue=a(),te=c("p"),te.innerHTML=At,tt=a(),b(E.$$.fragment),pt=a(),b(me.$$.fragment),Me=a(),b(je.$$.fragment),mt=a(),I=c("div"),b(qe.$$.fragment),Z=a(),Ce=c("p"),Ce.textContent=ot,ve=a(),D=c("p"),D.innerHTML=Fe,Mt=a(),Ne=c("p"),Ne.innerHTML=vt,nt=a(),ee=c("div"),b(wt.$$.fragment),Ze=a(),he=c("p"),he.innerHTML=we,oe=a(),b(ie.$$.fragment),$t=a(),b(ze.$$.fragment),ut=a(),b($e.$$.fragment),st=a(),q=c("div"),b(Te.$$.fragment),be=a(),xe=c("p"),xe.textContent=O,De=a(),W=c("p"),W.innerHTML=Le,at=a(),Je=c("p"),Je.innerHTML=P,H=a(),X=c("div"),b(S.$$.fragment),Ue=a(),He=c("p"),He.innerHTML=Ut,Nt=a(),b(ye.$$.fragment),Ht=a(),b(Be.$$.fragment),Wt=a(),b(xt.$$.fragment),eo=a(),ae=c("div"),b(ht.$$.fragment),Ae=a(),jt=c("p"),jt.innerHTML=ft,Xt=a(),z=c("p"),z.innerHTML=gt,to=a(),Ee=c("p"),Ee.innerHTML=Mo,oo=a(),re=c("div"),b(St.$$.fragment),no=a(),We=c("p"),We.innerHTML=To,Zt=a(),b(_t.$$.fragment),mo=a(),b(Re.$$.fragment),Lt=a(),b(Tt.$$.fragment),so=a(),b(Ve.$$.fragment),Ct=a(),N=c("div"),b(fe.$$.fragment),It=a(),Gt=c("p"),Gt.textContent=Et,uo=a(),Oe=c("p"),Oe.innerHTML=Ft,Ye=a(),Bt=c("p"),Bt.innerHTML=bt,ao=a(),rt=c("p"),rt.innerHTML=zt,yt=a(),Ke=c("p"),Ke.innerHTML=ro,d=a(),x=c("div"),b(ke.$$.fragment),Y=a(),Pt=c("p"),Pt.innerHTML=L,it=a(),b(et.$$.fragment),ho=a(),b(io.$$.fragment),vo=a(),b(qt.$$.fragment),wo=a(),b(lo.$$.fragment),Qt=a(),Ge=c("div"),b(co.$$.fragment),fo=a(),bo=c("p"),bo.textContent=$o,Rt=a(),Vt=c("p"),Vt.innerHTML=xo,go=a(),yo=c("p"),yo.innerHTML=Go,Ot=a(),Jt=c("div"),b(kt.$$.fragment),po=a(),_o=c("p"),_o.innerHTML=ko,Po=a(),b(Yt.$$.fragment),Kt=a(),b(Dt.$$.fragment),this.h()},l(l){y(e.$$.fragment,l),u=r(l),o=p(l,"DIV",{class:!0});var G=V(o);y(n.$$.fragment,G),g=r(G),t=p(G,"P",{"data-svelte-h":!0}),f(t)!=="svelte-4bubxi"&&(t.textContent=T),pe=r(G),J=p(G,"P",{"data-svelte-h":!0}),f(J)!=="svelte-6pahdo"&&(J.innerHTML=C),ne=r(G),F=p(G,"P",{"data-svelte-h":!0}),f(F)!=="svelte-hswkmf"&&(F.innerHTML=U),se=r(G),_=p(G,"DIV",{class:!0});var le=V(_);y(j.$$.fragment,le),ue=r(le),te=p(le,"P",{"data-svelte-h":!0}),f(te)!=="svelte-o0and0"&&(te.innerHTML=At),tt=r(le),y(E.$$.fragment,le),pt=r(le),y(me.$$.fragment,le),le.forEach(i),G.forEach(i),Me=r(l),y(je.$$.fragment,l),mt=r(l),I=p(l,"DIV",{class:!0});var ge=V(I);y(qe.$$.fragment,ge),Z=r(ge),Ce=p(ge,"P",{"data-svelte-h":!0}),f(Ce)!=="svelte-jjb0s"&&(Ce.textContent=ot),ve=r(ge),D=p(ge,"P",{"data-svelte-h":!0}),f(D)!=="svelte-6pahdo"&&(D.innerHTML=Fe),Mt=r(ge),Ne=p(ge,"P",{"data-svelte-h":!0}),f(Ne)!=="svelte-hswkmf"&&(Ne.innerHTML=vt),nt=r(ge),ee=p(ge,"DIV",{class:!0});var de=V(ee);y(wt.$$.fragment,de),Ze=r(de),he=p(de,"P",{"data-svelte-h":!0}),f(he)!=="svelte-jd20dg"&&(he.innerHTML=we),oe=r(de),y(ie.$$.fragment,de),$t=r(de),y(ze.$$.fragment,de),de.forEach(i),ge.forEach(i),ut=r(l),y($e.$$.fragment,l),st=r(l),q=p(l,"DIV",{class:!0});var _e=V(q);y(Te.$$.fragment,_e),be=r(_e),xe=p(_e,"P",{"data-svelte-h":!0}),f(xe)!=="svelte-1q8023u"&&(xe.textContent=O),De=r(_e),W=p(_e,"P",{"data-svelte-h":!0}),f(W)!=="svelte-6pahdo"&&(W.innerHTML=Le),at=r(_e),Je=p(_e,"P",{"data-svelte-h":!0}),f(Je)!=="svelte-hswkmf"&&(Je.innerHTML=P),H=r(_e),X=p(_e,"DIV",{class:!0});var K=V(X);y(S.$$.fragment,K),Ue=r(K),He=p(K,"P",{"data-svelte-h":!0}),f(He)!=="svelte-10mjy58"&&(He.innerHTML=Ut),Nt=r(K),y(ye.$$.fragment,K),Ht=r(K),y(Be.$$.fragment,K),K.forEach(i),_e.forEach(i),Wt=r(l),y(xt.$$.fragment,l),eo=r(l),ae=p(l,"DIV",{class:!0});var ce=V(ae);y(ht.$$.fragment,ce),Ae=r(ce),jt=p(ce,"P",{"data-svelte-h":!0}),f(jt)!=="svelte-11dadc6"&&(jt.innerHTML=ft),Xt=r(ce),z=p(ce,"P",{"data-svelte-h":!0}),f(z)!=="svelte-6pahdo"&&(z.innerHTML=gt),to=r(ce),Ee=p(ce,"P",{"data-svelte-h":!0}),f(Ee)!=="svelte-hswkmf"&&(Ee.innerHTML=Mo),oo=r(ce),re=p(ce,"DIV",{class:!0});var Xe=V(re);y(St.$$.fragment,Xe),no=r(Xe),We=p(Xe,"P",{"data-svelte-h":!0}),f(We)!=="svelte-jqg3s"&&(We.innerHTML=To),Zt=r(Xe),y(_t.$$.fragment,Xe),mo=r(Xe),y(Re.$$.fragment,Xe),Lt=r(Xe),y(Tt.$$.fragment,Xe),Xe.forEach(i),ce.forEach(i),so=r(l),y(Ve.$$.fragment,l),Ct=r(l),N=p(l,"DIV",{class:!0});var A=V(N);y(fe.$$.fragment,A),It=r(A),Gt=p(A,"P",{"data-svelte-h":!0}),f(Gt)!=="svelte-1o27avp"&&(Gt.textContent=Et),uo=r(A),Oe=p(A,"P",{"data-svelte-h":!0}),f(Oe)!=="svelte-1g9o3k8"&&(Oe.innerHTML=Ft),Ye=r(A),Bt=p(A,"P",{"data-svelte-h":!0}),f(Bt)!=="svelte-10ugs3m"&&(Bt.innerHTML=bt),ao=r(A),rt=p(A,"P",{"data-svelte-h":!0}),f(rt)!=="svelte-6pahdo"&&(rt.innerHTML=zt),yt=r(A),Ke=p(A,"P",{"data-svelte-h":!0}),f(Ke)!=="svelte-hswkmf"&&(Ke.innerHTML=ro),d=r(A),x=p(A,"DIV",{class:!0});var Se=V(x);y(ke.$$.fragment,Se),Y=r(Se),Pt=p(Se,"P",{"data-svelte-h":!0}),f(Pt)!=="svelte-1i9jzvc"&&(Pt.innerHTML=L),it=r(Se),y(et.$$.fragment,Se),ho=r(Se),y(io.$$.fragment,Se),vo=r(Se),y(qt.$$.fragment,Se),Se.forEach(i),A.forEach(i),wo=r(l),y(lo.$$.fragment,l),Qt=r(l),Ge=p(l,"DIV",{class:!0});var Pe=V(Ge);y(co.$$.fragment,Pe),fo=r(Pe),bo=p(Pe,"P",{"data-svelte-h":!0}),f(bo)!=="svelte-1m7sify"&&(bo.textContent=$o),Rt=r(Pe),Vt=p(Pe,"P",{"data-svelte-h":!0}),f(Vt)!=="svelte-6pahdo"&&(Vt.innerHTML=xo),go=r(Pe),yo=p(Pe,"P",{"data-svelte-h":!0}),f(yo)!=="svelte-hswkmf"&&(yo.innerHTML=Go),Ot=r(Pe),Jt=p(Pe,"DIV",{class:!0});var Qe=V(Jt);y(kt.$$.fragment,Qe),po=r(Qe),_o=p(Qe,"P",{"data-svelte-h":!0}),f(_o)!=="svelte-79rjsa"&&(_o.innerHTML=ko),Po=r(Qe),y(Yt.$$.fragment,Qe),Kt=r(Qe),y(Dt.$$.fragment,Qe),Qe.forEach(i),Pe.forEach(i),this.h()},h(){B(_,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(l,G){k(e,l,G),m(l,u,G),m(l,o,G),k(n,o,null),s(o,g),s(o,t),s(o,pe),s(o,J),s(o,ne),s(o,F),s(o,se),s(o,_),k(j,_,null),s(_,ue),s(_,te),s(_,tt),k(E,_,null),s(_,pt),k(me,_,null),m(l,Me,G),k(je,l,G),m(l,mt,G),m(l,I,G),k(qe,I,null),s(I,Z),s(I,Ce),s(I,ve),s(I,D),s(I,Mt),s(I,Ne),s(I,nt),s(I,ee),k(wt,ee,null),s(ee,Ze),s(ee,he),s(ee,oe),k(ie,ee,null),s(ee,$t),k(ze,ee,null),m(l,ut,G),k($e,l,G),m(l,st,G),m(l,q,G),k(Te,q,null),s(q,be),s(q,xe),s(q,De),s(q,W),s(q,at),s(q,Je),s(q,H),s(q,X),k(S,X,null),s(X,Ue),s(X,He),s(X,Nt),k(ye,X,null),s(X,Ht),k(Be,X,null),m(l,Wt,G),k(xt,l,G),m(l,eo,G),m(l,ae,G),k(ht,ae,null),s(ae,Ae),s(ae,jt),s(ae,Xt),s(ae,z),s(ae,to),s(ae,Ee),s(ae,oo),s(ae,re),k(St,re,null),s(re,no),s(re,We),s(re,Zt),k(_t,re,null),s(re,mo),k(Re,re,null),s(re,Lt),k(Tt,re,null),m(l,so,G),k(Ve,l,G),m(l,Ct,G),m(l,N,G),k(fe,N,null),s(N,It),s(N,Gt),s(N,uo),s(N,Oe),s(N,Ye),s(N,Bt),s(N,ao),s(N,rt),s(N,yt),s(N,Ke),s(N,d),s(N,x),k(ke,x,null),s(x,Y),s(x,Pt),s(x,it),k(et,x,null),s(x,ho),k(io,x,null),s(x,vo),k(qt,x,null),m(l,wo,G),k(lo,l,G),m(l,Qt,G),m(l,Ge,G),k(co,Ge,null),s(Ge,fo),s(Ge,bo),s(Ge,Rt),s(Ge,Vt),s(Ge,go),s(Ge,yo),s(Ge,Ot),s(Ge,Jt),k(kt,Jt,null),s(Jt,po),s(Jt,_o),s(Jt,Po),k(Yt,Jt,null),s(Jt,Kt),k(Dt,Jt,null),h=!0},p(l,G){const le={};G&2&&(le.$$scope={dirty:G,ctx:l}),E.$set(le);const ge={};G&2&&(ge.$$scope={dirty:G,ctx:l}),me.$set(ge);const de={};G&2&&(de.$$scope={dirty:G,ctx:l}),ie.$set(de);const _e={};G&2&&(_e.$$scope={dirty:G,ctx:l}),ze.$set(_e);const K={};G&2&&(K.$$scope={dirty:G,ctx:l}),ye.$set(K);const ce={};G&2&&(ce.$$scope={dirty:G,ctx:l}),Be.$set(ce);const Xe={};G&2&&(Xe.$$scope={dirty:G,ctx:l}),_t.$set(Xe);const A={};G&2&&(A.$$scope={dirty:G,ctx:l}),Re.$set(A);const Se={};G&2&&(Se.$$scope={dirty:G,ctx:l}),Tt.$set(Se);const Pe={};G&2&&(Pe.$$scope={dirty:G,ctx:l}),et.$set(Pe);const Qe={};G&2&&(Qe.$$scope={dirty:G,ctx:l}),io.$set(Qe);const jo={};G&2&&(jo.$$scope={dirty:G,ctx:l}),qt.$set(jo);const Co={};G&2&&(Co.$$scope={dirty:G,ctx:l}),Yt.$set(Co);const Fo={};G&2&&(Fo.$$scope={dirty:G,ctx:l}),Dt.$set(Fo)},i(l){h||(M(e.$$.fragment,l),M(n.$$.fragment,l),M(j.$$.fragment,l),M(E.$$.fragment,l),M(me.$$.fragment,l),M(je.$$.fragment,l),M(qe.$$.fragment,l),M(wt.$$.fragment,l),M(ie.$$.fragment,l),M(ze.$$.fragment,l),M($e.$$.fragment,l),M(Te.$$.fragment,l),M(S.$$.fragment,l),M(ye.$$.fragment,l),M(Be.$$.fragment,l),M(xt.$$.fragment,l),M(ht.$$.fragment,l),M(St.$$.fragment,l),M(_t.$$.fragment,l),M(Re.$$.fragment,l),M(Tt.$$.fragment,l),M(Ve.$$.fragment,l),M(fe.$$.fragment,l),M(ke.$$.fragment,l),M(et.$$.fragment,l),M(io.$$.fragment,l),M(qt.$$.fragment,l),M(lo.$$.fragment,l),M(co.$$.fragment,l),M(kt.$$.fragment,l),M(Yt.$$.fragment,l),M(Dt.$$.fragment,l),h=!0)},o(l){v(e.$$.fragment,l),v(n.$$.fragment,l),v(j.$$.fragment,l),v(E.$$.fragment,l),v(me.$$.fragment,l),v(je.$$.fragment,l),v(qe.$$.fragment,l),v(wt.$$.fragment,l),v(ie.$$.fragment,l),v(ze.$$.fragment,l),v($e.$$.fragment,l),v(Te.$$.fragment,l),v(S.$$.fragment,l),v(ye.$$.fragment,l),v(Be.$$.fragment,l),v(xt.$$.fragment,l),v(ht.$$.fragment,l),v(St.$$.fragment,l),v(_t.$$.fragment,l),v(Re.$$.fragment,l),v(Tt.$$.fragment,l),v(Ve.$$.fragment,l),v(fe.$$.fragment,l),v(ke.$$.fragment,l),v(et.$$.fragment,l),v(io.$$.fragment,l),v(qt.$$.fragment,l),v(lo.$$.fragment,l),v(co.$$.fragment,l),v(kt.$$.fragment,l),v(Yt.$$.fragment,l),v(Dt.$$.fragment,l),h=!1},d(l){l&&(i(u),i(o),i(Me),i(mt),i(I),i(ut),i(st),i(q),i(Wt),i(eo),i(ae),i(so),i(Ct),i(N),i(wo),i(Qt),i(Ge)),w(e,l),w(n),w(j),w(E),w(me),w(je,l),w(qe),w(wt),w(ie),w(ze),w($e,l),w(Te),w(S),w(ye),w(Be),w(xt,l),w(ht),w(St),w(_t),w(Re),w(Tt),w(Ve,l),w(fe),w(ke),w(et),w(io),w(qt),w(lo,l),w(co),w(kt),w(Yt),w(Dt)}}}function rn($){let e,u;return e=new zo({props:{$$slots:{default:[an]},$$scope:{ctx:$}}}),{c(){b(e.$$.fragment)},l(o){y(e.$$.fragment,o)},m(o,n){k(e,o,n),u=!0},p(o,n){const g={};n&2&&(g.$$scope={dirty:n,ctx:o}),e.$set(g)},i(o){u||(M(e.$$.fragment,o),u=!0)},o(o){v(e.$$.fragment,o),u=!1},d(o){w(e,o)}}}function ln($){let e,u="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",o,n,g="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,T,pe=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,J,C,ne=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,F,U,se=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=c("p"),e.innerHTML=u,o=a(),n=c("ul"),n.innerHTML=g,t=a(),T=c("p"),T.innerHTML=pe,J=a(),C=c("ul"),C.innerHTML=ne,F=a(),U=c("p"),U.innerHTML=se},l(_){e=p(_,"P",{"data-svelte-h":!0}),f(e)!=="svelte-1ajbfxg"&&(e.innerHTML=u),o=r(_),n=p(_,"UL",{"data-svelte-h":!0}),f(n)!=="svelte-qm1t26"&&(n.innerHTML=g),t=r(_),T=p(_,"P",{"data-svelte-h":!0}),f(T)!=="svelte-1v9qsc5"&&(T.innerHTML=pe),J=r(_),C=p(_,"UL",{"data-svelte-h":!0}),f(C)!=="svelte-15scerc"&&(C.innerHTML=ne),F=r(_),U=p(_,"P",{"data-svelte-h":!0}),f(U)!=="svelte-1an3odd"&&(U.innerHTML=se)},m(_,j){m(_,e,j),m(_,o,j),m(_,n,j),m(_,t,j),m(_,T,j),m(_,J,j),m(_,C,j),m(_,F,j),m(_,U,j)},p:R,d(_){_&&(i(e),i(o),i(n),i(t),i(T),i(J),i(C),i(F),i(U))}}}function dn($){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=c("p"),e.innerHTML=u},l(o){e=p(o,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(o,n){m(o,e,n)},p:R,d(o){o&&i(e)}}}function cn($){let e,u="Example:",o,n,g;return n=new ct({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkdQVDJNb2RlbCUwQWltcG9ydCUyMHRlbnNvcmZsb3clMjBhcyUyMHRmJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyb3BlbmFpLWNvbW11bml0eSUyRmdwdDIlMjIpJTBBbW9kZWwlMjAlM0QlMjBURkdQVDJNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyb3BlbmFpLWNvbW11bml0eSUyRmdwdDIlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbChpbnB1dHMpJTBBJTBBbGFzdF9oaWRkZW5fc3RhdGVzJTIwJTNEJTIwb3V0cHV0cy5sYXN0X2hpZGRlbl9zdGF0ZQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFGPT2Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGPT2Model.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,o=a(),b(n.$$.fragment)},l(t){e=p(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=u),o=r(t),y(n.$$.fragment,t)},m(t,T){m(t,e,T),m(t,o,T),k(n,t,T),g=!0},p:R,i(t){g||(M(n.$$.fragment,t),g=!0)},o(t){v(n.$$.fragment,t),g=!1},d(t){t&&(i(e),i(o)),w(n,t)}}}function pn($){let e,u="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",o,n,g="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,T,pe=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,J,C,ne=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,F,U,se=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=c("p"),e.innerHTML=u,o=a(),n=c("ul"),n.innerHTML=g,t=a(),T=c("p"),T.innerHTML=pe,J=a(),C=c("ul"),C.innerHTML=ne,F=a(),U=c("p"),U.innerHTML=se},l(_){e=p(_,"P",{"data-svelte-h":!0}),f(e)!=="svelte-1ajbfxg"&&(e.innerHTML=u),o=r(_),n=p(_,"UL",{"data-svelte-h":!0}),f(n)!=="svelte-qm1t26"&&(n.innerHTML=g),t=r(_),T=p(_,"P",{"data-svelte-h":!0}),f(T)!=="svelte-1v9qsc5"&&(T.innerHTML=pe),J=r(_),C=p(_,"UL",{"data-svelte-h":!0}),f(C)!=="svelte-15scerc"&&(C.innerHTML=ne),F=r(_),U=p(_,"P",{"data-svelte-h":!0}),f(U)!=="svelte-1an3odd"&&(U.innerHTML=se)},m(_,j){m(_,e,j),m(_,o,j),m(_,n,j),m(_,t,j),m(_,T,j),m(_,J,j),m(_,C,j),m(_,F,j),m(_,U,j)},p:R,d(_){_&&(i(e),i(o),i(n),i(t),i(T),i(J),i(C),i(F),i(U))}}}function mn($){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=c("p"),e.innerHTML=u},l(o){e=p(o,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(o,n){m(o,e,n)},p:R,d(o){o&&i(e)}}}function un($){let e,u="Example:",o,n,g;return n=new ct({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkdQVDJMTUhlYWRNb2RlbCUwQWltcG9ydCUyMHRlbnNvcmZsb3clMjBhcyUyMHRmJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyb3BlbmFpLWNvbW11bml0eSUyRmdwdDIlMjIpJTBBbW9kZWwlMjAlM0QlMjBURkdQVDJMTUhlYWRNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyb3BlbmFpLWNvbW11bml0eSUyRmdwdDIlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbChpbnB1dHMpJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFGPT2LMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGPT2LMHeadModel.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,o=a(),b(n.$$.fragment)},l(t){e=p(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=u),o=r(t),y(n.$$.fragment,t)},m(t,T){m(t,e,T),m(t,o,T),k(n,t,T),g=!0},p:R,i(t){g||(M(n.$$.fragment,t),g=!0)},o(t){v(n.$$.fragment,t),g=!1},d(t){t&&(i(e),i(o)),w(n,t)}}}function hn($){let e,u="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",o,n,g="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,T,pe=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,J,C,ne=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,F,U,se=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=c("p"),e.innerHTML=u,o=a(),n=c("ul"),n.innerHTML=g,t=a(),T=c("p"),T.innerHTML=pe,J=a(),C=c("ul"),C.innerHTML=ne,F=a(),U=c("p"),U.innerHTML=se},l(_){e=p(_,"P",{"data-svelte-h":!0}),f(e)!=="svelte-1ajbfxg"&&(e.innerHTML=u),o=r(_),n=p(_,"UL",{"data-svelte-h":!0}),f(n)!=="svelte-qm1t26"&&(n.innerHTML=g),t=r(_),T=p(_,"P",{"data-svelte-h":!0}),f(T)!=="svelte-1v9qsc5"&&(T.innerHTML=pe),J=r(_),C=p(_,"UL",{"data-svelte-h":!0}),f(C)!=="svelte-15scerc"&&(C.innerHTML=ne),F=r(_),U=p(_,"P",{"data-svelte-h":!0}),f(U)!=="svelte-1an3odd"&&(U.innerHTML=se)},m(_,j){m(_,e,j),m(_,o,j),m(_,n,j),m(_,t,j),m(_,T,j),m(_,J,j),m(_,C,j),m(_,F,j),m(_,U,j)},p:R,d(_){_&&(i(e),i(o),i(n),i(t),i(T),i(J),i(C),i(F),i(U))}}}function fn($){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=c("p"),e.innerHTML=u},l(o){e=p(o,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(o,n){m(o,e,n)},p:R,d(o){o&&i(e)}}}function gn($){let e,u="Examples:",o,n,g;return n=new ct({props:{code:"aW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMFRGR1BUMkRvdWJsZUhlYWRzTW9kZWwlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJvcGVuYWktY29tbXVuaXR5JTJGZ3B0MiUyMiklMEFtb2RlbCUyMCUzRCUyMFRGR1BUMkRvdWJsZUhlYWRzTW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMm9wZW5haS1jb21tdW5pdHklMkZncHQyJTIyKSUwQSUwQSUyMyUyMEFkZCUyMGElMjAlNUJDTFMlNUQlMjB0byUyMHRoZSUyMHZvY2FidWxhcnklMjAod2UlMjBzaG91bGQlMjB0cmFpbiUyMGl0JTIwYWxzbyEpJTBBbnVtX2FkZGVkX3Rva2VucyUyMCUzRCUyMHRva2VuaXplci5hZGRfc3BlY2lhbF90b2tlbnMoJTdCJTIyY2xzX3Rva2VuJTIyJTNBJTIwJTIyJTVCQ0xTJTVEJTIyJTdEKSUwQSUwQWVtYmVkZGluZ19sYXllciUyMCUzRCUyMG1vZGVsLnJlc2l6ZV90b2tlbl9lbWJlZGRpbmdzKCUwQSUyMCUyMCUyMCUyMGxlbih0b2tlbml6ZXIpJTBBKSUyMCUyMCUyMyUyMFVwZGF0ZSUyMHRoZSUyMG1vZGVsJTIwZW1iZWRkaW5ncyUyMHdpdGglMjB0aGUlMjBuZXclMjB2b2NhYnVsYXJ5JTIwc2l6ZSUwQSUwQWNob2ljZXMlMjAlM0QlMjAlNUIlMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIwJTVCQ0xTJTVEJTIyJTJDJTIwJTIySGVsbG8lMkMlMjBteSUyMGNhdCUyMGlzJTIwY3V0ZSUyMCU1QkNMUyU1RCUyMiU1RCUwQWVuY29kZWRfY2hvaWNlcyUyMCUzRCUyMCU1QnRva2VuaXplci5lbmNvZGUocyklMjBmb3IlMjBzJTIwaW4lMjBjaG9pY2VzJTVEJTBBY2xzX3Rva2VuX2xvY2F0aW9uJTIwJTNEJTIwJTVCdG9rZW5zLmluZGV4KHRva2VuaXplci5jbHNfdG9rZW5faWQpJTIwZm9yJTIwdG9rZW5zJTIwaW4lMjBlbmNvZGVkX2Nob2ljZXMlNUQlMEElMEFpbnB1dF9pZHMlMjAlM0QlMjB0Zi5jb25zdGFudChlbmNvZGVkX2Nob2ljZXMpJTVCTm9uZSUyQyUyMCUzQSU1RCUyMCUyMCUyMyUyMEJhdGNoJTIwc2l6ZSUzQSUyMDElMkMlMjBudW1iZXIlMjBvZiUyMGNob2ljZXMlM0ElMjAyJTBBbWNfdG9rZW5faWRzJTIwJTNEJTIwdGYuY29uc3RhbnQoJTVCY2xzX3Rva2VuX2xvY2F0aW9uJTVEKSUyMCUyMCUyMyUyMEJhdGNoJTIwc2l6ZSUzQSUyMDElMEElMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoaW5wdXRfaWRzJTJDJTIwbWNfdG9rZW5faWRzJTNEbWNfdG9rZW5faWRzKSUwQWxtX3ByZWRpY3Rpb25fc2NvcmVzJTJDJTIwbWNfcHJlZGljdGlvbl9zY29yZXMlMjAlM0QlMjBvdXRwdXRzJTVCJTNBMiU1RA==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFGPT2DoubleHeadsModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGPT2DoubleHeadsModel.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Add a [CLS] to the vocabulary (we should train it also!)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_added_tokens = tokenizer.add_special_tokens({<span class="hljs-string">&quot;cls_token&quot;</span>: <span class="hljs-string">&quot;[CLS]&quot;</span>})

<span class="hljs-meta">&gt;&gt;&gt; </span>embedding_layer = model.resize_token_embeddings(
<span class="hljs-meta">... </span>    <span class="hljs-built_in">len</span>(tokenizer)
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># Update the model embeddings with the new vocabulary size</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>choices = [<span class="hljs-string">&quot;Hello, my dog is cute [CLS]&quot;</span>, <span class="hljs-string">&quot;Hello, my cat is cute [CLS]&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>encoded_choices = [tokenizer.encode(s) <span class="hljs-keyword">for</span> s <span class="hljs-keyword">in</span> choices]
<span class="hljs-meta">&gt;&gt;&gt; </span>cls_token_location = [tokens.index(tokenizer.cls_token_id) <span class="hljs-keyword">for</span> tokens <span class="hljs-keyword">in</span> encoded_choices]

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tf.constant(encoded_choices)[<span class="hljs-literal">None</span>, :]  <span class="hljs-comment"># Batch size: 1, number of choices: 2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mc_token_ids = tf.constant([cls_token_location])  <span class="hljs-comment"># Batch size: 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, mc_token_ids=mc_token_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>lm_prediction_scores, mc_prediction_scores = outputs[:<span class="hljs-number">2</span>]`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,o=a(),b(n.$$.fragment)},l(t){e=p(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-kvfsh7"&&(e.textContent=u),o=r(t),y(n.$$.fragment,t)},m(t,T){m(t,e,T),m(t,o,T),k(n,t,T),g=!0},p:R,i(t){g||(M(n.$$.fragment,t),g=!0)},o(t){v(n.$$.fragment,t),g=!1},d(t){t&&(i(e),i(o)),w(n,t)}}}function _n($){let e,u="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",o,n,g="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,T,pe=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,J,C,ne=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,F,U,se=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=c("p"),e.innerHTML=u,o=a(),n=c("ul"),n.innerHTML=g,t=a(),T=c("p"),T.innerHTML=pe,J=a(),C=c("ul"),C.innerHTML=ne,F=a(),U=c("p"),U.innerHTML=se},l(_){e=p(_,"P",{"data-svelte-h":!0}),f(e)!=="svelte-1ajbfxg"&&(e.innerHTML=u),o=r(_),n=p(_,"UL",{"data-svelte-h":!0}),f(n)!=="svelte-qm1t26"&&(n.innerHTML=g),t=r(_),T=p(_,"P",{"data-svelte-h":!0}),f(T)!=="svelte-1v9qsc5"&&(T.innerHTML=pe),J=r(_),C=p(_,"UL",{"data-svelte-h":!0}),f(C)!=="svelte-15scerc"&&(C.innerHTML=ne),F=r(_),U=p(_,"P",{"data-svelte-h":!0}),f(U)!=="svelte-1an3odd"&&(U.innerHTML=se)},m(_,j){m(_,e,j),m(_,o,j),m(_,n,j),m(_,t,j),m(_,T,j),m(_,J,j),m(_,C,j),m(_,F,j),m(_,U,j)},p:R,d(_){_&&(i(e),i(o),i(n),i(t),i(T),i(J),i(C),i(F),i(U))}}}function Tn($){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=c("p"),e.innerHTML=u},l(o){e=p(o,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(o,n){m(o,e,n)},p:R,d(o){o&&i(e)}}}function bn($){let e,u="Example:",o,n,g;return n=new ct({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkdQVDJGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uJTBBaW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZEaWFsb2dSUFQtdXBkb3duJTIyKSUwQW1vZGVsJTIwJTNEJTIwVEZHUFQyRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGRGlhbG9nUlBULXVwZG93biUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIydGYlMjIpJTBBJTBBbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQXByZWRpY3RlZF9jbGFzc19pZCUyMCUzRCUyMGludCh0Zi5tYXRoLmFyZ21heChsb2dpdHMlMkMlMjBheGlzJTNELTEpJTVCMCU1RCk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFGPT2ForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGPT2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,o=a(),b(n.$$.fragment)},l(t){e=p(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=u),o=r(t),y(n.$$.fragment,t)},m(t,T){m(t,e,T),m(t,o,T),k(n,t,T),g=!0},p:R,i(t){g||(M(n.$$.fragment,t),g=!0)},o(t){v(n.$$.fragment,t),g=!1},d(t){t&&(i(e),i(o)),w(n,t)}}}function yn($){let e,u;return e=new ct({props:{code:"JTIzJTIwVG8lMjB0cmFpbiUyMGElMjBtb2RlbCUyMG9uJTIwJTYwbnVtX2xhYmVscyU2MCUyMGNsYXNzZXMlMkMlMjB5b3UlMjBjYW4lMjBwYXNzJTIwJTYwbnVtX2xhYmVscyUzRG51bV9sYWJlbHMlNjAlMjB0byUyMCU2MC5mcm9tX3ByZXRyYWluZWQoLi4uKSU2MCUwQW51bV9sYWJlbHMlMjAlM0QlMjBsZW4obW9kZWwuY29uZmlnLmlkMmxhYmVsKSUwQW1vZGVsJTIwJTNEJTIwVEZHUFQyRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGRGlhbG9nUlBULXVwZG93biUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzKSUwQSUwQWxhYmVscyUyMCUzRCUyMHRmLmNvbnN0YW50KDEpJTBBbG9zcyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKS5sb3Nz",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`</span>\n<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)\n<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGPT2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/DialogRPT-updown&quot;</span>, num_labels=num_labels)\n\n<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)\n<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss',wrap:!1}}),{c(){b(e.$$.fragment)},l(o){y(e.$$.fragment,o)},m(o,n){k(e,o,n),u=!0},p:R,i(o){u||(M(e.$$.fragment,o),u=!0)},o(o){v(e.$$.fragment,o),u=!1},d(o){w(e,o)}}}function kn($){let e,u="Examples:",o,n,g;return n=new ct({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFRGR1BUMlRva2VuaXplciUwQSUwQXRmX3Rva2VuaXplciUyMCUzRCUyMFRGR1BUMlRva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyb3BlbmFpLWNvbW11bml0eSUyRmdwdDIlMjIp",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFGPT2Tokenizer

tf_tokenizer = TFGPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,o=a(),b(n.$$.fragment)},l(t){e=p(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-kvfsh7"&&(e.textContent=u),o=r(t),y(n.$$.fragment,t)},m(t,T){m(t,e,T),m(t,o,T),k(n,t,T),g=!0},p:R,i(t){g||(M(n.$$.fragment,t),g=!0)},o(t){v(n.$$.fragment,t),g=!1},d(t){t&&(i(e),i(o)),w(n,t)}}}function Mn($){let e,u="Examples:",o,n,g;return n=new ct({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURkdQVDJUb2tlbml6ZXIlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJvcGVuYWktY29tbXVuaXR5JTJGZ3B0MiUyMiklMEF0Zl90b2tlbml6ZXIlMjAlM0QlMjBURkdQVDJUb2tlbml6ZXIuZnJvbV90b2tlbml6ZXIodG9rZW5pemVyKQ==",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFGPT2Tokenizer

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)
tf_tokenizer = TFGPT2Tokenizer.from_tokenizer(tokenizer)`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,o=a(),b(n.$$.fragment)},l(t){e=p(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-kvfsh7"&&(e.textContent=u),o=r(t),y(n.$$.fragment,t)},m(t,T){m(t,e,T),m(t,o,T),k(n,t,T),g=!0},p:R,i(t){g||(M(n.$$.fragment,t),g=!0)},o(t){v(n.$$.fragment,t),g=!1},d(t){t&&(i(e),i(o)),w(n,t)}}}function vn($){let e,u,o,n,g,t,T="The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top.",pe,J,C=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,ne,F,U=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,se,_,j,ue,te,At,tt,E='The <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.TFGPT2Model">TFGPT2Model</a> forward method, overrides the <code>__call__</code> special method.',pt,me,Me,je,mt,I,qe,Z,Ce,ot,ve,D=`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`,Fe,Mt,Ne=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,vt,nt,ee=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,wt,Ze,he,we,oe,ie,$t,ze='The <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.TFGPT2LMHeadModel">TFGPT2LMHeadModel</a> forward method, overrides the <code>__call__</code> special method.',ut,$e,st,q,Te,be,xe,O,De,W,Le,at=`The GPT2 Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`,Je,P,H=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,X,S,Ue=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,He,Ut,Nt,ye,Ht,Be,Wt,xt='The <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel">TFGPT2DoubleHeadsModel</a> forward method, overrides the <code>__call__</code> special method.',eo,ae,ht,Ae,jt,ft,Xt,z,gt,to,Ee,Mo="The GPT2 Model transformer with a sequence classification head on top (linear layer).",oo,re,St=`<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.TFGPT2ForSequenceClassification">TFGPT2ForSequenceClassification</a> uses the last token in order to do the classification, as other causal models
(e.g. GPT-1) do.`,no,We,To=`Since it does classification on the last token, it requires to know the position of the last token. If a
<code>pad_token_id</code> is defined in the configuration, it finds the last token that is not a padding token in each row. If
no <code>pad_token_id</code> is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when <code>inputs_embeds</code> are passed instead of <code>input_ids</code>, it does the same (take the last value in
each row of the batch).`,Zt,_t,mo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Re,Lt,Tt=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,so,Ve,Ct,N,fe,It,Gt,Et='The <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.TFGPT2ForSequenceClassification">TFGPT2ForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',uo,Oe,Ft,Ye,Bt,bt,ao,rt,zt,yt,Ke,ro,d,x="Base class for outputs of sentence classification models.",ke,Y,Pt,L,it,et,ho,io=`This is an in-graph tokenizer for GPT2. It should be initialized similarly to other tokenizers, using the
<code>from_pretrained()</code> method. It can also be initialized with the <code>from_tokenizer()</code> method, which imports settings
from an existing standard tokenizer object.`,vo,qt,wo=`In-graph tokenizers, unlike other Hugging Face tokenizers, are actually Keras layers and are designed to be run
when the model is called, rather than during preprocessing. As a result, they have somewhat more limited options
than standard tokenizer classes. They are most useful when you want to create an end-to-end model that goes
straight from <code>tf.string</code> inputs to outputs.`,lo,Qt,Ge,co,fo,bo="Creates TFGPT2Tokenizer from configurations",$o,Rt,Vt,xo,go,yo="Creates TFGPT2Tokenizer from pretrained GPT2Tokenizer",Go,Ot,Jt,kt,po,_o,ko,Po="Creates TFGPT2Tokenizer from GPT2Tokenizer",Yt,Kt,Dt;return e=new Ie({props:{title:"TFGPT2Model",local:"transformers.TFGPT2Model",headingTag:"h2"}}),n=new Q({props:{name:"class transformers.TFGPT2Model",anchor:"transformers.TFGPT2Model",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt2/modeling_tf_gpt2.py#L757"}}),_=new lt({props:{$$slots:{default:[ln]},$$scope:{ctx:$}}}),te=new Q({props:{name:"call",anchor:"transformers.TFGPT2Model.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"past_key_values",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_hidden_states",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"use_cache",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPT2Model.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPT2Model.call.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The token ids which have
their past given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.TFGPT2Model.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p>If <code>past_key_values</code> is used, <code>attention_mask</code> needs to contain the masking strategy that was used for
<code>past_key_values</code>. In other words, the <code>attention_mask</code> always has to have the length:
<code>len(past_key_values) + len(input_ids)</code></p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFGPT2Model.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFGPT2Model.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFGPT2Model.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFGPT2Model.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFGPT2Model.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFGPT2Model.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFGPT2Model.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPT2Model.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPT2Model.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFGPT2Model.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFGPT2Model.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that don&#x2019;t have
their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFGPT2Model.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt2/modeling_tf_gpt2.py#L766",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config"
>GPT2Config</a>) and inputs.</p>
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
<p><strong>hidden_states</strong> (<code>tuple(tf.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder’s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),me=new lt({props:{$$slots:{default:[dn]},$$scope:{ctx:$}}}),je=new dt({props:{anchor:"transformers.TFGPT2Model.call.example",$$slots:{default:[cn]},$$scope:{ctx:$}}}),I=new Ie({props:{title:"TFGPT2LMHeadModel",local:"transformers.TFGPT2LMHeadModel",headingTag:"h2"}}),Ce=new Q({props:{name:"class transformers.TFGPT2LMHeadModel",anchor:"transformers.TFGPT2LMHeadModel",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2LMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt2/modeling_tf_gpt2.py#L839"}}),Ze=new lt({props:{$$slots:{default:[pn]},$$scope:{ctx:$}}}),oe=new Q({props:{name:"call",anchor:"transformers.TFGPT2LMHeadModel.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"past_key_values",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_hidden_states",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"use_cache",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPT2LMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPT2LMHeadModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The token ids which have
their past given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.TFGPT2LMHeadModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p>If <code>past_key_values</code> is used, <code>attention_mask</code> needs to contain the masking strategy that was used for
<code>past_key_values</code>. In other words, the <code>attention_mask</code> always has to have the length:
<code>len(past_key_values) + len(input_ids)</code></p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFGPT2LMHeadModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFGPT2LMHeadModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFGPT2LMHeadModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFGPT2LMHeadModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFGPT2LMHeadModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFGPT2LMHeadModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFGPT2LMHeadModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPT2LMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPT2LMHeadModel.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFGPT2LMHeadModel.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFGPT2LMHeadModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that don&#x2019;t have
their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFGPT2LMHeadModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFGPT2LMHeadModel.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt2/modeling_tf_gpt2.py#L882",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config"
>GPT2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) — Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) — Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder’s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$e=new lt({props:{$$slots:{default:[mn]},$$scope:{ctx:$}}}),q=new dt({props:{anchor:"transformers.TFGPT2LMHeadModel.call.example",$$slots:{default:[un]},$$scope:{ctx:$}}}),be=new Ie({props:{title:"TFGPT2DoubleHeadsModel",local:"transformers.TFGPT2DoubleHeadsModel",headingTag:"h2"}}),De=new Q({props:{name:"class transformers.TFGPT2DoubleHeadsModel",anchor:"transformers.TFGPT2DoubleHeadsModel",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2DoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt2/modeling_tf_gpt2.py#L979"}}),Ut=new lt({props:{$$slots:{default:[hn]},$$scope:{ctx:$}}}),Ht=new Q({props:{name:"call",anchor:"transformers.TFGPT2DoubleHeadsModel.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"past_key_values",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"mc_token_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"use_cache",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPT2DoubleHeadsModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The token ids which have
their past given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p>If <code>past_key_values</code> is used, <code>attention_mask</code> needs to contain the masking strategy that was used for
<code>past_key_values</code>. In other words, the <code>attention_mask</code> always has to have the length:
<code>len(past_key_values) + len(input_ids)</code></p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPT2DoubleHeadsModel.call.mc_token_ids",description:`<strong>mc_token_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>, default to index of the last token of the input) &#x2014;
Index of the classification token in each input sequence. Selected in the range <code>[0, input_ids.size(-1) - 1]</code>.`,name:"mc_token_ids"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt2/modeling_tf_gpt2.py#L997",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput"
>transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config"
>GPT2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) — Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>mc_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) — Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).</p>
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
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput"
>transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ae=new lt({props:{$$slots:{default:[fn]},$$scope:{ctx:$}}}),Ae=new dt({props:{anchor:"transformers.TFGPT2DoubleHeadsModel.call.example",$$slots:{default:[gn]},$$scope:{ctx:$}}}),ft=new Ie({props:{title:"TFGPT2ForSequenceClassification",local:"transformers.TFGPT2ForSequenceClassification",headingTag:"h2"}}),gt=new Q({props:{name:"class transformers.TFGPT2ForSequenceClassification",anchor:"transformers.TFGPT2ForSequenceClassification",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt2/modeling_tf_gpt2.py#L1119"}}),Ve=new lt({props:{$$slots:{default:[_n]},$$scope:{ctx:$}}}),fe=new Q({props:{name:"call",anchor:"transformers.TFGPT2ForSequenceClassification.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"past_key_values",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"use_cache",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPT2ForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past_key_values</code> is <code>None</code> else <code>past_key_values[0].shape[-2]</code>
(<code>sequence_length</code> of input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past_key_values</code> is used, only input IDs that do not have their past calculated should be passed as
<code>input_ids</code>.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past_key_values</code> output below). Can be used to speed up sequential decoding. The token ids which have
their past given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p>If <code>past_key_values</code> is used, <code>attention_mask</code> needs to contain the masking strategy that was used for
<code>past_key_values</code>. In other words, the <code>attention_mask</code> always has to have the length:
<code>len(past_key_values) + len(input_ids)</code></p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPT2ForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt2/modeling_tf_gpt2.py#L1147",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config"
>GPT2Config</a>) and inputs.</p>
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
`}}),Oe=new lt({props:{$$slots:{default:[Tn]},$$scope:{ctx:$}}}),Ye=new dt({props:{anchor:"transformers.TFGPT2ForSequenceClassification.call.example",$$slots:{default:[bn]},$$scope:{ctx:$}}}),bt=new dt({props:{anchor:"transformers.TFGPT2ForSequenceClassification.call.example-2",$$slots:{default:[yn]},$$scope:{ctx:$}}}),rt=new Ie({props:{title:"TFSequenceClassifierOutputWithPast",local:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast",headingTag:"h2"}}),Ke=new Q({props:{name:"class transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast",anchor:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast",parameters:[{name:"loss",val:": tf.Tensor | None = None"},{name:"logits",val:": tf.Tensor = None"},{name:"past_key_values",val:": List[tf.Tensor] | None = None"},{name:"hidden_states",val:": Tuple[tf.Tensor] | None = None"},{name:"attentions",val:": Tuple[tf.Tensor] | None = None"}],parametersDescription:[{anchor:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification (or regression if config.num_labels==1) loss.`,name:"loss"},{anchor:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) &#x2014;
Classification (or regression if config.num_labels==1) scores (before SoftMax).`,name:"logits"},{anchor:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/modeling_tf_outputs.py#L900"}}),Y=new Ie({props:{title:"TFGPT2Tokenizer",local:"transformers.TFGPT2Tokenizer",headingTag:"h2"}}),it=new Q({props:{name:"class transformers.TFGPT2Tokenizer",anchor:"transformers.TFGPT2Tokenizer",parameters:[{name:"vocab",val:": Dict"},{name:"merges",val:": List"},{name:"max_length",val:": int = None"},{name:"pad_token_id",val:": int = None"}],parametersDescription:[{anchor:"transformers.TFGPT2Tokenizer.vocab",description:"<strong>vocab</strong> (Dict[str, int]) &#x2014; Vocabulary dict for Byte Pair Tokenizer",name:"vocab"},{anchor:"transformers.TFGPT2Tokenizer.merges",description:"<strong>merges</strong> (List[str]) &#x2014; Merges list for Byte Pair Tokenizer",name:"merges"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt2/tokenization_gpt2_tf.py#L12"}}),Ge=new Q({props:{name:"from_config",anchor:"transformers.TFGPT2Tokenizer.from_config",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2Tokenizer.from_config.config",description:"<strong>config</strong> (Dict) &#x2014; Dictionary with keys such as stated in <code>get_config</code>.",name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt2/tokenization_gpt2_tf.py#L74"}}),Vt=new Q({props:{name:"from_pretrained",anchor:"transformers.TFGPT2Tokenizer.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:": Union"},{name:"*init_inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2Tokenizer.from_pretrained.pretrained_model_name_or_path",description:"<strong>pretrained_model_name_or_path</strong> (Union[str, os.PathLike]) &#x2014; Path to pretrained model",name:"pretrained_model_name_or_path"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt2/tokenization_gpt2_tf.py#L56"}}),Ot=new dt({props:{anchor:"transformers.TFGPT2Tokenizer.from_pretrained.example",$$slots:{default:[kn]},$$scope:{ctx:$}}}),po=new Q({props:{name:"from_tokenizer",anchor:"transformers.TFGPT2Tokenizer.from_tokenizer",parameters:[{name:"tokenizer",val:": GPT2Tokenizer"},{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPT2Tokenizer.from_tokenizer.tokenizer",description:"<strong>tokenizer</strong> (GPT2Tokenizer) &#x2014;",name:"tokenizer"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt2/tokenization_gpt2_tf.py#L36"}}),Kt=new dt({props:{anchor:"transformers.TFGPT2Tokenizer.from_tokenizer.example",$$slots:{default:[Mn]},$$scope:{ctx:$}}}),{c(){b(e.$$.fragment),u=a(),o=c("div"),b(n.$$.fragment),g=a(),t=c("p"),t.textContent=T,pe=a(),J=c("p"),J.innerHTML=C,ne=a(),F=c("p"),F.innerHTML=U,se=a(),b(_.$$.fragment),j=a(),ue=c("div"),b(te.$$.fragment),At=a(),tt=c("p"),tt.innerHTML=E,pt=a(),b(me.$$.fragment),Me=a(),b(je.$$.fragment),mt=a(),b(I.$$.fragment),qe=a(),Z=c("div"),b(Ce.$$.fragment),ot=a(),ve=c("p"),ve.textContent=D,Fe=a(),Mt=c("p"),Mt.innerHTML=Ne,vt=a(),nt=c("p"),nt.innerHTML=ee,wt=a(),b(Ze.$$.fragment),he=a(),we=c("div"),b(oe.$$.fragment),ie=a(),$t=c("p"),$t.innerHTML=ze,ut=a(),b($e.$$.fragment),st=a(),b(q.$$.fragment),Te=a(),b(be.$$.fragment),xe=a(),O=c("div"),b(De.$$.fragment),W=a(),Le=c("p"),Le.textContent=at,Je=a(),P=c("p"),P.innerHTML=H,X=a(),S=c("p"),S.innerHTML=Ue,He=a(),b(Ut.$$.fragment),Nt=a(),ye=c("div"),b(Ht.$$.fragment),Be=a(),Wt=c("p"),Wt.innerHTML=xt,eo=a(),b(ae.$$.fragment),ht=a(),b(Ae.$$.fragment),jt=a(),b(ft.$$.fragment),Xt=a(),z=c("div"),b(gt.$$.fragment),to=a(),Ee=c("p"),Ee.textContent=Mo,oo=a(),re=c("p"),re.innerHTML=St,no=a(),We=c("p"),We.innerHTML=To,Zt=a(),_t=c("p"),_t.innerHTML=mo,Re=a(),Lt=c("p"),Lt.innerHTML=Tt,so=a(),b(Ve.$$.fragment),Ct=a(),N=c("div"),b(fe.$$.fragment),It=a(),Gt=c("p"),Gt.innerHTML=Et,uo=a(),b(Oe.$$.fragment),Ft=a(),b(Ye.$$.fragment),Bt=a(),b(bt.$$.fragment),ao=a(),b(rt.$$.fragment),zt=a(),yt=c("div"),b(Ke.$$.fragment),ro=a(),d=c("p"),d.textContent=x,ke=a(),b(Y.$$.fragment),Pt=a(),L=c("div"),b(it.$$.fragment),et=a(),ho=c("p"),ho.innerHTML=io,vo=a(),qt=c("p"),qt.innerHTML=wo,lo=a(),Qt=c("div"),b(Ge.$$.fragment),co=a(),fo=c("p"),fo.textContent=bo,$o=a(),Rt=c("div"),b(Vt.$$.fragment),xo=a(),go=c("p"),go.textContent=yo,Go=a(),b(Ot.$$.fragment),Jt=a(),kt=c("div"),b(po.$$.fragment),_o=a(),ko=c("p"),ko.textContent=Po,Yt=a(),b(Kt.$$.fragment),this.h()},l(h){y(e.$$.fragment,h),u=r(h),o=p(h,"DIV",{class:!0});var l=V(o);y(n.$$.fragment,l),g=r(l),t=p(l,"P",{"data-svelte-h":!0}),f(t)!=="svelte-4bubxi"&&(t.textContent=T),pe=r(l),J=p(l,"P",{"data-svelte-h":!0}),f(J)!=="svelte-1qaxm70"&&(J.innerHTML=C),ne=r(l),F=p(l,"P",{"data-svelte-h":!0}),f(F)!=="svelte-1be7e3c"&&(F.innerHTML=U),se=r(l),y(_.$$.fragment,l),j=r(l),ue=p(l,"DIV",{class:!0});var G=V(ue);y(te.$$.fragment,G),At=r(G),tt=p(G,"P",{"data-svelte-h":!0}),f(tt)!=="svelte-hbdydg"&&(tt.innerHTML=E),pt=r(G),y(me.$$.fragment,G),Me=r(G),y(je.$$.fragment,G),G.forEach(i),l.forEach(i),mt=r(h),y(I.$$.fragment,h),qe=r(h),Z=p(h,"DIV",{class:!0});var le=V(Z);y(Ce.$$.fragment,le),ot=r(le),ve=p(le,"P",{"data-svelte-h":!0}),f(ve)!=="svelte-jjb0s"&&(ve.textContent=D),Fe=r(le),Mt=p(le,"P",{"data-svelte-h":!0}),f(Mt)!=="svelte-1qaxm70"&&(Mt.innerHTML=Ne),vt=r(le),nt=p(le,"P",{"data-svelte-h":!0}),f(nt)!=="svelte-1be7e3c"&&(nt.innerHTML=ee),wt=r(le),y(Ze.$$.fragment,le),he=r(le),we=p(le,"DIV",{class:!0});var ge=V(we);y(oe.$$.fragment,ge),ie=r(ge),$t=p(ge,"P",{"data-svelte-h":!0}),f($t)!=="svelte-1eql79c"&&($t.innerHTML=ze),ut=r(ge),y($e.$$.fragment,ge),st=r(ge),y(q.$$.fragment,ge),ge.forEach(i),le.forEach(i),Te=r(h),y(be.$$.fragment,h),xe=r(h),O=p(h,"DIV",{class:!0});var de=V(O);y(De.$$.fragment,de),W=r(de),Le=p(de,"P",{"data-svelte-h":!0}),f(Le)!=="svelte-1q8023u"&&(Le.textContent=at),Je=r(de),P=p(de,"P",{"data-svelte-h":!0}),f(P)!=="svelte-1qaxm70"&&(P.innerHTML=H),X=r(de),S=p(de,"P",{"data-svelte-h":!0}),f(S)!=="svelte-1be7e3c"&&(S.innerHTML=Ue),He=r(de),y(Ut.$$.fragment,de),Nt=r(de),ye=p(de,"DIV",{class:!0});var _e=V(ye);y(Ht.$$.fragment,_e),Be=r(_e),Wt=p(_e,"P",{"data-svelte-h":!0}),f(Wt)!=="svelte-1l1pp4s"&&(Wt.innerHTML=xt),eo=r(_e),y(ae.$$.fragment,_e),ht=r(_e),y(Ae.$$.fragment,_e),_e.forEach(i),de.forEach(i),jt=r(h),y(ft.$$.fragment,h),Xt=r(h),z=p(h,"DIV",{class:!0});var K=V(z);y(gt.$$.fragment,K),to=r(K),Ee=p(K,"P",{"data-svelte-h":!0}),f(Ee)!=="svelte-1o27avp"&&(Ee.textContent=Mo),oo=r(K),re=p(K,"P",{"data-svelte-h":!0}),f(re)!=="svelte-1gpcks4"&&(re.innerHTML=St),no=r(K),We=p(K,"P",{"data-svelte-h":!0}),f(We)!=="svelte-10ugs3m"&&(We.innerHTML=To),Zt=r(K),_t=p(K,"P",{"data-svelte-h":!0}),f(_t)!=="svelte-1qaxm70"&&(_t.innerHTML=mo),Re=r(K),Lt=p(K,"P",{"data-svelte-h":!0}),f(Lt)!=="svelte-1be7e3c"&&(Lt.innerHTML=Tt),so=r(K),y(Ve.$$.fragment,K),Ct=r(K),N=p(K,"DIV",{class:!0});var ce=V(N);y(fe.$$.fragment,ce),It=r(ce),Gt=p(ce,"P",{"data-svelte-h":!0}),f(Gt)!=="svelte-1le9fl0"&&(Gt.innerHTML=Et),uo=r(ce),y(Oe.$$.fragment,ce),Ft=r(ce),y(Ye.$$.fragment,ce),Bt=r(ce),y(bt.$$.fragment,ce),ce.forEach(i),K.forEach(i),ao=r(h),y(rt.$$.fragment,h),zt=r(h),yt=p(h,"DIV",{class:!0});var Xe=V(yt);y(Ke.$$.fragment,Xe),ro=r(Xe),d=p(Xe,"P",{"data-svelte-h":!0}),f(d)!=="svelte-o4u80u"&&(d.textContent=x),Xe.forEach(i),ke=r(h),y(Y.$$.fragment,h),Pt=r(h),L=p(h,"DIV",{class:!0});var A=V(L);y(it.$$.fragment,A),et=r(A),ho=p(A,"P",{"data-svelte-h":!0}),f(ho)!=="svelte-18v5559"&&(ho.innerHTML=io),vo=r(A),qt=p(A,"P",{"data-svelte-h":!0}),f(qt)!=="svelte-p9g6"&&(qt.innerHTML=wo),lo=r(A),Qt=p(A,"DIV",{class:!0});var Se=V(Qt);y(Ge.$$.fragment,Se),co=r(Se),fo=p(Se,"P",{"data-svelte-h":!0}),f(fo)!=="svelte-wncode"&&(fo.textContent=bo),Se.forEach(i),$o=r(A),Rt=p(A,"DIV",{class:!0});var Pe=V(Rt);y(Vt.$$.fragment,Pe),xo=r(Pe),go=p(Pe,"P",{"data-svelte-h":!0}),f(go)!=="svelte-gkux83"&&(go.textContent=yo),Go=r(Pe),y(Ot.$$.fragment,Pe),Pe.forEach(i),Jt=r(A),kt=p(A,"DIV",{class:!0});var Qe=V(kt);y(po.$$.fragment,Qe),_o=r(Qe),ko=p(Qe,"P",{"data-svelte-h":!0}),f(ko)!=="svelte-12t17yb"&&(ko.textContent=Po),Yt=r(Qe),y(Kt.$$.fragment,Qe),Qe.forEach(i),A.forEach(i),this.h()},h(){B(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(h,l){k(e,h,l),m(h,u,l),m(h,o,l),k(n,o,null),s(o,g),s(o,t),s(o,pe),s(o,J),s(o,ne),s(o,F),s(o,se),k(_,o,null),s(o,j),s(o,ue),k(te,ue,null),s(ue,At),s(ue,tt),s(ue,pt),k(me,ue,null),s(ue,Me),k(je,ue,null),m(h,mt,l),k(I,h,l),m(h,qe,l),m(h,Z,l),k(Ce,Z,null),s(Z,ot),s(Z,ve),s(Z,Fe),s(Z,Mt),s(Z,vt),s(Z,nt),s(Z,wt),k(Ze,Z,null),s(Z,he),s(Z,we),k(oe,we,null),s(we,ie),s(we,$t),s(we,ut),k($e,we,null),s(we,st),k(q,we,null),m(h,Te,l),k(be,h,l),m(h,xe,l),m(h,O,l),k(De,O,null),s(O,W),s(O,Le),s(O,Je),s(O,P),s(O,X),s(O,S),s(O,He),k(Ut,O,null),s(O,Nt),s(O,ye),k(Ht,ye,null),s(ye,Be),s(ye,Wt),s(ye,eo),k(ae,ye,null),s(ye,ht),k(Ae,ye,null),m(h,jt,l),k(ft,h,l),m(h,Xt,l),m(h,z,l),k(gt,z,null),s(z,to),s(z,Ee),s(z,oo),s(z,re),s(z,no),s(z,We),s(z,Zt),s(z,_t),s(z,Re),s(z,Lt),s(z,so),k(Ve,z,null),s(z,Ct),s(z,N),k(fe,N,null),s(N,It),s(N,Gt),s(N,uo),k(Oe,N,null),s(N,Ft),k(Ye,N,null),s(N,Bt),k(bt,N,null),m(h,ao,l),k(rt,h,l),m(h,zt,l),m(h,yt,l),k(Ke,yt,null),s(yt,ro),s(yt,d),m(h,ke,l),k(Y,h,l),m(h,Pt,l),m(h,L,l),k(it,L,null),s(L,et),s(L,ho),s(L,vo),s(L,qt),s(L,lo),s(L,Qt),k(Ge,Qt,null),s(Qt,co),s(Qt,fo),s(L,$o),s(L,Rt),k(Vt,Rt,null),s(Rt,xo),s(Rt,go),s(Rt,Go),k(Ot,Rt,null),s(L,Jt),s(L,kt),k(po,kt,null),s(kt,_o),s(kt,ko),s(kt,Yt),k(Kt,kt,null),Dt=!0},p(h,l){const G={};l&2&&(G.$$scope={dirty:l,ctx:h}),_.$set(G);const le={};l&2&&(le.$$scope={dirty:l,ctx:h}),me.$set(le);const ge={};l&2&&(ge.$$scope={dirty:l,ctx:h}),je.$set(ge);const de={};l&2&&(de.$$scope={dirty:l,ctx:h}),Ze.$set(de);const _e={};l&2&&(_e.$$scope={dirty:l,ctx:h}),$e.$set(_e);const K={};l&2&&(K.$$scope={dirty:l,ctx:h}),q.$set(K);const ce={};l&2&&(ce.$$scope={dirty:l,ctx:h}),Ut.$set(ce);const Xe={};l&2&&(Xe.$$scope={dirty:l,ctx:h}),ae.$set(Xe);const A={};l&2&&(A.$$scope={dirty:l,ctx:h}),Ae.$set(A);const Se={};l&2&&(Se.$$scope={dirty:l,ctx:h}),Ve.$set(Se);const Pe={};l&2&&(Pe.$$scope={dirty:l,ctx:h}),Oe.$set(Pe);const Qe={};l&2&&(Qe.$$scope={dirty:l,ctx:h}),Ye.$set(Qe);const jo={};l&2&&(jo.$$scope={dirty:l,ctx:h}),bt.$set(jo);const Co={};l&2&&(Co.$$scope={dirty:l,ctx:h}),Ot.$set(Co);const Fo={};l&2&&(Fo.$$scope={dirty:l,ctx:h}),Kt.$set(Fo)},i(h){Dt||(M(e.$$.fragment,h),M(n.$$.fragment,h),M(_.$$.fragment,h),M(te.$$.fragment,h),M(me.$$.fragment,h),M(je.$$.fragment,h),M(I.$$.fragment,h),M(Ce.$$.fragment,h),M(Ze.$$.fragment,h),M(oe.$$.fragment,h),M($e.$$.fragment,h),M(q.$$.fragment,h),M(be.$$.fragment,h),M(De.$$.fragment,h),M(Ut.$$.fragment,h),M(Ht.$$.fragment,h),M(ae.$$.fragment,h),M(Ae.$$.fragment,h),M(ft.$$.fragment,h),M(gt.$$.fragment,h),M(Ve.$$.fragment,h),M(fe.$$.fragment,h),M(Oe.$$.fragment,h),M(Ye.$$.fragment,h),M(bt.$$.fragment,h),M(rt.$$.fragment,h),M(Ke.$$.fragment,h),M(Y.$$.fragment,h),M(it.$$.fragment,h),M(Ge.$$.fragment,h),M(Vt.$$.fragment,h),M(Ot.$$.fragment,h),M(po.$$.fragment,h),M(Kt.$$.fragment,h),Dt=!0)},o(h){v(e.$$.fragment,h),v(n.$$.fragment,h),v(_.$$.fragment,h),v(te.$$.fragment,h),v(me.$$.fragment,h),v(je.$$.fragment,h),v(I.$$.fragment,h),v(Ce.$$.fragment,h),v(Ze.$$.fragment,h),v(oe.$$.fragment,h),v($e.$$.fragment,h),v(q.$$.fragment,h),v(be.$$.fragment,h),v(De.$$.fragment,h),v(Ut.$$.fragment,h),v(Ht.$$.fragment,h),v(ae.$$.fragment,h),v(Ae.$$.fragment,h),v(ft.$$.fragment,h),v(gt.$$.fragment,h),v(Ve.$$.fragment,h),v(fe.$$.fragment,h),v(Oe.$$.fragment,h),v(Ye.$$.fragment,h),v(bt.$$.fragment,h),v(rt.$$.fragment,h),v(Ke.$$.fragment,h),v(Y.$$.fragment,h),v(it.$$.fragment,h),v(Ge.$$.fragment,h),v(Vt.$$.fragment,h),v(Ot.$$.fragment,h),v(po.$$.fragment,h),v(Kt.$$.fragment,h),Dt=!1},d(h){h&&(i(u),i(o),i(mt),i(qe),i(Z),i(Te),i(xe),i(O),i(jt),i(Xt),i(z),i(ao),i(zt),i(yt),i(ke),i(Pt),i(L)),w(e,h),w(n),w(_),w(te),w(me),w(je),w(I,h),w(Ce),w(Ze),w(oe),w($e),w(q),w(be,h),w(De),w(Ut),w(Ht),w(ae),w(Ae),w(ft,h),w(gt),w(Ve),w(fe),w(Oe),w(Ye),w(bt),w(rt,h),w(Ke),w(Y,h),w(it),w(Ge),w(Vt),w(Ot),w(po),w(Kt)}}}function wn($){let e,u;return e=new zo({props:{$$slots:{default:[vn]},$$scope:{ctx:$}}}),{c(){b(e.$$.fragment)},l(o){y(e.$$.fragment,o)},m(o,n){k(e,o,n),u=!0},p(o,n){const g={};n&2&&(g.$$scope={dirty:n,ctx:o}),e.$set(g)},i(o){u||(M(e.$$.fragment,o),u=!0)},o(o){v(e.$$.fragment,o),u=!1},d(o){w(e,o)}}}function $n($){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=c("p"),e.innerHTML=u},l(o){e=p(o,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(o,n){m(o,e,n)},p:R,d(o){o&&i(e)}}}function xn($){let e,u="Example:",o,n,g;return n=new ct({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4R1BUMk1vZGVsJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyb3BlbmFpLWNvbW11bml0eSUyRmdwdDIlMjIpJTBBbW9kZWwlMjAlM0QlMjBGbGF4R1BUMk1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJvcGVuYWktY29tbXVuaXR5JTJGZ3B0MiUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIyamF4JTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEFsYXN0X2hpZGRlbl9zdGF0ZXMlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRl",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxGPT2Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxGPT2Model.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,o=a(),b(n.$$.fragment)},l(t){e=p(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=u),o=r(t),y(n.$$.fragment,t)},m(t,T){m(t,e,T),m(t,o,T),k(n,t,T),g=!0},p:R,i(t){g||(M(n.$$.fragment,t),g=!0)},o(t){v(n.$$.fragment,t),g=!1},d(t){t&&(i(e),i(o)),w(n,t)}}}function Gn($){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=c("p"),e.innerHTML=u},l(o){e=p(o,"P",{"data-svelte-h":!0}),f(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(o,n){m(o,e,n)},p:R,d(o){o&&i(e)}}}function Pn($){let e,u="Example:",o,n,g;return n=new ct({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4R1BUMkxNSGVhZE1vZGVsJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyb3BlbmFpLWNvbW11bml0eSUyRmdwdDIlMjIpJTBBbW9kZWwlMjAlM0QlMjBGbGF4R1BUMkxNSGVhZE1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJvcGVuYWktY29tbXVuaXR5JTJGZ3B0MiUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIybnAlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQSUyMyUyMHJldHJpZXZlJTIwbG9ndHMlMjBmb3IlMjBuZXh0JTIwdG9rZW4lMEFuZXh0X3Rva2VuX2xvZ2l0cyUyMCUzRCUyMG91dHB1dHMubG9naXRzJTVCJTNBJTJDJTIwLTElNUQ=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxGPT2LMHeadModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxGPT2LMHeadModel.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve logts for next token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`,wrap:!1}}),{c(){e=c("p"),e.textContent=u,o=a(),b(n.$$.fragment)},l(t){e=p(t,"P",{"data-svelte-h":!0}),f(e)!=="svelte-11lpom8"&&(e.textContent=u),o=r(t),y(n.$$.fragment,t)},m(t,T){m(t,e,T),m(t,o,T),k(n,t,T),g=!0},p:R,i(t){g||(M(n.$$.fragment,t),g=!0)},o(t){v(n.$$.fragment,t),g=!1},d(t){t&&(i(e),i(o)),w(n,t)}}}function jn($){let e,u,o,n,g,t,T="The bare GPT2 Model transformer outputting raw hidden-states without any specific head on top.",pe,J,C=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,ne,F,U=`This model is also a Flax Linen
<a href="https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html" rel="nofollow">flax.nn.Module</a> subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`,se,_,j="Finally, this model supports inherent JAX features such as:",ue,te,At='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',tt,E,pt,me,Me,je="The <code>FlaxGPT2PreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",mt,I,qe,Z,Ce,ot,ve,D,Fe,Mt,Ne,vt=`The GPT2 Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`,nt,ee,wt=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Ze,he,we=`This model is also a Flax Linen
<a href="https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html" rel="nofollow">flax.nn.Module</a> subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`,oe,ie,$t="Finally, this model supports inherent JAX features such as:",ze,ut,$e='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',st,q,Te,be,xe,O="The <code>FlaxGPT2PreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",De,W,Le,at,Je;return e=new Ie({props:{title:"FlaxGPT2Model",local:"transformers.FlaxGPT2Model",headingTag:"h2"}}),n=new Q({props:{name:"class transformers.FlaxGPT2Model",anchor:"transformers.FlaxGPT2Model",parameters:[{name:"config",val:": GPT2Config"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxGPT2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPT2Model.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt2/modeling_flax_gpt2.py#L661"}}),pt=new Q({props:{name:"__call__",anchor:"transformers.FlaxGPT2Model.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FlaxGPT2Model.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxGPT2Model.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxGPT2Model.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxGPT2Model.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxGPT2Model.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxGPT2Model.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxGPT2Model.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt2/modeling_flax_gpt2.py#L456",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config"
>GPT2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — Tuple of <code>tuple(jnp.ndarray)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder’s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),I=new lt({props:{$$slots:{default:[$n]},$$scope:{ctx:$}}}),Z=new dt({props:{anchor:"transformers.FlaxGPT2Model.__call__.example",$$slots:{default:[xn]},$$scope:{ctx:$}}}),ot=new Ie({props:{title:"FlaxGPT2LMHeadModel",local:"transformers.FlaxGPT2LMHeadModel",headingTag:"h2"}}),Fe=new Q({props:{name:"class transformers.FlaxGPT2LMHeadModel",anchor:"transformers.FlaxGPT2LMHeadModel",parameters:[{name:"config",val:": GPT2Config"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxGPT2LMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config">GPT2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPT2LMHeadModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt2/modeling_flax_gpt2.py#L735"}}),Te=new Q({props:{name:"__call__",anchor:"transformers.FlaxGPT2LMHeadModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.FlaxGPT2LMHeadModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxGPT2LMHeadModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxGPT2LMHeadModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxGPT2LMHeadModel.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxGPT2LMHeadModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxGPT2LMHeadModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxGPT2LMHeadModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt2/modeling_flax_gpt2.py#L456",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Config"
>GPT2Config</a>) and inputs.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — Tuple of <code>jnp.ndarray</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key, value
states of the self-attention and the cross-attention layers if model is used in encoder-decoder setting.
Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),W=new lt({props:{$$slots:{default:[Gn]},$$scope:{ctx:$}}}),at=new dt({props:{anchor:"transformers.FlaxGPT2LMHeadModel.__call__.example",$$slots:{default:[Pn]},$$scope:{ctx:$}}}),{c(){b(e.$$.fragment),u=a(),o=c("div"),b(n.$$.fragment),g=a(),t=c("p"),t.textContent=T,pe=a(),J=c("p"),J.innerHTML=C,ne=a(),F=c("p"),F.innerHTML=U,se=a(),_=c("p"),_.textContent=j,ue=a(),te=c("ul"),te.innerHTML=At,tt=a(),E=c("div"),b(pt.$$.fragment),me=a(),Me=c("p"),Me.innerHTML=je,mt=a(),b(I.$$.fragment),qe=a(),b(Z.$$.fragment),Ce=a(),b(ot.$$.fragment),ve=a(),D=c("div"),b(Fe.$$.fragment),Mt=a(),Ne=c("p"),Ne.textContent=vt,nt=a(),ee=c("p"),ee.innerHTML=wt,Ze=a(),he=c("p"),he.innerHTML=we,oe=a(),ie=c("p"),ie.textContent=$t,ze=a(),ut=c("ul"),ut.innerHTML=$e,st=a(),q=c("div"),b(Te.$$.fragment),be=a(),xe=c("p"),xe.innerHTML=O,De=a(),b(W.$$.fragment),Le=a(),b(at.$$.fragment),this.h()},l(P){y(e.$$.fragment,P),u=r(P),o=p(P,"DIV",{class:!0});var H=V(o);y(n.$$.fragment,H),g=r(H),t=p(H,"P",{"data-svelte-h":!0}),f(t)!=="svelte-4bubxi"&&(t.textContent=T),pe=r(H),J=p(H,"P",{"data-svelte-h":!0}),f(J)!=="svelte-18ki9f4"&&(J.innerHTML=C),ne=r(H),F=p(H,"P",{"data-svelte-h":!0}),f(F)!=="svelte-idybz1"&&(F.innerHTML=U),se=r(H),_=p(H,"P",{"data-svelte-h":!0}),f(_)!=="svelte-1pplc4a"&&(_.textContent=j),ue=r(H),te=p(H,"UL",{"data-svelte-h":!0}),f(te)!=="svelte-1w7z84m"&&(te.innerHTML=At),tt=r(H),E=p(H,"DIV",{class:!0});var X=V(E);y(pt.$$.fragment,X),me=r(X),Me=p(X,"P",{"data-svelte-h":!0}),f(Me)!=="svelte-1dafdvs"&&(Me.innerHTML=je),mt=r(X),y(I.$$.fragment,X),qe=r(X),y(Z.$$.fragment,X),X.forEach(i),H.forEach(i),Ce=r(P),y(ot.$$.fragment,P),ve=r(P),D=p(P,"DIV",{class:!0});var S=V(D);y(Fe.$$.fragment,S),Mt=r(S),Ne=p(S,"P",{"data-svelte-h":!0}),f(Ne)!=="svelte-jjb0s"&&(Ne.textContent=vt),nt=r(S),ee=p(S,"P",{"data-svelte-h":!0}),f(ee)!=="svelte-18ki9f4"&&(ee.innerHTML=wt),Ze=r(S),he=p(S,"P",{"data-svelte-h":!0}),f(he)!=="svelte-idybz1"&&(he.innerHTML=we),oe=r(S),ie=p(S,"P",{"data-svelte-h":!0}),f(ie)!=="svelte-1pplc4a"&&(ie.textContent=$t),ze=r(S),ut=p(S,"UL",{"data-svelte-h":!0}),f(ut)!=="svelte-1w7z84m"&&(ut.innerHTML=$e),st=r(S),q=p(S,"DIV",{class:!0});var Ue=V(q);y(Te.$$.fragment,Ue),be=r(Ue),xe=p(Ue,"P",{"data-svelte-h":!0}),f(xe)!=="svelte-1dafdvs"&&(xe.innerHTML=O),De=r(Ue),y(W.$$.fragment,Ue),Le=r(Ue),y(at.$$.fragment,Ue),Ue.forEach(i),S.forEach(i),this.h()},h(){B(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(P,H){k(e,P,H),m(P,u,H),m(P,o,H),k(n,o,null),s(o,g),s(o,t),s(o,pe),s(o,J),s(o,ne),s(o,F),s(o,se),s(o,_),s(o,ue),s(o,te),s(o,tt),s(o,E),k(pt,E,null),s(E,me),s(E,Me),s(E,mt),k(I,E,null),s(E,qe),k(Z,E,null),m(P,Ce,H),k(ot,P,H),m(P,ve,H),m(P,D,H),k(Fe,D,null),s(D,Mt),s(D,Ne),s(D,nt),s(D,ee),s(D,Ze),s(D,he),s(D,oe),s(D,ie),s(D,ze),s(D,ut),s(D,st),s(D,q),k(Te,q,null),s(q,be),s(q,xe),s(q,De),k(W,q,null),s(q,Le),k(at,q,null),Je=!0},p(P,H){const X={};H&2&&(X.$$scope={dirty:H,ctx:P}),I.$set(X);const S={};H&2&&(S.$$scope={dirty:H,ctx:P}),Z.$set(S);const Ue={};H&2&&(Ue.$$scope={dirty:H,ctx:P}),W.$set(Ue);const He={};H&2&&(He.$$scope={dirty:H,ctx:P}),at.$set(He)},i(P){Je||(M(e.$$.fragment,P),M(n.$$.fragment,P),M(pt.$$.fragment,P),M(I.$$.fragment,P),M(Z.$$.fragment,P),M(ot.$$.fragment,P),M(Fe.$$.fragment,P),M(Te.$$.fragment,P),M(W.$$.fragment,P),M(at.$$.fragment,P),Je=!0)},o(P){v(e.$$.fragment,P),v(n.$$.fragment,P),v(pt.$$.fragment,P),v(I.$$.fragment,P),v(Z.$$.fragment,P),v(ot.$$.fragment,P),v(Fe.$$.fragment,P),v(Te.$$.fragment,P),v(W.$$.fragment,P),v(at.$$.fragment,P),Je=!1},d(P){P&&(i(u),i(o),i(Ce),i(ve),i(D)),w(e,P),w(n),w(pt),w(I),w(Z),w(ot,P),w(Fe),w(Te),w(W),w(at)}}}function Cn($){let e,u;return e=new zo({props:{$$slots:{default:[jn]},$$scope:{ctx:$}}}),{c(){b(e.$$.fragment)},l(o){y(e.$$.fragment,o)},m(o,n){k(e,o,n),u=!0},p(o,n){const g={};n&2&&(g.$$scope={dirty:n,ctx:o}),e.$set(g)},i(o){u||(M(e.$$.fragment,o),u=!0)},o(o){v(e.$$.fragment,o),u=!1},d(o){w(e,o)}}}function Fn($){let e,u,o,n,g,t,T,pe='<a href="https://huggingface.co/models?filter=gpt2"><img alt="Models" src="https://img.shields.io/badge/All_model_pages-gpt2-blueviolet"/></a> <a href="https://huggingface.co/spaces/docs-demos/gpt2"><img alt="Spaces" src="https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Spaces-blue"/></a>',J,C,ne,F,U=`OpenAI GPT-2 model was proposed in <a href="https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf" rel="nofollow">Language Models are Unsupervised Multitask Learners</a> by Alec
Radford, Jeffrey Wu, Rewon Child, David Luan, Dario Amodei and Ilya Sutskever from <a href="https://huggingface.co/openai" rel="nofollow">OpenAI</a>. It’s a causal (unidirectional)
transformer pretrained using language modeling on a very large corpus of ~40 GB of text data.`,se,_,j="The abstract from the paper is the following:",ue,te,At=`<em>GPT-2 is a large transformer-based language model with 1.5 billion parameters, trained on a dataset[1] of 8 million
web pages. GPT-2 is trained with a simple objective: predict the next word, given all of the previous words within some
text. The diversity of the dataset causes this simple goal to contain naturally occurring demonstrations of many tasks
across diverse domains. GPT-2 is a direct scale-up of GPT, with more than 10X the parameters and trained on more than
10X the amount of data.</em>`,tt,E,pt=`<a href="https://transformer.huggingface.co/doc/gpt2-large" rel="nofollow">Write With Transformer</a> is a webapp created and hosted by
Hugging Face showcasing the generative capabilities of several models. GPT-2 is one of them and is available in five
different sizes: small, medium, large, xl and a distilled version of the small checkpoint: <em>distilgpt-2</em>.`,me,Me,je='This model was contributed by <a href="https://huggingface.co/thomwolf" rel="nofollow">thomwolf</a>. The original code can be found <a href="https://openai.com/blog/better-language-models/" rel="nofollow">here</a>.',mt,I,qe,Z,Ce=`<li>GPT-2 is a model with absolute position embeddings so it’s usually advised to pad the inputs on the right rather than
the left.</li> <li>GPT-2 was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the <em>run_generation.py</em> example script.</li> <li>The model can take the <em>past_key_values</em> (for PyTorch) or <em>past</em> (for TF) as input, which is the previously computed
key/value attention pairs. Using this (<em>past_key_values</em> or <em>past</em>) value prevents the model from re-computing
pre-computed values in the context of text generation. For PyTorch, see <em>past_key_values</em> argument of the
<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Model.forward">GPT2Model.forward()</a> method, or for TF the <em>past</em> argument of the
<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.TFGPT2Model.call">TFGPT2Model.call()</a> method for more information on its usage.</li> <li>Enabling the <em>scale_attn_by_inverse_layer_idx</em> and <em>reorder_and_upcast_attn</em> flags will apply the training stability
improvements from <a href="https://github.com/stanford-crfm/mistral/" rel="nofollow">Mistral</a> (for PyTorch only).</li>`,ot,ve,D,Fe,Mt="A list of official Hugging Face and community (indicated by 🌎) resources to help you get started with GPT2. If you’re interested in submitting a resource to be included here, please feel free to open a Pull Request and we’ll review it! The resource should ideally demonstrate something new instead of duplicating an existing resource.",Ne,vt,nt,ee,wt='<li>A blog on how to <a href="https://www.philschmid.de/fine-tune-a-non-english-gpt-2-model-with-huggingface" rel="nofollow">Finetune a non-English GPT-2 Model with Hugging Face</a>.</li> <li>A blog on <a href="https://huggingface.co/blog/how-to-generate" rel="nofollow">How to generate text: using different decoding methods for language generation with Transformers</a> with GPT-2.</li> <li>A blog on <a href="https://huggingface.co/blog/codeparrot" rel="nofollow">Training CodeParrot 🦜 from Scratch</a>, a large GPT-2 model.</li> <li>A blog on <a href="https://huggingface.co/blog/tf-xla-generate" rel="nofollow">Faster Text Generation with TensorFlow and XLA</a> with GPT-2.</li> <li>A blog on <a href="https://huggingface.co/blog/megatron-training" rel="nofollow">How to train a Language Model with Megatron-LM</a> with a GPT-2 model.</li> <li>A notebook on how to <a href="https://colab.research.google.com/github/AlekseyKorshuk/huggingartists/blob/master/huggingartists-demo.ipynb" rel="nofollow">finetune GPT2 to generate lyrics in the style of your favorite artist</a>. 🌎</li> <li>A notebook on how to <a href="https://colab.research.google.com/github/borisdayma/huggingtweets/blob/master/huggingtweets-demo.ipynb" rel="nofollow">finetune GPT2 to generate tweets in the style of your favorite Twitter user</a>. 🌎</li> <li><a href="https://huggingface.co/course/en/chapter7/6?fw=pt#training-a-causal-language-model-from-scratch" rel="nofollow">Causal language modeling</a> chapter of the 🤗 Hugging Face Course.</li> <li><a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2LMHeadModel">GPT2LMHeadModel</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/pytorch/language-modeling#gpt-2gpt-and-causal-language-modeling" rel="nofollow">causal language modeling example script</a>, <a href="https://github.com/huggingface/transformers/tree/main/examples/pytorch/text-generation" rel="nofollow">text generation example script</a>, and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/language_modeling.ipynb" rel="nofollow">notebook</a>.</li> <li><a href="/docs/transformers/main/en/model_doc/gpt2#transformers.TFGPT2LMHeadModel">TFGPT2LMHeadModel</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/tensorflow/language-modeling#run_clmpy" rel="nofollow">causal language modeling example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/language_modeling-tf.ipynb" rel="nofollow">notebook</a>.</li> <li><a href="/docs/transformers/main/en/model_doc/gpt2#transformers.FlaxGPT2LMHeadModel">FlaxGPT2LMHeadModel</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/flax/language-modeling#causal-language-modeling" rel="nofollow">causal language modeling example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/causal_language_modeling_flax.ipynb" rel="nofollow">notebook</a>.</li> <li><a href="../tasks/sequence_classification">Text classification task guide</a></li> <li><a href="../tasks/token_classification">Token classification task guide</a></li> <li><a href="../tasks/language_modeling">Causal language modeling task guide</a></li>',Ze,he,we,oe,ie,$t,ze,ut=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Model">GPT2Model</a> or a <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.TFGPT2Model">TFGPT2Model</a>. It is used to
instantiate a GPT-2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the GPT-2
<a href="https://huggingface.co/openai-community/gpt2" rel="nofollow">openai-community/gpt2</a> architecture.`,$e,st,q=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,Te,be,xe,O,De,W,Le,at,Je,P="Construct a GPT-2 tokenizer. Based on byte-level Byte-Pair-Encoding.",H,X,S="This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will",Ue,He,Ut,Nt,ye=`You can get around that behavior by passing <code>add_prefix_space=True</code> when instantiating this tokenizer or when you
call it on some text, but since the model was not pretrained this way, it might yield a decrease in performance.`,Ht,Be,Wt,xt,eo=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`,ae,ht,Ae,jt,ft,Xt,z,gt,to,Ee,Mo=`Construct a “fast” GPT-2 tokenizer (backed by HuggingFace’s <em>tokenizers</em> library). Based on byte-level
Byte-Pair-Encoding.`,oo,re,St="This tokenizer has been trained to treat spaces like parts of the tokens (a bit like sentencepiece) so a word will",no,We,To,Zt,_t=`You can get around that behavior by passing <code>add_prefix_space=True</code> when instantiating this tokenizer, but since
the model was not pretrained this way, it might yield a decrease in performance.`,mo,Re,Lt,Tt,so=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a> which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`,Ve,Ct,N,fe,It,Gt,Et,uo="Base class for outputs of models predicting if two sentences are consecutive or not.",Oe,Ft,Ye,Bt,bt,ao="Base class for outputs of models predicting if two sentences are consecutive or not.",rt,zt,yt,Ke,ro;return g=new Ie({props:{title:"OpenAI GPT2",local:"openai-gpt2",headingTag:"h1"}}),C=new Ie({props:{title:"Overview",local:"overview",headingTag:"h2"}}),I=new Ie({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),ve=new Ie({props:{title:"Resources",local:"resources",headingTag:"h2"}}),vt=new No({props:{pipeline:"text-generation"}}),he=new Ie({props:{title:"GPT2Config",local:"transformers.GPT2Config",headingTag:"h2"}}),ie=new Q({props:{name:"class transformers.GPT2Config",anchor:"transformers.GPT2Config",parameters:[{name:"vocab_size",val:" = 50257"},{name:"n_positions",val:" = 1024"},{name:"n_embd",val:" = 768"},{name:"n_layer",val:" = 12"},{name:"n_head",val:" = 12"},{name:"n_inner",val:" = None"},{name:"activation_function",val:" = 'gelu_new'"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"scale_attn_weights",val:" = True"},{name:"use_cache",val:" = True"},{name:"bos_token_id",val:" = 50256"},{name:"eos_token_id",val:" = 50256"},{name:"scale_attn_by_inverse_layer_idx",val:" = False"},{name:"reorder_and_upcast_attn",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPT2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50257) &#x2014;
Vocabulary size of the GPT-2 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2Model">GPT2Model</a> or <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.TFGPT2Model">TFGPT2Model</a>.`,name:"vocab_size"},{anchor:"transformers.GPT2Config.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"n_positions"},{anchor:"transformers.GPT2Config.n_embd",description:`<strong>n_embd</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the embeddings and hidden states.`,name:"n_embd"},{anchor:"transformers.GPT2Config.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.GPT2Config.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.GPT2Config.n_inner",description:`<strong>n_inner</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Dimensionality of the inner feed-forward layers. <code>None</code> will set it to 4 times n_embd`,name:"n_inner"},{anchor:"transformers.GPT2Config.activation_function",description:`<strong>activation_function</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;gelu_new&quot;</code>) &#x2014;
Activation function, to be selected in the list <code>[&quot;relu&quot;, &quot;silu&quot;, &quot;gelu&quot;, &quot;tanh&quot;, &quot;gelu_new&quot;]</code>.`,name:"activation_function"},{anchor:"transformers.GPT2Config.resid_pdrop",description:`<strong>resid_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"resid_pdrop"},{anchor:"transformers.GPT2Config.embd_pdrop",description:`<strong>embd_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the embeddings.`,name:"embd_pdrop"},{anchor:"transformers.GPT2Config.attn_pdrop",description:`<strong>attn_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention.`,name:"attn_pdrop"},{anchor:"transformers.GPT2Config.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-05) &#x2014;
The epsilon to use in the layer normalization layers.`,name:"layer_norm_epsilon"},{anchor:"transformers.GPT2Config.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.GPT2Config.summary_type",description:`<strong>summary_type</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;cls_index&quot;</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a> and
<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel">TFGPT2DoubleHeadsModel</a>.</p>
<p>Has to be one of the following options:</p>
<ul>
<li><code>&quot;last&quot;</code>: Take the last token hidden state (like XLNet).</li>
<li><code>&quot;first&quot;</code>: Take the first token hidden state (like BERT).</li>
<li><code>&quot;mean&quot;</code>: Take the mean of all tokens hidden states.</li>
<li><code>&quot;cls_index&quot;</code>: Supply a Tensor of classification token position (like GPT/GPT-2).</li>
<li><code>&quot;attn&quot;</code>: Not implemented now, use multi-head attention.</li>
</ul>`,name:"summary_type"},{anchor:"transformers.GPT2Config.summary_use_proj",description:`<strong>summary_use_proj</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a> and
<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel">TFGPT2DoubleHeadsModel</a>.</p>
<p>Whether or not to add a projection after the vector extraction.`,name:"summary_use_proj"},{anchor:"transformers.GPT2Config.summary_activation",description:`<strong>summary_activation</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Argument used when doing sequence summary. Used in for the multiple choice head in
<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a>.</p>
<p>Pass <code>&quot;tanh&quot;</code> for a tanh activation to the output, any other value will result in no activation.`,name:"summary_activation"},{anchor:"transformers.GPT2Config.summary_proj_to_labels",description:`<strong>summary_proj_to_labels</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a> and
<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel">TFGPT2DoubleHeadsModel</a>.</p>
<p>Whether the projection outputs should have <code>config.num_labels</code> or <code>config.hidden_size</code> classes.`,name:"summary_proj_to_labels"},{anchor:"transformers.GPT2Config.summary_first_dropout",description:`<strong>summary_first_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/main/en/model_doc/gpt2#transformers.GPT2DoubleHeadsModel">GPT2DoubleHeadsModel</a> and
<a href="/docs/transformers/main/en/model_doc/gpt2#transformers.TFGPT2DoubleHeadsModel">TFGPT2DoubleHeadsModel</a>.</p>
<p>The dropout ratio to be used after the projection and activation.`,name:"summary_first_dropout"},{anchor:"transformers.GPT2Config.scale_attn_weights",description:`<strong>scale_attn_weights</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Scale attention weights by dividing by sqrt(hidden_size)..`,name:"scale_attn_weights"},{anchor:"transformers.GPT2Config.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.GPT2Config.bos_token_id",description:`<strong>bos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 50256) &#x2014;
Id of the beginning of sentence token in the vocabulary.`,name:"bos_token_id"},{anchor:"transformers.GPT2Config.eos_token_id",description:`<strong>eos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 50256) &#x2014;
Id of the end of sentence token in the vocabulary.`,name:"eos_token_id"},{anchor:"transformers.GPT2Config.scale_attn_by_inverse_layer_idx",description:`<strong>scale_attn_by_inverse_layer_idx</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to additionally scale attention weights by <code>1 / layer_idx + 1</code>.`,name:"scale_attn_by_inverse_layer_idx"},{anchor:"transformers.GPT2Config.reorder_and_upcast_attn",description:`<strong>reorder_and_upcast_attn</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to scale keys (K) prior to computing attention (dot-product) and upcast attention
dot-product/softmax to float() when training with mixed precision.`,name:"reorder_and_upcast_attn"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt2/configuration_gpt2.py#L37"}}),be=new dt({props:{anchor:"transformers.GPT2Config.example",$$slots:{default:[Zo]},$$scope:{ctx:$}}}),O=new Ie({props:{title:"GPT2Tokenizer",local:"transformers.GPT2Tokenizer",headingTag:"h2"}}),Le=new Q({props:{name:"class transformers.GPT2Tokenizer",anchor:"transformers.GPT2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"pad_token",val:" = None"},{name:"add_prefix_space",val:" = False"},{name:"add_bos_token",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPT2Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.GPT2Tokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.GPT2Tokenizer.errors",description:`<strong>errors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;replace&quot;</code>) &#x2014;
Paradigm to follow when decoding bytes to UTF-8. See
<a href="https://docs.python.org/3/library/stdtypes.html#bytes.decode" rel="nofollow">bytes.decode</a> for more information.`,name:"errors"},{anchor:"transformers.GPT2Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;|endoftext|&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.GPT2Tokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;|endoftext|&gt;&quot;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.GPT2Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;|endoftext|&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.GPT2Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.GPT2Tokenizer.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (GPT2 tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"},{anchor:"transformers.GPT2Tokenizer.add_bos_token",description:`<strong>add_bos_token</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial beginning of sentence token to the input. This allows to treat the leading
word just as any other word.`,name:"add_bos_token"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt2/tokenization_gpt2.py#L101"}}),He=new dt({props:{anchor:"transformers.GPT2Tokenizer.example",$$slots:{default:[Lo]},$$scope:{ctx:$}}}),Be=new lt({props:{$$slots:{default:[Bo]},$$scope:{ctx:$}}}),Ae=new Q({props:{name:"save_vocabulary",anchor:"transformers.GPT2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt2/tokenization_gpt2.py#L326"}}),ft=new Ie({props:{title:"GPT2TokenizerFast",local:"transformers.GPT2TokenizerFast",headingTag:"h2"}}),gt=new Q({props:{name:"class transformers.GPT2TokenizerFast",anchor:"transformers.GPT2TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<|endoftext|>'"},{name:"bos_token",val:" = '<|endoftext|>'"},{name:"eos_token",val:" = '<|endoftext|>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPT2TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.GPT2TokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.GPT2TokenizerFast.tokenizer_file",description:`<strong>tokenizer_file</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Path to <a href="https://github.com/huggingface/tokenizers" rel="nofollow">tokenizers</a> file (generally has a .json extension) that
contains everything needed to load the tokenizer.`,name:"tokenizer_file"},{anchor:"transformers.GPT2TokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;|endoftext|&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.GPT2TokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;|endoftext|&gt;&quot;</code>) &#x2014;
The beginning of sequence token.`,name:"bos_token"},{anchor:"transformers.GPT2TokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;|endoftext|&gt;&quot;</code>) &#x2014;
The end of sequence token.`,name:"eos_token"},{anchor:"transformers.GPT2TokenizerFast.add_prefix_space",description:`<strong>add_prefix_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add an initial space to the input. This allows to treat the leading word just as any
other word. (GPT2 tokenizer detect beginning of words by the preceding space).`,name:"add_prefix_space"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt2/tokenization_gpt2_fast.py#L66"}}),We=new dt({props:{anchor:"transformers.GPT2TokenizerFast.example",$$slots:{default:[Ro]},$$scope:{ctx:$}}}),Re=new lt({props:{$$slots:{default:[Vo]},$$scope:{ctx:$}}}),Ct=new Ie({props:{title:"GPT2 specific outputs",local:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput",headingTag:"h2"}}),It=new Q({props:{name:"class transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput",anchor:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput",parameters:[{name:"loss",val:": Optional = None"},{name:"mc_loss",val:": Optional = None"},{name:"logits",val:": FloatTensor = None"},{name:"mc_logits",val:": FloatTensor = None"},{name:"past_key_values",val:": Optional = None"},{name:"hidden_states",val:": Optional = None"},{name:"attentions",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss.`,name:"loss"},{anchor:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput.mc_loss",description:`<strong>mc_loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>mc_labels</code> is provided) &#x2014;
Multiple choice classification loss.`,name:"mc_loss"},{anchor:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput.mc_logits",description:`<strong>mc_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).`,name:"mc_logits"},{anchor:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[torch.Tensor]]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of length <code>config.n_layers</code>, containing tuples of tensors of shape <code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>GPT2Attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads.`,name:"attentions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt2/modeling_gpt2.py#L484"}}),Ye=new Q({props:{name:"class transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput",anchor:"transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput",parameters:[{name:"logits",val:": tf.Tensor = None"},{name:"mc_logits",val:": tf.Tensor = None"},{name:"past_key_values",val:": List[tf.Tensor] | None = None"},{name:"hidden_states",val:": Tuple[tf.Tensor] | None = None"},{name:"attentions",val:": Tuple[tf.Tensor] | None = None"}],parametersDescription:[{anchor:"transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput.mc_logits",description:`<strong>mc_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).`,name:"mc_logits"},{anchor:"transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.gpt2.modeling_tf_gpt2.TFGPT2DoubleHeadsModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/gpt2/modeling_tf_gpt2.py#L611"}}),zt=new qo({props:{pytorch:!0,tensorflow:!0,jax:!0,$$slots:{jax:[Cn],tensorflow:[wn],pytorch:[rn]},$$scope:{ctx:$}}}),{c(){e=c("meta"),u=a(),o=c("p"),n=a(),b(g.$$.fragment),t=a(),T=c("div"),T.innerHTML=pe,J=a(),b(C.$$.fragment),ne=a(),F=c("p"),F.innerHTML=U,se=a(),_=c("p"),_.textContent=j,ue=a(),te=c("p"),te.innerHTML=At,tt=a(),E=c("p"),E.innerHTML=pt,me=a(),Me=c("p"),Me.innerHTML=je,mt=a(),b(I.$$.fragment),qe=a(),Z=c("ul"),Z.innerHTML=Ce,ot=a(),b(ve.$$.fragment),D=a(),Fe=c("p"),Fe.textContent=Mt,Ne=a(),b(vt.$$.fragment),nt=a(),ee=c("ul"),ee.innerHTML=wt,Ze=a(),b(he.$$.fragment),we=a(),oe=c("div"),b(ie.$$.fragment),$t=a(),ze=c("p"),ze.innerHTML=ut,$e=a(),st=c("p"),st.innerHTML=q,Te=a(),b(be.$$.fragment),xe=a(),b(O.$$.fragment),De=a(),W=c("div"),b(Le.$$.fragment),at=a(),Je=c("p"),Je.textContent=P,H=a(),X=c("p"),X.textContent=S,Ue=a(),b(He.$$.fragment),Ut=a(),Nt=c("p"),Nt.innerHTML=ye,Ht=a(),b(Be.$$.fragment),Wt=a(),xt=c("p"),xt.innerHTML=eo,ae=a(),ht=c("div"),b(Ae.$$.fragment),jt=a(),b(ft.$$.fragment),Xt=a(),z=c("div"),b(gt.$$.fragment),to=a(),Ee=c("p"),Ee.innerHTML=Mo,oo=a(),re=c("p"),re.textContent=St,no=a(),b(We.$$.fragment),To=a(),Zt=c("p"),Zt.innerHTML=_t,mo=a(),b(Re.$$.fragment),Lt=a(),Tt=c("p"),Tt.innerHTML=so,Ve=a(),b(Ct.$$.fragment),N=a(),fe=c("div"),b(It.$$.fragment),Gt=a(),Et=c("p"),Et.textContent=uo,Oe=a(),Ft=c("div"),b(Ye.$$.fragment),Bt=a(),bt=c("p"),bt.textContent=ao,rt=a(),b(zt.$$.fragment),yt=a(),Ke=c("p"),this.h()},l(d){const x=Io("svelte-u9bgzb",document.head);e=p(x,"META",{name:!0,content:!0}),x.forEach(i),u=r(d),o=p(d,"P",{}),V(o).forEach(i),n=r(d),y(g.$$.fragment,d),t=r(d),T=p(d,"DIV",{class:!0,"data-svelte-h":!0}),f(T)!=="svelte-4g1z5g"&&(T.innerHTML=pe),J=r(d),y(C.$$.fragment,d),ne=r(d),F=p(d,"P",{"data-svelte-h":!0}),f(F)!=="svelte-c6xejo"&&(F.innerHTML=U),se=r(d),_=p(d,"P",{"data-svelte-h":!0}),f(_)!=="svelte-vfdo9a"&&(_.textContent=j),ue=r(d),te=p(d,"P",{"data-svelte-h":!0}),f(te)!=="svelte-pd1qkn"&&(te.innerHTML=At),tt=r(d),E=p(d,"P",{"data-svelte-h":!0}),f(E)!=="svelte-n4e01i"&&(E.innerHTML=pt),me=r(d),Me=p(d,"P",{"data-svelte-h":!0}),f(Me)!=="svelte-8g2i8b"&&(Me.innerHTML=je),mt=r(d),y(I.$$.fragment,d),qe=r(d),Z=p(d,"UL",{"data-svelte-h":!0}),f(Z)!=="svelte-12cc9ze"&&(Z.innerHTML=Ce),ot=r(d),y(ve.$$.fragment,d),D=r(d),Fe=p(d,"P",{"data-svelte-h":!0}),f(Fe)!=="svelte-1h22540"&&(Fe.textContent=Mt),Ne=r(d),y(vt.$$.fragment,d),nt=r(d),ee=p(d,"UL",{"data-svelte-h":!0}),f(ee)!=="svelte-18t0abx"&&(ee.innerHTML=wt),Ze=r(d),y(he.$$.fragment,d),we=r(d),oe=p(d,"DIV",{class:!0});var ke=V(oe);y(ie.$$.fragment,ke),$t=r(ke),ze=p(ke,"P",{"data-svelte-h":!0}),f(ze)!=="svelte-18dz6jc"&&(ze.innerHTML=ut),$e=r(ke),st=p(ke,"P",{"data-svelte-h":!0}),f(st)!=="svelte-o55m63"&&(st.innerHTML=q),Te=r(ke),y(be.$$.fragment,ke),ke.forEach(i),xe=r(d),y(O.$$.fragment,d),De=r(d),W=p(d,"DIV",{class:!0});var Y=V(W);y(Le.$$.fragment,Y),at=r(Y),Je=p(Y,"P",{"data-svelte-h":!0}),f(Je)!=="svelte-1tnpexf"&&(Je.textContent=P),H=r(Y),X=p(Y,"P",{"data-svelte-h":!0}),f(X)!=="svelte-1s077p3"&&(X.textContent=S),Ue=r(Y),y(He.$$.fragment,Y),Ut=r(Y),Nt=p(Y,"P",{"data-svelte-h":!0}),f(Nt)!=="svelte-1jfcabo"&&(Nt.innerHTML=ye),Ht=r(Y),y(Be.$$.fragment,Y),Wt=r(Y),xt=p(Y,"P",{"data-svelte-h":!0}),f(xt)!=="svelte-1c3t5ty"&&(xt.innerHTML=eo),ae=r(Y),ht=p(Y,"DIV",{class:!0});var Pt=V(ht);y(Ae.$$.fragment,Pt),Pt.forEach(i),Y.forEach(i),jt=r(d),y(ft.$$.fragment,d),Xt=r(d),z=p(d,"DIV",{class:!0});var L=V(z);y(gt.$$.fragment,L),to=r(L),Ee=p(L,"P",{"data-svelte-h":!0}),f(Ee)!=="svelte-115toia"&&(Ee.innerHTML=Mo),oo=r(L),re=p(L,"P",{"data-svelte-h":!0}),f(re)!=="svelte-1s077p3"&&(re.textContent=St),no=r(L),y(We.$$.fragment,L),To=r(L),Zt=p(L,"P",{"data-svelte-h":!0}),f(Zt)!=="svelte-1afeqmz"&&(Zt.innerHTML=_t),mo=r(L),y(Re.$$.fragment,L),Lt=r(L),Tt=p(L,"P",{"data-svelte-h":!0}),f(Tt)!=="svelte-fh0aq"&&(Tt.innerHTML=so),L.forEach(i),Ve=r(d),y(Ct.$$.fragment,d),N=r(d),fe=p(d,"DIV",{class:!0});var it=V(fe);y(It.$$.fragment,it),Gt=r(it),Et=p(it,"P",{"data-svelte-h":!0}),f(Et)!=="svelte-1bm2i0r"&&(Et.textContent=uo),it.forEach(i),Oe=r(d),Ft=p(d,"DIV",{class:!0});var et=V(Ft);y(Ye.$$.fragment,et),Bt=r(et),bt=p(et,"P",{"data-svelte-h":!0}),f(bt)!=="svelte-1bm2i0r"&&(bt.textContent=ao),et.forEach(i),rt=r(d),y(zt.$$.fragment,d),yt=r(d),Ke=p(d,"P",{}),V(Ke).forEach(i),this.h()},h(){B(e,"name","hf:doc:metadata"),B(e,"content",zn),B(T,"class","flex flex-wrap space-x-1"),B(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(d,x){s(document.head,e),m(d,u,x),m(d,o,x),m(d,n,x),k(g,d,x),m(d,t,x),m(d,T,x),m(d,J,x),k(C,d,x),m(d,ne,x),m(d,F,x),m(d,se,x),m(d,_,x),m(d,ue,x),m(d,te,x),m(d,tt,x),m(d,E,x),m(d,me,x),m(d,Me,x),m(d,mt,x),k(I,d,x),m(d,qe,x),m(d,Z,x),m(d,ot,x),k(ve,d,x),m(d,D,x),m(d,Fe,x),m(d,Ne,x),k(vt,d,x),m(d,nt,x),m(d,ee,x),m(d,Ze,x),k(he,d,x),m(d,we,x),m(d,oe,x),k(ie,oe,null),s(oe,$t),s(oe,ze),s(oe,$e),s(oe,st),s(oe,Te),k(be,oe,null),m(d,xe,x),k(O,d,x),m(d,De,x),m(d,W,x),k(Le,W,null),s(W,at),s(W,Je),s(W,H),s(W,X),s(W,Ue),k(He,W,null),s(W,Ut),s(W,Nt),s(W,Ht),k(Be,W,null),s(W,Wt),s(W,xt),s(W,ae),s(W,ht),k(Ae,ht,null),m(d,jt,x),k(ft,d,x),m(d,Xt,x),m(d,z,x),k(gt,z,null),s(z,to),s(z,Ee),s(z,oo),s(z,re),s(z,no),k(We,z,null),s(z,To),s(z,Zt),s(z,mo),k(Re,z,null),s(z,Lt),s(z,Tt),m(d,Ve,x),k(Ct,d,x),m(d,N,x),m(d,fe,x),k(It,fe,null),s(fe,Gt),s(fe,Et),m(d,Oe,x),m(d,Ft,x),k(Ye,Ft,null),s(Ft,Bt),s(Ft,bt),m(d,rt,x),k(zt,d,x),m(d,yt,x),m(d,Ke,x),ro=!0},p(d,[x]){const ke={};x&2&&(ke.$$scope={dirty:x,ctx:d}),be.$set(ke);const Y={};x&2&&(Y.$$scope={dirty:x,ctx:d}),He.$set(Y);const Pt={};x&2&&(Pt.$$scope={dirty:x,ctx:d}),Be.$set(Pt);const L={};x&2&&(L.$$scope={dirty:x,ctx:d}),We.$set(L);const it={};x&2&&(it.$$scope={dirty:x,ctx:d}),Re.$set(it);const et={};x&2&&(et.$$scope={dirty:x,ctx:d}),zt.$set(et)},i(d){ro||(M(g.$$.fragment,d),M(C.$$.fragment,d),M(I.$$.fragment,d),M(ve.$$.fragment,d),M(vt.$$.fragment,d),M(he.$$.fragment,d),M(ie.$$.fragment,d),M(be.$$.fragment,d),M(O.$$.fragment,d),M(Le.$$.fragment,d),M(He.$$.fragment,d),M(Be.$$.fragment,d),M(Ae.$$.fragment,d),M(ft.$$.fragment,d),M(gt.$$.fragment,d),M(We.$$.fragment,d),M(Re.$$.fragment,d),M(Ct.$$.fragment,d),M(It.$$.fragment,d),M(Ye.$$.fragment,d),M(zt.$$.fragment,d),ro=!0)},o(d){v(g.$$.fragment,d),v(C.$$.fragment,d),v(I.$$.fragment,d),v(ve.$$.fragment,d),v(vt.$$.fragment,d),v(he.$$.fragment,d),v(ie.$$.fragment,d),v(be.$$.fragment,d),v(O.$$.fragment,d),v(Le.$$.fragment,d),v(He.$$.fragment,d),v(Be.$$.fragment,d),v(Ae.$$.fragment,d),v(ft.$$.fragment,d),v(gt.$$.fragment,d),v(We.$$.fragment,d),v(Re.$$.fragment,d),v(Ct.$$.fragment,d),v(It.$$.fragment,d),v(Ye.$$.fragment,d),v(zt.$$.fragment,d),ro=!1},d(d){d&&(i(u),i(o),i(n),i(t),i(T),i(J),i(ne),i(F),i(se),i(_),i(ue),i(te),i(tt),i(E),i(me),i(Me),i(mt),i(qe),i(Z),i(ot),i(D),i(Fe),i(Ne),i(nt),i(ee),i(Ze),i(we),i(oe),i(xe),i(De),i(W),i(jt),i(Xt),i(z),i(Ve),i(N),i(fe),i(Oe),i(Ft),i(rt),i(yt),i(Ke)),i(e),w(g,d),w(C,d),w(I,d),w(ve,d),w(vt,d),w(he,d),w(ie),w(be),w(O,d),w(Le),w(He),w(Be),w(Ae),w(ft,d),w(gt),w(We),w(Re),w(Ct,d),w(It),w(Ye),w(zt,d)}}}const zn='{"title":"OpenAI GPT2","local":"openai-gpt2","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"GPT2Config","local":"transformers.GPT2Config","sections":[],"depth":2},{"title":"GPT2Tokenizer","local":"transformers.GPT2Tokenizer","sections":[],"depth":2},{"title":"GPT2TokenizerFast","local":"transformers.GPT2TokenizerFast","sections":[],"depth":2},{"title":"GPT2 specific outputs","local":"transformers.models.gpt2.modeling_gpt2.GPT2DoubleHeadsModelOutput","sections":[],"depth":2},{"title":"GPT2Model","local":"transformers.GPT2Model","sections":[],"depth":2},{"title":"GPT2LMHeadModel","local":"transformers.GPT2LMHeadModel","sections":[],"depth":2},{"title":"GPT2DoubleHeadsModel","local":"transformers.GPT2DoubleHeadsModel","sections":[],"depth":2},{"title":"GPT2ForQuestionAnswering","local":"transformers.GPT2ForQuestionAnswering","sections":[],"depth":2},{"title":"GPT2ForSequenceClassification","local":"transformers.GPT2ForSequenceClassification","sections":[],"depth":2},{"title":"GPT2ForTokenClassification","local":"transformers.GPT2ForTokenClassification","sections":[],"depth":2},{"title":"TFGPT2Model","local":"transformers.TFGPT2Model","sections":[],"depth":2},{"title":"TFGPT2LMHeadModel","local":"transformers.TFGPT2LMHeadModel","sections":[],"depth":2},{"title":"TFGPT2DoubleHeadsModel","local":"transformers.TFGPT2DoubleHeadsModel","sections":[],"depth":2},{"title":"TFGPT2ForSequenceClassification","local":"transformers.TFGPT2ForSequenceClassification","sections":[],"depth":2},{"title":"TFSequenceClassifierOutputWithPast","local":"transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast","sections":[],"depth":2},{"title":"TFGPT2Tokenizer","local":"transformers.TFGPT2Tokenizer","sections":[],"depth":2},{"title":"FlaxGPT2Model","local":"transformers.FlaxGPT2Model","sections":[],"depth":2},{"title":"FlaxGPT2LMHeadModel","local":"transformers.FlaxGPT2LMHeadModel","sections":[],"depth":2}],"depth":1}';function Jn($){return Uo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Rn extends Ho{constructor(e){super(),Wo(this,e,Jn,Fn,Jo,{})}}export{Rn as component};
