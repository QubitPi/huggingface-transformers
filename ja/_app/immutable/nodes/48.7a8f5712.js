import{s as Xi,o as Gi,n as Jo}from"../chunks/scheduler.9bc65507.js";import{S as Yi,i as Ki,g as r,s as n,r as d,A as ed,h as a,f as i,c as o,j as g,u as c,x as s,k,y as e,a as y,v as l,d as p,t as m,w as h}from"../chunks/index.707bf1b6.js";import{T as Qi}from"../chunks/Tip.c2ecdbf4.js";import{D as T}from"../chunks/Docstring.17db21ae.js";import{C as Zi}from"../chunks/CodeBlock.54a9f38d.js";import{E as Oi}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as Ro}from"../chunks/Heading.342b1fa6.js";function td(U){let b,L="Examples:",P,q,F;return q=new Zi({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUtYmVydCUyRmJlcnQtYmFzZS1jYXNlZCUyMiklMEElMEElMjMlMjBQdXNoJTIwdGhlJTIwdG9rZW5pemVyJTIwdG8lMjB5b3VyJTIwbmFtZXNwYWNlJTIwd2l0aCUyMHRoZSUyMG5hbWUlMjAlMjJteS1maW5ldHVuZWQtYmVydCUyMi4lMEF0b2tlbml6ZXIucHVzaF90b19odWIoJTIybXktZmluZXR1bmVkLWJlcnQlMjIpJTBBJTBBJTIzJTIwUHVzaCUyMHRoZSUyMHRva2VuaXplciUyMHRvJTIwYW4lMjBvcmdhbml6YXRpb24lMjB3aXRoJTIwdGhlJTIwbmFtZSUyMCUyMm15LWZpbmV0dW5lZC1iZXJ0JTIyLiUwQXRva2VuaXplci5wdXNoX3RvX2h1YiglMjJodWdnaW5nZmFjZSUyRm15LWZpbmV0dW5lZC1iZXJ0JTIyKQ==",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-cased&quot;</span>)

<span class="hljs-comment"># Push the tokenizer to your namespace with the name &quot;my-finetuned-bert&quot;.</span>
tokenizer.push_to_hub(<span class="hljs-string">&quot;my-finetuned-bert&quot;</span>)

<span class="hljs-comment"># Push the tokenizer to an organization with the name &quot;my-finetuned-bert&quot;.</span>
tokenizer.push_to_hub(<span class="hljs-string">&quot;huggingface/my-finetuned-bert&quot;</span>)`,wrap:!1}}),{c(){b=r("p"),b.textContent=L,P=n(),d(q.$$.fragment)},l(z){b=a(z,"P",{"data-svelte-h":!0}),s(b)!=="svelte-kvfsh7"&&(b.textContent=L),P=o(z),c(q.$$.fragment,z)},m(z,E){y(z,b,E),y(z,P,E),l(q,z,E),F=!0},p:Jo,i(z){F||(p(q.$$.fragment,z),F=!0)},o(z){m(q.$$.fragment,z),F=!1},d(z){z&&(i(b),i(P)),h(q,z)}}}function nd(U){let b,L=`This encodes a dummy input and checks the number of added tokens, and is therefore not efficient. Do not put
this inside your training loop.`;return{c(){b=r("p"),b.textContent=L},l(P){b=a(P,"P",{"data-svelte-h":!0}),s(b)!=="svelte-1yi8eve"&&(b.textContent=L)},m(P,q){y(P,b,q)},p:Jo,d(P){P&&i(b)}}}function od(U){let b,L="Examples:",P,q,F;return q=new Zi({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUtYmVydCUyRmJlcnQtYmFzZS1jYXNlZCUyMiklMEElMEElMjMlMjBQdXNoJTIwdGhlJTIwdG9rZW5pemVyJTIwdG8lMjB5b3VyJTIwbmFtZXNwYWNlJTIwd2l0aCUyMHRoZSUyMG5hbWUlMjAlMjJteS1maW5ldHVuZWQtYmVydCUyMi4lMEF0b2tlbml6ZXIucHVzaF90b19odWIoJTIybXktZmluZXR1bmVkLWJlcnQlMjIpJTBBJTBBJTIzJTIwUHVzaCUyMHRoZSUyMHRva2VuaXplciUyMHRvJTIwYW4lMjBvcmdhbml6YXRpb24lMjB3aXRoJTIwdGhlJTIwbmFtZSUyMCUyMm15LWZpbmV0dW5lZC1iZXJ0JTIyLiUwQXRva2VuaXplci5wdXNoX3RvX2h1YiglMjJodWdnaW5nZmFjZSUyRm15LWZpbmV0dW5lZC1iZXJ0JTIyKQ==",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-cased&quot;</span>)

<span class="hljs-comment"># Push the tokenizer to your namespace with the name &quot;my-finetuned-bert&quot;.</span>
tokenizer.push_to_hub(<span class="hljs-string">&quot;my-finetuned-bert&quot;</span>)

<span class="hljs-comment"># Push the tokenizer to an organization with the name &quot;my-finetuned-bert&quot;.</span>
tokenizer.push_to_hub(<span class="hljs-string">&quot;huggingface/my-finetuned-bert&quot;</span>)`,wrap:!1}}),{c(){b=r("p"),b.textContent=L,P=n(),d(q.$$.fragment)},l(z){b=a(z,"P",{"data-svelte-h":!0}),s(b)!=="svelte-kvfsh7"&&(b.textContent=L),P=o(z),c(q.$$.fragment,z)},m(z,E){y(z,b,E),y(z,P,E),l(q,z,E),F=!0},p:Jo,i(z){F||(p(q.$$.fragment,z),F=!0)},o(z){m(q.$$.fragment,z),F=!1},d(z){z&&(i(b),i(P)),h(q,z)}}}function rd(U){let b,L=`This encodes a dummy input and checks the number of added tokens, and is therefore not efficient. Do not put
this inside your training loop.`;return{c(){b=r("p"),b.textContent=L},l(P){b=a(P,"P",{"data-svelte-h":!0}),s(b)!=="svelte-1yi8eve"&&(b.textContent=L)},m(P,q){y(P,b,q)},p:Jo,d(P){P&&i(b)}}}function ad(U){let b,L,P,q,F,z,E,ls=`トークナイザーは、モデルの入力の準備を担当します。ライブラリには、すべてのモデルのトークナイザーが含まれています。ほとんど
トークナイザーの一部は、完全な Python 実装と、
Rust ライブラリ <a href="https://github.com/huggingface/tokenizers" rel="nofollow">🤗 Tokenizers</a>。 「高速」実装では次のことが可能になります。`,_o,Pe,ps=`<li>特にバッチトークン化を行う場合の大幅なスピードアップと</li> <li>元の文字列 (文字と単語) とトークン空間の間でマッピングする追加のメソッド (例:
特定の文字を含むトークンのインデックス、または特定のトークンに対応する文字の範囲）。</li>`,go,qe,ms=`基本クラス <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> および <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>
モデル入力の文字列入力をエンコードし (以下を参照)、Python をインスタンス化/保存するための一般的なメソッドを実装します。
ローカル ファイルまたはディレクトリ、またはライブラリによって提供される事前トレーニング済みトークナイザーからの「高速」トークナイザー
(HuggingFace の AWS S3 リポジトリからダウンロード)。二人とも頼りにしているのは、
共通メソッドを含む <a href="/docs/transformers/main/ja/internal/tokenization_utils#transformers.PreTrainedTokenizerBase">PreTrainedTokenizerBase</a> <a href="/docs/transformers/main/ja/internal/tokenization_utils#transformers.SpecialTokensMixin">SpecialTokensMixin</a>。`,ko,Ce,hs=`したがって、<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> と <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a> はメインを実装します。
すべてのトークナイザーを使用するためのメソッド:`,bo,Fe,us=`<li>トークン化 (文字列をサブワード トークン文字列に分割)、トークン文字列を ID に変換したり、その逆の変換を行ったりします。
エンコード/デコード (つまり、トークン化と整数への変換)。</li> <li>基礎となる構造 (BPE、SentencePiece…) から独立した方法で、語彙に新しいトークンを追加します。</li> <li>特別なトークン (マスク、文の始まりなど) の管理: トークンの追加、属性への割り当て。
トークナイザーにより、簡単にアクセスでき、トークン化中に分割されないようにすることができます。</li>`,xo,Le,fs=`<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.BatchEncoding">BatchEncoding</a> は、
<a href="/docs/transformers/main/ja/internal/tokenization_utils#transformers.PreTrainedTokenizerBase">PreTrainedTokenizerBase</a> のエンコード メソッド (<code>__call__</code>、
<code>encode_plus</code> および <code>batch_encode_plus</code>) であり、Python 辞書から派生しています。トークナイザーが純粋な Python の場合
tokenizer の場合、このクラスは標準の Python 辞書と同じように動作し、によって計算されたさまざまなモデル入力を保持します。
これらのメソッド (<code>input_ids</code>、<code>attention_mask</code>…)。トークナイザーが「高速」トークナイザーである場合 (つまり、
HuggingFace <a href="https://github.com/huggingface/tokenizers" rel="nofollow">トークナイザー ライブラリ</a>)、このクラスはさらに提供します
元の文字列 (文字と単語) と
トークンスペース (例: 指定された文字または対応する文字の範囲を構成するトークンのインデックスの取得)
与えられたトークンに）。`,To,Ie,vo,f,De,Qo,yt,_s="Base class for all slow tokenizers.",Oo,$t,gs='Inherits from <a href="/docs/transformers/main/ja/internal/tokenization_utils#transformers.PreTrainedTokenizerBase">PreTrainedTokenizerBase</a>.',Zo,Pt,ks=`Handle all the shared methods for tokenization and special tokens as well as methods downloading/caching/loading
pretrained tokenizers as well as adding tokens to the vocabulary.`,Xo,qt,bs=`This class also contain the added tokens in a unified way on top of all tokenizers so we don’t have to handle the
specific vocabulary augmentation methods of the various underlying dictionary structures (BPE, sentencepiece…).`,Go,Ct,xs="Class attributes (overridden by derived classes)",Yo,Ft,Ts=`<li><strong>vocab_files_names</strong> (<code>Dict[str, str]</code>) — A dictionary with, as keys, the <code>__init__</code> keyword name of each
vocabulary file required by the model, and as associated values, the filename for saving the associated file
(string).</li> <li><strong>pretrained_vocab_files_map</strong> (<code>Dict[str, Dict[str, str]]</code>) — A dictionary of dictionaries, with the
high-level keys being the <code>__init__</code> keyword name of each vocabulary file required by the model, the
low-level being the <code>short-cut-names</code> of the pretrained models with, as associated values, the <code>url</code> to the
associated pretrained vocabulary file.</li> <li><strong>max_model_input_sizes</strong> (<code>Dict[str, Optional[int]]</code>) — A dictionary with, as keys, the <code>short-cut-names</code>
of the pretrained models, and as associated values, the maximum length of the sequence inputs of this model,
or <code>None</code> if the model has no maximum input size.</li> <li><strong>pretrained_init_configuration</strong> (<code>Dict[str, Dict[str, Any]]</code>) — A dictionary with, as keys, the
<code>short-cut-names</code> of the pretrained models, and as associated values, a dictionary of specific arguments to
pass to the <code>__init__</code> method of the tokenizer class for this pretrained model when loading the tokenizer
with the <a href="/docs/transformers/main/ja/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.from_pretrained">from_pretrained()</a> method.</li> <li><strong>model_input_names</strong> (<code>List[str]</code>) — A list of inputs expected in the forward pass of the model.</li> <li><strong>padding_side</strong> (<code>str</code>) — The default value for the side on which the model should have padding applied.
Should be <code>&#39;right&#39;</code> or <code>&#39;left&#39;</code>.</li> <li><strong>truncation_side</strong> (<code>str</code>) — The default value for the side on which the model should have truncation
applied. Should be <code>&#39;right&#39;</code> or <code>&#39;left&#39;</code>.</li>`,Ko,ae,Ee,er,Lt,vs=`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences.`,tr,se,je,nr,It,ws=`Converts a Conversation object or a list of dictionaries with <code>&quot;role&quot;</code> and <code>&quot;content&quot;</code> keys to a list of token
ids. This method is intended for use with chat models, and will read the tokenizer’s chat_template attribute to
determine the format and control tokens to use when converting. When chat_template is None, it will fall back
to the default_chat_template specified at the class level.`,or,ie,Me,rr,Dt,zs="Convert a list of lists of token ids into a list of strings by calling decode.",ar,S,Ne,sr,Et,ys=`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`,ir,jt,$s="Similar to doing <code>self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))</code>.",dr,V,We,cr,Mt,Ps="Converts a string to a sequence of ids (integer), using the tokenizer and vocabulary.",lr,Nt,qs="Same as doing <code>self.convert_tokens_to_ids(self.tokenize(text))</code>.",pr,R,Be,mr,Wt,Cs="Upload the tokenizer files to the 🤗 Model Hub.",hr,de,ur,ce,He,fr,Bt,Fs=`Converts a single index or a sequence of indices in a token or a sequence of tokens, using the vocabulary and
added tokens.`,_r,le,Ae,gr,Ht,Ls=`Converts a token string (or a sequence of tokens) in a single integer id (or a sequence of ids), using the
vocabulary.`,kr,pe,Ue,br,At,Is=`Returns the added tokens in the vocabulary as a dictionary of token to index. Results might be different from
the fast call because for now we always add the tokens even if they are already in the vocabulary. This is
something we should change.`,xr,J,Se,Tr,Ut,Ds="Returns the number of added tokens when encoding a sequence with special tokens.",vr,me,wr,Q,Ve,zr,St,Es="Performs any necessary transformations before tokenization.",yr,Vt,js=`This method should pop the arguments from kwargs and return the remaining <code>kwargs</code> as well. We test the
<code>kwargs</code> at the end of the encoding process to be sure all the arguments have been used.`,$r,O,Re,Pr,Rt,Ms="Converts a string into a sequence of tokens, using the tokenizer.",qr,Jt,Ns=`Split in words for word-based vocabulary or sub-words for sub-word-based vocabularies
(BPE/SentencePieces/WordPieces). Takes care of added tokens.`,wo,Je,zo,Qe,Ws=`<a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a> は <a href="https://huggingface.co/docs/tokenizers" rel="nofollow">tokenizers</a> ライブラリに依存します。 🤗 トークナイザー ライブラリから取得したトークナイザーは、
🤗 トランスに非常に簡単にロードされます。これがどのように行われるかを理解するには、<a href="../fast_tokenizers">🤗 tokenizers からの tokenizers を使用する</a> ページを参照してください。`,yo,_,Oe,Cr,Qt,Bs="Base class for all fast tokenizers (wrapping HuggingFace tokenizers library).",Fr,Ot,Hs='Inherits from <a href="/docs/transformers/main/ja/internal/tokenization_utils#transformers.PreTrainedTokenizerBase">PreTrainedTokenizerBase</a>.',Lr,Zt,As=`Handles all the shared methods for tokenization and special tokens, as well as methods for
downloading/caching/loading pretrained tokenizers, as well as adding tokens to the vocabulary.`,Ir,Xt,Us=`This class also contains the added tokens in a unified way on top of all tokenizers so we don’t have to handle the
specific vocabulary augmentation methods of the various underlying dictionary structures (BPE, sentencepiece…).`,Dr,Gt,Ss="Class attributes (overridden by derived classes)",Er,Yt,Vs=`<li><strong>vocab_files_names</strong> (<code>Dict[str, str]</code>) — A dictionary with, as keys, the <code>__init__</code> keyword name of each
vocabulary file required by the model, and as associated values, the filename for saving the associated file
(string).</li> <li><strong>pretrained_vocab_files_map</strong> (<code>Dict[str, Dict[str, str]]</code>) — A dictionary of dictionaries, with the
high-level keys being the <code>__init__</code> keyword name of each vocabulary file required by the model, the
low-level being the <code>short-cut-names</code> of the pretrained models with, as associated values, the <code>url</code> to the
associated pretrained vocabulary file.</li> <li><strong>max_model_input_sizes</strong> (<code>Dict[str, Optional[int]]</code>) — A dictionary with, as keys, the <code>short-cut-names</code>
of the pretrained models, and as associated values, the maximum length of the sequence inputs of this model,
or <code>None</code> if the model has no maximum input size.</li> <li><strong>pretrained_init_configuration</strong> (<code>Dict[str, Dict[str, Any]]</code>) — A dictionary with, as keys, the
<code>short-cut-names</code> of the pretrained models, and as associated values, a dictionary of specific arguments to
pass to the <code>__init__</code> method of the tokenizer class for this pretrained model when loading the tokenizer
with the <a href="/docs/transformers/main/ja/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.from_pretrained">from_pretrained()</a> method.</li> <li><strong>model_input_names</strong> (<code>List[str]</code>) — A list of inputs expected in the forward pass of the model.</li> <li><strong>padding_side</strong> (<code>str</code>) — The default value for the side on which the model should have padding applied.
Should be <code>&#39;right&#39;</code> or <code>&#39;left&#39;</code>.</li> <li><strong>truncation_side</strong> (<code>str</code>) — The default value for the side on which the model should have truncation
applied. Should be <code>&#39;right&#39;</code> or <code>&#39;left&#39;</code>.</li>`,jr,he,Ze,Mr,Kt,Rs=`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences.`,Nr,ue,Xe,Wr,en,Js=`Converts a Conversation object or a list of dictionaries with <code>&quot;role&quot;</code> and <code>&quot;content&quot;</code> keys to a list of token
ids. This method is intended for use with chat models, and will read the tokenizer’s chat_template attribute to
determine the format and control tokens to use when converting. When chat_template is None, it will fall back
to the default_chat_template specified at the class level.`,Br,fe,Ge,Hr,tn,Qs="Convert a list of lists of token ids into a list of strings by calling decode.",Ar,Z,Ye,Ur,nn,Os=`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`,Sr,on,Zs="Similar to doing <code>self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))</code>.",Vr,X,Ke,Rr,rn,Xs="Converts a string to a sequence of ids (integer), using the tokenizer and vocabulary.",Jr,an,Gs="Same as doing <code>self.convert_tokens_to_ids(self.tokenize(text))</code>.",Qr,G,et,Or,sn,Ys="Upload the tokenizer files to the 🤗 Model Hub.",Zr,_e,Xr,ge,tt,Gr,dn,Ks=`Converts a single index or a sequence of indices in a token or a sequence of tokens, using the vocabulary and
added tokens.`,Yr,ke,nt,Kr,cn,ei=`Converts a token string (or a sequence of tokens) in a single integer id (or a sequence of ids), using the
vocabulary.`,ea,be,ot,ta,ln,ti="Returns the added tokens in the vocabulary as a dictionary of token to index.",na,Y,rt,oa,pn,ni="Returns the number of added tokens when encoding a sequence with special tokens.",ra,xe,aa,K,at,sa,mn,oi=`Define the truncation and the padding strategies for fast tokenizers (provided by HuggingFace tokenizers
library) and restore the tokenizer settings afterwards.`,ia,hn,ri=`The provided tokenizer has no padding / truncation strategy before the managed section. If your tokenizer set a
padding / truncation strategy before, then it will be reset to no padding / truncation when exiting the managed
section.`,da,Te,st,ca,un,ai=`Trains a tokenizer on a new corpus with the same defaults (in terms of special tokens or tokenization pipeline)
as the current one.`,$o,it,Po,w,dt,la,fn,si=`Holds the output of the <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__"><strong>call</strong>()</a>,
<a href="/docs/transformers/main/ja/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode_plus">encode_plus()</a> and
<a href="/docs/transformers/main/ja/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_encode_plus">batch_encode_plus()</a> methods (tokens, attention_masks, etc).`,pa,_n,ii=`This class is derived from a python dictionary and can be used as a dictionary. In addition, this class exposes
utility methods to map from word/character space to token space.`,ma,j,ct,ha,gn,di=`Get the index of the token in the encoded output comprising a character in the original string for a sequence
of the batch.`,ua,kn,ci="Can be called as:",fa,bn,li="<li><code>self.char_to_token(char_index)</code> if batch size is 1</li> <li><code>self.char_to_token(batch_index, char_index)</code> if batch size is greater or equal to 1</li>",_a,xn,pi=`This method is particularly suited when the input sequences are provided as pre-tokenized sequences (i.e. words
are defined by the user). In this case it allows to easily associate encoded tokens with provided tokenized
words.`,ga,M,lt,ka,Tn,mi=`Get the word in the original string corresponding to a character in the original string of a sequence of the
batch.`,ba,vn,hi="Can be called as:",xa,wn,ui="<li><code>self.char_to_word(char_index)</code> if batch size is 1</li> <li><code>self.char_to_word(batch_index, char_index)</code> if batch size is greater than 1</li>",Ta,zn,fi=`This method is particularly suited when the input sequences are provided as pre-tokenized sequences (i.e. words
are defined by the user). In this case it allows to easily associate encoded tokens with provided tokenized
words.`,va,ve,pt,wa,yn,_i="Convert the inner content to tensors.",za,ee,mt,ya,$n,gi="Return a list mapping the tokens to the id of their original sentences:",$a,Pn,ki=`<li><code>None</code> for special tokens added around or between sequences,</li> <li><code>0</code> for tokens corresponding to words in the first sequence,</li> <li><code>1</code> for tokens corresponding to words in the second sequence when a pair of sequences was jointly
encoded.</li>`,Pa,we,ht,qa,qn,bi="Send all values to device by calling <code>v.to(device)</code> (PyTorch only).",Ca,I,ut,Fa,Cn,xi="Get the character span corresponding to an encoded token in a sequence of the batch.",La,Fn,Ti='Character spans are returned as a <a href="/docs/transformers/main/ja/internal/tokenization_utils#transformers.CharSpan">CharSpan</a> with:',Ia,Ln,vi=`<li><strong>start</strong> — Index of the first character in the original string associated to the token.</li> <li><strong>end</strong> — Index of the character following the last character in the original string associated to the
token.</li>`,Da,In,wi="Can be called as:",Ea,Dn,zi="<li><code>self.token_to_chars(token_index)</code> if batch size is 1</li> <li><code>self.token_to_chars(batch_index, token_index)</code> if batch size is greater or equal to 1</li>",ja,N,ft,Ma,En,yi=`Get the index of the sequence represented by the given token. In the general use case, this method returns <code>0</code>
for a single sequence or the first sequence of a pair, and <code>1</code> for the second sequence of a pair`,Na,jn,$i="Can be called as:",Wa,Mn,Pi="<li><code>self.token_to_sequence(token_index)</code> if batch size is 1</li> <li><code>self.token_to_sequence(batch_index, token_index)</code> if batch size is greater than 1</li>",Ba,Nn,qi=`This method is particularly suited when the input sequences are provided as pre-tokenized sequences (i.e.,
words are defined by the user). In this case it allows to easily associate encoded tokens with provided
tokenized words.`,Ha,W,_t,Aa,Wn,Ci="Get the index of the word corresponding (i.e. comprising) to an encoded token in a sequence of the batch.",Ua,Bn,Fi="Can be called as:",Sa,Hn,Li="<li><code>self.token_to_word(token_index)</code> if batch size is 1</li> <li><code>self.token_to_word(batch_index, token_index)</code> if batch size is greater than 1</li>",Va,An,Ii=`This method is particularly suited when the input sequences are provided as pre-tokenized sequences (i.e.,
words are defined by the user). In this case it allows to easily associate encoded tokens with provided
tokenized words.`,Ra,ze,gt,Ja,Un,Di=`Return the list of tokens (sub-parts of the input strings after word/subword splitting and before conversion to
integer indices) at a given batch index (only works for the output of a fast tokenizer).`,Qa,ye,kt,Oa,Sn,Ei="Return a list mapping the tokens to their actual word in the initial sentence for a fast tokenizer.",Za,D,bt,Xa,Vn,ji="Get the character span in the original string corresponding to given word in a sequence of the batch.",Ga,Rn,Mi="Character spans are returned as a CharSpan NamedTuple with:",Ya,Jn,Ni="<li>start: index of the first character in the original string</li> <li>end: index of the character following the last character in the original string</li>",Ka,Qn,Wi="Can be called as:",es,On,Bi="<li><code>self.word_to_chars(word_index)</code> if batch size is 1</li> <li><code>self.word_to_chars(batch_index, word_index)</code> if batch size is greater or equal to 1</li>",ts,C,xt,ns,Zn,Hi="Get the encoded token span corresponding to a word in a sequence of the batch.",os,Xn,Ai='Token spans are returned as a <a href="/docs/transformers/main/ja/internal/tokenization_utils#transformers.TokenSpan">TokenSpan</a> with:',rs,Gn,Ui="<li><strong>start</strong> — Index of the first token.</li> <li><strong>end</strong> — Index of the token following the last token.</li>",as,Yn,Si="Can be called as:",ss,Kn,Vi=`<li><code>self.word_to_tokens(word_index, sequence_index: int = 0)</code> if batch size is 1</li> <li><code>self.word_to_tokens(batch_index, word_index, sequence_index: int = 0)</code> if batch size is greater or equal to
1</li>`,is,eo,Ri=`This method is particularly suited when the input sequences are provided as pre-tokenized sequences (i.e. words
are defined by the user). In this case it allows to easily associate encoded tokens with provided tokenized
words.`,ds,$e,Tt,cs,to,Ji="Return a list mapping the tokens to their actual word in the initial sentence for a fast tokenizer.",qo,fo,Co;return F=new Ro({props:{title:"Tokenizer",local:"tokenizer",headingTag:"h1"}}),Ie=new Ro({props:{title:"PreTrainedTokenizer",local:"transformers.PreTrainedTokenizer",headingTag:"h2"}}),De=new T({props:{name:"class transformers.PreTrainedTokenizer",anchor:"transformers.PreTrainedTokenizer",parameters:[{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizer.model_max_length",description:`<strong>model_max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The maximum length (in number of tokens) for the inputs to the transformer model. When the tokenizer is
loaded with <a href="/docs/transformers/main/ja/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.from_pretrained">from_pretrained()</a>, this will be set to the
value stored for the associated model in <code>max_model_input_sizes</code> (see above). If no value is provided, will
default to VERY_LARGE_INTEGER (<code>int(1e30)</code>).`,name:"model_max_length"},{anchor:"transformers.PreTrainedTokenizer.padding_side",description:`<strong>padding_side</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The side on which the model should have padding applied. Should be selected between [&#x2018;right&#x2019;, &#x2018;left&#x2019;].
Default value is picked from the class attribute of the same name.`,name:"padding_side"},{anchor:"transformers.PreTrainedTokenizer.truncation_side",description:`<strong>truncation_side</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The side on which the model should have truncation applied. Should be selected between [&#x2018;right&#x2019;, &#x2018;left&#x2019;].
Default value is picked from the class attribute of the same name.`,name:"truncation_side"},{anchor:"transformers.PreTrainedTokenizer.chat_template",description:`<strong>chat_template</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A Jinja template string that will be used to format lists of chat messages. See
<a href="https://huggingface.co/docs/transformers/chat_templating" rel="nofollow">https://huggingface.co/docs/transformers/chat_templating</a> for a full description.`,name:"chat_template"},{anchor:"transformers.PreTrainedTokenizer.model_input_names",description:`<strong>model_input_names</strong> (<code>List[string]</code>, <em>optional</em>) &#x2014;
The list of inputs accepted by the forward pass of the model (like <code>&quot;token_type_ids&quot;</code> or
<code>&quot;attention_mask&quot;</code>). Default value is picked from the class attribute of the same name.`,name:"model_input_names"},{anchor:"transformers.PreTrainedTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token representing the beginning of a sentence. Will be associated to <code>self.bos_token</code> and
<code>self.bos_token_id</code>.`,name:"bos_token"},{anchor:"transformers.PreTrainedTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token representing the end of a sentence. Will be associated to <code>self.eos_token</code> and
<code>self.eos_token_id</code>.`,name:"eos_token"},{anchor:"transformers.PreTrainedTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token representing an out-of-vocabulary token. Will be associated to <code>self.unk_token</code> and
<code>self.unk_token_id</code>.`,name:"unk_token"},{anchor:"transformers.PreTrainedTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token separating two different sentences in the same input (used by BERT for instance). Will be
associated to <code>self.sep_token</code> and <code>self.sep_token_id</code>.`,name:"sep_token"},{anchor:"transformers.PreTrainedTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token used to make arrays of tokens the same size for batching purpose. Will then be ignored by
attention mechanisms or loss computation. Will be associated to <code>self.pad_token</code> and <code>self.pad_token_id</code>.`,name:"pad_token"},{anchor:"transformers.PreTrainedTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token representing the class of the input (used by BERT for instance). Will be associated to
<code>self.cls_token</code> and <code>self.cls_token_id</code>.`,name:"cls_token"},{anchor:"transformers.PreTrainedTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token representing a masked token (used by masked-language modeling pretraining objectives, like
BERT). Will be associated to <code>self.mask_token</code> and <code>self.mask_token_id</code>.`,name:"mask_token"},{anchor:"transformers.PreTrainedTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (tuple or list of <code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A tuple or a list of additional special tokens. Add them here to ensure they are skipped when decoding with
<code>skip_special_tokens</code> is set to True. If they are not part of the vocabulary, they will be added at the end
of the vocabulary.`,name:"additional_special_tokens"},{anchor:"transformers.PreTrainedTokenizer.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should cleanup the spaces that were added when splitting the input text during the
tokenization process.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.PreTrainedTokenizer.split_special_tokens",description:`<strong>split_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the special tokens should be split during the tokenization process. The default behavior is
to not split special tokens. This means that if <code>&lt;s&gt;</code> is the <code>bos_token</code>, then <code>tokenizer.tokenize(&quot;&lt;s&gt;&quot;) = [&apos;&lt;s&gt;</code>]. Otherwise, if <code>split_special_tokens=True</code>, then <code>tokenizer.tokenize(&quot;&lt;s&gt;&quot;)</code> will be give <code>[&apos;&lt;&apos;, &apos;s&apos;, &apos;&gt;&apos;]</code>. This argument is only supported for <code>slow</code> tokenizers for the moment.`,name:"split_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils.py#L335"}}),Ee=new T({props:{name:"__call__",anchor:"transformers.PreTrainedTokenizer.__call__",parameters:[{name:"text",val:": Union = None"},{name:"text_pair",val:": Union = None"},{name:"text_target",val:": Union = None"},{name:"text_pair_target",val:": Union = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": Union = False"},{name:"truncation",val:": Union = None"},{name:"max_length",val:": Optional = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": bool = False"},{name:"pad_to_multiple_of",val:": Optional = None"},{name:"return_tensors",val:": Union = None"},{name:"return_token_type_ids",val:": Optional = None"},{name:"return_attention_mask",val:": Optional = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string or a list of strings
(pretokenized string). If the sequences are provided as list of strings (pretokenized), you must set
<code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text"},{anchor:"transformers.PreTrainedTokenizer.__call__.text_pair",description:`<strong>text_pair</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string or a list of strings
(pretokenized string). If the sequences are provided as list of strings (pretokenized), you must set
<code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text_pair"},{anchor:"transformers.PreTrainedTokenizer.__call__.text_target",description:`<strong>text_target</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences to be encoded as target texts. Each sequence can be a string or a
list of strings (pretokenized string). If the sequences are provided as list of strings (pretokenized),
you must set <code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text_target"},{anchor:"transformers.PreTrainedTokenizer.__call__.text_pair_target",description:`<strong>text_pair_target</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences to be encoded as target texts. Each sequence can be a string or a
list of strings (pretokenized string). If the sequences are provided as list of strings (pretokenized),
you must set <code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text_pair_target"},{anchor:"transformers.PreTrainedTokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to add special tokens when encoding the sequences. This will use the underlying
<code>PretrainedTokenizerBase.build_inputs_with_special_tokens</code> function, which defines which tokens are
automatically added to the input ids. This is usefull if you want to add <code>bos</code> or <code>eos</code> tokens
automatically.`,name:"add_special_tokens"},{anchor:"transformers.PreTrainedTokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/ja/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.PreTrainedTokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/ja/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.PreTrainedTokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.PreTrainedTokenizer.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.PreTrainedTokenizer.__call__.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.PreTrainedTokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. Requires <code>padding</code> to be activated.
This is especially useful to enable the use of Tensor Cores on NVIDIA hardware with compute capability
<code>&gt;= 7.5</code> (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.PreTrainedTokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/ja/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.PreTrainedTokenizer.__call__.return_token_type_ids",description:`<strong>return_token_type_ids</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return token type IDs. If left to the default, will return the token type IDs according to
the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"return_token_type_ids"},{anchor:"transformers.PreTrainedTokenizer.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"return_attention_mask"},{anchor:"transformers.PreTrainedTokenizer.__call__.return_overflowing_tokens",description:`<strong>return_overflowing_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return overflowing token sequences. If a pair of sequences of input ids (or a batch
of pairs) is provided with <code>truncation_strategy = longest_first</code> or <code>True</code>, an error is raised instead
of returning overflowing tokens.`,name:"return_overflowing_tokens"},{anchor:"transformers.PreTrainedTokenizer.__call__.return_special_tokens_mask",description:`<strong>return_special_tokens_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return special tokens mask information.`,name:"return_special_tokens_mask"},{anchor:"transformers.PreTrainedTokenizer.__call__.return_offsets_mapping",description:`<strong>return_offsets_mapping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return <code>(char_start, char_end)</code> for each token.</p>
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.PreTrainedTokenizer.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.PreTrainedTokenizer.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L2755",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.BatchEncoding"
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
  href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),je=new T({props:{name:"apply_chat_template",anchor:"transformers.PreTrainedTokenizer.apply_chat_template",parameters:[{name:"conversation",val:": Union"},{name:"chat_template",val:": Optional = None"},{name:"add_generation_prompt",val:": bool = False"},{name:"tokenize",val:": bool = True"},{name:"padding",val:": bool = False"},{name:"truncation",val:": bool = False"},{name:"max_length",val:": Optional = None"},{name:"return_tensors",val:": Union = None"},{name:"return_dict",val:": bool = False"},{name:"**tokenizer_kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizer.apply_chat_template.conversation",description:`<strong>conversation</strong> (Union[List[Dict[str, str]], &#x201C;Conversation&#x201D;]) &#x2014; A Conversation object or list of dicts
with &#x201C;role&#x201D; and &#x201C;content&#x201D; keys, representing the chat history so far.`,name:"conversation"},{anchor:"transformers.PreTrainedTokenizer.apply_chat_template.chat_template",description:`<strong>chat_template</strong> (str, <em>optional</em>) &#x2014; A Jinja template to use for this conversion. If
this is not passed, the model&#x2019;s default chat template will be used instead.`,name:"chat_template"},{anchor:"transformers.PreTrainedTokenizer.apply_chat_template.add_generation_prompt",description:`<strong>add_generation_prompt</strong> (bool, <em>optional</em>) &#x2014; Whether to end the prompt with the token(s) that indicate
the start of an assistant message. This is useful when you want to generate a response from the model.
Note that this argument will be passed to the chat template, and so it must be supported in the
template for this argument to have any effect.`,name:"add_generation_prompt"},{anchor:"transformers.PreTrainedTokenizer.apply_chat_template.tokenize",description:`<strong>tokenize</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
Whether to tokenize the output. If <code>False</code>, the output will be a string.`,name:"tokenize"},{anchor:"transformers.PreTrainedTokenizer.apply_chat_template.padding",description:`<strong>padding</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether to pad sequences to the maximum length. Has no effect if tokenize is <code>False</code>.`,name:"padding"},{anchor:"transformers.PreTrainedTokenizer.apply_chat_template.truncation",description:`<strong>truncation</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether to truncate sequences at the maximum length. Has no effect if tokenize is <code>False</code>.`,name:"truncation"},{anchor:"transformers.PreTrainedTokenizer.apply_chat_template.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Maximum length (in tokens) to use for padding or truncation. Has no effect if tokenize is <code>False</code>. If
not specified, the tokenizer&#x2019;s <code>max_length</code> attribute will be used as a default.`,name:"max_length"},{anchor:"transformers.PreTrainedTokenizer.apply_chat_template.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/ja/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors of a particular framework. Has no effect if tokenize is <code>False</code>. Acceptable
values are:<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.Tensor</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.PreTrainedTokenizer.apply_chat_template.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to return a dictionary with named outputs. Has no effect if tokenize is <code>False</code>.
**tokenizer_kwargs &#x2014; Additional kwargs to pass to the tokenizer.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L1678",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list of token ids representing the tokenized chat so far, including control tokens. This
output is ready to pass to the model, either directly or via methods like <code>generate()</code>.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Me=new T({props:{name:"batch_decode",anchor:"transformers.PreTrainedTokenizer.batch_decode",parameters:[{name:"sequences",val:": Union"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizer.batch_decode.sequences",description:`<strong>sequences</strong> (<code>Union[List[int], List[List[int]], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"sequences"},{anchor:"transformers.PreTrainedTokenizer.batch_decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.PreTrainedTokenizer.batch_decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to clean up the tokenization spaces. If <code>None</code>, will default to
<code>self.clean_up_tokenization_spaces</code>.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.PreTrainedTokenizer.batch_decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L3718",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The list of decoded sentences.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[str]</code></p>
`}}),Ne=new T({props:{name:"decode",anchor:"transformers.PreTrainedTokenizer.decode",parameters:[{name:"token_ids",val:": Union"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizer.decode.token_ids",description:`<strong>token_ids</strong> (<code>Union[int, List[int], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"token_ids"},{anchor:"transformers.PreTrainedTokenizer.decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.PreTrainedTokenizer.decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to clean up the tokenization spaces. If <code>None</code>, will default to
<code>self.clean_up_tokenization_spaces</code>.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.PreTrainedTokenizer.decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L3752",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The decoded sentence.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>str</code></p>
`}}),We=new T({props:{name:"encode",anchor:"transformers.PreTrainedTokenizer.encode",parameters:[{name:"text",val:": Union"},{name:"text_pair",val:": Union = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": Union = False"},{name:"truncation",val:": Union = None"},{name:"max_length",val:": Optional = None"},{name:"stride",val:": int = 0"},{name:"return_tensors",val:": Union = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizer.encode.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code> or <code>List[int]</code>) &#x2014;
The first sequence to be encoded. This can be a string, a list of strings (tokenized string using the
<code>tokenize</code> method) or a list of integers (tokenized string ids using the <code>convert_tokens_to_ids</code>
method).`,name:"text"},{anchor:"transformers.PreTrainedTokenizer.encode.text_pair",description:`<strong>text_pair</strong> (<code>str</code>, <code>List[str]</code> or <code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second sequence to be encoded. This can be a string, a list of strings (tokenized string using
the <code>tokenize</code> method) or a list of integers (tokenized string ids using the <code>convert_tokens_to_ids</code>
method).`,name:"text_pair"},{anchor:"transformers.PreTrainedTokenizer.encode.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to add special tokens when encoding the sequences. This will use the underlying
<code>PretrainedTokenizerBase.build_inputs_with_special_tokens</code> function, which defines which tokens are
automatically added to the input ids. This is usefull if you want to add <code>bos</code> or <code>eos</code> tokens
automatically.`,name:"add_special_tokens"},{anchor:"transformers.PreTrainedTokenizer.encode.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/ja/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.PreTrainedTokenizer.encode.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/ja/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.PreTrainedTokenizer.encode.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.PreTrainedTokenizer.encode.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.PreTrainedTokenizer.encode.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.PreTrainedTokenizer.encode.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. Requires <code>padding</code> to be activated.
This is especially useful to enable the use of Tensor Cores on NVIDIA hardware with compute capability
<code>&gt;= 7.5</code> (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.PreTrainedTokenizer.encode.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/ja/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>
<p>**kwargs &#x2014; Passed along to the <code>.tokenize()</code> method.`,name:"return_tensors"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L2563",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The tokenized ids of the text.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code>, <code>torch.Tensor</code>, <code>tf.Tensor</code> or <code>np.ndarray</code></p>
`}}),Be=new T({props:{name:"push_to_hub",anchor:"transformers.PreTrainedTokenizer.push_to_hub",parameters:[{name:"repo_id",val:": str"},{name:"use_temp_dir",val:": Optional = None"},{name:"commit_message",val:": Optional = None"},{name:"private",val:": Optional = None"},{name:"token",val:": Union = None"},{name:"max_shard_size",val:": Union = '5GB'"},{name:"create_pr",val:": bool = False"},{name:"safe_serialization",val:": bool = True"},{name:"revision",val:": str = None"},{name:"commit_description",val:": str = None"},{name:"tags",val:": Optional = None"},{name:"**deprecated_kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizer.push_to_hub.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The name of the repository you want to push your tokenizer to. It should contain your organization name
when pushing to a given organization.`,name:"repo_id"},{anchor:"transformers.PreTrainedTokenizer.push_to_hub.use_temp_dir",description:`<strong>use_temp_dir</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to use a temporary directory to store the files saved before they are pushed to the Hub.
Will default to <code>True</code> if there is no directory named like <code>repo_id</code>, <code>False</code> otherwise.`,name:"use_temp_dir"},{anchor:"transformers.PreTrainedTokenizer.push_to_hub.commit_message",description:`<strong>commit_message</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Message to commit while pushing. Will default to <code>&quot;Upload tokenizer&quot;</code>.`,name:"commit_message"},{anchor:"transformers.PreTrainedTokenizer.push_to_hub.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not the repository created should be private.`,name:"private"},{anchor:"transformers.PreTrainedTokenizer.push_to_hub.token",description:`<strong>token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
The token to use as HTTP bearer authorization for remote files. If <code>True</code>, will use the token generated
when running <code>huggingface-cli login</code> (stored in <code>~/.huggingface</code>). Will default to <code>True</code> if <code>repo_url</code>
is not specified.`,name:"token"},{anchor:"transformers.PreTrainedTokenizer.push_to_hub.max_shard_size",description:`<strong>max_shard_size</strong> (<code>int</code> or <code>str</code>, <em>optional</em>, defaults to <code>&quot;5GB&quot;</code>) &#x2014;
Only applicable for models. The maximum size for a checkpoint before being sharded. Checkpoints shard
will then be each of size lower than this size. If expressed as a string, needs to be digits followed
by a unit (like <code>&quot;5MB&quot;</code>). We default it to <code>&quot;5GB&quot;</code> so that users can easily load models on free-tier
Google Colab instances without any CPU OOM issues.`,name:"max_shard_size"},{anchor:"transformers.PreTrainedTokenizer.push_to_hub.create_pr",description:`<strong>create_pr</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to create a PR with the uploaded files or directly commit.`,name:"create_pr"},{anchor:"transformers.PreTrainedTokenizer.push_to_hub.safe_serialization",description:`<strong>safe_serialization</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to convert the model weights in safetensors format for safer serialization.`,name:"safe_serialization"},{anchor:"transformers.PreTrainedTokenizer.push_to_hub.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Branch to push the uploaded files to.`,name:"revision"},{anchor:"transformers.PreTrainedTokenizer.push_to_hub.commit_description",description:`<strong>commit_description</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The description of the commit that will be created`,name:"commit_description"},{anchor:"transformers.PreTrainedTokenizer.push_to_hub.tags",description:`<strong>tags</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
List of tags to push on the Hub.`,name:"tags"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/utils/hub.py#L768"}}),de=new Oi({props:{anchor:"transformers.PreTrainedTokenizer.push_to_hub.example",$$slots:{default:[td]},$$scope:{ctx:U}}}),He=new T({props:{name:"convert_ids_to_tokens",anchor:"transformers.PreTrainedTokenizer.convert_ids_to_tokens",parameters:[{name:"ids",val:": Union"},{name:"skip_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizer.convert_ids_to_tokens.ids",description:`<strong>ids</strong> (<code>int</code> or <code>List[int]</code>) &#x2014;
The token id (or token ids) to convert to tokens.`,name:"ids"},{anchor:"transformers.PreTrainedTokenizer.convert_ids_to_tokens.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils.py#L953",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The decoded token(s).</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>str</code> or <code>List[str]</code></p>
`}}),Ae=new T({props:{name:"convert_tokens_to_ids",anchor:"transformers.PreTrainedTokenizer.convert_tokens_to_ids",parameters:[{name:"tokens",val:": Union"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizer.convert_tokens_to_ids.tokens",description:"<strong>tokens</strong> (<code>str</code> or <code>List[str]</code>) &#x2014; One or several token(s) to convert to token id(s).",name:"tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils.py#L630",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The token id or list of token ids.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>int</code> or <code>List[int]</code></p>
`}}),Ue=new T({props:{name:"get_added_vocab",anchor:"transformers.PreTrainedTokenizer.get_added_vocab",parameters:[],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils.py#L415",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The added tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>Dict[str, int]</code></p>
`}}),Se=new T({props:{name:"num_special_tokens_to_add",anchor:"transformers.PreTrainedTokenizer.num_special_tokens_to_add",parameters:[{name:"pair",val:": bool = False"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizer.num_special_tokens_to_add.pair",description:`<strong>pair</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the number of added tokens should be computed in the case of a sequence pair or a single
sequence.`,name:"pair"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils.py#L518",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>Number of special tokens added to sequences.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>int</code></p>
`}}),me=new Qi({props:{$$slots:{default:[nd]},$$scope:{ctx:U}}}),Ve=new T({props:{name:"prepare_for_tokenization",anchor:"transformers.PreTrainedTokenizer.prepare_for_tokenization",parameters:[{name:"text",val:": str"},{name:"is_split_into_words",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizer.prepare_for_tokenization.text",description:`<strong>text</strong> (<code>str</code>) &#x2014;
The text to prepare.`,name:"text"},{anchor:"transformers.PreTrainedTokenizer.prepare_for_tokenization.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.PreTrainedTokenizer.prepare_for_tokenization.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, Any]</code>, <em>optional</em>) &#x2014;
Keyword arguments to use for the tokenization.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils.py#L891",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The prepared text and the unused kwargs.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>Tuple[str, Dict[str, Any]]</code></p>
`}}),Re=new T({props:{name:"tokenize",anchor:"transformers.PreTrainedTokenizer.tokenize",parameters:[{name:"text",val:": str"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizer.tokenize.text",description:`<strong>text</strong> (<code>str</code>) &#x2014;
The sequence to be encoded.`,name:"text"},{anchor:"transformers.PreTrainedTokenizer.tokenize.*kwargs",description:`*<strong>*kwargs</strong> (additional keyword arguments) &#x2014;
Passed along to the model-specific <code>prepare_for_tokenization</code> preprocessing method.`,name:"*kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils.py#L541",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The list of tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[str]</code></p>
`}}),Je=new Ro({props:{title:"PreTrainedTokenizerFast",local:"transformers.PreTrainedTokenizerFast",headingTag:"h2"}}),Oe=new T({props:{name:"class transformers.PreTrainedTokenizerFast",anchor:"transformers.PreTrainedTokenizerFast",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerFast.model_max_length",description:`<strong>model_max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The maximum length (in number of tokens) for the inputs to the transformer model. When the tokenizer is
loaded with <a href="/docs/transformers/main/ja/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.from_pretrained">from_pretrained()</a>, this will be set to the
value stored for the associated model in <code>max_model_input_sizes</code> (see above). If no value is provided, will
default to VERY_LARGE_INTEGER (<code>int(1e30)</code>).`,name:"model_max_length"},{anchor:"transformers.PreTrainedTokenizerFast.padding_side",description:`<strong>padding_side</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The side on which the model should have padding applied. Should be selected between [&#x2018;right&#x2019;, &#x2018;left&#x2019;].
Default value is picked from the class attribute of the same name.`,name:"padding_side"},{anchor:"transformers.PreTrainedTokenizerFast.truncation_side",description:`<strong>truncation_side</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The side on which the model should have truncation applied. Should be selected between [&#x2018;right&#x2019;, &#x2018;left&#x2019;].
Default value is picked from the class attribute of the same name.`,name:"truncation_side"},{anchor:"transformers.PreTrainedTokenizerFast.chat_template",description:`<strong>chat_template</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A Jinja template string that will be used to format lists of chat messages. See
<a href="https://huggingface.co/docs/transformers/chat_templating" rel="nofollow">https://huggingface.co/docs/transformers/chat_templating</a> for a full description.`,name:"chat_template"},{anchor:"transformers.PreTrainedTokenizerFast.model_input_names",description:`<strong>model_input_names</strong> (<code>List[string]</code>, <em>optional</em>) &#x2014;
The list of inputs accepted by the forward pass of the model (like <code>&quot;token_type_ids&quot;</code> or
<code>&quot;attention_mask&quot;</code>). Default value is picked from the class attribute of the same name.`,name:"model_input_names"},{anchor:"transformers.PreTrainedTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token representing the beginning of a sentence. Will be associated to <code>self.bos_token</code> and
<code>self.bos_token_id</code>.`,name:"bos_token"},{anchor:"transformers.PreTrainedTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token representing the end of a sentence. Will be associated to <code>self.eos_token</code> and
<code>self.eos_token_id</code>.`,name:"eos_token"},{anchor:"transformers.PreTrainedTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token representing an out-of-vocabulary token. Will be associated to <code>self.unk_token</code> and
<code>self.unk_token_id</code>.`,name:"unk_token"},{anchor:"transformers.PreTrainedTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token separating two different sentences in the same input (used by BERT for instance). Will be
associated to <code>self.sep_token</code> and <code>self.sep_token_id</code>.`,name:"sep_token"},{anchor:"transformers.PreTrainedTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token used to make arrays of tokens the same size for batching purpose. Will then be ignored by
attention mechanisms or loss computation. Will be associated to <code>self.pad_token</code> and <code>self.pad_token_id</code>.`,name:"pad_token"},{anchor:"transformers.PreTrainedTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token representing the class of the input (used by BERT for instance). Will be associated to
<code>self.cls_token</code> and <code>self.cls_token_id</code>.`,name:"cls_token"},{anchor:"transformers.PreTrainedTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A special token representing a masked token (used by masked-language modeling pretraining objectives, like
BERT). Will be associated to <code>self.mask_token</code> and <code>self.mask_token_id</code>.`,name:"mask_token"},{anchor:"transformers.PreTrainedTokenizerFast.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (tuple or list of <code>str</code> or <code>tokenizers.AddedToken</code>, <em>optional</em>) &#x2014;
A tuple or a list of additional special tokens. Add them here to ensure they are skipped when decoding with
<code>skip_special_tokens</code> is set to True. If they are not part of the vocabulary, they will be added at the end
of the vocabulary.`,name:"additional_special_tokens"},{anchor:"transformers.PreTrainedTokenizerFast.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should cleanup the spaces that were added when splitting the input text during the
tokenization process.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.PreTrainedTokenizerFast.split_special_tokens",description:`<strong>split_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the special tokens should be split during the tokenization process. The default behavior is
to not split special tokens. This means that if <code>&lt;s&gt;</code> is the <code>bos_token</code>, then <code>tokenizer.tokenize(&quot;&lt;s&gt;&quot;) = [&apos;&lt;s&gt;</code>]. Otherwise, if <code>split_special_tokens=True</code>, then <code>tokenizer.tokenize(&quot;&lt;s&gt;&quot;)</code> will be give <code>[&apos;&lt;&apos;, &apos;s&apos;, &apos;&gt;&apos;]</code>. This argument is only supported for <code>slow</code> tokenizers for the moment.`,name:"split_special_tokens"},{anchor:"transformers.PreTrainedTokenizerFast.tokenizer_object",description:`<strong>tokenizer_object</strong> (<code>tokenizers.Tokenizer</code>) &#x2014;
A <code>tokenizers.Tokenizer</code> object from &#x1F917; tokenizers to instantiate from. See <a href="../fast_tokenizers">Using tokenizers from &#x1F917;
tokenizers</a> for more information.`,name:"tokenizer_object"},{anchor:"transformers.PreTrainedTokenizerFast.tokenizer_file",description:`<strong>tokenizer_file</strong> (<code>str</code>) &#x2014;
A path to a local JSON file representing a previously serialized <code>tokenizers.Tokenizer</code> object from &#x1F917;
tokenizers.`,name:"tokenizer_file"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_fast.py#L77"}}),Ze=new T({props:{name:"__call__",anchor:"transformers.PreTrainedTokenizerFast.__call__",parameters:[{name:"text",val:": Union = None"},{name:"text_pair",val:": Union = None"},{name:"text_target",val:": Union = None"},{name:"text_pair_target",val:": Union = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": Union = False"},{name:"truncation",val:": Union = None"},{name:"max_length",val:": Optional = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": bool = False"},{name:"pad_to_multiple_of",val:": Optional = None"},{name:"return_tensors",val:": Union = None"},{name:"return_token_type_ids",val:": Optional = None"},{name:"return_attention_mask",val:": Optional = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerFast.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string or a list of strings
(pretokenized string). If the sequences are provided as list of strings (pretokenized), you must set
<code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text"},{anchor:"transformers.PreTrainedTokenizerFast.__call__.text_pair",description:`<strong>text_pair</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string or a list of strings
(pretokenized string). If the sequences are provided as list of strings (pretokenized), you must set
<code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text_pair"},{anchor:"transformers.PreTrainedTokenizerFast.__call__.text_target",description:`<strong>text_target</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences to be encoded as target texts. Each sequence can be a string or a
list of strings (pretokenized string). If the sequences are provided as list of strings (pretokenized),
you must set <code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text_target"},{anchor:"transformers.PreTrainedTokenizerFast.__call__.text_pair_target",description:`<strong>text_pair_target</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences to be encoded as target texts. Each sequence can be a string or a
list of strings (pretokenized string). If the sequences are provided as list of strings (pretokenized),
you must set <code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text_pair_target"},{anchor:"transformers.PreTrainedTokenizerFast.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to add special tokens when encoding the sequences. This will use the underlying
<code>PretrainedTokenizerBase.build_inputs_with_special_tokens</code> function, which defines which tokens are
automatically added to the input ids. This is usefull if you want to add <code>bos</code> or <code>eos</code> tokens
automatically.`,name:"add_special_tokens"},{anchor:"transformers.PreTrainedTokenizerFast.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/ja/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.PreTrainedTokenizerFast.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/ja/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.PreTrainedTokenizerFast.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.PreTrainedTokenizerFast.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.PreTrainedTokenizerFast.__call__.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.PreTrainedTokenizerFast.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. Requires <code>padding</code> to be activated.
This is especially useful to enable the use of Tensor Cores on NVIDIA hardware with compute capability
<code>&gt;= 7.5</code> (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.PreTrainedTokenizerFast.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/ja/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.PreTrainedTokenizerFast.__call__.return_token_type_ids",description:`<strong>return_token_type_ids</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return token type IDs. If left to the default, will return the token type IDs according to
the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"return_token_type_ids"},{anchor:"transformers.PreTrainedTokenizerFast.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"return_attention_mask"},{anchor:"transformers.PreTrainedTokenizerFast.__call__.return_overflowing_tokens",description:`<strong>return_overflowing_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return overflowing token sequences. If a pair of sequences of input ids (or a batch
of pairs) is provided with <code>truncation_strategy = longest_first</code> or <code>True</code>, an error is raised instead
of returning overflowing tokens.`,name:"return_overflowing_tokens"},{anchor:"transformers.PreTrainedTokenizerFast.__call__.return_special_tokens_mask",description:`<strong>return_special_tokens_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return special tokens mask information.`,name:"return_special_tokens_mask"},{anchor:"transformers.PreTrainedTokenizerFast.__call__.return_offsets_mapping",description:`<strong>return_offsets_mapping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return <code>(char_start, char_end)</code> for each token.</p>
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.PreTrainedTokenizerFast.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.PreTrainedTokenizerFast.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to print more information and warnings.
**kwargs &#x2014; passed to the <code>self.tokenize()</code> method`,name:"verbose"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L2755",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.BatchEncoding"
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
  href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),Xe=new T({props:{name:"apply_chat_template",anchor:"transformers.PreTrainedTokenizerFast.apply_chat_template",parameters:[{name:"conversation",val:": Union"},{name:"chat_template",val:": Optional = None"},{name:"add_generation_prompt",val:": bool = False"},{name:"tokenize",val:": bool = True"},{name:"padding",val:": bool = False"},{name:"truncation",val:": bool = False"},{name:"max_length",val:": Optional = None"},{name:"return_tensors",val:": Union = None"},{name:"return_dict",val:": bool = False"},{name:"**tokenizer_kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerFast.apply_chat_template.conversation",description:`<strong>conversation</strong> (Union[List[Dict[str, str]], &#x201C;Conversation&#x201D;]) &#x2014; A Conversation object or list of dicts
with &#x201C;role&#x201D; and &#x201C;content&#x201D; keys, representing the chat history so far.`,name:"conversation"},{anchor:"transformers.PreTrainedTokenizerFast.apply_chat_template.chat_template",description:`<strong>chat_template</strong> (str, <em>optional</em>) &#x2014; A Jinja template to use for this conversion. If
this is not passed, the model&#x2019;s default chat template will be used instead.`,name:"chat_template"},{anchor:"transformers.PreTrainedTokenizerFast.apply_chat_template.add_generation_prompt",description:`<strong>add_generation_prompt</strong> (bool, <em>optional</em>) &#x2014; Whether to end the prompt with the token(s) that indicate
the start of an assistant message. This is useful when you want to generate a response from the model.
Note that this argument will be passed to the chat template, and so it must be supported in the
template for this argument to have any effect.`,name:"add_generation_prompt"},{anchor:"transformers.PreTrainedTokenizerFast.apply_chat_template.tokenize",description:`<strong>tokenize</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
Whether to tokenize the output. If <code>False</code>, the output will be a string.`,name:"tokenize"},{anchor:"transformers.PreTrainedTokenizerFast.apply_chat_template.padding",description:`<strong>padding</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether to pad sequences to the maximum length. Has no effect if tokenize is <code>False</code>.`,name:"padding"},{anchor:"transformers.PreTrainedTokenizerFast.apply_chat_template.truncation",description:`<strong>truncation</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether to truncate sequences at the maximum length. Has no effect if tokenize is <code>False</code>.`,name:"truncation"},{anchor:"transformers.PreTrainedTokenizerFast.apply_chat_template.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Maximum length (in tokens) to use for padding or truncation. Has no effect if tokenize is <code>False</code>. If
not specified, the tokenizer&#x2019;s <code>max_length</code> attribute will be used as a default.`,name:"max_length"},{anchor:"transformers.PreTrainedTokenizerFast.apply_chat_template.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/ja/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors of a particular framework. Has no effect if tokenize is <code>False</code>. Acceptable
values are:<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.Tensor</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return NumPy <code>np.ndarray</code> objects.</li>
<li><code>&apos;jax&apos;</code>: Return JAX <code>jnp.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.PreTrainedTokenizerFast.apply_chat_template.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to return a dictionary with named outputs. Has no effect if tokenize is <code>False</code>.
**tokenizer_kwargs &#x2014; Additional kwargs to pass to the tokenizer.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L1678",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list of token ids representing the tokenized chat so far, including control tokens. This
output is ready to pass to the model, either directly or via methods like <code>generate()</code>.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Ge=new T({props:{name:"batch_decode",anchor:"transformers.PreTrainedTokenizerFast.batch_decode",parameters:[{name:"sequences",val:": Union"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerFast.batch_decode.sequences",description:`<strong>sequences</strong> (<code>Union[List[int], List[List[int]], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"sequences"},{anchor:"transformers.PreTrainedTokenizerFast.batch_decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.PreTrainedTokenizerFast.batch_decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to clean up the tokenization spaces. If <code>None</code>, will default to
<code>self.clean_up_tokenization_spaces</code>.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.PreTrainedTokenizerFast.batch_decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L3718",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The list of decoded sentences.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[str]</code></p>
`}}),Ye=new T({props:{name:"decode",anchor:"transformers.PreTrainedTokenizerFast.decode",parameters:[{name:"token_ids",val:": Union"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerFast.decode.token_ids",description:`<strong>token_ids</strong> (<code>Union[int, List[int], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"token_ids"},{anchor:"transformers.PreTrainedTokenizerFast.decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.PreTrainedTokenizerFast.decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to clean up the tokenization spaces. If <code>None</code>, will default to
<code>self.clean_up_tokenization_spaces</code>.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.PreTrainedTokenizerFast.decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L3752",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The decoded sentence.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>str</code></p>
`}}),Ke=new T({props:{name:"encode",anchor:"transformers.PreTrainedTokenizerFast.encode",parameters:[{name:"text",val:": Union"},{name:"text_pair",val:": Union = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": Union = False"},{name:"truncation",val:": Union = None"},{name:"max_length",val:": Optional = None"},{name:"stride",val:": int = 0"},{name:"return_tensors",val:": Union = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerFast.encode.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code> or <code>List[int]</code>) &#x2014;
The first sequence to be encoded. This can be a string, a list of strings (tokenized string using the
<code>tokenize</code> method) or a list of integers (tokenized string ids using the <code>convert_tokens_to_ids</code>
method).`,name:"text"},{anchor:"transformers.PreTrainedTokenizerFast.encode.text_pair",description:`<strong>text_pair</strong> (<code>str</code>, <code>List[str]</code> or <code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second sequence to be encoded. This can be a string, a list of strings (tokenized string using
the <code>tokenize</code> method) or a list of integers (tokenized string ids using the <code>convert_tokens_to_ids</code>
method).`,name:"text_pair"},{anchor:"transformers.PreTrainedTokenizerFast.encode.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to add special tokens when encoding the sequences. This will use the underlying
<code>PretrainedTokenizerBase.build_inputs_with_special_tokens</code> function, which defines which tokens are
automatically added to the input ids. This is usefull if you want to add <code>bos</code> or <code>eos</code> tokens
automatically.`,name:"add_special_tokens"},{anchor:"transformers.PreTrainedTokenizerFast.encode.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/ja/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.PreTrainedTokenizerFast.encode.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/ja/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.PreTrainedTokenizerFast.encode.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.PreTrainedTokenizerFast.encode.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.PreTrainedTokenizerFast.encode.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.PreTrainedTokenizerFast.encode.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. Requires <code>padding</code> to be activated.
This is especially useful to enable the use of Tensor Cores on NVIDIA hardware with compute capability
<code>&gt;= 7.5</code> (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.PreTrainedTokenizerFast.encode.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/ja/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>
<p>**kwargs &#x2014; Passed along to the <code>.tokenize()</code> method.`,name:"return_tensors"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L2563",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The tokenized ids of the text.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code>, <code>torch.Tensor</code>, <code>tf.Tensor</code> or <code>np.ndarray</code></p>
`}}),et=new T({props:{name:"push_to_hub",anchor:"transformers.PreTrainedTokenizerFast.push_to_hub",parameters:[{name:"repo_id",val:": str"},{name:"use_temp_dir",val:": Optional = None"},{name:"commit_message",val:": Optional = None"},{name:"private",val:": Optional = None"},{name:"token",val:": Union = None"},{name:"max_shard_size",val:": Union = '5GB'"},{name:"create_pr",val:": bool = False"},{name:"safe_serialization",val:": bool = True"},{name:"revision",val:": str = None"},{name:"commit_description",val:": str = None"},{name:"tags",val:": Optional = None"},{name:"**deprecated_kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerFast.push_to_hub.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
The name of the repository you want to push your tokenizer to. It should contain your organization name
when pushing to a given organization.`,name:"repo_id"},{anchor:"transformers.PreTrainedTokenizerFast.push_to_hub.use_temp_dir",description:`<strong>use_temp_dir</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to use a temporary directory to store the files saved before they are pushed to the Hub.
Will default to <code>True</code> if there is no directory named like <code>repo_id</code>, <code>False</code> otherwise.`,name:"use_temp_dir"},{anchor:"transformers.PreTrainedTokenizerFast.push_to_hub.commit_message",description:`<strong>commit_message</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Message to commit while pushing. Will default to <code>&quot;Upload tokenizer&quot;</code>.`,name:"commit_message"},{anchor:"transformers.PreTrainedTokenizerFast.push_to_hub.private",description:`<strong>private</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not the repository created should be private.`,name:"private"},{anchor:"transformers.PreTrainedTokenizerFast.push_to_hub.token",description:`<strong>token</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>) &#x2014;
The token to use as HTTP bearer authorization for remote files. If <code>True</code>, will use the token generated
when running <code>huggingface-cli login</code> (stored in <code>~/.huggingface</code>). Will default to <code>True</code> if <code>repo_url</code>
is not specified.`,name:"token"},{anchor:"transformers.PreTrainedTokenizerFast.push_to_hub.max_shard_size",description:`<strong>max_shard_size</strong> (<code>int</code> or <code>str</code>, <em>optional</em>, defaults to <code>&quot;5GB&quot;</code>) &#x2014;
Only applicable for models. The maximum size for a checkpoint before being sharded. Checkpoints shard
will then be each of size lower than this size. If expressed as a string, needs to be digits followed
by a unit (like <code>&quot;5MB&quot;</code>). We default it to <code>&quot;5GB&quot;</code> so that users can easily load models on free-tier
Google Colab instances without any CPU OOM issues.`,name:"max_shard_size"},{anchor:"transformers.PreTrainedTokenizerFast.push_to_hub.create_pr",description:`<strong>create_pr</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to create a PR with the uploaded files or directly commit.`,name:"create_pr"},{anchor:"transformers.PreTrainedTokenizerFast.push_to_hub.safe_serialization",description:`<strong>safe_serialization</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to convert the model weights in safetensors format for safer serialization.`,name:"safe_serialization"},{anchor:"transformers.PreTrainedTokenizerFast.push_to_hub.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Branch to push the uploaded files to.`,name:"revision"},{anchor:"transformers.PreTrainedTokenizerFast.push_to_hub.commit_description",description:`<strong>commit_description</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The description of the commit that will be created`,name:"commit_description"},{anchor:"transformers.PreTrainedTokenizerFast.push_to_hub.tags",description:`<strong>tags</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
List of tags to push on the Hub.`,name:"tags"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/utils/hub.py#L768"}}),_e=new Oi({props:{anchor:"transformers.PreTrainedTokenizerFast.push_to_hub.example",$$slots:{default:[od]},$$scope:{ctx:U}}}),tt=new T({props:{name:"convert_ids_to_tokens",anchor:"transformers.PreTrainedTokenizerFast.convert_ids_to_tokens",parameters:[{name:"ids",val:": Union"},{name:"skip_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerFast.convert_ids_to_tokens.ids",description:`<strong>ids</strong> (<code>int</code> or <code>List[int]</code>) &#x2014;
The token id (or token ids) to convert to tokens.`,name:"ids"},{anchor:"transformers.PreTrainedTokenizerFast.convert_ids_to_tokens.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_fast.py#L369",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The decoded token(s).</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>str</code> or <code>List[str]</code></p>
`}}),nt=new T({props:{name:"convert_tokens_to_ids",anchor:"transformers.PreTrainedTokenizerFast.convert_tokens_to_ids",parameters:[{name:"tokens",val:": Union"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerFast.convert_tokens_to_ids.tokens",description:"<strong>tokens</strong> (<code>str</code> or <code>List[str]</code>) &#x2014; One or several token(s) to convert to token id(s).",name:"tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_fast.py#L314",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The token id or list of token ids.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>int</code> or <code>List[int]</code></p>
`}}),ot=new T({props:{name:"get_added_vocab",anchor:"transformers.PreTrainedTokenizerFast.get_added_vocab",parameters:[],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_fast.py#L238",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The added tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>Dict[str, int]</code></p>
`}}),rt=new T({props:{name:"num_special_tokens_to_add",anchor:"transformers.PreTrainedTokenizerFast.num_special_tokens_to_add",parameters:[{name:"pair",val:": bool = False"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerFast.num_special_tokens_to_add.pair",description:`<strong>pair</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the number of added tokens should be computed in the case of a sequence pair or a single
sequence.`,name:"pair"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_fast.py#L348",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>Number of special tokens added to sequences.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>int</code></p>
`}}),xe=new Qi({props:{$$slots:{default:[rd]},$$scope:{ctx:U}}}),at=new T({props:{name:"set_truncation_and_padding",anchor:"transformers.PreTrainedTokenizerFast.set_truncation_and_padding",parameters:[{name:"padding_strategy",val:": PaddingStrategy"},{name:"truncation_strategy",val:": TruncationStrategy"},{name:"max_length",val:": int"},{name:"stride",val:": int"},{name:"pad_to_multiple_of",val:": Optional"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerFast.set_truncation_and_padding.padding_strategy",description:`<strong>padding_strategy</strong> (<a href="/docs/transformers/main/ja/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>) &#x2014;
The kind of padding that will be applied to the input`,name:"padding_strategy"},{anchor:"transformers.PreTrainedTokenizerFast.set_truncation_and_padding.truncation_strategy",description:`<strong>truncation_strategy</strong> (<a href="/docs/transformers/main/ja/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>) &#x2014;
The kind of truncation that will be applied to the input`,name:"truncation_strategy"},{anchor:"transformers.PreTrainedTokenizerFast.set_truncation_and_padding.max_length",description:`<strong>max_length</strong> (<code>int</code>) &#x2014;
The maximum size of a sequence.`,name:"max_length"},{anchor:"transformers.PreTrainedTokenizerFast.set_truncation_and_padding.stride",description:`<strong>stride</strong> (<code>int</code>) &#x2014;
The stride to use when handling overflow.`,name:"stride"},{anchor:"transformers.PreTrainedTokenizerFast.set_truncation_and_padding.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability <code>&gt;= 7.5</code> (Volta).`,name:"pad_to_multiple_of"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_fast.py#L398"}}),st=new T({props:{name:"train_new_from_iterator",anchor:"transformers.PreTrainedTokenizerFast.train_new_from_iterator",parameters:[{name:"text_iterator",val:""},{name:"vocab_size",val:""},{name:"length",val:" = None"},{name:"new_special_tokens",val:" = None"},{name:"special_tokens_map",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerFast.train_new_from_iterator.text_iterator",description:`<strong>text_iterator</strong> (generator of <code>List[str]</code>) &#x2014;
The training corpus. Should be a generator of batches of texts, for instance a list of lists of texts
if you have everything in memory.`,name:"text_iterator"},{anchor:"transformers.PreTrainedTokenizerFast.train_new_from_iterator.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>) &#x2014;
The size of the vocabulary you want for your tokenizer.`,name:"vocab_size"},{anchor:"transformers.PreTrainedTokenizerFast.train_new_from_iterator.length",description:`<strong>length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The total number of sequences in the iterator. This is used to provide meaningful progress tracking`,name:"length"},{anchor:"transformers.PreTrainedTokenizerFast.train_new_from_iterator.new_special_tokens",description:`<strong>new_special_tokens</strong> (list of <code>str</code> or <code>AddedToken</code>, <em>optional</em>) &#x2014;
A list of new special tokens to add to the tokenizer you are training.`,name:"new_special_tokens"},{anchor:"transformers.PreTrainedTokenizerFast.train_new_from_iterator.special_tokens_map",description:`<strong>special_tokens_map</strong> (<code>Dict[str, str]</code>, <em>optional</em>) &#x2014;
If you want to rename some of the special tokens this tokenizer uses, pass along a mapping old special
token name to new special token name in this argument.`,name:"special_tokens_map"},{anchor:"transformers.PreTrainedTokenizerFast.train_new_from_iterator.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, Any]</code>, <em>optional</em>) &#x2014;
Additional keyword arguments passed along to the trainer from the &#x1F917; Tokenizers library.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_fast.py#L687",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A new tokenizer of the same type as the original one, trained on
<code>text_iterator</code>.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"
>PreTrainedTokenizerFast</a></p>
`}}),it=new Ro({props:{title:"BatchEncoding",local:"transformers.BatchEncoding",headingTag:"h2"}}),dt=new T({props:{name:"class transformers.BatchEncoding",anchor:"transformers.BatchEncoding",parameters:[{name:"data",val:": Optional = None"},{name:"encoding",val:": Union = None"},{name:"tensor_type",val:": Union = None"},{name:"prepend_batch_axis",val:": bool = False"},{name:"n_sequences",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.BatchEncoding.data",description:`<strong>data</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of lists/arrays/tensors returned by the <code>__call__</code>/<code>encode_plus</code>/<code>batch_encode_plus</code> methods
(&#x2018;input_ids&#x2019;, &#x2018;attention_mask&#x2019;, etc.).`,name:"data"},{anchor:"transformers.BatchEncoding.encoding",description:`<strong>encoding</strong> (<code>tokenizers.Encoding</code> or <code>Sequence[tokenizers.Encoding]</code>, <em>optional</em>) &#x2014;
If the tokenizer is a fast tokenizer which outputs additional information like mapping from word/character
space to token space the <code>tokenizers.Encoding</code> instance or list of instance (for batches) hold this
information.`,name:"encoding"},{anchor:"transformers.BatchEncoding.tensor_type",description:`<strong>tensor_type</strong> (<code>Union[None, str, TensorType]</code>, <em>optional</em>) &#x2014;
You can give a tensor_type here to convert the lists of integers in PyTorch/TensorFlow/Numpy Tensors at
initialization.`,name:"tensor_type"},{anchor:"transformers.BatchEncoding.prepend_batch_axis",description:`<strong>prepend_batch_axis</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add a batch axis when converting to tensors (see <code>tensor_type</code> above).`,name:"prepend_batch_axis"},{anchor:"transformers.BatchEncoding.n_sequences",description:`<strong>n_sequences</strong> (<code>Optional[int]</code>, <em>optional</em>) &#x2014;
You can give a tensor_type here to convert the lists of integers in PyTorch/TensorFlow/Numpy Tensors at
initialization.`,name:"n_sequences"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L176"}}),ct=new T({props:{name:"char_to_token",anchor:"transformers.BatchEncoding.char_to_token",parameters:[{name:"batch_or_char_index",val:": int"},{name:"char_index",val:": Optional = None"},{name:"sequence_index",val:": int = 0"}],parametersDescription:[{anchor:"transformers.BatchEncoding.char_to_token.batch_or_char_index",description:`<strong>batch_or_char_index</strong> (<code>int</code>) &#x2014;
Index of the sequence in the batch. If the batch only comprise one sequence, this can be the index of
the word in the sequence`,name:"batch_or_char_index"},{anchor:"transformers.BatchEncoding.char_to_token.char_index",description:`<strong>char_index</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If a batch index is provided in <em>batch_or_token_index</em>, this can be the index of the word in the
sequence.`,name:"char_index"},{anchor:"transformers.BatchEncoding.char_to_token.sequence_index",description:`<strong>sequence_index</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If pair of sequences are encoded in the batch this can be used to specify which sequence in the pair (0
or 1) the provided character index belongs to.`,name:"sequence_index"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L555",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>Index of the token.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>int</code></p>
`}}),lt=new T({props:{name:"char_to_word",anchor:"transformers.BatchEncoding.char_to_word",parameters:[{name:"batch_or_char_index",val:": int"},{name:"char_index",val:": Optional = None"},{name:"sequence_index",val:": int = 0"}],parametersDescription:[{anchor:"transformers.BatchEncoding.char_to_word.batch_or_char_index",description:`<strong>batch_or_char_index</strong> (<code>int</code>) &#x2014;
Index of the sequence in the batch. If the batch only comprise one sequence, this can be the index of
the character in the original string.`,name:"batch_or_char_index"},{anchor:"transformers.BatchEncoding.char_to_word.char_index",description:`<strong>char_index</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If a batch index is provided in <em>batch_or_token_index</em>, this can be the index of the character in the
original string.`,name:"char_index"},{anchor:"transformers.BatchEncoding.char_to_word.sequence_index",description:`<strong>sequence_index</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If pair of sequences are encoded in the batch this can be used to specify which sequence in the pair (0
or 1) the provided character index belongs to.`,name:"sequence_index"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L641",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>Index or indices of the associated encoded token(s).</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>int</code> or <code>List[int]</code></p>
`}}),pt=new T({props:{name:"convert_to_tensors",anchor:"transformers.BatchEncoding.convert_to_tensors",parameters:[{name:"tensor_type",val:": Union = None"},{name:"prepend_batch_axis",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BatchEncoding.convert_to_tensors.tensor_type",description:`<strong>tensor_type</strong> (<code>str</code> or <a href="/docs/transformers/main/ja/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
The type of tensors to use. If <code>str</code>, should be one of the values of the enum <a href="/docs/transformers/main/ja/internal/file_utils#transformers.TensorType">TensorType</a>. If
<code>None</code>, no modification is done.`,name:"tensor_type"},{anchor:"transformers.BatchEncoding.convert_to_tensors.prepend_batch_axis",description:`<strong>prepend_batch_axis</strong> (<code>int</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add the batch dimension during the conversion.`,name:"prepend_batch_axis"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L680"}}),mt=new T({props:{name:"sequence_ids",anchor:"transformers.BatchEncoding.sequence_ids",parameters:[{name:"batch_index",val:": int = 0"}],parametersDescription:[{anchor:"transformers.BatchEncoding.sequence_ids.batch_index",description:"<strong>batch_index</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014; The index to access in the batch.",name:"batch_index"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L319",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list indicating the sequence id corresponding to each token. Special tokens added
by the tokenizer are mapped to <code>None</code> and other tokens are mapped to the index of their corresponding
sequence.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[Optional[int]]</code></p>
`}}),ht=new T({props:{name:"to",anchor:"transformers.BatchEncoding.to",parameters:[{name:"device",val:": Union"}],parametersDescription:[{anchor:"transformers.BatchEncoding.to.device",description:"<strong>device</strong> (<code>str</code> or <code>torch.device</code>) &#x2014; The device to put the tensors on.",name:"device"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L773",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The same instance after modification.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/ja/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),ut=new T({props:{name:"token_to_chars",anchor:"transformers.BatchEncoding.token_to_chars",parameters:[{name:"batch_or_token_index",val:": int"},{name:"token_index",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.BatchEncoding.token_to_chars.batch_or_token_index",description:`<strong>batch_or_token_index</strong> (<code>int</code>) &#x2014;
Index of the sequence in the batch. If the batch only comprise one sequence, this can be the index of
the token in the sequence.`,name:"batch_or_token_index"},{anchor:"transformers.BatchEncoding.token_to_chars.token_index",description:`<strong>token_index</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If a batch index is provided in <em>batch_or_token_index</em>, this can be the index of the token or tokens in
the sequence.`,name:"token_index"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L516",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>Span of characters in the original string, or None, if the token
(e.g. <s>, </s>) doesn’t correspond to any chars in the origin string.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/ja/internal/tokenization_utils#transformers.CharSpan"
>CharSpan</a></p>
`}}),ft=new T({props:{name:"token_to_sequence",anchor:"transformers.BatchEncoding.token_to_sequence",parameters:[{name:"batch_or_token_index",val:": int"},{name:"token_index",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.BatchEncoding.token_to_sequence.batch_or_token_index",description:`<strong>batch_or_token_index</strong> (<code>int</code>) &#x2014;
Index of the sequence in the batch. If the batch only comprises one sequence, this can be the index of
the token in the sequence.`,name:"batch_or_token_index"},{anchor:"transformers.BatchEncoding.token_to_sequence.token_index",description:`<strong>token_index</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If a batch index is provided in <em>batch_or_token_index</em>, this can be the index of the token in the
sequence.`,name:"token_index"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L386",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>Index of the word in the input sequence.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>int</code></p>
`}}),_t=new T({props:{name:"token_to_word",anchor:"transformers.BatchEncoding.token_to_word",parameters:[{name:"batch_or_token_index",val:": int"},{name:"token_index",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.BatchEncoding.token_to_word.batch_or_token_index",description:`<strong>batch_or_token_index</strong> (<code>int</code>) &#x2014;
Index of the sequence in the batch. If the batch only comprise one sequence, this can be the index of
the token in the sequence.`,name:"batch_or_token_index"},{anchor:"transformers.BatchEncoding.token_to_word.token_index",description:`<strong>token_index</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If a batch index is provided in <em>batch_or_token_index</em>, this can be the index of the token in the
sequence.`,name:"token_index"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L425",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>Index of the word in the input sequence.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>int</code></p>
`}}),gt=new T({props:{name:"tokens",anchor:"transformers.BatchEncoding.tokens",parameters:[{name:"batch_index",val:": int = 0"}],parametersDescription:[{anchor:"transformers.BatchEncoding.tokens.batch_index",description:"<strong>batch_index</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014; The index to access in the batch.",name:"batch_index"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L301",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The list of tokens at that index.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[str]</code></p>
`}}),kt=new T({props:{name:"word_ids",anchor:"transformers.BatchEncoding.word_ids",parameters:[{name:"batch_index",val:": int = 0"}],parametersDescription:[{anchor:"transformers.BatchEncoding.word_ids.batch_index",description:"<strong>batch_index</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014; The index to access in the batch.",name:"batch_index"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L367",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list indicating the word corresponding to each token. Special tokens added by the
tokenizer are mapped to <code>None</code> and other tokens are mapped to the index of their corresponding word
(several tokens will be mapped to the same word index if they are parts of that word).</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[Optional[int]]</code></p>
`}}),bt=new T({props:{name:"word_to_chars",anchor:"transformers.BatchEncoding.word_to_chars",parameters:[{name:"batch_or_word_index",val:": int"},{name:"word_index",val:": Optional = None"},{name:"sequence_index",val:": int = 0"}],parametersDescription:[{anchor:"transformers.BatchEncoding.word_to_chars.batch_or_word_index",description:`<strong>batch_or_word_index</strong> (<code>int</code>) &#x2014;
Index of the sequence in the batch. If the batch only comprise one sequence, this can be the index of
the word in the sequence`,name:"batch_or_word_index"},{anchor:"transformers.BatchEncoding.word_to_chars.word_index",description:`<strong>word_index</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If a batch index is provided in <em>batch_or_token_index</em>, this can be the index of the word in the
sequence.`,name:"word_index"},{anchor:"transformers.BatchEncoding.word_to_chars.sequence_index",description:`<strong>sequence_index</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If pair of sequences are encoded in the batch this can be used to specify which sequence in the pair (0
or 1) the provided word index belongs to.`,name:"sequence_index"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L596",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>Span(s) of the associated character or characters in the string. CharSpan
are NamedTuple with:</p>
<ul>
<li>start: index of the first character associated to the token in the original string</li>
<li>end: index of the character following the last character associated to the token in the original
string</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>CharSpan</code> or <code>List[CharSpan]</code></p>
`}}),xt=new T({props:{name:"word_to_tokens",anchor:"transformers.BatchEncoding.word_to_tokens",parameters:[{name:"batch_or_word_index",val:": int"},{name:"word_index",val:": Optional = None"},{name:"sequence_index",val:": int = 0"}],parametersDescription:[{anchor:"transformers.BatchEncoding.word_to_tokens.batch_or_word_index",description:`<strong>batch_or_word_index</strong> (<code>int</code>) &#x2014;
Index of the sequence in the batch. If the batch only comprises one sequence, this can be the index of
the word in the sequence.`,name:"batch_or_word_index"},{anchor:"transformers.BatchEncoding.word_to_tokens.word_index",description:`<strong>word_index</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If a batch index is provided in <em>batch_or_token_index</em>, this can be the index of the word in the
sequence.`,name:"word_index"},{anchor:"transformers.BatchEncoding.word_to_tokens.sequence_index",description:`<strong>sequence_index</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If pair of sequences are encoded in the batch this can be used to specify which sequence in the pair (0
or 1) the provided word index belongs to.`,name:"sequence_index"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L463",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>Span of tokens in the encoded sequence. Returns
<code>None</code> if no tokens correspond to the word. This can happen especially when the token is a special token
that has been used to format the tokenization. For example when we add a class token at the very beginning
of the tokenization.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p>(<a
  href="/docs/transformers/main/ja/internal/tokenization_utils#transformers.TokenSpan"
>TokenSpan</a>, <em>optional</em>)</p>
`}}),Tt=new T({props:{name:"words",anchor:"transformers.BatchEncoding.words",parameters:[{name:"batch_index",val:": int = 0"}],parametersDescription:[{anchor:"transformers.BatchEncoding.words.batch_index",description:"<strong>batch_index</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014; The index to access in the batch.",name:"batch_index"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L343",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list indicating the word corresponding to each token. Special tokens added by the
tokenizer are mapped to <code>None</code> and other tokens are mapped to the index of their corresponding word
(several tokens will be mapped to the same word index if they are parts of that word).</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[Optional[int]]</code></p>
`}}),{c(){b=r("meta"),L=n(),P=r("p"),q=n(),d(F.$$.fragment),z=n(),E=r("p"),E.innerHTML=ls,_o=n(),Pe=r("ol"),Pe.innerHTML=ps,go=n(),qe=r("p"),qe.innerHTML=ms,ko=n(),Ce=r("p"),Ce.innerHTML=hs,bo=n(),Fe=r("ul"),Fe.innerHTML=us,xo=n(),Le=r("p"),Le.innerHTML=fs,To=n(),d(Ie.$$.fragment),vo=n(),f=r("div"),d(De.$$.fragment),Qo=n(),yt=r("p"),yt.textContent=_s,Oo=n(),$t=r("p"),$t.innerHTML=gs,Zo=n(),Pt=r("p"),Pt.textContent=ks,Xo=n(),qt=r("p"),qt.textContent=bs,Go=n(),Ct=r("p"),Ct.textContent=xs,Yo=n(),Ft=r("ul"),Ft.innerHTML=Ts,Ko=n(),ae=r("div"),d(Ee.$$.fragment),er=n(),Lt=r("p"),Lt.textContent=vs,tr=n(),se=r("div"),d(je.$$.fragment),nr=n(),It=r("p"),It.innerHTML=ws,or=n(),ie=r("div"),d(Me.$$.fragment),rr=n(),Dt=r("p"),Dt.textContent=zs,ar=n(),S=r("div"),d(Ne.$$.fragment),sr=n(),Et=r("p"),Et.textContent=ys,ir=n(),jt=r("p"),jt.innerHTML=$s,dr=n(),V=r("div"),d(We.$$.fragment),cr=n(),Mt=r("p"),Mt.textContent=Ps,lr=n(),Nt=r("p"),Nt.innerHTML=qs,pr=n(),R=r("div"),d(Be.$$.fragment),mr=n(),Wt=r("p"),Wt.textContent=Cs,hr=n(),d(de.$$.fragment),ur=n(),ce=r("div"),d(He.$$.fragment),fr=n(),Bt=r("p"),Bt.textContent=Fs,_r=n(),le=r("div"),d(Ae.$$.fragment),gr=n(),Ht=r("p"),Ht.textContent=Ls,kr=n(),pe=r("div"),d(Ue.$$.fragment),br=n(),At=r("p"),At.textContent=Is,xr=n(),J=r("div"),d(Se.$$.fragment),Tr=n(),Ut=r("p"),Ut.textContent=Ds,vr=n(),d(me.$$.fragment),wr=n(),Q=r("div"),d(Ve.$$.fragment),zr=n(),St=r("p"),St.textContent=Es,yr=n(),Vt=r("p"),Vt.innerHTML=js,$r=n(),O=r("div"),d(Re.$$.fragment),Pr=n(),Rt=r("p"),Rt.textContent=Ms,qr=n(),Jt=r("p"),Jt.textContent=Ns,wo=n(),d(Je.$$.fragment),zo=n(),Qe=r("p"),Qe.innerHTML=Ws,yo=n(),_=r("div"),d(Oe.$$.fragment),Cr=n(),Qt=r("p"),Qt.textContent=Bs,Fr=n(),Ot=r("p"),Ot.innerHTML=Hs,Lr=n(),Zt=r("p"),Zt.textContent=As,Ir=n(),Xt=r("p"),Xt.textContent=Us,Dr=n(),Gt=r("p"),Gt.textContent=Ss,Er=n(),Yt=r("ul"),Yt.innerHTML=Vs,jr=n(),he=r("div"),d(Ze.$$.fragment),Mr=n(),Kt=r("p"),Kt.textContent=Rs,Nr=n(),ue=r("div"),d(Xe.$$.fragment),Wr=n(),en=r("p"),en.innerHTML=Js,Br=n(),fe=r("div"),d(Ge.$$.fragment),Hr=n(),tn=r("p"),tn.textContent=Qs,Ar=n(),Z=r("div"),d(Ye.$$.fragment),Ur=n(),nn=r("p"),nn.textContent=Os,Sr=n(),on=r("p"),on.innerHTML=Zs,Vr=n(),X=r("div"),d(Ke.$$.fragment),Rr=n(),rn=r("p"),rn.textContent=Xs,Jr=n(),an=r("p"),an.innerHTML=Gs,Qr=n(),G=r("div"),d(et.$$.fragment),Or=n(),sn=r("p"),sn.textContent=Ys,Zr=n(),d(_e.$$.fragment),Xr=n(),ge=r("div"),d(tt.$$.fragment),Gr=n(),dn=r("p"),dn.textContent=Ks,Yr=n(),ke=r("div"),d(nt.$$.fragment),Kr=n(),cn=r("p"),cn.textContent=ei,ea=n(),be=r("div"),d(ot.$$.fragment),ta=n(),ln=r("p"),ln.textContent=ti,na=n(),Y=r("div"),d(rt.$$.fragment),oa=n(),pn=r("p"),pn.textContent=ni,ra=n(),d(xe.$$.fragment),aa=n(),K=r("div"),d(at.$$.fragment),sa=n(),mn=r("p"),mn.textContent=oi,ia=n(),hn=r("p"),hn.textContent=ri,da=n(),Te=r("div"),d(st.$$.fragment),ca=n(),un=r("p"),un.textContent=ai,$o=n(),d(it.$$.fragment),Po=n(),w=r("div"),d(dt.$$.fragment),la=n(),fn=r("p"),fn.innerHTML=si,pa=n(),_n=r("p"),_n.textContent=ii,ma=n(),j=r("div"),d(ct.$$.fragment),ha=n(),gn=r("p"),gn.textContent=di,ua=n(),kn=r("p"),kn.textContent=ci,fa=n(),bn=r("ul"),bn.innerHTML=li,_a=n(),xn=r("p"),xn.textContent=pi,ga=n(),M=r("div"),d(lt.$$.fragment),ka=n(),Tn=r("p"),Tn.textContent=mi,ba=n(),vn=r("p"),vn.textContent=hi,xa=n(),wn=r("ul"),wn.innerHTML=ui,Ta=n(),zn=r("p"),zn.textContent=fi,va=n(),ve=r("div"),d(pt.$$.fragment),wa=n(),yn=r("p"),yn.textContent=_i,za=n(),ee=r("div"),d(mt.$$.fragment),ya=n(),$n=r("p"),$n.textContent=gi,$a=n(),Pn=r("ul"),Pn.innerHTML=ki,Pa=n(),we=r("div"),d(ht.$$.fragment),qa=n(),qn=r("p"),qn.innerHTML=bi,Ca=n(),I=r("div"),d(ut.$$.fragment),Fa=n(),Cn=r("p"),Cn.textContent=xi,La=n(),Fn=r("p"),Fn.innerHTML=Ti,Ia=n(),Ln=r("ul"),Ln.innerHTML=vi,Da=n(),In=r("p"),In.textContent=wi,Ea=n(),Dn=r("ul"),Dn.innerHTML=zi,ja=n(),N=r("div"),d(ft.$$.fragment),Ma=n(),En=r("p"),En.innerHTML=yi,Na=n(),jn=r("p"),jn.textContent=$i,Wa=n(),Mn=r("ul"),Mn.innerHTML=Pi,Ba=n(),Nn=r("p"),Nn.textContent=qi,Ha=n(),W=r("div"),d(_t.$$.fragment),Aa=n(),Wn=r("p"),Wn.textContent=Ci,Ua=n(),Bn=r("p"),Bn.textContent=Fi,Sa=n(),Hn=r("ul"),Hn.innerHTML=Li,Va=n(),An=r("p"),An.textContent=Ii,Ra=n(),ze=r("div"),d(gt.$$.fragment),Ja=n(),Un=r("p"),Un.textContent=Di,Qa=n(),ye=r("div"),d(kt.$$.fragment),Oa=n(),Sn=r("p"),Sn.textContent=Ei,Za=n(),D=r("div"),d(bt.$$.fragment),Xa=n(),Vn=r("p"),Vn.textContent=ji,Ga=n(),Rn=r("p"),Rn.textContent=Mi,Ya=n(),Jn=r("ul"),Jn.innerHTML=Ni,Ka=n(),Qn=r("p"),Qn.textContent=Wi,es=n(),On=r("ul"),On.innerHTML=Bi,ts=n(),C=r("div"),d(xt.$$.fragment),ns=n(),Zn=r("p"),Zn.textContent=Hi,os=n(),Xn=r("p"),Xn.innerHTML=Ai,rs=n(),Gn=r("ul"),Gn.innerHTML=Ui,as=n(),Yn=r("p"),Yn.textContent=Si,ss=n(),Kn=r("ul"),Kn.innerHTML=Vi,is=n(),eo=r("p"),eo.textContent=Ri,ds=n(),$e=r("div"),d(Tt.$$.fragment),cs=n(),to=r("p"),to.textContent=Ji,qo=n(),fo=r("p"),this.h()},l(t){const u=ed("svelte-u9bgzb",document.head);b=a(u,"META",{name:!0,content:!0}),u.forEach(i),L=o(t),P=a(t,"P",{}),g(P).forEach(i),q=o(t),c(F.$$.fragment,t),z=o(t),E=a(t,"P",{"data-svelte-h":!0}),s(E)!=="svelte-1l879z4"&&(E.innerHTML=ls),_o=o(t),Pe=a(t,"OL",{"data-svelte-h":!0}),s(Pe)!=="svelte-pst1nn"&&(Pe.innerHTML=ps),go=o(t),qe=a(t,"P",{"data-svelte-h":!0}),s(qe)!=="svelte-v4foa2"&&(qe.innerHTML=ms),ko=o(t),Ce=a(t,"P",{"data-svelte-h":!0}),s(Ce)!=="svelte-t4ai55"&&(Ce.innerHTML=hs),bo=o(t),Fe=a(t,"UL",{"data-svelte-h":!0}),s(Fe)!=="svelte-1e1va0j"&&(Fe.innerHTML=us),xo=o(t),Le=a(t,"P",{"data-svelte-h":!0}),s(Le)!=="svelte-tzgy5i"&&(Le.innerHTML=fs),To=o(t),c(Ie.$$.fragment,t),vo=o(t),f=a(t,"DIV",{class:!0});var x=g(f);c(De.$$.fragment,x),Qo=o(x),yt=a(x,"P",{"data-svelte-h":!0}),s(yt)!=="svelte-1vieurq"&&(yt.textContent=_s),Oo=o(x),$t=a(x,"P",{"data-svelte-h":!0}),s($t)!=="svelte-6sm0ap"&&($t.innerHTML=gs),Zo=o(x),Pt=a(x,"P",{"data-svelte-h":!0}),s(Pt)!=="svelte-y6enlf"&&(Pt.textContent=ks),Xo=o(x),qt=a(x,"P",{"data-svelte-h":!0}),s(qt)!=="svelte-abl5qq"&&(qt.textContent=bs),Go=o(x),Ct=a(x,"P",{"data-svelte-h":!0}),s(Ct)!=="svelte-1ixo79u"&&(Ct.textContent=xs),Yo=o(x),Ft=a(x,"UL",{"data-svelte-h":!0}),s(Ft)!=="svelte-10vk6le"&&(Ft.innerHTML=Ts),Ko=o(x),ae=a(x,"DIV",{class:!0});var vt=g(ae);c(Ee.$$.fragment,vt),er=o(vt),Lt=a(vt,"P",{"data-svelte-h":!0}),s(Lt)!=="svelte-kpxj0c"&&(Lt.textContent=vs),vt.forEach(i),tr=o(x),se=a(x,"DIV",{class:!0});var wt=g(se);c(je.$$.fragment,wt),nr=o(wt),It=a(wt,"P",{"data-svelte-h":!0}),s(It)!=="svelte-wjbfy4"&&(It.innerHTML=ws),wt.forEach(i),or=o(x),ie=a(x,"DIV",{class:!0});var zt=g(ie);c(Me.$$.fragment,zt),rr=o(zt),Dt=a(zt,"P",{"data-svelte-h":!0}),s(Dt)!=="svelte-1deng2j"&&(Dt.textContent=zs),zt.forEach(i),ar=o(x),S=a(x,"DIV",{class:!0});var no=g(S);c(Ne.$$.fragment,no),sr=o(no),Et=a(no,"P",{"data-svelte-h":!0}),s(Et)!=="svelte-vbfkpu"&&(Et.textContent=ys),ir=o(no),jt=a(no,"P",{"data-svelte-h":!0}),s(jt)!=="svelte-125uxon"&&(jt.innerHTML=$s),no.forEach(i),dr=o(x),V=a(x,"DIV",{class:!0});var oo=g(V);c(We.$$.fragment,oo),cr=o(oo),Mt=a(oo,"P",{"data-svelte-h":!0}),s(Mt)!=="svelte-12b8hzo"&&(Mt.textContent=Ps),lr=o(oo),Nt=a(oo,"P",{"data-svelte-h":!0}),s(Nt)!=="svelte-1kyhveh"&&(Nt.innerHTML=qs),oo.forEach(i),pr=o(x),R=a(x,"DIV",{class:!0});var ro=g(R);c(Be.$$.fragment,ro),mr=o(ro),Wt=a(ro,"P",{"data-svelte-h":!0}),s(Wt)!=="svelte-tpmkl3"&&(Wt.textContent=Cs),hr=o(ro),c(de.$$.fragment,ro),ro.forEach(i),ur=o(x),ce=a(x,"DIV",{class:!0});var Fo=g(ce);c(He.$$.fragment,Fo),fr=o(Fo),Bt=a(Fo,"P",{"data-svelte-h":!0}),s(Bt)!=="svelte-cx157h"&&(Bt.textContent=Fs),Fo.forEach(i),_r=o(x),le=a(x,"DIV",{class:!0});var Lo=g(le);c(Ae.$$.fragment,Lo),gr=o(Lo),Ht=a(Lo,"P",{"data-svelte-h":!0}),s(Ht)!=="svelte-1urz5jj"&&(Ht.textContent=Ls),Lo.forEach(i),kr=o(x),pe=a(x,"DIV",{class:!0});var Io=g(pe);c(Ue.$$.fragment,Io),br=o(Io),At=a(Io,"P",{"data-svelte-h":!0}),s(At)!=="svelte-2yfcci"&&(At.textContent=Is),Io.forEach(i),xr=o(x),J=a(x,"DIV",{class:!0});var ao=g(J);c(Se.$$.fragment,ao),Tr=o(ao),Ut=a(ao,"P",{"data-svelte-h":!0}),s(Ut)!=="svelte-1oqr1g4"&&(Ut.textContent=Ds),vr=o(ao),c(me.$$.fragment,ao),ao.forEach(i),wr=o(x),Q=a(x,"DIV",{class:!0});var so=g(Q);c(Ve.$$.fragment,so),zr=o(so),St=a(so,"P",{"data-svelte-h":!0}),s(St)!=="svelte-suiszn"&&(St.textContent=Es),yr=o(so),Vt=a(so,"P",{"data-svelte-h":!0}),s(Vt)!=="svelte-1bw0rb5"&&(Vt.innerHTML=js),so.forEach(i),$r=o(x),O=a(x,"DIV",{class:!0});var io=g(O);c(Re.$$.fragment,io),Pr=o(io),Rt=a(io,"P",{"data-svelte-h":!0}),s(Rt)!=="svelte-sso1qb"&&(Rt.textContent=Ms),qr=o(io),Jt=a(io,"P",{"data-svelte-h":!0}),s(Jt)!=="svelte-1i4xsf5"&&(Jt.textContent=Ns),io.forEach(i),x.forEach(i),wo=o(t),c(Je.$$.fragment,t),zo=o(t),Qe=a(t,"P",{"data-svelte-h":!0}),s(Qe)!=="svelte-16clsk5"&&(Qe.innerHTML=Ws),yo=o(t),_=a(t,"DIV",{class:!0});var v=g(_);c(Oe.$$.fragment,v),Cr=o(v),Qt=a(v,"P",{"data-svelte-h":!0}),s(Qt)!=="svelte-1e1i5yj"&&(Qt.textContent=Bs),Fr=o(v),Ot=a(v,"P",{"data-svelte-h":!0}),s(Ot)!=="svelte-6sm0ap"&&(Ot.innerHTML=Hs),Lr=o(v),Zt=a(v,"P",{"data-svelte-h":!0}),s(Zt)!=="svelte-99yswb"&&(Zt.textContent=As),Ir=o(v),Xt=a(v,"P",{"data-svelte-h":!0}),s(Xt)!=="svelte-1y9tnev"&&(Xt.textContent=Us),Dr=o(v),Gt=a(v,"P",{"data-svelte-h":!0}),s(Gt)!=="svelte-1ixo79u"&&(Gt.textContent=Ss),Er=o(v),Yt=a(v,"UL",{"data-svelte-h":!0}),s(Yt)!=="svelte-10vk6le"&&(Yt.innerHTML=Vs),jr=o(v),he=a(v,"DIV",{class:!0});var Do=g(he);c(Ze.$$.fragment,Do),Mr=o(Do),Kt=a(Do,"P",{"data-svelte-h":!0}),s(Kt)!=="svelte-kpxj0c"&&(Kt.textContent=Rs),Do.forEach(i),Nr=o(v),ue=a(v,"DIV",{class:!0});var Eo=g(ue);c(Xe.$$.fragment,Eo),Wr=o(Eo),en=a(Eo,"P",{"data-svelte-h":!0}),s(en)!=="svelte-wjbfy4"&&(en.innerHTML=Js),Eo.forEach(i),Br=o(v),fe=a(v,"DIV",{class:!0});var jo=g(fe);c(Ge.$$.fragment,jo),Hr=o(jo),tn=a(jo,"P",{"data-svelte-h":!0}),s(tn)!=="svelte-1deng2j"&&(tn.textContent=Qs),jo.forEach(i),Ar=o(v),Z=a(v,"DIV",{class:!0});var co=g(Z);c(Ye.$$.fragment,co),Ur=o(co),nn=a(co,"P",{"data-svelte-h":!0}),s(nn)!=="svelte-vbfkpu"&&(nn.textContent=Os),Sr=o(co),on=a(co,"P",{"data-svelte-h":!0}),s(on)!=="svelte-125uxon"&&(on.innerHTML=Zs),co.forEach(i),Vr=o(v),X=a(v,"DIV",{class:!0});var lo=g(X);c(Ke.$$.fragment,lo),Rr=o(lo),rn=a(lo,"P",{"data-svelte-h":!0}),s(rn)!=="svelte-12b8hzo"&&(rn.textContent=Xs),Jr=o(lo),an=a(lo,"P",{"data-svelte-h":!0}),s(an)!=="svelte-1kyhveh"&&(an.innerHTML=Gs),lo.forEach(i),Qr=o(v),G=a(v,"DIV",{class:!0});var po=g(G);c(et.$$.fragment,po),Or=o(po),sn=a(po,"P",{"data-svelte-h":!0}),s(sn)!=="svelte-tpmkl3"&&(sn.textContent=Ys),Zr=o(po),c(_e.$$.fragment,po),po.forEach(i),Xr=o(v),ge=a(v,"DIV",{class:!0});var Mo=g(ge);c(tt.$$.fragment,Mo),Gr=o(Mo),dn=a(Mo,"P",{"data-svelte-h":!0}),s(dn)!=="svelte-cx157h"&&(dn.textContent=Ks),Mo.forEach(i),Yr=o(v),ke=a(v,"DIV",{class:!0});var No=g(ke);c(nt.$$.fragment,No),Kr=o(No),cn=a(No,"P",{"data-svelte-h":!0}),s(cn)!=="svelte-1urz5jj"&&(cn.textContent=ei),No.forEach(i),ea=o(v),be=a(v,"DIV",{class:!0});var Wo=g(be);c(ot.$$.fragment,Wo),ta=o(Wo),ln=a(Wo,"P",{"data-svelte-h":!0}),s(ln)!=="svelte-17grjhy"&&(ln.textContent=ti),Wo.forEach(i),na=o(v),Y=a(v,"DIV",{class:!0});var mo=g(Y);c(rt.$$.fragment,mo),oa=o(mo),pn=a(mo,"P",{"data-svelte-h":!0}),s(pn)!=="svelte-1oqr1g4"&&(pn.textContent=ni),ra=o(mo),c(xe.$$.fragment,mo),mo.forEach(i),aa=o(v),K=a(v,"DIV",{class:!0});var ho=g(K);c(at.$$.fragment,ho),sa=o(ho),mn=a(ho,"P",{"data-svelte-h":!0}),s(mn)!=="svelte-wj61ov"&&(mn.textContent=oi),ia=o(ho),hn=a(ho,"P",{"data-svelte-h":!0}),s(hn)!=="svelte-1423b5j"&&(hn.textContent=ri),ho.forEach(i),da=o(v),Te=a(v,"DIV",{class:!0});var Bo=g(Te);c(st.$$.fragment,Bo),ca=o(Bo),un=a(Bo,"P",{"data-svelte-h":!0}),s(un)!=="svelte-dk6kyv"&&(un.textContent=ai),Bo.forEach(i),v.forEach(i),$o=o(t),c(it.$$.fragment,t),Po=o(t),w=a(t,"DIV",{class:!0});var $=g(w);c(dt.$$.fragment,$),la=o($),fn=a($,"P",{"data-svelte-h":!0}),s(fn)!=="svelte-i81h77"&&(fn.innerHTML=si),pa=o($),_n=a($,"P",{"data-svelte-h":!0}),s(_n)!=="svelte-1df8ukr"&&(_n.textContent=ii),ma=o($),j=a($,"DIV",{class:!0});var te=g(j);c(ct.$$.fragment,te),ha=o(te),gn=a(te,"P",{"data-svelte-h":!0}),s(gn)!=="svelte-1gpnz9t"&&(gn.textContent=di),ua=o(te),kn=a(te,"P",{"data-svelte-h":!0}),s(kn)!=="svelte-hoi93q"&&(kn.textContent=ci),fa=o(te),bn=a(te,"UL",{"data-svelte-h":!0}),s(bn)!=="svelte-i7p8st"&&(bn.innerHTML=li),_a=o(te),xn=a(te,"P",{"data-svelte-h":!0}),s(xn)!=="svelte-udqgev"&&(xn.textContent=pi),te.forEach(i),ga=o($),M=a($,"DIV",{class:!0});var ne=g(M);c(lt.$$.fragment,ne),ka=o(ne),Tn=a(ne,"P",{"data-svelte-h":!0}),s(Tn)!=="svelte-mtqdue"&&(Tn.textContent=mi),ba=o(ne),vn=a(ne,"P",{"data-svelte-h":!0}),s(vn)!=="svelte-hoi93q"&&(vn.textContent=hi),xa=o(ne),wn=a(ne,"UL",{"data-svelte-h":!0}),s(wn)!=="svelte-2vo0y6"&&(wn.innerHTML=ui),Ta=o(ne),zn=a(ne,"P",{"data-svelte-h":!0}),s(zn)!=="svelte-udqgev"&&(zn.textContent=fi),ne.forEach(i),va=o($),ve=a($,"DIV",{class:!0});var Ho=g(ve);c(pt.$$.fragment,Ho),wa=o(Ho),yn=a(Ho,"P",{"data-svelte-h":!0}),s(yn)!=="svelte-pxfh9u"&&(yn.textContent=_i),Ho.forEach(i),za=o($),ee=a($,"DIV",{class:!0});var uo=g(ee);c(mt.$$.fragment,uo),ya=o(uo),$n=a(uo,"P",{"data-svelte-h":!0}),s($n)!=="svelte-1839ko1"&&($n.textContent=gi),$a=o(uo),Pn=a(uo,"UL",{"data-svelte-h":!0}),s(Pn)!=="svelte-1ap7xk7"&&(Pn.innerHTML=ki),uo.forEach(i),Pa=o($),we=a($,"DIV",{class:!0});var Ao=g(we);c(ht.$$.fragment,Ao),qa=o(Ao),qn=a(Ao,"P",{"data-svelte-h":!0}),s(qn)!=="svelte-8ewnfk"&&(qn.innerHTML=bi),Ao.forEach(i),Ca=o($),I=a($,"DIV",{class:!0});var H=g(I);c(ut.$$.fragment,H),Fa=o(H),Cn=a(H,"P",{"data-svelte-h":!0}),s(Cn)!=="svelte-xav75j"&&(Cn.textContent=xi),La=o(H),Fn=a(H,"P",{"data-svelte-h":!0}),s(Fn)!=="svelte-1wst3bz"&&(Fn.innerHTML=Ti),Ia=o(H),Ln=a(H,"UL",{"data-svelte-h":!0}),s(Ln)!=="svelte-4fpj7o"&&(Ln.innerHTML=vi),Da=o(H),In=a(H,"P",{"data-svelte-h":!0}),s(In)!=="svelte-hoi93q"&&(In.textContent=wi),Ea=o(H),Dn=a(H,"UL",{"data-svelte-h":!0}),s(Dn)!=="svelte-10t7hv1"&&(Dn.innerHTML=zi),H.forEach(i),ja=o($),N=a($,"DIV",{class:!0});var oe=g(N);c(ft.$$.fragment,oe),Ma=o(oe),En=a(oe,"P",{"data-svelte-h":!0}),s(En)!=="svelte-gouuon"&&(En.innerHTML=yi),Na=o(oe),jn=a(oe,"P",{"data-svelte-h":!0}),s(jn)!=="svelte-hoi93q"&&(jn.textContent=$i),Wa=o(oe),Mn=a(oe,"UL",{"data-svelte-h":!0}),s(Mn)!=="svelte-q52scs"&&(Mn.innerHTML=Pi),Ba=o(oe),Nn=a(oe,"P",{"data-svelte-h":!0}),s(Nn)!=="svelte-1fj0zmd"&&(Nn.textContent=qi),oe.forEach(i),Ha=o($),W=a($,"DIV",{class:!0});var re=g(W);c(_t.$$.fragment,re),Aa=o(re),Wn=a(re,"P",{"data-svelte-h":!0}),s(Wn)!=="svelte-a0a2o0"&&(Wn.textContent=Ci),Ua=o(re),Bn=a(re,"P",{"data-svelte-h":!0}),s(Bn)!=="svelte-hoi93q"&&(Bn.textContent=Fi),Sa=o(re),Hn=a(re,"UL",{"data-svelte-h":!0}),s(Hn)!=="svelte-vbk04m"&&(Hn.innerHTML=Li),Va=o(re),An=a(re,"P",{"data-svelte-h":!0}),s(An)!=="svelte-1fj0zmd"&&(An.textContent=Ii),re.forEach(i),Ra=o($),ze=a($,"DIV",{class:!0});var Uo=g(ze);c(gt.$$.fragment,Uo),Ja=o(Uo),Un=a(Uo,"P",{"data-svelte-h":!0}),s(Un)!=="svelte-or6vgj"&&(Un.textContent=Di),Uo.forEach(i),Qa=o($),ye=a($,"DIV",{class:!0});var So=g(ye);c(kt.$$.fragment,So),Oa=o(So),Sn=a(So,"P",{"data-svelte-h":!0}),s(Sn)!=="svelte-1xfwjqh"&&(Sn.textContent=Ei),So.forEach(i),Za=o($),D=a($,"DIV",{class:!0});var A=g(D);c(bt.$$.fragment,A),Xa=o(A),Vn=a(A,"P",{"data-svelte-h":!0}),s(Vn)!=="svelte-1p4j7cm"&&(Vn.textContent=ji),Ga=o(A),Rn=a(A,"P",{"data-svelte-h":!0}),s(Rn)!=="svelte-1m5vplt"&&(Rn.textContent=Mi),Ya=o(A),Jn=a(A,"UL",{"data-svelte-h":!0}),s(Jn)!=="svelte-tivk04"&&(Jn.innerHTML=Ni),Ka=o(A),Qn=a(A,"P",{"data-svelte-h":!0}),s(Qn)!=="svelte-hoi93q"&&(Qn.textContent=Wi),es=o(A),On=a(A,"UL",{"data-svelte-h":!0}),s(On)!=="svelte-rgo9bl"&&(On.innerHTML=Bi),A.forEach(i),ts=o($),C=a($,"DIV",{class:!0});var B=g(C);c(xt.$$.fragment,B),ns=o(B),Zn=a(B,"P",{"data-svelte-h":!0}),s(Zn)!=="svelte-p6ca34"&&(Zn.textContent=Hi),os=o(B),Xn=a(B,"P",{"data-svelte-h":!0}),s(Xn)!=="svelte-1ogczwt"&&(Xn.innerHTML=Ai),rs=o(B),Gn=a(B,"UL",{"data-svelte-h":!0}),s(Gn)!=="svelte-adw1ie"&&(Gn.innerHTML=Ui),as=o(B),Yn=a(B,"P",{"data-svelte-h":!0}),s(Yn)!=="svelte-hoi93q"&&(Yn.textContent=Si),ss=o(B),Kn=a(B,"UL",{"data-svelte-h":!0}),s(Kn)!=="svelte-11iunx9"&&(Kn.innerHTML=Vi),is=o(B),eo=a(B,"P",{"data-svelte-h":!0}),s(eo)!=="svelte-udqgev"&&(eo.textContent=Ri),B.forEach(i),ds=o($),$e=a($,"DIV",{class:!0});var Vo=g($e);c(Tt.$$.fragment,Vo),cs=o(Vo),to=a(Vo,"P",{"data-svelte-h":!0}),s(to)!=="svelte-1xfwjqh"&&(to.textContent=Ji),Vo.forEach(i),$.forEach(i),qo=o(t),fo=a(t,"P",{}),g(fo).forEach(i),this.h()},h(){k(b,"name","hf:doc:metadata"),k(b,"content",sd),k(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(f,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(_,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(w,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,u){e(document.head,b),y(t,L,u),y(t,P,u),y(t,q,u),l(F,t,u),y(t,z,u),y(t,E,u),y(t,_o,u),y(t,Pe,u),y(t,go,u),y(t,qe,u),y(t,ko,u),y(t,Ce,u),y(t,bo,u),y(t,Fe,u),y(t,xo,u),y(t,Le,u),y(t,To,u),l(Ie,t,u),y(t,vo,u),y(t,f,u),l(De,f,null),e(f,Qo),e(f,yt),e(f,Oo),e(f,$t),e(f,Zo),e(f,Pt),e(f,Xo),e(f,qt),e(f,Go),e(f,Ct),e(f,Yo),e(f,Ft),e(f,Ko),e(f,ae),l(Ee,ae,null),e(ae,er),e(ae,Lt),e(f,tr),e(f,se),l(je,se,null),e(se,nr),e(se,It),e(f,or),e(f,ie),l(Me,ie,null),e(ie,rr),e(ie,Dt),e(f,ar),e(f,S),l(Ne,S,null),e(S,sr),e(S,Et),e(S,ir),e(S,jt),e(f,dr),e(f,V),l(We,V,null),e(V,cr),e(V,Mt),e(V,lr),e(V,Nt),e(f,pr),e(f,R),l(Be,R,null),e(R,mr),e(R,Wt),e(R,hr),l(de,R,null),e(f,ur),e(f,ce),l(He,ce,null),e(ce,fr),e(ce,Bt),e(f,_r),e(f,le),l(Ae,le,null),e(le,gr),e(le,Ht),e(f,kr),e(f,pe),l(Ue,pe,null),e(pe,br),e(pe,At),e(f,xr),e(f,J),l(Se,J,null),e(J,Tr),e(J,Ut),e(J,vr),l(me,J,null),e(f,wr),e(f,Q),l(Ve,Q,null),e(Q,zr),e(Q,St),e(Q,yr),e(Q,Vt),e(f,$r),e(f,O),l(Re,O,null),e(O,Pr),e(O,Rt),e(O,qr),e(O,Jt),y(t,wo,u),l(Je,t,u),y(t,zo,u),y(t,Qe,u),y(t,yo,u),y(t,_,u),l(Oe,_,null),e(_,Cr),e(_,Qt),e(_,Fr),e(_,Ot),e(_,Lr),e(_,Zt),e(_,Ir),e(_,Xt),e(_,Dr),e(_,Gt),e(_,Er),e(_,Yt),e(_,jr),e(_,he),l(Ze,he,null),e(he,Mr),e(he,Kt),e(_,Nr),e(_,ue),l(Xe,ue,null),e(ue,Wr),e(ue,en),e(_,Br),e(_,fe),l(Ge,fe,null),e(fe,Hr),e(fe,tn),e(_,Ar),e(_,Z),l(Ye,Z,null),e(Z,Ur),e(Z,nn),e(Z,Sr),e(Z,on),e(_,Vr),e(_,X),l(Ke,X,null),e(X,Rr),e(X,rn),e(X,Jr),e(X,an),e(_,Qr),e(_,G),l(et,G,null),e(G,Or),e(G,sn),e(G,Zr),l(_e,G,null),e(_,Xr),e(_,ge),l(tt,ge,null),e(ge,Gr),e(ge,dn),e(_,Yr),e(_,ke),l(nt,ke,null),e(ke,Kr),e(ke,cn),e(_,ea),e(_,be),l(ot,be,null),e(be,ta),e(be,ln),e(_,na),e(_,Y),l(rt,Y,null),e(Y,oa),e(Y,pn),e(Y,ra),l(xe,Y,null),e(_,aa),e(_,K),l(at,K,null),e(K,sa),e(K,mn),e(K,ia),e(K,hn),e(_,da),e(_,Te),l(st,Te,null),e(Te,ca),e(Te,un),y(t,$o,u),l(it,t,u),y(t,Po,u),y(t,w,u),l(dt,w,null),e(w,la),e(w,fn),e(w,pa),e(w,_n),e(w,ma),e(w,j),l(ct,j,null),e(j,ha),e(j,gn),e(j,ua),e(j,kn),e(j,fa),e(j,bn),e(j,_a),e(j,xn),e(w,ga),e(w,M),l(lt,M,null),e(M,ka),e(M,Tn),e(M,ba),e(M,vn),e(M,xa),e(M,wn),e(M,Ta),e(M,zn),e(w,va),e(w,ve),l(pt,ve,null),e(ve,wa),e(ve,yn),e(w,za),e(w,ee),l(mt,ee,null),e(ee,ya),e(ee,$n),e(ee,$a),e(ee,Pn),e(w,Pa),e(w,we),l(ht,we,null),e(we,qa),e(we,qn),e(w,Ca),e(w,I),l(ut,I,null),e(I,Fa),e(I,Cn),e(I,La),e(I,Fn),e(I,Ia),e(I,Ln),e(I,Da),e(I,In),e(I,Ea),e(I,Dn),e(w,ja),e(w,N),l(ft,N,null),e(N,Ma),e(N,En),e(N,Na),e(N,jn),e(N,Wa),e(N,Mn),e(N,Ba),e(N,Nn),e(w,Ha),e(w,W),l(_t,W,null),e(W,Aa),e(W,Wn),e(W,Ua),e(W,Bn),e(W,Sa),e(W,Hn),e(W,Va),e(W,An),e(w,Ra),e(w,ze),l(gt,ze,null),e(ze,Ja),e(ze,Un),e(w,Qa),e(w,ye),l(kt,ye,null),e(ye,Oa),e(ye,Sn),e(w,Za),e(w,D),l(bt,D,null),e(D,Xa),e(D,Vn),e(D,Ga),e(D,Rn),e(D,Ya),e(D,Jn),e(D,Ka),e(D,Qn),e(D,es),e(D,On),e(w,ts),e(w,C),l(xt,C,null),e(C,ns),e(C,Zn),e(C,os),e(C,Xn),e(C,rs),e(C,Gn),e(C,as),e(C,Yn),e(C,ss),e(C,Kn),e(C,is),e(C,eo),e(w,ds),e(w,$e),l(Tt,$e,null),e($e,cs),e($e,to),y(t,qo,u),y(t,fo,u),Co=!0},p(t,[u]){const x={};u&2&&(x.$$scope={dirty:u,ctx:t}),de.$set(x);const vt={};u&2&&(vt.$$scope={dirty:u,ctx:t}),me.$set(vt);const wt={};u&2&&(wt.$$scope={dirty:u,ctx:t}),_e.$set(wt);const zt={};u&2&&(zt.$$scope={dirty:u,ctx:t}),xe.$set(zt)},i(t){Co||(p(F.$$.fragment,t),p(Ie.$$.fragment,t),p(De.$$.fragment,t),p(Ee.$$.fragment,t),p(je.$$.fragment,t),p(Me.$$.fragment,t),p(Ne.$$.fragment,t),p(We.$$.fragment,t),p(Be.$$.fragment,t),p(de.$$.fragment,t),p(He.$$.fragment,t),p(Ae.$$.fragment,t),p(Ue.$$.fragment,t),p(Se.$$.fragment,t),p(me.$$.fragment,t),p(Ve.$$.fragment,t),p(Re.$$.fragment,t),p(Je.$$.fragment,t),p(Oe.$$.fragment,t),p(Ze.$$.fragment,t),p(Xe.$$.fragment,t),p(Ge.$$.fragment,t),p(Ye.$$.fragment,t),p(Ke.$$.fragment,t),p(et.$$.fragment,t),p(_e.$$.fragment,t),p(tt.$$.fragment,t),p(nt.$$.fragment,t),p(ot.$$.fragment,t),p(rt.$$.fragment,t),p(xe.$$.fragment,t),p(at.$$.fragment,t),p(st.$$.fragment,t),p(it.$$.fragment,t),p(dt.$$.fragment,t),p(ct.$$.fragment,t),p(lt.$$.fragment,t),p(pt.$$.fragment,t),p(mt.$$.fragment,t),p(ht.$$.fragment,t),p(ut.$$.fragment,t),p(ft.$$.fragment,t),p(_t.$$.fragment,t),p(gt.$$.fragment,t),p(kt.$$.fragment,t),p(bt.$$.fragment,t),p(xt.$$.fragment,t),p(Tt.$$.fragment,t),Co=!0)},o(t){m(F.$$.fragment,t),m(Ie.$$.fragment,t),m(De.$$.fragment,t),m(Ee.$$.fragment,t),m(je.$$.fragment,t),m(Me.$$.fragment,t),m(Ne.$$.fragment,t),m(We.$$.fragment,t),m(Be.$$.fragment,t),m(de.$$.fragment,t),m(He.$$.fragment,t),m(Ae.$$.fragment,t),m(Ue.$$.fragment,t),m(Se.$$.fragment,t),m(me.$$.fragment,t),m(Ve.$$.fragment,t),m(Re.$$.fragment,t),m(Je.$$.fragment,t),m(Oe.$$.fragment,t),m(Ze.$$.fragment,t),m(Xe.$$.fragment,t),m(Ge.$$.fragment,t),m(Ye.$$.fragment,t),m(Ke.$$.fragment,t),m(et.$$.fragment,t),m(_e.$$.fragment,t),m(tt.$$.fragment,t),m(nt.$$.fragment,t),m(ot.$$.fragment,t),m(rt.$$.fragment,t),m(xe.$$.fragment,t),m(at.$$.fragment,t),m(st.$$.fragment,t),m(it.$$.fragment,t),m(dt.$$.fragment,t),m(ct.$$.fragment,t),m(lt.$$.fragment,t),m(pt.$$.fragment,t),m(mt.$$.fragment,t),m(ht.$$.fragment,t),m(ut.$$.fragment,t),m(ft.$$.fragment,t),m(_t.$$.fragment,t),m(gt.$$.fragment,t),m(kt.$$.fragment,t),m(bt.$$.fragment,t),m(xt.$$.fragment,t),m(Tt.$$.fragment,t),Co=!1},d(t){t&&(i(L),i(P),i(q),i(z),i(E),i(_o),i(Pe),i(go),i(qe),i(ko),i(Ce),i(bo),i(Fe),i(xo),i(Le),i(To),i(vo),i(f),i(wo),i(zo),i(Qe),i(yo),i(_),i($o),i(Po),i(w),i(qo),i(fo)),i(b),h(F,t),h(Ie,t),h(De),h(Ee),h(je),h(Me),h(Ne),h(We),h(Be),h(de),h(He),h(Ae),h(Ue),h(Se),h(me),h(Ve),h(Re),h(Je,t),h(Oe),h(Ze),h(Xe),h(Ge),h(Ye),h(Ke),h(et),h(_e),h(tt),h(nt),h(ot),h(rt),h(xe),h(at),h(st),h(it,t),h(dt),h(ct),h(lt),h(pt),h(mt),h(ht),h(ut),h(ft),h(_t),h(gt),h(kt),h(bt),h(xt),h(Tt)}}}const sd='{"title":"Tokenizer","local":"tokenizer","sections":[{"title":"PreTrainedTokenizer","local":"transformers.PreTrainedTokenizer","sections":[],"depth":2},{"title":"PreTrainedTokenizerFast","local":"transformers.PreTrainedTokenizerFast","sections":[],"depth":2},{"title":"BatchEncoding","local":"transformers.BatchEncoding","sections":[],"depth":2}],"depth":1}';function id(U){return Gi(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class fd extends Yi{constructor(b){super(),Ki(this,b,id,ad,Xi,{})}}export{fd as component};
