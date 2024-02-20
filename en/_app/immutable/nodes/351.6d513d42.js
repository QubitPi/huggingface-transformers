import{s as Ye,n as Ne,o as Ae}from"../chunks/scheduler.9bc65507.js";import{S as He,i as Ee,g as o,s as a,r as c,A as Fe,h as i,f as s,c as n,j as Xe,u as M,x as r,k as Be,y as ze,a as t,v as p,d,t as m,w as y}from"../chunks/index.707bf1b6.js";import{C as h}from"../chunks/CodeBlock.54a9f38d.js";import{D as $e}from"../chunks/DocNotebookDropdown.41f65cb5.js";import{H as xe}from"../chunks/Heading.342b1fa6.js";function Qe(Je){let u,x,z,Q,w,S,b,L,j,Ue='Knowledge distillation is a technique used to transfer knowledge from a larger, more complex model (teacher) to a smaller, simpler model (student). To distill knowledge from one model to another, we take a pre-trained teacher model trained on a certain task (image classification for this case) and randomly initialize a student model to be trained on image classification. Next, we train the student model to minimize the difference between it’s outputs and the teacher’s outputs, thus making it mimic the behavior. It was first introduced in <a href="https://arxiv.org/abs/1503.02531" rel="nofollow">Distilling the Knowledge in a Neural Network by Hinton et al</a>. In this guide, we will do task-specific knowledge distillation. We will use the <a href="https://huggingface.co/datasets/beans" rel="nofollow">beans dataset</a> for this.',q,J,fe='This guide demonstrates how you can distill a <a href="https://huggingface.co/merve/vit-mobilenet-beans-224" rel="nofollow">fine-tuned ViT model</a> (teacher model) to a <a href="https://huggingface.co/google/mobilenet_v2_1.4_224" rel="nofollow">MobileNet</a> (student model) using the <a href="https://huggingface.co/docs/transformers/en/main_classes/trainer#trainer" rel="nofollow">Trainer API</a> of 🤗 Transformers.',K,U,Te="Let’s install the libraries needed for distillation and evaluating the process.",D,f,P,T,ge="In this example, we are using the <code>merve/beans-vit-224</code> model as teacher model. It’s an image classification model, based on <code>google/vit-base-patch16-224-in21k</code> fine-tuned on beans dataset. We will distill this model to a randomly initialized MobileNetV2.",O,g,Ce="We will now load the dataset.",ee,C,le,Z,Ze="We can use an image processor from either of the models, as in this case they return the same output with same resolution. We will use the <code>map()</code> method of <code>dataset</code> to apply the preprocessing to every split of the dataset.",se,W,te,_,We="Essentially, we want the student model (a randomly initialized MobileNet) to mimic the teacher model (fine-tuned vision transformer). To achieve this, we first get the logits output from the teacher and the student. Then, we divide each of them by the parameter <code>temperature</code> which controls the importance of each soft target. A parameter called <code>lambda</code> weighs the importance of the distillation loss. In this example, we will use <code>temperature=5</code> and <code>lambda=0.5</code>. We will use the Kullback-Leibler Divergence loss to compute the divergence between the student and teacher. Given two data P and Q, KL Divergence explains how much extra information we need to represent P using Q. If two are identical, their KL divergence is zero, as there’s no other information needed to explain P from Q. Thus, in the context of knowledge distillation, KL divergence is useful.",ae,I,ne,R,_e="We will now login to Hugging Face Hub so we can push our model to the Hugging Face Hub through the <code>Trainer</code>.",oe,G,ie,v,Ie="Let’s set the <code>TrainingArguments</code>, the teacher model and the student model.",re,k,ce,V,Re="We can use <code>compute_metrics</code> function to evaluate our model on the test set. This function will be used during the training process to compute the <code>accuracy</code> &amp; <code>f1</code> of our model.",Me,X,pe,B,Ge="Let’s initialize the <code>Trainer</code> with the training arguments we defined. We will also initialize our data collator.",de,Y,me,N,ve="We can now train our model.",ye,A,he,H,ke="We can evaluate the model on the test set.",ue,E,we,F,Ve='On test set, our model reaches 72 percent accuracy. To have a sanity check over efficiency of distillation, we also trained MobileNet on the beans dataset from scratch with the same hyperparameters and observed 63 percent accuracy on the test set. We invite the readers to try different pre-trained teacher models, student architectures, distillation parameters and report their findings. The training logs and checkpoints for distilled model can be found in <a href="https://huggingface.co/merve/vit-mobilenet-beans-224" rel="nofollow">this repository</a>, and MobileNetV2 trained from scratch can be found in this <a href="https://huggingface.co/merve/resnet-mobilenet-beans-5" rel="nofollow">repository</a>.',be,$,je;return w=new xe({props:{title:"Knowledge Distillation for Computer Vision",local:"knowledge-distillation-for-computer-vision",headingTag:"h1"}}),b=new $e({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Mixed",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/main/transformers_doc/en/knowledge_distillation_for_image_classification.ipynb"},{label:"PyTorch",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/main/transformers_doc/en/pytorch/knowledge_distillation_for_image_classification.ipynb"},{label:"TensorFlow",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/main/transformers_doc/en/tensorflow/knowledge_distillation_for_image_classification.ipynb"},{label:"Mixed",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/main/transformers_doc/en/knowledge_distillation_for_image_classification.ipynb"},{label:"PyTorch",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/main/transformers_doc/en/pytorch/knowledge_distillation_for_image_classification.ipynb"},{label:"TensorFlow",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/main/transformers_doc/en/tensorflow/knowledge_distillation_for_image_classification.ipynb"}]}}),f=new h({props:{code:"cGlwJTIwaW5zdGFsbCUyMHRyYW5zZm9ybWVycyUyMGRhdGFzZXRzJTIwYWNjZWxlcmF0ZSUyMHRlbnNvcmJvYXJkJTIwZXZhbHVhdGUlMjAtLXVwZ3JhZGU=",highlighted:"pip install transformers datasets accelerate tensorboard evaluate --upgrade",wrap:!1}}),C=new h({props:{code:"ZnJvbSUyMGRhdGFzZXRzJTIwaW1wb3J0JTIwbG9hZF9kYXRhc2V0JTBBJTBBZGF0YXNldCUyMCUzRCUyMGxvYWRfZGF0YXNldCglMjJiZWFucyUyMik=",highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

dataset = load_dataset(<span class="hljs-string">&quot;beans&quot;</span>)`,wrap:!1}}),W=new h({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9JbWFnZVByb2Nlc3NvciUwQXRlYWNoZXJfcHJvY2Vzc29yJTIwJTNEJTIwQXV0b0ltYWdlUHJvY2Vzc29yLmZyb21fcHJldHJhaW5lZCglMjJtZXJ2ZSUyRmJlYW5zLXZpdC0yMjQlMjIpJTBBJTBBZGVmJTIwcHJvY2VzcyhleGFtcGxlcyklM0ElMEElMjAlMjAlMjAlMjBwcm9jZXNzZWRfaW5wdXRzJTIwJTNEJTIwdGVhY2hlcl9wcm9jZXNzb3IoZXhhbXBsZXMlNUIlMjJpbWFnZSUyMiU1RCklMEElMjAlMjAlMjAlMjByZXR1cm4lMjBwcm9jZXNzZWRfaW5wdXRzJTBBJTBBcHJvY2Vzc2VkX2RhdGFzZXRzJTIwJTNEJTIwZGF0YXNldC5tYXAocHJvY2VzcyUyQyUyMGJhdGNoZWQlM0RUcnVlKQ==",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoImageProcessor
teacher_processor = AutoImageProcessor.from_pretrained(<span class="hljs-string">&quot;merve/beans-vit-224&quot;</span>)

<span class="hljs-keyword">def</span> <span class="hljs-title function_">process</span>(<span class="hljs-params">examples</span>):
    processed_inputs = teacher_processor(examples[<span class="hljs-string">&quot;image&quot;</span>])
    <span class="hljs-keyword">return</span> processed_inputs

processed_datasets = dataset.<span class="hljs-built_in">map</span>(process, batched=<span class="hljs-literal">True</span>)`,wrap:!1}}),I=new h({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMFRyYWluaW5nQXJndW1lbnRzJTJDJTIwVHJhaW5lciUwQWltcG9ydCUyMHRvcmNoJTBBaW1wb3J0JTIwdG9yY2gubm4lMjBhcyUyMG5uJTBBaW1wb3J0JTIwdG9yY2gubm4uZnVuY3Rpb25hbCUyMGFzJTIwRiUwQSUwQSUwQWNsYXNzJTIwSW1hZ2VEaXN0aWxUcmFpbmVyKFRyYWluZXIpJTNBJTBBJTIwJTIwJTIwJTIwZGVmJTIwX19pbml0X18oc2VsZiUyQyUyMHRlYWNoZXJfbW9kZWwlM0ROb25lJTJDJTIwc3R1ZGVudF9tb2RlbCUzRE5vbmUlMkMlMjB0ZW1wZXJhdHVyZSUzRE5vbmUlMkMlMjBsYW1iZGFfcGFyYW0lM0ROb25lJTJDJTIwJTIwKmFyZ3MlMkMlMjAqKmt3YXJncyklM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBzdXBlcigpLl9faW5pdF9fKG1vZGVsJTNEc3R1ZGVudF9tb2RlbCUyQyUyMCphcmdzJTJDJTIwKiprd2FyZ3MpJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwc2VsZi50ZWFjaGVyJTIwJTNEJTIwdGVhY2hlcl9tb2RlbCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHNlbGYuc3R1ZGVudCUyMCUzRCUyMHN0dWRlbnRfbW9kZWwlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBzZWxmLmxvc3NfZnVuY3Rpb24lMjAlM0QlMjBubi5LTERpdkxvc3MocmVkdWN0aW9uJTNEJTIyYmF0Y2htZWFuJTIyKSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMGRldmljZSUyMCUzRCUyMHRvcmNoLmRldmljZSgnY3VkYSclMjBpZiUyMHRvcmNoLmN1ZGEuaXNfYXZhaWxhYmxlKCklMjBlbHNlJTIwJ2NwdScpJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwc2VsZi50ZWFjaGVyLnRvKGRldmljZSklMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBzZWxmLnRlYWNoZXIuZXZhbCgpJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwc2VsZi50ZW1wZXJhdHVyZSUyMCUzRCUyMHRlbXBlcmF0dXJlJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwc2VsZi5sYW1iZGFfcGFyYW0lMjAlM0QlMjBsYW1iZGFfcGFyYW0lMEElMEElMjAlMjAlMjAlMjBkZWYlMjBjb21wdXRlX2xvc3Moc2VsZiUyQyUyMHN0dWRlbnQlMkMlMjBpbnB1dHMlMkMlMjByZXR1cm5fb3V0cHV0cyUzREZhbHNlKSUzQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHN0dWRlbnRfb3V0cHV0JTIwJTNEJTIwc2VsZi5zdHVkZW50KCoqaW5wdXRzKSUwQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHdpdGglMjB0b3JjaC5ub19ncmFkKCklM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjB0ZWFjaGVyX291dHB1dCUyMCUzRCUyMHNlbGYudGVhY2hlcigqKmlucHV0cyklMEElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjMlMjBDb21wdXRlJTIwc29mdCUyMHRhcmdldHMlMjBmb3IlMjB0ZWFjaGVyJTIwYW5kJTIwc3R1ZGVudCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHNvZnRfdGVhY2hlciUyMCUzRCUyMEYuc29mdG1heCh0ZWFjaGVyX291dHB1dC5sb2dpdHMlMjAlMkYlMjBzZWxmLnRlbXBlcmF0dXJlJTJDJTIwZGltJTNELTEpJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwc29mdF9zdHVkZW50JTIwJTNEJTIwRi5sb2dfc29mdG1heChzdHVkZW50X291dHB1dC5sb2dpdHMlMjAlMkYlMjBzZWxmLnRlbXBlcmF0dXJlJTJDJTIwZGltJTNELTEpJTBBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIzJTIwQ29tcHV0ZSUyMHRoZSUyMGxvc3MlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBkaXN0aWxsYXRpb25fbG9zcyUyMCUzRCUyMHNlbGYubG9zc19mdW5jdGlvbihzb2Z0X3N0dWRlbnQlMkMlMjBzb2Z0X3RlYWNoZXIpJTIwKiUyMChzZWxmLnRlbXBlcmF0dXJlJTIwKiolMjAyKSUwQSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMyUyMENvbXB1dGUlMjB0aGUlMjB0cnVlJTIwbGFiZWwlMjBsb3NzJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwc3R1ZGVudF90YXJnZXRfbG9zcyUyMCUzRCUyMHN0dWRlbnRfb3V0cHV0Lmxvc3MlMEElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjMlMjBDYWxjdWxhdGUlMjBmaW5hbCUyMGxvc3MlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBsb3NzJTIwJTNEJTIwKDEuJTIwLSUyMHNlbGYubGFtYmRhX3BhcmFtKSUyMColMjBzdHVkZW50X3RhcmdldF9sb3NzJTIwJTJCJTIwc2VsZi5sYW1iZGFfcGFyYW0lMjAqJTIwZGlzdGlsbGF0aW9uX2xvc3MlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjByZXR1cm4lMjAobG9zcyUyQyUyMHN0dWRlbnRfb3V0cHV0KSUyMGlmJTIwcmV0dXJuX291dHB1dHMlMjBlbHNlJTIwbG9zcw==",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TrainingArguments, Trainer
<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">import</span> torch.nn <span class="hljs-keyword">as</span> nn
<span class="hljs-keyword">import</span> torch.nn.functional <span class="hljs-keyword">as</span> F


<span class="hljs-keyword">class</span> <span class="hljs-title class_">ImageDistilTrainer</span>(<span class="hljs-title class_ inherited__">Trainer</span>):
    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, teacher_model=<span class="hljs-literal">None</span>, student_model=<span class="hljs-literal">None</span>, temperature=<span class="hljs-literal">None</span>, lambda_param=<span class="hljs-literal">None</span>,  *args, **kwargs</span>):
        <span class="hljs-built_in">super</span>().__init__(model=student_model, *args, **kwargs)
        self.teacher = teacher_model
        self.student = student_model
        self.loss_function = nn.KLDivLoss(reduction=<span class="hljs-string">&quot;batchmean&quot;</span>)
        device = torch.device(<span class="hljs-string">&#x27;cuda&#x27;</span> <span class="hljs-keyword">if</span> torch.cuda.is_available() <span class="hljs-keyword">else</span> <span class="hljs-string">&#x27;cpu&#x27;</span>)
        self.teacher.to(device)
        self.teacher.<span class="hljs-built_in">eval</span>()
        self.temperature = temperature
        self.lambda_param = lambda_param

    <span class="hljs-keyword">def</span> <span class="hljs-title function_">compute_loss</span>(<span class="hljs-params">self, student, inputs, return_outputs=<span class="hljs-literal">False</span></span>):
        student_output = self.student(**inputs)

        <span class="hljs-keyword">with</span> torch.no_grad():
          teacher_output = self.teacher(**inputs)

        <span class="hljs-comment"># Compute soft targets for teacher and student</span>
        soft_teacher = F.softmax(teacher_output.logits / self.temperature, dim=-<span class="hljs-number">1</span>)
        soft_student = F.log_softmax(student_output.logits / self.temperature, dim=-<span class="hljs-number">1</span>)

        <span class="hljs-comment"># Compute the loss</span>
        distillation_loss = self.loss_function(soft_student, soft_teacher) * (self.temperature ** <span class="hljs-number">2</span>)

        <span class="hljs-comment"># Compute the true label loss</span>
        student_target_loss = student_output.loss

        <span class="hljs-comment"># Calculate final loss</span>
        loss = (<span class="hljs-number">1.</span> - self.lambda_param) * student_target_loss + self.lambda_param * distillation_loss
        <span class="hljs-keyword">return</span> (loss, student_output) <span class="hljs-keyword">if</span> return_outputs <span class="hljs-keyword">else</span> loss`,wrap:!1}}),G=new h({props:{code:"ZnJvbSUyMGh1Z2dpbmdmYWNlX2h1YiUyMGltcG9ydCUyMG5vdGVib29rX2xvZ2luJTBBJTBBbm90ZWJvb2tfbG9naW4oKQ==",highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> notebook_login

notebook_login()`,wrap:!1}}),k=new h({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMEF1dG9Nb2RlbEZvckltYWdlQ2xhc3NpZmljYXRpb24lMkMlMjBNb2JpbGVOZXRWMkNvbmZpZyUyQyUyME1vYmlsZU5ldFYyRm9ySW1hZ2VDbGFzc2lmaWNhdGlvbiUwQSUwQXRyYWluaW5nX2FyZ3MlMjAlM0QlMjBUcmFpbmluZ0FyZ3VtZW50cyglMEElMjAlMjAlMjAlMjBvdXRwdXRfZGlyJTNEJTIybXktYXdlc29tZS1tb2RlbCUyMiUyQyUwQSUyMCUyMCUyMCUyMG51bV90cmFpbl9lcG9jaHMlM0QzMCUyQyUwQSUyMCUyMCUyMCUyMGZwMTYlM0RUcnVlJTJDJTBBJTIwJTIwJTIwJTIwbG9nZ2luZ19kaXIlM0RmJTIyJTdCcmVwb19uYW1lJTdEJTJGbG9ncyUyMiUyQyUwQSUyMCUyMCUyMCUyMGxvZ2dpbmdfc3RyYXRlZ3klM0QlMjJlcG9jaCUyMiUyQyUwQSUyMCUyMCUyMCUyMGV2YWx1YXRpb25fc3RyYXRlZ3klM0QlMjJlcG9jaCUyMiUyQyUwQSUyMCUyMCUyMCUyMHNhdmVfc3RyYXRlZ3klM0QlMjJlcG9jaCUyMiUyQyUwQSUyMCUyMCUyMCUyMGxvYWRfYmVzdF9tb2RlbF9hdF9lbmQlM0RUcnVlJTJDJTBBJTIwJTIwJTIwJTIwbWV0cmljX2Zvcl9iZXN0X21vZGVsJTNEJTIyYWNjdXJhY3klMjIlMkMlMEElMjAlMjAlMjAlMjByZXBvcnRfdG8lM0QlMjJ0ZW5zb3Jib2FyZCUyMiUyQyUwQSUyMCUyMCUyMCUyMHB1c2hfdG9faHViJTNEVHJ1ZSUyQyUwQSUyMCUyMCUyMCUyMGh1Yl9zdHJhdGVneSUzRCUyMmV2ZXJ5X3NhdmUlMjIlMkMlMEElMjAlMjAlMjAlMjBodWJfbW9kZWxfaWQlM0RyZXBvX25hbWUlMkMlMEElMjAlMjAlMjAlMjApJTBBJTBBbnVtX2xhYmVscyUyMCUzRCUyMGxlbihwcm9jZXNzZWRfZGF0YXNldHMlNUIlMjJ0cmFpbiUyMiU1RC5mZWF0dXJlcyU1QiUyMmxhYmVscyUyMiU1RC5uYW1lcyklMEElMEElMjMlMjBpbml0aWFsaXplJTIwbW9kZWxzJTBBdGVhY2hlcl9tb2RlbCUyMCUzRCUyMEF1dG9Nb2RlbEZvckltYWdlQ2xhc3NpZmljYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUwQSUyMCUyMCUyMCUyMCUyMm1lcnZlJTJGYmVhbnMtdml0LTIyNCUyMiUyQyUwQSUyMCUyMCUyMCUyMG51bV9sYWJlbHMlM0RudW1fbGFiZWxzJTJDJTBBJTIwJTIwJTIwJTIwaWdub3JlX21pc21hdGNoZWRfc2l6ZXMlM0RUcnVlJTBBKSUwQSUwQSUyMyUyMHRyYWluaW5nJTIwTW9iaWxlTmV0VjIlMjBmcm9tJTIwc2NyYXRjaCUwQXN0dWRlbnRfY29uZmlnJTIwJTNEJTIwTW9iaWxlTmV0VjJDb25maWcoKSUwQXN0dWRlbnRfY29uZmlnLm51bV9sYWJlbHMlMjAlM0QlMjBudW1fbGFiZWxzJTBBc3R1ZGVudF9tb2RlbCUyMCUzRCUyME1vYmlsZU5ldFYyRm9ySW1hZ2VDbGFzc2lmaWNhdGlvbihzdHVkZW50X2NvbmZpZyk=",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForImageClassification, MobileNetV2Config, MobileNetV2ForImageClassification

training_args = TrainingArguments(
    output_dir=<span class="hljs-string">&quot;my-awesome-model&quot;</span>,
    num_train_epochs=<span class="hljs-number">30</span>,
    fp16=<span class="hljs-literal">True</span>,
    logging_dir=<span class="hljs-string">f&quot;<span class="hljs-subst">{repo_name}</span>/logs&quot;</span>,
    logging_strategy=<span class="hljs-string">&quot;epoch&quot;</span>,
    evaluation_strategy=<span class="hljs-string">&quot;epoch&quot;</span>,
    save_strategy=<span class="hljs-string">&quot;epoch&quot;</span>,
    load_best_model_at_end=<span class="hljs-literal">True</span>,
    metric_for_best_model=<span class="hljs-string">&quot;accuracy&quot;</span>,
    report_to=<span class="hljs-string">&quot;tensorboard&quot;</span>,
    push_to_hub=<span class="hljs-literal">True</span>,
    hub_strategy=<span class="hljs-string">&quot;every_save&quot;</span>,
    hub_model_id=repo_name,
    )

num_labels = <span class="hljs-built_in">len</span>(processed_datasets[<span class="hljs-string">&quot;train&quot;</span>].features[<span class="hljs-string">&quot;labels&quot;</span>].names)

<span class="hljs-comment"># initialize models</span>
teacher_model = AutoModelForImageClassification.from_pretrained(
    <span class="hljs-string">&quot;merve/beans-vit-224&quot;</span>,
    num_labels=num_labels,
    ignore_mismatched_sizes=<span class="hljs-literal">True</span>
)

<span class="hljs-comment"># training MobileNetV2 from scratch</span>
student_config = MobileNetV2Config()
student_config.num_labels = num_labels
student_model = MobileNetV2ForImageClassification(student_config)`,wrap:!1}}),X=new h({props:{code:"aW1wb3J0JTIwZXZhbHVhdGUlMEFpbXBvcnQlMjBudW1weSUyMGFzJTIwbnAlMEElMEFhY2N1cmFjeSUyMCUzRCUyMGV2YWx1YXRlLmxvYWQoJTIyYWNjdXJhY3klMjIpJTBBJTBBZGVmJTIwY29tcHV0ZV9tZXRyaWNzKGV2YWxfcHJlZCklM0ElMEElMjAlMjAlMjAlMjBwcmVkaWN0aW9ucyUyQyUyMGxhYmVscyUyMCUzRCUyMGV2YWxfcHJlZCUwQSUyMCUyMCUyMCUyMGFjYyUyMCUzRCUyMGFjY3VyYWN5LmNvbXB1dGUocmVmZXJlbmNlcyUzRGxhYmVscyUyQyUyMHByZWRpY3Rpb25zJTNEbnAuYXJnbWF4KHByZWRpY3Rpb25zJTJDJTIwYXhpcyUzRDEpKSUwQSUyMCUyMCUyMCUyMHJldHVybiUyMCU3QiUyMmFjY3VyYWN5JTIyJTNBJTIwYWNjJTVCJTIyYWNjdXJhY3klMjIlNUQlN0Q=",highlighted:`<span class="hljs-keyword">import</span> evaluate
<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np

accuracy = evaluate.load(<span class="hljs-string">&quot;accuracy&quot;</span>)

<span class="hljs-keyword">def</span> <span class="hljs-title function_">compute_metrics</span>(<span class="hljs-params">eval_pred</span>):
    predictions, labels = eval_pred
    acc = accuracy.compute(references=labels, predictions=np.argmax(predictions, axis=<span class="hljs-number">1</span>))
    <span class="hljs-keyword">return</span> {<span class="hljs-string">&quot;accuracy&quot;</span>: acc[<span class="hljs-string">&quot;accuracy&quot;</span>]}`,wrap:!1}}),Y=new h({props:{code:"ZnJvbSUyMHRyYW5zZm9ybWVycyUyMGltcG9ydCUyMERlZmF1bHREYXRhQ29sbGF0b3IlMEElMEFkYXRhX2NvbGxhdG9yJTIwJTNEJTIwRGVmYXVsdERhdGFDb2xsYXRvcigpJTBBdHJhaW5lciUyMCUzRCUyMEltYWdlRGlzdGlsVHJhaW5lciglMEElMjAlMjAlMjAlMjBzdHVkZW50X21vZGVsJTNEc3R1ZGVudF9tb2RlbCUyQyUwQSUyMCUyMCUyMCUyMHRlYWNoZXJfbW9kZWwlM0R0ZWFjaGVyX21vZGVsJTJDJTBBJTIwJTIwJTIwJTIwdHJhaW5pbmdfYXJncyUzRHRyYWluaW5nX2FyZ3MlMkMlMEElMjAlMjAlMjAlMjB0cmFpbl9kYXRhc2V0JTNEcHJvY2Vzc2VkX2RhdGFzZXRzJTVCJTIydHJhaW4lMjIlNUQlMkMlMEElMjAlMjAlMjAlMjBldmFsX2RhdGFzZXQlM0Rwcm9jZXNzZWRfZGF0YXNldHMlNUIlMjJ2YWxpZGF0aW9uJTIyJTVEJTJDJTBBJTIwJTIwJTIwJTIwZGF0YV9jb2xsYXRvciUzRGRhdGFfY29sbGF0b3IlMkMlMEElMjAlMjAlMjAlMjB0b2tlbml6ZXIlM0R0ZWFjaGVyX3Byb2Nlc3NvciUyQyUwQSUyMCUyMCUyMCUyMGNvbXB1dGVfbWV0cmljcyUzRGNvbXB1dGVfbWV0cmljcyUyQyUwQSUyMCUyMCUyMCUyMHRlbXBlcmF0dXJlJTNENSUyQyUwQSUyMCUyMCUyMCUyMGxhbWJkYV9wYXJhbSUzRDAuNSUwQSk=",highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DefaultDataCollator

data_collator = DefaultDataCollator()
trainer = ImageDistilTrainer(
    student_model=student_model,
    teacher_model=teacher_model,
    training_args=training_args,
    train_dataset=processed_datasets[<span class="hljs-string">&quot;train&quot;</span>],
    eval_dataset=processed_datasets[<span class="hljs-string">&quot;validation&quot;</span>],
    data_collator=data_collator,
    tokenizer=teacher_processor,
    compute_metrics=compute_metrics,
    temperature=<span class="hljs-number">5</span>,
    lambda_param=<span class="hljs-number">0.5</span>
)`,wrap:!1}}),A=new h({props:{code:"dHJhaW5lci50cmFpbigp",highlighted:"trainer.train()",wrap:!1}}),E=new h({props:{code:"dHJhaW5lci5ldmFsdWF0ZShwcm9jZXNzZWRfZGF0YXNldHMlNUIlMjJ0ZXN0JTIyJTVEKQ==",highlighted:'trainer.evaluate(processed_datasets[<span class="hljs-string">&quot;test&quot;</span>])',wrap:!1}}),{c(){u=o("meta"),x=a(),z=o("p"),Q=a(),c(w.$$.fragment),S=a(),c(b.$$.fragment),L=a(),j=o("p"),j.innerHTML=Ue,q=a(),J=o("p"),J.innerHTML=fe,K=a(),U=o("p"),U.textContent=Te,D=a(),c(f.$$.fragment),P=a(),T=o("p"),T.innerHTML=ge,O=a(),g=o("p"),g.textContent=Ce,ee=a(),c(C.$$.fragment),le=a(),Z=o("p"),Z.innerHTML=Ze,se=a(),c(W.$$.fragment),te=a(),_=o("p"),_.innerHTML=We,ae=a(),c(I.$$.fragment),ne=a(),R=o("p"),R.innerHTML=_e,oe=a(),c(G.$$.fragment),ie=a(),v=o("p"),v.innerHTML=Ie,re=a(),c(k.$$.fragment),ce=a(),V=o("p"),V.innerHTML=Re,Me=a(),c(X.$$.fragment),pe=a(),B=o("p"),B.innerHTML=Ge,de=a(),c(Y.$$.fragment),me=a(),N=o("p"),N.textContent=ve,ye=a(),c(A.$$.fragment),he=a(),H=o("p"),H.textContent=ke,ue=a(),c(E.$$.fragment),we=a(),F=o("p"),F.innerHTML=Ve,be=a(),$=o("p"),this.h()},l(e){const l=Fe("svelte-u9bgzb",document.head);u=i(l,"META",{name:!0,content:!0}),l.forEach(s),x=n(e),z=i(e,"P",{}),Xe(z).forEach(s),Q=n(e),M(w.$$.fragment,e),S=n(e),M(b.$$.fragment,e),L=n(e),j=i(e,"P",{"data-svelte-h":!0}),r(j)!=="svelte-dc2uq1"&&(j.innerHTML=Ue),q=n(e),J=i(e,"P",{"data-svelte-h":!0}),r(J)!=="svelte-4hdnoe"&&(J.innerHTML=fe),K=n(e),U=i(e,"P",{"data-svelte-h":!0}),r(U)!=="svelte-2k98b1"&&(U.textContent=Te),D=n(e),M(f.$$.fragment,e),P=n(e),T=i(e,"P",{"data-svelte-h":!0}),r(T)!=="svelte-1mtygw2"&&(T.innerHTML=ge),O=n(e),g=i(e,"P",{"data-svelte-h":!0}),r(g)!=="svelte-10p4ja7"&&(g.textContent=Ce),ee=n(e),M(C.$$.fragment,e),le=n(e),Z=i(e,"P",{"data-svelte-h":!0}),r(Z)!=="svelte-hkc5ea"&&(Z.innerHTML=Ze),se=n(e),M(W.$$.fragment,e),te=n(e),_=i(e,"P",{"data-svelte-h":!0}),r(_)!=="svelte-1s0q0ij"&&(_.innerHTML=We),ae=n(e),M(I.$$.fragment,e),ne=n(e),R=i(e,"P",{"data-svelte-h":!0}),r(R)!=="svelte-u4ly9n"&&(R.innerHTML=_e),oe=n(e),M(G.$$.fragment,e),ie=n(e),v=i(e,"P",{"data-svelte-h":!0}),r(v)!=="svelte-w43n3v"&&(v.innerHTML=Ie),re=n(e),M(k.$$.fragment,e),ce=n(e),V=i(e,"P",{"data-svelte-h":!0}),r(V)!=="svelte-1lauups"&&(V.innerHTML=Re),Me=n(e),M(X.$$.fragment,e),pe=n(e),B=i(e,"P",{"data-svelte-h":!0}),r(B)!=="svelte-v7k90h"&&(B.innerHTML=Ge),de=n(e),M(Y.$$.fragment,e),me=n(e),N=i(e,"P",{"data-svelte-h":!0}),r(N)!=="svelte-1914o93"&&(N.textContent=ve),ye=n(e),M(A.$$.fragment,e),he=n(e),H=i(e,"P",{"data-svelte-h":!0}),r(H)!=="svelte-1ra6erz"&&(H.textContent=ke),ue=n(e),M(E.$$.fragment,e),we=n(e),F=i(e,"P",{"data-svelte-h":!0}),r(F)!=="svelte-t8ooy5"&&(F.innerHTML=Ve),be=n(e),$=i(e,"P",{}),Xe($).forEach(s),this.h()},h(){Be(u,"name","hf:doc:metadata"),Be(u,"content",Se)},m(e,l){ze(document.head,u),t(e,x,l),t(e,z,l),t(e,Q,l),p(w,e,l),t(e,S,l),p(b,e,l),t(e,L,l),t(e,j,l),t(e,q,l),t(e,J,l),t(e,K,l),t(e,U,l),t(e,D,l),p(f,e,l),t(e,P,l),t(e,T,l),t(e,O,l),t(e,g,l),t(e,ee,l),p(C,e,l),t(e,le,l),t(e,Z,l),t(e,se,l),p(W,e,l),t(e,te,l),t(e,_,l),t(e,ae,l),p(I,e,l),t(e,ne,l),t(e,R,l),t(e,oe,l),p(G,e,l),t(e,ie,l),t(e,v,l),t(e,re,l),p(k,e,l),t(e,ce,l),t(e,V,l),t(e,Me,l),p(X,e,l),t(e,pe,l),t(e,B,l),t(e,de,l),p(Y,e,l),t(e,me,l),t(e,N,l),t(e,ye,l),p(A,e,l),t(e,he,l),t(e,H,l),t(e,ue,l),p(E,e,l),t(e,we,l),t(e,F,l),t(e,be,l),t(e,$,l),je=!0},p:Ne,i(e){je||(d(w.$$.fragment,e),d(b.$$.fragment,e),d(f.$$.fragment,e),d(C.$$.fragment,e),d(W.$$.fragment,e),d(I.$$.fragment,e),d(G.$$.fragment,e),d(k.$$.fragment,e),d(X.$$.fragment,e),d(Y.$$.fragment,e),d(A.$$.fragment,e),d(E.$$.fragment,e),je=!0)},o(e){m(w.$$.fragment,e),m(b.$$.fragment,e),m(f.$$.fragment,e),m(C.$$.fragment,e),m(W.$$.fragment,e),m(I.$$.fragment,e),m(G.$$.fragment,e),m(k.$$.fragment,e),m(X.$$.fragment,e),m(Y.$$.fragment,e),m(A.$$.fragment,e),m(E.$$.fragment,e),je=!1},d(e){e&&(s(x),s(z),s(Q),s(S),s(L),s(j),s(q),s(J),s(K),s(U),s(D),s(P),s(T),s(O),s(g),s(ee),s(le),s(Z),s(se),s(te),s(_),s(ae),s(ne),s(R),s(oe),s(ie),s(v),s(re),s(ce),s(V),s(Me),s(pe),s(B),s(de),s(me),s(N),s(ye),s(he),s(H),s(ue),s(we),s(F),s(be),s($)),s(u),y(w,e),y(b,e),y(f,e),y(C,e),y(W,e),y(I,e),y(G,e),y(k,e),y(X,e),y(Y,e),y(A,e),y(E,e)}}}const Se='{"title":"Knowledge Distillation for Computer Vision","local":"knowledge-distillation-for-computer-vision","sections":[],"depth":1}';function Le(Je){return Ae(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class el extends He{constructor(u){super(),Ee(this,u,Le,Qe,Ye,{})}}export{el as component};
