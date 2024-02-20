import{s as He,o as Ae,n as Ze}from"../chunks/scheduler.9bc65507.js";import{S as Ve,i as Le,g as m,s as r,r as g,A as Pe,h as d,f as n,c as i,j as X,u,x as j,k as Y,y as p,a,v as _,d as T,t as M,w as b}from"../chunks/index.707bf1b6.js";import{T as Se}from"../chunks/Tip.c2ecdbf4.js";import{D as se}from"../chunks/Docstring.17db21ae.js";import{C as Fe}from"../chunks/CodeBlock.54a9f38d.js";import{E as Ee}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as ae}from"../chunks/Heading.342b1fa6.js";function Xe(C){let s,y="Example:",c,l,f;return l=new Fe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMERlY2lzaW9uVHJhbnNmb3JtZXJDb25maWclMkMlMjBEZWNpc2lvblRyYW5zZm9ybWVyTW9kZWwlMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwRGVjaXNpb25UcmFuc2Zvcm1lciUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwRGVjaXNpb25UcmFuc2Zvcm1lckNvbmZpZygpJTBBJTBBJTIzJTIwSW5pdGlhbGl6aW5nJTIwYSUyMG1vZGVsJTIwKHdpdGglMjByYW5kb20lMjB3ZWlnaHRzKSUyMGZyb20lMjB0aGUlMjBjb25maWd1cmF0aW9uJTBBbW9kZWwlMjAlM0QlMjBEZWNpc2lvblRyYW5zZm9ybWVyTW9kZWwoY29uZmlndXJhdGlvbiklMEElMEElMjMlMjBBY2Nlc3NpbmclMjB0aGUlMjBtb2RlbCUyMGNvbmZpZ3VyYXRpb24lMEFjb25maWd1cmF0aW9uJTIwJTNEJTIwbW9kZWwuY29uZmln",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DecisionTransformerConfig, DecisionTransformerModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a DecisionTransformer configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = DecisionTransformerConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DecisionTransformerModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){s=m("p"),s.textContent=y,c=r(),g(l.$$.fragment)},l(o){s=d(o,"P",{"data-svelte-h":!0}),j(s)!=="svelte-11lpom8"&&(s.textContent=y),c=i(o),u(l.$$.fragment,o)},m(o,h){a(o,s,h),a(o,c,h),_(l,o,h),f=!0},p:Ze,i(o){f||(T(l.$$.fragment,o),f=!0)},o(o){M(l.$$.fragment,o),f=!1},d(o){o&&(n(s),n(c)),b(l,o)}}}function Ye(C){let s,y=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){s=m("p"),s.innerHTML=y},l(c){s=d(c,"P",{"data-svelte-h":!0}),j(s)!=="svelte-fincs2"&&(s.innerHTML=y)},m(c,l){a(c,s,l)},p:Ze,d(c){c&&n(s)}}}function Qe(C){let s,y="Examples:",c,l,f;return l=new Fe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMERlY2lzaW9uVHJhbnNmb3JtZXJNb2RlbCUwQWltcG9ydCUyMHRvcmNoJTBBJTBBbW9kZWwlMjAlM0QlMjBEZWNpc2lvblRyYW5zZm9ybWVyTW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMmVkYmVlY2hpbmclMkZkZWNpc2lvbi10cmFuc2Zvcm1lci1neW0taG9wcGVyLW1lZGl1bSUyMiklMEElMjMlMjBldmFsdWF0aW9uJTBBbW9kZWwlMjAlM0QlMjBtb2RlbC50byhkZXZpY2UpJTBBbW9kZWwuZXZhbCgpJTBBJTBBZW52JTIwJTNEJTIwZ3ltLm1ha2UoJTIySG9wcGVyLXYzJTIyKSUwQXN0YXRlX2RpbSUyMCUzRCUyMGVudi5vYnNlcnZhdGlvbl9zcGFjZS5zaGFwZSU1QjAlNUQlMEFhY3RfZGltJTIwJTNEJTIwZW52LmFjdGlvbl9zcGFjZS5zaGFwZSU1QjAlNUQlMEElMEFzdGF0ZSUyMCUzRCUyMGVudi5yZXNldCgpJTBBc3RhdGVzJTIwJTNEJTIwdG9yY2guZnJvbV9udW1weShzdGF0ZSkucmVzaGFwZSgxJTJDJTIwMSUyQyUyMHN0YXRlX2RpbSkudG8oZGV2aWNlJTNEZGV2aWNlJTJDJTIwZHR5cGUlM0R0b3JjaC5mbG9hdDMyKSUwQWFjdGlvbnMlMjAlM0QlMjB0b3JjaC56ZXJvcygoMSUyQyUyMDElMkMlMjBhY3RfZGltKSUyQyUyMGRldmljZSUzRGRldmljZSUyQyUyMGR0eXBlJTNEdG9yY2guZmxvYXQzMiklMEFyZXdhcmRzJTIwJTNEJTIwdG9yY2guemVyb3MoMSUyQyUyMDElMkMlMjBkZXZpY2UlM0RkZXZpY2UlMkMlMjBkdHlwZSUzRHRvcmNoLmZsb2F0MzIpJTBBdGFyZ2V0X3JldHVybiUyMCUzRCUyMHRvcmNoLnRlbnNvcihUQVJHRVRfUkVUVVJOJTJDJTIwZHR5cGUlM0R0b3JjaC5mbG9hdDMyKS5yZXNoYXBlKDElMkMlMjAxKSUwQXRpbWVzdGVwcyUyMCUzRCUyMHRvcmNoLnRlbnNvcigwJTJDJTIwZGV2aWNlJTNEZGV2aWNlJTJDJTIwZHR5cGUlM0R0b3JjaC5sb25nKS5yZXNoYXBlKDElMkMlMjAxKSUwQWF0dGVudGlvbl9tYXNrJTIwJTNEJTIwdG9yY2guemVyb3MoMSUyQyUyMDElMkMlMjBkZXZpY2UlM0RkZXZpY2UlMkMlMjBkdHlwZSUzRHRvcmNoLmZsb2F0MzIpJTBBJTBBJTIzJTIwZm9yd2FyZCUyMHBhc3MlMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwc3RhdGVfcHJlZHMlMkMlMjBhY3Rpb25fcHJlZHMlMkMlMjByZXR1cm5fcHJlZHMlMjAlM0QlMjBtb2RlbCglMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBzdGF0ZXMlM0RzdGF0ZXMlMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBhY3Rpb25zJTNEYWN0aW9ucyUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHJld2FyZHMlM0RyZXdhcmRzJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcmV0dXJuc190b19nbyUzRHRhcmdldF9yZXR1cm4lMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjB0aW1lc3RlcHMlM0R0aW1lc3RlcHMlMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBhdHRlbnRpb25fbWFzayUzRGF0dGVudGlvbl9tYXNrJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcmV0dXJuX2RpY3QlM0RGYWxzZSUyQyUwQSUyMCUyMCUyMCUyMCk=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DecisionTransformerModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>model = DecisionTransformerModel.from_pretrained(<span class="hljs-string">&quot;edbeeching/decision-transformer-gym-hopper-medium&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># evaluation</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = model.to(device)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.<span class="hljs-built_in">eval</span>()

<span class="hljs-meta">&gt;&gt;&gt; </span>env = gym.make(<span class="hljs-string">&quot;Hopper-v3&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>state_dim = env.observation_space.shape[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>act_dim = env.action_space.shape[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>state = env.reset()
<span class="hljs-meta">&gt;&gt;&gt; </span>states = torch.from_numpy(state).reshape(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, state_dim).to(device=device, dtype=torch.float32)
<span class="hljs-meta">&gt;&gt;&gt; </span>actions = torch.zeros((<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, act_dim), device=device, dtype=torch.float32)
<span class="hljs-meta">&gt;&gt;&gt; </span>rewards = torch.zeros(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, device=device, dtype=torch.float32)
<span class="hljs-meta">&gt;&gt;&gt; </span>target_return = torch.tensor(TARGET_RETURN, dtype=torch.float32).reshape(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>timesteps = torch.tensor(<span class="hljs-number">0</span>, device=device, dtype=torch.long).reshape(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = torch.zeros(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, device=device, dtype=torch.float32)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># forward pass</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    state_preds, action_preds, return_preds = model(
<span class="hljs-meta">... </span>        states=states,
<span class="hljs-meta">... </span>        actions=actions,
<span class="hljs-meta">... </span>        rewards=rewards,
<span class="hljs-meta">... </span>        returns_to_go=target_return,
<span class="hljs-meta">... </span>        timesteps=timesteps,
<span class="hljs-meta">... </span>        attention_mask=attention_mask,
<span class="hljs-meta">... </span>        return_dict=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>    )`,wrap:!1}}),{c(){s=m("p"),s.textContent=y,c=r(),g(l.$$.fragment)},l(o){s=d(o,"P",{"data-svelte-h":!0}),j(s)!=="svelte-kvfsh7"&&(s.textContent=y),c=i(o),u(l.$$.fragment,o)},m(o,h){a(o,s,h),a(o,c,h),_(l,o,h),f=!0},p:Ze,i(o){f||(T(l.$$.fragment,o),f=!0)},o(o){M(l.$$.fragment,o),f=!1},d(o){o&&(n(s),n(c)),b(l,o)}}}function qe(C){let s,y,c,l,f,o,h,re,z,xe=`The Decision Transformer model was proposed in <a href="https://arxiv.org/abs/2106.01345" rel="nofollow">Decision Transformer: Reinforcement Learning via Sequence Modeling</a><br/>
by Lili Chen, Kevin Lu, Aravind Rajeswaran, Kimin Lee, Aditya Grover, Michael Laskin, Pieter Abbeel, Aravind Srinivas, Igor Mordatch.`,ie,G,ke="The abstract from the paper is the following:",le,N,Ue=`<em>We introduce a framework that abstracts Reinforcement Learning (RL) as a sequence modeling problem.
This allows us to draw upon the simplicity and scalability of the Transformer architecture, and associated advances
in language modeling such as GPT-x and BERT. In particular, we present Decision Transformer, an architecture that
casts the problem of RL as conditional sequence modeling. Unlike prior approaches to RL that fit value functions or
compute policy gradients, Decision Transformer simply outputs the optimal actions by leveraging a causally masked
Transformer. By conditioning an autoregressive model on the desired return (reward), past states, and actions, our
Decision Transformer model can generate future actions that achieve the desired return. Despite its simplicity,
Decision Transformer matches or exceeds the performance of state-of-the-art model-free offline RL baselines on
Atari, OpenAI Gym, and Key-to-Door tasks.</em>`,ce,W,Re="This version of the model is for tasks where the state is a vector.",me,B,ze='This model was contributed by <a href="https://huggingface.co/edbeeching" rel="nofollow">edbeeching</a>. The original code can be found <a href="https://github.com/kzl/decision-transformer" rel="nofollow">here</a>.',de,I,pe,v,E,Me,Q,Ge=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/decision_transformer#transformers.DecisionTransformerModel">DecisionTransformerModel</a>. It is used to
instantiate a Decision Transformer model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the standard
DecisionTransformer architecture. Many of the config options are used to instatiate the GPT2 model that is used as
part of the architecture.`,be,q,Ne=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,ye,Z,fe,F,he,D,H,ve,O,A,ge,V,ue,w,L,we,K,We=`The Decision Transformer Model
This model is a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`,je,ee,Be=`The model builds upon the GPT2 architecture to perform autoregressive prediction of actions in an offline RL
setting. Refer to the paper for more details: <a href="https://arxiv.org/abs/2106.01345" rel="nofollow">https://arxiv.org/abs/2106.01345</a>`,$e,$,P,Je,te,Ie='The <a href="/docs/transformers/main/en/model_doc/decision_transformer#transformers.DecisionTransformerModel">DecisionTransformerModel</a> forward method, overrides the <code>__call__</code> special method.',De,x,Ce,k,_e,ne,Te;return f=new ae({props:{title:"Decision Transformer",local:"decision-transformer",headingTag:"h1"}}),h=new ae({props:{title:"Overview",local:"overview",headingTag:"h2"}}),I=new ae({props:{title:"DecisionTransformerConfig",local:"transformers.DecisionTransformerConfig",headingTag:"h2"}}),E=new se({props:{name:"class transformers.DecisionTransformerConfig",anchor:"transformers.DecisionTransformerConfig",parameters:[{name:"state_dim",val:" = 17"},{name:"act_dim",val:" = 4"},{name:"hidden_size",val:" = 128"},{name:"max_ep_len",val:" = 4096"},{name:"action_tanh",val:" = True"},{name:"vocab_size",val:" = 1"},{name:"n_positions",val:" = 1024"},{name:"n_layer",val:" = 3"},{name:"n_head",val:" = 1"},{name:"n_inner",val:" = None"},{name:"activation_function",val:" = 'relu'"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"scale_attn_weights",val:" = True"},{name:"use_cache",val:" = True"},{name:"bos_token_id",val:" = 50256"},{name:"eos_token_id",val:" = 50256"},{name:"scale_attn_by_inverse_layer_idx",val:" = False"},{name:"reorder_and_upcast_attn",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DecisionTransformerConfig.state_dim",description:`<strong>state_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 17) &#x2014;
The state size for the RL environment`,name:"state_dim"},{anchor:"transformers.DecisionTransformerConfig.act_dim",description:`<strong>act_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
The size of the output action space`,name:"act_dim"},{anchor:"transformers.DecisionTransformerConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
The size of the hidden layers`,name:"hidden_size"},{anchor:"transformers.DecisionTransformerConfig.max_ep_len",description:`<strong>max_ep_len</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
The maximum length of an episode in the environment`,name:"max_ep_len"},{anchor:"transformers.DecisionTransformerConfig.action_tanh",description:`<strong>action_tanh</strong> (<code>bool</code>, <em>optional</em>, defaults to True) &#x2014;
Whether to use a tanh activation on action prediction`,name:"action_tanh"},{anchor:"transformers.DecisionTransformerConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50257) &#x2014;
Vocabulary size of the GPT-2 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/decision_transformer#transformers.DecisionTransformerModel">DecisionTransformerModel</a>.`,name:"vocab_size"},{anchor:"transformers.DecisionTransformerConfig.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"n_positions"},{anchor:"transformers.DecisionTransformerConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.DecisionTransformerConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.DecisionTransformerConfig.n_inner",description:`<strong>n_inner</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Dimensionality of the inner feed-forward layers. If unset, will default to 4 times <code>n_embd</code>.`,name:"n_inner"},{anchor:"transformers.DecisionTransformerConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
Activation function, to be selected in the list <code>[&quot;relu&quot;, &quot;silu&quot;, &quot;gelu&quot;, &quot;tanh&quot;, &quot;gelu_new&quot;]</code>.`,name:"activation_function"},{anchor:"transformers.DecisionTransformerConfig.resid_pdrop",description:`<strong>resid_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"resid_pdrop"},{anchor:"transformers.DecisionTransformerConfig.embd_pdrop",description:`<strong>embd_pdrop</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the embeddings.`,name:"embd_pdrop"},{anchor:"transformers.DecisionTransformerConfig.attn_pdrop",description:`<strong>attn_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention.`,name:"attn_pdrop"},{anchor:"transformers.DecisionTransformerConfig.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon to use in the layer normalization layers.`,name:"layer_norm_epsilon"},{anchor:"transformers.DecisionTransformerConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DecisionTransformerConfig.scale_attn_weights",description:`<strong>scale_attn_weights</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Scale attention weights by dividing by sqrt(hidden_size)..`,name:"scale_attn_weights"},{anchor:"transformers.DecisionTransformerConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"},{anchor:"transformers.DecisionTransformerConfig.scale_attn_by_inverse_layer_idx",description:`<strong>scale_attn_by_inverse_layer_idx</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to additionally scale attention weights by <code>1 / layer_idx + 1</code>.`,name:"scale_attn_by_inverse_layer_idx"},{anchor:"transformers.DecisionTransformerConfig.reorder_and_upcast_attn",description:`<strong>reorder_and_upcast_attn</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to scale keys (K) prior to computing attention (dot-product) and upcast attention
dot-product/softmax to float() when training with mixed precision.`,name:"reorder_and_upcast_attn"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/decision_transformer/configuration_decision_transformer.py#L31"}}),Z=new Ee({props:{anchor:"transformers.DecisionTransformerConfig.example",$$slots:{default:[Xe]},$$scope:{ctx:C}}}),F=new ae({props:{title:"DecisionTransformerGPT2Model",local:"transformers.DecisionTransformerGPT2Model",headingTag:"h2"}}),H=new se({props:{name:"class transformers.DecisionTransformerGPT2Model",anchor:"transformers.DecisionTransformerGPT2Model",parameters:[{name:"config",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/decision_transformer/modeling_decision_transformer.py#L473"}}),A=new se({props:{name:"forward",anchor:"transformers.DecisionTransformerGPT2Model.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"past_key_values",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"token_type_ids",val:": Optional = None"},{name:"position_ids",val:": Optional = None"},{name:"head_mask",val:": Optional = None"},{name:"inputs_embeds",val:": Optional = None"},{name:"encoder_hidden_states",val:": Optional = None"},{name:"encoder_attention_mask",val:": Optional = None"},{name:"use_cache",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/decision_transformer/modeling_decision_transformer.py#L503"}}),V=new ae({props:{title:"DecisionTransformerModel",local:"transformers.DecisionTransformerModel",headingTag:"h2"}}),L=new se({props:{name:"class transformers.DecisionTransformerModel",anchor:"transformers.DecisionTransformerModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DecisionTransformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/decision_transformer#transformers.DecisionTransformerConfig">~DecisionTransformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/decision_transformer/modeling_decision_transformer.py#L783"}}),P=new se({props:{name:"forward",anchor:"transformers.DecisionTransformerModel.forward",parameters:[{name:"states",val:": Optional = None"},{name:"actions",val:": Optional = None"},{name:"rewards",val:": Optional = None"},{name:"returns_to_go",val:": Optional = None"},{name:"timesteps",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"return_dict",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.DecisionTransformerModel.forward.states",description:`<strong>states</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, episode_length, state_dim)</code>) &#x2014;
The states for each step in the trajectory`,name:"states"},{anchor:"transformers.DecisionTransformerModel.forward.actions",description:`<strong>actions</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, episode_length, act_dim)</code>) &#x2014;
The actions taken by the &#x201C;expert&#x201D; policy for the current state, these are masked for auto regressive
prediction`,name:"actions"},{anchor:"transformers.DecisionTransformerModel.forward.rewards",description:`<strong>rewards</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, episode_length, 1)</code>) &#x2014;
The rewards for each state, action`,name:"rewards"},{anchor:"transformers.DecisionTransformerModel.forward.returns_to_go",description:`<strong>returns_to_go</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, episode_length, 1)</code>) &#x2014;
The returns for each state in the trajectory`,name:"returns_to_go"},{anchor:"transformers.DecisionTransformerModel.forward.timesteps",description:`<strong>timesteps</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, episode_length)</code>) &#x2014;
The timestep for each step in the trajectory`,name:"timesteps"},{anchor:"transformers.DecisionTransformerModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, episode_length)</code>) &#x2014;
Masking, used to mask the actions when performing autoregressive prediction`,name:"attention_mask"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/decision_transformer/modeling_decision_transformer.py#L817",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.models.decision_transformer.modeling_decision_transformer.DecisionTransformerOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/decision_transformer#transformers.DecisionTransformerConfig"
>DecisionTransformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) — Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>state_preds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, state_dim)</code>) — Environment state predictions</p>
</li>
<li>
<p><strong>action_preds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, action_dim)</code>) — Model action predictions</p>
</li>
<li>
<p><strong>return_preds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, 1)</code>) — Predicted returns for each state</p>
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


<p><code>transformers.models.decision_transformer.modeling_decision_transformer.DecisionTransformerOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),x=new Se({props:{$$slots:{default:[Ye]},$$scope:{ctx:C}}}),k=new Ee({props:{anchor:"transformers.DecisionTransformerModel.forward.example",$$slots:{default:[Qe]},$$scope:{ctx:C}}}),{c(){s=m("meta"),y=r(),c=m("p"),l=r(),g(f.$$.fragment),o=r(),g(h.$$.fragment),re=r(),z=m("p"),z.innerHTML=xe,ie=r(),G=m("p"),G.textContent=ke,le=r(),N=m("p"),N.innerHTML=Ue,ce=r(),W=m("p"),W.textContent=Re,me=r(),B=m("p"),B.innerHTML=ze,de=r(),g(I.$$.fragment),pe=r(),v=m("div"),g(E.$$.fragment),Me=r(),Q=m("p"),Q.innerHTML=Ge,be=r(),q=m("p"),q.innerHTML=Ne,ye=r(),g(Z.$$.fragment),fe=r(),g(F.$$.fragment),he=r(),D=m("div"),g(H.$$.fragment),ve=r(),O=m("div"),g(A.$$.fragment),ge=r(),g(V.$$.fragment),ue=r(),w=m("div"),g(L.$$.fragment),we=r(),K=m("p"),K.innerHTML=We,je=r(),ee=m("p"),ee.innerHTML=Be,$e=r(),$=m("div"),g(P.$$.fragment),Je=r(),te=m("p"),te.innerHTML=Ie,De=r(),g(x.$$.fragment),Ce=r(),g(k.$$.fragment),_e=r(),ne=m("p"),this.h()},l(e){const t=Pe("svelte-u9bgzb",document.head);s=d(t,"META",{name:!0,content:!0}),t.forEach(n),y=i(e),c=d(e,"P",{}),X(c).forEach(n),l=i(e),u(f.$$.fragment,e),o=i(e),u(h.$$.fragment,e),re=i(e),z=d(e,"P",{"data-svelte-h":!0}),j(z)!=="svelte-xt2qk"&&(z.innerHTML=xe),ie=i(e),G=d(e,"P",{"data-svelte-h":!0}),j(G)!=="svelte-vfdo9a"&&(G.textContent=ke),le=i(e),N=d(e,"P",{"data-svelte-h":!0}),j(N)!=="svelte-lyw843"&&(N.innerHTML=Ue),ce=i(e),W=d(e,"P",{"data-svelte-h":!0}),j(W)!=="svelte-1b8os8n"&&(W.textContent=Re),me=i(e),B=d(e,"P",{"data-svelte-h":!0}),j(B)!=="svelte-1ferxi2"&&(B.innerHTML=ze),de=i(e),u(I.$$.fragment,e),pe=i(e),v=d(e,"DIV",{class:!0});var J=X(v);u(E.$$.fragment,J),Me=i(J),Q=d(J,"P",{"data-svelte-h":!0}),j(Q)!=="svelte-1ooiy4t"&&(Q.innerHTML=Ge),be=i(J),q=d(J,"P",{"data-svelte-h":!0}),j(q)!=="svelte-o55m63"&&(q.innerHTML=Ne),ye=i(J),u(Z.$$.fragment,J),J.forEach(n),fe=i(e),u(F.$$.fragment,e),he=i(e),D=d(e,"DIV",{class:!0});var S=X(D);u(H.$$.fragment,S),ve=i(S),O=d(S,"DIV",{class:!0});var oe=X(O);u(A.$$.fragment,oe),oe.forEach(n),S.forEach(n),ge=i(e),u(V.$$.fragment,e),ue=i(e),w=d(e,"DIV",{class:!0});var U=X(w);u(L.$$.fragment,U),we=i(U),K=d(U,"P",{"data-svelte-h":!0}),j(K)!=="svelte-s64yr0"&&(K.innerHTML=We),je=i(U),ee=d(U,"P",{"data-svelte-h":!0}),j(ee)!=="svelte-31643h"&&(ee.innerHTML=Be),$e=i(U),$=d(U,"DIV",{class:!0});var R=X($);u(P.$$.fragment,R),Je=i(R),te=d(R,"P",{"data-svelte-h":!0}),j(te)!=="svelte-gyhnht"&&(te.innerHTML=Ie),De=i(R),u(x.$$.fragment,R),Ce=i(R),u(k.$$.fragment,R),R.forEach(n),U.forEach(n),_e=i(e),ne=d(e,"P",{}),X(ne).forEach(n),this.h()},h(){Y(s,"name","hf:doc:metadata"),Y(s,"content",Oe),Y(v,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Y(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Y(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Y($,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),Y(w,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,t){p(document.head,s),a(e,y,t),a(e,c,t),a(e,l,t),_(f,e,t),a(e,o,t),_(h,e,t),a(e,re,t),a(e,z,t),a(e,ie,t),a(e,G,t),a(e,le,t),a(e,N,t),a(e,ce,t),a(e,W,t),a(e,me,t),a(e,B,t),a(e,de,t),_(I,e,t),a(e,pe,t),a(e,v,t),_(E,v,null),p(v,Me),p(v,Q),p(v,be),p(v,q),p(v,ye),_(Z,v,null),a(e,fe,t),_(F,e,t),a(e,he,t),a(e,D,t),_(H,D,null),p(D,ve),p(D,O),_(A,O,null),a(e,ge,t),_(V,e,t),a(e,ue,t),a(e,w,t),_(L,w,null),p(w,we),p(w,K),p(w,je),p(w,ee),p(w,$e),p(w,$),_(P,$,null),p($,Je),p($,te),p($,De),_(x,$,null),p($,Ce),_(k,$,null),a(e,_e,t),a(e,ne,t),Te=!0},p(e,[t]){const J={};t&2&&(J.$$scope={dirty:t,ctx:e}),Z.$set(J);const S={};t&2&&(S.$$scope={dirty:t,ctx:e}),x.$set(S);const oe={};t&2&&(oe.$$scope={dirty:t,ctx:e}),k.$set(oe)},i(e){Te||(T(f.$$.fragment,e),T(h.$$.fragment,e),T(I.$$.fragment,e),T(E.$$.fragment,e),T(Z.$$.fragment,e),T(F.$$.fragment,e),T(H.$$.fragment,e),T(A.$$.fragment,e),T(V.$$.fragment,e),T(L.$$.fragment,e),T(P.$$.fragment,e),T(x.$$.fragment,e),T(k.$$.fragment,e),Te=!0)},o(e){M(f.$$.fragment,e),M(h.$$.fragment,e),M(I.$$.fragment,e),M(E.$$.fragment,e),M(Z.$$.fragment,e),M(F.$$.fragment,e),M(H.$$.fragment,e),M(A.$$.fragment,e),M(V.$$.fragment,e),M(L.$$.fragment,e),M(P.$$.fragment,e),M(x.$$.fragment,e),M(k.$$.fragment,e),Te=!1},d(e){e&&(n(y),n(c),n(l),n(o),n(re),n(z),n(ie),n(G),n(le),n(N),n(ce),n(W),n(me),n(B),n(de),n(pe),n(v),n(fe),n(he),n(D),n(ge),n(ue),n(w),n(_e),n(ne)),n(s),b(f,e),b(h,e),b(I,e),b(E),b(Z),b(F,e),b(H),b(A),b(V,e),b(L),b(P),b(x),b(k)}}}const Oe='{"title":"Decision Transformer","local":"decision-transformer","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"DecisionTransformerConfig","local":"transformers.DecisionTransformerConfig","sections":[],"depth":2},{"title":"DecisionTransformerGPT2Model","local":"transformers.DecisionTransformerGPT2Model","sections":[],"depth":2},{"title":"DecisionTransformerModel","local":"transformers.DecisionTransformerModel","sections":[],"depth":2}],"depth":1}';function Ke(C){return Ae(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class it extends Ve{constructor(s){super(),Le(this,s,Ke,qe,He,{})}}export{it as component};