import{s as Ye,n as Fe,o as ge}from"../chunks/scheduler.9bc65507.js";import{S as ze,i as De,g as p,s,r as U,A as Oe,h as M,f as l,c as i,j as We,u as w,x as a,k as Qe,y as qe,a as n,v as C,d as y,t as m,w as T}from"../chunks/index.707bf1b6.js";import{C as wt}from"../chunks/CodeBlock.54a9f38d.js";import{H as Ct}from"../chunks/Heading.342b1fa6.js";function Ke(Me){let J,yt,at,mt,o,Tt,d,ae='モデルのトレーニングおよび推論に使用するハードウェアは、パフォーマンスに大きな影響を与えることがあります。GPUについて詳しく知りたい場合は、Tim Dettmerの優れた<a href="https://timdettmers.com/2020/09/07/which-gpu-for-deep-learning/" rel="nofollow">ブログ記事</a>をチェックしてみてください。',Jt,f,Ue="GPUセットアップの実用的なアドバイスをいくつか見てみましょう。",ot,I,dt,r,we="より大きなモデルをトレーニングする場合、基本的には以下の3つのオプションがあります：",ft,u,Ce='<li>より大きなGPU</li> <li>より多くのGPU</li> <li>より多くのCPUおよびNVMe（<a href="main_classes/deepspeed#nvme-support">DeepSpeed-Infinity</a>によるオフロード）</li>',It,j,ye="まず、単一のGPUを使用する場合から始めましょう。",rt,c,ut,x,me="高価なハイエンドGPUを購入した場合、正しい電力供給と十分な冷却を提供することが重要です。",jt,v,Te="<strong>電力</strong>：",ct,b,Je="一部の高級コンシューマGPUカードには、2つまたは3つのPCI-E 8ピン電源ソケットがあります。カードにあるソケットの数だけ、独立した12V PCI-E 8ピンケーブルが接続されていることを確認してください。同じケーブルの一端にある2つの分岐（またはピッグテールケーブルとしても知られています）を使用しないでください。つまり、GPUに2つのソケットがある場合、PSUからカードに向けて2つのPCI-E 8ピンケーブルを使用し、1つのケーブルの端に2つのPCI-E 8ピンコネクタがあるものは使用しないでください！そうしないと、カードからのパフォーマンスを十分に引き出すことができません。",xt,h,oe="各PCI-E 8ピン電源ケーブルは、PSU側の12Vレールに接続する必要があり、最大で150Wの電力を供給できます。",vt,P,de="一部のカードはPCI-E 12ピンコネクタを使用することがあり、これらは最大で500-600Wの電力を供給できます。",bt,B,fe="低価格帯のカードは6ピンコネクタを使用することがあり、最大で75Wの電力を供給します。",ht,_,Ie="さらに、カードが必要とする安定した電圧を提供する高品質な電源ユニット（PSU）を使用する必要があります。",Pt,N,re="もちろん、PSUにはカードを駆動するために十分な未使用の電力が必要です。",Bt,k,ue="<strong>冷却</strong>：",_t,G,je="GPUが過熱すると、スロットリングが開始され、フルパフォーマンスを提供しなくなり、過熱しすぎるとシャットダウンすることさえあります。",Nt,V,ce="GPUが重要な負荷の下でどのような温度を目指すべきかを正確に示すことは難しいですが、おそらく+80℃未満であれば良いでしょうが、それより低い方が良いです - おそらく70-75℃が優れた範囲でしょう。スロットリングの開始温度はおそらく84-90℃のあたりからでしょう。スロットリングによるパフォーマンスの低下以外にも、長時間にわたる非常に高い温度はGPUの寿命を短縮する可能性があります。",kt,A,xe="次に、複数のGPUを持つ際に最も重要な側面の一つである接続について詳しく見てみましょう。",Gt,E,Vt,Z,ve="複数のGPUを使用する場合、カードの相互接続方法はトータルのトレーニング時間に大きな影響を与える可能性があります。GPUが同じ物理ノードにある場合、次のように実行できます：",At,$,Et,S,be="もちろん、GPUがどのように相互接続されているかについて説明します。デュアルGPUを搭載し、NVLinkで接続されているマシンでは、おそらく以下のような情報が表示されるでしょう：",Zt,L,$t,X,he="別のNVLinkなしのマシンでは、以下のような状況が発生するかもしれません：",St,R,Lt,H,Pe="こちらが伝説です：",Xt,W,Rt,Q,Be="最初のレポートである <code>NV2</code> では、GPUは2つのNVLinkで接続されており、2番目のレポートである <code>PHB</code> では、典型的な消費者向けのPCIe+Bridgeセットアップが行われています。",Ht,Y,_e="あなたのセットアップでどの種類の接続性があるかを確認してください。これらの接続方法のいくつかはカード間の通信を速くすることができます（例：NVLink）、他のものは遅くすることができます（例：PHB）。",Wt,F,Ne="使用されるスケーラビリティソリューションの種類に応じて、接続速度は大きな影響を与えることも、小さな影響を与えることもあります。GPUがあまり頻繁に同期する必要がない場合、DDPのように、遅い接続の影響はそれほど重要ではありません。しかし、GPUが頻繁にメッセージを送信する必要がある場合、ZeRO-DPのように、高速の接続がより高速なトレーニングを実現するために非常に重要になります。",Qt,g,Yt,z,ke='<a href="https://en.wikipedia.org/wiki/NVLink" rel="nofollow">NVLink</a> は、Nvidiaによって開発された有線のシリアルマルチレーンの近距離通信リンクです。',Ft,D,Ge='各新世代では、より高速な帯域幅が提供されます。たとえば、<a href="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/pdf/NVIDIA-ampere-GA102-GPU-Architecture-Whitepaper-V1.pdf" rel="nofollow">Nvidia Ampere GA102 GPU Architecture</a> からの引用です。',gt,O,Ve=`<p>Third-Generation NVLink®
GA102 GPUs utilize NVIDIA’s third-generation NVLink interface, which includes four x4 links,
with each link providing 14.0625 GB/sec bandwidth in each direction between two GPUs. Four
links provide 56.25 GB/sec bandwidth in each direction, and 112.5 GB/sec total bandwidth
between two GPUs. Two RTX 3090 GPUs can be connected together for SLI using NVLink.
(Note that 3-Way and 4-Way SLI configurations are not supported.)</p>`,zt,q,Ae="したがって、<code>nvidia-smi topo -m</code> の出力の <code>NVX</code> レポートで取得する <code>X</code> が高いほど良いです。世代はあなたのGPUアーキテクチャに依存します。",Dt,K,Ee="小さなサンプルのwikitextを使用したgpt2言語モデルのトレーニングの実行を比較しましょう。",Ot,tt,Ze="結果は次のとおりです：",qt,et,$e="（ここに結果を挿入）",Kt,lt,Se="上記のテキストの日本語訳を提供しました。Markdownコードとしてフォーマットしました。どんな他の質問があれば、お気軽にお知らせください！",te,nt,Le='<thead><tr><th>NVlink</th> <th align="right">Time</th></tr></thead> <tbody><tr><td>Y</td> <td align="right">101s</td></tr> <tr><td>N</td> <td align="right">131s</td></tr></tbody>',ee,st,Xe="NVLinkを使用すると、トレーニングが約23％速く完了することがわかります。2番目のベンチマークでは、<code>NCCL_P2P_DISABLE=1</code>を使用して、GPUがNVLinkを使用しないように指示しています。",le,it,Re="以下は、完全なベンチマークコードと出力です：",ne,pt,se,Mt,He=`Hardware: 2x TITAN RTX 24GB each + NVlink with 2 NVLinks (<code>NV2</code> in <code>nvidia-smi topo -m</code>)
Software: <code>pytorch-1.8-to-be</code> + <code>cuda-11.0</code> / <code>transformers==4.3.0.dev0</code>`,ie,Ut,pe;return o=new Ct({props:{title:"Custom hardware for training",local:"custom-hardware-for-training",headingTag:"h1"}}),I=new Ct({props:{title:"GPU",local:"gpu",headingTag:"h2"}}),c=new Ct({props:{title:"Power and Cooling",local:"power-and-cooling",headingTag:"h3"}}),E=new Ct({props:{title:"Multi-GPU Connectivity",local:"multi-gpu-connectivity",headingTag:"h3"}}),$=new wt({props:{code:"bnZpZGlhLXNtaSUyMHRvcG8lMjAtbQ==",highlighted:"nvidia-smi topo -m",wrap:!1}}),L=new wt({props:{code:"JTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwR1BVMCUyMCUyMCUyMCUyMEdQVTElMjAlMjAlMjAlMjBDUFUlMjBBZmZpbml0eSUyMCUyMCUyMCUyME5VTUElMjBBZmZpbml0eSUwQUdQVTAlMjAlMjAlMjAlMjAlMjBYJTIwJTIwJTIwJTIwJTIwJTIwTlYyJTIwJTIwJTIwJTIwJTIwMC0yMyUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyME4lMkZBJTBBR1BVMSUyMCUyMCUyMCUyME5WMiUyMCUyMCUyMCUyMCUyMCUyMFglMjAlMjAlMjAlMjAlMjAlMjAwLTIzJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwTiUyRkE=",highlighted:`        <span class="hljs-attribute">GPU0</span>    GPU1    CPU Affinity    NUMA Affinity
<span class="hljs-attribute">GPU0</span>     X      NV2     <span class="hljs-number">0</span>-<span class="hljs-number">23</span>            N/A
<span class="hljs-attribute">GPU1</span>    NV2      X      <span class="hljs-number">0</span>-<span class="hljs-number">23</span>            N/A`,wrap:!1}}),R=new wt({props:{code:"JTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwR1BVMCUyMCUyMCUyMCUyMEdQVTElMjAlMjAlMjAlMjBDUFUlMjBBZmZpbml0eSUyMCUyMCUyMCUyME5VTUElMjBBZmZpbml0eSUwQUdQVTAlMjAlMjAlMjAlMjAlMjBYJTIwJTIwJTIwJTIwJTIwJTIwUEhCJTIwJTIwJTIwJTIwJTIwMC0xMSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyME4lMkZBJTBBR1BVMSUyMCUyMCUyMCUyMFBIQiUyMCUyMCUyMCUyMCUyMCUyMFglMjAlMjAlMjAlMjAlMjAlMjAwLTExJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwTiUyRkE=",highlighted:`        <span class="hljs-attribute">GPU0</span>    GPU1    CPU Affinity    NUMA Affinity
<span class="hljs-attribute">GPU0</span>     X      PHB     <span class="hljs-number">0</span>-<span class="hljs-number">11</span>            N/A
<span class="hljs-attribute">GPU1</span>    PHB      X      <span class="hljs-number">0</span>-<span class="hljs-number">11</span>            N/A`,wrap:!1}}),W=new wt({props:{code:"JTIwJTIwWCUyMCUyMCUyMCUyMCUzRCUyMFNlbGYlMEElMjAlMjBTWVMlMjAlMjAlM0QlMjBDb25uZWN0aW9uJTIwdHJhdmVyc2luZyUyMFBDSWUlMjBhcyUyMHdlbGwlMjBhcyUyMHRoZSUyMFNNUCUyMGludGVyY29ubmVjdCUyMGJldHdlZW4lMjBOVU1BJTIwbm9kZXMlMjAoZS5nLiUyQyUyMFFQSSUyRlVQSSklMEElMjAlMjBOT0RFJTIwJTNEJTIwQ29ubmVjdGlvbiUyMHRyYXZlcnNpbmclMjBQQ0llJTIwYXMlMjB3ZWxsJTIwYXMlMjB0aGUlMjBpbnRlcmNvbm5lY3QlMjBiZXR3ZWVuJTIwUENJZSUyMEhvc3QlMjBCcmlkZ2VzJTIwd2l0aGluJTIwYSUyME5VTUElMjBub2RlJTBBJTIwJTIwUEhCJTIwJTIwJTNEJTIwQ29ubmVjdGlvbiUyMHRyYXZlcnNpbmclMjBQQ0llJTIwYXMlMjB3ZWxsJTIwYXMlMjBhJTIwUENJZSUyMEhvc3QlMjBCcmlkZ2UlMjAodHlwaWNhbGx5JTIwdGhlJTIwQ1BVKSUwQSUyMCUyMFBYQiUyMCUyMCUzRCUyMENvbm5lY3Rpb24lMjB0cmF2ZXJzaW5nJTIwbXVsdGlwbGUlMjBQQ0llJTIwYnJpZGdlcyUyMCh3aXRob3V0JTIwdHJhdmVyc2luZyUyMHRoZSUyMFBDSWUlMjBIb3N0JTIwQnJpZGdlKSUwQSUyMCUyMFBJWCUyMCUyMCUzRCUyMENvbm5lY3Rpb24lMjB0cmF2ZXJzaW5nJTIwYXQlMjBtb3N0JTIwYSUyMHNpbmdsZSUyMFBDSWUlMjBicmlkZ2UlMEElMjAlMjBOViUyMyUyMCUyMCUzRCUyMENvbm5lY3Rpb24lMjB0cmF2ZXJzaW5nJTIwYSUyMGJvbmRlZCUyMHNldCUyMG9mJTIwJTIzJTIwTlZMaW5rcw==",highlighted:`  X    = Self
  SYS  = Connection traversing PCIe <span class="hljs-keyword">as</span> well <span class="hljs-keyword">as</span> <span class="hljs-keyword">the</span> SMP interconnect between NUMA nodes (e.g., QPI/UPI)
  NODE = Connection traversing PCIe <span class="hljs-keyword">as</span> well <span class="hljs-keyword">as</span> <span class="hljs-keyword">the</span> interconnect between PCIe Host Bridges <span class="hljs-keyword">within</span> <span class="hljs-keyword">a</span> NUMA node
  PHB  = Connection traversing PCIe <span class="hljs-keyword">as</span> well <span class="hljs-keyword">as</span> <span class="hljs-keyword">a</span> PCIe Host Bridge (typically <span class="hljs-keyword">the</span> CPU)
  PXB  = Connection traversing multiple PCIe bridges (<span class="hljs-keyword">without</span> traversing <span class="hljs-keyword">the</span> PCIe Host Bridge)
  PIX  = Connection traversing <span class="hljs-keyword">at</span> most <span class="hljs-keyword">a</span> single PCIe bridge
  NV<span class="hljs-comment">#  = Connection traversing a bonded set of # NVLinks</span>`,wrap:!1}}),g=new Ct({props:{title:"NVlink",local:"nvlink",headingTag:"h4"}}),pt=new wt({props:{code:"JTIzJTIwRERQJTIwdyUyRiUyME5WTGluayUwQSUwQXJtJTIwLXIlMjAlMkZ0bXAlMkZ0ZXN0LWNsbSUzQiUyMENVREFfVklTSUJMRV9ERVZJQ0VTJTNEMCUyQzElMjB0b3JjaHJ1biUyMCU1QyUwQS0tbnByb2NfcGVyX25vZGUlMjAyJTIwZXhhbXBsZXMlMkZweXRvcmNoJTJGbGFuZ3VhZ2UtbW9kZWxpbmclMkZydW5fY2xtLnB5JTIwLS1tb2RlbF9uYW1lX29yX3BhdGglMjBvcGVuYWktY29tbXVuaXR5JTJGZ3B0MiUyMCU1QyUwQS0tZGF0YXNldF9uYW1lJTIwd2lraXRleHQlMjAtLWRhdGFzZXRfY29uZmlnX25hbWUlMjB3aWtpdGV4dC0yLXJhdy12MSUyMC0tZG9fdHJhaW4lMjAlNUMlMEEtLW91dHB1dF9kaXIlMjAlMkZ0bXAlMkZ0ZXN0LWNsbSUyMC0tcGVyX2RldmljZV90cmFpbl9iYXRjaF9zaXplJTIwNCUyMC0tbWF4X3N0ZXBzJTIwMjAwJTBBJTBBJTdCJ3RyYWluX3J1bnRpbWUnJTNBJTIwMTAxLjkwMDMlMkMlMjAndHJhaW5fc2FtcGxlc19wZXJfc2Vjb25kJyUzQSUyMDEuOTYzJTJDJTIwJ2Vwb2NoJyUzQSUyMDAuNjklN0QlMEElMEElMjMlMjBERFAlMjB3JTJGbyUyME5WTGluayUwQSUwQXJtJTIwLXIlMjAlMkZ0bXAlMkZ0ZXN0LWNsbSUzQiUyMENVREFfVklTSUJMRV9ERVZJQ0VTJTNEMCUyQzElMjBOQ0NMX1AyUF9ESVNBQkxFJTNEMSUyMHRvcmNocnVuJTIwJTVDJTBBLS1ucHJvY19wZXJfbm9kZSUyMDIlMjBleGFtcGxlcyUyRnB5dG9yY2glMkZsYW5ndWFnZS1tb2RlbGluZyUyRnJ1bl9jbG0ucHklMjAtLW1vZGVsX25hbWVfb3JfcGF0aCUyMG9wZW5haS1jb21tdW5pdHklMkZncHQyJTIwJTVDJTBBLS1kYXRhc2V0X25hbWUlMjB3aWtpdGV4dCUyMC0tZGF0YXNldF9jb25maWdfbmFtZSUyMHdpa2l0ZXh0LTItcmF3LXYxJTIwLS1kb190cmFpbiUwQS0tb3V0cHV0X2RpciUyMCUyRnRtcCUyRnRlc3QtY2xtJTIwLS1wZXJfZGV2aWNlX3RyYWluX2JhdGNoX3NpemUlMjA0JTIwLS1tYXhfc3RlcHMlMjAyMDAlMEElMEElN0IndHJhaW5fcnVudGltZSclM0ElMjAxMzEuNDM2NyUyQyUyMCd0cmFpbl9zYW1wbGVzX3Blcl9zZWNvbmQnJTNBJTIwMS41MjIlMkMlMjAnZXBvY2gnJTNBJTIwMC42OSU3RA==",highlighted:`<span class="hljs-comment"># DDP w/ NVLink</span>

<span class="hljs-built_in">rm</span> -r /tmp/test-clm; CUDA_VISIBLE_DEVICES=0,1 torchrun \\
--nproc_per_node 2 examples/pytorch/language-modeling/run_clm.py --model_name_or_path openai-community/gpt2 \\
--dataset_name wikitext --dataset_config_name wikitext-2-raw-v1 --do_train \\
--output_dir /tmp/test-clm --per_device_train_batch_size 4 --max_steps 200

{<span class="hljs-string">&#x27;train_runtime&#x27;</span>: 101.9003, <span class="hljs-string">&#x27;train_samples_per_second&#x27;</span>: 1.963, <span class="hljs-string">&#x27;epoch&#x27;</span>: 0.69}

<span class="hljs-comment"># DDP w/o NVLink</span>

<span class="hljs-built_in">rm</span> -r /tmp/test-clm; CUDA_VISIBLE_DEVICES=0,1 NCCL_P2P_DISABLE=1 torchrun \\
--nproc_per_node 2 examples/pytorch/language-modeling/run_clm.py --model_name_or_path openai-community/gpt2 \\
--dataset_name wikitext --dataset_config_name wikitext-2-raw-v1 --do_train
--output_dir /tmp/test-clm --per_device_train_batch_size 4 --max_steps 200

{<span class="hljs-string">&#x27;train_runtime&#x27;</span>: 131.4367, <span class="hljs-string">&#x27;train_samples_per_second&#x27;</span>: 1.522, <span class="hljs-string">&#x27;epoch&#x27;</span>: 0.69}`,wrap:!1}}),{c(){J=p("meta"),yt=s(),at=p("p"),mt=s(),U(o.$$.fragment),Tt=s(),d=p("p"),d.innerHTML=ae,Jt=s(),f=p("p"),f.textContent=Ue,ot=s(),U(I.$$.fragment),dt=s(),r=p("p"),r.textContent=we,ft=s(),u=p("ul"),u.innerHTML=Ce,It=s(),j=p("p"),j.textContent=ye,rt=s(),U(c.$$.fragment),ut=s(),x=p("p"),x.textContent=me,jt=s(),v=p("p"),v.innerHTML=Te,ct=s(),b=p("p"),b.textContent=Je,xt=s(),h=p("p"),h.textContent=oe,vt=s(),P=p("p"),P.textContent=de,bt=s(),B=p("p"),B.textContent=fe,ht=s(),_=p("p"),_.textContent=Ie,Pt=s(),N=p("p"),N.textContent=re,Bt=s(),k=p("p"),k.innerHTML=ue,_t=s(),G=p("p"),G.textContent=je,Nt=s(),V=p("p"),V.textContent=ce,kt=s(),A=p("p"),A.textContent=xe,Gt=s(),U(E.$$.fragment),Vt=s(),Z=p("p"),Z.textContent=ve,At=s(),U($.$$.fragment),Et=s(),S=p("p"),S.textContent=be,Zt=s(),U(L.$$.fragment),$t=s(),X=p("p"),X.textContent=he,St=s(),U(R.$$.fragment),Lt=s(),H=p("p"),H.textContent=Pe,Xt=s(),U(W.$$.fragment),Rt=s(),Q=p("p"),Q.innerHTML=Be,Ht=s(),Y=p("p"),Y.textContent=_e,Wt=s(),F=p("p"),F.textContent=Ne,Qt=s(),U(g.$$.fragment),Yt=s(),z=p("p"),z.innerHTML=ke,Ft=s(),D=p("p"),D.innerHTML=Ge,gt=s(),O=p("blockquote"),O.innerHTML=Ve,zt=s(),q=p("p"),q.innerHTML=Ae,Dt=s(),K=p("p"),K.textContent=Ee,Ot=s(),tt=p("p"),tt.textContent=Ze,qt=s(),et=p("p"),et.textContent=$e,Kt=s(),lt=p("p"),lt.textContent=Se,te=s(),nt=p("table"),nt.innerHTML=Le,ee=s(),st=p("p"),st.innerHTML=Xe,le=s(),it=p("p"),it.textContent=Re,ne=s(),U(pt.$$.fragment),se=s(),Mt=p("p"),Mt.innerHTML=He,ie=s(),Ut=p("p"),this.h()},l(t){const e=Oe("svelte-u9bgzb",document.head);J=M(e,"META",{name:!0,content:!0}),e.forEach(l),yt=i(t),at=M(t,"P",{}),We(at).forEach(l),mt=i(t),w(o.$$.fragment,t),Tt=i(t),d=M(t,"P",{"data-svelte-h":!0}),a(d)!=="svelte-4rp2i7"&&(d.innerHTML=ae),Jt=i(t),f=M(t,"P",{"data-svelte-h":!0}),a(f)!=="svelte-1rf6q21"&&(f.textContent=Ue),ot=i(t),w(I.$$.fragment,t),dt=i(t),r=M(t,"P",{"data-svelte-h":!0}),a(r)!=="svelte-sw48j5"&&(r.textContent=we),ft=i(t),u=M(t,"UL",{"data-svelte-h":!0}),a(u)!=="svelte-18ibhbu"&&(u.innerHTML=Ce),It=i(t),j=M(t,"P",{"data-svelte-h":!0}),a(j)!=="svelte-v8xypo"&&(j.textContent=ye),rt=i(t),w(c.$$.fragment,t),ut=i(t),x=M(t,"P",{"data-svelte-h":!0}),a(x)!=="svelte-1fgvesf"&&(x.textContent=me),jt=i(t),v=M(t,"P",{"data-svelte-h":!0}),a(v)!=="svelte-1ickil9"&&(v.innerHTML=Te),ct=i(t),b=M(t,"P",{"data-svelte-h":!0}),a(b)!=="svelte-7jv407"&&(b.textContent=Je),xt=i(t),h=M(t,"P",{"data-svelte-h":!0}),a(h)!=="svelte-t19b0k"&&(h.textContent=oe),vt=i(t),P=M(t,"P",{"data-svelte-h":!0}),a(P)!=="svelte-1l60rxq"&&(P.textContent=de),bt=i(t),B=M(t,"P",{"data-svelte-h":!0}),a(B)!=="svelte-d83w8p"&&(B.textContent=fe),ht=i(t),_=M(t,"P",{"data-svelte-h":!0}),a(_)!=="svelte-qhi575"&&(_.textContent=Ie),Pt=i(t),N=M(t,"P",{"data-svelte-h":!0}),a(N)!=="svelte-1hrg78"&&(N.textContent=re),Bt=i(t),k=M(t,"P",{"data-svelte-h":!0}),a(k)!=="svelte-umzsoy"&&(k.innerHTML=ue),_t=i(t),G=M(t,"P",{"data-svelte-h":!0}),a(G)!=="svelte-1i6shx4"&&(G.textContent=je),Nt=i(t),V=M(t,"P",{"data-svelte-h":!0}),a(V)!=="svelte-10vbjq8"&&(V.textContent=ce),kt=i(t),A=M(t,"P",{"data-svelte-h":!0}),a(A)!=="svelte-p4f5wa"&&(A.textContent=xe),Gt=i(t),w(E.$$.fragment,t),Vt=i(t),Z=M(t,"P",{"data-svelte-h":!0}),a(Z)!=="svelte-168wuut"&&(Z.textContent=ve),At=i(t),w($.$$.fragment,t),Et=i(t),S=M(t,"P",{"data-svelte-h":!0}),a(S)!=="svelte-17tt0lp"&&(S.textContent=be),Zt=i(t),w(L.$$.fragment,t),$t=i(t),X=M(t,"P",{"data-svelte-h":!0}),a(X)!=="svelte-1ml9iad"&&(X.textContent=he),St=i(t),w(R.$$.fragment,t),Lt=i(t),H=M(t,"P",{"data-svelte-h":!0}),a(H)!=="svelte-edd85a"&&(H.textContent=Pe),Xt=i(t),w(W.$$.fragment,t),Rt=i(t),Q=M(t,"P",{"data-svelte-h":!0}),a(Q)!=="svelte-2v7b6i"&&(Q.innerHTML=Be),Ht=i(t),Y=M(t,"P",{"data-svelte-h":!0}),a(Y)!=="svelte-zjp9ph"&&(Y.textContent=_e),Wt=i(t),F=M(t,"P",{"data-svelte-h":!0}),a(F)!=="svelte-1lwfmge"&&(F.textContent=Ne),Qt=i(t),w(g.$$.fragment,t),Yt=i(t),z=M(t,"P",{"data-svelte-h":!0}),a(z)!=="svelte-wrowsz"&&(z.innerHTML=ke),Ft=i(t),D=M(t,"P",{"data-svelte-h":!0}),a(D)!=="svelte-13p6p4b"&&(D.innerHTML=Ge),gt=i(t),O=M(t,"BLOCKQUOTE",{"data-svelte-h":!0}),a(O)!=="svelte-14khom1"&&(O.innerHTML=Ve),zt=i(t),q=M(t,"P",{"data-svelte-h":!0}),a(q)!=="svelte-1fpr61m"&&(q.innerHTML=Ae),Dt=i(t),K=M(t,"P",{"data-svelte-h":!0}),a(K)!=="svelte-fvsf9s"&&(K.textContent=Ee),Ot=i(t),tt=M(t,"P",{"data-svelte-h":!0}),a(tt)!=="svelte-1lbnhaw"&&(tt.textContent=Ze),qt=i(t),et=M(t,"P",{"data-svelte-h":!0}),a(et)!=="svelte-16gw8ke"&&(et.textContent=$e),Kt=i(t),lt=M(t,"P",{"data-svelte-h":!0}),a(lt)!=="svelte-1syf6lt"&&(lt.textContent=Se),te=i(t),nt=M(t,"TABLE",{"data-svelte-h":!0}),a(nt)!=="svelte-1hvmx1i"&&(nt.innerHTML=Le),ee=i(t),st=M(t,"P",{"data-svelte-h":!0}),a(st)!=="svelte-10gsjxh"&&(st.innerHTML=Xe),le=i(t),it=M(t,"P",{"data-svelte-h":!0}),a(it)!=="svelte-kf5bi3"&&(it.textContent=Re),ne=i(t),w(pt.$$.fragment,t),se=i(t),Mt=M(t,"P",{"data-svelte-h":!0}),a(Mt)!=="svelte-pittpg"&&(Mt.innerHTML=He),ie=i(t),Ut=M(t,"P",{}),We(Ut).forEach(l),this.h()},h(){Qe(J,"name","hf:doc:metadata"),Qe(J,"content",tl)},m(t,e){qe(document.head,J),n(t,yt,e),n(t,at,e),n(t,mt,e),C(o,t,e),n(t,Tt,e),n(t,d,e),n(t,Jt,e),n(t,f,e),n(t,ot,e),C(I,t,e),n(t,dt,e),n(t,r,e),n(t,ft,e),n(t,u,e),n(t,It,e),n(t,j,e),n(t,rt,e),C(c,t,e),n(t,ut,e),n(t,x,e),n(t,jt,e),n(t,v,e),n(t,ct,e),n(t,b,e),n(t,xt,e),n(t,h,e),n(t,vt,e),n(t,P,e),n(t,bt,e),n(t,B,e),n(t,ht,e),n(t,_,e),n(t,Pt,e),n(t,N,e),n(t,Bt,e),n(t,k,e),n(t,_t,e),n(t,G,e),n(t,Nt,e),n(t,V,e),n(t,kt,e),n(t,A,e),n(t,Gt,e),C(E,t,e),n(t,Vt,e),n(t,Z,e),n(t,At,e),C($,t,e),n(t,Et,e),n(t,S,e),n(t,Zt,e),C(L,t,e),n(t,$t,e),n(t,X,e),n(t,St,e),C(R,t,e),n(t,Lt,e),n(t,H,e),n(t,Xt,e),C(W,t,e),n(t,Rt,e),n(t,Q,e),n(t,Ht,e),n(t,Y,e),n(t,Wt,e),n(t,F,e),n(t,Qt,e),C(g,t,e),n(t,Yt,e),n(t,z,e),n(t,Ft,e),n(t,D,e),n(t,gt,e),n(t,O,e),n(t,zt,e),n(t,q,e),n(t,Dt,e),n(t,K,e),n(t,Ot,e),n(t,tt,e),n(t,qt,e),n(t,et,e),n(t,Kt,e),n(t,lt,e),n(t,te,e),n(t,nt,e),n(t,ee,e),n(t,st,e),n(t,le,e),n(t,it,e),n(t,ne,e),C(pt,t,e),n(t,se,e),n(t,Mt,e),n(t,ie,e),n(t,Ut,e),pe=!0},p:Fe,i(t){pe||(y(o.$$.fragment,t),y(I.$$.fragment,t),y(c.$$.fragment,t),y(E.$$.fragment,t),y($.$$.fragment,t),y(L.$$.fragment,t),y(R.$$.fragment,t),y(W.$$.fragment,t),y(g.$$.fragment,t),y(pt.$$.fragment,t),pe=!0)},o(t){m(o.$$.fragment,t),m(I.$$.fragment,t),m(c.$$.fragment,t),m(E.$$.fragment,t),m($.$$.fragment,t),m(L.$$.fragment,t),m(R.$$.fragment,t),m(W.$$.fragment,t),m(g.$$.fragment,t),m(pt.$$.fragment,t),pe=!1},d(t){t&&(l(yt),l(at),l(mt),l(Tt),l(d),l(Jt),l(f),l(ot),l(dt),l(r),l(ft),l(u),l(It),l(j),l(rt),l(ut),l(x),l(jt),l(v),l(ct),l(b),l(xt),l(h),l(vt),l(P),l(bt),l(B),l(ht),l(_),l(Pt),l(N),l(Bt),l(k),l(_t),l(G),l(Nt),l(V),l(kt),l(A),l(Gt),l(Vt),l(Z),l(At),l(Et),l(S),l(Zt),l($t),l(X),l(St),l(Lt),l(H),l(Xt),l(Rt),l(Q),l(Ht),l(Y),l(Wt),l(F),l(Qt),l(Yt),l(z),l(Ft),l(D),l(gt),l(O),l(zt),l(q),l(Dt),l(K),l(Ot),l(tt),l(qt),l(et),l(Kt),l(lt),l(te),l(nt),l(ee),l(st),l(le),l(it),l(ne),l(se),l(Mt),l(ie),l(Ut)),l(J),T(o,t),T(I,t),T(c,t),T(E,t),T($,t),T(L,t),T(R,t),T(W,t),T(g,t),T(pt,t)}}}const tl='{"title":"Custom hardware for training","local":"custom-hardware-for-training","sections":[{"title":"GPU","local":"gpu","sections":[{"title":"Power and Cooling","local":"power-and-cooling","sections":[],"depth":3},{"title":"Multi-GPU Connectivity","local":"multi-gpu-connectivity","sections":[{"title":"NVlink","local":"nvlink","sections":[],"depth":4}],"depth":3}],"depth":2}],"depth":1}';function el(Me){return ge(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class pl extends ze{constructor(J){super(),De(this,J,el,Ke,Ye,{})}}export{pl as component};
