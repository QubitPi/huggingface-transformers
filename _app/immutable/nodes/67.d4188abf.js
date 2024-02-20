import{s as Se,n as Ge,o as De}from"../chunks/scheduler.9bc65507.js";import{S as Ne,i as Ye,g as i,s,r as m,A as Ke,h as l,f as n,c as o,j as A,u as h,x as d,k as X,y as r,a,v as u,d as g,t as f,w as _}from"../chunks/index.707bf1b6.js";import{D as O}from"../chunks/Docstring.17db21ae.js";import{C as Fe}from"../chunks/CodeBlock.54a9f38d.js";import{H as ee}from"../chunks/Heading.342b1fa6.js";function Oe(qe){let b,te,Y,ne,v,se,w,oe,B,Re='The BARTpho model was proposed in <a href="https://arxiv.org/abs/2109.09701" rel="nofollow">BARTpho: Pre-trained Sequence-to-Sequence Models for Vietnamese</a> by Nguyen Luong Tran, Duong Minh Le and Dat Quoc Nguyen.',ae,z,Ce="The abstract from the paper is the following:",re,J,Le=`<em>We present BARTpho with two versions — BARTpho_word and BARTpho_syllable — the first public large-scale monolingual
sequence-to-sequence models pre-trained for Vietnamese. Our BARTpho uses the “large” architecture and pre-training
scheme of the sequence-to-sequence denoising model BART, thus especially suitable for generative NLP tasks. Experiments
on a downstream task of Vietnamese text summarization show that in both automatic and human evaluations, our BARTpho
outperforms the strong baseline mBART and improves the state-of-the-art. We release BARTpho to facilitate future
research and applications of generative Vietnamese NLP tasks.</em>`,ie,$,Ie='This model was contributed by <a href="https://huggingface.co/dqnguyen" rel="nofollow">dqnguyen</a>. The original code can be found <a href="https://github.com/VinAIResearch/BARTpho" rel="nofollow">here</a>.',le,x,pe,U,ce,j,de,q,He=`<li>Following mBART, BARTpho uses the “large” architecture of BART with an additional layer-normalization layer on top of
both the encoder and decoder. Thus, usage examples in the <a href="bart">documentation of BART</a>, when adapting to use
with BARTpho, should be adjusted by replacing the BART-specialized classes with the mBART-specialized counterparts.
For example:</li>`,me,R,he,C,Ve=`<li>This implementation is only for tokenization: “monolingual_vocab_file” consists of Vietnamese-specialized types
extracted from the pre-trained SentencePiece model “vocab_file” that is available from the multilingual XLM-RoBERTa.
Other languages, if employing this pre-trained multilingual SentencePiece model “vocab_file” for subword
segmentation, can reuse BartphoTokenizer with their own language-specialized “monolingual_vocab_file”.</li>`,ue,L,ge,p,I,ye,Q,We='Adapted from <a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizer">XLMRobertaTokenizer</a>. Based on <a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a>.',Me,E,Ze=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`,ve,k,H,we,P,Ae=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An BARTPho sequence has the following format:`,Be,F,Xe="<li>single sequence: <code>&lt;s&gt; X &lt;/s&gt;</code></li> <li>pair of sequences: <code>&lt;s&gt; A &lt;/s&gt;&lt;/s&gt; B &lt;/s&gt;</code></li>",ze,T,V,Je,S,Qe="Converts a sequence of tokens (strings for sub-words) in a single string.",$e,y,W,xe,G,Ee=`Create a mask from the two sequences passed to be used in a sequence-pair classification task. BARTPho does not
make use of token type ids, therefore a list of zeros is returned.`,Ue,M,Z,je,D,Pe=`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer <code>prepare_for_model</code> method.`,fe,K,_e;return v=new ee({props:{title:"BARTpho",local:"bartpho",headingTag:"h1"}}),w=new ee({props:{title:"Overview",local:"overview",headingTag:"h2"}}),x=new ee({props:{title:"Usage example",local:"usage-example",headingTag:"h2"}}),U=new Fe({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b01vZGVsJTJDJTIwQXV0b1Rva2VuaXplciUwQSUwQWJhcnRwaG8lMjAlM0QlMjBBdXRvTW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMnZpbmFpJTJGYmFydHBoby1zeWxsYWJsZSUyMiklMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJ2aW5haSUyRmJhcnRwaG8tc3lsbGFibGUlMjIpJTBBJTBBbGluZSUyMCUzRCUyMCUyMkNoJUMzJUJBbmclMjB0JUMzJUI0aSUyMGwlQzMlQTAlMjBuaCVFMSVCQiVBRm5nJTIwbmdoaSVDMyVBQW4lMjBjJUUxJUJCJUE5dSUyMHZpJUMzJUFBbi4lMjIlMEElMEFpbnB1dF9pZHMlMjAlM0QlMjB0b2tlbml6ZXIobGluZSUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBd2l0aCUyMHRvcmNoLm5vX2dyYWQoKSUzQSUwQSUyMCUyMCUyMCUyMGZlYXR1cmVzJTIwJTNEJTIwYmFydHBobygqKmlucHV0X2lkcyklMjAlMjAlMjMlMjBNb2RlbHMlMjBvdXRwdXRzJTIwYXJlJTIwbm93JTIwdHVwbGVzJTBBJTBBJTIzJTIwV2l0aCUyMFRlbnNvckZsb3clMjAyLjAlMkIlM0ElMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwVEZBdXRvTW9kZWwlMEElMEFiYXJ0cGhvJTIwJTNEJTIwVEZBdXRvTW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMnZpbmFpJTJGYmFydHBoby1zeWxsYWJsZSUyMiklMEFpbnB1dF9pZHMlMjAlM0QlMjB0b2tlbml6ZXIobGluZSUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIydGYlMjIpJTBBZmVhdHVyZXMlMjAlM0QlMjBiYXJ0cGhvKCoqaW5wdXRfaWRzKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModel, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>bartpho = AutoModel.from_pretrained(<span class="hljs-string">&quot;vinai/bartpho-syllable&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;vinai/bartpho-syllable&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>line = <span class="hljs-string">&quot;Chúng tôi là những nghiên cứu viên.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(line, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    features = bartpho(**input_ids)  <span class="hljs-comment"># Models outputs are now tuples</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># With TensorFlow 2.0+:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModel

<span class="hljs-meta">&gt;&gt;&gt; </span>bartpho = TFAutoModel.from_pretrained(<span class="hljs-string">&quot;vinai/bartpho-syllable&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(line, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>features = bartpho(**input_ids)`,wrap:!1}}),j=new ee({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),R=new Fe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyME1CYXJ0Rm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uJTBBJTBBYmFydHBobyUyMCUzRCUyME1CYXJ0Rm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uLmZyb21fcHJldHJhaW5lZCglMjJ2aW5haSUyRmJhcnRwaG8tc3lsbGFibGUlMjIpJTBBVFhUJTIwJTNEJTIwJTIyQ2glQzMlQkFuZyUyMHQlQzMlQjRpJTIwbCVDMyVBMCUyMCUzQ21hc2slM0UlMjBuZ2hpJUMzJUFBbiUyMGMlRTElQkIlQTl1JTIwdmklQzMlQUFuLiUyMiUwQWlucHV0X2lkcyUyMCUzRCUyMHRva2VuaXplciglNUJUWFQlNUQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSU1QiUyMmlucHV0X2lkcyUyMiU1RCUwQWxvZ2l0cyUyMCUzRCUyMGJhcnRwaG8oaW5wdXRfaWRzKS5sb2dpdHMlMEFtYXNrZWRfaW5kZXglMjAlM0QlMjAoaW5wdXRfaWRzJTVCMCU1RCUyMCUzRCUzRCUyMHRva2VuaXplci5tYXNrX3Rva2VuX2lkKS5ub256ZXJvKCkuaXRlbSgpJTBBcHJvYnMlMjAlM0QlMjBsb2dpdHMlNUIwJTJDJTIwbWFza2VkX2luZGV4JTVELnNvZnRtYXgoZGltJTNEMCklMEF2YWx1ZXMlMkMlMjBwcmVkaWN0aW9ucyUyMCUzRCUyMHByb2JzLnRvcGsoNSklMEFwcmludCh0b2tlbml6ZXIuZGVjb2RlKHByZWRpY3Rpb25zKS5zcGxpdCgpKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MBartForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>bartpho = MBartForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;vinai/bartpho-syllable&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>TXT = <span class="hljs-string">&quot;Chúng tôi là &lt;mask&gt; nghiên cứu viên.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer([TXT], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = bartpho(input_ids).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>masked_index = (input_ids[<span class="hljs-number">0</span>] == tokenizer.mask_token_id).nonzero().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>probs = logits[<span class="hljs-number">0</span>, masked_index].softmax(dim=<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>values, predictions = probs.topk(<span class="hljs-number">5</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(predictions).split())`,wrap:!1}}),L=new ee({props:{title:"BartphoTokenizer",local:"transformers.BartphoTokenizer",headingTag:"h2"}}),I=new O({props:{name:"class transformers.BartphoTokenizer",anchor:"transformers.BartphoTokenizer",parameters:[{name:"vocab_file",val:""},{name:"monolingual_vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BartphoTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file. This vocabulary is the pre-trained SentencePiece model available from the
multilingual XLM-RoBERTa, also used in mBART, consisting of 250K types.`,name:"vocab_file"},{anchor:"transformers.BartphoTokenizer.monolingual_vocab_file",description:`<strong>monolingual_vocab_file</strong> (<code>str</code>) &#x2014;
Path to the monolingual vocabulary file. This monolingual vocabulary consists of Vietnamese-specialized
types extracted from the multilingual vocabulary vocab_file of 250K types.`,name:"monolingual_vocab_file"},{anchor:"transformers.BartphoTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.BartphoTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.BartphoTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BartphoTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BartphoTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BartphoTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BartphoTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BartphoTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.BartphoTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bartpho/tokenization_bartpho.py#L46"}}),H=new O({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BartphoTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.BartphoTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BartphoTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bartpho/tokenization_bartpho.py#L191",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),V=new O({props:{name:"convert_tokens_to_string",anchor:"transformers.BartphoTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bartpho/tokenization_bartpho.py#L293"}}),W=new O({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BartphoTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.BartphoTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartphoTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bartpho/tokenization_bartpho.py#L245",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of zeros.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Z=new O({props:{name:"get_special_tokens_mask",anchor:"transformers.BartphoTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BartphoTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BartphoTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BartphoTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/bartpho/tokenization_bartpho.py#L217",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),{c(){b=i("meta"),te=s(),Y=i("p"),ne=s(),m(v.$$.fragment),se=s(),m(w.$$.fragment),oe=s(),B=i("p"),B.innerHTML=Re,ae=s(),z=i("p"),z.textContent=Ce,re=s(),J=i("p"),J.innerHTML=Le,ie=s(),$=i("p"),$.innerHTML=Ie,le=s(),m(x.$$.fragment),pe=s(),m(U.$$.fragment),ce=s(),m(j.$$.fragment),de=s(),q=i("ul"),q.innerHTML=He,me=s(),m(R.$$.fragment),he=s(),C=i("ul"),C.innerHTML=Ve,ue=s(),m(L.$$.fragment),ge=s(),p=i("div"),m(I.$$.fragment),ye=s(),Q=i("p"),Q.innerHTML=We,Me=s(),E=i("p"),E.innerHTML=Ze,ve=s(),k=i("div"),m(H.$$.fragment),we=s(),P=i("p"),P.textContent=Ae,Be=s(),F=i("ul"),F.innerHTML=Xe,ze=s(),T=i("div"),m(V.$$.fragment),Je=s(),S=i("p"),S.textContent=Qe,$e=s(),y=i("div"),m(W.$$.fragment),xe=s(),G=i("p"),G.textContent=Ee,Ue=s(),M=i("div"),m(Z.$$.fragment),je=s(),D=i("p"),D.innerHTML=Pe,fe=s(),K=i("p"),this.h()},l(e){const t=Ke("svelte-u9bgzb",document.head);b=l(t,"META",{name:!0,content:!0}),t.forEach(n),te=o(e),Y=l(e,"P",{}),A(Y).forEach(n),ne=o(e),h(v.$$.fragment,e),se=o(e),h(w.$$.fragment,e),oe=o(e),B=l(e,"P",{"data-svelte-h":!0}),d(B)!=="svelte-1nncmhi"&&(B.innerHTML=Re),ae=o(e),z=l(e,"P",{"data-svelte-h":!0}),d(z)!=="svelte-vfdo9a"&&(z.textContent=Ce),re=o(e),J=l(e,"P",{"data-svelte-h":!0}),d(J)!=="svelte-1bdfxqp"&&(J.innerHTML=Le),ie=o(e),$=l(e,"P",{"data-svelte-h":!0}),d($)!=="svelte-puazo9"&&($.innerHTML=Ie),le=o(e),h(x.$$.fragment,e),pe=o(e),h(U.$$.fragment,e),ce=o(e),h(j.$$.fragment,e),de=o(e),q=l(e,"UL",{"data-svelte-h":!0}),d(q)!=="svelte-19b1na2"&&(q.innerHTML=He),me=o(e),h(R.$$.fragment,e),he=o(e),C=l(e,"UL",{"data-svelte-h":!0}),d(C)!=="svelte-kcbp2n"&&(C.innerHTML=Ve),ue=o(e),h(L.$$.fragment,e),ge=o(e),p=l(e,"DIV",{class:!0});var c=A(p);h(I.$$.fragment,c),ye=o(c),Q=l(c,"P",{"data-svelte-h":!0}),d(Q)!=="svelte-19zf7wc"&&(Q.innerHTML=We),Me=o(c),E=l(c,"P",{"data-svelte-h":!0}),d(E)!=="svelte-1c3t5ty"&&(E.innerHTML=Ze),ve=o(c),k=l(c,"DIV",{class:!0});var N=A(k);h(H.$$.fragment,N),we=o(N),P=l(N,"P",{"data-svelte-h":!0}),d(P)!=="svelte-hazsjn"&&(P.textContent=Ae),Be=o(N),F=l(N,"UL",{"data-svelte-h":!0}),d(F)!=="svelte-rq8uot"&&(F.innerHTML=Xe),N.forEach(n),ze=o(c),T=l(c,"DIV",{class:!0});var ke=A(T);h(V.$$.fragment,ke),Je=o(ke),S=l(ke,"P",{"data-svelte-h":!0}),d(S)!=="svelte-1ne8awa"&&(S.textContent=Qe),ke.forEach(n),$e=o(c),y=l(c,"DIV",{class:!0});var be=A(y);h(W.$$.fragment,be),xe=o(be),G=l(be,"P",{"data-svelte-h":!0}),d(G)!=="svelte-1t18cnp"&&(G.textContent=Ee),be.forEach(n),Ue=o(c),M=l(c,"DIV",{class:!0});var Te=A(M);h(Z.$$.fragment,Te),je=o(Te),D=l(Te,"P",{"data-svelte-h":!0}),d(D)!=="svelte-1f4f5kp"&&(D.innerHTML=Pe),Te.forEach(n),c.forEach(n),fe=o(e),K=l(e,"P",{}),A(K).forEach(n),this.h()},h(){X(b,"name","hf:doc:metadata"),X(b,"content",et),X(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),X(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),X(y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),X(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),X(p,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,t){r(document.head,b),a(e,te,t),a(e,Y,t),a(e,ne,t),u(v,e,t),a(e,se,t),u(w,e,t),a(e,oe,t),a(e,B,t),a(e,ae,t),a(e,z,t),a(e,re,t),a(e,J,t),a(e,ie,t),a(e,$,t),a(e,le,t),u(x,e,t),a(e,pe,t),u(U,e,t),a(e,ce,t),u(j,e,t),a(e,de,t),a(e,q,t),a(e,me,t),u(R,e,t),a(e,he,t),a(e,C,t),a(e,ue,t),u(L,e,t),a(e,ge,t),a(e,p,t),u(I,p,null),r(p,ye),r(p,Q),r(p,Me),r(p,E),r(p,ve),r(p,k),u(H,k,null),r(k,we),r(k,P),r(k,Be),r(k,F),r(p,ze),r(p,T),u(V,T,null),r(T,Je),r(T,S),r(p,$e),r(p,y),u(W,y,null),r(y,xe),r(y,G),r(p,Ue),r(p,M),u(Z,M,null),r(M,je),r(M,D),a(e,fe,t),a(e,K,t),_e=!0},p:Ge,i(e){_e||(g(v.$$.fragment,e),g(w.$$.fragment,e),g(x.$$.fragment,e),g(U.$$.fragment,e),g(j.$$.fragment,e),g(R.$$.fragment,e),g(L.$$.fragment,e),g(I.$$.fragment,e),g(H.$$.fragment,e),g(V.$$.fragment,e),g(W.$$.fragment,e),g(Z.$$.fragment,e),_e=!0)},o(e){f(v.$$.fragment,e),f(w.$$.fragment,e),f(x.$$.fragment,e),f(U.$$.fragment,e),f(j.$$.fragment,e),f(R.$$.fragment,e),f(L.$$.fragment,e),f(I.$$.fragment,e),f(H.$$.fragment,e),f(V.$$.fragment,e),f(W.$$.fragment,e),f(Z.$$.fragment,e),_e=!1},d(e){e&&(n(te),n(Y),n(ne),n(se),n(oe),n(B),n(ae),n(z),n(re),n(J),n(ie),n($),n(le),n(pe),n(ce),n(de),n(q),n(me),n(he),n(C),n(ue),n(ge),n(p),n(fe),n(K)),n(b),_(v,e),_(w,e),_(x,e),_(U,e),_(j,e),_(R,e),_(L,e),_(I),_(H),_(V),_(W),_(Z)}}}const et='{"title":"BARTpho","local":"bartpho","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage example","local":"usage-example","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"BartphoTokenizer","local":"transformers.BartphoTokenizer","sections":[],"depth":2}],"depth":1}';function tt(qe){return De(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class it extends Ne{constructor(b){super(),Ye(this,b,tt,Oe,Se,{})}}export{it as component};
