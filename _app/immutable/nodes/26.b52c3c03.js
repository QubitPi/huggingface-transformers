import{s as wn,o as yn,n as ft}from"../chunks/scheduler.9bc65507.js";import{S as bn,i as vn,g as i,s,r as p,A as Tn,h as o,f as l,c as a,j as C,u as m,x as f,k as gn,y as g,a as n,v as d,d as c,t as h,w as u}from"../chunks/index.707bf1b6.js";import{T as rt}from"../chunks/Tip.c2ecdbf4.js";import{C as y}from"../chunks/CodeBlock.54a9f38d.js";import{H as I}from"../chunks/Heading.342b1fa6.js";function Mn(_){let r,v="M1 / ARM Users",$,b,x="You will need to install the following before installing TensorFLow 2.0",Z,T,F;return T=new y({props:{code:"YnJldyUyMGluc3RhbGwlMjBjbWFrZSUwQWJyZXclMjBpbnN0YWxsJTIwcGtnLWNvbmZpZw==",highlighted:`brew install cmake
brew install pkg-config`,wrap:!1}}),{c(){r=i("p"),r.textContent=v,$=s(),b=i("p"),b.textContent=x,Z=s(),p(T.$$.fragment)},l(w){r=o(w,"P",{"data-svelte-h":!0}),f(r)!=="svelte-wbg0yj"&&(r.textContent=v),$=a(w),b=o(w,"P",{"data-svelte-h":!0}),f(b)!=="svelte-yi4wa4"&&(b.textContent=x),Z=a(w),m(T.$$.fragment,w)},m(w,M){n(w,r,M),n(w,$,M),n(w,b,M),n(w,Z,M),d(T,w,M),F=!0},p:ft,i(w){F||(c(T.$$.fragment,w),F=!0)},o(w){h(T.$$.fragment,w),F=!1},d(w){w&&(l(r),l($),l(b),l(Z)),u(T,w)}}}function _n(_){let r,v="You must keep the <code>transformers</code> folder if you want to keep using the library.";return{c(){r=i("p"),r.innerHTML=v},l($){r=o($,"P",{"data-svelte-h":!0}),f(r)!=="svelte-s2ssux"&&(r.innerHTML=v)},m($,b){n($,r,b)},p:ft,d($){$&&l(r)}}}function Cn(_){let r,v="🤗 Transformers will use the shell environment variables <code>PYTORCH_TRANSFORMERS_CACHE</code> or <code>PYTORCH_PRETRAINED_BERT_CACHE</code> if you are coming from an earlier iteration of this library and have set those environment variables, unless you specify the shell environment variable <code>TRANSFORMERS_CACHE</code>.";return{c(){r=i("p"),r.innerHTML=v},l($){r=o($,"P",{"data-svelte-h":!0}),f(r)!=="svelte-1jpec53"&&(r.innerHTML=v)},m($,b){n($,r,b)},p:ft,d($){$&&l(r)}}}function xn(_){let r,v='Add <a href="https://huggingface.co/docs/datasets/" rel="nofollow">🤗 Datasets</a> to your offline training workflow with the environment variable <code>HF_DATASETS_OFFLINE=1</code>.';return{c(){r=i("p"),r.innerHTML=v},l($){r=o($,"P",{"data-svelte-h":!0}),f(r)!=="svelte-14zlnnx"&&(r.innerHTML=v)},m($,b){n($,r,b)},p:ft,d($){$&&l(r)}}}function Jn(_){let r,v='See the <a href="https://huggingface.co/docs/hub/how-to-downstream" rel="nofollow">How to download files from the Hub</a> section for more details on downloading files stored on the Hub.';return{c(){r=i("p"),r.innerHTML=v},l($){r=o($,"P",{"data-svelte-h":!0}),f(r)!=="svelte-flcg8p"&&(r.innerHTML=v)},m($,b){n($,r,b)},p:ft,d($){$&&l(r)}}}function Zn(_){let r,v,$,b,x,Z,T,F="Install 🤗 Transformers for whichever deep learning library you’re working with, setup your cache, and optionally configure 🤗 Transformers to run offline.",w,M,Ll="🤗 Transformers is tested on Python 3.6+, PyTorch 1.1.0+, TensorFlow 2.0+, and Flax. Follow the installation instructions below for the deep learning library you are using:",pt,E,Wl='<li><a href="https://pytorch.org/get-started/locally/" rel="nofollow">PyTorch</a> installation instructions.</li> <li><a href="https://www.tensorflow.org/install/pip" rel="nofollow">TensorFlow 2.0</a> installation instructions.</li> <li><a href="https://flax.readthedocs.io/en/latest/" rel="nofollow">Flax</a> installation instructions.</li>',mt,P,dt,N,Gl='You should install 🤗 Transformers in a <a href="https://docs.python.org/3/library/venv.html" rel="nofollow">virtual environment</a>. If you’re unfamiliar with Python virtual environments, take a look at this <a href="https://packaging.python.org/guides/installing-using-pip-and-virtual-environments/" rel="nofollow">guide</a>. A virtual environment makes it easier to manage different projects, and avoid compatibility issues between dependencies.',ct,z,Rl="Start by creating a virtual environment in your project directory:",ht,S,ut,Y,Il="Activate the virtual environment. On Linux and MacOs:",$t,V,gt,X,Fl="Activate Virtual environment on Windows",wt,A,yt,B,El="Now you’re ready to install 🤗 Transformers with the following command:",bt,q,vt,Q,Pl="For CPU-support only, you can conveniently install 🤗 Transformers and a deep learning library in one line. For example, install 🤗 Transformers and PyTorch with:",Tt,O,Mt,D,Nl="🤗 Transformers and TensorFlow 2.0:",_t,K,Ct,H,xt,ee,zl="🤗 Transformers and Flax:",Jt,te,Zt,le,Sl="Finally, check if 🤗 Transformers has been properly installed by running the following command. It will download a pretrained model:",jt,ne,Ut,se,Yl="Then print out the label and score:",kt,ae,Ht,ie,Lt,oe,Vl="Install 🤗 Transformers from source with the following command:",Wt,re,Gt,fe,Xl='This command installs the bleeding edge <code>main</code> version rather than the latest <code>stable</code> version. The <code>main</code> version is useful for staying up-to-date with the latest developments. For instance, if a bug has been fixed since the last official release but a new release hasn’t been rolled out yet. However, this means the <code>main</code> version may not always be stable. We strive to keep the <code>main</code> version operational, and most issues are usually resolved within a few hours or a day. If you run into a problem, please open an <a href="https://github.com/huggingface/transformers/issues" rel="nofollow">Issue</a> so we can fix it even sooner!',Rt,pe,Al="Check if 🤗 Transformers has been properly installed by running the following command:",It,me,Ft,de,Et,ce,Bl="You will need an editable install if you’d like to:",Pt,he,ql="<li>Use the <code>main</code> version of the source code.</li> <li>Contribute to 🤗 Transformers and need to test changes in the code.</li>",Nt,ue,Ql="Clone the repository and install 🤗 Transformers with the following commands:",zt,$e,St,ge,Ol="These commands will link the folder you cloned the repository to and your Python library paths. Python will now look inside the folder you cloned to in addition to the normal library paths. For example, if your Python packages are typically installed in <code>~/anaconda3/envs/main/lib/python3.7/site-packages/</code>, Python will also search the folder you cloned to: <code>~/transformers/</code>.",Yt,L,Vt,we,Dl="Now you can easily update your clone to the latest version of 🤗 Transformers with the following command:",Xt,ye,At,be,Kl="Your Python environment will find the <code>main</code> version of 🤗 Transformers on the next run.",Bt,ve,qt,Te,en="Install from the conda channel <code>conda-forge</code>:",Qt,Me,Ot,_e,Dt,Ce,tn="Pretrained models are downloaded and locally cached at: <code>~/.cache/huggingface/hub</code>. This is the default directory given by the shell environment variable <code>TRANSFORMERS_CACHE</code>. On Windows, the default directory is given by <code>C:\\Users\\username\\.cache\\huggingface\\hub</code>. You can change the shell environment variables shown below - in order of priority - to specify a different cache directory:",Kt,xe,ln="<li>Shell environment variable (default): <code>HUGGINGFACE_HUB_CACHE</code> or <code>TRANSFORMERS_CACHE</code>.</li> <li>Shell environment variable: <code>HF_HOME</code>.</li> <li>Shell environment variable: <code>XDG_CACHE_HOME</code> + <code>/huggingface</code>.</li>",el,W,tl,Je,ll,Ze,nn="Run 🤗 Transformers in a firewalled or offline environment with locally cached files by setting the environment variable <code>TRANSFORMERS_OFFLINE=1</code>.",nl,G,sl,je,al,Ue,sn="This script should run without hanging or waiting to timeout because it won’t attempt to download the model from the Hub.",il,ke,an='You can also bypass loading a model from the Hub from each <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> call with the <code>local_files_only</code> parameter. When set to <code>True</code>, only local files are loaded:',ol,He,rl,Le,fl,We,on="Another option for using 🤗 Transformers offline is to download the files ahead of time, and then point to their local path when you need to use them offline. There are three ways to do this:",pl,J,Ke,rn='<p>Download a file through the user interface on the <a href="https://huggingface.co/models" rel="nofollow">Model Hub</a> by clicking on the ↓ icon.</p> <p><img src="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/download-icon.png" alt="download-icon"/></p>',vl,Ge,et,fn='Use the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">PreTrainedModel.from_pretrained()</a> and <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">PreTrainedModel.save_pretrained()</a> workflow:',Tl,j,Re,tt,pn='Download your files ahead of time with <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">PreTrainedModel.from_pretrained()</a>:',Ml,Ie,_l,Fe,lt,mn='Save your files to a specified directory with <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.save_pretrained">PreTrainedModel.save_pretrained()</a>:',Cl,Ee,xl,Pe,nt,dn='Now when you’re offline, reload your files with <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">PreTrainedModel.from_pretrained()</a> from the specified directory:',Jl,Ne,Zl,ze,st,cn='Programmatically download files with the <a href="https://github.com/huggingface/huggingface_hub/tree/main/src/huggingface_hub" rel="nofollow">huggingface_hub</a> library:',jl,Se,Ye,at,hn="Install the <code>huggingface_hub</code> library in your virtual environment:",Ul,Ve,kl,Xe,it,un='Use the <a href="https://huggingface.co/docs/hub/adding-a-library#download-files-from-the-hub" rel="nofollow"><code>hf_hub_download</code></a> function to download a file to a specific path. For example, the following command downloads the <code>config.json</code> file from the <a href="https://huggingface.co/bigscience/T0_3B" rel="nofollow">T0</a> model to your desired path:',Hl,Ae,ml,Be,$n="Once your file is downloaded and locally cached, specify it’s local path to load and use it:",dl,qe,cl,R,hl,ot,ul;return x=new I({props:{title:"Installation",local:"installation",headingTag:"h1"}}),P=new I({props:{title:"Install with pip",local:"install-with-pip",headingTag:"h2"}}),S=new y({props:{code:"cHl0aG9uJTIwLW0lMjB2ZW52JTIwLmVudg==",highlighted:'python -m venv .<span class="hljs-built_in">env</span>',wrap:!1}}),V=new y({props:{code:"c291cmNlJTIwLmVudiUyRmJpbiUyRmFjdGl2YXRl",highlighted:'<span class="hljs-built_in">source</span> .<span class="hljs-built_in">env</span>/bin/activate',wrap:!1}}),A=new y({props:{code:"LmVudiUyRlNjcmlwdHMlMkZhY3RpdmF0ZQ==",highlighted:'.<span class="hljs-built_in">env</span>/Scripts/activate',wrap:!1}}),q=new y({props:{code:"cGlwJTIwaW5zdGFsbCUyMHRyYW5zZm9ybWVycw==",highlighted:"pip install transformers",wrap:!1}}),O=new y({props:{code:"cGlwJTIwaW5zdGFsbCUyMCd0cmFuc2Zvcm1lcnMlNUJ0b3JjaCU1RCc=",highlighted:'pip install <span class="hljs-string">&#x27;transformers[torch]&#x27;</span>',wrap:!1}}),K=new y({props:{code:"cGlwJTIwaW5zdGFsbCUyMCd0cmFuc2Zvcm1lcnMlNUJ0Zi1jcHUlNUQn",highlighted:'pip install <span class="hljs-string">&#x27;transformers[tf-cpu]&#x27;</span>',wrap:!1}}),H=new rt({props:{warning:!0,$$slots:{default:[Mn]},$$scope:{ctx:_}}}),te=new y({props:{code:"cGlwJTIwaW5zdGFsbCUyMCd0cmFuc2Zvcm1lcnMlNUJmbGF4JTVEJw==",highlighted:'pip install <span class="hljs-string">&#x27;transformers[flax]&#x27;</span>',wrap:!1}}),ne=new y({props:{code:"cHl0aG9uJTIwLWMlMjAlMjJmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwcGlwZWxpbmUlM0IlMjBwcmludChwaXBlbGluZSgnc2VudGltZW50LWFuYWx5c2lzJykoJ3dlJTIwbG92ZSUyMHlvdScpKSUyMg==",highlighted:'python -c <span class="hljs-string">&quot;from transformers import pipeline; print(pipeline(&#x27;sentiment-analysis&#x27;)(&#x27;we love you&#x27;))&quot;</span>',wrap:!1}}),ae=new y({props:{code:"JTVCJTdCJ2xhYmVsJyUzQSUyMCdQT1NJVElWRSclMkMlMjAnc2NvcmUnJTNBJTIwMC45OTk4NzA0NzkxMDY5MDMxJTdEJTVE",highlighted:'[{<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;POSITIVE&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: 0.9998704791069031}]',wrap:!1}}),ie=new I({props:{title:"Install from source",local:"install-from-source",headingTag:"h2"}}),re=new y({props:{code:"cGlwJTIwaW5zdGFsbCUyMGdpdCUyQmh0dHBzJTNBJTJGJTJGZ2l0aHViLmNvbSUyRmh1Z2dpbmdmYWNlJTJGdHJhbnNmb3JtZXJz",highlighted:"pip install git+https://github.com/huggingface/transformers",wrap:!1}}),me=new y({props:{code:"cHl0aG9uJTIwLWMlMjAlMjJmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwcGlwZWxpbmUlM0IlMjBwcmludChwaXBlbGluZSgnc2VudGltZW50LWFuYWx5c2lzJykoJ0klMjBsb3ZlJTIweW91JykpJTIy",highlighted:'python -c <span class="hljs-string">&quot;from transformers import pipeline; print(pipeline(&#x27;sentiment-analysis&#x27;)(&#x27;I love you&#x27;))&quot;</span>',wrap:!1}}),de=new I({props:{title:"Editable install",local:"editable-install",headingTag:"h2"}}),$e=new y({props:{code:"Z2l0JTIwY2xvbmUlMjBodHRwcyUzQSUyRiUyRmdpdGh1Yi5jb20lMkZodWdnaW5nZmFjZSUyRnRyYW5zZm9ybWVycy5naXQlMEFjZCUyMHRyYW5zZm9ybWVycyUwQXBpcCUyMGluc3RhbGwlMjAtZSUyMC4=",highlighted:`git <span class="hljs-built_in">clone</span> https://github.com/huggingface/transformers.git
<span class="hljs-built_in">cd</span> transformers
pip install -e .`,wrap:!1}}),L=new rt({props:{warning:!0,$$slots:{default:[_n]},$$scope:{ctx:_}}}),ye=new y({props:{code:"Y2QlMjB+JTJGdHJhbnNmb3JtZXJzJTJGJTBBZ2l0JTIwcHVsbA==",highlighted:`<span class="hljs-built_in">cd</span> ~/transformers/
git pull`,wrap:!1}}),ve=new I({props:{title:"Install with conda",local:"install-with-conda",headingTag:"h2"}}),Me=new y({props:{code:"Y29uZGElMjBpbnN0YWxsJTIwY29uZGEtZm9yZ2UlM0ElM0F0cmFuc2Zvcm1lcnM=",highlighted:"conda install conda-forge::transformers",wrap:!1}}),_e=new I({props:{title:"Cache setup",local:"cache-setup",headingTag:"h2"}}),W=new rt({props:{$$slots:{default:[Cn]},$$scope:{ctx:_}}}),Je=new I({props:{title:"Offline mode",local:"offline-mode",headingTag:"h2"}}),G=new rt({props:{$$slots:{default:[xn]},$$scope:{ctx:_}}}),je=new y({props:{code:"SEZfREFUQVNFVFNfT0ZGTElORSUzRDElMjBUUkFOU0ZPUk1FUlNfT0ZGTElORSUzRDElMjAlNUMlMEFweXRob24lMjBleGFtcGxlcyUyRnB5dG9yY2glMkZ0cmFuc2xhdGlvbiUyRnJ1bl90cmFuc2xhdGlvbi5weSUyMC0tbW9kZWxfbmFtZV9vcl9wYXRoJTIwZ29vZ2xlLXQ1JTJGdDUtc21hbGwlMjAtLWRhdGFzZXRfbmFtZSUyMHdtdDE2JTIwLS1kYXRhc2V0X2NvbmZpZyUyMHJvLWVuJTIwLi4u",highlighted:`HF_DATASETS_OFFLINE=1 TRANSFORMERS_OFFLINE=1 \\
python examples/pytorch/translation/run_translation.py --model_name_or_path google-t5/t5-small --dataset_name wmt16 --dataset_config ro-en ...`,wrap:!1}}),He=new y({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFQ1TW9kZWwlMEElMEFtb2RlbCUyMCUzRCUyMFQ1TW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUyMi4lMkZwYXRoJTJGdG8lMkZsb2NhbCUyRmRpcmVjdG9yeSUyMiUyQyUyMGxvY2FsX2ZpbGVzX29ubHklM0RUcnVlKQ==",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> T5Model

model = T5Model.from_pretrained(<span class="hljs-string">&quot;./path/to/local/directory&quot;</span>, local_files_only=<span class="hljs-literal">True</span>)`,wrap:!1}}),Le=new I({props:{title:"Fetch models and tokenizers to use offline",local:"fetch-models-and-tokenizers-to-use-offline",headingTag:"h3"}}),Ie=new y({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Ub2tlbml6ZXIlMkMlMjBBdXRvTW9kZWxGb3JTZXEyU2VxTE0lMEElMEF0b2tlbml6ZXIlMjAlM0QlMjBBdXRvVG9rZW5pemVyLmZyb21fcHJldHJhaW5lZCglMjJiaWdzY2llbmNlJTJGVDBfM0IlMjIpJTBBbW9kZWwlMjAlM0QlMjBBdXRvTW9kZWxGb3JTZXEyU2VxTE0uZnJvbV9wcmV0cmFpbmVkKCUyMmJpZ3NjaWVuY2UlMkZUMF8zQiUyMik=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForSeq2SeqLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bigscience/T0_3B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;bigscience/T0_3B&quot;</span>)`,wrap:!1}}),Ee=new y({props:{code:"dG9rZW5pemVyLnNhdmVfcHJldHJhaW5lZCglMjIuJTJGeW91ciUyRnBhdGglMkZiaWdzY2llbmNlX3QwJTIyKSUwQW1vZGVsLnNhdmVfcHJldHJhaW5lZCglMjIuJTJGeW91ciUyRnBhdGglMkZiaWdzY2llbmNlX3QwJTIyKQ==",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.save_pretrained(<span class="hljs-string">&quot;./your/path/bigscience_t0&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;./your/path/bigscience_t0&quot;</span>)`,wrap:!1}}),Ne=new y({props:{code:"dG9rZW5pemVyJTIwJTNEJTIwQXV0b1Rva2VuaXplci5mcm9tX3ByZXRyYWluZWQoJTIyLiUyRnlvdXIlMkZwYXRoJTJGYmlnc2NpZW5jZV90MCUyMiklMEFtb2RlbCUyMCUzRCUyMEF1dG9Nb2RlbC5mcm9tX3ByZXRyYWluZWQoJTIyLiUyRnlvdXIlMkZwYXRoJTJGYmlnc2NpZW5jZV90MCUyMik=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;./your/path/bigscience_t0&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModel.from_pretrained(<span class="hljs-string">&quot;./your/path/bigscience_t0&quot;</span>)`,wrap:!1}}),Ve=new y({props:{code:"cHl0aG9uJTIwLW0lMjBwaXAlMjBpbnN0YWxsJTIwaHVnZ2luZ2ZhY2VfaHVi",highlighted:"python -m pip install huggingface_hub",wrap:!1}}),Ae=new y({props:{code:"ZnJvbSUyMGh1Z2dpbmdmYWNlX2h1YiUyMGltcG9ydCUyMGhmX2h1Yl9kb3dubG9hZCUwQSUwQWhmX2h1Yl9kb3dubG9hZChyZXBvX2lkJTNEJTIyYmlnc2NpZW5jZSUyRlQwXzNCJTIyJTJDJTIwZmlsZW5hbWUlM0QlMjJjb25maWcuanNvbiUyMiUyQyUyMGNhY2hlX2RpciUzRCUyMi4lMkZ5b3VyJTJGcGF0aCUyRmJpZ3NjaWVuY2VfdDAlMjIp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> hf_hub_download

<span class="hljs-meta">&gt;&gt;&gt; </span>hf_hub_download(repo_id=<span class="hljs-string">&quot;bigscience/T0_3B&quot;</span>, filename=<span class="hljs-string">&quot;config.json&quot;</span>, cache_dir=<span class="hljs-string">&quot;./your/path/bigscience_t0&quot;</span>)`,wrap:!1}}),qe=new y({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Db25maWclMEElMEFjb25maWclMjAlM0QlMjBBdXRvQ29uZmlnLmZyb21fcHJldHJhaW5lZCglMjIuJTJGeW91ciUyRnBhdGglMkZiaWdzY2llbmNlX3QwJTJGY29uZmlnLmpzb24lMjIp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoConfig

<span class="hljs-meta">&gt;&gt;&gt; </span>config = AutoConfig.from_pretrained(<span class="hljs-string">&quot;./your/path/bigscience_t0/config.json&quot;</span>)`,wrap:!1}}),R=new rt({props:{$$slots:{default:[Jn]},$$scope:{ctx:_}}}),{c(){r=i("meta"),v=s(),$=i("p"),b=s(),p(x.$$.fragment),Z=s(),T=i("p"),T.textContent=F,w=s(),M=i("p"),M.textContent=Ll,pt=s(),E=i("ul"),E.innerHTML=Wl,mt=s(),p(P.$$.fragment),dt=s(),N=i("p"),N.innerHTML=Gl,ct=s(),z=i("p"),z.textContent=Rl,ht=s(),p(S.$$.fragment),ut=s(),Y=i("p"),Y.textContent=Il,$t=s(),p(V.$$.fragment),gt=s(),X=i("p"),X.textContent=Fl,wt=s(),p(A.$$.fragment),yt=s(),B=i("p"),B.textContent=El,bt=s(),p(q.$$.fragment),vt=s(),Q=i("p"),Q.textContent=Pl,Tt=s(),p(O.$$.fragment),Mt=s(),D=i("p"),D.textContent=Nl,_t=s(),p(K.$$.fragment),Ct=s(),p(H.$$.fragment),xt=s(),ee=i("p"),ee.textContent=zl,Jt=s(),p(te.$$.fragment),Zt=s(),le=i("p"),le.textContent=Sl,jt=s(),p(ne.$$.fragment),Ut=s(),se=i("p"),se.textContent=Yl,kt=s(),p(ae.$$.fragment),Ht=s(),p(ie.$$.fragment),Lt=s(),oe=i("p"),oe.textContent=Vl,Wt=s(),p(re.$$.fragment),Gt=s(),fe=i("p"),fe.innerHTML=Xl,Rt=s(),pe=i("p"),pe.textContent=Al,It=s(),p(me.$$.fragment),Ft=s(),p(de.$$.fragment),Et=s(),ce=i("p"),ce.textContent=Bl,Pt=s(),he=i("ul"),he.innerHTML=ql,Nt=s(),ue=i("p"),ue.textContent=Ql,zt=s(),p($e.$$.fragment),St=s(),ge=i("p"),ge.innerHTML=Ol,Yt=s(),p(L.$$.fragment),Vt=s(),we=i("p"),we.textContent=Dl,Xt=s(),p(ye.$$.fragment),At=s(),be=i("p"),be.innerHTML=Kl,Bt=s(),p(ve.$$.fragment),qt=s(),Te=i("p"),Te.innerHTML=en,Qt=s(),p(Me.$$.fragment),Ot=s(),p(_e.$$.fragment),Dt=s(),Ce=i("p"),Ce.innerHTML=tn,Kt=s(),xe=i("ol"),xe.innerHTML=ln,el=s(),p(W.$$.fragment),tl=s(),p(Je.$$.fragment),ll=s(),Ze=i("p"),Ze.innerHTML=nn,nl=s(),p(G.$$.fragment),sl=s(),p(je.$$.fragment),al=s(),Ue=i("p"),Ue.textContent=sn,il=s(),ke=i("p"),ke.innerHTML=an,ol=s(),p(He.$$.fragment),rl=s(),p(Le.$$.fragment),fl=s(),We=i("p"),We.textContent=on,pl=s(),J=i("ul"),Ke=i("li"),Ke.innerHTML=rn,vl=s(),Ge=i("li"),et=i("p"),et.innerHTML=fn,Tl=s(),j=i("ol"),Re=i("li"),tt=i("p"),tt.innerHTML=pn,Ml=s(),p(Ie.$$.fragment),_l=s(),Fe=i("li"),lt=i("p"),lt.innerHTML=mn,Cl=s(),p(Ee.$$.fragment),xl=s(),Pe=i("li"),nt=i("p"),nt.innerHTML=dn,Jl=s(),p(Ne.$$.fragment),Zl=s(),ze=i("li"),st=i("p"),st.innerHTML=cn,jl=s(),Se=i("ol"),Ye=i("li"),at=i("p"),at.innerHTML=hn,Ul=s(),p(Ve.$$.fragment),kl=s(),Xe=i("li"),it=i("p"),it.innerHTML=un,Hl=s(),p(Ae.$$.fragment),ml=s(),Be=i("p"),Be.textContent=$n,dl=s(),p(qe.$$.fragment),cl=s(),p(R.$$.fragment),hl=s(),ot=i("p"),this.h()},l(e){const t=Tn("svelte-u9bgzb",document.head);r=o(t,"META",{name:!0,content:!0}),t.forEach(l),v=a(e),$=o(e,"P",{}),C($).forEach(l),b=a(e),m(x.$$.fragment,e),Z=a(e),T=o(e,"P",{"data-svelte-h":!0}),f(T)!=="svelte-j38mo3"&&(T.textContent=F),w=a(e),M=o(e,"P",{"data-svelte-h":!0}),f(M)!=="svelte-1sg4uid"&&(M.textContent=Ll),pt=a(e),E=o(e,"UL",{"data-svelte-h":!0}),f(E)!=="svelte-2nc81j"&&(E.innerHTML=Wl),mt=a(e),m(P.$$.fragment,e),dt=a(e),N=o(e,"P",{"data-svelte-h":!0}),f(N)!=="svelte-brzi1v"&&(N.innerHTML=Gl),ct=a(e),z=o(e,"P",{"data-svelte-h":!0}),f(z)!=="svelte-4vcemb"&&(z.textContent=Rl),ht=a(e),m(S.$$.fragment,e),ut=a(e),Y=o(e,"P",{"data-svelte-h":!0}),f(Y)!=="svelte-1wk5iip"&&(Y.textContent=Il),$t=a(e),m(V.$$.fragment,e),gt=a(e),X=o(e,"P",{"data-svelte-h":!0}),f(X)!=="svelte-p5rkjp"&&(X.textContent=Fl),wt=a(e),m(A.$$.fragment,e),yt=a(e),B=o(e,"P",{"data-svelte-h":!0}),f(B)!=="svelte-bqafm6"&&(B.textContent=El),bt=a(e),m(q.$$.fragment,e),vt=a(e),Q=o(e,"P",{"data-svelte-h":!0}),f(Q)!=="svelte-wj6vlf"&&(Q.textContent=Pl),Tt=a(e),m(O.$$.fragment,e),Mt=a(e),D=o(e,"P",{"data-svelte-h":!0}),f(D)!=="svelte-1r3mywl"&&(D.textContent=Nl),_t=a(e),m(K.$$.fragment,e),Ct=a(e),m(H.$$.fragment,e),xt=a(e),ee=o(e,"P",{"data-svelte-h":!0}),f(ee)!=="svelte-1awzzqf"&&(ee.textContent=zl),Jt=a(e),m(te.$$.fragment,e),Zt=a(e),le=o(e,"P",{"data-svelte-h":!0}),f(le)!=="svelte-164ifui"&&(le.textContent=Sl),jt=a(e),m(ne.$$.fragment,e),Ut=a(e),se=o(e,"P",{"data-svelte-h":!0}),f(se)!=="svelte-1u7laxs"&&(se.textContent=Yl),kt=a(e),m(ae.$$.fragment,e),Ht=a(e),m(ie.$$.fragment,e),Lt=a(e),oe=o(e,"P",{"data-svelte-h":!0}),f(oe)!=="svelte-1cwy5hy"&&(oe.textContent=Vl),Wt=a(e),m(re.$$.fragment,e),Gt=a(e),fe=o(e,"P",{"data-svelte-h":!0}),f(fe)!=="svelte-1kk3x9x"&&(fe.innerHTML=Xl),Rt=a(e),pe=o(e,"P",{"data-svelte-h":!0}),f(pe)!=="svelte-ddyxds"&&(pe.textContent=Al),It=a(e),m(me.$$.fragment,e),Ft=a(e),m(de.$$.fragment,e),Et=a(e),ce=o(e,"P",{"data-svelte-h":!0}),f(ce)!=="svelte-oeh2m0"&&(ce.textContent=Bl),Pt=a(e),he=o(e,"UL",{"data-svelte-h":!0}),f(he)!=="svelte-1oude6f"&&(he.innerHTML=ql),Nt=a(e),ue=o(e,"P",{"data-svelte-h":!0}),f(ue)!=="svelte-rzffez"&&(ue.textContent=Ql),zt=a(e),m($e.$$.fragment,e),St=a(e),ge=o(e,"P",{"data-svelte-h":!0}),f(ge)!=="svelte-juzsny"&&(ge.innerHTML=Ol),Yt=a(e),m(L.$$.fragment,e),Vt=a(e),we=o(e,"P",{"data-svelte-h":!0}),f(we)!=="svelte-1ibkr8b"&&(we.textContent=Dl),Xt=a(e),m(ye.$$.fragment,e),At=a(e),be=o(e,"P",{"data-svelte-h":!0}),f(be)!=="svelte-ymvfdc"&&(be.innerHTML=Kl),Bt=a(e),m(ve.$$.fragment,e),qt=a(e),Te=o(e,"P",{"data-svelte-h":!0}),f(Te)!=="svelte-1viqppo"&&(Te.innerHTML=en),Qt=a(e),m(Me.$$.fragment,e),Ot=a(e),m(_e.$$.fragment,e),Dt=a(e),Ce=o(e,"P",{"data-svelte-h":!0}),f(Ce)!=="svelte-hix9ac"&&(Ce.innerHTML=tn),Kt=a(e),xe=o(e,"OL",{"data-svelte-h":!0}),f(xe)!=="svelte-1353uyi"&&(xe.innerHTML=ln),el=a(e),m(W.$$.fragment,e),tl=a(e),m(Je.$$.fragment,e),ll=a(e),Ze=o(e,"P",{"data-svelte-h":!0}),f(Ze)!=="svelte-1703be7"&&(Ze.innerHTML=nn),nl=a(e),m(G.$$.fragment,e),sl=a(e),m(je.$$.fragment,e),al=a(e),Ue=o(e,"P",{"data-svelte-h":!0}),f(Ue)!=="svelte-4hhqmj"&&(Ue.textContent=sn),il=a(e),ke=o(e,"P",{"data-svelte-h":!0}),f(ke)!=="svelte-knk1cr"&&(ke.innerHTML=an),ol=a(e),m(He.$$.fragment,e),rl=a(e),m(Le.$$.fragment,e),fl=a(e),We=o(e,"P",{"data-svelte-h":!0}),f(We)!=="svelte-e4pzec"&&(We.textContent=on),pl=a(e),J=o(e,"UL",{});var U=C(J);Ke=o(U,"LI",{"data-svelte-h":!0}),f(Ke)!=="svelte-dut046"&&(Ke.innerHTML=rn),vl=a(U),Ge=o(U,"LI",{});var Qe=C(Ge);et=o(Qe,"P",{"data-svelte-h":!0}),f(et)!=="svelte-1lbf7ec"&&(et.innerHTML=fn),Tl=a(Qe),j=o(Qe,"OL",{});var k=C(j);Re=o(k,"LI",{});var Oe=C(Re);tt=o(Oe,"P",{"data-svelte-h":!0}),f(tt)!=="svelte-14u68xc"&&(tt.innerHTML=pn),Ml=a(Oe),m(Ie.$$.fragment,Oe),Oe.forEach(l),_l=a(k),Fe=o(k,"LI",{});var De=C(Fe);lt=o(De,"P",{"data-svelte-h":!0}),f(lt)!=="svelte-1b0x5kz"&&(lt.innerHTML=mn),Cl=a(De),m(Ee.$$.fragment,De),De.forEach(l),xl=a(k),Pe=o(k,"LI",{});var $l=C(Pe);nt=o($l,"P",{"data-svelte-h":!0}),f(nt)!=="svelte-6uczju"&&(nt.innerHTML=dn),Jl=a($l),m(Ne.$$.fragment,$l),$l.forEach(l),k.forEach(l),Qe.forEach(l),Zl=a(U),ze=o(U,"LI",{});var gl=C(ze);st=o(gl,"P",{"data-svelte-h":!0}),f(st)!=="svelte-1yvcl10"&&(st.innerHTML=cn),jl=a(gl),Se=o(gl,"OL",{});var wl=C(Se);Ye=o(wl,"LI",{});var yl=C(Ye);at=o(yl,"P",{"data-svelte-h":!0}),f(at)!=="svelte-d142cs"&&(at.innerHTML=hn),Ul=a(yl),m(Ve.$$.fragment,yl),yl.forEach(l),kl=a(wl),Xe=o(wl,"LI",{});var bl=C(Xe);it=o(bl,"P",{"data-svelte-h":!0}),f(it)!=="svelte-1vlnv0z"&&(it.innerHTML=un),Hl=a(bl),m(Ae.$$.fragment,bl),bl.forEach(l),wl.forEach(l),gl.forEach(l),U.forEach(l),ml=a(e),Be=o(e,"P",{"data-svelte-h":!0}),f(Be)!=="svelte-wyt9zi"&&(Be.textContent=$n),dl=a(e),m(qe.$$.fragment,e),cl=a(e),m(R.$$.fragment,e),hl=a(e),ot=o(e,"P",{}),C(ot).forEach(l),this.h()},h(){gn(r,"name","hf:doc:metadata"),gn(r,"content",jn)},m(e,t){g(document.head,r),n(e,v,t),n(e,$,t),n(e,b,t),d(x,e,t),n(e,Z,t),n(e,T,t),n(e,w,t),n(e,M,t),n(e,pt,t),n(e,E,t),n(e,mt,t),d(P,e,t),n(e,dt,t),n(e,N,t),n(e,ct,t),n(e,z,t),n(e,ht,t),d(S,e,t),n(e,ut,t),n(e,Y,t),n(e,$t,t),d(V,e,t),n(e,gt,t),n(e,X,t),n(e,wt,t),d(A,e,t),n(e,yt,t),n(e,B,t),n(e,bt,t),d(q,e,t),n(e,vt,t),n(e,Q,t),n(e,Tt,t),d(O,e,t),n(e,Mt,t),n(e,D,t),n(e,_t,t),d(K,e,t),n(e,Ct,t),d(H,e,t),n(e,xt,t),n(e,ee,t),n(e,Jt,t),d(te,e,t),n(e,Zt,t),n(e,le,t),n(e,jt,t),d(ne,e,t),n(e,Ut,t),n(e,se,t),n(e,kt,t),d(ae,e,t),n(e,Ht,t),d(ie,e,t),n(e,Lt,t),n(e,oe,t),n(e,Wt,t),d(re,e,t),n(e,Gt,t),n(e,fe,t),n(e,Rt,t),n(e,pe,t),n(e,It,t),d(me,e,t),n(e,Ft,t),d(de,e,t),n(e,Et,t),n(e,ce,t),n(e,Pt,t),n(e,he,t),n(e,Nt,t),n(e,ue,t),n(e,zt,t),d($e,e,t),n(e,St,t),n(e,ge,t),n(e,Yt,t),d(L,e,t),n(e,Vt,t),n(e,we,t),n(e,Xt,t),d(ye,e,t),n(e,At,t),n(e,be,t),n(e,Bt,t),d(ve,e,t),n(e,qt,t),n(e,Te,t),n(e,Qt,t),d(Me,e,t),n(e,Ot,t),d(_e,e,t),n(e,Dt,t),n(e,Ce,t),n(e,Kt,t),n(e,xe,t),n(e,el,t),d(W,e,t),n(e,tl,t),d(Je,e,t),n(e,ll,t),n(e,Ze,t),n(e,nl,t),d(G,e,t),n(e,sl,t),d(je,e,t),n(e,al,t),n(e,Ue,t),n(e,il,t),n(e,ke,t),n(e,ol,t),d(He,e,t),n(e,rl,t),d(Le,e,t),n(e,fl,t),n(e,We,t),n(e,pl,t),n(e,J,t),g(J,Ke),g(J,vl),g(J,Ge),g(Ge,et),g(Ge,Tl),g(Ge,j),g(j,Re),g(Re,tt),g(Re,Ml),d(Ie,Re,null),g(j,_l),g(j,Fe),g(Fe,lt),g(Fe,Cl),d(Ee,Fe,null),g(j,xl),g(j,Pe),g(Pe,nt),g(Pe,Jl),d(Ne,Pe,null),g(J,Zl),g(J,ze),g(ze,st),g(ze,jl),g(ze,Se),g(Se,Ye),g(Ye,at),g(Ye,Ul),d(Ve,Ye,null),g(Se,kl),g(Se,Xe),g(Xe,it),g(Xe,Hl),d(Ae,Xe,null),n(e,ml,t),n(e,Be,t),n(e,dl,t),d(qe,e,t),n(e,cl,t),d(R,e,t),n(e,hl,t),n(e,ot,t),ul=!0},p(e,[t]){const U={};t&2&&(U.$$scope={dirty:t,ctx:e}),H.$set(U);const Qe={};t&2&&(Qe.$$scope={dirty:t,ctx:e}),L.$set(Qe);const k={};t&2&&(k.$$scope={dirty:t,ctx:e}),W.$set(k);const Oe={};t&2&&(Oe.$$scope={dirty:t,ctx:e}),G.$set(Oe);const De={};t&2&&(De.$$scope={dirty:t,ctx:e}),R.$set(De)},i(e){ul||(c(x.$$.fragment,e),c(P.$$.fragment,e),c(S.$$.fragment,e),c(V.$$.fragment,e),c(A.$$.fragment,e),c(q.$$.fragment,e),c(O.$$.fragment,e),c(K.$$.fragment,e),c(H.$$.fragment,e),c(te.$$.fragment,e),c(ne.$$.fragment,e),c(ae.$$.fragment,e),c(ie.$$.fragment,e),c(re.$$.fragment,e),c(me.$$.fragment,e),c(de.$$.fragment,e),c($e.$$.fragment,e),c(L.$$.fragment,e),c(ye.$$.fragment,e),c(ve.$$.fragment,e),c(Me.$$.fragment,e),c(_e.$$.fragment,e),c(W.$$.fragment,e),c(Je.$$.fragment,e),c(G.$$.fragment,e),c(je.$$.fragment,e),c(He.$$.fragment,e),c(Le.$$.fragment,e),c(Ie.$$.fragment,e),c(Ee.$$.fragment,e),c(Ne.$$.fragment,e),c(Ve.$$.fragment,e),c(Ae.$$.fragment,e),c(qe.$$.fragment,e),c(R.$$.fragment,e),ul=!0)},o(e){h(x.$$.fragment,e),h(P.$$.fragment,e),h(S.$$.fragment,e),h(V.$$.fragment,e),h(A.$$.fragment,e),h(q.$$.fragment,e),h(O.$$.fragment,e),h(K.$$.fragment,e),h(H.$$.fragment,e),h(te.$$.fragment,e),h(ne.$$.fragment,e),h(ae.$$.fragment,e),h(ie.$$.fragment,e),h(re.$$.fragment,e),h(me.$$.fragment,e),h(de.$$.fragment,e),h($e.$$.fragment,e),h(L.$$.fragment,e),h(ye.$$.fragment,e),h(ve.$$.fragment,e),h(Me.$$.fragment,e),h(_e.$$.fragment,e),h(W.$$.fragment,e),h(Je.$$.fragment,e),h(G.$$.fragment,e),h(je.$$.fragment,e),h(He.$$.fragment,e),h(Le.$$.fragment,e),h(Ie.$$.fragment,e),h(Ee.$$.fragment,e),h(Ne.$$.fragment,e),h(Ve.$$.fragment,e),h(Ae.$$.fragment,e),h(qe.$$.fragment,e),h(R.$$.fragment,e),ul=!1},d(e){e&&(l(v),l($),l(b),l(Z),l(T),l(w),l(M),l(pt),l(E),l(mt),l(dt),l(N),l(ct),l(z),l(ht),l(ut),l(Y),l($t),l(gt),l(X),l(wt),l(yt),l(B),l(bt),l(vt),l(Q),l(Tt),l(Mt),l(D),l(_t),l(Ct),l(xt),l(ee),l(Jt),l(Zt),l(le),l(jt),l(Ut),l(se),l(kt),l(Ht),l(Lt),l(oe),l(Wt),l(Gt),l(fe),l(Rt),l(pe),l(It),l(Ft),l(Et),l(ce),l(Pt),l(he),l(Nt),l(ue),l(zt),l(St),l(ge),l(Yt),l(Vt),l(we),l(Xt),l(At),l(be),l(Bt),l(qt),l(Te),l(Qt),l(Ot),l(Dt),l(Ce),l(Kt),l(xe),l(el),l(tl),l(ll),l(Ze),l(nl),l(sl),l(al),l(Ue),l(il),l(ke),l(ol),l(rl),l(fl),l(We),l(pl),l(J),l(ml),l(Be),l(dl),l(cl),l(hl),l(ot)),l(r),u(x,e),u(P,e),u(S,e),u(V,e),u(A,e),u(q,e),u(O,e),u(K,e),u(H,e),u(te,e),u(ne,e),u(ae,e),u(ie,e),u(re,e),u(me,e),u(de,e),u($e,e),u(L,e),u(ye,e),u(ve,e),u(Me,e),u(_e,e),u(W,e),u(Je,e),u(G,e),u(je,e),u(He,e),u(Le,e),u(Ie),u(Ee),u(Ne),u(Ve),u(Ae),u(qe,e),u(R,e)}}}const jn='{"title":"Installation","local":"installation","sections":[{"title":"Install with pip","local":"install-with-pip","sections":[],"depth":2},{"title":"Install from source","local":"install-from-source","sections":[],"depth":2},{"title":"Editable install","local":"editable-install","sections":[],"depth":2},{"title":"Install with conda","local":"install-with-conda","sections":[],"depth":2},{"title":"Cache setup","local":"cache-setup","sections":[],"depth":2},{"title":"Offline mode","local":"offline-mode","sections":[{"title":"Fetch models and tokenizers to use offline","local":"fetch-models-and-tokenizers-to-use-offline","sections":[],"depth":3}],"depth":2}],"depth":1}';function Un(_){return yn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Rn extends bn{constructor(r){super(),vn(this,r,Un,Zn,wn,{})}}export{Rn as component};