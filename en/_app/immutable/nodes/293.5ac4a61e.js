import{s as Pt,o as At,n as vt}from"../chunks/scheduler.9bc65507.js";import{S as Yt,i as Dt,g as r,s,r as p,A as Ot,h as i,f as n,c as a,j as N,u,x as c,k as R,y as m,a as o,v as h,d as f,t as g,w as _}from"../chunks/index.707bf1b6.js";import{T as Kt}from"../chunks/Tip.c2ecdbf4.js";import{D as Je}from"../chunks/Docstring.17db21ae.js";import{C as q}from"../chunks/CodeBlock.54a9f38d.js";import{E as Gt}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as xe}from"../chunks/Heading.342b1fa6.js";function en(C){let d,k="Example:",y,b,w;return b=new q({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFZpdHNNb2RlbCUyQyUyMFZpdHNDb25maWclMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwJTIyZmFjZWJvb2slMkZtbXMtdHRzLWVuZyUyMiUyMHN0eWxlJTIwY29uZmlndXJhdGlvbiUwQWNvbmZpZ3VyYXRpb24lMjAlM0QlMjBWaXRzQ29uZmlnKCklMEElMEElMjMlMjBJbml0aWFsaXppbmclMjBhJTIwbW9kZWwlMjAod2l0aCUyMHJhbmRvbSUyMHdlaWdodHMpJTIwZnJvbSUyMHRoZSUyMCUyMmZhY2Vib29rJTJGbW1zLXR0cy1lbmclMjIlMjBzdHlsZSUyMGNvbmZpZ3VyYXRpb24lMEFtb2RlbCUyMCUzRCUyMFZpdHNNb2RlbChjb25maWd1cmF0aW9uKSUwQSUwQSUyMyUyMEFjY2Vzc2luZyUyMHRoZSUyMG1vZGVsJTIwY29uZmlndXJhdGlvbiUwQWNvbmZpZ3VyYXRpb24lMjAlM0QlMjBtb2RlbC5jb25maWc=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> VitsModel, VitsConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a &quot;facebook/mms-tts-eng&quot; style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = VitsConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the &quot;facebook/mms-tts-eng&quot; style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VitsModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`,wrap:!1}}),{c(){d=r("p"),d.textContent=k,y=s(),p(b.$$.fragment)},l(l){d=i(l,"P",{"data-svelte-h":!0}),c(d)!=="svelte-11lpom8"&&(d.textContent=k),y=a(l),u(b.$$.fragment,l)},m(l,v){o(l,d,v),o(l,y,v),h(b,l,v),w=!0},p:vt,i(l){w||(f(b.$$.fragment,l),w=!0)},o(l){g(b.$$.fragment,l),w=!1},d(l){l&&(n(d),n(y)),_(b,l)}}}function tn(C){let d,k=`Although the recipe for forward pass needs to be defined within this function, one should call the <code>Module</code>
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`;return{c(){d=r("p"),d.innerHTML=k},l(y){d=i(y,"P",{"data-svelte-h":!0}),c(d)!=="svelte-fincs2"&&(d.innerHTML=k)},m(y,b){o(y,d,b)},p:vt,d(y){y&&n(d)}}}function nn(C){let d,k="Example:",y,b,w;return b=new q({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFZpdHNUb2tlbml6ZXIlMkMlMjBWaXRzTW9kZWwlMkMlMjBzZXRfc2VlZCUwQWltcG9ydCUyMHRvcmNoJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwVml0c1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZtbXMtdHRzLWVuZyUyMiklMEFtb2RlbCUyMCUzRCUyMFZpdHNNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZtbXMtdHRzLWVuZyUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIodGV4dCUzRCUyMkhlbGxvJTIwLSUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEElMEFzZXRfc2VlZCg1NTUpJTIwJTIwJTIzJTIwbWFrZSUyMGRldGVybWluaXN0aWMlMEElMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwJTIwb3V0cHV0cyUyMCUzRCUyMG1vZGVsKGlucHV0cyU1QiUyMmlucHV0X2lkcyUyMiU1RCklMEFvdXRwdXRzLndhdmVmb3JtLnNoYXBl",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> VitsTokenizer, VitsModel, set_seed
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = VitsTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mms-tts-eng&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = VitsModel.from_pretrained(<span class="hljs-string">&quot;facebook/mms-tts-eng&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(text=<span class="hljs-string">&quot;Hello - my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>set_seed(<span class="hljs-number">555</span>)  <span class="hljs-comment"># make deterministic</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs.waveform.shape
torch.Size([<span class="hljs-number">1</span>, <span class="hljs-number">45824</span>])`,wrap:!1}}),{c(){d=r("p"),d.textContent=k,y=s(),p(b.$$.fragment)},l(l){d=i(l,"P",{"data-svelte-h":!0}),c(d)!=="svelte-11lpom8"&&(d.textContent=k),y=a(l),u(b.$$.fragment,l)},m(l,v){o(l,d,v),o(l,y,v),h(b,l,v),w=!0},p:vt,i(l){w||(f(b.$$.fragment,l),w=!0)},o(l){g(b.$$.fragment,l),w=!1},d(l){l&&(n(d),n(y)),_(b,l)}}}function on(C){let d,k,y,b,w,l,v,je,H,Tt='The VITS model was proposed in <a href="https://arxiv.org/abs/2106.06103" rel="nofollow">Conditional Variational Autoencoder with Adversarial Learning for End-to-End Text-to-Speech</a> by Jaehyeon Kim, Jungil Kong, Juhee Son.',Ue,X,kt=`VITS (<strong>V</strong>ariational <strong>I</strong>nference with adversarial learning for end-to-end <strong>T</strong>ext-to-<strong>S</strong>peech) is an end-to-end
speech synthesis model that predicts a speech waveform conditional on an input text sequence. It is a conditional variational
autoencoder (VAE) comprised of a posterior encoder, decoder, and conditional prior.`,$e,F,Mt=`A set of spectrogram-based acoustic features are predicted by the flow-based module, which is formed of a Transformer-based
text encoder and multiple coupling layers. The spectrogram is decoded using a stack of transposed convolutional layers,
much in the same style as the HiFi-GAN vocoder. Motivated by the one-to-many nature of the TTS problem, where the same text
input can be spoken in multiple ways, the model also includes a stochastic duration predictor, which allows the model to
synthesise speech with different rhythms from the same input text.`,Ie,E,zt=`The model is trained end-to-end with a combination of losses derived from variational lower bound and adversarial training.
To improve the expressiveness of the model, normalizing flows are applied to the conditional prior distribution. During
inference, the text encodings are up-sampled based on the duration prediction module, and then mapped into the
waveform using a cascade of the flow module and HiFi-GAN decoder. Due to the stochastic nature of the duration predictor,
the model is non-deterministic, and thus requires a fixed seed to generate the same speech waveform.`,We,B,Vt="The abstract from the paper is the following:",Ze,L,Jt="<em>Several recent end-to-end text-to-speech (TTS) models enabling single-stage training and parallel sampling have been proposed, but their sample quality does not match that of two-stage TTS systems. In this work, we present a parallel end-to-end TTS method that generates more natural sounding audio than current two-stage models. Our method adopts variational inference augmented with normalizing flows and an adversarial training process, which improves the expressive power of generative modeling. We also propose a stochastic duration predictor to synthesize speech with diverse rhythms from input text. With the uncertainty modeling over latent variables and the stochastic duration predictor, our method expresses the natural one-to-many relationship in which a text input can be spoken in multiple ways with different pitches and rhythms. A subjective human evaluation (mean opinion score, or MOS) on the LJ Speech, a single speaker dataset, shows that our method outperforms the best publicly available TTS systems and achieves a MOS comparable to ground truth.</em>",Ne,S,xt=`This model can also be used with TTS checkpoints from <a href="https://arxiv.org/abs/2305.13516" rel="nofollow">Massively Multilingual Speech (MMS)</a>
as these checkpoints use the same architecture and a slightly modified tokenizer.`,Re,Q,Ct='This model was contributed by <a href="https://huggingface.co/Matthijs" rel="nofollow">Matthijs</a> and <a href="https://huggingface.co/sanchit-gandhi" rel="nofollow">sanchit-gandhi</a>. The original code can be found <a href="https://github.com/jaywalnut310/vits" rel="nofollow">here</a>.',qe,G,He,P,jt=`Both the VITS and MMS-TTS checkpoints can be used with the same API. Since the flow-based model is non-deterministic, it
is good practice to set a seed to ensure reproducibility of the outputs. For languages with a Roman alphabet,
such as English or French, the tokenizer can be used directly to pre-process the text inputs. The following code example
runs a forward pass using the MMS-TTS English checkpoint:`,Xe,A,Fe,Y,Ut="The resulting waveform can be saved as a <code>.wav</code> file:",Ee,D,Be,O,$t="Or displayed in a Jupyter Notebook / Google Colab:",Le,K,Se,ee,It=`For certain languages with a non-Roman alphabet, such as Arabic, Mandarin or Hindi, the <a href="https://github.com/isi-nlp/uroman" rel="nofollow"><code>uroman</code></a>
perl package is required to pre-process the text inputs to the Roman alphabet.`,Qe,te,Wt=`You can check whether you require the <code>uroman</code> package for your language by inspecting the <code>is_uroman</code> attribute of
the pre-trained <code>tokenizer</code>:`,Ge,ne,Pe,oe,Zt=`If required, you should apply the uroman package to your text inputs <strong>prior</strong> to passing them to the <code>VitsTokenizer</code>,
since currently the tokenizer does not support performing the pre-processing itself.`,Ae,se,Nt="To do this, first clone the uroman repository to your local machine and set the bash variable <code>UROMAN</code> to the local path:",Ye,ae,De,re,Rt=`You can then pre-process the text input using the following code snippet. You can either rely on using the bash variable
<code>UROMAN</code> to point to the uroman repository, or you can pass the uroman directory as an argument to the <code>uromaize</code> function:`,Oe,ie,Ke,le,et,M,de,it,be,qt=`This is the configuration class to store the configuration of a <a href="/docs/transformers/main/en/model_doc/vits#transformers.VitsModel">VitsModel</a>. It is used to instantiate a VITS
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the VITS
<a href="https://huggingface.co/facebook/mms-tts-eng" rel="nofollow">facebook/mms-tts-eng</a> architecture.`,lt,ye,Ht=`Configuration objects inherit from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> and can be used to control the model outputs. Read the
documentation from <a href="/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig">PretrainedConfig</a> for more information.`,dt,j,tt,ce,nt,T,me,ct,we,Xt="Construct a VITS tokenizer. Also supports MMS-TTS.",mt,ve,Ft=`This tokenizer inherits from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer">PreTrainedTokenizer</a> which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`,pt,U,pe,ut,Te,Et=`Main method to tokenize and prepare for the model one or several sequence(s) or one or several pair(s) of
sequences.`,ht,ke,ue,ot,he,st,z,fe,ft,Me,Bt=`The complete VITS model, for text-to-speech synthesis.
This model inherits from <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel">PreTrainedModel</a>. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`,gt,ze,Lt=`This model is also a PyTorch <a href="https://pytorch.org/docs/stable/nn.html#torch.nn.Module" rel="nofollow">torch.nn.Module</a> subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`,_t,J,ge,bt,Ve,St='The <a href="/docs/transformers/main/en/model_doc/vits#transformers.VitsModel">VitsModel</a> forward method, overrides the <code>__call__</code> special method.',yt,$,wt,I,at,Ce,rt;return w=new xe({props:{title:"VITS",local:"vits",headingTag:"h1"}}),v=new xe({props:{title:"Overview",local:"overview",headingTag:"h2"}}),G=new xe({props:{title:"Usage examples",local:"usage-examples",headingTag:"h2"}}),A=new q({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwVml0c1Rva2VuaXplciUyQyUyMFZpdHNNb2RlbCUyQyUyMHNldF9zZWVkJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwVml0c1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZtbXMtdHRzLWVuZyUyMiklMEFtb2RlbCUyMCUzRCUyMFZpdHNNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZtbXMtdHRzLWVuZyUyMiklMEElMEFpbnB1dHMlMjAlM0QlMjB0b2tlbml6ZXIodGV4dCUzRCUyMkhlbGxvJTIwLSUyMG15JTIwZG9nJTIwaXMlMjBjdXRlJTIyJTJDJTIwcmV0dXJuX3RlbnNvcnMlM0QlMjJwdCUyMiklMEElMEFzZXRfc2VlZCg1NTUpJTIwJTIwJTIzJTIwbWFrZSUyMGRldGVybWluaXN0aWMlMEElMEF3aXRoJTIwdG9yY2gubm9fZ3JhZCgpJTNBJTBBJTIwJTIwJTIwb3V0cHV0cyUyMCUzRCUyMG1vZGVsKCoqaW5wdXRzKSUwQSUwQXdhdmVmb3JtJTIwJTNEJTIwb3V0cHV0cy53YXZlZm9ybSU1QjAlNUQ=",highlighted:`<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> VitsTokenizer, VitsModel, set_seed

tokenizer = VitsTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mms-tts-eng&quot;</span>)
model = VitsModel.from_pretrained(<span class="hljs-string">&quot;facebook/mms-tts-eng&quot;</span>)

inputs = tokenizer(text=<span class="hljs-string">&quot;Hello - my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

set_seed(<span class="hljs-number">555</span>)  <span class="hljs-comment"># make deterministic</span>

<span class="hljs-keyword">with</span> torch.no_grad():
   outputs = model(**inputs)

waveform = outputs.waveform[<span class="hljs-number">0</span>]`,wrap:!1}}),D=new q({props:{code:"aW1wb3J0JTIwc2NpcHklMEElMEFzY2lweS5pby53YXZmaWxlLndyaXRlKCUyMnRlY2huby53YXYlMjIlMkMlMjByYXRlJTNEbW9kZWwuY29uZmlnLnNhbXBsaW5nX3JhdGUlMkMlMjBkYXRhJTNEd2F2ZWZvcm0p",highlighted:`<span class="hljs-keyword">import</span> scipy

scipy.io.wavfile.write(<span class="hljs-string">&quot;techno.wav&quot;</span>, rate=model.config.sampling_rate, data=waveform)`,wrap:!1}}),K=new q({props:{code:"ZnJvbSUyMElQeXRob24uZGlzcGxheSUyMGltcG9ydCUyMEF1ZGlvJTBBJTBBQXVkaW8od2F2ZWZvcm0lMkMlMjByYXRlJTNEbW9kZWwuY29uZmlnLnNhbXBsaW5nX3JhdGUp",highlighted:`<span class="hljs-keyword">from</span> IPython.display <span class="hljs-keyword">import</span> Audio

Audio(waveform, rate=model.config.sampling_rate)`,wrap:!1}}),ne=new q({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFZpdHNUb2tlbml6ZXIlMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBWaXRzVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJmYWNlYm9vayUyRm1tcy10dHMtZW5nJTIyKSUwQXByaW50KHRva2VuaXplci5pc191cm9tYW4p",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> VitsTokenizer

tokenizer = VitsTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mms-tts-eng&quot;</span>)
<span class="hljs-built_in">print</span>(tokenizer.is_uroman)`,wrap:!1}}),ae=new q({props:{code:"Z2l0JTIwY2xvbmUlMjBodHRwcyUzQSUyRiUyRmdpdGh1Yi5jb20lMkZpc2ktbmxwJTJGdXJvbWFuLmdpdCUwQWNkJTIwdXJvbWFuJTBBZXhwb3J0JTIwVVJPTUFOJTNEJTI0KHB3ZCk=",highlighted:`git <span class="hljs-built_in">clone</span> https://github.com/isi-nlp/uroman.git
<span class="hljs-built_in">cd</span> uroman
<span class="hljs-built_in">export</span> UROMAN=$(<span class="hljs-built_in">pwd</span>)`,wrap:!1}}),ie=new q({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwVml0c1Rva2VuaXplciUyQyUyMFZpdHNNb2RlbCUyQyUyMHNldF9zZWVkJTBBaW1wb3J0JTIwb3MlMEFpbXBvcnQlMjBzdWJwcm9jZXNzJTBBJTBBdG9rZW5pemVyJTIwJTNEJTIwVml0c1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZtbXMtdHRzLWtvciUyMiklMEFtb2RlbCUyMCUzRCUyMFZpdHNNb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyZmFjZWJvb2slMkZtbXMtdHRzLWtvciUyMiklMEElMEFkZWYlMjB1cm9tYW5pemUoaW5wdXRfc3RyaW5nJTJDJTIwdXJvbWFuX3BhdGgpJTNBJTBBJTIwJTIwJTIwJTIwJTIyJTIyJTIyQ29udmVydCUyMG5vbi1Sb21hbiUyMHN0cmluZ3MlMjB0byUyMFJvbWFuJTIwdXNpbmclMjB0aGUlMjAlNjB1cm9tYW4lNjAlMjBwZXJsJTIwcGFja2FnZS4lMjIlMjIlMjIlMEElMjAlMjAlMjAlMjBzY3JpcHRfcGF0aCUyMCUzRCUyMG9zLnBhdGguam9pbih1cm9tYW5fcGF0aCUyQyUyMCUyMmJpbiUyMiUyQyUyMCUyMnVyb21hbi5wbCUyMiklMEElMEElMjAlMjAlMjAlMjBjb21tYW5kJTIwJTNEJTIwJTVCJTIycGVybCUyMiUyQyUyMHNjcmlwdF9wYXRoJTVEJTBBJTBBJTIwJTIwJTIwJTIwcHJvY2VzcyUyMCUzRCUyMHN1YnByb2Nlc3MuUG9wZW4oY29tbWFuZCUyQyUyMHN0ZGluJTNEc3VicHJvY2Vzcy5QSVBFJTJDJTIwc3Rkb3V0JTNEc3VicHJvY2Vzcy5QSVBFJTJDJTIwc3RkZXJyJTNEc3VicHJvY2Vzcy5QSVBFKSUwQSUyMCUyMCUyMCUyMCUyMyUyMEV4ZWN1dGUlMjB0aGUlMjBwZXJsJTIwY29tbWFuZCUwQSUyMCUyMCUyMCUyMHN0ZG91dCUyQyUyMHN0ZGVyciUyMCUzRCUyMHByb2Nlc3MuY29tbXVuaWNhdGUoaW5wdXQlM0RpbnB1dF9zdHJpbmcuZW5jb2RlKCkpJTBBJTBBJTIwJTIwJTIwJTIwaWYlMjBwcm9jZXNzLnJldHVybmNvZGUlMjAhJTNEJTIwMCUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHJhaXNlJTIwVmFsdWVFcnJvcihmJTIyRXJyb3IlMjAlN0Jwcm9jZXNzLnJldHVybmNvZGUlN0QlM0ElMjAlN0JzdGRlcnIuZGVjb2RlKCklN0QlMjIpJTBBJTBBJTIwJTIwJTIwJTIwJTIzJTIwUmV0dXJuJTIwdGhlJTIwb3V0cHV0JTIwYXMlMjBhJTIwc3RyaW5nJTIwYW5kJTIwc2tpcCUyMHRoZSUyMG5ldy1saW5lJTIwY2hhcmFjdGVyJTIwYXQlMjB0aGUlMjBlbmQlMEElMjAlMjAlMjAlMjByZXR1cm4lMjBzdGRvdXQuZGVjb2RlKCklNUIlM0EtMSU1RCUwQSUwQXRleHQlMjAlM0QlMjAlMjIlRUMlOUQlQjQlRUIlQjQlOTAlMjAlRUIlQUMlQjQlRUMlOEElQTglMjAlRUMlOUQlQkMlRUMlOUQlQjQlRUMlOTUlQkMlMjIlMEF1cm9tYWl6ZWRfdGV4dCUyMCUzRCUyMHVyb21hbml6ZSh0ZXh0JTJDJTIwdXJvbWFuX3BhdGglM0Rvcy5lbnZpcm9uJTVCJTIyVVJPTUFOJTIyJTVEKSUwQSUwQWlucHV0cyUyMCUzRCUyMHRva2VuaXplcih0ZXh0JTNEdXJvbWFpemVkX3RleHQlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKSUwQSUwQXNldF9zZWVkKDU1NSklMjAlMjAlMjMlMjBtYWtlJTIwZGV0ZXJtaW5pc3RpYyUwQXdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjBvdXRwdXRzJTIwJTNEJTIwbW9kZWwoaW5wdXRzJTVCJTIyaW5wdXRfaWRzJTIyJTVEKSUwQSUwQXdhdmVmb3JtJTIwJTNEJTIwb3V0cHV0cy53YXZlZm9ybSU1QjAlNUQ=",highlighted:`<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> VitsTokenizer, VitsModel, set_seed
<span class="hljs-keyword">import</span> os
<span class="hljs-keyword">import</span> subprocess

tokenizer = VitsTokenizer.from_pretrained(<span class="hljs-string">&quot;facebook/mms-tts-kor&quot;</span>)
model = VitsModel.from_pretrained(<span class="hljs-string">&quot;facebook/mms-tts-kor&quot;</span>)

<span class="hljs-keyword">def</span> <span class="hljs-title function_">uromanize</span>(<span class="hljs-params">input_string, uroman_path</span>):
    <span class="hljs-string">&quot;&quot;&quot;Convert non-Roman strings to Roman using the \`uroman\` perl package.&quot;&quot;&quot;</span>
    script_path = os.path.join(uroman_path, <span class="hljs-string">&quot;bin&quot;</span>, <span class="hljs-string">&quot;uroman.pl&quot;</span>)

    command = [<span class="hljs-string">&quot;perl&quot;</span>, script_path]

    process = subprocess.Popen(command, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    <span class="hljs-comment"># Execute the perl command</span>
    stdout, stderr = process.communicate(<span class="hljs-built_in">input</span>=input_string.encode())

    <span class="hljs-keyword">if</span> process.returncode != <span class="hljs-number">0</span>:
        <span class="hljs-keyword">raise</span> ValueError(<span class="hljs-string">f&quot;Error <span class="hljs-subst">{process.returncode}</span>: <span class="hljs-subst">{stderr.decode()}</span>&quot;</span>)

    <span class="hljs-comment"># Return the output as a string and skip the new-line character at the end</span>
    <span class="hljs-keyword">return</span> stdout.decode()[:-<span class="hljs-number">1</span>]

text = <span class="hljs-string">&quot;이봐 무슨 일이야&quot;</span>
uromaized_text = uromanize(text, uroman_path=os.environ[<span class="hljs-string">&quot;UROMAN&quot;</span>])

inputs = tokenizer(text=uromaized_text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

set_seed(<span class="hljs-number">555</span>)  <span class="hljs-comment"># make deterministic</span>
<span class="hljs-keyword">with</span> torch.no_grad():
   outputs = model(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])

waveform = outputs.waveform[<span class="hljs-number">0</span>]`,wrap:!1}}),le=new xe({props:{title:"VitsConfig",local:"transformers.VitsConfig",headingTag:"h2"}}),de=new Je({props:{name:"class transformers.VitsConfig",anchor:"transformers.VitsConfig",parameters:[{name:"vocab_size",val:" = 38"},{name:"hidden_size",val:" = 192"},{name:"num_hidden_layers",val:" = 6"},{name:"num_attention_heads",val:" = 2"},{name:"window_size",val:" = 4"},{name:"use_bias",val:" = True"},{name:"ffn_dim",val:" = 768"},{name:"layerdrop",val:" = 0.1"},{name:"ffn_kernel_size",val:" = 3"},{name:"flow_size",val:" = 192"},{name:"spectrogram_bins",val:" = 513"},{name:"hidden_act",val:" = 'relu'"},{name:"hidden_dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"activation_dropout",val:" = 0.1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"use_stochastic_duration_prediction",val:" = True"},{name:"num_speakers",val:" = 1"},{name:"speaker_embedding_size",val:" = 0"},{name:"upsample_initial_channel",val:" = 512"},{name:"upsample_rates",val:" = [8, 8, 2, 2]"},{name:"upsample_kernel_sizes",val:" = [16, 16, 4, 4]"},{name:"resblock_kernel_sizes",val:" = [3, 7, 11]"},{name:"resblock_dilation_sizes",val:" = [[1, 3, 5], [1, 3, 5], [1, 3, 5]]"},{name:"leaky_relu_slope",val:" = 0.1"},{name:"depth_separable_channels",val:" = 2"},{name:"depth_separable_num_layers",val:" = 3"},{name:"duration_predictor_flow_bins",val:" = 10"},{name:"duration_predictor_tail_bound",val:" = 5.0"},{name:"duration_predictor_kernel_size",val:" = 3"},{name:"duration_predictor_dropout",val:" = 0.5"},{name:"duration_predictor_num_flows",val:" = 4"},{name:"duration_predictor_filter_channels",val:" = 256"},{name:"prior_encoder_num_flows",val:" = 4"},{name:"prior_encoder_num_wavenet_layers",val:" = 4"},{name:"posterior_encoder_num_wavenet_layers",val:" = 16"},{name:"wavenet_kernel_size",val:" = 5"},{name:"wavenet_dilation_rate",val:" = 1"},{name:"wavenet_dropout",val:" = 0.0"},{name:"speaking_rate",val:" = 1.0"},{name:"noise_scale",val:" = 0.667"},{name:"noise_scale_duration",val:" = 0.8"},{name:"sampling_rate",val:" = 16000"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VitsConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 38) &#x2014;
Vocabulary size of the VITS model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed to the forward method of <a href="/docs/transformers/main/en/model_doc/vits#transformers.VitsModel">VitsModel</a>.`,name:"vocab_size"},{anchor:"transformers.VitsConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 192) &#x2014;
Dimensionality of the text encoder layers.`,name:"hidden_size"},{anchor:"transformers.VitsConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 6) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.VitsConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.VitsConfig.window_size",description:`<strong>window_size</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
Window size for the relative positional embeddings in the attention layers of the Transformer encoder.`,name:"window_size"},{anchor:"transformers.VitsConfig.use_bias",description:`<strong>use_bias</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use bias in the key, query, value projection layers in the Transformer encoder.`,name:"use_bias"},{anchor:"transformers.VitsConfig.ffn_dim",description:`<strong>ffn_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"ffn_dim"},{anchor:"transformers.VitsConfig.layerdrop",description:`<strong>layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The LayerDrop probability for the encoder. See the [LayerDrop paper](see <a href="https://arxiv.org/abs/1909.11556" rel="nofollow">https://arxiv.org/abs/1909.11556</a>)
for more details.`,name:"layerdrop"},{anchor:"transformers.VitsConfig.ffn_kernel_size",description:`<strong>ffn_kernel_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
Kernel size of the 1D convolution layers used by the feed-forward network in the Transformer encoder.`,name:"ffn_kernel_size"},{anchor:"transformers.VitsConfig.flow_size",description:`<strong>flow_size</strong> (<code>int</code>, <em>optional</em>, defaults to 192) &#x2014;
Dimensionality of the flow layers.`,name:"flow_size"},{anchor:"transformers.VitsConfig.spectrogram_bins",description:`<strong>spectrogram_bins</strong> (<code>int</code>, <em>optional</em>, defaults to 513) &#x2014;
Number of frequency bins in the target spectrogram.`,name:"spectrogram_bins"},{anchor:"transformers.VitsConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;relu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.VitsConfig.hidden_dropout",description:`<strong>hidden_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings and encoder.`,name:"hidden_dropout"},{anchor:"transformers.VitsConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_dropout"},{anchor:"transformers.VitsConfig.activation_dropout",description:`<strong>activation_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for activations inside the fully connected layer.`,name:"activation_dropout"},{anchor:"transformers.VitsConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.VitsConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-05) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.VitsConfig.use_stochastic_duration_prediction",description:`<strong>use_stochastic_duration_prediction</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use the stochastic duration prediction module or the regular duration predictor.`,name:"use_stochastic_duration_prediction"},{anchor:"transformers.VitsConfig.num_speakers",description:`<strong>num_speakers</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Number of speakers if this is a multi-speaker model.`,name:"num_speakers"},{anchor:"transformers.VitsConfig.speaker_embedding_size",description:`<strong>speaker_embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
Number of channels used by the speaker embeddings. Is zero for single-speaker models.`,name:"speaker_embedding_size"},{anchor:"transformers.VitsConfig.upsample_initial_channel",description:`<strong>upsample_initial_channel</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The number of input channels into the HiFi-GAN upsampling network.`,name:"upsample_initial_channel"},{anchor:"transformers.VitsConfig.upsample_rates",description:`<strong>upsample_rates</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>[8, 8, 2, 2]</code>) &#x2014;
A tuple of integers defining the stride of each 1D convolutional layer in the HiFi-GAN upsampling network.
The length of <code>upsample_rates</code> defines the number of convolutional layers and has to match the length of
<code>upsample_kernel_sizes</code>.`,name:"upsample_rates"},{anchor:"transformers.VitsConfig.upsample_kernel_sizes",description:`<strong>upsample_kernel_sizes</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>[16, 16, 4, 4]</code>) &#x2014;
A tuple of integers defining the kernel size of each 1D convolutional layer in the HiFi-GAN upsampling
network. The length of <code>upsample_kernel_sizes</code> defines the number of convolutional layers and has to match
the length of <code>upsample_rates</code>.`,name:"upsample_kernel_sizes"},{anchor:"transformers.VitsConfig.resblock_kernel_sizes",description:`<strong>resblock_kernel_sizes</strong> (<code>Tuple[int]</code> or <code>List[int]</code>, <em>optional</em>, defaults to <code>[3, 7, 11]</code>) &#x2014;
A tuple of integers defining the kernel sizes of the 1D convolutional layers in the HiFi-GAN
multi-receptive field fusion (MRF) module.`,name:"resblock_kernel_sizes"},{anchor:"transformers.VitsConfig.resblock_dilation_sizes",description:`<strong>resblock_dilation_sizes</strong> (<code>Tuple[Tuple[int]]</code> or <code>List[List[int]]</code>, <em>optional</em>, defaults to <code>[[1, 3, 5], [1, 3, 5], [1, 3, 5]]</code>) &#x2014;
A nested tuple of integers defining the dilation rates of the dilated 1D convolutional layers in the
HiFi-GAN multi-receptive field fusion (MRF) module.`,name:"resblock_dilation_sizes"},{anchor:"transformers.VitsConfig.leaky_relu_slope",description:`<strong>leaky_relu_slope</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The angle of the negative slope used by the leaky ReLU activation.`,name:"leaky_relu_slope"},{anchor:"transformers.VitsConfig.depth_separable_channels",description:`<strong>depth_separable_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Number of channels to use in each depth-separable block.`,name:"depth_separable_channels"},{anchor:"transformers.VitsConfig.depth_separable_num_layers",description:`<strong>depth_separable_num_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
Number of convolutional layers to use in each depth-separable block.`,name:"depth_separable_num_layers"},{anchor:"transformers.VitsConfig.duration_predictor_flow_bins",description:`<strong>duration_predictor_flow_bins</strong> (<code>int</code>, <em>optional</em>, defaults to 10) &#x2014;
Number of channels to map using the unonstrained rational spline in the duration predictor model.`,name:"duration_predictor_flow_bins"},{anchor:"transformers.VitsConfig.duration_predictor_tail_bound",description:`<strong>duration_predictor_tail_bound</strong> (<code>float</code>, <em>optional</em>, defaults to 5.0) &#x2014;
Value of the tail bin boundary when computing the unconstrained rational spline in the duration predictor
model.`,name:"duration_predictor_tail_bound"},{anchor:"transformers.VitsConfig.duration_predictor_kernel_size",description:`<strong>duration_predictor_kernel_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
Kernel size of the 1D convolution layers used in the duration predictor model.`,name:"duration_predictor_kernel_size"},{anchor:"transformers.VitsConfig.duration_predictor_dropout",description:`<strong>duration_predictor_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.5) &#x2014;
The dropout ratio for the duration predictor model.`,name:"duration_predictor_dropout"},{anchor:"transformers.VitsConfig.duration_predictor_num_flows",description:`<strong>duration_predictor_num_flows</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
Number of flow stages used by the duration predictor model.`,name:"duration_predictor_num_flows"},{anchor:"transformers.VitsConfig.duration_predictor_filter_channels",description:`<strong>duration_predictor_filter_channels</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Number of channels for the convolution layers used in the duration predictor model.`,name:"duration_predictor_filter_channels"},{anchor:"transformers.VitsConfig.prior_encoder_num_flows",description:`<strong>prior_encoder_num_flows</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
Number of flow stages used by the prior encoder flow model.`,name:"prior_encoder_num_flows"},{anchor:"transformers.VitsConfig.prior_encoder_num_wavenet_layers",description:`<strong>prior_encoder_num_wavenet_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
Number of WaveNet layers used by the prior encoder flow model.`,name:"prior_encoder_num_wavenet_layers"},{anchor:"transformers.VitsConfig.posterior_encoder_num_wavenet_layers",description:`<strong>posterior_encoder_num_wavenet_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of WaveNet layers used by the posterior encoder model.`,name:"posterior_encoder_num_wavenet_layers"},{anchor:"transformers.VitsConfig.wavenet_kernel_size",description:`<strong>wavenet_kernel_size</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
Kernel size of the 1D convolution layers used in the WaveNet model.`,name:"wavenet_kernel_size"},{anchor:"transformers.VitsConfig.wavenet_dilation_rate",description:`<strong>wavenet_dilation_rate</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
Dilation rates of the dilated 1D convolutional layers used in the WaveNet model.`,name:"wavenet_dilation_rate"},{anchor:"transformers.VitsConfig.wavenet_dropout",description:`<strong>wavenet_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout ratio for the WaveNet layers.`,name:"wavenet_dropout"},{anchor:"transformers.VitsConfig.speaking_rate",description:`<strong>speaking_rate</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Speaking rate. Larger values give faster synthesised speech.`,name:"speaking_rate"},{anchor:"transformers.VitsConfig.noise_scale",description:`<strong>noise_scale</strong> (<code>float</code>, <em>optional</em>, defaults to 0.667) &#x2014;
How random the speech prediction is. Larger values create more variation in the predicted speech.`,name:"noise_scale"},{anchor:"transformers.VitsConfig.noise_scale_duration",description:`<strong>noise_scale_duration</strong> (<code>float</code>, <em>optional</em>, defaults to 0.8) &#x2014;
How random the duration prediction is. Larger values create more variation in the predicted durations.`,name:"noise_scale_duration"},{anchor:"transformers.VitsConfig.sampling_rate",description:`<strong>sampling_rate</strong> (<code>int</code>, <em>optional</em>, defaults to 16000) &#x2014;
The sampling rate at which the output audio waveform is digitalized expressed in hertz (Hz).`,name:"sampling_rate"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vits/configuration_vits.py#L29"}}),j=new Gt({props:{anchor:"transformers.VitsConfig.example",$$slots:{default:[en]},$$scope:{ctx:C}}}),ce=new xe({props:{title:"VitsTokenizer",local:"transformers.VitsTokenizer",headingTag:"h2"}}),me=new Je({props:{name:"class transformers.VitsTokenizer",anchor:"transformers.VitsTokenizer",parameters:[{name:"vocab_file",val:""},{name:"pad_token",val:" = '<pad>'"},{name:"unk_token",val:" = '<unk>'"},{name:"language",val:" = None"},{name:"add_blank",val:" = True"},{name:"normalize",val:" = True"},{name:"phonemize",val:" = True"},{name:"is_uroman",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VitsTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.VitsTokenizer.language",description:`<strong>language</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Language identifier.`,name:"language"},{anchor:"transformers.VitsTokenizer.add_blank",description:`<strong>add_blank</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to insert token id 0 in between the other tokens.`,name:"add_blank"},{anchor:"transformers.VitsTokenizer.normalize",description:`<strong>normalize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to normalize the input text by removing all casing and punctuation.`,name:"normalize"},{anchor:"transformers.VitsTokenizer.phonemize",description:`<strong>phonemize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to convert the input text into phonemes.`,name:"phonemize"},{anchor:"transformers.VitsTokenizer.is_uroman",description:`<strong>is_uroman</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether the <code>uroman</code> Romanizer needs to be applied to the input text prior to tokenizing.`,name:"is_uroman"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vits/tokenization_vits.py#L57"}}),pe=new Je({props:{name:"__call__",anchor:"transformers.VitsTokenizer.__call__",parameters:[{name:"text",val:": Union = None"},{name:"text_pair",val:": Union = None"},{name:"text_target",val:": Union = None"},{name:"text_pair_target",val:": Union = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": Union = False"},{name:"truncation",val:": Union = None"},{name:"max_length",val:": Optional = None"},{name:"stride",val:": int = 0"},{name:"is_split_into_words",val:": bool = False"},{name:"pad_to_multiple_of",val:": Optional = None"},{name:"return_tensors",val:": Union = None"},{name:"return_token_type_ids",val:": Optional = None"},{name:"return_attention_mask",val:": Optional = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.VitsTokenizer.__call__.text",description:`<strong>text</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string or a list of strings
(pretokenized string). If the sequences are provided as list of strings (pretokenized), you must set
<code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text"},{anchor:"transformers.VitsTokenizer.__call__.text_pair",description:`<strong>text_pair</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences to be encoded. Each sequence can be a string or a list of strings
(pretokenized string). If the sequences are provided as list of strings (pretokenized), you must set
<code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text_pair"},{anchor:"transformers.VitsTokenizer.__call__.text_target",description:`<strong>text_target</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences to be encoded as target texts. Each sequence can be a string or a
list of strings (pretokenized string). If the sequences are provided as list of strings (pretokenized),
you must set <code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text_target"},{anchor:"transformers.VitsTokenizer.__call__.text_pair_target",description:`<strong>text_pair_target</strong> (<code>str</code>, <code>List[str]</code>, <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
The sequence or batch of sequences to be encoded as target texts. Each sequence can be a string or a
list of strings (pretokenized string). If the sequences are provided as list of strings (pretokenized),
you must set <code>is_split_into_words=True</code> (to lift the ambiguity with a batch of sequences).`,name:"text_pair_target"},{anchor:"transformers.VitsTokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to add special tokens when encoding the sequences. This will use the underlying
<code>PretrainedTokenizerBase.build_inputs_with_special_tokens</code> function, which defines which tokens are
automatically added to the input ids. This is usefull if you want to add <code>bos</code> or <code>eos</code> tokens
automatically.`,name:"add_special_tokens"},{anchor:"transformers.VitsTokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.VitsTokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.tokenization_utils_base.TruncationStrategy">TruncationStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
</ul>`,name:"truncation"},{anchor:"transformers.VitsTokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.VitsTokenizer.__call__.stride",description:`<strong>stride</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
If set to a number along with <code>max_length</code>, the overflowing tokens returned when
<code>return_overflowing_tokens=True</code> will contain some tokens from the end of the truncated sequence
returned to provide some overlap between truncated and overflowing sequences. The value of this
argument defines the number of overlapping tokens.`,name:"stride"},{anchor:"transformers.VitsTokenizer.__call__.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.VitsTokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. Requires <code>padding</code> to be activated.
This is especially useful to enable the use of Tensor Cores on NVIDIA hardware with compute capability
<code>&gt;= 7.5</code> (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.VitsTokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/main/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"},{anchor:"transformers.VitsTokenizer.__call__.return_token_type_ids",description:`<strong>return_token_type_ids</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return token type IDs. If left to the default, will return the token type IDs according to
the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"return_token_type_ids"},{anchor:"transformers.VitsTokenizer.__call__.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to return the attention mask. If left to the default, will return the attention mask according
to the specific tokenizer&#x2019;s default, defined by the <code>return_outputs</code> attribute.</p>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"return_attention_mask"},{anchor:"transformers.VitsTokenizer.__call__.return_overflowing_tokens",description:`<strong>return_overflowing_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return overflowing token sequences. If a pair of sequences of input ids (or a batch
of pairs) is provided with <code>truncation_strategy = longest_first</code> or <code>True</code>, an error is raised instead
of returning overflowing tokens.`,name:"return_overflowing_tokens"},{anchor:"transformers.VitsTokenizer.__call__.return_special_tokens_mask",description:`<strong>return_special_tokens_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return special tokens mask information.`,name:"return_special_tokens_mask"},{anchor:"transformers.VitsTokenizer.__call__.return_offsets_mapping",description:`<strong>return_offsets_mapping</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return <code>(char_start, char_end)</code> for each token.</p>
<p>This is only available on fast tokenizers inheriting from <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast">PreTrainedTokenizerFast</a>, if using
Python&#x2019;s tokenizer, this method will raise <code>NotImplementedError</code>.`,name:"return_offsets_mapping"},{anchor:"transformers.VitsTokenizer.__call__.return_length",description:`<strong>return_length</strong>  (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to return the lengths of the encoded inputs.`,name:"return_length"},{anchor:"transformers.VitsTokenizer.__call__.verbose",description:`<strong>verbose</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
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
`}}),ue=new Je({props:{name:"save_vocabulary",anchor:"transformers.VitsTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vits/tokenization_vits.py#L238"}}),he=new xe({props:{title:"VitsModel",local:"transformers.VitsModel",headingTag:"h2"}}),fe=new Je({props:{name:"class transformers.VitsModel",anchor:"transformers.VitsModel",parameters:[{name:"config",val:": VitsConfig"}],parametersDescription:[{anchor:"transformers.VitsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/vits#transformers.VitsConfig">VitsConfig</a>) &#x2014;
Model configuration class with all the parameters of the model. Initializing with a config file does not
load the weights associated with the model, only the configuration. Check out the
<a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vits/modeling_vits.py#L1326"}}),ge=new Je({props:{name:"forward",anchor:"transformers.VitsModel.forward",parameters:[{name:"input_ids",val:": Optional = None"},{name:"attention_mask",val:": Optional = None"},{name:"speaker_id",val:": Optional = None"},{name:"output_attentions",val:": Optional = None"},{name:"output_hidden_states",val:": Optional = None"},{name:"return_dict",val:": Optional = None"},{name:"labels",val:": Optional = None"}],parametersDescription:[{anchor:"transformers.VitsModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Padding will be ignored by default should you provide
it.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/fastspeech2_conformer#transformers.FastSpeech2ConformerTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.VitsModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing convolution and attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.VitsModel.forward.speaker_id",description:`<strong>speaker_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Which speaker embedding to use. Only used for multispeaker models.`,name:"speaker_id"},{anchor:"transformers.VitsModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.VitsModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.VitsModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.VitsModel.forward.labels",description:`<strong>labels</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.spectrogram_bins, sequence_length)</code>, <em>optional</em>) &#x2014;
Float values of target spectrogram. Timesteps set to <code>-100.0</code> are ignored (masked) for the loss
computation.`,name:"labels"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/models/vits/modeling_vits.py#L1360",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A <code>transformers.models.vits.modeling_vits.VitsModelOutput</code> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/vits#transformers.VitsConfig"
>VitsConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>waveform</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) — The final audio waveform predicted by the model.</p>
</li>
<li>
<p><strong>sequence_lengths</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size,)</code>) — The length in samples of each element in the <code>waveform</code> batch.</p>
</li>
<li>
<p><strong>spectrogram</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, num_bins)</code>) — The log-mel spectrogram predicted at the output of the flow model. This spectrogram is passed to the Hi-Fi
GAN decoder model to obtain the final audio waveform.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) — Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attention weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>transformers.models.vits.modeling_vits.VitsModelOutput</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$=new Kt({props:{$$slots:{default:[tn]},$$scope:{ctx:C}}}),I=new Gt({props:{anchor:"transformers.VitsModel.forward.example",$$slots:{default:[nn]},$$scope:{ctx:C}}}),{c(){d=r("meta"),k=s(),y=r("p"),b=s(),p(w.$$.fragment),l=s(),p(v.$$.fragment),je=s(),H=r("p"),H.innerHTML=Tt,Ue=s(),X=r("p"),X.innerHTML=kt,$e=s(),F=r("p"),F.textContent=Mt,Ie=s(),E=r("p"),E.textContent=zt,We=s(),B=r("p"),B.textContent=Vt,Ze=s(),L=r("p"),L.innerHTML=Jt,Ne=s(),S=r("p"),S.innerHTML=xt,Re=s(),Q=r("p"),Q.innerHTML=Ct,qe=s(),p(G.$$.fragment),He=s(),P=r("p"),P.textContent=jt,Xe=s(),p(A.$$.fragment),Fe=s(),Y=r("p"),Y.innerHTML=Ut,Ee=s(),p(D.$$.fragment),Be=s(),O=r("p"),O.textContent=$t,Le=s(),p(K.$$.fragment),Se=s(),ee=r("p"),ee.innerHTML=It,Qe=s(),te=r("p"),te.innerHTML=Wt,Ge=s(),p(ne.$$.fragment),Pe=s(),oe=r("p"),oe.innerHTML=Zt,Ae=s(),se=r("p"),se.innerHTML=Nt,Ye=s(),p(ae.$$.fragment),De=s(),re=r("p"),re.innerHTML=Rt,Oe=s(),p(ie.$$.fragment),Ke=s(),p(le.$$.fragment),et=s(),M=r("div"),p(de.$$.fragment),it=s(),be=r("p"),be.innerHTML=qt,lt=s(),ye=r("p"),ye.innerHTML=Ht,dt=s(),p(j.$$.fragment),tt=s(),p(ce.$$.fragment),nt=s(),T=r("div"),p(me.$$.fragment),ct=s(),we=r("p"),we.textContent=Xt,mt=s(),ve=r("p"),ve.innerHTML=Ft,pt=s(),U=r("div"),p(pe.$$.fragment),ut=s(),Te=r("p"),Te.textContent=Et,ht=s(),ke=r("div"),p(ue.$$.fragment),ot=s(),p(he.$$.fragment),st=s(),z=r("div"),p(fe.$$.fragment),ft=s(),Me=r("p"),Me.innerHTML=Bt,gt=s(),ze=r("p"),ze.innerHTML=Lt,_t=s(),J=r("div"),p(ge.$$.fragment),bt=s(),Ve=r("p"),Ve.innerHTML=St,yt=s(),p($.$$.fragment),wt=s(),p(I.$$.fragment),at=s(),Ce=r("p"),this.h()},l(e){const t=Ot("svelte-u9bgzb",document.head);d=i(t,"META",{name:!0,content:!0}),t.forEach(n),k=a(e),y=i(e,"P",{}),N(y).forEach(n),b=a(e),u(w.$$.fragment,e),l=a(e),u(v.$$.fragment,e),je=a(e),H=i(e,"P",{"data-svelte-h":!0}),c(H)!=="svelte-1843zcg"&&(H.innerHTML=Tt),Ue=a(e),X=i(e,"P",{"data-svelte-h":!0}),c(X)!=="svelte-tb18uu"&&(X.innerHTML=kt),$e=a(e),F=i(e,"P",{"data-svelte-h":!0}),c(F)!=="svelte-niuxot"&&(F.textContent=Mt),Ie=a(e),E=i(e,"P",{"data-svelte-h":!0}),c(E)!=="svelte-1qg7ygc"&&(E.textContent=zt),We=a(e),B=i(e,"P",{"data-svelte-h":!0}),c(B)!=="svelte-vfdo9a"&&(B.textContent=Vt),Ze=a(e),L=i(e,"P",{"data-svelte-h":!0}),c(L)!=="svelte-2k481d"&&(L.innerHTML=Jt),Ne=a(e),S=i(e,"P",{"data-svelte-h":!0}),c(S)!=="svelte-1fq9wh5"&&(S.innerHTML=xt),Re=a(e),Q=i(e,"P",{"data-svelte-h":!0}),c(Q)!=="svelte-1svcgd6"&&(Q.innerHTML=Ct),qe=a(e),u(G.$$.fragment,e),He=a(e),P=i(e,"P",{"data-svelte-h":!0}),c(P)!=="svelte-1y4n4h"&&(P.textContent=jt),Xe=a(e),u(A.$$.fragment,e),Fe=a(e),Y=i(e,"P",{"data-svelte-h":!0}),c(Y)!=="svelte-1wosc4r"&&(Y.innerHTML=Ut),Ee=a(e),u(D.$$.fragment,e),Be=a(e),O=i(e,"P",{"data-svelte-h":!0}),c(O)!=="svelte-1es17w7"&&(O.textContent=$t),Le=a(e),u(K.$$.fragment,e),Se=a(e),ee=i(e,"P",{"data-svelte-h":!0}),c(ee)!=="svelte-yzebxy"&&(ee.innerHTML=It),Qe=a(e),te=i(e,"P",{"data-svelte-h":!0}),c(te)!=="svelte-19haabz"&&(te.innerHTML=Wt),Ge=a(e),u(ne.$$.fragment,e),Pe=a(e),oe=i(e,"P",{"data-svelte-h":!0}),c(oe)!=="svelte-y9ddjb"&&(oe.innerHTML=Zt),Ae=a(e),se=i(e,"P",{"data-svelte-h":!0}),c(se)!=="svelte-14ycm1z"&&(se.innerHTML=Nt),Ye=a(e),u(ae.$$.fragment,e),De=a(e),re=i(e,"P",{"data-svelte-h":!0}),c(re)!=="svelte-d0ppi5"&&(re.innerHTML=Rt),Oe=a(e),u(ie.$$.fragment,e),Ke=a(e),u(le.$$.fragment,e),et=a(e),M=i(e,"DIV",{class:!0});var x=N(M);u(de.$$.fragment,x),it=a(x),be=i(x,"P",{"data-svelte-h":!0}),c(be)!=="svelte-517veh"&&(be.innerHTML=qt),lt=a(x),ye=i(x,"P",{"data-svelte-h":!0}),c(ye)!=="svelte-o55m63"&&(ye.innerHTML=Ht),dt=a(x),u(j.$$.fragment,x),x.forEach(n),tt=a(e),u(ce.$$.fragment,e),nt=a(e),T=i(e,"DIV",{class:!0});var V=N(T);u(me.$$.fragment,V),ct=a(V),we=i(V,"P",{"data-svelte-h":!0}),c(we)!=="svelte-7pjy9f"&&(we.textContent=Xt),mt=a(V),ve=i(V,"P",{"data-svelte-h":!0}),c(ve)!=="svelte-1c3t5ty"&&(ve.innerHTML=Ft),pt=a(V),U=i(V,"DIV",{class:!0});var _e=N(U);u(pe.$$.fragment,_e),ut=a(_e),Te=i(_e,"P",{"data-svelte-h":!0}),c(Te)!=="svelte-kpxj0c"&&(Te.textContent=Et),_e.forEach(n),ht=a(V),ke=i(V,"DIV",{class:!0});var Qt=N(ke);u(ue.$$.fragment,Qt),Qt.forEach(n),V.forEach(n),ot=a(e),u(he.$$.fragment,e),st=a(e),z=i(e,"DIV",{class:!0});var W=N(z);u(fe.$$.fragment,W),ft=a(W),Me=i(W,"P",{"data-svelte-h":!0}),c(Me)!=="svelte-1es87hk"&&(Me.innerHTML=Bt),gt=a(W),ze=i(W,"P",{"data-svelte-h":!0}),c(ze)!=="svelte-hswkmf"&&(ze.innerHTML=Lt),_t=a(W),J=i(W,"DIV",{class:!0});var Z=N(J);u(ge.$$.fragment,Z),bt=a(Z),Ve=i(Z,"P",{"data-svelte-h":!0}),c(Ve)!=="svelte-ln6odr"&&(Ve.innerHTML=St),yt=a(Z),u($.$$.fragment,Z),wt=a(Z),u(I.$$.fragment,Z),Z.forEach(n),W.forEach(n),at=a(e),Ce=i(e,"P",{}),N(Ce).forEach(n),this.h()},h(){R(d,"name","hf:doc:metadata"),R(d,"content",sn),R(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),R(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),R(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),R(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),R(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),R(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,t){m(document.head,d),o(e,k,t),o(e,y,t),o(e,b,t),h(w,e,t),o(e,l,t),h(v,e,t),o(e,je,t),o(e,H,t),o(e,Ue,t),o(e,X,t),o(e,$e,t),o(e,F,t),o(e,Ie,t),o(e,E,t),o(e,We,t),o(e,B,t),o(e,Ze,t),o(e,L,t),o(e,Ne,t),o(e,S,t),o(e,Re,t),o(e,Q,t),o(e,qe,t),h(G,e,t),o(e,He,t),o(e,P,t),o(e,Xe,t),h(A,e,t),o(e,Fe,t),o(e,Y,t),o(e,Ee,t),h(D,e,t),o(e,Be,t),o(e,O,t),o(e,Le,t),h(K,e,t),o(e,Se,t),o(e,ee,t),o(e,Qe,t),o(e,te,t),o(e,Ge,t),h(ne,e,t),o(e,Pe,t),o(e,oe,t),o(e,Ae,t),o(e,se,t),o(e,Ye,t),h(ae,e,t),o(e,De,t),o(e,re,t),o(e,Oe,t),h(ie,e,t),o(e,Ke,t),h(le,e,t),o(e,et,t),o(e,M,t),h(de,M,null),m(M,it),m(M,be),m(M,lt),m(M,ye),m(M,dt),h(j,M,null),o(e,tt,t),h(ce,e,t),o(e,nt,t),o(e,T,t),h(me,T,null),m(T,ct),m(T,we),m(T,mt),m(T,ve),m(T,pt),m(T,U),h(pe,U,null),m(U,ut),m(U,Te),m(T,ht),m(T,ke),h(ue,ke,null),o(e,ot,t),h(he,e,t),o(e,st,t),o(e,z,t),h(fe,z,null),m(z,ft),m(z,Me),m(z,gt),m(z,ze),m(z,_t),m(z,J),h(ge,J,null),m(J,bt),m(J,Ve),m(J,yt),h($,J,null),m(J,wt),h(I,J,null),o(e,at,t),o(e,Ce,t),rt=!0},p(e,[t]){const x={};t&2&&(x.$$scope={dirty:t,ctx:e}),j.$set(x);const V={};t&2&&(V.$$scope={dirty:t,ctx:e}),$.$set(V);const _e={};t&2&&(_e.$$scope={dirty:t,ctx:e}),I.$set(_e)},i(e){rt||(f(w.$$.fragment,e),f(v.$$.fragment,e),f(G.$$.fragment,e),f(A.$$.fragment,e),f(D.$$.fragment,e),f(K.$$.fragment,e),f(ne.$$.fragment,e),f(ae.$$.fragment,e),f(ie.$$.fragment,e),f(le.$$.fragment,e),f(de.$$.fragment,e),f(j.$$.fragment,e),f(ce.$$.fragment,e),f(me.$$.fragment,e),f(pe.$$.fragment,e),f(ue.$$.fragment,e),f(he.$$.fragment,e),f(fe.$$.fragment,e),f(ge.$$.fragment,e),f($.$$.fragment,e),f(I.$$.fragment,e),rt=!0)},o(e){g(w.$$.fragment,e),g(v.$$.fragment,e),g(G.$$.fragment,e),g(A.$$.fragment,e),g(D.$$.fragment,e),g(K.$$.fragment,e),g(ne.$$.fragment,e),g(ae.$$.fragment,e),g(ie.$$.fragment,e),g(le.$$.fragment,e),g(de.$$.fragment,e),g(j.$$.fragment,e),g(ce.$$.fragment,e),g(me.$$.fragment,e),g(pe.$$.fragment,e),g(ue.$$.fragment,e),g(he.$$.fragment,e),g(fe.$$.fragment,e),g(ge.$$.fragment,e),g($.$$.fragment,e),g(I.$$.fragment,e),rt=!1},d(e){e&&(n(k),n(y),n(b),n(l),n(je),n(H),n(Ue),n(X),n($e),n(F),n(Ie),n(E),n(We),n(B),n(Ze),n(L),n(Ne),n(S),n(Re),n(Q),n(qe),n(He),n(P),n(Xe),n(Fe),n(Y),n(Ee),n(Be),n(O),n(Le),n(Se),n(ee),n(Qe),n(te),n(Ge),n(Pe),n(oe),n(Ae),n(se),n(Ye),n(De),n(re),n(Oe),n(Ke),n(et),n(M),n(tt),n(nt),n(T),n(ot),n(st),n(z),n(at),n(Ce)),n(d),_(w,e),_(v,e),_(G,e),_(A,e),_(D,e),_(K,e),_(ne,e),_(ae,e),_(ie,e),_(le,e),_(de),_(j),_(ce,e),_(me),_(pe),_(ue),_(he,e),_(fe),_(ge),_($),_(I)}}}const sn='{"title":"VITS","local":"vits","sections":[{"title":"Overview","local":"overview","sections":[],"depth":2},{"title":"Usage examples","local":"usage-examples","sections":[],"depth":2},{"title":"VitsConfig","local":"transformers.VitsConfig","sections":[],"depth":2},{"title":"VitsTokenizer","local":"transformers.VitsTokenizer","sections":[],"depth":2},{"title":"VitsModel","local":"transformers.VitsModel","sections":[],"depth":2}],"depth":1}';function an(C){return At(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class hn extends Yt{constructor(d){super(),Dt(this,d,an,on,Pt,{})}}export{hn as component};
