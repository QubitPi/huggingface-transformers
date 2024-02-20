import{s as Wo,o as qo,n as I}from"../chunks/scheduler.9bc65507.js";import{S as Zo,i as No,g as l,s as a,r as g,A as Bo,h as d,f as i,c as r,j as q,u as _,x as u,k as W,y as o,a as c,v as b,d as M,t as T,w as y}from"../chunks/index.707bf1b6.js";import{T as Te}from"../chunks/Tip.c2ecdbf4.js";import{D as N}from"../chunks/Docstring.17db21ae.js";import{C as He}from"../chunks/CodeBlock.54a9f38d.js";import{F as Go,M as Uo}from"../chunks/Markdown.fef84341.js";import{E as Ge}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{P as zo}from"../chunks/PipelineTag.44585822.js";import{H as Xe}from"../chunks/Heading.342b1fa6.js";function Ho($){let e,m='This implementation is the same as RoBERTa. Refer to the <a href="roberta">documentation of RoBERTa</a> for usage examples as well as the information relative to the inputs and outputs.';return{c(){e=l("p"),e.innerHTML=m},l(t){e=d(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-huua3g"&&(e.innerHTML=m)},m(t,s){c(t,e,s)},p:I,d(t){t&&i(e)}}}function Vo($){let e,m="Examples:",t,s,v;return s=new He({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFhMTVJvYmVydGFDb25maWclMkMlMjBYTE1Sb2JlcnRhTW9kZWwlMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwWExNLVJvQkVSVGElMjBGYWNlYm9va0FJJTJGeGxtLXJvYmVydGEtYmFzZSUyMHN0eWxlJTIwY29uZmlndXJhdGlvbiUwQWNvbmZpZ3VyYXRpb24lMjAlM0QlMjBYTE1Sb2JlcnRhQ29uZmlnKCklMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwbW9kZWwlMjAod2l0aCUyMHJhbmRvbSUyMHdlaWdodHMpJTIwZnJvbSUyMHRoZSUyMEZhY2Vib29rQUklMkZ4bG0tcm9iZXJ0YS1iYXNlJTIwc3R5bGUlMjBjb25maWd1cmF0aW9uJTBBbW9kZWwlMjAlM0QlMjBYTE1Sb2JlcnRhTW9kZWwoY29uZmlndXJhdGlvbiklMEElMEElMjMlMjBBY2Nlc3NpbmclMjB0aGUlMjBtb2RlbCUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwbW9kZWwuY29uZmln",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMRobertaConfig, XLMRobertaModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a XLM-RoBERTa FacebookAI/xlm-roberta-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = XLMRobertaConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the FacebookAI/xlm-roberta-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,t=a(),g(s.$$.fragment)},l(n){e=d(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-kvfsh7"&&(e.textContent=m),t=r(n),_(s.$$.fragment,n)},m(n,w){c(n,e,w),c(n,t,w),b(s,n,w),v=!0},p:I,i(n){v||(M(s.$$.fragment,n),v=!0)},o(n){T(s.$$.fragment,n),v=!1},d(n){n&&(i(e),i(t)),y(s,n)}}}function So($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(t){e=d(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(t,s){c(t,e,s)},p:I,d(t){t&&i(e)}}}function Eo($){let e,m="Example:",t,s,v;return s=new He({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBYTE1Sb2JlcnRhTW9kZWwlMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMkZhY2Vib29rQUklMkZ4bG0tcm9iZXJ0YS1iYXNlJTIyKSUwQW1vZGVsJTIwJTNEJTIwWExNUm9iZXJ0YU1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJGYWNlYm9va0FJJTJGeGxtLXJvYmVydGEtYmFzZSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQWxhc3RfaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, XLMRobertaModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;FacebookAI/xlm-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaModel.from_pretrained(<span class="hljs-string">&quot;FacebookAI/xlm-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,t=a(),g(s.$$.fragment)},l(n){e=d(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),t=r(n),_(s.$$.fragment,n)},m(n,w){c(n,e,w),c(n,t,w),b(s,n,w),v=!0},p:I,i(n){v||(M(s.$$.fragment,n),v=!0)},o(n){T(s.$$.fragment,n),v=!1},d(n){n&&(i(e),i(t)),y(s,n)}}}function Ao($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(t){e=d(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(t,s){c(t,e,s)},p:I,d(t){t&&i(e)}}}function Po($){let e,m="Example:",t,s,v;return s=new He({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBYTE1Sb2JlcnRhRm9yQ2F1c2FsTE0lMkMlMjBBdXRvQ29uZmlnJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJGYWNlYm9va0FJJTJGcm9iZXJ0YS1iYXNlJTIyKSUwQWNvbmZpZyUyMCUzRCUyMEF1dG9Db25maWcuZnJvbV9wcmV0cmFpbmVkKCUyMkZhY2Vib29rQUklMkZyb2JlcnRhLWJhc2UlMjIpJTBBY29uZmlnLmlzX2RlY29kZXIlMjAlM0QlMjBUcnVlJTBBbW9kZWwlMjAlM0QlMjBYTE1Sb2JlcnRhRm9yQ2F1c2FsTE0uZnJvbV9wcmV0cmFpbmVkKCUyMkZhY2Vib29rQUklMkZyb2JlcnRhLWJhc2UlMjIlMkMlMjBjb25maWclM0Rjb25maWcpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEFwcmVkaWN0aW9uX2xvZ2l0cyUyMCUzRCUyMG91dHB1dHMubG9naXRz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, XLMRobertaForCausalLM, AutoConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;FacebookAI/roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = AutoConfig.from_pretrained(<span class="hljs-string">&quot;FacebookAI/roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaForCausalLM.from_pretrained(<span class="hljs-string">&quot;FacebookAI/roberta-base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,t=a(),g(s.$$.fragment)},l(n){e=d(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),t=r(n),_(s.$$.fragment,n)},m(n,w){c(n,e,w),c(n,t,w),b(s,n,w),v=!0},p:I,i(n){v||(M(s.$$.fragment,n),v=!0)},o(n){T(s.$$.fragment,n),v=!1},d(n){n&&(i(e),i(t)),y(s,n)}}}function Qo($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(t){e=d(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(t,s){c(t,e,s)},p:I,d(t){t&&i(e)}}}function Yo($){let e,m="Example:",t,s,v;return s=new He({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBYTE1Sb2JlcnRhRm9yTWFza2VkTE0lMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMkZhY2Vib29rQUklMkZ4bG0tcm9iZXJ0YS1iYXNlJTIyKSUwQW1vZGVsJTIwJTNEJTIwWExNUm9iZXJ0YUZvck1hc2tlZExNLmZyb21fcHJldHJhaW5lZCglMjJGYWNlYm9va0FJJTJGeGxtLXJvYmVydGEtYmFzZSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIyVGhlJTIwY2FwaXRhbCUyMG9mJTIwRnJhbmNlJTIwaXMlMjAlM0NtYXNrJTNFLiUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEElMjMlMjByZXRyaWV2ZSUyMGluZGV4JTIwb2YlMjAlM0NtYXNrJTNFJTBBbWFza190b2tlbl9pbmRleCUyMCUzRCUyMChpbnB1dHMuaW5wdXRfaWRzJTIwJTNEJTNEJTIwdG9rZW5pemVyLm1hc2tfdG9rZW5faWQpJTVCMCU1RC5ub256ZXJvKGFzX3R1cGxlJTNEVHJ1ZSklNUIwJTVEJTBBJTBBcHJlZGljdGVkX3Rva2VuX2lkJTIwJTNEJTIwbG9naXRzJTVCMCUyQyUyMG1hc2tfdG9rZW5faW5kZXglNUQuYXJnbWF4KGF4aXMlM0QtMSklMEF0b2tlbml6ZXIuZGVjb2RlKHByZWRpY3RlZF90b2tlbl9pZCklMEElMEFsYWJlbHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIyVGhlJTIwY2FwaXRhbCUyMG9mJTIwRnJhbmNlJTIwaXMlMjBQYXJpcy4lMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSU1QiUyMmlucHV0X2lkcyUyMiU1RCUwQSUyMyUyMG1hc2slMjBsYWJlbHMlMjBvZiUyMG5vbi0lM0NtYXNrJTNFJTIwdG9rZW5zJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2gud2hlcmUoaW5wdXRzLmlucHV0X2lkcyUyMCUzRCUzRCUyMHRva2VuaXplci5tYXNrX3Rva2VuX2lkJTJDJTIwbGFiZWxzJTJDJTIwLTEwMCklMEElMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMlMkMlMjBsYWJlbHMlM0RsYWJlbHMpJTBBcm91bmQob3V0cHV0cy5sb3NzLml0ZW0oKSUyQyUyMDIp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, XLMRobertaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;FacebookAI/xlm-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;FacebookAI/xlm-roberta-base&quot;</span>)

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
<span class="hljs-number">0.1</span>`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,t=a(),g(s.$$.fragment)},l(n){e=d(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),t=r(n),_(s.$$.fragment,n)},m(n,w){c(n,e,w),c(n,t,w),b(s,n,w),v=!0},p:I,i(n){v||(M(s.$$.fragment,n),v=!0)},o(n){T(s.$$.fragment,n),v=!1},d(n){n&&(i(e),i(t)),y(s,n)}}}function Oo($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(t){e=d(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(t,s){c(t,e,s)},p:I,d(t){t&&i(e)}}}function Do($){let e,m="Example of single-label classification:",t,s,v;return s=new He({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMFhMTVJvYmVydGFGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyY2FyZGlmZm5scCUyRnR3aXR0ZXItcm9iZXJ0YS1iYXNlLWVtb3Rpb24lMjIpJTBBbW9kZWwlMjAlM0QlMjBYTE1Sb2JlcnRhRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyY2FyZGlmZm5scCUyRnR3aXR0ZXItcm9iZXJ0YS1iYXNlLWVtb3Rpb24lMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX2NsYXNzX2lkJTIwJTNEJTIwbG9naXRzLmFyZ21heCgpLml0ZW0oKSUwQW1vZGVsLmNvbmZpZy5pZDJsYWJlbCU1QnByZWRpY3RlZF9jbGFzc19pZCU1RCUwQSUwQSUyMyUyMFRvJTIwdHJhaW4lMjBhJTIwbW9kZWwlMjBvbiUyMCU2MG51bV9sYWJlbHMlNjAlMjBjbGFzc2VzJTJDJTIweW91JTIwY2FuJTIwcGFzcyUyMCU2MG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTYwJTIwdG8lMjAlNjAuZnJvbV9wcmV0cmFpbmVkKC4uLiklNjAlMEFudW1fbGFiZWxzJTIwJTNEJTIwbGVuKG1vZGVsLmNvbmZpZy5pZDJsYWJlbCklMEFtb2RlbCUyMCUzRCUyMFhMTVJvYmVydGFGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJjYXJkaWZmbmxwJTJGdHdpdHRlci1yb2JlcnRhLWJhc2UtZW1vdGlvbiUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzKSUwQSUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxJTVEKSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcyUwQXJvdW5kKGxvc3MuaXRlbSgpJTJDJTIwMik=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, XLMRobertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;optimism&#x27;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,t=a(),g(s.$$.fragment)},l(n){e=d(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-ykxpe4"&&(e.textContent=m),t=r(n),_(s.$$.fragment,n)},m(n,w){c(n,e,w),c(n,t,w),b(s,n,w),v=!0},p:I,i(n){v||(M(s.$$.fragment,n),v=!0)},o(n){T(s.$$.fragment,n),v=!1},d(n){n&&(i(e),i(t)),y(s,n)}}}function Ko($){let e,m="Example of multi-label classification:",t,s,v;return s=new He({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMFhMTVJvYmVydGFGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyY2FyZGlmZm5scCUyRnR3aXR0ZXItcm9iZXJ0YS1iYXNlLWVtb3Rpb24lMjIpJTBBbW9kZWwlMjAlM0QlMjBYTE1Sb2JlcnRhRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyY2FyZGlmZm5scCUyRnR3aXR0ZXItcm9iZXJ0YS1iYXNlLWVtb3Rpb24lMjIlMkMlMjBwcm9ibGVtX3R5cGUlM0QlMjJtdWx0aV9sYWJlbF9jbGFzc2lmaWNhdGlvbiUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEFwcmVkaWN0ZWRfY2xhc3NfaWRzJTIwJTNEJTIwdG9yY2guYXJhbmdlKDAlMkMlMjBsb2dpdHMuc2hhcGUlNUItMSU1RCklNUJ0b3JjaC5zaWdtb2lkKGxvZ2l0cykuc3F1ZWV6ZShkaW0lM0QwKSUyMCUzRSUyMDAuNSU1RCUwQSUwQSUyMyUyMFRvJTIwdHJhaW4lMjBhJTIwbW9kZWwlMjBvbiUyMCU2MG51bV9sYWJlbHMlNjAlMjBjbGFzc2VzJTJDJTIweW91JTIwY2FuJTIwcGFzcyUyMCU2MG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTYwJTIwdG8lMjAlNjAuZnJvbV9wcmV0cmFpbmVkKC4uLiklNjAlMEFudW1fbGFiZWxzJTIwJTNEJTIwbGVuKG1vZGVsLmNvbmZpZy5pZDJsYWJlbCklMEFtb2RlbCUyMCUzRCUyMFhMTVJvYmVydGFGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMEElMjAlMjAlMjAlMjAlMjJjYXJkaWZmbmxwJTJGdHdpdHRlci1yb2JlcnRhLWJhc2UtZW1vdGlvbiUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIlMEEpJTBBJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2guc3VtKCUwQSUyMCUyMCUyMCUyMHRvcmNoLm5uLmZ1bmN0aW9uYWwub25lX2hvdChwcmVkaWN0ZWRfY2xhc3NfaWRzJTVCTm9uZSUyQyUyMCUzQSU1RC5jbG9uZSgpJTJDJTIwbnVtX2NsYXNzZXMlM0RudW1fbGFiZWxzKSUyQyUyMGRpbSUzRDElMEEpLnRvKHRvcmNoLmZsb2F0KSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, XLMRobertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.arange(<span class="hljs-number">0</span>, logits.shape[-<span class="hljs-number">1</span>])[torch.sigmoid(logits).squeeze(dim=<span class="hljs-number">0</span>) &gt; <span class="hljs-number">0.5</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.<span class="hljs-built_in">sum</span>(
<span class="hljs-meta">... </span>    torch.nn.functional.one_hot(predicted_class_ids[<span class="hljs-literal">None</span>, :].clone(), num_classes=num_labels), dim=<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>).to(torch.<span class="hljs-built_in">float</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,t=a(),g(s.$$.fragment)},l(n){e=d(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-1l8e32d"&&(e.textContent=m),t=r(n),_(s.$$.fragment,n)},m(n,w){c(n,e,w),c(n,t,w),b(s,n,w),v=!0},p:I,i(n){v||(M(s.$$.fragment,n),v=!0)},o(n){T(s.$$.fragment,n),v=!1},d(n){n&&(i(e),i(t)),y(s,n)}}}function es($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(t){e=d(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(t,s){c(t,e,s)},p:I,d(t){t&&i(e)}}}function ts($){let e,m="Example:",t,s,v;return s=new He({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBYTE1Sb2JlcnRhRm9yTXVsdGlwbGVDaG9pY2UlMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMkZhY2Vib29rQUklMkZ4bG0tcm9iZXJ0YS1iYXNlJTIyKSUwQW1vZGVsJTIwJTNEJTIwWExNUm9iZXJ0YUZvck11bHRpcGxlQ2hvaWNlLmZyb21fcHJldHJhaW5lZCglMjJGYWNlYm9va0FJJTJGeGxtLXJvYmVydGEtYmFzZSUyMiklMEElMEFwcm9tcHQlMjAlM0QlMjAlMjJJbiUyMEl0YWx5JTJDJTIwcGl6emElMjBzZXJ2ZWQlMjBpbiUyMGZvcm1hbCUyMHNldHRpbmdzJTJDJTIwc3VjaCUyMGFzJTIwYXQlMjBhJTIwcmVzdGF1cmFudCUyQyUyMGlzJTIwcHJlc2VudGVkJTIwdW5zbGljZWQuJTIyJTBBY2hvaWNlMCUyMCUzRCUyMCUyMkl0JTIwaXMlMjBlYXRlbiUyMHdpdGglMjBhJTIwZm9yayUyMGFuZCUyMGElMjBrbmlmZS4lMjIlMEFjaG9pY2UxJTIwJTNEJTIwJTIySXQlMjBpcyUyMGVhdGVuJTIwd2hpbGUlMjBoZWxkJTIwaW4lMjB0aGUlMjBoYW5kLiUyMiUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvcigwKS51bnNxdWVlemUoMCklMjAlMjAlMjMlMjBjaG9pY2UwJTIwaXMlMjBjb3JyZWN0JTIwKGFjY29yZGluZyUyMHRvJTIwV2lraXBlZGlhJTIwJTNCKSklMkMlMjBiYXRjaCUyMHNpemUlMjAxJTBBJTBBZW5jb2RpbmclMjAlM0QlMjB0b2tlbml6ZXIoJTVCcHJvbXB0JTJDJTIwcHJvbXB0JTVEJTJDJTIwJTVCY2hvaWNlMCUyQyUyMGNob2ljZTElNUQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTJDJTIwcGFkZGluZyUzRFRydWUpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqJTdCayUzQSUyMHYudW5zcXVlZXplKDApJTIwZm9yJTIwayUyQyUyMHYlMjBpbiUyMGVuY29kaW5nLml0ZW1zKCklN0QlMkMlMjBsYWJlbHMlM0RsYWJlbHMpJTIwJTIwJTIzJTIwYmF0Y2glMjBzaXplJTIwaXMlMjAxJTBBJTBBJTIzJTIwdGhlJTIwbGluZWFyJTIwY2xhc3NpZmllciUyMHN0aWxsJTIwbmVlZHMlMjB0byUyMGJlJTIwdHJhaW5lZCUwQWxvc3MlMjAlM0QlMjBvdXRwdXRzLmxvc3MlMEFsb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, XLMRobertaForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;FacebookAI/xlm-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;FacebookAI/xlm-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,t=a(),g(s.$$.fragment)},l(n){e=d(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),t=r(n),_(s.$$.fragment,n)},m(n,w){c(n,e,w),c(n,t,w),b(s,n,w),v=!0},p:I,i(n){v||(M(s.$$.fragment,n),v=!0)},o(n){T(s.$$.fragment,n),v=!1},d(n){n&&(i(e),i(t)),y(s,n)}}}function ns($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(t){e=d(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(t,s){c(t,e,s)},p:I,d(t){t&&i(e)}}}function os($){let e,m="Example:",t,s,v;return s=new He({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBYTE1Sb2JlcnRhRm9yVG9rZW5DbGFzc2lmaWNhdGlvbiUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIySmVhbi1CYXB0aXN0ZSUyRnJvYmVydGEtbGFyZ2UtbmVyLWVuZ2xpc2glMjIpJTBBbW9kZWwlMjAlM0QlMjBYTE1Sb2JlcnRhRm9yVG9rZW5DbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIySmVhbi1CYXB0aXN0ZSUyRnJvYmVydGEtbGFyZ2UtbmVyLWVuZ2xpc2glMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUwQSUyMCUyMCUyMCUyMCUyMkh1Z2dpbmdGYWNlJTIwaXMlMjBhJTIwY29tcGFueSUyMGJhc2VkJTIwaW4lMjBQYXJpcyUyMGFuZCUyME5ldyUyMFlvcmslMjIlMkMlMjBhZGRfc3BlY2lhbF90b2tlbnMlM0RGYWxzZSUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIlMEEpJTBBJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEFwcmVkaWN0ZWRfdG9rZW5fY2xhc3NfaWRzJTIwJTNEJTIwbG9naXRzLmFyZ21heCgtMSklMEElMEElMjMlMjBOb3RlJTIwdGhhdCUyMHRva2VucyUyMGFyZSUyMGNsYXNzaWZpZWQlMjByYXRoZXIlMjB0aGVuJTIwaW5wdXQlMjB3b3JkcyUyMHdoaWNoJTIwbWVhbnMlMjB0aGF0JTBBJTIzJTIwdGhlcmUlMjBtaWdodCUyMGJlJTIwbW9yZSUyMHByZWRpY3RlZCUyMHRva2VuJTIwY2xhc3NlcyUyMHRoYW4lMjB3b3Jkcy4lMEElMjMlMjBNdWx0aXBsZSUyMHRva2VuJTIwY2xhc3NlcyUyMG1pZ2h0JTIwYWNjb3VudCUyMGZvciUyMHRoZSUyMHNhbWUlMjB3b3JkJTBBcHJlZGljdGVkX3Rva2Vuc19jbGFzc2VzJTIwJTNEJTIwJTVCbW9kZWwuY29uZmlnLmlkMmxhYmVsJTVCdC5pdGVtKCklNUQlMjBmb3IlMjB0JTIwaW4lMjBwcmVkaWN0ZWRfdG9rZW5fY2xhc3NfaWRzJTVCMCU1RCU1RCUwQXByZWRpY3RlZF90b2tlbnNfY2xhc3NlcyUwQSUwQWxhYmVscyUyMCUzRCUyMHByZWRpY3RlZF90b2tlbl9jbGFzc19pZHMlMEFsb3NzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMlMkMlMjBsYWJlbHMlM0RsYWJlbHMpLmxvc3MlMEFyb3VuZChsb3NzLml0ZW0oKSUyQyUyMDIp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, XLMRobertaForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;Jean-Baptiste/roberta-large-ner-english&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;Jean-Baptiste/roberta-large-ner-english&quot;</span>)

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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,t=a(),g(s.$$.fragment)},l(n){e=d(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),t=r(n),_(s.$$.fragment,n)},m(n,w){c(n,e,w),c(n,t,w),b(s,n,w),v=!0},p:I,i(n){v||(M(s.$$.fragment,n),v=!0)},o(n){T(s.$$.fragment,n),v=!1},d(n){n&&(i(e),i(t)),y(s,n)}}}function ss($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(t){e=d(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(t,s){c(t,e,s)},p:I,d(t){t&&i(e)}}}function as($){let e,m="Example:",t,s,v;return s=new He({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBYTE1Sb2JlcnRhRm9yUXVlc3Rpb25BbnN3ZXJpbmclMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmRlZXBzZXQlMkZyb2JlcnRhLWJhc2Utc3F1YWQyJTIyKSUwQW1vZGVsJTIwJTNEJTIwWExNUm9iZXJ0YUZvclF1ZXN0aW9uQW5zd2VyaW5nLmZyb21fcHJldHJhaW5lZCglMjJkZWVwc2V0JTJGcm9iZXJ0YS1iYXNlLXNxdWFkMiUyMiklMEElMEFxdWVzdGlvbiUyQyUyMHRleHQlMjAlM0QlMjAlMjJXaG8lMjB3YXMlMjBKaW0lMjBIZW5zb24lM0YlMjIlMkMlMjAlMjJKaW0lMjBIZW5zb24lMjB3YXMlMjBhJTIwbmljZSUyMHB1cHBldCUyMiUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplcihxdWVzdGlvbiUyQyUyMHRleHQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBYW5zd2VyX3N0YXJ0X2luZGV4JTIwJTNEJTIwb3V0cHV0cy5zdGFydF9sb2dpdHMuYXJnbWF4KCklMEFhbnN3ZXJfZW5kX2luZGV4JTIwJTNEJTIwb3V0cHV0cy5lbmRfbG9naXRzLmFyZ21heCgpJTBBJTBBcHJlZGljdF9hbnN3ZXJfdG9rZW5zJTIwJTNEJTIwaW5wdXRzLmlucHV0X2lkcyU1QjAlMkMlMjBhbnN3ZXJfc3RhcnRfaW5kZXglMjAlM0ElMjBhbnN3ZXJfZW5kX2luZGV4JTIwJTJCJTIwMSU1RCUwQXRva2VuaXplci5kZWNvZGUocHJlZGljdF9hbnN3ZXJfdG9rZW5zJTJDJTIwc2tpcF9zcGVjaWFsX3Rva2VucyUzRFRydWUpJTBBJTBBJTIzJTIwdGFyZ2V0JTIwaXMlMjAlMjJuaWNlJTIwcHVwcGV0JTIyJTBBdGFyZ2V0X3N0YXJ0X2luZGV4JTIwJTNEJTIwdG9yY2gudGVuc29yKCU1QjE0JTVEKSUwQXRhcmdldF9lbmRfaW5kZXglMjAlM0QlMjB0b3JjaC50ZW5zb3IoJTVCMTUlNUQpJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwc3RhcnRfcG9zaXRpb25zJTNEdGFyZ2V0X3N0YXJ0X2luZGV4JTJDJTIwZW5kX3Bvc2l0aW9ucyUzRHRhcmdldF9lbmRfaW5kZXgpJTBBbG9zcyUyMCUzRCUyMG91dHB1dHMubG9zcyUwQXJvdW5kKGxvc3MuaXRlbSgpJTJDJTIwMik=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, XLMRobertaForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;deepset/roberta-base-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;deepset/roberta-base-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-string">&#x27; puppet&#x27;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.86</span>`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,t=a(),g(s.$$.fragment)},l(n){e=d(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),t=r(n),_(s.$$.fragment,n)},m(n,w){c(n,e,w),c(n,t,w),b(s,n,w),v=!0},p:I,i(n){v||(M(s.$$.fragment,n),v=!0)},o(n){T(s.$$.fragment,n),v=!1},d(n){n&&(i(e),i(t)),y(s,n)}}}function rs($){let e,m,t,s,v,n,w="The bare XLM-RoBERTa Model transformer outputting raw hidden-states without any specific head on top.",D,U,C=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,E,z,J=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,A,f,X=`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in <em>Attention is
all you need</em>_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`,Ye,he,ko=`To behave as an decoder the model needs to be initialized with the <code>is_decoder</code> argument of the configuration set
to <code>True</code>. To be used in a Seq2Seq model, the model needs to initialized with both <code>is_decoder</code> argument and
<code>add_cross_attention</code> set to <code>True</code>; an <code>encoder_hidden_states</code> is then expected as an input to the forward pass.`,hn,ce,zn='.. _<em>Attention is all you need</em>: <a href="https://arxiv.org/abs/1706.03762" rel="nofollow">https://arxiv.org/abs/1706.03762</a>',qt,re,Ke,Kt,Ve,En='The <a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaModel">XLMRobertaModel</a> forward method, overrides the <code>__call__</code> special method.',S,Se,dt,ct,oe,je,en,ee,Un,fn,et,ao="XLM-RoBERTa Model with a <code>language modeling</code> head on top for CLM fine-tuning.",tt,tn,pt=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,mt,Ft,nn=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,_o,ye,Ce,An,P,Fn='The <a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaForCausalLM">XLMRobertaForCausalLM</a> forward method, overrides the <code>__call__</code> special method.',on,ke,fe,we,sn,ut,nt,Je,ze,gn,te,Lt="XLM-RoBERTa Model with a <code>language modeling</code> head on top.",Ln,an,_n=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,bn,ie,Rn=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,rn,le,Zt,Pn,Q,In='The <a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaForMaskedLM">XLMRobertaForMaskedLM</a> forward method, overrides the <code>__call__</code> special method.',ln,Ee,Xn,Nt,se,ht,pe,H,Mn,Rt,ft,me=`XLM-RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`,Ue,jn,Bt=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Cn,ne,Gt=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Tn,ge,Y,gt,Ht,yn='The <a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaForSequenceClassification">XLMRobertaForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',bo,_t,Xt,kn,bt,ot,Oe,Mt,jt,Ie,B,ve,Ct,dn=`XLM-RoBERTa Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`,Qn,Wn,Jt=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,qn,We,wn=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,zt,Ae,Z,Tt,qe,st='The <a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaForMultipleChoice">XLMRobertaForMultipleChoice</a> forward method, overrides the <code>__call__</code> special method.',Mo,yt,cn,Jn,Vt,_e,at,xe,be,ro,ae,rt=`XLM-RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`,To,St,Ze=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,kt,Et,vn=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,yo,$e,Fe,Yn,ue,On='The <a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaForTokenClassification">XLMRobertaForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',p,L,V,G,At,wt,Pt,Pe,K,Zn,it,io=`XLM-RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,lo,so,Ne=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,co,po,Dn=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Ro,pn,Be,mo,uo,Kn='The <a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaForQuestionAnswering">XLMRobertaForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',Xo,eo,Qt,to,Le;return e=new Xe({props:{title:"XLMRobertaModel",local:"transformers.XLMRobertaModel",headingTag:"h2"}}),s=new N({props:{name:"class transformers.XLMRobertaModel",anchor:"transformers.XLMRobertaModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.XLMRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L679"}}),Ke=new N({props:{name:"forward",anchor:"transformers.XLMRobertaModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMRobertaModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMRobertaModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMRobertaModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMRobertaModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMRobertaModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMRobertaModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMRobertaModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMRobertaModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.XLMRobertaModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.XLMRobertaModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.XLMRobertaModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L727",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig"
>XLMRobertaConfig</a>) and inputs.</p>
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
`}}),Se=new Te({props:{$$slots:{default:[So]},$$scope:{ctx:$}}}),ct=new Ge({props:{anchor:"transformers.XLMRobertaModel.forward.example",$$slots:{default:[Eo]},$$scope:{ctx:$}}}),je=new Xe({props:{title:"XLMRobertaForCausalLM",local:"transformers.XLMRobertaForCausalLM",headingTag:"h2"}}),Un=new N({props:{name:"class transformers.XLMRobertaForCausalLM",anchor:"transformers.XLMRobertaForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L865"}}),Ce=new N({props:{name:"forward",anchor:"transformers.XLMRobertaForCausalLM.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"past_key_values",val:": Tuple = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMRobertaForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMRobertaForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMRobertaForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMRobertaForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMRobertaForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMRobertaForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMRobertaForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMRobertaForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.XLMRobertaForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.XLMRobertaForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.XLMRobertaForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.XLMRobertaForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L891",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig"
>XLMRobertaConfig</a>) and inputs.</p>
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
`}}),ke=new Te({props:{$$slots:{default:[Ao]},$$scope:{ctx:$}}}),we=new Ge({props:{anchor:"transformers.XLMRobertaForCausalLM.forward.example",$$slots:{default:[Po]},$$scope:{ctx:$}}}),ut=new Xe({props:{title:"XLMRobertaForMaskedLM",local:"transformers.XLMRobertaForMaskedLM",headingTag:"h2"}}),ze=new N({props:{name:"class transformers.XLMRobertaForMaskedLM",anchor:"transformers.XLMRobertaForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L1029"}}),Zt=new N({props:{name:"forward",anchor:"transformers.XLMRobertaForMaskedLM.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L1058",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig"
>XLMRobertaConfig</a>) and inputs.</p>
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
`}}),Ee=new Te({props:{$$slots:{default:[Qo]},$$scope:{ctx:$}}}),Nt=new Ge({props:{anchor:"transformers.XLMRobertaForMaskedLM.forward.example",$$slots:{default:[Yo]},$$scope:{ctx:$}}}),ht=new Xe({props:{title:"XLMRobertaForSequenceClassification",local:"transformers.XLMRobertaForSequenceClassification",headingTag:"h2"}}),Mn=new N({props:{name:"class transformers.XLMRobertaForSequenceClassification",anchor:"transformers.XLMRobertaForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L1159"}}),Y=new N({props:{name:"forward",anchor:"transformers.XLMRobertaForSequenceClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMRobertaForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMRobertaForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMRobertaForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMRobertaForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMRobertaForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMRobertaForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMRobertaForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMRobertaForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L1179",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig"
>XLMRobertaConfig</a>) and inputs.</p>
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
`}}),_t=new Te({props:{$$slots:{default:[Oo]},$$scope:{ctx:$}}}),kn=new Ge({props:{anchor:"transformers.XLMRobertaForSequenceClassification.forward.example",$$slots:{default:[Do]},$$scope:{ctx:$}}}),ot=new Ge({props:{anchor:"transformers.XLMRobertaForSequenceClassification.forward.example-2",$$slots:{default:[Ko]},$$scope:{ctx:$}}}),Mt=new Xe({props:{title:"XLMRobertaForMultipleChoice",local:"transformers.XLMRobertaForMultipleChoice",headingTag:"h2"}}),B=new N({props:{name:"class transformers.XLMRobertaForMultipleChoice",anchor:"transformers.XLMRobertaForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L1259"}}),Z=new N({props:{name:"forward",anchor:"transformers.XLMRobertaForMultipleChoice.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMRobertaForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMRobertaForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMRobertaForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMRobertaForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMRobertaForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMRobertaForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMRobertaForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMRobertaForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L1278",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig"
>XLMRobertaConfig</a>) and inputs.</p>
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
`}}),yt=new Te({props:{$$slots:{default:[es]},$$scope:{ctx:$}}}),Jn=new Ge({props:{anchor:"transformers.XLMRobertaForMultipleChoice.forward.example",$$slots:{default:[ts]},$$scope:{ctx:$}}}),_e=new Xe({props:{title:"XLMRobertaForTokenClassification",local:"transformers.XLMRobertaForTokenClassification",headingTag:"h2"}}),be=new N({props:{name:"class transformers.XLMRobertaForTokenClassification",anchor:"transformers.XLMRobertaForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L1354"}}),Fe=new N({props:{name:"forward",anchor:"transformers.XLMRobertaForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMRobertaForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMRobertaForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMRobertaForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMRobertaForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMRobertaForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMRobertaForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMRobertaForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMRobertaForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L1377",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig"
>XLMRobertaConfig</a>) and inputs.</p>
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
`}}),L=new Te({props:{$$slots:{default:[ns]},$$scope:{ctx:$}}}),G=new Ge({props:{anchor:"transformers.XLMRobertaForTokenClassification.forward.example",$$slots:{default:[os]},$$scope:{ctx:$}}}),wt=new Xe({props:{title:"XLMRobertaForQuestionAnswering",local:"transformers.XLMRobertaForQuestionAnswering",headingTag:"h2"}}),K=new N({props:{name:"class transformers.XLMRobertaForQuestionAnswering",anchor:"transformers.XLMRobertaForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L1463"}}),Be=new N({props:{name:"forward",anchor:"transformers.XLMRobertaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"start_positions",val:": Optional = None"},{name:"end_positions",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L1482",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig"
>XLMRobertaConfig</a>) and inputs.</p>
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
`}}),eo=new Te({props:{$$slots:{default:[ss]},$$scope:{ctx:$}}}),to=new Ge({props:{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.example",$$slots:{default:[as]},$$scope:{ctx:$}}}),{c(){g(e.$$.fragment),m=a(),t=l("div"),g(s.$$.fragment),v=a(),n=l("p"),n.textContent=w,D=a(),U=l("p"),U.innerHTML=C,E=a(),z=l("p"),z.innerHTML=J,A=a(),f=l("p"),f.innerHTML=X,Ye=a(),he=l("p"),he.innerHTML=ko,hn=a(),ce=l("p"),ce.innerHTML=zn,qt=a(),re=l("div"),g(Ke.$$.fragment),Kt=a(),Ve=l("p"),Ve.innerHTML=En,S=a(),g(Se.$$.fragment),dt=a(),g(ct.$$.fragment),oe=a(),g(je.$$.fragment),en=a(),ee=l("div"),g(Un.$$.fragment),fn=a(),et=l("p"),et.innerHTML=ao,tt=a(),tn=l("p"),tn.innerHTML=pt,mt=a(),Ft=l("p"),Ft.innerHTML=nn,_o=a(),ye=l("div"),g(Ce.$$.fragment),An=a(),P=l("p"),P.innerHTML=Fn,on=a(),g(ke.$$.fragment),fe=a(),g(we.$$.fragment),sn=a(),g(ut.$$.fragment),nt=a(),Je=l("div"),g(ze.$$.fragment),gn=a(),te=l("p"),te.innerHTML=Lt,Ln=a(),an=l("p"),an.innerHTML=_n,bn=a(),ie=l("p"),ie.innerHTML=Rn,rn=a(),le=l("div"),g(Zt.$$.fragment),Pn=a(),Q=l("p"),Q.innerHTML=In,ln=a(),g(Ee.$$.fragment),Xn=a(),g(Nt.$$.fragment),se=a(),g(ht.$$.fragment),pe=a(),H=l("div"),g(Mn.$$.fragment),Rt=a(),ft=l("p"),ft.textContent=me,Ue=a(),jn=l("p"),jn.innerHTML=Bt,Cn=a(),ne=l("p"),ne.innerHTML=Gt,Tn=a(),ge=l("div"),g(Y.$$.fragment),gt=a(),Ht=l("p"),Ht.innerHTML=yn,bo=a(),g(_t.$$.fragment),Xt=a(),g(kn.$$.fragment),bt=a(),g(ot.$$.fragment),Oe=a(),g(Mt.$$.fragment),jt=a(),Ie=l("div"),g(B.$$.fragment),ve=a(),Ct=l("p"),Ct.textContent=dn,Qn=a(),Wn=l("p"),Wn.innerHTML=Jt,qn=a(),We=l("p"),We.innerHTML=wn,zt=a(),Ae=l("div"),g(Z.$$.fragment),Tt=a(),qe=l("p"),qe.innerHTML=st,Mo=a(),g(yt.$$.fragment),cn=a(),g(Jn.$$.fragment),Vt=a(),g(_e.$$.fragment),at=a(),xe=l("div"),g(be.$$.fragment),ro=a(),ae=l("p"),ae.textContent=rt,To=a(),St=l("p"),St.innerHTML=Ze,kt=a(),Et=l("p"),Et.innerHTML=vn,yo=a(),$e=l("div"),g(Fe.$$.fragment),Yn=a(),ue=l("p"),ue.innerHTML=On,p=a(),g(L.$$.fragment),V=a(),g(G.$$.fragment),At=a(),g(wt.$$.fragment),Pt=a(),Pe=l("div"),g(K.$$.fragment),Zn=a(),it=l("p"),it.innerHTML=io,lo=a(),so=l("p"),so.innerHTML=Ne,co=a(),po=l("p"),po.innerHTML=Dn,Ro=a(),pn=l("div"),g(Be.$$.fragment),mo=a(),uo=l("p"),uo.innerHTML=Kn,Xo=a(),g(eo.$$.fragment),Qt=a(),g(to.$$.fragment),this.h()},l(k){_(e.$$.fragment,k),m=r(k),t=d(k,"DIV",{class:!0});var R=q(t);_(s.$$.fragment,R),v=r(R),n=d(R,"P",{"data-svelte-h":!0}),u(n)!=="svelte-1xk02f4"&&(n.textContent=w),D=r(R),U=d(R,"P",{"data-svelte-h":!0}),u(U)!=="svelte-6pahdo"&&(U.innerHTML=C),E=r(R),z=d(R,"P",{"data-svelte-h":!0}),u(z)!=="svelte-hswkmf"&&(z.innerHTML=J),A=r(R),f=d(R,"P",{"data-svelte-h":!0}),u(f)!=="svelte-rehfhh"&&(f.innerHTML=X),Ye=r(R),he=d(R,"P",{"data-svelte-h":!0}),u(he)!=="svelte-174erte"&&(he.innerHTML=ko),hn=r(R),ce=d(R,"P",{"data-svelte-h":!0}),u(ce)!=="svelte-p9qvd1"&&(ce.innerHTML=zn),qt=r(R),re=d(R,"DIV",{class:!0});var vt=q(re);_(Ke.$$.fragment,vt),Kt=r(vt),Ve=d(vt,"P",{"data-svelte-h":!0}),u(Ve)!=="svelte-1cf7w8m"&&(Ve.innerHTML=En),S=r(vt),_(Se.$$.fragment,vt),dt=r(vt),_(ct.$$.fragment,vt),vt.forEach(i),R.forEach(i),oe=r(k),_(je.$$.fragment,k),en=r(k),ee=d(k,"DIV",{class:!0});var O=q(ee);_(Un.$$.fragment,O),fn=r(O),et=d(O,"P",{"data-svelte-h":!0}),u(et)!=="svelte-15apchw"&&(et.innerHTML=ao),tt=r(O),tn=d(O,"P",{"data-svelte-h":!0}),u(tn)!=="svelte-6pahdo"&&(tn.innerHTML=pt),mt=r(O),Ft=d(O,"P",{"data-svelte-h":!0}),u(Ft)!=="svelte-hswkmf"&&(Ft.innerHTML=nn),_o=r(O),ye=d(O,"DIV",{class:!0});var xt=q(ye);_(Ce.$$.fragment,xt),An=r(xt),P=d(xt,"P",{"data-svelte-h":!0}),u(P)!=="svelte-yykrua"&&(P.innerHTML=Fn),on=r(xt),_(ke.$$.fragment,xt),fe=r(xt),_(we.$$.fragment,xt),xt.forEach(i),O.forEach(i),sn=r(k),_(ut.$$.fragment,k),nt=r(k),Je=d(k,"DIV",{class:!0});var Qe=q(Je);_(ze.$$.fragment,Qe),gn=r(Qe),te=d(Qe,"P",{"data-svelte-h":!0}),u(te)!=="svelte-1ponqk3"&&(te.innerHTML=Lt),Ln=r(Qe),an=d(Qe,"P",{"data-svelte-h":!0}),u(an)!=="svelte-6pahdo"&&(an.innerHTML=_n),bn=r(Qe),ie=d(Qe,"P",{"data-svelte-h":!0}),u(ie)!=="svelte-hswkmf"&&(ie.innerHTML=Rn),rn=r(Qe),le=d(Qe,"DIV",{class:!0});var Ut=q(le);_(Zt.$$.fragment,Ut),Pn=r(Ut),Q=d(Ut,"P",{"data-svelte-h":!0}),u(Q)!=="svelte-1hndloy"&&(Q.innerHTML=In),ln=r(Ut),_(Ee.$$.fragment,Ut),Xn=r(Ut),_(Nt.$$.fragment,Ut),Ut.forEach(i),Qe.forEach(i),se=r(k),_(ht.$$.fragment,k),pe=r(k),H=d(k,"DIV",{class:!0});var De=q(H);_(Mn.$$.fragment,De),Rt=r(De),ft=d(De,"P",{"data-svelte-h":!0}),u(ft)!=="svelte-nc5ddr"&&(ft.textContent=me),Ue=r(De),jn=d(De,"P",{"data-svelte-h":!0}),u(jn)!=="svelte-6pahdo"&&(jn.innerHTML=Bt),Cn=r(De),ne=d(De,"P",{"data-svelte-h":!0}),u(ne)!=="svelte-hswkmf"&&(ne.innerHTML=Gt),Tn=r(De),ge=d(De,"DIV",{class:!0});var Yt=q(ge);_(Y.$$.fragment,Yt),gt=r(Yt),Ht=d(Yt,"P",{"data-svelte-h":!0}),u(Ht)!=="svelte-fa65tu"&&(Ht.innerHTML=yn),bo=r(Yt),_(_t.$$.fragment,Yt),Xt=r(Yt),_(kn.$$.fragment,Yt),bt=r(Yt),_(ot.$$.fragment,Yt),Yt.forEach(i),De.forEach(i),Oe=r(k),_(Mt.$$.fragment,k),jt=r(k),Ie=d(k,"DIV",{class:!0});var Me=q(Ie);_(B.$$.fragment,Me),ve=r(Me),Ct=d(Me,"P",{"data-svelte-h":!0}),u(Ct)!=="svelte-z8vnw3"&&(Ct.textContent=dn),Qn=r(Me),Wn=d(Me,"P",{"data-svelte-h":!0}),u(Wn)!=="svelte-6pahdo"&&(Wn.innerHTML=Jt),qn=r(Me),We=d(Me,"P",{"data-svelte-h":!0}),u(We)!=="svelte-hswkmf"&&(We.innerHTML=wn),zt=r(Me),Ae=d(Me,"DIV",{class:!0});var xn=q(Ae);_(Z.$$.fragment,xn),Tt=r(xn),qe=d(xn,"P",{"data-svelte-h":!0}),u(qe)!=="svelte-165j7d2"&&(qe.innerHTML=st),Mo=r(xn),_(yt.$$.fragment,xn),cn=r(xn),_(Jn.$$.fragment,xn),xn.forEach(i),Me.forEach(i),Vt=r(k),_(_e.$$.fragment,k),at=r(k),xe=d(k,"DIV",{class:!0});var h=q(xe);_(be.$$.fragment,h),ro=r(h),ae=d(h,"P",{"data-svelte-h":!0}),u(ae)!=="svelte-bqrckq"&&(ae.textContent=rt),To=r(h),St=d(h,"P",{"data-svelte-h":!0}),u(St)!=="svelte-6pahdo"&&(St.innerHTML=Ze),kt=r(h),Et=d(h,"P",{"data-svelte-h":!0}),u(Et)!=="svelte-hswkmf"&&(Et.innerHTML=vn),yo=r(h),$e=d(h,"DIV",{class:!0});var F=q($e);_(Fe.$$.fragment,F),Yn=r(F),ue=d(F,"P",{"data-svelte-h":!0}),u(ue)!=="svelte-ygy292"&&(ue.innerHTML=On),p=r(F),_(L.$$.fragment,F),V=r(F),_(G.$$.fragment,F),F.forEach(i),h.forEach(i),At=r(k),_(wt.$$.fragment,k),Pt=r(k),Pe=d(k,"DIV",{class:!0});var Re=q(Pe);_(K.$$.fragment,Re),Zn=r(Re),it=d(Re,"P",{"data-svelte-h":!0}),u(it)!=="svelte-1x9d61o"&&(it.innerHTML=io),lo=r(Re),so=d(Re,"P",{"data-svelte-h":!0}),u(so)!=="svelte-6pahdo"&&(so.innerHTML=Ne),co=r(Re),po=d(Re,"P",{"data-svelte-h":!0}),u(po)!=="svelte-hswkmf"&&(po.innerHTML=Dn),Ro=r(Re),pn=d(Re,"DIV",{class:!0});var de=q(pn);_(Be.$$.fragment,de),mo=r(de),uo=d(de,"P",{"data-svelte-h":!0}),u(uo)!=="svelte-42dn0k"&&(uo.innerHTML=Kn),Xo=r(de),_(eo.$$.fragment,de),Qt=r(de),_(to.$$.fragment,de),de.forEach(i),Re.forEach(i),this.h()},h(){W(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(pn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(k,R){b(e,k,R),c(k,m,R),c(k,t,R),b(s,t,null),o(t,v),o(t,n),o(t,D),o(t,U),o(t,E),o(t,z),o(t,A),o(t,f),o(t,Ye),o(t,he),o(t,hn),o(t,ce),o(t,qt),o(t,re),b(Ke,re,null),o(re,Kt),o(re,Ve),o(re,S),b(Se,re,null),o(re,dt),b(ct,re,null),c(k,oe,R),b(je,k,R),c(k,en,R),c(k,ee,R),b(Un,ee,null),o(ee,fn),o(ee,et),o(ee,tt),o(ee,tn),o(ee,mt),o(ee,Ft),o(ee,_o),o(ee,ye),b(Ce,ye,null),o(ye,An),o(ye,P),o(ye,on),b(ke,ye,null),o(ye,fe),b(we,ye,null),c(k,sn,R),b(ut,k,R),c(k,nt,R),c(k,Je,R),b(ze,Je,null),o(Je,gn),o(Je,te),o(Je,Ln),o(Je,an),o(Je,bn),o(Je,ie),o(Je,rn),o(Je,le),b(Zt,le,null),o(le,Pn),o(le,Q),o(le,ln),b(Ee,le,null),o(le,Xn),b(Nt,le,null),c(k,se,R),b(ht,k,R),c(k,pe,R),c(k,H,R),b(Mn,H,null),o(H,Rt),o(H,ft),o(H,Ue),o(H,jn),o(H,Cn),o(H,ne),o(H,Tn),o(H,ge),b(Y,ge,null),o(ge,gt),o(ge,Ht),o(ge,bo),b(_t,ge,null),o(ge,Xt),b(kn,ge,null),o(ge,bt),b(ot,ge,null),c(k,Oe,R),b(Mt,k,R),c(k,jt,R),c(k,Ie,R),b(B,Ie,null),o(Ie,ve),o(Ie,Ct),o(Ie,Qn),o(Ie,Wn),o(Ie,qn),o(Ie,We),o(Ie,zt),o(Ie,Ae),b(Z,Ae,null),o(Ae,Tt),o(Ae,qe),o(Ae,Mo),b(yt,Ae,null),o(Ae,cn),b(Jn,Ae,null),c(k,Vt,R),b(_e,k,R),c(k,at,R),c(k,xe,R),b(be,xe,null),o(xe,ro),o(xe,ae),o(xe,To),o(xe,St),o(xe,kt),o(xe,Et),o(xe,yo),o(xe,$e),b(Fe,$e,null),o($e,Yn),o($e,ue),o($e,p),b(L,$e,null),o($e,V),b(G,$e,null),c(k,At,R),b(wt,k,R),c(k,Pt,R),c(k,Pe,R),b(K,Pe,null),o(Pe,Zn),o(Pe,it),o(Pe,lo),o(Pe,so),o(Pe,co),o(Pe,po),o(Pe,Ro),o(Pe,pn),b(Be,pn,null),o(pn,mo),o(pn,uo),o(pn,Xo),b(eo,pn,null),o(pn,Qt),b(to,pn,null),Le=!0},p(k,R){const vt={};R&2&&(vt.$$scope={dirty:R,ctx:k}),Se.$set(vt);const O={};R&2&&(O.$$scope={dirty:R,ctx:k}),ct.$set(O);const xt={};R&2&&(xt.$$scope={dirty:R,ctx:k}),ke.$set(xt);const Qe={};R&2&&(Qe.$$scope={dirty:R,ctx:k}),we.$set(Qe);const Ut={};R&2&&(Ut.$$scope={dirty:R,ctx:k}),Ee.$set(Ut);const De={};R&2&&(De.$$scope={dirty:R,ctx:k}),Nt.$set(De);const Yt={};R&2&&(Yt.$$scope={dirty:R,ctx:k}),_t.$set(Yt);const Me={};R&2&&(Me.$$scope={dirty:R,ctx:k}),kn.$set(Me);const xn={};R&2&&(xn.$$scope={dirty:R,ctx:k}),ot.$set(xn);const h={};R&2&&(h.$$scope={dirty:R,ctx:k}),yt.$set(h);const F={};R&2&&(F.$$scope={dirty:R,ctx:k}),Jn.$set(F);const Re={};R&2&&(Re.$$scope={dirty:R,ctx:k}),L.$set(Re);const de={};R&2&&(de.$$scope={dirty:R,ctx:k}),G.$set(de);const Ot={};R&2&&(Ot.$$scope={dirty:R,ctx:k}),eo.$set(Ot);const Dt={};R&2&&(Dt.$$scope={dirty:R,ctx:k}),to.$set(Dt)},i(k){Le||(M(e.$$.fragment,k),M(s.$$.fragment,k),M(Ke.$$.fragment,k),M(Se.$$.fragment,k),M(ct.$$.fragment,k),M(je.$$.fragment,k),M(Un.$$.fragment,k),M(Ce.$$.fragment,k),M(ke.$$.fragment,k),M(we.$$.fragment,k),M(ut.$$.fragment,k),M(ze.$$.fragment,k),M(Zt.$$.fragment,k),M(Ee.$$.fragment,k),M(Nt.$$.fragment,k),M(ht.$$.fragment,k),M(Mn.$$.fragment,k),M(Y.$$.fragment,k),M(_t.$$.fragment,k),M(kn.$$.fragment,k),M(ot.$$.fragment,k),M(Mt.$$.fragment,k),M(B.$$.fragment,k),M(Z.$$.fragment,k),M(yt.$$.fragment,k),M(Jn.$$.fragment,k),M(_e.$$.fragment,k),M(be.$$.fragment,k),M(Fe.$$.fragment,k),M(L.$$.fragment,k),M(G.$$.fragment,k),M(wt.$$.fragment,k),M(K.$$.fragment,k),M(Be.$$.fragment,k),M(eo.$$.fragment,k),M(to.$$.fragment,k),Le=!0)},o(k){T(e.$$.fragment,k),T(s.$$.fragment,k),T(Ke.$$.fragment,k),T(Se.$$.fragment,k),T(ct.$$.fragment,k),T(je.$$.fragment,k),T(Un.$$.fragment,k),T(Ce.$$.fragment,k),T(ke.$$.fragment,k),T(we.$$.fragment,k),T(ut.$$.fragment,k),T(ze.$$.fragment,k),T(Zt.$$.fragment,k),T(Ee.$$.fragment,k),T(Nt.$$.fragment,k),T(ht.$$.fragment,k),T(Mn.$$.fragment,k),T(Y.$$.fragment,k),T(_t.$$.fragment,k),T(kn.$$.fragment,k),T(ot.$$.fragment,k),T(Mt.$$.fragment,k),T(B.$$.fragment,k),T(Z.$$.fragment,k),T(yt.$$.fragment,k),T(Jn.$$.fragment,k),T(_e.$$.fragment,k),T(be.$$.fragment,k),T(Fe.$$.fragment,k),T(L.$$.fragment,k),T(G.$$.fragment,k),T(wt.$$.fragment,k),T(K.$$.fragment,k),T(Be.$$.fragment,k),T(eo.$$.fragment,k),T(to.$$.fragment,k),Le=!1},d(k){k&&(i(m),i(t),i(oe),i(en),i(ee),i(sn),i(nt),i(Je),i(se),i(pe),i(H),i(Oe),i(jt),i(Ie),i(Vt),i(at),i(xe),i(At),i(Pt),i(Pe)),y(e,k),y(s),y(Ke),y(Se),y(ct),y(je,k),y(Un),y(Ce),y(ke),y(we),y(ut,k),y(ze),y(Zt),y(Ee),y(Nt),y(ht,k),y(Mn),y(Y),y(_t),y(kn),y(ot),y(Mt,k),y(B),y(Z),y(yt),y(Jn),y(_e,k),y(be),y(Fe),y(L),y(G),y(wt,k),y(K),y(Be),y(eo),y(to)}}}function is($){let e,m;return e=new Uo({props:{$$slots:{default:[rs]},$$scope:{ctx:$}}}),{c(){g(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,s){b(e,t,s),m=!0},p(t,s){const v={};s&2&&(v.$$scope={dirty:s,ctx:t}),e.$set(v)},i(t){m||(M(e.$$.fragment,t),m=!0)},o(t){T(e.$$.fragment,t),m=!1},d(t){y(e,t)}}}function ls($){let e,m="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,s,v="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",n,w,D=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,U,C,E=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,z,J,A=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=l("p"),e.innerHTML=m,t=a(),s=l("ul"),s.innerHTML=v,n=a(),w=l("p"),w.innerHTML=D,U=a(),C=l("ul"),C.innerHTML=E,z=a(),J=l("p"),J.innerHTML=A},l(f){e=d(f,"P",{"data-svelte-h":!0}),u(e)!=="svelte-1ajbfxg"&&(e.innerHTML=m),t=r(f),s=d(f,"UL",{"data-svelte-h":!0}),u(s)!=="svelte-qm1t26"&&(s.innerHTML=v),n=r(f),w=d(f,"P",{"data-svelte-h":!0}),u(w)!=="svelte-1v9qsc5"&&(w.innerHTML=D),U=r(f),C=d(f,"UL",{"data-svelte-h":!0}),u(C)!=="svelte-15scerc"&&(C.innerHTML=E),z=r(f),J=d(f,"P",{"data-svelte-h":!0}),u(J)!=="svelte-1an3odd"&&(J.innerHTML=A)},m(f,X){c(f,e,X),c(f,t,X),c(f,s,X),c(f,n,X),c(f,w,X),c(f,U,X),c(f,C,X),c(f,z,X),c(f,J,X)},p:I,d(f){f&&(i(e),i(t),i(s),i(n),i(w),i(U),i(C),i(z),i(J))}}}function ds($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(t){e=d(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(t,s){c(t,e,s)},p:I,d(t){t&&i(e)}}}function cs($){let e,m="Example:",t,s,v;return s=new He({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURlhMTVJvYmVydGFNb2RlbCUwQWltcG9ydCUyMHRlbnNvcmZsb3clMjBhcyUyMHRmJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyRmFjZWJvb2tBSSUyRnhsbS1yb2JlcnRhLWJhc2UlMjIpJTBBbW9kZWwlMjAlM0QlMjBURlhMTVJvYmVydGFNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyRmFjZWJvb2tBSSUyRnhsbS1yb2JlcnRhLWJhc2UlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbChpbnB1dHMpJTBBJTBBbGFzdF9oaWRkZW5fc3RhdGVzJTIwJTNEJTIwb3V0cHV0cy5sYXN0X2hpZGRlbl9zdGF0ZQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFXLMRobertaModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;FacebookAI/xlm-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLMRobertaModel.from_pretrained(<span class="hljs-string">&quot;FacebookAI/xlm-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,t=a(),g(s.$$.fragment)},l(n){e=d(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),t=r(n),_(s.$$.fragment,n)},m(n,w){c(n,e,w),c(n,t,w),b(s,n,w),v=!0},p:I,i(n){v||(M(s.$$.fragment,n),v=!0)},o(n){T(s.$$.fragment,n),v=!1},d(n){n&&(i(e),i(t)),y(s,n)}}}function ps($){let e,m="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,s,v="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",n,w,D=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,U,C,E=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,z,J,A=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=l("p"),e.innerHTML=m,t=a(),s=l("ul"),s.innerHTML=v,n=a(),w=l("p"),w.innerHTML=D,U=a(),C=l("ul"),C.innerHTML=E,z=a(),J=l("p"),J.innerHTML=A},l(f){e=d(f,"P",{"data-svelte-h":!0}),u(e)!=="svelte-1ajbfxg"&&(e.innerHTML=m),t=r(f),s=d(f,"UL",{"data-svelte-h":!0}),u(s)!=="svelte-qm1t26"&&(s.innerHTML=v),n=r(f),w=d(f,"P",{"data-svelte-h":!0}),u(w)!=="svelte-1v9qsc5"&&(w.innerHTML=D),U=r(f),C=d(f,"UL",{"data-svelte-h":!0}),u(C)!=="svelte-15scerc"&&(C.innerHTML=E),z=r(f),J=d(f,"P",{"data-svelte-h":!0}),u(J)!=="svelte-1an3odd"&&(J.innerHTML=A)},m(f,X){c(f,e,X),c(f,t,X),c(f,s,X),c(f,n,X),c(f,w,X),c(f,U,X),c(f,C,X),c(f,z,X),c(f,J,X)},p:I,d(f){f&&(i(e),i(t),i(s),i(n),i(w),i(U),i(C),i(z),i(J))}}}function ms($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(t){e=d(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(t,s){c(t,e,s)},p:I,d(t){t&&i(e)}}}function us($){let e,m="Example:",t,s,v;return s=new He({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURlhMTVJvYmVydGFGb3JDYXVzYWxMTSUwQWltcG9ydCUyMHRlbnNvcmZsb3clMjBhcyUyMHRmJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyRmFjZWJvb2tBSSUyRnhsbS1yb2JlcnRhLWJhc2UlMjIpJTBBbW9kZWwlMjAlM0QlMjBURlhMTVJvYmVydGFGb3JDYXVzYWxMTS5mcm9tX3ByZXRyYWluZWQoJTIyRmFjZWJvb2tBSSUyRnhsbS1yb2JlcnRhLWJhc2UlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbChpbnB1dHMpJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFXLMRobertaForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;FacebookAI/xlm-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLMRobertaForCausalLM.from_pretrained(<span class="hljs-string">&quot;FacebookAI/xlm-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,t=a(),g(s.$$.fragment)},l(n){e=d(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),t=r(n),_(s.$$.fragment,n)},m(n,w){c(n,e,w),c(n,t,w),b(s,n,w),v=!0},p:I,i(n){v||(M(s.$$.fragment,n),v=!0)},o(n){T(s.$$.fragment,n),v=!1},d(n){n&&(i(e),i(t)),y(s,n)}}}function hs($){let e,m="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,s,v="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",n,w,D=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,U,C,E=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,z,J,A=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=l("p"),e.innerHTML=m,t=a(),s=l("ul"),s.innerHTML=v,n=a(),w=l("p"),w.innerHTML=D,U=a(),C=l("ul"),C.innerHTML=E,z=a(),J=l("p"),J.innerHTML=A},l(f){e=d(f,"P",{"data-svelte-h":!0}),u(e)!=="svelte-1ajbfxg"&&(e.innerHTML=m),t=r(f),s=d(f,"UL",{"data-svelte-h":!0}),u(s)!=="svelte-qm1t26"&&(s.innerHTML=v),n=r(f),w=d(f,"P",{"data-svelte-h":!0}),u(w)!=="svelte-1v9qsc5"&&(w.innerHTML=D),U=r(f),C=d(f,"UL",{"data-svelte-h":!0}),u(C)!=="svelte-15scerc"&&(C.innerHTML=E),z=r(f),J=d(f,"P",{"data-svelte-h":!0}),u(J)!=="svelte-1an3odd"&&(J.innerHTML=A)},m(f,X){c(f,e,X),c(f,t,X),c(f,s,X),c(f,n,X),c(f,w,X),c(f,U,X),c(f,C,X),c(f,z,X),c(f,J,X)},p:I,d(f){f&&(i(e),i(t),i(s),i(n),i(w),i(U),i(C),i(z),i(J))}}}function fs($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(t){e=d(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(t,s){c(t,e,s)},p:I,d(t){t&&i(e)}}}function gs($){let e,m="Example:",t,s,v;return s=new He({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURlhMTVJvYmVydGFGb3JNYXNrZWRMTSUwQWltcG9ydCUyMHRlbnNvcmZsb3clMjBhcyUyMHRmJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyRmFjZWJvb2tBSSUyRnhsbS1yb2JlcnRhLWJhc2UlMjIpJTBBbW9kZWwlMjAlM0QlMjBURlhMTVJvYmVydGFGb3JNYXNrZWRMTS5mcm9tX3ByZXRyYWluZWQoJTIyRmFjZWJvb2tBSSUyRnhsbS1yb2JlcnRhLWJhc2UlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMlRoZSUyMGNhcGl0YWwlMjBvZiUyMEZyYW5jZSUyMGlzJTIwJTNDbWFzayUzRS4lMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyKSUwQWxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEElMjMlMjByZXRyaWV2ZSUyMGluZGV4JTIwb2YlMjAlM0NtYXNrJTNFJTBBbWFza190b2tlbl9pbmRleCUyMCUzRCUyMHRmLndoZXJlKChpbnB1dHMuaW5wdXRfaWRzJTIwJTNEJTNEJTIwdG9rZW5pemVyLm1hc2tfdG9rZW5faWQpJTVCMCU1RCklMEFzZWxlY3RlZF9sb2dpdHMlMjAlM0QlMjB0Zi5nYXRoZXJfbmQobG9naXRzJTVCMCU1RCUyQyUyMGluZGljZXMlM0RtYXNrX3Rva2VuX2luZGV4KSUwQSUwQXByZWRpY3RlZF90b2tlbl9pZCUyMCUzRCUyMHRmLm1hdGguYXJnbWF4KHNlbGVjdGVkX2xvZ2l0cyUyQyUyMGF4aXMlM0QtMSklMEF0b2tlbml6ZXIuZGVjb2RlKHByZWRpY3RlZF90b2tlbl9pZCk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFXLMRobertaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;FacebookAI/xlm-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLMRobertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;FacebookAI/xlm-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27; Paris&#x27;</span>`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,t=a(),g(s.$$.fragment)},l(n){e=d(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),t=r(n),_(s.$$.fragment,n)},m(n,w){c(n,e,w),c(n,t,w),b(s,n,w),v=!0},p:I,i(n){v||(M(s.$$.fragment,n),v=!0)},o(n){T(s.$$.fragment,n),v=!1},d(n){n&&(i(e),i(t)),y(s,n)}}}function _s($){let e,m;return e=new He({props:{code:"bGFiZWxzJTIwJTNEJTIwdG9rZW5pemVyKCUyMlRoZSUyMGNhcGl0YWwlMjBvZiUyMEZyYW5jZSUyMGlzJTIwUGFyaXMuJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiklNUIlMjJpbnB1dF9pZHMlMjIlNUQlMEElMjMlMjBtYXNrJTIwbGFiZWxzJTIwb2YlMjBub24tJTNDbWFzayUzRSUyMHRva2VucyUwQWxhYmVscyUyMCUzRCUyMHRmLndoZXJlKGlucHV0cy5pbnB1dF9pZHMlMjAlM0QlM0QlMjB0b2tlbml6ZXIubWFza190b2tlbl9pZCUyQyUyMGxhYmVscyUyQyUyMC0xMDApJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKSUwQXJvdW5kKGZsb2F0KG91dHB1dHMubG9zcyklMkMlMjAyKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`,wrap:!1}}),{c(){g(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,s){b(e,t,s),m=!0},p:I,i(t){m||(M(e.$$.fragment,t),m=!0)},o(t){T(e.$$.fragment,t),m=!1},d(t){y(e,t)}}}function bs($){let e,m="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,s,v="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",n,w,D=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,U,C,E=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,z,J,A=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=l("p"),e.innerHTML=m,t=a(),s=l("ul"),s.innerHTML=v,n=a(),w=l("p"),w.innerHTML=D,U=a(),C=l("ul"),C.innerHTML=E,z=a(),J=l("p"),J.innerHTML=A},l(f){e=d(f,"P",{"data-svelte-h":!0}),u(e)!=="svelte-1ajbfxg"&&(e.innerHTML=m),t=r(f),s=d(f,"UL",{"data-svelte-h":!0}),u(s)!=="svelte-qm1t26"&&(s.innerHTML=v),n=r(f),w=d(f,"P",{"data-svelte-h":!0}),u(w)!=="svelte-1v9qsc5"&&(w.innerHTML=D),U=r(f),C=d(f,"UL",{"data-svelte-h":!0}),u(C)!=="svelte-15scerc"&&(C.innerHTML=E),z=r(f),J=d(f,"P",{"data-svelte-h":!0}),u(J)!=="svelte-1an3odd"&&(J.innerHTML=A)},m(f,X){c(f,e,X),c(f,t,X),c(f,s,X),c(f,n,X),c(f,w,X),c(f,U,X),c(f,C,X),c(f,z,X),c(f,J,X)},p:I,d(f){f&&(i(e),i(t),i(s),i(n),i(w),i(U),i(C),i(z),i(J))}}}function Ms($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(t){e=d(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(t,s){c(t,e,s)},p:I,d(t){t&&i(e)}}}function Ts($){let e,m="Example:",t,s,v;return s=new He({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURlhMTVJvYmVydGFGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uJTBBaW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJjYXJkaWZmbmxwJTJGdHdpdHRlci1yb2JlcnRhLWJhc2UtZW1vdGlvbiUyMiklMEFtb2RlbCUyMCUzRCUyMFRGWExNUm9iZXJ0YUZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmNhcmRpZmZubHAlMkZ0d2l0dGVyLXJvYmVydGEtYmFzZS1lbW90aW9uJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiklMEElMEFsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX2NsYXNzX2lkJTIwJTNEJTIwaW50KHRmLm1hdGguYXJnbWF4KGxvZ2l0cyUyQyUyMGF4aXMlM0QtMSklNUIwJTVEKSUwQW1vZGVsLmNvbmZpZy5pZDJsYWJlbCU1QnByZWRpY3RlZF9jbGFzc19pZCU1RA==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFXLMRobertaForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLMRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;optimism&#x27;</span>`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,t=a(),g(s.$$.fragment)},l(n){e=d(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),t=r(n),_(s.$$.fragment,n)},m(n,w){c(n,e,w),c(n,t,w),b(s,n,w),v=!0},p:I,i(n){v||(M(s.$$.fragment,n),v=!0)},o(n){T(s.$$.fragment,n),v=!1},d(n){n&&(i(e),i(t)),y(s,n)}}}function ys($){let e,m;return e=new He({props:{code:"JTIzJTIwVG8lMjB0cmFpbiUyMGElMjBtb2RlbCUyMG9uJTIwJTYwbnVtX2xhYmVscyU2MCUyMGNsYXNzZXMlMkMlMjB5b3UlMjBjYW4lMjBwYXNzJTIwJTYwbnVtX2xhYmVscyUzRG51bV9sYWJlbHMlNjAlMjB0byUyMCU2MC5mcm9tX3ByZXRyYWluZWQoLi4uKSU2MCUwQW51bV9sYWJlbHMlMjAlM0QlMjBsZW4obW9kZWwuY29uZmlnLmlkMmxhYmVsKSUwQW1vZGVsJTIwJTNEJTIwVEZYTE1Sb2JlcnRhRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyY2FyZGlmZm5scCUyRnR3aXR0ZXItcm9iZXJ0YS1iYXNlLWVtb3Rpb24lMjIlMkMlMjBudW1fbGFiZWxzJTNEbnVtX2xhYmVscyklMEElMEFsYWJlbHMlMjAlM0QlMjB0Zi5jb25zdGFudCgxKSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcyUwQXJvdW5kKGZsb2F0KGxvc3MpJTJDJTIwMik=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLMRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`,wrap:!1}}),{c(){g(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,s){b(e,t,s),m=!0},p:I,i(t){m||(M(e.$$.fragment,t),m=!0)},o(t){T(e.$$.fragment,t),m=!1},d(t){y(e,t)}}}function ks($){let e,m="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,s,v="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",n,w,D=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,U,C,E=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,z,J,A=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=l("p"),e.innerHTML=m,t=a(),s=l("ul"),s.innerHTML=v,n=a(),w=l("p"),w.innerHTML=D,U=a(),C=l("ul"),C.innerHTML=E,z=a(),J=l("p"),J.innerHTML=A},l(f){e=d(f,"P",{"data-svelte-h":!0}),u(e)!=="svelte-1ajbfxg"&&(e.innerHTML=m),t=r(f),s=d(f,"UL",{"data-svelte-h":!0}),u(s)!=="svelte-qm1t26"&&(s.innerHTML=v),n=r(f),w=d(f,"P",{"data-svelte-h":!0}),u(w)!=="svelte-1v9qsc5"&&(w.innerHTML=D),U=r(f),C=d(f,"UL",{"data-svelte-h":!0}),u(C)!=="svelte-15scerc"&&(C.innerHTML=E),z=r(f),J=d(f,"P",{"data-svelte-h":!0}),u(J)!=="svelte-1an3odd"&&(J.innerHTML=A)},m(f,X){c(f,e,X),c(f,t,X),c(f,s,X),c(f,n,X),c(f,w,X),c(f,U,X),c(f,C,X),c(f,z,X),c(f,J,X)},p:I,d(f){f&&(i(e),i(t),i(s),i(n),i(w),i(U),i(C),i(z),i(J))}}}function ws($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(t){e=d(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(t,s){c(t,e,s)},p:I,d(t){t&&i(e)}}}function vs($){let e,m="Example:",t,s,v;return s=new He({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURlhMTVJvYmVydGFGb3JNdWx0aXBsZUNob2ljZSUwQWltcG9ydCUyMHRlbnNvcmZsb3clMjBhcyUyMHRmJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyRmFjZWJvb2tBSSUyRnhsbS1yb2JlcnRhLWJhc2UlMjIpJTBBbW9kZWwlMjAlM0QlMjBURlhMTVJvYmVydGFGb3JNdWx0aXBsZUNob2ljZS5mcm9tX3ByZXRyYWluZWQoJTIyRmFjZWJvb2tBSSUyRnhsbS1yb2JlcnRhLWJhc2UlMjIpJTBBJTBBcHJvbXB0JTIwJTNEJTIwJTIySW4lMjBJdGFseSUyQyUyMHBpenphJTIwc2VydmVkJTIwaW4lMjBmb3JtYWwlMjBzZXR0aW5ncyUyQyUyMHN1Y2glMjBhcyUyMGF0JTIwYSUyMHJlc3RhdXJhbnQlMkMlMjBpcyUyMHByZXNlbnRlZCUyMHVuc2xpY2VkLiUyMiUwQWNob2ljZTAlMjAlM0QlMjAlMjJJdCUyMGlzJTIwZWF0ZW4lMjB3aXRoJTIwYSUyMGZvcmslMjBhbmQlMjBhJTIwa25pZmUuJTIyJTBBY2hvaWNlMSUyMCUzRCUyMCUyMkl0JTIwaXMlMjBlYXRlbiUyMHdoaWxlJTIwaGVsZCUyMGluJTIwdGhlJTIwaGFuZC4lMjIlMEElMEFlbmNvZGluZyUyMCUzRCUyMHRva2VuaXplciglNUJwcm9tcHQlMkMlMjBwcm9tcHQlNUQlMkMlMjAlNUJjaG9pY2UwJTJDJTIwY2hvaWNlMSU1RCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIydGYlMjIlMkMlMjBwYWRkaW5nJTNEVHJ1ZSklMEFpbnB1dHMlMjAlM0QlMjAlN0JrJTNBJTIwdGYuZXhwYW5kX2RpbXModiUyQyUyMDApJTIwZm9yJTIwayUyQyUyMHYlMjBpbiUyMGVuY29kaW5nLml0ZW1zKCklN0QlMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoaW5wdXRzKSUyMCUyMCUyMyUyMGJhdGNoJTIwc2l6ZSUyMGlzJTIwMSUwQSUwQSUyMyUyMHRoZSUyMGxpbmVhciUyMGNsYXNzaWZpZXIlMjBzdGlsbCUyMG5lZWRzJTIwdG8lMjBiZSUyMHRyYWluZWQlMEFsb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFXLMRobertaForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;FacebookAI/xlm-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLMRobertaForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;FacebookAI/xlm-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,t=a(),g(s.$$.fragment)},l(n){e=d(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),t=r(n),_(s.$$.fragment,n)},m(n,w){c(n,e,w),c(n,t,w),b(s,n,w),v=!0},p:I,i(n){v||(M(s.$$.fragment,n),v=!0)},o(n){T(s.$$.fragment,n),v=!1},d(n){n&&(i(e),i(t)),y(s,n)}}}function xs($){let e,m="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,s,v="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",n,w,D=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,U,C,E=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,z,J,A=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=l("p"),e.innerHTML=m,t=a(),s=l("ul"),s.innerHTML=v,n=a(),w=l("p"),w.innerHTML=D,U=a(),C=l("ul"),C.innerHTML=E,z=a(),J=l("p"),J.innerHTML=A},l(f){e=d(f,"P",{"data-svelte-h":!0}),u(e)!=="svelte-1ajbfxg"&&(e.innerHTML=m),t=r(f),s=d(f,"UL",{"data-svelte-h":!0}),u(s)!=="svelte-qm1t26"&&(s.innerHTML=v),n=r(f),w=d(f,"P",{"data-svelte-h":!0}),u(w)!=="svelte-1v9qsc5"&&(w.innerHTML=D),U=r(f),C=d(f,"UL",{"data-svelte-h":!0}),u(C)!=="svelte-15scerc"&&(C.innerHTML=E),z=r(f),J=d(f,"P",{"data-svelte-h":!0}),u(J)!=="svelte-1an3odd"&&(J.innerHTML=A)},m(f,X){c(f,e,X),c(f,t,X),c(f,s,X),c(f,n,X),c(f,w,X),c(f,U,X),c(f,C,X),c(f,z,X),c(f,J,X)},p:I,d(f){f&&(i(e),i(t),i(s),i(n),i(w),i(U),i(C),i(z),i(J))}}}function $s($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(t){e=d(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(t,s){c(t,e,s)},p:I,d(t){t&&i(e)}}}function Fs($){let e,m="Example:",t,s,v;return s=new He({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURlhMTVJvYmVydGFGb3JUb2tlbkNsYXNzaWZpY2F0aW9uJTBBaW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJ5ZHNoaWVoJTJGcm9iZXJ0YS1sYXJnZS1uZXItZW5nbGlzaCUyMiklMEFtb2RlbCUyMCUzRCUyMFRGWExNUm9iZXJ0YUZvclRva2VuQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMnlkc2hpZWglMkZyb2JlcnRhLWxhcmdlLW5lci1lbmdsaXNoJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMEElMjAlMjAlMjAlMjAlMjJIdWdnaW5nRmFjZSUyMGlzJTIwYSUyMGNvbXBhbnklMjBiYXNlZCUyMGluJTIwUGFyaXMlMjBhbmQlMjBOZXclMjBZb3JrJTIyJTJDJTIwYWRkX3NwZWNpYWxfdG9rZW5zJTNERmFsc2UlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyJTBBKSUwQSUwQWxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEFwcmVkaWN0ZWRfdG9rZW5fY2xhc3NfaWRzJTIwJTNEJTIwdGYubWF0aC5hcmdtYXgobG9naXRzJTJDJTIwYXhpcyUzRC0xKSUwQSUwQSUyMyUyME5vdGUlMjB0aGF0JTIwdG9rZW5zJTIwYXJlJTIwY2xhc3NpZmllZCUyMHJhdGhlciUyMHRoZW4lMjBpbnB1dCUyMHdvcmRzJTIwd2hpY2glMjBtZWFucyUyMHRoYXQlMEElMjMlMjB0aGVyZSUyMG1pZ2h0JTIwYmUlMjBtb3JlJTIwcHJlZGljdGVkJTIwdG9rZW4lMjBjbGFzc2VzJTIwdGhhbiUyMHdvcmRzLiUwQSUyMyUyME11bHRpcGxlJTIwdG9rZW4lMjBjbGFzc2VzJTIwbWlnaHQlMjBhY2NvdW50JTIwZm9yJTIwdGhlJTIwc2FtZSUyMHdvcmQlMEFwcmVkaWN0ZWRfdG9rZW5zX2NsYXNzZXMlMjAlM0QlMjAlNUJtb2RlbC5jb25maWcuaWQybGFiZWwlNUJ0JTVEJTIwZm9yJTIwdCUyMGluJTIwcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyU1QjAlNUQubnVtcHkoKS50b2xpc3QoKSU1RCUwQXByZWRpY3RlZF90b2tlbnNfY2xhc3Nlcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFXLMRobertaForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;ydshieh/roberta-large-ner-english&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLMRobertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;ydshieh/roberta-large-ner-english&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;HuggingFace is a company based in Paris and New York&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that tokens are classified rather then input words which means that</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># there might be more predicted token classes than words.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Multiple token classes might account for the same word</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [model.config.id2label[t] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>].numpy().tolist()]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,t=a(),g(s.$$.fragment)},l(n){e=d(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),t=r(n),_(s.$$.fragment,n)},m(n,w){c(n,e,w),c(n,t,w),b(s,n,w),v=!0},p:I,i(n){v||(M(s.$$.fragment,n),v=!0)},o(n){T(s.$$.fragment,n),v=!1},d(n){n&&(i(e),i(t)),y(s,n)}}}function Ls($){let e,m;return e=new He({props:{code:"bGFiZWxzJTIwJTNEJTIwcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyUwQWxvc3MlMjAlM0QlMjB0Zi5tYXRoLnJlZHVjZV9tZWFuKG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKS5sb3NzKSUwQXJvdW5kKGZsb2F0KGxvc3MpJTJDJTIwMik=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`,wrap:!1}}),{c(){g(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,s){b(e,t,s),m=!0},p:I,i(t){m||(M(e.$$.fragment,t),m=!0)},o(t){T(e.$$.fragment,t),m=!1},d(t){y(e,t)}}}function Rs($){let e,m="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",t,s,v="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",n,w,D=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,U,C,E=`<li>a single Tensor with <code>input_ids</code> only and nothing else: <code>model(input_ids)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([input_ids, attention_mask])</code> or <code>model([input_ids, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;input_ids&quot;: input_ids, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,z,J,A=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=l("p"),e.innerHTML=m,t=a(),s=l("ul"),s.innerHTML=v,n=a(),w=l("p"),w.innerHTML=D,U=a(),C=l("ul"),C.innerHTML=E,z=a(),J=l("p"),J.innerHTML=A},l(f){e=d(f,"P",{"data-svelte-h":!0}),u(e)!=="svelte-1ajbfxg"&&(e.innerHTML=m),t=r(f),s=d(f,"UL",{"data-svelte-h":!0}),u(s)!=="svelte-qm1t26"&&(s.innerHTML=v),n=r(f),w=d(f,"P",{"data-svelte-h":!0}),u(w)!=="svelte-1v9qsc5"&&(w.innerHTML=D),U=r(f),C=d(f,"UL",{"data-svelte-h":!0}),u(C)!=="svelte-15scerc"&&(C.innerHTML=E),z=r(f),J=d(f,"P",{"data-svelte-h":!0}),u(J)!=="svelte-1an3odd"&&(J.innerHTML=A)},m(f,X){c(f,e,X),c(f,t,X),c(f,s,X),c(f,n,X),c(f,w,X),c(f,U,X),c(f,C,X),c(f,z,X),c(f,J,X)},p:I,d(f){f&&(i(e),i(t),i(s),i(n),i(w),i(U),i(C),i(z),i(J))}}}function Xs($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(t){e=d(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(t,s){c(t,e,s)},p:I,d(t){t&&i(e)}}}function js($){let e,m="Example:",t,s,v;return s=new He({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBURlhMTVJvYmVydGFGb3JRdWVzdGlvbkFuc3dlcmluZyUwQWltcG9ydCUyMHRlbnNvcmZsb3clMjBhcyUyMHRmJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyeWRzaGllaCUyRnJvYmVydGEtYmFzZS1zcXVhZDIlMjIpJTBBbW9kZWwlMjAlM0QlMjBURlhMTVJvYmVydGFGb3JRdWVzdGlvbkFuc3dlcmluZy5mcm9tX3ByZXRyYWluZWQoJTIyeWRzaGllaCUyRnJvYmVydGEtYmFzZS1zcXVhZDIlMjIpJTBBJTBBcXVlc3Rpb24lMkMlMjB0ZXh0JTIwJTNEJTIwJTIyV2hvJTIwd2FzJTIwSmltJTIwSGVuc29uJTNGJTIyJTJDJTIwJTIySmltJTIwSGVuc29uJTIwd2FzJTIwYSUyMG5pY2UlMjBwdXBwZXQlMjIlMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIocXVlc3Rpb24lMkMlMjB0ZXh0JTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBYW5zd2VyX3N0YXJ0X2luZGV4JTIwJTNEJTIwaW50KHRmLm1hdGguYXJnbWF4KG91dHB1dHMuc3RhcnRfbG9naXRzJTJDJTIwYXhpcyUzRC0xKSU1QjAlNUQpJTBBYW5zd2VyX2VuZF9pbmRleCUyMCUzRCUyMGludCh0Zi5tYXRoLmFyZ21heChvdXRwdXRzLmVuZF9sb2dpdHMlMkMlMjBheGlzJTNELTEpJTVCMCU1RCklMEElMEFwcmVkaWN0X2Fuc3dlcl90b2tlbnMlMjAlM0QlMjBpbnB1dHMuaW5wdXRfaWRzJTVCMCUyQyUyMGFuc3dlcl9zdGFydF9pbmRleCUyMCUzQSUyMGFuc3dlcl9lbmRfaW5kZXglMjAlMkIlMjAxJTVEJTBBdG9rZW5pemVyLmRlY29kZShwcmVkaWN0X2Fuc3dlcl90b2tlbnMp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFXLMRobertaForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;ydshieh/roberta-base-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLMRobertaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;ydshieh/roberta-base-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27; puppet&#x27;</span>`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,t=a(),g(s.$$.fragment)},l(n){e=d(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),t=r(n),_(s.$$.fragment,n)},m(n,w){c(n,e,w),c(n,t,w),b(s,n,w),v=!0},p:I,i(n){v||(M(s.$$.fragment,n),v=!0)},o(n){T(s.$$.fragment,n),v=!1},d(n){n&&(i(e),i(t)),y(s,n)}}}function Cs($){let e,m;return e=new He({props:{code:"JTIzJTIwdGFyZ2V0JTIwaXMlMjAlMjJuaWNlJTIwcHVwcGV0JTIyJTBBdGFyZ2V0X3N0YXJ0X2luZGV4JTIwJTNEJTIwdGYuY29uc3RhbnQoJTVCMTQlNUQpJTBBdGFyZ2V0X2VuZF9pbmRleCUyMCUzRCUyMHRmLmNvbnN0YW50KCU1QjE1JTVEKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMHN0YXJ0X3Bvc2l0aW9ucyUzRHRhcmdldF9zdGFydF9pbmRleCUyQyUyMGVuZF9wb3NpdGlvbnMlM0R0YXJnZXRfZW5kX2luZGV4KSUwQWxvc3MlMjAlM0QlMjB0Zi5tYXRoLnJlZHVjZV9tZWFuKG91dHB1dHMubG9zcyklMEFyb3VuZChmbG9hdChsb3NzKSUyQyUyMDIp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = tf.constant([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.86</span>`,wrap:!1}}),{c(){g(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,s){b(e,t,s),m=!0},p:I,i(t){m||(M(e.$$.fragment,t),m=!0)},o(t){T(e.$$.fragment,t),m=!1},d(t){y(e,t)}}}function Js($){let e,m,t,s,v,n,w="The bare XLM RoBERTa Model transformer outputting raw hidden-states without any specific head on top.",D,U,C=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,E,z,J=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,A,f,X,Ye,he,ko,hn,ce='The <a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.TFXLMRobertaModel">TFXLMRobertaModel</a> forward method, overrides the <code>__call__</code> special method.',zn,qt,re,Ke,Kt,Ve,En,S,Se,dt,ct,oe="XLM-RoBERTa Model with a <code>language modeling</code> head on top for CLM fine-tuning.",je,en,ee=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Un,fn,et=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,ao,tt,tn,pt,mt,Ft,nn,_o='The <a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.TFXLMRobertaForCausalLM">TFXLMRobertaForCausalLM</a> forward method, overrides the <code>__call__</code> special method.',ye,Ce,An,P,Fn,on,ke,fe,we,sn,ut,nt="XLM RoBERTa Model with a <code>language modeling</code> head on top.",Je,ze,gn=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,te,Lt,Ln=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,an,_n,bn,ie,Rn,rn,le,Zt='The <a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.TFXLMRobertaForMaskedLM">TFXLMRobertaForMaskedLM</a> forward method, overrides the <code>__call__</code> special method.',Pn,Q,In,ln,Ee,Xn,Nt,se,ht,pe,H,Mn,Rt,ft=`XLM RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`,me,Ue,jn=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Bt,Cn,ne=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,Gt,Tn,ge,Y,gt,Ht,yn,bo='The <a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.TFXLMRobertaForSequenceClassification">TFXLMRobertaForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',_t,Xt,kn,bt,ot,Oe,Mt,jt,Ie,B,ve,Ct,dn,Qn=`XLM Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`,Wn,Jt,qn=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,We,wn,zt=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,Ae,Z,Tt,qe,st,Mo,yt,cn='The <a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.TFXLMRobertaForMultipleChoice">TFXLMRobertaForMultipleChoice</a> forward method, overrides the <code>__call__</code> special method.',Jn,Vt,_e,at,xe,be,ro,ae,rt,To,St,Ze=`XLM RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`,kt,Et,vn=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,yo,$e,Fe=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,Yn,ue,On,p,L,V,G,At='The <a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.TFXLMRobertaForTokenClassification">TFXLMRobertaForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',wt,Pt,Pe,K,Zn,it,io,lo,so,Ne,co,po,Dn,Ro=`XLM RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,pn,Be,mo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,uo,Kn,Xo=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,eo,Qt,to,Le,k,R,vt,O='The <a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.TFXLMRobertaForQuestionAnswering">TFXLMRobertaForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',xt,Qe,Ut,De,Yt,Me,xn;return e=new Xe({props:{title:"TFXLMRobertaModel",local:"transformers.TFXLMRobertaModel",headingTag:"h2"}}),s=new N({props:{name:"class transformers.TFXLMRobertaModel",anchor:"transformers.TFXLMRobertaModel",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L984"}}),f=new Te({props:{$$slots:{default:[ls]},$$scope:{ctx:$}}}),he=new N({props:{name:"call",anchor:"transformers.TFXLMRobertaModel.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_hidden_states",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"past_key_values",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"use_cache",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMRobertaModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.TFXLMRobertaModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.TFXLMRobertaModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>. <a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMRobertaModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMRobertaModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMRobertaModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMRobertaModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMRobertaModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMRobertaModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMRobertaModel.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFXLMRobertaModel.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFXLMRobertaModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFXLMRobertaModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L994",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig"
>XLMRobertaConfig</a>) and inputs.</p>
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
`}}),qt=new Te({props:{$$slots:{default:[ds]},$$scope:{ctx:$}}}),Ke=new Ge({props:{anchor:"transformers.TFXLMRobertaModel.call.example",$$slots:{default:[cs]},$$scope:{ctx:$}}}),Ve=new Xe({props:{title:"TFXLMRobertaForCausalLM",local:"transformers.TFXLMRobertaForCausalLM",headingTag:"h2"}}),Se=new N({props:{name:"class transformers.TFXLMRobertaForCausalLM",anchor:"transformers.TFXLMRobertaForCausalLM",parameters:[{name:"config",val:": XLMRobertaConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L1217"}}),tt=new Te({props:{$$slots:{default:[ps]},$$scope:{ctx:$}}}),mt=new N({props:{name:"call",anchor:"transformers.TFXLMRobertaForCausalLM.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_hidden_states",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"past_key_values",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"use_cache",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForCausalLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMRobertaForCausalLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.TFXLMRobertaForCausalLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.TFXLMRobertaForCausalLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>. <a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMRobertaForCausalLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMRobertaForCausalLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMRobertaForCausalLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMRobertaForCausalLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMRobertaForCausalLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMRobertaForCausalLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMRobertaForCausalLM.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFXLMRobertaForCausalLM.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFXLMRobertaForCausalLM.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFXLMRobertaForCausalLM.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFXLMRobertaForCausalLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L1255",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig"
>XLMRobertaConfig</a>) and inputs.</p>
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
`}}),Ce=new Te({props:{$$slots:{default:[ms]},$$scope:{ctx:$}}}),P=new Ge({props:{anchor:"transformers.TFXLMRobertaForCausalLM.call.example",$$slots:{default:[us]},$$scope:{ctx:$}}}),on=new Xe({props:{title:"TFXLMRobertaForMaskedLM",local:"transformers.TFXLMRobertaForMaskedLM",headingTag:"h2"}}),we=new N({props:{name:"class transformers.TFXLMRobertaForMaskedLM",anchor:"transformers.TFXLMRobertaForMaskedLM",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L1127"}}),_n=new Te({props:{$$slots:{default:[hs]},$$scope:{ctx:$}}}),Rn=new N({props:{name:"call",anchor:"transformers.TFXLMRobertaForMaskedLM.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>. <a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L1146",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig"
>XLMRobertaConfig</a>) and inputs.</p>
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
`}}),Q=new Te({props:{$$slots:{default:[fs]},$$scope:{ctx:$}}}),ln=new Ge({props:{anchor:"transformers.TFXLMRobertaForMaskedLM.call.example",$$slots:{default:[gs]},$$scope:{ctx:$}}}),Xn=new Ge({props:{anchor:"transformers.TFXLMRobertaForMaskedLM.call.example-2",$$slots:{default:[_s]},$$scope:{ctx:$}}}),se=new Xe({props:{title:"TFXLMRobertaForSequenceClassification",local:"transformers.TFXLMRobertaForSequenceClassification",headingTag:"h2"}}),H=new N({props:{name:"class transformers.TFXLMRobertaForSequenceClassification",anchor:"transformers.TFXLMRobertaForSequenceClassification",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L1396"}}),Tn=new Te({props:{$$slots:{default:[bs]},$$scope:{ctx:$}}}),gt=new N({props:{name:"call",anchor:"transformers.TFXLMRobertaForSequenceClassification.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>. <a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L1415",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig"
>XLMRobertaConfig</a>) and inputs.</p>
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
`}}),Xt=new Te({props:{$$slots:{default:[Ms]},$$scope:{ctx:$}}}),bt=new Ge({props:{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.example",$$slots:{default:[Ts]},$$scope:{ctx:$}}}),Oe=new Ge({props:{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.example-2",$$slots:{default:[ys]},$$scope:{ctx:$}}}),jt=new Xe({props:{title:"TFXLMRobertaForMultipleChoice",local:"transformers.TFXLMRobertaForMultipleChoice",headingTag:"h2"}}),ve=new N({props:{name:"class transformers.TFXLMRobertaForMultipleChoice",anchor:"transformers.TFXLMRobertaForMultipleChoice",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L1484"}}),Z=new Te({props:{$$slots:{default:[ks]},$$scope:{ctx:$}}}),st=new N({props:{name:"call",anchor:"transformers.TFXLMRobertaForMultipleChoice.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>. <a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L1507",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig"
>XLMRobertaConfig</a>) and inputs.</p>
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
`}}),Vt=new Te({props:{$$slots:{default:[ws]},$$scope:{ctx:$}}}),at=new Ge({props:{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.example",$$slots:{default:[vs]},$$scope:{ctx:$}}}),be=new Xe({props:{title:"TFXLMRobertaForTokenClassification",local:"transformers.TFXLMRobertaForTokenClassification",headingTag:"h2"}}),rt=new N({props:{name:"class transformers.TFXLMRobertaForTokenClassification",anchor:"transformers.TFXLMRobertaForTokenClassification",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L1589"}}),ue=new Te({props:{$$slots:{default:[xs]},$$scope:{ctx:$}}}),L=new N({props:{name:"call",anchor:"transformers.TFXLMRobertaForTokenClassification.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>. <a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L1616",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig"
>XLMRobertaConfig</a>) and inputs.</p>
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
`}}),Pt=new Te({props:{$$slots:{default:[$s]},$$scope:{ctx:$}}}),K=new Ge({props:{anchor:"transformers.TFXLMRobertaForTokenClassification.call.example",$$slots:{default:[Fs]},$$scope:{ctx:$}}}),it=new Ge({props:{anchor:"transformers.TFXLMRobertaForTokenClassification.call.example-2",$$slots:{default:[Ls]},$$scope:{ctx:$}}}),lo=new Xe({props:{title:"TFXLMRobertaForQuestionAnswering",local:"transformers.TFXLMRobertaForQuestionAnswering",headingTag:"h2"}}),co=new N({props:{name:"class transformers.TFXLMRobertaForQuestionAnswering",anchor:"transformers.TFXLMRobertaForQuestionAnswering",parameters:[{name:"config",val:""},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L1685"}}),Qt=new Te({props:{$$slots:{default:[Rs]},$$scope:{ctx:$}}}),k=new N({props:{name:"call",anchor:"transformers.TFXLMRobertaForQuestionAnswering.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"token_type_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"position_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"inputs_embeds",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"start_positions",val:": np.ndarray | tf.Tensor | None = None"},{name:"end_positions",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>. <a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L1707",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig"
>XLMRobertaConfig</a>) and inputs.</p>
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
`}}),Qe=new Te({props:{$$slots:{default:[Xs]},$$scope:{ctx:$}}}),De=new Ge({props:{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.example",$$slots:{default:[js]},$$scope:{ctx:$}}}),Me=new Ge({props:{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.example-2",$$slots:{default:[Cs]},$$scope:{ctx:$}}}),{c(){g(e.$$.fragment),m=a(),t=l("div"),g(s.$$.fragment),v=a(),n=l("p"),n.textContent=w,D=a(),U=l("p"),U.innerHTML=C,E=a(),z=l("p"),z.innerHTML=J,A=a(),g(f.$$.fragment),X=a(),Ye=l("div"),g(he.$$.fragment),ko=a(),hn=l("p"),hn.innerHTML=ce,zn=a(),g(qt.$$.fragment),re=a(),g(Ke.$$.fragment),Kt=a(),g(Ve.$$.fragment),En=a(),S=l("div"),g(Se.$$.fragment),dt=a(),ct=l("p"),ct.innerHTML=oe,je=a(),en=l("p"),en.innerHTML=ee,Un=a(),fn=l("p"),fn.innerHTML=et,ao=a(),g(tt.$$.fragment),tn=a(),pt=l("div"),g(mt.$$.fragment),Ft=a(),nn=l("p"),nn.innerHTML=_o,ye=a(),g(Ce.$$.fragment),An=a(),g(P.$$.fragment),Fn=a(),g(on.$$.fragment),ke=a(),fe=l("div"),g(we.$$.fragment),sn=a(),ut=l("p"),ut.innerHTML=nt,Je=a(),ze=l("p"),ze.innerHTML=gn,te=a(),Lt=l("p"),Lt.innerHTML=Ln,an=a(),g(_n.$$.fragment),bn=a(),ie=l("div"),g(Rn.$$.fragment),rn=a(),le=l("p"),le.innerHTML=Zt,Pn=a(),g(Q.$$.fragment),In=a(),g(ln.$$.fragment),Ee=a(),g(Xn.$$.fragment),Nt=a(),g(se.$$.fragment),ht=a(),pe=l("div"),g(H.$$.fragment),Mn=a(),Rt=l("p"),Rt.textContent=ft,me=a(),Ue=l("p"),Ue.innerHTML=jn,Bt=a(),Cn=l("p"),Cn.innerHTML=ne,Gt=a(),g(Tn.$$.fragment),ge=a(),Y=l("div"),g(gt.$$.fragment),Ht=a(),yn=l("p"),yn.innerHTML=bo,_t=a(),g(Xt.$$.fragment),kn=a(),g(bt.$$.fragment),ot=a(),g(Oe.$$.fragment),Mt=a(),g(jt.$$.fragment),Ie=a(),B=l("div"),g(ve.$$.fragment),Ct=a(),dn=l("p"),dn.textContent=Qn,Wn=a(),Jt=l("p"),Jt.innerHTML=qn,We=a(),wn=l("p"),wn.innerHTML=zt,Ae=a(),g(Z.$$.fragment),Tt=a(),qe=l("div"),g(st.$$.fragment),Mo=a(),yt=l("p"),yt.innerHTML=cn,Jn=a(),g(Vt.$$.fragment),_e=a(),g(at.$$.fragment),xe=a(),g(be.$$.fragment),ro=a(),ae=l("div"),g(rt.$$.fragment),To=a(),St=l("p"),St.textContent=Ze,kt=a(),Et=l("p"),Et.innerHTML=vn,yo=a(),$e=l("p"),$e.innerHTML=Fe,Yn=a(),g(ue.$$.fragment),On=a(),p=l("div"),g(L.$$.fragment),V=a(),G=l("p"),G.innerHTML=At,wt=a(),g(Pt.$$.fragment),Pe=a(),g(K.$$.fragment),Zn=a(),g(it.$$.fragment),io=a(),g(lo.$$.fragment),so=a(),Ne=l("div"),g(co.$$.fragment),po=a(),Dn=l("p"),Dn.innerHTML=Ro,pn=a(),Be=l("p"),Be.innerHTML=mo,uo=a(),Kn=l("p"),Kn.innerHTML=Xo,eo=a(),g(Qt.$$.fragment),to=a(),Le=l("div"),g(k.$$.fragment),R=a(),vt=l("p"),vt.innerHTML=O,xt=a(),g(Qe.$$.fragment),Ut=a(),g(De.$$.fragment),Yt=a(),g(Me.$$.fragment),this.h()},l(h){_(e.$$.fragment,h),m=r(h),t=d(h,"DIV",{class:!0});var F=q(t);_(s.$$.fragment,F),v=r(F),n=d(F,"P",{"data-svelte-h":!0}),u(n)!=="svelte-iz46qb"&&(n.textContent=w),D=r(F),U=d(F,"P",{"data-svelte-h":!0}),u(U)!=="svelte-1qaxm70"&&(U.innerHTML=C),E=r(F),z=d(F,"P",{"data-svelte-h":!0}),u(z)!=="svelte-1be7e3c"&&(z.innerHTML=J),A=r(F),_(f.$$.fragment,F),X=r(F),Ye=d(F,"DIV",{class:!0});var Re=q(Ye);_(he.$$.fragment,Re),ko=r(Re),hn=d(Re,"P",{"data-svelte-h":!0}),u(hn)!=="svelte-1cqzd3y"&&(hn.innerHTML=ce),zn=r(Re),_(qt.$$.fragment,Re),re=r(Re),_(Ke.$$.fragment,Re),Re.forEach(i),F.forEach(i),Kt=r(h),_(Ve.$$.fragment,h),En=r(h),S=d(h,"DIV",{class:!0});var de=q(S);_(Se.$$.fragment,de),dt=r(de),ct=d(de,"P",{"data-svelte-h":!0}),u(ct)!=="svelte-15apchw"&&(ct.innerHTML=oe),je=r(de),en=d(de,"P",{"data-svelte-h":!0}),u(en)!=="svelte-1qaxm70"&&(en.innerHTML=ee),Un=r(de),fn=d(de,"P",{"data-svelte-h":!0}),u(fn)!=="svelte-1be7e3c"&&(fn.innerHTML=et),ao=r(de),_(tt.$$.fragment,de),tn=r(de),pt=d(de,"DIV",{class:!0});var Ot=q(pt);_(mt.$$.fragment,Ot),Ft=r(Ot),nn=d(Ot,"P",{"data-svelte-h":!0}),u(nn)!=="svelte-1p63g62"&&(nn.innerHTML=_o),ye=r(Ot),_(Ce.$$.fragment,Ot),An=r(Ot),_(P.$$.fragment,Ot),Ot.forEach(i),de.forEach(i),Fn=r(h),_(on.$$.fragment,h),ke=r(h),fe=d(h,"DIV",{class:!0});var Dt=q(fe);_(we.$$.fragment,Dt),sn=r(Dt),ut=d(Dt,"P",{"data-svelte-h":!0}),u(ut)!=="svelte-cpwdey"&&(ut.innerHTML=nt),Je=r(Dt),ze=d(Dt,"P",{"data-svelte-h":!0}),u(ze)!=="svelte-1qaxm70"&&(ze.innerHTML=gn),te=r(Dt),Lt=d(Dt,"P",{"data-svelte-h":!0}),u(Lt)!=="svelte-1be7e3c"&&(Lt.innerHTML=Ln),an=r(Dt),_(_n.$$.fragment,Dt),bn=r(Dt),ie=d(Dt,"DIV",{class:!0});var Nn=q(ie);_(Rn.$$.fragment,Nn),rn=r(Nn),le=d(Nn,"P",{"data-svelte-h":!0}),u(le)!=="svelte-188j6a"&&(le.innerHTML=Zt),Pn=r(Nn),_(Q.$$.fragment,Nn),In=r(Nn),_(ln.$$.fragment,Nn),Ee=r(Nn),_(Xn.$$.fragment,Nn),Nn.forEach(i),Dt.forEach(i),Nt=r(h),_(se.$$.fragment,h),ht=r(h),pe=d(h,"DIV",{class:!0});var It=q(pe);_(H.$$.fragment,It),Mn=r(It),Rt=d(It,"P",{"data-svelte-h":!0}),u(Rt)!=="svelte-sh0p1a"&&(Rt.textContent=ft),me=r(It),Ue=d(It,"P",{"data-svelte-h":!0}),u(Ue)!=="svelte-1qaxm70"&&(Ue.innerHTML=jn),Bt=r(It),Cn=d(It,"P",{"data-svelte-h":!0}),u(Cn)!=="svelte-1be7e3c"&&(Cn.innerHTML=ne),Gt=r(It),_(Tn.$$.fragment,It),ge=r(It),Y=d(It,"DIV",{class:!0});var no=q(Y);_(gt.$$.fragment,no),Ht=r(no),yn=d(no,"P",{"data-svelte-h":!0}),u(yn)!=="svelte-1c834xy"&&(yn.innerHTML=bo),_t=r(no),_(Xt.$$.fragment,no),kn=r(no),_(bt.$$.fragment,no),ot=r(no),_(Oe.$$.fragment,no),no.forEach(i),It.forEach(i),Mt=r(h),_(jt.$$.fragment,h),Ie=r(h),B=d(h,"DIV",{class:!0});var $n=q(B);_(ve.$$.fragment,$n),Ct=r($n),dn=d($n,"P",{"data-svelte-h":!0}),u(dn)!=="svelte-xq071m"&&(dn.textContent=Qn),Wn=r($n),Jt=d($n,"P",{"data-svelte-h":!0}),u(Jt)!=="svelte-1qaxm70"&&(Jt.innerHTML=qn),We=r($n),wn=d($n,"P",{"data-svelte-h":!0}),u(wn)!=="svelte-1be7e3c"&&(wn.innerHTML=zt),Ae=r($n),_(Z.$$.fragment,$n),Tt=r($n),qe=d($n,"DIV",{class:!0});var lt=q(qe);_(st.$$.fragment,lt),Mo=r(lt),yt=d(lt,"P",{"data-svelte-h":!0}),u(yt)!=="svelte-e2h2qa"&&(yt.innerHTML=cn),Jn=r(lt),_(Vt.$$.fragment,lt),_e=r(lt),_(at.$$.fragment,lt),lt.forEach(i),$n.forEach(i),xe=r(h),_(be.$$.fragment,h),ro=r(h),ae=d(h,"DIV",{class:!0});var $t=q(ae);_(rt.$$.fragment,$t),To=r($t),St=d($t,"P",{"data-svelte-h":!0}),u(St)!=="svelte-1opippv"&&(St.textContent=Ze),kt=r($t),Et=d($t,"P",{"data-svelte-h":!0}),u(Et)!=="svelte-1qaxm70"&&(Et.innerHTML=vn),yo=r($t),$e=d($t,"P",{"data-svelte-h":!0}),u($e)!=="svelte-1be7e3c"&&($e.innerHTML=Fe),Yn=r($t),_(ue.$$.fragment,$t),On=r($t),p=d($t,"DIV",{class:!0});var Bn=q(p);_(L.$$.fragment,Bn),V=r(Bn),G=d(Bn,"P",{"data-svelte-h":!0}),u(G)!=="svelte-1e45lry"&&(G.innerHTML=At),wt=r(Bn),_(Pt.$$.fragment,Bn),Pe=r(Bn),_(K.$$.fragment,Bn),Zn=r(Bn),_(it.$$.fragment,Bn),Bn.forEach(i),$t.forEach(i),io=r(h),_(lo.$$.fragment,h),so=r(h),Ne=d(h,"DIV",{class:!0});var Wt=q(Ne);_(co.$$.fragment,Wt),po=r(Wt),Dn=d(Wt,"P",{"data-svelte-h":!0}),u(Dn)!=="svelte-179t071"&&(Dn.innerHTML=Ro),pn=r(Wt),Be=d(Wt,"P",{"data-svelte-h":!0}),u(Be)!=="svelte-1qaxm70"&&(Be.innerHTML=mo),uo=r(Wt),Kn=d(Wt,"P",{"data-svelte-h":!0}),u(Kn)!=="svelte-1be7e3c"&&(Kn.innerHTML=Xo),eo=r(Wt),_(Qt.$$.fragment,Wt),to=r(Wt),Le=d(Wt,"DIV",{class:!0});var oo=q(Le);_(k.$$.fragment,oo),R=r(oo),vt=d(oo,"P",{"data-svelte-h":!0}),u(vt)!=="svelte-1bugmm4"&&(vt.innerHTML=O),xt=r(oo),_(Qe.$$.fragment,oo),Ut=r(oo),_(De.$$.fragment,oo),Yt=r(oo),_(Me.$$.fragment,oo),oo.forEach(i),Wt.forEach(i),this.h()},h(){W(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(p,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(h,F){b(e,h,F),c(h,m,F),c(h,t,F),b(s,t,null),o(t,v),o(t,n),o(t,D),o(t,U),o(t,E),o(t,z),o(t,A),b(f,t,null),o(t,X),o(t,Ye),b(he,Ye,null),o(Ye,ko),o(Ye,hn),o(Ye,zn),b(qt,Ye,null),o(Ye,re),b(Ke,Ye,null),c(h,Kt,F),b(Ve,h,F),c(h,En,F),c(h,S,F),b(Se,S,null),o(S,dt),o(S,ct),o(S,je),o(S,en),o(S,Un),o(S,fn),o(S,ao),b(tt,S,null),o(S,tn),o(S,pt),b(mt,pt,null),o(pt,Ft),o(pt,nn),o(pt,ye),b(Ce,pt,null),o(pt,An),b(P,pt,null),c(h,Fn,F),b(on,h,F),c(h,ke,F),c(h,fe,F),b(we,fe,null),o(fe,sn),o(fe,ut),o(fe,Je),o(fe,ze),o(fe,te),o(fe,Lt),o(fe,an),b(_n,fe,null),o(fe,bn),o(fe,ie),b(Rn,ie,null),o(ie,rn),o(ie,le),o(ie,Pn),b(Q,ie,null),o(ie,In),b(ln,ie,null),o(ie,Ee),b(Xn,ie,null),c(h,Nt,F),b(se,h,F),c(h,ht,F),c(h,pe,F),b(H,pe,null),o(pe,Mn),o(pe,Rt),o(pe,me),o(pe,Ue),o(pe,Bt),o(pe,Cn),o(pe,Gt),b(Tn,pe,null),o(pe,ge),o(pe,Y),b(gt,Y,null),o(Y,Ht),o(Y,yn),o(Y,_t),b(Xt,Y,null),o(Y,kn),b(bt,Y,null),o(Y,ot),b(Oe,Y,null),c(h,Mt,F),b(jt,h,F),c(h,Ie,F),c(h,B,F),b(ve,B,null),o(B,Ct),o(B,dn),o(B,Wn),o(B,Jt),o(B,We),o(B,wn),o(B,Ae),b(Z,B,null),o(B,Tt),o(B,qe),b(st,qe,null),o(qe,Mo),o(qe,yt),o(qe,Jn),b(Vt,qe,null),o(qe,_e),b(at,qe,null),c(h,xe,F),b(be,h,F),c(h,ro,F),c(h,ae,F),b(rt,ae,null),o(ae,To),o(ae,St),o(ae,kt),o(ae,Et),o(ae,yo),o(ae,$e),o(ae,Yn),b(ue,ae,null),o(ae,On),o(ae,p),b(L,p,null),o(p,V),o(p,G),o(p,wt),b(Pt,p,null),o(p,Pe),b(K,p,null),o(p,Zn),b(it,p,null),c(h,io,F),b(lo,h,F),c(h,so,F),c(h,Ne,F),b(co,Ne,null),o(Ne,po),o(Ne,Dn),o(Ne,pn),o(Ne,Be),o(Ne,uo),o(Ne,Kn),o(Ne,eo),b(Qt,Ne,null),o(Ne,to),o(Ne,Le),b(k,Le,null),o(Le,R),o(Le,vt),o(Le,xt),b(Qe,Le,null),o(Le,Ut),b(De,Le,null),o(Le,Yt),b(Me,Le,null),xn=!0},p(h,F){const Re={};F&2&&(Re.$$scope={dirty:F,ctx:h}),f.$set(Re);const de={};F&2&&(de.$$scope={dirty:F,ctx:h}),qt.$set(de);const Ot={};F&2&&(Ot.$$scope={dirty:F,ctx:h}),Ke.$set(Ot);const Dt={};F&2&&(Dt.$$scope={dirty:F,ctx:h}),tt.$set(Dt);const Nn={};F&2&&(Nn.$$scope={dirty:F,ctx:h}),Ce.$set(Nn);const It={};F&2&&(It.$$scope={dirty:F,ctx:h}),P.$set(It);const no={};F&2&&(no.$$scope={dirty:F,ctx:h}),_n.$set(no);const $n={};F&2&&($n.$$scope={dirty:F,ctx:h}),Q.$set($n);const lt={};F&2&&(lt.$$scope={dirty:F,ctx:h}),ln.$set(lt);const $t={};F&2&&($t.$$scope={dirty:F,ctx:h}),Xn.$set($t);const Bn={};F&2&&(Bn.$$scope={dirty:F,ctx:h}),Tn.$set(Bn);const Wt={};F&2&&(Wt.$$scope={dirty:F,ctx:h}),Xt.$set(Wt);const oo={};F&2&&(oo.$$scope={dirty:F,ctx:h}),bt.$set(oo);const Co={};F&2&&(Co.$$scope={dirty:F,ctx:h}),Oe.$set(Co);const wo={};F&2&&(wo.$$scope={dirty:F,ctx:h}),Z.$set(wo);const Jo={};F&2&&(Jo.$$scope={dirty:F,ctx:h}),Vt.$set(Jo);const vo={};F&2&&(vo.$$scope={dirty:F,ctx:h}),at.$set(vo);const jo={};F&2&&(jo.$$scope={dirty:F,ctx:h}),ue.$set(jo);const x={};F&2&&(x.$$scope={dirty:F,ctx:h}),Pt.$set(x);const j={};F&2&&(j.$$scope={dirty:F,ctx:h}),K.$set(j);const ho={};F&2&&(ho.$$scope={dirty:F,ctx:h}),it.$set(ho);const mn={};F&2&&(mn.$$scope={dirty:F,ctx:h}),Qt.$set(mn);const fo={};F&2&&(fo.$$scope={dirty:F,ctx:h}),Qe.$set(fo);const un={};F&2&&(un.$$scope={dirty:F,ctx:h}),De.$set(un);const go={};F&2&&(go.$$scope={dirty:F,ctx:h}),Me.$set(go)},i(h){xn||(M(e.$$.fragment,h),M(s.$$.fragment,h),M(f.$$.fragment,h),M(he.$$.fragment,h),M(qt.$$.fragment,h),M(Ke.$$.fragment,h),M(Ve.$$.fragment,h),M(Se.$$.fragment,h),M(tt.$$.fragment,h),M(mt.$$.fragment,h),M(Ce.$$.fragment,h),M(P.$$.fragment,h),M(on.$$.fragment,h),M(we.$$.fragment,h),M(_n.$$.fragment,h),M(Rn.$$.fragment,h),M(Q.$$.fragment,h),M(ln.$$.fragment,h),M(Xn.$$.fragment,h),M(se.$$.fragment,h),M(H.$$.fragment,h),M(Tn.$$.fragment,h),M(gt.$$.fragment,h),M(Xt.$$.fragment,h),M(bt.$$.fragment,h),M(Oe.$$.fragment,h),M(jt.$$.fragment,h),M(ve.$$.fragment,h),M(Z.$$.fragment,h),M(st.$$.fragment,h),M(Vt.$$.fragment,h),M(at.$$.fragment,h),M(be.$$.fragment,h),M(rt.$$.fragment,h),M(ue.$$.fragment,h),M(L.$$.fragment,h),M(Pt.$$.fragment,h),M(K.$$.fragment,h),M(it.$$.fragment,h),M(lo.$$.fragment,h),M(co.$$.fragment,h),M(Qt.$$.fragment,h),M(k.$$.fragment,h),M(Qe.$$.fragment,h),M(De.$$.fragment,h),M(Me.$$.fragment,h),xn=!0)},o(h){T(e.$$.fragment,h),T(s.$$.fragment,h),T(f.$$.fragment,h),T(he.$$.fragment,h),T(qt.$$.fragment,h),T(Ke.$$.fragment,h),T(Ve.$$.fragment,h),T(Se.$$.fragment,h),T(tt.$$.fragment,h),T(mt.$$.fragment,h),T(Ce.$$.fragment,h),T(P.$$.fragment,h),T(on.$$.fragment,h),T(we.$$.fragment,h),T(_n.$$.fragment,h),T(Rn.$$.fragment,h),T(Q.$$.fragment,h),T(ln.$$.fragment,h),T(Xn.$$.fragment,h),T(se.$$.fragment,h),T(H.$$.fragment,h),T(Tn.$$.fragment,h),T(gt.$$.fragment,h),T(Xt.$$.fragment,h),T(bt.$$.fragment,h),T(Oe.$$.fragment,h),T(jt.$$.fragment,h),T(ve.$$.fragment,h),T(Z.$$.fragment,h),T(st.$$.fragment,h),T(Vt.$$.fragment,h),T(at.$$.fragment,h),T(be.$$.fragment,h),T(rt.$$.fragment,h),T(ue.$$.fragment,h),T(L.$$.fragment,h),T(Pt.$$.fragment,h),T(K.$$.fragment,h),T(it.$$.fragment,h),T(lo.$$.fragment,h),T(co.$$.fragment,h),T(Qt.$$.fragment,h),T(k.$$.fragment,h),T(Qe.$$.fragment,h),T(De.$$.fragment,h),T(Me.$$.fragment,h),xn=!1},d(h){h&&(i(m),i(t),i(Kt),i(En),i(S),i(Fn),i(ke),i(fe),i(Nt),i(ht),i(pe),i(Mt),i(Ie),i(B),i(xe),i(ro),i(ae),i(io),i(so),i(Ne)),y(e,h),y(s),y(f),y(he),y(qt),y(Ke),y(Ve,h),y(Se),y(tt),y(mt),y(Ce),y(P),y(on,h),y(we),y(_n),y(Rn),y(Q),y(ln),y(Xn),y(se,h),y(H),y(Tn),y(gt),y(Xt),y(bt),y(Oe),y(jt,h),y(ve),y(Z),y(st),y(Vt),y(at),y(be,h),y(rt),y(ue),y(L),y(Pt),y(K),y(it),y(lo,h),y(co),y(Qt),y(k),y(Qe),y(De),y(Me)}}}function zs($){let e,m;return e=new Uo({props:{$$slots:{default:[Js]},$$scope:{ctx:$}}}),{c(){g(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,s){b(e,t,s),m=!0},p(t,s){const v={};s&2&&(v.$$scope={dirty:s,ctx:t}),e.$set(v)},i(t){m||(M(e.$$.fragment,t),m=!0)},o(t){T(e.$$.fragment,t),m=!1},d(t){y(e,t)}}}function Us($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(t){e=d(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(t,s){c(t,e,s)},p:I,d(t){t&&i(e)}}}function Is($){let e,m="Example:",t,s,v;return s=new He({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4WExNUm9iZXJ0YU1vZGVsJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyRmFjZWJvb2tBSSUyRnhsbS1yb2JlcnRhLWJhc2UlMjIpJTBBbW9kZWwlMjAlM0QlMjBGbGF4WExNUm9iZXJ0YU1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJGYWNlYm9va0FJJTJGeGxtLXJvYmVydGEtYmFzZSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIyamF4JTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEFsYXN0X2hpZGRlbl9zdGF0ZXMlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRl",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxXLMRobertaModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;FacebookAI/xlm-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxXLMRobertaModel.from_pretrained(<span class="hljs-string">&quot;FacebookAI/xlm-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,t=a(),g(s.$$.fragment)},l(n){e=d(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),t=r(n),_(s.$$.fragment,n)},m(n,w){c(n,e,w),c(n,t,w),b(s,n,w),v=!0},p:I,i(n){v||(M(s.$$.fragment,n),v=!0)},o(n){T(s.$$.fragment,n),v=!1},d(n){n&&(i(e),i(t)),y(s,n)}}}function Ws($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(t){e=d(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(t,s){c(t,e,s)},p:I,d(t){t&&i(e)}}}function qs($){let e,m="Example:",t,s,v;return s=new He({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4WExNUm9iZXJ0YUZvckNhdXNhbExNJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyRmFjZWJvb2tBSSUyRnhsbS1yb2JlcnRhLWJhc2UlMjIpJTBBbW9kZWwlMjAlM0QlMjBGbGF4WExNUm9iZXJ0YUZvckNhdXNhbExNLmZyb21fcHJldHJhaW5lZCglMjJGYWNlYm9va0FJJTJGeGxtLXJvYmVydGEtYmFzZSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIybnAlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQSUyMyUyMHJldHJpZXZlJTIwbG9ndHMlMjBmb3IlMjBuZXh0JTIwdG9rZW4lMEFuZXh0X3Rva2VuX2xvZ2l0cyUyMCUzRCUyMG91dHB1dHMubG9naXRzJTVCJTNBJTJDJTIwLTElNUQ=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxXLMRobertaForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;FacebookAI/xlm-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxXLMRobertaForCausalLM.from_pretrained(<span class="hljs-string">&quot;FacebookAI/xlm-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve logts for next token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,t=a(),g(s.$$.fragment)},l(n){e=d(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),t=r(n),_(s.$$.fragment,n)},m(n,w){c(n,e,w),c(n,t,w),b(s,n,w),v=!0},p:I,i(n){v||(M(s.$$.fragment,n),v=!0)},o(n){T(s.$$.fragment,n),v=!1},d(n){n&&(i(e),i(t)),y(s,n)}}}function Zs($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(t){e=d(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(t,s){c(t,e,s)},p:I,d(t){t&&i(e)}}}function Ns($){let e,m="Example:",t,s,v;return s=new He({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4WExNUm9iZXJ0YUZvck1hc2tlZExNJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyRmFjZWJvb2tBSSUyRnhsbS1yb2JlcnRhLWJhc2UlMjIpJTBBbW9kZWwlMjAlM0QlMjBGbGF4WExNUm9iZXJ0YUZvck1hc2tlZExNLmZyb21fcHJldHJhaW5lZCglMjJGYWNlYm9va0FJJTJGeGxtLXJvYmVydGEtYmFzZSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIyVGhlJTIwY2FwaXRhbCUyMG9mJTIwRnJhbmNlJTIwaXMlMjAlNUJNQVNLJTVELiUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIyamF4JTIyKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEFsb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxXLMRobertaForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;FacebookAI/xlm-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxXLMRobertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;FacebookAI/xlm-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,t=a(),g(s.$$.fragment)},l(n){e=d(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),t=r(n),_(s.$$.fragment,n)},m(n,w){c(n,e,w),c(n,t,w),b(s,n,w),v=!0},p:I,i(n){v||(M(s.$$.fragment,n),v=!0)},o(n){T(s.$$.fragment,n),v=!1},d(n){n&&(i(e),i(t)),y(s,n)}}}function Bs($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(t){e=d(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(t,s){c(t,e,s)},p:I,d(t){t&&i(e)}}}function Gs($){let e,m="Example:",t,s,v;return s=new He({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4WExNUm9iZXJ0YUZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJGYWNlYm9va0FJJTJGeGxtLXJvYmVydGEtYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyMEZsYXhYTE1Sb2JlcnRhRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyRmFjZWJvb2tBSSUyRnhsbS1yb2JlcnRhLWJhc2UlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMmpheCUyMiklMEElMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxXLMRobertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;FacebookAI/xlm-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxXLMRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;FacebookAI/xlm-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,t=a(),g(s.$$.fragment)},l(n){e=d(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),t=r(n),_(s.$$.fragment,n)},m(n,w){c(n,e,w),c(n,t,w),b(s,n,w),v=!0},p:I,i(n){v||(M(s.$$.fragment,n),v=!0)},o(n){T(s.$$.fragment,n),v=!1},d(n){n&&(i(e),i(t)),y(s,n)}}}function Hs($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(t){e=d(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(t,s){c(t,e,s)},p:I,d(t){t&&i(e)}}}function Vs($){let e,m="Example:",t,s,v;return s=new He({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4WExNUm9iZXJ0YUZvck11bHRpcGxlQ2hvaWNlJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyRmFjZWJvb2tBSSUyRnhsbS1yb2JlcnRhLWJhc2UlMjIpJTBBbW9kZWwlMjAlM0QlMjBGbGF4WExNUm9iZXJ0YUZvck11bHRpcGxlQ2hvaWNlLmZyb21fcHJldHJhaW5lZCglMjJGYWNlYm9va0FJJTJGeGxtLXJvYmVydGEtYmFzZSUyMiklMEElMEFwcm9tcHQlMjAlM0QlMjAlMjJJbiUyMEl0YWx5JTJDJTIwcGl6emElMjBzZXJ2ZWQlMjBpbiUyMGZvcm1hbCUyMHNldHRpbmdzJTJDJTIwc3VjaCUyMGFzJTIwYXQlMjBhJTIwcmVzdGF1cmFudCUyQyUyMGlzJTIwcHJlc2VudGVkJTIwdW5zbGljZWQuJTIyJTBBY2hvaWNlMCUyMCUzRCUyMCUyMkl0JTIwaXMlMjBlYXRlbiUyMHdpdGglMjBhJTIwZm9yayUyMGFuZCUyMGElMjBrbmlmZS4lMjIlMEFjaG9pY2UxJTIwJTNEJTIwJTIySXQlMjBpcyUyMGVhdGVuJTIwd2hpbGUlMjBoZWxkJTIwaW4lMjB0aGUlMjBoYW5kLiUyMiUwQSUwQWVuY29kaW5nJTIwJTNEJTIwdG9rZW5pemVyKCU1QnByb21wdCUyQyUyMHByb21wdCU1RCUyQyUyMCU1QmNob2ljZTAlMkMlMjBjaG9pY2UxJTVEJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJqYXglMjIlMkMlMjBwYWRkaW5nJTNEVHJ1ZSklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKiolN0JrJTNBJTIwdiU1Qk5vbmUlMkMlMjAlM0ElNUQlMjBmb3IlMjBrJTJDJTIwdiUyMGluJTIwZW5jb2RpbmcuaXRlbXMoKSU3RCklMEElMEFsb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxXLMRobertaForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;FacebookAI/xlm-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxXLMRobertaForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;FacebookAI/xlm-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v[<span class="hljs-literal">None</span>, :] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()})

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,t=a(),g(s.$$.fragment)},l(n){e=d(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),t=r(n),_(s.$$.fragment,n)},m(n,w){c(n,e,w),c(n,t,w),b(s,n,w),v=!0},p:I,i(n){v||(M(s.$$.fragment,n),v=!0)},o(n){T(s.$$.fragment,n),v=!1},d(n){n&&(i(e),i(t)),y(s,n)}}}function Ss($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(t){e=d(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(t,s){c(t,e,s)},p:I,d(t){t&&i(e)}}}function Es($){let e,m="Example:",t,s,v;return s=new He({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4WExNUm9iZXJ0YUZvclRva2VuQ2xhc3NpZmljYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJGYWNlYm9va0FJJTJGeGxtLXJvYmVydGEtYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyMEZsYXhYTE1Sb2JlcnRhRm9yVG9rZW5DbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyRmFjZWJvb2tBSSUyRnhsbS1yb2JlcnRhLWJhc2UlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMmpheCUyMiklMEElMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxXLMRobertaForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;FacebookAI/xlm-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxXLMRobertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;FacebookAI/xlm-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,t=a(),g(s.$$.fragment)},l(n){e=d(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),t=r(n),_(s.$$.fragment,n)},m(n,w){c(n,e,w),c(n,t,w),b(s,n,w),v=!0},p:I,i(n){v||(M(s.$$.fragment,n),v=!0)},o(n){T(s.$$.fragment,n),v=!1},d(n){n&&(i(e),i(t)),y(s,n)}}}function As($){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=l("p"),e.innerHTML=m},l(t){e=d(t,"P",{"data-svelte-h":!0}),u(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(t,s){c(t,e,s)},p:I,d(t){t&&i(e)}}}function Ps($){let e,m="Example:",t,s,v;return s=new He({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBGbGF4WExNUm9iZXJ0YUZvclF1ZXN0aW9uQW5zd2VyaW5nJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyRmFjZWJvb2tBSSUyRnhsbS1yb2JlcnRhLWJhc2UlMjIpJTBBbW9kZWwlMjAlM0QlMjBGbGF4WExNUm9iZXJ0YUZvclF1ZXN0aW9uQW5zd2VyaW5nLmZyb21fcHJldHJhaW5lZCglMjJGYWNlYm9va0FJJTJGeGxtLXJvYmVydGEtYmFzZSUyMiklMEElMEFxdWVzdGlvbiUyQyUyMHRleHQlMjAlM0QlMjAlMjJXaG8lMjB3YXMlMjBKaW0lMjBIZW5zb24lM0YlMjIlMkMlMjAlMjJKaW0lMjBIZW5zb24lMjB3YXMlMjBhJTIwbmljZSUyMHB1cHBldCUyMiUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplcihxdWVzdGlvbiUyQyUyMHRleHQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMmpheCUyMiklMEElMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBc3RhcnRfc2NvcmVzJTIwJTNEJTIwb3V0cHV0cy5zdGFydF9sb2dpdHMlMEFlbmRfc2NvcmVzJTIwJTNEJTIwb3V0cHV0cy5lbmRfbG9naXRz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, FlaxXLMRobertaForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;FacebookAI/xlm-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxXLMRobertaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;FacebookAI/xlm-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`,wrap:!1}}),{c(){e=l("p"),e.textContent=m,t=a(),g(s.$$.fragment)},l(n){e=d(n,"P",{"data-svelte-h":!0}),u(e)!=="svelte-11lpom8"&&(e.textContent=m),t=r(n),_(s.$$.fragment,n)},m(n,w){c(n,e,w),c(n,t,w),b(s,n,w),v=!0},p:I,i(n){v||(M(s.$$.fragment,n),v=!0)},o(n){T(s.$$.fragment,n),v=!1},d(n){n&&(i(e),i(t)),y(s,n)}}}function Qs($){let e,m,t,s,v,n,w="The bare XLM RoBERTa Model transformer outputting raw hidden-states without any specific head on top.",D,U,C=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`,E,z,J=`This model is also a
<a href="https://flax.readthedocs.io/en/latest/api_reference/flax.linen/module.html" rel="nofollow">flax.linen.Module</a> subclass. Use it as
a regular Flax linen Module and refer to the Flax documentation for all matter related to general usage and
behavior.`,A,f,X="Finally, this model supports inherent JAX features such as:",Ye,he,ko='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',hn,ce,zn,qt,re,Ke="The <code>FlaxXLMRobertaPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",Kt,Ve,En,S,Se,dt,ct,oe,je,en,ee,Un=`XLM Roberta Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`,fn,et,ao=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`,tt,tn,pt=`This model is also a
<a href="https://flax.readthedocs.io/en/latest/api_reference/flax.linen/module.html" rel="nofollow">flax.linen.Module</a> subclass. Use it as
a regular Flax linen Module and refer to the Flax documentation for all matter related to general usage and
behavior.`,mt,Ft,nn="Finally, this model supports inherent JAX features such as:",_o,ye,Ce='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',An,P,Fn,on,ke,fe="The <code>FlaxXLMRobertaPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",we,sn,ut,nt,Je,ze,gn,te,Lt,Ln,an,_n="XLM RoBERTa Model with a <code>language modeling</code> head on top.",bn,ie,Rn=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`,rn,le,Zt=`This model is also a
<a href="https://flax.readthedocs.io/en/latest/api_reference/flax.linen/module.html" rel="nofollow">flax.linen.Module</a> subclass. Use it as
a regular Flax linen Module and refer to the Flax documentation for all matter related to general usage and
behavior.`,Pn,Q,In="Finally, this model supports inherent JAX features such as:",ln,Ee,Xn='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',Nt,se,ht,pe,H,Mn="The <code>FlaxXLMRobertaPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",Rt,ft,me,Ue,jn,Bt,Cn,ne,Gt,Tn,ge,Y=`XLM Roberta Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`,gt,Ht,yn=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`,bo,_t,Xt=`This model is also a
<a href="https://flax.readthedocs.io/en/latest/api_reference/flax.linen/module.html" rel="nofollow">flax.linen.Module</a> subclass. Use it as
a regular Flax linen Module and refer to the Flax documentation for all matter related to general usage and
behavior.`,kn,bt,ot="Finally, this model supports inherent JAX features such as:",Oe,Mt,jt='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',Ie,B,ve,Ct,dn,Qn="The <code>FlaxXLMRobertaPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",Wn,Jt,qn,We,wn,zt,Ae,Z,Tt,qe,st,Mo=`XLM Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`,yt,cn,Jn=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`,Vt,_e,at=`This model is also a
<a href="https://flax.readthedocs.io/en/latest/api_reference/flax.linen/module.html" rel="nofollow">flax.linen.Module</a> subclass. Use it as
a regular Flax linen Module and refer to the Flax documentation for all matter related to general usage and
behavior.`,xe,be,ro="Finally, this model supports inherent JAX features such as:",ae,rt,To='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',St,Ze,kt,Et,vn,yo="The <code>FlaxXLMRobertaPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",$e,Fe,Yn,ue,On,p,L,V,G,At,wt,Pt=`XLM Roberta Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`,Pe,K,Zn=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`,it,io,lo=`This model is also a
<a href="https://flax.readthedocs.io/en/latest/api_reference/flax.linen/module.html" rel="nofollow">flax.linen.Module</a> subclass. Use it as
a regular Flax linen Module and refer to the Flax documentation for all matter related to general usage and
behavior.`,so,Ne,co="Finally, this model supports inherent JAX features such as:",po,Dn,Ro='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',pn,Be,mo,uo,Kn,Xo="The <code>FlaxXLMRobertaPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",eo,Qt,to,Le,k,R,vt,O,xt,Qe,Ut,De=`XLM Roberta Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,Yt,Me,xn=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`,h,F,Re=`This model is also a
<a href="https://flax.readthedocs.io/en/latest/api_reference/flax.linen/module.html" rel="nofollow">flax.linen.Module</a> subclass. Use it as
a regular Flax linen Module and refer to the Flax documentation for all matter related to general usage and
behavior.`,de,Ot,Dt="Finally, this model supports inherent JAX features such as:",Nn,It,no='<li><a href="https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit" rel="nofollow">Just-In-Time (JIT) compilation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation" rel="nofollow">Automatic Differentiation</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap" rel="nofollow">Vectorization</a></li> <li><a href="https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap" rel="nofollow">Parallelization</a></li>',$n,lt,$t,Bn,Wt,oo="The <code>FlaxXLMRobertaPreTrainedModel</code> forward method, overrides the <code>__call__</code> special method.",Co,wo,Jo,vo,jo;return e=new Xe({props:{title:"FlaxXLMRobertaModel",local:"transformers.FlaxXLMRobertaModel",headingTag:"h2"}}),s=new N({props:{name:"class transformers.FlaxXLMRobertaModel",anchor:"transformers.FlaxXLMRobertaModel",parameters:[{name:"config",val:": XLMRobertaConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L1000"}}),zn=new N({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxXLMRobertaModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxXLMRobertaModel.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxXLMRobertaModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxXLMRobertaModel.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxXLMRobertaModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L830",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig"
>XLMRobertaConfig</a>) and inputs.</p>
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
`}}),Ve=new Te({props:{$$slots:{default:[Us]},$$scope:{ctx:$}}}),S=new Ge({props:{anchor:"transformers.FlaxXLMRobertaModel.__call__.example",$$slots:{default:[Is]},$$scope:{ctx:$}}}),dt=new Xe({props:{title:"FlaxXLMRobertaForCausalLM",local:"transformers.FlaxXLMRobertaForCausalLM",headingTag:"h2"}}),je=new N({props:{name:"class transformers.FlaxXLMRobertaForCausalLM",anchor:"transformers.FlaxXLMRobertaForCausalLM",parameters:[{name:"config",val:": XLMRobertaConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L1462"}}),Fn=new N({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxXLMRobertaForCausalLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxXLMRobertaForCausalLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxXLMRobertaForCausalLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxXLMRobertaForCausalLM.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxXLMRobertaForCausalLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L830",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig"
>XLMRobertaConfig</a>) and inputs.</p>
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
`}}),sn=new Te({props:{$$slots:{default:[Ws]},$$scope:{ctx:$}}}),nt=new Ge({props:{anchor:"transformers.FlaxXLMRobertaForCausalLM.__call__.example",$$slots:{default:[qs]},$$scope:{ctx:$}}}),ze=new Xe({props:{title:"FlaxXLMRobertaForMaskedLM",local:"transformers.FlaxXLMRobertaForMaskedLM",headingTag:"h2"}}),Lt=new N({props:{name:"class transformers.FlaxXLMRobertaForMaskedLM",anchor:"transformers.FlaxXLMRobertaForMaskedLM",parameters:[{name:"config",val:": XLMRobertaConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L1070"}}),ht=new N({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxXLMRobertaForMaskedLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxXLMRobertaForMaskedLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxXLMRobertaForMaskedLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxXLMRobertaForMaskedLM.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxXLMRobertaForMaskedLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L830",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig"
>XLMRobertaConfig</a>) and inputs.</p>
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
`}}),ft=new Te({props:{$$slots:{default:[Zs]},$$scope:{ctx:$}}}),Ue=new Ge({props:{anchor:"transformers.FlaxXLMRobertaForMaskedLM.__call__.example",$$slots:{default:[Ns]},$$scope:{ctx:$}}}),Bt=new Xe({props:{title:"FlaxXLMRobertaForSequenceClassification",local:"transformers.FlaxXLMRobertaForSequenceClassification",headingTag:"h2"}}),Gt=new N({props:{name:"class transformers.FlaxXLMRobertaForSequenceClassification",anchor:"transformers.FlaxXLMRobertaForSequenceClassification",parameters:[{name:"config",val:": XLMRobertaConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L1137"}}),ve=new N({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxXLMRobertaForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxXLMRobertaForSequenceClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxXLMRobertaForSequenceClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxXLMRobertaForSequenceClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxXLMRobertaForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L830",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig"
>XLMRobertaConfig</a>) and inputs.</p>
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
`}}),Jt=new Te({props:{$$slots:{default:[Bs]},$$scope:{ctx:$}}}),We=new Ge({props:{anchor:"transformers.FlaxXLMRobertaForSequenceClassification.__call__.example",$$slots:{default:[Gs]},$$scope:{ctx:$}}}),zt=new Xe({props:{title:"FlaxXLMRobertaForMultipleChoice",local:"transformers.FlaxXLMRobertaForMultipleChoice",headingTag:"h2"}}),Tt=new N({props:{name:"class transformers.FlaxXLMRobertaForMultipleChoice",anchor:"transformers.FlaxXLMRobertaForMultipleChoice",parameters:[{name:"config",val:": XLMRobertaConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L1218"}}),kt=new N({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxXLMRobertaForMultipleChoice.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxXLMRobertaForMultipleChoice.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxXLMRobertaForMultipleChoice.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxXLMRobertaForMultipleChoice.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxXLMRobertaForMultipleChoice.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L830",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig"
>XLMRobertaConfig</a>) and inputs.</p>
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
`}}),Fe=new Te({props:{$$slots:{default:[Hs]},$$scope:{ctx:$}}}),ue=new Ge({props:{anchor:"transformers.FlaxXLMRobertaForMultipleChoice.__call__.example",$$slots:{default:[Vs]},$$scope:{ctx:$}}}),p=new Xe({props:{title:"FlaxXLMRobertaForTokenClassification",local:"transformers.FlaxXLMRobertaForTokenClassification",headingTag:"h2"}}),G=new N({props:{name:"class transformers.FlaxXLMRobertaForTokenClassification",anchor:"transformers.FlaxXLMRobertaForTokenClassification",parameters:[{name:"config",val:": XLMRobertaConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L1300"}}),mo=new N({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxXLMRobertaForTokenClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxXLMRobertaForTokenClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxXLMRobertaForTokenClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxXLMRobertaForTokenClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxXLMRobertaForTokenClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L830",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig"
>XLMRobertaConfig</a>) and inputs.</p>
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
`}}),Qt=new Te({props:{$$slots:{default:[Ss]},$$scope:{ctx:$}}}),Le=new Ge({props:{anchor:"transformers.FlaxXLMRobertaForTokenClassification.__call__.example",$$slots:{default:[Es]},$$scope:{ctx:$}}}),R=new Xe({props:{title:"FlaxXLMRobertaForQuestionAnswering",local:"transformers.FlaxXLMRobertaForQuestionAnswering",headingTag:"h2"}}),xt=new N({props:{name:"class transformers.FlaxXLMRobertaForQuestionAnswering",anchor:"transformers.FlaxXLMRobertaForQuestionAnswering",parameters:[{name:"config",val:": XLMRobertaConfig"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L1377"}}),$t=new N({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L830",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig"
>XLMRobertaConfig</a>) and inputs.</p>
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
`}}),wo=new Te({props:{$$slots:{default:[As]},$$scope:{ctx:$}}}),vo=new Ge({props:{anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.__call__.example",$$slots:{default:[Ps]},$$scope:{ctx:$}}}),{c(){g(e.$$.fragment),m=a(),t=l("div"),g(s.$$.fragment),v=a(),n=l("p"),n.textContent=w,D=a(),U=l("p"),U.innerHTML=C,E=a(),z=l("p"),z.innerHTML=J,A=a(),f=l("p"),f.textContent=X,Ye=a(),he=l("ul"),he.innerHTML=ko,hn=a(),ce=l("div"),g(zn.$$.fragment),qt=a(),re=l("p"),re.innerHTML=Ke,Kt=a(),g(Ve.$$.fragment),En=a(),g(S.$$.fragment),Se=a(),g(dt.$$.fragment),ct=a(),oe=l("div"),g(je.$$.fragment),en=a(),ee=l("p"),ee.textContent=Un,fn=a(),et=l("p"),et.innerHTML=ao,tt=a(),tn=l("p"),tn.innerHTML=pt,mt=a(),Ft=l("p"),Ft.textContent=nn,_o=a(),ye=l("ul"),ye.innerHTML=Ce,An=a(),P=l("div"),g(Fn.$$.fragment),on=a(),ke=l("p"),ke.innerHTML=fe,we=a(),g(sn.$$.fragment),ut=a(),g(nt.$$.fragment),Je=a(),g(ze.$$.fragment),gn=a(),te=l("div"),g(Lt.$$.fragment),Ln=a(),an=l("p"),an.innerHTML=_n,bn=a(),ie=l("p"),ie.innerHTML=Rn,rn=a(),le=l("p"),le.innerHTML=Zt,Pn=a(),Q=l("p"),Q.textContent=In,ln=a(),Ee=l("ul"),Ee.innerHTML=Xn,Nt=a(),se=l("div"),g(ht.$$.fragment),pe=a(),H=l("p"),H.innerHTML=Mn,Rt=a(),g(ft.$$.fragment),me=a(),g(Ue.$$.fragment),jn=a(),g(Bt.$$.fragment),Cn=a(),ne=l("div"),g(Gt.$$.fragment),Tn=a(),ge=l("p"),ge.textContent=Y,gt=a(),Ht=l("p"),Ht.innerHTML=yn,bo=a(),_t=l("p"),_t.innerHTML=Xt,kn=a(),bt=l("p"),bt.textContent=ot,Oe=a(),Mt=l("ul"),Mt.innerHTML=jt,Ie=a(),B=l("div"),g(ve.$$.fragment),Ct=a(),dn=l("p"),dn.innerHTML=Qn,Wn=a(),g(Jt.$$.fragment),qn=a(),g(We.$$.fragment),wn=a(),g(zt.$$.fragment),Ae=a(),Z=l("div"),g(Tt.$$.fragment),qe=a(),st=l("p"),st.textContent=Mo,yt=a(),cn=l("p"),cn.innerHTML=Jn,Vt=a(),_e=l("p"),_e.innerHTML=at,xe=a(),be=l("p"),be.textContent=ro,ae=a(),rt=l("ul"),rt.innerHTML=To,St=a(),Ze=l("div"),g(kt.$$.fragment),Et=a(),vn=l("p"),vn.innerHTML=yo,$e=a(),g(Fe.$$.fragment),Yn=a(),g(ue.$$.fragment),On=a(),g(p.$$.fragment),L=a(),V=l("div"),g(G.$$.fragment),At=a(),wt=l("p"),wt.textContent=Pt,Pe=a(),K=l("p"),K.innerHTML=Zn,it=a(),io=l("p"),io.innerHTML=lo,so=a(),Ne=l("p"),Ne.textContent=co,po=a(),Dn=l("ul"),Dn.innerHTML=Ro,pn=a(),Be=l("div"),g(mo.$$.fragment),uo=a(),Kn=l("p"),Kn.innerHTML=Xo,eo=a(),g(Qt.$$.fragment),to=a(),g(Le.$$.fragment),k=a(),g(R.$$.fragment),vt=a(),O=l("div"),g(xt.$$.fragment),Qe=a(),Ut=l("p"),Ut.innerHTML=De,Yt=a(),Me=l("p"),Me.innerHTML=xn,h=a(),F=l("p"),F.innerHTML=Re,de=a(),Ot=l("p"),Ot.textContent=Dt,Nn=a(),It=l("ul"),It.innerHTML=no,$n=a(),lt=l("div"),g($t.$$.fragment),Bn=a(),Wt=l("p"),Wt.innerHTML=oo,Co=a(),g(wo.$$.fragment),Jo=a(),g(vo.$$.fragment),this.h()},l(x){_(e.$$.fragment,x),m=r(x),t=d(x,"DIV",{class:!0});var j=q(t);_(s.$$.fragment,j),v=r(j),n=d(j,"P",{"data-svelte-h":!0}),u(n)!=="svelte-iz46qb"&&(n.textContent=w),D=r(j),U=d(j,"P",{"data-svelte-h":!0}),u(U)!=="svelte-3daxed"&&(U.innerHTML=C),E=r(j),z=d(j,"P",{"data-svelte-h":!0}),u(z)!=="svelte-10nfsf3"&&(z.innerHTML=J),A=r(j),f=d(j,"P",{"data-svelte-h":!0}),u(f)!=="svelte-1pplc4a"&&(f.textContent=X),Ye=r(j),he=d(j,"UL",{"data-svelte-h":!0}),u(he)!=="svelte-1w7z84m"&&(he.innerHTML=ko),hn=r(j),ce=d(j,"DIV",{class:!0});var ho=q(ce);_(zn.$$.fragment,ho),qt=r(ho),re=d(ho,"P",{"data-svelte-h":!0}),u(re)!=="svelte-js3dq1"&&(re.innerHTML=Ke),Kt=r(ho),_(Ve.$$.fragment,ho),En=r(ho),_(S.$$.fragment,ho),ho.forEach(i),j.forEach(i),Se=r(x),_(dt.$$.fragment,x),ct=r(x),oe=d(x,"DIV",{class:!0});var mn=q(oe);_(je.$$.fragment,mn),en=r(mn),ee=d(mn,"P",{"data-svelte-h":!0}),u(ee)!=="svelte-th2k4q"&&(ee.textContent=Un),fn=r(mn),et=d(mn,"P",{"data-svelte-h":!0}),u(et)!=="svelte-3daxed"&&(et.innerHTML=ao),tt=r(mn),tn=d(mn,"P",{"data-svelte-h":!0}),u(tn)!=="svelte-10nfsf3"&&(tn.innerHTML=pt),mt=r(mn),Ft=d(mn,"P",{"data-svelte-h":!0}),u(Ft)!=="svelte-1pplc4a"&&(Ft.textContent=nn),_o=r(mn),ye=d(mn,"UL",{"data-svelte-h":!0}),u(ye)!=="svelte-1w7z84m"&&(ye.innerHTML=Ce),An=r(mn),P=d(mn,"DIV",{class:!0});var fo=q(P);_(Fn.$$.fragment,fo),on=r(fo),ke=d(fo,"P",{"data-svelte-h":!0}),u(ke)!=="svelte-js3dq1"&&(ke.innerHTML=fe),we=r(fo),_(sn.$$.fragment,fo),ut=r(fo),_(nt.$$.fragment,fo),fo.forEach(i),mn.forEach(i),Je=r(x),_(ze.$$.fragment,x),gn=r(x),te=d(x,"DIV",{class:!0});var un=q(te);_(Lt.$$.fragment,un),Ln=r(un),an=d(un,"P",{"data-svelte-h":!0}),u(an)!=="svelte-cpwdey"&&(an.innerHTML=_n),bn=r(un),ie=d(un,"P",{"data-svelte-h":!0}),u(ie)!=="svelte-3daxed"&&(ie.innerHTML=Rn),rn=r(un),le=d(un,"P",{"data-svelte-h":!0}),u(le)!=="svelte-10nfsf3"&&(le.innerHTML=Zt),Pn=r(un),Q=d(un,"P",{"data-svelte-h":!0}),u(Q)!=="svelte-1pplc4a"&&(Q.textContent=In),ln=r(un),Ee=d(un,"UL",{"data-svelte-h":!0}),u(Ee)!=="svelte-1w7z84m"&&(Ee.innerHTML=Xn),Nt=r(un),se=d(un,"DIV",{class:!0});var go=q(se);_(ht.$$.fragment,go),pe=r(go),H=d(go,"P",{"data-svelte-h":!0}),u(H)!=="svelte-js3dq1"&&(H.innerHTML=Mn),Rt=r(go),_(ft.$$.fragment,go),me=r(go),_(Ue.$$.fragment,go),go.forEach(i),un.forEach(i),jn=r(x),_(Bt.$$.fragment,x),Cn=r(x),ne=d(x,"DIV",{class:!0});var Gn=q(ne);_(Gt.$$.fragment,Gn),Tn=r(Gn),ge=d(Gn,"P",{"data-svelte-h":!0}),u(ge)!=="svelte-1g3g1ku"&&(ge.textContent=Y),gt=r(Gn),Ht=d(Gn,"P",{"data-svelte-h":!0}),u(Ht)!=="svelte-3daxed"&&(Ht.innerHTML=yn),bo=r(Gn),_t=d(Gn,"P",{"data-svelte-h":!0}),u(_t)!=="svelte-10nfsf3"&&(_t.innerHTML=Xt),kn=r(Gn),bt=d(Gn,"P",{"data-svelte-h":!0}),u(bt)!=="svelte-1pplc4a"&&(bt.textContent=ot),Oe=r(Gn),Mt=d(Gn,"UL",{"data-svelte-h":!0}),u(Mt)!=="svelte-1w7z84m"&&(Mt.innerHTML=jt),Ie=r(Gn),B=d(Gn,"DIV",{class:!0});var xo=q(B);_(ve.$$.fragment,xo),Ct=r(xo),dn=d(xo,"P",{"data-svelte-h":!0}),u(dn)!=="svelte-js3dq1"&&(dn.innerHTML=Qn),Wn=r(xo),_(Jt.$$.fragment,xo),qn=r(xo),_(We.$$.fragment,xo),xo.forEach(i),Gn.forEach(i),wn=r(x),_(zt.$$.fragment,x),Ae=r(x),Z=d(x,"DIV",{class:!0});var Hn=q(Z);_(Tt.$$.fragment,Hn),qe=r(Hn),st=d(Hn,"P",{"data-svelte-h":!0}),u(st)!=="svelte-xq071m"&&(st.textContent=Mo),yt=r(Hn),cn=d(Hn,"P",{"data-svelte-h":!0}),u(cn)!=="svelte-3daxed"&&(cn.innerHTML=Jn),Vt=r(Hn),_e=d(Hn,"P",{"data-svelte-h":!0}),u(_e)!=="svelte-10nfsf3"&&(_e.innerHTML=at),xe=r(Hn),be=d(Hn,"P",{"data-svelte-h":!0}),u(be)!=="svelte-1pplc4a"&&(be.textContent=ro),ae=r(Hn),rt=d(Hn,"UL",{"data-svelte-h":!0}),u(rt)!=="svelte-1w7z84m"&&(rt.innerHTML=To),St=r(Hn),Ze=d(Hn,"DIV",{class:!0});var $o=q(Ze);_(kt.$$.fragment,$o),Et=r($o),vn=d($o,"P",{"data-svelte-h":!0}),u(vn)!=="svelte-js3dq1"&&(vn.innerHTML=yo),$e=r($o),_(Fe.$$.fragment,$o),Yn=r($o),_(ue.$$.fragment,$o),$o.forEach(i),Hn.forEach(i),On=r(x),_(p.$$.fragment,x),L=r(x),V=d(x,"DIV",{class:!0});var Vn=q(V);_(G.$$.fragment,Vn),At=r(Vn),wt=d(Vn,"P",{"data-svelte-h":!0}),u(wt)!=="svelte-o5xng3"&&(wt.textContent=Pt),Pe=r(Vn),K=d(Vn,"P",{"data-svelte-h":!0}),u(K)!=="svelte-3daxed"&&(K.innerHTML=Zn),it=r(Vn),io=d(Vn,"P",{"data-svelte-h":!0}),u(io)!=="svelte-10nfsf3"&&(io.innerHTML=lo),so=r(Vn),Ne=d(Vn,"P",{"data-svelte-h":!0}),u(Ne)!=="svelte-1pplc4a"&&(Ne.textContent=co),po=r(Vn),Dn=d(Vn,"UL",{"data-svelte-h":!0}),u(Dn)!=="svelte-1w7z84m"&&(Dn.innerHTML=Ro),pn=r(Vn),Be=d(Vn,"DIV",{class:!0});var Fo=q(Be);_(mo.$$.fragment,Fo),uo=r(Fo),Kn=d(Fo,"P",{"data-svelte-h":!0}),u(Kn)!=="svelte-js3dq1"&&(Kn.innerHTML=Xo),eo=r(Fo),_(Qt.$$.fragment,Fo),to=r(Fo),_(Le.$$.fragment,Fo),Fo.forEach(i),Vn.forEach(i),k=r(x),_(R.$$.fragment,x),vt=r(x),O=d(x,"DIV",{class:!0});var Sn=q(O);_(xt.$$.fragment,Sn),Qe=r(Sn),Ut=d(Sn,"P",{"data-svelte-h":!0}),u(Ut)!=="svelte-1xzmurh"&&(Ut.innerHTML=De),Yt=r(Sn),Me=d(Sn,"P",{"data-svelte-h":!0}),u(Me)!=="svelte-3daxed"&&(Me.innerHTML=xn),h=r(Sn),F=d(Sn,"P",{"data-svelte-h":!0}),u(F)!=="svelte-10nfsf3"&&(F.innerHTML=Re),de=r(Sn),Ot=d(Sn,"P",{"data-svelte-h":!0}),u(Ot)!=="svelte-1pplc4a"&&(Ot.textContent=Dt),Nn=r(Sn),It=d(Sn,"UL",{"data-svelte-h":!0}),u(It)!=="svelte-1w7z84m"&&(It.innerHTML=no),$n=r(Sn),lt=d(Sn,"DIV",{class:!0});var Lo=q(lt);_($t.$$.fragment,Lo),Bn=r(Lo),Wt=d(Lo,"P",{"data-svelte-h":!0}),u(Wt)!=="svelte-js3dq1"&&(Wt.innerHTML=oo),Co=r(Lo),_(wo.$$.fragment,Lo),Jo=r(Lo),_(vo.$$.fragment,Lo),Lo.forEach(i),Sn.forEach(i),this.h()},h(){W(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(x,j){b(e,x,j),c(x,m,j),c(x,t,j),b(s,t,null),o(t,v),o(t,n),o(t,D),o(t,U),o(t,E),o(t,z),o(t,A),o(t,f),o(t,Ye),o(t,he),o(t,hn),o(t,ce),b(zn,ce,null),o(ce,qt),o(ce,re),o(ce,Kt),b(Ve,ce,null),o(ce,En),b(S,ce,null),c(x,Se,j),b(dt,x,j),c(x,ct,j),c(x,oe,j),b(je,oe,null),o(oe,en),o(oe,ee),o(oe,fn),o(oe,et),o(oe,tt),o(oe,tn),o(oe,mt),o(oe,Ft),o(oe,_o),o(oe,ye),o(oe,An),o(oe,P),b(Fn,P,null),o(P,on),o(P,ke),o(P,we),b(sn,P,null),o(P,ut),b(nt,P,null),c(x,Je,j),b(ze,x,j),c(x,gn,j),c(x,te,j),b(Lt,te,null),o(te,Ln),o(te,an),o(te,bn),o(te,ie),o(te,rn),o(te,le),o(te,Pn),o(te,Q),o(te,ln),o(te,Ee),o(te,Nt),o(te,se),b(ht,se,null),o(se,pe),o(se,H),o(se,Rt),b(ft,se,null),o(se,me),b(Ue,se,null),c(x,jn,j),b(Bt,x,j),c(x,Cn,j),c(x,ne,j),b(Gt,ne,null),o(ne,Tn),o(ne,ge),o(ne,gt),o(ne,Ht),o(ne,bo),o(ne,_t),o(ne,kn),o(ne,bt),o(ne,Oe),o(ne,Mt),o(ne,Ie),o(ne,B),b(ve,B,null),o(B,Ct),o(B,dn),o(B,Wn),b(Jt,B,null),o(B,qn),b(We,B,null),c(x,wn,j),b(zt,x,j),c(x,Ae,j),c(x,Z,j),b(Tt,Z,null),o(Z,qe),o(Z,st),o(Z,yt),o(Z,cn),o(Z,Vt),o(Z,_e),o(Z,xe),o(Z,be),o(Z,ae),o(Z,rt),o(Z,St),o(Z,Ze),b(kt,Ze,null),o(Ze,Et),o(Ze,vn),o(Ze,$e),b(Fe,Ze,null),o(Ze,Yn),b(ue,Ze,null),c(x,On,j),b(p,x,j),c(x,L,j),c(x,V,j),b(G,V,null),o(V,At),o(V,wt),o(V,Pe),o(V,K),o(V,it),o(V,io),o(V,so),o(V,Ne),o(V,po),o(V,Dn),o(V,pn),o(V,Be),b(mo,Be,null),o(Be,uo),o(Be,Kn),o(Be,eo),b(Qt,Be,null),o(Be,to),b(Le,Be,null),c(x,k,j),b(R,x,j),c(x,vt,j),c(x,O,j),b(xt,O,null),o(O,Qe),o(O,Ut),o(O,Yt),o(O,Me),o(O,h),o(O,F),o(O,de),o(O,Ot),o(O,Nn),o(O,It),o(O,$n),o(O,lt),b($t,lt,null),o(lt,Bn),o(lt,Wt),o(lt,Co),b(wo,lt,null),o(lt,Jo),b(vo,lt,null),jo=!0},p(x,j){const ho={};j&2&&(ho.$$scope={dirty:j,ctx:x}),Ve.$set(ho);const mn={};j&2&&(mn.$$scope={dirty:j,ctx:x}),S.$set(mn);const fo={};j&2&&(fo.$$scope={dirty:j,ctx:x}),sn.$set(fo);const un={};j&2&&(un.$$scope={dirty:j,ctx:x}),nt.$set(un);const go={};j&2&&(go.$$scope={dirty:j,ctx:x}),ft.$set(go);const Gn={};j&2&&(Gn.$$scope={dirty:j,ctx:x}),Ue.$set(Gn);const xo={};j&2&&(xo.$$scope={dirty:j,ctx:x}),Jt.$set(xo);const Hn={};j&2&&(Hn.$$scope={dirty:j,ctx:x}),We.$set(Hn);const $o={};j&2&&($o.$$scope={dirty:j,ctx:x}),Fe.$set($o);const Vn={};j&2&&(Vn.$$scope={dirty:j,ctx:x}),ue.$set(Vn);const Fo={};j&2&&(Fo.$$scope={dirty:j,ctx:x}),Qt.$set(Fo);const Sn={};j&2&&(Sn.$$scope={dirty:j,ctx:x}),Le.$set(Sn);const Lo={};j&2&&(Lo.$$scope={dirty:j,ctx:x}),wo.$set(Lo);const Io={};j&2&&(Io.$$scope={dirty:j,ctx:x}),vo.$set(Io)},i(x){jo||(M(e.$$.fragment,x),M(s.$$.fragment,x),M(zn.$$.fragment,x),M(Ve.$$.fragment,x),M(S.$$.fragment,x),M(dt.$$.fragment,x),M(je.$$.fragment,x),M(Fn.$$.fragment,x),M(sn.$$.fragment,x),M(nt.$$.fragment,x),M(ze.$$.fragment,x),M(Lt.$$.fragment,x),M(ht.$$.fragment,x),M(ft.$$.fragment,x),M(Ue.$$.fragment,x),M(Bt.$$.fragment,x),M(Gt.$$.fragment,x),M(ve.$$.fragment,x),M(Jt.$$.fragment,x),M(We.$$.fragment,x),M(zt.$$.fragment,x),M(Tt.$$.fragment,x),M(kt.$$.fragment,x),M(Fe.$$.fragment,x),M(ue.$$.fragment,x),M(p.$$.fragment,x),M(G.$$.fragment,x),M(mo.$$.fragment,x),M(Qt.$$.fragment,x),M(Le.$$.fragment,x),M(R.$$.fragment,x),M(xt.$$.fragment,x),M($t.$$.fragment,x),M(wo.$$.fragment,x),M(vo.$$.fragment,x),jo=!0)},o(x){T(e.$$.fragment,x),T(s.$$.fragment,x),T(zn.$$.fragment,x),T(Ve.$$.fragment,x),T(S.$$.fragment,x),T(dt.$$.fragment,x),T(je.$$.fragment,x),T(Fn.$$.fragment,x),T(sn.$$.fragment,x),T(nt.$$.fragment,x),T(ze.$$.fragment,x),T(Lt.$$.fragment,x),T(ht.$$.fragment,x),T(ft.$$.fragment,x),T(Ue.$$.fragment,x),T(Bt.$$.fragment,x),T(Gt.$$.fragment,x),T(ve.$$.fragment,x),T(Jt.$$.fragment,x),T(We.$$.fragment,x),T(zt.$$.fragment,x),T(Tt.$$.fragment,x),T(kt.$$.fragment,x),T(Fe.$$.fragment,x),T(ue.$$.fragment,x),T(p.$$.fragment,x),T(G.$$.fragment,x),T(mo.$$.fragment,x),T(Qt.$$.fragment,x),T(Le.$$.fragment,x),T(R.$$.fragment,x),T(xt.$$.fragment,x),T($t.$$.fragment,x),T(wo.$$.fragment,x),T(vo.$$.fragment,x),jo=!1},d(x){x&&(i(m),i(t),i(Se),i(ct),i(oe),i(Je),i(gn),i(te),i(jn),i(Cn),i(ne),i(wn),i(Ae),i(Z),i(On),i(L),i(V),i(k),i(vt),i(O)),y(e,x),y(s),y(zn),y(Ve),y(S),y(dt,x),y(je),y(Fn),y(sn),y(nt),y(ze,x),y(Lt),y(ht),y(ft),y(Ue),y(Bt,x),y(Gt),y(ve),y(Jt),y(We),y(zt,x),y(Tt),y(kt),y(Fe),y(ue),y(p,x),y(G),y(mo),y(Qt),y(Le),y(R,x),y(xt),y($t),y(wo),y(vo)}}}function Ys($){let e,m;return e=new Uo({props:{$$slots:{default:[Qs]},$$scope:{ctx:$}}}),{c(){g(e.$$.fragment)},l(t){_(e.$$.fragment,t)},m(t,s){b(e,t,s),m=!0},p(t,s){const v={};s&2&&(v.$$scope={dirty:s,ctx:t}),e.$set(v)},i(t){m||(M(e.$$.fragment,t),m=!0)},o(t){T(e.$$.fragment,t),m=!1},d(t){y(e,t)}}}function Os($){let e,m,t,s,v,n,w,D='<a href="https://huggingface.co/models?filter=xlm-roberta"><img alt="Models" src="https://img.shields.io/badge/All_model_pages-xlm--roberta-blueviolet"/></a> <a href="https://huggingface.co/spaces/docs-demos/xlm-roberta-base"><img alt="Spaces" src="https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Spaces-blue"/></a>',U,C,E,z,J=`The XLM-RoBERTa model was proposed in <a href="https://arxiv.org/abs/1911.02116" rel="nofollow">Unsupervised Cross-lingual Representation Learning at Scale</a> by Alexis Conneau, Kartikay Khandelwal, Naman Goyal, Vishrav Chaudhary, Guillaume
Wenzek, Francisco Guzmán, Edouard Grave, Myle Ott, Luke Zettlemoyer and Veselin Stoyanov. It is based on Facebook’s
RoBERTa model released in 2019. It is a large multi-lingual language model, trained on 2.5TB of filtered CommonCrawl
data.`,A,f,X="The abstract from the paper is the following:",Ye,he,ko=`<em>This paper shows that pretraining multilingual language models at scale leads to significant performance gains for a
wide range of cross-lingual transfer tasks. We train a Transformer-based masked language model on one hundred
languages, using more than two terabytes of filtered CommonCrawl data. Our model, dubbed XLM-R, significantly
outperforms multilingual BERT (mBERT) on a variety of cross-lingual benchmarks, including +13.8% average accuracy on
XNLI, +12.3% average F1 score on MLQA, and +2.1% average F1 score on NER. XLM-R performs particularly well on
low-resource languages, improving 11.8% in XNLI accuracy for Swahili and 9.2% for Urdu over the previous XLM model. We
also present a detailed empirical evaluation of the key factors that are required to achieve these gains, including the
trade-offs between (1) positive transfer and capacity dilution and (2) the performance of high and low resource
languages at scale. Finally, we show, for the first time, the possibility of multilingual modeling without sacrificing
per-language performance; XLM-Ris very competitive with strong monolingual models on the GLUE and XNLI benchmarks. We
will make XLM-R code, data, and models publicly available.</em>`,hn,ce,zn='This model was contributed by <a href="https://huggingface.co/stefan-it" rel="nofollow">stefan-it</a>. The original code can be found <a href="https://github.com/pytorch/fairseq/tree/master/examples/xlmr" rel="nofollow">here</a>.',qt,re,Ke,Kt,Ve=`<li>XLM-RoBERTa is a multilingual model trained on 100 different languages. Unlike some XLM multilingual models, it does
not require <code>lang</code> tensors to understand which language is used, and should be able to determine the correct
language from the input ids.</li> <li>Uses RoBERTa tricks on the XLM approach, but does not use the translation language modeling objective. It only uses masked language modeling on sentences coming from one language.</li>`,En,S,Se,dt,ct="A list of official Hugging Face and community (indicated by 🌎) resources to help you get started with XLM-RoBERTa. If you’re interested in submitting a resource to be included here, please feel free to open a Pull Request and we’ll review it! The resource should ideally demonstrate something new instead of duplicating an existing resource.",oe,je,en,ee,Un='<li>A blog post on how to <a href="https://www.philschmid.de/habana-distributed-training" rel="nofollow">finetune XLM RoBERTa for multiclass classification with Habana Gaudi on AWS</a></li> <li><a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaForSequenceClassification">XLMRobertaForSequenceClassification</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/pytorch/text-classification" rel="nofollow">example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/text_classification.ipynb" rel="nofollow">notebook</a>.</li> <li><a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.TFXLMRobertaForSequenceClassification">TFXLMRobertaForSequenceClassification</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/tensorflow/text-classification" rel="nofollow">example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/text_classification-tf.ipynb" rel="nofollow">notebook</a>.</li> <li><a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.FlaxXLMRobertaForSequenceClassification">FlaxXLMRobertaForSequenceClassification</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/flax/text-classification" rel="nofollow">example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/text_classification_flax.ipynb" rel="nofollow">notebook</a>.</li> <li><a href="https://huggingface.co/docs/transformers/tasks/sequence_classification" rel="nofollow">Text classification</a> chapter of the 🤗 Hugging Face Task Guides.</li> <li><a href="../tasks/sequence_classification">Text classification task guide</a></li>',fn,et,ao,tt,tn='<li><a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaForTokenClassification">XLMRobertaForTokenClassification</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/pytorch/token-classification" rel="nofollow">example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/token_classification.ipynb" rel="nofollow">notebook</a>.</li> <li><a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.TFXLMRobertaForTokenClassification">TFXLMRobertaForTokenClassification</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/tensorflow/token-classification" rel="nofollow">example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/token_classification-tf.ipynb" rel="nofollow">notebook</a>.</li> <li><a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.FlaxXLMRobertaForTokenClassification">FlaxXLMRobertaForTokenClassification</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/flax/token-classification" rel="nofollow">example script</a>.</li> <li><a href="https://huggingface.co/course/chapter7/2?fw=pt" rel="nofollow">Token classification</a> chapter of the 🤗 Hugging Face Course.</li> <li><a href="../tasks/token_classification">Token classification task guide</a></li>',pt,mt,Ft,nn,_o='<li><a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaForCausalLM">XLMRobertaForCausalLM</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/pytorch/language-modeling" rel="nofollow">example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/language_modeling.ipynb" rel="nofollow">notebook</a>.</li> <li><a href="https://huggingface.co/docs/transformers/tasks/language_modeling" rel="nofollow">Causal language modeling</a> chapter of the 🤗 Hugging Face Task Guides.</li> <li><a href="../tasks/language_modeling">Causal language modeling task guide</a></li>',ye,Ce,An,P,Fn='<li><a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaForMaskedLM">XLMRobertaForMaskedLM</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/pytorch/language-modeling#robertabertdistilbert-and-masked-language-modeling" rel="nofollow">example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/language_modeling.ipynb" rel="nofollow">notebook</a>.</li> <li><a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.TFXLMRobertaForMaskedLM">TFXLMRobertaForMaskedLM</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/tensorflow/language-modeling#run_mlmpy" rel="nofollow">example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/language_modeling-tf.ipynb" rel="nofollow">notebook</a>.</li> <li><a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.FlaxXLMRobertaForMaskedLM">FlaxXLMRobertaForMaskedLM</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/flax/language-modeling#masked-language-modeling" rel="nofollow">example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/masked_language_modeling_flax.ipynb" rel="nofollow">notebook</a>.</li> <li><a href="https://huggingface.co/course/chapter7/3?fw=pt" rel="nofollow">Masked language modeling</a> chapter of the 🤗 Hugging Face Course.</li> <li><a href="../tasks/masked_language_modeling">Masked language modeling</a></li>',on,ke,fe,we,sn='<li><a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaForQuestionAnswering">XLMRobertaForQuestionAnswering</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/pytorch/question-answering" rel="nofollow">example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/question_answering.ipynb" rel="nofollow">notebook</a>.</li> <li><a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.TFXLMRobertaForQuestionAnswering">TFXLMRobertaForQuestionAnswering</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/tensorflow/question-answering" rel="nofollow">example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/question_answering-tf.ipynb" rel="nofollow">notebook</a>.</li> <li><a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.FlaxXLMRobertaForQuestionAnswering">FlaxXLMRobertaForQuestionAnswering</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/flax/question-answering" rel="nofollow">example script</a>.</li> <li><a href="https://huggingface.co/course/chapter7/7?fw=pt" rel="nofollow">Question answering</a> chapter of the 🤗 Hugging Face Course.</li> <li><a href="../tasks/question_answering">Question answering task guide</a></li>',ut,nt,Je="<strong>Multiple choice</strong>",ze,gn,te='<li><a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaForMultipleChoice">XLMRobertaForMultipleChoice</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/pytorch/multiple-choice" rel="nofollow">example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/multiple_choice.ipynb" rel="nofollow">notebook</a>.</li> <li><a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.TFXLMRobertaForMultipleChoice">TFXLMRobertaForMultipleChoice</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/tensorflow/multiple-choice" rel="nofollow">example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/multiple_choice-tf.ipynb" rel="nofollow">notebook</a>.</li> <li><a href="../tasks/multiple_choice">Multiple choice task guide</a></li>',Lt,Ln,an="🚀 Deploy",_n,bn,ie='<li>A blog post on how to <a href="https://www.philschmid.de/multilingual-serverless-xlm-roberta-with-huggingface" rel="nofollow">Deploy Serverless XLM RoBERTa on AWS Lambda</a>.</li>',Rn,rn,le,Zt,Pn,Q,In,ln,Ee,Xn=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaModel">XLMRobertaModel</a> or a <a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.TFXLMRobertaModel">TFXLMRobertaModel</a>. It
is used to instantiate a XLM-RoBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the XLMRoBERTa
<a href="https://huggingface.co/FacebookAI/xlm-roberta-base" rel="nofollow">FacebookAI/xlm-roberta-base</a> architecture.`,Nt,se,ht=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,pe,H,Mn,Rt,ft,me,Ue,jn,Bt,Cn=`Adapted from <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a> and <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. Based on
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a>.`,ne,Gt,Tn=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`,ge,Y,gt,Ht,yn,bo=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`,_t,Xt,kn="<li>single sequence: <code>&lt;s&gt; X &lt;/s&gt;</code></li> <li>pair of sequences: <code>&lt;s&gt; A &lt;/s&gt;&lt;/s&gt; B &lt;/s&gt;</code></li>",bt,ot,Oe,Mt,jt,Ie=`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer <code>prepare_for_model</code> method.`,B,ve,Ct,dn,Qn,Wn=`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`,Jt,qn,We,wn,zt,Ae,Z,Tt,qe,st,Mo=`Construct a “fast” XLM-RoBERTa tokenizer (backed by HuggingFace’s <em>tokenizers</em> library). Adapted from
<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a> and <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. Based on
<a href="https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models" rel="nofollow">BPE</a>.`,yt,cn,Jn=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a> which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`,Vt,_e,at,xe,be,ro=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`,ae,rt,To="<li>single sequence: <code>&lt;s&gt; X &lt;/s&gt;</code></li> <li>pair of sequences: <code>&lt;s&gt; A &lt;/s&gt;&lt;/s&gt; B &lt;/s&gt;</code></li>",St,Ze,kt,Et,vn,yo=`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`,$e,Fe,Yn,ue,On;return v=new Xe({props:{title:"XLM-RoBERTa",local:"xlm-roberta",headingTag:"h1"}}),C=new Xe({props:{title:"Overview",local:"overview",headingTag:"h2"}}),re=new Xe({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),S=new Xe({props:{title:"Resources",local:"resources",headingTag:"h2"}}),je=new zo({props:{pipeline:"text-classification"}}),et=new zo({props:{pipeline:"token-classification"}}),mt=new zo({props:{pipeline:"text-generation"}}),Ce=new zo({props:{pipeline:"fill-mask"}}),ke=new zo({props:{pipeline:"question-answering"}}),rn=new Te({props:{$$slots:{default:[Ho]},$$scope:{ctx:$}}}),Zt=new Xe({props:{title:"XLMRobertaConfig",local:"transformers.XLMRobertaConfig",headingTag:"h2"}}),In=new N({props:{name:"class transformers.XLMRobertaConfig",anchor:"transformers.XLMRobertaConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the XLM-RoBERTa model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaModel">XLMRobertaModel</a> or <a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.TFXLMRobertaModel">TFXLMRobertaModel</a>.`,name:"vocab_size"},{anchor:"transformers.XLMRobertaConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.XLMRobertaConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.XLMRobertaConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.XLMRobertaConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.XLMRobertaConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.XLMRobertaConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.XLMRobertaConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.XLMRobertaConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.XLMRobertaConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaModel">XLMRobertaModel</a> or
<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.TFXLMRobertaModel">TFXLMRobertaModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.XLMRobertaConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.XLMRobertaConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.XLMRobertaConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.XLMRobertaConfig.is_decoder",description:`<strong>is_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model is used as a decoder or not. If <code>False</code>, the model is used as an encoder.`,name:"is_decoder"},{anchor:"transformers.XLMRobertaConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.XLMRobertaConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/configuration_xlm_roberta.py#L45"}}),H=new Ge({props:{anchor:"transformers.XLMRobertaConfig.example",$$slots:{default:[Vo]},$$scope:{ctx:$}}}),Rt=new Xe({props:{title:"XLMRobertaTokenizer",local:"transformers.XLMRobertaTokenizer",headingTag:"h2"}}),Ue=new N({props:{name:"class transformers.XLMRobertaTokenizer",anchor:"transformers.XLMRobertaTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.XLMRobertaTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.XLMRobertaTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.XLMRobertaTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.XLMRobertaTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.XLMRobertaTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.XLMRobertaTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.XLMRobertaTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.XLMRobertaTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:</p>
<ul>
<li>
<p><code>enable_sampling</code>: Enable subword regularization.</p>
</li>
<li>
<p><code>nbest_size</code>: Sampling parameters for unigram. Invalid for BPE-Dropout.</p>
<ul>
<li><code>nbest_size = {0,1}</code>: No sampling is performed.</li>
<li><code>nbest_size &gt; 1</code>: samples from the nbest_size results.</li>
<li><code>nbest_size &lt; 0</code>: assuming that nbest_size is infinite and samples from the all hypothesis (lattice)
using forward-filtering-and-backward-sampling algorithm.</li>
</ul>
</li>
<li>
<p><code>alpha</code>: Smoothing parameter for unigram sampling, and dropout probability of merge operations for
BPE-dropout.</p>
</li>
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.XLMRobertaTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/tokenization_xlm_roberta.py#L63"}}),gt=new N({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XLMRobertaTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.XLMRobertaTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/tokenization_xlm_roberta.py#L200",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Oe=new N({props:{name:"get_special_tokens_mask",anchor:"transformers.XLMRobertaTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLMRobertaTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.XLMRobertaTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/tokenization_xlm_roberta.py#L226",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Ct=new N({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XLMRobertaTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLMRobertaTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/tokenization_xlm_roberta.py#L254",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of zeros.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),We=new N({props:{name:"save_vocabulary",anchor:"transformers.XLMRobertaTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/tokenization_xlm_roberta.py#L312"}}),zt=new Xe({props:{title:"XLMRobertaTokenizerFast",local:"transformers.XLMRobertaTokenizerFast",headingTag:"h2"}}),Tt=new N({props:{name:"class transformers.XLMRobertaTokenizerFast",anchor:"transformers.XLMRobertaTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.XLMRobertaTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.XLMRobertaTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.XLMRobertaTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.XLMRobertaTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.XLMRobertaTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.XLMRobertaTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.XLMRobertaTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.XLMRobertaTokenizerFast.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;s&gt;NOTUSED&quot;, &quot;&lt;/s&gt;NOTUSED&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/tokenization_xlm_roberta_fast.py#L82"}}),at=new N({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XLMRobertaTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.XLMRobertaTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/tokenization_xlm_roberta_fast.py#L174",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),kt=new N({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XLMRobertaTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLMRobertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/xlm_roberta/tokenization_xlm_roberta_fast.py#L200",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of zeros.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Fe=new Go({props:{pytorch:!0,tensorflow:!0,jax:!0,$$slots:{jax:[Ys],tensorflow:[zs],pytorch:[is]},$$scope:{ctx:$}}}),{c(){e=l("meta"),m=a(),t=l("p"),s=a(),g(v.$$.fragment),n=a(),w=l("div"),w.innerHTML=D,U=a(),g(C.$$.fragment),E=a(),z=l("p"),z.innerHTML=J,A=a(),f=l("p"),f.textContent=X,Ye=a(),he=l("p"),he.innerHTML=ko,hn=a(),ce=l("p"),ce.innerHTML=zn,qt=a(),g(re.$$.fragment),Ke=a(),Kt=l("ul"),Kt.innerHTML=Ve,En=a(),g(S.$$.fragment),Se=a(),dt=l("p"),dt.textContent=ct,oe=a(),g(je.$$.fragment),en=a(),ee=l("ul"),ee.innerHTML=Un,fn=a(),g(et.$$.fragment),ao=a(),tt=l("ul"),tt.innerHTML=tn,pt=a(),g(mt.$$.fragment),Ft=a(),nn=l("ul"),nn.innerHTML=_o,ye=a(),g(Ce.$$.fragment),An=a(),P=l("ul"),P.innerHTML=Fn,on=a(),g(ke.$$.fragment),fe=a(),we=l("ul"),we.innerHTML=sn,ut=a(),nt=l("p"),nt.innerHTML=Je,ze=a(),gn=l("ul"),gn.innerHTML=te,Lt=a(),Ln=l("p"),Ln.textContent=an,_n=a(),bn=l("ul"),bn.innerHTML=ie,Rn=a(),g(rn.$$.fragment),le=a(),g(Zt.$$.fragment),Pn=a(),Q=l("div"),g(In.$$.fragment),ln=a(),Ee=l("p"),Ee.innerHTML=Xn,Nt=a(),se=l("p"),se.innerHTML=ht,pe=a(),g(H.$$.fragment),Mn=a(),g(Rt.$$.fragment),ft=a(),me=l("div"),g(Ue.$$.fragment),jn=a(),Bt=l("p"),Bt.innerHTML=Cn,ne=a(),Gt=l("p"),Gt.innerHTML=Tn,ge=a(),Y=l("div"),g(gt.$$.fragment),Ht=a(),yn=l("p"),yn.textContent=bo,_t=a(),Xt=l("ul"),Xt.innerHTML=kn,bt=a(),ot=l("div"),g(Oe.$$.fragment),Mt=a(),jt=l("p"),jt.innerHTML=Ie,B=a(),ve=l("div"),g(Ct.$$.fragment),dn=a(),Qn=l("p"),Qn.textContent=Wn,Jt=a(),qn=l("div"),g(We.$$.fragment),wn=a(),g(zt.$$.fragment),Ae=a(),Z=l("div"),g(Tt.$$.fragment),qe=a(),st=l("p"),st.innerHTML=Mo,yt=a(),cn=l("p"),cn.innerHTML=Jn,Vt=a(),_e=l("div"),g(at.$$.fragment),xe=a(),be=l("p"),be.textContent=ro,ae=a(),rt=l("ul"),rt.innerHTML=To,St=a(),Ze=l("div"),g(kt.$$.fragment),Et=a(),vn=l("p"),vn.textContent=yo,$e=a(),g(Fe.$$.fragment),Yn=a(),ue=l("p"),this.h()},l(p){const L=Bo("svelte-u9bgzb",document.head);e=d(L,"META",{name:!0,content:!0}),L.forEach(i),m=r(p),t=d(p,"P",{}),q(t).forEach(i),s=r(p),_(v.$$.fragment,p),n=r(p),w=d(p,"DIV",{class:!0,"data-svelte-h":!0}),u(w)!=="svelte-4acett"&&(w.innerHTML=D),U=r(p),_(C.$$.fragment,p),E=r(p),z=d(p,"P",{"data-svelte-h":!0}),u(z)!=="svelte-1lfpqti"&&(z.innerHTML=J),A=r(p),f=d(p,"P",{"data-svelte-h":!0}),u(f)!=="svelte-vfdo9a"&&(f.textContent=X),Ye=r(p),he=d(p,"P",{"data-svelte-h":!0}),u(he)!=="svelte-11xokj5"&&(he.innerHTML=ko),hn=r(p),ce=d(p,"P",{"data-svelte-h":!0}),u(ce)!=="svelte-1yn1pvv"&&(ce.innerHTML=zn),qt=r(p),_(re.$$.fragment,p),Ke=r(p),Kt=d(p,"UL",{"data-svelte-h":!0}),u(Kt)!=="svelte-1az6xdf"&&(Kt.innerHTML=Ve),En=r(p),_(S.$$.fragment,p),Se=r(p),dt=d(p,"P",{"data-svelte-h":!0}),u(dt)!=="svelte-1ohr9zi"&&(dt.textContent=ct),oe=r(p),_(je.$$.fragment,p),en=r(p),ee=d(p,"UL",{"data-svelte-h":!0}),u(ee)!=="svelte-b2xt9f"&&(ee.innerHTML=Un),fn=r(p),_(et.$$.fragment,p),ao=r(p),tt=d(p,"UL",{"data-svelte-h":!0}),u(tt)!=="svelte-gg6u9i"&&(tt.innerHTML=tn),pt=r(p),_(mt.$$.fragment,p),Ft=r(p),nn=d(p,"UL",{"data-svelte-h":!0}),u(nn)!=="svelte-5vuef7"&&(nn.innerHTML=_o),ye=r(p),_(Ce.$$.fragment,p),An=r(p),P=d(p,"UL",{"data-svelte-h":!0}),u(P)!=="svelte-1km5r36"&&(P.innerHTML=Fn),on=r(p),_(ke.$$.fragment,p),fe=r(p),we=d(p,"UL",{"data-svelte-h":!0}),u(we)!=="svelte-1erqadz"&&(we.innerHTML=sn),ut=r(p),nt=d(p,"P",{"data-svelte-h":!0}),u(nt)!=="svelte-cplu6u"&&(nt.innerHTML=Je),ze=r(p),gn=d(p,"UL",{"data-svelte-h":!0}),u(gn)!=="svelte-uh341h"&&(gn.innerHTML=te),Lt=r(p),Ln=d(p,"P",{"data-svelte-h":!0}),u(Ln)!=="svelte-lk14e4"&&(Ln.textContent=an),_n=r(p),bn=d(p,"UL",{"data-svelte-h":!0}),u(bn)!=="svelte-1eioy9o"&&(bn.innerHTML=ie),Rn=r(p),_(rn.$$.fragment,p),le=r(p),_(Zt.$$.fragment,p),Pn=r(p),Q=d(p,"DIV",{class:!0});var V=q(Q);_(In.$$.fragment,V),ln=r(V),Ee=d(V,"P",{"data-svelte-h":!0}),u(Ee)!=="svelte-14ss61r"&&(Ee.innerHTML=Xn),Nt=r(V),se=d(V,"P",{"data-svelte-h":!0}),u(se)!=="svelte-o55m63"&&(se.innerHTML=ht),pe=r(V),_(H.$$.fragment,V),V.forEach(i),Mn=r(p),_(Rt.$$.fragment,p),ft=r(p),me=d(p,"DIV",{class:!0});var G=q(me);_(Ue.$$.fragment,G),jn=r(G),Bt=d(G,"P",{"data-svelte-h":!0}),u(Bt)!=="svelte-1serjol"&&(Bt.innerHTML=Cn),ne=r(G),Gt=d(G,"P",{"data-svelte-h":!0}),u(Gt)!=="svelte-1c3t5ty"&&(Gt.innerHTML=Tn),ge=r(G),Y=d(G,"DIV",{class:!0});var At=q(Y);_(gt.$$.fragment,At),Ht=r(At),yn=d(At,"P",{"data-svelte-h":!0}),u(yn)!=="svelte-1ooxl9e"&&(yn.textContent=bo),_t=r(At),Xt=d(At,"UL",{"data-svelte-h":!0}),u(Xt)!=="svelte-rq8uot"&&(Xt.innerHTML=kn),At.forEach(i),bt=r(G),ot=d(G,"DIV",{class:!0});var wt=q(ot);_(Oe.$$.fragment,wt),Mt=r(wt),jt=d(wt,"P",{"data-svelte-h":!0}),u(jt)!=="svelte-1f4f5kp"&&(jt.innerHTML=Ie),wt.forEach(i),B=r(G),ve=d(G,"DIV",{class:!0});var Pt=q(ve);_(Ct.$$.fragment,Pt),dn=r(Pt),Qn=d(Pt,"P",{"data-svelte-h":!0}),u(Qn)!=="svelte-bub0ru"&&(Qn.textContent=Wn),Pt.forEach(i),Jt=r(G),qn=d(G,"DIV",{class:!0});var Pe=q(qn);_(We.$$.fragment,Pe),Pe.forEach(i),G.forEach(i),wn=r(p),_(zt.$$.fragment,p),Ae=r(p),Z=d(p,"DIV",{class:!0});var K=q(Z);_(Tt.$$.fragment,K),qe=r(K),st=d(K,"P",{"data-svelte-h":!0}),u(st)!=="svelte-msbl20"&&(st.innerHTML=Mo),yt=r(K),cn=d(K,"P",{"data-svelte-h":!0}),u(cn)!=="svelte-fh0aq"&&(cn.innerHTML=Jn),Vt=r(K),_e=d(K,"DIV",{class:!0});var Zn=q(_e);_(at.$$.fragment,Zn),xe=r(Zn),be=d(Zn,"P",{"data-svelte-h":!0}),u(be)!=="svelte-1ooxl9e"&&(be.textContent=ro),ae=r(Zn),rt=d(Zn,"UL",{"data-svelte-h":!0}),u(rt)!=="svelte-rq8uot"&&(rt.innerHTML=To),Zn.forEach(i),St=r(K),Ze=d(K,"DIV",{class:!0});var it=q(Ze);_(kt.$$.fragment,it),Et=r(it),vn=d(it,"P",{"data-svelte-h":!0}),u(vn)!=="svelte-bub0ru"&&(vn.textContent=yo),it.forEach(i),K.forEach(i),$e=r(p),_(Fe.$$.fragment,p),Yn=r(p),ue=d(p,"P",{}),q(ue).forEach(i),this.h()},h(){W(e,"name","hf:doc:metadata"),W(e,"content",Ds),W(w,"class","flex flex-wrap space-x-1"),W(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(qn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(p,L){o(document.head,e),c(p,m,L),c(p,t,L),c(p,s,L),b(v,p,L),c(p,n,L),c(p,w,L),c(p,U,L),b(C,p,L),c(p,E,L),c(p,z,L),c(p,A,L),c(p,f,L),c(p,Ye,L),c(p,he,L),c(p,hn,L),c(p,ce,L),c(p,qt,L),b(re,p,L),c(p,Ke,L),c(p,Kt,L),c(p,En,L),b(S,p,L),c(p,Se,L),c(p,dt,L),c(p,oe,L),b(je,p,L),c(p,en,L),c(p,ee,L),c(p,fn,L),b(et,p,L),c(p,ao,L),c(p,tt,L),c(p,pt,L),b(mt,p,L),c(p,Ft,L),c(p,nn,L),c(p,ye,L),b(Ce,p,L),c(p,An,L),c(p,P,L),c(p,on,L),b(ke,p,L),c(p,fe,L),c(p,we,L),c(p,ut,L),c(p,nt,L),c(p,ze,L),c(p,gn,L),c(p,Lt,L),c(p,Ln,L),c(p,_n,L),c(p,bn,L),c(p,Rn,L),b(rn,p,L),c(p,le,L),b(Zt,p,L),c(p,Pn,L),c(p,Q,L),b(In,Q,null),o(Q,ln),o(Q,Ee),o(Q,Nt),o(Q,se),o(Q,pe),b(H,Q,null),c(p,Mn,L),b(Rt,p,L),c(p,ft,L),c(p,me,L),b(Ue,me,null),o(me,jn),o(me,Bt),o(me,ne),o(me,Gt),o(me,ge),o(me,Y),b(gt,Y,null),o(Y,Ht),o(Y,yn),o(Y,_t),o(Y,Xt),o(me,bt),o(me,ot),b(Oe,ot,null),o(ot,Mt),o(ot,jt),o(me,B),o(me,ve),b(Ct,ve,null),o(ve,dn),o(ve,Qn),o(me,Jt),o(me,qn),b(We,qn,null),c(p,wn,L),b(zt,p,L),c(p,Ae,L),c(p,Z,L),b(Tt,Z,null),o(Z,qe),o(Z,st),o(Z,yt),o(Z,cn),o(Z,Vt),o(Z,_e),b(at,_e,null),o(_e,xe),o(_e,be),o(_e,ae),o(_e,rt),o(Z,St),o(Z,Ze),b(kt,Ze,null),o(Ze,Et),o(Ze,vn),c(p,$e,L),b(Fe,p,L),c(p,Yn,L),c(p,ue,L),On=!0},p(p,[L]){const V={};L&2&&(V.$$scope={dirty:L,ctx:p}),rn.$set(V);const G={};L&2&&(G.$$scope={dirty:L,ctx:p}),H.$set(G);const At={};L&2&&(At.$$scope={dirty:L,ctx:p}),Fe.$set(At)},i(p){On||(M(v.$$.fragment,p),M(C.$$.fragment,p),M(re.$$.fragment,p),M(S.$$.fragment,p),M(je.$$.fragment,p),M(et.$$.fragment,p),M(mt.$$.fragment,p),M(Ce.$$.fragment,p),M(ke.$$.fragment,p),M(rn.$$.fragment,p),M(Zt.$$.fragment,p),M(In.$$.fragment,p),M(H.$$.fragment,p),M(Rt.$$.fragment,p),M(Ue.$$.fragment,p),M(gt.$$.fragment,p),M(Oe.$$.fragment,p),M(Ct.$$.fragment,p),M(We.$$.fragment,p),M(zt.$$.fragment,p),M(Tt.$$.fragment,p),M(at.$$.fragment,p),M(kt.$$.fragment,p),M(Fe.$$.fragment,p),On=!0)},o(p){T(v.$$.fragment,p),T(C.$$.fragment,p),T(re.$$.fragment,p),T(S.$$.fragment,p),T(je.$$.fragment,p),T(et.$$.fragment,p),T(mt.$$.fragment,p),T(Ce.$$.fragment,p),T(ke.$$.fragment,p),T(rn.$$.fragment,p),T(Zt.$$.fragment,p),T(In.$$.fragment,p),T(H.$$.fragment,p),T(Rt.$$.fragment,p),T(Ue.$$.fragment,p),T(gt.$$.fragment,p),T(Oe.$$.fragment,p),T(Ct.$$.fragment,p),T(We.$$.fragment,p),T(zt.$$.fragment,p),T(Tt.$$.fragment,p),T(at.$$.fragment,p),T(kt.$$.fragment,p),T(Fe.$$.fragment,p),On=!1},d(p){p&&(i(m),i(t),i(s),i(n),i(w),i(U),i(E),i(z),i(A),i(f),i(Ye),i(he),i(hn),i(ce),i(qt),i(Ke),i(Kt),i(En),i(Se),i(dt),i(oe),i(en),i(ee),i(fn),i(ao),i(tt),i(pt),i(Ft),i(nn),i(ye),i(An),i(P),i(on),i(fe),i(we),i(ut),i(nt),i(ze),i(gn),i(Lt),i(Ln),i(_n),i(bn),i(Rn),i(le),i(Pn),i(Q),i(Mn),i(ft),i(me),i(wn),i(Ae),i(Z),i($e),i(Yn),i(ue)),i(e),y(v,p),y(C,p),y(re,p),y(S,p),y(je,p),y(et,p),y(mt,p),y(Ce,p),y(ke,p),y(rn,p),y(Zt,p),y(In),y(H),y(Rt,p),y(Ue),y(gt),y(Oe),y(Ct),y(We),y(zt,p),y(Tt),y(at),y(kt),y(Fe,p)}}}const Ds='{"title":"XLM-RoBERTa","local":"xlm-roberta","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"XLMRobertaConfig","local":"transformers.XLMRobertaConfig","sections":[],"depth":2},{"title":"XLMRobertaTokenizer","local":"transformers.XLMRobertaTokenizer","sections":[],"depth":2},{"title":"XLMRobertaTokenizerFast","local":"transformers.XLMRobertaTokenizerFast","sections":[],"depth":2},{"title":"XLMRobertaModel","local":"transformers.XLMRobertaModel","sections":[],"depth":2},{"title":"XLMRobertaForCausalLM","local":"transformers.XLMRobertaForCausalLM","sections":[],"depth":2},{"title":"XLMRobertaForMaskedLM","local":"transformers.XLMRobertaForMaskedLM","sections":[],"depth":2},{"title":"XLMRobertaForSequenceClassification","local":"transformers.XLMRobertaForSequenceClassification","sections":[],"depth":2},{"title":"XLMRobertaForMultipleChoice","local":"transformers.XLMRobertaForMultipleChoice","sections":[],"depth":2},{"title":"XLMRobertaForTokenClassification","local":"transformers.XLMRobertaForTokenClassification","sections":[],"depth":2},{"title":"XLMRobertaForQuestionAnswering","local":"transformers.XLMRobertaForQuestionAnswering","sections":[],"depth":2},{"title":"TFXLMRobertaModel","local":"transformers.TFXLMRobertaModel","sections":[],"depth":2},{"title":"TFXLMRobertaForCausalLM","local":"transformers.TFXLMRobertaForCausalLM","sections":[],"depth":2},{"title":"TFXLMRobertaForMaskedLM","local":"transformers.TFXLMRobertaForMaskedLM","sections":[],"depth":2},{"title":"TFXLMRobertaForSequenceClassification","local":"transformers.TFXLMRobertaForSequenceClassification","sections":[],"depth":2},{"title":"TFXLMRobertaForMultipleChoice","local":"transformers.TFXLMRobertaForMultipleChoice","sections":[],"depth":2},{"title":"TFXLMRobertaForTokenClassification","local":"transformers.TFXLMRobertaForTokenClassification","sections":[],"depth":2},{"title":"TFXLMRobertaForQuestionAnswering","local":"transformers.TFXLMRobertaForQuestionAnswering","sections":[],"depth":2},{"title":"FlaxXLMRobertaModel","local":"transformers.FlaxXLMRobertaModel","sections":[],"depth":2},{"title":"FlaxXLMRobertaForCausalLM","local":"transformers.FlaxXLMRobertaForCausalLM","sections":[],"depth":2},{"title":"FlaxXLMRobertaForMaskedLM","local":"transformers.FlaxXLMRobertaForMaskedLM","sections":[],"depth":2},{"title":"FlaxXLMRobertaForSequenceClassification","local":"transformers.FlaxXLMRobertaForSequenceClassification","sections":[],"depth":2},{"title":"FlaxXLMRobertaForMultipleChoice","local":"transformers.FlaxXLMRobertaForMultipleChoice","sections":[],"depth":2},{"title":"FlaxXLMRobertaForTokenClassification","local":"transformers.FlaxXLMRobertaForTokenClassification","sections":[],"depth":2},{"title":"FlaxXLMRobertaForQuestionAnswering","local":"transformers.FlaxXLMRobertaForQuestionAnswering","sections":[],"depth":2}],"depth":1}';function Ks($){return qo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class da extends Zo{constructor(e){super(),No(this,e,Ks,Os,Wo,{})}}export{da as component};
