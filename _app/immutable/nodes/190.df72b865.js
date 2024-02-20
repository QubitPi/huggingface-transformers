import{s as Pe,o as Ie,n as Ee}from"../chunks/scheduler.9bc65507.js";import{S as Ue,i as We,g as r,s,r as h,A as Ne,h as l,f as n,c as i,j as J,u as f,x as u,k as B,y as p,a as o,v as _,d as g,t as k,w as y}from"../chunks/index.707bf1b6.js";import{T as Ce}from"../chunks/Tip.c2ecdbf4.js";import{D as ge}from"../chunks/Docstring.17db21ae.js";import{C as $e}from"../chunks/CodeBlock.54a9f38d.js";import{H as me}from"../chunks/Heading.342b1fa6.js";function Se(Z){let a,T=`As mLUKE’s architecture is equivalent to that of LUKE, one can refer to <a href="luke">LUKE’s documentation page</a> for all
tips, code examples and notebooks.`;return{c(){a=r("p"),a.innerHTML=T},l(m){a=l(m,"P",{"data-svelte-h":!0}),u(a)!=="svelte-1h0p68f"&&(a.innerHTML=T)},m(m,H){o(m,a,H)},p:Ee,d(m){m&&n(a)}}}function Ae(Z){let a,T,m,H,w,j,x,O,q,ke=`The mLUKE model was proposed in <a href="https://arxiv.org/abs/2110.08151" rel="nofollow">mLUKE: The Power of Entity Representations in Multilingual Pretrained Language Models</a> by Ryokan Ri, Ikuya Yamada, and Yoshimasa Tsuruoka. It’s a multilingual extension
of the <a href="https://arxiv.org/abs/2010.01057" rel="nofollow">LUKE model</a> trained on the basis of XLM-RoBERTa.`,G,L,ye=`It is based on XLM-RoBERTa and adds entity embeddings, which helps improve performance on various downstream tasks
involving reasoning about entities such as named entity recognition, extractive question answering, relation
classification, cloze-style knowledge completion.`,X,z,be="The abstract from the paper is the following:",Y,M,ve=`<em>Recent studies have shown that multilingual pretrained language models can be effectively improved with cross-lingual
alignment information from Wikipedia entities. However, existing methods only exploit entity information in pretraining
and do not explicitly use entities in downstream tasks. In this study, we explore the effectiveness of leveraging
entity representations for downstream cross-lingual tasks. We train a multilingual language model with 24 languages
with entity representations and show the model consistently outperforms word-based pretrained models in various
cross-lingual transfer tasks. We also analyze the model and the key insight is that incorporating entity
representations into the input allows us to extract more language-agnostic features. We also evaluate the model with a
multilingual cloze prompt task with the mLAMA dataset. We show that entity-based prompt elicits correct factual
knowledge more likely than using only word representations.</em>`,Q,$,Te='This model was contributed by <a href="https://huggingface.co/ryo0634" rel="nofollow">ryo0634</a>. The original code can be found <a href="https://github.com/studio-ousia/luke" rel="nofollow">here</a>.',ee,P,te,I,we="One can directly plug in the weights of mLUKE into a LUKE model, like so:",ne,E,oe,U,xe='Note that mLUKE has its own tokenizer, <a href="/docs/transformers/main/en/model_doc/mluke#transformers.MLukeTokenizer">MLukeTokenizer</a>. You can initialize it as follows:',se,W,ie,b,ae,N,re,c,C,pe,D,qe=`Adapted from <a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizer">XLMRobertaTokenizer</a> and <a href="/docs/transformers/main/en/model_doc/luke#transformers.LukeTokenizer">LukeTokenizer</a>. Based on
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a>.`,ue,R,Le=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`,he,v,S,fe,V,ze=`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences, depending on the task you want to prepare them for.`,_e,K,A,le,F,ce;return w=new me({props:{title:"mLUKE",local:"mluke",headingTag:"h1"}}),x=new me({props:{title:"Overview",local:"overview",headingTag:"h2"}}),P=new me({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),E=new $e({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEx1a2VNb2RlbCUwQSUwQW1vZGVsJTIwJTNEJTIwTHVrZU1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJzdHVkaW8tb3VzaWElMkZtbHVrZS1iYXNlJTIyKQ==",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LukeModel

model = LukeModel.from_pretrained(<span class="hljs-string">&quot;studio-ousia/mluke-base&quot;</span>)`,wrap:!1}}),W=new $e({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyME1MdWtlVG9rZW5pemVyJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwTUx1a2VUb2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMnN0dWRpby1vdXNpYSUyRm1sdWtlLWJhc2UlMjIp",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MLukeTokenizer

tokenizer = MLukeTokenizer.from_pretrained(<span class="hljs-string">&quot;studio-ousia/mluke-base&quot;</span>)`,wrap:!1}}),b=new Ce({props:{$$slots:{default:[Se]},$$scope:{ctx:Z}}}),N=new me({props:{title:"MLukeTokenizer",local:"transformers.MLukeTokenizer",headingTag:"h2"}}),C=new ge({props:{name:"class transformers.MLukeTokenizer",anchor:"transformers.MLukeTokenizer",parameters:[{name:"vocab_file",val:""},{name:"entity_vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"task",val:" = None"},{name:"max_entity_length",val:" = 32"},{name:"max_mention_length",val:" = 30"},{name:"entity_token_1",val:" = '<ent>'"},{name:"entity_token_2",val:" = '<ent2>'"},{name:"entity_unk_token",val:" = '[UNK]'"},{name:"entity_pad_token",val:" = '[PAD]'"},{name:"entity_mask_token",val:" = '[MASK]'"},{name:"entity_mask2_token",val:" = '[MASK2]'"},{name:"sp_model_kwargs",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MLukeTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.MLukeTokenizer.entity_vocab_file",description:`<strong>entity_vocab_file</strong> (<code>str</code>) &#x2014;
Path to the entity vocabulary file.`,name:"entity_vocab_file"},{anchor:"transformers.MLukeTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.MLukeTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.MLukeTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.MLukeTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.MLukeTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MLukeTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MLukeTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.MLukeTokenizer.task",description:`<strong>task</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Task for which you want to prepare sequences. One of <code>&quot;entity_classification&quot;</code>,
<code>&quot;entity_pair_classification&quot;</code>, or <code>&quot;entity_span_classification&quot;</code>. If you specify this argument, the entity
sequence is automatically created based on the given entity span(s).`,name:"task"},{anchor:"transformers.MLukeTokenizer.max_entity_length",description:`<strong>max_entity_length</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The maximum length of <code>entity_ids</code>.`,name:"max_entity_length"},{anchor:"transformers.MLukeTokenizer.max_mention_length",description:`<strong>max_mention_length</strong> (<code>int</code>, <em>optional</em>, defaults to 30) &#x2014;
The maximum number of tokens inside an entity span.`,name:"max_mention_length"},{anchor:"transformers.MLukeTokenizer.entity_token_1",description:`<strong>entity_token_1</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;ent&gt;</code>) &#x2014;
The special token used to represent an entity span in a word token sequence. This token is only used when
<code>task</code> is set to <code>&quot;entity_classification&quot;</code> or <code>&quot;entity_pair_classification&quot;</code>.`,name:"entity_token_1"},{anchor:"transformers.MLukeTokenizer.entity_token_2",description:`<strong>entity_token_2</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&lt;ent2&gt;</code>) &#x2014;
The special token used to represent an entity span in a word token sequence. This token is only used when
<code>task</code> is set to <code>&quot;entity_pair_classification&quot;</code>.`,name:"entity_token_2"},{anchor:"transformers.MLukeTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;s&gt;NOTUSED&quot;, &quot;&lt;/s&gt;NOTUSED&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.MLukeTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.MLukeTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mluke/tokenization_mluke.py#L147"}}),S=new ge({props:{name:"__call__",anchor:"transformers.MLukeTokenizer.__call__",parameters:[{name:"text",val:": Union"},{name:"text_pair",val:": Union = None"},{name:"entity_spans",val:": Union = None"},{name:"entity_spans_pair",val:": Union = None"},{name:"entities",val:": Union = None"},{name:"entities_pair",val:": Union = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": Union = False"},{name:"truncation",val:": Union = None"},{name:"max_length",val:": Optional = None"},{name:"max_entity_length",val:": Optional = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": Optional = False"},{name:"pad_to_multiple_of",val:": Optional = None"},{name:"return_tensors",val:": Union = None"},{name:"return_token_type_ids",val:": Optional = None"},{name:"return_attention_mask",val:": Optional = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MLukeTokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence must be a string. Note that this
tokenizer does not support tokenization based on pretokenized strings.`,name:"text"},{anchor:"transformers.MLukeTokenizer.__call__.text_pair",description:`<strong>text_pair</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence must be a string. Note that this
tokenizer does not support tokenization based on pretokenized strings.`,name:"text_pair"},{anchor:"transformers.MLukeTokenizer.__call__.entity_spans",description:`<strong>entity_spans</strong> (<code>List[Tuple[int, int]]</code>, <code>List[List[Tuple[int, int]]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences of entity spans to be encoded. Each sequence consists of tuples each
with two integers denoting character-based start and end positions of entities. If you specify
<code>&quot;entity_classification&quot;</code> or <code>&quot;entity_pair_classification&quot;</code> as the <code>task</code> argument in the constructor,
the length of each sequence must be 1 or 2, respectively. If you specify <code>entities</code>, the length of each
sequence must be equal to the length of each sequence of <code>entities</code>.`,name:"entity_spans"},{anchor:"transformers.MLukeTokenizer.__call__.entity_spans_pair",description:`<strong>entity_spans_pair</strong> (<code>List[Tuple[int, int]]</code>, <code>List[List[Tuple[int, int]]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences of entity spans to be encoded. Each sequence consists of tuples each
with two integers denoting character-based start and end positions of entities. If you specify the
<code>task</code> argument in the constructor, this argument is ignored. If you specify <code>entities_pair</code>, the
length of each sequence must be equal to the length of each sequence of <code>entities_pair</code>.`,name:"entity_spans_pair"},{anchor:"transformers.MLukeTokenizer.__call__.entities",description:`<strong>entities</strong> (<code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences of entities to be encoded. Each sequence consists of strings
representing entities, i.e., special entities (e.g., [MASK]) or entity titles of Wikipedia (e.g., Los
Angeles). This argument is ignored if you specify the <code>task</code> argument in the constructor. The length of
each sequence must be equal to the length of each sequence of <code>entity_spans</code>. If you specify
<code>entity_spans</code> without specifying this argument, the entity sequence or the batch of entity sequences
is automatically constructed by filling it with the [MASK] entity.`,name:"entities"},{anchor:"transformers.MLukeTokenizer.__call__.entities_pair",description:`<strong>entities_pair</strong> (<code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences of entities to be encoded. Each sequence consists of strings
representing entities, i.e., special entities (e.g., [MASK]) or entity titles of Wikipedia (e.g., Los
Angeles). This argument is ignored if you specify the <code>task</code> argument in the constructor. The length of
each sequence must be equal to the length of each sequence of <code>entity_spans_pair</code>. If you specify
<code>entity_spans_pair</code> without specifying this argument, the entity sequence or the batch of entity
sequences is automatically constructed by filling it with the [MASK] entity.`,name:"entities_pair"},{anchor:"transformers.MLukeTokenizer.__call__.max_entity_length",description:`<strong>max_entity_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The maximum length of <code>entity_ids</code>.`,name:"max_entity_length"},{anchor:"transformers.MLukeTokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to add special tokens when encoding the sequences. This will use the underlying
<code>PretrainedTokenizerBase.build_inputs_with_special_tokens</code> function, which defines which tokens are
automatically added to the input ids. This is usefull if you want to add <code>bos</code> or <code>eos</code> tokens
automatically.`,name:"add_special_tokens"},{anchor:"transformers.MLukeTokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.MLukeTokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.MLukeTokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.MLukeTokenizer.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.MLukeTokenizer.__call__.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.MLukeTokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. Requires <code>padding</code> to be activated.
This is especially useful to enable the use of Tensor Cores on NVIDIA hardware with compute capability
<code>&gt;= 7.5</code> (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.MLukeTokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.MLukeTokenizer.__call__.return_token_type_ids",description:`<strong>return_token_type_ids</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return token type IDs. If left to the default, will return the token type IDs according to
the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"return_token_type_ids"},{anchor:"transformers.MLukeTokenizer.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"return_attention_mask"},{anchor:"transformers.MLukeTokenizer.__call__.return_overflowing_tokens",description:`<strong>return_overflowing_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return overflowing token sequences. If a pair of sequences of input ids (or a batch
of pairs) is provided with <code>truncation_strategy = longest_first</code> or <code>True</code>, an error is raised instead
of returning overflowing tokens.`,name:"return_overflowing_tokens"},{anchor:"transformers.MLukeTokenizer.__call__.return_special_tokens_mask",description:`<strong>return_special_tokens_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return special tokens mask information.`,name:"return_special_tokens_mask"},{anchor:"transformers.MLukeTokenizer.__call__.return_offsets_mapping",description:`<strong>return_offsets_mapping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return <code>(char_start, char_end)</code> for each token.</p>
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.MLukeTokenizer.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.MLukeTokenizer.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mluke/tokenization_mluke.py#L402",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a> with the following fields:</p>
<ul>
<li>
<p><strong>input_ids</strong> — List of token ids to be fed to a model.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
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
<p><strong>entity_ids</strong> — List of entity ids to be fed to a model.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
</li>
<li>
<p><strong>entity_position_ids</strong> — List of entity positions in the input sequence to be fed to a model.</p>
</li>
<li>
<p><strong>entity_token_type_ids</strong> — List of entity token type ids to be fed to a model (when
<code>return_token_type_ids=True</code> or if <em>“entity_token_type_ids”</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a></p>
</li>
<li>
<p><strong>entity_attention_mask</strong> — List of indices specifying which entities should be attended to by the model
(when <code>return_attention_mask=True</code> or if <em>“entity_attention_mask”</em> is in <code>self.model_input_names</code>).</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a></p>
</li>
<li>
<p><strong>entity_start_positions</strong> — List of the start positions of entities in the word token sequence (when
<code>task="entity_span_classification"</code>).</p>
</li>
<li>
<p><strong>entity_end_positions</strong> — List of the end positions of entities in the word token sequence (when
<code>task="entity_span_classification"</code>).</p>
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
<p><strong>length</strong> — The length of the inputs (when <code>return_length=True</code>)</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),A=new ge({props:{name:"save_vocabulary",anchor:"transformers.MLukeTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mluke/tokenization_mluke.py#L1526"}}),{c(){a=r("meta"),T=s(),m=r("p"),H=s(),h(w.$$.fragment),j=s(),h(x.$$.fragment),O=s(),q=r("p"),q.innerHTML=ke,G=s(),L=r("p"),L.textContent=ye,X=s(),z=r("p"),z.textContent=be,Y=s(),M=r("p"),M.innerHTML=ve,Q=s(),$=r("p"),$.innerHTML=Te,ee=s(),h(P.$$.fragment),te=s(),I=r("p"),I.textContent=we,ne=s(),h(E.$$.fragment),oe=s(),U=r("p"),U.innerHTML=xe,se=s(),h(W.$$.fragment),ie=s(),h(b.$$.fragment),ae=s(),h(N.$$.fragment),re=s(),c=r("div"),h(C.$$.fragment),pe=s(),D=r("p"),D.innerHTML=qe,ue=s(),R=r("p"),R.innerHTML=Le,he=s(),v=r("div"),h(S.$$.fragment),fe=s(),V=r("p"),V.textContent=ze,_e=s(),K=r("div"),h(A.$$.fragment),le=s(),F=r("p"),this.h()},l(e){const t=Ne("svelte-u9bgzb",document.head);a=l(t,"META",{name:!0,content:!0}),t.forEach(n),T=i(e),m=l(e,"P",{}),J(m).forEach(n),H=i(e),f(w.$$.fragment,e),j=i(e),f(x.$$.fragment,e),O=i(e),q=l(e,"P",{"data-svelte-h":!0}),u(q)!=="svelte-vz6jr5"&&(q.innerHTML=ke),G=i(e),L=l(e,"P",{"data-svelte-h":!0}),u(L)!=="svelte-luogjx"&&(L.textContent=ye),X=i(e),z=l(e,"P",{"data-svelte-h":!0}),u(z)!=="svelte-vfdo9a"&&(z.textContent=be),Y=i(e),M=l(e,"P",{"data-svelte-h":!0}),u(M)!=="svelte-2cofqb"&&(M.innerHTML=ve),Q=i(e),$=l(e,"P",{"data-svelte-h":!0}),u($)!=="svelte-197cpmu"&&($.innerHTML=Te),ee=i(e),f(P.$$.fragment,e),te=i(e),I=l(e,"P",{"data-svelte-h":!0}),u(I)!=="svelte-3ftlrg"&&(I.textContent=we),ne=i(e),f(E.$$.fragment,e),oe=i(e),U=l(e,"P",{"data-svelte-h":!0}),u(U)!=="svelte-ogmvr3"&&(U.innerHTML=xe),se=i(e),f(W.$$.fragment,e),ie=i(e),f(b.$$.fragment,e),ae=i(e),f(N.$$.fragment,e),re=i(e),c=l(e,"DIV",{class:!0});var d=J(c);f(C.$$.fragment,d),pe=i(d),D=l(d,"P",{"data-svelte-h":!0}),u(D)!=="svelte-ro6qtp"&&(D.innerHTML=qe),ue=i(d),R=l(d,"P",{"data-svelte-h":!0}),u(R)!=="svelte-1c3t5ty"&&(R.innerHTML=Le),he=i(d),v=l(d,"DIV",{class:!0});var de=J(v);f(S.$$.fragment,de),fe=i(de),V=l(de,"P",{"data-svelte-h":!0}),u(V)!=="svelte-16lcbtv"&&(V.textContent=ze),de.forEach(n),_e=i(d),K=l(d,"DIV",{class:!0});var Me=J(K);f(A.$$.fragment,Me),Me.forEach(n),d.forEach(n),le=i(e),F=l(e,"P",{}),J(F).forEach(n),this.h()},h(){B(a,"name","hf:doc:metadata"),B(a,"content",He),B(v,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),B(c,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,t){p(document.head,a),o(e,T,t),o(e,m,t),o(e,H,t),_(w,e,t),o(e,j,t),_(x,e,t),o(e,O,t),o(e,q,t),o(e,G,t),o(e,L,t),o(e,X,t),o(e,z,t),o(e,Y,t),o(e,M,t),o(e,Q,t),o(e,$,t),o(e,ee,t),_(P,e,t),o(e,te,t),o(e,I,t),o(e,ne,t),_(E,e,t),o(e,oe,t),o(e,U,t),o(e,se,t),_(W,e,t),o(e,ie,t),_(b,e,t),o(e,ae,t),_(N,e,t),o(e,re,t),o(e,c,t),_(C,c,null),p(c,pe),p(c,D),p(c,ue),p(c,R),p(c,he),p(c,v),_(S,v,null),p(v,fe),p(v,V),p(c,_e),p(c,K),_(A,K,null),o(e,le,t),o(e,F,t),ce=!0},p(e,[t]){const d={};t&2&&(d.$$scope={dirty:t,ctx:e}),b.$set(d)},i(e){ce||(g(w.$$.fragment,e),g(x.$$.fragment,e),g(P.$$.fragment,e),g(E.$$.fragment,e),g(W.$$.fragment,e),g(b.$$.fragment,e),g(N.$$.fragment,e),g(C.$$.fragment,e),g(S.$$.fragment,e),g(A.$$.fragment,e),ce=!0)},o(e){k(w.$$.fragment,e),k(x.$$.fragment,e),k(P.$$.fragment,e),k(E.$$.fragment,e),k(W.$$.fragment,e),k(b.$$.fragment,e),k(N.$$.fragment,e),k(C.$$.fragment,e),k(S.$$.fragment,e),k(A.$$.fragment,e),ce=!1},d(e){e&&(n(T),n(m),n(H),n(j),n(O),n(q),n(G),n(L),n(X),n(z),n(Y),n(M),n(Q),n($),n(ee),n(te),n(I),n(ne),n(oe),n(U),n(se),n(ie),n(ae),n(re),n(c),n(le),n(F)),n(a),y(w,e),y(x,e),y(P,e),y(E,e),y(W,e),y(b,e),y(N,e),y(C),y(S),y(A)}}}const He='{"title":"mLUKE","local":"mluke","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"MLukeTokenizer","local":"transformers.MLukeTokenizer","sections":[],"depth":2}],"depth":1}';function De(Z){return Ie(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ze extends Ue{constructor(a){super(),We(this,a,De,Ae,Pe,{})}}export{Ze as component};
