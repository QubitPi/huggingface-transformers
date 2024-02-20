import{s as ae,o as le,n as pe}from"../chunks/scheduler.9bc65507.js";import{S as re,i as oe,g as p,s as a,r as u,A as ie,h as r,f as n,c as l,j as S,u as h,x as d,k as Y,y as o,a as t,v as b,d as j,t as y,w as g}from"../chunks/index.707bf1b6.js";import{T as ce}from"../chunks/Tip.c2ecdbf4.js";import{D as ls}from"../chunks/Docstring.17db21ae.js";import{C as Xs}from"../chunks/CodeBlock.54a9f38d.js";import{H as xs}from"../chunks/Heading.342b1fa6.js";function me(ps){let c,J=`ByT5 のアーキテクチャは T5v1.1 モデルに基づいています。API リファレンスについては、<a href="t5v1.1">T5v1.1 のドキュメント ページ</a> を参照してください。彼らは
モデルの入力を準備する方法が異なるだけです。以下のコード例を参照してください。`;return{c(){c=p("p"),c.innerHTML=J},l(M){c=r(M,"P",{"data-svelte-h":!0}),d(c)!=="svelte-gxrbio"&&(c.innerHTML=J)},m(M,A){t(M,c,A)},p:pe,d(M){M&&n(c)}}}function de(ps){let c,J,M,A,w,rs,B,os,I,Hs=`ByT5 モデルは、<a href="https://arxiv.org/abs/2105.13626" rel="nofollow">ByT5: Towards a token-free future with pre-trained byte-to-byte models</a> by Linting Xue, Aditya Barua, Noah Constant, Rami Al-Rfou, Sharan Narang, Mihir
Kale, Adam Roberts, Colin Raffel.`,is,x,qs="論文の要約は次のとおりです。",cs,G,Fs=`<em>最も広く使用されている事前トレーニング済み言語モデルは、単語またはサブワード単位に対応するトークンのシーケンスで動作します。
テキストをトークンのシーケンスとしてエンコードするには、トークナイザーが必要です。トークナイザーは通常、
モデル。代わりに生のテキスト (バイトまたは文字) を直接操作するトークンフリー モデルには多くの利点があります。
すぐに使用できるあらゆる言語のテキストを処理でき、ノイズに対してより堅牢であり、技術的負債を最小限に抑えます。
複雑でエラーが発生しやすいテキスト前処理パイプラインを削除します。バイトまたは文字列がトークンより長いため
トークンフリー モデルに関する過去の研究では、シーケンスのコストを償却するように設計された新しいモデル アーキテクチャが導入されることがよくありました。
生のテキストを直接操作します。この論文では、標準的な Transformer アーキテクチャが次のようなもので使用できることを示します。
バイトシーケンスを処理するための最小限の変更。パラメータ数の観点からトレードオフを注意深く特徴付けます。
FLOP のトレーニングと推論速度を調べ、バイトレベルのモデルがトークンレベルと競合できることを示します。
対応者。また、バイトレベルのモデルはノイズに対して大幅に堅牢であり、より優れたパフォーマンスを発揮することも示しています。
スペルと発音に敏感なタスク。私たちの貢献の一環として、新しいセットをリリースします。
T5 アーキテクチャに基づいた事前トレーニング済みのバイトレベルの Transformer モデルと、そこで使用されるすべてのコードとデータ
実験。</em>`,ms,v,Es=`このモデルは、<a href="https://huggingface.co/patrickvonplaten" rel="nofollow">patrickvonplaten</a> によって提供されました。元のコードは次のとおりです
<a href="https://github.com/google-research/byt5" rel="nofollow">ここ</a> にあります。`,ds,f,us,C,Ls=`ByT5 は教師なしで事前トレーニングされているため、単一タスク中にタスク プレフィックスを使用する利点はありません。
微調整。マルチタスクの微調整を行う場合は、プレフィックスを使用する必要があります。`,hs,Z,bs,z,Ss="ByT5 は生の UTF-8 バイトで動作するため、トークナイザーなしで使用できます。",js,W,ys,R,Ys="ただし、バッチ推論とトレーニングの場合は、トークナイザーを使用することをお勧めします。",gs,$,Ms,V,As=`<a href="t5">T5</a> と同様に、ByT5 はスパンマスクノイズ除去タスクでトレーニングされました。しかし、
モデルはキャラクターに直接作用するため、事前トレーニングタスクは少し複雑です
違う。のいくつかの文字を破損してみましょう
<code>&quot;The dog chases a ball in the park.&quot;</code>という文を入力し、ByT5 に予測してもらいます。
わたしたちのため。`,Ts,N,fs,Q,ks,i,X,Gs,D,Ds="Construct a ByT5 tokenizer. ByT5 simply uses raw bytes utf-8 encoding.",vs,P,Ps=`This tokenizer inherits from <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`,Cs,T,H,Zs,K,Ks=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`,zs,O,Os="<li>single sequence: <code>X &lt;/s&gt;</code></li> <li>pair of sequences: <code>A &lt;/s&gt; B &lt;/s&gt;</code></li>",Ws,k,q,Rs,ss,se="Converts a sequence of tokens (string) in a single string.",$s,_,F,Vs,es,ee=`Create a mask from the two sequences passed to be used in a sequence-pair classification task. ByT5 does not
make use of token type ids, therefore a list of zeros is returned.`,Ns,U,E,Qs,ns,ne=`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer <code>prepare_for_model</code> method.`,_s,L,te='詳細については、<a href="/docs/transformers/main/ja/model_doc/byt5#transformers.ByT5Tokenizer">ByT5Tokenizer</a> を参照してください。',Us,as,Js;return w=new xs({props:{title:"ByT5",local:"byt5",headingTag:"h1"}}),B=new xs({props:{title:"Overview",local:"overview",headingTag:"h2"}}),f=new ce({props:{$$slots:{default:[me]},$$scope:{ctx:ps}}}),Z=new xs({props:{title:"Usage Examples",local:"usage-examples",headingTag:"h2"}}),W=new Xs({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFQ1Rm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uJTBBaW1wb3J0JTIwdG9yY2glMEElMEFtb2RlbCUyMCUzRCUyMFQ1Rm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUlMkZieXQ1LXNtYWxsJTIyKSUwQSUwQW51bV9zcGVjaWFsX3Rva2VucyUyMCUzRCUyMDMlMEElMjMlMjBNb2RlbCUyMGhhcyUyMDMlMjBzcGVjaWFsJTIwdG9rZW5zJTIwd2hpY2glMjB0YWtlJTIwdXAlMjB0aGUlMjBpbnB1dCUyMGlkcyUyMDAlMkMxJTJDMiUyMG9mJTIwQnlUNS4lMEElMjMlMjAlM0QlM0UlMjBOZWVkJTIwdG8lMjBzaGlmdCUyMHV0Zi04JTIwY2hhcmFjdGVyJTIwZW5jb2RpbmdzJTIwYnklMjAzJTIwYmVmb3JlJTIwcGFzc2luZyUyMGlkcyUyMHRvJTIwbW9kZWwuJTBBJTBBaW5wdXRfaWRzJTIwJTNEJTIwdG9yY2gudGVuc29yKCU1Qmxpc3QoJTIyTGlmZSUyMGlzJTIwbGlrZSUyMGElMjBib3glMjBvZiUyMGNob2NvbGF0ZXMuJTIyLmVuY29kZSglMjJ1dGYtOCUyMikpJTVEKSUyMCUyQiUyMG51bV9zcGVjaWFsX3Rva2VucyUwQSUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvciglNUJsaXN0KCUyMkxhJTIwdmllJTIwZXN0JTIwY29tbWUlMjB1bmUlMjBibyVDMyVBRXRlJTIwZGUlMjBjaG9jb2xhdC4lMjIuZW5jb2RlKCUyMnV0Zi04JTIyKSklNUQpJTIwJTJCJTIwbnVtX3NwZWNpYWxfdG9rZW5zJTBBJTBBbG9zcyUyMCUzRCUyMG1vZGVsKGlucHV0X2lkcyUyQyUyMGxhYmVscyUzRGxhYmVscykubG9zcyUwQWxvc3MuaXRlbSgp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5ForConditionalGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/byt5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_special_tokens = <span class="hljs-number">3</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Model has 3 special tokens which take up the input ids 0,1,2 of ByT5.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># =&gt; Need to shift utf-8 character encodings by 3 before passing ids to model.</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor([<span class="hljs-built_in">list</span>(<span class="hljs-string">&quot;Life is like a box of chocolates.&quot;</span>.encode(<span class="hljs-string">&quot;utf-8&quot;</span>))]) + num_special_tokens

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-built_in">list</span>(<span class="hljs-string">&quot;La vie est comme une boîte de chocolat.&quot;</span>.encode(<span class="hljs-string">&quot;utf-8&quot;</span>))]) + num_special_tokens

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(input_ids, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.item()
<span class="hljs-number">2.66</span>`,wrap:!1}}),$=new Xs({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFQ1Rm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uJTJDJTIwQXV0b1Rva2VuaXplciUwQSUwQW1vZGVsJTIwJTNEJTIwVDVGb3JDb25kaXRpb25hbEdlbmVyYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZSUyRmJ5dDUtc21hbGwlMjIpJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlJTJGYnl0NS1zbWFsbCUyMiklMEElMEFtb2RlbF9pbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTBBJTIwJTIwJTIwJTIwJTVCJTIyTGlmZSUyMGlzJTIwbGlrZSUyMGElMjBib3glMjBvZiUyMGNob2NvbGF0ZXMuJTIyJTJDJTIwJTIyVG9kYXklMjBpcyUyME1vbmRheS4lMjIlNUQlMkMlMjBwYWRkaW5nJTNEJTIybG9uZ2VzdCUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIlMEEpJTBBbGFiZWxzX2RpY3QlMjAlM0QlMjB0b2tlbml6ZXIoJTBBJTIwJTIwJTIwJTIwJTVCJTIyTGElMjB2aWUlMjBlc3QlMjBjb21tZSUyMHVuZSUyMGJvJUMzJUFFdGUlMjBkZSUyMGNob2NvbGF0LiUyMiUyQyUyMCUyMkF1am91cmQnaHVpJTIwYydlc3QlMjBsdW5kaS4lMjIlNUQlMkMlMjBwYWRkaW5nJTNEJTIybG9uZ2VzdCUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIlMEEpJTBBbGFiZWxzJTIwJTNEJTIwbGFiZWxzX2RpY3QuaW5wdXRfaWRzJTBBJTBBbG9zcyUyMCUzRCUyMG1vZGVsKCoqbW9kZWxfaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKS5sb3NzJTBBbG9zcy5pdGVtKCk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5ForConditionalGeneration, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = T5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/byt5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/byt5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model_inputs = tokenizer(
<span class="hljs-meta">... </span>    [<span class="hljs-string">&quot;Life is like a box of chocolates.&quot;</span>, <span class="hljs-string">&quot;Today is Monday.&quot;</span>], padding=<span class="hljs-string">&quot;longest&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels_dict = tokenizer(
<span class="hljs-meta">... </span>    [<span class="hljs-string">&quot;La vie est comme une boîte de chocolat.&quot;</span>, <span class="hljs-string">&quot;Aujourd&#x27;hui c&#x27;est lundi.&quot;</span>], padding=<span class="hljs-string">&quot;longest&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = labels_dict.input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**model_inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.item()
<span class="hljs-number">17.9</span>`,wrap:!1}}),N=new Xs({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBBdXRvTW9kZWxGb3JTZXEyU2VxTE0lMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZSUyRmJ5dDUtYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyMEF1dG9Nb2RlbEZvclNlcTJTZXFMTS5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlJTJGYnl0NS1iYXNlJTIyKSUwQSUwQWlucHV0X2lkc19wcm9tcHQlMjAlM0QlMjAlMjJUaGUlMjBkb2clMjBjaGFzZXMlMjBhJTIwYmFsbCUyMGluJTIwdGhlJTIwcGFyay4lMjIlMEFpbnB1dF9pZHMlMjAlM0QlMjB0b2tlbml6ZXIoaW5wdXRfaWRzX3Byb21wdCkuaW5wdXRfaWRzJTBBJTBBJTIzJTIwTm90ZSUyMHRoYXQlMjB3ZSUyMGNhbm5vdCUyMGFkZCUyMCUyMiU3QmV4dHJhX2lkXy4uLiU3RCUyMiUyMHRvJTIwdGhlJTIwc3RyaW5nJTIwZGlyZWN0bHklMEElMjMlMjBhcyUyMHRoZSUyMEJ5dGUlMjB0b2tlbml6ZXIlMjB3b3VsZCUyMGluY29ycmVjdGx5JTIwbWVyZ2UlMjB0aGUlMjB0b2tlbnMlMEElMjMlMjBGb3IlMjBCeVQ1JTJDJTIwd2UlMjBuZWVkJTIwdG8lMjB3b3JrJTIwZGlyZWN0bHklMjBvbiUyMHRoZSUyMGNoYXJhY3RlciUyMGxldmVsJTBBJTIzJTIwQ29udHJhcnklMjB0byUyMFQ1JTJDJTIwQnlUNSUyMGRvZXMlMjBub3QlMjB1c2UlMjBzZW50aW5lbCUyMHRva2VucyUyMGZvciUyMG1hc2tpbmclMkMlMjBidXQlMjBpbnN0ZWFkJTBBJTIzJTIwdXNlcyUyMGZpbmFsJTIwdXRmJTIwY2hhcmFjdGVyJTIwaWRzLiUwQSUyMyUyMFVURi04JTIwaXMlMjByZXByZXNlbnRlZCUyMGJ5JTIwOCUyMGJpdHMlMjBhbmQlMjBCeVQ1JTIwaGFzJTIwMyUyMHNwZWNpYWwlMjB0b2tlbnMuJTBBJTIzJTIwJTNEJTNFJTIwVGhlcmUlMjBhcmUlMjAyKio4JTJCMiUyMCUzRCUyMDI1OSUyMGlucHV0JTIwaWRzJTIwYW5kJTIwbWFzayUyMHRva2VucyUyMGNvdW50JTIwZG93biUyMGZyb20lMjBpbmRleCUyMDI1OC4lMEElMjMlMjAlM0QlM0UlMjBtYXNrJTIwdG8lMjAlMjJUaGUlMjBkb2clMjAlNUIyNTglNURhJTIwYmFsbCUyMCU1QjI1NyU1RHBhcmsuJTIyJTBBJTBBaW5wdXRfaWRzJTIwJTNEJTIwdG9yY2gudGVuc29yKCU1QmlucHV0X2lkcyU1QiUzQTglNUQlMjAlMkIlMjAlNUIyNTglNUQlMjAlMkIlMjBpbnB1dF9pZHMlNUIxNCUzQTIxJTVEJTIwJTJCJTIwJTVCMjU3JTVEJTIwJTJCJTIwaW5wdXRfaWRzJTVCMjglM0ElNUQlNUQpJTBBaW5wdXRfaWRzJTBBJTBBJTIzJTIwQnlUNSUyMHByb2R1Y2VzJTIwb25seSUyMG9uZSUyMGNoYXIlMjBhdCUyMGElMjB0aW1lJTIwc28lMjB3ZSUyMG5lZWQlMjB0byUyMHByb2R1Y2UlMjBtYW55JTIwbW9yZSUyMG91dHB1dCUyMGNoYXJhY3RlcnMlMjBoZXJlJTIwLSUzRSUyMHNldCUyMCU2MG1heF9sZW5ndGglM0QxMDAlNjAuJTBBb3V0cHV0X2lkcyUyMCUzRCUyMG1vZGVsLmdlbmVyYXRlKGlucHV0X2lkcyUyQyUyMG1heF9sZW5ndGglM0QxMDApJTVCMCU1RC50b2xpc3QoKSUwQW91dHB1dF9pZHMlMEElMEElMjMlMjAlNUUtJTIwTm90ZSUyMGhvdyUyMDI1OCUyMGRlc2NlbmRzJTIwdG8lMjAyNTclMkMlMjAyNTYlMkMlMjAyNTUlMEElMEElMjMlMjBOb3clMjB3ZSUyMG5lZWQlMjB0byUyMHNwbGl0JTIwb24lMjB0aGUlMjBzZW50aW5lbCUyMHRva2VucyUyQyUyMGxldCdzJTIwd3JpdGUlMjBhJTIwc2hvcnQlMjBsb29wJTIwZm9yJTIwdGhpcyUwQW91dHB1dF9pZHNfbGlzdCUyMCUzRCUyMCU1QiU1RCUwQXN0YXJ0X3Rva2VuJTIwJTNEJTIwMCUwQXNlbnRpbmVsX3Rva2VuJTIwJTNEJTIwMjU4JTBBd2hpbGUlMjBzZW50aW5lbF90b2tlbiUyMGluJTIwb3V0cHV0X2lkcyUzQSUwQSUyMCUyMCUyMCUyMHNwbGl0X2lkeCUyMCUzRCUyMG91dHB1dF9pZHMuaW5kZXgoc2VudGluZWxfdG9rZW4pJTBBJTIwJTIwJTIwJTIwb3V0cHV0X2lkc19saXN0LmFwcGVuZChvdXRwdXRfaWRzJTVCc3RhcnRfdG9rZW4lM0FzcGxpdF9pZHglNUQpJTBBJTIwJTIwJTIwJTIwc3RhcnRfdG9rZW4lMjAlM0QlMjBzcGxpdF9pZHglMEElMjAlMjAlMjAlMjBzZW50aW5lbF90b2tlbiUyMC0lM0QlMjAxJTBBJTBBb3V0cHV0X2lkc19saXN0LmFwcGVuZChvdXRwdXRfaWRzJTVCc3RhcnRfdG9rZW4lM0ElNUQpJTBBb3V0cHV0X3N0cmluZyUyMCUzRCUyMHRva2VuaXplci5iYXRjaF9kZWNvZGUob3V0cHV0X2lkc19saXN0KSUwQW91dHB1dF9zdHJpbmc=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForSeq2SeqLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/byt5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;google/byt5-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids_prompt = <span class="hljs-string">&quot;The dog chases a ball in the park.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(input_ids_prompt).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that we cannot add &quot;{extra_id_...}&quot; to the string directly</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># as the Byte tokenizer would incorrectly merge the tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># For ByT5, we need to work directly on the character level</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Contrary to T5, ByT5 does not use sentinel tokens for masking, but instead</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># uses final utf character ids.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># UTF-8 is represented by 8 bits and ByT5 has 3 special tokens.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># =&gt; There are 2**8+2 = 259 input ids and mask tokens count down from index 258.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># =&gt; mask to &quot;The dog [258]a ball [257]park.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor([input_ids[:<span class="hljs-number">8</span>] + [<span class="hljs-number">258</span>] + input_ids[<span class="hljs-number">14</span>:<span class="hljs-number">21</span>] + [<span class="hljs-number">257</span>] + input_ids[<span class="hljs-number">28</span>:]])
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids
tensor([[ <span class="hljs-number">87</span>, <span class="hljs-number">107</span>, <span class="hljs-number">104</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">103</span>, <span class="hljs-number">114</span>, <span class="hljs-number">106</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">258</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">100</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">101</span>, <span class="hljs-number">100</span>, <span class="hljs-number">111</span>, <span class="hljs-number">111</span>, <span class="hljs-number">257</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">115</span>, <span class="hljs-number">100</span>, <span class="hljs-number">117</span>, <span class="hljs-number">110</span>,  <span class="hljs-number">49</span>,   <span class="hljs-number">1</span>]])

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># ByT5 produces only one char at a time so we need to produce many more output characters here -&gt; set \`max_length=100\`.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>output_ids = model.generate(input_ids, max_length=<span class="hljs-number">100</span>)[<span class="hljs-number">0</span>].tolist()
<span class="hljs-meta">&gt;&gt;&gt; </span>output_ids
[<span class="hljs-number">0</span>, <span class="hljs-number">258</span>, <span class="hljs-number">108</span>, <span class="hljs-number">118</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">119</span>, <span class="hljs-number">107</span>, <span class="hljs-number">104</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">114</span>, <span class="hljs-number">113</span>, <span class="hljs-number">104</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">122</span>, <span class="hljs-number">107</span>, <span class="hljs-number">114</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">103</span>, <span class="hljs-number">114</span>, <span class="hljs-number">104</span>, <span class="hljs-number">118</span>, <span class="hljs-number">257</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">108</span>, <span class="hljs-number">113</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">119</span>, <span class="hljs-number">107</span>, <span class="hljs-number">104</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">103</span>, <span class="hljs-number">108</span>, <span class="hljs-number">118</span>, <span class="hljs-number">102</span>, <span class="hljs-number">114</span>, <span class="hljs-number">256</span>, <span class="hljs-number">108</span>, <span class="hljs-number">113</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">119</span>, <span class="hljs-number">107</span>, <span class="hljs-number">104</span>, <span class="hljs-number">35</span>, <span class="hljs-number">115</span>, <span class="hljs-number">100</span>, <span class="hljs-number">117</span>, <span class="hljs-number">110</span>,  <span class="hljs-number">49</span>,  <span class="hljs-number">35</span>,  <span class="hljs-number">87</span>, <span class="hljs-number">107</span>, <span class="hljs-number">104</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">103</span>, <span class="hljs-number">114</span>, <span class="hljs-number">106</span>, <span class="hljs-number">35</span>, <span class="hljs-number">108</span>, <span class="hljs-number">118</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">119</span>, <span class="hljs-number">107</span>, <span class="hljs-number">104</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">114</span>, <span class="hljs-number">113</span>, <span class="hljs-number">104</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">122</span>, <span class="hljs-number">107</span>, <span class="hljs-number">114</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">103</span>, <span class="hljs-number">114</span>, <span class="hljs-number">104</span>, <span class="hljs-number">118</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">100</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">101</span>, <span class="hljs-number">100</span>, <span class="hljs-number">111</span>, <span class="hljs-number">111</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">108</span>, <span class="hljs-number">113</span>, <span class="hljs-number">255</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">108</span>, <span class="hljs-number">113</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">119</span>, <span class="hljs-number">107</span>, <span class="hljs-number">104</span>,  <span class="hljs-number">35</span>, <span class="hljs-number">115</span>, <span class="hljs-number">100</span>, <span class="hljs-number">117</span>, <span class="hljs-number">110</span>,  <span class="hljs-number">49</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># ^- Note how 258 descends to 257, 256, 255</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Now we need to split on the sentinel tokens, let&#x27;s write a short loop for this</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>output_ids_list = []
<span class="hljs-meta">&gt;&gt;&gt; </span>start_token = <span class="hljs-number">0</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>sentinel_token = <span class="hljs-number">258</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">while</span> sentinel_token <span class="hljs-keyword">in</span> output_ids:
<span class="hljs-meta">... </span>    split_idx = output_ids.index(sentinel_token)
<span class="hljs-meta">... </span>    output_ids_list.append(output_ids[start_token:split_idx])
<span class="hljs-meta">... </span>    start_token = split_idx
<span class="hljs-meta">... </span>    sentinel_token -= <span class="hljs-number">1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>output_ids_list.append(output_ids[start_token:])
<span class="hljs-meta">&gt;&gt;&gt; </span>output_string = tokenizer.batch_decode(output_ids_list)
<span class="hljs-meta">&gt;&gt;&gt; </span>output_string
[<span class="hljs-string">&#x27;&lt;pad&gt;&#x27;</span>, <span class="hljs-string">&#x27;is the one who does&#x27;</span>, <span class="hljs-string">&#x27; in the disco&#x27;</span>, <span class="hljs-string">&#x27;in the park. The dog is the one who does a ball in&#x27;</span>, <span class="hljs-string">&#x27; in the park.&#x27;</span>]`,wrap:!1}}),Q=new xs({props:{title:"ByT5Tokenizer",local:"transformers.ByT5Tokenizer",headingTag:"h2"}}),X=new ls({props:{name:"class transformers.ByT5Tokenizer",anchor:"transformers.ByT5Tokenizer",parameters:[{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 125"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ByT5Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.ByT5Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.ByT5Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.ByT5Tokenizer.extra_ids",description:`<strong>extra_ids</strong> (<code>int</code>, <em>optional</em>, defaults to 125) &#x2014;
Add a number of extra ids added to the end of the vocabulary for use as sentinels. These tokens are
accessible as &#x201C;<extra<em>id{%d}&gt;&#x201D; where &#x201D;{%d}&#x201D; is a number between 0 and extra_ids-1. Extra tokens are
indexed from the end of the vocabulary up to beginning (&#x201C;<extra_id_0>&#x201D; is the last token in the vocabulary
like in ByT5 preprocessing see
<a href="https://github.com/google-research/text-to-text-transfer-transformer/blob/9fd7b14a769417be33bc6c850f9598764913c833/t5/data/preprocessors.py#L2117" rel="nofollow">here</a>).</extra_id_0></extra<em>`,name:"extra_ids"},{anchor:"transformers.ByT5Tokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/byt5/tokenization_byt5.py#L28"}}),H=new ls({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.ByT5Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.ByT5Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.ByT5Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/byt5/tokenization_byt5.py#L172",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),q=new ls({props:{name:"convert_tokens_to_string",anchor:"transformers.ByT5Tokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/byt5/tokenization_byt5.py#L218"}}),F=new ls({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.ByT5Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.ByT5Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.ByT5Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/byt5/tokenization_byt5.py#L150",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of zeros.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),E=new ls({props:{name:"get_special_tokens_mask",anchor:"transformers.ByT5Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.ByT5Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.ByT5Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.ByT5Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/byt5/tokenization_byt5.py#L111",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),{c(){c=p("meta"),J=a(),M=p("p"),A=a(),u(w.$$.fragment),rs=a(),u(B.$$.fragment),os=a(),I=p("p"),I.innerHTML=Hs,is=a(),x=p("p"),x.textContent=qs,cs=a(),G=p("p"),G.innerHTML=Fs,ms=a(),v=p("p"),v.innerHTML=Es,ds=a(),u(f.$$.fragment),us=a(),C=p("p"),C.textContent=Ls,hs=a(),u(Z.$$.fragment),bs=a(),z=p("p"),z.textContent=Ss,js=a(),u(W.$$.fragment),ys=a(),R=p("p"),R.textContent=Ys,gs=a(),u($.$$.fragment),Ms=a(),V=p("p"),V.innerHTML=As,Ts=a(),u(N.$$.fragment),fs=a(),u(Q.$$.fragment),ks=a(),i=p("div"),u(X.$$.fragment),Gs=a(),D=p("p"),D.textContent=Ds,vs=a(),P=p("p"),P.innerHTML=Ps,Cs=a(),T=p("div"),u(H.$$.fragment),Zs=a(),K=p("p"),K.textContent=Ks,zs=a(),O=p("ul"),O.innerHTML=Os,Ws=a(),k=p("div"),u(q.$$.fragment),Rs=a(),ss=p("p"),ss.textContent=se,$s=a(),_=p("div"),u(F.$$.fragment),Vs=a(),es=p("p"),es.textContent=ee,Ns=a(),U=p("div"),u(E.$$.fragment),Qs=a(),ns=p("p"),ns.innerHTML=ne,_s=a(),L=p("p"),L.innerHTML=te,Us=a(),as=p("p"),this.h()},l(s){const e=ie("svelte-u9bgzb",document.head);c=r(e,"META",{name:!0,content:!0}),e.forEach(n),J=l(s),M=r(s,"P",{}),S(M).forEach(n),A=l(s),h(w.$$.fragment,s),rs=l(s),h(B.$$.fragment,s),os=l(s),I=r(s,"P",{"data-svelte-h":!0}),d(I)!=="svelte-pu5sl5"&&(I.innerHTML=Hs),is=l(s),x=r(s,"P",{"data-svelte-h":!0}),d(x)!=="svelte-1cv3nri"&&(x.textContent=qs),cs=l(s),G=r(s,"P",{"data-svelte-h":!0}),d(G)!=="svelte-w5iweg"&&(G.innerHTML=Fs),ms=l(s),v=r(s,"P",{"data-svelte-h":!0}),d(v)!=="svelte-1wlc0k"&&(v.innerHTML=Es),ds=l(s),h(f.$$.fragment,s),us=l(s),C=r(s,"P",{"data-svelte-h":!0}),d(C)!=="svelte-qkjjgv"&&(C.textContent=Ls),hs=l(s),h(Z.$$.fragment,s),bs=l(s),z=r(s,"P",{"data-svelte-h":!0}),d(z)!=="svelte-28alha"&&(z.textContent=Ss),js=l(s),h(W.$$.fragment,s),ys=l(s),R=r(s,"P",{"data-svelte-h":!0}),d(R)!=="svelte-1a3s1u8"&&(R.textContent=Ys),gs=l(s),h($.$$.fragment,s),Ms=l(s),V=r(s,"P",{"data-svelte-h":!0}),d(V)!=="svelte-1w67565"&&(V.innerHTML=As),Ts=l(s),h(N.$$.fragment,s),fs=l(s),h(Q.$$.fragment,s),ks=l(s),i=r(s,"DIV",{class:!0});var m=S(i);h(X.$$.fragment,m),Gs=l(m),D=r(m,"P",{"data-svelte-h":!0}),d(D)!=="svelte-ab2b05"&&(D.textContent=Ds),vs=l(m),P=r(m,"P",{"data-svelte-h":!0}),d(P)!=="svelte-rs9us"&&(P.innerHTML=Ps),Cs=l(m),T=r(m,"DIV",{class:!0});var ts=S(T);h(H.$$.fragment,ts),Zs=l(ts),K=r(ts,"P",{"data-svelte-h":!0}),d(K)!=="svelte-1wjq39d"&&(K.textContent=Ks),zs=l(ts),O=r(ts,"UL",{"data-svelte-h":!0}),d(O)!=="svelte-8gh3n2"&&(O.innerHTML=Os),ts.forEach(n),Ws=l(m),k=r(m,"DIV",{class:!0});var ws=S(k);h(q.$$.fragment,ws),Rs=l(ws),ss=r(ws,"P",{"data-svelte-h":!0}),d(ss)!=="svelte-b3k2yi"&&(ss.textContent=se),ws.forEach(n),$s=l(m),_=r(m,"DIV",{class:!0});var Bs=S(_);h(F.$$.fragment,Bs),Vs=l(Bs),es=r(Bs,"P",{"data-svelte-h":!0}),d(es)!=="svelte-on9fcl"&&(es.textContent=ee),Bs.forEach(n),Ns=l(m),U=r(m,"DIV",{class:!0});var Is=S(U);h(E.$$.fragment,Is),Qs=l(Is),ns=r(Is,"P",{"data-svelte-h":!0}),d(ns)!=="svelte-1f4f5kp"&&(ns.innerHTML=ne),Is.forEach(n),m.forEach(n),_s=l(s),L=r(s,"P",{"data-svelte-h":!0}),d(L)!=="svelte-14xrfhp"&&(L.innerHTML=te),Us=l(s),as=r(s,"P",{}),S(as).forEach(n),this.h()},h(){Y(c,"name","hf:doc:metadata"),Y(c,"content",ue),Y(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Y(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Y(_,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Y(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Y(i,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,e){o(document.head,c),t(s,J,e),t(s,M,e),t(s,A,e),b(w,s,e),t(s,rs,e),b(B,s,e),t(s,os,e),t(s,I,e),t(s,is,e),t(s,x,e),t(s,cs,e),t(s,G,e),t(s,ms,e),t(s,v,e),t(s,ds,e),b(f,s,e),t(s,us,e),t(s,C,e),t(s,hs,e),b(Z,s,e),t(s,bs,e),t(s,z,e),t(s,js,e),b(W,s,e),t(s,ys,e),t(s,R,e),t(s,gs,e),b($,s,e),t(s,Ms,e),t(s,V,e),t(s,Ts,e),b(N,s,e),t(s,fs,e),b(Q,s,e),t(s,ks,e),t(s,i,e),b(X,i,null),o(i,Gs),o(i,D),o(i,vs),o(i,P),o(i,Cs),o(i,T),b(H,T,null),o(T,Zs),o(T,K),o(T,zs),o(T,O),o(i,Ws),o(i,k),b(q,k,null),o(k,Rs),o(k,ss),o(i,$s),o(i,_),b(F,_,null),o(_,Vs),o(_,es),o(i,Ns),o(i,U),b(E,U,null),o(U,Qs),o(U,ns),t(s,_s,e),t(s,L,e),t(s,Us,e),t(s,as,e),Js=!0},p(s,[e]){const m={};e&2&&(m.$$scope={dirty:e,ctx:s}),f.$set(m)},i(s){Js||(j(w.$$.fragment,s),j(B.$$.fragment,s),j(f.$$.fragment,s),j(Z.$$.fragment,s),j(W.$$.fragment,s),j($.$$.fragment,s),j(N.$$.fragment,s),j(Q.$$.fragment,s),j(X.$$.fragment,s),j(H.$$.fragment,s),j(q.$$.fragment,s),j(F.$$.fragment,s),j(E.$$.fragment,s),Js=!0)},o(s){y(w.$$.fragment,s),y(B.$$.fragment,s),y(f.$$.fragment,s),y(Z.$$.fragment,s),y(W.$$.fragment,s),y($.$$.fragment,s),y(N.$$.fragment,s),y(Q.$$.fragment,s),y(X.$$.fragment,s),y(H.$$.fragment,s),y(q.$$.fragment,s),y(F.$$.fragment,s),y(E.$$.fragment,s),Js=!1},d(s){s&&(n(J),n(M),n(A),n(rs),n(os),n(I),n(is),n(x),n(cs),n(G),n(ms),n(v),n(ds),n(us),n(C),n(hs),n(bs),n(z),n(js),n(ys),n(R),n(gs),n(Ms),n(V),n(Ts),n(fs),n(ks),n(i),n(_s),n(L),n(Us),n(as)),n(c),g(w,s),g(B,s),g(f,s),g(Z,s),g(W,s),g($,s),g(N,s),g(Q,s),g(X),g(H),g(q),g(F),g(E)}}}const ue='{"title":"ByT5","local":"byt5","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage Examples","local":"usage-examples","sections":[],"depth":2},{"title":"ByT5Tokenizer","local":"transformers.ByT5Tokenizer","sections":[],"depth":2}],"depth":1}';function he(ps){return le(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class fe extends re{constructor(c){super(),oe(this,c,he,de,ae,{})}}export{fe as component};
