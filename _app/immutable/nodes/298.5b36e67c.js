import{s as Oe,o as Se,n as Re}from"../chunks/scheduler.9bc65507.js";import{S as je,i as Be,g as s,s as a,r as f,A as Qe,h as i,f as o,c as r,j as A,u as _,x as p,k as O,y as c,a as n,v as g,d as v,t as k,w as b}from"../chunks/index.707bf1b6.js";import{T as Xe}from"../chunks/Tip.c2ecdbf4.js";import{D as Y}from"../chunks/Docstring.17db21ae.js";import{H as ge}from"../chunks/Heading.342b1fa6.js";function Ze(ee){let l,C=`Wav2Vec2Phoneme’s architecture is based on the Wav2Vec2 model, for API reference, check out <a href="wav2vec2"><code>Wav2Vec2</code></a>’s documentation page
except for the tokenizer.`;return{c(){l=s("p"),l.innerHTML=C},l(h){l=i(h,"P",{"data-svelte-h":!0}),p(l)!=="svelte-odsari"&&(l.innerHTML=C)},m(h,S){n(h,l,S)},p:Re,d(h){h&&o(l)}}}function Ge(ee){let l,C,h,S,z,te,y,oe,P,We=`The Wav2Vec2Phoneme model was proposed in <a href="https://arxiv.org/abs/2109.11680" rel="nofollow">Simple and Effective Zero-shot Cross-lingual Phoneme Recognition (Xu et al.,
2021</a> by Qiantong Xu, Alexei Baevski, Michael Auli.`,ne,W,$e="The abstract from the paper is the following:",ae,$,Ve=`<em>Recent progress in self-training, self-supervised pretraining and unsupervised learning enabled well performing speech
recognition systems without any labeled data. However, in many cases there is labeled data available for related
languages which is not utilized by these methods. This paper extends previous work on zero-shot cross-lingual transfer
learning by fine-tuning a multilingually pretrained wav2vec 2.0 model to transcribe unseen languages. This is done by
mapping phonemes of the training languages to the target language using articulatory features. Experiments show that
this simple method significantly outperforms prior work which introduced task-specific architectures and used only part
of a monolingually pretrained model.</em>`,re,V,qe='Relevant checkpoints can be found under <a href="https://huggingface.co/models?other=phoneme-recognition" rel="nofollow">https://huggingface.co/models?other=phoneme-recognition</a>.',se,q,Le='This model was contributed by <a href="https://huggingface.co/patrickvonplaten" rel="nofollow">patrickvonplaten</a>',ie,L,Ie='The original code can be found <a href="https://github.com/pytorch/fairseq/tree/master/fairseq/models/wav2vec" rel="nofollow">here</a>.',ce,I,de,F,Fe=`<li>Wav2Vec2Phoneme uses the exact same architecture as Wav2Vec2</li> <li>Wav2Vec2Phoneme is a speech model that accepts a float array corresponding to the raw waveform of the speech signal.</li> <li>Wav2Vec2Phoneme model was trained using connectionist temporal classification (CTC) so the model output has to be
decoded using <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer">Wav2Vec2PhonemeCTCTokenizer</a>.</li> <li>Wav2Vec2Phoneme can be fine-tuned on multiple language at once and decode unseen languages in a single forward pass
to a sequence of phonemes</li> <li>By default, the model outputs a sequence of phonemes. In order to transform the phonemes to a sequence of words one
should make use of a dictionary and language model.</li>`,le,T,me,E,pe,d,N,ve,R,Ee="Constructs a Wav2Vec2PhonemeCTC tokenizer.",ke,j,Ne=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which contains some of the main methods. Users should refer to
the superclass for more information regarding such methods.`,be,w,D,Te,B,De=`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences.`,we,x,M,xe,Q,Me="Convert a list of lists of token ids into a list of strings by calling decode.",Ce,u,H,ze,X,He=`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`,ye,Z,Ue="Similar to doing <code>self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))</code>.",Pe,G,U,he,K,ue;return z=new ge({props:{title:"Wav2Vec2Phoneme",local:"wav2vec2phoneme",headingTag:"h1"}}),y=new ge({props:{title:"Overview",local:"overview",headingTag:"h2"}}),I=new ge({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),T=new Xe({props:{$$slots:{default:[Ze]},$$scope:{ctx:ee}}}),E=new ge({props:{title:"Wav2Vec2PhonemeCTCTokenizer",local:"transformers.Wav2Vec2PhonemeCTCTokenizer",headingTag:"h2"}}),N=new Y({props:{name:"class transformers.Wav2Vec2PhonemeCTCTokenizer",anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"phone_delimiter_token",val:" = ' '"},{name:"word_delimiter_token",val:" = None"},{name:"do_phonemize",val:" = True"},{name:"phonemizer_lang",val:" = 'en-us'"},{name:"phonemizer_backend",val:" = 'espeak'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sentence token.`,name:"bos_token"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sentence token.`,name:"eos_token"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.do_phonemize",description:`<strong>do_phonemize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether the tokenizer should phonetize the input or not. Only if a sequence of phonemes is passed to the
tokenizer, <code>do_phonemize</code> should be set to <code>False</code>.`,name:"do_phonemize"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.phonemizer_lang",description:`<strong>phonemizer_lang</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;en-us&quot;</code>) &#x2014;
The language of the phoneme set to which the tokenizer should phonetize the input text to.`,name:"phonemizer_lang"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.phonemizer_backend",description:`<strong>phonemizer_backend</strong> (<code>str</code>, <em>optional</em>. defaults to <code>&quot;espeak&quot;</code>) &#x2014;
The backend phonetization library that shall be used by the phonemizer library. Defaults to <code>espeak-ng</code>.
See the <a href="https://github.com/bootphon/phonemizer#readme" rel="nofollow">phonemizer package</a>. for more information.</p>
<p>**kwargs &#x2014;
Additional keyword arguments passed along to <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>`,name:"phonemizer_backend"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/wav2vec2_phoneme/tokenization_wav2vec2_phoneme.py#L94"}}),D=new Y({props:{name:"__call__",anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.__call__",parameters:[{name:"text",val:": Union = None"},{name:"text_pair",val:": Union = None"},{name:"text_target",val:": Union = None"},{name:"text_pair_target",val:": Union = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": Union = False"},{name:"truncation",val:": Union = None"},{name:"max_length",val:": Optional = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": bool = False"},{name:"pad_to_multiple_of",val:": Optional = None"},{name:"return_tensors",val:": Union = None"},{name:"return_token_type_ids",val:": Optional = None"},{name:"return_attention_mask",val:": Optional = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string or a list of strings
(pretokenized string). If the sequences are provided as list of strings (pretokenized), you must set
<code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.__call__.text_pair",description:`<strong>text_pair</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string or a list of strings
(pretokenized string). If the sequences are provided as list of strings (pretokenized), you must set
<code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text_pair"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.__call__.text_target",description:`<strong>text_target</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences to be encoded as target texts. Each sequence can be a string or a
list of strings (pretokenized string). If the sequences are provided as list of strings (pretokenized),
you must set <code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text_target"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.__call__.text_pair_target",description:`<strong>text_pair_target</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences to be encoded as target texts. Each sequence can be a string or a
list of strings (pretokenized string). If the sequences are provided as list of strings (pretokenized),
you must set <code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text_pair_target"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to add special tokens when encoding the sequences. This will use the underlying
<code>PretrainedTokenizerBase.build_inputs_with_special_tokens</code> function, which defines which tokens are
automatically added to the input ids. This is usefull if you want to add <code>bos</code> or <code>eos</code> tokens
automatically.`,name:"add_special_tokens"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.__call__.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. Requires <code>padding</code> to be activated.
This is especially useful to enable the use of Tensor Cores on NVIDIA hardware with compute capability
<code>&gt;= 7.5</code> (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.__call__.return_token_type_ids",description:`<strong>return_token_type_ids</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return token type IDs. If left to the default, will return the token type IDs according to
the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"return_token_type_ids"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"return_attention_mask"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.__call__.return_overflowing_tokens",description:`<strong>return_overflowing_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return overflowing token sequences. If a pair of sequences of input ids (or a batch
of pairs) is provided with <code>truncation_strategy = longest_first</code> or <code>True</code>, an error is raised instead
of returning overflowing tokens.`,name:"return_overflowing_tokens"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.__call__.return_special_tokens_mask",description:`<strong>return_special_tokens_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return special tokens mask information.`,name:"return_special_tokens_mask"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.__call__.return_offsets_mapping",description:`<strong>return_offsets_mapping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return <code>(char_start, char_end)</code> for each token.</p>
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L2755",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


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
`}}),M=new Y({props:{name:"batch_decode",anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.batch_decode",parameters:[{name:"sequences",val:": Union"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = None"},{name:"output_char_offsets",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.batch_decode.sequences",description:`<strong>sequences</strong> (<code>Union[List[int], List[List[int]], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"sequences"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.batch_decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.batch_decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.batch_decode.output_char_offsets",description:`<strong>output_char_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to output character offsets. Character offsets can be used in combination with the
sampling rate and model downsampling rate to compute the time-stamps of transcribed characters.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Please take a look at the Example of <code>~models.wav2vec2.tokenization_wav2vec2.decode</code> to better
understand how to make use of <code>output_word_offsets</code>.
<code>~model.wav2vec2_phoneme.tokenization_wav2vec2_phoneme.batch_decode</code> works analogous with phonemes
and batched output.</p>

					</div>`,name:"output_char_offsets"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.batch_decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/wav2vec2_phoneme/tokenization_wav2vec2_phoneme.py#L527",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The
decoded sentence. Will be a
<code>~models.wav2vec2.tokenization_wav2vec2_phoneme.Wav2Vec2PhonemeCTCTokenizerOutput</code> when
<code>output_char_offsets == True</code>.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[str]</code> or <code>~models.wav2vec2.tokenization_wav2vec2_phoneme.Wav2Vec2PhonemeCTCTokenizerOutput</code></p>
`}}),H=new Y({props:{name:"decode",anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.decode",parameters:[{name:"token_ids",val:": Union"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = None"},{name:"output_char_offsets",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.decode.token_ids",description:`<strong>token_ids</strong> (<code>Union[int, List[int], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"token_ids"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to clean up the tokenization spaces.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.decode.output_char_offsets",description:`<strong>output_char_offsets</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to output character offsets. Character offsets can be used in combination with the
sampling rate and model downsampling rate to compute the time-stamps of transcribed characters.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>Please take a look at the Example of <code>~models.wav2vec2.tokenization_wav2vec2.decode</code> to better
understand how to make use of <code>output_word_offsets</code>.
<code>~model.wav2vec2_phoneme.tokenization_wav2vec2_phoneme.batch_decode</code> works the same way with
phonemes.</p>

					</div>`,name:"output_char_offsets"},{anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/wav2vec2_phoneme/tokenization_wav2vec2_phoneme.py#L471",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The decoded
sentence. Will be a <code>~models.wav2vec2.tokenization_wav2vec2_phoneme.Wav2Vec2PhonemeCTCTokenizerOutput</code>
when <code>output_char_offsets == True</code>.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>str</code> or <code>~models.wav2vec2.tokenization_wav2vec2_phoneme.Wav2Vec2PhonemeCTCTokenizerOutput</code></p>
`}}),U=new Y({props:{name:"phonemize",anchor:"transformers.Wav2Vec2PhonemeCTCTokenizer.phonemize",parameters:[{name:"text",val:": str"},{name:"phonemizer_lang",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/wav2vec2_phoneme/tokenization_wav2vec2_phoneme.py#L269"}}),{c(){l=s("meta"),C=a(),h=s("p"),S=a(),f(z.$$.fragment),te=a(),f(y.$$.fragment),oe=a(),P=s("p"),P.innerHTML=We,ne=a(),W=s("p"),W.textContent=$e,ae=a(),$=s("p"),$.innerHTML=Ve,re=a(),V=s("p"),V.innerHTML=qe,se=a(),q=s("p"),q.innerHTML=Le,ie=a(),L=s("p"),L.innerHTML=Ie,ce=a(),f(I.$$.fragment),de=a(),F=s("ul"),F.innerHTML=Fe,le=a(),f(T.$$.fragment),me=a(),f(E.$$.fragment),pe=a(),d=s("div"),f(N.$$.fragment),ve=a(),R=s("p"),R.textContent=Ee,ke=a(),j=s("p"),j.innerHTML=Ne,be=a(),w=s("div"),f(D.$$.fragment),Te=a(),B=s("p"),B.textContent=De,we=a(),x=s("div"),f(M.$$.fragment),xe=a(),Q=s("p"),Q.textContent=Me,Ce=a(),u=s("div"),f(H.$$.fragment),ze=a(),X=s("p"),X.textContent=He,ye=a(),Z=s("p"),Z.innerHTML=Ue,Pe=a(),G=s("div"),f(U.$$.fragment),he=a(),K=s("p"),this.h()},l(e){const t=Qe("svelte-u9bgzb",document.head);l=i(t,"META",{name:!0,content:!0}),t.forEach(o),C=r(e),h=i(e,"P",{}),A(h).forEach(o),S=r(e),_(z.$$.fragment,e),te=r(e),_(y.$$.fragment,e),oe=r(e),P=i(e,"P",{"data-svelte-h":!0}),p(P)!=="svelte-1gxcmtl"&&(P.innerHTML=We),ne=r(e),W=i(e,"P",{"data-svelte-h":!0}),p(W)!=="svelte-vfdo9a"&&(W.textContent=$e),ae=r(e),$=i(e,"P",{"data-svelte-h":!0}),p($)!=="svelte-148nuc2"&&($.innerHTML=Ve),re=r(e),V=i(e,"P",{"data-svelte-h":!0}),p(V)!=="svelte-5tdu8e"&&(V.innerHTML=qe),se=r(e),q=i(e,"P",{"data-svelte-h":!0}),p(q)!=="svelte-13jbx2b"&&(q.innerHTML=Le),ie=r(e),L=i(e,"P",{"data-svelte-h":!0}),p(L)!=="svelte-12gzw10"&&(L.innerHTML=Ie),ce=r(e),_(I.$$.fragment,e),de=r(e),F=i(e,"UL",{"data-svelte-h":!0}),p(F)!=="svelte-fepxxm"&&(F.innerHTML=Fe),le=r(e),_(T.$$.fragment,e),me=r(e),_(E.$$.fragment,e),pe=r(e),d=i(e,"DIV",{class:!0});var m=A(d);_(N.$$.fragment,m),ve=r(m),R=i(m,"P",{"data-svelte-h":!0}),p(R)!=="svelte-1g1me1i"&&(R.textContent=Ee),ke=r(m),j=i(m,"P",{"data-svelte-h":!0}),p(j)!=="svelte-1tlp8g2"&&(j.innerHTML=Ne),be=r(m),w=i(m,"DIV",{class:!0});var fe=A(w);_(D.$$.fragment,fe),Te=r(fe),B=i(fe,"P",{"data-svelte-h":!0}),p(B)!=="svelte-kpxj0c"&&(B.textContent=De),fe.forEach(o),we=r(m),x=i(m,"DIV",{class:!0});var _e=A(x);_(M.$$.fragment,_e),xe=r(_e),Q=i(_e,"P",{"data-svelte-h":!0}),p(Q)!=="svelte-1deng2j"&&(Q.textContent=Me),_e.forEach(o),Ce=r(m),u=i(m,"DIV",{class:!0});var J=A(u);_(H.$$.fragment,J),ze=r(J),X=i(J,"P",{"data-svelte-h":!0}),p(X)!=="svelte-vbfkpu"&&(X.textContent=He),ye=r(J),Z=i(J,"P",{"data-svelte-h":!0}),p(Z)!=="svelte-125uxon"&&(Z.innerHTML=Ue),J.forEach(o),Pe=r(m),G=i(m,"DIV",{class:!0});var Ae=A(G);_(U.$$.fragment,Ae),Ae.forEach(o),m.forEach(o),he=r(e),K=i(e,"P",{}),A(K).forEach(o),this.h()},h(){O(l,"name","hf:doc:metadata"),O(l,"content",Je),O(w,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),O(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),O(u,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),O(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),O(d,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,t){c(document.head,l),n(e,C,t),n(e,h,t),n(e,S,t),g(z,e,t),n(e,te,t),g(y,e,t),n(e,oe,t),n(e,P,t),n(e,ne,t),n(e,W,t),n(e,ae,t),n(e,$,t),n(e,re,t),n(e,V,t),n(e,se,t),n(e,q,t),n(e,ie,t),n(e,L,t),n(e,ce,t),g(I,e,t),n(e,de,t),n(e,F,t),n(e,le,t),g(T,e,t),n(e,me,t),g(E,e,t),n(e,pe,t),n(e,d,t),g(N,d,null),c(d,ve),c(d,R),c(d,ke),c(d,j),c(d,be),c(d,w),g(D,w,null),c(w,Te),c(w,B),c(d,we),c(d,x),g(M,x,null),c(x,xe),c(x,Q),c(d,Ce),c(d,u),g(H,u,null),c(u,ze),c(u,X),c(u,ye),c(u,Z),c(d,Pe),c(d,G),g(U,G,null),n(e,he,t),n(e,K,t),ue=!0},p(e,[t]){const m={};t&2&&(m.$$scope={dirty:t,ctx:e}),T.$set(m)},i(e){ue||(v(z.$$.fragment,e),v(y.$$.fragment,e),v(I.$$.fragment,e),v(T.$$.fragment,e),v(E.$$.fragment,e),v(N.$$.fragment,e),v(D.$$.fragment,e),v(M.$$.fragment,e),v(H.$$.fragment,e),v(U.$$.fragment,e),ue=!0)},o(e){k(z.$$.fragment,e),k(y.$$.fragment,e),k(I.$$.fragment,e),k(T.$$.fragment,e),k(E.$$.fragment,e),k(N.$$.fragment,e),k(D.$$.fragment,e),k(M.$$.fragment,e),k(H.$$.fragment,e),k(U.$$.fragment,e),ue=!1},d(e){e&&(o(C),o(h),o(S),o(te),o(oe),o(P),o(ne),o(W),o(ae),o($),o(re),o(V),o(se),o(q),o(ie),o(L),o(ce),o(de),o(F),o(le),o(me),o(pe),o(d),o(he),o(K)),o(l),b(z,e),b(y,e),b(I,e),b(T,e),b(E,e),b(N),b(D),b(M),b(H),b(U)}}}const Je='{"title":"Wav2Vec2Phoneme","local":"wav2vec2phoneme","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"Wav2Vec2PhonemeCTCTokenizer","local":"transformers.Wav2Vec2PhonemeCTCTokenizer","sections":[],"depth":2}],"depth":1}';function Ke(ee){return Se(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class at extends je{constructor(l){super(),Be(this,l,Ke,Ge,Oe,{})}}export{at as component};
