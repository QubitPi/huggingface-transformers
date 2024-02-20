import{s as Os,n as Bs,o as Ds}from"../chunks/scheduler.9bc65507.js";import{S as Fs,i as Vs,g as h,s as i,r as j,m as o,H as c,A as Js,h as g,f as n,c as m,j as ks,u as H,x as E,n as r,B as d,k as bs,y as p,a as l,v as P,d as q,t as A,w as S}from"../chunks/index.707bf1b6.js";import{H as I}from"../chunks/Heading.342b1fa6.js";function Ns(Ms){let u,U,T,K,w,Q,v,$s=`Most transformer models use full attention in the sense that the attention matrix is square. It can be a big
computational bottleneck when you have long texts. Longformer and reformer are models that try to be more efficient and
use a sparse version of the attention matrix to speed up training.`,R,x,G,y,zs=`<a href="model_doc/reformer">Reformer</a> uses LSH attention. In the softmax(QK^t), only the biggest elements (in the softmax
dimension) of the matrix QK^t are going to give useful contributions. So for each query q in Q, we can consider only
the keys k in K that are close to q. A hash function is used to determine if q and k are close. The attention mask is
modified to mask the current token (except at the first position), because it will give a query and a key equal (so
very similar to each other). Since the hash can be a bit random, several hash functions are used in practice
(determined by a n_rounds parameter) and then are averaged together.`,O,b,B,_,Ls=`<a href="model_doc/longformer">Longformer</a> uses local attention: often, the local context (e.g., what are the two tokens to the
left and right?) is enough to take action for a given token. Also, by stacking attention layers that have a small
window, the last layer will have a receptive field of more than just the tokens in the window, allowing them to build a
representation of the whole sentence.`,D,k,Es=`Some preselected input tokens are also given global attention: for those few tokens, the attention matrix can access
all tokens and this process is symmetric: all other tokens have access to those specific tokens (on top of the ones in
their local window). This is shown in Figure 2d of the paper, see below for a sample attention mask:`,F,f,Ts='<img scale="50 %" align="center" src="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/local_attention_mask.png"/>',V,M,Cs=`Using those attention matrices with less parameters then allows the model to have inputs having a bigger sequence
length.`,J,$,N,z,W,t,L,js="Reformer",_s,X,Hs='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>l</mi></mrow><annotation encoding="application/x-tex">l</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span></span></span></span>',Y,Z,Ps='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>d</mi></mrow><annotation encoding="application/x-tex">d</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">d</span></span></span></span>',ss,as,qs='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>l</mi></mrow><annotation encoding="application/x-tex">l</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span></span></span></span>',ts,ns,As='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>d</mi></mrow><annotation encoding="application/x-tex">d</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">d</span></span></span></span>',es,ls,Ss='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>l</mi><mn>1</mn></msub><mo>×</mo><msub><mi>d</mi><mn>1</mn></msub></mrow><annotation encoding="application/x-tex">l_{1} \\times d_{1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0197em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">d</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>',is,ms,Is='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>l</mi><mn>2</mn></msub><mo>×</mo><msub><mi>d</mi><mn>2</mn></msub></mrow><annotation encoding="application/x-tex">l_{2} \\times d_{2}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0197em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">d</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>',ps,os,Us='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>l</mi><mn>1</mn></msub><mo>×</mo><msub><mi>l</mi><mn>2</mn></msub><mo>=</mo><mi>l</mi></mrow><annotation encoding="application/x-tex">l_{1} \\times l_{2} = l</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0197em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0197em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span></span></span></span>',rs,hs,Ks='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>d</mi><mn>1</mn></msub><mo>+</mo><msub><mi>d</mi><mn>2</mn></msub><mo>=</mo><mi>d</mi></mrow><annotation encoding="application/x-tex">d_{1} + d_{2} = d</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">d</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">d</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal">d</span></span></span></span>',cs,gs,Qs='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>j</mi></mrow><annotation encoding="application/x-tex">j</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.854em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.05724em;">j</span></span></span></span>',ds,us,Rs='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>j</mi><mi mathvariant="normal">%</mi><mi>l</mi><mn>1</mn></mrow><annotation encoding="application/x-tex">j \\% l1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9444em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.05724em;">j</span><span class="mord">%</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord">1</span></span></span></span>',fs,ws,Gs='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>j</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">/</mi><mi>l</mi><mn>1</mn></mrow><annotation encoding="application/x-tex">j // l1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.05724em;">j</span><span class="mord">//</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord">1</span></span></span></span>',vs,xs,C,ys;return w=new I({props:{title:"Attention mechanisms",local:"attention-mechanisms",headingTag:"h1"}}),x=new I({props:{title:"LSH attention",local:"lsh-attention",headingTag:"h2"}}),b=new I({props:{title:"Local attention",local:"local-attention",headingTag:"h2"}}),$=new I({props:{title:"Other tricks",local:"other-tricks",headingTag:"h2"}}),z=new I({props:{title:"Axial positional encodings",local:"axial-positional-encodings",headingTag:"h3"}}),{c(){u=h("meta"),U=i(),T=h("p"),K=i(),j(w.$$.fragment),Q=i(),v=h("p"),v.textContent=$s,R=i(),j(x.$$.fragment),G=i(),y=h("p"),y.innerHTML=zs,O=i(),j(b.$$.fragment),B=i(),_=h("p"),_.innerHTML=Ls,D=i(),k=h("p"),k.textContent=Es,F=i(),f=h("div"),f.innerHTML=Ts,V=i(),M=h("p"),M.textContent=Cs,J=i(),j($.$$.fragment),N=i(),j(z.$$.fragment),W=i(),t=h("p"),L=h("a"),L.textContent=js,_s=o(` uses axial positional encodings: in traditional transformer models, the positional encoding
E is a matrix of size`),X=new c(!1),Y=o(" by"),Z=new c(!1),ss=o(","),as=new c(!1),ts=o(" being the sequence length and"),ns=new c(!1),es=o(` the dimension of the
hidden state. If you have very long texts, this matrix can be huge and take way too much space on the GPU. To alleviate
that, axial positional encodings consist of factorizing that big matrix E in two smaller matrices E1 and E2, with
dimensions`),ls=new c(!1),is=o(" and"),ms=new c(!1),ps=o(", such that"),os=new c(!1),rs=o(" and"),hs=new c(!1),cs=o(` (with the product for the lengths, this ends up being way smaller). The embedding for time
step`),gs=new c(!1),ds=o(" in E is obtained by concatenating the embeddings for timestep"),us=new c(!1),fs=o(" in E1 and"),ws=new c(!1),vs=o(`
in E2.`),xs=i(),C=h("p"),this.h()},l(s){const a=Js("svelte-u9bgzb",document.head);u=g(a,"META",{name:!0,content:!0}),a.forEach(n),U=m(s),T=g(s,"P",{}),ks(T).forEach(n),K=m(s),H(w.$$.fragment,s),Q=m(s),v=g(s,"P",{"data-svelte-h":!0}),E(v)!=="svelte-1badtw"&&(v.textContent=$s),R=m(s),H(x.$$.fragment,s),G=m(s),y=g(s,"P",{"data-svelte-h":!0}),E(y)!=="svelte-1s477ej"&&(y.innerHTML=zs),O=m(s),H(b.$$.fragment,s),B=m(s),_=g(s,"P",{"data-svelte-h":!0}),E(_)!=="svelte-h79jys"&&(_.innerHTML=Ls),D=m(s),k=g(s,"P",{"data-svelte-h":!0}),E(k)!=="svelte-1x90fhu"&&(k.textContent=Es),F=m(s),f=g(s,"DIV",{class:!0,"data-svelte-h":!0}),E(f)!=="svelte-d4kpls"&&(f.innerHTML=Ts),V=m(s),M=g(s,"P",{"data-svelte-h":!0}),E(M)!=="svelte-11i8g0o"&&(M.textContent=Cs),J=m(s),H($.$$.fragment,s),N=m(s),H(z.$$.fragment,s),W=m(s),t=g(s,"P",{});var e=ks(t);L=g(e,"A",{href:!0,"data-svelte-h":!0}),E(L)!=="svelte-zf8r8v"&&(L.textContent=js),_s=r(e,` uses axial positional encodings: in traditional transformer models, the positional encoding
E is a matrix of size`),X=d(e,!1),Y=r(e," by"),Z=d(e,!1),ss=r(e,","),as=d(e,!1),ts=r(e," being the sequence length and"),ns=d(e,!1),es=r(e,` the dimension of the
hidden state. If you have very long texts, this matrix can be huge and take way too much space on the GPU. To alleviate
that, axial positional encodings consist of factorizing that big matrix E in two smaller matrices E1 and E2, with
dimensions`),ls=d(e,!1),is=r(e," and"),ms=d(e,!1),ps=r(e,", such that"),os=d(e,!1),rs=r(e," and"),hs=d(e,!1),cs=r(e,` (with the product for the lengths, this ends up being way smaller). The embedding for time
step`),gs=d(e,!1),ds=r(e," in E is obtained by concatenating the embeddings for timestep"),us=d(e,!1),fs=r(e," in E1 and"),ws=d(e,!1),vs=r(e,`
in E2.`),e.forEach(n),xs=m(s),C=g(s,"P",{}),ks(C).forEach(n),this.h()},h(){bs(u,"name","hf:doc:metadata"),bs(u,"content",Ws),bs(f,"class","flex justify-center"),bs(L,"href","model_doc/reformer"),X.a=Y,Z.a=ss,as.a=ts,ns.a=es,ls.a=is,ms.a=ps,os.a=rs,hs.a=cs,gs.a=ds,us.a=fs,ws.a=vs},m(s,a){p(document.head,u),l(s,U,a),l(s,T,a),l(s,K,a),P(w,s,a),l(s,Q,a),l(s,v,a),l(s,R,a),P(x,s,a),l(s,G,a),l(s,y,a),l(s,O,a),P(b,s,a),l(s,B,a),l(s,_,a),l(s,D,a),l(s,k,a),l(s,F,a),l(s,f,a),l(s,V,a),l(s,M,a),l(s,J,a),P($,s,a),l(s,N,a),P(z,s,a),l(s,W,a),l(s,t,a),p(t,L),p(t,_s),X.m(Hs,t),p(t,Y),Z.m(Ps,t),p(t,ss),as.m(qs,t),p(t,ts),ns.m(As,t),p(t,es),ls.m(Ss,t),p(t,is),ms.m(Is,t),p(t,ps),os.m(Us,t),p(t,rs),hs.m(Ks,t),p(t,cs),gs.m(Qs,t),p(t,ds),us.m(Rs,t),p(t,fs),ws.m(Gs,t),p(t,vs),l(s,xs,a),l(s,C,a),ys=!0},p:Bs,i(s){ys||(q(w.$$.fragment,s),q(x.$$.fragment,s),q(b.$$.fragment,s),q($.$$.fragment,s),q(z.$$.fragment,s),ys=!0)},o(s){A(w.$$.fragment,s),A(x.$$.fragment,s),A(b.$$.fragment,s),A($.$$.fragment,s),A(z.$$.fragment,s),ys=!1},d(s){s&&(n(U),n(T),n(K),n(Q),n(v),n(R),n(G),n(y),n(O),n(B),n(_),n(D),n(k),n(F),n(f),n(V),n(M),n(J),n(N),n(W),n(t),n(xs),n(C)),n(u),S(w,s),S(x,s),S(b,s),S($,s),S(z,s)}}}const Ws='{"title":"Attention mechanisms","local":"attention-mechanisms","sections":[{"title":"LSH attention","local":"lsh-attention","sections":[],"depth":2},{"title":"Local attention","local":"local-attention","sections":[],"depth":2},{"title":"Other tricks","local":"other-tricks","sections":[{"title":"Axial positional encodings","local":"axial-positional-encodings","sections":[],"depth":3}],"depth":2}],"depth":1}';function Xs(Ms){return Ds(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class aa extends Fs{constructor(u){super(),Vs(this,u,Xs,Ns,Os,{})}}export{aa as component};
