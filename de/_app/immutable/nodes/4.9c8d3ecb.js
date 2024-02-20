import{s as Is,n as gs,o as Bs}from"../chunks/scheduler.987d3921.js";import{S as ks,i as Cs,g as a,s as t,r as d,A as _s,h as p,f as l,c as i,j as bs,u as c,x as r,k as Us,y as zs,a as n,v as M,d as o,t as u,w as m}from"../chunks/index.c8b1fed4.js";import{C as w}from"../chunks/CodeBlock.18094d58.js";import{H as Fe}from"../chunks/Heading.3fa3b67f.js";function Zs(Qe){let y,ie,ne,ae,T,pe,J,Le=`In dieser Anleitung sehen wir uns an, wie Sie eine benutzerdefinierte Pipeline erstellen und sie auf dem <a href="https://hf.co/models" rel="nofollow">Hub</a> freigeben oder sie der
🤗 Transformers-Bibliothek hinzufügen.`,re,j,De=`Zuallererst müssen Sie entscheiden, welche Roheingaben die Pipeline verarbeiten kann. Es kann sich um Strings, rohe Bytes,
Dictionaries oder was auch immer die wahrscheinlichste gewünschte Eingabe ist. Versuchen Sie, diese Eingaben so rein wie möglich in Python zu halten
denn das macht die Kompatibilität einfacher (auch mit anderen Sprachen über JSON). Dies werden die Eingaben der
Pipeline (<code>Vorverarbeitung</code>).`,de,h,Ke=`Definieren Sie dann die <code>Outputs</code>. Dieselbe Richtlinie wie für die Eingänge. Je einfacher, desto besser. Dies werden die Ausgaben der
Methode <code>Postprocess</code>.`,ce,f,Oe=`Beginnen Sie damit, die Basisklasse <code>Pipeline</code> mit den 4 Methoden zu erben, die für die Implementierung von <code>preprocess</code> benötigt werden,
Weiterleiten”, “Nachbearbeitung” und “Parameter säubern”.`,Me,b,oe,U,es=`Die Struktur dieser Aufteilung soll eine relativ nahtlose Unterstützung für CPU/GPU ermöglichen und gleichzeitig die Durchführung von
Vor-/Nachbearbeitung auf der CPU in verschiedenen Threads`,ue,I,ss=`Preprocess” nimmt die ursprünglich definierten Eingaben und wandelt sie in etwas um, das in das Modell eingespeist werden kann. Es kann
mehr Informationen enthalten und ist normalerweise ein <code>Dict</code>.`,me,g,ls=`<code>_forward</code> ist das Implementierungsdetail und ist nicht dafür gedacht, direkt aufgerufen zu werden. Weiterleiten” ist die bevorzugte
aufgerufene Methode, da sie Sicherheitsvorkehrungen enthält, die sicherstellen, dass alles auf dem erwarteten Gerät funktioniert. Wenn etwas
mit einem realen Modell verknüpft ist, gehört es in die Methode <code>_forward</code>, alles andere gehört in die Methoden preprocess/postprocess.`,we,B,ns=`Die Methode <code>Postprocess</code> nimmt die Ausgabe von <code>_forward</code> und verwandelt sie in die endgültige Ausgabe, die zuvor festgelegt wurde.
zuvor entschieden wurde.`,ye,k,ts=`Die Methode <code>_sanitize_parameters</code> ermöglicht es dem Benutzer, beliebige Parameter zu übergeben, wann immer er möchte, sei es bei der Initialisierung
Zeit <code>pipeline(...., maybe_arg=4)</code> oder zur Aufrufzeit <code>pipe = pipeline(...); output = pipe(...., maybe_arg=4)</code>.`,Te,C,is=`Die Rückgabe von <code>_sanitize_parameters</code> sind die 3 Dicts von kwargs, die direkt an <code>preprocess</code> übergeben werden,
<code>_forward</code> und <code>postprocess</code> übergeben werden. Füllen Sie nichts aus, wenn der Aufrufer keinen zusätzlichen Parameter angegeben hat. Das
erlaubt es, die Standardargumente in der Funktionsdefinition beizubehalten, was immer “natürlicher” ist.`,Je,_,as="Ein klassisches Beispiel wäre das Argument <code>top_k</code> in der Nachbearbeitung bei Klassifizierungsaufgaben.",je,z,he,Z,ps=`In order to achieve that, we’ll update our <code>postprocess</code> method with a default parameter to <code>5</code>. and edit
<code>_sanitize_parameters</code> to allow this new parameter.`,fe,A,be,G,rs=`Versuchen Sie, die Eingaben/Ausgaben sehr einfach und idealerweise JSON-serialisierbar zu halten, da dies die Verwendung der Pipeline sehr einfach macht
ohne dass die Benutzer neue Arten von Objekten verstehen müssen. Es ist auch relativ üblich, viele verschiedene Arten von Argumenten zu unterstützen
von Argumenten zu unterstützen (Audiodateien, die Dateinamen, URLs oder reine Bytes sein können).`,Ue,H,Ie,V,ds="Um Ihre <code>neue Aufgabe</code> in die Liste der unterstützten Aufgaben aufzunehmen, müssen Sie sie zur <code>PIPELINE_REGISTRY</code> hinzufügen:",ge,W,Be,R,cs="Wenn Sie möchten, können Sie ein Standardmodell angeben. In diesem Fall sollte es mit einer bestimmten Revision (die der Name einer Verzweigung oder ein Commit-Hash sein kann, hier haben wir <code>&quot;abcdef&quot;</code> genommen) sowie mit dem Typ versehen sein:",ke,E,Ce,X,_e,N,Ms=`Um Ihre benutzerdefinierte Pipeline auf dem Hub freizugeben, müssen Sie lediglich den benutzerdefinierten Code Ihrer <code>Pipeline</code>-Unterklasse in einer
Python-Datei speichern. Nehmen wir zum Beispiel an, Sie möchten eine benutzerdefinierte Pipeline für die Klassifizierung von Satzpaaren wie folgt verwenden:`,ze,v,Ze,q,os=`Die Implementierung ist Framework-unabhängig und funktioniert für PyTorch- und TensorFlow-Modelle. Wenn wir dies in einer Datei
einer Datei namens <code>pair_classification.py</code> gespeichert haben, können wir sie importieren und wie folgt registrieren:`,Ae,S,Ge,$,us=`Sobald dies geschehen ist, können wir es mit einem vortrainierten Modell verwenden. Zum Beispiel wurde <code>sgugger/finetuned-bert-mrpc</code> auf den
auf den MRPC-Datensatz abgestimmt, der Satzpaare als Paraphrasen oder nicht klassifiziert.`,He,P,Ve,x,ms="Dann können wir sie auf dem Hub mit der Methode <code>save_pretrained</code> in einem <code>Repository</code> freigeben:",We,Y,Re,F,ws=`Dadurch wird die Datei, in der Sie <code>PairClassificationPipeline</code> definiert haben, in den Ordner <code>&quot;test-dynamic-pipeline&quot;</code> kopiert,
und speichert das Modell und den Tokenizer der Pipeline, bevor Sie alles in das Repository verschieben
<code>{Ihr_Benutzername}/test-dynamic-pipeline</code>. Danach kann jeder die Pipeline verwenden, solange er die Option
<code>trust_remote_code=True</code> angeben:`,Ee,Q,Xe,L,Ne,D,ys=`Wenn Sie Ihre Pipeline zu 🤗 Transformers beitragen möchten, müssen Sie ein neues Modul im Untermodul <code>pipelines</code> hinzufügen
mit dem Code Ihrer Pipeline hinzufügen. Fügen Sie es dann der Liste der in <code>pipelines/__init__.py</code> definierten Aufgaben hinzu.`,ve,K,Ts="Dann müssen Sie noch Tests hinzufügen. Erstellen Sie eine neue Datei <code>tests/test_pipelines_MY_PIPELINE.py</code> mit Beispielen für die anderen Tests.",qe,O,Js=`Die Funktion <code>run_pipeline_test</code> ist sehr allgemein gehalten und läuft auf kleinen Zufallsmodellen auf jeder möglichen
Architektur, wie durch <code>model_mapping</code> und <code>tf_model_mapping</code> definiert.`,Se,ee,js=`Dies ist sehr wichtig, um die zukünftige Kompatibilität zu testen, d.h. wenn jemand ein neues Modell für
<code>XXXForQuestionAnswering</code> hinzufügt, wird der Pipeline-Test versuchen, mit diesem Modell zu arbeiten. Da die Modelle zufällig sind, ist es
ist es unmöglich, die tatsächlichen Werte zu überprüfen. Deshalb gibt es eine Hilfsfunktion <code>ANY</code>, die einfach versucht, die
Ausgabe der Pipeline TYPE.`,$e,se,hs="Außerdem <em>müssen</em> Sie 2 (idealerweise 4) Tests implementieren.",Pe,le,fs=`<li><code>test_small_model_pt</code> : Definieren Sie 1 kleines Modell für diese Pipeline (es spielt keine Rolle, ob die Ergebnisse keinen Sinn ergeben)
und testen Sie die Ausgaben der Pipeline. Die Ergebnisse sollten die gleichen sein wie bei <code>test_small_model_tf</code>.</li> <li><code>test_small_model_tf</code> : Definieren Sie 1 kleines Modell für diese Pipeline (es spielt keine Rolle, ob die Ergebnisse keinen Sinn ergeben)
und testen Sie die Ausgaben der Pipeline. Die Ergebnisse sollten die gleichen sein wie bei <code>test_small_model_pt</code>.</li> <li><code>test_large_model_pt</code> (<code>optional</code>): Testet die Pipeline an einer echten Pipeline, bei der die Ergebnisse
Sinn machen. Diese Tests sind langsam und sollten als solche gekennzeichnet werden. Hier geht es darum, die Pipeline zu präsentieren und sicherzustellen
sicherzustellen, dass es in zukünftigen Versionen keine Abweichungen gibt.</li> <li><code>test_large_model_tf</code> (<code>optional</code>): Testet die Pipeline an einer echten Pipeline, bei der die Ergebnisse
Sinn machen. Diese Tests sind langsam und sollten als solche gekennzeichnet werden. Hier geht es darum, die Pipeline zu präsentieren und sicherzustellen
sicherzustellen, dass es in zukünftigen Versionen keine Abweichungen gibt.</li>`,xe,te,Ye;return T=new Fe({props:{title:"Wie erstellt man eine benutzerdefinierte Pipeline?",local:"wie-erstellt-man-eine-benutzerdefinierte-pipeline",headingTag:"h1"}}),b=new w({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFBpcGVsaW5lJTBBJTBBJTBBY2xhc3MlMjBNeVBpcGVsaW5lKFBpcGVsaW5lKSUzQSUwQSUyMCUyMCUyMCUyMGRlZiUyMF9zYW5pdGl6ZV9wYXJhbWV0ZXJzKHNlbGYlMkMlMjAqKmt3YXJncyklM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBwcmVwcm9jZXNzX2t3YXJncyUyMCUzRCUyMCU3QiU3RCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMGlmJTIwJTIybWF5YmVfYXJnJTIyJTIwaW4lMjBrd2FyZ3MlM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBwcmVwcm9jZXNzX2t3YXJncyU1QiUyMm1heWJlX2FyZyUyMiU1RCUyMCUzRCUyMGt3YXJncyU1QiUyMm1heWJlX2FyZyUyMiU1RCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHJldHVybiUyMHByZXByb2Nlc3Nfa3dhcmdzJTJDJTIwJTdCJTdEJTJDJTIwJTdCJTdEJTBBJTBBJTIwJTIwJTIwJTIwZGVmJTIwcHJlcHJvY2VzcyhzZWxmJTJDJTIwaW5wdXRzJTJDJTIwbWF5YmVfYXJnJTNEMiklM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBtb2RlbF9pbnB1dCUyMCUzRCUyMFRlbnNvcihpbnB1dHMlNUIlMjJpbnB1dF9pZHMlMjIlNUQpJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcmV0dXJuJTIwJTdCJTIybW9kZWxfaW5wdXQlMjIlM0ElMjBtb2RlbF9pbnB1dCU3RCUwQSUwQSUyMCUyMCUyMCUyMGRlZiUyMF9mb3J3YXJkKHNlbGYlMkMlMjBtb2RlbF9pbnB1dHMpJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIzJTIwbW9kZWxfaW5wdXRzJTIwJTNEJTNEJTIwJTdCJTIybW9kZWxfaW5wdXQlMjIlM0ElMjBtb2RlbF9pbnB1dCU3RCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMG91dHB1dHMlMjAlM0QlMjBzZWxmLm1vZGVsKCoqbW9kZWxfaW5wdXRzKSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMyUyME1heWJlJTIwJTdCJTIybG9naXRzJTIyJTNBJTIwVGVuc29yKC4uLiklN0QlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjByZXR1cm4lMjBvdXRwdXRzJTBBJTBBJTIwJTIwJTIwJTIwZGVmJTIwcG9zdHByb2Nlc3Moc2VsZiUyQyUyMG1vZGVsX291dHB1dHMpJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwYmVzdF9jbGFzcyUyMCUzRCUyMG1vZGVsX291dHB1dHMlNUIlMjJsb2dpdHMlMjIlNUQuc29mdG1heCgtMSklMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjByZXR1cm4lMjBiZXN0X2NsYXNz",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Pipeline


<span class="hljs-keyword">class</span> <span class="hljs-title class_">MyPipeline</span>(<span class="hljs-title class_ inherited__">Pipeline</span>):
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">_sanitize_parameters</span>(<span class="hljs-params">self, **kwargs</span>):
        preprocess_kwargs = {}
        <span class="hljs-keyword">if</span> <span class="hljs-string">&quot;maybe_arg&quot;</span> <span class="hljs-keyword">in</span> kwargs:
            preprocess_kwargs[<span class="hljs-string">&quot;maybe_arg&quot;</span>] = kwargs[<span class="hljs-string">&quot;maybe_arg&quot;</span>]
        <span class="hljs-keyword">return</span> preprocess_kwargs, {}, {}

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">preprocess</span>(<span class="hljs-params">self, inputs, maybe_arg=<span class="hljs-number">2</span></span>):
        model_input = Tensor(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
        <span class="hljs-keyword">return</span> {<span class="hljs-string">&quot;model_input&quot;</span>: model_input}

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">_forward</span>(<span class="hljs-params">self, model_inputs</span>):
        <span class="hljs-comment"># model_inputs == {&quot;model_input&quot;: model_input}</span>
        outputs = self.model(**model_inputs)
        <span class="hljs-comment"># Maybe {&quot;logits&quot;: Tensor(...)}</span>
        <span class="hljs-keyword">return</span> outputs

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">postprocess</span>(<span class="hljs-params">self, model_outputs</span>):
        best_class = model_outputs[<span class="hljs-string">&quot;logits&quot;</span>].softmax(-<span class="hljs-number">1</span>)
        <span class="hljs-keyword">return</span> best_class`,wrap:!1}}),z=new w({props:{code:"cGlwZSUyMCUzRCUyMHBpcGVsaW5lKCUyMm15LW5ldy10YXNrJTIyKSUwQXBpcGUoJTIyVGhpcyUyMGlzJTIwYSUyMHRlc3QlMjIpJTBBJTBBcGlwZSglMjJUaGlzJTIwaXMlMjBhJTIwdGVzdCUyMiUyQyUyMHRvcF9rJTNEMik=",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>pipe = pipeline(<span class="hljs-string">&quot;my-new-task&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>pipe(<span class="hljs-string">&quot;This is a test&quot;</span>)
[{<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;1-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.8</span>}, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;2-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.1</span>}, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;3-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.05</span>}
{<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;4-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.025</span>}, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;5-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.025</span>}]

<span class="hljs-meta">&gt;&gt;&gt; </span>pipe(<span class="hljs-string">&quot;This is a test&quot;</span>, top_k=<span class="hljs-number">2</span>)
[{<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;1-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.8</span>}, {<span class="hljs-string">&quot;label&quot;</span>: <span class="hljs-string">&quot;2-star&quot;</span>, <span class="hljs-string">&quot;score&quot;</span>: <span class="hljs-number">0.1</span>}]`,wrap:!1}}),A=new w({props:{code:"ZGVmJTIwcG9zdHByb2Nlc3Moc2VsZiUyQyUyMG1vZGVsX291dHB1dHMlMkMlMjB0b3BfayUzRDUpJTNBJTBBJTIwJTIwJTIwJTIwYmVzdF9jbGFzcyUyMCUzRCUyMG1vZGVsX291dHB1dHMlNUIlMjJsb2dpdHMlMjIlNUQuc29mdG1heCgtMSklMEElMjAlMjAlMjAlMjAlMjMlMjBBZGQlMjBsb2dpYyUyMHRvJTIwaGFuZGxlJTIwdG9wX2slMEElMjAlMjAlMjAlMjByZXR1cm4lMjBiZXN0X2NsYXNzJTBBJTBBJTBBZGVmJTIwX3Nhbml0aXplX3BhcmFtZXRlcnMoc2VsZiUyQyUyMCoqa3dhcmdzKSUzQSUwQSUyMCUyMCUyMCUyMHByZXByb2Nlc3Nfa3dhcmdzJTIwJTNEJTIwJTdCJTdEJTBBJTIwJTIwJTIwJTIwaWYlMjAlMjJtYXliZV9hcmclMjIlMjBpbiUyMGt3YXJncyUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHByZXByb2Nlc3Nfa3dhcmdzJTVCJTIybWF5YmVfYXJnJTIyJTVEJTIwJTNEJTIwa3dhcmdzJTVCJTIybWF5YmVfYXJnJTIyJTVEJTBBJTBBJTIwJTIwJTIwJTIwcG9zdHByb2Nlc3Nfa3dhcmdzJTIwJTNEJTIwJTdCJTdEJTBBJTIwJTIwJTIwJTIwaWYlMjAlMjJ0b3BfayUyMiUyMGluJTIwa3dhcmdzJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcG9zdHByb2Nlc3Nfa3dhcmdzJTVCJTIydG9wX2slMjIlNUQlMjAlM0QlMjBrd2FyZ3MlNUIlMjJ0b3BfayUyMiU1RCUwQSUyMCUyMCUyMCUyMHJldHVybiUyMHByZXByb2Nlc3Nfa3dhcmdzJTJDJTIwJTdCJTdEJTJDJTIwcG9zdHByb2Nlc3Nfa3dhcmdz",highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">postprocess</span>(<span class="hljs-params">self, model_outputs, top_k=<span class="hljs-number">5</span></span>):
    best_class = model_outputs[<span class="hljs-string">&quot;logits&quot;</span>].softmax(-<span class="hljs-number">1</span>)
    <span class="hljs-comment"># Add logic to handle top_k</span>
    <span class="hljs-keyword">return</span> best_class


<span class="hljs-keyword">def</span> <span class="hljs-title function_">_sanitize_parameters</span>(<span class="hljs-params">self, **kwargs</span>):
    preprocess_kwargs = {}
    <span class="hljs-keyword">if</span> <span class="hljs-string">&quot;maybe_arg&quot;</span> <span class="hljs-keyword">in</span> kwargs:
        preprocess_kwargs[<span class="hljs-string">&quot;maybe_arg&quot;</span>] = kwargs[<span class="hljs-string">&quot;maybe_arg&quot;</span>]

    postprocess_kwargs = {}
    <span class="hljs-keyword">if</span> <span class="hljs-string">&quot;top_k&quot;</span> <span class="hljs-keyword">in</span> kwargs:
        postprocess_kwargs[<span class="hljs-string">&quot;top_k&quot;</span>] = kwargs[<span class="hljs-string">&quot;top_k&quot;</span>]
    <span class="hljs-keyword">return</span> preprocess_kwargs, {}, postprocess_kwargs`,wrap:!1}}),H=new Fe({props:{title:"Hinzufügen zur Liste der unterstützten Aufgaben",local:"hinzufügen-zur-liste-der-unterstützten-aufgaben",headingTag:"h2"}}),W=new w({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycy5waXBlbGluZXMlMjBpbXBvcnQlMjBQSVBFTElORV9SRUdJU1RSWSUwQSUwQVBJUEVMSU5FX1JFR0lTVFJZLnJlZ2lzdGVyX3BpcGVsaW5lKCUwQSUyMCUyMCUyMCUyMCUyMm5ldy10YXNrJTIyJTJDJTBBJTIwJTIwJTIwJTIwcGlwZWxpbmVfY2xhc3MlM0RNeVBpcGVsaW5lJTJDJTBBJTIwJTIwJTIwJTIwcHRfbW9kZWwlM0RBdXRvTW9kZWxGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uJTJDJTBBKQ==",highlighted:`<span class="hljs-keyword">from</span> transformers.pipelines <span class="hljs-keyword">import</span> PIPELINE_REGISTRY

PIPELINE_REGISTRY.register_pipeline(
    <span class="hljs-string">&quot;new-task&quot;</span>,
    pipeline_class=MyPipeline,
    pt_model=AutoModelForSequenceClassification,
)`,wrap:!1}}),E=new w({props:{code:"UElQRUxJTkVfUkVHSVNUUlkucmVnaXN0ZXJfcGlwZWxpbmUoJTBBJTIwJTIwJTIwJTIwJTIybmV3LXRhc2slMjIlMkMlMEElMjAlMjAlMjAlMjBwaXBlbGluZV9jbGFzcyUzRE15UGlwZWxpbmUlMkMlMEElMjAlMjAlMjAlMjBwdF9tb2RlbCUzREF1dG9Nb2RlbEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMkMlMEElMjAlMjAlMjAlMjBkZWZhdWx0JTNEJTdCJTIycHQlMjIlM0ElMjAoJTIydXNlciUyRmF3ZXNvbWVfbW9kZWwlMjIlMkMlMjAlMjJhYmNkZWYlMjIpJTdEJTJDJTBBJTIwJTIwJTIwJTIwdHlwZSUzRCUyMnRleHQlMjIlMkMlMjAlMjAlMjMlMjBjdXJyZW50JTIwc3VwcG9ydCUyMHR5cGUlM0ElMjB0ZXh0JTJDJTIwYXVkaW8lMkMlMjBpbWFnZSUyQyUyMG11bHRpbW9kYWwlMEEp",highlighted:`PIPELINE_REGISTRY.register_pipeline(
    <span class="hljs-string">&quot;new-task&quot;</span>,
    pipeline_class=MyPipeline,
    pt_model=AutoModelForSequenceClassification,
    default={<span class="hljs-string">&quot;pt&quot;</span>: (<span class="hljs-string">&quot;user/awesome_model&quot;</span>, <span class="hljs-string">&quot;abcdef&quot;</span>)},
    <span class="hljs-built_in">type</span>=<span class="hljs-string">&quot;text&quot;</span>,  <span class="hljs-comment"># current support type: text, audio, image, multimodal</span>
)`,wrap:!1}}),X=new Fe({props:{title:"Teilen Sie Ihre Pipeline auf dem Hub",local:"teilen-sie-ihre-pipeline-auf-dem-hub",headingTag:"h2"}}),v=new w({props:{code:"aW1wb3J0JTIwbnVtcHklMjBhcyUyMG5wJTBBJTBBZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFBpcGVsaW5lJTBBJTBBJTBBZGVmJTIwc29mdG1heChvdXRwdXRzKSUzQSUwQSUyMCUyMCUyMCUyMG1heGVzJTIwJTNEJTIwbnAubWF4KG91dHB1dHMlMkMlMjBheGlzJTNELTElMkMlMjBrZWVwZGltcyUzRFRydWUpJTBBJTIwJTIwJTIwJTIwc2hpZnRlZF9leHAlMjAlM0QlMjBucC5leHAob3V0cHV0cyUyMC0lMjBtYXhlcyklMEElMjAlMjAlMjAlMjByZXR1cm4lMjBzaGlmdGVkX2V4cCUyMCUyRiUyMHNoaWZ0ZWRfZXhwLnN1bShheGlzJTNELTElMkMlMjBrZWVwZGltcyUzRFRydWUpJTBBJTBBJTBBY2xhc3MlMjBQYWlyQ2xhc3NpZmljYXRpb25QaXBlbGluZShQaXBlbGluZSklM0ElMEElMjAlMjAlMjAlMjBkZWYlMjBfc2FuaXRpemVfcGFyYW1ldGVycyhzZWxmJTJDJTIwKiprd2FyZ3MpJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcHJlcHJvY2Vzc19rd2FyZ3MlMjAlM0QlMjAlN0IlN0QlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBpZiUyMCUyMnNlY29uZF90ZXh0JTIyJTIwaW4lMjBrd2FyZ3MlM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBwcmVwcm9jZXNzX2t3YXJncyU1QiUyMnNlY29uZF90ZXh0JTIyJTVEJTIwJTNEJTIwa3dhcmdzJTVCJTIyc2Vjb25kX3RleHQlMjIlNUQlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjByZXR1cm4lMjBwcmVwcm9jZXNzX2t3YXJncyUyQyUyMCU3QiU3RCUyQyUyMCU3QiU3RCUwQSUwQSUyMCUyMCUyMCUyMGRlZiUyMHByZXByb2Nlc3Moc2VsZiUyQyUyMHRleHQlMkMlMjBzZWNvbmRfdGV4dCUzRE5vbmUpJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcmV0dXJuJTIwc2VsZi50b2tlbml6ZXIodGV4dCUyQyUyMHRleHRfcGFpciUzRHNlY29uZF90ZXh0JTJDJTIwcmV0dXJuX3RlbnNvcnMlM0RzZWxmLmZyYW1ld29yayklMEElMEElMjAlMjAlMjAlMjBkZWYlMjBfZm9yd2FyZChzZWxmJTJDJTIwbW9kZWxfaW5wdXRzKSUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHJldHVybiUyMHNlbGYubW9kZWwoKiptb2RlbF9pbnB1dHMpJTBBJTBBJTIwJTIwJTIwJTIwZGVmJTIwcG9zdHByb2Nlc3Moc2VsZiUyQyUyMG1vZGVsX291dHB1dHMpJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwbG9naXRzJTIwJTNEJTIwbW9kZWxfb3V0cHV0cy5sb2dpdHMlNUIwJTVELm51bXB5KCklMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBwcm9iYWJpbGl0aWVzJTIwJTNEJTIwc29mdG1heChsb2dpdHMpJTBBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwYmVzdF9jbGFzcyUyMCUzRCUyMG5wLmFyZ21heChwcm9iYWJpbGl0aWVzKSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMGxhYmVsJTIwJTNEJTIwc2VsZi5tb2RlbC5jb25maWcuaWQybGFiZWwlNUJiZXN0X2NsYXNzJTVEJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwc2NvcmUlMjAlM0QlMjBwcm9iYWJpbGl0aWVzJTVCYmVzdF9jbGFzcyU1RC5pdGVtKCklMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBsb2dpdHMlMjAlM0QlMjBsb2dpdHMudG9saXN0KCklMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjByZXR1cm4lMjAlN0IlMjJsYWJlbCUyMiUzQSUyMGxhYmVsJTJDJTIwJTIyc2NvcmUlMjIlM0ElMjBzY29yZSUyQyUyMCUyMmxvZ2l0cyUyMiUzQSUyMGxvZ2l0cyU3RA==",highlighted:`<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np

<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Pipeline


<span class="hljs-keyword">def</span> <span class="hljs-title function_">softmax</span>(<span class="hljs-params">outputs</span>):
    maxes = np.<span class="hljs-built_in">max</span>(outputs, axis=-<span class="hljs-number">1</span>, keepdims=<span class="hljs-literal">True</span>)
    shifted_exp = np.exp(outputs - maxes)
    <span class="hljs-keyword">return</span> shifted_exp / shifted_exp.<span class="hljs-built_in">sum</span>(axis=-<span class="hljs-number">1</span>, keepdims=<span class="hljs-literal">True</span>)


<span class="hljs-keyword">class</span> <span class="hljs-title class_">PairClassificationPipeline</span>(<span class="hljs-title class_ inherited__">Pipeline</span>):
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">_sanitize_parameters</span>(<span class="hljs-params">self, **kwargs</span>):
        preprocess_kwargs = {}
        <span class="hljs-keyword">if</span> <span class="hljs-string">&quot;second_text&quot;</span> <span class="hljs-keyword">in</span> kwargs:
            preprocess_kwargs[<span class="hljs-string">&quot;second_text&quot;</span>] = kwargs[<span class="hljs-string">&quot;second_text&quot;</span>]
        <span class="hljs-keyword">return</span> preprocess_kwargs, {}, {}

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">preprocess</span>(<span class="hljs-params">self, text, second_text=<span class="hljs-literal">None</span></span>):
        <span class="hljs-keyword">return</span> self.tokenizer(text, text_pair=second_text, return_tensors=self.framework)

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">_forward</span>(<span class="hljs-params">self, model_inputs</span>):
        <span class="hljs-keyword">return</span> self.model(**model_inputs)

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">postprocess</span>(<span class="hljs-params">self, model_outputs</span>):
        logits = model_outputs.logits[<span class="hljs-number">0</span>].numpy()
        probabilities = softmax(logits)

        best_class = np.argmax(probabilities)
        label = self.model.config.id2label[best_class]
        score = probabilities[best_class].item()
        logits = logits.tolist()
        <span class="hljs-keyword">return</span> {<span class="hljs-string">&quot;label&quot;</span>: label, <span class="hljs-string">&quot;score&quot;</span>: score, <span class="hljs-string">&quot;logits&quot;</span>: logits}`,wrap:!1}}),S=new w({props:{code:"ZnJvbSUyMHBhaXJfY2xhc3NpZmljYXRpb24lMjBpbXBvcnQlMjBQYWlyQ2xhc3NpZmljYXRpb25QaXBlbGluZSUwQWZyb20lMjB0cmFuc2Zvcm1lcnMucGlwZWxpbmVzJTIwaW1wb3J0JTIwUElQRUxJTkVfUkVHSVNUUlklMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwQXV0b01vZGVsRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbiUyQyUyMFRGQXV0b01vZGVsRm9yU2VxdWVuY2VDbGFzc2lmaWNhdGlvbiUwQSUwQVBJUEVMSU5FX1JFR0lTVFJZLnJlZ2lzdGVyX3BpcGVsaW5lKCUwQSUyMCUyMCUyMCUyMCUyMnBhaXItY2xhc3NpZmljYXRpb24lMjIlMkMlMEElMjAlMjAlMjAlMjBwaXBlbGluZV9jbGFzcyUzRFBhaXJDbGFzc2lmaWNhdGlvblBpcGVsaW5lJTJDJTBBJTIwJTIwJTIwJTIwcHRfbW9kZWwlM0RBdXRvTW9kZWxGb3JTZXF1ZW5jZUNsYXNzaWZpY2F0aW9uJTJDJTBBJTIwJTIwJTIwJTIwdGZfbW9kZWwlM0RURkF1dG9Nb2RlbEZvclNlcXVlbmNlQ2xhc3NpZmljYXRpb24lMkMlMEEp",highlighted:`<span class="hljs-keyword">from</span> pair_classification <span class="hljs-keyword">import</span> PairClassificationPipeline
<span class="hljs-keyword">from</span> transformers.pipelines <span class="hljs-keyword">import</span> PIPELINE_REGISTRY
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSequenceClassification, TFAutoModelForSequenceClassification

PIPELINE_REGISTRY.register_pipeline(
    <span class="hljs-string">&quot;pair-classification&quot;</span>,
    pipeline_class=PairClassificationPipeline,
    pt_model=AutoModelForSequenceClassification,
    tf_model=TFAutoModelForSequenceClassification,
)`,wrap:!1}}),P=new w({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMHBpcGVsaW5lJTBBJTBBY2xhc3NpZmllciUyMCUzRCUyMHBpcGVsaW5lKCUyMnBhaXItY2xhc3NpZmljYXRpb24lMjIlMkMlMjBtb2RlbCUzRCUyMnNndWdnZXIlMkZmaW5ldHVuZWQtYmVydC1tcnBjJTIyKQ==",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

classifier = pipeline(<span class="hljs-string">&quot;pair-classification&quot;</span>, model=<span class="hljs-string">&quot;sgugger/finetuned-bert-mrpc&quot;</span>)`,wrap:!1}}),Y=new w({props:{code:"ZnJvbSUyMGh1Z2dpbmdmYWNlX2h1YiUyMGltcG9ydCUyMFJlcG9zaXRvcnklMEElMEFyZXBvJTIwJTNEJTIwUmVwb3NpdG9yeSglMjJ0ZXN0LWR5bmFtaWMtcGlwZWxpbmUlMjIlMkMlMjBjbG9uZV9mcm9tJTNEJTIyJTdCeW91cl91c2VybmFtZSU3RCUyRnRlc3QtZHluYW1pYy1waXBlbGluZSUyMiklMEFjbGFzc2lmaWVyLnNhdmVfcHJldHJhaW5lZCglMjJ0ZXN0LWR5bmFtaWMtcGlwZWxpbmUlMjIpJTBBcmVwby5wdXNoX3RvX2h1Yigp",highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> Repository

repo = Repository(<span class="hljs-string">&quot;test-dynamic-pipeline&quot;</span>, clone_from=<span class="hljs-string">&quot;{your_username}/test-dynamic-pipeline&quot;</span>)
classifier.save_pretrained(<span class="hljs-string">&quot;test-dynamic-pipeline&quot;</span>)
repo.push_to_hub()`,wrap:!1}}),Q=new w({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMHBpcGVsaW5lJTBBJTBBY2xhc3NpZmllciUyMCUzRCUyMHBpcGVsaW5lKG1vZGVsJTNEJTIyJTdCeW91cl91c2VybmFtZSU3RCUyRnRlc3QtZHluYW1pYy1waXBlbGluZSUyMiUyQyUyMHRydXN0X3JlbW90ZV9jb2RlJTNEVHJ1ZSk=",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

classifier = pipeline(model=<span class="hljs-string">&quot;{your_username}/test-dynamic-pipeline&quot;</span>, trust_remote_code=<span class="hljs-literal">True</span>)`,wrap:!1}}),L=new Fe({props:{title:"Hinzufügen der Pipeline zu 🤗 Transformers",local:"hinzufügen-der-pipeline-zu--transformers",headingTag:"h2"}}),{c(){y=a("meta"),ie=t(),ne=a("p"),ae=t(),d(T.$$.fragment),pe=t(),J=a("p"),J.innerHTML=Le,re=t(),j=a("p"),j.innerHTML=De,de=t(),h=a("p"),h.innerHTML=Ke,ce=t(),f=a("p"),f.innerHTML=Oe,Me=t(),d(b.$$.fragment),oe=t(),U=a("p"),U.textContent=es,ue=t(),I=a("p"),I.innerHTML=ss,me=t(),g=a("p"),g.innerHTML=ls,we=t(),B=a("p"),B.innerHTML=ns,ye=t(),k=a("p"),k.innerHTML=ts,Te=t(),C=a("p"),C.innerHTML=is,Je=t(),_=a("p"),_.innerHTML=as,je=t(),d(z.$$.fragment),he=t(),Z=a("p"),Z.innerHTML=ps,fe=t(),d(A.$$.fragment),be=t(),G=a("p"),G.textContent=rs,Ue=t(),d(H.$$.fragment),Ie=t(),V=a("p"),V.innerHTML=ds,ge=t(),d(W.$$.fragment),Be=t(),R=a("p"),R.innerHTML=cs,ke=t(),d(E.$$.fragment),Ce=t(),d(X.$$.fragment),_e=t(),N=a("p"),N.innerHTML=Ms,ze=t(),d(v.$$.fragment),Ze=t(),q=a("p"),q.innerHTML=os,Ae=t(),d(S.$$.fragment),Ge=t(),$=a("p"),$.innerHTML=us,He=t(),d(P.$$.fragment),Ve=t(),x=a("p"),x.innerHTML=ms,We=t(),d(Y.$$.fragment),Re=t(),F=a("p"),F.innerHTML=ws,Ee=t(),d(Q.$$.fragment),Xe=t(),d(L.$$.fragment),Ne=t(),D=a("p"),D.innerHTML=ys,ve=t(),K=a("p"),K.innerHTML=Ts,qe=t(),O=a("p"),O.innerHTML=Js,Se=t(),ee=a("p"),ee.innerHTML=js,$e=t(),se=a("p"),se.innerHTML=hs,Pe=t(),le=a("ul"),le.innerHTML=fs,xe=t(),te=a("p"),this.h()},l(e){const s=_s("svelte-u9bgzb",document.head);y=p(s,"META",{name:!0,content:!0}),s.forEach(l),ie=i(e),ne=p(e,"P",{}),bs(ne).forEach(l),ae=i(e),c(T.$$.fragment,e),pe=i(e),J=p(e,"P",{"data-svelte-h":!0}),r(J)!=="svelte-1wezfmd"&&(J.innerHTML=Le),re=i(e),j=p(e,"P",{"data-svelte-h":!0}),r(j)!=="svelte-1gibur5"&&(j.innerHTML=De),de=i(e),h=p(e,"P",{"data-svelte-h":!0}),r(h)!=="svelte-1s6g8s2"&&(h.innerHTML=Ke),ce=i(e),f=p(e,"P",{"data-svelte-h":!0}),r(f)!=="svelte-178jgk4"&&(f.innerHTML=Oe),Me=i(e),c(b.$$.fragment,e),oe=i(e),U=p(e,"P",{"data-svelte-h":!0}),r(U)!=="svelte-prsu03"&&(U.textContent=es),ue=i(e),I=p(e,"P",{"data-svelte-h":!0}),r(I)!=="svelte-111rxft"&&(I.innerHTML=ss),me=i(e),g=p(e,"P",{"data-svelte-h":!0}),r(g)!=="svelte-wh0ews"&&(g.innerHTML=ls),we=i(e),B=p(e,"P",{"data-svelte-h":!0}),r(B)!=="svelte-dhzsf"&&(B.innerHTML=ns),ye=i(e),k=p(e,"P",{"data-svelte-h":!0}),r(k)!=="svelte-1vn0211"&&(k.innerHTML=ts),Te=i(e),C=p(e,"P",{"data-svelte-h":!0}),r(C)!=="svelte-1gm9nlz"&&(C.innerHTML=is),Je=i(e),_=p(e,"P",{"data-svelte-h":!0}),r(_)!=="svelte-1o6q40b"&&(_.innerHTML=as),je=i(e),c(z.$$.fragment,e),he=i(e),Z=p(e,"P",{"data-svelte-h":!0}),r(Z)!=="svelte-nsc0of"&&(Z.innerHTML=ps),fe=i(e),c(A.$$.fragment,e),be=i(e),G=p(e,"P",{"data-svelte-h":!0}),r(G)!=="svelte-18aybbs"&&(G.textContent=rs),Ue=i(e),c(H.$$.fragment,e),Ie=i(e),V=p(e,"P",{"data-svelte-h":!0}),r(V)!=="svelte-1wh7t0j"&&(V.innerHTML=ds),ge=i(e),c(W.$$.fragment,e),Be=i(e),R=p(e,"P",{"data-svelte-h":!0}),r(R)!=="svelte-3k8nr4"&&(R.innerHTML=cs),ke=i(e),c(E.$$.fragment,e),Ce=i(e),c(X.$$.fragment,e),_e=i(e),N=p(e,"P",{"data-svelte-h":!0}),r(N)!=="svelte-1vgfgi6"&&(N.innerHTML=Ms),ze=i(e),c(v.$$.fragment,e),Ze=i(e),q=p(e,"P",{"data-svelte-h":!0}),r(q)!=="svelte-rraq57"&&(q.innerHTML=os),Ae=i(e),c(S.$$.fragment,e),Ge=i(e),$=p(e,"P",{"data-svelte-h":!0}),r($)!=="svelte-lmblxt"&&($.innerHTML=us),He=i(e),c(P.$$.fragment,e),Ve=i(e),x=p(e,"P",{"data-svelte-h":!0}),r(x)!=="svelte-vi7z9w"&&(x.innerHTML=ms),We=i(e),c(Y.$$.fragment,e),Re=i(e),F=p(e,"P",{"data-svelte-h":!0}),r(F)!=="svelte-bimycc"&&(F.innerHTML=ws),Ee=i(e),c(Q.$$.fragment,e),Xe=i(e),c(L.$$.fragment,e),Ne=i(e),D=p(e,"P",{"data-svelte-h":!0}),r(D)!=="svelte-13f7wv7"&&(D.innerHTML=ys),ve=i(e),K=p(e,"P",{"data-svelte-h":!0}),r(K)!=="svelte-ty86wt"&&(K.innerHTML=Ts),qe=i(e),O=p(e,"P",{"data-svelte-h":!0}),r(O)!=="svelte-1mq6d2v"&&(O.innerHTML=Js),Se=i(e),ee=p(e,"P",{"data-svelte-h":!0}),r(ee)!=="svelte-bcl54q"&&(ee.innerHTML=js),$e=i(e),se=p(e,"P",{"data-svelte-h":!0}),r(se)!=="svelte-3mgk43"&&(se.innerHTML=hs),Pe=i(e),le=p(e,"UL",{"data-svelte-h":!0}),r(le)!=="svelte-ish3co"&&(le.innerHTML=fs),xe=i(e),te=p(e,"P",{}),bs(te).forEach(l),this.h()},h(){Us(y,"name","hf:doc:metadata"),Us(y,"content",As)},m(e,s){zs(document.head,y),n(e,ie,s),n(e,ne,s),n(e,ae,s),M(T,e,s),n(e,pe,s),n(e,J,s),n(e,re,s),n(e,j,s),n(e,de,s),n(e,h,s),n(e,ce,s),n(e,f,s),n(e,Me,s),M(b,e,s),n(e,oe,s),n(e,U,s),n(e,ue,s),n(e,I,s),n(e,me,s),n(e,g,s),n(e,we,s),n(e,B,s),n(e,ye,s),n(e,k,s),n(e,Te,s),n(e,C,s),n(e,Je,s),n(e,_,s),n(e,je,s),M(z,e,s),n(e,he,s),n(e,Z,s),n(e,fe,s),M(A,e,s),n(e,be,s),n(e,G,s),n(e,Ue,s),M(H,e,s),n(e,Ie,s),n(e,V,s),n(e,ge,s),M(W,e,s),n(e,Be,s),n(e,R,s),n(e,ke,s),M(E,e,s),n(e,Ce,s),M(X,e,s),n(e,_e,s),n(e,N,s),n(e,ze,s),M(v,e,s),n(e,Ze,s),n(e,q,s),n(e,Ae,s),M(S,e,s),n(e,Ge,s),n(e,$,s),n(e,He,s),M(P,e,s),n(e,Ve,s),n(e,x,s),n(e,We,s),M(Y,e,s),n(e,Re,s),n(e,F,s),n(e,Ee,s),M(Q,e,s),n(e,Xe,s),M(L,e,s),n(e,Ne,s),n(e,D,s),n(e,ve,s),n(e,K,s),n(e,qe,s),n(e,O,s),n(e,Se,s),n(e,ee,s),n(e,$e,s),n(e,se,s),n(e,Pe,s),n(e,le,s),n(e,xe,s),n(e,te,s),Ye=!0},p:gs,i(e){Ye||(o(T.$$.fragment,e),o(b.$$.fragment,e),o(z.$$.fragment,e),o(A.$$.fragment,e),o(H.$$.fragment,e),o(W.$$.fragment,e),o(E.$$.fragment,e),o(X.$$.fragment,e),o(v.$$.fragment,e),o(S.$$.fragment,e),o(P.$$.fragment,e),o(Y.$$.fragment,e),o(Q.$$.fragment,e),o(L.$$.fragment,e),Ye=!0)},o(e){u(T.$$.fragment,e),u(b.$$.fragment,e),u(z.$$.fragment,e),u(A.$$.fragment,e),u(H.$$.fragment,e),u(W.$$.fragment,e),u(E.$$.fragment,e),u(X.$$.fragment,e),u(v.$$.fragment,e),u(S.$$.fragment,e),u(P.$$.fragment,e),u(Y.$$.fragment,e),u(Q.$$.fragment,e),u(L.$$.fragment,e),Ye=!1},d(e){e&&(l(ie),l(ne),l(ae),l(pe),l(J),l(re),l(j),l(de),l(h),l(ce),l(f),l(Me),l(oe),l(U),l(ue),l(I),l(me),l(g),l(we),l(B),l(ye),l(k),l(Te),l(C),l(Je),l(_),l(je),l(he),l(Z),l(fe),l(be),l(G),l(Ue),l(Ie),l(V),l(ge),l(Be),l(R),l(ke),l(Ce),l(_e),l(N),l(ze),l(Ze),l(q),l(Ae),l(Ge),l($),l(He),l(Ve),l(x),l(We),l(Re),l(F),l(Ee),l(Xe),l(Ne),l(D),l(ve),l(K),l(qe),l(O),l(Se),l(ee),l($e),l(se),l(Pe),l(le),l(xe),l(te)),l(y),m(T,e),m(b,e),m(z,e),m(A,e),m(H,e),m(W,e),m(E,e),m(X,e),m(v,e),m(S,e),m(P,e),m(Y,e),m(Q,e),m(L,e)}}}const As='{"title":"Wie erstellt man eine benutzerdefinierte Pipeline?","local":"wie-erstellt-man-eine-benutzerdefinierte-pipeline","sections":[{"title":"Hinzufügen zur Liste der unterstützten Aufgaben","local":"hinzufügen-zur-liste-der-unterstützten-aufgaben","sections":[],"depth":2},{"title":"Teilen Sie Ihre Pipeline auf dem Hub","local":"teilen-sie-ihre-pipeline-auf-dem-hub","sections":[],"depth":2},{"title":"Hinzufügen der Pipeline zu 🤗 Transformers","local":"hinzufügen-der-pipeline-zu--transformers","sections":[],"depth":2}],"depth":1}';function Gs(Qe){return Bs(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Es extends ks{constructor(y){super(),Cs(this,y,Gs,Zs,Is,{})}}export{Es as component};
