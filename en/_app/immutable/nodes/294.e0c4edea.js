import{s as cs,o as ds,n as Me}from"../chunks/scheduler.9bc65507.js";import{S as ms,i as ps,g as m,s as o,r as f,A as hs,h as p,f as a,c as r,j as x,u,x as b,k,y as d,a as l,v as g,d as M,t as y,w as T}from"../chunks/index.707bf1b6.js";import{T as is}from"../chunks/Tip.c2ecdbf4.js";import{D as oe}from"../chunks/Docstring.17db21ae.js";import{C as He}from"../chunks/CodeBlock.54a9f38d.js";import{E as Le}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as ue}from"../chunks/Heading.342b1fa6.js";function fs(v){let s,w="Example:",i,c,h;return c=new He({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFZpdml0Q29uZmlnJTJDJTIwVml2aXRNb2RlbCUwQSUwQSUyMyUyMEluaXRpYWxpemluZyUyMGElMjBWaVZpVCUyMGdvb2dsZSUyRnZpdml0LWItMTZ4Mi1raW5ldGljczQwMCUyMHN0eWxlJTIwY29uZmlndXJhdGlvbiUwQWNvbmZpZ3VyYXRpb24lMjAlM0QlMjBWaXZpdENvbmZpZygpJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyMG1vZGVsJTIwKHdpdGglMjByYW5kb20lMjB3ZWlnaHRzKSUyMGZyb20lMjB0aGUlMjBnb29nbGUlMkZ2aXZpdC1iLTE2eDIta2luZXRpY3M0MDAlMjBzdHlsZSUyMGNvbmZpZ3VyYXRpb24lMEFtb2RlbCUyMCUzRCUyMFZpdml0TW9kZWwoY29uZmlndXJhdGlvbiklMEElMEElMjMlMjBBY2Nlc3NpbmclMjB0aGUlMjBtb2RlbCUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwbW9kZWwuY29uZmln",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> VivitConfig, VivitModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ViViT google/vivit-b-16x2-kinetics400 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = VivitConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the google/vivit-b-16x2-kinetics400 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VivitModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){s=m("p"),s.textContent=w,i=o(),f(c.$$.fragment)},l(t){s=p(t,"P",{"data-svelte-h":!0}),b(s)!=="svelte-11lpom8"&&(s.textContent=w),i=r(t),u(c.$$.fragment,t)},m(t,_){l(t,s,_),l(t,i,_),g(c,t,_),h=!0},p:Me,i(t){h||(M(c.$$.fragment,t),h=!0)},o(t){y(c.$$.fragment,t),h=!1},d(t){t&&(a(s),a(i)),T(c,t)}}}function us(v){let s,w=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){s=m("p"),s.innerHTML=w},l(i){s=p(i,"P",{"data-svelte-h":!0}),b(s)!=="svelte-fincs2"&&(s.innerHTML=w)},m(i,c){l(i,s,c)},p:Me,d(i){i&&a(s)}}}function gs(v){let s,w="Examples:",i,c,h;return c=new He({props:{code:"aW1wb3J0JTIwYXYlMEFpbXBvcnQlMjBudW1weSUyMGFzJTIwbnAlMEElMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwVml2aXRJbWFnZVByb2Nlc3NvciUyQyUyMFZpdml0TW9kZWwlMEFmcm9tJTIwaHVnZ2luZ2ZhY2VfaHViJTIwaW1wb3J0JTIwaGZfaHViX2Rvd25sb2FkJTBBJTBBbnAucmFuZG9tLnNlZWQoMCklMEElMEElMEFkZWYlMjByZWFkX3ZpZGVvX3B5YXYoY29udGFpbmVyJTJDJTIwaW5kaWNlcyklM0ElMEElMjAlMjAlMjAlMjAnJyclMEElMjAlMjAlMjAlMjBEZWNvZGUlMjB0aGUlMjB2aWRlbyUyMHdpdGglMjBQeUFWJTIwZGVjb2Rlci4lMEElMjAlMjAlMjAlMjBBcmdzJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwY29udGFpbmVyJTIwKCU2MGF2LmNvbnRhaW5lci5pbnB1dC5JbnB1dENvbnRhaW5lciU2MCklM0ElMjBQeUFWJTIwY29udGFpbmVyLiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMGluZGljZXMlMjAoJTYwTGlzdCU1QmludCU1RCU2MCklM0ElMjBMaXN0JTIwb2YlMjBmcmFtZSUyMGluZGljZXMlMjB0byUyMGRlY29kZS4lMEElMjAlMjAlMjAlMjBSZXR1cm5zJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcmVzdWx0JTIwKG5wLm5kYXJyYXkpJTNBJTIwbnAlMjBhcnJheSUyMG9mJTIwZGVjb2RlZCUyMGZyYW1lcyUyMG9mJTIwc2hhcGUlMjAobnVtX2ZyYW1lcyUyQyUyMGhlaWdodCUyQyUyMHdpZHRoJTJDJTIwMykuJTBBJTIwJTIwJTIwJTIwJycnJTBBJTIwJTIwJTIwJTIwZnJhbWVzJTIwJTNEJTIwJTVCJTVEJTBBJTIwJTIwJTIwJTIwY29udGFpbmVyLnNlZWsoMCklMEElMjAlMjAlMjAlMjBzdGFydF9pbmRleCUyMCUzRCUyMGluZGljZXMlNUIwJTVEJTBBJTIwJTIwJTIwJTIwZW5kX2luZGV4JTIwJTNEJTIwaW5kaWNlcyU1Qi0xJTVEJTBBJTIwJTIwJTIwJTIwZm9yJTIwaSUyQyUyMGZyYW1lJTIwaW4lMjBlbnVtZXJhdGUoY29udGFpbmVyLmRlY29kZSh2aWRlbyUzRDApKSUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMGlmJTIwaSUyMCUzRSUyMGVuZF9pbmRleCUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMGJyZWFrJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwaWYlMjBpJTIwJTNFJTNEJTIwc3RhcnRfaW5kZXglMjBhbmQlMjBpJTIwaW4lMjBpbmRpY2VzJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwZnJhbWVzLmFwcGVuZChmcmFtZSklMEElMjAlMjAlMjAlMjByZXR1cm4lMjBucC5zdGFjayglNUJ4LnRvX25kYXJyYXkoZm9ybWF0JTNEJTIycmdiMjQlMjIpJTIwZm9yJTIweCUyMGluJTIwZnJhbWVzJTVEKSUwQSUwQSUwQWRlZiUyMHNhbXBsZV9mcmFtZV9pbmRpY2VzKGNsaXBfbGVuJTJDJTIwZnJhbWVfc2FtcGxlX3JhdGUlMkMlMjBzZWdfbGVuKSUzQSUwQSUyMCUyMCUyMCUyMCcnJyUwQSUyMCUyMCUyMCUyMFNhbXBsZSUyMGElMjBnaXZlbiUyMG51bWJlciUyMG9mJTIwZnJhbWUlMjBpbmRpY2VzJTIwZnJvbSUyMHRoZSUyMHZpZGVvLiUwQSUyMCUyMCUyMCUyMEFyZ3MlM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBjbGlwX2xlbiUyMCglNjBpbnQlNjApJTNBJTIwVG90YWwlMjBudW1iZXIlMjBvZiUyMGZyYW1lcyUyMHRvJTIwc2FtcGxlLiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMGZyYW1lX3NhbXBsZV9yYXRlJTIwKCU2MGludCU2MCklM0ElMjBTYW1wbGUlMjBldmVyeSUyMG4tdGglMjBmcmFtZS4lMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBzZWdfbGVuJTIwKCU2MGludCU2MCklM0ElMjBNYXhpbXVtJTIwYWxsb3dlZCUyMGluZGV4JTIwb2YlMjBzYW1wbGUncyUyMGxhc3QlMjBmcmFtZS4lMEElMjAlMjAlMjAlMjBSZXR1cm5zJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwaW5kaWNlcyUyMCglNjBMaXN0JTVCaW50JTVEJTYwKSUzQSUyMExpc3QlMjBvZiUyMHNhbXBsZWQlMjBmcmFtZSUyMGluZGljZXMlMEElMjAlMjAlMjAlMjAnJyclMEElMjAlMjAlMjAlMjBjb252ZXJ0ZWRfbGVuJTIwJTNEJTIwaW50KGNsaXBfbGVuJTIwKiUyMGZyYW1lX3NhbXBsZV9yYXRlKSUwQSUyMCUyMCUyMCUyMGVuZF9pZHglMjAlM0QlMjBucC5yYW5kb20ucmFuZGludChjb252ZXJ0ZWRfbGVuJTJDJTIwc2VnX2xlbiklMEElMjAlMjAlMjAlMjBzdGFydF9pZHglMjAlM0QlMjBlbmRfaWR4JTIwLSUyMGNvbnZlcnRlZF9sZW4lMEElMjAlMjAlMjAlMjBpbmRpY2VzJTIwJTNEJTIwbnAubGluc3BhY2Uoc3RhcnRfaWR4JTJDJTIwZW5kX2lkeCUyQyUyMG51bSUzRGNsaXBfbGVuKSUwQSUyMCUyMCUyMCUyMGluZGljZXMlMjAlM0QlMjBucC5jbGlwKGluZGljZXMlMkMlMjBzdGFydF9pZHglMkMlMjBlbmRfaWR4JTIwLSUyMDEpLmFzdHlwZShucC5pbnQ2NCklMEElMjAlMjAlMjAlMjByZXR1cm4lMjBpbmRpY2VzJTBBJTBBJTBBJTIzJTIwdmlkZW8lMjBjbGlwJTIwY29uc2lzdHMlMjBvZiUyMDMwMCUyMGZyYW1lcyUyMCgxMCUyMHNlY29uZHMlMjBhdCUyMDMwJTIwRlBTKSUwQWZpbGVfcGF0aCUyMCUzRCUyMGhmX2h1Yl9kb3dubG9hZCglMEElMjAlMjAlMjAlMjByZXBvX2lkJTNEJTIybmllbHNyJTJGdmlkZW8tZGVtbyUyMiUyQyUyMGZpbGVuYW1lJTNEJTIyZWF0aW5nX3NwYWdoZXR0aS5tcDQlMjIlMkMlMjByZXBvX3R5cGUlM0QlMjJkYXRhc2V0JTIyJTBBKSUwQWNvbnRhaW5lciUyMCUzRCUyMGF2Lm9wZW4oZmlsZV9wYXRoKSUwQSUwQSUyMyUyMHNhbXBsZSUyMDMyJTIwZnJhbWVzJTBBaW5kaWNlcyUyMCUzRCUyMHNhbXBsZV9mcmFtZV9pbmRpY2VzKGNsaXBfbGVuJTNEMzIlMkMlMjBmcmFtZV9zYW1wbGVfcmF0ZSUzRDElMkMlMjBzZWdfbGVuJTNEY29udGFpbmVyLnN0cmVhbXMudmlkZW8lNUIwJTVELmZyYW1lcyklMEF2aWRlbyUyMCUzRCUyMHJlYWRfdmlkZW9fcHlhdihjb250YWluZXIlM0Rjb250YWluZXIlMkMlMjBpbmRpY2VzJTNEaW5kaWNlcyklMEElMEFpbWFnZV9wcm9jZXNzb3IlMjAlM0QlMjBWaXZpdEltYWdlUHJvY2Vzc29yLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUlMkZ2aXZpdC1iLTE2eDIta2luZXRpY3M0MDAlMjIpJTBBbW9kZWwlMjAlM0QlMjBWaXZpdE1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUlMkZ2aXZpdC1iLTE2eDIta2luZXRpY3M0MDAlMjIpJTBBJTBBJTIzJTIwcHJlcGFyZSUyMHZpZGVvJTIwZm9yJTIwdGhlJTIwbW9kZWwlMEFpbnB1dHMlMjAlM0QlMjBpbWFnZV9wcm9jZXNzb3IobGlzdCh2aWRlbyklMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQSUyMyUyMGZvcndhcmQlMjBwYXNzJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQWxhc3RfaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGUlMEFsaXN0KGxhc3RfaGlkZGVuX3N0YXRlcy5zaGFwZSk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> av
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> VivitImageProcessor, VivitModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> hf_hub_download

<span class="hljs-meta">&gt;&gt;&gt; </span>np.random.seed(<span class="hljs-number">0</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">read_video_pyav</span>(<span class="hljs-params">container, indices</span>):
<span class="hljs-meta">... </span>    <span class="hljs-string">&#x27;&#x27;&#x27;
<span class="hljs-meta">... </span>    Decode the video with PyAV decoder.
<span class="hljs-meta">... </span>    Args:
<span class="hljs-meta">... </span>        container (\`av.container.input.InputContainer\`): PyAV container.
<span class="hljs-meta">... </span>        indices (\`List[int]\`): List of frame indices to decode.
<span class="hljs-meta">... </span>    Returns:
<span class="hljs-meta">... </span>        result (np.ndarray): np array of decoded frames of shape (num_frames, height, width, 3).
<span class="hljs-meta">... </span>    &#x27;&#x27;&#x27;</span>
<span class="hljs-meta">... </span>    frames = []
<span class="hljs-meta">... </span>    container.seek(<span class="hljs-number">0</span>)
<span class="hljs-meta">... </span>    start_index = indices[<span class="hljs-number">0</span>]
<span class="hljs-meta">... </span>    end_index = indices[-<span class="hljs-number">1</span>]
<span class="hljs-meta">... </span>    <span class="hljs-keyword">for</span> i, frame <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(container.decode(video=<span class="hljs-number">0</span>)):
<span class="hljs-meta">... </span>        <span class="hljs-keyword">if</span> i &gt; end_index:
<span class="hljs-meta">... </span>            <span class="hljs-keyword">break</span>
<span class="hljs-meta">... </span>        <span class="hljs-keyword">if</span> i &gt;= start_index <span class="hljs-keyword">and</span> i <span class="hljs-keyword">in</span> indices:
<span class="hljs-meta">... </span>            frames.append(frame)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> np.stack([x.to_ndarray(<span class="hljs-built_in">format</span>=<span class="hljs-string">&quot;rgb24&quot;</span>) <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> frames])


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">sample_frame_indices</span>(<span class="hljs-params">clip_len, frame_sample_rate, seg_len</span>):
<span class="hljs-meta">... </span>    <span class="hljs-string">&#x27;&#x27;&#x27;
<span class="hljs-meta">... </span>    Sample a given number of frame indices from the video.
<span class="hljs-meta">... </span>    Args:
<span class="hljs-meta">... </span>        clip_len (\`int\`): Total number of frames to sample.
<span class="hljs-meta">... </span>        frame_sample_rate (\`int\`): Sample every n-th frame.
<span class="hljs-meta">... </span>        seg_len (\`int\`): Maximum allowed index of sample&#x27;s last frame.
<span class="hljs-meta">... </span>    Returns:
<span class="hljs-meta">... </span>        indices (\`List[int]\`): List of sampled frame indices
<span class="hljs-meta">... </span>    &#x27;&#x27;&#x27;</span>
<span class="hljs-meta">... </span>    converted_len = <span class="hljs-built_in">int</span>(clip_len * frame_sample_rate)
<span class="hljs-meta">... </span>    end_idx = np.random.randint(converted_len, seg_len)
<span class="hljs-meta">... </span>    start_idx = end_idx - converted_len
<span class="hljs-meta">... </span>    indices = np.linspace(start_idx, end_idx, num=clip_len)
<span class="hljs-meta">... </span>    indices = np.clip(indices, start_idx, end_idx - <span class="hljs-number">1</span>).astype(np.int64)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> indices


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># video clip consists of 300 frames (10 seconds at 30 FPS)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>file_path = hf_hub_download(
<span class="hljs-meta">... </span>    repo_id=<span class="hljs-string">&quot;nielsr/video-demo&quot;</span>, filename=<span class="hljs-string">&quot;eating_spaghetti.mp4&quot;</span>, repo_type=<span class="hljs-string">&quot;dataset&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>container = av.<span class="hljs-built_in">open</span>(file_path)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># sample 32 frames</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>indices = sample_frame_indices(clip_len=<span class="hljs-number">32</span>, frame_sample_rate=<span class="hljs-number">1</span>, seg_len=container.streams.video[<span class="hljs-number">0</span>].frames)
<span class="hljs-meta">&gt;&gt;&gt; </span>video = read_video_pyav(container=container, indices=indices)

<span class="hljs-meta">&gt;&gt;&gt; </span>image_processor = VivitImageProcessor.from_pretrained(<span class="hljs-string">&quot;google/vivit-b-16x2-kinetics400&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VivitModel.from_pretrained(<span class="hljs-string">&quot;google/vivit-b-16x2-kinetics400&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># prepare video for the model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = image_processor(<span class="hljs-built_in">list</span>(video), return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(last_hidden_states.shape)
[<span class="hljs-number">1</span>, <span class="hljs-number">3137</span>, <span class="hljs-number">768</span>]`,wrap:!1}}),{c(){s=m("p"),s.textContent=w,i=o(),f(c.$$.fragment)},l(t){s=p(t,"P",{"data-svelte-h":!0}),b(s)!=="svelte-kvfsh7"&&(s.textContent=w),i=r(t),u(c.$$.fragment,t)},m(t,_){l(t,s,_),l(t,i,_),g(c,t,_),h=!0},p:Me,i(t){h||(M(c.$$.fragment,t),h=!0)},o(t){y(c.$$.fragment,t),h=!1},d(t){t&&(a(s),a(i)),T(c,t)}}}function Ms(v){let s,w=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){s=m("p"),s.innerHTML=w},l(i){s=p(i,"P",{"data-svelte-h":!0}),b(s)!=="svelte-fincs2"&&(s.innerHTML=w)},m(i,c){l(i,s,c)},p:Me,d(i){i&&a(s)}}}function ys(v){let s,w="Examples:",i,c,h;return c=new He({props:{code:"aW1wb3J0JTIwYXYlMEFpbXBvcnQlMjBudW1weSUyMGFzJTIwbnAlMEFpbXBvcnQlMjB0b3JjaCUwQSUwQWZyb20lMjB0cmFuc2Zvcm1lcnMlMjBpbXBvcnQlMjBWaXZpdEltYWdlUHJvY2Vzc29yJTJDJTIwVml2aXRGb3JWaWRlb0NsYXNzaWZpY2F0aW9uJTBBZnJvbSUyMGh1Z2dpbmdmYWNlX2h1YiUyMGltcG9ydCUyMGhmX2h1Yl9kb3dubG9hZCUwQSUwQW5wLnJhbmRvbS5zZWVkKDApJTBBJTBBJTBBZGVmJTIwcmVhZF92aWRlb19weWF2KGNvbnRhaW5lciUyQyUyMGluZGljZXMpJTNBJTBBJTIwJTIwJTIwJTIwJycnJTBBJTIwJTIwJTIwJTIwRGVjb2RlJTIwdGhlJTIwdmlkZW8lMjB3aXRoJTIwUHlBViUyMGRlY29kZXIuJTBBJTIwJTIwJTIwJTIwQXJncyUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMGNvbnRhaW5lciUyMCglNjBhdi5jb250YWluZXIuaW5wdXQuSW5wdXRDb250YWluZXIlNjApJTNBJTIwUHlBViUyMGNvbnRhaW5lci4lMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBpbmRpY2VzJTIwKCU2MExpc3QlNUJpbnQlNUQlNjApJTNBJTIwTGlzdCUyMG9mJTIwZnJhbWUlMjBpbmRpY2VzJTIwdG8lMjBkZWNvZGUuJTBBJTIwJTIwJTIwJTIwUmV0dXJucyUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHJlc3VsdCUyMChucC5uZGFycmF5KSUzQSUyMG5wJTIwYXJyYXklMjBvZiUyMGRlY29kZWQlMjBmcmFtZXMlMjBvZiUyMHNoYXBlJTIwKG51bV9mcmFtZXMlMkMlMjBoZWlnaHQlMkMlMjB3aWR0aCUyQyUyMDMpLiUwQSUyMCUyMCUyMCUyMCcnJyUwQSUyMCUyMCUyMCUyMGZyYW1lcyUyMCUzRCUyMCU1QiU1RCUwQSUyMCUyMCUyMCUyMGNvbnRhaW5lci5zZWVrKDApJTBBJTIwJTIwJTIwJTIwc3RhcnRfaW5kZXglMjAlM0QlMjBpbmRpY2VzJTVCMCU1RCUwQSUyMCUyMCUyMCUyMGVuZF9pbmRleCUyMCUzRCUyMGluZGljZXMlNUItMSU1RCUwQSUyMCUyMCUyMCUyMGZvciUyMGklMkMlMjBmcmFtZSUyMGluJTIwZW51bWVyYXRlKGNvbnRhaW5lci5kZWNvZGUodmlkZW8lM0QwKSklM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBpZiUyMGklMjAlM0UlMjBlbmRfaW5kZXglM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBicmVhayUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMGlmJTIwaSUyMCUzRSUzRCUyMHN0YXJ0X2luZGV4JTIwYW5kJTIwaSUyMGluJTIwaW5kaWNlcyUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMGZyYW1lcy5hcHBlbmQoZnJhbWUpJTBBJTIwJTIwJTIwJTIwcmV0dXJuJTIwbnAuc3RhY2soJTVCeC50b19uZGFycmF5KGZvcm1hdCUzRCUyMnJnYjI0JTIyKSUyMGZvciUyMHglMjBpbiUyMGZyYW1lcyU1RCklMEElMEElMEFkZWYlMjBzYW1wbGVfZnJhbWVfaW5kaWNlcyhjbGlwX2xlbiUyQyUyMGZyYW1lX3NhbXBsZV9yYXRlJTJDJTIwc2VnX2xlbiklM0ElMEElMjAlMjAlMjAlMjAnJyclMEElMjAlMjAlMjAlMjBTYW1wbGUlMjBhJTIwZ2l2ZW4lMjBudW1iZXIlMjBvZiUyMGZyYW1lJTIwaW5kaWNlcyUyMGZyb20lMjB0aGUlMjB2aWRlby4lMEElMjAlMjAlMjAlMjBBcmdzJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwY2xpcF9sZW4lMjAoJTYwaW50JTYwKSUzQSUyMFRvdGFsJTIwbnVtYmVyJTIwb2YlMjBmcmFtZXMlMjB0byUyMHNhbXBsZS4lMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBmcmFtZV9zYW1wbGVfcmF0ZSUyMCglNjBpbnQlNjApJTNBJTIwU2FtcGxlJTIwZXZlcnklMjBuLXRoJTIwZnJhbWUuJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwc2VnX2xlbiUyMCglNjBpbnQlNjApJTNBJTIwTWF4aW11bSUyMGFsbG93ZWQlMjBpbmRleCUyMG9mJTIwc2FtcGxlJ3MlMjBsYXN0JTIwZnJhbWUuJTBBJTIwJTIwJTIwJTIwUmV0dXJucyUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMGluZGljZXMlMjAoJTYwTGlzdCU1QmludCU1RCU2MCklM0ElMjBMaXN0JTIwb2YlMjBzYW1wbGVkJTIwZnJhbWUlMjBpbmRpY2VzJTBBJTIwJTIwJTIwJTIwJycnJTBBJTIwJTIwJTIwJTIwY29udmVydGVkX2xlbiUyMCUzRCUyMGludChjbGlwX2xlbiUyMColMjBmcmFtZV9zYW1wbGVfcmF0ZSklMEElMjAlMjAlMjAlMjBlbmRfaWR4JTIwJTNEJTIwbnAucmFuZG9tLnJhbmRpbnQoY29udmVydGVkX2xlbiUyQyUyMHNlZ19sZW4pJTBBJTIwJTIwJTIwJTIwc3RhcnRfaWR4JTIwJTNEJTIwZW5kX2lkeCUyMC0lMjBjb252ZXJ0ZWRfbGVuJTBBJTIwJTIwJTIwJTIwaW5kaWNlcyUyMCUzRCUyMG5wLmxpbnNwYWNlKHN0YXJ0X2lkeCUyQyUyMGVuZF9pZHglMkMlMjBudW0lM0RjbGlwX2xlbiklMEElMjAlMjAlMjAlMjBpbmRpY2VzJTIwJTNEJTIwbnAuY2xpcChpbmRpY2VzJTJDJTIwc3RhcnRfaWR4JTJDJTIwZW5kX2lkeCUyMC0lMjAxKS5hc3R5cGUobnAuaW50NjQpJTBBJTIwJTIwJTIwJTIwcmV0dXJuJTIwaW5kaWNlcyUwQSUwQSUwQSUyMyUyMHZpZGVvJTIwY2xpcCUyMGNvbnNpc3RzJTIwb2YlMjAzMDAlMjBmcmFtZXMlMjAoMTAlMjBzZWNvbmRzJTIwYXQlMjAzMCUyMEZQUyklMEFmaWxlX3BhdGglMjAlM0QlMjBoZl9odWJfZG93bmxvYWQoJTBBJTIwJTIwJTIwJTIwcmVwb19pZCUzRCUyMm5pZWxzciUyRnZpZGVvLWRlbW8lMjIlMkMlMjBmaWxlbmFtZSUzRCUyMmVhdGluZ19zcGFnaGV0dGkubXA0JTIyJTJDJTIwcmVwb190eXBlJTNEJTIyZGF0YXNldCUyMiUwQSklMEFjb250YWluZXIlMjAlM0QlMjBhdi5vcGVuKGZpbGVfcGF0aCklMEElMEElMjMlMjBzYW1wbGUlMjAzMiUyMGZyYW1lcyUwQWluZGljZXMlMjAlM0QlMjBzYW1wbGVfZnJhbWVfaW5kaWNlcyhjbGlwX2xlbiUzRDMyJTJDJTIwZnJhbWVfc2FtcGxlX3JhdGUlM0Q0JTJDJTIwc2VnX2xlbiUzRGNvbnRhaW5lci5zdHJlYW1zLnZpZGVvJTVCMCU1RC5mcmFtZXMpJTBBdmlkZW8lMjAlM0QlMjByZWFkX3ZpZGVvX3B5YXYoY29udGFpbmVyJTNEY29udGFpbmVyJTJDJTIwaW5kaWNlcyUzRGluZGljZXMpJTBBJTBBaW1hZ2VfcHJvY2Vzc29yJTIwJTNEJTIwVml2aXRJbWFnZVByb2Nlc3Nvci5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlJTJGdml2aXQtYi0xNngyLWtpbmV0aWNzNDAwJTIyKSUwQW1vZGVsJTIwJTNEJTIwVml2aXRGb3JWaWRlb0NsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUlMkZ2aXZpdC1iLTE2eDIta2luZXRpY3M0MDAlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwaW1hZ2VfcHJvY2Vzc29yKGxpc3QodmlkZW8pJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEElMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUyMCUyMCUyMCUyMGxvZ2l0cyUyMCUzRCUyMG91dHB1dHMubG9naXRzJTBBJTBBJTIzJTIwbW9kZWwlMjBwcmVkaWN0cyUyMG9uZSUyMG9mJTIwdGhlJTIwNDAwJTIwS2luZXRpY3MtNDAwJTIwY2xhc3NlcyUwQXByZWRpY3RlZF9sYWJlbCUyMCUzRCUyMGxvZ2l0cy5hcmdtYXgoLTEpLml0ZW0oKSUwQXByaW50KG1vZGVsLmNvbmZpZy5pZDJsYWJlbCU1QnByZWRpY3RlZF9sYWJlbCU1RCk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> av
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> VivitImageProcessor, VivitForVideoClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> hf_hub_download

<span class="hljs-meta">&gt;&gt;&gt; </span>np.random.seed(<span class="hljs-number">0</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">read_video_pyav</span>(<span class="hljs-params">container, indices</span>):
<span class="hljs-meta">... </span>    <span class="hljs-string">&#x27;&#x27;&#x27;
<span class="hljs-meta">... </span>    Decode the video with PyAV decoder.
<span class="hljs-meta">... </span>    Args:
<span class="hljs-meta">... </span>        container (\`av.container.input.InputContainer\`): PyAV container.
<span class="hljs-meta">... </span>        indices (\`List[int]\`): List of frame indices to decode.
<span class="hljs-meta">... </span>    Returns:
<span class="hljs-meta">... </span>        result (np.ndarray): np array of decoded frames of shape (num_frames, height, width, 3).
<span class="hljs-meta">... </span>    &#x27;&#x27;&#x27;</span>
<span class="hljs-meta">... </span>    frames = []
<span class="hljs-meta">... </span>    container.seek(<span class="hljs-number">0</span>)
<span class="hljs-meta">... </span>    start_index = indices[<span class="hljs-number">0</span>]
<span class="hljs-meta">... </span>    end_index = indices[-<span class="hljs-number">1</span>]
<span class="hljs-meta">... </span>    <span class="hljs-keyword">for</span> i, frame <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(container.decode(video=<span class="hljs-number">0</span>)):
<span class="hljs-meta">... </span>        <span class="hljs-keyword">if</span> i &gt; end_index:
<span class="hljs-meta">... </span>            <span class="hljs-keyword">break</span>
<span class="hljs-meta">... </span>        <span class="hljs-keyword">if</span> i &gt;= start_index <span class="hljs-keyword">and</span> i <span class="hljs-keyword">in</span> indices:
<span class="hljs-meta">... </span>            frames.append(frame)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> np.stack([x.to_ndarray(<span class="hljs-built_in">format</span>=<span class="hljs-string">&quot;rgb24&quot;</span>) <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> frames])


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">sample_frame_indices</span>(<span class="hljs-params">clip_len, frame_sample_rate, seg_len</span>):
<span class="hljs-meta">... </span>    <span class="hljs-string">&#x27;&#x27;&#x27;
<span class="hljs-meta">... </span>    Sample a given number of frame indices from the video.
<span class="hljs-meta">... </span>    Args:
<span class="hljs-meta">... </span>        clip_len (\`int\`): Total number of frames to sample.
<span class="hljs-meta">... </span>        frame_sample_rate (\`int\`): Sample every n-th frame.
<span class="hljs-meta">... </span>        seg_len (\`int\`): Maximum allowed index of sample&#x27;s last frame.
<span class="hljs-meta">... </span>    Returns:
<span class="hljs-meta">... </span>        indices (\`List[int]\`): List of sampled frame indices
<span class="hljs-meta">... </span>    &#x27;&#x27;&#x27;</span>
<span class="hljs-meta">... </span>    converted_len = <span class="hljs-built_in">int</span>(clip_len * frame_sample_rate)
<span class="hljs-meta">... </span>    end_idx = np.random.randint(converted_len, seg_len)
<span class="hljs-meta">... </span>    start_idx = end_idx - converted_len
<span class="hljs-meta">... </span>    indices = np.linspace(start_idx, end_idx, num=clip_len)
<span class="hljs-meta">... </span>    indices = np.clip(indices, start_idx, end_idx - <span class="hljs-number">1</span>).astype(np.int64)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> indices


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># video clip consists of 300 frames (10 seconds at 30 FPS)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>file_path = hf_hub_download(
<span class="hljs-meta">... </span>    repo_id=<span class="hljs-string">&quot;nielsr/video-demo&quot;</span>, filename=<span class="hljs-string">&quot;eating_spaghetti.mp4&quot;</span>, repo_type=<span class="hljs-string">&quot;dataset&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>container = av.<span class="hljs-built_in">open</span>(file_path)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># sample 32 frames</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>indices = sample_frame_indices(clip_len=<span class="hljs-number">32</span>, frame_sample_rate=<span class="hljs-number">4</span>, seg_len=container.streams.video[<span class="hljs-number">0</span>].frames)
<span class="hljs-meta">&gt;&gt;&gt; </span>video = read_video_pyav(container=container, indices=indices)

<span class="hljs-meta">&gt;&gt;&gt; </span>image_processor = VivitImageProcessor.from_pretrained(<span class="hljs-string">&quot;google/vivit-b-16x2-kinetics400&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VivitForVideoClassification.from_pretrained(<span class="hljs-string">&quot;google/vivit-b-16x2-kinetics400&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = image_processor(<span class="hljs-built_in">list</span>(video), return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)
<span class="hljs-meta">... </span>    logits = outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># model predicts one of the 400 Kinetics-400 classes</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_label = logits.argmax(-<span class="hljs-number">1</span>).item()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(model.config.id2label[predicted_label])
LABEL_116`,wrap:!1}}),{c(){s=m("p"),s.textContent=w,i=o(),f(c.$$.fragment)},l(t){s=p(t,"P",{"data-svelte-h":!0}),b(s)!=="svelte-kvfsh7"&&(s.textContent=w),i=r(t),u(c.$$.fragment,t)},m(t,_){l(t,s,_),l(t,i,_),g(c,t,_),h=!0},p:Me,i(t){h||(M(c.$$.fragment,t),h=!0)},o(t){y(c.$$.fragment,t),h=!1},d(t){t&&(a(s),a(i)),T(c,t)}}}function Ts(v){let s,w,i,c,h,t,_,ye,F,De=`The Vivit model was proposed in <a href="https://arxiv.org/abs/2103.15691" rel="nofollow">ViViT: A Video Vision Transformer</a> by Anurag Arnab, Mostafa Dehghani, Georg Heigold, Chen Sun, Mario Lučić, Cordelia Schmid.
The paper proposes one of the first successful pure-transformer based set of models for video understanding.`,Te,Y,qe="The abstract from the paper is the following:",we,S,Ke="<em>We present pure-transformer based models for video classification, drawing upon the recent success of such models in image classification. Our model extracts spatio-temporal tokens from the input video, which are then encoded by a series of transformer layers. In order to handle the long sequences of tokens encountered in video, we propose several, efficient variants of our model which factorise the spatial- and temporal-dimensions of the input. Although transformer-based models are known to only be effective when large training datasets are available, we show how we can effectively regularise the model during training and leverage pretrained image models to be able to train on comparatively small datasets. We conduct thorough ablation studies, and achieve state-of-the-art results on multiple video classification benchmarks including Kinetics 400 and 600, Epic Kitchens, Something-Something v2 and Moments in Time, outperforming prior methods based on deep 3D convolutional networks.</em>",_e,Q,Oe='This model was contributed by <a href="https://huggingface.co/jegormeister" rel="nofollow">jegormeister</a>. The original code (written in JAX) can be found <a href="https://github.com/google-research/scenic/tree/main/scenic/projects/vivit" rel="nofollow">here</a>.',be,P,je,j,L,We,re,es=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/vivit#transformers.VivitModel">VivitModel</a>. It is used to instantiate a ViViT
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the ViViT
<a href="https://huggingface.co/google/vivit-b-16x2-kinetics400" rel="nofollow">google/vivit-b-16x2-kinetics400</a> architecture.`,Ge,le,ss=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,xe,z,ve,H,Je,I,D,ke,ie,ts="Constructs a Vivit image processor.",ze,R,q,Re,ce,ns="Preprocess an image or batch of images.",Ue,K,Ie,C,O,$e,de,as=`The bare ViViT Transformer model outputting raw hidden-states without any specific head on top.
This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,Ae,J,ee,Ne,me,os='The <a href="/docs/transformers/main/en/model_doc/vivit#transformers.VivitModel">VivitModel</a> forward method, overrides the <code>__call__</code> special method.',Xe,$,Ee,A,Ce,se,Ve,V,te,Fe,pe,rs=`ViViT Transformer model with a video classification head on top (a linear layer on top of the final hidden state of the
[CLS] token) e.g. for Kinetics-400.
This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass. Use it
as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,Ye,U,ne,Se,he,ls='The <a href="/docs/transformers/main/en/model_doc/vivit#transformers.VivitForVideoClassification">VivitForVideoClassification</a> forward method, overrides the <code>__call__</code> special method.',Qe,N,Pe,X,Ze,ge,Be;return h=new ue({props:{title:"Video Vision Transformer (ViViT)",local:"video-vision-transformer-vivit",headingTag:"h1"}}),_=new ue({props:{title:"Overview",local:"overview",headingTag:"h2"}}),P=new ue({props:{title:"VivitConfig",local:"transformers.VivitConfig",headingTag:"h2"}}),L=new oe({props:{name:"class transformers.VivitConfig",anchor:"transformers.VivitConfig",parameters:[{name:"image_size",val:" = 224"},{name:"num_frames",val:" = 32"},{name:"tubelet_size",val:" = [2, 16, 16]"},{name:"num_channels",val:" = 3"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu_fast'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-06"},{name:"qkv_bias",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VivitConfig.image_size",description:`<strong>image_size</strong> (<code>int</code>, <em>optional</em>, defaults to 224) &#x2014;
The size (resolution) of each image.`,name:"image_size"},{anchor:"transformers.VivitConfig.num_frames",description:`<strong>num_frames</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The number of frames in each video.`,name:"num_frames"},{anchor:"transformers.VivitConfig.tubelet_size",description:`<strong>tubelet_size</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[2, 16, 16]</code>) &#x2014;
The size (resolution) of each tubelet.`,name:"tubelet_size"},{anchor:"transformers.VivitConfig.num_channels",description:`<strong>num_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The number of input channels.`,name:"num_channels"},{anchor:"transformers.VivitConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.VivitConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.VivitConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.VivitConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.VivitConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu_fast&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code>, <code>&quot;gelu_fast&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.VivitConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.VivitConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.VivitConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.VivitConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-06) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.VivitConfig.qkv_bias",description:`<strong>qkv_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to add a bias to the queries, keys and values.`,name:"qkv_bias"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vivit/configuration_vivit.py#L31"}}),z=new Le({props:{anchor:"transformers.VivitConfig.example",$$slots:{default:[fs]},$$scope:{ctx:v}}}),H=new ue({props:{title:"VivitImageProcessor",local:"transformers.VivitImageProcessor",headingTag:"h2"}}),D=new oe({props:{name:"class transformers.VivitImageProcessor",anchor:"transformers.VivitImageProcessor",parameters:[{name:"do_resize",val:": bool = True"},{name:"size",val:": Dict = None"},{name:"resample",val:": Resampling = <Resampling.BILINEAR: 2>"},{name:"do_center_crop",val:": bool = True"},{name:"crop_size",val:": Dict = None"},{name:"do_rescale",val:": bool = True"},{name:"rescale_factor",val:": Union = 0.00784313725490196"},{name:"offset",val:": bool = True"},{name:"do_normalize",val:": bool = True"},{name:"image_mean",val:": Union = None"},{name:"image_std",val:": Union = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VivitImageProcessor.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to resize the image&#x2019;s (height, width) dimensions to the specified <code>size</code>. Can be overridden by the
<code>do_resize</code> parameter in the <code>preprocess</code> method.`,name:"do_resize"},{anchor:"transformers.VivitImageProcessor.size",description:`<strong>size</strong> (<code>Dict[str, int]</code> <em>optional</em>, defaults to <code>{&quot;shortest_edge&quot; -- 256}</code>):
Size of the output image after resizing. The shortest edge of the image will be resized to
<code>size[&quot;shortest_edge&quot;]</code> while maintaining the aspect ratio of the original image. Can be overriden by
<code>size</code> in the <code>preprocess</code> method.`,name:"size"},{anchor:"transformers.VivitImageProcessor.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>Resampling.BILINEAR</code>) &#x2014;
Resampling filter to use if resizing the image. Can be overridden by the <code>resample</code> parameter in the
<code>preprocess</code> method.`,name:"resample"},{anchor:"transformers.VivitImageProcessor.do_center_crop",description:`<strong>do_center_crop</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to center crop the image to the specified <code>crop_size</code>. Can be overridden by the <code>do_center_crop</code>
parameter in the <code>preprocess</code> method.`,name:"do_center_crop"},{anchor:"transformers.VivitImageProcessor.crop_size",description:`<strong>crop_size</strong> (<code>Dict[str, int]</code>, <em>optional</em>, defaults to <code>{&quot;height&quot; -- 224, &quot;width&quot;: 224}</code>):
Size of the image after applying the center crop. Can be overridden by the <code>crop_size</code> parameter in the
<code>preprocess</code> method.`,name:"crop_size"},{anchor:"transformers.VivitImageProcessor.do_rescale",description:`<strong>do_rescale</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to rescale the image by the specified scale <code>rescale_factor</code>. Can be overridden by the <code>do_rescale</code>
parameter in the <code>preprocess</code> method.`,name:"do_rescale"},{anchor:"transformers.VivitImageProcessor.rescale_factor",description:`<strong>rescale_factor</strong> (<code>int</code> or <code>float</code>, <em>optional</em>, defaults to <code>1/127.5</code>) &#x2014;
Defines the scale factor to use if rescaling the image. Can be overridden by the <code>rescale_factor</code> parameter
in the <code>preprocess</code> method.`,name:"rescale_factor"},{anchor:"transformers.VivitImageProcessor.offset",description:`<strong>offset</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to scale the image in both negative and positive directions. Can be overriden by the <code>offset</code> in
the <code>preprocess</code> method.`,name:"offset"},{anchor:"transformers.VivitImageProcessor.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to normalize the image. Can be overridden by the <code>do_normalize</code> parameter in the <code>preprocess</code>
method.`,name:"do_normalize"},{anchor:"transformers.VivitImageProcessor.image_mean",description:`<strong>image_mean</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_MEAN</code>) &#x2014;
Mean to use if normalizing the image. This is a float or list of floats the length of the number of
channels in the image. Can be overridden by the <code>image_mean</code> parameter in the <code>preprocess</code> method.`,name:"image_mean"},{anchor:"transformers.VivitImageProcessor.image_std",description:`<strong>image_std</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>IMAGENET_STANDARD_STD</code>) &#x2014;
Standard deviation to use if normalizing the image. This is a float or list of floats the length of the
number of channels in the image. Can be overridden by the <code>image_std</code> parameter in the <code>preprocess</code> method.`,name:"image_std"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vivit/image_processing_vivit.py#L64"}}),q=new oe({props:{name:"preprocess",anchor:"transformers.VivitImageProcessor.preprocess",parameters:[{name:"videos",val:": Union"},{name:"do_resize",val:": bool = None"},{name:"size",val:": Dict = None"},{name:"resample",val:": Resampling = None"},{name:"do_center_crop",val:": bool = None"},{name:"crop_size",val:": Dict = None"},{name:"do_rescale",val:": bool = None"},{name:"rescale_factor",val:": float = None"},{name:"offset",val:": bool = None"},{name:"do_normalize",val:": bool = None"},{name:"image_mean",val:": Union = None"},{name:"image_std",val:": Union = None"},{name:"return_tensors",val:": Union = None"},{name:"data_format",val:": ChannelDimension = <ChannelDimension.FIRST: 'channels_first'>"},{name:"input_data_format",val:": Union = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VivitImageProcessor.preprocess.videos",description:`<strong>videos</strong> (<code>ImageInput</code>) &#x2014;
Video frames to preprocess. Expects a single or batch of video frames with pixel values ranging from 0
to 255. If passing in frames with pixel values between 0 and 1, set <code>do_rescale=False</code>.`,name:"videos"},{anchor:"transformers.VivitImageProcessor.preprocess.do_resize",description:`<strong>do_resize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_resize</code>) &#x2014;
Whether to resize the image.`,name:"do_resize"},{anchor:"transformers.VivitImageProcessor.preprocess.size",description:`<strong>size</strong> (<code>Dict[str, int]</code>, <em>optional</em>, defaults to <code>self.size</code>) &#x2014;
Size of the image after applying resize.`,name:"size"},{anchor:"transformers.VivitImageProcessor.preprocess.resample",description:`<strong>resample</strong> (<code>PILImageResampling</code>, <em>optional</em>, defaults to <code>self.resample</code>) &#x2014;
Resampling filter to use if resizing the image. This can be one of the enum <code>PILImageResampling</code>, Only
has an effect if <code>do_resize</code> is set to <code>True</code>.`,name:"resample"},{anchor:"transformers.VivitImageProcessor.preprocess.do_center_crop",description:`<strong>do_center_crop</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_centre_crop</code>) &#x2014;
Whether to centre crop the image.`,name:"do_center_crop"},{anchor:"transformers.VivitImageProcessor.preprocess.crop_size",description:`<strong>crop_size</strong> (<code>Dict[str, int]</code>, <em>optional</em>, defaults to <code>self.crop_size</code>) &#x2014;
Size of the image after applying the centre crop.`,name:"crop_size"},{anchor:"transformers.VivitImageProcessor.preprocess.do_rescale",description:`<strong>do_rescale</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_rescale</code>) &#x2014;
Whether to rescale the image values between <code>[-1 - 1]</code> if <code>offset</code> is <code>True</code>, <code>[0, 1]</code> otherwise.`,name:"do_rescale"},{anchor:"transformers.VivitImageProcessor.preprocess.rescale_factor",description:`<strong>rescale_factor</strong> (<code>float</code>, <em>optional</em>, defaults to <code>self.rescale_factor</code>) &#x2014;
Rescale factor to rescale the image by if <code>do_rescale</code> is set to <code>True</code>.`,name:"rescale_factor"},{anchor:"transformers.VivitImageProcessor.preprocess.offset",description:`<strong>offset</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.offset</code>) &#x2014;
Whether to scale the image in both negative and positive directions.`,name:"offset"},{anchor:"transformers.VivitImageProcessor.preprocess.do_normalize",description:`<strong>do_normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>self.do_normalize</code>) &#x2014;
Whether to normalize the image.`,name:"do_normalize"},{anchor:"transformers.VivitImageProcessor.preprocess.image_mean",description:`<strong>image_mean</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>self.image_mean</code>) &#x2014;
Image mean.`,name:"image_mean"},{anchor:"transformers.VivitImageProcessor.preprocess.image_std",description:`<strong>image_std</strong> (<code>float</code> or <code>List[float]</code>, <em>optional</em>, defaults to <code>self.image_std</code>) &#x2014;
Image standard deviation.`,name:"image_std"},{anchor:"transformers.VivitImageProcessor.preprocess.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <code>TensorType</code>, <em>optional</em>) &#x2014;
The type of tensors to return. Can be one of:<ul>
<li>Unset: Return a list of <code>np.ndarray</code>.</li>
<li><code>TensorType.TENSORFLOW</code> or <code>&apos;tf&apos;</code>: Return a batch of type <code>tf.Tensor</code>.</li>
<li><code>TensorType.PYTORCH</code> or <code>&apos;pt&apos;</code>: Return a batch of type <code>torch.Tensor</code>.</li>
<li><code>TensorType.NUMPY</code> or <code>&apos;np&apos;</code>: Return a batch of type <code>np.ndarray</code>.</li>
<li><code>TensorType.JAX</code> or <code>&apos;jax&apos;</code>: Return a batch of type <code>jax.numpy.ndarray</code>.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.VivitImageProcessor.preprocess.data_format",description:`<strong>data_format</strong> (<code>ChannelDimension</code> or <code>str</code>, <em>optional</em>, defaults to <code>ChannelDimension.FIRST</code>) &#x2014;
The channel dimension format for the output image. Can be one of:<ul>
<li><code>ChannelDimension.FIRST</code>: image in (num_channels, height, width) format.</li>
<li><code>ChannelDimension.LAST</code>: image in (height, width, num_channels) format.</li>
<li>Unset: Use the inferred channel dimension format of the input image.</li>
</ul>`,name:"data_format"},{anchor:"transformers.VivitImageProcessor.preprocess.input_data_format",description:`<strong>input_data_format</strong> (<code>ChannelDimension</code> or <code>str</code>, <em>optional</em>) &#x2014;
The channel dimension format for the input image. If unset, the channel dimension format is inferred
from the input image. Can be one of:<ul>
<li><code>&quot;channels_first&quot;</code> or <code>ChannelDimension.FIRST</code>: image in (num_channels, height, width) format.</li>
<li><code>&quot;channels_last&quot;</code> or <code>ChannelDimension.LAST</code>: image in (height, width, num_channels) format.</li>
<li><code>&quot;none&quot;</code> or <code>ChannelDimension.NONE</code>: image in (height, width) format.</li>
</ul>`,name:"input_data_format"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vivit/image_processing_vivit.py#L285"}}),K=new ue({props:{title:"VivitModel",local:"transformers.VivitModel",headingTag:"h2"}}),O=new oe({props:{name:"class transformers.VivitModel",anchor:"transformers.VivitModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.VivitModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vivit#transformers.VivitConfig">VivitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vivit/modeling_vivit.py#L446"}}),ee=new oe({props:{name:"forward",anchor:"transformers.VivitModel.forward",parameters:[{name:"pixel_values",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.VivitModel.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_frames, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vivit#transformers.VivitImageProcessor">VivitImageProcessor</a>. See
<a href="/docs/transformers/main/en/model_doc/vivit#transformers.VivitImageProcessor.preprocess">VivitImageProcessor.preprocess()</a> for details.`,name:"pixel_values"},{anchor:"transformers.VivitModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.VivitModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VivitModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VivitModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vivit/modeling_vivit.py#L478",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/vivit#transformers.VivitConfig"
>VivitConfig</a>) and inputs.</p>
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
`}}),$=new is({props:{$$slots:{default:[us]},$$scope:{ctx:v}}}),A=new Le({props:{anchor:"transformers.VivitModel.forward.example",$$slots:{default:[gs]},$$scope:{ctx:v}}}),se=new ue({props:{title:"VivitForVideoClassification",local:"transformers.VivitForVideoClassification",headingTag:"h2"}}),te=new oe({props:{name:"class transformers.VivitForVideoClassification",anchor:"transformers.VivitForVideoClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.VivitForVideoClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vivit#transformers.VivitConfig">VivitConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vivit/modeling_vivit.py#L599"}}),ne=new oe({props:{name:"forward",anchor:"transformers.VivitForVideoClassification.forward",parameters:[{name:"pixel_values",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.VivitForVideoClassification.forward.pixel_values",description:`<strong>pixel_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_frames, num_channels, height, width)</code>) &#x2014;
Pixel values. Pixel values can be obtained using <a href="/docs/transformers/main/en/model_doc/vivit#transformers.VivitImageProcessor">VivitImageProcessor</a>. See
<a href="/docs/transformers/main/en/model_doc/vivit#transformers.VivitImageProcessor.preprocess">VivitImageProcessor.preprocess()</a> for details.`,name:"pixel_values"},{anchor:"transformers.VivitForVideoClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.VivitForVideoClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VivitForVideoClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VivitForVideoClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.VivitForVideoClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the image classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vivit/modeling_vivit.py#L617",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.ImageClassifierOutput"
>transformers.modeling_outputs.ImageClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/vivit#transformers.VivitConfig"
>VivitConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.ImageClassifierOutput"
>transformers.modeling_outputs.ImageClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),N=new is({props:{$$slots:{default:[Ms]},$$scope:{ctx:v}}}),X=new Le({props:{anchor:"transformers.VivitForVideoClassification.forward.example",$$slots:{default:[ys]},$$scope:{ctx:v}}}),{c(){s=m("meta"),w=o(),i=m("p"),c=o(),f(h.$$.fragment),t=o(),f(_.$$.fragment),ye=o(),F=m("p"),F.innerHTML=De,Te=o(),Y=m("p"),Y.textContent=qe,we=o(),S=m("p"),S.innerHTML=Ke,_e=o(),Q=m("p"),Q.innerHTML=Oe,be=o(),f(P.$$.fragment),je=o(),j=m("div"),f(L.$$.fragment),We=o(),re=m("p"),re.innerHTML=es,Ge=o(),le=m("p"),le.innerHTML=ss,xe=o(),f(z.$$.fragment),ve=o(),f(H.$$.fragment),Je=o(),I=m("div"),f(D.$$.fragment),ke=o(),ie=m("p"),ie.textContent=ts,ze=o(),R=m("div"),f(q.$$.fragment),Re=o(),ce=m("p"),ce.textContent=ns,Ue=o(),f(K.$$.fragment),Ie=o(),C=m("div"),f(O.$$.fragment),$e=o(),de=m("p"),de.innerHTML=as,Ae=o(),J=m("div"),f(ee.$$.fragment),Ne=o(),me=m("p"),me.innerHTML=os,Xe=o(),f($.$$.fragment),Ee=o(),f(A.$$.fragment),Ce=o(),f(se.$$.fragment),Ve=o(),V=m("div"),f(te.$$.fragment),Fe=o(),pe=m("p"),pe.innerHTML=rs,Ye=o(),U=m("div"),f(ne.$$.fragment),Se=o(),he=m("p"),he.innerHTML=ls,Qe=o(),f(N.$$.fragment),Pe=o(),f(X.$$.fragment),Ze=o(),ge=m("p"),this.h()},l(e){const n=hs("svelte-u9bgzb",document.head);s=p(n,"META",{name:!0,content:!0}),n.forEach(a),w=r(e),i=p(e,"P",{}),x(i).forEach(a),c=r(e),u(h.$$.fragment,e),t=r(e),u(_.$$.fragment,e),ye=r(e),F=p(e,"P",{"data-svelte-h":!0}),b(F)!=="svelte-1dq9qfe"&&(F.innerHTML=De),Te=r(e),Y=p(e,"P",{"data-svelte-h":!0}),b(Y)!=="svelte-vfdo9a"&&(Y.textContent=qe),we=r(e),S=p(e,"P",{"data-svelte-h":!0}),b(S)!=="svelte-1lz2sl9"&&(S.innerHTML=Ke),_e=r(e),Q=p(e,"P",{"data-svelte-h":!0}),b(Q)!=="svelte-jnd3xg"&&(Q.innerHTML=Oe),be=r(e),u(P.$$.fragment,e),je=r(e),j=p(e,"DIV",{class:!0});var Z=x(j);u(L.$$.fragment,Z),We=r(Z),re=p(Z,"P",{"data-svelte-h":!0}),b(re)!=="svelte-mpth5h"&&(re.innerHTML=es),Ge=r(Z),le=p(Z,"P",{"data-svelte-h":!0}),b(le)!=="svelte-o55m63"&&(le.innerHTML=ss),xe=r(Z),u(z.$$.fragment,Z),Z.forEach(a),ve=r(e),u(H.$$.fragment,e),Je=r(e),I=p(e,"DIV",{class:!0});var W=x(I);u(D.$$.fragment,W),ke=r(W),ie=p(W,"P",{"data-svelte-h":!0}),b(ie)!=="svelte-imia5q"&&(ie.textContent=ts),ze=r(W),R=p(W,"DIV",{class:!0});var ae=x(R);u(q.$$.fragment,ae),Re=r(ae),ce=p(ae,"P",{"data-svelte-h":!0}),b(ce)!=="svelte-1x3yxsa"&&(ce.textContent=ns),ae.forEach(a),W.forEach(a),Ue=r(e),u(K.$$.fragment,e),Ie=r(e),C=p(e,"DIV",{class:!0});var G=x(C);u(O.$$.fragment,G),$e=r(G),de=p(G,"P",{"data-svelte-h":!0}),b(de)!=="svelte-6a15m9"&&(de.innerHTML=as),Ae=r(G),J=p(G,"DIV",{class:!0});var B=x(J);u(ee.$$.fragment,B),Ne=r(B),me=p(B,"P",{"data-svelte-h":!0}),b(me)!=="svelte-lvjixl"&&(me.innerHTML=os),Xe=r(B),u($.$$.fragment,B),Ee=r(B),u(A.$$.fragment,B),B.forEach(a),G.forEach(a),Ce=r(e),u(se.$$.fragment,e),Ve=r(e),V=p(e,"DIV",{class:!0});var fe=x(V);u(te.$$.fragment,fe),Fe=r(fe),pe=p(fe,"P",{"data-svelte-h":!0}),b(pe)!=="svelte-1u6snus"&&(pe.innerHTML=rs),Ye=r(fe),U=p(fe,"DIV",{class:!0});var E=x(U);u(ne.$$.fragment,E),Se=r(E),he=p(E,"P",{"data-svelte-h":!0}),b(he)!=="svelte-gnp77j"&&(he.innerHTML=ls),Qe=r(E),u(N.$$.fragment,E),Pe=r(E),u(X.$$.fragment,E),E.forEach(a),fe.forEach(a),Ze=r(e),ge=p(e,"P",{}),x(ge).forEach(a),this.h()},h(){k(s,"name","hf:doc:metadata"),k(s,"content",ws),k(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,n){d(document.head,s),l(e,w,n),l(e,i,n),l(e,c,n),g(h,e,n),l(e,t,n),g(_,e,n),l(e,ye,n),l(e,F,n),l(e,Te,n),l(e,Y,n),l(e,we,n),l(e,S,n),l(e,_e,n),l(e,Q,n),l(e,be,n),g(P,e,n),l(e,je,n),l(e,j,n),g(L,j,null),d(j,We),d(j,re),d(j,Ge),d(j,le),d(j,xe),g(z,j,null),l(e,ve,n),g(H,e,n),l(e,Je,n),l(e,I,n),g(D,I,null),d(I,ke),d(I,ie),d(I,ze),d(I,R),g(q,R,null),d(R,Re),d(R,ce),l(e,Ue,n),g(K,e,n),l(e,Ie,n),l(e,C,n),g(O,C,null),d(C,$e),d(C,de),d(C,Ae),d(C,J),g(ee,J,null),d(J,Ne),d(J,me),d(J,Xe),g($,J,null),d(J,Ee),g(A,J,null),l(e,Ce,n),g(se,e,n),l(e,Ve,n),l(e,V,n),g(te,V,null),d(V,Fe),d(V,pe),d(V,Ye),d(V,U),g(ne,U,null),d(U,Se),d(U,he),d(U,Qe),g(N,U,null),d(U,Pe),g(X,U,null),l(e,Ze,n),l(e,ge,n),Be=!0},p(e,[n]){const Z={};n&2&&(Z.$$scope={dirty:n,ctx:e}),z.$set(Z);const W={};n&2&&(W.$$scope={dirty:n,ctx:e}),$.$set(W);const ae={};n&2&&(ae.$$scope={dirty:n,ctx:e}),A.$set(ae);const G={};n&2&&(G.$$scope={dirty:n,ctx:e}),N.$set(G);const B={};n&2&&(B.$$scope={dirty:n,ctx:e}),X.$set(B)},i(e){Be||(M(h.$$.fragment,e),M(_.$$.fragment,e),M(P.$$.fragment,e),M(L.$$.fragment,e),M(z.$$.fragment,e),M(H.$$.fragment,e),M(D.$$.fragment,e),M(q.$$.fragment,e),M(K.$$.fragment,e),M(O.$$.fragment,e),M(ee.$$.fragment,e),M($.$$.fragment,e),M(A.$$.fragment,e),M(se.$$.fragment,e),M(te.$$.fragment,e),M(ne.$$.fragment,e),M(N.$$.fragment,e),M(X.$$.fragment,e),Be=!0)},o(e){y(h.$$.fragment,e),y(_.$$.fragment,e),y(P.$$.fragment,e),y(L.$$.fragment,e),y(z.$$.fragment,e),y(H.$$.fragment,e),y(D.$$.fragment,e),y(q.$$.fragment,e),y(K.$$.fragment,e),y(O.$$.fragment,e),y(ee.$$.fragment,e),y($.$$.fragment,e),y(A.$$.fragment,e),y(se.$$.fragment,e),y(te.$$.fragment,e),y(ne.$$.fragment,e),y(N.$$.fragment,e),y(X.$$.fragment,e),Be=!1},d(e){e&&(a(w),a(i),a(c),a(t),a(ye),a(F),a(Te),a(Y),a(we),a(S),a(_e),a(Q),a(be),a(je),a(j),a(ve),a(Je),a(I),a(Ue),a(Ie),a(C),a(Ce),a(Ve),a(V),a(Ze),a(ge)),a(s),T(h,e),T(_,e),T(P,e),T(L),T(z),T(H,e),T(D),T(q),T(K,e),T(O),T(ee),T($),T(A),T(se,e),T(te),T(ne),T(N),T(X)}}}const ws='{"title":"Video Vision Transformer (ViViT)","local":"video-vision-transformer-vivit","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"VivitConfig","local":"transformers.VivitConfig","sections":[],"depth":2},{"title":"VivitImageProcessor","local":"transformers.VivitImageProcessor","sections":[],"depth":2},{"title":"VivitModel","local":"transformers.VivitModel","sections":[],"depth":2},{"title":"VivitForVideoClassification","local":"transformers.VivitForVideoClassification","sections":[],"depth":2}],"depth":1}';function _s(v){return ds(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Vs extends ms{constructor(s){super(),ps(this,s,_s,Ts,cs,{})}}export{Vs as component};
