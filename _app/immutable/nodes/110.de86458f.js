import{s as rt,f as it,o as pt,n as Ne}from"../chunks/scheduler.9bc65507.js";import{S as ct,i as ht,g as i,s as a,r as d,A as mt,h as p,f as n,c as o,j as pe,u as g,x as w,k as W,y as m,a as s,v as u,d as f,t as y,w as b}from"../chunks/index.707bf1b6.js";import{T as dt}from"../chunks/Tip.c2ecdbf4.js";import{D as Ze}from"../chunks/Docstring.17db21ae.js";import{C as ke}from"../chunks/CodeBlock.54a9f38d.js";import{E as lt}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as ne}from"../chunks/Heading.342b1fa6.js";function gt(U){let r,J="Example:",h,c,M;return c=new ke({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMERlcHRoQW55dGhpbmdDb25maWclMkMlMjBEZXB0aEFueXRoaW5nRm9yRGVwdGhFc3RpbWF0aW9uJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyMERlcHRoQW55dGhpbmclMjBzbWFsbCUyMHN0eWxlJTIwY29uZmlndXJhdGlvbiUwQWNvbmZpZ3VyYXRpb24lMjAlM0QlMjBEZXB0aEFueXRoaW5nQ29uZmlnKCklMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwbW9kZWwlMjBmcm9tJTIwdGhlJTIwRGVwdGhBbnl0aGluZyUyMHNtYWxsJTIwc3R5bGUlMjBjb25maWd1cmF0aW9uJTBBbW9kZWwlMjAlM0QlMjBEZXB0aEFueXRoaW5nRm9yRGVwdGhFc3RpbWF0aW9uKGNvbmZpZ3VyYXRpb24pJTBBJTBBJTIzJTIwQWNjZXNzaW5nJTIwdGhlJTIwbW9kZWwlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMG1vZGVsLmNvbmZpZw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DepthAnythingConfig, DepthAnythingForDepthEstimation

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a DepthAnything small style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = DepthAnythingConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the DepthAnything small style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DepthAnythingForDepthEstimation(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){r=i("p"),r.textContent=J,h=a(),d(c.$$.fragment)},l(l){r=p(l,"P",{"data-svelte-h":!0}),w(r)!=="svelte-11lpom8"&&(r.textContent=J),h=o(l),g(c.$$.fragment,l)},m(l,T){s(l,r,T),s(l,h,T),u(c,l,T),M=!0},p:Ne,i(l){M||(f(c.$$.fragment,l),M=!0)},o(l){y(c.$$.fragment,l),M=!1},d(l){l&&(n(r),n(h)),b(c,l)}}}function ut(U){let r,J=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){r=i("p"),r.innerHTML=J},l(h){r=p(h,"P",{"data-svelte-h":!0}),w(r)!=="svelte-fincs2"&&(r.innerHTML=J)},m(h,c){s(h,r,c)},p:Ne,d(h){h&&n(r)}}}function ft(U){let r,J="Examples:",h,c,M;return c=new ke({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9JbWFnZVByb2Nlc3NvciUyQyUyMEF1dG9Nb2RlbEZvckRlcHRoRXN0aW1hdGlvbiUwQWltcG9ydCUyMHRvcmNoJTBBaW1wb3J0JTIwbnVtcHklMjBhcyUyMG5wJTBBZnJvbSUyMFBJTCUyMGltcG9ydCUyMEltYWdlJTBBaW1wb3J0JTIwcmVxdWVzdHMlMEElMEF1cmwlMjAlM0QlMjAlMjJodHRwJTNBJTJGJTJGaW1hZ2VzLmNvY29kYXRhc2V0Lm9yZyUyRnZhbDIwMTclMkYwMDAwMDAwMzk3NjkuanBnJTIyJTBBaW1hZ2UlMjAlM0QlMjBJbWFnZS5vcGVuKHJlcXVlc3RzLmdldCh1cmwlMkMlMjBzdHJlYW0lM0RUcnVlKS5yYXcpJTBBJTBBaW1hZ2VfcHJvY2Vzc29yJTIwJTNEJTIwQXV0b0ltYWdlUHJvY2Vzc29yLmZyb21fcHJldHJhaW5lZCglMjJMaWhlWW91bmclMkZkZXB0aC1hbnl0aGluZy1zbWFsbC1oZiUyMiklMEFtb2RlbCUyMCUzRCUyMEF1dG9Nb2RlbEZvckRlcHRoRXN0aW1hdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyTGloZVlvdW5nJTJGZGVwdGgtYW55dGhpbmctc21hbGwtaGYlMjIpJTBBJTBBJTIzJTIwcHJlcGFyZSUyMGltYWdlJTIwZm9yJTIwdGhlJTIwbW9kZWwlMEFpbnB1dHMlMjAlM0QlMjBpbWFnZV9wcm9jZXNzb3IoaW1hZ2VzJTNEaW1hZ2UlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTIwJTIwJTIwJTIwcHJlZGljdGVkX2RlcHRoJTIwJTNEJTIwb3V0cHV0cy5wcmVkaWN0ZWRfZGVwdGglMEElMEElMjMlMjBpbnRlcnBvbGF0ZSUyMHRvJTIwb3JpZ2luYWwlMjBzaXplJTBBcHJlZGljdGlvbiUyMCUzRCUyMHRvcmNoLm5uLmZ1bmN0aW9uYWwuaW50ZXJwb2xhdGUoJTBBJTIwJTIwJTIwJTIwcHJlZGljdGVkX2RlcHRoLnVuc3F1ZWV6ZSgxKSUyQyUwQSUyMCUyMCUyMCUyMHNpemUlM0RpbWFnZS5zaXplJTVCJTNBJTNBLTElNUQlMkMlMEElMjAlMjAlMjAlMjBtb2RlJTNEJTIyYmljdWJpYyUyMiUyQyUwQSUyMCUyMCUyMCUyMGFsaWduX2Nvcm5lcnMlM0RGYWxzZSUyQyUwQSklMEElMEElMjMlMjB2aXN1YWxpemUlMjB0aGUlMjBwcmVkaWN0aW9uJTBBb3V0cHV0JTIwJTNEJTIwcHJlZGljdGlvbi5zcXVlZXplKCkuY3B1KCkubnVtcHkoKSUwQWZvcm1hdHRlZCUyMCUzRCUyMChvdXRwdXQlMjAqJTIwMjU1JTIwJTJGJTIwbnAubWF4KG91dHB1dCkpLmFzdHlwZSglMjJ1aW50OCUyMiklMEFkZXB0aCUyMCUzRCUyMEltYWdlLmZyb21hcnJheShmb3JtYXR0ZWQp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoImageProcessor, AutoModelForDepthEstimation
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>image_processor = AutoImageProcessor.from_pretrained(<span class="hljs-string">&quot;LiheYoung/depth-anything-small-hf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForDepthEstimation.from_pretrained(<span class="hljs-string">&quot;LiheYoung/depth-anything-small-hf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prepare image for the model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = image_processor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)
<span class="hljs-meta">... </span>    predicted_depth = outputs.predicted_depth

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># interpolate to original size</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction = torch.nn.functional.interpolate(
<span class="hljs-meta">... </span>    predicted_depth.unsqueeze(<span class="hljs-number">1</span>),
<span class="hljs-meta">... </span>    size=image.size[::-<span class="hljs-number">1</span>],
<span class="hljs-meta">... </span>    mode=<span class="hljs-string">&quot;bicubic&quot;</span>,
<span class="hljs-meta">... </span>    align_corners=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># visualize the prediction</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>output = prediction.squeeze().cpu().numpy()
<span class="hljs-meta">&gt;&gt;&gt; </span>formatted = (output * <span class="hljs-number">255</span> / np.<span class="hljs-built_in">max</span>(output)).astype(<span class="hljs-string">&quot;uint8&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>depth = Image.fromarray(formatted)`,wrap:!1}}),{c(){r=i("p"),r.textContent=J,h=a(),d(c.$$.fragment)},l(l){r=p(l,"P",{"data-svelte-h":!0}),w(r)!=="svelte-kvfsh7"&&(r.textContent=J),h=o(l),g(c.$$.fragment,l)},m(l,T){s(l,r,T),s(l,h,T),u(c,l,T),M=!0},p:Ne,i(l){M||(f(c.$$.fragment,l),M=!0)},o(l){y(c.$$.fragment,l),M=!1},d(l){l&&(n(r),n(h)),b(c,l)}}}function yt(U){let r,J,h,c,M,l,T,he,A,Xe='The Depth Anything model was proposed in <a href="https://arxiv.org/abs/2401.10891" rel="nofollow">Depth Anything: Unleashing the Power of Large-Scale Unlabeled Data</a> by Lihe Yang, Bingyi Kang, Zilong Huang, Xiaogang Xu, Jiashi Feng, Hengshuang Zhao. Depth Anything is based on the <a href="dpt">DPT</a> architecture, trained on ~62 million images, obtaining state-of-the-art results for both relative and absolute depth estimation.',me,z,Ye="The abstract from the paper is the following:",de,x,Le="<em>This work presents Depth Anything, a highly practical solution for robust monocular depth estimation. Without pursuing novel technical modules, we aim to build a simple yet powerful foundation model dealing with any images under any circumstances. To this end, we scale up the dataset by designing a data engine to collect and automatically annotate large-scale unlabeled data (~62M), which significantly enlarges the data coverage and thus is able to reduce the generalization error. We investigate two simple yet effective strategies that make data scaling-up promising. First, a more challenging optimization target is created by leveraging data augmentation tools. It compels the model to actively seek extra visual knowledge and acquire robust representations. Second, an auxiliary supervision is developed to enforce the model to inherit rich semantic priors from pre-trained encoders. We evaluate its zero-shot capabilities extensively, including six public datasets and randomly captured photos. It demonstrates impressive generalization ability. Further, through fine-tuning it with metric depth information from NYUv2 and KITTI, new SOTAs are set. Our better depth model also results in a better depth-conditioned ControlNet.</em>",ge,C,Pe,ue,D,Se='Depth Anything overview. Taken from the <a href="https://arxiv.org/abs/2401.10891">original paper</a>.',fe,R,Qe=`This model was contributed by <a href="https://huggingface.co/nielsr" rel="nofollow">nielsr</a>.
The original code can be found <a href="https://github.com/LiheYoung/Depth-Anything" rel="nofollow">here</a>.`,ye,F,be,H,qe="There are 2 main ways to use Depth Anything: either using the pipeline API, which abstracts away all the complexity for you, or by using the <code>DepthAnythingForDepthEstimation</code> class yourself.",Me,V,we,N,Ke="The pipeline allows to use the model in a few lines of code:",Te,X,je,Y,Je,L,Oe="If you want to do the pre- and postprocessing yourself, here’s how to do that:",_e,P,ve,S,$e,j,Q,Ge,se,et=`This is the configuration class to store the configuration of a <code>DepthAnythingModel</code>. It is used to instantiate an DepthAnything
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the DepthAnything
<a href="https://huggingface.co/LiheYoung/depth-anything-small-hf" rel="nofollow">LiheYoung/depth-anything-small-hf</a> architecture.`,Ie,ae,tt=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,Ee,Z,Ae,k,q,ze,oe,nt=`Serializes this instance to a Python dictionary. Override the default <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig.to_dict">to_dict()</a>. Returns:
<code>Dict[str, any]</code>: Dictionary of all the attributes that make up this configuration instance,`,Be,K,We,_,O,xe,le,st="Depth Anything Model with a depth estimation head on top (consisting of 3 convolutional layers) e.g. for KITTI, NYUv2.",De,re,at=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,Re,$,ee,Fe,ie,ot='The <a href="/docs/transformers/main/en/model_doc/depth_anything#transformers.DepthAnythingForDepthEstimation">DepthAnythingForDepthEstimation</a> forward method, overrides the <code>__call__</code> special method.',He,G,Ve,I,Ue,ce,Ce;return M=new ne({props:{title:"Depth Anything",local:"depth-anything",headingTag:"h1"}}),T=new ne({props:{title:"Overview",local:"overview",headingTag:"h2"}}),F=new ne({props:{title:"Usage example",local:"usage-example",headingTag:"h2"}}),V=new ne({props:{title:"Pipeline API",local:"pipeline-api",headingTag:"h3"}}),X=new ke({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMHBpcGVsaW5lJTBBZnJvbSUyMFBJTCUyMGltcG9ydCUyMEltYWdlJTBBaW1wb3J0JTIwcmVxdWVzdHMlMEElMEElMjMlMjBsb2FkJTIwcGlwZSUwQXBpcGUlMjAlM0QlMjBwaXBlbGluZSh0YXNrJTNEJTIyZGVwdGgtZXN0aW1hdGlvbiUyMiUyQyUyMG1vZGVsJTNEJTIyTGloZVlvdW5nJTJGZGVwdGgtYW55dGhpbmctc21hbGwtaGYlMjIpJTBBJTBBJTIzJTIwbG9hZCUyMGltYWdlJTBBdXJsJTIwJTNEJTIwJ2h0dHAlM0ElMkYlMkZpbWFnZXMuY29jb2RhdGFzZXQub3JnJTJGdmFsMjAxNyUyRjAwMDAwMDAzOTc2OS5qcGcnJTBBaW1hZ2UlMjAlM0QlMjBJbWFnZS5vcGVuKHJlcXVlc3RzLmdldCh1cmwlMkMlMjBzdHJlYW0lM0RUcnVlKS5yYXcpJTBBJTBBJTIzJTIwaW5mZXJlbmNlJTBBZGVwdGglMjAlM0QlMjBwaXBlKGltYWdlKSU1QiUyMmRlcHRoJTIyJTVE",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load pipe</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pipe = pipeline(task=<span class="hljs-string">&quot;depth-estimation&quot;</span>, model=<span class="hljs-string">&quot;LiheYoung/depth-anything-small-hf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># load image</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&#x27;http://images.cocodataset.org/val2017/000000039769.jpg&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># inference</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>depth = pipe(image)[<span class="hljs-string">&quot;depth&quot;</span>]`,wrap:!1}}),Y=new ne({props:{title:"Using the model yourself",local:"using-the-model-yourself",headingTag:"h3"}}),P=new ke({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9JbWFnZVByb2Nlc3NvciUyQyUyMEF1dG9Nb2RlbEZvckRlcHRoRXN0aW1hdGlvbiUwQWltcG9ydCUyMHRvcmNoJTBBaW1wb3J0JTIwbnVtcHklMjBhcyUyMG5wJTBBZnJvbSUyMFBJTCUyMGltcG9ydCUyMEltYWdlJTBBaW1wb3J0JTIwcmVxdWVzdHMlMEElMEF1cmwlMjAlM0QlMjAlMjJodHRwJTNBJTJGJTJGaW1hZ2VzLmNvY29kYXRhc2V0Lm9yZyUyRnZhbDIwMTclMkYwMDAwMDAwMzk3NjkuanBnJTIyJTBBaW1hZ2UlMjAlM0QlMjBJbWFnZS5vcGVuKHJlcXVlc3RzLmdldCh1cmwlMkMlMjBzdHJlYW0lM0RUcnVlKS5yYXcpJTBBJTBBaW1hZ2VfcHJvY2Vzc29yJTIwJTNEJTIwQXV0b0ltYWdlUHJvY2Vzc29yLmZyb21fcHJldHJhaW5lZCglMjJMaWhlWW91bmclMkZkZXB0aC1hbnl0aGluZy1zbWFsbC1oZiUyMiklMEFtb2RlbCUyMCUzRCUyMEF1dG9Nb2RlbEZvckRlcHRoRXN0aW1hdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyTGloZVlvdW5nJTJGZGVwdGgtYW55dGhpbmctc21hbGwtaGYlMjIpJTBBJTBBJTIzJTIwcHJlcGFyZSUyMGltYWdlJTIwZm9yJTIwdGhlJTIwbW9kZWwlMEFpbnB1dHMlMjAlM0QlMjBpbWFnZV9wcm9jZXNzb3IoaW1hZ2VzJTNEaW1hZ2UlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTIwJTIwJTIwJTIwcHJlZGljdGVkX2RlcHRoJTIwJTNEJTIwb3V0cHV0cy5wcmVkaWN0ZWRfZGVwdGglMEElMEElMjMlMjBpbnRlcnBvbGF0ZSUyMHRvJTIwb3JpZ2luYWwlMjBzaXplJTBBcHJlZGljdGlvbiUyMCUzRCUyMHRvcmNoLm5uLmZ1bmN0aW9uYWwuaW50ZXJwb2xhdGUoJTBBJTIwJTIwJTIwJTIwcHJlZGljdGVkX2RlcHRoLnVuc3F1ZWV6ZSgxKSUyQyUwQSUyMCUyMCUyMCUyMHNpemUlM0RpbWFnZS5zaXplJTVCJTNBJTNBLTElNUQlMkMlMEElMjAlMjAlMjAlMjBtb2RlJTNEJTIyYmljdWJpYyUyMiUyQyUwQSUyMCUyMCUyMCUyMGFsaWduX2Nvcm5lcnMlM0RGYWxzZSUyQyUwQSklMEElMEElMjMlMjB2aXN1YWxpemUlMjB0aGUlMjBwcmVkaWN0aW9uJTBBb3V0cHV0JTIwJTNEJTIwcHJlZGljdGlvbi5zcXVlZXplKCkuY3B1KCkubnVtcHkoKSUwQWZvcm1hdHRlZCUyMCUzRCUyMChvdXRwdXQlMjAqJTIwMjU1JTIwJTJGJTIwbnAubWF4KG91dHB1dCkpLmFzdHlwZSglMjJ1aW50OCUyMiklMEFkZXB0aCUyMCUzRCUyMEltYWdlLmZyb21hcnJheShmb3JtYXR0ZWQp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoImageProcessor, AutoModelForDepthEstimation
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>image_processor = AutoImageProcessor.from_pretrained(<span class="hljs-string">&quot;LiheYoung/depth-anything-small-hf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForDepthEstimation.from_pretrained(<span class="hljs-string">&quot;LiheYoung/depth-anything-small-hf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prepare image for the model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = image_processor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)
<span class="hljs-meta">... </span>    predicted_depth = outputs.predicted_depth

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># interpolate to original size</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction = torch.nn.functional.interpolate(
<span class="hljs-meta">... </span>    predicted_depth.unsqueeze(<span class="hljs-number">1</span>),
<span class="hljs-meta">... </span>    size=image.size[::-<span class="hljs-number">1</span>],
<span class="hljs-meta">... </span>    mode=<span class="hljs-string">&quot;bicubic&quot;</span>,
<span class="hljs-meta">... </span>    align_corners=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># visualize the prediction</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>output = prediction.squeeze().cpu().numpy()
<span class="hljs-meta">&gt;&gt;&gt; </span>formatted = (output * <span class="hljs-number">255</span> / np.<span class="hljs-built_in">max</span>(output)).astype(<span class="hljs-string">&quot;uint8&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>depth = Image.fromarray(formatted)`,wrap:!1}}),S=new ne({props:{title:"DepthAnythingConfig",local:"transformers.DepthAnythingConfig",headingTag:"h2"}}),Q=new Ze({props:{name:"class transformers.DepthAnythingConfig",anchor:"transformers.DepthAnythingConfig",parameters:[{name:"backbone_config",val:" = None"},{name:"backbone",val:" = None"},{name:"use_pretrained_backbone",val:" = False"},{name:"patch_size",val:" = 14"},{name:"initializer_range",val:" = 0.02"},{name:"reassemble_hidden_size",val:" = 384"},{name:"reassemble_factors",val:" = [4, 2, 1, 0.5]"},{name:"neck_hidden_sizes",val:" = [48, 96, 192, 384]"},{name:"fusion_hidden_size",val:" = 64"},{name:"head_in_index",val:" = -1"},{name:"head_hidden_size",val:" = 32"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DepthAnythingConfig.backbone_config",description:`<strong>backbone_config</strong> (<code>Union[Dict[str, Any], PretrainedConfig]</code>, <em>optional</em>) &#x2014;
The configuration of the backbone model. Only used in case <code>is_hybrid</code> is <code>True</code> or in case you want to
leverage the <a href="/docs/transformers/main/en/main_classes/backbones#transformers.AutoBackbone">AutoBackbone</a> API.`,name:"backbone_config"},{anchor:"transformers.DepthAnythingConfig.backbone",description:`<strong>backbone</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Name of backbone to use when <code>backbone_config</code> is <code>None</code>. If <code>use_pretrained_backbone</code> is <code>True</code>, this
will load the corresponding pretrained weights from the timm or transformers library. If <code>use_pretrained_backbone</code>
is <code>False</code>, this loads the backbone&#x2019;s config and uses that to initialize the backbone with random weights.`,name:"backbone"},{anchor:"transformers.DepthAnythingConfig.use_pretrained_backbone",description:`<strong>use_pretrained_backbone</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use pretrained weights for the backbone.`,name:"use_pretrained_backbone"},{anchor:"transformers.DepthAnythingConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 14) &#x2014;
The size of the patches to extract from the backbone features.`,name:"patch_size"},{anchor:"transformers.DepthAnythingConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DepthAnythingConfig.reassemble_hidden_size",description:`<strong>reassemble_hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 384) &#x2014;
The number of input channels of the reassemble layers.`,name:"reassemble_hidden_size"},{anchor:"transformers.DepthAnythingConfig.reassemble_factors",description:`<strong>reassemble_factors</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[4, 2, 1, 0.5]</code>) &#x2014;
The up/downsampling factors of the reassemble layers.`,name:"reassemble_factors"},{anchor:"transformers.DepthAnythingConfig.neck_hidden_sizes",description:`<strong>neck_hidden_sizes</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[48, 96, 192, 384]</code>) &#x2014;
The hidden sizes to project to for the feature maps of the backbone.`,name:"neck_hidden_sizes"},{anchor:"transformers.DepthAnythingConfig.fusion_hidden_size",description:`<strong>fusion_hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
The number of channels before fusion.`,name:"fusion_hidden_size"},{anchor:"transformers.DepthAnythingConfig.head_in_index",description:`<strong>head_in_index</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The index of the features to use in the depth estimation head.`,name:"head_in_index"},{anchor:"transformers.DepthAnythingConfig.head_hidden_size",description:`<strong>head_hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The number of output channels in the second convolution of the depth estimation head.`,name:"head_hidden_size"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/depth_anything/configuration_depth_anything.py#L31"}}),Z=new lt({props:{anchor:"transformers.DepthAnythingConfig.example",$$slots:{default:[gt]},$$scope:{ctx:U}}}),q=new Ze({props:{name:"to_dict",anchor:"transformers.DepthAnythingConfig.to_dict",parameters:[],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/depth_anything/configuration_depth_anything.py#L135"}}),K=new ne({props:{title:"DepthAnythingForDepthEstimation",local:"transformers.DepthAnythingForDepthEstimation",headingTag:"h2"}}),O=new Ze({props:{name:"class transformers.DepthAnythingForDepthEstimation",anchor:"transformers.DepthAnythingForDepthEstimation",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DepthAnythingForDepthEstimation.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/depth_anything#transformers.DepthAnythingConfig">DepthAnythingConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/depth_anything/modeling_depth_anything.py#L362"}}),ee=new Ze({props:{name:"forward",anchor:"transformers.DepthAnythingForDepthEstimation.forward",parameters:[{name:"pixel_values",val:": FloatTensor"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.DepthAnythingForDepthEstimation.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoImageProcessor">AutoImageProcessor</a>. See <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2FeatureExtractor.__call__">DPTImageProcessor.<strong>call</strong>()</a>
for details.`,name:"pixel_values"},{anchor:"transformers.DepthAnythingForDepthEstimation.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DepthAnythingForDepthEstimation.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DepthAnythingForDepthEstimation.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DepthAnythingForDepthEstimation.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Ground truth depth estimation maps for computing the loss.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/depth_anything/modeling_depth_anything.py#L379",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.DepthEstimatorOutput"
>transformers.modeling_outputs.DepthEstimatorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/depth_anything#transformers.DepthAnythingConfig"
>DepthAnythingConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>predicted_depth</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, height, width)</code>) — Predicted depth for each pixel.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, num_channels, height, width)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, patch_size, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.DepthEstimatorOutput"
>transformers.modeling_outputs.DepthEstimatorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),G=new dt({props:{$$slots:{default:[ut]},$$scope:{ctx:U}}}),I=new lt({props:{anchor:"transformers.DepthAnythingForDepthEstimation.forward.example",$$slots:{default:[ft]},$$scope:{ctx:U}}}),{c(){r=i("meta"),J=a(),h=i("p"),c=a(),d(M.$$.fragment),l=a(),d(T.$$.fragment),he=a(),A=i("p"),A.innerHTML=Xe,me=a(),z=i("p"),z.textContent=Ye,de=a(),x=i("p"),x.innerHTML=Le,ge=a(),C=i("img"),ue=a(),D=i("small"),D.innerHTML=Se,fe=a(),R=i("p"),R.innerHTML=Qe,ye=a(),d(F.$$.fragment),be=a(),H=i("p"),H.innerHTML=qe,Me=a(),d(V.$$.fragment),we=a(),N=i("p"),N.textContent=Ke,Te=a(),d(X.$$.fragment),je=a(),d(Y.$$.fragment),Je=a(),L=i("p"),L.textContent=Oe,_e=a(),d(P.$$.fragment),ve=a(),d(S.$$.fragment),$e=a(),j=i("div"),d(Q.$$.fragment),Ge=a(),se=i("p"),se.innerHTML=et,Ie=a(),ae=i("p"),ae.innerHTML=tt,Ee=a(),d(Z.$$.fragment),Ae=a(),k=i("div"),d(q.$$.fragment),ze=a(),oe=i("p"),oe.innerHTML=nt,Be=a(),d(K.$$.fragment),We=a(),_=i("div"),d(O.$$.fragment),xe=a(),le=i("p"),le.textContent=st,De=a(),re=i("p"),re.innerHTML=at,Re=a(),$=i("div"),d(ee.$$.fragment),Fe=a(),ie=i("p"),ie.innerHTML=ot,He=a(),d(G.$$.fragment),Ve=a(),d(I.$$.fragment),Ue=a(),ce=i("p"),this.h()},l(e){const t=mt("svelte-u9bgzb",document.head);r=p(t,"META",{name:!0,content:!0}),t.forEach(n),J=o(e),h=p(e,"P",{}),pe(h).forEach(n),c=o(e),g(M.$$.fragment,e),l=o(e),g(T.$$.fragment,e),he=o(e),A=p(e,"P",{"data-svelte-h":!0}),w(A)!=="svelte-sr5hsf"&&(A.innerHTML=Xe),me=o(e),z=p(e,"P",{"data-svelte-h":!0}),w(z)!=="svelte-vfdo9a"&&(z.textContent=Ye),de=o(e),x=p(e,"P",{"data-svelte-h":!0}),w(x)!=="svelte-fbevff"&&(x.innerHTML=Le),ge=o(e),C=p(e,"IMG",{src:!0,alt:!0,width:!0}),ue=o(e),D=p(e,"SMALL",{"data-svelte-h":!0}),w(D)!=="svelte-1ldczql"&&(D.innerHTML=Se),fe=o(e),R=p(e,"P",{"data-svelte-h":!0}),w(R)!=="svelte-1a1ahjb"&&(R.innerHTML=Qe),ye=o(e),g(F.$$.fragment,e),be=o(e),H=p(e,"P",{"data-svelte-h":!0}),w(H)!=="svelte-1ffao6h"&&(H.innerHTML=qe),Me=o(e),g(V.$$.fragment,e),we=o(e),N=p(e,"P",{"data-svelte-h":!0}),w(N)!=="svelte-1yjxirq"&&(N.textContent=Ke),Te=o(e),g(X.$$.fragment,e),je=o(e),g(Y.$$.fragment,e),Je=o(e),L=p(e,"P",{"data-svelte-h":!0}),w(L)!=="svelte-eza9ob"&&(L.textContent=Oe),_e=o(e),g(P.$$.fragment,e),ve=o(e),g(S.$$.fragment,e),$e=o(e),j=p(e,"DIV",{class:!0});var v=pe(j);g(Q.$$.fragment,v),Ge=o(v),se=p(v,"P",{"data-svelte-h":!0}),w(se)!=="svelte-t94a1n"&&(se.innerHTML=et),Ie=o(v),ae=p(v,"P",{"data-svelte-h":!0}),w(ae)!=="svelte-o55m63"&&(ae.innerHTML=tt),Ee=o(v),g(Z.$$.fragment,v),Ae=o(v),k=p(v,"DIV",{class:!0});var te=pe(k);g(q.$$.fragment,te),ze=o(te),oe=p(te,"P",{"data-svelte-h":!0}),w(oe)!=="svelte-f91b28"&&(oe.innerHTML=nt),te.forEach(n),v.forEach(n),Be=o(e),g(K.$$.fragment,e),We=o(e),_=p(e,"DIV",{class:!0});var B=pe(_);g(O.$$.fragment,B),xe=o(B),le=p(B,"P",{"data-svelte-h":!0}),w(le)!=="svelte-1lyww6q"&&(le.textContent=st),De=o(B),re=p(B,"P",{"data-svelte-h":!0}),w(re)!=="svelte-1gjh92c"&&(re.innerHTML=at),Re=o(B),$=p(B,"DIV",{class:!0});var E=pe($);g(ee.$$.fragment,E),Fe=o(E),ie=p(E,"P",{"data-svelte-h":!0}),w(ie)!=="svelte-tvw6fn"&&(ie.innerHTML=ot),He=o(E),g(G.$$.fragment,E),Ve=o(E),g(I.$$.fragment,E),E.forEach(n),B.forEach(n),Ue=o(e),ce=p(e,"P",{}),pe(ce).forEach(n),this.h()},h(){W(r,"name","hf:doc:metadata"),W(r,"content",bt),it(C.src,Pe="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/transformers/model_doc/depth_anything_overview.jpg")||W(C,"src",Pe),W(C,"alt","drawing"),W(C,"width","600"),W(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),W(_,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,t){m(document.head,r),s(e,J,t),s(e,h,t),s(e,c,t),u(M,e,t),s(e,l,t),u(T,e,t),s(e,he,t),s(e,A,t),s(e,me,t),s(e,z,t),s(e,de,t),s(e,x,t),s(e,ge,t),s(e,C,t),s(e,ue,t),s(e,D,t),s(e,fe,t),s(e,R,t),s(e,ye,t),u(F,e,t),s(e,be,t),s(e,H,t),s(e,Me,t),u(V,e,t),s(e,we,t),s(e,N,t),s(e,Te,t),u(X,e,t),s(e,je,t),u(Y,e,t),s(e,Je,t),s(e,L,t),s(e,_e,t),u(P,e,t),s(e,ve,t),u(S,e,t),s(e,$e,t),s(e,j,t),u(Q,j,null),m(j,Ge),m(j,se),m(j,Ie),m(j,ae),m(j,Ee),u(Z,j,null),m(j,Ae),m(j,k),u(q,k,null),m(k,ze),m(k,oe),s(e,Be,t),u(K,e,t),s(e,We,t),s(e,_,t),u(O,_,null),m(_,xe),m(_,le),m(_,De),m(_,re),m(_,Re),m(_,$),u(ee,$,null),m($,Fe),m($,ie),m($,He),u(G,$,null),m($,Ve),u(I,$,null),s(e,Ue,t),s(e,ce,t),Ce=!0},p(e,[t]){const v={};t&2&&(v.$$scope={dirty:t,ctx:e}),Z.$set(v);const te={};t&2&&(te.$$scope={dirty:t,ctx:e}),G.$set(te);const B={};t&2&&(B.$$scope={dirty:t,ctx:e}),I.$set(B)},i(e){Ce||(f(M.$$.fragment,e),f(T.$$.fragment,e),f(F.$$.fragment,e),f(V.$$.fragment,e),f(X.$$.fragment,e),f(Y.$$.fragment,e),f(P.$$.fragment,e),f(S.$$.fragment,e),f(Q.$$.fragment,e),f(Z.$$.fragment,e),f(q.$$.fragment,e),f(K.$$.fragment,e),f(O.$$.fragment,e),f(ee.$$.fragment,e),f(G.$$.fragment,e),f(I.$$.fragment,e),Ce=!0)},o(e){y(M.$$.fragment,e),y(T.$$.fragment,e),y(F.$$.fragment,e),y(V.$$.fragment,e),y(X.$$.fragment,e),y(Y.$$.fragment,e),y(P.$$.fragment,e),y(S.$$.fragment,e),y(Q.$$.fragment,e),y(Z.$$.fragment,e),y(q.$$.fragment,e),y(K.$$.fragment,e),y(O.$$.fragment,e),y(ee.$$.fragment,e),y(G.$$.fragment,e),y(I.$$.fragment,e),Ce=!1},d(e){e&&(n(J),n(h),n(c),n(l),n(he),n(A),n(me),n(z),n(de),n(x),n(ge),n(C),n(ue),n(D),n(fe),n(R),n(ye),n(be),n(H),n(Me),n(we),n(N),n(Te),n(je),n(Je),n(L),n(_e),n(ve),n($e),n(j),n(Be),n(We),n(_),n(Ue),n(ce)),n(r),b(M,e),b(T,e),b(F,e),b(V,e),b(X,e),b(Y,e),b(P,e),b(S,e),b(Q),b(Z),b(q),b(K,e),b(O),b(ee),b(G),b(I)}}}const bt='{"title":"Depth Anything","local":"depth-anything","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage example","local":"usage-example","sections":[{"title":"Pipeline API","local":"pipeline-api","sections":[],"depth":3},{"title":"Using the model yourself","local":"using-the-model-yourself","sections":[],"depth":3}],"depth":2},{"title":"DepthAnythingConfig","local":"transformers.DepthAnythingConfig","sections":[],"depth":2},{"title":"DepthAnythingForDepthEstimation","local":"transformers.DepthAnythingForDepthEstimation","sections":[],"depth":2}],"depth":1}';function Mt(U){return pt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Bt extends ct{constructor(r){super(),ht(this,r,Mt,yt,rt,{})}}export{Bt as component};