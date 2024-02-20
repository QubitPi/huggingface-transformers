import{s as Vo,o as Jo,n as N}from"../chunks/scheduler.9bc65507.js";import{S as Bo,i as Uo,g as m,s as a,r as h,A as jo,h as p,f as s,c as r,j as C,u as f,x as u,k as F,y as i,a as c,v as g,d as _,t as b,w as M}from"../chunks/index.707bf1b6.js";import{T as yt}from"../chunks/Tip.c2ecdbf4.js";import{D as X}from"../chunks/Docstring.17db21ae.js";import{C as he}from"../chunks/CodeBlock.54a9f38d.js";import{E as Ye}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as ee}from"../chunks/Heading.342b1fa6.js";function Co(w){let t,y="Example:",l,d,T;return d=new he({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFZpc3VhbEJlcnRDb25maWclMkMlMjBWaXN1YWxCZXJ0TW9kZWwlMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwVmlzdWFsQkVSVCUyMHZpc3VhbGJlcnQtdnFhLWNvY28tcHJlJTIwc3R5bGUlMjBjb25maWd1cmF0aW9uJTBBY29uZmlndXJhdGlvbiUyMCUzRCUyMFZpc3VhbEJlcnRDb25maWcuZnJvbV9wcmV0cmFpbmVkKCUyMnVjbGFubHAlMkZ2aXN1YWxiZXJ0LXZxYS1jb2NvLXByZSUyMiklMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwbW9kZWwlMjAod2l0aCUyMHJhbmRvbSUyMHdlaWdodHMpJTIwZnJvbSUyMHRoZSUyMHZpc3VhbGJlcnQtdnFhLWNvY28tcHJlJTIwc3R5bGUlMjBjb25maWd1cmF0aW9uJTBBbW9kZWwlMjAlM0QlMjBWaXN1YWxCZXJ0TW9kZWwoY29uZmlndXJhdGlvbiklMEElMEElMjMlMjBBY2Nlc3NpbmclMjB0aGUlMjBtb2RlbCUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwbW9kZWwuY29uZmln",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> VisualBertConfig, VisualBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a VisualBERT visualbert-vqa-coco-pre style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = VisualBertConfig.from_pretrained(<span class="hljs-string">&quot;uclanlp/visualbert-vqa-coco-pre&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the visualbert-vqa-coco-pre style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisualBertModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){t=m("p"),t.textContent=y,l=a(),h(d.$$.fragment)},l(n){t=p(n,"P",{"data-svelte-h":!0}),u(t)!=="svelte-11lpom8"&&(t.textContent=y),l=r(n),f(d.$$.fragment,n)},m(n,v){c(n,t,v),c(n,l,v),g(d,n,v),T=!0},p:N,i(n){T||(_(d.$$.fragment,n),T=!0)},o(n){b(d.$$.fragment,n),T=!1},d(n){n&&(s(t),s(l)),M(d,n)}}}function Fo(w){let t,y=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=m("p"),t.innerHTML=y},l(l){t=p(l,"P",{"data-svelte-h":!0}),u(t)!=="svelte-fincs2"&&(t.innerHTML=y)},m(l,d){c(l,t,d)},p:N,d(l){l&&s(t)}}}function zo(w){let t,y="Example:",l,d,T;return d=new he({props:{code:"JTIzJTIwQXNzdW1wdGlvbiUzQSUyMCpnZXRfdmlzdWFsX2VtYmVkZGluZ3MoaW1hZ2UpKiUyMGdldHMlMjB0aGUlMjB2aXN1YWwlMjBlbWJlZGRpbmdzJTIwb2YlMjB0aGUlMjBpbWFnZS4lMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b1Rva2VuaXplciUyQyUyMFZpc3VhbEJlcnRNb2RlbCUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlLWJlcnQlMkZiZXJ0LWJhc2UtdW5jYXNlZCUyMiklMEFtb2RlbCUyMCUzRCUyMFZpc3VhbEJlcnRNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIydWNsYW5scCUyRnZpc3VhbGJlcnQtdnFhLWNvY28tcHJlJTIyKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglMjJUaGUlMjBjYXBpdGFsJTIwb2YlMjBGcmFuY2UlMjBpcyUyMFBhcmlzLiUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBdmlzdWFsX2VtYmVkcyUyMCUzRCUyMGdldF92aXN1YWxfZW1iZWRkaW5ncyhpbWFnZSkudW5zcXVlZXplKDApJTBBdmlzdWFsX3Rva2VuX3R5cGVfaWRzJTIwJTNEJTIwdG9yY2gub25lcyh2aXN1YWxfZW1iZWRzLnNoYXBlJTVCJTNBLTElNUQlMkMlMjBkdHlwZSUzRHRvcmNoLmxvbmcpJTBBdmlzdWFsX2F0dGVudGlvbl9tYXNrJTIwJTNEJTIwdG9yY2gub25lcyh2aXN1YWxfZW1iZWRzLnNoYXBlJTVCJTNBLTElNUQlMkMlMjBkdHlwZSUzRHRvcmNoLmZsb2F0KSUwQSUwQWlucHV0cy51cGRhdGUoJTBBJTIwJTIwJTIwJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIydmlzdWFsX2VtYmVkcyUyMiUzQSUyMHZpc3VhbF9lbWJlZHMlMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjJ2aXN1YWxfdG9rZW5fdHlwZV9pZHMlMjIlM0ElMjB2aXN1YWxfdG9rZW5fdHlwZV9pZHMlMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjJ2aXN1YWxfYXR0ZW50aW9uX21hc2slMjIlM0ElMjB2aXN1YWxfYXR0ZW50aW9uX21hc2slMkMlMEElMjAlMjAlMjAlMjAlN0QlMEEpJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQWxhc3RfaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-comment"># Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image.</span>
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, VisualBertModel
<span class="hljs-keyword">import</span> torch

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>)
model = VisualBertModel.from_pretrained(<span class="hljs-string">&quot;uclanlp/visualbert-vqa-coco-pre&quot;</span>)

inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
visual_embeds = get_visual_embeddings(image).unsqueeze(<span class="hljs-number">0</span>)
visual_token_type_ids = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.long)
visual_attention_mask = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.<span class="hljs-built_in">float</span>)

inputs.update(
    {
        <span class="hljs-string">&quot;visual_embeds&quot;</span>: visual_embeds,
        <span class="hljs-string">&quot;visual_token_type_ids&quot;</span>: visual_token_type_ids,
        <span class="hljs-string">&quot;visual_attention_mask&quot;</span>: visual_attention_mask,
    }
)

outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){t=m("p"),t.textContent=y,l=a(),h(d.$$.fragment)},l(n){t=p(n,"P",{"data-svelte-h":!0}),u(t)!=="svelte-11lpom8"&&(t.textContent=y),l=r(n),f(d.$$.fragment,n)},m(n,v){c(n,t,v),c(n,l,v),g(d,n,v),T=!0},p:N,i(n){T||(_(d.$$.fragment,n),T=!0)},o(n){b(d.$$.fragment,n),T=!1},d(n){n&&(s(t),s(l)),M(d,n)}}}function Wo(w){let t,y=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=m("p"),t.innerHTML=y},l(l){t=p(l,"P",{"data-svelte-h":!0}),u(t)!=="svelte-fincs2"&&(t.innerHTML=y)},m(l,d){c(l,t,d)},p:N,d(l){l&&s(t)}}}function xo(w){let t,y="Example:",l,d,T;return d=new he({props:{code:"JTIzJTIwQXNzdW1wdGlvbiUzQSUyMCpnZXRfdmlzdWFsX2VtYmVkZGluZ3MoaW1hZ2UpKiUyMGdldHMlMjB0aGUlMjB2aXN1YWwlMjBlbWJlZGRpbmdzJTIwb2YlMjB0aGUlMjBpbWFnZSUyMGluJTIwdGhlJTIwYmF0Y2guJTBBZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBWaXN1YWxCZXJ0Rm9yUHJlVHJhaW5pbmclMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUtYmVydCUyRmJlcnQtYmFzZS11bmNhc2VkJTIyKSUwQW1vZGVsJTIwJTNEJTIwVmlzdWFsQmVydEZvclByZVRyYWluaW5nLmZyb21fcHJldHJhaW5lZCglMjJ1Y2xhbmxwJTJGdmlzdWFsYmVydC12cWEtY29jby1wcmUlMjIpJTBBJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMlRoZSUyMGNhcGl0YWwlMjBvZiUyMEZyYW5jZSUyMGlzJTIwJTVCTUFTSyU1RC4lMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQXZpc3VhbF9lbWJlZHMlMjAlM0QlMjBnZXRfdmlzdWFsX2VtYmVkZGluZ3MoaW1hZ2UpLnVuc3F1ZWV6ZSgwKSUwQXZpc3VhbF90b2tlbl90eXBlX2lkcyUyMCUzRCUyMHRvcmNoLm9uZXModmlzdWFsX2VtYmVkcy5zaGFwZSU1QiUzQS0xJTVEJTJDJTIwZHR5cGUlM0R0b3JjaC5sb25nKSUwQXZpc3VhbF9hdHRlbnRpb25fbWFzayUyMCUzRCUyMHRvcmNoLm9uZXModmlzdWFsX2VtYmVkcy5zaGFwZSU1QiUzQS0xJTVEJTJDJTIwZHR5cGUlM0R0b3JjaC5mbG9hdCklMEElMEFpbnB1dHMudXBkYXRlKCUwQSUyMCUyMCUyMCUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMnZpc3VhbF9lbWJlZHMlMjIlM0ElMjB2aXN1YWxfZW1iZWRzJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIydmlzdWFsX3Rva2VuX3R5cGVfaWRzJTIyJTNBJTIwdmlzdWFsX3Rva2VuX3R5cGVfaWRzJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIydmlzdWFsX2F0dGVudGlvbl9tYXNrJTIyJTNBJTIwdmlzdWFsX2F0dGVudGlvbl9tYXNrJTJDJTBBJTIwJTIwJTIwJTIwJTdEJTBBKSUwQW1heF9sZW5ndGglMjAlM0QlMjBpbnB1dHMlNUIlMjJpbnB1dF9pZHMlMjIlNUQuc2hhcGUlNUItMSU1RCUyMCUyQiUyMHZpc3VhbF9lbWJlZHMuc2hhcGUlNUItMiU1RCUwQWxhYmVscyUyMCUzRCUyMHRva2VuaXplciglMEElMjAlMjAlMjAlMjAlMjJUaGUlMjBjYXBpdGFsJTIwb2YlMjBGcmFuY2UlMjBpcyUyMFBhcmlzLiUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIlMkMlMjBwYWRkaW5nJTNEJTIybWF4X2xlbmd0aCUyMiUyQyUyMG1heF9sZW5ndGglM0RtYXhfbGVuZ3RoJTBBKSU1QiUyMmlucHV0X2lkcyUyMiU1RCUwQXNlbnRlbmNlX2ltYWdlX2xhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvcigxKS51bnNxdWVlemUoMCklMjAlMjAlMjMlMjBCYXRjaF9zaXplJTBBJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzJTJDJTIwbGFiZWxzJTNEbGFiZWxzJTJDJTIwc2VudGVuY2VfaW1hZ2VfbGFiZWxzJTNEc2VudGVuY2VfaW1hZ2VfbGFiZWxzKSUwQWxvc3MlMjAlM0QlMjBvdXRwdXRzLmxvc3MlMEFwcmVkaWN0aW9uX2xvZ2l0cyUyMCUzRCUyMG91dHB1dHMucHJlZGljdGlvbl9sb2dpdHMlMEFzZXFfcmVsYXRpb25zaGlwX2xvZ2l0cyUyMCUzRCUyMG91dHB1dHMuc2VxX3JlbGF0aW9uc2hpcF9sb2dpdHM=",highlighted:`<span class="hljs-comment"># Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image in the batch.</span>
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, VisualBertForPreTraining

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>)
model = VisualBertForPreTraining.from_pretrained(<span class="hljs-string">&quot;uclanlp/visualbert-vqa-coco-pre&quot;</span>)

inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
visual_embeds = get_visual_embeddings(image).unsqueeze(<span class="hljs-number">0</span>)
visual_token_type_ids = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.long)
visual_attention_mask = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.<span class="hljs-built_in">float</span>)

inputs.update(
    {
        <span class="hljs-string">&quot;visual_embeds&quot;</span>: visual_embeds,
        <span class="hljs-string">&quot;visual_token_type_ids&quot;</span>: visual_token_type_ids,
        <span class="hljs-string">&quot;visual_attention_mask&quot;</span>: visual_attention_mask,
    }
)
max_length = inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape[-<span class="hljs-number">1</span>] + visual_embeds.shape[-<span class="hljs-number">2</span>]
labels = tokenizer(
    <span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-string">&quot;max_length&quot;</span>, max_length=max_length
)[<span class="hljs-string">&quot;input_ids&quot;</span>]
sentence_image_labels = torch.tensor(<span class="hljs-number">1</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch_size</span>


outputs = model(**inputs, labels=labels, sentence_image_labels=sentence_image_labels)
loss = outputs.loss
prediction_logits = outputs.prediction_logits
seq_relationship_logits = outputs.seq_relationship_logits`,wrap:!1}}),{c(){t=m("p"),t.textContent=y,l=a(),h(d.$$.fragment)},l(n){t=p(n,"P",{"data-svelte-h":!0}),u(t)!=="svelte-11lpom8"&&(t.textContent=y),l=r(n),f(d.$$.fragment,n)},m(n,v){c(n,t,v),c(n,l,v),g(d,n,v),T=!0},p:N,i(n){T||(_(d.$$.fragment,n),T=!0)},o(n){b(d.$$.fragment,n),T=!1},d(n){n&&(s(t),s(l)),M(d,n)}}}function $o(w){let t,y=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=m("p"),t.innerHTML=y},l(l){t=p(l,"P",{"data-svelte-h":!0}),u(t)!=="svelte-fincs2"&&(t.innerHTML=y)},m(l,d){c(l,t,d)},p:N,d(l){l&&s(t)}}}function Io(w){let t,y="Example:",l,d,T;return d=new he({props:{code:"JTIzJTIwQXNzdW1wdGlvbiUzQSUyMCpnZXRfdmlzdWFsX2VtYmVkZGluZ3MoaW1hZ2UpKiUyMGdldHMlMjB0aGUlMjB2aXN1YWwlMjBlbWJlZGRpbmdzJTIwb2YlMjB0aGUlMjBpbWFnZSUyMGluJTIwdGhlJTIwYmF0Y2guJTBBZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBWaXN1YWxCZXJ0Rm9yUXVlc3Rpb25BbnN3ZXJpbmclMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZS1iZXJ0JTJGYmVydC1iYXNlLXVuY2FzZWQlMjIpJTBBbW9kZWwlMjAlM0QlMjBWaXN1YWxCZXJ0Rm9yUXVlc3Rpb25BbnN3ZXJpbmcuZnJvbV9wcmV0cmFpbmVkKCUyMnVjbGFubHAlMkZ2aXN1YWxiZXJ0LXZxYSUyMiklMEElMEF0ZXh0JTIwJTNEJTIwJTIyV2hvJTIwaXMlMjBlYXRpbmclMjB0aGUlMjBhcHBsZSUzRiUyMiUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplcih0ZXh0JTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEF2aXN1YWxfZW1iZWRzJTIwJTNEJTIwZ2V0X3Zpc3VhbF9lbWJlZGRpbmdzKGltYWdlKS51bnNxdWVlemUoMCklMEF2aXN1YWxfdG9rZW5fdHlwZV9pZHMlMjAlM0QlMjB0b3JjaC5vbmVzKHZpc3VhbF9lbWJlZHMuc2hhcGUlNUIlM0EtMSU1RCUyQyUyMGR0eXBlJTNEdG9yY2gubG9uZyklMEF2aXN1YWxfYXR0ZW50aW9uX21hc2slMjAlM0QlMjB0b3JjaC5vbmVzKHZpc3VhbF9lbWJlZHMuc2hhcGUlNUIlM0EtMSU1RCUyQyUyMGR0eXBlJTNEdG9yY2guZmxvYXQpJTBBJTBBaW5wdXRzLnVwZGF0ZSglMEElMjAlMjAlMjAlMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjJ2aXN1YWxfZW1iZWRzJTIyJTNBJTIwdmlzdWFsX2VtYmVkcyUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMnZpc3VhbF90b2tlbl90eXBlX2lkcyUyMiUzQSUyMHZpc3VhbF90b2tlbl90eXBlX2lkcyUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMnZpc3VhbF9hdHRlbnRpb25fbWFzayUyMiUzQSUyMHZpc3VhbF9hdHRlbnRpb25fbWFzayUyQyUwQSUyMCUyMCUyMCUyMCU3RCUwQSklMEElMEFsYWJlbHMlMjAlM0QlMjB0b3JjaC50ZW5zb3IoJTVCJTVCMC4wJTJDJTIwMS4wJTVEJTVEKS51bnNxdWVlemUoMCklMjAlMjAlMjMlMjBCYXRjaCUyMHNpemUlMjAxJTJDJTIwTnVtJTIwbGFiZWxzJTIwMiUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscyklMEFsb3NzJTIwJTNEJTIwb3V0cHV0cy5sb3NzJTBBc2NvcmVzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-comment"># Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image in the batch.</span>
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, VisualBertForQuestionAnswering
<span class="hljs-keyword">import</span> torch

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>)
model = VisualBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;uclanlp/visualbert-vqa&quot;</span>)

text = <span class="hljs-string">&quot;Who is eating the apple?&quot;</span>
inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
visual_embeds = get_visual_embeddings(image).unsqueeze(<span class="hljs-number">0</span>)
visual_token_type_ids = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.long)
visual_attention_mask = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.<span class="hljs-built_in">float</span>)

inputs.update(
    {
        <span class="hljs-string">&quot;visual_embeds&quot;</span>: visual_embeds,
        <span class="hljs-string">&quot;visual_token_type_ids&quot;</span>: visual_token_type_ids,
        <span class="hljs-string">&quot;visual_attention_mask&quot;</span>: visual_attention_mask,
    }
)

labels = torch.tensor([[<span class="hljs-number">0.0</span>, <span class="hljs-number">1.0</span>]]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1, Num labels 2</span>

outputs = model(**inputs, labels=labels)
loss = outputs.loss
scores = outputs.logits`,wrap:!1}}),{c(){t=m("p"),t.textContent=y,l=a(),h(d.$$.fragment)},l(n){t=p(n,"P",{"data-svelte-h":!0}),u(t)!=="svelte-11lpom8"&&(t.textContent=y),l=r(n),f(d.$$.fragment,n)},m(n,v){c(n,t,v),c(n,l,v),g(d,n,v),T=!0},p:N,i(n){T||(_(d.$$.fragment,n),T=!0)},o(n){b(d.$$.fragment,n),T=!1},d(n){n&&(s(t),s(l)),M(d,n)}}}function Zo(w){let t,y=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=m("p"),t.innerHTML=y},l(l){t=p(l,"P",{"data-svelte-h":!0}),u(t)!=="svelte-fincs2"&&(t.innerHTML=y)},m(l,d){c(l,t,d)},p:N,d(l){l&&s(t)}}}function Ro(w){let t,y="Example:",l,d,T;return d=new he({props:{code:"JTIzJTIwQXNzdW1wdGlvbiUzQSUyMCpnZXRfdmlzdWFsX2VtYmVkZGluZ3MoaW1hZ2UpKiUyMGdldHMlMjB0aGUlMjB2aXN1YWwlMjBlbWJlZGRpbmdzJTIwb2YlMjB0aGUlMjBpbWFnZSUyMGluJTIwdGhlJTIwYmF0Y2guJTBBZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBWaXN1YWxCZXJ0Rm9yTXVsdGlwbGVDaG9pY2UlMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZS1iZXJ0JTJGYmVydC1iYXNlLXVuY2FzZWQlMjIpJTBBbW9kZWwlMjAlM0QlMjBWaXN1YWxCZXJ0Rm9yTXVsdGlwbGVDaG9pY2UuZnJvbV9wcmV0cmFpbmVkKCUyMnVjbGFubHAlMkZ2aXN1YWxiZXJ0LXZjciUyMiklMEElMEFwcm9tcHQlMjAlM0QlMjAlMjJJbiUyMEl0YWx5JTJDJTIwcGl6emElMjBzZXJ2ZWQlMjBpbiUyMGZvcm1hbCUyMHNldHRpbmdzJTJDJTIwc3VjaCUyMGFzJTIwYXQlMjBhJTIwcmVzdGF1cmFudCUyQyUyMGlzJTIwcHJlc2VudGVkJTIwdW5zbGljZWQuJTIyJTBBY2hvaWNlMCUyMCUzRCUyMCUyMkl0JTIwaXMlMjBlYXRlbiUyMHdpdGglMjBhJTIwZm9yayUyMGFuZCUyMGElMjBrbmlmZS4lMjIlMEFjaG9pY2UxJTIwJTNEJTIwJTIySXQlMjBpcyUyMGVhdGVuJTIwd2hpbGUlMjBoZWxkJTIwaW4lMjB0aGUlMjBoYW5kLiUyMiUwQSUwQXZpc3VhbF9lbWJlZHMlMjAlM0QlMjBnZXRfdmlzdWFsX2VtYmVkZGluZ3MoaW1hZ2UpJTBBJTIzJTIwKGJhdGNoX3NpemUlMkMlMjBudW1fY2hvaWNlcyUyQyUyMHZpc3VhbF9zZXFfbGVuZ3RoJTJDJTIwdmlzdWFsX2VtYmVkZGluZ19kaW0pJTBBdmlzdWFsX2VtYmVkcyUyMCUzRCUyMHZpc3VhbF9lbWJlZHMuZXhwYW5kKDElMkMlMjAyJTJDJTIwKnZpc3VhbF9lbWJlZHMuc2hhcGUpJTBBdmlzdWFsX3Rva2VuX3R5cGVfaWRzJTIwJTNEJTIwdG9yY2gub25lcyh2aXN1YWxfZW1iZWRzLnNoYXBlJTVCJTNBLTElNUQlMkMlMjBkdHlwZSUzRHRvcmNoLmxvbmcpJTBBdmlzdWFsX2F0dGVudGlvbl9tYXNrJTIwJTNEJTIwdG9yY2gub25lcyh2aXN1YWxfZW1iZWRzLnNoYXBlJTVCJTNBLTElNUQlMkMlMjBkdHlwZSUzRHRvcmNoLmZsb2F0KSUwQSUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLnRlbnNvcigwKS51bnNxdWVlemUoMCklMjAlMjAlMjMlMjBjaG9pY2UwJTIwaXMlMjBjb3JyZWN0JTIwKGFjY29yZGluZyUyMHRvJTIwV2lraXBlZGlhJTIwJTNCKSklMkMlMjBiYXRjaCUyMHNpemUlMjAxJTBBJTBBZW5jb2RpbmclMjAlM0QlMjB0b2tlbml6ZXIoJTVCJTVCcHJvbXB0JTJDJTIwcHJvbXB0JTVEJTJDJTIwJTVCY2hvaWNlMCUyQyUyMGNob2ljZTElNUQlNUQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyJTJDJTIwcGFkZGluZyUzRFRydWUpJTBBJTIzJTIwYmF0Y2glMjBzaXplJTIwaXMlMjAxJTBBaW5wdXRzX2RpY3QlMjAlM0QlMjAlN0JrJTNBJTIwdi51bnNxdWVlemUoMCklMjBmb3IlMjBrJTJDJTIwdiUyMGluJTIwZW5jb2RpbmcuaXRlbXMoKSU3RCUwQWlucHV0c19kaWN0LnVwZGF0ZSglMEElMjAlMjAlMjAlMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjJ2aXN1YWxfZW1iZWRzJTIyJTNBJTIwdmlzdWFsX2VtYmVkcyUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMnZpc3VhbF9hdHRlbnRpb25fbWFzayUyMiUzQSUyMHZpc3VhbF9hdHRlbnRpb25fbWFzayUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMnZpc3VhbF90b2tlbl90eXBlX2lkcyUyMiUzQSUyMHZpc3VhbF90b2tlbl90eXBlX2lkcyUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMmxhYmVscyUyMiUzQSUyMGxhYmVscyUyQyUwQSUyMCUyMCUyMCUyMCU3RCUwQSklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHNfZGljdCklMEElMEFsb3NzJTIwJTNEJTIwb3V0cHV0cy5sb3NzJTBBbG9naXRzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-comment"># Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image in the batch.</span>
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, VisualBertForMultipleChoice
<span class="hljs-keyword">import</span> torch

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>)
model = VisualBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;uclanlp/visualbert-vcr&quot;</span>)

prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

visual_embeds = get_visual_embeddings(image)
<span class="hljs-comment"># (batch_size, num_choices, visual_seq_length, visual_embedding_dim)</span>
visual_embeds = visual_embeds.expand(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, *visual_embeds.shape)
visual_token_type_ids = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.long)
visual_attention_mask = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.<span class="hljs-built_in">float</span>)

labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

encoding = tokenizer([[prompt, prompt], [choice0, choice1]], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-comment"># batch size is 1</span>
inputs_dict = {k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
inputs_dict.update(
    {
        <span class="hljs-string">&quot;visual_embeds&quot;</span>: visual_embeds,
        <span class="hljs-string">&quot;visual_attention_mask&quot;</span>: visual_attention_mask,
        <span class="hljs-string">&quot;visual_token_type_ids&quot;</span>: visual_token_type_ids,
        <span class="hljs-string">&quot;labels&quot;</span>: labels,
    }
)
outputs = model(**inputs_dict)

loss = outputs.loss
logits = outputs.logits`,wrap:!1}}),{c(){t=m("p"),t.textContent=y,l=a(),h(d.$$.fragment)},l(n){t=p(n,"P",{"data-svelte-h":!0}),u(t)!=="svelte-11lpom8"&&(t.textContent=y),l=r(n),f(d.$$.fragment,n)},m(n,v){c(n,t,v),c(n,l,v),g(d,n,v),T=!0},p:N,i(n){T||(_(d.$$.fragment,n),T=!0)},o(n){b(d.$$.fragment,n),T=!1},d(n){n&&(s(t),s(l)),M(d,n)}}}function Xo(w){let t,y=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=m("p"),t.innerHTML=y},l(l){t=p(l,"P",{"data-svelte-h":!0}),u(t)!=="svelte-fincs2"&&(t.innerHTML=y)},m(l,d){c(l,t,d)},p:N,d(l){l&&s(t)}}}function No(w){let t,y="Example:",l,d,T;return d=new he({props:{code:"JTIzJTIwQXNzdW1wdGlvbiUzQSUyMCpnZXRfdmlzdWFsX2VtYmVkZGluZ3MoaW1hZ2UpKiUyMGdldHMlMjB0aGUlMjB2aXN1YWwlMjBlbWJlZGRpbmdzJTIwb2YlMjB0aGUlMjBpbWFnZSUyMGluJTIwdGhlJTIwYmF0Y2guJTBBZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBWaXN1YWxCZXJ0Rm9yVmlzdWFsUmVhc29uaW5nJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUtYmVydCUyRmJlcnQtYmFzZS11bmNhc2VkJTIyKSUwQW1vZGVsJTIwJTNEJTIwVmlzdWFsQmVydEZvclZpc3VhbFJlYXNvbmluZy5mcm9tX3ByZXRyYWluZWQoJTIydWNsYW5scCUyRnZpc3VhbGJlcnQtbmx2cjIlMjIpJTBBJTBBdGV4dCUyMCUzRCUyMCUyMldobyUyMGlzJTIwZWF0aW5nJTIwdGhlJTIwYXBwbGUlM0YlMjIlMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIodGV4dCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBdmlzdWFsX2VtYmVkcyUyMCUzRCUyMGdldF92aXN1YWxfZW1iZWRkaW5ncyhpbWFnZSkudW5zcXVlZXplKDApJTBBdmlzdWFsX3Rva2VuX3R5cGVfaWRzJTIwJTNEJTIwdG9yY2gub25lcyh2aXN1YWxfZW1iZWRzLnNoYXBlJTVCJTNBLTElNUQlMkMlMjBkdHlwZSUzRHRvcmNoLmxvbmcpJTBBdmlzdWFsX2F0dGVudGlvbl9tYXNrJTIwJTNEJTIwdG9yY2gub25lcyh2aXN1YWxfZW1iZWRzLnNoYXBlJTVCJTNBLTElNUQlMkMlMjBkdHlwZSUzRHRvcmNoLmZsb2F0KSUwQSUwQWlucHV0cy51cGRhdGUoJTBBJTIwJTIwJTIwJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIydmlzdWFsX2VtYmVkcyUyMiUzQSUyMHZpc3VhbF9lbWJlZHMlMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjJ2aXN1YWxfdG9rZW5fdHlwZV9pZHMlMjIlM0ElMjB2aXN1YWxfdG9rZW5fdHlwZV9pZHMlMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjJ2aXN1YWxfYXR0ZW50aW9uX21hc2slMjIlM0ElMjB2aXN1YWxfYXR0ZW50aW9uX21hc2slMkMlMEElMjAlMjAlMjAlMjAlN0QlMEEpJTBBJTBBbGFiZWxzJTIwJTNEJTIwdG9yY2gudGVuc29yKDEpLnVuc3F1ZWV6ZSgwKSUyMCUyMCUyMyUyMEJhdGNoJTIwc2l6ZSUyMDElMkMlMjBOdW0lMjBjaG9pY2VzJTIwMiUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscyklMEFsb3NzJTIwJTNEJTIwb3V0cHV0cy5sb3NzJTBBc2NvcmVzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-comment"># Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image in the batch.</span>
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, VisualBertForVisualReasoning
<span class="hljs-keyword">import</span> torch

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>)
model = VisualBertForVisualReasoning.from_pretrained(<span class="hljs-string">&quot;uclanlp/visualbert-nlvr2&quot;</span>)

text = <span class="hljs-string">&quot;Who is eating the apple?&quot;</span>
inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
visual_embeds = get_visual_embeddings(image).unsqueeze(<span class="hljs-number">0</span>)
visual_token_type_ids = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.long)
visual_attention_mask = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.<span class="hljs-built_in">float</span>)

inputs.update(
    {
        <span class="hljs-string">&quot;visual_embeds&quot;</span>: visual_embeds,
        <span class="hljs-string">&quot;visual_token_type_ids&quot;</span>: visual_token_type_ids,
        <span class="hljs-string">&quot;visual_attention_mask&quot;</span>: visual_attention_mask,
    }
)

labels = torch.tensor(<span class="hljs-number">1</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1, Num choices 2</span>

outputs = model(**inputs, labels=labels)
loss = outputs.loss
scores = outputs.logits`,wrap:!1}}),{c(){t=m("p"),t.textContent=y,l=a(),h(d.$$.fragment)},l(n){t=p(n,"P",{"data-svelte-h":!0}),u(t)!=="svelte-11lpom8"&&(t.textContent=y),l=r(n),f(d.$$.fragment,n)},m(n,v){c(n,t,v),c(n,l,v),g(d,n,v),T=!0},p:N,i(n){T||(_(d.$$.fragment,n),T=!0)},o(n){b(d.$$.fragment,n),T=!1},d(n){n&&(s(t),s(l)),M(d,n)}}}function Go(w){let t,y=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=m("p"),t.innerHTML=y},l(l){t=p(l,"P",{"data-svelte-h":!0}),u(t)!=="svelte-fincs2"&&(t.innerHTML=y)},m(l,d){c(l,t,d)},p:N,d(l){l&&s(t)}}}function qo(w){let t,y="Example:",l,d,T;return d=new he({props:{code:"JTIzJTIwQXNzdW1wdGlvbiUzQSUyMCpnZXRfdmlzdWFsX2VtYmVkZGluZ3MoaW1hZ2UpKiUyMGdldHMlMjB0aGUlMjB2aXN1YWwlMjBlbWJlZGRpbmdzJTIwb2YlMjB0aGUlMjBpbWFnZSUyMGluJTIwdGhlJTIwYmF0Y2guJTBBZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBWaXN1YWxCZXJ0Rm9yUmVnaW9uVG9QaHJhc2VBbGlnbm1lbnQlMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZS1iZXJ0JTJGYmVydC1iYXNlLXVuY2FzZWQlMjIpJTBBbW9kZWwlMjAlM0QlMjBWaXN1YWxCZXJ0Rm9yUmVnaW9uVG9QaHJhc2VBbGlnbm1lbnQuZnJvbV9wcmV0cmFpbmVkKCUyMnVjbGFubHAlMkZ2aXN1YWxiZXJ0LXZxYS1jb2NvLXByZSUyMiklMEElMEF0ZXh0JTIwJTNEJTIwJTIyV2hvJTIwaXMlMjBlYXRpbmclMjB0aGUlMjBhcHBsZSUzRiUyMiUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplcih0ZXh0JTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEF2aXN1YWxfZW1iZWRzJTIwJTNEJTIwZ2V0X3Zpc3VhbF9lbWJlZGRpbmdzKGltYWdlKS51bnNxdWVlemUoMCklMEF2aXN1YWxfdG9rZW5fdHlwZV9pZHMlMjAlM0QlMjB0b3JjaC5vbmVzKHZpc3VhbF9lbWJlZHMuc2hhcGUlNUIlM0EtMSU1RCUyQyUyMGR0eXBlJTNEdG9yY2gubG9uZyklMEF2aXN1YWxfYXR0ZW50aW9uX21hc2slMjAlM0QlMjB0b3JjaC5vbmVzKHZpc3VhbF9lbWJlZHMuc2hhcGUlNUIlM0EtMSU1RCUyQyUyMGR0eXBlJTNEdG9yY2guZmxvYXQpJTBBcmVnaW9uX3RvX3BocmFzZV9wb3NpdGlvbiUyMCUzRCUyMHRvcmNoLm9uZXMoKDElMkMlMjBpbnB1dHMlNUIlMjJpbnB1dF9pZHMlMjIlNUQuc2hhcGUlNUItMSU1RCUyMCUyQiUyMHZpc3VhbF9lbWJlZHMuc2hhcGUlNUItMiU1RCkpJTBBJTBBaW5wdXRzLnVwZGF0ZSglMEElMjAlMjAlMjAlMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjJyZWdpb25fdG9fcGhyYXNlX3Bvc2l0aW9uJTIyJTNBJTIwcmVnaW9uX3RvX3BocmFzZV9wb3NpdGlvbiUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMnZpc3VhbF9lbWJlZHMlMjIlM0ElMjB2aXN1YWxfZW1iZWRzJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIydmlzdWFsX3Rva2VuX3R5cGVfaWRzJTIyJTNBJTIwdmlzdWFsX3Rva2VuX3R5cGVfaWRzJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIydmlzdWFsX2F0dGVudGlvbl9tYXNrJTIyJTNBJTIwdmlzdWFsX2F0dGVudGlvbl9tYXNrJTJDJTBBJTIwJTIwJTIwJTIwJTdEJTBBKSUwQSUwQWxhYmVscyUyMCUzRCUyMHRvcmNoLm9uZXMoJTBBJTIwJTIwJTIwJTIwKDElMkMlMjBpbnB1dHMlNUIlMjJpbnB1dF9pZHMlMjIlNUQuc2hhcGUlNUItMSU1RCUyMCUyQiUyMHZpc3VhbF9lbWJlZHMuc2hhcGUlNUItMiU1RCUyQyUyMHZpc3VhbF9lbWJlZHMuc2hhcGUlNUItMiU1RCklMEEpJTIwJTIwJTIzJTIwQmF0Y2glMjBzaXplJTIwMSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyUyQyUyMGxhYmVscyUzRGxhYmVscyklMEFsb3NzJTIwJTNEJTIwb3V0cHV0cy5sb3NzJTBBc2NvcmVzJTIwJTNEJTIwb3V0cHV0cy5sb2dpdHM=",highlighted:`<span class="hljs-comment"># Assumption: *get_visual_embeddings(image)* gets the visual embeddings of the image in the batch.</span>
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, VisualBertForRegionToPhraseAlignment
<span class="hljs-keyword">import</span> torch

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>)
model = VisualBertForRegionToPhraseAlignment.from_pretrained(<span class="hljs-string">&quot;uclanlp/visualbert-vqa-coco-pre&quot;</span>)

text = <span class="hljs-string">&quot;Who is eating the apple?&quot;</span>
inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
visual_embeds = get_visual_embeddings(image).unsqueeze(<span class="hljs-number">0</span>)
visual_token_type_ids = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.long)
visual_attention_mask = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.<span class="hljs-built_in">float</span>)
region_to_phrase_position = torch.ones((<span class="hljs-number">1</span>, inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape[-<span class="hljs-number">1</span>] + visual_embeds.shape[-<span class="hljs-number">2</span>]))

inputs.update(
    {
        <span class="hljs-string">&quot;region_to_phrase_position&quot;</span>: region_to_phrase_position,
        <span class="hljs-string">&quot;visual_embeds&quot;</span>: visual_embeds,
        <span class="hljs-string">&quot;visual_token_type_ids&quot;</span>: visual_token_type_ids,
        <span class="hljs-string">&quot;visual_attention_mask&quot;</span>: visual_attention_mask,
    }
)

labels = torch.ones(
    (<span class="hljs-number">1</span>, inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape[-<span class="hljs-number">1</span>] + visual_embeds.shape[-<span class="hljs-number">2</span>], visual_embeds.shape[-<span class="hljs-number">2</span>])
)  <span class="hljs-comment"># Batch size 1</span>

outputs = model(**inputs, labels=labels)
loss = outputs.loss
scores = outputs.logits`,wrap:!1}}),{c(){t=m("p"),t.textContent=y,l=a(),h(d.$$.fragment)},l(n){t=p(n,"P",{"data-svelte-h":!0}),u(t)!=="svelte-11lpom8"&&(t.textContent=y),l=r(n),f(d.$$.fragment,n)},m(n,v){c(n,t,v),c(n,l,v),g(d,n,v),T=!0},p:N,i(n){T||(_(d.$$.fragment,n),T=!0)},o(n){b(d.$$.fragment,n),T=!1},d(n){n&&(s(t),s(l)),M(d,n)}}}function Ho(w){let t,y,l,d,T,n,v,vt,fe,qn=`The VisualBERT model was proposed in <a href="https://arxiv.org/pdf/1908.03557" rel="nofollow">VisualBERT: A Simple and Performant Baseline for Vision and Language</a> by Liunian Harold Li, Mark Yatskar, Da Yin, Cho-Jui Hsieh, Kai-Wei Chang.
VisualBERT is a neural network trained on a variety of (image, text) pairs.`,wt,ge,Hn="The abstract from the paper is the following:",kt,_e,An=`<em>We propose VisualBERT, a simple and flexible framework for modeling a broad range of vision-and-language tasks.
VisualBERT consists of a stack of Transformer layers that implicitly align elements of an input text and regions in an
associated input image with self-attention. We further propose two visually-grounded language model objectives for
pre-training VisualBERT on image caption data. Experiments on four vision-and-language tasks including VQA, VCR, NLVR2,
and Flickr30K show that VisualBERT outperforms or rivals with state-of-the-art models while being significantly
simpler. Further analysis demonstrates that VisualBERT can ground elements of language to image regions without any
explicit supervision and is even sensitive to syntactic relationships, tracking, for example, associations between
verbs and image regions corresponding to their arguments.</em>`,Vt,be,En='This model was contributed by <a href="https://huggingface.co/gchhablani" rel="nofollow">gchhablani</a>. The original code can be found <a href="https://github.com/uclanlp/visualbert" rel="nofollow">here</a>.',Jt,Me,Bt,ye,Qn=`<li><p>Most of the checkpoints provided work with the <a href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertForPreTraining">VisualBertForPreTraining</a> configuration. Other
checkpoints provided are the fine-tuned checkpoints for down-stream tasks - VQA (‘visualbert-vqa’), VCR
(‘visualbert-vcr’), NLVR2 (‘visualbert-nlvr2’). Hence, if you are not working on these downstream tasks, it is
recommended that you use the pretrained checkpoints.</p></li> <li><p>For the VCR task, the authors use a fine-tuned detector for generating visual embeddings, for all the checkpoints.
We do not provide the detector and its weights as a part of the package, but it will be available in the research
projects, and the states can be loaded directly into the detector provided.</p></li>`,Ut,Te,Yn=`VisualBERT is a multi-modal vision and language model. It can be used for visual question answering, multiple choice,
visual reasoning and region-to-phrase correspondence tasks. VisualBERT uses a BERT-like transformer to prepare
embeddings for image-text pairs. Both the text and visual features are then projected to a latent space with identical
dimension.`,jt,ve,Sn=`To feed images to the model, each image is passed through a pre-trained object detector and the regions and the
bounding boxes are extracted. The authors use the features generated after passing these regions through a pre-trained
CNN like ResNet as visual embeddings. They also add absolute position embeddings, and feed the resulting sequence of
vectors to a standard BERT model. The text input is concatenated in the front of the visual embeddings in the embedding
layer, and is expected to be bound by [CLS] and a [SEP] tokens, as in BERT. The segment IDs must also be set
appropriately for the textual and visual parts.`,Ct,we,Ln=`The <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a> is used to encode the text. A custom detector/image processor must be used
to get the visual embeddings. The following example notebooks show how to use VisualBERT with Detectron-like models:`,Ft,ke,Pn=`<li><p><a href="https://github.com/huggingface/transformers/tree/main/examples/research_projects/visual_bert" rel="nofollow">VisualBERT VQA demo notebook</a> : This notebook
contains an example on VisualBERT VQA.</p></li> <li><p><a href="https://colab.research.google.com/drive/1bLGxKdldwqnMVA5x4neY7-l_8fKGWQYI?usp=sharing" rel="nofollow">Generate Embeddings for VisualBERT (Colab Notebook)</a> : This notebook contains
an example on how to generate visual embeddings.</p></li>`,zt,Ve,On='The following example shows how to get the last hidden state using <a href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertModel">VisualBertModel</a>:',Wt,Je,xt,Be,$t,z,Ue,Pt,Se,Dn=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertModel">VisualBertModel</a>. It is used to instantiate an
VisualBERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the VisualBERT
<a href="https://huggingface.co/uclanlp/visualbert-vqa-coco-pre" rel="nofollow">uclanlp/visualbert-vqa-coco-pre</a> architecture.`,Ot,Le,Kn=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,Dt,te,It,je,Zt,k,Ce,Kt,Pe,eo=`The bare VisualBert Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,en,Oe,to=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,tn,De,no=`The model can behave as an encoder (with only self-attention) following the architecture described in <a href="https://arxiv.org/abs/1706.03762" rel="nofollow">Attention is
all you need</a> by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`,nn,G,Fe,on,Ke,oo='The <a href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertModel">VisualBertModel</a> forward method, overrides the <code>__call__</code> special method.',sn,ne,an,oe,Rt,ze,Xt,V,We,rn,et,so=`VisualBert Model with two heads on top as done during the pretraining: a <code>masked language modeling</code> head and a
<code>sentence-image prediction (classification)</code> head.`,ln,tt,ao=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,dn,nt,ro=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,cn,q,xe,mn,ot,io='The <a href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertForPreTraining">VisualBertForPreTraining</a> forward method, overrides the <code>__call__</code> special method.',pn,se,un,ae,Nt,$e,Gt,J,Ie,hn,st,lo=`VisualBert Model with a classification/regression head on top (a dropout and a linear layer on top of the pooled
output) for VQA.`,fn,at,co=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,gn,rt,mo=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,_n,H,Ze,bn,it,po='The <a href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertForQuestionAnswering">VisualBertForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',Mn,re,yn,ie,qt,Re,Ht,B,Xe,Tn,lt,uo=`VisualBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for VCR tasks.`,vn,dt,ho=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,wn,ct,fo=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,kn,A,Ne,Vn,mt,go='The <a href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertForMultipleChoice">VisualBertForMultipleChoice</a> forward method, overrides the <code>__call__</code> special method.',Jn,le,Bn,de,At,Ge,Et,U,qe,Un,pt,_o=`VisualBert Model with a sequence classification head on top (a dropout and a linear layer on top of the pooled
output) for Visual Reasoning e.g. for NLVR task.`,jn,ut,bo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Cn,ht,Mo=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Fn,E,He,zn,ft,yo='The <a href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertForVisualReasoning">VisualBertForVisualReasoning</a> forward method, overrides the <code>__call__</code> special method.',Wn,ce,xn,me,Qt,Ae,Yt,j,Ee,$n,gt,To=`VisualBert Model with a Masked Language Modeling head and an attention layer on top for Region-to-Phrase Alignment
e.g. for Flickr30 Entities task.`,In,_t,vo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,Zn,bt,wo=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,Rn,Q,Qe,Xn,Mt,ko='The <a href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertForRegionToPhraseAlignment">VisualBertForRegionToPhraseAlignment</a> forward method, overrides the <code>__call__</code> special method.',Nn,pe,Gn,ue,St,Tt,Lt;return T=new ee({props:{title:"VisualBERT",local:"visualbert",headingTag:"h1"}}),v=new ee({props:{title:"Overview",local:"overview",headingTag:"h2"}}),Me=new ee({props:{title:"Usage tips",local:"usage-tips",headingTag:"h2"}}),Je=new he({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQmVydFRva2VuaXplciUyQyUyMFZpc3VhbEJlcnRNb2RlbCUwQSUwQW1vZGVsJTIwJTNEJTIwVmlzdWFsQmVydE1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJ1Y2xhbmxwJTJGdmlzdWFsYmVydC12cWEtY29jby1wcmUlMjIpJTBBdG9rZW5pemVyJTIwJTNEJTIwQmVydFRva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlLWJlcnQlMkZiZXJ0LWJhc2UtdW5jYXNlZCUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIyV2hhdCUyMGlzJTIwdGhlJTIwbWFuJTIwZWF0aW5nJTNGJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEElMjMlMjB0aGlzJTIwaXMlMjBhJTIwY3VzdG9tJTIwZnVuY3Rpb24lMjB0aGF0JTIwcmV0dXJucyUyMHRoZSUyMHZpc3VhbCUyMGVtYmVkZGluZ3MlMjBnaXZlbiUyMHRoZSUyMGltYWdlJTIwcGF0aCUwQXZpc3VhbF9lbWJlZHMlMjAlM0QlMjBnZXRfdmlzdWFsX2VtYmVkZGluZ3MoaW1hZ2VfcGF0aCklMEElMEF2aXN1YWxfdG9rZW5fdHlwZV9pZHMlMjAlM0QlMjB0b3JjaC5vbmVzKHZpc3VhbF9lbWJlZHMuc2hhcGUlNUIlM0EtMSU1RCUyQyUyMGR0eXBlJTNEdG9yY2gubG9uZyklMEF2aXN1YWxfYXR0ZW50aW9uX21hc2slMjAlM0QlMjB0b3JjaC5vbmVzKHZpc3VhbF9lbWJlZHMuc2hhcGUlNUIlM0EtMSU1RCUyQyUyMGR0eXBlJTNEdG9yY2guZmxvYXQpJTBBaW5wdXRzLnVwZGF0ZSglMEElMjAlMjAlMjAlMjAlN0IlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjJ2aXN1YWxfZW1iZWRzJTIyJTNBJTIwdmlzdWFsX2VtYmVkcyUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMnZpc3VhbF90b2tlbl90eXBlX2lkcyUyMiUzQSUyMHZpc3VhbF90b2tlbl90eXBlX2lkcyUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMnZpc3VhbF9hdHRlbnRpb25fbWFzayUyMiUzQSUyMHZpc3VhbF9hdHRlbnRpb25fbWFzayUyQyUwQSUyMCUyMCUyMCUyMCU3RCUwQSklMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMpJTBBbGFzdF9oaWRkZW5fc3RhdGUlMjAlM0QlMjBvdXRwdXRzLmxhc3RfaGlkZGVuX3N0YXRl",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, VisualBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>model = VisualBertModel.from_pretrained(<span class="hljs-string">&quot;uclanlp/visualbert-vqa-coco-pre&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;google-bert/bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;What is the man eating?&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># this is a custom function that returns the visual embeddings given the image path</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>visual_embeds = get_visual_embeddings(image_path)

<span class="hljs-meta">&gt;&gt;&gt; </span>visual_token_type_ids = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.long)
<span class="hljs-meta">&gt;&gt;&gt; </span>visual_attention_mask = torch.ones(visual_embeds.shape[:-<span class="hljs-number">1</span>], dtype=torch.<span class="hljs-built_in">float</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs.update(
<span class="hljs-meta">... </span>    {
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;visual_embeds&quot;</span>: visual_embeds,
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;visual_token_type_ids&quot;</span>: visual_token_type_ids,
<span class="hljs-meta">... </span>        <span class="hljs-string">&quot;visual_attention_mask&quot;</span>: visual_attention_mask,
<span class="hljs-meta">... </span>    }
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_state = outputs.last_hidden_state`,wrap:!1}}),Be=new ee({props:{title:"VisualBertConfig",local:"transformers.VisualBertConfig",headingTag:"h2"}}),Ue=new X({props:{name:"class transformers.VisualBertConfig",anchor:"transformers.VisualBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"visual_embedding_dim",val:" = 512"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"bypass_transformer",val:" = False"},{name:"special_visual_initialize",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VisualBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the VisualBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertModel">VisualBertModel</a>. Vocabulary size of the model. Defines the
different tokens that can be represented by the <code>inputs_ids</code> passed to the forward method of
<a href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertModel">VisualBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.VisualBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.VisualBertConfig.visual_embedding_dim",description:`<strong>visual_embedding_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the visual embeddings to be passed to the model.`,name:"visual_embedding_dim"},{anchor:"transformers.VisualBertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.VisualBertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.VisualBertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.VisualBertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.VisualBertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.VisualBertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.VisualBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.VisualBertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertModel">VisualBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.VisualBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.VisualBertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.VisualBertConfig.bypass_transformer",description:`<strong>bypass_transformer</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the model should bypass the transformer for the visual embeddings. If set to <code>True</code>, the
model directly concatenates the visual embeddings from <code>VisualBertEmbeddings</code> with text output from
transformers, and then pass it to a self-attention layer.`,name:"bypass_transformer"},{anchor:"transformers.VisualBertConfig.special_visual_initialize",description:`<strong>special_visual_initialize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the visual token type and position type embedding weights should be initialized the same as
the textual token type and positive type embeddings. When set to <code>True</code>, the weights of the textual token
type and position type embeddings are copied to the respective visual embedding layers.`,name:"special_visual_initialize"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/visual_bert/configuration_visual_bert.py#L43"}}),te=new Ye({props:{anchor:"transformers.VisualBertConfig.example",$$slots:{default:[Co]},$$scope:{ctx:w}}}),je=new ee({props:{title:"VisualBertModel",local:"transformers.VisualBertModel",headingTag:"h2"}}),Ce=new X({props:{name:"class transformers.VisualBertModel",anchor:"transformers.VisualBertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.VisualBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertConfig">VisualBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/visual_bert/modeling_visual_bert.py#L667"}}),Fe=new X({props:{name:"forward",anchor:"transformers.VisualBertModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"visual_embeds",val:": Optional = None"},{name:"visual_attention_mask",val:": Optional = None"},{name:"visual_token_type_ids",val:": Optional = None"},{name:"image_text_alignment",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.VisualBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.VisualBertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.VisualBertModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.VisualBertModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.VisualBertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.VisualBertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.VisualBertModel.forward.visual_embeds",description:`<strong>visual_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length, visual_embedding_dim)</code>, <em>optional</em>) &#x2014;
The embedded representation of the visual inputs, generally derived using using an object detector.`,name:"visual_embeds"},{anchor:"transformers.VisualBertModel.forward.visual_attention_mask",description:`<strong>visual_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on visual embeddings. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"visual_attention_mask"},{anchor:"transformers.VisualBertModel.forward.visual_token_type_ids",description:`<strong>visual_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate different portions of the visual embeds.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a> The authors of VisualBERT set the
<em>visual_token_type_ids</em> to <em>1</em> for all tokens.`,name:"visual_token_type_ids"},{anchor:"transformers.VisualBertModel.forward.image_text_alignment",description:`<strong>image_text_alignment</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length, alignment_number)</code>, <em>optional</em>) &#x2014;
Image-Text alignment uses to decide the position IDs of the visual embeddings.`,name:"image_text_alignment"},{anchor:"transformers.VisualBertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VisualBertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VisualBertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/visual_bert/modeling_visual_bert.py#L710",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertConfig"
>VisualBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) — Last layer hidden-state of the first token of the sequence (classification token) after further processing
through the layers used for the auxiliary pretraining task. E.g. for BERT-family of models, this returns
the classification token after processing through a linear layer and a tanh activation function. The linear
layer weights are trained from the next sentence prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ne=new yt({props:{$$slots:{default:[Fo]},$$scope:{ctx:w}}}),oe=new Ye({props:{anchor:"transformers.VisualBertModel.forward.example",$$slots:{default:[zo]},$$scope:{ctx:w}}}),ze=new ee({props:{title:"VisualBertForPreTraining",local:"transformers.VisualBertForPreTraining",headingTag:"h2"}}),We=new X({props:{name:"class transformers.VisualBertForPreTraining",anchor:"transformers.VisualBertForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.VisualBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertConfig">VisualBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/visual_bert/modeling_visual_bert.py#L861"}}),xe=new X({props:{name:"forward",anchor:"transformers.VisualBertForPreTraining.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"visual_embeds",val:": Optional = None"},{name:"visual_attention_mask",val:": Optional = None"},{name:"visual_token_type_ids",val:": Optional = None"},{name:"image_text_alignment",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"sentence_image_labels",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.VisualBertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.VisualBertForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.VisualBertForPreTraining.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.VisualBertForPreTraining.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.VisualBertForPreTraining.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.VisualBertForPreTraining.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.VisualBertForPreTraining.forward.visual_embeds",description:`<strong>visual_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length, visual_embedding_dim)</code>, <em>optional</em>) &#x2014;
The embedded representation of the visual inputs, generally derived using using an object detector.`,name:"visual_embeds"},{anchor:"transformers.VisualBertForPreTraining.forward.visual_attention_mask",description:`<strong>visual_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on visual embeddings. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"visual_attention_mask"},{anchor:"transformers.VisualBertForPreTraining.forward.visual_token_type_ids",description:`<strong>visual_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate different portions of the visual embeds.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a> The authors of VisualBERT set the
<em>visual_token_type_ids</em> to <em>1</em> for all tokens.`,name:"visual_token_type_ids"},{anchor:"transformers.VisualBertForPreTraining.forward.image_text_alignment",description:`<strong>image_text_alignment</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length, alignment_number)</code>, <em>optional</em>) &#x2014;
Image-Text alignment uses to decide the position IDs of the visual embeddings.`,name:"image_text_alignment"},{anchor:"transformers.VisualBertForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VisualBertForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VisualBertForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.VisualBertForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, total_sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.VisualBertForPreTraining.forward.sentence_image_labels",description:`<strong>sentence_image_labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sentence-image prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a matching pair of sequence A for the given image,</li>
<li>1 indicates sequence B is a random sequence w.r.t A for the given image.</li>
</ul>`,name:"sentence_image_labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/visual_bert/modeling_visual_bert.py#L887",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.models.visual_bert.modeling_visual_bert.VisualBertForPreTrainingOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertConfig"
>VisualBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) — Total loss as the sum of the masked language modeling loss and the sentence-image prediction
(classification) loss.</p>
</li>
<li>
<p><strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) — Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>seq_relationship_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) — Prediction scores of the sentence-image prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.models.visual_bert.modeling_visual_bert.VisualBertForPreTrainingOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),se=new yt({props:{$$slots:{default:[Wo]},$$scope:{ctx:w}}}),ae=new Ye({props:{anchor:"transformers.VisualBertForPreTraining.forward.example",$$slots:{default:[xo]},$$scope:{ctx:w}}}),$e=new ee({props:{title:"VisualBertForQuestionAnswering",local:"transformers.VisualBertForQuestionAnswering",headingTag:"h2"}}),Ie=new X({props:{name:"class transformers.VisualBertForQuestionAnswering",anchor:"transformers.VisualBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.VisualBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertConfig">VisualBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/visual_bert/modeling_visual_bert.py#L1166"}}),Ze=new X({props:{name:"forward",anchor:"transformers.VisualBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"visual_embeds",val:": Optional = None"},{name:"visual_attention_mask",val:": Optional = None"},{name:"visual_token_type_ids",val:": Optional = None"},{name:"image_text_alignment",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"labels",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.VisualBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.visual_embeds",description:`<strong>visual_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length, visual_embedding_dim)</code>, <em>optional</em>) &#x2014;
The embedded representation of the visual inputs, generally derived using using an object detector.`,name:"visual_embeds"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.visual_attention_mask",description:`<strong>visual_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on visual embeddings. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"visual_attention_mask"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.visual_token_type_ids",description:`<strong>visual_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate different portions of the visual embeds.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a> The authors of VisualBERT set the
<em>visual_token_type_ids</em> to <em>1</em> for all tokens.`,name:"visual_token_type_ids"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.image_text_alignment",description:`<strong>image_text_alignment</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length, alignment_number)</code>, <em>optional</em>) &#x2014;
Image-Text alignment uses to decide the position IDs of the visual embeddings.`,name:"image_text_alignment"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.VisualBertForQuestionAnswering.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, total_sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. A KLDivLoss is computed between the labels and the returned logits.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/visual_bert/modeling_visual_bert.py#L1185",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertConfig"
>VisualBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) — Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),re=new yt({props:{$$slots:{default:[$o]},$$scope:{ctx:w}}}),ie=new Ye({props:{anchor:"transformers.VisualBertForQuestionAnswering.forward.example",$$slots:{default:[Io]},$$scope:{ctx:w}}}),Re=new ee({props:{title:"VisualBertForMultipleChoice",local:"transformers.VisualBertForMultipleChoice",headingTag:"h2"}}),Xe=new X({props:{name:"class transformers.VisualBertForMultipleChoice",anchor:"transformers.VisualBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.VisualBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertConfig">VisualBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/visual_bert/modeling_visual_bert.py#L1013"}}),Ne=new X({props:{name:"forward",anchor:"transformers.VisualBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"visual_embeds",val:": Optional = None"},{name:"visual_attention_mask",val:": Optional = None"},{name:"visual_token_type_ids",val:": Optional = None"},{name:"image_text_alignment",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"labels",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.VisualBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.VisualBertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.VisualBertForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.VisualBertForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.VisualBertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.VisualBertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.VisualBertForMultipleChoice.forward.visual_embeds",description:`<strong>visual_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length, visual_embedding_dim)</code>, <em>optional</em>) &#x2014;
The embedded representation of the visual inputs, generally derived using using an object detector.`,name:"visual_embeds"},{anchor:"transformers.VisualBertForMultipleChoice.forward.visual_attention_mask",description:`<strong>visual_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on visual embeddings. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"visual_attention_mask"},{anchor:"transformers.VisualBertForMultipleChoice.forward.visual_token_type_ids",description:`<strong>visual_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate different portions of the visual embeds.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a> The authors of VisualBERT set the
<em>visual_token_type_ids</em> to <em>1</em> for all tokens.`,name:"visual_token_type_ids"},{anchor:"transformers.VisualBertForMultipleChoice.forward.image_text_alignment",description:`<strong>image_text_alignment</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length, alignment_number)</code>, <em>optional</em>) &#x2014;
Image-Text alignment uses to decide the position IDs of the visual embeddings.`,name:"image_text_alignment"},{anchor:"transformers.VisualBertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VisualBertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VisualBertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.VisualBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/visual_bert/modeling_visual_bert.py#L1031",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertConfig"
>VisualBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) — Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) — <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),le=new yt({props:{$$slots:{default:[Zo]},$$scope:{ctx:w}}}),de=new Ye({props:{anchor:"transformers.VisualBertForMultipleChoice.forward.example",$$slots:{default:[Ro]},$$scope:{ctx:w}}}),Ge=new ee({props:{title:"VisualBertForVisualReasoning",local:"transformers.VisualBertForVisualReasoning",headingTag:"h2"}}),qe=new X({props:{name:"class transformers.VisualBertForVisualReasoning",anchor:"transformers.VisualBertForVisualReasoning",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.VisualBertForVisualReasoning.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertConfig">VisualBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/visual_bert/modeling_visual_bert.py#L1292"}}),He=new X({props:{name:"forward",anchor:"transformers.VisualBertForVisualReasoning.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"visual_embeds",val:": Optional = None"},{name:"visual_attention_mask",val:": Optional = None"},{name:"visual_token_type_ids",val:": Optional = None"},{name:"image_text_alignment",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"labels",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.VisualBertForVisualReasoning.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.VisualBertForVisualReasoning.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.VisualBertForVisualReasoning.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.VisualBertForVisualReasoning.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.VisualBertForVisualReasoning.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.VisualBertForVisualReasoning.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.VisualBertForVisualReasoning.forward.visual_embeds",description:`<strong>visual_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length, visual_embedding_dim)</code>, <em>optional</em>) &#x2014;
The embedded representation of the visual inputs, generally derived using using an object detector.`,name:"visual_embeds"},{anchor:"transformers.VisualBertForVisualReasoning.forward.visual_attention_mask",description:`<strong>visual_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on visual embeddings. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"visual_attention_mask"},{anchor:"transformers.VisualBertForVisualReasoning.forward.visual_token_type_ids",description:`<strong>visual_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate different portions of the visual embeds.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a> The authors of VisualBERT set the
<em>visual_token_type_ids</em> to <em>1</em> for all tokens.`,name:"visual_token_type_ids"},{anchor:"transformers.VisualBertForVisualReasoning.forward.image_text_alignment",description:`<strong>image_text_alignment</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length, alignment_number)</code>, <em>optional</em>) &#x2014;
Image-Text alignment uses to decide the position IDs of the visual embeddings.`,name:"image_text_alignment"},{anchor:"transformers.VisualBertForVisualReasoning.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VisualBertForVisualReasoning.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VisualBertForVisualReasoning.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.VisualBertForVisualReasoning.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. A classification loss is computed (Cross-Entropy) against these labels.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/visual_bert/modeling_visual_bert.py#L1311",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertConfig"
>VisualBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) — Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ce=new yt({props:{$$slots:{default:[Xo]},$$scope:{ctx:w}}}),me=new Ye({props:{anchor:"transformers.VisualBertForVisualReasoning.forward.example",$$slots:{default:[No]},$$scope:{ctx:w}}}),Ae=new ee({props:{title:"VisualBertForRegionToPhraseAlignment",local:"transformers.VisualBertForRegionToPhraseAlignment",headingTag:"h2"}}),Ee=new X({props:{name:"class transformers.VisualBertForRegionToPhraseAlignment",anchor:"transformers.VisualBertForRegionToPhraseAlignment",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.VisualBertForRegionToPhraseAlignment.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertConfig">VisualBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/visual_bert/modeling_visual_bert.py#L1452"}}),Qe=new X({props:{name:"forward",anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"visual_embeds",val:": Optional = None"},{name:"visual_attention_mask",val:": Optional = None"},{name:"visual_token_type_ids",val:": Optional = None"},{name:"image_text_alignment",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"region_to_phrase_position",val:": Optional = None"},{name:"labels",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.visual_embeds",description:`<strong>visual_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length, visual_embedding_dim)</code>, <em>optional</em>) &#x2014;
The embedded representation of the visual inputs, generally derived using using an object detector.`,name:"visual_embeds"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.visual_attention_mask",description:`<strong>visual_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on visual embeddings. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"visual_attention_mask"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.visual_token_type_ids",description:`<strong>visual_token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate different portions of the visual embeds.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a> The authors of VisualBERT set the
<em>visual_token_type_ids</em> to <em>1</em> for all tokens.`,name:"visual_token_type_ids"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.image_text_alignment",description:`<strong>image_text_alignment</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, visual_seq_length, alignment_number)</code>, <em>optional</em>) &#x2014;
Image-Text alignment uses to decide the position IDs of the visual embeddings.`,name:"image_text_alignment"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.region_to_phrase_position",description:`<strong>region_to_phrase_position</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, total_sequence_length)</code>, <em>optional</em>) &#x2014;
The positions depicting the position of the image embedding corresponding to the textual tokens.`,name:"region_to_phrase_position"},{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, total_sequence_length, visual_sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. KLDivLoss is computed against these labels and the
outputs from the attention layer.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/visual_bert/modeling_visual_bert.py#L1473",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/visual_bert#transformers.VisualBertConfig"
>VisualBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) — Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),pe=new yt({props:{$$slots:{default:[Go]},$$scope:{ctx:w}}}),ue=new Ye({props:{anchor:"transformers.VisualBertForRegionToPhraseAlignment.forward.example",$$slots:{default:[qo]},$$scope:{ctx:w}}}),{c(){t=m("meta"),y=a(),l=m("p"),d=a(),h(T.$$.fragment),n=a(),h(v.$$.fragment),vt=a(),fe=m("p"),fe.innerHTML=qn,wt=a(),ge=m("p"),ge.textContent=Hn,kt=a(),_e=m("p"),_e.innerHTML=An,Vt=a(),be=m("p"),be.innerHTML=En,Jt=a(),h(Me.$$.fragment),Bt=a(),ye=m("ol"),ye.innerHTML=Qn,Ut=a(),Te=m("p"),Te.textContent=Yn,jt=a(),ve=m("p"),ve.textContent=Sn,Ct=a(),we=m("p"),we.innerHTML=Ln,Ft=a(),ke=m("ul"),ke.innerHTML=Pn,zt=a(),Ve=m("p"),Ve.innerHTML=On,Wt=a(),h(Je.$$.fragment),xt=a(),h(Be.$$.fragment),$t=a(),z=m("div"),h(Ue.$$.fragment),Pt=a(),Se=m("p"),Se.innerHTML=Dn,Ot=a(),Le=m("p"),Le.innerHTML=Kn,Dt=a(),h(te.$$.fragment),It=a(),h(je.$$.fragment),Zt=a(),k=m("div"),h(Ce.$$.fragment),Kt=a(),Pe=m("p"),Pe.innerHTML=eo,en=a(),Oe=m("p"),Oe.innerHTML=to,tn=a(),De=m("p"),De.innerHTML=no,nn=a(),G=m("div"),h(Fe.$$.fragment),on=a(),Ke=m("p"),Ke.innerHTML=oo,sn=a(),h(ne.$$.fragment),an=a(),h(oe.$$.fragment),Rt=a(),h(ze.$$.fragment),Xt=a(),V=m("div"),h(We.$$.fragment),rn=a(),et=m("p"),et.innerHTML=so,ln=a(),tt=m("p"),tt.innerHTML=ao,dn=a(),nt=m("p"),nt.innerHTML=ro,cn=a(),q=m("div"),h(xe.$$.fragment),mn=a(),ot=m("p"),ot.innerHTML=io,pn=a(),h(se.$$.fragment),un=a(),h(ae.$$.fragment),Nt=a(),h($e.$$.fragment),Gt=a(),J=m("div"),h(Ie.$$.fragment),hn=a(),st=m("p"),st.textContent=lo,fn=a(),at=m("p"),at.innerHTML=co,gn=a(),rt=m("p"),rt.innerHTML=mo,_n=a(),H=m("div"),h(Ze.$$.fragment),bn=a(),it=m("p"),it.innerHTML=po,Mn=a(),h(re.$$.fragment),yn=a(),h(ie.$$.fragment),qt=a(),h(Re.$$.fragment),Ht=a(),B=m("div"),h(Xe.$$.fragment),Tn=a(),lt=m("p"),lt.textContent=uo,vn=a(),dt=m("p"),dt.innerHTML=ho,wn=a(),ct=m("p"),ct.innerHTML=fo,kn=a(),A=m("div"),h(Ne.$$.fragment),Vn=a(),mt=m("p"),mt.innerHTML=go,Jn=a(),h(le.$$.fragment),Bn=a(),h(de.$$.fragment),At=a(),h(Ge.$$.fragment),Et=a(),U=m("div"),h(qe.$$.fragment),Un=a(),pt=m("p"),pt.textContent=_o,jn=a(),ut=m("p"),ut.innerHTML=bo,Cn=a(),ht=m("p"),ht.innerHTML=Mo,Fn=a(),E=m("div"),h(He.$$.fragment),zn=a(),ft=m("p"),ft.innerHTML=yo,Wn=a(),h(ce.$$.fragment),xn=a(),h(me.$$.fragment),Qt=a(),h(Ae.$$.fragment),Yt=a(),j=m("div"),h(Ee.$$.fragment),$n=a(),gt=m("p"),gt.textContent=To,In=a(),_t=m("p"),_t.innerHTML=vo,Zn=a(),bt=m("p"),bt.innerHTML=wo,Rn=a(),Q=m("div"),h(Qe.$$.fragment),Xn=a(),Mt=m("p"),Mt.innerHTML=ko,Nn=a(),h(pe.$$.fragment),Gn=a(),h(ue.$$.fragment),St=a(),Tt=m("p"),this.h()},l(e){const o=jo("svelte-u9bgzb",document.head);t=p(o,"META",{name:!0,content:!0}),o.forEach(s),y=r(e),l=p(e,"P",{}),C(l).forEach(s),d=r(e),f(T.$$.fragment,e),n=r(e),f(v.$$.fragment,e),vt=r(e),fe=p(e,"P",{"data-svelte-h":!0}),u(fe)!=="svelte-tfmd3r"&&(fe.innerHTML=qn),wt=r(e),ge=p(e,"P",{"data-svelte-h":!0}),u(ge)!=="svelte-vfdo9a"&&(ge.textContent=Hn),kt=r(e),_e=p(e,"P",{"data-svelte-h":!0}),u(_e)!=="svelte-1txydnv"&&(_e.innerHTML=An),Vt=r(e),be=p(e,"P",{"data-svelte-h":!0}),u(be)!=="svelte-1d1xjnh"&&(be.innerHTML=En),Jt=r(e),f(Me.$$.fragment,e),Bt=r(e),ye=p(e,"OL",{"data-svelte-h":!0}),u(ye)!=="svelte-iyzz0g"&&(ye.innerHTML=Qn),Ut=r(e),Te=p(e,"P",{"data-svelte-h":!0}),u(Te)!=="svelte-iioag5"&&(Te.textContent=Yn),jt=r(e),ve=p(e,"P",{"data-svelte-h":!0}),u(ve)!=="svelte-icjdc3"&&(ve.textContent=Sn),Ct=r(e),we=p(e,"P",{"data-svelte-h":!0}),u(we)!=="svelte-zq4jwe"&&(we.innerHTML=Ln),Ft=r(e),ke=p(e,"UL",{"data-svelte-h":!0}),u(ke)!=="svelte-boj5tg"&&(ke.innerHTML=Pn),zt=r(e),Ve=p(e,"P",{"data-svelte-h":!0}),u(Ve)!=="svelte-1m808z8"&&(Ve.innerHTML=On),Wt=r(e),f(Je.$$.fragment,e),xt=r(e),f(Be.$$.fragment,e),$t=r(e),z=p(e,"DIV",{class:!0});var Y=C(z);f(Ue.$$.fragment,Y),Pt=r(Y),Se=p(Y,"P",{"data-svelte-h":!0}),u(Se)!=="svelte-mfsfa1"&&(Se.innerHTML=Dn),Ot=r(Y),Le=p(Y,"P",{"data-svelte-h":!0}),u(Le)!=="svelte-o55m63"&&(Le.innerHTML=Kn),Dt=r(Y),f(te.$$.fragment,Y),Y.forEach(s),It=r(e),f(je.$$.fragment,e),Zt=r(e),k=p(e,"DIV",{class:!0});var W=C(k);f(Ce.$$.fragment,W),Kt=r(W),Pe=p(W,"P",{"data-svelte-h":!0}),u(Pe)!=="svelte-1mgndy2"&&(Pe.innerHTML=eo),en=r(W),Oe=p(W,"P",{"data-svelte-h":!0}),u(Oe)!=="svelte-hswkmf"&&(Oe.innerHTML=to),tn=r(W),De=p(W,"P",{"data-svelte-h":!0}),u(De)!=="svelte-1araf9a"&&(De.innerHTML=no),nn=r(W),G=p(W,"DIV",{class:!0});var S=C(G);f(Fe.$$.fragment,S),on=r(S),Ke=p(S,"P",{"data-svelte-h":!0}),u(Ke)!=="svelte-1cnuc35"&&(Ke.innerHTML=oo),sn=r(S),f(ne.$$.fragment,S),an=r(S),f(oe.$$.fragment,S),S.forEach(s),W.forEach(s),Rt=r(e),f(ze.$$.fragment,e),Xt=r(e),V=p(e,"DIV",{class:!0});var x=C(V);f(We.$$.fragment,x),rn=r(x),et=p(x,"P",{"data-svelte-h":!0}),u(et)!=="svelte-izdyyc"&&(et.innerHTML=so),ln=r(x),tt=p(x,"P",{"data-svelte-h":!0}),u(tt)!=="svelte-6pahdo"&&(tt.innerHTML=ao),dn=r(x),nt=p(x,"P",{"data-svelte-h":!0}),u(nt)!=="svelte-hswkmf"&&(nt.innerHTML=ro),cn=r(x),q=p(x,"DIV",{class:!0});var L=C(q);f(xe.$$.fragment,L),mn=r(L),ot=p(L,"P",{"data-svelte-h":!0}),u(ot)!=="svelte-156au53"&&(ot.innerHTML=io),pn=r(L),f(se.$$.fragment,L),un=r(L),f(ae.$$.fragment,L),L.forEach(s),x.forEach(s),Nt=r(e),f($e.$$.fragment,e),Gt=r(e),J=p(e,"DIV",{class:!0});var $=C(J);f(Ie.$$.fragment,$),hn=r($),st=p($,"P",{"data-svelte-h":!0}),u(st)!=="svelte-1kebopj"&&(st.textContent=lo),fn=r($),at=p($,"P",{"data-svelte-h":!0}),u(at)!=="svelte-6pahdo"&&(at.innerHTML=co),gn=r($),rt=p($,"P",{"data-svelte-h":!0}),u(rt)!=="svelte-hswkmf"&&(rt.innerHTML=mo),_n=r($),H=p($,"DIV",{class:!0});var P=C(H);f(Ze.$$.fragment,P),bn=r(P),it=p(P,"P",{"data-svelte-h":!0}),u(it)!=="svelte-152j4cl"&&(it.innerHTML=po),Mn=r(P),f(re.$$.fragment,P),yn=r(P),f(ie.$$.fragment,P),P.forEach(s),$.forEach(s),qt=r(e),f(Re.$$.fragment,e),Ht=r(e),B=p(e,"DIV",{class:!0});var I=C(B);f(Xe.$$.fragment,I),Tn=r(I),lt=p(I,"P",{"data-svelte-h":!0}),u(lt)!=="svelte-11n5saq"&&(lt.textContent=uo),vn=r(I),dt=p(I,"P",{"data-svelte-h":!0}),u(dt)!=="svelte-6pahdo"&&(dt.innerHTML=ho),wn=r(I),ct=p(I,"P",{"data-svelte-h":!0}),u(ct)!=="svelte-hswkmf"&&(ct.innerHTML=fo),kn=r(I),A=p(I,"DIV",{class:!0});var O=C(A);f(Ne.$$.fragment,O),Vn=r(O),mt=p(O,"P",{"data-svelte-h":!0}),u(mt)!=="svelte-4jl09t"&&(mt.innerHTML=go),Jn=r(O),f(le.$$.fragment,O),Bn=r(O),f(de.$$.fragment,O),O.forEach(s),I.forEach(s),At=r(e),f(Ge.$$.fragment,e),Et=r(e),U=p(e,"DIV",{class:!0});var Z=C(U);f(qe.$$.fragment,Z),Un=r(Z),pt=p(Z,"P",{"data-svelte-h":!0}),u(pt)!=="svelte-15dl5em"&&(pt.textContent=_o),jn=r(Z),ut=p(Z,"P",{"data-svelte-h":!0}),u(ut)!=="svelte-6pahdo"&&(ut.innerHTML=bo),Cn=r(Z),ht=p(Z,"P",{"data-svelte-h":!0}),u(ht)!=="svelte-hswkmf"&&(ht.innerHTML=Mo),Fn=r(Z),E=p(Z,"DIV",{class:!0});var D=C(E);f(He.$$.fragment,D),zn=r(D),ft=p(D,"P",{"data-svelte-h":!0}),u(ft)!=="svelte-192lfph"&&(ft.innerHTML=yo),Wn=r(D),f(ce.$$.fragment,D),xn=r(D),f(me.$$.fragment,D),D.forEach(s),Z.forEach(s),Qt=r(e),f(Ae.$$.fragment,e),Yt=r(e),j=p(e,"DIV",{class:!0});var R=C(j);f(Ee.$$.fragment,R),$n=r(R),gt=p(R,"P",{"data-svelte-h":!0}),u(gt)!=="svelte-5zhgq1"&&(gt.textContent=To),In=r(R),_t=p(R,"P",{"data-svelte-h":!0}),u(_t)!=="svelte-6pahdo"&&(_t.innerHTML=vo),Zn=r(R),bt=p(R,"P",{"data-svelte-h":!0}),u(bt)!=="svelte-hswkmf"&&(bt.innerHTML=wo),Rn=r(R),Q=p(R,"DIV",{class:!0});var K=C(Q);f(Qe.$$.fragment,K),Xn=r(K),Mt=p(K,"P",{"data-svelte-h":!0}),u(Mt)!=="svelte-1eja9x7"&&(Mt.innerHTML=ko),Nn=r(K),f(pe.$$.fragment,K),Gn=r(K),f(ue.$$.fragment,K),K.forEach(s),R.forEach(s),St=r(e),Tt=p(e,"P",{}),C(Tt).forEach(s),this.h()},h(){F(t,"name","hf:doc:metadata"),F(t,"content",Ao),F(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),F(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,o){i(document.head,t),c(e,y,o),c(e,l,o),c(e,d,o),g(T,e,o),c(e,n,o),g(v,e,o),c(e,vt,o),c(e,fe,o),c(e,wt,o),c(e,ge,o),c(e,kt,o),c(e,_e,o),c(e,Vt,o),c(e,be,o),c(e,Jt,o),g(Me,e,o),c(e,Bt,o),c(e,ye,o),c(e,Ut,o),c(e,Te,o),c(e,jt,o),c(e,ve,o),c(e,Ct,o),c(e,we,o),c(e,Ft,o),c(e,ke,o),c(e,zt,o),c(e,Ve,o),c(e,Wt,o),g(Je,e,o),c(e,xt,o),g(Be,e,o),c(e,$t,o),c(e,z,o),g(Ue,z,null),i(z,Pt),i(z,Se),i(z,Ot),i(z,Le),i(z,Dt),g(te,z,null),c(e,It,o),g(je,e,o),c(e,Zt,o),c(e,k,o),g(Ce,k,null),i(k,Kt),i(k,Pe),i(k,en),i(k,Oe),i(k,tn),i(k,De),i(k,nn),i(k,G),g(Fe,G,null),i(G,on),i(G,Ke),i(G,sn),g(ne,G,null),i(G,an),g(oe,G,null),c(e,Rt,o),g(ze,e,o),c(e,Xt,o),c(e,V,o),g(We,V,null),i(V,rn),i(V,et),i(V,ln),i(V,tt),i(V,dn),i(V,nt),i(V,cn),i(V,q),g(xe,q,null),i(q,mn),i(q,ot),i(q,pn),g(se,q,null),i(q,un),g(ae,q,null),c(e,Nt,o),g($e,e,o),c(e,Gt,o),c(e,J,o),g(Ie,J,null),i(J,hn),i(J,st),i(J,fn),i(J,at),i(J,gn),i(J,rt),i(J,_n),i(J,H),g(Ze,H,null),i(H,bn),i(H,it),i(H,Mn),g(re,H,null),i(H,yn),g(ie,H,null),c(e,qt,o),g(Re,e,o),c(e,Ht,o),c(e,B,o),g(Xe,B,null),i(B,Tn),i(B,lt),i(B,vn),i(B,dt),i(B,wn),i(B,ct),i(B,kn),i(B,A),g(Ne,A,null),i(A,Vn),i(A,mt),i(A,Jn),g(le,A,null),i(A,Bn),g(de,A,null),c(e,At,o),g(Ge,e,o),c(e,Et,o),c(e,U,o),g(qe,U,null),i(U,Un),i(U,pt),i(U,jn),i(U,ut),i(U,Cn),i(U,ht),i(U,Fn),i(U,E),g(He,E,null),i(E,zn),i(E,ft),i(E,Wn),g(ce,E,null),i(E,xn),g(me,E,null),c(e,Qt,o),g(Ae,e,o),c(e,Yt,o),c(e,j,o),g(Ee,j,null),i(j,$n),i(j,gt),i(j,In),i(j,_t),i(j,Zn),i(j,bt),i(j,Rn),i(j,Q),g(Qe,Q,null),i(Q,Xn),i(Q,Mt),i(Q,Nn),g(pe,Q,null),i(Q,Gn),g(ue,Q,null),c(e,St,o),c(e,Tt,o),Lt=!0},p(e,[o]){const Y={};o&2&&(Y.$$scope={dirty:o,ctx:e}),te.$set(Y);const W={};o&2&&(W.$$scope={dirty:o,ctx:e}),ne.$set(W);const S={};o&2&&(S.$$scope={dirty:o,ctx:e}),oe.$set(S);const x={};o&2&&(x.$$scope={dirty:o,ctx:e}),se.$set(x);const L={};o&2&&(L.$$scope={dirty:o,ctx:e}),ae.$set(L);const $={};o&2&&($.$$scope={dirty:o,ctx:e}),re.$set($);const P={};o&2&&(P.$$scope={dirty:o,ctx:e}),ie.$set(P);const I={};o&2&&(I.$$scope={dirty:o,ctx:e}),le.$set(I);const O={};o&2&&(O.$$scope={dirty:o,ctx:e}),de.$set(O);const Z={};o&2&&(Z.$$scope={dirty:o,ctx:e}),ce.$set(Z);const D={};o&2&&(D.$$scope={dirty:o,ctx:e}),me.$set(D);const R={};o&2&&(R.$$scope={dirty:o,ctx:e}),pe.$set(R);const K={};o&2&&(K.$$scope={dirty:o,ctx:e}),ue.$set(K)},i(e){Lt||(_(T.$$.fragment,e),_(v.$$.fragment,e),_(Me.$$.fragment,e),_(Je.$$.fragment,e),_(Be.$$.fragment,e),_(Ue.$$.fragment,e),_(te.$$.fragment,e),_(je.$$.fragment,e),_(Ce.$$.fragment,e),_(Fe.$$.fragment,e),_(ne.$$.fragment,e),_(oe.$$.fragment,e),_(ze.$$.fragment,e),_(We.$$.fragment,e),_(xe.$$.fragment,e),_(se.$$.fragment,e),_(ae.$$.fragment,e),_($e.$$.fragment,e),_(Ie.$$.fragment,e),_(Ze.$$.fragment,e),_(re.$$.fragment,e),_(ie.$$.fragment,e),_(Re.$$.fragment,e),_(Xe.$$.fragment,e),_(Ne.$$.fragment,e),_(le.$$.fragment,e),_(de.$$.fragment,e),_(Ge.$$.fragment,e),_(qe.$$.fragment,e),_(He.$$.fragment,e),_(ce.$$.fragment,e),_(me.$$.fragment,e),_(Ae.$$.fragment,e),_(Ee.$$.fragment,e),_(Qe.$$.fragment,e),_(pe.$$.fragment,e),_(ue.$$.fragment,e),Lt=!0)},o(e){b(T.$$.fragment,e),b(v.$$.fragment,e),b(Me.$$.fragment,e),b(Je.$$.fragment,e),b(Be.$$.fragment,e),b(Ue.$$.fragment,e),b(te.$$.fragment,e),b(je.$$.fragment,e),b(Ce.$$.fragment,e),b(Fe.$$.fragment,e),b(ne.$$.fragment,e),b(oe.$$.fragment,e),b(ze.$$.fragment,e),b(We.$$.fragment,e),b(xe.$$.fragment,e),b(se.$$.fragment,e),b(ae.$$.fragment,e),b($e.$$.fragment,e),b(Ie.$$.fragment,e),b(Ze.$$.fragment,e),b(re.$$.fragment,e),b(ie.$$.fragment,e),b(Re.$$.fragment,e),b(Xe.$$.fragment,e),b(Ne.$$.fragment,e),b(le.$$.fragment,e),b(de.$$.fragment,e),b(Ge.$$.fragment,e),b(qe.$$.fragment,e),b(He.$$.fragment,e),b(ce.$$.fragment,e),b(me.$$.fragment,e),b(Ae.$$.fragment,e),b(Ee.$$.fragment,e),b(Qe.$$.fragment,e),b(pe.$$.fragment,e),b(ue.$$.fragment,e),Lt=!1},d(e){e&&(s(y),s(l),s(d),s(n),s(vt),s(fe),s(wt),s(ge),s(kt),s(_e),s(Vt),s(be),s(Jt),s(Bt),s(ye),s(Ut),s(Te),s(jt),s(ve),s(Ct),s(we),s(Ft),s(ke),s(zt),s(Ve),s(Wt),s(xt),s($t),s(z),s(It),s(Zt),s(k),s(Rt),s(Xt),s(V),s(Nt),s(Gt),s(J),s(qt),s(Ht),s(B),s(At),s(Et),s(U),s(Qt),s(Yt),s(j),s(St),s(Tt)),s(t),M(T,e),M(v,e),M(Me,e),M(Je,e),M(Be,e),M(Ue),M(te),M(je,e),M(Ce),M(Fe),M(ne),M(oe),M(ze,e),M(We),M(xe),M(se),M(ae),M($e,e),M(Ie),M(Ze),M(re),M(ie),M(Re,e),M(Xe),M(Ne),M(le),M(de),M(Ge,e),M(qe),M(He),M(ce),M(me),M(Ae,e),M(Ee),M(Qe),M(pe),M(ue)}}}const Ao='{"title":"VisualBERT","local":"visualbert","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage tips","local":"usage-tips","sections":[],"depth":2},{"title":"VisualBertConfig","local":"transformers.VisualBertConfig","sections":[],"depth":2},{"title":"VisualBertModel","local":"transformers.VisualBertModel","sections":[],"depth":2},{"title":"VisualBertForPreTraining","local":"transformers.VisualBertForPreTraining","sections":[],"depth":2},{"title":"VisualBertForQuestionAnswering","local":"transformers.VisualBertForQuestionAnswering","sections":[],"depth":2},{"title":"VisualBertForMultipleChoice","local":"transformers.VisualBertForMultipleChoice","sections":[],"depth":2},{"title":"VisualBertForVisualReasoning","local":"transformers.VisualBertForVisualReasoning","sections":[],"depth":2},{"title":"VisualBertForRegionToPhraseAlignment","local":"transformers.VisualBertForRegionToPhraseAlignment","sections":[],"depth":2}],"depth":1}';function Eo(w){return Jo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ko extends Bo{constructor(t){super(),Uo(this,t,Eo,Ho,Vo,{})}}export{Ko as component};
