import{s as Rt,o as Vt,n as jt}from"../chunks/scheduler.9bc65507.js";import{S as Bt,i as Qt,g as s,s as r,r as u,A as Zt,h as i,f as o,c as a,j as y,u as p,x as d,k as v,y as n,a as l,v as f,d as _,t as h,w as g}from"../chunks/index.707bf1b6.js";import{T as Jt}from"../chunks/Tip.c2ecdbf4.js";import{D as z}from"../chunks/Docstring.17db21ae.js";import{C as At}from"../chunks/CodeBlock.54a9f38d.js";import{H as we}from"../chunks/Heading.342b1fa6.js";function Gt(ze){let k,N='As LayoutXLM’s architecture is equivalent to that of LayoutLMv2, one can refer to <a href="layoutlmv2">LayoutLMv2’s documentation page</a> for all tips, code examples and notebooks.';return{c(){k=s("p"),k.innerHTML=N},l(x){k=i(x,"P",{"data-svelte-h":!0}),d(k)!=="svelte-t8okno"&&(k.innerHTML=N)},m(x,se){l(x,k,se)},p:jt,d(x){x&&o(k)}}}function Yt(ze){let k,N,x,se,C,$e,D,Xe,W,Lt=`LayoutXLM was proposed in <a href="https://arxiv.org/abs/2104.08836" rel="nofollow">LayoutXLM: Multimodal Pre-training for Multilingual Visually-rich Document Understanding</a> by Yiheng Xu, Tengchao Lv, Lei Cui, Guoxin Wang, Yijuan Lu, Dinei Florencio, Cha
Zhang, Furu Wei. It’s a multilingual extension of the <a href="https://arxiv.org/abs/2012.14740" rel="nofollow">LayoutLMv2 model</a> trained
on 53 languages.`,qe,E,yt="The abstract from the paper is the following:",Fe,U,vt=`<em>Multimodal pre-training with text, layout, and image has achieved SOTA performance for visually-rich document
understanding tasks recently, which demonstrates the great potential for joint learning across different modalities. In
this paper, we present LayoutXLM, a multimodal pre-trained model for multilingual document understanding, which aims to
bridge the language barriers for visually-rich document understanding. To accurately evaluate LayoutXLM, we also
introduce a multilingual form understanding benchmark dataset named XFUN, which includes form understanding samples in
7 languages (Chinese, Japanese, Spanish, French, Italian, German, Portuguese), and key-value pairs are manually labeled
for each language. Experiment results show that the LayoutXLM model has significantly outperformed the existing SOTA
cross-lingual pre-trained models on the XFUN dataset.</em>`,Pe,H,xt='This model was contributed by <a href="https://huggingface.co/nielsr" rel="nofollow">nielsr</a>. The original code can be found <a href="https://github.com/microsoft/unilm" rel="nofollow">here</a>.',Ie,S,Ne,O,Tt="One can directly plug in the weights of LayoutXLM into a LayoutLMv2 model, like so:",Ce,A,De,R,wt=`Note that LayoutXLM has its own tokenizer, based on
<a href="/docs/transformers/main/en/model_doc/layoutxlm#transformers.LayoutXLMTokenizer">LayoutXLMTokenizer</a>/<a href="/docs/transformers/main/en/model_doc/layoutxlm#transformers.LayoutXLMTokenizerFast">LayoutXLMTokenizerFast</a>. You can initialize it as
follows:`,We,V,Ee,j,Mt=`Similar to LayoutLMv2, you can use <a href="/docs/transformers/main/en/model_doc/layoutxlm#transformers.LayoutXLMProcessor">LayoutXLMProcessor</a> (which internally applies
<a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor">LayoutLMv2ImageProcessor</a> and
<a href="/docs/transformers/main/en/model_doc/layoutxlm#transformers.LayoutXLMTokenizer">LayoutXLMTokenizer</a>/<a href="/docs/transformers/main/en/model_doc/layoutxlm#transformers.LayoutXLMTokenizerFast">LayoutXLMTokenizerFast</a> in sequence) to prepare all
data for the model.`,Ue,$,He,B,Se,c,Q,Ye,ie,zt=`Adapted from <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a> and <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. Based on
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a>.`,Ke,le,$t=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`,et,X,Z,tt,de,Xt=`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`,ot,T,J,nt,ce,qt=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`,rt,me,Ft="<li>single sequence: <code>&lt;s&gt; X &lt;/s&gt;</code></li> <li>pair of sequences: <code>&lt;s&gt; A &lt;/s&gt;&lt;/s&gt; B &lt;/s&gt;</code></li>",at,q,G,st,ue,Pt=`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer <code>prepare_for_model</code> method.`,it,F,Y,lt,pe,It=`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`,dt,fe,K,Oe,ee,Ae,L,te,ct,_e,Nt=`Construct a “fast” LayoutXLM tokenizer (backed by HuggingFace’s <em>tokenizers</em> library). Adapted from
<a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a> and <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. Based on
<a href="https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models" rel="nofollow">BPE</a>.`,mt,he,Ct=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a> which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`,ut,P,oe,pt,ge,Dt=`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences with word-level normalized bounding boxes and optional labels.`,Re,ne,Ve,b,re,ft,ke,Wt=`Constructs a LayoutXLM processor which combines a LayoutXLM image processor and a LayoutXLM tokenizer into a single
processor.`,_t,be,Et='<a href="/docs/transformers/main/en/model_doc/layoutxlm#transformers.LayoutXLMProcessor">LayoutXLMProcessor</a> offers all the functionalities you need to prepare data for the model.',ht,Le,Ut=`It first uses <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor">LayoutLMv2ImageProcessor</a> to resize document images to a fixed size, and optionally applies OCR to
get words and normalized bounding boxes. These are then provided to <a href="/docs/transformers/main/en/model_doc/layoutxlm#transformers.LayoutXLMTokenizer">LayoutXLMTokenizer</a> or
<a href="/docs/transformers/main/en/model_doc/layoutxlm#transformers.LayoutXLMTokenizerFast">LayoutXLMTokenizerFast</a>, which turns the words and bounding boxes into token-level <code>input_ids</code>,
<code>attention_mask</code>, <code>token_type_ids</code>, <code>bbox</code>. Optionally, one can provide integer <code>word_labels</code>, which are turned
into token-level <code>labels</code> for token classification tasks (such as FUNSD, CORD).`,gt,w,ae,kt,ye,Ht='This method first forwards the <code>images</code> argument to <code>~LayoutLMv2ImagePrpcessor.__call__</code>. In case\n<code>LayoutLMv2ImagePrpcessor</code> was initialized with <code>apply_ocr</code> set to <code>True</code>, it passes the obtained words and\nbounding boxes along with the additional arguments to <a href="/docs/transformers/main/en/model_doc/layoutxlm#transformers.LayoutXLMTokenizer.__call__"><strong>call</strong>()</a> and returns the output,\ntogether with resized <code>images</code>. In case <code>LayoutLMv2ImagePrpcessor</code> was initialized with <code>apply_ocr</code> set to\n<code>False</code>, it passes the words (<code>text</code>/<code>text_pair`) and `boxes` specified by the user along with the additional arguments to [__call__()](/docs/transformers/main/en/model_doc/layoutxlm#transformers.LayoutXLMTokenizer.__call__) and returns the output, together with resized `images</code>.',bt,ve,St="Please refer to the docstring of the above two methods for more information.",je,Me,Be;return C=new we({props:{title:"LayoutXLM",local:"layoutxlm",headingTag:"h1"}}),D=new we({props:{title:"Overview",local:"overview",headingTag:"h2"}}),S=new we({props:{title:"Usage tips and examples",local:"usage-tips-and-examples",headingTag:"h2"}}),A=new At({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMExheW91dExNdjJNb2RlbCUwQSUwQW1vZGVsJTIwJTNEJTIwTGF5b3V0TE12Mk1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJtaWNyb3NvZnQlMkZsYXlvdXR4bG0tYmFzZSUyMik=",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutLMv2Model

model = LayoutLMv2Model.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutxlm-base&quot;</span>)`,wrap:!1}}),V=new At({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMExheW91dFhMTVRva2VuaXplciUwQSUwQXRva2VuaXplciUyMCUzRCUyMExheW91dFhMTVRva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIybWljcm9zb2Z0JTJGbGF5b3V0eGxtLWJhc2UlMjIp",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LayoutXLMTokenizer

tokenizer = LayoutXLMTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/layoutxlm-base&quot;</span>)`,wrap:!1}}),$=new Jt({props:{$$slots:{default:[Gt]},$$scope:{ctx:ze}}}),B=new we({props:{title:"LayoutXLMTokenizer",local:"transformers.LayoutXLMTokenizer",headingTag:"h2"}}),Q=new z({props:{name:"class transformers.LayoutXLMTokenizer",anchor:"transformers.LayoutXLMTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [1000, 1000, 1000, 1000]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"sp_model_kwargs",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutXLMTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.LayoutXLMTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.LayoutXLMTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.LayoutXLMTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.LayoutXLMTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.LayoutXLMTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.LayoutXLMTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.LayoutXLMTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.LayoutXLMTokenizer.cls_token_box",description:`<strong>cls_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [CLS] token.`,name:"cls_token_box"},{anchor:"transformers.LayoutXLMTokenizer.sep_token_box",description:`<strong>sep_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[1000, 1000, 1000, 1000]</code>) &#x2014;
The bounding box to use for the special [SEP] token.`,name:"sep_token_box"},{anchor:"transformers.LayoutXLMTokenizer.pad_token_box",description:`<strong>pad_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [PAD] token.`,name:"pad_token_box"},{anchor:"transformers.LayoutXLMTokenizer.pad_token_label",description:`<strong>pad_token_label</strong> (<code>int</code>, <em>optional</em>, defaults to -100) &#x2014;
The label to use for padding tokens. Defaults to -100, which is the <code>ignore_index</code> of PyTorch&#x2019;s
CrossEntropyLoss.`,name:"pad_token_label"},{anchor:"transformers.LayoutXLMTokenizer.only_label_first_subword",description:`<strong>only_label_first_subword</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to only label the first subword, in case word labels are provided.`,name:"only_label_first_subword"},{anchor:"transformers.LayoutXLMTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.LayoutXLMTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutxlm/tokenization_layoutxlm.py#L149"}}),Z=new z({props:{name:"__call__",anchor:"transformers.LayoutXLMTokenizer.__call__",parameters:[{name:"text",val:": Union"},{name:"text_pair",val:": Union = None"},{name:"boxes",val:": Union = None"},{name:"word_labels",val:": Union = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": Union = False"},{name:"truncation",val:": Union = None"},{name:"max_length",val:": Optional = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": Optional = None"},{name:"return_tensors",val:": Union = None"},{name:"return_token_type_ids",val:": Optional = None"},{name:"return_attention_mask",val:": Optional = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutXLMTokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string, a list of strings
(words of a single example or questions of a batch of examples) or a list of list of strings (batch of
words).`,name:"text"},{anchor:"transformers.LayoutXLMTokenizer.__call__.text_pair",description:`<strong>text_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence should be a list of strings
(pretokenized string).`,name:"text_pair"},{anchor:"transformers.LayoutXLMTokenizer.__call__.boxes",description:`<strong>boxes</strong> (<code>List[List[int]]</code>, <code>List[List[List[int]]]</code>) &#x2014;
Word-level bounding boxes. Each bounding box should be normalized to be on a 0-1000 scale.`,name:"boxes"},{anchor:"transformers.LayoutXLMTokenizer.__call__.word_labels",description:`<strong>word_labels</strong> (<code>List[int]</code>, <code>List[List[int]]</code>, <em>optional</em>) &#x2014;
Word-level integer labels (for token classification tasks such as FUNSD, CORD).`,name:"word_labels"},{anchor:"transformers.LayoutXLMTokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutXLMTokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutXLMTokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or
to the maximum acceptable input length for the model if that argument is not provided. This will
truncate token by token, removing a token from the longest sequence in the pair if a pair of
sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_second&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.LayoutXLMTokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutXLMTokenizer.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutXLMTokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability <code>&gt;= 7.5</code> (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutXLMTokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutXLMTokenizer.__call__.return_token_type_ids",description:`<strong>return_token_type_ids</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return token type IDs. If left to the default, will return the token type IDs according to
the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"return_token_type_ids"},{anchor:"transformers.LayoutXLMTokenizer.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"return_attention_mask"},{anchor:"transformers.LayoutXLMTokenizer.__call__.return_overflowing_tokens",description:`<strong>return_overflowing_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return overflowing token sequences. If a pair of sequences of input ids (or a batch
of pairs) is provided with <code>truncation_strategy = longest_first</code> or <code>True</code>, an error is raised instead
of returning overflowing tokens.`,name:"return_overflowing_tokens"},{anchor:"transformers.LayoutXLMTokenizer.__call__.return_special_tokens_mask",description:`<strong>return_special_tokens_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return special tokens mask information.`,name:"return_special_tokens_mask"},{anchor:"transformers.LayoutXLMTokenizer.__call__.return_offsets_mapping",description:`<strong>return_offsets_mapping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return <code>(char_start, char_end)</code> for each token.</p>
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.LayoutXLMTokenizer.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.LayoutXLMTokenizer.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutxlm/tokenization_layoutxlm.py#L442",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a> with the following fields:</p>
<ul>
<li>
<p><strong>input_ids</strong> — List of token ids to be fed to a model.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
</li>
<li>
<p><strong>bbox</strong> — List of bounding boxes to be fed to a model.</p>
</li>
<li>
<p><strong>token_type_ids</strong> — List of token type ids to be fed to a model (when <code>return_token_type_ids=True</code> or
if <em>“token_type_ids”</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a></p>
</li>
<li>
<p><strong>attention_mask</strong> — List of indices specifying which tokens should be attended to by the model (when
<code>return_attention_mask=True</code> or if <em>“attention_mask”</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
</li>
<li>
<p><strong>labels</strong> — List of labels to be fed to a model. (when <code>word_labels</code> is specified).</p>
</li>
<li>
<p><strong>overflowing_tokens</strong> — List of overflowing tokens sequences (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>num_truncated_tokens</strong> — Number of tokens truncated (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>special_tokens_mask</strong> — List of 0s and 1s, with 1 specifying added special tokens and 0 specifying
regular sequence tokens (when <code>add_special_tokens=True</code> and <code>return_special_tokens_mask=True</code>).</p>
</li>
<li>
<p><strong>length</strong> — The length of the inputs (when <code>return_length=True</code>).</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),J=new z({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.LayoutXLMTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.LayoutXLMTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.LayoutXLMTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutxlm/tokenization_layoutxlm.py#L314",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),G=new z({props:{name:"get_special_tokens_mask",anchor:"transformers.LayoutXLMTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.LayoutXLMTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.LayoutXLMTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.LayoutXLMTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutxlm/tokenization_layoutxlm.py#L340",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Y=new z({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.LayoutXLMTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.LayoutXLMTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.LayoutXLMTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutxlm/tokenization_layoutxlm.py#L368",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of zeros.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),K=new z({props:{name:"save_vocabulary",anchor:"transformers.LayoutXLMTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutxlm/tokenization_layoutxlm.py#L425"}}),ee=new we({props:{title:"LayoutXLMTokenizerFast",local:"transformers.LayoutXLMTokenizerFast",headingTag:"h2"}}),te=new z({props:{name:"class transformers.LayoutXLMTokenizerFast",anchor:"transformers.LayoutXLMTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"cls_token_box",val:" = [0, 0, 0, 0]"},{name:"sep_token_box",val:" = [1000, 1000, 1000, 1000]"},{name:"pad_token_box",val:" = [0, 0, 0, 0]"},{name:"pad_token_label",val:" = -100"},{name:"only_label_first_subword",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutXLMTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.LayoutXLMTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.LayoutXLMTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.LayoutXLMTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.LayoutXLMTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.LayoutXLMTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.LayoutXLMTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.LayoutXLMTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.LayoutXLMTokenizerFast.cls_token_box",description:`<strong>cls_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [CLS] token.`,name:"cls_token_box"},{anchor:"transformers.LayoutXLMTokenizerFast.sep_token_box",description:`<strong>sep_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[1000, 1000, 1000, 1000]</code>) &#x2014;
The bounding box to use for the special [SEP] token.`,name:"sep_token_box"},{anchor:"transformers.LayoutXLMTokenizerFast.pad_token_box",description:`<strong>pad_token_box</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[0, 0, 0, 0]</code>) &#x2014;
The bounding box to use for the special [PAD] token.`,name:"pad_token_box"},{anchor:"transformers.LayoutXLMTokenizerFast.pad_token_label",description:`<strong>pad_token_label</strong> (<code>int</code>, <em>optional</em>, defaults to -100) &#x2014;
The label to use for padding tokens. Defaults to -100, which is the <code>ignore_index</code> of PyTorch&#x2019;s
CrossEntropyLoss.`,name:"pad_token_label"},{anchor:"transformers.LayoutXLMTokenizerFast.only_label_first_subword",description:`<strong>only_label_first_subword</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to only label the first subword, in case word labels are provided.`,name:"only_label_first_subword"},{anchor:"transformers.LayoutXLMTokenizerFast.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;s&gt;NOTUSED&quot;, &quot;&lt;/s&gt;NOTUSED&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutxlm/tokenization_layoutxlm_fast.py#L152"}}),oe=new z({props:{name:"__call__",anchor:"transformers.LayoutXLMTokenizerFast.__call__",parameters:[{name:"text",val:": Union"},{name:"text_pair",val:": Union = None"},{name:"boxes",val:": Union = None"},{name:"word_labels",val:": Union = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": Union = False"},{name:"truncation",val:": Union = None"},{name:"max_length",val:": Optional = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": Optional = None"},{name:"return_tensors",val:": Union = None"},{name:"return_token_type_ids",val:": Optional = None"},{name:"return_attention_mask",val:": Optional = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutXLMTokenizerFast.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string, a list of strings
(words of a single example or questions of a batch of examples) or a list of list of strings (batch of
words).`,name:"text"},{anchor:"transformers.LayoutXLMTokenizerFast.__call__.text_pair",description:`<strong>text_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence should be a list of strings
(pretokenized string).`,name:"text_pair"},{anchor:"transformers.LayoutXLMTokenizerFast.__call__.boxes",description:`<strong>boxes</strong> (<code>List[List[int]]</code>, <code>List[List[List[int]]]</code>) &#x2014;
Word-level bounding boxes. Each bounding box should be normalized to be on a 0-1000 scale.`,name:"boxes"},{anchor:"transformers.LayoutXLMTokenizerFast.__call__.word_labels",description:`<strong>word_labels</strong> (<code>List[int]</code>, <code>List[List[int]]</code>, <em>optional</em>) &#x2014;
Word-level integer labels (for token classification tasks such as FUNSD, CORD).`,name:"word_labels"},{anchor:"transformers.LayoutXLMTokenizerFast.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.LayoutXLMTokenizerFast.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.LayoutXLMTokenizerFast.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or
to the maximum acceptable input length for the model if that argument is not provided. This will
truncate token by token, removing a token from the longest sequence in the pair if a pair of
sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_first&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the first sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>&apos;only_second&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided. This will only
truncate the second sequence of a pair if a pair of sequences (or a batch of pairs) is provided.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.LayoutXLMTokenizerFast.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.LayoutXLMTokenizerFast.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.LayoutXLMTokenizerFast.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability <code>&gt;= 7.5</code> (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.LayoutXLMTokenizerFast.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.LayoutXLMTokenizerFast.__call__.return_token_type_ids",description:`<strong>return_token_type_ids</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return token type IDs. If left to the default, will return the token type IDs according to
the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"return_token_type_ids"},{anchor:"transformers.LayoutXLMTokenizerFast.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"return_attention_mask"},{anchor:"transformers.LayoutXLMTokenizerFast.__call__.return_overflowing_tokens",description:`<strong>return_overflowing_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return overflowing token sequences. If a pair of sequences of input ids (or a batch
of pairs) is provided with <code>truncation_strategy = longest_first</code> or <code>True</code>, an error is raised instead
of returning overflowing tokens.`,name:"return_overflowing_tokens"},{anchor:"transformers.LayoutXLMTokenizerFast.__call__.return_special_tokens_mask",description:`<strong>return_special_tokens_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return special tokens mask information.`,name:"return_special_tokens_mask"},{anchor:"transformers.LayoutXLMTokenizerFast.__call__.return_offsets_mapping",description:`<strong>return_offsets_mapping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return <code>(char_start, char_end)</code> for each token.</p>
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.LayoutXLMTokenizerFast.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.LayoutXLMTokenizerFast.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutxlm/tokenization_layoutxlm_fast.py#L272",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a> with the following fields:</p>
<ul>
<li>
<p><strong>input_ids</strong> — List of token ids to be fed to a model.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
</li>
<li>
<p><strong>bbox</strong> — List of bounding boxes to be fed to a model.</p>
</li>
<li>
<p><strong>token_type_ids</strong> — List of token type ids to be fed to a model (when <code>return_token_type_ids=True</code> or
if <em>“token_type_ids”</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a></p>
</li>
<li>
<p><strong>attention_mask</strong> — List of indices specifying which tokens should be attended to by the model (when
<code>return_attention_mask=True</code> or if <em>“attention_mask”</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
</li>
<li>
<p><strong>labels</strong> — List of labels to be fed to a model. (when <code>word_labels</code> is specified).</p>
</li>
<li>
<p><strong>overflowing_tokens</strong> — List of overflowing tokens sequences (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>num_truncated_tokens</strong> — Number of tokens truncated (when a <code>max_length</code> is specified and
<code>return_overflowing_tokens=True</code>).</p>
</li>
<li>
<p><strong>special_tokens_mask</strong> — List of 0s and 1s, with 1 specifying added special tokens and 0 specifying
regular sequence tokens (when <code>add_special_tokens=True</code> and <code>return_special_tokens_mask=True</code>).</p>
</li>
<li>
<p><strong>length</strong> — The length of the inputs (when <code>return_length=True</code>).</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),ne=new we({props:{title:"LayoutXLMProcessor",local:"transformers.LayoutXLMProcessor",headingTag:"h2"}}),re=new z({props:{name:"class transformers.LayoutXLMProcessor",anchor:"transformers.LayoutXLMProcessor",parameters:[{name:"image_processor",val:" = None"},{name:"tokenizer",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LayoutXLMProcessor.image_processor",description:`<strong>image_processor</strong> (<code>LayoutLMv2ImageProcessor</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/layoutlmv2#transformers.LayoutLMv2ImageProcessor">LayoutLMv2ImageProcessor</a>. The image processor is a required input.`,name:"image_processor"},{anchor:"transformers.LayoutXLMProcessor.tokenizer",description:`<strong>tokenizer</strong> (<code>LayoutXLMTokenizer</code> or <code>LayoutXLMTokenizerFast</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/model_doc/layoutxlm#transformers.LayoutXLMTokenizer">LayoutXLMTokenizer</a> or <a href="/docs/transformers/main/en/model_doc/layoutxlm#transformers.LayoutXLMTokenizerFast">LayoutXLMTokenizerFast</a>. The tokenizer is a required input.`,name:"tokenizer"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutxlm/processing_layoutxlm.py#L26"}}),ae=new z({props:{name:"__call__",anchor:"transformers.LayoutXLMProcessor.__call__",parameters:[{name:"images",val:""},{name:"text",val:": Union = None"},{name:"text_pair",val:": Union = None"},{name:"boxes",val:": Union = None"},{name:"word_labels",val:": Union = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": Union = False"},{name:"truncation",val:": Union = None"},{name:"max_length",val:": Optional = None"},{name:"stride",val:": int = 0"},{name:"pad_to_multiple_of",val:": Optional = None"},{name:"return_token_type_ids",val:": Optional = None"},{name:"return_attention_mask",val:": Optional = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"return_tensors",val:": Union = None"},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/layoutxlm/processing_layoutxlm.py#L67"}}),{c(){k=s("meta"),N=r(),x=s("p"),se=r(),u(C.$$.fragment),$e=r(),u(D.$$.fragment),Xe=r(),W=s("p"),W.innerHTML=Lt,qe=r(),E=s("p"),E.textContent=yt,Fe=r(),U=s("p"),U.innerHTML=vt,Pe=r(),H=s("p"),H.innerHTML=xt,Ie=r(),u(S.$$.fragment),Ne=r(),O=s("p"),O.textContent=Tt,Ce=r(),u(A.$$.fragment),De=r(),R=s("p"),R.innerHTML=wt,We=r(),u(V.$$.fragment),Ee=r(),j=s("p"),j.innerHTML=Mt,Ue=r(),u($.$$.fragment),He=r(),u(B.$$.fragment),Se=r(),c=s("div"),u(Q.$$.fragment),Ye=r(),ie=s("p"),ie.innerHTML=zt,Ke=r(),le=s("p"),le.innerHTML=$t,et=r(),X=s("div"),u(Z.$$.fragment),tt=r(),de=s("p"),de.textContent=Xt,ot=r(),T=s("div"),u(J.$$.fragment),nt=r(),ce=s("p"),ce.textContent=qt,rt=r(),me=s("ul"),me.innerHTML=Ft,at=r(),q=s("div"),u(G.$$.fragment),st=r(),ue=s("p"),ue.innerHTML=Pt,it=r(),F=s("div"),u(Y.$$.fragment),lt=r(),pe=s("p"),pe.textContent=It,dt=r(),fe=s("div"),u(K.$$.fragment),Oe=r(),u(ee.$$.fragment),Ae=r(),L=s("div"),u(te.$$.fragment),ct=r(),_e=s("p"),_e.innerHTML=Nt,mt=r(),he=s("p"),he.innerHTML=Ct,ut=r(),P=s("div"),u(oe.$$.fragment),pt=r(),ge=s("p"),ge.textContent=Dt,Re=r(),u(ne.$$.fragment),Ve=r(),b=s("div"),u(re.$$.fragment),ft=r(),ke=s("p"),ke.textContent=Wt,_t=r(),be=s("p"),be.innerHTML=Et,ht=r(),Le=s("p"),Le.innerHTML=Ut,gt=r(),w=s("div"),u(ae.$$.fragment),kt=r(),ye=s("p"),ye.innerHTML=Ht,bt=r(),ve=s("p"),ve.textContent=St,je=r(),Me=s("p"),this.h()},l(e){const t=Zt("svelte-u9bgzb",document.head);k=i(t,"META",{name:!0,content:!0}),t.forEach(o),N=a(e),x=i(e,"P",{}),y(x).forEach(o),se=a(e),p(C.$$.fragment,e),$e=a(e),p(D.$$.fragment,e),Xe=a(e),W=i(e,"P",{"data-svelte-h":!0}),d(W)!=="svelte-k0erxc"&&(W.innerHTML=Lt),qe=a(e),E=i(e,"P",{"data-svelte-h":!0}),d(E)!=="svelte-vfdo9a"&&(E.textContent=yt),Fe=a(e),U=i(e,"P",{"data-svelte-h":!0}),d(U)!=="svelte-zdtbbl"&&(U.innerHTML=vt),Pe=a(e),H=i(e,"P",{"data-svelte-h":!0}),d(H)!=="svelte-d5pc84"&&(H.innerHTML=xt),Ie=a(e),p(S.$$.fragment,e),Ne=a(e),O=i(e,"P",{"data-svelte-h":!0}),d(O)!=="svelte-u36c33"&&(O.textContent=Tt),Ce=a(e),p(A.$$.fragment,e),De=a(e),R=i(e,"P",{"data-svelte-h":!0}),d(R)!=="svelte-whtfvq"&&(R.innerHTML=wt),We=a(e),p(V.$$.fragment,e),Ee=a(e),j=i(e,"P",{"data-svelte-h":!0}),d(j)!=="svelte-1pdgjmd"&&(j.innerHTML=Mt),Ue=a(e),p($.$$.fragment,e),He=a(e),p(B.$$.fragment,e),Se=a(e),c=i(e,"DIV",{class:!0});var m=y(c);p(Q.$$.fragment,m),Ye=a(m),ie=i(m,"P",{"data-svelte-h":!0}),d(ie)!=="svelte-1serjol"&&(ie.innerHTML=zt),Ke=a(m),le=i(m,"P",{"data-svelte-h":!0}),d(le)!=="svelte-1c3t5ty"&&(le.innerHTML=$t),et=a(m),X=i(m,"DIV",{class:!0});var Qe=y(X);p(Z.$$.fragment,Qe),tt=a(Qe),de=i(Qe,"P",{"data-svelte-h":!0}),d(de)!=="svelte-1w6bb17"&&(de.textContent=Xt),Qe.forEach(o),ot=a(m),T=i(m,"DIV",{class:!0});var xe=y(T);p(J.$$.fragment,xe),nt=a(xe),ce=i(xe,"P",{"data-svelte-h":!0}),d(ce)!=="svelte-1ooxl9e"&&(ce.textContent=qt),rt=a(xe),me=i(xe,"UL",{"data-svelte-h":!0}),d(me)!=="svelte-rq8uot"&&(me.innerHTML=Ft),xe.forEach(o),at=a(m),q=i(m,"DIV",{class:!0});var Ze=y(q);p(G.$$.fragment,Ze),st=a(Ze),ue=i(Ze,"P",{"data-svelte-h":!0}),d(ue)!=="svelte-1f4f5kp"&&(ue.innerHTML=Pt),Ze.forEach(o),it=a(m),F=i(m,"DIV",{class:!0});var Je=y(F);p(Y.$$.fragment,Je),lt=a(Je),pe=i(Je,"P",{"data-svelte-h":!0}),d(pe)!=="svelte-bub0ru"&&(pe.textContent=It),Je.forEach(o),dt=a(m),fe=i(m,"DIV",{class:!0});var Ot=y(fe);p(K.$$.fragment,Ot),Ot.forEach(o),m.forEach(o),Oe=a(e),p(ee.$$.fragment,e),Ae=a(e),L=i(e,"DIV",{class:!0});var I=y(L);p(te.$$.fragment,I),ct=a(I),_e=i(I,"P",{"data-svelte-h":!0}),d(_e)!=="svelte-bn03fo"&&(_e.innerHTML=Nt),mt=a(I),he=i(I,"P",{"data-svelte-h":!0}),d(he)!=="svelte-fh0aq"&&(he.innerHTML=Ct),ut=a(I),P=i(I,"DIV",{class:!0});var Ge=y(P);p(oe.$$.fragment,Ge),pt=a(Ge),ge=i(Ge,"P",{"data-svelte-h":!0}),d(ge)!=="svelte-1w6bb17"&&(ge.textContent=Dt),Ge.forEach(o),I.forEach(o),Re=a(e),p(ne.$$.fragment,e),Ve=a(e),b=i(e,"DIV",{class:!0});var M=y(b);p(re.$$.fragment,M),ft=a(M),ke=i(M,"P",{"data-svelte-h":!0}),d(ke)!=="svelte-1fy1bx7"&&(ke.textContent=Wt),_t=a(M),be=i(M,"P",{"data-svelte-h":!0}),d(be)!=="svelte-b96qny"&&(be.innerHTML=Et),ht=a(M),Le=i(M,"P",{"data-svelte-h":!0}),d(Le)!=="svelte-jj30st"&&(Le.innerHTML=Ut),gt=a(M),w=i(M,"DIV",{class:!0});var Te=y(w);p(ae.$$.fragment,Te),kt=a(Te),ye=i(Te,"P",{"data-svelte-h":!0}),d(ye)!=="svelte-1ijba90"&&(ye.innerHTML=Ht),bt=a(Te),ve=i(Te,"P",{"data-svelte-h":!0}),d(ve)!=="svelte-ws0hzs"&&(ve.textContent=St),Te.forEach(o),M.forEach(o),je=a(e),Me=i(e,"P",{}),y(Me).forEach(o),this.h()},h(){v(k,"name","hf:doc:metadata"),v(k,"content",Kt),v(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(c,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(w,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(b,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,t){n(document.head,k),l(e,N,t),l(e,x,t),l(e,se,t),f(C,e,t),l(e,$e,t),f(D,e,t),l(e,Xe,t),l(e,W,t),l(e,qe,t),l(e,E,t),l(e,Fe,t),l(e,U,t),l(e,Pe,t),l(e,H,t),l(e,Ie,t),f(S,e,t),l(e,Ne,t),l(e,O,t),l(e,Ce,t),f(A,e,t),l(e,De,t),l(e,R,t),l(e,We,t),f(V,e,t),l(e,Ee,t),l(e,j,t),l(e,Ue,t),f($,e,t),l(e,He,t),f(B,e,t),l(e,Se,t),l(e,c,t),f(Q,c,null),n(c,Ye),n(c,ie),n(c,Ke),n(c,le),n(c,et),n(c,X),f(Z,X,null),n(X,tt),n(X,de),n(c,ot),n(c,T),f(J,T,null),n(T,nt),n(T,ce),n(T,rt),n(T,me),n(c,at),n(c,q),f(G,q,null),n(q,st),n(q,ue),n(c,it),n(c,F),f(Y,F,null),n(F,lt),n(F,pe),n(c,dt),n(c,fe),f(K,fe,null),l(e,Oe,t),f(ee,e,t),l(e,Ae,t),l(e,L,t),f(te,L,null),n(L,ct),n(L,_e),n(L,mt),n(L,he),n(L,ut),n(L,P),f(oe,P,null),n(P,pt),n(P,ge),l(e,Re,t),f(ne,e,t),l(e,Ve,t),l(e,b,t),f(re,b,null),n(b,ft),n(b,ke),n(b,_t),n(b,be),n(b,ht),n(b,Le),n(b,gt),n(b,w),f(ae,w,null),n(w,kt),n(w,ye),n(w,bt),n(w,ve),l(e,je,t),l(e,Me,t),Be=!0},p(e,[t]){const m={};t&2&&(m.$$scope={dirty:t,ctx:e}),$.$set(m)},i(e){Be||(_(C.$$.fragment,e),_(D.$$.fragment,e),_(S.$$.fragment,e),_(A.$$.fragment,e),_(V.$$.fragment,e),_($.$$.fragment,e),_(B.$$.fragment,e),_(Q.$$.fragment,e),_(Z.$$.fragment,e),_(J.$$.fragment,e),_(G.$$.fragment,e),_(Y.$$.fragment,e),_(K.$$.fragment,e),_(ee.$$.fragment,e),_(te.$$.fragment,e),_(oe.$$.fragment,e),_(ne.$$.fragment,e),_(re.$$.fragment,e),_(ae.$$.fragment,e),Be=!0)},o(e){h(C.$$.fragment,e),h(D.$$.fragment,e),h(S.$$.fragment,e),h(A.$$.fragment,e),h(V.$$.fragment,e),h($.$$.fragment,e),h(B.$$.fragment,e),h(Q.$$.fragment,e),h(Z.$$.fragment,e),h(J.$$.fragment,e),h(G.$$.fragment,e),h(Y.$$.fragment,e),h(K.$$.fragment,e),h(ee.$$.fragment,e),h(te.$$.fragment,e),h(oe.$$.fragment,e),h(ne.$$.fragment,e),h(re.$$.fragment,e),h(ae.$$.fragment,e),Be=!1},d(e){e&&(o(N),o(x),o(se),o($e),o(Xe),o(W),o(qe),o(E),o(Fe),o(U),o(Pe),o(H),o(Ie),o(Ne),o(O),o(Ce),o(De),o(R),o(We),o(Ee),o(j),o(Ue),o(He),o(Se),o(c),o(Oe),o(Ae),o(L),o(Re),o(Ve),o(b),o(je),o(Me)),o(k),g(C,e),g(D,e),g(S,e),g(A,e),g(V,e),g($,e),g(B,e),g(Q),g(Z),g(J),g(G),g(Y),g(K),g(ee,e),g(te),g(oe),g(ne,e),g(re),g(ae)}}}const Kt='{"title":"LayoutXLM","local":"layoutxlm","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips and examples","local":"usage-tips-and-examples","sections":[],"depth":2},{"title":"LayoutXLMTokenizer","local":"transformers.LayoutXLMTokenizer","sections":[],"depth":2},{"title":"LayoutXLMTokenizerFast","local":"transformers.LayoutXLMTokenizerFast","sections":[],"depth":2},{"title":"LayoutXLMProcessor","local":"transformers.LayoutXLMProcessor","sections":[],"depth":2}],"depth":1}';function eo(ze){return Vt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class io extends Bt{constructor(k){super(),Qt(this,k,eo,Yt,Rt,{})}}export{io as component};
