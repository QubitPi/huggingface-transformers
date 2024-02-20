import{s as rs,o as is,n as z}from"../chunks/scheduler.9bc65507.js";import{S as ls,i as ds,g as c,s as i,r as h,A as cs,h as p,f as a,c as l,j as C,u,x as y,k as v,y as r,a as m,v as f,d as g,t as _,w as b}from"../chunks/index.707bf1b6.js";import{T as Ue}from"../chunks/Tip.c2ecdbf4.js";import{D as $}from"../chunks/Docstring.17db21ae.js";import{C as re}from"../chunks/CodeBlock.54a9f38d.js";import{E as ae}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as q}from"../chunks/Heading.342b1fa6.js";function ps(w){let t,T;return t=new re({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFJvQ0JlcnRNb2RlbCUyQyUyMFJvQ0JlcnRDb25maWclMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwUm9DQmVydCUyMHdlaXdlaXNoaSUyRnJvYy1iZXJ0LWJhc2UtemglMjBzdHlsZSUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwUm9DQmVydENvbmZpZygpJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyMG1vZGVsJTIwZnJvbSUyMHRoZSUyMHdlaXdlaXNoaSUyRnJvYy1iZXJ0LWJhc2UtemglMjBzdHlsZSUyMGNvbmZpZ3VyYXRpb24lMEFtb2RlbCUyMCUzRCUyMFJvQ0JlcnRNb2RlbChjb25maWd1cmF0aW9uKSUwQSUwQSUyMyUyMEFjY2Vzc2luZyUyMHRoZSUyMG1vZGVsJTIwY29uZmlndXJhdGlvbiUwQWNvbmZpZ3VyYXRpb24lMjAlM0QlMjBtb2RlbC5jb25maWc=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RoCBertModel, RoCBertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a RoCBert weiweishi/roc-bert-base-zh style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = RoCBertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the weiweishi/roc-bert-base-zh style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoCBertModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){h(t.$$.fragment)},l(n){u(t.$$.fragment,n)},m(n,d){f(t,n,d),T=!0},p:z,i(n){T||(g(t.$$.fragment,n),T=!0)},o(n){_(t.$$.fragment,n),T=!1},d(n){b(t,n)}}}function ms(w){let t,T="pair mask has the following format:",n,d,k;return d=new re({props:{code:"MCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAwJTIwMCUyMDAlMjAxJTIwMSUyMDElMjAxJTIwMSUyMDElMjAxJTIwMSUyMDElMEElN0MlMjBmaXJzdCUyMHNlcXVlbmNlJTIwJTIwJTIwJTIwJTdDJTIwc2Vjb25kJTIwc2VxdWVuY2UlMjAlN0M=",highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`,wrap:!1}}),{c(){t=c("p"),t.textContent=T,n=i(),h(d.$$.fragment)},l(o){t=p(o,"P",{"data-svelte-h":!0}),y(t)!=="svelte-qjgeij"&&(t.textContent=T),n=l(o),u(d.$$.fragment,o)},m(o,M){m(o,t,M),m(o,n,M),f(d,o,M),k=!0},p:z,i(o){k||(g(d.$$.fragment,o),k=!0)},o(o){_(d.$$.fragment,o),k=!1},d(o){o&&(a(t),a(n)),b(d,o)}}}function hs(w){let t,T=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=T},l(n){t=p(n,"P",{"data-svelte-h":!0}),y(t)!=="svelte-fincs2"&&(t.innerHTML=T)},m(n,d){m(n,t,d)},p:z,d(n){n&&a(t)}}}function us(w){let t,T="Example:",n,d,k;return d=new re({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBSb0NCZXJ0TW9kZWwlMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMndlaXdlaXNoaSUyRnJvYy1iZXJ0LWJhc2UtemglMjIpJTBBbW9kZWwlMjAlM0QlMjBSb0NCZXJ0TW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMndlaXdlaXNoaSUyRnJvYy1iZXJ0LWJhc2UtemglMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEFsYXN0X2hpZGRlbl9zdGF0ZXMlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRl",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, RoCBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;weiweishi/roc-bert-base-zh&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoCBertModel.from_pretrained(<span class="hljs-string">&quot;weiweishi/roc-bert-base-zh&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){t=c("p"),t.textContent=T,n=i(),h(d.$$.fragment)},l(o){t=p(o,"P",{"data-svelte-h":!0}),y(t)!=="svelte-11lpom8"&&(t.textContent=T),n=l(o),u(d.$$.fragment,o)},m(o,M){m(o,t,M),m(o,n,M),f(d,o,M),k=!0},p:z,i(o){k||(g(d.$$.fragment,o),k=!0)},o(o){_(d.$$.fragment,o),k=!1},d(o){o&&(a(t),a(n)),b(d,o)}}}function fs(w){let t,T=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=T},l(n){t=p(n,"P",{"data-svelte-h":!0}),y(t)!=="svelte-fincs2"&&(t.innerHTML=T)},m(n,d){m(n,t,d)},p:z,d(n){n&&a(t)}}}function gs(w){let t,T="Example:",n,d,k;return d=new re({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBSb0NCZXJ0Rm9yUHJlVHJhaW5pbmclMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMndlaXdlaXNoaSUyRnJvYy1iZXJ0LWJhc2UtemglMjIpJTBBbW9kZWwlMjAlM0QlMjBSb0NCZXJ0Rm9yUHJlVHJhaW5pbmcuZnJvbV9wcmV0cmFpbmVkKCUyMndlaXdlaXNoaSUyRnJvYy1iZXJ0LWJhc2UtemglMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMiVFNCVCRCVBMCVFNSVBNSVCRCVFRiVCQyU4QyVFNSVCRSU4OCVFOSVBQiU5OCVFNSU4NSVCNCVFOCVBRSVBNCVFOCVBRiU4NiVFNCVCRCVBMCUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBYXR0YWNrX2lucHV0cyUyMCUzRCUyMCU3QiU3RCUwQWZvciUyMGtleSUyMGluJTIwbGlzdChpbnB1dHMua2V5cygpKSUzQSUwQSUyMCUyMCUyMCUyMGF0dGFja19pbnB1dHMlNUJmJTIyYXR0YWNrXyU3QmtleSU3RCUyMiU1RCUyMCUzRCUyMGlucHV0cyU1QmtleSU1RCUwQWxhYmVsX2lucHV0cyUyMCUzRCUyMCU3QiU3RCUwQWZvciUyMGtleSUyMGluJTIwbGlzdChpbnB1dHMua2V5cygpKSUzQSUwQSUyMCUyMCUyMCUyMGxhYmVsX2lucHV0cyU1QmYlMjJsYWJlbHNfJTdCa2V5JTdEJTIyJTVEJTIwJTNEJTIwaW5wdXRzJTVCa2V5JTVEJTBBJTBBaW5wdXRzLnVwZGF0ZShsYWJlbF9pbnB1dHMpJTBBaW5wdXRzLnVwZGF0ZShhdHRhY2tfaW5wdXRzKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEFsb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cyUwQWxvZ2l0cy5zaGFwZQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, RoCBertForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;weiweishi/roc-bert-base-zh&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoCBertForPreTraining.from_pretrained(<span class="hljs-string">&quot;weiweishi/roc-bert-base-zh&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;你好，很高兴认识你&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>attack_inputs = {}
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> key <span class="hljs-keyword">in</span> <span class="hljs-built_in">list</span>(inputs.keys()):
<span class="hljs-meta">... </span>    attack_inputs[<span class="hljs-string">f&quot;attack_<span class="hljs-subst">{key}</span>&quot;</span>] = inputs[key]
<span class="hljs-meta">&gt;&gt;&gt; </span>label_inputs = {}
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> key <span class="hljs-keyword">in</span> <span class="hljs-built_in">list</span>(inputs.keys()):
<span class="hljs-meta">... </span>    label_inputs[<span class="hljs-string">f&quot;labels_<span class="hljs-subst">{key}</span>&quot;</span>] = inputs[key]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs.update(label_inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs.update(attack_inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>logits.shape
torch.Size([<span class="hljs-number">1</span>, <span class="hljs-number">11</span>, <span class="hljs-number">21128</span>])`,wrap:!1}}),{c(){t=c("p"),t.textContent=T,n=i(),h(d.$$.fragment)},l(o){t=p(o,"P",{"data-svelte-h":!0}),y(t)!=="svelte-11lpom8"&&(t.textContent=T),n=l(o),u(d.$$.fragment,o)},m(o,M){m(o,t,M),m(o,n,M),f(d,o,M),k=!0},p:z,i(o){k||(g(d.$$.fragment,o),k=!0)},o(o){_(d.$$.fragment,o),k=!1},d(o){o&&(a(t),a(n)),b(d,o)}}}function _s(w){let t,T=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=T},l(n){t=p(n,"P",{"data-svelte-h":!0}),y(t)!=="svelte-fincs2"&&(t.innerHTML=T)},m(n,d){m(n,t,d)},p:z,d(n){n&&a(t)}}}function bs(w){let t,T="Example:",n,d,k;return d=new re({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBSb0NCZXJ0Rm9yQ2F1c2FsTE0lMkMlMjBSb0NCZXJ0Q29uZmlnJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJ3ZWl3ZWlzaGklMkZyb2MtYmVydC1iYXNlLXpoJTIyKSUwQWNvbmZpZyUyMCUzRCUyMFJvQ0JlcnRDb25maWcuZnJvbV9wcmV0cmFpbmVkKCUyMndlaXdlaXNoaSUyRnJvYy1iZXJ0LWJhc2UtemglMjIpJTBBY29uZmlnLmlzX2RlY29kZXIlMjAlM0QlMjBUcnVlJTBBbW9kZWwlMjAlM0QlMjBSb0NCZXJ0Rm9yQ2F1c2FsTE0uZnJvbV9wcmV0cmFpbmVkKCUyMndlaXdlaXNoaSUyRnJvYy1iZXJ0LWJhc2UtemglMjIlMkMlMjBjb25maWclM0Rjb25maWcpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMiVFNCVCRCVBMCVFNSVBNSVCRCVFRiVCQyU4QyVFNSVCRSU4OCVFOSVBQiU5OCVFNSU4NSVCNCVFOCVBRSVBNCVFOCVBRiU4NiVFNCVCRCVBMCUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQXByZWRpY3Rpb25fbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, RoCBertForCausalLM, RoCBertConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;weiweishi/roc-bert-base-zh&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = RoCBertConfig.from_pretrained(<span class="hljs-string">&quot;weiweishi/roc-bert-base-zh&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoCBertForCausalLM.from_pretrained(<span class="hljs-string">&quot;weiweishi/roc-bert-base-zh&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;你好，很高兴认识你&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`,wrap:!1}}),{c(){t=c("p"),t.textContent=T,n=i(),h(d.$$.fragment)},l(o){t=p(o,"P",{"data-svelte-h":!0}),y(t)!=="svelte-11lpom8"&&(t.textContent=T),n=l(o),u(d.$$.fragment,o)},m(o,M){m(o,t,M),m(o,n,M),f(d,o,M),k=!0},p:z,i(o){k||(g(d.$$.fragment,o),k=!0)},o(o){_(d.$$.fragment,o),k=!1},d(o){o&&(a(t),a(n)),b(d,o)}}}function Ts(w){let t,T=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=T},l(n){t=p(n,"P",{"data-svelte-h":!0}),y(t)!=="svelte-fincs2"&&(t.innerHTML=T)},m(n,d){m(n,t,d)},p:z,d(n){n&&a(t)}}}function ks(w){let t,T=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=T},l(n){t=p(n,"P",{"data-svelte-h":!0}),y(t)!=="svelte-fincs2"&&(t.innerHTML=T)},m(n,d){m(n,t,d)},p:z,d(n){n&&a(t)}}}function ys(w){let t,T="Example of single-label classification:",n,d,k;return d=new re({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMFJvQ0JlcnRGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyQXJ0aHVyWiUyRmR1bW15LXJvY2JlcnQtc2VxJTIyKSUwQW1vZGVsJTIwJTNEJTIwUm9DQmVydEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMkFydGh1clolMkZkdW1teS1yb2NiZXJ0LXNlcSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEFwcmVkaWN0ZWRfY2xhc3NfaWQlMjAlM0QlMjBsb2dpdHMuYXJnbWF4KCkuaXRlbSgpJTBBbW9kZWwuY29uZmlnLmlkMmxhYmVsJTVCcHJlZGljdGVkX2NsYXNzX2lkJTVEJTBBJTBBJTIzJTIwVG8lMjB0cmFpbiUyMGElMjBtb2RlbCUyMG9uJTIwJTYwbnVtX2xhYmVscyU2MCUyMGNsYXNzZXMlMkMlMjB5b3UlMjBjYW4lMjBwYXNzJTIwJTYwbnVtX2xhYmVscyUzRG51bV9sYWJlbHMlNjAlMjB0byUyMCU2MC5mcm9tX3ByZXRyYWluZWQoLi4uKSU2MCUwQW51bV9sYWJlbHMlMjAlM0QlMjBsZW4obW9kZWwuY29uZmlnLmlkMmxhYmVsKSUwQW1vZGVsJTIwJTNEJTIwUm9DQmVydEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMkFydGh1clolMkZkdW1teS1yb2NiZXJ0LXNlcSUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzKSUwQSUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxJTVEKSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcyUwQXJvdW5kKGxvc3MuaXRlbSgpJTJDJTIwMik=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, RoCBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;ArthurZ/dummy-rocbert-seq&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoCBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ArthurZ/dummy-rocbert-seq&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;financial news&#x27;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoCBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ArthurZ/dummy-rocbert-seq&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">2.31</span>`,wrap:!1}}),{c(){t=c("p"),t.textContent=T,n=i(),h(d.$$.fragment)},l(o){t=p(o,"P",{"data-svelte-h":!0}),y(t)!=="svelte-ykxpe4"&&(t.textContent=T),n=l(o),u(d.$$.fragment,o)},m(o,M){m(o,t,M),m(o,n,M),f(d,o,M),k=!0},p:z,i(o){k||(g(d.$$.fragment,o),k=!0)},o(o){_(d.$$.fragment,o),k=!1},d(o){o&&(a(t),a(n)),b(d,o)}}}function Ms(w){let t,T="Example of multi-label classification:",n,d,k;return d=new re({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMFJvQ0JlcnRGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyQXJ0aHVyWiUyRmR1bW15LXJvY2JlcnQtc2VxJTIyKSUwQW1vZGVsJTIwJTNEJTIwUm9DQmVydEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMkFydGh1clolMkZkdW1teS1yb2NiZXJ0LXNlcSUyMiUyQyUyMHByb2JsZW1fdHlwZSUzRCUyMm11bHRpX2xhYmVsX2NsYXNzaWZpY2F0aW9uJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEElMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQXByZWRpY3RlZF9jbGFzc19pZHMlMjAlM0QlMjB0b3JjaC5hcmFuZ2UoMCUyQyUyMGxvZ2l0cy5zaGFwZSU1Qi0xJTVEKSU1QnRvcmNoLnNpZ21vaWQobG9naXRzKS5zcXVlZXplKGRpbSUzRDApJTIwJTNFJTIwMC41JTVEJTBBJTBBJTIzJTIwVG8lMjB0cmFpbiUyMGElMjBtb2RlbCUyMG9uJTIwJTYwbnVtX2xhYmVscyU2MCUyMGNsYXNzZXMlMkMlMjB5b3UlMjBjYW4lMjBwYXNzJTIwJTYwbnVtX2xhYmVscyUzRG51bV9sYWJlbHMlNjAlMjB0byUyMCU2MC5mcm9tX3ByZXRyYWluZWQoLi4uKSU2MCUwQW51bV9sYWJlbHMlMjAlM0QlMjBsZW4obW9kZWwuY29uZmlnLmlkMmxhYmVsKSUwQW1vZGVsJTIwJTNEJTIwUm9DQmVydEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUwQSUyMCUyMCUyMCUyMCUyMkFydGh1clolMkZkdW1teS1yb2NiZXJ0LXNlcSUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIlMEEpJTBBJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2guc3VtKCUwQSUyMCUyMCUyMCUyMHRvcmNoLm5uLmZ1bmN0aW9uYWwub25lX2hvdChwcmVkaWN0ZWRfY2xhc3NfaWRzJTVCTm9uZSUyQyUyMCUzQSU1RC5jbG9uZSgpJTJDJTIwbnVtX2NsYXNzZXMlM0RudW1fbGFiZWxzKSUyQyUyMGRpbSUzRDElMEEpLnRvKHRvcmNoLmZsb2F0KSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, RoCBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;ArthurZ/dummy-rocbert-seq&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoCBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ArthurZ/dummy-rocbert-seq&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.arange(<span class="hljs-number">0</span>, logits.shape[-<span class="hljs-number">1</span>])[torch.sigmoid(logits).squeeze(dim=<span class="hljs-number">0</span>) &gt; <span class="hljs-number">0.5</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoCBertForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;ArthurZ/dummy-rocbert-seq&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.<span class="hljs-built_in">sum</span>(
<span class="hljs-meta">... </span>    torch.nn.functional.one_hot(predicted_class_ids[<span class="hljs-literal">None</span>, :].clone(), num_classes=num_labels), dim=<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>).to(torch.<span class="hljs-built_in">float</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){t=c("p"),t.textContent=T,n=i(),h(d.$$.fragment)},l(o){t=p(o,"P",{"data-svelte-h":!0}),y(t)!=="svelte-1l8e32d"&&(t.textContent=T),n=l(o),u(d.$$.fragment,o)},m(o,M){m(o,t,M),m(o,n,M),f(d,o,M),k=!0},p:z,i(o){k||(g(d.$$.fragment,o),k=!0)},o(o){_(d.$$.fragment,o),k=!1},d(o){o&&(a(t),a(n)),b(d,o)}}}function ws(w){let t,T=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=T},l(n){t=p(n,"P",{"data-svelte-h":!0}),y(t)!=="svelte-fincs2"&&(t.innerHTML=T)},m(n,d){m(n,t,d)},p:z,d(n){n&&a(t)}}}function Cs(w){let t,T="Example:",n,d,k;return d=new re({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBSb0NCZXJ0Rm9yTXVsdGlwbGVDaG9pY2UlMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMndlaXdlaXNoaSUyRnJvYy1iZXJ0LWJhc2UtemglMjIpJTBBbW9kZWwlMjAlM0QlMjBSb0NCZXJ0Rm9yTXVsdGlwbGVDaG9pY2UuZnJvbV9wcmV0cmFpbmVkKCUyMndlaXdlaXNoaSUyRnJvYy1iZXJ0LWJhc2UtemglMjIpJTBBJTBBcHJvbXB0JTIwJTNEJTIwJTIySW4lMjBJdGFseSUyQyUyMHBpenphJTIwc2VydmVkJTIwaW4lMjBmb3JtYWwlMjBzZXR0aW5ncyUyQyUyMHN1Y2glMjBhcyUyMGF0JTIwYSUyMHJlc3RhdXJhbnQlMkMlMjBpcyUyMHByZXNlbnRlZCUyMHVuc2xpY2VkLiUyMiUwQWNob2ljZTAlMjAlM0QlMjAlMjJJdCUyMGlzJTIwZWF0ZW4lMjB3aXRoJTIwYSUyMGZvcmslMjBhbmQlMjBhJTIwa25pZmUuJTIyJTBBY2hvaWNlMSUyMCUzRCUyMCUyMkl0JTIwaXMlMjBlYXRlbiUyMHdoaWxlJTIwaGVsZCUyMGluJTIwdGhlJTIwaGFuZC4lMjIlMEFsYWJlbHMlMjAlM0QlMjB0b3JjaC50ZW5zb3IoMCkudW5zcXVlZXplKDApJTIwJTIwJTIzJTIwY2hvaWNlMCUyMGlzJTIwY29ycmVjdCUyMChhY2NvcmRpbmclMjB0byUyMFdpa2lwZWRpYSUyMCUzQikpJTJDJTIwYmF0Y2glMjBzaXplJTIwMSUwQSUwQWVuY29kaW5nJTIwJTNEJTIwdG9rZW5pemVyKCU1QnByb21wdCUyQyUyMHByb21wdCU1RCUyQyUyMCU1QmNob2ljZTAlMkMlMjBjaG9pY2UxJTVEJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiUyQyUyMHBhZGRpbmclM0RUcnVlKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKiU3QmslM0ElMjB2LnVuc3F1ZWV6ZSgwKSUyMGZvciUyMGslMkMlMjB2JTIwaW4lMjBlbmNvZGluZy5pdGVtcygpJTdEJTJDJTIwbGFiZWxzJTNEbGFiZWxzKSUyMCUyMCUyMyUyMGJhdGNoJTIwc2l6ZSUyMGlzJTIwMSUwQSUwQSUyMyUyMHRoZSUyMGxpbmVhciUyMGNsYXNzaWZpZXIlMjBzdGlsbCUyMG5lZWRzJTIwdG8lMjBiZSUyMHRyYWluZWQlMEFsb3NzJTIwJTNEJTIwb3V0cHV0cy5sb3NzJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, RoCBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;weiweishi/roc-bert-base-zh&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoCBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;weiweishi/roc-bert-base-zh&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){t=c("p"),t.textContent=T,n=i(),h(d.$$.fragment)},l(o){t=p(o,"P",{"data-svelte-h":!0}),y(t)!=="svelte-11lpom8"&&(t.textContent=T),n=l(o),u(d.$$.fragment,o)},m(o,M){m(o,t,M),m(o,n,M),f(d,o,M),k=!0},p:z,i(o){k||(g(d.$$.fragment,o),k=!0)},o(o){_(d.$$.fragment,o),k=!1},d(o){o&&(a(t),a(n)),b(d,o)}}}function vs(w){let t,T=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=T},l(n){t=p(n,"P",{"data-svelte-h":!0}),y(t)!=="svelte-fincs2"&&(t.innerHTML=T)},m(n,d){m(n,t,d)},p:z,d(n){n&&a(t)}}}function $s(w){let t,T="Example:",n,d,k;return d=new re({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBSb0NCZXJ0Rm9yVG9rZW5DbGFzc2lmaWNhdGlvbiUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyQXJ0aHVyWiUyRmR1bW15LXJvY2JlcnQtbmVyJTIyKSUwQW1vZGVsJTIwJTNEJTIwUm9DQmVydEZvclRva2VuQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMkFydGh1clolMkZkdW1teS1yb2NiZXJ0LW5lciUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTBBJTIwJTIwJTIwJTIwJTIySHVnZ2luZ0ZhY2UlMjBpcyUyMGElMjBjb21wYW55JTIwYmFzZWQlMjBpbiUyMFBhcmlzJTIwYW5kJTIwTmV3JTIwWW9yayUyMiUyQyUyMGFkZF9zcGVjaWFsX3Rva2VucyUzREZhbHNlJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiUwQSklMEElMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQXByZWRpY3RlZF90b2tlbl9jbGFzc19pZHMlMjAlM0QlMjBsb2dpdHMuYXJnbWF4KC0xKSUwQSUwQSUyMyUyME5vdGUlMjB0aGF0JTIwdG9rZW5zJTIwYXJlJTIwY2xhc3NpZmllZCUyMHJhdGhlciUyMHRoZW4lMjBpbnB1dCUyMHdvcmRzJTIwd2hpY2glMjBtZWFucyUyMHRoYXQlMEElMjMlMjB0aGVyZSUyMG1pZ2h0JTIwYmUlMjBtb3JlJTIwcHJlZGljdGVkJTIwdG9rZW4lMjBjbGFzc2VzJTIwdGhhbiUyMHdvcmRzLiUwQSUyMyUyME11bHRpcGxlJTIwdG9rZW4lMjBjbGFzc2VzJTIwbWlnaHQlMjBhY2NvdW50JTIwZm9yJTIwdGhlJTIwc2FtZSUyMHdvcmQlMEFwcmVkaWN0ZWRfdG9rZW5zX2NsYXNzZXMlMjAlM0QlMjAlNUJtb2RlbC5jb25maWcuaWQybGFiZWwlNUJ0Lml0ZW0oKSU1RCUyMGZvciUyMHQlMjBpbiUyMHByZWRpY3RlZF90b2tlbl9jbGFzc19pZHMlNUIwJTVEJTVEJTBBcHJlZGljdGVkX3Rva2Vuc19jbGFzc2VzJTBBJTBBbGFiZWxzJTIwJTNEJTIwcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcyUwQXJvdW5kKGxvc3MuaXRlbSgpJTJDJTIwMik=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, RoCBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;ArthurZ/dummy-rocbert-ner&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoCBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;ArthurZ/dummy-rocbert-ner&quot;</span>)

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
[<span class="hljs-string">&#x27;S-EVENT&#x27;</span>, <span class="hljs-string">&#x27;S-FAC&#x27;</span>, <span class="hljs-string">&#x27;I-ORDINAL&#x27;</span>, <span class="hljs-string">&#x27;I-ORDINAL&#x27;</span>, <span class="hljs-string">&#x27;E-ORG&#x27;</span>, <span class="hljs-string">&#x27;E-LANGUAGE&#x27;</span>, <span class="hljs-string">&#x27;E-ORG&#x27;</span>, <span class="hljs-string">&#x27;E-ORG&#x27;</span>, <span class="hljs-string">&#x27;E-ORG&#x27;</span>, <span class="hljs-string">&#x27;E-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-EVENT&#x27;</span>, <span class="hljs-string">&#x27;S-TIME&#x27;</span>, <span class="hljs-string">&#x27;S-TIME&#x27;</span>, <span class="hljs-string">&#x27;E-LANGUAGE&#x27;</span>, <span class="hljs-string">&#x27;S-TIME&#x27;</span>, <span class="hljs-string">&#x27;E-DATE&#x27;</span>, <span class="hljs-string">&#x27;I-ORDINAL&#x27;</span>, <span class="hljs-string">&#x27;E-QUANTITY&#x27;</span>, <span class="hljs-string">&#x27;E-LANGUAGE&#x27;</span>, <span class="hljs-string">&#x27;S-TIME&#x27;</span>, <span class="hljs-string">&#x27;B-ORDINAL&#x27;</span>, <span class="hljs-string">&#x27;S-PRODUCT&#x27;</span>, <span class="hljs-string">&#x27;E-LANGUAGE&#x27;</span>, <span class="hljs-string">&#x27;E-LANGUAGE&#x27;</span>, <span class="hljs-string">&#x27;E-ORG&#x27;</span>, <span class="hljs-string">&#x27;E-LOC&#x27;</span>, <span class="hljs-string">&#x27;S-TIME&#x27;</span>, <span class="hljs-string">&#x27;I-ORDINAL&#x27;</span>, <span class="hljs-string">&#x27;S-FAC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;S-GPE&#x27;</span>, <span class="hljs-string">&#x27;I-EVENT&#x27;</span>, <span class="hljs-string">&#x27;S-GPE&#x27;</span>, <span class="hljs-string">&#x27;E-LANGUAGE&#x27;</span>, <span class="hljs-string">&#x27;E-ORG&#x27;</span>, <span class="hljs-string">&#x27;S-EVENT&#x27;</span>, <span class="hljs-string">&#x27;S-FAC&#x27;</span>, <span class="hljs-string">&#x27;S-FAC&#x27;</span>, <span class="hljs-string">&#x27;S-FAC&#x27;</span>, <span class="hljs-string">&#x27;E-ORG&#x27;</span>, <span class="hljs-string">&#x27;S-FAC&#x27;</span>, <span class="hljs-string">&#x27;E-ORG&#x27;</span>, <span class="hljs-string">&#x27;S-GPE&#x27;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">3.62</span>`,wrap:!1}}),{c(){t=c("p"),t.textContent=T,n=i(),h(d.$$.fragment)},l(o){t=p(o,"P",{"data-svelte-h":!0}),y(t)!=="svelte-11lpom8"&&(t.textContent=T),n=l(o),u(d.$$.fragment,o)},m(o,M){m(o,t,M),m(o,n,M),f(d,o,M),k=!0},p:z,i(o){k||(g(d.$$.fragment,o),k=!0)},o(o){_(d.$$.fragment,o),k=!1},d(o){o&&(a(t),a(n)),b(d,o)}}}function zs(w){let t,T=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=T},l(n){t=p(n,"P",{"data-svelte-h":!0}),y(t)!=="svelte-fincs2"&&(t.innerHTML=T)},m(n,d){m(n,t,d)},p:z,d(n){n&&a(t)}}}function Bs(w){let t,T="Example:",n,d,k;return d=new re({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBSb0NCZXJ0Rm9yUXVlc3Rpb25BbnN3ZXJpbmclMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMkFydGh1clolMkZkdW1teS1yb2NiZXJ0LXFhJTIyKSUwQW1vZGVsJTIwJTNEJTIwUm9DQmVydEZvclF1ZXN0aW9uQW5zd2VyaW5nLmZyb21fcHJldHJhaW5lZCglMjJBcnRodXJaJTJGZHVtbXktcm9jYmVydC1xYSUyMiklMEElMEFxdWVzdGlvbiUyQyUyMHRleHQlMjAlM0QlMjAlMjJXaG8lMjB3YXMlMjBKaW0lMjBIZW5zb24lM0YlMjIlMkMlMjAlMjJKaW0lMjBIZW5zb24lMjB3YXMlMjBhJTIwbmljZSUyMHB1cHBldCUyMiUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplcihxdWVzdGlvbiUyQyUyMHRleHQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBYW5zd2VyX3N0YXJ0X2luZGV4JTIwJTNEJTIwb3V0cHV0cy5zdGFydF9sb2dpdHMuYXJnbWF4KCklMEFhbnN3ZXJfZW5kX2luZGV4JTIwJTNEJTIwb3V0cHV0cy5lbmRfbG9naXRzLmFyZ21heCgpJTBBJTBBcHJlZGljdF9hbnN3ZXJfdG9rZW5zJTIwJTNEJTIwaW5wdXRzLmlucHV0X2lkcyU1QjAlMkMlMjBhbnN3ZXJfc3RhcnRfaW5kZXglMjAlM0ElMjBhbnN3ZXJfZW5kX2luZGV4JTIwJTJCJTIwMSU1RCUwQXRva2VuaXplci5kZWNvZGUocHJlZGljdF9hbnN3ZXJfdG9rZW5zJTJDJTIwc2tpcF9zcGVjaWFsX3Rva2VucyUzRFRydWUpJTBBJTBBJTIzJTIwdGFyZ2V0JTIwaXMlMjAlMjJuaWNlJTIwcHVwcGV0JTIyJTBBdGFyZ2V0X3N0YXJ0X2luZGV4JTIwJTNEJTIwdG9yY2gudGVuc29yKCU1QjE0JTVEKSUwQXRhcmdldF9lbmRfaW5kZXglMjAlM0QlMjB0b3JjaC50ZW5zb3IoJTVCMTUlNUQpJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwc3RhcnRfcG9zaXRpb25zJTNEdGFyZ2V0X3N0YXJ0X2luZGV4JTJDJTIwZW5kX3Bvc2l0aW9ucyUzRHRhcmdldF9lbmRfaW5kZXgpJTBBbG9zcyUyMCUzRCUyMG91dHB1dHMubG9zcyUwQXJvdW5kKGxvc3MuaXRlbSgpJTJDJTIwMik=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, RoCBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;ArthurZ/dummy-rocbert-qa&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RoCBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;ArthurZ/dummy-rocbert-qa&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-string">&#x27;&#x27;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">3.75</span>`,wrap:!1}}),{c(){t=c("p"),t.textContent=T,n=i(),h(d.$$.fragment)},l(o){t=p(o,"P",{"data-svelte-h":!0}),y(t)!=="svelte-11lpom8"&&(t.textContent=T),n=l(o),u(d.$$.fragment,o)},m(o,M){m(o,t,M),m(o,n,M),f(d,o,M),k=!0},p:z,i(o){k||(g(d.$$.fragment,o),k=!0)},o(o){_(d.$$.fragment,o),k=!1},d(o){o&&(a(t),a(n)),b(d,o)}}}function Rs(w){let t,T,n,d,k,o,M,Dt,Ie,Rn=`The RoCBert model was proposed in <a href="https://aclanthology.org/2022.acl-long.65.pdf" rel="nofollow">RoCBert: Robust Chinese Bert with Multimodal Contrastive Pretraining</a>  by HuiSu, WeiweiShi, XiaoyuShen, XiaoZhou, TuoJi, JiaruiFang, JieZhou.
It’s a pretrained Chinese language model that is robust under various forms of adversarial attacks.`,Yt,qe,xn="The abstract from the paper is the following:",Kt,We,jn=`<em>Large-scale pretrained language models have achieved SOTA results on NLP tasks. However, they have been shown
vulnerable to adversarial attacks especially for logographic languages like Chinese. In this work, we propose
ROCBERT: a pretrained Chinese Bert that is robust to various forms of adversarial attacks like word perturbation,
synonyms, typos, etc. It is pretrained with the contrastive learning objective which maximizes the label consistency
under different synthesized adversarial examples. The model takes as input multimodal information including the
semantic, phonetic and visual features. We show all these features are important to the model robustness since the
attack can be performed in all the three forms. Across 5 Chinese NLU tasks, ROCBERT outperforms strong baselines under
three blackbox adversarial algorithms without sacrificing the performance on clean testset. It also performs the best
in the toxic content detection task under human-made attacks.</em>`,eo,Ne,Jn='This model was contributed by <a href="https://huggingface.co/weiweishi" rel="nofollow">weiweishi</a>.',to,Ve,oo,Se,Fn='<li><a href="../tasks/sequence_classification">Text classification task guide</a></li> <li><a href="../tasks/token_classification">Token classification task guide</a></li> <li><a href="../tasks/question_answering">Question answering task guide</a></li> <li><a href="../tasks/language_modeling">Causal language modeling task guide</a></li> <li><a href="../tasks/masked_language_modeling">Masked language modeling task guide</a></li> <li><a href="../tasks/multiple_choice">Multiple choice task guide</a></li>',no,Ze,so,j,Le,$o,kt,Un=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertModel">RoCBertModel</a>. It is used to instantiate a
RoCBert model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the RoCBert
<a href="https://huggingface.co/weiweishi/roc-bert-base-zh" rel="nofollow">weiweishi/roc-bert-base-zh</a> architecture.`,zo,yt,In=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,Bo,he,ao,Xe,ro,B,Ge,Ro,ne,Qe,xo,Mt,qn=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`,jo,wt,Wn="<li>single sequence: <code>[CLS] X [SEP]</code></li> <li>pair of sequences: <code>[CLS] A [SEP] B [SEP]</code></li>",Jo,ue,Ae,Fo,Ct,Nn=`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer <code>prepare_for_model</code> method.`,Uo,W,Pe,Io,vt,Vn="Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence",qo,fe,Wo,$t,Sn="If <code>token_ids_1</code> is <code>None</code>, this method only returns the first portion of the mask (0s).",No,zt,Ee,io,He,lo,R,Oe,Vo,Bt,Zn=`The bare RoCBert Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,So,Rt,Ln=`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in <a href="https://arxiv.org/abs/1706.03762" rel="nofollow">Attention is
all you need</a> by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`,Zo,xt,Xn=`To behave as an decoder the model needs to be initialized with the <code>is_decoder</code> argument of the configuration set
to <code>True</code>. To be used in a Seq2Seq model, the model needs to be initialized with both <code>is_decoder</code> argument and
<code>add_cross_attention</code> set to <code>True</code>; an <code>encoder_hidden_states</code> is then expected as an input to the forward pass.`,Lo,N,De,Xo,jt,Gn='The <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertModel">RoCBertModel</a> forward method, overrides the <code>__call__</code> special method.',Go,ge,Qo,_e,co,Ye,po,J,Ke,Ao,Jt,Qn="RoCBert Model with contrastive loss and masked_lm_loss during the pretraining.",Po,Ft,An=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,Eo,V,et,Ho,Ut,Pn='The <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertForPreTraining">RoCBertForPreTraining</a> forward method, overrides the <code>__call__</code> special method.',Oo,be,Do,Te,mo,tt,ho,G,ot,Yo,It,En=`RoCBert Model with a <code>language modeling</code> head on top for CLM fine-tuning.
This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,Ko,S,nt,en,qt,Hn='The <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertForCausalLM">RoCBertForCausalLM</a> forward method, overrides the <code>__call__</code> special method.',tn,ke,on,ye,uo,st,fo,Q,at,nn,Wt,On=`RoCBert Model with a <code>language modeling</code> head on top.
This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,sn,se,rt,an,Nt,Dn='The <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertForMaskedLM">RoCBertForMaskedLM</a> forward method, overrides the <code>__call__</code> special method.',rn,Me,go,it,_o,A,lt,ln,Vt,Yn=`RoCBert Model transformer with a sequence classification/regression head on top (a linear layer on top of
the pooled output) e.g. for GLUE tasks.
This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,dn,x,dt,cn,St,Kn='The <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertForSequenceClassification">RoCBertForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',pn,we,mn,Ce,hn,ve,bo,ct,To,P,pt,un,Zt,es=`RoCBert Model with a multiple choice classification head on top (a linear layer on top of
the pooled output and a softmax) e.g. for RocStories/SWAG tasks.
This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,fn,Z,mt,gn,Lt,ts='The <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertForMultipleChoice">RoCBertForMultipleChoice</a> forward method, overrides the <code>__call__</code> special method.',_n,$e,bn,ze,ko,ht,yo,E,ut,Tn,Xt,os=`RoCBert Model with a token classification head on top (a linear layer on top of
the hidden-states output) e.g. for Named-Entity-Recognition (NER) tasks.
This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,kn,L,ft,yn,Gt,ns='The <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertForTokenClassification">RoCBertForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',Mn,Be,wn,Re,Mo,gt,wo,H,_t,Cn,Qt,ss=`RoCBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).
This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,vn,X,bt,$n,At,as='The <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertForQuestionAnswering">RoCBertForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',zn,xe,Bn,je,Co,Ht,vo;return k=new q({props:{title:"RoCBert",local:"rocbert",headingTag:"h1"}}),M=new q({props:{title:"Overview",local:"overview",headingTag:"h2"}}),Ve=new q({props:{title:"Resources",local:"resources",headingTag:"h2"}}),Ze=new q({props:{title:"RoCBertConfig",local:"transformers.RoCBertConfig",headingTag:"h2"}}),Le=new $({props:{name:"class transformers.RoCBertConfig",anchor:"transformers.RoCBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"use_cache",val:" = True"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"classifier_dropout",val:" = None"},{name:"enable_pronunciation",val:" = True"},{name:"enable_shape",val:" = True"},{name:"pronunciation_embed_dim",val:" = 768"},{name:"pronunciation_vocab_size",val:" = 910"},{name:"shape_embed_dim",val:" = 512"},{name:"shape_vocab_size",val:" = 24858"},{name:"concat_input",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RoCBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the RoCBert model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertModel">RoCBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.RoCBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.RoCBertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.RoCBertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.RoCBertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.RoCBertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.RoCBertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.RoCBertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.RoCBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.RoCBertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertModel">RoCBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.RoCBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.RoCBertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.RoCBertConfig.is_decoder",description:`<strong>is_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model is used as a decoder or not. If <code>False</code>, the model is used as an encoder.`,name:"is_decoder"},{anchor:"transformers.RoCBertConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.RoCBertConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.RoCBertConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"},{anchor:"transformers.RoCBertConfig.enable_pronunciation",description:`<strong>enable_pronunciation</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model use pronunciation embed when training.`,name:"enable_pronunciation"},{anchor:"transformers.RoCBertConfig.enable_shape",description:`<strong>enable_shape</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model use shape embed when training.`,name:"enable_shape"},{anchor:"transformers.RoCBertConfig.pronunciation_embed_dim",description:`<strong>pronunciation_embed_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the pronunciation_embed.`,name:"pronunciation_embed_dim"},{anchor:"transformers.RoCBertConfig.pronunciation_vocab_size",description:`<strong>pronunciation_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 910) &#x2014;
Pronunciation Vocabulary size of the RoCBert model. Defines the number of different tokens that can be
represented by the <code>input_pronunciation_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertModel">RoCBertModel</a>.`,name:"pronunciation_vocab_size"},{anchor:"transformers.RoCBertConfig.shape_embed_dim",description:`<strong>shape_embed_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimension of the shape_embed.`,name:"shape_embed_dim"},{anchor:"transformers.RoCBertConfig.shape_vocab_size",description:`<strong>shape_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 24858) &#x2014;
Shape Vocabulary size of the RoCBert model. Defines the number of different tokens that can be represented
by the <code>input_shape_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertModel">RoCBertModel</a>.`,name:"shape_vocab_size"},{anchor:"transformers.RoCBertConfig.concat_input",description:`<strong>concat_input</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Defines the way of merging the shape_embed, pronunciation_embed and word_embed, if the value is true,
output_embed = torch.cat((word_embed, shape_embed, pronunciation_embed), -1), else output_embed =
(word_embed + shape_embed + pronunciation_embed) / 3
Example &#x2014;`,name:"concat_input"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roc_bert/configuration_roc_bert.py#L28"}}),he=new ae({props:{anchor:"transformers.RoCBertConfig.example",$$slots:{default:[ps]},$$scope:{ctx:w}}}),Xe=new q({props:{title:"RoCBertTokenizer",local:"transformers.RoCBertTokenizer",headingTag:"h2"}}),Ge=new $({props:{name:"class transformers.RoCBertTokenizer",anchor:"transformers.RoCBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"word_shape_file",val:""},{name:"word_pronunciation_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RoCBertTokenizer.Construct",description:'<strong>Construct</strong> a RoCBert tokenizer. Based on WordPiece. This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which &#x2014;',name:"Construct"},{anchor:"transformers.RoCBertTokenizer.contains",description:`<strong>contains</strong> most of the main methods. Users should refer to this superclass for more information regarding those &#x2014;
methods. &#x2014;
vocab_file (<code>str</code>):
File containing the vocabulary.
word_shape_file (<code>str</code>):
File containing the word =&gt; shape info.
word_pronunciation_file (<code>str</code>):
File containing the word =&gt; pronunciation info.
do_lower_case (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>):
Whether or not to lowercase the input when tokenizing.
do_basic_tokenize (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>):
Whether or not to do basic tokenization before WordPiece.
never_split (<code>Iterable</code>, <em>optional</em>):
Collection of tokens which will never be split during tokenization. Only has an effect when
<code>do_basic_tokenize=True</code>
unk_token (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>):
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.
sep_token (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>):
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.
pad_token (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>):
The token used for padding, for example when batching sequences of different lengths.
cls_token (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>):
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.
mask_token (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>):
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.
tokenize_chinese_chars (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>):
Whether or not to tokenize Chinese characters. This should likely be deactivated for Japanese (see this
<a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">issue</a>).
strip_accents (<code>bool</code>, <em>optional</em>):
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"contains"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roc_bert/tokenization_roc_bert.py#L95"}}),Qe=new $({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RoCBertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"},{name:"cls_token_id",val:": int = None"},{name:"sep_token_id",val:": int = None"}],parametersDescription:[{anchor:"transformers.RoCBertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RoCBertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roc_bert/tokenization_roc_bert.py#L783",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Ae=new $({props:{name:"get_special_tokens_mask",anchor:"transformers.RoCBertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.RoCBertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RoCBertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.RoCBertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roc_bert/tokenization_roc_bert.py#L813",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Pe=new $({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.RoCBertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.RoCBertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RoCBertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roc_bert/tokenization_roc_bert.py#L842",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),fe=new ae({props:{anchor:"transformers.RoCBertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[ms]},$$scope:{ctx:w}}}),Ee=new $({props:{name:"save_vocabulary",anchor:"transformers.RoCBertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roc_bert/tokenization_roc_bert.py#L871"}}),He=new q({props:{title:"RoCBertModel",local:"transformers.RoCBertModel",headingTag:"h2"}}),Oe=new $({props:{name:"class transformers.RoCBertModel",anchor:"transformers.RoCBertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.RoCBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertConfig">RoCBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roc_bert/modeling_roc_bert.py#L871"}}),De=new $({props:{name:"forward",anchor:"transformers.RoCBertModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"input_shape_ids",val:": Optional = None"},{name:"input_pronunciation_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.RoCBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoCBertModel.forward.input_shape_ids",description:`<strong>input_shape_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the shape vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input_shape_ids">What are input IDs?</a>`,name:"input_shape_ids"},{anchor:"transformers.RoCBertModel.forward.input_pronunciation_ids",description:`<strong>input_pronunciation_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the pronunciation vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input_pronunciation_ids">What are input IDs?</a>`,name:"input_pronunciation_ids"},{anchor:"transformers.RoCBertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoCBertModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoCBertModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RoCBertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoCBertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoCBertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoCBertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoCBertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoCBertModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.RoCBertModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.RoCBertModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.RoCBertModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roc_bert/modeling_roc_bert.py#L930",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertConfig"
>RoCBertConfig</a>) and inputs.</p>
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
`}}),ge=new Ue({props:{$$slots:{default:[hs]},$$scope:{ctx:w}}}),_e=new ae({props:{anchor:"transformers.RoCBertModel.forward.example",$$slots:{default:[us]},$$scope:{ctx:w}}}),Ye=new q({props:{title:"RoCBertForPreTraining",local:"transformers.RoCBertForPreTraining",headingTag:"h2"}}),Ke=new $({props:{name:"class transformers.RoCBertForPreTraining",anchor:"transformers.RoCBertForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoCBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertConfig">RoCBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roc_bert/modeling_roc_bert.py#L1071"}}),et=new $({props:{name:"forward",anchor:"transformers.RoCBertForPreTraining.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"input_shape_ids",val:": Optional = None"},{name:"input_pronunciation_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"attack_input_ids",val:": Optional = None"},{name:"attack_input_shape_ids",val:": Optional = None"},{name:"attack_input_pronunciation_ids",val:": Optional = None"},{name:"attack_attention_mask",val:": Optional = None"},{name:"attack_token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels_input_ids",val:": Optional = None"},{name:"labels_input_shape_ids",val:": Optional = None"},{name:"labels_input_pronunciation_ids",val:": Optional = None"},{name:"labels_attention_mask",val:": Optional = None"},{name:"labels_token_type_ids",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RoCBertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoCBertForPreTraining.forward.input_shape_ids",description:`<strong>input_shape_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the shape vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input_shape_ids">What are input IDs?</a>`,name:"input_shape_ids"},{anchor:"transformers.RoCBertForPreTraining.forward.input_pronunciation_ids",description:`<strong>input_pronunciation_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the pronunciation vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input_pronunciation_ids">What are input IDs?</a>`,name:"input_pronunciation_ids"},{anchor:"transformers.RoCBertForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoCBertForPreTraining.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoCBertForPreTraining.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RoCBertForPreTraining.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoCBertForPreTraining.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoCBertForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoCBertForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoCBertForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.</p>
<p>attack_input_ids (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>):
attack sample ids for computing the contrastive loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked),
the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>
attack_input_shape_ids (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>):
attack sample shape ids for computing the contrastive loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked),
the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>
attack_input_pronunciation_ids (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>):
attack sample pronunciation ids for computing the contrastive loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>
labels_input_ids (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>):
target ids for computing the contrastive loss and masked_lm_loss . Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked),
the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>
labels_input_shape_ids (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>):
target shape ids for computing the contrastive loss and masked_lm_loss . Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>
labels_input_pronunciation_ids (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>):
target pronunciation ids for computing the contrastive loss and masked_lm_loss . Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code></p>
<p>kwargs (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>):
Used to hide legacy arguments that have been deprecated.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roc_bert/modeling_roc_bert.py#L1098",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertConfig"
>RoCBertConfig</a>) and inputs.</p>
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
`}}),be=new Ue({props:{$$slots:{default:[fs]},$$scope:{ctx:w}}}),Te=new ae({props:{anchor:"transformers.RoCBertForPreTraining.forward.example",$$slots:{default:[gs]},$$scope:{ctx:w}}}),tt=new q({props:{title:"RoCBertForCausalLM",local:"transformers.RoCBertForCausalLM",headingTag:"h2"}}),ot=new $({props:{name:"class transformers.RoCBertForCausalLM",anchor:"transformers.RoCBertForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoCBertForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertConfig">RoCBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roc_bert/modeling_roc_bert.py#L1401"}}),nt=new $({props:{name:"forward",anchor:"transformers.RoCBertForCausalLM.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"input_shape_ids",val:": Optional = None"},{name:"input_pronunciation_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.RoCBertForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoCBertForCausalLM.forward.input_shape_ids",description:`<strong>input_shape_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the shape vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input_shape_ids">What are input IDs?</a>`,name:"input_shape_ids"},{anchor:"transformers.RoCBertForCausalLM.forward.input_pronunciation_ids",description:`<strong>input_pronunciation_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the pronunciation vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input_pronunciation_ids">What are input IDs?</a>`,name:"input_pronunciation_ids"},{anchor:"transformers.RoCBertForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoCBertForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoCBertForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RoCBertForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoCBertForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoCBertForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoCBertForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoCBertForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoCBertForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.RoCBertForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.RoCBertForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>. The two additional tensors are
only required when the model is used as a decoder in a Sequence to Sequence model.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.RoCBertForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels n <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.RoCBertForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roc_bert/modeling_roc_bert.py#L1429",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertConfig"
>RoCBertConfig</a>) and inputs.</p>
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
`}}),ke=new Ue({props:{$$slots:{default:[_s]},$$scope:{ctx:w}}}),ye=new ae({props:{anchor:"transformers.RoCBertForCausalLM.forward.example",$$slots:{default:[bs]},$$scope:{ctx:w}}}),st=new q({props:{title:"RoCBertForMaskedLM",local:"transformers.RoCBertForMaskedLM",headingTag:"h2"}}),at=new $({props:{name:"class transformers.RoCBertForMaskedLM",anchor:"transformers.RoCBertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoCBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertConfig">RoCBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roc_bert/modeling_roc_bert.py#L1262"}}),rt=new $({props:{name:"forward",anchor:"transformers.RoCBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"input_shape_ids",val:": Optional = None"},{name:"input_pronunciation_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.RoCBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoCBertForMaskedLM.forward.input_shape_ids",description:`<strong>input_shape_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the shape vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input_shape_ids">What are input IDs?</a>`,name:"input_shape_ids"},{anchor:"transformers.RoCBertForMaskedLM.forward.input_pronunciation_ids",description:`<strong>input_pronunciation_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the pronunciation vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input_pronunciation_ids">What are input IDs?</a>`,name:"input_pronunciation_ids"},{anchor:"transformers.RoCBertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoCBertForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoCBertForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RoCBertForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoCBertForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoCBertForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoCBertForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoCBertForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoCBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.</p>
<p>Example &#x2014;`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roc_bert/modeling_roc_bert.py#L1291"}}),Me=new Ue({props:{$$slots:{default:[Ts]},$$scope:{ctx:w}}}),it=new q({props:{title:"RoCBertForSequenceClassification",local:"transformers.RoCBertForSequenceClassification",headingTag:"h2"}}),lt=new $({props:{name:"class transformers.RoCBertForSequenceClassification",anchor:"transformers.RoCBertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoCBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertConfig">RoCBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roc_bert/modeling_roc_bert.py#L1593"}}),dt=new $({props:{name:"forward",anchor:"transformers.RoCBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"input_shape_ids",val:": Optional = None"},{name:"input_pronunciation_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.RoCBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoCBertForSequenceClassification.forward.input_shape_ids",description:`<strong>input_shape_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the shape vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input_shape_ids">What are input IDs?</a>`,name:"input_shape_ids"},{anchor:"transformers.RoCBertForSequenceClassification.forward.input_pronunciation_ids",description:`<strong>input_pronunciation_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the pronunciation vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input_pronunciation_ids">What are input IDs?</a>`,name:"input_pronunciation_ids"},{anchor:"transformers.RoCBertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoCBertForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoCBertForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RoCBertForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoCBertForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoCBertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoCBertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoCBertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoCBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roc_bert/modeling_roc_bert.py#L1615",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertConfig"
>RoCBertConfig</a>) and inputs.</p>
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
`}}),we=new Ue({props:{$$slots:{default:[ks]},$$scope:{ctx:w}}}),Ce=new ae({props:{anchor:"transformers.RoCBertForSequenceClassification.forward.example",$$slots:{default:[ys]},$$scope:{ctx:w}}}),ve=new ae({props:{anchor:"transformers.RoCBertForSequenceClassification.forward.example-2",$$slots:{default:[Ms]},$$scope:{ctx:w}}}),ct=new q({props:{title:"RoCBertForMultipleChoice",local:"transformers.RoCBertForMultipleChoice",headingTag:"h2"}}),pt=new $({props:{name:"class transformers.RoCBertForMultipleChoice",anchor:"transformers.RoCBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoCBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertConfig">RoCBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roc_bert/modeling_roc_bert.py#L1699"}}),mt=new $({props:{name:"forward",anchor:"transformers.RoCBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"input_shape_ids",val:": Optional = None"},{name:"input_pronunciation_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.RoCBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoCBertForMultipleChoice.forward.input_shape_ids",description:`<strong>input_shape_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the shape vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input_shape_ids">What are input IDs?</a>`,name:"input_shape_ids"},{anchor:"transformers.RoCBertForMultipleChoice.forward.input_pronunciation_ids",description:`<strong>input_pronunciation_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the pronunciation vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input_pronunciation_ids">What are input IDs?</a>`,name:"input_pronunciation_ids"},{anchor:"transformers.RoCBertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoCBertForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoCBertForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RoCBertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoCBertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoCBertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoCBertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoCBertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoCBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roc_bert/modeling_roc_bert.py#L1719",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertConfig"
>RoCBertConfig</a>) and inputs.</p>
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
`}}),$e=new Ue({props:{$$slots:{default:[ws]},$$scope:{ctx:w}}}),ze=new ae({props:{anchor:"transformers.RoCBertForMultipleChoice.forward.example",$$slots:{default:[Cs]},$$scope:{ctx:w}}}),ht=new q({props:{title:"RoCBertForTokenClassification",local:"transformers.RoCBertForTokenClassification",headingTag:"h2"}}),ut=new $({props:{name:"class transformers.RoCBertForTokenClassification",anchor:"transformers.RoCBertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoCBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertConfig">RoCBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roc_bert/modeling_roc_bert.py#L1804"}}),ft=new $({props:{name:"forward",anchor:"transformers.RoCBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"input_shape_ids",val:": Optional = None"},{name:"input_pronunciation_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.RoCBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoCBertForTokenClassification.forward.input_shape_ids",description:`<strong>input_shape_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the shape vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input_shape_ids">What are input IDs?</a>`,name:"input_shape_ids"},{anchor:"transformers.RoCBertForTokenClassification.forward.input_pronunciation_ids",description:`<strong>input_pronunciation_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the pronunciation vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input_pronunciation_ids">What are input IDs?</a>`,name:"input_pronunciation_ids"},{anchor:"transformers.RoCBertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoCBertForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoCBertForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RoCBertForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoCBertForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoCBertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoCBertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoCBertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoCBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roc_bert/modeling_roc_bert.py#L1825",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertConfig"
>RoCBertConfig</a>) and inputs.</p>
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
`}}),Be=new Ue({props:{$$slots:{default:[vs]},$$scope:{ctx:w}}}),Re=new ae({props:{anchor:"transformers.RoCBertForTokenClassification.forward.example",$$slots:{default:[$s]},$$scope:{ctx:w}}}),gt=new q({props:{title:"RoCBertForQuestionAnswering",local:"transformers.RoCBertForQuestionAnswering",headingTag:"h2"}}),_t=new $({props:{name:"class transformers.RoCBertForQuestionAnswering",anchor:"transformers.RoCBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RoCBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertConfig">RoCBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roc_bert/modeling_roc_bert.py#L1890"}}),bt=new $({props:{name:"forward",anchor:"transformers.RoCBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"input_shape_ids",val:": Optional = None"},{name:"input_pronunciation_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"start_positions",val:": Optional = None"},{name:"end_positions",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.RoCBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RoCBertForQuestionAnswering.forward.input_shape_ids",description:`<strong>input_shape_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the shape vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input_shape_ids">What are input IDs?</a>`,name:"input_shape_ids"},{anchor:"transformers.RoCBertForQuestionAnswering.forward.input_pronunciation_ids",description:`<strong>input_pronunciation_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the pronunciation vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input_pronunciation_ids">What are input IDs?</a>`,name:"input_pronunciation_ids"},{anchor:"transformers.RoCBertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RoCBertForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RoCBertForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RoCBertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RoCBertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RoCBertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RoCBertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RoCBertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RoCBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.RoCBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/roc_bert/modeling_roc_bert.py#L1907",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roc_bert#transformers.RoCBertConfig"
>RoCBertConfig</a>) and inputs.</p>
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
`}}),xe=new Ue({props:{$$slots:{default:[zs]},$$scope:{ctx:w}}}),je=new ae({props:{anchor:"transformers.RoCBertForQuestionAnswering.forward.example",$$slots:{default:[Bs]},$$scope:{ctx:w}}}),{c(){t=c("meta"),T=i(),n=c("p"),d=i(),h(k.$$.fragment),o=i(),h(M.$$.fragment),Dt=i(),Ie=c("p"),Ie.innerHTML=Rn,Yt=i(),qe=c("p"),qe.textContent=xn,Kt=i(),We=c("p"),We.innerHTML=jn,eo=i(),Ne=c("p"),Ne.innerHTML=Jn,to=i(),h(Ve.$$.fragment),oo=i(),Se=c("ul"),Se.innerHTML=Fn,no=i(),h(Ze.$$.fragment),so=i(),j=c("div"),h(Le.$$.fragment),$o=i(),kt=c("p"),kt.innerHTML=Un,zo=i(),yt=c("p"),yt.innerHTML=In,Bo=i(),h(he.$$.fragment),ao=i(),h(Xe.$$.fragment),ro=i(),B=c("div"),h(Ge.$$.fragment),Ro=i(),ne=c("div"),h(Qe.$$.fragment),xo=i(),Mt=c("p"),Mt.textContent=qn,jo=i(),wt=c("ul"),wt.innerHTML=Wn,Jo=i(),ue=c("div"),h(Ae.$$.fragment),Fo=i(),Ct=c("p"),Ct.innerHTML=Nn,Uo=i(),W=c("div"),h(Pe.$$.fragment),Io=i(),vt=c("p"),vt.textContent=Vn,qo=i(),h(fe.$$.fragment),Wo=i(),$t=c("p"),$t.innerHTML=Sn,No=i(),zt=c("div"),h(Ee.$$.fragment),io=i(),h(He.$$.fragment),lo=i(),R=c("div"),h(Oe.$$.fragment),Vo=i(),Bt=c("p"),Bt.innerHTML=Zn,So=i(),Rt=c("p"),Rt.innerHTML=Ln,Zo=i(),xt=c("p"),xt.innerHTML=Xn,Lo=i(),N=c("div"),h(De.$$.fragment),Xo=i(),jt=c("p"),jt.innerHTML=Gn,Go=i(),h(ge.$$.fragment),Qo=i(),h(_e.$$.fragment),co=i(),h(Ye.$$.fragment),po=i(),J=c("div"),h(Ke.$$.fragment),Ao=i(),Jt=c("p"),Jt.textContent=Qn,Po=i(),Ft=c("p"),Ft.innerHTML=An,Eo=i(),V=c("div"),h(et.$$.fragment),Ho=i(),Ut=c("p"),Ut.innerHTML=Pn,Oo=i(),h(be.$$.fragment),Do=i(),h(Te.$$.fragment),mo=i(),h(tt.$$.fragment),ho=i(),G=c("div"),h(ot.$$.fragment),Yo=i(),It=c("p"),It.innerHTML=En,Ko=i(),S=c("div"),h(nt.$$.fragment),en=i(),qt=c("p"),qt.innerHTML=Hn,tn=i(),h(ke.$$.fragment),on=i(),h(ye.$$.fragment),uo=i(),h(st.$$.fragment),fo=i(),Q=c("div"),h(at.$$.fragment),nn=i(),Wt=c("p"),Wt.innerHTML=On,sn=i(),se=c("div"),h(rt.$$.fragment),an=i(),Nt=c("p"),Nt.innerHTML=Dn,rn=i(),h(Me.$$.fragment),go=i(),h(it.$$.fragment),_o=i(),A=c("div"),h(lt.$$.fragment),ln=i(),Vt=c("p"),Vt.innerHTML=Yn,dn=i(),x=c("div"),h(dt.$$.fragment),cn=i(),St=c("p"),St.innerHTML=Kn,pn=i(),h(we.$$.fragment),mn=i(),h(Ce.$$.fragment),hn=i(),h(ve.$$.fragment),bo=i(),h(ct.$$.fragment),To=i(),P=c("div"),h(pt.$$.fragment),un=i(),Zt=c("p"),Zt.innerHTML=es,fn=i(),Z=c("div"),h(mt.$$.fragment),gn=i(),Lt=c("p"),Lt.innerHTML=ts,_n=i(),h($e.$$.fragment),bn=i(),h(ze.$$.fragment),ko=i(),h(ht.$$.fragment),yo=i(),E=c("div"),h(ut.$$.fragment),Tn=i(),Xt=c("p"),Xt.innerHTML=os,kn=i(),L=c("div"),h(ft.$$.fragment),yn=i(),Gt=c("p"),Gt.innerHTML=ns,Mn=i(),h(Be.$$.fragment),wn=i(),h(Re.$$.fragment),Mo=i(),h(gt.$$.fragment),wo=i(),H=c("div"),h(_t.$$.fragment),Cn=i(),Qt=c("p"),Qt.innerHTML=ss,vn=i(),X=c("div"),h(bt.$$.fragment),$n=i(),At=c("p"),At.innerHTML=as,zn=i(),h(xe.$$.fragment),Bn=i(),h(je.$$.fragment),Co=i(),Ht=c("p"),this.h()},l(e){const s=cs("svelte-u9bgzb",document.head);t=p(s,"META",{name:!0,content:!0}),s.forEach(a),T=l(e),n=p(e,"P",{}),C(n).forEach(a),d=l(e),u(k.$$.fragment,e),o=l(e),u(M.$$.fragment,e),Dt=l(e),Ie=p(e,"P",{"data-svelte-h":!0}),y(Ie)!=="svelte-q45a2g"&&(Ie.innerHTML=Rn),Yt=l(e),qe=p(e,"P",{"data-svelte-h":!0}),y(qe)!=="svelte-vfdo9a"&&(qe.textContent=xn),Kt=l(e),We=p(e,"P",{"data-svelte-h":!0}),y(We)!=="svelte-vurwxc"&&(We.innerHTML=jn),eo=l(e),Ne=p(e,"P",{"data-svelte-h":!0}),y(Ne)!=="svelte-bnfzo9"&&(Ne.innerHTML=Jn),to=l(e),u(Ve.$$.fragment,e),oo=l(e),Se=p(e,"UL",{"data-svelte-h":!0}),y(Se)!=="svelte-p1b16m"&&(Se.innerHTML=Fn),no=l(e),u(Ze.$$.fragment,e),so=l(e),j=p(e,"DIV",{class:!0});var O=C(j);u(Le.$$.fragment,O),$o=l(O),kt=p(O,"P",{"data-svelte-h":!0}),y(kt)!=="svelte-dn3nhl"&&(kt.innerHTML=Un),zo=l(O),yt=p(O,"P",{"data-svelte-h":!0}),y(yt)!=="svelte-o55m63"&&(yt.innerHTML=In),Bo=l(O),u(he.$$.fragment,O),O.forEach(a),ao=l(e),u(Xe.$$.fragment,e),ro=l(e),B=p(e,"DIV",{class:!0});var F=C(B);u(Ge.$$.fragment,F),Ro=l(F),ne=p(F,"DIV",{class:!0});var ie=C(ne);u(Qe.$$.fragment,ie),xo=l(ie),Mt=p(ie,"P",{"data-svelte-h":!0}),y(Mt)!=="svelte-t7qurq"&&(Mt.textContent=qn),jo=l(ie),wt=p(ie,"UL",{"data-svelte-h":!0}),y(wt)!=="svelte-xi6653"&&(wt.innerHTML=Wn),ie.forEach(a),Jo=l(F),ue=p(F,"DIV",{class:!0});var Tt=C(ue);u(Ae.$$.fragment,Tt),Fo=l(Tt),Ct=p(Tt,"P",{"data-svelte-h":!0}),y(Ct)!=="svelte-1f4f5kp"&&(Ct.innerHTML=Nn),Tt.forEach(a),Uo=l(F),W=p(F,"DIV",{class:!0});var D=C(W);u(Pe.$$.fragment,D),Io=l(D),vt=p(D,"P",{"data-svelte-h":!0}),y(vt)!=="svelte-gn6wi7"&&(vt.textContent=Vn),qo=l(D),u(fe.$$.fragment,D),Wo=l(D),$t=p(D,"P",{"data-svelte-h":!0}),y($t)!=="svelte-owoxgn"&&($t.innerHTML=Sn),D.forEach(a),No=l(F),zt=p(F,"DIV",{class:!0});var Ot=C(zt);u(Ee.$$.fragment,Ot),Ot.forEach(a),F.forEach(a),io=l(e),u(He.$$.fragment,e),lo=l(e),R=p(e,"DIV",{class:!0});var U=C(R);u(Oe.$$.fragment,U),Vo=l(U),Bt=p(U,"P",{"data-svelte-h":!0}),y(Bt)!=="svelte-14zbuqb"&&(Bt.innerHTML=Zn),So=l(U),Rt=p(U,"P",{"data-svelte-h":!0}),y(Rt)!=="svelte-1du13oj"&&(Rt.innerHTML=Ln),Zo=l(U),xt=p(U,"P",{"data-svelte-h":!0}),y(xt)!=="svelte-1c0aj2z"&&(xt.innerHTML=Xn),Lo=l(U),N=p(U,"DIV",{class:!0});var Y=C(N);u(De.$$.fragment,Y),Xo=l(Y),jt=p(Y,"P",{"data-svelte-h":!0}),y(jt)!=="svelte-1e5e6zp"&&(jt.innerHTML=Gn),Go=l(Y),u(ge.$$.fragment,Y),Qo=l(Y),u(_e.$$.fragment,Y),Y.forEach(a),U.forEach(a),co=l(e),u(Ye.$$.fragment,e),po=l(e),J=p(e,"DIV",{class:!0});var K=C(J);u(Ke.$$.fragment,K),Ao=l(K),Jt=p(K,"P",{"data-svelte-h":!0}),y(Jt)!=="svelte-1nv57qw"&&(Jt.textContent=Qn),Po=l(K),Ft=p(K,"P",{"data-svelte-h":!0}),y(Ft)!=="svelte-68lg8f"&&(Ft.innerHTML=An),Eo=l(K),V=p(K,"DIV",{class:!0});var ee=C(V);u(et.$$.fragment,ee),Ho=l(ee),Ut=p(ee,"P",{"data-svelte-h":!0}),y(Ut)!=="svelte-ztr2rh"&&(Ut.innerHTML=Pn),Oo=l(ee),u(be.$$.fragment,ee),Do=l(ee),u(Te.$$.fragment,ee),ee.forEach(a),K.forEach(a),mo=l(e),u(tt.$$.fragment,e),ho=l(e),G=p(e,"DIV",{class:!0});var le=C(G);u(ot.$$.fragment,le),Yo=l(le),It=p(le,"P",{"data-svelte-h":!0}),y(It)!=="svelte-nt8p8p"&&(It.innerHTML=En),Ko=l(le),S=p(le,"DIV",{class:!0});var te=C(S);u(nt.$$.fragment,te),en=l(te),qt=p(te,"P",{"data-svelte-h":!0}),y(qt)!=="svelte-54vbk5"&&(qt.innerHTML=Hn),tn=l(te),u(ke.$$.fragment,te),on=l(te),u(ye.$$.fragment,te),te.forEach(a),le.forEach(a),uo=l(e),u(st.$$.fragment,e),fo=l(e),Q=p(e,"DIV",{class:!0});var de=C(Q);u(at.$$.fragment,de),nn=l(de),Wt=p(de,"P",{"data-svelte-h":!0}),y(Wt)!=="svelte-24be2"&&(Wt.innerHTML=On),sn=l(de),se=p(de,"DIV",{class:!0});var ce=C(se);u(rt.$$.fragment,ce),an=l(ce),Nt=p(ce,"P",{"data-svelte-h":!0}),y(Nt)!=="svelte-10ey21x"&&(Nt.innerHTML=Dn),rn=l(ce),u(Me.$$.fragment,ce),ce.forEach(a),de.forEach(a),go=l(e),u(it.$$.fragment,e),_o=l(e),A=p(e,"DIV",{class:!0});var pe=C(A);u(lt.$$.fragment,pe),ln=l(pe),Vt=p(pe,"P",{"data-svelte-h":!0}),y(Vt)!=="svelte-d54qpk"&&(Vt.innerHTML=Yn),dn=l(pe),x=p(pe,"DIV",{class:!0});var I=C(x);u(dt.$$.fragment,I),cn=l(I),St=p(I,"P",{"data-svelte-h":!0}),y(St)!=="svelte-17fbqmz"&&(St.innerHTML=Kn),pn=l(I),u(we.$$.fragment,I),mn=l(I),u(Ce.$$.fragment,I),hn=l(I),u(ve.$$.fragment,I),I.forEach(a),pe.forEach(a),bo=l(e),u(ct.$$.fragment,e),To=l(e),P=p(e,"DIV",{class:!0});var me=C(P);u(pt.$$.fragment,me),un=l(me),Zt=p(me,"P",{"data-svelte-h":!0}),y(Zt)!=="svelte-114xgi2"&&(Zt.innerHTML=es),fn=l(me),Z=p(me,"DIV",{class:!0});var oe=C(Z);u(mt.$$.fragment,oe),gn=l(oe),Lt=p(oe,"P",{"data-svelte-h":!0}),y(Lt)!=="svelte-edcl1b"&&(Lt.innerHTML=ts),_n=l(oe),u($e.$$.fragment,oe),bn=l(oe),u(ze.$$.fragment,oe),oe.forEach(a),me.forEach(a),ko=l(e),u(ht.$$.fragment,e),yo=l(e),E=p(e,"DIV",{class:!0});var Pt=C(E);u(ut.$$.fragment,Pt),Tn=l(Pt),Xt=p(Pt,"P",{"data-svelte-h":!0}),y(Xt)!=="svelte-193b8wj"&&(Xt.innerHTML=os),kn=l(Pt),L=p(Pt,"DIV",{class:!0});var Je=C(L);u(ft.$$.fragment,Je),yn=l(Je),Gt=p(Je,"P",{"data-svelte-h":!0}),y(Gt)!=="svelte-bv7rjd"&&(Gt.innerHTML=ns),Mn=l(Je),u(Be.$$.fragment,Je),wn=l(Je),u(Re.$$.fragment,Je),Je.forEach(a),Pt.forEach(a),Mo=l(e),u(gt.$$.fragment,e),wo=l(e),H=p(e,"DIV",{class:!0});var Et=C(H);u(_t.$$.fragment,Et),Cn=l(Et),Qt=p(Et,"P",{"data-svelte-h":!0}),y(Qt)!=="svelte-wfxdil"&&(Qt.innerHTML=ss),vn=l(Et),X=p(Et,"DIV",{class:!0});var Fe=C(X);u(bt.$$.fragment,Fe),$n=l(Fe),At=p(Fe,"P",{"data-svelte-h":!0}),y(At)!=="svelte-1m92d5t"&&(At.innerHTML=as),zn=l(Fe),u(xe.$$.fragment,Fe),Bn=l(Fe),u(je.$$.fragment,Fe),Fe.forEach(a),Et.forEach(a),Co=l(e),Ht=p(e,"P",{}),C(Ht).forEach(a),this.h()},h(){v(t,"name","hf:doc:metadata"),v(t,"content",xs),v(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,s){r(document.head,t),m(e,T,s),m(e,n,s),m(e,d,s),f(k,e,s),m(e,o,s),f(M,e,s),m(e,Dt,s),m(e,Ie,s),m(e,Yt,s),m(e,qe,s),m(e,Kt,s),m(e,We,s),m(e,eo,s),m(e,Ne,s),m(e,to,s),f(Ve,e,s),m(e,oo,s),m(e,Se,s),m(e,no,s),f(Ze,e,s),m(e,so,s),m(e,j,s),f(Le,j,null),r(j,$o),r(j,kt),r(j,zo),r(j,yt),r(j,Bo),f(he,j,null),m(e,ao,s),f(Xe,e,s),m(e,ro,s),m(e,B,s),f(Ge,B,null),r(B,Ro),r(B,ne),f(Qe,ne,null),r(ne,xo),r(ne,Mt),r(ne,jo),r(ne,wt),r(B,Jo),r(B,ue),f(Ae,ue,null),r(ue,Fo),r(ue,Ct),r(B,Uo),r(B,W),f(Pe,W,null),r(W,Io),r(W,vt),r(W,qo),f(fe,W,null),r(W,Wo),r(W,$t),r(B,No),r(B,zt),f(Ee,zt,null),m(e,io,s),f(He,e,s),m(e,lo,s),m(e,R,s),f(Oe,R,null),r(R,Vo),r(R,Bt),r(R,So),r(R,Rt),r(R,Zo),r(R,xt),r(R,Lo),r(R,N),f(De,N,null),r(N,Xo),r(N,jt),r(N,Go),f(ge,N,null),r(N,Qo),f(_e,N,null),m(e,co,s),f(Ye,e,s),m(e,po,s),m(e,J,s),f(Ke,J,null),r(J,Ao),r(J,Jt),r(J,Po),r(J,Ft),r(J,Eo),r(J,V),f(et,V,null),r(V,Ho),r(V,Ut),r(V,Oo),f(be,V,null),r(V,Do),f(Te,V,null),m(e,mo,s),f(tt,e,s),m(e,ho,s),m(e,G,s),f(ot,G,null),r(G,Yo),r(G,It),r(G,Ko),r(G,S),f(nt,S,null),r(S,en),r(S,qt),r(S,tn),f(ke,S,null),r(S,on),f(ye,S,null),m(e,uo,s),f(st,e,s),m(e,fo,s),m(e,Q,s),f(at,Q,null),r(Q,nn),r(Q,Wt),r(Q,sn),r(Q,se),f(rt,se,null),r(se,an),r(se,Nt),r(se,rn),f(Me,se,null),m(e,go,s),f(it,e,s),m(e,_o,s),m(e,A,s),f(lt,A,null),r(A,ln),r(A,Vt),r(A,dn),r(A,x),f(dt,x,null),r(x,cn),r(x,St),r(x,pn),f(we,x,null),r(x,mn),f(Ce,x,null),r(x,hn),f(ve,x,null),m(e,bo,s),f(ct,e,s),m(e,To,s),m(e,P,s),f(pt,P,null),r(P,un),r(P,Zt),r(P,fn),r(P,Z),f(mt,Z,null),r(Z,gn),r(Z,Lt),r(Z,_n),f($e,Z,null),r(Z,bn),f(ze,Z,null),m(e,ko,s),f(ht,e,s),m(e,yo,s),m(e,E,s),f(ut,E,null),r(E,Tn),r(E,Xt),r(E,kn),r(E,L),f(ft,L,null),r(L,yn),r(L,Gt),r(L,Mn),f(Be,L,null),r(L,wn),f(Re,L,null),m(e,Mo,s),f(gt,e,s),m(e,wo,s),m(e,H,s),f(_t,H,null),r(H,Cn),r(H,Qt),r(H,vn),r(H,X),f(bt,X,null),r(X,$n),r(X,At),r(X,zn),f(xe,X,null),r(X,Bn),f(je,X,null),m(e,Co,s),m(e,Ht,s),vo=!0},p(e,[s]){const O={};s&2&&(O.$$scope={dirty:s,ctx:e}),he.$set(O);const F={};s&2&&(F.$$scope={dirty:s,ctx:e}),fe.$set(F);const ie={};s&2&&(ie.$$scope={dirty:s,ctx:e}),ge.$set(ie);const Tt={};s&2&&(Tt.$$scope={dirty:s,ctx:e}),_e.$set(Tt);const D={};s&2&&(D.$$scope={dirty:s,ctx:e}),be.$set(D);const Ot={};s&2&&(Ot.$$scope={dirty:s,ctx:e}),Te.$set(Ot);const U={};s&2&&(U.$$scope={dirty:s,ctx:e}),ke.$set(U);const Y={};s&2&&(Y.$$scope={dirty:s,ctx:e}),ye.$set(Y);const K={};s&2&&(K.$$scope={dirty:s,ctx:e}),Me.$set(K);const ee={};s&2&&(ee.$$scope={dirty:s,ctx:e}),we.$set(ee);const le={};s&2&&(le.$$scope={dirty:s,ctx:e}),Ce.$set(le);const te={};s&2&&(te.$$scope={dirty:s,ctx:e}),ve.$set(te);const de={};s&2&&(de.$$scope={dirty:s,ctx:e}),$e.$set(de);const ce={};s&2&&(ce.$$scope={dirty:s,ctx:e}),ze.$set(ce);const pe={};s&2&&(pe.$$scope={dirty:s,ctx:e}),Be.$set(pe);const I={};s&2&&(I.$$scope={dirty:s,ctx:e}),Re.$set(I);const me={};s&2&&(me.$$scope={dirty:s,ctx:e}),xe.$set(me);const oe={};s&2&&(oe.$$scope={dirty:s,ctx:e}),je.$set(oe)},i(e){vo||(g(k.$$.fragment,e),g(M.$$.fragment,e),g(Ve.$$.fragment,e),g(Ze.$$.fragment,e),g(Le.$$.fragment,e),g(he.$$.fragment,e),g(Xe.$$.fragment,e),g(Ge.$$.fragment,e),g(Qe.$$.fragment,e),g(Ae.$$.fragment,e),g(Pe.$$.fragment,e),g(fe.$$.fragment,e),g(Ee.$$.fragment,e),g(He.$$.fragment,e),g(Oe.$$.fragment,e),g(De.$$.fragment,e),g(ge.$$.fragment,e),g(_e.$$.fragment,e),g(Ye.$$.fragment,e),g(Ke.$$.fragment,e),g(et.$$.fragment,e),g(be.$$.fragment,e),g(Te.$$.fragment,e),g(tt.$$.fragment,e),g(ot.$$.fragment,e),g(nt.$$.fragment,e),g(ke.$$.fragment,e),g(ye.$$.fragment,e),g(st.$$.fragment,e),g(at.$$.fragment,e),g(rt.$$.fragment,e),g(Me.$$.fragment,e),g(it.$$.fragment,e),g(lt.$$.fragment,e),g(dt.$$.fragment,e),g(we.$$.fragment,e),g(Ce.$$.fragment,e),g(ve.$$.fragment,e),g(ct.$$.fragment,e),g(pt.$$.fragment,e),g(mt.$$.fragment,e),g($e.$$.fragment,e),g(ze.$$.fragment,e),g(ht.$$.fragment,e),g(ut.$$.fragment,e),g(ft.$$.fragment,e),g(Be.$$.fragment,e),g(Re.$$.fragment,e),g(gt.$$.fragment,e),g(_t.$$.fragment,e),g(bt.$$.fragment,e),g(xe.$$.fragment,e),g(je.$$.fragment,e),vo=!0)},o(e){_(k.$$.fragment,e),_(M.$$.fragment,e),_(Ve.$$.fragment,e),_(Ze.$$.fragment,e),_(Le.$$.fragment,e),_(he.$$.fragment,e),_(Xe.$$.fragment,e),_(Ge.$$.fragment,e),_(Qe.$$.fragment,e),_(Ae.$$.fragment,e),_(Pe.$$.fragment,e),_(fe.$$.fragment,e),_(Ee.$$.fragment,e),_(He.$$.fragment,e),_(Oe.$$.fragment,e),_(De.$$.fragment,e),_(ge.$$.fragment,e),_(_e.$$.fragment,e),_(Ye.$$.fragment,e),_(Ke.$$.fragment,e),_(et.$$.fragment,e),_(be.$$.fragment,e),_(Te.$$.fragment,e),_(tt.$$.fragment,e),_(ot.$$.fragment,e),_(nt.$$.fragment,e),_(ke.$$.fragment,e),_(ye.$$.fragment,e),_(st.$$.fragment,e),_(at.$$.fragment,e),_(rt.$$.fragment,e),_(Me.$$.fragment,e),_(it.$$.fragment,e),_(lt.$$.fragment,e),_(dt.$$.fragment,e),_(we.$$.fragment,e),_(Ce.$$.fragment,e),_(ve.$$.fragment,e),_(ct.$$.fragment,e),_(pt.$$.fragment,e),_(mt.$$.fragment,e),_($e.$$.fragment,e),_(ze.$$.fragment,e),_(ht.$$.fragment,e),_(ut.$$.fragment,e),_(ft.$$.fragment,e),_(Be.$$.fragment,e),_(Re.$$.fragment,e),_(gt.$$.fragment,e),_(_t.$$.fragment,e),_(bt.$$.fragment,e),_(xe.$$.fragment,e),_(je.$$.fragment,e),vo=!1},d(e){e&&(a(T),a(n),a(d),a(o),a(Dt),a(Ie),a(Yt),a(qe),a(Kt),a(We),a(eo),a(Ne),a(to),a(oo),a(Se),a(no),a(so),a(j),a(ao),a(ro),a(B),a(io),a(lo),a(R),a(co),a(po),a(J),a(mo),a(ho),a(G),a(uo),a(fo),a(Q),a(go),a(_o),a(A),a(bo),a(To),a(P),a(ko),a(yo),a(E),a(Mo),a(wo),a(H),a(Co),a(Ht)),a(t),b(k,e),b(M,e),b(Ve,e),b(Ze,e),b(Le),b(he),b(Xe,e),b(Ge),b(Qe),b(Ae),b(Pe),b(fe),b(Ee),b(He,e),b(Oe),b(De),b(ge),b(_e),b(Ye,e),b(Ke),b(et),b(be),b(Te),b(tt,e),b(ot),b(nt),b(ke),b(ye),b(st,e),b(at),b(rt),b(Me),b(it,e),b(lt),b(dt),b(we),b(Ce),b(ve),b(ct,e),b(pt),b(mt),b($e),b(ze),b(ht,e),b(ut),b(ft),b(Be),b(Re),b(gt,e),b(_t),b(bt),b(xe),b(je)}}}const xs='{"title":"RoCBert","local":"rocbert","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"RoCBertConfig","local":"transformers.RoCBertConfig","sections":[],"depth":2},{"title":"RoCBertTokenizer","local":"transformers.RoCBertTokenizer","sections":[],"depth":2},{"title":"RoCBertModel","local":"transformers.RoCBertModel","sections":[],"depth":2},{"title":"RoCBertForPreTraining","local":"transformers.RoCBertForPreTraining","sections":[],"depth":2},{"title":"RoCBertForCausalLM","local":"transformers.RoCBertForCausalLM","sections":[],"depth":2},{"title":"RoCBertForMaskedLM","local":"transformers.RoCBertForMaskedLM","sections":[],"depth":2},{"title":"RoCBertForSequenceClassification","local":"transformers.RoCBertForSequenceClassification","sections":[],"depth":2},{"title":"RoCBertForMultipleChoice","local":"transformers.RoCBertForMultipleChoice","sections":[],"depth":2},{"title":"RoCBertForTokenClassification","local":"transformers.RoCBertForTokenClassification","sections":[],"depth":2},{"title":"RoCBertForQuestionAnswering","local":"transformers.RoCBertForQuestionAnswering","sections":[],"depth":2}],"depth":1}';function js(w){return is(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Vs extends ls{constructor(t){super(),ds(this,t,js,Rs,rs,{})}}export{Vs as component};
