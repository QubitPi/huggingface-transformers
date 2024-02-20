import{s as Ka,o as Ra,n as Ua}from"../chunks/scheduler.9bc65507.js";import{S as Xa,i as Ga,g as s,s as a,r as m,A as Ja,h as l,f as r,c as o,j as v,u as c,x as d,k as _,y as t,a as i,v as p,d as g,t as f,w as u}from"../chunks/index.707bf1b6.js";import{T as Ba}from"../chunks/Tip.c2ecdbf4.js";import{D as C}from"../chunks/Docstring.17db21ae.js";import{H as A}from"../chunks/Heading.342b1fa6.js";function Ya(ye){let h,q=`For best performance, this data collator should be used with a dataset having items that are dictionaries or
BatchEncoding, with the <code>&quot;special_tokens_mask&quot;</code> key, as returned by a <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> or a
<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a> with the argument <code>return_special_tokens_mask=True</code>.`;return{c(){h=s("p"),h.innerHTML=q},l($){h=l($,"P",{"data-svelte-h":!0}),d(h)!=="svelte-16kvmfy"&&(h.innerHTML=q)},m($,H){i($,h,H)},p:Ua,d($){$&&r(h)}}}function Za(ye){let h,q=`This collator relies on details of the implementation of subword tokenization by <a href="/docs/transformers/main/ja/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>, specifically
that subword tokens are prefixed with <em>##</em>. For tokenizers that do not adhere to this scheme, this collator will
produce an output that is roughly equivalent to <code>.DataCollatorForLanguageModeling</code>.`;return{c(){h=s("p"),h.innerHTML=q},l($){h=l($,"P",{"data-svelte-h":!0}),d(h)!=="svelte-1dm4bb3"&&(h.innerHTML=q)},m($,H){i($,h,H)},p:Ua,d($){$&&r(h)}}}function eo(ye){let h,q,$,H,R,tt,X,ua=`データ照合器は、データセット要素のリストを入力として使用してバッチを形成するオブジェクトです。これらの要素は、
<code>train_dataset</code> または <code>eval_dataset</code> の要素と同じ型。`,at,G,ha=`バッチを構築できるようにするために、データ照合者は何らかの処理 (パディングなど) を適用する場合があります。そのうちのいくつかは（
<code>DataCollat​​orForLanguageModeling</code>) ランダムなデータ拡張 (ランダム マスキングなど) も適用します
形成されたバッチ上で。`,ot,J,_a='使用例は、<a href="../examples">サンプル スクリプト</a> または <a href="../notebooks">サンプル ノートブック</a> にあります。',rt,Y,nt,y,Z,qt,Pe,ba=`Very simple data collator that simply collates batches of dict-like objects and performs special handling for
potential keys named:`,Mt,we,va="<li><code>label</code>: handles a single value (int or float) per object</li> <li><code>label_ids</code>: handles a list of values per object</li>",zt,Fe,$a=`Does not do any additional preprocessing: property names of the input object will be used as corresponding inputs
to the model. See glue and ner for example of how it’s useful.`,st,ee,lt,T,te,St,Le,ka=`Very simple data collator that simply collates batches of dict-like objects and performs special handling for
potential keys named:`,jt,qe,xa="<li><code>label</code>: handles a single value (int or float) per object</li> <li><code>label_ids</code>: handles a list of values per object</li>",It,Me,Ca=`Does not do any additional preprocessing: property names of the input object will be used as corresponding inputs
to the model. See glue and ner for example of how it’s useful.`,Wt,ze,Ta=`This is an object (like other data collators) rather than a pure function like default_data_collator. This can be
helpful if you need to set a return_tensors value at initialization.`,it,ae,dt,j,oe,At,Se,Da="Data collator that will dynamically pad the inputs received.",mt,re,ct,I,ne,Ht,je,ya="Data collator that will dynamically pad the inputs received, as well as the labels.",pt,se,gt,W,le,Vt,Ie,Pa="Data collator that will dynamically pad the inputs received, as well as the labels.",ft,ie,ut,k,de,Et,We,wa=`Data collator used for language modeling. Inputs are dynamically padded to the maximum length of a batch if they
are not all of the same length.`,Nt,V,Qt,E,me,Ot,Ae,Fa="Prepare masked tokens inputs/labels for masked language modeling: 80% MASK, 10% random, 10% original.",Bt,N,ce,Ut,He,La="Prepare masked tokens inputs/labels for masked language modeling: 80% MASK, 10% random, 10% original.",Kt,Q,pe,Rt,Ve,qa="Prepare masked tokens inputs/labels for masked language modeling: 80% MASK, 10% random, 10% original.",ht,ge,_t,b,fe,Xt,Ee,Ma="Data collator used for language modeling that masks entire words.",Gt,Ne,za="<li>collates batches of tensors, honoring their tokenizer’s pad_token</li> <li>preprocesses batches for masked language modeling</li>",Jt,O,Yt,B,ue,Zt,Qe,Sa=`Prepare masked tokens inputs/labels for masked language modeling: 80% MASK, 10% random, 10% original. Set
‘mask_labels’ means we use whole word mask (wwm), we directly mask idxs according to it’s ref.`,ea,U,he,ta,Oe,ja=`Prepare masked tokens inputs/labels for masked language modeling: 80% MASK, 10% random, 10% original. Set
‘mask_labels’ means we use whole word mask (wwm), we directly mask idxs according to it’s ref.`,aa,K,_e,oa,Be,Ia=`Prepare masked tokens inputs/labels for masked language modeling: 80% MASK, 10% random, 10% original. Set
‘mask_labels’ means we use whole word mask (wwm), we directly mask idxs according to it’s ref.`,bt,be,vt,x,ve,ra,Ue,Wa="Data collator used for permutation language modeling.",na,Ke,Aa="<li>collates batches of tensors, honoring their tokenizer’s pad_token</li> <li>preprocesses batches for permutation language modeling with procedures specific to XLNet</li>",sa,M,$e,la,Re,Ha="The masked tokens to be predicted for a particular sequence are determined by the following algorithm:",ia,ke,Va=`<li>Start from the beginning of the sequence by setting <code>cur_len = 0</code> (number of tokens processed so far).</li> <li>Sample a <code>span_length</code> from the interval <code>[1, max_span_length]</code> (length of span of tokens to be masked)</li> <li>Reserve a context of length <code>context_length = span_length / plm_probability</code> to surround span to be
masked</li> <li>Sample a starting point <code>start_index</code> from the interval <code>[cur_len, cur_len + context_length - span_length]</code> and mask tokens <code>start_index:start_index + span_length</code></li> <li>Set <code>cur_len = cur_len + context_length</code>. If <code>cur_len &lt; max_len</code> (i.e. there are tokens remaining in the
sequence to be processed), repeat from Step 1.</li>`,da,z,xe,ma,Xe,Ea="The masked tokens to be predicted for a particular sequence are determined by the following algorithm:",ca,Ce,Na=`<li>Start from the beginning of the sequence by setting <code>cur_len = 0</code> (number of tokens processed so far).</li> <li>Sample a <code>span_length</code> from the interval <code>[1, max_span_length]</code> (length of span of tokens to be masked)</li> <li>Reserve a context of length <code>context_length = span_length / plm_probability</code> to surround span to be
masked</li> <li>Sample a starting point <code>start_index</code> from the interval <code>[cur_len, cur_len + context_length - span_length]</code> and mask tokens <code>start_index:start_index + span_length</code></li> <li>Set <code>cur_len = cur_len + context_length</code>. If <code>cur_len &lt; max_len</code> (i.e. there are tokens remaining in the
sequence to be processed), repeat from Step 1.</li>`,pa,S,Te,ga,Ge,Qa="The masked tokens to be predicted for a particular sequence are determined by the following algorithm:",fa,De,Oa=`<li>Start from the beginning of the sequence by setting <code>cur_len = 0</code> (number of tokens processed so far).</li> <li>Sample a <code>span_length</code> from the interval <code>[1, max_span_length]</code> (length of span of tokens to be masked)</li> <li>Reserve a context of length <code>context_length = span_length / plm_probability</code> to surround span to be
masked</li> <li>Sample a starting point <code>start_index</code> from the interval <code>[cur_len, cur_len + context_length - span_length]</code> and mask tokens <code>start_index:start_index + span_length</code></li> <li>Set <code>cur_len = cur_len + context_length</code>. If <code>cur_len &lt; max_len</code> (i.e. there are tokens remaining in the
sequence to be processed), repeat from Step 1.</li>`,$t,et,kt;return R=new A({props:{title:"データ照合者",local:"データ照合者",headingTag:"h1"}}),Y=new A({props:{title:"Default data collator",local:"transformers.default_data_collator",headingTag:"h2"}}),Z=new C({props:{name:"transformers.default_data_collator",anchor:"transformers.default_data_collator",parameters:[{name:"features",val:": List"},{name:"return_tensors",val:" = 'pt'"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/data/data_collator.py#L74"}}),ee=new A({props:{title:"DefaultDataCollator",local:"transformers.DefaultDataCollator",headingTag:"h2"}}),te=new C({props:{name:"class transformers.DefaultDataCollator",anchor:"transformers.DefaultDataCollator",parameters:[{name:"return_tensors",val:": str = 'pt'"}],parametersDescription:[{anchor:"transformers.DefaultDataCollator.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;pt&quot;</code>) &#x2014;
The type of Tensor to return. Allowable values are &#x201C;np&#x201D;, &#x201C;pt&#x201D; and &#x201C;tf&#x201D;.`,name:"return_tensors"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/data/data_collator.py#L99"}}),ae=new A({props:{title:"DataCollatorWithPadding",local:"transformers.DataCollatorWithPadding",headingTag:"h2"}}),oe=new C({props:{name:"class transformers.DataCollatorWithPadding",anchor:"transformers.DataCollatorWithPadding",parameters:[{name:"tokenizer",val:": PreTrainedTokenizerBase"},{name:"padding",val:": Union = True"},{name:"max_length",val:": Optional = None"},{name:"pad_to_multiple_of",val:": Optional = None"},{name:"return_tensors",val:": str = 'pt'"}],parametersDescription:[{anchor:"transformers.DataCollatorWithPadding.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> or <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>) &#x2014;
The tokenizer used for encoding the data.`,name:"tokenizer"},{anchor:"transformers.DataCollatorWithPadding.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/ja/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Select a strategy to pad the returned sequences (according to the model&#x2019;s padding side and padding index)
among:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code> (default): Pad to the longest sequence in the batch (or no padding if only a single
sequence is provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code>: No padding (i.e., can output a batch with sequences of different lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.DataCollatorWithPadding.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Maximum length of the returned list and optionally padding length (see above).`,name:"max_length"},{anchor:"transformers.DataCollatorWithPadding.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value.</p>
<p>This is especially useful to enable the use of Tensor Cores on NVIDIA hardware with compute capability &gt;=
7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.DataCollatorWithPadding.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;pt&quot;</code>) &#x2014;
The type of Tensor to return. Allowable values are &#x201C;np&#x201D;, &#x201C;pt&#x201D; and &#x201C;tf&#x201D;.`,name:"return_tensors"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/data/data_collator.py#L236"}}),re=new A({props:{title:"DataCollatorForTokenClassification",local:"transformers.DataCollatorForTokenClassification",headingTag:"h2"}}),ne=new C({props:{name:"class transformers.DataCollatorForTokenClassification",anchor:"transformers.DataCollatorForTokenClassification",parameters:[{name:"tokenizer",val:": PreTrainedTokenizerBase"},{name:"padding",val:": Union = True"},{name:"max_length",val:": Optional = None"},{name:"pad_to_multiple_of",val:": Optional = None"},{name:"label_pad_token_id",val:": int = -100"},{name:"return_tensors",val:": str = 'pt'"}],parametersDescription:[{anchor:"transformers.DataCollatorForTokenClassification.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> or <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>) &#x2014;
The tokenizer used for encoding the data.`,name:"tokenizer"},{anchor:"transformers.DataCollatorForTokenClassification.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/ja/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Select a strategy to pad the returned sequences (according to the model&#x2019;s padding side and padding index)
among:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code> (default): Pad to the longest sequence in the batch (or no padding if only a single
sequence is provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code>: No padding (i.e., can output a batch with sequences of different lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.DataCollatorForTokenClassification.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Maximum length of the returned list and optionally padding length (see above).`,name:"max_length"},{anchor:"transformers.DataCollatorForTokenClassification.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value.</p>
<p>This is especially useful to enable the use of Tensor Cores on NVIDIA hardware with compute capability &gt;=
7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.DataCollatorForTokenClassification.label_pad_token_id",description:`<strong>label_pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to -100) &#x2014;
The id to use when padding the labels (-100 will be automatically ignore by PyTorch loss functions).`,name:"label_pad_token_id"},{anchor:"transformers.DataCollatorForTokenClassification.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;pt&quot;</code>) &#x2014;
The type of Tensor to return. Allowable values are &#x201C;np&#x201D;, &#x201C;pt&#x201D; and &#x201C;tf&#x201D;.`,name:"return_tensors"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/data/data_collator.py#L288"}}),se=new A({props:{title:"DataCollatorForSeq2Seq",local:"transformers.DataCollatorForSeq2Seq",headingTag:"h2"}}),le=new C({props:{name:"class transformers.DataCollatorForSeq2Seq",anchor:"transformers.DataCollatorForSeq2Seq",parameters:[{name:"tokenizer",val:": PreTrainedTokenizerBase"},{name:"model",val:": Optional = None"},{name:"padding",val:": Union = True"},{name:"max_length",val:": Optional = None"},{name:"pad_to_multiple_of",val:": Optional = None"},{name:"label_pad_token_id",val:": int = -100"},{name:"return_tensors",val:": str = 'pt'"}],parametersDescription:[{anchor:"transformers.DataCollatorForSeq2Seq.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> or <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>) &#x2014;
The tokenizer used for encoding the data.`,name:"tokenizer"},{anchor:"transformers.DataCollatorForSeq2Seq.model",description:`<strong>model</strong> (<a href="/docs/transformers/main/ja/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>, <em>optional</em>) &#x2014;
The model that is being trained. If set and has the <em>prepare_decoder_input_ids_from_labels</em>, use it to
prepare the <em>decoder_input_ids</em></p>
<p>This is useful when using <em>label_smoothing</em> to avoid calculating loss twice.`,name:"model"},{anchor:"transformers.DataCollatorForSeq2Seq.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/ja/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Select a strategy to pad the returned sequences (according to the model&#x2019;s padding side and padding index)
among:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code> (default): Pad to the longest sequence in the batch (or no padding if only a single
sequence is provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code>: No padding (i.e., can output a batch with sequences of different lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.DataCollatorForSeq2Seq.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Maximum length of the returned list and optionally padding length (see above).`,name:"max_length"},{anchor:"transformers.DataCollatorForSeq2Seq.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value.</p>
<p>This is especially useful to enable the use of Tensor Cores on NVIDIA hardware with compute capability &gt;=
7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.DataCollatorForSeq2Seq.label_pad_token_id",description:`<strong>label_pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to -100) &#x2014;
The id to use when padding the labels (-100 will be automatically ignored by PyTorch loss functions).`,name:"label_pad_token_id"},{anchor:"transformers.DataCollatorForSeq2Seq.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;pt&quot;</code>) &#x2014;
The type of Tensor to return. Allowable values are &#x201C;np&#x201D;, &#x201C;pt&#x201D; and &#x201C;tf&#x201D;.`,name:"return_tensors"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/data/data_collator.py#L542"}}),ie=new A({props:{title:"DataCollatorForLanguageModeling",local:"transformers.DataCollatorForLanguageModeling",headingTag:"h2"}}),de=new C({props:{name:"class transformers.DataCollatorForLanguageModeling",anchor:"transformers.DataCollatorForLanguageModeling",parameters:[{name:"tokenizer",val:": PreTrainedTokenizerBase"},{name:"mlm",val:": bool = True"},{name:"mlm_probability",val:": float = 0.15"},{name:"pad_to_multiple_of",val:": Optional = None"},{name:"tf_experimental_compile",val:": bool = False"},{name:"return_tensors",val:": str = 'pt'"}],parametersDescription:[{anchor:"transformers.DataCollatorForLanguageModeling.tokenizer",description:`<strong>tokenizer</strong> (<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> or <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>) &#x2014;
The tokenizer used for encoding the data.`,name:"tokenizer"},{anchor:"transformers.DataCollatorForLanguageModeling.mlm",description:`<strong>mlm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use masked language modeling. If set to <code>False</code>, the labels are the same as the inputs
with the padding tokens ignored (by setting them to -100). Otherwise, the labels are -100 for non-masked
tokens and the value to predict for the masked token.`,name:"mlm"},{anchor:"transformers.DataCollatorForLanguageModeling.mlm_probability",description:`<strong>mlm_probability</strong> (<code>float</code>, <em>optional</em>, defaults to 0.15) &#x2014;
The probability with which to (randomly) mask tokens in the input, when <code>mlm</code> is set to <code>True</code>.`,name:"mlm_probability"},{anchor:"transformers.DataCollatorForLanguageModeling.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value.`,name:"pad_to_multiple_of"},{anchor:"transformers.DataCollatorForLanguageModeling.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code>) &#x2014;
The type of Tensor to return. Allowable values are &#x201C;np&#x201D;, &#x201C;pt&#x201D; and &#x201C;tf&#x201D;.`,name:"return_tensors"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/data/data_collator.py#L633"}}),V=new Ba({props:{$$slots:{default:[Ya]},$$scope:{ctx:ye}}}),me=new C({props:{name:"numpy_mask_tokens",anchor:"transformers.DataCollatorForLanguageModeling.numpy_mask_tokens",parameters:[{name:"inputs",val:": Any"},{name:"special_tokens_mask",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/data/data_collator.py#L839"}}),ce=new C({props:{name:"tf_mask_tokens",anchor:"transformers.DataCollatorForLanguageModeling.tf_mask_tokens",parameters:[{name:"inputs",val:": Any"},{name:"vocab_size",val:""},{name:"mask_token_id",val:""},{name:"special_tokens_mask",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/data/data_collator.py#L686"}}),pe=new C({props:{name:"torch_mask_tokens",anchor:"transformers.DataCollatorForLanguageModeling.torch_mask_tokens",parameters:[{name:"inputs",val:": Any"},{name:"special_tokens_mask",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/data/data_collator.py#L782"}}),ge=new A({props:{title:"DataCollatorForWholeWordMask",local:"transformers.DataCollatorForWholeWordMask",headingTag:"h2"}}),fe=new C({props:{name:"class transformers.DataCollatorForWholeWordMask",anchor:"transformers.DataCollatorForWholeWordMask",parameters:[{name:"tokenizer",val:": PreTrainedTokenizerBase"},{name:"mlm",val:": bool = True"},{name:"mlm_probability",val:": float = 0.15"},{name:"pad_to_multiple_of",val:": Optional = None"},{name:"tf_experimental_compile",val:": bool = False"},{name:"return_tensors",val:": str = 'pt'"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/data/data_collator.py#L877"}}),O=new Ba({props:{$$slots:{default:[Za]},$$scope:{ctx:ye}}}),ue=new C({props:{name:"numpy_mask_tokens",anchor:"transformers.DataCollatorForWholeWordMask.numpy_mask_tokens",parameters:[{name:"inputs",val:": Any"},{name:"mask_labels",val:": Any"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/data/data_collator.py#L1108"}}),he=new C({props:{name:"tf_mask_tokens",anchor:"transformers.DataCollatorForWholeWordMask.tf_mask_tokens",parameters:[{name:"inputs",val:": Any"},{name:"mask_labels",val:": Any"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/data/data_collator.py#L1066"}}),_e=new C({props:{name:"torch_mask_tokens",anchor:"transformers.DataCollatorForWholeWordMask.torch_mask_tokens",parameters:[{name:"inputs",val:": Any"},{name:"mask_labels",val:": Any"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/data/data_collator.py#L1026"}}),be=new A({props:{title:"DataCollatorForPermutationLanguageModeling",local:"transformers.DataCollatorForPermutationLanguageModeling",headingTag:"h2"}}),ve=new C({props:{name:"class transformers.DataCollatorForPermutationLanguageModeling",anchor:"transformers.DataCollatorForPermutationLanguageModeling",parameters:[{name:"tokenizer",val:": PreTrainedTokenizerBase"},{name:"plm_probability",val:": float = 0.16666666666666666"},{name:"max_span_length",val:": int = 5"},{name:"return_tensors",val:": str = 'pt'"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/data/data_collator.py#L1232"}}),$e=new C({props:{name:"numpy_mask_tokens",anchor:"transformers.DataCollatorForPermutationLanguageModeling.numpy_mask_tokens",parameters:[{name:"inputs",val:": Any"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/data/data_collator.py#L1473"}}),xe=new C({props:{name:"tf_mask_tokens",anchor:"transformers.DataCollatorForPermutationLanguageModeling.tf_mask_tokens",parameters:[{name:"inputs",val:": Any"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/data/data_collator.py#L1366"}}),Te=new C({props:{name:"torch_mask_tokens",anchor:"transformers.DataCollatorForPermutationLanguageModeling.torch_mask_tokens",parameters:[{name:"inputs",val:": Any"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/data/data_collator.py#L1267"}}),{c(){h=s("meta"),q=a(),$=s("p"),H=a(),m(R.$$.fragment),tt=a(),X=s("p"),X.innerHTML=ua,at=a(),G=s("p"),G.innerHTML=ha,ot=a(),J=s("p"),J.innerHTML=_a,rt=a(),m(Y.$$.fragment),nt=a(),y=s("div"),m(Z.$$.fragment),qt=a(),Pe=s("p"),Pe.textContent=ba,Mt=a(),we=s("ul"),we.innerHTML=va,zt=a(),Fe=s("p"),Fe.textContent=$a,st=a(),m(ee.$$.fragment),lt=a(),T=s("div"),m(te.$$.fragment),St=a(),Le=s("p"),Le.textContent=ka,jt=a(),qe=s("ul"),qe.innerHTML=xa,It=a(),Me=s("p"),Me.textContent=Ca,Wt=a(),ze=s("p"),ze.textContent=Ta,it=a(),m(ae.$$.fragment),dt=a(),j=s("div"),m(oe.$$.fragment),At=a(),Se=s("p"),Se.textContent=Da,mt=a(),m(re.$$.fragment),ct=a(),I=s("div"),m(ne.$$.fragment),Ht=a(),je=s("p"),je.textContent=ya,pt=a(),m(se.$$.fragment),gt=a(),W=s("div"),m(le.$$.fragment),Vt=a(),Ie=s("p"),Ie.textContent=Pa,ft=a(),m(ie.$$.fragment),ut=a(),k=s("div"),m(de.$$.fragment),Et=a(),We=s("p"),We.textContent=wa,Nt=a(),m(V.$$.fragment),Qt=a(),E=s("div"),m(me.$$.fragment),Ot=a(),Ae=s("p"),Ae.textContent=Fa,Bt=a(),N=s("div"),m(ce.$$.fragment),Ut=a(),He=s("p"),He.textContent=La,Kt=a(),Q=s("div"),m(pe.$$.fragment),Rt=a(),Ve=s("p"),Ve.textContent=qa,ht=a(),m(ge.$$.fragment),_t=a(),b=s("div"),m(fe.$$.fragment),Xt=a(),Ee=s("p"),Ee.textContent=Ma,Gt=a(),Ne=s("ul"),Ne.innerHTML=za,Jt=a(),m(O.$$.fragment),Yt=a(),B=s("div"),m(ue.$$.fragment),Zt=a(),Qe=s("p"),Qe.textContent=Sa,ea=a(),U=s("div"),m(he.$$.fragment),ta=a(),Oe=s("p"),Oe.textContent=ja,aa=a(),K=s("div"),m(_e.$$.fragment),oa=a(),Be=s("p"),Be.textContent=Ia,bt=a(),m(be.$$.fragment),vt=a(),x=s("div"),m(ve.$$.fragment),ra=a(),Ue=s("p"),Ue.textContent=Wa,na=a(),Ke=s("ul"),Ke.innerHTML=Aa,sa=a(),M=s("div"),m($e.$$.fragment),la=a(),Re=s("p"),Re.textContent=Ha,ia=a(),ke=s("ol"),ke.innerHTML=Va,da=a(),z=s("div"),m(xe.$$.fragment),ma=a(),Xe=s("p"),Xe.textContent=Ea,ca=a(),Ce=s("ol"),Ce.innerHTML=Na,pa=a(),S=s("div"),m(Te.$$.fragment),ga=a(),Ge=s("p"),Ge.textContent=Qa,fa=a(),De=s("ol"),De.innerHTML=Oa,$t=a(),et=s("p"),this.h()},l(e){const n=Ja("svelte-u9bgzb",document.head);h=l(n,"META",{name:!0,content:!0}),n.forEach(r),q=o(e),$=l(e,"P",{}),v($).forEach(r),H=o(e),c(R.$$.fragment,e),tt=o(e),X=l(e,"P",{"data-svelte-h":!0}),d(X)!=="svelte-wq0mnv"&&(X.innerHTML=ua),at=o(e),G=l(e,"P",{"data-svelte-h":!0}),d(G)!=="svelte-c5nfv2"&&(G.innerHTML=ha),ot=o(e),J=l(e,"P",{"data-svelte-h":!0}),d(J)!=="svelte-qqt368"&&(J.innerHTML=_a),rt=o(e),c(Y.$$.fragment,e),nt=o(e),y=l(e,"DIV",{class:!0});var L=v(y);c(Z.$$.fragment,L),qt=o(L),Pe=l(L,"P",{"data-svelte-h":!0}),d(Pe)!=="svelte-1hmsgsg"&&(Pe.textContent=ba),Mt=o(L),we=l(L,"UL",{"data-svelte-h":!0}),d(we)!=="svelte-1pq8qks"&&(we.innerHTML=va),zt=o(L),Fe=l(L,"P",{"data-svelte-h":!0}),d(Fe)!=="svelte-1vi1gug"&&(Fe.textContent=$a),L.forEach(r),st=o(e),c(ee.$$.fragment,e),lt=o(e),T=l(e,"DIV",{class:!0});var P=v(T);c(te.$$.fragment,P),St=o(P),Le=l(P,"P",{"data-svelte-h":!0}),d(Le)!=="svelte-1hmsgsg"&&(Le.textContent=ka),jt=o(P),qe=l(P,"UL",{"data-svelte-h":!0}),d(qe)!=="svelte-1pq8qks"&&(qe.innerHTML=xa),It=o(P),Me=l(P,"P",{"data-svelte-h":!0}),d(Me)!=="svelte-1vi1gug"&&(Me.textContent=Ca),Wt=o(P),ze=l(P,"P",{"data-svelte-h":!0}),d(ze)!=="svelte-vfvbwr"&&(ze.textContent=Ta),P.forEach(r),it=o(e),c(ae.$$.fragment,e),dt=o(e),j=l(e,"DIV",{class:!0});var xt=v(j);c(oe.$$.fragment,xt),At=o(xt),Se=l(xt,"P",{"data-svelte-h":!0}),d(Se)!=="svelte-1iebpai"&&(Se.textContent=Da),xt.forEach(r),mt=o(e),c(re.$$.fragment,e),ct=o(e),I=l(e,"DIV",{class:!0});var Ct=v(I);c(ne.$$.fragment,Ct),Ht=o(Ct),je=l(Ct,"P",{"data-svelte-h":!0}),d(je)!=="svelte-4uvw1w"&&(je.textContent=ya),Ct.forEach(r),pt=o(e),c(se.$$.fragment,e),gt=o(e),W=l(e,"DIV",{class:!0});var Tt=v(W);c(le.$$.fragment,Tt),Vt=o(Tt),Ie=l(Tt,"P",{"data-svelte-h":!0}),d(Ie)!=="svelte-4uvw1w"&&(Ie.textContent=Pa),Tt.forEach(r),ft=o(e),c(ie.$$.fragment,e),ut=o(e),k=l(e,"DIV",{class:!0});var w=v(k);c(de.$$.fragment,w),Et=o(w),We=l(w,"P",{"data-svelte-h":!0}),d(We)!=="svelte-10km8jk"&&(We.textContent=wa),Nt=o(w),c(V.$$.fragment,w),Qt=o(w),E=l(w,"DIV",{class:!0});var Dt=v(E);c(me.$$.fragment,Dt),Ot=o(Dt),Ae=l(Dt,"P",{"data-svelte-h":!0}),d(Ae)!=="svelte-iv4xqf"&&(Ae.textContent=Fa),Dt.forEach(r),Bt=o(w),N=l(w,"DIV",{class:!0});var yt=v(N);c(ce.$$.fragment,yt),Ut=o(yt),He=l(yt,"P",{"data-svelte-h":!0}),d(He)!=="svelte-iv4xqf"&&(He.textContent=La),yt.forEach(r),Kt=o(w),Q=l(w,"DIV",{class:!0});var Pt=v(Q);c(pe.$$.fragment,Pt),Rt=o(Pt),Ve=l(Pt,"P",{"data-svelte-h":!0}),d(Ve)!=="svelte-iv4xqf"&&(Ve.textContent=qa),Pt.forEach(r),w.forEach(r),ht=o(e),c(ge.$$.fragment,e),_t=o(e),b=l(e,"DIV",{class:!0});var D=v(b);c(fe.$$.fragment,D),Xt=o(D),Ee=l(D,"P",{"data-svelte-h":!0}),d(Ee)!=="svelte-sjqk55"&&(Ee.textContent=Ma),Gt=o(D),Ne=l(D,"UL",{"data-svelte-h":!0}),d(Ne)!=="svelte-d2ozxj"&&(Ne.innerHTML=za),Jt=o(D),c(O.$$.fragment,D),Yt=o(D),B=l(D,"DIV",{class:!0});var wt=v(B);c(ue.$$.fragment,wt),Zt=o(wt),Qe=l(wt,"P",{"data-svelte-h":!0}),d(Qe)!=="svelte-10msjh1"&&(Qe.textContent=Sa),wt.forEach(r),ea=o(D),U=l(D,"DIV",{class:!0});var Ft=v(U);c(he.$$.fragment,Ft),ta=o(Ft),Oe=l(Ft,"P",{"data-svelte-h":!0}),d(Oe)!=="svelte-10msjh1"&&(Oe.textContent=ja),Ft.forEach(r),aa=o(D),K=l(D,"DIV",{class:!0});var Lt=v(K);c(_e.$$.fragment,Lt),oa=o(Lt),Be=l(Lt,"P",{"data-svelte-h":!0}),d(Be)!=="svelte-10msjh1"&&(Be.textContent=Ia),Lt.forEach(r),D.forEach(r),bt=o(e),c(be.$$.fragment,e),vt=o(e),x=l(e,"DIV",{class:!0});var F=v(x);c(ve.$$.fragment,F),ra=o(F),Ue=l(F,"P",{"data-svelte-h":!0}),d(Ue)!=="svelte-12inif1"&&(Ue.textContent=Wa),na=o(F),Ke=l(F,"UL",{"data-svelte-h":!0}),d(Ke)!=="svelte-1t4qh7k"&&(Ke.innerHTML=Aa),sa=o(F),M=l(F,"DIV",{class:!0});var Je=v(M);c($e.$$.fragment,Je),la=o(Je),Re=l(Je,"P",{"data-svelte-h":!0}),d(Re)!=="svelte-1u70phx"&&(Re.textContent=Ha),ia=o(Je),ke=l(Je,"OL",{start:!0,"data-svelte-h":!0}),d(ke)!=="svelte-1r6jrbi"&&(ke.innerHTML=Va),Je.forEach(r),da=o(F),z=l(F,"DIV",{class:!0});var Ye=v(z);c(xe.$$.fragment,Ye),ma=o(Ye),Xe=l(Ye,"P",{"data-svelte-h":!0}),d(Xe)!=="svelte-1u70phx"&&(Xe.textContent=Ea),ca=o(Ye),Ce=l(Ye,"OL",{start:!0,"data-svelte-h":!0}),d(Ce)!=="svelte-1r6jrbi"&&(Ce.innerHTML=Na),Ye.forEach(r),pa=o(F),S=l(F,"DIV",{class:!0});var Ze=v(S);c(Te.$$.fragment,Ze),ga=o(Ze),Ge=l(Ze,"P",{"data-svelte-h":!0}),d(Ge)!=="svelte-1u70phx"&&(Ge.textContent=Qa),fa=o(Ze),De=l(Ze,"OL",{start:!0,"data-svelte-h":!0}),d(De)!=="svelte-1r6jrbi"&&(De.innerHTML=Oa),Ze.forEach(r),F.forEach(r),$t=o(e),et=l(e,"P",{}),v(et).forEach(r),this.h()},h(){_(h,"name","hf:doc:metadata"),_(h,"content",to),_(y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(b,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(ke,"start","0"),_(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ce,"start","0"),_(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(De,"start","0"),_(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,n){t(document.head,h),i(e,q,n),i(e,$,n),i(e,H,n),p(R,e,n),i(e,tt,n),i(e,X,n),i(e,at,n),i(e,G,n),i(e,ot,n),i(e,J,n),i(e,rt,n),p(Y,e,n),i(e,nt,n),i(e,y,n),p(Z,y,null),t(y,qt),t(y,Pe),t(y,Mt),t(y,we),t(y,zt),t(y,Fe),i(e,st,n),p(ee,e,n),i(e,lt,n),i(e,T,n),p(te,T,null),t(T,St),t(T,Le),t(T,jt),t(T,qe),t(T,It),t(T,Me),t(T,Wt),t(T,ze),i(e,it,n),p(ae,e,n),i(e,dt,n),i(e,j,n),p(oe,j,null),t(j,At),t(j,Se),i(e,mt,n),p(re,e,n),i(e,ct,n),i(e,I,n),p(ne,I,null),t(I,Ht),t(I,je),i(e,pt,n),p(se,e,n),i(e,gt,n),i(e,W,n),p(le,W,null),t(W,Vt),t(W,Ie),i(e,ft,n),p(ie,e,n),i(e,ut,n),i(e,k,n),p(de,k,null),t(k,Et),t(k,We),t(k,Nt),p(V,k,null),t(k,Qt),t(k,E),p(me,E,null),t(E,Ot),t(E,Ae),t(k,Bt),t(k,N),p(ce,N,null),t(N,Ut),t(N,He),t(k,Kt),t(k,Q),p(pe,Q,null),t(Q,Rt),t(Q,Ve),i(e,ht,n),p(ge,e,n),i(e,_t,n),i(e,b,n),p(fe,b,null),t(b,Xt),t(b,Ee),t(b,Gt),t(b,Ne),t(b,Jt),p(O,b,null),t(b,Yt),t(b,B),p(ue,B,null),t(B,Zt),t(B,Qe),t(b,ea),t(b,U),p(he,U,null),t(U,ta),t(U,Oe),t(b,aa),t(b,K),p(_e,K,null),t(K,oa),t(K,Be),i(e,bt,n),p(be,e,n),i(e,vt,n),i(e,x,n),p(ve,x,null),t(x,ra),t(x,Ue),t(x,na),t(x,Ke),t(x,sa),t(x,M),p($e,M,null),t(M,la),t(M,Re),t(M,ia),t(M,ke),t(x,da),t(x,z),p(xe,z,null),t(z,ma),t(z,Xe),t(z,ca),t(z,Ce),t(x,pa),t(x,S),p(Te,S,null),t(S,ga),t(S,Ge),t(S,fa),t(S,De),i(e,$t,n),i(e,et,n),kt=!0},p(e,[n]){const L={};n&2&&(L.$$scope={dirty:n,ctx:e}),V.$set(L);const P={};n&2&&(P.$$scope={dirty:n,ctx:e}),O.$set(P)},i(e){kt||(g(R.$$.fragment,e),g(Y.$$.fragment,e),g(Z.$$.fragment,e),g(ee.$$.fragment,e),g(te.$$.fragment,e),g(ae.$$.fragment,e),g(oe.$$.fragment,e),g(re.$$.fragment,e),g(ne.$$.fragment,e),g(se.$$.fragment,e),g(le.$$.fragment,e),g(ie.$$.fragment,e),g(de.$$.fragment,e),g(V.$$.fragment,e),g(me.$$.fragment,e),g(ce.$$.fragment,e),g(pe.$$.fragment,e),g(ge.$$.fragment,e),g(fe.$$.fragment,e),g(O.$$.fragment,e),g(ue.$$.fragment,e),g(he.$$.fragment,e),g(_e.$$.fragment,e),g(be.$$.fragment,e),g(ve.$$.fragment,e),g($e.$$.fragment,e),g(xe.$$.fragment,e),g(Te.$$.fragment,e),kt=!0)},o(e){f(R.$$.fragment,e),f(Y.$$.fragment,e),f(Z.$$.fragment,e),f(ee.$$.fragment,e),f(te.$$.fragment,e),f(ae.$$.fragment,e),f(oe.$$.fragment,e),f(re.$$.fragment,e),f(ne.$$.fragment,e),f(se.$$.fragment,e),f(le.$$.fragment,e),f(ie.$$.fragment,e),f(de.$$.fragment,e),f(V.$$.fragment,e),f(me.$$.fragment,e),f(ce.$$.fragment,e),f(pe.$$.fragment,e),f(ge.$$.fragment,e),f(fe.$$.fragment,e),f(O.$$.fragment,e),f(ue.$$.fragment,e),f(he.$$.fragment,e),f(_e.$$.fragment,e),f(be.$$.fragment,e),f(ve.$$.fragment,e),f($e.$$.fragment,e),f(xe.$$.fragment,e),f(Te.$$.fragment,e),kt=!1},d(e){e&&(r(q),r($),r(H),r(tt),r(X),r(at),r(G),r(ot),r(J),r(rt),r(nt),r(y),r(st),r(lt),r(T),r(it),r(dt),r(j),r(mt),r(ct),r(I),r(pt),r(gt),r(W),r(ft),r(ut),r(k),r(ht),r(_t),r(b),r(bt),r(vt),r(x),r($t),r(et)),r(h),u(R,e),u(Y,e),u(Z),u(ee,e),u(te),u(ae,e),u(oe),u(re,e),u(ne),u(se,e),u(le),u(ie,e),u(de),u(V),u(me),u(ce),u(pe),u(ge,e),u(fe),u(O),u(ue),u(he),u(_e),u(be,e),u(ve),u($e),u(xe),u(Te)}}}const to='{"title":"データ照合者","local":"データ照合者","sections":[{"title":"Default data collator","local":"transformers.default_data_collator","sections":[],"depth":2},{"title":"DefaultDataCollator","local":"transformers.DefaultDataCollator","sections":[],"depth":2},{"title":"DataCollatorWithPadding","local":"transformers.DataCollatorWithPadding","sections":[],"depth":2},{"title":"DataCollatorForTokenClassification","local":"transformers.DataCollatorForTokenClassification","sections":[],"depth":2},{"title":"DataCollatorForSeq2Seq","local":"transformers.DataCollatorForSeq2Seq","sections":[],"depth":2},{"title":"DataCollatorForLanguageModeling","local":"transformers.DataCollatorForLanguageModeling","sections":[],"depth":2},{"title":"DataCollatorForWholeWordMask","local":"transformers.DataCollatorForWholeWordMask","sections":[],"depth":2},{"title":"DataCollatorForPermutationLanguageModeling","local":"transformers.DataCollatorForPermutationLanguageModeling","sections":[],"depth":2}],"depth":1}';function ao(ye){return Ra(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class io extends Xa{constructor(h){super(),Ga(this,h,ao,eo,Ka,{})}}export{io as component};
