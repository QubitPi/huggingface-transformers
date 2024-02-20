import{s as vl,o as Cl,n as gl}from"../chunks/scheduler.9bc65507.js";import{S as Tl,i as xl,g as s,s as o,r as f,A as kl,h as a,f as l,c as n,j as yl,u as d,x as r,k as $l,y as _l,a as i,v as m,d as p,t as h,w as u}from"../chunks/index.707bf1b6.js";import{T as wl}from"../chunks/Tip.c2ecdbf4.js";import{C as y}from"../chunks/CodeBlock.54a9f38d.js";import{H as _e}from"../chunks/Heading.342b1fa6.js";function Ml(ke){let c,$="If a file is a full copy of another file, you should register it in the constant <code>FULL_COPIES</code> of <code>utils/check_copies.py</code>.";return{c(){c=s("p"),c.innerHTML=$},l(b){c=a(b,"P",{"data-svelte-h":!0}),r(c)!=="svelte-1q93r9g"&&(c.innerHTML=$)},m(b,w){i(b,c,w)},p:gl,d(b){b&&l(c)}}}function Rl(ke){let c,$="If the replacements change the formatting (if you replace a short name by a very long name for instance), the copy is checked after applying the auto-formatter.";return{c(){c=s("p"),c.textContent=$},l(b){c=a(b,"P",{"data-svelte-h":!0}),r(c)!=="svelte-1nat1it"&&(c.textContent=$)},m(b,w){i(b,c,w)},p:gl,d(b){b&&l(c)}}}function Ll(ke){let c,$,b,w,C,Re,T,Ut="When you open a pull request on 🤗 Transformers, a fair number of checks will be run to make sure the patch you are adding is not breaking anything existing. Those checks are of four types:",Le,x,It="<li>regular tests</li> <li>documentation build</li> <li>code and documentation style</li> <li>general repository consistency</li>",He,k,Zt="In this document, we will take a stab at explaining what those various checks are and the reason behind them, as well as how to debug them locally if one of them fails on your PR.",Pe,_,At="Note that, ideally, they require you to have a dev install:",Je,M,We,R,jt="or for an editable install:",Ue,L,Ie,H,Ft="inside the Transformers repo. Since the number of optional dependencies of Transformers has grown a lot, it’s possible you don’t manage to get all of them. If the dev install fails, make sure to install the Deep Learning framework you are working with (PyTorch, TensorFlow and/or Flax) then do",Ze,P,Ae,J,St="or for an editable install:",je,W,Fe,U,Se,I,Bt="All the jobs that begin with <code>ci/circleci: run_tests_</code> run parts of the Transformers testing suite. Each of those jobs focuses on a part of the library in a certain environment: for instance <code>ci/circleci: run_tests_pipelines_tf</code> runs the pipelines test in an environment where TensorFlow only is installed.",Be,Z,Vt="Note that to avoid running tests when there is no real change in the modules they are testing, only part of the test suite is run each time: a utility is run to determine the differences in the library between before and after the PR (what GitHub shows you in the “Files changes” tab) and picks the tests impacted by that diff. That utility can be run locally with:",Ve,A,Ge,j,Gt="from the root of the Transformers repo. It will:",ze,F,zt="<li>Check for each file in the diff if the changes are in the code or only in comments or docstrings. Only the files with real code changes are kept.</li> <li>Build an internal map that gives for each file of the source code of the library all the files it recursively impacts. Module A is said to impact module B if module B imports module A. For the recursive impact, we need a chain of modules going from module A to module B in which each module imports the previous one.</li> <li>Apply this map on the files gathered in step 1, which  gives us the list of model files impacted by the PR.</li> <li>Map each of those files to their corresponding test file(s) and get the list of tests to run.</li>",Ye,S,Yt="When executing the script locally, you should get the results of step 1, 3 and 4 printed and thus know which tests are run. The script will also create a file named <code>test_list.txt</code> which contains the list of tests to run, and you can run them locally with the following command:",Ee,B,Qe,V,Et="Just in case anything slipped through the cracks, the full test suite is also run daily.",qe,G,Ne,z,Qt="The <code>build_pr_documentation</code> job builds and generates a preview of the documentation to make sure everything looks okay once your PR is merged. A bot will add a link to preview the documentation in your PR. Any changes you make to the PR are automatically updated in the preview. If the documentation fails to build, click on <strong>Details</strong> next to the failed job to see where things went wrong. Often, the error is as simple as a missing file in the <code>toctree</code>.",Xe,Y,qt='If you’re interested in building or previewing the documentation locally, take a look at the <a href="https://github.com/huggingface/transformers/tree/main/docs" rel="nofollow"><code>README.md</code></a> in the docs folder.',Oe,E,De,Q,Nt="Code formatting is applied to all the source files, the examples and the tests using <code>black</code> and <code>ruff</code>. We also have a custom tool taking care of the formatting of docstrings and <code>rst</code> files (<code>utils/style_doc.py</code>), as well as the order of the lazy imports performed in the Transformers <code>__init__.py</code> files (<code>utils/custom_init_isort.py</code>). All of this can be launched by executing",Ke,q,et,N,Xt="The CI checks those have been applied inside the <code>ci/circleci: check_code_quality</code> check. It also runs <code>ruff</code>, that will have a basic look at your code and will complain if it finds an undefined variable, or one that is not used. To run that check locally, use",tt,X,lt,O,Ot="This can take a lot of time, so to run the same thing on only the files you modified in the current branch, run",it,D,ot,K,Dt="This last command will also run all the additional checks for the repository consistency. Let’s have a look at them.",nt,ee,st,te,Kt="This regroups all the tests to make sure your PR leaves the repository in a good state, and is performed by the <code>ci/circleci: check_repository_consistency</code> check. You can locally run that check by executing the following:",at,le,rt,ie,el="This checks that:",ct,oe,tl="<li>All objects added to the init are documented (performed by <code>utils/check_repo.py</code>)</li> <li>All <code>__init__.py</code> files have the same content in their two sections (performed by <code>utils/check_inits.py</code>)</li> <li>All code identified as a copy from another module is consistent with the original (performed by <code>utils/check_copies.py</code>)</li> <li>All configuration classes have at least one valid checkpoint mentioned in their docstrings (performed by <code>utils/check_config_docstrings.py</code>)</li> <li>All configuration classes only contain attributes that are used in corresponding modeling files (performed by <code>utils/check_config_attributes.py</code>)</li> <li>The translations of the READMEs and the index of the doc have the same model list as the main README (performed by <code>utils/check_copies.py</code>)</li> <li>The auto-generated tables in the documentation are up to date (performed by <code>utils/check_table.py</code>)</li> <li>The library has all objects available even if not all optional dependencies are installed (performed by <code>utils/check_dummies.py</code>)</li> <li>All docstrings properly document the arguments in the signature of the object (performed by <code>utils/check_docstrings.py</code>)</li>",ft,ne,ll="Should this check fail, the first two items require manual fixing, the last four can be fixed automatically for you by running the command",dt,se,mt,ae,il="Additional checks concern PRs that add new models, mainly that:",pt,re,ol="<li>All models added are in an Auto-mapping (performed by <code>utils/check_repo.py</code>)</li> <li>All models are properly tested (performed by <code>utils/check_repo.py</code>)</li>",ht,ce,ut,fe,nl="Since the Transformers library is very opinionated with respect to model code, and each model should fully be implemented in a single file without relying on other models, we have added a mechanism that checks whether a copy of the code of a layer of a given model stays consistent with the original. This way, when there is a bug fix, we can see all other impacted models and choose to trickle down the modification or break the copy.",bt,g,yt,de,sl='This mechanism relies on comments of the form <code># Copied from xxx</code>. The <code>xxx</code> should contain the whole path to the class of function which is being copied below. For instance, <code>RobertaSelfOutput</code> is a direct copy of the <code>BertSelfOutput</code> class, so you can see <a href="https://github.com/huggingface/transformers/blob/2bd7a27a671fd1d98059124024f580f8f5c0f3b5/src/transformers/models/roberta/modeling_roberta.py#L289" rel="nofollow">here</a> it has a comment:',$t,me,wt,pe,al='Note that instead of applying this to a whole class, you can apply it to the relevant methods that are copied from. For instance <a href="https://github.com/huggingface/transformers/blob/2bd7a27a671fd1d98059124024f580f8f5c0f3b5/src/transformers/models/roberta/modeling_roberta.py#L598" rel="nofollow">here</a> you can see how <code>RobertaPreTrainedModel._init_weights</code> is copied from the same method in <code>BertPreTrainedModel</code> with the comment:',gt,he,vt,ue,rl='Sometimes the copy is exactly the same except for names: for instance in <code>RobertaAttention</code>, we use <code>RobertaSelfAttention</code> insted of <code>BertSelfAttention</code> but other than that, the code is exactly the same. This is why <code># Copied from</code> supports simple string replacements with the following syntax: <code>Copied from xxx with foo-&gt;bar</code>. This means the code is copied with all instances of <code>foo</code> being replaced by <code>bar</code>. You can see how it used <a href="https://github.com/huggingface/transformers/blob/2bd7a27a671fd1d98059124024f580f8f5c0f3b5/src/transformers/models/roberta/modeling_roberta.py#L304C1-L304C86" rel="nofollow">here</a> in <code>RobertaAttention</code> with the comment:',Ct,be,Tt,ye,cl="Note that there shouldn’t be any spaces around the arrow (unless that space is part of the pattern to replace of course).",xt,$e,fl='You can add several patterns separated by a comma. For instance here <code>CamemberForMaskedLM</code> is a direct copy of <code>RobertaForMaskedLM</code> with two replacements: <code>Roberta</code> to <code>Camembert</code> and <code>ROBERTA</code> to <code>CAMEMBERT</code>. You can see <a href="https://github.com/huggingface/transformers/blob/15082a9dc6950ecae63a0d3e5060b2fc7f15050a/src/transformers/models/camembert/modeling_camembert.py#L929" rel="nofollow">here</a> this is done with the comment:',kt,we,_t,ge,dl="If the order matters (because one of the replacements might conflict with a previous one), the replacements are executed from left to right.",Mt,v,Rt,ve,ml='Another way when the patterns are just different casings of the same replacement (with an uppercased and a lowercased variants) is just to add the option <code>all-casing</code>. <a href="https://github.com/huggingface/transformers/blob/15082a9dc6950ecae63a0d3e5060b2fc7f15050a/src/transformers/models/mobilebert/modeling_mobilebert.py#L1237" rel="nofollow">Here</a> is an example in <code>MobileBertForSequenceClassification</code> with the comment:',Lt,Ce,Ht,Te,pl="In this case, the code is copied from <code>BertForSequenceClassification</code> by replacing:",Pt,xe,hl="<li><code>Bert</code> by <code>MobileBert</code> (for instance when using <code>MobileBertModel</code> in the init)</li> <li><code>bert</code> by <code>mobilebert</code> (for instance when defining <code>self.mobilebert</code>)</li> <li><code>BERT</code> by <code>MOBILEBERT</code> (in the constant <code>MOBILEBERT_INPUTS_DOCSTRING</code>)</li>",Jt,Me,Wt;return C=new _e({props:{title:"Checks on a Pull Request",local:"checks-on-a-pull-request",headingTag:"h1"}}),M=new y({props:{code:"cGlwJTIwaW5zdGFsbCUyMHRyYW5zZm9ybWVycyU1QmRldiU1RA==",highlighted:"pip install transformers[dev]",wrap:!1}}),L=new y({props:{code:"cGlwJTIwaW5zdGFsbCUyMC1lJTIwLiU1QmRldiU1RA==",highlighted:"pip install -e .[dev]",wrap:!1}}),P=new y({props:{code:"cGlwJTIwaW5zdGFsbCUyMHRyYW5zZm9ybWVycyU1QnF1YWxpdHklNUQ=",highlighted:"pip install transformers[quality]",wrap:!1}}),W=new y({props:{code:"cGlwJTIwaW5zdGFsbCUyMC1lJTIwLiU1QnF1YWxpdHklNUQ=",highlighted:"pip install -e .[quality]",wrap:!1}}),U=new _e({props:{title:"Tests",local:"tests",headingTag:"h2"}}),A=new y({props:{code:"cHl0aG9uJTIwdXRpbHMlMkZ0ZXN0c19mZXRjaGVyLnB5",highlighted:"python utils/tests_fetcher.py",wrap:!1}}),B=new y({props:{code:"cHl0aG9uJTIwLW0lMjBweXRlc3QlMjAtbiUyMDglMjAtLWRpc3QlM0Rsb2FkZmlsZSUyMC1yQSUyMC1zJTIwJTI0KGNhdCUyMHRlc3RfbGlzdC50eHQp",highlighted:'python -m pytest -n 8 --dist=loadfile -rA -s $(<span class="hljs-built_in">cat</span> test_list.txt)',wrap:!1}}),G=new _e({props:{title:"Documentation build",local:"documentation-build",headingTag:"h2"}}),E=new _e({props:{title:"Code and documentation style",local:"code-and-documentation-style",headingTag:"h2"}}),q=new y({props:{code:"bWFrZSUyMHN0eWxl",highlighted:"make style",wrap:!1}}),X=new y({props:{code:"bWFrZSUyMHF1YWxpdHk=",highlighted:"make quality",wrap:!1}}),D=new y({props:{code:"bWFrZSUyMGZpeHVw",highlighted:"make fixup",wrap:!1}}),ee=new _e({props:{title:"Repository consistency",local:"repository-consistency",headingTag:"h2"}}),le=new y({props:{code:"bWFrZSUyMHJlcG8tY29uc2lzdGVuY3k=",highlighted:"make repo-consistency",wrap:!1}}),se=new y({props:{code:"bWFrZSUyMGZpeC1jb3BpZXM=",highlighted:"make fix-copies",wrap:!1}}),ce=new _e({props:{title:"Check copies",local:"check-copies",headingTag:"h3"}}),g=new wl({props:{$$slots:{default:[Ml]},$$scope:{ctx:ke}}}),me=new y({props:{code:"JTIzJTIwQ29waWVkJTIwZnJvbSUyMHRyYW5zZm9ybWVycy5tb2RlbHMuYmVydC5tb2RlbGluZ19iZXJ0LkJlcnRTZWxmT3V0cHV0",highlighted:'<span class="hljs-comment"># Copied from transformers.models.bert.modeling_bert.BertSelfOutput</span>',wrap:!1}}),he=new y({props:{code:"JTIzJTIwQ29waWVkJTIwZnJvbSUyMHRyYW5zZm9ybWVycy5tb2RlbHMuYmVydC5tb2RlbGluZ19iZXJ0LkJlcnRQcmVUcmFpbmVkTW9kZWwuX2luaXRfd2VpZ2h0cw==",highlighted:'<span class="hljs-comment"># Copied from transformers.models.bert.modeling_bert.BertPreTrainedModel._init_weights</span>',wrap:!1}}),be=new y({props:{code:"JTIzJTIwQ29waWVkJTIwZnJvbSUyMHRyYW5zZm9ybWVycy5tb2RlbHMuYmVydC5tb2RlbGluZ19iZXJ0LkJlcnRBdHRlbnRpb24lMjB3aXRoJTIwQmVydC0lM0VSb2JlcnRh",highlighted:'<span class="hljs-comment"># Copied from transformers.models.bert.modeling_bert.BertAttention with Bert-&gt;Roberta</span>',wrap:!1}}),we=new y({props:{code:"JTIzJTIwQ29waWVkJTIwZnJvbSUyMHRyYW5zZm9ybWVycy5tb2RlbHMucm9iZXJ0YS5tb2RlbGluZ19yb2JlcnRhLlJvYmVydGFGb3JNYXNrZWRMTSUyMHdpdGglMjBSb2JlcnRhLSUzRUNhbWVtYmVydCUyQyUyMFJPQkVSVEEtJTNFQ0FNRU1CRVJU",highlighted:'<span class="hljs-comment"># Copied from transformers.models.roberta.modeling_roberta.RobertaForMaskedLM with Roberta-&gt;Camembert, ROBERTA-&gt;CAMEMBERT</span>',wrap:!1}}),v=new wl({props:{$$slots:{default:[Rl]},$$scope:{ctx:ke}}}),Ce=new y({props:{code:"JTIzJTIwQ29waWVkJTIwZnJvbSUyMHRyYW5zZm9ybWVycy5tb2RlbHMuYmVydC5tb2RlbGluZ19iZXJ0LkJlcnRGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uJTIwd2l0aCUyMEJlcnQtJTNFTW9iaWxlQmVydCUyMGFsbC1jYXNpbmc=",highlighted:'<span class="hljs-comment"># Copied from transformers.models.bert.modeling_bert.BertForSequenceClassification with Bert-&gt;MobileBert all-casing</span>',wrap:!1}}),{c(){c=s("meta"),$=o(),b=s("p"),w=o(),f(C.$$.fragment),Re=o(),T=s("p"),T.textContent=Ut,Le=o(),x=s("ul"),x.innerHTML=It,He=o(),k=s("p"),k.textContent=Zt,Pe=o(),_=s("p"),_.textContent=At,Je=o(),f(M.$$.fragment),We=o(),R=s("p"),R.textContent=jt,Ue=o(),f(L.$$.fragment),Ie=o(),H=s("p"),H.textContent=Ft,Ze=o(),f(P.$$.fragment),Ae=o(),J=s("p"),J.textContent=St,je=o(),f(W.$$.fragment),Fe=o(),f(U.$$.fragment),Se=o(),I=s("p"),I.innerHTML=Bt,Be=o(),Z=s("p"),Z.textContent=Vt,Ve=o(),f(A.$$.fragment),Ge=o(),j=s("p"),j.textContent=Gt,ze=o(),F=s("ol"),F.innerHTML=zt,Ye=o(),S=s("p"),S.innerHTML=Yt,Ee=o(),f(B.$$.fragment),Qe=o(),V=s("p"),V.textContent=Et,qe=o(),f(G.$$.fragment),Ne=o(),z=s("p"),z.innerHTML=Qt,Xe=o(),Y=s("p"),Y.innerHTML=qt,Oe=o(),f(E.$$.fragment),De=o(),Q=s("p"),Q.innerHTML=Nt,Ke=o(),f(q.$$.fragment),et=o(),N=s("p"),N.innerHTML=Xt,tt=o(),f(X.$$.fragment),lt=o(),O=s("p"),O.textContent=Ot,it=o(),f(D.$$.fragment),ot=o(),K=s("p"),K.textContent=Dt,nt=o(),f(ee.$$.fragment),st=o(),te=s("p"),te.innerHTML=Kt,at=o(),f(le.$$.fragment),rt=o(),ie=s("p"),ie.textContent=el,ct=o(),oe=s("ul"),oe.innerHTML=tl,ft=o(),ne=s("p"),ne.textContent=ll,dt=o(),f(se.$$.fragment),mt=o(),ae=s("p"),ae.textContent=il,pt=o(),re=s("ul"),re.innerHTML=ol,ht=o(),f(ce.$$.fragment),ut=o(),fe=s("p"),fe.textContent=nl,bt=o(),f(g.$$.fragment),yt=o(),de=s("p"),de.innerHTML=sl,$t=o(),f(me.$$.fragment),wt=o(),pe=s("p"),pe.innerHTML=al,gt=o(),f(he.$$.fragment),vt=o(),ue=s("p"),ue.innerHTML=rl,Ct=o(),f(be.$$.fragment),Tt=o(),ye=s("p"),ye.textContent=cl,xt=o(),$e=s("p"),$e.innerHTML=fl,kt=o(),f(we.$$.fragment),_t=o(),ge=s("p"),ge.textContent=dl,Mt=o(),f(v.$$.fragment),Rt=o(),ve=s("p"),ve.innerHTML=ml,Lt=o(),f(Ce.$$.fragment),Ht=o(),Te=s("p"),Te.innerHTML=pl,Pt=o(),xe=s("ul"),xe.innerHTML=hl,Jt=o(),Me=s("p"),this.h()},l(e){const t=kl("svelte-u9bgzb",document.head);c=a(t,"META",{name:!0,content:!0}),t.forEach(l),$=n(e),b=a(e,"P",{}),yl(b).forEach(l),w=n(e),d(C.$$.fragment,e),Re=n(e),T=a(e,"P",{"data-svelte-h":!0}),r(T)!=="svelte-mfcqvi"&&(T.textContent=Ut),Le=n(e),x=a(e,"UL",{"data-svelte-h":!0}),r(x)!=="svelte-7gwdt4"&&(x.innerHTML=It),He=n(e),k=a(e,"P",{"data-svelte-h":!0}),r(k)!=="svelte-14xytys"&&(k.textContent=Zt),Pe=n(e),_=a(e,"P",{"data-svelte-h":!0}),r(_)!=="svelte-jq7ugl"&&(_.textContent=At),Je=n(e),d(M.$$.fragment,e),We=n(e),R=a(e,"P",{"data-svelte-h":!0}),r(R)!=="svelte-hjndji"&&(R.textContent=jt),Ue=n(e),d(L.$$.fragment,e),Ie=n(e),H=a(e,"P",{"data-svelte-h":!0}),r(H)!=="svelte-xvzg4q"&&(H.textContent=Ft),Ze=n(e),d(P.$$.fragment,e),Ae=n(e),J=a(e,"P",{"data-svelte-h":!0}),r(J)!=="svelte-hjndji"&&(J.textContent=St),je=n(e),d(W.$$.fragment,e),Fe=n(e),d(U.$$.fragment,e),Se=n(e),I=a(e,"P",{"data-svelte-h":!0}),r(I)!=="svelte-8lbsem"&&(I.innerHTML=Bt),Be=n(e),Z=a(e,"P",{"data-svelte-h":!0}),r(Z)!=="svelte-1ks1vdv"&&(Z.textContent=Vt),Ve=n(e),d(A.$$.fragment,e),Ge=n(e),j=a(e,"P",{"data-svelte-h":!0}),r(j)!=="svelte-1owko4k"&&(j.textContent=Gt),ze=n(e),F=a(e,"OL",{"data-svelte-h":!0}),r(F)!=="svelte-1m6nsxv"&&(F.innerHTML=zt),Ye=n(e),S=a(e,"P",{"data-svelte-h":!0}),r(S)!=="svelte-t6w0g4"&&(S.innerHTML=Yt),Ee=n(e),d(B.$$.fragment,e),Qe=n(e),V=a(e,"P",{"data-svelte-h":!0}),r(V)!=="svelte-1qsy2ji"&&(V.textContent=Et),qe=n(e),d(G.$$.fragment,e),Ne=n(e),z=a(e,"P",{"data-svelte-h":!0}),r(z)!=="svelte-1t2mnks"&&(z.innerHTML=Qt),Xe=n(e),Y=a(e,"P",{"data-svelte-h":!0}),r(Y)!=="svelte-1w4hb9f"&&(Y.innerHTML=qt),Oe=n(e),d(E.$$.fragment,e),De=n(e),Q=a(e,"P",{"data-svelte-h":!0}),r(Q)!=="svelte-86ohgs"&&(Q.innerHTML=Nt),Ke=n(e),d(q.$$.fragment,e),et=n(e),N=a(e,"P",{"data-svelte-h":!0}),r(N)!=="svelte-18uftjq"&&(N.innerHTML=Xt),tt=n(e),d(X.$$.fragment,e),lt=n(e),O=a(e,"P",{"data-svelte-h":!0}),r(O)!=="svelte-1yyoft9"&&(O.textContent=Ot),it=n(e),d(D.$$.fragment,e),ot=n(e),K=a(e,"P",{"data-svelte-h":!0}),r(K)!=="svelte-1v9lvp1"&&(K.textContent=Dt),nt=n(e),d(ee.$$.fragment,e),st=n(e),te=a(e,"P",{"data-svelte-h":!0}),r(te)!=="svelte-1gur8dh"&&(te.innerHTML=Kt),at=n(e),d(le.$$.fragment,e),rt=n(e),ie=a(e,"P",{"data-svelte-h":!0}),r(ie)!=="svelte-1skzj10"&&(ie.textContent=el),ct=n(e),oe=a(e,"UL",{"data-svelte-h":!0}),r(oe)!=="svelte-3r3yvz"&&(oe.innerHTML=tl),ft=n(e),ne=a(e,"P",{"data-svelte-h":!0}),r(ne)!=="svelte-166aluj"&&(ne.textContent=ll),dt=n(e),d(se.$$.fragment,e),mt=n(e),ae=a(e,"P",{"data-svelte-h":!0}),r(ae)!=="svelte-13f5xdc"&&(ae.textContent=il),pt=n(e),re=a(e,"UL",{"data-svelte-h":!0}),r(re)!=="svelte-oi1hl3"&&(re.innerHTML=ol),ht=n(e),d(ce.$$.fragment,e),ut=n(e),fe=a(e,"P",{"data-svelte-h":!0}),r(fe)!=="svelte-1elhmg"&&(fe.textContent=nl),bt=n(e),d(g.$$.fragment,e),yt=n(e),de=a(e,"P",{"data-svelte-h":!0}),r(de)!=="svelte-13pral3"&&(de.innerHTML=sl),$t=n(e),d(me.$$.fragment,e),wt=n(e),pe=a(e,"P",{"data-svelte-h":!0}),r(pe)!=="svelte-1br9gtf"&&(pe.innerHTML=al),gt=n(e),d(he.$$.fragment,e),vt=n(e),ue=a(e,"P",{"data-svelte-h":!0}),r(ue)!=="svelte-18lc9k7"&&(ue.innerHTML=rl),Ct=n(e),d(be.$$.fragment,e),Tt=n(e),ye=a(e,"P",{"data-svelte-h":!0}),r(ye)!=="svelte-3dc4oy"&&(ye.textContent=cl),xt=n(e),$e=a(e,"P",{"data-svelte-h":!0}),r($e)!=="svelte-ze9xyk"&&($e.innerHTML=fl),kt=n(e),d(we.$$.fragment,e),_t=n(e),ge=a(e,"P",{"data-svelte-h":!0}),r(ge)!=="svelte-j0e4bk"&&(ge.textContent=dl),Mt=n(e),d(v.$$.fragment,e),Rt=n(e),ve=a(e,"P",{"data-svelte-h":!0}),r(ve)!=="svelte-1sznjiv"&&(ve.innerHTML=ml),Lt=n(e),d(Ce.$$.fragment,e),Ht=n(e),Te=a(e,"P",{"data-svelte-h":!0}),r(Te)!=="svelte-14tbfun"&&(Te.innerHTML=pl),Pt=n(e),xe=a(e,"UL",{"data-svelte-h":!0}),r(xe)!=="svelte-l4jtg4"&&(xe.innerHTML=hl),Jt=n(e),Me=a(e,"P",{}),yl(Me).forEach(l),this.h()},h(){$l(c,"name","hf:doc:metadata"),$l(c,"content",Hl)},m(e,t){_l(document.head,c),i(e,$,t),i(e,b,t),i(e,w,t),m(C,e,t),i(e,Re,t),i(e,T,t),i(e,Le,t),i(e,x,t),i(e,He,t),i(e,k,t),i(e,Pe,t),i(e,_,t),i(e,Je,t),m(M,e,t),i(e,We,t),i(e,R,t),i(e,Ue,t),m(L,e,t),i(e,Ie,t),i(e,H,t),i(e,Ze,t),m(P,e,t),i(e,Ae,t),i(e,J,t),i(e,je,t),m(W,e,t),i(e,Fe,t),m(U,e,t),i(e,Se,t),i(e,I,t),i(e,Be,t),i(e,Z,t),i(e,Ve,t),m(A,e,t),i(e,Ge,t),i(e,j,t),i(e,ze,t),i(e,F,t),i(e,Ye,t),i(e,S,t),i(e,Ee,t),m(B,e,t),i(e,Qe,t),i(e,V,t),i(e,qe,t),m(G,e,t),i(e,Ne,t),i(e,z,t),i(e,Xe,t),i(e,Y,t),i(e,Oe,t),m(E,e,t),i(e,De,t),i(e,Q,t),i(e,Ke,t),m(q,e,t),i(e,et,t),i(e,N,t),i(e,tt,t),m(X,e,t),i(e,lt,t),i(e,O,t),i(e,it,t),m(D,e,t),i(e,ot,t),i(e,K,t),i(e,nt,t),m(ee,e,t),i(e,st,t),i(e,te,t),i(e,at,t),m(le,e,t),i(e,rt,t),i(e,ie,t),i(e,ct,t),i(e,oe,t),i(e,ft,t),i(e,ne,t),i(e,dt,t),m(se,e,t),i(e,mt,t),i(e,ae,t),i(e,pt,t),i(e,re,t),i(e,ht,t),m(ce,e,t),i(e,ut,t),i(e,fe,t),i(e,bt,t),m(g,e,t),i(e,yt,t),i(e,de,t),i(e,$t,t),m(me,e,t),i(e,wt,t),i(e,pe,t),i(e,gt,t),m(he,e,t),i(e,vt,t),i(e,ue,t),i(e,Ct,t),m(be,e,t),i(e,Tt,t),i(e,ye,t),i(e,xt,t),i(e,$e,t),i(e,kt,t),m(we,e,t),i(e,_t,t),i(e,ge,t),i(e,Mt,t),m(v,e,t),i(e,Rt,t),i(e,ve,t),i(e,Lt,t),m(Ce,e,t),i(e,Ht,t),i(e,Te,t),i(e,Pt,t),i(e,xe,t),i(e,Jt,t),i(e,Me,t),Wt=!0},p(e,[t]){const ul={};t&2&&(ul.$$scope={dirty:t,ctx:e}),g.$set(ul);const bl={};t&2&&(bl.$$scope={dirty:t,ctx:e}),v.$set(bl)},i(e){Wt||(p(C.$$.fragment,e),p(M.$$.fragment,e),p(L.$$.fragment,e),p(P.$$.fragment,e),p(W.$$.fragment,e),p(U.$$.fragment,e),p(A.$$.fragment,e),p(B.$$.fragment,e),p(G.$$.fragment,e),p(E.$$.fragment,e),p(q.$$.fragment,e),p(X.$$.fragment,e),p(D.$$.fragment,e),p(ee.$$.fragment,e),p(le.$$.fragment,e),p(se.$$.fragment,e),p(ce.$$.fragment,e),p(g.$$.fragment,e),p(me.$$.fragment,e),p(he.$$.fragment,e),p(be.$$.fragment,e),p(we.$$.fragment,e),p(v.$$.fragment,e),p(Ce.$$.fragment,e),Wt=!0)},o(e){h(C.$$.fragment,e),h(M.$$.fragment,e),h(L.$$.fragment,e),h(P.$$.fragment,e),h(W.$$.fragment,e),h(U.$$.fragment,e),h(A.$$.fragment,e),h(B.$$.fragment,e),h(G.$$.fragment,e),h(E.$$.fragment,e),h(q.$$.fragment,e),h(X.$$.fragment,e),h(D.$$.fragment,e),h(ee.$$.fragment,e),h(le.$$.fragment,e),h(se.$$.fragment,e),h(ce.$$.fragment,e),h(g.$$.fragment,e),h(me.$$.fragment,e),h(he.$$.fragment,e),h(be.$$.fragment,e),h(we.$$.fragment,e),h(v.$$.fragment,e),h(Ce.$$.fragment,e),Wt=!1},d(e){e&&(l($),l(b),l(w),l(Re),l(T),l(Le),l(x),l(He),l(k),l(Pe),l(_),l(Je),l(We),l(R),l(Ue),l(Ie),l(H),l(Ze),l(Ae),l(J),l(je),l(Fe),l(Se),l(I),l(Be),l(Z),l(Ve),l(Ge),l(j),l(ze),l(F),l(Ye),l(S),l(Ee),l(Qe),l(V),l(qe),l(Ne),l(z),l(Xe),l(Y),l(Oe),l(De),l(Q),l(Ke),l(et),l(N),l(tt),l(lt),l(O),l(it),l(ot),l(K),l(nt),l(st),l(te),l(at),l(rt),l(ie),l(ct),l(oe),l(ft),l(ne),l(dt),l(mt),l(ae),l(pt),l(re),l(ht),l(ut),l(fe),l(bt),l(yt),l(de),l($t),l(wt),l(pe),l(gt),l(vt),l(ue),l(Ct),l(Tt),l(ye),l(xt),l($e),l(kt),l(_t),l(ge),l(Mt),l(Rt),l(ve),l(Lt),l(Ht),l(Te),l(Pt),l(xe),l(Jt),l(Me)),l(c),u(C,e),u(M,e),u(L,e),u(P,e),u(W,e),u(U,e),u(A,e),u(B,e),u(G,e),u(E,e),u(q,e),u(X,e),u(D,e),u(ee,e),u(le,e),u(se,e),u(ce,e),u(g,e),u(me,e),u(he,e),u(be,e),u(we,e),u(v,e),u(Ce,e)}}}const Hl='{"title":"Checks on a Pull Request","local":"checks-on-a-pull-request","sections":[{"title":"Tests","local":"tests","sections":[],"depth":2},{"title":"Documentation build","local":"documentation-build","sections":[],"depth":2},{"title":"Code and documentation style","local":"code-and-documentation-style","sections":[],"depth":2},{"title":"Repository consistency","local":"repository-consistency","sections":[{"title":"Check copies","local":"check-copies","sections":[],"depth":3}],"depth":2}],"depth":1}';function Pl(ke){return Cl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Al extends Tl{constructor(c){super(),xl(this,c,Pl,Ll,vl,{})}}export{Al as component};