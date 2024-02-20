import{s as el,B as tl,o as ll,n as je}from"../chunks/scheduler.9991993c.js";import{S as sl,i as nl,g as $,s as r,r as b,A as al,h as c,f as t,c as p,j as yt,u as w,x as d,k as G,y as rl,a as s,v as M,d as _,t as T,w as y}from"../chunks/index.7fc9a5e7.js";import{T as pl}from"../chunks/Tip.9de92fc6.js";import{Y as il}from"../chunks/Youtube.7934cf81.js";import{C as X}from"../chunks/CodeBlock.e11cba92.js";import{F as Ot,M as Ce}from"../chunks/Markdown.87f31c7e.js";import{H as R}from"../chunks/Heading.e3de321f.js";function ml(j){let n,o='要与社区共享模型，您需要在<a href="https://huggingface.co/join" rel="nofollow">huggingface.co</a>上拥有一个帐户。您还可以加入现有的组织或创建一个新的组织。';return{c(){n=$("p"),n.innerHTML=o},l(a){n=c(a,"P",{"data-svelte-h":!0}),d(n)!=="svelte-ono6xp"&&(n.innerHTML=o)},m(a,i){s(a,n,i)},p:je,d(a){a&&t(n)}}}function ol(j){let n,o="指定<code>from_tf=True</code>将checkpoint从TensorFlow转换为PyTorch。",a,i,u;return i=new X({props:{code:"cHRfbW9kZWwlMjAlM0QlMjBEaXN0aWxCZXJ0Rm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIycGF0aCUyRnRvJTJGYXdlc29tZS1uYW1lLXlvdS1waWNrZWQlMjIlMkMlMjBmcm9tX3RmJTNEVHJ1ZSklMEFwdF9tb2RlbC5zYXZlX3ByZXRyYWluZWQoJTIycGF0aCUyRnRvJTJGYXdlc29tZS1uYW1lLXlvdS1waWNrZWQlMjIp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>pt_model = DistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;path/to/awesome-name-you-picked&quot;</span>, from_tf=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>pt_model.save_pretrained(<span class="hljs-string">&quot;path/to/awesome-name-you-picked&quot;</span>)`,wrap:!1}}),{c(){n=$("p"),n.innerHTML=o,a=r(),b(i.$$.fragment)},l(m){n=c(m,"P",{"data-svelte-h":!0}),d(n)!=="svelte-xo84fy"&&(n.innerHTML=o),a=p(m),w(i.$$.fragment,m)},m(m,v){s(m,n,v),s(m,a,v),M(i,m,v),u=!0},p:je,i(m){u||(_(i.$$.fragment,m),u=!0)},o(m){T(i.$$.fragment,m),u=!1},d(m){m&&(t(n),t(a)),y(i,m)}}}function fl(j){let n,o;return n=new Ce({props:{$$slots:{default:[ol]},$$scope:{ctx:j}}}),{c(){b(n.$$.fragment)},l(a){w(n.$$.fragment,a)},m(a,i){M(n,a,i),o=!0},p(a,i){const u={};i&2&&(u.$$scope={dirty:i,ctx:a}),n.$set(u)},i(a){o||(_(n.$$.fragment,a),o=!0)},o(a){T(n.$$.fragment,a),o=!1},d(a){y(n,a)}}}function ul(j){let n,o="指定<code>from_pt=True</code>将checkpoint从PyTorch转换为TensorFlow。",a,i,u,m,v="然后，您可以使用新的checkpoint保存您的新TensorFlow模型：",C,k,Z;return i=new X({props:{code:"dGZfbW9kZWwlMjAlM0QlMjBURkRpc3RpbEJlcnRGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uLmZyb21fcHJldHJhaW5lZCglMjJwYXRoJTJGdG8lMkZhd2Vzb21lLW5hbWUteW91LXBpY2tlZCUyMiUyQyUyMGZyb21fcHQlM0RUcnVlKQ==",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>tf_model = TFDistilBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;path/to/awesome-name-you-picked&quot;</span>, from_pt=<span class="hljs-literal">True</span>)',wrap:!1}}),k=new X({props:{code:"dGZfbW9kZWwuc2F2ZV9wcmV0cmFpbmVkKCUyMnBhdGglMkZ0byUyRmF3ZXNvbWUtbmFtZS15b3UtcGlja2VkJTIyKQ==",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>tf_model.save_pretrained(<span class="hljs-string">&quot;path/to/awesome-name-you-picked&quot;</span>)',wrap:!1}}),{c(){n=$("p"),n.innerHTML=o,a=r(),b(i.$$.fragment),u=r(),m=$("p"),m.textContent=v,C=r(),b(k.$$.fragment)},l(g){n=c(g,"P",{"data-svelte-h":!0}),d(n)!=="svelte-6zl8ge"&&(n.innerHTML=o),a=p(g),w(i.$$.fragment,g),u=p(g),m=c(g,"P",{"data-svelte-h":!0}),d(m)!=="svelte-pq7zsz"&&(m.textContent=v),C=p(g),w(k.$$.fragment,g)},m(g,H){s(g,n,H),s(g,a,H),M(i,g,H),s(g,u,H),s(g,m,H),s(g,C,H),M(k,g,H),Z=!0},p:je,i(g){Z||(_(i.$$.fragment,g),_(k.$$.fragment,g),Z=!0)},o(g){T(i.$$.fragment,g),T(k.$$.fragment,g),Z=!1},d(g){g&&(t(n),t(a),t(u),t(m),t(C)),y(i,g),y(k,g)}}}function $l(j){let n,o;return n=new Ce({props:{$$slots:{default:[ul]},$$scope:{ctx:j}}}),{c(){b(n.$$.fragment)},l(a){w(n.$$.fragment,a)},m(a,i){M(n,a,i),o=!0},p(a,i){const u={};i&2&&(u.$$scope={dirty:i,ctx:a}),n.$set(u)},i(a){o||(_(n.$$.fragment,a),o=!0)},o(a){T(n.$$.fragment,a),o=!1},d(a){y(n,a)}}}function cl(j){let n,o="如果模型在Flax中可用，您还可以将PyTorch checkpoint转换为Flax：",a,i,u;return i=new X({props:{code:"ZmxheF9tb2RlbCUyMCUzRCUyMEZsYXhEaXN0aWxCZXJ0Rm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTBBJTIwJTIwJTIwJTIwJTIycGF0aCUyRnRvJTJGYXdlc29tZS1uYW1lLXlvdS1waWNrZWQlMjIlMkMlMjBmcm9tX3B0JTNEVHJ1ZSUwQSk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>flax_model = FlaxDistilBertForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;path/to/awesome-name-you-picked&quot;</span>, from_pt=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)`,wrap:!1}}),{c(){n=$("p"),n.textContent=o,a=r(),b(i.$$.fragment)},l(m){n=c(m,"P",{"data-svelte-h":!0}),d(n)!=="svelte-4ux5nj"&&(n.textContent=o),a=p(m),w(i.$$.fragment,m)},m(m,v){s(m,n,v),s(m,a,v),M(i,m,v),u=!0},p:je,i(m){u||(_(i.$$.fragment,m),u=!0)},o(m){T(i.$$.fragment,m),u=!1},d(m){m&&(t(n),t(a)),y(i,m)}}}function gl(j){let n,o;return n=new Ce({props:{$$slots:{default:[cl]},$$scope:{ctx:j}}}),{c(){b(n.$$.fragment)},l(a){w(n.$$.fragment,a)},m(a,i){M(n,a,i),o=!0},p(a,i){const u={};i&2&&(u.$$scope={dirty:i,ctx:a}),n.$set(u)},i(a){o||(_(n.$$.fragment,a),o=!0)},o(a){T(n.$$.fragment,a),o=!1},d(a){y(n,a)}}}function dl(j){let n,o,a,i='将模型分享到Hub就像添加一个额外的参数或回调函数一样简单。请记住，在<a href="training">微调教程</a>中，<code>TrainingArguments</code>类是您指定超参数和附加训练选项的地方。其中一项训练选项包括直接将模型推送到Hub的能力。在您的<code>TrainingArguments</code>中设置<code>push_to_hub=True</code>：',u,m,v,C,k="像往常一样将您的训练参数传递给<code>Trainer</code>：",Z,g,H,x,h="在您微调完模型后，在<code>Trainer</code>上调用<code>push_to_hub()</code>将训练好的模型推送到Hub。🤗 Transformers甚至会自动将训练超参数、训练结果和框架版本添加到你的模型卡片中！",L,W,Y;return n=new il({props:{id:"Z1-XMy-GNLQ"}}),m=new X({props:{code:"dHJhaW5pbmdfYXJncyUyMCUzRCUyMFRyYWluaW5nQXJndW1lbnRzKG91dHB1dF9kaXIlM0QlMjJteS1hd2Vzb21lLW1vZGVsJTIyJTJDJTIwcHVzaF90b19odWIlM0RUcnVlKQ==",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>training_args = TrainingArguments(output_dir=<span class="hljs-string">&quot;my-awesome-model&quot;</span>, push_to_hub=<span class="hljs-literal">True</span>)',wrap:!1}}),g=new X({props:{code:"dHJhaW5lciUyMCUzRCUyMFRyYWluZXIoJTBBJTIwJTIwJTIwJTIwbW9kZWwlM0Rtb2RlbCUyQyUwQSUyMCUyMCUyMCUyMGFyZ3MlM0R0cmFpbmluZ19hcmdzJTJDJTBBJTIwJTIwJTIwJTIwdHJhaW5fZGF0YXNldCUzRHNtYWxsX3RyYWluX2RhdGFzZXQlMkMlMEElMjAlMjAlMjAlMjBldmFsX2RhdGFzZXQlM0RzbWFsbF9ldmFsX2RhdGFzZXQlMkMlMEElMjAlMjAlMjAlMjBjb21wdXRlX21ldHJpY3MlM0Rjb21wdXRlX21ldHJpY3MlMkMlMEEp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>trainer = Trainer(
<span class="hljs-meta">... </span>    model=model,
<span class="hljs-meta">... </span>    args=training_args,
<span class="hljs-meta">... </span>    train_dataset=small_train_dataset,
<span class="hljs-meta">... </span>    eval_dataset=small_eval_dataset,
<span class="hljs-meta">... </span>    compute_metrics=compute_metrics,
<span class="hljs-meta">... </span>)`,wrap:!1}}),W=new X({props:{code:"dHJhaW5lci5wdXNoX3RvX2h1Yigp",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>trainer.push_to_hub()',wrap:!1}}),{c(){b(n.$$.fragment),o=r(),a=$("p"),a.innerHTML=i,u=r(),b(m.$$.fragment),v=r(),C=$("p"),C.innerHTML=k,Z=r(),b(g.$$.fragment),H=r(),x=$("p"),x.innerHTML=h,L=r(),b(W.$$.fragment)},l(f){w(n.$$.fragment,f),o=p(f),a=c(f,"P",{"data-svelte-h":!0}),d(a)!=="svelte-1rm1fnz"&&(a.innerHTML=i),u=p(f),w(m.$$.fragment,f),v=p(f),C=c(f,"P",{"data-svelte-h":!0}),d(C)!=="svelte-o485dv"&&(C.innerHTML=k),Z=p(f),w(g.$$.fragment,f),H=p(f),x=c(f,"P",{"data-svelte-h":!0}),d(x)!=="svelte-1ue1tej"&&(x.innerHTML=h),L=p(f),w(W.$$.fragment,f)},m(f,J){M(n,f,J),s(f,o,J),s(f,a,J),s(f,u,J),M(m,f,J),s(f,v,J),s(f,C,J),s(f,Z,J),M(g,f,J),s(f,H,J),s(f,x,J),s(f,L,J),M(W,f,J),Y=!0},p:je,i(f){Y||(_(n.$$.fragment,f),_(m.$$.fragment,f),_(g.$$.fragment,f),_(W.$$.fragment,f),Y=!0)},o(f){T(n.$$.fragment,f),T(m.$$.fragment,f),T(g.$$.fragment,f),T(W.$$.fragment,f),Y=!1},d(f){f&&(t(o),t(a),t(u),t(v),t(C),t(Z),t(H),t(x),t(L)),y(n,f),y(m,f),y(g,f),y(W,f)}}}function hl(j){let n,o;return n=new Ce({props:{$$slots:{default:[dl]},$$scope:{ctx:j}}}),{c(){b(n.$$.fragment)},l(a){w(n.$$.fragment,a)},m(a,i){M(n,a,i),o=!0},p(a,i){const u={};i&2&&(u.$$scope={dirty:i,ctx:a}),n.$set(u)},i(a){o||(_(n.$$.fragment,a),o=!0)},o(a){T(n.$$.fragment,a),o=!1},d(a){y(n,a)}}}function bl(j){let n,o='使用<a href="/docs/transformers/main/zh/main_classes/keras_callbacks#transformers.PushToHubCallback">PushToHubCallback</a>将模型分享到Hub。在<a href="/docs/transformers/main/zh/main_classes/keras_callbacks#transformers.PushToHubCallback">PushToHubCallback</a>函数中，添加以下内容：',a,i,u="<li>一个用于存储模型的输出目录。</li> <li>一个tokenizer。</li> <li><code>hub_model_id</code>，即您的Hub用户名和模型名称。</li>",m,v,C,k,Z='将回调函数添加到 <a href="https://keras.io/api/models/model_training_apis/" rel="nofollow"><code>fit</code></a>中，然后🤗 Transformers 会将训练好的模型推送到 Hub：',g,H,x;return v=new X({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFB1c2hUb0h1YkNhbGxiYWNrJTBBJTBBcHVzaF90b19odWJfY2FsbGJhY2slMjAlM0QlMjBQdXNoVG9IdWJDYWxsYmFjayglMEElMjAlMjAlMjAlMjBvdXRwdXRfZGlyJTNEJTIyLiUyRnlvdXJfbW9kZWxfc2F2ZV9wYXRoJTIyJTJDJTIwdG9rZW5pemVyJTNEdG9rZW5pemVyJTJDJTIwaHViX21vZGVsX2lkJTNEJTIyeW91ci11c2VybmFtZSUyRm15LWF3ZXNvbWUtbW9kZWwlMjIlMEEp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> PushToHubCallback

<span class="hljs-meta">&gt;&gt;&gt; </span>push_to_hub_callback = PushToHubCallback(
<span class="hljs-meta">... </span>    output_dir=<span class="hljs-string">&quot;./your_model_save_path&quot;</span>, tokenizer=tokenizer, hub_model_id=<span class="hljs-string">&quot;your-username/my-awesome-model&quot;</span>
<span class="hljs-meta">... </span>)`,wrap:!1}}),H=new X({props:{code:"bW9kZWwuZml0KHRmX3RyYWluX2RhdGFzZXQlMkMlMjB2YWxpZGF0aW9uX2RhdGElM0R0Zl92YWxpZGF0aW9uX2RhdGFzZXQlMkMlMjBlcG9jaHMlM0QzJTJDJTIwY2FsbGJhY2tzJTNEcHVzaF90b19odWJfY2FsbGJhY2sp",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model.fit(tf_train_dataset, validation_data=tf_validation_dataset, epochs=<span class="hljs-number">3</span>, callbacks=push_to_hub_callback)',wrap:!1}}),{c(){n=$("p"),n.innerHTML=o,a=r(),i=$("ul"),i.innerHTML=u,m=r(),b(v.$$.fragment),C=r(),k=$("p"),k.innerHTML=Z,g=r(),b(H.$$.fragment)},l(h){n=c(h,"P",{"data-svelte-h":!0}),d(n)!=="svelte-rm30pm"&&(n.innerHTML=o),a=p(h),i=c(h,"UL",{"data-svelte-h":!0}),d(i)!=="svelte-fhkhez"&&(i.innerHTML=u),m=p(h),w(v.$$.fragment,h),C=p(h),k=c(h,"P",{"data-svelte-h":!0}),d(k)!=="svelte-1jsduku"&&(k.innerHTML=Z),g=p(h),w(H.$$.fragment,h)},m(h,L){s(h,n,L),s(h,a,L),s(h,i,L),s(h,m,L),M(v,h,L),s(h,C,L),s(h,k,L),s(h,g,L),M(H,h,L),x=!0},p:je,i(h){x||(_(v.$$.fragment,h),_(H.$$.fragment,h),x=!0)},o(h){T(v.$$.fragment,h),T(H.$$.fragment,h),x=!1},d(h){h&&(t(n),t(a),t(i),t(m),t(C),t(k),t(g)),y(v,h),y(H,h)}}}function wl(j){let n,o;return n=new Ce({props:{$$slots:{default:[bl]},$$scope:{ctx:j}}}),{c(){b(n.$$.fragment)},l(a){w(n.$$.fragment,a)},m(a,i){M(n,a,i),o=!0},p(a,i){const u={};i&2&&(u.$$scope={dirty:i,ctx:a}),n.$set(u)},i(a){o||(_(n.$$.fragment,a),o=!0)},o(a){T(n.$$.fragment,a),o=!1},d(a){y(n,a)}}}function Ml(j){let n,o,a,i,u,m,v,C="最后两个教程展示了如何使用PyTorch、Keras和 🤗 Accelerate进行分布式设置来微调模型。下一步是将您的模型与社区分享！在Hugging Face，我们相信公开分享知识和资源，能实现人工智能的普及化，让每个人都能受益。我们鼓励您将您的模型与社区分享，以帮助他人节省时间和精力。",k,Z,g='在本教程中，您将学习两种在<a href="https://huggingface.co/models" rel="nofollow">Model Hub</a>上共享训练好的或微调的模型的方法：',H,x,h="<li>通过编程将文件推送到Hub。</li> <li>使用Web界面将文件拖放到Hub。</li>",L,W,Y,f,J,Ze,I,xe,P,vt="Model Hub上的每个仓库都像是一个典型的GitHub仓库。我们的仓库提供版本控制、提交历史记录以及可视化差异的能力。",Le,z,Ht='Model Hub的内置版本控制基于git和<a href="https://git-lfs.github.com/" rel="nofollow">git-lfs</a>。换句话说，您可以将一个模型视为一个仓库，从而实现更好的访问控制和可扩展性。版本控制允许使用<em>修订</em>方法来固定特定版本的模型，可以使用提交哈希值、标签或分支来标记。',Xe,V,kt="因此，您可以通过<code>revision</code>参数加载特定的模型版本：",Fe,B,Ue,E,Jt=`文件也可以轻松地在仓库中编辑，您可以查看提交历史记录以及差异：
<img src="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/vis_diff.png" alt="vis_diff"/>`,Ge,q,Re,Q,jt="在将模型共享到Hub之前，您需要拥有Hugging Face的凭证。如果您有访问终端的权限，请在安装🤗 Transformers的虚拟环境中运行以下命令。这将在您的Hugging Face缓存文件夹（默认为<code>~/.cache/</code>）中存储您的<code>access token</code>：",Ye,S,Ie,N,Wt='如果您正在使用像Jupyter或Colaboratory这样的<code>notebook</code>，请确保您已安装了<a href="https://huggingface.co/docs/hub/adding-a-library" rel="nofollow"><code>huggingface_hub</code></a>库。该库允许您以编程方式与Hub进行交互。',Pe,A,ze,D,Ct='然后使用<code>notebook_login</code>登录到Hub，并按照<a href="https://huggingface.co/settings/token" rel="nofollow">这里</a>的链接生成一个token进行登录：',Ve,K,Be,O,Ee,ee,Zt="为确保您的模型可以被使用不同框架的人使用，我们建议您将PyTorch和TensorFlow <code>checkpoints</code>都转换并上传。如果您跳过此步骤，用户仍然可以从其他框架加载您的模型，但速度会变慢，因为🤗 Transformers需要实时转换<code>checkpoints</code>。",qe,te,xt='为另一个框架转换<code>checkpoints</code>很容易。确保您已安装PyTorch和TensorFlow（请参阅<a href="installation">此处</a>的安装说明），然后在其他框架中找到适合您任务的特定模型。',Qe,F,Se,le,Ne,U,Ae,se,De,ne,Lt="您可以直接在您的模型上调用<code>push_to_hub</code>来将其上传到Hub。",Ke,ae,Xt="在<code>push_to_hub</code>中指定你的模型名称：",Oe,re,et,pe,Ft="这会在您的用户名下创建一个名为<code>my-awesome-model</code>的仓库。用户现在可以使用<code>from_pretrained</code>函数加载您的模型：",tt,ie,lt,me,Ut="如果您属于一个组织，并希望将您的模型推送到组织名称下，只需将其添加到<code>repo_id</code>中：",st,oe,nt,fe,Gt="<code>push_to_hub</code>函数还可以用于向模型仓库添加其他文件。例如，向模型仓库中添加一个<code>tokenizer</code>：",at,ue,rt,$e,Rt="或者，您可能希望将您的微调后的PyTorch模型的TensorFlow版本添加进去：",pt,ce,it,ge,Yt="现在，当您导航到您的Hugging Face个人资料时，您应该看到您新创建的模型仓库。点击<strong>文件</strong>选项卡将显示您已上传到仓库的所有文件。",mt,de,It='有关如何创建和上传文件到仓库的更多详细信息，请参考Hub文档<a href="https://huggingface.co/docs/hub/how-to-upstream" rel="nofollow">这里</a>。',ot,he,ft,be,Pt='喜欢无代码方法的用户可以通过Hugging Face的Web界面上传模型。访问<a href="https://huggingface.co/new" rel="nofollow">huggingface.co/new</a>创建一个新的仓库：',ut,we,zt='<img src="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/new_model_repo.png" alt="new_model_repo"/>',$t,Me,Vt="从这里开始，添加一些关于您的模型的信息：",ct,_e,Bt="<li>选择仓库的<strong>所有者</strong>。这可以是您本人或者您所属的任何组织。</li> <li>为您的项目选择一个名称，该名称也将成为仓库的名称。</li> <li>选择您的模型是公开还是私有。</li> <li>指定您的模型的许可证使用情况。</li>",gt,Te,Et="现在点击<strong>文件</strong>选项卡，然后点击<strong>添加文件</strong>按钮将一个新文件上传到你的仓库。接着拖放一个文件进行上传，并添加提交信息。",dt,ye,qt='<img src="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/upload_file.png" alt="upload_file"/>',ht,ve,bt,He,Qt="为了确保用户了解您的模型的能力、限制、潜在偏差和伦理考虑，请在仓库中添加一个模型卡片。模型卡片在<code>README.md</code>文件中定义。你可以通过以下方式添加模型卡片：",wt,ke,St="<li>手动创建并上传一个<code>README.md</code>文件。</li> <li>在你的模型仓库中点击<strong>编辑模型卡片</strong>按钮。</li>",Mt,Je,Nt='可以参考DistilBert的<a href="https://huggingface.co/distilbert/distilbert-base-uncased" rel="nofollow">模型卡片</a>来了解模型卡片应该包含的信息类型。有关您可以在<code>README.md</code>文件中控制的更多选项的细节，例如模型的碳足迹或小部件示例，请参考文档<a href="https://huggingface.co/docs/hub/models-cards" rel="nofollow">这里</a>。',_t,We,Tt;return u=new R({props:{title:"分享模型",local:"分享模型",headingTag:"h1"}}),J=new pl({props:{$$slots:{default:[ml]},$$scope:{ctx:j}}}),I=new R({props:{title:"仓库功能",local:"仓库功能",headingTag:"h2"}}),B=new X({props:{code:"bW9kZWwlMjAlM0QlMjBBdXRvTW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUwQSUyMCUyMCUyMCUyMCUyMmp1bGllbi1jJTJGRXNwZXJCRVJUby1zbWFsbCUyMiUyQyUyMHJldmlzaW9uJTNEJTIydjIuMC4xJTIyJTIwJTIwJTIzJTIwdGFnJTIwbmFtZSUyQyUyMG9yJTIwYnJhbmNoJTIwbmFtZSUyQyUyMG9yJTIwY29tbWl0JTIwaGFzaCUwQSk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModel.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;julien-c/EsperBERTo-small&quot;</span>, revision=<span class="hljs-string">&quot;v2.0.1&quot;</span>  <span class="hljs-comment"># tag name, or branch name, or commit hash</span>
<span class="hljs-meta">... </span>)`,wrap:!1}}),q=new R({props:{title:"设置",local:"设置",headingTag:"h2"}}),S=new X({props:{code:"aHVnZ2luZ2ZhY2UtY2xpJTIwbG9naW4=",highlighted:"huggingface-cli login",wrap:!1}}),A=new X({props:{code:"cGlwJTIwaW5zdGFsbCUyMGh1Z2dpbmdmYWNlX2h1Yg==",highlighted:"pip install huggingface_hub",wrap:!1}}),K=new X({props:{code:"ZnJvbSUyMGh1Z2dpbmdmYWNlX2h1YiUyMGltcG9ydCUyMG5vdGVib29rX2xvZ2luJTBBJTBBbm90ZWJvb2tfbG9naW4oKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> notebook_login

<span class="hljs-meta">&gt;&gt;&gt; </span>notebook_login()`,wrap:!1}}),O=new R({props:{title:"转换模型适用于所有框架",local:"转换模型适用于所有框架",headingTag:"h2"}}),F=new Ot({props:{pytorch:!0,tensorflow:!0,jax:!0,$$slots:{jax:[gl],tensorflow:[$l],pytorch:[fl]},$$scope:{ctx:j}}}),le=new R({props:{title:"在训练过程中推送模型",local:"在训练过程中推送模型",headingTag:"h2"}}),U=new Ot({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[wl],pytorch:[hl]},$$scope:{ctx:j}}}),se=new R({props:{title:"使用 push_to_hub 功能",local:"使用-pushtohub-功能",headingTag:"h2"}}),re=new X({props:{code:"cHRfbW9kZWwucHVzaF90b19odWIoJTIybXktYXdlc29tZS1tb2RlbCUyMik=",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>pt_model.push_to_hub(<span class="hljs-string">&quot;my-awesome-model&quot;</span>)',wrap:!1}}),ie=new X({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Nb2RlbCUwQSUwQW1vZGVsJTIwJTNEJTIwQXV0b01vZGVsLmZyb21fcHJldHJhaW5lZCglMjJ5b3VyX3VzZXJuYW1lJTJGbXktYXdlc29tZS1tb2RlbCUyMik=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModel.from_pretrained(<span class="hljs-string">&quot;your_username/my-awesome-model&quot;</span>)`,wrap:!1}}),oe=new X({props:{code:"cHRfbW9kZWwucHVzaF90b19odWIoJTIybXktYXdlc29tZS1vcmclMkZteS1hd2Vzb21lLW1vZGVsJTIyKQ==",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>pt_model.push_to_hub(<span class="hljs-string">&quot;my-awesome-org/my-awesome-model&quot;</span>)',wrap:!1}}),ue=new X({props:{code:"dG9rZW5pemVyLnB1c2hfdG9faHViKCUyMm15LWF3ZXNvbWUtbW9kZWwlMjIp",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.push_to_hub(<span class="hljs-string">&quot;my-awesome-model&quot;</span>)',wrap:!1}}),ce=new X({props:{code:"dGZfbW9kZWwucHVzaF90b19odWIoJTIybXktYXdlc29tZS1tb2RlbCUyMik=",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>tf_model.push_to_hub(<span class="hljs-string">&quot;my-awesome-model&quot;</span>)',wrap:!1}}),he=new R({props:{title:"使用Web界面上传",local:"使用web界面上传",headingTag:"h2"}}),ve=new R({props:{title:"添加模型卡片",local:"添加模型卡片",headingTag:"h2"}}),{c(){n=$("meta"),o=r(),a=$("p"),i=r(),b(u.$$.fragment),m=r(),v=$("p"),v.textContent=C,k=r(),Z=$("p"),Z.innerHTML=g,H=r(),x=$("ul"),x.innerHTML=h,L=r(),W=$("iframe"),f=r(),b(J.$$.fragment),Ze=r(),b(I.$$.fragment),xe=r(),P=$("p"),P.textContent=vt,Le=r(),z=$("p"),z.innerHTML=Ht,Xe=r(),V=$("p"),V.innerHTML=kt,Fe=r(),b(B.$$.fragment),Ue=r(),E=$("p"),E.innerHTML=Jt,Ge=r(),b(q.$$.fragment),Re=r(),Q=$("p"),Q.innerHTML=jt,Ye=r(),b(S.$$.fragment),Ie=r(),N=$("p"),N.innerHTML=Wt,Pe=r(),b(A.$$.fragment),ze=r(),D=$("p"),D.innerHTML=Ct,Ve=r(),b(K.$$.fragment),Be=r(),b(O.$$.fragment),Ee=r(),ee=$("p"),ee.innerHTML=Zt,qe=r(),te=$("p"),te.innerHTML=xt,Qe=r(),b(F.$$.fragment),Se=r(),b(le.$$.fragment),Ne=r(),b(U.$$.fragment),Ae=r(),b(se.$$.fragment),De=r(),ne=$("p"),ne.innerHTML=Lt,Ke=r(),ae=$("p"),ae.innerHTML=Xt,Oe=r(),b(re.$$.fragment),et=r(),pe=$("p"),pe.innerHTML=Ft,tt=r(),b(ie.$$.fragment),lt=r(),me=$("p"),me.innerHTML=Ut,st=r(),b(oe.$$.fragment),nt=r(),fe=$("p"),fe.innerHTML=Gt,at=r(),b(ue.$$.fragment),rt=r(),$e=$("p"),$e.textContent=Rt,pt=r(),b(ce.$$.fragment),it=r(),ge=$("p"),ge.innerHTML=Yt,mt=r(),de=$("p"),de.innerHTML=It,ot=r(),b(he.$$.fragment),ft=r(),be=$("p"),be.innerHTML=Pt,ut=r(),we=$("p"),we.innerHTML=zt,$t=r(),Me=$("p"),Me.textContent=Vt,ct=r(),_e=$("ul"),_e.innerHTML=Bt,gt=r(),Te=$("p"),Te.innerHTML=Et,dt=r(),ye=$("p"),ye.innerHTML=qt,ht=r(),b(ve.$$.fragment),bt=r(),He=$("p"),He.innerHTML=Qt,wt=r(),ke=$("ul"),ke.innerHTML=St,Mt=r(),Je=$("p"),Je.innerHTML=Nt,_t=r(),We=$("p"),this.h()},l(e){const l=al("svelte-u9bgzb",document.head);n=c(l,"META",{name:!0,content:!0}),l.forEach(t),o=p(e),a=c(e,"P",{}),yt(a).forEach(t),i=p(e),w(u.$$.fragment,e),m=p(e),v=c(e,"P",{"data-svelte-h":!0}),d(v)!=="svelte-1lrbw37"&&(v.textContent=C),k=p(e),Z=c(e,"P",{"data-svelte-h":!0}),d(Z)!=="svelte-1ngdd1j"&&(Z.innerHTML=g),H=p(e),x=c(e,"UL",{"data-svelte-h":!0}),d(x)!=="svelte-10ieul4"&&(x.innerHTML=h),L=p(e),W=c(e,"IFRAME",{width:!0,height:!0,src:!0,title:!0,frameborder:!0,allow:!0}),yt(W).forEach(t),f=p(e),w(J.$$.fragment,e),Ze=p(e),w(I.$$.fragment,e),xe=p(e),P=c(e,"P",{"data-svelte-h":!0}),d(P)!=="svelte-1tq2211"&&(P.textContent=vt),Le=p(e),z=c(e,"P",{"data-svelte-h":!0}),d(z)!=="svelte-raj8tg"&&(z.innerHTML=Ht),Xe=p(e),V=c(e,"P",{"data-svelte-h":!0}),d(V)!=="svelte-18uingj"&&(V.innerHTML=kt),Fe=p(e),w(B.$$.fragment,e),Ue=p(e),E=c(e,"P",{"data-svelte-h":!0}),d(E)!=="svelte-1xr00h4"&&(E.innerHTML=Jt),Ge=p(e),w(q.$$.fragment,e),Re=p(e),Q=c(e,"P",{"data-svelte-h":!0}),d(Q)!=="svelte-i2egdw"&&(Q.innerHTML=jt),Ye=p(e),w(S.$$.fragment,e),Ie=p(e),N=c(e,"P",{"data-svelte-h":!0}),d(N)!=="svelte-1478bsi"&&(N.innerHTML=Wt),Pe=p(e),w(A.$$.fragment,e),ze=p(e),D=c(e,"P",{"data-svelte-h":!0}),d(D)!=="svelte-13ab6wt"&&(D.innerHTML=Ct),Ve=p(e),w(K.$$.fragment,e),Be=p(e),w(O.$$.fragment,e),Ee=p(e),ee=c(e,"P",{"data-svelte-h":!0}),d(ee)!=="svelte-7eiomo"&&(ee.innerHTML=Zt),qe=p(e),te=c(e,"P",{"data-svelte-h":!0}),d(te)!=="svelte-gmjuq7"&&(te.innerHTML=xt),Qe=p(e),w(F.$$.fragment,e),Se=p(e),w(le.$$.fragment,e),Ne=p(e),w(U.$$.fragment,e),Ae=p(e),w(se.$$.fragment,e),De=p(e),ne=c(e,"P",{"data-svelte-h":!0}),d(ne)!=="svelte-ujezx5"&&(ne.innerHTML=Lt),Ke=p(e),ae=c(e,"P",{"data-svelte-h":!0}),d(ae)!=="svelte-1wb81no"&&(ae.innerHTML=Xt),Oe=p(e),w(re.$$.fragment,e),et=p(e),pe=c(e,"P",{"data-svelte-h":!0}),d(pe)!=="svelte-1hzdr71"&&(pe.innerHTML=Ft),tt=p(e),w(ie.$$.fragment,e),lt=p(e),me=c(e,"P",{"data-svelte-h":!0}),d(me)!=="svelte-1yu3blb"&&(me.innerHTML=Ut),st=p(e),w(oe.$$.fragment,e),nt=p(e),fe=c(e,"P",{"data-svelte-h":!0}),d(fe)!=="svelte-1xep3s3"&&(fe.innerHTML=Gt),at=p(e),w(ue.$$.fragment,e),rt=p(e),$e=c(e,"P",{"data-svelte-h":!0}),d($e)!=="svelte-1pi5y8c"&&($e.textContent=Rt),pt=p(e),w(ce.$$.fragment,e),it=p(e),ge=c(e,"P",{"data-svelte-h":!0}),d(ge)!=="svelte-19x4nvo"&&(ge.innerHTML=Yt),mt=p(e),de=c(e,"P",{"data-svelte-h":!0}),d(de)!=="svelte-1v6g4m4"&&(de.innerHTML=It),ot=p(e),w(he.$$.fragment,e),ft=p(e),be=c(e,"P",{"data-svelte-h":!0}),d(be)!=="svelte-1bqr08y"&&(be.innerHTML=Pt),ut=p(e),we=c(e,"P",{"data-svelte-h":!0}),d(we)!=="svelte-ahj3l9"&&(we.innerHTML=zt),$t=p(e),Me=c(e,"P",{"data-svelte-h":!0}),d(Me)!=="svelte-smtcxl"&&(Me.textContent=Vt),ct=p(e),_e=c(e,"UL",{"data-svelte-h":!0}),d(_e)!=="svelte-1v8tvof"&&(_e.innerHTML=Bt),gt=p(e),Te=c(e,"P",{"data-svelte-h":!0}),d(Te)!=="svelte-az8tmc"&&(Te.innerHTML=Et),dt=p(e),ye=c(e,"P",{"data-svelte-h":!0}),d(ye)!=="svelte-32sxm9"&&(ye.innerHTML=qt),ht=p(e),w(ve.$$.fragment,e),bt=p(e),He=c(e,"P",{"data-svelte-h":!0}),d(He)!=="svelte-146w62k"&&(He.innerHTML=Qt),wt=p(e),ke=c(e,"UL",{"data-svelte-h":!0}),d(ke)!=="svelte-9wha7n"&&(ke.innerHTML=St),Mt=p(e),Je=c(e,"P",{"data-svelte-h":!0}),d(Je)!=="svelte-8av605"&&(Je.innerHTML=Nt),_t=p(e),We=c(e,"P",{}),yt(We).forEach(t),this.h()},h(){G(n,"name","hf:doc:metadata"),G(n,"content",_l),G(W,"width","560"),G(W,"height","315"),tl(W.src,Y="https://www.youtube.com/embed/XvSGPZFEjDY")||G(W,"src",Y),G(W,"title","YouTube video player"),G(W,"frameborder","0"),G(W,"allow",`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
picture-in-picture`),W.allowFullscreen=""},m(e,l){rl(document.head,n),s(e,o,l),s(e,a,l),s(e,i,l),M(u,e,l),s(e,m,l),s(e,v,l),s(e,k,l),s(e,Z,l),s(e,H,l),s(e,x,l),s(e,L,l),s(e,W,l),s(e,f,l),M(J,e,l),s(e,Ze,l),M(I,e,l),s(e,xe,l),s(e,P,l),s(e,Le,l),s(e,z,l),s(e,Xe,l),s(e,V,l),s(e,Fe,l),M(B,e,l),s(e,Ue,l),s(e,E,l),s(e,Ge,l),M(q,e,l),s(e,Re,l),s(e,Q,l),s(e,Ye,l),M(S,e,l),s(e,Ie,l),s(e,N,l),s(e,Pe,l),M(A,e,l),s(e,ze,l),s(e,D,l),s(e,Ve,l),M(K,e,l),s(e,Be,l),M(O,e,l),s(e,Ee,l),s(e,ee,l),s(e,qe,l),s(e,te,l),s(e,Qe,l),M(F,e,l),s(e,Se,l),M(le,e,l),s(e,Ne,l),M(U,e,l),s(e,Ae,l),M(se,e,l),s(e,De,l),s(e,ne,l),s(e,Ke,l),s(e,ae,l),s(e,Oe,l),M(re,e,l),s(e,et,l),s(e,pe,l),s(e,tt,l),M(ie,e,l),s(e,lt,l),s(e,me,l),s(e,st,l),M(oe,e,l),s(e,nt,l),s(e,fe,l),s(e,at,l),M(ue,e,l),s(e,rt,l),s(e,$e,l),s(e,pt,l),M(ce,e,l),s(e,it,l),s(e,ge,l),s(e,mt,l),s(e,de,l),s(e,ot,l),M(he,e,l),s(e,ft,l),s(e,be,l),s(e,ut,l),s(e,we,l),s(e,$t,l),s(e,Me,l),s(e,ct,l),s(e,_e,l),s(e,gt,l),s(e,Te,l),s(e,dt,l),s(e,ye,l),s(e,ht,l),M(ve,e,l),s(e,bt,l),s(e,He,l),s(e,wt,l),s(e,ke,l),s(e,Mt,l),s(e,Je,l),s(e,_t,l),s(e,We,l),Tt=!0},p(e,[l]){const At={};l&2&&(At.$$scope={dirty:l,ctx:e}),J.$set(At);const Dt={};l&2&&(Dt.$$scope={dirty:l,ctx:e}),F.$set(Dt);const Kt={};l&2&&(Kt.$$scope={dirty:l,ctx:e}),U.$set(Kt)},i(e){Tt||(_(u.$$.fragment,e),_(J.$$.fragment,e),_(I.$$.fragment,e),_(B.$$.fragment,e),_(q.$$.fragment,e),_(S.$$.fragment,e),_(A.$$.fragment,e),_(K.$$.fragment,e),_(O.$$.fragment,e),_(F.$$.fragment,e),_(le.$$.fragment,e),_(U.$$.fragment,e),_(se.$$.fragment,e),_(re.$$.fragment,e),_(ie.$$.fragment,e),_(oe.$$.fragment,e),_(ue.$$.fragment,e),_(ce.$$.fragment,e),_(he.$$.fragment,e),_(ve.$$.fragment,e),Tt=!0)},o(e){T(u.$$.fragment,e),T(J.$$.fragment,e),T(I.$$.fragment,e),T(B.$$.fragment,e),T(q.$$.fragment,e),T(S.$$.fragment,e),T(A.$$.fragment,e),T(K.$$.fragment,e),T(O.$$.fragment,e),T(F.$$.fragment,e),T(le.$$.fragment,e),T(U.$$.fragment,e),T(se.$$.fragment,e),T(re.$$.fragment,e),T(ie.$$.fragment,e),T(oe.$$.fragment,e),T(ue.$$.fragment,e),T(ce.$$.fragment,e),T(he.$$.fragment,e),T(ve.$$.fragment,e),Tt=!1},d(e){e&&(t(o),t(a),t(i),t(m),t(v),t(k),t(Z),t(H),t(x),t(L),t(W),t(f),t(Ze),t(xe),t(P),t(Le),t(z),t(Xe),t(V),t(Fe),t(Ue),t(E),t(Ge),t(Re),t(Q),t(Ye),t(Ie),t(N),t(Pe),t(ze),t(D),t(Ve),t(Be),t(Ee),t(ee),t(qe),t(te),t(Qe),t(Se),t(Ne),t(Ae),t(De),t(ne),t(Ke),t(ae),t(Oe),t(et),t(pe),t(tt),t(lt),t(me),t(st),t(nt),t(fe),t(at),t(rt),t($e),t(pt),t(it),t(ge),t(mt),t(de),t(ot),t(ft),t(be),t(ut),t(we),t($t),t(Me),t(ct),t(_e),t(gt),t(Te),t(dt),t(ye),t(ht),t(bt),t(He),t(wt),t(ke),t(Mt),t(Je),t(_t),t(We)),t(n),y(u,e),y(J,e),y(I,e),y(B,e),y(q,e),y(S,e),y(A,e),y(K,e),y(O,e),y(F,e),y(le,e),y(U,e),y(se,e),y(re,e),y(ie,e),y(oe,e),y(ue,e),y(ce,e),y(he,e),y(ve,e)}}}const _l='{"title":"分享模型","local":"分享模型","sections":[{"title":"仓库功能","local":"仓库功能","sections":[],"depth":2},{"title":"设置","local":"设置","sections":[],"depth":2},{"title":"转换模型适用于所有框架","local":"转换模型适用于所有框架","sections":[],"depth":2},{"title":"在训练过程中推送模型","local":"在训练过程中推送模型","sections":[],"depth":2},{"title":"使用 push_to_hub 功能","local":"使用-pushtohub-功能","sections":[],"depth":2},{"title":"使用Web界面上传","local":"使用web界面上传","sections":[],"depth":2},{"title":"添加模型卡片","local":"添加模型卡片","sections":[],"depth":2}],"depth":1}';function Tl(j){return ll(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Cl extends sl{constructor(n){super(),nl(this,n,Tl,Ml,el,{})}}export{Cl as component};
