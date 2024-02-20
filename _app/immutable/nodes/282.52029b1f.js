import{s as Bn,f as Rn,o as Nn,n as B}from"../chunks/scheduler.9bc65507.js";import{S as Pn,i as Qn,g as c,s as a,r as h,A as Sn,h as m,f as s,c as r,j as x,u,x as T,k,y as i,a as d,v as f,d as g,t as _,w as b}from"../chunks/index.707bf1b6.js";import{T as Jt}from"../chunks/Tip.c2ecdbf4.js";import{D as V}from"../chunks/Docstring.17db21ae.js";import{C as Wt}from"../chunks/CodeBlock.54a9f38d.js";import{E as Ut}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as J}from"../chunks/Heading.342b1fa6.js";function Hn(w){let t,v="Example:",l,p,M;return p=new Wt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFZpTFRNb2RlbCUyQyUyMFZpTFRDb25maWclMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwVmlMVCUyMGRhbmRlbGluJTJGdmlsdC1iMzItbWxtJTIwc3R5bGUlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMFZpTFRDb25maWcoKSUwQSUwQSUyMyUyMEluaXRpYWxpemluZyUyMGElMjBtb2RlbCUyMGZyb20lMjB0aGUlMjBkYW5kZWxpbiUyRnZpbHQtYjMyLW1sbSUyMHN0eWxlJTIwY29uZmlndXJhdGlvbiUwQW1vZGVsJTIwJTNEJTIwVmlMVE1vZGVsKGNvbmZpZ3VyYXRpb24pJTBBJTBBJTIzJTIwQWNjZXNzaW5nJTIwdGhlJTIwbW9kZWwlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMG1vZGVsLmNvbmZpZw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViLTModel, ViLTConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ViLT dandelin/vilt-b32-mlm style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = ViLTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the dandelin/vilt-b32-mlm style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViLTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){t=c("p"),t.textContent=v,l=a(),h(p.$$.fragment)},l(o){t=m(o,"P",{"data-svelte-h":!0}),T(t)!=="svelte-11lpom8"&&(t.textContent=v),l=r(o),u(p.$$.fragment,o)},m(o,y){d(o,t,y),d(o,l,y),f(p,o,y),M=!0},p:B,i(o){M||(g(p.$$.fragment,o),M=!0)},o(o){_(p.$$.fragment,o),M=!1},d(o){o&&(s(t),s(l)),b(p,o)}}}function qn(w){let t,v=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=v},l(l){t=m(l,"P",{"data-svelte-h":!0}),T(t)!=="svelte-fincs2"&&(t.innerHTML=v)},m(l,p){d(l,t,p)},p:B,d(l){l&&s(t)}}}function Gn(w){let t,v="Examples:",l,p,M;return p=new Wt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFZpbHRQcm9jZXNzb3IlMkMlMjBWaWx0TW9kZWwlMEFmcm9tJTIwUElMJTIwaW1wb3J0JTIwSW1hZ2UlMEFpbXBvcnQlMjByZXF1ZXN0cyUwQSUwQSUyMyUyMHByZXBhcmUlMjBpbWFnZSUyMGFuZCUyMHRleHQlMEF1cmwlMjAlM0QlMjAlMjJodHRwJTNBJTJGJTJGaW1hZ2VzLmNvY29kYXRhc2V0Lm9yZyUyRnZhbDIwMTclMkYwMDAwMDAwMzk3NjkuanBnJTIyJTBBaW1hZ2UlMjAlM0QlMjBJbWFnZS5vcGVuKHJlcXVlc3RzLmdldCh1cmwlMkMlMjBzdHJlYW0lM0RUcnVlKS5yYXcpJTBBdGV4dCUyMCUzRCUyMCUyMmhlbGxvJTIwd29ybGQlMjIlMEElMEFwcm9jZXNzb3IlMjAlM0QlMjBWaWx0UHJvY2Vzc29yLmZyb21fcHJldHJhaW5lZCglMjJkYW5kZWxpbiUyRnZpbHQtYjMyLW1sbSUyMiklMEFtb2RlbCUyMCUzRCUyMFZpbHRNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyZGFuZGVsaW4lMkZ2aWx0LWIzMi1tbG0lMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwcHJvY2Vzc29yKGltYWdlJTJDJTIwdGV4dCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQWxhc3RfaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViltProcessor, ViltModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prepare image and text</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)
<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;hello world&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = ViltProcessor.from_pretrained(<span class="hljs-string">&quot;dandelin/vilt-b32-mlm&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViltModel.from_pretrained(<span class="hljs-string">&quot;dandelin/vilt-b32-mlm&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(image, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){t=c("p"),t.textContent=v,l=a(),h(p.$$.fragment)},l(o){t=m(o,"P",{"data-svelte-h":!0}),T(t)!=="svelte-kvfsh7"&&(t.textContent=v),l=r(o),u(p.$$.fragment,o)},m(o,y){d(o,t,y),d(o,l,y),f(p,o,y),M=!0},p:B,i(o){M||(g(p.$$.fragment,o),M=!0)},o(o){_(p.$$.fragment,o),M=!1},d(o){o&&(s(t),s(l)),b(p,o)}}}function En(w){let t,v=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=v},l(l){t=m(l,"P",{"data-svelte-h":!0}),T(t)!=="svelte-fincs2"&&(t.innerHTML=v)},m(l,p){d(l,t,p)},p:B,d(l){l&&s(t)}}}function On(w){let t,v="Examples:",l,p,M;return p=new Wt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFZpbHRQcm9jZXNzb3IlMkMlMjBWaWx0Rm9yTWFza2VkTE0lMEFpbXBvcnQlMjByZXF1ZXN0cyUwQWZyb20lMjBQSUwlMjBpbXBvcnQlMjBJbWFnZSUwQWltcG9ydCUyMHJlJTBBaW1wb3J0JTIwdG9yY2glMEElMEF1cmwlMjAlM0QlMjAlMjJodHRwJTNBJTJGJTJGaW1hZ2VzLmNvY29kYXRhc2V0Lm9yZyUyRnZhbDIwMTclMkYwMDAwMDAwMzk3NjkuanBnJTIyJTBBaW1hZ2UlMjAlM0QlMjBJbWFnZS5vcGVuKHJlcXVlc3RzLmdldCh1cmwlMkMlMjBzdHJlYW0lM0RUcnVlKS5yYXcpJTBBdGV4dCUyMCUzRCUyMCUyMmElMjBidW5jaCUyMG9mJTIwJTVCTUFTSyU1RCUyMGxheWluZyUyMG9uJTIwYSUyMCU1Qk1BU0slNUQuJTIyJTBBJTBBcHJvY2Vzc29yJTIwJTNEJTIwVmlsdFByb2Nlc3Nvci5mcm9tX3ByZXRyYWluZWQoJTIyZGFuZGVsaW4lMkZ2aWx0LWIzMi1tbG0lMjIpJTBBbW9kZWwlMjAlM0QlMjBWaWx0Rm9yTWFza2VkTE0uZnJvbV9wcmV0cmFpbmVkKCUyMmRhbmRlbGluJTJGdmlsdC1iMzItbWxtJTIyKSUwQSUwQSUyMyUyMHByZXBhcmUlMjBpbnB1dHMlMEFlbmNvZGluZyUyMCUzRCUyMHByb2Nlc3NvcihpbWFnZSUyQyUyMHRleHQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQSUyMyUyMGZvcndhcmQlMjBwYXNzJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqZW5jb2RpbmcpJTBBJTBBdGwlMjAlM0QlMjBsZW4ocmUuZmluZGFsbCglMjIlNUMlNUJNQVNLJTVDJTVEJTIyJTJDJTIwdGV4dCkpJTBBaW5mZXJyZWRfdG9rZW4lMjAlM0QlMjAlNUJ0ZXh0JTVEJTBBJTBBJTIzJTIwZ3JhZHVhbGx5JTIwZmlsbCUyMGluJTIwdGhlJTIwTUFTSyUyMHRva2VucyUyQyUyMG9uZSUyMGJ5JTIwb25lJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGZvciUyMGklMjBpbiUyMHJhbmdlKHRsKSUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMGVuY29kZWQlMjAlM0QlMjBwcm9jZXNzb3IudG9rZW5pemVyKGluZmVycmVkX3Rva2VuKSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMGlucHV0X2lkcyUyMCUzRCUyMHRvcmNoLnRlbnNvcihlbmNvZGVkLmlucHV0X2lkcyklMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBlbmNvZGVkJTIwJTNEJTIwZW5jb2RlZCU1QiUyMmlucHV0X2lkcyUyMiU1RCU1QjAlNUQlNUIxJTNBLTElNUQlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBvdXRwdXRzJTIwJTNEJTIwbW9kZWwoaW5wdXRfaWRzJTNEaW5wdXRfaWRzJTJDJTIwcGl4ZWxfdmFsdWVzJTNEZW5jb2RpbmcucGl4ZWxfdmFsdWVzKSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMG1sbV9sb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cyU1QjAlNUQlMjAlMjAlMjMlMjBzaGFwZSUyMChzZXFfbGVuJTJDJTIwdm9jYWJfc2l6ZSklMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjMlMjBvbmx5JTIwdGFrZSUyMGludG8lMjBhY2NvdW50JTIwdGV4dCUyMGZlYXR1cmVzJTIwKG1pbnVzJTIwQ0xTJTIwYW5kJTIwU0VQJTIwdG9rZW4pJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwbWxtX2xvZ2l0cyUyMCUzRCUyMG1sbV9sb2dpdHMlNUIxJTIwJTNBJTIwaW5wdXRfaWRzLnNoYXBlJTVCMSU1RCUyMC0lMjAxJTJDJTIwJTNBJTVEJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwbWxtX3ZhbHVlcyUyQyUyMG1sbV9pZHMlMjAlM0QlMjBtbG1fbG9naXRzLnNvZnRtYXgoZGltJTNELTEpLm1heChkaW0lM0QtMSklMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjMlMjBvbmx5JTIwdGFrZSUyMGludG8lMjBhY2NvdW50JTIwdGV4dCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMG1sbV92YWx1ZXMlNUJ0b3JjaC50ZW5zb3IoZW5jb2RlZCklMjAhJTNEJTIwMTAzJTVEJTIwJTNEJTIwMCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHNlbGVjdCUyMCUzRCUyMG1sbV92YWx1ZXMuYXJnbWF4KCkuaXRlbSgpJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwZW5jb2RlZCU1QnNlbGVjdCU1RCUyMCUzRCUyMG1sbV9pZHMlNUJzZWxlY3QlNUQuaXRlbSgpJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwaW5mZXJyZWRfdG9rZW4lMjAlM0QlMjAlNUJwcm9jZXNzb3IuZGVjb2RlKGVuY29kZWQpJTVEJTBBJTBBc2VsZWN0ZWRfdG9rZW4lMjAlM0QlMjAlMjIlMjIlMEFlbmNvZGVkJTIwJTNEJTIwcHJvY2Vzc29yLnRva2VuaXplcihpbmZlcnJlZF90b2tlbiklMEFvdXRwdXQlMjAlM0QlMjBwcm9jZXNzb3IuZGVjb2RlKGVuY29kZWQuaW5wdXRfaWRzJTVCMCU1RCUyQyUyMHNraXBfc3BlY2lhbF90b2tlbnMlM0RUcnVlKSUwQXByaW50KG91dHB1dCk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViltProcessor, ViltForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> re
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)
<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;a bunch of [MASK] laying on a [MASK].&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = ViltProcessor.from_pretrained(<span class="hljs-string">&quot;dandelin/vilt-b32-mlm&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViltForMaskedLM.from_pretrained(<span class="hljs-string">&quot;dandelin/vilt-b32-mlm&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prepare inputs</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)

<span class="hljs-meta">&gt;&gt;&gt; </span>tl = <span class="hljs-built_in">len</span>(re.findall(<span class="hljs-string">&quot;\\[MASK\\]&quot;</span>, text))
<span class="hljs-meta">&gt;&gt;&gt; </span>inferred_token = [text]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># gradually fill in the MASK tokens, one by one</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(tl):
<span class="hljs-meta">... </span>        encoded = processor.tokenizer(inferred_token)
<span class="hljs-meta">... </span>        input_ids = torch.tensor(encoded.input_ids)
<span class="hljs-meta">... </span>        encoded = encoded[<span class="hljs-string">&quot;input_ids&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-number">1</span>:-<span class="hljs-number">1</span>]
<span class="hljs-meta">... </span>        outputs = model(input_ids=input_ids, pixel_values=encoding.pixel_values)
<span class="hljs-meta">... </span>        mlm_logits = outputs.logits[<span class="hljs-number">0</span>]  <span class="hljs-comment"># shape (seq_len, vocab_size)</span>
<span class="hljs-meta">... </span>        <span class="hljs-comment"># only take into account text features (minus CLS and SEP token)</span>
<span class="hljs-meta">... </span>        mlm_logits = mlm_logits[<span class="hljs-number">1</span> : input_ids.shape[<span class="hljs-number">1</span>] - <span class="hljs-number">1</span>, :]
<span class="hljs-meta">... </span>        mlm_values, mlm_ids = mlm_logits.softmax(dim=-<span class="hljs-number">1</span>).<span class="hljs-built_in">max</span>(dim=-<span class="hljs-number">1</span>)
<span class="hljs-meta">... </span>        <span class="hljs-comment"># only take into account text</span>
<span class="hljs-meta">... </span>        mlm_values[torch.tensor(encoded) != <span class="hljs-number">103</span>] = <span class="hljs-number">0</span>
<span class="hljs-meta">... </span>        select = mlm_values.argmax().item()
<span class="hljs-meta">... </span>        encoded[select] = mlm_ids[select].item()
<span class="hljs-meta">... </span>        inferred_token = [processor.decode(encoded)]

<span class="hljs-meta">&gt;&gt;&gt; </span>selected_token = <span class="hljs-string">&quot;&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoded = processor.tokenizer(inferred_token)
<span class="hljs-meta">&gt;&gt;&gt; </span>output = processor.decode(encoded.input_ids[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(output)
a bunch of cats laying on a couch.`,wrap:!1}}),{c(){t=c("p"),t.textContent=v,l=a(),h(p.$$.fragment)},l(o){t=m(o,"P",{"data-svelte-h":!0}),T(t)!=="svelte-kvfsh7"&&(t.textContent=v),l=r(o),u(p.$$.fragment,o)},m(o,y){d(o,t,y),d(o,l,y),f(p,o,y),M=!0},p:B,i(o){M||(g(p.$$.fragment,o),M=!0)},o(o){_(p.$$.fragment,o),M=!1},d(o){o&&(s(t),s(l)),b(p,o)}}}function Xn(w){let t,v=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=v},l(l){t=m(l,"P",{"data-svelte-h":!0}),T(t)!=="svelte-fincs2"&&(t.innerHTML=v)},m(l,p){d(l,t,p)},p:B,d(l){l&&s(t)}}}function Dn(w){let t,v="Examples:",l,p,M;return p=new Wt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFZpbHRQcm9jZXNzb3IlMkMlMjBWaWx0Rm9yUXVlc3Rpb25BbnN3ZXJpbmclMEFpbXBvcnQlMjByZXF1ZXN0cyUwQWZyb20lMjBQSUwlMjBpbXBvcnQlMjBJbWFnZSUwQSUwQXVybCUyMCUzRCUyMCUyMmh0dHAlM0ElMkYlMkZpbWFnZXMuY29jb2RhdGFzZXQub3JnJTJGdmFsMjAxNyUyRjAwMDAwMDAzOTc2OS5qcGclMjIlMEFpbWFnZSUyMCUzRCUyMEltYWdlLm9wZW4ocmVxdWVzdHMuZ2V0KHVybCUyQyUyMHN0cmVhbSUzRFRydWUpLnJhdyklMEF0ZXh0JTIwJTNEJTIwJTIySG93JTIwbWFueSUyMGNhdHMlMjBhcmUlMjB0aGVyZSUzRiUyMiUwQSUwQXByb2Nlc3NvciUyMCUzRCUyMFZpbHRQcm9jZXNzb3IuZnJvbV9wcmV0cmFpbmVkKCUyMmRhbmRlbGluJTJGdmlsdC1iMzItZmluZXR1bmVkLXZxYSUyMiklMEFtb2RlbCUyMCUzRCUyMFZpbHRGb3JRdWVzdGlvbkFuc3dlcmluZy5mcm9tX3ByZXRyYWluZWQoJTIyZGFuZGVsaW4lMkZ2aWx0LWIzMi1maW5ldHVuZWQtdnFhJTIyKSUwQSUwQSUyMyUyMHByZXBhcmUlMjBpbnB1dHMlMEFlbmNvZGluZyUyMCUzRCUyMHByb2Nlc3NvcihpbWFnZSUyQyUyMHRleHQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQSUyMyUyMGZvcndhcmQlMjBwYXNzJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqZW5jb2RpbmcpJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHMlMEFpZHglMjAlM0QlMjBsb2dpdHMuYXJnbWF4KC0xKS5pdGVtKCklMEFwcmludCglMjJQcmVkaWN0ZWQlMjBhbnN3ZXIlM0ElMjIlMkMlMjBtb2RlbC5jb25maWcuaWQybGFiZWwlNUJpZHglNUQp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViltProcessor, ViltForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)
<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;How many cats are there?&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = ViltProcessor.from_pretrained(<span class="hljs-string">&quot;dandelin/vilt-b32-finetuned-vqa&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViltForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;dandelin/vilt-b32-finetuned-vqa&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prepare inputs</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>idx = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer:&quot;</span>, model.config.id2label[idx])
Predicted answer: <span class="hljs-number">2</span>`,wrap:!1}}),{c(){t=c("p"),t.textContent=v,l=a(),h(p.$$.fragment)},l(o){t=m(o,"P",{"data-svelte-h":!0}),T(t)!=="svelte-kvfsh7"&&(t.textContent=v),l=r(o),u(p.$$.fragment,o)},m(o,y){d(o,t,y),d(o,l,y),f(p,o,y),M=!0},p:B,i(o){M||(g(p.$$.fragment,o),M=!0)},o(o){_(p.$$.fragment,o),M=!1},d(o){o&&(s(t),s(l)),b(p,o)}}}function Yn(w){let t,v=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=v},l(l){t=m(l,"P",{"data-svelte-h":!0}),T(t)!=="svelte-fincs2"&&(t.innerHTML=v)},m(l,p){d(l,t,p)},p:B,d(l){l&&s(t)}}}function Kn(w){let t,v="Examples:",l,p,M;return p=new Wt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFZpbHRQcm9jZXNzb3IlMkMlMjBWaWx0Rm9ySW1hZ2VzQW5kVGV4dENsYXNzaWZpY2F0aW9uJTBBaW1wb3J0JTIwcmVxdWVzdHMlMEFmcm9tJTIwUElMJTIwaW1wb3J0JTIwSW1hZ2UlMEElMEFpbWFnZTElMjAlM0QlMjBJbWFnZS5vcGVuKHJlcXVlc3RzLmdldCglMjJodHRwcyUzQSUyRiUyRmxpbC5ubHAuY29ybmVsbC5lZHUlMkZubHZyJTJGZXhzJTJGZXgwXzAuanBnJTIyJTJDJTIwc3RyZWFtJTNEVHJ1ZSkucmF3KSUwQWltYWdlMiUyMCUzRCUyMEltYWdlLm9wZW4ocmVxdWVzdHMuZ2V0KCUyMmh0dHBzJTNBJTJGJTJGbGlsLm5scC5jb3JuZWxsLmVkdSUyRm5sdnIlMkZleHMlMkZleDBfMS5qcGclMjIlMkMlMjBzdHJlYW0lM0RUcnVlKS5yYXcpJTBBdGV4dCUyMCUzRCUyMCUyMlRoZSUyMGxlZnQlMjBpbWFnZSUyMGNvbnRhaW5zJTIwdHdpY2UlMjB0aGUlMjBudW1iZXIlMjBvZiUyMGRvZ3MlMjBhcyUyMHRoZSUyMHJpZ2h0JTIwaW1hZ2UuJTIyJTBBJTBBcHJvY2Vzc29yJTIwJTNEJTIwVmlsdFByb2Nlc3Nvci5mcm9tX3ByZXRyYWluZWQoJTIyZGFuZGVsaW4lMkZ2aWx0LWIzMi1maW5ldHVuZWQtbmx2cjIlMjIpJTBBbW9kZWwlMjAlM0QlMjBWaWx0Rm9ySW1hZ2VzQW5kVGV4dENsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJkYW5kZWxpbiUyRnZpbHQtYjMyLWZpbmV0dW5lZC1ubHZyMiUyMiklMEElMEElMjMlMjBwcmVwYXJlJTIwaW5wdXRzJTBBZW5jb2RpbmclMjAlM0QlMjBwcm9jZXNzb3IoJTVCaW1hZ2UxJTJDJTIwaW1hZ2UyJTVEJTJDJTIwdGV4dCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBJTIzJTIwZm9yd2FyZCUyMHBhc3MlMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoaW5wdXRfaWRzJTNEZW5jb2RpbmcuaW5wdXRfaWRzJTJDJTIwcGl4ZWxfdmFsdWVzJTNEZW5jb2RpbmcucGl4ZWxfdmFsdWVzLnVuc3F1ZWV6ZSgwKSklMEFsb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cyUwQWlkeCUyMCUzRCUyMGxvZ2l0cy5hcmdtYXgoLTEpLml0ZW0oKSUwQXByaW50KCUyMlByZWRpY3RlZCUyMGFuc3dlciUzQSUyMiUyQyUyMG1vZGVsLmNvbmZpZy5pZDJsYWJlbCU1QmlkeCU1RCk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViltProcessor, ViltForImagesAndTextClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

<span class="hljs-meta">&gt;&gt;&gt; </span>image1 = Image.<span class="hljs-built_in">open</span>(requests.get(<span class="hljs-string">&quot;https://lil.nlp.cornell.edu/nlvr/exs/ex0_0.jpg&quot;</span>, stream=<span class="hljs-literal">True</span>).raw)
<span class="hljs-meta">&gt;&gt;&gt; </span>image2 = Image.<span class="hljs-built_in">open</span>(requests.get(<span class="hljs-string">&quot;https://lil.nlp.cornell.edu/nlvr/exs/ex0_1.jpg&quot;</span>, stream=<span class="hljs-literal">True</span>).raw)
<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;The left image contains twice the number of dogs as the right image.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = ViltProcessor.from_pretrained(<span class="hljs-string">&quot;dandelin/vilt-b32-finetuned-nlvr2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViltForImagesAndTextClassification.from_pretrained(<span class="hljs-string">&quot;dandelin/vilt-b32-finetuned-nlvr2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prepare inputs</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor([image1, image2], text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=encoding.input_ids, pixel_values=encoding.pixel_values.unsqueeze(<span class="hljs-number">0</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>idx = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer:&quot;</span>, model.config.id2label[idx])
Predicted answer: <span class="hljs-literal">True</span>`,wrap:!1}}),{c(){t=c("p"),t.textContent=v,l=a(),h(p.$$.fragment)},l(o){t=m(o,"P",{"data-svelte-h":!0}),T(t)!=="svelte-kvfsh7"&&(t.textContent=v),l=r(o),u(p.$$.fragment,o)},m(o,y){d(o,t,y),d(o,l,y),f(p,o,y),M=!0},p:B,i(o){M||(g(p.$$.fragment,o),M=!0)},o(o){_(p.$$.fragment,o),M=!1},d(o){o&&(s(t),s(l)),b(p,o)}}}function es(w){let t,v=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=v},l(l){t=m(l,"P",{"data-svelte-h":!0}),T(t)!=="svelte-fincs2"&&(t.innerHTML=v)},m(l,p){d(l,t,p)},p:B,d(l){l&&s(t)}}}function ts(w){let t,v="Examples:",l,p,M;return p=new Wt({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFZpbHRQcm9jZXNzb3IlMkMlMjBWaWx0Rm9ySW1hZ2VBbmRUZXh0UmV0cmlldmFsJTBBaW1wb3J0JTIwcmVxdWVzdHMlMEFmcm9tJTIwUElMJTIwaW1wb3J0JTIwSW1hZ2UlMEElMEF1cmwlMjAlM0QlMjAlMjJodHRwJTNBJTJGJTJGaW1hZ2VzLmNvY29kYXRhc2V0Lm9yZyUyRnZhbDIwMTclMkYwMDAwMDAwMzk3NjkuanBnJTIyJTBBaW1hZ2UlMjAlM0QlMjBJbWFnZS5vcGVuKHJlcXVlc3RzLmdldCh1cmwlMkMlMjBzdHJlYW0lM0RUcnVlKS5yYXcpJTBBdGV4dHMlMjAlM0QlMjAlNUIlMjJBbiUyMGltYWdlJTIwb2YlMjB0d28lMjBjYXRzJTIwY2hpbGxpbmclMjBvbiUyMGElMjBjb3VjaCUyMiUyQyUyMCUyMkElMjBmb290YmFsbCUyMHBsYXllciUyMHNjb3JpbmclMjBhJTIwZ29hbCUyMiU1RCUwQSUwQXByb2Nlc3NvciUyMCUzRCUyMFZpbHRQcm9jZXNzb3IuZnJvbV9wcmV0cmFpbmVkKCUyMmRhbmRlbGluJTJGdmlsdC1iMzItZmluZXR1bmVkLWNvY28lMjIpJTBBbW9kZWwlMjAlM0QlMjBWaWx0Rm9ySW1hZ2VBbmRUZXh0UmV0cmlldmFsLmZyb21fcHJldHJhaW5lZCglMjJkYW5kZWxpbiUyRnZpbHQtYjMyLWZpbmV0dW5lZC1jb2NvJTIyKSUwQSUwQSUyMyUyMGZvcndhcmQlMjBwYXNzJTBBc2NvcmVzJTIwJTNEJTIwZGljdCgpJTBBZm9yJTIwdGV4dCUyMGluJTIwdGV4dHMlM0ElMEElMjAlMjAlMjAlMjAlMjMlMjBwcmVwYXJlJTIwaW5wdXRzJTBBJTIwJTIwJTIwJTIwZW5jb2RpbmclMjAlM0QlMjBwcm9jZXNzb3IoaW1hZ2UlMkMlMjB0ZXh0JTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEElMjAlMjAlMjAlMjBvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKiplbmNvZGluZyklMEElMjAlMjAlMjAlMjBzY29yZXMlNUJ0ZXh0JTVEJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHMlNUIwJTJDJTIwJTNBJTVELml0ZW0oKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ViltProcessor, ViltForImageAndTextRetrieval
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)
<span class="hljs-meta">&gt;&gt;&gt; </span>texts = [<span class="hljs-string">&quot;An image of two cats chilling on a couch&quot;</span>, <span class="hljs-string">&quot;A football player scoring a goal&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = ViltProcessor.from_pretrained(<span class="hljs-string">&quot;dandelin/vilt-b32-finetuned-coco&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ViltForImageAndTextRetrieval.from_pretrained(<span class="hljs-string">&quot;dandelin/vilt-b32-finetuned-coco&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>scores = <span class="hljs-built_in">dict</span>()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> text <span class="hljs-keyword">in</span> texts:
<span class="hljs-meta">... </span>    <span class="hljs-comment"># prepare inputs</span>
<span class="hljs-meta">... </span>    encoding = processor(image, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">... </span>    outputs = model(**encoding)
<span class="hljs-meta">... </span>    scores[text] = outputs.logits[<span class="hljs-number">0</span>, :].item()`,wrap:!1}}),{c(){t=c("p"),t.textContent=v,l=a(),h(p.$$.fragment)},l(o){t=m(o,"P",{"data-svelte-h":!0}),T(t)!=="svelte-kvfsh7"&&(t.textContent=v),l=r(o),u(p.$$.fragment,o)},m(o,y){d(o,t,y),d(o,l,y),f(p,o,y),M=!0},p:B,i(o){M||(g(p.$$.fragment,o),M=!0)},o(o){_(p.$$.fragment,o),M=!1},d(o){o&&(s(t),s(l)),b(p,o)}}}function os(w){let t,v=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=v},l(l){t=m(l,"P",{"data-svelte-h":!0}),T(t)!=="svelte-fincs2"&&(t.innerHTML=v)},m(l,p){d(l,t,p)},p:B,d(l){l&&s(t)}}}function ns(w){let t,v,l,p,M,o,y,At,Me,rn=`The ViLT model was proposed in <a href="https://arxiv.org/abs/2102.03334" rel="nofollow">ViLT: Vision-and-Language Transformer Without Convolution or Region Supervision</a>
by Wonjae Kim, Bokyung Son, Ildoo Kim. ViLT incorporates text embeddings into a Vision Transformer (ViT), allowing it to have a minimal design
for Vision-and-Language Pre-training (VLP).`,Lt,ye,ln="The abstract from the paper is the following:",Bt,we,dn=`<em>Vision-and-Language Pre-training (VLP) has improved performance on various joint vision-and-language downstream tasks.
Current approaches to VLP heavily rely on image feature extraction processes, most of which involve region supervision
(e.g., object detection) and the convolutional architecture (e.g., ResNet). Although disregarded in the literature, we
find it problematic in terms of both (1) efficiency/speed, that simply extracting input features requires much more
computation than the multimodal interaction steps; and (2) expressive power, as it is upper bounded to the expressive
power of the visual embedder and its predefined visual vocabulary. In this paper, we present a minimal VLP model,
Vision-and-Language Transformer (ViLT), monolithic in the sense that the processing of visual inputs is drastically
simplified to just the same convolution-free manner that we process textual inputs. We show that ViLT is up to tens of
times faster than previous VLP models, yet with competitive or better downstream task performance.</em>`,Rt,te,cn,Nt,ke,mn='ViLT architecture. Taken from the <a href="https://arxiv.org/abs/2102.03334">original paper</a>.',Pt,xe,pn='This model was contributed by <a href="https://huggingface.co/nielsr" rel="nofollow">nielsr</a>. The original code can be found <a href="https://github.com/dandelin/ViLT" rel="nofollow">here</a>.',Qt,Ve,St,$e,hn=`<li>The quickest way to get started with ViLT is by checking the <a href="https://github.com/NielsRogge/Transformers-Tutorials/tree/master/ViLT" rel="nofollow">example notebooks</a>
(which showcase both inference and fine-tuning on custom data).</li> <li>ViLT is a model that takes both <code>pixel_values</code> and <code>input_ids</code> as input. One can use <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltProcessor">ViltProcessor</a> to prepare data for the model.
This processor wraps a image processor (for the image modality) and a tokenizer (for the language modality) into one.</li> <li>ViLT is trained with images of various sizes: the authors resize the shorter edge of input images to 384 and limit the longer edge to
under 640 while preserving the aspect ratio. To make batching of images possible, the authors use a <code>pixel_mask</code> that indicates
which pixel values are real and which are padding. <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltProcessor">ViltProcessor</a> automatically creates this for you.</li> <li>The design of ViLT is very similar to that of a standard Vision Transformer (ViT). The only difference is that the model includes
additional embedding layers for the language modality.</li> <li>The PyTorch version of this model is only available in torch 1.10 and higher.</li>`,Ht,je,qt,$,Ce,uo,rt,un=`This is the configuration class to store the configuration of a <code>ViLTModel</code>. It is used to instantiate an ViLT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViLT
<a href="https://huggingface.co/dandelin/vilt-b32-mlm" rel="nofollow">dandelin/vilt-b32-mlm</a> architecture.`,fo,it,fn=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,go,oe,Gt,Ie,Et,D,ze,_o,ne,Fe,bo,lt,gn="Preprocess an image or a batch of images.",Ot,Je,Xt,R,Ue,To,dt,_n="Constructs a ViLT image processor.",vo,se,We,Mo,ct,bn="Preprocess an image or batch of images.",Dt,Ze,Yt,j,Ae,yo,mt,Tn="Constructs a ViLT processor which wraps a BERT tokenizer and ViLT image processor into a single processor.",wo,pt,vn=`<a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltProcessor">ViltProcessor</a> offers all the functionalities of <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltImageProcessor">ViltImageProcessor</a> and <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast">BertTokenizerFast</a>. See the
docstring of <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltProcessor.__call__"><strong>call</strong>()</a> and <code>decode()</code> for more information.`,ko,O,Le,xo,ht,Mn=`This method uses <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor.__call__">ViltImageProcessor.<strong>call</strong>()</a> method to prepare image(s) for the model, and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">BertTokenizerFast.<strong>call</strong>()</a> to prepare text for the model.`,Vo,ut,yn="Please refer to the docstring of the above two methods for more information.",Kt,Be,eo,N,Re,$o,ft,wn=`The bare ViLT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch <code>torch.nn.Module &lt;https://pytorch.org/docs/stable/nn.html#torch.nn.Module&gt;</code>_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,jo,U,Ne,Co,gt,kn='The <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltModel">ViltModel</a> forward method, overrides the <code>__call__</code> special method.',Io,ae,zo,re,to,Pe,oo,C,Qe,Fo,_t,xn="ViLT Model with a language modeling head on top as done during pretraining.",Jo,bt,Vn=`This model is a PyTorch <code>torch.nn.Module &lt;https://pytorch.org/docs/stable/nn.html#torch.nn.Module&gt;</code>_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,Uo,W,Se,Wo,Tt,$n='The <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltForMaskedLM">ViltForMaskedLM</a> forward method, overrides the <code>__call__</code> special method.',Zo,ie,Ao,le,no,He,so,I,qe,Lo,vt,jn=`Vilt Model transformer with a classifier head on top (a linear layer on top of the final hidden state of the [CLS]
token) for visual question answering, e.g. for VQAv2.`,Bo,Mt,Cn=`This model is a PyTorch <code>torch.nn.Module &lt;https://pytorch.org/docs/stable/nn.html#torch.nn.Module&gt;</code>_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,Ro,Z,Ge,No,yt,In='The <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltForQuestionAnswering">ViltForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',Po,de,Qo,ce,ao,Ee,ro,P,Oe,So,wt,zn="Vilt Model transformer with a classifier head on top for natural language visual reasoning, e.g. NLVR2.",Ho,A,Xe,qo,kt,Fn='The <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltForImagesAndTextClassification">ViltForImagesAndTextClassification</a> forward method, overrides the <code>__call__</code> special method.',Go,me,Eo,pe,io,De,lo,z,Ye,Oo,xt,Jn=`Vilt Model transformer with a classifier head on top (a linear layer on top of the final hidden state of the [CLS]
token) for image-to-text or text-to-image retrieval, e.g. MSCOCO and F30K.`,Xo,Vt,Un=`This model is a PyTorch <code>torch.nn.Module &lt;https://pytorch.org/docs/stable/nn.html#torch.nn.Module&gt;</code>_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,Do,L,Ke,Yo,$t,Wn='The <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltForImageAndTextRetrieval">ViltForImageAndTextRetrieval</a> forward method, overrides the <code>__call__</code> special method.',Ko,he,en,ue,co,et,mo,F,tt,tn,jt,Zn=`ViLT Model with a token classification head on top (a linear layer on top of the final hidden-states of the text
tokens) e.g. for Named-Entity-Recognition (NER) tasks.`,on,Ct,An=`This model is a PyTorch <code>torch.nn.Module &lt;https://pytorch.org/docs/stable/nn.html#torch.nn.Module&gt;</code>_ subclass. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,nn,X,ot,sn,It,Ln='The <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltForTokenClassification">ViltForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',an,fe,po,Zt,ho;return M=new J({props:{title:"ViLT",local:"vilt",headingTag:"h1"}}),y=new J({props:{title:"Overview",local:"overview",headingTag:"h2"}}),Ve=new J({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),je=new J({props:{title:"ViltConfig",local:"transformers.ViltConfig",headingTag:"h2"}}),Ce=new V({props:{name:"class transformers.ViltConfig",anchor:"transformers.ViltConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"type_vocab_size",val:" = 2"},{name:"modality_type_vocab_size",val:" = 2"},{name:"max_position_embeddings",val:" = 40"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"image_size",val:" = 384"},{name:"patch_size",val:" = 32"},{name:"num_channels",val:" = 3"},{name:"qkv_bias",val:" = True"},{name:"max_image_length",val:" = -1"},{name:"tie_word_embeddings",val:" = False"},{name:"num_images",val:" = -1"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViltConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the text part of the model. Defines the number of different tokens that can be
represented by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltModel">ViltModel</a>.`,name:"vocab_size"},{anchor:"transformers.ViltConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltModel">ViltModel</a>. This is used when encoding
text.`,name:"type_vocab_size"},{anchor:"transformers.ViltConfig.modality_type_vocab_size",description:`<strong>modality_type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the modalities passed when calling <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltModel">ViltModel</a>. This is used after concatening the
embeddings of the text and image modalities.`,name:"modality_type_vocab_size"},{anchor:"transformers.ViltConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 40) &#x2014;
The maximum sequence length that this model might ever be used with.`,name:"max_position_embeddings"},{anchor:"transformers.ViltConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.ViltConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.ViltConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.ViltConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.ViltConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.ViltConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.ViltConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.ViltConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.ViltConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.ViltConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 384) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.ViltConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.ViltConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.ViltConfig.qkv_bias",description:`<strong>qkv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to add a bias to the queries, keys and values.`,name:"qkv_bias"},{anchor:"transformers.ViltConfig.max_image_length",description:`<strong>max_image_length</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The maximum number of patches to take as input for the Transformer encoder. If set to a positive integer,
the encoder will sample <code>max_image_length</code> patches at maximum. If set to -1, will not be taken into
account.`,name:"max_image_length"},{anchor:"transformers.ViltConfig.num_images",description:`<strong>num_images</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The number of images to use for natural language visual reasoning. If set to a positive integer, will be
used by <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltForImagesAndTextClassification">ViltForImagesAndTextClassification</a> for defining the classifier head.`,name:"num_images"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vilt/configuration_vilt.py#L28"}}),oe=new Ut({props:{anchor:"transformers.ViltConfig.example",$$slots:{default:[Hn]},$$scope:{ctx:w}}}),Ie=new J({props:{title:"ViltFeatureExtractor",local:"transformers.ViltFeatureExtractor",headingTag:"h2"}}),ze=new V({props:{name:"class transformers.ViltFeatureExtractor",anchor:"transformers.ViltFeatureExtractor",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vilt/feature_extraction_vilt.py#L26"}}),Fe=new V({props:{name:"__call__",anchor:"transformers.ViltFeatureExtractor.__call__",parameters:[{name:"images",val:""},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/image_processing_utils.py#L549"}}),Je=new J({props:{title:"ViltImageProcessor",local:"transformers.ViltImageProcessor",headingTag:"h2"}}),Ue=new V({props:{name:"class transformers.ViltImageProcessor",anchor:"transformers.ViltImageProcessor",parameters:[{name:"do_resize",val:": bool = True"},{name:"size",val:": Dict = None"},{name:"size_divisor",val:": int = 32"},{name:"resample",val:": Resampling = <Resampling.BICUBIC: 3>"},{name:"do_rescale",val:": bool = True"},{name:"rescale_factor",val:": Union = 0.00392156862745098"},{name:"do_normalize",val:": bool = True"},{name:"image_mean",val:": Union = None"},{name:"image_std",val:": Union = None"},{name:"do_pad",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViltImageProcessor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the image&#x2019;s (height, width) dimensions to the specified <code>size</code>. Can be overridden by the
<code>do_resize</code> parameter in the <code>preprocess</code> method.`,name:"do_resize"},{anchor:"transformers.ViltImageProcessor.size",description:`<strong>size</strong> (<code>Dict[str, int]</code> <em>optional</em>, defaults to <code>{&quot;shortest_edge&quot; -- 384}</code>):
Resize the shorter side of the input to <code>size[&quot;shortest_edge&quot;]</code>. The longer side will be limited to under
<code>int((1333 / 800) * size[&quot;shortest_edge&quot;])</code> while preserving the aspect ratio. Only has an effect if
<code>do_resize</code> is set to <code>True</code>. Can be overridden by the <code>size</code> parameter in the <code>preprocess</code> method.`,name:"size"},{anchor:"transformers.ViltImageProcessor.size_divisor",description:`<strong>size_divisor</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The size by which to make sure both the height and width can be divided. Only has an effect if <code>do_resize</code>
is set to <code>True</code>. Can be overridden by the <code>size_divisor</code> parameter in the <code>preprocess</code> method.`,name:"size_divisor"},{anchor:"transformers.ViltImageProcessor.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>Resampling.BICUBIC</code>) &#x2014;
Resampling filter to use if resizing the image. Only has an effect if <code>do_resize</code> is set to <code>True</code>. Can be
overridden by the <code>resample</code> parameter in the <code>preprocess</code> method.`,name:"resample"},{anchor:"transformers.ViltImageProcessor.do_rescale",description:`<strong>do_rescale</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Wwhether to rescale the image by the specified scale <code>rescale_factor</code>. Can be overridden by the
<code>do_rescale</code> parameter in the <code>preprocess</code> method.`,name:"do_rescale"},{anchor:"transformers.ViltImageProcessor.rescale_factor",description:`<strong>rescale_factor</strong> (<code>int</code> or <code>float</code>, <em>optional</em>, defaults to <code>1/255</code>) &#x2014;
Scale factor to use if rescaling the image. Only has an effect if <code>do_rescale</code> is set to <code>True</code>. Can be
overridden by the <code>rescale_factor</code> parameter in the <code>preprocess</code> method.`,name:"rescale_factor"},{anchor:"transformers.ViltImageProcessor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to normalize the image. Can be overridden by the <code>do_normalize</code> parameter in the <code>preprocess</code>
method. Can be overridden by the <code>do_normalize</code> parameter in the <code>preprocess</code> method.`,name:"do_normalize"},{anchor:"transformers.ViltImageProcessor.image_mean",description:`<strong>image_mean</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_MEAN</code>) &#x2014;
Mean to use if normalizing the image. This is a float or list of floats the length of the number of
channels in the image. Can be overridden by the <code>image_mean</code> parameter in the <code>preprocess</code> method. Can be
overridden by the <code>image_mean</code> parameter in the <code>preprocess</code> method.`,name:"image_mean"},{anchor:"transformers.ViltImageProcessor.image_std",description:`<strong>image_std</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_STD</code>) &#x2014;
Standard deviation to use if normalizing the image. This is a float or list of floats the length of the
number of channels in the image. Can be overridden by the <code>image_std</code> parameter in the <code>preprocess</code> method.
Can be overridden by the <code>image_std</code> parameter in the <code>preprocess</code> method.`,name:"image_std"},{anchor:"transformers.ViltImageProcessor.do_pad",description:`<strong>do_pad</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to pad the image to the <code>(max_height, max_width)</code> of the images in the batch. Can be overridden by
the <code>do_pad</code> parameter in the <code>preprocess</code> method.`,name:"do_pad"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vilt/image_processing_vilt.py#L120"}}),We=new V({props:{name:"preprocess",anchor:"transformers.ViltImageProcessor.preprocess",parameters:[{name:"images",val:": Union"},{name:"do_resize",val:": Optional = None"},{name:"size",val:": Optional = None"},{name:"size_divisor",val:": Optional = None"},{name:"resample",val:": Resampling = None"},{name:"do_rescale",val:": Optional = None"},{name:"rescale_factor",val:": Optional = None"},{name:"do_normalize",val:": Optional = None"},{name:"image_mean",val:": Union = None"},{name:"image_std",val:": Union = None"},{name:"do_pad",val:": Optional = None"},{name:"return_tensors",val:": Union = None"},{name:"data_format",val:": ChannelDimension = <ChannelDimension.FIRST: 'channels_first'>"},{name:"input_data_format",val:": Union = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViltImageProcessor.preprocess.images",description:`<strong>images</strong> (<code>ImageInput</code>) &#x2014;
Image to preprocess. Expects a single or batch of images with pixel values ranging from 0 to 255. If
passing in images with pixel values between 0 and 1, set <code>do_rescale=False</code>.`,name:"images"},{anchor:"transformers.ViltImageProcessor.preprocess.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_resize</code>) &#x2014;
Whether to resize the image.`,name:"do_resize"},{anchor:"transformers.ViltImageProcessor.preprocess.size",description:`<strong>size</strong> (<code>Dict[str, int]</code>, <em>optional</em>, defaults to <code>self.size</code>) &#x2014;
Controls the size of the image after <code>resize</code>. The shortest edge of the image is resized to
<code>size[&quot;shortest_edge&quot;]</code> whilst preserving the aspect ratio. If the longest edge of this resized image
is &gt; <code>int(size[&quot;shortest_edge&quot;] * (1333 / 800))</code>, then the image is resized again to make the longest
edge equal to <code>int(size[&quot;shortest_edge&quot;] * (1333 / 800))</code>.`,name:"size"},{anchor:"transformers.ViltImageProcessor.preprocess.size_divisor",description:`<strong>size_divisor</strong> (<code>int</code>, <em>optional</em>, defaults to <code>self.size_divisor</code>) &#x2014;
The image is resized to a size that is a multiple of this value.`,name:"size_divisor"},{anchor:"transformers.ViltImageProcessor.preprocess.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>self.resample</code>) &#x2014;
Resampling filter to use if resizing the image. Only has an effect if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.ViltImageProcessor.preprocess.do_rescale",description:`<strong>do_rescale</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_rescale</code>) &#x2014;
Whether to rescale the image values between [0 - 1].`,name:"do_rescale"},{anchor:"transformers.ViltImageProcessor.preprocess.rescale_factor",description:`<strong>rescale_factor</strong> (<code>float</code>, <em>optional</em>, defaults to <code>self.rescale_factor</code>) &#x2014;
Rescale factor to rescale the image by if <code>do_rescale</code> is set to <code>True</code>.`,name:"rescale_factor"},{anchor:"transformers.ViltImageProcessor.preprocess.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_normalize</code>) &#x2014;
Whether to normalize the image.`,name:"do_normalize"},{anchor:"transformers.ViltImageProcessor.preprocess.image_mean",description:`<strong>image_mean</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>self.image_mean</code>) &#x2014;
Image mean to normalize the image by if <code>do_normalize</code> is set to <code>True</code>.`,name:"image_mean"},{anchor:"transformers.ViltImageProcessor.preprocess.image_std",description:`<strong>image_std</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>self.image_std</code>) &#x2014;
Image standard deviation to normalize the image by if <code>do_normalize</code> is set to <code>True</code>.`,name:"image_std"},{anchor:"transformers.ViltImageProcessor.preprocess.do_pad",description:`<strong>do_pad</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_pad</code>) &#x2014;
Whether to pad the image to the (max_height, max_width) in the batch. If <code>True</code>, a pixel mask is also
created and returned.`,name:"do_pad"},{anchor:"transformers.ViltImageProcessor.preprocess.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <code>TensorType</code>, <em>optional</em>) &#x2014;
The type of tensors to return. Can be one of:<ul>
<li>Unset: Return a list of <code>np.ndarray</code>.</li>
<li><code>TensorType.TENSORFLOW</code> or <code>&apos;tf&apos;</code>: Return a batch of type <code>tf.Tensor</code>.</li>
<li><code>TensorType.PYTORCH</code> or <code>&apos;pt&apos;</code>: Return a batch of type <code>torch.Tensor</code>.</li>
<li><code>TensorType.NUMPY</code> or <code>&apos;np&apos;</code>: Return a batch of type <code>np.ndarray</code>.</li>
<li><code>TensorType.JAX</code> or <code>&apos;jax&apos;</code>: Return a batch of type <code>jax.numpy.ndarray</code>.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.ViltImageProcessor.preprocess.data_format",description:`<strong>data_format</strong> (<code>ChannelDimension</code> or <code>str</code>, <em>optional</em>, defaults to <code>ChannelDimension.FIRST</code>) &#x2014;
The channel dimension format for the output image. Can be one of:<ul>
<li><code>ChannelDimension.FIRST</code>: image in (num_channels, height, width) format.</li>
<li><code>ChannelDimension.LAST</code>: image in (height, width, num_channels) format.</li>
</ul>`,name:"data_format"},{anchor:"transformers.ViltImageProcessor.preprocess.input_data_format",description:`<strong>input_data_format</strong> (<code>ChannelDimension</code> or <code>str</code>, <em>optional</em>) &#x2014;
The channel dimension format for the input image. If unset, the channel dimension format is inferred
from the input image. Can be one of:<ul>
<li><code>&quot;channels_first&quot;</code> or <code>ChannelDimension.FIRST</code>: image in (num_channels, height, width) format.</li>
<li><code>&quot;channels_last&quot;</code> or <code>ChannelDimension.LAST</code>: image in (height, width, num_channels) format.</li>
<li><code>&quot;none&quot;</code> or <code>ChannelDimension.NONE</code>: image in (height, width) format.</li>
</ul>`,name:"input_data_format"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vilt/image_processing_vilt.py#L336"}}),Ze=new J({props:{title:"ViltProcessor",local:"transformers.ViltProcessor",headingTag:"h2"}}),Ae=new V({props:{name:"class transformers.ViltProcessor",anchor:"transformers.ViltProcessor",parameters:[{name:"image_processor",val:" = None"},{name:"tokenizer",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ViltProcessor.image_processor",description:`<strong>image_processor</strong> (<code>ViltImageProcessor</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltImageProcessor">ViltImageProcessor</a>. The image processor is a required input.`,name:"image_processor"},{anchor:"transformers.ViltProcessor.tokenizer",description:"<strong>tokenizer</strong> (<code>BertTokenizerFast</code>, <em>optional</em>) &#x2014;\nAn instance of [&#x2018;BertTokenizerFast`]. The tokenizer is a required input.",name:"tokenizer"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vilt/processing_vilt.py#L27"}}),Le=new V({props:{name:"__call__",anchor:"transformers.ViltProcessor.__call__",parameters:[{name:"images",val:""},{name:"text",val:": Union = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": Union = False"},{name:"truncation",val:": Union = None"},{name:"max_length",val:": Optional = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": Optional = None"},{name:"return_token_type_ids",val:": Optional = None"},{name:"return_attention_mask",val:": Optional = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"return_tensors",val:": Union = None"},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vilt/processing_vilt.py#L64"}}),Be=new J({props:{title:"ViltModel",local:"transformers.ViltModel",headingTag:"h2"}}),Re=new V({props:{name:"class transformers.ViltModel",anchor:"transformers.ViltModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.ViltModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltConfig">ViltConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L712"}}),Ne=new V({props:{name:"forward",anchor:"transformers.ViltModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"pixel_values",val:": Optional = None"},{name:"pixel_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"image_embeds",val:": Optional = None"},{name:"image_token_type_idx",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.ViltModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.ViltModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.ViltModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.ViltModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoImageProcessor">AutoImageProcessor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor.__call__">ViltImageProcessor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltModel.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding pixel values. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for pixels that are real (i.e. <strong>not masked</strong>),</li>
<li>0 for pixels that are padding (i.e. <strong>masked</strong>).
<code>What are attention masks? &lt;../glossary.html#attention-mask&gt;</code>__</li>
</ul>`,name:"pixel_mask"},{anchor:"transformers.ViltModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViltModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ViltModel.forward.image_embeds",description:`<strong>image_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_patches, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>pixel_values</code>, you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>pixel_values</code> into patch embeddings.`,name:"image_embeds"},{anchor:"transformers.ViltModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViltModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViltModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L744",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltConfig"
>ViltConfig</a>) and inputs.</p>
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
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ae=new Jt({props:{$$slots:{default:[qn]},$$scope:{ctx:w}}}),re=new Ut({props:{anchor:"transformers.ViltModel.forward.example",$$slots:{default:[Gn]},$$scope:{ctx:w}}}),Pe=new J({props:{title:"ViltForMaskedLM",local:"transformers.ViltForMaskedLM",headingTag:"h2"}}),Qe=new V({props:{name:"class transformers.ViltForMaskedLM",anchor:"transformers.ViltForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ViltForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltConfig">ViltConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L876"}}),Se=new V({props:{name:"forward",anchor:"transformers.ViltForMaskedLM.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"pixel_values",val:": Optional = None"},{name:"pixel_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"image_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.ViltForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.ViltForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.ViltForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.ViltForMaskedLM.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoImageProcessor">AutoImageProcessor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor.__call__">ViltImageProcessor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForMaskedLM.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding pixel values. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for pixels that are real (i.e. <strong>not masked</strong>),</li>
<li>0 for pixels that are padding (i.e. <strong>masked</strong>).
<code>What are attention masks? &lt;../glossary.html#attention-mask&gt;</code>__</li>
</ul>`,name:"pixel_mask"},{anchor:"transformers.ViltForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViltForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ViltForMaskedLM.forward.image_embeds",description:`<strong>image_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_patches, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>pixel_values</code>, you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>pixel_values</code> into patch embeddings.`,name:"image_embeds"},{anchor:"transformers.ViltForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViltForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViltForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViltForMaskedLM.forward.labels",description:`<strong>labels</strong> (<em>torch.LongTensor</em> of shape <em>(batch_size, sequence_length)</em>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <em>[-100, 0, &#x2026;,
config.vocab_size]</em> (see <em>input_ids</em> docstring) Tokens with indices set to <em>-100</em> are ignored (masked), the
loss is only computed for the tokens with labels in <em>[0, &#x2026;, config.vocab_size]</em>`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L901",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltConfig"
>ViltConfig</a>) and inputs.</p>
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
`}}),ie=new Jt({props:{$$slots:{default:[En]},$$scope:{ctx:w}}}),le=new Ut({props:{anchor:"transformers.ViltForMaskedLM.forward.example",$$slots:{default:[On]},$$scope:{ctx:w}}}),He=new J({props:{title:"ViltForQuestionAnswering",local:"transformers.ViltForQuestionAnswering",headingTag:"h2"}}),qe=new V({props:{name:"class transformers.ViltForQuestionAnswering",anchor:"transformers.ViltForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ViltForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltConfig">ViltConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L1055"}}),Ge=new V({props:{name:"forward",anchor:"transformers.ViltForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"pixel_values",val:": Optional = None"},{name:"pixel_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"image_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.ViltForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.ViltForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.ViltForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.ViltForQuestionAnswering.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoImageProcessor">AutoImageProcessor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor.__call__">ViltImageProcessor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForQuestionAnswering.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding pixel values. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for pixels that are real (i.e. <strong>not masked</strong>),</li>
<li>0 for pixels that are padding (i.e. <strong>masked</strong>).
<code>What are attention masks? &lt;../glossary.html#attention-mask&gt;</code>__</li>
</ul>`,name:"pixel_mask"},{anchor:"transformers.ViltForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViltForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ViltForQuestionAnswering.forward.image_embeds",description:`<strong>image_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_patches, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>pixel_values</code>, you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>pixel_values</code> into patch embeddings.`,name:"image_embeds"},{anchor:"transformers.ViltForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViltForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViltForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViltForQuestionAnswering.forward.labels",description:`<strong>labels</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_labels)</code>, <em>optional</em>) &#x2014;
Labels for computing the visual question answering loss. This tensor must be either a one-hot encoding of
all answers that are applicable for a given example in the batch, or a soft encoding indicating which
answers are applicable, where 1.0 is the highest score.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L1080",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltConfig"
>ViltConfig</a>) and inputs.</p>
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
`}}),de=new Jt({props:{$$slots:{default:[Xn]},$$scope:{ctx:w}}}),ce=new Ut({props:{anchor:"transformers.ViltForQuestionAnswering.forward.example",$$slots:{default:[Dn]},$$scope:{ctx:w}}}),Ee=new J({props:{title:"ViltForImagesAndTextClassification",local:"transformers.ViltForImagesAndTextClassification",headingTag:"h2"}}),Oe=new V({props:{name:"class transformers.ViltForImagesAndTextClassification",anchor:"transformers.ViltForImagesAndTextClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ViltForImagesAndTextClassification.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.ViltForImagesAndTextClassification.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.ViltForImagesAndTextClassification.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.ViltForImagesAndTextClassification.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_images, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoImageProcessor">AutoImageProcessor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor.__call__">ViltImageProcessor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForImagesAndTextClassification.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_images, height, width)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding pixel values. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for pixels that are real (i.e. <strong>not masked</strong>),</li>
<li>0 for pixels that are padding (i.e. <strong>masked</strong>).
<code>What are attention masks? &lt;../glossary.html#attention-mask&gt;</code>__</li>
</ul>`,name:"pixel_mask"},{anchor:"transformers.ViltForImagesAndTextClassification.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViltForImagesAndTextClassification.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ViltForImagesAndTextClassification.image_embeds",description:`<strong>image_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_images, num_patches, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>pixel_values</code>, you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>pixel_values</code> into patch embeddings.`,name:"image_embeds"},{anchor:"transformers.ViltForImagesAndTextClassification.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViltForImagesAndTextClassification.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViltForImagesAndTextClassification.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L1270"}}),Xe=new V({props:{name:"forward",anchor:"transformers.ViltForImagesAndTextClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"pixel_values",val:": Optional = None"},{name:"pixel_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"image_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.ViltForImagesAndTextClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoImageProcessor">AutoImageProcessor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor.__call__">ViltImageProcessor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding pixel values. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for pixels that are real (i.e. <strong>not masked</strong>),</li>
<li>0 for pixels that are padding (i.e. <strong>masked</strong>).
<code>What are attention masks? &lt;../glossary.html#attention-mask&gt;</code>__</li>
</ul>`,name:"pixel_mask"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.image_embeds",description:`<strong>image_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_patches, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>pixel_values</code>, you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>pixel_values</code> into patch embeddings.`,name:"image_embeds"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViltForImagesAndTextClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Binary classification labels.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L1295",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.models.vilt.modeling_vilt.ViltForImagesAndTextClassificationOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltConfig"
>ViltConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Classification (or regression if config.num_labels==1) loss.</li>
<li><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) — Classification (or regression if config.num_labels==1) scores (before SoftMax).</li>
<li><strong>hidden_states</strong> (<code>List[tuple(torch.FloatTensor)]</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — List of tuples of <code>torch.FloatTensor</code> (one for each image-text pair, each tuple containing the output of
the embeddings + one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.
Hidden-states of the model at the output of each layer plus the initial embedding outputs.</li>
<li><strong>attentions</strong> (<code>List[tuple(torch.FloatTensor)]</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — List of tuples of <code>torch.FloatTensor</code> (one for each image-text pair, each tuple containing the attention
weights of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the
attention softmax, used to compute the weighted average in the self-attention heads.</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.models.vilt.modeling_vilt.ViltForImagesAndTextClassificationOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),me=new Jt({props:{$$slots:{default:[Yn]},$$scope:{ctx:w}}}),pe=new Ut({props:{anchor:"transformers.ViltForImagesAndTextClassification.forward.example",$$slots:{default:[Kn]},$$scope:{ctx:w}}}),De=new J({props:{title:"ViltForImageAndTextRetrieval",local:"transformers.ViltForImageAndTextRetrieval",headingTag:"h2"}}),Ye=new V({props:{name:"class transformers.ViltForImageAndTextRetrieval",anchor:"transformers.ViltForImageAndTextRetrieval",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ViltForImageAndTextRetrieval.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltConfig">ViltConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L1168"}}),Ke=new V({props:{name:"forward",anchor:"transformers.ViltForImageAndTextRetrieval.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"pixel_values",val:": Optional = None"},{name:"pixel_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"image_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.ViltForImageAndTextRetrieval.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoImageProcessor">AutoImageProcessor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor.__call__">ViltImageProcessor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding pixel values. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for pixels that are real (i.e. <strong>not masked</strong>),</li>
<li>0 for pixels that are padding (i.e. <strong>masked</strong>).
<code>What are attention masks? &lt;../glossary.html#attention-mask&gt;</code>__</li>
</ul>`,name:"pixel_mask"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.image_embeds",description:`<strong>image_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_patches, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>pixel_values</code>, you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>pixel_values</code> into patch embeddings.`,name:"image_embeds"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViltForImageAndTextRetrieval.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels are currently not supported.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L1187",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltConfig"
>ViltConfig</a>) and inputs.</p>
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
`}}),he=new Jt({props:{$$slots:{default:[es]},$$scope:{ctx:w}}}),ue=new Ut({props:{anchor:"transformers.ViltForImageAndTextRetrieval.forward.example",$$slots:{default:[ts]},$$scope:{ctx:w}}}),et=new J({props:{title:"ViltForTokenClassification",local:"transformers.ViltForTokenClassification",headingTag:"h2"}}),tt=new V({props:{name:"class transformers.ViltForTokenClassification",anchor:"transformers.ViltForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ViltForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltConfig">ViltConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L1411"}}),ot=new V({props:{name:"forward",anchor:"transformers.ViltForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"pixel_values",val:": Optional = None"},{name:"pixel_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"image_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.ViltForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details. <a href="../glossary#input-ids">What are input
IDs?</a>`,name:"input_ids"},{anchor:"transformers.ViltForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.
<a href="../glossary#attention-mask">What are attention masks?</a></li>
</ul>`,name:"attention_mask"},{anchor:"transformers.ViltForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>({0})</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.
<a href="../glossary#token-type-ids">What are token type IDs?</a></li>
</ul>`,name:"token_type_ids"},{anchor:"transformers.ViltForTokenClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoImageProcessor">AutoImageProcessor</a>. See
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor.__call__">ViltImageProcessor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.ViltForTokenClassification.forward.pixel_mask",description:`<strong>pixel_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding pixel values. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for pixels that are real (i.e. <strong>not masked</strong>),</li>
<li>0 for pixels that are padding (i.e. <strong>masked</strong>).
<code>What are attention masks? &lt;../glossary.html#attention-mask&gt;</code>__</li>
</ul>`,name:"pixel_mask"},{anchor:"transformers.ViltForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.ViltForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>({0}, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.ViltForTokenClassification.forward.image_embeds",description:`<strong>image_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_patches, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>pixel_values</code>, you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>pixel_values</code> into patch embeddings.`,name:"image_embeds"},{anchor:"transformers.ViltForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.ViltForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.ViltForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.ViltForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, text_sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vilt/modeling_vilt.py#L1431",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/vilt#transformers.ViltConfig"
>ViltConfig</a>) and inputs.</p>
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
`}}),fe=new Jt({props:{$$slots:{default:[os]},$$scope:{ctx:w}}}),{c(){t=c("meta"),v=a(),l=c("p"),p=a(),h(M.$$.fragment),o=a(),h(y.$$.fragment),At=a(),Me=c("p"),Me.innerHTML=rn,Lt=a(),ye=c("p"),ye.textContent=ln,Bt=a(),we=c("p"),we.innerHTML=dn,Rt=a(),te=c("img"),Nt=a(),ke=c("small"),ke.innerHTML=mn,Pt=a(),xe=c("p"),xe.innerHTML=pn,Qt=a(),h(Ve.$$.fragment),St=a(),$e=c("ul"),$e.innerHTML=hn,Ht=a(),h(je.$$.fragment),qt=a(),$=c("div"),h(Ce.$$.fragment),uo=a(),rt=c("p"),rt.innerHTML=un,fo=a(),it=c("p"),it.innerHTML=fn,go=a(),h(oe.$$.fragment),Gt=a(),h(Ie.$$.fragment),Et=a(),D=c("div"),h(ze.$$.fragment),_o=a(),ne=c("div"),h(Fe.$$.fragment),bo=a(),lt=c("p"),lt.textContent=gn,Ot=a(),h(Je.$$.fragment),Xt=a(),R=c("div"),h(Ue.$$.fragment),To=a(),dt=c("p"),dt.textContent=_n,vo=a(),se=c("div"),h(We.$$.fragment),Mo=a(),ct=c("p"),ct.textContent=bn,Dt=a(),h(Ze.$$.fragment),Yt=a(),j=c("div"),h(Ae.$$.fragment),yo=a(),mt=c("p"),mt.textContent=Tn,wo=a(),pt=c("p"),pt.innerHTML=vn,ko=a(),O=c("div"),h(Le.$$.fragment),xo=a(),ht=c("p"),ht.innerHTML=Mn,Vo=a(),ut=c("p"),ut.textContent=yn,Kt=a(),h(Be.$$.fragment),eo=a(),N=c("div"),h(Re.$$.fragment),$o=a(),ft=c("p"),ft.innerHTML=wn,jo=a(),U=c("div"),h(Ne.$$.fragment),Co=a(),gt=c("p"),gt.innerHTML=kn,Io=a(),h(ae.$$.fragment),zo=a(),h(re.$$.fragment),to=a(),h(Pe.$$.fragment),oo=a(),C=c("div"),h(Qe.$$.fragment),Fo=a(),_t=c("p"),_t.textContent=xn,Jo=a(),bt=c("p"),bt.innerHTML=Vn,Uo=a(),W=c("div"),h(Se.$$.fragment),Wo=a(),Tt=c("p"),Tt.innerHTML=$n,Zo=a(),h(ie.$$.fragment),Ao=a(),h(le.$$.fragment),no=a(),h(He.$$.fragment),so=a(),I=c("div"),h(qe.$$.fragment),Lo=a(),vt=c("p"),vt.textContent=jn,Bo=a(),Mt=c("p"),Mt.innerHTML=Cn,Ro=a(),Z=c("div"),h(Ge.$$.fragment),No=a(),yt=c("p"),yt.innerHTML=In,Po=a(),h(de.$$.fragment),Qo=a(),h(ce.$$.fragment),ao=a(),h(Ee.$$.fragment),ro=a(),P=c("div"),h(Oe.$$.fragment),So=a(),wt=c("p"),wt.textContent=zn,Ho=a(),A=c("div"),h(Xe.$$.fragment),qo=a(),kt=c("p"),kt.innerHTML=Fn,Go=a(),h(me.$$.fragment),Eo=a(),h(pe.$$.fragment),io=a(),h(De.$$.fragment),lo=a(),z=c("div"),h(Ye.$$.fragment),Oo=a(),xt=c("p"),xt.textContent=Jn,Xo=a(),Vt=c("p"),Vt.innerHTML=Un,Do=a(),L=c("div"),h(Ke.$$.fragment),Yo=a(),$t=c("p"),$t.innerHTML=Wn,Ko=a(),h(he.$$.fragment),en=a(),h(ue.$$.fragment),co=a(),h(et.$$.fragment),mo=a(),F=c("div"),h(tt.$$.fragment),tn=a(),jt=c("p"),jt.textContent=Zn,on=a(),Ct=c("p"),Ct.innerHTML=An,nn=a(),X=c("div"),h(ot.$$.fragment),sn=a(),It=c("p"),It.innerHTML=Ln,an=a(),h(fe.$$.fragment),po=a(),Zt=c("p"),this.h()},l(e){const n=Sn("svelte-u9bgzb",document.head);t=m(n,"META",{name:!0,content:!0}),n.forEach(s),v=r(e),l=m(e,"P",{}),x(l).forEach(s),p=r(e),u(M.$$.fragment,e),o=r(e),u(y.$$.fragment,e),At=r(e),Me=m(e,"P",{"data-svelte-h":!0}),T(Me)!=="svelte-1sns4yo"&&(Me.innerHTML=rn),Lt=r(e),ye=m(e,"P",{"data-svelte-h":!0}),T(ye)!=="svelte-vfdo9a"&&(ye.textContent=ln),Bt=r(e),we=m(e,"P",{"data-svelte-h":!0}),T(we)!=="svelte-44uf49"&&(we.innerHTML=dn),Rt=r(e),te=m(e,"IMG",{src:!0,alt:!0,width:!0}),Nt=r(e),ke=m(e,"SMALL",{"data-svelte-h":!0}),T(ke)!=="svelte-beum5h"&&(ke.innerHTML=mn),Pt=r(e),xe=m(e,"P",{"data-svelte-h":!0}),T(xe)!=="svelte-1u1ca4l"&&(xe.innerHTML=pn),Qt=r(e),u(Ve.$$.fragment,e),St=r(e),$e=m(e,"UL",{"data-svelte-h":!0}),T($e)!=="svelte-13z5acu"&&($e.innerHTML=hn),Ht=r(e),u(je.$$.fragment,e),qt=r(e),$=m(e,"DIV",{class:!0});var Q=x($);u(Ce.$$.fragment,Q),uo=r(Q),rt=m(Q,"P",{"data-svelte-h":!0}),T(rt)!=="svelte-u7ypkj"&&(rt.innerHTML=un),fo=r(Q),it=m(Q,"P",{"data-svelte-h":!0}),T(it)!=="svelte-o55m63"&&(it.innerHTML=fn),go=r(Q),u(oe.$$.fragment,Q),Q.forEach(s),Gt=r(e),u(Ie.$$.fragment,e),Et=r(e),D=m(e,"DIV",{class:!0});var nt=x(D);u(ze.$$.fragment,nt),_o=r(nt),ne=m(nt,"DIV",{class:!0});var st=x(ne);u(Fe.$$.fragment,st),bo=r(st),lt=m(st,"P",{"data-svelte-h":!0}),T(lt)!=="svelte-khengj"&&(lt.textContent=gn),st.forEach(s),nt.forEach(s),Ot=r(e),u(Je.$$.fragment,e),Xt=r(e),R=m(e,"DIV",{class:!0});var Y=x(R);u(Ue.$$.fragment,Y),To=r(Y),dt=m(Y,"P",{"data-svelte-h":!0}),T(dt)!=="svelte-1mh06yd"&&(dt.textContent=_n),vo=r(Y),se=m(Y,"DIV",{class:!0});var at=x(se);u(We.$$.fragment,at),Mo=r(at),ct=m(at,"P",{"data-svelte-h":!0}),T(ct)!=="svelte-1x3yxsa"&&(ct.textContent=bn),at.forEach(s),Y.forEach(s),Dt=r(e),u(Ze.$$.fragment,e),Yt=r(e),j=m(e,"DIV",{class:!0});var S=x(j);u(Ae.$$.fragment,S),yo=r(S),mt=m(S,"P",{"data-svelte-h":!0}),T(mt)!=="svelte-1w20qql"&&(mt.textContent=Tn),wo=r(S),pt=m(S,"P",{"data-svelte-h":!0}),T(pt)!=="svelte-nxfzqg"&&(pt.innerHTML=vn),ko=r(S),O=m(S,"DIV",{class:!0});var K=x(O);u(Le.$$.fragment,K),xo=r(K),ht=m(K,"P",{"data-svelte-h":!0}),T(ht)!=="svelte-1ochozt"&&(ht.innerHTML=Mn),Vo=r(K),ut=m(K,"P",{"data-svelte-h":!0}),T(ut)!=="svelte-ws0hzs"&&(ut.textContent=yn),K.forEach(s),S.forEach(s),Kt=r(e),u(Be.$$.fragment,e),eo=r(e),N=m(e,"DIV",{class:!0});var ee=x(N);u(Re.$$.fragment,ee),$o=r(ee),ft=m(ee,"P",{"data-svelte-h":!0}),T(ft)!=="svelte-ro5b92"&&(ft.innerHTML=wn),jo=r(ee),U=m(ee,"DIV",{class:!0});var H=x(U);u(Ne.$$.fragment,H),Co=r(H),gt=m(H,"P",{"data-svelte-h":!0}),T(gt)!=="svelte-qf2mqc"&&(gt.innerHTML=kn),Io=r(H),u(ae.$$.fragment,H),zo=r(H),u(re.$$.fragment,H),H.forEach(s),ee.forEach(s),to=r(e),u(Pe.$$.fragment,e),oo=r(e),C=m(e,"DIV",{class:!0});var q=x(C);u(Qe.$$.fragment,q),Fo=r(q),_t=m(q,"P",{"data-svelte-h":!0}),T(_t)!=="svelte-fi8ziq"&&(_t.textContent=xn),Jo=r(q),bt=m(q,"P",{"data-svelte-h":!0}),T(bt)!=="svelte-1alo1i2"&&(bt.innerHTML=Vn),Uo=r(q),W=m(q,"DIV",{class:!0});var G=x(W);u(Se.$$.fragment,G),Wo=r(G),Tt=m(G,"P",{"data-svelte-h":!0}),T(Tt)!=="svelte-s8kppw"&&(Tt.innerHTML=$n),Zo=r(G),u(ie.$$.fragment,G),Ao=r(G),u(le.$$.fragment,G),G.forEach(s),q.forEach(s),no=r(e),u(He.$$.fragment,e),so=r(e),I=m(e,"DIV",{class:!0});var E=x(I);u(qe.$$.fragment,E),Lo=r(E),vt=m(E,"P",{"data-svelte-h":!0}),T(vt)!=="svelte-14c41nz"&&(vt.textContent=jn),Bo=r(E),Mt=m(E,"P",{"data-svelte-h":!0}),T(Mt)!=="svelte-1alo1i2"&&(Mt.innerHTML=Cn),Ro=r(E),Z=m(E,"DIV",{class:!0});var ge=x(Z);u(Ge.$$.fragment,ge),No=r(ge),yt=m(ge,"P",{"data-svelte-h":!0}),T(yt)!=="svelte-1ac2hp0"&&(yt.innerHTML=In),Po=r(ge),u(de.$$.fragment,ge),Qo=r(ge),u(ce.$$.fragment,ge),ge.forEach(s),E.forEach(s),ao=r(e),u(Ee.$$.fragment,e),ro=r(e),P=m(e,"DIV",{class:!0});var zt=x(P);u(Oe.$$.fragment,zt),So=r(zt),wt=m(zt,"P",{"data-svelte-h":!0}),T(wt)!=="svelte-1uhjqed"&&(wt.textContent=zn),Ho=r(zt),A=m(zt,"DIV",{class:!0});var _e=x(A);u(Xe.$$.fragment,_e),qo=r(_e),kt=m(_e,"P",{"data-svelte-h":!0}),T(kt)!=="svelte-14n41to"&&(kt.innerHTML=Fn),Go=r(_e),u(me.$$.fragment,_e),Eo=r(_e),u(pe.$$.fragment,_e),_e.forEach(s),zt.forEach(s),io=r(e),u(De.$$.fragment,e),lo=r(e),z=m(e,"DIV",{class:!0});var be=x(z);u(Ye.$$.fragment,be),Oo=r(be),xt=m(be,"P",{"data-svelte-h":!0}),T(xt)!=="svelte-1mcrono"&&(xt.textContent=Jn),Xo=r(be),Vt=m(be,"P",{"data-svelte-h":!0}),T(Vt)!=="svelte-1alo1i2"&&(Vt.innerHTML=Un),Do=r(be),L=m(be,"DIV",{class:!0});var Te=x(L);u(Ke.$$.fragment,Te),Yo=r(Te),$t=m(Te,"P",{"data-svelte-h":!0}),T($t)!=="svelte-vqrmvm"&&($t.innerHTML=Wn),Ko=r(Te),u(he.$$.fragment,Te),en=r(Te),u(ue.$$.fragment,Te),Te.forEach(s),be.forEach(s),co=r(e),u(et.$$.fragment,e),mo=r(e),F=m(e,"DIV",{class:!0});var ve=x(F);u(tt.$$.fragment,ve),tn=r(ve),jt=m(ve,"P",{"data-svelte-h":!0}),T(jt)!=="svelte-1c1gzwa"&&(jt.textContent=Zn),on=r(ve),Ct=m(ve,"P",{"data-svelte-h":!0}),T(Ct)!=="svelte-1alo1i2"&&(Ct.innerHTML=An),nn=r(ve),X=m(ve,"DIV",{class:!0});var Ft=x(X);u(ot.$$.fragment,Ft),sn=r(Ft),It=m(Ft,"P",{"data-svelte-h":!0}),T(It)!=="svelte-j6t57u"&&(It.innerHTML=Ln),an=r(Ft),u(fe.$$.fragment,Ft),Ft.forEach(s),ve.forEach(s),po=r(e),Zt=m(e,"P",{}),x(Zt).forEach(s),this.h()},h(){k(t,"name","hf:doc:metadata"),k(t,"content",ss),Rn(te.src,cn="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/vilt_architecture.jpg")||k(te,"src",cn),k(te,"alt","drawing"),k(te,"width","600"),k($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,n){i(document.head,t),d(e,v,n),d(e,l,n),d(e,p,n),f(M,e,n),d(e,o,n),f(y,e,n),d(e,At,n),d(e,Me,n),d(e,Lt,n),d(e,ye,n),d(e,Bt,n),d(e,we,n),d(e,Rt,n),d(e,te,n),d(e,Nt,n),d(e,ke,n),d(e,Pt,n),d(e,xe,n),d(e,Qt,n),f(Ve,e,n),d(e,St,n),d(e,$e,n),d(e,Ht,n),f(je,e,n),d(e,qt,n),d(e,$,n),f(Ce,$,null),i($,uo),i($,rt),i($,fo),i($,it),i($,go),f(oe,$,null),d(e,Gt,n),f(Ie,e,n),d(e,Et,n),d(e,D,n),f(ze,D,null),i(D,_o),i(D,ne),f(Fe,ne,null),i(ne,bo),i(ne,lt),d(e,Ot,n),f(Je,e,n),d(e,Xt,n),d(e,R,n),f(Ue,R,null),i(R,To),i(R,dt),i(R,vo),i(R,se),f(We,se,null),i(se,Mo),i(se,ct),d(e,Dt,n),f(Ze,e,n),d(e,Yt,n),d(e,j,n),f(Ae,j,null),i(j,yo),i(j,mt),i(j,wo),i(j,pt),i(j,ko),i(j,O),f(Le,O,null),i(O,xo),i(O,ht),i(O,Vo),i(O,ut),d(e,Kt,n),f(Be,e,n),d(e,eo,n),d(e,N,n),f(Re,N,null),i(N,$o),i(N,ft),i(N,jo),i(N,U),f(Ne,U,null),i(U,Co),i(U,gt),i(U,Io),f(ae,U,null),i(U,zo),f(re,U,null),d(e,to,n),f(Pe,e,n),d(e,oo,n),d(e,C,n),f(Qe,C,null),i(C,Fo),i(C,_t),i(C,Jo),i(C,bt),i(C,Uo),i(C,W),f(Se,W,null),i(W,Wo),i(W,Tt),i(W,Zo),f(ie,W,null),i(W,Ao),f(le,W,null),d(e,no,n),f(He,e,n),d(e,so,n),d(e,I,n),f(qe,I,null),i(I,Lo),i(I,vt),i(I,Bo),i(I,Mt),i(I,Ro),i(I,Z),f(Ge,Z,null),i(Z,No),i(Z,yt),i(Z,Po),f(de,Z,null),i(Z,Qo),f(ce,Z,null),d(e,ao,n),f(Ee,e,n),d(e,ro,n),d(e,P,n),f(Oe,P,null),i(P,So),i(P,wt),i(P,Ho),i(P,A),f(Xe,A,null),i(A,qo),i(A,kt),i(A,Go),f(me,A,null),i(A,Eo),f(pe,A,null),d(e,io,n),f(De,e,n),d(e,lo,n),d(e,z,n),f(Ye,z,null),i(z,Oo),i(z,xt),i(z,Xo),i(z,Vt),i(z,Do),i(z,L),f(Ke,L,null),i(L,Yo),i(L,$t),i(L,Ko),f(he,L,null),i(L,en),f(ue,L,null),d(e,co,n),f(et,e,n),d(e,mo,n),d(e,F,n),f(tt,F,null),i(F,tn),i(F,jt),i(F,on),i(F,Ct),i(F,nn),i(F,X),f(ot,X,null),i(X,sn),i(X,It),i(X,an),f(fe,X,null),d(e,po,n),d(e,Zt,n),ho=!0},p(e,[n]){const Q={};n&2&&(Q.$$scope={dirty:n,ctx:e}),oe.$set(Q);const nt={};n&2&&(nt.$$scope={dirty:n,ctx:e}),ae.$set(nt);const st={};n&2&&(st.$$scope={dirty:n,ctx:e}),re.$set(st);const Y={};n&2&&(Y.$$scope={dirty:n,ctx:e}),ie.$set(Y);const at={};n&2&&(at.$$scope={dirty:n,ctx:e}),le.$set(at);const S={};n&2&&(S.$$scope={dirty:n,ctx:e}),de.$set(S);const K={};n&2&&(K.$$scope={dirty:n,ctx:e}),ce.$set(K);const ee={};n&2&&(ee.$$scope={dirty:n,ctx:e}),me.$set(ee);const H={};n&2&&(H.$$scope={dirty:n,ctx:e}),pe.$set(H);const q={};n&2&&(q.$$scope={dirty:n,ctx:e}),he.$set(q);const G={};n&2&&(G.$$scope={dirty:n,ctx:e}),ue.$set(G);const E={};n&2&&(E.$$scope={dirty:n,ctx:e}),fe.$set(E)},i(e){ho||(g(M.$$.fragment,e),g(y.$$.fragment,e),g(Ve.$$.fragment,e),g(je.$$.fragment,e),g(Ce.$$.fragment,e),g(oe.$$.fragment,e),g(Ie.$$.fragment,e),g(ze.$$.fragment,e),g(Fe.$$.fragment,e),g(Je.$$.fragment,e),g(Ue.$$.fragment,e),g(We.$$.fragment,e),g(Ze.$$.fragment,e),g(Ae.$$.fragment,e),g(Le.$$.fragment,e),g(Be.$$.fragment,e),g(Re.$$.fragment,e),g(Ne.$$.fragment,e),g(ae.$$.fragment,e),g(re.$$.fragment,e),g(Pe.$$.fragment,e),g(Qe.$$.fragment,e),g(Se.$$.fragment,e),g(ie.$$.fragment,e),g(le.$$.fragment,e),g(He.$$.fragment,e),g(qe.$$.fragment,e),g(Ge.$$.fragment,e),g(de.$$.fragment,e),g(ce.$$.fragment,e),g(Ee.$$.fragment,e),g(Oe.$$.fragment,e),g(Xe.$$.fragment,e),g(me.$$.fragment,e),g(pe.$$.fragment,e),g(De.$$.fragment,e),g(Ye.$$.fragment,e),g(Ke.$$.fragment,e),g(he.$$.fragment,e),g(ue.$$.fragment,e),g(et.$$.fragment,e),g(tt.$$.fragment,e),g(ot.$$.fragment,e),g(fe.$$.fragment,e),ho=!0)},o(e){_(M.$$.fragment,e),_(y.$$.fragment,e),_(Ve.$$.fragment,e),_(je.$$.fragment,e),_(Ce.$$.fragment,e),_(oe.$$.fragment,e),_(Ie.$$.fragment,e),_(ze.$$.fragment,e),_(Fe.$$.fragment,e),_(Je.$$.fragment,e),_(Ue.$$.fragment,e),_(We.$$.fragment,e),_(Ze.$$.fragment,e),_(Ae.$$.fragment,e),_(Le.$$.fragment,e),_(Be.$$.fragment,e),_(Re.$$.fragment,e),_(Ne.$$.fragment,e),_(ae.$$.fragment,e),_(re.$$.fragment,e),_(Pe.$$.fragment,e),_(Qe.$$.fragment,e),_(Se.$$.fragment,e),_(ie.$$.fragment,e),_(le.$$.fragment,e),_(He.$$.fragment,e),_(qe.$$.fragment,e),_(Ge.$$.fragment,e),_(de.$$.fragment,e),_(ce.$$.fragment,e),_(Ee.$$.fragment,e),_(Oe.$$.fragment,e),_(Xe.$$.fragment,e),_(me.$$.fragment,e),_(pe.$$.fragment,e),_(De.$$.fragment,e),_(Ye.$$.fragment,e),_(Ke.$$.fragment,e),_(he.$$.fragment,e),_(ue.$$.fragment,e),_(et.$$.fragment,e),_(tt.$$.fragment,e),_(ot.$$.fragment,e),_(fe.$$.fragment,e),ho=!1},d(e){e&&(s(v),s(l),s(p),s(o),s(At),s(Me),s(Lt),s(ye),s(Bt),s(we),s(Rt),s(te),s(Nt),s(ke),s(Pt),s(xe),s(Qt),s(St),s($e),s(Ht),s(qt),s($),s(Gt),s(Et),s(D),s(Ot),s(Xt),s(R),s(Dt),s(Yt),s(j),s(Kt),s(eo),s(N),s(to),s(oo),s(C),s(no),s(so),s(I),s(ao),s(ro),s(P),s(io),s(lo),s(z),s(co),s(mo),s(F),s(po),s(Zt)),s(t),b(M,e),b(y,e),b(Ve,e),b(je,e),b(Ce),b(oe),b(Ie,e),b(ze),b(Fe),b(Je,e),b(Ue),b(We),b(Ze,e),b(Ae),b(Le),b(Be,e),b(Re),b(Ne),b(ae),b(re),b(Pe,e),b(Qe),b(Se),b(ie),b(le),b(He,e),b(qe),b(Ge),b(de),b(ce),b(Ee,e),b(Oe),b(Xe),b(me),b(pe),b(De,e),b(Ye),b(Ke),b(he),b(ue),b(et,e),b(tt),b(ot),b(fe)}}}const ss='{"title":"ViLT","local":"vilt","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"ViltConfig","local":"transformers.ViltConfig","sections":[],"depth":2},{"title":"ViltFeatureExtractor","local":"transformers.ViltFeatureExtractor","sections":[],"depth":2},{"title":"ViltImageProcessor","local":"transformers.ViltImageProcessor","sections":[],"depth":2},{"title":"ViltProcessor","local":"transformers.ViltProcessor","sections":[],"depth":2},{"title":"ViltModel","local":"transformers.ViltModel","sections":[],"depth":2},{"title":"ViltForMaskedLM","local":"transformers.ViltForMaskedLM","sections":[],"depth":2},{"title":"ViltForQuestionAnswering","local":"transformers.ViltForQuestionAnswering","sections":[],"depth":2},{"title":"ViltForImagesAndTextClassification","local":"transformers.ViltForImagesAndTextClassification","sections":[],"depth":2},{"title":"ViltForImageAndTextRetrieval","local":"transformers.ViltForImageAndTextRetrieval","sections":[],"depth":2},{"title":"ViltForTokenClassification","local":"transformers.ViltForTokenClassification","sections":[],"depth":2}],"depth":1}';function as(w){return Nn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class hs extends Pn{constructor(t){super(),Qn(this,t,as,ns,Bn,{})}}export{hs as component};
