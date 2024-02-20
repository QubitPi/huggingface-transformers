import{s as ut,o as ft,n as gt}from"../chunks/scheduler.9bc65507.js";import{S as kt,i as _t,g as a,s,r as u,A as bt,h as i,f as n,c as r,j as $,u as f,x as c,k as x,y as t,a as d,v as g,d as k,t as _,w as b}from"../chunks/index.707bf1b6.js";import{T as zt}from"../chunks/Tip.c2ecdbf4.js";import{D as C}from"../chunks/Docstring.17db21ae.js";import{H as he}from"../chunks/Heading.342b1fa6.js";function Tt(ue){let m,A=`BARThez implementation is the same as BART, except for tokenization. Refer to <a href="bart">BART documentation</a> for information on
configuration classes and their parameters. BARThez-specific tokenizers are documented below.`;return{c(){m=a("p"),m.innerHTML=A},l(z){m=i(z,"P",{"data-svelte-h":!0}),c(m)!=="svelte-127v6y2"&&(m.innerHTML=A)},m(z,G){d(z,m,G)},p:gt,d(z){z&&n(m)}}}function vt(ue){let m,A,z,G,D,fe,R,ge,F,Ge=`The BARThez model was proposed in <a href="https://arxiv.org/abs/2010.12321" rel="nofollow">BARThez: a Skilled Pretrained French Sequence-to-Sequence Model</a> by Moussa Kamal Eddine, Antoine J.-P. Tixier, Michalis Vazirgiannis on 23 Oct,
2020.`,ke,I,Ye="The abstract of the paper:",_e,M,Ze=`<em>Inductive transfer learning, enabled by self-supervised learning, have taken the entire Natural Language Processing
(NLP) field by storm, with models such as BERT and BART setting new state of the art on countless natural language
understanding tasks. While there are some notable exceptions, most of the available models and research have been
conducted for the English language. In this work, we introduce BARThez, the first BART model for the French language
(to the best of our knowledge). BARThez was pretrained on a very large monolingual French corpus from past research
that we adapted to suit BART’s perturbation schemes. Unlike already existing BERT-based French language models such as
CamemBERT and FlauBERT, BARThez is particularly well-suited for generative tasks, since not only its encoder but also
its decoder is pretrained. In addition to discriminative tasks from the FLUE benchmark, we evaluate BARThez on a novel
summarization dataset, OrangeSum, that we release with this paper. We also continue the pretraining of an already
pretrained multilingual BART on BARThez’s corpus, and we show that the resulting model, which we call mBARTHez,
provides a significant boost over vanilla BARThez, and is on par with or outperforms CamemBERT and FlauBERT.</em>`,be,E,et='This model was contributed by <a href="https://huggingface.co/moussakam" rel="nofollow">moussakam</a>. The Authors’ code can be found <a href="https://github.com/moussaKam/BARThez" rel="nofollow">here</a>.',ze,q,Te,H,ve,S,tt=`<li>BARThez can be fine-tuned on sequence-to-sequence tasks in a similar way as BART, check:
<a href="https://github.com/huggingface/transformers/tree/main/examples/pytorch/summarization/README.md" rel="nofollow">examples/pytorch/summarization/</a>.</li>`,we,O,$e,l,N,De,Y,nt=`Adapted from <a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertTokenizer">CamembertTokenizer</a> and <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. Construct a BARThez tokenizer. Based on
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a>.`,Re,Z,ot=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`,Fe,T,U,Ie,ee,st=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BARThez sequence has the following format:`,Me,te,rt="<li>single sequence: <code>&lt;s&gt; X &lt;/s&gt;</code></li> <li>pair of sequences: <code>&lt;s&gt; A &lt;/s&gt;&lt;/s&gt; B &lt;/s&gt;</code></li>",Ee,B,V,He,ne,at="Converts a sequence of tokens (string) in a single string.",Se,y,Q,Oe,oe,it="Create a mask from the two sequences passed to be used in a sequence-pair classification task.",Ne,L,W,Ue,se,dt=`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer <code>prepare_for_model</code> method.`,xe,j,qe,h,K,Ve,re,lt=`Adapted from <a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertTokenizer">CamembertTokenizer</a> and <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartTokenizer">BartTokenizer</a>. Construct a “fast” BARThez tokenizer. Based on
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a>.`,Qe,ae,ct=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a> which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`,We,v,X,je,ie,mt=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BARThez sequence has the following format:`,Ke,de,pt="<li>single sequence: <code>&lt;s&gt; X &lt;/s&gt;</code></li> <li>pair of sequences: <code>&lt;s&gt; A &lt;/s&gt;&lt;/s&gt; B &lt;/s&gt;</code></li>",Xe,P,J,Je,le,ht="Create a mask from the two sequences passed to be used in a sequence-pair classification task.",Be,pe,ye;return D=new he({props:{title:"BARThez",local:"barthez",headingTag:"h1"}}),R=new he({props:{title:"Overview",local:"overview",headingTag:"h2"}}),q=new zt({props:{$$slots:{default:[Tt]},$$scope:{ctx:ue}}}),H=new he({props:{title:"Resources",local:"resources",headingTag:"h2"}}),O=new he({props:{title:"BarthezTokenizer",local:"transformers.BarthezTokenizer",headingTag:"h2"}}),N=new C({props:{name:"class transformers.BarthezTokenizer",anchor:"transformers.BarthezTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BarthezTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/barthez/tokenization_barthez.py#L53"}}),U=new C({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BarthezTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.BarthezTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BarthezTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/barthez/tokenization_barthez.py#L159",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),V=new C({props:{name:"convert_tokens_to_string",anchor:"transformers.BarthezTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/barthez/tokenization_barthez.py#L255"}}),Q=new C({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BarthezTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.BarthezTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BarthezTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/barthez/tokenization_barthez.py#L212",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of zeros.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),W=new C({props:{name:"get_special_tokens_mask",anchor:"transformers.BarthezTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BarthezTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BarthezTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BarthezTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/barthez/tokenization_barthez.py#L185",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),j=new he({props:{title:"BarthezTokenizerFast",local:"transformers.BarthezTokenizerFast",headingTag:"h2"}}),K=new C({props:{name:"class transformers.BarthezTokenizerFast",anchor:"transformers.BarthezTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BarthezTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
`}}),{c(){m=a("meta"),A=s(),z=a("p"),G=s(),u(D.$$.fragment),fe=s(),u(R.$$.fragment),ge=s(),F=a("p"),F.innerHTML=Ge,ke=s(),I=a("p"),I.textContent=Ye,_e=s(),M=a("p"),M.innerHTML=Ze,be=s(),E=a("p"),E.innerHTML=et,ze=s(),u(q.$$.fragment),Te=s(),u(H.$$.fragment),ve=s(),S=a("ul"),S.innerHTML=tt,we=s(),u(O.$$.fragment),$e=s(),l=a("div"),u(N.$$.fragment),De=s(),Y=a("p"),Y.innerHTML=nt,Re=s(),Z=a("p"),Z.innerHTML=ot,Fe=s(),T=a("div"),u(U.$$.fragment),Ie=s(),ee=a("p"),ee.textContent=st,Me=s(),te=a("ul"),te.innerHTML=rt,Ee=s(),B=a("div"),u(V.$$.fragment),He=s(),ne=a("p"),ne.textContent=at,Se=s(),y=a("div"),u(Q.$$.fragment),Oe=s(),oe=a("p"),oe.textContent=it,Ne=s(),L=a("div"),u(W.$$.fragment),Ue=s(),se=a("p"),se.innerHTML=dt,xe=s(),u(j.$$.fragment),qe=s(),h=a("div"),u(K.$$.fragment),Ve=s(),re=a("p"),re.innerHTML=lt,Qe=s(),ae=a("p"),ae.innerHTML=ct,We=s(),v=a("div"),u(X.$$.fragment),je=s(),ie=a("p"),ie.textContent=mt,Ke=s(),de=a("ul"),de.innerHTML=pt,Xe=s(),P=a("div"),u(J.$$.fragment),Je=s(),le=a("p"),le.textContent=ht,Be=s(),pe=a("p"),this.h()},l(e){const o=bt("svelte-u9bgzb",document.head);m=i(o,"META",{name:!0,content:!0}),o.forEach(n),A=r(e),z=i(e,"P",{}),$(z).forEach(n),G=r(e),f(D.$$.fragment,e),fe=r(e),f(R.$$.fragment,e),ge=r(e),F=i(e,"P",{"data-svelte-h":!0}),c(F)!=="svelte-6jqwe8"&&(F.innerHTML=Ge),ke=r(e),I=i(e,"P",{"data-svelte-h":!0}),c(I)!=="svelte-v8ud33"&&(I.textContent=Ye),_e=r(e),M=i(e,"P",{"data-svelte-h":!0}),c(M)!=="svelte-libbyk"&&(M.innerHTML=Ze),be=r(e),E=i(e,"P",{"data-svelte-h":!0}),c(E)!=="svelte-xolpee"&&(E.innerHTML=et),ze=r(e),f(q.$$.fragment,e),Te=r(e),f(H.$$.fragment,e),ve=r(e),S=i(e,"UL",{"data-svelte-h":!0}),c(S)!=="svelte-1m5bh03"&&(S.innerHTML=tt),we=r(e),f(O.$$.fragment,e),$e=r(e),l=i(e,"DIV",{class:!0});var p=$(l);f(N.$$.fragment,p),De=r(p),Y=i(p,"P",{"data-svelte-h":!0}),c(Y)!=="svelte-1u4yp2l"&&(Y.innerHTML=nt),Re=r(p),Z=i(p,"P",{"data-svelte-h":!0}),c(Z)!=="svelte-1c3t5ty"&&(Z.innerHTML=ot),Fe=r(p),T=i(p,"DIV",{class:!0});var ce=$(T);f(U.$$.fragment,ce),Ie=r(ce),ee=i(ce,"P",{"data-svelte-h":!0}),c(ee)!=="svelte-js8h2n"&&(ee.textContent=st),Me=r(ce),te=i(ce,"UL",{"data-svelte-h":!0}),c(te)!=="svelte-rq8uot"&&(te.innerHTML=rt),ce.forEach(n),Ee=r(p),B=i(p,"DIV",{class:!0});var Le=$(B);f(V.$$.fragment,Le),He=r(Le),ne=i(Le,"P",{"data-svelte-h":!0}),c(ne)!=="svelte-b3k2yi"&&(ne.textContent=at),Le.forEach(n),Se=r(p),y=i(p,"DIV",{class:!0});var Pe=$(y);f(Q.$$.fragment,Pe),Oe=r(Pe),oe=i(Pe,"P",{"data-svelte-h":!0}),c(oe)!=="svelte-sqjw56"&&(oe.textContent=it),Pe.forEach(n),Ne=r(p),L=i(p,"DIV",{class:!0});var Ce=$(L);f(W.$$.fragment,Ce),Ue=r(Ce),se=i(Ce,"P",{"data-svelte-h":!0}),c(se)!=="svelte-1f4f5kp"&&(se.innerHTML=dt),Ce.forEach(n),p.forEach(n),xe=r(e),f(j.$$.fragment,e),qe=r(e),h=i(e,"DIV",{class:!0});var w=$(h);f(K.$$.fragment,w),Ve=r(w),re=i(w,"P",{"data-svelte-h":!0}),c(re)!=="svelte-15e385w"&&(re.innerHTML=lt),Qe=r(w),ae=i(w,"P",{"data-svelte-h":!0}),c(ae)!=="svelte-fh0aq"&&(ae.innerHTML=ct),We=r(w),v=i(w,"DIV",{class:!0});var me=$(v);f(X.$$.fragment,me),je=r(me),ie=i(me,"P",{"data-svelte-h":!0}),c(ie)!=="svelte-js8h2n"&&(ie.textContent=mt),Ke=r(me),de=i(me,"UL",{"data-svelte-h":!0}),c(de)!=="svelte-rq8uot"&&(de.innerHTML=pt),me.forEach(n),Xe=r(w),P=i(w,"DIV",{class:!0});var Ae=$(P);f(J.$$.fragment,Ae),Je=r(Ae),le=i(Ae,"P",{"data-svelte-h":!0}),c(le)!=="svelte-sqjw56"&&(le.textContent=ht),Ae.forEach(n),w.forEach(n),Be=r(e),pe=i(e,"P",{}),$(pe).forEach(n),this.h()},h(){x(m,"name","hf:doc:metadata"),x(m,"content",wt),x(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),x(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),x(y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),x(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),x(l,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),x(v,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),x(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),x(h,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,o){t(document.head,m),d(e,A,o),d(e,z,o),d(e,G,o),g(D,e,o),d(e,fe,o),g(R,e,o),d(e,ge,o),d(e,F,o),d(e,ke,o),d(e,I,o),d(e,_e,o),d(e,M,o),d(e,be,o),d(e,E,o),d(e,ze,o),g(q,e,o),d(e,Te,o),g(H,e,o),d(e,ve,o),d(e,S,o),d(e,we,o),g(O,e,o),d(e,$e,o),d(e,l,o),g(N,l,null),t(l,De),t(l,Y),t(l,Re),t(l,Z),t(l,Fe),t(l,T),g(U,T,null),t(T,Ie),t(T,ee),t(T,Me),t(T,te),t(l,Ee),t(l,B),g(V,B,null),t(B,He),t(B,ne),t(l,Se),t(l,y),g(Q,y,null),t(y,Oe),t(y,oe),t(l,Ne),t(l,L),g(W,L,null),t(L,Ue),t(L,se),d(e,xe,o),g(j,e,o),d(e,qe,o),d(e,h,o),g(K,h,null),t(h,Ve),t(h,re),t(h,Qe),t(h,ae),t(h,We),t(h,v),g(X,v,null),t(v,je),t(v,ie),t(v,Ke),t(v,de),t(h,Xe),t(h,P),g(J,P,null),t(P,Je),t(P,le),d(e,Be,o),d(e,pe,o),ye=!0},p(e,[o]){const p={};o&2&&(p.$$scope={dirty:o,ctx:e}),q.$set(p)},i(e){ye||(k(D.$$.fragment,e),k(R.$$.fragment,e),k(q.$$.fragment,e),k(H.$$.fragment,e),k(O.$$.fragment,e),k(N.$$.fragment,e),k(U.$$.fragment,e),k(V.$$.fragment,e),k(Q.$$.fragment,e),k(W.$$.fragment,e),k(j.$$.fragment,e),k(K.$$.fragment,e),k(X.$$.fragment,e),k(J.$$.fragment,e),ye=!0)},o(e){_(D.$$.fragment,e),_(R.$$.fragment,e),_(q.$$.fragment,e),_(H.$$.fragment,e),_(O.$$.fragment,e),_(N.$$.fragment,e),_(U.$$.fragment,e),_(V.$$.fragment,e),_(Q.$$.fragment,e),_(W.$$.fragment,e),_(j.$$.fragment,e),_(K.$$.fragment,e),_(X.$$.fragment,e),_(J.$$.fragment,e),ye=!1},d(e){e&&(n(A),n(z),n(G),n(fe),n(ge),n(F),n(ke),n(I),n(_e),n(M),n(be),n(E),n(ze),n(Te),n(ve),n(S),n(we),n($e),n(l),n(xe),n(qe),n(h),n(Be),n(pe)),n(m),b(D,e),b(R,e),b(q,e),b(H,e),b(O,e),b(N),b(U),b(V),b(Q),b(W),b(j,e),b(K),b(X),b(J)}}}const wt='{"title":"BARThez","local":"barthez","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"BarthezTokenizer","local":"transformers.BarthezTokenizer","sections":[],"depth":2},{"title":"BarthezTokenizerFast","local":"transformers.BarthezTokenizerFast","sections":[],"depth":2}],"depth":1}';function $t(ue){return ft(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Pt extends kt{constructor(m){super(),_t(this,m,$t,vt,ut,{})}}export{Pt as component};
