import{s as Ae,o as Ye,n as ce}from"../chunks/scheduler.36a0863c.js";import{S as Qe,i as Le,g as $,s as p,r as f,A as Pe,h as j,f as s,c as m,j as He,u,x as U,k as Ve,y as De,a as o,v as d,d as h,t as g,w as M}from"../chunks/index.f891bdb2.js";import{T as Ze}from"../chunks/Tip.a8272f7f.js";import{Y as Ke}from"../chunks/Youtube.0cbacd3d.js";import{C as R}from"../chunks/CodeBlock.3ec784ea.js";import{F as Ne,M as xe}from"../chunks/Markdown.4127c891.js";import{H as ke}from"../chunks/Heading.3fb90772.js";function Oe(w){let t,r='Consulta la <a href="https://huggingface.co/tasks/summarization" rel="nofollow">página de la tarea</a> de generación de resúmenes para obtener más información sobre sus modelos, datasets y métricas asociadas.';return{c(){t=$("p"),t.innerHTML=r},l(a){t=j(a,"P",{"data-svelte-h":!0}),U(t)!=="svelte-16v2ryx"&&(t.innerHTML=r)},m(a,i){o(a,t,i)},p:ce,d(a){a&&s(t)}}}function et(w){let t,r;return t=new R({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMERhdGFDb2xsYXRvckZvclNlcTJTZXElMEElMEFkYXRhX2NvbGxhdG9yJTIwJTNEJTIwRGF0YUNvbGxhdG9yRm9yU2VxMlNlcSh0b2tlbml6ZXIlM0R0b2tlbml6ZXIlMkMlMjBtb2RlbCUzRG1vZGVsKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorForSeq2Seq

<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DataCollatorForSeq2Seq(tokenizer=tokenizer, model=model)`,wrap:!1}}),{c(){f(t.$$.fragment)},l(a){u(t.$$.fragment,a)},m(a,i){d(t,a,i),r=!0},p:ce,i(a){r||(h(t.$$.fragment,a),r=!0)},o(a){g(t.$$.fragment,a),r=!1},d(a){M(t,a)}}}function tt(w){let t,r;return t=new xe({props:{$$slots:{default:[et]},$$scope:{ctx:w}}}),{c(){f(t.$$.fragment)},l(a){u(t.$$.fragment,a)},m(a,i){d(t,a,i),r=!0},p(a,i){const y={};i&2&&(y.$$scope={dirty:i,ctx:a}),t.$set(y)},i(a){r||(h(t.$$.fragment,a),r=!0)},o(a){g(t.$$.fragment,a),r=!1},d(a){M(t,a)}}}function at(w){let t,r;return t=new R({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMERhdGFDb2xsYXRvckZvclNlcTJTZXElMEElMEFkYXRhX2NvbGxhdG9yJTIwJTNEJTIwRGF0YUNvbGxhdG9yRm9yU2VxMlNlcSh0b2tlbml6ZXIlM0R0b2tlbml6ZXIlMkMlMjBtb2RlbCUzRG1vZGVsJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMik=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorForSeq2Seq

<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DataCollatorForSeq2Seq(tokenizer=tokenizer, model=model, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)`,wrap:!1}}),{c(){f(t.$$.fragment)},l(a){u(t.$$.fragment,a)},m(a,i){d(t,a,i),r=!0},p:ce,i(a){r||(h(t.$$.fragment,a),r=!0)},o(a){g(t.$$.fragment,a),r=!1},d(a){M(t,a)}}}function st(w){let t,r;return t=new xe({props:{$$slots:{default:[at]},$$scope:{ctx:w}}}),{c(){f(t.$$.fragment)},l(a){u(t.$$.fragment,a)},m(a,i){d(t,a,i),r=!0},p(a,i){const y={};i&2&&(y.$$scope={dirty:i,ctx:a}),t.$set(y)},i(a){r||(h(t.$$.fragment,a),r=!0)},o(a){g(t.$$.fragment,a),r=!1},d(a){M(t,a)}}}function nt(w){let t,r='Para familiarizarte con el proceso para realizar fine-tuning sobre un modelo con <code>Trainer</code>, ¡mira el tutorial básico <a href="../training#finetune-with-trainer">aquí</a>!';return{c(){t=$("p"),t.innerHTML=r},l(a){t=j(a,"P",{"data-svelte-h":!0}),U(t)!=="svelte-g0neip"&&(t.innerHTML=r)},m(a,i){o(a,t,i)},p:ce,d(a){a&&s(t)}}}function lt(w){let t,r="Carga T5 con <code>AutoModelForSeq2SeqLM</code>:",a,i,y,J,k,v,E="En este punto, solo faltan tres pasos:",S,_,x="<li>Definir tus hiperparámetros de entrenamiento en <code>Seq2SeqTrainingArguments</code>.</li> <li>Pasarle los argumentos de entrenamiento a <code>Seq2SeqTrainer</code> junto con el modelo, dataset y data collator.</li> <li>Llamar <code>train()</code> para realizar el fine-tuning sobre tu modelo.</li>",q,G,Z;return i=new R({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Nb2RlbEZvclNlcTJTZXFMTSUyQyUyMFNlcTJTZXFUcmFpbmluZ0FyZ3VtZW50cyUyQyUyMFNlcTJTZXFUcmFpbmVyJTBBJTBBbW9kZWwlMjAlM0QlMjBBdXRvTW9kZWxGb3JTZXEyU2VxTE0uZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZS10NSUyRnQ1LXNtYWxsJTIyKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSeq2SeqLM, Seq2SeqTrainingArguments, Seq2SeqTrainer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)`,wrap:!1}}),J=new Ze({props:{$$slots:{default:[nt]},$$scope:{ctx:w}}}),G=new R({props:{code:"dHJhaW5pbmdfYXJncyUyMCUzRCUyMFNlcTJTZXFUcmFpbmluZ0FyZ3VtZW50cyglMEElMjAlMjAlMjAlMjBvdXRwdXRfZGlyJTNEJTIyLiUyRnJlc3VsdHMlMjIlMkMlMEElMjAlMjAlMjAlMjBldmFsdWF0aW9uX3N0cmF0ZWd5JTNEJTIyZXBvY2glMjIlMkMlMEElMjAlMjAlMjAlMjBsZWFybmluZ19yYXRlJTNEMmUtNSUyQyUwQSUyMCUyMCUyMCUyMHBlcl9kZXZpY2VfdHJhaW5fYmF0Y2hfc2l6ZSUzRDE2JTJDJTBBJTIwJTIwJTIwJTIwcGVyX2RldmljZV9ldmFsX2JhdGNoX3NpemUlM0QxNiUyQyUwQSUyMCUyMCUyMCUyMHdlaWdodF9kZWNheSUzRDAuMDElMkMlMEElMjAlMjAlMjAlMjBzYXZlX3RvdGFsX2xpbWl0JTNEMyUyQyUwQSUyMCUyMCUyMCUyMG51bV90cmFpbl9lcG9jaHMlM0QxJTJDJTBBJTIwJTIwJTIwJTIwZnAxNiUzRFRydWUlMkMlMEEpJTBBJTBBdHJhaW5lciUyMCUzRCUyMFNlcTJTZXFUcmFpbmVyKCUwQSUyMCUyMCUyMCUyMG1vZGVsJTNEbW9kZWwlMkMlMEElMjAlMjAlMjAlMjBhcmdzJTNEdHJhaW5pbmdfYXJncyUyQyUwQSUyMCUyMCUyMCUyMHRyYWluX2RhdGFzZXQlM0R0b2tlbml6ZWRfYmlsbHN1bSU1QiUyMnRyYWluJTIyJTVEJTJDJTBBJTIwJTIwJTIwJTIwZXZhbF9kYXRhc2V0JTNEdG9rZW5pemVkX2JpbGxzdW0lNUIlMjJ0ZXN0JTIyJTVEJTJDJTBBJTIwJTIwJTIwJTIwdG9rZW5pemVyJTNEdG9rZW5pemVyJTJDJTBBJTIwJTIwJTIwJTIwZGF0YV9jb2xsYXRvciUzRGRhdGFfY29sbGF0b3IlMkMlMEEpJTBBJTBBdHJhaW5lci50cmFpbigp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>training_args = Seq2SeqTrainingArguments(
<span class="hljs-meta">... </span>    output_dir=<span class="hljs-string">&quot;./results&quot;</span>,
<span class="hljs-meta">... </span>    evaluation_strategy=<span class="hljs-string">&quot;epoch&quot;</span>,
<span class="hljs-meta">... </span>    learning_rate=<span class="hljs-number">2e-5</span>,
<span class="hljs-meta">... </span>    per_device_train_batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    per_device_eval_batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    weight_decay=<span class="hljs-number">0.01</span>,
<span class="hljs-meta">... </span>    save_total_limit=<span class="hljs-number">3</span>,
<span class="hljs-meta">... </span>    num_train_epochs=<span class="hljs-number">1</span>,
<span class="hljs-meta">... </span>    fp16=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer = Seq2SeqTrainer(
<span class="hljs-meta">... </span>    model=model,
<span class="hljs-meta">... </span>    args=training_args,
<span class="hljs-meta">... </span>    train_dataset=tokenized_billsum[<span class="hljs-string">&quot;train&quot;</span>],
<span class="hljs-meta">... </span>    eval_dataset=tokenized_billsum[<span class="hljs-string">&quot;test&quot;</span>],
<span class="hljs-meta">... </span>    tokenizer=tokenizer,
<span class="hljs-meta">... </span>    data_collator=data_collator,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer.train()`,wrap:!1}}),{c(){t=$("p"),t.innerHTML=r,a=p(),f(i.$$.fragment),y=p(),f(J.$$.fragment),k=p(),v=$("p"),v.textContent=E,S=p(),_=$("ol"),_.innerHTML=x,q=p(),f(G.$$.fragment)},l(c){t=j(c,"P",{"data-svelte-h":!0}),U(t)!=="svelte-17h7fia"&&(t.innerHTML=r),a=m(c),u(i.$$.fragment,c),y=m(c),u(J.$$.fragment,c),k=m(c),v=j(c,"P",{"data-svelte-h":!0}),U(v)!=="svelte-zndo63"&&(v.textContent=E),S=m(c),_=j(c,"OL",{"data-svelte-h":!0}),U(_)!=="svelte-hfpwqa"&&(_.innerHTML=x),q=m(c),u(G.$$.fragment,c)},m(c,T){o(c,t,T),o(c,a,T),d(i,c,T),o(c,y,T),d(J,c,T),o(c,k,T),o(c,v,T),o(c,S,T),o(c,_,T),o(c,q,T),d(G,c,T),Z=!0},p(c,T){const C={};T&2&&(C.$$scope={dirty:T,ctx:c}),J.$set(C)},i(c){Z||(h(i.$$.fragment,c),h(J.$$.fragment,c),h(G.$$.fragment,c),Z=!0)},o(c){g(i.$$.fragment,c),g(J.$$.fragment,c),g(G.$$.fragment,c),Z=!1},d(c){c&&(s(t),s(a),s(y),s(k),s(v),s(S),s(_),s(q)),M(i,c),M(J,c),M(G,c)}}}function ot(w){let t,r;return t=new xe({props:{$$slots:{default:[lt]},$$scope:{ctx:w}}}),{c(){f(t.$$.fragment)},l(a){u(t.$$.fragment,a)},m(a,i){d(t,a,i),r=!0},p(a,i){const y={};i&2&&(y.$$scope={dirty:i,ctx:a}),t.$set(y)},i(a){r||(h(t.$$.fragment,a),r=!0)},o(a){g(t.$$.fragment,a),r=!1},d(a){M(t,a)}}}function rt(w){let t,r='Para familiarizarte con el fine-tuning con Keras, ¡mira el tutorial básico <a href="training#finetune-with-keras">aquí</a>!';return{c(){t=$("p"),t.innerHTML=r},l(a){t=j(a,"P",{"data-svelte-h":!0}),U(t)!=="svelte-66s4ry"&&(t.innerHTML=r)},m(a,i){o(a,t,i)},p:ce,d(a){a&&s(t)}}}function it(w){let t,r="Para hacer fine-tuning de un modelo en TensorFlow, comienza por convertir tus datasets al formato <code>tf.data.Dataset</code> con <code>to_tf_dataset</code>. Especifica los inputs y etiquetas en <code>columns</code>, el tamaño de lote, el data collator, y si es necesario mezclar el dataset:",a,i,y,J,k,v,E="Crea la función optimizadora, establece la tasa de aprendizaje y algunos hiperparámetros de entrenamiento:",S,_,x,q,G="Carga T5 con <code>TFAutoModelForSeq2SeqLM</code>:",Z,c,T,C,Q='Configura el modelo para entrenamiento con <a href="https://keras.io/api/models/model_training_apis/#compile-method" rel="nofollow"><code>compile</code></a>:',z,B,F,H,L='Llama a <a href="https://keras.io/api/models/model_training_apis/#fit-method" rel="nofollow"><code>fit</code></a> para realizar el fine-tuning del modelo:',I,X,W;return i=new R({props:{code:"dGZfdHJhaW5fc2V0JTIwJTNEJTIwdG9rZW5pemVkX2JpbGxzdW0lNUIlMjJ0cmFpbiUyMiU1RC50b190Zl9kYXRhc2V0KCUwQSUyMCUyMCUyMCUyMGNvbHVtbnMlM0QlNUIlMjJhdHRlbnRpb25fbWFzayUyMiUyQyUyMCUyMmlucHV0X2lkcyUyMiUyQyUyMCUyMmxhYmVscyUyMiU1RCUyQyUwQSUyMCUyMCUyMCUyMHNodWZmbGUlM0RUcnVlJTJDJTBBJTIwJTIwJTIwJTIwYmF0Y2hfc2l6ZSUzRDE2JTJDJTBBJTIwJTIwJTIwJTIwY29sbGF0ZV9mbiUzRGRhdGFfY29sbGF0b3IlMkMlMEEpJTBBJTBBdGZfdGVzdF9zZXQlMjAlM0QlMjB0b2tlbml6ZWRfYmlsbHN1bSU1QiUyMnRlc3QlMjIlNUQudG9fdGZfZGF0YXNldCglMEElMjAlMjAlMjAlMjBjb2x1bW5zJTNEJTVCJTIyYXR0ZW50aW9uX21hc2slMjIlMkMlMjAlMjJpbnB1dF9pZHMlMjIlMkMlMjAlMjJsYWJlbHMlMjIlNUQlMkMlMEElMjAlMjAlMjAlMjBzaHVmZmxlJTNERmFsc2UlMkMlMEElMjAlMjAlMjAlMjBiYXRjaF9zaXplJTNEMTYlMkMlMEElMjAlMjAlMjAlMjBjb2xsYXRlX2ZuJTNEZGF0YV9jb2xsYXRvciUyQyUwQSk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>tf_train_set = tokenized_billsum[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
<span class="hljs-meta">... </span>    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;labels&quot;</span>],
<span class="hljs-meta">... </span>    shuffle=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    collate_fn=data_collator,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tf_test_set = tokenized_billsum[<span class="hljs-string">&quot;test&quot;</span>].to_tf_dataset(
<span class="hljs-meta">... </span>    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;labels&quot;</span>],
<span class="hljs-meta">... </span>    shuffle=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>    batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    collate_fn=data_collator,
<span class="hljs-meta">... </span>)`,wrap:!1}}),J=new Ze({props:{$$slots:{default:[rt]},$$scope:{ctx:w}}}),_=new R({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMGNyZWF0ZV9vcHRpbWl6ZXIlMkMlMjBBZGFtV2VpZ2h0RGVjYXklMEElMEFvcHRpbWl6ZXIlMjAlM0QlMjBBZGFtV2VpZ2h0RGVjYXkobGVhcm5pbmdfcmF0ZSUzRDJlLTUlMkMlMjB3ZWlnaHRfZGVjYXlfcmF0ZSUzRDAuMDEp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> create_optimizer, AdamWeightDecay

<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer = AdamWeightDecay(learning_rate=<span class="hljs-number">2e-5</span>, weight_decay_rate=<span class="hljs-number">0.01</span>)`,wrap:!1}}),c=new R({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFRGQXV0b01vZGVsRm9yU2VxMlNlcUxNJTBBJTBBbW9kZWwlMjAlM0QlMjBURkF1dG9Nb2RlbEZvclNlcTJTZXFMTS5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlLXQ1JTJGdDUtc21hbGwlMjIp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForSeq2SeqLM

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)`,wrap:!1}}),B=new R({props:{code:"bW9kZWwuY29tcGlsZShvcHRpbWl6ZXIlM0RvcHRpbWl6ZXIp",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model.<span class="hljs-built_in">compile</span>(optimizer=optimizer)',wrap:!1}}),X=new R({props:{code:"bW9kZWwuZml0KHglM0R0Zl90cmFpbl9zZXQlMkMlMjB2YWxpZGF0aW9uX2RhdGElM0R0Zl90ZXN0X3NldCUyQyUyMGVwb2NocyUzRDMp",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model.fit(x=tf_train_set, validation_data=tf_test_set, epochs=<span class="hljs-number">3</span>)',wrap:!1}}),{c(){t=$("p"),t.innerHTML=r,a=p(),f(i.$$.fragment),y=p(),f(J.$$.fragment),k=p(),v=$("p"),v.textContent=E,S=p(),f(_.$$.fragment),x=p(),q=$("p"),q.innerHTML=G,Z=p(),f(c.$$.fragment),T=p(),C=$("p"),C.innerHTML=Q,z=p(),f(B.$$.fragment),F=p(),H=$("p"),H.innerHTML=L,I=p(),f(X.$$.fragment)},l(n){t=j(n,"P",{"data-svelte-h":!0}),U(t)!=="svelte-d9p6d2"&&(t.innerHTML=r),a=m(n),u(i.$$.fragment,n),y=m(n),u(J.$$.fragment,n),k=m(n),v=j(n,"P",{"data-svelte-h":!0}),U(v)!=="svelte-etuso1"&&(v.textContent=E),S=m(n),u(_.$$.fragment,n),x=m(n),q=j(n,"P",{"data-svelte-h":!0}),U(q)!=="svelte-wbywbg"&&(q.innerHTML=G),Z=m(n),u(c.$$.fragment,n),T=m(n),C=j(n,"P",{"data-svelte-h":!0}),U(C)!=="svelte-vifi3w"&&(C.innerHTML=Q),z=m(n),u(B.$$.fragment,n),F=m(n),H=j(n,"P",{"data-svelte-h":!0}),U(H)!=="svelte-meb7zc"&&(H.innerHTML=L),I=m(n),u(X.$$.fragment,n)},m(n,b){o(n,t,b),o(n,a,b),d(i,n,b),o(n,y,b),d(J,n,b),o(n,k,b),o(n,v,b),o(n,S,b),d(_,n,b),o(n,x,b),o(n,q,b),o(n,Z,b),d(c,n,b),o(n,T,b),o(n,C,b),o(n,z,b),d(B,n,b),o(n,F,b),o(n,H,b),o(n,I,b),d(X,n,b),W=!0},p(n,b){const V={};b&2&&(V.$$scope={dirty:b,ctx:n}),J.$set(V)},i(n){W||(h(i.$$.fragment,n),h(J.$$.fragment,n),h(_.$$.fragment,n),h(c.$$.fragment,n),h(B.$$.fragment,n),h(X.$$.fragment,n),W=!0)},o(n){g(i.$$.fragment,n),g(J.$$.fragment,n),g(_.$$.fragment,n),g(c.$$.fragment,n),g(B.$$.fragment,n),g(X.$$.fragment,n),W=!1},d(n){n&&(s(t),s(a),s(y),s(k),s(v),s(S),s(x),s(q),s(Z),s(T),s(C),s(z),s(F),s(H),s(I)),M(i,n),M(J,n),M(_,n),M(c,n),M(B,n),M(X,n)}}}function ct(w){let t,r;return t=new xe({props:{$$slots:{default:[it]},$$scope:{ctx:w}}}),{c(){f(t.$$.fragment)},l(a){u(t.$$.fragment,a)},m(a,i){d(t,a,i),r=!0},p(a,i){const y={};i&2&&(y.$$scope={dirty:i,ctx:a}),t.$set(y)},i(a){r||(h(t.$$.fragment,a),r=!0)},o(a){g(t.$$.fragment,a),r=!1},d(a){M(t,a)}}}function pt(w){let t,r=`Para un ejemplo con mayor profundidad de cómo hacer fine-tuning a un modelo para generación de resúmenes, revisa la
<a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/summarization.ipynb" rel="nofollow">notebook en PyTorch</a>
o a la <a href="https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/summarization-tf.ipynb" rel="nofollow">notebook en TensorFlow</a>.`;return{c(){t=$("p"),t.innerHTML=r},l(a){t=j(a,"P",{"data-svelte-h":!0}),U(t)!=="svelte-1h0amt2"&&(t.innerHTML=r)},m(a,i){o(a,t,i)},p:ce,d(a){a&&s(t)}}}function mt(w){let t,r,a,i,y,J,k,v,E,S="La generación de resúmenes (summarization, en inglés) crea una versión más corta de un documento o un artículo que resume toda su información importante. Junto con la traducción, es un ejemplo de una tarea que puede ser formulada como una tarea secuencia a secuencia. La generación de resúmenes puede ser:",_,x,q="<li>Extractiva: Extrae la información más relevante de un documento.</li> <li>Abstractiva: Genera un texto nuevo que captura la información más importante.</li>",G,Z,c='Esta guía te mostrará cómo puedes hacer fine-tuning del modelo <a href="https://huggingface.co/google-t5/t5-small" rel="nofollow">T5</a> sobre el subset de proyectos de ley del estado de California, dentro del dataset <a href="https://huggingface.co/datasets/billsum" rel="nofollow">BillSum</a> para hacer generación de resúmenes abstractiva.',T,C,Q,z,B,F,H="Carga el dataset BillSum de la biblioteca 🤗 Datasets:",L,I,X,W,n="Divide el dataset en un set de train y un set de test:",b,V,me,P,qe="A continuación, observa un ejemplo:",fe,D,ue,K,Ge="El campo <code>text</code> es el input y el campo <code>summary</code> es el objetivo.",de,O,he,ee,Re="Carga el tokenizador T5 para procesar <code>text</code> y <code>summary</code>:",ge,te,Me,ae,Ee="La función de preprocesamiento necesita:",ye,se,Se="<li>Agregar un prefijo al input; una clave para que T5 sepa que se trata de una tarea de generación de resúmenes. Algunos modelos capaces de realizar múltiples tareas de NLP requieren una clave que indique la tarea específica.</li> <li>Usar el argumento <code>text_target</code> para tokenizar etiquetas.</li> <li>Truncar secuencias para que no sean más largas que la longitud máxima fijada por el parámetro <code>max_length</code>.</li>",be,ne,$e,le,ze="Usa la función <code>map</code> de 🤗 Datasets para aplicar la función de preprocesamiento sobre el dataset en su totalidad. Puedes acelerar la función <code>map</code> configurando el argumento <code>batched=True</code> para procesar múltiples elementos del dataset a la vez:",je,oe,we,re,Be="Usa <code>DataCollatorForSeq2Seq</code> para crear un lote de ejemplos. Esto también <em>rellenará dinámicamente</em> tu texto y etiquetas a la dimensión del elemento más largo del lote para que tengan un largo uniforme. Si bien es posible rellenar tu texto en la función <code>tokenizer</code> mediante el argumento <code>padding=True</code>, el rellenado dinámico es más eficiente.",Te,N,Ue,ie,Je,A,ve,Y,_e,pe,Ce;return y=new ke({props:{title:"Generación de resúmenes",local:"generación-de-resúmenes",headingTag:"h1"}}),k=new Ke({props:{id:"yHnr5Dk2zCI"}}),C=new Ze({props:{$$slots:{default:[Oe]},$$scope:{ctx:w}}}),z=new ke({props:{title:"Carga el dataset BillSum",local:"carga-el-dataset-billsum",headingTag:"h2"}}),I=new R({props:{code:"ZnJvbSUyMGRhdGFzZXRzJTIwaW1wb3J0JTIwbG9hZF9kYXRhc2V0JTBBJTBBYmlsbHN1bSUyMCUzRCUyMGxvYWRfZGF0YXNldCglMjJiaWxsc3VtJTIyJTJDJTIwc3BsaXQlM0QlMjJjYV90ZXN0JTIyKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>billsum = load_dataset(<span class="hljs-string">&quot;billsum&quot;</span>, split=<span class="hljs-string">&quot;ca_test&quot;</span>)`,wrap:!1}}),V=new R({props:{code:"YmlsbHN1bSUyMCUzRCUyMGJpbGxzdW0udHJhaW5fdGVzdF9zcGxpdCh0ZXN0X3NpemUlM0QwLjIp",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>billsum = billsum.train_test_split(test_size=<span class="hljs-number">0.2</span>)',wrap:!1}}),D=new R({props:{code:"YmlsbHN1bSU1QiUyMnRyYWluJTIyJTVEJTVCMCU1RA==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>billsum[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;summary&#x27;</span>: <span class="hljs-string">&#x27;Existing law authorizes state agencies to enter into contracts for the acquisition of goods or services upon approval by the Department of General Services. Existing law sets forth various requirements and prohibitions for those contracts, including, but not limited to, a prohibition on entering into contracts for the acquisition of goods or services of $100,000 or more with a contractor that discriminates between spouses and domestic partners or same-sex and different-sex couples in the provision of benefits. Existing law provides that a contract entered into in violation of those requirements and prohibitions is void and authorizes the state or any person acting on behalf of the state to bring a civil action seeking a determination that a contract is in violation and therefore void. Under existing law, a willful violation of those requirements and prohibitions is a misdemeanor.\\nThis bill would also prohibit a state agency from entering into contracts for the acquisition of goods or services of $100,000 or more with a contractor that discriminates between employees on the basis of gender identity in the provision of benefits, as specified. By expanding the scope of a crime, this bill would impose a state-mandated local program.\\nThe California Constitution requires the state to reimburse local agencies and school districts for certain costs mandated by the state. Statutory provisions establish procedures for making that reimbursement.\\nThis bill would provide that no reimbursement is required by this act for a specified reason.&#x27;</span>,
 <span class="hljs-string">&#x27;text&#x27;</span>: <span class="hljs-string">&#x27;The people of the State of California do enact as follows:\\n\\n\\nSECTION 1.\\nSection 10295.35 is added to the Public Contract Code, to read:\\n10295.35.\\n(a) (1) Notwithstanding any other law, a state agency shall not enter into any contract for the acquisition of goods or services in the amount of one hundred thousand dollars ($100,000) or more with a contractor that, in the provision of benefits, discriminates between employees on the basis of an employee’s or dependent’s actual or perceived gender identity, including, but not limited to, the employee’s or dependent’s identification as transgender.\\n(2) For purposes of this section, “contract” includes contracts with a cumulative amount of one hundred thousand dollars ($100,000) or more per contractor in each fiscal year.\\n(3) For purposes of this section, an employee health plan is discriminatory if the plan is not consistent with Section 1365.5 of the Health and Safety Code and Section 10140 of the Insurance Code.\\n(4) The requirements of this section shall apply only to those portions of a contractor’s operations that occur under any of the following conditions:\\n(A) Within the state.\\n(B) On real property outside the state if the property is owned by the state or if the state has a right to occupy the property, and if the contractor’s presence at that location is connected to a contract with the state.\\n(C) Elsewhere in the United States where work related to a state contract is being performed.\\n(b) Contractors shall treat as confidential, to the maximum extent allowed by law or by the requirement of the contractor’s insurance provider, any request by an employee or applicant for employment benefits or any documentation of eligibility for benefits submitted by an employee or applicant for employment.\\n(c) After taking all reasonable measures to find a contractor that complies with this section, as determined by the state agency, the requirements of this section may be waived under any of the following circumstances:\\n(1) There is only one prospective contractor willing to enter into a specific contract with the state agency.\\n(2) The contract is necessary to respond to an emergency, as determined by the state agency, that endangers the public health, welfare, or safety, or the contract is necessary for the provision of essential services, and no entity that complies with the requirements of this section capable of responding to the emergency is immediately available.\\n(3) The requirements of this section violate, or are inconsistent with, the terms or conditions of a grant, subvention, or agreement, if the agency has made a good faith attempt to change the terms or conditions of any grant, subvention, or agreement to authorize application of this section.\\n(4) The contractor is providing wholesale or bulk water, power, or natural gas, the conveyance or transmission of the same, or ancillary services, as required for ensuring reliable services in accordance with good utility practice, if the purchase of the same cannot practically be accomplished through the standard competitive bidding procedures and the contractor is not providing direct retail services to end users.\\n(d) (1) A contractor shall not be deemed to discriminate in the provision of benefits if the contractor, in providing the benefits, pays the actual costs incurred in obtaining the benefit.\\n(2) If a contractor is unable to provide a certain benefit, despite taking reasonable measures to do so, the contractor shall not be deemed to discriminate in the provision of benefits.\\n(e) (1) Every contract subject to this chapter shall contain a statement by which the contractor certifies that the contractor is in compliance with this section.\\n(2) The department or other contracting agency shall enforce this section pursuant to its existing enforcement powers.\\n(3) (A) If a contractor falsely certifies that it is in compliance with this section, the contract with that contractor shall be subject to Article 9 (commencing with Section 10420), unless, within a time period specified by the department or other contracting agency, the contractor provides to the department or agency proof that it has complied, or is in the process of complying, with this section.\\n(B) The application of the remedies or penalties contained in Article 9 (commencing with Section 10420) to a contract subject to this chapter shall not preclude the application of any existing remedies otherwise available to the department or other contracting agency under its existing enforcement powers.\\n(f) Nothing in this section is intended to regulate the contracting practices of any local jurisdiction.\\n(g) This section shall be construed so as not to conflict with applicable federal laws, rules, or regulations. In the event that a court or agency of competent jurisdiction holds that federal law, rule, or regulation invalidates any clause, sentence, paragraph, or section of this code or the application thereof to any person or circumstances, it is the intent of the state that the court or agency sever that clause, sentence, paragraph, or section so that the remainder of this section shall remain in effect.\\nSEC. 2.\\nSection 10295.35 of the Public Contract Code shall not be construed to create any new enforcement authority or responsibility in the Department of General Services or any other contracting agency.\\nSEC. 3.\\nNo reimbursement is required by this act pursuant to Section 6 of Article XIII\\u2009B of the California Constitution because the only costs that may be incurred by a local agency or school district will be incurred because this act creates a new crime or infraction, eliminates a crime or infraction, or changes the penalty for a crime or infraction, within the meaning of Section 17556 of the Government Code, or changes the definition of a crime within the meaning of Section 6 of Article XIII\\u2009B of the California Constitution.&#x27;</span>,
 <span class="hljs-string">&#x27;title&#x27;</span>: <span class="hljs-string">&#x27;An act to add Section 10295.35 to the Public Contract Code, relating to public contracts.&#x27;</span>}`,wrap:!1}}),O=new ke({props:{title:"Preprocesa",local:"preprocesa",headingTag:"h2"}}),te=new R({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUtdDUlMkZ0NS1zbWFsbCUyMik=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-small&quot;</span>)`,wrap:!1}}),ne=new R({props:{code:"cHJlZml4JTIwJTNEJTIwJTIyc3VtbWFyaXplJTNBJTIwJTIyJTBBJTBBJTBBZGVmJTIwcHJlcHJvY2Vzc19mdW5jdGlvbihleGFtcGxlcyklM0ElMEElMjAlMjAlMjAlMjBpbnB1dHMlMjAlM0QlMjAlNUJwcmVmaXglMjAlMkIlMjBkb2MlMjBmb3IlMjBkb2MlMjBpbiUyMGV4YW1wbGVzJTVCJTIydGV4dCUyMiU1RCU1RCUwQSUyMCUyMCUyMCUyMG1vZGVsX2lucHV0cyUyMCUzRCUyMHRva2VuaXplcihpbnB1dHMlMkMlMjBtYXhfbGVuZ3RoJTNEMTAyNCUyQyUyMHRydW5jYXRpb24lM0RUcnVlKSUwQSUwQSUyMCUyMCUyMCUyMGxhYmVscyUyMCUzRCUyMHRva2VuaXplcih0ZXh0X3RhcmdldCUzRGV4YW1wbGVzJTVCJTIyc3VtbWFyeSUyMiU1RCUyQyUyMG1heF9sZW5ndGglM0QxMjglMkMlMjB0cnVuY2F0aW9uJTNEVHJ1ZSklMEElMEElMjAlMjAlMjAlMjBtb2RlbF9pbnB1dHMlNUIlMjJsYWJlbHMlMjIlNUQlMjAlM0QlMjBsYWJlbHMlNUIlMjJpbnB1dF9pZHMlMjIlNUQlMEElMjAlMjAlMjAlMjByZXR1cm4lMjBtb2RlbF9pbnB1dHM=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>prefix = <span class="hljs-string">&quot;summarize: &quot;</span>


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">preprocess_function</span>(<span class="hljs-params">examples</span>):
<span class="hljs-meta">... </span>    inputs = [prefix + doc <span class="hljs-keyword">for</span> doc <span class="hljs-keyword">in</span> examples[<span class="hljs-string">&quot;text&quot;</span>]]
<span class="hljs-meta">... </span>    model_inputs = tokenizer(inputs, max_length=<span class="hljs-number">1024</span>, truncation=<span class="hljs-literal">True</span>)

<span class="hljs-meta">... </span>    labels = tokenizer(text_target=examples[<span class="hljs-string">&quot;summary&quot;</span>], max_length=<span class="hljs-number">128</span>, truncation=<span class="hljs-literal">True</span>)

<span class="hljs-meta">... </span>    model_inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> model_inputs`,wrap:!1}}),oe=new R({props:{code:"dG9rZW5pemVkX2JpbGxzdW0lMjAlM0QlMjBiaWxsc3VtLm1hcChwcmVwcm9jZXNzX2Z1bmN0aW9uJTJDJTIwYmF0Y2hlZCUzRFRydWUp",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>tokenized_billsum = billsum.<span class="hljs-built_in">map</span>(preprocess_function, batched=<span class="hljs-literal">True</span>)',wrap:!1}}),N=new Ne({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[st],pytorch:[tt]},$$scope:{ctx:w}}}),ie=new ke({props:{title:"Entrenamiento",local:"entrenamiento",headingTag:"h2"}}),A=new Ne({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[ct],pytorch:[ot]},$$scope:{ctx:w}}}),Y=new Ze({props:{$$slots:{default:[pt]},$$scope:{ctx:w}}}),{c(){t=$("meta"),r=p(),a=$("p"),i=p(),f(y.$$.fragment),J=p(),f(k.$$.fragment),v=p(),E=$("p"),E.textContent=S,_=p(),x=$("ul"),x.innerHTML=q,G=p(),Z=$("p"),Z.innerHTML=c,T=p(),f(C.$$.fragment),Q=p(),f(z.$$.fragment),B=p(),F=$("p"),F.textContent=H,L=p(),f(I.$$.fragment),X=p(),W=$("p"),W.textContent=n,b=p(),f(V.$$.fragment),me=p(),P=$("p"),P.textContent=qe,fe=p(),f(D.$$.fragment),ue=p(),K=$("p"),K.innerHTML=Ge,de=p(),f(O.$$.fragment),he=p(),ee=$("p"),ee.innerHTML=Re,ge=p(),f(te.$$.fragment),Me=p(),ae=$("p"),ae.textContent=Ee,ye=p(),se=$("ol"),se.innerHTML=Se,be=p(),f(ne.$$.fragment),$e=p(),le=$("p"),le.innerHTML=ze,je=p(),f(oe.$$.fragment),we=p(),re=$("p"),re.innerHTML=Be,Te=p(),f(N.$$.fragment),Ue=p(),f(ie.$$.fragment),Je=p(),f(A.$$.fragment),ve=p(),f(Y.$$.fragment),_e=p(),pe=$("p"),this.h()},l(e){const l=Pe("svelte-u9bgzb",document.head);t=j(l,"META",{name:!0,content:!0}),l.forEach(s),r=m(e),a=j(e,"P",{}),He(a).forEach(s),i=m(e),u(y.$$.fragment,e),J=m(e),u(k.$$.fragment,e),v=m(e),E=j(e,"P",{"data-svelte-h":!0}),U(E)!=="svelte-1bzmr4x"&&(E.textContent=S),_=m(e),x=j(e,"UL",{"data-svelte-h":!0}),U(x)!=="svelte-1nmkmpc"&&(x.innerHTML=q),G=m(e),Z=j(e,"P",{"data-svelte-h":!0}),U(Z)!=="svelte-14du4f9"&&(Z.innerHTML=c),T=m(e),u(C.$$.fragment,e),Q=m(e),u(z.$$.fragment,e),B=m(e),F=j(e,"P",{"data-svelte-h":!0}),U(F)!=="svelte-1jlden9"&&(F.textContent=H),L=m(e),u(I.$$.fragment,e),X=m(e),W=j(e,"P",{"data-svelte-h":!0}),U(W)!=="svelte-atj3ve"&&(W.textContent=n),b=m(e),u(V.$$.fragment,e),me=m(e),P=j(e,"P",{"data-svelte-h":!0}),U(P)!=="svelte-1ccba5i"&&(P.textContent=qe),fe=m(e),u(D.$$.fragment,e),ue=m(e),K=j(e,"P",{"data-svelte-h":!0}),U(K)!=="svelte-obg09g"&&(K.innerHTML=Ge),de=m(e),u(O.$$.fragment,e),he=m(e),ee=j(e,"P",{"data-svelte-h":!0}),U(ee)!=="svelte-k7fnwl"&&(ee.innerHTML=Re),ge=m(e),u(te.$$.fragment,e),Me=m(e),ae=j(e,"P",{"data-svelte-h":!0}),U(ae)!=="svelte-1odj0bi"&&(ae.textContent=Ee),ye=m(e),se=j(e,"OL",{"data-svelte-h":!0}),U(se)!=="svelte-173y0ts"&&(se.innerHTML=Se),be=m(e),u(ne.$$.fragment,e),$e=m(e),le=j(e,"P",{"data-svelte-h":!0}),U(le)!=="svelte-m50jmu"&&(le.innerHTML=ze),je=m(e),u(oe.$$.fragment,e),we=m(e),re=j(e,"P",{"data-svelte-h":!0}),U(re)!=="svelte-1indi9y"&&(re.innerHTML=Be),Te=m(e),u(N.$$.fragment,e),Ue=m(e),u(ie.$$.fragment,e),Je=m(e),u(A.$$.fragment,e),ve=m(e),u(Y.$$.fragment,e),_e=m(e),pe=j(e,"P",{}),He(pe).forEach(s),this.h()},h(){Ve(t,"name","hf:doc:metadata"),Ve(t,"content",ft)},m(e,l){De(document.head,t),o(e,r,l),o(e,a,l),o(e,i,l),d(y,e,l),o(e,J,l),d(k,e,l),o(e,v,l),o(e,E,l),o(e,_,l),o(e,x,l),o(e,G,l),o(e,Z,l),o(e,T,l),d(C,e,l),o(e,Q,l),d(z,e,l),o(e,B,l),o(e,F,l),o(e,L,l),d(I,e,l),o(e,X,l),o(e,W,l),o(e,b,l),d(V,e,l),o(e,me,l),o(e,P,l),o(e,fe,l),d(D,e,l),o(e,ue,l),o(e,K,l),o(e,de,l),d(O,e,l),o(e,he,l),o(e,ee,l),o(e,ge,l),d(te,e,l),o(e,Me,l),o(e,ae,l),o(e,ye,l),o(e,se,l),o(e,be,l),d(ne,e,l),o(e,$e,l),o(e,le,l),o(e,je,l),d(oe,e,l),o(e,we,l),o(e,re,l),o(e,Te,l),d(N,e,l),o(e,Ue,l),d(ie,e,l),o(e,Je,l),d(A,e,l),o(e,ve,l),d(Y,e,l),o(e,_e,l),o(e,pe,l),Ce=!0},p(e,[l]){const Fe={};l&2&&(Fe.$$scope={dirty:l,ctx:e}),C.$set(Fe);const Ie={};l&2&&(Ie.$$scope={dirty:l,ctx:e}),N.$set(Ie);const Xe={};l&2&&(Xe.$$scope={dirty:l,ctx:e}),A.$set(Xe);const We={};l&2&&(We.$$scope={dirty:l,ctx:e}),Y.$set(We)},i(e){Ce||(h(y.$$.fragment,e),h(k.$$.fragment,e),h(C.$$.fragment,e),h(z.$$.fragment,e),h(I.$$.fragment,e),h(V.$$.fragment,e),h(D.$$.fragment,e),h(O.$$.fragment,e),h(te.$$.fragment,e),h(ne.$$.fragment,e),h(oe.$$.fragment,e),h(N.$$.fragment,e),h(ie.$$.fragment,e),h(A.$$.fragment,e),h(Y.$$.fragment,e),Ce=!0)},o(e){g(y.$$.fragment,e),g(k.$$.fragment,e),g(C.$$.fragment,e),g(z.$$.fragment,e),g(I.$$.fragment,e),g(V.$$.fragment,e),g(D.$$.fragment,e),g(O.$$.fragment,e),g(te.$$.fragment,e),g(ne.$$.fragment,e),g(oe.$$.fragment,e),g(N.$$.fragment,e),g(ie.$$.fragment,e),g(A.$$.fragment,e),g(Y.$$.fragment,e),Ce=!1},d(e){e&&(s(r),s(a),s(i),s(J),s(v),s(E),s(_),s(x),s(G),s(Z),s(T),s(Q),s(B),s(F),s(L),s(X),s(W),s(b),s(me),s(P),s(fe),s(ue),s(K),s(de),s(he),s(ee),s(ge),s(Me),s(ae),s(ye),s(se),s(be),s($e),s(le),s(je),s(we),s(re),s(Te),s(Ue),s(Je),s(ve),s(_e),s(pe)),s(t),M(y,e),M(k,e),M(C,e),M(z,e),M(I,e),M(V,e),M(D,e),M(O,e),M(te,e),M(ne,e),M(oe,e),M(N,e),M(ie,e),M(A,e),M(Y,e)}}}const ft='{"title":"Generación de resúmenes","local":"generación-de-resúmenes","sections":[{"title":"Carga el dataset BillSum","local":"carga-el-dataset-billsum","sections":[],"depth":2},{"title":"Preprocesa","local":"preprocesa","sections":[],"depth":2},{"title":"Entrenamiento","local":"entrenamiento","sections":[],"depth":2}],"depth":1}';function ut(w){return Ye(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class jt extends Qe{constructor(t){super(),Le(this,t,ut,mt,Ae,{})}}export{jt as component};
