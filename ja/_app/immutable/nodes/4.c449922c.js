import{s as $n,o as Mn,n as vn}from"../chunks/scheduler.9bc65507.js";import{S as yn,i as Cn,g as r,s as o,r as p,A as hn,h as s,f as l,c as i,j as _n,u as a,x as d,k as Se,y as xn,a as n,v as T,d as u,t as w,w as c}from"../chunks/index.707bf1b6.js";import{T as bn}from"../chunks/Tip.c2ecdbf4.js";import{C as J}from"../chunks/CodeBlock.54a9f38d.js";import{H as We}from"../chunks/Heading.342b1fa6.js";function Ln(Ve){let m,M="使用したいモデルに対応するTensorFlowアーキテクチャがすでに存在するかどうかわからないですか？",_,v,y=" ",C,b,Ye=`選択したモデルの<code>config.json</code>の<code>model_type</code>フィールドをチェックしてみてください
（<a href="https://huggingface.co/google-bert/bert-base-uncased/blob/main/config.json#L14" rel="nofollow">例</a>）。
🤗 Transformersの該当するモデルフォルダに、名前が”modeling_tf”で始まるファイルがある場合、それは対応するTensorFlow
アーキテクチャを持っていることを意味します（<a href="https://github.com/huggingface/transformers/tree/main/src/transformers/models/bert" rel="nofollow">例</a>）。`;return{c(){m=r("p"),m.textContent=M,_=o(),v=r("p"),v.textContent=y,C=o(),b=r("p"),b.innerHTML=Ye},l(f){m=s(f,"P",{"data-svelte-h":!0}),d(m)!=="svelte-108pkzw"&&(m.textContent=M),_=i(f),v=s(f,"P",{"data-svelte-h":!0}),d(v)!=="svelte-1cdgjs8"&&(v.textContent=y),C=i(f),b=s(f,"P",{"data-svelte-h":!0}),d(b)!=="svelte-109aid5"&&(b.innerHTML=Ye)},m(f,$){n(f,m,$),n(f,_,$),n(f,v,$),n(f,C,$),n(f,b,$)},p:vn,d(f){f&&(l(m),l(_),l(v),l(C),l(b))}}}function Hn(Ve){let m,M=`TensorFlow モデルのアーキテクチャに取り組む前に、それを行うための進行中の取り組みがないかを再確認してください。
GitHub ページの<a href="https://github.com/huggingface/transformers/pulls?q=is%3Apr" rel="nofollow">プルリクエスト</a>で <code>BrandNewBert</code> を検索して、
TensorFlow 関連のプルリクエストがないことを確認できます。`;return{c(){m=r("p"),m.innerHTML=M},l(_){m=s(_,"P",{"data-svelte-h":!0}),d(m)!=="svelte-u1612d"&&(m.innerHTML=M)},m(_,v){n(_,m,v)},p:vn,d(_){_&&l(m)}}}function gn(Ve){let m,M,_,v,y,C,b,Ye=`🤗 Transformersを使用するために複数のフレームワークが利用可能であることは、アプリケーションを設計する際にそれぞれの強みを活かす柔軟性を提供しますが、
互換性をモデルごとに追加する必要があることを意味します。しかし、幸いなことに
既存のモデルにTensorFlow互換性を追加することは、<a href="add_new_model">ゼロから新しいモデルを追加すること</a>よりも簡単です！
大規模なTensorFlowモデルの詳細を理解したり、主要なオープンソースの貢献を行ったり、
選択したモデルをTensorFlowで有効にするためのガイドです。`,f,$,al=`このガイドは、コミュニティのメンバーであるあなたに、TensorFlowモデルの重みおよび/または
アーキテクチャを🤗 Transformersで使用するために、Hugging Faceチームからの最小限の監視で貢献できる力を与えます。新しいモデルを書くことは小さな偉業ではありませんが、
このガイドを読むことで、それがローラーコースターのようなものから散歩のようなものになることを願っています🎢🚶。
このプロセスをますます簡単にするために、私たちの共通の経験を活用することは非常に重要ですので、
このガイドの改善を提案することを強くお勧めします！`,Qe,U,Tl="さらに詳しく調べる前に、以下のリソースをチェックすることをお勧めします。🤗 Transformersが初めての場合：",Oe,B,ul='<li><a href="add_new_model#general-overview-of-transformers">🤗 Transformersの一般的な概要</a></li> <li><a href="https://huggingface.co/blog/tensorflow-philosophy" rel="nofollow">Hugging FaceのTensorFlow哲学</a></li>',Ee,R,wl=`このガイドの残りの部分では、新しいTensorFlowモデルアーキテクチャを追加するために必要なもの、
PyTorchをTensorFlowモデルの重みに変換する手順、およびMLフレームワーク間の不一致を効率的にデバッグする方法について学びます。それでは始めましょう！`,Ae,h,qe,k,De,N,cl=`大規模なモデルアーキテクチャを設計する方法はさまざまであり、その設計を実装する方法もさまざまです。
しかし、<a href="add_new_model#general-overview-of-transformers">🤗 Transformersの一般的な概要</a>から
思い出していただけるかもしれませんが、私たちは意見のあるグループです - 🤗 Transformersの使いやすさは一貫性のある設計の選択肢に依存しています。経験から、TensorFlowモデルを追加する際に重要なことをいくつかお伝えできます：`,Ke,Z,_l=`<li>車輪を再発明しないでください！ほとんどの場合、確認すべき少なくとも2つの参照実装があります。それは、
あなたが実装しているモデルのPyTorchバージョンと、同じ種類の問題に対する他のTensorFlowモデルです。</li> <li>優れたモデル実装は時間の試練を乗り越えます。これは、コードがきれいだからではなく、コードが明確で、デバッグしやすく、
構築しやすいからです。TensorFlow実装でPyTorch実装と一致するパターンを複製し、PyTorch実装との不一致を最小限に抑えることで、
あなたの貢献が長期間にわたって有用であることを保証します。</li> <li>行き詰まったら助けを求めてください！ 🤗 Transformersチームはここにいますし、おそらくあなたが直面している同じ問題に対する解決策を見つけています。</li>`,et,j,bl="TensorFlowモデルアーキテクチャを追加するために必要なステップの概要は次のとおりです：",tt,G,vl="<li>変換したいモデルを選択</li> <li>transformersの開発環境を準備</li> <li>（オプション）理論的な側面と既存の実装を理解</li> <li>モデルアーキテクチャを実装</li> <li>モデルのテストを実装</li> <li>プルリクエストを提出</li> <li>（オプション）デモを構築して世界と共有</li>",lt,I,nt,X,$l="<strong>1. 変換したいモデルを選択する</strong>",ot,S,Ml=`まず、基本から始めましょう。最初に知っておく必要があることは、変換したいアーキテクチャです。
特定のアーキテクチャを決めていない場合、🤗 Transformers チームに提案を求めることは、影響を最大限にする素晴らしい方法です。
チームは、TensorFlow サイドで不足している最も注目されるアーキテクチャに向けてガイドします。
TensorFlow で使用したい特定のモデルに、🤗 Transformers に既に TensorFlow アーキテクチャの実装が存在しているが、重みが不足している場合、
このページの<a href="#adding-tensorflow-weights-to--hub">重みの追加セクション</a>に直接移動してください。`,it,W,yl=`簡単にするために、このガイドの残りの部分では、TensorFlow バージョンの <em>BrandNewBert</em> を貢献することを決定したと仮定しています
（これは、<a href="add_new_model">新しいモデルの追加ガイド</a>での例と同じです）。`,rt,x,st,V,Cl="<strong>2. transformers 開発環境の準備</strong>",dt,Y,hl=`モデルアーキテクチャを選択したら、意向を示すためにドラフト PR を開くための環境を設定してください。
以下の手順に従って、環境を設定し、ドラフト PR を開いてください。`,mt,z,xl=`<li><p>リポジトリのページで ‘Fork’ ボタンをクリックして、<a href="https://github.com/huggingface/transformers" rel="nofollow">リポジトリ</a>をフォークします。
これにより、コードのコピーが GitHub ユーザーアカウントの下に作成されます。</p></li> <li><p>ローカルディスクにある ‘transformers’ フォークをクローンし、ベースリポジトリをリモートとして追加します:</p></li>`,ft,Q,pt,L,Ll="<li>開発環境を設定します。たとえば、以下のコマンドを実行してください：</li>",at,O,Tt,E,Hl="依存関係が増えているため、OSに応じて、Transformersのオプションの依存関係の数が増えるかもしれません。その場合は、TensorFlowをインストールしてから次のコマンドを実行してください。",ut,A,wt,q,gl="<strong>注意:</strong> CUDAをインストールする必要はありません。新しいモデルをCPUで動作させることが十分です。",ct,H,Fl="<li>メインブランチからわかりやすい名前のブランチを作成してください。</li>",_t,D,bt,g,Pl="<li>現在のmainブランチにフェッチしてリベースする</li>",vt,K,$t,F,Jl="<li><p><code>transformers/src/models/brandnewbert/</code>に<code>modeling_tf_brandnewbert.py</code>という名前の空の<code>.py</code>ファイルを追加します。これはあなたのTensorFlowモデルファイルです。</p></li> <li><p>以下を使用して変更内容をアカウントにプッシュします：</p></li>",Mt,ee,yt,P,Ul="<li><p>GitHub上でフォークしたウェブページに移動し、「プルリクエスト」をクリックします。将来の変更に備えて、Hugging Face チームのメンバーのGitHubハンドルをレビュアーとして追加してください。</p></li> <li><p>GitHubのプルリクエストウェブページの右側にある「ドラフトに変換」をクリックして、プルリクエストをドラフトに変更します。</p></li>",Ct,te,Bl="これで、🤗 Transformers内に<em>BrandNewBert</em>をTensorFlowに移植するための開発環境が設定されました。",ht,le,Rl="<strong>3. (任意) 理論的な側面と既存の実装を理解する</strong>",xt,ne,kl='<em>BrandNewBert</em>の論文が存在する場合、その記述的な作業を読む時間を取るべきです。論文には理解が難しい大きなセクションがあるかもしれません。その場合でも問題ありません - 心配しないでください！目標は論文の理論的な理解を深めることではなく、🤗 Transformersを使用してTensorFlowでモデルを効果的に再実装するために必要な情報を抽出することです。とは言え、理論的な側面にあまり時間をかける必要はありません。代わりに、既存のモデルのドキュメンテーションページ（たとえば、<a href="model_doc/bert">BERTのモデルドキュメント</a>など）に焦点を当てるべきです。',Lt,oe,Nl="実装するモデルの基本を把握した後、既存の実装を理解することは重要です。これは、動作する実装がモデルに対する期待と一致することを確認する絶好の機会であり、TensorFlow側での技術的な課題を予測することもできます。",Ht,ie,Zl='情報の多さに圧倒されていると感じるのは完全に自然です。この段階ではモデルのすべての側面を理解する必要はありません。ただし、<a href="https://discuss.huggingface.co/" rel="nofollow">フォーラム</a>で急な質問を解決することを強くお勧めします。',gt,re,Ft,se,jl=`さあ、いよいよコーディングを始めましょう。お勧めする出発点は、PyTorchファイルそのものです。
<code>src/transformers/models/brand_new_bert/</code>内の<code>modeling_brand_new_bert.py</code>の内容を
<code>modeling_tf_brand_new_bert.py</code>にコピーします。このセクションの目標は、
🤗 Transformersのインポート構造を更新し、<code>TFBrandNewBert</code>と
<code>TFBrandNewBert.from_pretrained(model_repo, from_pt=True)</code>を正常に読み込む動作するTensorFlow <em>BrandNewBert</em>モデルを
インポートできるようにすることです。`,Pt,de,Gl="残念ながら、PyTorchモデルをTensorFlowに変換する明確な方法はありません。ただし、プロセスをできるだけスムーズにするためのヒントを以下に示します：",Jt,me,Il='<li>すべてのクラスの名前の前に <code>TF</code> を付けます（例： <code>BrandNewBert</code> は <code>TFBrandNewBert</code> になります）。</li> <li>ほとんどのPyTorchの操作には、直接TensorFlowの代替があります。たとえば、<code>torch.nn.Linear</code> は <code>tf.keras.layers.Dense</code> に対応し、<code>torch.nn.Dropout</code> は <code>tf.keras.layers.Dropout</code> に対応します。特定の操作について不明確な場合は、<a href="https://www.tensorflow.org/api_docs/python/tf" rel="nofollow">TensorFlowのドキュメント</a>または<a href="https://pytorch.org/docs/stable/" rel="nofollow">PyTorchのドキュメント</a>を参照できます。</li> <li>🤗 Transformersのコードベースにパターンが見つかります。特定の操作に直接的な代替がない場合、誰かがすでに同じ問題に対処している可能性が高いです。</li> <li>デフォルトでは、PyTorchと同じ変数名と構造を維持します。これにより、デバッグや問題の追跡、修正の追加が容易になります。</li> <li>一部のレイヤーには、各フレームワークで異なるデフォルト値があります。注目すべき例は、バッチ正規化レイヤーの epsilon です（PyTorchでは<code>1e-5</code>、<a href="https://www.tensorflow.org/api_docs/python/tf/keras/layers/BatchNormalization" rel="nofollow">TensorFlowでは</a> <code>1e-3</code> です）。ドキュメントを再確認してください！</li> <li>PyTorchの <code>nn.Parameter</code> 変数は通常、TF Layerの <code>build()</code> 内で初期化する必要があります。次の例を参照してください：<a href="https://github.com/huggingface/transformers/blob/655f72a6896c0533b1bdee519ed65a059c2425ac/src/transformers/models/vit_mae/modeling_vit_mae.py#L212" rel="nofollow">PyTorch</a> / <a href="https://github.com/huggingface/transformers/blob/655f72a6896c0533b1bdee519ed65a059c2425ac/src/transformers/models/vit_mae/modeling_tf_vit_mae.py#L220" rel="nofollow">TensorFlow</a></li> <li>PyTorchモデルに関数の上部に <code>#copied from ...</code> がある場合、TensorFlowモデルも同じアーキテクチャからその関数を借りることができる可能性が高いです。TensorFlowアーキテクチャがある場合です。</li> <li>TensorFlow関数内で <code>name</code>属性を正しく設定することは、<code>from_pt=True</code>のウェイトのクロスロードロードを行うために重要です。通常、<code>name</code>はPyTorchコード内の対応する変数の名前です。<code>name</code>が正しく設定されていない場合、モデルウェイトのロード時にエラーメッセージで表示されます。</li> <li>ベースモデルクラス <code>BrandNewBertModel</code> のロジックは実際には <code>TFBrandNewBertMainLayer</code> にあります。これはKerasレイヤーのサブクラスです（<a href="https://github.com/huggingface/transformers/blob/4fd32a1f499e45f009c2c0dea4d81c321cba7e02/src/transformers/models/bert/modeling_tf_bert.py#L719" rel="nofollow">例</a>）。<code>TFBrandNewBertModel</code> は、単にこのレイヤーのラッパーです。</li> <li>モデルを読み込むためには、Kerasモデルをビルドする必要があります。そのため、<code>TFBrandNewBertPreTrainedModel</code> はモデルへの入力の例、<code>dummy_inputs</code> を持つ必要があります（<a href="https://github.com/huggingface/transformers/blob/4fd32a1f499e45f009c2c0dea4d81c321cba7e02/src/transformers/models/bert/modeling_tf_bert.py#L916" rel="nofollow">例</a>）。</li> <li>表示が止まった場合は、助けを求めてください。私たちはあなたのお手伝いにここにいます！ 🤗</li>',Ut,fe,Xl=`モデルファイル自体だけでなく、モデルクラスと関連するドキュメンテーションページへのポインターも追加する必要があります。他のPRのパターンに従ってこの部分を完了できます
（<a href="https://github.com/huggingface/transformers/pull/18020/files" rel="nofollow">例</a>）。
以下は手動での変更が必要な一覧です：`,Bt,pe,Sl="<li><em>BrandNewBert</em>のすべてのパブリッククラスを <code>src/transformers/__init__.py</code> に含める</li> <li><em>BrandNewBert</em>クラスを <code>src/transformers/models/auto/modeling_tf_auto.py</code> の対応するAutoクラスに追加</li> <li>ドキュメンテーションテストファイルのリストにモデリングファイルを追加する <code>utils/documentation_tests.txt</code></li> <li><code>src/transformers/utils/dummy_tf_objects.py</code> に関連する <em>BrandNewBert</em> に関連する遅延ロードクラスを追加</li> <li><code>src/transformers/models/brand_new_bert/__init__.py</code> でパブリッククラスのインポート構造を更新</li> <li><code>docs/source/en/model_doc/brand_new_bert.md</code> に <em>BrandNewBert</em> のパブリックメソッドのドキュメンテーションポインターを追加</li> <li><code>docs/source/en/model_doc/brand_new_bert.md</code> の <em>BrandNewBert</em> の貢献者リストに自分自身を追加</li> <li>最後に、<code>docs/source/en/index.md</code> の <em>BrandNewBert</em> のTensorFlow列に緑色のチェックマーク ✅ を追加</li>",Rt,ae,Wl="モデルアーキテクチャが準備できていることを確認するために、以下のチェックリストを実行してください：",kt,Te,Vl="<li>訓練時に異なる動作をするすべてのレイヤー（例：Dropout）は、<code>training</code>引数を使用して呼び出され、それが最上位クラスから伝播されます。</li> <li>可能な限り <code>#copied from ...</code> を使用しました</li> <li><code>TFBrandNewBertMainLayer</code> およびそれを使用するすべてのクラスの <code>call</code> 関数が <code>@unpack_inputs</code> でデコレートされています</li> <li><code>TFBrandNewBertMainLayer</code> は <code>@keras_serializable</code> でデコレートされています</li> <li>PyTorchウェイトからTensorFlowウェイトを使用してTensorFlowモデルをロードできます <code>TFBrandNewBert.from_pretrained(model_repo, from_pt=True)</code></li> <li>予期される入力形式を使用してTensorFlowモデルを呼び出すことができます</li>",Nt,ue,Zt,we,Yl=`やったね、TensorFlowモデルを実装しました！
今度は、モデルが期待通りに動作することを確認するためのテストを追加する時間です。
前のセクションと同様に、<code>tests/models/brand_new_bert/</code>ディレクトリ内の<code>test_modeling_brand_new_bert.py</code>ファイルを<code>test_modeling_tf_brand_new_bert.py</code>にコピーし、必要なTensorFlowの置換を行うことをお勧めします。
今の段階では、すべての<code>.from_pretrained()</code>呼び出しで、既存のPyTorchの重みをロードするために<code>from_pt=True</code>フラグを使用する必要があります。`,jt,ce,zl="作業が完了したら、テストを実行する準備が整いました！ 😬",Gt,_e,It,be,Ql=`最も可能性の高い結果は、多くのエラーが表示されることです。心配しないでください、これは予想される動作です！
MLモデルのデバッグは非常に難しいとされており、成功の鍵は忍耐力（と<code>breakpoint()</code>）です。私たちの経験では、
最も難しい問題はMLフレームワーク間の微妙な不一致から発生し、これについてはこのガイドの最後にいくつかのポインタを示します。
他の場合では、一般的なテストが直接モデルに適用できない場合もあり、その場合はモデルのテストクラスレベルでオーバーライドを提案します。
問題の種類に関係なく、詰まった場合は、ドラフトのプルリクエストで助けを求めることをためらわないでください。`,Xt,ve,Ol="すべてのテストがパスしたら、おめでとうございます。あなたのモデルはほぼ🤗 Transformersライブラリに追加する準備が整いました！🎉",St,$e,El="<strong>6. プルリクエストを提出する</strong>",Wt,Me,Al=`実装とテストが完了したら、プルリクエストを提出する準備が整いました。コードをプッシュする前に、
コードフォーマットユーティリティである <code>make fixup</code> 🪄 を実行してください。
これにより、自動的なチェックに失敗する可能性のあるフォーマットの問題が自動的に修正されます。`,Vt,ye,ql=`これで、ドラフトプルリクエストを実際のプルリクエストに変換する準備が整いました。
これを行うには、「レビュー待ち」ボタンをクリックし、Joao（<code>@gante</code>）とMatt（<code>@Rocketknight1</code>）をレビュワーとして追加します。
モデルプルリクエストには少なくとも3人のレビュワーが必要ですが、モデルに適切な追加のレビュワーを見つけるのは彼らの責任です。`,Yt,Ce,Dl=`すべてのレビュワーがプルリクエストの状態に満足したら、最後のアクションポイントは、<code>.from_pretrained()</code> 呼び出しで <code>from_pt=True</code> フラグを削除することです。
TensorFlowのウェイトが存在しないため、それらを追加する必要があります！これを行う方法については、以下のセクションを確認してください。`,zt,he,Kl=`最後に、TensorFlowのウェイトがマージされ、少なくとも3人のレビューアが承認し、すべてのCIチェックが
成功した場合、テストをローカルで最後にもう一度確認してください。`,Qt,xe,Ot,Le,en="そして、あなたのPRをマージします！マイルストーン達成おめでとうございます 🎉",Et,He,tn="<strong>7. (Optional) デモを作成して世界と共有</strong>",At,ge,ln="オープンソースの最も難しい部分の1つは、発見です。あなたの素晴らしいTensorFlowの貢献が存在することを他のユーザーがどのように知ることができるでしょうか？適切なコミュニケーションです！ 📣",qt,Fe,nn="コミュニティとモデルを共有する主要な方法は2つあります。",Dt,Pe,on='<li>デモを作成します。これにはGradioデモ、ノートブック、およびモデルを紹介するための他の楽しい方法が含まれます。<a href="https://huggingface.co/docs/transformers/community" rel="nofollow">コミュニティ駆動のデモ</a>にノートブックを追加することを強くお勧めします。</li> <li>TwitterやLinkedInなどのソーシャルメディアでストーリーを共有します。あなたの仕事に誇りを持ち、コミュニティとあなたの成果を共有するべきです - あなたのモデルは今や世界中の何千人ものエンジニアや研究者によって使用される可能性があります 🌍！私たちはあなたの投稿をリツイートして共同体と共有するお手伝いを喜んでします。</li>',Kt,Je,el,Ue,rn="TensorFlowモデルのアーキテクチャが🤗 Transformersで利用可能な場合、PyTorchの重みをTensorFlowの重みに変換することは簡単です！",tl,Be,sn="以下がその方法です：",ll,Re,dn='<li>ターミナルでHugging Faceアカウントにログインしていることを確認してください。コマンド<code>huggingface-cli login</code>を使用してログインできます（アクセストークンは<a href="https://huggingface.co/settings/tokens" rel="nofollow">こちら</a>で見つけることができます）。</li> <li><code>transformers-cli pt-to-tf --model-name foo/bar</code>というコマンドを実行します。ここで、<code>foo/bar</code>は変換したいPyTorchの重みを含むモデルリポジトリの名前です。</li> <li>上記のコマンドで作成された🤗 Hub PRに<code>@joaogante</code>と<code>@Rocketknight1</code>をタグ付けします。</li>',nl,ke,mn="それだけです！ 🎉",ol,Ne,il,Ze,fn=`新しいアーキテクチャを追加したり、既存のアーキテクチャのTensorFlowの重みを作成したりする際、PyTorchとTensorFlow間の不一致についてのエラーに遭遇することがあります。
場合によっては、PyTorchとTensorFlowのモデルアーキテクチャがほぼ同一であるにもかかわらず、不一致を指摘するエラーが表示されることがあります。
どうしてでしょうか？ 🤔`,rl,je,pn=`まず最初に、なぜこれらの不一致を理解することが重要かについて話しましょう。多くのコミュニティメンバーは🤗 Transformersモデルをそのまま使用し、モデルが期待どおりに動作すると信頼しています。
2つのフレームワーク間で大きな不一致があると、少なくとも1つのフレームワークのリファレンス実装に従ってモデルが動作しないことを意味します。
これにより、モデルは実行されますが性能が低下する可能性があり、静かな失敗が発生する可能性があります。これは、全く実行されないモデルよりも悪いと言えるかもしれません！そのため、モデルのすべての段階でのフレームワークの不一致が<code>1e-5</code>未満であることを目指しています。`,sl,Ge,an=`数値計算の問題と同様に、詳細については細かいところにあります。そして、詳細指向の技術である以上、秘密の要素は忍耐です。
この種の問題に遭遇した場合のお勧めのワークフローは次のとおりです：`,dl,Ie,Tn=`<li>不一致の原因を特定します。変換中のモデルにはおそらく特定の点までほぼ同一の内部変数があります。
両方のフレームワークのアーキテクチャに<code>breakpoint()</code>ステートメントを配置し、トップダウンの方法で数値変数の値を比較し、問題の原因を見つけます。</li> <li>問題の原因を特定したら、🤗 Transformersチームと連絡を取りましょう。同様の問題に遭遇したことがあるかもしれず、迅速に解決策を提供できるかもしれません。最終手段として、StackOverflowやGitHubの問題など、人気のあるページをスキャンします。</li> <li>解決策が見当たらない場合、問題を掘り下げる必要があることを意味します。良いニュースは、問題の原因を特定したことです。したがって、問題のある命令に焦点を当て、モデルの残りを抽象化できます！悪いニュースは、その命令のソース実装に進む必要があることです。一部の場合では、リファレンス実装に問題があるかもしれません - 上流リポジトリで問題を開くのを控えないでください。</li>`,ml,Xe,un=`🤗 Transformersチームとの話し合いで、不一致を修正することが困難であることが判明することがあります。
出力レイヤーのモデルで不一致が非常に小さい場合（ただし、隠れた状態では大きい可能性がある）、モデルを配布するためにそれを無視することにするかもしれません。
上記で言及した<code>pt-to-tf</code> CLIには、重み変換時にエラーメッセージを無視するための<code>--max-error</code>フラグがあります。`,fl,ze,pl;return y=new We({props:{title:"How to convert a 🤗 Transformers model to TensorFlow?",local:"how-to-convert-a--transformers-model-to-tensorflow",headingTag:"h1"}}),h=new bn({props:{$$slots:{default:[Ln]},$$scope:{ctx:Ve}}}),k=new We({props:{title:"Step-by-step guide to add TensorFlow model architecture code",local:"step-by-step-guide-to-add-tensorflow-model-architecture-code",headingTag:"h2"}}),I=new We({props:{title:"1.-3. Prepare your model contribution",local:"1-3-prepare-your-model-contribution",headingTag:"h3"}}),x=new bn({props:{$$slots:{default:[Hn]},$$scope:{ctx:Ve}}}),Q=new J({props:{code:"Z2l0JTIwY2xvbmUlMjBodHRwcyUzQSUyRiUyRmdpdGh1Yi5jb20lMkYlNUJ5b3VyJTIwR2l0aHViJTIwaGFuZGxlJTVEJTJGdHJhbnNmb3JtZXJzLmdpdCUwQWNkJTIwdHJhbnNmb3JtZXJzJTBBZ2l0JTIwcmVtb3RlJTIwYWRkJTIwdXBzdHJlYW0lMjBodHRwcyUzQSUyRiUyRmdpdGh1Yi5jb20lMkZodWdnaW5nZmFjZSUyRnRyYW5zZm9ybWVycy5naXQ=",highlighted:`git <span class="hljs-built_in">clone</span> https://github.com/[your Github handle]/transformers.git
<span class="hljs-built_in">cd</span> transformers
git remote add upstream https://github.com/huggingface/transformers.git`,wrap:!1}}),O=new J({props:{code:"Z2l0JTIwY2xvbmUlMjBodHRwcyUzQSUyRiUyRmdpdGh1Yi5jb20lMkYlNUJ5b3VyJTIwR2l0aHViJTIwaGFuZGxlJTVEJTJGdHJhbnNmb3JtZXJzLmdpdCUwQWNkJTIwdHJhbnNmb3JtZXJzJTBBZ2l0JTIwcmVtb3RlJTIwYWRkJTIwdXBzdHJlYW0lMjBodHRwcyUzQSUyRiUyRmdpdGh1Yi5jb20lMkZodWdnaW5nZmFjZSUyRnRyYW5zZm9ybWVycy5naXQ=",highlighted:`git <span class="hljs-built_in">clone</span> https://github.com/[your Github handle]/transformers.git
<span class="hljs-built_in">cd</span> transformers
git remote add upstream https://github.com/huggingface/transformers.git`,wrap:!1}}),A=new J({props:{code:"cGlwJTIwaW5zdGFsbCUyMC1lJTIwJTIyLiU1QnF1YWxpdHklNUQlMjI=",highlighted:'pip install -e <span class="hljs-string">&quot;.[quality]&quot;</span>',wrap:!1}}),D=new J({props:{code:"Z2l0JTIwY2hlY2tvdXQlMjAtYiUyMGFkZF90Zl9icmFuZF9uZXdfYmVydA==",highlighted:"git checkout -b add_tf_brand_new_bert",wrap:!1}}),K=new J({props:{code:"Z2l0JTIwZmV0Y2glMjB1cHN0cmVhbSUwQWdpdCUyMHJlYmFzZSUyMHVwc3RyZWFtJTJGbWFpbg==",highlighted:`git fetch upstream
git rebase upstream/main`,wrap:!1}}),ee=new J({props:{code:"Z2l0JTIwYWRkJTIwLiUwQWdpdCUyMGNvbW1pdCUyMC1tJTIwJTIyaW5pdGlhbCUyMGNvbW1pdCUyMiUwQWdpdCUyMHB1c2glMjAtdSUyMG9yaWdpbiUyMGFkZF90Zl9icmFuZF9uZXdfYmVydA==",highlighted:`git add .
git commit -m <span class="hljs-string">&quot;initial commit&quot;</span>
git push -u origin add_tf_brand_new_bert`,wrap:!1}}),re=new We({props:{title:"4. Model implementation",local:"4-model-implementation",headingTag:"h3"}}),ue=new We({props:{title:"5. Add model tests",local:"5-add-model-tests",headingTag:"h3"}}),_e=new J({props:{code:"TlZJRElBX1RGMzJfT1ZFUlJJREUlM0QwJTIwUlVOX1NMT1clM0QxJTIwUlVOX1BUX1RGX0NST1NTX1RFU1RTJTNEMSUyMCU1QyUwQXB5LnRlc3QlMjAtdnYlMjB0ZXN0cyUyRm1vZGVscyUyRmJyYW5kX25ld19iZXJ0JTJGdGVzdF9tb2RlbGluZ190Zl9icmFuZF9uZXdfYmVydC5weQ==",highlighted:`NVIDIA_TF32_OVERRIDE=0 RUN_SLOW=1 RUN_PT_TF_CROSS_TESTS=1 \\
py.test -vv tests/models/brand_new_bert/test_modeling_tf_brand_new_bert.py`,wrap:!1}}),xe=new J({props:{code:"TlZJRElBX1RGMzJfT1ZFUlJJREUlM0QwJTIwUlVOX1NMT1clM0QxJTIwUlVOX1BUX1RGX0NST1NTX1RFU1RTJTNEMSUyMCU1QyUwQXB5LnRlc3QlMjAtdnYlMjB0ZXN0cyUyRm1vZGVscyUyRmJyYW5kX25ld19iZXJ0JTJGdGVzdF9tb2RlbGluZ190Zl9icmFuZF9uZXdfYmVydC5weQ==",highlighted:`NVIDIA_TF32_OVERRIDE=0 RUN_SLOW=1 RUN_PT_TF_CROSS_TESTS=1 \\
py.test -vv tests/models/brand_new_bert/test_modeling_tf_brand_new_bert.py`,wrap:!1}}),Je=new We({props:{title:"Adding TensorFlow weights to 🤗 Hub",local:"adding-tensorflow-weights-to--hub",headingTag:"h2"}}),Ne=new We({props:{title:"Debugging mismatches across ML frameworks 🐛",local:"debugging-mismatches-across-ml-frameworks-",headingTag:"h2"}}),{c(){m=r("meta"),M=o(),_=r("p"),v=o(),p(y.$$.fragment),C=o(),b=r("p"),b.innerHTML=Ye,f=o(),$=r("p"),$.textContent=al,Qe=o(),U=r("p"),U.textContent=Tl,Oe=o(),B=r("ul"),B.innerHTML=ul,Ee=o(),R=r("p"),R.textContent=wl,Ae=o(),p(h.$$.fragment),qe=o(),p(k.$$.fragment),De=o(),N=r("p"),N.innerHTML=cl,Ke=o(),Z=r("ul"),Z.innerHTML=_l,et=o(),j=r("p"),j.textContent=bl,tt=o(),G=r("ol"),G.innerHTML=vl,lt=o(),p(I.$$.fragment),nt=o(),X=r("p"),X.innerHTML=$l,ot=o(),S=r("p"),S.innerHTML=Ml,it=o(),W=r("p"),W.innerHTML=yl,rt=o(),p(x.$$.fragment),st=o(),V=r("p"),V.innerHTML=Cl,dt=o(),Y=r("p"),Y.textContent=hl,mt=o(),z=r("ol"),z.innerHTML=xl,ft=o(),p(Q.$$.fragment),pt=o(),L=r("ol"),L.innerHTML=Ll,at=o(),p(O.$$.fragment),Tt=o(),E=r("p"),E.textContent=Hl,ut=o(),p(A.$$.fragment),wt=o(),q=r("p"),q.innerHTML=gl,ct=o(),H=r("ol"),H.innerHTML=Fl,_t=o(),p(D.$$.fragment),bt=o(),g=r("ol"),g.innerHTML=Pl,vt=o(),p(K.$$.fragment),$t=o(),F=r("ol"),F.innerHTML=Jl,Mt=o(),p(ee.$$.fragment),yt=o(),P=r("ol"),P.innerHTML=Ul,Ct=o(),te=r("p"),te.innerHTML=Bl,ht=o(),le=r("p"),le.innerHTML=Rl,xt=o(),ne=r("p"),ne.innerHTML=kl,Lt=o(),oe=r("p"),oe.textContent=Nl,Ht=o(),ie=r("p"),ie.innerHTML=Zl,gt=o(),p(re.$$.fragment),Ft=o(),se=r("p"),se.innerHTML=jl,Pt=o(),de=r("p"),de.textContent=Gl,Jt=o(),me=r("ul"),me.innerHTML=Il,Ut=o(),fe=r("p"),fe.innerHTML=Xl,Bt=o(),pe=r("ul"),pe.innerHTML=Sl,Rt=o(),ae=r("p"),ae.textContent=Wl,kt=o(),Te=r("ol"),Te.innerHTML=Vl,Nt=o(),p(ue.$$.fragment),Zt=o(),we=r("p"),we.innerHTML=Yl,jt=o(),ce=r("p"),ce.textContent=zl,Gt=o(),p(_e.$$.fragment),It=o(),be=r("p"),be.innerHTML=Ql,Xt=o(),ve=r("p"),ve.textContent=Ol,St=o(),$e=r("p"),$e.innerHTML=El,Wt=o(),Me=r("p"),Me.innerHTML=Al,Vt=o(),ye=r("p"),ye.innerHTML=ql,Yt=o(),Ce=r("p"),Ce.innerHTML=Dl,zt=o(),he=r("p"),he.textContent=Kl,Qt=o(),p(xe.$$.fragment),Ot=o(),Le=r("p"),Le.textContent=en,Et=o(),He=r("p"),He.innerHTML=tn,At=o(),ge=r("p"),ge.textContent=ln,qt=o(),Fe=r("p"),Fe.textContent=nn,Dt=o(),Pe=r("ul"),Pe.innerHTML=on,Kt=o(),p(Je.$$.fragment),el=o(),Ue=r("p"),Ue.textContent=rn,tl=o(),Be=r("p"),Be.textContent=sn,ll=o(),Re=r("ol"),Re.innerHTML=dn,nl=o(),ke=r("p"),ke.textContent=mn,ol=o(),p(Ne.$$.fragment),il=o(),Ze=r("p"),Ze.textContent=fn,rl=o(),je=r("p"),je.innerHTML=pn,sl=o(),Ge=r("p"),Ge.textContent=an,dl=o(),Ie=r("ol"),Ie.innerHTML=Tn,ml=o(),Xe=r("p"),Xe.innerHTML=un,fl=o(),ze=r("p"),this.h()},l(e){const t=hn("svelte-u9bgzb",document.head);m=s(t,"META",{name:!0,content:!0}),t.forEach(l),M=i(e),_=s(e,"P",{}),_n(_).forEach(l),v=i(e),a(y.$$.fragment,e),C=i(e),b=s(e,"P",{"data-svelte-h":!0}),d(b)!=="svelte-p956um"&&(b.innerHTML=Ye),f=i(e),$=s(e,"P",{"data-svelte-h":!0}),d($)!=="svelte-adbfc3"&&($.textContent=al),Qe=i(e),U=s(e,"P",{"data-svelte-h":!0}),d(U)!=="svelte-1dauhgc"&&(U.textContent=Tl),Oe=i(e),B=s(e,"UL",{"data-svelte-h":!0}),d(B)!=="svelte-hm9ft7"&&(B.innerHTML=ul),Ee=i(e),R=s(e,"P",{"data-svelte-h":!0}),d(R)!=="svelte-19s40w1"&&(R.textContent=wl),Ae=i(e),a(h.$$.fragment,e),qe=i(e),a(k.$$.fragment,e),De=i(e),N=s(e,"P",{"data-svelte-h":!0}),d(N)!=="svelte-129910m"&&(N.innerHTML=cl),Ke=i(e),Z=s(e,"UL",{"data-svelte-h":!0}),d(Z)!=="svelte-f8knai"&&(Z.innerHTML=_l),et=i(e),j=s(e,"P",{"data-svelte-h":!0}),d(j)!=="svelte-1eg5h8d"&&(j.textContent=bl),tt=i(e),G=s(e,"OL",{"data-svelte-h":!0}),d(G)!=="svelte-166oa2y"&&(G.innerHTML=vl),lt=i(e),a(I.$$.fragment,e),nt=i(e),X=s(e,"P",{"data-svelte-h":!0}),d(X)!=="svelte-o3uhdy"&&(X.innerHTML=$l),ot=i(e),S=s(e,"P",{"data-svelte-h":!0}),d(S)!=="svelte-1hbblhk"&&(S.innerHTML=Ml),it=i(e),W=s(e,"P",{"data-svelte-h":!0}),d(W)!=="svelte-1926pqj"&&(W.innerHTML=yl),rt=i(e),a(x.$$.fragment,e),st=i(e),V=s(e,"P",{"data-svelte-h":!0}),d(V)!=="svelte-1dj67lq"&&(V.innerHTML=Cl),dt=i(e),Y=s(e,"P",{"data-svelte-h":!0}),d(Y)!=="svelte-11fs1fd"&&(Y.textContent=hl),mt=i(e),z=s(e,"OL",{"data-svelte-h":!0}),d(z)!=="svelte-1jjcgwa"&&(z.innerHTML=xl),ft=i(e),a(Q.$$.fragment,e),pt=i(e),L=s(e,"OL",{start:!0,"data-svelte-h":!0}),d(L)!=="svelte-1jzpu11"&&(L.innerHTML=Ll),at=i(e),a(O.$$.fragment,e),Tt=i(e),E=s(e,"P",{"data-svelte-h":!0}),d(E)!=="svelte-ztphrn"&&(E.textContent=Hl),ut=i(e),a(A.$$.fragment,e),wt=i(e),q=s(e,"P",{"data-svelte-h":!0}),d(q)!=="svelte-bhguwf"&&(q.innerHTML=gl),ct=i(e),H=s(e,"OL",{start:!0,"data-svelte-h":!0}),d(H)!=="svelte-7nyjii"&&(H.innerHTML=Fl),_t=i(e),a(D.$$.fragment,e),bt=i(e),g=s(e,"OL",{start:!0,"data-svelte-h":!0}),d(g)!=="svelte-1n8jril"&&(g.innerHTML=Pl),vt=i(e),a(K.$$.fragment,e),$t=i(e),F=s(e,"OL",{start:!0,"data-svelte-h":!0}),d(F)!=="svelte-1qwlrmz"&&(F.innerHTML=Jl),Mt=i(e),a(ee.$$.fragment,e),yt=i(e),P=s(e,"OL",{start:!0,"data-svelte-h":!0}),d(P)!=="svelte-1udhi82"&&(P.innerHTML=Ul),Ct=i(e),te=s(e,"P",{"data-svelte-h":!0}),d(te)!=="svelte-1urucut"&&(te.innerHTML=Bl),ht=i(e),le=s(e,"P",{"data-svelte-h":!0}),d(le)!=="svelte-vj6xka"&&(le.innerHTML=Rl),xt=i(e),ne=s(e,"P",{"data-svelte-h":!0}),d(ne)!=="svelte-182ytpp"&&(ne.innerHTML=kl),Lt=i(e),oe=s(e,"P",{"data-svelte-h":!0}),d(oe)!=="svelte-h7livv"&&(oe.textContent=Nl),Ht=i(e),ie=s(e,"P",{"data-svelte-h":!0}),d(ie)!=="svelte-lna5nv"&&(ie.innerHTML=Zl),gt=i(e),a(re.$$.fragment,e),Ft=i(e),se=s(e,"P",{"data-svelte-h":!0}),d(se)!=="svelte-hx5alw"&&(se.innerHTML=jl),Pt=i(e),de=s(e,"P",{"data-svelte-h":!0}),d(de)!=="svelte-xljrur"&&(de.textContent=Gl),Jt=i(e),me=s(e,"UL",{"data-svelte-h":!0}),d(me)!=="svelte-1s8bwy9"&&(me.innerHTML=Il),Ut=i(e),fe=s(e,"P",{"data-svelte-h":!0}),d(fe)!=="svelte-120t3wd"&&(fe.innerHTML=Xl),Bt=i(e),pe=s(e,"UL",{"data-svelte-h":!0}),d(pe)!=="svelte-1j7hwmo"&&(pe.innerHTML=Sl),Rt=i(e),ae=s(e,"P",{"data-svelte-h":!0}),d(ae)!=="svelte-1h3yfvr"&&(ae.textContent=Wl),kt=i(e),Te=s(e,"OL",{"data-svelte-h":!0}),d(Te)!=="svelte-1qwkqd3"&&(Te.innerHTML=Vl),Nt=i(e),a(ue.$$.fragment,e),Zt=i(e),we=s(e,"P",{"data-svelte-h":!0}),d(we)!=="svelte-1w0qbl8"&&(we.innerHTML=Yl),jt=i(e),ce=s(e,"P",{"data-svelte-h":!0}),d(ce)!=="svelte-l4ht6e"&&(ce.textContent=zl),Gt=i(e),a(_e.$$.fragment,e),It=i(e),be=s(e,"P",{"data-svelte-h":!0}),d(be)!=="svelte-qc6mtf"&&(be.innerHTML=Ql),Xt=i(e),ve=s(e,"P",{"data-svelte-h":!0}),d(ve)!=="svelte-1e89g3l"&&(ve.textContent=Ol),St=i(e),$e=s(e,"P",{"data-svelte-h":!0}),d($e)!=="svelte-2tiaib"&&($e.innerHTML=El),Wt=i(e),Me=s(e,"P",{"data-svelte-h":!0}),d(Me)!=="svelte-4bud03"&&(Me.innerHTML=Al),Vt=i(e),ye=s(e,"P",{"data-svelte-h":!0}),d(ye)!=="svelte-1wf919h"&&(ye.innerHTML=ql),Yt=i(e),Ce=s(e,"P",{"data-svelte-h":!0}),d(Ce)!=="svelte-1xzaxnu"&&(Ce.innerHTML=Dl),zt=i(e),he=s(e,"P",{"data-svelte-h":!0}),d(he)!=="svelte-8bu8cj"&&(he.textContent=Kl),Qt=i(e),a(xe.$$.fragment,e),Ot=i(e),Le=s(e,"P",{"data-svelte-h":!0}),d(Le)!=="svelte-1fpljkm"&&(Le.textContent=en),Et=i(e),He=s(e,"P",{"data-svelte-h":!0}),d(He)!=="svelte-ij942h"&&(He.innerHTML=tn),At=i(e),ge=s(e,"P",{"data-svelte-h":!0}),d(ge)!=="svelte-1uunmp9"&&(ge.textContent=ln),qt=i(e),Fe=s(e,"P",{"data-svelte-h":!0}),d(Fe)!=="svelte-12odu9j"&&(Fe.textContent=nn),Dt=i(e),Pe=s(e,"UL",{"data-svelte-h":!0}),d(Pe)!=="svelte-ndgfh6"&&(Pe.innerHTML=on),Kt=i(e),a(Je.$$.fragment,e),el=i(e),Ue=s(e,"P",{"data-svelte-h":!0}),d(Ue)!=="svelte-mi0a8c"&&(Ue.textContent=rn),tl=i(e),Be=s(e,"P",{"data-svelte-h":!0}),d(Be)!=="svelte-1kag8uj"&&(Be.textContent=sn),ll=i(e),Re=s(e,"OL",{"data-svelte-h":!0}),d(Re)!=="svelte-15e235r"&&(Re.innerHTML=dn),nl=i(e),ke=s(e,"P",{"data-svelte-h":!0}),d(ke)!=="svelte-l3yz3w"&&(ke.textContent=mn),ol=i(e),a(Ne.$$.fragment,e),il=i(e),Ze=s(e,"P",{"data-svelte-h":!0}),d(Ze)!=="svelte-nwgu44"&&(Ze.textContent=fn),rl=i(e),je=s(e,"P",{"data-svelte-h":!0}),d(je)!=="svelte-1ic6osy"&&(je.innerHTML=pn),sl=i(e),Ge=s(e,"P",{"data-svelte-h":!0}),d(Ge)!=="svelte-1hivhsd"&&(Ge.textContent=an),dl=i(e),Ie=s(e,"OL",{"data-svelte-h":!0}),d(Ie)!=="svelte-141x0ln"&&(Ie.innerHTML=Tn),ml=i(e),Xe=s(e,"P",{"data-svelte-h":!0}),d(Xe)!=="svelte-1hpz8he"&&(Xe.innerHTML=un),fl=i(e),ze=s(e,"P",{}),_n(ze).forEach(l),this.h()},h(){Se(m,"name","hf:doc:metadata"),Se(m,"content",Fn),Se(L,"start","3"),Se(H,"start","4"),Se(g,"start","5"),Se(F,"start","6"),Se(P,"start","8")},m(e,t){xn(document.head,m),n(e,M,t),n(e,_,t),n(e,v,t),T(y,e,t),n(e,C,t),n(e,b,t),n(e,f,t),n(e,$,t),n(e,Qe,t),n(e,U,t),n(e,Oe,t),n(e,B,t),n(e,Ee,t),n(e,R,t),n(e,Ae,t),T(h,e,t),n(e,qe,t),T(k,e,t),n(e,De,t),n(e,N,t),n(e,Ke,t),n(e,Z,t),n(e,et,t),n(e,j,t),n(e,tt,t),n(e,G,t),n(e,lt,t),T(I,e,t),n(e,nt,t),n(e,X,t),n(e,ot,t),n(e,S,t),n(e,it,t),n(e,W,t),n(e,rt,t),T(x,e,t),n(e,st,t),n(e,V,t),n(e,dt,t),n(e,Y,t),n(e,mt,t),n(e,z,t),n(e,ft,t),T(Q,e,t),n(e,pt,t),n(e,L,t),n(e,at,t),T(O,e,t),n(e,Tt,t),n(e,E,t),n(e,ut,t),T(A,e,t),n(e,wt,t),n(e,q,t),n(e,ct,t),n(e,H,t),n(e,_t,t),T(D,e,t),n(e,bt,t),n(e,g,t),n(e,vt,t),T(K,e,t),n(e,$t,t),n(e,F,t),n(e,Mt,t),T(ee,e,t),n(e,yt,t),n(e,P,t),n(e,Ct,t),n(e,te,t),n(e,ht,t),n(e,le,t),n(e,xt,t),n(e,ne,t),n(e,Lt,t),n(e,oe,t),n(e,Ht,t),n(e,ie,t),n(e,gt,t),T(re,e,t),n(e,Ft,t),n(e,se,t),n(e,Pt,t),n(e,de,t),n(e,Jt,t),n(e,me,t),n(e,Ut,t),n(e,fe,t),n(e,Bt,t),n(e,pe,t),n(e,Rt,t),n(e,ae,t),n(e,kt,t),n(e,Te,t),n(e,Nt,t),T(ue,e,t),n(e,Zt,t),n(e,we,t),n(e,jt,t),n(e,ce,t),n(e,Gt,t),T(_e,e,t),n(e,It,t),n(e,be,t),n(e,Xt,t),n(e,ve,t),n(e,St,t),n(e,$e,t),n(e,Wt,t),n(e,Me,t),n(e,Vt,t),n(e,ye,t),n(e,Yt,t),n(e,Ce,t),n(e,zt,t),n(e,he,t),n(e,Qt,t),T(xe,e,t),n(e,Ot,t),n(e,Le,t),n(e,Et,t),n(e,He,t),n(e,At,t),n(e,ge,t),n(e,qt,t),n(e,Fe,t),n(e,Dt,t),n(e,Pe,t),n(e,Kt,t),T(Je,e,t),n(e,el,t),n(e,Ue,t),n(e,tl,t),n(e,Be,t),n(e,ll,t),n(e,Re,t),n(e,nl,t),n(e,ke,t),n(e,ol,t),T(Ne,e,t),n(e,il,t),n(e,Ze,t),n(e,rl,t),n(e,je,t),n(e,sl,t),n(e,Ge,t),n(e,dl,t),n(e,Ie,t),n(e,ml,t),n(e,Xe,t),n(e,fl,t),n(e,ze,t),pl=!0},p(e,[t]){const wn={};t&2&&(wn.$$scope={dirty:t,ctx:e}),h.$set(wn);const cn={};t&2&&(cn.$$scope={dirty:t,ctx:e}),x.$set(cn)},i(e){pl||(u(y.$$.fragment,e),u(h.$$.fragment,e),u(k.$$.fragment,e),u(I.$$.fragment,e),u(x.$$.fragment,e),u(Q.$$.fragment,e),u(O.$$.fragment,e),u(A.$$.fragment,e),u(D.$$.fragment,e),u(K.$$.fragment,e),u(ee.$$.fragment,e),u(re.$$.fragment,e),u(ue.$$.fragment,e),u(_e.$$.fragment,e),u(xe.$$.fragment,e),u(Je.$$.fragment,e),u(Ne.$$.fragment,e),pl=!0)},o(e){w(y.$$.fragment,e),w(h.$$.fragment,e),w(k.$$.fragment,e),w(I.$$.fragment,e),w(x.$$.fragment,e),w(Q.$$.fragment,e),w(O.$$.fragment,e),w(A.$$.fragment,e),w(D.$$.fragment,e),w(K.$$.fragment,e),w(ee.$$.fragment,e),w(re.$$.fragment,e),w(ue.$$.fragment,e),w(_e.$$.fragment,e),w(xe.$$.fragment,e),w(Je.$$.fragment,e),w(Ne.$$.fragment,e),pl=!1},d(e){e&&(l(M),l(_),l(v),l(C),l(b),l(f),l($),l(Qe),l(U),l(Oe),l(B),l(Ee),l(R),l(Ae),l(qe),l(De),l(N),l(Ke),l(Z),l(et),l(j),l(tt),l(G),l(lt),l(nt),l(X),l(ot),l(S),l(it),l(W),l(rt),l(st),l(V),l(dt),l(Y),l(mt),l(z),l(ft),l(pt),l(L),l(at),l(Tt),l(E),l(ut),l(wt),l(q),l(ct),l(H),l(_t),l(bt),l(g),l(vt),l($t),l(F),l(Mt),l(yt),l(P),l(Ct),l(te),l(ht),l(le),l(xt),l(ne),l(Lt),l(oe),l(Ht),l(ie),l(gt),l(Ft),l(se),l(Pt),l(de),l(Jt),l(me),l(Ut),l(fe),l(Bt),l(pe),l(Rt),l(ae),l(kt),l(Te),l(Nt),l(Zt),l(we),l(jt),l(ce),l(Gt),l(It),l(be),l(Xt),l(ve),l(St),l($e),l(Wt),l(Me),l(Vt),l(ye),l(Yt),l(Ce),l(zt),l(he),l(Qt),l(Ot),l(Le),l(Et),l(He),l(At),l(ge),l(qt),l(Fe),l(Dt),l(Pe),l(Kt),l(el),l(Ue),l(tl),l(Be),l(ll),l(Re),l(nl),l(ke),l(ol),l(il),l(Ze),l(rl),l(je),l(sl),l(Ge),l(dl),l(Ie),l(ml),l(Xe),l(fl),l(ze)),l(m),c(y,e),c(h,e),c(k,e),c(I,e),c(x,e),c(Q,e),c(O,e),c(A,e),c(D,e),c(K,e),c(ee,e),c(re,e),c(ue,e),c(_e,e),c(xe,e),c(Je,e),c(Ne,e)}}}const Fn='{"title":"How to convert a 🤗 Transformers model to TensorFlow?","local":"how-to-convert-a--transformers-model-to-tensorflow","sections":[{"title":"Step-by-step guide to add TensorFlow model architecture code","local":"step-by-step-guide-to-add-tensorflow-model-architecture-code","sections":[{"title":"1.-3. Prepare your model contribution","local":"1-3-prepare-your-model-contribution","sections":[],"depth":3},{"title":"4. Model implementation","local":"4-model-implementation","sections":[],"depth":3},{"title":"5. Add model tests","local":"5-add-model-tests","sections":[],"depth":3}],"depth":2},{"title":"Adding TensorFlow weights to 🤗 Hub","local":"adding-tensorflow-weights-to--hub","sections":[],"depth":2},{"title":"Debugging mismatches across ML frameworks 🐛","local":"debugging-mismatches-across-ml-frameworks-","sections":[],"depth":2}],"depth":1}';function Pn(Ve){return Mn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Nn extends yn{constructor(m){super(),Cn(this,m,Pn,gn,$n,{})}}export{Nn as component};
