import{s as Vs,o as Gs,n as B}from"../chunks/scheduler.9bc65507.js";import{S as Ls,i as Hs,g as y,s as o,r as b,A as Ys,h as $,f as r,c as h,j as Is,u as i,x as _,k as Ss,y as Ps,a as p,v as j,d as f,t as g,w as d}from"../chunks/index.707bf1b6.js";import{T as Xs}from"../chunks/Tip.c2ecdbf4.js";import{C as N}from"../chunks/CodeBlock.54a9f38d.js";import{D as As}from"../chunks/DocNotebookDropdown.41f65cb5.js";import{F as $s,M as P}from"../chunks/Markdown.fef84341.js";import{H as ys}from"../chunks/Heading.342b1fa6.js";function qs(u){let a,n=`Hugging Face’s Benchmarking tools are deprecated and it is advised to use external Benchmarking libraries to measure the speed
and memory complexity of Transformer models.`;return{c(){a=y("p"),a.textContent=n},l(s){a=$(s,"P",{"data-svelte-h":!0}),_(a)!=="svelte-ef5x4f"&&(a.textContent=n)},m(s,t){p(s,a,t)},p:B,d(s){s&&r(a)}}}function Ds(u){let a,n=`Hereby, <em>inference</em> is defined by a single forward pass, and <em>training</em> is defined by a single forward pass and
backward pass.`;return{c(){a=y("p"),a.innerHTML=n},l(s){a=$(s,"P",{"data-svelte-h":!0}),_(a)!=="svelte-11dcz86"&&(a.innerHTML=n)},m(s,t){p(s,a,t)},p:B,d(s){s&&r(a)}}}function Os(u){let a,n;return a=new N({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFB5VG9yY2hCZW5jaG1hcmslMkMlMjBQeVRvcmNoQmVuY2htYXJrQXJndW1lbnRzJTBBJTBBYXJncyUyMCUzRCUyMFB5VG9yY2hCZW5jaG1hcmtBcmd1bWVudHMobW9kZWxzJTNEJTVCJTIyZ29vZ2xlLWJlcnQlMkZiZXJ0LWJhc2UtdW5jYXNlZCUyMiU1RCUyQyUyMGJhdGNoX3NpemVzJTNEJTVCOCU1RCUyQyUyMHNlcXVlbmNlX2xlbmd0aHMlM0QlNUI4JTJDJTIwMzIlMkMlMjAxMjglMkMlMjA1MTIlNUQpJTBBYmVuY2htYXJrJTIwJTNEJTIwUHlUb3JjaEJlbmNobWFyayhhcmdzKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PyTorchBenchmark, PyTorchBenchmarkArguments

<span class="hljs-meta">&gt;&gt;&gt; </span>args = PyTorchBenchmarkArguments(models=[<span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>], batch_sizes=[<span class="hljs-number">8</span>], sequence_lengths=[<span class="hljs-number">8</span>, <span class="hljs-number">32</span>, <span class="hljs-number">128</span>, <span class="hljs-number">512</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>benchmark = PyTorchBenchmark(args)`,wrap:!1}}),{c(){b(a.$$.fragment)},l(s){i(a.$$.fragment,s)},m(s,t){j(a,s,t),n=!0},p:B,i(s){n||(f(a.$$.fragment,s),n=!0)},o(s){g(a.$$.fragment,s),n=!1},d(s){d(a,s)}}}function Ks(u){let a,n;return a=new P({props:{$$slots:{default:[Os]},$$scope:{ctx:u}}}),{c(){b(a.$$.fragment)},l(s){i(a.$$.fragment,s)},m(s,t){j(a,s,t),n=!0},p(s,t){const m={};t&2&&(m.$$scope={dirty:t,ctx:s}),a.$set(m)},i(s){n||(f(a.$$.fragment,s),n=!0)},o(s){g(a.$$.fragment,s),n=!1},d(s){d(a,s)}}}function se(u){let a,n;return a=new N({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFRlbnNvckZsb3dCZW5jaG1hcmslMkMlMjBUZW5zb3JGbG93QmVuY2htYXJrQXJndW1lbnRzJTBBJTBBYXJncyUyMCUzRCUyMFRlbnNvckZsb3dCZW5jaG1hcmtBcmd1bWVudHMoJTBBJTIwJTIwJTIwJTIwbW9kZWxzJTNEJTVCJTIyZ29vZ2xlLWJlcnQlMkZiZXJ0LWJhc2UtdW5jYXNlZCUyMiU1RCUyQyUyMGJhdGNoX3NpemVzJTNEJTVCOCU1RCUyQyUyMHNlcXVlbmNlX2xlbmd0aHMlM0QlNUI4JTJDJTIwMzIlMkMlMjAxMjglMkMlMjA1MTIlNUQlMEEpJTBBYmVuY2htYXJrJTIwJTNEJTIwVGVuc29yRmxvd0JlbmNobWFyayhhcmdzKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TensorFlowBenchmark, TensorFlowBenchmarkArguments

<span class="hljs-meta">&gt;&gt;&gt; </span>args = TensorFlowBenchmarkArguments(
<span class="hljs-meta">... </span>    models=[<span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>], batch_sizes=[<span class="hljs-number">8</span>], sequence_lengths=[<span class="hljs-number">8</span>, <span class="hljs-number">32</span>, <span class="hljs-number">128</span>, <span class="hljs-number">512</span>]
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>benchmark = TensorFlowBenchmark(args)`,wrap:!1}}),{c(){b(a.$$.fragment)},l(s){i(a.$$.fragment,s)},m(s,t){j(a,s,t),n=!0},p:B,i(s){n||(f(a.$$.fragment,s),n=!0)},o(s){g(a.$$.fragment,s),n=!1},d(s){d(a,s)}}}function ee(u){let a,n;return a=new P({props:{$$slots:{default:[se]},$$scope:{ctx:u}}}),{c(){b(a.$$.fragment)},l(s){i(a.$$.fragment,s)},m(s,t){j(a,s,t),n=!0},p(s,t){const m={};t&2&&(m.$$scope={dirty:t,ctx:s}),a.$set(m)},i(s){n||(f(a.$$.fragment,s),n=!0)},o(s){g(a.$$.fragment,s),n=!1},d(s){d(a,s)}}}function ae(u){let a,n,s,t="An instantiated benchmark object can then simply be run by calling <code>benchmark.run()</code>.",m,T,M;return a=new N({props:{code:"cHl0aG9uJTIwZXhhbXBsZXMlMkZweXRvcmNoJTJGYmVuY2htYXJraW5nJTJGcnVuX2JlbmNobWFyay5weSUyMC0taGVscA==",highlighted:'python examples/pytorch/benchmarking/run_benchmark.py --<span class="hljs-built_in">help</span>',wrap:!1}}),T=new N({props:{code:"cmVzdWx0cyUyMCUzRCUyMGJlbmNobWFyay5ydW4oKSUwQXByaW50KHJlc3VsdHMpJTBBJTBBJTBB",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>results = benchmark.run()
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
- use_tpu: <span class="hljs-literal">False</span>`,wrap:!1}}),{c(){b(a.$$.fragment),n=o(),s=y("p"),s.innerHTML=t,m=o(),b(T.$$.fragment)},l(c){i(a.$$.fragment,c),n=h(c),s=$(c,"P",{"data-svelte-h":!0}),_(s)!=="svelte-ersiz3"&&(s.innerHTML=t),m=h(c),i(T.$$.fragment,c)},m(c,w){j(a,c,w),p(c,n,w),p(c,s,w),p(c,m,w),j(T,c,w),M=!0},p:B,i(c){M||(f(a.$$.fragment,c),f(T.$$.fragment,c),M=!0)},o(c){g(a.$$.fragment,c),g(T.$$.fragment,c),M=!1},d(c){c&&(r(n),r(s),r(m)),d(a,c),d(T,c)}}}function ne(u){let a,n;return a=new P({props:{$$slots:{default:[ae]},$$scope:{ctx:u}}}),{c(){b(a.$$.fragment)},l(s){i(a.$$.fragment,s)},m(s,t){j(a,s,t),n=!0},p(s,t){const m={};t&2&&(m.$$scope={dirty:t,ctx:s}),a.$set(m)},i(s){n||(f(a.$$.fragment,s),n=!0)},o(s){g(a.$$.fragment,s),n=!1},d(s){d(a,s)}}}function le(u){let a,n,s,t="An instantiated benchmark object can then simply be run by calling <code>benchmark.run()</code>.",m,T,M;return a=new N({props:{code:"cHl0aG9uJTIwZXhhbXBsZXMlMkZ0ZW5zb3JmbG93JTJGYmVuY2htYXJraW5nJTJGcnVuX2JlbmNobWFya190Zi5weSUyMC0taGVscA==",highlighted:'python examples/tensorflow/benchmarking/run_benchmark_tf.py --<span class="hljs-built_in">help</span>',wrap:!1}}),T=new N({props:{code:"cmVzdWx0cyUyMCUzRCUyMGJlbmNobWFyay5ydW4oKSUwQXByaW50KHJlc3VsdHMpJTBBcmVzdWx0cyUyMCUzRCUyMGJlbmNobWFyay5ydW4oKSUwQXByaW50KHJlc3VsdHMpJTBBJTBBJTBB",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>results = benchmark.run()
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
- use_tpu: <span class="hljs-literal">False</span>`,wrap:!1}}),{c(){b(a.$$.fragment),n=o(),s=y("p"),s.innerHTML=t,m=o(),b(T.$$.fragment)},l(c){i(a.$$.fragment,c),n=h(c),s=$(c,"P",{"data-svelte-h":!0}),_(s)!=="svelte-ersiz3"&&(s.innerHTML=t),m=h(c),i(T.$$.fragment,c)},m(c,w){j(a,c,w),p(c,n,w),p(c,s,w),p(c,m,w),j(T,c,w),M=!0},p:B,i(c){M||(f(a.$$.fragment,c),f(T.$$.fragment,c),M=!0)},o(c){g(a.$$.fragment,c),g(T.$$.fragment,c),M=!1},d(c){c&&(r(n),r(s),r(m)),d(a,c),d(T,c)}}}function re(u){let a,n;return a=new P({props:{$$slots:{default:[le]},$$scope:{ctx:u}}}),{c(){b(a.$$.fragment)},l(s){i(a.$$.fragment,s)},m(s,t){j(a,s,t),n=!0},p(s,t){const m={};t&2&&(m.$$scope={dirty:t,ctx:s}),a.$set(m)},i(s){n||(f(a.$$.fragment,s),n=!0)},o(s){g(a.$$.fragment,s),n=!1},d(s){d(a,s)}}}function te(u){let a,n;return a=new N({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFB5VG9yY2hCZW5jaG1hcmslMkMlMjBQeVRvcmNoQmVuY2htYXJrQXJndW1lbnRzJTJDJTIwQmVydENvbmZpZyUwQSUwQWFyZ3MlMjAlM0QlMjBQeVRvcmNoQmVuY2htYXJrQXJndW1lbnRzKCUwQSUyMCUyMCUyMCUyMG1vZGVscyUzRCU1QiUyMmJlcnQtYmFzZSUyMiUyQyUyMCUyMmJlcnQtMzg0LWhpZCUyMiUyQyUyMCUyMmJlcnQtNi1sYXklMjIlNUQlMkMlMjBiYXRjaF9zaXplcyUzRCU1QjglNUQlMkMlMjBzZXF1ZW5jZV9sZW5ndGhzJTNEJTVCOCUyQyUyMDMyJTJDJTIwMTI4JTJDJTIwNTEyJTVEJTBBKSUwQWNvbmZpZ19iYXNlJTIwJTNEJTIwQmVydENvbmZpZygpJTBBY29uZmlnXzM4NF9oaWQlMjAlM0QlMjBCZXJ0Q29uZmlnKGhpZGRlbl9zaXplJTNEMzg0KSUwQWNvbmZpZ182X2xheSUyMCUzRCUyMEJlcnRDb25maWcobnVtX2hpZGRlbl9sYXllcnMlM0Q2KSUwQSUwQWJlbmNobWFyayUyMCUzRCUyMFB5VG9yY2hCZW5jaG1hcmsoYXJncyUyQyUyMGNvbmZpZ3MlM0QlNUJjb25maWdfYmFzZSUyQyUyMGNvbmZpZ18zODRfaGlkJTJDJTIwY29uZmlnXzZfbGF5JTVEKSUwQWJlbmNobWFyay5ydW4oKSUwQSUwQSUwQQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PyTorchBenchmark, PyTorchBenchmarkArguments, BertConfig

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
- use_tpu: <span class="hljs-literal">False</span>`,wrap:!1}}),{c(){b(a.$$.fragment)},l(s){i(a.$$.fragment,s)},m(s,t){j(a,s,t),n=!0},p:B,i(s){n||(f(a.$$.fragment,s),n=!0)},o(s){g(a.$$.fragment,s),n=!1},d(s){d(a,s)}}}function pe(u){let a,n;return a=new P({props:{$$slots:{default:[te]},$$scope:{ctx:u}}}),{c(){b(a.$$.fragment)},l(s){i(a.$$.fragment,s)},m(s,t){j(a,s,t),n=!0},p(s,t){const m={};t&2&&(m.$$scope={dirty:t,ctx:s}),a.$set(m)},i(s){n||(f(a.$$.fragment,s),n=!0)},o(s){g(a.$$.fragment,s),n=!1},d(s){d(a,s)}}}function ce(u){let a,n;return a=new N({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFRlbnNvckZsb3dCZW5jaG1hcmslMkMlMjBUZW5zb3JGbG93QmVuY2htYXJrQXJndW1lbnRzJTJDJTIwQmVydENvbmZpZyUwQSUwQWFyZ3MlMjAlM0QlMjBUZW5zb3JGbG93QmVuY2htYXJrQXJndW1lbnRzKCUwQSUyMCUyMCUyMCUyMG1vZGVscyUzRCU1QiUyMmJlcnQtYmFzZSUyMiUyQyUyMCUyMmJlcnQtMzg0LWhpZCUyMiUyQyUyMCUyMmJlcnQtNi1sYXklMjIlNUQlMkMlMjBiYXRjaF9zaXplcyUzRCU1QjglNUQlMkMlMjBzZXF1ZW5jZV9sZW5ndGhzJTNEJTVCOCUyQyUyMDMyJTJDJTIwMTI4JTJDJTIwNTEyJTVEJTBBKSUwQWNvbmZpZ19iYXNlJTIwJTNEJTIwQmVydENvbmZpZygpJTBBY29uZmlnXzM4NF9oaWQlMjAlM0QlMjBCZXJ0Q29uZmlnKGhpZGRlbl9zaXplJTNEMzg0KSUwQWNvbmZpZ182X2xheSUyMCUzRCUyMEJlcnRDb25maWcobnVtX2hpZGRlbl9sYXllcnMlM0Q2KSUwQSUwQWJlbmNobWFyayUyMCUzRCUyMFRlbnNvckZsb3dCZW5jaG1hcmsoYXJncyUyQyUyMGNvbmZpZ3MlM0QlNUJjb25maWdfYmFzZSUyQyUyMGNvbmZpZ18zODRfaGlkJTJDJTIwY29uZmlnXzZfbGF5JTVEKSUwQWJlbmNobWFyay5ydW4oKSUwQSUwQSUwQQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TensorFlowBenchmark, TensorFlowBenchmarkArguments, BertConfig

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
- use_tpu: <span class="hljs-literal">False</span>`,wrap:!1}}),{c(){b(a.$$.fragment)},l(s){i(a.$$.fragment,s)},m(s,t){j(a,s,t),n=!0},p:B,i(s){n||(f(a.$$.fragment,s),n=!0)},o(s){g(a.$$.fragment,s),n=!1},d(s){d(a,s)}}}function me(u){let a,n;return a=new P({props:{$$slots:{default:[ce]},$$scope:{ctx:u}}}),{c(){b(a.$$.fragment)},l(s){i(a.$$.fragment,s)},m(s,t){j(a,s,t),n=!0},p(s,t){const m={};t&2&&(m.$$scope={dirty:t,ctx:s}),a.$set(m)},i(s){n||(f(a.$$.fragment,s),n=!0)},o(s){g(a.$$.fragment,s),n=!1},d(s){d(a,s)}}}function oe(u){let a,n,s,t,m,T,M,c,w,q,C,Ts="Let’s take a look at how 🤗 Transformers models can be benchmarked, best practices, and already available benchmarks.",D,Z,ws='A notebook explaining in more detail how to benchmark 🤗 Transformers models can be found <a href="https://github.com/huggingface/notebooks/tree/main/examples/benchmark.ipynb" rel="nofollow">here</a>.',O,E,K,Q,Ms="The classes <code>PyTorchBenchmark</code> and <code>TensorFlowBenchmark</code> allow to flexibly benchmark 🤗 Transformers models. The benchmark classes allow us to measure the <em>peak memory usage</em> and <em>required time</em> for both <em>inference</em> and <em>training</em>.",ss,k,es,z,_s=`The benchmark classes <code>PyTorchBenchmark</code> and <code>TensorFlowBenchmark</code> expect an object of type <code>PyTorchBenchmarkArguments</code> and
<code>TensorFlowBenchmarkArguments</code>, respectively, for instantiation. <code>PyTorchBenchmarkArguments</code> and <code>TensorFlowBenchmarkArguments</code> are data classes and contain all relevant configurations for their corresponding benchmark class. In the following example, it is shown how a BERT model of type <em>bert-base-cased</em> can be benchmarked.`,as,U,ns,R,ks=`Here, three arguments are given to the benchmark argument data classes, namely <code>models</code>, <code>batch_sizes</code>, and
<code>sequence_lengths</code>. The argument <code>models</code> is required and expects a <code>list</code> of model identifiers from the
<a href="https://huggingface.co/models" rel="nofollow">model hub</a> The <code>list</code> arguments <code>batch_sizes</code> and <code>sequence_lengths</code> define
the size of the <code>input_ids</code> on which the model is benchmarked. There are many more parameters that can be configured
via the benchmark argument data classes. For more detail on these one can either directly consult the files
<code>src/transformers/benchmark/benchmark_args_utils.py</code>, <code>src/transformers/benchmark/benchmark_args.py</code> (for PyTorch)
and <code>src/transformers/benchmark/benchmark_args_tf.py</code> (for Tensorflow). Alternatively, running the following shell
commands from root will print out a descriptive list of all configurable parameters for PyTorch and Tensorflow
respectively.`,ls,J,rs,W,Us=`By default, the <em>time</em> and the <em>required memory</em> for <em>inference</em> are benchmarked. In the example output above the first
two sections show the result corresponding to <em>inference time</em> and <em>inference memory</em>. In addition, all relevant
information about the computing environment, <em>e.g.</em> the GPU type, the system, the library versions, etc… are printed
out in the third section under <em>ENVIRONMENT INFORMATION</em>. This information can optionally be saved in a <em>.csv</em> file
when adding the argument <code>save_to_csv=True</code> to <code>PyTorchBenchmarkArguments</code> and
<code>TensorFlowBenchmarkArguments</code> respectively. In this case, every section is saved in a separate
<em>.csv</em> file. The path to each <em>.csv</em> file can optionally be defined via the argument data classes.`,ts,F,Js=`Instead of benchmarking pre-trained models via their model identifier, <em>e.g.</em> <code>google-bert/bert-base-uncased</code>, the user can
alternatively benchmark an arbitrary configuration of any available model class. In this case, a <code>list</code> of
configurations must be inserted with the benchmark args as follows.`,ps,v,cs,x,vs=`Again, <em>inference time</em> and <em>required memory</em> for <em>inference</em> are measured, but this time for customized configurations
of the <code>BertModel</code> class. This feature can especially be helpful when deciding for which configuration the model
should be trained.`,ms,I,os,S,Ns="This section lists a couple of best practices one should be aware of when benchmarking a model.",hs,X,Bs=`<li>Currently, only single device benchmarking is supported. When benchmarking on GPU, it is recommended that the user
specifies on which device the code should be run by setting the <code>CUDA_VISIBLE_DEVICES</code> environment variable in the
shell, <em>e.g.</em> <code>export CUDA_VISIBLE_DEVICES=0</code> before running the code.</li> <li>The option <code>no_multi_processing</code> should only be set to <code>True</code> for testing and debugging. To ensure accurate
memory measurement it is recommended to run each memory benchmark in a separate process by making sure
<code>no_multi_processing</code> is set to <code>True</code>.</li> <li>One should always state the environment information when sharing the results of a model benchmark. Results can vary
heavily between different GPU devices, library versions, etc., so that benchmark results on their own are not very
useful for the community.</li>`,us,V,bs,G,Cs=`Previously all available core models (10 at the time) have been benchmarked for <em>inference time</em>, across many different
settings: using PyTorch, with and without TorchScript, using TensorFlow, with and without XLA. All of those tests were
done across CPUs (except for TensorFlow XLA) and GPUs.`,is,L,Zs=`The approach is detailed in the <a href="https://medium.com/huggingface/benchmarking-transformers-pytorch-and-tensorflow-e2917fb891c2" rel="nofollow">following blogpost</a> and the results are
available <a href="https://docs.google.com/spreadsheets/d/1sryqufw2D0XlUH4sq3e9Wnxu5EAQkaohzrJbd5HdQ_w/edit?usp=sharing" rel="nofollow">here</a>.`,js,H,Es="With the new <em>benchmark</em> tools, it is easier than ever to share your benchmark results with the community",fs,Y,Qs='<li><a href="https://github.com/huggingface/transformers/tree/main/examples/pytorch/benchmarking/README.md" rel="nofollow">PyTorch Benchmarking Results</a>.</li> <li><a href="https://github.com/huggingface/transformers/tree/main/examples/tensorflow/benchmarking/README.md" rel="nofollow">TensorFlow Benchmarking Results</a>.</li>',gs,A,ds;return m=new ys({props:{title:"Benchmarks",local:"benchmarks",headingTag:"h1"}}),M=new Xs({props:{warning:!0,$$slots:{default:[qs]},$$scope:{ctx:u}}}),w=new As({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Mixed",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/main/transformers_doc/en/benchmarks.ipynb"},{label:"PyTorch",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/main/transformers_doc/en/pytorch/benchmarks.ipynb"},{label:"TensorFlow",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/main/transformers_doc/en/tensorflow/benchmarks.ipynb"},{label:"Mixed",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/main/transformers_doc/en/benchmarks.ipynb"},{label:"PyTorch",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/main/transformers_doc/en/pytorch/benchmarks.ipynb"},{label:"TensorFlow",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/main/transformers_doc/en/tensorflow/benchmarks.ipynb"}]}}),E=new ys({props:{title:"How to benchmark 🤗 Transformers models",local:"how-to-benchmark--transformers-models",headingTag:"h2"}}),k=new Xs({props:{$$slots:{default:[Ds]},$$scope:{ctx:u}}}),U=new $s({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[ee],pytorch:[Ks]},$$scope:{ctx:u}}}),J=new $s({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[re],pytorch:[ne]},$$scope:{ctx:u}}}),v=new $s({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[me],pytorch:[pe]},$$scope:{ctx:u}}}),I=new ys({props:{title:"Benchmark best practices",local:"benchmark-best-practices",headingTag:"h2"}}),V=new ys({props:{title:"Sharing your benchmark",local:"sharing-your-benchmark",headingTag:"h2"}}),{c(){a=y("meta"),n=o(),s=y("p"),t=o(),b(m.$$.fragment),T=o(),b(M.$$.fragment),c=o(),b(w.$$.fragment),q=o(),C=y("p"),C.textContent=Ts,D=o(),Z=y("p"),Z.innerHTML=ws,O=o(),b(E.$$.fragment),K=o(),Q=y("p"),Q.innerHTML=Ms,ss=o(),b(k.$$.fragment),es=o(),z=y("p"),z.innerHTML=_s,as=o(),b(U.$$.fragment),ns=o(),R=y("p"),R.innerHTML=ks,ls=o(),b(J.$$.fragment),rs=o(),W=y("p"),W.innerHTML=Us,ts=o(),F=y("p"),F.innerHTML=Js,ps=o(),b(v.$$.fragment),cs=o(),x=y("p"),x.innerHTML=vs,ms=o(),b(I.$$.fragment),os=o(),S=y("p"),S.textContent=Ns,hs=o(),X=y("ul"),X.innerHTML=Bs,us=o(),b(V.$$.fragment),bs=o(),G=y("p"),G.innerHTML=Cs,is=o(),L=y("p"),L.innerHTML=Zs,js=o(),H=y("p"),H.innerHTML=Es,fs=o(),Y=y("ul"),Y.innerHTML=Qs,gs=o(),A=y("p"),this.h()},l(e){const l=Ys("svelte-u9bgzb",document.head);a=$(l,"META",{name:!0,content:!0}),l.forEach(r),n=h(e),s=$(e,"P",{}),Is(s).forEach(r),t=h(e),i(m.$$.fragment,e),T=h(e),i(M.$$.fragment,e),c=h(e),i(w.$$.fragment,e),q=h(e),C=$(e,"P",{"data-svelte-h":!0}),_(C)!=="svelte-13lcah"&&(C.textContent=Ts),D=h(e),Z=$(e,"P",{"data-svelte-h":!0}),_(Z)!=="svelte-r2a0pt"&&(Z.innerHTML=ws),O=h(e),i(E.$$.fragment,e),K=h(e),Q=$(e,"P",{"data-svelte-h":!0}),_(Q)!=="svelte-1flsss8"&&(Q.innerHTML=Ms),ss=h(e),i(k.$$.fragment,e),es=h(e),z=$(e,"P",{"data-svelte-h":!0}),_(z)!=="svelte-1ehry66"&&(z.innerHTML=_s),as=h(e),i(U.$$.fragment,e),ns=h(e),R=$(e,"P",{"data-svelte-h":!0}),_(R)!=="svelte-1eubt8z"&&(R.innerHTML=ks),ls=h(e),i(J.$$.fragment,e),rs=h(e),W=$(e,"P",{"data-svelte-h":!0}),_(W)!=="svelte-44z1ex"&&(W.innerHTML=Us),ts=h(e),F=$(e,"P",{"data-svelte-h":!0}),_(F)!=="svelte-1r6j6dx"&&(F.innerHTML=Js),ps=h(e),i(v.$$.fragment,e),cs=h(e),x=$(e,"P",{"data-svelte-h":!0}),_(x)!=="svelte-ztfcrc"&&(x.innerHTML=vs),ms=h(e),i(I.$$.fragment,e),os=h(e),S=$(e,"P",{"data-svelte-h":!0}),_(S)!=="svelte-c3uya"&&(S.textContent=Ns),hs=h(e),X=$(e,"UL",{"data-svelte-h":!0}),_(X)!=="svelte-119jn1b"&&(X.innerHTML=Bs),us=h(e),i(V.$$.fragment,e),bs=h(e),G=$(e,"P",{"data-svelte-h":!0}),_(G)!=="svelte-wholqk"&&(G.innerHTML=Cs),is=h(e),L=$(e,"P",{"data-svelte-h":!0}),_(L)!=="svelte-mk4cui"&&(L.innerHTML=Zs),js=h(e),H=$(e,"P",{"data-svelte-h":!0}),_(H)!=="svelte-15vqju9"&&(H.innerHTML=Es),fs=h(e),Y=$(e,"UL",{"data-svelte-h":!0}),_(Y)!=="svelte-1q9j466"&&(Y.innerHTML=Qs),gs=h(e),A=$(e,"P",{}),Is(A).forEach(r),this.h()},h(){Ss(a,"name","hf:doc:metadata"),Ss(a,"content",he)},m(e,l){Ps(document.head,a),p(e,n,l),p(e,s,l),p(e,t,l),j(m,e,l),p(e,T,l),j(M,e,l),p(e,c,l),j(w,e,l),p(e,q,l),p(e,C,l),p(e,D,l),p(e,Z,l),p(e,O,l),j(E,e,l),p(e,K,l),p(e,Q,l),p(e,ss,l),j(k,e,l),p(e,es,l),p(e,z,l),p(e,as,l),j(U,e,l),p(e,ns,l),p(e,R,l),p(e,ls,l),j(J,e,l),p(e,rs,l),p(e,W,l),p(e,ts,l),p(e,F,l),p(e,ps,l),j(v,e,l),p(e,cs,l),p(e,x,l),p(e,ms,l),j(I,e,l),p(e,os,l),p(e,S,l),p(e,hs,l),p(e,X,l),p(e,us,l),j(V,e,l),p(e,bs,l),p(e,G,l),p(e,is,l),p(e,L,l),p(e,js,l),p(e,H,l),p(e,fs,l),p(e,Y,l),p(e,gs,l),p(e,A,l),ds=!0},p(e,[l]){const zs={};l&2&&(zs.$$scope={dirty:l,ctx:e}),M.$set(zs);const Rs={};l&2&&(Rs.$$scope={dirty:l,ctx:e}),k.$set(Rs);const Ws={};l&2&&(Ws.$$scope={dirty:l,ctx:e}),U.$set(Ws);const Fs={};l&2&&(Fs.$$scope={dirty:l,ctx:e}),J.$set(Fs);const xs={};l&2&&(xs.$$scope={dirty:l,ctx:e}),v.$set(xs)},i(e){ds||(f(m.$$.fragment,e),f(M.$$.fragment,e),f(w.$$.fragment,e),f(E.$$.fragment,e),f(k.$$.fragment,e),f(U.$$.fragment,e),f(J.$$.fragment,e),f(v.$$.fragment,e),f(I.$$.fragment,e),f(V.$$.fragment,e),ds=!0)},o(e){g(m.$$.fragment,e),g(M.$$.fragment,e),g(w.$$.fragment,e),g(E.$$.fragment,e),g(k.$$.fragment,e),g(U.$$.fragment,e),g(J.$$.fragment,e),g(v.$$.fragment,e),g(I.$$.fragment,e),g(V.$$.fragment,e),ds=!1},d(e){e&&(r(n),r(s),r(t),r(T),r(c),r(q),r(C),r(D),r(Z),r(O),r(K),r(Q),r(ss),r(es),r(z),r(as),r(ns),r(R),r(ls),r(rs),r(W),r(ts),r(F),r(ps),r(cs),r(x),r(ms),r(os),r(S),r(hs),r(X),r(us),r(bs),r(G),r(is),r(L),r(js),r(H),r(fs),r(Y),r(gs),r(A)),r(a),d(m,e),d(M,e),d(w,e),d(E,e),d(k,e),d(U,e),d(J,e),d(v,e),d(I,e),d(V,e)}}}const he='{"title":"Benchmarks","local":"benchmarks","sections":[{"title":"How to benchmark 🤗 Transformers models","local":"how-to-benchmark--transformers-models","sections":[],"depth":2},{"title":"Benchmark best practices","local":"benchmark-best-practices","sections":[],"depth":2},{"title":"Sharing your benchmark","local":"sharing-your-benchmark","sections":[],"depth":2}],"depth":1}';function ue(u){return Gs(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class $e extends Ls{constructor(a){super(),Hs(this,a,ue,oe,Vs,{})}}export{$e as component};
