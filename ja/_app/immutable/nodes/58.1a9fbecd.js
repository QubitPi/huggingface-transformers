import{s as ft,o as ut,n as gt}from"../chunks/scheduler.9bc65507.js";import{S as kt,i as _t,g as a,s,r as f,A as bt,h as i,f as n,c as r,j as x,u,x as c,k as q,y as t,a as d,v as g,d as k,t as _,w as b}from"../chunks/index.707bf1b6.js";import{T as zt}from"../chunks/Tip.c2ecdbf4.js";import{D as C}from"../chunks/Docstring.17db21ae.js";import{H as he}from"../chunks/Heading.342b1fa6.js";function Tt(fe){let m,D=`BARThez の実装は、トークン化を除いて BART と同じです。詳細については、<a href="bart">BART ドキュメント</a> を参照してください。
構成クラスとそのパラメータ。 BARThez 固有のトークナイザーについては以下に記載されています。`;return{c(){m=a("p"),m.innerHTML=D},l(z){m=i(z,"P",{"data-svelte-h":!0}),c(m)!=="svelte-pvzsbk"&&(m.innerHTML=D)},m(z,G){d(z,m,G)},p:gt,d(z){z&&n(m)}}}function vt(fe){let m,D,z,G,A,ue,R,ge,F,Ge=`BARThez モデルは、Moussa Kamal Eddine、Antoine J.-P によって <a href="https://arxiv.org/abs/2010.12321" rel="nofollow">BARThez: a Skilled Pretrained French Sequence-to-Sequence Model</a> で提案されました。ティクシエ、ミカリス・ヴァジルジャンニス、10月23日、
2020年。`,ke,M,Ye="論文の要約:",_e,H,Ze=`<em>帰納的転移学習は、自己教師あり学習によって可能になり、自然言語処理全体を実行します。
(NLP) 分野は、BERT や BART などのモデルにより、無数の自然言語に新たな最先端技術を確立し、嵐を巻き起こしています。
タスクを理解すること。いくつかの注目すべき例外はありますが、利用可能なモデルと研究のほとんどは、
英語を対象に実施されました。この作品では、フランス語用の最初の BART モデルである BARTez を紹介します。
（我々の知る限りに）。 BARThez は、過去の研究から得た非常に大規模な単一言語フランス語コーパスで事前トレーニングされました
BART の摂動スキームに合わせて調整しました。既存の BERT ベースのフランス語モデルとは異なり、
CamemBERT と FlauBERT、BARThez は、エンコーダだけでなく、
そのデコーダは事前トレーニングされています。 FLUE ベンチマークからの識別タスクに加えて、BARThez を新しい評価に基づいて評価します。
この論文とともにリリースする要約データセット、OrangeSum。また、すでに行われている事前トレーニングも継続します。
BARTHez のコーパス上で多言語 BART を事前訓練し、結果として得られるモデル (mBARTHez と呼ぶ) が次のことを示します。
バニラの BARThez を大幅に強化し、CamemBERT や FlauBERT と同等かそれを上回ります。</em>`,be,I,et='このモデルは <a href="https://huggingface.co/moussakam" rel="nofollow">moussakam</a> によって寄稿されました。著者のコードは<a href="https://github.com/moussaKam/BARThez" rel="nofollow">ここ</a>にあります。',ze,w,Te,E,ve,S,tt=`<li>BARThez は、BART と同様の方法でシーケンス間のタスクを微調整できます。以下を確認してください。
<a href="https://github.com/huggingface/transformers/tree/main/examples/pytorch/summarization/README.md" rel="nofollow">examples/pytorch/summarization/</a>。</li>`,$e,O,xe,l,j,Ae,Y,nt=`Adapted from <a href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertTokenizer">CamembertTokenizer</a> and <a href="/docs/transformers/main/ja/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. Construct a BARThez tokenizer. Based on
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a>.`,Re,Z,ot=`This tokenizer inherits from <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`,Fe,T,N,Me,ee,st=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BARThez sequence has the following format:`,He,te,rt="<li>single sequence: <code>&lt;s&gt; X &lt;/s&gt;</code></li> <li>pair of sequences: <code>&lt;s&gt; A &lt;/s&gt;&lt;/s&gt; B &lt;/s&gt;</code></li>",Ie,B,U,Ee,ne,at="Converts a sequence of tokens (string) in a single string.",Se,y,Q,Oe,oe,it="Create a mask from the two sequences passed to be used in a sequence-pair classification task.",je,L,V,Ne,se,dt=`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer <code>prepare_for_model</code> method.`,qe,W,we,h,K,Ue,re,lt=`Adapted from <a href="/docs/transformers/main/ja/model_doc/camembert#transformers.CamembertTokenizer">CamembertTokenizer</a> and <a href="/docs/transformers/main/ja/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. Construct a “fast” BARThez tokenizer. Based on
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a>.`,Qe,ae,ct=`This tokenizer inherits from <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a> which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`,Ve,v,X,We,ie,mt=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BARThez sequence has the following format:`,Ke,de,pt="<li>single sequence: <code>&lt;s&gt; X &lt;/s&gt;</code></li> <li>pair of sequences: <code>&lt;s&gt; A &lt;/s&gt;&lt;/s&gt; B &lt;/s&gt;</code></li>",Xe,P,J,Je,le,ht="Create a mask from the two sequences passed to be used in a sequence-pair classification task.",Be,pe,ye;return A=new he({props:{title:"BARThez",local:"barthez",headingTag:"h1"}}),R=new he({props:{title:"Overview",local:"overview",headingTag:"h2"}}),w=new zt({props:{$$slots:{default:[Tt]},$$scope:{ctx:fe}}}),E=new he({props:{title:"Resources",local:"resources",headingTag:"h3"}}),O=new he({props:{title:"BarthezTokenizer",local:"transformers.BarthezTokenizer",headingTag:"h2"}}),j=new C({props:{name:"class transformers.BarthezTokenizer",anchor:"transformers.BarthezTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BarthezTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.BarthezTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.BarthezTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.BarthezTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BarthezTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BarthezTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BarthezTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BarthezTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BarthezTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:</p>
<ul>
<li>
<p><code>enable_sampling</code>: Enable subword regularization.</p>
</li>
<li>
<p><code>nbest_size</code>: Sampling parameters for unigram. Invalid for BPE-Dropout.</p>
<ul>
<li><code>nbest_size = {0,1}</code>: No sampling is performed.</li>
<li><code>nbest_size &gt; 1</code>: samples from the nbest_size results.</li>
<li><code>nbest_size &lt; 0</code>: assuming that nbest_size is infinite and samples from the all hypothesis (lattice)
using forward-filtering-and-backward-sampling algorithm.</li>
</ul>
</li>
<li>
<p><code>alpha</code>: Smoothing parameter for unigram sampling, and dropout probability of merge operations for
BPE-dropout.</p>
</li>
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.BarthezTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/barthez/tokenization_barthez.py#L53"}}),N=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BarthezTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.BarthezTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BarthezTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/barthez/tokenization_barthez.py#L159",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),U=new C({props:{name:"convert_tokens_to_string",anchor:"transformers.BarthezTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/barthez/tokenization_barthez.py#L255"}}),Q=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BarthezTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.BarthezTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BarthezTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/barthez/tokenization_barthez.py#L212",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of zeros.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),V=new C({props:{name:"get_special_tokens_mask",anchor:"transformers.BarthezTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BarthezTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BarthezTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BarthezTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/barthez/tokenization_barthez.py#L185",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),W=new he({props:{title:"BarthezTokenizerFast",local:"transformers.BarthezTokenizerFast",headingTag:"h2"}}),K=new C({props:{name:"class transformers.BarthezTokenizerFast",anchor:"transformers.BarthezTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BarthezTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.BarthezTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.BarthezTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.BarthezTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BarthezTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BarthezTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BarthezTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BarthezTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BarthezTokenizerFast.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;s&gt;NOTUSED&quot;, &quot;&lt;/s&gt;NOTUSED&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/barthez/tokenization_barthez_fast.py#L62"}}),X=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BarthezTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.BarthezTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BarthezTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/barthez/tokenization_barthez_fast.py#L154",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),J=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BarthezTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.BarthezTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BarthezTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/barthez/tokenization_barthez_fast.py#L180",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of zeros.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),{c(){m=a("meta"),D=s(),z=a("p"),G=s(),f(A.$$.fragment),ue=s(),f(R.$$.fragment),ge=s(),F=a("p"),F.innerHTML=Ge,ke=s(),M=a("p"),M.textContent=Ye,_e=s(),H=a("p"),H.innerHTML=Ze,be=s(),I=a("p"),I.innerHTML=et,ze=s(),f(w.$$.fragment),Te=s(),f(E.$$.fragment),ve=s(),S=a("ul"),S.innerHTML=tt,$e=s(),f(O.$$.fragment),xe=s(),l=a("div"),f(j.$$.fragment),Ae=s(),Y=a("p"),Y.innerHTML=nt,Re=s(),Z=a("p"),Z.innerHTML=ot,Fe=s(),T=a("div"),f(N.$$.fragment),Me=s(),ee=a("p"),ee.textContent=st,He=s(),te=a("ul"),te.innerHTML=rt,Ie=s(),B=a("div"),f(U.$$.fragment),Ee=s(),ne=a("p"),ne.textContent=at,Se=s(),y=a("div"),f(Q.$$.fragment),Oe=s(),oe=a("p"),oe.textContent=it,je=s(),L=a("div"),f(V.$$.fragment),Ne=s(),se=a("p"),se.innerHTML=dt,qe=s(),f(W.$$.fragment),we=s(),h=a("div"),f(K.$$.fragment),Ue=s(),re=a("p"),re.innerHTML=lt,Qe=s(),ae=a("p"),ae.innerHTML=ct,Ve=s(),v=a("div"),f(X.$$.fragment),We=s(),ie=a("p"),ie.textContent=mt,Ke=s(),de=a("ul"),de.innerHTML=pt,Xe=s(),P=a("div"),f(J.$$.fragment),Je=s(),le=a("p"),le.textContent=ht,Be=s(),pe=a("p"),this.h()},l(e){const o=bt("svelte-u9bgzb",document.head);m=i(o,"META",{name:!0,content:!0}),o.forEach(n),D=r(e),z=i(e,"P",{}),x(z).forEach(n),G=r(e),u(A.$$.fragment,e),ue=r(e),u(R.$$.fragment,e),ge=r(e),F=i(e,"P",{"data-svelte-h":!0}),c(F)!=="svelte-13rlm15"&&(F.innerHTML=Ge),ke=r(e),M=i(e,"P",{"data-svelte-h":!0}),c(M)!=="svelte-eexy9s"&&(M.textContent=Ye),_e=r(e),H=i(e,"P",{"data-svelte-h":!0}),c(H)!=="svelte-1i34nii"&&(H.innerHTML=Ze),be=r(e),I=i(e,"P",{"data-svelte-h":!0}),c(I)!=="svelte-mvkqsj"&&(I.innerHTML=et),ze=r(e),u(w.$$.fragment,e),Te=r(e),u(E.$$.fragment,e),ve=r(e),S=i(e,"UL",{"data-svelte-h":!0}),c(S)!=="svelte-lp07ro"&&(S.innerHTML=tt),$e=r(e),u(O.$$.fragment,e),xe=r(e),l=i(e,"DIV",{class:!0});var p=x(l);u(j.$$.fragment,p),Ae=r(p),Y=i(p,"P",{"data-svelte-h":!0}),c(Y)!=="svelte-brs42l"&&(Y.innerHTML=nt),Re=r(p),Z=i(p,"P",{"data-svelte-h":!0}),c(Z)!=="svelte-rs9us"&&(Z.innerHTML=ot),Fe=r(p),T=i(p,"DIV",{class:!0});var ce=x(T);u(N.$$.fragment,ce),Me=r(ce),ee=i(ce,"P",{"data-svelte-h":!0}),c(ee)!=="svelte-js8h2n"&&(ee.textContent=st),He=r(ce),te=i(ce,"UL",{"data-svelte-h":!0}),c(te)!=="svelte-rq8uot"&&(te.innerHTML=rt),ce.forEach(n),Ie=r(p),B=i(p,"DIV",{class:!0});var Le=x(B);u(U.$$.fragment,Le),Ee=r(Le),ne=i(Le,"P",{"data-svelte-h":!0}),c(ne)!=="svelte-b3k2yi"&&(ne.textContent=at),Le.forEach(n),Se=r(p),y=i(p,"DIV",{class:!0});var Pe=x(y);u(Q.$$.fragment,Pe),Oe=r(Pe),oe=i(Pe,"P",{"data-svelte-h":!0}),c(oe)!=="svelte-sqjw56"&&(oe.textContent=it),Pe.forEach(n),je=r(p),L=i(p,"DIV",{class:!0});var Ce=x(L);u(V.$$.fragment,Ce),Ne=r(Ce),se=i(Ce,"P",{"data-svelte-h":!0}),c(se)!=="svelte-1f4f5kp"&&(se.innerHTML=dt),Ce.forEach(n),p.forEach(n),qe=r(e),u(W.$$.fragment,e),we=r(e),h=i(e,"DIV",{class:!0});var $=x(h);u(K.$$.fragment,$),Ue=r($),re=i($,"P",{"data-svelte-h":!0}),c(re)!=="svelte-214q5w"&&(re.innerHTML=lt),Qe=r($),ae=i($,"P",{"data-svelte-h":!0}),c(ae)!=="svelte-y6yfrk"&&(ae.innerHTML=ct),Ve=r($),v=i($,"DIV",{class:!0});var me=x(v);u(X.$$.fragment,me),We=r(me),ie=i(me,"P",{"data-svelte-h":!0}),c(ie)!=="svelte-js8h2n"&&(ie.textContent=mt),Ke=r(me),de=i(me,"UL",{"data-svelte-h":!0}),c(de)!=="svelte-rq8uot"&&(de.innerHTML=pt),me.forEach(n),Xe=r($),P=i($,"DIV",{class:!0});var De=x(P);u(J.$$.fragment,De),Je=r(De),le=i(De,"P",{"data-svelte-h":!0}),c(le)!=="svelte-sqjw56"&&(le.textContent=ht),De.forEach(n),$.forEach(n),Be=r(e),pe=i(e,"P",{}),x(pe).forEach(n),this.h()},h(){q(m,"name","hf:doc:metadata"),q(m,"content",$t),q(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),q(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),q(y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),q(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),q(l,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),q(v,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),q(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),q(h,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,o){t(document.head,m),d(e,D,o),d(e,z,o),d(e,G,o),g(A,e,o),d(e,ue,o),g(R,e,o),d(e,ge,o),d(e,F,o),d(e,ke,o),d(e,M,o),d(e,_e,o),d(e,H,o),d(e,be,o),d(e,I,o),d(e,ze,o),g(w,e,o),d(e,Te,o),g(E,e,o),d(e,ve,o),d(e,S,o),d(e,$e,o),g(O,e,o),d(e,xe,o),d(e,l,o),g(j,l,null),t(l,Ae),t(l,Y),t(l,Re),t(l,Z),t(l,Fe),t(l,T),g(N,T,null),t(T,Me),t(T,ee),t(T,He),t(T,te),t(l,Ie),t(l,B),g(U,B,null),t(B,Ee),t(B,ne),t(l,Se),t(l,y),g(Q,y,null),t(y,Oe),t(y,oe),t(l,je),t(l,L),g(V,L,null),t(L,Ne),t(L,se),d(e,qe,o),g(W,e,o),d(e,we,o),d(e,h,o),g(K,h,null),t(h,Ue),t(h,re),t(h,Qe),t(h,ae),t(h,Ve),t(h,v),g(X,v,null),t(v,We),t(v,ie),t(v,Ke),t(v,de),t(h,Xe),t(h,P),g(J,P,null),t(P,Je),t(P,le),d(e,Be,o),d(e,pe,o),ye=!0},p(e,[o]){const p={};o&2&&(p.$$scope={dirty:o,ctx:e}),w.$set(p)},i(e){ye||(k(A.$$.fragment,e),k(R.$$.fragment,e),k(w.$$.fragment,e),k(E.$$.fragment,e),k(O.$$.fragment,e),k(j.$$.fragment,e),k(N.$$.fragment,e),k(U.$$.fragment,e),k(Q.$$.fragment,e),k(V.$$.fragment,e),k(W.$$.fragment,e),k(K.$$.fragment,e),k(X.$$.fragment,e),k(J.$$.fragment,e),ye=!0)},o(e){_(A.$$.fragment,e),_(R.$$.fragment,e),_(w.$$.fragment,e),_(E.$$.fragment,e),_(O.$$.fragment,e),_(j.$$.fragment,e),_(N.$$.fragment,e),_(U.$$.fragment,e),_(Q.$$.fragment,e),_(V.$$.fragment,e),_(W.$$.fragment,e),_(K.$$.fragment,e),_(X.$$.fragment,e),_(J.$$.fragment,e),ye=!1},d(e){e&&(n(D),n(z),n(G),n(ue),n(ge),n(F),n(ke),n(M),n(_e),n(H),n(be),n(I),n(ze),n(Te),n(ve),n(S),n($e),n(xe),n(l),n(qe),n(we),n(h),n(Be),n(pe)),n(m),b(A,e),b(R,e),b(w,e),b(E,e),b(O,e),b(j),b(N),b(U),b(Q),b(V),b(W,e),b(K),b(X),b(J)}}}const $t='{"title":"BARThez","local":"barthez","sections":[{"title":"Overview","local":"overview","sections":[{"title":"Resources","local":"resources","sections":[],"depth":3}],"depth":2},{"title":"BarthezTokenizer","local":"transformers.BarthezTokenizer","sections":[],"depth":2},{"title":"BarthezTokenizerFast","local":"transformers.BarthezTokenizerFast","sections":[],"depth":2}],"depth":1}';function xt(fe){return ut(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Pt extends kt{constructor(m){super(),_t(this,m,xt,vt,ft,{})}}export{Pt as component};
