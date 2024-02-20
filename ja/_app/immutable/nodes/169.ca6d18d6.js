import{s as St,o as Yt,n as zt}from"../chunks/scheduler.9bc65507.js";import{S as qt,i as Dt,g as r,s as n,r as m,A as Kt,h as p,f as s,c as a,j as Pt,u as f,x as i,k as $t,y as Ot,a as l,v as u,d,t as c,w as g}from"../chunks/index.707bf1b6.js";import{T as Xt}from"../chunks/Tip.c2ecdbf4.js";import{Y as Nt}from"../chunks/Youtube.e1129c6f.js";import{C as M}from"../chunks/CodeBlock.54a9f38d.js";import{H as T}from"../chunks/Heading.342b1fa6.js";function es(Me){let o,h='メモリ節約のテクニックについての詳細は、<a href="performance">ガイド</a>を参照してください。';return{c(){o=r("p"),o.innerHTML=h},l($){o=p($,"P",{"data-svelte-h":!0}),i(o)!=="svelte-kq2wtx"&&(o.innerHTML=h)},m($,j){l($,o,j)},p:zt,d($){$&&s(o)}}}function ts(Me){let o,h="デフォルトでは、トークナイザは、トークナイザのデフォルトに基づいて <code>attention_mask</code> を自動で作成します。";return{c(){o=r("p"),o.innerHTML=h},l($){o=p($,"P",{"data-svelte-h":!0}),i(o)!=="svelte-1te8ulp"&&(o.innerHTML=h)},m($,j){l($,o,j)},p:zt,d($){$&&s(o)}}}function ss(Me){let o,h,$,j,v,je,C,Mt="時にはエラーが発生することがありますが、私たちはここにいます！このガイドでは、私たちがよく見る最も一般的な問題と、それらを解決する方法について説明します。ただし、このガイドはすべての 🤗 Transformers の問題の包括的なコレクションではありません。問題をトラブルシューティングするための詳細なヘルプが必要な場合は、以下の方法を試してみてください：",ye,_,we,U,ht='<li><a href="https://discuss.huggingface.co/" rel="nofollow">フォーラム</a>で助けを求める。 <a href="https://discuss.huggingface.co/c/beginners/5" rel="nofollow">初心者向け</a> または <a href="https://discuss.huggingface.co/c/transformers/9" rel="nofollow">🤗 Transformers</a> など、質問を投稿できる特定のカテゴリがあります。問題が解決される可能性を最大限にするために、再現可能なコードを含む良い説明的なフォーラム投稿を書くことを確認してください！</li>',be,k,Te,y,jt='<li><p>バグがライブラリに関連する場合は、🤗 Transformers リポジトリで <a href="https://github.com/huggingface/transformers/issues/new/choose" rel="nofollow">Issue</a> を作成してください。バグを説明するためのできるだけ多くの情報を含めるように心がけ、何が問題で、どのように修正できるかをより良く理解できるようにしてください。</p></li> <li><p>より古いバージョンの 🤗 Transformers を使用している場合は、<a href="migration">Migration</a> ガイドを確認してください。バージョン間で重要な変更が導入されているためです。</p></li>',ve,J,yt='トラブルシューティングとヘルプの詳細については、Hugging Faceコースの <a href="https://huggingface.co/course/chapter8/1?fw=pt" rel="nofollow">第8章</a> を参照してください。',Ce,Z,_e,W,wt="一部のクラウド上のGPUインスタンスやイントラネットセットアップは、外部接続に対してファイアウォールで保護されているため、接続エラーが発生することがあります。スクリプトがモデルの重みやデータセットをダウンロードしようとすると、ダウンロードが途中で止まり、次のメッセージとタイムアウトエラーが表示されます：",Ue,V,ke,x,bt='この場合、接続エラーを回避するために<a href="installation#offline-mode">オフラインモード</a>で🤗 Transformersを実行してみてください。',Je,H,Ze,I,Tt="数百万のパラメータを持つ大規模なモデルのトレーニングは、適切なハードウェアなしでは課題です。GPUのメモリが不足するとよくあるエラーの1つは次のとおりです：",We,G,vt="以下はメモリ使用量を減らすために試すことができるいくつかの解決策です：",Ve,B,Ct='<li><a href="/docs/transformers/main/ja/main_classes/trainer#transformers.TrainingArguments">TrainingArguments</a>の中で <a href="main_classes/trainer#transformers.TrainingArguments.per_device_train_batch_size"><code>per_device_train_batch_size</code></a> の値を減らす。</li> <li><a href="/docs/transformers/main/ja/main_classes/trainer#transformers.TrainingArguments">TrainingArguments</a>の中で <a href="main_classes/trainer#transformers.TrainingArguments.gradient_accumulation_steps"><code>gradient_accumulation_steps</code></a> を使用して、全体的なバッチサイズを効果的に増やすことを試す。</li>',xe,w,He,Q,Ie,R,_t='TensorFlowの<a href="https://www.tensorflow.org/tutorials/keras/save_and_load#save_the_entire_model" rel="nofollow">model.save</a>メソッドは、モデル全体 - アーキテクチャ、重み、トレーニング設定 - を1つのファイルに保存します。しかし、モデルファイルを再度読み込む際にエラーが発生することがあります。これは、🤗 Transformersがモデルファイル内のすべてのTensorFlow関連オブジェクトを読み込まないためです。TensorFlowモデルの保存と読み込みに関する問題を回避するために、次のことをお勧めします：',Ge,A,Ut='<li>モデルの重みを<code>h5</code>ファイル拡張子で保存し、<a href="/docs/transformers/main/ja/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a>を使用してモデルを再読み込みする：</li>',Be,E,Qe,F,kt='<li>Save the model with <code>~TFPretrainedModel.save_pretrained</code> and load it again with <a href="/docs/transformers/main/ja/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a>:</li>',Re,L,Ae,P,Ee,X,Jt="もう一つよくあるエラーは、特に新しくリリースされたモデルの場合に遭遇することがある <code>ImportError</code> です：",Fe,N,Le,z,Zt="これらのエラータイプに関しては、最新バージョンの 🤗 Transformers がインストールされていることを確認して、最新のモデルにアクセスできるようにしてください：",Pe,S,Xe,Y,Ne,q,Wt="時々、デバイスコードでエラーが発生したという一般的な CUDA エラーに遭遇することがあります。",ze,D,Se,K,Vt="より具体的なエラーメッセージを取得するために、まずはCPU上でコードを実行してみることをお勧めします。以下の環境変数をコードの冒頭に追加して、CPUに切り替えてみてください：",Ye,O,qe,ee,xt="GPUからより良いトレースバックを取得する別のオプションは、次の環境変数をコードの先頭に追加することです。これにより、エラーの発生源を指すトレースバックが得られます：",De,te,Ke,se,Oe,le,Ht="一部のケースでは、<code>input_ids</code>にパディングトークンが含まれている場合、出力の<code>hidden_state</code>が正しくないことがあります。デモンストレーションのために、モデルとトークナイザーをロードします。モデルの<code>pad_token_id</code>にアクセスして、その値を確認できます。一部のモデルでは<code>pad_token_id</code>が<code>None</code>になることもありますが、常に手動で設定することができます。",et,ne,tt,ae,It="以下の例は、パディングトークンをマスクせずに出力を表示したものです：",st,re,lt,pe,Gt="以下は、第2のシーケンスの実際の出力です：",nt,ie,at,oe,Bt="大抵の場合、モデルには <code>attention_mask</code> を提供して、パディングトークンを無視し、このような無音のエラーを回避する必要があります。これにより、2番目のシーケンスの出力が実際の出力と一致するようになります。",rt,b,pt,me,it,fe,Qt="🤗 Transformersは、提供されるパディングトークンをマスクするために自動的に<code>attention_mask</code>を作成しません。その理由は以下の通りです：",ot,ue,Rt="<li>一部のモデルにはパディングトークンが存在しない場合があるためです。</li> <li>一部のユースケースでは、ユーザーがパディングトークンにアテンションを向けることを望む場合があるためです。</li>",mt,de,ft,ce,At=`一般的に、事前学習済みモデルのインスタンスをロードするためには<a href="/docs/transformers/main/ja/model_doc/auto#transformers.AutoModel">AutoModel</a>クラスを使用することをお勧めします。このクラスは、設定に基づいて与えられたチェックポイントから正しいアーキテクチャを自動的に推測およびロードできます。モデルをロードする際にこの<code>ValueError</code>が表示される場合、Autoクラスは与えられたチェックポイントの設定から、ロードしようとしているモデルの種類へのマッピングを見つけることができなかったことを意味します。最も一般的には、特定のタスクをサポートしないチェックポイントがある場合にこのエラーが発生します。
例えば、質問応答のためのGPT2が存在しない場合、次の例でこのエラーが表示されます：`,ut,ge,Et="上記のテキストを日本語に翻訳し、Markdownファイルとしてフォーマットしました。",dt,$e,ct,he,gt;return v=new T({props:{title:"Troubleshoot",local:"troubleshoot",headingTag:"h1"}}),_=new Nt({props:{id:"S2EEG3JIt2A"}}),k=new Nt({props:{id:"_PAli-V4wj0"}}),Z=new T({props:{title:"Firewalled environments",local:"firewalled-environments",headingTag:"h2"}}),V=new M({props:{code:"VmFsdWVFcnJvciUzQSUyMENvbm5lY3Rpb24lMjBlcnJvciUyQyUyMGFuZCUyMHdlJTIwY2Fubm90JTIwZmluZCUyMHRoZSUyMHJlcXVlc3RlZCUyMGZpbGVzJTIwaW4lMjB0aGUlMjBjYWNoZWQlMjBwYXRoLiUwQVBsZWFzZSUyMHRyeSUyMGFnYWluJTIwb3IlMjBtYWtlJTIwc3VyZSUyMHlvdXIlMjBJbnRlcm5ldCUyMGNvbm5lY3Rpb24lMjBpcyUyMG9uLg==",highlighted:`ValueError: Connection error, <span class="hljs-built_in">and</span> we cannot <span class="hljs-keyword">find</span> the requested <span class="hljs-keyword">files</span> in the cached path.
Please <span class="hljs-keyword">try</span> again <span class="hljs-built_in">or</span> <span class="hljs-keyword">make</span> sure your Internet connection <span class="hljs-keyword">is</span> <span class="hljs-keyword">on</span>.`,wrap:!1}}),H=new T({props:{title:"CUDA out of memory",local:"cuda-out-of-memory",headingTag:"h2"}}),w=new Xt({props:{$$slots:{default:[es]},$$scope:{ctx:Me}}}),Q=new T({props:{title:"Unable to load a saved TensorFlow model",local:"unable-to-load-a-saved-tensorflow-model",headingTag:"h2"}}),E=new M({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFRGUHJlVHJhaW5lZE1vZGVsJTBBJTBBbW9kZWwuc2F2ZV93ZWlnaHRzKCUyMnNvbWVfZm9sZGVyJTJGdGZfbW9kZWwuaDUlMjIpJTBBbW9kZWwlMjAlM0QlMjBURlByZVRyYWluZWRNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyc29tZV9mb2xkZXIlMjIp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFPreTrainedModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_weights(<span class="hljs-string">&quot;some_folder/tf_model.h5&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFPreTrainedModel.from_pretrained(<span class="hljs-string">&quot;some_folder&quot;</span>)`,wrap:!1}}),L=new M({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFRGUHJlVHJhaW5lZE1vZGVsJTBBJTBBbW9kZWwuc2F2ZV9wcmV0cmFpbmVkKCUyMnBhdGhfdG8lMkZtb2RlbCUyMiklMEFtb2RlbCUyMCUzRCUyMFRGUHJlVHJhaW5lZE1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJwYXRoX3RvJTJGbW9kZWwlMjIp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFPreTrainedModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;path_to/model&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFPreTrainedModel.from_pretrained(<span class="hljs-string">&quot;path_to/model&quot;</span>)`,wrap:!1}}),P=new T({props:{title:"ImportError",local:"importerror",headingTag:"h2"}}),N=new M({props:{code:"SW1wb3J0RXJyb3IlM0ElMjBjYW5ub3QlMjBpbXBvcnQlMjBuYW1lJTIwJ0ltYWdlR1BUSW1hZ2VQcm9jZXNzb3InJTIwZnJvbSUyMCd0cmFuc2Zvcm1lcnMnJTIwKHVua25vd24lMjBsb2NhdGlvbik=",highlighted:'ImportError: cannot <span class="hljs-keyword">import</span> <span class="hljs-type">name</span> <span class="hljs-string">&#x27;ImageGPTImageProcessor&#x27;</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;transformers&#x27;</span> (<span class="hljs-type">unknown</span> <span class="hljs-keyword">location</span>)',wrap:!1}}),S=new M({props:{code:"cGlwJTIwaW5zdGFsbCUyMHRyYW5zZm9ybWVycyUyMC0tdXBncmFkZQ==",highlighted:"pip install transformers --upgrade",wrap:!1}}),Y=new T({props:{title:"CUDA error: device-side assert triggered",local:"cuda-error-device-side-assert-triggered",headingTag:"h2"}}),D=new M({props:{code:"UnVudGltZUVycm9yJTNBJTIwQ1VEQSUyMGVycm9yJTNBJTIwZGV2aWNlLXNpZGUlMjBhc3NlcnQlMjB0cmlnZ2VyZWQ=",highlighted:'RuntimeError: CUDA <span class="hljs-literal">error</span>: device-<span class="hljs-literal">side</span> <span class="hljs-keyword">assert</span> triggered',wrap:!1}}),O=new M({props:{code:"aW1wb3J0JTIwb3MlMEElMEFvcy5lbnZpcm9uJTVCJTIyQ1VEQV9WSVNJQkxFX0RFVklDRVMlMjIlNUQlMjAlM0QlMjAlMjIlMjI=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> os

<span class="hljs-meta">&gt;&gt;&gt; </span>os.environ[<span class="hljs-string">&quot;CUDA_VISIBLE_DEVICES&quot;</span>] = <span class="hljs-string">&quot;&quot;</span>`,wrap:!1}}),te=new M({props:{code:"aW1wb3J0JTIwb3MlMEElMEFvcy5lbnZpcm9uJTVCJTIyQ1VEQV9MQVVOQ0hfQkxPQ0tJTkclMjIlNUQlMjAlM0QlMjAlMjIxJTIy",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> os

<span class="hljs-meta">&gt;&gt;&gt; </span>os.environ[<span class="hljs-string">&quot;CUDA_LAUNCH_BLOCKING&quot;</span>] = <span class="hljs-string">&quot;1&quot;</span>`,wrap:!1}}),se=new T({props:{title:"Incorrect output when padding tokens aren’t masked",local:"incorrect-output-when-padding-tokens-arent-masked",headingTag:"h2"}}),ne=new M({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Nb2RlbEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMEFpbXBvcnQlMjB0b3JjaCUwQSUwQW1vZGVsJTIwJTNEJTIwQXV0b01vZGVsRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlLWJlcnQlMkZiZXJ0LWJhc2UtdW5jYXNlZCUyMiklMEFtb2RlbC5jb25maWcucGFkX3Rva2VuX2lk",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id
<span class="hljs-number">0</span>`,wrap:!1}}),re=new M({props:{code:"aW5wdXRfaWRzJTIwJTNEJTIwdG9yY2gudGVuc29yKCU1QiU1Qjc1OTIlMkMlMjAyMDU3JTJDJTIwMjA5NyUyQyUyMDIzOTMlMkMlMjA5NjExJTJDJTIwMjExNSU1RCUyQyUyMCU1Qjc1OTIlMkMlMjAwJTJDJTIwMCUyQyUyMDAlMkMlMjAwJTJDJTIwMCU1RCU1RCklMEFvdXRwdXQlMjAlM0QlMjBtb2RlbChpbnB1dF9pZHMpJTBBcHJpbnQob3V0cHV0LmxvZ2l0cyk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor([[<span class="hljs-number">7592</span>, <span class="hljs-number">2057</span>, <span class="hljs-number">2097</span>, <span class="hljs-number">2393</span>, <span class="hljs-number">9611</span>, <span class="hljs-number">2115</span>], [<span class="hljs-number">7592</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]])
<span class="hljs-meta">&gt;&gt;&gt; </span>output = model(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(output.logits)
tensor([[ <span class="hljs-number">0.0082</span>, -<span class="hljs-number">0.2307</span>],
        [ <span class="hljs-number">0.1317</span>, -<span class="hljs-number">0.1683</span>]], grad_fn=&lt;AddmmBackward0&gt;)`,wrap:!1}}),ie=new M({props:{code:"aW5wdXRfaWRzJTIwJTNEJTIwdG9yY2gudGVuc29yKCU1QiU1Qjc1OTIlNUQlNUQpJTBBb3V0cHV0JTIwJTNEJTIwbW9kZWwoaW5wdXRfaWRzKSUwQXByaW50KG91dHB1dC5sb2dpdHMp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor([[<span class="hljs-number">7592</span>]])
<span class="hljs-meta">&gt;&gt;&gt; </span>output = model(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(output.logits)
tensor([[-<span class="hljs-number">0.1008</span>, -<span class="hljs-number">0.4061</span>]], grad_fn=&lt;AddmmBackward0&gt;)`,wrap:!1}}),b=new Xt({props:{$$slots:{default:[ts]},$$scope:{ctx:Me}}}),me=new M({props:{code:"YXR0ZW50aW9uX21hc2slMjAlM0QlMjB0b3JjaC50ZW5zb3IoJTVCJTVCMSUyQyUyMDElMkMlMjAxJTJDJTIwMSUyQyUyMDElMkMlMjAxJTVEJTJDJTIwJTVCMSUyQyUyMDAlMkMlMjAwJTJDJTIwMCUyQyUyMDAlMkMlMjAwJTVEJTVEKSUwQW91dHB1dCUyMCUzRCUyMG1vZGVsKGlucHV0X2lkcyUyQyUyMGF0dGVudGlvbl9tYXNrJTNEYXR0ZW50aW9uX21hc2spJTBBcHJpbnQob3V0cHV0LmxvZ2l0cyk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">1</span>], [<span class="hljs-number">1</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]])
<span class="hljs-meta">&gt;&gt;&gt; </span>output = model(input_ids, attention_mask=attention_mask)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(output.logits)
tensor([[ <span class="hljs-number">0.0082</span>, -<span class="hljs-number">0.2307</span>],
        [-<span class="hljs-number">0.1008</span>, -<span class="hljs-number">0.4061</span>]], grad_fn=&lt;AddmmBackward0&gt;)`,wrap:!1}}),de=new T({props:{title:"ValueError: Unrecognized configuration class XYZ for this kind of AutoModel",local:"valueerror-unrecognized-configuration-class-xyz-for-this-kind-of-automodel",headingTag:"h2"}}),$e=new M({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Qcm9jZXNzb3IlMkMlMjBBdXRvTW9kZWxGb3JRdWVzdGlvbkFuc3dlcmluZyUwQSUwQXByb2Nlc3NvciUyMCUzRCUyMEF1dG9Qcm9jZXNzb3IuZnJvbV9wcmV0cmFpbmVkKCUyMm9wZW5haS1jb21tdW5pdHklMkZncHQyLW1lZGl1bSUyMiklMEFtb2RlbCUyMCUzRCUyMEF1dG9Nb2RlbEZvclF1ZXN0aW9uQW5zd2VyaW5nLmZyb21fcHJldHJhaW5lZCglMjJvcGVuYWktY29tbXVuaXR5JTJGZ3B0Mi1tZWRpdW0lMjIp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoProcessor, AutoModelForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>processor = AutoProcessor.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2-medium&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2-medium&quot;</span>)
ValueError: Unrecognized configuration <span class="hljs-keyword">class</span> &lt;<span class="hljs-keyword">class</span> <span class="hljs-string">&#x27;transformers.models.gpt2.configuration_gpt2.GPT2Config&#x27;</span>&gt; <span class="hljs-keyword">for</span> this kind of AutoModel: AutoModelForQuestionAnswering.
Model <span class="hljs-built_in">type</span> should be one of AlbertConfig, BartConfig, BertConfig, BigBirdConfig, BigBirdPegasusConfig, BloomConfig, ...`,wrap:!1}}),{c(){o=r("meta"),h=n(),$=r("p"),j=n(),m(v.$$.fragment),je=n(),C=r("p"),C.textContent=Mt,ye=n(),m(_.$$.fragment),we=n(),U=r("ol"),U.innerHTML=ht,be=n(),m(k.$$.fragment),Te=n(),y=r("ol"),y.innerHTML=jt,ve=n(),J=r("p"),J.innerHTML=yt,Ce=n(),m(Z.$$.fragment),_e=n(),W=r("p"),W.textContent=wt,Ue=n(),m(V.$$.fragment),ke=n(),x=r("p"),x.innerHTML=bt,Je=n(),m(H.$$.fragment),Ze=n(),I=r("p"),I.textContent=Tt,We=n(),G=r("p"),G.textContent=vt,Ve=n(),B=r("ul"),B.innerHTML=Ct,xe=n(),m(w.$$.fragment),He=n(),m(Q.$$.fragment),Ie=n(),R=r("p"),R.innerHTML=_t,Ge=n(),A=r("ul"),A.innerHTML=Ut,Be=n(),m(E.$$.fragment),Qe=n(),F=r("ul"),F.innerHTML=kt,Re=n(),m(L.$$.fragment),Ae=n(),m(P.$$.fragment),Ee=n(),X=r("p"),X.innerHTML=Jt,Fe=n(),m(N.$$.fragment),Le=n(),z=r("p"),z.textContent=Zt,Pe=n(),m(S.$$.fragment),Xe=n(),m(Y.$$.fragment),Ne=n(),q=r("p"),q.textContent=Wt,ze=n(),m(D.$$.fragment),Se=n(),K=r("p"),K.textContent=Vt,Ye=n(),m(O.$$.fragment),qe=n(),ee=r("p"),ee.textContent=xt,De=n(),m(te.$$.fragment),Ke=n(),m(se.$$.fragment),Oe=n(),le=r("p"),le.innerHTML=Ht,et=n(),m(ne.$$.fragment),tt=n(),ae=r("p"),ae.textContent=It,st=n(),m(re.$$.fragment),lt=n(),pe=r("p"),pe.textContent=Gt,nt=n(),m(ie.$$.fragment),at=n(),oe=r("p"),oe.innerHTML=Bt,rt=n(),m(b.$$.fragment),pt=n(),m(me.$$.fragment),it=n(),fe=r("p"),fe.innerHTML=Qt,ot=n(),ue=r("ul"),ue.innerHTML=Rt,mt=n(),m(de.$$.fragment),ft=n(),ce=r("p"),ce.innerHTML=At,ut=n(),ge=r("p"),ge.textContent=Et,dt=n(),m($e.$$.fragment),ct=n(),he=r("p"),this.h()},l(e){const t=Kt("svelte-u9bgzb",document.head);o=p(t,"META",{name:!0,content:!0}),t.forEach(s),h=a(e),$=p(e,"P",{}),Pt($).forEach(s),j=a(e),f(v.$$.fragment,e),je=a(e),C=p(e,"P",{"data-svelte-h":!0}),i(C)!=="svelte-s6sfyp"&&(C.textContent=Mt),ye=a(e),f(_.$$.fragment,e),we=a(e),U=p(e,"OL",{"data-svelte-h":!0}),i(U)!=="svelte-jwwp5m"&&(U.innerHTML=ht),be=a(e),f(k.$$.fragment,e),Te=a(e),y=p(e,"OL",{start:!0,"data-svelte-h":!0}),i(y)!=="svelte-ovik9v"&&(y.innerHTML=jt),ve=a(e),J=p(e,"P",{"data-svelte-h":!0}),i(J)!=="svelte-yypmp"&&(J.innerHTML=yt),Ce=a(e),f(Z.$$.fragment,e),_e=a(e),W=p(e,"P",{"data-svelte-h":!0}),i(W)!=="svelte-17534jc"&&(W.textContent=wt),Ue=a(e),f(V.$$.fragment,e),ke=a(e),x=p(e,"P",{"data-svelte-h":!0}),i(x)!=="svelte-1kuubaa"&&(x.innerHTML=bt),Je=a(e),f(H.$$.fragment,e),Ze=a(e),I=p(e,"P",{"data-svelte-h":!0}),i(I)!=="svelte-1h9q9as"&&(I.textContent=Tt),We=a(e),G=p(e,"P",{"data-svelte-h":!0}),i(G)!=="svelte-dxqlw4"&&(G.textContent=vt),Ve=a(e),B=p(e,"UL",{"data-svelte-h":!0}),i(B)!=="svelte-1vvioj6"&&(B.innerHTML=Ct),xe=a(e),f(w.$$.fragment,e),He=a(e),f(Q.$$.fragment,e),Ie=a(e),R=p(e,"P",{"data-svelte-h":!0}),i(R)!=="svelte-1mjo033"&&(R.innerHTML=_t),Ge=a(e),A=p(e,"UL",{"data-svelte-h":!0}),i(A)!=="svelte-hf4y8a"&&(A.innerHTML=Ut),Be=a(e),f(E.$$.fragment,e),Qe=a(e),F=p(e,"UL",{"data-svelte-h":!0}),i(F)!=="svelte-e9odc4"&&(F.innerHTML=kt),Re=a(e),f(L.$$.fragment,e),Ae=a(e),f(P.$$.fragment,e),Ee=a(e),X=p(e,"P",{"data-svelte-h":!0}),i(X)!=="svelte-1cyjig7"&&(X.innerHTML=Jt),Fe=a(e),f(N.$$.fragment,e),Le=a(e),z=p(e,"P",{"data-svelte-h":!0}),i(z)!=="svelte-dmovig"&&(z.textContent=Zt),Pe=a(e),f(S.$$.fragment,e),Xe=a(e),f(Y.$$.fragment,e),Ne=a(e),q=p(e,"P",{"data-svelte-h":!0}),i(q)!=="svelte-vap7w6"&&(q.textContent=Wt),ze=a(e),f(D.$$.fragment,e),Se=a(e),K=p(e,"P",{"data-svelte-h":!0}),i(K)!=="svelte-y29pln"&&(K.textContent=Vt),Ye=a(e),f(O.$$.fragment,e),qe=a(e),ee=p(e,"P",{"data-svelte-h":!0}),i(ee)!=="svelte-15jwdw4"&&(ee.textContent=xt),De=a(e),f(te.$$.fragment,e),Ke=a(e),f(se.$$.fragment,e),Oe=a(e),le=p(e,"P",{"data-svelte-h":!0}),i(le)!=="svelte-1qfzu93"&&(le.innerHTML=Ht),et=a(e),f(ne.$$.fragment,e),tt=a(e),ae=p(e,"P",{"data-svelte-h":!0}),i(ae)!=="svelte-8pnndi"&&(ae.textContent=It),st=a(e),f(re.$$.fragment,e),lt=a(e),pe=p(e,"P",{"data-svelte-h":!0}),i(pe)!=="svelte-ckwzxj"&&(pe.textContent=Gt),nt=a(e),f(ie.$$.fragment,e),at=a(e),oe=p(e,"P",{"data-svelte-h":!0}),i(oe)!=="svelte-1fav2gs"&&(oe.innerHTML=Bt),rt=a(e),f(b.$$.fragment,e),pt=a(e),f(me.$$.fragment,e),it=a(e),fe=p(e,"P",{"data-svelte-h":!0}),i(fe)!=="svelte-1yt3t95"&&(fe.innerHTML=Qt),ot=a(e),ue=p(e,"UL",{"data-svelte-h":!0}),i(ue)!=="svelte-1h4mqm5"&&(ue.innerHTML=Rt),mt=a(e),f(de.$$.fragment,e),ft=a(e),ce=p(e,"P",{"data-svelte-h":!0}),i(ce)!=="svelte-k220wk"&&(ce.innerHTML=At),ut=a(e),ge=p(e,"P",{"data-svelte-h":!0}),i(ge)!=="svelte-j4u4uz"&&(ge.textContent=Et),dt=a(e),f($e.$$.fragment,e),ct=a(e),he=p(e,"P",{}),Pt(he).forEach(s),this.h()},h(){$t(o,"name","hf:doc:metadata"),$t(o,"content",ls),$t(y,"start","2")},m(e,t){Ot(document.head,o),l(e,h,t),l(e,$,t),l(e,j,t),u(v,e,t),l(e,je,t),l(e,C,t),l(e,ye,t),u(_,e,t),l(e,we,t),l(e,U,t),l(e,be,t),u(k,e,t),l(e,Te,t),l(e,y,t),l(e,ve,t),l(e,J,t),l(e,Ce,t),u(Z,e,t),l(e,_e,t),l(e,W,t),l(e,Ue,t),u(V,e,t),l(e,ke,t),l(e,x,t),l(e,Je,t),u(H,e,t),l(e,Ze,t),l(e,I,t),l(e,We,t),l(e,G,t),l(e,Ve,t),l(e,B,t),l(e,xe,t),u(w,e,t),l(e,He,t),u(Q,e,t),l(e,Ie,t),l(e,R,t),l(e,Ge,t),l(e,A,t),l(e,Be,t),u(E,e,t),l(e,Qe,t),l(e,F,t),l(e,Re,t),u(L,e,t),l(e,Ae,t),u(P,e,t),l(e,Ee,t),l(e,X,t),l(e,Fe,t),u(N,e,t),l(e,Le,t),l(e,z,t),l(e,Pe,t),u(S,e,t),l(e,Xe,t),u(Y,e,t),l(e,Ne,t),l(e,q,t),l(e,ze,t),u(D,e,t),l(e,Se,t),l(e,K,t),l(e,Ye,t),u(O,e,t),l(e,qe,t),l(e,ee,t),l(e,De,t),u(te,e,t),l(e,Ke,t),u(se,e,t),l(e,Oe,t),l(e,le,t),l(e,et,t),u(ne,e,t),l(e,tt,t),l(e,ae,t),l(e,st,t),u(re,e,t),l(e,lt,t),l(e,pe,t),l(e,nt,t),u(ie,e,t),l(e,at,t),l(e,oe,t),l(e,rt,t),u(b,e,t),l(e,pt,t),u(me,e,t),l(e,it,t),l(e,fe,t),l(e,ot,t),l(e,ue,t),l(e,mt,t),u(de,e,t),l(e,ft,t),l(e,ce,t),l(e,ut,t),l(e,ge,t),l(e,dt,t),u($e,e,t),l(e,ct,t),l(e,he,t),gt=!0},p(e,[t]){const Ft={};t&2&&(Ft.$$scope={dirty:t,ctx:e}),w.$set(Ft);const Lt={};t&2&&(Lt.$$scope={dirty:t,ctx:e}),b.$set(Lt)},i(e){gt||(d(v.$$.fragment,e),d(_.$$.fragment,e),d(k.$$.fragment,e),d(Z.$$.fragment,e),d(V.$$.fragment,e),d(H.$$.fragment,e),d(w.$$.fragment,e),d(Q.$$.fragment,e),d(E.$$.fragment,e),d(L.$$.fragment,e),d(P.$$.fragment,e),d(N.$$.fragment,e),d(S.$$.fragment,e),d(Y.$$.fragment,e),d(D.$$.fragment,e),d(O.$$.fragment,e),d(te.$$.fragment,e),d(se.$$.fragment,e),d(ne.$$.fragment,e),d(re.$$.fragment,e),d(ie.$$.fragment,e),d(b.$$.fragment,e),d(me.$$.fragment,e),d(de.$$.fragment,e),d($e.$$.fragment,e),gt=!0)},o(e){c(v.$$.fragment,e),c(_.$$.fragment,e),c(k.$$.fragment,e),c(Z.$$.fragment,e),c(V.$$.fragment,e),c(H.$$.fragment,e),c(w.$$.fragment,e),c(Q.$$.fragment,e),c(E.$$.fragment,e),c(L.$$.fragment,e),c(P.$$.fragment,e),c(N.$$.fragment,e),c(S.$$.fragment,e),c(Y.$$.fragment,e),c(D.$$.fragment,e),c(O.$$.fragment,e),c(te.$$.fragment,e),c(se.$$.fragment,e),c(ne.$$.fragment,e),c(re.$$.fragment,e),c(ie.$$.fragment,e),c(b.$$.fragment,e),c(me.$$.fragment,e),c(de.$$.fragment,e),c($e.$$.fragment,e),gt=!1},d(e){e&&(s(h),s($),s(j),s(je),s(C),s(ye),s(we),s(U),s(be),s(Te),s(y),s(ve),s(J),s(Ce),s(_e),s(W),s(Ue),s(ke),s(x),s(Je),s(Ze),s(I),s(We),s(G),s(Ve),s(B),s(xe),s(He),s(Ie),s(R),s(Ge),s(A),s(Be),s(Qe),s(F),s(Re),s(Ae),s(Ee),s(X),s(Fe),s(Le),s(z),s(Pe),s(Xe),s(Ne),s(q),s(ze),s(Se),s(K),s(Ye),s(qe),s(ee),s(De),s(Ke),s(Oe),s(le),s(et),s(tt),s(ae),s(st),s(lt),s(pe),s(nt),s(at),s(oe),s(rt),s(pt),s(it),s(fe),s(ot),s(ue),s(mt),s(ft),s(ce),s(ut),s(ge),s(dt),s(ct),s(he)),s(o),g(v,e),g(_,e),g(k,e),g(Z,e),g(V,e),g(H,e),g(w,e),g(Q,e),g(E,e),g(L,e),g(P,e),g(N,e),g(S,e),g(Y,e),g(D,e),g(O,e),g(te,e),g(se,e),g(ne,e),g(re,e),g(ie,e),g(b,e),g(me,e),g(de,e),g($e,e)}}}const ls='{"title":"Troubleshoot","local":"troubleshoot","sections":[{"title":"Firewalled environments","local":"firewalled-environments","sections":[],"depth":2},{"title":"CUDA out of memory","local":"cuda-out-of-memory","sections":[],"depth":2},{"title":"Unable to load a saved TensorFlow model","local":"unable-to-load-a-saved-tensorflow-model","sections":[],"depth":2},{"title":"ImportError","local":"importerror","sections":[],"depth":2},{"title":"CUDA error: device-side assert triggered","local":"cuda-error-device-side-assert-triggered","sections":[],"depth":2},{"title":"Incorrect output when padding tokens aren’t masked","local":"incorrect-output-when-padding-tokens-arent-masked","sections":[],"depth":2},{"title":"ValueError: Unrecognized configuration class XYZ for this kind of AutoModel","local":"valueerror-unrecognized-configuration-class-xyz-for-this-kind-of-automodel","sections":[],"depth":2}],"depth":1}';function ns(Me){return Yt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class fs extends qt{constructor(o){super(),Dt(this,o,ns,ss,St,{})}}export{fs as component};
