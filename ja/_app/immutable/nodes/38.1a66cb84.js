import{s as ie,o as de,n as te}from"../chunks/scheduler.9bc65507.js";import{S as me,i as pe,g as T,s as i,r as f,A as ue,h as M,f as s,c as d,j as R,u as g,x as E,k as K,y,a as m,v as _,d as k,t as w,w as $}from"../chunks/index.707bf1b6.js";import{D as ce}from"../chunks/Docstring.17db21ae.js";import{C as ae}from"../chunks/CodeBlock.54a9f38d.js";import{E as O}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as ee}from"../chunks/Heading.342b1fa6.js";function he(J){let t,r;return t=new ae({props:{code:"ZnJvbSUyMGRhdGFzZXRzJTIwaW1wb3J0JTIwbG9hZF9tZXRyaWMlMEElMEFyb3VnZV9tZXRyaWMlMjAlM0QlMjBsb2FkX21ldHJpYyglMjJyb3VnZSUyMiklMEElMEElMEFkZWYlMjByb3VnZV9mbihwcmVkaWN0aW9ucyUyQyUyMGxhYmVscyklM0ElMEElMjAlMjAlMjAlMjBkZWNvZGVkX3ByZWRpY3Rpb25zJTIwJTNEJTIwdG9rZW5pemVyLmJhdGNoX2RlY29kZShwcmVkaWN0aW9ucyUyQyUyMHNraXBfc3BlY2lhbF90b2tlbnMlM0RUcnVlKSUwQSUyMCUyMCUyMCUyMGRlY29kZWRfbGFiZWxzJTIwJTNEJTIwdG9rZW5pemVyLmJhdGNoX2RlY29kZShsYWJlbHMlMkMlMjBza2lwX3NwZWNpYWxfdG9rZW5zJTNEVHJ1ZSklMEElMjAlMjAlMjAlMjByZXN1bHQlMjAlM0QlMjByb3VnZV9tZXRyaWMuY29tcHV0ZShwcmVkaWN0aW9ucyUzRGRlY29kZWRfcHJlZGljdGlvbnMlMkMlMjByZWZlcmVuY2VzJTNEZGVjb2RlZF9sYWJlbHMpJTBBJTIwJTIwJTIwJTIwcmV0dXJuJTIwJTdCa2V5JTNBJTIwdmFsdWUubWlkLmZtZWFzdXJlJTIwKiUyMDEwMCUyMGZvciUyMGtleSUyQyUyMHZhbHVlJTIwaW4lMjByZXN1bHQuaXRlbXMoKSU3RA==",highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_metric

rouge_metric = load_metric(<span class="hljs-string">&quot;rouge&quot;</span>)


<span class="hljs-keyword">def</span> <span class="hljs-title function_">rouge_fn</span>(<span class="hljs-params">predictions, labels</span>):
    decoded_predictions = tokenizer.batch_decode(predictions, skip_special_tokens=<span class="hljs-literal">True</span>)
    decoded_labels = tokenizer.batch_decode(labels, skip_special_tokens=<span class="hljs-literal">True</span>)
    result = rouge_metric.compute(predictions=decoded_predictions, references=decoded_labels)
    <span class="hljs-keyword">return</span> {key: value.mid.fmeasure * <span class="hljs-number">100</span> <span class="hljs-keyword">for</span> key, value <span class="hljs-keyword">in</span> result.items()}`,wrap:!1}}),{c(){f(t.$$.fragment)},l(a){g(t.$$.fragment,a)},m(a,l){_(t,a,l),r=!0},p:te,i(a){r||(k(t.$$.fragment,a),r=!0)},o(a){w(t.$$.fragment,a),r=!1},d(a){$(t,a)}}}function be(J){let t,r="The above function will return a dict containing values which will be logged like any other Keras metric:",a,l,u;return l=new ae({props:{code:"JTdCJ3JvdWdlMSclM0ElMjAzNy40MTk5JTJDJTIwJ3JvdWdlMiclM0ElMjAxMy45NzY4JTJDJTIwJ3JvdWdlTCclM0ElMjAzNC4zNjElMkMlMjAncm91Z2VMc3VtJyUzQSUyMDM1LjA3ODE=",highlighted:'{&#x27;rouge1&#x27;: <span class="hljs-number">37.4199</span>, &#x27;rouge2&#x27;: <span class="hljs-number">13.9768</span>, &#x27;rougeL&#x27;: <span class="hljs-number">34.361</span>, &#x27;rougeLsum&#x27;: <span class="hljs-number">35.0781</span>',wrap:!1}}),{c(){t=T("p"),t.textContent=r,a=i(),f(l.$$.fragment)},l(n){t=M(n,"P",{"data-svelte-h":!0}),E(t)!=="svelte-zfl4ie"&&(t.textContent=r),a=d(n),g(l.$$.fragment,n)},m(n,h){m(n,t,h),m(n,a,h),_(l,n,h),u=!0},p:te,i(n){u||(k(l.$$.fragment,n),u=!0)},o(n){w(l.$$.fragment,n),u=!1},d(n){n&&(s(t),s(a)),$(l,n)}}}function fe(J){let t,r;return t=new ae({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycy5rZXJhc19jYWxsYmFja3MlMjBpbXBvcnQlMjBQdXNoVG9IdWJDYWxsYmFjayUwQSUwQXB1c2hfdG9faHViX2NhbGxiYWNrJTIwJTNEJTIwUHVzaFRvSHViQ2FsbGJhY2soJTBBJTIwJTIwJTIwJTIwb3V0cHV0X2RpciUzRCUyMi4lMkZtb2RlbF9zYXZlJTIyJTJDJTBBJTIwJTIwJTIwJTIwdG9rZW5pemVyJTNEdG9rZW5pemVyJTJDJTBBJTIwJTIwJTIwJTIwaHViX21vZGVsX2lkJTNEJTIyZ3B0NS03eGxhcmdlJTIyJTJDJTBBKSUwQSUwQW1vZGVsLmZpdCh0cmFpbl9kYXRhc2V0JTJDJTIwY2FsbGJhY2tzJTNEJTVCcHVzaF90b19odWJfY2FsbGJhY2slNUQp",highlighted:`<span class="hljs-keyword">from</span> transformers.keras_callbacks <span class="hljs-keyword">import</span> PushToHubCallback

push_to_hub_callback = PushToHubCallback(
    output_dir=<span class="hljs-string">&quot;./model_save&quot;</span>,
    tokenizer=tokenizer,
    hub_model_id=<span class="hljs-string">&quot;gpt5-7xlarge&quot;</span>,
)

model.fit(train_dataset, callbacks=[push_to_hub_callback])`,wrap:!1}}),{c(){f(t.$$.fragment)},l(a){g(t.$$.fragment,a)},m(a,l){_(t,a,l),r=!0},p:te,i(a){r||(k(t.$$.fragment,a),r=!0)},o(a){w(t.$$.fragment,a),r=!1},d(a){$(t,a)}}}function ge(J){let t,r,a,l,u,n,h,oe=`Keras を使用して Transformers モデルをトレーニングする場合、一般的な処理を自動化するために使用できるライブラリ固有のコールバックがいくつかあります。
タスク:`,P,W,B,c,Z,S,z,se=`Callback to compute metrics at the end of every epoch. Unlike normal Keras metrics, these do not need to be
compilable by TF. It is particularly useful for common NLP metrics like BLEU and ROUGE that require string
operations or generation loops that cannot be compiled. Predictions (or generations) will be computed on the
<code>eval_dataset</code> before being passed to the <code>metric_fn</code> in <code>np.ndarray</code> format. The <code>metric_fn</code> should compute
metrics and return a dict mapping metric names to metric values.`,q,V,ne=`We provide an example of a suitable metric_fn that computes ROUGE scores for a summarization model below. Note that
this example skips some post-processing for readability and simplicity, and should probably not be used as-is!`,D,x,A,C,G,I,X,b,H,L,N,re=`Callback that will save and push the model to the Hub regularly. By default, it pushes once per epoch, but this can
be changed with the <code>save_strategy</code> argument. Pushed models can be accessed like any other model on the hub, such
as with the <code>from_pretrained</code> method.`,Q,j,F,U,Y;return u=new ee({props:{title:"Keras callbacks",local:"keras-callbacks",headingTag:"h1"}}),W=new ee({props:{title:"KerasMetricCallback",local:"transformers.KerasMetricCallback",headingTag:"h2"}}),Z=new ce({props:{name:"class transformers.KerasMetricCallback",anchor:"transformers.KerasMetricCallback",parameters:[{name:"metric_fn",val:": Callable"},{name:"eval_dataset",val:": Union"},{name:"output_cols",val:": Optional = None"},{name:"label_cols",val:": Optional = None"},{name:"batch_size",val:": Optional = None"},{name:"predict_with_generate",val:": bool = False"},{name:"use_xla_generation",val:": bool = False"},{name:"generate_kwargs",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.KerasMetricCallback.metric_fn",description:`<strong>metric_fn</strong> (<code>Callable</code>) &#x2014;
Metric function provided by the user. It will be called with two arguments - <code>predictions</code> and <code>labels</code>.
These contain the model&#x2019;s outputs and matching labels from the dataset. It should return a dict mapping
metric names to numerical values.`,name:"metric_fn"},{anchor:"transformers.KerasMetricCallback.eval_dataset",description:`<strong>eval_dataset</strong> (<code>tf.data.Dataset</code> or <code>dict</code> or <code>tuple</code> or <code>np.ndarray</code> or <code>tf.Tensor</code>) &#x2014;
Validation data to be used to generate predictions for the <code>metric_fn</code>.`,name:"eval_dataset"},{anchor:"transformers.KerasMetricCallback.output_cols",description:"<strong>output_cols</strong> (`List[str], <em>optional</em>) &#x2014;\nA list of columns to be retained from the model output as the predictions. Defaults to all.",name:"output_cols"},{anchor:"transformers.KerasMetricCallback.label_cols",description:`<strong>label_cols</strong> (&#x2019;<code>List[str]</code>, <em>optional</em>&#x2019;) &#x2014;
A list of columns to be retained from the input dataset as the labels. Will be autodetected if this is not
supplied.`,name:"label_cols"},{anchor:"transformers.KerasMetricCallback.batch_size",description:`<strong>batch_size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Batch size. Only used when the data is not a pre-batched <code>tf.data.Dataset</code>.`,name:"batch_size"},{anchor:"transformers.KerasMetricCallback.predict_with_generate",description:`<strong>predict_with_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether we should use <code>model.generate()</code> to get outputs for the model.`,name:"predict_with_generate"},{anchor:"transformers.KerasMetricCallback.use_xla_generation",description:`<strong>use_xla_generation</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If we&#x2019;re generating, whether to compile model generation with XLA. This can massively increase the speed of
generation (up to 100X speedup) but will require a new XLA compilation for each input shape. When using XLA
generation, it&#x2019;s a good idea to pad your inputs to the same size, or to use the <code>pad_to_multiple_of</code>
argument in your <code>tokenizer</code> or <code>DataCollator</code>, which will reduce the number of unique input shapes and
save a lot of compilation time. This option has no effect is <code>predict_with_generate</code> is <code>False</code>.`,name:"use_xla_generation"},{anchor:"transformers.KerasMetricCallback.generate_kwargs",description:`<strong>generate_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Keyword arguments to pass to <code>model.generate()</code> when generating. Has no effect if <code>predict_with_generate</code>
is <code>False</code>.`,name:"generate_kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/keras_callbacks.py#L20"}}),x=new O({props:{anchor:"transformers.KerasMetricCallback.example",$$slots:{default:[he]},$$scope:{ctx:J}}}),C=new O({props:{anchor:"transformers.KerasMetricCallback.example-2",$$slots:{default:[be]},$$scope:{ctx:J}}}),I=new ee({props:{title:"PushToHubCallback",local:"transformers.PushToHubCallback",headingTag:"h2"}}),H=new ce({props:{name:"class transformers.PushToHubCallback",anchor:"transformers.PushToHubCallback",parameters:[{name:"output_dir",val:": Union"},{name:"save_strategy",val:": Union = 'epoch'"},{name:"save_steps",val:": Optional = None"},{name:"tokenizer",val:": Optional = None"},{name:"hub_model_id",val:": Optional = None"},{name:"hub_token",val:": Optional = None"},{name:"checkpoint",val:": bool = False"},{name:"**model_card_args",val:""}],parametersDescription:[{anchor:"transformers.PushToHubCallback.output_dir",description:`<strong>output_dir</strong> (<code>str</code>) &#x2014;
The output directory where the model predictions and checkpoints will be written and synced with the
repository on the Hub.`,name:"output_dir"},{anchor:"transformers.PushToHubCallback.save_strategy",description:`<strong>save_strategy</strong> (<code>str</code> or <a href="/docs/transformers/main/ja/internal/trainer_utils#transformers.IntervalStrategy">IntervalStrategy</a>, <em>optional</em>, defaults to <code>&quot;epoch&quot;</code>) &#x2014;
The checkpoint save strategy to adopt during training. Possible values are:</p>
<ul>
<li><code>&quot;no&quot;</code>: Save is done at the end of training.</li>
<li><code>&quot;epoch&quot;</code>: Save is done at the end of each epoch.</li>
<li><code>&quot;steps&quot;</code>: Save is done every <code>save_steps</code></li>
</ul>`,name:"save_strategy"},{anchor:"transformers.PushToHubCallback.save_steps",description:`<strong>save_steps</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The number of steps between saves when using the &#x201C;steps&#x201D; <code>save_strategy</code>.`,name:"save_steps"},{anchor:"transformers.PushToHubCallback.tokenizer",description:`<strong>tokenizer</strong> (<code>PreTrainedTokenizerBase</code>, <em>optional</em>) &#x2014;
The tokenizer used by the model. If supplied, will be uploaded to the repo alongside the weights.`,name:"tokenizer"},{anchor:"transformers.PushToHubCallback.hub_model_id",description:`<strong>hub_model_id</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The name of the repository to keep in sync with the local <code>output_dir</code>. It can be a simple model ID in
which case the model will be pushed in your namespace. Otherwise it should be the whole repository name,
for instance <code>&quot;user_name/model&quot;</code>, which allows you to push to an organization you are a member of with
<code>&quot;organization_name/model&quot;</code>.</p>
<p>Will default to the name of <code>output_dir</code>.`,name:"hub_model_id"},{anchor:"transformers.PushToHubCallback.hub_token",description:`<strong>hub_token</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The token to use to push the model to the Hub. Will default to the token in the cache folder obtained with
<code>huggingface-cli login</code>.`,name:"hub_token"},{anchor:"transformers.PushToHubCallback.checkpoint",description:`<strong>checkpoint</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to save full training checkpoints (including epoch and optimizer state) to allow training to be
resumed. Only usable when <code>save_strategy</code> is <code>&quot;epoch&quot;</code>.`,name:"checkpoint"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/keras_callbacks.py#L268"}}),j=new O({props:{anchor:"transformers.PushToHubCallback.example",$$slots:{default:[fe]},$$scope:{ctx:J}}}),{c(){t=T("meta"),r=i(),a=T("p"),l=i(),f(u.$$.fragment),n=i(),h=T("p"),h.textContent=oe,P=i(),f(W.$$.fragment),B=i(),c=T("div"),f(Z.$$.fragment),S=i(),z=T("p"),z.innerHTML=se,q=i(),V=T("p"),V.textContent=ne,D=i(),f(x.$$.fragment),A=i(),f(C.$$.fragment),G=i(),f(I.$$.fragment),X=i(),b=T("div"),f(H.$$.fragment),L=i(),N=T("p"),N.innerHTML=re,Q=i(),f(j.$$.fragment),F=i(),U=T("p"),this.h()},l(e){const o=ue("svelte-u9bgzb",document.head);t=M(o,"META",{name:!0,content:!0}),o.forEach(s),r=d(e),a=M(e,"P",{}),R(a).forEach(s),l=d(e),g(u.$$.fragment,e),n=d(e),h=M(e,"P",{"data-svelte-h":!0}),E(h)!=="svelte-16u0x9u"&&(h.textContent=oe),P=d(e),g(W.$$.fragment,e),B=d(e),c=M(e,"DIV",{class:!0});var p=R(c);g(Z.$$.fragment,p),S=d(p),z=M(p,"P",{"data-svelte-h":!0}),E(z)!=="svelte-d9jxhh"&&(z.innerHTML=se),q=d(p),V=M(p,"P",{"data-svelte-h":!0}),E(V)!=="svelte-hu0773"&&(V.textContent=ne),D=d(p),g(x.$$.fragment,p),A=d(p),g(C.$$.fragment,p),p.forEach(s),G=d(e),g(I.$$.fragment,e),X=d(e),b=M(e,"DIV",{class:!0});var v=R(b);g(H.$$.fragment,v),L=d(v),N=M(v,"P",{"data-svelte-h":!0}),E(N)!=="svelte-1o3veql"&&(N.innerHTML=re),Q=d(v),g(j.$$.fragment,v),v.forEach(s),F=d(e),U=M(e,"P",{}),R(U).forEach(s),this.h()},h(){K(t,"name","hf:doc:metadata"),K(t,"content",_e),K(c,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),K(b,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,o){y(document.head,t),m(e,r,o),m(e,a,o),m(e,l,o),_(u,e,o),m(e,n,o),m(e,h,o),m(e,P,o),_(W,e,o),m(e,B,o),m(e,c,o),_(Z,c,null),y(c,S),y(c,z),y(c,q),y(c,V),y(c,D),_(x,c,null),y(c,A),_(C,c,null),m(e,G,o),_(I,e,o),m(e,X,o),m(e,b,o),_(H,b,null),y(b,L),y(b,N),y(b,Q),_(j,b,null),m(e,F,o),m(e,U,o),Y=!0},p(e,[o]){const p={};o&2&&(p.$$scope={dirty:o,ctx:e}),x.$set(p);const v={};o&2&&(v.$$scope={dirty:o,ctx:e}),C.$set(v);const le={};o&2&&(le.$$scope={dirty:o,ctx:e}),j.$set(le)},i(e){Y||(k(u.$$.fragment,e),k(W.$$.fragment,e),k(Z.$$.fragment,e),k(x.$$.fragment,e),k(C.$$.fragment,e),k(I.$$.fragment,e),k(H.$$.fragment,e),k(j.$$.fragment,e),Y=!0)},o(e){w(u.$$.fragment,e),w(W.$$.fragment,e),w(Z.$$.fragment,e),w(x.$$.fragment,e),w(C.$$.fragment,e),w(I.$$.fragment,e),w(H.$$.fragment,e),w(j.$$.fragment,e),Y=!1},d(e){e&&(s(r),s(a),s(l),s(n),s(h),s(P),s(B),s(c),s(G),s(X),s(b),s(F),s(U)),s(t),$(u,e),$(W,e),$(Z),$(x),$(C),$(I,e),$(H),$(j)}}}const _e='{"title":"Keras callbacks","local":"keras-callbacks","sections":[{"title":"KerasMetricCallback","local":"transformers.KerasMetricCallback","sections":[],"depth":2},{"title":"PushToHubCallback","local":"transformers.PushToHubCallback","sections":[],"depth":2}],"depth":1}';function ke(J){return de(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Je extends me{constructor(t){super(),pe(this,t,ke,ge,ie,{})}}export{Je as component};
