import{s as Ns,n as Gs,o as Rs}from"../chunks/scheduler.9991993c.js";import{S as Hs,i as xs,g as p,s as e,r as y,A as Ss,h as M,f as l,c as n,j as ks,u as J,x as i,k as As,y as Fs,a as t,v as c,d as m,t as r,w as T}from"../chunks/index.7fc9a5e7.js";import{C as j}from"../chunks/CodeBlock.e11cba92.js";import{H as ds}from"../chunks/Heading.e3de321f.js";function zs(Cs){let o,F,x,z,U,E,h,fs="🤗 Transformers库提供了一个优化过的<code>Trainer</code>类，用于训练🤗 Transformers模型，相比于手动编写自己的训练循环，这更容易开始训练。<code>Trainer</code>提供了超参数搜索的API。本文档展示了如何在示例中启用它。",D,w,L,u,bs='<code>Trainer</code> 目前支持四种超参数搜索后端：<a href="https://optuna.org/" rel="nofollow">optuna</a>，<a href="https://sigopt.com/" rel="nofollow">sigopt</a>，<a href="https://docs.ray.io/en/latest/tune/index.html" rel="nofollow">raytune</a>，<a href="https://wandb.ai/site/sweeps" rel="nofollow">wandb</a>',P,I,_s="在使用它们之前，您应该先安装它们作为超参数搜索后端。",K,d,O,C,ss,f,gs="定义超参数搜索空间，不同的后端需要不同的格式。",as,b,$s='对于sigopt，请参阅sigopt <a href="https://docs.sigopt.com/ai-module-api-references/api_reference/objects/object_parameter" rel="nofollow">object_parameter</a>，它类似于以下内容：',ls,_,ts,g,qs='对于optuna，请参阅optuna <a href="https://optuna.readthedocs.io/en/stable/tutorial/10_key_features/002_configurations.html#sphx-glr-tutorial-10-key-features-002-configurations-py" rel="nofollow">object_parameter</a>，它类似于以下内容：',es,$,ns,q,Xs='Optuna提供了多目标HPO。您可以在<code>hyperparameter_search</code>中传递<code>direction</code>参数，并定义自己的<code>compute_objective</code>以返回多个目标值。在<code>hyperparameter_search</code>中将返回Pareto Front（<code>List[BestRun]</code>），您应该参考<a href="https://github.com/huggingface/transformers/blob/main/tests/trainer/test_trainer.py" rel="nofollow">test_trainer</a>中的测试用例<code>TrainerHyperParameterMultiObjectOptunaIntegrationTest</code>。它类似于以下内容：',ps,X,Ms,W,Ws='对于raytune，可以参考raytune的<a href="https://docs.ray.io/en/latest/tune/api/search_space.html" rel="nofollow">object_parameter</a>，它类似于以下内容：',is,B,ys,Z,Bs='对于wandb，可以参考wandb的<a href="https://docs.wandb.ai/guides/sweeps/configuration" rel="nofollow">object_parameter</a>，它类似于以下内容：',Js,Y,cs,V,Zs="定义一个<code>model_init</code>函数并将其传递给[Trainer]，作为示例：",ms,v,rs,Q,Ys="使用你的<code>model_init</code>函数、训练参数、训练和测试数据集以及评估函数创建一个<code>Trainer</code>。",Ts,k,os,A,Vs="调用超参数搜索，获取最佳试验参数，后端可以是<code>&quot;optuna&quot;</code>/<code>&quot;sigopt&quot;</code>/<code>&quot;wandb&quot;</code>/<code>&quot;ray&quot;</code>。方向可以是<code>&quot;minimize&quot;</code>或<code>&quot;maximize&quot;</code>，表示是否优化更大或更低的目标。",js,N,vs="您可以定义自己的compute_objective函数，如果没有定义，将调用默认的compute_objective，并将评估指标（如f1）之和作为目标值返回。",Us,G,hs,R,ws,H,Qs="目前，Optuna和Sigopt已启用针对DDP的超参数搜索。只有rank-zero进程会进行超参数搜索并将参数传递给其他进程。",us,S,Is;return U=new ds({props:{title:"使用Trainer API进行超参数搜索",local:"使用trainer-api进行超参数搜索",headingTag:"h1"}}),w=new ds({props:{title:"超参数搜索后端",local:"超参数搜索后端",headingTag:"h2"}}),d=new j({props:{code:"cGlwJTIwaW5zdGFsbCUyMG9wdHVuYSUyRnNpZ29wdCUyRndhbmRiJTJGcmF5JTVCdHVuZSU1RCUyMA==",highlighted:"pip install optuna/sigopt/wandb/ray[tune] ",wrap:!1}}),C=new ds({props:{title:"如何在示例中启用超参数搜索",local:"如何在示例中启用超参数搜索",headingTag:"h2"}}),_=new j({props:{code:"ZGVmJTIwc2lnb3B0X2hwX3NwYWNlKHRyaWFsKSUzQSUwQSUyMCUyMCUyMCUyMHJldHVybiUyMCU1QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCU3QiUyMmJvdW5kcyUyMiUzQSUyMCU3QiUyMm1pbiUyMiUzQSUyMDFlLTYlMkMlMjAlMjJtYXglMjIlM0ElMjAxZS00JTdEJTJDJTIwJTIybmFtZSUyMiUzQSUyMCUyMmxlYXJuaW5nX3JhdGUlMjIlMkMlMjAlMjJ0eXBlJTIyJTNBJTIwJTIyZG91YmxlJTIyJTdEJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIyY2F0ZWdvcmljYWxfdmFsdWVzJTIyJTNBJTIwJTVCJTIyMTYlMjIlMkMlMjAlMjIzMiUyMiUyQyUyMCUyMjY0JTIyJTJDJTIwJTIyMTI4JTIyJTVEJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIybmFtZSUyMiUzQSUyMCUyMnBlcl9kZXZpY2VfdHJhaW5fYmF0Y2hfc2l6ZSUyMiUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMnR5cGUlMjIlM0ElMjAlMjJjYXRlZ29yaWNhbCUyMiUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCU3RCUyQyUwQSUyMCUyMCUyMCUyMCU1RA==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">sigopt_hp_space</span>(<span class="hljs-params">trial</span>):
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> [
<span class="hljs-meta">... </span>        {<span class="hljs-string">&quot;bounds&quot;</span>: {<span class="hljs-string">&quot;min&quot;</span>: <span class="hljs-number">1e-6</span>, <span class="hljs-string">&quot;max&quot;</span>: <span class="hljs-number">1e-4</span>}, <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;learning_rate&quot;</span>, <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;double&quot;</span>},
<span class="hljs-meta">... </span>        {
<span class="hljs-meta">... </span>            <span class="hljs-string">&quot;categorical_values&quot;</span>: [<span class="hljs-string">&quot;16&quot;</span>, <span class="hljs-string">&quot;32&quot;</span>, <span class="hljs-string">&quot;64&quot;</span>, <span class="hljs-string">&quot;128&quot;</span>],
<span class="hljs-meta">... </span>            <span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;per_device_train_batch_size&quot;</span>,
<span class="hljs-meta">... </span>            <span class="hljs-string">&quot;type&quot;</span>: <span class="hljs-string">&quot;categorical&quot;</span>,
<span class="hljs-meta">... </span>        },
<span class="hljs-meta">... </span>    ]`,wrap:!1}}),$=new j({props:{code:"ZGVmJTIwb3B0dW5hX2hwX3NwYWNlKHRyaWFsKSUzQSUwQSUyMCUyMCUyMCUyMHJldHVybiUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMmxlYXJuaW5nX3JhdGUlMjIlM0ElMjB0cmlhbC5zdWdnZXN0X2Zsb2F0KCUyMmxlYXJuaW5nX3JhdGUlMjIlMkMlMjAxZS02JTJDJTIwMWUtNCUyQyUyMGxvZyUzRFRydWUpJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIycGVyX2RldmljZV90cmFpbl9iYXRjaF9zaXplJTIyJTNBJTIwdHJpYWwuc3VnZ2VzdF9jYXRlZ29yaWNhbCglMjJwZXJfZGV2aWNlX3RyYWluX2JhdGNoX3NpemUlMjIlMkMlMjAlNUIxNiUyQyUyMDMyJTJDJTIwNjQlMkMlMjAxMjglNUQpJTJDJTBBJTIwJTIwJTIwJTIwJTdE",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">optuna_hp_space</span>(<span class="hljs-params">trial</span>):
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> {
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;learning_rate&quot;</span>: trial.suggest_float(<span class="hljs-string">&quot;learning_rate&quot;</span>, <span class="hljs-number">1e-6</span>, <span class="hljs-number">1e-4</span>, log=<span class="hljs-literal">True</span>),
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;per_device_train_batch_size&quot;</span>: trial.suggest_categorical(<span class="hljs-string">&quot;per_device_train_batch_size&quot;</span>, [<span class="hljs-number">16</span>, <span class="hljs-number">32</span>, <span class="hljs-number">64</span>, <span class="hljs-number">128</span>]),
<span class="hljs-meta">... </span>    }`,wrap:!1}}),X=new j({props:{code:"YmVzdF90cmlhbHMlMjAlM0QlMjB0cmFpbmVyLmh5cGVycGFyYW1ldGVyX3NlYXJjaCglMEElMjAlMjAlMjAlMjBkaXJlY3Rpb24lM0QlNUIlMjJtaW5pbWl6ZSUyMiUyQyUyMCUyMm1heGltaXplJTIyJTVEJTJDJTBBJTIwJTIwJTIwJTIwYmFja2VuZCUzRCUyMm9wdHVuYSUyMiUyQyUwQSUyMCUyMCUyMCUyMGhwX3NwYWNlJTNEb3B0dW5hX2hwX3NwYWNlJTJDJTBBJTIwJTIwJTIwJTIwbl90cmlhbHMlM0QyMCUyQyUwQSUyMCUyMCUyMCUyMGNvbXB1dGVfb2JqZWN0aXZlJTNEY29tcHV0ZV9vYmplY3RpdmUlMkMlMEEp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>best_trials = trainer.hyperparameter_search(
<span class="hljs-meta">... </span>    direction=[<span class="hljs-string">&quot;minimize&quot;</span>, <span class="hljs-string">&quot;maximize&quot;</span>],
<span class="hljs-meta">... </span>    backend=<span class="hljs-string">&quot;optuna&quot;</span>,
<span class="hljs-meta">... </span>    hp_space=optuna_hp_space,
<span class="hljs-meta">... </span>    n_trials=<span class="hljs-number">20</span>,
<span class="hljs-meta">... </span>    compute_objective=compute_objective,
<span class="hljs-meta">... </span>)`,wrap:!1}}),B=new j({props:{code:"ZGVmJTIwcmF5X2hwX3NwYWNlKHRyaWFsKSUzQSUwQSUyMCUyMCUyMCUyMHJldHVybiUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMmxlYXJuaW5nX3JhdGUlMjIlM0ElMjB0dW5lLmxvZ3VuaWZvcm0oMWUtNiUyQyUyMDFlLTQpJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIycGVyX2RldmljZV90cmFpbl9iYXRjaF9zaXplJTIyJTNBJTIwdHVuZS5jaG9pY2UoJTVCMTYlMkMlMjAzMiUyQyUyMDY0JTJDJTIwMTI4JTVEKSUyQyUwQSUyMCUyMCUyMCUyMCU3RA==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">ray_hp_space</span>(<span class="hljs-params">trial</span>):
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> {
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;learning_rate&quot;</span>: tune.loguniform(<span class="hljs-number">1e-6</span>, <span class="hljs-number">1e-4</span>),
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;per_device_train_batch_size&quot;</span>: tune.choice([<span class="hljs-number">16</span>, <span class="hljs-number">32</span>, <span class="hljs-number">64</span>, <span class="hljs-number">128</span>]),
<span class="hljs-meta">... </span>    }`,wrap:!1}}),Y=new j({props:{code:"ZGVmJTIwd2FuZGJfaHBfc3BhY2UodHJpYWwpJTNBJTBBJTIwJTIwJTIwJTIwcmV0dXJuJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIybWV0aG9kJTIyJTNBJTIwJTIycmFuZG9tJTIyJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIybWV0cmljJTIyJTNBJTIwJTdCJTIybmFtZSUyMiUzQSUyMCUyMm9iamVjdGl2ZSUyMiUyQyUyMCUyMmdvYWwlMjIlM0ElMjAlMjJtaW5pbWl6ZSUyMiU3RCUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMnBhcmFtZXRlcnMlMjIlM0ElMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjJsZWFybmluZ19yYXRlJTIyJTNBJTIwJTdCJTIyZGlzdHJpYnV0aW9uJTIyJTNBJTIwJTIydW5pZm9ybSUyMiUyQyUyMCUyMm1pbiUyMiUzQSUyMDFlLTYlMkMlMjAlMjJtYXglMjIlM0ElMjAxZS00JTdEJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIycGVyX2RldmljZV90cmFpbl9iYXRjaF9zaXplJTIyJTNBJTIwJTdCJTIydmFsdWVzJTIyJTNBJTIwJTVCMTYlMkMlMjAzMiUyQyUyMDY0JTJDJTIwMTI4JTVEJTdEJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTdEJTJDJTBBJTIwJTIwJTIwJTIwJTdE",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">wandb_hp_space</span>(<span class="hljs-params">trial</span>):
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> {
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;method&quot;</span>: <span class="hljs-string">&quot;random&quot;</span>,
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;metric&quot;</span>: {<span class="hljs-string">&quot;name&quot;</span>: <span class="hljs-string">&quot;objective&quot;</span>, <span class="hljs-string">&quot;goal&quot;</span>: <span class="hljs-string">&quot;minimize&quot;</span>},
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;parameters&quot;</span>: {
<span class="hljs-meta">... </span>            <span class="hljs-string">&quot;learning_rate&quot;</span>: {<span class="hljs-string">&quot;distribution&quot;</span>: <span class="hljs-string">&quot;uniform&quot;</span>, <span class="hljs-string">&quot;min&quot;</span>: <span class="hljs-number">1e-6</span>, <span class="hljs-string">&quot;max&quot;</span>: <span class="hljs-number">1e-4</span>},
<span class="hljs-meta">... </span>            <span class="hljs-string">&quot;per_device_train_batch_size&quot;</span>: {<span class="hljs-string">&quot;values&quot;</span>: [<span class="hljs-number">16</span>, <span class="hljs-number">32</span>, <span class="hljs-number">64</span>, <span class="hljs-number">128</span>]},
<span class="hljs-meta">... </span>        },
<span class="hljs-meta">... </span>    }`,wrap:!1}}),v=new j({props:{code:"ZGVmJTIwbW9kZWxfaW5pdCh0cmlhbCklM0ElMEElMjAlMjAlMjAlMjByZXR1cm4lMjBBdXRvTW9kZWxGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBtb2RlbF9hcmdzLm1vZGVsX25hbWVfb3JfcGF0aCUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMGZyb21fdGYlM0Rib29sKCUyMi5ja3B0JTIyJTIwaW4lMjBtb2RlbF9hcmdzLm1vZGVsX25hbWVfb3JfcGF0aCklMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBjb25maWclM0Rjb25maWclMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBjYWNoZV9kaXIlM0Rtb2RlbF9hcmdzLmNhY2hlX2RpciUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHJldmlzaW9uJTNEbW9kZWxfYXJncy5tb2RlbF9yZXZpc2lvbiUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHVzZV9hdXRoX3Rva2VuJTNEVHJ1ZSUyMGlmJTIwbW9kZWxfYXJncy51c2VfYXV0aF90b2tlbiUyMGVsc2UlMjBOb25lJTJDJTBBJTIwJTIwJTIwJTIwKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">model_init</span>(<span class="hljs-params">trial</span>):
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> AutoModelForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>        model_args.model_name_or_path,
<span class="hljs-meta">... </span>        from_tf=<span class="hljs-built_in">bool</span>(<span class="hljs-string">&quot;.ckpt&quot;</span> <span class="hljs-keyword">in</span> model_args.model_name_or_path),
<span class="hljs-meta">... </span>        config=config,
<span class="hljs-meta">... </span>        cache_dir=model_args.cache_dir,
<span class="hljs-meta">... </span>        revision=model_args.model_revision,
<span class="hljs-meta">... </span>        use_auth_token=<span class="hljs-literal">True</span> <span class="hljs-keyword">if</span> model_args.use_auth_token <span class="hljs-keyword">else</span> <span class="hljs-literal">None</span>,
<span class="hljs-meta">... </span>    )`,wrap:!1}}),k=new j({props:{code:"dHJhaW5lciUyMCUzRCUyMFRyYWluZXIoJTBBJTIwJTIwJTIwJTIwbW9kZWwlM0ROb25lJTJDJTBBJTIwJTIwJTIwJTIwYXJncyUzRHRyYWluaW5nX2FyZ3MlMkMlMEElMjAlMjAlMjAlMjB0cmFpbl9kYXRhc2V0JTNEc21hbGxfdHJhaW5fZGF0YXNldCUyQyUwQSUyMCUyMCUyMCUyMGV2YWxfZGF0YXNldCUzRHNtYWxsX2V2YWxfZGF0YXNldCUyQyUwQSUyMCUyMCUyMCUyMGNvbXB1dGVfbWV0cmljcyUzRGNvbXB1dGVfbWV0cmljcyUyQyUwQSUyMCUyMCUyMCUyMHRva2VuaXplciUzRHRva2VuaXplciUyQyUwQSUyMCUyMCUyMCUyMG1vZGVsX2luaXQlM0Rtb2RlbF9pbml0JTJDJTBBJTIwJTIwJTIwJTIwZGF0YV9jb2xsYXRvciUzRGRhdGFfY29sbGF0b3IlMkMlMEEp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>trainer = Trainer(
<span class="hljs-meta">... </span>    model=<span class="hljs-literal">None</span>,
<span class="hljs-meta">... </span>    args=training_args,
<span class="hljs-meta">... </span>    train_dataset=small_train_dataset,
<span class="hljs-meta">... </span>    eval_dataset=small_eval_dataset,
<span class="hljs-meta">... </span>    compute_metrics=compute_metrics,
<span class="hljs-meta">... </span>    tokenizer=tokenizer,
<span class="hljs-meta">... </span>    model_init=model_init,
<span class="hljs-meta">... </span>    data_collator=data_collator,
<span class="hljs-meta">... </span>)`,wrap:!1}}),G=new j({props:{code:"YmVzdF90cmlhbCUyMCUzRCUyMHRyYWluZXIuaHlwZXJwYXJhbWV0ZXJfc2VhcmNoKCUwQSUyMCUyMCUyMCUyMGRpcmVjdGlvbiUzRCUyMm1heGltaXplJTIyJTJDJTBBJTIwJTIwJTIwJTIwYmFja2VuZCUzRCUyMm9wdHVuYSUyMiUyQyUwQSUyMCUyMCUyMCUyMGhwX3NwYWNlJTNEb3B0dW5hX2hwX3NwYWNlJTJDJTBBJTIwJTIwJTIwJTIwbl90cmlhbHMlM0QyMCUyQyUwQSUyMCUyMCUyMCUyMGNvbXB1dGVfb2JqZWN0aXZlJTNEY29tcHV0ZV9vYmplY3RpdmUlMkMlMEEp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>best_trial = trainer.hyperparameter_search(
<span class="hljs-meta">... </span>    direction=<span class="hljs-string">&quot;maximize&quot;</span>,
<span class="hljs-meta">... </span>    backend=<span class="hljs-string">&quot;optuna&quot;</span>,
<span class="hljs-meta">... </span>    hp_space=optuna_hp_space,
<span class="hljs-meta">... </span>    n_trials=<span class="hljs-number">20</span>,
<span class="hljs-meta">... </span>    compute_objective=compute_objective,
<span class="hljs-meta">... </span>)`,wrap:!1}}),R=new ds({props:{title:"针对DDP微调的超参数搜索",local:"针对ddp微调的超参数搜索",headingTag:"h2"}}),{c(){o=p("meta"),F=e(),x=p("p"),z=e(),y(U.$$.fragment),E=e(),h=p("p"),h.innerHTML=fs,D=e(),y(w.$$.fragment),L=e(),u=p("p"),u.innerHTML=bs,P=e(),I=p("p"),I.textContent=_s,K=e(),y(d.$$.fragment),O=e(),y(C.$$.fragment),ss=e(),f=p("p"),f.textContent=gs,as=e(),b=p("p"),b.innerHTML=$s,ls=e(),y(_.$$.fragment),ts=e(),g=p("p"),g.innerHTML=qs,es=e(),y($.$$.fragment),ns=e(),q=p("p"),q.innerHTML=Xs,ps=e(),y(X.$$.fragment),Ms=e(),W=p("p"),W.innerHTML=Ws,is=e(),y(B.$$.fragment),ys=e(),Z=p("p"),Z.innerHTML=Bs,Js=e(),y(Y.$$.fragment),cs=e(),V=p("p"),V.innerHTML=Zs,ms=e(),y(v.$$.fragment),rs=e(),Q=p("p"),Q.innerHTML=Ys,Ts=e(),y(k.$$.fragment),os=e(),A=p("p"),A.innerHTML=Vs,js=e(),N=p("p"),N.textContent=vs,Us=e(),y(G.$$.fragment),hs=e(),y(R.$$.fragment),ws=e(),H=p("p"),H.textContent=Qs,us=e(),S=p("p"),this.h()},l(s){const a=Ss("svelte-u9bgzb",document.head);o=M(a,"META",{name:!0,content:!0}),a.forEach(l),F=n(s),x=M(s,"P",{}),ks(x).forEach(l),z=n(s),J(U.$$.fragment,s),E=n(s),h=M(s,"P",{"data-svelte-h":!0}),i(h)!=="svelte-8j0u42"&&(h.innerHTML=fs),D=n(s),J(w.$$.fragment,s),L=n(s),u=M(s,"P",{"data-svelte-h":!0}),i(u)!=="svelte-as9xxk"&&(u.innerHTML=bs),P=n(s),I=M(s,"P",{"data-svelte-h":!0}),i(I)!=="svelte-1owi0b4"&&(I.textContent=_s),K=n(s),J(d.$$.fragment,s),O=n(s),J(C.$$.fragment,s),ss=n(s),f=M(s,"P",{"data-svelte-h":!0}),i(f)!=="svelte-3ulmkt"&&(f.textContent=gs),as=n(s),b=M(s,"P",{"data-svelte-h":!0}),i(b)!=="svelte-s7uas8"&&(b.innerHTML=$s),ls=n(s),J(_.$$.fragment,s),ts=n(s),g=M(s,"P",{"data-svelte-h":!0}),i(g)!=="svelte-1q93awm"&&(g.innerHTML=qs),es=n(s),J($.$$.fragment,s),ns=n(s),q=M(s,"P",{"data-svelte-h":!0}),i(q)!=="svelte-1ocmljl"&&(q.innerHTML=Xs),ps=n(s),J(X.$$.fragment,s),Ms=n(s),W=M(s,"P",{"data-svelte-h":!0}),i(W)!=="svelte-1w57ahn"&&(W.innerHTML=Ws),is=n(s),J(B.$$.fragment,s),ys=n(s),Z=M(s,"P",{"data-svelte-h":!0}),i(Z)!=="svelte-j3ax4r"&&(Z.innerHTML=Bs),Js=n(s),J(Y.$$.fragment,s),cs=n(s),V=M(s,"P",{"data-svelte-h":!0}),i(V)!=="svelte-1ik81ii"&&(V.innerHTML=Zs),ms=n(s),J(v.$$.fragment,s),rs=n(s),Q=M(s,"P",{"data-svelte-h":!0}),i(Q)!=="svelte-w9fjru"&&(Q.innerHTML=Ys),Ts=n(s),J(k.$$.fragment,s),os=n(s),A=M(s,"P",{"data-svelte-h":!0}),i(A)!=="svelte-1fogicn"&&(A.innerHTML=Vs),js=n(s),N=M(s,"P",{"data-svelte-h":!0}),i(N)!=="svelte-1k3ogdl"&&(N.textContent=vs),Us=n(s),J(G.$$.fragment,s),hs=n(s),J(R.$$.fragment,s),ws=n(s),H=M(s,"P",{"data-svelte-h":!0}),i(H)!=="svelte-wf0c68"&&(H.textContent=Qs),us=n(s),S=M(s,"P",{}),ks(S).forEach(l),this.h()},h(){As(o,"name","hf:doc:metadata"),As(o,"content",Es)},m(s,a){Fs(document.head,o),t(s,F,a),t(s,x,a),t(s,z,a),c(U,s,a),t(s,E,a),t(s,h,a),t(s,D,a),c(w,s,a),t(s,L,a),t(s,u,a),t(s,P,a),t(s,I,a),t(s,K,a),c(d,s,a),t(s,O,a),c(C,s,a),t(s,ss,a),t(s,f,a),t(s,as,a),t(s,b,a),t(s,ls,a),c(_,s,a),t(s,ts,a),t(s,g,a),t(s,es,a),c($,s,a),t(s,ns,a),t(s,q,a),t(s,ps,a),c(X,s,a),t(s,Ms,a),t(s,W,a),t(s,is,a),c(B,s,a),t(s,ys,a),t(s,Z,a),t(s,Js,a),c(Y,s,a),t(s,cs,a),t(s,V,a),t(s,ms,a),c(v,s,a),t(s,rs,a),t(s,Q,a),t(s,Ts,a),c(k,s,a),t(s,os,a),t(s,A,a),t(s,js,a),t(s,N,a),t(s,Us,a),c(G,s,a),t(s,hs,a),c(R,s,a),t(s,ws,a),t(s,H,a),t(s,us,a),t(s,S,a),Is=!0},p:Gs,i(s){Is||(m(U.$$.fragment,s),m(w.$$.fragment,s),m(d.$$.fragment,s),m(C.$$.fragment,s),m(_.$$.fragment,s),m($.$$.fragment,s),m(X.$$.fragment,s),m(B.$$.fragment,s),m(Y.$$.fragment,s),m(v.$$.fragment,s),m(k.$$.fragment,s),m(G.$$.fragment,s),m(R.$$.fragment,s),Is=!0)},o(s){r(U.$$.fragment,s),r(w.$$.fragment,s),r(d.$$.fragment,s),r(C.$$.fragment,s),r(_.$$.fragment,s),r($.$$.fragment,s),r(X.$$.fragment,s),r(B.$$.fragment,s),r(Y.$$.fragment,s),r(v.$$.fragment,s),r(k.$$.fragment,s),r(G.$$.fragment,s),r(R.$$.fragment,s),Is=!1},d(s){s&&(l(F),l(x),l(z),l(E),l(h),l(D),l(L),l(u),l(P),l(I),l(K),l(O),l(ss),l(f),l(as),l(b),l(ls),l(ts),l(g),l(es),l(ns),l(q),l(ps),l(Ms),l(W),l(is),l(ys),l(Z),l(Js),l(cs),l(V),l(ms),l(rs),l(Q),l(Ts),l(os),l(A),l(js),l(N),l(Us),l(hs),l(ws),l(H),l(us),l(S)),l(o),T(U,s),T(w,s),T(d,s),T(C,s),T(_,s),T($,s),T(X,s),T(B,s),T(Y,s),T(v,s),T(k,s),T(G,s),T(R,s)}}}const Es='{"title":"使用Trainer API进行超参数搜索","local":"使用trainer-api进行超参数搜索","sections":[{"title":"超参数搜索后端","local":"超参数搜索后端","sections":[],"depth":2},{"title":"如何在示例中启用超参数搜索","local":"如何在示例中启用超参数搜索","sections":[],"depth":2},{"title":"针对DDP微调的超参数搜索","local":"针对ddp微调的超参数搜索","sections":[],"depth":2}],"depth":1}';function Ds(Cs){return Rs(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class sa extends Hs{constructor(o){super(),xs(this,o,Ds,zs,Ns,{})}}export{sa as component};
