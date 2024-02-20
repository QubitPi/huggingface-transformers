import{s as ii,o as li,n as F}from"../chunks/scheduler.9bc65507.js";import{S as di,i as ci,g as d,s as r,r as _,A as mi,h as c,f as l,c as i,j as J,u as b,x as h,k as U,y as s,a as m,v as y,d as T,t as M,w as v}from"../chunks/index.707bf1b6.js";import{T as se}from"../chunks/Tip.c2ecdbf4.js";import{D as Z}from"../chunks/Docstring.17db21ae.js";import{C as ee}from"../chunks/CodeBlock.54a9f38d.js";import{F as pi,M as ri}from"../chunks/Markdown.8ab98a13.js";import{E as K}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{P as ui}from"../chunks/PipelineTag.44585822.js";import{H as S}from"../chunks/Heading.342b1fa6.js";function hi(k){let e,u="Examples:",n,a,f;return a=new ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMERhdGEyVmVjVGV4dENvbmZpZyUyQyUyMERhdGEyVmVjVGV4dE1vZGVsJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyMERhdGEyVmVjVGV4dCUyMGZhY2Vib29rJTJGZGF0YTJ2ZWMtdGV4dC1iYXNlJTIwc3R5bGUlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMERhdGEyVmVjVGV4dENvbmZpZygpJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyMG1vZGVsJTIwKHdpdGglMjByYW5kb20lMjB3ZWlnaHRzKSUyMGZyb20lMjB0aGUlMjBmYWNlYm9vayUyRmRhdGEydmVjLXRleHQtYmFzZSUyMHN0eWxlJTIwY29uZmlndXJhdGlvbiUwQW1vZGVsJTIwJTNEJTIwRGF0YTJWZWNUZXh0TW9kZWwoY29uZmlndXJhdGlvbiklMEElMEElMjMlMjBBY2Nlc3NpbmclMjB0aGUlMjBtb2RlbCUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwbW9kZWwuY29uZmln",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Data2VecTextConfig, Data2VecTextModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Data2VecText facebook/data2vec-text-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = Data2VecTextConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the facebook/data2vec-text-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecTextModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){e=d("p"),e.textContent=u,n=r(),_(a.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),h(e)!=="svelte-kvfsh7"&&(e.textContent=u),n=i(t),b(a.$$.fragment,t)},m(t,w){m(t,e,w),m(t,n,w),y(a,t,w),f=!0},p:F,i(t){f||(T(a.$$.fragment,t),f=!0)},o(t){M(a.$$.fragment,t),f=!1},d(t){t&&(l(e),l(n)),v(a,t)}}}function fi(k){let e,u="Example:",n,a,f;return a=new ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMERhdGEyVmVjQXVkaW9Db25maWclMkMlMjBEYXRhMlZlY0F1ZGlvTW9kZWwlMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwRGF0YTJWZWNBdWRpbyUyMGZhY2Vib29rJTJGZGF0YTJ2ZWMtYXVkaW8tYmFzZS05NjBoJTIwc3R5bGUlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMERhdGEyVmVjQXVkaW9Db25maWcoKSUwQSUwQSUyMyUyMEluaXRpYWxpemluZyUyMGElMjBtb2RlbCUyMCh3aXRoJTIwcmFuZG9tJTIwd2VpZ2h0cyklMjBmcm9tJTIwdGhlJTIwZmFjZWJvb2slMkZkYXRhMnZlYy1hdWRpby1iYXNlLTk2MGglMjBzdHlsZSUyMGNvbmZpZ3VyYXRpb24lMEFtb2RlbCUyMCUzRCUyMERhdGEyVmVjQXVkaW9Nb2RlbChjb25maWd1cmF0aW9uKSUwQSUwQSUyMyUyMEFjY2Vzc2luZyUyMHRoZSUyMG1vZGVsJTIwY29uZmlndXJhdGlvbiUwQWNvbmZpZ3VyYXRpb24lMjAlM0QlMjBtb2RlbC5jb25maWc=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Data2VecAudioConfig, Data2VecAudioModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Data2VecAudio facebook/data2vec-audio-base-960h style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = Data2VecAudioConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the facebook/data2vec-audio-base-960h style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecAudioModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){e=d("p"),e.textContent=u,n=r(),_(a.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),h(e)!=="svelte-11lpom8"&&(e.textContent=u),n=i(t),b(a.$$.fragment,t)},m(t,w){m(t,e,w),m(t,n,w),y(a,t,w),f=!0},p:F,i(t){f||(T(a.$$.fragment,t),f=!0)},o(t){M(a.$$.fragment,t),f=!1},d(t){t&&(l(e),l(n)),v(a,t)}}}function gi(k){let e,u="Example:",n,a,f;return a=new ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMERhdGEyVmVjVmlzaW9uQ29uZmlnJTJDJTIwRGF0YTJWZWNWaXNpb25Nb2RlbCUwQSUwQSUyMyUyMEluaXRpYWxpemluZyUyMGElMjBEYXRhMlZlY1Zpc2lvbiUyMGRhdGEydmVjX3Zpc2lvbi1iYXNlLXBhdGNoMTYtMjI0LWluMjJrJTIwc3R5bGUlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMERhdGEyVmVjVmlzaW9uQ29uZmlnKCklMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwbW9kZWwlMjAod2l0aCUyMHJhbmRvbSUyMHdlaWdodHMpJTIwZnJvbSUyMHRoZSUyMGRhdGEydmVjX3Zpc2lvbi1iYXNlLXBhdGNoMTYtMjI0LWluMjJrJTIwc3R5bGUlMjBjb25maWd1cmF0aW9uJTBBbW9kZWwlMjAlM0QlMjBEYXRhMlZlY1Zpc2lvbk1vZGVsKGNvbmZpZ3VyYXRpb24pJTBBJTBBJTIzJTIwQWNjZXNzaW5nJTIwdGhlJTIwbW9kZWwlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMG1vZGVsLmNvbmZpZw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Data2VecVisionConfig, Data2VecVisionModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Data2VecVision data2vec_vision-base-patch16-224-in22k style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = Data2VecVisionConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the data2vec_vision-base-patch16-224-in22k style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecVisionModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){e=d("p"),e.textContent=u,n=r(),_(a.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),h(e)!=="svelte-11lpom8"&&(e.textContent=u),n=i(t),b(a.$$.fragment,t)},m(t,w){m(t,e,w),m(t,n,w),y(a,t,w),f=!0},p:F,i(t){f||(T(a.$$.fragment,t),f=!0)},o(t){M(a.$$.fragment,t),f=!1},d(t){t&&(l(e),l(n)),v(a,t)}}}function _i(k){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=u},l(n){e=c(n,"P",{"data-svelte-h":!0}),h(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(n,a){m(n,e,a)},p:F,d(n){n&&l(e)}}}function bi(k){let e,u="Example:",n,a,f;return a=new ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Qcm9jZXNzb3IlMkMlMjBEYXRhMlZlY0F1ZGlvTW9kZWwlMEFpbXBvcnQlMjB0b3JjaCUwQWZyb20lMjBkYXRhc2V0cyUyMGltcG9ydCUyMGxvYWRfZGF0YXNldCUwQSUwQWRhdGFzZXQlMjAlM0QlMjBsb2FkX2RhdGFzZXQoJTIyaGYtaW50ZXJuYWwtdGVzdGluZyUyRmxpYnJpc3BlZWNoX2Fzcl9kZW1vJTIyJTJDJTIwJTIyY2xlYW4lMjIlMkMlMjBzcGxpdCUzRCUyMnZhbGlkYXRpb24lMjIpJTBBZGF0YXNldCUyMCUzRCUyMGRhdGFzZXQuc29ydCglMjJpZCUyMiklMEFzYW1wbGluZ19yYXRlJTIwJTNEJTIwZGF0YXNldC5mZWF0dXJlcyU1QiUyMmF1ZGlvJTIyJTVELnNhbXBsaW5nX3JhdGUlMEElMEFwcm9jZXNzb3IlMjAlM0QlMjBBdXRvUHJvY2Vzc29yLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmRhdGEydmVjLWF1ZGlvLWJhc2UtOTYwaCUyMiklMEFtb2RlbCUyMCUzRCUyMERhdGEyVmVjQXVkaW9Nb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZkYXRhMnZlYy1hdWRpby1iYXNlLTk2MGglMjIpJTBBJTBBJTIzJTIwYXVkaW8lMjBmaWxlJTIwaXMlMjBkZWNvZGVkJTIwb24lMjB0aGUlMjBmbHklMEFpbnB1dHMlMjAlM0QlMjBwcm9jZXNzb3IoZGF0YXNldCU1QjAlNUQlNUIlMjJhdWRpbyUyMiU1RCU1QiUyMmFycmF5JTIyJTVEJTJDJTIwc2FtcGxpbmdfcmF0ZSUzRHNhbXBsaW5nX3JhdGUlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBbGFzdF9oaWRkZW5fc3RhdGVzJTIwJTNEJTIwb3V0cHV0cy5sYXN0X2hpZGRlbl9zdGF0ZSUwQWxpc3QobGFzdF9oaWRkZW5fc3RhdGVzLnNoYXBlKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, Data2VecAudioModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-audio-base-960h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecAudioModel.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-audio-base-960h&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">292</span>, <span class="hljs-number">768</span>]`,wrap:!1}}),{c(){e=d("p"),e.textContent=u,n=r(),_(a.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),h(e)!=="svelte-11lpom8"&&(e.textContent=u),n=i(t),b(a.$$.fragment,t)},m(t,w){m(t,e,w),m(t,n,w),y(a,t,w),f=!0},p:F,i(t){f||(T(a.$$.fragment,t),f=!0)},o(t){M(a.$$.fragment,t),f=!1},d(t){t&&(l(e),l(n)),v(a,t)}}}function yi(k){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=u},l(n){e=c(n,"P",{"data-svelte-h":!0}),h(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(n,a){m(n,e,a)},p:F,d(n){n&&l(e)}}}function Ti(k){let e,u="Example:",n,a,f;return a=new ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9GZWF0dXJlRXh0cmFjdG9yJTJDJTIwRGF0YTJWZWNBdWRpb0ZvckF1ZGlvRnJhbWVDbGFzc2lmaWNhdGlvbiUwQWZyb20lMjBkYXRhc2V0cyUyMGltcG9ydCUyMGxvYWRfZGF0YXNldCUwQWltcG9ydCUyMHRvcmNoJTBBJTBBZGF0YXNldCUyMCUzRCUyMGxvYWRfZGF0YXNldCglMjJoZi1pbnRlcm5hbC10ZXN0aW5nJTJGbGlicmlzcGVlY2hfYXNyX2RlbW8lMjIlMkMlMjAlMjJjbGVhbiUyMiUyQyUyMHNwbGl0JTNEJTIydmFsaWRhdGlvbiUyMiklMEFkYXRhc2V0JTIwJTNEJTIwZGF0YXNldC5zb3J0KCUyMmlkJTIyKSUwQXNhbXBsaW5nX3JhdGUlMjAlM0QlMjBkYXRhc2V0LmZlYXR1cmVzJTVCJTIyYXVkaW8lMjIlNUQuc2FtcGxpbmdfcmF0ZSUwQSUwQWZlYXR1cmVfZXh0cmFjdG9yJTIwJTNEJTIwQXV0b0ZlYXR1cmVFeHRyYWN0b3IuZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGZGF0YTJ2ZWMtYXVkaW8tYmFzZS05NjBoJTIyKSUwQW1vZGVsJTIwJTNEJTIwRGF0YTJWZWNBdWRpb0ZvckF1ZGlvRnJhbWVDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZkYXRhMnZlYy1hdWRpby1iYXNlLTk2MGglMjIpJTBBJTBBJTIzJTIwYXVkaW8lMjBmaWxlJTIwaXMlMjBkZWNvZGVkJTIwb24lMjB0aGUlMjBmbHklMEFpbnB1dHMlMjAlM0QlMjBmZWF0dXJlX2V4dHJhY3RvcihkYXRhc2V0JTVCMCU1RCU1QiUyMmF1ZGlvJTIyJTVEJTVCJTIyYXJyYXklMjIlNUQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTJDJTIwc2FtcGxpbmdfcmF0ZSUzRHNhbXBsaW5nX3JhdGUpJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEElMEFwcm9iYWJpbGl0aWVzJTIwJTNEJTIwdG9yY2guc2lnbW9pZChsb2dpdHMlNUIwJTVEKSUwQSUyMyUyMGxhYmVscyUyMGlzJTIwYSUyMG9uZS1ob3QlMjBhcnJheSUyMG9mJTIwc2hhcGUlMjAobnVtX2ZyYW1lcyUyQyUyMG51bV9zcGVha2VycyklMEFsYWJlbHMlMjAlM0QlMjAocHJvYmFiaWxpdGllcyUyMCUzRSUyMDAuNSkubG9uZygp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, Data2VecAudioForAudioFrameClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-audio-base-960h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecAudioForAudioFrameClassification.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-audio-base-960h&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, sampling_rate=sampling_rate)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>probabilities = torch.sigmoid(logits[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># labels is a one-hot array of shape (num_frames, num_speakers)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = (probabilities &gt; <span class="hljs-number">0.5</span>).long()`,wrap:!1}}),{c(){e=d("p"),e.textContent=u,n=r(),_(a.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),h(e)!=="svelte-11lpom8"&&(e.textContent=u),n=i(t),b(a.$$.fragment,t)},m(t,w){m(t,e,w),m(t,n,w),y(a,t,w),f=!0},p:F,i(t){f||(T(a.$$.fragment,t),f=!0)},o(t){M(a.$$.fragment,t),f=!1},d(t){t&&(l(e),l(n)),v(a,t)}}}function Mi(k){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=u},l(n){e=c(n,"P",{"data-svelte-h":!0}),h(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(n,a){m(n,e,a)},p:F,d(n){n&&l(e)}}}function vi(k){let e,u="Example:",n,a,f;return a=new ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Qcm9jZXNzb3IlMkMlMjBEYXRhMlZlY0F1ZGlvRm9yQ1RDJTBBZnJvbSUyMGRhdGFzZXRzJTIwaW1wb3J0JTIwbG9hZF9kYXRhc2V0JTBBaW1wb3J0JTIwdG9yY2glMEElMEFkYXRhc2V0JTIwJTNEJTIwbG9hZF9kYXRhc2V0KCUyMmhmLWludGVybmFsLXRlc3RpbmclMkZsaWJyaXNwZWVjaF9hc3JfZGVtbyUyMiUyQyUyMCUyMmNsZWFuJTIyJTJDJTIwc3BsaXQlM0QlMjJ2YWxpZGF0aW9uJTIyKSUwQWRhdGFzZXQlMjAlM0QlMjBkYXRhc2V0LnNvcnQoJTIyaWQlMjIpJTBBc2FtcGxpbmdfcmF0ZSUyMCUzRCUyMGRhdGFzZXQuZmVhdHVyZXMlNUIlMjJhdWRpbyUyMiU1RC5zYW1wbGluZ19yYXRlJTBBJTBBcHJvY2Vzc29yJTIwJTNEJTIwQXV0b1Byb2Nlc3Nvci5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZkYXRhMnZlYy1hdWRpby1iYXNlLTk2MGglMjIpJTBBbW9kZWwlMjAlM0QlMjBEYXRhMlZlY0F1ZGlvRm9yQ1RDLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmRhdGEydmVjLWF1ZGlvLWJhc2UtOTYwaCUyMiklMEElMEElMjMlMjBhdWRpbyUyMGZpbGUlMjBpcyUyMGRlY29kZWQlMjBvbiUyMHRoZSUyMGZseSUwQWlucHV0cyUyMCUzRCUyMHByb2Nlc3NvcihkYXRhc2V0JTVCMCU1RCU1QiUyMmF1ZGlvJTIyJTVEJTVCJTIyYXJyYXklMjIlNUQlMkMlMjBzYW1wbGluZ19yYXRlJTNEc2FtcGxpbmdfcmF0ZSUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb2dpdHMlMEFwcmVkaWN0ZWRfaWRzJTIwJTNEJTIwdG9yY2guYXJnbWF4KGxvZ2l0cyUyQyUyMGRpbSUzRC0xKSUwQSUwQSUyMyUyMHRyYW5zY3JpYmUlMjBzcGVlY2glMEF0cmFuc2NyaXB0aW9uJTIwJTNEJTIwcHJvY2Vzc29yLmJhdGNoX2RlY29kZShwcmVkaWN0ZWRfaWRzKSUwQXRyYW5zY3JpcHRpb24lNUIwJTVEJTBBJTBBaW5wdXRzJTVCJTIybGFiZWxzJTIyJTVEJTIwJTNEJTIwcHJvY2Vzc29yKHRleHQlM0RkYXRhc2V0JTVCMCU1RCU1QiUyMnRleHQlMjIlNUQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKS5pbnB1dF9pZHMlMEElMEElMjMlMjBjb21wdXRlJTIwbG9zcyUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9zcyUwQXJvdW5kKGxvc3MuaXRlbSgpJTJDJTIwMik=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, Data2VecAudioForCTC
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-audio-base-960h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecAudioForCTC.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-audio-base-960h&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = processor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># transcribe speech</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription = processor.batch_decode(predicted_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>transcription[<span class="hljs-number">0</span>]
<span class="hljs-string">&#x27;MISTER QUILTER IS THE APOSTLE OF THE MIDDLE CLASSES AND WE ARE GLAD TO WELCOME HIS GOSPEL&#x27;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = processor(text=dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;text&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">66.95</span>`,wrap:!1}}),{c(){e=d("p"),e.textContent=u,n=r(),_(a.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),h(e)!=="svelte-11lpom8"&&(e.textContent=u),n=i(t),b(a.$$.fragment,t)},m(t,w){m(t,e,w),m(t,n,w),y(a,t,w),f=!0},p:F,i(t){f||(T(a.$$.fragment,t),f=!0)},o(t){M(a.$$.fragment,t),f=!1},d(t){t&&(l(e),l(n)),v(a,t)}}}function wi(k){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=u},l(n){e=c(n,"P",{"data-svelte-h":!0}),h(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(n,a){m(n,e,a)},p:F,d(n){n&&l(e)}}}function ki(k){let e,u="Example:",n,a,f;return a=new ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9GZWF0dXJlRXh0cmFjdG9yJTJDJTIwRGF0YTJWZWNBdWRpb0ZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMEFmcm9tJTIwZGF0YXNldHMlMjBpbXBvcnQlMjBsb2FkX2RhdGFzZXQlMEFpbXBvcnQlMjB0b3JjaCUwQSUwQWRhdGFzZXQlMjAlM0QlMjBsb2FkX2RhdGFzZXQoJTIyaGYtaW50ZXJuYWwtdGVzdGluZyUyRmxpYnJpc3BlZWNoX2Fzcl9kZW1vJTIyJTJDJTIwJTIyY2xlYW4lMjIlMkMlMjBzcGxpdCUzRCUyMnZhbGlkYXRpb24lMjIpJTBBZGF0YXNldCUyMCUzRCUyMGRhdGFzZXQuc29ydCglMjJpZCUyMiklMEFzYW1wbGluZ19yYXRlJTIwJTNEJTIwZGF0YXNldC5mZWF0dXJlcyU1QiUyMmF1ZGlvJTIyJTVELnNhbXBsaW5nX3JhdGUlMEElMEFmZWF0dXJlX2V4dHJhY3RvciUyMCUzRCUyMEF1dG9GZWF0dXJlRXh0cmFjdG9yLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmRhdGEydmVjLWF1ZGlvLWJhc2UtOTYwaCUyMiklMEFtb2RlbCUyMCUzRCUyMERhdGEyVmVjQXVkaW9Gb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmRhdGEydmVjLWF1ZGlvLWJhc2UtOTYwaCUyMiklMEElMEElMjMlMjBhdWRpbyUyMGZpbGUlMjBpcyUyMGRlY29kZWQlMjBvbiUyMHRoZSUyMGZseSUwQWlucHV0cyUyMCUzRCUyMGZlYXR1cmVfZXh0cmFjdG9yKGRhdGFzZXQlNUIwJTVEJTVCJTIyYXVkaW8lMjIlNUQlNUIlMjJhcnJheSUyMiU1RCUyQyUyMHNhbXBsaW5nX3JhdGUlM0RzYW1wbGluZ19yYXRlJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEElMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQXByZWRpY3RlZF9jbGFzc19pZHMlMjAlM0QlMjB0b3JjaC5hcmdtYXgobG9naXRzJTJDJTIwZGltJTNELTEpLml0ZW0oKSUwQXByZWRpY3RlZF9sYWJlbCUyMCUzRCUyMG1vZGVsLmNvbmZpZy5pZDJsYWJlbCU1QnByZWRpY3RlZF9jbGFzc19pZHMlNUQlMEElMEElMjMlMjBjb21wdXRlJTIwbG9zcyUyMC0lMjB0YXJnZXRfbGFiZWwlMjBpcyUyMGUuZy4lMjAlMjJkb3duJTIyJTBBdGFyZ2V0X2xhYmVsJTIwJTNEJTIwbW9kZWwuY29uZmlnLmlkMmxhYmVsJTVCMCU1RCUwQWlucHV0cyU1QiUyMmxhYmVscyUyMiU1RCUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUJtb2RlbC5jb25maWcubGFiZWwyaWQlNUJ0YXJnZXRfbGFiZWwlNUQlNUQpJTBBbG9zcyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5sb3Nz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, Data2VecAudioForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-audio-base-960h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecAudioForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-audio-base-960h&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(dataset[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;audio&quot;</span>][<span class="hljs-string">&quot;array&quot;</span>], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.argmax(logits, dim=-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = model.config.id2label[predicted_class_ids]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># compute loss - target_label is e.g. &quot;down&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_label = model.config.id2label[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor([model.config.label2id[target_label]])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs).loss`,wrap:!1}}),{c(){e=d("p"),e.textContent=u,n=r(),_(a.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),h(e)!=="svelte-11lpom8"&&(e.textContent=u),n=i(t),b(a.$$.fragment,t)},m(t,w){m(t,e,w),m(t,n,w),y(a,t,w),f=!0},p:F,i(t){f||(T(a.$$.fragment,t),f=!0)},o(t){M(a.$$.fragment,t),f=!1},d(t){t&&(l(e),l(n)),v(a,t)}}}function Vi(k){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=u},l(n){e=c(n,"P",{"data-svelte-h":!0}),h(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(n,a){m(n,e,a)},p:F,d(n){n&&l(e)}}}function ji(k){let e,u="Example:",n,a,f;return a=new ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9GZWF0dXJlRXh0cmFjdG9yJTJDJTIwRGF0YTJWZWNBdWRpb0ZvclhWZWN0b3IlMEFmcm9tJTIwZGF0YXNldHMlMjBpbXBvcnQlMjBsb2FkX2RhdGFzZXQlMEFpbXBvcnQlMjB0b3JjaCUwQSUwQWRhdGFzZXQlMjAlM0QlMjBsb2FkX2RhdGFzZXQoJTIyaGYtaW50ZXJuYWwtdGVzdGluZyUyRmxpYnJpc3BlZWNoX2Fzcl9kZW1vJTIyJTJDJTIwJTIyY2xlYW4lMjIlMkMlMjBzcGxpdCUzRCUyMnZhbGlkYXRpb24lMjIpJTBBZGF0YXNldCUyMCUzRCUyMGRhdGFzZXQuc29ydCglMjJpZCUyMiklMEFzYW1wbGluZ19yYXRlJTIwJTNEJTIwZGF0YXNldC5mZWF0dXJlcyU1QiUyMmF1ZGlvJTIyJTVELnNhbXBsaW5nX3JhdGUlMEElMEFmZWF0dXJlX2V4dHJhY3RvciUyMCUzRCUyMEF1dG9GZWF0dXJlRXh0cmFjdG9yLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmRhdGEydmVjLWF1ZGlvLWJhc2UtOTYwaCUyMiklMEFtb2RlbCUyMCUzRCUyMERhdGEyVmVjQXVkaW9Gb3JYVmVjdG9yLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmRhdGEydmVjLWF1ZGlvLWJhc2UtOTYwaCUyMiklMEElMEElMjMlMjBhdWRpbyUyMGZpbGUlMjBpcyUyMGRlY29kZWQlMjBvbiUyMHRoZSUyMGZseSUwQWlucHV0cyUyMCUzRCUyMGZlYXR1cmVfZXh0cmFjdG9yKCUwQSUyMCUyMCUyMCUyMCU1QmQlNUIlMjJhcnJheSUyMiU1RCUyMGZvciUyMGQlMjBpbiUyMGRhdGFzZXQlNUIlM0EyJTVEJTVCJTIyYXVkaW8lMjIlNUQlNUQlMkMlMjBzYW1wbGluZ19yYXRlJTNEc2FtcGxpbmdfcmF0ZSUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIlMkMlMjBwYWRkaW5nJTNEVHJ1ZSUwQSklMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwZW1iZWRkaW5ncyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKS5lbWJlZGRpbmdzJTBBJTBBZW1iZWRkaW5ncyUyMCUzRCUyMHRvcmNoLm5uLmZ1bmN0aW9uYWwubm9ybWFsaXplKGVtYmVkZGluZ3MlMkMlMjBkaW0lM0QtMSkuY3B1KCklMEElMEElMjMlMjB0aGUlMjByZXN1bHRpbmclMjBlbWJlZGRpbmdzJTIwY2FuJTIwYmUlMjB1c2VkJTIwZm9yJTIwY29zaW5lJTIwc2ltaWxhcml0eS1iYXNlZCUyMHJldHJpZXZhbCUwQWNvc2luZV9zaW0lMjAlM0QlMjB0b3JjaC5ubi5Db3NpbmVTaW1pbGFyaXR5KGRpbSUzRC0xKSUwQXNpbWlsYXJpdHklMjAlM0QlMjBjb3NpbmVfc2ltKGVtYmVkZGluZ3MlNUIwJTVEJTJDJTIwZW1iZWRkaW5ncyU1QjElNUQpJTBBdGhyZXNob2xkJTIwJTNEJTIwMC43JTIwJTIwJTIzJTIwdGhlJTIwb3B0aW1hbCUyMHRocmVzaG9sZCUyMGlzJTIwZGF0YXNldC1kZXBlbmRlbnQlMEFpZiUyMHNpbWlsYXJpdHklMjAlM0MlMjB0aHJlc2hvbGQlM0ElMEElMjAlMjAlMjAlMjBwcmludCglMjJTcGVha2VycyUyMGFyZSUyMG5vdCUyMHRoZSUyMHNhbWUhJTIyKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoFeatureExtractor, Data2VecAudioForXVector
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;hf-internal-testing/librispeech_asr_demo&quot;</span>, <span class="hljs-string">&quot;clean&quot;</span>, split=<span class="hljs-string">&quot;validation&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = dataset.sort(<span class="hljs-string">&quot;id&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>sampling_rate = dataset.features[<span class="hljs-string">&quot;audio&quot;</span>].sampling_rate

<span class="hljs-meta">&gt;&gt;&gt; </span>feature_extractor = AutoFeatureExtractor.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-audio-base-960h&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecAudioForXVector.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-audio-base-960h&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># audio file is decoded on the fly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = feature_extractor(
<span class="hljs-meta">... </span>    [d[<span class="hljs-string">&quot;array&quot;</span>] <span class="hljs-keyword">for</span> d <span class="hljs-keyword">in</span> dataset[:<span class="hljs-number">2</span>][<span class="hljs-string">&quot;audio&quot;</span>]], sampling_rate=sampling_rate, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    embeddings = model(**inputs).embeddings

<span class="hljs-meta">&gt;&gt;&gt; </span>embeddings = torch.nn.functional.normalize(embeddings, dim=-<span class="hljs-number">1</span>).cpu()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the resulting embeddings can be used for cosine similarity-based retrieval</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>cosine_sim = torch.nn.CosineSimilarity(dim=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>similarity = cosine_sim(embeddings[<span class="hljs-number">0</span>], embeddings[<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>threshold = <span class="hljs-number">0.7</span>  <span class="hljs-comment"># the optimal threshold is dataset-dependent</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">if</span> similarity &lt; threshold:
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Speakers are not the same!&quot;</span>)`,wrap:!1}}),{c(){e=d("p"),e.textContent=u,n=r(),_(a.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),h(e)!=="svelte-11lpom8"&&(e.textContent=u),n=i(t),b(a.$$.fragment,t)},m(t,w){m(t,e,w),m(t,n,w),y(a,t,w),f=!0},p:F,i(t){f||(T(a.$$.fragment,t),f=!0)},o(t){M(a.$$.fragment,t),f=!1},d(t){t&&(l(e),l(n)),v(a,t)}}}function xi(k){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=u},l(n){e=c(n,"P",{"data-svelte-h":!0}),h(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(n,a){m(n,e,a)},p:F,d(n){n&&l(e)}}}function $i(k){let e,u="Example:",n,a,f;return a=new ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBEYXRhMlZlY1RleHRNb2RlbCUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZkYXRhMnZlYy10ZXh0LWJhc2UlMjIpJTBBbW9kZWwlMjAlM0QlMjBEYXRhMlZlY1RleHRNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZkYXRhMnZlYy10ZXh0LWJhc2UlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEFsYXN0X2hpZGRlbl9zdGF0ZXMlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRl",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, Data2VecTextModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecTextModel.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){e=d("p"),e.textContent=u,n=r(),_(a.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),h(e)!=="svelte-11lpom8"&&(e.textContent=u),n=i(t),b(a.$$.fragment,t)},m(t,w){m(t,e,w),m(t,n,w),y(a,t,w),f=!0},p:F,i(t){f||(T(a.$$.fragment,t),f=!0)},o(t){M(a.$$.fragment,t),f=!1},d(t){t&&(l(e),l(n)),v(a,t)}}}function Ci(k){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=u},l(n){e=c(n,"P",{"data-svelte-h":!0}),h(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(n,a){m(n,e,a)},p:F,d(n){n&&l(e)}}}function Fi(k){let e,u="Example:",n,a,f;return a=new ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBEYXRhMlZlY1RleHRGb3JDYXVzYWxMTSUyQyUyMERhdGEyVmVjVGV4dENvbmZpZyUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZkYXRhMnZlYy10ZXh0LWJhc2UlMjIpJTBBY29uZmlnJTIwJTNEJTIwRGF0YTJWZWNUZXh0Q29uZmlnLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmRhdGEydmVjLXRleHQtYmFzZSUyMiklMEFjb25maWcuaXNfZGVjb2RlciUyMCUzRCUyMFRydWUlMEFtb2RlbCUyMCUzRCUyMERhdGEyVmVjVGV4dEZvckNhdXNhbExNLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmRhdGEydmVjLXRleHQtYmFzZSUyMiUyQyUyMGNvbmZpZyUzRGNvbmZpZyklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIySGVsbG8lMkMlMjBteSUyMGRvZyUyMGlzJTIwY3V0ZSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQXByZWRpY3Rpb25fbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, Data2VecTextForCausalLM, Data2VecTextConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = Data2VecTextConfig.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecTextForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`,wrap:!1}}),{c(){e=d("p"),e.textContent=u,n=r(),_(a.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),h(e)!=="svelte-11lpom8"&&(e.textContent=u),n=i(t),b(a.$$.fragment,t)},m(t,w){m(t,e,w),m(t,n,w),y(a,t,w),f=!0},p:F,i(t){f||(T(a.$$.fragment,t),f=!0)},o(t){M(a.$$.fragment,t),f=!1},d(t){t&&(l(e),l(n)),v(a,t)}}}function Ji(k){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=u},l(n){e=c(n,"P",{"data-svelte-h":!0}),h(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(n,a){m(n,e,a)},p:F,d(n){n&&l(e)}}}function Ui(k){let e,u="Example:",n,a,f;return a=new ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBEYXRhMlZlY1RleHRGb3JNYXNrZWRMTSUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZkYXRhMnZlYy10ZXh0LWJhc2UlMjIpJTBBbW9kZWwlMjAlM0QlMjBEYXRhMlZlY1RleHRGb3JNYXNrZWRMTS5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZkYXRhMnZlYy10ZXh0LWJhc2UlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMlRoZSUyMGNhcGl0YWwlMjBvZiUyMEZyYW5jZSUyMGlzJTIwJTNDbWFzayUzRS4lMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBJTIzJTIwcmV0cmlldmUlMjBpbmRleCUyMG9mJTIwJTNDbWFzayUzRSUwQW1hc2tfdG9rZW5faW5kZXglMjAlM0QlMjAoaW5wdXRzLmlucHV0X2lkcyUyMCUzRCUzRCUyMHRva2VuaXplci5tYXNrX3Rva2VuX2lkKSU1QjAlNUQubm9uemVybyhhc190dXBsZSUzRFRydWUpJTVCMCU1RCUwQSUwQXByZWRpY3RlZF90b2tlbl9pZCUyMCUzRCUyMGxvZ2l0cyU1QjAlMkMlMjBtYXNrX3Rva2VuX2luZGV4JTVELmFyZ21heChheGlzJTNELTEpJTBBJTBBbGFiZWxzJTIwJTNEJTIwdG9rZW5pemVyKCUyMlRoZSUyMGNhcGl0YWwlMjBvZiUyMEZyYW5jZSUyMGlzJTIwUGFyaXMuJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklNUIlMjJpbnB1dF9pZHMlMjIlNUQlMEElMjMlMjBtYXNrJTIwbGFiZWxzJTIwb2YlMjBub24tJTNDbWFzayUzRSUyMHRva2VucyUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLndoZXJlKGlucHV0cy5pbnB1dF9pZHMlMjAlM0QlM0QlMjB0b2tlbml6ZXIubWFza190b2tlbl9pZCUyQyUyMGxhYmVscyUyQyUyMC0xMDApJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, Data2VecTextForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecTextForMaskedLM.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)`,wrap:!1}}),{c(){e=d("p"),e.textContent=u,n=r(),_(a.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),h(e)!=="svelte-11lpom8"&&(e.textContent=u),n=i(t),b(a.$$.fragment,t)},m(t,w){m(t,e,w),m(t,n,w),y(a,t,w),f=!0},p:F,i(t){f||(T(a.$$.fragment,t),f=!0)},o(t){M(a.$$.fragment,t),f=!1},d(t){t&&(l(e),l(n)),v(a,t)}}}function Zi(k){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=u},l(n){e=c(n,"P",{"data-svelte-h":!0}),h(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(n,a){m(n,e,a)},p:F,d(n){n&&l(e)}}}function Wi(k){let e,u="Example of single-label classification:",n,a,f;return a=new ee({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMERhdGEyVmVjVGV4dEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmRhdGEydmVjLXRleHQtYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyMERhdGEyVmVjVGV4dEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGZGF0YTJ2ZWMtdGV4dC1iYXNlJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIZWxsbyUyQyUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEElMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQXByZWRpY3RlZF9jbGFzc19pZCUyMCUzRCUyMGxvZ2l0cy5hcmdtYXgoKS5pdGVtKCklMEElMEElMjMlMjBUbyUyMHRyYWluJTIwYSUyMG1vZGVsJTIwb24lMjAlNjBudW1fbGFiZWxzJTYwJTIwY2xhc3NlcyUyQyUyMHlvdSUyMGNhbiUyMHBhc3MlMjAlNjBudW1fbGFiZWxzJTNEbnVtX2xhYmVscyU2MCUyMHRvJTIwJTYwLmZyb21fcHJldHJhaW5lZCguLi4pJTYwJTBBbnVtX2xhYmVscyUyMCUzRCUyMGxlbihtb2RlbC5jb25maWcuaWQybGFiZWwpJTBBbW9kZWwlMjAlM0QlMjBEYXRhMlZlY1RleHRGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmRhdGEydmVjLXRleHQtYmFzZSUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzKSUwQSUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxJTVEKSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, Data2VecTextForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecTextForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecTextForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=d("p"),e.textContent=u,n=r(),_(a.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),h(e)!=="svelte-ykxpe4"&&(e.textContent=u),n=i(t),b(a.$$.fragment,t)},m(t,w){m(t,e,w),m(t,n,w),y(a,t,w),f=!0},p:F,i(t){f||(T(a.$$.fragment,t),f=!0)},o(t){M(a.$$.fragment,t),f=!1},d(t){t&&(l(e),l(n)),v(a,t)}}}function Di(k){let e,u="Example of multi-label classification:",n,a,f;return a=new ee({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMERhdGEyVmVjVGV4dEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmRhdGEydmVjLXRleHQtYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyMERhdGEyVmVjVGV4dEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGZGF0YTJ2ZWMtdGV4dC1iYXNlJTIyJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhlbGxvJTJDJTIwbXklMjBkb2clMjBpcyUyMGN1dGUlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX2NsYXNzX2lkcyUyMCUzRCUyMHRvcmNoLmFyYW5nZSgwJTJDJTIwbG9naXRzLnNoYXBlJTVCLTElNUQpJTVCdG9yY2guc2lnbW9pZChsb2dpdHMpLnNxdWVlemUoZGltJTNEMCklMjAlM0UlMjAwLjUlNUQlMEElMEElMjMlMjBUbyUyMHRyYWluJTIwYSUyMG1vZGVsJTIwb24lMjAlNjBudW1fbGFiZWxzJTYwJTIwY2xhc3NlcyUyQyUyMHlvdSUyMGNhbiUyMHBhc3MlMjAlNjBudW1fbGFiZWxzJTNEbnVtX2xhYmVscyU2MCUyMHRvJTIwJTYwLmZyb21fcHJldHJhaW5lZCguLi4pJTYwJTBBbnVtX2xhYmVscyUyMCUzRCUyMGxlbihtb2RlbC5jb25maWcuaWQybGFiZWwpJTBBbW9kZWwlMjAlM0QlMjBEYXRhMlZlY1RleHRGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMEElMjAlMjAlMjAlMjAlMjJmYWNlYm9vayUyRmRhdGEydmVjLXRleHQtYmFzZSUyMiUyQyUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTJDJTIwcHJvYmxlbV90eXBlJTNEJTIybXVsdGlfbGFiZWxfY2xhc3NpZmljYXRpb24lMjIlMEEpJTBBJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2guc3VtKCUwQSUyMCUyMCUyMCUyMHRvcmNoLm5uLmZ1bmN0aW9uYWwub25lX2hvdChwcmVkaWN0ZWRfY2xhc3NfaWRzJTVCTm9uZSUyQyUyMCUzQSU1RC5jbG9uZSgpJTJDJTIwbnVtX2NsYXNzZXMlM0RudW1fbGFiZWxzKSUyQyUyMGRpbSUzRDElMEEpLnRvKHRvcmNoLmZsb2F0KSUwQWxvc3MlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, Data2VecTextForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecTextForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_ids = torch.arange(<span class="hljs-number">0</span>, logits.shape[-<span class="hljs-number">1</span>])[torch.sigmoid(logits).squeeze(dim=<span class="hljs-number">0</span>) &gt; <span class="hljs-number">0.5</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecTextForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.<span class="hljs-built_in">sum</span>(
<span class="hljs-meta">... </span>    torch.nn.functional.one_hot(predicted_class_ids[<span class="hljs-literal">None</span>, :].clone(), num_classes=num_labels), dim=<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>).to(torch.<span class="hljs-built_in">float</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=d("p"),e.textContent=u,n=r(),_(a.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),h(e)!=="svelte-1l8e32d"&&(e.textContent=u),n=i(t),b(a.$$.fragment,t)},m(t,w){m(t,e,w),m(t,n,w),y(a,t,w),f=!0},p:F,i(t){f||(T(a.$$.fragment,t),f=!0)},o(t){M(a.$$.fragment,t),f=!1},d(t){t&&(l(e),l(n)),v(a,t)}}}function zi(k){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=u},l(n){e=c(n,"P",{"data-svelte-h":!0}),h(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(n,a){m(n,e,a)},p:F,d(n){n&&l(e)}}}function Gi(k){let e,u="Example:",n,a,f;return a=new ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBEYXRhMlZlY1RleHRGb3JNdWx0aXBsZUNob2ljZSUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZkYXRhMnZlYy10ZXh0LWJhc2UlMjIpJTBBbW9kZWwlMjAlM0QlMjBEYXRhMlZlY1RleHRGb3JNdWx0aXBsZUNob2ljZS5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZkYXRhMnZlYy10ZXh0LWJhc2UlMjIpJTBBJTBBcHJvbXB0JTIwJTNEJTIwJTIySW4lMjBJdGFseSUyQyUyMHBpenphJTIwc2VydmVkJTIwaW4lMjBmb3JtYWwlMjBzZXR0aW5ncyUyQyUyMHN1Y2glMjBhcyUyMGF0JTIwYSUyMHJlc3RhdXJhbnQlMkMlMjBpcyUyMHByZXNlbnRlZCUyMHVuc2xpY2VkLiUyMiUwQWNob2ljZTAlMjAlM0QlMjAlMjJJdCUyMGlzJTIwZWF0ZW4lMjB3aXRoJTIwYSUyMGZvcmslMjBhbmQlMjBhJTIwa25pZmUuJTIyJTBBY2hvaWNlMSUyMCUzRCUyMCUyMkl0JTIwaXMlMjBlYXRlbiUyMHdoaWxlJTIwaGVsZCUyMGluJTIwdGhlJTIwaGFuZC4lMjIlMEFsYWJlbHMlMjAlM0QlMjB0b3JjaC50ZW5zb3IoMCkudW5zcXVlZXplKDApJTIwJTIwJTIzJTIwY2hvaWNlMCUyMGlzJTIwY29ycmVjdCUyMChhY2NvcmRpbmclMjB0byUyMFdpa2lwZWRpYSUyMCUzQikpJTJDJTIwYmF0Y2glMjBzaXplJTIwMSUwQSUwQWVuY29kaW5nJTIwJTNEJTIwdG9rZW5pemVyKCU1QnByb21wdCUyQyUyMHByb21wdCU1RCUyQyUyMCU1QmNob2ljZTAlMkMlMjBjaG9pY2UxJTVEJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiUyQyUyMHBhZGRpbmclM0RUcnVlKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKiU3QmslM0ElMjB2LnVuc3F1ZWV6ZSgwKSUyMGZvciUyMGslMkMlMjB2JTIwaW4lMjBlbmNvZGluZy5pdGVtcygpJTdEJTJDJTIwbGFiZWxzJTNEbGFiZWxzKSUyMCUyMCUyMyUyMGJhdGNoJTIwc2l6ZSUyMGlzJTIwMSUwQSUwQSUyMyUyMHRoZSUyMGxpbmVhciUyMGNsYXNzaWZpZXIlMjBzdGlsbCUyMG5lZWRzJTIwdG8lMjBiZSUyMHRyYWluZWQlMEFsb3NzJTIwJTNEJTIwb3V0cHV0cy5sb3NzJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, Data2VecTextForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecTextForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=d("p"),e.textContent=u,n=r(),_(a.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),h(e)!=="svelte-11lpom8"&&(e.textContent=u),n=i(t),b(a.$$.fragment,t)},m(t,w){m(t,e,w),m(t,n,w),y(a,t,w),f=!0},p:F,i(t){f||(T(a.$$.fragment,t),f=!0)},o(t){M(a.$$.fragment,t),f=!1},d(t){t&&(l(e),l(n)),v(a,t)}}}function Ii(k){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=u},l(n){e=c(n,"P",{"data-svelte-h":!0}),h(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(n,a){m(n,e,a)},p:F,d(n){n&&l(e)}}}function Ri(k){let e,u="Example:",n,a,f;return a=new ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBEYXRhMlZlY1RleHRGb3JUb2tlbkNsYXNzaWZpY2F0aW9uJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmRhdGEydmVjLXRleHQtYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyMERhdGEyVmVjVGV4dEZvclRva2VuQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGZGF0YTJ2ZWMtdGV4dC1iYXNlJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMEElMjAlMjAlMjAlMjAlMjJIdWdnaW5nRmFjZSUyMGlzJTIwYSUyMGNvbXBhbnklMjBiYXNlZCUyMGluJTIwUGFyaXMlMjBhbmQlMjBOZXclMjBZb3JrJTIyJTJDJTIwYWRkX3NwZWNpYWxfdG9rZW5zJTNERmFsc2UlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTBBKSUwQSUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cykubG9naXRzJTBBJTBBcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyUyMCUzRCUyMGxvZ2l0cy5hcmdtYXgoLTEpJTBBJTBBJTIzJTIwTm90ZSUyMHRoYXQlMjB0b2tlbnMlMjBhcmUlMjBjbGFzc2lmaWVkJTIwcmF0aGVyJTIwdGhlbiUyMGlucHV0JTIwd29yZHMlMjB3aGljaCUyMG1lYW5zJTIwdGhhdCUwQSUyMyUyMHRoZXJlJTIwbWlnaHQlMjBiZSUyMG1vcmUlMjBwcmVkaWN0ZWQlMjB0b2tlbiUyMGNsYXNzZXMlMjB0aGFuJTIwd29yZHMuJTBBJTIzJTIwTXVsdGlwbGUlMjB0b2tlbiUyMGNsYXNzZXMlMjBtaWdodCUyMGFjY291bnQlMjBmb3IlMjB0aGUlMjBzYW1lJTIwd29yZCUwQXByZWRpY3RlZF90b2tlbnNfY2xhc3NlcyUyMCUzRCUyMCU1Qm1vZGVsLmNvbmZpZy5pZDJsYWJlbCU1QnQuaXRlbSgpJTVEJTIwZm9yJTIwdCUyMGluJTIwcHJlZGljdGVkX3Rva2VuX2NsYXNzX2lkcyU1QjAlNUQlNUQlMEElMEFsYWJlbHMlMjAlM0QlMjBwcmVkaWN0ZWRfdG9rZW5fY2xhc3NfaWRzJTBBbG9zcyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKS5sb3Nz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, Data2VecTextForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecTextForTokenClassification.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss`,wrap:!1}}),{c(){e=d("p"),e.textContent=u,n=r(),_(a.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),h(e)!=="svelte-11lpom8"&&(e.textContent=u),n=i(t),b(a.$$.fragment,t)},m(t,w){m(t,e,w),m(t,n,w),y(a,t,w),f=!0},p:F,i(t){f||(T(a.$$.fragment,t),f=!0)},o(t){M(a.$$.fragment,t),f=!1},d(t){t&&(l(e),l(n)),v(a,t)}}}function Ni(k){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=u},l(n){e=c(n,"P",{"data-svelte-h":!0}),h(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(n,a){m(n,e,a)},p:F,d(n){n&&l(e)}}}function Bi(k){let e,u="Example:",n,a,f;return a=new ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBEYXRhMlZlY1RleHRGb3JRdWVzdGlvbkFuc3dlcmluZyUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZkYXRhMnZlYy10ZXh0LWJhc2UlMjIpJTBBbW9kZWwlMjAlM0QlMjBEYXRhMlZlY1RleHRGb3JRdWVzdGlvbkFuc3dlcmluZy5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZkYXRhMnZlYy10ZXh0LWJhc2UlMjIpJTBBJTBBcXVlc3Rpb24lMkMlMjB0ZXh0JTIwJTNEJTIwJTIyV2hvJTIwd2FzJTIwSmltJTIwSGVuc29uJTNGJTIyJTJDJTIwJTIySmltJTIwSGVuc29uJTIwd2FzJTIwYSUyMG5pY2UlMjBwdXBwZXQlMjIlMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIocXVlc3Rpb24lMkMlMjB0ZXh0JTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQWFuc3dlcl9zdGFydF9pbmRleCUyMCUzRCUyMG91dHB1dHMuc3RhcnRfbG9naXRzLmFyZ21heCgpJTBBYW5zd2VyX2VuZF9pbmRleCUyMCUzRCUyMG91dHB1dHMuZW5kX2xvZ2l0cy5hcmdtYXgoKSUwQSUwQXByZWRpY3RfYW5zd2VyX3Rva2VucyUyMCUzRCUyMGlucHV0cy5pbnB1dF9pZHMlNUIwJTJDJTIwYW5zd2VyX3N0YXJ0X2luZGV4JTIwJTNBJTIwYW5zd2VyX2VuZF9pbmRleCUyMCUyQiUyMDElNUQlMEElMEElMjMlMjB0YXJnZXQlMjBpcyUyMCUyMm5pY2UlMjBwdXBwZXQlMjIlMEF0YXJnZXRfc3RhcnRfaW5kZXglMjAlM0QlMjB0b3JjaC50ZW5zb3IoJTVCMTQlNUQpJTBBdGFyZ2V0X2VuZF9pbmRleCUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUIxNSU1RCklMEElMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMlMkMlMjBzdGFydF9wb3NpdGlvbnMlM0R0YXJnZXRfc3RhcnRfaW5kZXglMkMlMjBlbmRfcG9zaXRpb25zJTNEdGFyZ2V0X2VuZF9pbmRleCklMEFsb3NzJTIwJTNEJTIwb3V0cHV0cy5sb3Nz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, Data2VecTextForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecTextForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-text-base&quot;</span>)

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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`,wrap:!1}}),{c(){e=d("p"),e.textContent=u,n=r(),_(a.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),h(e)!=="svelte-11lpom8"&&(e.textContent=u),n=i(t),b(a.$$.fragment,t)},m(t,w){m(t,e,w),m(t,n,w),y(a,t,w),f=!0},p:F,i(t){f||(T(a.$$.fragment,t),f=!0)},o(t){M(a.$$.fragment,t),f=!1},d(t){t&&(l(e),l(n)),v(a,t)}}}function Xi(k){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=u},l(n){e=c(n,"P",{"data-svelte-h":!0}),h(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(n,a){m(n,e,a)},p:F,d(n){n&&l(e)}}}function qi(k){let e,u="Example:",n,a,f;return a=new ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9JbWFnZVByb2Nlc3NvciUyQyUyMERhdGEyVmVjVmlzaW9uTW9kZWwlMEFpbXBvcnQlMjB0b3JjaCUwQWZyb20lMjBkYXRhc2V0cyUyMGltcG9ydCUyMGxvYWRfZGF0YXNldCUwQSUwQWRhdGFzZXQlMjAlM0QlMjBsb2FkX2RhdGFzZXQoJTIyaHVnZ2luZ2ZhY2UlMkZjYXRzLWltYWdlJTIyKSUwQWltYWdlJTIwJTNEJTIwZGF0YXNldCU1QiUyMnRlc3QlMjIlNUQlNUIlMjJpbWFnZSUyMiU1RCU1QjAlNUQlMEElMEFpbWFnZV9wcm9jZXNzb3IlMjAlM0QlMjBBdXRvSW1hZ2VQcm9jZXNzb3IuZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGZGF0YTJ2ZWMtdmlzaW9uLWJhc2UlMjIpJTBBbW9kZWwlMjAlM0QlMjBEYXRhMlZlY1Zpc2lvbk1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmRhdGEydmVjLXZpc2lvbi1iYXNlJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMGltYWdlX3Byb2Nlc3NvcihpbWFnZSUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMG91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMEFsYXN0X2hpZGRlbl9zdGF0ZXMlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRlJTBBbGlzdChsYXN0X2hpZGRlbl9zdGF0ZXMuc2hhcGUp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoImageProcessor, Data2VecVisionModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>image_processor = AutoImageProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-vision-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecVisionModel.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-vision-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = image_processor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`,wrap:!1}}),{c(){e=d("p"),e.textContent=u,n=r(),_(a.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),h(e)!=="svelte-11lpom8"&&(e.textContent=u),n=i(t),b(a.$$.fragment,t)},m(t,w){m(t,e,w),m(t,n,w),y(a,t,w),f=!0},p:F,i(t){f||(T(a.$$.fragment,t),f=!0)},o(t){M(a.$$.fragment,t),f=!1},d(t){t&&(l(e),l(n)),v(a,t)}}}function Ai(k){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=u},l(n){e=c(n,"P",{"data-svelte-h":!0}),h(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(n,a){m(n,e,a)},p:F,d(n){n&&l(e)}}}function Li(k){let e,u="Example:",n,a,f;return a=new ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9JbWFnZVByb2Nlc3NvciUyQyUyMERhdGEyVmVjVmlzaW9uRm9ySW1hZ2VDbGFzc2lmaWNhdGlvbiUwQWltcG9ydCUyMHRvcmNoJTBBZnJvbSUyMGRhdGFzZXRzJTIwaW1wb3J0JTIwbG9hZF9kYXRhc2V0JTBBJTBBZGF0YXNldCUyMCUzRCUyMGxvYWRfZGF0YXNldCglMjJodWdnaW5nZmFjZSUyRmNhdHMtaW1hZ2UlMjIpJTBBaW1hZ2UlMjAlM0QlMjBkYXRhc2V0JTVCJTIydGVzdCUyMiU1RCU1QiUyMmltYWdlJTIyJTVEJTVCMCU1RCUwQSUwQWltYWdlX3Byb2Nlc3NvciUyMCUzRCUyMEF1dG9JbWFnZVByb2Nlc3Nvci5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZkYXRhMnZlYy12aXNpb24tYmFzZS1mdDFrJTIyKSUwQW1vZGVsJTIwJTNEJTIwRGF0YTJWZWNWaXNpb25Gb3JJbWFnZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmRhdGEydmVjLXZpc2lvbi1iYXNlLWZ0MWslMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwaW1hZ2VfcHJvY2Vzc29yKGltYWdlJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEElMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQSUyMyUyMG1vZGVsJTIwcHJlZGljdHMlMjBvbmUlMjBvZiUyMHRoZSUyMDEwMDAlMjBJbWFnZU5ldCUyMGNsYXNzZXMlMEFwcmVkaWN0ZWRfbGFiZWwlMjAlM0QlMjBsb2dpdHMuYXJnbWF4KC0xKS5pdGVtKCklMEFwcmludChtb2RlbC5jb25maWcuaWQybGFiZWwlNUJwcmVkaWN0ZWRfbGFiZWwlNUQp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoImageProcessor, Data2VecVisionForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>image_processor = AutoImageProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-vision-base-ft1k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecVisionForImageClassification.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-vision-base-ft1k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = image_processor(image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
remote control, remote`,wrap:!1}}),{c(){e=d("p"),e.textContent=u,n=r(),_(a.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),h(e)!=="svelte-11lpom8"&&(e.textContent=u),n=i(t),b(a.$$.fragment,t)},m(t,w){m(t,e,w),m(t,n,w),y(a,t,w),f=!0},p:F,i(t){f||(T(a.$$.fragment,t),f=!0)},o(t){M(a.$$.fragment,t),f=!1},d(t){t&&(l(e),l(n)),v(a,t)}}}function Hi(k){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=u},l(n){e=c(n,"P",{"data-svelte-h":!0}),h(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(n,a){m(n,e,a)},p:F,d(n){n&&l(e)}}}function Yi(k){let e,u="Examples:",n,a,f;return a=new ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9JbWFnZVByb2Nlc3NvciUyQyUyMERhdGEyVmVjVmlzaW9uRm9yU2VtYW50aWNTZWdtZW50YXRpb24lMEFmcm9tJTIwUElMJTIwaW1wb3J0JTIwSW1hZ2UlMEFpbXBvcnQlMjByZXF1ZXN0cyUwQSUwQXVybCUyMCUzRCUyMCUyMmh0dHAlM0ElMkYlMkZpbWFnZXMuY29jb2RhdGFzZXQub3JnJTJGdmFsMjAxNyUyRjAwMDAwMDAzOTc2OS5qcGclMjIlMEFpbWFnZSUyMCUzRCUyMEltYWdlLm9wZW4ocmVxdWVzdHMuZ2V0KHVybCUyQyUyMHN0cmVhbSUzRFRydWUpLnJhdyklMEElMEFpbWFnZV9wcm9jZXNzb3IlMjAlM0QlMjBBdXRvSW1hZ2VQcm9jZXNzb3IuZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGZGF0YTJ2ZWMtdmlzaW9uLWJhc2UlMjIpJTBBbW9kZWwlMjAlM0QlMjBEYXRhMlZlY1Zpc2lvbkZvclNlbWFudGljU2VnbWVudGF0aW9uLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmRhdGEydmVjLXZpc2lvbi1iYXNlJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMGltYWdlX3Byb2Nlc3NvcihpbWFnZXMlM0RpbWFnZSUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUyMyUyMGxvZ2l0cyUyMGFyZSUyMG9mJTIwc2hhcGUlMjAoYmF0Y2hfc2l6ZSUyQyUyMG51bV9sYWJlbHMlMkMlMjBoZWlnaHQlMkMlMjB3aWR0aCklMEFsb2dpdHMlMjAlM0QlMjBvdXRwdXRzLmxvZ2l0cw==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoImageProcessor, Data2VecVisionForSemanticSegmentation
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>image_processor = AutoImageProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-vision-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = Data2VecVisionForSemanticSegmentation.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-vision-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = image_processor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># logits are of shape (batch_size, num_labels, height, width)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=d("p"),e.textContent=u,n=r(),_(a.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),h(e)!=="svelte-kvfsh7"&&(e.textContent=u),n=i(t),b(a.$$.fragment,t)},m(t,w){m(t,e,w),m(t,n,w),y(a,t,w),f=!0},p:F,i(t){f||(T(a.$$.fragment,t),f=!0)},o(t){M(a.$$.fragment,t),f=!1},d(t){t&&(l(e),l(n)),v(a,t)}}}function Si(k){let e,u,n,a,f,t,w=`The bare Data2VecAudio Model transformer outputting raw hidden-states without any specific head on top.
Data2VecAudio was proposed in <a href="https://arxiv.org/pdf/2202.03555" rel="nofollow">data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language</a> by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`,te,D,I=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`,oe,W,G=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,R,V,C,Ae,we,co='The <a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecAudioModel">Data2VecAudioModel</a> forward method, overrides the <code>__call__</code> special method.',ke,re,Le,he,ie,Ve,N,X,Ge,fe,st,rt="Data2VecAudio Model with a frame classification head on top for tasks like Speaker Diarization.",_t,it,lt=`Data2VecAudio was proposed in <a href="https://arxiv.org/pdf/2202.03555" rel="nofollow">data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language</a> by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`,He,je,mo=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`,xe,ge,_e=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,Ie,E,$e,Gt,be,dt='The <a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecAudioForAudioFrameClassification">Data2VecAudioForAudioFrameClassification</a> forward method, overrides the <code>__call__</code> special method.',Vt,Y,It,ne,Ce,q,Fe,L,Je,Rt,ye,jt=`Data2VecAudio Model with a <code>language modeling</code> head on top for Connectionist Temporal Classification (CTC).
Data2VecAudio was proposed in <a href="https://arxiv.org/pdf/2202.03555" rel="nofollow">data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language</a> by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`,Nt,Te,ct=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`,le,Me,Ye=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,mt,A,ce,pt,Re,po='The <a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecAudioForCTC">Data2VecAudioForCTC</a> forward method, overrides the <code>__call__</code> special method.',Ne,P,Se,O,Q,j,$,z,H,me,B,Ue=`Data2VecAudio Model with a sequence classification head on top (a linear layer over the pooled output) for tasks
like SUPERB Keyword Spotting.`,ro,ve,io=`Data2VecAudio was proposed in <a href="https://arxiv.org/pdf/2202.03555" rel="nofollow">data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language</a> by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`,ut,Bt,ht=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`,Xt,lo,uo=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,Tn,Be,Xe,go,Ee,No='The <a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecAudioForSequenceClassification">Data2VecAudioForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',ho,bt,p,x,qe,pe,ft,de,Bo,za,Mn,cr="Data2VecAudio Model with an XVector feature extraction head on top for tasks like Speaker Verification.",Ga,vn,mr=`Data2VecAudio was proposed in <a href="https://arxiv.org/pdf/2202.03555" rel="nofollow">data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language</a> by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`,Ia,wn,pr=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving etc.).`,Ra,kn,ur=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,Na,xt,Xo,Ba,Vn,hr='The <a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecAudioForXVector">Data2VecAudioForXVector</a> forward method, overrides the <code>__call__</code> special method.',Xa,_o,qa,bo,fa,qo,ga,ae,Ao,Aa,jn,fr=`The bare Data2VecText Model for text transformer outputting raw hidden-states without any specific head on top.
Data2VecText was proposed in <a href="https://arxiv.org/pdf/2202.03555" rel="nofollow">data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language</a> by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`,La,xn,gr=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Ha,$n,_r=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Ya,Cn,br=`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in <em>Attention is
all you need</em>_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`,Sa,Fn,yr=`To behave as an decoder the model needs to be initialized with the <code>is_decoder</code> argument of the configuration set
to <code>True</code>. To be used in a Seq2Seq model, the model needs to initialized with both <code>is_decoder</code> argument and
<code>add_cross_attention</code> set to <code>True</code>; an <code>encoder_hidden_states</code> is then expected as an input to the forward pass.`,Ea,Jn,Tr='.. _<em>Attention is all you need</em>: <a href="https://arxiv.org/abs/1706.03762" rel="nofollow">https://arxiv.org/abs/1706.03762</a>',Qa,$t,Lo,Pa,Un,Mr='The <a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecTextModel">Data2VecTextModel</a> forward method, overrides the <code>__call__</code> special method.',Oa,yo,Ka,To,_a,Ho,ba,Qe,Yo,es,Zn,vr=`Data2VecText Model with a <code>language modeling</code> head on top for CLM fine-tuning.
Data2VecText was proposed in <a href="https://arxiv.org/pdf/2202.03555" rel="nofollow">data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language</a> by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`,ts,Wn,wr=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,os,Dn,kr=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,ns,Ct,So,as,zn,Vr='The <a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecTextForCausalLM">Data2VecTextForCausalLM</a> forward method, overrides the <code>__call__</code> special method.',ss,Mo,rs,vo,ya,Eo,Ta,Pe,Qo,is,Gn,jr=`data2vec Model with a <code>language modeling</code> head on top.
Data2VecText was proposed in <a href="https://arxiv.org/pdf/2202.03555" rel="nofollow">data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language</a> by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`,ls,In,xr=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,ds,Rn,$r=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,cs,Ft,Po,ms,Nn,Cr='The <a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecTextForMaskedLM">Data2VecTextForMaskedLM</a> forward method, overrides the <code>__call__</code> special method.',ps,wo,us,ko,Ma,Oo,va,Ze,Ko,hs,Bn,Fr=`Data2VecText Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`,fs,Xn,Jr=`Data2VecText was proposed in <a href="https://arxiv.org/pdf/2202.03555" rel="nofollow">data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language</a> by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`,gs,qn,Ur=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,_s,An,Zr=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,bs,gt,en,ys,Ln,Wr='The <a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecTextForSequenceClassification">Data2VecTextForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',Ts,Vo,Ms,jo,vs,xo,wa,tn,ka,We,on,ws,Hn,Dr=`Data2VecText Model with a multiple choice classification head on top (a linear layer on top of the pooled output
and a softmax) e.g. for RocStories/SWAG tasks.`,ks,Yn,zr=`Data2VecText was proposed in <a href="https://arxiv.org/pdf/2202.03555" rel="nofollow">data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language</a> by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`,Vs,Sn,Gr=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,js,En,Ir=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,xs,Jt,nn,$s,Qn,Rr='The <a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecTextForMultipleChoice">Data2VecTextForMultipleChoice</a> forward method, overrides the <code>__call__</code> special method.',Cs,$o,Fs,Co,Va,an,ja,De,sn,Js,Pn,Nr=`Data2VecText Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`,Us,On,Br=`Data2VecText was proposed in <a href="https://arxiv.org/pdf/2202.03555" rel="nofollow">data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language</a> by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`,Zs,Kn,Xr=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Ws,ea,qr=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Ds,Ut,rn,zs,ta,Ar='The <a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecTextForTokenClassification">Data2VecTextForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',Gs,Fo,Is,Jo,xa,ln,$a,ze,dn,Rs,oa,Lr=`Data2VecText Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,Ns,na,Hr=`Data2VecText was proposed in <a href="https://arxiv.org/pdf/2202.03555" rel="nofollow">data2vec: A General Framework for Self-supervised Learning in Speech, Vision and
Language</a> by Alexei Baevski, Wei-Ning Hsu, Qiantong Xu, Arun Babu, Jiatao Gu and
Michael Auli.`,Bs,aa,Yr=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Xs,sa,Sr=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,qs,Zt,cn,As,ra,Er='The <a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecTextForQuestionAnswering">Data2VecTextForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',Ls,Uo,Hs,Zo,Ca,mn,Fa,qt,pn,Ys,ia,Qr=`The bare Data2VecVision Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,Ss,Wt,un,Es,la,Pr='The <a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecVisionModel">Data2VecVisionModel</a> forward method, overrides the <code>__call__</code> special method.',Qs,Wo,Ps,Do,Ja,hn,Ua,yt,fn,Os,da,Or=`Data2VecVision Model transformer with an image classification head on top (a linear layer on top of the average of
the final hidden states of the patch tokens) e.g. for ImageNet.`,Ks,ca,Kr=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,er,Dt,gn,tr,ma,ei='The <a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecVisionForImageClassification">Data2VecVisionForImageClassification</a> forward method, overrides the <code>__call__</code> special method.',or,zo,nr,Go,Za,_n,Wa,Tt,bn,ar,pa,ti="Data2VecVision Model transformer with a semantic segmentation head on top e.g. for ADE20k, CityScapes.",sr,ua,oi=`This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,rr,zt,yn,ir,ha,ni='The <a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecVisionForSemanticSegmentation">Data2VecVisionForSemanticSegmentation</a> forward method, overrides the <code>__call__</code> special method.',lr,Io,dr,Ro,Da;return e=new S({props:{title:"Data2VecAudioModel",local:"transformers.Data2VecAudioModel",headingTag:"h2"}}),a=new Z({props:{name:"class transformers.Data2VecAudioModel",anchor:"transformers.Data2VecAudioModel",parameters:[{name:"config",val:": Data2VecAudioConfig"}],parametersDescription:[{anchor:"transformers.Data2VecAudioModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecAudioConfig">Data2VecAudioConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_audio.py#L818"}}),C=new Z({props:{name:"forward",anchor:"transformers.Data2VecAudioModel.forward",parameters:[{name:"input_values",val:": Optional"},{name:"attention_mask",val:": Optional = None"},{name:"mask_time_indices",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.Data2VecAudioModel.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoProcessor">AutoProcessor</a> should be used for padding and
conversion into a tensor of type <em>torch.FloatTensor</em>. See <code>Wav2Vec2Processor.__call__()</code> for details.`,name:"input_values"},{anchor:"transformers.Data2VecAudioModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should be passed if the corresponding processor has <code>config.return_attention_mask == True</code>, which is the case for all pre-trained Data2Vec Audio models. Be aware that that even with
<code>attention_mask</code>, zero-padded inputs will have slightly different outputs compared to non-padded inputs
because there are more than one convolutional layer in the positional encodings. For a more detailed
explanation, see <a href="https://github.com/huggingface/transformers/issues/25621#issuecomment-1713759349" rel="nofollow">here</a>.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.Data2VecAudioModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Data2VecAudioModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Data2VecAudioModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_audio.py#L893",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.Wav2Vec2BaseModelOutput"
>transformers.modeling_outputs.Wav2Vec2BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecAudioConfig"
>Data2VecAudioConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>extract_features</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, conv_dim[-1])</code>) — Sequence of extracted feature vectors of the last convolutional layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.Wav2Vec2BaseModelOutput"
>transformers.modeling_outputs.Wav2Vec2BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),re=new se({props:{$$slots:{default:[_i]},$$scope:{ctx:k}}}),he=new K({props:{anchor:"transformers.Data2VecAudioModel.forward.example",$$slots:{default:[bi]},$$scope:{ctx:k}}}),Ve=new S({props:{title:"Data2VecAudioForAudioFrameClassification",local:"transformers.Data2VecAudioForAudioFrameClassification",headingTag:"h2"}}),Ge=new Z({props:{name:"class transformers.Data2VecAudioForAudioFrameClassification",anchor:"transformers.Data2VecAudioForAudioFrameClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Data2VecAudioForAudioFrameClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecAudioConfig">Data2VecAudioConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_audio.py#L1202"}}),$e=new Z({props:{name:"forward",anchor:"transformers.Data2VecAudioForAudioFrameClassification.forward",parameters:[{name:"input_values",val:": Optional"},{name:"attention_mask",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.Data2VecAudioForAudioFrameClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoProcessor">AutoProcessor</a> should be used for padding and
conversion into a tensor of type <em>torch.FloatTensor</em>. See <code>Wav2Vec2Processor.__call__()</code> for details.`,name:"input_values"},{anchor:"transformers.Data2VecAudioForAudioFrameClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should be passed if the corresponding processor has <code>config.return_attention_mask == True</code>, which is the case for all pre-trained Data2Vec Audio models. Be aware that that even with
<code>attention_mask</code>, zero-padded inputs will have slightly different outputs compared to non-padded inputs
because there are more than one convolutional layer in the positional encodings. For a more detailed
explanation, see <a href="https://github.com/huggingface/transformers/issues/25621#issuecomment-1713759349" rel="nofollow">here</a>.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.Data2VecAudioForAudioFrameClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Data2VecAudioForAudioFrameClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Data2VecAudioForAudioFrameClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecAudioForAudioFrameClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_audio.py#L1253",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecAudioConfig"
>Data2VecAudioConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Y=new se({props:{$$slots:{default:[yi]},$$scope:{ctx:k}}}),ne=new K({props:{anchor:"transformers.Data2VecAudioForAudioFrameClassification.forward.example",$$slots:{default:[Ti]},$$scope:{ctx:k}}}),q=new S({props:{title:"Data2VecAudioForCTC",local:"transformers.Data2VecAudioForCTC",headingTag:"h2"}}),Je=new Z({props:{name:"class transformers.Data2VecAudioForCTC",anchor:"transformers.Data2VecAudioForCTC",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Data2VecAudioForCTC.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecAudioConfig">Data2VecAudioConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_audio.py#L954"}}),ce=new Z({props:{name:"forward",anchor:"transformers.Data2VecAudioForCTC.forward",parameters:[{name:"input_values",val:": Optional"},{name:"attention_mask",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"labels",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.Data2VecAudioForCTC.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoProcessor">AutoProcessor</a> should be used for padding and
conversion into a tensor of type <em>torch.FloatTensor</em>. See <code>Wav2Vec2Processor.__call__()</code> for details.`,name:"input_values"},{anchor:"transformers.Data2VecAudioForCTC.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should be passed if the corresponding processor has <code>config.return_attention_mask == True</code>, which is the case for all pre-trained Data2Vec Audio models. Be aware that that even with
<code>attention_mask</code>, zero-padded inputs will have slightly different outputs compared to non-padded inputs
because there are more than one convolutional layer in the positional encodings. For a more detailed
explanation, see <a href="https://github.com/huggingface/transformers/issues/25621#issuecomment-1713759349" rel="nofollow">here</a>.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.Data2VecAudioForCTC.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Data2VecAudioForCTC.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Data2VecAudioForCTC.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecAudioForCTC.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_length)</code>, <em>optional</em>) &#x2014;
Labels for connectionist temporal classification. Note that <code>target_length</code> has to be smaller or equal to
the sequence length of the output logits. Indices are selected in <code>[-100, 0, ..., config.vocab_size - 1]</code>.
All labels set to <code>-100</code> are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_audio.py#L999",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecAudioConfig"
>Data2VecAudioConfig</a>) and inputs.</p>
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
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),P=new se({props:{$$slots:{default:[Mi]},$$scope:{ctx:k}}}),O=new K({props:{anchor:"transformers.Data2VecAudioForCTC.forward.example",$$slots:{default:[vi]},$$scope:{ctx:k}}}),j=new S({props:{title:"Data2VecAudioForSequenceClassification",local:"transformers.Data2VecAudioForSequenceClassification",headingTag:"h2"}}),H=new Z({props:{name:"class transformers.Data2VecAudioForSequenceClassification",anchor:"transformers.Data2VecAudioForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Data2VecAudioForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecAudioConfig">Data2VecAudioConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_audio.py#L1080"}}),Xe=new Z({props:{name:"forward",anchor:"transformers.Data2VecAudioForSequenceClassification.forward",parameters:[{name:"input_values",val:": Optional"},{name:"attention_mask",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"labels",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.Data2VecAudioForSequenceClassification.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoProcessor">AutoProcessor</a> should be used for padding and
conversion into a tensor of type <em>torch.FloatTensor</em>. See <code>Wav2Vec2Processor.__call__()</code> for details.`,name:"input_values"},{anchor:"transformers.Data2VecAudioForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should be passed if the corresponding processor has <code>config.return_attention_mask == True</code>, which is the case for all pre-trained Data2Vec Audio models. Be aware that that even with
<code>attention_mask</code>, zero-padded inputs will have slightly different outputs compared to non-padded inputs
because there are more than one convolutional layer in the positional encodings. For a more detailed
explanation, see <a href="https://github.com/huggingface/transformers/issues/25621#issuecomment-1713759349" rel="nofollow">here</a>.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.Data2VecAudioForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Data2VecAudioForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Data2VecAudioForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecAudioForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_audio.py#L1132",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecAudioConfig"
>Data2VecAudioConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bt=new se({props:{$$slots:{default:[wi]},$$scope:{ctx:k}}}),x=new K({props:{anchor:"transformers.Data2VecAudioForSequenceClassification.forward.example",$$slots:{default:[ki]},$$scope:{ctx:k}}}),pe=new S({props:{title:"Data2VecAudioForXVector",local:"transformers.Data2VecAudioForXVector",headingTag:"h2"}}),Bo=new Z({props:{name:"class transformers.Data2VecAudioForXVector",anchor:"transformers.Data2VecAudioForXVector",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Data2VecAudioForXVector.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecAudioConfig">Data2VecAudioConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_audio.py#L1371"}}),Xo=new Z({props:{name:"forward",anchor:"transformers.Data2VecAudioForXVector.forward",parameters:[{name:"input_values",val:": Optional"},{name:"attention_mask",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"labels",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.Data2VecAudioForXVector.forward.input_values",description:`<strong>input_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Float values of input raw speech waveform. Values can be obtained by loading a <em>.flac</em> or <em>.wav</em> audio file
into an array of type <em>List[float]</em> or a <em>numpy.ndarray</em>, <em>e.g.</em> via the soundfile library (<em>pip install
soundfile</em>). To prepare the array into <em>input_values</em>, the <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoProcessor">AutoProcessor</a> should be used for padding and
conversion into a tensor of type <em>torch.FloatTensor</em>. See <code>Wav2Vec2Processor.__call__()</code> for details.`,name:"input_values"},{anchor:"transformers.Data2VecAudioForXVector.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
<div class="course-tip course-tip-orange bg-gradient-to-br dark:bg-gradient-to-r before:border-orange-500 dark:before:border-orange-800 from-orange-50 dark:from-gray-900 to-white dark:to-gray-950 border border-orange-50 text-orange-700 dark:text-gray-400">
						
<p><code>attention_mask</code> should be passed if the corresponding processor has <code>config.return_attention_mask == True</code>, which is the case for all pre-trained Data2Vec Audio models. Be aware that that even with
<code>attention_mask</code>, zero-padded inputs will have slightly different outputs compared to non-padded inputs
because there are more than one convolutional layer in the positional encodings. For a more detailed
explanation, see <a href="https://github.com/huggingface/transformers/issues/25621#issuecomment-1713759349" rel="nofollow">here</a>.</p>

					</div>`,name:"attention_mask"},{anchor:"transformers.Data2VecAudioForXVector.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Data2VecAudioForXVector.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Data2VecAudioForXVector.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecAudioForXVector.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_audio.py#L1439",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.XVectorOutput"
>transformers.modeling_outputs.XVectorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecAudioConfig"
>Data2VecAudioConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.xvector_output_dim)</code>) — Classification hidden states before AMSoftmax.</p>
</li>
<li>
<p><strong>embeddings</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.xvector_output_dim)</code>) — Utterance embeddings used for vector similarity-based retrieval.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.XVectorOutput"
>transformers.modeling_outputs.XVectorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_o=new se({props:{$$slots:{default:[Vi]},$$scope:{ctx:k}}}),bo=new K({props:{anchor:"transformers.Data2VecAudioForXVector.forward.example",$$slots:{default:[ji]},$$scope:{ctx:k}}}),qo=new S({props:{title:"Data2VecTextModel",local:"transformers.Data2VecTextModel",headingTag:"h2"}}),Ao=new Z({props:{name:"class transformers.Data2VecTextModel",anchor:"transformers.Data2VecTextModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.Data2VecTextModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecTextConfig">Data2VecTextConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_text.py#L681"}}),Lo=new Z({props:{name:"forward",anchor:"transformers.Data2VecTextModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.Data2VecTextModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.Data2VecTextModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Data2VecTextModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.Data2VecTextModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.Data2VecTextModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Data2VecTextModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.Data2VecTextModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Data2VecTextModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Data2VecTextModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecTextModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.Data2VecTextModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.Data2VecTextModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.Data2VecTextModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_text.py#L727",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecTextConfig"
>Data2VecTextConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),yo=new se({props:{$$slots:{default:[xi]},$$scope:{ctx:k}}}),To=new K({props:{anchor:"transformers.Data2VecTextModel.forward.example",$$slots:{default:[$i]},$$scope:{ctx:k}}}),Ho=new S({props:{title:"Data2VecTextForCausalLM",local:"transformers.Data2VecTextForCausalLM",headingTag:"h2"}}),Yo=new Z({props:{name:"class transformers.Data2VecTextForCausalLM",anchor:"transformers.Data2VecTextForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Data2VecTextForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecTextConfig">Data2VecTextConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_text.py#L865"}}),So=new Z({props:{name:"forward",anchor:"transformers.Data2VecTextForCausalLM.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.Data2VecTextForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.Data2VecTextForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Data2VecTextForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.Data2VecTextForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.Data2VecTextForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Data2VecTextForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.Data2VecTextForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Data2VecTextForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Data2VecTextForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecTextForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.Data2VecTextForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.Data2VecTextForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.Data2VecTextForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.Data2VecTextForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_text.py#L889",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecTextConfig"
>Data2VecTextConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Mo=new se({props:{$$slots:{default:[Ci]},$$scope:{ctx:k}}}),vo=new K({props:{anchor:"transformers.Data2VecTextForCausalLM.forward.example",$$slots:{default:[Fi]},$$scope:{ctx:k}}}),Eo=new S({props:{title:"Data2VecTextForMaskedLM",local:"transformers.Data2VecTextForMaskedLM",headingTag:"h2"}}),Qo=new Z({props:{name:"class transformers.Data2VecTextForMaskedLM",anchor:"transformers.Data2VecTextForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Data2VecTextForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecTextConfig">Data2VecTextConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_text.py#L1027"}}),Po=new Z({props:{name:"forward",anchor:"transformers.Data2VecTextForMaskedLM.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.Data2VecTextForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.Data2VecTextForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Data2VecTextForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.Data2VecTextForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.Data2VecTextForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Data2VecTextForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.Data2VecTextForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Data2VecTextForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Data2VecTextForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecTextForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.Data2VecTextForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_text.py#L1052",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecTextConfig"
>Data2VecTextConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),wo=new se({props:{$$slots:{default:[Ji]},$$scope:{ctx:k}}}),ko=new K({props:{anchor:"transformers.Data2VecTextForMaskedLM.forward.example",$$slots:{default:[Ui]},$$scope:{ctx:k}}}),Oo=new S({props:{title:"Data2VecTextForSequenceClassification",local:"transformers.Data2VecTextForSequenceClassification",headingTag:"h2"}}),Ko=new Z({props:{name:"class transformers.Data2VecTextForSequenceClassification",anchor:"transformers.Data2VecTextForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Data2VecTextForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecTextConfig">Data2VecTextConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_text.py#L1151"}}),en=new Z({props:{name:"forward",anchor:"transformers.Data2VecTextForSequenceClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.Data2VecTextForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.Data2VecTextForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Data2VecTextForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.Data2VecTextForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.Data2VecTextForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Data2VecTextForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.Data2VecTextForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Data2VecTextForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Data2VecTextForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecTextForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_text.py#L1170",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecTextConfig"
>Data2VecTextConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vo=new se({props:{$$slots:{default:[Zi]},$$scope:{ctx:k}}}),jo=new K({props:{anchor:"transformers.Data2VecTextForSequenceClassification.forward.example",$$slots:{default:[Wi]},$$scope:{ctx:k}}}),xo=new K({props:{anchor:"transformers.Data2VecTextForSequenceClassification.forward.example-2",$$slots:{default:[Di]},$$scope:{ctx:k}}}),tn=new S({props:{title:"Data2VecTextForMultipleChoice",local:"transformers.Data2VecTextForMultipleChoice",headingTag:"h2"}}),on=new Z({props:{name:"class transformers.Data2VecTextForMultipleChoice",anchor:"transformers.Data2VecTextForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Data2VecTextForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecTextConfig">Data2VecTextConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_text.py#L1248"}}),nn=new Z({props:{name:"forward",anchor:"transformers.Data2VecTextForMultipleChoice.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.Data2VecTextForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.Data2VecTextForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Data2VecTextForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.Data2VecTextForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.Data2VecTextForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Data2VecTextForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.Data2VecTextForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Data2VecTextForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Data2VecTextForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecTextForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_text.py#L1266",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecTextConfig"
>Data2VecTextConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$o=new se({props:{$$slots:{default:[zi]},$$scope:{ctx:k}}}),Co=new K({props:{anchor:"transformers.Data2VecTextForMultipleChoice.forward.example",$$slots:{default:[Gi]},$$scope:{ctx:k}}}),an=new S({props:{title:"Data2VecTextForTokenClassification",local:"transformers.Data2VecTextForTokenClassification",headingTag:"h2"}}),sn=new Z({props:{name:"class transformers.Data2VecTextForTokenClassification",anchor:"transformers.Data2VecTextForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Data2VecTextForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecTextConfig">Data2VecTextConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_text.py#L1342"}}),rn=new Z({props:{name:"forward",anchor:"transformers.Data2VecTextForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.Data2VecTextForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.Data2VecTextForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Data2VecTextForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.Data2VecTextForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.Data2VecTextForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Data2VecTextForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.Data2VecTextForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Data2VecTextForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Data2VecTextForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecTextForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_text.py#L1364",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecTextConfig"
>Data2VecTextConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fo=new se({props:{$$slots:{default:[Ii]},$$scope:{ctx:k}}}),Jo=new K({props:{anchor:"transformers.Data2VecTextForTokenClassification.forward.example",$$slots:{default:[Ri]},$$scope:{ctx:k}}}),ln=new S({props:{title:"Data2VecTextForQuestionAnswering",local:"transformers.Data2VecTextForQuestionAnswering",headingTag:"h2"}}),dn=new Z({props:{name:"class transformers.Data2VecTextForQuestionAnswering",anchor:"transformers.Data2VecTextForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.Data2VecTextForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecTextConfig">Data2VecTextConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_text.py#L1448"}}),cn=new Z({props:{name:"forward",anchor:"transformers.Data2VecTextForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"start_positions",val:": Optional = None"},{name:"end_positions",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.Data2VecTextForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.Data2VecTextForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.Data2VecTextForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.Data2VecTextForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.Data2VecTextForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Data2VecTextForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.Data2VecTextForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Data2VecTextForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Data2VecTextForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecTextForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.Data2VecTextForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_text.py#L1466",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecTextConfig"
>Data2VecTextConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Uo=new se({props:{$$slots:{default:[Ni]},$$scope:{ctx:k}}}),Zo=new K({props:{anchor:"transformers.Data2VecTextForQuestionAnswering.forward.example",$$slots:{default:[Bi]},$$scope:{ctx:k}}}),mn=new S({props:{title:"Data2VecVisionModel",local:"transformers.Data2VecVisionModel",headingTag:"h2"}}),pn=new Z({props:{name:"class transformers.Data2VecVisionModel",anchor:"transformers.Data2VecVisionModel",parameters:[{name:"config",val:": Data2VecVisionConfig"},{name:"add_pooling_layer",val:": bool = False"}],parametersDescription:[{anchor:"transformers.Data2VecVisionModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecVisionConfig">Data2VecVisionConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_vision.py#L631"}}),un=new Z({props:{name:"forward",anchor:"transformers.Data2VecVisionModel.forward",parameters:[{name:"pixel_values",val:": Optional = None"},{name:"bool_masked_pos",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.Data2VecVisionModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoImageProcessor">AutoImageProcessor</a>. See
<a href="/docs/transformers/main/ja/model_doc/beit#transformers.BeitFeatureExtractor.__call__">BeitImageProcessor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.Data2VecVisionModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Data2VecVisionModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Data2VecVisionModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Data2VecVisionModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecVisionModel.forward.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, num_patches)</code>, <em>optional</em>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_vision.py#L663",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.models.data2vec.modeling_data2vec_vision.Data2VecVisionModelOutputWithPooling</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecVisionConfig"
>Data2VecVisionConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) — Average of the last layer hidden states of the patch tokens (excluding the <em>[CLS]</em> token) if
<em>config.use_mean_pooling</em> is set to True. If set to False, then the final hidden state of the <em>[CLS]</em> token
will be returned.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.models.data2vec.modeling_data2vec_vision.Data2VecVisionModelOutputWithPooling</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Wo=new se({props:{$$slots:{default:[Xi]},$$scope:{ctx:k}}}),Do=new K({props:{anchor:"transformers.Data2VecVisionModel.forward.example",$$slots:{default:[qi]},$$scope:{ctx:k}}}),hn=new S({props:{title:"Data2VecVisionForImageClassification",local:"transformers.Data2VecVisionForImageClassification",headingTag:"h2"}}),fn=new Z({props:{name:"class transformers.Data2VecVisionForImageClassification",anchor:"transformers.Data2VecVisionForImageClassification",parameters:[{name:"config",val:": Data2VecVisionConfig"}],parametersDescription:[{anchor:"transformers.Data2VecVisionForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecVisionConfig">Data2VecVisionConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_vision.py#L745"}}),gn=new Z({props:{name:"forward",anchor:"transformers.Data2VecVisionForImageClassification.forward",parameters:[{name:"pixel_values",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.Data2VecVisionForImageClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoImageProcessor">AutoImageProcessor</a>. See
<a href="/docs/transformers/main/ja/model_doc/beit#transformers.BeitFeatureExtractor.__call__">BeitImageProcessor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.Data2VecVisionForImageClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Data2VecVisionForImageClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Data2VecVisionForImageClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Data2VecVisionForImageClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecVisionForImageClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_vision.py#L766",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.ImageClassifierOutput"
>transformers.modeling_outputs.ImageClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecVisionConfig"
>Data2VecVisionConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) — Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each stage) of shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states
(also called feature maps) of the model at the output of each stage.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, patch_size, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.ImageClassifierOutput"
>transformers.modeling_outputs.ImageClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),zo=new se({props:{$$slots:{default:[Ai]},$$scope:{ctx:k}}}),Go=new K({props:{anchor:"transformers.Data2VecVisionForImageClassification.forward.example",$$slots:{default:[Li]},$$scope:{ctx:k}}}),_n=new S({props:{title:"Data2VecVisionForSemanticSegmentation",local:"transformers.Data2VecVisionForSemanticSegmentation",headingTag:"h2"}}),bn=new Z({props:{name:"class transformers.Data2VecVisionForSemanticSegmentation",anchor:"transformers.Data2VecVisionForSemanticSegmentation",parameters:[{name:"config",val:": Data2VecVisionConfig"}],parametersDescription:[{anchor:"transformers.Data2VecVisionForSemanticSegmentation.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecVisionConfig">Data2VecVisionConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_vision.py#L1081"}}),yn=new Z({props:{name:"forward",anchor:"transformers.Data2VecVisionForSemanticSegmentation.forward",parameters:[{name:"pixel_values",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.Data2VecVisionForSemanticSegmentation.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoImageProcessor">AutoImageProcessor</a>. See
<a href="/docs/transformers/main/ja/model_doc/beit#transformers.BeitFeatureExtractor.__call__">BeitImageProcessor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.Data2VecVisionForSemanticSegmentation.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.Data2VecVisionForSemanticSegmentation.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.Data2VecVisionForSemanticSegmentation.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.Data2VecVisionForSemanticSegmentation.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.Data2VecVisionForSemanticSegmentation.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Ground truth semantic segmentation maps for computing the loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code>, a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_data2vec_vision.py#L1140",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.SemanticSegmenterOutput"
>transformers.modeling_outputs.SemanticSegmenterOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecVisionConfig"
>Data2VecVisionConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels, logits_height, logits_width)</code>) — Classification scores for each pixel.</p>
<Tip warning={true}>
<p>The logits returned do not necessarily have the same size as the <code>pixel_values</code> passed as inputs. This is
to avoid doing two interpolations and lose some quality when a user needs to resize the logits to the
original image size as post-processing. You should always check your logits shape and resize as needed.</p>
</Tip>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, patch_size, hidden_size)</code>.</p>
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_outputs.SemanticSegmenterOutput"
>transformers.modeling_outputs.SemanticSegmenterOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Io=new se({props:{$$slots:{default:[Hi]},$$scope:{ctx:k}}}),Ro=new K({props:{anchor:"transformers.Data2VecVisionForSemanticSegmentation.forward.example",$$slots:{default:[Yi]},$$scope:{ctx:k}}}),{c(){_(e.$$.fragment),u=r(),n=d("div"),_(a.$$.fragment),f=r(),t=d("p"),t.innerHTML=w,te=r(),D=d("p"),D.innerHTML=I,oe=r(),W=d("p"),W.innerHTML=G,R=r(),V=d("div"),_(C.$$.fragment),Ae=r(),we=d("p"),we.innerHTML=co,ke=r(),_(re.$$.fragment),Le=r(),_(he.$$.fragment),ie=r(),_(Ve.$$.fragment),N=r(),X=d("div"),_(Ge.$$.fragment),fe=r(),st=d("p"),st.textContent=rt,_t=r(),it=d("p"),it.innerHTML=lt,He=r(),je=d("p"),je.innerHTML=mo,xe=r(),ge=d("p"),ge.innerHTML=_e,Ie=r(),E=d("div"),_($e.$$.fragment),Gt=r(),be=d("p"),be.innerHTML=dt,Vt=r(),_(Y.$$.fragment),It=r(),_(ne.$$.fragment),Ce=r(),_(q.$$.fragment),Fe=r(),L=d("div"),_(Je.$$.fragment),Rt=r(),ye=d("p"),ye.innerHTML=jt,Nt=r(),Te=d("p"),Te.innerHTML=ct,le=r(),Me=d("p"),Me.innerHTML=Ye,mt=r(),A=d("div"),_(ce.$$.fragment),pt=r(),Re=d("p"),Re.innerHTML=po,Ne=r(),_(P.$$.fragment),Se=r(),_(O.$$.fragment),Q=r(),_(j.$$.fragment),$=r(),z=d("div"),_(H.$$.fragment),me=r(),B=d("p"),B.textContent=Ue,ro=r(),ve=d("p"),ve.innerHTML=io,ut=r(),Bt=d("p"),Bt.innerHTML=ht,Xt=r(),lo=d("p"),lo.innerHTML=uo,Tn=r(),Be=d("div"),_(Xe.$$.fragment),go=r(),Ee=d("p"),Ee.innerHTML=No,ho=r(),_(bt.$$.fragment),p=r(),_(x.$$.fragment),qe=r(),_(pe.$$.fragment),ft=r(),de=d("div"),_(Bo.$$.fragment),za=r(),Mn=d("p"),Mn.textContent=cr,Ga=r(),vn=d("p"),vn.innerHTML=mr,Ia=r(),wn=d("p"),wn.innerHTML=pr,Ra=r(),kn=d("p"),kn.innerHTML=ur,Na=r(),xt=d("div"),_(Xo.$$.fragment),Ba=r(),Vn=d("p"),Vn.innerHTML=hr,Xa=r(),_(_o.$$.fragment),qa=r(),_(bo.$$.fragment),fa=r(),_(qo.$$.fragment),ga=r(),ae=d("div"),_(Ao.$$.fragment),Aa=r(),jn=d("p"),jn.innerHTML=fr,La=r(),xn=d("p"),xn.innerHTML=gr,Ha=r(),$n=d("p"),$n.innerHTML=_r,Ya=r(),Cn=d("p"),Cn.innerHTML=br,Sa=r(),Fn=d("p"),Fn.innerHTML=yr,Ea=r(),Jn=d("p"),Jn.innerHTML=Tr,Qa=r(),$t=d("div"),_(Lo.$$.fragment),Pa=r(),Un=d("p"),Un.innerHTML=Mr,Oa=r(),_(yo.$$.fragment),Ka=r(),_(To.$$.fragment),_a=r(),_(Ho.$$.fragment),ba=r(),Qe=d("div"),_(Yo.$$.fragment),es=r(),Zn=d("p"),Zn.innerHTML=vr,ts=r(),Wn=d("p"),Wn.innerHTML=wr,os=r(),Dn=d("p"),Dn.innerHTML=kr,ns=r(),Ct=d("div"),_(So.$$.fragment),as=r(),zn=d("p"),zn.innerHTML=Vr,ss=r(),_(Mo.$$.fragment),rs=r(),_(vo.$$.fragment),ya=r(),_(Eo.$$.fragment),Ta=r(),Pe=d("div"),_(Qo.$$.fragment),is=r(),Gn=d("p"),Gn.innerHTML=jr,ls=r(),In=d("p"),In.innerHTML=xr,ds=r(),Rn=d("p"),Rn.innerHTML=$r,cs=r(),Ft=d("div"),_(Po.$$.fragment),ms=r(),Nn=d("p"),Nn.innerHTML=Cr,ps=r(),_(wo.$$.fragment),us=r(),_(ko.$$.fragment),Ma=r(),_(Oo.$$.fragment),va=r(),Ze=d("div"),_(Ko.$$.fragment),hs=r(),Bn=d("p"),Bn.textContent=Fr,fs=r(),Xn=d("p"),Xn.innerHTML=Jr,gs=r(),qn=d("p"),qn.innerHTML=Ur,_s=r(),An=d("p"),An.innerHTML=Zr,bs=r(),gt=d("div"),_(en.$$.fragment),ys=r(),Ln=d("p"),Ln.innerHTML=Wr,Ts=r(),_(Vo.$$.fragment),Ms=r(),_(jo.$$.fragment),vs=r(),_(xo.$$.fragment),wa=r(),_(tn.$$.fragment),ka=r(),We=d("div"),_(on.$$.fragment),ws=r(),Hn=d("p"),Hn.textContent=Dr,ks=r(),Yn=d("p"),Yn.innerHTML=zr,Vs=r(),Sn=d("p"),Sn.innerHTML=Gr,js=r(),En=d("p"),En.innerHTML=Ir,xs=r(),Jt=d("div"),_(nn.$$.fragment),$s=r(),Qn=d("p"),Qn.innerHTML=Rr,Cs=r(),_($o.$$.fragment),Fs=r(),_(Co.$$.fragment),Va=r(),_(an.$$.fragment),ja=r(),De=d("div"),_(sn.$$.fragment),Js=r(),Pn=d("p"),Pn.textContent=Nr,Us=r(),On=d("p"),On.innerHTML=Br,Zs=r(),Kn=d("p"),Kn.innerHTML=Xr,Ws=r(),ea=d("p"),ea.innerHTML=qr,Ds=r(),Ut=d("div"),_(rn.$$.fragment),zs=r(),ta=d("p"),ta.innerHTML=Ar,Gs=r(),_(Fo.$$.fragment),Is=r(),_(Jo.$$.fragment),xa=r(),_(ln.$$.fragment),$a=r(),ze=d("div"),_(dn.$$.fragment),Rs=r(),oa=d("p"),oa.innerHTML=Lr,Ns=r(),na=d("p"),na.innerHTML=Hr,Bs=r(),aa=d("p"),aa.innerHTML=Yr,Xs=r(),sa=d("p"),sa.innerHTML=Sr,qs=r(),Zt=d("div"),_(cn.$$.fragment),As=r(),ra=d("p"),ra.innerHTML=Er,Ls=r(),_(Uo.$$.fragment),Hs=r(),_(Zo.$$.fragment),Ca=r(),_(mn.$$.fragment),Fa=r(),qt=d("div"),_(pn.$$.fragment),Ys=r(),ia=d("p"),ia.innerHTML=Qr,Ss=r(),Wt=d("div"),_(un.$$.fragment),Es=r(),la=d("p"),la.innerHTML=Pr,Qs=r(),_(Wo.$$.fragment),Ps=r(),_(Do.$$.fragment),Ja=r(),_(hn.$$.fragment),Ua=r(),yt=d("div"),_(fn.$$.fragment),Os=r(),da=d("p"),da.textContent=Or,Ks=r(),ca=d("p"),ca.innerHTML=Kr,er=r(),Dt=d("div"),_(gn.$$.fragment),tr=r(),ma=d("p"),ma.innerHTML=ei,or=r(),_(zo.$$.fragment),nr=r(),_(Go.$$.fragment),Za=r(),_(_n.$$.fragment),Wa=r(),Tt=d("div"),_(bn.$$.fragment),ar=r(),pa=d("p"),pa.textContent=ti,sr=r(),ua=d("p"),ua.innerHTML=oi,rr=r(),zt=d("div"),_(yn.$$.fragment),ir=r(),ha=d("p"),ha.innerHTML=ni,lr=r(),_(Io.$$.fragment),dr=r(),_(Ro.$$.fragment),this.h()},l(o){b(e.$$.fragment,o),u=i(o),n=c(o,"DIV",{class:!0});var g=J(n);b(a.$$.fragment,g),f=i(g),t=c(g,"P",{"data-svelte-h":!0}),h(t)!=="svelte-ep7g77"&&(t.innerHTML=w),te=i(g),D=c(g,"P",{"data-svelte-h":!0}),h(D)!=="svelte-1kxeh2s"&&(D.innerHTML=I),oe=i(g),W=c(g,"P",{"data-svelte-h":!0}),h(W)!=="svelte-68lg8f"&&(W.innerHTML=G),R=i(g),V=c(g,"DIV",{class:!0});var At=J(V);b(C.$$.fragment,At),Ae=i(At),we=c(At,"P",{"data-svelte-h":!0}),h(we)!=="svelte-1ovtvcv"&&(we.innerHTML=co),ke=i(At),b(re.$$.fragment,At),Le=i(At),b(he.$$.fragment,At),At.forEach(l),g.forEach(l),ie=i(o),b(Ve.$$.fragment,o),N=i(o),X=c(o,"DIV",{class:!0});var Oe=J(X);b(Ge.$$.fragment,Oe),fe=i(Oe),st=c(Oe,"P",{"data-svelte-h":!0}),h(st)!=="svelte-7bp2h8"&&(st.textContent=rt),_t=i(Oe),it=c(Oe,"P",{"data-svelte-h":!0}),h(it)!=="svelte-4qbk9w"&&(it.innerHTML=lt),He=i(Oe),je=c(Oe,"P",{"data-svelte-h":!0}),h(je)!=="svelte-1kxeh2s"&&(je.innerHTML=mo),xe=i(Oe),ge=c(Oe,"P",{"data-svelte-h":!0}),h(ge)!=="svelte-68lg8f"&&(ge.innerHTML=_e),Ie=i(Oe),E=c(Oe,"DIV",{class:!0});var Lt=J(E);b($e.$$.fragment,Lt),Gt=i(Lt),be=c(Lt,"P",{"data-svelte-h":!0}),h(be)!=="svelte-1wv52ft"&&(be.innerHTML=dt),Vt=i(Lt),b(Y.$$.fragment,Lt),It=i(Lt),b(ne.$$.fragment,Lt),Lt.forEach(l),Oe.forEach(l),Ce=i(o),b(q.$$.fragment,o),Fe=i(o),L=c(o,"DIV",{class:!0});var Mt=J(L);b(Je.$$.fragment,Mt),Rt=i(Mt),ye=c(Mt,"P",{"data-svelte-h":!0}),h(ye)!=="svelte-s2nf58"&&(ye.innerHTML=jt),Nt=i(Mt),Te=c(Mt,"P",{"data-svelte-h":!0}),h(Te)!=="svelte-1kxeh2s"&&(Te.innerHTML=ct),le=i(Mt),Me=c(Mt,"P",{"data-svelte-h":!0}),h(Me)!=="svelte-68lg8f"&&(Me.innerHTML=Ye),mt=i(Mt),A=c(Mt,"DIV",{class:!0});var Ht=J(A);b(ce.$$.fragment,Ht),pt=i(Ht),Re=c(Ht,"P",{"data-svelte-h":!0}),h(Re)!=="svelte-13r98x5"&&(Re.innerHTML=po),Ne=i(Ht),b(P.$$.fragment,Ht),Se=i(Ht),b(O.$$.fragment,Ht),Ht.forEach(l),Mt.forEach(l),Q=i(o),b(j.$$.fragment,o),$=i(o),z=c(o,"DIV",{class:!0});var Ke=J(z);b(H.$$.fragment,Ke),me=i(Ke),B=c(Ke,"P",{"data-svelte-h":!0}),h(B)!=="svelte-1nc4smo"&&(B.textContent=Ue),ro=i(Ke),ve=c(Ke,"P",{"data-svelte-h":!0}),h(ve)!=="svelte-4qbk9w"&&(ve.innerHTML=io),ut=i(Ke),Bt=c(Ke,"P",{"data-svelte-h":!0}),h(Bt)!=="svelte-1kxeh2s"&&(Bt.innerHTML=ht),Xt=i(Ke),lo=c(Ke,"P",{"data-svelte-h":!0}),h(lo)!=="svelte-68lg8f"&&(lo.innerHTML=uo),Tn=i(Ke),Be=c(Ke,"DIV",{class:!0});var Yt=J(Be);b(Xe.$$.fragment,Yt),go=i(Yt),Ee=c(Yt,"P",{"data-svelte-h":!0}),h(Ee)!=="svelte-1qmtc7d"&&(Ee.innerHTML=No),ho=i(Yt),b(bt.$$.fragment,Yt),p=i(Yt),b(x.$$.fragment,Yt),Yt.forEach(l),Ke.forEach(l),qe=i(o),b(pe.$$.fragment,o),ft=i(o),de=c(o,"DIV",{class:!0});var et=J(de);b(Bo.$$.fragment,et),za=i(et),Mn=c(et,"P",{"data-svelte-h":!0}),h(Mn)!=="svelte-1x720uc"&&(Mn.textContent=cr),Ga=i(et),vn=c(et,"P",{"data-svelte-h":!0}),h(vn)!=="svelte-4qbk9w"&&(vn.innerHTML=mr),Ia=i(et),wn=c(et,"P",{"data-svelte-h":!0}),h(wn)!=="svelte-1kxeh2s"&&(wn.innerHTML=pr),Ra=i(et),kn=c(et,"P",{"data-svelte-h":!0}),h(kn)!=="svelte-68lg8f"&&(kn.innerHTML=ur),Na=i(et),xt=c(et,"DIV",{class:!0});var St=J(xt);b(Xo.$$.fragment,St),Ba=i(St),Vn=c(St,"P",{"data-svelte-h":!0}),h(Vn)!=="svelte-1c5g3f9"&&(Vn.innerHTML=hr),Xa=i(St),b(_o.$$.fragment,St),qa=i(St),b(bo.$$.fragment,St),St.forEach(l),et.forEach(l),fa=i(o),b(qo.$$.fragment,o),ga=i(o),ae=c(o,"DIV",{class:!0});var ue=J(ae);b(Ao.$$.fragment,ue),Aa=i(ue),jn=c(ue,"P",{"data-svelte-h":!0}),h(jn)!=="svelte-10i63w1"&&(jn.innerHTML=fr),La=i(ue),xn=c(ue,"P",{"data-svelte-h":!0}),h(xn)!=="svelte-eisylu"&&(xn.innerHTML=gr),Ha=i(ue),$n=c(ue,"P",{"data-svelte-h":!0}),h($n)!=="svelte-hswkmf"&&($n.innerHTML=_r),Ya=i(ue),Cn=c(ue,"P",{"data-svelte-h":!0}),h(Cn)!=="svelte-rehfhh"&&(Cn.innerHTML=br),Sa=i(ue),Fn=c(ue,"P",{"data-svelte-h":!0}),h(Fn)!=="svelte-174erte"&&(Fn.innerHTML=yr),Ea=i(ue),Jn=c(ue,"P",{"data-svelte-h":!0}),h(Jn)!=="svelte-p9qvd1"&&(Jn.innerHTML=Tr),Qa=i(ue),$t=c(ue,"DIV",{class:!0});var Et=J($t);b(Lo.$$.fragment,Et),Pa=i(Et),Un=c(Et,"P",{"data-svelte-h":!0}),h(Un)!=="svelte-1pwx5vt"&&(Un.innerHTML=Mr),Oa=i(Et),b(yo.$$.fragment,Et),Ka=i(Et),b(To.$$.fragment,Et),Et.forEach(l),ue.forEach(l),_a=i(o),b(Ho.$$.fragment,o),ba=i(o),Qe=c(o,"DIV",{class:!0});var vt=J(Qe);b(Yo.$$.fragment,vt),es=i(vt),Zn=c(vt,"P",{"data-svelte-h":!0}),h(Zn)!=="svelte-1cmef7n"&&(Zn.innerHTML=vr),ts=i(vt),Wn=c(vt,"P",{"data-svelte-h":!0}),h(Wn)!=="svelte-eisylu"&&(Wn.innerHTML=wr),os=i(vt),Dn=c(vt,"P",{"data-svelte-h":!0}),h(Dn)!=="svelte-hswkmf"&&(Dn.innerHTML=kr),ns=i(vt),Ct=c(vt,"DIV",{class:!0});var Qt=J(Ct);b(So.$$.fragment,Qt),as=i(Qt),zn=c(Qt,"P",{"data-svelte-h":!0}),h(zn)!=="svelte-d7op29"&&(zn.innerHTML=Vr),ss=i(Qt),b(Mo.$$.fragment,Qt),rs=i(Qt),b(vo.$$.fragment,Qt),Qt.forEach(l),vt.forEach(l),ya=i(o),b(Eo.$$.fragment,o),Ta=i(o),Pe=c(o,"DIV",{class:!0});var wt=J(Pe);b(Qo.$$.fragment,wt),is=i(wt),Gn=c(wt,"P",{"data-svelte-h":!0}),h(Gn)!=="svelte-snkwkr"&&(Gn.innerHTML=jr),ls=i(wt),In=c(wt,"P",{"data-svelte-h":!0}),h(In)!=="svelte-eisylu"&&(In.innerHTML=xr),ds=i(wt),Rn=c(wt,"P",{"data-svelte-h":!0}),h(Rn)!=="svelte-hswkmf"&&(Rn.innerHTML=$r),cs=i(wt),Ft=c(wt,"DIV",{class:!0});var Pt=J(Ft);b(Po.$$.fragment,Pt),ms=i(Pt),Nn=c(Pt,"P",{"data-svelte-h":!0}),h(Nn)!=="svelte-1ucoajt"&&(Nn.innerHTML=Cr),ps=i(Pt),b(wo.$$.fragment,Pt),us=i(Pt),b(ko.$$.fragment,Pt),Pt.forEach(l),wt.forEach(l),Ma=i(o),b(Oo.$$.fragment,o),va=i(o),Ze=c(o,"DIV",{class:!0});var tt=J(Ze);b(Ko.$$.fragment,tt),hs=i(tt),Bn=c(tt,"P",{"data-svelte-h":!0}),h(Bn)!=="svelte-5exrgz"&&(Bn.textContent=Fr),fs=i(tt),Xn=c(tt,"P",{"data-svelte-h":!0}),h(Xn)!=="svelte-11pr6bz"&&(Xn.innerHTML=Jr),gs=i(tt),qn=c(tt,"P",{"data-svelte-h":!0}),h(qn)!=="svelte-eisylu"&&(qn.innerHTML=Ur),_s=i(tt),An=c(tt,"P",{"data-svelte-h":!0}),h(An)!=="svelte-hswkmf"&&(An.innerHTML=Zr),bs=i(tt),gt=c(tt,"DIV",{class:!0});var kt=J(gt);b(en.$$.fragment,kt),ys=i(kt),Ln=c(kt,"P",{"data-svelte-h":!0}),h(Ln)!=="svelte-jxabmx"&&(Ln.innerHTML=Wr),Ts=i(kt),b(Vo.$$.fragment,kt),Ms=i(kt),b(jo.$$.fragment,kt),vs=i(kt),b(xo.$$.fragment,kt),kt.forEach(l),tt.forEach(l),wa=i(o),b(tn.$$.fragment,o),ka=i(o),We=c(o,"DIV",{class:!0});var ot=J(We);b(on.$$.fragment,ot),ws=i(ot),Hn=c(ot,"P",{"data-svelte-h":!0}),h(Hn)!=="svelte-ie3k0r"&&(Hn.textContent=Dr),ks=i(ot),Yn=c(ot,"P",{"data-svelte-h":!0}),h(Yn)!=="svelte-11pr6bz"&&(Yn.innerHTML=zr),Vs=i(ot),Sn=c(ot,"P",{"data-svelte-h":!0}),h(Sn)!=="svelte-eisylu"&&(Sn.innerHTML=Gr),js=i(ot),En=c(ot,"P",{"data-svelte-h":!0}),h(En)!=="svelte-hswkmf"&&(En.innerHTML=Ir),xs=i(ot),Jt=c(ot,"DIV",{class:!0});var Ot=J(Jt);b(nn.$$.fragment,Ot),$s=i(Ot),Qn=c(Ot,"P",{"data-svelte-h":!0}),h(Qn)!=="svelte-1yhyt81"&&(Qn.innerHTML=Rr),Cs=i(Ot),b($o.$$.fragment,Ot),Fs=i(Ot),b(Co.$$.fragment,Ot),Ot.forEach(l),ot.forEach(l),Va=i(o),b(an.$$.fragment,o),ja=i(o),De=c(o,"DIV",{class:!0});var nt=J(De);b(sn.$$.fragment,nt),Js=i(nt),Pn=c(nt,"P",{"data-svelte-h":!0}),h(Pn)!=="svelte-6v5lfk"&&(Pn.textContent=Nr),Us=i(nt),On=c(nt,"P",{"data-svelte-h":!0}),h(On)!=="svelte-11pr6bz"&&(On.innerHTML=Br),Zs=i(nt),Kn=c(nt,"P",{"data-svelte-h":!0}),h(Kn)!=="svelte-eisylu"&&(Kn.innerHTML=Xr),Ws=i(nt),ea=c(nt,"P",{"data-svelte-h":!0}),h(ea)!=="svelte-hswkmf"&&(ea.innerHTML=qr),Ds=i(nt),Ut=c(nt,"DIV",{class:!0});var Kt=J(Ut);b(rn.$$.fragment,Kt),zs=i(Kt),ta=c(Kt,"P",{"data-svelte-h":!0}),h(ta)!=="svelte-14s5rcn"&&(ta.innerHTML=Ar),Gs=i(Kt),b(Fo.$$.fragment,Kt),Is=i(Kt),b(Jo.$$.fragment,Kt),Kt.forEach(l),nt.forEach(l),xa=i(o),b(ln.$$.fragment,o),$a=i(o),ze=c(o,"DIV",{class:!0});var at=J(ze);b(dn.$$.fragment,at),Rs=i(at),oa=c(at,"P",{"data-svelte-h":!0}),h(oa)!=="svelte-1hbtj02"&&(oa.innerHTML=Lr),Ns=i(at),na=c(at,"P",{"data-svelte-h":!0}),h(na)!=="svelte-11pr6bz"&&(na.innerHTML=Hr),Bs=i(at),aa=c(at,"P",{"data-svelte-h":!0}),h(aa)!=="svelte-eisylu"&&(aa.innerHTML=Yr),Xs=i(at),sa=c(at,"P",{"data-svelte-h":!0}),h(sa)!=="svelte-hswkmf"&&(sa.innerHTML=Sr),qs=i(at),Zt=c(at,"DIV",{class:!0});var eo=J(Zt);b(cn.$$.fragment,eo),As=i(eo),ra=c(eo,"P",{"data-svelte-h":!0}),h(ra)!=="svelte-4nmso9"&&(ra.innerHTML=Er),Ls=i(eo),b(Uo.$$.fragment,eo),Hs=i(eo),b(Zo.$$.fragment,eo),eo.forEach(l),at.forEach(l),Ca=i(o),b(mn.$$.fragment,o),Fa=i(o),qt=c(o,"DIV",{class:!0});var fo=J(qt);b(pn.$$.fragment,fo),Ys=i(fo),ia=c(fo,"P",{"data-svelte-h":!0}),h(ia)!=="svelte-va7mph"&&(ia.innerHTML=Qr),Ss=i(fo),Wt=c(fo,"DIV",{class:!0});var to=J(Wt);b(un.$$.fragment,to),Es=i(to),la=c(to,"P",{"data-svelte-h":!0}),h(la)!=="svelte-19uvzm5"&&(la.innerHTML=Pr),Qs=i(to),b(Wo.$$.fragment,to),Ps=i(to),b(Do.$$.fragment,to),to.forEach(l),fo.forEach(l),Ja=i(o),b(hn.$$.fragment,o),Ua=i(o),yt=c(o,"DIV",{class:!0});var oo=J(yt);b(fn.$$.fragment,oo),Os=i(oo),da=c(oo,"P",{"data-svelte-h":!0}),h(da)!=="svelte-jbss5k"&&(da.textContent=Or),Ks=i(oo),ca=c(oo,"P",{"data-svelte-h":!0}),h(ca)!=="svelte-1gjh92c"&&(ca.innerHTML=Kr),er=i(oo),Dt=c(oo,"DIV",{class:!0});var no=J(Dt);b(gn.$$.fragment,no),tr=i(no),ma=c(no,"P",{"data-svelte-h":!0}),h(ma)!=="svelte-fee4c9"&&(ma.innerHTML=ei),or=i(no),b(zo.$$.fragment,no),nr=i(no),b(Go.$$.fragment,no),no.forEach(l),oo.forEach(l),Za=i(o),b(_n.$$.fragment,o),Wa=i(o),Tt=c(o,"DIV",{class:!0});var ao=J(Tt);b(bn.$$.fragment,ao),ar=i(ao),pa=c(ao,"P",{"data-svelte-h":!0}),h(pa)!=="svelte-1xxp1ql"&&(pa.textContent=ti),sr=i(ao),ua=c(ao,"P",{"data-svelte-h":!0}),h(ua)!=="svelte-1gjh92c"&&(ua.innerHTML=oi),rr=i(ao),zt=c(ao,"DIV",{class:!0});var so=J(zt);b(yn.$$.fragment,so),ir=i(so),ha=c(so,"P",{"data-svelte-h":!0}),h(ha)!=="svelte-4aq59l"&&(ha.innerHTML=ni),lr=i(so),b(Io.$$.fragment,so),dr=i(so),b(Ro.$$.fragment,so),so.forEach(l),ao.forEach(l),this.h()},h(){U(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,g){y(e,o,g),m(o,u,g),m(o,n,g),y(a,n,null),s(n,f),s(n,t),s(n,te),s(n,D),s(n,oe),s(n,W),s(n,R),s(n,V),y(C,V,null),s(V,Ae),s(V,we),s(V,ke),y(re,V,null),s(V,Le),y(he,V,null),m(o,ie,g),y(Ve,o,g),m(o,N,g),m(o,X,g),y(Ge,X,null),s(X,fe),s(X,st),s(X,_t),s(X,it),s(X,He),s(X,je),s(X,xe),s(X,ge),s(X,Ie),s(X,E),y($e,E,null),s(E,Gt),s(E,be),s(E,Vt),y(Y,E,null),s(E,It),y(ne,E,null),m(o,Ce,g),y(q,o,g),m(o,Fe,g),m(o,L,g),y(Je,L,null),s(L,Rt),s(L,ye),s(L,Nt),s(L,Te),s(L,le),s(L,Me),s(L,mt),s(L,A),y(ce,A,null),s(A,pt),s(A,Re),s(A,Ne),y(P,A,null),s(A,Se),y(O,A,null),m(o,Q,g),y(j,o,g),m(o,$,g),m(o,z,g),y(H,z,null),s(z,me),s(z,B),s(z,ro),s(z,ve),s(z,ut),s(z,Bt),s(z,Xt),s(z,lo),s(z,Tn),s(z,Be),y(Xe,Be,null),s(Be,go),s(Be,Ee),s(Be,ho),y(bt,Be,null),s(Be,p),y(x,Be,null),m(o,qe,g),y(pe,o,g),m(o,ft,g),m(o,de,g),y(Bo,de,null),s(de,za),s(de,Mn),s(de,Ga),s(de,vn),s(de,Ia),s(de,wn),s(de,Ra),s(de,kn),s(de,Na),s(de,xt),y(Xo,xt,null),s(xt,Ba),s(xt,Vn),s(xt,Xa),y(_o,xt,null),s(xt,qa),y(bo,xt,null),m(o,fa,g),y(qo,o,g),m(o,ga,g),m(o,ae,g),y(Ao,ae,null),s(ae,Aa),s(ae,jn),s(ae,La),s(ae,xn),s(ae,Ha),s(ae,$n),s(ae,Ya),s(ae,Cn),s(ae,Sa),s(ae,Fn),s(ae,Ea),s(ae,Jn),s(ae,Qa),s(ae,$t),y(Lo,$t,null),s($t,Pa),s($t,Un),s($t,Oa),y(yo,$t,null),s($t,Ka),y(To,$t,null),m(o,_a,g),y(Ho,o,g),m(o,ba,g),m(o,Qe,g),y(Yo,Qe,null),s(Qe,es),s(Qe,Zn),s(Qe,ts),s(Qe,Wn),s(Qe,os),s(Qe,Dn),s(Qe,ns),s(Qe,Ct),y(So,Ct,null),s(Ct,as),s(Ct,zn),s(Ct,ss),y(Mo,Ct,null),s(Ct,rs),y(vo,Ct,null),m(o,ya,g),y(Eo,o,g),m(o,Ta,g),m(o,Pe,g),y(Qo,Pe,null),s(Pe,is),s(Pe,Gn),s(Pe,ls),s(Pe,In),s(Pe,ds),s(Pe,Rn),s(Pe,cs),s(Pe,Ft),y(Po,Ft,null),s(Ft,ms),s(Ft,Nn),s(Ft,ps),y(wo,Ft,null),s(Ft,us),y(ko,Ft,null),m(o,Ma,g),y(Oo,o,g),m(o,va,g),m(o,Ze,g),y(Ko,Ze,null),s(Ze,hs),s(Ze,Bn),s(Ze,fs),s(Ze,Xn),s(Ze,gs),s(Ze,qn),s(Ze,_s),s(Ze,An),s(Ze,bs),s(Ze,gt),y(en,gt,null),s(gt,ys),s(gt,Ln),s(gt,Ts),y(Vo,gt,null),s(gt,Ms),y(jo,gt,null),s(gt,vs),y(xo,gt,null),m(o,wa,g),y(tn,o,g),m(o,ka,g),m(o,We,g),y(on,We,null),s(We,ws),s(We,Hn),s(We,ks),s(We,Yn),s(We,Vs),s(We,Sn),s(We,js),s(We,En),s(We,xs),s(We,Jt),y(nn,Jt,null),s(Jt,$s),s(Jt,Qn),s(Jt,Cs),y($o,Jt,null),s(Jt,Fs),y(Co,Jt,null),m(o,Va,g),y(an,o,g),m(o,ja,g),m(o,De,g),y(sn,De,null),s(De,Js),s(De,Pn),s(De,Us),s(De,On),s(De,Zs),s(De,Kn),s(De,Ws),s(De,ea),s(De,Ds),s(De,Ut),y(rn,Ut,null),s(Ut,zs),s(Ut,ta),s(Ut,Gs),y(Fo,Ut,null),s(Ut,Is),y(Jo,Ut,null),m(o,xa,g),y(ln,o,g),m(o,$a,g),m(o,ze,g),y(dn,ze,null),s(ze,Rs),s(ze,oa),s(ze,Ns),s(ze,na),s(ze,Bs),s(ze,aa),s(ze,Xs),s(ze,sa),s(ze,qs),s(ze,Zt),y(cn,Zt,null),s(Zt,As),s(Zt,ra),s(Zt,Ls),y(Uo,Zt,null),s(Zt,Hs),y(Zo,Zt,null),m(o,Ca,g),y(mn,o,g),m(o,Fa,g),m(o,qt,g),y(pn,qt,null),s(qt,Ys),s(qt,ia),s(qt,Ss),s(qt,Wt),y(un,Wt,null),s(Wt,Es),s(Wt,la),s(Wt,Qs),y(Wo,Wt,null),s(Wt,Ps),y(Do,Wt,null),m(o,Ja,g),y(hn,o,g),m(o,Ua,g),m(o,yt,g),y(fn,yt,null),s(yt,Os),s(yt,da),s(yt,Ks),s(yt,ca),s(yt,er),s(yt,Dt),y(gn,Dt,null),s(Dt,tr),s(Dt,ma),s(Dt,or),y(zo,Dt,null),s(Dt,nr),y(Go,Dt,null),m(o,Za,g),y(_n,o,g),m(o,Wa,g),m(o,Tt,g),y(bn,Tt,null),s(Tt,ar),s(Tt,pa),s(Tt,sr),s(Tt,ua),s(Tt,rr),s(Tt,zt),y(yn,zt,null),s(zt,ir),s(zt,ha),s(zt,lr),y(Io,zt,null),s(zt,dr),y(Ro,zt,null),Da=!0},p(o,g){const At={};g&2&&(At.$$scope={dirty:g,ctx:o}),re.$set(At);const Oe={};g&2&&(Oe.$$scope={dirty:g,ctx:o}),he.$set(Oe);const Lt={};g&2&&(Lt.$$scope={dirty:g,ctx:o}),Y.$set(Lt);const Mt={};g&2&&(Mt.$$scope={dirty:g,ctx:o}),ne.$set(Mt);const Ht={};g&2&&(Ht.$$scope={dirty:g,ctx:o}),P.$set(Ht);const Ke={};g&2&&(Ke.$$scope={dirty:g,ctx:o}),O.$set(Ke);const Yt={};g&2&&(Yt.$$scope={dirty:g,ctx:o}),bt.$set(Yt);const et={};g&2&&(et.$$scope={dirty:g,ctx:o}),x.$set(et);const St={};g&2&&(St.$$scope={dirty:g,ctx:o}),_o.$set(St);const ue={};g&2&&(ue.$$scope={dirty:g,ctx:o}),bo.$set(ue);const Et={};g&2&&(Et.$$scope={dirty:g,ctx:o}),yo.$set(Et);const vt={};g&2&&(vt.$$scope={dirty:g,ctx:o}),To.$set(vt);const Qt={};g&2&&(Qt.$$scope={dirty:g,ctx:o}),Mo.$set(Qt);const wt={};g&2&&(wt.$$scope={dirty:g,ctx:o}),vo.$set(wt);const Pt={};g&2&&(Pt.$$scope={dirty:g,ctx:o}),wo.$set(Pt);const tt={};g&2&&(tt.$$scope={dirty:g,ctx:o}),ko.$set(tt);const kt={};g&2&&(kt.$$scope={dirty:g,ctx:o}),Vo.$set(kt);const ot={};g&2&&(ot.$$scope={dirty:g,ctx:o}),jo.$set(ot);const Ot={};g&2&&(Ot.$$scope={dirty:g,ctx:o}),xo.$set(Ot);const nt={};g&2&&(nt.$$scope={dirty:g,ctx:o}),$o.$set(nt);const Kt={};g&2&&(Kt.$$scope={dirty:g,ctx:o}),Co.$set(Kt);const at={};g&2&&(at.$$scope={dirty:g,ctx:o}),Fo.$set(at);const eo={};g&2&&(eo.$$scope={dirty:g,ctx:o}),Jo.$set(eo);const fo={};g&2&&(fo.$$scope={dirty:g,ctx:o}),Uo.$set(fo);const to={};g&2&&(to.$$scope={dirty:g,ctx:o}),Zo.$set(to);const oo={};g&2&&(oo.$$scope={dirty:g,ctx:o}),Wo.$set(oo);const no={};g&2&&(no.$$scope={dirty:g,ctx:o}),Do.$set(no);const ao={};g&2&&(ao.$$scope={dirty:g,ctx:o}),zo.$set(ao);const so={};g&2&&(so.$$scope={dirty:g,ctx:o}),Go.$set(so);const ai={};g&2&&(ai.$$scope={dirty:g,ctx:o}),Io.$set(ai);const si={};g&2&&(si.$$scope={dirty:g,ctx:o}),Ro.$set(si)},i(o){Da||(T(e.$$.fragment,o),T(a.$$.fragment,o),T(C.$$.fragment,o),T(re.$$.fragment,o),T(he.$$.fragment,o),T(Ve.$$.fragment,o),T(Ge.$$.fragment,o),T($e.$$.fragment,o),T(Y.$$.fragment,o),T(ne.$$.fragment,o),T(q.$$.fragment,o),T(Je.$$.fragment,o),T(ce.$$.fragment,o),T(P.$$.fragment,o),T(O.$$.fragment,o),T(j.$$.fragment,o),T(H.$$.fragment,o),T(Xe.$$.fragment,o),T(bt.$$.fragment,o),T(x.$$.fragment,o),T(pe.$$.fragment,o),T(Bo.$$.fragment,o),T(Xo.$$.fragment,o),T(_o.$$.fragment,o),T(bo.$$.fragment,o),T(qo.$$.fragment,o),T(Ao.$$.fragment,o),T(Lo.$$.fragment,o),T(yo.$$.fragment,o),T(To.$$.fragment,o),T(Ho.$$.fragment,o),T(Yo.$$.fragment,o),T(So.$$.fragment,o),T(Mo.$$.fragment,o),T(vo.$$.fragment,o),T(Eo.$$.fragment,o),T(Qo.$$.fragment,o),T(Po.$$.fragment,o),T(wo.$$.fragment,o),T(ko.$$.fragment,o),T(Oo.$$.fragment,o),T(Ko.$$.fragment,o),T(en.$$.fragment,o),T(Vo.$$.fragment,o),T(jo.$$.fragment,o),T(xo.$$.fragment,o),T(tn.$$.fragment,o),T(on.$$.fragment,o),T(nn.$$.fragment,o),T($o.$$.fragment,o),T(Co.$$.fragment,o),T(an.$$.fragment,o),T(sn.$$.fragment,o),T(rn.$$.fragment,o),T(Fo.$$.fragment,o),T(Jo.$$.fragment,o),T(ln.$$.fragment,o),T(dn.$$.fragment,o),T(cn.$$.fragment,o),T(Uo.$$.fragment,o),T(Zo.$$.fragment,o),T(mn.$$.fragment,o),T(pn.$$.fragment,o),T(un.$$.fragment,o),T(Wo.$$.fragment,o),T(Do.$$.fragment,o),T(hn.$$.fragment,o),T(fn.$$.fragment,o),T(gn.$$.fragment,o),T(zo.$$.fragment,o),T(Go.$$.fragment,o),T(_n.$$.fragment,o),T(bn.$$.fragment,o),T(yn.$$.fragment,o),T(Io.$$.fragment,o),T(Ro.$$.fragment,o),Da=!0)},o(o){M(e.$$.fragment,o),M(a.$$.fragment,o),M(C.$$.fragment,o),M(re.$$.fragment,o),M(he.$$.fragment,o),M(Ve.$$.fragment,o),M(Ge.$$.fragment,o),M($e.$$.fragment,o),M(Y.$$.fragment,o),M(ne.$$.fragment,o),M(q.$$.fragment,o),M(Je.$$.fragment,o),M(ce.$$.fragment,o),M(P.$$.fragment,o),M(O.$$.fragment,o),M(j.$$.fragment,o),M(H.$$.fragment,o),M(Xe.$$.fragment,o),M(bt.$$.fragment,o),M(x.$$.fragment,o),M(pe.$$.fragment,o),M(Bo.$$.fragment,o),M(Xo.$$.fragment,o),M(_o.$$.fragment,o),M(bo.$$.fragment,o),M(qo.$$.fragment,o),M(Ao.$$.fragment,o),M(Lo.$$.fragment,o),M(yo.$$.fragment,o),M(To.$$.fragment,o),M(Ho.$$.fragment,o),M(Yo.$$.fragment,o),M(So.$$.fragment,o),M(Mo.$$.fragment,o),M(vo.$$.fragment,o),M(Eo.$$.fragment,o),M(Qo.$$.fragment,o),M(Po.$$.fragment,o),M(wo.$$.fragment,o),M(ko.$$.fragment,o),M(Oo.$$.fragment,o),M(Ko.$$.fragment,o),M(en.$$.fragment,o),M(Vo.$$.fragment,o),M(jo.$$.fragment,o),M(xo.$$.fragment,o),M(tn.$$.fragment,o),M(on.$$.fragment,o),M(nn.$$.fragment,o),M($o.$$.fragment,o),M(Co.$$.fragment,o),M(an.$$.fragment,o),M(sn.$$.fragment,o),M(rn.$$.fragment,o),M(Fo.$$.fragment,o),M(Jo.$$.fragment,o),M(ln.$$.fragment,o),M(dn.$$.fragment,o),M(cn.$$.fragment,o),M(Uo.$$.fragment,o),M(Zo.$$.fragment,o),M(mn.$$.fragment,o),M(pn.$$.fragment,o),M(un.$$.fragment,o),M(Wo.$$.fragment,o),M(Do.$$.fragment,o),M(hn.$$.fragment,o),M(fn.$$.fragment,o),M(gn.$$.fragment,o),M(zo.$$.fragment,o),M(Go.$$.fragment,o),M(_n.$$.fragment,o),M(bn.$$.fragment,o),M(yn.$$.fragment,o),M(Io.$$.fragment,o),M(Ro.$$.fragment,o),Da=!1},d(o){o&&(l(u),l(n),l(ie),l(N),l(X),l(Ce),l(Fe),l(L),l(Q),l($),l(z),l(qe),l(ft),l(de),l(fa),l(ga),l(ae),l(_a),l(ba),l(Qe),l(ya),l(Ta),l(Pe),l(Ma),l(va),l(Ze),l(wa),l(ka),l(We),l(Va),l(ja),l(De),l(xa),l($a),l(ze),l(Ca),l(Fa),l(qt),l(Ja),l(Ua),l(yt),l(Za),l(Wa),l(Tt)),v(e,o),v(a),v(C),v(re),v(he),v(Ve,o),v(Ge),v($e),v(Y),v(ne),v(q,o),v(Je),v(ce),v(P),v(O),v(j,o),v(H),v(Xe),v(bt),v(x),v(pe,o),v(Bo),v(Xo),v(_o),v(bo),v(qo,o),v(Ao),v(Lo),v(yo),v(To),v(Ho,o),v(Yo),v(So),v(Mo),v(vo),v(Eo,o),v(Qo),v(Po),v(wo),v(ko),v(Oo,o),v(Ko),v(en),v(Vo),v(jo),v(xo),v(tn,o),v(on),v(nn),v($o),v(Co),v(an,o),v(sn),v(rn),v(Fo),v(Jo),v(ln,o),v(dn),v(cn),v(Uo),v(Zo),v(mn,o),v(pn),v(un),v(Wo),v(Do),v(hn,o),v(fn),v(gn),v(zo),v(Go),v(_n,o),v(bn),v(yn),v(Io),v(Ro)}}}function Ei(k){let e,u;return e=new ri({props:{$$slots:{default:[Si]},$$scope:{ctx:k}}}),{c(){_(e.$$.fragment)},l(n){b(e.$$.fragment,n)},m(n,a){y(e,n,a),u=!0},p(n,a){const f={};a&2&&(f.$$scope={dirty:a,ctx:n}),e.$set(f)},i(n){u||(T(e.$$.fragment,n),u=!0)},o(n){M(e.$$.fragment,n),u=!1},d(n){v(e,n)}}}function Qi(k){let e,u="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",n,a,f="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,w,te=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,D,I,oe=`<li>a single Tensor with <code>pixel_values</code> only and nothing else: <code>model(pixel_values)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([pixel_values, attention_mask])</code> or <code>model([pixel_values, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;pixel_values&quot;: pixel_values, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,W,G,R=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=d("p"),e.innerHTML=u,n=r(),a=d("ul"),a.innerHTML=f,t=r(),w=d("p"),w.innerHTML=te,D=r(),I=d("ul"),I.innerHTML=oe,W=r(),G=d("p"),G.innerHTML=R},l(V){e=c(V,"P",{"data-svelte-h":!0}),h(e)!=="svelte-1ajbfxg"&&(e.innerHTML=u),n=i(V),a=c(V,"UL",{"data-svelte-h":!0}),h(a)!=="svelte-qm1t26"&&(a.innerHTML=f),t=i(V),w=c(V,"P",{"data-svelte-h":!0}),h(w)!=="svelte-1v9qsc5"&&(w.innerHTML=te),D=i(V),I=c(V,"UL",{"data-svelte-h":!0}),h(I)!=="svelte-99h8aq"&&(I.innerHTML=oe),W=i(V),G=c(V,"P",{"data-svelte-h":!0}),h(G)!=="svelte-1an3odd"&&(G.innerHTML=R)},m(V,C){m(V,e,C),m(V,n,C),m(V,a,C),m(V,t,C),m(V,w,C),m(V,D,C),m(V,I,C),m(V,W,C),m(V,G,C)},p:F,d(V){V&&(l(e),l(n),l(a),l(t),l(w),l(D),l(I),l(W),l(G))}}}function Pi(k){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=u},l(n){e=c(n,"P",{"data-svelte-h":!0}),h(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(n,a){m(n,e,a)},p:F,d(n){n&&l(e)}}}function Oi(k){let e,u="Example:",n,a,f;return a=new ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9JbWFnZVByb2Nlc3NvciUyQyUyMFRGRGF0YTJWZWNWaXNpb25Nb2RlbCUwQWZyb20lMjBkYXRhc2V0cyUyMGltcG9ydCUyMGxvYWRfZGF0YXNldCUwQSUwQWRhdGFzZXQlMjAlM0QlMjBsb2FkX2RhdGFzZXQoJTIyaHVnZ2luZ2ZhY2UlMkZjYXRzLWltYWdlJTIyKSUwQWltYWdlJTIwJTNEJTIwZGF0YXNldCU1QiUyMnRlc3QlMjIlNUQlNUIlMjJpbWFnZSUyMiU1RCU1QjAlNUQlMEElMEFpbWFnZV9wcm9jZXNzb3IlMjAlM0QlMjBBdXRvSW1hZ2VQcm9jZXNzb3IuZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGZGF0YTJ2ZWMtdmlzaW9uLWJhc2UlMjIpJTBBbW9kZWwlMjAlM0QlMjBURkRhdGEyVmVjVmlzaW9uTW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGZGF0YTJ2ZWMtdmlzaW9uLWJhc2UlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwaW1hZ2VfcHJvY2Vzc29yKGltYWdlJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBJTBBbGFzdF9oaWRkZW5fc3RhdGVzJTIwJTNEJTIwb3V0cHV0cy5sYXN0X2hpZGRlbl9zdGF0ZSUwQWxpc3QobGFzdF9oaWRkZW5fc3RhdGVzLnNoYXBlKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoImageProcessor, TFData2VecVisionModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>image_processor = AutoImageProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-vision-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFData2VecVisionModel.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-vision-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = image_processor(image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">197</span>, <span class="hljs-number">768</span>]`,wrap:!1}}),{c(){e=d("p"),e.textContent=u,n=r(),_(a.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),h(e)!=="svelte-11lpom8"&&(e.textContent=u),n=i(t),b(a.$$.fragment,t)},m(t,w){m(t,e,w),m(t,n,w),y(a,t,w),f=!0},p:F,i(t){f||(T(a.$$.fragment,t),f=!0)},o(t){M(a.$$.fragment,t),f=!1},d(t){t&&(l(e),l(n)),v(a,t)}}}function Ki(k){let e,u="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",n,a,f="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,w,te=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,D,I,oe=`<li>a single Tensor with <code>pixel_values</code> only and nothing else: <code>model(pixel_values)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([pixel_values, attention_mask])</code> or <code>model([pixel_values, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;pixel_values&quot;: pixel_values, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,W,G,R=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=d("p"),e.innerHTML=u,n=r(),a=d("ul"),a.innerHTML=f,t=r(),w=d("p"),w.innerHTML=te,D=r(),I=d("ul"),I.innerHTML=oe,W=r(),G=d("p"),G.innerHTML=R},l(V){e=c(V,"P",{"data-svelte-h":!0}),h(e)!=="svelte-1ajbfxg"&&(e.innerHTML=u),n=i(V),a=c(V,"UL",{"data-svelte-h":!0}),h(a)!=="svelte-qm1t26"&&(a.innerHTML=f),t=i(V),w=c(V,"P",{"data-svelte-h":!0}),h(w)!=="svelte-1v9qsc5"&&(w.innerHTML=te),D=i(V),I=c(V,"UL",{"data-svelte-h":!0}),h(I)!=="svelte-99h8aq"&&(I.innerHTML=oe),W=i(V),G=c(V,"P",{"data-svelte-h":!0}),h(G)!=="svelte-1an3odd"&&(G.innerHTML=R)},m(V,C){m(V,e,C),m(V,n,C),m(V,a,C),m(V,t,C),m(V,w,C),m(V,D,C),m(V,I,C),m(V,W,C),m(V,G,C)},p:F,d(V){V&&(l(e),l(n),l(a),l(t),l(w),l(D),l(I),l(W),l(G))}}}function el(k){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=u},l(n){e=c(n,"P",{"data-svelte-h":!0}),h(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(n,a){m(n,e,a)},p:F,d(n){n&&l(e)}}}function tl(k){let e,u="Example:",n,a,f;return a=new ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9JbWFnZVByb2Nlc3NvciUyQyUyMFRGRGF0YTJWZWNWaXNpb25Gb3JJbWFnZUNsYXNzaWZpY2F0aW9uJTBBaW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEFmcm9tJTIwZGF0YXNldHMlMjBpbXBvcnQlMjBsb2FkX2RhdGFzZXQlMEElMEFkYXRhc2V0JTIwJTNEJTIwbG9hZF9kYXRhc2V0KCUyMmh1Z2dpbmdmYWNlJTJGY2F0cy1pbWFnZSUyMiklMEFpbWFnZSUyMCUzRCUyMGRhdGFzZXQlNUIlMjJ0ZXN0JTIyJTVEJTVCJTIyaW1hZ2UlMjIlNUQlNUIwJTVEJTBBJTBBaW1hZ2VfcHJvY2Vzc29yJTIwJTNEJTIwQXV0b0ltYWdlUHJvY2Vzc29yLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRmRhdGEydmVjLXZpc2lvbi1iYXNlLWZ0MWslMjIpJTBBbW9kZWwlMjAlM0QlMjBURkRhdGEyVmVjVmlzaW9uRm9ySW1hZ2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZkYXRhMnZlYy12aXNpb24tYmFzZS1mdDFrJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMGltYWdlX3Byb2Nlc3NvcihpbWFnZSUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIydGYlMjIpJTBBbG9naXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpLmxvZ2l0cyUwQSUwQSUyMyUyMG1vZGVsJTIwcHJlZGljdHMlMjBvbmUlMjBvZiUyMHRoZSUyMDEwMDAlMjBJbWFnZU5ldCUyMGNsYXNzZXMlMEFwcmVkaWN0ZWRfbGFiZWwlMjAlM0QlMjBpbnQodGYubWF0aC5hcmdtYXgobG9naXRzJTJDJTIwYXhpcyUzRC0xKSklMEFwcmludChtb2RlbC5jb25maWcuaWQybGFiZWwlNUJwcmVkaWN0ZWRfbGFiZWwlNUQp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoImageProcessor, TFData2VecVisionForImageClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = load_dataset(<span class="hljs-string">&quot;huggingface/cats-image&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>image = dataset[<span class="hljs-string">&quot;test&quot;</span>][<span class="hljs-string">&quot;image&quot;</span>][<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>image_processor = AutoImageProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-vision-base-ft1k&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFData2VecVisionForImageClassification.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-vision-base-ft1k&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = image_processor(image, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 1000 ImageNet classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
remote control, remote`,wrap:!1}}),{c(){e=d("p"),e.textContent=u,n=r(),_(a.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),h(e)!=="svelte-11lpom8"&&(e.textContent=u),n=i(t),b(a.$$.fragment,t)},m(t,w){m(t,e,w),m(t,n,w),y(a,t,w),f=!0},p:F,i(t){f||(T(a.$$.fragment,t),f=!0)},o(t){M(a.$$.fragment,t),f=!1},d(t){t&&(l(e),l(n)),v(a,t)}}}function ol(k){let e,u="TensorFlow models and layers in <code>transformers</code> accept two formats as input:",n,a,f="<li>having all inputs as keyword arguments (like PyTorch models), or</li> <li>having all inputs as a list, tuple or dict in the first positional argument.</li>",t,w,te=`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like <code>model.fit()</code> things should “just work” for you - just
pass your inputs and labels in any format that <code>model.fit()</code> supports! If, however, you want to use the second
format outside of Keras methods like <code>fit()</code> and <code>predict()</code>, such as when creating your own layers or models with
the Keras <code>Functional</code> API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`,D,I,oe=`<li>a single Tensor with <code>pixel_values</code> only and nothing else: <code>model(pixel_values)</code></li> <li>a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
<code>model([pixel_values, attention_mask])</code> or <code>model([pixel_values, attention_mask, token_type_ids])</code></li> <li>a dictionary with one or several input Tensors associated to the input names given in the docstring:
<code>model({&quot;pixel_values&quot;: pixel_values, &quot;token_type_ids&quot;: token_type_ids})</code></li>`,W,G,R=`Note that when creating models and layers with
<a href="https://keras.io/guides/making_new_layers_and_models_via_subclassing/" rel="nofollow">subclassing</a> then you don’t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`;return{c(){e=d("p"),e.innerHTML=u,n=r(),a=d("ul"),a.innerHTML=f,t=r(),w=d("p"),w.innerHTML=te,D=r(),I=d("ul"),I.innerHTML=oe,W=r(),G=d("p"),G.innerHTML=R},l(V){e=c(V,"P",{"data-svelte-h":!0}),h(e)!=="svelte-1ajbfxg"&&(e.innerHTML=u),n=i(V),a=c(V,"UL",{"data-svelte-h":!0}),h(a)!=="svelte-qm1t26"&&(a.innerHTML=f),t=i(V),w=c(V,"P",{"data-svelte-h":!0}),h(w)!=="svelte-1v9qsc5"&&(w.innerHTML=te),D=i(V),I=c(V,"UL",{"data-svelte-h":!0}),h(I)!=="svelte-99h8aq"&&(I.innerHTML=oe),W=i(V),G=c(V,"P",{"data-svelte-h":!0}),h(G)!=="svelte-1an3odd"&&(G.innerHTML=R)},m(V,C){m(V,e,C),m(V,n,C),m(V,a,C),m(V,t,C),m(V,w,C),m(V,D,C),m(V,I,C),m(V,W,C),m(V,G,C)},p:F,d(V){V&&(l(e),l(n),l(a),l(t),l(w),l(D),l(I),l(W),l(G))}}}function nl(k){let e,u=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=u},l(n){e=c(n,"P",{"data-svelte-h":!0}),h(e)!=="svelte-fincs2"&&(e.innerHTML=u)},m(n,a){m(n,e,a)},p:F,d(n){n&&l(e)}}}function al(k){let e,u="Examples:",n,a,f;return a=new ee({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9JbWFnZVByb2Nlc3NvciUyQyUyMFRGRGF0YTJWZWNWaXNpb25Gb3JTZW1hbnRpY1NlZ21lbnRhdGlvbiUwQWZyb20lMjBQSUwlMjBpbXBvcnQlMjBJbWFnZSUwQWltcG9ydCUyMHJlcXVlc3RzJTBBJTBBdXJsJTIwJTNEJTIwJTIyaHR0cCUzQSUyRiUyRmltYWdlcy5jb2NvZGF0YXNldC5vcmclMkZ2YWwyMDE3JTJGMDAwMDAwMDM5NzY5LmpwZyUyMiUwQWltYWdlJTIwJTNEJTIwSW1hZ2Uub3BlbihyZXF1ZXN0cy5nZXQodXJsJTJDJTIwc3RyZWFtJTNEVHJ1ZSkucmF3KSUwQSUwQWltYWdlX3Byb2Nlc3NvciUyMCUzRCUyMEF1dG9JbWFnZVByb2Nlc3Nvci5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZkYXRhMnZlYy12aXNpb24tYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyMFRGRGF0YTJWZWNWaXNpb25Gb3JTZW1hbnRpY1NlZ21lbnRhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZkYXRhMnZlYy12aXNpb24tYmFzZSUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjBpbWFnZV9wcm9jZXNzb3IoaW1hZ2VzJTNEaW1hZ2UlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEElMjMlMjBsb2dpdHMlMjBhcmUlMjBvZiUyMHNoYXBlJTIwKGJhdGNoX3NpemUlMkMlMjBudW1fbGFiZWxzJTJDJTIwaGVpZ2h0JTJDJTIwd2lkdGgpJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoImageProcessor, TFData2VecVisionForSemanticSegmentation
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> requests

<span class="hljs-meta">&gt;&gt;&gt; </span>url = <span class="hljs-string">&quot;http://images.cocodataset.org/val2017/000000039769.jpg&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>image = Image.<span class="hljs-built_in">open</span>(requests.get(url, stream=<span class="hljs-literal">True</span>).raw)

<span class="hljs-meta">&gt;&gt;&gt; </span>image_processor = AutoImageProcessor.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-vision-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFData2VecVisionForSemanticSegmentation.from_pretrained(<span class="hljs-string">&quot;facebook/data2vec-vision-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = image_processor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># logits are of shape (batch_size, num_labels, height, width)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){e=d("p"),e.textContent=u,n=r(),_(a.$$.fragment)},l(t){e=c(t,"P",{"data-svelte-h":!0}),h(e)!=="svelte-kvfsh7"&&(e.textContent=u),n=i(t),b(a.$$.fragment,t)},m(t,w){m(t,e,w),m(t,n,w),y(a,t,w),f=!0},p:F,i(t){f||(T(a.$$.fragment,t),f=!0)},o(t){M(a.$$.fragment,t),f=!1},d(t){t&&(l(e),l(n)),v(a,t)}}}function sl(k){let e,u,n,a,f,t,w=`The bare Data2VecVision Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.).`,te,D,I=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,oe,W,G,R,V,C,Ae,we='The <a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.TFData2VecVisionModel">TFData2VecVisionModel</a> forward method, overrides the <code>__call__</code> special method.',co,ke,re,Le,he,ie,Ve,N,X,Ge,fe,st=`Data2VecVision Model transformer with an image classification head on top (a linear layer on top of the average of
the final hidden states of the patch tokens) e.g. for ImageNet.`,rt,_t,it=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.).`,lt,He,je=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,mo,xe,ge,_e,Ie,E,$e,Gt='The <a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.TFData2VecVisionForImageClassification">TFData2VecVisionForImageClassification</a> forward method, overrides the <code>__call__</code> special method.',be,dt,Vt,Y,It,ne,Ce,q,Fe,L,Je,Rt="Data2VecVision Model transformer with a semantic segmentation head on top e.g. for ADE20k, CityScapes.",ye,jt,Nt=`This model inherits from <a href="/docs/transformers/main/ja/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.).`,Te,ct,le=`This model is also a <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a> subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`,Me,Ye,mt,A,ce,pt,Re,po='The <a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.TFData2VecVisionForSemanticSegmentation">TFData2VecVisionForSemanticSegmentation</a> forward method, overrides the <code>__call__</code> special method.',Ne,P,Se,O,Q;return e=new S({props:{title:"TFData2VecVisionModel",local:"transformers.TFData2VecVisionModel",headingTag:"h2"}}),a=new Z({props:{name:"class transformers.TFData2VecVisionModel",anchor:"transformers.TFData2VecVisionModel",parameters:[{name:"config",val:": Data2VecVisionConfig"},{name:"add_pooling_layer",val:": bool = False"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFData2VecVisionModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecVisionConfig">Data2VecVisionConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_tf_data2vec_vision.py#L974"}}),W=new se({props:{$$slots:{default:[Qi]},$$scope:{ctx:k}}}),V=new Z({props:{name:"call",anchor:"transformers.TFData2VecVisionModel.call",parameters:[{name:"pixel_values",val:": TFModelInputType | None = None"},{name:"bool_masked_pos",val:": tf.Tensor | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFData2VecVisionModel.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> <code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoImageProcessor">AutoImageProcessor</a>. See
<a href="/docs/transformers/main/ja/model_doc/beit#transformers.BeitFeatureExtractor.__call__">BeitImageProcessor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFData2VecVisionModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFData2VecVisionModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFData2VecVisionModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFData2VecVisionModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFData2VecVisionModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFData2VecVisionModel.call.bool_masked_pos",description:`<strong>bool_masked_pos</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_patches)</code>, <em>optional</em>) &#x2014;
Boolean masked positions. Indicates which patches are masked (1) and which aren&#x2019;t (0).`,name:"bool_masked_pos"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_tf_data2vec_vision.py#L990",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.models.data2vec.modeling_tf_data2vec_vision.TFData2VecVisionModelOutputWithPooling</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecVisionConfig"
>Data2VecVisionConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) — Average of the last layer hidden states of the patch tokens (excluding the <em>[CLS]</em> token) if
<em>config.use_mean_pooling</em> is set to True. If set to False, then the final hidden state of the <em>[CLS]</em> token
will be returned.</p>
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


<p><code>transformers.models.data2vec.modeling_tf_data2vec_vision.TFData2VecVisionModelOutputWithPooling</code> or <code>tuple(tf.Tensor)</code></p>
`}}),ke=new se({props:{$$slots:{default:[Pi]},$$scope:{ctx:k}}}),Le=new K({props:{anchor:"transformers.TFData2VecVisionModel.call.example",$$slots:{default:[Oi]},$$scope:{ctx:k}}}),ie=new S({props:{title:"TFData2VecVisionForImageClassification",local:"transformers.TFData2VecVisionForImageClassification",headingTag:"h2"}}),X=new Z({props:{name:"class transformers.TFData2VecVisionForImageClassification",anchor:"transformers.TFData2VecVisionForImageClassification",parameters:[{name:"config",val:": Data2VecVisionConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFData2VecVisionForImageClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecVisionConfig">Data2VecVisionConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_tf_data2vec_vision.py#L1034"}}),xe=new se({props:{$$slots:{default:[Ki]},$$scope:{ctx:k}}}),Ie=new Z({props:{name:"call",anchor:"transformers.TFData2VecVisionForImageClassification.call",parameters:[{name:"pixel_values",val:": TFModelInputType | None = None"},{name:"head_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"training",val:": Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFData2VecVisionForImageClassification.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> <code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoImageProcessor">AutoImageProcessor</a>. See
<a href="/docs/transformers/main/ja/model_doc/beit#transformers.BeitFeatureExtractor.__call__">BeitImageProcessor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFData2VecVisionForImageClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFData2VecVisionForImageClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFData2VecVisionForImageClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFData2VecVisionForImageClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFData2VecVisionForImageClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFData2VecVisionForImageClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_tf_data2vec_vision.py#L1056",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecVisionConfig"
>Data2VecVisionConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/ja/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),dt=new se({props:{$$slots:{default:[el]},$$scope:{ctx:k}}}),Y=new K({props:{anchor:"transformers.TFData2VecVisionForImageClassification.call.example",$$slots:{default:[tl]},$$scope:{ctx:k}}}),ne=new S({props:{title:"TFData2VecVisionForSemanticSegmentation",local:"transformers.TFData2VecVisionForSemanticSegmentation",headingTag:"h2"}}),Fe=new Z({props:{name:"class transformers.TFData2VecVisionForSemanticSegmentation",anchor:"transformers.TFData2VecVisionForSemanticSegmentation",parameters:[{name:"config",val:": Data2VecVisionConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFData2VecVisionForSemanticSegmentation.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecVisionConfig">Data2VecVisionConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/ja/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_tf_data2vec_vision.py#L1541"}}),Ye=new se({props:{$$slots:{default:[ol]},$$scope:{ctx:k}}}),ce=new Z({props:{name:"call",anchor:"transformers.TFData2VecVisionForSemanticSegmentation.call",parameters:[{name:"pixel_values",val:": tf.Tensor | None = None"},{name:"head_mask",val:": tf.Tensor | None = None"},{name:"labels",val:": tf.Tensor | None = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.TFData2VecVisionForSemanticSegmentation.call.pixel_values",description:`<strong>pixel_values</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> <code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoImageProcessor">AutoImageProcessor</a>. See
<a href="/docs/transformers/main/ja/model_doc/beit#transformers.BeitFeatureExtractor.__call__">BeitImageProcessor.<strong>call</strong>()</a> for details.`,name:"pixel_values"},{anchor:"transformers.TFData2VecVisionForSemanticSegmentation.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFData2VecVisionForSemanticSegmentation.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFData2VecVisionForSemanticSegmentation.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFData2VecVisionForSemanticSegmentation.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/ja/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFData2VecVisionForSemanticSegmentation.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFData2VecVisionForSemanticSegmentation.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, height, width)</code>, <em>optional</em>) &#x2014;
Ground truth semantic segmentation maps for computing the loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code>, a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/modeling_tf_data2vec_vision.py#L1600",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.modeling_tf_outputs.TFSemanticSegmenterOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecVisionConfig"
>Data2VecVisionConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels, logits_height, logits_width)</code>) — Classification scores for each pixel.</p>
<Tip warning={true}>
<p>The logits returned do not necessarily have the same size as the <code>pixel_values</code> passed as inputs. This is
to avoid doing two interpolations and lose some quality when a user needs to resize the logits to the
original image size as post-processing. You should always check your logits shape and resize as needed.</p>
</Tip>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings, if the model has an embedding layer, + one for
the output of each layer) of shape <code>(batch_size, patch_size, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, patch_size, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.modeling_tf_outputs.TFSemanticSegmenterOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),P=new se({props:{$$slots:{default:[nl]},$$scope:{ctx:k}}}),O=new K({props:{anchor:"transformers.TFData2VecVisionForSemanticSegmentation.call.example",$$slots:{default:[al]},$$scope:{ctx:k}}}),{c(){_(e.$$.fragment),u=r(),n=d("div"),_(a.$$.fragment),f=r(),t=d("p"),t.innerHTML=w,te=r(),D=d("p"),D.innerHTML=I,oe=r(),_(W.$$.fragment),G=r(),R=d("div"),_(V.$$.fragment),C=r(),Ae=d("p"),Ae.innerHTML=we,co=r(),_(ke.$$.fragment),re=r(),_(Le.$$.fragment),he=r(),_(ie.$$.fragment),Ve=r(),N=d("div"),_(X.$$.fragment),Ge=r(),fe=d("p"),fe.textContent=st,rt=r(),_t=d("p"),_t.innerHTML=it,lt=r(),He=d("p"),He.innerHTML=je,mo=r(),_(xe.$$.fragment),ge=r(),_e=d("div"),_(Ie.$$.fragment),E=r(),$e=d("p"),$e.innerHTML=Gt,be=r(),_(dt.$$.fragment),Vt=r(),_(Y.$$.fragment),It=r(),_(ne.$$.fragment),Ce=r(),q=d("div"),_(Fe.$$.fragment),L=r(),Je=d("p"),Je.textContent=Rt,ye=r(),jt=d("p"),jt.innerHTML=Nt,Te=r(),ct=d("p"),ct.innerHTML=le,Me=r(),_(Ye.$$.fragment),mt=r(),A=d("div"),_(ce.$$.fragment),pt=r(),Re=d("p"),Re.innerHTML=po,Ne=r(),_(P.$$.fragment),Se=r(),_(O.$$.fragment),this.h()},l(j){b(e.$$.fragment,j),u=i(j),n=c(j,"DIV",{class:!0});var $=J(n);b(a.$$.fragment,$),f=i($),t=c($,"P",{"data-svelte-h":!0}),h(t)!=="svelte-59956h"&&(t.innerHTML=w),te=i($),D=c($,"P",{"data-svelte-h":!0}),h(D)!=="svelte-1be7e3c"&&(D.innerHTML=I),oe=i($),b(W.$$.fragment,$),G=i($),R=c($,"DIV",{class:!0});var z=J(R);b(V.$$.fragment,z),C=i(z),Ae=c(z,"P",{"data-svelte-h":!0}),h(Ae)!=="svelte-184y7zh"&&(Ae.innerHTML=we),co=i(z),b(ke.$$.fragment,z),re=i(z),b(Le.$$.fragment,z),z.forEach(l),$.forEach(l),he=i(j),b(ie.$$.fragment,j),Ve=i(j),N=c(j,"DIV",{class:!0});var H=J(N);b(X.$$.fragment,H),Ge=i(H),fe=c(H,"P",{"data-svelte-h":!0}),h(fe)!=="svelte-jbss5k"&&(fe.textContent=st),rt=i(H),_t=c(H,"P",{"data-svelte-h":!0}),h(_t)!=="svelte-1tgo4o8"&&(_t.innerHTML=it),lt=i(H),He=c(H,"P",{"data-svelte-h":!0}),h(He)!=="svelte-1be7e3c"&&(He.innerHTML=je),mo=i(H),b(xe.$$.fragment,H),ge=i(H),_e=c(H,"DIV",{class:!0});var me=J(_e);b(Ie.$$.fragment,me),E=i(me),$e=c(me,"P",{"data-svelte-h":!0}),h($e)!=="svelte-148u08h"&&($e.innerHTML=Gt),be=i(me),b(dt.$$.fragment,me),Vt=i(me),b(Y.$$.fragment,me),me.forEach(l),H.forEach(l),It=i(j),b(ne.$$.fragment,j),Ce=i(j),q=c(j,"DIV",{class:!0});var B=J(q);b(Fe.$$.fragment,B),L=i(B),Je=c(B,"P",{"data-svelte-h":!0}),h(Je)!=="svelte-1xxp1ql"&&(Je.textContent=Rt),ye=i(B),jt=c(B,"P",{"data-svelte-h":!0}),h(jt)!=="svelte-1tgo4o8"&&(jt.innerHTML=Nt),Te=i(B),ct=c(B,"P",{"data-svelte-h":!0}),h(ct)!=="svelte-1be7e3c"&&(ct.innerHTML=le),Me=i(B),b(Ye.$$.fragment,B),mt=i(B),A=c(B,"DIV",{class:!0});var Ue=J(A);b(ce.$$.fragment,Ue),pt=i(Ue),Re=c(Ue,"P",{"data-svelte-h":!0}),h(Re)!=="svelte-1smf4f5"&&(Re.innerHTML=po),Ne=i(Ue),b(P.$$.fragment,Ue),Se=i(Ue),b(O.$$.fragment,Ue),Ue.forEach(l),B.forEach(l),this.h()},h(){U(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(j,$){y(e,j,$),m(j,u,$),m(j,n,$),y(a,n,null),s(n,f),s(n,t),s(n,te),s(n,D),s(n,oe),y(W,n,null),s(n,G),s(n,R),y(V,R,null),s(R,C),s(R,Ae),s(R,co),y(ke,R,null),s(R,re),y(Le,R,null),m(j,he,$),y(ie,j,$),m(j,Ve,$),m(j,N,$),y(X,N,null),s(N,Ge),s(N,fe),s(N,rt),s(N,_t),s(N,lt),s(N,He),s(N,mo),y(xe,N,null),s(N,ge),s(N,_e),y(Ie,_e,null),s(_e,E),s(_e,$e),s(_e,be),y(dt,_e,null),s(_e,Vt),y(Y,_e,null),m(j,It,$),y(ne,j,$),m(j,Ce,$),m(j,q,$),y(Fe,q,null),s(q,L),s(q,Je),s(q,ye),s(q,jt),s(q,Te),s(q,ct),s(q,Me),y(Ye,q,null),s(q,mt),s(q,A),y(ce,A,null),s(A,pt),s(A,Re),s(A,Ne),y(P,A,null),s(A,Se),y(O,A,null),Q=!0},p(j,$){const z={};$&2&&(z.$$scope={dirty:$,ctx:j}),W.$set(z);const H={};$&2&&(H.$$scope={dirty:$,ctx:j}),ke.$set(H);const me={};$&2&&(me.$$scope={dirty:$,ctx:j}),Le.$set(me);const B={};$&2&&(B.$$scope={dirty:$,ctx:j}),xe.$set(B);const Ue={};$&2&&(Ue.$$scope={dirty:$,ctx:j}),dt.$set(Ue);const ro={};$&2&&(ro.$$scope={dirty:$,ctx:j}),Y.$set(ro);const ve={};$&2&&(ve.$$scope={dirty:$,ctx:j}),Ye.$set(ve);const io={};$&2&&(io.$$scope={dirty:$,ctx:j}),P.$set(io);const ut={};$&2&&(ut.$$scope={dirty:$,ctx:j}),O.$set(ut)},i(j){Q||(T(e.$$.fragment,j),T(a.$$.fragment,j),T(W.$$.fragment,j),T(V.$$.fragment,j),T(ke.$$.fragment,j),T(Le.$$.fragment,j),T(ie.$$.fragment,j),T(X.$$.fragment,j),T(xe.$$.fragment,j),T(Ie.$$.fragment,j),T(dt.$$.fragment,j),T(Y.$$.fragment,j),T(ne.$$.fragment,j),T(Fe.$$.fragment,j),T(Ye.$$.fragment,j),T(ce.$$.fragment,j),T(P.$$.fragment,j),T(O.$$.fragment,j),Q=!0)},o(j){M(e.$$.fragment,j),M(a.$$.fragment,j),M(W.$$.fragment,j),M(V.$$.fragment,j),M(ke.$$.fragment,j),M(Le.$$.fragment,j),M(ie.$$.fragment,j),M(X.$$.fragment,j),M(xe.$$.fragment,j),M(Ie.$$.fragment,j),M(dt.$$.fragment,j),M(Y.$$.fragment,j),M(ne.$$.fragment,j),M(Fe.$$.fragment,j),M(Ye.$$.fragment,j),M(ce.$$.fragment,j),M(P.$$.fragment,j),M(O.$$.fragment,j),Q=!1},d(j){j&&(l(u),l(n),l(he),l(Ve),l(N),l(It),l(Ce),l(q)),v(e,j),v(a),v(W),v(V),v(ke),v(Le),v(ie,j),v(X),v(xe),v(Ie),v(dt),v(Y),v(ne,j),v(Fe),v(Ye),v(ce),v(P),v(O)}}}function rl(k){let e,u;return e=new ri({props:{$$slots:{default:[sl]},$$scope:{ctx:k}}}),{c(){_(e.$$.fragment)},l(n){b(e.$$.fragment,n)},m(n,a){y(e,n,a),u=!0},p(n,a){const f={};a&2&&(f.$$scope={dirty:a,ctx:n}),e.$set(f)},i(n){u||(T(e.$$.fragment,n),u=!0)},o(n){M(e.$$.fragment,n),u=!1},d(n){v(e,n)}}}function il(k){let e,u,n,a,f,t,w,te,D,I=`Data2Vec モデルは、<a href="https://arxiv.org/pdf/2202.03555" rel="nofollow">data2vec: A General Framework for Self-supervised Learning in Speech, Vision and Language</a> で Alexei Baevski、Wei-Ning Hsu、Qiantong Xu、バArun Babu, Jiatao Gu and Michael Auli.
Data2Vec は、テキスト、音声、画像などのさまざまなデータ モダリティにわたる自己教師あり学習のための統一フレームワークを提案します。
重要なのは、事前トレーニングの予測ターゲットは、モダリティ固有のコンテキストに依存しないターゲットではなく、入力のコンテキスト化された潜在表現であることです。`,oe,W,G="論文の要約は次のとおりです。",R,V,C=`<em>自己教師あり学習の一般的な考え方はどのモダリティでも同じですが、実際のアルゴリズムと
単一のモダリティを念頭に置いて開発されたため、目的は大きく異なります。一般に近づけるために
自己教師あり学習では、どちらの音声に対しても同じ学習方法を使用するフレームワークである data2vec を紹介します。
NLP またはコンピューター ビジョン。中心となるアイデアは、完全な入力データの潜在的な表現を、
標準の Transformer アーキテクチャを使用した自己蒸留セットアップの入力のマスクされたビュー。
単語、視覚的トークン、人間の音声単位などのモダリティ固有のターゲットを予測するのではなく、
本質的にローカルであるため、data2vec は、からの情報を含む文脈化された潜在表現を予測します。
入力全体。音声認識、画像分類、および
自然言語理解は、新しい最先端技術や、主流のアプローチに匹敵するパフォーマンスを実証します。
モデルとコードは、<a href="http://www.github.com/pytorch/fairseq/tree/master/examples/data2vec" rel="nofollow">www.github.com/pytorch/fairseq/tree/master/examples/data2vec</a>.</em> で入手できます。`,Ae,we,co=`このモデルは、<a href="https://huggingface.co/edugp" rel="nofollow">edugp</a> および <a href="https://huggingface.co/patrickvonplaten" rel="nofollow">patrickvonplaten</a> によって提供されました。
<a href="https://github.com/sayakpaul" rel="nofollow">sayakpaul</a> と <a href="https://github.com/Rocketknight1" rel="nofollow">Rocketknight1</a> は、TensorFlow のビジョンに Data2Vec を提供しました。`,ke,re,Le=`元のコード (NLP および音声用) は、<a href="https://github.com/pytorch/fairseq/tree/main/examples/data2vec" rel="nofollow">こちら</a> にあります。
ビジョンの元のコードは <a href="https://github.com/facebookresearch/data2vec_vision/tree/main/beit" rel="nofollow">こちら</a> にあります。`,he,ie,Ve,N,X='<li>Data2VecAudio、Data2VecText、および Data2VecVision はすべて、同じ自己教師あり学習方法を使用してトレーニングされています。</li> <li>Data2VecAudio の場合、前処理は特徴抽出を含めて <code>Wav2Vec2Model</code> と同じです。</li> <li>Data2VecText の場合、前処理はトークン化を含めて <code>RobertaModel</code> と同じです。</li> <li>Data2VecVision の場合、前処理は特徴抽出を含めて <a href="/docs/transformers/main/ja/model_doc/beit#transformers.BeitModel">BeitModel</a> と同じです。</li>',Ge,fe,st,rt,_t="Data2Vec の使用を開始するのに役立つ公式 Hugging Face およびコミュニティ (🌎 で示される) リソースのリスト。",it,lt,He,je,mo='<li><a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecVisionForImageClassification">Data2VecVisionForImageClassification</a> は、この <a href="https://github.com/huggingface/transformers/tree/main/examples/pytorch/image-classification" rel="nofollow">サンプル スクリプト</a> および <a href="https://cola.research.google.com/github/huggingface/notebooks/blob/main/examples/image_classification.ipynb" rel="nofollow">ノートブック</a>。</li> <li>カスタム データセットで <a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.TFData2VecVisionForImageClassification">TFData2VecVisionForImageClassification</a> を微調整するには、<a href="https://colab.research.google.com/github/sayakpaul/TF-2.0-Hacks/blob/master/data2vec_vision_image_classification.ipynb" rel="nofollow">このノートブック</a> を参照してください。 ）。</li>',xe,ge,_e="<strong>Data2VecText ドキュメント リソース</strong>",Ie,E,$e='<li><a href="../tasks/sequence_classification">テキスト分類タスクガイド</a></li> <li><a href="../tasks/token_classification">トークン分類タスクガイド</a></li> <li><a href="../tasks/question_answering">質問回答タスク ガイド</a></li> <li><a href="../tasks/language_modeling">因果言語モデリング タスク ガイド</a></li> <li><a href="../tasks/masked_language_modeling">マスク言語モデリング タスク ガイド</a></li> <li><a href="../tasks/multiple_choice">多肢選択タスク ガイド</a></li>',Gt,be,dt="<strong>Data2VecAudio ドキュメント リソース</strong>",Vt,Y,It='<li><a href="../tasks/audio_classification">音声分類タスクガイド</a></li> <li><a href="../tasks/asr">自動音声認識タスクガイド</a></li>',ne,Ce,q="<strong>Data2VecVision ドキュメント リソース</strong>",Fe,L,Je='<li><a href="../tasks/image_classification">画像分類</a></li> <li><a href="../tasks/semantic_segmentation">セマンティック セグメンテーション</a></li>',Rt,ye,jt="ここに含めるリソースの送信に興味がある場合は、お気軽にプル リクエストを開いてください。審査させていただきます。リソースは、既存のリソースを複製するのではなく、何か新しいものを示すことが理想的です。",Nt,Te,ct,le,Me,Ye,mt,A=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecTextModel">Data2VecTextModel</a> and <a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecTextModel">Data2VecTextModel</a>. It
is used to instantiate a Data2VecText model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Data2VecText
<a href="https://huggingface.co/facebook/data2vec-text-base" rel="nofollow">facebook/data2vec-text-base</a> architecture.`,ce,pt,Re=`Configuration objects inherit from <a href="/docs/transformers/main/ja/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/ja/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,po,Ne,P,Se,O,Q,j,$,z,H=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecAudioModel">Data2VecAudioModel</a>. It is used to instantiate
an Data2VecAudio model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Data2VecAudio
<a href="https://huggingface.co/facebook/data2vec-audio-base-960h" rel="nofollow">facebook/data2vec-audio-base-960h</a> architecture.`,me,B,Ue=`Configuration objects inherit from <a href="/docs/transformers/main/ja/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/ja/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,ro,ve,io,ut,Bt,ht,Xt,lo,uo,Tn=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecVisionModel">Data2VecVisionModel</a>. It is used to instantiate
an Data2VecVision model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Data2VecVision
<a href="https://huggingface.co/facebook/data2vec-vision-base" rel="nofollow">facebook/data2vec-vision-base</a> architecture.`,Be,Xe,go,Ee,No,ho,bt;return f=new S({props:{title:"Data2Vec",local:"data2vec",headingTag:"h1"}}),w=new S({props:{title:"Overview",local:"overview",headingTag:"h2"}}),ie=new S({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),fe=new S({props:{title:"Resources",local:"resources",headingTag:"h2"}}),lt=new ui({props:{pipeline:"image-classification"}}),Te=new S({props:{title:"Data2VecTextConfig",local:"transformers.Data2VecTextConfig",headingTag:"h2"}}),Me=new Z({props:{name:"class transformers.Data2VecTextConfig",anchor:"transformers.Data2VecTextConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Data2VecTextConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the DATA2VEC model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <code>Data2VecModel</code>.`,name:"vocab_size"},{anchor:"transformers.Data2VecTextConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.Data2VecTextConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.Data2VecTextConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.Data2VecTextConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.Data2VecTextConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.Data2VecTextConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.Data2VecTextConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.Data2VecTextConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.Data2VecTextConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <code>Data2VecModel</code>.`,name:"type_vocab_size"},{anchor:"transformers.Data2VecTextConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.Data2VecTextConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.Data2VecTextConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.Data2VecTextConfig.is_decoder",description:`<strong>is_decoder</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the model is used as a decoder or not. If <code>False</code>, the model is used as an encoder.`,name:"is_decoder"},{anchor:"transformers.Data2VecTextConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.Data2VecTextConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/configuration_data2vec_text.py#L31"}}),Ne=new K({props:{anchor:"transformers.Data2VecTextConfig.example",$$slots:{default:[hi]},$$scope:{ctx:k}}}),Se=new S({props:{title:"Data2VecAudioConfig",local:"transformers.Data2VecAudioConfig",headingTag:"h2"}}),j=new Z({props:{name:"class transformers.Data2VecAudioConfig",anchor:"transformers.Data2VecAudioConfig",parameters:[{name:"vocab_size",val:" = 32"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"feat_proj_dropout",val:" = 0.0"},{name:"final_dropout",val:" = 0.1"},{name:"layerdrop",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"feat_extract_activation",val:" = 'gelu'"},{name:"conv_dim",val:" = (512, 512, 512, 512, 512, 512, 512)"},{name:"conv_stride",val:" = (5, 2, 2, 2, 2, 2, 2)"},{name:"conv_kernel",val:" = (10, 3, 3, 3, 3, 2, 2)"},{name:"conv_bias",val:" = False"},{name:"num_conv_pos_embedding_groups",val:" = 16"},{name:"conv_pos_kernel_size",val:" = 19"},{name:"num_conv_pos_embeddings",val:" = 5"},{name:"mask_time_prob",val:" = 0.05"},{name:"mask_time_length",val:" = 10"},{name:"mask_time_min_masks",val:" = 2"},{name:"mask_feature_prob",val:" = 0.0"},{name:"mask_feature_length",val:" = 10"},{name:"mask_feature_min_masks",val:" = 0"},{name:"ctc_loss_reduction",val:" = 'sum'"},{name:"ctc_zero_infinity",val:" = False"},{name:"use_weighted_layer_sum",val:" = False"},{name:"classifier_proj_size",val:" = 256"},{name:"tdnn_dim",val:" = (512, 512, 512, 512, 1500)"},{name:"tdnn_kernel",val:" = (5, 3, 3, 1, 1)"},{name:"tdnn_dilation",val:" = (1, 2, 3, 1, 1)"},{name:"xvector_output_dim",val:" = 512"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"add_adapter",val:" = False"},{name:"adapter_kernel_size",val:" = 3"},{name:"adapter_stride",val:" = 2"},{name:"num_adapter_layers",val:" = 3"},{name:"output_hidden_size",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Data2VecAudioConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Vocabulary size of the Data2VecAudio model. Defines the number of different tokens that can be represented
by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecAudioModel">Data2VecAudioModel</a> or <code>TFData2VecAudioModel</code>. Vocabulary size
of the model. Defines the different tokens that can be represented by the <em>inputs_ids</em> passed to the
forward method of <a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecAudioModel">Data2VecAudioModel</a>.`,name:"vocab_size"},{anchor:"transformers.Data2VecAudioConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.Data2VecAudioConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.Data2VecAudioConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.Data2VecAudioConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.Data2VecAudioConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.Data2VecAudioConfig.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout"},{anchor:"transformers.Data2VecAudioConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.Data2VecAudioConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.Data2VecAudioConfig.final_dropout",description:`<strong>final_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the final projection layer of <a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecAudioForCTC">Data2VecAudioForCTC</a>.`,name:"final_dropout"},{anchor:"transformers.Data2VecAudioConfig.layerdrop",description:`<strong>layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The LayerDrop probability. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>) for more
details.`,name:"layerdrop"},{anchor:"transformers.Data2VecAudioConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.Data2VecAudioConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.Data2VecAudioConfig.feat_proj_dropout",description:`<strong>feat_proj_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for output of the feature encoder.`,name:"feat_proj_dropout"},{anchor:"transformers.Data2VecAudioConfig.feat_extract_activation",description:"<strong>feat_extract_activation</strong> (<code>str, </code>optional<code>, defaults to </code>&#x201C;gelu&#x201D;<code>) -- The non-linear activation function (function or string) in the 1D convolutional layers of the feature extractor. If string, </code>&#x201C;gelu&#x201D;<code>, </code>&#x201C;relu&#x201D;<code>, </code>&#x201C;selu&#x201D;<code>and</code>&#x201C;gelu_new&#x201D;` are supported.",name:"feat_extract_activation"},{anchor:"transformers.Data2VecAudioConfig.conv_dim",description:`<strong>conv_dim</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(512, 512, 512, 512, 512, 512, 512)</code>) &#x2014;
A tuple of integers defining the number of input and output channels of each 1D convolutional layer in the
feature encoder. The length of <em>conv_dim</em> defines the number of 1D convolutional layers.`,name:"conv_dim"},{anchor:"transformers.Data2VecAudioConfig.conv_stride",description:`<strong>conv_stride</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(5, 2, 2, 2, 2, 2, 2)</code>) &#x2014;
A tuple of integers defining the stride of each 1D convolutional layer in the feature encoder. The length
of <em>conv_stride</em> defines the number of convolutional layers and has to match the length of <em>conv_dim</em>.`,name:"conv_stride"},{anchor:"transformers.Data2VecAudioConfig.conv_kernel",description:`<strong>conv_kernel</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(10, 3, 3, 3, 3, 3, 3)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the feature encoder. The
length of <em>conv_kernel</em> defines the number of convolutional layers and has to match the length of
<em>conv_dim</em>.`,name:"conv_kernel"},{anchor:"transformers.Data2VecAudioConfig.conv_bias",description:`<strong>conv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the 1D convolutional layers have a bias.`,name:"conv_bias"},{anchor:"transformers.Data2VecAudioConfig.num_conv_pos_embeddings",description:`<strong>num_conv_pos_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Number of convolutional positional embeddings. Defines the kernel size of 1D convolutional positional
embeddings layer.`,name:"num_conv_pos_embeddings"},{anchor:"transformers.Data2VecAudioConfig.num_conv_pos_embedding_groups",description:`<strong>num_conv_pos_embedding_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of groups of 1D convolutional positional embeddings layer.`,name:"num_conv_pos_embedding_groups"},{anchor:"transformers.Data2VecAudioConfig.mask_time_prob",description:`<strong>mask_time_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.05) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the time axis which will be masked. The masking
procecure generates &#x201D;mask_time_prob<em>len(time_axis)/mask_time_length&#x201D; independent masks over the axis. If
reasoning from the propability of each feature vector to be chosen as the start of the vector span to be
masked, </em>mask_time_prob<em> should be \`prob_vector_start</em>mask_time_length\`. Note that overlap may decrease the`,name:"mask_time_prob"},{anchor:"transformers.Data2VecAudioConfig.mask_time_length",description:`<strong>mask_time_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the time axis.`,name:"mask_time_length"},{anchor:"transformers.Data2VecAudioConfig.mask_time_min_masks",description:`<strong>mask_time_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 2), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the time axis, each time step,
irrespectively of <code>mask_feature_prob</code>. Only relevant if &#x201D;mask_time_prob*len(time_axis)/mask_time_length &lt;
mask_time_min_masks&#x201D;`,name:"mask_time_min_masks"},{anchor:"transformers.Data2VecAudioConfig.mask_feature_prob",description:`<strong>mask_feature_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Percentage (between 0 and 1) of all feature vectors along the feature axis which will be masked. The
masking procecure generates &#x201D;mask_feature_prob<em>len(feature_axis)/mask_time_length&#x201D; independent masks over
the axis. If reasoning from the propability of each feature vector to be chosen as the start of the vector
span to be masked, </em>mask_feature_prob<em> should be \`prob_vector_start</em>mask_feature_length<code>. Note that overlap may decrease the actual percentage of masked vectors. This is only relevant if </code>apply_spec_augment is
True\`.`,name:"mask_feature_prob"},{anchor:"transformers.Data2VecAudioConfig.mask_feature_length",description:`<strong>mask_feature_length</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Length of vector span along the feature axis.`,name:"mask_feature_length"},{anchor:"transformers.Data2VecAudioConfig.mask_feature_min_masks",description:`<strong>mask_feature_min_masks</strong> (<code>int</code>, <em>optional</em>, defaults to 0), &#x2014;
The minimum number of masks of length <code>mask_feature_length</code> generated along the feature axis, each time
step, irrespectively of <code>mask_feature_prob</code>. Only relevant if
&#x201D;mask_feature_prob*len(feature_axis)/mask_feature_length &lt; mask_feature_min_masks&#x201D;`,name:"mask_feature_min_masks"},{anchor:"transformers.Data2VecAudioConfig.ctc_loss_reduction",description:`<strong>ctc_loss_reduction</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;sum&quot;</code>) &#x2014;
Specifies the reduction to apply to the output of <code>torch.nn.CTCLoss</code>. Only relevant when training an
instance of <a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecAudioForCTC">Data2VecAudioForCTC</a>.`,name:"ctc_loss_reduction"},{anchor:"transformers.Data2VecAudioConfig.ctc_zero_infinity",description:`<strong>ctc_zero_infinity</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to zero infinite losses and the associated gradients of <code>torch.nn.CTCLoss</code>. Infinite losses mainly
occur when the inputs are too short to be aligned to the targets. Only relevant when training an instance
of <a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecAudioForCTC">Data2VecAudioForCTC</a>.`,name:"ctc_zero_infinity"},{anchor:"transformers.Data2VecAudioConfig.use_weighted_layer_sum",description:`<strong>use_weighted_layer_sum</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a weighted average of layer outputs with learned weights. Only relevant when using an
instance of <a href="/docs/transformers/main/ja/model_doc/data2vec#transformers.Data2VecAudioForSequenceClassification">Data2VecAudioForSequenceClassification</a>.`,name:"use_weighted_layer_sum"},{anchor:"transformers.Data2VecAudioConfig.classifier_proj_size",description:`<strong>classifier_proj_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the projection before token mean-pooling for classification.`,name:"classifier_proj_size"},{anchor:"transformers.Data2VecAudioConfig.tdnn_dim",description:`<strong>tdnn_dim</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(512, 512, 512, 512, 1500)</code>) &#x2014;
A tuple of integers defining the number of output channels of each 1D convolutional layer in the <em>TDNN</em>
module of the <em>XVector</em> model. The length of <em>tdnn_dim</em> defines the number of <em>TDNN</em> layers.`,name:"tdnn_dim"},{anchor:"transformers.Data2VecAudioConfig.tdnn_kernel",description:`<strong>tdnn_kernel</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(5, 3, 3, 1, 1)</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the <em>TDNN</em> module of the
<em>XVector</em> model. The length of <em>tdnn_kernel</em> has to match the length of <em>tdnn_dim</em>.`,name:"tdnn_kernel"},{anchor:"transformers.Data2VecAudioConfig.tdnn_dilation",description:`<strong>tdnn_dilation</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>(1, 2, 3, 1, 1)</code>) &#x2014;
A tuple of integers defining the dilation factor of each 1D convolutional layer in <em>TDNN</em> module of the
<em>XVector</em> model. The length of <em>tdnn_dilation</em> has to match the length of <em>tdnn_dim</em>.`,name:"tdnn_dilation"},{anchor:"transformers.Data2VecAudioConfig.xvector_output_dim",description:`<strong>xvector_output_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the <em>XVector</em> embedding vectors.`,name:"xvector_output_dim"},{anchor:"transformers.Data2VecAudioConfig.add_adapter",description:`<strong>add_adapter</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether a convolutional network should be stacked on top of the Data2VecAudio Encoder. Can be very useful
for warm-starting Data2VecAudio for SpeechEncoderDecoder models.`,name:"add_adapter"},{anchor:"transformers.Data2VecAudioConfig.adapter_kernel_size",description:`<strong>adapter_kernel_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
Kernel size of the convolutional layers in the adapter network. Only relevant if <code>add_adapter is True</code>.`,name:"adapter_kernel_size"},{anchor:"transformers.Data2VecAudioConfig.adapter_stride",description:`<strong>adapter_stride</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Stride of the convolutional layers in the adapter network. Only relevant if <code>add_adapter is True</code>.`,name:"adapter_stride"},{anchor:"transformers.Data2VecAudioConfig.num_adapter_layers",description:`<strong>num_adapter_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
Number of convolutional layers that should be used in the adapter network. Only relevant if <code>add_adapter is True</code>.`,name:"num_adapter_layers"},{anchor:"transformers.Data2VecAudioConfig.output_hidden_size",description:`<strong>output_hidden_size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Dimensionality of the encoder output layer. If not defined, this defaults to <em>hidden-size</em>. Only relevant
if <code>add_adapter is True</code>.`,name:"output_hidden_size"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/configuration_data2vec_audio.py#L31"}}),ve=new K({props:{anchor:"transformers.Data2VecAudioConfig.example",$$slots:{default:[fi]},$$scope:{ctx:k}}}),ut=new S({props:{title:"Data2VecVisionConfig",local:"transformers.Data2VecVisionConfig",headingTag:"h2"}}),Xt=new Z({props:{name:"class transformers.Data2VecVisionConfig",anchor:"transformers.Data2VecVisionConfig",parameters:[{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"image_size",val:" = 224"},{name:"patch_size",val:" = 16"},{name:"num_channels",val:" = 3"},{name:"use_mask_token",val:" = False"},{name:"use_absolute_position_embeddings",val:" = False"},{name:"use_relative_position_bias",val:" = False"},{name:"use_shared_relative_position_bias",val:" = False"},{name:"layer_scale_init_value",val:" = 0.1"},{name:"drop_path_rate",val:" = 0.1"},{name:"use_mean_pooling",val:" = True"},{name:"out_indices",val:" = [3, 5, 7, 11]"},{name:"pool_scales",val:" = [1, 2, 3, 6]"},{name:"use_auxiliary_head",val:" = True"},{name:"auxiliary_loss_weight",val:" = 0.4"},{name:"auxiliary_channels",val:" = 256"},{name:"auxiliary_num_convs",val:" = 1"},{name:"auxiliary_concat_input",val:" = False"},{name:"semantic_loss_ignore_index",val:" = 255"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Data2VecVisionConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.Data2VecVisionConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.Data2VecVisionConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.Data2VecVisionConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.Data2VecVisionConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.Data2VecVisionConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.Data2VecVisionConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.Data2VecVisionConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.Data2VecVisionConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.Data2VecVisionConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.Data2VecVisionConfig.patch_size",description:`<strong>patch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
The size (resolution) of each patch.`,name:"patch_size"},{anchor:"transformers.Data2VecVisionConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.Data2VecVisionConfig.use_mask_token",description:`<strong>use_mask_token</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use a mask token for masked image modeling.`,name:"use_mask_token"},{anchor:"transformers.Data2VecVisionConfig.use_absolute_position_embeddings",description:`<strong>use_absolute_position_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use BERT-style absolute position embeddings.`,name:"use_absolute_position_embeddings"},{anchor:"transformers.Data2VecVisionConfig.use_relative_position_bias",description:`<strong>use_relative_position_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use T5-style relative position embeddings in the self-attention layers.`,name:"use_relative_position_bias"},{anchor:"transformers.Data2VecVisionConfig.use_shared_relative_position_bias",description:`<strong>use_shared_relative_position_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use the same relative position embeddings across all self-attention layers of the Transformer.`,name:"use_shared_relative_position_bias"},{anchor:"transformers.Data2VecVisionConfig.layer_scale_init_value",description:`<strong>layer_scale_init_value</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Scale to use in the self-attention layers. 0.1 for base, 1e-5 for large. Set 0 to disable layer scale.`,name:"layer_scale_init_value"},{anchor:"transformers.Data2VecVisionConfig.drop_path_rate",description:`<strong>drop_path_rate</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Stochastic depth rate per sample (when applied in the main path of residual layers).`,name:"drop_path_rate"},{anchor:"transformers.Data2VecVisionConfig.use_mean_pooling",description:`<strong>use_mean_pooling</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to mean pool the final hidden states of the patches instead of using the final hidden state of the
CLS token, before applying the classification head.`,name:"use_mean_pooling"},{anchor:"transformers.Data2VecVisionConfig.out_indices",description:`<strong>out_indices</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[3, 5, 7, 11]</code>) &#x2014;
Indices of the feature maps to use for semantic segmentation.`,name:"out_indices"},{anchor:"transformers.Data2VecVisionConfig.pool_scales",description:`<strong>pool_scales</strong> (<code>Tuple[int]</code>, <em>optional</em>, defaults to <code>[1, 2, 3, 6]</code>) &#x2014;
Pooling scales used in Pooling Pyramid Module applied on the last feature map.`,name:"pool_scales"},{anchor:"transformers.Data2VecVisionConfig.use_auxiliary_head",description:`<strong>use_auxiliary_head</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use an auxiliary head during training.`,name:"use_auxiliary_head"},{anchor:"transformers.Data2VecVisionConfig.auxiliary_loss_weight",description:`<strong>auxiliary_loss_weight</strong> (<code>float</code>, <em>optional</em>, defaults to 0.4) &#x2014;
Weight of the cross-entropy loss of the auxiliary head.`,name:"auxiliary_loss_weight"},{anchor:"transformers.Data2VecVisionConfig.auxiliary_channels",description:`<strong>auxiliary_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Number of channels to use in the auxiliary head.`,name:"auxiliary_channels"},{anchor:"transformers.Data2VecVisionConfig.auxiliary_num_convs",description:`<strong>auxiliary_num_convs</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Number of convolutional layers to use in the auxiliary head.`,name:"auxiliary_num_convs"},{anchor:"transformers.Data2VecVisionConfig.auxiliary_concat_input",description:`<strong>auxiliary_concat_input</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to concatenate the output of the auxiliary head with the input before the classification layer.`,name:"auxiliary_concat_input"},{anchor:"transformers.Data2VecVisionConfig.semantic_loss_ignore_index",description:`<strong>semantic_loss_ignore_index</strong> (<code>int</code>, <em>optional</em>, defaults to 255) &#x2014;
The index that is ignored by the loss function of the semantic segmentation model.`,name:"semantic_loss_ignore_index"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/data2vec/configuration_data2vec_vision.py#L35"}}),Xe=new K({props:{anchor:"transformers.Data2VecVisionConfig.example",$$slots:{default:[gi]},$$scope:{ctx:k}}}),Ee=new pi({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[rl],pytorch:[Ei]},$$scope:{ctx:k}}}),{c(){e=d("meta"),u=r(),n=d("p"),a=r(),_(f.$$.fragment),t=r(),_(w.$$.fragment),te=r(),D=d("p"),D.innerHTML=I,oe=r(),W=d("p"),W.textContent=G,R=r(),V=d("p"),V.innerHTML=C,Ae=r(),we=d("p"),we.innerHTML=co,ke=r(),re=d("p"),re.innerHTML=Le,he=r(),_(ie.$$.fragment),Ve=r(),N=d("ul"),N.innerHTML=X,Ge=r(),_(fe.$$.fragment),st=r(),rt=d("p"),rt.textContent=_t,it=r(),_(lt.$$.fragment),He=r(),je=d("ul"),je.innerHTML=mo,xe=r(),ge=d("p"),ge.innerHTML=_e,Ie=r(),E=d("ul"),E.innerHTML=$e,Gt=r(),be=d("p"),be.innerHTML=dt,Vt=r(),Y=d("ul"),Y.innerHTML=It,ne=r(),Ce=d("p"),Ce.innerHTML=q,Fe=r(),L=d("ul"),L.innerHTML=Je,Rt=r(),ye=d("p"),ye.textContent=jt,Nt=r(),_(Te.$$.fragment),ct=r(),le=d("div"),_(Me.$$.fragment),Ye=r(),mt=d("p"),mt.innerHTML=A,ce=r(),pt=d("p"),pt.innerHTML=Re,po=r(),_(Ne.$$.fragment),P=r(),_(Se.$$.fragment),O=r(),Q=d("div"),_(j.$$.fragment),$=r(),z=d("p"),z.innerHTML=H,me=r(),B=d("p"),B.innerHTML=Ue,ro=r(),_(ve.$$.fragment),io=r(),_(ut.$$.fragment),Bt=r(),ht=d("div"),_(Xt.$$.fragment),lo=r(),uo=d("p"),uo.innerHTML=Tn,Be=r(),_(Xe.$$.fragment),go=r(),_(Ee.$$.fragment),No=r(),ho=d("p"),this.h()},l(p){const x=mi("svelte-u9bgzb",document.head);e=c(x,"META",{name:!0,content:!0}),x.forEach(l),u=i(p),n=c(p,"P",{}),J(n).forEach(l),a=i(p),b(f.$$.fragment,p),t=i(p),b(w.$$.fragment,p),te=i(p),D=c(p,"P",{"data-svelte-h":!0}),h(D)!=="svelte-1yb5aue"&&(D.innerHTML=I),oe=i(p),W=c(p,"P",{"data-svelte-h":!0}),h(W)!=="svelte-1cv3nri"&&(W.textContent=G),R=i(p),V=c(p,"P",{"data-svelte-h":!0}),h(V)!=="svelte-1ata8kt"&&(V.innerHTML=C),Ae=i(p),we=c(p,"P",{"data-svelte-h":!0}),h(we)!=="svelte-1ak2c0l"&&(we.innerHTML=co),ke=i(p),re=c(p,"P",{"data-svelte-h":!0}),h(re)!=="svelte-1dp39od"&&(re.innerHTML=Le),he=i(p),b(ie.$$.fragment,p),Ve=i(p),N=c(p,"UL",{"data-svelte-h":!0}),h(N)!=="svelte-jmz8wf"&&(N.innerHTML=X),Ge=i(p),b(fe.$$.fragment,p),st=i(p),rt=c(p,"P",{"data-svelte-h":!0}),h(rt)!=="svelte-3fk4gm"&&(rt.textContent=_t),it=i(p),b(lt.$$.fragment,p),He=i(p),je=c(p,"UL",{"data-svelte-h":!0}),h(je)!=="svelte-zy5w73"&&(je.innerHTML=mo),xe=i(p),ge=c(p,"P",{"data-svelte-h":!0}),h(ge)!=="svelte-j3ml1h"&&(ge.innerHTML=_e),Ie=i(p),E=c(p,"UL",{"data-svelte-h":!0}),h(E)!=="svelte-1r9t96i"&&(E.innerHTML=$e),Gt=i(p),be=c(p,"P",{"data-svelte-h":!0}),h(be)!=="svelte-11r6yg8"&&(be.innerHTML=dt),Vt=i(p),Y=c(p,"UL",{"data-svelte-h":!0}),h(Y)!=="svelte-1t2m9tb"&&(Y.innerHTML=It),ne=i(p),Ce=c(p,"P",{"data-svelte-h":!0}),h(Ce)!=="svelte-1lu3230"&&(Ce.innerHTML=q),Fe=i(p),L=c(p,"UL",{"data-svelte-h":!0}),h(L)!=="svelte-1c4hz56"&&(L.innerHTML=Je),Rt=i(p),ye=c(p,"P",{"data-svelte-h":!0}),h(ye)!=="svelte-17ytafw"&&(ye.textContent=jt),Nt=i(p),b(Te.$$.fragment,p),ct=i(p),le=c(p,"DIV",{class:!0});var qe=J(le);b(Me.$$.fragment,qe),Ye=i(qe),mt=c(qe,"P",{"data-svelte-h":!0}),h(mt)!=="svelte-1mshpuh"&&(mt.innerHTML=A),ce=i(qe),pt=c(qe,"P",{"data-svelte-h":!0}),h(pt)!=="svelte-1s6wgpv"&&(pt.innerHTML=Re),po=i(qe),b(Ne.$$.fragment,qe),qe.forEach(l),P=i(p),b(Se.$$.fragment,p),O=i(p),Q=c(p,"DIV",{class:!0});var pe=J(Q);b(j.$$.fragment,pe),$=i(pe),z=c(pe,"P",{"data-svelte-h":!0}),h(z)!=="svelte-12lcj4z"&&(z.innerHTML=H),me=i(pe),B=c(pe,"P",{"data-svelte-h":!0}),h(B)!=="svelte-1s6wgpv"&&(B.innerHTML=Ue),ro=i(pe),b(ve.$$.fragment,pe),pe.forEach(l),io=i(p),b(ut.$$.fragment,p),Bt=i(p),ht=c(p,"DIV",{class:!0});var ft=J(ht);b(Xt.$$.fragment,ft),lo=i(ft),uo=c(ft,"P",{"data-svelte-h":!0}),h(uo)!=="svelte-19h8db1"&&(uo.innerHTML=Tn),Be=i(ft),b(Xe.$$.fragment,ft),ft.forEach(l),go=i(p),b(Ee.$$.fragment,p),No=i(p),ho=c(p,"P",{}),J(ho).forEach(l),this.h()},h(){U(e,"name","hf:doc:metadata"),U(e,"content",ll),U(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(p,x){s(document.head,e),m(p,u,x),m(p,n,x),m(p,a,x),y(f,p,x),m(p,t,x),y(w,p,x),m(p,te,x),m(p,D,x),m(p,oe,x),m(p,W,x),m(p,R,x),m(p,V,x),m(p,Ae,x),m(p,we,x),m(p,ke,x),m(p,re,x),m(p,he,x),y(ie,p,x),m(p,Ve,x),m(p,N,x),m(p,Ge,x),y(fe,p,x),m(p,st,x),m(p,rt,x),m(p,it,x),y(lt,p,x),m(p,He,x),m(p,je,x),m(p,xe,x),m(p,ge,x),m(p,Ie,x),m(p,E,x),m(p,Gt,x),m(p,be,x),m(p,Vt,x),m(p,Y,x),m(p,ne,x),m(p,Ce,x),m(p,Fe,x),m(p,L,x),m(p,Rt,x),m(p,ye,x),m(p,Nt,x),y(Te,p,x),m(p,ct,x),m(p,le,x),y(Me,le,null),s(le,Ye),s(le,mt),s(le,ce),s(le,pt),s(le,po),y(Ne,le,null),m(p,P,x),y(Se,p,x),m(p,O,x),m(p,Q,x),y(j,Q,null),s(Q,$),s(Q,z),s(Q,me),s(Q,B),s(Q,ro),y(ve,Q,null),m(p,io,x),y(ut,p,x),m(p,Bt,x),m(p,ht,x),y(Xt,ht,null),s(ht,lo),s(ht,uo),s(ht,Be),y(Xe,ht,null),m(p,go,x),y(Ee,p,x),m(p,No,x),m(p,ho,x),bt=!0},p(p,[x]){const qe={};x&2&&(qe.$$scope={dirty:x,ctx:p}),Ne.$set(qe);const pe={};x&2&&(pe.$$scope={dirty:x,ctx:p}),ve.$set(pe);const ft={};x&2&&(ft.$$scope={dirty:x,ctx:p}),Xe.$set(ft);const de={};x&2&&(de.$$scope={dirty:x,ctx:p}),Ee.$set(de)},i(p){bt||(T(f.$$.fragment,p),T(w.$$.fragment,p),T(ie.$$.fragment,p),T(fe.$$.fragment,p),T(lt.$$.fragment,p),T(Te.$$.fragment,p),T(Me.$$.fragment,p),T(Ne.$$.fragment,p),T(Se.$$.fragment,p),T(j.$$.fragment,p),T(ve.$$.fragment,p),T(ut.$$.fragment,p),T(Xt.$$.fragment,p),T(Xe.$$.fragment,p),T(Ee.$$.fragment,p),bt=!0)},o(p){M(f.$$.fragment,p),M(w.$$.fragment,p),M(ie.$$.fragment,p),M(fe.$$.fragment,p),M(lt.$$.fragment,p),M(Te.$$.fragment,p),M(Me.$$.fragment,p),M(Ne.$$.fragment,p),M(Se.$$.fragment,p),M(j.$$.fragment,p),M(ve.$$.fragment,p),M(ut.$$.fragment,p),M(Xt.$$.fragment,p),M(Xe.$$.fragment,p),M(Ee.$$.fragment,p),bt=!1},d(p){p&&(l(u),l(n),l(a),l(t),l(te),l(D),l(oe),l(W),l(R),l(V),l(Ae),l(we),l(ke),l(re),l(he),l(Ve),l(N),l(Ge),l(st),l(rt),l(it),l(He),l(je),l(xe),l(ge),l(Ie),l(E),l(Gt),l(be),l(Vt),l(Y),l(ne),l(Ce),l(Fe),l(L),l(Rt),l(ye),l(Nt),l(ct),l(le),l(P),l(O),l(Q),l(io),l(Bt),l(ht),l(go),l(No),l(ho)),l(e),v(f,p),v(w,p),v(ie,p),v(fe,p),v(lt,p),v(Te,p),v(Me),v(Ne),v(Se,p),v(j),v(ve),v(ut,p),v(Xt),v(Xe),v(Ee,p)}}}const ll='{"title":"Data2Vec","local":"data2vec","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"Data2VecTextConfig","local":"transformers.Data2VecTextConfig","sections":[],"depth":2},{"title":"Data2VecAudioConfig","local":"transformers.Data2VecAudioConfig","sections":[],"depth":2},{"title":"Data2VecVisionConfig","local":"transformers.Data2VecVisionConfig","sections":[],"depth":2},{"title":"Data2VecAudioModel","local":"transformers.Data2VecAudioModel","sections":[],"depth":2},{"title":"Data2VecAudioForAudioFrameClassification","local":"transformers.Data2VecAudioForAudioFrameClassification","sections":[],"depth":2},{"title":"Data2VecAudioForCTC","local":"transformers.Data2VecAudioForCTC","sections":[],"depth":2},{"title":"Data2VecAudioForSequenceClassification","local":"transformers.Data2VecAudioForSequenceClassification","sections":[],"depth":2},{"title":"Data2VecAudioForXVector","local":"transformers.Data2VecAudioForXVector","sections":[],"depth":2},{"title":"Data2VecTextModel","local":"transformers.Data2VecTextModel","sections":[],"depth":2},{"title":"Data2VecTextForCausalLM","local":"transformers.Data2VecTextForCausalLM","sections":[],"depth":2},{"title":"Data2VecTextForMaskedLM","local":"transformers.Data2VecTextForMaskedLM","sections":[],"depth":2},{"title":"Data2VecTextForSequenceClassification","local":"transformers.Data2VecTextForSequenceClassification","sections":[],"depth":2},{"title":"Data2VecTextForMultipleChoice","local":"transformers.Data2VecTextForMultipleChoice","sections":[],"depth":2},{"title":"Data2VecTextForTokenClassification","local":"transformers.Data2VecTextForTokenClassification","sections":[],"depth":2},{"title":"Data2VecTextForQuestionAnswering","local":"transformers.Data2VecTextForQuestionAnswering","sections":[],"depth":2},{"title":"Data2VecVisionModel","local":"transformers.Data2VecVisionModel","sections":[],"depth":2},{"title":"Data2VecVisionForImageClassification","local":"transformers.Data2VecVisionForImageClassification","sections":[],"depth":2},{"title":"Data2VecVisionForSemanticSegmentation","local":"transformers.Data2VecVisionForSemanticSegmentation","sections":[],"depth":2},{"title":"TFData2VecVisionModel","local":"transformers.TFData2VecVisionModel","sections":[],"depth":2},{"title":"TFData2VecVisionForImageClassification","local":"transformers.TFData2VecVisionForImageClassification","sections":[],"depth":2},{"title":"TFData2VecVisionForSemanticSegmentation","local":"transformers.TFData2VecVisionForSemanticSegmentation","sections":[],"depth":2}],"depth":1}';function dl(k){return li(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class yl extends di{constructor(e){super(),ci(this,e,dl,il,ii,{})}}export{yl as component};
