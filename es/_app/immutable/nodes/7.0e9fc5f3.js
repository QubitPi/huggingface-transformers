import{s as Ke,o as et,n as tt}from"../chunks/scheduler.36a0863c.js";import{S as lt,i as nt,g as r,s as a,r as c,A as at,h as s,f as l,c as o,j as qe,u as T,x as p,k as ze,y as ot,a as n,v as m,d as f,t as d,w as u}from"../chunks/index.f891bdb2.js";import{T as rt}from"../chunks/Tip.a8272f7f.js";import{C as K}from"../chunks/CodeBlock.3ec784ea.js";import{H as y}from"../chunks/Heading.3fb90772.js";function st(te){let i,$="Desde 2.3.0, el script para convertir es parte de la CLI de transformers (<strong>transformers-cli</strong>) disponible en cualquier instalación de transformers &gt;= 2.3.0.",b,U,J="La siguiente documentación refleja el formato para el comando <strong>transformers-cli convert</strong>.";return{c(){i=r("p"),i.innerHTML=$,b=a(),U=r("p"),U.innerHTML=J},l(_){i=s(_,"P",{"data-svelte-h":!0}),p(i)!=="svelte-kda8b"&&(i.innerHTML=$),b=o(_),U=s(_,"P",{"data-svelte-h":!0}),p(U)!=="svelte-1hleqes"&&(U.innerHTML=J)},m(_,h){n(_,i,h),n(_,b,h),n(_,U,h)},p:tt,d(_){_&&(l(i),l(b),l(U))}}}function pt(te){let i,$,b,U,J,_,h,Pe="Te proporcionamos una interfaz de línea de comando (<code>CLI</code>, por sus siglas en inglés) para convertir puntos de control (<em>checkpoints</em>) originales de Bert/GPT/GPT-2/Transformer-XL/XLNet/XLM en modelos que se puedan cargar utilizando los métodos <code>from_pretrained</code> de la biblioteca.",le,M,ne,w,ae,V,je='Puedes convertir cualquier checkpoint de TensorFlow para BERT (en particular, <a href="https://github.com/google-research/bert#pre-trained-models" rel="nofollow">los modelos pre-entrenados y publicados por Google</a>) en un archivo de PyTorch mediante el script <a href="https://github.com/huggingface/transformers/tree/main/src/transformers/models/bert/convert_bert_original_tf_checkpoint_to_pytorch.py" rel="nofollow">convert_bert_original_tf_checkpoint_to_pytorch.py</a>.',oe,v,Ne='Esta CLI toma como entrada un checkpoint de TensorFlow (tres archivos que comienzan con <code>bert_model.ckpt</code>) y el archivo de configuración asociado (<code>bert_config.json</code>), y crea un modelo PyTorch para esta configuración, carga los pesos del checkpoint de TensorFlow en el modelo de PyTorch y guarda el modelo resultante en un archivo estándar de PyTorch que se puede importar usando <code>from_pretrained()</code> (ve el ejemplo en <a href="quicktour">Tour rápido</a>, <a href="https://github.com/huggingface/transformers/tree/main/examples/pytorch/text-classification/run_glue.py" rel="nofollow">run_glue.py</a>).',re,C,Xe="Solo necesitas ejecutar este script <strong>una vez</strong> para convertir un modelo a PyTorch. Después, puedes ignorar el checkpoint de TensorFlow (los tres archivos que comienzan con <code>bert_model.ckpt</code>), pero asegúrate de conservar el archivo de configuración (<code>bert_config.json</code>) y el archivo de vocabulario (<code>vocab.txt</code>) ya que estos también son necesarios para el modelo en PyTorch.",se,R,Le="Para ejecutar este script deberás tener instalado TensorFlow y PyTorch (<code>pip install tensorflow</code>). El resto del repositorio solo requiere PyTorch.",pe,E,ke="Aquí hay un ejemplo del proceso para convertir un modelo <code>BERT-Base Uncased</code> pre-entrenado:",ie,g,ce,I,Se='Puedes descargar los modelos pre-entrenados de Google para la conversión <a href="https://github.com/google-research/bert#pre-trained-models" rel="nofollow">aquí</a>.',Te,B,me,F,Ae='Convierte los checkpoints del modelo ALBERT de TensorFlow a PyTorch usando el script <a href="https://github.com/huggingface/transformers/tree/main/src/transformers/models/albert/convert_albert_original_tf_checkpoint_to_pytorch.py" rel="nofollow">convert_albert_original_tf_checkpoint_to_pytorch.py</a>.',fe,P,Ze="La CLI toma como entrada un checkpoint de TensorFlow (tres archivos que comienzan con <code>model.ckpt-best</code>) y el archivo de configuración adjunto (<code>albert_config.json</code>), luego crea y guarda un modelo de PyTorch. Para ejecutar esta conversión deberás tener instalados TensorFlow y PyTorch.",de,j,Ge="Aquí hay un ejemplo del proceso para convertir un modelo <code>ALBERT Base</code> pre-entrenado:",ue,N,_e,X,Qe='Puedes descargar los modelos pre-entrenados de Google para la conversión <a href="https://github.com/google-research/albert#pre-trained-models" rel="nofollow">aquí</a>.',Ue,L,he,k,He='Este es un ejemplo del proceso para convertir un modelo OpenAI GPT pre-entrenado, asumiendo que tu checkpoint de NumPy se guarda con el mismo formato que el modelo pre-entrenado de OpenAI (más información <a href="https://github.com/openai/finetune-transformer-lm" rel="nofollow">aquí</a>):',be,S,Je,A,Me,Z,xe='Aquí hay un ejemplo del proceso para convertir un modelo OpenAI GPT-2 pre-entrenado (más información <a href="https://github.com/openai/gpt-2" rel="nofollow">aquí</a>):',ye,G,$e,Q,we,H,We="Aquí hay un ejemplo del proceso para convertir un modelo XLNet pre-entrenado:",Ve,x,ve,W,Ce,O,Oe="Aquí hay un ejemplo del proceso para convertir un modelo XLM pre-entrenado:",Re,D,Ee,Y,ge,q,De="Aquí hay un ejemplo del proceso para convertir un modelo T5 pre-entrenado:",Ie,z,Be,ee,Fe;return J=new y({props:{title:"Convertir checkpoints de Tensorflow",local:"convertir-checkpoints-de-tensorflow",headingTag:"h1"}}),M=new rt({props:{$$slots:{default:[st]},$$scope:{ctx:te}}}),w=new y({props:{title:"BERT",local:"bert",headingTag:"h2"}}),g=new K({props:{code:"ZXhwb3J0JTIwQkVSVF9CQVNFX0RJUiUzRCUyRnBhdGglMkZ0byUyRmJlcnQlMkZ1bmNhc2VkX0wtMTJfSC03NjhfQS0xMiUwQSUwQXRyYW5zZm9ybWVycy1jbGklMjBjb252ZXJ0JTIwLS1tb2RlbF90eXBlJTIwYmVydCUyMCU1QyUwQSUyMCUyMC0tdGZfY2hlY2twb2ludCUyMCUyNEJFUlRfQkFTRV9ESVIlMkZiZXJ0X21vZGVsLmNrcHQlMjAlNUMlMEElMjAlMjAtLWNvbmZpZyUyMCUyNEJFUlRfQkFTRV9ESVIlMkZiZXJ0X2NvbmZpZy5qc29uJTIwJTVDJTBBJTIwJTIwLS1weXRvcmNoX2R1bXBfb3V0cHV0JTIwJTI0QkVSVF9CQVNFX0RJUiUyRnB5dG9yY2hfbW9kZWwuYmlu",highlighted:`<span class="hljs-built_in">export</span> BERT_BASE_DIR=/path/to/bert/uncased_L-12_H-768_A-12

transformers-cli convert --model_type bert \\
  --tf_checkpoint <span class="hljs-variable">$BERT_BASE_DIR</span>/bert_model.ckpt \\
  --config <span class="hljs-variable">$BERT_BASE_DIR</span>/bert_config.json \\
  --pytorch_dump_output <span class="hljs-variable">$BERT_BASE_DIR</span>/pytorch_model.bin`,wrap:!1}}),B=new y({props:{title:"ALBERT",local:"albert",headingTag:"h2"}}),N=new K({props:{code:"ZXhwb3J0JTIwQUxCRVJUX0JBU0VfRElSJTNEJTJGcGF0aCUyRnRvJTJGYWxiZXJ0JTJGYWxiZXJ0X2Jhc2UlMEElMEF0cmFuc2Zvcm1lcnMtY2xpJTIwY29udmVydCUyMC0tbW9kZWxfdHlwZSUyMGFsYmVydCUyMCU1QyUwQSUyMCUyMC0tdGZfY2hlY2twb2ludCUyMCUyNEFMQkVSVF9CQVNFX0RJUiUyRm1vZGVsLmNrcHQtYmVzdCUyMCU1QyUwQSUyMCUyMC0tY29uZmlnJTIwJTI0QUxCRVJUX0JBU0VfRElSJTJGYWxiZXJ0X2NvbmZpZy5qc29uJTIwJTVDJTBBJTIwJTIwLS1weXRvcmNoX2R1bXBfb3V0cHV0JTIwJTI0QUxCRVJUX0JBU0VfRElSJTJGcHl0b3JjaF9tb2RlbC5iaW4=",highlighted:`<span class="hljs-built_in">export</span> ALBERT_BASE_DIR=/path/to/albert/albert_base

transformers-cli convert --model_type albert \\
  --tf_checkpoint <span class="hljs-variable">$ALBERT_BASE_DIR</span>/model.ckpt-best \\
  --config <span class="hljs-variable">$ALBERT_BASE_DIR</span>/albert_config.json \\
  --pytorch_dump_output <span class="hljs-variable">$ALBERT_BASE_DIR</span>/pytorch_model.bin`,wrap:!1}}),L=new y({props:{title:"OpenAI GPT",local:"openai-gpt",headingTag:"h2"}}),S=new K({props:{code:"ZXhwb3J0JTIwT1BFTkFJX0dQVF9DSEVDS1BPSU5UX0ZPTERFUl9QQVRIJTNEJTJGcGF0aCUyRnRvJTJGb3BlbmFpJTJGcHJldHJhaW5lZCUyRm51bXB5JTJGd2VpZ2h0cyUwQSUwQXRyYW5zZm9ybWVycy1jbGklMjBjb252ZXJ0JTIwLS1tb2RlbF90eXBlJTIwZ3B0JTIwJTVDJTBBJTIwJTIwLS10Zl9jaGVja3BvaW50JTIwJTI0T1BFTkFJX0dQVF9DSEVDS1BPSU5UX0ZPTERFUl9QQVRIJTIwJTVDJTBBJTIwJTIwLS1weXRvcmNoX2R1bXBfb3V0cHV0JTIwJTI0UFlUT1JDSF9EVU1QX09VVFBVVCUyMCU1QyUwQSUyMCUyMCU1Qi0tY29uZmlnJTIwT1BFTkFJX0dQVF9DT05GSUclNUQlMjAlNUMlMEElMjAlMjAlNUItLWZpbmV0dW5pbmdfdGFza19uYW1lJTIwT1BFTkFJX0dQVF9GSU5FVFVORURfVEFTSyU1RCUyMCU1Qw==",highlighted:`<span class="hljs-built_in">export</span> OPENAI_GPT_CHECKPOINT_FOLDER_PATH=/path/to/openai/pretrained/numpy/weights

transformers-cli convert --model_type gpt \\
  --tf_checkpoint <span class="hljs-variable">$OPENAI_GPT_CHECKPOINT_FOLDER_PATH</span> \\
  --pytorch_dump_output <span class="hljs-variable">$PYTORCH_DUMP_OUTPUT</span> \\
  [--config OPENAI_GPT_CONFIG] \\
  [--finetuning_task_name OPENAI_GPT_FINETUNED_TASK] \\`,wrap:!1}}),A=new y({props:{title:"OpenAI GPT-2",local:"openai-gpt-2",headingTag:"h2"}}),G=new K({props:{code:"ZXhwb3J0JTIwT1BFTkFJX0dQVDJfQ0hFQ0tQT0lOVF9QQVRIJTNEJTJGcGF0aCUyRnRvJTJGb3BlbmFpLWNvbW11bml0eSUyRmdwdDIlMkZwcmV0cmFpbmVkJTJGd2VpZ2h0cyUwQSUwQXRyYW5zZm9ybWVycy1jbGklMjBjb252ZXJ0JTIwLS1tb2RlbF90eXBlJTIwb3BlbmFpLWNvbW11bml0eSUyRmdwdDIlMjAlNUMlMEElMjAlMjAtLXRmX2NoZWNrcG9pbnQlMjAlMjRPUEVOQUlfR1BUMl9DSEVDS1BPSU5UX1BBVEglMjAlNUMlMEElMjAlMjAtLXB5dG9yY2hfZHVtcF9vdXRwdXQlMjAlMjRQWVRPUkNIX0RVTVBfT1VUUFVUJTIwJTVDJTBBJTIwJTIwJTVCLS1jb25maWclMjBPUEVOQUlfR1BUMl9DT05GSUclNUQlMjAlNUMlMEElMjAlMjAlNUItLWZpbmV0dW5pbmdfdGFza19uYW1lJTIwT1BFTkFJX0dQVDJfRklORVRVTkVEX1RBU0slNUQ=",highlighted:`<span class="hljs-built_in">export</span> OPENAI_GPT2_CHECKPOINT_PATH=/path/to/openai-community/gpt2/pretrained/weights

transformers-cli convert --model_type openai-community/gpt2 \\
  --tf_checkpoint <span class="hljs-variable">$OPENAI_GPT2_CHECKPOINT_PATH</span> \\
  --pytorch_dump_output <span class="hljs-variable">$PYTORCH_DUMP_OUTPUT</span> \\
  [--config OPENAI_GPT2_CONFIG] \\
  [--finetuning_task_name OPENAI_GPT2_FINETUNED_TASK]`,wrap:!1}}),Q=new y({props:{title:"XLNet",local:"xlnet",headingTag:"h2"}}),x=new K({props:{code:"ZXhwb3J0JTIwVFJBTlNGT19YTF9DSEVDS1BPSU5UX1BBVEglM0QlMkZwYXRoJTJGdG8lMkZ4bG5ldCUyRmNoZWNrcG9pbnQlMEFleHBvcnQlMjBUUkFOU0ZPX1hMX0NPTkZJR19QQVRIJTNEJTJGcGF0aCUyRnRvJTJGeGxuZXQlMkZjb25maWclMEElMEF0cmFuc2Zvcm1lcnMtY2xpJTIwY29udmVydCUyMC0tbW9kZWxfdHlwZSUyMHhsbmV0JTIwJTVDJTBBJTIwJTIwLS10Zl9jaGVja3BvaW50JTIwJTI0VFJBTlNGT19YTF9DSEVDS1BPSU5UX1BBVEglMjAlNUMlMEElMjAlMjAtLWNvbmZpZyUyMCUyNFRSQU5TRk9fWExfQ09ORklHX1BBVEglMjAlNUMlMEElMjAlMjAtLXB5dG9yY2hfZHVtcF9vdXRwdXQlMjAlMjRQWVRPUkNIX0RVTVBfT1VUUFVUJTIwJTVDJTBBJTIwJTIwJTVCLS1maW5ldHVuaW5nX3Rhc2tfbmFtZSUyMFhMTkVUX0ZJTkVUVU5FRF9UQVNLJTVEJTIwJTVD",highlighted:`<span class="hljs-built_in">export</span> TRANSFO_XL_CHECKPOINT_PATH=/path/to/xlnet/checkpoint
<span class="hljs-built_in">export</span> TRANSFO_XL_CONFIG_PATH=/path/to/xlnet/config

transformers-cli convert --model_type xlnet \\
  --tf_checkpoint <span class="hljs-variable">$TRANSFO_XL_CHECKPOINT_PATH</span> \\
  --config <span class="hljs-variable">$TRANSFO_XL_CONFIG_PATH</span> \\
  --pytorch_dump_output <span class="hljs-variable">$PYTORCH_DUMP_OUTPUT</span> \\
  [--finetuning_task_name XLNET_FINETUNED_TASK] \\`,wrap:!1}}),W=new y({props:{title:"XLM",local:"xlm",headingTag:"h2"}}),D=new K({props:{code:"ZXhwb3J0JTIwWExNX0NIRUNLUE9JTlRfUEFUSCUzRCUyRnBhdGglMkZ0byUyRnhsbSUyRmNoZWNrcG9pbnQlMEElMEF0cmFuc2Zvcm1lcnMtY2xpJTIwY29udmVydCUyMC0tbW9kZWxfdHlwZSUyMHhsbSUyMCU1QyUwQSUyMCUyMC0tdGZfY2hlY2twb2ludCUyMCUyNFhMTV9DSEVDS1BPSU5UX1BBVEglMjAlNUMlMEElMjAlMjAtLXB5dG9yY2hfZHVtcF9vdXRwdXQlMjAlMjRQWVRPUkNIX0RVTVBfT1VUUFVUJTBBJTIwJTVCLS1jb25maWclMjBYTUxfQ09ORklHJTVEJTIwJTVDJTBBJTIwJTVCLS1maW5ldHVuaW5nX3Rhc2tfbmFtZSUyMFhNTF9GSU5FVFVORURfVEFTSyU1RA==",highlighted:`<span class="hljs-built_in">export</span> XLM_CHECKPOINT_PATH=/path/to/xlm/checkpoint

transformers-cli convert --model_type xlm \\
  --tf_checkpoint <span class="hljs-variable">$XLM_CHECKPOINT_PATH</span> \\
  --pytorch_dump_output <span class="hljs-variable">$PYTORCH_DUMP_OUTPUT</span>
 [--config XML_CONFIG] \\
 [--finetuning_task_name XML_FINETUNED_TASK]`,wrap:!1}}),Y=new y({props:{title:"T5",local:"t5",headingTag:"h2"}}),z=new K({props:{code:"ZXhwb3J0JTIwVDUlM0QlMkZwYXRoJTJGdG8lMkZ0NSUyRnVuY2FzZWRfTC0xMl9ILTc2OF9BLTEyJTBBJTBBdHJhbnNmb3JtZXJzLWNsaSUyMGNvbnZlcnQlMjAtLW1vZGVsX3R5cGUlMjB0NSUyMCU1QyUwQSUyMCUyMC0tdGZfY2hlY2twb2ludCUyMCUyNFQ1JTJGdDVfbW9kZWwuY2twdCUyMCU1QyUwQSUyMCUyMC0tY29uZmlnJTIwJTI0VDUlMkZ0NV9jb25maWcuanNvbiUyMCU1QyUwQSUyMCUyMC0tcHl0b3JjaF9kdW1wX291dHB1dCUyMCUyNFQ1JTJGcHl0b3JjaF9tb2RlbC5iaW4=",highlighted:`<span class="hljs-built_in">export</span> T5=/path/to/t5/uncased_L-12_H-768_A-12

transformers-cli convert --model_type t5 \\
  --tf_checkpoint <span class="hljs-variable">$T5</span>/t5_model.ckpt \\
  --config <span class="hljs-variable">$T5</span>/t5_config.json \\
  --pytorch_dump_output <span class="hljs-variable">$T5</span>/pytorch_model.bin`,wrap:!1}}),{c(){i=r("meta"),$=a(),b=r("p"),U=a(),c(J.$$.fragment),_=a(),h=r("p"),h.innerHTML=Pe,le=a(),c(M.$$.fragment),ne=a(),c(w.$$.fragment),ae=a(),V=r("p"),V.innerHTML=je,oe=a(),v=r("p"),v.innerHTML=Ne,re=a(),C=r("p"),C.innerHTML=Xe,se=a(),R=r("p"),R.innerHTML=Le,pe=a(),E=r("p"),E.innerHTML=ke,ie=a(),c(g.$$.fragment),ce=a(),I=r("p"),I.innerHTML=Se,Te=a(),c(B.$$.fragment),me=a(),F=r("p"),F.innerHTML=Ae,fe=a(),P=r("p"),P.innerHTML=Ze,de=a(),j=r("p"),j.innerHTML=Ge,ue=a(),c(N.$$.fragment),_e=a(),X=r("p"),X.innerHTML=Qe,Ue=a(),c(L.$$.fragment),he=a(),k=r("p"),k.innerHTML=He,be=a(),c(S.$$.fragment),Je=a(),c(A.$$.fragment),Me=a(),Z=r("p"),Z.innerHTML=xe,ye=a(),c(G.$$.fragment),$e=a(),c(Q.$$.fragment),we=a(),H=r("p"),H.textContent=We,Ve=a(),c(x.$$.fragment),ve=a(),c(W.$$.fragment),Ce=a(),O=r("p"),O.textContent=Oe,Re=a(),c(D.$$.fragment),Ee=a(),c(Y.$$.fragment),ge=a(),q=r("p"),q.textContent=De,Ie=a(),c(z.$$.fragment),Be=a(),ee=r("p"),this.h()},l(e){const t=at("svelte-u9bgzb",document.head);i=s(t,"META",{name:!0,content:!0}),t.forEach(l),$=o(e),b=s(e,"P",{}),qe(b).forEach(l),U=o(e),T(J.$$.fragment,e),_=o(e),h=s(e,"P",{"data-svelte-h":!0}),p(h)!=="svelte-2q8bx8"&&(h.innerHTML=Pe),le=o(e),T(M.$$.fragment,e),ne=o(e),T(w.$$.fragment,e),ae=o(e),V=s(e,"P",{"data-svelte-h":!0}),p(V)!=="svelte-18wzr11"&&(V.innerHTML=je),oe=o(e),v=s(e,"P",{"data-svelte-h":!0}),p(v)!=="svelte-13z3utb"&&(v.innerHTML=Ne),re=o(e),C=s(e,"P",{"data-svelte-h":!0}),p(C)!=="svelte-ybzfbl"&&(C.innerHTML=Xe),se=o(e),R=s(e,"P",{"data-svelte-h":!0}),p(R)!=="svelte-11fttw6"&&(R.innerHTML=Le),pe=o(e),E=s(e,"P",{"data-svelte-h":!0}),p(E)!=="svelte-140xl2j"&&(E.innerHTML=ke),ie=o(e),T(g.$$.fragment,e),ce=o(e),I=s(e,"P",{"data-svelte-h":!0}),p(I)!=="svelte-1np7mm4"&&(I.innerHTML=Se),Te=o(e),T(B.$$.fragment,e),me=o(e),F=s(e,"P",{"data-svelte-h":!0}),p(F)!=="svelte-12rox6r"&&(F.innerHTML=Ae),fe=o(e),P=s(e,"P",{"data-svelte-h":!0}),p(P)!=="svelte-u8mc82"&&(P.innerHTML=Ze),de=o(e),j=s(e,"P",{"data-svelte-h":!0}),p(j)!=="svelte-13muc4"&&(j.innerHTML=Ge),ue=o(e),T(N.$$.fragment,e),_e=o(e),X=s(e,"P",{"data-svelte-h":!0}),p(X)!=="svelte-bgly09"&&(X.innerHTML=Qe),Ue=o(e),T(L.$$.fragment,e),he=o(e),k=s(e,"P",{"data-svelte-h":!0}),p(k)!=="svelte-pdtpb"&&(k.innerHTML=He),be=o(e),T(S.$$.fragment,e),Je=o(e),T(A.$$.fragment,e),Me=o(e),Z=s(e,"P",{"data-svelte-h":!0}),p(Z)!=="svelte-u34yb3"&&(Z.innerHTML=xe),ye=o(e),T(G.$$.fragment,e),$e=o(e),T(Q.$$.fragment,e),we=o(e),H=s(e,"P",{"data-svelte-h":!0}),p(H)!=="svelte-1a90hin"&&(H.textContent=We),Ve=o(e),T(x.$$.fragment,e),ve=o(e),T(W.$$.fragment,e),Ce=o(e),O=s(e,"P",{"data-svelte-h":!0}),p(O)!=="svelte-1i0jniz"&&(O.textContent=Oe),Re=o(e),T(D.$$.fragment,e),Ee=o(e),T(Y.$$.fragment,e),ge=o(e),q=s(e,"P",{"data-svelte-h":!0}),p(q)!=="svelte-1y3vknh"&&(q.textContent=De),Ie=o(e),T(z.$$.fragment,e),Be=o(e),ee=s(e,"P",{}),qe(ee).forEach(l),this.h()},h(){ze(i,"name","hf:doc:metadata"),ze(i,"content",it)},m(e,t){ot(document.head,i),n(e,$,t),n(e,b,t),n(e,U,t),m(J,e,t),n(e,_,t),n(e,h,t),n(e,le,t),m(M,e,t),n(e,ne,t),m(w,e,t),n(e,ae,t),n(e,V,t),n(e,oe,t),n(e,v,t),n(e,re,t),n(e,C,t),n(e,se,t),n(e,R,t),n(e,pe,t),n(e,E,t),n(e,ie,t),m(g,e,t),n(e,ce,t),n(e,I,t),n(e,Te,t),m(B,e,t),n(e,me,t),n(e,F,t),n(e,fe,t),n(e,P,t),n(e,de,t),n(e,j,t),n(e,ue,t),m(N,e,t),n(e,_e,t),n(e,X,t),n(e,Ue,t),m(L,e,t),n(e,he,t),n(e,k,t),n(e,be,t),m(S,e,t),n(e,Je,t),m(A,e,t),n(e,Me,t),n(e,Z,t),n(e,ye,t),m(G,e,t),n(e,$e,t),m(Q,e,t),n(e,we,t),n(e,H,t),n(e,Ve,t),m(x,e,t),n(e,ve,t),m(W,e,t),n(e,Ce,t),n(e,O,t),n(e,Re,t),m(D,e,t),n(e,Ee,t),m(Y,e,t),n(e,ge,t),n(e,q,t),n(e,Ie,t),m(z,e,t),n(e,Be,t),n(e,ee,t),Fe=!0},p(e,[t]){const Ye={};t&2&&(Ye.$$scope={dirty:t,ctx:e}),M.$set(Ye)},i(e){Fe||(f(J.$$.fragment,e),f(M.$$.fragment,e),f(w.$$.fragment,e),f(g.$$.fragment,e),f(B.$$.fragment,e),f(N.$$.fragment,e),f(L.$$.fragment,e),f(S.$$.fragment,e),f(A.$$.fragment,e),f(G.$$.fragment,e),f(Q.$$.fragment,e),f(x.$$.fragment,e),f(W.$$.fragment,e),f(D.$$.fragment,e),f(Y.$$.fragment,e),f(z.$$.fragment,e),Fe=!0)},o(e){d(J.$$.fragment,e),d(M.$$.fragment,e),d(w.$$.fragment,e),d(g.$$.fragment,e),d(B.$$.fragment,e),d(N.$$.fragment,e),d(L.$$.fragment,e),d(S.$$.fragment,e),d(A.$$.fragment,e),d(G.$$.fragment,e),d(Q.$$.fragment,e),d(x.$$.fragment,e),d(W.$$.fragment,e),d(D.$$.fragment,e),d(Y.$$.fragment,e),d(z.$$.fragment,e),Fe=!1},d(e){e&&(l($),l(b),l(U),l(_),l(h),l(le),l(ne),l(ae),l(V),l(oe),l(v),l(re),l(C),l(se),l(R),l(pe),l(E),l(ie),l(ce),l(I),l(Te),l(me),l(F),l(fe),l(P),l(de),l(j),l(ue),l(_e),l(X),l(Ue),l(he),l(k),l(be),l(Je),l(Me),l(Z),l(ye),l($e),l(we),l(H),l(Ve),l(ve),l(Ce),l(O),l(Re),l(Ee),l(ge),l(q),l(Ie),l(Be),l(ee)),l(i),u(J,e),u(M,e),u(w,e),u(g,e),u(B,e),u(N,e),u(L,e),u(S,e),u(A,e),u(G,e),u(Q,e),u(x,e),u(W,e),u(D,e),u(Y,e),u(z,e)}}}const it='{"title":"Convertir checkpoints de Tensorflow","local":"convertir-checkpoints-de-tensorflow","sections":[{"title":"BERT","local":"bert","sections":[],"depth":2},{"title":"ALBERT","local":"albert","sections":[],"depth":2},{"title":"OpenAI GPT","local":"openai-gpt","sections":[],"depth":2},{"title":"OpenAI GPT-2","local":"openai-gpt-2","sections":[],"depth":2},{"title":"XLNet","local":"xlnet","sections":[],"depth":2},{"title":"XLM","local":"xlm","sections":[],"depth":2},{"title":"T5","local":"t5","sections":[],"depth":2}],"depth":1}';function ct(te){return et(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class _t extends lt{constructor(i){super(),nt(this,i,ct,pt,Ke,{})}}export{_t as component};
