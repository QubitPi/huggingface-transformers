import{s as Ls,o as Ps,n as B}from"../chunks/scheduler.9bc65507.js";import{S as Hs,i as As,g as $,s as h,r as o,A as qs,h as d,f as r,c as u,j as Vs,u as j,x as T,k as Gs,y as Ds,a as p,v as i,d as g,t as f,w as y}from"../chunks/index.707bf1b6.js";import{T as Ys}from"../chunks/Tip.c2ecdbf4.js";import{C as N}from"../chunks/CodeBlock.54a9f38d.js";import{D as Os}from"../chunks/DocNotebookDropdown.41f65cb5.js";import{F as Ms,M as A}from"../chunks/Markdown.8ab98a13.js";import{H as _s}from"../chunks/Heading.342b1fa6.js";function Ks(b){let n,e="Hugging Faceのベンチマークツールは非推奨であり、Transformerモデルの速度とメモリの複雑さを測定するために外部のベンチマークライブラリを使用することをお勧めします。";return{c(){n=$("p"),n.textContent=e},l(a){n=d(a,"P",{"data-svelte-h":!0}),T(n)!=="svelte-1sly4sf"&&(n.textContent=e)},m(a,t){p(a,n,t)},p:B,d(a){a&&r(n)}}}function sa(b){let n,e=`ここでの <em>推論</em> は、単一のフォワードパスによって定義され、 <em>トレーニング</em> は単一のフォワードパスと
バックワードパスによって定義されます。`;return{c(){n=$("p"),n.innerHTML=e},l(a){n=d(a,"P",{"data-svelte-h":!0}),T(n)!=="svelte-grjiom"&&(n.innerHTML=e)},m(a,t){p(a,n,t)},p:B,d(a){a&&r(n)}}}function aa(b){let n,e;return n=new N({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFB5VG9yY2hCZW5jaG1hcmslMkMlMjBQeVRvcmNoQmVuY2htYXJrQXJndW1lbnRzJTBBJTBBYXJncyUyMCUzRCUyMFB5VG9yY2hCZW5jaG1hcmtBcmd1bWVudHMobW9kZWxzJTNEJTVCJTIyZ29vZ2xlLWJlcnQlMkZiZXJ0LWJhc2UtdW5jYXNlZCUyMiU1RCUyQyUyMGJhdGNoX3NpemVzJTNEJTVCOCU1RCUyQyUyMHNlcXVlbmNlX2xlbmd0aHMlM0QlNUI4JTJDJTIwMzIlMkMlMjAxMjglMkMlMjA1MTIlNUQpJTBBYmVuY2htYXJrJTIwJTNEJTIwUHlUb3JjaEJlbmNobWFyayhhcmdzKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PyTorchBenchmark, PyTorchBenchmarkArguments

<span class="hljs-meta">&gt;&gt;&gt; </span>args = PyTorchBenchmarkArguments(models=[<span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>], batch_sizes=[<span class="hljs-number">8</span>], sequence_lengths=[<span class="hljs-number">8</span>, <span class="hljs-number">32</span>, <span class="hljs-number">128</span>, <span class="hljs-number">512</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>benchmark = PyTorchBenchmark(args)`,wrap:!1}}),{c(){o(n.$$.fragment)},l(a){j(n.$$.fragment,a)},m(a,t){i(n,a,t),e=!0},p:B,i(a){e||(g(n.$$.fragment,a),e=!0)},o(a){f(n.$$.fragment,a),e=!1},d(a){y(n,a)}}}function na(b){let n,e;return n=new A({props:{$$slots:{default:[aa]},$$scope:{ctx:b}}}),{c(){o(n.$$.fragment)},l(a){j(n.$$.fragment,a)},m(a,t){i(n,a,t),e=!0},p(a,t){const c={};t&2&&(c.$$scope={dirty:t,ctx:a}),n.$set(c)},i(a){e||(g(n.$$.fragment,a),e=!0)},o(a){f(n.$$.fragment,a),e=!1},d(a){y(n,a)}}}function ea(b){let n,e;return n=new N({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFRlbnNvckZsb3dCZW5jaG1hcmslMkMlMjBUZW5zb3JGbG93QmVuY2htYXJrQXJndW1lbnRzJTBBJTBBYXJncyUyMCUzRCUyMFRlbnNvckZsb3dCZW5jaG1hcmtBcmd1bWVudHMoJTBBJTIwJTIwJTIwJTIwbW9kZWxzJTNEJTVCJTIyZ29vZ2xlLWJlcnQlMkZiZXJ0LWJhc2UtdW5jYXNlZCUyMiU1RCUyQyUyMGJhdGNoX3NpemVzJTNEJTVCOCU1RCUyQyUyMHNlcXVlbmNlX2xlbmd0aHMlM0QlNUI4JTJDJTIwMzIlMkMlMjAxMjglMkMlMjA1MTIlNUQlMEEpJTBBYmVuY2htYXJrJTIwJTNEJTIwVGVuc29yRmxvd0JlbmNobWFyayhhcmdzKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TensorFlowBenchmark, TensorFlowBenchmarkArguments

<span class="hljs-meta">&gt;&gt;&gt; </span>args = TensorFlowBenchmarkArguments(
<span class="hljs-meta">... </span>    models=[<span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>], batch_sizes=[<span class="hljs-number">8</span>], sequence_lengths=[<span class="hljs-number">8</span>, <span class="hljs-number">32</span>, <span class="hljs-number">128</span>, <span class="hljs-number">512</span>]
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>benchmark = TensorFlowBenchmark(args)`,wrap:!1}}),{c(){o(n.$$.fragment)},l(a){j(n.$$.fragment,a)},m(a,t){i(n,a,t),e=!0},p:B,i(a){e||(g(n.$$.fragment,a),e=!0)},o(a){f(n.$$.fragment,a),e=!1},d(a){y(n,a)}}}function la(b){let n,e;return n=new A({props:{$$slots:{default:[ea]},$$scope:{ctx:b}}}),{c(){o(n.$$.fragment)},l(a){j(n.$$.fragment,a)},m(a,t){i(n,a,t),e=!0},p(a,t){const c={};t&2&&(c.$$scope={dirty:t,ctx:a}),n.$set(c)},i(a){e||(g(n.$$.fragment,a),e=!0)},o(a){f(n.$$.fragment,a),e=!1},d(a){y(n,a)}}}function ra(b){let n,e,a,t="インスタンス化されたベンチマークオブジェクトは、単に <code>benchmark.run()</code> を呼び出すことで実行できます。",c,_,w;return n=new N({props:{code:"cHl0aG9uJTIwZXhhbXBsZXMlMkZweXRvcmNoJTJGYmVuY2htYXJraW5nJTJGcnVuX2JlbmNobWFyay5weSUyMC0taGVscA==",highlighted:'python examples/pytorch/benchmarking/run_benchmark.py --<span class="hljs-built_in">help</span>',wrap:!1}}),_=new N({props:{code:"cmVzdWx0cyUyMCUzRCUyMGJlbmNobWFyay5ydW4oKSUwQXByaW50KHJlc3VsdHMpJTBBJTBBJTBB",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>results = benchmark.run()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(results)
====================       INFERENCE - SPEED - RESULT       ====================
--------------------------------------------------------------------------------
Model Name             Batch Size     Seq Length     Time <span class="hljs-keyword">in</span> s                  
--------------------------------------------------------------------------------
google-bert/bert-base-uncased          <span class="hljs-number">8</span>               <span class="hljs-number">8</span>             <span class="hljs-number">0.006</span>     
google-bert/bert-base-uncased          <span class="hljs-number">8</span>               <span class="hljs-number">32</span>            <span class="hljs-number">0.006</span>     
google-bert/bert-base-uncased          <span class="hljs-number">8</span>              <span class="hljs-number">128</span>            <span class="hljs-number">0.018</span>     
google-bert/bert-base-uncased          <span class="hljs-number">8</span>              <span class="hljs-number">512</span>            <span class="hljs-number">0.088</span>     
--------------------------------------------------------------------------------

====================      INFERENCE - MEMORY - RESULT       ====================
--------------------------------------------------------------------------------
Model Name             Batch Size     Seq Length    Memory <span class="hljs-keyword">in</span> MB 
--------------------------------------------------------------------------------
google-bert/bert-base-uncased          <span class="hljs-number">8</span>               <span class="hljs-number">8</span>             <span class="hljs-number">1227</span>
google-bert/bert-base-uncased          <span class="hljs-number">8</span>               <span class="hljs-number">32</span>            <span class="hljs-number">1281</span>
google-bert/bert-base-uncased          <span class="hljs-number">8</span>              <span class="hljs-number">128</span>            <span class="hljs-number">1307</span>
google-bert/bert-base-uncased          <span class="hljs-number">8</span>              <span class="hljs-number">512</span>            <span class="hljs-number">1539</span>
--------------------------------------------------------------------------------

====================        ENVIRONMENT INFORMATION         ====================

- transformers_version: <span class="hljs-number">2.11</span><span class="hljs-number">.0</span>
- framework: PyTorch
- use_torchscript: <span class="hljs-literal">False</span>
- framework_version: <span class="hljs-number">1.4</span><span class="hljs-number">.0</span>
- python_version: <span class="hljs-number">3.6</span><span class="hljs-number">.10</span>
- system: Linux
- cpu: x86_64
- architecture: 64bit
- date: <span class="hljs-number">2020</span>-06-<span class="hljs-number">29</span>
- time: 08:<span class="hljs-number">58</span>:<span class="hljs-number">43.371351</span>
- fp16: <span class="hljs-literal">False</span>
- use_multiprocessing: <span class="hljs-literal">True</span>
- only_pretrain_model: <span class="hljs-literal">False</span>
- cpu_ram_mb: <span class="hljs-number">32088</span>
- use_gpu: <span class="hljs-literal">True</span>
- num_gpus: <span class="hljs-number">1</span>
- gpu: TITAN RTX
- gpu_ram_mb: <span class="hljs-number">24217</span>
- gpu_power_watts: <span class="hljs-number">280.0</span>
- gpu_performance_state: <span class="hljs-number">2</span>
- use_tpu: <span class="hljs-literal">False</span>`,wrap:!1}}),{c(){o(n.$$.fragment),e=h(),a=$("p"),a.innerHTML=t,c=h(),o(_.$$.fragment)},l(m){j(n.$$.fragment,m),e=u(m),a=d(m,"P",{"data-svelte-h":!0}),T(a)!=="svelte-103f2r4"&&(a.innerHTML=t),c=u(m),j(_.$$.fragment,m)},m(m,M){i(n,m,M),p(m,e,M),p(m,a,M),p(m,c,M),i(_,m,M),w=!0},p:B,i(m){w||(g(n.$$.fragment,m),g(_.$$.fragment,m),w=!0)},o(m){f(n.$$.fragment,m),f(_.$$.fragment,m),w=!1},d(m){m&&(r(e),r(a),r(c)),y(n,m),y(_,m)}}}function ta(b){let n,e;return n=new A({props:{$$slots:{default:[ra]},$$scope:{ctx:b}}}),{c(){o(n.$$.fragment)},l(a){j(n.$$.fragment,a)},m(a,t){i(n,a,t),e=!0},p(a,t){const c={};t&2&&(c.$$scope={dirty:t,ctx:a}),n.$set(c)},i(a){e||(g(n.$$.fragment,a),e=!0)},o(a){f(n.$$.fragment,a),e=!1},d(a){y(n,a)}}}function pa(b){let n,e,a,t="インスタンス化されたベンチマークオブジェクトは、単に <code>benchmark.run()</code> を呼び出すことで実行できます。",c,_,w;return n=new N({props:{code:"cHl0aG9uJTIwZXhhbXBsZXMlMkZ0ZW5zb3JmbG93JTJGYmVuY2htYXJraW5nJTJGcnVuX2JlbmNobWFya190Zi5weSUyMC0taGVscA==",highlighted:'python examples/tensorflow/benchmarking/run_benchmark_tf.py --<span class="hljs-built_in">help</span>',wrap:!1}}),_=new N({props:{code:"cmVzdWx0cyUyMCUzRCUyMGJlbmNobWFyay5ydW4oKSUwQXByaW50KHJlc3VsdHMpJTBBcmVzdWx0cyUyMCUzRCUyMGJlbmNobWFyay5ydW4oKSUwQXByaW50KHJlc3VsdHMpJTBBJTBBJTBB",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>results = benchmark.run()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(results)
<span class="hljs-meta">&gt;&gt;&gt; </span>results = benchmark.run()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(results)
====================       INFERENCE - SPEED - RESULT       ====================
--------------------------------------------------------------------------------
Model Name             Batch Size     Seq Length     Time <span class="hljs-keyword">in</span> s                  
--------------------------------------------------------------------------------
google-bert/bert-base-uncased          <span class="hljs-number">8</span>               <span class="hljs-number">8</span>             <span class="hljs-number">0.005</span>
google-bert/bert-base-uncased          <span class="hljs-number">8</span>               <span class="hljs-number">32</span>            <span class="hljs-number">0.008</span>
google-bert/bert-base-uncased          <span class="hljs-number">8</span>              <span class="hljs-number">128</span>            <span class="hljs-number">0.022</span>
google-bert/bert-base-uncased          <span class="hljs-number">8</span>              <span class="hljs-number">512</span>            <span class="hljs-number">0.105</span>
--------------------------------------------------------------------------------

====================      INFERENCE - MEMORY - RESULT       ====================
--------------------------------------------------------------------------------
Model Name             Batch Size     Seq Length    Memory <span class="hljs-keyword">in</span> MB 
--------------------------------------------------------------------------------
google-bert/bert-base-uncased          <span class="hljs-number">8</span>               <span class="hljs-number">8</span>             <span class="hljs-number">1330</span>
google-bert/bert-base-uncased          <span class="hljs-number">8</span>               <span class="hljs-number">32</span>            <span class="hljs-number">1330</span>
google-bert/bert-base-uncased          <span class="hljs-number">8</span>              <span class="hljs-number">128</span>            <span class="hljs-number">1330</span>
google-bert/bert-base-uncased          <span class="hljs-number">8</span>              <span class="hljs-number">512</span>            <span class="hljs-number">1770</span>
--------------------------------------------------------------------------------

====================        ENVIRONMENT INFORMATION         ====================

- transformers_version: <span class="hljs-number">2.11</span><span class="hljs-number">.0</span>
- framework: Tensorflow
- use_xla: <span class="hljs-literal">False</span>
- framework_version: <span class="hljs-number">2.2</span><span class="hljs-number">.0</span>
- python_version: <span class="hljs-number">3.6</span><span class="hljs-number">.10</span>
- system: Linux
- cpu: x86_64
- architecture: 64bit
- date: <span class="hljs-number">2020</span>-06-<span class="hljs-number">29</span>
- time: 09:<span class="hljs-number">26</span>:<span class="hljs-number">35.617317</span>
- fp16: <span class="hljs-literal">False</span>
- use_multiprocessing: <span class="hljs-literal">True</span>
- only_pretrain_model: <span class="hljs-literal">False</span>
- cpu_ram_mb: <span class="hljs-number">32088</span>
- use_gpu: <span class="hljs-literal">True</span>
- num_gpus: <span class="hljs-number">1</span>
- gpu: TITAN RTX
- gpu_ram_mb: <span class="hljs-number">24217</span>
- gpu_power_watts: <span class="hljs-number">280.0</span>
- gpu_performance_state: <span class="hljs-number">2</span>
- use_tpu: <span class="hljs-literal">False</span>`,wrap:!1}}),{c(){o(n.$$.fragment),e=h(),a=$("p"),a.innerHTML=t,c=h(),o(_.$$.fragment)},l(m){j(n.$$.fragment,m),e=u(m),a=d(m,"P",{"data-svelte-h":!0}),T(a)!=="svelte-103f2r4"&&(a.innerHTML=t),c=u(m),j(_.$$.fragment,m)},m(m,M){i(n,m,M),p(m,e,M),p(m,a,M),p(m,c,M),i(_,m,M),w=!0},p:B,i(m){w||(g(n.$$.fragment,m),g(_.$$.fragment,m),w=!0)},o(m){f(n.$$.fragment,m),f(_.$$.fragment,m),w=!1},d(m){m&&(r(e),r(a),r(c)),y(n,m),y(_,m)}}}function ma(b){let n,e;return n=new A({props:{$$slots:{default:[pa]},$$scope:{ctx:b}}}),{c(){o(n.$$.fragment)},l(a){j(n.$$.fragment,a)},m(a,t){i(n,a,t),e=!0},p(a,t){const c={};t&2&&(c.$$scope={dirty:t,ctx:a}),n.$set(c)},i(a){e||(g(n.$$.fragment,a),e=!0)},o(a){f(n.$$.fragment,a),e=!1},d(a){y(n,a)}}}function ca(b){let n,e;return n=new N({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFB5VG9yY2hCZW5jaG1hcmslMkMlMjBQeVRvcmNoQmVuY2htYXJrQXJndW1lbnRzJTJDJTIwQmVydENvbmZpZyUwQSUwQWFyZ3MlMjAlM0QlMjBQeVRvcmNoQmVuY2htYXJrQXJndW1lbnRzKCUwQSUyMCUyMCUyMCUyMG1vZGVscyUzRCU1QiUyMmJlcnQtYmFzZSUyMiUyQyUyMCUyMmJlcnQtMzg0LWhpZCUyMiUyQyUyMCUyMmJlcnQtNi1sYXklMjIlNUQlMkMlMjBiYXRjaF9zaXplcyUzRCU1QjglNUQlMkMlMjBzZXF1ZW5jZV9sZW5ndGhzJTNEJTVCOCUyQyUyMDMyJTJDJTIwMTI4JTJDJTIwNTEyJTVEJTBBKSUwQWNvbmZpZ19iYXNlJTIwJTNEJTIwQmVydENvbmZpZygpJTBBY29uZmlnXzM4NF9oaWQlMjAlM0QlMjBCZXJ0Q29uZmlnKGhpZGRlbl9zaXplJTNEMzg0KSUwQWNvbmZpZ182X2xheSUyMCUzRCUyMEJlcnRDb25maWcobnVtX2hpZGRlbl9sYXllcnMlM0Q2KSUwQSUwQWJlbmNobWFyayUyMCUzRCUyMFB5VG9yY2hCZW5jaG1hcmsoYXJncyUyQyUyMGNvbmZpZ3MlM0QlNUJjb25maWdfYmFzZSUyQyUyMGNvbmZpZ18zODRfaGlkJTJDJTIwY29uZmlnXzZfbGF5JTVEKSUwQWJlbmNobWFyay5ydW4oKSUwQSUwQSUwQQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PyTorchBenchmark, PyTorchBenchmarkArguments, BertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span>args = PyTorchBenchmarkArguments(
<span class="hljs-meta">... </span>    models=[<span class="hljs-string">&quot;bert-base&quot;</span>, <span class="hljs-string">&quot;bert-384-hid&quot;</span>, <span class="hljs-string">&quot;bert-6-lay&quot;</span>], batch_sizes=[<span class="hljs-number">8</span>], sequence_lengths=[<span class="hljs-number">8</span>, <span class="hljs-number">32</span>, <span class="hljs-number">128</span>, <span class="hljs-number">512</span>]
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config_base = BertConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_384_hid = BertConfig(hidden_size=<span class="hljs-number">384</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config_6_lay = BertConfig(num_hidden_layers=<span class="hljs-number">6</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>benchmark = PyTorchBenchmark(args, configs=[config_base, config_384_hid, config_6_lay])
<span class="hljs-meta">&gt;&gt;&gt; </span>benchmark.run()
====================       INFERENCE - SPEED - RESULT       ====================
--------------------------------------------------------------------------------
Model Name             Batch Size     Seq Length       Time <span class="hljs-keyword">in</span> s                  
--------------------------------------------------------------------------------
bert-base                  <span class="hljs-number">8</span>              <span class="hljs-number">128</span>            <span class="hljs-number">0.006</span>
bert-base                  <span class="hljs-number">8</span>              <span class="hljs-number">512</span>            <span class="hljs-number">0.006</span>
bert-base                  <span class="hljs-number">8</span>              <span class="hljs-number">128</span>            <span class="hljs-number">0.018</span>     
bert-base                  <span class="hljs-number">8</span>              <span class="hljs-number">512</span>            <span class="hljs-number">0.088</span>     
bert-<span class="hljs-number">384</span>-hid              <span class="hljs-number">8</span>               <span class="hljs-number">8</span>             <span class="hljs-number">0.006</span>     
bert-<span class="hljs-number">384</span>-hid              <span class="hljs-number">8</span>               <span class="hljs-number">32</span>            <span class="hljs-number">0.006</span>     
bert-<span class="hljs-number">384</span>-hid              <span class="hljs-number">8</span>              <span class="hljs-number">128</span>            <span class="hljs-number">0.011</span>     
bert-<span class="hljs-number">384</span>-hid              <span class="hljs-number">8</span>              <span class="hljs-number">512</span>            <span class="hljs-number">0.054</span>     
bert-<span class="hljs-number">6</span>-lay                 <span class="hljs-number">8</span>               <span class="hljs-number">8</span>             <span class="hljs-number">0.003</span>     
bert-<span class="hljs-number">6</span>-lay                 <span class="hljs-number">8</span>               <span class="hljs-number">32</span>            <span class="hljs-number">0.004</span>     
bert-<span class="hljs-number">6</span>-lay                 <span class="hljs-number">8</span>              <span class="hljs-number">128</span>            <span class="hljs-number">0.009</span>     
bert-<span class="hljs-number">6</span>-lay                 <span class="hljs-number">8</span>              <span class="hljs-number">512</span>            <span class="hljs-number">0.044</span>
--------------------------------------------------------------------------------

====================      INFERENCE - MEMORY - RESULT       ====================
--------------------------------------------------------------------------------
Model Name             Batch Size     Seq Length      Memory <span class="hljs-keyword">in</span> MB 
--------------------------------------------------------------------------------
bert-base                  <span class="hljs-number">8</span>               <span class="hljs-number">8</span>             <span class="hljs-number">1277</span>
bert-base                  <span class="hljs-number">8</span>               <span class="hljs-number">32</span>            <span class="hljs-number">1281</span>
bert-base                  <span class="hljs-number">8</span>              <span class="hljs-number">128</span>            <span class="hljs-number">1307</span>     
bert-base                  <span class="hljs-number">8</span>              <span class="hljs-number">512</span>            <span class="hljs-number">1539</span>     
bert-<span class="hljs-number">384</span>-hid              <span class="hljs-number">8</span>               <span class="hljs-number">8</span>             <span class="hljs-number">1005</span>     
bert-<span class="hljs-number">384</span>-hid              <span class="hljs-number">8</span>               <span class="hljs-number">32</span>            <span class="hljs-number">1027</span>     
bert-<span class="hljs-number">384</span>-hid              <span class="hljs-number">8</span>              <span class="hljs-number">128</span>            <span class="hljs-number">1035</span>     
bert-<span class="hljs-number">384</span>-hid              <span class="hljs-number">8</span>              <span class="hljs-number">512</span>            <span class="hljs-number">1255</span>     
bert-<span class="hljs-number">6</span>-lay                 <span class="hljs-number">8</span>               <span class="hljs-number">8</span>             <span class="hljs-number">1097</span>     
bert-<span class="hljs-number">6</span>-lay                 <span class="hljs-number">8</span>               <span class="hljs-number">32</span>            <span class="hljs-number">1101</span>     
bert-<span class="hljs-number">6</span>-lay                 <span class="hljs-number">8</span>              <span class="hljs-number">128</span>            <span class="hljs-number">1127</span>     
bert-<span class="hljs-number">6</span>-lay                 <span class="hljs-number">8</span>              <span class="hljs-number">512</span>            <span class="hljs-number">1359</span>
--------------------------------------------------------------------------------

====================        ENVIRONMENT INFORMATION         ====================

- transformers_version: <span class="hljs-number">2.11</span><span class="hljs-number">.0</span>
- framework: PyTorch
- use_torchscript: <span class="hljs-literal">False</span>
- framework_version: <span class="hljs-number">1.4</span><span class="hljs-number">.0</span>
- python_version: <span class="hljs-number">3.6</span><span class="hljs-number">.10</span>
- system: Linux
- cpu: x86_64
- architecture: 64bit
- date: <span class="hljs-number">2020</span>-06-<span class="hljs-number">29</span>
- time: 09:<span class="hljs-number">35</span>:<span class="hljs-number">25.143267</span>
- fp16: <span class="hljs-literal">False</span>
- use_multiprocessing: <span class="hljs-literal">True</span>
- only_pretrain_model: <span class="hljs-literal">False</span>
- cpu_ram_mb: <span class="hljs-number">32088</span>
- use_gpu: <span class="hljs-literal">True</span>
- num_gpus: <span class="hljs-number">1</span>
- gpu: TITAN RTX
- gpu_ram_mb: <span class="hljs-number">24217</span>
- gpu_power_watts: <span class="hljs-number">280.0</span>
- gpu_performance_state: <span class="hljs-number">2</span>
- use_tpu: <span class="hljs-literal">False</span>`,wrap:!1}}),{c(){o(n.$$.fragment)},l(a){j(n.$$.fragment,a)},m(a,t){i(n,a,t),e=!0},p:B,i(a){e||(g(n.$$.fragment,a),e=!0)},o(a){f(n.$$.fragment,a),e=!1},d(a){y(n,a)}}}function ha(b){let n,e;return n=new A({props:{$$slots:{default:[ca]},$$scope:{ctx:b}}}),{c(){o(n.$$.fragment)},l(a){j(n.$$.fragment,a)},m(a,t){i(n,a,t),e=!0},p(a,t){const c={};t&2&&(c.$$scope={dirty:t,ctx:a}),n.$set(c)},i(a){e||(g(n.$$.fragment,a),e=!0)},o(a){f(n.$$.fragment,a),e=!1},d(a){y(n,a)}}}function ua(b){let n,e;return n=new N({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFRlbnNvckZsb3dCZW5jaG1hcmslMkMlMjBUZW5zb3JGbG93QmVuY2htYXJrQXJndW1lbnRzJTJDJTIwQmVydENvbmZpZyUwQSUwQWFyZ3MlMjAlM0QlMjBUZW5zb3JGbG93QmVuY2htYXJrQXJndW1lbnRzKCUwQSUyMCUyMCUyMCUyMG1vZGVscyUzRCU1QiUyMmJlcnQtYmFzZSUyMiUyQyUyMCUyMmJlcnQtMzg0LWhpZCUyMiUyQyUyMCUyMmJlcnQtNi1sYXklMjIlNUQlMkMlMjBiYXRjaF9zaXplcyUzRCU1QjglNUQlMkMlMjBzZXF1ZW5jZV9sZW5ndGhzJTNEJTVCOCUyQyUyMDMyJTJDJTIwMTI4JTJDJTIwNTEyJTVEJTBBKSUwQWNvbmZpZ19iYXNlJTIwJTNEJTIwQmVydENvbmZpZygpJTBBY29uZmlnXzM4NF9oaWQlMjAlM0QlMjBCZXJ0Q29uZmlnKGhpZGRlbl9zaXplJTNEMzg0KSUwQWNvbmZpZ182X2xheSUyMCUzRCUyMEJlcnRDb25maWcobnVtX2hpZGRlbl9sYXllcnMlM0Q2KSUwQSUwQWJlbmNobWFyayUyMCUzRCUyMFRlbnNvckZsb3dCZW5jaG1hcmsoYXJncyUyQyUyMGNvbmZpZ3MlM0QlNUJjb25maWdfYmFzZSUyQyUyMGNvbmZpZ18zODRfaGlkJTJDJTIwY29uZmlnXzZfbGF5JTVEKSUwQWJlbmNobWFyay5ydW4oKSUwQSUwQSUwQQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TensorFlowBenchmark, TensorFlowBenchmarkArguments, BertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span>args = TensorFlowBenchmarkArguments(
<span class="hljs-meta">... </span>    models=[<span class="hljs-string">&quot;bert-base&quot;</span>, <span class="hljs-string">&quot;bert-384-hid&quot;</span>, <span class="hljs-string">&quot;bert-6-lay&quot;</span>], batch_sizes=[<span class="hljs-number">8</span>], sequence_lengths=[<span class="hljs-number">8</span>, <span class="hljs-number">32</span>, <span class="hljs-number">128</span>, <span class="hljs-number">512</span>]
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config_base = BertConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span>config_384_hid = BertConfig(hidden_size=<span class="hljs-number">384</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config_6_lay = BertConfig(num_hidden_layers=<span class="hljs-number">6</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>benchmark = TensorFlowBenchmark(args, configs=[config_base, config_384_hid, config_6_lay])
<span class="hljs-meta">&gt;&gt;&gt; </span>benchmark.run()
====================       INFERENCE - SPEED - RESULT       ====================
--------------------------------------------------------------------------------
Model Name             Batch Size     Seq Length       Time <span class="hljs-keyword">in</span> s                  
--------------------------------------------------------------------------------
bert-base                  <span class="hljs-number">8</span>               <span class="hljs-number">8</span>             <span class="hljs-number">0.005</span>
bert-base                  <span class="hljs-number">8</span>               <span class="hljs-number">32</span>            <span class="hljs-number">0.008</span>
bert-base                  <span class="hljs-number">8</span>              <span class="hljs-number">128</span>            <span class="hljs-number">0.022</span>
bert-base                  <span class="hljs-number">8</span>              <span class="hljs-number">512</span>            <span class="hljs-number">0.106</span>
bert-<span class="hljs-number">384</span>-hid              <span class="hljs-number">8</span>               <span class="hljs-number">8</span>             <span class="hljs-number">0.005</span>
bert-<span class="hljs-number">384</span>-hid              <span class="hljs-number">8</span>               <span class="hljs-number">32</span>            <span class="hljs-number">0.007</span>
bert-<span class="hljs-number">384</span>-hid              <span class="hljs-number">8</span>              <span class="hljs-number">128</span>            <span class="hljs-number">0.018</span>
bert-<span class="hljs-number">384</span>-hid              <span class="hljs-number">8</span>              <span class="hljs-number">512</span>            <span class="hljs-number">0.064</span>
bert-<span class="hljs-number">6</span>-lay                 <span class="hljs-number">8</span>               <span class="hljs-number">8</span>             <span class="hljs-number">0.002</span>
bert-<span class="hljs-number">6</span>-lay                 <span class="hljs-number">8</span>               <span class="hljs-number">32</span>            <span class="hljs-number">0.003</span>
bert-<span class="hljs-number">6</span>-lay                 <span class="hljs-number">8</span>              <span class="hljs-number">128</span>            <span class="hljs-number">0.0011</span>
bert-<span class="hljs-number">6</span>-lay                 <span class="hljs-number">8</span>              <span class="hljs-number">512</span>            <span class="hljs-number">0.074</span>
--------------------------------------------------------------------------------

====================      INFERENCE - MEMORY - RESULT       ====================
--------------------------------------------------------------------------------
Model Name             Batch Size     Seq Length      Memory <span class="hljs-keyword">in</span> MB 
--------------------------------------------------------------------------------
bert-base                  <span class="hljs-number">8</span>               <span class="hljs-number">8</span>             <span class="hljs-number">1330</span>
bert-base                  <span class="hljs-number">8</span>               <span class="hljs-number">32</span>            <span class="hljs-number">1330</span>
bert-base                  <span class="hljs-number">8</span>              <span class="hljs-number">128</span>            <span class="hljs-number">1330</span>
bert-base                  <span class="hljs-number">8</span>              <span class="hljs-number">512</span>            <span class="hljs-number">1770</span>
bert-<span class="hljs-number">384</span>-hid              <span class="hljs-number">8</span>               <span class="hljs-number">8</span>             <span class="hljs-number">1330</span>
bert-<span class="hljs-number">384</span>-hid              <span class="hljs-number">8</span>               <span class="hljs-number">32</span>            <span class="hljs-number">1330</span>
bert-<span class="hljs-number">384</span>-hid              <span class="hljs-number">8</span>              <span class="hljs-number">128</span>            <span class="hljs-number">1330</span>
bert-<span class="hljs-number">384</span>-hid              <span class="hljs-number">8</span>              <span class="hljs-number">512</span>            <span class="hljs-number">1540</span>
bert-<span class="hljs-number">6</span>-lay                 <span class="hljs-number">8</span>               <span class="hljs-number">8</span>             <span class="hljs-number">1330</span>
bert-<span class="hljs-number">6</span>-lay                 <span class="hljs-number">8</span>               <span class="hljs-number">32</span>            <span class="hljs-number">1330</span>
bert-<span class="hljs-number">6</span>-lay                 <span class="hljs-number">8</span>              <span class="hljs-number">128</span>            <span class="hljs-number">1330</span>
bert-<span class="hljs-number">6</span>-lay                 <span class="hljs-number">8</span>              <span class="hljs-number">512</span>            <span class="hljs-number">1540</span>
--------------------------------------------------------------------------------

====================        ENVIRONMENT INFORMATION         ====================

- transformers_version: <span class="hljs-number">2.11</span><span class="hljs-number">.0</span>
- framework: Tensorflow
- use_xla: <span class="hljs-literal">False</span>
- framework_version: <span class="hljs-number">2.2</span><span class="hljs-number">.0</span>
- python_version: <span class="hljs-number">3.6</span><span class="hljs-number">.10</span>
- system: Linux
- cpu: x86_64
- architecture: 64bit
- date: <span class="hljs-number">2020</span>-06-<span class="hljs-number">29</span>
- time: 09:<span class="hljs-number">38</span>:<span class="hljs-number">15.487125</span>
- fp16: <span class="hljs-literal">False</span>
- use_multiprocessing: <span class="hljs-literal">True</span>
- only_pretrain_model: <span class="hljs-literal">False</span>
- cpu_ram_mb: <span class="hljs-number">32088</span>
- use_gpu: <span class="hljs-literal">True</span>
- num_gpus: <span class="hljs-number">1</span>
- gpu: TITAN RTX
- gpu_ram_mb: <span class="hljs-number">24217</span>
- gpu_power_watts: <span class="hljs-number">280.0</span>
- gpu_performance_state: <span class="hljs-number">2</span>
- use_tpu: <span class="hljs-literal">False</span>`,wrap:!1}}),{c(){o(n.$$.fragment)},l(a){j(n.$$.fragment,a)},m(a,t){i(n,a,t),e=!0},p:B,i(a){e||(g(n.$$.fragment,a),e=!0)},o(a){f(n.$$.fragment,a),e=!1},d(a){y(n,a)}}}function ba(b){let n,e;return n=new A({props:{$$slots:{default:[ua]},$$scope:{ctx:b}}}),{c(){o(n.$$.fragment)},l(a){j(n.$$.fragment,a)},m(a,t){i(n,a,t),e=!0},p(a,t){const c={};t&2&&(c.$$scope={dirty:t,ctx:a}),n.$set(c)},i(a){e||(g(n.$$.fragment,a),e=!0)},o(a){f(n.$$.fragment,a),e=!1},d(a){y(n,a)}}}function oa(b){let n,e,a,t,c,_,w,m,M,D,Z,Ts="🤗 Transformersモデルをベンチマークし、ベストプラクティス、すでに利用可能なベンチマークについて見てみましょう。",O,v,ws='🤗 Transformersモデルをベンチマークする方法について詳しく説明したノートブックは<a href="https://github.com/huggingface/notebooks/tree/main/examples/benchmark.ipynb" rel="nofollow">こちら</a>で利用できます。',K,E,ss,Q,ks=`<code>PyTorchBenchmark</code>クラスと<code>TensorFlowBenchmark</code>クラスを使用すると、🤗 Transformersモデルを柔軟にベンチマークできます。
ベンチマーククラスを使用すると、<em>ピークメモリ使用量</em> および <em>必要な時間</em> を <em>推論</em> および <em>トレーニング</em> の両方について測定できます。`,as,k,ns,W,Us=`ベンチマーククラス<code>PyTorchBenchmark</code>と<code>TensorFlowBenchmark</code>は、それぞれのベンチマーククラスに対する適切な設定を含む <code>PyTorchBenchmarkArguments</code> および <code>TensorFlowBenchmarkArguments</code> タイプのオブジェクトを必要とします。
<code>PyTorchBenchmarkArguments</code> および <code>TensorFlowBenchmarkArguments</code> はデータクラスであり、それぞれのベンチマーククラスに対するすべての関連する設定を含んでいます。
次の例では、タイプ <em>bert-base-cased</em> のBERTモデルをベンチマークする方法が示されています。`,es,U,ls,R,Js=`ここでは、ベンチマーク引数のデータクラスに対して、<code>models</code>、<code>batch_sizes</code>
および<code>sequence_lengths</code>の3つの引数が指定されています。引数<code>models</code>は必須で、
<a href="https://huggingface.co/models" rel="nofollow">モデルハブ</a>からのモデル識別子の<code>リスト</code>を期待し
ます。<code>batch_sizes</code>と<code>sequence_lengths</code>の2つの<code>リスト</code>引数は
モデルのベンチマーク対象となる<code>input_ids</code>のサイズを定義します。
ベンチマーク引数データクラスを介して設定できる他の多くのパラメータがあります。これらの詳細については、直接ファイル
<code>src/transformers/benchmark/benchmark_args_utils.py</code>、
<code>src/transformers/benchmark/benchmark_args.py</code>（PyTorch用）、および<code>src/transformers/benchmark/benchmark_args_tf.py</code>（Tensorflow用）
を参照するか、次のシェルコマンドをルートから実行すると、PyTorchとTensorflowのそれぞれに対して設定可能なすべてのパラメータの記述的なリストが表示されます。`,rs,J,ts,F,Cs=`デフォルトでは、<em>推論時間</em> と <em>必要なメモリ</em> がベンチマークされます。
上記の例の出力では、最初の2つのセクションが <em>推論時間</em> と <em>推論メモリ</em>
に対応する結果を示しています。さらに、計算環境に関するすべての関連情報、
例えば GPU タイプ、システム、ライブラリのバージョンなどが、<em>ENVIRONMENT INFORMATION</em> の下に表示されます。この情報は、<code>PyTorchBenchmarkArguments</code>
および <code>TensorFlowBenchmarkArguments</code> に引数 <code>save_to_csv=True</code>
を追加することで、オプションで <em>.csv</em> ファイルに保存することができます。この場合、各セクションは別々の <em>.csv</em> ファイルに保存されます。<em>.csv</em>
ファイルへのパスは、データクラスの引数を使用してオプションで定義できます。`,ps,z,Ns="モデル識別子、例えば <code>google-bert/bert-base-uncased</code> を使用して事前学習済みモデルをベンチマークする代わりに、利用可能な任意のモデルクラスの任意の設定をベンチマークすることもできます。この場合、ベンチマーク引数と共に設定の <code>list</code> を挿入する必要があります。",ms,C,cs,x,Bs="カスタマイズされたBertModelクラスの構成に対する推論時間と必要なメモリのベンチマーク",hs,S,Zs="この機能は、モデルをトレーニングする際にどの構成を選択すべきかを決定する際に特に役立つことがあります。",us,X,bs,I,vs="このセクションでは、モデルをベンチマークする際に注意すべきいくつかのベストプラクティスをリストアップしています。",os,V,Es=`<li>現在、単一デバイスのベンチマークしかサポートされていません。GPUでベンチマークを実行する場合、コードを実行するデバイスをユーザーが指定することを推奨します。
これはシェルで<code>CUDA_VISIBLE_DEVICES</code>環境変数を設定することで行えます。例：<code>export CUDA_VISIBLE_DEVICES=0</code>を実行してからコードを実行します。</li> <li><code>no_multi_processing</code>オプションは、テストおよびデバッグ用にのみ<code>True</code>に設定すべきです。正確なメモリ計測を確保するために、各メモリベンチマークを別々のプロセスで実行することをお勧めします。これにより、<code>no_multi_processing</code>が<code>True</code>に設定されます。</li> <li>モデルのベンチマーク結果を共有する際には、常に環境情報を記述するべきです。異なるGPUデバイス、ライブラリバージョンなどでベンチマーク結果が大きく異なる可能性があるため、ベンチマーク結果単体ではコミュニティにとってあまり有用ではありません。</li>`,js,G,is,Y,Qs="以前、すべての利用可能なコアモデル（当時10モデル）に対して、多くの異なる設定で推論時間のベンチマークが行われました：PyTorchを使用し、TorchScriptの有無、TensorFlowを使用し、XLAの有無などです。これらのテストはすべてCPUで行われました（TensorFlow XLAを除く）。",gs,L,Ws='このアプローチの詳細については、<a href="https://medium.com/huggingface/benchmarking-transformers-pytorch-and-tensorflow-e2917fb891c2" rel="nofollow">次のブログポスト</a>に詳しく説明されており、結果は<a href="https://docs.google.com/spreadsheets/d/1sryqufw2D0XlUH4sq3e9Wnxu5EAQkaohzrJbd5HdQ_w/edit?usp=sharing" rel="nofollow">こちら</a>で利用できます。',fs,P,Rs="新しいベンチマークツールを使用すると、コミュニティとベンチマーク結果を共有することがこれまで以上に簡単になります。",ys,H,Fs='<li><a href="https://github.com/huggingface/transformers/tree/main/examples/pytorch/benchmarking/README.md" rel="nofollow">PyTorchベンチマーク結果</a>。</li> <li><a href="https://github.com/huggingface/transformers/tree/main/examples/tensorflow/benchmarking/README.md" rel="nofollow">TensorFlowベンチマーク結果</a>。</li>',$s,q,ds;return c=new _s({props:{title:"Benchmarks",local:"benchmarks",headingTag:"h1"}}),w=new Ys({props:{warning:!0,$$slots:{default:[Ks]},$$scope:{ctx:b}}}),M=new Os({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Mixed",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/main/transformers_doc/ja/benchmarks.ipynb"},{label:"PyTorch",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/main/transformers_doc/ja/pytorch/benchmarks.ipynb"},{label:"TensorFlow",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/main/transformers_doc/ja/tensorflow/benchmarks.ipynb"},{label:"Mixed",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/main/transformers_doc/ja/benchmarks.ipynb"},{label:"PyTorch",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/main/transformers_doc/ja/pytorch/benchmarks.ipynb"},{label:"TensorFlow",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/main/transformers_doc/ja/tensorflow/benchmarks.ipynb"}]}}),E=new _s({props:{title:"How to benchmark 🤗 Transformers models",local:"how-to-benchmark--transformers-models",headingTag:"h2"}}),k=new Ys({props:{$$slots:{default:[sa]},$$scope:{ctx:b}}}),U=new Ms({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[la],pytorch:[na]},$$scope:{ctx:b}}}),J=new Ms({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[ma],pytorch:[ta]},$$scope:{ctx:b}}}),C=new Ms({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[ba],pytorch:[ha]},$$scope:{ctx:b}}}),X=new _s({props:{title:"Benchmark best practices",local:"benchmark-best-practices",headingTag:"h2"}}),G=new _s({props:{title:"Sharing your benchmark",local:"sharing-your-benchmark",headingTag:"h2"}}),{c(){n=$("meta"),e=h(),a=$("p"),t=h(),o(c.$$.fragment),_=h(),o(w.$$.fragment),m=h(),o(M.$$.fragment),D=h(),Z=$("p"),Z.textContent=Ts,O=h(),v=$("p"),v.innerHTML=ws,K=h(),o(E.$$.fragment),ss=h(),Q=$("p"),Q.innerHTML=ks,as=h(),o(k.$$.fragment),ns=h(),W=$("p"),W.innerHTML=Us,es=h(),o(U.$$.fragment),ls=h(),R=$("p"),R.innerHTML=Js,rs=h(),o(J.$$.fragment),ts=h(),F=$("p"),F.innerHTML=Cs,ps=h(),z=$("p"),z.innerHTML=Ns,ms=h(),o(C.$$.fragment),cs=h(),x=$("p"),x.textContent=Bs,hs=h(),S=$("p"),S.textContent=Zs,us=h(),o(X.$$.fragment),bs=h(),I=$("p"),I.textContent=vs,os=h(),V=$("ul"),V.innerHTML=Es,js=h(),o(G.$$.fragment),is=h(),Y=$("p"),Y.textContent=Qs,gs=h(),L=$("p"),L.innerHTML=Ws,fs=h(),P=$("p"),P.textContent=Rs,ys=h(),H=$("ul"),H.innerHTML=Fs,$s=h(),q=$("p"),this.h()},l(s){const l=qs("svelte-u9bgzb",document.head);n=d(l,"META",{name:!0,content:!0}),l.forEach(r),e=u(s),a=d(s,"P",{}),Vs(a).forEach(r),t=u(s),j(c.$$.fragment,s),_=u(s),j(w.$$.fragment,s),m=u(s),j(M.$$.fragment,s),D=u(s),Z=d(s,"P",{"data-svelte-h":!0}),T(Z)!=="svelte-88l8pk"&&(Z.textContent=Ts),O=u(s),v=d(s,"P",{"data-svelte-h":!0}),T(v)!=="svelte-fh9elv"&&(v.innerHTML=ws),K=u(s),j(E.$$.fragment,s),ss=u(s),Q=d(s,"P",{"data-svelte-h":!0}),T(Q)!=="svelte-13heyvu"&&(Q.innerHTML=ks),as=u(s),j(k.$$.fragment,s),ns=u(s),W=d(s,"P",{"data-svelte-h":!0}),T(W)!=="svelte-yazwkg"&&(W.innerHTML=Us),es=u(s),j(U.$$.fragment,s),ls=u(s),R=d(s,"P",{"data-svelte-h":!0}),T(R)!=="svelte-avjjfe"&&(R.innerHTML=Js),rs=u(s),j(J.$$.fragment,s),ts=u(s),F=d(s,"P",{"data-svelte-h":!0}),T(F)!=="svelte-15apes9"&&(F.innerHTML=Cs),ps=u(s),z=d(s,"P",{"data-svelte-h":!0}),T(z)!=="svelte-1o5a6w1"&&(z.innerHTML=Ns),ms=u(s),j(C.$$.fragment,s),cs=u(s),x=d(s,"P",{"data-svelte-h":!0}),T(x)!=="svelte-1xjvi7s"&&(x.textContent=Bs),hs=u(s),S=d(s,"P",{"data-svelte-h":!0}),T(S)!=="svelte-19wa5rt"&&(S.textContent=Zs),us=u(s),j(X.$$.fragment,s),bs=u(s),I=d(s,"P",{"data-svelte-h":!0}),T(I)!=="svelte-mguz8l"&&(I.textContent=vs),os=u(s),V=d(s,"UL",{"data-svelte-h":!0}),T(V)!=="svelte-16nnrpj"&&(V.innerHTML=Es),js=u(s),j(G.$$.fragment,s),is=u(s),Y=d(s,"P",{"data-svelte-h":!0}),T(Y)!=="svelte-hnjc8r"&&(Y.textContent=Qs),gs=u(s),L=d(s,"P",{"data-svelte-h":!0}),T(L)!=="svelte-kio2c8"&&(L.innerHTML=Ws),fs=u(s),P=d(s,"P",{"data-svelte-h":!0}),T(P)!=="svelte-1hmt9mr"&&(P.textContent=Rs),ys=u(s),H=d(s,"UL",{"data-svelte-h":!0}),T(H)!=="svelte-1itkghy"&&(H.innerHTML=Fs),$s=u(s),q=d(s,"P",{}),Vs(q).forEach(r),this.h()},h(){Gs(n,"name","hf:doc:metadata"),Gs(n,"content",ja)},m(s,l){Ds(document.head,n),p(s,e,l),p(s,a,l),p(s,t,l),i(c,s,l),p(s,_,l),i(w,s,l),p(s,m,l),i(M,s,l),p(s,D,l),p(s,Z,l),p(s,O,l),p(s,v,l),p(s,K,l),i(E,s,l),p(s,ss,l),p(s,Q,l),p(s,as,l),i(k,s,l),p(s,ns,l),p(s,W,l),p(s,es,l),i(U,s,l),p(s,ls,l),p(s,R,l),p(s,rs,l),i(J,s,l),p(s,ts,l),p(s,F,l),p(s,ps,l),p(s,z,l),p(s,ms,l),i(C,s,l),p(s,cs,l),p(s,x,l),p(s,hs,l),p(s,S,l),p(s,us,l),i(X,s,l),p(s,bs,l),p(s,I,l),p(s,os,l),p(s,V,l),p(s,js,l),i(G,s,l),p(s,is,l),p(s,Y,l),p(s,gs,l),p(s,L,l),p(s,fs,l),p(s,P,l),p(s,ys,l),p(s,H,l),p(s,$s,l),p(s,q,l),ds=!0},p(s,[l]){const zs={};l&2&&(zs.$$scope={dirty:l,ctx:s}),w.$set(zs);const xs={};l&2&&(xs.$$scope={dirty:l,ctx:s}),k.$set(xs);const Ss={};l&2&&(Ss.$$scope={dirty:l,ctx:s}),U.$set(Ss);const Xs={};l&2&&(Xs.$$scope={dirty:l,ctx:s}),J.$set(Xs);const Is={};l&2&&(Is.$$scope={dirty:l,ctx:s}),C.$set(Is)},i(s){ds||(g(c.$$.fragment,s),g(w.$$.fragment,s),g(M.$$.fragment,s),g(E.$$.fragment,s),g(k.$$.fragment,s),g(U.$$.fragment,s),g(J.$$.fragment,s),g(C.$$.fragment,s),g(X.$$.fragment,s),g(G.$$.fragment,s),ds=!0)},o(s){f(c.$$.fragment,s),f(w.$$.fragment,s),f(M.$$.fragment,s),f(E.$$.fragment,s),f(k.$$.fragment,s),f(U.$$.fragment,s),f(J.$$.fragment,s),f(C.$$.fragment,s),f(X.$$.fragment,s),f(G.$$.fragment,s),ds=!1},d(s){s&&(r(e),r(a),r(t),r(_),r(m),r(D),r(Z),r(O),r(v),r(K),r(ss),r(Q),r(as),r(ns),r(W),r(es),r(ls),r(R),r(rs),r(ts),r(F),r(ps),r(z),r(ms),r(cs),r(x),r(hs),r(S),r(us),r(bs),r(I),r(os),r(V),r(js),r(is),r(Y),r(gs),r(L),r(fs),r(P),r(ys),r(H),r($s),r(q)),r(n),y(c,s),y(w,s),y(M,s),y(E,s),y(k,s),y(U,s),y(J,s),y(C,s),y(X,s),y(G,s)}}}const ja='{"title":"Benchmarks","local":"benchmarks","sections":[{"title":"How to benchmark 🤗 Transformers models","local":"how-to-benchmark--transformers-models","sections":[],"depth":2},{"title":"Benchmark best practices","local":"benchmark-best-practices","sections":[],"depth":2},{"title":"Sharing your benchmark","local":"sharing-your-benchmark","sections":[],"depth":2}],"depth":1}';function ia(b){return Ps(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ta extends Hs{constructor(n){super(),As(this,n,ia,oa,Ls,{})}}export{Ta as component};
