import{s as ta,o as la,n as ds}from"../chunks/scheduler.d586627e.js";import{S as na,i as pa,g as w,s as c,r as u,A as oa,h as $,f as t,c as m,j as Os,u as M,x as T,k as sa,y as ra,a as n,v as j,d as f,t as h,w as g}from"../chunks/index.8589a59c.js";import{T as Xs}from"../chunks/Tip.84e2336e.js";import{Y as aa}from"../chunks/Youtube.49101e7b.js";import{C as Z}from"../chunks/CodeBlock.47c46d2c.js";import{F as ea,M as Es}from"../chunks/Markdown.67fc2fa9.js";import{H as zs}from"../chunks/Heading.a70e045b.js";function ia(J){let a,o='Consulte a <a href="https://huggingface.co/tasks/token-classification" rel="nofollow">página de tarefas de classificação de tokens</a> para obter mais informações sobre outras formas de classificação de tokens e seus modelos, conjuntos de dados e métricas associadas.';return{c(){a=w("p"),a.innerHTML=o},l(e){a=$(e,"P",{"data-svelte-h":!0}),T(a)!=="svelte-dbkroz"&&(a.innerHTML=o)},m(e,r){n(e,a,r)},p:ds,d(e){e&&t(a)}}}function ca(J){let a,o;return a=new Z({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMERhdGFDb2xsYXRvckZvclRva2VuQ2xhc3NpZmljYXRpb24lMEElMEFkYXRhX2NvbGxhdG9yJTIwJTNEJTIwRGF0YUNvbGxhdG9yRm9yVG9rZW5DbGFzc2lmaWNhdGlvbih0b2tlbml6ZXIlM0R0b2tlbml6ZXIp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DataCollatorForTokenClassification(tokenizer=tokenizer)`,wrap:!1}}),{c(){u(a.$$.fragment)},l(e){M(a.$$.fragment,e)},m(e,r){j(a,e,r),o=!0},p:ds,i(e){o||(f(a.$$.fragment,e),o=!0)},o(e){h(a.$$.fragment,e),o=!1},d(e){g(a,e)}}}function ma(J){let a,o;return a=new Es({props:{$$slots:{default:[ca]},$$scope:{ctx:J}}}),{c(){u(a.$$.fragment)},l(e){M(a.$$.fragment,e)},m(e,r){j(a,e,r),o=!0},p(e,r){const b={};r&2&&(b.$$scope={dirty:r,ctx:e}),a.$set(b)},i(e){o||(f(a.$$.fragment,e),o=!0)},o(e){h(a.$$.fragment,e),o=!1},d(e){g(a,e)}}}function da(J){let a,o;return a=new Z({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMERhdGFDb2xsYXRvckZvclRva2VuQ2xhc3NpZmljYXRpb24lMEElMEFkYXRhX2NvbGxhdG9yJTIwJTNEJTIwRGF0YUNvbGxhdG9yRm9yVG9rZW5DbGFzc2lmaWNhdGlvbih0b2tlbml6ZXIlM0R0b2tlbml6ZXIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DataCollatorForTokenClassification(tokenizer=tokenizer, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)`,wrap:!1}}),{c(){u(a.$$.fragment)},l(e){M(a.$$.fragment,e)},m(e,r){j(a,e,r),o=!0},p:ds,i(e){o||(f(a.$$.fragment,e),o=!0)},o(e){h(a.$$.fragment,e),o=!1},d(e){g(a,e)}}}function ua(J){let a,o;return a=new Es({props:{$$slots:{default:[da]},$$scope:{ctx:J}}}),{c(){u(a.$$.fragment)},l(e){M(a.$$.fragment,e)},m(e,r){j(a,e,r),o=!0},p(e,r){const b={};r&2&&(b.$$scope={dirty:r,ctx:e}),a.$set(b)},i(e){o||(f(a.$$.fragment,e),o=!0)},o(e){h(a.$$.fragment,e),o=!1},d(e){g(a,e)}}}function Ma(J){let a,o='Se você não estiver familiarizado com o fine-tuning de um modelo com o <code>Trainer</code>, dê uma olhada no tutorial básico <a href="../training#finetune-with-trainer">aqui</a>!';return{c(){a=w("p"),a.innerHTML=o},l(e){a=$(e,"P",{"data-svelte-h":!0}),T(a)!=="svelte-796e4s"&&(a.innerHTML=o)},m(e,r){n(e,a,r)},p:ds,d(e){e&&t(a)}}}function ja(J){let a,o="Carregue o DistilBERT com o <code>AutoModelForTokenClassification</code> junto com o número de rótulos esperados:",e,r,b,x,C,U,A="Nesse ponto, restam apenas três passos:",W,_,v="<li>Definir seus hiperparâmetros de treinamento em <code>TrainingArguments</code>.</li> <li>Passar os argumentos de treinamento para o <code>Trainer</code> junto com o modelo, conjunto de dados, tokenizador e o data collator.</li> <li>Chamar a função <code>train()</code> para executar o fine-tuning do seu modelo.</li>",I,G,k;return r=new Z({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Nb2RlbEZvclRva2VuQ2xhc3NpZmljYXRpb24lMkMlMjBUcmFpbmluZ0FyZ3VtZW50cyUyQyUyMFRyYWluZXIlMEElMEFtb2RlbCUyMCUzRCUyMEF1dG9Nb2RlbEZvclRva2VuQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmRpc3RpbGJlcnQlMkZkaXN0aWxiZXJ0LWJhc2UtdW5jYXNlZCUyMiUyQyUyMG51bV9sYWJlbHMlM0QxNCk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForTokenClassification, TrainingArguments, Trainer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert/distilbert-base-uncased&quot;</span>, num_labels=<span class="hljs-number">14</span>)`,wrap:!1}}),x=new Xs({props:{$$slots:{default:[Ma]},$$scope:{ctx:J}}}),G=new Z({props:{code:"dHJhaW5pbmdfYXJncyUyMCUzRCUyMFRyYWluaW5nQXJndW1lbnRzKCUwQSUyMCUyMCUyMCUyMG91dHB1dF9kaXIlM0QlMjIuJTJGcmVzdWx0cyUyMiUyQyUwQSUyMCUyMCUyMCUyMGV2YWx1YXRpb25fc3RyYXRlZ3klM0QlMjJlcG9jaCUyMiUyQyUwQSUyMCUyMCUyMCUyMGxlYXJuaW5nX3JhdGUlM0QyZS01JTJDJTBBJTIwJTIwJTIwJTIwcGVyX2RldmljZV90cmFpbl9iYXRjaF9zaXplJTNEMTYlMkMlMEElMjAlMjAlMjAlMjBwZXJfZGV2aWNlX2V2YWxfYmF0Y2hfc2l6ZSUzRDE2JTJDJTBBJTIwJTIwJTIwJTIwbnVtX3RyYWluX2Vwb2NocyUzRDMlMkMlMEElMjAlMjAlMjAlMjB3ZWlnaHRfZGVjYXklM0QwLjAxJTJDJTBBKSUwQSUwQXRyYWluZXIlMjAlM0QlMjBUcmFpbmVyKCUwQSUyMCUyMCUyMCUyMG1vZGVsJTNEbW9kZWwlMkMlMEElMjAlMjAlMjAlMjBhcmdzJTNEdHJhaW5pbmdfYXJncyUyQyUwQSUyMCUyMCUyMCUyMHRyYWluX2RhdGFzZXQlM0R0b2tlbml6ZWRfd251dCU1QiUyMnRyYWluJTIyJTVEJTJDJTBBJTIwJTIwJTIwJTIwZXZhbF9kYXRhc2V0JTNEdG9rZW5pemVkX3dudXQlNUIlMjJ0ZXN0JTIyJTVEJTJDJTBBJTIwJTIwJTIwJTIwdG9rZW5pemVyJTNEdG9rZW5pemVyJTJDJTBBJTIwJTIwJTIwJTIwZGF0YV9jb2xsYXRvciUzRGRhdGFfY29sbGF0b3IlMkMlMEEpJTBBJTBBdHJhaW5lci50cmFpbigp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>training_args = TrainingArguments(
<span class="hljs-meta">... </span>    output_dir=<span class="hljs-string">&quot;./results&quot;</span>,
<span class="hljs-meta">... </span>    evaluation_strategy=<span class="hljs-string">&quot;epoch&quot;</span>,
<span class="hljs-meta">... </span>    learning_rate=<span class="hljs-number">2e-5</span>,
<span class="hljs-meta">... </span>    per_device_train_batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    per_device_eval_batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    num_train_epochs=<span class="hljs-number">3</span>,
<span class="hljs-meta">... </span>    weight_decay=<span class="hljs-number">0.01</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer = Trainer(
<span class="hljs-meta">... </span>    model=model,
<span class="hljs-meta">... </span>    args=training_args,
<span class="hljs-meta">... </span>    train_dataset=tokenized_wnut[<span class="hljs-string">&quot;train&quot;</span>],
<span class="hljs-meta">... </span>    eval_dataset=tokenized_wnut[<span class="hljs-string">&quot;test&quot;</span>],
<span class="hljs-meta">... </span>    tokenizer=tokenizer,
<span class="hljs-meta">... </span>    data_collator=data_collator,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer.train()`,wrap:!1}}),{c(){a=w("p"),a.innerHTML=o,e=c(),u(r.$$.fragment),b=c(),u(x.$$.fragment),C=c(),U=w("p"),U.textContent=A,W=c(),_=w("ol"),_.innerHTML=v,I=c(),u(G.$$.fragment)},l(i){a=$(i,"P",{"data-svelte-h":!0}),T(a)!=="svelte-1vwp4j2"&&(a.innerHTML=o),e=m(i),M(r.$$.fragment,i),b=m(i),M(x.$$.fragment,i),C=m(i),U=$(i,"P",{"data-svelte-h":!0}),T(U)!=="svelte-1dd35iq"&&(U.textContent=A),W=m(i),_=$(i,"OL",{"data-svelte-h":!0}),T(_)!=="svelte-1aiypan"&&(_.innerHTML=v),I=m(i),M(G.$$.fragment,i)},m(i,y){n(i,a,y),n(i,e,y),j(r,i,y),n(i,b,y),j(x,i,y),n(i,C,y),n(i,U,y),n(i,W,y),n(i,_,y),n(i,I,y),j(G,i,y),k=!0},p(i,y){const R={};y&2&&(R.$$scope={dirty:y,ctx:i}),x.$set(R)},i(i){k||(f(r.$$.fragment,i),f(x.$$.fragment,i),f(G.$$.fragment,i),k=!0)},o(i){h(r.$$.fragment,i),h(x.$$.fragment,i),h(G.$$.fragment,i),k=!1},d(i){i&&(t(a),t(e),t(b),t(C),t(U),t(W),t(_),t(I)),g(r,i),g(x,i),g(G,i)}}}function fa(J){let a,o;return a=new Es({props:{$$slots:{default:[ja]},$$scope:{ctx:J}}}),{c(){u(a.$$.fragment)},l(e){M(a.$$.fragment,e)},m(e,r){j(a,e,r),o=!0},p(e,r){const b={};r&2&&(b.$$scope={dirty:r,ctx:e}),a.$set(b)},i(e){o||(f(a.$$.fragment,e),o=!0)},o(e){h(a.$$.fragment,e),o=!1},d(e){g(a,e)}}}function ha(J){let a,o='Se você não estiver familiarizado com o fine-tuning de um modelo com o Keras, dê uma olhada no tutorial básico <a href="training#finetune-with-keras">aqui</a>!';return{c(){a=w("p"),a.innerHTML=o},l(e){a=$(e,"P",{"data-svelte-h":!0}),T(a)!=="svelte-1vtmrxe"&&(a.innerHTML=o)},m(e,r){n(e,a,r)},p:ds,d(e){e&&t(a)}}}function ga(J){let a,o='Para executar o fine-tuning de um modelo no TensorFlow, comece convertendo seu conjunto de dados para o formato <code>tf.data.Dataset</code> com <a href="https://huggingface.co/docs/datasets/package_reference/main_classes#datasets.Dataset.to_tf_dataset" rel="nofollow"><code>to_tf_dataset</code></a>. Nessa execução você deverá especificar as entradas e rótulos (no parâmetro <code>columns</code>), se deseja embaralhar o conjunto de dados, o tamanho do batch e o data collator:',e,r,b,x,C,U,A="Configure o otimizador e alguns hiperparâmetros de treinamento:",W,_,v,I,G="Carregue o DistilBERT com o <code>TFAutoModelForTokenClassification</code> junto com o número de rótulos esperados:",k,i,y,R,F='Configure o modelo para treinamento com o método <a href="https://keras.io/api/models/model_training_apis/#compile-method" rel="nofollow"><code>compile</code></a>:',Q,z,X,E,Y='Chame o método <a href="https://keras.io/api/models/model_training_apis/#fit-method" rel="nofollow"><code>fit</code></a> para executar o fine-tuning do modelo:',L,B,V;return r=new Z({props:{code:"dGZfdHJhaW5fc2V0JTIwJTNEJTIwdG9rZW5pemVkX3dudXQlNUIlMjJ0cmFpbiUyMiU1RC50b190Zl9kYXRhc2V0KCUwQSUyMCUyMCUyMCUyMGNvbHVtbnMlM0QlNUIlMjJhdHRlbnRpb25fbWFzayUyMiUyQyUyMCUyMmlucHV0X2lkcyUyMiUyQyUyMCUyMmxhYmVscyUyMiU1RCUyQyUwQSUyMCUyMCUyMCUyMHNodWZmbGUlM0RUcnVlJTJDJTBBJTIwJTIwJTIwJTIwYmF0Y2hfc2l6ZSUzRDE2JTJDJTBBJTIwJTIwJTIwJTIwY29sbGF0ZV9mbiUzRGRhdGFfY29sbGF0b3IlMkMlMEEpJTBBJTBBdGZfdmFsaWRhdGlvbl9zZXQlMjAlM0QlMjB0b2tlbml6ZWRfd251dCU1QiUyMnZhbGlkYXRpb24lMjIlNUQudG9fdGZfZGF0YXNldCglMEElMjAlMjAlMjAlMjBjb2x1bW5zJTNEJTVCJTIyYXR0ZW50aW9uX21hc2slMjIlMkMlMjAlMjJpbnB1dF9pZHMlMjIlMkMlMjAlMjJsYWJlbHMlMjIlNUQlMkMlMEElMjAlMjAlMjAlMjBzaHVmZmxlJTNERmFsc2UlMkMlMEElMjAlMjAlMjAlMjBiYXRjaF9zaXplJTNEMTYlMkMlMEElMjAlMjAlMjAlMjBjb2xsYXRlX2ZuJTNEZGF0YV9jb2xsYXRvciUyQyUwQSk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>tf_train_set = tokenized_wnut[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
<span class="hljs-meta">... </span>    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;labels&quot;</span>],
<span class="hljs-meta">... </span>    shuffle=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    collate_fn=data_collator,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tf_validation_set = tokenized_wnut[<span class="hljs-string">&quot;validation&quot;</span>].to_tf_dataset(
<span class="hljs-meta">... </span>    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;labels&quot;</span>],
<span class="hljs-meta">... </span>    shuffle=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>    batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    collate_fn=data_collator,
<span class="hljs-meta">... </span>)`,wrap:!1}}),x=new Xs({props:{$$slots:{default:[ha]},$$scope:{ctx:J}}}),_=new Z({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMGNyZWF0ZV9vcHRpbWl6ZXIlMEElMEFiYXRjaF9zaXplJTIwJTNEJTIwMTYlMEFudW1fdHJhaW5fZXBvY2hzJTIwJTNEJTIwMyUwQW51bV90cmFpbl9zdGVwcyUyMCUzRCUyMChsZW4odG9rZW5pemVkX3dudXQlNUIlMjJ0cmFpbiUyMiU1RCklMjAlMkYlMkYlMjBiYXRjaF9zaXplKSUyMColMjBudW1fdHJhaW5fZXBvY2hzJTBBb3B0aW1pemVyJTJDJTIwbHJfc2NoZWR1bGUlMjAlM0QlMjBjcmVhdGVfb3B0aW1pemVyKCUwQSUyMCUyMCUyMCUyMGluaXRfbHIlM0QyZS01JTJDJTBBJTIwJTIwJTIwJTIwbnVtX3RyYWluX3N0ZXBzJTNEbnVtX3RyYWluX3N0ZXBzJTJDJTBBJTIwJTIwJTIwJTIwd2VpZ2h0X2RlY2F5X3JhdGUlM0QwLjAxJTJDJTBBJTIwJTIwJTIwJTIwbnVtX3dhcm11cF9zdGVwcyUzRDAlMkMlMEEp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> create_optimizer

<span class="hljs-meta">&gt;&gt;&gt; </span>batch_size = <span class="hljs-number">16</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_train_epochs = <span class="hljs-number">3</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_train_steps = (<span class="hljs-built_in">len</span>(tokenized_wnut[<span class="hljs-string">&quot;train&quot;</span>]) // batch_size) * num_train_epochs
<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer, lr_schedule = create_optimizer(
<span class="hljs-meta">... </span>    init_lr=<span class="hljs-number">2e-5</span>,
<span class="hljs-meta">... </span>    num_train_steps=num_train_steps,
<span class="hljs-meta">... </span>    weight_decay_rate=<span class="hljs-number">0.01</span>,
<span class="hljs-meta">... </span>    num_warmup_steps=<span class="hljs-number">0</span>,
<span class="hljs-meta">... </span>)`,wrap:!1}}),i=new Z({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFRGQXV0b01vZGVsRm9yVG9rZW5DbGFzc2lmaWNhdGlvbiUwQSUwQW1vZGVsJTIwJTNEJTIwVEZBdXRvTW9kZWxGb3JUb2tlbkNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJkaXN0aWxiZXJ0JTJGZGlzdGlsYmVydC1iYXNlLXVuY2FzZWQlMjIlMkMlMjBudW1fbGFiZWxzJTNEMik=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForTokenClassification.from_pretrained(<span class="hljs-string">&quot;distilbert/distilbert-base-uncased&quot;</span>, num_labels=<span class="hljs-number">2</span>)`,wrap:!1}}),z=new Z({props:{code:"aW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEElMEFtb2RlbC5jb21waWxlKG9wdGltaXplciUzRG9wdGltaXplcik=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>model.<span class="hljs-built_in">compile</span>(optimizer=optimizer)`,wrap:!1}}),B=new Z({props:{code:"bW9kZWwuZml0KHglM0R0Zl90cmFpbl9zZXQlMkMlMjB2YWxpZGF0aW9uX2RhdGElM0R0Zl92YWxpZGF0aW9uX3NldCUyQyUyMGVwb2NocyUzRDMp",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model.fit(x=tf_train_set, validation_data=tf_validation_set, epochs=<span class="hljs-number">3</span>)',wrap:!1}}),{c(){a=w("p"),a.innerHTML=o,e=c(),u(r.$$.fragment),b=c(),u(x.$$.fragment),C=c(),U=w("p"),U.textContent=A,W=c(),u(_.$$.fragment),v=c(),I=w("p"),I.innerHTML=G,k=c(),u(i.$$.fragment),y=c(),R=w("p"),R.innerHTML=F,Q=c(),u(z.$$.fragment),X=c(),E=w("p"),E.innerHTML=Y,L=c(),u(B.$$.fragment)},l(p){a=$(p,"P",{"data-svelte-h":!0}),T(a)!=="svelte-lavla8"&&(a.innerHTML=o),e=m(p),M(r.$$.fragment,p),b=m(p),M(x.$$.fragment,p),C=m(p),U=$(p,"P",{"data-svelte-h":!0}),T(U)!=="svelte-xdplem"&&(U.textContent=A),W=m(p),M(_.$$.fragment,p),v=m(p),I=$(p,"P",{"data-svelte-h":!0}),T(I)!=="svelte-1cdpi18"&&(I.innerHTML=G),k=m(p),M(i.$$.fragment,p),y=m(p),R=$(p,"P",{"data-svelte-h":!0}),T(R)!=="svelte-espbvd"&&(R.innerHTML=F),Q=m(p),M(z.$$.fragment,p),X=m(p),E=$(p,"P",{"data-svelte-h":!0}),T(E)!=="svelte-t6x1cw"&&(E.innerHTML=Y),L=m(p),M(B.$$.fragment,p)},m(p,d){n(p,a,d),n(p,e,d),j(r,p,d),n(p,b,d),j(x,p,d),n(p,C,d),n(p,U,d),n(p,W,d),j(_,p,d),n(p,v,d),n(p,I,d),n(p,k,d),j(i,p,d),n(p,y,d),n(p,R,d),n(p,Q,d),j(z,p,d),n(p,X,d),n(p,E,d),n(p,L,d),j(B,p,d),V=!0},p(p,d){const us={};d&2&&(us.$$scope={dirty:d,ctx:p}),x.$set(us)},i(p){V||(f(r.$$.fragment,p),f(x.$$.fragment,p),f(_.$$.fragment,p),f(i.$$.fragment,p),f(z.$$.fragment,p),f(B.$$.fragment,p),V=!0)},o(p){h(r.$$.fragment,p),h(x.$$.fragment,p),h(_.$$.fragment,p),h(i.$$.fragment,p),h(z.$$.fragment,p),h(B.$$.fragment,p),V=!1},d(p){p&&(t(a),t(e),t(b),t(C),t(U),t(W),t(v),t(I),t(k),t(y),t(R),t(Q),t(X),t(E),t(L)),g(r,p),g(x,p),g(_,p),g(i,p),g(z,p),g(B,p)}}}function ba(J){let a,o;return a=new Es({props:{$$slots:{default:[ga]},$$scope:{ctx:J}}}),{c(){u(a.$$.fragment)},l(e){M(a.$$.fragment,e)},m(e,r){j(a,e,r),o=!0},p(e,r){const b={};r&2&&(b.$$scope={dirty:r,ctx:e}),a.$set(b)},i(e){o||(f(a.$$.fragment,e),o=!0)},o(e){h(a.$$.fragment,e),o=!1},d(e){g(a,e)}}}function wa(J){let a,o='Para obter um exemplo mais aprofundado de como executar o fine-tuning de um modelo para classificação de tokens, dê uma olhada nesse <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/token_classification.ipynb" rel="nofollow">notebook utilizando PyTorch</a> ou nesse <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/token_classification-tf.ipynb" rel="nofollow">notebook utilizando TensorFlow</a>.';return{c(){a=w("p"),a.innerHTML=o},l(e){a=$(e,"P",{"data-svelte-h":!0}),T(a)!=="svelte-1evwr8u"&&(a.innerHTML=o)},m(e,r){n(e,a,r)},p:ds,d(e){e&&t(a)}}}function $a(J){let a,o,e,r,b,x,C,U,A,W="A classificação de tokens atribui um rótulo a tokens individuais em uma frase. Uma das tarefas de classificação de tokens mais comuns é o Reconhecimento de Entidade Nomeada, também chamada de NER (sigla em inglês para Named Entity Recognition). O NER tenta encontrar um rótulo para cada entidade em uma frase, como uma pessoa, local ou organização.",_,v,I='Este guia mostrará como realizar o fine-tuning do <a href="https://huggingface.co/distilbert/distilbert-base-uncased" rel="nofollow">DistilBERT</a> no conjunto de dados <a href="https://huggingface.co/datasets/wnut_17" rel="nofollow">WNUT 17</a> para detectar novas entidades.',G,k,i,y,R,F,Q="Carregue o conjunto de dados WNUT 17 da biblioteca 🤗 Datasets:",z,X,E,Y,L="E dê uma olhada em um exemplo:",B,V,p,d,us="Cada número em <code>ner_tags</code> representa uma entidade. Converta o número em um rótulo para obter mais informações:",js,S,fs,D,Bs="O <code>ner_tag</code> descreve uma entidade, como uma organização, local ou pessoa. A letra que prefixa cada <code>ner_tag</code> indica a posição do token da entidade:",hs,P,Vs="<li><code>B-</code> indica o início de uma entidade.</li> <li><code>I-</code> indica que um token está contido dentro da mesma entidade (por exemplo, o token <code>State</code> pode fazer parte de uma entidade como <code>Empire State Building</code>).</li> <li><code>0</code> indica que o token não corresponde a nenhuma entidade.</li>",gs,K,bs,O,ws,ss,Fs="Carregue o tokenizer do DistilBERT para processar os <code>tokens</code>:",$s,as,ys,es,Ys="Como a entrada já foi dividida em palavras, defina <code>is_split_into_words=True</code> para tokenizar as palavras em subpalavras:",Ts,ts,Js,ls,Hs="Ao adicionar os tokens especiais <code>[CLS]</code> e <code>[SEP]</code> e a tokenização de subpalavras uma incompatibilidade é gerada entre a entrada e os rótulos. Uma única palavra correspondente a um único rótulo pode ser dividida em duas subpalavras. Você precisará realinhar os tokens e os rótulos da seguinte forma:",xs,ns,qs='<li>Mapeie todos os tokens para a palavra correspondente com o método <a href="https://huggingface.co/docs/tokenizers/python/latest/api/reference.html#tokenizers.Encoding.word_ids" rel="nofollow"><code>word_ids</code></a>.</li> <li>Atribuindo o rótulo <code>-100</code> aos tokens especiais <code>[CLS]</code> e <code>[SEP]</code> para que a função de loss do PyTorch ignore eles.</li> <li>Rotular apenas o primeiro token de uma determinada palavra. Atribuindo <code>-100</code> a outros subtokens da mesma palavra.</li>',Us,ps,Ns="Aqui está como você pode criar uma função para realinhar os tokens e rótulos e truncar sequências para não serem maiores que o comprimento máximo de entrada do DistilBERT:",_s,os,ks,rs,Qs='Use a função <a href="https://huggingface.co/docs/datasets/process#map" rel="nofollow"><code>map</code></a> do 🤗 Datasets para tokenizar e alinhar os rótulos em todo o conjunto de dados. Você pode acelerar a função <code>map</code> configurando <code>batched=True</code> para processar vários elementos do conjunto de dados de uma só vez:',Cs,is,Zs,cs,Ls="Use o <code>DataCollatorForTokenClassification</code> para criar um batch de exemplos. Ele também <em>preencherá dinamicamente</em> seu texto e rótulos para o comprimento do elemento mais longo em seu batch, para que tenham um comprimento uniforme. Embora seja possível preencher seu texto na função <code>tokenizer</code> configurando <code>padding=True</code>, o preenchimento dinâmico é mais eficiente.",vs,H,Is,ms,Gs,q,Rs,N,As,Ms,Ws;return b=new zs({props:{title:"Classificação de tokens",local:"classificação-de-tokens",headingTag:"h1"}}),C=new aa({props:{id:"wVHdVlPScxA"}}),k=new Xs({props:{$$slots:{default:[ia]},$$scope:{ctx:J}}}),y=new zs({props:{title:"Carregando o conjunto de dados WNUT 17",local:"carregando-o-conjunto-de-dados-wnut-17",headingTag:"h2"}}),X=new Z({props:{code:"ZnJvbSUyMGRhdGFzZXRzJTIwaW1wb3J0JTIwbG9hZF9kYXRhc2V0JTBBJTBBd251dCUyMCUzRCUyMGxvYWRfZGF0YXNldCglMjJ3bnV0XzE3JTIyKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>wnut = load_dataset(<span class="hljs-string">&quot;wnut_17&quot;</span>)`,wrap:!1}}),V=new Z({props:{code:"d251dCU1QiUyMnRyYWluJTIyJTVEJTVCMCU1RA==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>wnut[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;id&#x27;</span>: <span class="hljs-string">&#x27;0&#x27;</span>,
 <span class="hljs-string">&#x27;ner_tags&#x27;</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">8</span>, <span class="hljs-number">0</span>, <span class="hljs-number">7</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>],
 <span class="hljs-string">&#x27;tokens&#x27;</span>: [<span class="hljs-string">&#x27;@paulwalk&#x27;</span>, <span class="hljs-string">&#x27;It&#x27;</span>, <span class="hljs-string">&quot;&#x27;s&quot;</span>, <span class="hljs-string">&#x27;the&#x27;</span>, <span class="hljs-string">&#x27;view&#x27;</span>, <span class="hljs-string">&#x27;from&#x27;</span>, <span class="hljs-string">&#x27;where&#x27;</span>, <span class="hljs-string">&#x27;I&#x27;</span>, <span class="hljs-string">&quot;&#x27;m&quot;</span>, <span class="hljs-string">&#x27;living&#x27;</span>, <span class="hljs-string">&#x27;for&#x27;</span>, <span class="hljs-string">&#x27;two&#x27;</span>, <span class="hljs-string">&#x27;weeks&#x27;</span>, <span class="hljs-string">&#x27;.&#x27;</span>, <span class="hljs-string">&#x27;Empire&#x27;</span>, <span class="hljs-string">&#x27;State&#x27;</span>, <span class="hljs-string">&#x27;Building&#x27;</span>, <span class="hljs-string">&#x27;=&#x27;</span>, <span class="hljs-string">&#x27;ESB&#x27;</span>, <span class="hljs-string">&#x27;.&#x27;</span>, <span class="hljs-string">&#x27;Pretty&#x27;</span>, <span class="hljs-string">&#x27;bad&#x27;</span>, <span class="hljs-string">&#x27;storm&#x27;</span>, <span class="hljs-string">&#x27;here&#x27;</span>, <span class="hljs-string">&#x27;last&#x27;</span>, <span class="hljs-string">&#x27;evening&#x27;</span>, <span class="hljs-string">&#x27;.&#x27;</span>]
}`,wrap:!1}}),S=new Z({props:{code:"bGFiZWxfbGlzdCUyMCUzRCUyMHdudXQlNUIlMjJ0cmFpbiUyMiU1RC5mZWF0dXJlcyU1QmYlMjJuZXJfdGFncyUyMiU1RC5mZWF0dXJlLm5hbWVzJTBBbGFiZWxfbGlzdA==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>label_list = wnut[<span class="hljs-string">&quot;train&quot;</span>].features[<span class="hljs-string">f&quot;ner_tags&quot;</span>].feature.names
<span class="hljs-meta">&gt;&gt;&gt; </span>label_list
[
    <span class="hljs-string">&quot;O&quot;</span>,
    <span class="hljs-string">&quot;B-corporation&quot;</span>,
    <span class="hljs-string">&quot;I-corporation&quot;</span>,
    <span class="hljs-string">&quot;B-creative-work&quot;</span>,
    <span class="hljs-string">&quot;I-creative-work&quot;</span>,
    <span class="hljs-string">&quot;B-group&quot;</span>,
    <span class="hljs-string">&quot;I-group&quot;</span>,
    <span class="hljs-string">&quot;B-location&quot;</span>,
    <span class="hljs-string">&quot;I-location&quot;</span>,
    <span class="hljs-string">&quot;B-person&quot;</span>,
    <span class="hljs-string">&quot;I-person&quot;</span>,
    <span class="hljs-string">&quot;B-product&quot;</span>,
    <span class="hljs-string">&quot;I-product&quot;</span>,
]`,wrap:!1}}),K=new zs({props:{title:"Pré-processamento",local:"pré-processamento",headingTag:"h2"}}),O=new aa({props:{id:"iY2AZYdZAr0"}}),as=new Z({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJkaXN0aWxiZXJ0JTJGZGlzdGlsYmVydC1iYXNlLXVuY2FzZWQlMjIp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert/distilbert-base-uncased&quot;</span>)`,wrap:!1}}),ts=new Z({props:{code:"dG9rZW5pemVkX2lucHV0JTIwJTNEJTIwdG9rZW5pemVyKGV4YW1wbGUlNUIlMjJ0b2tlbnMlMjIlNUQlMkMlMjBpc19zcGxpdF9pbnRvX3dvcmRzJTNEVHJ1ZSklMEF0b2tlbnMlMjAlM0QlMjB0b2tlbml6ZXIuY29udmVydF9pZHNfdG9fdG9rZW5zKHRva2VuaXplZF9pbnB1dCU1QiUyMmlucHV0X2lkcyUyMiU1RCklMEF0b2tlbnM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>tokenized_input = tokenizer(example[<span class="hljs-string">&quot;tokens&quot;</span>], is_split_into_words=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokens = tokenizer.convert_ids_to_tokens(tokenized_input[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>tokens
[<span class="hljs-string">&#x27;[CLS]&#x27;</span>, <span class="hljs-string">&#x27;@&#x27;</span>, <span class="hljs-string">&#x27;paul&#x27;</span>, <span class="hljs-string">&#x27;##walk&#x27;</span>, <span class="hljs-string">&#x27;it&#x27;</span>, <span class="hljs-string">&quot;&#x27;&quot;</span>, <span class="hljs-string">&#x27;s&#x27;</span>, <span class="hljs-string">&#x27;the&#x27;</span>, <span class="hljs-string">&#x27;view&#x27;</span>, <span class="hljs-string">&#x27;from&#x27;</span>, <span class="hljs-string">&#x27;where&#x27;</span>, <span class="hljs-string">&#x27;i&#x27;</span>, <span class="hljs-string">&quot;&#x27;&quot;</span>, <span class="hljs-string">&#x27;m&#x27;</span>, <span class="hljs-string">&#x27;living&#x27;</span>, <span class="hljs-string">&#x27;for&#x27;</span>, <span class="hljs-string">&#x27;two&#x27;</span>, <span class="hljs-string">&#x27;weeks&#x27;</span>, <span class="hljs-string">&#x27;.&#x27;</span>, <span class="hljs-string">&#x27;empire&#x27;</span>, <span class="hljs-string">&#x27;state&#x27;</span>, <span class="hljs-string">&#x27;building&#x27;</span>, <span class="hljs-string">&#x27;=&#x27;</span>, <span class="hljs-string">&#x27;es&#x27;</span>, <span class="hljs-string">&#x27;##b&#x27;</span>, <span class="hljs-string">&#x27;.&#x27;</span>, <span class="hljs-string">&#x27;pretty&#x27;</span>, <span class="hljs-string">&#x27;bad&#x27;</span>, <span class="hljs-string">&#x27;storm&#x27;</span>, <span class="hljs-string">&#x27;here&#x27;</span>, <span class="hljs-string">&#x27;last&#x27;</span>, <span class="hljs-string">&#x27;evening&#x27;</span>, <span class="hljs-string">&#x27;.&#x27;</span>, <span class="hljs-string">&#x27;[SEP]&#x27;</span>]`,wrap:!1}}),os=new Z({props:{code:"ZGVmJTIwdG9rZW5pemVfYW5kX2FsaWduX2xhYmVscyhleGFtcGxlcyklM0ElMEElMjAlMjAlMjAlMjB0b2tlbml6ZWRfaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKGV4YW1wbGVzJTVCJTIydG9rZW5zJTIyJTVEJTJDJTIwdHJ1bmNhdGlvbiUzRFRydWUlMkMlMjBpc19zcGxpdF9pbnRvX3dvcmRzJTNEVHJ1ZSklMEElMEElMjAlMjAlMjAlMjBsYWJlbHMlMjAlM0QlMjAlNUIlNUQlMEElMjAlMjAlMjAlMjBmb3IlMjBpJTJDJTIwbGFiZWwlMjBpbiUyMGVudW1lcmF0ZShleGFtcGxlcyU1QmYlMjJuZXJfdGFncyUyMiU1RCklM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjB3b3JkX2lkcyUyMCUzRCUyMHRva2VuaXplZF9pbnB1dHMud29yZF9pZHMoYmF0Y2hfaW5kZXglM0RpKSUyMCUyMCUyMyUyME1hcCUyMHRva2VucyUyMHRvJTIwdGhlaXIlMjByZXNwZWN0aXZlJTIwd29yZC4lMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBwcmV2aW91c193b3JkX2lkeCUyMCUzRCUyME5vbmUlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBsYWJlbF9pZHMlMjAlM0QlMjAlNUIlNUQlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBmb3IlMjB3b3JkX2lkeCUyMGluJTIwd29yZF9pZHMlM0ElMjAlMjAlMjMlMjBTZXQlMjB0aGUlMjBzcGVjaWFsJTIwdG9rZW5zJTIwdG8lMjAtMTAwLiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMGlmJTIwd29yZF9pZHglMjBpcyUyME5vbmUlM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBsYWJlbF9pZHMuYXBwZW5kKC0xMDApJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwZWxpZiUyMHdvcmRfaWR4JTIwISUzRCUyMHByZXZpb3VzX3dvcmRfaWR4JTNBJTIwJTIwJTIzJTIwT25seSUyMGxhYmVsJTIwdGhlJTIwZmlyc3QlMjB0b2tlbiUyMG9mJTIwYSUyMGdpdmVuJTIwd29yZC4lMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBsYWJlbF9pZHMuYXBwZW5kKGxhYmVsJTVCd29yZF9pZHglNUQpJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwZWxzZSUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMGxhYmVsX2lkcy5hcHBlbmQoLTEwMCklMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBwcmV2aW91c193b3JkX2lkeCUyMCUzRCUyMHdvcmRfaWR4JTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwbGFiZWxzLmFwcGVuZChsYWJlbF9pZHMpJTBBJTBBJTIwJTIwJTIwJTIwdG9rZW5pemVkX2lucHV0cyU1QiUyMmxhYmVscyUyMiU1RCUyMCUzRCUyMGxhYmVscyUwQSUyMCUyMCUyMCUyMHJldHVybiUyMHRva2VuaXplZF9pbnB1dHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">tokenize_and_align_labels</span>(<span class="hljs-params">examples</span>):
<span class="hljs-meta">... </span>    tokenized_inputs = tokenizer(examples[<span class="hljs-string">&quot;tokens&quot;</span>], truncation=<span class="hljs-literal">True</span>, is_split_into_words=<span class="hljs-literal">True</span>)

<span class="hljs-meta">... </span>    labels = []
<span class="hljs-meta">... </span>    <span class="hljs-keyword">for</span> i, label <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(examples[<span class="hljs-string">f&quot;ner_tags&quot;</span>]):
<span class="hljs-meta">... </span>        word_ids = tokenized_inputs.word_ids(batch_index=i)  <span class="hljs-comment"># Map tokens to their respective word.</span>
<span class="hljs-meta">... </span>        previous_word_idx = <span class="hljs-literal">None</span>
<span class="hljs-meta">... </span>        label_ids = []
<span class="hljs-meta">... </span>        <span class="hljs-keyword">for</span> word_idx <span class="hljs-keyword">in</span> word_ids:  <span class="hljs-comment"># Set the special tokens to -100.</span>
<span class="hljs-meta">... </span>            <span class="hljs-keyword">if</span> word_idx <span class="hljs-keyword">is</span> <span class="hljs-literal">None</span>:
<span class="hljs-meta">... </span>                label_ids.append(-<span class="hljs-number">100</span>)
<span class="hljs-meta">... </span>            <span class="hljs-keyword">elif</span> word_idx != previous_word_idx:  <span class="hljs-comment"># Only label the first token of a given word.</span>
<span class="hljs-meta">... </span>                label_ids.append(label[word_idx])
<span class="hljs-meta">... </span>            <span class="hljs-keyword">else</span>:
<span class="hljs-meta">... </span>                label_ids.append(-<span class="hljs-number">100</span>)
<span class="hljs-meta">... </span>            previous_word_idx = word_idx
<span class="hljs-meta">... </span>        labels.append(label_ids)

<span class="hljs-meta">... </span>    tokenized_inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> tokenized_inputs`,wrap:!1}}),is=new Z({props:{code:"dG9rZW5pemVkX3dudXQlMjAlM0QlMjB3bnV0Lm1hcCh0b2tlbml6ZV9hbmRfYWxpZ25fbGFiZWxzJTJDJTIwYmF0Y2hlZCUzRFRydWUp",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>tokenized_wnut = wnut.<span class="hljs-built_in">map</span>(tokenize_and_align_labels, batched=<span class="hljs-literal">True</span>)',wrap:!1}}),H=new ea({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[ua],pytorch:[ma]},$$scope:{ctx:J}}}),ms=new zs({props:{title:"Treinamento",local:"treinamento",headingTag:"h2"}}),q=new ea({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[ba],pytorch:[fa]},$$scope:{ctx:J}}}),N=new Xs({props:{$$slots:{default:[wa]},$$scope:{ctx:J}}}),{c(){a=w("meta"),o=c(),e=w("p"),r=c(),u(b.$$.fragment),x=c(),u(C.$$.fragment),U=c(),A=w("p"),A.textContent=W,_=c(),v=w("p"),v.innerHTML=I,G=c(),u(k.$$.fragment),i=c(),u(y.$$.fragment),R=c(),F=w("p"),F.textContent=Q,z=c(),u(X.$$.fragment),E=c(),Y=w("p"),Y.textContent=L,B=c(),u(V.$$.fragment),p=c(),d=w("p"),d.innerHTML=us,js=c(),u(S.$$.fragment),fs=c(),D=w("p"),D.innerHTML=Bs,hs=c(),P=w("ul"),P.innerHTML=Vs,gs=c(),u(K.$$.fragment),bs=c(),u(O.$$.fragment),ws=c(),ss=w("p"),ss.innerHTML=Fs,$s=c(),u(as.$$.fragment),ys=c(),es=w("p"),es.innerHTML=Ys,Ts=c(),u(ts.$$.fragment),Js=c(),ls=w("p"),ls.innerHTML=Hs,xs=c(),ns=w("ol"),ns.innerHTML=qs,Us=c(),ps=w("p"),ps.textContent=Ns,_s=c(),u(os.$$.fragment),ks=c(),rs=w("p"),rs.innerHTML=Qs,Cs=c(),u(is.$$.fragment),Zs=c(),cs=w("p"),cs.innerHTML=Ls,vs=c(),u(H.$$.fragment),Is=c(),u(ms.$$.fragment),Gs=c(),u(q.$$.fragment),Rs=c(),u(N.$$.fragment),As=c(),Ms=w("p"),this.h()},l(s){const l=oa("svelte-u9bgzb",document.head);a=$(l,"META",{name:!0,content:!0}),l.forEach(t),o=m(s),e=$(s,"P",{}),Os(e).forEach(t),r=m(s),M(b.$$.fragment,s),x=m(s),M(C.$$.fragment,s),U=m(s),A=$(s,"P",{"data-svelte-h":!0}),T(A)!=="svelte-2rm2e9"&&(A.textContent=W),_=m(s),v=$(s,"P",{"data-svelte-h":!0}),T(v)!=="svelte-kmg05x"&&(v.innerHTML=I),G=m(s),M(k.$$.fragment,s),i=m(s),M(y.$$.fragment,s),R=m(s),F=$(s,"P",{"data-svelte-h":!0}),T(F)!=="svelte-3wpxsw"&&(F.textContent=Q),z=m(s),M(X.$$.fragment,s),E=m(s),Y=$(s,"P",{"data-svelte-h":!0}),T(Y)!=="svelte-1vbpr8z"&&(Y.textContent=L),B=m(s),M(V.$$.fragment,s),p=m(s),d=$(s,"P",{"data-svelte-h":!0}),T(d)!=="svelte-1cz4103"&&(d.innerHTML=us),js=m(s),M(S.$$.fragment,s),fs=m(s),D=$(s,"P",{"data-svelte-h":!0}),T(D)!=="svelte-cqfv4y"&&(D.innerHTML=Bs),hs=m(s),P=$(s,"UL",{"data-svelte-h":!0}),T(P)!=="svelte-13k6qsm"&&(P.innerHTML=Vs),gs=m(s),M(K.$$.fragment,s),bs=m(s),M(O.$$.fragment,s),ws=m(s),ss=$(s,"P",{"data-svelte-h":!0}),T(ss)!=="svelte-1e5ex1w"&&(ss.innerHTML=Fs),$s=m(s),M(as.$$.fragment,s),ys=m(s),es=$(s,"P",{"data-svelte-h":!0}),T(es)!=="svelte-g8rrel"&&(es.innerHTML=Ys),Ts=m(s),M(ts.$$.fragment,s),Js=m(s),ls=$(s,"P",{"data-svelte-h":!0}),T(ls)!=="svelte-17o23dm"&&(ls.innerHTML=Hs),xs=m(s),ns=$(s,"OL",{"data-svelte-h":!0}),T(ns)!=="svelte-9yvtqn"&&(ns.innerHTML=qs),Us=m(s),ps=$(s,"P",{"data-svelte-h":!0}),T(ps)!=="svelte-576loj"&&(ps.textContent=Ns),_s=m(s),M(os.$$.fragment,s),ks=m(s),rs=$(s,"P",{"data-svelte-h":!0}),T(rs)!=="svelte-1dnx1ri"&&(rs.innerHTML=Qs),Cs=m(s),M(is.$$.fragment,s),Zs=m(s),cs=$(s,"P",{"data-svelte-h":!0}),T(cs)!=="svelte-yw3ehb"&&(cs.innerHTML=Ls),vs=m(s),M(H.$$.fragment,s),Is=m(s),M(ms.$$.fragment,s),Gs=m(s),M(q.$$.fragment,s),Rs=m(s),M(N.$$.fragment,s),As=m(s),Ms=$(s,"P",{}),Os(Ms).forEach(t),this.h()},h(){sa(a,"name","hf:doc:metadata"),sa(a,"content",ya)},m(s,l){ra(document.head,a),n(s,o,l),n(s,e,l),n(s,r,l),j(b,s,l),n(s,x,l),j(C,s,l),n(s,U,l),n(s,A,l),n(s,_,l),n(s,v,l),n(s,G,l),j(k,s,l),n(s,i,l),j(y,s,l),n(s,R,l),n(s,F,l),n(s,z,l),j(X,s,l),n(s,E,l),n(s,Y,l),n(s,B,l),j(V,s,l),n(s,p,l),n(s,d,l),n(s,js,l),j(S,s,l),n(s,fs,l),n(s,D,l),n(s,hs,l),n(s,P,l),n(s,gs,l),j(K,s,l),n(s,bs,l),j(O,s,l),n(s,ws,l),n(s,ss,l),n(s,$s,l),j(as,s,l),n(s,ys,l),n(s,es,l),n(s,Ts,l),j(ts,s,l),n(s,Js,l),n(s,ls,l),n(s,xs,l),n(s,ns,l),n(s,Us,l),n(s,ps,l),n(s,_s,l),j(os,s,l),n(s,ks,l),n(s,rs,l),n(s,Cs,l),j(is,s,l),n(s,Zs,l),n(s,cs,l),n(s,vs,l),j(H,s,l),n(s,Is,l),j(ms,s,l),n(s,Gs,l),j(q,s,l),n(s,Rs,l),j(N,s,l),n(s,As,l),n(s,Ms,l),Ws=!0},p(s,[l]){const Ss={};l&2&&(Ss.$$scope={dirty:l,ctx:s}),k.$set(Ss);const Ds={};l&2&&(Ds.$$scope={dirty:l,ctx:s}),H.$set(Ds);const Ps={};l&2&&(Ps.$$scope={dirty:l,ctx:s}),q.$set(Ps);const Ks={};l&2&&(Ks.$$scope={dirty:l,ctx:s}),N.$set(Ks)},i(s){Ws||(f(b.$$.fragment,s),f(C.$$.fragment,s),f(k.$$.fragment,s),f(y.$$.fragment,s),f(X.$$.fragment,s),f(V.$$.fragment,s),f(S.$$.fragment,s),f(K.$$.fragment,s),f(O.$$.fragment,s),f(as.$$.fragment,s),f(ts.$$.fragment,s),f(os.$$.fragment,s),f(is.$$.fragment,s),f(H.$$.fragment,s),f(ms.$$.fragment,s),f(q.$$.fragment,s),f(N.$$.fragment,s),Ws=!0)},o(s){h(b.$$.fragment,s),h(C.$$.fragment,s),h(k.$$.fragment,s),h(y.$$.fragment,s),h(X.$$.fragment,s),h(V.$$.fragment,s),h(S.$$.fragment,s),h(K.$$.fragment,s),h(O.$$.fragment,s),h(as.$$.fragment,s),h(ts.$$.fragment,s),h(os.$$.fragment,s),h(is.$$.fragment,s),h(H.$$.fragment,s),h(ms.$$.fragment,s),h(q.$$.fragment,s),h(N.$$.fragment,s),Ws=!1},d(s){s&&(t(o),t(e),t(r),t(x),t(U),t(A),t(_),t(v),t(G),t(i),t(R),t(F),t(z),t(E),t(Y),t(B),t(p),t(d),t(js),t(fs),t(D),t(hs),t(P),t(gs),t(bs),t(ws),t(ss),t($s),t(ys),t(es),t(Ts),t(Js),t(ls),t(xs),t(ns),t(Us),t(ps),t(_s),t(ks),t(rs),t(Cs),t(Zs),t(cs),t(vs),t(Is),t(Gs),t(Rs),t(As),t(Ms)),t(a),g(b,s),g(C,s),g(k,s),g(y,s),g(X,s),g(V,s),g(S,s),g(K,s),g(O,s),g(as,s),g(ts,s),g(os,s),g(is,s),g(H,s),g(ms,s),g(q,s),g(N,s)}}}const ya='{"title":"Classificação de tokens","local":"classificação-de-tokens","sections":[{"title":"Carregando o conjunto de dados WNUT 17","local":"carregando-o-conjunto-de-dados-wnut-17","sections":[],"depth":2},{"title":"Pré-processamento","local":"pré-processamento","sections":[],"depth":2},{"title":"Treinamento","local":"treinamento","sections":[],"depth":2}],"depth":1}';function Ta(J){return la(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class va extends na{constructor(a){super(),pa(this,a,Ta,$a,ta,{})}}export{va as component};
