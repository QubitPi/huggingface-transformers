import{s as Fr,o as kr,n as Wr}from"../chunks/scheduler.9bc65507.js";import{S as Dr,i as Br,g as o,s,r as d,m as Or,A as Gr,h as i,f as t,c as l,j as h,u as p,x as a,n as Zr,k as _,y as g,a as n,v as u,d as c,t as b,w as $}from"../chunks/index.707bf1b6.js";import{T as jr}from"../chunks/Tip.c2ecdbf4.js";import{D as w}from"../chunks/Docstring.17db21ae.js";import{C as Qe}from"../chunks/CodeBlock.54a9f38d.js";import{E as Qr}from"../chunks/ExampleCodeBlock.4f515aa9.js";import{H as Wt}from"../chunks/Heading.342b1fa6.js";function qr(Ce){let f,P="🤗 Transformers has following logging levels:",y,v,x="<li>50: <code>transformers.logging.CRITICAL</code> or <code>transformers.logging.FATAL</code></li> <li>40: <code>transformers.logging.ERROR</code></li> <li>30: <code>transformers.logging.WARNING</code> or <code>transformers.logging.WARN</code></li> <li>20: <code>transformers.logging.INFO</code></li> <li>10: <code>transformers.logging.DEBUG</code></li>";return{c(){f=o("p"),f.textContent=P,y=s(),v=o("ul"),v.innerHTML=x},l(m){f=i(m,"P",{"data-svelte-h":!0}),a(f)!=="svelte-xr075s"&&(f.textContent=P),y=l(m),v=i(m,"UL",{"data-svelte-h":!0}),a(v)!=="svelte-1s22l0g"&&(v.innerHTML=x)},m(m,T){n(m,f,T),n(m,y,T),n(m,v,T)},p:Wr,d(m){m&&(t(f),t(y),t(v))}}}function zr(Ce){let f,P="Enable explicit formatting for every HuggingFace Transformers’s logger. The explicit formatter is as follows:",y,v,x;return v=new Qe({props:{code:"JTIwJTIwJTIwJTIwJTVCTEVWRUxOQU1FJTdDRklMRU5BTUUlN0NMSU5FJTIwTlVNQkVSJTVEJTIwVElNRSUyMCUzRSUzRSUyME1FU1NBR0U=",highlighted:'    [LEVELNAME|<span class="hljs-type">FILENAME</span>|<span class="hljs-type">LINE</span> NUMBER] TIME &gt;&gt; MESSAGE',wrap:!1}}),{c(){f=o("p"),f.textContent=P,y=s(),d(v.$$.fragment)},l(m){f=i(m,"P",{"data-svelte-h":!0}),a(f)!=="svelte-1db65t5"&&(f.textContent=P),y=l(m),p(v.$$.fragment,m)},m(m,T){n(m,f,T),n(m,y,T),u(v,m,T),x=!0},p:Wr,i(m){x||(c(v.$$.fragment,m),x=!0)},o(m){b(v.$$.fragment,m),x=!1},d(m){m&&(t(f),t(y)),$(v,m)}}}function Xr(Ce){let f,P,y,v,x,m,T,ir="🤗 Transformersには、ライブラリの詳細度を簡単に設定できる中央集中型のロギングシステムがあります。",qe,B,gr="現在、ライブラリのデフォルトの詳細度は「WARNING」です。",ze,O,ar="詳細度を変更するには、直接設定メソッドの1つを使用するだけです。例えば、詳細度をINFOレベルに変更する方法は以下の通りです。",Xe,G,Ye,Z,mr=`環境変数 <code>TRANSFORMERS_VERBOSITY</code> を使用して、デフォルトの冗長性をオーバーライドすることもできます。設定できます
<code>debug</code>、<code>info</code>、<code>warning</code>、<code>error</code>、<code>critical</code> のいずれかに変更します。例えば：`,Ke,j,et,Q,fr=`さらに、一部の「警告」は環境変数を設定することで無効にできます。
<code>TRANSFORMERS_NO_ADVISORY_WARNINGS</code> を <em>1</em> などの true 値に設定します。これにより、次を使用してログに記録される警告が無効になります。
<code>logger.warning_advice</code>。例えば：`,tt,q,rt,z,dr="以下は、独自のモジュールまたはスクリプトでライブラリと同じロガーを使用する方法の例です。",nt,X,st,Y,pr=`このロギング モジュールのすべてのメソッドは以下に文書化されています。主なメソッドは次のとおりです。
<a href="/docs/transformers/main/ja/main_classes/logging#transformers.utils.logging.get_verbosity">logging.get_verbosity()</a> ロガーの現在の冗長レベルを取得します。
<a href="/docs/transformers/main/ja/main_classes/logging#transformers.utils.logging.set_verbosity">logging.set_verbosity()</a> を使用して、冗長性を選択したレベルに設定します。順番に（少ないものから）
冗長から最も冗長まで)、それらのレベル (括弧内は対応する int 値) は次のとおりです。`,lt,K,ur=`<li><code>transformers.logging.CRITICAL</code> または <code>transformers.logging.FATAL</code> (int 値、50): 最も多いもののみをレポートします。
重大なエラー。</li> <li><code>transformers.logging.ERROR</code> (int 値、40): エラーのみを報告します。</li> <li><code>transformers.logging.WARNING</code> または <code>transformers.logging.WARN</code> (int 値、30): エラーと
警告。これはライブラリで使用されるデフォルトのレベルです。</li> <li><code>transformers.logging.INFO</code> (int 値、20): エラー、警告、および基本情報をレポートします。</li> <li><code>transformers.logging.DEBUG</code> (int 値、10): すべての情報をレポートします。</li>`,ot,ee,cr='デフォルトでは、モデルのダウンロード中に「tqdm」進行状況バーが表示されます。 <a href="/docs/transformers/main/ja/main_classes/logging#transformers.utils.logging.disable_progress_bar">logging.disable_progress_bar()</a> および <a href="/docs/transformers/main/ja/main_classes/logging#transformers.utils.logging.enable_progress_bar">logging.enable_progress_bar()</a> を使用して、この動作を抑制または抑制解除できます。',it,te,gt,re,br=`Python には、よく組み合わせて使用​​される 2 つのロギング システムがあります。上で説明した <code>logging</code> と <code>warnings</code> です。
これにより、特定のバケット内の警告をさらに分類できます (例: 機能またはパスの<code>FutureWarning</code>)
これはすでに非推奨になっており、<code>DeprecationWarning</code>は今後の非推奨を示します。`,at,ne,$r=`両方とも<code>transformers</code>ライブラリで使用します。 <code>logging</code>の<code>captureWarning</code>メソッドを活用して適応させて、
これらの警告メッセージは、上記の冗長設定ツールによって管理されます。`,mt,se,vr="それはライブラリの開発者にとって何を意味しますか?次のヒューリスティックを尊重する必要があります。",ft,le,hr="<li><code>warnings</code>は、ライブラリおよび<code>transformers</code>に依存するライブラリの開発者に優先されるべきです。</li> <li><code>logging</code>は、日常のプロジェクトでライブラリを使用するライブラリのエンドユーザーに使用する必要があります。</li>",dt,oe,_r="以下の<code>captureWarnings</code>メソッドのリファレンスを参照してください。",pt,C,ie,Ft,we,yr=`Calls the <code>captureWarnings</code> method from the logging library to enable management of the warnings emitted by the
<code>warnings</code> library.`,kt,Le,xr=`Read more about this method here:
<a href="https://docs.python.org/3/library/logging.html#integration-with-the-warnings-module" rel="nofollow">https://docs.python.org/3/library/logging.html#integration-with-the-warnings-module</a>`,Dt,Me,Tr="All warnings will be logged through the <code>py.warnings</code> logger.",Bt,Re,Cr=`Careful: this method also adds a handler to this logger if it does not already have one, and updates the logging
level of that logger to the library’s root logger.`,ut,ge,ct,N,ae,Ot,Ee,wr="Set the verbosity to the <code>ERROR</code> level.",bt,H,me,Gt,Pe,Lr="Set the verbosity to the <code>WARNING</code> level.",$t,J,fe,Zt,Ie,Mr="Set the verbosity to the <code>INFO</code> level.",vt,V,de,jt,Ne,Rr="Set the verbosity to the <code>DEBUG</code> level.",ht,pe,_t,M,ue,Qt,He,Er="Return the current level for the 🤗 Transformers’s root logger as an int.",qt,k,yt,U,ce,zt,Je,Pr="Set the verbosity level for the 🤗 Transformers’s root logger.",xt,R,be,Xt,Ve,Ir="Return a logger with the specified name.",Yt,Ue,Nr="This function is not supposed to be directly accessed unless you are writing a custom transformers module.",Tt,A,$e,Kt,Ae,Hr="Enable the default handler of the HuggingFace Transformers’s root logger.",Ct,S,ve,er,Se,Jr="Disable the default handler of the HuggingFace Transformers’s root logger.",wt,I,he,tr,D,rr,Lt,E,_e,nr,We,Vr="Resets the formatting for HuggingFace Transformers’s loggers.",sr,Fe,Ur="All handlers currently bound to the root logger are affected by this method.",Mt,W,ye,lr,ke,Ar="Enable tqdm progress bar.",Rt,F,xe,or,De,Sr="Disable tqdm progress bar.",Et,Ze,Pt;return x=new Wt({props:{title:"Logging",local:"logging",headingTag:"h1"}}),G=new Qe({props:{code:"aW1wb3J0JTIwdHJhbnNmb3JtZXJzJTBBJTBBdHJhbnNmb3JtZXJzLmxvZ2dpbmcuc2V0X3ZlcmJvc2l0eV9pbmZvKCk=",highlighted:`<span class="hljs-keyword">import</span> transformers

transformers.logging.set_verbosity_info()`,wrap:!1}}),j=new Qe({props:{code:"VFJBTlNGT1JNRVJTX1ZFUkJPU0lUWSUzRGVycm9yJTIwLiUyRm15cHJvZ3JhbS5weQ==",highlighted:"TRANSFORMERS_VERBOSITY=error ./myprogram.py",wrap:!1}}),q=new Qe({props:{code:"VFJBTlNGT1JNRVJTX05PX0FEVklTT1JZX1dBUk5JTkdTJTNEMSUyMC4lMkZteXByb2dyYW0ucHk=",highlighted:"TRANSFORMERS_NO_ADVISORY_WARNINGS=1 ./myprogram.py",wrap:!1}}),X=new Qe({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycy51dGlscyUyMGltcG9ydCUyMGxvZ2dpbmclMEElMEFsb2dnaW5nLnNldF92ZXJib3NpdHlfaW5mbygpJTBBbG9nZ2VyJTIwJTNEJTIwbG9nZ2luZy5nZXRfbG9nZ2VyKCUyMnRyYW5zZm9ybWVycyUyMiklMEFsb2dnZXIuaW5mbyglMjJJTkZPJTIyKSUwQWxvZ2dlci53YXJuaW5nKCUyMldBUk4lMjIp",highlighted:`<span class="hljs-keyword">from</span> transformers.utils <span class="hljs-keyword">import</span> logging

logging.set_verbosity_info()
logger = logging.get_logger(<span class="hljs-string">&quot;transformers&quot;</span>)
logger.info(<span class="hljs-string">&quot;INFO&quot;</span>)
logger.warning(<span class="hljs-string">&quot;WARN&quot;</span>)`,wrap:!1}}),te=new Wt({props:{title:"logging vs warnings",local:"transformers.utils.logging.captureWarnings",headingTag:"h2"}}),ie=new w({props:{name:"transformers.utils.logging.captureWarnings",anchor:"transformers.utils.logging.captureWarnings",parameters:[{name:"capture",val:""}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/utils/logging.py#L125"}}),ge=new Wt({props:{title:"Base setters",local:"transformers.utils.logging.set_verbosity_error",headingTag:"h2"}}),ae=new w({props:{name:"transformers.utils.logging.set_verbosity_error",anchor:"transformers.utils.logging.set_verbosity_error",parameters:[],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/utils/logging.py#L219"}}),me=new w({props:{name:"transformers.utils.logging.set_verbosity_warning",anchor:"transformers.utils.logging.set_verbosity_warning",parameters:[],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/utils/logging.py#L209"}}),fe=new w({props:{name:"transformers.utils.logging.set_verbosity_info",anchor:"transformers.utils.logging.set_verbosity_info",parameters:[],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/utils/logging.py#L204"}}),de=new w({props:{name:"transformers.utils.logging.set_verbosity_debug",anchor:"transformers.utils.logging.set_verbosity_debug",parameters:[],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/utils/logging.py#L214"}}),pe=new Wt({props:{title:"Other functions",local:"transformers.utils.logging.get_verbosity",headingTag:"h2"}}),ue=new w({props:{name:"transformers.utils.logging.get_verbosity",anchor:"transformers.utils.logging.get_verbosity",parameters:[],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/utils/logging.py#L162",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>The logging level.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>int</code></p>
`}}),k=new jr({props:{$$slots:{default:[qr]},$$scope:{ctx:Ce}}}),ce=new w({props:{name:"transformers.utils.logging.set_verbosity",anchor:"transformers.utils.logging.set_verbosity",parameters:[{name:"verbosity",val:": int"}],parametersDescription:[{anchor:"transformers.utils.logging.set_verbosity.verbosity",description:`<strong>verbosity</strong> (<code>int</code>) &#x2014;
Logging level, e.g., one of:</p>
<ul>
<li><code>transformers.logging.CRITICAL</code> or <code>transformers.logging.FATAL</code></li>
<li><code>transformers.logging.ERROR</code></li>
<li><code>transformers.logging.WARNING</code> or <code>transformers.logging.WARN</code></li>
<li><code>transformers.logging.INFO</code></li>
<li><code>transformers.logging.DEBUG</code></li>
</ul>`,name:"verbosity"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/utils/logging.py#L185"}}),be=new w({props:{name:"transformers.utils.logging.get_logger",anchor:"transformers.utils.logging.get_logger",parameters:[{name:"name",val:": Optional = None"}],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/utils/logging.py#L148"}}),$e=new w({props:{name:"transformers.utils.logging.enable_default_handler",anchor:"transformers.utils.logging.enable_default_handler",parameters:[],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/utils/logging.py#L233"}}),ve=new w({props:{name:"transformers.utils.logging.disable_default_handler",anchor:"transformers.utils.logging.disable_default_handler",parameters:[],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/utils/logging.py#L224"}}),he=new w({props:{name:"transformers.utils.logging.enable_explicit_format",anchor:"transformers.utils.logging.enable_explicit_format",parameters:[],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/utils/logging.py#L279"}}),D=new Qr({props:{anchor:"transformers.utils.logging.enable_explicit_format.example",$$slots:{default:[zr]},$$scope:{ctx:Ce}}}),_e=new w({props:{name:"transformers.utils.logging.reset_format",anchor:"transformers.utils.logging.reset_format",parameters:[],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/utils/logging.py#L294"}}),ye=new w({props:{name:"transformers.utils.logging.enable_progress_bar",anchor:"transformers.utils.logging.enable_progress_bar",parameters:[],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/utils/logging.py#L385"}}),xe=new w({props:{name:"transformers.utils.logging.disable_progress_bar",anchor:"transformers.utils.logging.disable_progress_bar",parameters:[],source:"https://github.com/QubitPi/huggingface-transformers/blob/main/src/transformers/utils/logging.py#L392"}}),{c(){f=o("meta"),P=s(),y=o("p"),v=s(),d(x.$$.fragment),m=s(),T=o("p"),T.textContent=ir,qe=s(),B=o("p"),B.textContent=gr,ze=s(),O=o("p"),O.textContent=ar,Xe=s(),d(G.$$.fragment),Ye=s(),Z=o("p"),Z.innerHTML=mr,Ke=s(),d(j.$$.fragment),et=s(),Q=o("p"),Q.innerHTML=fr,tt=s(),d(q.$$.fragment),rt=s(),z=o("p"),z.textContent=dr,nt=s(),d(X.$$.fragment),st=s(),Y=o("p"),Y.innerHTML=pr,lt=s(),K=o("ul"),K.innerHTML=ur,ot=s(),ee=o("p"),ee.innerHTML=cr,it=s(),d(te.$$.fragment),gt=s(),re=o("p"),re.innerHTML=br,at=s(),ne=o("p"),ne.innerHTML=$r,mt=s(),se=o("p"),se.textContent=vr,ft=s(),le=o("ul"),le.innerHTML=hr,dt=s(),oe=o("p"),oe.innerHTML=_r,pt=s(),C=o("div"),d(ie.$$.fragment),Ft=s(),we=o("p"),we.innerHTML=yr,kt=s(),Le=o("p"),Le.innerHTML=xr,Dt=s(),Me=o("p"),Me.innerHTML=Tr,Bt=s(),Re=o("p"),Re.textContent=Cr,ut=s(),d(ge.$$.fragment),ct=s(),N=o("div"),d(ae.$$.fragment),Ot=s(),Ee=o("p"),Ee.innerHTML=wr,bt=s(),H=o("div"),d(me.$$.fragment),Gt=s(),Pe=o("p"),Pe.innerHTML=Lr,$t=s(),J=o("div"),d(fe.$$.fragment),Zt=s(),Ie=o("p"),Ie.innerHTML=Mr,vt=s(),V=o("div"),d(de.$$.fragment),jt=s(),Ne=o("p"),Ne.innerHTML=Rr,ht=s(),d(pe.$$.fragment),_t=s(),M=o("div"),d(ue.$$.fragment),Qt=s(),He=o("p"),He.textContent=Er,qt=s(),d(k.$$.fragment),yt=s(),U=o("div"),d(ce.$$.fragment),zt=s(),Je=o("p"),Je.textContent=Pr,xt=s(),R=o("div"),d(be.$$.fragment),Xt=s(),Ve=o("p"),Ve.textContent=Ir,Yt=s(),Ue=o("p"),Ue.textContent=Nr,Tt=s(),A=o("div"),d($e.$$.fragment),Kt=s(),Ae=o("p"),Ae.textContent=Hr,Ct=s(),S=o("div"),d(ve.$$.fragment),er=s(),Se=o("p"),Se.textContent=Jr,wt=s(),I=o("div"),d(he.$$.fragment),tr=s(),d(D.$$.fragment),rr=Or(`
All handlers currently bound to the root logger are affected by this method.`),Lt=s(),E=o("div"),d(_e.$$.fragment),nr=s(),We=o("p"),We.textContent=Vr,sr=s(),Fe=o("p"),Fe.textContent=Ur,Mt=s(),W=o("div"),d(ye.$$.fragment),lr=s(),ke=o("p"),ke.textContent=Ar,Rt=s(),F=o("div"),d(xe.$$.fragment),or=s(),De=o("p"),De.textContent=Sr,Et=s(),Ze=o("p"),this.h()},l(e){const r=Gr("svelte-u9bgzb",document.head);f=i(r,"META",{name:!0,content:!0}),r.forEach(t),P=l(e),y=i(e,"P",{}),h(y).forEach(t),v=l(e),p(x.$$.fragment,e),m=l(e),T=i(e,"P",{"data-svelte-h":!0}),a(T)!=="svelte-1ddrx2p"&&(T.textContent=ir),qe=l(e),B=i(e,"P",{"data-svelte-h":!0}),a(B)!=="svelte-q1rfw"&&(B.textContent=gr),ze=l(e),O=i(e,"P",{"data-svelte-h":!0}),a(O)!=="svelte-x4j5ym"&&(O.textContent=ar),Xe=l(e),p(G.$$.fragment,e),Ye=l(e),Z=i(e,"P",{"data-svelte-h":!0}),a(Z)!=="svelte-17w1gia"&&(Z.innerHTML=mr),Ke=l(e),p(j.$$.fragment,e),et=l(e),Q=i(e,"P",{"data-svelte-h":!0}),a(Q)!=="svelte-1s98sfm"&&(Q.innerHTML=fr),tt=l(e),p(q.$$.fragment,e),rt=l(e),z=i(e,"P",{"data-svelte-h":!0}),a(z)!=="svelte-1nnllnv"&&(z.textContent=dr),nt=l(e),p(X.$$.fragment,e),st=l(e),Y=i(e,"P",{"data-svelte-h":!0}),a(Y)!=="svelte-8q2yz0"&&(Y.innerHTML=pr),lt=l(e),K=i(e,"UL",{"data-svelte-h":!0}),a(K)!=="svelte-x7libu"&&(K.innerHTML=ur),ot=l(e),ee=i(e,"P",{"data-svelte-h":!0}),a(ee)!=="svelte-1g4fcam"&&(ee.innerHTML=cr),it=l(e),p(te.$$.fragment,e),gt=l(e),re=i(e,"P",{"data-svelte-h":!0}),a(re)!=="svelte-e7aa8v"&&(re.innerHTML=br),at=l(e),ne=i(e,"P",{"data-svelte-h":!0}),a(ne)!=="svelte-y4kr64"&&(ne.innerHTML=$r),mt=l(e),se=i(e,"P",{"data-svelte-h":!0}),a(se)!=="svelte-bzehiz"&&(se.textContent=vr),ft=l(e),le=i(e,"UL",{"data-svelte-h":!0}),a(le)!=="svelte-3jocgz"&&(le.innerHTML=hr),dt=l(e),oe=i(e,"P",{"data-svelte-h":!0}),a(oe)!=="svelte-vldwrw"&&(oe.innerHTML=_r),pt=l(e),C=i(e,"DIV",{class:!0});var L=h(C);p(ie.$$.fragment,L),Ft=l(L),we=i(L,"P",{"data-svelte-h":!0}),a(we)!=="svelte-7noldf"&&(we.innerHTML=yr),kt=l(L),Le=i(L,"P",{"data-svelte-h":!0}),a(Le)!=="svelte-wu9e1c"&&(Le.innerHTML=xr),Dt=l(L),Me=i(L,"P",{"data-svelte-h":!0}),a(Me)!=="svelte-1rsdpfu"&&(Me.innerHTML=Tr),Bt=l(L),Re=i(L,"P",{"data-svelte-h":!0}),a(Re)!=="svelte-73l4cs"&&(Re.textContent=Cr),L.forEach(t),ut=l(e),p(ge.$$.fragment,e),ct=l(e),N=i(e,"DIV",{class:!0});var Te=h(N);p(ae.$$.fragment,Te),Ot=l(Te),Ee=i(Te,"P",{"data-svelte-h":!0}),a(Ee)!=="svelte-1ppk729"&&(Ee.innerHTML=wr),Te.forEach(t),bt=l(e),H=i(e,"DIV",{class:!0});var It=h(H);p(me.$$.fragment,It),Gt=l(It),Pe=i(It,"P",{"data-svelte-h":!0}),a(Pe)!=="svelte-12ljo43"&&(Pe.innerHTML=Lr),It.forEach(t),$t=l(e),J=i(e,"DIV",{class:!0});var Nt=h(J);p(fe.$$.fragment,Nt),Zt=l(Nt),Ie=i(Nt,"P",{"data-svelte-h":!0}),a(Ie)!=="svelte-1ruccfv"&&(Ie.innerHTML=Mr),Nt.forEach(t),vt=l(e),V=i(e,"DIV",{class:!0});var Ht=h(V);p(de.$$.fragment,Ht),jt=l(Ht),Ne=i(Ht,"P",{"data-svelte-h":!0}),a(Ne)!=="svelte-10c80ti"&&(Ne.innerHTML=Rr),Ht.forEach(t),ht=l(e),p(pe.$$.fragment,e),_t=l(e),M=i(e,"DIV",{class:!0});var Be=h(M);p(ue.$$.fragment,Be),Qt=l(Be),He=i(Be,"P",{"data-svelte-h":!0}),a(He)!=="svelte-c6o18d"&&(He.textContent=Er),qt=l(Be),p(k.$$.fragment,Be),Be.forEach(t),yt=l(e),U=i(e,"DIV",{class:!0});var Jt=h(U);p(ce.$$.fragment,Jt),zt=l(Jt),Je=i(Jt,"P",{"data-svelte-h":!0}),a(Je)!=="svelte-1pc8gq7"&&(Je.textContent=Pr),Jt.forEach(t),xt=l(e),R=i(e,"DIV",{class:!0});var Oe=h(R);p(be.$$.fragment,Oe),Xt=l(Oe),Ve=i(Oe,"P",{"data-svelte-h":!0}),a(Ve)!=="svelte-155a6rh"&&(Ve.textContent=Ir),Yt=l(Oe),Ue=i(Oe,"P",{"data-svelte-h":!0}),a(Ue)!=="svelte-7r9l0i"&&(Ue.textContent=Nr),Oe.forEach(t),Tt=l(e),A=i(e,"DIV",{class:!0});var Vt=h(A);p($e.$$.fragment,Vt),Kt=l(Vt),Ae=i(Vt,"P",{"data-svelte-h":!0}),a(Ae)!=="svelte-1d9pjkh"&&(Ae.textContent=Hr),Vt.forEach(t),Ct=l(e),S=i(e,"DIV",{class:!0});var Ut=h(S);p(ve.$$.fragment,Ut),er=l(Ut),Se=i(Ut,"P",{"data-svelte-h":!0}),a(Se)!=="svelte-147u0ic"&&(Se.textContent=Jr),Ut.forEach(t),wt=l(e),I=i(e,"DIV",{class:!0});var je=h(I);p(he.$$.fragment,je),tr=l(je),p(D.$$.fragment,je),rr=Zr(je,`
All handlers currently bound to the root logger are affected by this method.`),je.forEach(t),Lt=l(e),E=i(e,"DIV",{class:!0});var Ge=h(E);p(_e.$$.fragment,Ge),nr=l(Ge),We=i(Ge,"P",{"data-svelte-h":!0}),a(We)!=="svelte-1yfjx32"&&(We.textContent=Vr),sr=l(Ge),Fe=i(Ge,"P",{"data-svelte-h":!0}),a(Fe)!=="svelte-3qpllw"&&(Fe.textContent=Ur),Ge.forEach(t),Mt=l(e),W=i(e,"DIV",{class:!0});var At=h(W);p(ye.$$.fragment,At),lr=l(At),ke=i(At,"P",{"data-svelte-h":!0}),a(ke)!=="svelte-1n9lbl5"&&(ke.textContent=Ar),At.forEach(t),Rt=l(e),F=i(e,"DIV",{class:!0});var St=h(F);p(xe.$$.fragment,St),or=l(St),De=i(St,"P",{"data-svelte-h":!0}),a(De)!=="svelte-4qd7jw"&&(De.textContent=Sr),St.forEach(t),Et=l(e),Ze=i(e,"P",{}),h(Ze).forEach(t),this.h()},h(){_(f,"name","hf:doc:metadata"),_(f,"content",Yr),_(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(M,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,r){g(document.head,f),n(e,P,r),n(e,y,r),n(e,v,r),u(x,e,r),n(e,m,r),n(e,T,r),n(e,qe,r),n(e,B,r),n(e,ze,r),n(e,O,r),n(e,Xe,r),u(G,e,r),n(e,Ye,r),n(e,Z,r),n(e,Ke,r),u(j,e,r),n(e,et,r),n(e,Q,r),n(e,tt,r),u(q,e,r),n(e,rt,r),n(e,z,r),n(e,nt,r),u(X,e,r),n(e,st,r),n(e,Y,r),n(e,lt,r),n(e,K,r),n(e,ot,r),n(e,ee,r),n(e,it,r),u(te,e,r),n(e,gt,r),n(e,re,r),n(e,at,r),n(e,ne,r),n(e,mt,r),n(e,se,r),n(e,ft,r),n(e,le,r),n(e,dt,r),n(e,oe,r),n(e,pt,r),n(e,C,r),u(ie,C,null),g(C,Ft),g(C,we),g(C,kt),g(C,Le),g(C,Dt),g(C,Me),g(C,Bt),g(C,Re),n(e,ut,r),u(ge,e,r),n(e,ct,r),n(e,N,r),u(ae,N,null),g(N,Ot),g(N,Ee),n(e,bt,r),n(e,H,r),u(me,H,null),g(H,Gt),g(H,Pe),n(e,$t,r),n(e,J,r),u(fe,J,null),g(J,Zt),g(J,Ie),n(e,vt,r),n(e,V,r),u(de,V,null),g(V,jt),g(V,Ne),n(e,ht,r),u(pe,e,r),n(e,_t,r),n(e,M,r),u(ue,M,null),g(M,Qt),g(M,He),g(M,qt),u(k,M,null),n(e,yt,r),n(e,U,r),u(ce,U,null),g(U,zt),g(U,Je),n(e,xt,r),n(e,R,r),u(be,R,null),g(R,Xt),g(R,Ve),g(R,Yt),g(R,Ue),n(e,Tt,r),n(e,A,r),u($e,A,null),g(A,Kt),g(A,Ae),n(e,Ct,r),n(e,S,r),u(ve,S,null),g(S,er),g(S,Se),n(e,wt,r),n(e,I,r),u(he,I,null),g(I,tr),u(D,I,null),g(I,rr),n(e,Lt,r),n(e,E,r),u(_e,E,null),g(E,nr),g(E,We),g(E,sr),g(E,Fe),n(e,Mt,r),n(e,W,r),u(ye,W,null),g(W,lr),g(W,ke),n(e,Rt,r),n(e,F,r),u(xe,F,null),g(F,or),g(F,De),n(e,Et,r),n(e,Ze,r),Pt=!0},p(e,[r]){const L={};r&2&&(L.$$scope={dirty:r,ctx:e}),k.$set(L);const Te={};r&2&&(Te.$$scope={dirty:r,ctx:e}),D.$set(Te)},i(e){Pt||(c(x.$$.fragment,e),c(G.$$.fragment,e),c(j.$$.fragment,e),c(q.$$.fragment,e),c(X.$$.fragment,e),c(te.$$.fragment,e),c(ie.$$.fragment,e),c(ge.$$.fragment,e),c(ae.$$.fragment,e),c(me.$$.fragment,e),c(fe.$$.fragment,e),c(de.$$.fragment,e),c(pe.$$.fragment,e),c(ue.$$.fragment,e),c(k.$$.fragment,e),c(ce.$$.fragment,e),c(be.$$.fragment,e),c($e.$$.fragment,e),c(ve.$$.fragment,e),c(he.$$.fragment,e),c(D.$$.fragment,e),c(_e.$$.fragment,e),c(ye.$$.fragment,e),c(xe.$$.fragment,e),Pt=!0)},o(e){b(x.$$.fragment,e),b(G.$$.fragment,e),b(j.$$.fragment,e),b(q.$$.fragment,e),b(X.$$.fragment,e),b(te.$$.fragment,e),b(ie.$$.fragment,e),b(ge.$$.fragment,e),b(ae.$$.fragment,e),b(me.$$.fragment,e),b(fe.$$.fragment,e),b(de.$$.fragment,e),b(pe.$$.fragment,e),b(ue.$$.fragment,e),b(k.$$.fragment,e),b(ce.$$.fragment,e),b(be.$$.fragment,e),b($e.$$.fragment,e),b(ve.$$.fragment,e),b(he.$$.fragment,e),b(D.$$.fragment,e),b(_e.$$.fragment,e),b(ye.$$.fragment,e),b(xe.$$.fragment,e),Pt=!1},d(e){e&&(t(P),t(y),t(v),t(m),t(T),t(qe),t(B),t(ze),t(O),t(Xe),t(Ye),t(Z),t(Ke),t(et),t(Q),t(tt),t(rt),t(z),t(nt),t(st),t(Y),t(lt),t(K),t(ot),t(ee),t(it),t(gt),t(re),t(at),t(ne),t(mt),t(se),t(ft),t(le),t(dt),t(oe),t(pt),t(C),t(ut),t(ct),t(N),t(bt),t(H),t($t),t(J),t(vt),t(V),t(ht),t(_t),t(M),t(yt),t(U),t(xt),t(R),t(Tt),t(A),t(Ct),t(S),t(wt),t(I),t(Lt),t(E),t(Mt),t(W),t(Rt),t(F),t(Et),t(Ze)),t(f),$(x,e),$(G,e),$(j,e),$(q,e),$(X,e),$(te,e),$(ie),$(ge,e),$(ae),$(me),$(fe),$(de),$(pe,e),$(ue),$(k),$(ce),$(be),$($e),$(ve),$(he),$(D),$(_e),$(ye),$(xe)}}}const Yr='{"title":"Logging","local":"logging","sections":[{"title":"logging vs warnings","local":"transformers.utils.logging.captureWarnings","sections":[],"depth":2},{"title":"Base setters","local":"transformers.utils.logging.set_verbosity_error","sections":[],"depth":2},{"title":"Other functions","local":"transformers.utils.logging.get_verbosity","sections":[],"depth":2}],"depth":1}';function Kr(Ce){return kr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class gn extends Dr{constructor(f){super(),Br(this,f,Kr,Xr,Fr,{})}}export{gn as component};
