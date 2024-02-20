import{s as Un,o as Wn,n as J}from"../chunks/scheduler.9bc65507.js";import{S as Zn,i as In,g as d,s as r,r as b,A as qn,h as c,f as l,c as i,j as U,u as y,x as u,k as W,y as s,a as m,v as T,d as M,t as k,w}from"../chunks/index.707bf1b6.js";import{T as be}from"../chunks/Tip.c2ecdbf4.js";import{D as Z}from"../chunks/Docstring.17db21ae.js";import{C as Te}from"../chunks/CodeBlock.54a9f38d.js";import{F as Hn,M as Pn}from"../chunks/Markdown.fef84341.js";import{E as ye}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as xe}from"../chunks/Heading.342b1fa6.js";function Vn($){let e,p="Examples:",t,a,g;return a=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFJvYmVydGFQcmVMYXllck5vcm1Db25maWclMkMlMjBSb2JlcnRhUHJlTGF5ZXJOb3JtTW9kZWwlMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwUm9CRVJUYS1QcmVMYXllck5vcm0lMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMFJvYmVydGFQcmVMYXllck5vcm1Db25maWcoKSUwQSUwQSUyMyUyMEluaXRpYWxpemluZyUyMGElMjBtb2RlbCUyMCh3aXRoJTIwcmFuZG9tJTIwd2VpZ2h0cyklMjBmcm9tJTIwdGhlJTIwY29uZmlndXJhdGlvbiUwQW1vZGVsJTIwJTNEJTIwUm9iZXJ0YVByZUxheWVyTm9ybU1vZGVsKGNvbmZpZ3VyYXRpb24pJTBBJTBBJTIzJTIwQWNjZXNzaW5nJTIwdGhlJTIwbW9kZWwlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMG1vZGVsLmNvbmZpZw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaPreLayerNormConfig, RobertaPreLayerNormModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a RoBERTa-PreLayerNorm configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = RobertaPreLayerNormConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaPreLayerNormModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){e=d("p"),e.textContent=p,t=r(),b(a.$$.fragment)},l(o){e=c(o,"P",{"data-svelte-h":!0}),u(e)!=="svelte-kvfsh7"&&(e.textContent=p),t=i(o),y(a.$$.fragment,o)},m(o,_){m(o,e,_),m(o,t,_),T(a,o,_),g=!0},p:J,i(o){g||(M(a.$$.fragment,o),g=!0)},o(o){k(a.$$.fragment,o),g=!1},d(o){o&&(l(e),l(t)),w(a,o)}}}function Gn($){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=p},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(t,a){m(t,e,a)},p:J,d(t){t&&l(e)}}}function Bn($){let e,p="Example:",t,a,g;return a=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBSb2JlcnRhUHJlTGF5ZXJOb3JtTW9kZWwlMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmFuZHJlYXNtYWRzZW4lMkZlZmZpY2llbnRfbWxtX20wLjQwJTIyKSUwQW1vZGVsJTIwJTNEJTIwUm9iZXJ0YVByZUxheWVyTm9ybU1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJhbmRyZWFzbWFkc2VuJTJGZWZmaWNpZW50X21sbV9tMC40MCUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQWxhc3RfaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, RobertaPreLayerNormModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaPreLayerNormModel.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=d("p"),e.textContent=p,t=r(),b(a.$$.fragment)},l(o){e=c(o,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=p),t=i(o),y(a.$$.fragment,o)},m(o,_){m(o,e,_),m(o,t,_),T(a,o,_),g=!0},p:J,i(o){g||(M(a.$$.fragment,o),g=!0)},o(o){k(a.$$.fragment,o),g=!1},d(o){o&&(l(e),l(t)),w(a,o)}}}function Xn($){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=p},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(t,a){m(t,e,a)},p:J,d(t){t&&l(e)}}}function An($){let e,p="Example:",t,a,g;return a=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBSb2JlcnRhUHJlTGF5ZXJOb3JtRm9yQ2F1c2FsTE0lMkMlMjBBdXRvQ29uZmlnJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJhbmRyZWFzbWFkc2VuJTJGZWZmaWNpZW50X21sbV9tMC40MCUyMiklMEFjb25maWclMjAlM0QlMjBBdXRvQ29uZmlnLmZyb21fcHJldHJhaW5lZCglMjJhbmRyZWFzbWFkc2VuJTJGZWZmaWNpZW50X21sbV9tMC40MCUyMiklMEFjb25maWcuaXNfZGVjb2RlciUyMCUzRCUyMFRydWUlMEFtb2RlbCUyMCUzRCUyMFJvYmVydGFQcmVMYXllck5vcm1Gb3JDYXVzYWxMTS5mcm9tX3ByZXRyYWluZWQoJTIyYW5kcmVhc21hZHNlbiUyRmVmZmljaWVudF9tbG1fbTAuNDAlMjIlMkMlMjBjb25maWclM0Rjb25maWcpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEFwcmVkaWN0aW9uX2xvZ2l0cyUyMCUzRCUyMG91dHB1dHMubG9naXRz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, RobertaPreLayerNormForCausalLM, AutoConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = AutoConfig.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaPreLayerNormForCausalLM.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`,wrap:!1}}),{c(){e=d("p"),e.textContent=p,t=r(),b(a.$$.fragment)},l(o){e=c(o,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=p),t=i(o),y(a.$$.fragment,o)},m(o,_){m(o,e,_),m(o,t,_),T(a,o,_),g=!0},p:J,i(o){g||(M(a.$$.fragment,o),g=!0)},o(o){k(a.$$.fragment,o),g=!1},d(o){o&&(l(e),l(t)),w(a,o)}}}function Qn($){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=p},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(t,a){m(t,e,a)},p:J,d(t){t&&l(e)}}}function Sn($){let e,p="Example:",t,a,g;return a=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBSb2JlcnRhUHJlTGF5ZXJOb3JtRm9yTWFza2VkTE0lMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmFuZHJlYXNtYWRzZW4lMkZlZmZpY2llbnRfbWxtX20wLjQwJTIyKSUwQW1vZGVsJTIwJTNEJTIwUm9iZXJ0YVByZUxheWVyTm9ybUZvck1hc2tlZExNLmZyb21fcHJldHJhaW5lZCglMjJhbmRyZWFzbWFkc2VuJTJGZWZmaWNpZW50X21sbV9tMC40MCUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIyVGhlJTIwY2FwaXRhbCUyMG9mJTIwRnJhbmNlJTIwaXMlMjAlM0NtYXNrJTNFLiUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEElMjMlMjByZXRyaWV2ZSUyMGluZGV4JTIwb2YlMjAlM0NtYXNrJTNFJTBBbWFza190b2tlbl9pbmRleCUyMCUzRCUyMChpbnB1dHMuaW5wdXRfaWRzJTIwJTNEJTNEJTIwdG9rZW5pemVyLm1hc2tfdG9rZW5faWQpJTVCMCU1RC5ub256ZXJvKGFzX3R1cGxlJTNEVHJ1ZSklNUIwJTVEJTBBJTBBcHJlZGljdGVkX3Rva2VuX2lkJTIwJTNEJTIwbG9naXRzJTVCMCUyQyUyMG1hc2tfdG9rZW5faW5kZXglNUQuYXJnbWF4KGF4aXMlM0QtMSklMEF0b2tlbml6ZXIuZGVjb2RlKHByZWRpY3RlZF90b2tlbl9pZCklMEElMEFsYWJlbHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIyVGhlJTIwY2FwaXRhbCUyMG9mJTIwRnJhbmNlJTIwaXMlMjBQYXJpcy4lMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSU1QiUyMmlucHV0X2lkcyUyMiU1RCUwQSUyMyUyMG1hc2slMjBsYWJlbHMlMjBvZiUyMG5vbi0lM0NtYXNrJTNFJTIwdG9rZW5zJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2gud2hlcmUoaW5wdXRzLmlucHV0X2lkcyUyMCUzRCUzRCUyMHRva2VuaXplci5tYXNrX3Rva2VuX2lkJTJDJTIwbGFiZWxzJTJDJTIwLTEwMCklMEElMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMlMkMlMjBsYWJlbHMlM0RsYWJlbHMpJTBBcm91bmQob3V0cHV0cy5sb3NzLml0ZW0oKSUyQyUyMDIp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, RobertaPreLayerNormForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaPreLayerNormForMaskedLM.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27; Paris&#x27;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.69</span>`,wrap:!1}}),{c(){e=d("p"),e.textContent=p,t=r(),b(a.$$.fragment)},l(o){e=c(o,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=p),t=i(o),y(a.$$.fragment,o)},m(o,_){m(o,e,_),m(o,t,_),T(a,o,_),g=!0},p:J,i(o){g||(M(a.$$.fragment,o),g=!0)},o(o){k(a.$$.fragment,o),g=!1},d(o){o&&(l(e),l(t)),w(a,o)}}}function En($){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=p},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(t,a){m(t,e,a)},p:J,d(t){t&&l(e)}}}function Yn($){let e,p="Example of single-label classification:",t,a,g;return a=new Te({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMFJvYmVydGFQcmVMYXllck5vcm1Gb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyYW5kcmVhc21hZHNlbiUyRmVmZmljaWVudF9tbG1fbTAuNDAlMjIpJTBBbW9kZWwlMjAlM0QlMjBSb2JlcnRhUHJlTGF5ZXJOb3JtRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyYW5kcmVhc21hZHNlbiUyRmVmZmljaWVudF9tbG1fbTAuNDAlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX2NsYXNzX2lkJTIwJTNEJTIwbG9naXRzLmFyZ21heCgpLml0ZW0oKSUwQSUwQSUyMyUyMFRvJTIwdHJhaW4lMjBhJTIwbW9kZWwlMjBvbiUyMCU2MG51bV9sYWJlbHMlNjAlMjBjbGFzc2VzJTJDJTIweW91JTIwY2FuJTIwcGFzcyUyMCU2MG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTYwJTIwdG8lMjAlNjAuZnJvbV9wcmV0cmFpbmVkKC4uLiklNjAlMEFudW1fbGFiZWxzJTIwJTNEJTIwbGVuKG1vZGVsLmNvbmZpZy5pZDJsYWJlbCklMEFtb2RlbCUyMCUzRCUyMFJvYmVydGFQcmVMYXllck5vcm1Gb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJhbmRyZWFzbWFkc2VuJTJGZWZmaWNpZW50X21sbV9tMC40MCUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzKSUwQSUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxJTVEKSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, RobertaPreLayerNormForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaPreLayerNormForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaPreLayerNormForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=d("p"),e.textContent=p,t=r(),b(a.$$.fragment)},l(o){e=c(o,"P",{"data-svelte-h":!0}),u(e)!=="svelte-ykxpe4"&&(e.textContent=p),t=i(o),y(a.$$.fragment,o)},m(o,_){m(o,e,_),m(o,t,_),T(a,o,_),g=!0},p:J,i(o){g||(M(a.$$.fragment,o),g=!0)},o(o){k(a.$$.fragment,o),g=!1},d(o){o&&(l(e),l(t)),w(a,o)}}}function On($){let e,p="Example of multi-label classification:",t,a,g;return a=new Te({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMFJvYmVydGFQcmVMYXllck5vcm1Gb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyYW5kcmVhc21hZHNlbiUyRmVmZmljaWVudF9tbG1fbTAuNDAlMjIpJTBBbW9kZWwlMjAlM0QlMjBSb2JlcnRhUHJlTGF5ZXJOb3JtRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyYW5kcmVhc21hZHNlbiUyRmVmZmljaWVudF9tbG1fbTAuNDAlMjIlMkMlMjBwcm9ibGVtX3R5cGUlM0QlMjJtdWx0aV9sYWJlbF9jbGFzc2lmaWNhdGlvbiUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEFwcmVkaWN0ZWRfY2xhc3NfaWRzJTIwJTNEJTIwdG9yY2guYXJhbmdlKDAlMkMlMjBsb2dpdHMuc2hhcGUlNUItMSU1RCklNUJ0b3JjaC5zaWdtb2lkKGxvZ2l0cykuc3F1ZWV6ZShkaW0lM0QwKSUyMCUzRSUyMDAuNSU1RCUwQSUwQSUyMyUyMFRvJTIwdHJhaW4lMjBhJTIwbW9kZWwlMjBvbiUyMCU2MG51bV9sYWJlbHMlNjAlMjBjbGFzc2VzJTJDJTIweW91JTIwY2FuJTIwcGFzcyUyMCU2MG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTYwJTIwdG8lMjAlNjAuZnJvbV9wcmV0cmFpbmVkKC4uLiklNjAlMEFudW1fbGFiZWxzJTIwJTNEJTIwbGVuKG1vZGVsLmNvbmZpZy5pZDJsYWJlbCklMEFtb2RlbCUyMCUzRCUyMFJvYmVydGFQcmVMYXllck5vcm1Gb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMEElMjAlMjAlMjAlMjAlMjJhbmRyZWFzbWFkc2VuJTJGZWZmaWNpZW50X21sbV9tMC40MCUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIlMEEpJTBBJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2guc3VtKCUwQSUyMCUyMCUyMCUyMHRvcmNoLm5uLmZ1bmN0aW9uYWwub25lX2hvdChwcmVkaWN0ZWRfY2xhc3NfaWRzJTVCTm9uZSUyQyUyMCUzQSU1RC5jbG9uZSgpJTJDJTIwbnVtX2NsYXNzZXMlM0RudW1fbGFiZWxzKSUyQyUyMGRpbSUzRDElMEEpLnRvKHRvcmNoLmZsb2F0KSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, RobertaPreLayerNormForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaPreLayerNormForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.arange(<span class="hljs-number">0</span>, logits.shape[-<span class="hljs-number">1</span>])[torch.sigmoid(logits).squeeze(dim=<span class="hljs-number">0</span>) &gt; <span class="hljs-number">0.5</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaPreLayerNormForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.<span class="hljs-built_in">sum</span>(
<span class="hljs-meta">... </span>    torch.nn.functional.one_hot(predicted_class_ids[<span class="hljs-literal">None</span>, :].clone(), num_classes=num_labels), dim=<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>).to(torch.<span class="hljs-built_in">float</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=d("p"),e.textContent=p,t=r(),b(a.$$.fragment)},l(o){e=c(o,"P",{"data-svelte-h":!0}),u(e)!=="svelte-1l8e32d"&&(e.textContent=p),t=i(o),y(a.$$.fragment,o)},m(o,_){m(o,e,_),m(o,t,_),T(a,o,_),g=!0},p:J,i(o){g||(M(a.$$.fragment,o),g=!0)},o(o){k(a.$$.fragment,o),g=!1},d(o){o&&(l(e),l(t)),w(a,o)}}}function Dn($){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=p},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(t,a){m(t,e,a)},p:J,d(t){t&&l(e)}}}function Kn($){let e,p="Example:",t,a,g;return a=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBSb2JlcnRhUHJlTGF5ZXJOb3JtRm9yTXVsdGlwbGVDaG9pY2UlMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmFuZHJlYXNtYWRzZW4lMkZlZmZpY2llbnRfbWxtX20wLjQwJTIyKSUwQW1vZGVsJTIwJTNEJTIwUm9iZXJ0YVByZUxheWVyTm9ybUZvck11bHRpcGxlQ2hvaWNlLmZyb21fcHJldHJhaW5lZCglMjJhbmRyZWFzbWFkc2VuJTJGZWZmaWNpZW50X21sbV9tMC40MCUyMiklMEElMEFwcm9tcHQlMjAlM0QlMjAlMjJJbiUyMEl0YWx5JTJDJTIwcGl6emElMjBzZXJ2ZWQlMjBpbiUyMGZvcm1hbCUyMHNldHRpbmdzJTJDJTIwc3VjaCUyMGFzJTIwYXQlMjBhJTIwcmVzdGF1cmFudCUyQyUyMGlzJTIwcHJlc2VudGVkJTIwdW5zbGljZWQuJTIyJTBBY2hvaWNlMCUyMCUzRCUyMCUyMkl0JTIwaXMlMjBlYXRlbiUyMHdpdGglMjBhJTIwZm9yayUyMGFuZCUyMGElMjBrbmlmZS4lMjIlMEFjaG9pY2UxJTIwJTNEJTIwJTIySXQlMjBpcyUyMGVhdGVuJTIwd2hpbGUlMjBoZWxkJTIwaW4lMjB0aGUlMjBoYW5kLiUyMiUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvcigwKS51bnNxdWVlemUoMCklMjAlMjAlMjMlMjBjaG9pY2UwJTIwaXMlMjBjb3JyZWN0JTIwKGFjY29yZGluZyUyMHRvJTIwV2lraXBlZGlhJTIwJTNCKSklMkMlMjBiYXRjaCUyMHNpemUlMjAxJTBBJTBBZW5jb2RpbmclMjAlM0QlMjB0b2tlbml6ZXIoJTVCcHJvbXB0JTJDJTIwcHJvbXB0JTVEJTJDJTIwJTVCY2hvaWNlMCUyQyUyMGNob2ljZTElNUQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTJDJTIwcGFkZGluZyUzRFRydWUpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqJTdCayUzQSUyMHYudW5zcXVlZXplKDApJTIwZm9yJTIwayUyQyUyMHYlMjBpbiUyMGVuY29kaW5nLml0ZW1zKCklN0QlMkMlMjBsYWJlbHMlM0RsYWJlbHMpJTIwJTIwJTIzJTIwYmF0Y2glMjBzaXplJTIwaXMlMjAxJTBBJTBBJTIzJTIwdGhlJTIwbGluZWFyJTIwY2xhc3NpZmllciUyMHN0aWxsJTIwbmVlZHMlMjB0byUyMGJlJTIwdHJhaW5lZCUwQWxvc3MlMjAlM0QlMjBvdXRwdXRzLmxvc3MlMEFsb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, RobertaPreLayerNormForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaPreLayerNormForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=d("p"),e.textContent=p,t=r(),b(a.$$.fragment)},l(o){e=c(o,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=p),t=i(o),y(a.$$.fragment,o)},m(o,_){m(o,e,_),m(o,t,_),T(a,o,_),g=!0},p:J,i(o){g||(M(a.$$.fragment,o),g=!0)},o(o){k(a.$$.fragment,o),g=!1},d(o){o&&(l(e),l(t)),w(a,o)}}}function ea($){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=p},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(t,a){m(t,e,a)},p:J,d(t){t&&l(e)}}}function ta($){let e,p="Example:",t,a,g;return a=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBSb2JlcnRhUHJlTGF5ZXJOb3JtRm9yVG9rZW5DbGFzc2lmaWNhdGlvbiUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyYW5kcmVhc21hZHNlbiUyRmVmZmljaWVudF9tbG1fbTAuNDAlMjIpJTBBbW9kZWwlMjAlM0QlMjBSb2JlcnRhUHJlTGF5ZXJOb3JtRm9yVG9rZW5DbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyYW5kcmVhc21hZHNlbiUyRmVmZmljaWVudF9tbG1fbTAuNDAlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUwQSUyMCUyMCUyMCUyMCUyMkh1Z2dpbmdGYWNlJTIwaXMlMjBhJTIwY29tcGFueSUyMGJhc2VkJTIwaW4lMjBQYXJpcyUyMGFuZCUyME5ldyUyMFlvcmslMjIlMkMlMjBhZGRfc3BlY2lhbF90b2tlbnMlM0RGYWxzZSUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIlMEEpJTBBJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEFwcmVkaWN0ZWRfdG9rZW5fY2xhc3NfaWRzJTIwJTNEJTIwbG9naXRzLmFyZ21heCgtMSklMEElMEElMjMlMjBOb3RlJTIwdGhhdCUyMHRva2VucyUyMGFyZSUyMGNsYXNzaWZpZWQlMjByYXRoZXIlMjB0aGVuJTIwaW5wdXQlMjB3b3JkcyUyMHdoaWNoJTIwbWVhbnMlMjB0aGF0JTBBJTIzJTIwdGhlcmUlMjBtaWdodCUyMGJlJTIwbW9yZSUyMHByZWRpY3RlZCUyMHRva2VuJTIwY2xhc3NlcyUyMHRoYW4lMjB3b3Jkcy4lMEElMjMlMjBNdWx0aXBsZSUyMHRva2VuJTIwY2xhc3NlcyUyMG1pZ2h0JTIwYWNjb3VudCUyMGZvciUyMHRoZSUyMHNhbWUlMjB3b3JkJTBBcHJlZGljdGVkX3Rva2Vuc19jbGFzc2VzJTIwJTNEJTIwJTVCbW9kZWwuY29uZmlnLmlkMmxhYmVsJTVCdC5pdGVtKCklNUQlMjBmb3IlMjB0JTIwaW4lMjBwcmVkaWN0ZWRfdG9rZW5fY2xhc3NfaWRzJTVCMCU1RCU1RCUwQSUwQWxhYmVscyUyMCUzRCUyMHByZWRpY3RlZF90b2tlbl9jbGFzc19pZHMlMEFsb3NzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMlMkMlMjBsYWJlbHMlM0RsYWJlbHMpLmxvc3M=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, RobertaPreLayerNormForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaPreLayerNormForTokenClassification.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=d("p"),e.textContent=p,t=r(),b(a.$$.fragment)},l(o){e=c(o,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=p),t=i(o),y(a.$$.fragment,o)},m(o,_){m(o,e,_),m(o,t,_),T(a,o,_),g=!0},p:J,i(o){g||(M(a.$$.fragment,o),g=!0)},o(o){k(a.$$.fragment,o),g=!1},d(o){o&&(l(e),l(t)),w(a,o)}}}function oa($){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=p},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(t,a){m(t,e,a)},p:J,d(t){t&&l(e)}}}function na($){let e,p="Example:",t,a,g;return a=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBSb2JlcnRhUHJlTGF5ZXJOb3JtRm9yUXVlc3Rpb25BbnN3ZXJpbmclMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmFuZHJlYXNtYWRzZW4lMkZlZmZpY2llbnRfbWxtX20wLjQwJTIyKSUwQW1vZGVsJTIwJTNEJTIwUm9iZXJ0YVByZUxheWVyTm9ybUZvclF1ZXN0aW9uQW5zd2VyaW5nLmZyb21fcHJldHJhaW5lZCglMjJhbmRyZWFzbWFkc2VuJTJGZWZmaWNpZW50X21sbV9tMC40MCUyMiklMEElMEFxdWVzdGlvbiUyQyUyMHRleHQlMjAlM0QlMjAlMjJXaG8lMjB3YXMlMjBKaW0lMjBIZW5zb24lM0YlMjIlMkMlMjAlMjJKaW0lMjBIZW5zb24lMjB3YXMlMjBhJTIwbmljZSUyMHB1cHBldCUyMiUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplcihxdWVzdGlvbiUyQyUyMHRleHQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBYW5zd2VyX3N0YXJ0X2luZGV4JTIwJTNEJTIwb3V0cHV0cy5zdGFydF9sb2dpdHMuYXJnbWF4KCklMEFhbnN3ZXJfZW5kX2luZGV4JTIwJTNEJTIwb3V0cHV0cy5lbmRfbG9naXRzLmFyZ21heCgpJTBBJTBBcHJlZGljdF9hbnN3ZXJfdG9rZW5zJTIwJTNEJTIwaW5wdXRzLmlucHV0X2lkcyU1QjAlMkMlMjBhbnN3ZXJfc3RhcnRfaW5kZXglMjAlM0ElMjBhbnN3ZXJfZW5kX2luZGV4JTIwJTJCJTIwMSU1RCUwQSUwQSUyMyUyMHRhcmdldCUyMGlzJTIwJTIybmljZSUyMHB1cHBldCUyMiUwQXRhcmdldF9zdGFydF9pbmRleCUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxNCU1RCklMEF0YXJnZXRfZW5kX2luZGV4JTIwJTNEJTIwdG9yY2gudGVuc29yKCU1QjE1JTVEKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMHN0YXJ0X3Bvc2l0aW9ucyUzRHRhcmdldF9zdGFydF9pbmRleCUyQyUyMGVuZF9wb3NpdGlvbnMlM0R0YXJnZXRfZW5kX2luZGV4KSUwQWxvc3MlMjAlM0QlMjBvdXRwdXRzLmxvc3M=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, RobertaPreLayerNormForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaPreLayerNormForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`,wrap:!1}}),{c(){e=d("p"),e.textContent=p,t=r(),b(a.$$.fragment)},l(o){e=c(o,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=p),t=i(o),y(a.$$.fragment,o)},m(o,_){m(o,e,_),m(o,t,_),T(a,o,_),g=!0},p:J,i(o){g||(M(a.$$.fragment,o),g=!0)},o(o){k(a.$$.fragment,o),g=!1},d(o){o&&(l(e),l(t)),w(a,o)}}}function aa($){let e,p,t,a,g,o,_="The bare RoBERTa-PreLayerNorm Model transformer outputting raw hidden-states without any specific head on top.",V,j,L=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,G,C,R=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,B,f,N=`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in <em>Attention is
all you need</em>_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`,Le,ce,Go=`To behave as an decoder the model needs to be initialized with the <code>is_decoder</code> argument of the configuration set
to <code>True</code>. To be used in a Seq2Seq model, the model needs to initialized with both <code>is_decoder</code> argument and
<code>add_cross_attention</code> set to <code>True</code>; an <code>encoder_hidden_states</code> is then expected as an input to the forward pass.`,pt,se,ut='.. _<em>Attention is all you need</em>: <a href="https://arxiv.org/abs/1706.03762" rel="nofollow">https://arxiv.org/abs/1706.03762</a>',Pe,Me,ze,rt,pe,ht='The <a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormModel">RobertaPreLayerNormModel</a> forward method, overrides the <code>__call__</code> special method.',Re,ke,He,te,z,fe,ft,E,Wt,it,Ue,Zt="RoBERTa-PreLayerNorm Model with a <code>language modeling</code> head on top for CLM fine-tuning.",Et,re,so=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,X,we,ro=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,gt,F,P,ve,je,_o='The <a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormForCausalLM">RobertaPreLayerNormForCausalLM</a> forward method, overrides the <code>__call__</code> special method.',bo,vt,dn,Ke,It,$e,et,We,Ae,Eo,ie,_t="RoBERTa-PreLayerNorm Model with a <code>language modeling</code> head on top.",Yo,Qe,_n=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Yt,$t,zo=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Bo,q,Ft,Oo,lt,kn='The <a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormForMaskedLM">RobertaPreLayerNormForMaskedLM</a> forward method, overrides the <code>__call__</code> special method.',Do,Se,bn,Ot,Ze,Nt,Xo,oe,yo,Ee,Ve,cn=`RoBERTa-PreLayerNorm Model transformer with a sequence classification/regression head on top (a linear layer on top
of the pooled output) e.g. for GLUE tasks.`,bt,To,Mo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,qt,le,yt=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Ko,de,io,lo,xt,Ge='The <a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormForSequenceClassification">RobertaPreLayerNormForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',co,Tt,Uo,mo,ko,Lt,en,Rt,wo,Ye,Ie,dt,vo,Oe=`RobertaPreLayerNorm Model with a multiple choice classification head on top (a linear layer on top of the pooled
output and a softmax) e.g. for RocStories/SWAG tasks.`,$o,Fo,jt=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,mn,Mt,Dt=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,po,Fe,Y,kt,uo,ge='The <a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormForMultipleChoice">RobertaPreLayerNormForMultipleChoice</a> forward method, overrides the <code>__call__</code> special method.',No,Kt,Ht,xo,Ao,tt,pn,Be,ot,yn,Lo,Ct=`RobertaPreLayerNorm Model with a token classification head on top (a linear layer on top of the hidden-states
output) e.g. for Named-Entity-Recognition (NER) tasks.`,un,Ce,Xe=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,ho,Vt,Qo=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,hn,Je,ct,eo,wt,to='The <a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormForTokenClassification">RobertaPreLayerNormForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',oo,nt,ue,A,no,Jt,Ro,De,Pt,Wo,Zo,Io=`RobertaPreLayerNorm Model with a span classification head on top for extractive question-answering tasks like SQuAD
(a linear layers on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,qo,Ho,Vo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,fo,jo,qe=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Co,mt,_e,Jo,Po,zt='The <a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormForQuestionAnswering">RobertaPreLayerNormForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',fn,at,ao,st,Ut;return e=new xe({props:{title:"RobertaPreLayerNormModel",local:"transformers.RobertaPreLayerNormModel",headingTag:"h2"}}),a=new Z({props:{name:"class transformers.RobertaPreLayerNormModel",anchor:"transformers.RobertaPreLayerNormModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.RobertaPreLayerNormModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig">RobertaPreLayerNormConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_roberta_prelayernorm.py#L681"}}),ze=new Z({props:{name:"forward",anchor:"transformers.RobertaPreLayerNormModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.RobertaPreLayerNormModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RobertaPreLayerNormModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RobertaPreLayerNormModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0,1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
This parameter can only be used when the model is initialized with <code>type_vocab_size</code> parameter with value<blockquote>
<p>= 2. All the value in this tensor should be always &lt; type_vocab_size.</p>
</blockquote></li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RobertaPreLayerNormModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RobertaPreLayerNormModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RobertaPreLayerNormModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RobertaPreLayerNormModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RobertaPreLayerNormModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RobertaPreLayerNormModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaPreLayerNormModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.RobertaPreLayerNormModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.RobertaPreLayerNormModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.RobertaPreLayerNormModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_roberta_prelayernorm.py#L728",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig"
>RobertaPreLayerNormConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) — Last layer hidden-state of the first token of the sequence (classification token) after further processing
through the layers used for the auxiliary pretraining task. E.g. for BERT-family of models, this returns
the classification token after processing through a linear layer and a tanh activation function. The linear
layer weights are trained from the next sentence prediction (classification) objective during pretraining.</p>
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
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ke=new be({props:{$$slots:{default:[Gn]},$$scope:{ctx:$}}}),te=new ye({props:{anchor:"transformers.RobertaPreLayerNormModel.forward.example",$$slots:{default:[Bn]},$$scope:{ctx:$}}}),fe=new xe({props:{title:"RobertaPreLayerNormForCausalLM",local:"transformers.RobertaPreLayerNormForCausalLM",headingTag:"h2"}}),Wt=new Z({props:{name:"class transformers.RobertaPreLayerNormForCausalLM",anchor:"transformers.RobertaPreLayerNormForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaPreLayerNormForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig">RobertaPreLayerNormConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_roberta_prelayernorm.py#L866"}}),P=new Z({props:{name:"forward",anchor:"transformers.RobertaPreLayerNormForCausalLM.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"past_key_values",val:": Tuple = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.RobertaPreLayerNormForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RobertaPreLayerNormForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RobertaPreLayerNormForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0,1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
This parameter can only be used when the model is initialized with <code>type_vocab_size</code> parameter with value<blockquote>
<p>= 2. All the value in this tensor should be always &lt; type_vocab_size.</p>
</blockquote></li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RobertaPreLayerNormForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RobertaPreLayerNormForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RobertaPreLayerNormForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RobertaPreLayerNormForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RobertaPreLayerNormForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RobertaPreLayerNormForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaPreLayerNormForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.RobertaPreLayerNormForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.RobertaPreLayerNormForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.RobertaPreLayerNormForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.RobertaPreLayerNormForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_roberta_prelayernorm.py#L894",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig"
>RobertaPreLayerNormConfig</a>) and inputs.</p>
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
`}}),vt=new be({props:{$$slots:{default:[Xn]},$$scope:{ctx:$}}}),Ke=new ye({props:{anchor:"transformers.RobertaPreLayerNormForCausalLM.forward.example",$$slots:{default:[An]},$$scope:{ctx:$}}}),$e=new xe({props:{title:"RobertaPreLayerNormForMaskedLM",local:"transformers.RobertaPreLayerNormForMaskedLM",headingTag:"h2"}}),Ae=new Z({props:{name:"class transformers.RobertaPreLayerNormForMaskedLM",anchor:"transformers.RobertaPreLayerNormForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaPreLayerNormForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig">RobertaPreLayerNormConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_roberta_prelayernorm.py#L1032"}}),Ft=new Z({props:{name:"forward",anchor:"transformers.RobertaPreLayerNormForMaskedLM.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.RobertaPreLayerNormForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RobertaPreLayerNormForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RobertaPreLayerNormForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0,1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
This parameter can only be used when the model is initialized with <code>type_vocab_size</code> parameter with value<blockquote>
<p>= 2. All the value in this tensor should be always &lt; type_vocab_size.</p>
</blockquote></li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RobertaPreLayerNormForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RobertaPreLayerNormForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RobertaPreLayerNormForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RobertaPreLayerNormForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RobertaPreLayerNormForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RobertaPreLayerNormForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaPreLayerNormForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.RobertaPreLayerNormForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_roberta_prelayernorm.py#L1060",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig"
>RobertaPreLayerNormConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Masked language modeling (MLM) loss.</p>
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
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Se=new be({props:{$$slots:{default:[Qn]},$$scope:{ctx:$}}}),Ot=new ye({props:{anchor:"transformers.RobertaPreLayerNormForMaskedLM.forward.example",$$slots:{default:[Sn]},$$scope:{ctx:$}}}),Nt=new xe({props:{title:"RobertaPreLayerNormForSequenceClassification",local:"transformers.RobertaPreLayerNormForSequenceClassification",headingTag:"h2"}}),yo=new Z({props:{name:"class transformers.RobertaPreLayerNormForSequenceClassification",anchor:"transformers.RobertaPreLayerNormForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaPreLayerNormForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig">RobertaPreLayerNormConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_roberta_prelayernorm.py#L1162"}}),io=new Z({props:{name:"forward",anchor:"transformers.RobertaPreLayerNormForSequenceClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.RobertaPreLayerNormForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RobertaPreLayerNormForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RobertaPreLayerNormForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0,1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
This parameter can only be used when the model is initialized with <code>type_vocab_size</code> parameter with value<blockquote>
<p>= 2. All the value in this tensor should be always &lt; type_vocab_size.</p>
</blockquote></li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RobertaPreLayerNormForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RobertaPreLayerNormForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RobertaPreLayerNormForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RobertaPreLayerNormForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RobertaPreLayerNormForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RobertaPreLayerNormForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaPreLayerNormForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_roberta_prelayernorm.py#L1181",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig"
>RobertaPreLayerNormConfig</a>) and inputs.</p>
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
`}}),Tt=new be({props:{$$slots:{default:[En]},$$scope:{ctx:$}}}),mo=new ye({props:{anchor:"transformers.RobertaPreLayerNormForSequenceClassification.forward.example",$$slots:{default:[Yn]},$$scope:{ctx:$}}}),Lt=new ye({props:{anchor:"transformers.RobertaPreLayerNormForSequenceClassification.forward.example-2",$$slots:{default:[On]},$$scope:{ctx:$}}}),Rt=new xe({props:{title:"RobertaPreLayerNormForMultipleChoice",local:"transformers.RobertaPreLayerNormForMultipleChoice",headingTag:"h2"}}),Ie=new Z({props:{name:"class transformers.RobertaPreLayerNormForMultipleChoice",anchor:"transformers.RobertaPreLayerNormForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaPreLayerNormForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig">RobertaPreLayerNormConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_roberta_prelayernorm.py#L1260"}}),Y=new Z({props:{name:"forward",anchor:"transformers.RobertaPreLayerNormForMultipleChoice.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.RobertaPreLayerNormForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RobertaPreLayerNormForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RobertaPreLayerNormForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0,1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
This parameter can only be used when the model is initialized with <code>type_vocab_size</code> parameter with value<blockquote>
<p>= 2. All the value in this tensor should be always &lt; type_vocab_size.</p>
</blockquote></li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RobertaPreLayerNormForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RobertaPreLayerNormForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RobertaPreLayerNormForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RobertaPreLayerNormForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RobertaPreLayerNormForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RobertaPreLayerNormForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaPreLayerNormForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_roberta_prelayernorm.py#L1279",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig"
>RobertaPreLayerNormConfig</a>) and inputs.</p>
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
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Kt=new be({props:{$$slots:{default:[Dn]},$$scope:{ctx:$}}}),xo=new ye({props:{anchor:"transformers.RobertaPreLayerNormForMultipleChoice.forward.example",$$slots:{default:[Kn]},$$scope:{ctx:$}}}),tt=new xe({props:{title:"RobertaPreLayerNormForTokenClassification",local:"transformers.RobertaPreLayerNormForTokenClassification",headingTag:"h2"}}),ot=new Z({props:{name:"class transformers.RobertaPreLayerNormForTokenClassification",anchor:"transformers.RobertaPreLayerNormForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaPreLayerNormForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig">RobertaPreLayerNormConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_roberta_prelayernorm.py#L1355"}}),ct=new Z({props:{name:"forward",anchor:"transformers.RobertaPreLayerNormForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.RobertaPreLayerNormForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RobertaPreLayerNormForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RobertaPreLayerNormForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0,1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
This parameter can only be used when the model is initialized with <code>type_vocab_size</code> parameter with value<blockquote>
<p>= 2. All the value in this tensor should be always &lt; type_vocab_size.</p>
</blockquote></li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RobertaPreLayerNormForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RobertaPreLayerNormForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RobertaPreLayerNormForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RobertaPreLayerNormForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RobertaPreLayerNormForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RobertaPreLayerNormForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaPreLayerNormForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_roberta_prelayernorm.py#L1377",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig"
>RobertaPreLayerNormConfig</a>) and inputs.</p>
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
`}}),nt=new be({props:{$$slots:{default:[ea]},$$scope:{ctx:$}}}),A=new ye({props:{anchor:"transformers.RobertaPreLayerNormForTokenClassification.forward.example",$$slots:{default:[ta]},$$scope:{ctx:$}}}),Jt=new xe({props:{title:"RobertaPreLayerNormForQuestionAnswering",local:"transformers.RobertaPreLayerNormForQuestionAnswering",headingTag:"h2"}}),Pt=new Z({props:{name:"class transformers.RobertaPreLayerNormForQuestionAnswering",anchor:"transformers.RobertaPreLayerNormForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RobertaPreLayerNormForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig">RobertaPreLayerNormConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_roberta_prelayernorm.py#L1462"}}),_e=new Z({props:{name:"forward",anchor:"transformers.RobertaPreLayerNormForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"start_positions",val:": Optional = None"},{name:"end_positions",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.RobertaPreLayerNormForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RobertaPreLayerNormForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RobertaPreLayerNormForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0,1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
This parameter can only be used when the model is initialized with <code>type_vocab_size</code> parameter with value<blockquote>
<p>= 2. All the value in this tensor should be always &lt; type_vocab_size.</p>
</blockquote></li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RobertaPreLayerNormForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RobertaPreLayerNormForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RobertaPreLayerNormForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RobertaPreLayerNormForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RobertaPreLayerNormForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RobertaPreLayerNormForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RobertaPreLayerNormForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.RobertaPreLayerNormForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_roberta_prelayernorm.py#L1480",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig"
>RobertaPreLayerNormConfig</a>) and inputs.</p>
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
`}}),at=new be({props:{$$slots:{default:[oa]},$$scope:{ctx:$}}}),st=new ye({props:{anchor:"transformers.RobertaPreLayerNormForQuestionAnswering.forward.example",$$slots:{default:[na]},$$scope:{ctx:$}}}),{c(){b(e.$$.fragment),p=r(),t=d("div"),b(a.$$.fragment),g=r(),o=d("p"),o.textContent=_,V=r(),j=d("p"),j.innerHTML=L,G=r(),C=d("p"),C.innerHTML=R,B=r(),f=d("p"),f.innerHTML=N,Le=r(),ce=d("p"),ce.innerHTML=Go,pt=r(),se=d("p"),se.innerHTML=ut,Pe=r(),Me=d("div"),b(ze.$$.fragment),rt=r(),pe=d("p"),pe.innerHTML=ht,Re=r(),b(ke.$$.fragment),He=r(),b(te.$$.fragment),z=r(),b(fe.$$.fragment),ft=r(),E=d("div"),b(Wt.$$.fragment),it=r(),Ue=d("p"),Ue.innerHTML=Zt,Et=r(),re=d("p"),re.innerHTML=so,X=r(),we=d("p"),we.innerHTML=ro,gt=r(),F=d("div"),b(P.$$.fragment),ve=r(),je=d("p"),je.innerHTML=_o,bo=r(),b(vt.$$.fragment),dn=r(),b(Ke.$$.fragment),It=r(),b($e.$$.fragment),et=r(),We=d("div"),b(Ae.$$.fragment),Eo=r(),ie=d("p"),ie.innerHTML=_t,Yo=r(),Qe=d("p"),Qe.innerHTML=_n,Yt=r(),$t=d("p"),$t.innerHTML=zo,Bo=r(),q=d("div"),b(Ft.$$.fragment),Oo=r(),lt=d("p"),lt.innerHTML=kn,Do=r(),b(Se.$$.fragment),bn=r(),b(Ot.$$.fragment),Ze=r(),b(Nt.$$.fragment),Xo=r(),oe=d("div"),b(yo.$$.fragment),Ee=r(),Ve=d("p"),Ve.textContent=cn,bt=r(),To=d("p"),To.innerHTML=Mo,qt=r(),le=d("p"),le.innerHTML=yt,Ko=r(),de=d("div"),b(io.$$.fragment),lo=r(),xt=d("p"),xt.innerHTML=Ge,co=r(),b(Tt.$$.fragment),Uo=r(),b(mo.$$.fragment),ko=r(),b(Lt.$$.fragment),en=r(),b(Rt.$$.fragment),wo=r(),Ye=d("div"),b(Ie.$$.fragment),dt=r(),vo=d("p"),vo.textContent=Oe,$o=r(),Fo=d("p"),Fo.innerHTML=jt,mn=r(),Mt=d("p"),Mt.innerHTML=Dt,po=r(),Fe=d("div"),b(Y.$$.fragment),kt=r(),uo=d("p"),uo.innerHTML=ge,No=r(),b(Kt.$$.fragment),Ht=r(),b(xo.$$.fragment),Ao=r(),b(tt.$$.fragment),pn=r(),Be=d("div"),b(ot.$$.fragment),yn=r(),Lo=d("p"),Lo.textContent=Ct,un=r(),Ce=d("p"),Ce.innerHTML=Xe,ho=r(),Vt=d("p"),Vt.innerHTML=Qo,hn=r(),Je=d("div"),b(ct.$$.fragment),eo=r(),wt=d("p"),wt.innerHTML=to,oo=r(),b(nt.$$.fragment),ue=r(),b(A.$$.fragment),no=r(),b(Jt.$$.fragment),Ro=r(),De=d("div"),b(Pt.$$.fragment),Wo=r(),Zo=d("p"),Zo.innerHTML=Io,qo=r(),Ho=d("p"),Ho.innerHTML=Vo,fo=r(),jo=d("p"),jo.innerHTML=qe,Co=r(),mt=d("div"),b(_e.$$.fragment),Jo=r(),Po=d("p"),Po.innerHTML=zt,fn=r(),b(at.$$.fragment),ao=r(),b(st.$$.fragment),this.h()},l(n){y(e.$$.fragment,n),p=i(n),t=c(n,"DIV",{class:!0});var h=U(t);y(a.$$.fragment,h),g=i(h),o=c(h,"P",{"data-svelte-h":!0}),u(o)!=="svelte-33ezil"&&(o.textContent=_),V=i(h),j=c(h,"P",{"data-svelte-h":!0}),u(j)!=="svelte-6pahdo"&&(j.innerHTML=L),G=i(h),C=c(h,"P",{"data-svelte-h":!0}),u(C)!=="svelte-hswkmf"&&(C.innerHTML=R),B=i(h),f=c(h,"P",{"data-svelte-h":!0}),u(f)!=="svelte-rehfhh"&&(f.innerHTML=N),Le=i(h),ce=c(h,"P",{"data-svelte-h":!0}),u(ce)!=="svelte-174erte"&&(ce.innerHTML=Go),pt=i(h),se=c(h,"P",{"data-svelte-h":!0}),u(se)!=="svelte-p9qvd1"&&(se.innerHTML=ut),Pe=i(h),Me=c(h,"DIV",{class:!0});var he=U(Me);y(ze.$$.fragment,he),rt=i(he),pe=c(he,"P",{"data-svelte-h":!0}),u(pe)!=="svelte-1qb4mg1"&&(pe.innerHTML=ht),Re=i(he),y(ke.$$.fragment,he),He=i(he),y(te.$$.fragment,he),he.forEach(l),h.forEach(l),z=i(n),y(fe.$$.fragment,n),ft=i(n),E=c(n,"DIV",{class:!0});var I=U(E);y(Wt.$$.fragment,I),it=i(I),Ue=c(I,"P",{"data-svelte-h":!0}),u(Ue)!=="svelte-1dggich"&&(Ue.innerHTML=Zt),Et=i(I),re=c(I,"P",{"data-svelte-h":!0}),u(re)!=="svelte-6pahdo"&&(re.innerHTML=so),X=i(I),we=c(I,"P",{"data-svelte-h":!0}),u(we)!=="svelte-hswkmf"&&(we.innerHTML=ro),gt=i(I),F=c(I,"DIV",{class:!0});var ne=U(F);y(P.$$.fragment,ne),ve=i(ne),je=c(ne,"P",{"data-svelte-h":!0}),u(je)!=="svelte-181p9f5"&&(je.innerHTML=_o),bo=i(ne),y(vt.$$.fragment,ne),dn=i(ne),y(Ke.$$.fragment,ne),ne.forEach(l),I.forEach(l),It=i(n),y($e.$$.fragment,n),et=i(n),We=c(n,"DIV",{class:!0});var Q=U(We);y(Ae.$$.fragment,Q),Eo=i(Q),ie=c(Q,"P",{"data-svelte-h":!0}),u(ie)!=="svelte-8dtlt4"&&(ie.innerHTML=_t),Yo=i(Q),Qe=c(Q,"P",{"data-svelte-h":!0}),u(Qe)!=="svelte-6pahdo"&&(Qe.innerHTML=_n),Yt=i(Q),$t=c(Q,"P",{"data-svelte-h":!0}),u($t)!=="svelte-hswkmf"&&($t.innerHTML=zo),Bo=i(Q),q=c(Q,"DIV",{class:!0});var O=U(q);y(Ft.$$.fragment,O),Oo=i(O),lt=c(O,"P",{"data-svelte-h":!0}),u(lt)!=="svelte-lm7ib5"&&(lt.innerHTML=kn),Do=i(O),y(Se.$$.fragment,O),bn=i(O),y(Ot.$$.fragment,O),O.forEach(l),Q.forEach(l),Ze=i(n),y(Nt.$$.fragment,n),Xo=i(n),oe=c(n,"DIV",{class:!0});var D=U(oe);y(yo.$$.fragment,D),Ee=i(D),Ve=c(D,"P",{"data-svelte-h":!0}),u(Ve)!=="svelte-1bv1on4"&&(Ve.textContent=cn),bt=i(D),To=c(D,"P",{"data-svelte-h":!0}),u(To)!=="svelte-6pahdo"&&(To.innerHTML=Mo),qt=i(D),le=c(D,"P",{"data-svelte-h":!0}),u(le)!=="svelte-hswkmf"&&(le.innerHTML=yt),Ko=i(D),de=c(D,"DIV",{class:!0});var ae=U(de);y(io.$$.fragment,ae),lo=i(ae),xt=c(ae,"P",{"data-svelte-h":!0}),u(xt)!=="svelte-pkx94z"&&(xt.innerHTML=Ge),co=i(ae),y(Tt.$$.fragment,ae),Uo=i(ae),y(mo.$$.fragment,ae),ko=i(ae),y(Lt.$$.fragment,ae),ae.forEach(l),D.forEach(l),en=i(n),y(Rt.$$.fragment,n),wo=i(n),Ye=c(n,"DIV",{class:!0});var H=U(Ye);y(Ie.$$.fragment,H),dt=i(H),vo=c(H,"P",{"data-svelte-h":!0}),u(vo)!=="svelte-1t8wc3p"&&(vo.textContent=Oe),$o=i(H),Fo=c(H,"P",{"data-svelte-h":!0}),u(Fo)!=="svelte-6pahdo"&&(Fo.innerHTML=jt),mn=i(H),Mt=c(H,"P",{"data-svelte-h":!0}),u(Mt)!=="svelte-hswkmf"&&(Mt.innerHTML=Dt),po=i(H),Fe=c(H,"DIV",{class:!0});var Ne=U(Fe);y(Y.$$.fragment,Ne),kt=i(Ne),uo=c(Ne,"P",{"data-svelte-h":!0}),u(uo)!=="svelte-o9mjzj"&&(uo.innerHTML=ge),No=i(Ne),y(Kt.$$.fragment,Ne),Ht=i(Ne),y(xo.$$.fragment,Ne),Ne.forEach(l),H.forEach(l),Ao=i(n),y(tt.$$.fragment,n),pn=i(n),Be=c(n,"DIV",{class:!0});var S=U(Be);y(ot.$$.fragment,S),yn=i(S),Lo=c(S,"P",{"data-svelte-h":!0}),u(Lo)!=="svelte-kne6bs"&&(Lo.textContent=Ct),un=i(S),Ce=c(S,"P",{"data-svelte-h":!0}),u(Ce)!=="svelte-6pahdo"&&(Ce.innerHTML=Xe),ho=i(S),Vt=c(S,"P",{"data-svelte-h":!0}),u(Vt)!=="svelte-hswkmf"&&(Vt.innerHTML=Qo),hn=i(S),Je=c(S,"DIV",{class:!0});var K=U(Je);y(ct.$$.fragment,K),eo=i(K),wt=c(K,"P",{"data-svelte-h":!0}),u(wt)!=="svelte-mi5mgl"&&(wt.innerHTML=to),oo=i(K),y(nt.$$.fragment,K),ue=i(K),y(A.$$.fragment,K),K.forEach(l),S.forEach(l),no=i(n),y(Jt.$$.fragment,n),Ro=i(n),De=c(n,"DIV",{class:!0});var ee=U(De);y(Pt.$$.fragment,ee),Wo=i(ee),Zo=c(ee,"P",{"data-svelte-h":!0}),u(Zo)!=="svelte-1xkbi4i"&&(Zo.innerHTML=Io),qo=i(ee),Ho=c(ee,"P",{"data-svelte-h":!0}),u(Ho)!=="svelte-6pahdo"&&(Ho.innerHTML=Vo),fo=i(ee),jo=c(ee,"P",{"data-svelte-h":!0}),u(jo)!=="svelte-hswkmf"&&(jo.innerHTML=qe),Co=i(ee),mt=c(ee,"DIV",{class:!0});var me=U(mt);y(_e.$$.fragment,me),Jo=i(me),Po=c(me,"P",{"data-svelte-h":!0}),u(Po)!=="svelte-1buifql"&&(Po.innerHTML=zt),fn=i(me),y(at.$$.fragment,me),ao=i(me),y(st.$$.fragment,me),me.forEach(l),ee.forEach(l),this.h()},h(){W(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(n,h){T(e,n,h),m(n,p,h),m(n,t,h),T(a,t,null),s(t,g),s(t,o),s(t,V),s(t,j),s(t,G),s(t,C),s(t,B),s(t,f),s(t,Le),s(t,ce),s(t,pt),s(t,se),s(t,Pe),s(t,Me),T(ze,Me,null),s(Me,rt),s(Me,pe),s(Me,Re),T(ke,Me,null),s(Me,He),T(te,Me,null),m(n,z,h),T(fe,n,h),m(n,ft,h),m(n,E,h),T(Wt,E,null),s(E,it),s(E,Ue),s(E,Et),s(E,re),s(E,X),s(E,we),s(E,gt),s(E,F),T(P,F,null),s(F,ve),s(F,je),s(F,bo),T(vt,F,null),s(F,dn),T(Ke,F,null),m(n,It,h),T($e,n,h),m(n,et,h),m(n,We,h),T(Ae,We,null),s(We,Eo),s(We,ie),s(We,Yo),s(We,Qe),s(We,Yt),s(We,$t),s(We,Bo),s(We,q),T(Ft,q,null),s(q,Oo),s(q,lt),s(q,Do),T(Se,q,null),s(q,bn),T(Ot,q,null),m(n,Ze,h),T(Nt,n,h),m(n,Xo,h),m(n,oe,h),T(yo,oe,null),s(oe,Ee),s(oe,Ve),s(oe,bt),s(oe,To),s(oe,qt),s(oe,le),s(oe,Ko),s(oe,de),T(io,de,null),s(de,lo),s(de,xt),s(de,co),T(Tt,de,null),s(de,Uo),T(mo,de,null),s(de,ko),T(Lt,de,null),m(n,en,h),T(Rt,n,h),m(n,wo,h),m(n,Ye,h),T(Ie,Ye,null),s(Ye,dt),s(Ye,vo),s(Ye,$o),s(Ye,Fo),s(Ye,mn),s(Ye,Mt),s(Ye,po),s(Ye,Fe),T(Y,Fe,null),s(Fe,kt),s(Fe,uo),s(Fe,No),T(Kt,Fe,null),s(Fe,Ht),T(xo,Fe,null),m(n,Ao,h),T(tt,n,h),m(n,pn,h),m(n,Be,h),T(ot,Be,null),s(Be,yn),s(Be,Lo),s(Be,un),s(Be,Ce),s(Be,ho),s(Be,Vt),s(Be,hn),s(Be,Je),T(ct,Je,null),s(Je,eo),s(Je,wt),s(Je,oo),T(nt,Je,null),s(Je,ue),T(A,Je,null),m(n,no,h),T(Jt,n,h),m(n,Ro,h),m(n,De,h),T(Pt,De,null),s(De,Wo),s(De,Zo),s(De,qo),s(De,Ho),s(De,fo),s(De,jo),s(De,Co),s(De,mt),T(_e,mt,null),s(mt,Jo),s(mt,Po),s(mt,fn),T(at,mt,null),s(mt,ao),T(st,mt,null),Ut=!0},p(n,h){const he={};h&2&&(he.$$scope={dirty:h,ctx:n}),ke.$set(he);const I={};h&2&&(I.$$scope={dirty:h,ctx:n}),te.$set(I);const ne={};h&2&&(ne.$$scope={dirty:h,ctx:n}),vt.$set(ne);const Q={};h&2&&(Q.$$scope={dirty:h,ctx:n}),Ke.$set(Q);const O={};h&2&&(O.$$scope={dirty:h,ctx:n}),Se.$set(O);const D={};h&2&&(D.$$scope={dirty:h,ctx:n}),Ot.$set(D);const ae={};h&2&&(ae.$$scope={dirty:h,ctx:n}),Tt.$set(ae);const H={};h&2&&(H.$$scope={dirty:h,ctx:n}),mo.$set(H);const Ne={};h&2&&(Ne.$$scope={dirty:h,ctx:n}),Lt.$set(Ne);const S={};h&2&&(S.$$scope={dirty:h,ctx:n}),Kt.$set(S);const K={};h&2&&(K.$$scope={dirty:h,ctx:n}),xo.$set(K);const ee={};h&2&&(ee.$$scope={dirty:h,ctx:n}),nt.$set(ee);const me={};h&2&&(me.$$scope={dirty:h,ctx:n}),A.$set(me);const So={};h&2&&(So.$$scope={dirty:h,ctx:n}),at.$set(So);const wn={};h&2&&(wn.$$scope={dirty:h,ctx:n}),st.$set(wn)},i(n){Ut||(M(e.$$.fragment,n),M(a.$$.fragment,n),M(ze.$$.fragment,n),M(ke.$$.fragment,n),M(te.$$.fragment,n),M(fe.$$.fragment,n),M(Wt.$$.fragment,n),M(P.$$.fragment,n),M(vt.$$.fragment,n),M(Ke.$$.fragment,n),M($e.$$.fragment,n),M(Ae.$$.fragment,n),M(Ft.$$.fragment,n),M(Se.$$.fragment,n),M(Ot.$$.fragment,n),M(Nt.$$.fragment,n),M(yo.$$.fragment,n),M(io.$$.fragment,n),M(Tt.$$.fragment,n),M(mo.$$.fragment,n),M(Lt.$$.fragment,n),M(Rt.$$.fragment,n),M(Ie.$$.fragment,n),M(Y.$$.fragment,n),M(Kt.$$.fragment,n),M(xo.$$.fragment,n),M(tt.$$.fragment,n),M(ot.$$.fragment,n),M(ct.$$.fragment,n),M(nt.$$.fragment,n),M(A.$$.fragment,n),M(Jt.$$.fragment,n),M(Pt.$$.fragment,n),M(_e.$$.fragment,n),M(at.$$.fragment,n),M(st.$$.fragment,n),Ut=!0)},o(n){k(e.$$.fragment,n),k(a.$$.fragment,n),k(ze.$$.fragment,n),k(ke.$$.fragment,n),k(te.$$.fragment,n),k(fe.$$.fragment,n),k(Wt.$$.fragment,n),k(P.$$.fragment,n),k(vt.$$.fragment,n),k(Ke.$$.fragment,n),k($e.$$.fragment,n),k(Ae.$$.fragment,n),k(Ft.$$.fragment,n),k(Se.$$.fragment,n),k(Ot.$$.fragment,n),k(Nt.$$.fragment,n),k(yo.$$.fragment,n),k(io.$$.fragment,n),k(Tt.$$.fragment,n),k(mo.$$.fragment,n),k(Lt.$$.fragment,n),k(Rt.$$.fragment,n),k(Ie.$$.fragment,n),k(Y.$$.fragment,n),k(Kt.$$.fragment,n),k(xo.$$.fragment,n),k(tt.$$.fragment,n),k(ot.$$.fragment,n),k(ct.$$.fragment,n),k(nt.$$.fragment,n),k(A.$$.fragment,n),k(Jt.$$.fragment,n),k(Pt.$$.fragment,n),k(_e.$$.fragment,n),k(at.$$.fragment,n),k(st.$$.fragment,n),Ut=!1},d(n){n&&(l(p),l(t),l(z),l(ft),l(E),l(It),l(et),l(We),l(Ze),l(Xo),l(oe),l(en),l(wo),l(Ye),l(Ao),l(pn),l(Be),l(no),l(Ro),l(De)),w(e,n),w(a),w(ze),w(ke),w(te),w(fe,n),w(Wt),w(P),w(vt),w(Ke),w($e,n),w(Ae),w(Ft),w(Se),w(Ot),w(Nt,n),w(yo),w(io),w(Tt),w(mo),w(Lt),w(Rt,n),w(Ie),w(Y),w(Kt),w(xo),w(tt,n),w(ot),w(ct),w(nt),w(A),w(Jt,n),w(Pt),w(_e),w(at),w(st)}}}function sa($){let e,p;return e=new Pn({props:{$$slots:{default:[aa]},$$scope:{ctx:$}}}),{c(){b(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){T(e,t,a),p=!0},p(t,a){const g={};a&2&&(g.$$scope={dirty:a,ctx:t}),e.$set(g)},i(t){p||(M(e.$$.fragment,t),p=!0)},o(t){k(e.$$.fragment,t),p=!1},d(t){w(e,t)}}}function ra($){let e,p="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,a,g="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",o,_,V=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,j,L,G=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,C,R,B=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=d("p"),e.innerHTML=p,t=r(),a=d("ul"),a.innerHTML=g,o=r(),_=d("p"),_.innerHTML=V,j=r(),L=d("ul"),L.innerHTML=G,C=r(),R=d("p"),R.innerHTML=B},l(f){e=c(f,"P",{"data-svelte-h":!0}),u(e)!=="svelte-1ajbfxg"&&(e.innerHTML=p),t=i(f),a=c(f,"UL",{"data-svelte-h":!0}),u(a)!=="svelte-qm1t26"&&(a.innerHTML=g),o=i(f),_=c(f,"P",{"data-svelte-h":!0}),u(_)!=="svelte-1v9qsc5"&&(_.innerHTML=V),j=i(f),L=c(f,"UL",{"data-svelte-h":!0}),u(L)!=="svelte-15scerc"&&(L.innerHTML=G),C=i(f),R=c(f,"P",{"data-svelte-h":!0}),u(R)!=="svelte-1an3odd"&&(R.innerHTML=B)},m(f,N){m(f,e,N),m(f,t,N),m(f,a,N),m(f,o,N),m(f,_,N),m(f,j,N),m(f,L,N),m(f,C,N),m(f,R,N)},p:J,d(f){f&&(l(e),l(t),l(a),l(o),l(_),l(j),l(L),l(C),l(R))}}}function ia($){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=p},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(t,a){m(t,e,a)},p:J,d(t){t&&l(e)}}}function la($){let e,p="Example:",t,a,g;return a=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURlJvYmVydGFQcmVMYXllck5vcm1Nb2RlbCUwQWltcG9ydCUyMHRlbnNvcmZsb3clMjBhcyUyMHRmJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyYW5kcmVhc21hZHNlbiUyRmVmZmljaWVudF9tbG1fbTAuNDAlMjIpJTBBbW9kZWwlMjAlM0QlMjBURlJvYmVydGFQcmVMYXllck5vcm1Nb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyYW5kcmVhc21hZHNlbiUyRmVmZmljaWVudF9tbG1fbTAuNDAlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbChpbnB1dHMpJTBBJTBBbGFzdF9oaWRkZW5fc3RhdGVzJTIwJTNEJTIwb3V0cHV0cy5sYXN0X2hpZGRlbl9zdGF0ZQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFRobertaPreLayerNormModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaPreLayerNormModel.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=d("p"),e.textContent=p,t=r(),b(a.$$.fragment)},l(o){e=c(o,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=p),t=i(o),y(a.$$.fragment,o)},m(o,_){m(o,e,_),m(o,t,_),T(a,o,_),g=!0},p:J,i(o){g||(M(a.$$.fragment,o),g=!0)},o(o){k(a.$$.fragment,o),g=!1},d(o){o&&(l(e),l(t)),w(a,o)}}}function da($){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=p},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(t,a){m(t,e,a)},p:J,d(t){t&&l(e)}}}function ca($){let e,p="Example:",t,a,g;return a=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURlJvYmVydGFQcmVMYXllck5vcm1Gb3JDYXVzYWxMTSUwQWltcG9ydCUyMHRlbnNvcmZsb3clMjBhcyUyMHRmJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyYW5kcmVhc21hZHNlbiUyRmVmZmljaWVudF9tbG1fbTAuNDAlMjIpJTBBbW9kZWwlMjAlM0QlMjBURlJvYmVydGFQcmVMYXllck5vcm1Gb3JDYXVzYWxMTS5mcm9tX3ByZXRyYWluZWQoJTIyYW5kcmVhc21hZHNlbiUyRmVmZmljaWVudF9tbG1fbTAuNDAlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbChpbnB1dHMpJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFRobertaPreLayerNormForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaPreLayerNormForCausalLM.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=d("p"),e.textContent=p,t=r(),b(a.$$.fragment)},l(o){e=c(o,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=p),t=i(o),y(a.$$.fragment,o)},m(o,_){m(o,e,_),m(o,t,_),T(a,o,_),g=!0},p:J,i(o){g||(M(a.$$.fragment,o),g=!0)},o(o){k(a.$$.fragment,o),g=!1},d(o){o&&(l(e),l(t)),w(a,o)}}}function ma($){let e,p="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,a,g="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",o,_,V=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,j,L,G=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,C,R,B=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=d("p"),e.innerHTML=p,t=r(),a=d("ul"),a.innerHTML=g,o=r(),_=d("p"),_.innerHTML=V,j=r(),L=d("ul"),L.innerHTML=G,C=r(),R=d("p"),R.innerHTML=B},l(f){e=c(f,"P",{"data-svelte-h":!0}),u(e)!=="svelte-1ajbfxg"&&(e.innerHTML=p),t=i(f),a=c(f,"UL",{"data-svelte-h":!0}),u(a)!=="svelte-qm1t26"&&(a.innerHTML=g),o=i(f),_=c(f,"P",{"data-svelte-h":!0}),u(_)!=="svelte-1v9qsc5"&&(_.innerHTML=V),j=i(f),L=c(f,"UL",{"data-svelte-h":!0}),u(L)!=="svelte-15scerc"&&(L.innerHTML=G),C=i(f),R=c(f,"P",{"data-svelte-h":!0}),u(R)!=="svelte-1an3odd"&&(R.innerHTML=B)},m(f,N){m(f,e,N),m(f,t,N),m(f,a,N),m(f,o,N),m(f,_,N),m(f,j,N),m(f,L,N),m(f,C,N),m(f,R,N)},p:J,d(f){f&&(l(e),l(t),l(a),l(o),l(_),l(j),l(L),l(C),l(R))}}}function pa($){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=p},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(t,a){m(t,e,a)},p:J,d(t){t&&l(e)}}}function ua($){let e,p="Example:",t,a,g;return a=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURlJvYmVydGFQcmVMYXllck5vcm1Gb3JNYXNrZWRMTSUwQWltcG9ydCUyMHRlbnNvcmZsb3clMjBhcyUyMHRmJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyYW5kcmVhc21hZHNlbiUyRmVmZmljaWVudF9tbG1fbTAuNDAlMjIpJTBBbW9kZWwlMjAlM0QlMjBURlJvYmVydGFQcmVMYXllck5vcm1Gb3JNYXNrZWRMTS5mcm9tX3ByZXRyYWluZWQoJTIyYW5kcmVhc21hZHNlbiUyRmVmZmljaWVudF9tbG1fbTAuNDAlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMlRoZSUyMGNhcGl0YWwlMjBvZiUyMEZyYW5jZSUyMGlzJTIwJTNDbWFzayUzRS4lMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyKSUwQWxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEElMjMlMjByZXRyaWV2ZSUyMGluZGV4JTIwb2YlMjAlM0NtYXNrJTNFJTBBbWFza190b2tlbl9pbmRleCUyMCUzRCUyMHRmLndoZXJlKChpbnB1dHMuaW5wdXRfaWRzJTIwJTNEJTNEJTIwdG9rZW5pemVyLm1hc2tfdG9rZW5faWQpJTVCMCU1RCklMEFzZWxlY3RlZF9sb2dpdHMlMjAlM0QlMjB0Zi5nYXRoZXJfbmQobG9naXRzJTVCMCU1RCUyQyUyMGluZGljZXMlM0RtYXNrX3Rva2VuX2luZGV4KSUwQSUwQXByZWRpY3RlZF90b2tlbl9pZCUyMCUzRCUyMHRmLm1hdGguYXJnbWF4KHNlbGVjdGVkX2xvZ2l0cyUyQyUyMGF4aXMlM0QtMSklMEF0b2tlbml6ZXIuZGVjb2RlKHByZWRpY3RlZF90b2tlbl9pZCk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFRobertaPreLayerNormForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaPreLayerNormForMaskedLM.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27; Paris&#x27;</span>`,wrap:!1}}),{c(){e=d("p"),e.textContent=p,t=r(),b(a.$$.fragment)},l(o){e=c(o,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=p),t=i(o),y(a.$$.fragment,o)},m(o,_){m(o,e,_),m(o,t,_),T(a,o,_),g=!0},p:J,i(o){g||(M(a.$$.fragment,o),g=!0)},o(o){k(a.$$.fragment,o),g=!1},d(o){o&&(l(e),l(t)),w(a,o)}}}function ha($){let e,p;return e=new Te({props:{code:"bGFiZWxzJTIwJTNEJTIwdG9rZW5pemVyKCUyMlRoZSUyMGNhcGl0YWwlMjBvZiUyMEZyYW5jZSUyMGlzJTIwUGFyaXMuJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiklNUIlMjJpbnB1dF9pZHMlMjIlNUQlMEElMjMlMjBtYXNrJTIwbGFiZWxzJTIwb2YlMjBub24tJTNDbWFzayUzRSUyMHRva2VucyUwQWxhYmVscyUyMCUzRCUyMHRmLndoZXJlKGlucHV0cy5pbnB1dF9pZHMlMjAlM0QlM0QlMjB0b2tlbml6ZXIubWFza190b2tlbl9pZCUyQyUyMGxhYmVscyUyQyUyMC0xMDApJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKSUwQXJvdW5kKGZsb2F0KG91dHB1dHMubG9zcyklMkMlMjAyKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.69</span>`,wrap:!1}}),{c(){b(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){T(e,t,a),p=!0},p:J,i(t){p||(M(e.$$.fragment,t),p=!0)},o(t){k(e.$$.fragment,t),p=!1},d(t){w(e,t)}}}function fa($){let e,p="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,a,g="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",o,_,V=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,j,L,G=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,C,R,B=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=d("p"),e.innerHTML=p,t=r(),a=d("ul"),a.innerHTML=g,o=r(),_=d("p"),_.innerHTML=V,j=r(),L=d("ul"),L.innerHTML=G,C=r(),R=d("p"),R.innerHTML=B},l(f){e=c(f,"P",{"data-svelte-h":!0}),u(e)!=="svelte-1ajbfxg"&&(e.innerHTML=p),t=i(f),a=c(f,"UL",{"data-svelte-h":!0}),u(a)!=="svelte-qm1t26"&&(a.innerHTML=g),o=i(f),_=c(f,"P",{"data-svelte-h":!0}),u(_)!=="svelte-1v9qsc5"&&(_.innerHTML=V),j=i(f),L=c(f,"UL",{"data-svelte-h":!0}),u(L)!=="svelte-15scerc"&&(L.innerHTML=G),C=i(f),R=c(f,"P",{"data-svelte-h":!0}),u(R)!=="svelte-1an3odd"&&(R.innerHTML=B)},m(f,N){m(f,e,N),m(f,t,N),m(f,a,N),m(f,o,N),m(f,_,N),m(f,j,N),m(f,L,N),m(f,C,N),m(f,R,N)},p:J,d(f){f&&(l(e),l(t),l(a),l(o),l(_),l(j),l(L),l(C),l(R))}}}function ga($){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=p},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(t,a){m(t,e,a)},p:J,d(t){t&&l(e)}}}function _a($){let e,p="Example:",t,a,g;return a=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURlJvYmVydGFQcmVMYXllck5vcm1Gb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uJTBBaW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJhbmRyZWFzbWFkc2VuJTJGZWZmaWNpZW50X21sbV9tMC40MCUyMiklMEFtb2RlbCUyMCUzRCUyMFRGUm9iZXJ0YVByZUxheWVyTm9ybUZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmFuZHJlYXNtYWRzZW4lMkZlZmZpY2llbnRfbWxtX20wLjQwJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiklMEElMEFsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX2NsYXNzX2lkJTIwJTNEJTIwaW50KHRmLm1hdGguYXJnbWF4KGxvZ2l0cyUyQyUyMGF4aXMlM0QtMSklNUIwJTVEKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFRobertaPreLayerNormForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaPreLayerNormForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])`,wrap:!1}}),{c(){e=d("p"),e.textContent=p,t=r(),b(a.$$.fragment)},l(o){e=c(o,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=p),t=i(o),y(a.$$.fragment,o)},m(o,_){m(o,e,_),m(o,t,_),T(a,o,_),g=!0},p:J,i(o){g||(M(a.$$.fragment,o),g=!0)},o(o){k(a.$$.fragment,o),g=!1},d(o){o&&(l(e),l(t)),w(a,o)}}}function ba($){let e,p;return e=new Te({props:{code:"JTIzJTIwVG8lMjB0cmFpbiUyMGElMjBtb2RlbCUyMG9uJTIwJTYwbnVtX2xhYmVscyU2MCUyMGNsYXNzZXMlMkMlMjB5b3UlMjBjYW4lMjBwYXNzJTIwJTYwbnVtX2xhYmVscyUzRG51bV9sYWJlbHMlNjAlMjB0byUyMCU2MC5mcm9tX3ByZXRyYWluZWQoLi4uKSU2MCUwQW51bV9sYWJlbHMlMjAlM0QlMjBsZW4obW9kZWwuY29uZmlnLmlkMmxhYmVsKSUwQW1vZGVsJTIwJTNEJTIwVEZSb2JlcnRhUHJlTGF5ZXJOb3JtRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyYW5kcmVhc21hZHNlbiUyRmVmZmljaWVudF9tbG1fbTAuNDAlMjIlMkMlMjBudW1fbGFiZWxzJTNEbnVtX2xhYmVscyklMEElMEFsYWJlbHMlMjAlM0QlMjB0Zi5jb25zdGFudCgxKSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`</span>\n<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)\n<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaPreLayerNormForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>, num_labels=num_labels)\n\n<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)\n<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss',wrap:!1}}),{c(){b(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){T(e,t,a),p=!0},p:J,i(t){p||(M(e.$$.fragment,t),p=!0)},o(t){k(e.$$.fragment,t),p=!1},d(t){w(e,t)}}}function ya($){let e,p="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,a,g="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",o,_,V=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,j,L,G=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,C,R,B=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=d("p"),e.innerHTML=p,t=r(),a=d("ul"),a.innerHTML=g,o=r(),_=d("p"),_.innerHTML=V,j=r(),L=d("ul"),L.innerHTML=G,C=r(),R=d("p"),R.innerHTML=B},l(f){e=c(f,"P",{"data-svelte-h":!0}),u(e)!=="svelte-1ajbfxg"&&(e.innerHTML=p),t=i(f),a=c(f,"UL",{"data-svelte-h":!0}),u(a)!=="svelte-qm1t26"&&(a.innerHTML=g),o=i(f),_=c(f,"P",{"data-svelte-h":!0}),u(_)!=="svelte-1v9qsc5"&&(_.innerHTML=V),j=i(f),L=c(f,"UL",{"data-svelte-h":!0}),u(L)!=="svelte-15scerc"&&(L.innerHTML=G),C=i(f),R=c(f,"P",{"data-svelte-h":!0}),u(R)!=="svelte-1an3odd"&&(R.innerHTML=B)},m(f,N){m(f,e,N),m(f,t,N),m(f,a,N),m(f,o,N),m(f,_,N),m(f,j,N),m(f,L,N),m(f,C,N),m(f,R,N)},p:J,d(f){f&&(l(e),l(t),l(a),l(o),l(_),l(j),l(L),l(C),l(R))}}}function Ta($){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=p},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(t,a){m(t,e,a)},p:J,d(t){t&&l(e)}}}function Ma($){let e,p="Example:",t,a,g;return a=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURlJvYmVydGFQcmVMYXllck5vcm1Gb3JNdWx0aXBsZUNob2ljZSUwQWltcG9ydCUyMHRlbnNvcmZsb3clMjBhcyUyMHRmJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyYW5kcmVhc21hZHNlbiUyRmVmZmljaWVudF9tbG1fbTAuNDAlMjIpJTBBbW9kZWwlMjAlM0QlMjBURlJvYmVydGFQcmVMYXllck5vcm1Gb3JNdWx0aXBsZUNob2ljZS5mcm9tX3ByZXRyYWluZWQoJTIyYW5kcmVhc21hZHNlbiUyRmVmZmljaWVudF9tbG1fbTAuNDAlMjIpJTBBJTBBcHJvbXB0JTIwJTNEJTIwJTIySW4lMjBJdGFseSUyQyUyMHBpenphJTIwc2VydmVkJTIwaW4lMjBmb3JtYWwlMjBzZXR0aW5ncyUyQyUyMHN1Y2glMjBhcyUyMGF0JTIwYSUyMHJlc3RhdXJhbnQlMkMlMjBpcyUyMHByZXNlbnRlZCUyMHVuc2xpY2VkLiUyMiUwQWNob2ljZTAlMjAlM0QlMjAlMjJJdCUyMGlzJTIwZWF0ZW4lMjB3aXRoJTIwYSUyMGZvcmslMjBhbmQlMjBhJTIwa25pZmUuJTIyJTBBY2hvaWNlMSUyMCUzRCUyMCUyMkl0JTIwaXMlMjBlYXRlbiUyMHdoaWxlJTIwaGVsZCUyMGluJTIwdGhlJTIwaGFuZC4lMjIlMEElMEFlbmNvZGluZyUyMCUzRCUyMHRva2VuaXplciglNUJwcm9tcHQlMkMlMjBwcm9tcHQlNUQlMkMlMjAlNUJjaG9pY2UwJTJDJTIwY2hvaWNlMSU1RCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIydGYlMjIlMkMlMjBwYWRkaW5nJTNEVHJ1ZSklMEFpbnB1dHMlMjAlM0QlMjAlN0JrJTNBJTIwdGYuZXhwYW5kX2RpbXModiUyQyUyMDApJTIwZm9yJTIwayUyQyUyMHYlMjBpbiUyMGVuY29kaW5nLml0ZW1zKCklN0QlMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoaW5wdXRzKSUyMCUyMCUyMyUyMGJhdGNoJTIwc2l6ZSUyMGlzJTIwMSUwQSUwQSUyMyUyMHRoZSUyMGxpbmVhciUyMGNsYXNzaWZpZXIlMjBzdGlsbCUyMG5lZWRzJTIwdG8lMjBiZSUyMHRyYWluZWQlMEFsb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFRobertaPreLayerNormForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaPreLayerNormForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=d("p"),e.textContent=p,t=r(),b(a.$$.fragment)},l(o){e=c(o,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=p),t=i(o),y(a.$$.fragment,o)},m(o,_){m(o,e,_),m(o,t,_),T(a,o,_),g=!0},p:J,i(o){g||(M(a.$$.fragment,o),g=!0)},o(o){k(a.$$.fragment,o),g=!1},d(o){o&&(l(e),l(t)),w(a,o)}}}function ka($){let e,p="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,a,g="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",o,_,V=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,j,L,G=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,C,R,B=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=d("p"),e.innerHTML=p,t=r(),a=d("ul"),a.innerHTML=g,o=r(),_=d("p"),_.innerHTML=V,j=r(),L=d("ul"),L.innerHTML=G,C=r(),R=d("p"),R.innerHTML=B},l(f){e=c(f,"P",{"data-svelte-h":!0}),u(e)!=="svelte-1ajbfxg"&&(e.innerHTML=p),t=i(f),a=c(f,"UL",{"data-svelte-h":!0}),u(a)!=="svelte-qm1t26"&&(a.innerHTML=g),o=i(f),_=c(f,"P",{"data-svelte-h":!0}),u(_)!=="svelte-1v9qsc5"&&(_.innerHTML=V),j=i(f),L=c(f,"UL",{"data-svelte-h":!0}),u(L)!=="svelte-15scerc"&&(L.innerHTML=G),C=i(f),R=c(f,"P",{"data-svelte-h":!0}),u(R)!=="svelte-1an3odd"&&(R.innerHTML=B)},m(f,N){m(f,e,N),m(f,t,N),m(f,a,N),m(f,o,N),m(f,_,N),m(f,j,N),m(f,L,N),m(f,C,N),m(f,R,N)},p:J,d(f){f&&(l(e),l(t),l(a),l(o),l(_),l(j),l(L),l(C),l(R))}}}function wa($){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=p},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(t,a){m(t,e,a)},p:J,d(t){t&&l(e)}}}function va($){let e,p="Example:",t,a,g;return a=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURlJvYmVydGFQcmVMYXllck5vcm1Gb3JUb2tlbkNsYXNzaWZpY2F0aW9uJTBBaW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJhbmRyZWFzbWFkc2VuJTJGZWZmaWNpZW50X21sbV9tMC40MCUyMiklMEFtb2RlbCUyMCUzRCUyMFRGUm9iZXJ0YVByZUxheWVyTm9ybUZvclRva2VuQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmFuZHJlYXNtYWRzZW4lMkZlZmZpY2llbnRfbWxtX20wLjQwJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMEElMjAlMjAlMjAlMjAlMjJIdWdnaW5nRmFjZSUyMGlzJTIwYSUyMGNvbXBhbnklMjBiYXNlZCUyMGluJTIwUGFyaXMlMjBhbmQlMjBOZXclMjBZb3JrJTIyJTJDJTIwYWRkX3NwZWNpYWxfdG9rZW5zJTNERmFsc2UlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyJTBBKSUwQSUwQWxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEFwcmVkaWN0ZWRfdG9rZW5fY2xhc3NfaWRzJTIwJTNEJTIwdGYubWF0aC5hcmdtYXgobG9naXRzJTJDJTIwYXhpcyUzRC0xKSUwQSUwQSUyMyUyME5vdGUlMjB0aGF0JTIwdG9rZW5zJTIwYXJlJTIwY2xhc3NpZmllZCUyMHJhdGhlciUyMHRoZW4lMjBpbnB1dCUyMHdvcmRzJTIwd2hpY2glMjBtZWFucyUyMHRoYXQlMEElMjMlMjB0aGVyZSUyMG1pZ2h0JTIwYmUlMjBtb3JlJTIwcHJlZGljdGVkJTIwdG9rZW4lMjBjbGFzc2VzJTIwdGhhbiUyMHdvcmRzLiUwQSUyMyUyME11bHRpcGxlJTIwdG9rZW4lMjBjbGFzc2VzJTIwbWlnaHQlMjBhY2NvdW50JTIwZm9yJTIwdGhlJTIwc2FtZSUyMHdvcmQlMEFwcmVkaWN0ZWRfdG9rZW5zX2NsYXNzZXMlMjAlM0QlMjAlNUJtb2RlbC5jb25maWcuaWQybGFiZWwlNUJ0JTVEJTIwZm9yJTIwdCUyMGluJTIwcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyU1QjAlNUQubnVtcHkoKS50b2xpc3QoKSU1RA==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFRobertaPreLayerNormForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaPreLayerNormForTokenClassification.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;HuggingFace is a company based in Paris and New York&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that tokens are classified rather then input words which means that</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># there might be more predicted token classes than words.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Multiple token classes might account for the same word</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [model.config.id2label[t] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>].numpy().tolist()]`,wrap:!1}}),{c(){e=d("p"),e.textContent=p,t=r(),b(a.$$.fragment)},l(o){e=c(o,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=p),t=i(o),y(a.$$.fragment,o)},m(o,_){m(o,e,_),m(o,t,_),T(a,o,_),g=!0},p:J,i(o){g||(M(a.$$.fragment,o),g=!0)},o(o){k(a.$$.fragment,o),g=!1},d(o){o&&(l(e),l(t)),w(a,o)}}}function $a($){let e,p;return e=new Te({props:{code:"bGFiZWxzJTIwJTNEJTIwcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyUwQWxvc3MlMjAlM0QlMjB0Zi5tYXRoLnJlZHVjZV9tZWFuKG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKS5sb3NzKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)`,wrap:!1}}),{c(){b(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){T(e,t,a),p=!0},p:J,i(t){p||(M(e.$$.fragment,t),p=!0)},o(t){k(e.$$.fragment,t),p=!1},d(t){w(e,t)}}}function Fa($){let e,p="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,a,g="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",o,_,V=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,j,L,G=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,C,R,B=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=d("p"),e.innerHTML=p,t=r(),a=d("ul"),a.innerHTML=g,o=r(),_=d("p"),_.innerHTML=V,j=r(),L=d("ul"),L.innerHTML=G,C=r(),R=d("p"),R.innerHTML=B},l(f){e=c(f,"P",{"data-svelte-h":!0}),u(e)!=="svelte-1ajbfxg"&&(e.innerHTML=p),t=i(f),a=c(f,"UL",{"data-svelte-h":!0}),u(a)!=="svelte-qm1t26"&&(a.innerHTML=g),o=i(f),_=c(f,"P",{"data-svelte-h":!0}),u(_)!=="svelte-1v9qsc5"&&(_.innerHTML=V),j=i(f),L=c(f,"UL",{"data-svelte-h":!0}),u(L)!=="svelte-15scerc"&&(L.innerHTML=G),C=i(f),R=c(f,"P",{"data-svelte-h":!0}),u(R)!=="svelte-1an3odd"&&(R.innerHTML=B)},m(f,N){m(f,e,N),m(f,t,N),m(f,a,N),m(f,o,N),m(f,_,N),m(f,j,N),m(f,L,N),m(f,C,N),m(f,R,N)},p:J,d(f){f&&(l(e),l(t),l(a),l(o),l(_),l(j),l(L),l(C),l(R))}}}function Na($){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=p},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(t,a){m(t,e,a)},p:J,d(t){t&&l(e)}}}function xa($){let e,p="Example:",t,a,g;return a=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURlJvYmVydGFQcmVMYXllck5vcm1Gb3JRdWVzdGlvbkFuc3dlcmluZyUwQWltcG9ydCUyMHRlbnNvcmZsb3clMjBhcyUyMHRmJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyYW5kcmVhc21hZHNlbiUyRmVmZmljaWVudF9tbG1fbTAuNDAlMjIpJTBBbW9kZWwlMjAlM0QlMjBURlJvYmVydGFQcmVMYXllck5vcm1Gb3JRdWVzdGlvbkFuc3dlcmluZy5mcm9tX3ByZXRyYWluZWQoJTIyYW5kcmVhc21hZHNlbiUyRmVmZmljaWVudF9tbG1fbTAuNDAlMjIpJTBBJTBBcXVlc3Rpb24lMkMlMjB0ZXh0JTIwJTNEJTIwJTIyV2hvJTIwd2FzJTIwSmltJTIwSGVuc29uJTNGJTIyJTJDJTIwJTIySmltJTIwSGVuc29uJTIwd2FzJTIwYSUyMG5pY2UlMjBwdXBwZXQlMjIlMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIocXVlc3Rpb24lMkMlMjB0ZXh0JTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBYW5zd2VyX3N0YXJ0X2luZGV4JTIwJTNEJTIwaW50KHRmLm1hdGguYXJnbWF4KG91dHB1dHMuc3RhcnRfbG9naXRzJTJDJTIwYXhpcyUzRC0xKSU1QjAlNUQpJTBBYW5zd2VyX2VuZF9pbmRleCUyMCUzRCUyMGludCh0Zi5tYXRoLmFyZ21heChvdXRwdXRzLmVuZF9sb2dpdHMlMkMlMjBheGlzJTNELTEpJTVCMCU1RCklMEElMEFwcmVkaWN0X2Fuc3dlcl90b2tlbnMlMjAlM0QlMjBpbnB1dHMuaW5wdXRfaWRzJTVCMCUyQyUyMGFuc3dlcl9zdGFydF9pbmRleCUyMCUzQSUyMGFuc3dlcl9lbmRfaW5kZXglMjAlMkIlMjAxJTVE",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFRobertaPreLayerNormForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaPreLayerNormForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]`,wrap:!1}}),{c(){e=d("p"),e.textContent=p,t=r(),b(a.$$.fragment)},l(o){e=c(o,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=p),t=i(o),y(a.$$.fragment,o)},m(o,_){m(o,e,_),m(o,t,_),T(a,o,_),g=!0},p:J,i(o){g||(M(a.$$.fragment,o),g=!0)},o(o){k(a.$$.fragment,o),g=!1},d(o){o&&(l(e),l(t)),w(a,o)}}}function La($){let e,p;return e=new Te({props:{code:"JTIzJTIwdGFyZ2V0JTIwaXMlMjAlMjJuaWNlJTIwcHVwcGV0JTIyJTBBdGFyZ2V0X3N0YXJ0X2luZGV4JTIwJTNEJTIwdGYuY29uc3RhbnQoJTVCMTQlNUQpJTBBdGFyZ2V0X2VuZF9pbmRleCUyMCUzRCUyMHRmLmNvbnN0YW50KCU1QjE1JTVEKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMHN0YXJ0X3Bvc2l0aW9ucyUzRHRhcmdldF9zdGFydF9pbmRleCUyQyUyMGVuZF9wb3NpdGlvbnMlM0R0YXJnZXRfZW5kX2luZGV4KSUwQWxvc3MlMjAlM0QlMjB0Zi5tYXRoLnJlZHVjZV9tZWFuKG91dHB1dHMubG9zcyk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = tf.constant([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)`,wrap:!1}}),{c(){b(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){T(e,t,a),p=!0},p:J,i(t){p||(M(e.$$.fragment,t),p=!0)},o(t){k(e.$$.fragment,t),p=!1},d(t){w(e,t)}}}function Ra($){let e,p,t,a,g,o,_="The bare RoBERTa-PreLayerNorm Model transformer outputting raw hidden-states without any specific head on top.",V,j,L=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,G,C,R=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,B,f,N,Le,ce,Go,pt,se='The <a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.TFRobertaPreLayerNormModel">TFRobertaPreLayerNormModel</a> forward method, overrides the <code>__call__</code> special method.',ut,Pe,Me,ze,rt,pe,ht,Re,ke,He,te,z,fe,ft,E='The <a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.TFRobertaPreLayerNormForCausalLM">TFRobertaPreLayerNormForCausalLM</a> forward method, overrides the <code>__call__</code> special method.',Wt,it,Ue,Zt,Et,re,so,X,we,ro,gt,F="RoBERTa-PreLayerNorm Model with a <code>language modeling</code> head on top.",P,ve,je=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,_o,bo,vt=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,dn,Ke,It,$e,et,We,Ae,Eo='The <a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.TFRobertaPreLayerNormForMaskedLM">TFRobertaPreLayerNormForMaskedLM</a> forward method, overrides the <code>__call__</code> special method.',ie,_t,Yo,Qe,_n,Yt,$t,zo,Bo,q,Ft,Oo,lt,kn=`RoBERTa-PreLayerNorm Model transformer with a sequence classification/regression head on top (a linear layer on top
of the pooled output) e.g. for GLUE tasks.`,Do,Se,bn=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Ot,Ze,Nt=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,Xo,oe,yo,Ee,Ve,cn,bt,To='The <a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.TFRobertaPreLayerNormForSequenceClassification">TFRobertaPreLayerNormForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',Mo,qt,le,yt,Ko,de,io,lo,xt,Ge,co,Tt,Uo,mo=`RobertaPreLayerNorm Model with a multiple choice classification head on top (a linear layer on top of the pooled
output and a softmax) e.g. for RocStories/SWAG tasks.`,ko,Lt,en=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Rt,wo,Ye=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,Ie,dt,vo,Oe,$o,Fo,jt,mn='The <a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.TFRobertaPreLayerNormForMultipleChoice">TFRobertaPreLayerNormForMultipleChoice</a> forward method, overrides the <code>__call__</code> special method.',Mt,Dt,po,Fe,Y,kt,uo,ge,No,Kt,Ht,xo=`RoBERTa-PreLayerNorm Model with a token classification head on top (a linear layer on top of the hidden-states
output) e.g. for Named-Entity-Recognition (NER) tasks.`,Ao,tt,pn=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Be,ot,yn=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,Lo,Ct,un,Ce,Xe,ho,Vt,Qo='The <a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.TFRobertaPreLayerNormForTokenClassification">TFRobertaPreLayerNormForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',hn,Je,ct,eo,wt,to,oo,nt,ue,A,no,Jt,Ro,De=`RoBERTa-PreLayerNorm Model with a span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,Pt,Wo,Zo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Io,qo,Ho=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,Vo,fo,jo,qe,Co,mt,_e,Jo='The <a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.TFRobertaPreLayerNormForQuestionAnswering">TFRobertaPreLayerNormForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',Po,zt,fn,at,ao,st,Ut;return e=new xe({props:{title:"TFRobertaPreLayerNormModel",local:"transformers.TFRobertaPreLayerNormModel",headingTag:"h2"}}),a=new Z({props:{name:"class transformers.TFRobertaPreLayerNormModel",anchor:"transformers.TFRobertaPreLayerNormModel",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaPreLayerNormModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig">RobertaPreLayerNormConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_tf_roberta_prelayernorm.py#L996"}}),f=new be({props:{$$slots:{default:[ra]},$$scope:{ctx:$}}}),ce=new Z({props:{name:"call",anchor:"transformers.TFRobertaPreLayerNormModel.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_hidden_states",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"past_key_values",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"use_cache",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaPreLayerNormModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRobertaPreLayerNormModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRobertaPreLayerNormModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRobertaPreLayerNormModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRobertaPreLayerNormModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRobertaPreLayerNormModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRobertaPreLayerNormModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRobertaPreLayerNormModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRobertaPreLayerNormModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaPreLayerNormModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaPreLayerNormModel.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFRobertaPreLayerNormModel.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFRobertaPreLayerNormModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFRobertaPreLayerNormModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_tf_roberta_prelayernorm.py#L1006",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig"
>RobertaPreLayerNormConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) — Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
<p>This output is usually <em>not</em> a good summary of the semantic content of the input, you’re often better with
averaging or pooling the sequence of hidden-states for the whole input sequence.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder’s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Pe=new be({props:{$$slots:{default:[ia]},$$scope:{ctx:$}}}),ze=new ye({props:{anchor:"transformers.TFRobertaPreLayerNormModel.call.example",$$slots:{default:[la]},$$scope:{ctx:$}}}),pe=new xe({props:{title:"TFRobertaPreLayerNormForCausalLM",local:"transformers.TFRobertaPreLayerNormForCausalLM",headingTag:"h2"}}),ke=new Z({props:{name:"class transformers.TFRobertaPreLayerNormForCausalLM",anchor:"transformers.TFRobertaPreLayerNormForCausalLM",parameters:[{name:"config",val:": RobertaPreLayerNormConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_tf_roberta_prelayernorm.py#L1235"}}),z=new Z({props:{name:"call",anchor:"transformers.TFRobertaPreLayerNormForCausalLM.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_hidden_states",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"past_key_values",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"use_cache",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaPreLayerNormForCausalLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRobertaPreLayerNormForCausalLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRobertaPreLayerNormForCausalLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRobertaPreLayerNormForCausalLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRobertaPreLayerNormForCausalLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRobertaPreLayerNormForCausalLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRobertaPreLayerNormForCausalLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRobertaPreLayerNormForCausalLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRobertaPreLayerNormForCausalLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaPreLayerNormForCausalLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaPreLayerNormForCausalLM.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFRobertaPreLayerNormForCausalLM.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFRobertaPreLayerNormForCausalLM.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFRobertaPreLayerNormForCausalLM.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFRobertaPreLayerNormForCausalLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_tf_roberta_prelayernorm.py#L1274",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig"
>RobertaPreLayerNormConfig</a>) and inputs.</p>
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
`}}),it=new be({props:{$$slots:{default:[da]},$$scope:{ctx:$}}}),Zt=new ye({props:{anchor:"transformers.TFRobertaPreLayerNormForCausalLM.call.example",$$slots:{default:[ca]},$$scope:{ctx:$}}}),re=new xe({props:{title:"TFRobertaPreLayerNormForMaskedLM",local:"transformers.TFRobertaPreLayerNormForMaskedLM",headingTag:"h2"}}),we=new Z({props:{name:"class transformers.TFRobertaPreLayerNormForMaskedLM",anchor:"transformers.TFRobertaPreLayerNormForMaskedLM",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaPreLayerNormForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig">RobertaPreLayerNormConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_tf_roberta_prelayernorm.py#L1139"}}),Ke=new be({props:{$$slots:{default:[ma]},$$scope:{ctx:$}}}),et=new Z({props:{name:"call",anchor:"transformers.TFRobertaPreLayerNormForMaskedLM.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaPreLayerNormForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRobertaPreLayerNormForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRobertaPreLayerNormForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRobertaPreLayerNormForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRobertaPreLayerNormForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRobertaPreLayerNormForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRobertaPreLayerNormForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRobertaPreLayerNormForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRobertaPreLayerNormForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaPreLayerNormForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaPreLayerNormForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_tf_roberta_prelayernorm.py#L1162",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig"
>RobertaPreLayerNormConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) — Masked language modeling (MLM) loss.</p>
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
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),_t=new be({props:{$$slots:{default:[pa]},$$scope:{ctx:$}}}),Qe=new ye({props:{anchor:"transformers.TFRobertaPreLayerNormForMaskedLM.call.example",$$slots:{default:[ua]},$$scope:{ctx:$}}}),Yt=new ye({props:{anchor:"transformers.TFRobertaPreLayerNormForMaskedLM.call.example-2",$$slots:{default:[ha]},$$scope:{ctx:$}}}),zo=new xe({props:{title:"TFRobertaPreLayerNormForSequenceClassification",local:"transformers.TFRobertaPreLayerNormForSequenceClassification",headingTag:"h2"}}),Ft=new Z({props:{name:"class transformers.TFRobertaPreLayerNormForSequenceClassification",anchor:"transformers.TFRobertaPreLayerNormForSequenceClassification",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaPreLayerNormForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig">RobertaPreLayerNormConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_tf_roberta_prelayernorm.py#L1415"}}),oe=new be({props:{$$slots:{default:[fa]},$$scope:{ctx:$}}}),Ve=new Z({props:{name:"call",anchor:"transformers.TFRobertaPreLayerNormForSequenceClassification.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaPreLayerNormForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRobertaPreLayerNormForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRobertaPreLayerNormForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRobertaPreLayerNormForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRobertaPreLayerNormForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRobertaPreLayerNormForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRobertaPreLayerNormForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRobertaPreLayerNormForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRobertaPreLayerNormForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaPreLayerNormForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaPreLayerNormForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_tf_roberta_prelayernorm.py#L1437",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig"
>RobertaPreLayerNormConfig</a>) and inputs.</p>
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
`}}),qt=new be({props:{$$slots:{default:[ga]},$$scope:{ctx:$}}}),yt=new ye({props:{anchor:"transformers.TFRobertaPreLayerNormForSequenceClassification.call.example",$$slots:{default:[_a]},$$scope:{ctx:$}}}),de=new ye({props:{anchor:"transformers.TFRobertaPreLayerNormForSequenceClassification.call.example-2",$$slots:{default:[ba]},$$scope:{ctx:$}}}),lo=new xe({props:{title:"TFRobertaPreLayerNormForMultipleChoice",local:"transformers.TFRobertaPreLayerNormForMultipleChoice",headingTag:"h2"}}),co=new Z({props:{name:"class transformers.TFRobertaPreLayerNormForMultipleChoice",anchor:"transformers.TFRobertaPreLayerNormForMultipleChoice",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaPreLayerNormForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig">RobertaPreLayerNormConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_tf_roberta_prelayernorm.py#L1505"}}),dt=new be({props:{$$slots:{default:[ya]},$$scope:{ctx:$}}}),$o=new Z({props:{name:"call",anchor:"transformers.TFRobertaPreLayerNormForMultipleChoice.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaPreLayerNormForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRobertaPreLayerNormForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRobertaPreLayerNormForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRobertaPreLayerNormForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRobertaPreLayerNormForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRobertaPreLayerNormForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRobertaPreLayerNormForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRobertaPreLayerNormForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRobertaPreLayerNormForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaPreLayerNormForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaPreLayerNormForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_tf_roberta_prelayernorm.py#L1528",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig"
>RobertaPreLayerNormConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(batch_size, )</em>, <em>optional</em>, returned when <code>labels</code> is provided) — Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) — <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Dt=new be({props:{$$slots:{default:[Ta]},$$scope:{ctx:$}}}),Fe=new ye({props:{anchor:"transformers.TFRobertaPreLayerNormForMultipleChoice.call.example",$$slots:{default:[Ma]},$$scope:{ctx:$}}}),kt=new xe({props:{title:"TFRobertaPreLayerNormForTokenClassification",local:"transformers.TFRobertaPreLayerNormForTokenClassification",headingTag:"h2"}}),No=new Z({props:{name:"class transformers.TFRobertaPreLayerNormForTokenClassification",anchor:"transformers.TFRobertaPreLayerNormForTokenClassification",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaPreLayerNormForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig">RobertaPreLayerNormConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_tf_roberta_prelayernorm.py#L1610"}}),Ct=new be({props:{$$slots:{default:[ka]},$$scope:{ctx:$}}}),Xe=new Z({props:{name:"call",anchor:"transformers.TFRobertaPreLayerNormForTokenClassification.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaPreLayerNormForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRobertaPreLayerNormForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRobertaPreLayerNormForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRobertaPreLayerNormForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRobertaPreLayerNormForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRobertaPreLayerNormForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRobertaPreLayerNormForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRobertaPreLayerNormForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRobertaPreLayerNormForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaPreLayerNormForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaPreLayerNormForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_tf_roberta_prelayernorm.py#L1638",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig"
>RobertaPreLayerNormConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of unmasked labels, returned when <code>labels</code> is provided)  — Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) — Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Je=new be({props:{$$slots:{default:[wa]},$$scope:{ctx:$}}}),eo=new ye({props:{anchor:"transformers.TFRobertaPreLayerNormForTokenClassification.call.example",$$slots:{default:[va]},$$scope:{ctx:$}}}),to=new ye({props:{anchor:"transformers.TFRobertaPreLayerNormForTokenClassification.call.example-2",$$slots:{default:[$a]},$$scope:{ctx:$}}}),nt=new xe({props:{title:"TFRobertaPreLayerNormForQuestionAnswering",local:"transformers.TFRobertaPreLayerNormForQuestionAnswering",headingTag:"h2"}}),no=new Z({props:{name:"class transformers.TFRobertaPreLayerNormForQuestionAnswering",anchor:"transformers.TFRobertaPreLayerNormForQuestionAnswering",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRobertaPreLayerNormForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig">RobertaPreLayerNormConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_tf_roberta_prelayernorm.py#L1706"}}),fo=new be({props:{$$slots:{default:[Fa]},$$scope:{ctx:$}}}),Co=new Z({props:{name:"call",anchor:"transformers.TFRobertaPreLayerNormForQuestionAnswering.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"start_positions",val:": np.ndarray | tf.Tensor | None = None"},{name:"end_positions",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRobertaPreLayerNormForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRobertaPreLayerNormForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRobertaPreLayerNormForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRobertaPreLayerNormForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRobertaPreLayerNormForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRobertaPreLayerNormForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRobertaPreLayerNormForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRobertaPreLayerNormForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRobertaPreLayerNormForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRobertaPreLayerNormForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRobertaPreLayerNormForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFRobertaPreLayerNormForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_tf_roberta_prelayernorm.py#L1729",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig"
>RobertaPreLayerNormConfig</a>) and inputs.</p>
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
`}}),zt=new be({props:{$$slots:{default:[Na]},$$scope:{ctx:$}}}),at=new ye({props:{anchor:"transformers.TFRobertaPreLayerNormForQuestionAnswering.call.example",$$slots:{default:[xa]},$$scope:{ctx:$}}}),st=new ye({props:{anchor:"transformers.TFRobertaPreLayerNormForQuestionAnswering.call.example-2",$$slots:{default:[La]},$$scope:{ctx:$}}}),{c(){b(e.$$.fragment),p=r(),t=d("div"),b(a.$$.fragment),g=r(),o=d("p"),o.textContent=_,V=r(),j=d("p"),j.innerHTML=L,G=r(),C=d("p"),C.innerHTML=R,B=r(),b(f.$$.fragment),N=r(),Le=d("div"),b(ce.$$.fragment),Go=r(),pt=d("p"),pt.innerHTML=se,ut=r(),b(Pe.$$.fragment),Me=r(),b(ze.$$.fragment),rt=r(),b(pe.$$.fragment),ht=r(),Re=d("div"),b(ke.$$.fragment),He=r(),te=d("div"),b(z.$$.fragment),fe=r(),ft=d("p"),ft.innerHTML=E,Wt=r(),b(it.$$.fragment),Ue=r(),b(Zt.$$.fragment),Et=r(),b(re.$$.fragment),so=r(),X=d("div"),b(we.$$.fragment),ro=r(),gt=d("p"),gt.innerHTML=F,P=r(),ve=d("p"),ve.innerHTML=je,_o=r(),bo=d("p"),bo.innerHTML=vt,dn=r(),b(Ke.$$.fragment),It=r(),$e=d("div"),b(et.$$.fragment),We=r(),Ae=d("p"),Ae.innerHTML=Eo,ie=r(),b(_t.$$.fragment),Yo=r(),b(Qe.$$.fragment),_n=r(),b(Yt.$$.fragment),$t=r(),b(zo.$$.fragment),Bo=r(),q=d("div"),b(Ft.$$.fragment),Oo=r(),lt=d("p"),lt.textContent=kn,Do=r(),Se=d("p"),Se.innerHTML=bn,Ot=r(),Ze=d("p"),Ze.innerHTML=Nt,Xo=r(),b(oe.$$.fragment),yo=r(),Ee=d("div"),b(Ve.$$.fragment),cn=r(),bt=d("p"),bt.innerHTML=To,Mo=r(),b(qt.$$.fragment),le=r(),b(yt.$$.fragment),Ko=r(),b(de.$$.fragment),io=r(),b(lo.$$.fragment),xt=r(),Ge=d("div"),b(co.$$.fragment),Tt=r(),Uo=d("p"),Uo.textContent=mo,ko=r(),Lt=d("p"),Lt.innerHTML=en,Rt=r(),wo=d("p"),wo.innerHTML=Ye,Ie=r(),b(dt.$$.fragment),vo=r(),Oe=d("div"),b($o.$$.fragment),Fo=r(),jt=d("p"),jt.innerHTML=mn,Mt=r(),b(Dt.$$.fragment),po=r(),b(Fe.$$.fragment),Y=r(),b(kt.$$.fragment),uo=r(),ge=d("div"),b(No.$$.fragment),Kt=r(),Ht=d("p"),Ht.textContent=xo,Ao=r(),tt=d("p"),tt.innerHTML=pn,Be=r(),ot=d("p"),ot.innerHTML=yn,Lo=r(),b(Ct.$$.fragment),un=r(),Ce=d("div"),b(Xe.$$.fragment),ho=r(),Vt=d("p"),Vt.innerHTML=Qo,hn=r(),b(Je.$$.fragment),ct=r(),b(eo.$$.fragment),wt=r(),b(to.$$.fragment),oo=r(),b(nt.$$.fragment),ue=r(),A=d("div"),b(no.$$.fragment),Jt=r(),Ro=d("p"),Ro.innerHTML=De,Pt=r(),Wo=d("p"),Wo.innerHTML=Zo,Io=r(),qo=d("p"),qo.innerHTML=Ho,Vo=r(),b(fo.$$.fragment),jo=r(),qe=d("div"),b(Co.$$.fragment),mt=r(),_e=d("p"),_e.innerHTML=Jo,Po=r(),b(zt.$$.fragment),fn=r(),b(at.$$.fragment),ao=r(),b(st.$$.fragment),this.h()},l(n){y(e.$$.fragment,n),p=i(n),t=c(n,"DIV",{class:!0});var h=U(t);y(a.$$.fragment,h),g=i(h),o=c(h,"P",{"data-svelte-h":!0}),u(o)!=="svelte-33ezil"&&(o.textContent=_),V=i(h),j=c(h,"P",{"data-svelte-h":!0}),u(j)!=="svelte-1qaxm70"&&(j.innerHTML=L),G=i(h),C=c(h,"P",{"data-svelte-h":!0}),u(C)!=="svelte-1be7e3c"&&(C.innerHTML=R),B=i(h),y(f.$$.fragment,h),N=i(h),Le=c(h,"DIV",{class:!0});var he=U(Le);y(ce.$$.fragment,he),Go=i(he),pt=c(he,"P",{"data-svelte-h":!0}),u(pt)!=="svelte-e41oeh"&&(pt.innerHTML=se),ut=i(he),y(Pe.$$.fragment,he),Me=i(he),y(ze.$$.fragment,he),he.forEach(l),h.forEach(l),rt=i(n),y(pe.$$.fragment,n),ht=i(n),Re=c(n,"DIV",{class:!0});var I=U(Re);y(ke.$$.fragment,I),He=i(I),te=c(I,"DIV",{class:!0});var ne=U(te);y(z.$$.fragment,ne),fe=i(ne),ft=c(ne,"P",{"data-svelte-h":!0}),u(ft)!=="svelte-177qx1d"&&(ft.innerHTML=E),Wt=i(ne),y(it.$$.fragment,ne),Ue=i(ne),y(Zt.$$.fragment,ne),ne.forEach(l),I.forEach(l),Et=i(n),y(re.$$.fragment,n),so=i(n),X=c(n,"DIV",{class:!0});var Q=U(X);y(we.$$.fragment,Q),ro=i(Q),gt=c(Q,"P",{"data-svelte-h":!0}),u(gt)!=="svelte-8dtlt4"&&(gt.innerHTML=F),P=i(Q),ve=c(Q,"P",{"data-svelte-h":!0}),u(ve)!=="svelte-1qaxm70"&&(ve.innerHTML=je),_o=i(Q),bo=c(Q,"P",{"data-svelte-h":!0}),u(bo)!=="svelte-1be7e3c"&&(bo.innerHTML=vt),dn=i(Q),y(Ke.$$.fragment,Q),It=i(Q),$e=c(Q,"DIV",{class:!0});var O=U($e);y(et.$$.fragment,O),We=i(O),Ae=c(O,"P",{"data-svelte-h":!0}),u(Ae)!=="svelte-1gl5p55"&&(Ae.innerHTML=Eo),ie=i(O),y(_t.$$.fragment,O),Yo=i(O),y(Qe.$$.fragment,O),_n=i(O),y(Yt.$$.fragment,O),O.forEach(l),Q.forEach(l),$t=i(n),y(zo.$$.fragment,n),Bo=i(n),q=c(n,"DIV",{class:!0});var D=U(q);y(Ft.$$.fragment,D),Oo=i(D),lt=c(D,"P",{"data-svelte-h":!0}),u(lt)!=="svelte-1bv1on4"&&(lt.textContent=kn),Do=i(D),Se=c(D,"P",{"data-svelte-h":!0}),u(Se)!=="svelte-1qaxm70"&&(Se.innerHTML=bn),Ot=i(D),Ze=c(D,"P",{"data-svelte-h":!0}),u(Ze)!=="svelte-1be7e3c"&&(Ze.innerHTML=Nt),Xo=i(D),y(oe.$$.fragment,D),yo=i(D),Ee=c(D,"DIV",{class:!0});var ae=U(Ee);y(Ve.$$.fragment,ae),cn=i(ae),bt=c(ae,"P",{"data-svelte-h":!0}),u(bt)!=="svelte-ktse5j"&&(bt.innerHTML=To),Mo=i(ae),y(qt.$$.fragment,ae),le=i(ae),y(yt.$$.fragment,ae),Ko=i(ae),y(de.$$.fragment,ae),ae.forEach(l),D.forEach(l),io=i(n),y(lo.$$.fragment,n),xt=i(n),Ge=c(n,"DIV",{class:!0});var H=U(Ge);y(co.$$.fragment,H),Tt=i(H),Uo=c(H,"P",{"data-svelte-h":!0}),u(Uo)!=="svelte-1t8wc3p"&&(Uo.textContent=mo),ko=i(H),Lt=c(H,"P",{"data-svelte-h":!0}),u(Lt)!=="svelte-1qaxm70"&&(Lt.innerHTML=en),Rt=i(H),wo=c(H,"P",{"data-svelte-h":!0}),u(wo)!=="svelte-1be7e3c"&&(wo.innerHTML=Ye),Ie=i(H),y(dt.$$.fragment,H),vo=i(H),Oe=c(H,"DIV",{class:!0});var Ne=U(Oe);y($o.$$.fragment,Ne),Fo=i(Ne),jt=c(Ne,"P",{"data-svelte-h":!0}),u(jt)!=="svelte-fi8fm3"&&(jt.innerHTML=mn),Mt=i(Ne),y(Dt.$$.fragment,Ne),po=i(Ne),y(Fe.$$.fragment,Ne),Ne.forEach(l),H.forEach(l),Y=i(n),y(kt.$$.fragment,n),uo=i(n),ge=c(n,"DIV",{class:!0});var S=U(ge);y(No.$$.fragment,S),Kt=i(S),Ht=c(S,"P",{"data-svelte-h":!0}),u(Ht)!=="svelte-1wv1kmv"&&(Ht.textContent=xo),Ao=i(S),tt=c(S,"P",{"data-svelte-h":!0}),u(tt)!=="svelte-1qaxm70"&&(tt.innerHTML=pn),Be=i(S),ot=c(S,"P",{"data-svelte-h":!0}),u(ot)!=="svelte-1be7e3c"&&(ot.innerHTML=yn),Lo=i(S),y(Ct.$$.fragment,S),un=i(S),Ce=c(S,"DIV",{class:!0});var K=U(Ce);y(Xe.$$.fragment,K),ho=i(K),Vt=c(K,"P",{"data-svelte-h":!0}),u(Vt)!=="svelte-ngmfft"&&(Vt.innerHTML=Qo),hn=i(K),y(Je.$$.fragment,K),ct=i(K),y(eo.$$.fragment,K),wt=i(K),y(to.$$.fragment,K),K.forEach(l),S.forEach(l),oo=i(n),y(nt.$$.fragment,n),ue=i(n),A=c(n,"DIV",{class:!0});var ee=U(A);y(no.$$.fragment,ee),Jt=i(ee),Ro=c(ee,"P",{"data-svelte-h":!0}),u(Ro)!=="svelte-4mgyt1"&&(Ro.innerHTML=De),Pt=i(ee),Wo=c(ee,"P",{"data-svelte-h":!0}),u(Wo)!=="svelte-1qaxm70"&&(Wo.innerHTML=Zo),Io=i(ee),qo=c(ee,"P",{"data-svelte-h":!0}),u(qo)!=="svelte-1be7e3c"&&(qo.innerHTML=Ho),Vo=i(ee),y(fo.$$.fragment,ee),jo=i(ee),qe=c(ee,"DIV",{class:!0});var me=U(qe);y(Co.$$.fragment,me),mt=i(me),_e=c(me,"P",{"data-svelte-h":!0}),u(_e)!=="svelte-y8g7gp"&&(_e.innerHTML=Jo),Po=i(me),y(zt.$$.fragment,me),fn=i(me),y(at.$$.fragment,me),ao=i(me),y(st.$$.fragment,me),me.forEach(l),ee.forEach(l),this.h()},h(){W(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(n,h){T(e,n,h),m(n,p,h),m(n,t,h),T(a,t,null),s(t,g),s(t,o),s(t,V),s(t,j),s(t,G),s(t,C),s(t,B),T(f,t,null),s(t,N),s(t,Le),T(ce,Le,null),s(Le,Go),s(Le,pt),s(Le,ut),T(Pe,Le,null),s(Le,Me),T(ze,Le,null),m(n,rt,h),T(pe,n,h),m(n,ht,h),m(n,Re,h),T(ke,Re,null),s(Re,He),s(Re,te),T(z,te,null),s(te,fe),s(te,ft),s(te,Wt),T(it,te,null),s(te,Ue),T(Zt,te,null),m(n,Et,h),T(re,n,h),m(n,so,h),m(n,X,h),T(we,X,null),s(X,ro),s(X,gt),s(X,P),s(X,ve),s(X,_o),s(X,bo),s(X,dn),T(Ke,X,null),s(X,It),s(X,$e),T(et,$e,null),s($e,We),s($e,Ae),s($e,ie),T(_t,$e,null),s($e,Yo),T(Qe,$e,null),s($e,_n),T(Yt,$e,null),m(n,$t,h),T(zo,n,h),m(n,Bo,h),m(n,q,h),T(Ft,q,null),s(q,Oo),s(q,lt),s(q,Do),s(q,Se),s(q,Ot),s(q,Ze),s(q,Xo),T(oe,q,null),s(q,yo),s(q,Ee),T(Ve,Ee,null),s(Ee,cn),s(Ee,bt),s(Ee,Mo),T(qt,Ee,null),s(Ee,le),T(yt,Ee,null),s(Ee,Ko),T(de,Ee,null),m(n,io,h),T(lo,n,h),m(n,xt,h),m(n,Ge,h),T(co,Ge,null),s(Ge,Tt),s(Ge,Uo),s(Ge,ko),s(Ge,Lt),s(Ge,Rt),s(Ge,wo),s(Ge,Ie),T(dt,Ge,null),s(Ge,vo),s(Ge,Oe),T($o,Oe,null),s(Oe,Fo),s(Oe,jt),s(Oe,Mt),T(Dt,Oe,null),s(Oe,po),T(Fe,Oe,null),m(n,Y,h),T(kt,n,h),m(n,uo,h),m(n,ge,h),T(No,ge,null),s(ge,Kt),s(ge,Ht),s(ge,Ao),s(ge,tt),s(ge,Be),s(ge,ot),s(ge,Lo),T(Ct,ge,null),s(ge,un),s(ge,Ce),T(Xe,Ce,null),s(Ce,ho),s(Ce,Vt),s(Ce,hn),T(Je,Ce,null),s(Ce,ct),T(eo,Ce,null),s(Ce,wt),T(to,Ce,null),m(n,oo,h),T(nt,n,h),m(n,ue,h),m(n,A,h),T(no,A,null),s(A,Jt),s(A,Ro),s(A,Pt),s(A,Wo),s(A,Io),s(A,qo),s(A,Vo),T(fo,A,null),s(A,jo),s(A,qe),T(Co,qe,null),s(qe,mt),s(qe,_e),s(qe,Po),T(zt,qe,null),s(qe,fn),T(at,qe,null),s(qe,ao),T(st,qe,null),Ut=!0},p(n,h){const he={};h&2&&(he.$$scope={dirty:h,ctx:n}),f.$set(he);const I={};h&2&&(I.$$scope={dirty:h,ctx:n}),Pe.$set(I);const ne={};h&2&&(ne.$$scope={dirty:h,ctx:n}),ze.$set(ne);const Q={};h&2&&(Q.$$scope={dirty:h,ctx:n}),it.$set(Q);const O={};h&2&&(O.$$scope={dirty:h,ctx:n}),Zt.$set(O);const D={};h&2&&(D.$$scope={dirty:h,ctx:n}),Ke.$set(D);const ae={};h&2&&(ae.$$scope={dirty:h,ctx:n}),_t.$set(ae);const H={};h&2&&(H.$$scope={dirty:h,ctx:n}),Qe.$set(H);const Ne={};h&2&&(Ne.$$scope={dirty:h,ctx:n}),Yt.$set(Ne);const S={};h&2&&(S.$$scope={dirty:h,ctx:n}),oe.$set(S);const K={};h&2&&(K.$$scope={dirty:h,ctx:n}),qt.$set(K);const ee={};h&2&&(ee.$$scope={dirty:h,ctx:n}),yt.$set(ee);const me={};h&2&&(me.$$scope={dirty:h,ctx:n}),de.$set(me);const So={};h&2&&(So.$$scope={dirty:h,ctx:n}),dt.$set(So);const wn={};h&2&&(wn.$$scope={dirty:h,ctx:n}),Dt.$set(wn);const Fn={};h&2&&(Fn.$$scope={dirty:h,ctx:n}),Fe.$set(Fn);const Tn={};h&2&&(Tn.$$scope={dirty:h,ctx:n}),Ct.$set(Tn);const Ln={};h&2&&(Ln.$$scope={dirty:h,ctx:n}),Je.$set(Ln);const Nn={};h&2&&(Nn.$$scope={dirty:h,ctx:n}),eo.$set(Nn);const go={};h&2&&(go.$$scope={dirty:h,ctx:n}),to.$set(go);const gn={};h&2&&(gn.$$scope={dirty:h,ctx:n}),fo.$set(gn);const xn={};h&2&&(xn.$$scope={dirty:h,ctx:n}),zt.$set(xn);const Mn={};h&2&&(Mn.$$scope={dirty:h,ctx:n}),at.$set(Mn);const Rn={};h&2&&(Rn.$$scope={dirty:h,ctx:n}),st.$set(Rn)},i(n){Ut||(M(e.$$.fragment,n),M(a.$$.fragment,n),M(f.$$.fragment,n),M(ce.$$.fragment,n),M(Pe.$$.fragment,n),M(ze.$$.fragment,n),M(pe.$$.fragment,n),M(ke.$$.fragment,n),M(z.$$.fragment,n),M(it.$$.fragment,n),M(Zt.$$.fragment,n),M(re.$$.fragment,n),M(we.$$.fragment,n),M(Ke.$$.fragment,n),M(et.$$.fragment,n),M(_t.$$.fragment,n),M(Qe.$$.fragment,n),M(Yt.$$.fragment,n),M(zo.$$.fragment,n),M(Ft.$$.fragment,n),M(oe.$$.fragment,n),M(Ve.$$.fragment,n),M(qt.$$.fragment,n),M(yt.$$.fragment,n),M(de.$$.fragment,n),M(lo.$$.fragment,n),M(co.$$.fragment,n),M(dt.$$.fragment,n),M($o.$$.fragment,n),M(Dt.$$.fragment,n),M(Fe.$$.fragment,n),M(kt.$$.fragment,n),M(No.$$.fragment,n),M(Ct.$$.fragment,n),M(Xe.$$.fragment,n),M(Je.$$.fragment,n),M(eo.$$.fragment,n),M(to.$$.fragment,n),M(nt.$$.fragment,n),M(no.$$.fragment,n),M(fo.$$.fragment,n),M(Co.$$.fragment,n),M(zt.$$.fragment,n),M(at.$$.fragment,n),M(st.$$.fragment,n),Ut=!0)},o(n){k(e.$$.fragment,n),k(a.$$.fragment,n),k(f.$$.fragment,n),k(ce.$$.fragment,n),k(Pe.$$.fragment,n),k(ze.$$.fragment,n),k(pe.$$.fragment,n),k(ke.$$.fragment,n),k(z.$$.fragment,n),k(it.$$.fragment,n),k(Zt.$$.fragment,n),k(re.$$.fragment,n),k(we.$$.fragment,n),k(Ke.$$.fragment,n),k(et.$$.fragment,n),k(_t.$$.fragment,n),k(Qe.$$.fragment,n),k(Yt.$$.fragment,n),k(zo.$$.fragment,n),k(Ft.$$.fragment,n),k(oe.$$.fragment,n),k(Ve.$$.fragment,n),k(qt.$$.fragment,n),k(yt.$$.fragment,n),k(de.$$.fragment,n),k(lo.$$.fragment,n),k(co.$$.fragment,n),k(dt.$$.fragment,n),k($o.$$.fragment,n),k(Dt.$$.fragment,n),k(Fe.$$.fragment,n),k(kt.$$.fragment,n),k(No.$$.fragment,n),k(Ct.$$.fragment,n),k(Xe.$$.fragment,n),k(Je.$$.fragment,n),k(eo.$$.fragment,n),k(to.$$.fragment,n),k(nt.$$.fragment,n),k(no.$$.fragment,n),k(fo.$$.fragment,n),k(Co.$$.fragment,n),k(zt.$$.fragment,n),k(at.$$.fragment,n),k(st.$$.fragment,n),Ut=!1},d(n){n&&(l(p),l(t),l(rt),l(ht),l(Re),l(Et),l(so),l(X),l($t),l(Bo),l(q),l(io),l(xt),l(Ge),l(Y),l(uo),l(ge),l(oo),l(ue),l(A)),w(e,n),w(a),w(f),w(ce),w(Pe),w(ze),w(pe,n),w(ke),w(z),w(it),w(Zt),w(re,n),w(we),w(Ke),w(et),w(_t),w(Qe),w(Yt),w(zo,n),w(Ft),w(oe),w(Ve),w(qt),w(yt),w(de),w(lo,n),w(co),w(dt),w($o),w(Dt),w(Fe),w(kt,n),w(No),w(Ct),w(Xe),w(Je),w(eo),w(to),w(nt,n),w(no),w(fo),w(Co),w(zt),w(at),w(st)}}}function ja($){let e,p;return e=new Pn({props:{$$slots:{default:[Ra]},$$scope:{ctx:$}}}),{c(){b(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){T(e,t,a),p=!0},p(t,a){const g={};a&2&&(g.$$scope={dirty:a,ctx:t}),e.$set(g)},i(t){p||(M(e.$$.fragment,t),p=!0)},o(t){k(e.$$.fragment,t),p=!1},d(t){w(e,t)}}}function Ca($){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=p},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(t,a){m(t,e,a)},p:J,d(t){t&&l(e)}}}function Ja($){let e,p="Example:",t,a,g;return a=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4Um9iZXJ0YVByZUxheWVyTm9ybU1vZGVsJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyYW5kcmVhc21hZHNlbiUyRmVmZmljaWVudF9tbG1fbTAuNDAlMjIpJTBBbW9kZWwlMjAlM0QlMjBGbGF4Um9iZXJ0YVByZUxheWVyTm9ybU1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJhbmRyZWFzbWFkc2VuJTJGZWZmaWNpZW50X21sbV9tMC40MCUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIyamF4JTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEFsYXN0X2hpZGRlbl9zdGF0ZXMlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRl",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxRobertaPreLayerNormModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaPreLayerNormModel.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=d("p"),e.textContent=p,t=r(),b(a.$$.fragment)},l(o){e=c(o,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=p),t=i(o),y(a.$$.fragment,o)},m(o,_){m(o,e,_),m(o,t,_),T(a,o,_),g=!0},p:J,i(o){g||(M(a.$$.fragment,o),g=!0)},o(o){k(a.$$.fragment,o),g=!1},d(o){o&&(l(e),l(t)),w(a,o)}}}function Pa($){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=p},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(t,a){m(t,e,a)},p:J,d(t){t&&l(e)}}}function za($){let e,p="Example:",t,a,g;return a=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4Um9iZXJ0YVByZUxheWVyTm9ybUZvckNhdXNhbExNJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyYW5kcmVhc21hZHNlbiUyRmVmZmljaWVudF9tbG1fbTAuNDAlMjIpJTBBbW9kZWwlMjAlM0QlMjBGbGF4Um9iZXJ0YVByZUxheWVyTm9ybUZvckNhdXNhbExNLmZyb21fcHJldHJhaW5lZCglMjJhbmRyZWFzbWFkc2VuJTJGZWZmaWNpZW50X21sbV9tMC40MCUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIybnAlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQSUyMyUyMHJldHJpZXZlJTIwbG9ndHMlMjBmb3IlMjBuZXh0JTIwdG9rZW4lMEFuZXh0X3Rva2VuX2xvZ2l0cyUyMCUzRCUyMG91dHB1dHMubG9naXRzJTVCJTNBJTJDJTIwLTElNUQ=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxRobertaPreLayerNormForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaPreLayerNormForCausalLM.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve logts for next token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`,wrap:!1}}),{c(){e=d("p"),e.textContent=p,t=r(),b(a.$$.fragment)},l(o){e=c(o,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=p),t=i(o),y(a.$$.fragment,o)},m(o,_){m(o,e,_),m(o,t,_),T(a,o,_),g=!0},p:J,i(o){g||(M(a.$$.fragment,o),g=!0)},o(o){k(a.$$.fragment,o),g=!1},d(o){o&&(l(e),l(t)),w(a,o)}}}function Ua($){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=p},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(t,a){m(t,e,a)},p:J,d(t){t&&l(e)}}}function Wa($){let e,p="Example:",t,a,g;return a=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4Um9iZXJ0YVByZUxheWVyTm9ybUZvck1hc2tlZExNJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyYW5kcmVhc21hZHNlbiUyRmVmZmljaWVudF9tbG1fbTAuNDAlMjIpJTBBbW9kZWwlMjAlM0QlMjBGbGF4Um9iZXJ0YVByZUxheWVyTm9ybUZvck1hc2tlZExNLmZyb21fcHJldHJhaW5lZCglMjJhbmRyZWFzbWFkc2VuJTJGZWZmaWNpZW50X21sbV9tMC40MCUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIyVGhlJTIwY2FwaXRhbCUyMG9mJTIwRnJhbmNlJTIwaXMlMjAlNUJNQVNLJTVELiUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIyamF4JTIyKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEFsb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxRobertaPreLayerNormForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaPreLayerNormForMaskedLM.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=d("p"),e.textContent=p,t=r(),b(a.$$.fragment)},l(o){e=c(o,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=p),t=i(o),y(a.$$.fragment,o)},m(o,_){m(o,e,_),m(o,t,_),T(a,o,_),g=!0},p:J,i(o){g||(M(a.$$.fragment,o),g=!0)},o(o){k(a.$$.fragment,o),g=!1},d(o){o&&(l(e),l(t)),w(a,o)}}}function Za($){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=p},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(t,a){m(t,e,a)},p:J,d(t){t&&l(e)}}}function Ia($){let e,p="Example:",t,a,g;return a=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4Um9iZXJ0YVByZUxheWVyTm9ybUZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJhbmRyZWFzbWFkc2VuJTJGZWZmaWNpZW50X21sbV9tMC40MCUyMiklMEFtb2RlbCUyMCUzRCUyMEZsYXhSb2JlcnRhUHJlTGF5ZXJOb3JtRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyYW5kcmVhc21hZHNlbiUyRmVmZmljaWVudF9tbG1fbTAuNDAlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMmpheCUyMiklMEElMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxRobertaPreLayerNormForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaPreLayerNormForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=d("p"),e.textContent=p,t=r(),b(a.$$.fragment)},l(o){e=c(o,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=p),t=i(o),y(a.$$.fragment,o)},m(o,_){m(o,e,_),m(o,t,_),T(a,o,_),g=!0},p:J,i(o){g||(M(a.$$.fragment,o),g=!0)},o(o){k(a.$$.fragment,o),g=!1},d(o){o&&(l(e),l(t)),w(a,o)}}}function qa($){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=p},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(t,a){m(t,e,a)},p:J,d(t){t&&l(e)}}}function Ha($){let e,p="Example:",t,a,g;return a=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4Um9iZXJ0YVByZUxheWVyTm9ybUZvck11bHRpcGxlQ2hvaWNlJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyYW5kcmVhc21hZHNlbiUyRmVmZmljaWVudF9tbG1fbTAuNDAlMjIpJTBBbW9kZWwlMjAlM0QlMjBGbGF4Um9iZXJ0YVByZUxheWVyTm9ybUZvck11bHRpcGxlQ2hvaWNlLmZyb21fcHJldHJhaW5lZCglMjJhbmRyZWFzbWFkc2VuJTJGZWZmaWNpZW50X21sbV9tMC40MCUyMiklMEElMEFwcm9tcHQlMjAlM0QlMjAlMjJJbiUyMEl0YWx5JTJDJTIwcGl6emElMjBzZXJ2ZWQlMjBpbiUyMGZvcm1hbCUyMHNldHRpbmdzJTJDJTIwc3VjaCUyMGFzJTIwYXQlMjBhJTIwcmVzdGF1cmFudCUyQyUyMGlzJTIwcHJlc2VudGVkJTIwdW5zbGljZWQuJTIyJTBBY2hvaWNlMCUyMCUzRCUyMCUyMkl0JTIwaXMlMjBlYXRlbiUyMHdpdGglMjBhJTIwZm9yayUyMGFuZCUyMGElMjBrbmlmZS4lMjIlMEFjaG9pY2UxJTIwJTNEJTIwJTIySXQlMjBpcyUyMGVhdGVuJTIwd2hpbGUlMjBoZWxkJTIwaW4lMjB0aGUlMjBoYW5kLiUyMiUwQSUwQWVuY29kaW5nJTIwJTNEJTIwdG9rZW5pemVyKCU1QnByb21wdCUyQyUyMHByb21wdCU1RCUyQyUyMCU1QmNob2ljZTAlMkMlMjBjaG9pY2UxJTVEJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJqYXglMjIlMkMlMjBwYWRkaW5nJTNEVHJ1ZSklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKiolN0JrJTNBJTIwdiU1Qk5vbmUlMkMlMjAlM0ElNUQlMjBmb3IlMjBrJTJDJTIwdiUyMGluJTIwZW5jb2RpbmcuaXRlbXMoKSU3RCklMEElMEFsb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxRobertaPreLayerNormForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaPreLayerNormForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v[<span class="hljs-literal">None</span>, :] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()})

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=d("p"),e.textContent=p,t=r(),b(a.$$.fragment)},l(o){e=c(o,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=p),t=i(o),y(a.$$.fragment,o)},m(o,_){m(o,e,_),m(o,t,_),T(a,o,_),g=!0},p:J,i(o){g||(M(a.$$.fragment,o),g=!0)},o(o){k(a.$$.fragment,o),g=!1},d(o){o&&(l(e),l(t)),w(a,o)}}}function Va($){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=p},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(t,a){m(t,e,a)},p:J,d(t){t&&l(e)}}}function Ga($){let e,p="Example:",t,a,g;return a=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4Um9iZXJ0YVByZUxheWVyTm9ybUZvclRva2VuQ2xhc3NpZmljYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJhbmRyZWFzbWFkc2VuJTJGZWZmaWNpZW50X21sbV9tMC40MCUyMiklMEFtb2RlbCUyMCUzRCUyMEZsYXhSb2JlcnRhUHJlTGF5ZXJOb3JtRm9yVG9rZW5DbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyYW5kcmVhc21hZHNlbiUyRmVmZmljaWVudF9tbG1fbTAuNDAlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMmpheCUyMiklMEElMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxRobertaPreLayerNormForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaPreLayerNormForTokenClassification.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=d("p"),e.textContent=p,t=r(),b(a.$$.fragment)},l(o){e=c(o,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=p),t=i(o),y(a.$$.fragment,o)},m(o,_){m(o,e,_),m(o,t,_),T(a,o,_),g=!0},p:J,i(o){g||(M(a.$$.fragment,o),g=!0)},o(o){k(a.$$.fragment,o),g=!1},d(o){o&&(l(e),l(t)),w(a,o)}}}function Ba($){let e,p=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=p},l(t){e=c(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=p)},m(t,a){m(t,e,a)},p:J,d(t){t&&l(e)}}}function Xa($){let e,p="Example:",t,a,g;return a=new Te({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4Um9iZXJ0YVByZUxheWVyTm9ybUZvclF1ZXN0aW9uQW5zd2VyaW5nJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyYW5kcmVhc21hZHNlbiUyRmVmZmljaWVudF9tbG1fbTAuNDAlMjIpJTBBbW9kZWwlMjAlM0QlMjBGbGF4Um9iZXJ0YVByZUxheWVyTm9ybUZvclF1ZXN0aW9uQW5zd2VyaW5nLmZyb21fcHJldHJhaW5lZCglMjJhbmRyZWFzbWFkc2VuJTJGZWZmaWNpZW50X21sbV9tMC40MCUyMiklMEElMEFxdWVzdGlvbiUyQyUyMHRleHQlMjAlM0QlMjAlMjJXaG8lMjB3YXMlMjBKaW0lMjBIZW5zb24lM0YlMjIlMkMlMjAlMjJKaW0lMjBIZW5zb24lMjB3YXMlMjBhJTIwbmljZSUyMHB1cHBldCUyMiUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplcihxdWVzdGlvbiUyQyUyMHRleHQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMmpheCUyMiklMEElMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBc3RhcnRfc2NvcmVzJTIwJTNEJTIwb3V0cHV0cy5zdGFydF9sb2dpdHMlMEFlbmRfc2NvcmVzJTIwJTNEJTIwb3V0cHV0cy5lbmRfbG9naXRz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxRobertaPreLayerNormForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaPreLayerNormForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;andreasmadsen/efficient_mlm_m0.40&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`,wrap:!1}}),{c(){e=d("p"),e.textContent=p,t=r(),b(a.$$.fragment)},l(o){e=c(o,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=p),t=i(o),y(a.$$.fragment,o)},m(o,_){m(o,e,_),m(o,t,_),T(a,o,_),g=!0},p:J,i(o){g||(M(a.$$.fragment,o),g=!0)},o(o){k(a.$$.fragment,o),g=!1},d(o){o&&(l(e),l(t)),w(a,o)}}}function Aa($){let e,p,t,a,g,o,_="The bare RoBERTa-PreLayerNorm Model transformer outputting raw hidden-states without any specific head on top.",V,j,L=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`,G,C,R=`This model is also a
<a href="https://flax.readthedocs.io/en/latest/api_reference/flax.linen/module.html" rel="nofollow">flax.linen.Module</a> subclass. Use it as
a regular Flax linen Module and refer to the Flax documentation for all matter related to general usage and
behavior.`,B,f,N="Finally, this model supports inherent JAX features such as:",Le,ce,Go='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',pt,se,ut,Pe,Me,ze="The <code>FlaxRobertaPreLayerNormPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",rt,pe,ht,Re,ke,He,te,z,fe,ft,E,Wt=`RobertaPreLayerNorm Model with a language modeling head on top (a linear layer on top of the hidden-states output)
e.g for autoregressive tasks.`,it,Ue,Zt=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`,Et,re,so=`This model is also a
<a href="https://flax.readthedocs.io/en/latest/api_reference/flax.linen/module.html" rel="nofollow">flax.linen.Module</a> subclass. Use it as
a regular Flax linen Module and refer to the Flax documentation for all matter related to general usage and
behavior.`,X,we,ro="Finally, this model supports inherent JAX features such as:",gt,F,P='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',ve,je,_o,bo,vt,dn="The <code>FlaxRobertaPreLayerNormPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",Ke,It,$e,et,We,Ae,Eo,ie,_t,Yo,Qe,_n="RoBERTa-PreLayerNorm Model with a <code>language modeling</code> head on top.",Yt,$t,zo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`,Bo,q,Ft=`This model is also a
<a href="https://flax.readthedocs.io/en/latest/api_reference/flax.linen/module.html" rel="nofollow">flax.linen.Module</a> subclass. Use it as
a regular Flax linen Module and refer to the Flax documentation for all matter related to general usage and
behavior.`,Oo,lt,kn="Finally, this model supports inherent JAX features such as:",Do,Se,bn='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',Ot,Ze,Nt,Xo,oe,yo="The <code>FlaxRobertaPreLayerNormPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",Ee,Ve,cn,bt,To,Mo,qt,le,yt,Ko,de,io=`RobertaPreLayerNorm Model transformer with a sequence classification/regression head on top (a linear layer on top
of the pooled output) e.g. for GLUE tasks.`,lo,xt,Ge=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`,co,Tt,Uo=`This model is also a
<a href="https://flax.readthedocs.io/en/latest/api_reference/flax.linen/module.html" rel="nofollow">flax.linen.Module</a> subclass. Use it as
a regular Flax linen Module and refer to the Flax documentation for all matter related to general usage and
behavior.`,mo,ko,Lt="Finally, this model supports inherent JAX features such as:",en,Rt,wo='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',Ye,Ie,dt,vo,Oe,$o="The <code>FlaxRobertaPreLayerNormPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",Fo,jt,mn,Mt,Dt,po,Fe,Y,kt,uo,ge,No=`RobertaPreLayerNorm Model with a multiple choice classification head on top (a linear layer on top of the pooled
output and a softmax) e.g. for RocStories/SWAG tasks.`,Kt,Ht,xo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`,Ao,tt,pn=`This model is also a
<a href="https://flax.readthedocs.io/en/latest/api_reference/flax.linen/module.html" rel="nofollow">flax.linen.Module</a> subclass. Use it as
a regular Flax linen Module and refer to the Flax documentation for all matter related to general usage and
behavior.`,Be,ot,yn="Finally, this model supports inherent JAX features such as:",Lo,Ct,un='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',Ce,Xe,ho,Vt,Qo,hn="The <code>FlaxRobertaPreLayerNormPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",Je,ct,eo,wt,to,oo,nt,ue,A,no,Jt,Ro=`RobertaPreLayerNorm Model with a token classification head on top (a linear layer on top of the hidden-states
output) e.g. for Named-Entity-Recognition (NER) tasks.`,De,Pt,Wo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`,Zo,Io,qo=`This model is also a
<a href="https://flax.readthedocs.io/en/latest/api_reference/flax.linen/module.html" rel="nofollow">flax.linen.Module</a> subclass. Use it as
a regular Flax linen Module and refer to the Flax documentation for all matter related to general usage and
behavior.`,Ho,Vo,fo="Finally, this model supports inherent JAX features such as:",jo,qe,Co='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',mt,_e,Jo,Po,zt,fn="The <code>FlaxRobertaPreLayerNormPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",at,ao,st,Ut,n,h,he,I,ne,Q,O,D=`RobertaPreLayerNorm Model with a span classification head on top for extractive question-answering tasks like SQuAD
(a linear layers on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,ae,H,Ne=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`,S,K,ee=`This model is also a
<a href="https://flax.readthedocs.io/en/latest/api_reference/flax.linen/module.html" rel="nofollow">flax.linen.Module</a> subclass. Use it as
a regular Flax linen Module and refer to the Flax documentation for all matter related to general usage and
behavior.`,me,So,wn="Finally, this model supports inherent JAX features such as:",Fn,Tn,Ln='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',Nn,go,gn,xn,Mn,Rn="The <code>FlaxRobertaPreLayerNormPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",Cn,vn,Jn,$n,jn;return e=new xe({props:{title:"FlaxRobertaPreLayerNormModel",local:"transformers.FlaxRobertaPreLayerNormModel",headingTag:"h2"}}),a=new Z({props:{name:"class transformers.FlaxRobertaPreLayerNormModel",anchor:"transformers.FlaxRobertaPreLayerNormModel",parameters:[{name:"config",val:": RobertaPreLayerNormConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaPreLayerNormModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig">RobertaPreLayerNormConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_flax_roberta_prelayernorm.py#L991"}}),ut=new Z({props:{name:"__call__",anchor:"transformers.FlaxRobertaPreLayerNormModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaPreLayerNormModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRobertaPreLayerNormModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRobertaPreLayerNormModel.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRobertaPreLayerNormModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRobertaPreLayerNormModel.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRobertaPreLayerNormModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_flax_roberta_prelayernorm.py#L820",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig"
>RobertaPreLayerNormConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) — Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),pe=new be({props:{$$slots:{default:[Ca]},$$scope:{ctx:$}}}),Re=new ye({props:{anchor:"transformers.FlaxRobertaPreLayerNormModel.__call__.example",$$slots:{default:[Ja]},$$scope:{ctx:$}}}),He=new xe({props:{title:"FlaxRobertaPreLayerNormForCausalLM",local:"transformers.FlaxRobertaPreLayerNormForCausalLM",headingTag:"h2"}}),fe=new Z({props:{name:"class transformers.FlaxRobertaPreLayerNormForCausalLM",anchor:"transformers.FlaxRobertaPreLayerNormForCausalLM",parameters:[{name:"config",val:": RobertaPreLayerNormConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaPreLayerNormForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig">RobertaPreLayerNormConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_flax_roberta_prelayernorm.py#L1471"}}),_o=new Z({props:{name:"__call__",anchor:"transformers.FlaxRobertaPreLayerNormForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaPreLayerNormForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRobertaPreLayerNormForCausalLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRobertaPreLayerNormForCausalLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRobertaPreLayerNormForCausalLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRobertaPreLayerNormForCausalLM.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRobertaPreLayerNormForCausalLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_flax_roberta_prelayernorm.py#L820",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig"
>RobertaPreLayerNormConfig</a>) and inputs.</p>
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
`}}),It=new be({props:{$$slots:{default:[Pa]},$$scope:{ctx:$}}}),et=new ye({props:{anchor:"transformers.FlaxRobertaPreLayerNormForCausalLM.__call__.example",$$slots:{default:[za]},$$scope:{ctx:$}}}),Ae=new xe({props:{title:"FlaxRobertaPreLayerNormForMaskedLM",local:"transformers.FlaxRobertaPreLayerNormForMaskedLM",headingTag:"h2"}}),_t=new Z({props:{name:"class transformers.FlaxRobertaPreLayerNormForMaskedLM",anchor:"transformers.FlaxRobertaPreLayerNormForMaskedLM",parameters:[{name:"config",val:": RobertaPreLayerNormConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaPreLayerNormForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig">RobertaPreLayerNormConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_flax_roberta_prelayernorm.py#L1069"}}),Nt=new Z({props:{name:"__call__",anchor:"transformers.FlaxRobertaPreLayerNormForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaPreLayerNormForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRobertaPreLayerNormForMaskedLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRobertaPreLayerNormForMaskedLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRobertaPreLayerNormForMaskedLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRobertaPreLayerNormForMaskedLM.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRobertaPreLayerNormForMaskedLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_flax_roberta_prelayernorm.py#L820",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig"
>RobertaPreLayerNormConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) — Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ve=new be({props:{$$slots:{default:[Ua]},$$scope:{ctx:$}}}),bt=new ye({props:{anchor:"transformers.FlaxRobertaPreLayerNormForMaskedLM.__call__.example",$$slots:{default:[Wa]},$$scope:{ctx:$}}}),Mo=new xe({props:{title:"FlaxRobertaPreLayerNormForSequenceClassification",local:"transformers.FlaxRobertaPreLayerNormForSequenceClassification",headingTag:"h2"}}),yt=new Z({props:{name:"class transformers.FlaxRobertaPreLayerNormForSequenceClassification",anchor:"transformers.FlaxRobertaPreLayerNormForSequenceClassification",parameters:[{name:"config",val:": RobertaPreLayerNormConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaPreLayerNormForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig">RobertaPreLayerNormConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_flax_roberta_prelayernorm.py#L1139"}}),dt=new Z({props:{name:"__call__",anchor:"transformers.FlaxRobertaPreLayerNormForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaPreLayerNormForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRobertaPreLayerNormForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRobertaPreLayerNormForSequenceClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRobertaPreLayerNormForSequenceClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRobertaPreLayerNormForSequenceClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRobertaPreLayerNormForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_flax_roberta_prelayernorm.py#L820",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig"
>RobertaPreLayerNormConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, config.num_labels)</code>) — Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),jt=new be({props:{$$slots:{default:[Za]},$$scope:{ctx:$}}}),Mt=new ye({props:{anchor:"transformers.FlaxRobertaPreLayerNormForSequenceClassification.__call__.example",$$slots:{default:[Ia]},$$scope:{ctx:$}}}),po=new xe({props:{title:"FlaxRobertaPreLayerNormForMultipleChoice",local:"transformers.FlaxRobertaPreLayerNormForMultipleChoice",headingTag:"h2"}}),kt=new Z({props:{name:"class transformers.FlaxRobertaPreLayerNormForMultipleChoice",anchor:"transformers.FlaxRobertaPreLayerNormForMultipleChoice",parameters:[{name:"config",val:": RobertaPreLayerNormConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaPreLayerNormForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig">RobertaPreLayerNormConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_flax_roberta_prelayernorm.py#L1221"}}),ho=new Z({props:{name:"__call__",anchor:"transformers.FlaxRobertaPreLayerNormForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaPreLayerNormForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRobertaPreLayerNormForMultipleChoice.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRobertaPreLayerNormForMultipleChoice.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRobertaPreLayerNormForMultipleChoice.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRobertaPreLayerNormForMultipleChoice.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRobertaPreLayerNormForMultipleChoice.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_flax_roberta_prelayernorm.py#L820",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig"
>RobertaPreLayerNormConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, num_choices)</code>) — <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ct=new be({props:{$$slots:{default:[qa]},$$scope:{ctx:$}}}),wt=new ye({props:{anchor:"transformers.FlaxRobertaPreLayerNormForMultipleChoice.__call__.example",$$slots:{default:[Ha]},$$scope:{ctx:$}}}),oo=new xe({props:{title:"FlaxRobertaPreLayerNormForTokenClassification",local:"transformers.FlaxRobertaPreLayerNormForTokenClassification",headingTag:"h2"}}),A=new Z({props:{name:"class transformers.FlaxRobertaPreLayerNormForTokenClassification",anchor:"transformers.FlaxRobertaPreLayerNormForTokenClassification",parameters:[{name:"config",val:": RobertaPreLayerNormConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaPreLayerNormForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig">RobertaPreLayerNormConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_flax_roberta_prelayernorm.py#L1305"}}),Jo=new Z({props:{name:"__call__",anchor:"transformers.FlaxRobertaPreLayerNormForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaPreLayerNormForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRobertaPreLayerNormForTokenClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRobertaPreLayerNormForTokenClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRobertaPreLayerNormForTokenClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRobertaPreLayerNormForTokenClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRobertaPreLayerNormForTokenClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_flax_roberta_prelayernorm.py#L820",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig"
>RobertaPreLayerNormConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) — Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ao=new be({props:{$$slots:{default:[Va]},$$scope:{ctx:$}}}),Ut=new ye({props:{anchor:"transformers.FlaxRobertaPreLayerNormForTokenClassification.__call__.example",$$slots:{default:[Ga]},$$scope:{ctx:$}}}),h=new xe({props:{title:"FlaxRobertaPreLayerNormForQuestionAnswering",local:"transformers.FlaxRobertaPreLayerNormForQuestionAnswering",headingTag:"h2"}}),ne=new Z({props:{name:"class transformers.FlaxRobertaPreLayerNormForQuestionAnswering",anchor:"transformers.FlaxRobertaPreLayerNormForQuestionAnswering",parameters:[{name:"config",val:": RobertaPreLayerNormConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxRobertaPreLayerNormForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig">RobertaPreLayerNormConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_flax_roberta_prelayernorm.py#L1383"}}),gn=new Z({props:{name:"__call__",anchor:"transformers.FlaxRobertaPreLayerNormForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxRobertaPreLayerNormForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxRobertaPreLayerNormForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxRobertaPreLayerNormForQuestionAnswering.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxRobertaPreLayerNormForQuestionAnswering.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxRobertaPreLayerNormForQuestionAnswering.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxRobertaPreLayerNormForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/modeling_flax_roberta_prelayernorm.py#L820",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormConfig"
>RobertaPreLayerNormConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>start_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) — Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) — Span-end scores (before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vn=new be({props:{$$slots:{default:[Ba]},$$scope:{ctx:$}}}),$n=new ye({props:{anchor:"transformers.FlaxRobertaPreLayerNormForQuestionAnswering.__call__.example",$$slots:{default:[Xa]},$$scope:{ctx:$}}}),{c(){b(e.$$.fragment),p=r(),t=d("div"),b(a.$$.fragment),g=r(),o=d("p"),o.textContent=_,V=r(),j=d("p"),j.innerHTML=L,G=r(),C=d("p"),C.innerHTML=R,B=r(),f=d("p"),f.textContent=N,Le=r(),ce=d("ul"),ce.innerHTML=Go,pt=r(),se=d("div"),b(ut.$$.fragment),Pe=r(),Me=d("p"),Me.innerHTML=ze,rt=r(),b(pe.$$.fragment),ht=r(),b(Re.$$.fragment),ke=r(),b(He.$$.fragment),te=r(),z=d("div"),b(fe.$$.fragment),ft=r(),E=d("p"),E.textContent=Wt,it=r(),Ue=d("p"),Ue.innerHTML=Zt,Et=r(),re=d("p"),re.innerHTML=so,X=r(),we=d("p"),we.textContent=ro,gt=r(),F=d("ul"),F.innerHTML=P,ve=r(),je=d("div"),b(_o.$$.fragment),bo=r(),vt=d("p"),vt.innerHTML=dn,Ke=r(),b(It.$$.fragment),$e=r(),b(et.$$.fragment),We=r(),b(Ae.$$.fragment),Eo=r(),ie=d("div"),b(_t.$$.fragment),Yo=r(),Qe=d("p"),Qe.innerHTML=_n,Yt=r(),$t=d("p"),$t.innerHTML=zo,Bo=r(),q=d("p"),q.innerHTML=Ft,Oo=r(),lt=d("p"),lt.textContent=kn,Do=r(),Se=d("ul"),Se.innerHTML=bn,Ot=r(),Ze=d("div"),b(Nt.$$.fragment),Xo=r(),oe=d("p"),oe.innerHTML=yo,Ee=r(),b(Ve.$$.fragment),cn=r(),b(bt.$$.fragment),To=r(),b(Mo.$$.fragment),qt=r(),le=d("div"),b(yt.$$.fragment),Ko=r(),de=d("p"),de.textContent=io,lo=r(),xt=d("p"),xt.innerHTML=Ge,co=r(),Tt=d("p"),Tt.innerHTML=Uo,mo=r(),ko=d("p"),ko.textContent=Lt,en=r(),Rt=d("ul"),Rt.innerHTML=wo,Ye=r(),Ie=d("div"),b(dt.$$.fragment),vo=r(),Oe=d("p"),Oe.innerHTML=$o,Fo=r(),b(jt.$$.fragment),mn=r(),b(Mt.$$.fragment),Dt=r(),b(po.$$.fragment),Fe=r(),Y=d("div"),b(kt.$$.fragment),uo=r(),ge=d("p"),ge.textContent=No,Kt=r(),Ht=d("p"),Ht.innerHTML=xo,Ao=r(),tt=d("p"),tt.innerHTML=pn,Be=r(),ot=d("p"),ot.textContent=yn,Lo=r(),Ct=d("ul"),Ct.innerHTML=un,Ce=r(),Xe=d("div"),b(ho.$$.fragment),Vt=r(),Qo=d("p"),Qo.innerHTML=hn,Je=r(),b(ct.$$.fragment),eo=r(),b(wt.$$.fragment),to=r(),b(oo.$$.fragment),nt=r(),ue=d("div"),b(A.$$.fragment),no=r(),Jt=d("p"),Jt.textContent=Ro,De=r(),Pt=d("p"),Pt.innerHTML=Wo,Zo=r(),Io=d("p"),Io.innerHTML=qo,Ho=r(),Vo=d("p"),Vo.textContent=fo,jo=r(),qe=d("ul"),qe.innerHTML=Co,mt=r(),_e=d("div"),b(Jo.$$.fragment),Po=r(),zt=d("p"),zt.innerHTML=fn,at=r(),b(ao.$$.fragment),st=r(),b(Ut.$$.fragment),n=r(),b(h.$$.fragment),he=r(),I=d("div"),b(ne.$$.fragment),Q=r(),O=d("p"),O.innerHTML=D,ae=r(),H=d("p"),H.innerHTML=Ne,S=r(),K=d("p"),K.innerHTML=ee,me=r(),So=d("p"),So.textContent=wn,Fn=r(),Tn=d("ul"),Tn.innerHTML=Ln,Nn=r(),go=d("div"),b(gn.$$.fragment),xn=r(),Mn=d("p"),Mn.innerHTML=Rn,Cn=r(),b(vn.$$.fragment),Jn=r(),b($n.$$.fragment),this.h()},l(v){y(e.$$.fragment,v),p=i(v),t=c(v,"DIV",{class:!0});var x=U(t);y(a.$$.fragment,x),g=i(x),o=c(x,"P",{"data-svelte-h":!0}),u(o)!=="svelte-33ezil"&&(o.textContent=_),V=i(x),j=c(x,"P",{"data-svelte-h":!0}),u(j)!=="svelte-3daxed"&&(j.innerHTML=L),G=i(x),C=c(x,"P",{"data-svelte-h":!0}),u(C)!=="svelte-10nfsf3"&&(C.innerHTML=R),B=i(x),f=c(x,"P",{"data-svelte-h":!0}),u(f)!=="svelte-1pplc4a"&&(f.textContent=N),Le=i(x),ce=c(x,"UL",{"data-svelte-h":!0}),u(ce)!=="svelte-1w7z84m"&&(ce.innerHTML=Go),pt=i(x),se=c(x,"DIV",{class:!0});var tn=U(se);y(ut.$$.fragment,tn),Pe=i(tn),Me=c(tn,"P",{"data-svelte-h":!0}),u(Me)!=="svelte-1hfv2ik"&&(Me.innerHTML=ze),rt=i(tn),y(pe.$$.fragment,tn),ht=i(tn),y(Re.$$.fragment,tn),tn.forEach(l),x.forEach(l),ke=i(v),y(He.$$.fragment,v),te=i(v),z=c(v,"DIV",{class:!0});var Gt=U(z);y(fe.$$.fragment,Gt),ft=i(Gt),E=c(Gt,"P",{"data-svelte-h":!0}),u(E)!=="svelte-1fbzx51"&&(E.textContent=Wt),it=i(Gt),Ue=c(Gt,"P",{"data-svelte-h":!0}),u(Ue)!=="svelte-3daxed"&&(Ue.innerHTML=Zt),Et=i(Gt),re=c(Gt,"P",{"data-svelte-h":!0}),u(re)!=="svelte-10nfsf3"&&(re.innerHTML=so),X=i(Gt),we=c(Gt,"P",{"data-svelte-h":!0}),u(we)!=="svelte-1pplc4a"&&(we.textContent=ro),gt=i(Gt),F=c(Gt,"UL",{"data-svelte-h":!0}),u(F)!=="svelte-1w7z84m"&&(F.innerHTML=P),ve=i(Gt),je=c(Gt,"DIV",{class:!0});var on=U(je);y(_o.$$.fragment,on),bo=i(on),vt=c(on,"P",{"data-svelte-h":!0}),u(vt)!=="svelte-1hfv2ik"&&(vt.innerHTML=dn),Ke=i(on),y(It.$$.fragment,on),$e=i(on),y(et.$$.fragment,on),on.forEach(l),Gt.forEach(l),We=i(v),y(Ae.$$.fragment,v),Eo=i(v),ie=c(v,"DIV",{class:!0});var Bt=U(ie);y(_t.$$.fragment,Bt),Yo=i(Bt),Qe=c(Bt,"P",{"data-svelte-h":!0}),u(Qe)!=="svelte-8dtlt4"&&(Qe.innerHTML=_n),Yt=i(Bt),$t=c(Bt,"P",{"data-svelte-h":!0}),u($t)!=="svelte-3daxed"&&($t.innerHTML=zo),Bo=i(Bt),q=c(Bt,"P",{"data-svelte-h":!0}),u(q)!=="svelte-10nfsf3"&&(q.innerHTML=Ft),Oo=i(Bt),lt=c(Bt,"P",{"data-svelte-h":!0}),u(lt)!=="svelte-1pplc4a"&&(lt.textContent=kn),Do=i(Bt),Se=c(Bt,"UL",{"data-svelte-h":!0}),u(Se)!=="svelte-1w7z84m"&&(Se.innerHTML=bn),Ot=i(Bt),Ze=c(Bt,"DIV",{class:!0});var nn=U(Ze);y(Nt.$$.fragment,nn),Xo=i(nn),oe=c(nn,"P",{"data-svelte-h":!0}),u(oe)!=="svelte-1hfv2ik"&&(oe.innerHTML=yo),Ee=i(nn),y(Ve.$$.fragment,nn),cn=i(nn),y(bt.$$.fragment,nn),nn.forEach(l),Bt.forEach(l),To=i(v),y(Mo.$$.fragment,v),qt=i(v),le=c(v,"DIV",{class:!0});var Xt=U(le);y(yt.$$.fragment,Xt),Ko=i(Xt),de=c(Xt,"P",{"data-svelte-h":!0}),u(de)!=="svelte-1xx59cl"&&(de.textContent=io),lo=i(Xt),xt=c(Xt,"P",{"data-svelte-h":!0}),u(xt)!=="svelte-3daxed"&&(xt.innerHTML=Ge),co=i(Xt),Tt=c(Xt,"P",{"data-svelte-h":!0}),u(Tt)!=="svelte-10nfsf3"&&(Tt.innerHTML=Uo),mo=i(Xt),ko=c(Xt,"P",{"data-svelte-h":!0}),u(ko)!=="svelte-1pplc4a"&&(ko.textContent=Lt),en=i(Xt),Rt=c(Xt,"UL",{"data-svelte-h":!0}),u(Rt)!=="svelte-1w7z84m"&&(Rt.innerHTML=wo),Ye=i(Xt),Ie=c(Xt,"DIV",{class:!0});var an=U(Ie);y(dt.$$.fragment,an),vo=i(an),Oe=c(an,"P",{"data-svelte-h":!0}),u(Oe)!=="svelte-1hfv2ik"&&(Oe.innerHTML=$o),Fo=i(an),y(jt.$$.fragment,an),mn=i(an),y(Mt.$$.fragment,an),an.forEach(l),Xt.forEach(l),Dt=i(v),y(po.$$.fragment,v),Fe=i(v),Y=c(v,"DIV",{class:!0});var At=U(Y);y(kt.$$.fragment,At),uo=i(At),ge=c(At,"P",{"data-svelte-h":!0}),u(ge)!=="svelte-1t8wc3p"&&(ge.textContent=No),Kt=i(At),Ht=c(At,"P",{"data-svelte-h":!0}),u(Ht)!=="svelte-3daxed"&&(Ht.innerHTML=xo),Ao=i(At),tt=c(At,"P",{"data-svelte-h":!0}),u(tt)!=="svelte-10nfsf3"&&(tt.innerHTML=pn),Be=i(At),ot=c(At,"P",{"data-svelte-h":!0}),u(ot)!=="svelte-1pplc4a"&&(ot.textContent=yn),Lo=i(At),Ct=c(At,"UL",{"data-svelte-h":!0}),u(Ct)!=="svelte-1w7z84m"&&(Ct.innerHTML=un),Ce=i(At),Xe=c(At,"DIV",{class:!0});var sn=U(Xe);y(ho.$$.fragment,sn),Vt=i(sn),Qo=c(sn,"P",{"data-svelte-h":!0}),u(Qo)!=="svelte-1hfv2ik"&&(Qo.innerHTML=hn),Je=i(sn),y(ct.$$.fragment,sn),eo=i(sn),y(wt.$$.fragment,sn),sn.forEach(l),At.forEach(l),to=i(v),y(oo.$$.fragment,v),nt=i(v),ue=c(v,"DIV",{class:!0});var Qt=U(ue);y(A.$$.fragment,Qt),no=i(Qt),Jt=c(Qt,"P",{"data-svelte-h":!0}),u(Jt)!=="svelte-kne6bs"&&(Jt.textContent=Ro),De=i(Qt),Pt=c(Qt,"P",{"data-svelte-h":!0}),u(Pt)!=="svelte-3daxed"&&(Pt.innerHTML=Wo),Zo=i(Qt),Io=c(Qt,"P",{"data-svelte-h":!0}),u(Io)!=="svelte-10nfsf3"&&(Io.innerHTML=qo),Ho=i(Qt),Vo=c(Qt,"P",{"data-svelte-h":!0}),u(Vo)!=="svelte-1pplc4a"&&(Vo.textContent=fo),jo=i(Qt),qe=c(Qt,"UL",{"data-svelte-h":!0}),u(qe)!=="svelte-1w7z84m"&&(qe.innerHTML=Co),mt=i(Qt),_e=c(Qt,"DIV",{class:!0});var rn=U(_e);y(Jo.$$.fragment,rn),Po=i(rn),zt=c(rn,"P",{"data-svelte-h":!0}),u(zt)!=="svelte-1hfv2ik"&&(zt.innerHTML=fn),at=i(rn),y(ao.$$.fragment,rn),st=i(rn),y(Ut.$$.fragment,rn),rn.forEach(l),Qt.forEach(l),n=i(v),y(h.$$.fragment,v),he=i(v),I=c(v,"DIV",{class:!0});var St=U(I);y(ne.$$.fragment,St),Q=i(St),O=c(St,"P",{"data-svelte-h":!0}),u(O)!=="svelte-1xkbi4i"&&(O.innerHTML=D),ae=i(St),H=c(St,"P",{"data-svelte-h":!0}),u(H)!=="svelte-3daxed"&&(H.innerHTML=Ne),S=i(St),K=c(St,"P",{"data-svelte-h":!0}),u(K)!=="svelte-10nfsf3"&&(K.innerHTML=ee),me=i(St),So=c(St,"P",{"data-svelte-h":!0}),u(So)!=="svelte-1pplc4a"&&(So.textContent=wn),Fn=i(St),Tn=c(St,"UL",{"data-svelte-h":!0}),u(Tn)!=="svelte-1w7z84m"&&(Tn.innerHTML=Ln),Nn=i(St),go=c(St,"DIV",{class:!0});var ln=U(go);y(gn.$$.fragment,ln),xn=i(ln),Mn=c(ln,"P",{"data-svelte-h":!0}),u(Mn)!=="svelte-1hfv2ik"&&(Mn.innerHTML=Rn),Cn=i(ln),y(vn.$$.fragment,ln),Jn=i(ln),y($n.$$.fragment,ln),ln.forEach(l),St.forEach(l),this.h()},h(){W(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(v,x){T(e,v,x),m(v,p,x),m(v,t,x),T(a,t,null),s(t,g),s(t,o),s(t,V),s(t,j),s(t,G),s(t,C),s(t,B),s(t,f),s(t,Le),s(t,ce),s(t,pt),s(t,se),T(ut,se,null),s(se,Pe),s(se,Me),s(se,rt),T(pe,se,null),s(se,ht),T(Re,se,null),m(v,ke,x),T(He,v,x),m(v,te,x),m(v,z,x),T(fe,z,null),s(z,ft),s(z,E),s(z,it),s(z,Ue),s(z,Et),s(z,re),s(z,X),s(z,we),s(z,gt),s(z,F),s(z,ve),s(z,je),T(_o,je,null),s(je,bo),s(je,vt),s(je,Ke),T(It,je,null),s(je,$e),T(et,je,null),m(v,We,x),T(Ae,v,x),m(v,Eo,x),m(v,ie,x),T(_t,ie,null),s(ie,Yo),s(ie,Qe),s(ie,Yt),s(ie,$t),s(ie,Bo),s(ie,q),s(ie,Oo),s(ie,lt),s(ie,Do),s(ie,Se),s(ie,Ot),s(ie,Ze),T(Nt,Ze,null),s(Ze,Xo),s(Ze,oe),s(Ze,Ee),T(Ve,Ze,null),s(Ze,cn),T(bt,Ze,null),m(v,To,x),T(Mo,v,x),m(v,qt,x),m(v,le,x),T(yt,le,null),s(le,Ko),s(le,de),s(le,lo),s(le,xt),s(le,co),s(le,Tt),s(le,mo),s(le,ko),s(le,en),s(le,Rt),s(le,Ye),s(le,Ie),T(dt,Ie,null),s(Ie,vo),s(Ie,Oe),s(Ie,Fo),T(jt,Ie,null),s(Ie,mn),T(Mt,Ie,null),m(v,Dt,x),T(po,v,x),m(v,Fe,x),m(v,Y,x),T(kt,Y,null),s(Y,uo),s(Y,ge),s(Y,Kt),s(Y,Ht),s(Y,Ao),s(Y,tt),s(Y,Be),s(Y,ot),s(Y,Lo),s(Y,Ct),s(Y,Ce),s(Y,Xe),T(ho,Xe,null),s(Xe,Vt),s(Xe,Qo),s(Xe,Je),T(ct,Xe,null),s(Xe,eo),T(wt,Xe,null),m(v,to,x),T(oo,v,x),m(v,nt,x),m(v,ue,x),T(A,ue,null),s(ue,no),s(ue,Jt),s(ue,De),s(ue,Pt),s(ue,Zo),s(ue,Io),s(ue,Ho),s(ue,Vo),s(ue,jo),s(ue,qe),s(ue,mt),s(ue,_e),T(Jo,_e,null),s(_e,Po),s(_e,zt),s(_e,at),T(ao,_e,null),s(_e,st),T(Ut,_e,null),m(v,n,x),T(h,v,x),m(v,he,x),m(v,I,x),T(ne,I,null),s(I,Q),s(I,O),s(I,ae),s(I,H),s(I,S),s(I,K),s(I,me),s(I,So),s(I,Fn),s(I,Tn),s(I,Nn),s(I,go),T(gn,go,null),s(go,xn),s(go,Mn),s(go,Cn),T(vn,go,null),s(go,Jn),T($n,go,null),jn=!0},p(v,x){const tn={};x&2&&(tn.$$scope={dirty:x,ctx:v}),pe.$set(tn);const Gt={};x&2&&(Gt.$$scope={dirty:x,ctx:v}),Re.$set(Gt);const on={};x&2&&(on.$$scope={dirty:x,ctx:v}),It.$set(on);const Bt={};x&2&&(Bt.$$scope={dirty:x,ctx:v}),et.$set(Bt);const nn={};x&2&&(nn.$$scope={dirty:x,ctx:v}),Ve.$set(nn);const Xt={};x&2&&(Xt.$$scope={dirty:x,ctx:v}),bt.$set(Xt);const an={};x&2&&(an.$$scope={dirty:x,ctx:v}),jt.$set(an);const At={};x&2&&(At.$$scope={dirty:x,ctx:v}),Mt.$set(At);const sn={};x&2&&(sn.$$scope={dirty:x,ctx:v}),ct.$set(sn);const Qt={};x&2&&(Qt.$$scope={dirty:x,ctx:v}),wt.$set(Qt);const rn={};x&2&&(rn.$$scope={dirty:x,ctx:v}),ao.$set(rn);const St={};x&2&&(St.$$scope={dirty:x,ctx:v}),Ut.$set(St);const ln={};x&2&&(ln.$$scope={dirty:x,ctx:v}),vn.$set(ln);const zn={};x&2&&(zn.$$scope={dirty:x,ctx:v}),$n.$set(zn)},i(v){jn||(M(e.$$.fragment,v),M(a.$$.fragment,v),M(ut.$$.fragment,v),M(pe.$$.fragment,v),M(Re.$$.fragment,v),M(He.$$.fragment,v),M(fe.$$.fragment,v),M(_o.$$.fragment,v),M(It.$$.fragment,v),M(et.$$.fragment,v),M(Ae.$$.fragment,v),M(_t.$$.fragment,v),M(Nt.$$.fragment,v),M(Ve.$$.fragment,v),M(bt.$$.fragment,v),M(Mo.$$.fragment,v),M(yt.$$.fragment,v),M(dt.$$.fragment,v),M(jt.$$.fragment,v),M(Mt.$$.fragment,v),M(po.$$.fragment,v),M(kt.$$.fragment,v),M(ho.$$.fragment,v),M(ct.$$.fragment,v),M(wt.$$.fragment,v),M(oo.$$.fragment,v),M(A.$$.fragment,v),M(Jo.$$.fragment,v),M(ao.$$.fragment,v),M(Ut.$$.fragment,v),M(h.$$.fragment,v),M(ne.$$.fragment,v),M(gn.$$.fragment,v),M(vn.$$.fragment,v),M($n.$$.fragment,v),jn=!0)},o(v){k(e.$$.fragment,v),k(a.$$.fragment,v),k(ut.$$.fragment,v),k(pe.$$.fragment,v),k(Re.$$.fragment,v),k(He.$$.fragment,v),k(fe.$$.fragment,v),k(_o.$$.fragment,v),k(It.$$.fragment,v),k(et.$$.fragment,v),k(Ae.$$.fragment,v),k(_t.$$.fragment,v),k(Nt.$$.fragment,v),k(Ve.$$.fragment,v),k(bt.$$.fragment,v),k(Mo.$$.fragment,v),k(yt.$$.fragment,v),k(dt.$$.fragment,v),k(jt.$$.fragment,v),k(Mt.$$.fragment,v),k(po.$$.fragment,v),k(kt.$$.fragment,v),k(ho.$$.fragment,v),k(ct.$$.fragment,v),k(wt.$$.fragment,v),k(oo.$$.fragment,v),k(A.$$.fragment,v),k(Jo.$$.fragment,v),k(ao.$$.fragment,v),k(Ut.$$.fragment,v),k(h.$$.fragment,v),k(ne.$$.fragment,v),k(gn.$$.fragment,v),k(vn.$$.fragment,v),k($n.$$.fragment,v),jn=!1},d(v){v&&(l(p),l(t),l(ke),l(te),l(z),l(We),l(Eo),l(ie),l(To),l(qt),l(le),l(Dt),l(Fe),l(Y),l(to),l(nt),l(ue),l(n),l(he),l(I)),w(e,v),w(a),w(ut),w(pe),w(Re),w(He,v),w(fe),w(_o),w(It),w(et),w(Ae,v),w(_t),w(Nt),w(Ve),w(bt),w(Mo,v),w(yt),w(dt),w(jt),w(Mt),w(po,v),w(kt),w(ho),w(ct),w(wt),w(oo,v),w(A),w(Jo),w(ao),w(Ut),w(h,v),w(ne),w(gn),w(vn),w($n)}}}function Qa($){let e,p;return e=new Pn({props:{$$slots:{default:[Aa]},$$scope:{ctx:$}}}),{c(){b(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){T(e,t,a),p=!0},p(t,a){const g={};a&2&&(g.$$scope={dirty:a,ctx:t}),e.$set(g)},i(t){p||(M(e.$$.fragment,t),p=!0)},o(t){k(e.$$.fragment,t),p=!1},d(t){w(e,t)}}}function Sa($){let e,p,t,a,g,o,_,V,j,L=`The RoBERTa-PreLayerNorm model was proposed in <a href="https://arxiv.org/abs/1904.01038" rel="nofollow">fairseq: A Fast, Extensible Toolkit for Sequence Modeling</a> by Myle Ott, Sergey Edunov, Alexei Baevski, Angela Fan, Sam Gross, Nathan Ng, David Grangier, Michael Auli.
It is identical to using the <code>--encoder-normalize-before</code> flag in <a href="https://fairseq.readthedocs.io/" rel="nofollow">fairseq</a>.`,G,C,R="The abstract from the paper is the following:",B,f,N="<em>fairseq is an open-source sequence modeling toolkit that allows researchers and developers to train custom models for translation, summarization, language modeling, and other text generation tasks. The toolkit is based on PyTorch and supports distributed training across multiple GPUs and machines. We also support fast mixed-precision training and inference on modern GPUs.</em>",Le,ce,Go=`This model was contributed by <a href="https://huggingface.co/andreasmadsen" rel="nofollow">andreasmaden</a>.
The original code can be found <a href="https://github.com/princeton-nlp/DinkyTrain" rel="nofollow">here</a>.`,pt,se,ut,Pe,Me='<li>The implementation is the same as <a href="roberta">Roberta</a> except instead of using <em>Add and Norm</em> it does <em>Norm and Add</em>. <em>Add</em> and <em>Norm</em> refers to the Addition and LayerNormalization as described in <a href="https://arxiv.org/abs/1706.03762" rel="nofollow">Attention Is All You Need</a>.</li> <li>This is identical to using the <code>--encoder-normalize-before</code> flag in <a href="https://fairseq.readthedocs.io/" rel="nofollow">fairseq</a>.</li>',ze,rt,pe,ht,Re='<li><a href="../tasks/sequence_classification">Text classification task guide</a></li> <li><a href="../tasks/token_classification">Token classification task guide</a></li> <li><a href="../tasks/question_answering">Question answering task guide</a></li> <li><a href="../tasks/language_modeling">Causal language modeling task guide</a></li> <li><a href="../tasks/masked_language_modeling">Masked language modeling task guide</a></li> <li><a href="../tasks/multiple_choice">Multiple choice task guide</a></li>',ke,He,te,z,fe,ft,E,Wt=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormModel">RobertaPreLayerNormModel</a> or a <a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.TFRobertaPreLayerNormModel">TFRobertaPreLayerNormModel</a>. It is
used to instantiate a RoBERTa-PreLayerNorm model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the RoBERTa-PreLayerNorm
<a href="https://huggingface.co/andreasmadsen/efficient_mlm_m0.40" rel="nofollow">andreasmadsen/efficient_mlm_m0.40</a> architecture.`,it,Ue,Zt=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,Et,re,so,X,we,ro,gt;return g=new xe({props:{title:"RoBERTa-PreLayerNorm",local:"roberta-prelayernorm",headingTag:"h1"}}),_=new xe({props:{title:"Overview",local:"overview",headingTag:"h2"}}),se=new xe({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),rt=new xe({props:{title:"Resources",local:"resources",headingTag:"h2"}}),He=new xe({props:{title:"RobertaPreLayerNormConfig",local:"transformers.RobertaPreLayerNormConfig",headingTag:"h2"}}),fe=new Z({props:{name:"class transformers.RobertaPreLayerNormConfig",anchor:"transformers.RobertaPreLayerNormConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RobertaPreLayerNormConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the RoBERTa-PreLayerNorm model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormModel">RobertaPreLayerNormModel</a> or <a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.TFRobertaPreLayerNormModel">TFRobertaPreLayerNormModel</a>.`,name:"vocab_size"},{anchor:"transformers.RobertaPreLayerNormConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.RobertaPreLayerNormConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.RobertaPreLayerNormConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.RobertaPreLayerNormConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.RobertaPreLayerNormConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.RobertaPreLayerNormConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.RobertaPreLayerNormConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.RobertaPreLayerNormConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.RobertaPreLayerNormConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.RobertaPreLayerNormModel">RobertaPreLayerNormModel</a> or <a href="/docs/transformers/main/en/model_doc/roberta-prelayernorm#transformers.TFRobertaPreLayerNormModel">TFRobertaPreLayerNormModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.RobertaPreLayerNormConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.RobertaPreLayerNormConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.RobertaPreLayerNormConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.RobertaPreLayerNormConfig.is_decoder",description:`<strong>is_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model is used as a decoder or not. If <code>False</code>, the model is used as an encoder.`,name:"is_decoder"},{anchor:"transformers.RobertaPreLayerNormConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.RobertaPreLayerNormConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roberta_prelayernorm/configuration_roberta_prelayernorm.py#L35"}}),re=new ye({props:{anchor:"transformers.RobertaPreLayerNormConfig.example",$$slots:{default:[Vn]},$$scope:{ctx:$}}}),X=new Hn({props:{pytorch:!0,tensorflow:!0,jax:!0,$$slots:{jax:[Qa],tensorflow:[ja],pytorch:[sa]},$$scope:{ctx:$}}}),{c(){e=d("meta"),p=r(),t=d("p"),a=r(),b(g.$$.fragment),o=r(),b(_.$$.fragment),V=r(),j=d("p"),j.innerHTML=L,G=r(),C=d("p"),C.textContent=R,B=r(),f=d("p"),f.innerHTML=N,Le=r(),ce=d("p"),ce.innerHTML=Go,pt=r(),b(se.$$.fragment),ut=r(),Pe=d("ul"),Pe.innerHTML=Me,ze=r(),b(rt.$$.fragment),pe=r(),ht=d("ul"),ht.innerHTML=Re,ke=r(),b(He.$$.fragment),te=r(),z=d("div"),b(fe.$$.fragment),ft=r(),E=d("p"),E.innerHTML=Wt,it=r(),Ue=d("p"),Ue.innerHTML=Zt,Et=r(),b(re.$$.fragment),so=r(),b(X.$$.fragment),we=r(),ro=d("p"),this.h()},l(F){const P=qn("svelte-u9bgzb",document.head);e=c(P,"META",{name:!0,content:!0}),P.forEach(l),p=i(F),t=c(F,"P",{}),U(t).forEach(l),a=i(F),y(g.$$.fragment,F),o=i(F),y(_.$$.fragment,F),V=i(F),j=c(F,"P",{"data-svelte-h":!0}),u(j)!=="svelte-16zivdh"&&(j.innerHTML=L),G=i(F),C=c(F,"P",{"data-svelte-h":!0}),u(C)!=="svelte-vfdo9a"&&(C.textContent=R),B=i(F),f=c(F,"P",{"data-svelte-h":!0}),u(f)!=="svelte-b3c4v1"&&(f.innerHTML=N),Le=i(F),ce=c(F,"P",{"data-svelte-h":!0}),u(ce)!=="svelte-3d0kzc"&&(ce.innerHTML=Go),pt=i(F),y(se.$$.fragment,F),ut=i(F),Pe=c(F,"UL",{"data-svelte-h":!0}),u(Pe)!=="svelte-1xkplwx"&&(Pe.innerHTML=Me),ze=i(F),y(rt.$$.fragment,F),pe=i(F),ht=c(F,"UL",{"data-svelte-h":!0}),u(ht)!=="svelte-p1b16m"&&(ht.innerHTML=Re),ke=i(F),y(He.$$.fragment,F),te=i(F),z=c(F,"DIV",{class:!0});var ve=U(z);y(fe.$$.fragment,ve),ft=i(ve),E=c(ve,"P",{"data-svelte-h":!0}),u(E)!=="svelte-15isask"&&(E.innerHTML=Wt),it=i(ve),Ue=c(ve,"P",{"data-svelte-h":!0}),u(Ue)!=="svelte-o55m63"&&(Ue.innerHTML=Zt),Et=i(ve),y(re.$$.fragment,ve),ve.forEach(l),so=i(F),y(X.$$.fragment,F),we=i(F),ro=c(F,"P",{}),U(ro).forEach(l),this.h()},h(){W(e,"name","hf:doc:metadata"),W(e,"content",Ea),W(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(F,P){s(document.head,e),m(F,p,P),m(F,t,P),m(F,a,P),T(g,F,P),m(F,o,P),T(_,F,P),m(F,V,P),m(F,j,P),m(F,G,P),m(F,C,P),m(F,B,P),m(F,f,P),m(F,Le,P),m(F,ce,P),m(F,pt,P),T(se,F,P),m(F,ut,P),m(F,Pe,P),m(F,ze,P),T(rt,F,P),m(F,pe,P),m(F,ht,P),m(F,ke,P),T(He,F,P),m(F,te,P),m(F,z,P),T(fe,z,null),s(z,ft),s(z,E),s(z,it),s(z,Ue),s(z,Et),T(re,z,null),m(F,so,P),T(X,F,P),m(F,we,P),m(F,ro,P),gt=!0},p(F,[P]){const ve={};P&2&&(ve.$$scope={dirty:P,ctx:F}),re.$set(ve);const je={};P&2&&(je.$$scope={dirty:P,ctx:F}),X.$set(je)},i(F){gt||(M(g.$$.fragment,F),M(_.$$.fragment,F),M(se.$$.fragment,F),M(rt.$$.fragment,F),M(He.$$.fragment,F),M(fe.$$.fragment,F),M(re.$$.fragment,F),M(X.$$.fragment,F),gt=!0)},o(F){k(g.$$.fragment,F),k(_.$$.fragment,F),k(se.$$.fragment,F),k(rt.$$.fragment,F),k(He.$$.fragment,F),k(fe.$$.fragment,F),k(re.$$.fragment,F),k(X.$$.fragment,F),gt=!1},d(F){F&&(l(p),l(t),l(a),l(o),l(V),l(j),l(G),l(C),l(B),l(f),l(Le),l(ce),l(pt),l(ut),l(Pe),l(ze),l(pe),l(ht),l(ke),l(te),l(z),l(so),l(we),l(ro)),l(e),w(g,F),w(_,F),w(se,F),w(rt,F),w(He,F),w(fe),w(re),w(X,F)}}}const Ea='{"title":"RoBERTa-PreLayerNorm","local":"roberta-prelayernorm","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"RobertaPreLayerNormConfig","local":"transformers.RobertaPreLayerNormConfig","sections":[],"depth":2},{"title":"RobertaPreLayerNormModel","local":"transformers.RobertaPreLayerNormModel","sections":[],"depth":2},{"title":"RobertaPreLayerNormForCausalLM","local":"transformers.RobertaPreLayerNormForCausalLM","sections":[],"depth":2},{"title":"RobertaPreLayerNormForMaskedLM","local":"transformers.RobertaPreLayerNormForMaskedLM","sections":[],"depth":2},{"title":"RobertaPreLayerNormForSequenceClassification","local":"transformers.RobertaPreLayerNormForSequenceClassification","sections":[],"depth":2},{"title":"RobertaPreLayerNormForMultipleChoice","local":"transformers.RobertaPreLayerNormForMultipleChoice","sections":[],"depth":2},{"title":"RobertaPreLayerNormForTokenClassification","local":"transformers.RobertaPreLayerNormForTokenClassification","sections":[],"depth":2},{"title":"RobertaPreLayerNormForQuestionAnswering","local":"transformers.RobertaPreLayerNormForQuestionAnswering","sections":[],"depth":2},{"title":"TFRobertaPreLayerNormModel","local":"transformers.TFRobertaPreLayerNormModel","sections":[],"depth":2},{"title":"TFRobertaPreLayerNormForCausalLM","local":"transformers.TFRobertaPreLayerNormForCausalLM","sections":[],"depth":2},{"title":"TFRobertaPreLayerNormForMaskedLM","local":"transformers.TFRobertaPreLayerNormForMaskedLM","sections":[],"depth":2},{"title":"TFRobertaPreLayerNormForSequenceClassification","local":"transformers.TFRobertaPreLayerNormForSequenceClassification","sections":[],"depth":2},{"title":"TFRobertaPreLayerNormForMultipleChoice","local":"transformers.TFRobertaPreLayerNormForMultipleChoice","sections":[],"depth":2},{"title":"TFRobertaPreLayerNormForTokenClassification","local":"transformers.TFRobertaPreLayerNormForTokenClassification","sections":[],"depth":2},{"title":"TFRobertaPreLayerNormForQuestionAnswering","local":"transformers.TFRobertaPreLayerNormForQuestionAnswering","sections":[],"depth":2},{"title":"FlaxRobertaPreLayerNormModel","local":"transformers.FlaxRobertaPreLayerNormModel","sections":[],"depth":2},{"title":"FlaxRobertaPreLayerNormForCausalLM","local":"transformers.FlaxRobertaPreLayerNormForCausalLM","sections":[],"depth":2},{"title":"FlaxRobertaPreLayerNormForMaskedLM","local":"transformers.FlaxRobertaPreLayerNormForMaskedLM","sections":[],"depth":2},{"title":"FlaxRobertaPreLayerNormForSequenceClassification","local":"transformers.FlaxRobertaPreLayerNormForSequenceClassification","sections":[],"depth":2},{"title":"FlaxRobertaPreLayerNormForMultipleChoice","local":"transformers.FlaxRobertaPreLayerNormForMultipleChoice","sections":[],"depth":2},{"title":"FlaxRobertaPreLayerNormForTokenClassification","local":"transformers.FlaxRobertaPreLayerNormForTokenClassification","sections":[],"depth":2},{"title":"FlaxRobertaPreLayerNormForQuestionAnswering","local":"transformers.FlaxRobertaPreLayerNormForQuestionAnswering","sections":[],"depth":2}],"depth":1}';function Ya($){return Wn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ss extends Zn{constructor(e){super(),In(this,e,Ya,Sa,Un,{})}}export{ss as component};
