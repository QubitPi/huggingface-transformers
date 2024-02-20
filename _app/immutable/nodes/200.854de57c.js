import{s as Ao,o as Po,n as A}from"../chunks/scheduler.9bc65507.js";import{S as Yo,i as Oo,g as c,s as a,r as g,A as Ko,h as p,f as i,c as r,j as C,u as _,x as k,k as U,y as s,a as h,v as T,d as M,t as b,w as y}from"../chunks/index.707bf1b6.js";import{T as Pn}from"../chunks/Tip.c2ecdbf4.js";import{D as F}from"../chunks/Docstring.17db21ae.js";import{C as de}from"../chunks/CodeBlock.54a9f38d.js";import{F as es,M as zo}from"../chunks/Markdown.fef84341.js";import{E as le}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as ie}from"../chunks/Heading.342b1fa6.js";function ts(J){let t,f="Examples:",n,o,m;return o=new de({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyME1UNU1vZGVsJTJDJTIwQXV0b1Rva2VuaXplciUwQSUwQW1vZGVsJTIwJTNEJTIwTVQ1TW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZSUyRm10NS1zbWFsbCUyMiklMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUlMkZtdDUtc21hbGwlMjIpJTBBYXJ0aWNsZSUyMCUzRCUyMCUyMlVOJTIwT2ZmaXppZXIlMjBzYWd0JTJDJTIwZGFzcyUyMHdlaXRlciUyMHZlcmhhbmRlbHQlMjB3ZXJkZW4lMjBtdXNzJTIwaW4lMjBTeXJpZW4uJTIyJTBBc3VtbWFyeSUyMCUzRCUyMCUyMldlaXRlciUyMFZlcmhhbmRsdW5nJTIwaW4lMjBTeXJpZW4uJTIyJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKGFydGljbGUlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQWxhYmVscyUyMCUzRCUyMHRva2VuaXplcih0ZXh0X3RhcmdldCUzRHN1bW1hcnklMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbChpbnB1dF9pZHMlM0RpbnB1dHMlNUIlMjJpbnB1dF9pZHMlMjIlNUQlMkMlMjBkZWNvZGVyX2lucHV0X2lkcyUzRGxhYmVscyU1QiUyMmlucHV0X2lkcyUyMiU1RCklMEFoaWRkZW5fc3RhdGVzJTIwJTNEJTIwb3V0cHV0cy5sYXN0X2hpZGRlbl9zdGF0ZQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MT5Model, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MT5Model.from_pretrained(<span class="hljs-string">&quot;google/mt5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mt5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>article = <span class="hljs-string">&quot;UN Offizier sagt, dass weiter verhandelt werden muss in Syrien.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary = <span class="hljs-string">&quot;Weiter Verhandlung in Syrien.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(article, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(text_target=summary, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], decoder_input_ids=labels[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){t=c("p"),t.textContent=f,n=a(),g(o.$$.fragment)},l(e){t=p(e,"P",{"data-svelte-h":!0}),k(t)!=="svelte-kvfsh7"&&(t.textContent=f),n=r(e),_(o.$$.fragment,e)},m(e,w){h(e,t,w),h(e,n,w),T(o,e,w),m=!0},p:A,i(e){m||(M(o.$$.fragment,e),m=!0)},o(e){b(o.$$.fragment,e),m=!1},d(e){e&&(i(t),i(n)),y(o,e)}}}function ns(J){let t,f="Example:",n,o,m;return o=new de({props:{code:"JTIzJTIwT24lMjBhJTIwNCUyMEdQVSUyMG1hY2hpbmUlMjB3aXRoJTIwbXQ1LXhsJTNBJTBBbW9kZWwlMjAlM0QlMjBNVDVGb3JDb25kaXRpb25hbEdlbmVyYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMk10NS14bCUyMiklMEFkZXZpY2VfbWFwJTIwJTNEJTIwJTdCJTBBJTIwJTIwJTIwJTIwMCUzQSUyMCU1QjAlMkMlMjAxJTJDJTIwMiU1RCUyQyUwQSUyMCUyMCUyMCUyMDElM0ElMjAlNUIzJTJDJTIwNCUyQyUyMDUlMkMlMjA2JTJDJTIwNyUyQyUyMDglMkMlMjA5JTVEJTJDJTBBJTIwJTIwJTIwJTIwMiUzQSUyMCU1QjEwJTJDJTIwMTElMkMlMjAxMiUyQyUyMDEzJTJDJTIwMTQlMkMlMjAxNSUyQyUyMDE2JTVEJTJDJTBBJTIwJTIwJTIwJTIwMyUzQSUyMCU1QjE3JTJDJTIwMTglMkMlMjAxOSUyQyUyMDIwJTJDJTIwMjElMkMlMjAyMiUyQyUyMDIzJTVEJTJDJTBBJTdEJTBBbW9kZWwucGFyYWxsZWxpemUoZGV2aWNlX21hcCklMjAlMjAlMjMlMjBTcGxpdHMlMjB0aGUlMjBtb2RlbCUyMGFjcm9zcyUyMHNldmVyYWwlMjBkZXZpY2VzJTBBbW9kZWwuZGVwYXJhbGxlbGl6ZSgpJTIwJTIwJTIzJTIwUHV0JTIwdGhlJTIwbW9kZWwlMjBiYWNrJTIwb24lMjBjcHUlMjBhbmQlMjBjbGVhbnMlMjBtZW1vcnklMjBieSUyMGNhbGxpbmclMjB0b3JjaC5jdWRhLmVtcHR5X2NhY2hlKCk=",highlighted:`<span class="hljs-comment"># On a 4 GPU machine with mt5-xl:</span>
model = MT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;Mt5-xl&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)  <span class="hljs-comment"># Splits the model across several devices</span>
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`,wrap:!1}}),{c(){t=c("p"),t.textContent=f,n=a(),g(o.$$.fragment)},l(e){t=p(e,"P",{"data-svelte-h":!0}),k(t)!=="svelte-11lpom8"&&(t.textContent=f),n=r(e),_(o.$$.fragment,e)},m(e,w){h(e,t,w),h(e,n,w),T(o,e,w),m=!0},p:A,i(e){m||(M(o.$$.fragment,e),m=!0)},o(e){b(o.$$.fragment,e),m=!1},d(e){e&&(i(t),i(n)),y(o,e)}}}function os(J){let t,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=f},l(n){t=p(n,"P",{"data-svelte-h":!0}),k(t)!=="svelte-fincs2"&&(t.innerHTML=f)},m(n,o){h(n,t,o)},p:A,d(n){n&&i(t)}}}function ss(J){let t,f="Example:",n,o,m;return o=new de({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBNVDVNb2RlbCUwQSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZS1tdDUlMkZtdDUtc21hbGwlMjIpJTBBbW9kZWwlMjAlM0QlMjBNVDVNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlLW10NSUyRm10NS1zbWFsbCUyMiklMEElMEFpbnB1dF9pZHMlMjAlM0QlMjB0b2tlbml6ZXIoJTBBJTIwJTIwJTIwJTIwJTIyU3R1ZGllcyUyMGhhdmUlMjBiZWVuJTIwc2hvd24lMjB0aGF0JTIwb3duaW5nJTIwYSUyMGRvZyUyMGlzJTIwZ29vZCUyMGZvciUyMHlvdSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIlMEEpLmlucHV0X2lkcyUyMCUyMCUyMyUyMEJhdGNoJTIwc2l6ZSUyMDElMEFkZWNvZGVyX2lucHV0X2lkcyUyMCUzRCUyMHRva2VuaXplciglMjJTdHVkaWVzJTIwc2hvdyUyMHRoYXQlMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKS5pbnB1dF9pZHMlMjAlMjAlMjMlMjBCYXRjaCUyMHNpemUlMjAxJTBBJTBBJTIzJTIwcHJlcHJvY2VzcyUzQSUyMFByZXBlbmQlMjBkZWNvZGVyX2lucHV0X2lkcyUyMHdpdGglMjBzdGFydCUyMHRva2VuJTIwd2hpY2glMjBpcyUyMHBhZCUyMHRva2VuJTIwZm9yJTIwTVQ1TW9kZWwuJTBBJTIzJTIwVGhpcyUyMGlzJTIwbm90JTIwbmVlZGVkJTIwZm9yJTIwdG9yY2gncyUyME1UNUZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbiUyMGFzJTIwaXQlMjBkb2VzJTIwdGhpcyUyMGludGVybmFsbHklMjB1c2luZyUyMGxhYmVscyUyMGFyZy4lMEFkZWNvZGVyX2lucHV0X2lkcyUyMCUzRCUyMG1vZGVsLl9zaGlmdF9yaWdodChkZWNvZGVyX2lucHV0X2lkcyklMEElMEElMjMlMjBmb3J3YXJkJTIwcGFzcyUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbChpbnB1dF9pZHMlM0RpbnB1dF9pZHMlMkMlMjBkZWNvZGVyX2lucHV0X2lkcyUzRGRlY29kZXJfaW5wdXRfaWRzKSUwQWxhc3RfaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, MT5Model

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-mt5/mt5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MT5Model.from_pretrained(<span class="hljs-string">&quot;google-mt5/mt5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(<span class="hljs-string">&quot;Studies show that&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># preprocess: Prepend decoder_input_ids with start token which is pad token for MT5Model.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># This is not needed for torch&#x27;s MT5ForConditionalGeneration as it does this internally using labels arg.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = model._shift_right(decoder_input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){t=c("p"),t.textContent=f,n=a(),g(o.$$.fragment)},l(e){t=p(e,"P",{"data-svelte-h":!0}),k(t)!=="svelte-11lpom8"&&(t.textContent=f),n=r(e),_(o.$$.fragment,e)},m(e,w){h(e,t,w),h(e,n,w),T(o,e,w),m=!0},p:A,i(e){m||(M(o.$$.fragment,e),m=!0)},o(e){b(o.$$.fragment,e),m=!1},d(e){e&&(i(t),i(n)),y(o,e)}}}function as(J){let t,f="Example:",n,o,m;return o=new de({props:{code:"JTIzJTIwSGVyZSUyMGlzJTIwYW4lMjBleGFtcGxlJTIwb2YlMjBhJTIwZGV2aWNlJTIwbWFwJTIwb24lMjBhJTIwbWFjaGluZSUyMHdpdGglMjA0JTIwR1BVcyUyMHVzaW5nJTIwbXQ1LXhsJTJDJTIwd2hpY2glMjBoYXMlMjBhJTIwdG90YWwlMjBvZiUyMDI0JTIwYXR0ZW50aW9uJTIwbW9kdWxlcyUzQSUwQW1vZGVsJTIwJTNEJTIwTVQ1Rm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uLmZyb21fcHJldHJhaW5lZCglMjJtdDUteGwlMjIpJTBBZGV2aWNlX21hcCUyMCUzRCUyMCU3QiUwQSUyMCUyMCUyMCUyMDAlM0ElMjAlNUIwJTJDJTIwMSUyQyUyMDIlNUQlMkMlMEElMjAlMjAlMjAlMjAxJTNBJTIwJTVCMyUyQyUyMDQlMkMlMjA1JTJDJTIwNiUyQyUyMDclMkMlMjA4JTJDJTIwOSU1RCUyQyUwQSUyMCUyMCUyMCUyMDIlM0ElMjAlNUIxMCUyQyUyMDExJTJDJTIwMTIlMkMlMjAxMyUyQyUyMDE0JTJDJTIwMTUlMkMlMjAxNiU1RCUyQyUwQSUyMCUyMCUyMCUyMDMlM0ElMjAlNUIxNyUyQyUyMDE4JTJDJTIwMTklMkMlMjAyMCUyQyUyMDIxJTJDJTIwMjIlMkMlMjAyMyU1RCUyQyUwQSU3RCUwQW1vZGVsLnBhcmFsbGVsaXplKGRldmljZV9tYXAp",highlighted:`<span class="hljs-comment"># Here is an example of a device map on a machine with 4 GPUs using mt5-xl, which has a total of 24 attention modules:</span>
model = MT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;mt5-xl&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)`,wrap:!1}}),{c(){t=c("p"),t.textContent=f,n=a(),g(o.$$.fragment)},l(e){t=p(e,"P",{"data-svelte-h":!0}),k(t)!=="svelte-11lpom8"&&(t.textContent=f),n=r(e),_(o.$$.fragment,e)},m(e,w){h(e,t,w),h(e,n,w),T(o,e,w),m=!0},p:A,i(e){m||(M(o.$$.fragment,e),m=!0)},o(e){b(o.$$.fragment,e),m=!1},d(e){e&&(i(t),i(n)),y(o,e)}}}function rs(J){let t,f="Examples:",n,o,m;return o=new de({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyME1UNUZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbiUyQyUyMEF1dG9Ub2tlbml6ZXIlMEElMEFtb2RlbCUyMCUzRCUyME1UNUZvckNvbmRpdGlvbmFsR2VuZXJhdGlvbi5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlJTJGbXQ1LXNtYWxsJTIyKSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZSUyRm10NS1zbWFsbCUyMiklMEFhcnRpY2xlJTIwJTNEJTIwJTIyVU4lMjBPZmZpemllciUyMHNhZ3QlMkMlMjBkYXNzJTIwd2VpdGVyJTIwdmVyaGFuZGVsdCUyMHdlcmRlbiUyMG11c3MlMjBpbiUyMFN5cmllbi4lMjIlMEFzdW1tYXJ5JTIwJTNEJTIwJTIyV2VpdGVyJTIwVmVyaGFuZGx1bmclMjBpbiUyMFN5cmllbi4lMjIlMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoYXJ0aWNsZSUyQyUyMHRleHRfdGFyZ2V0JTNEc3VtbWFyeSUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQWxvc3MlMjAlM0QlMjBvdXRwdXRzLmxvc3M=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MT5ForConditionalGeneration, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/mt5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mt5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>article = <span class="hljs-string">&quot;UN Offizier sagt, dass weiter verhandelt werden muss in Syrien.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary = <span class="hljs-string">&quot;Weiter Verhandlung in Syrien.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(article, text_target=summary, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`,wrap:!1}}),{c(){t=c("p"),t.textContent=f,n=a(),g(o.$$.fragment)},l(e){t=p(e,"P",{"data-svelte-h":!0}),k(t)!=="svelte-kvfsh7"&&(t.textContent=f),n=r(e),_(o.$$.fragment,e)},m(e,w){h(e,t,w),h(e,n,w),T(o,e,w),m=!0},p:A,i(e){m||(M(o.$$.fragment,e),m=!0)},o(e){b(o.$$.fragment,e),m=!1},d(e){e&&(i(t),i(n)),y(o,e)}}}function ls(J){let t,f="Example:",n,o,m;return o=new de({props:{code:"JTIzJTIwT24lMjBhJTIwNCUyMEdQVSUyMG1hY2hpbmUlMjB3aXRoJTIwbXQ1LXhsJTNBJTBBbW9kZWwlMjAlM0QlMjBNVDVGb3JDb25kaXRpb25hbEdlbmVyYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMk10NS14bCUyMiklMEFkZXZpY2VfbWFwJTIwJTNEJTIwJTdCJTBBJTIwJTIwJTIwJTIwMCUzQSUyMCU1QjAlMkMlMjAxJTJDJTIwMiU1RCUyQyUwQSUyMCUyMCUyMCUyMDElM0ElMjAlNUIzJTJDJTIwNCUyQyUyMDUlMkMlMjA2JTJDJTIwNyUyQyUyMDglMkMlMjA5JTVEJTJDJTBBJTIwJTIwJTIwJTIwMiUzQSUyMCU1QjEwJTJDJTIwMTElMkMlMjAxMiUyQyUyMDEzJTJDJTIwMTQlMkMlMjAxNSUyQyUyMDE2JTVEJTJDJTBBJTIwJTIwJTIwJTIwMyUzQSUyMCU1QjE3JTJDJTIwMTglMkMlMjAxOSUyQyUyMDIwJTJDJTIwMjElMkMlMjAyMiUyQyUyMDIzJTVEJTJDJTBBJTdEJTBBbW9kZWwucGFyYWxsZWxpemUoZGV2aWNlX21hcCklMjAlMjAlMjMlMjBTcGxpdHMlMjB0aGUlMjBtb2RlbCUyMGFjcm9zcyUyMHNldmVyYWwlMjBkZXZpY2VzJTBBbW9kZWwuZGVwYXJhbGxlbGl6ZSgpJTIwJTIwJTIzJTIwUHV0JTIwdGhlJTIwbW9kZWwlMjBiYWNrJTIwb24lMjBjcHUlMjBhbmQlMjBjbGVhbnMlMjBtZW1vcnklMjBieSUyMGNhbGxpbmclMjB0b3JjaC5jdWRhLmVtcHR5X2NhY2hlKCk=",highlighted:`<span class="hljs-comment"># On a 4 GPU machine with mt5-xl:</span>
model = MT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;Mt5-xl&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)  <span class="hljs-comment"># Splits the model across several devices</span>
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`,wrap:!1}}),{c(){t=c("p"),t.textContent=f,n=a(),g(o.$$.fragment)},l(e){t=p(e,"P",{"data-svelte-h":!0}),k(t)!=="svelte-11lpom8"&&(t.textContent=f),n=r(e),_(o.$$.fragment,e)},m(e,w){h(e,t,w),h(e,n,w),T(o,e,w),m=!0},p:A,i(e){m||(M(o.$$.fragment,e),m=!0)},o(e){b(o.$$.fragment,e),m=!1},d(e){e&&(i(t),i(n)),y(o,e)}}}function is(J){let t,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=f},l(n){t=p(n,"P",{"data-svelte-h":!0}),k(t)!=="svelte-fincs2"&&(t.innerHTML=f)},m(n,o){h(n,t,o)},p:A,d(n){n&&i(t)}}}function ds(J){let t,f="Examples:",n,o,m;return o=new de({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBNVDVGb3JDb25kaXRpb25hbEdlbmVyYXRpb24lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUtbXQ1JTJGbXQ1LXNtYWxsJTIyKSUwQW1vZGVsJTIwJTNEJTIwTVQ1Rm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUtbXQ1JTJGbXQ1LXNtYWxsJTIyKSUwQSUwQSUyMyUyMHRyYWluaW5nJTBBaW5wdXRfaWRzJTIwJTNEJTIwdG9rZW5pemVyKCUyMlRoZSUyMCUzQ2V4dHJhX2lkXzAlM0UlMjB3YWxrcyUyMGluJTIwJTNDZXh0cmFfaWRfMSUzRSUyMHBhcmslMjIlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKS5pbnB1dF9pZHMlMEFsYWJlbHMlMjAlM0QlMjB0b2tlbml6ZXIoJTIyJTNDZXh0cmFfaWRfMCUzRSUyMGN1dGUlMjBkb2clMjAlM0NleHRyYV9pZF8xJTNFJTIwdGhlJTIwJTNDZXh0cmFfaWRfMiUzRSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpLmlucHV0X2lkcyUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbChpbnB1dF9pZHMlM0RpbnB1dF9pZHMlMkMlMjBsYWJlbHMlM0RsYWJlbHMpJTBBbG9zcyUyMCUzRCUyMG91dHB1dHMubG9zcyUwQWxvZ2l0cyUyMCUzRCUyMG91dHB1dHMubG9naXRzJTBBJTBBJTIzJTIwaW5mZXJlbmNlJTBBaW5wdXRfaWRzJTIwJTNEJTIwdG9rZW5pemVyKCUwQSUyMCUyMCUyMCUyMCUyMnN1bW1hcml6ZSUzQSUyMHN0dWRpZXMlMjBoYXZlJTIwc2hvd24lMjB0aGF0JTIwb3duaW5nJTIwYSUyMGRvZyUyMGlzJTIwZ29vZCUyMGZvciUyMHlvdSUyMiUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIlMEEpLmlucHV0X2lkcyUyMCUyMCUyMyUyMEJhdGNoJTIwc2l6ZSUyMDElMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwuZ2VuZXJhdGUoaW5wdXRfaWRzKSUwQXByaW50KHRva2VuaXplci5kZWNvZGUob3V0cHV0cyU1QjAlNUQlMkMlMjBza2lwX3NwZWNpYWxfdG9rZW5zJTNEVHJ1ZSkpJTBBJTIzJTIwc3R1ZGllcyUyMGhhdmUlMjBzaG93biUyMHRoYXQlMjBvd25pbmclMjBhJTIwZG9nJTIwaXMlMjBnb29kJTIwZm9yJTIweW91Lg==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, MT5ForConditionalGeneration

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-mt5/mt5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google-mt5/mt5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;The &lt;extra_id_0&gt; walks in &lt;extra_id_1&gt; park&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;&lt;extra_id_0&gt; cute dog &lt;extra_id_1&gt; the &lt;extra_id_2&gt;&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># inference</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;summarize: studies have shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model.generate(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.decode(outputs[<span class="hljs-number">0</span>], skip_special_tokens=<span class="hljs-literal">True</span>))
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># studies have shown that owning a dog is good for you.</span>`,wrap:!1}}),{c(){t=c("p"),t.textContent=f,n=a(),g(o.$$.fragment)},l(e){t=p(e,"P",{"data-svelte-h":!0}),k(t)!=="svelte-kvfsh7"&&(t.textContent=f),n=r(e),_(o.$$.fragment,e)},m(e,w){h(e,t,w),h(e,n,w),T(o,e,w),m=!0},p:A,i(e){m||(M(o.$$.fragment,e),m=!0)},o(e){b(o.$$.fragment,e),m=!1},d(e){e&&(i(t),i(n)),y(o,e)}}}function cs(J){let t,f="Example:",n,o,m;return o=new de({props:{code:"JTIzJTIwSGVyZSUyMGlzJTIwYW4lMjBleGFtcGxlJTIwb2YlMjBhJTIwZGV2aWNlJTIwbWFwJTIwb24lMjBhJTIwbWFjaGluZSUyMHdpdGglMjA0JTIwR1BVcyUyMHVzaW5nJTIwbXQ1LXhsJTJDJTIwd2hpY2glMjBoYXMlMjBhJTIwdG90YWwlMjBvZiUyMDI0JTIwYXR0ZW50aW9uJTIwbW9kdWxlcyUzQSUwQW1vZGVsJTIwJTNEJTIwTVQ1Rm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uLmZyb21fcHJldHJhaW5lZCglMjJtdDUteGwlMjIpJTBBZGV2aWNlX21hcCUyMCUzRCUyMCU3QiUwQSUyMCUyMCUyMCUyMDAlM0ElMjAlNUIwJTJDJTIwMSUyQyUyMDIlNUQlMkMlMEElMjAlMjAlMjAlMjAxJTNBJTIwJTVCMyUyQyUyMDQlMkMlMjA1JTJDJTIwNiUyQyUyMDclMkMlMjA4JTJDJTIwOSU1RCUyQyUwQSUyMCUyMCUyMCUyMDIlM0ElMjAlNUIxMCUyQyUyMDExJTJDJTIwMTIlMkMlMjAxMyUyQyUyMDE0JTJDJTIwMTUlMkMlMjAxNiU1RCUyQyUwQSUyMCUyMCUyMCUyMDMlM0ElMjAlNUIxNyUyQyUyMDE4JTJDJTIwMTklMkMlMjAyMCUyQyUyMDIxJTJDJTIwMjIlMkMlMjAyMyU1RCUyQyUwQSU3RCUwQW1vZGVsLnBhcmFsbGVsaXplKGRldmljZV9tYXAp",highlighted:`<span class="hljs-comment"># Here is an example of a device map on a machine with 4 GPUs using mt5-xl, which has a total of 24 attention modules:</span>
model = MT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;mt5-xl&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)`,wrap:!1}}),{c(){t=c("p"),t.textContent=f,n=a(),g(o.$$.fragment)},l(e){t=p(e,"P",{"data-svelte-h":!0}),k(t)!=="svelte-11lpom8"&&(t.textContent=f),n=r(e),_(o.$$.fragment,e)},m(e,w){h(e,t,w),h(e,n,w),T(o,e,w),m=!0},p:A,i(e){m||(M(o.$$.fragment,e),m=!0)},o(e){b(o.$$.fragment,e),m=!1},d(e){e&&(i(t),i(n)),y(o,e)}}}function ps(J){let t,f="Examples:",n,o,m;return o=new de({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyME1UNUVuY29kZXJNb2RlbCUyQyUyMEF1dG9Ub2tlbml6ZXIlMEElMEFtb2RlbCUyMCUzRCUyME1UNUVuY29kZXJNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlJTJGbXQ1LXNtYWxsJTIyKSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZSUyRm10NS1zbWFsbCUyMiklMEFhcnRpY2xlJTIwJTNEJTIwJTIyVU4lMjBPZmZpemllciUyMHNhZ3QlMkMlMjBkYXNzJTIwd2VpdGVyJTIwdmVyaGFuZGVsdCUyMHdlcmRlbiUyMG11c3MlMjBpbiUyMFN5cmllbi4lMjIlMEFpbnB1dF9pZHMlMjAlM0QlMjB0b2tlbml6ZXIoYXJ0aWNsZSUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIycHQlMjIpLmlucHV0X2lkcyUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbChpbnB1dF9pZHMpJTBBaGlkZGVuX3N0YXRlJTIwJTNEJTIwb3V0cHV0cy5sYXN0X2hpZGRlbl9zdGF0ZQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MT5EncoderModel, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = MT5EncoderModel.from_pretrained(<span class="hljs-string">&quot;google/mt5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mt5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>article = <span class="hljs-string">&quot;UN Offizier sagt, dass weiter verhandelt werden muss in Syrien.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(article, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>hidden_state = outputs.last_hidden_state`,wrap:!1}}),{c(){t=c("p"),t.textContent=f,n=a(),g(o.$$.fragment)},l(e){t=p(e,"P",{"data-svelte-h":!0}),k(t)!=="svelte-kvfsh7"&&(t.textContent=f),n=r(e),_(o.$$.fragment,e)},m(e,w){h(e,t,w),h(e,n,w),T(o,e,w),m=!0},p:A,i(e){m||(M(o.$$.fragment,e),m=!0)},o(e){b(o.$$.fragment,e),m=!1},d(e){e&&(i(t),i(n)),y(o,e)}}}function ms(J){let t,f="Example:",n,o,m;return o=new de({props:{code:"JTIzJTIwT24lMjBhJTIwNCUyMEdQVSUyMG1hY2hpbmUlMjB3aXRoJTIwbXQ1LXhsJTNBJTBBbW9kZWwlMjAlM0QlMjBNVDVGb3JDb25kaXRpb25hbEdlbmVyYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMk10NS14bCUyMiklMEFkZXZpY2VfbWFwJTIwJTNEJTIwJTdCJTBBJTIwJTIwJTIwJTIwMCUzQSUyMCU1QjAlMkMlMjAxJTJDJTIwMiU1RCUyQyUwQSUyMCUyMCUyMCUyMDElM0ElMjAlNUIzJTJDJTIwNCUyQyUyMDUlMkMlMjA2JTJDJTIwNyUyQyUyMDglMkMlMjA5JTVEJTJDJTBBJTIwJTIwJTIwJTIwMiUzQSUyMCU1QjEwJTJDJTIwMTElMkMlMjAxMiUyQyUyMDEzJTJDJTIwMTQlMkMlMjAxNSUyQyUyMDE2JTVEJTJDJTBBJTIwJTIwJTIwJTIwMyUzQSUyMCU1QjE3JTJDJTIwMTglMkMlMjAxOSUyQyUyMDIwJTJDJTIwMjElMkMlMjAyMiUyQyUyMDIzJTVEJTJDJTBBJTdEJTBBbW9kZWwucGFyYWxsZWxpemUoZGV2aWNlX21hcCklMjAlMjAlMjMlMjBTcGxpdHMlMjB0aGUlMjBtb2RlbCUyMGFjcm9zcyUyMHNldmVyYWwlMjBkZXZpY2VzJTBBbW9kZWwuZGVwYXJhbGxlbGl6ZSgpJTIwJTIwJTIzJTIwUHV0JTIwdGhlJTIwbW9kZWwlMjBiYWNrJTIwb24lMjBjcHUlMjBhbmQlMjBjbGVhbnMlMjBtZW1vcnklMjBieSUyMGNhbGxpbmclMjB0b3JjaC5jdWRhLmVtcHR5X2NhY2hlKCk=",highlighted:`<span class="hljs-comment"># On a 4 GPU machine with mt5-xl:</span>
model = MT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;Mt5-xl&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)  <span class="hljs-comment"># Splits the model across several devices</span>
model.deparallelize()  <span class="hljs-comment"># Put the model back on cpu and cleans memory by calling torch.cuda.empty_cache()</span>`,wrap:!1}}),{c(){t=c("p"),t.textContent=f,n=a(),g(o.$$.fragment)},l(e){t=p(e,"P",{"data-svelte-h":!0}),k(t)!=="svelte-11lpom8"&&(t.textContent=f),n=r(e),_(o.$$.fragment,e)},m(e,w){h(e,t,w),h(e,n,w),T(o,e,w),m=!0},p:A,i(e){m||(M(o.$$.fragment,e),m=!0)},o(e){b(o.$$.fragment,e),m=!1},d(e){e&&(i(t),i(n)),y(o,e)}}}function us(J){let t,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=f},l(n){t=p(n,"P",{"data-svelte-h":!0}),k(t)!=="svelte-fincs2"&&(t.innerHTML=f)},m(n,o){h(n,t,o)},p:A,d(n){n&&i(t)}}}function hs(J){let t,f="Example:",n,o,m;return o=new de({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBNVDVFbmNvZGVyTW9kZWwlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUtbXQ1JTJGbXQ1LXNtYWxsJTIyKSUwQW1vZGVsJTIwJTNEJTIwTVQ1RW5jb2Rlck1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUtbXQ1JTJGbXQ1LXNtYWxsJTIyKSUwQWlucHV0X2lkcyUyMCUzRCUyMHRva2VuaXplciglMEElMjAlMjAlMjAlMjAlMjJTdHVkaWVzJTIwaGF2ZSUyMGJlZW4lMjBzaG93biUyMHRoYXQlMjBvd25pbmclMjBhJTIwZG9nJTIwaXMlMjBnb29kJTIwZm9yJTIweW91JTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiUwQSkuaW5wdXRfaWRzJTIwJTIwJTIzJTIwQmF0Y2glMjBzaXplJTIwMSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbChpbnB1dF9pZHMlM0RpbnB1dF9pZHMpJTBBbGFzdF9oaWRkZW5fc3RhdGVzJTIwJTNEJTIwb3V0cHV0cy5sYXN0X2hpZGRlbl9zdGF0ZQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, MT5EncoderModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google-mt5/mt5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MT5EncoderModel.from_pretrained(<span class="hljs-string">&quot;google-mt5/mt5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Studies have been shown that owning a dog is good for you&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>).input_ids  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){t=c("p"),t.textContent=f,n=a(),g(o.$$.fragment)},l(e){t=p(e,"P",{"data-svelte-h":!0}),k(t)!=="svelte-11lpom8"&&(t.textContent=f),n=r(e),_(o.$$.fragment,e)},m(e,w){h(e,t,w),h(e,n,w),T(o,e,w),m=!0},p:A,i(e){m||(M(o.$$.fragment,e),m=!0)},o(e){b(o.$$.fragment,e),m=!1},d(e){e&&(i(t),i(n)),y(o,e)}}}function fs(J){let t,f="Example:",n,o,m;return o=new de({props:{code:"JTIzJTIwSGVyZSUyMGlzJTIwYW4lMjBleGFtcGxlJTIwb2YlMjBhJTIwZGV2aWNlJTIwbWFwJTIwb24lMjBhJTIwbWFjaGluZSUyMHdpdGglMjA0JTIwR1BVcyUyMHVzaW5nJTIwbXQ1LXhsJTJDJTIwd2hpY2glMjBoYXMlMjBhJTIwdG90YWwlMjBvZiUyMDI0JTIwYXR0ZW50aW9uJTIwbW9kdWxlcyUzQSUwQW1vZGVsJTIwJTNEJTIwTVQ1Rm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uLmZyb21fcHJldHJhaW5lZCglMjJtdDUteGwlMjIpJTBBZGV2aWNlX21hcCUyMCUzRCUyMCU3QiUwQSUyMCUyMCUyMCUyMDAlM0ElMjAlNUIwJTJDJTIwMSUyQyUyMDIlNUQlMkMlMEElMjAlMjAlMjAlMjAxJTNBJTIwJTVCMyUyQyUyMDQlMkMlMjA1JTJDJTIwNiUyQyUyMDclMkMlMjA4JTJDJTIwOSU1RCUyQyUwQSUyMCUyMCUyMCUyMDIlM0ElMjAlNUIxMCUyQyUyMDExJTJDJTIwMTIlMkMlMjAxMyUyQyUyMDE0JTJDJTIwMTUlMkMlMjAxNiU1RCUyQyUwQSUyMCUyMCUyMCUyMDMlM0ElMjAlNUIxNyUyQyUyMDE4JTJDJTIwMTklMkMlMjAyMCUyQyUyMDIxJTJDJTIwMjIlMkMlMjAyMyU1RCUyQyUwQSU3RCUwQW1vZGVsLnBhcmFsbGVsaXplKGRldmljZV9tYXAp",highlighted:`<span class="hljs-comment"># Here is an example of a device map on a machine with 4 GPUs using mt5-xl, which has a total of 24 attention modules:</span>
model = MT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;mt5-xl&quot;</span>)
device_map = {
    <span class="hljs-number">0</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    <span class="hljs-number">1</span>: [<span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">8</span>, <span class="hljs-number">9</span>],
    <span class="hljs-number">2</span>: [<span class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span class="hljs-number">12</span>, <span class="hljs-number">13</span>, <span class="hljs-number">14</span>, <span class="hljs-number">15</span>, <span class="hljs-number">16</span>],
    <span class="hljs-number">3</span>: [<span class="hljs-number">17</span>, <span class="hljs-number">18</span>, <span class="hljs-number">19</span>, <span class="hljs-number">20</span>, <span class="hljs-number">21</span>, <span class="hljs-number">22</span>, <span class="hljs-number">23</span>],
}
model.parallelize(device_map)`,wrap:!1}}),{c(){t=c("p"),t.textContent=f,n=a(),g(o.$$.fragment)},l(e){t=p(e,"P",{"data-svelte-h":!0}),k(t)!=="svelte-11lpom8"&&(t.textContent=f),n=r(e),_(o.$$.fragment,e)},m(e,w){h(e,t,w),h(e,n,w),T(o,e,w),m=!0},p:A,i(e){m||(M(o.$$.fragment,e),m=!0)},o(e){b(o.$$.fragment,e),m=!1},d(e){e&&(i(t),i(n)),y(o,e)}}}function gs(J){let t,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=f},l(n){t=p(n,"P",{"data-svelte-h":!0}),k(t)!=="svelte-fincs2"&&(t.innerHTML=f)},m(n,o){h(n,t,o)},p:A,d(n){n&&i(t)}}}function _s(J){let t,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=f},l(n){t=p(n,"P",{"data-svelte-h":!0}),k(t)!=="svelte-fincs2"&&(t.innerHTML=f)},m(n,o){h(n,t,o)},p:A,d(n){n&&i(t)}}}function Ts(J){let t,f=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){t=c("p"),t.innerHTML=f},l(n){t=p(n,"P",{"data-svelte-h":!0}),k(t)!=="svelte-fincs2"&&(t.innerHTML=f)},m(n,o){h(n,t,o)},p:A,d(n){n&&i(t)}}}function Ms(J){let t,f,n,o,m,e,w="The bare MT5 Model transformer outputting raw hidden-states without any specific head on top.",Ze,V,te=`The MT5 model was proposed in <a href="https://arxiv.org/abs/1910.10683" rel="nofollow">Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer</a> by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It’s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`,X,E,B=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,S,Y,ae=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,qe,L,D,R,Z,Te,z,H="Moves the model to cpu from a model parallel state.",We,N,ce,P,G,O,u,j='The <a href="/docs/transformers/main/en/model_doc/mt5#transformers.MT5Model">MT5Model</a> forward method, overrides the <code>__call__</code> special method.',q,I,pe,nt,At,ne,De,$e,Ge,kn="This is an experimental feature and is a subject to change at a moment’s notice.",Tt,Zt,wn=`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`,Mt,ot,qt,Je,Wt,x,je,on,He,Yn="MT5 Model with a <code>language modeling</code> head on top.",sn,Re,On=`The MT5 model was proposed in <a href="https://arxiv.org/abs/1910.10683" rel="nofollow">Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer</a> by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It’s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`,an,me,bt=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,rn,Qe,Kn=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,ln,xe,vn,Ve,Me,st,yt,Gt="Moves the model to cpu from a model parallel state.",$n,Ae,Pe,oe,at,kt,Vt,Jn='The <a href="/docs/transformers/main/en/model_doc/mt5#transformers.MT5ForConditionalGeneration">MT5ForConditionalGeneration</a> forward method, overrides the <code>__call__</code> special method.',Ye,be,dn,Ue,jn,ye,ke,rt,wt,Bt="This is an experimental feature and is a subject to change at a moment’s notice.",xn,lt,vt=`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`,Un,Xe,Oe,Ke,se,W,it,$t,Nt,Cn="The bare MT5 Model transformer outputting encoder’s raw hidden-states without any specific head on top.",Jt,Ht,zn=`The MT5 model was proposed in <a href="https://arxiv.org/abs/1910.10683" rel="nofollow">Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer</a> by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It’s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`,Be,Ne,Fn=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,jt,Rt,In=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,xt,dt,cn,re,Ce,pn,Ee,eo="Moves the model to cpu from a model parallel state.",Pt,we,Zn,ue,ve,Yt,et,mn='The <a href="/docs/transformers/main/en/model_doc/mt5#transformers.MT5EncoderModel">MT5EncoderModel</a> forward method, overrides the <code>__call__</code> special method.',d,$,Se,Q,Ut,he,tt,Ot,ct,Le="This is an experimental feature and is a subject to change at a moment’s notice.",Ct,pt,Fo=`Uses a device map to distribute attention modules of the model across several devices. If no device map is given,
it will evenly distribute blocks across all devices.`,io,Kt,to,un,no,fe,hn,co,qn,Io=`MT5 model with a sequence classification/head on top (a linear layer on top of the pooled output) e.g. for GLUE
tasks.`,po,Wn,Zo=`The MT5 model was proposed in <a href="https://arxiv.org/abs/1910.10683" rel="nofollow">Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer</a> by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It’s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`,mo,Gn,qo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,uo,Vn,Wo=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,ho,zt,fn,fo,Bn,Go='The <a href="/docs/transformers/main/en/model_doc/mt5#transformers.MT5ForSequenceClassification">MT5ForSequenceClassification</a> forward method, overrides the <code>__call__</code> special method.',go,en,oo,gn,so,ge,_n,_o,Nn,Vo=`MT5 Encoder Model with a token classification head on top (a linear layer on top of the hidden-states output)
e.g. for Named-Entity-Recognition (NER) tasks.`,To,Hn,Bo=`The MT5 model was proposed in <a href="https://arxiv.org/abs/1910.10683" rel="nofollow">Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer</a> by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It’s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`,Mo,Rn,No=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,bo,Qn,Ho=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,yo,Ft,Tn,ko,Xn,Ro='The <a href="/docs/transformers/main/en/model_doc/mt5#transformers.MT5ForTokenClassification">MT5ForTokenClassification</a> forward method, overrides the <code>__call__</code> special method.',wo,tn,ao,Mn,ro,_e,bn,vo,En,Qo=`MT5 Model with a span classification head on top for extractive question-answering tasks like SQuAD (linear layers
on top of the hidden-states output to compute <code>span start logits</code> and <code>span end logits</code>).`,$o,Sn,Xo=`The MT5 model was proposed in <a href="https://arxiv.org/abs/1910.10683" rel="nofollow">Exploring the Limits of Transfer Learning with a Unified Text-to-Text
Transformer</a> by Colin Raffel, Noam Shazeer, Adam Roberts, Katherine Lee, Sharan
Narang, Michael Matena, Yanqi Zhou, Wei Li, Peter J. Liu. It’s an encoder decoder transformer pre-trained in a
text-to-text denoising generative setting.`,Jo,Ln,Eo=`This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,jo,Dn,So=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,xo,It,yn,Uo,An,Lo='The <a href="/docs/transformers/main/en/model_doc/mt5#transformers.MT5ForQuestionAnswering">MT5ForQuestionAnswering</a> forward method, overrides the <code>__call__</code> special method.',Co,nn,lo;return t=new ie({props:{title:"MT5Model",local:"transformers.MT5Model",headingTag:"h2"}}),o=new F({props:{name:"class transformers.MT5Model",anchor:"transformers.MT5Model",parameters:[{name:"config",val:": MT5Config"}],parametersDescription:[{anchor:"transformers.MT5Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mt5#transformers.MT5Config">MT5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mt5/modeling_mt5.py#L1331"}}),L=new le({props:{anchor:"transformers.MT5Model.example",$$slots:{default:[ts]},$$scope:{ctx:J}}}),Z=new F({props:{name:"deparallelize",anchor:"transformers.MT5Model.deparallelize",parameters:[],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mt5/modeling_mt5.py#L1402"}}),N=new le({props:{anchor:"transformers.MT5Model.deparallelize.example",$$slots:{default:[ns]},$$scope:{ctx:J}}}),G=new F({props:{name:"forward",anchor:"transformers.MT5Model.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MT5Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. MT5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./mt5#training">MT5 Training</a>.`,name:"input_ids"},{anchor:"transformers.MT5Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MT5Model.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MT5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./mt5#training">MT5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.MT5Model.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MT5Model.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MT5Model.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MT5Model.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MT5Model.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MT5Model.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MT5Model.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MT5Model.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MT5Model.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MT5Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MT5Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MT5Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mt5/modeling_mt5.py#L1444",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mt5#transformers.MT5Config"
>MT5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the decoder of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder’s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) — Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqModelOutput"
>transformers.modeling_outputs.Seq2SeqModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),I=new Pn({props:{$$slots:{default:[os]},$$scope:{ctx:J}}}),nt=new le({props:{anchor:"transformers.MT5Model.forward.example",$$slots:{default:[ss]},$$scope:{ctx:J}}}),De=new F({props:{name:"parallelize",anchor:"transformers.MT5Model.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.MT5Model.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
A dictionary that maps attention modules to devices. Note that the embedding module and LMHead are always
automatically mapped to the first device (for esoteric reasons). That means that the first device should
have fewer attention modules mapped to it than other devices. For reference, the mt5 models have the
following number of attention modules:</p>
<ul>
<li>mt5-small: 6</li>
<li>mt5-base: 12</li>
<li>mt5-large: 24</li>
<li>mt5-xl: 24</li>
<li>mt5-xxl: 24</li>
</ul>`,name:"device_map"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mt5/modeling_mt5.py#L1382"}}),ot=new le({props:{anchor:"transformers.MT5Model.parallelize.example",$$slots:{default:[as]},$$scope:{ctx:J}}}),Je=new ie({props:{title:"MT5ForConditionalGeneration",local:"transformers.MT5ForConditionalGeneration",headingTag:"h2"}}),je=new F({props:{name:"class transformers.MT5ForConditionalGeneration",anchor:"transformers.MT5ForConditionalGeneration",parameters:[{name:"config",val:": MT5Config"}],parametersDescription:[{anchor:"transformers.MT5ForConditionalGeneration.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mt5#transformers.MT5Config">MT5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mt5/modeling_mt5.py#L1560"}}),xe=new le({props:{anchor:"transformers.MT5ForConditionalGeneration.example",$$slots:{default:[rs]},$$scope:{ctx:J}}}),Me=new F({props:{name:"deparallelize",anchor:"transformers.MT5ForConditionalGeneration.deparallelize",parameters:[],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mt5/modeling_mt5.py#L1632"}}),Ae=new le({props:{anchor:"transformers.MT5ForConditionalGeneration.deparallelize.example",$$slots:{default:[ls]},$$scope:{ctx:J}}}),at=new F({props:{name:"forward",anchor:"transformers.MT5ForConditionalGeneration.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MT5ForConditionalGeneration.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. MT5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./mt5#training">MT5 Training</a>.`,name:"input_ids"},{anchor:"transformers.MT5ForConditionalGeneration.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MT5ForConditionalGeneration.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MT5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./mt5#training">MT5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.MT5ForConditionalGeneration.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MT5ForConditionalGeneration.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MT5ForConditionalGeneration.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MT5ForConditionalGeneration.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MT5ForConditionalGeneration.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MT5ForConditionalGeneration.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MT5ForConditionalGeneration.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MT5ForConditionalGeneration.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MT5ForConditionalGeneration.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MT5ForConditionalGeneration.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MT5ForConditionalGeneration.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MT5ForConditionalGeneration.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MT5ForConditionalGeneration.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[-100, 0, ..., config.vocab_size - 1]</code>. All labels set to <code>-100</code> are ignored (masked), the loss is only computed for
labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mt5/modeling_mt5.py#L1674",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mt5#transformers.MT5Config"
>MT5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Language modeling loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) — Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder’s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) — Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqLMOutput"
>transformers.modeling_outputs.Seq2SeqLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),be=new Pn({props:{$$slots:{default:[is]},$$scope:{ctx:J}}}),Ue=new le({props:{anchor:"transformers.MT5ForConditionalGeneration.forward.example",$$slots:{default:[ds]},$$scope:{ctx:J}}}),ke=new F({props:{name:"parallelize",anchor:"transformers.MT5ForConditionalGeneration.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.MT5ForConditionalGeneration.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
A dictionary that maps attention modules to devices. Note that the embedding module and LMHead are always
automatically mapped to the first device (for esoteric reasons). That means that the first device should
have fewer attention modules mapped to it than other devices. For reference, the mt5 models have the
following number of attention modules:</p>
<ul>
<li>mt5-small: 6</li>
<li>mt5-base: 12</li>
<li>mt5-large: 24</li>
<li>mt5-xl: 24</li>
<li>mt5-xxl: 24</li>
</ul>`,name:"device_map"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mt5/modeling_mt5.py#L1611"}}),Xe=new le({props:{anchor:"transformers.MT5ForConditionalGeneration.parallelize.example",$$slots:{default:[cs]},$$scope:{ctx:J}}}),Ke=new ie({props:{title:"MT5EncoderModel",local:"transformers.MT5EncoderModel",headingTag:"h2"}}),it=new F({props:{name:"class transformers.MT5EncoderModel",anchor:"transformers.MT5EncoderModel",parameters:[{name:"config",val:": MT5Config"}],parametersDescription:[{anchor:"transformers.MT5EncoderModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mt5#transformers.MT5Config">MT5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mt5/modeling_mt5.py#L1905"}}),dt=new le({props:{anchor:"transformers.MT5EncoderModel.example",$$slots:{default:[ps]},$$scope:{ctx:J}}}),Ce=new F({props:{name:"deparallelize",anchor:"transformers.MT5EncoderModel.deparallelize",parameters:[],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mt5/modeling_mt5.py#L1964"}}),we=new le({props:{anchor:"transformers.MT5EncoderModel.deparallelize.example",$$slots:{default:[ms]},$$scope:{ctx:J}}}),ve=new F({props:{name:"forward",anchor:"transformers.MT5EncoderModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MT5EncoderModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. MT5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./mt5#training">MT5 Training</a>.`,name:"input_ids"},{anchor:"transformers.MT5EncoderModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MT5EncoderModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MT5EncoderModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MT5EncoderModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MT5EncoderModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MT5EncoderModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mt5/modeling_mt5.py#L1999",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mt5#transformers.MT5Config"
>MT5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$=new Pn({props:{$$slots:{default:[us]},$$scope:{ctx:J}}}),Q=new le({props:{anchor:"transformers.MT5EncoderModel.forward.example",$$slots:{default:[hs]},$$scope:{ctx:J}}}),tt=new F({props:{name:"parallelize",anchor:"transformers.MT5EncoderModel.parallelize",parameters:[{name:"device_map",val:" = None"}],parametersDescription:[{anchor:"transformers.MT5EncoderModel.parallelize.device_map",description:`<strong>device_map</strong> (<code>Dict[int, list]</code>, optional, defaults to None) &#x2014;
A dictionary that maps attention modules to devices. Note that the embedding module and LMHead are always
automatically mapped to the first device (for esoteric reasons). That means that the first device should
have fewer attention modules mapped to it than other devices. For reference, the mt5 models have the
following number of attention modules:</p>
<ul>
<li>mt5-small: 6</li>
<li>mt5-base: 12</li>
<li>mt5-large: 24</li>
<li>mt5-xl: 24</li>
<li>mt5-xxl: 24</li>
</ul>`,name:"device_map"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mt5/modeling_mt5.py#L1945"}}),Kt=new le({props:{anchor:"transformers.MT5EncoderModel.parallelize.example",$$slots:{default:[fs]},$$scope:{ctx:J}}}),un=new ie({props:{title:"MT5ForSequenceClassification",local:"transformers.MT5ForSequenceClassification",headingTag:"h2"}}),hn=new F({props:{name:"class transformers.MT5ForSequenceClassification",anchor:"transformers.MT5ForSequenceClassification",parameters:[{name:"config",val:": MT5Config"}],parametersDescription:[{anchor:"transformers.MT5ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mt5#transformers.MT5Config">MT5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mt5/modeling_mt5.py#L2043"}}),fn=new F({props:{name:"forward",anchor:"transformers.MT5ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MT5ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. MT5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./mt5#training">MT5 Training</a>.`,name:"input_ids"},{anchor:"transformers.MT5ForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MT5ForSequenceClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MT5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./mt5#training">MT5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.MT5ForSequenceClassification.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MT5ForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MT5ForSequenceClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MT5ForSequenceClassification.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MT5ForSequenceClassification.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MT5ForSequenceClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MT5ForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MT5ForSequenceClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MT5ForSequenceClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MT5ForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MT5ForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MT5ForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MT5ForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mt5/modeling_mt5.py#L2065",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mt5#transformers.MT5Config"
>MT5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) — Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) — Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder’s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) — Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput"
>transformers.modeling_outputs.Seq2SeqSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),en=new Pn({props:{$$slots:{default:[gs]},$$scope:{ctx:J}}}),gn=new ie({props:{title:"MT5ForTokenClassification",local:"transformers.MT5ForTokenClassification",headingTag:"h2"}}),_n=new F({props:{name:"class transformers.MT5ForTokenClassification",anchor:"transformers.MT5ForTokenClassification",parameters:[{name:"config",val:": MT5Config"}],parametersDescription:[{anchor:"transformers.MT5ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mt5#transformers.MT5Config">MT5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mt5/modeling_mt5.py#L2178"}}),Tn=new F({props:{name:"forward",anchor:"transformers.MT5ForTokenClassification.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"labels",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MT5ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. MT5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./mt5#training">MT5 Training</a>.`,name:"input_ids"},{anchor:"transformers.MT5ForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MT5ForTokenClassification.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MT5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./mt5#training">MT5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.MT5ForTokenClassification.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MT5ForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MT5ForTokenClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MT5ForTokenClassification.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MT5ForTokenClassification.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MT5ForTokenClassification.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MT5ForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MT5ForTokenClassification.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MT5ForTokenClassification.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MT5ForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MT5ForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MT5ForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MT5ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mt5/modeling_mt5.py#L2200",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mt5#transformers.MT5Config"
>MT5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  — Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) — Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tn=new Pn({props:{$$slots:{default:[_s]},$$scope:{ctx:J}}}),Mn=new ie({props:{title:"MT5ForQuestionAnswering",local:"transformers.MT5ForQuestionAnswering",headingTag:"h2"}}),bn=new F({props:{name:"class transformers.MT5ForQuestionAnswering",anchor:"transformers.MT5ForQuestionAnswering",parameters:[{name:"config",val:": MT5Config"}],parametersDescription:[{anchor:"transformers.MT5ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mt5#transformers.MT5Config">MT5Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mt5/modeling_mt5.py#L2252"}}),yn=new F({props:{name:"forward",anchor:"transformers.MT5ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"decoder_input_ids",val:": Optional = None"},{name:"decoder_attention_mask",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"decoder_head_mask",val:": Optional = None"},{name:"cross_attn_head_mask",val:": Optional = None"},{name:"encoder_outputs",val:": Optional = None"},{name:"start_positions",val:": Optional = None"},{name:"end_positions",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"decoder_inputs_embeds",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.MT5ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. MT5 is a model with relative position embeddings so you
should be able to pad the inputs on both the right and the left.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for detail.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a></p>
<p>To know more on how to prepare <code>input_ids</code> for pretraining take a look a <a href="./mt5#training">MT5 Training</a>.`,name:"input_ids"},{anchor:"transformers.MT5ForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MT5ForQuestionAnswering.forward.decoder_input_ids",description:`<strong>decoder_input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of decoder input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#decoder-input-ids">What are decoder input IDs?</a></p>
<p>MT5 uses the <code>pad_token_id</code> as the starting token for <code>decoder_input_ids</code> generation. If <code>past_key_values</code>
is used, optionally only the last <code>decoder_input_ids</code> have to be input (see <code>past_key_values</code>).</p>
<p>To know more on how to prepare <code>decoder_input_ids</code> for pretraining take a look at <a href="./mt5#training">MT5
Training</a>.`,name:"decoder_input_ids"},{anchor:"transformers.MT5ForQuestionAnswering.forward.decoder_attention_mask",description:`<strong>decoder_attention_mask</strong> (<code>torch.BoolTensor</code> of shape <code>(batch_size, target_sequence_length)</code>, <em>optional</em>) &#x2014;
Default behavior: generate a tensor that ignores pad tokens in <code>decoder_input_ids</code>. Causal mask will also
be used by default.`,name:"decoder_attention_mask"},{anchor:"transformers.MT5ForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MT5ForQuestionAnswering.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.MT5ForQuestionAnswering.forward.cross_attn_head_mask",description:`<strong>cross_attn_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the cross-attention modules in the decoder. Mask values selected in
<code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"cross_attn_head_mask"},{anchor:"transformers.MT5ForQuestionAnswering.forward.encoder_outputs",description:`<strong>encoder_outputs</strong> (<code>tuple(tuple(torch.FloatTensor)</code>, <em>optional</em>) &#x2014;
Tuple consists of (<code>last_hidden_state</code>, <code>optional</code>: <em>hidden_states</em>, <code>optional</code>: <em>attentions</em>)
<code>last_hidden_state</code> of shape <code>(batch_size, sequence_length, hidden_size)</code> is a sequence of hidden states at
the output of the last layer of the encoder. Used in the cross-attention of the decoder.`,name:"encoder_outputs"},{anchor:"transformers.MT5ForQuestionAnswering.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.MT5ForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MT5ForQuestionAnswering.forward.decoder_inputs_embeds",description:`<strong>decoder_inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, target_sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>decoder_input_ids</code> you can choose to directly pass an embedded
representation. If <code>past_key_values</code> is used, optionally only the last <code>decoder_inputs_embeds</code> have to be
input (see <code>past_key_values</code>). This is useful if you want more control over how to convert
<code>decoder_input_ids</code> indices into associated vectors than the model&#x2019;s internal embedding lookup matrix.</p>
<p>If <code>decoder_input_ids</code> and <code>decoder_inputs_embeds</code> are both unset, <code>decoder_inputs_embeds</code> takes the value
of <code>inputs_embeds</code>.`,name:"decoder_inputs_embeds"},{anchor:"transformers.MT5ForQuestionAnswering.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"},{anchor:"transformers.MT5ForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MT5ForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MT5ForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MT5ForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MT5ForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mt5/modeling_mt5.py#L2308",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mt5#transformers.MT5Config"
>MT5Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) — Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) — Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) — Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) — Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and 2 additional tensors of shape
<code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and in the cross-attention
blocks) that can be used (see <code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>decoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the decoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>decoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder’s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>encoder_last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) — Sequence of hidden-states at the output of the last layer of the encoder of the model.</p>
</li>
<li>
<p><strong>encoder_hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the encoder at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>encoder_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the encoder, after the attention softmax, used to compute the weighted average in the
self-attention heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput"
>transformers.modeling_outputs.Seq2SeqQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),nn=new Pn({props:{$$slots:{default:[Ts]},$$scope:{ctx:J}}}),{c(){g(t.$$.fragment),f=a(),n=c("div"),g(o.$$.fragment),m=a(),e=c("p"),e.textContent=w,Ze=a(),V=c("p"),V.innerHTML=te,X=a(),E=c("p"),E.innerHTML=B,S=a(),Y=c("p"),Y.innerHTML=ae,qe=a(),g(L.$$.fragment),D=a(),R=c("div"),g(Z.$$.fragment),Te=a(),z=c("p"),z.textContent=H,We=a(),g(N.$$.fragment),ce=a(),P=c("div"),g(G.$$.fragment),O=a(),u=c("p"),u.innerHTML=j,q=a(),g(I.$$.fragment),pe=a(),g(nt.$$.fragment),At=a(),ne=c("div"),g(De.$$.fragment),$e=a(),Ge=c("p"),Ge.textContent=kn,Tt=a(),Zt=c("p"),Zt.textContent=wn,Mt=a(),g(ot.$$.fragment),qt=a(),g(Je.$$.fragment),Wt=a(),x=c("div"),g(je.$$.fragment),on=a(),He=c("p"),He.innerHTML=Yn,sn=a(),Re=c("p"),Re.innerHTML=On,an=a(),me=c("p"),me.innerHTML=bt,rn=a(),Qe=c("p"),Qe.innerHTML=Kn,ln=a(),g(xe.$$.fragment),vn=a(),Ve=c("div"),g(Me.$$.fragment),st=a(),yt=c("p"),yt.textContent=Gt,$n=a(),g(Ae.$$.fragment),Pe=a(),oe=c("div"),g(at.$$.fragment),kt=a(),Vt=c("p"),Vt.innerHTML=Jn,Ye=a(),g(be.$$.fragment),dn=a(),g(Ue.$$.fragment),jn=a(),ye=c("div"),g(ke.$$.fragment),rt=a(),wt=c("p"),wt.textContent=Bt,xn=a(),lt=c("p"),lt.textContent=vt,Un=a(),g(Xe.$$.fragment),Oe=a(),g(Ke.$$.fragment),se=a(),W=c("div"),g(it.$$.fragment),$t=a(),Nt=c("p"),Nt.textContent=Cn,Jt=a(),Ht=c("p"),Ht.innerHTML=zn,Be=a(),Ne=c("p"),Ne.innerHTML=Fn,jt=a(),Rt=c("p"),Rt.innerHTML=In,xt=a(),g(dt.$$.fragment),cn=a(),re=c("div"),g(Ce.$$.fragment),pn=a(),Ee=c("p"),Ee.textContent=eo,Pt=a(),g(we.$$.fragment),Zn=a(),ue=c("div"),g(ve.$$.fragment),Yt=a(),et=c("p"),et.innerHTML=mn,d=a(),g($.$$.fragment),Se=a(),g(Q.$$.fragment),Ut=a(),he=c("div"),g(tt.$$.fragment),Ot=a(),ct=c("p"),ct.textContent=Le,Ct=a(),pt=c("p"),pt.textContent=Fo,io=a(),g(Kt.$$.fragment),to=a(),g(un.$$.fragment),no=a(),fe=c("div"),g(hn.$$.fragment),co=a(),qn=c("p"),qn.textContent=Io,po=a(),Wn=c("p"),Wn.innerHTML=Zo,mo=a(),Gn=c("p"),Gn.innerHTML=qo,uo=a(),Vn=c("p"),Vn.innerHTML=Wo,ho=a(),zt=c("div"),g(fn.$$.fragment),fo=a(),Bn=c("p"),Bn.innerHTML=Go,go=a(),g(en.$$.fragment),oo=a(),g(gn.$$.fragment),so=a(),ge=c("div"),g(_n.$$.fragment),_o=a(),Nn=c("p"),Nn.textContent=Vo,To=a(),Hn=c("p"),Hn.innerHTML=Bo,Mo=a(),Rn=c("p"),Rn.innerHTML=No,bo=a(),Qn=c("p"),Qn.innerHTML=Ho,yo=a(),Ft=c("div"),g(Tn.$$.fragment),ko=a(),Xn=c("p"),Xn.innerHTML=Ro,wo=a(),g(tn.$$.fragment),ao=a(),g(Mn.$$.fragment),ro=a(),_e=c("div"),g(bn.$$.fragment),vo=a(),En=c("p"),En.innerHTML=Qo,$o=a(),Sn=c("p"),Sn.innerHTML=Xo,Jo=a(),Ln=c("p"),Ln.innerHTML=Eo,jo=a(),Dn=c("p"),Dn.innerHTML=So,xo=a(),It=c("div"),g(yn.$$.fragment),Uo=a(),An=c("p"),An.innerHTML=Lo,Co=a(),g(nn.$$.fragment),this.h()},l(l){_(t.$$.fragment,l),f=r(l),n=p(l,"DIV",{class:!0});var v=C(n);_(o.$$.fragment,v),m=r(v),e=p(v,"P",{"data-svelte-h":!0}),k(e)!=="svelte-r01pan"&&(e.textContent=w),Ze=r(v),V=p(v,"P",{"data-svelte-h":!0}),k(V)!=="svelte-1hbaqlt"&&(V.innerHTML=te),X=r(v),E=p(v,"P",{"data-svelte-h":!0}),k(E)!=="svelte-6pahdo"&&(E.innerHTML=B),S=r(v),Y=p(v,"P",{"data-svelte-h":!0}),k(Y)!=="svelte-hswkmf"&&(Y.innerHTML=ae),qe=r(v),_(L.$$.fragment,v),D=r(v),R=p(v,"DIV",{class:!0});var Qt=C(R);_(Z.$$.fragment,Qt),Te=r(Qt),z=p(Qt,"P",{"data-svelte-h":!0}),k(z)!=="svelte-ewr91v"&&(z.textContent=H),We=r(Qt),_(N.$$.fragment,Qt),Qt.forEach(i),ce=r(v),P=p(v,"DIV",{class:!0});var mt=C(P);_(G.$$.fragment,mt),O=r(mt),u=p(mt,"P",{"data-svelte-h":!0}),k(u)!=="svelte-1t10xed"&&(u.innerHTML=j),q=r(mt),_(I.$$.fragment,mt),pe=r(mt),_(nt.$$.fragment,mt),mt.forEach(i),At=r(v),ne=p(v,"DIV",{class:!0});var ut=C(ne);_(De.$$.fragment,ut),$e=r(ut),Ge=p(ut,"P",{"data-svelte-h":!0}),k(Ge)!=="svelte-1wtkcqk"&&(Ge.textContent=kn),Tt=r(ut),Zt=p(ut,"P",{"data-svelte-h":!0}),k(Zt)!=="svelte-16fuwd4"&&(Zt.textContent=wn),Mt=r(ut),_(ot.$$.fragment,ut),ut.forEach(i),v.forEach(i),qt=r(l),_(Je.$$.fragment,l),Wt=r(l),x=p(l,"DIV",{class:!0});var K=C(x);_(je.$$.fragment,K),on=r(K),He=p(K,"P",{"data-svelte-h":!0}),k(He)!=="svelte-1mzt99y"&&(He.innerHTML=Yn),sn=r(K),Re=p(K,"P",{"data-svelte-h":!0}),k(Re)!=="svelte-1hbaqlt"&&(Re.innerHTML=On),an=r(K),me=p(K,"P",{"data-svelte-h":!0}),k(me)!=="svelte-6pahdo"&&(me.innerHTML=bt),rn=r(K),Qe=p(K,"P",{"data-svelte-h":!0}),k(Qe)!=="svelte-hswkmf"&&(Qe.innerHTML=Kn),ln=r(K),_(xe.$$.fragment,K),vn=r(K),Ve=p(K,"DIV",{class:!0});var Xt=C(Ve);_(Me.$$.fragment,Xt),st=r(Xt),yt=p(Xt,"P",{"data-svelte-h":!0}),k(yt)!=="svelte-ewr91v"&&(yt.textContent=Gt),$n=r(Xt),_(Ae.$$.fragment,Xt),Xt.forEach(i),Pe=r(K),oe=p(K,"DIV",{class:!0});var ht=C(oe);_(at.$$.fragment,ht),kt=r(ht),Vt=p(ht,"P",{"data-svelte-h":!0}),k(Vt)!=="svelte-d1xuhv"&&(Vt.innerHTML=Jn),Ye=r(ht),_(be.$$.fragment,ht),dn=r(ht),_(Ue.$$.fragment,ht),ht.forEach(i),jn=r(K),ye=p(K,"DIV",{class:!0});var ft=C(ye);_(ke.$$.fragment,ft),rt=r(ft),wt=p(ft,"P",{"data-svelte-h":!0}),k(wt)!=="svelte-1wtkcqk"&&(wt.textContent=Bt),xn=r(ft),lt=p(ft,"P",{"data-svelte-h":!0}),k(lt)!=="svelte-16fuwd4"&&(lt.textContent=vt),Un=r(ft),_(Xe.$$.fragment,ft),ft.forEach(i),K.forEach(i),Oe=r(l),_(Ke.$$.fragment,l),se=r(l),W=p(l,"DIV",{class:!0});var ee=C(W);_(it.$$.fragment,ee),$t=r(ee),Nt=p(ee,"P",{"data-svelte-h":!0}),k(Nt)!=="svelte-1ixg1pn"&&(Nt.textContent=Cn),Jt=r(ee),Ht=p(ee,"P",{"data-svelte-h":!0}),k(Ht)!=="svelte-1hbaqlt"&&(Ht.innerHTML=zn),Be=r(ee),Ne=p(ee,"P",{"data-svelte-h":!0}),k(Ne)!=="svelte-6pahdo"&&(Ne.innerHTML=Fn),jt=r(ee),Rt=p(ee,"P",{"data-svelte-h":!0}),k(Rt)!=="svelte-hswkmf"&&(Rt.innerHTML=In),xt=r(ee),_(dt.$$.fragment,ee),cn=r(ee),re=p(ee,"DIV",{class:!0});var Et=C(re);_(Ce.$$.fragment,Et),pn=r(Et),Ee=p(Et,"P",{"data-svelte-h":!0}),k(Ee)!=="svelte-ewr91v"&&(Ee.textContent=eo),Pt=r(Et),_(we.$$.fragment,Et),Et.forEach(i),Zn=r(ee),ue=p(ee,"DIV",{class:!0});var gt=C(ue);_(ve.$$.fragment,gt),Yt=r(gt),et=p(gt,"P",{"data-svelte-h":!0}),k(et)!=="svelte-15a408f"&&(et.innerHTML=mn),d=r(gt),_($.$$.fragment,gt),Se=r(gt),_(Q.$$.fragment,gt),gt.forEach(i),Ut=r(ee),he=p(ee,"DIV",{class:!0});var _t=C(he);_(tt.$$.fragment,_t),Ot=r(_t),ct=p(_t,"P",{"data-svelte-h":!0}),k(ct)!=="svelte-1wtkcqk"&&(ct.textContent=Le),Ct=r(_t),pt=p(_t,"P",{"data-svelte-h":!0}),k(pt)!=="svelte-16fuwd4"&&(pt.textContent=Fo),io=r(_t),_(Kt.$$.fragment,_t),_t.forEach(i),ee.forEach(i),to=r(l),_(un.$$.fragment,l),no=r(l),fe=p(l,"DIV",{class:!0});var ze=C(fe);_(hn.$$.fragment,ze),co=r(ze),qn=p(ze,"P",{"data-svelte-h":!0}),k(qn)!=="svelte-176h55s"&&(qn.textContent=Io),po=r(ze),Wn=p(ze,"P",{"data-svelte-h":!0}),k(Wn)!=="svelte-1hbaqlt"&&(Wn.innerHTML=Zo),mo=r(ze),Gn=p(ze,"P",{"data-svelte-h":!0}),k(Gn)!=="svelte-6pahdo"&&(Gn.innerHTML=qo),uo=r(ze),Vn=p(ze,"P",{"data-svelte-h":!0}),k(Vn)!=="svelte-hswkmf"&&(Vn.innerHTML=Wo),ho=r(ze),zt=p(ze,"DIV",{class:!0});var St=C(zt);_(fn.$$.fragment,St),fo=r(St),Bn=p(St,"P",{"data-svelte-h":!0}),k(Bn)!=="svelte-1nt340b"&&(Bn.innerHTML=Go),go=r(St),_(en.$$.fragment,St),St.forEach(i),ze.forEach(i),oo=r(l),_(gn.$$.fragment,l),so=r(l),ge=p(l,"DIV",{class:!0});var Fe=C(ge);_(_n.$$.fragment,Fe),_o=r(Fe),Nn=p(Fe,"P",{"data-svelte-h":!0}),k(Nn)!=="svelte-16wnj"&&(Nn.textContent=Vo),To=r(Fe),Hn=p(Fe,"P",{"data-svelte-h":!0}),k(Hn)!=="svelte-1hbaqlt"&&(Hn.innerHTML=Bo),Mo=r(Fe),Rn=p(Fe,"P",{"data-svelte-h":!0}),k(Rn)!=="svelte-6pahdo"&&(Rn.innerHTML=No),bo=r(Fe),Qn=p(Fe,"P",{"data-svelte-h":!0}),k(Qn)!=="svelte-hswkmf"&&(Qn.innerHTML=Ho),yo=r(Fe),Ft=p(Fe,"DIV",{class:!0});var Lt=C(Ft);_(Tn.$$.fragment,Lt),ko=r(Lt),Xn=p(Lt,"P",{"data-svelte-h":!0}),k(Xn)!=="svelte-19qs4gn"&&(Xn.innerHTML=Ro),wo=r(Lt),_(tn.$$.fragment,Lt),Lt.forEach(i),Fe.forEach(i),ao=r(l),_(Mn.$$.fragment,l),ro=r(l),_e=p(l,"DIV",{class:!0});var Ie=C(_e);_(bn.$$.fragment,Ie),vo=r(Ie),En=p(Ie,"P",{"data-svelte-h":!0}),k(En)!=="svelte-1v5r6h0"&&(En.innerHTML=Qo),$o=r(Ie),Sn=p(Ie,"P",{"data-svelte-h":!0}),k(Sn)!=="svelte-1hbaqlt"&&(Sn.innerHTML=Xo),Jo=r(Ie),Ln=p(Ie,"P",{"data-svelte-h":!0}),k(Ln)!=="svelte-6pahdo"&&(Ln.innerHTML=Eo),jo=r(Ie),Dn=p(Ie,"P",{"data-svelte-h":!0}),k(Dn)!=="svelte-hswkmf"&&(Dn.innerHTML=So),xo=r(Ie),It=p(Ie,"DIV",{class:!0});var Dt=C(It);_(yn.$$.fragment,Dt),Uo=r(Dt),An=p(Dt,"P",{"data-svelte-h":!0}),k(An)!=="svelte-kgrb83"&&(An.innerHTML=Lo),Co=r(Dt),_(nn.$$.fragment,Dt),Dt.forEach(i),Ie.forEach(i),this.h()},h(){U(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(l,v){T(t,l,v),h(l,f,v),h(l,n,v),T(o,n,null),s(n,m),s(n,e),s(n,Ze),s(n,V),s(n,X),s(n,E),s(n,S),s(n,Y),s(n,qe),T(L,n,null),s(n,D),s(n,R),T(Z,R,null),s(R,Te),s(R,z),s(R,We),T(N,R,null),s(n,ce),s(n,P),T(G,P,null),s(P,O),s(P,u),s(P,q),T(I,P,null),s(P,pe),T(nt,P,null),s(n,At),s(n,ne),T(De,ne,null),s(ne,$e),s(ne,Ge),s(ne,Tt),s(ne,Zt),s(ne,Mt),T(ot,ne,null),h(l,qt,v),T(Je,l,v),h(l,Wt,v),h(l,x,v),T(je,x,null),s(x,on),s(x,He),s(x,sn),s(x,Re),s(x,an),s(x,me),s(x,rn),s(x,Qe),s(x,ln),T(xe,x,null),s(x,vn),s(x,Ve),T(Me,Ve,null),s(Ve,st),s(Ve,yt),s(Ve,$n),T(Ae,Ve,null),s(x,Pe),s(x,oe),T(at,oe,null),s(oe,kt),s(oe,Vt),s(oe,Ye),T(be,oe,null),s(oe,dn),T(Ue,oe,null),s(x,jn),s(x,ye),T(ke,ye,null),s(ye,rt),s(ye,wt),s(ye,xn),s(ye,lt),s(ye,Un),T(Xe,ye,null),h(l,Oe,v),T(Ke,l,v),h(l,se,v),h(l,W,v),T(it,W,null),s(W,$t),s(W,Nt),s(W,Jt),s(W,Ht),s(W,Be),s(W,Ne),s(W,jt),s(W,Rt),s(W,xt),T(dt,W,null),s(W,cn),s(W,re),T(Ce,re,null),s(re,pn),s(re,Ee),s(re,Pt),T(we,re,null),s(W,Zn),s(W,ue),T(ve,ue,null),s(ue,Yt),s(ue,et),s(ue,d),T($,ue,null),s(ue,Se),T(Q,ue,null),s(W,Ut),s(W,he),T(tt,he,null),s(he,Ot),s(he,ct),s(he,Ct),s(he,pt),s(he,io),T(Kt,he,null),h(l,to,v),T(un,l,v),h(l,no,v),h(l,fe,v),T(hn,fe,null),s(fe,co),s(fe,qn),s(fe,po),s(fe,Wn),s(fe,mo),s(fe,Gn),s(fe,uo),s(fe,Vn),s(fe,ho),s(fe,zt),T(fn,zt,null),s(zt,fo),s(zt,Bn),s(zt,go),T(en,zt,null),h(l,oo,v),T(gn,l,v),h(l,so,v),h(l,ge,v),T(_n,ge,null),s(ge,_o),s(ge,Nn),s(ge,To),s(ge,Hn),s(ge,Mo),s(ge,Rn),s(ge,bo),s(ge,Qn),s(ge,yo),s(ge,Ft),T(Tn,Ft,null),s(Ft,ko),s(Ft,Xn),s(Ft,wo),T(tn,Ft,null),h(l,ao,v),T(Mn,l,v),h(l,ro,v),h(l,_e,v),T(bn,_e,null),s(_e,vo),s(_e,En),s(_e,$o),s(_e,Sn),s(_e,Jo),s(_e,Ln),s(_e,jo),s(_e,Dn),s(_e,xo),s(_e,It),T(yn,It,null),s(It,Uo),s(It,An),s(It,Co),T(nn,It,null),lo=!0},p(l,v){const Qt={};v&2&&(Qt.$$scope={dirty:v,ctx:l}),L.$set(Qt);const mt={};v&2&&(mt.$$scope={dirty:v,ctx:l}),N.$set(mt);const ut={};v&2&&(ut.$$scope={dirty:v,ctx:l}),I.$set(ut);const K={};v&2&&(K.$$scope={dirty:v,ctx:l}),nt.$set(K);const Xt={};v&2&&(Xt.$$scope={dirty:v,ctx:l}),ot.$set(Xt);const ht={};v&2&&(ht.$$scope={dirty:v,ctx:l}),xe.$set(ht);const ft={};v&2&&(ft.$$scope={dirty:v,ctx:l}),Ae.$set(ft);const ee={};v&2&&(ee.$$scope={dirty:v,ctx:l}),be.$set(ee);const Et={};v&2&&(Et.$$scope={dirty:v,ctx:l}),Ue.$set(Et);const gt={};v&2&&(gt.$$scope={dirty:v,ctx:l}),Xe.$set(gt);const _t={};v&2&&(_t.$$scope={dirty:v,ctx:l}),dt.$set(_t);const ze={};v&2&&(ze.$$scope={dirty:v,ctx:l}),we.$set(ze);const St={};v&2&&(St.$$scope={dirty:v,ctx:l}),$.$set(St);const Fe={};v&2&&(Fe.$$scope={dirty:v,ctx:l}),Q.$set(Fe);const Lt={};v&2&&(Lt.$$scope={dirty:v,ctx:l}),Kt.$set(Lt);const Ie={};v&2&&(Ie.$$scope={dirty:v,ctx:l}),en.$set(Ie);const Dt={};v&2&&(Dt.$$scope={dirty:v,ctx:l}),tn.$set(Dt);const Do={};v&2&&(Do.$$scope={dirty:v,ctx:l}),nn.$set(Do)},i(l){lo||(M(t.$$.fragment,l),M(o.$$.fragment,l),M(L.$$.fragment,l),M(Z.$$.fragment,l),M(N.$$.fragment,l),M(G.$$.fragment,l),M(I.$$.fragment,l),M(nt.$$.fragment,l),M(De.$$.fragment,l),M(ot.$$.fragment,l),M(Je.$$.fragment,l),M(je.$$.fragment,l),M(xe.$$.fragment,l),M(Me.$$.fragment,l),M(Ae.$$.fragment,l),M(at.$$.fragment,l),M(be.$$.fragment,l),M(Ue.$$.fragment,l),M(ke.$$.fragment,l),M(Xe.$$.fragment,l),M(Ke.$$.fragment,l),M(it.$$.fragment,l),M(dt.$$.fragment,l),M(Ce.$$.fragment,l),M(we.$$.fragment,l),M(ve.$$.fragment,l),M($.$$.fragment,l),M(Q.$$.fragment,l),M(tt.$$.fragment,l),M(Kt.$$.fragment,l),M(un.$$.fragment,l),M(hn.$$.fragment,l),M(fn.$$.fragment,l),M(en.$$.fragment,l),M(gn.$$.fragment,l),M(_n.$$.fragment,l),M(Tn.$$.fragment,l),M(tn.$$.fragment,l),M(Mn.$$.fragment,l),M(bn.$$.fragment,l),M(yn.$$.fragment,l),M(nn.$$.fragment,l),lo=!0)},o(l){b(t.$$.fragment,l),b(o.$$.fragment,l),b(L.$$.fragment,l),b(Z.$$.fragment,l),b(N.$$.fragment,l),b(G.$$.fragment,l),b(I.$$.fragment,l),b(nt.$$.fragment,l),b(De.$$.fragment,l),b(ot.$$.fragment,l),b(Je.$$.fragment,l),b(je.$$.fragment,l),b(xe.$$.fragment,l),b(Me.$$.fragment,l),b(Ae.$$.fragment,l),b(at.$$.fragment,l),b(be.$$.fragment,l),b(Ue.$$.fragment,l),b(ke.$$.fragment,l),b(Xe.$$.fragment,l),b(Ke.$$.fragment,l),b(it.$$.fragment,l),b(dt.$$.fragment,l),b(Ce.$$.fragment,l),b(we.$$.fragment,l),b(ve.$$.fragment,l),b($.$$.fragment,l),b(Q.$$.fragment,l),b(tt.$$.fragment,l),b(Kt.$$.fragment,l),b(un.$$.fragment,l),b(hn.$$.fragment,l),b(fn.$$.fragment,l),b(en.$$.fragment,l),b(gn.$$.fragment,l),b(_n.$$.fragment,l),b(Tn.$$.fragment,l),b(tn.$$.fragment,l),b(Mn.$$.fragment,l),b(bn.$$.fragment,l),b(yn.$$.fragment,l),b(nn.$$.fragment,l),lo=!1},d(l){l&&(i(f),i(n),i(qt),i(Wt),i(x),i(Oe),i(se),i(W),i(to),i(no),i(fe),i(oo),i(so),i(ge),i(ao),i(ro),i(_e)),y(t,l),y(o),y(L),y(Z),y(N),y(G),y(I),y(nt),y(De),y(ot),y(Je,l),y(je),y(xe),y(Me),y(Ae),y(at),y(be),y(Ue),y(ke),y(Xe),y(Ke,l),y(it),y(dt),y(Ce),y(we),y(ve),y($),y(Q),y(tt),y(Kt),y(un,l),y(hn),y(fn),y(en),y(gn,l),y(_n),y(Tn),y(tn),y(Mn,l),y(bn),y(yn),y(nn)}}}function bs(J){let t,f;return t=new zo({props:{$$slots:{default:[Ms]},$$scope:{ctx:J}}}),{c(){g(t.$$.fragment)},l(n){_(t.$$.fragment,n)},m(n,o){T(t,n,o),f=!0},p(n,o){const m={};o&2&&(m.$$scope={dirty:o,ctx:n}),t.$set(m)},i(n){f||(M(t.$$.fragment,n),f=!0)},o(n){b(t.$$.fragment,n),f=!1},d(n){y(t,n)}}}function ys(J){let t,f="Examples:",n,o,m;return o=new de({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFRGTVQ1TW9kZWwlMkMlMjBBdXRvVG9rZW5pemVyJTBBJTBBbW9kZWwlMjAlM0QlMjBURk1UNU1vZGVsLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUlMkZtdDUtc21hbGwlMjIpJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlJTJGbXQ1LXNtYWxsJTIyKSUwQWFydGljbGUlMjAlM0QlMjAlMjJVTiUyME9mZml6aWVyJTIwc2FndCUyQyUyMGRhc3MlMjB3ZWl0ZXIlMjB2ZXJoYW5kZWx0JTIwd2VyZGVuJTIwbXVzcyUyMGluJTIwU3lyaWVuLiUyMiUwQXN1bW1hcnklMjAlM0QlMjAlMjJXZWl0ZXIlMjBWZXJoYW5kbHVuZyUyMGluJTIwU3lyaWVuLiUyMiUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplcihhcnRpY2xlJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiklMEFsYWJlbHMlMjAlM0QlMjB0b2tlbml6ZXIodGV4dF90YXJnZXQlM0RzdW1tYXJ5JTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJ0ZiUyMiklMEElMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoaW5wdXRfaWRzJTNEaW5wdXRzJTVCJTIyaW5wdXRfaWRzJTIyJTVEJTJDJTIwZGVjb2Rlcl9pbnB1dF9pZHMlM0RsYWJlbHMlNUIlMjJpbnB1dF9pZHMlMjIlNUQpJTBBaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFMT5Model, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMT5Model.from_pretrained(<span class="hljs-string">&quot;google/mt5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mt5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>article = <span class="hljs-string">&quot;UN Offizier sagt, dass weiter verhandelt werden muss in Syrien.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary = <span class="hljs-string">&quot;Weiter Verhandlung in Syrien.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(article, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(text_target=summary, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], decoder_input_ids=labels[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){t=c("p"),t.textContent=f,n=a(),g(o.$$.fragment)},l(e){t=p(e,"P",{"data-svelte-h":!0}),k(t)!=="svelte-kvfsh7"&&(t.textContent=f),n=r(e),_(o.$$.fragment,e)},m(e,w){h(e,t,w),h(e,n,w),T(o,e,w),m=!0},p:A,i(e){m||(M(o.$$.fragment,e),m=!0)},o(e){b(o.$$.fragment,e),m=!1},d(e){e&&(i(t),i(n)),y(o,e)}}}function ks(J){let t,f="Examples:",n,o,m;return o=new de({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFRGTVQ1Rm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uJTJDJTIwQXV0b1Rva2VuaXplciUwQSUwQW1vZGVsJTIwJTNEJTIwVEZNVDVGb3JDb25kaXRpb25hbEdlbmVyYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZSUyRm10NS1zbWFsbCUyMiklMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUlMkZtdDUtc21hbGwlMjIpJTBBYXJ0aWNsZSUyMCUzRCUyMCUyMlVOJTIwT2ZmaXppZXIlMjBzYWd0JTJDJTIwZGFzcyUyMHdlaXRlciUyMHZlcmhhbmRlbHQlMjB3ZXJkZW4lMjBtdXNzJTIwaW4lMjBTeXJpZW4uJTIyJTBBc3VtbWFyeSUyMCUzRCUyMCUyMldlaXRlciUyMFZlcmhhbmRsdW5nJTIwaW4lMjBTeXJpZW4uJTIyJTBBaW5wdXRzJTIwJTNEJTIwdG9rZW5pemVyKGFydGljbGUlMkMlMjB0ZXh0X3RhcmdldCUzRHN1bW1hcnklMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyKSUwQSUwQW91dHB1dHMlMjAlM0QlMjBtb2RlbCgqKmlucHV0cyklMEFsb3NzJTIwJTNEJTIwb3V0cHV0cy5sb3Nz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFMT5ForConditionalGeneration, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/mt5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mt5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>article = <span class="hljs-string">&quot;UN Offizier sagt, dass weiter verhandelt werden muss in Syrien.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary = <span class="hljs-string">&quot;Weiter Verhandlung in Syrien.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(article, text_target=summary, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`,wrap:!1}}),{c(){t=c("p"),t.textContent=f,n=a(),g(o.$$.fragment)},l(e){t=p(e,"P",{"data-svelte-h":!0}),k(t)!=="svelte-kvfsh7"&&(t.textContent=f),n=r(e),_(o.$$.fragment,e)},m(e,w){h(e,t,w),h(e,n,w),T(o,e,w),m=!0},p:A,i(e){m||(M(o.$$.fragment,e),m=!0)},o(e){b(o.$$.fragment,e),m=!1},d(e){e&&(i(t),i(n)),y(o,e)}}}function ws(J){let t,f="Examples:",n,o,m;return o=new de({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFRGTVQ1RW5jb2Rlck1vZGVsJTJDJTIwQXV0b1Rva2VuaXplciUwQSUwQW1vZGVsJTIwJTNEJTIwVEZNVDVFbmNvZGVyTW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZSUyRm10NS1zbWFsbCUyMiklMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUlMkZtdDUtc21hbGwlMjIpJTBBYXJ0aWNsZSUyMCUzRCUyMCUyMlVOJTIwT2ZmaXppZXIlMjBzYWd0JTJDJTIwZGFzcyUyMHdlaXRlciUyMHZlcmhhbmRlbHQlMjB3ZXJkZW4lMjBtdXNzJTIwaW4lMjBTeXJpZW4uJTIyJTBBaW5wdXRfaWRzJTIwJTNEJTIwdG9rZW5pemVyKGFydGljbGUlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnRmJTIyKS5pbnB1dF9pZHMlMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoaW5wdXRfaWRzKSUwQWhpZGRlbl9zdGF0ZSUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFMT5EncoderModel, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMT5EncoderModel.from_pretrained(<span class="hljs-string">&quot;google/mt5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mt5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>article = <span class="hljs-string">&quot;UN Offizier sagt, dass weiter verhandelt werden muss in Syrien.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(article, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>).input_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>hidden_state = outputs.last_hidden_state`,wrap:!1}}),{c(){t=c("p"),t.textContent=f,n=a(),g(o.$$.fragment)},l(e){t=p(e,"P",{"data-svelte-h":!0}),k(t)!=="svelte-kvfsh7"&&(t.textContent=f),n=r(e),_(o.$$.fragment,e)},m(e,w){h(e,t,w),h(e,n,w),T(o,e,w),m=!0},p:A,i(e){m||(M(o.$$.fragment,e),m=!0)},o(e){b(o.$$.fragment,e),m=!1},d(e){e&&(i(t),i(n)),y(o,e)}}}function vs(J){let t,f,n,o,m,e,w=`This class overrides <a href="/docs/transformers/main/en/model_doc/t5#transformers.TFT5Model">TFT5Model</a>. Please check the superclass for the appropriate documentation alongside usage
examples.`,Ze,V,te,X,E,B,S,Y,ae,qe=`This class overrides <a href="/docs/transformers/main/en/model_doc/t5#transformers.TFT5ForConditionalGeneration">TFT5ForConditionalGeneration</a>. Please check the superclass for the appropriate
documentation alongside usage examples.`,L,D,R,Z,Te,z,H,We,N,ce=`This class overrides <a href="/docs/transformers/main/en/model_doc/t5#transformers.TFT5EncoderModel">TFT5EncoderModel</a>. Please check the superclass for the appropriate documentation alongside
usage examples.`,P,G,O;return t=new ie({props:{title:"TFMT5Model",local:"transformers.TFMT5Model",headingTag:"h2"}}),o=new F({props:{name:"class transformers.TFMT5Model",anchor:"transformers.TFMT5Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mt5/modeling_tf_mt5.py#L27"}}),V=new le({props:{anchor:"transformers.TFMT5Model.example",$$slots:{default:[ys]},$$scope:{ctx:J}}}),X=new ie({props:{title:"TFMT5ForConditionalGeneration",local:"transformers.TFMT5ForConditionalGeneration",headingTag:"h2"}}),S=new F({props:{name:"class transformers.TFMT5ForConditionalGeneration",anchor:"transformers.TFMT5ForConditionalGeneration",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mt5/modeling_tf_mt5.py#L52"}}),D=new le({props:{anchor:"transformers.TFMT5ForConditionalGeneration.example",$$slots:{default:[ks]},$$scope:{ctx:J}}}),Z=new ie({props:{title:"TFMT5EncoderModel",local:"transformers.TFMT5EncoderModel",headingTag:"h2"}}),H=new F({props:{name:"class transformers.TFMT5EncoderModel",anchor:"transformers.TFMT5EncoderModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mt5/modeling_tf_mt5.py#L76"}}),G=new le({props:{anchor:"transformers.TFMT5EncoderModel.example",$$slots:{default:[ws]},$$scope:{ctx:J}}}),{c(){g(t.$$.fragment),f=a(),n=c("div"),g(o.$$.fragment),m=a(),e=c("p"),e.innerHTML=w,Ze=a(),g(V.$$.fragment),te=a(),g(X.$$.fragment),E=a(),B=c("div"),g(S.$$.fragment),Y=a(),ae=c("p"),ae.innerHTML=qe,L=a(),g(D.$$.fragment),R=a(),g(Z.$$.fragment),Te=a(),z=c("div"),g(H.$$.fragment),We=a(),N=c("p"),N.innerHTML=ce,P=a(),g(G.$$.fragment),this.h()},l(u){_(t.$$.fragment,u),f=r(u),n=p(u,"DIV",{class:!0});var j=C(n);_(o.$$.fragment,j),m=r(j),e=p(j,"P",{"data-svelte-h":!0}),k(e)!=="svelte-101uvgs"&&(e.innerHTML=w),Ze=r(j),_(V.$$.fragment,j),j.forEach(i),te=r(u),_(X.$$.fragment,u),E=r(u),B=p(u,"DIV",{class:!0});var q=C(B);_(S.$$.fragment,q),Y=r(q),ae=p(q,"P",{"data-svelte-h":!0}),k(ae)!=="svelte-19n28ds"&&(ae.innerHTML=qe),L=r(q),_(D.$$.fragment,q),q.forEach(i),R=r(u),_(Z.$$.fragment,u),Te=r(u),z=p(u,"DIV",{class:!0});var I=C(z);_(H.$$.fragment,I),We=r(I),N=p(I,"P",{"data-svelte-h":!0}),k(N)!=="svelte-14or754"&&(N.innerHTML=ce),P=r(I),_(G.$$.fragment,I),I.forEach(i),this.h()},h(){U(n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(u,j){T(t,u,j),h(u,f,j),h(u,n,j),T(o,n,null),s(n,m),s(n,e),s(n,Ze),T(V,n,null),h(u,te,j),T(X,u,j),h(u,E,j),h(u,B,j),T(S,B,null),s(B,Y),s(B,ae),s(B,L),T(D,B,null),h(u,R,j),T(Z,u,j),h(u,Te,j),h(u,z,j),T(H,z,null),s(z,We),s(z,N),s(z,P),T(G,z,null),O=!0},p(u,j){const q={};j&2&&(q.$$scope={dirty:j,ctx:u}),V.$set(q);const I={};j&2&&(I.$$scope={dirty:j,ctx:u}),D.$set(I);const pe={};j&2&&(pe.$$scope={dirty:j,ctx:u}),G.$set(pe)},i(u){O||(M(t.$$.fragment,u),M(o.$$.fragment,u),M(V.$$.fragment,u),M(X.$$.fragment,u),M(S.$$.fragment,u),M(D.$$.fragment,u),M(Z.$$.fragment,u),M(H.$$.fragment,u),M(G.$$.fragment,u),O=!0)},o(u){b(t.$$.fragment,u),b(o.$$.fragment,u),b(V.$$.fragment,u),b(X.$$.fragment,u),b(S.$$.fragment,u),b(D.$$.fragment,u),b(Z.$$.fragment,u),b(H.$$.fragment,u),b(G.$$.fragment,u),O=!1},d(u){u&&(i(f),i(n),i(te),i(E),i(B),i(R),i(Te),i(z)),y(t,u),y(o),y(V),y(X,u),y(S),y(D),y(Z,u),y(H),y(G)}}}function $s(J){let t,f;return t=new zo({props:{$$slots:{default:[vs]},$$scope:{ctx:J}}}),{c(){g(t.$$.fragment)},l(n){_(t.$$.fragment,n)},m(n,o){T(t,n,o),f=!0},p(n,o){const m={};o&2&&(m.$$scope={dirty:o,ctx:n}),t.$set(m)},i(n){f||(M(t.$$.fragment,n),f=!0)},o(n){b(t.$$.fragment,n),f=!1},d(n){y(t,n)}}}function Js(J){let t,f="Examples:",n,o,m;return o=new de({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEZsYXhNVDVNb2RlbCUyQyUyMEF1dG9Ub2tlbml6ZXIlMEElMEFtb2RlbCUyMCUzRCUyMEZsYXhNVDVNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlJTJGbXQ1LXNtYWxsJTIyKSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZSUyRm10NS1zbWFsbCUyMiklMEElMEFhcnRpY2xlJTIwJTNEJTIwJTIyVU4lMjBPZmZpemllciUyMHNhZ3QlMkMlMjBkYXNzJTIwd2VpdGVyJTIwdmVyaGFuZGVsdCUyMHdlcmRlbiUyMG11c3MlMjBpbiUyMFN5cmllbi4lMjIlMEFzdW1tYXJ5JTIwJTNEJTIwJTIyV2VpdGVyJTIwVmVyaGFuZGx1bmclMjBpbiUyMFN5cmllbi4lMjIlMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoYXJ0aWNsZSUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIybnAlMjIpJTBBJTBBZGVjb2Rlcl9pbnB1dF9pZHMlMjAlM0QlMjB0b2tlbml6ZXIodGV4dF90YXJnZXQlM0RzdW1tYXJ5JTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJucCUyMikuaW5wdXRfaWRzJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKGlucHV0X2lkcyUzRGlucHV0cyU1QiUyMmlucHV0X2lkcyUyMiU1RCUyQyUyMGRlY29kZXJfaW5wdXRfaWRzJTNEZGVjb2Rlcl9pbnB1dF9pZHMpJTBBaGlkZGVuX3N0YXRlcyUyMCUzRCUyMG91dHB1dHMubGFzdF9oaWRkZW5fc3RhdGU=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaxMT5Model, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMT5Model.from_pretrained(<span class="hljs-string">&quot;google/mt5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mt5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>article = <span class="hljs-string">&quot;UN Offizier sagt, dass weiter verhandelt werden muss in Syrien.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary = <span class="hljs-string">&quot;Weiter Verhandlung in Syrien.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(article, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(text_target=summary, return_tensors=<span class="hljs-string">&quot;np&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>], decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){t=c("p"),t.textContent=f,n=a(),g(o.$$.fragment)},l(e){t=p(e,"P",{"data-svelte-h":!0}),k(t)!=="svelte-kvfsh7"&&(t.textContent=f),n=r(e),_(o.$$.fragment,e)},m(e,w){h(e,t,w),h(e,n,w),T(o,e,w),m=!0},p:A,i(e){m||(M(o.$$.fragment,e),m=!0)},o(e){b(o.$$.fragment,e),m=!1},d(e){e&&(i(t),i(n)),y(o,e)}}}function js(J){let t,f="Examples:",n,o,m;return o=new de({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEZsYXhNVDVGb3JDb25kaXRpb25hbEdlbmVyYXRpb24lMkMlMjBBdXRvVG9rZW5pemVyJTBBJTBBbW9kZWwlMjAlM0QlMjBGbGF4TVQ1Rm9yQ29uZGl0aW9uYWxHZW5lcmF0aW9uLmZyb21fcHJldHJhaW5lZCglMjJnb29nbGUlMkZtdDUtc21hbGwlMjIpJTBBdG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlJTJGbXQ1LXNtYWxsJTIyKSUwQSUwQWFydGljbGUlMjAlM0QlMjAlMjJVTiUyME9mZml6aWVyJTIwc2FndCUyQyUyMGRhc3MlMjB3ZWl0ZXIlMjB2ZXJoYW5kZWx0JTIwd2VyZGVuJTIwbXVzcyUyMGluJTIwU3lyaWVuLiUyMiUwQXN1bW1hcnklMjAlM0QlMjAlMjJXZWl0ZXIlMjBWZXJoYW5kbHVuZyUyMGluJTIwU3lyaWVuLiUyMiUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplcihhcnRpY2xlJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJucCUyMiklMEElMEFkZWNvZGVyX2lucHV0X2lkcyUyMCUzRCUyMHRva2VuaXplcih0ZXh0X3RhcmdldCUzRHN1bW1hcnklMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMm5wJTIyKS5pbnB1dF9pZHMlMEElMEFvdXRwdXRzJTIwJTNEJTIwbW9kZWwoKippbnB1dHMlMkMlMjBkZWNvZGVyX2lucHV0X2lkcyUzRGRlY29kZXJfaW5wdXRfaWRzKSUwQWxvZ2l0cyUyMCUzRCUyMG91dHB1dHMubG9naXRz",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaxMT5ForConditionalGeneration, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxMT5ForConditionalGeneration.from_pretrained(<span class="hljs-string">&quot;google/mt5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mt5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>article = <span class="hljs-string">&quot;UN Offizier sagt, dass weiter verhandelt werden muss in Syrien.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary = <span class="hljs-string">&quot;Weiter Verhandlung in Syrien.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(article, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(text_target=summary, return_tensors=<span class="hljs-string">&quot;np&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, decoder_input_ids=decoder_input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`,wrap:!1}}),{c(){t=c("p"),t.textContent=f,n=a(),g(o.$$.fragment)},l(e){t=p(e,"P",{"data-svelte-h":!0}),k(t)!=="svelte-kvfsh7"&&(t.textContent=f),n=r(e),_(o.$$.fragment,e)},m(e,w){h(e,t,w),h(e,n,w),T(o,e,w),m=!0},p:A,i(e){m||(M(o.$$.fragment,e),m=!0)},o(e){b(o.$$.fragment,e),m=!1},d(e){e&&(i(t),i(n)),y(o,e)}}}function xs(J){let t,f="Examples:",n,o,m;return o=new de({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEZsYXhUNUVuY29kZXJNb2RlbCUyQyUyMEF1dG9Ub2tlbml6ZXIlMEElMEFtb2RlbCUyMCUzRCUyMEZsYXhUNUVuY29kZXJNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyZ29vZ2xlJTJGbXQ1LXNtYWxsJTIyKSUwQXRva2VuaXplciUyMCUzRCUyMEF1dG9Ub2tlbml6ZXIuZnJvbV9wcmV0cmFpbmVkKCUyMmdvb2dsZSUyRm10NS1zbWFsbCUyMiklMEElMEFhcnRpY2xlJTIwJTNEJTIwJTIyVU4lMjBPZmZpemllciUyMHNhZ3QlMkMlMjBkYXNzJTIwd2VpdGVyJTIwdmVyaGFuZGVsdCUyMHdlcmRlbiUyMG11c3MlMjBpbiUyMFN5cmllbi4lMjIlMEFzdW1tYXJ5JTIwJTNEJTIwJTIyV2VpdGVyJTIwVmVyaGFuZGx1bmclMjBpbiUyMFN5cmllbi4lMjIlMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIoYXJ0aWNsZSUyQyUyMHJldHVybl90ZW5zb3JzJTNEJTIybnAlMjIpJTBBJTBBZGVjb2Rlcl9pbnB1dF9pZHMlMjAlM0QlMjB0b2tlbml6ZXIodGV4dF90YXJnZXQlM0RzdW1tYXJ5JTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJucCUyMikuaW5wdXRfaWRzJTBBJTBBb3V0cHV0cyUyMCUzRCUyMG1vZGVsKGlucHV0X2lkcyUzRGlucHV0cyU1QiUyMmlucHV0X2lkcyUyMiU1RCklMEFoaWRkZW5fc3RhdGVzJTIwJTNEJTIwb3V0cHV0cy5sYXN0X2hpZGRlbl9zdGF0ZQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaxT5EncoderModel, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxT5EncoderModel.from_pretrained(<span class="hljs-string">&quot;google/mt5-small&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mt5-small&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>article = <span class="hljs-string">&quot;UN Offizier sagt, dass weiter verhandelt werden muss in Syrien.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>summary = <span class="hljs-string">&quot;Weiter Verhandlung in Syrien.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(article, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_input_ids = tokenizer(text_target=summary, return_tensors=<span class="hljs-string">&quot;np&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>hidden_states = outputs.last_hidden_state`,wrap:!1}}),{c(){t=c("p"),t.textContent=f,n=a(),g(o.$$.fragment)},l(e){t=p(e,"P",{"data-svelte-h":!0}),k(t)!=="svelte-kvfsh7"&&(t.textContent=f),n=r(e),_(o.$$.fragment,e)},m(e,w){h(e,t,w),h(e,n,w),T(o,e,w),m=!0},p:A,i(e){m||(M(o.$$.fragment,e),m=!0)},o(e){b(o.$$.fragment,e),m=!1},d(e){e&&(i(t),i(n)),y(o,e)}}}function Us(J){let t,f,n,o,m,e,w=`This class overrides <a href="/docs/transformers/main/en/model_doc/t5#transformers.FlaxT5Model">FlaxT5Model</a>. Please check the superclass for the appropriate documentation alongside usage
examples.`,Ze,V,te,X,E,B,S,Y,ae,qe=`This class overrides <a href="/docs/transformers/main/en/model_doc/t5#transformers.FlaxT5ForConditionalGeneration">FlaxT5ForConditionalGeneration</a>. Please check the superclass for the appropriate
documentation alongside usage examples.`,L,D,R,Z,Te,z,H,We,N,ce=`This class overrides <a href="/docs/transformers/main/en/model_doc/t5#transformers.FlaxT5EncoderModel">FlaxT5EncoderModel</a>. Please check the superclass for the appropriate documentation
alongside usage examples.`,P,G,O;return t=new ie({props:{title:"FlaxMT5Model",local:"transformers.FlaxMT5Model",headingTag:"h2"}}),o=new F({props:{name:"class transformers.FlaxMT5Model",anchor:"transformers.FlaxMT5Model",parameters:[{name:"config",val:": T5Config"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mt5/modeling_flax_mt5.py#L42"}}),V=new le({props:{anchor:"transformers.FlaxMT5Model.example",$$slots:{default:[Js]},$$scope:{ctx:J}}}),X=new ie({props:{title:"FlaxMT5ForConditionalGeneration",local:"transformers.FlaxMT5ForConditionalGeneration",headingTag:"h2"}}),S=new F({props:{name:"class transformers.FlaxMT5ForConditionalGeneration",anchor:"transformers.FlaxMT5ForConditionalGeneration",parameters:[{name:"config",val:": T5Config"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mt5/modeling_flax_mt5.py#L96"}}),D=new le({props:{anchor:"transformers.FlaxMT5ForConditionalGeneration.example",$$slots:{default:[js]},$$scope:{ctx:J}}}),Z=new ie({props:{title:"FlaxMT5EncoderModel",local:"transformers.FlaxMT5EncoderModel",headingTag:"h2"}}),H=new F({props:{name:"class transformers.FlaxMT5EncoderModel",anchor:"transformers.FlaxMT5EncoderModel",parameters:[{name:"config",val:": T5Config"},{name:"input_shape",val:": Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mt5/modeling_flax_mt5.py#L69"}}),G=new le({props:{anchor:"transformers.FlaxMT5EncoderModel.example",$$slots:{default:[xs]},$$scope:{ctx:J}}}),{c(){g(t.$$.fragment),f=a(),n=c("div"),g(o.$$.fragment),m=a(),e=c("p"),e.innerHTML=w,Ze=a(),g(V.$$.fragment),te=a(),g(X.$$.fragment),E=a(),B=c("div"),g(S.$$.fragment),Y=a(),ae=c("p"),ae.innerHTML=qe,L=a(),g(D.$$.fragment),R=a(),g(Z.$$.fragment),Te=a(),z=c("div"),g(H.$$.fragment),We=a(),N=c("p"),N.innerHTML=ce,P=a(),g(G.$$.fragment),this.h()},l(u){_(t.$$.fragment,u),f=r(u),n=p(u,"DIV",{class:!0});var j=C(n);_(o.$$.fragment,j),m=r(j),e=p(j,"P",{"data-svelte-h":!0}),k(e)!=="svelte-qhhjac"&&(e.innerHTML=w),Ze=r(j),_(V.$$.fragment,j),j.forEach(i),te=r(u),_(X.$$.fragment,u),E=r(u),B=p(u,"DIV",{class:!0});var q=C(B);_(S.$$.fragment,q),Y=r(q),ae=p(q,"P",{"data-svelte-h":!0}),k(ae)!=="svelte-hq6xku"&&(ae.innerHTML=qe),L=r(q),_(D.$$.fragment,q),q.forEach(i),R=r(u),_(Z.$$.fragment,u),Te=r(u),z=p(u,"DIV",{class:!0});var I=C(z);_(H.$$.fragment,I),We=r(I),N=p(I,"P",{"data-svelte-h":!0}),k(N)!=="svelte-16rg8iq"&&(N.innerHTML=ce),P=r(I),_(G.$$.fragment,I),I.forEach(i),this.h()},h(){U(n,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(u,j){T(t,u,j),h(u,f,j),h(u,n,j),T(o,n,null),s(n,m),s(n,e),s(n,Ze),T(V,n,null),h(u,te,j),T(X,u,j),h(u,E,j),h(u,B,j),T(S,B,null),s(B,Y),s(B,ae),s(B,L),T(D,B,null),h(u,R,j),T(Z,u,j),h(u,Te,j),h(u,z,j),T(H,z,null),s(z,We),s(z,N),s(z,P),T(G,z,null),O=!0},p(u,j){const q={};j&2&&(q.$$scope={dirty:j,ctx:u}),V.$set(q);const I={};j&2&&(I.$$scope={dirty:j,ctx:u}),D.$set(I);const pe={};j&2&&(pe.$$scope={dirty:j,ctx:u}),G.$set(pe)},i(u){O||(M(t.$$.fragment,u),M(o.$$.fragment,u),M(V.$$.fragment,u),M(X.$$.fragment,u),M(S.$$.fragment,u),M(D.$$.fragment,u),M(Z.$$.fragment,u),M(H.$$.fragment,u),M(G.$$.fragment,u),O=!0)},o(u){b(t.$$.fragment,u),b(o.$$.fragment,u),b(V.$$.fragment,u),b(X.$$.fragment,u),b(S.$$.fragment,u),b(D.$$.fragment,u),b(Z.$$.fragment,u),b(H.$$.fragment,u),b(G.$$.fragment,u),O=!1},d(u){u&&(i(f),i(n),i(te),i(E),i(B),i(R),i(Te),i(z)),y(t,u),y(o),y(V),y(X,u),y(S),y(D),y(Z,u),y(H),y(G)}}}function Cs(J){let t,f;return t=new zo({props:{$$slots:{default:[Us]},$$scope:{ctx:J}}}),{c(){g(t.$$.fragment)},l(n){_(t.$$.fragment,n)},m(n,o){T(t,n,o),f=!0},p(n,o){const m={};o&2&&(m.$$scope={dirty:o,ctx:n}),t.$set(m)},i(n){f||(M(t.$$.fragment,n),f=!0)},o(n){b(t.$$.fragment,n),f=!1},d(n){y(t,n)}}}function zs(J){let t,f,n,o,m,e,w,Ze='<a href="https://huggingface.co/models?filter=mt5"><img alt="Models" src="https://img.shields.io/badge/All_model_pages-mt5-blueviolet"/></a> <a href="https://huggingface.co/spaces/docs-demos/mt5-small-finetuned-arxiv-cs-finetuned-arxiv-cs-full"><img alt="Spaces" src="https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-Spaces-blue"/></a>',V,te,X,E,B=`The mT5 model was presented in <a href="https://arxiv.org/abs/2010.11934" rel="nofollow">mT5: A massively multilingual pre-trained text-to-text transformer</a> by Linting Xue, Noah Constant, Adam Roberts, Mihir Kale, Rami Al-Rfou, Aditya
Siddhant, Aditya Barua, Colin Raffel.`,S,Y,ae="The abstract from the paper is the following:",qe,L,D=`<em>The recent “Text-to-Text Transfer Transformer” (T5) leveraged a unified text-to-text format and scale to attain
state-of-the-art results on a wide variety of English-language NLP tasks. In this paper, we introduce mT5, a
multilingual variant of T5 that was pre-trained on a new Common Crawl-based dataset covering 101 languages. We detail
the design and modified training of mT5 and demonstrate its state-of-the-art performance on many multilingual
benchmarks. We also describe a simple technique to prevent “accidental translation” in the zero-shot setting, where a
generative model chooses to (partially) translate its prediction into the wrong language. All of the code and model
checkpoints used in this work are publicly available.</em>`,R,Z,Te=`Note: mT5 was only pre-trained on <a href="https://huggingface.co/datasets/mc4" rel="nofollow">mC4</a> excluding any supervised training.
Therefore, this model has to be fine-tuned before it is usable on a downstream task, unlike the original T5 model.
Since mT5 was pre-trained unsupervisedly, there’s no real advantage to using a task prefix during single-task
fine-tuning. If you are doing multi-task fine-tuning, you should use a prefix.`,z,H,We="Google has released the following variants:",N,ce,P='<li><p><a href="https://huggingface.co/google/mt5-small" rel="nofollow">google/mt5-small</a></p></li> <li><p><a href="https://huggingface.co/google/mt5-base" rel="nofollow">google/mt5-base</a></p></li> <li><p><a href="https://huggingface.co/google/mt5-large" rel="nofollow">google/mt5-large</a></p></li> <li><p><a href="https://huggingface.co/google/mt5-xl" rel="nofollow">google/mt5-xl</a></p></li> <li><p><a href="https://huggingface.co/google/mt5-xxl" rel="nofollow">google/mt5-xxl</a>.</p></li>',G,O,u=`This model was contributed by <a href="https://huggingface.co/patrickvonplaten" rel="nofollow">patrickvonplaten</a>. The original code can be
found <a href="https://github.com/google-research/multilingual-t5" rel="nofollow">here</a>.`,j,q,I,pe,nt='<li><a href="../tasks/translation">Translation task guide</a></li> <li><a href="../tasks/summarization">Summarization task guide</a></li>',At,ne,De,$e,Ge,kn,Tt,Zt=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/mt5#transformers.MT5Model">MT5Model</a> or a <a href="/docs/transformers/main/en/model_doc/mt5#transformers.TFMT5Model">TFMT5Model</a>. It is used to
instantiate a mT5 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the mT5
<a href="https://huggingface.co/google/mt5-small" rel="nofollow">google/mt5-small</a> architecture.`,wn,Mt,ot=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,qt,Je,Wt,x,je,on,He,Yn='Construct a T5 tokenizer. Based on <a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a>.',sn,Re,On=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`,an,me,bt,rn,Qe,Kn=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`,ln,xe,vn="<li>single sequence: <code>X &lt;/s&gt;</code></li> <li>pair of sequences: <code>A &lt;/s&gt; B &lt;/s&gt;</code></li>",Ve,Me,st,yt,Gt,$n="Converts a sequence of tokens (string) in a single string.",Ae,Pe,oe,at,kt,Vt=`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`,Jn,Ye,be,dn,Ue,jn=`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer <code>prepare_for_model</code> method.`,ye,ke,rt,wt,Bt,xn=`Converts a string to a list of tokens. If <code>self.legacy</code> is set to <code>False</code>, a prefix token is added unless the
first token is special.`,lt,vt,Un='See <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5Tokenizer">T5Tokenizer</a> for all details.',Xe,Oe,Ke,se,W,it,$t,Nt=`Construct a “fast” T5 tokenizer (backed by HuggingFace’s <em>tokenizers</em> library). Based on
<a href="https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models" rel="nofollow">Unigram</a>.`,Cn,Jt,Ht=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a> which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`,zn,Be,Ne,Fn,jt,Rt=`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A sequence has the following format:`,In,xt,dt="<li>single sequence: <code>X &lt;/s&gt;</code></li> <li>pair of sequences: <code>A &lt;/s&gt; B &lt;/s&gt;</code></li>",cn,re,Ce,pn,Ee,eo=`Create a mask from the two sequences passed to be used in a sequence-pair classification task. T5 does not make
use of token type ids, therefore a list of zeros is returned.`,Pt,we,Zn='See <a href="/docs/transformers/main/en/model_doc/mt5#transformers.T5TokenizerFast">T5TokenizerFast</a> for all details.',ue,ve,Yt,et,mn;return m=new ie({props:{title:"mT5",local:"mt5",headingTag:"h1"}}),te=new ie({props:{title:"Overview",local:"overview",headingTag:"h2"}}),q=new ie({props:{title:"Resources",local:"resources",headingTag:"h2"}}),ne=new ie({props:{title:"MT5Config",local:"transformers.MT5Config",headingTag:"h2"}}),Ge=new F({props:{name:"class transformers.MT5Config",anchor:"transformers.MT5Config",parameters:[{name:"vocab_size",val:" = 250112"},{name:"d_model",val:" = 512"},{name:"d_kv",val:" = 64"},{name:"d_ff",val:" = 1024"},{name:"num_layers",val:" = 8"},{name:"num_decoder_layers",val:" = None"},{name:"num_heads",val:" = 6"},{name:"relative_attention_num_buckets",val:" = 32"},{name:"relative_attention_max_distance",val:" = 128"},{name:"dropout_rate",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-06"},{name:"initializer_factor",val:" = 1.0"},{name:"feed_forward_proj",val:" = 'gated-gelu'"},{name:"is_encoder_decoder",val:" = True"},{name:"use_cache",val:" = True"},{name:"tokenizer_class",val:" = 'T5Tokenizer'"},{name:"tie_word_embeddings",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"eos_token_id",val:" = 1"},{name:"decoder_start_token_id",val:" = 0"},{name:"classifier_dropout",val:" = 0.0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MT5Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 250112) &#x2014;
Vocabulary size of the T5 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/t5#transformers.T5Model">T5Model</a> or <a href="/docs/transformers/main/en/model_doc/t5#transformers.TFT5Model">TFT5Model</a>.`,name:"vocab_size"},{anchor:"transformers.MT5Config.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Size of the encoder layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.MT5Config.d_kv",description:`<strong>d_kv</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Size of the key, query, value projections per attention head. In the conventional context, it is typically expected that <code>d_kv</code> has to be equal to <code>d_model // num_heads</code>.
But in the architecture of mt5-small, <code>d_kv</code> is not equal to <code>d_model //num_heads</code>. The <code>inner_dim</code> of the projection layer will be defined as <code>num_heads * d_kv</code>.`,name:"d_kv"},{anchor:"transformers.MT5Config.d_ff",description:`<strong>d_ff</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Size of the intermediate feed forward layer in each <code>T5Block</code>.`,name:"d_ff"},{anchor:"transformers.MT5Config.num_layers",description:`<strong>num_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 8) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_layers"},{anchor:"transformers.MT5Config.num_decoder_layers",description:`<strong>num_decoder_layers</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Number of hidden layers in the Transformer decoder. Will use the same value as <code>num_layers</code> if not set.`,name:"num_decoder_layers"},{anchor:"transformers.MT5Config.num_heads",description:`<strong>num_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_heads"},{anchor:"transformers.MT5Config.relative_attention_num_buckets",description:`<strong>relative_attention_num_buckets</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The number of buckets to use for each attention layer.`,name:"relative_attention_num_buckets"},{anchor:"transformers.MT5Config.relative_attention_max_distance",description:`<strong>relative_attention_max_distance</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
The maximum distance of the longer sequences for the bucket separation.`,name:"relative_attention_max_distance"},{anchor:"transformers.MT5Config.dropout_rate",description:`<strong>dropout_rate</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The ratio for all dropout layers.`,name:"dropout_rate"},{anchor:"transformers.MT5Config.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for classifier.`,name:"classifier_dropout"},{anchor:"transformers.MT5Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-6) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.MT5Config.initializer_factor",description:`<strong>initializer_factor</strong> (<code>float</code>, <em>optional</em>, defaults to 1) &#x2014;
A factor for initializing all weight matrices (should be kept to 1, used internally for initialization
testing).`,name:"initializer_factor"},{anchor:"transformers.MT5Config.feed_forward_proj",description:`<strong>feed_forward_proj</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;gated-gelu&quot;</code>) &#x2014;
Type of feed forward layer to be used. Should be one of <code>&quot;relu&quot;</code> or <code>&quot;gated-gelu&quot;</code>.`,name:"feed_forward_proj"},{anchor:"transformers.MT5Config.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/mt5/configuration_mt5.py#L26"}}),Je=new ie({props:{title:"MT5Tokenizer",local:"transformers.T5Tokenizer",headingTag:"h2"}}),je=new F({props:{name:"class transformers.T5Tokenizer",anchor:"transformers.T5Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"sp_model_kwargs",val:": Optional = None"},{name:"legacy",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.T5Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.T5Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.T5Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.T5Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.T5Tokenizer.extra_ids",description:`<strong>extra_ids</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
Add a number of extra ids added to the vocabulary for use as sentinels. These tokens are
accessible as &#x201C;<extra<em>id{%d}&gt;&#x201D; where &#x201D;{%d}&#x201D; is a number between 0 and extra_ids-1. These tokens can be
retrieved by calling get_sentinel_tokens method and token ids can be by calling get_sentinel_token_ids
method
additional_special_tokens (<code>List[str]</code>, <em>optional</em>):
Additional special tokens used by the tokenizer.</extra<em>`,name:"extra_ids"},{anchor:"transformers.T5Tokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.T5Tokenizer.legacy",description:`<strong>legacy</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not the <code>legacy</code> behaviour of the tokenizer should be used. Legacy is before the merge of #24622
and #25224 which includes fixes to properly handle tokens that appear after special tokens. A simple
example:</p>
<ul>
<li><code>legacy=True</code>:</li>
</ul>`,name:"legacy"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L63"}}),bt=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L333",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),st=new F({props:{name:"convert_tokens_to_string",anchor:"transformers.T5Tokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L421"}}),oe=new F({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L311",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of zeros.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),be=new F({props:{name:"get_special_tokens_mask",anchor:"transformers.T5Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.T5Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L264",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),rt=new F({props:{name:"tokenize",anchor:"transformers.T5Tokenizer.tokenize",parameters:[{name:"text",val:": TextInput"},{name:"add_special_tokens",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/tokenization_t5.py#L375"}}),Oe=new ie({props:{title:"MT5TokenizerFast",local:"transformers.T5TokenizerFast",headingTag:"h2"}}),W=new F({props:{name:"class transformers.T5TokenizerFast",anchor:"transformers.T5TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"extra_ids",val:" = 100"},{name:"additional_special_tokens",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.T5TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.T5TokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.T5TokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.T5TokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.T5TokenizerFast.extra_ids",description:`<strong>extra_ids</strong> (<code>int</code>, <em>optional</em>, defaults to 100) &#x2014;
Add a number of extra ids added to the vocabulary for use as sentinels. These tokens are accessible as
&#x201C;<extra<em>id{%d}&gt;&#x201D; where &#x201D;{%d}&#x201D; is a number between 0 and extra_ids-1. These tokens can be retrieved by
calling get_sentinel_tokens method and token ids can be by calling get_sentinel_token_ids method</extra<em>`,name:"extra_ids"},{anchor:"transformers.T5TokenizerFast.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/tokenization_t5_fast.py#L66"}}),Ne=new F({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/tokenization_t5_fast.py#L195",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),Ce=new F({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": List"},{name:"token_ids_1",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.T5TokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/t5/tokenization_t5_fast.py#L221",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>List of zeros.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[int]</code></p>
`}}),ve=new es({props:{pytorch:!0,tensorflow:!0,jax:!0,$$slots:{jax:[Cs],tensorflow:[$s],pytorch:[bs]},$$scope:{ctx:J}}}),{c(){t=c("meta"),f=a(),n=c("p"),o=a(),g(m.$$.fragment),e=a(),w=c("div"),w.innerHTML=Ze,V=a(),g(te.$$.fragment),X=a(),E=c("p"),E.innerHTML=B,S=a(),Y=c("p"),Y.textContent=ae,qe=a(),L=c("p"),L.innerHTML=D,R=a(),Z=c("p"),Z.innerHTML=Te,z=a(),H=c("p"),H.textContent=We,N=a(),ce=c("ul"),ce.innerHTML=P,G=a(),O=c("p"),O.innerHTML=u,j=a(),g(q.$$.fragment),I=a(),pe=c("ul"),pe.innerHTML=nt,At=a(),g(ne.$$.fragment),De=a(),$e=c("div"),g(Ge.$$.fragment),kn=a(),Tt=c("p"),Tt.innerHTML=Zt,wn=a(),Mt=c("p"),Mt.innerHTML=ot,qt=a(),g(Je.$$.fragment),Wt=a(),x=c("div"),g(je.$$.fragment),on=a(),He=c("p"),He.innerHTML=Yn,sn=a(),Re=c("p"),Re.innerHTML=On,an=a(),me=c("div"),g(bt.$$.fragment),rn=a(),Qe=c("p"),Qe.textContent=Kn,ln=a(),xe=c("ul"),xe.innerHTML=vn,Ve=a(),Me=c("div"),g(st.$$.fragment),yt=a(),Gt=c("p"),Gt.textContent=$n,Ae=a(),Pe=c("div"),g(oe.$$.fragment),at=a(),kt=c("p"),kt.textContent=Vt,Jn=a(),Ye=c("div"),g(be.$$.fragment),dn=a(),Ue=c("p"),Ue.innerHTML=jn,ye=a(),ke=c("div"),g(rt.$$.fragment),wt=a(),Bt=c("p"),Bt.innerHTML=xn,lt=a(),vt=c("p"),vt.innerHTML=Un,Xe=a(),g(Oe.$$.fragment),Ke=a(),se=c("div"),g(W.$$.fragment),it=a(),$t=c("p"),$t.innerHTML=Nt,Cn=a(),Jt=c("p"),Jt.innerHTML=Ht,zn=a(),Be=c("div"),g(Ne.$$.fragment),Fn=a(),jt=c("p"),jt.textContent=Rt,In=a(),xt=c("ul"),xt.innerHTML=dt,cn=a(),re=c("div"),g(Ce.$$.fragment),pn=a(),Ee=c("p"),Ee.textContent=eo,Pt=a(),we=c("p"),we.innerHTML=Zn,ue=a(),g(ve.$$.fragment),Yt=a(),et=c("p"),this.h()},l(d){const $=Ko("svelte-u9bgzb",document.head);t=p($,"META",{name:!0,content:!0}),$.forEach(i),f=r(d),n=p(d,"P",{}),C(n).forEach(i),o=r(d),_(m.$$.fragment,d),e=r(d),w=p(d,"DIV",{class:!0,"data-svelte-h":!0}),k(w)!=="svelte-1ts56sn"&&(w.innerHTML=Ze),V=r(d),_(te.$$.fragment,d),X=r(d),E=p(d,"P",{"data-svelte-h":!0}),k(E)!=="svelte-1roqcuv"&&(E.innerHTML=B),S=r(d),Y=p(d,"P",{"data-svelte-h":!0}),k(Y)!=="svelte-vfdo9a"&&(Y.textContent=ae),qe=r(d),L=p(d,"P",{"data-svelte-h":!0}),k(L)!=="svelte-zubcnw"&&(L.innerHTML=D),R=r(d),Z=p(d,"P",{"data-svelte-h":!0}),k(Z)!=="svelte-k2hj4w"&&(Z.innerHTML=Te),z=r(d),H=p(d,"P",{"data-svelte-h":!0}),k(H)!=="svelte-1p0jqca"&&(H.textContent=We),N=r(d),ce=p(d,"UL",{"data-svelte-h":!0}),k(ce)!=="svelte-1w0nbyl"&&(ce.innerHTML=P),G=r(d),O=p(d,"P",{"data-svelte-h":!0}),k(O)!=="svelte-1lbi4r5"&&(O.innerHTML=u),j=r(d),_(q.$$.fragment,d),I=r(d),pe=p(d,"UL",{"data-svelte-h":!0}),k(pe)!=="svelte-6ej6p2"&&(pe.innerHTML=nt),At=r(d),_(ne.$$.fragment,d),De=r(d),$e=p(d,"DIV",{class:!0});var Se=C($e);_(Ge.$$.fragment,Se),kn=r(Se),Tt=p(Se,"P",{"data-svelte-h":!0}),k(Tt)!=="svelte-vssys"&&(Tt.innerHTML=Zt),wn=r(Se),Mt=p(Se,"P",{"data-svelte-h":!0}),k(Mt)!=="svelte-o55m63"&&(Mt.innerHTML=ot),Se.forEach(i),qt=r(d),_(Je.$$.fragment,d),Wt=r(d),x=p(d,"DIV",{class:!0});var Q=C(x);_(je.$$.fragment,Q),on=r(Q),He=p(Q,"P",{"data-svelte-h":!0}),k(He)!=="svelte-pdnetr"&&(He.innerHTML=Yn),sn=r(Q),Re=p(Q,"P",{"data-svelte-h":!0}),k(Re)!=="svelte-1c3t5ty"&&(Re.innerHTML=On),an=r(Q),me=p(Q,"DIV",{class:!0});var Ut=C(me);_(bt.$$.fragment,Ut),rn=r(Ut),Qe=p(Ut,"P",{"data-svelte-h":!0}),k(Qe)!=="svelte-1wjq39d"&&(Qe.textContent=Kn),ln=r(Ut),xe=p(Ut,"UL",{"data-svelte-h":!0}),k(xe)!=="svelte-8gh3n2"&&(xe.innerHTML=vn),Ut.forEach(i),Ve=r(Q),Me=p(Q,"DIV",{class:!0});var he=C(Me);_(st.$$.fragment,he),yt=r(he),Gt=p(he,"P",{"data-svelte-h":!0}),k(Gt)!=="svelte-b3k2yi"&&(Gt.textContent=$n),he.forEach(i),Ae=r(Q),Pe=p(Q,"DIV",{class:!0});var tt=C(Pe);_(oe.$$.fragment,tt),at=r(tt),kt=p(tt,"P",{"data-svelte-h":!0}),k(kt)!=="svelte-fl5ab0"&&(kt.textContent=Vt),tt.forEach(i),Jn=r(Q),Ye=p(Q,"DIV",{class:!0});var Ot=C(Ye);_(be.$$.fragment,Ot),dn=r(Ot),Ue=p(Ot,"P",{"data-svelte-h":!0}),k(Ue)!=="svelte-1f4f5kp"&&(Ue.innerHTML=jn),Ot.forEach(i),ye=r(Q),ke=p(Q,"DIV",{class:!0});var ct=C(ke);_(rt.$$.fragment,ct),wt=r(ct),Bt=p(ct,"P",{"data-svelte-h":!0}),k(Bt)!=="svelte-zc6zc"&&(Bt.innerHTML=xn),ct.forEach(i),Q.forEach(i),lt=r(d),vt=p(d,"P",{"data-svelte-h":!0}),k(vt)!=="svelte-1shoy06"&&(vt.innerHTML=Un),Xe=r(d),_(Oe.$$.fragment,d),Ke=r(d),se=p(d,"DIV",{class:!0});var Le=C(se);_(W.$$.fragment,Le),it=r(Le),$t=p(Le,"P",{"data-svelte-h":!0}),k($t)!=="svelte-gc3mz8"&&($t.innerHTML=Nt),Cn=r(Le),Jt=p(Le,"P",{"data-svelte-h":!0}),k(Jt)!=="svelte-fh0aq"&&(Jt.innerHTML=Ht),zn=r(Le),Be=p(Le,"DIV",{class:!0});var Ct=C(Be);_(Ne.$$.fragment,Ct),Fn=r(Ct),jt=p(Ct,"P",{"data-svelte-h":!0}),k(jt)!=="svelte-1wjq39d"&&(jt.textContent=Rt),In=r(Ct),xt=p(Ct,"UL",{"data-svelte-h":!0}),k(xt)!=="svelte-8gh3n2"&&(xt.innerHTML=dt),Ct.forEach(i),cn=r(Le),re=p(Le,"DIV",{class:!0});var pt=C(re);_(Ce.$$.fragment,pt),pn=r(pt),Ee=p(pt,"P",{"data-svelte-h":!0}),k(Ee)!=="svelte-fl5ab0"&&(Ee.textContent=eo),pt.forEach(i),Le.forEach(i),Pt=r(d),we=p(d,"P",{"data-svelte-h":!0}),k(we)!=="svelte-161jk76"&&(we.innerHTML=Zn),ue=r(d),_(ve.$$.fragment,d),Yt=r(d),et=p(d,"P",{}),C(et).forEach(i),this.h()},h(){U(t,"name","hf:doc:metadata"),U(t,"content",Fs),U(w,"class","flex flex-wrap space-x-1"),U($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),U(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(d,$){s(document.head,t),h(d,f,$),h(d,n,$),h(d,o,$),T(m,d,$),h(d,e,$),h(d,w,$),h(d,V,$),T(te,d,$),h(d,X,$),h(d,E,$),h(d,S,$),h(d,Y,$),h(d,qe,$),h(d,L,$),h(d,R,$),h(d,Z,$),h(d,z,$),h(d,H,$),h(d,N,$),h(d,ce,$),h(d,G,$),h(d,O,$),h(d,j,$),T(q,d,$),h(d,I,$),h(d,pe,$),h(d,At,$),T(ne,d,$),h(d,De,$),h(d,$e,$),T(Ge,$e,null),s($e,kn),s($e,Tt),s($e,wn),s($e,Mt),h(d,qt,$),T(Je,d,$),h(d,Wt,$),h(d,x,$),T(je,x,null),s(x,on),s(x,He),s(x,sn),s(x,Re),s(x,an),s(x,me),T(bt,me,null),s(me,rn),s(me,Qe),s(me,ln),s(me,xe),s(x,Ve),s(x,Me),T(st,Me,null),s(Me,yt),s(Me,Gt),s(x,Ae),s(x,Pe),T(oe,Pe,null),s(Pe,at),s(Pe,kt),s(x,Jn),s(x,Ye),T(be,Ye,null),s(Ye,dn),s(Ye,Ue),s(x,ye),s(x,ke),T(rt,ke,null),s(ke,wt),s(ke,Bt),h(d,lt,$),h(d,vt,$),h(d,Xe,$),T(Oe,d,$),h(d,Ke,$),h(d,se,$),T(W,se,null),s(se,it),s(se,$t),s(se,Cn),s(se,Jt),s(se,zn),s(se,Be),T(Ne,Be,null),s(Be,Fn),s(Be,jt),s(Be,In),s(Be,xt),s(se,cn),s(se,re),T(Ce,re,null),s(re,pn),s(re,Ee),h(d,Pt,$),h(d,we,$),h(d,ue,$),T(ve,d,$),h(d,Yt,$),h(d,et,$),mn=!0},p(d,[$]){const Se={};$&2&&(Se.$$scope={dirty:$,ctx:d}),ve.$set(Se)},i(d){mn||(M(m.$$.fragment,d),M(te.$$.fragment,d),M(q.$$.fragment,d),M(ne.$$.fragment,d),M(Ge.$$.fragment,d),M(Je.$$.fragment,d),M(je.$$.fragment,d),M(bt.$$.fragment,d),M(st.$$.fragment,d),M(oe.$$.fragment,d),M(be.$$.fragment,d),M(rt.$$.fragment,d),M(Oe.$$.fragment,d),M(W.$$.fragment,d),M(Ne.$$.fragment,d),M(Ce.$$.fragment,d),M(ve.$$.fragment,d),mn=!0)},o(d){b(m.$$.fragment,d),b(te.$$.fragment,d),b(q.$$.fragment,d),b(ne.$$.fragment,d),b(Ge.$$.fragment,d),b(Je.$$.fragment,d),b(je.$$.fragment,d),b(bt.$$.fragment,d),b(st.$$.fragment,d),b(oe.$$.fragment,d),b(be.$$.fragment,d),b(rt.$$.fragment,d),b(Oe.$$.fragment,d),b(W.$$.fragment,d),b(Ne.$$.fragment,d),b(Ce.$$.fragment,d),b(ve.$$.fragment,d),mn=!1},d(d){d&&(i(f),i(n),i(o),i(e),i(w),i(V),i(X),i(E),i(S),i(Y),i(qe),i(L),i(R),i(Z),i(z),i(H),i(N),i(ce),i(G),i(O),i(j),i(I),i(pe),i(At),i(De),i($e),i(qt),i(Wt),i(x),i(lt),i(vt),i(Xe),i(Ke),i(se),i(Pt),i(we),i(ue),i(Yt),i(et)),i(t),y(m,d),y(te,d),y(q,d),y(ne,d),y(Ge),y(Je,d),y(je),y(bt),y(st),y(oe),y(be),y(rt),y(Oe,d),y(W),y(Ne),y(Ce),y(ve,d)}}}const Fs='{"title":"mT5","local":"mt5","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Resources","local":"resources","sections":[],"depth":2},{"title":"MT5Config","local":"transformers.MT5Config","sections":[],"depth":2},{"title":"MT5Tokenizer","local":"transformers.T5Tokenizer","sections":[],"depth":2},{"title":"MT5TokenizerFast","local":"transformers.T5TokenizerFast","sections":[],"depth":2},{"title":"MT5Model","local":"transformers.MT5Model","sections":[],"depth":2},{"title":"MT5ForConditionalGeneration","local":"transformers.MT5ForConditionalGeneration","sections":[],"depth":2},{"title":"MT5EncoderModel","local":"transformers.MT5EncoderModel","sections":[],"depth":2},{"title":"MT5ForSequenceClassification","local":"transformers.MT5ForSequenceClassification","sections":[],"depth":2},{"title":"MT5ForTokenClassification","local":"transformers.MT5ForTokenClassification","sections":[],"depth":2},{"title":"MT5ForQuestionAnswering","local":"transformers.MT5ForQuestionAnswering","sections":[],"depth":2},{"title":"TFMT5Model","local":"transformers.TFMT5Model","sections":[],"depth":2},{"title":"TFMT5ForConditionalGeneration","local":"transformers.TFMT5ForConditionalGeneration","sections":[],"depth":2},{"title":"TFMT5EncoderModel","local":"transformers.TFMT5EncoderModel","sections":[],"depth":2},{"title":"FlaxMT5Model","local":"transformers.FlaxMT5Model","sections":[],"depth":2},{"title":"FlaxMT5ForConditionalGeneration","local":"transformers.FlaxMT5ForConditionalGeneration","sections":[],"depth":2},{"title":"FlaxMT5EncoderModel","local":"transformers.FlaxMT5EncoderModel","sections":[],"depth":2}],"depth":1}';function Is(J){return Po(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Rs extends Yo{constructor(t){super(),Oo(this,t,Is,zs,Ao,{})}}export{Rs as component};
