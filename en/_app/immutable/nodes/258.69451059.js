import{s as Xe,f as Ve,o as He,n as ge}from"../chunks/scheduler.9bc65507.js";import{S as Le,i as Ye,g as u,s as i,r as w,A as Qe,h as f,f as a,c as l,j as pe,u as b,x as F,k as ae,y as h,a as c,v as M,d as y,t as T,w as $}from"../chunks/index.707bf1b6.js";import{T as Ne}from"../chunks/Tip.c2ecdbf4.js";import{D as we}from"../chunks/Docstring.17db21ae.js";import{C as Ge}from"../chunks/CodeBlock.54a9f38d.js";import{F as Ee,M as Re}from"../chunks/Markdown.fef84341.js";import{E as ze}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{P as Pe}from"../chunks/PipelineTag.44585822.js";import{H as Ce}from"../chunks/Heading.342b1fa6.js";function qe(k){let e,m="Example:",n,s,g;return s=new Ge({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFN3aW5Db25maWclMkMlMjBTd2luTW9kZWwlMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwU3dpbiUyMG1pY3Jvc29mdCUyRnN3aW4tdGlueS1wYXRjaDQtd2luZG93Ny0yMjQlMjBzdHlsZSUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwU3dpbkNvbmZpZygpJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyMG1vZGVsJTIwKHdpdGglMjByYW5kb20lMjB3ZWlnaHRzKSUyMGZyb20lMjB0aGUlMjBtaWNyb3NvZnQlMkZzd2luLXRpbnktcGF0Y2g0LXdpbmRvdzctMjI0JTIwc3R5bGUlMjBjb25maWd1cmF0aW9uJTBBbW9kZWwlMjAlM0QlMjBTd2luTW9kZWwoY29uZmlndXJhdGlvbiklMEElMEElMjMlMjBBY2Nlc3NpbmclMjB0aGUlMjBtb2RlbCUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwbW9kZWwuY29uZmln",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> SwinConfig, SwinModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Swin microsoft/swin-tiny-patch4-window7-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = SwinConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the microsoft/swin-tiny-patch4-window7-224 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SwinModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){e=u("p"),e.textContent=m,n=i(),w(s.$$.fragment)},l(o){e=f(o,"P",{"data-svelte-h":!0}),F(e)!=="svelte-11lpom8"&&(e.textContent=m),n=l(o),b(s.$$.fragment,o)},m(o,j){c(o,e,j),c(o,n,j),M(s,o,j),g=!0},p:ge,i(o){g||(y(s.$$.fragment,o),g=!0)},o(o){T(s.$$.fragment,o),g=!1},d(o){o&&(a(e),a(n)),$(s,o)}}}function Ae(k){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=u("p"),e.innerHTML=m},l(n){e=f(n,"P",{"data-svelte-h":!0}),F(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(n,s){c(n,e,s)},p:ge,d(n){n&&a(e)}}}function De(k){let e,m="Example:",n,s,g;return s=new Ge({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9JbWFnZVByb2Nlc3NvciUyQyUyMFN3aW5Nb2RlbCUwQWltcG9ydCUyMHRvcmNoJTBBZnJvbSUyMGRhdGFzZXRzJTIwaW1wb3J0JTIwbG9hZF9kYXRhc2V0JTBBJTBBZGF0YXNldCUyMCUzRCUyMGxvYWRfZGF0YXNldCglMjJodWdnaW5nZmFjZSUyRmNhdHMtaW1hZ2UlMjIpJTBBaW1hZ2UlMjAlM0QlMjBkYXRhc2V0JTVCJTIydGVzdCUyMiU1RCU1QiUyMmltYWdlJTIyJTVEJTVCMCU1RCUwQSUwQWltYWdlX3Byb2Nlc3NvciUyMCUzRCUyMEF1dG9JbWFnZVByb2Nlc3Nvci5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGc3dpbi10aW55LXBhdGNoNC13aW5kb3c3LTIyNCUyMiklMEFtb2RlbCUyMCUzRCUyMFN3aW5Nb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGc3dpbi10aW55LXBhdGNoNC13aW5kb3c3LTIyNCUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjBpbWFnZV9wcm9jZXNzb3IoaW1hZ2UlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBbGFzdF9oaWRkZW5fc3RhdGVzJTIwJTNEJTIwb3V0cHV0cy5sYXN0X2hpZGRlbl9zdGF0ZSUwQWxpc3QobGFzdF9oaWRkZW5fc3RhdGVzLnNoYXBlKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoImageProcessor, SwinModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>image_processor = AutoImageProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SwinModel.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = image_processor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">49</span>, <span class="hljs-number">768</span>]`,wrap:!1}}),{c(){e=u("p"),e.textContent=m,n=i(),w(s.$$.fragment)},l(o){e=f(o,"P",{"data-svelte-h":!0}),F(e)!=="svelte-11lpom8"&&(e.textContent=m),n=l(o),b(s.$$.fragment,o)},m(o,j){c(o,e,j),c(o,n,j),M(s,o,j),g=!0},p:ge,i(o){g||(y(s.$$.fragment,o),g=!0)},o(o){T(s.$$.fragment,o),g=!1},d(o){o&&(a(e),a(n)),$(s,o)}}}function Oe(k){let e,m=`Note that we provide a script to pre-train this model on custom data in our <a href="https://github.com/huggingface/transformers/tree/main/examples/pytorch/image-pretraining" rel="nofollow">examples
directory</a>.`;return{c(){e=u("p"),e.innerHTML=m},l(n){e=f(n,"P",{"data-svelte-h":!0}),F(e)!=="svelte-7i3y9o"&&(e.innerHTML=m)},m(n,s){c(n,e,s)},p:ge,d(n){n&&a(e)}}}function Ke(k){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=u("p"),e.innerHTML=m},l(n){e=f(n,"P",{"data-svelte-h":!0}),F(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(n,s){c(n,e,s)},p:ge,d(n){n&&a(e)}}}function et(k){let e,m="Examples:",n,s,g;return s=new Ge({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9JbWFnZVByb2Nlc3NvciUyQyUyMFN3aW5Gb3JNYXNrZWRJbWFnZU1vZGVsaW5nJTBBaW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwUElMJTIwaW1wb3J0JTIwSW1hZ2UlMEFpbXBvcnQlMjByZXF1ZXN0cyUwQSUwQXVybCUyMCUzRCUyMCUyMmh0dHAlM0ElMkYlMkZpbWFnZXMuY29jb2RhdGFzZXQub3JnJTJGdmFsMjAxNyUyRjAwMDAwMDAzOTc2OS5qcGclMjIlMEFpbWFnZSUyMCUzRCUyMEltYWdlLm9wZW4ocmVxdWVzdHMuZ2V0KHVybCUyQyUyMHN0cmVhbSUzRFRydWUpLnJhdyklMEElMEFpbWFnZV9wcm9jZXNzb3IlMjAlM0QlMjBBdXRvSW1hZ2VQcm9jZXNzb3IuZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRnN3aW4tYmFzZS1zaW1taW0td2luZG93Ni0xOTIlMjIpJTBBbW9kZWwlMjAlM0QlMjBTd2luRm9yTWFza2VkSW1hZ2VNb2RlbGluZy5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGc3dpbi1iYXNlLXNpbW1pbS13aW5kb3c2LTE5MiUyMiklMEElMEFudW1fcGF0Y2hlcyUyMCUzRCUyMChtb2RlbC5jb25maWcuaW1hZ2Vfc2l6ZSUyMCUyRiUyRiUyMG1vZGVsLmNvbmZpZy5wYXRjaF9zaXplKSUyMCoqJTIwMiUwQXBpeGVsX3ZhbHVlcyUyMCUzRCUyMGltYWdlX3Byb2Nlc3NvcihpbWFnZXMlM0RpbWFnZSUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpLnBpeGVsX3ZhbHVlcyUwQSUyMyUyMGNyZWF0ZSUyMHJhbmRvbSUyMGJvb2xlYW4lMjBtYXNrJTIwb2YlMjBzaGFwZSUyMChiYXRjaF9zaXplJTJDJTIwbnVtX3BhdGNoZXMpJTBBYm9vbF9tYXNrZWRfcG9zJTIwJTNEJTIwdG9yY2gucmFuZGludChsb3clM0QwJTJDJTIwaGlnaCUzRDIlMkMlMjBzaXplJTNEKDElMkMlMjBudW1fcGF0Y2hlcykpLmJvb2woKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbChwaXhlbF92YWx1ZXMlMkMlMjBib29sX21hc2tlZF9wb3MlM0Rib29sX21hc2tlZF9wb3MpJTBBbG9zcyUyQyUyMHJlY29uc3RydWN0ZWRfcGl4ZWxfdmFsdWVzJTIwJTNEJTIwb3V0cHV0cy5sb3NzJTJDJTIwb3V0cHV0cy5yZWNvbnN0cnVjdGlvbiUwQWxpc3QocmVjb25zdHJ1Y3RlZF9waXhlbF92YWx1ZXMuc2hhcGUp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoImageProcessor, SwinForMaskedImageModeling
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>image_processor = AutoImageProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-base-simmim-window6-192&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SwinForMaskedImageModeling.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-base-simmim-window6-192&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_patches = (model.config.image_size // model.config.patch_size) ** <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = image_processor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create random boolean mask of shape (batch_size, num_patches)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>bool_masked_pos = torch.randint(low=<span class="hljs-number">0</span>, high=<span class="hljs-number">2</span>, size=(<span class="hljs-number">1</span>, num_patches)).<span class="hljs-built_in">bool</span>()

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, reconstructed_pixel_values = outputs.loss, outputs.reconstruction
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(reconstructed_pixel_values.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">192</span>, <span class="hljs-number">192</span>]`,wrap:!1}}),{c(){e=u("p"),e.textContent=m,n=i(),w(s.$$.fragment)},l(o){e=f(o,"P",{"data-svelte-h":!0}),F(e)!=="svelte-kvfsh7"&&(e.textContent=m),n=l(o),b(s.$$.fragment,o)},m(o,j){c(o,e,j),c(o,n,j),M(s,o,j),g=!0},p:ge,i(o){g||(y(s.$$.fragment,o),g=!0)},o(o){T(s.$$.fragment,o),g=!1},d(o){o&&(a(e),a(n)),$(s,o)}}}function tt(k){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=u("p"),e.innerHTML=m},l(n){e=f(n,"P",{"data-svelte-h":!0}),F(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(n,s){c(n,e,s)},p:ge,d(n){n&&a(e)}}}function nt(k){let e,m="Example:",n,s,g;return s=new Ge({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9JbWFnZVByb2Nlc3NvciUyQyUyMFN3aW5Gb3JJbWFnZUNsYXNzaWZpY2F0aW9uJTBBaW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwZGF0YXNldHMlMjBpbXBvcnQlMjBsb2FkX2RhdGFzZXQlMEElMEFkYXRhc2V0JTIwJTNEJTIwbG9hZF9kYXRhc2V0KCUyMmh1Z2dpbmdmYWNlJTJGY2F0cy1pbWFnZSUyMiklMEFpbWFnZSUyMCUzRCUyMGRhdGFzZXQlNUIlMjJ0ZXN0JTIyJTVEJTVCJTIyaW1hZ2UlMjIlNUQlNUIwJTVEJTBBJTBBaW1hZ2VfcHJvY2Vzc29yJTIwJTNEJTIwQXV0b0ltYWdlUHJvY2Vzc29yLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZzd2luLXRpbnktcGF0Y2g0LXdpbmRvdzctMjI0JTIyKSUwQW1vZGVsJTIwJTNEJTIwU3dpbkZvckltYWdlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRnN3aW4tdGlueS1wYXRjaDQtd2luZG93Ny0yMjQlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwaW1hZ2VfcHJvY2Vzc29yKGltYWdlJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEElMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQSUyMyUyMG1vZGVsJTIwcHJlZGljdHMlMjBvbmUlMjBvZiUyMHRoZSUyMDEwMDAlMjBJbWFnZU5ldCUyMGNsYXNzZXMlMEFwcmVkaWN0ZWRfbGFiZWwlMjAlM0QlMjBsb2dpdHMuYXJnbWF4KC0xKS5pdGVtKCklMEFwcmludChtb2RlbC5jb25maWcuaWQybGFiZWwlNUJwcmVkaWN0ZWRfbGFiZWwlNUQp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoImageProcessor, SwinForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>image_processor = AutoImageProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = SwinForImageClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = image_processor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
tabby, tabby cat`,wrap:!1}}),{c(){e=u("p"),e.textContent=m,n=i(),w(s.$$.fragment)},l(o){e=f(o,"P",{"data-svelte-h":!0}),F(e)!=="svelte-11lpom8"&&(e.textContent=m),n=l(o),b(s.$$.fragment,o)},m(o,j){c(o,e,j),c(o,n,j),M(s,o,j),g=!0},p:ge,i(o){g||(y(s.$$.fragment,o),g=!0)},o(o){T(s.$$.fragment,o),g=!1},d(o){o&&(a(e),a(n)),$(s,o)}}}function ot(k){let e,m,n,s,g,o,j=`The bare Swin Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,be,C,D,Me,L,Je='The <a href="/docs/transformers/main/en/model_doc/swin#transformers.SwinModel">SwinModel</a> forward method, overrides the <code>__call__</code> special method.',ye,W,xe,G,O,K,he,S,ee,Te,Y,Ze='Swin Model with a decoder on top for masked image modeling, as proposed in <a href="https://arxiv.org/abs/2111.09886" rel="nofollow">SimMIM</a>.',$e,I,ie,te,ve=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,je,Z,Q,de,ne,Fe='The <a href="/docs/transformers/main/en/model_doc/swin#transformers.SwinForMaskedImageModeling">SwinForMaskedImageModeling</a> forward method, overrides the <code>__call__</code> special method.',E,oe,U,P,_e,B,Ie,R,X,Ue,ce,z=`Swin Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`,ue,me,re=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,ke,x,N,Se,V,We='The <a href="/docs/transformers/main/en/model_doc/swin#transformers.SwinForImageClassification">SwinForImageClassification</a> forward method, overrides the <code>__call__</code> special method.',d,v,se,H,J;return e=new Ce({props:{title:"SwinModel",local:"transformers.SwinModel",headingTag:"h2"}}),s=new we({props:{name:"class transformers.SwinModel",anchor:"transformers.SwinModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"},{name:"use_mask_token",val:" = False"}],parametersDescription:[{anchor:"transformers.SwinModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.SwinModel.add_pooling_layer",description:`<strong>add_pooling_layer</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to apply pooling layer.`,name:"add_pooling_layer"},{anchor:"transformers.SwinModel.use_mask_token",description:`<strong>use_mask_token</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to create and apply mask tokens in the embedding layer.`,name:"use_mask_token"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/swin/modeling_swin.py#L936"}}),D=new we({props:{name:"forward",anchor:"transformers.SwinModel.forward",parameters:[{name:"pixel_values",val:": Optional = None"},{name:"bool_masked_pos",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.SwinModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoImageProcessor">AutoImageProcessor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor.__call__">ViTImageProcessor.<strong>call</strong>()</a>
for details.`,name:"pixel_values"},{anchor:"transformers.SwinModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.SwinModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SwinModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SwinModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SwinModel.forward.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>, <em>optional</em>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/swin/modeling_swin.py#L973",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.models.swin.modeling_swin.SwinModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/swin#transformers.SwinConfig"
>SwinConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>, <em>optional</em>, returned when <code>add_pooling_layer=True</code> is passed) — Average pooling of the last layer hidden-state.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each stage) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each stage) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>reshaped_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each stage) of
shape <code>(batch_size, hidden_size, height, width)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs reshaped to
include the spatial dimensions.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.models.swin.modeling_swin.SwinModelOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),W=new Ne({props:{$$slots:{default:[Ae]},$$scope:{ctx:k}}}),G=new ze({props:{anchor:"transformers.SwinModel.forward.example",$$slots:{default:[De]},$$scope:{ctx:k}}}),K=new Ce({props:{title:"SwinForMaskedImageModeling",local:"transformers.SwinForMaskedImageModeling",headingTag:"h2"}}),ee=new we({props:{name:"class transformers.SwinForMaskedImageModeling",anchor:"transformers.SwinForMaskedImageModeling",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SwinForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/swin/modeling_swin.py#L1043"}}),I=new Ne({props:{$$slots:{default:[Oe]},$$scope:{ctx:k}}}),Q=new we({props:{name:"forward",anchor:"transformers.SwinForMaskedImageModeling.forward",parameters:[{name:"pixel_values",val:": Optional = None"},{name:"bool_masked_pos",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.SwinForMaskedImageModeling.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoImageProcessor">AutoImageProcessor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor.__call__">ViTImageProcessor.<strong>call</strong>()</a>
for details.`,name:"pixel_values"},{anchor:"transformers.SwinForMaskedImageModeling.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.SwinForMaskedImageModeling.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SwinForMaskedImageModeling.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SwinForMaskedImageModeling.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SwinForMaskedImageModeling.forward.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/swin/modeling_swin.py#L1072",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.models.swin.modeling_swin.SwinMaskedImageModelingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/swin#transformers.SwinConfig"
>SwinConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>bool_masked_pos</code> is provided) — Masked image modeling (MLM) loss.</p>
</li>
<li>
<p><strong>reconstruction</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) — Reconstructed pixel values.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each stage) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each stage) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>reshaped_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each stage) of
shape <code>(batch_size, hidden_size, height, width)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs reshaped to
include the spatial dimensions.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.models.swin.modeling_swin.SwinMaskedImageModelingOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),oe=new Ne({props:{$$slots:{default:[Ke]},$$scope:{ctx:k}}}),P=new ze({props:{anchor:"transformers.SwinForMaskedImageModeling.forward.example",$$slots:{default:[et]},$$scope:{ctx:k}}}),B=new Ce({props:{title:"SwinForImageClassification",local:"transformers.SwinForImageClassification",headingTag:"h2"}}),X=new we({props:{name:"class transformers.SwinForImageClassification",anchor:"transformers.SwinForImageClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.SwinForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/swin/modeling_swin.py#L1159"}}),N=new we({props:{name:"forward",anchor:"transformers.SwinForImageClassification.forward",parameters:[{name:"pixel_values",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.SwinForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoImageProcessor">AutoImageProcessor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor.__call__">ViTImageProcessor.<strong>call</strong>()</a>
for details.`,name:"pixel_values"},{anchor:"transformers.SwinForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.SwinForImageClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.SwinForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.SwinForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.SwinForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/swin/modeling_swin.py#L1181",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.models.swin.modeling_swin.SwinImageClassifierOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/swin#transformers.SwinConfig"
>SwinConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) — Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each stage) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each stage) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>reshaped_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each stage) of
shape <code>(batch_size, hidden_size, height, width)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs reshaped to
include the spatial dimensions.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.models.swin.modeling_swin.SwinImageClassifierOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),v=new Ne({props:{$$slots:{default:[tt]},$$scope:{ctx:k}}}),H=new ze({props:{anchor:"transformers.SwinForImageClassification.forward.example",$$slots:{default:[nt]},$$scope:{ctx:k}}}),{c(){w(e.$$.fragment),m=i(),n=u("div"),w(s.$$.fragment),g=i(),o=u("p"),o.innerHTML=j,be=i(),C=u("div"),w(D.$$.fragment),Me=i(),L=u("p"),L.innerHTML=Je,ye=i(),w(W.$$.fragment),xe=i(),w(G.$$.fragment),O=i(),w(K.$$.fragment),he=i(),S=u("div"),w(ee.$$.fragment),Te=i(),Y=u("p"),Y.innerHTML=Ze,$e=i(),w(I.$$.fragment),ie=i(),te=u("p"),te.innerHTML=ve,je=i(),Z=u("div"),w(Q.$$.fragment),de=i(),ne=u("p"),ne.innerHTML=Fe,E=i(),w(oe.$$.fragment),U=i(),w(P.$$.fragment),_e=i(),w(B.$$.fragment),Ie=i(),R=u("div"),w(X.$$.fragment),Ue=i(),ce=u("p"),ce.textContent=z,ue=i(),me=u("p"),me.innerHTML=re,ke=i(),x=u("div"),w(N.$$.fragment),Se=i(),V=u("p"),V.innerHTML=We,d=i(),w(v.$$.fragment),se=i(),w(H.$$.fragment),this.h()},l(r){b(e.$$.fragment,r),m=l(r),n=f(r,"DIV",{class:!0});var _=pe(n);b(s.$$.fragment,_),g=l(_),o=f(_,"P",{"data-svelte-h":!0}),F(o)!=="svelte-1s5nfel"&&(o.innerHTML=j),be=l(_),C=f(_,"DIV",{class:!0});var q=pe(C);b(D.$$.fragment,q),Me=l(q),L=f(q,"P",{"data-svelte-h":!0}),F(L)!=="svelte-1bw2bgg"&&(L.innerHTML=Je),ye=l(q),b(W.$$.fragment,q),xe=l(q),b(G.$$.fragment,q),q.forEach(a),_.forEach(a),O=l(r),b(K.$$.fragment,r),he=l(r),S=f(r,"DIV",{class:!0});var A=pe(S);b(ee.$$.fragment,A),Te=l(A),Y=f(A,"P",{"data-svelte-h":!0}),F(Y)!=="svelte-12jqo2k"&&(Y.innerHTML=Ze),$e=l(A),b(I.$$.fragment,A),ie=l(A),te=f(A,"P",{"data-svelte-h":!0}),F(te)!=="svelte-68lg8f"&&(te.innerHTML=ve),je=l(A),Z=f(A,"DIV",{class:!0});var le=pe(Z);b(Q.$$.fragment,le),de=l(le),ne=f(le,"P",{"data-svelte-h":!0}),F(ne)!=="svelte-ezmbs2"&&(ne.innerHTML=Fe),E=l(le),b(oe.$$.fragment,le),U=l(le),b(P.$$.fragment,le),le.forEach(a),A.forEach(a),_e=l(r),b(B.$$.fragment,r),Ie=l(r),R=f(r,"DIV",{class:!0});var t=pe(R);b(X.$$.fragment,t),Ue=l(t),ce=f(t,"P",{"data-svelte-h":!0}),F(ce)!=="svelte-k64ai4"&&(ce.textContent=z),ue=l(t),me=f(t,"P",{"data-svelte-h":!0}),F(me)!=="svelte-68lg8f"&&(me.innerHTML=re),ke=l(t),x=f(t,"DIV",{class:!0});var p=pe(x);b(N.$$.fragment,p),Se=l(p),V=f(p,"P",{"data-svelte-h":!0}),F(V)!=="svelte-1a1l9va"&&(V.innerHTML=We),d=l(p),b(v.$$.fragment,p),se=l(p),b(H.$$.fragment,p),p.forEach(a),t.forEach(a),this.h()},h(){ae(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ae(n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ae(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ae(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ae(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ae(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(r,_){M(e,r,_),c(r,m,_),c(r,n,_),M(s,n,null),h(n,g),h(n,o),h(n,be),h(n,C),M(D,C,null),h(C,Me),h(C,L),h(C,ye),M(W,C,null),h(C,xe),M(G,C,null),c(r,O,_),M(K,r,_),c(r,he,_),c(r,S,_),M(ee,S,null),h(S,Te),h(S,Y),h(S,$e),M(I,S,null),h(S,ie),h(S,te),h(S,je),h(S,Z),M(Q,Z,null),h(Z,de),h(Z,ne),h(Z,E),M(oe,Z,null),h(Z,U),M(P,Z,null),c(r,_e,_),M(B,r,_),c(r,Ie,_),c(r,R,_),M(X,R,null),h(R,Ue),h(R,ce),h(R,ue),h(R,me),h(R,ke),h(R,x),M(N,x,null),h(x,Se),h(x,V),h(x,d),M(v,x,null),h(x,se),M(H,x,null),J=!0},p(r,_){const q={};_&2&&(q.$$scope={dirty:_,ctx:r}),W.$set(q);const A={};_&2&&(A.$$scope={dirty:_,ctx:r}),G.$set(A);const le={};_&2&&(le.$$scope={dirty:_,ctx:r}),I.$set(le);const t={};_&2&&(t.$$scope={dirty:_,ctx:r}),oe.$set(t);const p={};_&2&&(p.$$scope={dirty:_,ctx:r}),P.$set(p);const fe={};_&2&&(fe.$$scope={dirty:_,ctx:r}),v.$set(fe);const Be={};_&2&&(Be.$$scope={dirty:_,ctx:r}),H.$set(Be)},i(r){J||(y(e.$$.fragment,r),y(s.$$.fragment,r),y(D.$$.fragment,r),y(W.$$.fragment,r),y(G.$$.fragment,r),y(K.$$.fragment,r),y(ee.$$.fragment,r),y(I.$$.fragment,r),y(Q.$$.fragment,r),y(oe.$$.fragment,r),y(P.$$.fragment,r),y(B.$$.fragment,r),y(X.$$.fragment,r),y(N.$$.fragment,r),y(v.$$.fragment,r),y(H.$$.fragment,r),J=!0)},o(r){T(e.$$.fragment,r),T(s.$$.fragment,r),T(D.$$.fragment,r),T(W.$$.fragment,r),T(G.$$.fragment,r),T(K.$$.fragment,r),T(ee.$$.fragment,r),T(I.$$.fragment,r),T(Q.$$.fragment,r),T(oe.$$.fragment,r),T(P.$$.fragment,r),T(B.$$.fragment,r),T(X.$$.fragment,r),T(N.$$.fragment,r),T(v.$$.fragment,r),T(H.$$.fragment,r),J=!1},d(r){r&&(a(m),a(n),a(O),a(he),a(S),a(_e),a(Ie),a(R)),$(e,r),$(s),$(D),$(W),$(G),$(K,r),$(ee),$(I),$(Q),$(oe),$(P),$(B,r),$(X),$(N),$(v),$(H)}}}function st(k){let e,m;return e=new Re({props:{$$slots:{default:[ot]},$$scope:{ctx:k}}}),{c(){w(e.$$.fragment)},l(n){b(e.$$.fragment,n)},m(n,s){M(e,n,s),m=!0},p(n,s){const g={};s&2&&(g.$$scope={dirty:s,ctx:n}),e.$set(g)},i(n){m||(y(e.$$.fragment,n),m=!0)},o(n){T(e.$$.fragment,n),m=!1},d(n){$(e,n)}}}function at(k){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=u("p"),e.innerHTML=m},l(n){e=f(n,"P",{"data-svelte-h":!0}),F(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(n,s){c(n,e,s)},p:ge,d(n){n&&a(e)}}}function rt(k){let e,m="Example:",n,s,g;return s=new Ge({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9JbWFnZVByb2Nlc3NvciUyQyUyMFRGU3dpbk1vZGVsJTBBZnJvbSUyMGRhdGFzZXRzJTIwaW1wb3J0JTIwbG9hZF9kYXRhc2V0JTBBJTBBZGF0YXNldCUyMCUzRCUyMGxvYWRfZGF0YXNldCglMjJodWdnaW5nZmFjZSUyRmNhdHMtaW1hZ2UlMjIpJTBBaW1hZ2UlMjAlM0QlMjBkYXRhc2V0JTVCJTIydGVzdCUyMiU1RCU1QiUyMmltYWdlJTIyJTVEJTVCMCU1RCUwQSUwQWltYWdlX3Byb2Nlc3NvciUyMCUzRCUyMEF1dG9JbWFnZVByb2Nlc3Nvci5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGc3dpbi10aW55LXBhdGNoNC13aW5kb3c3LTIyNCUyMiklMEFtb2RlbCUyMCUzRCUyMFRGU3dpbk1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZzd2luLXRpbnktcGF0Y2g0LXdpbmRvdzctMjI0JTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMGltYWdlX3Byb2Nlc3NvcihpbWFnZSUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIydGYlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQWxhc3RfaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGUlMEFsaXN0KGxhc3RfaGlkZGVuX3N0YXRlcy5zaGFwZSk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoImageProcessor, TFSwinModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>image_processor = AutoImageProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFSwinModel.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = image_processor(image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">49</span>, <span class="hljs-number">768</span>]`,wrap:!1}}),{c(){e=u("p"),e.textContent=m,n=i(),w(s.$$.fragment)},l(o){e=f(o,"P",{"data-svelte-h":!0}),F(e)!=="svelte-11lpom8"&&(e.textContent=m),n=l(o),b(s.$$.fragment,o)},m(o,j){c(o,e,j),c(o,n,j),M(s,o,j),g=!0},p:ge,i(o){g||(y(s.$$.fragment,o),g=!0)},o(o){T(s.$$.fragment,o),g=!1},d(o){o&&(a(e),a(n)),$(s,o)}}}function it(k){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=u("p"),e.innerHTML=m},l(n){e=f(n,"P",{"data-svelte-h":!0}),F(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(n,s){c(n,e,s)},p:ge,d(n){n&&a(e)}}}function lt(k){let e,m="Examples:",n,s,g;return s=new Ge({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9JbWFnZVByb2Nlc3NvciUyQyUyMFRGU3dpbkZvck1hc2tlZEltYWdlTW9kZWxpbmclMEFpbXBvcnQlMjB0ZW5zb3JmbG93JTIwYXMlMjB0ZiUwQWZyb20lMjBQSUwlMjBpbXBvcnQlMjBJbWFnZSUwQWltcG9ydCUyMHJlcXVlc3RzJTBBJTBBdXJsJTIwJTNEJTIwJTIyaHR0cCUzQSUyRiUyRmltYWdlcy5jb2NvZGF0YXNldC5vcmclMkZ2YWwyMDE3JTJGMDAwMDAwMDM5NzY5LmpwZyUyMiUwQWltYWdlJTIwJTNEJTIwSW1hZ2Uub3BlbihyZXF1ZXN0cy5nZXQodXJsJTJDJTIwc3RyZWFtJTNEVHJ1ZSkucmF3KSUwQSUwQWltYWdlX3Byb2Nlc3NvciUyMCUzRCUyMEF1dG9JbWFnZVByb2Nlc3Nvci5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGc3dpbi10aW55LXBhdGNoNC13aW5kb3c3LTIyNCUyMiklMEFtb2RlbCUyMCUzRCUyMFRGU3dpbkZvck1hc2tlZEltYWdlTW9kZWxpbmcuZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRnN3aW4tdGlueS1wYXRjaDQtd2luZG93Ny0yMjQlMjIpJTBBJTBBbnVtX3BhdGNoZXMlMjAlM0QlMjAobW9kZWwuY29uZmlnLmltYWdlX3NpemUlMjAlMkYlMkYlMjBtb2RlbC5jb25maWcucGF0Y2hfc2l6ZSklMjAqKiUyMDIlMEFwaXhlbF92YWx1ZXMlMjAlM0QlMjBpbWFnZV9wcm9jZXNzb3IoaW1hZ2VzJTNEaW1hZ2UlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyKS5waXhlbF92YWx1ZXMlMEElMjMlMjBjcmVhdGUlMjByYW5kb20lMjBib29sZWFuJTIwbWFzayUyMG9mJTIwc2hhcGUlMjAoYmF0Y2hfc2l6ZSUyQyUyMG51bV9wYXRjaGVzKSUwQWJvb2xfbWFza2VkX3BvcyUyMCUzRCUyMHRmLnJhbmRvbS51bmlmb3JtKCgxJTJDJTIwbnVtX3BhdGNoZXMpKSUyMCUzRSUzRCUyMDAuNSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbChwaXhlbF92YWx1ZXMlMkMlMjBib29sX21hc2tlZF9wb3MlM0Rib29sX21hc2tlZF9wb3MpJTBBbG9zcyUyQyUyMHJlY29uc3RydWN0ZWRfcGl4ZWxfdmFsdWVzJTIwJTNEJTIwb3V0cHV0cy5sb3NzJTJDJTIwb3V0cHV0cy5yZWNvbnN0cnVjdGlvbiUwQWxpc3QocmVjb25zdHJ1Y3RlZF9waXhlbF92YWx1ZXMuc2hhcGUp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoImageProcessor, TFSwinForMaskedImageModeling
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>image_processor = AutoImageProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFSwinForMaskedImageModeling.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_patches = (model.config.image_size // model.config.patch_size) ** <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pixel_values = image_processor(images=image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).pixel_values
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># create random boolean mask of shape (batch_size, num_patches)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>bool_masked_pos = tf.random.uniform((<span class="hljs-number">1</span>, num_patches)) &gt;= <span class="hljs-number">0.5</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(pixel_values, bool_masked_pos=bool_masked_pos)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss, reconstructed_pixel_values = outputs.loss, outputs.reconstruction
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(reconstructed_pixel_values.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">3</span>, <span class="hljs-number">224</span>, <span class="hljs-number">224</span>]`,wrap:!1}}),{c(){e=u("p"),e.textContent=m,n=i(),w(s.$$.fragment)},l(o){e=f(o,"P",{"data-svelte-h":!0}),F(e)!=="svelte-kvfsh7"&&(e.textContent=m),n=l(o),b(s.$$.fragment,o)},m(o,j){c(o,e,j),c(o,n,j),M(s,o,j),g=!0},p:ge,i(o){g||(y(s.$$.fragment,o),g=!0)},o(o){T(s.$$.fragment,o),g=!1},d(o){o&&(a(e),a(n)),$(s,o)}}}function dt(k){let e,m=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=u("p"),e.innerHTML=m},l(n){e=f(n,"P",{"data-svelte-h":!0}),F(e)!=="svelte-fincs2"&&(e.innerHTML=m)},m(n,s){c(n,e,s)},p:ge,d(n){n&&a(e)}}}function ct(k){let e,m="Example:",n,s,g;return s=new Ge({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9JbWFnZVByb2Nlc3NvciUyQyUyMFRGU3dpbkZvckltYWdlQ2xhc3NpZmljYXRpb24lMEFpbXBvcnQlMjB0ZW5zb3JmbG93JTIwYXMlMjB0ZiUwQWZyb20lMjBkYXRhc2V0cyUyMGltcG9ydCUyMGxvYWRfZGF0YXNldCUwQSUwQWRhdGFzZXQlMjAlM0QlMjBsb2FkX2RhdGFzZXQoJTIyaHVnZ2luZ2ZhY2UlMkZjYXRzLWltYWdlJTIyKSUwQWltYWdlJTIwJTNEJTIwZGF0YXNldCU1QiUyMnRlc3QlMjIlNUQlNUIlMjJpbWFnZSUyMiU1RCU1QjAlNUQlMEElMEFpbWFnZV9wcm9jZXNzb3IlMjAlM0QlMjBBdXRvSW1hZ2VQcm9jZXNzb3IuZnJvbV9wcmV0cmFpbmVkKCUyMm1pY3Jvc29mdCUyRnN3aW4tdGlueS1wYXRjaDQtd2luZG93Ny0yMjQlMjIpJTBBbW9kZWwlMjAlM0QlMjBURlN3aW5Gb3JJbWFnZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZzd2luLXRpbnktcGF0Y2g0LXdpbmRvdzctMjI0JTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMGltYWdlX3Byb2Nlc3NvcihpbWFnZSUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIydGYlMjIpJTBBbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQSUyMyUyMG1vZGVsJTIwcHJlZGljdHMlMjBvbmUlMjBvZiUyMHRoZSUyMDEwMDAlMjBJbWFnZU5ldCUyMGNsYXNzZXMlMEFwcmVkaWN0ZWRfbGFiZWwlMjAlM0QlMjBpbnQodGYubWF0aC5hcmdtYXgobG9naXRzJTJDJTIwYXhpcyUzRC0xKSklMEFwcmludChtb2RlbC5jb25maWcuaWQybGFiZWwlNUJwcmVkaWN0ZWRfbGFiZWwlNUQp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoImageProcessor, TFSwinForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>image_processor = AutoImageProcessor.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFSwinForImageClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/swin-tiny-patch4-window7-224&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = image_processor(image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
tabby, tabby cat`,wrap:!1}}),{c(){e=u("p"),e.textContent=m,n=i(),w(s.$$.fragment)},l(o){e=f(o,"P",{"data-svelte-h":!0}),F(e)!=="svelte-11lpom8"&&(e.textContent=m),n=l(o),b(s.$$.fragment,o)},m(o,j){c(o,e,j),c(o,n,j),M(s,o,j),g=!0},p:ge,i(o){g||(y(s.$$.fragment,o),g=!0)},o(o){T(s.$$.fragment,o),g=!1},d(o){o&&(a(e),a(n)),$(s,o)}}}function mt(k){let e,m,n,s,g,o,j=`The bare Swin Model transformer outputting raw hidden-states without any specific head on top.
This model is a Tensorflow
<a href="https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer" rel="nofollow">keras.layers.Layer</a> sub-class. Use it as a
regular Tensorflow Module and refer to the Tensorflow documentation for all matter related to general usage and
behavior.`,be,C,D,Me,L,Je='The <a href="/docs/transformers/main/en/model_doc/swin#transformers.TFSwinModel">TFSwinModel</a> forward method, overrides the <code>__call__</code> special method.',ye,W,xe,G,O,K,he,S,ee,Te,Y,Ze=`Swin Model with a decoder on top for masked image modeling, as proposed in <a href="https://arxiv.org/abs/2111.09886" rel="nofollow">SimMIM</a>.
This model is a Tensorflow
<a href="https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer" rel="nofollow">keras.layers.Layer</a> sub-class. Use it as a
regular Tensorflow Module and refer to the Tensorflow documentation for all matter related to general usage and
behavior.`,$e,I,ie,te,ve,je='The <a href="/docs/transformers/main/en/model_doc/swin#transformers.TFSwinForMaskedImageModeling">TFSwinForMaskedImageModeling</a> forward method, overrides the <code>__call__</code> special method.',Z,Q,de,ne,Fe,E,oe,U,P,_e,B,Ie=`Swin Model transformer with an image classification head on top (a linear layer on top of the final hidden state of
the [CLS] token) e.g. for ImageNet.`,R,X,Ue=`This model is a Tensorflow
<a href="https://www.tensorflow.org/api_docs/python/tf/keras/layers/Layer" rel="nofollow">keras.layers.Layer</a> sub-class. Use it as a
regular Tensorflow Module and refer to the Tensorflow documentation for all matter related to general usage and
behavior.`,ce,z,ue,me,re,ke='The <a href="/docs/transformers/main/en/model_doc/swin#transformers.TFSwinForImageClassification">TFSwinForImageClassification</a> forward method, overrides the <code>__call__</code> special method.',x,N,Se,V,We;return e=new Ce({props:{title:"TFSwinModel",local:"transformers.TFSwinModel",headingTag:"h2"}}),s=new we({props:{name:"class transformers.TFSwinModel",anchor:"transformers.TFSwinModel",parameters:[{name:"config",val:": SwinConfig"},{name:"add_pooling_layer",val:": bool = True"},{name:"use_mask_token",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFSwinModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/swin/modeling_tf_swin.py#L1306"}}),D=new we({props:{name:"call",anchor:"transformers.TFSwinModel.call",parameters:[{name:"pixel_values",val:": tf.Tensor | None = None"},{name:"bool_masked_pos",val:": tf.Tensor | None = None"},{name:"head_mask",val:": tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFSwinModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoImageProcessor">AutoImageProcessor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor.__call__">ViTImageProcessor.<strong>call</strong>()</a>
for details.`,name:"pixel_values"},{anchor:"transformers.TFSwinModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFSwinModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFSwinModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFSwinModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFSwinModel.call.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_patches)</code>, <em>optional</em>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/swin/modeling_tf_swin.py#L1318",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.models.swin.modeling_tf_swin.TFSwinModelOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/swin#transformers.SwinConfig"
>SwinConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>, <em>optional</em>, returned when <code>add_pooling_layer=True</code> is passed) — Average pooling of the last layer hidden-state.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each stage) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each stage) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>reshaped_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each stage) of shape
<code>(batch_size, hidden_size, height, width)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs reshaped to
include the spatial dimensions.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.models.swin.modeling_tf_swin.TFSwinModelOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),W=new Ne({props:{$$slots:{default:[at]},$$scope:{ctx:k}}}),G=new ze({props:{anchor:"transformers.TFSwinModel.call.example",$$slots:{default:[rt]},$$scope:{ctx:k}}}),K=new Ce({props:{title:"TFSwinForMaskedImageModeling",local:"transformers.TFSwinForMaskedImageModeling",headingTag:"h2"}}),ee=new we({props:{name:"class transformers.TFSwinForMaskedImageModeling",anchor:"transformers.TFSwinForMaskedImageModeling",parameters:[{name:"config",val:": SwinConfig"}],parametersDescription:[{anchor:"transformers.TFSwinForMaskedImageModeling.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/swin/modeling_tf_swin.py#L1428"}}),ie=new we({props:{name:"call",anchor:"transformers.TFSwinForMaskedImageModeling.call",parameters:[{name:"pixel_values",val:": tf.Tensor | None = None"},{name:"bool_masked_pos",val:": tf.Tensor | None = None"},{name:"head_mask",val:": tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFSwinForMaskedImageModeling.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoImageProcessor">AutoImageProcessor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor.__call__">ViTImageProcessor.<strong>call</strong>()</a>
for details.`,name:"pixel_values"},{anchor:"transformers.TFSwinForMaskedImageModeling.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFSwinForMaskedImageModeling.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFSwinForMaskedImageModeling.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFSwinForMaskedImageModeling.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFSwinForMaskedImageModeling.call.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_patches)</code>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/swin/modeling_tf_swin.py#L1441",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.models.swin.modeling_tf_swin.TFSwinMaskedImageModelingOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/swin#transformers.SwinConfig"
>SwinConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>bool_masked_pos</code> is provided) — Masked image modeling (MLM) loss.</p>
</li>
<li>
<p><strong>reconstruction</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) — Reconstructed pixel values.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each stage) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each stage) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>reshaped_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each stage) of shape
<code>(batch_size, hidden_size, height, width)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs reshaped to
include the spatial dimensions.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.models.swin.modeling_tf_swin.TFSwinMaskedImageModelingOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),Q=new Ne({props:{$$slots:{default:[it]},$$scope:{ctx:k}}}),ne=new ze({props:{anchor:"transformers.TFSwinForMaskedImageModeling.call.example",$$slots:{default:[lt]},$$scope:{ctx:k}}}),E=new Ce({props:{title:"TFSwinForImageClassification",local:"transformers.TFSwinForImageClassification",headingTag:"h2"}}),P=new we({props:{name:"class transformers.TFSwinForImageClassification",anchor:"transformers.TFSwinForImageClassification",parameters:[{name:"config",val:": SwinConfig"}],parametersDescription:[{anchor:"transformers.TFSwinForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/swin#transformers.SwinConfig">SwinConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/swin/modeling_tf_swin.py#L1549"}}),ue=new we({props:{name:"call",anchor:"transformers.TFSwinForImageClassification.call",parameters:[{name:"pixel_values",val:": tf.Tensor | None = None"},{name:"head_mask",val:": tf.Tensor | None = None"},{name:"labels",val:": tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFSwinForImageClassification.call.pixel_values",description:`<strong>pixel_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoImageProcessor">AutoImageProcessor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor.__call__">ViTImageProcessor.<strong>call</strong>()</a>
for details.`,name:"pixel_values"},{anchor:"transformers.TFSwinForImageClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFSwinForImageClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFSwinForImageClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFSwinForImageClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFSwinForImageClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/swin/modeling_tf_swin.py#L1570",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.models.swin.modeling_tf_swin.TFSwinImageClassifierOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/swin#transformers.SwinConfig"
>SwinConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) — Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each stage) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each stage) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
<li>
<p><strong>reshaped_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each stage) of shape
<code>(batch_size, hidden_size, height, width)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs reshaped to
include the spatial dimensions.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.models.swin.modeling_tf_swin.TFSwinImageClassifierOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),N=new Ne({props:{$$slots:{default:[dt]},$$scope:{ctx:k}}}),V=new ze({props:{anchor:"transformers.TFSwinForImageClassification.call.example",$$slots:{default:[ct]},$$scope:{ctx:k}}}),{c(){w(e.$$.fragment),m=i(),n=u("div"),w(s.$$.fragment),g=i(),o=u("p"),o.innerHTML=j,be=i(),C=u("div"),w(D.$$.fragment),Me=i(),L=u("p"),L.innerHTML=Je,ye=i(),w(W.$$.fragment),xe=i(),w(G.$$.fragment),O=i(),w(K.$$.fragment),he=i(),S=u("div"),w(ee.$$.fragment),Te=i(),Y=u("p"),Y.innerHTML=Ze,$e=i(),I=u("div"),w(ie.$$.fragment),te=i(),ve=u("p"),ve.innerHTML=je,Z=i(),w(Q.$$.fragment),de=i(),w(ne.$$.fragment),Fe=i(),w(E.$$.fragment),oe=i(),U=u("div"),w(P.$$.fragment),_e=i(),B=u("p"),B.textContent=Ie,R=i(),X=u("p"),X.innerHTML=Ue,ce=i(),z=u("div"),w(ue.$$.fragment),me=i(),re=u("p"),re.innerHTML=ke,x=i(),w(N.$$.fragment),Se=i(),w(V.$$.fragment),this.h()},l(d){b(e.$$.fragment,d),m=l(d),n=f(d,"DIV",{class:!0});var v=pe(n);b(s.$$.fragment,v),g=l(v),o=f(v,"P",{"data-svelte-h":!0}),F(o)!=="svelte-3wgih9"&&(o.innerHTML=j),be=l(v),C=f(v,"DIV",{class:!0});var se=pe(C);b(D.$$.fragment,se),Me=l(se),L=f(se,"P",{"data-svelte-h":!0}),F(L)!=="svelte-1e0uqno"&&(L.innerHTML=Je),ye=l(se),b(W.$$.fragment,se),xe=l(se),b(G.$$.fragment,se),se.forEach(a),v.forEach(a),O=l(d),b(K.$$.fragment,d),he=l(d),S=f(d,"DIV",{class:!0});var H=pe(S);b(ee.$$.fragment,H),Te=l(H),Y=f(H,"P",{"data-svelte-h":!0}),F(Y)!=="svelte-19lcs01"&&(Y.innerHTML=Ze),$e=l(H),I=f(H,"DIV",{class:!0});var J=pe(I);b(ie.$$.fragment,J),te=l(J),ve=f(J,"P",{"data-svelte-h":!0}),F(ve)!=="svelte-vwb0oi"&&(ve.innerHTML=je),Z=l(J),b(Q.$$.fragment,J),de=l(J),b(ne.$$.fragment,J),J.forEach(a),H.forEach(a),Fe=l(d),b(E.$$.fragment,d),oe=l(d),U=f(d,"DIV",{class:!0});var r=pe(U);b(P.$$.fragment,r),_e=l(r),B=f(r,"P",{"data-svelte-h":!0}),F(B)!=="svelte-k64ai4"&&(B.textContent=Ie),R=l(r),X=f(r,"P",{"data-svelte-h":!0}),F(X)!=="svelte-1g64psv"&&(X.innerHTML=Ue),ce=l(r),z=f(r,"DIV",{class:!0});var _=pe(z);b(ue.$$.fragment,_),me=l(_),re=f(_,"P",{"data-svelte-h":!0}),F(re)!=="svelte-1j3krs6"&&(re.innerHTML=ke),x=l(_),b(N.$$.fragment,_),Se=l(_),b(V.$$.fragment,_),_.forEach(a),r.forEach(a),this.h()},h(){ae(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ae(n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ae(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ae(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ae(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),ae(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(d,v){M(e,d,v),c(d,m,v),c(d,n,v),M(s,n,null),h(n,g),h(n,o),h(n,be),h(n,C),M(D,C,null),h(C,Me),h(C,L),h(C,ye),M(W,C,null),h(C,xe),M(G,C,null),c(d,O,v),M(K,d,v),c(d,he,v),c(d,S,v),M(ee,S,null),h(S,Te),h(S,Y),h(S,$e),h(S,I),M(ie,I,null),h(I,te),h(I,ve),h(I,Z),M(Q,I,null),h(I,de),M(ne,I,null),c(d,Fe,v),M(E,d,v),c(d,oe,v),c(d,U,v),M(P,U,null),h(U,_e),h(U,B),h(U,R),h(U,X),h(U,ce),h(U,z),M(ue,z,null),h(z,me),h(z,re),h(z,x),M(N,z,null),h(z,Se),M(V,z,null),We=!0},p(d,v){const se={};v&2&&(se.$$scope={dirty:v,ctx:d}),W.$set(se);const H={};v&2&&(H.$$scope={dirty:v,ctx:d}),G.$set(H);const J={};v&2&&(J.$$scope={dirty:v,ctx:d}),Q.$set(J);const r={};v&2&&(r.$$scope={dirty:v,ctx:d}),ne.$set(r);const _={};v&2&&(_.$$scope={dirty:v,ctx:d}),N.$set(_);const q={};v&2&&(q.$$scope={dirty:v,ctx:d}),V.$set(q)},i(d){We||(y(e.$$.fragment,d),y(s.$$.fragment,d),y(D.$$.fragment,d),y(W.$$.fragment,d),y(G.$$.fragment,d),y(K.$$.fragment,d),y(ee.$$.fragment,d),y(ie.$$.fragment,d),y(Q.$$.fragment,d),y(ne.$$.fragment,d),y(E.$$.fragment,d),y(P.$$.fragment,d),y(ue.$$.fragment,d),y(N.$$.fragment,d),y(V.$$.fragment,d),We=!0)},o(d){T(e.$$.fragment,d),T(s.$$.fragment,d),T(D.$$.fragment,d),T(W.$$.fragment,d),T(G.$$.fragment,d),T(K.$$.fragment,d),T(ee.$$.fragment,d),T(ie.$$.fragment,d),T(Q.$$.fragment,d),T(ne.$$.fragment,d),T(E.$$.fragment,d),T(P.$$.fragment,d),T(ue.$$.fragment,d),T(N.$$.fragment,d),T(V.$$.fragment,d),We=!1},d(d){d&&(a(m),a(n),a(O),a(he),a(S),a(Fe),a(oe),a(U)),$(e,d),$(s),$(D),$(W),$(G),$(K,d),$(ee),$(ie),$(Q),$(ne),$(E,d),$(P),$(ue),$(N),$(V)}}}function pt(k){let e,m;return e=new Re({props:{$$slots:{default:[mt]},$$scope:{ctx:k}}}),{c(){w(e.$$.fragment)},l(n){b(e.$$.fragment,n)},m(n,s){M(e,n,s),m=!0},p(n,s){const g={};s&2&&(g.$$scope={dirty:s,ctx:n}),e.$set(g)},i(n){m||(y(e.$$.fragment,n),m=!0)},o(n){T(e.$$.fragment,n),m=!1},d(n){$(e,n)}}}function ht(k){let e,m,n,s,g,o,j,be,C,D=`The Swin Transformer was proposed in <a href="https://arxiv.org/abs/2103.14030" rel="nofollow">Swin Transformer: Hierarchical Vision Transformer using Shifted Windows</a>
by Ze Liu, Yutong Lin, Yue Cao, Han Hu, Yixuan Wei, Zheng Zhang, Stephen Lin, Baining Guo.`,Me,L,Je="The abstract from the paper is the following:",ye,W,xe=`<em>This paper presents a new vision Transformer, called Swin Transformer, that capably serves as a general-purpose backbone
for computer vision. Challenges in adapting Transformer from language to vision arise from differences between the two domains,
such as large variations in the scale of visual entities and the high resolution of pixels in images compared to words in text.
To address these differences, we propose a hierarchical Transformer whose representation is computed with \\bold{S}hifted
\\bold{win}dows. The shifted windowing scheme brings greater efficiency by limiting self-attention computation to non-overlapping
local windows while also allowing for cross-window connection. This hierarchical architecture has the flexibility to model at
various scales and has linear computational complexity with respect to image size. These qualities of Swin Transformer make it
compatible with a broad range of vision tasks, including image classification (87.3 top-1 accuracy on ImageNet-1K) and dense
prediction tasks such as object detection (58.7 box AP and 51.1 mask AP on COCO test-dev) and semantic segmentation
(53.5 mIoU on ADE20K val). Its performance surpasses the previous state-of-the-art by a large margin of +2.7 box AP and
+2.6 mask AP on COCO, and +3.2 mIoU on ADE20K, demonstrating the potential of Transformer-based models as vision backbones.
The hierarchical design and the shifted window approach also prove beneficial for all-MLP architectures.</em>`,G,O,K,he,S,ee='Swin Transformer architecture. Taken from the <a href="https://arxiv.org/abs/2102.03334">original paper</a>.',Te,Y,Ze='This model was contributed by <a href="https://huggingface.co/novice03" rel="nofollow">novice03</a>. The Tensorflow version of this model was contributed by <a href="https://huggingface.co/amyeroberts" rel="nofollow">amyeroberts</a>. The original code can be found <a href="https://github.com/microsoft/Swin-Transformer" rel="nofollow">here</a>.',$e,I,ie,te,ve="<li>Swin pads the inputs supporting any input height and width (if divisible by <code>32</code>).</li> <li>Swin can be used as a <em>backbone</em>. When <code>output_hidden_states = True</code>, it will output both <code>hidden_states</code> and <code>reshaped_hidden_states</code>. The <code>reshaped_hidden_states</code> have a shape of <code>(batch, num_channels, height, width)</code> rather than <code>(batch_size, sequence_length, num_channels)</code>.</li>",je,Z,Q,de,ne="A list of official Hugging Face and community (indicated by 🌎) resources to help you get started with Swin Transformer.",Fe,E,oe,U,P='<li><a href="/docs/transformers/main/en/model_doc/swin#transformers.SwinForImageClassification">SwinForImageClassification</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/pytorch/image-classification" rel="nofollow">example script</a> and <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/image_classification.ipynb" rel="nofollow">notebook</a>.</li> <li>See also: <a href="../tasks/image_classification">Image classification task guide</a></li>',_e,B,Ie="Besides that:",R,X,Ue='<li><a href="/docs/transformers/main/en/model_doc/swin#transformers.SwinForMaskedImageModeling">SwinForMaskedImageModeling</a> is supported by this <a href="https://github.com/huggingface/transformers/tree/main/examples/pytorch/image-pretraining" rel="nofollow">example script</a>.</li>',ce,z,ue="If you’re interested in submitting a resource to be included here, please feel free to open a Pull Request and we’ll review it! The resource should ideally demonstrate something new instead of duplicating an existing resource.",me,re,ke,x,N,Se,V,We=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/swin#transformers.SwinModel">SwinModel</a>. It is used to instantiate a Swin
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the Swin
<a href="https://huggingface.co/microsoft/swin-tiny-patch4-window7-224" rel="nofollow">microsoft/swin-tiny-patch4-window7-224</a>
architecture.`,d,v,se=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,H,J,r,_,q,A,le;return g=new Ce({props:{title:"Swin Transformer",local:"swin-transformer",headingTag:"h1"}}),j=new Ce({props:{title:"Overview",local:"overview",headingTag:"h2"}}),I=new Ce({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),Z=new Ce({props:{title:"Resources",local:"resources",headingTag:"h2"}}),E=new Pe({props:{pipeline:"image-classification"}}),re=new Ce({props:{title:"SwinConfig",local:"transformers.SwinConfig",headingTag:"h2"}}),N=new we({props:{name:"class transformers.SwinConfig",anchor:"transformers.SwinConfig",parameters:[{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 4"},{name:"num_channels",val:" = 3"},{name:"embed_dim",val:" = 96"},{name:"depths",val:" = [2, 2, 6, 2]"},{name:"num_heads",val:" = [3, 6, 12, 24]"},{name:"window_size",val:" = 7"},{name:"mlp_ratio",val:" = 4.0"},{name:"qkv_bias",val:" = True"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"drop_path_rate",val:" = 0.1"},{name:"hidden_act",val:" = 'gelu'"},{name:"use_absolute_embeddings",val:" = False"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"encoder_stride",val:" = 32"},{name:"out_features",val:" = None"},{name:"out_indices",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.SwinConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.SwinConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.SwinConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.SwinConfig.embed_dim",description:`<strong>embed_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 96) &#x2014;
Dimensionality of patch embedding.`,name:"embed_dim"},{anchor:"transformers.SwinConfig.depths",description:`<strong>depths</strong> (<code>list(int)</code>, <em>optional</em>, defaults to <code>[2, 2, 6, 2]</code>) &#x2014;
Depth of each layer in the Transformer encoder.`,name:"depths"},{anchor:"transformers.SwinConfig.num_heads",description:`<strong>num_heads</strong> (<code>list(int)</code>, <em>optional</em>, defaults to <code>[3, 6, 12, 24]</code>) &#x2014;
Number of attention heads in each layer of the Transformer encoder.`,name:"num_heads"},{anchor:"transformers.SwinConfig.window_size",description:`<strong>window_size</strong> (<code>int</code>, <em>optional</em>, defaults to 7) &#x2014;
Size of windows.`,name:"window_size"},{anchor:"transformers.SwinConfig.mlp_ratio",description:`<strong>mlp_ratio</strong> (<code>float</code>, <em>optional</em>, defaults to 4.0) &#x2014;
Ratio of MLP hidden dimensionality to embedding dimensionality.`,name:"mlp_ratio"},{anchor:"transformers.SwinConfig.qkv_bias",description:`<strong>qkv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not a learnable bias should be added to the queries, keys and values.`,name:"qkv_bias"},{anchor:"transformers.SwinConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for all fully connected layers in the embeddings and encoder.`,name:"hidden_dropout_prob"},{anchor:"transformers.SwinConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.SwinConfig.drop_path_rate",description:`<strong>drop_path_rate</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Stochastic depth rate.`,name:"drop_path_rate"},{anchor:"transformers.SwinConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder. If string, <code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>,
<code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.SwinConfig.use_absolute_embeddings",description:`<strong>use_absolute_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add absolute position embeddings to the patch embeddings.`,name:"use_absolute_embeddings"},{anchor:"transformers.SwinConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.SwinConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-05) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.SwinConfig.encoder_stride",description:`<strong>encoder_stride</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Factor to increase the spatial resolution by in the decoder head for masked image modeling.`,name:"encoder_stride"},{anchor:"transformers.SwinConfig.out_features",description:`<strong>out_features</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
If used as backbone, list of features to output. Can be any of <code>&quot;stem&quot;</code>, <code>&quot;stage1&quot;</code>, <code>&quot;stage2&quot;</code>, etc.
(depending on how many stages the model has). If unset and <code>out_indices</code> is set, will default to the
corresponding stages. If unset and <code>out_indices</code> is unset, will default to the last stage. Must be in the
same order as defined in the <code>stage_names</code> attribute.`,name:"out_features"},{anchor:"transformers.SwinConfig.out_indices",description:`<strong>out_indices</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
If used as backbone, list of indices of features to output. Can be any of 0, 1, 2, etc. (depending on how
many stages the model has). If unset and <code>out_features</code> is set, will default to the corresponding stages.
If unset and <code>out_features</code> is unset, will default to the last stage. Must be in the
same order as defined in the <code>stage_names</code> attribute.`,name:"out_indices"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/swin/configuration_swin.py#L38"}}),J=new ze({props:{anchor:"transformers.SwinConfig.example",$$slots:{default:[qe]},$$scope:{ctx:k}}}),_=new Ee({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[pt],pytorch:[st]},$$scope:{ctx:k}}}),{c(){e=u("meta"),m=i(),n=u("p"),s=i(),w(g.$$.fragment),o=i(),w(j.$$.fragment),be=i(),C=u("p"),C.innerHTML=D,Me=i(),L=u("p"),L.textContent=Je,ye=i(),W=u("p"),W.innerHTML=xe,G=i(),O=u("img"),he=i(),S=u("small"),S.innerHTML=ee,Te=i(),Y=u("p"),Y.innerHTML=Ze,$e=i(),w(I.$$.fragment),ie=i(),te=u("ul"),te.innerHTML=ve,je=i(),w(Z.$$.fragment),Q=i(),de=u("p"),de.textContent=ne,Fe=i(),w(E.$$.fragment),oe=i(),U=u("ul"),U.innerHTML=P,_e=i(),B=u("p"),B.textContent=Ie,R=i(),X=u("ul"),X.innerHTML=Ue,ce=i(),z=u("p"),z.textContent=ue,me=i(),w(re.$$.fragment),ke=i(),x=u("div"),w(N.$$.fragment),Se=i(),V=u("p"),V.innerHTML=We,d=i(),v=u("p"),v.innerHTML=se,H=i(),w(J.$$.fragment),r=i(),w(_.$$.fragment),q=i(),A=u("p"),this.h()},l(t){const p=Qe("svelte-u9bgzb",document.head);e=f(p,"META",{name:!0,content:!0}),p.forEach(a),m=l(t),n=f(t,"P",{}),pe(n).forEach(a),s=l(t),b(g.$$.fragment,t),o=l(t),b(j.$$.fragment,t),be=l(t),C=f(t,"P",{"data-svelte-h":!0}),F(C)!=="svelte-fc0dli"&&(C.innerHTML=D),Me=l(t),L=f(t,"P",{"data-svelte-h":!0}),F(L)!=="svelte-vfdo9a"&&(L.textContent=Je),ye=l(t),W=f(t,"P",{"data-svelte-h":!0}),F(W)!=="svelte-1111d6o"&&(W.innerHTML=xe),G=l(t),O=f(t,"IMG",{src:!0,alt:!0,width:!0}),he=l(t),S=f(t,"SMALL",{"data-svelte-h":!0}),F(S)!=="svelte-56pw3c"&&(S.innerHTML=ee),Te=l(t),Y=f(t,"P",{"data-svelte-h":!0}),F(Y)!=="svelte-72q0kq"&&(Y.innerHTML=Ze),$e=l(t),b(I.$$.fragment,t),ie=l(t),te=f(t,"UL",{"data-svelte-h":!0}),F(te)!=="svelte-lr0rmb"&&(te.innerHTML=ve),je=l(t),b(Z.$$.fragment,t),Q=l(t),de=f(t,"P",{"data-svelte-h":!0}),F(de)!=="svelte-1pydsgt"&&(de.textContent=ne),Fe=l(t),b(E.$$.fragment,t),oe=l(t),U=f(t,"UL",{"data-svelte-h":!0}),F(U)!=="svelte-1nmnnak"&&(U.innerHTML=P),_e=l(t),B=f(t,"P",{"data-svelte-h":!0}),F(B)!=="svelte-1k821ua"&&(B.textContent=Ie),R=l(t),X=f(t,"UL",{"data-svelte-h":!0}),F(X)!=="svelte-k63uja"&&(X.innerHTML=Ue),ce=l(t),z=f(t,"P",{"data-svelte-h":!0}),F(z)!=="svelte-1xesile"&&(z.textContent=ue),me=l(t),b(re.$$.fragment,t),ke=l(t),x=f(t,"DIV",{class:!0});var fe=pe(x);b(N.$$.fragment,fe),Se=l(fe),V=f(fe,"P",{"data-svelte-h":!0}),F(V)!=="svelte-r4izhk"&&(V.innerHTML=We),d=l(fe),v=f(fe,"P",{"data-svelte-h":!0}),F(v)!=="svelte-o55m63"&&(v.innerHTML=se),H=l(fe),b(J.$$.fragment,fe),fe.forEach(a),r=l(t),b(_.$$.fragment,t),q=l(t),A=f(t,"P",{}),pe(A).forEach(a),this.h()},h(){ae(e,"name","hf:doc:metadata"),ae(e,"content",ut),Ve(O.src,K="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/swin_transformer_architecture.png")||ae(O,"src",K),ae(O,"alt","drawing"),ae(O,"width","600"),ae(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,p){h(document.head,e),c(t,m,p),c(t,n,p),c(t,s,p),M(g,t,p),c(t,o,p),M(j,t,p),c(t,be,p),c(t,C,p),c(t,Me,p),c(t,L,p),c(t,ye,p),c(t,W,p),c(t,G,p),c(t,O,p),c(t,he,p),c(t,S,p),c(t,Te,p),c(t,Y,p),c(t,$e,p),M(I,t,p),c(t,ie,p),c(t,te,p),c(t,je,p),M(Z,t,p),c(t,Q,p),c(t,de,p),c(t,Fe,p),M(E,t,p),c(t,oe,p),c(t,U,p),c(t,_e,p),c(t,B,p),c(t,R,p),c(t,X,p),c(t,ce,p),c(t,z,p),c(t,me,p),M(re,t,p),c(t,ke,p),c(t,x,p),M(N,x,null),h(x,Se),h(x,V),h(x,d),h(x,v),h(x,H),M(J,x,null),c(t,r,p),M(_,t,p),c(t,q,p),c(t,A,p),le=!0},p(t,[p]){const fe={};p&2&&(fe.$$scope={dirty:p,ctx:t}),J.$set(fe);const Be={};p&2&&(Be.$$scope={dirty:p,ctx:t}),_.$set(Be)},i(t){le||(y(g.$$.fragment,t),y(j.$$.fragment,t),y(I.$$.fragment,t),y(Z.$$.fragment,t),y(E.$$.fragment,t),y(re.$$.fragment,t),y(N.$$.fragment,t),y(J.$$.fragment,t),y(_.$$.fragment,t),le=!0)},o(t){T(g.$$.fragment,t),T(j.$$.fragment,t),T(I.$$.fragment,t),T(Z.$$.fragment,t),T(E.$$.fragment,t),T(re.$$.fragment,t),T(N.$$.fragment,t),T(J.$$.fragment,t),T(_.$$.fragment,t),le=!1},d(t){t&&(a(m),a(n),a(s),a(o),a(be),a(C),a(Me),a(L),a(ye),a(W),a(G),a(O),a(he),a(S),a(Te),a(Y),a($e),a(ie),a(te),a(je),a(Q),a(de),a(Fe),a(oe),a(U),a(_e),a(B),a(R),a(X),a(ce),a(z),a(me),a(ke),a(x),a(r),a(q),a(A)),a(e),$(g,t),$(j,t),$(I,t),$(Z,t),$(E,t),$(re,t),$(N),$(J),$(_,t)}}}const ut='{"title":"Swin Transformer","local":"swin-transformer","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"SwinConfig","local":"transformers.SwinConfig","sections":[],"depth":2},{"title":"SwinModel","local":"transformers.SwinModel","sections":[],"depth":2},{"title":"SwinForMaskedImageModeling","local":"transformers.SwinForMaskedImageModeling","sections":[],"depth":2},{"title":"SwinForImageClassification","local":"transformers.SwinForImageClassification","sections":[],"depth":2},{"title":"TFSwinModel","local":"transformers.TFSwinModel","sections":[],"depth":2},{"title":"TFSwinForMaskedImageModeling","local":"transformers.TFSwinForMaskedImageModeling","sections":[],"depth":2},{"title":"TFSwinForImageClassification","local":"transformers.TFSwinForImageClassification","sections":[],"depth":2}],"depth":1}';function ft(k){return He(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ft extends Le{constructor(e){super(),Ye(this,e,ft,ht,Xe,{})}}export{Ft as component};
