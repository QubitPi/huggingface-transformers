import{s as Xa,o as Ga,n as P}from"../chunks/scheduler.9bc65507.js";import{S as Va,i as Qa,g as i,s as n,r as u,A as Ya,h as l,f as o,c as s,j as L,u as h,x as m,k,y as r,a,v as f,d as g,t as _,w as y}from"../chunks/index.707bf1b6.js";import{T as Rn}from"../chunks/Tip.c2ecdbf4.js";import{D as x}from"../chunks/Docstring.17db21ae.js";import{C as z}from"../chunks/CodeBlock.54a9f38d.js";import{E as wo}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{P as Zs}from"../chunks/PipelineTag.44585822.js";import{H as $}from"../chunks/Heading.342b1fa6.js";function Ea(T){let d,M="Example:",c,b,v;return b=new z({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMExheW91dExNdjJDb25maWclMkMlMjBMYXlvdXRMTXYyTW9kZWwlMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwTGF5b3V0TE12MiUyMG1pY3Jvc29mdCUyRmxheW91dGxtdjItYmFzZS11bmNhc2VkJTIwc3R5bGUlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMExheW91dExNdjJDb25maWcoKSUwQSUwQSUyMyUyMEluaXRpYWxpemluZyUyMGElMjBtb2RlbCUyMCh3aXRoJTIwcmFuZG9tJTIwd2VpZ2h0cyklMjBmcm9tJTIwdGhlJTIwbWljcm9zb2Z0JTJGbGF5b3V0bG12Mi1iYXNlLXVuY2FzZWQlMjBzdHlsZSUyMGNvbmZpZ3VyYXRpb24lMEFtb2RlbCUyMCUzRCUyMExheW91dExNdjJNb2RlbChjb25maWd1cmF0aW9uKSUwQSUwQSUyMyUyMEFjY2Vzc2luZyUyMHRoZSUyMG1vZGVsJTIwY29uZmlndXJhdGlvbiUwQWNvbmZpZ3VyYXRpb24lMjAlM0QlMjBtb2RlbC5jb25maWc=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Config, LayoutLMv2Model

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a LayoutLMv2 microsoft/layoutlmv2-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = LayoutLMv2Config()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the microsoft/layoutlmv2-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMv2Model(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){d=i("p"),d.textContent=M,c=n(),u(b.$$.fragment)},l(p){d=l(p,"P",{"data-svelte-h":!0}),m(d)!=="svelte-11lpom8"&&(d.textContent=M),c=s(p),h(b.$$.fragment,p)},m(p,w){a(p,d,w),a(p,c,w),f(b,p,w),v=!0},p:P,i(p){v||(g(b.$$.fragment,p),v=!0)},o(p){_(b.$$.fragment,p),v=!1},d(p){p&&(o(d),o(c)),y(b,p)}}}function Ha(T){let d,M=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){d=i("p"),d.innerHTML=M},l(c){d=l(c,"P",{"data-svelte-h":!0}),m(d)!=="svelte-fincs2"&&(d.innerHTML=M)},m(c,b){a(c,d,b)},p:P,d(c){c&&o(d)}}}function Pa(T){let d,M="Examples:",c,b,v;return b=new z({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Qcm9jZXNzb3IlMkMlMjBMYXlvdXRMTXYyTW9kZWwlMkMlMjBzZXRfc2VlZCUwQWZyb20lMjBQSUwlMjBpbXBvcnQlMjBJbWFnZSUwQWltcG9ydCUyMHRvcmNoJTBBZnJvbSUyMGRhdGFzZXRzJTIwaW1wb3J0JTIwbG9hZF9kYXRhc2V0JTBBJTBBc2V0X3NlZWQoODgpJTBBJTBBcHJvY2Vzc29yJTIwJTNEJTIwQXV0b1Byb2Nlc3Nvci5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGbGF5b3V0bG12Mi1iYXNlLXVuY2FzZWQlMjIpJTBBbW9kZWwlMjAlM0QlMjBMYXlvdXRMTXYyTW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRmxheW91dGxtdjItYmFzZS11bmNhc2VkJTIyKSUwQSUwQSUwQWRhdGFzZXQlMjAlM0QlMjBsb2FkX2RhdGFzZXQoJTIyaGYtaW50ZXJuYWwtdGVzdGluZyUyRmZpeHR1cmVzX2RvY3ZxYSUyMiklMEFpbWFnZV9wYXRoJTIwJTNEJTIwZGF0YXNldCU1QiUyMnRlc3QlMjIlNUQlNUIwJTVEJTVCJTIyZmlsZSUyMiU1RCUwQWltYWdlJTIwJTNEJTIwSW1hZ2Uub3BlbihpbWFnZV9wYXRoKS5jb252ZXJ0KCUyMlJHQiUyMiklMEElMEFlbmNvZGluZyUyMCUzRCUyMHByb2Nlc3NvcihpbWFnZSUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqZW5jb2RpbmcpJTBBbGFzdF9oaWRkZW5fc3RhdGVzJTIwJTNEJTIwb3V0cHV0cy5sYXN0X2hpZGRlbl9zdGF0ZSUwQSUwQWxhc3RfaGlkZGVuX3N0YXRlcy5zaGFwZQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, LayoutLMv2Model, set_seed
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>set_seed(<span class="hljs-number">88</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMv2Model.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/fixtures_docvqa&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image_path = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-string">&quot;file&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(image_path).convert(<span class="hljs-string">&quot;RGB&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states.shape
torch.Size([<span class="hljs-number">1</span>, <span class="hljs-number">342</span>, <span class="hljs-number">768</span>])`,wrap:!1}}),{c(){d=i("p"),d.textContent=M,c=n(),u(b.$$.fragment)},l(p){d=l(p,"P",{"data-svelte-h":!0}),m(d)!=="svelte-kvfsh7"&&(d.textContent=M),c=s(p),h(b.$$.fragment,p)},m(p,w){a(p,d,w),a(p,c,w),f(b,p,w),v=!0},p:P,i(p){v||(g(b.$$.fragment,p),v=!0)},o(p){_(b.$$.fragment,p),v=!1},d(p){p&&(o(d),o(c)),y(b,p)}}}function Sa(T){let d,M=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){d=i("p"),d.innerHTML=M},l(c){d=l(c,"P",{"data-svelte-h":!0}),m(d)!=="svelte-fincs2"&&(d.innerHTML=M)},m(c,b){a(c,d,b)},p:P,d(c){c&&o(d)}}}function Aa(T){let d,M="Example:",c,b,v;return b=new z({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Qcm9jZXNzb3IlMkMlMjBMYXlvdXRMTXYyRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbiUyQyUyMHNldF9zZWVkJTBBZnJvbSUyMFBJTCUyMGltcG9ydCUyMEltYWdlJTBBaW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwZGF0YXNldHMlMjBpbXBvcnQlMjBsb2FkX2RhdGFzZXQlMEElMEFzZXRfc2VlZCg4OCklMEElMEFkYXRhc2V0JTIwJTNEJTIwbG9hZF9kYXRhc2V0KCUyMnJ2bF9jZGlwJTIyJTJDJTIwc3BsaXQlM0QlMjJ0cmFpbiUyMiUyQyUyMHN0cmVhbWluZyUzRFRydWUpJTBBZGF0YSUyMCUzRCUyMG5leHQoaXRlcihkYXRhc2V0KSklMEFpbWFnZSUyMCUzRCUyMGRhdGElNUIlMjJpbWFnZSUyMiU1RC5jb252ZXJ0KCUyMlJHQiUyMiklMEElMEFwcm9jZXNzb3IlMjAlM0QlMjBBdXRvUHJvY2Vzc29yLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZsYXlvdXRsbXYyLWJhc2UtdW5jYXNlZCUyMiklMEFtb2RlbCUyMCUzRCUyMExheW91dExNdjJGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMEElMjAlMjAlMjAlMjAlMjJtaWNyb3NvZnQlMkZsYXlvdXRsbXYyLWJhc2UtdW5jYXNlZCUyMiUyQyUyMG51bV9sYWJlbHMlM0RkYXRhc2V0LmluZm8uZmVhdHVyZXMlNUIlMjJsYWJlbCUyMiU1RC5udW1fY2xhc3NlcyUwQSklMEElMEFlbmNvZGluZyUyMCUzRCUyMHByb2Nlc3NvcihpbWFnZSUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBc2VxdWVuY2VfbGFiZWwlMjAlM0QlMjB0b3JjaC50ZW5zb3IoJTVCZGF0YSU1QiUyMmxhYmVsJTIyJTVEJTVEKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmVuY29kaW5nJTJDJTIwbGFiZWxzJTNEc2VxdWVuY2VfbGFiZWwpJTBBJTBBbG9zcyUyQyUyMGxvZ2l0cyUyMCUzRCUyMG91dHB1dHMubG9zcyUyQyUyMG91dHB1dHMubG9naXRzJTBBcHJlZGljdGVkX2lkeCUyMCUzRCUyMGxvZ2l0cy5hcmdtYXgoZGltJTNELTEpLml0ZW0oKSUwQXByZWRpY3RlZF9hbnN3ZXIlMjAlM0QlMjBkYXRhc2V0LmluZm8uZmVhdHVyZXMlNUIlMjJsYWJlbCUyMiU1RC5uYW1lcyU1QjQlNUQlMEFwcmVkaWN0ZWRfaWR4JTJDJTIwcHJlZGljdGVkX2Fuc3dlcg==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, LayoutLMv2ForSequenceClassification, set_seed
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>set_seed(<span class="hljs-number">88</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;rvl_cdip&quot;</span>, split=<span class="hljs-string">&quot;train&quot;</span>, streaming=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>data = <span class="hljs-built_in">next</span>(<span class="hljs-built_in">iter</span>(dataset))
<span class="hljs-meta">&gt;&gt;&gt; </span>image = data[<span class="hljs-string">&quot;image&quot;</span>].convert(<span class="hljs-string">&quot;RGB&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMv2ForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>, num_labels=dataset.info.features[<span class="hljs-string">&quot;label&quot;</span>].num_classes
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_label = torch.tensor([data[<span class="hljs-string">&quot;label&quot;</span>]])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, labels=sequence_label)

<span class="hljs-meta">&gt;&gt;&gt; </span>loss, logits = outputs.loss, outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_idx = logits.argmax(dim=-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer = dataset.info.features[<span class="hljs-string">&quot;label&quot;</span>].names[<span class="hljs-number">4</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_idx, predicted_answer
(<span class="hljs-number">4</span>, <span class="hljs-string">&#x27;advertisement&#x27;</span>)`,wrap:!1}}),{c(){d=i("p"),d.textContent=M,c=n(),u(b.$$.fragment)},l(p){d=l(p,"P",{"data-svelte-h":!0}),m(d)!=="svelte-11lpom8"&&(d.textContent=M),c=s(p),h(b.$$.fragment,p)},m(p,w){a(p,d,w),a(p,c,w),f(b,p,w),v=!0},p:P,i(p){v||(g(b.$$.fragment,p),v=!0)},o(p){_(b.$$.fragment,p),v=!1},d(p){p&&(o(d),o(c)),y(b,p)}}}function Da(T){let d,M=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){d=i("p"),d.innerHTML=M},l(c){d=l(c,"P",{"data-svelte-h":!0}),m(d)!=="svelte-fincs2"&&(d.innerHTML=M)},m(c,b){a(c,d,b)},p:P,d(c){c&&o(d)}}}function Oa(T){let d,M="Example:",c,b,v;return b=new z({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Qcm9jZXNzb3IlMkMlMjBMYXlvdXRMTXYyRm9yVG9rZW5DbGFzc2lmaWNhdGlvbiUyQyUyMHNldF9zZWVkJTBBZnJvbSUyMFBJTCUyMGltcG9ydCUyMEltYWdlJTBBZnJvbSUyMGRhdGFzZXRzJTIwaW1wb3J0JTIwbG9hZF9kYXRhc2V0JTBBJTBBc2V0X3NlZWQoODgpJTBBJTBBZGF0YXNldHMlMjAlM0QlMjBsb2FkX2RhdGFzZXQoJTIybmllbHNyJTJGZnVuc2QlMjIlMkMlMjBzcGxpdCUzRCUyMnRlc3QlMjIpJTBBbGFiZWxzJTIwJTNEJTIwZGF0YXNldHMuZmVhdHVyZXMlNUIlMjJuZXJfdGFncyUyMiU1RC5mZWF0dXJlLm5hbWVzJTBBaWQybGFiZWwlMjAlM0QlMjAlN0J2JTNBJTIwayUyMGZvciUyMHYlMkMlMjBrJTIwaW4lMjBlbnVtZXJhdGUobGFiZWxzKSU3RCUwQSUwQXByb2Nlc3NvciUyMCUzRCUyMEF1dG9Qcm9jZXNzb3IuZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRmxheW91dGxtdjItYmFzZS11bmNhc2VkJTIyJTJDJTIwcmV2aXNpb24lM0QlMjJub19vY3IlMjIpJTBBbW9kZWwlMjAlM0QlMjBMYXlvdXRMTXYyRm9yVG9rZW5DbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTBBJTIwJTIwJTIwJTIwJTIybWljcm9zb2Z0JTJGbGF5b3V0bG12Mi1iYXNlLXVuY2FzZWQlMjIlMkMlMjBudW1fbGFiZWxzJTNEbGVuKGxhYmVscyklMEEpJTBBJTBBZGF0YSUyMCUzRCUyMGRhdGFzZXRzJTVCMCU1RCUwQWltYWdlJTIwJTNEJTIwSW1hZ2Uub3BlbihkYXRhJTVCJTIyaW1hZ2VfcGF0aCUyMiU1RCkuY29udmVydCglMjJSR0IlMjIpJTBBd29yZHMlMjAlM0QlMjBkYXRhJTVCJTIyd29yZHMlMjIlNUQlMEFib3hlcyUyMCUzRCUyMGRhdGElNUIlMjJiYm94ZXMlMjIlNUQlMjAlMjAlMjMlMjBtYWtlJTIwc3VyZSUyMHRvJTIwbm9ybWFsaXplJTIweW91ciUyMGJvdW5kaW5nJTIwYm94ZXMlMEF3b3JkX2xhYmVscyUyMCUzRCUyMGRhdGElNUIlMjJuZXJfdGFncyUyMiU1RCUwQWVuY29kaW5nJTIwJTNEJTIwcHJvY2Vzc29yKCUwQSUyMCUyMCUyMCUyMGltYWdlJTJDJTBBJTIwJTIwJTIwJTIwd29yZHMlMkMlMEElMjAlMjAlMjAlMjBib3hlcyUzRGJveGVzJTJDJTBBJTIwJTIwJTIwJTIwd29yZF9sYWJlbHMlM0R3b3JkX2xhYmVscyUyQyUwQSUyMCUyMCUyMCUyMHBhZGRpbmclM0QlMjJtYXhfbGVuZ3RoJTIyJTJDJTBBJTIwJTIwJTIwJTIwdHJ1bmNhdGlvbiUzRFRydWUlMkMlMEElMjAlMjAlMjAlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTJDJTBBKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmVuY29kaW5nKSUwQWxvZ2l0cyUyQyUyMGxvc3MlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cyUyQyUyMG91dHB1dHMubG9zcyUwQSUwQXByZWRpY3RlZF90b2tlbl9jbGFzc19pZHMlMjAlM0QlMjBsb2dpdHMuYXJnbWF4KC0xKSUwQXByZWRpY3RlZF90b2tlbnNfY2xhc3NlcyUyMCUzRCUyMCU1QmlkMmxhYmVsJTVCdC5pdGVtKCklNUQlMjBmb3IlMjB0JTIwaW4lMjBwcmVkaWN0ZWRfdG9rZW5fY2xhc3NfaWRzJTVCMCU1RCU1RCUwQXByZWRpY3RlZF90b2tlbnNfY2xhc3NlcyU1QiUzQTUlNUQ=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, LayoutLMv2ForTokenClassification, set_seed
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>set_seed(<span class="hljs-number">88</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>datasets = load_dataset(<span class="hljs-string">&quot;nielsr/funsd&quot;</span>, split=<span class="hljs-string">&quot;test&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = datasets.features[<span class="hljs-string">&quot;ner_tags&quot;</span>].feature.names
<span class="hljs-meta">&gt;&gt;&gt; </span>id2label = {v: k <span class="hljs-keyword">for</span> v, k <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(labels)}

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>, revision=<span class="hljs-string">&quot;no_ocr&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMv2ForTokenClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>, num_labels=<span class="hljs-built_in">len</span>(labels)
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = datasets[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(data[<span class="hljs-string">&quot;image_path&quot;</span>]).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>words = data[<span class="hljs-string">&quot;words&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>boxes = data[<span class="hljs-string">&quot;bboxes&quot;</span>]  <span class="hljs-comment"># make sure to normalize your bounding boxes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>word_labels = data[<span class="hljs-string">&quot;ner_tags&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(
<span class="hljs-meta">... </span>    image,
<span class="hljs-meta">... </span>    words,
<span class="hljs-meta">... </span>    boxes=boxes,
<span class="hljs-meta">... </span>    word_labels=word_labels,
<span class="hljs-meta">... </span>    padding=<span class="hljs-string">&quot;max_length&quot;</span>,
<span class="hljs-meta">... </span>    truncation=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits, loss = outputs.logits, outputs.loss

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = logits.argmax(-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [id2label[t.item()] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes[:<span class="hljs-number">5</span>]
[<span class="hljs-string">&#x27;B-ANSWER&#x27;</span>, <span class="hljs-string">&#x27;B-HEADER&#x27;</span>, <span class="hljs-string">&#x27;B-HEADER&#x27;</span>, <span class="hljs-string">&#x27;B-HEADER&#x27;</span>, <span class="hljs-string">&#x27;B-HEADER&#x27;</span>]`,wrap:!1}}),{c(){d=i("p"),d.textContent=M,c=n(),u(b.$$.fragment)},l(p){d=l(p,"P",{"data-svelte-h":!0}),m(d)!=="svelte-11lpom8"&&(d.textContent=M),c=s(p),h(b.$$.fragment,p)},m(p,w){a(p,d,w),a(p,c,w),f(b,p,w),v=!0},p:P,i(p){v||(g(b.$$.fragment,p),v=!0)},o(p){_(b.$$.fragment,p),v=!1},d(p){p&&(o(d),o(c)),y(b,p)}}}function Ka(T){let d,M=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){d=i("p"),d.innerHTML=M},l(c){d=l(c,"P",{"data-svelte-h":!0}),m(d)!=="svelte-fincs2"&&(d.innerHTML=M)},m(c,b){a(c,d,b)},p:P,d(c){c&&o(d)}}}function er(T){let d,M;return d=new z({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Qcm9jZXNzb3IlMkMlMjBMYXlvdXRMTXYyRm9yUXVlc3Rpb25BbnN3ZXJpbmclMkMlMjBzZXRfc2VlZCUwQWltcG9ydCUyMHRvcmNoJTBBZnJvbSUyMFBJTCUyMGltcG9ydCUyMEltYWdlJTBBZnJvbSUyMGRhdGFzZXRzJTIwaW1wb3J0JTIwbG9hZF9kYXRhc2V0JTBBJTBBc2V0X3NlZWQoODgpJTBBcHJvY2Vzc29yJTIwJTNEJTIwQXV0b1Byb2Nlc3Nvci5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGbGF5b3V0bG12Mi1iYXNlLXVuY2FzZWQlMjIpJTBBbW9kZWwlMjAlM0QlMjBMYXlvdXRMTXYyRm9yUXVlc3Rpb25BbnN3ZXJpbmcuZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRmxheW91dGxtdjItYmFzZS11bmNhc2VkJTIyKSUwQSUwQWRhdGFzZXQlMjAlM0QlMjBsb2FkX2RhdGFzZXQoJTIyaGYtaW50ZXJuYWwtdGVzdGluZyUyRmZpeHR1cmVzX2RvY3ZxYSUyMiklMEFpbWFnZV9wYXRoJTIwJTNEJTIwZGF0YXNldCU1QiUyMnRlc3QlMjIlNUQlNUIwJTVEJTVCJTIyZmlsZSUyMiU1RCUwQWltYWdlJTIwJTNEJTIwSW1hZ2Uub3BlbihpbWFnZV9wYXRoKS5jb252ZXJ0KCUyMlJHQiUyMiklMEFxdWVzdGlvbiUyMCUzRCUyMCUyMldoZW4lMjBpcyUyMGNvZmZlZSUyMGJyZWFrJTNGJTIyJTBBZW5jb2RpbmclMjAlM0QlMjBwcm9jZXNzb3IoaW1hZ2UlMkMlMjBxdWVzdGlvbiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqZW5jb2RpbmcpJTBBcHJlZGljdGVkX3N0YXJ0X2lkeCUyMCUzRCUyMG91dHB1dHMuc3RhcnRfbG9naXRzLmFyZ21heCgtMSkuaXRlbSgpJTBBcHJlZGljdGVkX2VuZF9pZHglMjAlM0QlMjBvdXRwdXRzLmVuZF9sb2dpdHMuYXJnbWF4KC0xKS5pdGVtKCklMEFwcmVkaWN0ZWRfc3RhcnRfaWR4JTJDJTIwcHJlZGljdGVkX2VuZF9pZHglMEElMEFwcmVkaWN0ZWRfYW5zd2VyX3Rva2VucyUyMCUzRCUyMGVuY29kaW5nLmlucHV0X2lkcy5zcXVlZXplKCklNUJwcmVkaWN0ZWRfc3RhcnRfaWR4JTIwJTNBJTIwcHJlZGljdGVkX2VuZF9pZHglMjAlMkIlMjAxJTVEJTBBcHJlZGljdGVkX2Fuc3dlciUyMCUzRCUyMHByb2Nlc3Nvci50b2tlbml6ZXIuZGVjb2RlKHByZWRpY3RlZF9hbnN3ZXJfdG9rZW5zKSUwQXByZWRpY3RlZF9hbnN3ZXIlMjAlMjAlMjMlMjByZXN1bHRzJTIwYXJlJTIwbm90JTIwdmVyeSUyMGdvb2QlMjB3aXRob3V0JTIwZnVydGhlciUyMGZpbmUtdHVuaW5n",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, LayoutLMv2ForQuestionAnswering, set_seed
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>set_seed(<span class="hljs-number">88</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LayoutLMv2ForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/fixtures_docvqa&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image_path = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-string">&quot;file&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(image_path).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>question = <span class="hljs-string">&quot;When is coffee break?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = processor(image, question, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_start_idx = outputs.start_logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_end_idx = outputs.end_logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_start_idx, predicted_end_idx
(<span class="hljs-number">154</span>, <span class="hljs-number">287</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer_tokens = encoding.input_ids.squeeze()[predicted_start_idx : predicted_end_idx + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer = processor.tokenizer.decode(predicted_answer_tokens)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer  <span class="hljs-comment"># results are not very good without further fine-tuning</span>
<span class="hljs-string">&#x27;council mem - bers conducted by trrf treasurer philip g. kuehn to get answers which the public ...</span>`,wrap:!1}}),{c(){u(d.$$.fragment)},l(c){h(d.$$.fragment,c)},m(c,b){f(d,c,b),M=!0},p:P,i(c){M||(g(d.$$.fragment,c),M=!0)},o(c){_(d.$$.fragment,c),M=!1},d(c){y(d,c)}}}function tr(T){let d,M;return d=new z({props:{code:"dGFyZ2V0X3N0YXJ0X2luZGV4JTIwJTNEJTIwdG9yY2gudGVuc29yKCU1QjclNUQpJTBBdGFyZ2V0X2VuZF9pbmRleCUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxNCU1RCklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKiplbmNvZGluZyUyQyUyMHN0YXJ0X3Bvc2l0aW9ucyUzRHRhcmdldF9zdGFydF9pbmRleCUyQyUyMGVuZF9wb3NpdGlvbnMlM0R0YXJnZXRfZW5kX2luZGV4KSUwQXByZWRpY3RlZF9hbnN3ZXJfc3Bhbl9zdGFydCUyMCUzRCUyMG91dHB1dHMuc3RhcnRfbG9naXRzLmFyZ21heCgtMSkuaXRlbSgpJTBBcHJlZGljdGVkX2Fuc3dlcl9zcGFuX2VuZCUyMCUzRCUyMG91dHB1dHMuZW5kX2xvZ2l0cy5hcmdtYXgoLTEpLml0ZW0oKSUwQXByZWRpY3RlZF9hbnN3ZXJfc3Bhbl9zdGFydCUyQyUyMHByZWRpY3RlZF9hbnN3ZXJfc3Bhbl9lbmQ=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">7</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer_span_start = outputs.start_logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer_span_end = outputs.end_logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer_span_start, predicted_answer_span_end
(<span class="hljs-number">154</span>, <span class="hljs-number">287</span>)`,wrap:!1}}),{c(){u(d.$$.fragment)},l(c){h(d.$$.fragment,c)},m(c,b){f(d,c,b),M=!0},p:P,i(c){M||(g(d.$$.fragment,c),M=!0)},o(c){_(d.$$.fragment,c),M=!1},d(c){y(d,c)}}}function or(T){let d,M,c,b,v,p,w,ko,_e,Ws=`The LayoutLMV2 model was proposed in <a href="https://arxiv.org/abs/2012.14740" rel="nofollow">LayoutLMv2: Multi-modal Pre-training for Visually-Rich Document Understanding</a> by Yang Xu, Yiheng Xu, Tengchao Lv, Lei Cui, Furu Wei, Guoxin Wang, Yijuan Lu,
Dinei Florencio, Cha Zhang, Wanxiang Che, Min Zhang, Lidong Zhou. LayoutLMV2 improves <a href="layoutlm">LayoutLM</a> to obtain
state-of-the-art results across several document image understanding benchmarks:`,xo,ye,Ns=`<li>information extraction from scanned documents: the <a href="https://guillaumejaume.github.io/FUNSD/" rel="nofollow">FUNSD</a> dataset (a
collection of 199 annotated forms comprising more than 30,000 words), the <a href="https://github.com/clovaai/cord" rel="nofollow">CORD</a>
dataset (a collection of 800 receipts for training, 100 for validation and 100 for testing), the <a href="https://rrc.cvc.uab.es/?ch=13" rel="nofollow">SROIE</a> dataset (a collection of 626 receipts for training and 347 receipts for testing)
and the <a href="https://github.com/applicaai/kleister-nda" rel="nofollow">Kleister-NDA</a> dataset (a collection of non-disclosure
agreements from the EDGAR database, including 254 documents for training, 83 documents for validation, and 203
documents for testing).</li> <li>document image classification: the <a href="https://www.cs.cmu.edu/~aharley/rvl-cdip/" rel="nofollow">RVL-CDIP</a> dataset (a collection of
400,000 images belonging to one of 16 classes).</li> <li>document visual question answering: the <a href="https://arxiv.org/abs/2007.00398" rel="nofollow">DocVQA</a> dataset (a collection of 50,000
questions defined on 12,000+ document images).</li>`,jo,be,Rs="The abstract from the paper is the following:",Jo,Me,qs=`<em>Pre-training of text and layout has proved effective in a variety of visually-rich document understanding tasks due to
its effective model architecture and the advantage of large-scale unlabeled scanned/digital-born documents. In this
paper, we present LayoutLMv2 by pre-training text, layout and image in a multi-modal framework, where new model
architectures and pre-training tasks are leveraged. Specifically, LayoutLMv2 not only uses the existing masked
visual-language modeling task but also the new text-image alignment and text-image matching tasks in the pre-training
stage, where cross-modality interaction is better learned. Meanwhile, it also integrates a spatial-aware self-attention
mechanism into the Transformer architecture, so that the model can fully understand the relative positional
relationship among different text blocks. Experiment results show that LayoutLMv2 outperforms strong baselines and
achieves new state-of-the-art results on a wide variety of downstream visually-rich document understanding tasks,
including FUNSD (0.7895 -&gt; 0.8420), CORD (0.9493 -&gt; 0.9601), SROIE (0.9524 -&gt; 0.9781), Kleister-NDA (0.834 -&gt; 0.852),
RVL-CDIP (0.9443 -&gt; 0.9564), and DocVQA (0.7295 -&gt; 0.8672). The pre-trained LayoutLMv2 model is publicly available at
this https URL.</em>`,Uo,ve,Bs=`LayoutLMv2 depends on <code>detectron2</code>, <code>torchvision</code> and <code>tesseract</code>. Run the
following to install them:`,Co,we,$o,Te,Xs="(If you are developing for LayoutLMv2, note that passing the doctests also requires the installation of these packages.)",zo,Le,Io,ke,Gs=`<li>The main difference between LayoutLMv1 and LayoutLMv2 is that the latter incorporates visual embeddings during
pre-training (while LayoutLMv1 only adds visual embeddings during fine-tuning).</li> <li>LayoutLMv2 adds both a relative 1D attention bias as well as a spatial 2D attention bias to the attention scores in
the self-attention layers. Details can be found on page 5 of the <a href="https://arxiv.org/abs/2012.14740" rel="nofollow">paper</a>.</li> <li>Demo notebooks on how to use the LayoutLMv2 model on RVL-CDIP, FUNSD, DocVQA, CORD can be found <a href="https://github.com/NielsRogge/Transformers-Tutorials" rel="nofollow">here</a>.</li> <li>LayoutLMv2 uses Facebook AI’s <a href="https://github.com/facebookresearch/detectron2/" rel="nofollow">Detectron2</a> package for its visual
backbone. See <a href="https://detectron2.readthedocs.io/en/latest/tutorials/install.html" rel="nofollow">this link</a> for installation
instructions.</li> <li>In addition to <code>input_ids</code>, <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model.forward">forward()</a> expects 2 additional inputs, namely
<code>image</code> and <code>bbox</code>. The <code>image</code> input corresponds to the original document image in which the text
tokens occur. The model expects each document image to be of size 224x224. This means that if you have a batch of
document images, <code>image</code> should be a tensor of shape (batch_size, 3, 224, 224). This can be either a
<code>torch.Tensor</code> or a <code>Detectron2.structures.ImageList</code>. You don’t need to normalize the channels, as this is
done by the model. Important to note is that the visual backbone expects BGR channels instead of RGB, as all models
in Detectron2 are pre-trained using the BGR format. The <code>bbox</code> input are the bounding boxes (i.e. 2D-positions)
of the input text tokens. This is identical to <a href="/docs/transformers/main/en/model_doc/layoutlm#transformers.LayoutLMModel">LayoutLMModel</a>. These can be obtained using an
external OCR engine such as Google’s <a href="https://github.com/tesseract-ocr/tesseract" rel="nofollow">Tesseract</a> (there’s a <a href="https://pypi.org/project/pytesseract/" rel="nofollow">Python
wrapper</a> available). Each bounding box should be in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1, y1)
represents the position of the lower right corner. Note that one first needs to normalize the bounding boxes to be on
a 0-1000 scale. To normalize, you can use the following function:</li>`,Fo,xe,Zo,je,Vs=`Here, <code>width</code> and <code>height</code> correspond to the width and height of the original document in which the token
occurs (before resizing the image). Those can be obtained using the Python Image Library (PIL) library for example, as
follows:`,Wo,Je,No,Ue,Qs=`However, this model includes a brand new <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor">LayoutLMv2Processor</a> which can be used to directly
prepare data for the model (including applying OCR under the hood). More information can be found in the “Usage”
section below.`,Ro,Ce,Ys=`<li>Internally, <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model">LayoutLMv2Model</a> will send the <code>image</code> input through its visual backbone to
obtain a lower-resolution feature map, whose shape is equal to the <code>image_feature_pool_shape</code> attribute of
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>. This feature map is then flattened to obtain a sequence of image tokens. As
the size of the feature map is 7x7 by default, one obtains 49 image tokens. These are then concatenated with the text
tokens, and send through the Transformer encoder. This means that the last hidden states of the model will have a
length of 512 + 49 = 561, if you pad the text tokens up to the max length. More generally, the last hidden states
will have a shape of <code>seq_length</code> + <code>image_feature_pool_shape[0]</code> *
<code>config.image_feature_pool_shape[1]</code>.</li> <li>When calling <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a>, a warning will be printed with a long list of
parameter names that are not initialized. This is not a problem, as these parameters are batch normalization
statistics, which are going to have values when fine-tuning on a custom dataset.</li> <li>If you want to train the model in a distributed environment, make sure to call <code>synchronize_batch_norm</code> on the
model in order to properly synchronize the batch normalization layers of the visual backbone.</li>`,qo,$e,Es=`In addition, there’s LayoutXLM, which is a multilingual version of LayoutLMv2. More information can be found on
<a href="layoutxlm">LayoutXLM’s documentation page</a>.`,Bo,ze,Xo,Ie,Hs="A list of official Hugging Face and community (indicated by 🌎) resources to help you get started with LayoutLMv2. If you’re interested in submitting a resource to be included here, please feel free to open a Pull Request and we’ll review it! The resource should ideally demonstrate something new instead of duplicating an existing resource.",Go,Fe,Vo,Ze,Ps='<li>A notebook on how to <a href="https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/LayoutLMv2/RVL-CDIP/Fine_tuning_LayoutLMv2ForSequenceClassification_on_RVL_CDIP.ipynb" rel="nofollow">finetune LayoutLMv2 for text-classification on RVL-CDIP dataset</a>.</li> <li>See also: <a href="../tasks/sequence_classification">Text classification task guide</a></li>',Qo,We,Yo,Ne,Ss='<li>A notebook on how to <a href="https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/LayoutLMv2/DocVQA/Fine_tuning_LayoutLMv2ForQuestionAnswering_on_DocVQA.ipynb" rel="nofollow">finetune LayoutLMv2 for question-answering on DocVQA dataset</a>.</li> <li>See also: <a href="../tasks/question_answering">Question answering task guide</a></li> <li>See also: <a href="../tasks/document_question_answering">Document question answering task guide</a></li>',Eo,Re,Ho,qe,As='<li>A notebook on how to <a href="https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/LayoutLMv2/CORD/Fine_tuning_LayoutLMv2ForTokenClassification_on_CORD.ipynb" rel="nofollow">finetune LayoutLMv2 for token-classification on CORD dataset</a>.</li> <li>A notebook on how to <a href="https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/LayoutLMv2/FUNSD/Fine_tuning_LayoutLMv2ForTokenClassification_on_FUNSD_using_HuggingFace_Trainer.ipynb" rel="nofollow">finetune LayoutLMv2 for token-classification on FUNSD dataset</a>.</li> <li>See also: <a href="../tasks/token_classification">Token classification task guide</a></li>',Po,Be,So,Xe,Ds=`The easiest way to prepare data for the model is to use <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor">LayoutLMv2Processor</a>, which internally
combines a image processor (<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor">LayoutLMv2ImageProcessor</a>) and a tokenizer
(<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a> or <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast">LayoutLMv2TokenizerFast</a>). The image processor
handles the image modality, while the tokenizer handles the text modality. A processor combines both, which is ideal
for a multi-modal model like LayoutLMv2. Note that you can still use both separately, if you only want to handle one
modality.`,Ao,Ge,Do,Ve,Os=`In short, one can provide a document image (and possibly additional data) to <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor">LayoutLMv2Processor</a>,
and it will create the inputs expected by the model. Internally, the processor first uses
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor">LayoutLMv2ImageProcessor</a> to apply OCR on the image to get a list of words and normalized
bounding boxes, as well to resize the image to a given size in order to get the <code>image</code> input. The words and
normalized bounding boxes are then provided to <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a> or
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast">LayoutLMv2TokenizerFast</a>, which converts them to token-level <code>input_ids</code>,
<code>attention_mask</code>, <code>token_type_ids</code>, <code>bbox</code>. Optionally, one can provide word labels to the processor,
which are turned into token-level <code>labels</code>.`,Oo,Qe,Ks=`<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor">LayoutLMv2Processor</a> uses <a href="https://pypi.org/project/pytesseract/" rel="nofollow">PyTesseract</a>, a Python
wrapper around Google’s Tesseract OCR engine, under the hood. Note that you can still use your own OCR engine of
choice, and provide the words and normalized boxes yourself. This requires initializing
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor">LayoutLMv2ImageProcessor</a> with <code>apply_ocr</code> set to <code>False</code>.`,Ko,Ye,ea=`In total, there are 5 use cases that are supported by the processor. Below, we list them all. Note that each of these
use cases work for both batched and non-batched inputs (we illustrate them for non-batched inputs).`,en,Ee,ta=`<strong>Use case 1: document image classification (training, inference) + token classification (inference), apply_ocr =
True</strong>`,tn,He,oa=`This is the simplest case, in which the processor (actually the image processor) will perform OCR on the image to get
the words and normalized bounding boxes.`,on,Pe,nn,Se,na="<strong>Use case 2: document image classification (training, inference) + token classification (inference), apply_ocr=False</strong>",sn,Ae,sa=`In case one wants to do OCR themselves, one can initialize the image processor with <code>apply_ocr</code> set to
<code>False</code>. In that case, one should provide the words and corresponding (normalized) bounding boxes themselves to
the processor.`,an,De,rn,Oe,aa="<strong>Use case 3: token classification (training), apply_ocr=False</strong>",ln,Ke,ra=`For token classification tasks (such as FUNSD, CORD, SROIE, Kleister-NDA), one can also provide the corresponding word
labels in order to train a model. The processor will then convert these into token-level <code>labels</code>. By default, it
will only label the first wordpiece of a word, and label the remaining wordpieces with -100, which is the
<code>ignore_index</code> of PyTorch’s CrossEntropyLoss. In case you want all wordpieces of a word to be labeled, you can
initialize the tokenizer with <code>only_label_first_subword</code> set to <code>False</code>.`,dn,et,cn,tt,ia="<strong>Use case 4: visual question answering (inference), apply_ocr=True</strong>",mn,ot,la=`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. By default, the
processor will apply OCR on the image, and create [CLS] question tokens [SEP] word tokens [SEP].`,pn,nt,un,st,da="<strong>Use case 5: visual question answering (inference), apply_ocr=False</strong>",hn,at,ca=`For visual question answering tasks (such as DocVQA), you can provide a question to the processor. If you want to
perform OCR yourself, you can provide your own words and (normalized) bounding boxes to the processor.`,fn,rt,gn,it,_n,F,lt,qn,Gt,ma=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model">LayoutLMv2Model</a>. It is used to instantiate an
LayoutLMv2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LayoutLMv2
<a href="https://huggingface.co/microsoft/layoutlmv2-base-uncased" rel="nofollow">microsoft/layoutlmv2-base-uncased</a> architecture.`,Bn,Vt,pa=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,Xn,D,yn,dt,bn,S,ct,Gn,O,mt,Vn,Qt,ua="Preprocess an image or a batch of images.",Mn,pt,vn,G,ut,Qn,Yt,ha="Constructs a LayoutLMv2 image processor.",Yn,K,ht,En,Et,fa="Preprocess an image or batch of images.",wn,ft,Tn,J,gt,Hn,Ht,ga=`Construct a LayoutLMv2 tokenizer. Based on WordPiece. <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a> can be used to turn words, word-level
bounding boxes and optional word labels to token-level <code>input_ids</code>, <code>attention_mask</code>, <code>token_type_ids</code>, <code>bbox</code>, and
optional <code>labels</code> (for token classification).`,Pn,Pt,_a=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`,Sn,St,ya=`<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a> runs end-to-end tokenization: punctuation splitting and wordpiece. It also turns the
word-level bounding boxes into token-level bounding boxes.`,An,ee,_t,Dn,At,ba=`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`,On,Dt,yt,Ln,bt,kn,Z,Mt,Kn,Ot,Ma="Construct a “fast” LayoutLMv2 tokenizer (backed by HuggingFace’s <em>tokenizers</em> library). Based on WordPiece.",es,Kt,va=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a> which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`,ts,te,vt,os,eo,wa=`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`,xn,wt,jn,U,Tt,ns,to,Ta=`Constructs a LayoutLMv2 processor which combines a LayoutLMv2 image processor and a LayoutLMv2 tokenizer into a
single processor.`,ss,oo,La='<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Processor">LayoutLMv2Processor</a> offers all the functionalities you need to prepare data for the model.',as,no,ka=`It first uses <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor">LayoutLMv2ImageProcessor</a> to resize document images to a fixed size, and optionally applies OCR to
get words and normalized bounding boxes. These are then provided to <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a> or
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast">LayoutLMv2TokenizerFast</a>, which turns the words and bounding boxes into token-level <code>input_ids</code>,
<code>attention_mask</code>, <code>token_type_ids</code>, <code>bbox</code>. Optionally, one can provide integer <code>word_labels</code>, which are turned
into token-level <code>labels</code> for token classification tasks (such as FUNSD, CORD).`,rs,E,Lt,is,so,xa='This method first forwards the <code>images</code> argument to <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor.__call__"><strong>call</strong>()</a>. In case\n<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor">LayoutLMv2ImageProcessor</a> was initialized with <code>apply_ocr</code> set to <code>True</code>, it passes the obtained words and\nbounding boxes along with the additional arguments to <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer.__call__"><strong>call</strong>()</a> and returns the output,\ntogether with resized <code>images</code>. In case <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor">LayoutLMv2ImageProcessor</a> was initialized with <code>apply_ocr</code> set to\n<code>False</code>, it passes the words (<code>text</code>/<code>text_pair`) and `boxes` specified by the user along with the additional arguments to [__call__()](/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer.__call__) and returns the output, together with resized `images</code>.',ls,ao,ja="Please refer to the docstring of the above two methods for more information.",Jn,kt,Un,V,xt,ds,ro,Ja=`The bare LayoutLMv2 Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,cs,q,jt,ms,io,Ua='The <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model">LayoutLMv2Model</a> forward method, overrides the <code>__call__</code> special method.',ps,oe,us,ne,Cn,Jt,$n,W,Ut,hs,lo,Ca=`LayoutLMv2 Model with a sequence classification head on top (a linear layer on top of the concatenation of the
final hidden state of the [CLS] token, average-pooled initial visual embeddings and average-pooled final visual
embeddings, e.g. for document image classification tasks such as the
<a href="https://www.cs.cmu.edu/~aharley/rvl-cdip/" rel="nofollow">RVL-CDIP</a> dataset.`,fs,co,$a=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,gs,B,Ct,_s,mo,za='The <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForSequenceClassification">LayoutLMv2ForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',ys,se,bs,ae,zn,$t,In,N,zt,Ms,po,Ia=`LayoutLMv2 Model with a token classification head on top (a linear layer on top of the text part of the hidden
states) e.g. for sequence labeling (information extraction) tasks such as
<a href="https://guillaumejaume.github.io/FUNSD/" rel="nofollow">FUNSD</a>, <a href="https://rrc.cvc.uab.es/?ch=13" rel="nofollow">SROIE</a>,
<a href="https://github.com/clovaai/cord" rel="nofollow">CORD</a> and <a href="https://github.com/applicaai/kleister-nda" rel="nofollow">Kleister-NDA</a>.`,vs,uo,Fa=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,ws,X,It,Ts,ho,Za='The <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForTokenClassification">LayoutLMv2ForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',Ls,re,ks,ie,Fn,Ft,Zn,R,Zt,xs,fo,Wa=`LayoutLMv2 Model with a span classification head on top for extractive question-answering tasks such as
<a href="https://rrc.cvc.uab.es/?ch=17" rel="nofollow">DocVQA</a> (a linear layer on top of the text part of the hidden-states output to
compute <code>span start logits</code> and <code>span end logits</code>).`,js,go,Na=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,Js,j,Wt,Us,_o,Ra='The <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ForQuestionAnswering">LayoutLMv2ForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',Cs,le,$s,yo,qa="Example:",zs,bo,Ba=`In this example below, we give the LayoutLMv2 model an image (of texts) and ask it a question. It will give us
a prediction of what it thinks the answer is (the span of the answer within the texts parsed from the image).`,Is,de,Fs,ce,Wn,To,Nn;return v=new $({props:{title:"LayoutLMV2",local:"layoutlmv2",headingTag:"h1"}}),w=new $({props:{title:"Overview",local:"overview",headingTag:"h2"}}),we=new z({props:{code:"cHl0aG9uJTIwLW0lMjBwaXAlMjBpbnN0YWxsJTIwJ2dpdCUyQmh0dHBzJTNBJTJGJTJGZ2l0aHViLmNvbSUyRmZhY2Vib29rcmVzZWFyY2glMkZkZXRlY3Ryb24yLmdpdCclMEFweXRob24lMjAtbSUyMHBpcCUyMGluc3RhbGwlMjB0b3JjaHZpc2lvbiUyMHRlc3NlcmFjdA==",highlighted:`python -m pip install <span class="hljs-string">&#x27;git+https://github.com/facebookresearch/detectron2.git&#x27;</span>
python -m pip install torchvision tesseract`,wrap:!1}}),Le=new $({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),xe=new z({props:{code:"ZGVmJTIwbm9ybWFsaXplX2Jib3goYmJveCUyQyUyMHdpZHRoJTJDJTIwaGVpZ2h0KSUzQSUwQSUyMCUyMCUyMCUyMHJldHVybiUyMCU1QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMGludCgxMDAwJTIwKiUyMChiYm94JTVCMCU1RCUyMCUyRiUyMHdpZHRoKSklMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBpbnQoMTAwMCUyMColMjAoYmJveCU1QjElNUQlMjAlMkYlMjBoZWlnaHQpKSUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMGludCgxMDAwJTIwKiUyMChiYm94JTVCMiU1RCUyMCUyRiUyMHdpZHRoKSklMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBpbnQoMTAwMCUyMColMjAoYmJveCU1QjMlNUQlMjAlMkYlMjBoZWlnaHQpKSUyQyUwQSUyMCUyMCUyMCUyMCU1RA==",highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">normalize_bbox</span>(<span class="hljs-params">bbox, width, height</span>):
    <span class="hljs-keyword">return</span> [
        <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">0</span>] / width)),
        <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">1</span>] / height)),
        <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">2</span>] / width)),
        <span class="hljs-built_in">int</span>(<span class="hljs-number">1000</span> * (bbox[<span class="hljs-number">3</span>] / height)),
    ]`,wrap:!1}}),Je=new z({props:{code:"ZnJvbSUyMFBJTCUyMGltcG9ydCUyMEltYWdlJTBBJTBBaW1hZ2UlMjAlM0QlMjBJbWFnZS5vcGVuKCUwQSUyMCUyMCUyMCUyMCUyMm5hbWVfb2ZfeW91cl9kb2N1bWVudCUyMC0lMjBjYW4lMjBiZSUyMGElMjBwbmclMkMlMjBqcGclMkMlMjBldGMuJTIwb2YlMjB5b3VyJTIwZG9jdW1lbnRzJTIwKFBERnMlMjBtdXN0JTIwYmUlMjBjb252ZXJ0ZWQlMjB0byUyMGltYWdlcykuJTIyJTBBKSUwQSUwQXdpZHRoJTJDJTIwaGVpZ2h0JTIwJTNEJTIwaW1hZ2Uuc2l6ZQ==",highlighted:`<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
)

width, height = image.size`,wrap:!1}}),ze=new $({props:{title:"Resources",local:"resources",headingTag:"h2"}}),Fe=new Zs({props:{pipeline:"text-classification"}}),We=new Zs({props:{pipeline:"question-answering"}}),Re=new Zs({props:{pipeline:"token-classification"}}),Be=new $({props:{title:"Usage: LayoutLMv2Processor",local:"usage-layoutlmv2processor",headingTag:"h2"}}),Ge=new z({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMExheW91dExNdjJJbWFnZVByb2Nlc3NvciUyQyUyMExheW91dExNdjJUb2tlbml6ZXJGYXN0JTJDJTIwTGF5b3V0TE12MlByb2Nlc3NvciUwQSUwQWltYWdlX3Byb2Nlc3NvciUyMCUzRCUyMExheW91dExNdjJJbWFnZVByb2Nlc3NvcigpJTIwJTIwJTIzJTIwYXBwbHlfb2NyJTIwaXMlMjBzZXQlMjB0byUyMFRydWUlMjBieSUyMGRlZmF1bHQlMEF0b2tlbml6ZXIlMjAlM0QlMjBMYXlvdXRMTXYyVG9rZW5pemVyRmFzdC5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGbGF5b3V0bG12Mi1iYXNlLXVuY2FzZWQlMjIpJTBBcHJvY2Vzc29yJTIwJTNEJTIwTGF5b3V0TE12MlByb2Nlc3NvcihpbWFnZV9wcm9jZXNzb3IlMkMlMjB0b2tlbml6ZXIp",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2ImageProcessor, LayoutLMv2TokenizerFast, LayoutLMv2Processor

image_processor = LayoutLMv2ImageProcessor()  <span class="hljs-comment"># apply_ocr is set to True by default</span>
tokenizer = LayoutLMv2TokenizerFast.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)
processor = LayoutLMv2Processor(image_processor, tokenizer)`,wrap:!1}}),Pe=new z({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMExheW91dExNdjJQcm9jZXNzb3IlMEFmcm9tJTIwUElMJTIwaW1wb3J0JTIwSW1hZ2UlMEElMEFwcm9jZXNzb3IlMjAlM0QlMjBMYXlvdXRMTXYyUHJvY2Vzc29yLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZsYXlvdXRsbXYyLWJhc2UtdW5jYXNlZCUyMiklMEElMEFpbWFnZSUyMCUzRCUyMEltYWdlLm9wZW4oJTBBJTIwJTIwJTIwJTIwJTIybmFtZV9vZl95b3VyX2RvY3VtZW50JTIwLSUyMGNhbiUyMGJlJTIwYSUyMHBuZyUyQyUyMGpwZyUyQyUyMGV0Yy4lMjBvZiUyMHlvdXIlMjBkb2N1bWVudHMlMjAoUERGcyUyMG11c3QlMjBiZSUyMGNvbnZlcnRlZCUyMHRvJTIwaW1hZ2VzKS4lMjIlMEEpLmNvbnZlcnQoJTIyUkdCJTIyKSUwQWVuY29kaW5nJTIwJTNEJTIwcHJvY2Vzc29yKCUwQSUyMCUyMCUyMCUyMGltYWdlJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiUwQSklMjAlMjAlMjMlMjB5b3UlMjBjYW4lMjBhbHNvJTIwYWRkJTIwYWxsJTIwdG9rZW5pemVyJTIwcGFyYW1ldGVycyUyMGhlcmUlMjBzdWNoJTIwYXMlMjBwYWRkaW5nJTJDJTIwdHJ1bmNhdGlvbiUwQXByaW50KGVuY29kaW5nLmtleXMoKSklMEElMjMlMjBkaWN0X2tleXMoJTVCJ2lucHV0X2lkcyclMkMlMjAndG9rZW5fdHlwZV9pZHMnJTJDJTIwJ2F0dGVudGlvbl9tYXNrJyUyQyUyMCdiYm94JyUyQyUyMCdpbWFnZSclNUQp",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor
<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
encoding = processor(
    image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
)  <span class="hljs-comment"># you can also add all tokenizer parameters here such as padding, truncation</span>
<span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`,wrap:!1}}),De=new z({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMExheW91dExNdjJQcm9jZXNzb3IlMEFmcm9tJTIwUElMJTIwaW1wb3J0JTIwSW1hZ2UlMEElMEFwcm9jZXNzb3IlMjAlM0QlMjBMYXlvdXRMTXYyUHJvY2Vzc29yLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZsYXlvdXRsbXYyLWJhc2UtdW5jYXNlZCUyMiUyQyUyMHJldmlzaW9uJTNEJTIybm9fb2NyJTIyKSUwQSUwQWltYWdlJTIwJTNEJTIwSW1hZ2Uub3BlbiglMEElMjAlMjAlMjAlMjAlMjJuYW1lX29mX3lvdXJfZG9jdW1lbnQlMjAtJTIwY2FuJTIwYmUlMjBhJTIwcG5nJTJDJTIwanBnJTJDJTIwZXRjLiUyMG9mJTIweW91ciUyMGRvY3VtZW50cyUyMChQREZzJTIwbXVzdCUyMGJlJTIwY29udmVydGVkJTIwdG8lMjBpbWFnZXMpLiUyMiUwQSkuY29udmVydCglMjJSR0IlMjIpJTBBd29yZHMlMjAlM0QlMjAlNUIlMjJoZWxsbyUyMiUyQyUyMCUyMndvcmxkJTIyJTVEJTBBYm94ZXMlMjAlM0QlMjAlNUIlNUIxJTJDJTIwMiUyQyUyMDMlMkMlMjA0JTVEJTJDJTIwJTVCNSUyQyUyMDYlMkMlMjA3JTJDJTIwOCU1RCU1RCUyMCUyMCUyMyUyMG1ha2UlMjBzdXJlJTIwdG8lMjBub3JtYWxpemUlMjB5b3VyJTIwYm91bmRpbmclMjBib3hlcyUwQWVuY29kaW5nJTIwJTNEJTIwcHJvY2Vzc29yKGltYWdlJTJDJTIwd29yZHMlMkMlMjBib3hlcyUzRGJveGVzJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEFwcmludChlbmNvZGluZy5rZXlzKCkpJTBBJTIzJTIwZGljdF9rZXlzKCU1QidpbnB1dF9pZHMnJTJDJTIwJ3Rva2VuX3R5cGVfaWRzJyUyQyUyMCdhdHRlbnRpb25fbWFzayclMkMlMjAnYmJveCclMkMlMjAnaW1hZ2UnJTVEKQ==",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor
<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>, revision=<span class="hljs-string">&quot;no_ocr&quot;</span>)

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
words = [<span class="hljs-string">&quot;hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
boxes = [[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>], [<span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>]]  <span class="hljs-comment"># make sure to normalize your bounding boxes</span>
encoding = processor(image, words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`,wrap:!1}}),et=new z({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMExheW91dExNdjJQcm9jZXNzb3IlMEFmcm9tJTIwUElMJTIwaW1wb3J0JTIwSW1hZ2UlMEElMEFwcm9jZXNzb3IlMjAlM0QlMjBMYXlvdXRMTXYyUHJvY2Vzc29yLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZsYXlvdXRsbXYyLWJhc2UtdW5jYXNlZCUyMiUyQyUyMHJldmlzaW9uJTNEJTIybm9fb2NyJTIyKSUwQSUwQWltYWdlJTIwJTNEJTIwSW1hZ2Uub3BlbiglMEElMjAlMjAlMjAlMjAlMjJuYW1lX29mX3lvdXJfZG9jdW1lbnQlMjAtJTIwY2FuJTIwYmUlMjBhJTIwcG5nJTJDJTIwanBnJTJDJTIwZXRjLiUyMG9mJTIweW91ciUyMGRvY3VtZW50cyUyMChQREZzJTIwbXVzdCUyMGJlJTIwY29udmVydGVkJTIwdG8lMjBpbWFnZXMpLiUyMiUwQSkuY29udmVydCglMjJSR0IlMjIpJTBBd29yZHMlMjAlM0QlMjAlNUIlMjJoZWxsbyUyMiUyQyUyMCUyMndvcmxkJTIyJTVEJTBBYm94ZXMlMjAlM0QlMjAlNUIlNUIxJTJDJTIwMiUyQyUyMDMlMkMlMjA0JTVEJTJDJTIwJTVCNSUyQyUyMDYlMkMlMjA3JTJDJTIwOCU1RCU1RCUyMCUyMCUyMyUyMG1ha2UlMjBzdXJlJTIwdG8lMjBub3JtYWxpemUlMjB5b3VyJTIwYm91bmRpbmclMjBib3hlcyUwQXdvcmRfbGFiZWxzJTIwJTNEJTIwJTVCMSUyQyUyMDIlNUQlMEFlbmNvZGluZyUyMCUzRCUyMHByb2Nlc3NvcihpbWFnZSUyQyUyMHdvcmRzJTJDJTIwYm94ZXMlM0Rib3hlcyUyQyUyMHdvcmRfbGFiZWxzJTNEd29yZF9sYWJlbHMlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQXByaW50KGVuY29kaW5nLmtleXMoKSklMEElMjMlMjBkaWN0X2tleXMoJTVCJ2lucHV0X2lkcyclMkMlMjAndG9rZW5fdHlwZV9pZHMnJTJDJTIwJ2F0dGVudGlvbl9tYXNrJyUyQyUyMCdiYm94JyUyQyUyMCdsYWJlbHMnJTJDJTIwJ2ltYWdlJyU1RCk=",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor
<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>, revision=<span class="hljs-string">&quot;no_ocr&quot;</span>)

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
words = [<span class="hljs-string">&quot;hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
boxes = [[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>], [<span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>]]  <span class="hljs-comment"># make sure to normalize your bounding boxes</span>
word_labels = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>]
encoding = processor(image, words, boxes=boxes, word_labels=word_labels, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;labels&#x27;, &#x27;image&#x27;])</span>`,wrap:!1}}),nt=new z({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMExheW91dExNdjJQcm9jZXNzb3IlMEFmcm9tJTIwUElMJTIwaW1wb3J0JTIwSW1hZ2UlMEElMEFwcm9jZXNzb3IlMjAlM0QlMjBMYXlvdXRMTXYyUHJvY2Vzc29yLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZsYXlvdXRsbXYyLWJhc2UtdW5jYXNlZCUyMiklMEElMEFpbWFnZSUyMCUzRCUyMEltYWdlLm9wZW4oJTBBJTIwJTIwJTIwJTIwJTIybmFtZV9vZl95b3VyX2RvY3VtZW50JTIwLSUyMGNhbiUyMGJlJTIwYSUyMHBuZyUyQyUyMGpwZyUyQyUyMGV0Yy4lMjBvZiUyMHlvdXIlMjBkb2N1bWVudHMlMjAoUERGcyUyMG11c3QlMjBiZSUyMGNvbnZlcnRlZCUyMHRvJTIwaW1hZ2VzKS4lMjIlMEEpLmNvbnZlcnQoJTIyUkdCJTIyKSUwQXF1ZXN0aW9uJTIwJTNEJTIwJTIyV2hhdCdzJTIwaGlzJTIwbmFtZSUzRiUyMiUwQWVuY29kaW5nJTIwJTNEJTIwcHJvY2Vzc29yKGltYWdlJTJDJTIwcXVlc3Rpb24lMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQXByaW50KGVuY29kaW5nLmtleXMoKSklMEElMjMlMjBkaWN0X2tleXMoJTVCJ2lucHV0X2lkcyclMkMlMjAndG9rZW5fdHlwZV9pZHMnJTJDJTIwJ2F0dGVudGlvbl9tYXNrJyUyQyUyMCdiYm94JyUyQyUyMCdpbWFnZSclNUQp",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor
<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>)

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
question = <span class="hljs-string">&quot;What&#x27;s his name?&quot;</span>
encoding = processor(image, question, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`,wrap:!1}}),rt=new z({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMExheW91dExNdjJQcm9jZXNzb3IlMEFmcm9tJTIwUElMJTIwaW1wb3J0JTIwSW1hZ2UlMEElMEFwcm9jZXNzb3IlMjAlM0QlMjBMYXlvdXRMTXYyUHJvY2Vzc29yLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZsYXlvdXRsbXYyLWJhc2UtdW5jYXNlZCUyMiUyQyUyMHJldmlzaW9uJTNEJTIybm9fb2NyJTIyKSUwQSUwQWltYWdlJTIwJTNEJTIwSW1hZ2Uub3BlbiglMEElMjAlMjAlMjAlMjAlMjJuYW1lX29mX3lvdXJfZG9jdW1lbnQlMjAtJTIwY2FuJTIwYmUlMjBhJTIwcG5nJTJDJTIwanBnJTJDJTIwZXRjLiUyMG9mJTIweW91ciUyMGRvY3VtZW50cyUyMChQREZzJTIwbXVzdCUyMGJlJTIwY29udmVydGVkJTIwdG8lMjBpbWFnZXMpLiUyMiUwQSkuY29udmVydCglMjJSR0IlMjIpJTBBcXVlc3Rpb24lMjAlM0QlMjAlMjJXaGF0J3MlMjBoaXMlMjBuYW1lJTNGJTIyJTBBd29yZHMlMjAlM0QlMjAlNUIlMjJoZWxsbyUyMiUyQyUyMCUyMndvcmxkJTIyJTVEJTBBYm94ZXMlMjAlM0QlMjAlNUIlNUIxJTJDJTIwMiUyQyUyMDMlMkMlMjA0JTVEJTJDJTIwJTVCNSUyQyUyMDYlMkMlMjA3JTJDJTIwOCU1RCU1RCUyMCUyMCUyMyUyMG1ha2UlMjBzdXJlJTIwdG8lMjBub3JtYWxpemUlMjB5b3VyJTIwYm91bmRpbmclMjBib3hlcyUwQWVuY29kaW5nJTIwJTNEJTIwcHJvY2Vzc29yKGltYWdlJTJDJTIwcXVlc3Rpb24lMkMlMjB3b3JkcyUyQyUyMGJveGVzJTNEYm94ZXMlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQXByaW50KGVuY29kaW5nLmtleXMoKSklMEElMjMlMjBkaWN0X2tleXMoJTVCJ2lucHV0X2lkcyclMkMlMjAndG9rZW5fdHlwZV9pZHMnJTJDJTIwJ2F0dGVudGlvbl9tYXNrJyUyQyUyMCdiYm94JyUyQyUyMCdpbWFnZSclNUQp",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Processor
<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image

processor = LayoutLMv2Processor.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutlmv2-base-uncased&quot;</span>, revision=<span class="hljs-string">&quot;no_ocr&quot;</span>)

image = Image.<span class="hljs-built_in">open</span>(
    <span class="hljs-string">&quot;name_of_your_document - can be a png, jpg, etc. of your documents (PDFs must be converted to images).&quot;</span>
).convert(<span class="hljs-string">&quot;RGB&quot;</span>)
question = <span class="hljs-string">&quot;What&#x27;s his name?&quot;</span>
words = [<span class="hljs-string">&quot;hello&quot;</span>, <span class="hljs-string">&quot;world&quot;</span>]
boxes = [[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>], [<span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>]]  <span class="hljs-comment"># make sure to normalize your bounding boxes</span>
encoding = processor(image, question, words, boxes=boxes, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-built_in">print</span>(encoding.keys())
<span class="hljs-comment"># dict_keys([&#x27;input_ids&#x27;, &#x27;token_type_ids&#x27;, &#x27;attention_mask&#x27;, &#x27;bbox&#x27;, &#x27;image&#x27;])</span>`,wrap:!1}}),it=new $({props:{title:"LayoutLMv2Config",local:"transformers.LayoutLMv2Config",headingTag:"h2"}}),lt=new x({props:{name:"class transformers.LayoutLMv2Config",anchor:"transformers.LayoutLMv2Config",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"max_2d_position_embeddings",val:" = 1024"},{name:"max_rel_pos",val:" = 128"},{name:"rel_pos_bins",val:" = 32"},{name:"fast_qkv",val:" = True"},{name:"max_rel_2d_pos",val:" = 256"},{name:"rel_2d_pos_bins",val:" = 64"},{name:"convert_sync_batchnorm",val:" = True"},{name:"image_feature_pool_shape",val:" = [7, 7, 256]"},{name:"coordinate_size",val:" = 128"},{name:"shape_size",val:" = 128"},{name:"has_relative_attention_bias",val:" = True"},{name:"has_spatial_attention_bias",val:" = True"},{name:"has_visual_segment_embedding",val:" = False"},{name:"detectron2_config_args",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the LayoutLMv2 model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model">LayoutLMv2Model</a> or <code>TFLayoutLMv2Model</code>.`,name:"vocab_size"},{anchor:"transformers.LayoutLMv2Config.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.LayoutLMv2Config.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.LayoutLMv2Config.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.LayoutLMv2Config.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.LayoutLMv2Config.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.LayoutLMv2Config.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.LayoutLMv2Config.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.LayoutLMv2Config.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.LayoutLMv2Config.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Model">LayoutLMv2Model</a> or
<code>TFLayoutLMv2Model</code>.`,name:"type_vocab_size"},{anchor:"transformers.LayoutLMv2Config.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.LayoutLMv2Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.LayoutLMv2Config.max_2d_position_embeddings",description:`<strong>max_2d_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum value that the 2D position embedding might ever be used with. Typically set this to something
large just in case (e.g., 1024).`,name:"max_2d_position_embeddings"},{anchor:"transformers.LayoutLMv2Config.max_rel_pos",description:`<strong>max_rel_pos</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
The maximum number of relative positions to be used in the self-attention mechanism.`,name:"max_rel_pos"},{anchor:"transformers.LayoutLMv2Config.rel_pos_bins",description:`<strong>rel_pos_bins</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The number of relative position bins to be used in the self-attention mechanism.`,name:"rel_pos_bins"},{anchor:"transformers.LayoutLMv2Config.fast_qkv",description:`<strong>fast_qkv</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use a single matrix for the queries, keys, values in the self-attention layers.`,name:"fast_qkv"},{anchor:"transformers.LayoutLMv2Config.max_rel_2d_pos",description:`<strong>max_rel_2d_pos</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
The maximum number of relative 2D positions in the self-attention mechanism.`,name:"max_rel_2d_pos"},{anchor:"transformers.LayoutLMv2Config.rel_2d_pos_bins",description:`<strong>rel_2d_pos_bins</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
The number of 2D relative position bins in the self-attention mechanism.`,name:"rel_2d_pos_bins"},{anchor:"transformers.LayoutLMv2Config.image_feature_pool_shape",description:`<strong>image_feature_pool_shape</strong> (<code>List[int]</code>, <em>optional</em>, defaults to [7, 7, 256]) &#x2014;
The shape of the average-pooled feature map.`,name:"image_feature_pool_shape"},{anchor:"transformers.LayoutLMv2Config.coordinate_size",description:`<strong>coordinate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Dimension of the coordinate embeddings.`,name:"coordinate_size"},{anchor:"transformers.LayoutLMv2Config.shape_size",description:`<strong>shape_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Dimension of the width and height embeddings.`,name:"shape_size"},{anchor:"transformers.LayoutLMv2Config.has_relative_attention_bias",description:`<strong>has_relative_attention_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use a relative attention bias in the self-attention mechanism.`,name:"has_relative_attention_bias"},{anchor:"transformers.LayoutLMv2Config.has_spatial_attention_bias",description:`<strong>has_spatial_attention_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use a spatial attention bias in the self-attention mechanism.`,name:"has_spatial_attention_bias"},{anchor:"transformers.LayoutLMv2Config.has_visual_segment_embedding",description:`<strong>has_visual_segment_embedding</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add visual segment embeddings.`,name:"has_visual_segment_embedding"},{anchor:"transformers.LayoutLMv2Config.detectron2_config_args",description:`<strong>detectron2_config_args</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary containing the configuration arguments of the Detectron2 visual backbone. Refer to <a href="https://github.com/microsoft/unilm/blob/master/layoutlmft/layoutlmft/models/layoutlmv2/detectron2_config.py" rel="nofollow">this
file</a>
for details regarding default values.`,name:"detectron2_config_args"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv2/configuration_layoutlmv2.py#L34"}}),D=new wo({props:{anchor:"transformers.LayoutLMv2Config.example",$$slots:{default:[Ea]},$$scope:{ctx:T}}}),dt=new $({props:{title:"LayoutLMv2FeatureExtractor",local:"transformers.LayoutLMv2FeatureExtractor",headingTag:"h2"}}),ct=new x({props:{name:"class transformers.LayoutLMv2FeatureExtractor",anchor:"transformers.LayoutLMv2FeatureExtractor",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv2/feature_extraction_layoutlmv2.py#L28"}}),mt=new x({props:{name:"__call__",anchor:"transformers.LayoutLMv2FeatureExtractor.__call__",parameters:[{name:"images",val:""},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/image_processing_utils.py#L549"}}),pt=new $({props:{title:"LayoutLMv2ImageProcessor",local:"transformers.LayoutLMv2ImageProcessor",headingTag:"h2"}}),ut=new x({props:{name:"class transformers.LayoutLMv2ImageProcessor",anchor:"transformers.LayoutLMv2ImageProcessor",parameters:[{name:"do_resize",val:": bool = True"},{name:"size",val:": Dict = None"},{name:"resample",val:": Resampling = <Resampling.BILINEAR: 2>"},{name:"apply_ocr",val:": bool = True"},{name:"ocr_lang",val:": Optional = None"},{name:"tesseract_config",val:": Optional = ''"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2ImageProcessor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the image&#x2019;s (height, width) dimensions to <code>(size[&quot;height&quot;], size[&quot;width&quot;])</code>. Can be
overridden by <code>do_resize</code> in <code>preprocess</code>.`,name:"do_resize"},{anchor:"transformers.LayoutLMv2ImageProcessor.size",description:`<strong>size</strong> (<code>Dict[str, int]</code> <em>optional</em>, defaults to <code>{&quot;height&quot; -- 224, &quot;width&quot;: 224}</code>):
Size of the image after resizing. Can be overridden by <code>size</code> in <code>preprocess</code>.`,name:"size"},{anchor:"transformers.LayoutLMv2ImageProcessor.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>Resampling.BILINEAR</code>) &#x2014;
Resampling filter to use if resizing the image. Can be overridden by the <code>resample</code> parameter in the
<code>preprocess</code> method.`,name:"resample"},{anchor:"transformers.LayoutLMv2ImageProcessor.apply_ocr",description:`<strong>apply_ocr</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to apply the Tesseract OCR engine to get words + normalized bounding boxes. Can be overridden by
<code>apply_ocr</code> in <code>preprocess</code>.`,name:"apply_ocr"},{anchor:"transformers.LayoutLMv2ImageProcessor.ocr_lang",description:`<strong>ocr_lang</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The language, specified by its ISO code, to be used by the Tesseract OCR engine. By default, English is
used. Can be overridden by <code>ocr_lang</code> in <code>preprocess</code>.`,name:"ocr_lang"},{anchor:"transformers.LayoutLMv2ImageProcessor.tesseract_config",description:`<strong>tesseract_config</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&quot;</code>) &#x2014;
Any additional custom configuration flags that are forwarded to the <code>config</code> parameter when calling
Tesseract. For example: &#x2018;&#x2014;psm 6&#x2019;. Can be overridden by <code>tesseract_config</code> in <code>preprocess</code>.`,name:"tesseract_config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv2/image_processing_layoutlmv2.py#L93"}}),ht=new x({props:{name:"preprocess",anchor:"transformers.LayoutLMv2ImageProcessor.preprocess",parameters:[{name:"images",val:": Union"},{name:"do_resize",val:": bool = None"},{name:"size",val:": Dict = None"},{name:"resample",val:": Resampling = None"},{name:"apply_ocr",val:": bool = None"},{name:"ocr_lang",val:": Optional = None"},{name:"tesseract_config",val:": Optional = None"},{name:"return_tensors",val:": Union = None"},{name:"data_format",val:": ChannelDimension = <ChannelDimension.FIRST: 'channels_first'>"},{name:"input_data_format",val:": Union = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2ImageProcessor.preprocess.images",description:`<strong>images</strong> (<code>ImageInput</code>) &#x2014;
Image to preprocess.`,name:"images"},{anchor:"transformers.LayoutLMv2ImageProcessor.preprocess.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_resize</code>) &#x2014;
Whether to resize the image.`,name:"do_resize"},{anchor:"transformers.LayoutLMv2ImageProcessor.preprocess.size",description:`<strong>size</strong> (<code>Dict[str, int]</code>, <em>optional</em>, defaults to <code>self.size</code>) &#x2014;
Desired size of the output image after resizing.`,name:"size"},{anchor:"transformers.LayoutLMv2ImageProcessor.preprocess.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>self.resample</code>) &#x2014;
Resampling filter to use if resizing the image. This can be one of the enum <code>PIL.Image</code> resampling
filter. Only has an effect if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.LayoutLMv2ImageProcessor.preprocess.apply_ocr",description:`<strong>apply_ocr</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.apply_ocr</code>) &#x2014;
Whether to apply the Tesseract OCR engine to get words + normalized bounding boxes.`,name:"apply_ocr"},{anchor:"transformers.LayoutLMv2ImageProcessor.preprocess.ocr_lang",description:`<strong>ocr_lang</strong> (<code>str</code>, <em>optional</em>, defaults to <code>self.ocr_lang</code>) &#x2014;
The language, specified by its ISO code, to be used by the Tesseract OCR engine. By default, English is
used.`,name:"ocr_lang"},{anchor:"transformers.LayoutLMv2ImageProcessor.preprocess.tesseract_config",description:`<strong>tesseract_config</strong> (<code>str</code>, <em>optional</em>, defaults to <code>self.tesseract_config</code>) &#x2014;
Any additional custom configuration flags that are forwarded to the <code>config</code> parameter when calling
Tesseract.`,name:"tesseract_config"},{anchor:"transformers.LayoutLMv2ImageProcessor.preprocess.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <code>TensorType</code>, <em>optional</em>) &#x2014;
The type of tensors to return. Can be one of:<ul>
<li>Unset: Return a list of <code>np.ndarray</code>.</li>
<li><code>TensorType.TENSORFLOW</code> or <code>&apos;tf&apos;</code>: Return a batch of type <code>tf.Tensor</code>.</li>
<li><code>TensorType.PYTORCH</code> or <code>&apos;pt&apos;</code>: Return a batch of type <code>torch.Tensor</code>.</li>
<li><code>TensorType.NUMPY</code> or <code>&apos;np&apos;</code>: Return a batch of type <code>np.ndarray</code>.</li>
<li><code>TensorType.JAX</code> or <code>&apos;jax&apos;</code>: Return a batch of type <code>jax.numpy.ndarray</code>.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutLMv2ImageProcessor.preprocess.data_format",description:`<strong>data_format</strong> (<code>ChannelDimension</code> or <code>str</code>, <em>optional</em>, defaults to <code>ChannelDimension.FIRST</code>) &#x2014;
The channel dimension format for the output image. Can be one of:<ul>
<li><code>ChannelDimension.FIRST</code>: image in (num_channels, height, width) format.</li>
<li><code>ChannelDimension.LAST</code>: image in (height, width, num_channels) format.</li>
</ul>`,name:"data_format"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv2/image_processing_layoutlmv2.py#L189"}}),ft=new $({props:{title:"LayoutLMv2Tokenizer",local:"transformers.LayoutLMv2Tokenizer",headingTag:"h2"}}),gt=new x({props:{name:"class transformers.LayoutLMv2Tokenizer",anchor:"transformers.LayoutLMv2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [1000, 1000, 1000, 1000]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"model_max_length",val:": int = 512"},{name:"additional_special_tokens",val:": Optional = None"},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv2/tokenization_layoutlmv2.py#L206"}}),_t=new x({props:{name:"__call__",anchor:"transformers.LayoutLMv2Tokenizer.__call__",parameters:[{name:"text",val:": Union"},{name:"text_pair",val:": Union = None"},{name:"boxes",val:": Union = None"},{name:"word_labels",val:": Union = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": Union = False"},{name:"truncation",val:": Union = None"},{name:"max_length",val:": Optional = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": Optional = None"},{name:"return_tensors",val:": Union = None"},{name:"return_token_type_ids",val:": Optional = None"},{name:"return_attention_mask",val:": Optional = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Tokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string, a list of strings
(words of a single example or questions of a batch of examples) or a list of list of strings (batch of
words).`,name:"text"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.text_pair",description:`<strong>text_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence should be a list of strings
(pretokenized string).`,name:"text_pair"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.boxes",description:`<strong>boxes</strong> (<code>List[List[int]]</code>, <code>List[List[List[int]]]</code>) &#x2014;
Word-level bounding boxes. Each bounding box should be normalized to be on a 0-1000 scale.`,name:"boxes"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.word_labels",description:`<strong>word_labels</strong> (<code>List[int]</code>, <code>List[List[int]]</code>, <em>optional</em>) &#x2014;
Word-level integer labels (for token classification tasks such as FUNSD, CORD).`,name:"word_labels"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability <code>&gt;= 7.5</code> (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.return_token_type_ids",description:`<strong>return_token_type_ids</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return token type IDs. If left to the default, will return the token type IDs according to
the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"return_token_type_ids"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"return_attention_mask"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.return_overflowing_tokens",description:`<strong>return_overflowing_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return overflowing token sequences. If a pair of sequences of input ids (or a batch
of pairs) is provided with <code>truncation_strategy = longest_first</code> or <code>True</code>, an error is raised instead
of returning overflowing tokens.`,name:"return_overflowing_tokens"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.return_special_tokens_mask",description:`<strong>return_special_tokens_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return special tokens mask information.`,name:"return_special_tokens_mask"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.return_offsets_mapping",description:`<strong>return_offsets_mapping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return <code>(char_start, char_end)</code> for each token.</p>
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.LayoutLMv2Tokenizer.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv2/tokenization_layoutlmv2.py#L430",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a> with the following fields:</p>
<ul>
<li>
<p><strong>input_ids</strong> — List of token ids to be fed to a model.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
</li>
<li>
<p><strong>bbox</strong> — List of bounding boxes to be fed to a model.</p>
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
<p><strong>labels</strong> — List of labels to be fed to a model. (when <code>word_labels</code> is specified).</p>
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
<p><strong>length</strong> — The length of the inputs (when <code>return_length=True</code>).</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),yt=new x({props:{name:"save_vocabulary",anchor:"transformers.LayoutLMv2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv2/tokenization_layoutlmv2.py#L410"}}),bt=new $({props:{title:"LayoutLMv2TokenizerFast",local:"transformers.LayoutLMv2TokenizerFast",headingTag:"h2"}}),Mt=new x({props:{name:"class transformers.LayoutLMv2TokenizerFast",anchor:"transformers.LayoutLMv2TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [1000, 1000, 1000, 1000]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.LayoutLMv2TokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.LayoutLMv2TokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.LayoutLMv2TokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.LayoutLMv2TokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.LayoutLMv2TokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.LayoutLMv2TokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.LayoutLMv2TokenizerFast.cls_token_box",description:`<strong>cls_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [CLS] token.`,name:"cls_token_box"},{anchor:"transformers.LayoutLMv2TokenizerFast.sep_token_box",description:`<strong>sep_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[1000, 1000, 1000, 1000]</code>) &#x2014;
The bounding box to use for the special [SEP] token.`,name:"sep_token_box"},{anchor:"transformers.LayoutLMv2TokenizerFast.pad_token_box",description:`<strong>pad_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [PAD] token.`,name:"pad_token_box"},{anchor:"transformers.LayoutLMv2TokenizerFast.pad_token_label",description:`<strong>pad_token_label</strong> (<code>int</code>, <em>optional</em>, defaults to -100) &#x2014;
The label to use for padding tokens. Defaults to -100, which is the <code>ignore_index</code> of PyTorch&#x2019;s
CrossEntropyLoss.`,name:"pad_token_label"},{anchor:"transformers.LayoutLMv2TokenizerFast.only_label_first_subword",description:`<strong>only_label_first_subword</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to only label the first subword, in case word labels are provided.`,name:"only_label_first_subword"},{anchor:"transformers.LayoutLMv2TokenizerFast.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters. This should likely be deactivated for Japanese (see <a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">this
issue</a>).`,name:"tokenize_chinese_chars"},{anchor:"transformers.LayoutLMv2TokenizerFast.strip_accents",description:`<strong>strip_accents</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original LayoutLMv2).`,name:"strip_accents"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv2/tokenization_layoutlmv2_fast.py#L70"}}),vt=new x({props:{name:"__call__",anchor:"transformers.LayoutLMv2TokenizerFast.__call__",parameters:[{name:"text",val:": Union"},{name:"text_pair",val:": Union = None"},{name:"boxes",val:": Union = None"},{name:"word_labels",val:": Union = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": Union = False"},{name:"truncation",val:": Union = None"},{name:"max_length",val:": Optional = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": Optional = None"},{name:"return_tensors",val:": Union = None"},{name:"return_token_type_ids",val:": Optional = None"},{name:"return_attention_mask",val:": Optional = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string, a list of strings
(words of a single example or questions of a batch of examples) or a list of list of strings (batch of
words).`,name:"text"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.text_pair",description:`<strong>text_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence should be a list of strings
(pretokenized string).`,name:"text_pair"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.boxes",description:`<strong>boxes</strong> (<code>List[List[int]]</code>, <code>List[List[List[int]]]</code>) &#x2014;
Word-level bounding boxes. Each bounding box should be normalized to be on a 0-1000 scale.`,name:"boxes"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.word_labels",description:`<strong>word_labels</strong> (<code>List[int]</code>, <code>List[List[int]]</code>, <em>optional</em>) &#x2014;
Word-level integer labels (for token classification tasks such as FUNSD, CORD).`,name:"word_labels"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability <code>&gt;= 7.5</code> (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.return_token_type_ids",description:`<strong>return_token_type_ids</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return token type IDs. If left to the default, will return the token type IDs according to
the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"return_token_type_ids"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"return_attention_mask"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.return_overflowing_tokens",description:`<strong>return_overflowing_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return overflowing token sequences. If a pair of sequences of input ids (or a batch
of pairs) is provided with <code>truncation_strategy = longest_first</code> or <code>True</code>, an error is raised instead
of returning overflowing tokens.`,name:"return_overflowing_tokens"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.return_special_tokens_mask",description:`<strong>return_special_tokens_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return special tokens mask information.`,name:"return_special_tokens_mask"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.return_offsets_mapping",description:`<strong>return_offsets_mapping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return <code>(char_start, char_end)</code> for each token.</p>
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.LayoutLMv2TokenizerFast.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv2/tokenization_layoutlmv2_fast.py#L179",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a> with the following fields:</p>
<ul>
<li>
<p><strong>input_ids</strong> — List of token ids to be fed to a model.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
</li>
<li>
<p><strong>bbox</strong> — List of bounding boxes to be fed to a model.</p>
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
<p><strong>labels</strong> — List of labels to be fed to a model. (when <code>word_labels</code> is specified).</p>
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
<p><strong>length</strong> — The length of the inputs (when <code>return_length=True</code>).</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),wt=new $({props:{title:"LayoutLMv2Processor",local:"transformers.LayoutLMv2Processor",headingTag:"h2"}}),Tt=new x({props:{name:"class transformers.LayoutLMv2Processor",anchor:"transformers.LayoutLMv2Processor",parameters:[{name:"image_processor",val:" = None"},{name:"tokenizer",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Processor.image_processor",description:`<strong>image_processor</strong> (<code>LayoutLMv2ImageProcessor</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor">LayoutLMv2ImageProcessor</a>. The image processor is a required input.`,name:"image_processor"},{anchor:"transformers.LayoutLMv2Processor.tokenizer",description:`<strong>tokenizer</strong> (<code>LayoutLMv2Tokenizer</code> or <code>LayoutLMv2TokenizerFast</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Tokenizer">LayoutLMv2Tokenizer</a> or <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2TokenizerFast">LayoutLMv2TokenizerFast</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv2/processing_layoutlmv2.py#L27"}}),Lt=new x({props:{name:"__call__",anchor:"transformers.LayoutLMv2Processor.__call__",parameters:[{name:"images",val:""},{name:"text",val:": Union = None"},{name:"text_pair",val:": Union = None"},{name:"boxes",val:": Union = None"},{name:"word_labels",val:": Union = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": Union = False"},{name:"truncation",val:": Union = False"},{name:"max_length",val:": Optional = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": Optional = None"},{name:"return_token_type_ids",val:": Optional = None"},{name:"return_attention_mask",val:": Optional = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"return_tensors",val:": Union = None"},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv2/processing_layoutlmv2.py#L69"}}),kt=new $({props:{title:"LayoutLMv2Model",local:"transformers.LayoutLMv2Model",headingTag:"h2"}}),xt=new x({props:{name:"class transformers.LayoutLMv2Model",anchor:"transformers.LayoutLMv2Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L688"}}),jt=new x({props:{name:"forward",anchor:"transformers.LayoutLMv2Model.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"bbox",val:": Optional = None"},{name:"image",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv2Model.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>((batch_size, sequence_length), 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv2Model.forward.image",description:`<strong>image</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code> or <code>detectron.structures.ImageList</code> whose <code>tensors</code> is of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images.`,name:"image"},{anchor:"transformers.LayoutLMv2Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv2Model.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv2Model.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv2Model.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv2Model.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv2Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv2Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv2Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L802",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"
>LayoutLMv2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),oe=new Rn({props:{$$slots:{default:[Ha]},$$scope:{ctx:T}}}),ne=new wo({props:{anchor:"transformers.LayoutLMv2Model.forward.example",$$slots:{default:[Pa]},$$scope:{ctx:T}}}),Jt=new $({props:{title:"LayoutLMv2ForSequenceClassification",local:"transformers.LayoutLMv2ForSequenceClassification",headingTag:"h2"}}),Ut=new x({props:{name:"class transformers.LayoutLMv2ForSequenceClassification",anchor:"transformers.LayoutLMv2ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L944"}}),Ct=new x({props:{name:"forward",anchor:"transformers.LayoutLMv2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"bbox",val:": Optional = None"},{name:"image",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.image",description:`<strong>image</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code> or <code>detectron.structures.ImageList</code> whose <code>tensors</code> is of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images.`,name:"image"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L967",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"
>LayoutLMv2Config</a>) and inputs.</p>
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
`}}),se=new Rn({props:{$$slots:{default:[Sa]},$$scope:{ctx:T}}}),ae=new wo({props:{anchor:"transformers.LayoutLMv2ForSequenceClassification.forward.example",$$slots:{default:[Aa]},$$scope:{ctx:T}}}),$t=new $({props:{title:"LayoutLMv2ForTokenClassification",local:"transformers.LayoutLMv2ForTokenClassification",headingTag:"h2"}}),zt=new x({props:{name:"class transformers.LayoutLMv2ForTokenClassification",anchor:"transformers.LayoutLMv2ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1126"}}),It=new x({props:{name:"forward",anchor:"transformers.LayoutLMv2ForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"bbox",val:": Optional = None"},{name:"image",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.image",description:`<strong>image</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code> or <code>detectron.structures.ImageList</code> whose <code>tensors</code> is of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images.`,name:"image"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1149",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"
>LayoutLMv2Config</a>) and inputs.</p>
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
`}}),re=new Rn({props:{$$slots:{default:[Da]},$$scope:{ctx:T}}}),ie=new wo({props:{anchor:"transformers.LayoutLMv2ForTokenClassification.forward.example",$$slots:{default:[Oa]},$$scope:{ctx:T}}}),Ft=new $({props:{title:"LayoutLMv2ForQuestionAnswering",local:"transformers.LayoutLMv2ForQuestionAnswering",headingTag:"h2"}}),Zt=new x({props:{name:"class transformers.LayoutLMv2ForQuestionAnswering",anchor:"transformers.LayoutLMv2ForQuestionAnswering",parameters:[{name:"config",val:""},{name:"has_visual_segment_embedding",val:" = True"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config">LayoutLMv2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1258"}}),Wt=new x({props:{name:"forward",anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"bbox",val:": Optional = None"},{name:"image",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"start_positions",val:": Optional = None"},{name:"end_positions",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.bbox",description:`<strong>bbox</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 4)</code>, <em>optional</em>) &#x2014;
Bounding boxes of each input sequence tokens. Selected in the range <code>[0, config.max_2d_position_embeddings-1]</code>. Each bounding box should be a normalized version in (x0, y0, x1, y1)
format, where (x0, y0) corresponds to the position of the upper left corner in the bounding box, and (x1,
y1) represents the position of the lower right corner.`,name:"bbox"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.image",description:`<strong>image</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code> or <code>detectron.structures.ImageList</code> whose <code>tensors</code> is of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Batch of document images.`,name:"image"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutlmv2/modeling_layoutlmv2.py#L1280",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2Config"
>LayoutLMv2Config</a>) and inputs.</p>
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
`}}),le=new Rn({props:{$$slots:{default:[Ka]},$$scope:{ctx:T}}}),de=new wo({props:{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.example",$$slots:{default:[er]},$$scope:{ctx:T}}}),ce=new wo({props:{anchor:"transformers.LayoutLMv2ForQuestionAnswering.forward.example-2",$$slots:{default:[tr]},$$scope:{ctx:T}}}),{c(){d=i("meta"),M=n(),c=i("p"),b=n(),u(v.$$.fragment),p=n(),u(w.$$.fragment),ko=n(),_e=i("p"),_e.innerHTML=Ws,xo=n(),ye=i("ul"),ye.innerHTML=Ns,jo=n(),be=i("p"),be.textContent=Rs,Jo=n(),Me=i("p"),Me.innerHTML=qs,Uo=n(),ve=i("p"),ve.innerHTML=Bs,Co=n(),u(we.$$.fragment),$o=n(),Te=i("p"),Te.textContent=Xs,zo=n(),u(Le.$$.fragment),Io=n(),ke=i("ul"),ke.innerHTML=Gs,Fo=n(),u(xe.$$.fragment),Zo=n(),je=i("p"),je.innerHTML=Vs,Wo=n(),u(Je.$$.fragment),No=n(),Ue=i("p"),Ue.innerHTML=Qs,Ro=n(),Ce=i("ul"),Ce.innerHTML=Ys,qo=n(),$e=i("p"),$e.innerHTML=Es,Bo=n(),u(ze.$$.fragment),Xo=n(),Ie=i("p"),Ie.textContent=Hs,Go=n(),u(Fe.$$.fragment),Vo=n(),Ze=i("ul"),Ze.innerHTML=Ps,Qo=n(),u(We.$$.fragment),Yo=n(),Ne=i("ul"),Ne.innerHTML=Ss,Eo=n(),u(Re.$$.fragment),Ho=n(),qe=i("ul"),qe.innerHTML=As,Po=n(),u(Be.$$.fragment),So=n(),Xe=i("p"),Xe.innerHTML=Ds,Ao=n(),u(Ge.$$.fragment),Do=n(),Ve=i("p"),Ve.innerHTML=Os,Oo=n(),Qe=i("p"),Qe.innerHTML=Ks,Ko=n(),Ye=i("p"),Ye.textContent=ea,en=n(),Ee=i("p"),Ee.innerHTML=ta,tn=n(),He=i("p"),He.textContent=oa,on=n(),u(Pe.$$.fragment),nn=n(),Se=i("p"),Se.innerHTML=na,sn=n(),Ae=i("p"),Ae.innerHTML=sa,an=n(),u(De.$$.fragment),rn=n(),Oe=i("p"),Oe.innerHTML=aa,ln=n(),Ke=i("p"),Ke.innerHTML=ra,dn=n(),u(et.$$.fragment),cn=n(),tt=i("p"),tt.innerHTML=ia,mn=n(),ot=i("p"),ot.textContent=la,pn=n(),u(nt.$$.fragment),un=n(),st=i("p"),st.innerHTML=da,hn=n(),at=i("p"),at.textContent=ca,fn=n(),u(rt.$$.fragment),gn=n(),u(it.$$.fragment),_n=n(),F=i("div"),u(lt.$$.fragment),qn=n(),Gt=i("p"),Gt.innerHTML=ma,Bn=n(),Vt=i("p"),Vt.innerHTML=pa,Xn=n(),u(D.$$.fragment),yn=n(),u(dt.$$.fragment),bn=n(),S=i("div"),u(ct.$$.fragment),Gn=n(),O=i("div"),u(mt.$$.fragment),Vn=n(),Qt=i("p"),Qt.textContent=ua,Mn=n(),u(pt.$$.fragment),vn=n(),G=i("div"),u(ut.$$.fragment),Qn=n(),Yt=i("p"),Yt.textContent=ha,Yn=n(),K=i("div"),u(ht.$$.fragment),En=n(),Et=i("p"),Et.textContent=fa,wn=n(),u(ft.$$.fragment),Tn=n(),J=i("div"),u(gt.$$.fragment),Hn=n(),Ht=i("p"),Ht.innerHTML=ga,Pn=n(),Pt=i("p"),Pt.innerHTML=_a,Sn=n(),St=i("p"),St.innerHTML=ya,An=n(),ee=i("div"),u(_t.$$.fragment),Dn=n(),At=i("p"),At.textContent=ba,On=n(),Dt=i("div"),u(yt.$$.fragment),Ln=n(),u(bt.$$.fragment),kn=n(),Z=i("div"),u(Mt.$$.fragment),Kn=n(),Ot=i("p"),Ot.innerHTML=Ma,es=n(),Kt=i("p"),Kt.innerHTML=va,ts=n(),te=i("div"),u(vt.$$.fragment),os=n(),eo=i("p"),eo.textContent=wa,xn=n(),u(wt.$$.fragment),jn=n(),U=i("div"),u(Tt.$$.fragment),ns=n(),to=i("p"),to.textContent=Ta,ss=n(),oo=i("p"),oo.innerHTML=La,as=n(),no=i("p"),no.innerHTML=ka,rs=n(),E=i("div"),u(Lt.$$.fragment),is=n(),so=i("p"),so.innerHTML=xa,ls=n(),ao=i("p"),ao.textContent=ja,Jn=n(),u(kt.$$.fragment),Un=n(),V=i("div"),u(xt.$$.fragment),ds=n(),ro=i("p"),ro.innerHTML=Ja,cs=n(),q=i("div"),u(jt.$$.fragment),ms=n(),io=i("p"),io.innerHTML=Ua,ps=n(),u(oe.$$.fragment),us=n(),u(ne.$$.fragment),Cn=n(),u(Jt.$$.fragment),$n=n(),W=i("div"),u(Ut.$$.fragment),hs=n(),lo=i("p"),lo.innerHTML=Ca,fs=n(),co=i("p"),co.innerHTML=$a,gs=n(),B=i("div"),u(Ct.$$.fragment),_s=n(),mo=i("p"),mo.innerHTML=za,ys=n(),u(se.$$.fragment),bs=n(),u(ae.$$.fragment),zn=n(),u($t.$$.fragment),In=n(),N=i("div"),u(zt.$$.fragment),Ms=n(),po=i("p"),po.innerHTML=Ia,vs=n(),uo=i("p"),uo.innerHTML=Fa,ws=n(),X=i("div"),u(It.$$.fragment),Ts=n(),ho=i("p"),ho.innerHTML=Za,Ls=n(),u(re.$$.fragment),ks=n(),u(ie.$$.fragment),Fn=n(),u(Ft.$$.fragment),Zn=n(),R=i("div"),u(Zt.$$.fragment),xs=n(),fo=i("p"),fo.innerHTML=Wa,js=n(),go=i("p"),go.innerHTML=Na,Js=n(),j=i("div"),u(Wt.$$.fragment),Us=n(),_o=i("p"),_o.innerHTML=Ra,Cs=n(),u(le.$$.fragment),$s=n(),yo=i("p"),yo.textContent=qa,zs=n(),bo=i("p"),bo.textContent=Ba,Is=n(),u(de.$$.fragment),Fs=n(),u(ce.$$.fragment),Wn=n(),To=i("p"),this.h()},l(e){const t=Ya("svelte-u9bgzb",document.head);d=l(t,"META",{name:!0,content:!0}),t.forEach(o),M=s(e),c=l(e,"P",{}),L(c).forEach(o),b=s(e),h(v.$$.fragment,e),p=s(e),h(w.$$.fragment,e),ko=s(e),_e=l(e,"P",{"data-svelte-h":!0}),m(_e)!=="svelte-1izquq2"&&(_e.innerHTML=Ws),xo=s(e),ye=l(e,"UL",{"data-svelte-h":!0}),m(ye)!=="svelte-yo1x23"&&(ye.innerHTML=Ns),jo=s(e),be=l(e,"P",{"data-svelte-h":!0}),m(be)!=="svelte-vfdo9a"&&(be.textContent=Rs),Jo=s(e),Me=l(e,"P",{"data-svelte-h":!0}),m(Me)!=="svelte-186xar0"&&(Me.innerHTML=qs),Uo=s(e),ve=l(e,"P",{"data-svelte-h":!0}),m(ve)!=="svelte-11fpk1m"&&(ve.innerHTML=Bs),Co=s(e),h(we.$$.fragment,e),$o=s(e),Te=l(e,"P",{"data-svelte-h":!0}),m(Te)!=="svelte-esmvdn"&&(Te.textContent=Xs),zo=s(e),h(Le.$$.fragment,e),Io=s(e),ke=l(e,"UL",{"data-svelte-h":!0}),m(ke)!=="svelte-1p4835j"&&(ke.innerHTML=Gs),Fo=s(e),h(xe.$$.fragment,e),Zo=s(e),je=l(e,"P",{"data-svelte-h":!0}),m(je)!=="svelte-12t0qrc"&&(je.innerHTML=Vs),Wo=s(e),h(Je.$$.fragment,e),No=s(e),Ue=l(e,"P",{"data-svelte-h":!0}),m(Ue)!=="svelte-18we4cv"&&(Ue.innerHTML=Qs),Ro=s(e),Ce=l(e,"UL",{"data-svelte-h":!0}),m(Ce)!=="svelte-k4av18"&&(Ce.innerHTML=Ys),qo=s(e),$e=l(e,"P",{"data-svelte-h":!0}),m($e)!=="svelte-2ft1em"&&($e.innerHTML=Es),Bo=s(e),h(ze.$$.fragment,e),Xo=s(e),Ie=l(e,"P",{"data-svelte-h":!0}),m(Ie)!=="svelte-3wsmvo"&&(Ie.textContent=Hs),Go=s(e),h(Fe.$$.fragment,e),Vo=s(e),Ze=l(e,"UL",{"data-svelte-h":!0}),m(Ze)!=="svelte-1ltr886"&&(Ze.innerHTML=Ps),Qo=s(e),h(We.$$.fragment,e),Yo=s(e),Ne=l(e,"UL",{"data-svelte-h":!0}),m(Ne)!=="svelte-1ilbw0"&&(Ne.innerHTML=Ss),Eo=s(e),h(Re.$$.fragment,e),Ho=s(e),qe=l(e,"UL",{"data-svelte-h":!0}),m(qe)!=="svelte-kes906"&&(qe.innerHTML=As),Po=s(e),h(Be.$$.fragment,e),So=s(e),Xe=l(e,"P",{"data-svelte-h":!0}),m(Xe)!=="svelte-18boeob"&&(Xe.innerHTML=Ds),Ao=s(e),h(Ge.$$.fragment,e),Do=s(e),Ve=l(e,"P",{"data-svelte-h":!0}),m(Ve)!=="svelte-1otdrc6"&&(Ve.innerHTML=Os),Oo=s(e),Qe=l(e,"P",{"data-svelte-h":!0}),m(Qe)!=="svelte-1qcdlav"&&(Qe.innerHTML=Ks),Ko=s(e),Ye=l(e,"P",{"data-svelte-h":!0}),m(Ye)!=="svelte-jv0had"&&(Ye.textContent=ea),en=s(e),Ee=l(e,"P",{"data-svelte-h":!0}),m(Ee)!=="svelte-xm6lld"&&(Ee.innerHTML=ta),tn=s(e),He=l(e,"P",{"data-svelte-h":!0}),m(He)!=="svelte-89ax5f"&&(He.textContent=oa),on=s(e),h(Pe.$$.fragment,e),nn=s(e),Se=l(e,"P",{"data-svelte-h":!0}),m(Se)!=="svelte-2qgjup"&&(Se.innerHTML=na),sn=s(e),Ae=l(e,"P",{"data-svelte-h":!0}),m(Ae)!=="svelte-1somw74"&&(Ae.innerHTML=sa),an=s(e),h(De.$$.fragment,e),rn=s(e),Oe=l(e,"P",{"data-svelte-h":!0}),m(Oe)!=="svelte-fyy19w"&&(Oe.innerHTML=aa),ln=s(e),Ke=l(e,"P",{"data-svelte-h":!0}),m(Ke)!=="svelte-lrirhw"&&(Ke.innerHTML=ra),dn=s(e),h(et.$$.fragment,e),cn=s(e),tt=l(e,"P",{"data-svelte-h":!0}),m(tt)!=="svelte-v8fxei"&&(tt.innerHTML=ia),mn=s(e),ot=l(e,"P",{"data-svelte-h":!0}),m(ot)!=="svelte-ctx9i7"&&(ot.textContent=la),pn=s(e),h(nt.$$.fragment,e),un=s(e),st=l(e,"P",{"data-svelte-h":!0}),m(st)!=="svelte-14vwjoy"&&(st.innerHTML=da),hn=s(e),at=l(e,"P",{"data-svelte-h":!0}),m(at)!=="svelte-17mqtdd"&&(at.textContent=ca),fn=s(e),h(rt.$$.fragment,e),gn=s(e),h(it.$$.fragment,e),_n=s(e),F=l(e,"DIV",{class:!0});var Q=L(F);h(lt.$$.fragment,Q),qn=s(Q),Gt=l(Q,"P",{"data-svelte-h":!0}),m(Gt)!=="svelte-zqxmvk"&&(Gt.innerHTML=ma),Bn=s(Q),Vt=l(Q,"P",{"data-svelte-h":!0}),m(Vt)!=="svelte-o55m63"&&(Vt.innerHTML=pa),Xn=s(Q),h(D.$$.fragment,Q),Q.forEach(o),yn=s(e),h(dt.$$.fragment,e),bn=s(e),S=l(e,"DIV",{class:!0});var Nt=L(S);h(ct.$$.fragment,Nt),Gn=s(Nt),O=l(Nt,"DIV",{class:!0});var Rt=L(O);h(mt.$$.fragment,Rt),Vn=s(Rt),Qt=l(Rt,"P",{"data-svelte-h":!0}),m(Qt)!=="svelte-khengj"&&(Qt.textContent=ua),Rt.forEach(o),Nt.forEach(o),Mn=s(e),h(pt.$$.fragment,e),vn=s(e),G=l(e,"DIV",{class:!0});var A=L(G);h(ut.$$.fragment,A),Qn=s(A),Yt=l(A,"P",{"data-svelte-h":!0}),m(Yt)!=="svelte-1agvf8h"&&(Yt.textContent=ha),Yn=s(A),K=l(A,"DIV",{class:!0});var qt=L(K);h(ht.$$.fragment,qt),En=s(qt),Et=l(qt,"P",{"data-svelte-h":!0}),m(Et)!=="svelte-1x3yxsa"&&(Et.textContent=fa),qt.forEach(o),A.forEach(o),wn=s(e),h(ft.$$.fragment,e),Tn=s(e),J=l(e,"DIV",{class:!0});var C=L(J);h(gt.$$.fragment,C),Hn=s(C),Ht=l(C,"P",{"data-svelte-h":!0}),m(Ht)!=="svelte-1duyfna"&&(Ht.innerHTML=ga),Pn=s(C),Pt=l(C,"P",{"data-svelte-h":!0}),m(Pt)!=="svelte-1c3t5ty"&&(Pt.innerHTML=_a),Sn=s(C),St=l(C,"P",{"data-svelte-h":!0}),m(St)!=="svelte-119hrxv"&&(St.innerHTML=ya),An=s(C),ee=l(C,"DIV",{class:!0});var Bt=L(ee);h(_t.$$.fragment,Bt),Dn=s(Bt),At=l(Bt,"P",{"data-svelte-h":!0}),m(At)!=="svelte-1w6bb17"&&(At.textContent=ba),Bt.forEach(o),On=s(C),Dt=l(C,"DIV",{class:!0});var Lo=L(Dt);h(yt.$$.fragment,Lo),Lo.forEach(o),C.forEach(o),Ln=s(e),h(bt.$$.fragment,e),kn=s(e),Z=l(e,"DIV",{class:!0});var Y=L(Z);h(Mt.$$.fragment,Y),Kn=s(Y),Ot=l(Y,"P",{"data-svelte-h":!0}),m(Ot)!=="svelte-dt8ib9"&&(Ot.innerHTML=Ma),es=s(Y),Kt=l(Y,"P",{"data-svelte-h":!0}),m(Kt)!=="svelte-fh0aq"&&(Kt.innerHTML=va),ts=s(Y),te=l(Y,"DIV",{class:!0});var Xt=L(te);h(vt.$$.fragment,Xt),os=s(Xt),eo=l(Xt,"P",{"data-svelte-h":!0}),m(eo)!=="svelte-1w6bb17"&&(eo.textContent=wa),Xt.forEach(o),Y.forEach(o),xn=s(e),h(wt.$$.fragment,e),jn=s(e),U=l(e,"DIV",{class:!0});var H=L(U);h(Tt.$$.fragment,H),ns=s(H),to=l(H,"P",{"data-svelte-h":!0}),m(to)!=="svelte-1shjypf"&&(to.textContent=Ta),ss=s(H),oo=l(H,"P",{"data-svelte-h":!0}),m(oo)!=="svelte-1uhfvws"&&(oo.innerHTML=La),as=s(H),no=l(H,"P",{"data-svelte-h":!0}),m(no)!=="svelte-eho78z"&&(no.innerHTML=ka),rs=s(H),E=l(H,"DIV",{class:!0});var Mo=L(E);h(Lt.$$.fragment,Mo),is=s(Mo),so=l(Mo,"P",{"data-svelte-h":!0}),m(so)!=="svelte-w8fad"&&(so.innerHTML=xa),ls=s(Mo),ao=l(Mo,"P",{"data-svelte-h":!0}),m(ao)!=="svelte-ws0hzs"&&(ao.textContent=ja),Mo.forEach(o),H.forEach(o),Jn=s(e),h(kt.$$.fragment,e),Un=s(e),V=l(e,"DIV",{class:!0});var vo=L(V);h(xt.$$.fragment,vo),ds=s(vo),ro=l(vo,"P",{"data-svelte-h":!0}),m(ro)!=="svelte-1ch3tid"&&(ro.innerHTML=Ja),cs=s(vo),q=l(vo,"DIV",{class:!0});var me=L(q);h(jt.$$.fragment,me),ms=s(me),io=l(me,"P",{"data-svelte-h":!0}),m(io)!=="svelte-1utg1q8"&&(io.innerHTML=Ua),ps=s(me),h(oe.$$.fragment,me),us=s(me),h(ne.$$.fragment,me),me.forEach(o),vo.forEach(o),Cn=s(e),h(Jt.$$.fragment,e),$n=s(e),W=l(e,"DIV",{class:!0});var pe=L(W);h(Ut.$$.fragment,pe),hs=s(pe),lo=l(pe,"P",{"data-svelte-h":!0}),m(lo)!=="svelte-1fnrdzy"&&(lo.innerHTML=Ca),fs=s(pe),co=l(pe,"P",{"data-svelte-h":!0}),m(co)!=="svelte-68lg8f"&&(co.innerHTML=$a),gs=s(pe),B=l(pe,"DIV",{class:!0});var ue=L(B);h(Ct.$$.fragment,ue),_s=s(ue),mo=l(ue,"P",{"data-svelte-h":!0}),m(mo)!=="svelte-1iz616s"&&(mo.innerHTML=za),ys=s(ue),h(se.$$.fragment,ue),bs=s(ue),h(ae.$$.fragment,ue),ue.forEach(o),pe.forEach(o),zn=s(e),h($t.$$.fragment,e),In=s(e),N=l(e,"DIV",{class:!0});var he=L(N);h(zt.$$.fragment,he),Ms=s(he),po=l(he,"P",{"data-svelte-h":!0}),m(po)!=="svelte-14haz6"&&(po.innerHTML=Ia),vs=s(he),uo=l(he,"P",{"data-svelte-h":!0}),m(uo)!=="svelte-68lg8f"&&(uo.innerHTML=Fa),ws=s(he),X=l(he,"DIV",{class:!0});var fe=L(X);h(It.$$.fragment,fe),Ts=s(fe),ho=l(fe,"P",{"data-svelte-h":!0}),m(ho)!=="svelte-q2lvpi"&&(ho.innerHTML=Za),Ls=s(fe),h(re.$$.fragment,fe),ks=s(fe),h(ie.$$.fragment,fe),fe.forEach(o),he.forEach(o),Fn=s(e),h(Ft.$$.fragment,e),Zn=s(e),R=l(e,"DIV",{class:!0});var ge=L(R);h(Zt.$$.fragment,ge),xs=s(ge),fo=l(ge,"P",{"data-svelte-h":!0}),m(fo)!=="svelte-5fetmu"&&(fo.innerHTML=Wa),js=s(ge),go=l(ge,"P",{"data-svelte-h":!0}),m(go)!=="svelte-68lg8f"&&(go.innerHTML=Na),Js=s(ge),j=l(ge,"DIV",{class:!0});var I=L(j);h(Wt.$$.fragment,I),Us=s(I),_o=l(I,"P",{"data-svelte-h":!0}),m(_o)!=="svelte-4t3se0"&&(_o.innerHTML=Ra),Cs=s(I),h(le.$$.fragment,I),$s=s(I),yo=l(I,"P",{"data-svelte-h":!0}),m(yo)!=="svelte-11lpom8"&&(yo.textContent=qa),zs=s(I),bo=l(I,"P",{"data-svelte-h":!0}),m(bo)!=="svelte-aqq2wx"&&(bo.textContent=Ba),Is=s(I),h(de.$$.fragment,I),Fs=s(I),h(ce.$$.fragment,I),I.forEach(o),ge.forEach(o),Wn=s(e),To=l(e,"P",{}),L(To).forEach(o),this.h()},h(){k(d,"name","hf:doc:metadata"),k(d,"content",nr),k(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,t){r(document.head,d),a(e,M,t),a(e,c,t),a(e,b,t),f(v,e,t),a(e,p,t),f(w,e,t),a(e,ko,t),a(e,_e,t),a(e,xo,t),a(e,ye,t),a(e,jo,t),a(e,be,t),a(e,Jo,t),a(e,Me,t),a(e,Uo,t),a(e,ve,t),a(e,Co,t),f(we,e,t),a(e,$o,t),a(e,Te,t),a(e,zo,t),f(Le,e,t),a(e,Io,t),a(e,ke,t),a(e,Fo,t),f(xe,e,t),a(e,Zo,t),a(e,je,t),a(e,Wo,t),f(Je,e,t),a(e,No,t),a(e,Ue,t),a(e,Ro,t),a(e,Ce,t),a(e,qo,t),a(e,$e,t),a(e,Bo,t),f(ze,e,t),a(e,Xo,t),a(e,Ie,t),a(e,Go,t),f(Fe,e,t),a(e,Vo,t),a(e,Ze,t),a(e,Qo,t),f(We,e,t),a(e,Yo,t),a(e,Ne,t),a(e,Eo,t),f(Re,e,t),a(e,Ho,t),a(e,qe,t),a(e,Po,t),f(Be,e,t),a(e,So,t),a(e,Xe,t),a(e,Ao,t),f(Ge,e,t),a(e,Do,t),a(e,Ve,t),a(e,Oo,t),a(e,Qe,t),a(e,Ko,t),a(e,Ye,t),a(e,en,t),a(e,Ee,t),a(e,tn,t),a(e,He,t),a(e,on,t),f(Pe,e,t),a(e,nn,t),a(e,Se,t),a(e,sn,t),a(e,Ae,t),a(e,an,t),f(De,e,t),a(e,rn,t),a(e,Oe,t),a(e,ln,t),a(e,Ke,t),a(e,dn,t),f(et,e,t),a(e,cn,t),a(e,tt,t),a(e,mn,t),a(e,ot,t),a(e,pn,t),f(nt,e,t),a(e,un,t),a(e,st,t),a(e,hn,t),a(e,at,t),a(e,fn,t),f(rt,e,t),a(e,gn,t),f(it,e,t),a(e,_n,t),a(e,F,t),f(lt,F,null),r(F,qn),r(F,Gt),r(F,Bn),r(F,Vt),r(F,Xn),f(D,F,null),a(e,yn,t),f(dt,e,t),a(e,bn,t),a(e,S,t),f(ct,S,null),r(S,Gn),r(S,O),f(mt,O,null),r(O,Vn),r(O,Qt),a(e,Mn,t),f(pt,e,t),a(e,vn,t),a(e,G,t),f(ut,G,null),r(G,Qn),r(G,Yt),r(G,Yn),r(G,K),f(ht,K,null),r(K,En),r(K,Et),a(e,wn,t),f(ft,e,t),a(e,Tn,t),a(e,J,t),f(gt,J,null),r(J,Hn),r(J,Ht),r(J,Pn),r(J,Pt),r(J,Sn),r(J,St),r(J,An),r(J,ee),f(_t,ee,null),r(ee,Dn),r(ee,At),r(J,On),r(J,Dt),f(yt,Dt,null),a(e,Ln,t),f(bt,e,t),a(e,kn,t),a(e,Z,t),f(Mt,Z,null),r(Z,Kn),r(Z,Ot),r(Z,es),r(Z,Kt),r(Z,ts),r(Z,te),f(vt,te,null),r(te,os),r(te,eo),a(e,xn,t),f(wt,e,t),a(e,jn,t),a(e,U,t),f(Tt,U,null),r(U,ns),r(U,to),r(U,ss),r(U,oo),r(U,as),r(U,no),r(U,rs),r(U,E),f(Lt,E,null),r(E,is),r(E,so),r(E,ls),r(E,ao),a(e,Jn,t),f(kt,e,t),a(e,Un,t),a(e,V,t),f(xt,V,null),r(V,ds),r(V,ro),r(V,cs),r(V,q),f(jt,q,null),r(q,ms),r(q,io),r(q,ps),f(oe,q,null),r(q,us),f(ne,q,null),a(e,Cn,t),f(Jt,e,t),a(e,$n,t),a(e,W,t),f(Ut,W,null),r(W,hs),r(W,lo),r(W,fs),r(W,co),r(W,gs),r(W,B),f(Ct,B,null),r(B,_s),r(B,mo),r(B,ys),f(se,B,null),r(B,bs),f(ae,B,null),a(e,zn,t),f($t,e,t),a(e,In,t),a(e,N,t),f(zt,N,null),r(N,Ms),r(N,po),r(N,vs),r(N,uo),r(N,ws),r(N,X),f(It,X,null),r(X,Ts),r(X,ho),r(X,Ls),f(re,X,null),r(X,ks),f(ie,X,null),a(e,Fn,t),f(Ft,e,t),a(e,Zn,t),a(e,R,t),f(Zt,R,null),r(R,xs),r(R,fo),r(R,js),r(R,go),r(R,Js),r(R,j),f(Wt,j,null),r(j,Us),r(j,_o),r(j,Cs),f(le,j,null),r(j,$s),r(j,yo),r(j,zs),r(j,bo),r(j,Is),f(de,j,null),r(j,Fs),f(ce,j,null),a(e,Wn,t),a(e,To,t),Nn=!0},p(e,[t]){const Q={};t&2&&(Q.$$scope={dirty:t,ctx:e}),D.$set(Q);const Nt={};t&2&&(Nt.$$scope={dirty:t,ctx:e}),oe.$set(Nt);const Rt={};t&2&&(Rt.$$scope={dirty:t,ctx:e}),ne.$set(Rt);const A={};t&2&&(A.$$scope={dirty:t,ctx:e}),se.$set(A);const qt={};t&2&&(qt.$$scope={dirty:t,ctx:e}),ae.$set(qt);const C={};t&2&&(C.$$scope={dirty:t,ctx:e}),re.$set(C);const Bt={};t&2&&(Bt.$$scope={dirty:t,ctx:e}),ie.$set(Bt);const Lo={};t&2&&(Lo.$$scope={dirty:t,ctx:e}),le.$set(Lo);const Y={};t&2&&(Y.$$scope={dirty:t,ctx:e}),de.$set(Y);const Xt={};t&2&&(Xt.$$scope={dirty:t,ctx:e}),ce.$set(Xt)},i(e){Nn||(g(v.$$.fragment,e),g(w.$$.fragment,e),g(we.$$.fragment,e),g(Le.$$.fragment,e),g(xe.$$.fragment,e),g(Je.$$.fragment,e),g(ze.$$.fragment,e),g(Fe.$$.fragment,e),g(We.$$.fragment,e),g(Re.$$.fragment,e),g(Be.$$.fragment,e),g(Ge.$$.fragment,e),g(Pe.$$.fragment,e),g(De.$$.fragment,e),g(et.$$.fragment,e),g(nt.$$.fragment,e),g(rt.$$.fragment,e),g(it.$$.fragment,e),g(lt.$$.fragment,e),g(D.$$.fragment,e),g(dt.$$.fragment,e),g(ct.$$.fragment,e),g(mt.$$.fragment,e),g(pt.$$.fragment,e),g(ut.$$.fragment,e),g(ht.$$.fragment,e),g(ft.$$.fragment,e),g(gt.$$.fragment,e),g(_t.$$.fragment,e),g(yt.$$.fragment,e),g(bt.$$.fragment,e),g(Mt.$$.fragment,e),g(vt.$$.fragment,e),g(wt.$$.fragment,e),g(Tt.$$.fragment,e),g(Lt.$$.fragment,e),g(kt.$$.fragment,e),g(xt.$$.fragment,e),g(jt.$$.fragment,e),g(oe.$$.fragment,e),g(ne.$$.fragment,e),g(Jt.$$.fragment,e),g(Ut.$$.fragment,e),g(Ct.$$.fragment,e),g(se.$$.fragment,e),g(ae.$$.fragment,e),g($t.$$.fragment,e),g(zt.$$.fragment,e),g(It.$$.fragment,e),g(re.$$.fragment,e),g(ie.$$.fragment,e),g(Ft.$$.fragment,e),g(Zt.$$.fragment,e),g(Wt.$$.fragment,e),g(le.$$.fragment,e),g(de.$$.fragment,e),g(ce.$$.fragment,e),Nn=!0)},o(e){_(v.$$.fragment,e),_(w.$$.fragment,e),_(we.$$.fragment,e),_(Le.$$.fragment,e),_(xe.$$.fragment,e),_(Je.$$.fragment,e),_(ze.$$.fragment,e),_(Fe.$$.fragment,e),_(We.$$.fragment,e),_(Re.$$.fragment,e),_(Be.$$.fragment,e),_(Ge.$$.fragment,e),_(Pe.$$.fragment,e),_(De.$$.fragment,e),_(et.$$.fragment,e),_(nt.$$.fragment,e),_(rt.$$.fragment,e),_(it.$$.fragment,e),_(lt.$$.fragment,e),_(D.$$.fragment,e),_(dt.$$.fragment,e),_(ct.$$.fragment,e),_(mt.$$.fragment,e),_(pt.$$.fragment,e),_(ut.$$.fragment,e),_(ht.$$.fragment,e),_(ft.$$.fragment,e),_(gt.$$.fragment,e),_(_t.$$.fragment,e),_(yt.$$.fragment,e),_(bt.$$.fragment,e),_(Mt.$$.fragment,e),_(vt.$$.fragment,e),_(wt.$$.fragment,e),_(Tt.$$.fragment,e),_(Lt.$$.fragment,e),_(kt.$$.fragment,e),_(xt.$$.fragment,e),_(jt.$$.fragment,e),_(oe.$$.fragment,e),_(ne.$$.fragment,e),_(Jt.$$.fragment,e),_(Ut.$$.fragment,e),_(Ct.$$.fragment,e),_(se.$$.fragment,e),_(ae.$$.fragment,e),_($t.$$.fragment,e),_(zt.$$.fragment,e),_(It.$$.fragment,e),_(re.$$.fragment,e),_(ie.$$.fragment,e),_(Ft.$$.fragment,e),_(Zt.$$.fragment,e),_(Wt.$$.fragment,e),_(le.$$.fragment,e),_(de.$$.fragment,e),_(ce.$$.fragment,e),Nn=!1},d(e){e&&(o(M),o(c),o(b),o(p),o(ko),o(_e),o(xo),o(ye),o(jo),o(be),o(Jo),o(Me),o(Uo),o(ve),o(Co),o($o),o(Te),o(zo),o(Io),o(ke),o(Fo),o(Zo),o(je),o(Wo),o(No),o(Ue),o(Ro),o(Ce),o(qo),o($e),o(Bo),o(Xo),o(Ie),o(Go),o(Vo),o(Ze),o(Qo),o(Yo),o(Ne),o(Eo),o(Ho),o(qe),o(Po),o(So),o(Xe),o(Ao),o(Do),o(Ve),o(Oo),o(Qe),o(Ko),o(Ye),o(en),o(Ee),o(tn),o(He),o(on),o(nn),o(Se),o(sn),o(Ae),o(an),o(rn),o(Oe),o(ln),o(Ke),o(dn),o(cn),o(tt),o(mn),o(ot),o(pn),o(un),o(st),o(hn),o(at),o(fn),o(gn),o(_n),o(F),o(yn),o(bn),o(S),o(Mn),o(vn),o(G),o(wn),o(Tn),o(J),o(Ln),o(kn),o(Z),o(xn),o(jn),o(U),o(Jn),o(Un),o(V),o(Cn),o($n),o(W),o(zn),o(In),o(N),o(Fn),o(Zn),o(R),o(Wn),o(To)),o(d),y(v,e),y(w,e),y(we,e),y(Le,e),y(xe,e),y(Je,e),y(ze,e),y(Fe,e),y(We,e),y(Re,e),y(Be,e),y(Ge,e),y(Pe,e),y(De,e),y(et,e),y(nt,e),y(rt,e),y(it,e),y(lt),y(D),y(dt,e),y(ct),y(mt),y(pt,e),y(ut),y(ht),y(ft,e),y(gt),y(_t),y(yt),y(bt,e),y(Mt),y(vt),y(wt,e),y(Tt),y(Lt),y(kt,e),y(xt),y(jt),y(oe),y(ne),y(Jt,e),y(Ut),y(Ct),y(se),y(ae),y($t,e),y(zt),y(It),y(re),y(ie),y(Ft,e),y(Zt),y(Wt),y(le),y(de),y(ce)}}}const nr='{"title":"LayoutLMV2","local":"layoutlmv2","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"Usage: LayoutLMv2Processor","local":"usage-layoutlmv2processor","sections":[],"depth":2},{"title":"LayoutLMv2Config","local":"transformers.LayoutLMv2Config","sections":[],"depth":2},{"title":"LayoutLMv2FeatureExtractor","local":"transformers.LayoutLMv2FeatureExtractor","sections":[],"depth":2},{"title":"LayoutLMv2ImageProcessor","local":"transformers.LayoutLMv2ImageProcessor","sections":[],"depth":2},{"title":"LayoutLMv2Tokenizer","local":"transformers.LayoutLMv2Tokenizer","sections":[],"depth":2},{"title":"LayoutLMv2TokenizerFast","local":"transformers.LayoutLMv2TokenizerFast","sections":[],"depth":2},{"title":"LayoutLMv2Processor","local":"transformers.LayoutLMv2Processor","sections":[],"depth":2},{"title":"LayoutLMv2Model","local":"transformers.LayoutLMv2Model","sections":[],"depth":2},{"title":"LayoutLMv2ForSequenceClassification","local":"transformers.LayoutLMv2ForSequenceClassification","sections":[],"depth":2},{"title":"LayoutLMv2ForTokenClassification","local":"transformers.LayoutLMv2ForTokenClassification","sections":[],"depth":2},{"title":"LayoutLMv2ForQuestionAnswering","local":"transformers.LayoutLMv2ForQuestionAnswering","sections":[],"depth":2}],"depth":1}';function sr(T){return Ga(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ur extends Va{constructor(d){super(),Qa(this,d,sr,or,Xa,{})}}export{ur as component};
