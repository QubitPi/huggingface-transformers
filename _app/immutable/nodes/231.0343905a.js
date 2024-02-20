import{s as ro,o as ao,n as de}from"../chunks/scheduler.9bc65507.js";import{S as io,i as co,g as d,s,r as _,A as lo,h as i,f as l,c as r,j as X,u as f,x as p,k as C,y as o,a as g,v as T,d as b,t as v,w as y}from"../chunks/index.707bf1b6.js";import{T as vt}from"../chunks/Tip.c2ecdbf4.js";import{D as V}from"../chunks/Docstring.17db21ae.js";import{C as Ot}from"../chunks/CodeBlock.54a9f38d.js";import{F as po,M as so}from"../chunks/Markdown.fef84341.js";import{E as Pt}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as pt}from"../chunks/Heading.342b1fa6.js";function mo(x){let e,h="Examples:",t,c,R;return c=new Ot({props:{code:"JTIzJTIwVG8lMjBsb2FkJTIwdGhlJTIwZGVmYXVsdCUyMCUyMndpa2lfZHByJTIyJTIwZGF0YXNldCUyMHdpdGglMjAyMU0lMjBwYXNzYWdlcyUyMGZyb20lMjB3aWtpcGVkaWElMjAoaW5kZXglMjBuYW1lJTIwaXMlMjAnY29tcHJlc3NlZCclMjBvciUyMCdleGFjdCcpJTBBZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFJhZ1JldHJpZXZlciUwQSUwQXJldHJpZXZlciUyMCUzRCUyMFJhZ1JldHJpZXZlci5mcm9tX3ByZXRyYWluZWQoJTBBJTIwJTIwJTIwJTIwJTIyZmFjZWJvb2slMkZkcHItY3R4X2VuY29kZXItc2luZ2xlLW5xLWJhc2UlMjIlMkMlMjBkYXRhc2V0JTNEJTIyd2lraV9kcHIlMjIlMkMlMjBpbmRleF9uYW1lJTNEJTIyY29tcHJlc3NlZCUyMiUwQSklMEElMEElMjMlMjBUbyUyMGxvYWQlMjB5b3VyJTIwb3duJTIwaW5kZXhlZCUyMGRhdGFzZXQlMjBidWlsdCUyMHdpdGglMjB0aGUlMjBkYXRhc2V0cyUyMGxpYnJhcnkuJTIwTW9yZSUyMGluZm8lMjBvbiUyMGhvdyUyMHRvJTIwYnVpbGQlMjB0aGUlMjBpbmRleGVkJTIwZGF0YXNldCUyMGluJTIwZXhhbXBsZXMlMkZyYWclMkZ1c2Vfb3duX2tub3dsZWRnZV9kYXRhc2V0LnB5JTBBZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFJhZ1JldHJpZXZlciUwQSUwQWRhdGFzZXQlMjAlM0QlMjAoJTBBJTIwJTIwJTIwJTIwLi4uJTBBKSUyMCUyMCUyMyUyMGRhdGFzZXQlMjBtdXN0JTIwYmUlMjBhJTIwZGF0YXNldHMuRGF0YXNldHMlMjBvYmplY3QlMjB3aXRoJTIwY29sdW1ucyUyMCUyMnRpdGxlJTIyJTJDJTIwJTIydGV4dCUyMiUyMGFuZCUyMCUyMmVtYmVkZGluZ3MlMjIlMkMlMjBhbmQlMjBpdCUyMG11c3QlMjBoYXZlJTIwYSUyMGZhaXNzJTIwaW5kZXglMEFyZXRyaWV2ZXIlMjAlM0QlMjBSYWdSZXRyaWV2ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGZHByLWN0eF9lbmNvZGVyLXNpbmdsZS1ucS1iYXNlJTIyJTJDJTIwaW5kZXhlZF9kYXRhc2V0JTNEZGF0YXNldCklMEElMEElMjMlMjBUbyUyMGxvYWQlMjB5b3VyJTIwb3duJTIwaW5kZXhlZCUyMGRhdGFzZXQlMjBidWlsdCUyMHdpdGglMjB0aGUlMjBkYXRhc2V0cyUyMGxpYnJhcnklMjB0aGF0JTIwd2FzJTIwc2F2ZWQlMjBvbiUyMGRpc2suJTIwTW9yZSUyMGluZm8lMjBpbiUyMGV4YW1wbGVzJTJGcmFnJTJGdXNlX293bl9rbm93bGVkZ2VfZGF0YXNldC5weSUwQWZyb20lMjB0cmFuc2Zvcm1lcnMlMjBpbXBvcnQlMjBSYWdSZXRyaWV2ZXIlMEElMEFkYXRhc2V0X3BhdGglMjAlM0QlMjAlMjJwYXRoJTJGdG8lMkZteSUyRmRhdGFzZXQlMjIlMjAlMjAlMjMlMjBkYXRhc2V0JTIwc2F2ZWQlMjB2aWElMjAqZGF0YXNldC5zYXZlX3RvX2Rpc2soLi4uKSolMEFpbmRleF9wYXRoJTIwJTNEJTIwJTIycGF0aCUyRnRvJTJGbXklMkZpbmRleC5mYWlzcyUyMiUyMCUyMCUyMyUyMGZhaXNzJTIwaW5kZXglMjBzYXZlZCUyMHZpYSUyMCpkYXRhc2V0LmdldF9pbmRleCglMjJlbWJlZGRpbmdzJTIyKS5zYXZlKC4uLikqJTBBcmV0cmlldmVyJTIwJTNEJTIwUmFnUmV0cmlldmVyLmZyb21fcHJldHJhaW5lZCglMEElMjAlMjAlMjAlMjAlMjJmYWNlYm9vayUyRmRwci1jdHhfZW5jb2Rlci1zaW5nbGUtbnEtYmFzZSUyMiUyQyUwQSUyMCUyMCUyMCUyMGluZGV4X25hbWUlM0QlMjJjdXN0b20lMjIlMkMlMEElMjAlMjAlMjAlMjBwYXNzYWdlc19wYXRoJTNEZGF0YXNldF9wYXRoJTJDJTBBJTIwJTIwJTIwJTIwaW5kZXhfcGF0aCUzRGluZGV4X3BhdGglMkMlMEEpJTBBJTBBJTIzJTIwVG8lMjBsb2FkJTIwdGhlJTIwbGVnYWN5JTIwaW5kZXglMjBidWlsdCUyMG9yaWdpbmFsbHklMjBmb3IlMjBSYWcncyUyMHBhcGVyJTBBZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFJhZ1JldHJpZXZlciUwQSUwQXJldHJpZXZlciUyMCUzRCUyMFJhZ1JldHJpZXZlci5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZkcHItY3R4X2VuY29kZXItc2luZ2xlLW5xLWJhc2UlMjIlMkMlMjBpbmRleF9uYW1lJTNEJTIybGVnYWN5JTIyKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To load the default &quot;wiki_dpr&quot; dataset with 21M passages from wikipedia (index name is &#x27;compressed&#x27; or &#x27;exact&#x27;)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RagRetriever

<span class="hljs-meta">&gt;&gt;&gt; </span>retriever = RagRetriever.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/dpr-ctx_encoder-single-nq-base&quot;</span>, dataset=<span class="hljs-string">&quot;wiki_dpr&quot;</span>, index_name=<span class="hljs-string">&quot;compressed&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To load your own indexed dataset built with the datasets library. More info on how to build the indexed dataset in examples/rag/use_own_knowledge_dataset.py</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RagRetriever

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset = (
<span class="hljs-meta">... </span>    ...
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># dataset must be a datasets.Datasets object with columns &quot;title&quot;, &quot;text&quot; and &quot;embeddings&quot;, and it must have a faiss index</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>retriever = RagRetriever.from_pretrained(<span class="hljs-string">&quot;facebook/dpr-ctx_encoder-single-nq-base&quot;</span>, indexed_dataset=dataset)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To load your own indexed dataset built with the datasets library that was saved on disk. More info in examples/rag/use_own_knowledge_dataset.py</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RagRetriever

<span class="hljs-meta">&gt;&gt;&gt; </span>dataset_path = <span class="hljs-string">&quot;path/to/my/dataset&quot;</span>  <span class="hljs-comment"># dataset saved via *dataset.save_to_disk(...)*</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>index_path = <span class="hljs-string">&quot;path/to/my/index.faiss&quot;</span>  <span class="hljs-comment"># faiss index saved via *dataset.get_index(&quot;embeddings&quot;).save(...)*</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>retriever = RagRetriever.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/dpr-ctx_encoder-single-nq-base&quot;</span>,
<span class="hljs-meta">... </span>    index_name=<span class="hljs-string">&quot;custom&quot;</span>,
<span class="hljs-meta">... </span>    passages_path=dataset_path,
<span class="hljs-meta">... </span>    index_path=index_path,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To load the legacy index built originally for Rag&#x27;s paper</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RagRetriever

<span class="hljs-meta">&gt;&gt;&gt; </span>retriever = RagRetriever.from_pretrained(<span class="hljs-string">&quot;facebook/dpr-ctx_encoder-single-nq-base&quot;</span>, index_name=<span class="hljs-string">&quot;legacy&quot;</span>)`,wrap:!1}}),{c(){e=d("p"),e.textContent=h,t=s(),_(c.$$.fragment)},l(a){e=i(a,"P",{"data-svelte-h":!0}),p(e)!=="svelte-kvfsh7"&&(e.textContent=h),t=r(a),f(c.$$.fragment,a)},m(a,F){g(a,e,F),g(a,t,F),T(c,a,F),R=!0},p:de,i(a){R||(b(c.$$.fragment,a),R=!0)},o(a){v(c.$$.fragment,a),R=!1},d(a){a&&(l(e),l(t)),y(c,a)}}}function uo(x){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=h},l(t){e=i(t,"P",{"data-svelte-h":!0}),p(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,c){g(t,e,c)},p:de,d(t){t&&l(e)}}}function ho(x){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=h},l(t){e=i(t,"P",{"data-svelte-h":!0}),p(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,c){g(t,e,c)},p:de,d(t){t&&l(e)}}}function go(x){let e,h="Example:",t,c,R;return c=new Ot({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBSYWdSZXRyaWV2ZXIlMkMlMjBSYWdNb2RlbCUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZyYWctdG9rZW4tYmFzZSUyMiklMEFyZXRyaWV2ZXIlMjAlM0QlMjBSYWdSZXRyaWV2ZXIuZnJvbV9wcmV0cmFpbmVkKCUwQSUyMCUyMCUyMCUyMCUyMmZhY2Vib29rJTJGcmFnLXRva2VuLWJhc2UlMjIlMkMlMjBpbmRleF9uYW1lJTNEJTIyZXhhY3QlMjIlMkMlMjB1c2VfZHVtbXlfZGF0YXNldCUzRFRydWUlMEEpJTBBJTIzJTIwaW5pdGlhbGl6ZSUyMHdpdGglMjBSYWdSZXRyaWV2ZXIlMjB0byUyMGRvJTIwZXZlcnl0aGluZyUyMGluJTIwb25lJTIwZm9yd2FyZCUyMGNhbGwlMEFtb2RlbCUyMCUzRCUyMFJhZ01vZGVsLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRnJhZy10b2tlbi1iYXNlJTIyJTJDJTIwcmV0cmlldmVyJTNEcmV0cmlldmVyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJIb3clMjBtYW55JTIwcGVvcGxlJTIwbGl2ZSUyMGluJTIwUGFyaXMlM0YlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbChpbnB1dF9pZHMlM0RpbnB1dHMlNUIlMjJpbnB1dF9pZHMlMjIlNUQp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, RagRetriever, RagModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/rag-token-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>retriever = RagRetriever.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/rag-token-base&quot;</span>, index_name=<span class="hljs-string">&quot;exact&quot;</span>, use_dummy_dataset=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize with RagRetriever to do everything in one forward call</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RagModel.from_pretrained(<span class="hljs-string">&quot;facebook/rag-token-base&quot;</span>, retriever=retriever)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;How many people live in Paris?&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])`,wrap:!1}}),{c(){e=d("p"),e.textContent=h,t=s(),_(c.$$.fragment)},l(a){e=i(a,"P",{"data-svelte-h":!0}),p(e)!=="svelte-11lpom8"&&(e.textContent=h),t=r(a),f(c.$$.fragment,a)},m(a,F){g(a,e,F),g(a,t,F),T(c,a,F),R=!0},p:de,i(a){R||(b(c.$$.fragment,a),R=!0)},o(a){v(c.$$.fragment,a),R=!1},d(a){a&&(l(e),l(t)),y(c,a)}}}function _o(x){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=h},l(t){e=i(t,"P",{"data-svelte-h":!0}),p(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,c){g(t,e,c)},p:de,d(t){t&&l(e)}}}function fo(x){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=h},l(t){e=i(t,"P",{"data-svelte-h":!0}),p(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,c){g(t,e,c)},p:de,d(t){t&&l(e)}}}function To(x){let e,h="Example:",t,c,R;return c=new Ot({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBSYWdSZXRyaWV2ZXIlMkMlMjBSYWdTZXF1ZW5jZUZvckdlbmVyYXRpb24lMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGcmFnLXNlcXVlbmNlLW5xJTIyKSUwQXJldHJpZXZlciUyMCUzRCUyMFJhZ1JldHJpZXZlci5mcm9tX3ByZXRyYWluZWQoJTBBJTIwJTIwJTIwJTIwJTIyZmFjZWJvb2slMkZyYWctc2VxdWVuY2UtbnElMjIlMkMlMjBpbmRleF9uYW1lJTNEJTIyZXhhY3QlMjIlMkMlMjB1c2VfZHVtbXlfZGF0YXNldCUzRFRydWUlMEEpJTBBJTIzJTIwaW5pdGlhbGl6ZSUyMHdpdGglMjBSYWdSZXRyaWV2ZXIlMjB0byUyMGRvJTIwZXZlcnl0aGluZyUyMGluJTIwb25lJTIwZm9yd2FyZCUyMGNhbGwlMEFtb2RlbCUyMCUzRCUyMFJhZ1NlcXVlbmNlRm9yR2VuZXJhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZyYWctdG9rZW4tbnElMjIlMkMlMjByZXRyaWV2ZXIlM0RyZXRyaWV2ZXIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhvdyUyMG1hbnklMjBwZW9wbGUlMjBsaXZlJTIwaW4lMjBQYXJpcyUzRiUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBdGFyZ2V0cyUyMCUzRCUyMHRva2VuaXplcih0ZXh0X3RhcmdldCUzRCUyMkluJTIwUGFyaXMlMkMlMjB0aGVyZSUyMGFyZSUyMDEwJTIwbWlsbGlvbiUyMHBlb3BsZS4lMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQWlucHV0X2lkcyUyMCUzRCUyMGlucHV0cyU1QiUyMmlucHV0X2lkcyUyMiU1RCUwQWxhYmVscyUyMCUzRCUyMHRhcmdldHMlNUIlMjJpbnB1dF9pZHMlMjIlNUQlMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoaW5wdXRfaWRzJTNEaW5wdXRfaWRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKSUwQSUwQSUyMyUyMG9yJTIwdXNlJTIwcmV0cmlldmVyJTIwc2VwYXJhdGVseSUwQW1vZGVsJTIwJTNEJTIwUmFnU2VxdWVuY2VGb3JHZW5lcmF0aW9uLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRnJhZy1zZXF1ZW5jZS1ucSUyMiUyQyUyMHVzZV9kdW1teV9kYXRhc2V0JTNEVHJ1ZSklMEElMjMlMjAxLiUyMEVuY29kZSUwQXF1ZXN0aW9uX2hpZGRlbl9zdGF0ZXMlMjAlM0QlMjBtb2RlbC5xdWVzdGlvbl9lbmNvZGVyKGlucHV0X2lkcyklNUIwJTVEJTBBJTIzJTIwMi4lMjBSZXRyaWV2ZSUwQWRvY3NfZGljdCUyMCUzRCUyMHJldHJpZXZlcihpbnB1dF9pZHMubnVtcHkoKSUyQyUyMHF1ZXN0aW9uX2hpZGRlbl9zdGF0ZXMuZGV0YWNoKCkubnVtcHkoKSUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBZG9jX3Njb3JlcyUyMCUzRCUyMHRvcmNoLmJtbSglMEElMjAlMjAlMjAlMjBxdWVzdGlvbl9oaWRkZW5fc3RhdGVzLnVuc3F1ZWV6ZSgxKSUyQyUyMGRvY3NfZGljdCU1QiUyMnJldHJpZXZlZF9kb2NfZW1iZWRzJTIyJTVELmZsb2F0KCkudHJhbnNwb3NlKDElMkMlMjAyKSUwQSkuc3F1ZWV6ZSgxKSUwQSUyMyUyMDMuJTIwRm9yd2FyZCUyMHRvJTIwZ2VuZXJhdG9yJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCUwQSUyMCUyMCUyMCUyMGNvbnRleHRfaW5wdXRfaWRzJTNEZG9jc19kaWN0JTVCJTIyY29udGV4dF9pbnB1dF9pZHMlMjIlNUQlMkMlMEElMjAlMjAlMjAlMjBjb250ZXh0X2F0dGVudGlvbl9tYXNrJTNEZG9jc19kaWN0JTVCJTIyY29udGV4dF9hdHRlbnRpb25fbWFzayUyMiU1RCUyQyUwQSUyMCUyMCUyMCUyMGRvY19zY29yZXMlM0Rkb2Nfc2NvcmVzJTJDJTBBJTIwJTIwJTIwJTIwZGVjb2Rlcl9pbnB1dF9pZHMlM0RsYWJlbHMlMkMlMEEp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, RagRetriever, RagSequenceForGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/rag-sequence-nq&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>retriever = RagRetriever.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/rag-sequence-nq&quot;</span>, index_name=<span class="hljs-string">&quot;exact&quot;</span>, use_dummy_dataset=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize with RagRetriever to do everything in one forward call</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RagSequenceForGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/rag-token-nq&quot;</span>, retriever=retriever)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;How many people live in Paris?&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>targets = tokenizer(text_target=<span class="hljs-string">&quot;In Paris, there are 10 million people.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = targets[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, labels=labels)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or use retriever separately</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RagSequenceForGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/rag-sequence-nq&quot;</span>, use_dummy_dataset=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># 1. Encode</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>question_hidden_states = model.question_encoder(input_ids)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># 2. Retrieve</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>docs_dict = retriever(input_ids.numpy(), question_hidden_states.detach().numpy(), return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>doc_scores = torch.bmm(
<span class="hljs-meta">... </span>    question_hidden_states.unsqueeze(<span class="hljs-number">1</span>), docs_dict[<span class="hljs-string">&quot;retrieved_doc_embeds&quot;</span>].<span class="hljs-built_in">float</span>().transpose(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>)
<span class="hljs-meta">... </span>).squeeze(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># 3. Forward to generator</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    context_input_ids=docs_dict[<span class="hljs-string">&quot;context_input_ids&quot;</span>],
<span class="hljs-meta">... </span>    context_attention_mask=docs_dict[<span class="hljs-string">&quot;context_attention_mask&quot;</span>],
<span class="hljs-meta">... </span>    doc_scores=doc_scores,
<span class="hljs-meta">... </span>    decoder_input_ids=labels,
<span class="hljs-meta">... </span>)`,wrap:!1}}),{c(){e=d("p"),e.textContent=h,t=s(),_(c.$$.fragment)},l(a){e=i(a,"P",{"data-svelte-h":!0}),p(e)!=="svelte-11lpom8"&&(e.textContent=h),t=r(a),f(c.$$.fragment,a)},m(a,F){g(a,e,F),g(a,t,F),T(c,a,F),R=!0},p:de,i(a){R||(b(c.$$.fragment,a),R=!0)},o(a){v(c.$$.fragment,a),R=!1},d(a){a&&(l(e),l(t)),y(c,a)}}}function bo(x){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=h},l(t){e=i(t,"P",{"data-svelte-h":!0}),p(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,c){g(t,e,c)},p:de,d(t){t&&l(e)}}}function vo(x){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=h},l(t){e=i(t,"P",{"data-svelte-h":!0}),p(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,c){g(t,e,c)},p:de,d(t){t&&l(e)}}}function yo(x){let e,h="Example:",t,c,R;return c=new Ot({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBSYWdSZXRyaWV2ZXIlMkMlMjBSYWdUb2tlbkZvckdlbmVyYXRpb24lMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGcmFnLXRva2VuLW5xJTIyKSUwQXJldHJpZXZlciUyMCUzRCUyMFJhZ1JldHJpZXZlci5mcm9tX3ByZXRyYWluZWQoJTBBJTIwJTIwJTIwJTIwJTIyZmFjZWJvb2slMkZyYWctdG9rZW4tbnElMjIlMkMlMjBpbmRleF9uYW1lJTNEJTIyZXhhY3QlMjIlMkMlMjB1c2VfZHVtbXlfZGF0YXNldCUzRFRydWUlMEEpJTBBJTIzJTIwaW5pdGlhbGl6ZSUyMHdpdGglMjBSYWdSZXRyaWV2ZXIlMjB0byUyMGRvJTIwZXZlcnl0aGluZyUyMGluJTIwb25lJTIwZm9yd2FyZCUyMGNhbGwlMEFtb2RlbCUyMCUzRCUyMFJhZ1Rva2VuRm9yR2VuZXJhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZyYWctdG9rZW4tbnElMjIlMkMlMjByZXRyaWV2ZXIlM0RyZXRyaWV2ZXIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMkhvdyUyMG1hbnklMjBwZW9wbGUlMjBsaXZlJTIwaW4lMjBQYXJpcyUzRiUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBdGFyZ2V0cyUyMCUzRCUyMHRva2VuaXplcih0ZXh0X3RhcmdldCUzRCUyMkluJTIwUGFyaXMlMkMlMjB0aGVyZSUyMGFyZSUyMDEwJTIwbWlsbGlvbiUyMHBlb3BsZS4lMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQWlucHV0X2lkcyUyMCUzRCUyMGlucHV0cyU1QiUyMmlucHV0X2lkcyUyMiU1RCUwQWxhYmVscyUyMCUzRCUyMHRhcmdldHMlNUIlMjJpbnB1dF9pZHMlMjIlNUQlMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoaW5wdXRfaWRzJTNEaW5wdXRfaWRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzKSUwQSUwQSUyMyUyMG9yJTIwdXNlJTIwcmV0cmlldmVyJTIwc2VwYXJhdGVseSUwQW1vZGVsJTIwJTNEJTIwUmFnVG9rZW5Gb3JHZW5lcmF0aW9uLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRnJhZy10b2tlbi1ucSUyMiUyQyUyMHVzZV9kdW1teV9kYXRhc2V0JTNEVHJ1ZSklMEElMjMlMjAxLiUyMEVuY29kZSUwQXF1ZXN0aW9uX2hpZGRlbl9zdGF0ZXMlMjAlM0QlMjBtb2RlbC5xdWVzdGlvbl9lbmNvZGVyKGlucHV0X2lkcyklNUIwJTVEJTBBJTIzJTIwMi4lMjBSZXRyaWV2ZSUwQWRvY3NfZGljdCUyMCUzRCUyMHJldHJpZXZlcihpbnB1dF9pZHMubnVtcHkoKSUyQyUyMHF1ZXN0aW9uX2hpZGRlbl9zdGF0ZXMuZGV0YWNoKCkubnVtcHkoKSUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBZG9jX3Njb3JlcyUyMCUzRCUyMHRvcmNoLmJtbSglMEElMjAlMjAlMjAlMjBxdWVzdGlvbl9oaWRkZW5fc3RhdGVzLnVuc3F1ZWV6ZSgxKSUyQyUyMGRvY3NfZGljdCU1QiUyMnJldHJpZXZlZF9kb2NfZW1iZWRzJTIyJTVELmZsb2F0KCkudHJhbnNwb3NlKDElMkMlMjAyKSUwQSkuc3F1ZWV6ZSgxKSUwQSUyMyUyMDMuJTIwRm9yd2FyZCUyMHRvJTIwZ2VuZXJhdG9yJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCUwQSUyMCUyMCUyMCUyMGNvbnRleHRfaW5wdXRfaWRzJTNEZG9jc19kaWN0JTVCJTIyY29udGV4dF9pbnB1dF9pZHMlMjIlNUQlMkMlMEElMjAlMjAlMjAlMjBjb250ZXh0X2F0dGVudGlvbl9tYXNrJTNEZG9jc19kaWN0JTVCJTIyY29udGV4dF9hdHRlbnRpb25fbWFzayUyMiU1RCUyQyUwQSUyMCUyMCUyMCUyMGRvY19zY29yZXMlM0Rkb2Nfc2NvcmVzJTJDJTBBJTIwJTIwJTIwJTIwZGVjb2Rlcl9pbnB1dF9pZHMlM0RsYWJlbHMlMkMlMEEpJTBBJTBBJTIzJTIwb3IlMjBkaXJlY3RseSUyMGdlbmVyYXRlJTBBZ2VuZXJhdGVkJTIwJTNEJTIwbW9kZWwuZ2VuZXJhdGUoJTBBJTIwJTIwJTIwJTIwY29udGV4dF9pbnB1dF9pZHMlM0Rkb2NzX2RpY3QlNUIlMjJjb250ZXh0X2lucHV0X2lkcyUyMiU1RCUyQyUwQSUyMCUyMCUyMCUyMGNvbnRleHRfYXR0ZW50aW9uX21hc2slM0Rkb2NzX2RpY3QlNUIlMjJjb250ZXh0X2F0dGVudGlvbl9tYXNrJTIyJTVEJTJDJTBBJTIwJTIwJTIwJTIwZG9jX3Njb3JlcyUzRGRvY19zY29yZXMlMkMlMEEpJTBBZ2VuZXJhdGVkX3N0cmluZyUyMCUzRCUyMHRva2VuaXplci5iYXRjaF9kZWNvZGUoZ2VuZXJhdGVkJTJDJTIwc2tpcF9zcGVjaWFsX3Rva2VucyUzRFRydWUp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, RagRetriever, RagTokenForGeneration
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/rag-token-nq&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>retriever = RagRetriever.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/rag-token-nq&quot;</span>, index_name=<span class="hljs-string">&quot;exact&quot;</span>, use_dummy_dataset=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize with RagRetriever to do everything in one forward call</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RagTokenForGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/rag-token-nq&quot;</span>, retriever=retriever)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;How many people live in Paris?&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>targets = tokenizer(text_target=<span class="hljs-string">&quot;In Paris, there are 10 million people.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = targets[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, labels=labels)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or use retriever separately</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RagTokenForGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/rag-token-nq&quot;</span>, use_dummy_dataset=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># 1. Encode</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>question_hidden_states = model.question_encoder(input_ids)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># 2. Retrieve</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>docs_dict = retriever(input_ids.numpy(), question_hidden_states.detach().numpy(), return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>doc_scores = torch.bmm(
<span class="hljs-meta">... </span>    question_hidden_states.unsqueeze(<span class="hljs-number">1</span>), docs_dict[<span class="hljs-string">&quot;retrieved_doc_embeds&quot;</span>].<span class="hljs-built_in">float</span>().transpose(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>)
<span class="hljs-meta">... </span>).squeeze(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># 3. Forward to generator</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    context_input_ids=docs_dict[<span class="hljs-string">&quot;context_input_ids&quot;</span>],
<span class="hljs-meta">... </span>    context_attention_mask=docs_dict[<span class="hljs-string">&quot;context_attention_mask&quot;</span>],
<span class="hljs-meta">... </span>    doc_scores=doc_scores,
<span class="hljs-meta">... </span>    decoder_input_ids=labels,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or directly generate</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(
<span class="hljs-meta">... </span>    context_input_ids=docs_dict[<span class="hljs-string">&quot;context_input_ids&quot;</span>],
<span class="hljs-meta">... </span>    context_attention_mask=docs_dict[<span class="hljs-string">&quot;context_attention_mask&quot;</span>],
<span class="hljs-meta">... </span>    doc_scores=doc_scores,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_string = tokenizer.batch_decode(generated, skip_special_tokens=<span class="hljs-literal">True</span>)`,wrap:!1}}),{c(){e=d("p"),e.textContent=h,t=s(),_(c.$$.fragment)},l(a){e=i(a,"P",{"data-svelte-h":!0}),p(e)!=="svelte-11lpom8"&&(e.textContent=h),t=r(a),f(c.$$.fragment,a)},m(a,F){g(a,e,F),g(a,t,F),T(c,a,F),R=!0},p:de,i(a){R||(b(c.$$.fragment,a),R=!0)},o(a){v(c.$$.fragment,a),R=!1},d(a){a&&(l(e),l(t)),y(c,a)}}}function Mo(x){let e,h,t,c,R,a,F='The <a href="/docs/transformers/main/en/model_doc/rag#transformers.RagModel">RagModel</a> forward method, overrides the <code>__call__</code> special method.',Jt,A,Ue,ie,Ke=`RAG is a seq2seq model which encapsulates two core components: a question encoder and a generator. During a forward
pass, we encode the input with the question encoder and pass it to the retriever to extract relevant context
documents. The documents are then prepended to the input. Such contextualized inputs is passed to the generator.`,$t,ce,et=`The question encoder can be any <em>autoencoding</em> model, preferably <a href="/docs/transformers/main/en/model_doc/dpr#transformers.DPRQuestionEncoder">DPRQuestionEncoder</a>, and the generator can be
any <em>seq2seq</em> model, preferably <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration">BartForConditionalGeneration</a>.`,Ut,le,tt=`The model can be initialized with a <a href="/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a> for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
<em>autoencoding</em> model as the <code>question_encoder</code> and any <em>seq2seq</em> model with language model head as the <code>generator</code>.
It has been tested with <a href="/docs/transformers/main/en/model_doc/dpr#transformers.DPRQuestionEncoder">DPRQuestionEncoder</a> as the <code>question_encoder</code> and <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration">BartForConditionalGeneration</a> or
<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5ForConditionalGeneration">T5ForConditionalGeneration</a> as the <code>generator</code>.`,zt,pe,ot=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Gt,me,nt=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Zt,B,ue,mt,I,st='The <a href="/docs/transformers/main/en/model_doc/rag#transformers.RagModel">RagModel</a> forward method, overrides the <code>__call__</code> special method.',ut,S,yt,H,E,ze,P,$,te,ke,q,Ee='The <a href="/docs/transformers/main/en/model_doc/rag#transformers.RagSequenceForGeneration">RagSequenceForGeneration</a> forward method, overrides the <code>__call__</code> special method.',Qe,he,Mt,ge,qe="A RAG-sequence model implementation. It performs RAG-sequence specific marginalization in the forward pass.",Ge,Q,Ct=`RAG is a seq2seq model which encapsulates two core components: a question encoder and a generator. During a forward
pass, we encode the input with the question encoder and pass it to the retriever to extract relevant context
documents. The documents are then prepended to the input. Such contextualized inputs is passed to the generator.`,Ze,_e,Ce=`The question encoder can be any <em>autoencoding</em> model, preferably <a href="/docs/transformers/main/en/model_doc/dpr#transformers.DPRQuestionEncoder">DPRQuestionEncoder</a>, and the generator can be
any <em>seq2seq</em> model, preferably <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration">BartForConditionalGeneration</a>.`,Ie,xe,ht=`The model can be initialized with a <a href="/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a> for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
<em>autoencoding</em> model as the <code>question_encoder</code> and any <em>seq2seq</em> model with language model head as the <code>generator</code>.
It has been tested with <a href="/docs/transformers/main/en/model_doc/dpr#transformers.DPRQuestionEncoder">DPRQuestionEncoder</a> as the <code>question_encoder</code> and <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration">BartForConditionalGeneration</a> or
<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5ForConditionalGeneration">T5ForConditionalGeneration</a> as the <code>generator</code>.`,It,fe,rt=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Ne,Te,at=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,gt,J,be,wt,O,Ht='The <a href="/docs/transformers/main/en/model_doc/rag#transformers.RagSequenceForGeneration">RagSequenceForGeneration</a> forward method, overrides the <code>__call__</code> special method.',Rt,Z,We,Y,ve,Xe,ye,Ve,Ye,D='Implements RAG sequence “thorough” decoding. Read the <a href="/docs/transformers/main/en/model_doc/phi#transformers.PhiForCausalLM.generate">generate()</a>` documentation\nfor more information on how to set other generate input parameters.',Fe,K,oe,U,Me,Be,ne,Pe='The <a href="/docs/transformers/main/en/model_doc/rag#transformers.RagTokenForGeneration">RagTokenForGeneration</a> forward method, overrides the <code>__call__</code> special method.',He,j,je,se,Oe="A RAG-token model implementation. It performs RAG-token specific marginalization in the forward pass.",_t,Se,n=`RAG is a seq2seq model which encapsulates two core components: a question encoder and a generator. During a forward
pass, we encode the input with the question encoder and pass it to the retriever to extract relevant context
documents. The documents are then prepended to the input. Such contextualized inputs is passed to the generator.`,M,L,dt=`The question encoder can be any <em>autoencoding</em> model, preferably <a href="/docs/transformers/main/en/model_doc/dpr#transformers.DPRQuestionEncoder">DPRQuestionEncoder</a>, and the generator can be
any <em>seq2seq</em> model, preferably <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration">BartForConditionalGeneration</a>.`,Nt,we,St=`The model can be initialized with a <a href="/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a> for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
<em>autoencoding</em> model as the <code>question_encoder</code> and any <em>seq2seq</em> model with language model head as the <code>generator</code>.
It has been tested with <a href="/docs/transformers/main/en/model_doc/dpr#transformers.DPRQuestionEncoder">DPRQuestionEncoder</a> as the <code>question_encoder</code> and <a href="/docs/transformers/main/en/model_doc/bart#transformers.BartForConditionalGeneration">BartForConditionalGeneration</a> or
<a href="/docs/transformers/main/en/model_doc/t5#transformers.T5ForConditionalGeneration">T5ForConditionalGeneration</a> as the <code>generator</code>.`,ee,Re,Wt=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,ft,it,eo=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Lt,re,Xt,At,ct,to='The <a href="/docs/transformers/main/en/model_doc/rag#transformers.RagTokenForGeneration">RagTokenForGeneration</a> forward method, overrides the <code>__call__</code> special method.',Et,Le,Dt,Tt,Je,$e,kt,Vt,Bt,Kt="Implements RAG token decoding.",lt;return e=new pt({props:{title:"RagModel",local:"transformers.RagModel",headingTag:"h2"}}),c=new V({props:{name:"class transformers.RagModel",anchor:"transformers.RagModel",parameters:[{name:"config",val:": Optional = None"},{name:"question_encoder",val:": Optional = None"},{name:"generator",val:": Optional = None"},{name:"retriever",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RagModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig">RagConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.RagModel.question_encoder",description:`<strong>question_encoder</strong> (<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>) &#x2014;
An encoder model compatible with the faiss index encapsulated by the <code>retriever</code>.`,name:"question_encoder"},{anchor:"transformers.RagModel.generator",description:`<strong>generator</strong> (<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>) &#x2014;
A seq2seq model used as the generator in the RAG architecture.`,name:"generator"},{anchor:"transformers.RagModel.retriever",description:`<strong>retriever</strong> (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a>) &#x2014;
A retriever class encapsulating a faiss index queried to obtain context documents for current inputs.`,name:"retriever"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/rag/modeling_rag.py#L485"}}),A=new vt({props:{$$slots:{default:[uo]},$$scope:{ctx:x}}}),ue=new V({props:{name:"forward",anchor:"transformers.RagModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"doc_scores",val:": Optional = None"},{name:"context_input_ids",val:": Optional = None"},{name:"context_attention_mask",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"output_retrieved",val:": Optional = None"},{name:"n_docs",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.RagModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. <a href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig">RagConfig</a>, used to initialize the model, specifies
which generator to use, it also specifies a compatible generator tokenizer. Use that tokenizer class to
obtain the indices.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RagModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RagModel.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>generator_enc_last_hidden_state</code>, <em>optional</em>: <code>generator_enc_hidden_states</code>,
<em>optional</em>: <code>generator_enc_attentions</code>). <code>generator_enc_last_hidden_state</code> of shape <code>(batch_size, n_docs * sequence_length, hidden_size)</code> is a sequence of hidden-states at the output of the last layer of the
generator&#x2019;s encoder.</p>
<p>Used by the (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagModel">RagModel</a>) model during decoding.`,name:"encoder_outputs"},{anchor:"transformers.RagModel.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for generation tasks. <code>None</code> by default, construct as per instructions for the generator model
you&#x2019;re using with your RAG instance.`,name:"decoder_input_ids"},{anchor:"transformers.RagModel.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.RagModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>) &#x2014;
Tuple consists of two elements: <code>encoder_outputs</code> of the RAG model (see <code>encoder_outputs</code>) and
<code>past_key_values</code> of the underlying generator. Can be used to speed up decoding. <code>past_key_values</code> are used
in the (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagTokenForGeneration">RagTokenForGeneration</a>) model during decoding.`,name:"past_key_values"},{anchor:"transformers.RagModel.forward.doc_scores",description:`<strong>doc_scores</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.n_docs)</code>) &#x2014;
Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>. If the model has is not initialized with a <code>retriever</code> <code>doc_scores</code>
has to be provided to the forward pass. <code>doc_scores</code> can be computed via
<code>question_encoder_last_hidden_state</code> and <code>retrieved_doc_embeds</code>, see examples for more information.`,name:"doc_scores"},{anchor:"transformers.RagModel.forward.context_input_ids",description:`<strong>context_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Input IDs post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever. If the model was not initialized with a <code>retriever</code> \`<code>context_input_ids</code> has to be provided to
the forward pass. <code>context_input_ids</code> are returned by <code>__call__()</code>.`,name:"context_input_ids"},{anchor:"transformers.RagModel.forward.context_attention_mask",description:`<strong>context_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>,<em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Attention mask post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever. If the model has is not initialized with a <code>retriever</code> <code>context_attention_mask</code> has to be
provided to the forward pass. <code>context_attention_mask</code> are returned by <code>__call__()</code>.`,name:"context_attention_mask"},{anchor:"transformers.RagModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.RagModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RagModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RagModel.forward.output_retrieved(bool,",description:`<strong>output_retrieved(<code>bool</code>,</strong> <em>optional</em>) &#x2014;
Whether or not to return the <code>retrieved_doc_embeds</code>, <code>retrieved_doc_ids</code>, <code>context_input_ids</code> and
<code>context_attention_mask</code>. See returned tensors for more detail.`,name:"output_retrieved(bool,"},{anchor:"transformers.RagModel.forward.n_docs",description:"<strong>n_docs</strong> (<code>int</code>, <em>optional</em>, defaults to `config.n_docs&#x201C;) &#x2014;\nNumber of documents to retrieve and/or number of documents for which to generate an answer.",name:"n_docs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/rag/modeling_rag.py#L529",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/model_doc/rag#transformers.models.rag.modeling_rag.RetrievAugLMOutput"
>transformers.models.rag.modeling_rag.RetrievAugLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig"
>RagConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) — Prediction scores of the language modeling head. The score is possibly marginalized over all documents for
each vocabulary token.</p>
</li>
<li>
<p><strong>doc_scores</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.n_docs)</code>) — Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains precomputed hidden-states (key and values in the attention blocks) of the decoder that can be used
(see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>retrieved_doc_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.n_docs, hidden_size)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) — Embedded documents retrieved by the retriever. Is used with <code>question_encoder_last_hidden_state</code> to compute
the <code>doc_scores</code>.</p>
</li>
<li>
<p><strong>retrieved_doc_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, config.n_docs)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) — The indexes of the embedded documents retrieved by the retriever.</p>
</li>
<li>
<p><strong>context_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) — Input ids post-processed from the retrieved documents and the question encoder input_ids by the retriever.</p>
</li>
<li>
<p><strong>context_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) — Attention mask post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever.</p>
</li>
<li>
<p><strong>question_encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) — Sequence of hidden states at the output of the last layer of the question encoder pooled output of the
model.</p>
</li>
<li>
<p><strong>question_enc_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings and one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the question encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>question_enc_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the question encoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
<li>
<p><strong>generator_enc_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) — Sequence of hidden-states at the output of the last layer of the generator encoder of the model.</p>
</li>
<li>
<p><strong>generator_enc_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings and one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the generator encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>generator_enc_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the generator encoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
<li>
<p><strong>generator_dec_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings and one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the generator decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>generator_dec_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the generator decoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
<li>
<p><strong>generator_cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross-attentions weights of the generator decoder, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/model_doc/rag#transformers.models.rag.modeling_rag.RetrievAugLMOutput"
>transformers.models.rag.modeling_rag.RetrievAugLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),S=new vt({props:{$$slots:{default:[ho]},$$scope:{ctx:x}}}),H=new Pt({props:{anchor:"transformers.RagModel.forward.example",$$slots:{default:[go]},$$scope:{ctx:x}}}),ze=new pt({props:{title:"RagSequenceForGeneration",local:"transformers.RagSequenceForGeneration",headingTag:"h2"}}),te=new V({props:{name:"class transformers.RagSequenceForGeneration",anchor:"transformers.RagSequenceForGeneration",parameters:[{name:"config",val:": Optional = None"},{name:"question_encoder",val:": Optional = None"},{name:"generator",val:": Optional = None"},{name:"retriever",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RagSequenceForGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig">RagConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.RagSequenceForGeneration.question_encoder",description:`<strong>question_encoder</strong> (<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>) &#x2014;
An encoder model compatible with the faiss index encapsulated by the <code>retriever</code>.`,name:"question_encoder"},{anchor:"transformers.RagSequenceForGeneration.generator",description:`<strong>generator</strong> (<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>) &#x2014;
A seq2seq model used as the generator in the RAG architecture.`,name:"generator"},{anchor:"transformers.RagSequenceForGeneration.retriever",description:`<strong>retriever</strong> (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a>) &#x2014;
A retriever class encapsulating a faiss index queried to obtain context documents for current inputs.`,name:"retriever"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/rag/modeling_rag.py#L726"}}),he=new vt({props:{$$slots:{default:[_o]},$$scope:{ctx:x}}}),be=new V({props:{name:"forward",anchor:"transformers.RagSequenceForGeneration.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"context_input_ids",val:": Optional = None"},{name:"context_attention_mask",val:": Optional = None"},{name:"doc_scores",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"output_retrieved",val:": Optional = None"},{name:"exclude_bos_score",val:": Optional = None"},{name:"reduce_loss",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"n_docs",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RagSequenceForGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. <a href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig">RagConfig</a>, used to initialize the model, specifies
which generator to use, it also specifies a compatible generator tokenizer. Use that tokenizer class to
obtain the indices.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RagSequenceForGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RagSequenceForGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>generator_enc_last_hidden_state</code>, <em>optional</em>: <code>generator_enc_hidden_states</code>,
<em>optional</em>: <code>generator_enc_attentions</code>). <code>generator_enc_last_hidden_state</code> of shape <code>(batch_size, n_docs * sequence_length, hidden_size)</code> is a sequence of hidden-states at the output of the last layer of the
generator&#x2019;s encoder.</p>
<p>Used by the (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagModel">RagModel</a>) model during decoding.`,name:"encoder_outputs"},{anchor:"transformers.RagSequenceForGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for generation tasks. <code>None</code> by default, construct as per instructions for the generator model
you&#x2019;re using with your RAG instance.`,name:"decoder_input_ids"},{anchor:"transformers.RagSequenceForGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.RagSequenceForGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>) &#x2014;
Tuple consists of two elements: <code>encoder_outputs</code> of the RAG model (see <code>encoder_outputs</code>) and
<code>past_key_values</code> of the underlying generator. Can be used to speed up decoding. <code>past_key_values</code> are used
in the (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagTokenForGeneration">RagTokenForGeneration</a>) model during decoding.`,name:"past_key_values"},{anchor:"transformers.RagSequenceForGeneration.forward.doc_scores",description:`<strong>doc_scores</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.n_docs)</code>) &#x2014;
Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>. If the model has is not initialized with a <code>retriever</code> <code>doc_scores</code>
has to be provided to the forward pass. <code>doc_scores</code> can be computed via
<code>question_encoder_last_hidden_state</code> and <code>retrieved_doc_embeds</code>, see examples for more information.`,name:"doc_scores"},{anchor:"transformers.RagSequenceForGeneration.forward.context_input_ids",description:`<strong>context_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Input IDs post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever. If the model was not initialized with a <code>retriever</code> \`<code>context_input_ids</code> has to be provided to
the forward pass. <code>context_input_ids</code> are returned by <code>__call__()</code>.`,name:"context_input_ids"},{anchor:"transformers.RagSequenceForGeneration.forward.context_attention_mask",description:`<strong>context_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>,<em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Attention mask post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever. If the model has is not initialized with a <code>retriever</code> <code>context_attention_mask</code> has to be
provided to the forward pass. <code>context_attention_mask</code> are returned by <code>__call__()</code>.`,name:"context_attention_mask"},{anchor:"transformers.RagSequenceForGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.RagSequenceForGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RagSequenceForGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RagSequenceForGeneration.forward.output_retrieved(bool,",description:`<strong>output_retrieved(<code>bool</code>,</strong> <em>optional</em>) &#x2014;
Whether or not to return the <code>retrieved_doc_embeds</code>, <code>retrieved_doc_ids</code>, <code>context_input_ids</code> and
<code>context_attention_mask</code>. See returned tensors for more detail.`,name:"output_retrieved(bool,"},{anchor:"transformers.RagSequenceForGeneration.forward.n_docs",description:"<strong>n_docs</strong> (<code>int</code>, <em>optional</em>, defaults to `config.n_docs&#x201C;) &#x2014;\nNumber of documents to retrieve and/or number of documents for which to generate an answer.",name:"n_docs"},{anchor:"transformers.RagSequenceForGeneration.forward.exclude_bos_score",description:`<strong>exclude_bos_score</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Only relevant if <code>labels</code> is passed. If <code>True</code>, the score of the BOS token is disregarded when computing
the loss.`,name:"exclude_bos_score"},{anchor:"transformers.RagSequenceForGeneration.forward.reduce_loss",description:`<strong>reduce_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Only relevant if <code>labels</code> is passed. If <code>True</code>, the NLL loss is reduced using the <code>torch.Tensor.sum</code>
operation.`,name:"reduce_loss"},{anchor:"transformers.RagSequenceForGeneration.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Legacy dictionary, which is required so that model can use <em>generate()</em> function.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/rag/modeling_rag.py#L761",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/model_doc/rag#transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput"
>transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig"
>RagConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) — Prediction scores of the language modeling head. The score is possibly marginalized over all documents for
each vocabulary token.</p>
</li>
<li>
<p><strong>doc_scores</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.n_docs)</code>) — Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains precomputed hidden-states (key and values in the attention blocks) of the decoder that can be used
(see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>retrieved_doc_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.n_docs, hidden_size)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) — Embedded documents retrieved by the retriever. Is used with <code>question_encoder_last_hidden_state</code> to compute
the <code>doc_scores</code>.</p>
</li>
<li>
<p><strong>retrieved_doc_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, config.n_docs)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) — The indexes of the embedded documents retrieved by the retriever.</p>
</li>
<li>
<p><strong>context_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) — Input ids post-processed from the retrieved documents and the question encoder input_ids by the retriever.</p>
</li>
<li>
<p><strong>context_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) — Attention mask post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever.</p>
</li>
<li>
<p><strong>question_encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) — Sequence of hidden states at the output of the last layer of the question encoder pooled output of the
model.</p>
</li>
<li>
<p><strong>question_enc_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings and one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the question encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>question_enc_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the question encoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
<li>
<p><strong>generator_enc_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) — Sequence of hidden-states at the output of the last layer of the generator encoder of the model.</p>
</li>
<li>
<p><strong>generator_enc_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings and one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the generator encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>generator_enc_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the generator encoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
<li>
<p><strong>generator_dec_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings and one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the generator decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>generator_dec_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the generator decoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
<li>
<p><strong>generator_cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross-attentions weights of the generator decoder, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/model_doc/rag#transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput"
>transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Z=new vt({props:{$$slots:{default:[fo]},$$scope:{ctx:x}}}),Y=new Pt({props:{anchor:"transformers.RagSequenceForGeneration.forward.example",$$slots:{default:[To]},$$scope:{ctx:x}}}),ye=new V({props:{name:"generate",anchor:"transformers.RagSequenceForGeneration.generate",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"context_input_ids",val:": Optional = None"},{name:"context_attention_mask",val:": Optional = None"},{name:"doc_scores",val:": Optional = None"},{name:"do_deduplication",val:": Optional = None"},{name:"num_return_sequences",val:": Optional = None"},{name:"num_beams",val:": Optional = None"},{name:"n_docs",val:": Optional = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.RagSequenceForGeneration.generate.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
The sequence used as a prompt for the generation. If <code>input_ids</code> is not passed, then
<code>context_input_ids</code> has to be provided.`,name:"input_ids"},{anchor:"transformers.RagSequenceForGeneration.generate.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RagSequenceForGeneration.generate.context_input_ids",description:`<strong>context_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Input IDs post-processed from the retrieved documents and the question encoder input_ids by the
retriever.`,name:"context_input_ids"},{anchor:"transformers.RagSequenceForGeneration.generate.context_attention_mask",description:`<strong>context_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Attention mask post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever.</p>
<p>If the model is not initialized with a <code>retriever</code> or <code>input_ids</code> is not given, <code>context_input_ids</code> and
<code>context_attention_mask</code> have to be provided to the forward pass. They are returned by
<code>__call__()</code>.`,name:"context_attention_mask"},{anchor:"transformers.RagSequenceForGeneration.generate.doc_scores",description:`<strong>doc_scores</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.n_docs)</code>) &#x2014;
Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>.</p>
<p>If the model is not initialized with a <code>retriever</code> or <code>input_ids</code> is not given, <code>doc_scores</code> has to be
provided to the forward pass. <code>doc_scores</code> are returned by <code>__call__()</code>.`,name:"doc_scores"},{anchor:"transformers.RagSequenceForGeneration.generate.do_deduplication",description:`<strong>do_deduplication</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to deduplicate the generations from different context documents for a given input. Has
to be set to <code>False</code> if used while training with distributed backend.`,name:"do_deduplication"},{anchor:"transformers.RagSequenceForGeneration.generate.num_return_sequences(int,",description:`<strong>num_return_sequences(<code>int</code>,</strong> <em>optional</em>, defaults to 1) &#x2014;
The number of independently computed returned sequences for each element in the batch. Note that this
is not the value we pass to the <code>generator</code>&#x2019;s <code>[generate()](/docs/transformers/main/en/model_doc/phi#transformers.PhiForCausalLM.generate)</code> function,
where we set <code>num_return_sequences</code> to <code>num_beams</code>.`,name:"num_return_sequences(int,"},{anchor:"transformers.RagSequenceForGeneration.generate.num_beams",description:`<strong>num_beams</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Number of beams for beam search. 1 means no beam search.`,name:"num_beams"},{anchor:"transformers.RagSequenceForGeneration.generate.n_docs",description:`<strong>n_docs</strong> (<code>int</code>, <em>optional</em>, defaults to <code>config.n_docs</code>) &#x2014;
Number of documents to retrieve and/or number of documents for which to generate an answer.`,name:"n_docs"},{anchor:"transformers.RagSequenceForGeneration.generate.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, Any]</code>, <em>optional</em>) &#x2014;
Additional kwargs will be passed to <a href="/docs/transformers/main/en/model_doc/phi#transformers.PhiForCausalLM.generate">generate()</a>.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/rag/modeling_rag.py#L902",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The generated
sequences. The second dimension (sequence length) is either equal to <code>max_length</code> or shorter if all batches
finished early due to the <code>eos_token_id</code>.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>torch.LongTensor</code> of shape <code>(batch_size * num_return_sequences, sequence_length)</code></p>
`}}),K=new pt({props:{title:"RagTokenForGeneration",local:"transformers.RagTokenForGeneration",headingTag:"h2"}}),Me=new V({props:{name:"class transformers.RagTokenForGeneration",anchor:"transformers.RagTokenForGeneration",parameters:[{name:"config",val:": Optional = None"},{name:"question_encoder",val:": Optional = None"},{name:"generator",val:": Optional = None"},{name:"retriever",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RagTokenForGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig">RagConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.RagTokenForGeneration.question_encoder",description:`<strong>question_encoder</strong> (<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>) &#x2014;
An encoder model compatible with the faiss index encapsulated by the <code>retriever</code>.`,name:"question_encoder"},{anchor:"transformers.RagTokenForGeneration.generator",description:`<strong>generator</strong> (<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>) &#x2014;
A seq2seq model used as the generator in the RAG architecture.`,name:"generator"},{anchor:"transformers.RagTokenForGeneration.retriever",description:`<strong>retriever</strong> (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a>) &#x2014;
A retriever class encapsulating a faiss index queried to obtain context documents for current inputs.`,name:"retriever"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/rag/modeling_rag.py#L1124"}}),j=new vt({props:{$$slots:{default:[bo]},$$scope:{ctx:x}}}),Xt=new V({props:{name:"forward",anchor:"transformers.RagTokenForGeneration.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"context_input_ids",val:": Optional = None"},{name:"context_attention_mask",val:": Optional = None"},{name:"doc_scores",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"output_retrieved",val:": Optional = None"},{name:"do_marginalize",val:": Optional = None"},{name:"reduce_loss",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"n_docs",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RagTokenForGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. <a href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig">RagConfig</a>, used to initialize the model, specifies
which generator to use, it also specifies a compatible generator tokenizer. Use that tokenizer class to
obtain the indices.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RagTokenForGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RagTokenForGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>generator_enc_last_hidden_state</code>, <em>optional</em>: <code>generator_enc_hidden_states</code>,
<em>optional</em>: <code>generator_enc_attentions</code>). <code>generator_enc_last_hidden_state</code> of shape <code>(batch_size, n_docs * sequence_length, hidden_size)</code> is a sequence of hidden-states at the output of the last layer of the
generator&#x2019;s encoder.</p>
<p>Used by the (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagModel">RagModel</a>) model during decoding.`,name:"encoder_outputs"},{anchor:"transformers.RagTokenForGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for generation tasks. <code>None</code> by default, construct as per instructions for the generator model
you&#x2019;re using with your RAG instance.`,name:"decoder_input_ids"},{anchor:"transformers.RagTokenForGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.RagTokenForGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>) &#x2014;
Tuple consists of two elements: <code>encoder_outputs</code> of the RAG model (see <code>encoder_outputs</code>) and
<code>past_key_values</code> of the underlying generator. Can be used to speed up decoding. <code>past_key_values</code> are used
in the (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagTokenForGeneration">RagTokenForGeneration</a>) model during decoding.`,name:"past_key_values"},{anchor:"transformers.RagTokenForGeneration.forward.doc_scores",description:`<strong>doc_scores</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.n_docs)</code>) &#x2014;
Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>. If the model has is not initialized with a <code>retriever</code> <code>doc_scores</code>
has to be provided to the forward pass. <code>doc_scores</code> can be computed via
<code>question_encoder_last_hidden_state</code> and <code>retrieved_doc_embeds</code>, see examples for more information.`,name:"doc_scores"},{anchor:"transformers.RagTokenForGeneration.forward.context_input_ids",description:`<strong>context_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Input IDs post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever. If the model was not initialized with a <code>retriever</code> \`<code>context_input_ids</code> has to be provided to
the forward pass. <code>context_input_ids</code> are returned by <code>__call__()</code>.`,name:"context_input_ids"},{anchor:"transformers.RagTokenForGeneration.forward.context_attention_mask",description:`<strong>context_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>,<em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Attention mask post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever. If the model has is not initialized with a <code>retriever</code> <code>context_attention_mask</code> has to be
provided to the forward pass. <code>context_attention_mask</code> are returned by <code>__call__()</code>.`,name:"context_attention_mask"},{anchor:"transformers.RagTokenForGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.RagTokenForGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RagTokenForGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RagTokenForGeneration.forward.output_retrieved(bool,",description:`<strong>output_retrieved(<code>bool</code>,</strong> <em>optional</em>) &#x2014;
Whether or not to return the <code>retrieved_doc_embeds</code>, <code>retrieved_doc_ids</code>, <code>context_input_ids</code> and
<code>context_attention_mask</code>. See returned tensors for more detail.`,name:"output_retrieved(bool,"},{anchor:"transformers.RagTokenForGeneration.forward.n_docs",description:"<strong>n_docs</strong> (<code>int</code>, <em>optional</em>, defaults to `config.n_docs&#x201C;) &#x2014;\nNumber of documents to retrieve and/or number of documents for which to generate an answer.",name:"n_docs"},{anchor:"transformers.RagTokenForGeneration.forward.do_marginalize",description:`<strong>do_marginalize</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If <code>True</code>, the logits are marginalized over all documents by making use of
<code>torch.nn.functional.log_softmax</code>.`,name:"do_marginalize"},{anchor:"transformers.RagTokenForGeneration.forward.reduce_loss",description:`<strong>reduce_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Only relevant if <code>labels</code> is passed. If <code>True</code>, the NLL loss is reduced using the <code>torch.Tensor.sum</code>
operation.`,name:"reduce_loss"},{anchor:"transformers.RagTokenForGeneration.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Legacy dictionary, which is required so that model can use <em>generate()</em> function.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/rag/modeling_rag.py#L1230",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/model_doc/rag#transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput"
>transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig"
>RagConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) — Prediction scores of the language modeling head. The score is possibly marginalized over all documents for
each vocabulary token.</p>
</li>
<li>
<p><strong>doc_scores</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.n_docs)</code>) — Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains precomputed hidden-states (key and values in the attention blocks) of the decoder that can be used
(see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>retrieved_doc_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.n_docs, hidden_size)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) — Embedded documents retrieved by the retriever. Is used with <code>question_encoder_last_hidden_state</code> to compute
the <code>doc_scores</code>.</p>
</li>
<li>
<p><strong>retrieved_doc_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, config.n_docs)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) — The indexes of the embedded documents retrieved by the retriever.</p>
</li>
<li>
<p><strong>context_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) — Input ids post-processed from the retrieved documents and the question encoder input_ids by the retriever.</p>
</li>
<li>
<p><strong>context_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) — Attention mask post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever.</p>
</li>
<li>
<p><strong>question_encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) — Sequence of hidden states at the output of the last layer of the question encoder pooled output of the
model.</p>
</li>
<li>
<p><strong>question_enc_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings and one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the question encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>question_enc_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the question encoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
<li>
<p><strong>generator_enc_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) — Sequence of hidden-states at the output of the last layer of the generator encoder of the model.</p>
</li>
<li>
<p><strong>generator_enc_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings and one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the generator encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>generator_enc_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the generator encoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
<li>
<p><strong>generator_dec_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings and one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the generator decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>generator_dec_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the generator decoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
<li>
<p><strong>generator_cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross-attentions weights of the generator decoder, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/model_doc/rag#transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput"
>transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Le=new vt({props:{$$slots:{default:[vo]},$$scope:{ctx:x}}}),Tt=new Pt({props:{anchor:"transformers.RagTokenForGeneration.forward.example",$$slots:{default:[yo]},$$scope:{ctx:x}}}),kt=new V({props:{name:"generate",anchor:"transformers.RagTokenForGeneration.generate",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"context_input_ids",val:": Optional = None"},{name:"context_attention_mask",val:": Optional = None"},{name:"doc_scores",val:": Optional = None"},{name:"n_docs",val:": Optional = None"},{name:"generation_config",val:": Optional = None"},{name:"prefix_allowed_tokens_fn",val:": Callable = None"},{name:"logits_processor",val:": Optional = []"},{name:"stopping_criteria",val:": Optional = []"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RagTokenForGeneration.generate.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
The sequence used as a prompt for the generation. If <code>input_ids</code> is not passed, then
<code>context_input_ids</code> has to be provided.`,name:"input_ids"},{anchor:"transformers.RagTokenForGeneration.generate.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RagTokenForGeneration.generate.context_input_ids",description:`<strong>context_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Input IDs post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever.</p>
<p>If the model has is not initialized with a <code>retriever</code>, <code>context_input_ids</code> has to be provided to the
forward pass. <code>context_input_ids</code> are returned by <code>__call__()</code>.`,name:"context_input_ids"},{anchor:"transformers.RagTokenForGeneration.generate.context_attention_mask",description:`<strong>context_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Attention mask post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever.</p>
<p>If the model has is not initialized with a <code>retriever</code>, <code>context_input_ids</code> has to be provided to the
forward pass. <code>context_input_ids</code> are returned by <code>__call__()</code>.`,name:"context_attention_mask"},{anchor:"transformers.RagTokenForGeneration.generate.doc_scores",description:`<strong>doc_scores</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.n_docs)</code>) &#x2014;
Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>.</p>
<p>If the model has is not initialized with a <code>retriever</code>, <code>context_input_ids</code> has to be provided to the
forward pass. <code>context_input_ids</code> are returned by <code>__call__()</code>.`,name:"doc_scores"},{anchor:"transformers.RagTokenForGeneration.generate.n_docs",description:`<strong>n_docs</strong> (<code>int</code>, <em>optional</em>, defaults to <code>config.n_docs</code>) &#x2014;
Number of documents to retrieve and/or number of documents for which to generate an answer.`,name:"n_docs"},{anchor:"transformers.RagTokenForGeneration.generate.generation_config",description:`<strong>generation_config</strong> (<code>~generation.GenerationConfig</code>, <em>optional</em>) &#x2014;
The generation configuration to be used as base parametrization for the generation call. <code>**kwargs</code>
passed to generate matching the attributes of <code>generation_config</code> will override them. If
<code>generation_config</code> is not provided, the default will be used, which has the following loading
priority: 1) from the <code>generation_config.json</code> model file, if it exists; 2) from the model
configuration. Please note that unspecified parameters will inherit <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationConfig">GenerationConfig</a>&#x2019;s
default values, whose documentation should be checked to parameterize generation.`,name:"generation_config"},{anchor:"transformers.RagTokenForGeneration.generate.prefix_allowed_tokens_fn",description:`<strong>prefix_allowed_tokens_fn</strong> (<code>Callable[[int, torch.Tensor], List[int]]</code>, <em>optional</em>) &#x2014;
If provided, this function constraints the beam search to allowed tokens only at each step. If not
provided no constraint is applied. This function takes 2 arguments <code>inputs_ids</code> and the batch ID
<code>batch_id</code>. It has to return a list with the allowed tokens for the next generation step conditioned on
the previously generated tokens <code>inputs_ids</code> and the batch ID <code>batch_id</code>. This argument is useful for
constrained generation conditioned on the prefix, as described in <a href="https://arxiv.org/abs/2010.00904" rel="nofollow">Autoregressive Entity
Retrieval</a>.`,name:"prefix_allowed_tokens_fn"},{anchor:"transformers.RagTokenForGeneration.generate.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
Custom logits processors that complement the default logits processors built from arguments and a
model&#x2019;s config. If a logit processor is passed that is already created with the arguments or a model&#x2019;s
config an error is thrown.`,name:"logits_processor"},{anchor:"transformers.RagTokenForGeneration.generate.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
Custom stopping criteria that complement the default stopping criteria built from arguments and a
model&#x2019;s config. If a stopping criteria is passed that is already created with the arguments or a
model&#x2019;s config an error is thrown.`,name:"stopping_criteria"},{anchor:"transformers.RagTokenForGeneration.generate.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, Any]</code>, <em>optional</em>) &#x2014;
Ad hoc parametrization of <code>generate_config</code> and/or additional model-specific kwargs that will be
forwarded to the <code>forward</code> function of the model.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/rag/modeling_rag.py#L1371",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The generated
sequences. The second dimension (sequence_length) is either equal to <code>max_length</code> or shorter if all batches
finished early due to the <code>eos_token_id</code>.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>torch.LongTensor</code> of shape <code>(batch_size * num_return_sequences, sequence_length)</code></p>
`}}),{c(){_(e.$$.fragment),h=s(),t=d("div"),_(c.$$.fragment),R=s(),a=d("p"),a.innerHTML=F,Jt=s(),_(A.$$.fragment),Ue=s(),ie=d("p"),ie.textContent=Ke,$t=s(),ce=d("p"),ce.innerHTML=et,Ut=s(),le=d("p"),le.innerHTML=tt,zt=s(),pe=d("p"),pe.innerHTML=ot,Gt=s(),me=d("p"),me.innerHTML=nt,Zt=s(),B=d("div"),_(ue.$$.fragment),mt=s(),I=d("p"),I.innerHTML=st,ut=s(),_(S.$$.fragment),yt=s(),_(H.$$.fragment),E=s(),_(ze.$$.fragment),P=s(),$=d("div"),_(te.$$.fragment),ke=s(),q=d("p"),q.innerHTML=Ee,Qe=s(),_(he.$$.fragment),Mt=s(),ge=d("p"),ge.textContent=qe,Ge=s(),Q=d("p"),Q.textContent=Ct,Ze=s(),_e=d("p"),_e.innerHTML=Ce,Ie=s(),xe=d("p"),xe.innerHTML=ht,It=s(),fe=d("p"),fe.innerHTML=rt,Ne=s(),Te=d("p"),Te.innerHTML=at,gt=s(),J=d("div"),_(be.$$.fragment),wt=s(),O=d("p"),O.innerHTML=Ht,Rt=s(),_(Z.$$.fragment),We=s(),_(Y.$$.fragment),ve=s(),Xe=d("div"),_(ye.$$.fragment),Ve=s(),Ye=d("p"),Ye.innerHTML=D,Fe=s(),_(K.$$.fragment),oe=s(),U=d("div"),_(Me.$$.fragment),Be=s(),ne=d("p"),ne.innerHTML=Pe,He=s(),_(j.$$.fragment),je=s(),se=d("p"),se.textContent=Oe,_t=s(),Se=d("p"),Se.textContent=n,M=s(),L=d("p"),L.innerHTML=dt,Nt=s(),we=d("p"),we.innerHTML=St,ee=s(),Re=d("p"),Re.innerHTML=Wt,ft=s(),it=d("p"),it.innerHTML=eo,Lt=s(),re=d("div"),_(Xt.$$.fragment),At=s(),ct=d("p"),ct.innerHTML=to,Et=s(),_(Le.$$.fragment),Dt=s(),_(Tt.$$.fragment),Je=s(),$e=d("div"),_(kt.$$.fragment),Vt=s(),Bt=d("p"),Bt.textContent=Kt,this.h()},l(m){f(e.$$.fragment,m),h=r(m),t=i(m,"DIV",{class:!0});var w=X(t);f(c.$$.fragment,w),R=r(w),a=i(w,"P",{"data-svelte-h":!0}),p(a)!=="svelte-z00uar"&&(a.innerHTML=F),Jt=r(w),f(A.$$.fragment,w),Ue=r(w),ie=i(w,"P",{"data-svelte-h":!0}),p(ie)!=="svelte-1osmlg4"&&(ie.textContent=Ke),$t=r(w),ce=i(w,"P",{"data-svelte-h":!0}),p(ce)!=="svelte-bbwvs7"&&(ce.innerHTML=et),Ut=r(w),le=i(w,"P",{"data-svelte-h":!0}),p(le)!=="svelte-1y3a2q0"&&(le.innerHTML=tt),zt=r(w),pe=i(w,"P",{"data-svelte-h":!0}),p(pe)!=="svelte-6pahdo"&&(pe.innerHTML=ot),Gt=r(w),me=i(w,"P",{"data-svelte-h":!0}),p(me)!=="svelte-hswkmf"&&(me.innerHTML=nt),Zt=r(w),B=i(w,"DIV",{class:!0});var Ae=X(B);f(ue.$$.fragment,Ae),mt=r(Ae),I=i(Ae,"P",{"data-svelte-h":!0}),p(I)!=="svelte-z00uar"&&(I.innerHTML=st),ut=r(Ae),f(S.$$.fragment,Ae),yt=r(Ae),f(H.$$.fragment,Ae),Ae.forEach(l),w.forEach(l),E=r(m),f(ze.$$.fragment,m),P=r(m),$=i(m,"DIV",{class:!0});var z=X($);f(te.$$.fragment,z),ke=r(z),q=i(z,"P",{"data-svelte-h":!0}),p(q)!=="svelte-70sp7x"&&(q.innerHTML=Ee),Qe=r(z),f(he.$$.fragment,z),Mt=r(z),ge=i(z,"P",{"data-svelte-h":!0}),p(ge)!=="svelte-146ty18"&&(ge.textContent=qe),Ge=r(z),Q=i(z,"P",{"data-svelte-h":!0}),p(Q)!=="svelte-1osmlg4"&&(Q.textContent=Ct),Ze=r(z),_e=i(z,"P",{"data-svelte-h":!0}),p(_e)!=="svelte-bbwvs7"&&(_e.innerHTML=Ce),Ie=r(z),xe=i(z,"P",{"data-svelte-h":!0}),p(xe)!=="svelte-1y3a2q0"&&(xe.innerHTML=ht),It=r(z),fe=i(z,"P",{"data-svelte-h":!0}),p(fe)!=="svelte-6pahdo"&&(fe.innerHTML=rt),Ne=r(z),Te=i(z,"P",{"data-svelte-h":!0}),p(Te)!=="svelte-hswkmf"&&(Te.innerHTML=at),gt=r(z),J=i(z,"DIV",{class:!0});var ae=X(J);f(be.$$.fragment,ae),wt=r(ae),O=i(ae,"P",{"data-svelte-h":!0}),p(O)!=="svelte-70sp7x"&&(O.innerHTML=Ht),Rt=r(ae),f(Z.$$.fragment,ae),We=r(ae),f(Y.$$.fragment,ae),ae.forEach(l),ve=r(z),Xe=i(z,"DIV",{class:!0});var xt=X(Xe);f(ye.$$.fragment,xt),Ve=r(xt),Ye=i(xt,"P",{"data-svelte-h":!0}),p(Ye)!=="svelte-bpici0"&&(Ye.innerHTML=D),xt.forEach(l),z.forEach(l),Fe=r(m),f(K.$$.fragment,m),oe=r(m),U=i(m,"DIV",{class:!0});var G=X(U);f(Me.$$.fragment,G),Be=r(G),ne=i(G,"P",{"data-svelte-h":!0}),p(ne)!=="svelte-1dmpv15"&&(ne.innerHTML=Pe),He=r(G),f(j.$$.fragment,G),je=r(G),se=i(G,"P",{"data-svelte-h":!0}),p(se)!=="svelte-1j2ak7k"&&(se.textContent=Oe),_t=r(G),Se=i(G,"P",{"data-svelte-h":!0}),p(Se)!=="svelte-1osmlg4"&&(Se.textContent=n),M=r(G),L=i(G,"P",{"data-svelte-h":!0}),p(L)!=="svelte-bbwvs7"&&(L.innerHTML=dt),Nt=r(G),we=i(G,"P",{"data-svelte-h":!0}),p(we)!=="svelte-1y3a2q0"&&(we.innerHTML=St),ee=r(G),Re=i(G,"P",{"data-svelte-h":!0}),p(Re)!=="svelte-6pahdo"&&(Re.innerHTML=Wt),ft=r(G),it=i(G,"P",{"data-svelte-h":!0}),p(it)!=="svelte-hswkmf"&&(it.innerHTML=eo),Lt=r(G),re=i(G,"DIV",{class:!0});var De=X(re);f(Xt.$$.fragment,De),At=r(De),ct=i(De,"P",{"data-svelte-h":!0}),p(ct)!=="svelte-1dmpv15"&&(ct.innerHTML=to),Et=r(De),f(Le.$$.fragment,De),Dt=r(De),f(Tt.$$.fragment,De),De.forEach(l),Je=r(G),$e=i(G,"DIV",{class:!0});var bt=X($e);f(kt.$$.fragment,bt),Vt=r(bt),Bt=i(bt,"P",{"data-svelte-h":!0}),p(Bt)!=="svelte-1vsuijg"&&(Bt.textContent=Kt),bt.forEach(l),G.forEach(l),this.h()},h(){C(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),C(t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),C(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),C(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),C($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),C(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),C($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),C(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(m,w){T(e,m,w),g(m,h,w),g(m,t,w),T(c,t,null),o(t,R),o(t,a),o(t,Jt),T(A,t,null),o(t,Ue),o(t,ie),o(t,$t),o(t,ce),o(t,Ut),o(t,le),o(t,zt),o(t,pe),o(t,Gt),o(t,me),o(t,Zt),o(t,B),T(ue,B,null),o(B,mt),o(B,I),o(B,ut),T(S,B,null),o(B,yt),T(H,B,null),g(m,E,w),T(ze,m,w),g(m,P,w),g(m,$,w),T(te,$,null),o($,ke),o($,q),o($,Qe),T(he,$,null),o($,Mt),o($,ge),o($,Ge),o($,Q),o($,Ze),o($,_e),o($,Ie),o($,xe),o($,It),o($,fe),o($,Ne),o($,Te),o($,gt),o($,J),T(be,J,null),o(J,wt),o(J,O),o(J,Rt),T(Z,J,null),o(J,We),T(Y,J,null),o($,ve),o($,Xe),T(ye,Xe,null),o(Xe,Ve),o(Xe,Ye),g(m,Fe,w),T(K,m,w),g(m,oe,w),g(m,U,w),T(Me,U,null),o(U,Be),o(U,ne),o(U,He),T(j,U,null),o(U,je),o(U,se),o(U,_t),o(U,Se),o(U,M),o(U,L),o(U,Nt),o(U,we),o(U,ee),o(U,Re),o(U,ft),o(U,it),o(U,Lt),o(U,re),T(Xt,re,null),o(re,At),o(re,ct),o(re,Et),T(Le,re,null),o(re,Dt),T(Tt,re,null),o(U,Je),o(U,$e),T(kt,$e,null),o($e,Vt),o($e,Bt),lt=!0},p(m,w){const Ae={};w&2&&(Ae.$$scope={dirty:w,ctx:m}),A.$set(Ae);const z={};w&2&&(z.$$scope={dirty:w,ctx:m}),S.$set(z);const ae={};w&2&&(ae.$$scope={dirty:w,ctx:m}),H.$set(ae);const xt={};w&2&&(xt.$$scope={dirty:w,ctx:m}),he.$set(xt);const G={};w&2&&(G.$$scope={dirty:w,ctx:m}),Z.$set(G);const De={};w&2&&(De.$$scope={dirty:w,ctx:m}),Y.$set(De);const bt={};w&2&&(bt.$$scope={dirty:w,ctx:m}),j.$set(bt);const u={};w&2&&(u.$$scope={dirty:w,ctx:m}),Le.$set(u);const k={};w&2&&(k.$$scope={dirty:w,ctx:m}),Tt.$set(k)},i(m){lt||(b(e.$$.fragment,m),b(c.$$.fragment,m),b(A.$$.fragment,m),b(ue.$$.fragment,m),b(S.$$.fragment,m),b(H.$$.fragment,m),b(ze.$$.fragment,m),b(te.$$.fragment,m),b(he.$$.fragment,m),b(be.$$.fragment,m),b(Z.$$.fragment,m),b(Y.$$.fragment,m),b(ye.$$.fragment,m),b(K.$$.fragment,m),b(Me.$$.fragment,m),b(j.$$.fragment,m),b(Xt.$$.fragment,m),b(Le.$$.fragment,m),b(Tt.$$.fragment,m),b(kt.$$.fragment,m),lt=!0)},o(m){v(e.$$.fragment,m),v(c.$$.fragment,m),v(A.$$.fragment,m),v(ue.$$.fragment,m),v(S.$$.fragment,m),v(H.$$.fragment,m),v(ze.$$.fragment,m),v(te.$$.fragment,m),v(he.$$.fragment,m),v(be.$$.fragment,m),v(Z.$$.fragment,m),v(Y.$$.fragment,m),v(ye.$$.fragment,m),v(K.$$.fragment,m),v(Me.$$.fragment,m),v(j.$$.fragment,m),v(Xt.$$.fragment,m),v(Le.$$.fragment,m),v(Tt.$$.fragment,m),v(kt.$$.fragment,m),lt=!1},d(m){m&&(l(h),l(t),l(E),l(P),l($),l(Fe),l(oe),l(U)),y(e,m),y(c),y(A),y(ue),y(S),y(H),y(ze,m),y(te),y(he),y(be),y(Z),y(Y),y(ye),y(K,m),y(Me),y(j),y(Xt),y(Le),y(Tt),y(kt)}}}function wo(x){let e,h;return e=new so({props:{$$slots:{default:[Mo]},$$scope:{ctx:x}}}),{c(){_(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,c){T(e,t,c),h=!0},p(t,c){const R={};c&2&&(R.$$scope={dirty:c,ctx:t}),e.$set(R)},i(t){h||(b(e.$$.fragment,t),h=!0)},o(t){v(e.$$.fragment,t),h=!1},d(t){y(e,t)}}}function Ro(x){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=h},l(t){e=i(t,"P",{"data-svelte-h":!0}),p(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,c){g(t,e,c)},p:de,d(t){t&&l(e)}}}function ko(x){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=h},l(t){e=i(t,"P",{"data-svelte-h":!0}),p(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,c){g(t,e,c)},p:de,d(t){t&&l(e)}}}function xo(x){let e,h="Example:",t,c,R;return c=new Ot({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBSYWdSZXRyaWV2ZXIlMkMlMjBURlJhZ01vZGVsJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRnJhZy10b2tlbi1iYXNlJTIyKSUwQXJldHJpZXZlciUyMCUzRCUyMFJhZ1JldHJpZXZlci5mcm9tX3ByZXRyYWluZWQoJTBBJTIwJTIwJTIwJTIwJTIyZmFjZWJvb2slMkZyYWctdG9rZW4tYmFzZSUyMiUyQyUyMGluZGV4X25hbWUlM0QlMjJleGFjdCUyMiUyQyUyMHVzZV9kdW1teV9kYXRhc2V0JTNEVHJ1ZSUwQSklMEElMjMlMjBpbml0aWFsaXplJTIwd2l0aCUyMFJhZ1JldHJpZXZlciUyMHRvJTIwZG8lMjBldmVyeXRoaW5nJTIwaW4lMjBvbmUlMjBmb3J3YXJkJTIwY2FsbCUwQW1vZGVsJTIwJTNEJTIwVEZSYWdNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZyYWctdG9rZW4tYmFzZSUyMiUyQyUyMHJldHJpZXZlciUzRHJldHJpZXZlciUyQyUyMGZyb21fcHQlM0RUcnVlKSUwQSUwQWlucHV0X2RpY3QlMjAlM0QlMjB0b2tlbml6ZXIucHJlcGFyZV9zZXEyc2VxX2JhdGNoKCUwQSUyMCUyMCUyMCUyMCUyMkhvdyUyMG1hbnklMjBwZW9wbGUlMjBsaXZlJTIwaW4lMjBQYXJpcyUzRiUyMiUyQyUyMCUyMkluJTIwUGFyaXMlMkMlMjB0aGVyZSUyMGFyZSUyMDEwJTIwbWlsbGlvbiUyMHBlb3BsZS4lMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyJTBBKSUwQWlucHV0X2lkcyUyMCUzRCUyMGlucHV0X2RpY3QlNUIlMjJpbnB1dF9pZHMlMjIlNUQlMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoaW5wdXRfaWRzKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, RagRetriever, TFRagModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/rag-token-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>retriever = RagRetriever.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/rag-token-base&quot;</span>, index_name=<span class="hljs-string">&quot;exact&quot;</span>, use_dummy_dataset=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize with RagRetriever to do everything in one forward call</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRagModel.from_pretrained(<span class="hljs-string">&quot;facebook/rag-token-base&quot;</span>, retriever=retriever, from_pt=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_dict = tokenizer.prepare_seq2seq_batch(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;How many people live in Paris?&quot;</span>, <span class="hljs-string">&quot;In Paris, there are 10 million people.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = input_dict[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)`,wrap:!1}}),{c(){e=d("p"),e.textContent=h,t=s(),_(c.$$.fragment)},l(a){e=i(a,"P",{"data-svelte-h":!0}),p(e)!=="svelte-11lpom8"&&(e.textContent=h),t=r(a),f(c.$$.fragment,a)},m(a,F){g(a,e,F),g(a,t,F),T(c,a,F),R=!0},p:de,i(a){R||(b(c.$$.fragment,a),R=!0)},o(a){v(c.$$.fragment,a),R=!1},d(a){a&&(l(e),l(t)),y(c,a)}}}function qo(x){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=h},l(t){e=i(t,"P",{"data-svelte-h":!0}),p(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,c){g(t,e,c)},p:de,d(t){t&&l(e)}}}function Fo(x){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=h},l(t){e=i(t,"P",{"data-svelte-h":!0}),p(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,c){g(t,e,c)},p:de,d(t){t&&l(e)}}}function jo(x){let e,h="Example:",t,c,R;return c=new Ot({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBSYWdSZXRyaWV2ZXIlMkMlMjBURlJhZ1NlcXVlbmNlRm9yR2VuZXJhdGlvbiUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGcmFnLXNlcXVlbmNlLW5xJTIyKSUwQXJldHJpZXZlciUyMCUzRCUyMFJhZ1JldHJpZXZlci5mcm9tX3ByZXRyYWluZWQoJTBBJTIwJTIwJTIwJTIwJTIyZmFjZWJvb2slMkZyYWctc2VxdWVuY2UtbnElMjIlMkMlMjBpbmRleF9uYW1lJTNEJTIyZXhhY3QlMjIlMkMlMjB1c2VfZHVtbXlfZGF0YXNldCUzRFRydWUlMEEpJTBBJTIzJTIwaW5pdGlhbGl6ZSUyMHdpdGglMjBSYWdSZXRyaWV2ZXIlMjB0byUyMGRvJTIwZXZlcnl0aGluZyUyMGluJTIwb25lJTIwZm9yd2FyZCUyMGNhbGwlMEFtb2RlbCUyMCUzRCUyMFRGUmFnU2VxdWVuY2VGb3JHZW5lcmF0aW9uLmZyb21fcHJldHJhaW5lZCglMEElMjAlMjAlMjAlMjAlMjJmYWNlYm9vayUyRnJhZy1zZXF1ZW5jZS1ucSUyMiUyQyUyMHJldHJpZXZlciUzRHJldHJpZXZlciUyQyUyMGZyb21fcHQlM0RUcnVlJTBBKSUwQSUwQWlucHV0X2RpY3QlMjAlM0QlMjB0b2tlbml6ZXIucHJlcGFyZV9zZXEyc2VxX2JhdGNoKCUwQSUyMCUyMCUyMCUyMCUyMkhvdyUyMG1hbnklMjBwZW9wbGUlMjBsaXZlJTIwaW4lMjBQYXJpcyUzRiUyMiUyQyUyMCUyMkluJTIwUGFyaXMlMkMlMjB0aGVyZSUyMGFyZSUyMDEwJTIwbWlsbGlvbiUyMHBlb3BsZS4lMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyJTBBKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbChpbnB1dF9kaWN0JTJDJTIwb3V0cHV0X3JldHJpZXZlZCUzRFRydWUpJTBBJTBBJTIzJTIwb3IlMjB1c2UlMjByZXRyaWV2ZXIlMjBzZXBhcmF0ZWx5JTBBJTIzJTIwMS4lMjBFbmNvZGUlMEFpbnB1dF9pZHMlMjAlM0QlMjBpbnB1dF9kaWN0JTVCJTIyaW5wdXRfaWRzJTIyJTVEJTBBcXVlc3Rpb25faGlkZGVuX3N0YXRlcyUyMCUzRCUyMG1vZGVsLnF1ZXN0aW9uX2VuY29kZXIoaW5wdXRfaWRzKSU1QjAlNUQlMEElMjMlMjAyLiUyMFJldHJpZXZlJTBBZG9jc19kaWN0JTIwJTNEJTIwcmV0cmlldmVyKGlucHV0X2lkcy5udW1weSgpJTJDJTIwcXVlc3Rpb25faGlkZGVuX3N0YXRlcy5udW1weSgpJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiklMEFkb2Nfc2NvcmVzJTIwJTNEJTIwdGYuc3F1ZWV6ZSglMEElMjAlMjAlMjAlMjB0Zi5tYXRtdWwoJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwdGYuZXhwYW5kX2RpbXMocXVlc3Rpb25faGlkZGVuX3N0YXRlcyUyQyUyMGF4aXMlM0QxKSUyQyUyMGRvY3NfZGljdCU1QiUyMnJldHJpZXZlZF9kb2NfZW1iZWRzJTIyJTVEJTJDJTIwdHJhbnNwb3NlX2IlM0RUcnVlJTBBJTIwJTIwJTIwJTIwKSUyQyUwQSUyMCUyMCUyMCUyMGF4aXMlM0QxJTJDJTBBKSUwQSUyMyUyMDMuJTIwRm9yd2FyZCUyMHRvJTIwZ2VuZXJhdG9yJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCUwQSUyMCUyMCUyMCUyMGlucHV0cyUzRE5vbmUlMkMlMEElMjAlMjAlMjAlMjBjb250ZXh0X2lucHV0X2lkcyUzRGRvY3NfZGljdCU1QiUyMmNvbnRleHRfaW5wdXRfaWRzJTIyJTVEJTJDJTBBJTIwJTIwJTIwJTIwY29udGV4dF9hdHRlbnRpb25fbWFzayUzRGRvY3NfZGljdCU1QiUyMmNvbnRleHRfYXR0ZW50aW9uX21hc2slMjIlNUQlMkMlMEElMjAlMjAlMjAlMjBkb2Nfc2NvcmVzJTNEZG9jX3Njb3JlcyUyQyUwQSUyMCUyMCUyMCUyMGRlY29kZXJfaW5wdXRfaWRzJTNEaW5wdXRfZGljdCU1QiUyMmxhYmVscyUyMiU1RCUyQyUwQSklMEElMEElMjMlMjBvciUyMGRpcmVjdGx5JTIwZ2VuZXJhdGUlMEFnZW5lcmF0ZWQlMjAlM0QlMjBtb2RlbC5nZW5lcmF0ZSglMEElMjAlMjAlMjAlMjBjb250ZXh0X2lucHV0X2lkcyUzRGRvY3NfZGljdCU1QiUyMmNvbnRleHRfaW5wdXRfaWRzJTIyJTVEJTJDJTBBJTIwJTIwJTIwJTIwY29udGV4dF9hdHRlbnRpb25fbWFzayUzRGRvY3NfZGljdCU1QiUyMmNvbnRleHRfYXR0ZW50aW9uX21hc2slMjIlNUQlMkMlMEElMjAlMjAlMjAlMjBkb2Nfc2NvcmVzJTNEZG9jX3Njb3JlcyUyQyUwQSklMEFnZW5lcmF0ZWRfc3RyaW5nJTIwJTNEJTIwdG9rZW5pemVyLmJhdGNoX2RlY29kZShnZW5lcmF0ZWQlMkMlMjBza2lwX3NwZWNpYWxfdG9rZW5zJTNEVHJ1ZSk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, RagRetriever, TFRagSequenceForGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/rag-sequence-nq&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>retriever = RagRetriever.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/rag-sequence-nq&quot;</span>, index_name=<span class="hljs-string">&quot;exact&quot;</span>, use_dummy_dataset=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize with RagRetriever to do everything in one forward call</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRagSequenceForGeneration.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/rag-sequence-nq&quot;</span>, retriever=retriever, from_pt=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_dict = tokenizer.prepare_seq2seq_batch(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;How many people live in Paris?&quot;</span>, <span class="hljs-string">&quot;In Paris, there are 10 million people.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_dict, output_retrieved=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or use retriever separately</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># 1. Encode</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = input_dict[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>question_hidden_states = model.question_encoder(input_ids)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># 2. Retrieve</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>docs_dict = retriever(input_ids.numpy(), question_hidden_states.numpy(), return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>doc_scores = tf.squeeze(
<span class="hljs-meta">... </span>    tf.matmul(
<span class="hljs-meta">... </span>        tf.expand_dims(question_hidden_states, axis=<span class="hljs-number">1</span>), docs_dict[<span class="hljs-string">&quot;retrieved_doc_embeds&quot;</span>], transpose_b=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>    ),
<span class="hljs-meta">... </span>    axis=<span class="hljs-number">1</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># 3. Forward to generator</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    inputs=<span class="hljs-literal">None</span>,
<span class="hljs-meta">... </span>    context_input_ids=docs_dict[<span class="hljs-string">&quot;context_input_ids&quot;</span>],
<span class="hljs-meta">... </span>    context_attention_mask=docs_dict[<span class="hljs-string">&quot;context_attention_mask&quot;</span>],
<span class="hljs-meta">... </span>    doc_scores=doc_scores,
<span class="hljs-meta">... </span>    decoder_input_ids=input_dict[<span class="hljs-string">&quot;labels&quot;</span>],
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or directly generate</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(
<span class="hljs-meta">... </span>    context_input_ids=docs_dict[<span class="hljs-string">&quot;context_input_ids&quot;</span>],
<span class="hljs-meta">... </span>    context_attention_mask=docs_dict[<span class="hljs-string">&quot;context_attention_mask&quot;</span>],
<span class="hljs-meta">... </span>    doc_scores=doc_scores,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_string = tokenizer.batch_decode(generated, skip_special_tokens=<span class="hljs-literal">True</span>)`,wrap:!1}}),{c(){e=d("p"),e.textContent=h,t=s(),_(c.$$.fragment)},l(a){e=i(a,"P",{"data-svelte-h":!0}),p(e)!=="svelte-11lpom8"&&(e.textContent=h),t=r(a),f(c.$$.fragment,a)},m(a,F){g(a,e,F),g(a,t,F),T(c,a,F),R=!0},p:de,i(a){R||(b(c.$$.fragment,a),R=!0)},o(a){v(c.$$.fragment,a),R=!1},d(a){a&&(l(e),l(t)),y(c,a)}}}function Jo(x){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=h},l(t){e=i(t,"P",{"data-svelte-h":!0}),p(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,c){g(t,e,c)},p:de,d(t){t&&l(e)}}}function $o(x){let e,h=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){e=d("p"),e.innerHTML=h},l(t){e=i(t,"P",{"data-svelte-h":!0}),p(e)!=="svelte-fincs2"&&(e.innerHTML=h)},m(t,c){g(t,e,c)},p:de,d(t){t&&l(e)}}}function Uo(x){let e,h="Example:",t,c,R;return c=new Ot({props:{code:"aW1wb3J0JTIwdGVuc29yZmxvdyUyMGFzJTIwdGYlMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMFJhZ1JldHJpZXZlciUyQyUyMFRGUmFnVG9rZW5Gb3JHZW5lcmF0aW9uJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZyYWctdG9rZW4tbnElMjIpJTBBcmV0cmlldmVyJTIwJTNEJTIwUmFnUmV0cmlldmVyLmZyb21fcHJldHJhaW5lZCglMEElMjAlMjAlMjAlMjAlMjJmYWNlYm9vayUyRnJhZy10b2tlbi1ucSUyMiUyQyUyMGluZGV4X25hbWUlM0QlMjJleGFjdCUyMiUyQyUyMHVzZV9kdW1teV9kYXRhc2V0JTNEVHJ1ZSUwQSklMEElMjMlMjBpbml0aWFsaXplJTIwd2l0aCUyMFJhZ1JldHJpZXZlciUyMHRvJTIwZG8lMjBldmVyeXRoaW5nJTIwaW4lMjBvbmUlMjBmb3J3YXJkJTIwY2FsbCUwQW1vZGVsJTIwJTNEJTIwVEZSYWdUb2tlbkZvckdlbmVyYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGcmFnLXRva2VuLW5xJTIyJTJDJTIwcmV0cmlldmVyJTNEcmV0cmlldmVyJTJDJTIwZnJvbV9wdCUzRFRydWUpJTBBJTBBaW5wdXRfZGljdCUyMCUzRCUyMHRva2VuaXplci5wcmVwYXJlX3NlcTJzZXFfYmF0Y2goJTBBJTIwJTIwJTIwJTIwJTIySG93JTIwbWFueSUyMHBlb3BsZSUyMGxpdmUlMjBpbiUyMFBhcmlzJTNGJTIyJTJDJTIwJTIySW4lMjBQYXJpcyUyQyUyMHRoZXJlJTIwYXJlJTIwMTAlMjBtaWxsaW9uJTIwcGVvcGxlLiUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIydGYlMjIlMEEpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKGlucHV0X2RpY3QlMkMlMjBvdXRwdXRfcmV0cmlldmVkJTNEVHJ1ZSklMEElMEElMjMlMjBvciUyMHVzZSUyMHJldHJpZXZlciUyMHNlcGFyYXRlbHklMEElMjMlMjAxLiUyMEVuY29kZSUwQWlucHV0X2lkcyUyMCUzRCUyMGlucHV0X2RpY3QlNUIlMjJpbnB1dF9pZHMlMjIlNUQlMEFxdWVzdGlvbl9oaWRkZW5fc3RhdGVzJTIwJTNEJTIwbW9kZWwucXVlc3Rpb25fZW5jb2RlcihpbnB1dF9pZHMpJTVCMCU1RCUwQSUyMyUyMDIuJTIwUmV0cmlldmUlMEFkb2NzX2RpY3QlMjAlM0QlMjByZXRyaWV2ZXIoaW5wdXRfaWRzLm51bXB5KCklMkMlMjBxdWVzdGlvbl9oaWRkZW5fc3RhdGVzLm51bXB5KCklMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyKSUwQWRvY19zY29yZXMlMjAlM0QlMjB0Zi5zcXVlZXplKCUwQSUyMCUyMCUyMCUyMHRmLm1hdG11bCglMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjB0Zi5leHBhbmRfZGltcyhxdWVzdGlvbl9oaWRkZW5fc3RhdGVzJTJDJTIwYXhpcyUzRDEpJTJDJTIwZG9jc19kaWN0JTVCJTIycmV0cmlldmVkX2RvY19lbWJlZHMlMjIlNUQlMkMlMjB0cmFuc3Bvc2VfYiUzRFRydWUlMEElMjAlMjAlMjAlMjApJTJDJTBBJTIwJTIwJTIwJTIwYXhpcyUzRDElMkMlMEEpJTBBJTIzJTIwMy4lMjBGb3J3YXJkJTIwdG8lMjBnZW5lcmF0b3IlMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoJTBBJTIwJTIwJTIwJTIwaW5wdXRzJTNETm9uZSUyQyUwQSUyMCUyMCUyMCUyMGNvbnRleHRfaW5wdXRfaWRzJTNEZG9jc19kaWN0JTVCJTIyY29udGV4dF9pbnB1dF9pZHMlMjIlNUQlMkMlMEElMjAlMjAlMjAlMjBjb250ZXh0X2F0dGVudGlvbl9tYXNrJTNEZG9jc19kaWN0JTVCJTIyY29udGV4dF9hdHRlbnRpb25fbWFzayUyMiU1RCUyQyUwQSUyMCUyMCUyMCUyMGRvY19zY29yZXMlM0Rkb2Nfc2NvcmVzJTJDJTBBJTIwJTIwJTIwJTIwZGVjb2Rlcl9pbnB1dF9pZHMlM0RpbnB1dF9kaWN0JTVCJTIybGFiZWxzJTIyJTVEJTJDJTBBKSUwQSUwQSUyMyUyMG9yJTIwZGlyZWN0bHklMjBnZW5lcmF0ZSUwQWdlbmVyYXRlZCUyMCUzRCUyMG1vZGVsLmdlbmVyYXRlKCUwQSUyMCUyMCUyMCUyMGNvbnRleHRfaW5wdXRfaWRzJTNEZG9jc19kaWN0JTVCJTIyY29udGV4dF9pbnB1dF9pZHMlMjIlNUQlMkMlMEElMjAlMjAlMjAlMjBjb250ZXh0X2F0dGVudGlvbl9tYXNrJTNEZG9jc19kaWN0JTVCJTIyY29udGV4dF9hdHRlbnRpb25fbWFzayUyMiU1RCUyQyUwQSUyMCUyMCUyMCUyMGRvY19zY29yZXMlM0Rkb2Nfc2NvcmVzJTJDJTBBKSUwQWdlbmVyYXRlZF9zdHJpbmclMjAlM0QlMjB0b2tlbml6ZXIuYmF0Y2hfZGVjb2RlKGdlbmVyYXRlZCUyQyUyMHNraXBfc3BlY2lhbF90b2tlbnMlM0RUcnVlKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, RagRetriever, TFRagTokenForGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/rag-token-nq&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>retriever = RagRetriever.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;facebook/rag-token-nq&quot;</span>, index_name=<span class="hljs-string">&quot;exact&quot;</span>, use_dummy_dataset=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initialize with RagRetriever to do everything in one forward call</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRagTokenForGeneration.from_pretrained(<span class="hljs-string">&quot;facebook/rag-token-nq&quot;</span>, retriever=retriever, from_pt=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_dict = tokenizer.prepare_seq2seq_batch(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;How many people live in Paris?&quot;</span>, <span class="hljs-string">&quot;In Paris, there are 10 million people.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_dict, output_retrieved=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or use retriever separately</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># 1. Encode</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = input_dict[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>question_hidden_states = model.question_encoder(input_ids)[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># 2. Retrieve</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>docs_dict = retriever(input_ids.numpy(), question_hidden_states.numpy(), return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>doc_scores = tf.squeeze(
<span class="hljs-meta">... </span>    tf.matmul(
<span class="hljs-meta">... </span>        tf.expand_dims(question_hidden_states, axis=<span class="hljs-number">1</span>), docs_dict[<span class="hljs-string">&quot;retrieved_doc_embeds&quot;</span>], transpose_b=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>    ),
<span class="hljs-meta">... </span>    axis=<span class="hljs-number">1</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># 3. Forward to generator</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    inputs=<span class="hljs-literal">None</span>,
<span class="hljs-meta">... </span>    context_input_ids=docs_dict[<span class="hljs-string">&quot;context_input_ids&quot;</span>],
<span class="hljs-meta">... </span>    context_attention_mask=docs_dict[<span class="hljs-string">&quot;context_attention_mask&quot;</span>],
<span class="hljs-meta">... </span>    doc_scores=doc_scores,
<span class="hljs-meta">... </span>    decoder_input_ids=input_dict[<span class="hljs-string">&quot;labels&quot;</span>],
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or directly generate</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generated = model.generate(
<span class="hljs-meta">... </span>    context_input_ids=docs_dict[<span class="hljs-string">&quot;context_input_ids&quot;</span>],
<span class="hljs-meta">... </span>    context_attention_mask=docs_dict[<span class="hljs-string">&quot;context_attention_mask&quot;</span>],
<span class="hljs-meta">... </span>    doc_scores=doc_scores,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_string = tokenizer.batch_decode(generated, skip_special_tokens=<span class="hljs-literal">True</span>)`,wrap:!1}}),{c(){e=d("p"),e.textContent=h,t=s(),_(c.$$.fragment)},l(a){e=i(a,"P",{"data-svelte-h":!0}),p(e)!=="svelte-11lpom8"&&(e.textContent=h),t=r(a),f(c.$$.fragment,a)},m(a,F){g(a,e,F),g(a,t,F),T(c,a,F),R=!0},p:de,i(a){R||(b(c.$$.fragment,a),R=!0)},o(a){v(c.$$.fragment,a),R=!1},d(a){a&&(l(e),l(t)),y(c,a)}}}function zo(x){let e,h,t,c,R,a,F='The <a href="/docs/transformers/main/en/model_doc/rag#transformers.TFRagModel">TFRagModel</a> forward method, overrides the <code>__call__</code> special method.',Jt,A,Ue,ie,Ke=`RAG is a sequence-to-sequence model which encapsulates two core components: a question encoder and a generator.
During a forward pass, we encode the input with the question encoder and pass it to the retriever to extract
relevant context documents. The documents are then prepended to the input. Such contextualized inputs is passed to
the generator.`,$t,ce,et=`The question encoder can be any <em>autoencoding</em> model, preferably <a href="/docs/transformers/main/en/model_doc/dpr#transformers.TFDPRQuestionEncoder">TFDPRQuestionEncoder</a>, and the generator can be
any <em>seq2seq</em> model, preferably <a href="/docs/transformers/main/en/model_doc/bart#transformers.TFBartForConditionalGeneration">TFBartForConditionalGeneration</a>.`,Ut,le,tt=`The model can be initialized with a <a href="/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a> for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
<em>autoencoding</em> model as the <code>question_encoder</code> and any <em>seq2seq</em> model with language model head as the <code>generator</code>.
It has been tested with <a href="/docs/transformers/main/en/model_doc/dpr#transformers.TFDPRQuestionEncoder">TFDPRQuestionEncoder</a> as the <code>question_encoder</code> and <a href="/docs/transformers/main/en/model_doc/bart#transformers.TFBartForConditionalGeneration">TFBartForConditionalGeneration</a>
as the <code>generator</code>.`,zt,pe,ot=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Gt,me,nt=`This model is also a Tensorflow <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a>
subclass. Use it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to
general usage and behavior.`,Zt,B,ue=`The model is in a developing state as it is now fully supports in eager-mode only, and may not be exported in
SavedModel format.`,mt,I,st,ut,S,yt='The <a href="/docs/transformers/main/en/model_doc/rag#transformers.TFRagModel">TFRagModel</a> forward method, overrides the <code>__call__</code> special method.',H,E,ze,P,$,te,ke,q,Ee,Qe,he,Mt='The <a href="/docs/transformers/main/en/model_doc/rag#transformers.TFRagSequenceForGeneration">TFRagSequenceForGeneration</a> forward method, overrides the <code>__call__</code> special method.',ge,qe,Ge,Q,Ct="A TF RAG-sequence model implementation. It performs RAG-sequence specific marginalization in the forward pass.",Ze,_e,Ce=`RAG is a sequence-to-sequence model which encapsulates two core components: a question encoder and a generator.
During a forward pass, we encode the input with the question encoder and pass it to the retriever to extract
relevant context documents. The documents are then prepended to the input. Such contextualized inputs is passed to
the generator.`,Ie,xe,ht=`The question encoder can be any <em>autoencoding</em> model, preferably <a href="/docs/transformers/main/en/model_doc/dpr#transformers.TFDPRQuestionEncoder">TFDPRQuestionEncoder</a>, and the generator can be
any <em>seq2seq</em> model, preferably <a href="/docs/transformers/main/en/model_doc/bart#transformers.TFBartForConditionalGeneration">TFBartForConditionalGeneration</a>.`,It,fe,rt=`The model can be initialized with a <a href="/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a> for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
<em>autoencoding</em> model as the <code>question_encoder</code> and any <em>seq2seq</em> model with language model head as the <code>generator</code>.
It has been tested with <a href="/docs/transformers/main/en/model_doc/dpr#transformers.TFDPRQuestionEncoder">TFDPRQuestionEncoder</a> as the <code>question_encoder</code> and <a href="/docs/transformers/main/en/model_doc/bart#transformers.TFBartForConditionalGeneration">TFBartForConditionalGeneration</a>
as the <code>generator</code>.`,Ne,Te,at=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,gt,J,be=`This model is also a Tensorflow <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a>
subclass. Use it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to
general usage and behavior.`,wt,O,Ht=`The model is in a developing state as it is now fully supports in eager-mode only, and may not be exported in
SavedModel format.`,Rt,Z,We,Y,ve,Xe='The <a href="/docs/transformers/main/en/model_doc/rag#transformers.TFRagSequenceForGeneration">TFRagSequenceForGeneration</a> forward method, overrides the <code>__call__</code> special method.',ye,Ve,Ye,D,Fe,K,oe,U,Me,Be='Implements RAG sequence “thorough” decoding. Read the <a href="/docs/transformers/main/en/model_doc/phi#transformers.PhiForCausalLM.generate">generate()</a>` documentation\nfor more information on how to set other generate input parameters',ne,Pe,He,j,je,se,Oe,_t='The <a href="/docs/transformers/main/en/model_doc/rag#transformers.TFRagTokenForGeneration">TFRagTokenForGeneration</a> forward method, overrides the <code>__call__</code> special method.',Se,n,M,L,dt="A TF RAG-token model implementation. It performs RAG-token specific marginalization in the forward pass.",Nt,we,St=`RAG is a sequence-to-sequence model which encapsulates two core components: a question encoder and a generator.
During a forward pass, we encode the input with the question encoder and pass it to the retriever to extract
relevant context documents. The documents are then prepended to the input. Such contextualized inputs is passed to
the generator.`,ee,Re,Wt=`The question encoder can be any <em>autoencoding</em> model, preferably <a href="/docs/transformers/main/en/model_doc/dpr#transformers.TFDPRQuestionEncoder">TFDPRQuestionEncoder</a>, and the generator can be
any <em>seq2seq</em> model, preferably <a href="/docs/transformers/main/en/model_doc/bart#transformers.TFBartForConditionalGeneration">TFBartForConditionalGeneration</a>.`,ft,it,eo=`The model can be initialized with a <a href="/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a> for end-to-end generation or used in combination with the
outputs of a retriever in multiple steps---see examples for more details. The model is compatible any
<em>autoencoding</em> model as the <code>question_encoder</code> and any <em>seq2seq</em> model with language model head as the <code>generator</code>.
It has been tested with <a href="/docs/transformers/main/en/model_doc/dpr#transformers.TFDPRQuestionEncoder">TFDPRQuestionEncoder</a> as the <code>question_encoder</code> and <a href="/docs/transformers/main/en/model_doc/bart#transformers.TFBartForConditionalGeneration">TFBartForConditionalGeneration</a>
as the <code>generator</code>.`,Lt,re,Xt=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,At,ct,to=`This model is also a Tensorflow <a href="https://www.tensorflow.org/api_docs/python/tf/keras/Model" rel="nofollow">keras.Model</a>
subclass. Use it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to
general usage and behavior.`,Et,Le,Dt=`The model is in a developing state as it is now fully supports in eager-mode only, and may not be exported in
SavedModel format.`,Tt,Je,$e,kt,Vt,Bt='The <a href="/docs/transformers/main/en/model_doc/rag#transformers.TFRagTokenForGeneration">TFRagTokenForGeneration</a> forward method, overrides the <code>__call__</code> special method.',Kt,lt,m,w,Ae,z,ae,xt,G,De="Implements TFRAG token decoding.",bt;return e=new pt({props:{title:"TFRagModel",local:"transformers.TFRagModel",headingTag:"h2"}}),c=new V({props:{name:"class transformers.TFRagModel",anchor:"transformers.TFRagModel",parameters:[{name:"config",val:": Optional[PretrainedConfig] = None"},{name:"question_encoder",val:": Optional[TFPreTrainedModel] = None"},{name:"generator",val:": Optional[TFPreTrainedModel] = None"},{name:"retriever",val:": Optional[RagRetriever] = None"},{name:"load_weight_prefix",val:": Optional[str] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRagModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig">RagConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.TFRagModel.question_encoder",description:`<strong>question_encoder</strong> (<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>) &#x2014;
An encoder model compatible with the faiss index encapsulated by the <code>retriever</code>.`,name:"question_encoder"},{anchor:"transformers.TFRagModel.generator",description:`<strong>generator</strong> (<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>) &#x2014;
A seq2seq model used as the generator in the RAG architecture.`,name:"generator"},{anchor:"transformers.TFRagModel.retriever",description:`<strong>retriever</strong> (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a>) &#x2014;
A retriever class encapsulating a faiss index queried to obtain context documents for current inputs.`,name:"retriever"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/rag/modeling_tf_rag.py#L497"}}),A=new vt({props:{$$slots:{default:[Ro]},$$scope:{ctx:x}}}),st=new V({props:{name:"call",anchor:"transformers.TFRagModel.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_outputs",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_input_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"past_key_values",val:": Tuple[Tuple[Union[np.ndarray, tf.Tensor]]] | None = None"},{name:"doc_scores",val:": np.ndarray | tf.Tensor | None = None"},{name:"context_input_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"context_attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"use_cache",val:": bool | None = None"},{name:"output_attentions",val:": bool | None = None"},{name:"output_hidden_states",val:": bool | None = None"},{name:"output_retrieved",val:": bool | None = None"},{name:"n_docs",val:": int | None = None"},{name:"return_dict",val:": bool | None = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRagModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. <a href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig">RagConfig</a>, used to initialize the model, specifies
which generator to use, it also specifies a compatible generator tokenizer. Use that tokenizer class to
obtain the indices.`,name:"input_ids"},{anchor:"transformers.TFRagModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRagModel.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(tf.Tensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>generator_enc_last_hidden_state</code>, <em>optional</em>: <code>generator_enc_hidden_states</code>,
<em>optional</em>: <code>generator_enc_attentions</code>). <code>generator_enc_last_hidden_state</code> of shape <code>(batch_size, n_docs * sequence_length, hidden_size)</code> is a sequence of hidden-states at the output of the last layer of the
generator&#x2019;s encoder.</p>
<p>Used by the (<a href="/docs/transformers/main/en/model_doc/rag#transformers.TFRagModel">TFRagModel</a>) model during decoding.`,name:"encoder_outputs"},{anchor:"transformers.TFRagModel.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for generation tasks. <code>None</code> by default, construct as per instructions for the generator model
you&#x2019;re using with your RAG instance.`,name:"decoder_input_ids"},{anchor:"transformers.TFRagModel.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.TFRagModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(tf.Tensor))</code>) &#x2014;
Tuple consists of two elements: <code>encoder_outputs</code> of the RAG model (see <code>encoder_outputs</code>) and
<code>past_key_values</code> of the underlying generator. Can be used to speed up decoding. <code>past_key_values</code> are used
in the (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagTokenForGeneration">RagTokenForGeneration</a>) model during decoding.`,name:"past_key_values"},{anchor:"transformers.TFRagModel.call.doc_scores",description:`<strong>doc_scores</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.n_docs)</code>) &#x2014;
Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>. If the model has is not initialized with a <code>retriever</code> <code>doc_scores</code>
has to be provided to the forward pass. <code>doc_scores</code> can be computed via
<code>question_encoder_last_hidden_state</code> and <code>retrieved_doc_embeds</code>, see examples for more information.`,name:"doc_scores"},{anchor:"transformers.TFRagModel.call.context_input_ids",description:`<strong>context_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Input IDs post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever.</p>
<p>If the model has is not initialized with a <code>retriever</code> \`<code>context_input_ids</code> has to be provided to the
forward pass. <code>context_input_ids</code> are returned by <code>__call__()</code>. context_attention_mask
(<code>tf.Tensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when
<em>output_retrieved=True</em>): Attention mask post-processed from the retrieved documents and the question
encoder <code>input_ids</code> by the retriever.</p>
<p>If the model has is not initialized with a <code>retriever</code> <code>context_attention_mask</code> has to be provided to the
forward pass. <code>context_attention_mask</code> are returned by <code>__call__()</code>.`,name:"context_input_ids"},{anchor:"transformers.TFRagModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFRagModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFRagModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFRagModel.call.output_retrieved(bool,",description:`<strong>output_retrieved(<code>bool</code>,</strong> <em>optional</em>) &#x2014;
Whether or not to return the <code>retrieved_doc_embeds</code>, <code>retrieved_doc_ids</code>, <code>context_input_ids</code> and
<code>context_attention_mask</code>. See returned tensors for more detail.`,name:"output_retrieved(bool,"},{anchor:"transformers.TFRagModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>TFRetrievAugLMOutput</code> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFRagModel.call.n_docs",description:"<strong>n_docs</strong> (<code>int</code>, <em>optional</em>, defaults to `config.n_docs&#x201C;) &#x2014;\nNumber of documents to retrieve and/or number of documents for which to generate an answer.",name:"n_docs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/rag/modeling_tf_rag.py#L548",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.models.rag.modeling_tf_rag.TFRetrievAugLMOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig"
>RagConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) — Prediction scores of the language modeling head. The score is possibly marginalized over all documents for
each vocabulary token.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains precomputed hidden-states (key and values in the attention blocks) of the decoder that can be used
(see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>doc_scores</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.n_docs)</code>) — Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>.</p>
</li>
<li>
<p><strong>retrieved_doc_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.n_docs, hidden_size)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) — Embedded documents retrieved by the retriever. Is used with <code>question_encoder_last_hidden_state</code> to compute
the <code>doc_scores</code>.</p>
</li>
<li>
<p><strong>retrieved_doc_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.n_docs)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) — The indexes of the embedded documents retrieved by the retriever.</p>
</li>
<li>
<p><strong>context_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) — Input ids post-processed from the retrieved documents and the question encoder input_ids by the retriever.</p>
</li>
<li>
<p><strong>context_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) — Attention mask post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever.</p>
</li>
<li>
<p><strong>question_encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) — Sequence of hidden states at the output of the last layer of the question encoder pooled output of the
model.</p>
</li>
<li>
<p><strong>question_enc_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings and one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the question encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>question_enc_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the question encoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
<li>
<p><strong>generator_enc_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) — Sequence of hidden-states at the output of the last layer of the generator encoder of the model.</p>
</li>
<li>
<p><strong>generator_enc_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings and one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the generator encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>generator_enc_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the generator encoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
<li>
<p><strong>generator_dec_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings and one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the generator decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>generator_dec_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the generator decoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.models.rag.modeling_tf_rag.TFRetrievAugLMOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),E=new vt({props:{$$slots:{default:[ko]},$$scope:{ctx:x}}}),P=new Pt({props:{anchor:"transformers.TFRagModel.call.example",$$slots:{default:[xo]},$$scope:{ctx:x}}}),te=new pt({props:{title:"TFRagSequenceForGeneration",local:"transformers.TFRagSequenceForGeneration",headingTag:"h2"}}),Ee=new V({props:{name:"class transformers.TFRagSequenceForGeneration",anchor:"transformers.TFRagSequenceForGeneration",parameters:[{name:"config",val:": Optional[PretrainedConfig] = None"},{name:"question_encoder",val:": Optional[TFPreTrainedModel] = None"},{name:"generator",val:": Optional[TFPreTrainedModel] = None"},{name:"retriever",val:": Optional[RagRetriever] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRagSequenceForGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig">RagConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.TFRagSequenceForGeneration.question_encoder",description:`<strong>question_encoder</strong> (<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>) &#x2014;
An encoder model compatible with the faiss index encapsulated by the <code>retriever</code>.`,name:"question_encoder"},{anchor:"transformers.TFRagSequenceForGeneration.generator",description:`<strong>generator</strong> (<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>) &#x2014;
A seq2seq model used as the generator in the RAG architecture.`,name:"generator"},{anchor:"transformers.TFRagSequenceForGeneration.retriever",description:`<strong>retriever</strong> (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a>) &#x2014;
A retriever class encapsulating a faiss index queried to obtain context documents for current inputs.`,name:"retriever"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/rag/modeling_tf_rag.py#L1314"}}),qe=new vt({props:{$$slots:{default:[qo]},$$scope:{ctx:x}}}),We=new V({props:{name:"call",anchor:"transformers.TFRagSequenceForGeneration.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_input_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_outputs",val:": np.ndarray | tf.Tensor | None = None"},{name:"past_key_values",val:": Optional[Tuple[Tuple[Union[np.ndarray, tf.Tensor]]]] = None"},{name:"doc_scores",val:": np.ndarray | tf.Tensor | None = None"},{name:"context_input_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"context_attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"use_cache",val:": Optional[bool] = None"},{name:"output_attentions",val:": Optional[bool] = None"},{name:"output_hidden_states",val:": Optional[bool] = None"},{name:"output_retrieved",val:": Optional[bool] = None"},{name:"n_docs",val:": Optional[int] = None"},{name:"exclude_bos_score",val:": Optional[bool] = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"reduce_loss",val:": Optional[bool] = None"},{name:"return_dict",val:": Optional[bool] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRagSequenceForGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. <a href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig">RagConfig</a>, used to initialize the model, specifies
which generator to use, it also specifies a compatible generator tokenizer. Use that tokenizer class to
obtain the indices.`,name:"input_ids"},{anchor:"transformers.TFRagSequenceForGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRagSequenceForGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(tf.Tensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>generator_enc_last_hidden_state</code>, <em>optional</em>: <code>generator_enc_hidden_states</code>,
<em>optional</em>: <code>generator_enc_attentions</code>). <code>generator_enc_last_hidden_state</code> of shape <code>(batch_size, n_docs * sequence_length, hidden_size)</code> is a sequence of hidden-states at the output of the last layer of the
generator&#x2019;s encoder.</p>
<p>Used by the (<a href="/docs/transformers/main/en/model_doc/rag#transformers.TFRagModel">TFRagModel</a>) model during decoding.`,name:"encoder_outputs"},{anchor:"transformers.TFRagSequenceForGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for generation tasks. <code>None</code> by default, construct as per instructions for the generator model
you&#x2019;re using with your RAG instance.`,name:"decoder_input_ids"},{anchor:"transformers.TFRagSequenceForGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.TFRagSequenceForGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(tf.Tensor))</code>) &#x2014;
Tuple consists of two elements: <code>encoder_outputs</code> of the RAG model (see <code>encoder_outputs</code>) and
<code>past_key_values</code> of the underlying generator. Can be used to speed up decoding. <code>past_key_values</code> are used
in the (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagTokenForGeneration">RagTokenForGeneration</a>) model during decoding.`,name:"past_key_values"},{anchor:"transformers.TFRagSequenceForGeneration.call.doc_scores",description:`<strong>doc_scores</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.n_docs)</code>) &#x2014;
Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>. If the model has is not initialized with a <code>retriever</code> <code>doc_scores</code>
has to be provided to the forward pass. <code>doc_scores</code> can be computed via
<code>question_encoder_last_hidden_state</code> and <code>retrieved_doc_embeds</code>, see examples for more information.`,name:"doc_scores"},{anchor:"transformers.TFRagSequenceForGeneration.call.context_input_ids",description:`<strong>context_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Input IDs post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever.</p>
<p>If the model has is not initialized with a <code>retriever</code> \`<code>context_input_ids</code> has to be provided to the
forward pass. <code>context_input_ids</code> are returned by <code>__call__()</code>. context_attention_mask
(<code>tf.Tensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when
<em>output_retrieved=True</em>): Attention mask post-processed from the retrieved documents and the question
encoder <code>input_ids</code> by the retriever.</p>
<p>If the model has is not initialized with a <code>retriever</code> <code>context_attention_mask</code> has to be provided to the
forward pass. <code>context_attention_mask</code> are returned by <code>__call__()</code>.`,name:"context_input_ids"},{anchor:"transformers.TFRagSequenceForGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFRagSequenceForGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFRagSequenceForGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFRagSequenceForGeneration.call.output_retrieved(bool,",description:`<strong>output_retrieved(<code>bool</code>,</strong> <em>optional</em>) &#x2014;
Whether or not to return the <code>retrieved_doc_embeds</code>, <code>retrieved_doc_ids</code>, <code>context_input_ids</code> and
<code>context_attention_mask</code>. See returned tensors for more detail.`,name:"output_retrieved(bool,"},{anchor:"transformers.TFRagSequenceForGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>TFRetrievAugLMOutput</code> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFRagSequenceForGeneration.call.n_docs",description:"<strong>n_docs</strong> (<code>int</code>, <em>optional</em>, defaults to `config.n_docs&#x201C;) &#x2014;\nNumber of documents to retrieve and/or number of documents for which to generate an answer.",name:"n_docs"},{anchor:"transformers.TFRagSequenceForGeneration.call.exclude_bos_score",description:`<strong>exclude_bos_score</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Only relevant if <code>labels</code> is passed. If <code>True</code>, the score of the BOS token is disregarded when computing
the loss.`,name:"exclude_bos_score"},{anchor:"transformers.TFRagSequenceForGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss according to Rag-Sequence model formulation See
<a href="https://arxiv.org/pdf/2005.11401.pdf" rel="nofollow">https://arxiv.org/pdf/2005.11401.pdf</a> Section 2.1 for details about Rag-Sequence formulation. Indices should
be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"},{anchor:"transformers.TFRagSequenceForGeneration.call.reduce_loss",description:`<strong>reduce_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Only relevant if <code>labels</code> is passed. If <code>True</code>, the NLL loss is reduced using the <code>tf.Tensor.sum</code>
operation.`,name:"reduce_loss"},{anchor:"transformers.TFRagSequenceForGeneration.call.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Legacy dictionary, which is required so that model can use <em>generate()</em> function.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/rag/modeling_tf_rag.py#L1367",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.models.rag.modeling_tf_rag.TFRetrievAugLMMarginOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig"
>RagConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) — Prediction scores of the language modeling head. The score is possibly marginalized over all documents for
each vocabulary token.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains precomputed hidden-states (key and values in the attention blocks) of the decoder that can be used
(see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>doc_scores</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.n_docs)</code>) — Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>.</p>
</li>
<li>
<p><strong>retrieved_doc_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.n_docs, hidden_size)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) — Embedded documents retrieved by the retriever. Is used with <code>question_encoder_last_hidden_state</code> to compute
the <code>doc_scores</code>.</p>
</li>
<li>
<p><strong>retrieved_doc_ids</strong> (<code>tf.Tensor</code> (int32) of shape <code>(batch_size, config.n_docs)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) — The indexes of the embedded documents retrieved by the retriever.</p>
</li>
<li>
<p><strong>context_input_ids</strong> (<code>tf.Tensor</code>(int32) of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) — Input ids post-processed from the retrieved documents and the question encoder input_ids by the retriever.</p>
</li>
<li>
<p><strong>context_attention_mask</strong> (<code>tf.Tensor</code> (int32) of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) — Attention mask post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever.</p>
</li>
<li>
<p><strong>question_encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) — Sequence of hidden states at the output of the last layer of the question encoder pooled output of the
model.</p>
</li>
<li>
<p><strong>question_enc_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings and one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the question encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>question_enc_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the question encoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
<li>
<p><strong>generator_enc_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) — Sequence of hidden-states at the output of the last layer of the generator encoder of the model.</p>
</li>
<li>
<p><strong>generator_enc_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings and one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the generator encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>generator_enc_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the generator encoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
<li>
<p><strong>generator_dec_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings and one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the generator decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>generator_dec_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the generator decoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.models.rag.modeling_tf_rag.TFRetrievAugLMMarginOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),Ve=new vt({props:{$$slots:{default:[Fo]},$$scope:{ctx:x}}}),D=new Pt({props:{anchor:"transformers.TFRagSequenceForGeneration.call.example",$$slots:{default:[jo]},$$scope:{ctx:x}}}),oe=new V({props:{name:"generate",anchor:"transformers.TFRagSequenceForGeneration.generate",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": tf.Tensor | None = None"},{name:"context_input_ids",val:" = None"},{name:"context_attention_mask",val:" = None"},{name:"doc_scores",val:" = None"},{name:"do_deduplication",val:" = None"},{name:"num_return_sequences",val:" = None"},{name:"num_beams",val:" = None"},{name:"n_docs",val:" = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRagSequenceForGeneration.generate.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
The sequence used as a prompt for the generation. If <code>input_ids</code> is not passed, then
<code>context_input_ids</code> has to be provided.`,name:"input_ids"},{anchor:"transformers.TFRagSequenceForGeneration.generate.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>: - 1 for
tokens that are <strong>not masked</strong>, - 0 for tokens that are <strong>masked</strong>. <a href="../glossary#attention-mask">What are attention
masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRagSequenceForGeneration.generate.context_input_ids",description:`<strong>context_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Input IDs post-processed from the retrieved documents and the question encoder input_ids by the
retriever.`,name:"context_input_ids"},{anchor:"transformers.TFRagSequenceForGeneration.generate.context_attention_mask",description:`<strong>context_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Attention mask post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever. If the model has is not initialized with a <code>retriever</code> or <code>input_ids</code> is not given,
<code>context_input_ids</code> and <code>context_attention_mask</code> have to be provided to the forward pass. They are
returned by <code>__call__()</code>.`,name:"context_attention_mask"},{anchor:"transformers.TFRagSequenceForGeneration.generate.doc_scores",description:`<strong>doc_scores</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.n_docs)</code>) &#x2014;
Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>. If the model has is not initialized with a <code>retriever</code> or
<code>input_ids</code> is not given, <code>doc_scores</code> has to be provided to the forward pass. <code>doc_scores</code> are
returned by <code>__call__()</code>.`,name:"doc_scores"},{anchor:"transformers.TFRagSequenceForGeneration.generate.do_deduplication",description:`<strong>do_deduplication</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to deduplicate the generations from different context documents for a given input. Has
to be set to <code>False</code> if used while training with distributed backend.`,name:"do_deduplication"},{anchor:"transformers.TFRagSequenceForGeneration.generate.num_return_sequences(int,",description:`<strong>num_return_sequences(<code>int</code>,</strong> <em>optional</em>, defaults to 1) &#x2014;
The number of independently computed returned sequences for each element in the batch. Note that this
is not the value we pass to the <code>generator</code>&#x2019;s <code>[generate()](/docs/transformers/main/en/model_doc/phi#transformers.PhiForCausalLM.generate)</code> function,
where we set <code>num_return_sequences</code> to <code>num_beams</code>.`,name:"num_return_sequences(int,"},{anchor:"transformers.TFRagSequenceForGeneration.generate.num_beams",description:`<strong>num_beams</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Number of beams for beam search. 1 means no beam search.`,name:"num_beams"},{anchor:"transformers.TFRagSequenceForGeneration.generate.n_docs",description:`<strong>n_docs</strong> (<code>int</code>, <em>optional</em>, defaults to <code>config.n_docs</code>) &#x2014;
Number of documents to retrieve and/or number of documents for which to generate an answer.`,name:"n_docs"},{anchor:"transformers.TFRagSequenceForGeneration.generate.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, Any]</code>, <em>optional</em>) &#x2014;
Additional kwargs will be passed to <a href="/docs/transformers/main/en/model_doc/phi#transformers.PhiForCausalLM.generate">generate()</a>`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/rag/modeling_tf_rag.py#L1602",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The generated sequences. The
second dimension (sequence length) is either equal to <code>max_length</code> or shorter if all batches finished early
due to the <code>eos_token_id</code>.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>tf.Tensor</code> of shape <code>(batch_size * num_return_sequences, sequence_length)</code></p>
`}}),Pe=new pt({props:{title:"TFRagTokenForGeneration",local:"transformers.TFRagTokenForGeneration",headingTag:"h2"}}),je=new V({props:{name:"class transformers.TFRagTokenForGeneration",anchor:"transformers.TFRagTokenForGeneration",parameters:[{name:"config",val:": Optional[PretrainedConfig] = None"},{name:"question_encoder",val:": Optional[TFPreTrainedModel] = None"},{name:"generator",val:": Optional[TFPreTrainedModel] = None"},{name:"retriever",val:": Optional[RagRetriever] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRagTokenForGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig">RagConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.TFRagTokenForGeneration.question_encoder",description:`<strong>question_encoder</strong> (<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>) &#x2014;
An encoder model compatible with the faiss index encapsulated by the <code>retriever</code>.`,name:"question_encoder"},{anchor:"transformers.TFRagTokenForGeneration.generator",description:`<strong>generator</strong> (<a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>) &#x2014;
A seq2seq model used as the generator in the RAG architecture.`,name:"generator"},{anchor:"transformers.TFRagTokenForGeneration.retriever",description:`<strong>retriever</strong> (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a>) &#x2014;
A retriever class encapsulating a faiss index queried to obtain context documents for current inputs.`,name:"retriever"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/rag/modeling_tf_rag.py#L734"}}),n=new vt({props:{$$slots:{default:[Jo]},$$scope:{ctx:x}}}),$e=new V({props:{name:"call",anchor:"transformers.TFRagTokenForGeneration.call",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_input_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"decoder_attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"encoder_outputs",val:": np.ndarray | tf.Tensor | None = None"},{name:"past_key_values",val:": Tuple[Tuple[Union[np.ndarray, tf.Tensor]]] | None = None"},{name:"doc_scores",val:": np.ndarray | tf.Tensor | None = None"},{name:"context_input_ids",val:": np.ndarray | tf.Tensor | None = None"},{name:"context_attention_mask",val:": np.ndarray | tf.Tensor | None = None"},{name:"use_cache",val:": bool | None = None"},{name:"output_attentions",val:": bool | None = None"},{name:"output_hidden_states",val:": bool | None = None"},{name:"output_retrieved",val:": bool | None = None"},{name:"n_docs",val:": int | None = None"},{name:"do_marginalize",val:": bool | None = None"},{name:"labels",val:": np.ndarray | tf.Tensor | None = None"},{name:"reduce_loss",val:": bool | None = None"},{name:"return_dict",val:": bool | None = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRagTokenForGeneration.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. <a href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig">RagConfig</a>, used to initialize the model, specifies
which generator to use, it also specifies a compatible generator tokenizer. Use that tokenizer class to
obtain the indices.`,name:"input_ids"},{anchor:"transformers.TFRagTokenForGeneration.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRagTokenForGeneration.call.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(tf.Tensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>generator_enc_last_hidden_state</code>, <em>optional</em>: <code>generator_enc_hidden_states</code>,
<em>optional</em>: <code>generator_enc_attentions</code>). <code>generator_enc_last_hidden_state</code> of shape <code>(batch_size, n_docs * sequence_length, hidden_size)</code> is a sequence of hidden-states at the output of the last layer of the
generator&#x2019;s encoder.</p>
<p>Used by the (<a href="/docs/transformers/main/en/model_doc/rag#transformers.TFRagModel">TFRagModel</a>) model during decoding.`,name:"encoder_outputs"},{anchor:"transformers.TFRagTokenForGeneration.call.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Provide for generation tasks. <code>None</code> by default, construct as per instructions for the generator model
you&#x2019;re using with your RAG instance.`,name:"decoder_input_ids"},{anchor:"transformers.TFRagTokenForGeneration.call.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.TFRagTokenForGeneration.call.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(tf.Tensor))</code>) &#x2014;
Tuple consists of two elements: <code>encoder_outputs</code> of the RAG model (see <code>encoder_outputs</code>) and
<code>past_key_values</code> of the underlying generator. Can be used to speed up decoding. <code>past_key_values</code> are used
in the (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagTokenForGeneration">RagTokenForGeneration</a>) model during decoding.`,name:"past_key_values"},{anchor:"transformers.TFRagTokenForGeneration.call.doc_scores",description:`<strong>doc_scores</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.n_docs)</code>) &#x2014;
Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>. If the model has is not initialized with a <code>retriever</code> <code>doc_scores</code>
has to be provided to the forward pass. <code>doc_scores</code> can be computed via
<code>question_encoder_last_hidden_state</code> and <code>retrieved_doc_embeds</code>, see examples for more information.`,name:"doc_scores"},{anchor:"transformers.TFRagTokenForGeneration.call.context_input_ids",description:`<strong>context_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Input IDs post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever.</p>
<p>If the model has is not initialized with a <code>retriever</code> \`<code>context_input_ids</code> has to be provided to the
forward pass. <code>context_input_ids</code> are returned by <code>__call__()</code>. context_attention_mask
(<code>tf.Tensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when
<em>output_retrieved=True</em>): Attention mask post-processed from the retrieved documents and the question
encoder <code>input_ids</code> by the retriever.</p>
<p>If the model has is not initialized with a <code>retriever</code> <code>context_attention_mask</code> has to be provided to the
forward pass. <code>context_attention_mask</code> are returned by <code>__call__()</code>.`,name:"context_input_ids"},{anchor:"transformers.TFRagTokenForGeneration.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.TFRagTokenForGeneration.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFRagTokenForGeneration.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFRagTokenForGeneration.call.output_retrieved(bool,",description:`<strong>output_retrieved(<code>bool</code>,</strong> <em>optional</em>) &#x2014;
Whether or not to return the <code>retrieved_doc_embeds</code>, <code>retrieved_doc_ids</code>, <code>context_input_ids</code> and
<code>context_attention_mask</code>. See returned tensors for more detail.`,name:"output_retrieved(bool,"},{anchor:"transformers.TFRagTokenForGeneration.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <code>TFRetrievAugLMOutput</code> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFRagTokenForGeneration.call.n_docs",description:"<strong>n_docs</strong> (<code>int</code>, <em>optional</em>, defaults to `config.n_docs&#x201C;) &#x2014;\nNumber of documents to retrieve and/or number of documents for which to generate an answer.",name:"n_docs"},{anchor:"transformers.TFRagTokenForGeneration.call.do_marginalize",description:`<strong>do_marginalize</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If <code>True</code>, the logits are marginalized over all documents by making use of
<code>torch.nn.functional.log_softmax</code>.`,name:"do_marginalize"},{anchor:"transformers.TFRagTokenForGeneration.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss according to Rag-Token model formulation See
<a href="https://arxiv.org/pdf/2005.11401.pdf" rel="nofollow">https://arxiv.org/pdf/2005.11401.pdf</a> Section 2.1 for details about Rag-Token formulation. Indices should be
in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"},{anchor:"transformers.TFRagTokenForGeneration.call.reduce_loss",description:`<strong>reduce_loss</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Only relevant if <code>labels</code> is passed. If <code>True</code>, the NLL loss is reduced using the <code>tf.Tensor.sum</code>
operation.`,name:"reduce_loss"},{anchor:"transformers.TFRagTokenForGeneration.call.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Legacy dictionary, which is required so that model can use <em>generate()</em> function.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/rag/modeling_tf_rag.py#L853",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.models.rag.modeling_tf_rag.TFRetrievAugLMMarginOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig"
>RagConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) — Prediction scores of the language modeling head. The score is possibly marginalized over all documents for
each vocabulary token.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains precomputed hidden-states (key and values in the attention blocks) of the decoder that can be used
(see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>doc_scores</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.n_docs)</code>) — Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>.</p>
</li>
<li>
<p><strong>retrieved_doc_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.n_docs, hidden_size)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) — Embedded documents retrieved by the retriever. Is used with <code>question_encoder_last_hidden_state</code> to compute
the <code>doc_scores</code>.</p>
</li>
<li>
<p><strong>retrieved_doc_ids</strong> (<code>tf.Tensor</code> (int32) of shape <code>(batch_size, config.n_docs)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) — The indexes of the embedded documents retrieved by the retriever.</p>
</li>
<li>
<p><strong>context_input_ids</strong> (<code>tf.Tensor</code>(int32) of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) — Input ids post-processed from the retrieved documents and the question encoder input_ids by the retriever.</p>
</li>
<li>
<p><strong>context_attention_mask</strong> (<code>tf.Tensor</code> (int32) of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) — Attention mask post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever.</p>
</li>
<li>
<p><strong>question_encoder_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) — Sequence of hidden states at the output of the last layer of the question encoder pooled output of the
model.</p>
</li>
<li>
<p><strong>question_enc_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings and one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the question encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>question_enc_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the question encoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
<li>
<p><strong>generator_enc_last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) — Sequence of hidden-states at the output of the last layer of the generator encoder of the model.</p>
</li>
<li>
<p><strong>generator_enc_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings and one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the generator encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>generator_enc_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the generator encoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
<li>
<p><strong>generator_dec_hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>tf.Tensor</code> (one for the output of the embeddings and one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the generator decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>generator_dec_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the generator decoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.models.rag.modeling_tf_rag.TFRetrievAugLMMarginOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),lt=new vt({props:{$$slots:{default:[$o]},$$scope:{ctx:x}}}),w=new Pt({props:{anchor:"transformers.TFRagTokenForGeneration.call.example",$$slots:{default:[Uo]},$$scope:{ctx:x}}}),ae=new V({props:{name:"generate",anchor:"transformers.TFRagTokenForGeneration.generate",parameters:[{name:"input_ids",val:": TFModelInputType | None = None"},{name:"attention_mask",val:": tf.Tensor | None = None"},{name:"context_input_ids",val:" = None"},{name:"context_attention_mask",val:" = None"},{name:"doc_scores",val:" = None"},{name:"n_docs",val:" = None"},{name:"generation_config",val:" = None"},{name:"logits_processor",val:" = []"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRagTokenForGeneration.generate.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
The sequence used as a prompt for the generation. If <code>input_ids</code> is not passed, then
<code>context_input_ids</code> has to be provided.`,name:"input_ids"},{anchor:"transformers.TFRagTokenForGeneration.generate.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRagTokenForGeneration.generate.context_input_ids",description:`<strong>context_input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Input IDs post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever.</p>
<p>If the model has is not initialized with a <code>retriever</code>, <code>context_input_ids</code> has to be provided to the
forward pass. <code>context_input_ids</code> are returned by <code>__call__()</code>.`,name:"context_input_ids"},{anchor:"transformers.TFRagTokenForGeneration.generate.context_attention_mask",description:`<strong>context_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Attention mask post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever.</p>
<p>If the model has is not initialized with a <code>retriever</code>, <code>context_input_ids</code> has to be provided to the
forward pass. <code>context_input_ids</code> are returned by <code>__call__()</code>.`,name:"context_attention_mask"},{anchor:"transformers.TFRagTokenForGeneration.generate.doc_scores",description:`<strong>doc_scores</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.n_docs)</code>) &#x2014;
Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>.</p>
<p>If the model has is not initialized with a <code>retriever</code>, <code>context_input_ids</code> has to be provided to the
forward pass. <code>context_input_ids</code> are returned by <code>__call__()</code>.`,name:"doc_scores"},{anchor:"transformers.TFRagTokenForGeneration.generate.n_docs",description:`<strong>n_docs</strong> (<code>int</code>, <em>optional</em>, defaults to <code>config.n_docs</code>) &#x2014;
Number of documents to retrieve and/or number of documents for which to generate an answer.`,name:"n_docs"},{anchor:"transformers.TFRagTokenForGeneration.generate.generation_config",description:`<strong>generation_config</strong> (<code>~generation.GenerationConfig</code>, <em>optional</em>) &#x2014;
The generation configuration to be used as base parametrization for the generation call. <code>**kwargs</code>
passed to generate matching the attributes of <code>generation_config</code> will override them. If
<code>generation_config</code> is not provided, the default will be used, which had the following loading
priority: 1) from the <code>generation_config.json</code> model file, if it exists; 2) from the model
configuration. Please note that unspecified parameters will inherit <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationConfig">GenerationConfig</a>&#x2019;s
default values, whose documentation should be checked to parameterize generation.`,name:"generation_config"},{anchor:"transformers.TFRagTokenForGeneration.generate.logits_processor",description:`<strong>logits_processor</strong> (<code>TFLogitsProcessorList</code>, <em>optional</em>) &#x2014;
Custom logits processors that complement the default logits processors built from arguments and a
model&#x2019;s config. If a logit processor is passed that is already created with the arguments or a model&#x2019;s
config an error is thrown.`,name:"logits_processor"},{anchor:"transformers.TFRagTokenForGeneration.generate.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, Any]</code>, <em>optional</em>) &#x2014;
Ad hoc parametrization of <code>generate_config</code> and/or additional model-specific kwargs that will be
forwarded to the <code>forward</code> function of the model.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/rag/modeling_tf_rag.py#L1008",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The generated sequences. The
second dimension (sequence_length) is either equal to <code>max_length</code> or shorter if all batches finished early
due to the <code>eos_token_id</code>.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>tf.Tensor</code> of shape <code>(batch_size * num_return_sequences, sequence_length)</code></p>
`}}),{c(){_(e.$$.fragment),h=s(),t=d("div"),_(c.$$.fragment),R=s(),a=d("p"),a.innerHTML=F,Jt=s(),_(A.$$.fragment),Ue=s(),ie=d("p"),ie.textContent=Ke,$t=s(),ce=d("p"),ce.innerHTML=et,Ut=s(),le=d("p"),le.innerHTML=tt,zt=s(),pe=d("p"),pe.innerHTML=ot,Gt=s(),me=d("p"),me.innerHTML=nt,Zt=s(),B=d("p"),B.textContent=ue,mt=s(),I=d("div"),_(st.$$.fragment),ut=s(),S=d("p"),S.innerHTML=yt,H=s(),_(E.$$.fragment),ze=s(),_(P.$$.fragment),$=s(),_(te.$$.fragment),ke=s(),q=d("div"),_(Ee.$$.fragment),Qe=s(),he=d("p"),he.innerHTML=Mt,ge=s(),_(qe.$$.fragment),Ge=s(),Q=d("p"),Q.textContent=Ct,Ze=s(),_e=d("p"),_e.textContent=Ce,Ie=s(),xe=d("p"),xe.innerHTML=ht,It=s(),fe=d("p"),fe.innerHTML=rt,Ne=s(),Te=d("p"),Te.innerHTML=at,gt=s(),J=d("p"),J.innerHTML=be,wt=s(),O=d("p"),O.textContent=Ht,Rt=s(),Z=d("div"),_(We.$$.fragment),Y=s(),ve=d("p"),ve.innerHTML=Xe,ye=s(),_(Ve.$$.fragment),Ye=s(),_(D.$$.fragment),Fe=s(),K=d("div"),_(oe.$$.fragment),U=s(),Me=d("p"),Me.innerHTML=Be,ne=s(),_(Pe.$$.fragment),He=s(),j=d("div"),_(je.$$.fragment),se=s(),Oe=d("p"),Oe.innerHTML=_t,Se=s(),_(n.$$.fragment),M=s(),L=d("p"),L.textContent=dt,Nt=s(),we=d("p"),we.textContent=St,ee=s(),Re=d("p"),Re.innerHTML=Wt,ft=s(),it=d("p"),it.innerHTML=eo,Lt=s(),re=d("p"),re.innerHTML=Xt,At=s(),ct=d("p"),ct.innerHTML=to,Et=s(),Le=d("p"),Le.textContent=Dt,Tt=s(),Je=d("div"),_($e.$$.fragment),kt=s(),Vt=d("p"),Vt.innerHTML=Bt,Kt=s(),_(lt.$$.fragment),m=s(),_(w.$$.fragment),Ae=s(),z=d("div"),_(ae.$$.fragment),xt=s(),G=d("p"),G.textContent=De,this.h()},l(u){f(e.$$.fragment,u),h=r(u),t=i(u,"DIV",{class:!0});var k=X(t);f(c.$$.fragment,k),R=r(k),a=i(k,"P",{"data-svelte-h":!0}),p(a)!=="svelte-122tp4b"&&(a.innerHTML=F),Jt=r(k),f(A.$$.fragment,k),Ue=r(k),ie=i(k,"P",{"data-svelte-h":!0}),p(ie)!=="svelte-grsjxn"&&(ie.textContent=Ke),$t=r(k),ce=i(k,"P",{"data-svelte-h":!0}),p(ce)!=="svelte-1koi14v"&&(ce.innerHTML=et),Ut=r(k),le=i(k,"P",{"data-svelte-h":!0}),p(le)!=="svelte-rkegw1"&&(le.innerHTML=tt),zt=r(k),pe=i(k,"P",{"data-svelte-h":!0}),p(pe)!=="svelte-1qaxm70"&&(pe.innerHTML=ot),Gt=r(k),me=i(k,"P",{"data-svelte-h":!0}),p(me)!=="svelte-12eggov"&&(me.innerHTML=nt),Zt=r(k),B=i(k,"P",{"data-svelte-h":!0}),p(B)!=="svelte-c4cntl"&&(B.textContent=ue),mt=r(k),I=i(k,"DIV",{class:!0});var qt=X(I);f(st.$$.fragment,qt),ut=r(qt),S=i(qt,"P",{"data-svelte-h":!0}),p(S)!=="svelte-122tp4b"&&(S.innerHTML=yt),H=r(qt),f(E.$$.fragment,qt),ze=r(qt),f(P.$$.fragment,qt),qt.forEach(l),k.forEach(l),$=r(u),f(te.$$.fragment,u),ke=r(u),q=i(u,"DIV",{class:!0});var N=X(q);f(Ee.$$.fragment,N),Qe=r(N),he=i(N,"P",{"data-svelte-h":!0}),p(he)!=="svelte-1829w61"&&(he.innerHTML=Mt),ge=r(N),f(qe.$$.fragment,N),Ge=r(N),Q=i(N,"P",{"data-svelte-h":!0}),p(Q)!=="svelte-1r0z70g"&&(Q.textContent=Ct),Ze=r(N),_e=i(N,"P",{"data-svelte-h":!0}),p(_e)!=="svelte-grsjxn"&&(_e.textContent=Ce),Ie=r(N),xe=i(N,"P",{"data-svelte-h":!0}),p(xe)!=="svelte-1koi14v"&&(xe.innerHTML=ht),It=r(N),fe=i(N,"P",{"data-svelte-h":!0}),p(fe)!=="svelte-rkegw1"&&(fe.innerHTML=rt),Ne=r(N),Te=i(N,"P",{"data-svelte-h":!0}),p(Te)!=="svelte-1qaxm70"&&(Te.innerHTML=at),gt=r(N),J=i(N,"P",{"data-svelte-h":!0}),p(J)!=="svelte-12eggov"&&(J.innerHTML=be),wt=r(N),O=i(N,"P",{"data-svelte-h":!0}),p(O)!=="svelte-c4cntl"&&(O.textContent=Ht),Rt=r(N),Z=i(N,"DIV",{class:!0});var Ft=X(Z);f(We.$$.fragment,Ft),Y=r(Ft),ve=i(Ft,"P",{"data-svelte-h":!0}),p(ve)!=="svelte-1829w61"&&(ve.innerHTML=Xe),ye=r(Ft),f(Ve.$$.fragment,Ft),Ye=r(Ft),f(D.$$.fragment,Ft),Ft.forEach(l),Fe=r(N),K=i(N,"DIV",{class:!0});var Qt=X(K);f(oe.$$.fragment,Qt),U=r(Qt),Me=i(Qt,"P",{"data-svelte-h":!0}),p(Me)!=="svelte-wq8v96"&&(Me.innerHTML=Be),Qt.forEach(l),N.forEach(l),ne=r(u),f(Pe.$$.fragment,u),He=r(u),j=i(u,"DIV",{class:!0});var W=X(j);f(je.$$.fragment,W),se=r(W),Oe=i(W,"P",{"data-svelte-h":!0}),p(Oe)!=="svelte-1677zrx"&&(Oe.innerHTML=_t),Se=r(W),f(n.$$.fragment,W),M=r(W),L=i(W,"P",{"data-svelte-h":!0}),p(L)!=="svelte-1h8epuk"&&(L.textContent=dt),Nt=r(W),we=i(W,"P",{"data-svelte-h":!0}),p(we)!=="svelte-grsjxn"&&(we.textContent=St),ee=r(W),Re=i(W,"P",{"data-svelte-h":!0}),p(Re)!=="svelte-1koi14v"&&(Re.innerHTML=Wt),ft=r(W),it=i(W,"P",{"data-svelte-h":!0}),p(it)!=="svelte-rkegw1"&&(it.innerHTML=eo),Lt=r(W),re=i(W,"P",{"data-svelte-h":!0}),p(re)!=="svelte-1qaxm70"&&(re.innerHTML=Xt),At=r(W),ct=i(W,"P",{"data-svelte-h":!0}),p(ct)!=="svelte-12eggov"&&(ct.innerHTML=to),Et=r(W),Le=i(W,"P",{"data-svelte-h":!0}),p(Le)!=="svelte-c4cntl"&&(Le.textContent=Dt),Tt=r(W),Je=i(W,"DIV",{class:!0});var jt=X(Je);f($e.$$.fragment,jt),kt=r(jt),Vt=i(jt,"P",{"data-svelte-h":!0}),p(Vt)!=="svelte-1677zrx"&&(Vt.innerHTML=Bt),Kt=r(jt),f(lt.$$.fragment,jt),m=r(jt),f(w.$$.fragment,jt),jt.forEach(l),Ae=r(W),z=i(W,"DIV",{class:!0});var Yt=X(z);f(ae.$$.fragment,Yt),xt=r(Yt),G=i(Yt,"P",{"data-svelte-h":!0}),p(G)!=="svelte-amuqba"&&(G.textContent=De),Yt.forEach(l),W.forEach(l),this.h()},h(){C(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),C(t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),C(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),C(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),C(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),C(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),C(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),C(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(u,k){T(e,u,k),g(u,h,k),g(u,t,k),T(c,t,null),o(t,R),o(t,a),o(t,Jt),T(A,t,null),o(t,Ue),o(t,ie),o(t,$t),o(t,ce),o(t,Ut),o(t,le),o(t,zt),o(t,pe),o(t,Gt),o(t,me),o(t,Zt),o(t,B),o(t,mt),o(t,I),T(st,I,null),o(I,ut),o(I,S),o(I,H),T(E,I,null),o(I,ze),T(P,I,null),g(u,$,k),T(te,u,k),g(u,ke,k),g(u,q,k),T(Ee,q,null),o(q,Qe),o(q,he),o(q,ge),T(qe,q,null),o(q,Ge),o(q,Q),o(q,Ze),o(q,_e),o(q,Ie),o(q,xe),o(q,It),o(q,fe),o(q,Ne),o(q,Te),o(q,gt),o(q,J),o(q,wt),o(q,O),o(q,Rt),o(q,Z),T(We,Z,null),o(Z,Y),o(Z,ve),o(Z,ye),T(Ve,Z,null),o(Z,Ye),T(D,Z,null),o(q,Fe),o(q,K),T(oe,K,null),o(K,U),o(K,Me),g(u,ne,k),T(Pe,u,k),g(u,He,k),g(u,j,k),T(je,j,null),o(j,se),o(j,Oe),o(j,Se),T(n,j,null),o(j,M),o(j,L),o(j,Nt),o(j,we),o(j,ee),o(j,Re),o(j,ft),o(j,it),o(j,Lt),o(j,re),o(j,At),o(j,ct),o(j,Et),o(j,Le),o(j,Tt),o(j,Je),T($e,Je,null),o(Je,kt),o(Je,Vt),o(Je,Kt),T(lt,Je,null),o(Je,m),T(w,Je,null),o(j,Ae),o(j,z),T(ae,z,null),o(z,xt),o(z,G),bt=!0},p(u,k){const qt={};k&2&&(qt.$$scope={dirty:k,ctx:u}),A.$set(qt);const N={};k&2&&(N.$$scope={dirty:k,ctx:u}),E.$set(N);const Ft={};k&2&&(Ft.$$scope={dirty:k,ctx:u}),P.$set(Ft);const Qt={};k&2&&(Qt.$$scope={dirty:k,ctx:u}),qe.$set(Qt);const W={};k&2&&(W.$$scope={dirty:k,ctx:u}),Ve.$set(W);const jt={};k&2&&(jt.$$scope={dirty:k,ctx:u}),D.$set(jt);const Yt={};k&2&&(Yt.$$scope={dirty:k,ctx:u}),n.$set(Yt);const oo={};k&2&&(oo.$$scope={dirty:k,ctx:u}),lt.$set(oo);const no={};k&2&&(no.$$scope={dirty:k,ctx:u}),w.$set(no)},i(u){bt||(b(e.$$.fragment,u),b(c.$$.fragment,u),b(A.$$.fragment,u),b(st.$$.fragment,u),b(E.$$.fragment,u),b(P.$$.fragment,u),b(te.$$.fragment,u),b(Ee.$$.fragment,u),b(qe.$$.fragment,u),b(We.$$.fragment,u),b(Ve.$$.fragment,u),b(D.$$.fragment,u),b(oe.$$.fragment,u),b(Pe.$$.fragment,u),b(je.$$.fragment,u),b(n.$$.fragment,u),b($e.$$.fragment,u),b(lt.$$.fragment,u),b(w.$$.fragment,u),b(ae.$$.fragment,u),bt=!0)},o(u){v(e.$$.fragment,u),v(c.$$.fragment,u),v(A.$$.fragment,u),v(st.$$.fragment,u),v(E.$$.fragment,u),v(P.$$.fragment,u),v(te.$$.fragment,u),v(Ee.$$.fragment,u),v(qe.$$.fragment,u),v(We.$$.fragment,u),v(Ve.$$.fragment,u),v(D.$$.fragment,u),v(oe.$$.fragment,u),v(Pe.$$.fragment,u),v(je.$$.fragment,u),v(n.$$.fragment,u),v($e.$$.fragment,u),v(lt.$$.fragment,u),v(w.$$.fragment,u),v(ae.$$.fragment,u),bt=!1},d(u){u&&(l(h),l(t),l($),l(ke),l(q),l(ne),l(He),l(j)),y(e,u),y(c),y(A),y(st),y(E),y(P),y(te,u),y(Ee),y(qe),y(We),y(Ve),y(D),y(oe),y(Pe,u),y(je),y(n),y($e),y(lt),y(w),y(ae)}}}function Go(x){let e,h;return e=new so({props:{$$slots:{default:[zo]},$$scope:{ctx:x}}}),{c(){_(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,c){T(e,t,c),h=!0},p(t,c){const R={};c&2&&(R.$$scope={dirty:c,ctx:t}),e.$set(R)},i(t){h||(b(e.$$.fragment,t),h=!0)},o(t){v(e.$$.fragment,t),h=!1},d(t){y(e,t)}}}function Zo(x){let e,h,t,c,R,a,F,Jt='<a href="https://huggingface.co/models?filter=rag"><img alt="Models" src="https://img.shields.io/badge/All_model_pages-rag-blueviolet"/></a>',A,Ue,ie,Ke,$t=`Retrieval-augmented generation (“RAG”) models combine the powers of pretrained dense retrieval (DPR) and
sequence-to-sequence models. RAG models retrieve documents, pass them to a seq2seq model, then marginalize to generate
outputs. The retriever and seq2seq modules are initialized from pretrained models, and fine-tuned jointly, allowing
both retrieval and generation to adapt to downstream tasks.`,ce,et,Ut=`It is based on the paper <a href="https://arxiv.org/abs/2005.11401" rel="nofollow">Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks</a> by Patrick Lewis, Ethan Perez, Aleksandara Piktus, Fabio Petroni, Vladimir
Karpukhin, Naman Goyal, Heinrich Küttler, Mike Lewis, Wen-tau Yih, Tim Rocktäschel, Sebastian Riedel, Douwe Kiela.`,le,tt,zt="The abstract from the paper is the following:",pe,ot,Gt=`<em>Large pre-trained language models have been shown to store factual knowledge in their parameters, and achieve
state-of-the-art results when fine-tuned on downstream NLP tasks. However, their ability to access and precisely
manipulate knowledge is still limited, and hence on knowledge-intensive tasks, their performance lags behind
task-specific architectures. Additionally, providing provenance for their decisions and updating their world knowledge
remain open research problems. Pre-trained models with a differentiable access mechanism to explicit nonparametric
memory can overcome this issue, but have so far been only investigated for extractive downstream tasks. We explore a
general-purpose fine-tuning recipe for retrieval-augmented generation (RAG) — models which combine pre-trained
parametric and non-parametric memory for language generation. We introduce RAG models where the parametric memory is a
pre-trained seq2seq model and the non-parametric memory is a dense vector index of Wikipedia, accessed with a
pre-trained neural retriever. We compare two RAG formulations, one which conditions on the same retrieved passages
across the whole generated sequence, the other can use different passages per token. We fine-tune and evaluate our
models on a wide range of knowledge-intensive NLP tasks and set the state-of-the-art on three open domain QA tasks,
outperforming parametric seq2seq models and task-specific retrieve-and-extract architectures. For language generation
tasks, we find that RAG models generate more specific, diverse and factual language than a state-of-the-art
parametric-only seq2seq baseline.</em>`,me,nt,Zt='This model was contributed by <a href="https://huggingface.co/ola13" rel="nofollow">ola13</a>.',B,ue,mt,I,st=`Retrieval-augmented generation (“RAG”) models combine the powers of pretrained dense retrieval (DPR) and Seq2Seq models.
RAG models retrieve docs, pass them to a seq2seq model, then marginalize to generate outputs. The retriever and seq2seq
modules are initialized from pretrained models, and fine-tuned jointly, allowing both retrieval and generation to adapt
to downstream tasks.`,ut,S,yt,H,E,ze,P,$=`<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig">RagConfig</a> stores the configuration of a <em>RagModel</em>. Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and
can be used to control the model outputs. Read the documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,te,ke,q,Ee,Qe,he=`Instantiate a <a href="/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig">EncoderDecoderConfig</a> (or a derived class) from a pre-trained encoder model configuration and
decoder model configuration.`,Mt,ge,qe,Ge,Q,Ct,Ze,_e,Ce,Ie,xe,ht,It="Base class for retriever augmented marginalized models outputs.",fe,rt,Ne,Te,at,gt,J,be,wt,O,Ht=`Retriever used to get documents from vector queries. It retrieves the documents embeddings as well as the documents
contents, and it formats them to be used with a RagModel.`,Rt,Z,We,Y,ve,Xe,ye,Ve="Retriever initialization function. It loads the index into memory.",Ye,D,Fe,K,oe,U="Postprocessing retrieved <code>docs</code> and combining them with <code>input_strings</code>.",Me,Be,ne,Pe,He,j="Retrieves documents for specified <code>question_hidden_states</code>.",je,se,Oe,_t,Se;return R=new pt({props:{title:"RAG",local:"rag",headingTag:"h1"}}),Ue=new pt({props:{title:"Overview",local:"overview",headingTag:"h2"}}),ue=new pt({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),S=new pt({props:{title:"RagConfig",local:"transformers.RagConfig",headingTag:"h2"}}),E=new V({props:{name:"class transformers.RagConfig",anchor:"transformers.RagConfig",parameters:[{name:"vocab_size",val:" = None"},{name:"is_encoder_decoder",val:" = True"},{name:"prefix",val:" = None"},{name:"bos_token_id",val:" = None"},{name:"pad_token_id",val:" = None"},{name:"eos_token_id",val:" = None"},{name:"decoder_start_token_id",val:" = None"},{name:"title_sep",val:" = ' / '"},{name:"doc_sep",val:" = ' // '"},{name:"n_docs",val:" = 5"},{name:"max_combined_length",val:" = 300"},{name:"retrieval_vector_size",val:" = 768"},{name:"retrieval_batch_size",val:" = 8"},{name:"dataset",val:" = 'wiki_dpr'"},{name:"dataset_split",val:" = 'train'"},{name:"index_name",val:" = 'compressed'"},{name:"index_path",val:" = None"},{name:"passages_path",val:" = None"},{name:"use_dummy_dataset",val:" = False"},{name:"reduce_loss",val:" = False"},{name:"label_smoothing",val:" = 0.0"},{name:"do_deduplication",val:" = True"},{name:"exclude_bos_score",val:" = False"},{name:"do_marginalize",val:" = False"},{name:"output_retrieved",val:" = False"},{name:"use_cache",val:" = True"},{name:"forced_eos_token_id",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RagConfig.title_sep",description:`<strong>title_sep</strong> (<code>str</code>, <em>optional</em>, defaults to  <code>&quot; / &quot;</code>) &#x2014;
Separator inserted between the title and the text of the retrieved document when calling <a href="/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a>.`,name:"title_sep"},{anchor:"transformers.RagConfig.doc_sep",description:`<strong>doc_sep</strong> (<code>str</code>, <em>optional</em>, defaults to  <code>&quot; // &quot;</code>) &#x2014;
Separator inserted between the text of the retrieved document and the original input when calling
<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a>.`,name:"doc_sep"},{anchor:"transformers.RagConfig.n_docs",description:`<strong>n_docs</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
Number of documents to retrieve.`,name:"n_docs"},{anchor:"transformers.RagConfig.max_combined_length",description:`<strong>max_combined_length</strong> (<code>int</code>, <em>optional</em>, defaults to 300) &#x2014;
Max length of contextualized input returned by <code>__call__()</code>.`,name:"max_combined_length"},{anchor:"transformers.RagConfig.retrieval_vector_size",description:`<strong>retrieval_vector_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the document embeddings indexed by <a href="/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a>.`,name:"retrieval_vector_size"},{anchor:"transformers.RagConfig.retrieval_batch_size",description:`<strong>retrieval_batch_size</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Retrieval batch size, defined as the number of queries issues concurrently to the faiss index encapsulated
<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagRetriever">RagRetriever</a>.`,name:"retrieval_batch_size"},{anchor:"transformers.RagConfig.dataset",description:`<strong>dataset</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;wiki_dpr&quot;</code>) &#x2014;
A dataset identifier of the indexed dataset in HuggingFace Datasets (list all available datasets and ids
using <code>datasets.list_datasets()</code>).`,name:"dataset"},{anchor:"transformers.RagConfig.dataset_split",description:`<strong>dataset_split</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;train&quot;</code>) &#x2014;
Which split of the <code>dataset</code> to load.`,name:"dataset_split"},{anchor:"transformers.RagConfig.index_name",description:`<strong>index_name</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;compressed&quot;</code>) &#x2014;
The index name of the index associated with the <code>dataset</code>. One can choose between <code>&quot;legacy&quot;</code>, <code>&quot;exact&quot;</code> and
<code>&quot;compressed&quot;</code>.`,name:"index_name"},{anchor:"transformers.RagConfig.index_path",description:`<strong>index_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
The path to the serialized faiss index on disk.`,name:"index_path"},{anchor:"transformers.RagConfig.passages_path",description:`<strong>passages_path</strong> (<code>str</code>, <em>optional</em>) &#x2014;
A path to text passages compatible with the faiss index. Required if using
<code>LegacyIndex</code>`,name:"passages_path"},{anchor:"transformers.RagConfig.use_dummy_dataset",description:`<strong>use_dummy_dataset</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to load a &#x201C;dummy&#x201D; variant of the dataset specified by <code>dataset</code>.`,name:"use_dummy_dataset"},{anchor:"transformers.RagConfig.label_smoothing",description:`<strong>label_smoothing</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Only relevant if <code>return_loss</code> is set to <code>True</code>. Controls the <code>epsilon</code> parameter value for label smoothing
in the loss calculation. If set to 0, no label smoothing is performed.`,name:"label_smoothing"},{anchor:"transformers.RagConfig.do_marginalize",description:`<strong>do_marginalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If <code>True</code>, the logits are marginalized over all documents by making use of
<code>torch.nn.functional.log_softmax</code>.`,name:"do_marginalize"},{anchor:"transformers.RagConfig.reduce_loss",description:`<strong>reduce_loss</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to reduce the NLL loss using the <code>torch.Tensor.sum</code> operation.`,name:"reduce_loss"},{anchor:"transformers.RagConfig.do_deduplication",description:`<strong>do_deduplication</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to deduplicate the generations from different context documents for a given input. Has to be
set to <code>False</code> if used while training with distributed backend.`,name:"do_deduplication"},{anchor:"transformers.RagConfig.exclude_bos_score",description:`<strong>exclude_bos_score</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to disregard the BOS token when computing the loss.`,name:"exclude_bos_score"},{anchor:"transformers.RagConfig.output_retrieved(bool,",description:`<strong>output_retrieved(<code>bool</code>,</strong> <em>optional</em>, defaults to <code>False</code>) &#x2014;
If set to <code>True</code>, <code>retrieved_doc_embeds</code>, <code>retrieved_doc_ids</code>, <code>context_input_ids</code> and
<code>context_attention_mask</code> are returned. See returned tensors for more detail.`,name:"output_retrieved(bool,"},{anchor:"transformers.RagConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.RagConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Usually set to
<code>eos_token_id</code>.`,name:"forced_eos_token_id"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/rag/configuration_rag.py#L80"}}),q=new V({props:{name:"from_question_encoder_generator_configs",anchor:"transformers.RagConfig.from_question_encoder_generator_configs",parameters:[{name:"question_encoder_config",val:": PretrainedConfig"},{name:"generator_config",val:": PretrainedConfig"},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/rag/configuration_rag.py#L169",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>An instance of a configuration object</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/model_doc/encoder-decoder#transformers.EncoderDecoderConfig"
>EncoderDecoderConfig</a></p>
`}}),ge=new pt({props:{title:"RagTokenizer",local:"transformers.RagTokenizer",headingTag:"h2"}}),Q=new V({props:{name:"class transformers.RagTokenizer",anchor:"transformers.RagTokenizer",parameters:[{name:"question_encoder",val:""},{name:"generator",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/rag/tokenization_rag.py#L28"}}),Ze=new pt({props:{title:"Rag specific outputs",local:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput",headingTag:"h2"}}),Ie=new V({props:{name:"class transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput",anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput",parameters:[{name:"loss",val:": Optional = None"},{name:"logits",val:": FloatTensor = None"},{name:"doc_scores",val:": FloatTensor = None"},{name:"past_key_values",val:": Optional = None"},{name:"retrieved_doc_embeds",val:": Optional = None"},{name:"retrieved_doc_ids",val:": Optional = None"},{name:"context_input_ids",val:": Optional = None"},{name:"context_attention_mask",val:": Optional = None"},{name:"question_encoder_last_hidden_state",val:": Optional = None"},{name:"question_enc_hidden_states",val:": Optional = None"},{name:"question_enc_attentions",val:": Optional = None"},{name:"generator_enc_last_hidden_state",val:": Optional = None"},{name:"generator_enc_hidden_states",val:": Optional = None"},{name:"generator_enc_attentions",val:": Optional = None"},{name:"generator_dec_hidden_states",val:": Optional = None"},{name:"generator_dec_attentions",val:": Optional = None"},{name:"generator_cross_attentions",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss.`,name:"loss"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head. The score is possibly marginalized over all documents for
each vocabulary token.`,name:"logits"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput.doc_scores",description:`<strong>doc_scores</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.n_docs)</code>) &#x2014;
Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>.`,name:"doc_scores"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains precomputed hidden-states (key and values in the attention blocks) of the decoder that can be used
(see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput.retrieved_doc_embeds",description:`<strong>retrieved_doc_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.n_docs, hidden_size)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Embedded documents retrieved by the retriever. Is used with <code>question_encoder_last_hidden_state</code> to compute
the <code>doc_scores</code>.`,name:"retrieved_doc_embeds"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput.retrieved_doc_ids",description:`<strong>retrieved_doc_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, config.n_docs)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
The indexes of the embedded documents retrieved by the retriever.`,name:"retrieved_doc_ids"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput.context_input_ids",description:`<strong>context_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Input ids post-processed from the retrieved documents and the question encoder input_ids by the retriever.`,name:"context_input_ids"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput.context_attention_mask",description:`<strong>context_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Attention mask post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever.`,name:"context_attention_mask"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput.question_encoder_last_hidden_state",description:`<strong>question_encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden states at the output of the last layer of the question encoder pooled output of the
model.`,name:"question_encoder_last_hidden_state"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput.question_enc_hidden_states",description:`<strong>question_enc_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings and one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the question encoder at the output of each layer plus the initial embedding outputs.`,name:"question_enc_hidden_states"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput.question_enc_attentions",description:`<strong>question_enc_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the question encoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.`,name:"question_enc_attentions"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput.generator_enc_last_hidden_state",description:`<strong>generator_enc_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the generator encoder of the model.`,name:"generator_enc_last_hidden_state"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput.generator_enc_hidden_states",description:`<strong>generator_enc_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings and one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the generator encoder at the output of each layer plus the initial embedding outputs.`,name:"generator_enc_hidden_states"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput.generator_enc_attentions",description:`<strong>generator_enc_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the generator encoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.`,name:"generator_enc_attentions"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput.generator_dec_hidden_states",description:`<strong>generator_dec_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings and one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the generator decoder at the output of each layer plus the initial embedding outputs.`,name:"generator_dec_hidden_states"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput.generator_dec_attentions",description:`<strong>generator_dec_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the generator decoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.`,name:"generator_dec_attentions"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput.generator_cross_attentions",description:`<strong>generator_cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross-attentions weights of the generator decoder, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"generator_cross_attentions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/rag/modeling_rag.py#L38"}}),Ne=new V({props:{name:"class transformers.models.rag.modeling_rag.RetrievAugLMOutput",anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput",parameters:[{name:"logits",val:": FloatTensor = None"},{name:"doc_scores",val:": FloatTensor = None"},{name:"past_key_values",val:": Optional = None"},{name:"retrieved_doc_embeds",val:": Optional = None"},{name:"retrieved_doc_ids",val:": Optional = None"},{name:"context_input_ids",val:": Optional = None"},{name:"context_attention_mask",val:": Optional = None"},{name:"question_encoder_last_hidden_state",val:": Optional = None"},{name:"question_enc_hidden_states",val:": Optional = None"},{name:"question_enc_attentions",val:": Optional = None"},{name:"generator_enc_last_hidden_state",val:": Optional = None"},{name:"generator_enc_hidden_states",val:": Optional = None"},{name:"generator_enc_attentions",val:": Optional = None"},{name:"generator_dec_hidden_states",val:": Optional = None"},{name:"generator_dec_attentions",val:": Optional = None"},{name:"generator_cross_attentions",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head. The score is possibly marginalized over all documents for
each vocabulary token.`,name:"logits"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput.doc_scores",description:`<strong>doc_scores</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.n_docs)</code>) &#x2014;
Score between each retrieved document embeddings (see <code>retrieved_doc_embeds</code>) and
<code>question_encoder_last_hidden_state</code>.`,name:"doc_scores"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput.past_key_values",description:`<strong>past_key_values</strong> (<code>List[torch.FloatTensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) &#x2014;
List of <code>torch.FloatTensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains precomputed hidden-states (key and values in the attention blocks) of the decoder that can be used
(see <code>past_key_values</code> input) to speed up sequential decoding.`,name:"past_key_values"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput.retrieved_doc_embeds",description:`<strong>retrieved_doc_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.n_docs, hidden_size)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Embedded documents retrieved by the retriever. Is used with <code>question_encoder_last_hidden_state</code> to compute
the <code>doc_scores</code>.`,name:"retrieved_doc_embeds"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput.retrieved_doc_ids",description:`<strong>retrieved_doc_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, config.n_docs)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
The indexes of the embedded documents retrieved by the retriever.`,name:"retrieved_doc_ids"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput.context_input_ids",description:`<strong>context_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Input ids post-processed from the retrieved documents and the question encoder input_ids by the retriever.`,name:"context_input_ids"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput.context_attention_mask",description:`<strong>context_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size * config.n_docs, config.max_combined_length)</code>, <em>optional</em>, returned when <em>output_retrieved=True</em>) &#x2014;
Attention mask post-processed from the retrieved documents and the question encoder <code>input_ids</code> by the
retriever.`,name:"context_attention_mask"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput.question_encoder_last_hidden_state",description:`<strong>question_encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden states at the output of the last layer of the question encoder pooled output of the
model.`,name:"question_encoder_last_hidden_state"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput.question_enc_hidden_states",description:`<strong>question_enc_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings and one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the question encoder at the output of each layer plus the initial embedding outputs.`,name:"question_enc_hidden_states"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput.question_enc_attentions",description:`<strong>question_enc_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the question encoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.`,name:"question_enc_attentions"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput.generator_enc_last_hidden_state",description:`<strong>generator_enc_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the generator encoder of the model.`,name:"generator_enc_last_hidden_state"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput.generator_enc_hidden_states",description:`<strong>generator_enc_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings and one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the generator encoder at the output of each layer plus the initial embedding outputs.`,name:"generator_enc_hidden_states"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput.generator_enc_attentions",description:`<strong>generator_enc_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the generator encoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.`,name:"generator_enc_attentions"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput.generator_dec_hidden_states",description:`<strong>generator_dec_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings and one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden states of the generator decoder at the output of each layer plus the initial embedding outputs.`,name:"generator_dec_hidden_states"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput.generator_dec_attentions",description:`<strong>generator_dec_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the generator decoder, after the attention softmax, used to compute the weighted
average in the self-attention heads.`,name:"generator_dec_attentions"},{anchor:"transformers.models.rag.modeling_rag.RetrievAugLMOutput.generator_cross_attentions",description:`<strong>generator_cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross-attentions weights of the generator decoder, after the attention softmax, used to compute the
weighted average in the cross-attention heads.`,name:"generator_cross_attentions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/rag/modeling_rag.py#L133"}}),at=new pt({props:{title:"RagRetriever",local:"transformers.RagRetriever",headingTag:"h2"}}),be=new V({props:{name:"class transformers.RagRetriever",anchor:"transformers.RagRetriever",parameters:[{name:"config",val:""},{name:"question_encoder_tokenizer",val:""},{name:"generator_tokenizer",val:""},{name:"index",val:" = None"},{name:"init_retrieval",val:" = True"}],parametersDescription:[{anchor:"transformers.RagRetriever.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/rag#transformers.RagConfig">RagConfig</a>) &#x2014;
The configuration of the RAG model this Retriever is used with. Contains parameters indicating which
<code>Index</code> to build. You can load your own custom dataset with <code>config.index_name=&quot;custom&quot;</code> or use a canonical
one (default) from the datasets library with <code>config.index_name=&quot;wiki_dpr&quot;</code> for example.`,name:"config"},{anchor:"transformers.RagRetriever.question_encoder_tokenizer",description:`<strong>question_encoder_tokenizer</strong> (<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>) &#x2014;
The tokenizer that was used to tokenize the question. It is used to decode the question and then use the
generator_tokenizer.`,name:"question_encoder_tokenizer"},{anchor:"transformers.RagRetriever.generator_tokenizer",description:`<strong>generator_tokenizer</strong> (<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a>) &#x2014;
The tokenizer used for the generator part of the RagModel.`,name:"generator_tokenizer"},{anchor:"transformers.RagRetriever.index",description:`<strong>index</strong> (<code>Index</code>, optional, defaults to the one defined by the configuration) &#x2014;
If specified, use this index instead of the one built using the configuration`,name:"index"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/rag/retrieval_rag.py#L337"}}),Z=new Pt({props:{anchor:"transformers.RagRetriever.example",$$slots:{default:[mo]},$$scope:{ctx:x}}}),ve=new V({props:{name:"init_retrieval",anchor:"transformers.RagRetriever.init_retrieval",parameters:[],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/rag/retrieval_rag.py#L471"}}),Fe=new V({props:{name:"postprocess_docs",anchor:"transformers.RagRetriever.postprocess_docs",parameters:[{name:"docs",val:""},{name:"input_strings",val:""},{name:"prefix",val:""},{name:"n_docs",val:""},{name:"return_tensors",val:" = None"}],parametersDescription:[{anchor:"transformers.RagRetriever.postprocess_docs.docs",description:`<strong>docs</strong>  (<code>dict</code>) &#x2014;
Retrieved documents.`,name:"docs"},{anchor:"transformers.RagRetriever.postprocess_docs.input_strings",description:`<strong>input_strings</strong> (<code>str</code>) &#x2014;
Input strings decoded by <code>preprocess_query</code>.`,name:"input_strings"},{anchor:"transformers.RagRetriever.postprocess_docs.prefix",description:`<strong>prefix</strong> (<code>str</code>) &#x2014;
Prefix added at the beginning of each input, typically used with T5-based models.`,name:"prefix"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/rag/retrieval_rag.py#L479",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>a tuple consisting of two elements: contextualized <code>input_ids</code> and a compatible
<code>attention_mask</code>.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>tuple(tensors)</code></p>
`}}),ne=new V({props:{name:"retrieve",anchor:"transformers.RagRetriever.retrieve",parameters:[{name:"question_hidden_states",val:": ndarray"},{name:"n_docs",val:": int"}],parametersDescription:[{anchor:"transformers.RagRetriever.retrieve.question_hidden_states",description:`<strong>question_hidden_states</strong> (<code>np.ndarray</code> of shape <code>(batch_size, vector_size)</code>) &#x2014;
A batch of query vectors to retrieve with.`,name:"question_hidden_states"},{anchor:"transformers.RagRetriever.retrieve.n_docs",description:`<strong>n_docs</strong> (<code>int</code>) &#x2014;
The number of docs retrieved per query.`,name:"n_docs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/rag/retrieval_rag.py#L551",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A tuple with the following objects:</p>
<ul>
<li><strong>retrieved_doc_embeds</strong> (<code>np.ndarray</code> of shape <code>(batch_size, n_docs, dim)</code>) — The retrieval embeddings
of the retrieved docs per query.</li>
<li><strong>doc_ids</strong> (<code>np.ndarray</code> of shape <code>(batch_size, n_docs)</code>) — The ids of the documents in the index</li>
<li><strong>doc_dicts</strong> (<code>List[dict]</code>): The <code>retrieved_doc_embeds</code> examples per query.</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>Tuple[np.ndarray, np.ndarray, List[dict]]</code></p>
`}}),se=new po({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[Go],pytorch:[wo]},$$scope:{ctx:x}}}),{c(){e=d("meta"),h=s(),t=d("p"),c=s(),_(R.$$.fragment),a=s(),F=d("div"),F.innerHTML=Jt,A=s(),_(Ue.$$.fragment),ie=s(),Ke=d("p"),Ke.textContent=$t,ce=s(),et=d("p"),et.innerHTML=Ut,le=s(),tt=d("p"),tt.textContent=zt,pe=s(),ot=d("p"),ot.innerHTML=Gt,me=s(),nt=d("p"),nt.innerHTML=Zt,B=s(),_(ue.$$.fragment),mt=s(),I=d("p"),I.textContent=st,ut=s(),_(S.$$.fragment),yt=s(),H=d("div"),_(E.$$.fragment),ze=s(),P=d("p"),P.innerHTML=$,te=s(),ke=d("div"),_(q.$$.fragment),Ee=s(),Qe=d("p"),Qe.innerHTML=he,Mt=s(),_(ge.$$.fragment),qe=s(),Ge=d("div"),_(Q.$$.fragment),Ct=s(),_(Ze.$$.fragment),_e=s(),Ce=d("div"),_(Ie.$$.fragment),xe=s(),ht=d("p"),ht.textContent=It,fe=s(),rt=d("div"),_(Ne.$$.fragment),Te=s(),_(at.$$.fragment),gt=s(),J=d("div"),_(be.$$.fragment),wt=s(),O=d("p"),O.textContent=Ht,Rt=s(),_(Z.$$.fragment),We=s(),Y=d("div"),_(ve.$$.fragment),Xe=s(),ye=d("p"),ye.textContent=Ve,Ye=s(),D=d("div"),_(Fe.$$.fragment),K=s(),oe=d("p"),oe.innerHTML=U,Me=s(),Be=d("div"),_(ne.$$.fragment),Pe=s(),He=d("p"),He.innerHTML=j,je=s(),_(se.$$.fragment),Oe=s(),_t=d("p"),this.h()},l(n){const M=lo("svelte-u9bgzb",document.head);e=i(M,"META",{name:!0,content:!0}),M.forEach(l),h=r(n),t=i(n,"P",{}),X(t).forEach(l),c=r(n),f(R.$$.fragment,n),a=r(n),F=i(n,"DIV",{class:!0,"data-svelte-h":!0}),p(F)!=="svelte-4jjbsi"&&(F.innerHTML=Jt),A=r(n),f(Ue.$$.fragment,n),ie=r(n),Ke=i(n,"P",{"data-svelte-h":!0}),p(Ke)!=="svelte-1plx795"&&(Ke.textContent=$t),ce=r(n),et=i(n,"P",{"data-svelte-h":!0}),p(et)!=="svelte-16ob0ps"&&(et.innerHTML=Ut),le=r(n),tt=i(n,"P",{"data-svelte-h":!0}),p(tt)!=="svelte-vfdo9a"&&(tt.textContent=zt),pe=r(n),ot=i(n,"P",{"data-svelte-h":!0}),p(ot)!=="svelte-114n460"&&(ot.innerHTML=Gt),me=r(n),nt=i(n,"P",{"data-svelte-h":!0}),p(nt)!=="svelte-5s86bh"&&(nt.innerHTML=Zt),B=r(n),f(ue.$$.fragment,n),mt=r(n),I=i(n,"P",{"data-svelte-h":!0}),p(I)!=="svelte-yuvu9z"&&(I.textContent=st),ut=r(n),f(S.$$.fragment,n),yt=r(n),H=i(n,"DIV",{class:!0});var L=X(H);f(E.$$.fragment,L),ze=r(L),P=i(L,"P",{"data-svelte-h":!0}),p(P)!=="svelte-kl6bqd"&&(P.innerHTML=$),te=r(L),ke=i(L,"DIV",{class:!0});var dt=X(ke);f(q.$$.fragment,dt),Ee=r(dt),Qe=i(dt,"P",{"data-svelte-h":!0}),p(Qe)!=="svelte-dl71c6"&&(Qe.innerHTML=he),dt.forEach(l),L.forEach(l),Mt=r(n),f(ge.$$.fragment,n),qe=r(n),Ge=i(n,"DIV",{class:!0});var Nt=X(Ge);f(Q.$$.fragment,Nt),Nt.forEach(l),Ct=r(n),f(Ze.$$.fragment,n),_e=r(n),Ce=i(n,"DIV",{class:!0});var we=X(Ce);f(Ie.$$.fragment,we),xe=r(we),ht=i(we,"P",{"data-svelte-h":!0}),p(ht)!=="svelte-1hlc1gl"&&(ht.textContent=It),we.forEach(l),fe=r(n),rt=i(n,"DIV",{class:!0});var St=X(rt);f(Ne.$$.fragment,St),St.forEach(l),Te=r(n),f(at.$$.fragment,n),gt=r(n),J=i(n,"DIV",{class:!0});var ee=X(J);f(be.$$.fragment,ee),wt=r(ee),O=i(ee,"P",{"data-svelte-h":!0}),p(O)!=="svelte-1t6c1is"&&(O.textContent=Ht),Rt=r(ee),f(Z.$$.fragment,ee),We=r(ee),Y=i(ee,"DIV",{class:!0});var Re=X(Y);f(ve.$$.fragment,Re),Xe=r(Re),ye=i(Re,"P",{"data-svelte-h":!0}),p(ye)!=="svelte-1xrn4vk"&&(ye.textContent=Ve),Re.forEach(l),Ye=r(ee),D=i(ee,"DIV",{class:!0});var Wt=X(D);f(Fe.$$.fragment,Wt),K=r(Wt),oe=i(Wt,"P",{"data-svelte-h":!0}),p(oe)!=="svelte-dey12y"&&(oe.innerHTML=U),Wt.forEach(l),Me=r(ee),Be=i(ee,"DIV",{class:!0});var ft=X(Be);f(ne.$$.fragment,ft),Pe=r(ft),He=i(ft,"P",{"data-svelte-h":!0}),p(He)!=="svelte-mluf2d"&&(He.innerHTML=j),ft.forEach(l),ee.forEach(l),je=r(n),f(se.$$.fragment,n),Oe=r(n),_t=i(n,"P",{}),X(_t).forEach(l),this.h()},h(){C(e,"name","hf:doc:metadata"),C(e,"content",Co),C(F,"class","flex flex-wrap space-x-1"),C(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),C(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),C(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),C(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),C(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),C(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),C(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),C(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),C(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(n,M){o(document.head,e),g(n,h,M),g(n,t,M),g(n,c,M),T(R,n,M),g(n,a,M),g(n,F,M),g(n,A,M),T(Ue,n,M),g(n,ie,M),g(n,Ke,M),g(n,ce,M),g(n,et,M),g(n,le,M),g(n,tt,M),g(n,pe,M),g(n,ot,M),g(n,me,M),g(n,nt,M),g(n,B,M),T(ue,n,M),g(n,mt,M),g(n,I,M),g(n,ut,M),T(S,n,M),g(n,yt,M),g(n,H,M),T(E,H,null),o(H,ze),o(H,P),o(H,te),o(H,ke),T(q,ke,null),o(ke,Ee),o(ke,Qe),g(n,Mt,M),T(ge,n,M),g(n,qe,M),g(n,Ge,M),T(Q,Ge,null),g(n,Ct,M),T(Ze,n,M),g(n,_e,M),g(n,Ce,M),T(Ie,Ce,null),o(Ce,xe),o(Ce,ht),g(n,fe,M),g(n,rt,M),T(Ne,rt,null),g(n,Te,M),T(at,n,M),g(n,gt,M),g(n,J,M),T(be,J,null),o(J,wt),o(J,O),o(J,Rt),T(Z,J,null),o(J,We),o(J,Y),T(ve,Y,null),o(Y,Xe),o(Y,ye),o(J,Ye),o(J,D),T(Fe,D,null),o(D,K),o(D,oe),o(J,Me),o(J,Be),T(ne,Be,null),o(Be,Pe),o(Be,He),g(n,je,M),T(se,n,M),g(n,Oe,M),g(n,_t,M),Se=!0},p(n,[M]){const L={};M&2&&(L.$$scope={dirty:M,ctx:n}),Z.$set(L);const dt={};M&2&&(dt.$$scope={dirty:M,ctx:n}),se.$set(dt)},i(n){Se||(b(R.$$.fragment,n),b(Ue.$$.fragment,n),b(ue.$$.fragment,n),b(S.$$.fragment,n),b(E.$$.fragment,n),b(q.$$.fragment,n),b(ge.$$.fragment,n),b(Q.$$.fragment,n),b(Ze.$$.fragment,n),b(Ie.$$.fragment,n),b(Ne.$$.fragment,n),b(at.$$.fragment,n),b(be.$$.fragment,n),b(Z.$$.fragment,n),b(ve.$$.fragment,n),b(Fe.$$.fragment,n),b(ne.$$.fragment,n),b(se.$$.fragment,n),Se=!0)},o(n){v(R.$$.fragment,n),v(Ue.$$.fragment,n),v(ue.$$.fragment,n),v(S.$$.fragment,n),v(E.$$.fragment,n),v(q.$$.fragment,n),v(ge.$$.fragment,n),v(Q.$$.fragment,n),v(Ze.$$.fragment,n),v(Ie.$$.fragment,n),v(Ne.$$.fragment,n),v(at.$$.fragment,n),v(be.$$.fragment,n),v(Z.$$.fragment,n),v(ve.$$.fragment,n),v(Fe.$$.fragment,n),v(ne.$$.fragment,n),v(se.$$.fragment,n),Se=!1},d(n){n&&(l(h),l(t),l(c),l(a),l(F),l(A),l(ie),l(Ke),l(ce),l(et),l(le),l(tt),l(pe),l(ot),l(me),l(nt),l(B),l(mt),l(I),l(ut),l(yt),l(H),l(Mt),l(qe),l(Ge),l(Ct),l(_e),l(Ce),l(fe),l(rt),l(Te),l(gt),l(J),l(je),l(Oe),l(_t)),l(e),y(R,n),y(Ue,n),y(ue,n),y(S,n),y(E),y(q),y(ge,n),y(Q),y(Ze,n),y(Ie),y(Ne),y(at,n),y(be),y(Z),y(ve),y(Fe),y(ne),y(se,n)}}}const Co='{"title":"RAG","local":"rag","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"RagConfig","local":"transformers.RagConfig","sections":[],"depth":2},{"title":"RagTokenizer","local":"transformers.RagTokenizer","sections":[],"depth":2},{"title":"Rag specific outputs","local":"transformers.models.rag.modeling_rag.RetrievAugLMMarginOutput","sections":[],"depth":2},{"title":"RagRetriever","local":"transformers.RagRetriever","sections":[],"depth":2},{"title":"RagModel","local":"transformers.RagModel","sections":[],"depth":2},{"title":"RagSequenceForGeneration","local":"transformers.RagSequenceForGeneration","sections":[],"depth":2},{"title":"RagTokenForGeneration","local":"transformers.RagTokenForGeneration","sections":[],"depth":2},{"title":"TFRagModel","local":"transformers.TFRagModel","sections":[],"depth":2},{"title":"TFRagSequenceForGeneration","local":"transformers.TFRagSequenceForGeneration","sections":[],"depth":2},{"title":"TFRagTokenForGeneration","local":"transformers.TFRagTokenForGeneration","sections":[],"depth":2}],"depth":1}';function Io(x){return ao(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ao extends io{constructor(e){super(),co(this,e,Io,Zo,ro,{})}}export{Ao as component};
