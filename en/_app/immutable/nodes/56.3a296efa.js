import{s as Tc,o as xc,n as Ee}from"../chunks/scheduler.9bc65507.js";import{S as vc,i as yc,g as r,s as n,r as l,A as wc,h as s,f as d,c as o,j as x,u as p,x as a,k as v,y as e,a as $,v as m,d as h,t as u,w as f}from"../chunks/index.707bf1b6.js";import{T as bc}from"../chunks/Tip.c2ecdbf4.js";import{D as w}from"../chunks/Docstring.17db21ae.js";import{C as Yo}from"../chunks/CodeBlock.54a9f38d.js";import{E as Qo}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as Cr}from"../chunks/Heading.342b1fa6.js";function zc(W){let c,I="Examples:",k,_,P;return _=new Yo({props:{code:"JTIzJTIwTGV0J3MlMjBzZWUlMjBob3clMjB0byUyMGluY3JlYXNlJTIwdGhlJTIwdm9jYWJ1bGFyeSUyMG9mJTIwQmVydCUyMG1vZGVsJTIwYW5kJTIwdG9rZW5pemVyJTBBdG9rZW5pemVyJTIwJTNEJTIwQmVydFRva2VuaXplckZhc3QuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZS1iZXJ0JTJGYmVydC1iYXNlLXVuY2FzZWQlMjIpJTBBbW9kZWwlMjAlM0QlMjBCZXJ0TW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZS1iZXJ0JTJGYmVydC1iYXNlLXVuY2FzZWQlMjIpJTBBJTBBbnVtX2FkZGVkX3Rva3MlMjAlM0QlMjB0b2tlbml6ZXIuYWRkX3Rva2VucyglNUIlMjJuZXdfdG9rMSUyMiUyQyUyMCUyMm15X25ldy10b2syJTIyJTVEKSUwQXByaW50KCUyMldlJTIwaGF2ZSUyMGFkZGVkJTIyJTJDJTIwbnVtX2FkZGVkX3Rva3MlMkMlMjAlMjJ0b2tlbnMlMjIpJTBBJTIzJTIwTm90aWNlJTNBJTIwcmVzaXplX3Rva2VuX2VtYmVkZGluZ3MlMjBleHBlY3QlMjB0byUyMHJlY2VpdmUlMjB0aGUlMjBmdWxsJTIwc2l6ZSUyMG9mJTIwdGhlJTIwbmV3JTIwdm9jYWJ1bGFyeSUyQyUyMGkuZS4lMkMlMjB0aGUlMjBsZW5ndGglMjBvZiUyMHRoZSUyMHRva2VuaXplci4lMEFtb2RlbC5yZXNpemVfdG9rZW5fZW1iZWRkaW5ncyhsZW4odG9rZW5pemVyKSk=",highlighted:`<span class="hljs-comment"># Let&#x27;s see how to increase the vocabulary of Bert model and tokenizer</span>
tokenizer = BertTokenizerFast.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>)
model = BertModel.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>)

num_added_toks = tokenizer.add_tokens([<span class="hljs-string">&quot;new_tok1&quot;</span>, <span class="hljs-string">&quot;my_new-tok2&quot;</span>])
<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;We have added&quot;</span>, num_added_toks, <span class="hljs-string">&quot;tokens&quot;</span>)
<span class="hljs-comment"># Notice: resize_token_embeddings expect to receive the full size of the new vocabulary, i.e., the length of the tokenizer.</span>
model.resize_token_embeddings(<span class="hljs-built_in">len</span>(tokenizer))`,wrap:!1}}),{c(){c=r("p"),c.textContent=I,k=n(),l(_.$$.fragment)},l(i){c=s(i,"P",{"data-svelte-h":!0}),a(c)!=="svelte-kvfsh7"&&(c.textContent=I),k=o(i),p(_.$$.fragment,i)},m(i,M){$(i,c,M),$(i,k,M),m(_,i,M),P=!0},p:Ee,i(i){P||(h(_.$$.fragment,i),P=!0)},o(i){u(_.$$.fragment,i),P=!1},d(i){i&&(d(c),d(k)),f(_,i)}}}function $c(W){let c,I="Examples:",k,_,P;return _=new Yo({props:{code:"JTIzJTIwTGV0J3MlMjBzZWUlMjBob3clMjB0byUyMGFkZCUyMGElMjBuZXclMjBjbGFzc2lmaWNhdGlvbiUyMHRva2VuJTIwdG8lMjBHUFQtMiUwQXRva2VuaXplciUyMCUzRCUyMEdQVDJUb2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMm9wZW5haS1jb21tdW5pdHklMkZncHQyJTIyKSUwQW1vZGVsJTIwJTNEJTIwR1BUMk1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJvcGVuYWktY29tbXVuaXR5JTJGZ3B0MiUyMiklMEElMEFzcGVjaWFsX3Rva2Vuc19kaWN0JTIwJTNEJTIwJTdCJTIyY2xzX3Rva2VuJTIyJTNBJTIwJTIyJTNDQ0xTJTNFJTIyJTdEJTBBJTBBbnVtX2FkZGVkX3Rva3MlMjAlM0QlMjB0b2tlbml6ZXIuYWRkX3NwZWNpYWxfdG9rZW5zKHNwZWNpYWxfdG9rZW5zX2RpY3QpJTBBcHJpbnQoJTIyV2UlMjBoYXZlJTIwYWRkZWQlMjIlMkMlMjBudW1fYWRkZWRfdG9rcyUyQyUyMCUyMnRva2VucyUyMiklMEElMjMlMjBOb3RpY2UlM0ElMjByZXNpemVfdG9rZW5fZW1iZWRkaW5ncyUyMGV4cGVjdCUyMHRvJTIwcmVjZWl2ZSUyMHRoZSUyMGZ1bGwlMjBzaXplJTIwb2YlMjB0aGUlMjBuZXclMjB2b2NhYnVsYXJ5JTJDJTIwaS5lLiUyQyUyMHRoZSUyMGxlbmd0aCUyMG9mJTIwdGhlJTIwdG9rZW5pemVyLiUwQW1vZGVsLnJlc2l6ZV90b2tlbl9lbWJlZGRpbmdzKGxlbih0b2tlbml6ZXIpKSUwQSUwQWFzc2VydCUyMHRva2VuaXplci5jbHNfdG9rZW4lMjAlM0QlM0QlMjAlMjIlM0NDTFMlM0UlMjI=",highlighted:`<span class="hljs-comment"># Let&#x27;s see how to add a new classification token to GPT-2</span>
tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)
model = GPT2Model.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)

special_tokens_dict = {<span class="hljs-string">&quot;cls_token&quot;</span>: <span class="hljs-string">&quot;&lt;CLS&gt;&quot;</span>}

num_added_toks = tokenizer.add_special_tokens(special_tokens_dict)
<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;We have added&quot;</span>, num_added_toks, <span class="hljs-string">&quot;tokens&quot;</span>)
<span class="hljs-comment"># Notice: resize_token_embeddings expect to receive the full size of the new vocabulary, i.e., the length of the tokenizer.</span>
model.resize_token_embeddings(<span class="hljs-built_in">len</span>(tokenizer))

<span class="hljs-keyword">assert</span> tokenizer.cls_token == <span class="hljs-string">&quot;&lt;CLS&gt;&quot;</span>`,wrap:!1}}),{c(){c=r("p"),c.textContent=I,k=n(),l(_.$$.fragment)},l(i){c=s(i,"P",{"data-svelte-h":!0}),a(c)!=="svelte-kvfsh7"&&(c.textContent=I),k=o(i),p(_.$$.fragment,i)},m(i,M){$(i,c,M),$(i,k,M),m(_,i,M),P=!0},p:Ee,i(i){P||(h(_.$$.fragment,i),P=!0)},o(i){u(_.$$.fragment,i),P=!1},d(i){i&&(d(c),d(k)),f(_,i)}}}function Pc(W){let c,I="Examples:",k,_,P;return _=new Yo({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUtYmVydCUyRmJlcnQtYmFzZS1jYXNlZCUyMiklMEElMEElMjMlMjBQdXNoJTIwdGhlJTIwdG9rZW5pemVyJTIwdG8lMjB5b3VyJTIwbmFtZXNwYWNlJTIwd2l0aCUyMHRoZSUyMG5hbWUlMjAlMjJteS1maW5ldHVuZWQtYmVydCUyMi4lMEF0b2tlbml6ZXIucHVzaF90b19odWIoJTIybXktZmluZXR1bmVkLWJlcnQlMjIpJTBBJTBBJTIzJTIwUHVzaCUyMHRoZSUyMHRva2VuaXplciUyMHRvJTIwYW4lMjBvcmdhbml6YXRpb24lMjB3aXRoJTIwdGhlJTIwbmFtZSUyMCUyMm15LWZpbmV0dW5lZC1iZXJ0JTIyLiUwQXRva2VuaXplci5wdXNoX3RvX2h1YiglMjJodWdnaW5nZmFjZSUyRm15LWZpbmV0dW5lZC1iZXJ0JTIyKQ==",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-cased&quot;</span>)

<span class="hljs-comment"># Push the tokenizer to your namespace with the name &quot;my-finetuned-bert&quot;.</span>
tokenizer.push_to_hub(<span class="hljs-string">&quot;my-finetuned-bert&quot;</span>)

<span class="hljs-comment"># Push the tokenizer to an organization with the name &quot;my-finetuned-bert&quot;.</span>
tokenizer.push_to_hub(<span class="hljs-string">&quot;huggingface/my-finetuned-bert&quot;</span>)`,wrap:!1}}),{c(){c=r("p"),c.textContent=I,k=n(),l(_.$$.fragment)},l(i){c=s(i,"P",{"data-svelte-h":!0}),a(c)!=="svelte-kvfsh7"&&(c.textContent=I),k=o(i),p(_.$$.fragment,i)},m(i,M){$(i,c,M),$(i,k,M),m(_,i,M),P=!0},p:Ee,i(i){P||(h(_.$$.fragment,i),P=!0)},o(i){u(_.$$.fragment,i),P=!1},d(i){i&&(d(c),d(k)),f(_,i)}}}function Cc(W){let c,I=`This encodes a dummy input and checks the number of added tokens, and is therefore not efficient. Do not put
this inside your training loop.`;return{c(){c=r("p"),c.textContent=I},l(k){c=s(k,"P",{"data-svelte-h":!0}),a(c)!=="svelte-1yi8eve"&&(c.textContent=I)},m(k,_){$(k,c,_)},p:Ee,d(k){k&&d(c)}}}function qc(W){let c,I="Examples:",k,_,P;return _=new Yo({props:{code:"JTIzJTIwTGV0J3MlMjBzZWUlMjBob3clMjB0byUyMGluY3JlYXNlJTIwdGhlJTIwdm9jYWJ1bGFyeSUyMG9mJTIwQmVydCUyMG1vZGVsJTIwYW5kJTIwdG9rZW5pemVyJTBBdG9rZW5pemVyJTIwJTNEJTIwQmVydFRva2VuaXplckZhc3QuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZS1iZXJ0JTJGYmVydC1iYXNlLXVuY2FzZWQlMjIpJTBBbW9kZWwlMjAlM0QlMjBCZXJ0TW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZS1iZXJ0JTJGYmVydC1iYXNlLXVuY2FzZWQlMjIpJTBBJTBBbnVtX2FkZGVkX3Rva3MlMjAlM0QlMjB0b2tlbml6ZXIuYWRkX3Rva2VucyglNUIlMjJuZXdfdG9rMSUyMiUyQyUyMCUyMm15X25ldy10b2syJTIyJTVEKSUwQXByaW50KCUyMldlJTIwaGF2ZSUyMGFkZGVkJTIyJTJDJTIwbnVtX2FkZGVkX3Rva3MlMkMlMjAlMjJ0b2tlbnMlMjIpJTBBJTIzJTIwTm90aWNlJTNBJTIwcmVzaXplX3Rva2VuX2VtYmVkZGluZ3MlMjBleHBlY3QlMjB0byUyMHJlY2VpdmUlMjB0aGUlMjBmdWxsJTIwc2l6ZSUyMG9mJTIwdGhlJTIwbmV3JTIwdm9jYWJ1bGFyeSUyQyUyMGkuZS4lMkMlMjB0aGUlMjBsZW5ndGglMjBvZiUyMHRoZSUyMHRva2VuaXplci4lMEFtb2RlbC5yZXNpemVfdG9rZW5fZW1iZWRkaW5ncyhsZW4odG9rZW5pemVyKSk=",highlighted:`<span class="hljs-comment"># Let&#x27;s see how to increase the vocabulary of Bert model and tokenizer</span>
tokenizer = BertTokenizerFast.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>)
model = BertModel.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>)

num_added_toks = tokenizer.add_tokens([<span class="hljs-string">&quot;new_tok1&quot;</span>, <span class="hljs-string">&quot;my_new-tok2&quot;</span>])
<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;We have added&quot;</span>, num_added_toks, <span class="hljs-string">&quot;tokens&quot;</span>)
<span class="hljs-comment"># Notice: resize_token_embeddings expect to receive the full size of the new vocabulary, i.e., the length of the tokenizer.</span>
model.resize_token_embeddings(<span class="hljs-built_in">len</span>(tokenizer))`,wrap:!1}}),{c(){c=r("p"),c.textContent=I,k=n(),l(_.$$.fragment)},l(i){c=s(i,"P",{"data-svelte-h":!0}),a(c)!=="svelte-kvfsh7"&&(c.textContent=I),k=o(i),p(_.$$.fragment,i)},m(i,M){$(i,c,M),$(i,k,M),m(_,i,M),P=!0},p:Ee,i(i){P||(h(_.$$.fragment,i),P=!0)},o(i){u(_.$$.fragment,i),P=!1},d(i){i&&(d(c),d(k)),f(_,i)}}}function Mc(W){let c,I="Examples:",k,_,P;return _=new Yo({props:{code:"JTIzJTIwTGV0J3MlMjBzZWUlMjBob3clMjB0byUyMGFkZCUyMGElMjBuZXclMjBjbGFzc2lmaWNhdGlvbiUyMHRva2VuJTIwdG8lMjBHUFQtMiUwQXRva2VuaXplciUyMCUzRCUyMEdQVDJUb2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMm9wZW5haS1jb21tdW5pdHklMkZncHQyJTIyKSUwQW1vZGVsJTIwJTNEJTIwR1BUMk1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJvcGVuYWktY29tbXVuaXR5JTJGZ3B0MiUyMiklMEElMEFzcGVjaWFsX3Rva2Vuc19kaWN0JTIwJTNEJTIwJTdCJTIyY2xzX3Rva2VuJTIyJTNBJTIwJTIyJTNDQ0xTJTNFJTIyJTdEJTBBJTBBbnVtX2FkZGVkX3Rva3MlMjAlM0QlMjB0b2tlbml6ZXIuYWRkX3NwZWNpYWxfdG9rZW5zKHNwZWNpYWxfdG9rZW5zX2RpY3QpJTBBcHJpbnQoJTIyV2UlMjBoYXZlJTIwYWRkZWQlMjIlMkMlMjBudW1fYWRkZWRfdG9rcyUyQyUyMCUyMnRva2VucyUyMiklMEElMjMlMjBOb3RpY2UlM0ElMjByZXNpemVfdG9rZW5fZW1iZWRkaW5ncyUyMGV4cGVjdCUyMHRvJTIwcmVjZWl2ZSUyMHRoZSUyMGZ1bGwlMjBzaXplJTIwb2YlMjB0aGUlMjBuZXclMjB2b2NhYnVsYXJ5JTJDJTIwaS5lLiUyQyUyMHRoZSUyMGxlbmd0aCUyMG9mJTIwdGhlJTIwdG9rZW5pemVyLiUwQW1vZGVsLnJlc2l6ZV90b2tlbl9lbWJlZGRpbmdzKGxlbih0b2tlbml6ZXIpKSUwQSUwQWFzc2VydCUyMHRva2VuaXplci5jbHNfdG9rZW4lMjAlM0QlM0QlMjAlMjIlM0NDTFMlM0UlMjI=",highlighted:`<span class="hljs-comment"># Let&#x27;s see how to add a new classification token to GPT-2</span>
tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)
model = GPT2Model.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)

special_tokens_dict = {<span class="hljs-string">&quot;cls_token&quot;</span>: <span class="hljs-string">&quot;&lt;CLS&gt;&quot;</span>}

num_added_toks = tokenizer.add_special_tokens(special_tokens_dict)
<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;We have added&quot;</span>, num_added_toks, <span class="hljs-string">&quot;tokens&quot;</span>)
<span class="hljs-comment"># Notice: resize_token_embeddings expect to receive the full size of the new vocabulary, i.e., the length of the tokenizer.</span>
model.resize_token_embeddings(<span class="hljs-built_in">len</span>(tokenizer))

<span class="hljs-keyword">assert</span> tokenizer.cls_token == <span class="hljs-string">&quot;&lt;CLS&gt;&quot;</span>`,wrap:!1}}),{c(){c=r("p"),c.textContent=I,k=n(),l(_.$$.fragment)},l(i){c=s(i,"P",{"data-svelte-h":!0}),a(c)!=="svelte-kvfsh7"&&(c.textContent=I),k=o(i),p(_.$$.fragment,i)},m(i,M){$(i,c,M),$(i,k,M),m(_,i,M),P=!0},p:Ee,i(i){P||(h(_.$$.fragment,i),P=!0)},o(i){u(_.$$.fragment,i),P=!1},d(i){i&&(d(c),d(k)),f(_,i)}}}function Ic(W){let c,I="Examples:",k,_,P;return _=new Yo({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUtYmVydCUyRmJlcnQtYmFzZS1jYXNlZCUyMiklMEElMEElMjMlMjBQdXNoJTIwdGhlJTIwdG9rZW5pemVyJTIwdG8lMjB5b3VyJTIwbmFtZXNwYWNlJTIwd2l0aCUyMHRoZSUyMG5hbWUlMjAlMjJteS1maW5ldHVuZWQtYmVydCUyMi4lMEF0b2tlbml6ZXIucHVzaF90b19odWIoJTIybXktZmluZXR1bmVkLWJlcnQlMjIpJTBBJTBBJTIzJTIwUHVzaCUyMHRoZSUyMHRva2VuaXplciUyMHRvJTIwYW4lMjBvcmdhbml6YXRpb24lMjB3aXRoJTIwdGhlJTIwbmFtZSUyMCUyMm15LWZpbmV0dW5lZC1iZXJ0JTIyLiUwQXRva2VuaXplci5wdXNoX3RvX2h1YiglMjJodWdnaW5nZmFjZSUyRm15LWZpbmV0dW5lZC1iZXJ0JTIyKQ==",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-cased&quot;</span>)

<span class="hljs-comment"># Push the tokenizer to your namespace with the name &quot;my-finetuned-bert&quot;.</span>
tokenizer.push_to_hub(<span class="hljs-string">&quot;my-finetuned-bert&quot;</span>)

<span class="hljs-comment"># Push the tokenizer to an organization with the name &quot;my-finetuned-bert&quot;.</span>
tokenizer.push_to_hub(<span class="hljs-string">&quot;huggingface/my-finetuned-bert&quot;</span>)`,wrap:!1}}),{c(){c=r("p"),c.textContent=I,k=n(),l(_.$$.fragment)},l(i){c=s(i,"P",{"data-svelte-h":!0}),a(c)!=="svelte-kvfsh7"&&(c.textContent=I),k=o(i),p(_.$$.fragment,i)},m(i,M){$(i,c,M),$(i,k,M),m(_,i,M),P=!0},p:Ee,i(i){P||(h(_.$$.fragment,i),P=!0)},o(i){u(_.$$.fragment,i),P=!1},d(i){i&&(d(c),d(k)),f(_,i)}}}function Fc(W){let c,I=`This encodes a dummy input and checks the number of added tokens, and is therefore not efficient. Do not put
this inside your training loop.`;return{c(){c=r("p"),c.textContent=I},l(k){c=s(k,"P",{"data-svelte-h":!0}),a(c)!=="svelte-1yi8eve"&&(c.textContent=I)},m(k,_){$(k,c,_)},p:Ee,d(k){k&&d(c)}}}function Lc(W){let c,I,k,_,P,i,M,ki=`A tokenizer is in charge of preparing the inputs for a model. The library contains tokenizers for all the models. Most
of the tokenizers are available in two flavors: a full python implementation and a “Fast” implementation based on the
Rust library <a href="https://github.com/huggingface/tokenizers" rel="nofollow">🤗 Tokenizers</a>. The “Fast” implementations allows:`,Ko,Ze,bi=`<li>a significant speed-up in particular when doing batched tokenization and</li> <li>additional methods to map between the original string (character and words) and the token space (e.g. getting the
index of the token comprising a given character or the span of characters corresponding to a given token).</li>`,er,De,Ti=`The base classes <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> and <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>
implement the common methods for encoding string inputs in model inputs (see below) and instantiating/saving python and
“Fast” tokenizers either from a local file or directory or from a pretrained tokenizer provided by the library
(downloaded from HuggingFace’s AWS S3 repository). They both rely on
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase">PreTrainedTokenizerBase</a> that contains the common methods, and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.SpecialTokensMixin">SpecialTokensMixin</a>.`,tr,He,xi=`<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> and <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a> thus implement the main
methods for using all the tokenizers:`,nr,Ge,vi=`<li>Tokenizing (splitting strings in sub-word token strings), converting tokens strings to ids and back, and
encoding/decoding (i.e., tokenizing and converting to integers).</li> <li>Adding new tokens to the vocabulary in a way that is independent of the underlying structure (BPE, SentencePiece…).</li> <li>Managing special tokens (like mask, beginning-of-sentence, etc.): adding them, assigning them to attributes in the
tokenizer for easy access and making sure they are not split during tokenization.</li>`,or,Ae,yi=`<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding">BatchEncoding</a> holds the output of the
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase">PreTrainedTokenizerBase</a>’s encoding methods (<code>__call__</code>,
<code>encode_plus</code> and <code>batch_encode_plus</code>) and is derived from a Python dictionary. When the tokenizer is a pure python
tokenizer, this class behaves just like a standard python dictionary and holds the various model inputs computed by
these methods (<code>input_ids</code>, <code>attention_mask</code>…). When the tokenizer is a “Fast” tokenizer (i.e., backed by
HuggingFace <a href="https://github.com/huggingface/tokenizers" rel="nofollow">tokenizers library</a>), this class provides in addition
several advanced alignment methods which can be used to map between the original string (character and words) and the
token space (e.g., getting the index of the token comprising a given character or the span of characters corresponding
to a given token).`,rr,Re,sr,b,Se,qr,Ht,wi="Base class for all slow tokenizers.",Mr,Gt,zi='Inherits from <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase">PreTrainedTokenizerBase</a>.',Ir,At,$i=`Handle all the shared methods for tokenization and special tokens as well as methods downloading/caching/loading
pretrained tokenizers as well as adding tokens to the vocabulary.`,Fr,Rt,Pi=`This class also contain the added tokens in a unified way on top of all tokenizers so we don’t have to handle the
specific vocabulary augmentation methods of the various underlying dictionary structures (BPE, sentencepiece…).`,Lr,St,Ci="Class attributes (overridden by derived classes)",jr,Xt,qi=`<li><strong>vocab_files_names</strong> (<code>Dict[str, str]</code>) — A dictionary with, as keys, the <code>__init__</code> keyword name of each
vocabulary file required by the model, and as associated values, the filename for saving the associated file
(string).</li> <li><strong>pretrained_vocab_files_map</strong> (<code>Dict[str, Dict[str, str]]</code>) — A dictionary of dictionaries, with the
high-level keys being the <code>__init__</code> keyword name of each vocabulary file required by the model, the
low-level being the <code>short-cut-names</code> of the pretrained models with, as associated values, the <code>url</code> to the
associated pretrained vocabulary file.</li> <li><strong>max_model_input_sizes</strong> (<code>Dict[str, Optional[int]]</code>) — A dictionary with, as keys, the <code>short-cut-names</code>
of the pretrained models, and as associated values, the maximum length of the sequence inputs of this model,
or <code>None</code> if the model has no maximum input size.</li> <li><strong>pretrained_init_configuration</strong> (<code>Dict[str, Dict[str, Any]]</code>) — A dictionary with, as keys, the
<code>short-cut-names</code> of the pretrained models, and as associated values, a dictionary of specific arguments to
pass to the <code>__init__</code> method of the tokenizer class for this pretrained model when loading the tokenizer
with the <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.from_pretrained">from_pretrained()</a> method.</li> <li><strong>model_input_names</strong> (<code>List[str]</code>) — A list of inputs expected in the forward pass of the model.</li> <li><strong>padding_side</strong> (<code>str</code>) — The default value for the side on which the model should have padding applied.
Should be <code>&#39;right&#39;</code> or <code>&#39;left&#39;</code>.</li> <li><strong>truncation_side</strong> (<code>str</code>) — The default value for the side on which the model should have truncation
applied. Should be <code>&#39;right&#39;</code> or <code>&#39;left&#39;</code>.</li>`,Wr,fe,Xe,Jr,Qt,Mi=`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences.`,Ur,N,Qe,Br,Yt,Ii=`Add a list of new tokens to the tokenizer class. If the new tokens are not in the vocabulary, they are added to
it with indices starting from length of the current vocabulary and and will be isolated before the tokenization
algorithm is applied. Added tokens and tokens from the vocabulary of the tokenization algorithm are therefore
not treated in the same way.`,Vr,Ot,Fi=`Note, when adding new tokens to the vocabulary, you should make sure to also resize the token embedding matrix
of the model so that its embedding matrix matches the tokenizer.`,Nr,Kt,Li='In order to do that, please use the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.resize_token_embeddings">resize_token_embeddings()</a> method.',Er,_e,Zr,F,Ye,Dr,en,ji=`Add a dictionary of special tokens (eos, pad, cls, etc.) to the encoder and link them to class attributes. If
special tokens are NOT in the vocabulary, they are added to it (indexed starting from the last index of the
current vocabulary).`,Hr,tn,Wi=`When adding new tokens to the vocabulary, you should make sure to also resize the token embedding matrix of the
model so that its embedding matrix matches the tokenizer.`,Gr,nn,Ji='In order to do that, please use the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.resize_token_embeddings">resize_token_embeddings()</a> method.',Ar,on,Ui="Using <code>add_special_tokens</code> will ensure your special tokens can be used in several ways:",Rr,rn,Bi=`<li>Special tokens can be skipped when decoding using <code>skip_special_tokens = True</code>.</li> <li>Special tokens are carefully handled by the tokenizer (they are never split), similar to <code>AddedTokens</code>.</li> <li>You can easily refer to special tokens using tokenizer class attributes like <code>tokenizer.cls_token</code>. This
makes it easy to develop model-agnostic training and fine-tuning scripts.</li>`,Sr,sn,Vi=`When possible, special tokens are already registered for provided pretrained models (for instance
<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a> <code>cls_token</code> is already registered to be :obj<em>’[CLS]’</em> and XLM’s one is also registered to be
<code>&#39;&lt;/s&gt;&#39;</code>).`,Xr,ge,Qr,ke,Oe,Yr,an,Ni=`Converts a Conversation object or a list of dictionaries with <code>&quot;role&quot;</code> and <code>&quot;content&quot;</code> keys to a list of token
ids. This method is intended for use with chat models, and will read the tokenizer’s chat_template attribute to
determine the format and control tokens to use when converting. When chat_template is None, it will fall back
to the default_chat_template specified at the class level.`,Or,be,Ke,Kr,dn,Ei="Convert a list of lists of token ids into a list of strings by calling decode.",es,Q,et,ts,cn,Zi=`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`,ns,ln,Di="Similar to doing <code>self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))</code>.",os,Y,tt,rs,pn,Hi="Converts a string to a sequence of ids (integer), using the tokenizer and vocabulary.",ss,mn,Gi="Same as doing <code>self.convert_tokens_to_ids(self.tokenize(text))</code>.",as,O,nt,is,hn,Ai="Upload the tokenizer files to the 🤗 Model Hub.",ds,Te,cs,xe,ot,ls,un,Ri=`Converts a single index or a sequence of indices in a token or a sequence of tokens, using the vocabulary and
added tokens.`,ps,ve,rt,ms,fn,Si=`Converts a token string (or a sequence of tokens) in a single integer id (or a sequence of ids), using the
vocabulary.`,hs,ye,st,us,_n,Xi=`Returns the added tokens in the vocabulary as a dictionary of token to index. Results might be different from
the fast call because for now we always add the tokens even if they are already in the vocabulary. This is
something we should change.`,fs,K,at,_s,gn,Qi="Returns the number of added tokens when encoding a sequence with special tokens.",gs,we,ks,ee,it,bs,kn,Yi="Performs any necessary transformations before tokenization.",Ts,bn,Oi=`This method should pop the arguments from kwargs and return the remaining <code>kwargs</code> as well. We test the
<code>kwargs</code> at the end of the encoding process to be sure all the arguments have been used.`,xs,te,dt,vs,Tn,Ki="Converts a string into a sequence of tokens, using the tokenizer.",ys,xn,ed=`Split in words for word-based vocabulary or sub-words for sub-word-based vocabularies
(BPE/SentencePieces/WordPieces). Takes care of added tokens.`,ar,ct,ir,lt,td=`The <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a> depend on the <a href="https://huggingface.co/docs/tokenizers" rel="nofollow">tokenizers</a> library. The tokenizers obtained from the 🤗 tokenizers library can be
loaded very simply into 🤗 transformers. Take a look at the <a href="../fast_tokenizers">Using tokenizers from 🤗 tokenizers</a> page to understand how this is done.`,dr,T,pt,ws,vn,nd="Base class for all fast tokenizers (wrapping HuggingFace tokenizers library).",zs,yn,od='Inherits from <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase">PreTrainedTokenizerBase</a>.',$s,wn,rd=`Handles all the shared methods for tokenization and special tokens, as well as methods for
downloading/caching/loading pretrained tokenizers, as well as adding tokens to the vocabulary.`,Ps,zn,sd=`This class also contains the added tokens in a unified way on top of all tokenizers so we don’t have to handle the
specific vocabulary augmentation methods of the various underlying dictionary structures (BPE, sentencepiece…).`,Cs,$n,ad="Class attributes (overridden by derived classes)",qs,Pn,id=`<li><strong>vocab_files_names</strong> (<code>Dict[str, str]</code>) — A dictionary with, as keys, the <code>__init__</code> keyword name of each
vocabulary file required by the model, and as associated values, the filename for saving the associated file
(string).</li> <li><strong>pretrained_vocab_files_map</strong> (<code>Dict[str, Dict[str, str]]</code>) — A dictionary of dictionaries, with the
high-level keys being the <code>__init__</code> keyword name of each vocabulary file required by the model, the
low-level being the <code>short-cut-names</code> of the pretrained models with, as associated values, the <code>url</code> to the
associated pretrained vocabulary file.</li> <li><strong>max_model_input_sizes</strong> (<code>Dict[str, Optional[int]]</code>) — A dictionary with, as keys, the <code>short-cut-names</code>
of the pretrained models, and as associated values, the maximum length of the sequence inputs of this model,
or <code>None</code> if the model has no maximum input size.</li> <li><strong>pretrained_init_configuration</strong> (<code>Dict[str, Dict[str, Any]]</code>) — A dictionary with, as keys, the
<code>short-cut-names</code> of the pretrained models, and as associated values, a dictionary of specific arguments to
pass to the <code>__init__</code> method of the tokenizer class for this pretrained model when loading the tokenizer
with the <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.from_pretrained">from_pretrained()</a> method.</li> <li><strong>model_input_names</strong> (<code>List[str]</code>) — A list of inputs expected in the forward pass of the model.</li> <li><strong>padding_side</strong> (<code>str</code>) — The default value for the side on which the model should have padding applied.
Should be <code>&#39;right&#39;</code> or <code>&#39;left&#39;</code>.</li> <li><strong>truncation_side</strong> (<code>str</code>) — The default value for the side on which the model should have truncation
applied. Should be <code>&#39;right&#39;</code> or <code>&#39;left&#39;</code>.</li>`,Ms,ze,mt,Is,Cn,dd=`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences.`,Fs,E,ht,Ls,qn,cd=`Add a list of new tokens to the tokenizer class. If the new tokens are not in the vocabulary, they are added to
it with indices starting from length of the current vocabulary and and will be isolated before the tokenization
algorithm is applied. Added tokens and tokens from the vocabulary of the tokenization algorithm are therefore
not treated in the same way.`,js,Mn,ld=`Note, when adding new tokens to the vocabulary, you should make sure to also resize the token embedding matrix
of the model so that its embedding matrix matches the tokenizer.`,Ws,In,pd='In order to do that, please use the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.resize_token_embeddings">resize_token_embeddings()</a> method.',Js,$e,Us,L,ut,Bs,Fn,md=`Add a dictionary of special tokens (eos, pad, cls, etc.) to the encoder and link them to class attributes. If
special tokens are NOT in the vocabulary, they are added to it (indexed starting from the last index of the
current vocabulary).`,Vs,Ln,hd=`When adding new tokens to the vocabulary, you should make sure to also resize the token embedding matrix of the
model so that its embedding matrix matches the tokenizer.`,Ns,jn,ud='In order to do that, please use the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.resize_token_embeddings">resize_token_embeddings()</a> method.',Es,Wn,fd="Using <code>add_special_tokens</code> will ensure your special tokens can be used in several ways:",Zs,Jn,_d=`<li>Special tokens can be skipped when decoding using <code>skip_special_tokens = True</code>.</li> <li>Special tokens are carefully handled by the tokenizer (they are never split), similar to <code>AddedTokens</code>.</li> <li>You can easily refer to special tokens using tokenizer class attributes like <code>tokenizer.cls_token</code>. This
makes it easy to develop model-agnostic training and fine-tuning scripts.</li>`,Ds,Un,gd=`When possible, special tokens are already registered for provided pretrained models (for instance
<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a> <code>cls_token</code> is already registered to be :obj<em>’[CLS]’</em> and XLM’s one is also registered to be
<code>&#39;&lt;/s&gt;&#39;</code>).`,Hs,Pe,Gs,Ce,ft,As,Bn,kd=`Converts a Conversation object or a list of dictionaries with <code>&quot;role&quot;</code> and <code>&quot;content&quot;</code> keys to a list of token
ids. This method is intended for use with chat models, and will read the tokenizer’s chat_template attribute to
determine the format and control tokens to use when converting. When chat_template is None, it will fall back
to the default_chat_template specified at the class level.`,Rs,qe,_t,Ss,Vn,bd="Convert a list of lists of token ids into a list of strings by calling decode.",Xs,ne,gt,Qs,Nn,Td=`Converts a sequence of ids in a string, using the tokenizer and vocabulary with options to remove special
tokens and clean up tokenization spaces.`,Ys,En,xd="Similar to doing <code>self.convert_tokens_to_string(self.convert_ids_to_tokens(token_ids))</code>.",Os,oe,kt,Ks,Zn,vd="Converts a string to a sequence of ids (integer), using the tokenizer and vocabulary.",ea,Dn,yd="Same as doing <code>self.convert_tokens_to_ids(self.tokenize(text))</code>.",ta,re,bt,na,Hn,wd="Upload the tokenizer files to the 🤗 Model Hub.",oa,Me,ra,Ie,Tt,sa,Gn,zd=`Converts a single index or a sequence of indices in a token or a sequence of tokens, using the vocabulary and
added tokens.`,aa,Fe,xt,ia,An,$d=`Converts a token string (or a sequence of tokens) in a single integer id (or a sequence of ids), using the
vocabulary.`,da,Le,vt,ca,Rn,Pd="Returns the added tokens in the vocabulary as a dictionary of token to index.",la,se,yt,pa,Sn,Cd="Returns the number of added tokens when encoding a sequence with special tokens.",ma,je,ha,ae,wt,ua,Xn,qd=`Define the truncation and the padding strategies for fast tokenizers (provided by HuggingFace tokenizers
library) and restore the tokenizer settings afterwards.`,fa,Qn,Md=`The provided tokenizer has no padding / truncation strategy before the managed section. If your tokenizer set a
padding / truncation strategy before, then it will be reset to no padding / truncation when exiting the managed
section.`,_a,We,zt,ga,Yn,Id=`Trains a tokenizer on a new corpus with the same defaults (in terms of special tokens or tokenization pipeline)
as the current one.`,cr,$t,lr,C,Pt,ka,On,Fd=`Holds the output of the <a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__"><strong>call</strong>()</a>,
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode_plus">encode_plus()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.batch_encode_plus">batch_encode_plus()</a> methods (tokens, attention_masks, etc).`,ba,Kn,Ld=`This class is derived from a python dictionary and can be used as a dictionary. In addition, this class exposes
utility methods to map from word/character space to token space.`,Ta,Z,Ct,xa,eo,jd=`Get the index of the token in the encoded output comprising a character in the original string for a sequence
of the batch.`,va,to,Wd="Can be called as:",ya,no,Jd="<li><code>self.char_to_token(char_index)</code> if batch size is 1</li> <li><code>self.char_to_token(batch_index, char_index)</code> if batch size is greater or equal to 1</li>",wa,oo,Ud=`This method is particularly suited when the input sequences are provided as pre-tokenized sequences (i.e. words
are defined by the user). In this case it allows to easily associate encoded tokens with provided tokenized
words.`,za,D,qt,$a,ro,Bd=`Get the word in the original string corresponding to a character in the original string of a sequence of the
batch.`,Pa,so,Vd="Can be called as:",Ca,ao,Nd="<li><code>self.char_to_word(char_index)</code> if batch size is 1</li> <li><code>self.char_to_word(batch_index, char_index)</code> if batch size is greater than 1</li>",qa,io,Ed=`This method is particularly suited when the input sequences are provided as pre-tokenized sequences (i.e. words
are defined by the user). In this case it allows to easily associate encoded tokens with provided tokenized
words.`,Ma,Je,Mt,Ia,co,Zd="Convert the inner content to tensors.",Fa,ie,It,La,lo,Dd="Return a list mapping the tokens to the id of their original sentences:",ja,po,Hd=`<li><code>None</code> for special tokens added around or between sequences,</li> <li><code>0</code> for tokens corresponding to words in the first sequence,</li> <li><code>1</code> for tokens corresponding to words in the second sequence when a pair of sequences was jointly
encoded.</li>`,Wa,Ue,Ft,Ja,mo,Gd="Send all values to device by calling <code>v.to(device)</code> (PyTorch only).",Ua,U,Lt,Ba,ho,Ad="Get the character span corresponding to an encoded token in a sequence of the batch.",Va,uo,Rd='Character spans are returned as a <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.CharSpan">CharSpan</a> with:',Na,fo,Sd=`<li><strong>start</strong> — Index of the first character in the original string associated to the token.</li> <li><strong>end</strong> — Index of the character following the last character in the original string associated to the
token.</li>`,Ea,_o,Xd="Can be called as:",Za,go,Qd="<li><code>self.token_to_chars(token_index)</code> if batch size is 1</li> <li><code>self.token_to_chars(batch_index, token_index)</code> if batch size is greater or equal to 1</li>",Da,H,jt,Ha,ko,Yd=`Get the index of the sequence represented by the given token. In the general use case, this method returns <code>0</code>
for a single sequence or the first sequence of a pair, and <code>1</code> for the second sequence of a pair`,Ga,bo,Od="Can be called as:",Aa,To,Kd="<li><code>self.token_to_sequence(token_index)</code> if batch size is 1</li> <li><code>self.token_to_sequence(batch_index, token_index)</code> if batch size is greater than 1</li>",Ra,xo,ec=`This method is particularly suited when the input sequences are provided as pre-tokenized sequences (i.e.,
words are defined by the user). In this case it allows to easily associate encoded tokens with provided
tokenized words.`,Sa,G,Wt,Xa,vo,tc="Get the index of the word corresponding (i.e. comprising) to an encoded token in a sequence of the batch.",Qa,yo,nc="Can be called as:",Ya,wo,oc="<li><code>self.token_to_word(token_index)</code> if batch size is 1</li> <li><code>self.token_to_word(batch_index, token_index)</code> if batch size is greater than 1</li>",Oa,zo,rc=`This method is particularly suited when the input sequences are provided as pre-tokenized sequences (i.e.,
words are defined by the user). In this case it allows to easily associate encoded tokens with provided
tokenized words.`,Ka,Be,Jt,ei,$o,sc=`Return the list of tokens (sub-parts of the input strings after word/subword splitting and before conversion to
integer indices) at a given batch index (only works for the output of a fast tokenizer).`,ti,Ve,Ut,ni,Po,ac="Return a list mapping the tokens to their actual word in the initial sentence for a fast tokenizer.",oi,B,Bt,ri,Co,ic="Get the character span in the original string corresponding to given word in a sequence of the batch.",si,qo,dc="Character spans are returned as a CharSpan NamedTuple with:",ai,Mo,cc="<li>start: index of the first character in the original string</li> <li>end: index of the character following the last character in the original string</li>",ii,Io,lc="Can be called as:",di,Fo,pc="<li><code>self.word_to_chars(word_index)</code> if batch size is 1</li> <li><code>self.word_to_chars(batch_index, word_index)</code> if batch size is greater or equal to 1</li>",ci,J,Vt,li,Lo,mc="Get the encoded token span corresponding to a word in a sequence of the batch.",pi,jo,hc='Token spans are returned as a <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.TokenSpan">TokenSpan</a> with:',mi,Wo,uc="<li><strong>start</strong> — Index of the first token.</li> <li><strong>end</strong> — Index of the token following the last token.</li>",hi,Jo,fc="Can be called as:",ui,Uo,_c=`<li><code>self.word_to_tokens(word_index, sequence_index: int = 0)</code> if batch size is 1</li> <li><code>self.word_to_tokens(batch_index, word_index, sequence_index: int = 0)</code> if batch size is greater or equal to
1</li>`,fi,Bo,gc=`This method is particularly suited when the input sequences are provided as pre-tokenized sequences (i.e. words
are defined by the user). In this case it allows to easily associate encoded tokens with provided tokenized
words.`,_i,Ne,Nt,gi,Vo,kc="Return a list mapping the tokens to their actual word in the initial sentence for a fast tokenizer.",pr,Oo,mr;return P=new Cr({props:{title:"Tokenizer",local:"tokenizer",headingTag:"h1"}}),Re=new Cr({props:{title:"PreTrainedTokenizer",local:"transformers.PreTrainedTokenizer",headingTag:"h2"}}),Se=new w({props:{name:"class transformers.PreTrainedTokenizer",anchor:"transformers.PreTrainedTokenizer",parameters:[{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizer.model_max_length",description:`<strong>model_max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The maximum length (in number of tokens) for the inputs to the transformer model. When the tokenizer is
loaded with <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.from_pretrained">from_pretrained()</a>, this will be set to the
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
to not split special tokens. This means that if <code>&lt;s&gt;</code> is the <code>bos_token</code>, then <code>tokenizer.tokenize(&quot;&lt;s&gt;&quot;) = [&apos;&lt;s&gt;</code>]. Otherwise, if <code>split_special_tokens=True</code>, then <code>tokenizer.tokenize(&quot;&lt;s&gt;&quot;)</code> will be give <code>[&apos;&lt;&apos;, &apos;s&apos;, &apos;&gt;&apos;]</code>. This argument is only supported for <code>slow</code> tokenizers for the moment.`,name:"split_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils.py#L335"}}),Xe=new w({props:{name:"__call__",anchor:"transformers.PreTrainedTokenizer.__call__",parameters:[{name:"text",val:": Union = None"},{name:"text_pair",val:": Union = None"},{name:"text_target",val:": Union = None"},{name:"text_pair_target",val:": Union = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": Union = False"},{name:"truncation",val:": Union = None"},{name:"max_length",val:": Optional = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": bool = False"},{name:"pad_to_multiple_of",val:": Optional = None"},{name:"return_tensors",val:": Union = None"},{name:"return_token_type_ids",val:": Optional = None"},{name:"return_attention_mask",val:": Optional = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
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
automatically.`,name:"add_special_tokens"},{anchor:"transformers.PreTrainedTokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.PreTrainedTokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
<code>&gt;= 7.5</code> (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.PreTrainedTokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
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
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.PreTrainedTokenizer.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.PreTrainedTokenizer.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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
`}}),Qe=new w({props:{name:"add_tokens",anchor:"transformers.PreTrainedTokenizer.add_tokens",parameters:[{name:"new_tokens",val:": Union"},{name:"special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizer.add_tokens.new_tokens",description:`<strong>new_tokens</strong> (<code>str</code>, <code>tokenizers.AddedToken</code> or a list of <em>str</em> or <code>tokenizers.AddedToken</code>) &#x2014;
Tokens are only added if they are not already in the vocabulary. <code>tokenizers.AddedToken</code> wraps a string
token to let you personalize its behavior: whether this token should only match against a single word,
whether this token should strip all potential whitespaces on the left side, whether this token should
strip all potential whitespaces on the right side, etc.`,name:"new_tokens"},{anchor:"transformers.PreTrainedTokenizer.add_tokens.special_tokens",description:`<strong>special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Can be used to specify if the token is a special token. This mostly change the normalization behavior
(special tokens like CLS or [MASK] are usually not lower-cased for instance).</p>
<p>See details for <code>tokenizers.AddedToken</code> in HuggingFace tokenizers library.`,name:"special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L975",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>Number of tokens added to the vocabulary.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>int</code></p>
`}}),_e=new Qo({props:{anchor:"transformers.PreTrainedTokenizer.add_tokens.example",$$slots:{default:[zc]},$$scope:{ctx:W}}}),Ye=new w({props:{name:"add_special_tokens",anchor:"transformers.PreTrainedTokenizer.add_special_tokens",parameters:[{name:"special_tokens_dict",val:": Dict"},{name:"replace_additional_special_tokens",val:" = True"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizer.add_special_tokens.special_tokens_dict",description:`<strong>special_tokens_dict</strong> (dictionary <em>str</em> to <em>str</em> or <code>tokenizers.AddedToken</code>) &#x2014;
Keys should be in the list of predefined special attributes: [<code>bos_token</code>, <code>eos_token</code>, <code>unk_token</code>,
<code>sep_token</code>, <code>pad_token</code>, <code>cls_token</code>, <code>mask_token</code>, <code>additional_special_tokens</code>].</p>
<p>Tokens are only added if they are not already in the vocabulary (tested by checking if the tokenizer
assign the index of the <code>unk_token</code> to them).`,name:"special_tokens_dict"},{anchor:"transformers.PreTrainedTokenizer.add_special_tokens.replace_additional_special_tokens",description:`<strong>replace_additional_special_tokens</strong> (<code>bool</code>, <em>optional</em>,, defaults to <code>True</code>) &#x2014;
If <code>True</code>, the existing list of additional special tokens will be replaced by the list provided in
<code>special_tokens_dict</code>. Otherwise, <code>self._additional_special_tokens</code> is just extended. In the former
case, the tokens will NOT be removed from the tokenizer&#x2019;s full vocabulary - they are only being flagged
as non-special tokens. Remember, this only affects which tokens are skipped during decoding, not the
<code>added_tokens_encoder</code> and <code>added_tokens_decoder</code>. This means that the previous
<code>additional_special_tokens</code> are still added tokens, and will not be split by the model.`,name:"replace_additional_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L873",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>Number of tokens added to the vocabulary.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>int</code></p>
`}}),ge=new Qo({props:{anchor:"transformers.PreTrainedTokenizer.add_special_tokens.example",$$slots:{default:[$c]},$$scope:{ctx:W}}}),Oe=new w({props:{name:"apply_chat_template",anchor:"transformers.PreTrainedTokenizer.apply_chat_template",parameters:[{name:"conversation",val:": Union"},{name:"chat_template",val:": Optional = None"},{name:"add_generation_prompt",val:": bool = False"},{name:"tokenize",val:": bool = True"},{name:"padding",val:": bool = False"},{name:"truncation",val:": bool = False"},{name:"max_length",val:": Optional = None"},{name:"return_tensors",val:": Union = None"},{name:"return_dict",val:": bool = False"},{name:"**tokenizer_kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizer.apply_chat_template.conversation",description:`<strong>conversation</strong> (Union[List[Dict[str, str]], &#x201C;Conversation&#x201D;]) &#x2014; A Conversation object or list of dicts
with &#x201C;role&#x201D; and &#x201C;content&#x201D; keys, representing the chat history so far.`,name:"conversation"},{anchor:"transformers.PreTrainedTokenizer.apply_chat_template.chat_template",description:`<strong>chat_template</strong> (str, <em>optional</em>) &#x2014; A Jinja template to use for this conversion. If
this is not passed, the model&#x2019;s default chat template will be used instead.`,name:"chat_template"},{anchor:"transformers.PreTrainedTokenizer.apply_chat_template.add_generation_prompt",description:`<strong>add_generation_prompt</strong> (bool, <em>optional</em>) &#x2014; Whether to end the prompt with the token(s) that indicate
the start of an assistant message. This is useful when you want to generate a response from the model.
Note that this argument will be passed to the chat template, and so it must be supported in the
template for this argument to have any effect.`,name:"add_generation_prompt"},{anchor:"transformers.PreTrainedTokenizer.apply_chat_template.tokenize",description:`<strong>tokenize</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
Whether to tokenize the output. If <code>False</code>, the output will be a string.`,name:"tokenize"},{anchor:"transformers.PreTrainedTokenizer.apply_chat_template.padding",description:`<strong>padding</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether to pad sequences to the maximum length. Has no effect if tokenize is <code>False</code>.`,name:"padding"},{anchor:"transformers.PreTrainedTokenizer.apply_chat_template.truncation",description:`<strong>truncation</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether to truncate sequences at the maximum length. Has no effect if tokenize is <code>False</code>.`,name:"truncation"},{anchor:"transformers.PreTrainedTokenizer.apply_chat_template.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Maximum length (in tokens) to use for padding or truncation. Has no effect if tokenize is <code>False</code>. If
not specified, the tokenizer&#x2019;s <code>max_length</code> attribute will be used as a default.`,name:"max_length"},{anchor:"transformers.PreTrainedTokenizer.apply_chat_template.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
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
`}}),Ke=new w({props:{name:"batch_decode",anchor:"transformers.PreTrainedTokenizer.batch_decode",parameters:[{name:"sequences",val:": Union"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizer.batch_decode.sequences",description:`<strong>sequences</strong> (<code>Union[List[int], List[List[int]], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"sequences"},{anchor:"transformers.PreTrainedTokenizer.batch_decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.PreTrainedTokenizer.batch_decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to clean up the tokenization spaces. If <code>None</code>, will default to
<code>self.clean_up_tokenization_spaces</code>.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.PreTrainedTokenizer.batch_decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L3718",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The list of decoded sentences.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[str]</code></p>
`}}),et=new w({props:{name:"decode",anchor:"transformers.PreTrainedTokenizer.decode",parameters:[{name:"token_ids",val:": Union"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizer.decode.token_ids",description:`<strong>token_ids</strong> (<code>Union[int, List[int], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"token_ids"},{anchor:"transformers.PreTrainedTokenizer.decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.PreTrainedTokenizer.decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to clean up the tokenization spaces. If <code>None</code>, will default to
<code>self.clean_up_tokenization_spaces</code>.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.PreTrainedTokenizer.decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L3752",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The decoded sentence.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>str</code></p>
`}}),tt=new w({props:{name:"encode",anchor:"transformers.PreTrainedTokenizer.encode",parameters:[{name:"text",val:": Union"},{name:"text_pair",val:": Union = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": Union = False"},{name:"truncation",val:": Union = None"},{name:"max_length",val:": Optional = None"},{name:"stride",val:": int = 0"},{name:"return_tensors",val:": Union = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizer.encode.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code> or <code>List[int]</code>) &#x2014;
The first sequence to be encoded. This can be a string, a list of strings (tokenized string using the
<code>tokenize</code> method) or a list of integers (tokenized string ids using the <code>convert_tokens_to_ids</code>
method).`,name:"text"},{anchor:"transformers.PreTrainedTokenizer.encode.text_pair",description:`<strong>text_pair</strong> (<code>str</code>, <code>List[str]</code> or <code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second sequence to be encoded. This can be a string, a list of strings (tokenized string using
the <code>tokenize</code> method) or a list of integers (tokenized string ids using the <code>convert_tokens_to_ids</code>
method).`,name:"text_pair"},{anchor:"transformers.PreTrainedTokenizer.encode.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to add special tokens when encoding the sequences. This will use the underlying
<code>PretrainedTokenizerBase.build_inputs_with_special_tokens</code> function, which defines which tokens are
automatically added to the input ids. This is usefull if you want to add <code>bos</code> or <code>eos</code> tokens
automatically.`,name:"add_special_tokens"},{anchor:"transformers.PreTrainedTokenizer.encode.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.PreTrainedTokenizer.encode.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
<code>&gt;= 7.5</code> (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.PreTrainedTokenizer.encode.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
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
`}}),nt=new w({props:{name:"push_to_hub",anchor:"transformers.PreTrainedTokenizer.push_to_hub",parameters:[{name:"repo_id",val:": str"},{name:"use_temp_dir",val:": Optional = None"},{name:"commit_message",val:": Optional = None"},{name:"private",val:": Optional = None"},{name:"token",val:": Union = None"},{name:"max_shard_size",val:": Union = '5GB'"},{name:"create_pr",val:": bool = False"},{name:"safe_serialization",val:": bool = True"},{name:"revision",val:": str = None"},{name:"commit_description",val:": str = None"},{name:"tags",val:": Optional = None"},{name:"**deprecated_kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizer.push_to_hub.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
List of tags to push on the Hub.`,name:"tags"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/utils/hub.py#L768"}}),Te=new Qo({props:{anchor:"transformers.PreTrainedTokenizer.push_to_hub.example",$$slots:{default:[Pc]},$$scope:{ctx:W}}}),ot=new w({props:{name:"convert_ids_to_tokens",anchor:"transformers.PreTrainedTokenizer.convert_ids_to_tokens",parameters:[{name:"ids",val:": Union"},{name:"skip_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizer.convert_ids_to_tokens.ids",description:`<strong>ids</strong> (<code>int</code> or <code>List[int]</code>) &#x2014;
The token id (or token ids) to convert to tokens.`,name:"ids"},{anchor:"transformers.PreTrainedTokenizer.convert_ids_to_tokens.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils.py#L953",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The decoded token(s).</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>str</code> or <code>List[str]</code></p>
`}}),rt=new w({props:{name:"convert_tokens_to_ids",anchor:"transformers.PreTrainedTokenizer.convert_tokens_to_ids",parameters:[{name:"tokens",val:": Union"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizer.convert_tokens_to_ids.tokens",description:"<strong>tokens</strong> (<code>str</code> or <code>List[str]</code>) &#x2014; One or several token(s) to convert to token id(s).",name:"tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils.py#L630",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The token id or list of token ids.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>int</code> or <code>List[int]</code></p>
`}}),st=new w({props:{name:"get_added_vocab",anchor:"transformers.PreTrainedTokenizer.get_added_vocab",parameters:[],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils.py#L415",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The added tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>Dict[str, int]</code></p>
`}}),at=new w({props:{name:"num_special_tokens_to_add",anchor:"transformers.PreTrainedTokenizer.num_special_tokens_to_add",parameters:[{name:"pair",val:": bool = False"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizer.num_special_tokens_to_add.pair",description:`<strong>pair</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the number of added tokens should be computed in the case of a sequence pair or a single
sequence.`,name:"pair"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils.py#L518",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>Number of special tokens added to sequences.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>int</code></p>
`}}),we=new bc({props:{$$slots:{default:[Cc]},$$scope:{ctx:W}}}),it=new w({props:{name:"prepare_for_tokenization",anchor:"transformers.PreTrainedTokenizer.prepare_for_tokenization",parameters:[{name:"text",val:": str"},{name:"is_split_into_words",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizer.prepare_for_tokenization.text",description:`<strong>text</strong> (<code>str</code>) &#x2014;
The text to prepare.`,name:"text"},{anchor:"transformers.PreTrainedTokenizer.prepare_for_tokenization.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.PreTrainedTokenizer.prepare_for_tokenization.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, Any]</code>, <em>optional</em>) &#x2014;
Keyword arguments to use for the tokenization.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils.py#L891",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The prepared text and the unused kwargs.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>Tuple[str, Dict[str, Any]]</code></p>
`}}),dt=new w({props:{name:"tokenize",anchor:"transformers.PreTrainedTokenizer.tokenize",parameters:[{name:"text",val:": str"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizer.tokenize.text",description:`<strong>text</strong> (<code>str</code>) &#x2014;
The sequence to be encoded.`,name:"text"},{anchor:"transformers.PreTrainedTokenizer.tokenize.*kwargs",description:`*<strong>*kwargs</strong> (additional keyword arguments) &#x2014;
Passed along to the model-specific <code>prepare_for_tokenization</code> preprocessing method.`,name:"*kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils.py#L541",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The list of tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[str]</code></p>
`}}),ct=new Cr({props:{title:"PreTrainedTokenizerFast",local:"transformers.PreTrainedTokenizerFast",headingTag:"h2"}}),pt=new w({props:{name:"class transformers.PreTrainedTokenizerFast",anchor:"transformers.PreTrainedTokenizerFast",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerFast.model_max_length",description:`<strong>model_max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The maximum length (in number of tokens) for the inputs to the transformer model. When the tokenizer is
loaded with <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.from_pretrained">from_pretrained()</a>, this will be set to the
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
to not split special tokens. This means that if <code>&lt;s&gt;</code> is the <code>bos_token</code>, then <code>tokenizer.tokenize(&quot;&lt;s&gt;&quot;) = [&apos;&lt;s&gt;</code>]. Otherwise, if <code>split_special_tokens=True</code>, then <code>tokenizer.tokenize(&quot;&lt;s&gt;&quot;)</code> will be give <code>[&apos;&lt;&apos;, &apos;s&apos;, &apos;&gt;&apos;]</code>. This argument is only supported for <code>slow</code> tokenizers for the moment.`,name:"split_special_tokens"},{anchor:"transformers.PreTrainedTokenizerFast.tokenizer_object",description:`<strong>tokenizer_object</strong> (<a href="https://huggingface.co/docs/tokenizers/main/en/api/tokenizer#tokenizers.Tokenizer" rel="nofollow">tokenizers.Tokenizer</a>) &#x2014;
A <a href="https://huggingface.co/docs/tokenizers/main/en/api/tokenizer#tokenizers.Tokenizer" rel="nofollow">tokenizers.Tokenizer</a> object from &#x1F917; tokenizers to instantiate from. See <a href="../fast_tokenizers">Using tokenizers from &#x1F917;
tokenizers</a> for more information.`,name:"tokenizer_object"},{anchor:"transformers.PreTrainedTokenizerFast.tokenizer_file",description:`<strong>tokenizer_file</strong> (<code>str</code>) &#x2014;
A path to a local JSON file representing a previously serialized <a href="https://huggingface.co/docs/tokenizers/main/en/api/tokenizer#tokenizers.Tokenizer" rel="nofollow">tokenizers.Tokenizer</a> object from &#x1F917;
tokenizers.`,name:"tokenizer_file"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_fast.py#L77"}}),mt=new w({props:{name:"__call__",anchor:"transformers.PreTrainedTokenizerFast.__call__",parameters:[{name:"text",val:": Union = None"},{name:"text_pair",val:": Union = None"},{name:"text_target",val:": Union = None"},{name:"text_pair_target",val:": Union = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": Union = False"},{name:"truncation",val:": Union = None"},{name:"max_length",val:": Optional = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": bool = False"},{name:"pad_to_multiple_of",val:": Optional = None"},{name:"return_tensors",val:": Union = None"},{name:"return_token_type_ids",val:": Optional = None"},{name:"return_attention_mask",val:": Optional = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerFast.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
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
automatically.`,name:"add_special_tokens"},{anchor:"transformers.PreTrainedTokenizerFast.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.PreTrainedTokenizerFast.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
<code>&gt;= 7.5</code> (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.PreTrainedTokenizerFast.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
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
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.PreTrainedTokenizerFast.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.PreTrainedTokenizerFast.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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
`}}),ht=new w({props:{name:"add_tokens",anchor:"transformers.PreTrainedTokenizerFast.add_tokens",parameters:[{name:"new_tokens",val:": Union"},{name:"special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerFast.add_tokens.new_tokens",description:`<strong>new_tokens</strong> (<code>str</code>, <code>tokenizers.AddedToken</code> or a list of <em>str</em> or <code>tokenizers.AddedToken</code>) &#x2014;
Tokens are only added if they are not already in the vocabulary. <code>tokenizers.AddedToken</code> wraps a string
token to let you personalize its behavior: whether this token should only match against a single word,
whether this token should strip all potential whitespaces on the left side, whether this token should
strip all potential whitespaces on the right side, etc.`,name:"new_tokens"},{anchor:"transformers.PreTrainedTokenizerFast.add_tokens.special_tokens",description:`<strong>special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Can be used to specify if the token is a special token. This mostly change the normalization behavior
(special tokens like CLS or [MASK] are usually not lower-cased for instance).</p>
<p>See details for <code>tokenizers.AddedToken</code> in HuggingFace tokenizers library.`,name:"special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L975",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>Number of tokens added to the vocabulary.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>int</code></p>
`}}),$e=new Qo({props:{anchor:"transformers.PreTrainedTokenizerFast.add_tokens.example",$$slots:{default:[qc]},$$scope:{ctx:W}}}),ut=new w({props:{name:"add_special_tokens",anchor:"transformers.PreTrainedTokenizerFast.add_special_tokens",parameters:[{name:"special_tokens_dict",val:": Dict"},{name:"replace_additional_special_tokens",val:" = True"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerFast.add_special_tokens.special_tokens_dict",description:`<strong>special_tokens_dict</strong> (dictionary <em>str</em> to <em>str</em> or <code>tokenizers.AddedToken</code>) &#x2014;
Keys should be in the list of predefined special attributes: [<code>bos_token</code>, <code>eos_token</code>, <code>unk_token</code>,
<code>sep_token</code>, <code>pad_token</code>, <code>cls_token</code>, <code>mask_token</code>, <code>additional_special_tokens</code>].</p>
<p>Tokens are only added if they are not already in the vocabulary (tested by checking if the tokenizer
assign the index of the <code>unk_token</code> to them).`,name:"special_tokens_dict"},{anchor:"transformers.PreTrainedTokenizerFast.add_special_tokens.replace_additional_special_tokens",description:`<strong>replace_additional_special_tokens</strong> (<code>bool</code>, <em>optional</em>,, defaults to <code>True</code>) &#x2014;
If <code>True</code>, the existing list of additional special tokens will be replaced by the list provided in
<code>special_tokens_dict</code>. Otherwise, <code>self._additional_special_tokens</code> is just extended. In the former
case, the tokens will NOT be removed from the tokenizer&#x2019;s full vocabulary - they are only being flagged
as non-special tokens. Remember, this only affects which tokens are skipped during decoding, not the
<code>added_tokens_encoder</code> and <code>added_tokens_decoder</code>. This means that the previous
<code>additional_special_tokens</code> are still added tokens, and will not be split by the model.`,name:"replace_additional_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L873",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>Number of tokens added to the vocabulary.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>int</code></p>
`}}),Pe=new Qo({props:{anchor:"transformers.PreTrainedTokenizerFast.add_special_tokens.example",$$slots:{default:[Mc]},$$scope:{ctx:W}}}),ft=new w({props:{name:"apply_chat_template",anchor:"transformers.PreTrainedTokenizerFast.apply_chat_template",parameters:[{name:"conversation",val:": Union"},{name:"chat_template",val:": Optional = None"},{name:"add_generation_prompt",val:": bool = False"},{name:"tokenize",val:": bool = True"},{name:"padding",val:": bool = False"},{name:"truncation",val:": bool = False"},{name:"max_length",val:": Optional = None"},{name:"return_tensors",val:": Union = None"},{name:"return_dict",val:": bool = False"},{name:"**tokenizer_kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerFast.apply_chat_template.conversation",description:`<strong>conversation</strong> (Union[List[Dict[str, str]], &#x201C;Conversation&#x201D;]) &#x2014; A Conversation object or list of dicts
with &#x201C;role&#x201D; and &#x201C;content&#x201D; keys, representing the chat history so far.`,name:"conversation"},{anchor:"transformers.PreTrainedTokenizerFast.apply_chat_template.chat_template",description:`<strong>chat_template</strong> (str, <em>optional</em>) &#x2014; A Jinja template to use for this conversion. If
this is not passed, the model&#x2019;s default chat template will be used instead.`,name:"chat_template"},{anchor:"transformers.PreTrainedTokenizerFast.apply_chat_template.add_generation_prompt",description:`<strong>add_generation_prompt</strong> (bool, <em>optional</em>) &#x2014; Whether to end the prompt with the token(s) that indicate
the start of an assistant message. This is useful when you want to generate a response from the model.
Note that this argument will be passed to the chat template, and so it must be supported in the
template for this argument to have any effect.`,name:"add_generation_prompt"},{anchor:"transformers.PreTrainedTokenizerFast.apply_chat_template.tokenize",description:`<strong>tokenize</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
Whether to tokenize the output. If <code>False</code>, the output will be a string.`,name:"tokenize"},{anchor:"transformers.PreTrainedTokenizerFast.apply_chat_template.padding",description:`<strong>padding</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether to pad sequences to the maximum length. Has no effect if tokenize is <code>False</code>.`,name:"padding"},{anchor:"transformers.PreTrainedTokenizerFast.apply_chat_template.truncation",description:`<strong>truncation</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether to truncate sequences at the maximum length. Has no effect if tokenize is <code>False</code>.`,name:"truncation"},{anchor:"transformers.PreTrainedTokenizerFast.apply_chat_template.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Maximum length (in tokens) to use for padding or truncation. Has no effect if tokenize is <code>False</code>. If
not specified, the tokenizer&#x2019;s <code>max_length</code> attribute will be used as a default.`,name:"max_length"},{anchor:"transformers.PreTrainedTokenizerFast.apply_chat_template.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
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
`}}),_t=new w({props:{name:"batch_decode",anchor:"transformers.PreTrainedTokenizerFast.batch_decode",parameters:[{name:"sequences",val:": Union"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerFast.batch_decode.sequences",description:`<strong>sequences</strong> (<code>Union[List[int], List[List[int]], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"sequences"},{anchor:"transformers.PreTrainedTokenizerFast.batch_decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.PreTrainedTokenizerFast.batch_decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to clean up the tokenization spaces. If <code>None</code>, will default to
<code>self.clean_up_tokenization_spaces</code>.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.PreTrainedTokenizerFast.batch_decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L3718",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The list of decoded sentences.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[str]</code></p>
`}}),gt=new w({props:{name:"decode",anchor:"transformers.PreTrainedTokenizerFast.decode",parameters:[{name:"token_ids",val:": Union"},{name:"skip_special_tokens",val:": bool = False"},{name:"clean_up_tokenization_spaces",val:": bool = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerFast.decode.token_ids",description:`<strong>token_ids</strong> (<code>Union[int, List[int], np.ndarray, torch.Tensor, tf.Tensor]</code>) &#x2014;
List of tokenized input ids. Can be obtained using the <code>__call__</code> method.`,name:"token_ids"},{anchor:"transformers.PreTrainedTokenizerFast.decode.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"},{anchor:"transformers.PreTrainedTokenizerFast.decode.clean_up_tokenization_spaces",description:`<strong>clean_up_tokenization_spaces</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to clean up the tokenization spaces. If <code>None</code>, will default to
<code>self.clean_up_tokenization_spaces</code>.`,name:"clean_up_tokenization_spaces"},{anchor:"transformers.PreTrainedTokenizerFast.decode.kwargs",description:`<strong>kwargs</strong> (additional keyword arguments, <em>optional</em>) &#x2014;
Will be passed to the underlying model specific decode method.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L3752",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The decoded sentence.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>str</code></p>
`}}),kt=new w({props:{name:"encode",anchor:"transformers.PreTrainedTokenizerFast.encode",parameters:[{name:"text",val:": Union"},{name:"text_pair",val:": Union = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": Union = False"},{name:"truncation",val:": Union = None"},{name:"max_length",val:": Optional = None"},{name:"stride",val:": int = 0"},{name:"return_tensors",val:": Union = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerFast.encode.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code> or <code>List[int]</code>) &#x2014;
The first sequence to be encoded. This can be a string, a list of strings (tokenized string using the
<code>tokenize</code> method) or a list of integers (tokenized string ids using the <code>convert_tokens_to_ids</code>
method).`,name:"text"},{anchor:"transformers.PreTrainedTokenizerFast.encode.text_pair",description:`<strong>text_pair</strong> (<code>str</code>, <code>List[str]</code> or <code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second sequence to be encoded. This can be a string, a list of strings (tokenized string using
the <code>tokenize</code> method) or a list of integers (tokenized string ids using the <code>convert_tokens_to_ids</code>
method).`,name:"text_pair"},{anchor:"transformers.PreTrainedTokenizerFast.encode.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to add special tokens when encoding the sequences. This will use the underlying
<code>PretrainedTokenizerBase.build_inputs_with_special_tokens</code> function, which defines which tokens are
automatically added to the input ids. This is usefull if you want to add <code>bos</code> or <code>eos</code> tokens
automatically.`,name:"add_special_tokens"},{anchor:"transformers.PreTrainedTokenizerFast.encode.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.PreTrainedTokenizerFast.encode.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
<code>&gt;= 7.5</code> (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.PreTrainedTokenizerFast.encode.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
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
`}}),bt=new w({props:{name:"push_to_hub",anchor:"transformers.PreTrainedTokenizerFast.push_to_hub",parameters:[{name:"repo_id",val:": str"},{name:"use_temp_dir",val:": Optional = None"},{name:"commit_message",val:": Optional = None"},{name:"private",val:": Optional = None"},{name:"token",val:": Union = None"},{name:"max_shard_size",val:": Union = '5GB'"},{name:"create_pr",val:": bool = False"},{name:"safe_serialization",val:": bool = True"},{name:"revision",val:": str = None"},{name:"commit_description",val:": str = None"},{name:"tags",val:": Optional = None"},{name:"**deprecated_kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerFast.push_to_hub.repo_id",description:`<strong>repo_id</strong> (<code>str</code>) &#x2014;
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
List of tags to push on the Hub.`,name:"tags"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/utils/hub.py#L768"}}),Me=new Qo({props:{anchor:"transformers.PreTrainedTokenizerFast.push_to_hub.example",$$slots:{default:[Ic]},$$scope:{ctx:W}}}),Tt=new w({props:{name:"convert_ids_to_tokens",anchor:"transformers.PreTrainedTokenizerFast.convert_ids_to_tokens",parameters:[{name:"ids",val:": Union"},{name:"skip_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerFast.convert_ids_to_tokens.ids",description:`<strong>ids</strong> (<code>int</code> or <code>List[int]</code>) &#x2014;
The token id (or token ids) to convert to tokens.`,name:"ids"},{anchor:"transformers.PreTrainedTokenizerFast.convert_ids_to_tokens.skip_special_tokens",description:`<strong>skip_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to remove special tokens in the decoding.`,name:"skip_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_fast.py#L369",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The decoded token(s).</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>str</code> or <code>List[str]</code></p>
`}}),xt=new w({props:{name:"convert_tokens_to_ids",anchor:"transformers.PreTrainedTokenizerFast.convert_tokens_to_ids",parameters:[{name:"tokens",val:": Union"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerFast.convert_tokens_to_ids.tokens",description:"<strong>tokens</strong> (<code>str</code> or <code>List[str]</code>) &#x2014; One or several token(s) to convert to token id(s).",name:"tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_fast.py#L314",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The token id or list of token ids.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>int</code> or <code>List[int]</code></p>
`}}),vt=new w({props:{name:"get_added_vocab",anchor:"transformers.PreTrainedTokenizerFast.get_added_vocab",parameters:[],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_fast.py#L238",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The added tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>Dict[str, int]</code></p>
`}}),yt=new w({props:{name:"num_special_tokens_to_add",anchor:"transformers.PreTrainedTokenizerFast.num_special_tokens_to_add",parameters:[{name:"pair",val:": bool = False"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerFast.num_special_tokens_to_add.pair",description:`<strong>pair</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the number of added tokens should be computed in the case of a sequence pair or a single
sequence.`,name:"pair"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_fast.py#L348",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>Number of special tokens added to sequences.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>int</code></p>
`}}),je=new bc({props:{$$slots:{default:[Fc]},$$scope:{ctx:W}}}),wt=new w({props:{name:"set_truncation_and_padding",anchor:"transformers.PreTrainedTokenizerFast.set_truncation_and_padding",parameters:[{name:"padding_strategy",val:": PaddingStrategy"},{name:"truncation_strategy",val:": TruncationStrategy"},{name:"max_length",val:": int"},{name:"stride",val:": int"},{name:"pad_to_multiple_of",val:": Optional"}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerFast.set_truncation_and_padding.padding_strategy",description:`<strong>padding_strategy</strong> (<a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>) &#x2014;
The kind of padding that will be applied to the input`,name:"padding_strategy"},{anchor:"transformers.PreTrainedTokenizerFast.set_truncation_and_padding.truncation_strategy",description:`<strong>truncation_strategy</strong> (<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>) &#x2014;
The kind of truncation that will be applied to the input`,name:"truncation_strategy"},{anchor:"transformers.PreTrainedTokenizerFast.set_truncation_and_padding.max_length",description:`<strong>max_length</strong> (<code>int</code>) &#x2014;
The maximum size of a sequence.`,name:"max_length"},{anchor:"transformers.PreTrainedTokenizerFast.set_truncation_and_padding.stride",description:`<strong>stride</strong> (<code>int</code>) &#x2014;
The stride to use when handling overflow.`,name:"stride"},{anchor:"transformers.PreTrainedTokenizerFast.set_truncation_and_padding.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability <code>&gt;= 7.5</code> (Volta).`,name:"pad_to_multiple_of"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_fast.py#L398"}}),zt=new w({props:{name:"train_new_from_iterator",anchor:"transformers.PreTrainedTokenizerFast.train_new_from_iterator",parameters:[{name:"text_iterator",val:""},{name:"vocab_size",val:""},{name:"length",val:" = None"},{name:"new_special_tokens",val:" = None"},{name:"special_tokens_map",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.PreTrainedTokenizerFast.train_new_from_iterator.text_iterator",description:`<strong>text_iterator</strong> (generator of <code>List[str]</code>) &#x2014;
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
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"
>PreTrainedTokenizerFast</a></p>
`}}),$t=new Cr({props:{title:"BatchEncoding",local:"transformers.BatchEncoding",headingTag:"h2"}}),Pt=new w({props:{name:"class transformers.BatchEncoding",anchor:"transformers.BatchEncoding",parameters:[{name:"data",val:": Optional = None"},{name:"encoding",val:": Union = None"},{name:"tensor_type",val:": Union = None"},{name:"prepend_batch_axis",val:": bool = False"},{name:"n_sequences",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.BatchEncoding.data",description:`<strong>data</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Dictionary of lists/arrays/tensors returned by the <code>__call__</code>/<code>encode_plus</code>/<code>batch_encode_plus</code> methods
(&#x2018;input_ids&#x2019;, &#x2018;attention_mask&#x2019;, etc.).`,name:"data"},{anchor:"transformers.BatchEncoding.encoding",description:`<strong>encoding</strong> (<code>tokenizers.Encoding</code> or <code>Sequence[tokenizers.Encoding]</code>, <em>optional</em>) &#x2014;
If the tokenizer is a fast tokenizer which outputs additional information like mapping from word/character
space to token space the <code>tokenizers.Encoding</code> instance or list of instance (for batches) hold this
information.`,name:"encoding"},{anchor:"transformers.BatchEncoding.tensor_type",description:`<strong>tensor_type</strong> (<code>Union[None, str, TensorType]</code>, <em>optional</em>) &#x2014;
You can give a tensor_type here to convert the lists of integers in PyTorch/TensorFlow/Numpy Tensors at
initialization.`,name:"tensor_type"},{anchor:"transformers.BatchEncoding.prepend_batch_axis",description:`<strong>prepend_batch_axis</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add a batch axis when converting to tensors (see <code>tensor_type</code> above).`,name:"prepend_batch_axis"},{anchor:"transformers.BatchEncoding.n_sequences",description:`<strong>n_sequences</strong> (<code>Optional[int]</code>, <em>optional</em>) &#x2014;
You can give a tensor_type here to convert the lists of integers in PyTorch/TensorFlow/Numpy Tensors at
initialization.`,name:"n_sequences"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L176"}}),Ct=new w({props:{name:"char_to_token",anchor:"transformers.BatchEncoding.char_to_token",parameters:[{name:"batch_or_char_index",val:": int"},{name:"char_index",val:": Optional = None"},{name:"sequence_index",val:": int = 0"}],parametersDescription:[{anchor:"transformers.BatchEncoding.char_to_token.batch_or_char_index",description:`<strong>batch_or_char_index</strong> (<code>int</code>) &#x2014;
Index of the sequence in the batch. If the batch only comprise one sequence, this can be the index of
the word in the sequence`,name:"batch_or_char_index"},{anchor:"transformers.BatchEncoding.char_to_token.char_index",description:`<strong>char_index</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If a batch index is provided in <em>batch_or_token_index</em>, this can be the index of the word in the
sequence.`,name:"char_index"},{anchor:"transformers.BatchEncoding.char_to_token.sequence_index",description:`<strong>sequence_index</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If pair of sequences are encoded in the batch this can be used to specify which sequence in the pair (0
or 1) the provided character index belongs to.`,name:"sequence_index"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L555",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>Index of the token.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>int</code></p>
`}}),qt=new w({props:{name:"char_to_word",anchor:"transformers.BatchEncoding.char_to_word",parameters:[{name:"batch_or_char_index",val:": int"},{name:"char_index",val:": Optional = None"},{name:"sequence_index",val:": int = 0"}],parametersDescription:[{anchor:"transformers.BatchEncoding.char_to_word.batch_or_char_index",description:`<strong>batch_or_char_index</strong> (<code>int</code>) &#x2014;
Index of the sequence in the batch. If the batch only comprise one sequence, this can be the index of
the character in the original string.`,name:"batch_or_char_index"},{anchor:"transformers.BatchEncoding.char_to_word.char_index",description:`<strong>char_index</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If a batch index is provided in <em>batch_or_token_index</em>, this can be the index of the character in the
original string.`,name:"char_index"},{anchor:"transformers.BatchEncoding.char_to_word.sequence_index",description:`<strong>sequence_index</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If pair of sequences are encoded in the batch this can be used to specify which sequence in the pair (0
or 1) the provided character index belongs to.`,name:"sequence_index"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L641",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>Index or indices of the associated encoded token(s).</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>int</code> or <code>List[int]</code></p>
`}}),Mt=new w({props:{name:"convert_to_tensors",anchor:"transformers.BatchEncoding.convert_to_tensors",parameters:[{name:"tensor_type",val:": Union = None"},{name:"prepend_batch_axis",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BatchEncoding.convert_to_tensors.tensor_type",description:`<strong>tensor_type</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
The type of tensors to use. If <code>str</code>, should be one of the values of the enum <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>. If
<code>None</code>, no modification is done.`,name:"tensor_type"},{anchor:"transformers.BatchEncoding.convert_to_tensors.prepend_batch_axis",description:`<strong>prepend_batch_axis</strong> (<code>int</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to add the batch dimension during the conversion.`,name:"prepend_batch_axis"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L680"}}),It=new w({props:{name:"sequence_ids",anchor:"transformers.BatchEncoding.sequence_ids",parameters:[{name:"batch_index",val:": int = 0"}],parametersDescription:[{anchor:"transformers.BatchEncoding.sequence_ids.batch_index",description:"<strong>batch_index</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014; The index to access in the batch.",name:"batch_index"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L319",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list indicating the sequence id corresponding to each token. Special tokens added
by the tokenizer are mapped to <code>None</code> and other tokens are mapped to the index of their corresponding
sequence.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[Optional[int]]</code></p>
`}}),Ft=new w({props:{name:"to",anchor:"transformers.BatchEncoding.to",parameters:[{name:"device",val:": Union"}],parametersDescription:[{anchor:"transformers.BatchEncoding.to.device",description:"<strong>device</strong> (<code>str</code> or <code>torch.device</code>) &#x2014; The device to put the tensors on.",name:"device"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L773",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The same instance after modification.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/tokenizer#transformers.BatchEncoding"
>BatchEncoding</a></p>
`}}),Lt=new w({props:{name:"token_to_chars",anchor:"transformers.BatchEncoding.token_to_chars",parameters:[{name:"batch_or_token_index",val:": int"},{name:"token_index",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.BatchEncoding.token_to_chars.batch_or_token_index",description:`<strong>batch_or_token_index</strong> (<code>int</code>) &#x2014;
Index of the sequence in the batch. If the batch only comprise one sequence, this can be the index of
the token in the sequence.`,name:"batch_or_token_index"},{anchor:"transformers.BatchEncoding.token_to_chars.token_index",description:`<strong>token_index</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If a batch index is provided in <em>batch_or_token_index</em>, this can be the index of the token or tokens in
the sequence.`,name:"token_index"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L516",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>Span of characters in the original string, or None, if the token
(e.g. <s>, </s>) doesn’t correspond to any chars in the origin string.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/internal/tokenization_utils#transformers.CharSpan"
>CharSpan</a></p>
`}}),jt=new w({props:{name:"token_to_sequence",anchor:"transformers.BatchEncoding.token_to_sequence",parameters:[{name:"batch_or_token_index",val:": int"},{name:"token_index",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.BatchEncoding.token_to_sequence.batch_or_token_index",description:`<strong>batch_or_token_index</strong> (<code>int</code>) &#x2014;
Index of the sequence in the batch. If the batch only comprises one sequence, this can be the index of
the token in the sequence.`,name:"batch_or_token_index"},{anchor:"transformers.BatchEncoding.token_to_sequence.token_index",description:`<strong>token_index</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If a batch index is provided in <em>batch_or_token_index</em>, this can be the index of the token in the
sequence.`,name:"token_index"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L386",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>Index of the word in the input sequence.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>int</code></p>
`}}),Wt=new w({props:{name:"token_to_word",anchor:"transformers.BatchEncoding.token_to_word",parameters:[{name:"batch_or_token_index",val:": int"},{name:"token_index",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.BatchEncoding.token_to_word.batch_or_token_index",description:`<strong>batch_or_token_index</strong> (<code>int</code>) &#x2014;
Index of the sequence in the batch. If the batch only comprise one sequence, this can be the index of
the token in the sequence.`,name:"batch_or_token_index"},{anchor:"transformers.BatchEncoding.token_to_word.token_index",description:`<strong>token_index</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If a batch index is provided in <em>batch_or_token_index</em>, this can be the index of the token in the
sequence.`,name:"token_index"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L425",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>Index of the word in the input sequence.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>int</code></p>
`}}),Jt=new w({props:{name:"tokens",anchor:"transformers.BatchEncoding.tokens",parameters:[{name:"batch_index",val:": int = 0"}],parametersDescription:[{anchor:"transformers.BatchEncoding.tokens.batch_index",description:"<strong>batch_index</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014; The index to access in the batch.",name:"batch_index"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L301",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The list of tokens at that index.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[str]</code></p>
`}}),Ut=new w({props:{name:"word_ids",anchor:"transformers.BatchEncoding.word_ids",parameters:[{name:"batch_index",val:": int = 0"}],parametersDescription:[{anchor:"transformers.BatchEncoding.word_ids.batch_index",description:"<strong>batch_index</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014; The index to access in the batch.",name:"batch_index"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L367",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list indicating the word corresponding to each token. Special tokens added by the
tokenizer are mapped to <code>None</code> and other tokens are mapped to the index of their corresponding word
(several tokens will be mapped to the same word index if they are parts of that word).</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[Optional[int]]</code></p>
`}}),Bt=new w({props:{name:"word_to_chars",anchor:"transformers.BatchEncoding.word_to_chars",parameters:[{name:"batch_or_word_index",val:": int"},{name:"word_index",val:": Optional = None"},{name:"sequence_index",val:": int = 0"}],parametersDescription:[{anchor:"transformers.BatchEncoding.word_to_chars.batch_or_word_index",description:`<strong>batch_or_word_index</strong> (<code>int</code>) &#x2014;
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
`}}),Vt=new w({props:{name:"word_to_tokens",anchor:"transformers.BatchEncoding.word_to_tokens",parameters:[{name:"batch_or_word_index",val:": int"},{name:"word_index",val:": Optional = None"},{name:"sequence_index",val:": int = 0"}],parametersDescription:[{anchor:"transformers.BatchEncoding.word_to_tokens.batch_or_word_index",description:`<strong>batch_or_word_index</strong> (<code>int</code>) &#x2014;
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
  href="/docs/transformers/main/en/internal/tokenization_utils#transformers.TokenSpan"
>TokenSpan</a>, <em>optional</em>)</p>
`}}),Nt=new w({props:{name:"words",anchor:"transformers.BatchEncoding.words",parameters:[{name:"batch_index",val:": int = 0"}],parametersDescription:[{anchor:"transformers.BatchEncoding.words.batch_index",description:"<strong>batch_index</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014; The index to access in the batch.",name:"batch_index"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/tokenization_utils_base.py#L343",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list indicating the word corresponding to each token. Special tokens added by the
tokenizer are mapped to <code>None</code> and other tokens are mapped to the index of their corresponding word
(several tokens will be mapped to the same word index if they are parts of that word).</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[Optional[int]]</code></p>
`}}),{c(){c=r("meta"),I=n(),k=r("p"),_=n(),l(P.$$.fragment),i=n(),M=r("p"),M.innerHTML=ki,Ko=n(),Ze=r("ol"),Ze.innerHTML=bi,er=n(),De=r("p"),De.innerHTML=Ti,tr=n(),He=r("p"),He.innerHTML=xi,nr=n(),Ge=r("ul"),Ge.innerHTML=vi,or=n(),Ae=r("p"),Ae.innerHTML=yi,rr=n(),l(Re.$$.fragment),sr=n(),b=r("div"),l(Se.$$.fragment),qr=n(),Ht=r("p"),Ht.textContent=wi,Mr=n(),Gt=r("p"),Gt.innerHTML=zi,Ir=n(),At=r("p"),At.textContent=$i,Fr=n(),Rt=r("p"),Rt.textContent=Pi,Lr=n(),St=r("p"),St.textContent=Ci,jr=n(),Xt=r("ul"),Xt.innerHTML=qi,Wr=n(),fe=r("div"),l(Xe.$$.fragment),Jr=n(),Qt=r("p"),Qt.textContent=Mi,Ur=n(),N=r("div"),l(Qe.$$.fragment),Br=n(),Yt=r("p"),Yt.textContent=Ii,Vr=n(),Ot=r("p"),Ot.textContent=Fi,Nr=n(),Kt=r("p"),Kt.innerHTML=Li,Er=n(),l(_e.$$.fragment),Zr=n(),F=r("div"),l(Ye.$$.fragment),Dr=n(),en=r("p"),en.textContent=ji,Hr=n(),tn=r("p"),tn.textContent=Wi,Gr=n(),nn=r("p"),nn.innerHTML=Ji,Ar=n(),on=r("p"),on.innerHTML=Ui,Rr=n(),rn=r("ul"),rn.innerHTML=Bi,Sr=n(),sn=r("p"),sn.innerHTML=Vi,Xr=n(),l(ge.$$.fragment),Qr=n(),ke=r("div"),l(Oe.$$.fragment),Yr=n(),an=r("p"),an.innerHTML=Ni,Or=n(),be=r("div"),l(Ke.$$.fragment),Kr=n(),dn=r("p"),dn.textContent=Ei,es=n(),Q=r("div"),l(et.$$.fragment),ts=n(),cn=r("p"),cn.textContent=Zi,ns=n(),ln=r("p"),ln.innerHTML=Di,os=n(),Y=r("div"),l(tt.$$.fragment),rs=n(),pn=r("p"),pn.textContent=Hi,ss=n(),mn=r("p"),mn.innerHTML=Gi,as=n(),O=r("div"),l(nt.$$.fragment),is=n(),hn=r("p"),hn.textContent=Ai,ds=n(),l(Te.$$.fragment),cs=n(),xe=r("div"),l(ot.$$.fragment),ls=n(),un=r("p"),un.textContent=Ri,ps=n(),ve=r("div"),l(rt.$$.fragment),ms=n(),fn=r("p"),fn.textContent=Si,hs=n(),ye=r("div"),l(st.$$.fragment),us=n(),_n=r("p"),_n.textContent=Xi,fs=n(),K=r("div"),l(at.$$.fragment),_s=n(),gn=r("p"),gn.textContent=Qi,gs=n(),l(we.$$.fragment),ks=n(),ee=r("div"),l(it.$$.fragment),bs=n(),kn=r("p"),kn.textContent=Yi,Ts=n(),bn=r("p"),bn.innerHTML=Oi,xs=n(),te=r("div"),l(dt.$$.fragment),vs=n(),Tn=r("p"),Tn.textContent=Ki,ys=n(),xn=r("p"),xn.textContent=ed,ar=n(),l(ct.$$.fragment),ir=n(),lt=r("p"),lt.innerHTML=td,dr=n(),T=r("div"),l(pt.$$.fragment),ws=n(),vn=r("p"),vn.textContent=nd,zs=n(),yn=r("p"),yn.innerHTML=od,$s=n(),wn=r("p"),wn.textContent=rd,Ps=n(),zn=r("p"),zn.textContent=sd,Cs=n(),$n=r("p"),$n.textContent=ad,qs=n(),Pn=r("ul"),Pn.innerHTML=id,Ms=n(),ze=r("div"),l(mt.$$.fragment),Is=n(),Cn=r("p"),Cn.textContent=dd,Fs=n(),E=r("div"),l(ht.$$.fragment),Ls=n(),qn=r("p"),qn.textContent=cd,js=n(),Mn=r("p"),Mn.textContent=ld,Ws=n(),In=r("p"),In.innerHTML=pd,Js=n(),l($e.$$.fragment),Us=n(),L=r("div"),l(ut.$$.fragment),Bs=n(),Fn=r("p"),Fn.textContent=md,Vs=n(),Ln=r("p"),Ln.textContent=hd,Ns=n(),jn=r("p"),jn.innerHTML=ud,Es=n(),Wn=r("p"),Wn.innerHTML=fd,Zs=n(),Jn=r("ul"),Jn.innerHTML=_d,Ds=n(),Un=r("p"),Un.innerHTML=gd,Hs=n(),l(Pe.$$.fragment),Gs=n(),Ce=r("div"),l(ft.$$.fragment),As=n(),Bn=r("p"),Bn.innerHTML=kd,Rs=n(),qe=r("div"),l(_t.$$.fragment),Ss=n(),Vn=r("p"),Vn.textContent=bd,Xs=n(),ne=r("div"),l(gt.$$.fragment),Qs=n(),Nn=r("p"),Nn.textContent=Td,Ys=n(),En=r("p"),En.innerHTML=xd,Os=n(),oe=r("div"),l(kt.$$.fragment),Ks=n(),Zn=r("p"),Zn.textContent=vd,ea=n(),Dn=r("p"),Dn.innerHTML=yd,ta=n(),re=r("div"),l(bt.$$.fragment),na=n(),Hn=r("p"),Hn.textContent=wd,oa=n(),l(Me.$$.fragment),ra=n(),Ie=r("div"),l(Tt.$$.fragment),sa=n(),Gn=r("p"),Gn.textContent=zd,aa=n(),Fe=r("div"),l(xt.$$.fragment),ia=n(),An=r("p"),An.textContent=$d,da=n(),Le=r("div"),l(vt.$$.fragment),ca=n(),Rn=r("p"),Rn.textContent=Pd,la=n(),se=r("div"),l(yt.$$.fragment),pa=n(),Sn=r("p"),Sn.textContent=Cd,ma=n(),l(je.$$.fragment),ha=n(),ae=r("div"),l(wt.$$.fragment),ua=n(),Xn=r("p"),Xn.textContent=qd,fa=n(),Qn=r("p"),Qn.textContent=Md,_a=n(),We=r("div"),l(zt.$$.fragment),ga=n(),Yn=r("p"),Yn.textContent=Id,cr=n(),l($t.$$.fragment),lr=n(),C=r("div"),l(Pt.$$.fragment),ka=n(),On=r("p"),On.innerHTML=Fd,ba=n(),Kn=r("p"),Kn.textContent=Ld,Ta=n(),Z=r("div"),l(Ct.$$.fragment),xa=n(),eo=r("p"),eo.textContent=jd,va=n(),to=r("p"),to.textContent=Wd,ya=n(),no=r("ul"),no.innerHTML=Jd,wa=n(),oo=r("p"),oo.textContent=Ud,za=n(),D=r("div"),l(qt.$$.fragment),$a=n(),ro=r("p"),ro.textContent=Bd,Pa=n(),so=r("p"),so.textContent=Vd,Ca=n(),ao=r("ul"),ao.innerHTML=Nd,qa=n(),io=r("p"),io.textContent=Ed,Ma=n(),Je=r("div"),l(Mt.$$.fragment),Ia=n(),co=r("p"),co.textContent=Zd,Fa=n(),ie=r("div"),l(It.$$.fragment),La=n(),lo=r("p"),lo.textContent=Dd,ja=n(),po=r("ul"),po.innerHTML=Hd,Wa=n(),Ue=r("div"),l(Ft.$$.fragment),Ja=n(),mo=r("p"),mo.innerHTML=Gd,Ua=n(),U=r("div"),l(Lt.$$.fragment),Ba=n(),ho=r("p"),ho.textContent=Ad,Va=n(),uo=r("p"),uo.innerHTML=Rd,Na=n(),fo=r("ul"),fo.innerHTML=Sd,Ea=n(),_o=r("p"),_o.textContent=Xd,Za=n(),go=r("ul"),go.innerHTML=Qd,Da=n(),H=r("div"),l(jt.$$.fragment),Ha=n(),ko=r("p"),ko.innerHTML=Yd,Ga=n(),bo=r("p"),bo.textContent=Od,Aa=n(),To=r("ul"),To.innerHTML=Kd,Ra=n(),xo=r("p"),xo.textContent=ec,Sa=n(),G=r("div"),l(Wt.$$.fragment),Xa=n(),vo=r("p"),vo.textContent=tc,Qa=n(),yo=r("p"),yo.textContent=nc,Ya=n(),wo=r("ul"),wo.innerHTML=oc,Oa=n(),zo=r("p"),zo.textContent=rc,Ka=n(),Be=r("div"),l(Jt.$$.fragment),ei=n(),$o=r("p"),$o.textContent=sc,ti=n(),Ve=r("div"),l(Ut.$$.fragment),ni=n(),Po=r("p"),Po.textContent=ac,oi=n(),B=r("div"),l(Bt.$$.fragment),ri=n(),Co=r("p"),Co.textContent=ic,si=n(),qo=r("p"),qo.textContent=dc,ai=n(),Mo=r("ul"),Mo.innerHTML=cc,ii=n(),Io=r("p"),Io.textContent=lc,di=n(),Fo=r("ul"),Fo.innerHTML=pc,ci=n(),J=r("div"),l(Vt.$$.fragment),li=n(),Lo=r("p"),Lo.textContent=mc,pi=n(),jo=r("p"),jo.innerHTML=hc,mi=n(),Wo=r("ul"),Wo.innerHTML=uc,hi=n(),Jo=r("p"),Jo.textContent=fc,ui=n(),Uo=r("ul"),Uo.innerHTML=_c,fi=n(),Bo=r("p"),Bo.textContent=gc,_i=n(),Ne=r("div"),l(Nt.$$.fragment),gi=n(),Vo=r("p"),Vo.textContent=kc,pr=n(),Oo=r("p"),this.h()},l(t){const g=wc("svelte-u9bgzb",document.head);c=s(g,"META",{name:!0,content:!0}),g.forEach(d),I=o(t),k=s(t,"P",{}),x(k).forEach(d),_=o(t),p(P.$$.fragment,t),i=o(t),M=s(t,"P",{"data-svelte-h":!0}),a(M)!=="svelte-17srdwe"&&(M.innerHTML=ki),Ko=o(t),Ze=s(t,"OL",{"data-svelte-h":!0}),a(Ze)!=="svelte-1t8u2n0"&&(Ze.innerHTML=bi),er=o(t),De=s(t,"P",{"data-svelte-h":!0}),a(De)!=="svelte-1v3mjub"&&(De.innerHTML=Ti),tr=o(t),He=s(t,"P",{"data-svelte-h":!0}),a(He)!=="svelte-177694d"&&(He.innerHTML=xi),nr=o(t),Ge=s(t,"UL",{"data-svelte-h":!0}),a(Ge)!=="svelte-377vss"&&(Ge.innerHTML=vi),or=o(t),Ae=s(t,"P",{"data-svelte-h":!0}),a(Ae)!=="svelte-16k7u9y"&&(Ae.innerHTML=yi),rr=o(t),p(Re.$$.fragment,t),sr=o(t),b=s(t,"DIV",{class:!0});var y=x(b);p(Se.$$.fragment,y),qr=o(y),Ht=s(y,"P",{"data-svelte-h":!0}),a(Ht)!=="svelte-1vieurq"&&(Ht.textContent=wi),Mr=o(y),Gt=s(y,"P",{"data-svelte-h":!0}),a(Gt)!=="svelte-1166zg7"&&(Gt.innerHTML=zi),Ir=o(y),At=s(y,"P",{"data-svelte-h":!0}),a(At)!=="svelte-y6enlf"&&(At.textContent=$i),Fr=o(y),Rt=s(y,"P",{"data-svelte-h":!0}),a(Rt)!=="svelte-abl5qq"&&(Rt.textContent=Pi),Lr=o(y),St=s(y,"P",{"data-svelte-h":!0}),a(St)!=="svelte-1ixo79u"&&(St.textContent=Ci),jr=o(y),Xt=s(y,"UL",{"data-svelte-h":!0}),a(Xt)!=="svelte-5wckzo"&&(Xt.innerHTML=qi),Wr=o(y),fe=s(y,"DIV",{class:!0});var Et=x(fe);p(Xe.$$.fragment,Et),Jr=o(Et),Qt=s(Et,"P",{"data-svelte-h":!0}),a(Qt)!=="svelte-kpxj0c"&&(Qt.textContent=Mi),Et.forEach(d),Ur=o(y),N=s(y,"DIV",{class:!0});var R=x(N);p(Qe.$$.fragment,R),Br=o(R),Yt=s(R,"P",{"data-svelte-h":!0}),a(Yt)!=="svelte-14rotd7"&&(Yt.textContent=Ii),Vr=o(R),Ot=s(R,"P",{"data-svelte-h":!0}),a(Ot)!=="svelte-j0w5r1"&&(Ot.textContent=Fi),Nr=o(R),Kt=s(R,"P",{"data-svelte-h":!0}),a(Kt)!=="svelte-1kx0fb5"&&(Kt.innerHTML=Li),Er=o(R),p(_e.$$.fragment,R),R.forEach(d),Zr=o(y),F=s(y,"DIV",{class:!0});var j=x(F);p(Ye.$$.fragment,j),Dr=o(j),en=s(j,"P",{"data-svelte-h":!0}),a(en)!=="svelte-1j8s0i5"&&(en.textContent=ji),Hr=o(j),tn=s(j,"P",{"data-svelte-h":!0}),a(tn)!=="svelte-1w3ayx9"&&(tn.textContent=Wi),Gr=o(j),nn=s(j,"P",{"data-svelte-h":!0}),a(nn)!=="svelte-1kx0fb5"&&(nn.innerHTML=Ji),Ar=o(j),on=s(j,"P",{"data-svelte-h":!0}),a(on)!=="svelte-5hxtpc"&&(on.innerHTML=Ui),Rr=o(j),rn=s(j,"UL",{"data-svelte-h":!0}),a(rn)!=="svelte-1pes0uj"&&(rn.innerHTML=Bi),Sr=o(j),sn=s(j,"P",{"data-svelte-h":!0}),a(sn)!=="svelte-ufkmyf"&&(sn.innerHTML=Vi),Xr=o(j),p(ge.$$.fragment,j),j.forEach(d),Qr=o(y),ke=s(y,"DIV",{class:!0});var Zt=x(ke);p(Oe.$$.fragment,Zt),Yr=o(Zt),an=s(Zt,"P",{"data-svelte-h":!0}),a(an)!=="svelte-wjbfy4"&&(an.innerHTML=Ni),Zt.forEach(d),Or=o(y),be=s(y,"DIV",{class:!0});var Dt=x(be);p(Ke.$$.fragment,Dt),Kr=o(Dt),dn=s(Dt,"P",{"data-svelte-h":!0}),a(dn)!=="svelte-1deng2j"&&(dn.textContent=Ei),Dt.forEach(d),es=o(y),Q=s(y,"DIV",{class:!0});var he=x(Q);p(et.$$.fragment,he),ts=o(he),cn=s(he,"P",{"data-svelte-h":!0}),a(cn)!=="svelte-vbfkpu"&&(cn.textContent=Zi),ns=o(he),ln=s(he,"P",{"data-svelte-h":!0}),a(ln)!=="svelte-125uxon"&&(ln.innerHTML=Di),he.forEach(d),os=o(y),Y=s(y,"DIV",{class:!0});var ue=x(Y);p(tt.$$.fragment,ue),rs=o(ue),pn=s(ue,"P",{"data-svelte-h":!0}),a(pn)!=="svelte-12b8hzo"&&(pn.textContent=Hi),ss=o(ue),mn=s(ue,"P",{"data-svelte-h":!0}),a(mn)!=="svelte-1kyhveh"&&(mn.innerHTML=Gi),ue.forEach(d),as=o(y),O=s(y,"DIV",{class:!0});var No=x(O);p(nt.$$.fragment,No),is=o(No),hn=s(No,"P",{"data-svelte-h":!0}),a(hn)!=="svelte-tpmkl3"&&(hn.textContent=Ai),ds=o(No),p(Te.$$.fragment,No),No.forEach(d),cs=o(y),xe=s(y,"DIV",{class:!0});var hr=x(xe);p(ot.$$.fragment,hr),ls=o(hr),un=s(hr,"P",{"data-svelte-h":!0}),a(un)!=="svelte-cx157h"&&(un.textContent=Ri),hr.forEach(d),ps=o(y),ve=s(y,"DIV",{class:!0});var ur=x(ve);p(rt.$$.fragment,ur),ms=o(ur),fn=s(ur,"P",{"data-svelte-h":!0}),a(fn)!=="svelte-1urz5jj"&&(fn.textContent=Si),ur.forEach(d),hs=o(y),ye=s(y,"DIV",{class:!0});var fr=x(ye);p(st.$$.fragment,fr),us=o(fr),_n=s(fr,"P",{"data-svelte-h":!0}),a(_n)!=="svelte-2yfcci"&&(_n.textContent=Xi),fr.forEach(d),fs=o(y),K=s(y,"DIV",{class:!0});var Eo=x(K);p(at.$$.fragment,Eo),_s=o(Eo),gn=s(Eo,"P",{"data-svelte-h":!0}),a(gn)!=="svelte-1oqr1g4"&&(gn.textContent=Qi),gs=o(Eo),p(we.$$.fragment,Eo),Eo.forEach(d),ks=o(y),ee=s(y,"DIV",{class:!0});var Zo=x(ee);p(it.$$.fragment,Zo),bs=o(Zo),kn=s(Zo,"P",{"data-svelte-h":!0}),a(kn)!=="svelte-suiszn"&&(kn.textContent=Yi),Ts=o(Zo),bn=s(Zo,"P",{"data-svelte-h":!0}),a(bn)!=="svelte-1bw0rb5"&&(bn.innerHTML=Oi),Zo.forEach(d),xs=o(y),te=s(y,"DIV",{class:!0});var Do=x(te);p(dt.$$.fragment,Do),vs=o(Do),Tn=s(Do,"P",{"data-svelte-h":!0}),a(Tn)!=="svelte-sso1qb"&&(Tn.textContent=Ki),ys=o(Do),xn=s(Do,"P",{"data-svelte-h":!0}),a(xn)!=="svelte-1i4xsf5"&&(xn.textContent=ed),Do.forEach(d),y.forEach(d),ar=o(t),p(ct.$$.fragment,t),ir=o(t),lt=s(t,"P",{"data-svelte-h":!0}),a(lt)!=="svelte-i3bkqx"&&(lt.innerHTML=td),dr=o(t),T=s(t,"DIV",{class:!0});var z=x(T);p(pt.$$.fragment,z),ws=o(z),vn=s(z,"P",{"data-svelte-h":!0}),a(vn)!=="svelte-1e1i5yj"&&(vn.textContent=nd),zs=o(z),yn=s(z,"P",{"data-svelte-h":!0}),a(yn)!=="svelte-1166zg7"&&(yn.innerHTML=od),$s=o(z),wn=s(z,"P",{"data-svelte-h":!0}),a(wn)!=="svelte-99yswb"&&(wn.textContent=rd),Ps=o(z),zn=s(z,"P",{"data-svelte-h":!0}),a(zn)!=="svelte-1y9tnev"&&(zn.textContent=sd),Cs=o(z),$n=s(z,"P",{"data-svelte-h":!0}),a($n)!=="svelte-1ixo79u"&&($n.textContent=ad),qs=o(z),Pn=s(z,"UL",{"data-svelte-h":!0}),a(Pn)!=="svelte-5wckzo"&&(Pn.innerHTML=id),Ms=o(z),ze=s(z,"DIV",{class:!0});var _r=x(ze);p(mt.$$.fragment,_r),Is=o(_r),Cn=s(_r,"P",{"data-svelte-h":!0}),a(Cn)!=="svelte-kpxj0c"&&(Cn.textContent=dd),_r.forEach(d),Fs=o(z),E=s(z,"DIV",{class:!0});var de=x(E);p(ht.$$.fragment,de),Ls=o(de),qn=s(de,"P",{"data-svelte-h":!0}),a(qn)!=="svelte-14rotd7"&&(qn.textContent=cd),js=o(de),Mn=s(de,"P",{"data-svelte-h":!0}),a(Mn)!=="svelte-j0w5r1"&&(Mn.textContent=ld),Ws=o(de),In=s(de,"P",{"data-svelte-h":!0}),a(In)!=="svelte-1kx0fb5"&&(In.innerHTML=pd),Js=o(de),p($e.$$.fragment,de),de.forEach(d),Us=o(z),L=s(z,"DIV",{class:!0});var V=x(L);p(ut.$$.fragment,V),Bs=o(V),Fn=s(V,"P",{"data-svelte-h":!0}),a(Fn)!=="svelte-1j8s0i5"&&(Fn.textContent=md),Vs=o(V),Ln=s(V,"P",{"data-svelte-h":!0}),a(Ln)!=="svelte-1w3ayx9"&&(Ln.textContent=hd),Ns=o(V),jn=s(V,"P",{"data-svelte-h":!0}),a(jn)!=="svelte-1kx0fb5"&&(jn.innerHTML=ud),Es=o(V),Wn=s(V,"P",{"data-svelte-h":!0}),a(Wn)!=="svelte-5hxtpc"&&(Wn.innerHTML=fd),Zs=o(V),Jn=s(V,"UL",{"data-svelte-h":!0}),a(Jn)!=="svelte-1pes0uj"&&(Jn.innerHTML=_d),Ds=o(V),Un=s(V,"P",{"data-svelte-h":!0}),a(Un)!=="svelte-ufkmyf"&&(Un.innerHTML=gd),Hs=o(V),p(Pe.$$.fragment,V),V.forEach(d),Gs=o(z),Ce=s(z,"DIV",{class:!0});var gr=x(Ce);p(ft.$$.fragment,gr),As=o(gr),Bn=s(gr,"P",{"data-svelte-h":!0}),a(Bn)!=="svelte-wjbfy4"&&(Bn.innerHTML=kd),gr.forEach(d),Rs=o(z),qe=s(z,"DIV",{class:!0});var kr=x(qe);p(_t.$$.fragment,kr),Ss=o(kr),Vn=s(kr,"P",{"data-svelte-h":!0}),a(Vn)!=="svelte-1deng2j"&&(Vn.textContent=bd),kr.forEach(d),Xs=o(z),ne=s(z,"DIV",{class:!0});var Ho=x(ne);p(gt.$$.fragment,Ho),Qs=o(Ho),Nn=s(Ho,"P",{"data-svelte-h":!0}),a(Nn)!=="svelte-vbfkpu"&&(Nn.textContent=Td),Ys=o(Ho),En=s(Ho,"P",{"data-svelte-h":!0}),a(En)!=="svelte-125uxon"&&(En.innerHTML=xd),Ho.forEach(d),Os=o(z),oe=s(z,"DIV",{class:!0});var Go=x(oe);p(kt.$$.fragment,Go),Ks=o(Go),Zn=s(Go,"P",{"data-svelte-h":!0}),a(Zn)!=="svelte-12b8hzo"&&(Zn.textContent=vd),ea=o(Go),Dn=s(Go,"P",{"data-svelte-h":!0}),a(Dn)!=="svelte-1kyhveh"&&(Dn.innerHTML=yd),Go.forEach(d),ta=o(z),re=s(z,"DIV",{class:!0});var Ao=x(re);p(bt.$$.fragment,Ao),na=o(Ao),Hn=s(Ao,"P",{"data-svelte-h":!0}),a(Hn)!=="svelte-tpmkl3"&&(Hn.textContent=wd),oa=o(Ao),p(Me.$$.fragment,Ao),Ao.forEach(d),ra=o(z),Ie=s(z,"DIV",{class:!0});var br=x(Ie);p(Tt.$$.fragment,br),sa=o(br),Gn=s(br,"P",{"data-svelte-h":!0}),a(Gn)!=="svelte-cx157h"&&(Gn.textContent=zd),br.forEach(d),aa=o(z),Fe=s(z,"DIV",{class:!0});var Tr=x(Fe);p(xt.$$.fragment,Tr),ia=o(Tr),An=s(Tr,"P",{"data-svelte-h":!0}),a(An)!=="svelte-1urz5jj"&&(An.textContent=$d),Tr.forEach(d),da=o(z),Le=s(z,"DIV",{class:!0});var xr=x(Le);p(vt.$$.fragment,xr),ca=o(xr),Rn=s(xr,"P",{"data-svelte-h":!0}),a(Rn)!=="svelte-17grjhy"&&(Rn.textContent=Pd),xr.forEach(d),la=o(z),se=s(z,"DIV",{class:!0});var Ro=x(se);p(yt.$$.fragment,Ro),pa=o(Ro),Sn=s(Ro,"P",{"data-svelte-h":!0}),a(Sn)!=="svelte-1oqr1g4"&&(Sn.textContent=Cd),ma=o(Ro),p(je.$$.fragment,Ro),Ro.forEach(d),ha=o(z),ae=s(z,"DIV",{class:!0});var So=x(ae);p(wt.$$.fragment,So),ua=o(So),Xn=s(So,"P",{"data-svelte-h":!0}),a(Xn)!=="svelte-wj61ov"&&(Xn.textContent=qd),fa=o(So),Qn=s(So,"P",{"data-svelte-h":!0}),a(Qn)!=="svelte-1423b5j"&&(Qn.textContent=Md),So.forEach(d),_a=o(z),We=s(z,"DIV",{class:!0});var vr=x(We);p(zt.$$.fragment,vr),ga=o(vr),Yn=s(vr,"P",{"data-svelte-h":!0}),a(Yn)!=="svelte-dk6kyv"&&(Yn.textContent=Id),vr.forEach(d),z.forEach(d),cr=o(t),p($t.$$.fragment,t),lr=o(t),C=s(t,"DIV",{class:!0});var q=x(C);p(Pt.$$.fragment,q),ka=o(q),On=s(q,"P",{"data-svelte-h":!0}),a(On)!=="svelte-1jtql7z"&&(On.innerHTML=Fd),ba=o(q),Kn=s(q,"P",{"data-svelte-h":!0}),a(Kn)!=="svelte-1df8ukr"&&(Kn.textContent=Ld),Ta=o(q),Z=s(q,"DIV",{class:!0});var ce=x(Z);p(Ct.$$.fragment,ce),xa=o(ce),eo=s(ce,"P",{"data-svelte-h":!0}),a(eo)!=="svelte-1gpnz9t"&&(eo.textContent=jd),va=o(ce),to=s(ce,"P",{"data-svelte-h":!0}),a(to)!=="svelte-hoi93q"&&(to.textContent=Wd),ya=o(ce),no=s(ce,"UL",{"data-svelte-h":!0}),a(no)!=="svelte-i7p8st"&&(no.innerHTML=Jd),wa=o(ce),oo=s(ce,"P",{"data-svelte-h":!0}),a(oo)!=="svelte-udqgev"&&(oo.textContent=Ud),ce.forEach(d),za=o(q),D=s(q,"DIV",{class:!0});var le=x(D);p(qt.$$.fragment,le),$a=o(le),ro=s(le,"P",{"data-svelte-h":!0}),a(ro)!=="svelte-mtqdue"&&(ro.textContent=Bd),Pa=o(le),so=s(le,"P",{"data-svelte-h":!0}),a(so)!=="svelte-hoi93q"&&(so.textContent=Vd),Ca=o(le),ao=s(le,"UL",{"data-svelte-h":!0}),a(ao)!=="svelte-2vo0y6"&&(ao.innerHTML=Nd),qa=o(le),io=s(le,"P",{"data-svelte-h":!0}),a(io)!=="svelte-udqgev"&&(io.textContent=Ed),le.forEach(d),Ma=o(q),Je=s(q,"DIV",{class:!0});var yr=x(Je);p(Mt.$$.fragment,yr),Ia=o(yr),co=s(yr,"P",{"data-svelte-h":!0}),a(co)!=="svelte-pxfh9u"&&(co.textContent=Zd),yr.forEach(d),Fa=o(q),ie=s(q,"DIV",{class:!0});var Xo=x(ie);p(It.$$.fragment,Xo),La=o(Xo),lo=s(Xo,"P",{"data-svelte-h":!0}),a(lo)!=="svelte-1839ko1"&&(lo.textContent=Dd),ja=o(Xo),po=s(Xo,"UL",{"data-svelte-h":!0}),a(po)!=="svelte-1ap7xk7"&&(po.innerHTML=Hd),Xo.forEach(d),Wa=o(q),Ue=s(q,"DIV",{class:!0});var wr=x(Ue);p(Ft.$$.fragment,wr),Ja=o(wr),mo=s(wr,"P",{"data-svelte-h":!0}),a(mo)!=="svelte-8ewnfk"&&(mo.innerHTML=Gd),wr.forEach(d),Ua=o(q),U=s(q,"DIV",{class:!0});var S=x(U);p(Lt.$$.fragment,S),Ba=o(S),ho=s(S,"P",{"data-svelte-h":!0}),a(ho)!=="svelte-xav75j"&&(ho.textContent=Ad),Va=o(S),uo=s(S,"P",{"data-svelte-h":!0}),a(uo)!=="svelte-3x94b9"&&(uo.innerHTML=Rd),Na=o(S),fo=s(S,"UL",{"data-svelte-h":!0}),a(fo)!=="svelte-4fpj7o"&&(fo.innerHTML=Sd),Ea=o(S),_o=s(S,"P",{"data-svelte-h":!0}),a(_o)!=="svelte-hoi93q"&&(_o.textContent=Xd),Za=o(S),go=s(S,"UL",{"data-svelte-h":!0}),a(go)!=="svelte-10t7hv1"&&(go.innerHTML=Qd),S.forEach(d),Da=o(q),H=s(q,"DIV",{class:!0});var pe=x(H);p(jt.$$.fragment,pe),Ha=o(pe),ko=s(pe,"P",{"data-svelte-h":!0}),a(ko)!=="svelte-gouuon"&&(ko.innerHTML=Yd),Ga=o(pe),bo=s(pe,"P",{"data-svelte-h":!0}),a(bo)!=="svelte-hoi93q"&&(bo.textContent=Od),Aa=o(pe),To=s(pe,"UL",{"data-svelte-h":!0}),a(To)!=="svelte-q52scs"&&(To.innerHTML=Kd),Ra=o(pe),xo=s(pe,"P",{"data-svelte-h":!0}),a(xo)!=="svelte-1fj0zmd"&&(xo.textContent=ec),pe.forEach(d),Sa=o(q),G=s(q,"DIV",{class:!0});var me=x(G);p(Wt.$$.fragment,me),Xa=o(me),vo=s(me,"P",{"data-svelte-h":!0}),a(vo)!=="svelte-a0a2o0"&&(vo.textContent=tc),Qa=o(me),yo=s(me,"P",{"data-svelte-h":!0}),a(yo)!=="svelte-hoi93q"&&(yo.textContent=nc),Ya=o(me),wo=s(me,"UL",{"data-svelte-h":!0}),a(wo)!=="svelte-vbk04m"&&(wo.innerHTML=oc),Oa=o(me),zo=s(me,"P",{"data-svelte-h":!0}),a(zo)!=="svelte-1fj0zmd"&&(zo.textContent=rc),me.forEach(d),Ka=o(q),Be=s(q,"DIV",{class:!0});var zr=x(Be);p(Jt.$$.fragment,zr),ei=o(zr),$o=s(zr,"P",{"data-svelte-h":!0}),a($o)!=="svelte-or6vgj"&&($o.textContent=sc),zr.forEach(d),ti=o(q),Ve=s(q,"DIV",{class:!0});var $r=x(Ve);p(Ut.$$.fragment,$r),ni=o($r),Po=s($r,"P",{"data-svelte-h":!0}),a(Po)!=="svelte-1xfwjqh"&&(Po.textContent=ac),$r.forEach(d),oi=o(q),B=s(q,"DIV",{class:!0});var X=x(B);p(Bt.$$.fragment,X),ri=o(X),Co=s(X,"P",{"data-svelte-h":!0}),a(Co)!=="svelte-1p4j7cm"&&(Co.textContent=ic),si=o(X),qo=s(X,"P",{"data-svelte-h":!0}),a(qo)!=="svelte-1m5vplt"&&(qo.textContent=dc),ai=o(X),Mo=s(X,"UL",{"data-svelte-h":!0}),a(Mo)!=="svelte-tivk04"&&(Mo.innerHTML=cc),ii=o(X),Io=s(X,"P",{"data-svelte-h":!0}),a(Io)!=="svelte-hoi93q"&&(Io.textContent=lc),di=o(X),Fo=s(X,"UL",{"data-svelte-h":!0}),a(Fo)!=="svelte-rgo9bl"&&(Fo.innerHTML=pc),X.forEach(d),ci=o(q),J=s(q,"DIV",{class:!0});var A=x(J);p(Vt.$$.fragment,A),li=o(A),Lo=s(A,"P",{"data-svelte-h":!0}),a(Lo)!=="svelte-p6ca34"&&(Lo.textContent=mc),pi=o(A),jo=s(A,"P",{"data-svelte-h":!0}),a(jo)!=="svelte-dwobov"&&(jo.innerHTML=hc),mi=o(A),Wo=s(A,"UL",{"data-svelte-h":!0}),a(Wo)!=="svelte-adw1ie"&&(Wo.innerHTML=uc),hi=o(A),Jo=s(A,"P",{"data-svelte-h":!0}),a(Jo)!=="svelte-hoi93q"&&(Jo.textContent=fc),ui=o(A),Uo=s(A,"UL",{"data-svelte-h":!0}),a(Uo)!=="svelte-11iunx9"&&(Uo.innerHTML=_c),fi=o(A),Bo=s(A,"P",{"data-svelte-h":!0}),a(Bo)!=="svelte-udqgev"&&(Bo.textContent=gc),A.forEach(d),_i=o(q),Ne=s(q,"DIV",{class:!0});var Pr=x(Ne);p(Nt.$$.fragment,Pr),gi=o(Pr),Vo=s(Pr,"P",{"data-svelte-h":!0}),a(Vo)!=="svelte-1xfwjqh"&&(Vo.textContent=kc),Pr.forEach(d),q.forEach(d),pr=o(t),Oo=s(t,"P",{}),x(Oo).forEach(d),this.h()},h(){v(c,"name","hf:doc:metadata"),v(c,"content",jc),v(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(b,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,c),$(t,I,g),$(t,k,g),$(t,_,g),m(P,t,g),$(t,i,g),$(t,M,g),$(t,Ko,g),$(t,Ze,g),$(t,er,g),$(t,De,g),$(t,tr,g),$(t,He,g),$(t,nr,g),$(t,Ge,g),$(t,or,g),$(t,Ae,g),$(t,rr,g),m(Re,t,g),$(t,sr,g),$(t,b,g),m(Se,b,null),e(b,qr),e(b,Ht),e(b,Mr),e(b,Gt),e(b,Ir),e(b,At),e(b,Fr),e(b,Rt),e(b,Lr),e(b,St),e(b,jr),e(b,Xt),e(b,Wr),e(b,fe),m(Xe,fe,null),e(fe,Jr),e(fe,Qt),e(b,Ur),e(b,N),m(Qe,N,null),e(N,Br),e(N,Yt),e(N,Vr),e(N,Ot),e(N,Nr),e(N,Kt),e(N,Er),m(_e,N,null),e(b,Zr),e(b,F),m(Ye,F,null),e(F,Dr),e(F,en),e(F,Hr),e(F,tn),e(F,Gr),e(F,nn),e(F,Ar),e(F,on),e(F,Rr),e(F,rn),e(F,Sr),e(F,sn),e(F,Xr),m(ge,F,null),e(b,Qr),e(b,ke),m(Oe,ke,null),e(ke,Yr),e(ke,an),e(b,Or),e(b,be),m(Ke,be,null),e(be,Kr),e(be,dn),e(b,es),e(b,Q),m(et,Q,null),e(Q,ts),e(Q,cn),e(Q,ns),e(Q,ln),e(b,os),e(b,Y),m(tt,Y,null),e(Y,rs),e(Y,pn),e(Y,ss),e(Y,mn),e(b,as),e(b,O),m(nt,O,null),e(O,is),e(O,hn),e(O,ds),m(Te,O,null),e(b,cs),e(b,xe),m(ot,xe,null),e(xe,ls),e(xe,un),e(b,ps),e(b,ve),m(rt,ve,null),e(ve,ms),e(ve,fn),e(b,hs),e(b,ye),m(st,ye,null),e(ye,us),e(ye,_n),e(b,fs),e(b,K),m(at,K,null),e(K,_s),e(K,gn),e(K,gs),m(we,K,null),e(b,ks),e(b,ee),m(it,ee,null),e(ee,bs),e(ee,kn),e(ee,Ts),e(ee,bn),e(b,xs),e(b,te),m(dt,te,null),e(te,vs),e(te,Tn),e(te,ys),e(te,xn),$(t,ar,g),m(ct,t,g),$(t,ir,g),$(t,lt,g),$(t,dr,g),$(t,T,g),m(pt,T,null),e(T,ws),e(T,vn),e(T,zs),e(T,yn),e(T,$s),e(T,wn),e(T,Ps),e(T,zn),e(T,Cs),e(T,$n),e(T,qs),e(T,Pn),e(T,Ms),e(T,ze),m(mt,ze,null),e(ze,Is),e(ze,Cn),e(T,Fs),e(T,E),m(ht,E,null),e(E,Ls),e(E,qn),e(E,js),e(E,Mn),e(E,Ws),e(E,In),e(E,Js),m($e,E,null),e(T,Us),e(T,L),m(ut,L,null),e(L,Bs),e(L,Fn),e(L,Vs),e(L,Ln),e(L,Ns),e(L,jn),e(L,Es),e(L,Wn),e(L,Zs),e(L,Jn),e(L,Ds),e(L,Un),e(L,Hs),m(Pe,L,null),e(T,Gs),e(T,Ce),m(ft,Ce,null),e(Ce,As),e(Ce,Bn),e(T,Rs),e(T,qe),m(_t,qe,null),e(qe,Ss),e(qe,Vn),e(T,Xs),e(T,ne),m(gt,ne,null),e(ne,Qs),e(ne,Nn),e(ne,Ys),e(ne,En),e(T,Os),e(T,oe),m(kt,oe,null),e(oe,Ks),e(oe,Zn),e(oe,ea),e(oe,Dn),e(T,ta),e(T,re),m(bt,re,null),e(re,na),e(re,Hn),e(re,oa),m(Me,re,null),e(T,ra),e(T,Ie),m(Tt,Ie,null),e(Ie,sa),e(Ie,Gn),e(T,aa),e(T,Fe),m(xt,Fe,null),e(Fe,ia),e(Fe,An),e(T,da),e(T,Le),m(vt,Le,null),e(Le,ca),e(Le,Rn),e(T,la),e(T,se),m(yt,se,null),e(se,pa),e(se,Sn),e(se,ma),m(je,se,null),e(T,ha),e(T,ae),m(wt,ae,null),e(ae,ua),e(ae,Xn),e(ae,fa),e(ae,Qn),e(T,_a),e(T,We),m(zt,We,null),e(We,ga),e(We,Yn),$(t,cr,g),m($t,t,g),$(t,lr,g),$(t,C,g),m(Pt,C,null),e(C,ka),e(C,On),e(C,ba),e(C,Kn),e(C,Ta),e(C,Z),m(Ct,Z,null),e(Z,xa),e(Z,eo),e(Z,va),e(Z,to),e(Z,ya),e(Z,no),e(Z,wa),e(Z,oo),e(C,za),e(C,D),m(qt,D,null),e(D,$a),e(D,ro),e(D,Pa),e(D,so),e(D,Ca),e(D,ao),e(D,qa),e(D,io),e(C,Ma),e(C,Je),m(Mt,Je,null),e(Je,Ia),e(Je,co),e(C,Fa),e(C,ie),m(It,ie,null),e(ie,La),e(ie,lo),e(ie,ja),e(ie,po),e(C,Wa),e(C,Ue),m(Ft,Ue,null),e(Ue,Ja),e(Ue,mo),e(C,Ua),e(C,U),m(Lt,U,null),e(U,Ba),e(U,ho),e(U,Va),e(U,uo),e(U,Na),e(U,fo),e(U,Ea),e(U,_o),e(U,Za),e(U,go),e(C,Da),e(C,H),m(jt,H,null),e(H,Ha),e(H,ko),e(H,Ga),e(H,bo),e(H,Aa),e(H,To),e(H,Ra),e(H,xo),e(C,Sa),e(C,G),m(Wt,G,null),e(G,Xa),e(G,vo),e(G,Qa),e(G,yo),e(G,Ya),e(G,wo),e(G,Oa),e(G,zo),e(C,Ka),e(C,Be),m(Jt,Be,null),e(Be,ei),e(Be,$o),e(C,ti),e(C,Ve),m(Ut,Ve,null),e(Ve,ni),e(Ve,Po),e(C,oi),e(C,B),m(Bt,B,null),e(B,ri),e(B,Co),e(B,si),e(B,qo),e(B,ai),e(B,Mo),e(B,ii),e(B,Io),e(B,di),e(B,Fo),e(C,ci),e(C,J),m(Vt,J,null),e(J,li),e(J,Lo),e(J,pi),e(J,jo),e(J,mi),e(J,Wo),e(J,hi),e(J,Jo),e(J,ui),e(J,Uo),e(J,fi),e(J,Bo),e(C,_i),e(C,Ne),m(Nt,Ne,null),e(Ne,gi),e(Ne,Vo),$(t,pr,g),$(t,Oo,g),mr=!0},p(t,[g]){const y={};g&2&&(y.$$scope={dirty:g,ctx:t}),_e.$set(y);const Et={};g&2&&(Et.$$scope={dirty:g,ctx:t}),ge.$set(Et);const R={};g&2&&(R.$$scope={dirty:g,ctx:t}),Te.$set(R);const j={};g&2&&(j.$$scope={dirty:g,ctx:t}),we.$set(j);const Zt={};g&2&&(Zt.$$scope={dirty:g,ctx:t}),$e.$set(Zt);const Dt={};g&2&&(Dt.$$scope={dirty:g,ctx:t}),Pe.$set(Dt);const he={};g&2&&(he.$$scope={dirty:g,ctx:t}),Me.$set(he);const ue={};g&2&&(ue.$$scope={dirty:g,ctx:t}),je.$set(ue)},i(t){mr||(h(P.$$.fragment,t),h(Re.$$.fragment,t),h(Se.$$.fragment,t),h(Xe.$$.fragment,t),h(Qe.$$.fragment,t),h(_e.$$.fragment,t),h(Ye.$$.fragment,t),h(ge.$$.fragment,t),h(Oe.$$.fragment,t),h(Ke.$$.fragment,t),h(et.$$.fragment,t),h(tt.$$.fragment,t),h(nt.$$.fragment,t),h(Te.$$.fragment,t),h(ot.$$.fragment,t),h(rt.$$.fragment,t),h(st.$$.fragment,t),h(at.$$.fragment,t),h(we.$$.fragment,t),h(it.$$.fragment,t),h(dt.$$.fragment,t),h(ct.$$.fragment,t),h(pt.$$.fragment,t),h(mt.$$.fragment,t),h(ht.$$.fragment,t),h($e.$$.fragment,t),h(ut.$$.fragment,t),h(Pe.$$.fragment,t),h(ft.$$.fragment,t),h(_t.$$.fragment,t),h(gt.$$.fragment,t),h(kt.$$.fragment,t),h(bt.$$.fragment,t),h(Me.$$.fragment,t),h(Tt.$$.fragment,t),h(xt.$$.fragment,t),h(vt.$$.fragment,t),h(yt.$$.fragment,t),h(je.$$.fragment,t),h(wt.$$.fragment,t),h(zt.$$.fragment,t),h($t.$$.fragment,t),h(Pt.$$.fragment,t),h(Ct.$$.fragment,t),h(qt.$$.fragment,t),h(Mt.$$.fragment,t),h(It.$$.fragment,t),h(Ft.$$.fragment,t),h(Lt.$$.fragment,t),h(jt.$$.fragment,t),h(Wt.$$.fragment,t),h(Jt.$$.fragment,t),h(Ut.$$.fragment,t),h(Bt.$$.fragment,t),h(Vt.$$.fragment,t),h(Nt.$$.fragment,t),mr=!0)},o(t){u(P.$$.fragment,t),u(Re.$$.fragment,t),u(Se.$$.fragment,t),u(Xe.$$.fragment,t),u(Qe.$$.fragment,t),u(_e.$$.fragment,t),u(Ye.$$.fragment,t),u(ge.$$.fragment,t),u(Oe.$$.fragment,t),u(Ke.$$.fragment,t),u(et.$$.fragment,t),u(tt.$$.fragment,t),u(nt.$$.fragment,t),u(Te.$$.fragment,t),u(ot.$$.fragment,t),u(rt.$$.fragment,t),u(st.$$.fragment,t),u(at.$$.fragment,t),u(we.$$.fragment,t),u(it.$$.fragment,t),u(dt.$$.fragment,t),u(ct.$$.fragment,t),u(pt.$$.fragment,t),u(mt.$$.fragment,t),u(ht.$$.fragment,t),u($e.$$.fragment,t),u(ut.$$.fragment,t),u(Pe.$$.fragment,t),u(ft.$$.fragment,t),u(_t.$$.fragment,t),u(gt.$$.fragment,t),u(kt.$$.fragment,t),u(bt.$$.fragment,t),u(Me.$$.fragment,t),u(Tt.$$.fragment,t),u(xt.$$.fragment,t),u(vt.$$.fragment,t),u(yt.$$.fragment,t),u(je.$$.fragment,t),u(wt.$$.fragment,t),u(zt.$$.fragment,t),u($t.$$.fragment,t),u(Pt.$$.fragment,t),u(Ct.$$.fragment,t),u(qt.$$.fragment,t),u(Mt.$$.fragment,t),u(It.$$.fragment,t),u(Ft.$$.fragment,t),u(Lt.$$.fragment,t),u(jt.$$.fragment,t),u(Wt.$$.fragment,t),u(Jt.$$.fragment,t),u(Ut.$$.fragment,t),u(Bt.$$.fragment,t),u(Vt.$$.fragment,t),u(Nt.$$.fragment,t),mr=!1},d(t){t&&(d(I),d(k),d(_),d(i),d(M),d(Ko),d(Ze),d(er),d(De),d(tr),d(He),d(nr),d(Ge),d(or),d(Ae),d(rr),d(sr),d(b),d(ar),d(ir),d(lt),d(dr),d(T),d(cr),d(lr),d(C),d(pr),d(Oo)),d(c),f(P,t),f(Re,t),f(Se),f(Xe),f(Qe),f(_e),f(Ye),f(ge),f(Oe),f(Ke),f(et),f(tt),f(nt),f(Te),f(ot),f(rt),f(st),f(at),f(we),f(it),f(dt),f(ct,t),f(pt),f(mt),f(ht),f($e),f(ut),f(Pe),f(ft),f(_t),f(gt),f(kt),f(bt),f(Me),f(Tt),f(xt),f(vt),f(yt),f(je),f(wt),f(zt),f($t,t),f(Pt),f(Ct),f(qt),f(Mt),f(It),f(Ft),f(Lt),f(jt),f(Wt),f(Jt),f(Ut),f(Bt),f(Vt),f(Nt)}}}const jc='{"title":"Tokenizer","local":"tokenizer","sections":[{"title":"PreTrainedTokenizer","local":"transformers.PreTrainedTokenizer","sections":[],"depth":2},{"title":"PreTrainedTokenizerFast","local":"transformers.PreTrainedTokenizerFast","sections":[],"depth":2},{"title":"BatchEncoding","local":"transformers.BatchEncoding","sections":[],"depth":2}],"depth":1}';function Wc(W){return xc(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Dc extends vc{constructor(c){super(),yc(this,c,Wc,Lc,Tc,{})}}export{Dc as component};
