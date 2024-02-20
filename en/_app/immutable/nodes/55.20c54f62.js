import{s as Hs,o as Qs,n as k}from"../chunks/scheduler.9bc65507.js";import{S as Ys,i as As,g as c,s as r,r as _,A as Ds,h as d,f as l,c as i,j as x,u as M,x as h,k as G,y as a,a as u,v as b,d as y,t as T,w as j}from"../chunks/index.707bf1b6.js";import{T as ne}from"../chunks/Tip.c2ecdbf4.js";import{D as C}from"../chunks/Docstring.17db21ae.js";import{C as se}from"../chunks/CodeBlock.54a9f38d.js";import{E as te}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as Nn}from"../chunks/Heading.342b1fa6.js";function qs(w){let t,p=`A large number of these flags control the logits or the stopping criteria of the generation. Make sure you check
the <a href="https://huggingface.co/docs/transformers/internal/generation_utils" rel="nofollow">generate-related classes</a> for a full
description of the possible manipulations, as well as examples of their usage.`;return{c(){t=c("p"),t.innerHTML=p},l(o){t=d(o,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1lhagsi"&&(t.innerHTML=p)},m(o,s){u(o,t,s)},p:k,d(o){o&&l(t)}}}function Os(w){let t,p="Examples:",o,s,g;return s=new se({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEdlbmVyYXRpb25Db25maWclMEElMEElMjMlMjBEb3dubG9hZCUyMGNvbmZpZ3VyYXRpb24lMjBmcm9tJTIwaHVnZ2luZ2ZhY2UuY28lMjBhbmQlMjBjYWNoZS4lMEFnZW5lcmF0aW9uX2NvbmZpZyUyMCUzRCUyMEdlbmVyYXRpb25Db25maWcuZnJvbV9wcmV0cmFpbmVkKCUyMm9wZW5haS1jb21tdW5pdHklMkZncHQyJTIyKSUwQSUwQSUyMyUyMEUuZy4lMjBjb25maWclMjB3YXMlMjBzYXZlZCUyMHVzaW5nJTIwKnNhdmVfcHJldHJhaW5lZCgnLiUyRnRlc3QlMkZzYXZlZF9tb2RlbCUyRicpKiUwQWdlbmVyYXRpb25fY29uZmlnLnNhdmVfcHJldHJhaW5lZCglMjIuJTJGdGVzdCUyRnNhdmVkX21vZGVsJTJGJTIyKSUwQWdlbmVyYXRpb25fY29uZmlnJTIwJTNEJTIwR2VuZXJhdGlvbkNvbmZpZy5mcm9tX3ByZXRyYWluZWQoJTIyLiUyRnRlc3QlMkZzYXZlZF9tb2RlbCUyRiUyMiklMEElMEElMjMlMjBZb3UlMjBjYW4lMjBhbHNvJTIwc3BlY2lmeSUyMGNvbmZpZ3VyYXRpb24lMjBuYW1lcyUyMHRvJTIweW91ciUyMGdlbmVyYXRpb24lMjBjb25maWd1cmF0aW9uJTIwZmlsZSUwQWdlbmVyYXRpb25fY29uZmlnLnNhdmVfcHJldHJhaW5lZCglMjIuJTJGdGVzdCUyRnNhdmVkX21vZGVsJTJGJTIyJTJDJTIwY29uZmlnX2ZpbGVfbmFtZSUzRCUyMm15X2NvbmZpZ3VyYXRpb24uanNvbiUyMiklMEFnZW5lcmF0aW9uX2NvbmZpZyUyMCUzRCUyMEdlbmVyYXRpb25Db25maWcuZnJvbV9wcmV0cmFpbmVkKCUyMi4lMkZ0ZXN0JTJGc2F2ZWRfbW9kZWwlMkYlMjIlMkMlMjAlMjJteV9jb25maWd1cmF0aW9uLmpzb24lMjIpJTBBJTBBJTIzJTIwSWYlMjB5b3UnZCUyMGxpa2UlMjB0byUyMHRyeSUyMGElMjBtaW5vciUyMHZhcmlhdGlvbiUyMHRvJTIwYW4lMjBleGlzdGluZyUyMGNvbmZpZ3VyYXRpb24lMkMlMjB5b3UlMjBjYW4lMjBhbHNvJTIwcGFzcyUyMGdlbmVyYXRpb24lMEElMjMlMjBhcmd1bWVudHMlMjB0byUyMCU2MC5mcm9tX3ByZXRyYWluZWQoKSU2MC4lMjBCZSUyMG1pbmRmdWwlMjB0aGF0JTIwdHlwb3MlMjBhbmQlMjB1bnVzZWQlMjBhcmd1bWVudHMlMjB3aWxsJTIwYmUlMjBpZ25vcmVkJTBBZ2VuZXJhdGlvbl9jb25maWclMkMlMjB1bnVzZWRfa3dhcmdzJTIwJTNEJTIwR2VuZXJhdGlvbkNvbmZpZy5mcm9tX3ByZXRyYWluZWQoJTBBJTIwJTIwJTIwJTIwJTIyb3BlbmFpLWNvbW11bml0eSUyRmdwdDIlMjIlMkMlMjB0b3BfayUzRDElMkMlMjBmb28lM0RGYWxzZSUyQyUyMGRvX3NhbXBsZSUzRFRydWUlMkMlMjByZXR1cm5fdW51c2VkX2t3YXJncyUzRFRydWUlMEEpJTBBZ2VuZXJhdGlvbl9jb25maWcudG9wX2slMEElMEF1bnVzZWRfa3dhcmdz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GenerationConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Download configuration from huggingface.co and cache.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generation_config = GenerationConfig.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># E.g. config was saved using *save_pretrained(&#x27;./test/saved_model/&#x27;)*</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generation_config.save_pretrained(<span class="hljs-string">&quot;./test/saved_model/&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generation_config = GenerationConfig.from_pretrained(<span class="hljs-string">&quot;./test/saved_model/&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># You can also specify configuration names to your generation configuration file</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generation_config.save_pretrained(<span class="hljs-string">&quot;./test/saved_model/&quot;</span>, config_file_name=<span class="hljs-string">&quot;my_configuration.json&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generation_config = GenerationConfig.from_pretrained(<span class="hljs-string">&quot;./test/saved_model/&quot;</span>, <span class="hljs-string">&quot;my_configuration.json&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># If you&#x27;d like to try a minor variation to an existing configuration, you can also pass generation</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># arguments to \`.from_pretrained()\`. Be mindful that typos and unused arguments will be ignored</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>generation_config, unused_kwargs = GenerationConfig.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;openai-community/gpt2&quot;</span>, top_k=<span class="hljs-number">1</span>, foo=<span class="hljs-literal">False</span>, do_sample=<span class="hljs-literal">True</span>, return_unused_kwargs=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>generation_config.top_k
<span class="hljs-number">1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>unused_kwargs
{<span class="hljs-string">&#x27;foo&#x27;</span>: <span class="hljs-literal">False</span>}`,wrap:!1}}),{c(){t=c("p"),t.textContent=p,o=r(),_(s.$$.fragment)},l(n){t=d(n,"P",{"data-svelte-h":!0}),h(t)!=="svelte-kvfsh7"&&(t.textContent=p),o=i(n),M(s.$$.fragment,n)},m(n,f){u(n,t,f),u(n,o,f),b(s,n,f),g=!0},p:k,i(n){g||(y(s.$$.fragment,n),g=!0)},o(n){T(s.$$.fragment,n),g=!1},d(n){n&&(l(t),l(o)),j(s,n)}}}function Ps(w){let t,p=`Most generation-controlling parameters are set in <code>generation_config</code> which, if not passed, will be set to the
model’s default generation configuration. You can override any <code>generation_config</code> by passing the corresponding
parameters to generate(), e.g. <code>.generate(inputs, num_beams=4, do_sample=True)</code>.`,o,s,g=`For an overview of generation strategies and code examples, check out the <a href="../generation_strategies">following
guide</a>.`;return{c(){t=c("p"),t.innerHTML=p,o=r(),s=c("p"),s.innerHTML=g},l(n){t=d(n,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1c5u34l"&&(t.innerHTML=p),o=i(n),s=d(n,"P",{"data-svelte-h":!0}),h(s)!=="svelte-fvlq1g"&&(s.innerHTML=g)},m(n,f){u(n,t,f),u(n,o,f),u(n,s,f)},p:k,d(n){n&&(l(t),l(o),l(s))}}}function Ks(w){let t,p="Examples:",o,s,g;return s=new se({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEdQVDJUb2tlbml6ZXIlMkMlMjBBdXRvTW9kZWxGb3JDYXVzYWxMTSUwQWltcG9ydCUyMG51bXB5JTIwYXMlMjBucCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEdQVDJUb2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmdwdDIlMjIpJTBBbW9kZWwlMjAlM0QlMjBBdXRvTW9kZWxGb3JDYXVzYWxMTS5mcm9tX3ByZXRyYWluZWQoJTIyb3BlbmFpLWNvbW11bml0eSUyRmdwdDIlMjIpJTBBdG9rZW5pemVyLnBhZF90b2tlbl9pZCUyMCUzRCUyMHRva2VuaXplci5lb3NfdG9rZW5faWQlMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoJTVCJTIyVG9kYXklMjBpcyUyMiU1RCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBJTIzJTIwRXhhbXBsZSUyMDElM0ElMjBQcmludCUyMHRoZSUyMHNjb3JlcyUyMGZvciUyMGVhY2glMjB0b2tlbiUyMGdlbmVyYXRlZCUyMHdpdGglMjBHcmVlZHklMjBTZWFyY2glMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwuZ2VuZXJhdGUoKippbnB1dHMlMkMlMjBtYXhfbmV3X3Rva2VucyUzRDUlMkMlMjByZXR1cm5fZGljdF9pbl9nZW5lcmF0ZSUzRFRydWUlMkMlMjBvdXRwdXRfc2NvcmVzJTNEVHJ1ZSklMEF0cmFuc2l0aW9uX3Njb3JlcyUyMCUzRCUyMG1vZGVsLmNvbXB1dGVfdHJhbnNpdGlvbl9zY29yZXMoJTBBJTIwJTIwJTIwJTIwb3V0cHV0cy5zZXF1ZW5jZXMlMkMlMjBvdXRwdXRzLnNjb3JlcyUyQyUyMG5vcm1hbGl6ZV9sb2dpdHMlM0RUcnVlJTBBKSUwQSUyMyUyMGlucHV0X2xlbmd0aCUyMGlzJTIwdGhlJTIwbGVuZ3RoJTIwb2YlMjB0aGUlMjBpbnB1dCUyMHByb21wdCUyMGZvciUyMGRlY29kZXItb25seSUyMG1vZGVscyUyQyUyMGxpa2UlMjB0aGUlMjBHUFQlMjBmYW1pbHklMkMlMjBhbmQlMjAxJTIwZm9yJTBBJTIzJTIwZW5jb2Rlci1kZWNvZGVyJTIwbW9kZWxzJTJDJTIwbGlrZSUyMEJBUlQlMjBvciUyMFQ1LiUwQWlucHV0X2xlbmd0aCUyMCUzRCUyMDElMjBpZiUyMG1vZGVsLmNvbmZpZy5pc19lbmNvZGVyX2RlY29kZXIlMjBlbHNlJTIwaW5wdXRzLmlucHV0X2lkcy5zaGFwZSU1QjElNUQlMEFnZW5lcmF0ZWRfdG9rZW5zJTIwJTNEJTIwb3V0cHV0cy5zZXF1ZW5jZXMlNUIlM0ElMkMlMjBpbnB1dF9sZW5ndGglM0ElNUQlMEFmb3IlMjB0b2slMkMlMjBzY29yZSUyMGluJTIwemlwKGdlbmVyYXRlZF90b2tlbnMlNUIwJTVEJTJDJTIwdHJhbnNpdGlvbl9zY29yZXMlNUIwJTVEKSUzQSUwQSUyMCUyMCUyMCUyMCUyMyUyMCU3QyUyMHRva2VuJTIwJTdDJTIwdG9rZW4lMjBzdHJpbmclMjAlN0MlMjBsb2clMjBwcm9iYWJpbGl0eSUyMCU3QyUyMHByb2JhYmlsaXR5JTBBJTIwJTIwJTIwJTIwcHJpbnQoZiUyMiU3QyUyMCU3QnRvayUzQTVkJTdEJTIwJTdDJTIwJTdCdG9rZW5pemVyLmRlY29kZSh0b2spJTNBOHMlN0QlMjAlN0MlMjAlN0JzY29yZS5udW1weSgpJTNBLjNmJTdEJTIwJTdDJTIwJTdCbnAuZXhwKHNjb3JlLm51bXB5KCkpJTNBLjIlMjUlN0QlMjIpJTBBJTBBJTIzJTIwRXhhbXBsZSUyMDIlM0ElMjBSZWNvbnN0cnVjdCUyMHRoZSUyMHNlcXVlbmNlJTIwc2NvcmVzJTIwZnJvbSUyMEJlYW0lMjBTZWFyY2glMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwuZ2VuZXJhdGUoJTBBJTIwJTIwJTIwJTIwKippbnB1dHMlMkMlMEElMjAlMjAlMjAlMjBtYXhfbmV3X3Rva2VucyUzRDUlMkMlMEElMjAlMjAlMjAlMjBudW1fYmVhbXMlM0Q0JTJDJTBBJTIwJTIwJTIwJTIwbnVtX3JldHVybl9zZXF1ZW5jZXMlM0Q0JTJDJTBBJTIwJTIwJTIwJTIwcmV0dXJuX2RpY3RfaW5fZ2VuZXJhdGUlM0RUcnVlJTJDJTBBJTIwJTIwJTIwJTIwb3V0cHV0X3Njb3JlcyUzRFRydWUlMkMlMEEpJTBBdHJhbnNpdGlvbl9zY29yZXMlMjAlM0QlMjBtb2RlbC5jb21wdXRlX3RyYW5zaXRpb25fc2NvcmVzKCUwQSUyMCUyMCUyMCUyMG91dHB1dHMuc2VxdWVuY2VzJTJDJTIwb3V0cHV0cy5zY29yZXMlMkMlMjBvdXRwdXRzLmJlYW1faW5kaWNlcyUyQyUyMG5vcm1hbGl6ZV9sb2dpdHMlM0RGYWxzZSUwQSklMEElMjMlMjBJZiUyMHlvdSUyMHN1bSUyMHRoZSUyMGdlbmVyYXRlZCUyMHRva2VucyclMjBzY29yZXMlMjBhbmQlMjBhcHBseSUyMHRoZSUyMGxlbmd0aCUyMHBlbmFsdHklMkMlMjB5b3UnbGwlMjBnZXQlMjB0aGUlMjBzZXF1ZW5jZSUyMHNjb3Jlcy4lMEElMjMlMjBUaXAlMjAxJTNBJTIwcmVjb21wdXRpbmclMjB0aGUlMjBzY29yZXMlMjBpcyUyMG9ubHklMjBndWFyYW50ZWVkJTIwdG8lMjBtYXRjaCUyMHdpdGglMjAlNjBub3JtYWxpemVfbG9naXRzJTNERmFsc2UlNjAuJTIwRGVwZW5kaW5nJTIwb24lMjB0aGUlMEElMjMlMjB1c2UlMjBjYXNlJTJDJTIweW91JTIwbWlnaHQlMjB3YW50JTIwdG8lMjByZWNvbXB1dGUlMjBpdCUyMHdpdGglMjAlNjBub3JtYWxpemVfbG9naXRzJTNEVHJ1ZSU2MC4lMEElMjMlMjBUaXAlMjAyJTNBJTIwdGhlJTIwb3V0cHV0JTIwbGVuZ3RoJTIwZG9lcyUyME5PVCUyMGluY2x1ZGUlMjB0aGUlMjBpbnB1dCUyMGxlbmd0aCUwQW91dHB1dF9sZW5ndGglMjAlM0QlMjBucC5zdW0odHJhbnNpdGlvbl9zY29yZXMubnVtcHkoKSUyMCUzQyUyMDAlMkMlMjBheGlzJTNEMSklMEFsZW5ndGhfcGVuYWx0eSUyMCUzRCUyMG1vZGVsLmdlbmVyYXRpb25fY29uZmlnLmxlbmd0aF9wZW5hbHR5JTBBcmVjb25zdHJ1Y3RlZF9zY29yZXMlMjAlM0QlMjB0cmFuc2l0aW9uX3Njb3Jlcy5zdW0oYXhpcyUzRDEpJTIwJTJGJTIwKG91dHB1dF9sZW5ndGgqKmxlbmd0aF9wZW5hbHR5KSUwQXByaW50KG5wLmFsbGNsb3NlKG91dHB1dHMuc2VxdWVuY2VzX3Njb3JlcyUyQyUyMHJlY29uc3RydWN0ZWRfc2NvcmVzKSk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, AutoModelForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.pad_token_id = tokenizer.eos_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;Today is&quot;</span>], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Example 1: Print the scores for each token generated with Greedy Search</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(**inputs, max_new_tokens=<span class="hljs-number">5</span>, return_dict_in_generate=<span class="hljs-literal">True</span>, output_scores=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>transition_scores = model.compute_transition_scores(
<span class="hljs-meta">... </span>    outputs.sequences, outputs.scores, normalize_logits=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># input_length is the length of the input prompt for decoder-only models, like the GPT family, and 1 for</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># encoder-decoder models, like BART or T5.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_length = <span class="hljs-number">1</span> <span class="hljs-keyword">if</span> model.config.is_encoder_decoder <span class="hljs-keyword">else</span> inputs.input_ids.shape[<span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_tokens = outputs.sequences[:, input_length:]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> tok, score <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(generated_tokens[<span class="hljs-number">0</span>], transition_scores[<span class="hljs-number">0</span>]):
<span class="hljs-meta">... </span>    <span class="hljs-comment"># | token | token string | log probability | probability</span>
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;| <span class="hljs-subst">{tok:5d}</span> | <span class="hljs-subst">{tokenizer.decode(tok):8s}</span> | <span class="hljs-subst">{score.numpy():<span class="hljs-number">.3</span>f}</span> | <span class="hljs-subst">{np.exp(score.numpy()):<span class="hljs-number">.2</span>%}</span>&quot;</span>)
|   <span class="hljs-number">262</span> |  the     | -<span class="hljs-number">1.414</span> | <span class="hljs-number">24.33</span>%
|  <span class="hljs-number">1110</span> |  day     | -<span class="hljs-number">2.609</span> | <span class="hljs-number">7.36</span>%
|   <span class="hljs-number">618</span> |  when    | -<span class="hljs-number">2.010</span> | <span class="hljs-number">13.40</span>%
|   <span class="hljs-number">356</span> |  we      | -<span class="hljs-number">1.859</span> | <span class="hljs-number">15.58</span>%
|   <span class="hljs-number">460</span> |  can     | -<span class="hljs-number">2.508</span> | <span class="hljs-number">8.14</span>%

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Example 2: Reconstruct the sequence scores from Beam Search</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(
<span class="hljs-meta">... </span>    **inputs,
<span class="hljs-meta">... </span>    max_new_tokens=<span class="hljs-number">5</span>,
<span class="hljs-meta">... </span>    num_beams=<span class="hljs-number">4</span>,
<span class="hljs-meta">... </span>    num_return_sequences=<span class="hljs-number">4</span>,
<span class="hljs-meta">... </span>    return_dict_in_generate=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    output_scores=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>transition_scores = model.compute_transition_scores(
<span class="hljs-meta">... </span>    outputs.sequences, outputs.scores, outputs.beam_indices, normalize_logits=<span class="hljs-literal">False</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># If you sum the generated tokens&#x27; scores and apply the length penalty, you&#x27;ll get the sequence scores.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Tip 1: recomputing the scores is only guaranteed to match with \`normalize_logits=False\`. Depending on the</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># use case, you might want to recompute it with \`normalize_logits=True\`.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Tip 2: the output length does NOT include the input length</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>output_length = np.<span class="hljs-built_in">sum</span>(transition_scores.numpy() &lt; <span class="hljs-number">0</span>, axis=<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>length_penalty = model.generation_config.length_penalty
<span class="hljs-meta">&gt;&gt;&gt; </span>reconstructed_scores = transition_scores.<span class="hljs-built_in">sum</span>(axis=<span class="hljs-number">1</span>) / (output_length**length_penalty)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(np.allclose(outputs.sequences_scores, reconstructed_scores))
<span class="hljs-literal">True</span>`,wrap:!1}}),{c(){t=c("p"),t.textContent=p,o=r(),_(s.$$.fragment)},l(n){t=d(n,"P",{"data-svelte-h":!0}),h(t)!=="svelte-kvfsh7"&&(t.textContent=p),o=i(n),M(s.$$.fragment,n)},m(n,f){u(n,t,f),u(n,o,f),b(s,n,f),g=!0},p:k,i(n){g||(y(s.$$.fragment,n),g=!0)},o(n){T(s.$$.fragment,n),g=!1},d(n){n&&(l(t),l(o)),j(s,n)}}}function eo(w){let t,p=`In most cases, you do not need to call <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationMixin.greedy_search">greedy_search()</a> directly. Use generate()
instead. For an overview of generation strategies and code examples, check the <a href="../generation_strategies">following
guide</a>.`;return{c(){t=c("p"),t.innerHTML=p},l(o){t=d(o,"P",{"data-svelte-h":!0}),h(t)!=="svelte-57n0x1"&&(t.innerHTML=p)},m(o,s){u(o,t,s)},p:k,d(o){o&&l(t)}}}function no(w){let t,p="Examples:",o,s,g;return s=new se({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMCglMEElMjAlMjAlMjAlMjBBdXRvVG9rZW5pemVyJTJDJTBBJTIwJTIwJTIwJTIwQXV0b01vZGVsRm9yQ2F1c2FsTE0lMkMlMEElMjAlMjAlMjAlMjBMb2dpdHNQcm9jZXNzb3JMaXN0JTJDJTBBJTIwJTIwJTIwJTIwTWluTGVuZ3RoTG9naXRzUHJvY2Vzc29yJTJDJTBBJTIwJTIwJTIwJTIwU3RvcHBpbmdDcml0ZXJpYUxpc3QlMkMlMEElMjAlMjAlMjAlMjBNYXhMZW5ndGhDcml0ZXJpYSUyQyUwQSklMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJvcGVuYWktY29tbXVuaXR5JTJGZ3B0MiUyMiklMEFtb2RlbCUyMCUzRCUyMEF1dG9Nb2RlbEZvckNhdXNhbExNLmZyb21fcHJldHJhaW5lZCglMjJvcGVuYWktY29tbXVuaXR5JTJGZ3B0MiUyMiklMEElMEElMjMlMjBzZXQlMjBwYWRfdG9rZW5faWQlMjB0byUyMGVvc190b2tlbl9pZCUyMGJlY2F1c2UlMjBHUFQyJTIwZG9lcyUyMG5vdCUyMGhhdmUlMjBhJTIwUEFEJTIwdG9rZW4lMEFtb2RlbC5nZW5lcmF0aW9uX2NvbmZpZy5wYWRfdG9rZW5faWQlMjAlM0QlMjBtb2RlbC5nZW5lcmF0aW9uX2NvbmZpZy5lb3NfdG9rZW5faWQlMEElMEFpbnB1dF9wcm9tcHQlMjAlM0QlMjAlMjJJdCUyMG1pZ2h0JTIwYmUlMjBwb3NzaWJsZSUyMHRvJTIyJTBBaW5wdXRfaWRzJTIwJTNEJTIwdG9rZW5pemVyKGlucHV0X3Byb21wdCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpLmlucHV0X2lkcyUwQSUwQSUyMyUyMGluc3RhbnRpYXRlJTIwbG9naXRzJTIwcHJvY2Vzc29ycyUwQWxvZ2l0c19wcm9jZXNzb3IlMjAlM0QlMjBMb2dpdHNQcm9jZXNzb3JMaXN0KCUwQSUyMCUyMCUyMCUyMCU1QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyME1pbkxlbmd0aExvZ2l0c1Byb2Nlc3NvcigxMCUyQyUyMGVvc190b2tlbl9pZCUzRG1vZGVsLmdlbmVyYXRpb25fY29uZmlnLmVvc190b2tlbl9pZCklMkMlMEElMjAlMjAlMjAlMjAlNUQlMEEpJTBBc3RvcHBpbmdfY3JpdGVyaWElMjAlM0QlMjBTdG9wcGluZ0NyaXRlcmlhTGlzdCglNUJNYXhMZW5ndGhDcml0ZXJpYShtYXhfbGVuZ3RoJTNEMjApJTVEKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbC5ncmVlZHlfc2VhcmNoKCUwQSUyMCUyMCUyMCUyMGlucHV0X2lkcyUyQyUyMGxvZ2l0c19wcm9jZXNzb3IlM0Rsb2dpdHNfcHJvY2Vzc29yJTJDJTIwc3RvcHBpbmdfY3JpdGVyaWElM0RzdG9wcGluZ19jcml0ZXJpYSUwQSklMEElMEF0b2tlbml6ZXIuYmF0Y2hfZGVjb2RlKG91dHB1dHMlMkMlMjBza2lwX3NwZWNpYWxfdG9rZW5zJTNEVHJ1ZSk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
<span class="hljs-meta">... </span>    AutoTokenizer,
<span class="hljs-meta">... </span>    AutoModelForCausalLM,
<span class="hljs-meta">... </span>    LogitsProcessorList,
<span class="hljs-meta">... </span>    MinLengthLogitsProcessor,
<span class="hljs-meta">... </span>    StoppingCriteriaList,
<span class="hljs-meta">... </span>    MaxLengthCriteria,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># set pad_token_id to eos_token_id because GPT2 does not have a PAD token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.generation_config.pad_token_id = model.generation_config.eos_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>input_prompt = <span class="hljs-string">&quot;It might be possible to&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(input_prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate logits processors</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_processor = LogitsProcessorList(
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        MinLengthLogitsProcessor(<span class="hljs-number">10</span>, eos_token_id=model.generation_config.eos_token_id),
<span class="hljs-meta">... </span>    ]
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>stopping_criteria = StoppingCriteriaList([MaxLengthCriteria(max_length=<span class="hljs-number">20</span>)])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.greedy_search(
<span class="hljs-meta">... </span>    input_ids, logits_processor=logits_processor, stopping_criteria=stopping_criteria
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&quot;It might be possible to get a better understanding of the nature of the problem, but it&#x27;s not&quot;</span>]`,wrap:!1}}),{c(){t=c("p"),t.textContent=p,o=r(),_(s.$$.fragment)},l(n){t=d(n,"P",{"data-svelte-h":!0}),h(t)!=="svelte-kvfsh7"&&(t.textContent=p),o=i(n),M(s.$$.fragment,n)},m(n,f){u(n,t,f),u(n,o,f),b(s,n,f),g=!0},p:k,i(n){g||(y(s.$$.fragment,n),g=!0)},o(n){T(s.$$.fragment,n),g=!1},d(n){n&&(l(t),l(o)),j(s,n)}}}function to(w){let t,p=`In most cases, you do not need to call <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationMixin.sample">sample()</a> directly. Use generate() instead.
For an overview of generation strategies and code examples, check the <a href="../generation_strategies">following
guide</a>.`;return{c(){t=c("p"),t.innerHTML=p},l(o){t=d(o,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1c7ju71"&&(t.innerHTML=p)},m(o,s){u(o,t,s)},p:k,d(o){o&&l(t)}}}function so(w){let t,p="Examples:",o,s,g;return s=new se({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMCglMEElMjAlMjAlMjAlMjBBdXRvVG9rZW5pemVyJTJDJTBBJTIwJTIwJTIwJTIwQXV0b01vZGVsRm9yQ2F1c2FsTE0lMkMlMEElMjAlMjAlMjAlMjBMb2dpdHNQcm9jZXNzb3JMaXN0JTJDJTBBJTIwJTIwJTIwJTIwTWluTGVuZ3RoTG9naXRzUHJvY2Vzc29yJTJDJTBBJTIwJTIwJTIwJTIwVG9wS0xvZ2l0c1dhcnBlciUyQyUwQSUyMCUyMCUyMCUyMFRlbXBlcmF0dXJlTG9naXRzV2FycGVyJTJDJTBBJTIwJTIwJTIwJTIwU3RvcHBpbmdDcml0ZXJpYUxpc3QlMkMlMEElMjAlMjAlMjAlMjBNYXhMZW5ndGhDcml0ZXJpYSUyQyUwQSklMEFpbXBvcnQlMjB0b3JjaCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMm9wZW5haS1jb21tdW5pdHklMkZncHQyJTIyKSUwQW1vZGVsJTIwJTNEJTIwQXV0b01vZGVsRm9yQ2F1c2FsTE0uZnJvbV9wcmV0cmFpbmVkKCUyMm9wZW5haS1jb21tdW5pdHklMkZncHQyJTIyKSUwQSUwQSUyMyUyMHNldCUyMHBhZF90b2tlbl9pZCUyMHRvJTIwZW9zX3Rva2VuX2lkJTIwYmVjYXVzZSUyMEdQVDIlMjBkb2VzJTIwbm90JTIwaGF2ZSUyMGElMjBFT1MlMjB0b2tlbiUwQW1vZGVsLmNvbmZpZy5wYWRfdG9rZW5faWQlMjAlM0QlMjBtb2RlbC5jb25maWcuZW9zX3Rva2VuX2lkJTBBbW9kZWwuZ2VuZXJhdGlvbl9jb25maWcucGFkX3Rva2VuX2lkJTIwJTNEJTIwbW9kZWwuY29uZmlnLmVvc190b2tlbl9pZCUwQSUwQWlucHV0X3Byb21wdCUyMCUzRCUyMCUyMlRvZGF5JTIwaXMlMjBhJTIwYmVhdXRpZnVsJTIwZGF5JTJDJTIwYW5kJTIyJTBBaW5wdXRfaWRzJTIwJTNEJTIwdG9rZW5pemVyKGlucHV0X3Byb21wdCUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpLmlucHV0X2lkcyUwQSUwQSUyMyUyMGluc3RhbnRpYXRlJTIwbG9naXRzJTIwcHJvY2Vzc29ycyUwQWxvZ2l0c19wcm9jZXNzb3IlMjAlM0QlMjBMb2dpdHNQcm9jZXNzb3JMaXN0KCUwQSUyMCUyMCUyMCUyMCU1QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyME1pbkxlbmd0aExvZ2l0c1Byb2Nlc3NvcigxNSUyQyUyMGVvc190b2tlbl9pZCUzRG1vZGVsLmdlbmVyYXRpb25fY29uZmlnLmVvc190b2tlbl9pZCklMkMlMEElMjAlMjAlMjAlMjAlNUQlMEEpJTBBJTIzJTIwaW5zdGFudGlhdGUlMjBsb2dpdHMlMjBwcm9jZXNzb3JzJTBBbG9naXRzX3dhcnBlciUyMCUzRCUyMExvZ2l0c1Byb2Nlc3Nvckxpc3QoJTBBJTIwJTIwJTIwJTIwJTVCJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwVG9wS0xvZ2l0c1dhcnBlcig1MCklMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBUZW1wZXJhdHVyZUxvZ2l0c1dhcnBlcigwLjcpJTJDJTBBJTIwJTIwJTIwJTIwJTVEJTBBKSUwQSUwQXN0b3BwaW5nX2NyaXRlcmlhJTIwJTNEJTIwU3RvcHBpbmdDcml0ZXJpYUxpc3QoJTVCTWF4TGVuZ3RoQ3JpdGVyaWEobWF4X2xlbmd0aCUzRDIwKSU1RCklMEElMEF0b3JjaC5tYW51YWxfc2VlZCgwKSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbC5zYW1wbGUoJTBBJTIwJTIwJTIwJTIwaW5wdXRfaWRzJTJDJTBBJTIwJTIwJTIwJTIwbG9naXRzX3Byb2Nlc3NvciUzRGxvZ2l0c19wcm9jZXNzb3IlMkMlMEElMjAlMjAlMjAlMjBsb2dpdHNfd2FycGVyJTNEbG9naXRzX3dhcnBlciUyQyUwQSUyMCUyMCUyMCUyMHN0b3BwaW5nX2NyaXRlcmlhJTNEc3RvcHBpbmdfY3JpdGVyaWElMkMlMEEpJTBBJTBBdG9rZW5pemVyLmJhdGNoX2RlY29kZShvdXRwdXRzJTJDJTIwc2tpcF9zcGVjaWFsX3Rva2VucyUzRFRydWUp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
<span class="hljs-meta">... </span>    AutoTokenizer,
<span class="hljs-meta">... </span>    AutoModelForCausalLM,
<span class="hljs-meta">... </span>    LogitsProcessorList,
<span class="hljs-meta">... </span>    MinLengthLogitsProcessor,
<span class="hljs-meta">... </span>    TopKLogitsWarper,
<span class="hljs-meta">... </span>    TemperatureLogitsWarper,
<span class="hljs-meta">... </span>    StoppingCriteriaList,
<span class="hljs-meta">... </span>    MaxLengthCriteria,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># set pad_token_id to eos_token_id because GPT2 does not have a EOS token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = model.config.eos_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>model.generation_config.pad_token_id = model.config.eos_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span>input_prompt = <span class="hljs-string">&quot;Today is a beautiful day, and&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(input_prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate logits processors</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_processor = LogitsProcessorList(
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        MinLengthLogitsProcessor(<span class="hljs-number">15</span>, eos_token_id=model.generation_config.eos_token_id),
<span class="hljs-meta">... </span>    ]
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate logits processors</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_warper = LogitsProcessorList(
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        TopKLogitsWarper(<span class="hljs-number">50</span>),
<span class="hljs-meta">... </span>        TemperatureLogitsWarper(<span class="hljs-number">0.7</span>),
<span class="hljs-meta">... </span>    ]
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>stopping_criteria = StoppingCriteriaList([MaxLengthCriteria(max_length=<span class="hljs-number">20</span>)])

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.sample(
<span class="hljs-meta">... </span>    input_ids,
<span class="hljs-meta">... </span>    logits_processor=logits_processor,
<span class="hljs-meta">... </span>    logits_warper=logits_warper,
<span class="hljs-meta">... </span>    stopping_criteria=stopping_criteria,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&#x27;Today is a beautiful day, and we must do everything possible to make it a day of celebration.&#x27;</span>]`,wrap:!1}}),{c(){t=c("p"),t.textContent=p,o=r(),_(s.$$.fragment)},l(n){t=d(n,"P",{"data-svelte-h":!0}),h(t)!=="svelte-kvfsh7"&&(t.textContent=p),o=i(n),M(s.$$.fragment,n)},m(n,f){u(n,t,f),u(n,o,f),b(s,n,f),g=!0},p:k,i(n){g||(y(s.$$.fragment,n),g=!0)},o(n){T(s.$$.fragment,n),g=!1},d(n){n&&(l(t),l(o)),j(s,n)}}}function oo(w){let t,p=`In most cases, you do not need to call <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationMixin.beam_search">beam_search()</a> directly. Use generate()
instead. For an overview of generation strategies and code examples, check the <a href="../generation_strategies">following
guide</a>.`;return{c(){t=c("p"),t.innerHTML=p},l(o){t=d(o,"P",{"data-svelte-h":!0}),h(t)!=="svelte-erhhd5"&&(t.innerHTML=p)},m(o,s){u(o,t,s)},p:k,d(o){o&&l(t)}}}function ao(w){let t,p="Examples:",o,s,g;return s=new se({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMCglMEElMjAlMjAlMjAlMjBBdXRvVG9rZW5pemVyJTJDJTBBJTIwJTIwJTIwJTIwQXV0b01vZGVsRm9yU2VxMlNlcUxNJTJDJTBBJTIwJTIwJTIwJTIwTG9naXRzUHJvY2Vzc29yTGlzdCUyQyUwQSUyMCUyMCUyMCUyME1pbkxlbmd0aExvZ2l0c1Byb2Nlc3NvciUyQyUwQSUyMCUyMCUyMCUyMEJlYW1TZWFyY2hTY29yZXIlMkMlMEEpJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUtdDUlMkZ0NS1iYXNlJTIyKSUwQW1vZGVsJTIwJTNEJTIwQXV0b01vZGVsRm9yU2VxMlNlcUxNLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUtdDUlMkZ0NS1iYXNlJTIyKSUwQSUwQWVuY29kZXJfaW5wdXRfc3RyJTIwJTNEJTIwJTIydHJhbnNsYXRlJTIwRW5nbGlzaCUyMHRvJTIwR2VybWFuJTNBJTIwSG93JTIwb2xkJTIwYXJlJTIweW91JTNGJTIyJTBBZW5jb2Rlcl9pbnB1dF9pZHMlMjAlM0QlMjB0b2tlbml6ZXIoZW5jb2Rlcl9pbnB1dF9zdHIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKS5pbnB1dF9pZHMlMEElMEElMEElMjMlMjBsZXRzJTIwcnVuJTIwYmVhbSUyMHNlYXJjaCUyMHVzaW5nJTIwMyUyMGJlYW1zJTBBbnVtX2JlYW1zJTIwJTNEJTIwMyUwQSUyMyUyMGRlZmluZSUyMGRlY29kZXIlMjBzdGFydCUyMHRva2VuJTIwaWRzJTBBaW5wdXRfaWRzJTIwJTNEJTIwdG9yY2gub25lcygobnVtX2JlYW1zJTJDJTIwMSklMkMlMjBkZXZpY2UlM0Rtb2RlbC5kZXZpY2UlMkMlMjBkdHlwZSUzRHRvcmNoLmxvbmcpJTBBaW5wdXRfaWRzJTIwJTNEJTIwaW5wdXRfaWRzJTIwKiUyMG1vZGVsLmNvbmZpZy5kZWNvZGVyX3N0YXJ0X3Rva2VuX2lkJTBBJTBBJTIzJTIwYWRkJTIwZW5jb2Rlcl9vdXRwdXRzJTIwdG8lMjBtb2RlbCUyMGtleXdvcmQlMjBhcmd1bWVudHMlMEFtb2RlbF9rd2FyZ3MlMjAlM0QlMjAlN0IlMEElMjAlMjAlMjAlMjAlMjJlbmNvZGVyX291dHB1dHMlMjIlM0ElMjBtb2RlbC5nZXRfZW5jb2RlcigpKCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMGVuY29kZXJfaW5wdXRfaWRzLnJlcGVhdF9pbnRlcmxlYXZlKG51bV9iZWFtcyUyQyUyMGRpbSUzRDApJTJDJTIwcmV0dXJuX2RpY3QlM0RUcnVlJTBBJTIwJTIwJTIwJTIwKSUwQSU3RCUwQSUwQSUyMyUyMGluc3RhbnRpYXRlJTIwYmVhbSUyMHNjb3JlciUwQWJlYW1fc2NvcmVyJTIwJTNEJTIwQmVhbVNlYXJjaFNjb3JlciglMEElMjAlMjAlMjAlMjBiYXRjaF9zaXplJTNEMSUyQyUwQSUyMCUyMCUyMCUyMG51bV9iZWFtcyUzRG51bV9iZWFtcyUyQyUwQSUyMCUyMCUyMCUyMGRldmljZSUzRG1vZGVsLmRldmljZSUyQyUwQSklMEElMEElMjMlMjBpbnN0YW50aWF0ZSUyMGxvZ2l0cyUyMHByb2Nlc3NvcnMlMEFsb2dpdHNfcHJvY2Vzc29yJTIwJTNEJTIwTG9naXRzUHJvY2Vzc29yTGlzdCglMEElMjAlMjAlMjAlMjAlNUIlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBNaW5MZW5ndGhMb2dpdHNQcm9jZXNzb3IoNSUyQyUyMGVvc190b2tlbl9pZCUzRG1vZGVsLmNvbmZpZy5lb3NfdG9rZW5faWQpJTJDJTBBJTIwJTIwJTIwJTIwJTVEJTBBKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbC5iZWFtX3NlYXJjaChpbnB1dF9pZHMlMkMlMjBiZWFtX3Njb3JlciUyQyUyMGxvZ2l0c19wcm9jZXNzb3IlM0Rsb2dpdHNfcHJvY2Vzc29yJTJDJTIwKiptb2RlbF9rd2FyZ3MpJTBBJTBBdG9rZW5pemVyLmJhdGNoX2RlY29kZShvdXRwdXRzJTJDJTIwc2tpcF9zcGVjaWFsX3Rva2VucyUzRFRydWUp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
<span class="hljs-meta">... </span>    AutoTokenizer,
<span class="hljs-meta">... </span>    AutoModelForSeq2SeqLM,
<span class="hljs-meta">... </span>    LogitsProcessorList,
<span class="hljs-meta">... </span>    MinLengthLogitsProcessor,
<span class="hljs-meta">... </span>    BeamSearchScorer,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_input_str = <span class="hljs-string">&quot;translate English to German: How old are you?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_input_ids = tokenizer(encoder_input_str, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># lets run beam search using 3 beams</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_beams = <span class="hljs-number">3</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># define decoder start token ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.ones((num_beams, <span class="hljs-number">1</span>), device=model.device, dtype=torch.long)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = input_ids * model.config.decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add encoder_outputs to model keyword arguments</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_kwargs = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;encoder_outputs&quot;</span>: model.get_encoder()(
<span class="hljs-meta">... </span>        encoder_input_ids.repeat_interleave(num_beams, dim=<span class="hljs-number">0</span>), return_dict=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>    )
<span class="hljs-meta">... </span>}

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate beam scorer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>beam_scorer = BeamSearchScorer(
<span class="hljs-meta">... </span>    batch_size=<span class="hljs-number">1</span>,
<span class="hljs-meta">... </span>    num_beams=num_beams,
<span class="hljs-meta">... </span>    device=model.device,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate logits processors</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_processor = LogitsProcessorList(
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        MinLengthLogitsProcessor(<span class="hljs-number">5</span>, eos_token_id=model.config.eos_token_id),
<span class="hljs-meta">... </span>    ]
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.beam_search(input_ids, beam_scorer, logits_processor=logits_processor, **model_kwargs)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&#x27;Wie alt bist du?&#x27;</span>]`,wrap:!1}}),{c(){t=c("p"),t.textContent=p,o=r(),_(s.$$.fragment)},l(n){t=d(n,"P",{"data-svelte-h":!0}),h(t)!=="svelte-kvfsh7"&&(t.textContent=p),o=i(n),M(s.$$.fragment,n)},m(n,f){u(n,t,f),u(n,o,f),b(s,n,f),g=!0},p:k,i(n){g||(y(s.$$.fragment,n),g=!0)},o(n){T(s.$$.fragment,n),g=!1},d(n){n&&(l(t),l(o)),j(s,n)}}}function ro(w){let t,p=`In most cases, you do not need to call <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationMixin.beam_sample">beam_sample()</a> directly. Use generate()
instead. For an overview of generation strategies and code examples, check the <a href="../generation_strategies">following
guide</a>.`;return{c(){t=c("p"),t.innerHTML=p},l(o){t=d(o,"P",{"data-svelte-h":!0}),h(t)!=="svelte-4qftb1"&&(t.innerHTML=p)},m(o,s){u(o,t,s)},p:k,d(o){o&&l(t)}}}function io(w){let t,p="Examples:",o,s,g;return s=new se({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMCglMEElMjAlMjAlMjAlMjBBdXRvVG9rZW5pemVyJTJDJTBBJTIwJTIwJTIwJTIwQXV0b01vZGVsRm9yU2VxMlNlcUxNJTJDJTBBJTIwJTIwJTIwJTIwTG9naXRzUHJvY2Vzc29yTGlzdCUyQyUwQSUyMCUyMCUyMCUyME1pbkxlbmd0aExvZ2l0c1Byb2Nlc3NvciUyQyUwQSUyMCUyMCUyMCUyMFRvcEtMb2dpdHNXYXJwZXIlMkMlMEElMjAlMjAlMjAlMjBUZW1wZXJhdHVyZUxvZ2l0c1dhcnBlciUyQyUwQSUyMCUyMCUyMCUyMEJlYW1TZWFyY2hTY29yZXIlMkMlMEEpJTBBaW1wb3J0JTIwdG9yY2glMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUtdDUlMkZ0NS1iYXNlJTIyKSUwQW1vZGVsJTIwJTNEJTIwQXV0b01vZGVsRm9yU2VxMlNlcUxNLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUtdDUlMkZ0NS1iYXNlJTIyKSUwQSUwQWVuY29kZXJfaW5wdXRfc3RyJTIwJTNEJTIwJTIydHJhbnNsYXRlJTIwRW5nbGlzaCUyMHRvJTIwR2VybWFuJTNBJTIwSG93JTIwb2xkJTIwYXJlJTIweW91JTNGJTIyJTBBZW5jb2Rlcl9pbnB1dF9pZHMlMjAlM0QlMjB0b2tlbml6ZXIoZW5jb2Rlcl9pbnB1dF9zdHIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKS5pbnB1dF9pZHMlMEElMEElMjMlMjBsZXRzJTIwcnVuJTIwYmVhbSUyMHNlYXJjaCUyMHVzaW5nJTIwMyUyMGJlYW1zJTBBbnVtX2JlYW1zJTIwJTNEJTIwMyUwQSUyMyUyMGRlZmluZSUyMGRlY29kZXIlMjBzdGFydCUyMHRva2VuJTIwaWRzJTBBaW5wdXRfaWRzJTIwJTNEJTIwdG9yY2gub25lcygobnVtX2JlYW1zJTJDJTIwMSklMkMlMjBkZXZpY2UlM0Rtb2RlbC5kZXZpY2UlMkMlMjBkdHlwZSUzRHRvcmNoLmxvbmcpJTBBaW5wdXRfaWRzJTIwJTNEJTIwaW5wdXRfaWRzJTIwKiUyMG1vZGVsLmNvbmZpZy5kZWNvZGVyX3N0YXJ0X3Rva2VuX2lkJTBBJTBBJTIzJTIwYWRkJTIwZW5jb2Rlcl9vdXRwdXRzJTIwdG8lMjBtb2RlbCUyMGtleXdvcmQlMjBhcmd1bWVudHMlMEFtb2RlbF9rd2FyZ3MlMjAlM0QlMjAlN0IlMEElMjAlMjAlMjAlMjAlMjJlbmNvZGVyX291dHB1dHMlMjIlM0ElMjBtb2RlbC5nZXRfZW5jb2RlcigpKCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMGVuY29kZXJfaW5wdXRfaWRzLnJlcGVhdF9pbnRlcmxlYXZlKG51bV9iZWFtcyUyQyUyMGRpbSUzRDApJTJDJTIwcmV0dXJuX2RpY3QlM0RUcnVlJTBBJTIwJTIwJTIwJTIwKSUwQSU3RCUwQSUwQSUyMyUyMGluc3RhbnRpYXRlJTIwYmVhbSUyMHNjb3JlciUwQWJlYW1fc2NvcmVyJTIwJTNEJTIwQmVhbVNlYXJjaFNjb3JlciglMEElMjAlMjAlMjAlMjBiYXRjaF9zaXplJTNEMSUyQyUwQSUyMCUyMCUyMCUyMG1heF9sZW5ndGglM0Rtb2RlbC5jb25maWcubWF4X2xlbmd0aCUyQyUwQSUyMCUyMCUyMCUyMG51bV9iZWFtcyUzRG51bV9iZWFtcyUyQyUwQSUyMCUyMCUyMCUyMGRldmljZSUzRG1vZGVsLmRldmljZSUyQyUwQSklMEElMEElMjMlMjBpbnN0YW50aWF0ZSUyMGxvZ2l0cyUyMHByb2Nlc3NvcnMlMEFsb2dpdHNfcHJvY2Vzc29yJTIwJTNEJTIwTG9naXRzUHJvY2Vzc29yTGlzdCglMEElMjAlMjAlMjAlMjAlNUJNaW5MZW5ndGhMb2dpdHNQcm9jZXNzb3IoNSUyQyUyMGVvc190b2tlbl9pZCUzRG1vZGVsLmNvbmZpZy5lb3NfdG9rZW5faWQpJTVEJTBBKSUwQSUyMyUyMGluc3RhbnRpYXRlJTIwbG9naXRzJTIwcHJvY2Vzc29ycyUwQWxvZ2l0c193YXJwZXIlMjAlM0QlMjBMb2dpdHNQcm9jZXNzb3JMaXN0KCUwQSUyMCUyMCUyMCUyMCU1QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMFRvcEtMb2dpdHNXYXJwZXIoNTApJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwVGVtcGVyYXR1cmVMb2dpdHNXYXJwZXIoMC43KSUyQyUwQSUyMCUyMCUyMCUyMCU1RCUwQSklMEElMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwuYmVhbV9zYW1wbGUoJTBBJTIwJTIwJTIwJTIwaW5wdXRfaWRzJTJDJTIwYmVhbV9zY29yZXIlMkMlMjBsb2dpdHNfcHJvY2Vzc29yJTNEbG9naXRzX3Byb2Nlc3NvciUyQyUyMGxvZ2l0c193YXJwZXIlM0Rsb2dpdHNfd2FycGVyJTJDJTIwKiptb2RlbF9rd2FyZ3MlMEEpJTBBJTBBdG9rZW5pemVyLmJhdGNoX2RlY29kZShvdXRwdXRzJTJDJTIwc2tpcF9zcGVjaWFsX3Rva2VucyUzRFRydWUp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
<span class="hljs-meta">... </span>    AutoTokenizer,
<span class="hljs-meta">... </span>    AutoModelForSeq2SeqLM,
<span class="hljs-meta">... </span>    LogitsProcessorList,
<span class="hljs-meta">... </span>    MinLengthLogitsProcessor,
<span class="hljs-meta">... </span>    TopKLogitsWarper,
<span class="hljs-meta">... </span>    TemperatureLogitsWarper,
<span class="hljs-meta">... </span>    BeamSearchScorer,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_input_str = <span class="hljs-string">&quot;translate English to German: How old are you?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_input_ids = tokenizer(encoder_input_str, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># lets run beam search using 3 beams</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_beams = <span class="hljs-number">3</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># define decoder start token ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.ones((num_beams, <span class="hljs-number">1</span>), device=model.device, dtype=torch.long)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = input_ids * model.config.decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add encoder_outputs to model keyword arguments</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_kwargs = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;encoder_outputs&quot;</span>: model.get_encoder()(
<span class="hljs-meta">... </span>        encoder_input_ids.repeat_interleave(num_beams, dim=<span class="hljs-number">0</span>), return_dict=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>    )
<span class="hljs-meta">... </span>}

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate beam scorer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>beam_scorer = BeamSearchScorer(
<span class="hljs-meta">... </span>    batch_size=<span class="hljs-number">1</span>,
<span class="hljs-meta">... </span>    max_length=model.config.max_length,
<span class="hljs-meta">... </span>    num_beams=num_beams,
<span class="hljs-meta">... </span>    device=model.device,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate logits processors</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_processor = LogitsProcessorList(
<span class="hljs-meta">... </span>    [MinLengthLogitsProcessor(<span class="hljs-number">5</span>, eos_token_id=model.config.eos_token_id)]
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate logits processors</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_warper = LogitsProcessorList(
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        TopKLogitsWarper(<span class="hljs-number">50</span>),
<span class="hljs-meta">... </span>        TemperatureLogitsWarper(<span class="hljs-number">0.7</span>),
<span class="hljs-meta">... </span>    ]
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.beam_sample(
<span class="hljs-meta">... </span>    input_ids, beam_scorer, logits_processor=logits_processor, logits_warper=logits_warper, **model_kwargs
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&#x27;Wie alt bist du?&#x27;</span>]`,wrap:!1}}),{c(){t=c("p"),t.textContent=p,o=r(),_(s.$$.fragment)},l(n){t=d(n,"P",{"data-svelte-h":!0}),h(t)!=="svelte-kvfsh7"&&(t.textContent=p),o=i(n),M(s.$$.fragment,n)},m(n,f){u(n,t,f),u(n,o,f),b(s,n,f),g=!0},p:k,i(n){g||(y(s.$$.fragment,n),g=!0)},o(n){T(s.$$.fragment,n),g=!1},d(n){n&&(l(t),l(o)),j(s,n)}}}function lo(w){let t,p=`In most cases, you do not need to call <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationMixin.contrastive_search">contrastive_search()</a> directly. Use
generate() instead. For an overview of generation strategies and code examples, check the <a href="../generation_strategies">following
guide</a>.`;return{c(){t=c("p"),t.innerHTML=p},l(o){t=d(o,"P",{"data-svelte-h":!0}),h(t)!=="svelte-q93n13"&&(t.innerHTML=p)},m(o,s){u(o,t,s)},p:k,d(o){o&&l(t)}}}function co(w){let t,p="Examples:",o,s,g;return s=new se({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMCglMEElMjAlMjAlMjAlMjBBdXRvVG9rZW5pemVyJTJDJTBBJTIwJTIwJTIwJTIwQXV0b01vZGVsRm9yQ2F1c2FsTE0lMkMlMEElMjAlMjAlMjAlMjBTdG9wcGluZ0NyaXRlcmlhTGlzdCUyQyUwQSUyMCUyMCUyMCUyME1heExlbmd0aENyaXRlcmlhJTJDJTBBKSUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmZhY2Vib29rJTJGb3B0LTEyNW0lMjIpJTBBbW9kZWwlMjAlM0QlMjBBdXRvTW9kZWxGb3JDYXVzYWxMTS5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZvcHQtMTI1bSUyMiklMEElMjMlMjBzZXQlMjBwYWRfdG9rZW5faWQlMjB0byUyMGVvc190b2tlbl9pZCUyMGJlY2F1c2UlMjBPUFQlMjBkb2VzJTIwbm90JTIwaGF2ZSUyMGElMjBQQUQlMjB0b2tlbiUwQW1vZGVsLmNvbmZpZy5wYWRfdG9rZW5faWQlMjAlM0QlMjBtb2RlbC5jb25maWcuZW9zX3Rva2VuX2lkJTBBaW5wdXRfcHJvbXB0JTIwJTNEJTIwJTIyRGVlcE1pbmQlMjBDb21wYW55JTIwaXMlMjIlMEFpbnB1dF9pZHMlMjAlM0QlMjB0b2tlbml6ZXIoaW5wdXRfcHJvbXB0JTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEFzdG9wcGluZ19jcml0ZXJpYSUyMCUzRCUyMFN0b3BwaW5nQ3JpdGVyaWFMaXN0KCU1Qk1heExlbmd0aENyaXRlcmlhKG1heF9sZW5ndGglM0Q2NCklNUQpJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsLmNvbnRyYXN0aXZlX3NlYXJjaCglMEElMjAlMjAlMjAlMjAqKmlucHV0X2lkcyUyQyUyMHBlbmFsdHlfYWxwaGElM0QwLjYlMkMlMjB0b3BfayUzRDQlMkMlMjBzdG9wcGluZ19jcml0ZXJpYSUzRHN0b3BwaW5nX2NyaXRlcmlhJTBBKSUwQXRva2VuaXplci5iYXRjaF9kZWNvZGUob3V0cHV0cyUyQyUyMHNraXBfc3BlY2lhbF90b2tlbnMlM0RUcnVlKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
<span class="hljs-meta">... </span>    AutoTokenizer,
<span class="hljs-meta">... </span>    AutoModelForCausalLM,
<span class="hljs-meta">... </span>    StoppingCriteriaList,
<span class="hljs-meta">... </span>    MaxLengthCriteria,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/opt-125m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;facebook/opt-125m&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># set pad_token_id to eos_token_id because OPT does not have a PAD token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.pad_token_id = model.config.eos_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>input_prompt = <span class="hljs-string">&quot;DeepMind Company is&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(input_prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>stopping_criteria = StoppingCriteriaList([MaxLengthCriteria(max_length=<span class="hljs-number">64</span>)])
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.contrastive_search(
<span class="hljs-meta">... </span>    **input_ids, penalty_alpha=<span class="hljs-number">0.6</span>, top_k=<span class="hljs-number">4</span>, stopping_criteria=stopping_criteria
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&#x27;DeepMind Company is a company that focuses on the development and commercialization of artificial intelligence (AI). DeepMind’s mission is to help people understand and solve problems that are difficult to solve in the world today.\\n\\nIn this post, we talk about the benefits of deep learning in business and how it&#x27;</span>]`,wrap:!1}}),{c(){t=c("p"),t.textContent=p,o=r(),_(s.$$.fragment)},l(n){t=d(n,"P",{"data-svelte-h":!0}),h(t)!=="svelte-kvfsh7"&&(t.textContent=p),o=i(n),M(s.$$.fragment,n)},m(n,f){u(n,t,f),u(n,o,f),b(s,n,f),g=!0},p:k,i(n){g||(y(s.$$.fragment,n),g=!0)},o(n){T(s.$$.fragment,n),g=!1},d(n){n&&(l(t),l(o)),j(s,n)}}}function mo(w){let t,p=`In most cases, you do not need to call <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationMixin.group_beam_search">group_beam_search()</a> directly. Use
generate() instead. For an overview of generation strategies and code examples, check the <a href="../generation_strategies">following
guide</a>.`;return{c(){t=c("p"),t.innerHTML=p},l(o){t=d(o,"P",{"data-svelte-h":!0}),h(t)!=="svelte-hqpqsx"&&(t.innerHTML=p)},m(o,s){u(o,t,s)},p:k,d(o){o&&l(t)}}}function po(w){let t,p="Examples:",o,s,g;return s=new se({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMCglMEElMjAlMjAlMjAlMjBBdXRvVG9rZW5pemVyJTJDJTBBJTIwJTIwJTIwJTIwQXV0b01vZGVsRm9yU2VxMlNlcUxNJTJDJTBBJTIwJTIwJTIwJTIwTG9naXRzUHJvY2Vzc29yTGlzdCUyQyUwQSUyMCUyMCUyMCUyME1pbkxlbmd0aExvZ2l0c1Byb2Nlc3NvciUyQyUwQSUyMCUyMCUyMCUyMEhhbW1pbmdEaXZlcnNpdHlMb2dpdHNQcm9jZXNzb3IlMkMlMEElMjAlMjAlMjAlMjBCZWFtU2VhcmNoU2NvcmVyJTJDJTBBKSUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlLXQ1JTJGdDUtYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyMEF1dG9Nb2RlbEZvclNlcTJTZXFMTS5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlLXQ1JTJGdDUtYmFzZSUyMiklMEElMEFlbmNvZGVyX2lucHV0X3N0ciUyMCUzRCUyMCUyMnRyYW5zbGF0ZSUyMEVuZ2xpc2glMjB0byUyMEdlcm1hbiUzQSUyMEhvdyUyMG9sZCUyMGFyZSUyMHlvdSUzRiUyMiUwQWVuY29kZXJfaW5wdXRfaWRzJTIwJTNEJTIwdG9rZW5pemVyKGVuY29kZXJfaW5wdXRfc3RyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMikuaW5wdXRfaWRzJTBBJTBBJTBBJTIzJTIwbGV0cyUyMHJ1biUyMGRpdmVyc2UlMjBiZWFtJTIwc2VhcmNoJTIwdXNpbmclMjA2JTIwYmVhbXMlMEFudW1fYmVhbXMlMjAlM0QlMjA2JTBBJTIzJTIwZGVmaW5lJTIwZGVjb2RlciUyMHN0YXJ0JTIwdG9rZW4lMjBpZHMlMEFpbnB1dF9pZHMlMjAlM0QlMjB0b3JjaC5vbmVzKChudW1fYmVhbXMlMkMlMjAxKSUyQyUyMGRldmljZSUzRG1vZGVsLmRldmljZSUyQyUyMGR0eXBlJTNEdG9yY2gubG9uZyklMEFpbnB1dF9pZHMlMjAlM0QlMjBpbnB1dF9pZHMlMjAqJTIwbW9kZWwuY29uZmlnLmRlY29kZXJfc3RhcnRfdG9rZW5faWQlMEElMEElMjMlMjBhZGQlMjBlbmNvZGVyX291dHB1dHMlMjB0byUyMG1vZGVsJTIwa2V5d29yZCUyMGFyZ3VtZW50cyUwQW1vZGVsX2t3YXJncyUyMCUzRCUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMmVuY29kZXJfb3V0cHV0cyUyMiUzQSUyMG1vZGVsLmdldF9lbmNvZGVyKCkoJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwZW5jb2Rlcl9pbnB1dF9pZHMucmVwZWF0X2ludGVybGVhdmUobnVtX2JlYW1zJTJDJTIwZGltJTNEMCklMkMlMjByZXR1cm5fZGljdCUzRFRydWUlMEElMjAlMjAlMjAlMjApJTBBJTdEJTBBJTBBJTIzJTIwaW5zdGFudGlhdGUlMjBiZWFtJTIwc2NvcmVyJTBBYmVhbV9zY29yZXIlMjAlM0QlMjBCZWFtU2VhcmNoU2NvcmVyKCUwQSUyMCUyMCUyMCUyMGJhdGNoX3NpemUlM0QxJTJDJTBBJTIwJTIwJTIwJTIwbWF4X2xlbmd0aCUzRG1vZGVsLmNvbmZpZy5tYXhfbGVuZ3RoJTJDJTBBJTIwJTIwJTIwJTIwbnVtX2JlYW1zJTNEbnVtX2JlYW1zJTJDJTBBJTIwJTIwJTIwJTIwZGV2aWNlJTNEbW9kZWwuZGV2aWNlJTJDJTBBJTIwJTIwJTIwJTIwbnVtX2JlYW1fZ3JvdXBzJTNEMyUyQyUwQSklMEElMEElMjMlMjBpbnN0YW50aWF0ZSUyMGxvZ2l0cyUyMHByb2Nlc3NvcnMlMEFsb2dpdHNfcHJvY2Vzc29yJTIwJTNEJTIwTG9naXRzUHJvY2Vzc29yTGlzdCglMEElMjAlMjAlMjAlMjAlNUIlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBIYW1taW5nRGl2ZXJzaXR5TG9naXRzUHJvY2Vzc29yKDUuNSUyQyUyMG51bV9iZWFtcyUzRDYlMkMlMjBudW1fYmVhbV9ncm91cHMlM0QzKSUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyME1pbkxlbmd0aExvZ2l0c1Byb2Nlc3Nvcig1JTJDJTIwZW9zX3Rva2VuX2lkJTNEbW9kZWwuY29uZmlnLmVvc190b2tlbl9pZCklMkMlMEElMjAlMjAlMjAlMjAlNUQlMEEpJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsLmdyb3VwX2JlYW1fc2VhcmNoKCUwQSUyMCUyMCUyMCUyMGlucHV0X2lkcyUyQyUyMGJlYW1fc2NvcmVyJTJDJTIwbG9naXRzX3Byb2Nlc3NvciUzRGxvZ2l0c19wcm9jZXNzb3IlMkMlMjAqKm1vZGVsX2t3YXJncyUwQSklMEElMEF0b2tlbml6ZXIuYmF0Y2hfZGVjb2RlKG91dHB1dHMlMkMlMjBza2lwX3NwZWNpYWxfdG9rZW5zJTNEVHJ1ZSk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
<span class="hljs-meta">... </span>    AutoTokenizer,
<span class="hljs-meta">... </span>    AutoModelForSeq2SeqLM,
<span class="hljs-meta">... </span>    LogitsProcessorList,
<span class="hljs-meta">... </span>    MinLengthLogitsProcessor,
<span class="hljs-meta">... </span>    HammingDiversityLogitsProcessor,
<span class="hljs-meta">... </span>    BeamSearchScorer,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_input_str = <span class="hljs-string">&quot;translate English to German: How old are you?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_input_ids = tokenizer(encoder_input_str, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># lets run diverse beam search using 6 beams</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_beams = <span class="hljs-number">6</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># define decoder start token ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.ones((num_beams, <span class="hljs-number">1</span>), device=model.device, dtype=torch.long)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = input_ids * model.config.decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add encoder_outputs to model keyword arguments</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_kwargs = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;encoder_outputs&quot;</span>: model.get_encoder()(
<span class="hljs-meta">... </span>        encoder_input_ids.repeat_interleave(num_beams, dim=<span class="hljs-number">0</span>), return_dict=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>    )
<span class="hljs-meta">... </span>}

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate beam scorer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>beam_scorer = BeamSearchScorer(
<span class="hljs-meta">... </span>    batch_size=<span class="hljs-number">1</span>,
<span class="hljs-meta">... </span>    max_length=model.config.max_length,
<span class="hljs-meta">... </span>    num_beams=num_beams,
<span class="hljs-meta">... </span>    device=model.device,
<span class="hljs-meta">... </span>    num_beam_groups=<span class="hljs-number">3</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate logits processors</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_processor = LogitsProcessorList(
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        HammingDiversityLogitsProcessor(<span class="hljs-number">5.5</span>, num_beams=<span class="hljs-number">6</span>, num_beam_groups=<span class="hljs-number">3</span>),
<span class="hljs-meta">... </span>        MinLengthLogitsProcessor(<span class="hljs-number">5</span>, eos_token_id=model.config.eos_token_id),
<span class="hljs-meta">... </span>    ]
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.group_beam_search(
<span class="hljs-meta">... </span>    input_ids, beam_scorer, logits_processor=logits_processor, **model_kwargs
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&#x27;Wie alt bist du?&#x27;</span>]`,wrap:!1}}),{c(){t=c("p"),t.textContent=p,o=r(),_(s.$$.fragment)},l(n){t=d(n,"P",{"data-svelte-h":!0}),h(t)!=="svelte-kvfsh7"&&(t.textContent=p),o=i(n),M(s.$$.fragment,n)},m(n,f){u(n,t,f),u(n,o,f),b(s,n,f),g=!0},p:k,i(n){g||(y(s.$$.fragment,n),g=!0)},o(n){T(s.$$.fragment,n),g=!1},d(n){n&&(l(t),l(o)),j(s,n)}}}function go(w){let t,p=`In most cases, you do not need to call <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationMixin.constrained_beam_search">constrained_beam_search()</a> directly. Use
generate() instead. For an overview of generation strategies and code examples, check the <a href="../generation_strategies">following
guide</a>.`;return{c(){t=c("p"),t.innerHTML=p},l(o){t=d(o,"P",{"data-svelte-h":!0}),h(t)!=="svelte-3nhpad"&&(t.innerHTML=p)},m(o,s){u(o,t,s)},p:k,d(o){o&&l(t)}}}function uo(w){let t,p="Examples:",o,s,g;return s=new se({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMCglMEElMjAlMjAlMjAlMjBBdXRvVG9rZW5pemVyJTJDJTBBJTIwJTIwJTIwJTIwQXV0b01vZGVsRm9yU2VxMlNlcUxNJTJDJTBBJTIwJTIwJTIwJTIwTG9naXRzUHJvY2Vzc29yTGlzdCUyQyUwQSUyMCUyMCUyMCUyME1pbkxlbmd0aExvZ2l0c1Byb2Nlc3NvciUyQyUwQSUyMCUyMCUyMCUyMENvbnN0cmFpbmVkQmVhbVNlYXJjaFNjb3JlciUyQyUwQSUyMCUyMCUyMCUyMFBocmFzYWxDb25zdHJhaW50JTJDJTBBKSUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlLXQ1JTJGdDUtYmFzZSUyMiklMEFtb2RlbCUyMCUzRCUyMEF1dG9Nb2RlbEZvclNlcTJTZXFMTS5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlLXQ1JTJGdDUtYmFzZSUyMiklMEElMEFlbmNvZGVyX2lucHV0X3N0ciUyMCUzRCUyMCUyMnRyYW5zbGF0ZSUyMEVuZ2xpc2glMjB0byUyMEdlcm1hbiUzQSUyMEhvdyUyMG9sZCUyMGFyZSUyMHlvdSUzRiUyMiUwQWVuY29kZXJfaW5wdXRfaWRzJTIwJTNEJTIwdG9rZW5pemVyKGVuY29kZXJfaW5wdXRfc3RyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMikuaW5wdXRfaWRzJTBBJTBBJTBBJTIzJTIwbGV0cyUyMHJ1biUyMGJlYW0lMjBzZWFyY2glMjB1c2luZyUyMDMlMjBiZWFtcyUwQW51bV9iZWFtcyUyMCUzRCUyMDMlMEElMjMlMjBkZWZpbmUlMjBkZWNvZGVyJTIwc3RhcnQlMjB0b2tlbiUyMGlkcyUwQWlucHV0X2lkcyUyMCUzRCUyMHRvcmNoLm9uZXMoKG51bV9iZWFtcyUyQyUyMDEpJTJDJTIwZGV2aWNlJTNEbW9kZWwuZGV2aWNlJTJDJTIwZHR5cGUlM0R0b3JjaC5sb25nKSUwQWlucHV0X2lkcyUyMCUzRCUyMGlucHV0X2lkcyUyMColMjBtb2RlbC5jb25maWcuZGVjb2Rlcl9zdGFydF90b2tlbl9pZCUwQSUwQSUyMyUyMGFkZCUyMGVuY29kZXJfb3V0cHV0cyUyMHRvJTIwbW9kZWwlMjBrZXl3b3JkJTIwYXJndW1lbnRzJTBBbW9kZWxfa3dhcmdzJTIwJTNEJTIwJTdCJTBBJTIwJTIwJTIwJTIwJTIyZW5jb2Rlcl9vdXRwdXRzJTIyJTNBJTIwbW9kZWwuZ2V0X2VuY29kZXIoKSglMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBlbmNvZGVyX2lucHV0X2lkcy5yZXBlYXRfaW50ZXJsZWF2ZShudW1fYmVhbXMlMkMlMjBkaW0lM0QwKSUyQyUyMHJldHVybl9kaWN0JTNEVHJ1ZSUwQSUyMCUyMCUyMCUyMCklMEElN0QlMEElMEFjb25zdHJhaW50X3N0ciUyMCUzRCUyMCUyMlNpZSUyMiUwQWNvbnN0cmFpbnRfdG9rZW5faWRzJTIwJTNEJTIwdG9rZW5pemVyLmVuY29kZShjb25zdHJhaW50X3N0ciklNUIlM0EtMSU1RCUyMCUyMCUyMyUyMHNsaWNlJTIwdG8lMjByZW1vdmUlMjBlb3MlMjB0b2tlbiUwQWNvbnN0cmFpbnRzJTIwJTNEJTIwJTVCUGhyYXNhbENvbnN0cmFpbnQodG9rZW5faWRzJTNEY29uc3RyYWludF90b2tlbl9pZHMpJTVEJTBBJTBBJTBBJTIzJTIwaW5zdGFudGlhdGUlMjBiZWFtJTIwc2NvcmVyJTBBYmVhbV9zY29yZXIlMjAlM0QlMjBDb25zdHJhaW5lZEJlYW1TZWFyY2hTY29yZXIoJTBBJTIwJTIwJTIwJTIwYmF0Y2hfc2l6ZSUzRDElMkMlMjBudW1fYmVhbXMlM0RudW1fYmVhbXMlMkMlMjBkZXZpY2UlM0Rtb2RlbC5kZXZpY2UlMkMlMjBjb25zdHJhaW50cyUzRGNvbnN0cmFpbnRzJTBBKSUwQSUwQSUyMyUyMGluc3RhbnRpYXRlJTIwbG9naXRzJTIwcHJvY2Vzc29ycyUwQWxvZ2l0c19wcm9jZXNzb3IlMjAlM0QlMjBMb2dpdHNQcm9jZXNzb3JMaXN0KCUwQSUyMCUyMCUyMCUyMCU1QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyME1pbkxlbmd0aExvZ2l0c1Byb2Nlc3Nvcig1JTJDJTIwZW9zX3Rva2VuX2lkJTNEbW9kZWwuY29uZmlnLmVvc190b2tlbl9pZCklMkMlMEElMjAlMjAlMjAlMjAlNUQlMEEpJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsLmNvbnN0cmFpbmVkX2JlYW1fc2VhcmNoKCUwQSUyMCUyMCUyMCUyMGlucHV0X2lkcyUyQyUyMGJlYW1fc2NvcmVyJTJDJTIwY29uc3RyYWludHMlM0Rjb25zdHJhaW50cyUyQyUyMGxvZ2l0c19wcm9jZXNzb3IlM0Rsb2dpdHNfcHJvY2Vzc29yJTJDJTIwKiptb2RlbF9rd2FyZ3MlMEEpJTBBJTBBdG9rZW5pemVyLmJhdGNoX2RlY29kZShvdXRwdXRzJTJDJTIwc2tpcF9zcGVjaWFsX3Rva2VucyUzRFRydWUp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> (
<span class="hljs-meta">... </span>    AutoTokenizer,
<span class="hljs-meta">... </span>    AutoModelForSeq2SeqLM,
<span class="hljs-meta">... </span>    LogitsProcessorList,
<span class="hljs-meta">... </span>    MinLengthLogitsProcessor,
<span class="hljs-meta">... </span>    ConstrainedBeamSearchScorer,
<span class="hljs-meta">... </span>    PhrasalConstraint,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;google-t5/t5-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_input_str = <span class="hljs-string">&quot;translate English to German: How old are you?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_input_ids = tokenizer(encoder_input_str, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># lets run beam search using 3 beams</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_beams = <span class="hljs-number">3</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># define decoder start token ids</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.ones((num_beams, <span class="hljs-number">1</span>), device=model.device, dtype=torch.long)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = input_ids * model.config.decoder_start_token_id

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># add encoder_outputs to model keyword arguments</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_kwargs = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;encoder_outputs&quot;</span>: model.get_encoder()(
<span class="hljs-meta">... </span>        encoder_input_ids.repeat_interleave(num_beams, dim=<span class="hljs-number">0</span>), return_dict=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>    )
<span class="hljs-meta">... </span>}

<span class="hljs-meta">&gt;&gt;&gt; </span>constraint_str = <span class="hljs-string">&quot;Sie&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>constraint_token_ids = tokenizer.encode(constraint_str)[:-<span class="hljs-number">1</span>]  <span class="hljs-comment"># slice to remove eos token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>constraints = [PhrasalConstraint(token_ids=constraint_token_ids)]


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate beam scorer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>beam_scorer = ConstrainedBeamSearchScorer(
<span class="hljs-meta">... </span>    batch_size=<span class="hljs-number">1</span>, num_beams=num_beams, device=model.device, constraints=constraints
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># instantiate logits processors</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_processor = LogitsProcessorList(
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        MinLengthLogitsProcessor(<span class="hljs-number">5</span>, eos_token_id=model.config.eos_token_id),
<span class="hljs-meta">... </span>    ]
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.constrained_beam_search(
<span class="hljs-meta">... </span>    input_ids, beam_scorer, constraints=constraints, logits_processor=logits_processor, **model_kwargs
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.batch_decode(outputs, skip_special_tokens=<span class="hljs-literal">True</span>)
[<span class="hljs-string">&#x27;Wie alt sind Sie?&#x27;</span>]`,wrap:!1}}),{c(){t=c("p"),t.textContent=p,o=r(),_(s.$$.fragment)},l(n){t=d(n,"P",{"data-svelte-h":!0}),h(t)!=="svelte-kvfsh7"&&(t.textContent=p),o=i(n),M(s.$$.fragment,n)},m(n,f){u(n,t,f),u(n,o,f),b(s,n,f),g=!0},p:k,i(n){g||(y(s.$$.fragment,n),g=!0)},o(n){T(s.$$.fragment,n),g=!1},d(n){n&&(l(t),l(o)),j(s,n)}}}function ho(w){let t,p=`Most generation-controlling parameters are set in <code>generation_config</code> which, if not passed, will be set to the
model’s default generation configuration. You can override any <code>generation_config</code> by passing the corresponding
parameters to generate, e.g. <code>.generate(inputs, num_beams=4, do_sample=True)</code>.`,o,s,g=`For an overview of generation strategies and code examples, check out the <a href="../generation_strategies">following
guide</a>.`;return{c(){t=c("p"),t.innerHTML=p,o=r(),s=c("p"),s.innerHTML=g},l(n){t=d(n,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1pahvb2"&&(t.innerHTML=p),o=i(n),s=d(n,"P",{"data-svelte-h":!0}),h(s)!=="svelte-fvlq1g"&&(s.innerHTML=g)},m(n,f){u(n,t,f),u(n,o,f),u(n,s,f)},p:k,d(n){n&&(l(t),l(o),l(s))}}}function fo(w){let t,p="Examples:",o,s,g;return s=new se({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEdQVDJUb2tlbml6ZXIlMkMlMjBURkF1dG9Nb2RlbEZvckNhdXNhbExNJTBBaW1wb3J0JTIwbnVtcHklMjBhcyUyMG5wJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwR1BUMlRva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyb3BlbmFpLWNvbW11bml0eSUyRmdwdDIlMjIpJTBBbW9kZWwlMjAlM0QlMjBURkF1dG9Nb2RlbEZvckNhdXNhbExNLmZyb21fcHJldHJhaW5lZCglMjJvcGVuYWktY29tbXVuaXR5JTJGZ3B0MiUyMiklMEF0b2tlbml6ZXIucGFkX3Rva2VuX2lkJTIwJTNEJTIwdG9rZW5pemVyLmVvc190b2tlbl9pZCUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplciglNUIlMjJUb2RheSUyMGlzJTIyJTVEJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiklMEElMEElMjMlMjBFeGFtcGxlJTIwMSUzQSUyMFByaW50JTIwdGhlJTIwc2NvcmVzJTIwZm9yJTIwZWFjaCUyMHRva2VuJTIwZ2VuZXJhdGVkJTIwd2l0aCUyMEdyZWVkeSUyMFNlYXJjaCUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbC5nZW5lcmF0ZSgqKmlucHV0cyUyQyUyMG1heF9uZXdfdG9rZW5zJTNENSUyQyUyMHJldHVybl9kaWN0X2luX2dlbmVyYXRlJTNEVHJ1ZSUyQyUyMG91dHB1dF9zY29yZXMlM0RUcnVlKSUwQXRyYW5zaXRpb25fc2NvcmVzJTIwJTNEJTIwbW9kZWwuY29tcHV0ZV90cmFuc2l0aW9uX3Njb3JlcyglMEElMjAlMjAlMjAlMjBvdXRwdXRzLnNlcXVlbmNlcyUyQyUyMG91dHB1dHMuc2NvcmVzJTJDJTIwbm9ybWFsaXplX2xvZ2l0cyUzRFRydWUlMEEpJTBBJTIzJTIwaW5wdXRfbGVuZ3RoJTIwaXMlMjB0aGUlMjBsZW5ndGglMjBvZiUyMHRoZSUyMGlucHV0JTIwcHJvbXB0JTIwZm9yJTIwZGVjb2Rlci1vbmx5JTIwbW9kZWxzJTJDJTIwbGlrZSUyMHRoZSUyMEdQVCUyMGZhbWlseSUyQyUyMGFuZCUyMDElMjBmb3IlMEElMjMlMjBlbmNvZGVyLWRlY29kZXIlMjBtb2RlbHMlMkMlMjBsaWtlJTIwQkFSVCUyMG9yJTIwVDUuJTBBaW5wdXRfbGVuZ3RoJTIwJTNEJTIwMSUyMGlmJTIwbW9kZWwuY29uZmlnLmlzX2VuY29kZXJfZGVjb2RlciUyMGVsc2UlMjBpbnB1dHMuaW5wdXRfaWRzLnNoYXBlJTVCMSU1RCUwQWdlbmVyYXRlZF90b2tlbnMlMjAlM0QlMjBvdXRwdXRzLnNlcXVlbmNlcyU1QiUzQSUyQyUyMGlucHV0X2xlbmd0aCUzQSU1RCUwQWZvciUyMHRvayUyQyUyMHNjb3JlJTIwaW4lMjB6aXAoZ2VuZXJhdGVkX3Rva2VucyU1QjAlNUQlMkMlMjB0cmFuc2l0aW9uX3Njb3JlcyU1QjAlNUQpJTNBJTBBJTIwJTIwJTIwJTIwJTIzJTIwJTdDJTIwdG9rZW4lMjAlN0MlMjB0b2tlbiUyMHN0cmluZyUyMCU3QyUyMGxvZ2l0cyUyMCU3QyUyMHByb2JhYmlsaXR5JTBBJTIwJTIwJTIwJTIwcHJpbnQoZiUyMiU3QyUyMCU3QnRvayUzQTVkJTdEJTIwJTdDJTIwJTdCdG9rZW5pemVyLmRlY29kZSh0b2spJTNBOHMlN0QlMjAlN0MlMjAlN0JzY29yZS5udW1weSgpJTNBLjNmJTdEJTIwJTdDJTIwJTdCbnAuZXhwKHNjb3JlLm51bXB5KCkpJTNBLjIlMjUlN0QlMjIpJTBBJTBBJTIzJTIwRXhhbXBsZSUyMDIlM0ElMjBSZWNvbnN0cnVjdCUyMHRoZSUyMHNlcXVlbmNlJTIwc2NvcmVzJTIwZnJvbSUyMEJlYW0lMjBTZWFyY2glMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwuZ2VuZXJhdGUoJTBBJTIwJTIwJTIwJTIwKippbnB1dHMlMkMlMEElMjAlMjAlMjAlMjBtYXhfbmV3X3Rva2VucyUzRDUlMkMlMEElMjAlMjAlMjAlMjBudW1fYmVhbXMlM0Q0JTJDJTBBJTIwJTIwJTIwJTIwbnVtX3JldHVybl9zZXF1ZW5jZXMlM0Q0JTJDJTBBJTIwJTIwJTIwJTIwcmV0dXJuX2RpY3RfaW5fZ2VuZXJhdGUlM0RUcnVlJTJDJTBBJTIwJTIwJTIwJTIwb3V0cHV0X3Njb3JlcyUzRFRydWUlMkMlMEEpJTBBdHJhbnNpdGlvbl9zY29yZXMlMjAlM0QlMjBtb2RlbC5jb21wdXRlX3RyYW5zaXRpb25fc2NvcmVzKCUwQSUyMCUyMCUyMCUyMG91dHB1dHMuc2VxdWVuY2VzJTJDJTIwb3V0cHV0cy5zY29yZXMlMkMlMjBvdXRwdXRzLmJlYW1faW5kaWNlcyUyQyUyMG5vcm1hbGl6ZV9sb2dpdHMlM0RGYWxzZSUwQSklMEElMjMlMjBJZiUyMHlvdSUyMHN1bSUyMHRoZSUyMGdlbmVyYXRlZCUyMHRva2VucyclMjBzY29yZXMlMjBhbmQlMjBhcHBseSUyMHRoZSUyMGxlbmd0aCUyMHBlbmFsdHklMkMlMjB5b3UnbGwlMjBnZXQlMjB0aGUlMjBzZXF1ZW5jZSUyMHNjb3Jlcy4lMEElMjMlMjBUaXAlM0ElMjByZWNvbXB1dGluZyUyMHRoZSUyMHNjb3JlcyUyMGlzJTIwb25seSUyMGd1YXJhbnRlZWQlMjB0byUyMG1hdGNoJTIwd2l0aCUyMCU2MG5vcm1hbGl6ZV9sb2dpdHMlM0RGYWxzZSU2MC4lMjBEZXBlbmRpbmclMjBvbiUyMHRoZSUwQSUyMyUyMHVzZSUyMGNhc2UlMkMlMjB5b3UlMjBtaWdodCUyMHdhbnQlMjB0byUyMHJlY29tcHV0ZSUyMGl0JTIwd2l0aCUyMCU2MG5vcm1hbGl6ZV9sb2dpdHMlM0RUcnVlJTYwLiUwQW91dHB1dF9sZW5ndGglMjAlM0QlMjBpbnB1dF9sZW5ndGglMjAlMkIlMjBucC5zdW0odHJhbnNpdGlvbl9zY29yZXMubnVtcHkoKSUyMCUzQyUyMDAlMkMlMjBheGlzJTNEMSklMEFsZW5ndGhfcGVuYWx0eSUyMCUzRCUyMG1vZGVsLmdlbmVyYXRpb25fY29uZmlnLmxlbmd0aF9wZW5hbHR5JTBBcmVjb25zdHJ1Y3RlZF9zY29yZXMlMjAlM0QlMjBucC5zdW0odHJhbnNpdGlvbl9zY29yZXMlMkMlMjBheGlzJTNEMSklMjAlMkYlMjAob3V0cHV0X2xlbmd0aCoqbGVuZ3RoX3BlbmFsdHkpJTBBcHJpbnQobnAuYWxsY2xvc2Uob3V0cHV0cy5zZXF1ZW5jZXNfc2NvcmVzJTJDJTIwcmVjb25zdHJ1Y3RlZF9zY29yZXMpKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, TFAutoModelForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;openai-community/gpt2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.pad_token_id = tokenizer.eos_token_id
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer([<span class="hljs-string">&quot;Today is&quot;</span>], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Example 1: Print the scores for each token generated with Greedy Search</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(**inputs, max_new_tokens=<span class="hljs-number">5</span>, return_dict_in_generate=<span class="hljs-literal">True</span>, output_scores=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>transition_scores = model.compute_transition_scores(
<span class="hljs-meta">... </span>    outputs.sequences, outputs.scores, normalize_logits=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># input_length is the length of the input prompt for decoder-only models, like the GPT family, and 1 for</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># encoder-decoder models, like BART or T5.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_length = <span class="hljs-number">1</span> <span class="hljs-keyword">if</span> model.config.is_encoder_decoder <span class="hljs-keyword">else</span> inputs.input_ids.shape[<span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>generated_tokens = outputs.sequences[:, input_length:]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> tok, score <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(generated_tokens[<span class="hljs-number">0</span>], transition_scores[<span class="hljs-number">0</span>]):
<span class="hljs-meta">... </span>    <span class="hljs-comment"># | token | token string | logits | probability</span>
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;| <span class="hljs-subst">{tok:5d}</span> | <span class="hljs-subst">{tokenizer.decode(tok):8s}</span> | <span class="hljs-subst">{score.numpy():<span class="hljs-number">.3</span>f}</span> | <span class="hljs-subst">{np.exp(score.numpy()):<span class="hljs-number">.2</span>%}</span>&quot;</span>)
|   <span class="hljs-number">262</span> |  the     | -<span class="hljs-number">1.413</span> | <span class="hljs-number">24.33</span>%
|  <span class="hljs-number">1110</span> |  day     | -<span class="hljs-number">2.609</span> | <span class="hljs-number">7.36</span>%
|   <span class="hljs-number">618</span> |  when    | -<span class="hljs-number">2.009</span> | <span class="hljs-number">13.41</span>%
|   <span class="hljs-number">356</span> |  we      | -<span class="hljs-number">1.859</span> | <span class="hljs-number">15.58</span>%
|   <span class="hljs-number">460</span> |  can     | -<span class="hljs-number">2.508</span> | <span class="hljs-number">8.14</span>%

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Example 2: Reconstruct the sequence scores from Beam Search</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(
<span class="hljs-meta">... </span>    **inputs,
<span class="hljs-meta">... </span>    max_new_tokens=<span class="hljs-number">5</span>,
<span class="hljs-meta">... </span>    num_beams=<span class="hljs-number">4</span>,
<span class="hljs-meta">... </span>    num_return_sequences=<span class="hljs-number">4</span>,
<span class="hljs-meta">... </span>    return_dict_in_generate=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    output_scores=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>transition_scores = model.compute_transition_scores(
<span class="hljs-meta">... </span>    outputs.sequences, outputs.scores, outputs.beam_indices, normalize_logits=<span class="hljs-literal">False</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># If you sum the generated tokens&#x27; scores and apply the length penalty, you&#x27;ll get the sequence scores.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Tip: recomputing the scores is only guaranteed to match with \`normalize_logits=False\`. Depending on the</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># use case, you might want to recompute it with \`normalize_logits=True\`.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>output_length = input_length + np.<span class="hljs-built_in">sum</span>(transition_scores.numpy() &lt; <span class="hljs-number">0</span>, axis=<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>length_penalty = model.generation_config.length_penalty
<span class="hljs-meta">&gt;&gt;&gt; </span>reconstructed_scores = np.<span class="hljs-built_in">sum</span>(transition_scores, axis=<span class="hljs-number">1</span>) / (output_length**length_penalty)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(np.allclose(outputs.sequences_scores, reconstructed_scores))
<span class="hljs-literal">True</span>`,wrap:!1}}),{c(){t=c("p"),t.textContent=p,o=r(),_(s.$$.fragment)},l(n){t=d(n,"P",{"data-svelte-h":!0}),h(t)!=="svelte-kvfsh7"&&(t.textContent=p),o=i(n),M(s.$$.fragment,n)},m(n,f){u(n,t,f),u(n,o,f),b(s,n,f),g=!0},p:k,i(n){g||(y(s.$$.fragment,n),g=!0)},o(n){T(s.$$.fragment,n),g=!1},d(n){n&&(l(t),l(o)),j(s,n)}}}function _o(w){let t,p,o,s,g,n,f,ds="Each framework has a generate method for text generation implemented in their respective <code>GenerationMixin</code> class:",zn,Ce,ms='<li>PyTorch <a href="/docs/transformers/main/en/model_doc/phi#transformers.PhiForCausalLM.generate">generate()</a> is implemented in <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationMixin">GenerationMixin</a>.</li> <li>TensorFlow <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.TFGenerationMixin.generate">generate()</a> is implemented in <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.TFGenerationMixin">TFGenerationMixin</a>.</li> <li>Flax/JAX <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.FlaxGenerationMixin.generate">generate()</a> is implemented in <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.FlaxGenerationMixin">FlaxGenerationMixin</a>.</li>',En,Ie,ps=`Regardless of your framework of choice, you can parameterize the generate method with a <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationConfig">GenerationConfig</a>
class instance. Please refer to this class for the complete list of generation parameters, which control the behavior
of the generation method.`,Ln,We,gs=`To learn how to inspect a model’s generation configuration, what are the defaults, how to change the parameters ad hoc,
and how to create and save a customized generation configuration, refer to the
<a href="../generation_strategies">text generation strategies guide</a>. The guide also explains how to use related features,
like token streaming.`,Sn,Xe,Fn,v,Re,Kn,ln,us=`Class that holds a configuration for a generation task. A <code>generate</code> call supports the following generation methods
for text-decoder, text-to-text, speech-to-text, and vision-to-text models:`,et,cn,hs=`<li><em>greedy decoding</em> by calling <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationMixin.greedy_search">greedy_search()</a> if <code>num_beams=1</code> and
<code>do_sample=False</code></li> <li><em>contrastive search</em> by calling <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationMixin.contrastive_search">contrastive_search()</a> if <code>penalty_alpha&gt;0.</code>
and <code>top_k&gt;1</code></li> <li><em>multinomial sampling</em> by calling <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationMixin.sample">sample()</a> if <code>num_beams=1</code> and
<code>do_sample=True</code></li> <li><em>beam-search decoding</em> by calling <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationMixin.beam_search">beam_search()</a> if <code>num_beams&gt;1</code> and
<code>do_sample=False</code></li> <li><em>beam-search multinomial sampling</em> by calling <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationMixin.beam_sample">beam_sample()</a> if
<code>num_beams&gt;1</code> and <code>do_sample=True</code></li> <li><em>diverse beam-search decoding</em> by calling <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationMixin.group_beam_search">group_beam_search()</a>, if
<code>num_beams&gt;1</code> and <code>num_beam_groups&gt;1</code></li> <li><em>constrained beam-search decoding</em> by calling <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationMixin.constrained_beam_search">constrained_beam_search()</a>, if
<code>constraints!=None</code> or <code>force_words_ids!=None</code></li> <li><em>assisted decoding</em> by calling <code>assisted_decoding()</code>, if
<code>assistant_model</code> is passed to <code>.generate()</code></li>`,nt,dn,fs=`You do not need to call any of the above methods directly. Pass custom parameter values to ‘.generate()‘. To learn
more about decoding strategies refer to the <a href="../generation_strategies">text generation strategies guide</a>.`,tt,ce,st,q,Ve,ot,mn,_s='Instantiate a <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationConfig">GenerationConfig</a> from a generation configuration file.',at,de,rt,me,$e,it,pn,Ms=`Instantiates a <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationConfig">GenerationConfig</a> from a <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a>. This function is useful to convert legacy
<a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> objects, which may contain generation parameters, into a stand-alone <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationConfig">GenerationConfig</a>.`,lt,pe,Ne,ct,gn,bs=`Save a generation configuration object to the directory <code>save_directory</code>, so that it can be re-loaded using the
<a href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationConfig.from_pretrained">from_pretrained()</a> class method.`,Hn,ze,Qn,J,Ee,dt,un,ys='A class containing all functions for auto-regressive text generation, to be used as a mixin in <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>.',mt,hn,Ts='The class exposes <a href="/docs/transformers/main/en/model_doc/phi#transformers.PhiForCausalLM.generate">generate()</a>, which can be used for:',pt,fn,js=`<li><em>greedy decoding</em> by calling <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationMixin.greedy_search">greedy_search()</a> if <code>num_beams=1</code> and
<code>do_sample=False</code></li> <li><em>contrastive search</em> by calling <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationMixin.contrastive_search">contrastive_search()</a> if <code>penalty_alpha&gt;0</code> and
<code>top_k&gt;1</code></li> <li><em>multinomial sampling</em> by calling <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationMixin.sample">sample()</a> if <code>num_beams=1</code> and
<code>do_sample=True</code></li> <li><em>beam-search decoding</em> by calling <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationMixin.beam_search">beam_search()</a> if <code>num_beams&gt;1</code> and
<code>do_sample=False</code></li> <li><em>beam-search multinomial sampling</em> by calling <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationMixin.beam_sample">beam_sample()</a> if <code>num_beams&gt;1</code>
and <code>do_sample=True</code></li> <li><em>diverse beam-search decoding</em> by calling <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationMixin.group_beam_search">group_beam_search()</a>, if <code>num_beams&gt;1</code>
and <code>num_beam_groups&gt;1</code></li> <li><em>constrained beam-search decoding</em> by calling <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationMixin.constrained_beam_search">constrained_beam_search()</a>, if
<code>constraints!=None</code> or <code>force_words_ids!=None</code></li>`,gt,_n,ws=`You do not need to call any of the above methods directly. Pass custom parameter values to ‘generate’ instead. To
learn more about decoding strategies refer to the <a href="../generation_strategies">text generation strategies guide</a>.`,ut,O,Le,ht,Mn,Js="Generates sequences of token ids for models with a language modeling head.",ft,ge,_t,P,Se,Mt,bn,Us=`Computes the transition scores of sequences given the generation scores (and beam indices, if beam search was
used). This is a convenient method to quicky obtain the scores of the selected tokens at generation time.`,bt,ue,yt,R,Fe,Tt,yn,vs=`Generates sequences of token ids for models with a language modeling head using <strong>greedy decoding</strong> and can be
used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`,jt,he,wt,fe,Jt,V,He,Ut,Tn,xs=`Generates sequences of token ids for models with a language modeling head using <strong>multinomial sampling</strong> and
can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`,vt,_e,xt,Me,Gt,$,Qe,kt,jn,Gs=`Generates sequences of token ids for models with a language modeling head using <strong>beam search decoding</strong> and
can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`,Zt,be,Bt,ye,Ct,N,Ye,It,wn,ks=`Generates sequences of token ids for models with a language modeling head using <strong>beam search multinomial
sampling</strong> and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`,Wt,Te,Xt,je,Rt,z,Ae,Vt,Jn,Zs=`Generates sequences of token ids for models with a language modeling head using <strong>contrastive search</strong> and can
be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`,$t,we,Nt,Je,zt,E,De,Et,Un,Bs=`Generates sequences of token ids for models with a language modeling head using <strong>diverse beam search
decoding</strong> and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`,Lt,Ue,St,ve,Ft,L,qe,Ht,vn,Cs=`Generates sequences of token ids for models with a language modeling head using <strong>constrained beam search
decoding</strong> and can be used for text-decoder, text-to-text, speech-to-text, and vision-to-text models.`,Qt,xe,Yt,Ge,Yn,Oe,An,Z,Pe,At,xn,Is='A class containing all of the functions supporting generation, to be used as a mixin in <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel">TFPreTrainedModel</a>.',Dt,Gn,Ws='The class exposes <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.TFGenerationMixin.generate">generate()</a>, which can be used for:',qt,kn,Xs=`<li><em>greedy decoding</em> by calling <code>greedy_search()</code> if <code>num_beams=1</code> and
<code>do_sample=False</code></li> <li><em>contrastive search</em> by calling <code>contrastive_search()</code> if <code>penalty_alpha&gt;0</code> and
<code>top_k&gt;1</code></li> <li><em>multinomial sampling</em> by calling <code>sample()</code> if <code>num_beams=1</code> and
<code>do_sample=True</code></li> <li><em>beam-search decoding</em> by calling <code>beam_search()</code> if <code>num_beams&gt;1</code></li>`,Ot,Zn,Rs=`You do not need to call any of the above methods directly. Pass custom parameter values to ‘generate’ instead. To
learn more about decoding strategies refer to the <a href="../generation_strategies">text generation strategies guide</a>.`,Pt,K,Ke,Kt,Bn,Vs="Generates sequences of token ids for models with a language modeling head.",es,ke,ns,ee,en,ts,Cn,$s=`Computes the transition scores of sequences given the generation scores (and beam indices, if beam search was
used). This is a convenient method to quicky obtain the scores of the selected tokens at generation time.`,ss,Ze,Dn,nn,qn,I,tn,os,In,Ns=`A class containing all functions for auto-regressive text generation, to be used as a mixin in
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel">FlaxPreTrainedModel</a>.`,as,Wn,zs='The class exposes <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.FlaxGenerationMixin.generate">generate()</a>, which can be used for:',rs,Xn,Es=`<li><em>greedy decoding</em> by calling <code>_greedy_search()</code> if <code>num_beams=1</code> and
<code>do_sample=False</code></li> <li><em>multinomial sampling</em> by calling <code>_sample()</code> if <code>num_beams=1</code> and
<code>do_sample=True</code></li> <li><em>beam-search decoding</em> by calling <code>_beam_search()</code> if <code>num_beams&gt;1</code> and
<code>do_sample=False</code></li>`,is,Rn,Ls=`You do not need to call any of the above methods directly. Pass custom parameter values to ‘generate’ instead. To
learn more about decoding strategies refer to the <a href="../generation_strategies">text generation strategies guide</a>.`,ls,Be,sn,cs,Vn,Ss="Generates sequences of token ids for models with a language modeling head.",On,$n,Pn;return g=new Nn({props:{title:"Generation",local:"generation",headingTag:"h1"}}),Xe=new Nn({props:{title:"GenerationConfig",local:"transformers.GenerationConfig",headingTag:"h2"}}),Re=new C({props:{name:"class transformers.GenerationConfig",anchor:"transformers.GenerationConfig",parameters:[{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/generation/configuration_utils.py#L40",parameterGroups:[{title:"Parameters that control the length of the output",parametersDescription:[{anchor:"transformers.GenerationConfig.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>, defaults to 20) &#x2014;
The maximum length the generated tokens can have. Corresponds to the length of the input prompt +
<code>max_new_tokens</code>. Its effect is overridden by <code>max_new_tokens</code>, if also set.`,name:"max_length"},{anchor:"transformers.GenerationConfig.max_new_tokens",description:`<strong>max_new_tokens</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The maximum numbers of tokens to generate, ignoring the number of tokens in the prompt.`,name:"max_new_tokens"},{anchor:"transformers.GenerationConfig.min_length",description:`<strong>min_length</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The minimum length of the sequence to be generated. Corresponds to the length of the input prompt +
<code>min_new_tokens</code>. Its effect is overridden by <code>min_new_tokens</code>, if also set.`,name:"min_length"},{anchor:"transformers.GenerationConfig.min_new_tokens",description:`<strong>min_new_tokens</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The minimum numbers of tokens to generate, ignoring the number of tokens in the prompt.`,name:"min_new_tokens"},{anchor:"transformers.GenerationConfig.early_stopping",description:`<strong>early_stopping</strong> (<code>bool</code> or <code>str</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Controls the stopping condition for beam-based methods, like beam-search. It accepts the following values:
<code>True</code>, where the generation stops as soon as there are <code>num_beams</code> complete candidates; <code>False</code>, where an
heuristic is applied and the generation stops when is it very unlikely to find better candidates;
<code>&quot;never&quot;</code>, where the beam search procedure only stops when there cannot be better candidates (canonical
beam search algorithm).`,name:"early_stopping"},{anchor:"transformers.GenerationConfig.max_time(float,",description:`<strong>max_time(<code>float</code>,</strong> <em>optional</em>) &#x2014;
The maximum amount of time you allow the computation to run for in seconds. generation will still finish
the current pass after allocated time has been passed.`,name:"max_time(float,"}]},{title:"Parameters that control the generation strategy used",parametersDescription:[{anchor:"transformers.GenerationConfig.do_sample",description:`<strong>do_sample</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use sampling ; use greedy decoding otherwise.`,name:"do_sample"},{anchor:"transformers.GenerationConfig.num_beams",description:`<strong>num_beams</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Number of beams for beam search. 1 means no beam search.`,name:"num_beams"},{anchor:"transformers.GenerationConfig.num_beam_groups",description:`<strong>num_beam_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Number of groups to divide <code>num_beams</code> into in order to ensure diversity among different groups of beams.
<a href="https://arxiv.org/pdf/1610.02424.pdf" rel="nofollow">this paper</a> for more details.`,name:"num_beam_groups"},{anchor:"transformers.GenerationConfig.penalty_alpha",description:`<strong>penalty_alpha</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The values balance the model confidence and the degeneration penalty in contrastive search decoding.`,name:"penalty_alpha"},{anchor:"transformers.GenerationConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should use the past last key/values attentions (if applicable to the model) to
speed up decoding.`,name:"use_cache"}]},{title:"Parameters for manipulation of the model output logits",parametersDescription:[{anchor:"transformers.GenerationConfig.temperature",description:`<strong>temperature</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
The value used to modulate the next token probabilities.`,name:"temperature"},{anchor:"transformers.GenerationConfig.top_k",description:`<strong>top_k</strong> (<code>int</code>, <em>optional</em>, defaults to 50) &#x2014;
The number of highest probability vocabulary tokens to keep for top-k-filtering.`,name:"top_k"},{anchor:"transformers.GenerationConfig.top_p",description:`<strong>top_p</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
If set to float &lt; 1, only the smallest set of most probable tokens with probabilities that add up to
<code>top_p</code> or higher are kept for generation.`,name:"top_p"},{anchor:"transformers.GenerationConfig.typical_p",description:`<strong>typical_p</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Local typicality measures how similar the conditional probability of predicting a target token next is to
the expected conditional probability of predicting a random token next, given the partial text already
generated. If set to float &lt; 1, the smallest set of the most locally typical tokens with probabilities that
add up to <code>typical_p</code> or higher are kept for generation. See <a href="https://arxiv.org/pdf/2202.00666.pdf" rel="nofollow">this
paper</a> for more details.`,name:"typical_p"},{anchor:"transformers.GenerationConfig.epsilon_cutoff",description:`<strong>epsilon_cutoff</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
If set to float strictly between 0 and 1, only tokens with a conditional probability greater than
<code>epsilon_cutoff</code> will be sampled. In the paper, suggested values range from 3e-4 to 9e-4, depending on the
size of the model. See <a href="https://arxiv.org/abs/2210.15191" rel="nofollow">Truncation Sampling as Language Model
Desmoothing</a> for more details.`,name:"epsilon_cutoff"},{anchor:"transformers.GenerationConfig.eta_cutoff",description:`<strong>eta_cutoff</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Eta sampling is a hybrid of locally typical sampling and epsilon sampling. If set to float strictly between
0 and 1, a token is only considered if it is greater than either <code>eta_cutoff</code> or <code>sqrt(eta_cutoff) * exp(-entropy(softmax(next_token_logits)))</code>. The latter term is intuitively the expected next token
probability, scaled by <code>sqrt(eta_cutoff)</code>. In the paper, suggested values range from 3e-4 to 2e-3,
depending on the size of the model. See <a href="https://arxiv.org/abs/2210.15191" rel="nofollow">Truncation Sampling as Language Model
Desmoothing</a> for more details.`,name:"eta_cutoff"},{anchor:"transformers.GenerationConfig.diversity_penalty",description:`<strong>diversity_penalty</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
This value is subtracted from a beam&#x2019;s score if it generates a token same as any beam from other group at a
particular time. Note that <code>diversity_penalty</code> is only effective if <code>group beam search</code> is enabled.`,name:"diversity_penalty"},{anchor:"transformers.GenerationConfig.repetition_penalty",description:`<strong>repetition_penalty</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
The parameter for repetition penalty. 1.0 means no penalty. See <a href="https://arxiv.org/pdf/1909.05858.pdf" rel="nofollow">this
paper</a> for more details.`,name:"repetition_penalty"},{anchor:"transformers.GenerationConfig.encoder_repetition_penalty",description:`<strong>encoder_repetition_penalty</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
The paramater for encoder_repetition_penalty. An exponential penalty on sequences that are not in the
original input. 1.0 means no penalty.`,name:"encoder_repetition_penalty"},{anchor:"transformers.GenerationConfig.length_penalty",description:`<strong>length_penalty</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Exponential penalty to the length that is used with beam-based generation. It is applied as an exponent to
the sequence length, which in turn is used to divide the score of the sequence. Since the score is the log
likelihood of the sequence (i.e. negative), <code>length_penalty</code> &gt; 0.0 promotes longer sequences, while
<code>length_penalty</code> &lt; 0.0 encourages shorter sequences.`,name:"length_penalty"},{anchor:"transformers.GenerationConfig.no_repeat_ngram_size",description:`<strong>no_repeat_ngram_size</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to int &gt; 0, all ngrams of that size can only occur once.`,name:"no_repeat_ngram_size"},{anchor:"transformers.GenerationConfig.bad_words_ids(List[List[int]],",description:`<strong>bad_words_ids(<code>List[List[int]]</code>,</strong> <em>optional</em>) &#x2014;
List of list of token ids that are not allowed to be generated. Check
<a href="/docs/transformers/main/en/internal/generation_utils#transformers.NoBadWordsLogitsProcessor">NoBadWordsLogitsProcessor</a> for further documentation and examples.`,name:"bad_words_ids(List[List[int]],"},{anchor:"transformers.GenerationConfig.force_words_ids(List[List[int]]",description:`<strong>force_words_ids(<code>List[List[int]]</code></strong> or <code>List[List[List[int]]]</code>, <em>optional</em>) &#x2014;
List of token ids that must be generated. If given a <code>List[List[int]]</code>, this is treated as a simple list of
words that must be included, the opposite to <code>bad_words_ids</code>. If given <code>List[List[List[int]]]</code>, this
triggers a <a href="https://github.com/huggingface/transformers/issues/14081" rel="nofollow">disjunctive constraint</a>, where one
can allow different forms of each word.`,name:"force_words_ids(List[List[int]]"},{anchor:"transformers.GenerationConfig.renormalize_logits",description:`<strong>renormalize_logits</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to renormalize the logits after applying all the logits processors or warpers (including the custom
ones). It&#x2019;s highly recommended to set this flag to <code>True</code> as the search algorithms suppose the score logits
are normalized but some logit processors or warpers break the normalization.`,name:"renormalize_logits"},{anchor:"transformers.GenerationConfig.constraints",description:`<strong>constraints</strong> (<code>List[Constraint]</code>, <em>optional</em>) &#x2014;
Custom constraints that can be added to the generation to ensure that the output will contain the use of
certain tokens as defined by <code>Constraint</code> objects, in the most sensible way possible.`,name:"constraints"},{anchor:"transformers.GenerationConfig.forced_bos_token_id",description:`<strong>forced_bos_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to <code>model.config.forced_bos_token_id</code>) &#x2014;
The id of the token to force as the first generated token after the <code>decoder_start_token_id</code>. Useful for
multilingual models like <a href="../model_doc/mbart">mBART</a> where the first generated token needs to be the target
language token.`,name:"forced_bos_token_id"},{anchor:"transformers.GenerationConfig.forced_eos_token_id",description:`<strong>forced_eos_token_id</strong> (<code>Union[int, List[int]]</code>, <em>optional</em>, defaults to <code>model.config.forced_eos_token_id</code>) &#x2014;
The id of the token to force as the last generated token when <code>max_length</code> is reached. Optionally, use a
list to set multiple <em>end-of-sequence</em> tokens.`,name:"forced_eos_token_id"},{anchor:"transformers.GenerationConfig.remove_invalid_values",description:`<strong>remove_invalid_values</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>model.config.remove_invalid_values</code>) &#x2014;
Whether to remove possible <em>nan</em> and <em>inf</em> outputs of the model to prevent the generation method to crash.
Note that using <code>remove_invalid_values</code> can slow down generation.`,name:"remove_invalid_values"},{anchor:"transformers.GenerationConfig.exponential_decay_length_penalty",description:`<strong>exponential_decay_length_penalty</strong> (<code>tuple(int, float)</code>, <em>optional</em>) &#x2014;
This Tuple adds an exponentially increasing length penalty, after a certain amount of tokens have been
generated. The tuple shall consist of: <code>(start_index, decay_factor)</code> where <code>start_index</code> indicates where
penalty starts and <code>decay_factor</code> represents the factor of exponential decay`,name:"exponential_decay_length_penalty"},{anchor:"transformers.GenerationConfig.suppress_tokens",description:`<strong>suppress_tokens</strong>  (<code>List[int]</code>, <em>optional</em>) &#x2014;
A list of tokens that will be suppressed at generation. The <code>SupressTokens</code> logit processor will set their
log probs to <code>-inf</code> so that they are not sampled.`,name:"suppress_tokens"},{anchor:"transformers.GenerationConfig.begin_suppress_tokens",description:`<strong>begin_suppress_tokens</strong>  (<code>List[int]</code>, <em>optional</em>) &#x2014;
A list of tokens that will be suppressed at the beginning of the generation. The <code>SupressBeginTokens</code> logit
processor will set their log probs to <code>-inf</code> so that they are not sampled.`,name:"begin_suppress_tokens"},{anchor:"transformers.GenerationConfig.forced_decoder_ids",description:`<strong>forced_decoder_ids</strong> (<code>List[List[int]]</code>, <em>optional</em>) &#x2014;
A list of pairs of integers which indicates a mapping from generation indices to token indices that will be
forced before sampling. For example, <code>[[1, 123]]</code> means the second generated token will always be a token
of index 123.`,name:"forced_decoder_ids"},{anchor:"transformers.GenerationConfig.sequence_bias",description:`<strong>sequence_bias</strong> (<code>Dict[Tuple[int], float]</code>, <em>optional</em>)) &#x2014;
Dictionary that maps a sequence of tokens to its bias term. Positive biases increase the odds of the
sequence being selected, while negative biases do the opposite. Check
<a href="/docs/transformers/main/en/internal/generation_utils#transformers.SequenceBiasLogitsProcessor">SequenceBiasLogitsProcessor</a> for further documentation and examples.`,name:"sequence_bias"},{anchor:"transformers.GenerationConfig.guidance_scale",description:`<strong>guidance_scale</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The guidance scale for classifier free guidance (CFG). CFG is enabled by setting <code>guidance_scale &gt; 1</code>.
Higher guidance scale encourages the model to generate samples that are more closely linked to the input
prompt, usually at the expense of poorer quality.`,name:"guidance_scale"},{anchor:"transformers.GenerationConfig.low_memory",description:`<strong>low_memory</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Switch to sequential beam search and sequential topk for contrastive search to reduce peak memory.
Used with beam search and contrastive search.`,name:"low_memory"}]},{title:"Parameters that define the output variables of `generate`",parametersDescription:[{anchor:"transformers.GenerationConfig.num_return_sequences(int,",description:`<strong>num_return_sequences(<code>int</code>,</strong> <em>optional</em>, defaults to 1) &#x2014;
The number of independently computed returned sequences for each element in the batch.`,name:"num_return_sequences(int,"},{anchor:"transformers.GenerationConfig.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more details.`,name:"output_attentions"},{anchor:"transformers.GenerationConfig.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more details.`,name:"output_hidden_states"},{anchor:"transformers.GenerationConfig.output_scores",description:`<strong>output_scores</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the prediction scores. See <code>scores</code> under returned tensors for more details.`,name:"output_scores"},{anchor:"transformers.GenerationConfig.return_dict_in_generate",description:`<strong>return_dict_in_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"}]},{title:"Special tokens that can be used at generation time",parametersDescription:[{anchor:"transformers.GenerationConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>padding</em> token.`,name:"pad_token_id"},{anchor:"transformers.GenerationConfig.bos_token_id",description:`<strong>bos_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>beginning-of-sequence</em> token.`,name:"bos_token_id"},{anchor:"transformers.GenerationConfig.eos_token_id",description:`<strong>eos_token_id</strong> (<code>Union[int, List[int]]</code>, <em>optional</em>) &#x2014;
The id of the <em>end-of-sequence</em> token. Optionally, use a list to set multiple <em>end-of-sequence</em> tokens.`,name:"eos_token_id"}]},{title:"Generation parameters exclusive to encoder-decoder models",parametersDescription:[{anchor:"transformers.GenerationConfig.encoder_no_repeat_ngram_size",description:`<strong>encoder_no_repeat_ngram_size</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to int &gt; 0, all ngrams of that size that occur in the <code>encoder_input_ids</code> cannot occur in the
<code>decoder_input_ids</code>.`,name:"encoder_no_repeat_ngram_size"},{anchor:"transformers.GenerationConfig.decoder_start_token_id",description:`<strong>decoder_start_token_id</strong> (<code>Union[int, List[int]]</code>, <em>optional</em>) &#x2014;
If an encoder-decoder model starts decoding with a different token than <em>bos</em>, the id of that token or a list of length
<code>batch_size</code>. Indicating a list enables different start ids for each element in the batch
(e.g. multilingual models with different target languages in one batch)`,name:"decoder_start_token_id"}]},{title:"Generation parameters exclusive to [assistant generation](https",parametersDescription:[{anchor:"transformers.GenerationConfig.num_assistant_tokens",description:`<strong>num_assistant_tokens</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
Defines the number of <em>speculative tokens</em> that shall be generated by the assistant model before being
checked by the target model at each iteration. Higher values for <code>num_assistant_tokens</code> make the generation
more <em>speculative</em> : If the assistant model is performant larger speed-ups can be reached, if the assistant
model requires lots of corrections, lower speed-ups are reached.`,name:"num_assistant_tokens"},{anchor:"transformers.GenerationConfig.num_assistant_tokens_schedule",description:`<strong>num_assistant_tokens_schedule</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;heuristic&quot;</code>) &#x2014;
Defines the schedule at which max assistant tokens shall be changed during inference.</p>
<ul>
<li><code>&quot;heuristic&quot;</code>: When all speculative tokens are correct, increase <code>num_assistant_tokens</code> by 2 else
reduce by 1. <code>num_assistant_tokens</code> value is persistent over multiple generation calls with the same assistant model.</li>
<li><code>&quot;heuristic_transient&quot;</code>: Same as <code>&quot;heuristic&quot;</code> but <code>num_assistant_tokens</code> is reset to its initial value after each generation call.</li>
<li><code>&quot;constant&quot;</code>: <code>num_assistant_tokens</code> stays unchanged during generation</li>
</ul>`,name:"num_assistant_tokens_schedule"}]},{title:"Parameters specific to the caching mechanism",parametersDescription:[{anchor:"transformers.GenerationConfig.cache_implementation",description:`<strong>cache_implementation</strong> (<code>str</code>, <em>optional</em>, default to <code>None</code>) &#x2014;
Cache class that should be used when generating.`,name:"cache_implementation"}]},{title:"Wild card",parametersDescription:[]}]}}),ce=new ne({props:{$$slots:{default:[qs]},$$scope:{ctx:w}}}),Ve=new C({props:{name:"from_pretrained",anchor:"transformers.GenerationConfig.from_pretrained",parameters:[{name:"pretrained_model_name",val:": Union"},{name:"config_file_name",val:": Union = None"},{name:"cache_dir",val:": Union = None"},{name:"force_download",val:": bool = False"},{name:"local_files_only",val:": bool = False"},{name:"token",val:": Union = None"},{name:"revision",val:": str = 'main'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GenerationConfig.from_pretrained.pretrained_model_name",description:`<strong>pretrained_model_name</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
This can be either:</p>
<ul>
<li>a string, the <em>model id</em> of a pretrained model configuration hosted inside a model repo on
huggingface.co.</li>
<li>a path to a <em>directory</em> containing a configuration file saved using the
<a href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationConfig.save_pretrained">save_pretrained()</a> method, e.g., <code>./my_model_directory/</code>.</li>
</ul>`,name:"pretrained_model_name"},{anchor:"transformers.GenerationConfig.from_pretrained.config_file_name",description:`<strong>config_file_name</strong> (<code>str</code> or <code>os.PathLike</code>, <em>optional</em>, defaults to <code>&quot;generation_config.json&quot;</code>) &#x2014;
Name of the generation configuration JSON file to be loaded from <code>pretrained_model_name</code>.`,name:"config_file_name"},{anchor:"transformers.GenerationConfig.from_pretrained.cache_dir",description:`<strong>cache_dir</strong> (<code>str</code> or <code>os.PathLike</code>, <em>optional</em>) &#x2014;
Path to a directory in which a downloaded pretrained model configuration should be cached if the
standard cache should not be used.`,name:"cache_dir"},{anchor:"transformers.GenerationConfig.from_pretrained.force_download",description:`<strong>force_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to force to (re-)download the configuration files and override the cached versions if
they exist.`,name:"force_download"},{anchor:"transformers.GenerationConfig.from_pretrained.resume_download",description:`<strong>resume_download</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to delete incompletely received file. Attempts to resume the download if such a file
exists.`,name:"resume_download"},{anchor:"transformers.GenerationConfig.from_pretrained.proxies",description:`<strong>proxies</strong> (<code>Dict[str, str]</code>, <em>optional</em>) &#x2014;
A dictionary of proxy servers to use by protocol or endpoint, e.g., <code>{&apos;http&apos;: &apos;foo.bar:3128&apos;, &apos;http://hostname&apos;: &apos;foo.bar:4012&apos;}.</code> The proxies are used on each request.`,name:"proxies"},{anchor:"transformers.GenerationConfig.from_pretrained.token",description:`<strong>token</strong> (<code>str</code> or <code>bool</code>, <em>optional</em>) &#x2014;
The token to use as HTTP bearer authorization for remote files. If <code>True</code>, or not specified, will use
the token generated when running <code>huggingface-cli login</code> (stored in <code>~/.huggingface</code>).`,name:"token"},{anchor:"transformers.GenerationConfig.from_pretrained.revision",description:`<strong>revision</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;main&quot;</code>) &#x2014;
The specific model version to use. It can be a branch name, a tag name, or a commit id, since we use a
git-based system for storing models and other artifacts on huggingface.co, so <code>revision</code> can be any
identifier allowed by git.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>To test a pull request you made on the Hub, you can pass \`revision=&#x201C;refs/pr/<pr_number>&#x201C;.</pr_number></p>

					</div>`,name:"revision"},{anchor:"transformers.GenerationConfig.from_pretrained.return_unused_kwargs",description:`<strong>return_unused_kwargs</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
If <code>False</code>, then this function returns just the final configuration object.</p>
<p>If <code>True</code>, then this functions returns a <code>Tuple(config, unused_kwargs)</code> where <em>unused_kwargs</em> is a
dictionary consisting of the key/value pairs whose keys are not configuration attributes: i.e., the
part of <code>kwargs</code> which has not been used to update <code>config</code> and is otherwise ignored.`,name:"return_unused_kwargs"},{anchor:"transformers.GenerationConfig.from_pretrained.subfolder",description:`<strong>subfolder</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&quot;</code>) &#x2014;
In case the relevant files are located inside a subfolder of the model repo on huggingface.co, you can
specify the folder name here.`,name:"subfolder"},{anchor:"transformers.GenerationConfig.from_pretrained.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, Any]</code>, <em>optional</em>) &#x2014;
The values in kwargs of any keys which are configuration attributes will be used to override the loaded
values. Behavior concerning key/value pairs whose keys are <em>not</em> configuration attributes is controlled
by the <code>return_unused_kwargs</code> keyword parameter.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/generation/configuration_utils.py#L620",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The configuration object instantiated from this pretrained model.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationConfig"
>GenerationConfig</a></p>
`}}),de=new te({props:{anchor:"transformers.GenerationConfig.from_pretrained.example",$$slots:{default:[Os]},$$scope:{ctx:w}}}),$e=new C({props:{name:"from_model_config",anchor:"transformers.GenerationConfig.from_model_config",parameters:[{name:"model_config",val:": PretrainedConfig"}],parametersDescription:[{anchor:"transformers.GenerationConfig.from_model_config.model_config",description:`<strong>model_config</strong> (<code>PretrainedConfig</code>) &#x2014;
The model config that will be used to instantiate the generation config.`,name:"model_config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/generation/configuration_utils.py#L951",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The configuration object instantiated from those parameters.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationConfig"
>GenerationConfig</a></p>
`}}),Ne=new C({props:{name:"save_pretrained",anchor:"transformers.GenerationConfig.save_pretrained",parameters:[{name:"save_directory",val:": Union"},{name:"config_file_name",val:": Union = None"},{name:"push_to_hub",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GenerationConfig.save_pretrained.save_directory",description:`<strong>save_directory</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
Directory where the configuration JSON file will be saved (will be created if it does not exist).`,name:"save_directory"},{anchor:"transformers.GenerationConfig.save_pretrained.config_file_name",description:`<strong>config_file_name</strong> (<code>str</code> or <code>os.PathLike</code>, <em>optional</em>, defaults to <code>&quot;generation_config.json&quot;</code>) &#x2014;
Name of the generation configuration JSON file to be saved in <code>save_directory</code>.`,name:"config_file_name"},{anchor:"transformers.GenerationConfig.save_pretrained.push_to_hub",description:`<strong>push_to_hub</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to push your model to the Hugging Face model hub after saving it. You can specify the
repository you want to push to with <code>repo_id</code> (will default to the name of <code>save_directory</code> in your
namespace).`,name:"push_to_hub"},{anchor:"transformers.GenerationConfig.save_pretrained.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, Any]</code>, <em>optional</em>) &#x2014;
Additional key word arguments passed along to the <a href="/docs/transformers/main/en/main_classes/model#transformers.utils.PushToHubMixin.push_to_hub">push_to_hub()</a> method.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/generation/configuration_utils.py#L544"}}),ze=new Nn({props:{title:"GenerationMixin",local:"transformers.GenerationMixin",headingTag:"h2"}}),Ee=new C({props:{name:"class transformers.GenerationMixin",anchor:"transformers.GenerationMixin",parameters:[],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/generation/utils.py#L325"}}),Le=new C({props:{name:"generate",anchor:"transformers.GenerationMixin.generate",parameters:[{name:"inputs",val:": Optional = None"},{name:"generation_config",val:": Optional = None"},{name:"logits_processor",val:": Optional = None"},{name:"stopping_criteria",val:": Optional = None"},{name:"prefix_allowed_tokens_fn",val:": Optional = None"},{name:"synced_gpus",val:": Optional = None"},{name:"assistant_model",val:": Optional = None"},{name:"streamer",val:": Optional = None"},{name:"negative_prompt_ids",val:": Optional = None"},{name:"negative_prompt_attention_mask",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GenerationMixin.generate.inputs",description:`<strong>inputs</strong> (<code>torch.Tensor</code> of varying shape depending on the modality, <em>optional</em>) &#x2014;
The sequence used as a prompt for the generation or as model inputs to the encoder. If <code>None</code> the
method initializes it with <code>bos_token_id</code> and a batch size of 1. For decoder-only models <code>inputs</code>
should of in the format of <code>input_ids</code>. For encoder-decoder models <em>inputs</em> can represent any of
<code>input_ids</code>, <code>input_values</code>, <code>input_features</code>, or <code>pixel_values</code>.`,name:"inputs"},{anchor:"transformers.GenerationMixin.generate.generation_config",description:`<strong>generation_config</strong> (<code>~generation.GenerationConfig</code>, <em>optional</em>) &#x2014;
The generation configuration to be used as base parametrization for the generation call. <code>**kwargs</code>
passed to generate matching the attributes of <code>generation_config</code> will override them. If
<code>generation_config</code> is not provided, the default will be used, which had the following loading
priority: 1) from the <code>generation_config.json</code> model file, if it exists; 2) from the model
configuration. Please note that unspecified parameters will inherit <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationConfig">GenerationConfig</a>&#x2019;s
default values, whose documentation should be checked to parameterize generation.`,name:"generation_config"},{anchor:"transformers.GenerationMixin.generate.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
Custom logits processors that complement the default logits processors built from arguments and
generation config. If a logit processor is passed that is already created with the arguments or a
generation config an error is thrown. This feature is intended for advanced users.`,name:"logits_processor"},{anchor:"transformers.GenerationMixin.generate.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
Custom stopping criteria that complement the default stopping criteria built from arguments and a
generation config. If a stopping criteria is passed that is already created with the arguments or a
generation config an error is thrown. If your stopping criteria depends on the <code>scores</code> input, make
sure you pass <code>return_dict_in_generate=True, output_scores=True</code> to <code>generate</code>. This feature is
intended for advanced users.`,name:"stopping_criteria"},{anchor:"transformers.GenerationMixin.generate.prefix_allowed_tokens_fn",description:`<strong>prefix_allowed_tokens_fn</strong> (<code>Callable[[int, torch.Tensor], List[int]]</code>, <em>optional</em>) &#x2014;
If provided, this function constraints the beam search to allowed tokens only at each step. If not
provided no constraint is applied. This function takes 2 arguments: the batch ID <code>batch_id</code> and
<code>input_ids</code>. It has to return a list with the allowed tokens for the next generation step conditioned
on the batch ID <code>batch_id</code> and the previously generated tokens <code>inputs_ids</code>. This argument is useful
for constrained generation conditioned on the prefix, as described in <a href="https://arxiv.org/abs/2010.00904" rel="nofollow">Autoregressive Entity
Retrieval</a>.`,name:"prefix_allowed_tokens_fn"},{anchor:"transformers.GenerationMixin.generate.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to continue running the while loop until max_length. Unless overridden this flag will be set to
<code>True</code> under DeepSpeed ZeRO Stage 3 multiple GPUs environment to avoid hanging if one GPU finished
generating before other GPUs. Otherwise it&#x2019;ll be set to <code>False</code>.`,name:"synced_gpus"},{anchor:"transformers.GenerationMixin.generate.assistant_model",description:`<strong>assistant_model</strong> (<code>PreTrainedModel</code>, <em>optional</em>) &#x2014;
An assistant model that can be used to accelerate generation. The assistant model must have the exact
same tokenizer. The acceleration is achieved when forecasting candidate tokens with the assistent model
is much faster than running generation with the model you&#x2019;re calling generate from. As such, the
assistant model should be much smaller.`,name:"assistant_model"},{anchor:"transformers.GenerationMixin.generate.streamer",description:`<strong>streamer</strong> (<code>BaseStreamer</code>, <em>optional</em>) &#x2014;
Streamer object that will be used to stream the generated sequences. Generated tokens are passed
through <code>streamer.put(token_ids)</code> and the streamer is responsible for any further processing.`,name:"streamer"},{anchor:"transformers.GenerationMixin.generate.negative_prompt_ids",description:`<strong>negative_prompt_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
The negative prompt needed for some processors such as CFG. The batch size must match the input batch
size. This is an experimental feature, subject to breaking API changes in future versions.`,name:"negative_prompt_ids"},{anchor:"transformers.GenerationMixin.generate.negative_prompt_attention_mask",description:`<strong>negative_prompt_attention_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Attention_mask for <code>negative_prompt_ids</code>.`,name:"negative_prompt_attention_mask"},{anchor:"transformers.GenerationMixin.generate.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, Any]</code>, <em>optional</em>) &#x2014;
Ad hoc parametrization of <code>generate_config</code> and/or additional model-specific kwargs that will be
forwarded to the <code>forward</code> function of the model. If the model is an encoder-decoder model, encoder
specific kwargs should not be prefixed and decoder specific kwargs should be prefixed with <em>decoder_</em>.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/generation/utils.py#L1197",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> (if <code>return_dict_in_generate=True</code>
or when <code>config.return_dict_in_generate=True</code>) or a <code>torch.FloatTensor</code>.</p>
<p>If the model is <em>not</em> an encoder-decoder model (<code>model.config.is_encoder_decoder=False</code>), the possible
<a
  href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> types are:</p>
<ul>
<li><a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateDecoderOnlyOutput"
>GenerateDecoderOnlyOutput</a>,</li>
<li><a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateBeamDecoderOnlyOutput"
>GenerateBeamDecoderOnlyOutput</a></li>
</ul>
<p>If the model is an encoder-decoder model (<code>model.config.is_encoder_decoder=True</code>), the possible
<a
  href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> types are:</p>
<ul>
<li><a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateEncoderDecoderOutput"
>GenerateEncoderDecoderOutput</a>,</li>
<li><a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateBeamEncoderDecoderOutput"
>GenerateBeamEncoderDecoderOutput</a></li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> or <code>torch.LongTensor</code></p>
`}}),ge=new ne({props:{warning:!0,$$slots:{default:[Ps]},$$scope:{ctx:w}}}),Se=new C({props:{name:"compute_transition_scores",anchor:"transformers.GenerationMixin.compute_transition_scores",parameters:[{name:"sequences",val:": Tensor"},{name:"scores",val:": Tuple"},{name:"beam_indices",val:": Optional = None"},{name:"normalize_logits",val:": bool = False"}],parametersDescription:[{anchor:"transformers.GenerationMixin.compute_transition_scores.sequences",description:`<strong>sequences</strong> (<code>torch.LongTensor</code>) &#x2014;
The generated sequences. The second dimension (sequence_length) is either equal to <code>max_length</code> or
shorter if all batches finished early due to the <code>eos_token_id</code>.`,name:"sequences"},{anchor:"transformers.GenerationMixin.compute_transition_scores.scores",description:`<strong>scores</strong> (<code>tuple(torch.FloatTensor)</code>) &#x2014;
Transition scores for each vocabulary token at each generation step. Beam transition scores consisting
of log probabilities of tokens conditioned on log softmax of previously generated tokens Tuple of
<code>torch.FloatTensor</code> with up to <code>max_new_tokens</code> elements (one element for each generated token), with
each tensor of shape <code>(batch_size*num_beams, config.vocab_size)</code>.`,name:"scores"},{anchor:"transformers.GenerationMixin.compute_transition_scores.beam_indices",description:`<strong>beam_indices</strong> (<code>torch.LongTensor</code>, <em>optional</em>) &#x2014;
Beam indices of generated token id at each generation step. <code>torch.LongTensor</code> of shape
<code>(batch_size*num_return_sequences, sequence_length)</code>. Only required if a <code>num_beams&gt;1</code> at
generate-time.`,name:"beam_indices"},{anchor:"transformers.GenerationMixin.compute_transition_scores.normalize_logits",description:`<strong>normalize_logits</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to normalize the logits (which, for legacy reasons, may be unnormalized).`,name:"normalize_logits"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/generation/utils.py#L944",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>torch.Tensor</code> of shape <code>(batch_size*num_return_sequences, sequence_length)</code> containing
the transition scores (logits)</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>torch.Tensor</code></p>
`}}),ue=new te({props:{anchor:"transformers.GenerationMixin.compute_transition_scores.example",$$slots:{default:[Ks]},$$scope:{ctx:w}}}),Fe=new C({props:{name:"greedy_search",anchor:"transformers.GenerationMixin.greedy_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"logits_processor",val:": Optional = None"},{name:"stopping_criteria",val:": Optional = None"},{name:"max_length",val:": Optional = None"},{name:"pad_token_id",val:": Optional = None"},{name:"eos_token_id",val:": Union = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"output_scores",val:": Optional = None"},{name:"return_dict_in_generate",val:": Optional = None"},{name:"synced_gpus",val:": bool = False"},{name:"streamer",val:": Optional = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.GenerationMixin.greedy_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.GenerationMixin.greedy_search.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.GenerationMixin.greedy_search.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
used to tell if the generation loop should stop.`,name:"stopping_criteria"},{anchor:"transformers.GenerationMixin.greedy_search.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>, defaults to 20) &#x2014;
<strong>DEPRECATED</strong>. Use <code>logits_processor</code> or <code>stopping_criteria</code> directly to cap the number of generated
tokens. The maximum length of the sequence to be generated.`,name:"max_length"},{anchor:"transformers.GenerationMixin.greedy_search.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>padding</em> token.`,name:"pad_token_id"},{anchor:"transformers.GenerationMixin.greedy_search.eos_token_id",description:`<strong>eos_token_id</strong> (<code>Union[int, List[int]]</code>, <em>optional</em>) &#x2014;
The id of the <em>end-of-sequence</em> token. Optionally, use a list to set multiple <em>end-of-sequence</em> tokens.`,name:"eos_token_id"},{anchor:"transformers.GenerationMixin.greedy_search.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more details.`,name:"output_attentions"},{anchor:"transformers.GenerationMixin.greedy_search.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more details.`,name:"output_hidden_states"},{anchor:"transformers.GenerationMixin.greedy_search.output_scores",description:`<strong>output_scores</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the prediction scores. See <code>scores</code> under returned tensors for more details.`,name:"output_scores"},{anchor:"transformers.GenerationMixin.greedy_search.return_dict_in_generate",description:`<strong>return_dict_in_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.GenerationMixin.greedy_search.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)`,name:"synced_gpus"},{anchor:"transformers.GenerationMixin.greedy_search.streamer",description:`<strong>streamer</strong> (<code>BaseStreamer</code>, <em>optional</em>) &#x2014;
Streamer object that will be used to stream the generated sequences. Generated tokens are passed
through <code>streamer.put(token_ids)</code> and the streamer is responsible for any further processing.
model_kwargs &#x2014;
Additional model specific keyword arguments will be forwarded to the <code>forward</code> function of the model.
If model is an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"streamer"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/generation/utils.py#L2193",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateDecoderOnlyOutput"
>GenerateDecoderOnlyOutput</a>, <a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateEncoderDecoderOutput"
>GenerateEncoderDecoderOutput</a> or
<code>torch.LongTensor</code>: A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateDecoderOnlyOutput"
>GenerateDecoderOnlyOutput</a> if <code>model.config.is_encoder_decoder=False</code> and
<code>return_dict_in_generate=True</code> or a <a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateEncoderDecoderOutput"
>GenerateEncoderDecoderOutput</a> if
<code>model.config.is_encoder_decoder=True</code>.</p>
`}}),he=new ne({props:{warning:!0,$$slots:{default:[eo]},$$scope:{ctx:w}}}),fe=new te({props:{anchor:"transformers.GenerationMixin.greedy_search.example",$$slots:{default:[no]},$$scope:{ctx:w}}}),He=new C({props:{name:"sample",anchor:"transformers.GenerationMixin.sample",parameters:[{name:"input_ids",val:": LongTensor"},{name:"logits_processor",val:": Optional = None"},{name:"stopping_criteria",val:": Optional = None"},{name:"logits_warper",val:": Optional = None"},{name:"max_length",val:": Optional = None"},{name:"pad_token_id",val:": Optional = None"},{name:"eos_token_id",val:": Union = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"output_scores",val:": Optional = None"},{name:"return_dict_in_generate",val:": Optional = None"},{name:"synced_gpus",val:": bool = False"},{name:"streamer",val:": Optional = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.GenerationMixin.sample.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.GenerationMixin.sample.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.GenerationMixin.sample.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
used to tell if the generation loop should stop.`,name:"stopping_criteria"},{anchor:"transformers.GenerationMixin.sample.logits_warper",description:`<strong>logits_warper</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsWarper">LogitsWarper</a> used
to warp the prediction score distribution of the language modeling head applied before multinomial
sampling at each generation step.`,name:"logits_warper"},{anchor:"transformers.GenerationMixin.sample.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>, defaults to 20) &#x2014;
<strong>DEPRECATED</strong>. Use <code>logits_processor</code> or <code>stopping_criteria</code> directly to cap the number of generated
tokens. The maximum length of the sequence to be generated.`,name:"max_length"},{anchor:"transformers.GenerationMixin.sample.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>padding</em> token.`,name:"pad_token_id"},{anchor:"transformers.GenerationMixin.sample.eos_token_id",description:`<strong>eos_token_id</strong> (<code>Union[int, List[int]]</code>, <em>optional</em>) &#x2014;
The id of the <em>end-of-sequence</em> token. Optionally, use a list to set multiple <em>end-of-sequence</em> tokens.`,name:"eos_token_id"},{anchor:"transformers.GenerationMixin.sample.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more details.`,name:"output_attentions"},{anchor:"transformers.GenerationMixin.sample.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more details.`,name:"output_hidden_states"},{anchor:"transformers.GenerationMixin.sample.output_scores",description:`<strong>output_scores</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the prediction scores. See <code>scores</code> under returned tensors for more details.`,name:"output_scores"},{anchor:"transformers.GenerationMixin.sample.return_dict_in_generate",description:`<strong>return_dict_in_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.GenerationMixin.sample.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)`,name:"synced_gpus"},{anchor:"transformers.GenerationMixin.sample.streamer",description:`<strong>streamer</strong> (<code>BaseStreamer</code>, <em>optional</em>) &#x2014;
Streamer object that will be used to stream the generated sequences. Generated tokens are passed
through <code>streamer.put(token_ids)</code> and the streamer is responsible for any further processing.
model_kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model. If model is
an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"streamer"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/generation/utils.py#L2454",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateDecoderOnlyOutput"
>GenerateDecoderOnlyOutput</a> if <code>model.config.is_encoder_decoder=False</code> and
<code>return_dict_in_generate=True</code> or a <a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateEncoderDecoderOutput"
>GenerateEncoderDecoderOutput</a> if
<code>model.config.is_encoder_decoder=True</code>.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateDecoderOnlyOutput"
>GenerateDecoderOnlyOutput</a>, <a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateEncoderDecoderOutput"
>GenerateEncoderDecoderOutput</a> or <code>torch.LongTensor</code></p>
`}}),_e=new ne({props:{warning:!0,$$slots:{default:[to]},$$scope:{ctx:w}}}),Me=new te({props:{anchor:"transformers.GenerationMixin.sample.example",$$slots:{default:[so]},$$scope:{ctx:w}}}),Qe=new C({props:{name:"beam_search",anchor:"transformers.GenerationMixin.beam_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"beam_scorer",val:": BeamScorer"},{name:"logits_processor",val:": Optional = None"},{name:"stopping_criteria",val:": Optional = None"},{name:"max_length",val:": Optional = None"},{name:"pad_token_id",val:": Optional = None"},{name:"eos_token_id",val:": Union = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"output_scores",val:": Optional = None"},{name:"return_dict_in_generate",val:": Optional = None"},{name:"synced_gpus",val:": bool = False"},{name:"sequential",val:": Optional = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.GenerationMixin.beam_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.GenerationMixin.beam_search.beam_scorer",description:`<strong>beam_scorer</strong> (<code>BeamScorer</code>) &#x2014;
An derived instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> that defines how beam hypotheses are constructed, stored and
sorted during generation. For more information, the documentation of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> should be read.`,name:"beam_scorer"},{anchor:"transformers.GenerationMixin.beam_search.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.GenerationMixin.beam_search.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
used to tell if the generation loop should stop.`,name:"stopping_criteria"},{anchor:"transformers.GenerationMixin.beam_search.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>, defaults to 20) &#x2014;
<strong>DEPRECATED</strong>. Use <code>logits_processor</code> or <code>stopping_criteria</code> directly to cap the number of generated
tokens. The maximum length of the sequence to be generated.`,name:"max_length"},{anchor:"transformers.GenerationMixin.beam_search.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>padding</em> token.`,name:"pad_token_id"},{anchor:"transformers.GenerationMixin.beam_search.eos_token_id",description:`<strong>eos_token_id</strong> (<code>Union[int, List[int]]</code>, <em>optional</em>) &#x2014;
The id of the <em>end-of-sequence</em> token. Optionally, use a list to set multiple <em>end-of-sequence</em> tokens.`,name:"eos_token_id"},{anchor:"transformers.GenerationMixin.beam_search.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more details.`,name:"output_attentions"},{anchor:"transformers.GenerationMixin.beam_search.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more details.`,name:"output_hidden_states"},{anchor:"transformers.GenerationMixin.beam_search.output_scores",description:`<strong>output_scores</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the prediction scores. See <code>scores</code> under returned tensors for more details.`,name:"output_scores"},{anchor:"transformers.GenerationMixin.beam_search.return_dict_in_generate",description:`<strong>return_dict_in_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.GenerationMixin.beam_search.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)`,name:"synced_gpus"},{anchor:"transformers.GenerationMixin.beam_search.sequential",description:`<strong>sequential</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
By default, beam search has <code>batch_size * num_beams</code> as effective batch size (see <code>beam_search()</code> for
more details). This flag will avoid parallelizing the beam search and will instead run beam search
sequentially.
model_kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model. If model is
an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"sequential"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/generation/utils.py#L2764",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateBeamDecoderOnlyOutput"
>generation.GenerateBeamDecoderOnlyOutput</a>, <a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateBeamEncoderDecoderOutput"
>GenerateBeamEncoderDecoderOutput</a> or
<code>torch.LongTensor</code>: A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateBeamDecoderOnlyOutput"
>GenerateBeamDecoderOnlyOutput</a> if <code>model.config.is_encoder_decoder=False</code> and
<code>return_dict_in_generate=True</code> or a <a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateBeamEncoderDecoderOutput"
>GenerateBeamEncoderDecoderOutput</a> if
<code>model.config.is_encoder_decoder=True</code>.</p>
`}}),be=new ne({props:{warning:!0,$$slots:{default:[oo]},$$scope:{ctx:w}}}),ye=new te({props:{anchor:"transformers.GenerationMixin.beam_search.example",$$slots:{default:[ao]},$$scope:{ctx:w}}}),Ye=new C({props:{name:"beam_sample",anchor:"transformers.GenerationMixin.beam_sample",parameters:[{name:"input_ids",val:": LongTensor"},{name:"beam_scorer",val:": BeamScorer"},{name:"logits_processor",val:": Optional = None"},{name:"stopping_criteria",val:": Optional = None"},{name:"logits_warper",val:": Optional = None"},{name:"max_length",val:": Optional = None"},{name:"pad_token_id",val:": Optional = None"},{name:"eos_token_id",val:": Union = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"output_scores",val:": Optional = None"},{name:"return_dict_in_generate",val:": Optional = None"},{name:"synced_gpus",val:": bool = False"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.GenerationMixin.beam_sample.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.GenerationMixin.beam_sample.beam_scorer",description:`<strong>beam_scorer</strong> (<code>BeamScorer</code>) &#x2014;
A derived instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> that defines how beam hypotheses are constructed, stored and
sorted during generation. For more information, the documentation of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> should be read.`,name:"beam_scorer"},{anchor:"transformers.GenerationMixin.beam_sample.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.GenerationMixin.beam_sample.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
used to tell if the generation loop should stop.`,name:"stopping_criteria"},{anchor:"transformers.GenerationMixin.beam_sample.logits_warper",description:`<strong>logits_warper</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsWarper">LogitsWarper</a> used
to warp the prediction score distribution of the language modeling head applied before multinomial
sampling at each generation step.`,name:"logits_warper"},{anchor:"transformers.GenerationMixin.beam_sample.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>, defaults to 20) &#x2014;
<strong>DEPRECATED</strong>. Use <code>logits_processor</code> or <code>stopping_criteria</code> directly to cap the number of generated
tokens. The maximum length of the sequence to be generated.`,name:"max_length"},{anchor:"transformers.GenerationMixin.beam_sample.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>padding</em> token.`,name:"pad_token_id"},{anchor:"transformers.GenerationMixin.beam_sample.eos_token_id",description:`<strong>eos_token_id</strong> (<code>Union[int, List[int]]</code>, <em>optional</em>) &#x2014;
The id of the <em>end-of-sequence</em> token. Optionally, use a list to set multiple <em>end-of-sequence</em> tokens.`,name:"eos_token_id"},{anchor:"transformers.GenerationMixin.beam_sample.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more details.`,name:"output_attentions"},{anchor:"transformers.GenerationMixin.beam_sample.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more details.`,name:"output_hidden_states"},{anchor:"transformers.GenerationMixin.beam_sample.output_scores",description:`<strong>output_scores</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the prediction scores. See <code>scores</code> under returned tensors for more details.`,name:"output_scores"},{anchor:"transformers.GenerationMixin.beam_sample.return_dict_in_generate",description:`<strong>return_dict_in_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.GenerationMixin.beam_sample.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)
model_kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model. If model is
an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/generation/utils.py#L3137",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateBeamDecoderOnlyOutput"
>GenerateBeamDecoderOnlyOutput</a>, <a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateBeamEncoderDecoderOutput"
>GenerateBeamEncoderDecoderOutput</a> or
<code>torch.LongTensor</code>: A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateBeamDecoderOnlyOutput"
>GenerateBeamDecoderOnlyOutput</a> if <code>model.config.is_encoder_decoder=False</code> and
<code>return_dict_in_generate=True</code> or a <a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateBeamEncoderDecoderOutput"
>GenerateBeamEncoderDecoderOutput</a> if
<code>model.config.is_encoder_decoder=True</code>.</p>
`}}),Te=new ne({props:{warning:!0,$$slots:{default:[ro]},$$scope:{ctx:w}}}),je=new te({props:{anchor:"transformers.GenerationMixin.beam_sample.example",$$slots:{default:[io]},$$scope:{ctx:w}}}),Ae=new C({props:{name:"contrastive_search",anchor:"transformers.GenerationMixin.contrastive_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"top_k",val:": Optional = 1"},{name:"penalty_alpha",val:": Optional = 0"},{name:"logits_processor",val:": Optional = None"},{name:"logits_warper",val:": Optional = None"},{name:"stopping_criteria",val:": Optional = None"},{name:"pad_token_id",val:": Optional = None"},{name:"eos_token_id",val:": Union = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"output_scores",val:": Optional = None"},{name:"return_dict_in_generate",val:": Optional = None"},{name:"synced_gpus",val:": bool = False"},{name:"streamer",val:": Optional = None"},{name:"sequential",val:": Optional = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.GenerationMixin.contrastive_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.GenerationMixin.contrastive_search.top_k",description:`<strong>top_k</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The size of the candidate set that is used to re-rank for contrastive search`,name:"top_k"},{anchor:"transformers.GenerationMixin.contrastive_search.penalty_alpha",description:`<strong>penalty_alpha</strong> (<code>float</code>, <em>optional</em>, defaults to 0) &#x2014;
The degeneration penalty for contrastive search; activate when it is larger than 0`,name:"penalty_alpha"},{anchor:"transformers.GenerationMixin.contrastive_search.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.GenerationMixin.contrastive_search.logits_warper",description:`<strong>logits_warper</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsWarper">LogitsWarper</a> used
to warp the prediction score distribution of the language modeling head applied before multinomial
sampling at each generation step.`,name:"logits_warper"},{anchor:"transformers.GenerationMixin.contrastive_search.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
used to tell if the generation loop should stop.`,name:"stopping_criteria"},{anchor:"transformers.GenerationMixin.contrastive_search.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>padding</em> token.`,name:"pad_token_id"},{anchor:"transformers.GenerationMixin.contrastive_search.eos_token_id",description:`<strong>eos_token_id</strong> (<code>Union[int, List[int]]</code>, <em>optional</em>) &#x2014;
The id of the <em>end-of-sequence</em> token. Optionally, use a list to set multiple <em>end-of-sequence</em> tokens.`,name:"eos_token_id"},{anchor:"transformers.GenerationMixin.contrastive_search.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more details.`,name:"output_attentions"},{anchor:"transformers.GenerationMixin.contrastive_search.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more details.`,name:"output_hidden_states"},{anchor:"transformers.GenerationMixin.contrastive_search.output_scores",description:`<strong>output_scores</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the prediction scores. See <code>scores</code> under returned tensors for more details.`,name:"output_scores"},{anchor:"transformers.GenerationMixin.contrastive_search.return_dict_in_generate",description:`<strong>return_dict_in_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.GenerationMixin.contrastive_search.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)`,name:"synced_gpus"},{anchor:"transformers.GenerationMixin.contrastive_search.streamer",description:`<strong>streamer</strong> (<code>BaseStreamer</code>, <em>optional</em>) &#x2014;
Streamer object that will be used to stream the generated sequences. Generated tokens are passed
through <code>streamer.put(token_ids)</code> and the streamer is responsible for any further processing.`,name:"streamer"},{anchor:"transformers.GenerationMixin.contrastive_search.sequential",description:`<strong>sequential</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Switches topk hidden state computation from parallel to sequential to reduce memory if True.
model_kwargs &#x2014;
Additional model specific keyword arguments will be forwarded to the <code>forward</code> function of the model.
If model is an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"sequential"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/generation/utils.py#L1761",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateDecoderOnlyOutput"
>GenerateDecoderOnlyOutput</a>, <a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateEncoderDecoderOutput"
>GenerateEncoderDecoderOutput</a>
or <code>torch.LongTensor</code>: A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateDecoderOnlyOutput"
>GenerateDecoderOnlyOutput</a> if <code>model.config.is_encoder_decoder=False</code> and
<code>return_dict_in_generate=True</code> or a <a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateEncoderDecoderOutput"
>GenerateEncoderDecoderOutput</a> if
<code>model.config.is_encoder_decoder=True</code>.</p>
`}}),we=new ne({props:{warning:!0,$$slots:{default:[lo]},$$scope:{ctx:w}}}),Je=new te({props:{anchor:"transformers.GenerationMixin.contrastive_search.example",$$slots:{default:[co]},$$scope:{ctx:w}}}),De=new C({props:{name:"group_beam_search",anchor:"transformers.GenerationMixin.group_beam_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"beam_scorer",val:": BeamScorer"},{name:"logits_processor",val:": Optional = None"},{name:"stopping_criteria",val:": Optional = None"},{name:"max_length",val:": Optional = None"},{name:"pad_token_id",val:": Optional = None"},{name:"eos_token_id",val:": Union = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"output_scores",val:": Optional = None"},{name:"return_dict_in_generate",val:": Optional = None"},{name:"synced_gpus",val:": bool = False"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.GenerationMixin.group_beam_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.GenerationMixin.group_beam_search.beam_scorer",description:`<strong>beam_scorer</strong> (<code>BeamScorer</code>) &#x2014;
An derived instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> that defines how beam hypotheses are constructed, stored and
sorted during generation. For more information, the documentation of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> should be read.`,name:"beam_scorer"},{anchor:"transformers.GenerationMixin.group_beam_search.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.GenerationMixin.group_beam_search.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
used to tell if the generation loop should stop.`,name:"stopping_criteria"},{anchor:"transformers.GenerationMixin.group_beam_search.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>, defaults to 20) &#x2014;
<strong>DEPRECATED</strong>. Use <code>logits_processor</code> or <code>stopping_criteria</code> directly to cap the number of generated
tokens. The maximum length of the sequence to be generated.`,name:"max_length"},{anchor:"transformers.GenerationMixin.group_beam_search.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>padding</em> token.`,name:"pad_token_id"},{anchor:"transformers.GenerationMixin.group_beam_search.eos_token_id",description:`<strong>eos_token_id</strong> (<code>Union[int, List[int]]</code>, <em>optional</em>) &#x2014;
The id of the <em>end-of-sequence</em> token. Optionally, use a list to set multiple <em>end-of-sequence</em> tokens.`,name:"eos_token_id"},{anchor:"transformers.GenerationMixin.group_beam_search.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more details.`,name:"output_attentions"},{anchor:"transformers.GenerationMixin.group_beam_search.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more details.`,name:"output_hidden_states"},{anchor:"transformers.GenerationMixin.group_beam_search.output_scores",description:`<strong>output_scores</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the prediction scores. See <code>scores</code> under returned tensors for more details.`,name:"output_scores"},{anchor:"transformers.GenerationMixin.group_beam_search.return_dict_in_generate",description:`<strong>return_dict_in_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.GenerationMixin.group_beam_search.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)</p>
<p>model_kwargs &#x2014;
Additional model specific kwargs that will be forwarded to the <code>forward</code> function of the model. If
model is an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/generation/utils.py#L3474",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateBeamDecoderOnlyOutput"
>GenerateBeamDecoderOnlyOutput</a>, <a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateBeamEncoderDecoderOutput"
>GenerateBeamEncoderDecoderOutput</a> or
<code>torch.LongTensor</code>: A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateBeamDecoderOnlyOutput"
>GenerateBeamDecoderOnlyOutput</a> if <code>model.config.is_encoder_decoder=False</code> and
<code>return_dict_in_generate=True</code> or a <a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateBeamEncoderDecoderOutput"
>GenerateBeamEncoderDecoderOutput</a> if
<code>model.config.is_encoder_decoder=True</code>.</p>
`}}),Ue=new ne({props:{warning:!0,$$slots:{default:[mo]},$$scope:{ctx:w}}}),ve=new te({props:{anchor:"transformers.GenerationMixin.group_beam_search.example",$$slots:{default:[po]},$$scope:{ctx:w}}}),qe=new C({props:{name:"constrained_beam_search",anchor:"transformers.GenerationMixin.constrained_beam_search",parameters:[{name:"input_ids",val:": LongTensor"},{name:"constrained_beam_scorer",val:": ConstrainedBeamSearchScorer"},{name:"logits_processor",val:": Optional = None"},{name:"stopping_criteria",val:": Optional = None"},{name:"max_length",val:": Optional = None"},{name:"pad_token_id",val:": Optional = None"},{name:"eos_token_id",val:": Union = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"output_scores",val:": Optional = None"},{name:"return_dict_in_generate",val:": Optional = None"},{name:"synced_gpus",val:": Optional = None"},{name:"**model_kwargs",val:""}],parametersDescription:[{anchor:"transformers.GenerationMixin.constrained_beam_search.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.GenerationMixin.constrained_beam_search.constrained_beam_scorer",description:`<strong>constrained_beam_scorer</strong> (<code>ConstrainedBeamSearchScorer</code>) &#x2014;
A derived instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.BeamScorer">BeamScorer</a> that defines how beam hypotheses are constructed, stored and
sorted during generation, while satisfying a list of positive constraints. For more information, the
documentation of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.ConstrainedBeamSearchScorer">ConstrainedBeamSearchScorer</a> should be read.`,name:"constrained_beam_scorer"},{anchor:"transformers.GenerationMixin.constrained_beam_search.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessor">LogitsProcessor</a>
used to modify the prediction scores of the language modeling head applied at each generation step.`,name:"logits_processor"},{anchor:"transformers.GenerationMixin.constrained_beam_search.stopping_criteria",description:`<strong>stopping_criteria</strong> (<code>StoppingCriteriaList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.StoppingCriteriaList">StoppingCriteriaList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.StoppingCriteria">StoppingCriteria</a>
used to tell if the generation loop should stop.`,name:"stopping_criteria"},{anchor:"transformers.GenerationMixin.constrained_beam_search.logits_warper",description:`<strong>logits_warper</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
An instance of <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsProcessorList">LogitsProcessorList</a>. List of instances of class derived from <a href="/docs/transformers/main/en/internal/generation_utils#transformers.LogitsWarper">LogitsWarper</a> used
to warp the prediction score distribution of the language modeling head applied before multinomial
sampling at each generation step.`,name:"logits_warper"},{anchor:"transformers.GenerationMixin.constrained_beam_search.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>, defaults to 20) &#x2014;
<strong>DEPRECATED</strong>. Use <code>logits_processor</code> or <code>stopping_criteria</code> directly to cap the number of generated
tokens. The maximum length of the sequence to be generated.`,name:"max_length"},{anchor:"transformers.GenerationMixin.constrained_beam_search.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The id of the <em>padding</em> token.`,name:"pad_token_id"},{anchor:"transformers.GenerationMixin.constrained_beam_search.eos_token_id",description:`<strong>eos_token_id</strong> (<code>Union[int, List[int]]</code>, <em>optional</em>) &#x2014;
The id of the <em>end-of-sequence</em> token. Optionally, use a list to set multiple <em>end-of-sequence</em> tokens.`,name:"eos_token_id"},{anchor:"transformers.GenerationMixin.constrained_beam_search.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under
returned tensors for more details.`,name:"output_attentions"},{anchor:"transformers.GenerationMixin.constrained_beam_search.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors
for more details.`,name:"output_hidden_states"},{anchor:"transformers.GenerationMixin.constrained_beam_search.output_scores",description:`<strong>output_scores</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the prediction scores. See <code>scores</code> under returned tensors for more details.`,name:"output_scores"},{anchor:"transformers.GenerationMixin.constrained_beam_search.return_dict_in_generate",description:`<strong>return_dict_in_generate</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict_in_generate"},{anchor:"transformers.GenerationMixin.constrained_beam_search.synced_gpus",description:`<strong>synced_gpus</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to continue running the while loop until max_length (needed for ZeRO stage 3)
model_kwargs &#x2014;
Additional model specific kwargs will be forwarded to the <code>forward</code> function of the model. If model is
an encoder-decoder model the kwargs should include <code>encoder_outputs</code>.`,name:"synced_gpus"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/generation/utils.py#L3859",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateBeamDecoderOnlyOutput"
>GenerateBeamDecoderOnlyOutput</a>, <a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateBeamEncoderDecoderOutput"
>GenerateBeamEncoderDecoderOutput</a> or
<code>torch.LongTensor</code>: A <code>torch.LongTensor</code> containing the generated tokens (default behaviour) or a
<a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateBeamDecoderOnlyOutput"
>GenerateBeamDecoderOnlyOutput</a> if <code>model.config.is_encoder_decoder=False</code> and
<code>return_dict_in_generate=True</code> or a <a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.GenerateBeamEncoderDecoderOutput"
>GenerateBeamEncoderDecoderOutput</a> if
<code>model.config.is_encoder_decoder=True</code>.</p>
`}}),xe=new ne({props:{warning:!0,$$slots:{default:[go]},$$scope:{ctx:w}}}),Ge=new te({props:{anchor:"transformers.GenerationMixin.constrained_beam_search.example",$$slots:{default:[uo]},$$scope:{ctx:w}}}),Oe=new Nn({props:{title:"TFGenerationMixin",local:"transformers.TFGenerationMixin",headingTag:"h2"}}),Pe=new C({props:{name:"class transformers.TFGenerationMixin",anchor:"transformers.TFGenerationMixin",parameters:[],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/generation/tf_utils.py#L444"}}),Ke=new C({props:{name:"generate",anchor:"transformers.TFGenerationMixin.generate",parameters:[{name:"inputs",val:": Optional = None"},{name:"generation_config",val:": Optional = None"},{name:"logits_processor",val:": Optional = None"},{name:"seed",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGenerationMixin.generate.inputs",description:`<strong>inputs</strong> (<code>tf.Tensor</code> of varying shape depending on the modality, <em>optional</em>) &#x2014;
The sequence used as a prompt for the generation or as model inputs to the encoder. If <code>None</code> the
method initializes it with <code>bos_token_id</code> and a batch size of 1. For decoder-only models <code>inputs</code>
should of in the format of <code>input_ids</code>. For encoder-decoder models <em>inputs</em> can represent any of
<code>input_ids</code>, <code>input_values</code>, <code>input_features</code>, or <code>pixel_values</code>.`,name:"inputs"},{anchor:"transformers.TFGenerationMixin.generate.generation_config",description:`<strong>generation_config</strong> (<code>~generation.GenerationConfig</code>, <em>optional</em>) &#x2014;
The generation configuration to be used as base parametrization for the generation call. <code>**kwargs</code>
passed to generate matching the attributes of <code>generation_config</code> will override them. If
<code>generation_config</code> is not provided, the default will be used, which had the following loading
priority: 1) from the <code>generation_config.json</code> model file, if it exists; 2) from the model
configuration. Please note that unspecified parameters will inherit <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationConfig">GenerationConfig</a>&#x2019;s
default values, whose documentation should be checked to parameterize generation.`,name:"generation_config"},{anchor:"transformers.TFGenerationMixin.generate.logits_processor",description:`<strong>logits_processor</strong> (<code>LogitsProcessorList</code>, <em>optional</em>) &#x2014;
Custom logits processors that complement the default logits processors built from arguments and
generation config. If a logit processor is passed that is already created with the arguments or a
generation config an error is thrown. This feature is intended for advanced users.`,name:"logits_processor"},{anchor:"transformers.TFGenerationMixin.generate.seed",description:`<strong>seed</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Random seed to control sampling, containing two integers, used when <code>do_sample</code> is <code>True</code>. See the
<code>seed</code> argument from stateless functions in <code>tf.random</code>.`,name:"seed"},{anchor:"transformers.TFGenerationMixin.generate.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, Any]</code>, <em>optional</em>) &#x2014;
Ad hoc parametrization of <code>generate_config</code> and/or additional model-specific kwargs that will be
forwarded to the <code>forward</code> function of the model. If the model is an encoder-decoder model, encoder
specific kwargs should not be prefixed and decoder specific kwargs should be prefixed with <em>decoder_</em>.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/generation/tf_utils.py#L645",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> (if <code>return_dict_in_generate=True</code> or when
<code>config.return_dict_in_generate=True</code>) or a <code>tf.Tensor</code>.</p>
<p>If the model is <em>not</em> an encoder-decoder model (<code>model.config.is_encoder_decoder=False</code>), the possible
<a
  href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> types are:</p>
<ul>
<li><a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.TFGreedySearchDecoderOnlyOutput"
>TFGreedySearchDecoderOnlyOutput</a>,</li>
<li><a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.TFSampleDecoderOnlyOutput"
>TFSampleDecoderOnlyOutput</a>,</li>
<li><a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.TFBeamSearchDecoderOnlyOutput"
>TFBeamSearchDecoderOnlyOutput</a>,</li>
<li><a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.TFBeamSampleDecoderOnlyOutput"
>TFBeamSampleDecoderOnlyOutput</a></li>
</ul>
<p>If the model is an encoder-decoder model (<code>model.config.is_encoder_decoder=True</code>), the possible
<a
  href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> types are:</p>
<ul>
<li><a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.TFGreedySearchEncoderDecoderOutput"
>TFGreedySearchEncoderDecoderOutput</a>,</li>
<li><a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.TFSampleEncoderDecoderOutput"
>TFSampleEncoderDecoderOutput</a>,</li>
<li><a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.TFBeamSearchEncoderDecoderOutput"
>TFBeamSearchEncoderDecoderOutput</a>,</li>
<li><a
  href="/docs/transformers/main/en/internal/generation_utils#transformers.generation.TFBeamSampleEncoderDecoderOutput"
>TFBeamSampleEncoderDecoderOutput</a></li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a> or <code>tf.Tensor</code></p>
`}}),ke=new ne({props:{warning:!0,$$slots:{default:[ho]},$$scope:{ctx:w}}}),en=new C({props:{name:"compute_transition_scores",anchor:"transformers.TFGenerationMixin.compute_transition_scores",parameters:[{name:"sequences",val:": Tensor"},{name:"scores",val:": Tuple"},{name:"beam_indices",val:": Optional = None"},{name:"normalize_logits",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFGenerationMixin.compute_transition_scores.sequences",description:`<strong>sequences</strong> (<code>tf.Tensor</code>) &#x2014;
The generated sequences. The second dimension (sequence_length) is either equal to <code>max_length</code> or
shorter if all batches finished early due to the <code>eos_token_id</code>.`,name:"sequences"},{anchor:"transformers.TFGenerationMixin.compute_transition_scores.scores",description:`<strong>scores</strong> (<code>tuple(tf.Tensor)</code>) &#x2014;
Transition scores for each vocabulary token at each generation step. Beam transition scores consisting
of log probabilities of tokens conditioned on log softmax of previously generated tokens Tuple of
<code>tf.Tensor</code> with up to <code>max_new_tokens</code> elements (one element for each generated token), with each
tensor of shape <code>(batch_size*num_beams, config.vocab_size)</code>.`,name:"scores"},{anchor:"transformers.TFGenerationMixin.compute_transition_scores.beam_indices",description:`<strong>beam_indices</strong> (<code>tf.Tensor</code>, <em>optional</em>) &#x2014;
Beam indices of generated token id at each generation step. <code>tf.Tensor</code> of shape
<code>(batch_size*num_return_sequences, sequence_length)</code>. Only required if a <code>num_beams&gt;1</code> at
generate-time.`,name:"beam_indices"},{anchor:"transformers.TFGenerationMixin.compute_transition_scores.normalize_logits",description:`<strong>normalize_logits</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to normalize the logits (which, for legacy reasons, may be unnormalized).`,name:"normalize_logits"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/generation/tf_utils.py#L477",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>tf.Tensor</code> of shape <code>(batch_size*num_return_sequences, sequence_length)</code> containing
the transition scores (logits)</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>tf.Tensor</code></p>
`}}),Ze=new te({props:{anchor:"transformers.TFGenerationMixin.compute_transition_scores.example",$$slots:{default:[fo]},$$scope:{ctx:w}}}),nn=new Nn({props:{title:"FlaxGenerationMixin",local:"transformers.FlaxGenerationMixin",headingTag:"h2"}}),tn=new C({props:{name:"class transformers.FlaxGenerationMixin",anchor:"transformers.FlaxGenerationMixin",parameters:[],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/generation/flax_utils.py#L129"}}),sn=new C({props:{name:"generate",anchor:"transformers.FlaxGenerationMixin.generate",parameters:[{name:"input_ids",val:": Array"},{name:"generation_config",val:": Optional = None"},{name:"prng_key",val:": Optional = None"},{name:"trace",val:": bool = True"},{name:"params",val:": Optional = None"},{name:"logits_processor",val:": Optional = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxGenerationMixin.generate.input_ids",description:`<strong>input_ids</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
The sequence used as a prompt for the generation.`,name:"input_ids"},{anchor:"transformers.FlaxGenerationMixin.generate.generation_config",description:`<strong>generation_config</strong> (<code>~generation.GenerationConfig</code>, <em>optional</em>) &#x2014;
The generation configuration to be used as base parametrization for the generation call. <code>**kwargs</code>
passed to generate matching the attributes of <code>generation_config</code> will override them. If
<code>generation_config</code> is not provided, the default will be used, which had the following loading
priority: 1) from the <code>generation_config.json</code> model file, if it exists; 2) from the model
configuration. Please note that unspecified parameters will inherit <a href="/docs/transformers/main/en/main_classes/text_generation#transformers.GenerationConfig">GenerationConfig</a>&#x2019;s
default values, whose documentation should be checked to parameterize generation.`,name:"generation_config"},{anchor:"transformers.FlaxGenerationMixin.generate.trace",description:`<strong>trace</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to trace generation. Setting <code>trace=False</code> should only be used for debugging and will lead to a
considerably slower runtime.`,name:"trace"},{anchor:"transformers.FlaxGenerationMixin.generate.params",description:`<strong>params</strong> (<code>Dict[str, jnp.ndarray]</code>, <em>optional</em>) &#x2014;
Optionally the model parameters can be passed. Can be useful for parallelized generation.`,name:"params"},{anchor:"transformers.FlaxGenerationMixin.generate.logits_processor",description:`<strong>logits_processor</strong> (<code>FlaxLogitsProcessorList </code>, <em>optional</em>) &#x2014;
Custom logits processors that complement the default logits processors built from arguments and
generation config. If a logit processor is passed that is already created with the arguments or a
generation config an error is thrown. This feature is intended for advanced users.`,name:"logits_processor"},{anchor:"transformers.FlaxGenerationMixin.generate.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, Any]</code>, <em>optional</em>) &#x2014;
Ad hoc parametrization of <code>generate_config</code> and/or additional model-specific kwargs that will be
forwarded to the <code>forward</code> function of the model. If the model is an encoder-decoder model, encoder
specific kwargs should not be prefixed and decoder specific kwargs should be prefixed with <em>decoder_</em>.`,name:"kwargs"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/generation/flax_utils.py#L267",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput"
>ModelOutput</a>.</p>
`}}),{c(){t=c("meta"),p=r(),o=c("p"),s=r(),_(g.$$.fragment),n=r(),f=c("p"),f.innerHTML=ds,zn=r(),Ce=c("ul"),Ce.innerHTML=ms,En=r(),Ie=c("p"),Ie.innerHTML=ps,Ln=r(),We=c("p"),We.innerHTML=gs,Sn=r(),_(Xe.$$.fragment),Fn=r(),v=c("div"),_(Re.$$.fragment),Kn=r(),ln=c("p"),ln.innerHTML=us,et=r(),cn=c("ul"),cn.innerHTML=hs,nt=r(),dn=c("p"),dn.innerHTML=fs,tt=r(),_(ce.$$.fragment),st=r(),q=c("div"),_(Ve.$$.fragment),ot=r(),mn=c("p"),mn.innerHTML=_s,at=r(),_(de.$$.fragment),rt=r(),me=c("div"),_($e.$$.fragment),it=r(),pn=c("p"),pn.innerHTML=Ms,lt=r(),pe=c("div"),_(Ne.$$.fragment),ct=r(),gn=c("p"),gn.innerHTML=bs,Hn=r(),_(ze.$$.fragment),Qn=r(),J=c("div"),_(Ee.$$.fragment),dt=r(),un=c("p"),un.innerHTML=ys,mt=r(),hn=c("p"),hn.innerHTML=Ts,pt=r(),fn=c("ul"),fn.innerHTML=js,gt=r(),_n=c("p"),_n.innerHTML=ws,ut=r(),O=c("div"),_(Le.$$.fragment),ht=r(),Mn=c("p"),Mn.textContent=Js,ft=r(),_(ge.$$.fragment),_t=r(),P=c("div"),_(Se.$$.fragment),Mt=r(),bn=c("p"),bn.textContent=Us,bt=r(),_(ue.$$.fragment),yt=r(),R=c("div"),_(Fe.$$.fragment),Tt=r(),yn=c("p"),yn.innerHTML=vs,jt=r(),_(he.$$.fragment),wt=r(),_(fe.$$.fragment),Jt=r(),V=c("div"),_(He.$$.fragment),Ut=r(),Tn=c("p"),Tn.innerHTML=xs,vt=r(),_(_e.$$.fragment),xt=r(),_(Me.$$.fragment),Gt=r(),$=c("div"),_(Qe.$$.fragment),kt=r(),jn=c("p"),jn.innerHTML=Gs,Zt=r(),_(be.$$.fragment),Bt=r(),_(ye.$$.fragment),Ct=r(),N=c("div"),_(Ye.$$.fragment),It=r(),wn=c("p"),wn.innerHTML=ks,Wt=r(),_(Te.$$.fragment),Xt=r(),_(je.$$.fragment),Rt=r(),z=c("div"),_(Ae.$$.fragment),Vt=r(),Jn=c("p"),Jn.innerHTML=Zs,$t=r(),_(we.$$.fragment),Nt=r(),_(Je.$$.fragment),zt=r(),E=c("div"),_(De.$$.fragment),Et=r(),Un=c("p"),Un.innerHTML=Bs,Lt=r(),_(Ue.$$.fragment),St=r(),_(ve.$$.fragment),Ft=r(),L=c("div"),_(qe.$$.fragment),Ht=r(),vn=c("p"),vn.innerHTML=Cs,Qt=r(),_(xe.$$.fragment),Yt=r(),_(Ge.$$.fragment),Yn=r(),_(Oe.$$.fragment),An=r(),Z=c("div"),_(Pe.$$.fragment),At=r(),xn=c("p"),xn.innerHTML=Is,Dt=r(),Gn=c("p"),Gn.innerHTML=Ws,qt=r(),kn=c("ul"),kn.innerHTML=Xs,Ot=r(),Zn=c("p"),Zn.innerHTML=Rs,Pt=r(),K=c("div"),_(Ke.$$.fragment),Kt=r(),Bn=c("p"),Bn.textContent=Vs,es=r(),_(ke.$$.fragment),ns=r(),ee=c("div"),_(en.$$.fragment),ts=r(),Cn=c("p"),Cn.textContent=$s,ss=r(),_(Ze.$$.fragment),Dn=r(),_(nn.$$.fragment),qn=r(),I=c("div"),_(tn.$$.fragment),os=r(),In=c("p"),In.innerHTML=Ns,as=r(),Wn=c("p"),Wn.innerHTML=zs,rs=r(),Xn=c("ul"),Xn.innerHTML=Es,is=r(),Rn=c("p"),Rn.innerHTML=Ls,ls=r(),Be=c("div"),_(sn.$$.fragment),cs=r(),Vn=c("p"),Vn.textContent=Ss,On=r(),$n=c("p"),this.h()},l(e){const m=Ds("svelte-u9bgzb",document.head);t=d(m,"META",{name:!0,content:!0}),m.forEach(l),p=i(e),o=d(e,"P",{}),x(o).forEach(l),s=i(e),M(g.$$.fragment,e),n=i(e),f=d(e,"P",{"data-svelte-h":!0}),h(f)!=="svelte-1lm9ezt"&&(f.innerHTML=ds),zn=i(e),Ce=d(e,"UL",{"data-svelte-h":!0}),h(Ce)!=="svelte-1upm6ea"&&(Ce.innerHTML=ms),En=i(e),Ie=d(e,"P",{"data-svelte-h":!0}),h(Ie)!=="svelte-18trtrh"&&(Ie.innerHTML=ps),Ln=i(e),We=d(e,"P",{"data-svelte-h":!0}),h(We)!=="svelte-1wifwwe"&&(We.innerHTML=gs),Sn=i(e),M(Xe.$$.fragment,e),Fn=i(e),v=d(e,"DIV",{class:!0});var B=x(v);M(Re.$$.fragment,B),Kn=i(B),ln=d(B,"P",{"data-svelte-h":!0}),h(ln)!=="svelte-14531m7"&&(ln.innerHTML=us),et=i(B),cn=d(B,"UL",{"data-svelte-h":!0}),h(cn)!=="svelte-apc416"&&(cn.innerHTML=hs),nt=i(B),dn=d(B,"P",{"data-svelte-h":!0}),h(dn)!=="svelte-2cak66"&&(dn.innerHTML=fs),tt=i(B),M(ce.$$.fragment,B),st=i(B),q=d(B,"DIV",{class:!0});var oe=x(q);M(Ve.$$.fragment,oe),ot=i(oe),mn=d(oe,"P",{"data-svelte-h":!0}),h(mn)!=="svelte-dy0lxz"&&(mn.innerHTML=_s),at=i(oe),M(de.$$.fragment,oe),oe.forEach(l),rt=i(B),me=d(B,"DIV",{class:!0});var on=x(me);M($e.$$.fragment,on),it=i(on),pn=d(on,"P",{"data-svelte-h":!0}),h(pn)!=="svelte-hihar7"&&(pn.innerHTML=Ms),on.forEach(l),lt=i(B),pe=d(B,"DIV",{class:!0});var an=x(pe);M(Ne.$$.fragment,an),ct=i(an),gn=d(an,"P",{"data-svelte-h":!0}),h(gn)!=="svelte-uhy25y"&&(gn.innerHTML=bs),an.forEach(l),B.forEach(l),Hn=i(e),M(ze.$$.fragment,e),Qn=i(e),J=d(e,"DIV",{class:!0});var U=x(J);M(Ee.$$.fragment,U),dt=i(U),un=d(U,"P",{"data-svelte-h":!0}),h(un)!=="svelte-c31sbk"&&(un.innerHTML=ys),mt=i(U),hn=d(U,"P",{"data-svelte-h":!0}),h(hn)!=="svelte-1w4njnn"&&(hn.innerHTML=Ts),pt=i(U),fn=d(U,"UL",{"data-svelte-h":!0}),h(fn)!=="svelte-1w9rslw"&&(fn.innerHTML=js),gt=i(U),_n=d(U,"P",{"data-svelte-h":!0}),h(_n)!=="svelte-13kczdy"&&(_n.innerHTML=ws),ut=i(U),O=d(U,"DIV",{class:!0});var ae=x(O);M(Le.$$.fragment,ae),ht=i(ae),Mn=d(ae,"P",{"data-svelte-h":!0}),h(Mn)!=="svelte-s5ko3x"&&(Mn.textContent=Js),ft=i(ae),M(ge.$$.fragment,ae),ae.forEach(l),_t=i(U),P=d(U,"DIV",{class:!0});var re=x(P);M(Se.$$.fragment,re),Mt=i(re),bn=d(re,"P",{"data-svelte-h":!0}),h(bn)!=="svelte-1om47tb"&&(bn.textContent=Us),bt=i(re),M(ue.$$.fragment,re),re.forEach(l),yt=i(U),R=d(U,"DIV",{class:!0});var S=x(R);M(Fe.$$.fragment,S),Tt=i(S),yn=d(S,"P",{"data-svelte-h":!0}),h(yn)!=="svelte-bizfd"&&(yn.innerHTML=vs),jt=i(S),M(he.$$.fragment,S),wt=i(S),M(fe.$$.fragment,S),S.forEach(l),Jt=i(U),V=d(U,"DIV",{class:!0});var F=x(V);M(He.$$.fragment,F),Ut=i(F),Tn=d(F,"P",{"data-svelte-h":!0}),h(Tn)!=="svelte-iidyyu"&&(Tn.innerHTML=xs),vt=i(F),M(_e.$$.fragment,F),xt=i(F),M(Me.$$.fragment,F),F.forEach(l),Gt=i(U),$=d(U,"DIV",{class:!0});var H=x($);M(Qe.$$.fragment,H),kt=i(H),jn=d(H,"P",{"data-svelte-h":!0}),h(jn)!=="svelte-af29ky"&&(jn.innerHTML=Gs),Zt=i(H),M(be.$$.fragment,H),Bt=i(H),M(ye.$$.fragment,H),H.forEach(l),Ct=i(U),N=d(U,"DIV",{class:!0});var Q=x(N);M(Ye.$$.fragment,Q),It=i(Q),wn=d(Q,"P",{"data-svelte-h":!0}),h(wn)!=="svelte-465m7j"&&(wn.innerHTML=ks),Wt=i(Q),M(Te.$$.fragment,Q),Xt=i(Q),M(je.$$.fragment,Q),Q.forEach(l),Rt=i(U),z=d(U,"DIV",{class:!0});var Y=x(z);M(Ae.$$.fragment,Y),Vt=i(Y),Jn=d(Y,"P",{"data-svelte-h":!0}),h(Jn)!=="svelte-na8o2s"&&(Jn.innerHTML=Zs),$t=i(Y),M(we.$$.fragment,Y),Nt=i(Y),M(Je.$$.fragment,Y),Y.forEach(l),zt=i(U),E=d(U,"DIV",{class:!0});var A=x(E);M(De.$$.fragment,A),Et=i(A),Un=d(A,"P",{"data-svelte-h":!0}),h(Un)!=="svelte-15ptx3u"&&(Un.innerHTML=Bs),Lt=i(A),M(Ue.$$.fragment,A),St=i(A),M(ve.$$.fragment,A),A.forEach(l),Ft=i(U),L=d(U,"DIV",{class:!0});var D=x(L);M(qe.$$.fragment,D),Ht=i(D),vn=d(D,"P",{"data-svelte-h":!0}),h(vn)!=="svelte-1n3vb6m"&&(vn.innerHTML=Cs),Qt=i(D),M(xe.$$.fragment,D),Yt=i(D),M(Ge.$$.fragment,D),D.forEach(l),U.forEach(l),Yn=i(e),M(Oe.$$.fragment,e),An=i(e),Z=d(e,"DIV",{class:!0});var W=x(Z);M(Pe.$$.fragment,W),At=i(W),xn=d(W,"P",{"data-svelte-h":!0}),h(xn)!=="svelte-npdy1s"&&(xn.innerHTML=Is),Dt=i(W),Gn=d(W,"P",{"data-svelte-h":!0}),h(Gn)!=="svelte-llzcxd"&&(Gn.innerHTML=Ws),qt=i(W),kn=d(W,"UL",{"data-svelte-h":!0}),h(kn)!=="svelte-fx738d"&&(kn.innerHTML=Xs),Ot=i(W),Zn=d(W,"P",{"data-svelte-h":!0}),h(Zn)!=="svelte-13kczdy"&&(Zn.innerHTML=Rs),Pt=i(W),K=d(W,"DIV",{class:!0});var ie=x(K);M(Ke.$$.fragment,ie),Kt=i(ie),Bn=d(ie,"P",{"data-svelte-h":!0}),h(Bn)!=="svelte-s5ko3x"&&(Bn.textContent=Vs),es=i(ie),M(ke.$$.fragment,ie),ie.forEach(l),ns=i(W),ee=d(W,"DIV",{class:!0});var le=x(ee);M(en.$$.fragment,le),ts=i(le),Cn=d(le,"P",{"data-svelte-h":!0}),h(Cn)!=="svelte-1om47tb"&&(Cn.textContent=$s),ss=i(le),M(Ze.$$.fragment,le),le.forEach(l),W.forEach(l),Dn=i(e),M(nn.$$.fragment,e),qn=i(e),I=d(e,"DIV",{class:!0});var X=x(I);M(tn.$$.fragment,X),os=i(X),In=d(X,"P",{"data-svelte-h":!0}),h(In)!=="svelte-1eu4sgu"&&(In.innerHTML=Ns),as=i(X),Wn=d(X,"P",{"data-svelte-h":!0}),h(Wn)!=="svelte-gsdqya"&&(Wn.innerHTML=zs),rs=i(X),Xn=d(X,"UL",{"data-svelte-h":!0}),h(Xn)!=="svelte-ffjx8e"&&(Xn.innerHTML=Es),is=i(X),Rn=d(X,"P",{"data-svelte-h":!0}),h(Rn)!=="svelte-13kczdy"&&(Rn.innerHTML=Ls),ls=i(X),Be=d(X,"DIV",{class:!0});var rn=x(Be);M(sn.$$.fragment,rn),cs=i(rn),Vn=d(rn,"P",{"data-svelte-h":!0}),h(Vn)!=="svelte-s5ko3x"&&(Vn.textContent=Ss),rn.forEach(l),X.forEach(l),On=i(e),$n=d(e,"P",{}),x($n).forEach(l),this.h()},h(){G(t,"name","hf:doc:metadata"),G(t,"content",Mo),G(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),G(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),G(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),G(v,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),G(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),G(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),G(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),G(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),G($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),G(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),G(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),G(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),G(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),G(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),G(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),G(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),G(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),G(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),G(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,m){a(document.head,t),u(e,p,m),u(e,o,m),u(e,s,m),b(g,e,m),u(e,n,m),u(e,f,m),u(e,zn,m),u(e,Ce,m),u(e,En,m),u(e,Ie,m),u(e,Ln,m),u(e,We,m),u(e,Sn,m),b(Xe,e,m),u(e,Fn,m),u(e,v,m),b(Re,v,null),a(v,Kn),a(v,ln),a(v,et),a(v,cn),a(v,nt),a(v,dn),a(v,tt),b(ce,v,null),a(v,st),a(v,q),b(Ve,q,null),a(q,ot),a(q,mn),a(q,at),b(de,q,null),a(v,rt),a(v,me),b($e,me,null),a(me,it),a(me,pn),a(v,lt),a(v,pe),b(Ne,pe,null),a(pe,ct),a(pe,gn),u(e,Hn,m),b(ze,e,m),u(e,Qn,m),u(e,J,m),b(Ee,J,null),a(J,dt),a(J,un),a(J,mt),a(J,hn),a(J,pt),a(J,fn),a(J,gt),a(J,_n),a(J,ut),a(J,O),b(Le,O,null),a(O,ht),a(O,Mn),a(O,ft),b(ge,O,null),a(J,_t),a(J,P),b(Se,P,null),a(P,Mt),a(P,bn),a(P,bt),b(ue,P,null),a(J,yt),a(J,R),b(Fe,R,null),a(R,Tt),a(R,yn),a(R,jt),b(he,R,null),a(R,wt),b(fe,R,null),a(J,Jt),a(J,V),b(He,V,null),a(V,Ut),a(V,Tn),a(V,vt),b(_e,V,null),a(V,xt),b(Me,V,null),a(J,Gt),a(J,$),b(Qe,$,null),a($,kt),a($,jn),a($,Zt),b(be,$,null),a($,Bt),b(ye,$,null),a(J,Ct),a(J,N),b(Ye,N,null),a(N,It),a(N,wn),a(N,Wt),b(Te,N,null),a(N,Xt),b(je,N,null),a(J,Rt),a(J,z),b(Ae,z,null),a(z,Vt),a(z,Jn),a(z,$t),b(we,z,null),a(z,Nt),b(Je,z,null),a(J,zt),a(J,E),b(De,E,null),a(E,Et),a(E,Un),a(E,Lt),b(Ue,E,null),a(E,St),b(ve,E,null),a(J,Ft),a(J,L),b(qe,L,null),a(L,Ht),a(L,vn),a(L,Qt),b(xe,L,null),a(L,Yt),b(Ge,L,null),u(e,Yn,m),b(Oe,e,m),u(e,An,m),u(e,Z,m),b(Pe,Z,null),a(Z,At),a(Z,xn),a(Z,Dt),a(Z,Gn),a(Z,qt),a(Z,kn),a(Z,Ot),a(Z,Zn),a(Z,Pt),a(Z,K),b(Ke,K,null),a(K,Kt),a(K,Bn),a(K,es),b(ke,K,null),a(Z,ns),a(Z,ee),b(en,ee,null),a(ee,ts),a(ee,Cn),a(ee,ss),b(Ze,ee,null),u(e,Dn,m),b(nn,e,m),u(e,qn,m),u(e,I,m),b(tn,I,null),a(I,os),a(I,In),a(I,as),a(I,Wn),a(I,rs),a(I,Xn),a(I,is),a(I,Rn),a(I,ls),a(I,Be),b(sn,Be,null),a(Be,cs),a(Be,Vn),u(e,On,m),u(e,$n,m),Pn=!0},p(e,[m]){const B={};m&2&&(B.$$scope={dirty:m,ctx:e}),ce.$set(B);const oe={};m&2&&(oe.$$scope={dirty:m,ctx:e}),de.$set(oe);const on={};m&2&&(on.$$scope={dirty:m,ctx:e}),ge.$set(on);const an={};m&2&&(an.$$scope={dirty:m,ctx:e}),ue.$set(an);const U={};m&2&&(U.$$scope={dirty:m,ctx:e}),he.$set(U);const ae={};m&2&&(ae.$$scope={dirty:m,ctx:e}),fe.$set(ae);const re={};m&2&&(re.$$scope={dirty:m,ctx:e}),_e.$set(re);const S={};m&2&&(S.$$scope={dirty:m,ctx:e}),Me.$set(S);const F={};m&2&&(F.$$scope={dirty:m,ctx:e}),be.$set(F);const H={};m&2&&(H.$$scope={dirty:m,ctx:e}),ye.$set(H);const Q={};m&2&&(Q.$$scope={dirty:m,ctx:e}),Te.$set(Q);const Y={};m&2&&(Y.$$scope={dirty:m,ctx:e}),je.$set(Y);const A={};m&2&&(A.$$scope={dirty:m,ctx:e}),we.$set(A);const D={};m&2&&(D.$$scope={dirty:m,ctx:e}),Je.$set(D);const W={};m&2&&(W.$$scope={dirty:m,ctx:e}),Ue.$set(W);const ie={};m&2&&(ie.$$scope={dirty:m,ctx:e}),ve.$set(ie);const le={};m&2&&(le.$$scope={dirty:m,ctx:e}),xe.$set(le);const X={};m&2&&(X.$$scope={dirty:m,ctx:e}),Ge.$set(X);const rn={};m&2&&(rn.$$scope={dirty:m,ctx:e}),ke.$set(rn);const Fs={};m&2&&(Fs.$$scope={dirty:m,ctx:e}),Ze.$set(Fs)},i(e){Pn||(y(g.$$.fragment,e),y(Xe.$$.fragment,e),y(Re.$$.fragment,e),y(ce.$$.fragment,e),y(Ve.$$.fragment,e),y(de.$$.fragment,e),y($e.$$.fragment,e),y(Ne.$$.fragment,e),y(ze.$$.fragment,e),y(Ee.$$.fragment,e),y(Le.$$.fragment,e),y(ge.$$.fragment,e),y(Se.$$.fragment,e),y(ue.$$.fragment,e),y(Fe.$$.fragment,e),y(he.$$.fragment,e),y(fe.$$.fragment,e),y(He.$$.fragment,e),y(_e.$$.fragment,e),y(Me.$$.fragment,e),y(Qe.$$.fragment,e),y(be.$$.fragment,e),y(ye.$$.fragment,e),y(Ye.$$.fragment,e),y(Te.$$.fragment,e),y(je.$$.fragment,e),y(Ae.$$.fragment,e),y(we.$$.fragment,e),y(Je.$$.fragment,e),y(De.$$.fragment,e),y(Ue.$$.fragment,e),y(ve.$$.fragment,e),y(qe.$$.fragment,e),y(xe.$$.fragment,e),y(Ge.$$.fragment,e),y(Oe.$$.fragment,e),y(Pe.$$.fragment,e),y(Ke.$$.fragment,e),y(ke.$$.fragment,e),y(en.$$.fragment,e),y(Ze.$$.fragment,e),y(nn.$$.fragment,e),y(tn.$$.fragment,e),y(sn.$$.fragment,e),Pn=!0)},o(e){T(g.$$.fragment,e),T(Xe.$$.fragment,e),T(Re.$$.fragment,e),T(ce.$$.fragment,e),T(Ve.$$.fragment,e),T(de.$$.fragment,e),T($e.$$.fragment,e),T(Ne.$$.fragment,e),T(ze.$$.fragment,e),T(Ee.$$.fragment,e),T(Le.$$.fragment,e),T(ge.$$.fragment,e),T(Se.$$.fragment,e),T(ue.$$.fragment,e),T(Fe.$$.fragment,e),T(he.$$.fragment,e),T(fe.$$.fragment,e),T(He.$$.fragment,e),T(_e.$$.fragment,e),T(Me.$$.fragment,e),T(Qe.$$.fragment,e),T(be.$$.fragment,e),T(ye.$$.fragment,e),T(Ye.$$.fragment,e),T(Te.$$.fragment,e),T(je.$$.fragment,e),T(Ae.$$.fragment,e),T(we.$$.fragment,e),T(Je.$$.fragment,e),T(De.$$.fragment,e),T(Ue.$$.fragment,e),T(ve.$$.fragment,e),T(qe.$$.fragment,e),T(xe.$$.fragment,e),T(Ge.$$.fragment,e),T(Oe.$$.fragment,e),T(Pe.$$.fragment,e),T(Ke.$$.fragment,e),T(ke.$$.fragment,e),T(en.$$.fragment,e),T(Ze.$$.fragment,e),T(nn.$$.fragment,e),T(tn.$$.fragment,e),T(sn.$$.fragment,e),Pn=!1},d(e){e&&(l(p),l(o),l(s),l(n),l(f),l(zn),l(Ce),l(En),l(Ie),l(Ln),l(We),l(Sn),l(Fn),l(v),l(Hn),l(Qn),l(J),l(Yn),l(An),l(Z),l(Dn),l(qn),l(I),l(On),l($n)),l(t),j(g,e),j(Xe,e),j(Re),j(ce),j(Ve),j(de),j($e),j(Ne),j(ze,e),j(Ee),j(Le),j(ge),j(Se),j(ue),j(Fe),j(he),j(fe),j(He),j(_e),j(Me),j(Qe),j(be),j(ye),j(Ye),j(Te),j(je),j(Ae),j(we),j(Je),j(De),j(Ue),j(ve),j(qe),j(xe),j(Ge),j(Oe,e),j(Pe),j(Ke),j(ke),j(en),j(Ze),j(nn,e),j(tn),j(sn)}}}const Mo='{"title":"Generation","local":"generation","sections":[{"title":"GenerationConfig","local":"transformers.GenerationConfig","sections":[],"depth":2},{"title":"GenerationMixin","local":"transformers.GenerationMixin","sections":[],"depth":2},{"title":"TFGenerationMixin","local":"transformers.TFGenerationMixin","sections":[],"depth":2},{"title":"FlaxGenerationMixin","local":"transformers.FlaxGenerationMixin","sections":[],"depth":2}],"depth":1}';function bo(w){return Qs(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class xo extends Ys{constructor(t){super(),As(this,t,bo,_o,Hs,{})}}export{xo as component};
