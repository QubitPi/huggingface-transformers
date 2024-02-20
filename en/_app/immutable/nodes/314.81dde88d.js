import{s as pl,o as ml,n as wl}from"../chunks/scheduler.9bc65507.js";import{S as Tl,i as yl,g as i,s as n,r as p,A as Jl,h as M,f as l,c as a,j as ol,u as m,x as o,k as rl,y as Ul,a as s,v as w,d as T,t as y,w as J}from"../chunks/index.707bf1b6.js";import{T as ul}from"../chunks/Tip.c2ecdbf4.js";import{C as u}from"../chunks/CodeBlock.54a9f38d.js";import{H as ht}from"../chunks/Heading.342b1fa6.js";function dl(Ct){let r,c=`If you plan to run multiple experiments, in order to properly clear the memory between experiments, restart the Python
kernel between experiments.`;return{c(){r=i("p"),r.textContent=c},l(U){r=M(U,"P",{"data-svelte-h":!0}),o(r)!=="svelte-1v4397i"&&(r.textContent=c)},m(U,ct){s(U,r,ct)},p:wl,d(U){U&&l(r)}}}function cl(Ct){let r,c,U,ct,j,It,h,fe=`To understand performance optimization techniques that one can apply to improve efficiency of model training
speed and memory utilization, it’s helpful to get familiar with how GPU is utilized during training, and how compute
intensity varies depending on an operation performed.`,ft,C,ge=`Let’s start by exploring a motivating example of GPU utilization and the training run of a model. For the demonstration,
we’ll need to install a few libraries:`,gt,I,At,f,Ae=`The <code>nvidia-ml-py3</code> library allows us to monitor the memory usage of the models from within Python. You might be familiar
with the <code>nvidia-smi</code> command in the terminal - this library allows to access the same information in Python directly.`,St,g,Se=`Then, we create some dummy data: random token IDs between 100 and 30000 and binary labels for a classifier.
In total, we get 512 sequences each with length 512 and store them in a <a href="https://huggingface.co/docs/datasets/main/en/package_reference/main_classes#datasets.Dataset" rel="nofollow">Dataset</a> with PyTorch format.`,bt,A,Lt,S,be='To print summary statistics for the GPU utilization and the training run with the <a href="/docs/transformers/main/en/main_classes/trainer#transformers.Trainer">Trainer</a> we define two helper functions:',zt,b,Qt,L,Le="Let’s verify that we start with a free GPU memory:",vt,z,Rt,Q,ze=`That looks good: the GPU memory is not occupied as we would expect before we load any models. If that’s not the case on
your machine make sure to stop all processes that are using GPU memory. However, not all free GPU memory can be used by
the user. When a model is loaded to the GPU the kernels are also loaded, which can take up 1-2GB of memory. To see how
much it is we load a tiny tensor into the GPU which triggers the kernels to be loaded as well.`,$t,v,xt,R,Qe="We see that the kernels alone take up 1.3GB of GPU memory. Now let’s see how much space the model uses.",Gt,$,kt,x,ve=`First, we load the <code>google-bert/bert-large-uncased</code> model. We load the model weights directly to the GPU so that we can check
how much space just the weights use.`,_t,G,Bt,k,Re=`We can see that the model weights alone take up 1.3 GB of GPU memory. The exact number depends on the specific
GPU you are using. Note that on newer GPUs a model can sometimes take up more space since the weights are loaded in an
optimized fashion that speeds up the usage of the model. Now we can also quickly check if we get the same result
as with <code>nvidia-smi</code> CLI:`,Et,_,Wt,B,Vt,E,$e=`We get the same number as before and you can also see that we are using a V100 GPU with 16GB of memory. So now we can
start training the model and see how the GPU memory consumption changes. First, we set up a few standard training
arguments:`,Zt,W,Pt,d,Ht,V,Nt,Z,xe='Let’s use the <a href="/docs/transformers/main/en/main_classes/trainer#transformers.Trainer">Trainer</a> and train the model without using any GPU performance optimization techniques and a batch size of 4:',Ft,P,Xt,H,Dt,N,Ge=`We see that already a relatively small batch size almost fills up our GPU’s entire memory. However, a larger batch size
can often result in faster model convergence or better end performance. So ideally we want to tune the batch size to our
model’s needs and not to the GPU limitations. What’s interesting is that we use much more memory than the size of the model.
To understand a bit better why this is the case let’s have a look at a model’s operations and memory needs.`,qt,F,Yt,X,ke="Transformers architecture includes 3 main groups of operations grouped below by compute-intensity.",Kt,D,_e="<li><p><strong>Tensor Contractions</strong></p> <p>Linear layers and components of Multi-Head Attention all do batched <strong>matrix-matrix multiplications</strong>. These operations are the most compute-intensive part of training a transformer.</p></li> <li><p><strong>Statistical Normalizations</strong></p> <p>Softmax and layer normalization are less compute-intensive than tensor contractions, and involve one or more <strong>reduction operations</strong>, the result of which is then applied via a map.</p></li> <li><p><strong>Element-wise Operators</strong></p> <p>These are the remaining operators: <strong>biases, dropout, activations, and residual connections</strong>. These are the least compute-intensive operations.</p></li>",Ot,q,Be="This knowledge can be helpful to know when analyzing performance bottlenecks.",te,Y,Ee='This summary is derived from <a href="https://arxiv.org/abs/2007.00072" rel="nofollow">Data Movement Is All You Need: A Case Study on Optimizing Transformers 2020</a>',ee,K,le,O,We=`We’ve seen that training the model uses much more memory than just putting the model on the GPU. This is because there
are many components during training that use GPU memory. The components on GPU memory are the following:`,se,tt,Ve="<li>model weights</li> <li>optimizer states</li> <li>gradients</li> <li>forward activations saved for gradient computation</li> <li>temporary buffers</li> <li>functionality-specific memory</li>",ne,et,Ze=`A typical model trained in mixed precision with AdamW requires 18 bytes per model parameter plus activation memory. For
inference there are no optimizer states and gradients, so we can subtract those. And thus we end up with 6 bytes per
model parameter for mixed precision inference, plus activation memory.`,ae,lt,Pe="Let’s look at the details.",ie,st,He="<strong>Model Weights:</strong>",Me,nt,Ne="<li>4 bytes * number of parameters for fp32 training</li> <li>6 bytes * number of parameters for mixed precision training (maintains a model in fp32 and one in fp16 in memory)</li>",oe,at,Fe="<strong>Optimizer States:</strong>",re,it,Xe='<li>8 bytes * number of parameters for normal AdamW (maintains 2 states)</li> <li>2 bytes * number of parameters for 8-bit AdamW optimizers like <a href="https://github.com/TimDettmers/bitsandbytes" rel="nofollow">bitsandbytes</a></li> <li>4 bytes * number of parameters for optimizers like SGD with momentum (maintains only 1 state)</li>',pe,Mt,De="<strong>Gradients</strong>",me,ot,qe="<li>4 bytes * number of parameters for either fp32 or mixed precision training (gradients are always kept in fp32)</li>",we,rt,Ye="<strong>Forward Activations</strong>",Te,pt,Ke="<li>size depends on many factors, the key ones being sequence length, hidden size and batch size.</li>",ye,mt,Oe=`There are the input and output that are being passed and returned by the forward and the backward functions and the
forward activations saved for gradient computation.`,Je,wt,tl="<strong>Temporary Memory</strong>",Ue,Tt,el=`Additionally, there are all kinds of temporary variables which get released once the calculation is done, but in the
moment these could require additional memory and could push to OOM. Therefore, when coding it’s crucial to think
strategically about such temporary variables and sometimes to explicitly free those as soon as they are no longer needed.`,ue,yt,ll="<strong>Functionality-specific memory</strong>",de,Jt,sl=`Then, your software could have special memory needs. For example, when generating text using beam search, the software
needs to maintain multiple copies of inputs and outputs.`,ce,Ut,nl="<strong><code>forward</code> vs <code>backward</code> Execution Speed</strong>",je,ut,al=`For convolutions and linear layers there are 2x flops in the backward compared to the forward, which generally translates
into ~2x slower (sometimes more, because sizes in the backward tend to be more awkward). Activations are usually
bandwidth-limited, and it’s typical for an activation to have to read more data in the backward than in the forward
(e.g. activation forward reads once, writes once, activation backward reads twice, gradOutput and output of the forward,
and writes once, gradInput).`,he,dt,il=`As you can see, there are potentially a few places where we could save GPU memory or speed up operations.
Now that you understand what affects GPU utilization and computation speed, refer to
the <a href="perf_train_gpu_one">Methods and tools for efficient training on a single GPU</a> documentation page to learn about
performance optimization techniques.`,Ce,jt,Ie;return j=new ht({props:{title:"Model training anatomy",local:"model-training-anatomy",headingTag:"h1"}}),I=new u({props:{code:"cGlwJTIwaW5zdGFsbCUyMHRyYW5zZm9ybWVycyUyMGRhdGFzZXRzJTIwYWNjZWxlcmF0ZSUyMG52aWRpYS1tbC1weTM=",highlighted:"pip install transformers datasets accelerate nvidia-ml-py3",wrap:!1}}),A=new u({props:{code:"aW1wb3J0JTIwbnVtcHklMjBhcyUyMG5wJTBBZnJvbSUyMGRhdGFzZXRzJTIwaW1wb3J0JTIwRGF0YXNldCUwQSUwQSUwQXNlcV9sZW4lMkMlMjBkYXRhc2V0X3NpemUlMjAlM0QlMjA1MTIlMkMlMjA1MTIlMEFkdW1teV9kYXRhJTIwJTNEJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIyaW5wdXRfaWRzJTIyJTNBJTIwbnAucmFuZG9tLnJhbmRpbnQoMTAwJTJDJTIwMzAwMDAlMkMlMjAoZGF0YXNldF9zaXplJTJDJTIwc2VxX2xlbikpJTJDJTBBJTIwJTIwJTIwJTIwJTIybGFiZWxzJTIyJTNBJTIwbnAucmFuZG9tLnJhbmRpbnQoMCUyQyUyMDElMkMlMjAoZGF0YXNldF9zaXplKSklMkMlMEElN0QlMEFkcyUyMCUzRCUyMERhdGFzZXQuZnJvbV9kaWN0KGR1bW15X2RhdGEpJTBBZHMuc2V0X2Zvcm1hdCglMjJwdCUyMik=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> Dataset


<span class="hljs-meta">&gt;&gt;&gt; </span>seq_len, dataset_size = <span class="hljs-number">512</span>, <span class="hljs-number">512</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dummy_data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;input_ids&quot;</span>: np.random.randint(<span class="hljs-number">100</span>, <span class="hljs-number">30000</span>, (dataset_size, seq_len)),
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;labels&quot;</span>: np.random.randint(<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, (dataset_size)),
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = Dataset.from_dict(dummy_data)
<span class="hljs-meta">&gt;&gt;&gt; </span>ds.set_format(<span class="hljs-string">&quot;pt&quot;</span>)`,wrap:!1}}),b=new u({props:{code:"ZnJvbSUyMHB5bnZtbCUyMGltcG9ydCUyMColMEElMEElMEFkZWYlMjBwcmludF9ncHVfdXRpbGl6YXRpb24oKSUzQSUwQSUyMCUyMCUyMCUyMG52bWxJbml0KCklMEElMjAlMjAlMjAlMjBoYW5kbGUlMjAlM0QlMjBudm1sRGV2aWNlR2V0SGFuZGxlQnlJbmRleCgwKSUwQSUyMCUyMCUyMCUyMGluZm8lMjAlM0QlMjBudm1sRGV2aWNlR2V0TWVtb3J5SW5mbyhoYW5kbGUpJTBBJTIwJTIwJTIwJTIwcHJpbnQoZiUyMkdQVSUyMG1lbW9yeSUyMG9jY3VwaWVkJTNBJTIwJTdCaW5mby51c2VkJTJGJTJGMTAyNCoqMiU3RCUyME1CLiUyMiklMEElMEElMEFkZWYlMjBwcmludF9zdW1tYXJ5KHJlc3VsdCklM0ElMEElMjAlMjAlMjAlMjBwcmludChmJTIyVGltZSUzQSUyMCU3QnJlc3VsdC5tZXRyaWNzJTVCJ3RyYWluX3J1bnRpbWUnJTVEJTNBLjJmJTdEJTIyKSUwQSUyMCUyMCUyMCUyMHByaW50KGYlMjJTYW1wbGVzJTJGc2Vjb25kJTNBJTIwJTdCcmVzdWx0Lm1ldHJpY3MlNUIndHJhaW5fc2FtcGxlc19wZXJfc2Vjb25kJyU1RCUzQS4yZiU3RCUyMiklMEElMjAlMjAlMjAlMjBwcmludF9ncHVfdXRpbGl6YXRpb24oKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> pynvml <span class="hljs-keyword">import</span> *


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">print_gpu_utilization</span>():
<span class="hljs-meta">... </span>    nvmlInit()
<span class="hljs-meta">... </span>    handle = nvmlDeviceGetHandleByIndex(<span class="hljs-number">0</span>)
<span class="hljs-meta">... </span>    info = nvmlDeviceGetMemoryInfo(handle)
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;GPU memory occupied: <span class="hljs-subst">{info.used//<span class="hljs-number">1024</span>**<span class="hljs-number">2</span>}</span> MB.&quot;</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">print_summary</span>(<span class="hljs-params">result</span>):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Time: <span class="hljs-subst">{result.metrics[<span class="hljs-string">&#x27;train_runtime&#x27;</span>]:<span class="hljs-number">.2</span>f}</span>&quot;</span>)
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Samples/second: <span class="hljs-subst">{result.metrics[<span class="hljs-string">&#x27;train_samples_per_second&#x27;</span>]:<span class="hljs-number">.2</span>f}</span>&quot;</span>)
<span class="hljs-meta">... </span>    print_gpu_utilization()`,wrap:!1}}),z=new u({props:{code:"cHJpbnRfZ3B1X3V0aWxpemF0aW9uKCk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>print_gpu_utilization()
GPU memory occupied: <span class="hljs-number">0</span> MB.`,wrap:!1}}),v=new u({props:{code:"aW1wb3J0JTIwdG9yY2glMEElMEElMEF0b3JjaC5vbmVzKCgxJTJDJTIwMSkpLnRvKCUyMmN1ZGElMjIpJTBBcHJpbnRfZ3B1X3V0aWxpemF0aW9uKCk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch


<span class="hljs-meta">&gt;&gt;&gt; </span>torch.ones((<span class="hljs-number">1</span>, <span class="hljs-number">1</span>)).to(<span class="hljs-string">&quot;cuda&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>print_gpu_utilization()
GPU memory occupied: <span class="hljs-number">1343</span> MB.`,wrap:!1}}),$=new ht({props:{title:"Load Model",local:"load-model",headingTag:"h2"}}),G=new u({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Nb2RlbEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMEElMEElMEFtb2RlbCUyMCUzRCUyMEF1dG9Nb2RlbEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZS1iZXJ0JTJGYmVydC1sYXJnZS11bmNhc2VkJTIyKS50byglMjJjdWRhJTIyKSUwQXByaW50X2dwdV91dGlsaXphdGlvbigp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSequenceClassification


<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-large-uncased&quot;</span>).to(<span class="hljs-string">&quot;cuda&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>print_gpu_utilization()
GPU memory occupied: <span class="hljs-number">2631</span> MB.`,wrap:!1}}),_=new u({props:{code:"bnZpZGlhLXNtaQ==",highlighted:"nvidia-smi",wrap:!1}}),B=new u({props:{code:"VHVlJTIwSmFuJTIwMTElMjAwOCUzQTU4JTNBMDUlMjAyMDIyJTBBJTJCLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0lMkIlMEElN0MlMjBOVklESUEtU01JJTIwNDYwLjkxLjAzJTIwJTIwJTIwJTIwRHJpdmVyJTIwVmVyc2lvbiUzQSUyMDQ2MC45MS4wMyUyMCUyMCUyMCUyMENVREElMjBWZXJzaW9uJTNBJTIwMTEuMiUyMCUyMCUyMCUyMCUyMCU3QyUwQSU3Qy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0lMkItLS0tLS0tLS0tLS0tLS0tLS0tLS0tJTJCLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSUyQiUwQSU3QyUyMEdQVSUyMCUyME5hbWUlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBQZXJzaXN0ZW5jZS1NJTdDJTIwQnVzLUlkJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwRGlzcC5BJTIwJTdDJTIwVm9sYXRpbGUlMjBVbmNvcnIuJTIwRUNDJTIwJTdDJTBBJTdDJTIwRmFuJTIwJTIwVGVtcCUyMCUyMFBlcmYlMjAlMjBQd3IlM0FVc2FnZSUyRkNhcCU3QyUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyME1lbW9yeS1Vc2FnZSUyMCU3QyUyMEdQVS1VdGlsJTIwJTIwQ29tcHV0ZSUyME0uJTIwJTdDJTBBJTdDJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTdDJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTdDJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwTUlHJTIwTS4lMjAlN0MlMEElN0MlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlMkIlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlMkIlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlM0QlN0MlMEElN0MlMjAlMjAlMjAwJTIwJTIwVGVzbGElMjBWMTAwLVNYTTIuLi4lMjAlMjBPbiUyMCUyMCUyMCU3QyUyMDAwMDAwMDAwJTNBMDAlM0EwNC4wJTIwT2ZmJTIwJTdDJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwMCUyMCU3QyUwQSU3QyUyME4lMkZBJTIwJTIwJTIwMzdDJTIwJTIwJTIwJTIwUDAlMjAlMjAlMjAlMjAzOVclMjAlMkYlMjAzMDBXJTIwJTdDJTIwJTIwJTIwMjYzMU1pQiUyMCUyRiUyMDE2MTYwTWlCJTIwJTdDJTIwJTIwJTIwJTIwJTIwJTIwMCUyNSUyMCUyMCUyMCUyMCUyMCUyMERlZmF1bHQlMjAlN0MlMEElN0MlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlN0MlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlN0MlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBOJTJGQSUyMCU3QyUwQSUyQi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0lMkItLS0tLS0tLS0tLS0tLS0tLS0tLS0tJTJCLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSUyQiUwQSUwQSUyQi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJTJCJTBBJTdDJTIwUHJvY2Vzc2VzJTNBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTdDJTBBJTdDJTIwJTIwR1BVJTIwJTIwJTIwR0klMjAlMjAlMjBDSSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMFBJRCUyMCUyMCUyMFR5cGUlMjAlMjAlMjBQcm9jZXNzJTIwbmFtZSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMEdQVSUyME1lbW9yeSUyMCU3QyUwQSU3QyUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMElEJTIwJTIwJTIwSUQlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBVc2FnZSUyMCUyMCUyMCUyMCUyMCUyMCU3QyUwQSU3QyUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCUzRCU3QyUwQSU3QyUyMCUyMCUyMCUyMDAlMjAlMjAlMjBOJTJGQSUyMCUyME4lMkZBJTIwJTIwJTIwJTIwJTIwJTIwMzcyMSUyMCUyMCUyMCUyMCUyMCUyMEMlMjAlMjAlMjAuLi5udnMlMkZjb2RlcGFycm90JTJGYmluJTJGcHl0aG9uJTIwJTIwJTIwJTIwJTIwMjYyOU1pQiUyMCU3QyUwQSUyQi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJTJC",highlighted:`Tue Jan 11 08:58:05 2022
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 460.91.03    Driver Version: 460.91.03    CUDA Version: 11.2     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|                               |                      |               MIG M. |
|===============================+======================+======================|
|   0  Tesla V100-SXM2...  On   | 00000000:00:04.0 Off |                    0 |
| N/A   37C    P0    39W / 300W |   2631MiB / 16160MiB |      0%      Default |
|                               |                      |                  N/A |
+-------------------------------+----------------------+----------------------+

+-----------------------------------------------------------------------------+
| Processes:                                                                  |
|  GPU   GI   CI        PID   Type   Process name                  GPU Memory |
|        ID   ID                                                   Usage      |
|=============================================================================|
|    0   N/A  N/A      3721      C   ...nvs/codeparrot/bin/python     2629MiB |
+-----------------------------------------------------------------------------+`,wrap:!1}}),W=new u({props:{code:"ZGVmYXVsdF9hcmdzJTIwJTNEJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIyb3V0cHV0X2RpciUyMiUzQSUyMCUyMnRtcCUyMiUyQyUwQSUyMCUyMCUyMCUyMCUyMmV2YWx1YXRpb25fc3RyYXRlZ3klMjIlM0ElMjAlMjJzdGVwcyUyMiUyQyUwQSUyMCUyMCUyMCUyMCUyMm51bV90cmFpbl9lcG9jaHMlMjIlM0ElMjAxJTJDJTBBJTIwJTIwJTIwJTIwJTIybG9nX2xldmVsJTIyJTNBJTIwJTIyZXJyb3IlMjIlMkMlMEElMjAlMjAlMjAlMjAlMjJyZXBvcnRfdG8lMjIlM0ElMjAlMjJub25lJTIyJTJDJTBBJTdE",highlighted:`default_args = {
    <span class="hljs-string">&quot;output_dir&quot;</span>: <span class="hljs-string">&quot;tmp&quot;</span>,
    <span class="hljs-string">&quot;evaluation_strategy&quot;</span>: <span class="hljs-string">&quot;steps&quot;</span>,
    <span class="hljs-string">&quot;num_train_epochs&quot;</span>: <span class="hljs-number">1</span>,
    <span class="hljs-string">&quot;log_level&quot;</span>: <span class="hljs-string">&quot;error&quot;</span>,
    <span class="hljs-string">&quot;report_to&quot;</span>: <span class="hljs-string">&quot;none&quot;</span>,
}`,wrap:!1}}),d=new ul({props:{$$slots:{default:[dl]},$$scope:{ctx:Ct}}}),V=new ht({props:{title:"Memory utilization at vanilla training",local:"memory-utilization-at-vanilla-training",headingTag:"h2"}}),P=new u({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFRyYWluaW5nQXJndW1lbnRzJTJDJTIwVHJhaW5lciUyQyUyMGxvZ2dpbmclMEElMEFsb2dnaW5nLnNldF92ZXJib3NpdHlfZXJyb3IoKSUwQSUwQSUwQXRyYWluaW5nX2FyZ3MlMjAlM0QlMjBUcmFpbmluZ0FyZ3VtZW50cyhwZXJfZGV2aWNlX3RyYWluX2JhdGNoX3NpemUlM0Q0JTJDJTIwKipkZWZhdWx0X2FyZ3MpJTBBdHJhaW5lciUyMCUzRCUyMFRyYWluZXIobW9kZWwlM0Rtb2RlbCUyQyUyMGFyZ3MlM0R0cmFpbmluZ19hcmdzJTJDJTIwdHJhaW5fZGF0YXNldCUzRGRzKSUwQXJlc3VsdCUyMCUzRCUyMHRyYWluZXIudHJhaW4oKSUwQXByaW50X3N1bW1hcnkocmVzdWx0KQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TrainingArguments, Trainer, logging

<span class="hljs-meta">&gt;&gt;&gt; </span>logging.set_verbosity_error()


<span class="hljs-meta">&gt;&gt;&gt; </span>training_args = TrainingArguments(per_device_train_batch_size=<span class="hljs-number">4</span>, **default_args)
<span class="hljs-meta">&gt;&gt;&gt; </span>trainer = Trainer(model=model, args=training_args, train_dataset=ds)
<span class="hljs-meta">&gt;&gt;&gt; </span>result = trainer.train()
<span class="hljs-meta">&gt;&gt;&gt; </span>print_summary(result)`,wrap:!1}}),H=new u({props:{code:"VGltZSUzQSUyMDU3LjgyJTBBU2FtcGxlcyUyRnNlY29uZCUzQSUyMDguODYlMEFHUFUlMjBtZW1vcnklMjBvY2N1cGllZCUzQSUyMDE0OTQ5JTIwTUIu",highlighted:`<span class="hljs-keyword">Time:</span> 57.82
Samples/second: 8.86
GPU memory occupied: 14949 MB.`,wrap:!1}}),F=new ht({props:{title:"Anatomy of Model’s Operations",local:"anatomy-of-models-operations",headingTag:"h2"}}),K=new ht({props:{title:"Anatomy of Model’s Memory",local:"anatomy-of-models-memory",headingTag:"h2"}}),{c(){r=i("meta"),c=n(),U=i("p"),ct=n(),p(j.$$.fragment),It=n(),h=i("p"),h.textContent=fe,ft=n(),C=i("p"),C.textContent=ge,gt=n(),p(I.$$.fragment),At=n(),f=i("p"),f.innerHTML=Ae,St=n(),g=i("p"),g.innerHTML=Se,bt=n(),p(A.$$.fragment),Lt=n(),S=i("p"),S.innerHTML=be,zt=n(),p(b.$$.fragment),Qt=n(),L=i("p"),L.textContent=Le,vt=n(),p(z.$$.fragment),Rt=n(),Q=i("p"),Q.textContent=ze,$t=n(),p(v.$$.fragment),xt=n(),R=i("p"),R.textContent=Qe,Gt=n(),p($.$$.fragment),kt=n(),x=i("p"),x.innerHTML=ve,_t=n(),p(G.$$.fragment),Bt=n(),k=i("p"),k.innerHTML=Re,Et=n(),p(_.$$.fragment),Wt=n(),p(B.$$.fragment),Vt=n(),E=i("p"),E.textContent=$e,Zt=n(),p(W.$$.fragment),Pt=n(),p(d.$$.fragment),Ht=n(),p(V.$$.fragment),Nt=n(),Z=i("p"),Z.innerHTML=xe,Ft=n(),p(P.$$.fragment),Xt=n(),p(H.$$.fragment),Dt=n(),N=i("p"),N.textContent=Ge,qt=n(),p(F.$$.fragment),Yt=n(),X=i("p"),X.textContent=ke,Kt=n(),D=i("ol"),D.innerHTML=_e,Ot=n(),q=i("p"),q.textContent=Be,te=n(),Y=i("p"),Y.innerHTML=Ee,ee=n(),p(K.$$.fragment),le=n(),O=i("p"),O.textContent=We,se=n(),tt=i("ol"),tt.innerHTML=Ve,ne=n(),et=i("p"),et.textContent=Ze,ae=n(),lt=i("p"),lt.textContent=Pe,ie=n(),st=i("p"),st.innerHTML=He,Me=n(),nt=i("ul"),nt.innerHTML=Ne,oe=n(),at=i("p"),at.innerHTML=Fe,re=n(),it=i("ul"),it.innerHTML=Xe,pe=n(),Mt=i("p"),Mt.innerHTML=De,me=n(),ot=i("ul"),ot.innerHTML=qe,we=n(),rt=i("p"),rt.innerHTML=Ye,Te=n(),pt=i("ul"),pt.innerHTML=Ke,ye=n(),mt=i("p"),mt.textContent=Oe,Je=n(),wt=i("p"),wt.innerHTML=tl,Ue=n(),Tt=i("p"),Tt.textContent=el,ue=n(),yt=i("p"),yt.innerHTML=ll,de=n(),Jt=i("p"),Jt.textContent=sl,ce=n(),Ut=i("p"),Ut.innerHTML=nl,je=n(),ut=i("p"),ut.textContent=al,he=n(),dt=i("p"),dt.innerHTML=il,Ce=n(),jt=i("p"),this.h()},l(t){const e=Jl("svelte-u9bgzb",document.head);r=M(e,"META",{name:!0,content:!0}),e.forEach(l),c=a(t),U=M(t,"P",{}),ol(U).forEach(l),ct=a(t),m(j.$$.fragment,t),It=a(t),h=M(t,"P",{"data-svelte-h":!0}),o(h)!=="svelte-hnkrmx"&&(h.textContent=fe),ft=a(t),C=M(t,"P",{"data-svelte-h":!0}),o(C)!=="svelte-1senzsq"&&(C.textContent=ge),gt=a(t),m(I.$$.fragment,t),At=a(t),f=M(t,"P",{"data-svelte-h":!0}),o(f)!=="svelte-12yc6mf"&&(f.innerHTML=Ae),St=a(t),g=M(t,"P",{"data-svelte-h":!0}),o(g)!=="svelte-1jp5ro8"&&(g.innerHTML=Se),bt=a(t),m(A.$$.fragment,t),Lt=a(t),S=M(t,"P",{"data-svelte-h":!0}),o(S)!=="svelte-1870dpn"&&(S.innerHTML=be),zt=a(t),m(b.$$.fragment,t),Qt=a(t),L=M(t,"P",{"data-svelte-h":!0}),o(L)!=="svelte-ync61x"&&(L.textContent=Le),vt=a(t),m(z.$$.fragment,t),Rt=a(t),Q=M(t,"P",{"data-svelte-h":!0}),o(Q)!=="svelte-5czace"&&(Q.textContent=ze),$t=a(t),m(v.$$.fragment,t),xt=a(t),R=M(t,"P",{"data-svelte-h":!0}),o(R)!=="svelte-i7swzw"&&(R.textContent=Qe),Gt=a(t),m($.$$.fragment,t),kt=a(t),x=M(t,"P",{"data-svelte-h":!0}),o(x)!=="svelte-1gubaoi"&&(x.innerHTML=ve),_t=a(t),m(G.$$.fragment,t),Bt=a(t),k=M(t,"P",{"data-svelte-h":!0}),o(k)!=="svelte-11jwi8m"&&(k.innerHTML=Re),Et=a(t),m(_.$$.fragment,t),Wt=a(t),m(B.$$.fragment,t),Vt=a(t),E=M(t,"P",{"data-svelte-h":!0}),o(E)!=="svelte-3jv7wr"&&(E.textContent=$e),Zt=a(t),m(W.$$.fragment,t),Pt=a(t),m(d.$$.fragment,t),Ht=a(t),m(V.$$.fragment,t),Nt=a(t),Z=M(t,"P",{"data-svelte-h":!0}),o(Z)!=="svelte-1y7sauk"&&(Z.innerHTML=xe),Ft=a(t),m(P.$$.fragment,t),Xt=a(t),m(H.$$.fragment,t),Dt=a(t),N=M(t,"P",{"data-svelte-h":!0}),o(N)!=="svelte-17rqaak"&&(N.textContent=Ge),qt=a(t),m(F.$$.fragment,t),Yt=a(t),X=M(t,"P",{"data-svelte-h":!0}),o(X)!=="svelte-1yxwgxq"&&(X.textContent=ke),Kt=a(t),D=M(t,"OL",{"data-svelte-h":!0}),o(D)!=="svelte-6rh9nr"&&(D.innerHTML=_e),Ot=a(t),q=M(t,"P",{"data-svelte-h":!0}),o(q)!=="svelte-133lz8w"&&(q.textContent=Be),te=a(t),Y=M(t,"P",{"data-svelte-h":!0}),o(Y)!=="svelte-kuotmr"&&(Y.innerHTML=Ee),ee=a(t),m(K.$$.fragment,t),le=a(t),O=M(t,"P",{"data-svelte-h":!0}),o(O)!=="svelte-1754txj"&&(O.textContent=We),se=a(t),tt=M(t,"OL",{"data-svelte-h":!0}),o(tt)!=="svelte-sugems"&&(tt.innerHTML=Ve),ne=a(t),et=M(t,"P",{"data-svelte-h":!0}),o(et)!=="svelte-fr1nan"&&(et.textContent=Ze),ae=a(t),lt=M(t,"P",{"data-svelte-h":!0}),o(lt)!=="svelte-gkt5oe"&&(lt.textContent=Pe),ie=a(t),st=M(t,"P",{"data-svelte-h":!0}),o(st)!=="svelte-xrqy2v"&&(st.innerHTML=He),Me=a(t),nt=M(t,"UL",{"data-svelte-h":!0}),o(nt)!=="svelte-onmuxe"&&(nt.innerHTML=Ne),oe=a(t),at=M(t,"P",{"data-svelte-h":!0}),o(at)!=="svelte-1lt6jd6"&&(at.innerHTML=Fe),re=a(t),it=M(t,"UL",{"data-svelte-h":!0}),o(it)!=="svelte-1da4la2"&&(it.innerHTML=Xe),pe=a(t),Mt=M(t,"P",{"data-svelte-h":!0}),o(Mt)!=="svelte-1ecbalg"&&(Mt.innerHTML=De),me=a(t),ot=M(t,"UL",{"data-svelte-h":!0}),o(ot)!=="svelte-4g0r46"&&(ot.innerHTML=qe),we=a(t),rt=M(t,"P",{"data-svelte-h":!0}),o(rt)!=="svelte-2pm1hh"&&(rt.innerHTML=Ye),Te=a(t),pt=M(t,"UL",{"data-svelte-h":!0}),o(pt)!=="svelte-if0ig5"&&(pt.innerHTML=Ke),ye=a(t),mt=M(t,"P",{"data-svelte-h":!0}),o(mt)!=="svelte-1nzmdyx"&&(mt.textContent=Oe),Je=a(t),wt=M(t,"P",{"data-svelte-h":!0}),o(wt)!=="svelte-1wp748v"&&(wt.innerHTML=tl),Ue=a(t),Tt=M(t,"P",{"data-svelte-h":!0}),o(Tt)!=="svelte-1wjdkzj"&&(Tt.textContent=el),ue=a(t),yt=M(t,"P",{"data-svelte-h":!0}),o(yt)!=="svelte-1fhakxc"&&(yt.innerHTML=ll),de=a(t),Jt=M(t,"P",{"data-svelte-h":!0}),o(Jt)!=="svelte-l8a4kr"&&(Jt.textContent=sl),ce=a(t),Ut=M(t,"P",{"data-svelte-h":!0}),o(Ut)!=="svelte-1mll0j9"&&(Ut.innerHTML=nl),je=a(t),ut=M(t,"P",{"data-svelte-h":!0}),o(ut)!=="svelte-10o41gl"&&(ut.textContent=al),he=a(t),dt=M(t,"P",{"data-svelte-h":!0}),o(dt)!=="svelte-a36np0"&&(dt.innerHTML=il),Ce=a(t),jt=M(t,"P",{}),ol(jt).forEach(l),this.h()},h(){rl(r,"name","hf:doc:metadata"),rl(r,"content",jl)},m(t,e){Ul(document.head,r),s(t,c,e),s(t,U,e),s(t,ct,e),w(j,t,e),s(t,It,e),s(t,h,e),s(t,ft,e),s(t,C,e),s(t,gt,e),w(I,t,e),s(t,At,e),s(t,f,e),s(t,St,e),s(t,g,e),s(t,bt,e),w(A,t,e),s(t,Lt,e),s(t,S,e),s(t,zt,e),w(b,t,e),s(t,Qt,e),s(t,L,e),s(t,vt,e),w(z,t,e),s(t,Rt,e),s(t,Q,e),s(t,$t,e),w(v,t,e),s(t,xt,e),s(t,R,e),s(t,Gt,e),w($,t,e),s(t,kt,e),s(t,x,e),s(t,_t,e),w(G,t,e),s(t,Bt,e),s(t,k,e),s(t,Et,e),w(_,t,e),s(t,Wt,e),w(B,t,e),s(t,Vt,e),s(t,E,e),s(t,Zt,e),w(W,t,e),s(t,Pt,e),w(d,t,e),s(t,Ht,e),w(V,t,e),s(t,Nt,e),s(t,Z,e),s(t,Ft,e),w(P,t,e),s(t,Xt,e),w(H,t,e),s(t,Dt,e),s(t,N,e),s(t,qt,e),w(F,t,e),s(t,Yt,e),s(t,X,e),s(t,Kt,e),s(t,D,e),s(t,Ot,e),s(t,q,e),s(t,te,e),s(t,Y,e),s(t,ee,e),w(K,t,e),s(t,le,e),s(t,O,e),s(t,se,e),s(t,tt,e),s(t,ne,e),s(t,et,e),s(t,ae,e),s(t,lt,e),s(t,ie,e),s(t,st,e),s(t,Me,e),s(t,nt,e),s(t,oe,e),s(t,at,e),s(t,re,e),s(t,it,e),s(t,pe,e),s(t,Mt,e),s(t,me,e),s(t,ot,e),s(t,we,e),s(t,rt,e),s(t,Te,e),s(t,pt,e),s(t,ye,e),s(t,mt,e),s(t,Je,e),s(t,wt,e),s(t,Ue,e),s(t,Tt,e),s(t,ue,e),s(t,yt,e),s(t,de,e),s(t,Jt,e),s(t,ce,e),s(t,Ut,e),s(t,je,e),s(t,ut,e),s(t,he,e),s(t,dt,e),s(t,Ce,e),s(t,jt,e),Ie=!0},p(t,[e]){const Ml={};e&2&&(Ml.$$scope={dirty:e,ctx:t}),d.$set(Ml)},i(t){Ie||(T(j.$$.fragment,t),T(I.$$.fragment,t),T(A.$$.fragment,t),T(b.$$.fragment,t),T(z.$$.fragment,t),T(v.$$.fragment,t),T($.$$.fragment,t),T(G.$$.fragment,t),T(_.$$.fragment,t),T(B.$$.fragment,t),T(W.$$.fragment,t),T(d.$$.fragment,t),T(V.$$.fragment,t),T(P.$$.fragment,t),T(H.$$.fragment,t),T(F.$$.fragment,t),T(K.$$.fragment,t),Ie=!0)},o(t){y(j.$$.fragment,t),y(I.$$.fragment,t),y(A.$$.fragment,t),y(b.$$.fragment,t),y(z.$$.fragment,t),y(v.$$.fragment,t),y($.$$.fragment,t),y(G.$$.fragment,t),y(_.$$.fragment,t),y(B.$$.fragment,t),y(W.$$.fragment,t),y(d.$$.fragment,t),y(V.$$.fragment,t),y(P.$$.fragment,t),y(H.$$.fragment,t),y(F.$$.fragment,t),y(K.$$.fragment,t),Ie=!1},d(t){t&&(l(c),l(U),l(ct),l(It),l(h),l(ft),l(C),l(gt),l(At),l(f),l(St),l(g),l(bt),l(Lt),l(S),l(zt),l(Qt),l(L),l(vt),l(Rt),l(Q),l($t),l(xt),l(R),l(Gt),l(kt),l(x),l(_t),l(Bt),l(k),l(Et),l(Wt),l(Vt),l(E),l(Zt),l(Pt),l(Ht),l(Nt),l(Z),l(Ft),l(Xt),l(Dt),l(N),l(qt),l(Yt),l(X),l(Kt),l(D),l(Ot),l(q),l(te),l(Y),l(ee),l(le),l(O),l(se),l(tt),l(ne),l(et),l(ae),l(lt),l(ie),l(st),l(Me),l(nt),l(oe),l(at),l(re),l(it),l(pe),l(Mt),l(me),l(ot),l(we),l(rt),l(Te),l(pt),l(ye),l(mt),l(Je),l(wt),l(Ue),l(Tt),l(ue),l(yt),l(de),l(Jt),l(ce),l(Ut),l(je),l(ut),l(he),l(dt),l(Ce),l(jt)),l(r),J(j,t),J(I,t),J(A,t),J(b,t),J(z,t),J(v,t),J($,t),J(G,t),J(_,t),J(B,t),J(W,t),J(d,t),J(V,t),J(P,t),J(H,t),J(F,t),J(K,t)}}}const jl='{"title":"Model training anatomy","local":"model-training-anatomy","sections":[{"title":"Load Model","local":"load-model","sections":[],"depth":2},{"title":"Memory utilization at vanilla training","local":"memory-utilization-at-vanilla-training","sections":[],"depth":2},{"title":"Anatomy of Model’s Operations","local":"anatomy-of-models-operations","sections":[],"depth":2},{"title":"Anatomy of Model’s Memory","local":"anatomy-of-models-memory","sections":[],"depth":2}],"depth":1}';function hl(Ct){return ml(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Sl extends Tl{constructor(r){super(),yl(this,r,hl,cl,pl,{})}}export{Sl as component};
