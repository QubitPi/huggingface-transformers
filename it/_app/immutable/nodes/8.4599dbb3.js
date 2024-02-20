import{s as Ke,o as et,n as tt}from"../chunks/scheduler.36a0863c.js";import{S as lt,i as nt,g as a,s as i,r as c,A as it,h as s,f as l,c as o,j as ze,u as T,x as r,k as qe,y as ot,a as n,v as m,d as f,t as d,w as _}from"../chunks/index.9c13489a.js";import{T as at}from"../chunks/Tip.3b06990e.js";import{C as K}from"../chunks/CodeBlock.05d8ec32.js";import{H as $}from"../chunks/Heading.7a254a62.js";function st(te){let p,y=`A partire dalla versione 2.3.0 lo script di conversione è parte di transformers CLI (<strong>transformers-cli</strong>), disponibile in ogni installazione
di transformers &gt;=2.3.0.`,J,u,M="La seguente documentazione riflette il formato dei comandi di <strong>transformers-cli convert</strong>.";return{c(){p=a("p"),p.innerHTML=y,J=i(),u=a("p"),u.innerHTML=M},l(U){p=s(U,"P",{"data-svelte-h":!0}),r(p)!=="svelte-pno2uk"&&(p.innerHTML=y),J=o(U),u=s(U,"P",{"data-svelte-h":!0}),r(u)!=="svelte-10735wn"&&(u.innerHTML=M)},m(U,h){n(U,p,h),n(U,J,h),n(U,u,h)},p:tt,d(U){U&&(l(p),l(J),l(u))}}}function rt(te){let p,y,J,u,M,U,h,Fe=`È disponibile un’interfaccia a linea di comando per convertire gli originali checkpoint di Bert/GPT/GPT-2/Transformer-XL/XLNet/XLM
in modelli che possono essere caricati utilizzando i metodi <code>from_pretrained</code> della libreria.`,le,b,ne,w,ie,v,Ne=`Puoi convertire qualunque checkpoint Tensorflow di BERT (in particolare
<a href="https://github.com/google-research/bert#pre-trained-models" rel="nofollow">i modeli pre-allenati rilasciati da Google</a>)
in un file di salvataggio Pytorch utilizzando lo script
<a href="https://github.com/huggingface/transformers/tree/main/src/transformers/models/bert/convert_bert_original_tf_checkpoint_to_pytorch.py" rel="nofollow">convert_bert_original_tf_checkpoint_to_pytorch.py</a>.`,oe,V,Xe=`Questo CLI prende come input un checkpoint di Tensorflow (tre files che iniziano con <code>bert_model.ckpt</code>) ed il relativo
file di configurazione (<code>bert_config.json</code>), crea un modello Pytorch per questa configurazione, carica i pesi dal
checkpoint di Tensorflow nel modello di Pytorch e salva il modello che ne risulta in un file di salvataggio standard di Pytorch che
può essere importato utilizzando <code>from_pretrained()</code> (vedi l’esempio nel
<a href="quicktour">quicktour</a> , <a href="https://github.com/huggingface/transformers/tree/main/examples/pytorch/text-classification/run_glue.py" rel="nofollow">run_glue.py</a> ).`,ae,R,ke=`Devi soltanto lanciare questo script di conversione <strong>una volta</strong> per ottenere un modello Pytorch. Dopodichè, potrai tralasciare
il checkpoint di Tensorflow (i tre files che iniziano con <code>bert_model.ckpt</code>), ma assicurati di tenere il file di configurazione
(<code>bert_config.json</code>) ed il file di vocabolario (<code>vocab.txt</code>) in quanto queste componenti sono necessarie anche per il modello di Pytorch.`,se,C,Le=`Per lanciare questo specifico script di conversione avrai bisogno di un’installazione di Tensorflow e di Pytorch
(<code>pip install tensorflow</code>). Il resto della repository richiede soltanto Pytorch.`,re,E,je="Questo è un esempio del processo di conversione per un modello <code>BERT-Base Uncased</code> pre-allenato:",pe,I,ce,g,Se='Puoi scaricare i modelli pre-allenati di Google per la conversione <a href="https://github.com/google-research/bert#pre-trained-models" rel="nofollow">qua</a>.',Te,B,me,P,Ae=`Per il modello ALBERT, converti checkpoint di Tensoflow in Pytorch utilizzando lo script
<a href="https://github.com/huggingface/transformers/tree/main/src/transformers/models/albert/convert_albert_original_tf_checkpoint_to_pytorch.py" rel="nofollow">convert_albert_original_tf_checkpoint_to_pytorch.py</a>.`,fe,F,Ze=`Il CLI prende come input un checkpoint di Tensorflow (tre files che iniziano con <code>model.ckpt-best</code>) e i relativi file di
configurazione (<code>albert_config.json</code>), dopodichè crea e salva un modello Pytorch. Per lanciare questa conversione
avrai bisogno di un’installazione di Tensorflow e di Pytorch.`,de,N,Ge="Ecco un esempio del procedimento di conversione di un modello <code>ALBERT Base</code> pre-allenato:",_e,X,Ue,k,He='Puoi scaricare i modelli pre-allenati di Google per la conversione <a href="https://github.com/google-research/albert#pre-trained-models" rel="nofollow">qui</a>.',ue,L,he,j,Qe=`Ecco un esempio del processo di conversione di un modello OpenAI GPT pre-allenato, assumendo che il tuo checkpoint di NumPy
sia salvato nello stesso formato dei modelli pre-allenati OpenAI (vedi <a href="https://github.com/openai/finetune-transformer-lm" rel="nofollow">qui</a>):`,Je,S,Me,A,be,Z,xe='Ecco un esempio del processo di conversione di un modello OpenAI GPT-2 pre-allenato (vedi <a href="https://github.com/openai/gpt-2" rel="nofollow">qui</a>):',$e,G,ye,H,we,Q,We="Ecco un esempio del processo di conversione di un modello XLNet pre-allenato:",ve,x,Ve,W,Re,O,Oe="Ecco un esempio del processo di conversione di un modello XLM pre-allenato:",Ce,D,Ee,Y,Ie,z,De="Ecco un esempio del processo di conversione di un modello T5 pre-allenato:",ge,q,Be,ee,Pe;return M=new $({props:{title:"Convertire checkpoint di Tensorflow",local:"convertire-checkpoint-di-tensorflow",headingTag:"h1"}}),b=new at({props:{$$slots:{default:[st]},$$scope:{ctx:te}}}),w=new $({props:{title:"BERT",local:"bert",headingTag:"h2"}}),I=new K({props:{code:"ZXhwb3J0JTIwQkVSVF9CQVNFX0RJUiUzRCUyRnBhdGglMkZ0byUyRmJlcnQlMkZ1bmNhc2VkX0wtMTJfSC03NjhfQS0xMiUwQXRyYW5zZm9ybWVycy1jbGklMjBjb252ZXJ0JTIwLS1tb2RlbF90eXBlJTIwYmVydCUyMCU1QyUwQSUyMCUyMC0tdGZfY2hlY2twb2ludCUyMCUyNEJFUlRfQkFTRV9ESVIlMkZiZXJ0X21vZGVsLmNrcHQlMjAlNUMlMEElMjAlMjAtLWNvbmZpZyUyMCUyNEJFUlRfQkFTRV9ESVIlMkZiZXJ0X2NvbmZpZy5qc29uJTIwJTVDJTBBJTIwJTIwLS1weXRvcmNoX2R1bXBfb3V0cHV0JTIwJTI0QkVSVF9CQVNFX0RJUiUyRnB5dG9yY2hfbW9kZWwuYmlu",highlighted:`<span class="hljs-built_in">export</span> BERT_BASE_DIR=/path/to/bert/uncased_L-12_H-768_A-12
transformers-cli convert --model_type bert \\
  --tf_checkpoint <span class="hljs-variable">$BERT_BASE_DIR</span>/bert_model.ckpt \\
  --config <span class="hljs-variable">$BERT_BASE_DIR</span>/bert_config.json \\
  --pytorch_dump_output <span class="hljs-variable">$BERT_BASE_DIR</span>/pytorch_model.bin`,wrap:!1}}),B=new $({props:{title:"ALBERT",local:"albert",headingTag:"h2"}}),X=new K({props:{code:"ZXhwb3J0JTIwQUxCRVJUX0JBU0VfRElSJTNEJTJGcGF0aCUyRnRvJTJGYWxiZXJ0JTJGYWxiZXJ0X2Jhc2UlMEF0cmFuc2Zvcm1lcnMtY2xpJTIwY29udmVydCUyMC0tbW9kZWxfdHlwZSUyMGFsYmVydCUyMCU1QyUwQSUyMCUyMC0tdGZfY2hlY2twb2ludCUyMCUyNEFMQkVSVF9CQVNFX0RJUiUyRm1vZGVsLmNrcHQtYmVzdCUyMCU1QyUwQSUyMCUyMC0tY29uZmlnJTIwJTI0QUxCRVJUX0JBU0VfRElSJTJGYWxiZXJ0X2NvbmZpZy5qc29uJTIwJTVDJTBBJTIwJTIwLS1weXRvcmNoX2R1bXBfb3V0cHV0JTIwJTI0QUxCRVJUX0JBU0VfRElSJTJGcHl0b3JjaF9tb2RlbC5iaW4=",highlighted:`<span class="hljs-built_in">export</span> ALBERT_BASE_DIR=/path/to/albert/albert_base
transformers-cli convert --model_type albert \\
  --tf_checkpoint <span class="hljs-variable">$ALBERT_BASE_DIR</span>/model.ckpt-best \\
  --config <span class="hljs-variable">$ALBERT_BASE_DIR</span>/albert_config.json \\
  --pytorch_dump_output <span class="hljs-variable">$ALBERT_BASE_DIR</span>/pytorch_model.bin`,wrap:!1}}),L=new $({props:{title:"OpenAI GPT",local:"openai-gpt",headingTag:"h2"}}),S=new K({props:{code:"ZXhwb3J0JTIwT1BFTkFJX0dQVF9DSEVDS1BPSU5UX0ZPTERFUl9QQVRIJTNEJTJGcGF0aCUyRnRvJTJGb3BlbmFpJTJGcHJldHJhaW5lZCUyRm51bXB5JTJGd2VpZ2h0cyUwQXRyYW5zZm9ybWVycy1jbGklMjBjb252ZXJ0JTIwLS1tb2RlbF90eXBlJTIwZ3B0JTIwJTVDJTBBJTIwJTIwLS10Zl9jaGVja3BvaW50JTIwJTI0T1BFTkFJX0dQVF9DSEVDS1BPSU5UX0ZPTERFUl9QQVRIJTIwJTVDJTBBJTIwJTIwLS1weXRvcmNoX2R1bXBfb3V0cHV0JTIwJTI0UFlUT1JDSF9EVU1QX09VVFBVVCUyMCU1QyUwQSUyMCUyMCU1Qi0tY29uZmlnJTIwT1BFTkFJX0dQVF9DT05GSUclNUQlMjAlNUMlMEElMjAlMjAlNUItLWZpbmV0dW5pbmdfdGFza19uYW1lJTIwT1BFTkFJX0dQVF9GSU5FVFVORURfVEFTSyU1RCUyMCU1Qw==",highlighted:`<span class="hljs-built_in">export</span> OPENAI_GPT_CHECKPOINT_FOLDER_PATH=/path/to/openai/pretrained/numpy/weights
transformers-cli convert --model_type gpt \\
  --tf_checkpoint <span class="hljs-variable">$OPENAI_GPT_CHECKPOINT_FOLDER_PATH</span> \\
  --pytorch_dump_output <span class="hljs-variable">$PYTORCH_DUMP_OUTPUT</span> \\
  [--config OPENAI_GPT_CONFIG] \\
  [--finetuning_task_name OPENAI_GPT_FINETUNED_TASK] \\`,wrap:!1}}),A=new $({props:{title:"OpenAI GPT-2",local:"openai-gpt-2",headingTag:"h2"}}),G=new K({props:{code:"ZXhwb3J0JTIwT1BFTkFJX0dQVDJfQ0hFQ0tQT0lOVF9QQVRIJTNEJTJGcGF0aCUyRnRvJTJGb3BlbmFpLWNvbW11bml0eSUyRmdwdDIlMkZwcmV0cmFpbmVkJTJGd2VpZ2h0cyUwQXRyYW5zZm9ybWVycy1jbGklMjBjb252ZXJ0JTIwLS1tb2RlbF90eXBlJTIwb3BlbmFpLWNvbW11bml0eSUyRmdwdDIlMjAlNUMlMEElMjAlMjAtLXRmX2NoZWNrcG9pbnQlMjAlMjRPUEVOQUlfR1BUMl9DSEVDS1BPSU5UX1BBVEglMjAlNUMlMEElMjAlMjAtLXB5dG9yY2hfZHVtcF9vdXRwdXQlMjAlMjRQWVRPUkNIX0RVTVBfT1VUUFVUJTIwJTVDJTBBJTIwJTIwJTVCLS1jb25maWclMjBPUEVOQUlfR1BUMl9DT05GSUclNUQlMjAlNUMlMEElMjAlMjAlNUItLWZpbmV0dW5pbmdfdGFza19uYW1lJTIwT1BFTkFJX0dQVDJfRklORVRVTkVEX1RBU0slNUQ=",highlighted:`<span class="hljs-built_in">export</span> OPENAI_GPT2_CHECKPOINT_PATH=/path/to/openai-community/gpt2/pretrained/weights
transformers-cli convert --model_type openai-community/gpt2 \\
  --tf_checkpoint <span class="hljs-variable">$OPENAI_GPT2_CHECKPOINT_PATH</span> \\
  --pytorch_dump_output <span class="hljs-variable">$PYTORCH_DUMP_OUTPUT</span> \\
  [--config OPENAI_GPT2_CONFIG] \\
  [--finetuning_task_name OPENAI_GPT2_FINETUNED_TASK]`,wrap:!1}}),H=new $({props:{title:"XLNet",local:"xlnet",headingTag:"h2"}}),x=new K({props:{code:"ZXhwb3J0JTIwVFJBTlNGT19YTF9DSEVDS1BPSU5UX1BBVEglM0QlMkZwYXRoJTJGdG8lMkZ4bG5ldCUyRmNoZWNrcG9pbnQlMEFleHBvcnQlMjBUUkFOU0ZPX1hMX0NPTkZJR19QQVRIJTNEJTJGcGF0aCUyRnRvJTJGeGxuZXQlMkZjb25maWclMEF0cmFuc2Zvcm1lcnMtY2xpJTIwY29udmVydCUyMC0tbW9kZWxfdHlwZSUyMHhsbmV0JTIwJTVDJTBBJTIwJTIwLS10Zl9jaGVja3BvaW50JTIwJTI0VFJBTlNGT19YTF9DSEVDS1BPSU5UX1BBVEglMjAlNUMlMEElMjAlMjAtLWNvbmZpZyUyMCUyNFRSQU5TRk9fWExfQ09ORklHX1BBVEglMjAlNUMlMEElMjAlMjAtLXB5dG9yY2hfZHVtcF9vdXRwdXQlMjAlMjRQWVRPUkNIX0RVTVBfT1VUUFVUJTIwJTVDJTBBJTIwJTIwJTVCLS1maW5ldHVuaW5nX3Rhc2tfbmFtZSUyMFhMTkVUX0ZJTkVUVU5FRF9UQVNLJTVEJTIwJTVD",highlighted:`<span class="hljs-built_in">export</span> TRANSFO_XL_CHECKPOINT_PATH=/path/to/xlnet/checkpoint
<span class="hljs-built_in">export</span> TRANSFO_XL_CONFIG_PATH=/path/to/xlnet/config
transformers-cli convert --model_type xlnet \\
  --tf_checkpoint <span class="hljs-variable">$TRANSFO_XL_CHECKPOINT_PATH</span> \\
  --config <span class="hljs-variable">$TRANSFO_XL_CONFIG_PATH</span> \\
  --pytorch_dump_output <span class="hljs-variable">$PYTORCH_DUMP_OUTPUT</span> \\
  [--finetuning_task_name XLNET_FINETUNED_TASK] \\`,wrap:!1}}),W=new $({props:{title:"XLM",local:"xlm",headingTag:"h2"}}),D=new K({props:{code:"ZXhwb3J0JTIwWExNX0NIRUNLUE9JTlRfUEFUSCUzRCUyRnBhdGglMkZ0byUyRnhsbSUyRmNoZWNrcG9pbnQlMEF0cmFuc2Zvcm1lcnMtY2xpJTIwY29udmVydCUyMC0tbW9kZWxfdHlwZSUyMHhsbSUyMCU1QyUwQSUyMCUyMC0tdGZfY2hlY2twb2ludCUyMCUyNFhMTV9DSEVDS1BPSU5UX1BBVEglMjAlNUMlMEElMjAlMjAtLXB5dG9yY2hfZHVtcF9vdXRwdXQlMjAlMjRQWVRPUkNIX0RVTVBfT1VUUFVUJTBBJTIwJTVCLS1jb25maWclMjBYTUxfQ09ORklHJTVEJTIwJTVDJTBBJTIwJTVCLS1maW5ldHVuaW5nX3Rhc2tfbmFtZSUyMFhNTF9GSU5FVFVORURfVEFTSyU1RA==",highlighted:`<span class="hljs-built_in">export</span> XLM_CHECKPOINT_PATH=/path/to/xlm/checkpoint
transformers-cli convert --model_type xlm \\
  --tf_checkpoint <span class="hljs-variable">$XLM_CHECKPOINT_PATH</span> \\
  --pytorch_dump_output <span class="hljs-variable">$PYTORCH_DUMP_OUTPUT</span>
 [--config XML_CONFIG] \\
 [--finetuning_task_name XML_FINETUNED_TASK]`,wrap:!1}}),Y=new $({props:{title:"T5",local:"t5",headingTag:"h2"}}),q=new K({props:{code:"ZXhwb3J0JTIwVDUlM0QlMkZwYXRoJTJGdG8lMkZ0NSUyRnVuY2FzZWRfTC0xMl9ILTc2OF9BLTEyJTBBdHJhbnNmb3JtZXJzLWNsaSUyMGNvbnZlcnQlMjAtLW1vZGVsX3R5cGUlMjB0NSUyMCU1QyUwQSUyMCUyMC0tdGZfY2hlY2twb2ludCUyMCUyNFQ1JTJGdDVfbW9kZWwuY2twdCUyMCU1QyUwQSUyMCUyMC0tY29uZmlnJTIwJTI0VDUlMkZ0NV9jb25maWcuanNvbiUyMCU1QyUwQSUyMCUyMC0tcHl0b3JjaF9kdW1wX291dHB1dCUyMCUyNFQ1JTJGcHl0b3JjaF9tb2RlbC5iaW4=",highlighted:`<span class="hljs-built_in">export</span> T5=/path/to/t5/uncased_L-12_H-768_A-12
transformers-cli convert --model_type t5 \\
  --tf_checkpoint <span class="hljs-variable">$T5</span>/t5_model.ckpt \\
  --config <span class="hljs-variable">$T5</span>/t5_config.json \\
  --pytorch_dump_output <span class="hljs-variable">$T5</span>/pytorch_model.bin`,wrap:!1}}),{c(){p=a("meta"),y=i(),J=a("p"),u=i(),c(M.$$.fragment),U=i(),h=a("p"),h.innerHTML=Fe,le=i(),c(b.$$.fragment),ne=i(),c(w.$$.fragment),ie=i(),v=a("p"),v.innerHTML=Ne,oe=i(),V=a("p"),V.innerHTML=Xe,ae=i(),R=a("p"),R.innerHTML=ke,se=i(),C=a("p"),C.innerHTML=Le,re=i(),E=a("p"),E.innerHTML=je,pe=i(),c(I.$$.fragment),ce=i(),g=a("p"),g.innerHTML=Se,Te=i(),c(B.$$.fragment),me=i(),P=a("p"),P.innerHTML=Ae,fe=i(),F=a("p"),F.innerHTML=Ze,de=i(),N=a("p"),N.innerHTML=Ge,_e=i(),c(X.$$.fragment),Ue=i(),k=a("p"),k.innerHTML=He,ue=i(),c(L.$$.fragment),he=i(),j=a("p"),j.innerHTML=Qe,Je=i(),c(S.$$.fragment),Me=i(),c(A.$$.fragment),be=i(),Z=a("p"),Z.innerHTML=xe,$e=i(),c(G.$$.fragment),ye=i(),c(H.$$.fragment),we=i(),Q=a("p"),Q.textContent=We,ve=i(),c(x.$$.fragment),Ve=i(),c(W.$$.fragment),Re=i(),O=a("p"),O.textContent=Oe,Ce=i(),c(D.$$.fragment),Ee=i(),c(Y.$$.fragment),Ie=i(),z=a("p"),z.textContent=De,ge=i(),c(q.$$.fragment),Be=i(),ee=a("p"),this.h()},l(e){const t=it("svelte-u9bgzb",document.head);p=s(t,"META",{name:!0,content:!0}),t.forEach(l),y=o(e),J=s(e,"P",{}),ze(J).forEach(l),u=o(e),T(M.$$.fragment,e),U=o(e),h=s(e,"P",{"data-svelte-h":!0}),r(h)!=="svelte-1h7vx38"&&(h.innerHTML=Fe),le=o(e),T(b.$$.fragment,e),ne=o(e),T(w.$$.fragment,e),ie=o(e),v=s(e,"P",{"data-svelte-h":!0}),r(v)!=="svelte-12ewxsd"&&(v.innerHTML=Ne),oe=o(e),V=s(e,"P",{"data-svelte-h":!0}),r(V)!=="svelte-1tk7qod"&&(V.innerHTML=Xe),ae=o(e),R=s(e,"P",{"data-svelte-h":!0}),r(R)!=="svelte-ltah7v"&&(R.innerHTML=ke),se=o(e),C=s(e,"P",{"data-svelte-h":!0}),r(C)!=="svelte-1gwoxz3"&&(C.innerHTML=Le),re=o(e),E=s(e,"P",{"data-svelte-h":!0}),r(E)!=="svelte-13c4iak"&&(E.innerHTML=je),pe=o(e),T(I.$$.fragment,e),ce=o(e),g=s(e,"P",{"data-svelte-h":!0}),r(g)!=="svelte-17ev3v6"&&(g.innerHTML=Se),Te=o(e),T(B.$$.fragment,e),me=o(e),P=s(e,"P",{"data-svelte-h":!0}),r(P)!=="svelte-bo3lt9"&&(P.innerHTML=Ae),fe=o(e),F=s(e,"P",{"data-svelte-h":!0}),r(F)!=="svelte-xfj20k"&&(F.innerHTML=Ze),de=o(e),N=s(e,"P",{"data-svelte-h":!0}),r(N)!=="svelte-hzzhlx"&&(N.innerHTML=Ge),_e=o(e),T(X.$$.fragment,e),Ue=o(e),k=s(e,"P",{"data-svelte-h":!0}),r(k)!=="svelte-p8zabj"&&(k.innerHTML=He),ue=o(e),T(L.$$.fragment,e),he=o(e),j=s(e,"P",{"data-svelte-h":!0}),r(j)!=="svelte-xb9em5"&&(j.innerHTML=Qe),Je=o(e),T(S.$$.fragment,e),Me=o(e),T(A.$$.fragment,e),be=o(e),Z=s(e,"P",{"data-svelte-h":!0}),r(Z)!=="svelte-ql4a6"&&(Z.innerHTML=xe),$e=o(e),T(G.$$.fragment,e),ye=o(e),T(H.$$.fragment,e),we=o(e),Q=s(e,"P",{"data-svelte-h":!0}),r(Q)!=="svelte-1pi6g15"&&(Q.textContent=We),ve=o(e),T(x.$$.fragment,e),Ve=o(e),T(W.$$.fragment,e),Re=o(e),O=s(e,"P",{"data-svelte-h":!0}),r(O)!=="svelte-nv1q1"&&(O.textContent=Oe),Ce=o(e),T(D.$$.fragment,e),Ee=o(e),T(Y.$$.fragment,e),Ie=o(e),z=s(e,"P",{"data-svelte-h":!0}),r(z)!=="svelte-1xcr0cf"&&(z.textContent=De),ge=o(e),T(q.$$.fragment,e),Be=o(e),ee=s(e,"P",{}),ze(ee).forEach(l),this.h()},h(){qe(p,"name","hf:doc:metadata"),qe(p,"content",pt)},m(e,t){ot(document.head,p),n(e,y,t),n(e,J,t),n(e,u,t),m(M,e,t),n(e,U,t),n(e,h,t),n(e,le,t),m(b,e,t),n(e,ne,t),m(w,e,t),n(e,ie,t),n(e,v,t),n(e,oe,t),n(e,V,t),n(e,ae,t),n(e,R,t),n(e,se,t),n(e,C,t),n(e,re,t),n(e,E,t),n(e,pe,t),m(I,e,t),n(e,ce,t),n(e,g,t),n(e,Te,t),m(B,e,t),n(e,me,t),n(e,P,t),n(e,fe,t),n(e,F,t),n(e,de,t),n(e,N,t),n(e,_e,t),m(X,e,t),n(e,Ue,t),n(e,k,t),n(e,ue,t),m(L,e,t),n(e,he,t),n(e,j,t),n(e,Je,t),m(S,e,t),n(e,Me,t),m(A,e,t),n(e,be,t),n(e,Z,t),n(e,$e,t),m(G,e,t),n(e,ye,t),m(H,e,t),n(e,we,t),n(e,Q,t),n(e,ve,t),m(x,e,t),n(e,Ve,t),m(W,e,t),n(e,Re,t),n(e,O,t),n(e,Ce,t),m(D,e,t),n(e,Ee,t),m(Y,e,t),n(e,Ie,t),n(e,z,t),n(e,ge,t),m(q,e,t),n(e,Be,t),n(e,ee,t),Pe=!0},p(e,[t]){const Ye={};t&2&&(Ye.$$scope={dirty:t,ctx:e}),b.$set(Ye)},i(e){Pe||(f(M.$$.fragment,e),f(b.$$.fragment,e),f(w.$$.fragment,e),f(I.$$.fragment,e),f(B.$$.fragment,e),f(X.$$.fragment,e),f(L.$$.fragment,e),f(S.$$.fragment,e),f(A.$$.fragment,e),f(G.$$.fragment,e),f(H.$$.fragment,e),f(x.$$.fragment,e),f(W.$$.fragment,e),f(D.$$.fragment,e),f(Y.$$.fragment,e),f(q.$$.fragment,e),Pe=!0)},o(e){d(M.$$.fragment,e),d(b.$$.fragment,e),d(w.$$.fragment,e),d(I.$$.fragment,e),d(B.$$.fragment,e),d(X.$$.fragment,e),d(L.$$.fragment,e),d(S.$$.fragment,e),d(A.$$.fragment,e),d(G.$$.fragment,e),d(H.$$.fragment,e),d(x.$$.fragment,e),d(W.$$.fragment,e),d(D.$$.fragment,e),d(Y.$$.fragment,e),d(q.$$.fragment,e),Pe=!1},d(e){e&&(l(y),l(J),l(u),l(U),l(h),l(le),l(ne),l(ie),l(v),l(oe),l(V),l(ae),l(R),l(se),l(C),l(re),l(E),l(pe),l(ce),l(g),l(Te),l(me),l(P),l(fe),l(F),l(de),l(N),l(_e),l(Ue),l(k),l(ue),l(he),l(j),l(Je),l(Me),l(be),l(Z),l($e),l(ye),l(we),l(Q),l(ve),l(Ve),l(Re),l(O),l(Ce),l(Ee),l(Ie),l(z),l(ge),l(Be),l(ee)),l(p),_(M,e),_(b,e),_(w,e),_(I,e),_(B,e),_(X,e),_(L,e),_(S,e),_(A,e),_(G,e),_(H,e),_(x,e),_(W,e),_(D,e),_(Y,e),_(q,e)}}}const pt='{"title":"Convertire checkpoint di Tensorflow","local":"convertire-checkpoint-di-tensorflow","sections":[{"title":"BERT","local":"bert","sections":[],"depth":2},{"title":"ALBERT","local":"albert","sections":[],"depth":2},{"title":"OpenAI GPT","local":"openai-gpt","sections":[],"depth":2},{"title":"OpenAI GPT-2","local":"openai-gpt-2","sections":[],"depth":2},{"title":"XLNet","local":"xlnet","sections":[],"depth":2},{"title":"XLM","local":"xlm","sections":[],"depth":2},{"title":"T5","local":"t5","sections":[],"depth":2}],"depth":1}';function ct(te){return et(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ut extends lt{constructor(p){super(),nt(this,p,ct,rt,Ke,{})}}export{Ut as component};
