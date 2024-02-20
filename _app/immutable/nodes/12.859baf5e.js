import{s as z,n as G,o as V}from"../chunks/scheduler.9bc65507.js";import{S as q,i as Q,g as f,s as n,r as R,A as j,h as d,f as o,c as r,j as M,u as E,x as A,k as x,y as $,a,v as D,d as P,t as L,w as I}from"../chunks/index.707bf1b6.js";import{H as B}from"../chunks/Heading.342b1fa6.js";function U(H){let l,p,m,_,i,w,s,O="This page regroups resources around 🤗 Transformers developed by the community.",T,g,y,h,S='<thead><tr><th align="left">Resource</th> <th align="left">Description</th> <th align="right">Author</th></tr></thead> <tbody><tr><td align="left"><a href="https://www.darigovresearch.com/huggingface-transformers-glossary-flashcards" rel="nofollow">Hugging Face Transformers Glossary Flashcards</a></td> <td align="left">A set of flashcards based on the <a href="glossary">Transformers Docs Glossary</a> that has been put into a form which can be easily learned/revised using <a href="https://apps.ankiweb.net/" rel="nofollow">Anki</a> an open source, cross platform app specifically designed for long term knowledge retention. See this <a href="https://www.youtube.com/watch?v=Dji_h7PILrw" rel="nofollow">Introductory video on how to use the flashcards</a>.</td> <td align="right"><a href="https://www.darigovresearch.com/" rel="nofollow">Darigov Research</a></td></tr></tbody>',v,c,k,b,N='<thead><tr><th align="left">Notebook</th> <th align="left">Description</th> <th align="left">Author</th> <th align="right"></th></tr></thead> <tbody><tr><td align="left"><a href="https://github.com/AlekseyKorshuk/huggingartists" rel="nofollow">Fine-tune a pre-trained Transformer to generate lyrics</a></td> <td align="left">How to generate lyrics in the style of your favorite artist by fine-tuning a GPT-2 model</td> <td align="left"><a href="https://github.com/AlekseyKorshuk" rel="nofollow">Aleksey Korshuk</a></td> <td align="right"><a href="https://colab.research.google.com/github/AlekseyKorshuk/huggingartists/blob/master/huggingartists-demo.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/snapthat/TF-T5-text-to-text" rel="nofollow">Train T5 in Tensorflow 2</a></td> <td align="left">How to train T5 for any task using Tensorflow 2. This notebook demonstrates a Question &amp; Answer task implemented in Tensorflow 2 using SQUAD</td> <td align="left"><a href="https://github.com/HarrisDePerceptron" rel="nofollow">Muhammad Harris</a></td> <td align="right"><a href="https://colab.research.google.com/github/snapthat/TF-T5-text-to-text/blob/master/snapthatT5/notebooks/TF-T5-Datasets%20Training.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/patil-suraj/exploring-T5/blob/master/T5_on_TPU.ipynb" rel="nofollow">Train T5 on TPU</a></td> <td align="left">How to train T5 on SQUAD with Transformers and Nlp</td> <td align="left"><a href="https://github.com/patil-suraj" rel="nofollow">Suraj Patil</a></td> <td align="right"><a href="https://colab.research.google.com/github/patil-suraj/exploring-T5/blob/master/T5_on_TPU.ipynb#scrollTo=QLGiFCDqvuil" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/patil-suraj/exploring-T5/blob/master/t5_fine_tuning.ipynb" rel="nofollow">Fine-tune T5 for Classification and Multiple Choice</a></td> <td align="left">How to fine-tune T5 for classification and multiple choice tasks using a text-to-text format with PyTorch Lightning</td> <td align="left"><a href="https://github.com/patil-suraj" rel="nofollow">Suraj Patil</a></td> <td align="right"><a href="https://colab.research.google.com/github/patil-suraj/exploring-T5/blob/master/t5_fine_tuning.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/ncoop57/i-am-a-nerd/blob/master/_notebooks/2020-05-12-chatbot-part-1.ipynb" rel="nofollow">Fine-tune DialoGPT on New Datasets and Languages</a></td> <td align="left">How to fine-tune the DialoGPT model on a new dataset for open-dialog conversational chatbots</td> <td align="left"><a href="https://github.com/ncoop57" rel="nofollow">Nathan Cooper</a></td> <td align="right"><a href="https://colab.research.google.com/github/ncoop57/i-am-a-nerd/blob/master/_notebooks/2020-05-12-chatbot-part-1.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/patrickvonplaten/notebooks/blob/master/PyTorch_Reformer.ipynb" rel="nofollow">Long Sequence Modeling with Reformer</a></td> <td align="left">How to train on sequences as long as 500,000 tokens with Reformer</td> <td align="left"><a href="https://github.com/patrickvonplaten" rel="nofollow">Patrick von Platen</a></td> <td align="right"><a href="https://colab.research.google.com/github/patrickvonplaten/notebooks/blob/master/PyTorch_Reformer.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/ohmeow/ohmeow_website/blob/master/posts/2021-05-25-mbart-sequence-classification-with-blurr.ipynb" rel="nofollow">Fine-tune BART for Summarization</a></td> <td align="left">How to fine-tune BART for summarization with fastai using blurr</td> <td align="left"><a href="https://ohmeow.com/" rel="nofollow">Wayde Gilliam</a></td> <td align="right"><a href="https://colab.research.google.com/github/ohmeow/ohmeow_website/blob/master/posts/2021-05-25-mbart-sequence-classification-with-blurr.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://colab.research.google.com/github/borisdayma/huggingtweets/blob/master/huggingtweets-demo.ipynb" rel="nofollow">Fine-tune a pre-trained Transformer on anyone’s tweets</a></td> <td align="left">How to generate tweets in the style of your favorite Twitter account by fine-tuning a GPT-2 model</td> <td align="left"><a href="https://github.com/borisdayma" rel="nofollow">Boris Dayma</a></td> <td align="right"><a href="https://colab.research.google.com/github/borisdayma/huggingtweets/blob/master/huggingtweets-demo.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://colab.research.google.com/github/wandb/examples/blob/master/colabs/huggingface/Optimize_Hugging_Face_models_with_Weights_%26_Biases.ipynb" rel="nofollow">Optimize 🤗 Hugging Face models with Weights &amp; Biases</a></td> <td align="left">A complete tutorial showcasing W&amp;B integration with Hugging Face</td> <td align="left"><a href="https://github.com/borisdayma" rel="nofollow">Boris Dayma</a></td> <td align="right"><a href="https://colab.research.google.com/github/wandb/examples/blob/master/colabs/huggingface/Optimize_Hugging_Face_models_with_Weights_%26_Biases.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/allenai/longformer/blob/master/scripts/convert_model_to_long.ipynb" rel="nofollow">Pretrain Longformer</a></td> <td align="left">How to build a “long” version of existing pretrained models</td> <td align="left"><a href="https://beltagy.net" rel="nofollow">Iz Beltagy</a></td> <td align="right"><a href="https://colab.research.google.com/github/allenai/longformer/blob/master/scripts/convert_model_to_long.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/patil-suraj/Notebooks/blob/master/longformer_qa_training.ipynb" rel="nofollow">Fine-tune Longformer for QA</a></td> <td align="left">How to fine-tune longformer model for QA task</td> <td align="left"><a href="https://github.com/patil-suraj" rel="nofollow">Suraj Patil</a></td> <td align="right"><a href="https://colab.research.google.com/github/patil-suraj/Notebooks/blob/master/longformer_qa_training.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/patrickvonplaten/notebooks/blob/master/How_to_evaluate_Longformer_on_TriviaQA_using_NLP.ipynb" rel="nofollow">Evaluate Model with 🤗nlp</a></td> <td align="left">How to evaluate longformer on TriviaQA with <code>nlp</code></td> <td align="left"><a href="https://github.com/patrickvonplaten" rel="nofollow">Patrick von Platen</a></td> <td align="right"><a href="https://colab.research.google.com/drive/1m7eTGlPmLRgoPkkA7rkhQdZ9ydpmsdLE?usp=sharing" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/enzoampil/t5-intro/blob/master/t5_qa_training_pytorch_span_extraction.ipynb" rel="nofollow">Fine-tune T5 for Sentiment Span Extraction</a></td> <td align="left">How to fine-tune T5 for sentiment span extraction using a text-to-text format with PyTorch Lightning</td> <td align="left"><a href="https://github.com/enzoampil" rel="nofollow">Lorenzo Ampil</a></td> <td align="right"><a href="https://colab.research.google.com/github/enzoampil/t5-intro/blob/master/t5_qa_training_pytorch_span_extraction.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/abhimishra91/transformers-tutorials/blob/master/transformers_multiclass_classification.ipynb" rel="nofollow">Fine-tune DistilBert for Multiclass Classification</a></td> <td align="left">How to fine-tune DistilBert for multiclass classification with PyTorch</td> <td align="left"><a href="https://github.com/abhimishra91" rel="nofollow">Abhishek Kumar Mishra</a></td> <td align="right"><a href="https://colab.research.google.com/github/abhimishra91/transformers-tutorials/blob/master/transformers_multiclass_classification.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/abhimishra91/transformers-tutorials/blob/master/transformers_multi_label_classification.ipynb" rel="nofollow">Fine-tune BERT for Multi-label Classification</a></td> <td align="left">How to fine-tune BERT for multi-label classification using PyTorch</td> <td align="left"><a href="https://github.com/abhimishra91" rel="nofollow">Abhishek Kumar Mishra</a></td> <td align="right"><a href="https://colab.research.google.com/github/abhimishra91/transformers-tutorials/blob/master/transformers_multi_label_classification.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/abhimishra91/transformers-tutorials/blob/master/transformers_summarization_wandb.ipynb" rel="nofollow">Fine-tune T5 for Summarization</a></td> <td align="left">How to fine-tune T5 for summarization in PyTorch and track experiments with WandB</td> <td align="left"><a href="https://github.com/abhimishra91" rel="nofollow">Abhishek Kumar Mishra</a></td> <td align="right"><a href="https://colab.research.google.com/github/abhimishra91/transformers-tutorials/blob/master/transformers_summarization_wandb.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/ELS-RD/transformers-notebook/blob/master/Divide_Hugging_Face_Transformers_training_time_by_2_or_more.ipynb" rel="nofollow">Speed up Fine-Tuning in Transformers with Dynamic Padding / Bucketing</a></td> <td align="left">How to speed up fine-tuning by a factor of 2 using dynamic padding / bucketing</td> <td align="left"><a href="https://github.com/pommedeterresautee" rel="nofollow">Michael Benesty</a></td> <td align="right"><a href="https://colab.research.google.com/drive/1CBfRU1zbfu7-ijiOqAAQUA-RJaxfcJoO?usp=sharing" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/patrickvonplaten/notebooks/blob/master/Reformer_For_Masked_LM.ipynb" rel="nofollow">Pretrain Reformer for Masked Language Modeling</a></td> <td align="left">How to train a Reformer model with bi-directional self-attention layers</td> <td align="left"><a href="https://github.com/patrickvonplaten" rel="nofollow">Patrick von Platen</a></td> <td align="right"><a href="https://colab.research.google.com/drive/1tzzh0i8PgDQGV3SMFUGxM7_gGae3K-uW?usp=sharing" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/lordtt13/word-embeddings/blob/master/COVID-19%20Research%20Data/COVID-SciBERT.ipynb" rel="nofollow">Expand and Fine Tune Sci-BERT</a></td> <td align="left">How to increase vocabulary of a pretrained SciBERT model from AllenAI on the CORD dataset and pipeline it.</td> <td align="left"><a href="https://github.com/lordtt13" rel="nofollow">Tanmay Thakur</a></td> <td align="right"><a href="https://colab.research.google.com/drive/1rqAR40goxbAfez1xvF3hBJphSCsvXmh8" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/lordtt13/transformers-experiments/blob/master/Custom%20Tasks/fine-tune-blenderbot_small-for-summarization.ipynb" rel="nofollow">Fine Tune BlenderBotSmall for Summarization using the Trainer API</a></td> <td align="left">How to fine-tune BlenderBotSmall for summarization on a custom dataset, using the Trainer API.</td> <td align="left"><a href="https://github.com/lordtt13" rel="nofollow">Tanmay Thakur</a></td> <td align="right"><a href="https://colab.research.google.com/drive/19Wmupuls7mykSGyRN_Qo6lPQhgp56ymq?usp=sharing" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/elsanns/xai-nlp-notebooks/blob/master/electra_fine_tune_interpret_captum_ig.ipynb" rel="nofollow">Fine-tune Electra and interpret with Integrated Gradients</a></td> <td align="left">How to fine-tune Electra for sentiment analysis and interpret predictions with Captum Integrated Gradients</td> <td align="left"><a href="https://elsanns.github.io" rel="nofollow">Eliza Szczechla</a></td> <td align="right"><a href="https://colab.research.google.com/github/elsanns/xai-nlp-notebooks/blob/master/electra_fine_tune_interpret_captum_ig.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/philschmid/fine-tune-GPT-2/blob/master/Fine_tune_a_non_English_GPT_2_Model_with_Huggingface.ipynb" rel="nofollow">fine-tune a non-English GPT-2 Model with Trainer class</a></td> <td align="left">How to fine-tune a non-English GPT-2 Model with Trainer class</td> <td align="left"><a href="https://www.philschmid.de" rel="nofollow">Philipp Schmid</a></td> <td align="right"><a href="https://colab.research.google.com/github/philschmid/fine-tune-GPT-2/blob/master/Fine_tune_a_non_English_GPT_2_Model_with_Huggingface.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/DhavalTaunk08/Transformers_scripts/blob/master/Transformers_multilabel_distilbert.ipynb" rel="nofollow">Fine-tune a DistilBERT Model for Multi Label Classification task</a></td> <td align="left">How to fine-tune a DistilBERT Model for Multi Label Classification task</td> <td align="left"><a href="https://github.com/DhavalTaunk08" rel="nofollow">Dhaval Taunk</a></td> <td align="right"><a href="https://colab.research.google.com/github/DhavalTaunk08/Transformers_scripts/blob/master/Transformers_multilabel_distilbert.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/NadirEM/nlp-notebooks/blob/master/Fine_tune_ALBERT_sentence_pair_classification.ipynb" rel="nofollow">Fine-tune ALBERT for sentence-pair classification</a></td> <td align="left">How to fine-tune an ALBERT model or another BERT-based model for the sentence-pair classification task</td> <td align="left"><a href="https://github.com/NadirEM" rel="nofollow">Nadir El Manouzi</a></td> <td align="right"><a href="https://colab.research.google.com/github/NadirEM/nlp-notebooks/blob/master/Fine_tune_ALBERT_sentence_pair_classification.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/DhavalTaunk08/NLP_scripts/blob/master/sentiment_analysis_using_roberta.ipynb" rel="nofollow">Fine-tune Roberta for sentiment analysis</a></td> <td align="left">How to fine-tune a Roberta model for sentiment analysis</td> <td align="left"><a href="https://github.com/DhavalTaunk08" rel="nofollow">Dhaval Taunk</a></td> <td align="right"><a href="https://colab.research.google.com/github/DhavalTaunk08/NLP_scripts/blob/master/sentiment_analysis_using_roberta.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/flexudy-pipe/qugeev" rel="nofollow">Evaluating Question Generation Models</a></td> <td align="left">How accurate are the answers to questions generated by your seq2seq transformer model?</td> <td align="left"><a href="https://github.com/zolekode" rel="nofollow">Pascal Zoleko</a></td> <td align="right"><a href="https://colab.research.google.com/drive/1bpsSqCQU-iw_5nNoRm_crPq6FRuJthq_?usp=sharing" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/peterbayerle/huggingface_notebook/blob/main/distilbert_tf.ipynb" rel="nofollow">Classify text with DistilBERT and Tensorflow</a></td> <td align="left">How to fine-tune DistilBERT for text classification in TensorFlow</td> <td align="left"><a href="https://github.com/peterbayerle" rel="nofollow">Peter Bayerle</a></td> <td align="right"><a href="https://colab.research.google.com/github/peterbayerle/huggingface_notebook/blob/main/distilbert_tf.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/patrickvonplaten/notebooks/blob/master/BERT2BERT_for_CNN_Dailymail.ipynb" rel="nofollow">Leverage BERT for Encoder-Decoder Summarization on CNN/Dailymail</a></td> <td align="left">How to warm-start a <em>EncoderDecoderModel</em> with a <em>google-bert/bert-base-uncased</em> checkpoint for summarization on CNN/Dailymail</td> <td align="left"><a href="https://github.com/patrickvonplaten" rel="nofollow">Patrick von Platen</a></td> <td align="right"><a href="https://colab.research.google.com/github/patrickvonplaten/notebooks/blob/master/BERT2BERT_for_CNN_Dailymail.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/patrickvonplaten/notebooks/blob/master/RoBERTaShared_for_BBC_XSum.ipynb" rel="nofollow">Leverage RoBERTa for Encoder-Decoder Summarization on BBC XSum</a></td> <td align="left">How to warm-start a shared <em>EncoderDecoderModel</em> with a <em>FacebookAI/roberta-base</em> checkpoint for summarization on BBC/XSum</td> <td align="left"><a href="https://github.com/patrickvonplaten" rel="nofollow">Patrick von Platen</a></td> <td align="right"><a href="https://colab.research.google.com/github/patrickvonplaten/notebooks/blob/master/RoBERTaShared_for_BBC_XSum.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/NielsRogge/Transformers-Tutorials/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb" rel="nofollow">Fine-tune TAPAS on Sequential Question Answering (SQA)</a></td> <td align="left">How to fine-tune <em>TapasForQuestionAnswering</em> with a <em>tapas-base</em> checkpoint on the Sequential Question Answering (SQA) dataset</td> <td align="left"><a href="https://github.com/nielsrogge" rel="nofollow">Niels Rogge</a></td> <td align="right"><a href="https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/NielsRogge/Transformers-Tutorials/blob/master/TAPAS/Evaluating_TAPAS_on_the_Tabfact_test_set.ipynb" rel="nofollow">Evaluate TAPAS on Table Fact Checking (TabFact)</a></td> <td align="left">How to evaluate a fine-tuned <em>TapasForSequenceClassification</em> with a <em>tapas-base-finetuned-tabfact</em> checkpoint using a combination of the 🤗 datasets and 🤗 transformers libraries</td> <td align="left"><a href="https://github.com/nielsrogge" rel="nofollow">Niels Rogge</a></td> <td align="right"><a href="https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/TAPAS/Evaluating_TAPAS_on_the_Tabfact_test_set.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://colab.research.google.com/github/vasudevgupta7/huggingface-tutorials/blob/main/translation_training.ipynb" rel="nofollow">Fine-tuning mBART for translation</a></td> <td align="left">How to fine-tune mBART using Seq2SeqTrainer for Hindi to English translation</td> <td align="left"><a href="https://github.com/vasudevgupta7" rel="nofollow">Vasudev Gupta</a></td> <td align="right"><a href="https://colab.research.google.com/github/vasudevgupta7/huggingface-tutorials/blob/main/translation_training.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/NielsRogge/Transformers-Tutorials/blob/master/LayoutLM/Fine_tuning_LayoutLMForTokenClassification_on_FUNSD.ipynb" rel="nofollow">Fine-tune LayoutLM on FUNSD (a form understanding dataset)</a></td> <td align="left">How to fine-tune <em>LayoutLMForTokenClassification</em> on the FUNSD dataset for information extraction from scanned documents</td> <td align="left"><a href="https://github.com/nielsrogge" rel="nofollow">Niels Rogge</a></td> <td align="right"><a href="https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/LayoutLM/Fine_tuning_LayoutLMForTokenClassification_on_FUNSD.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://colab.research.google.com/github/tripathiaakash/DistilGPT2-Tutorial/blob/main/distilgpt2_fine_tuning.ipynb" rel="nofollow">Fine-Tune DistilGPT2 and Generate Text</a></td> <td align="left">How to fine-tune DistilGPT2 and generate text</td> <td align="left"><a href="https://github.com/tripathiaakash" rel="nofollow">Aakash Tripathi</a></td> <td align="right"><a href="https://colab.research.google.com/github/tripathiaakash/DistilGPT2-Tutorial/blob/main/distilgpt2_fine_tuning.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/patrickvonplaten/notebooks/blob/master/Fine_tune_Longformer_Encoder_Decoder_(LED)_for_Summarization_on_pubmed.ipynb" rel="nofollow">Fine-Tune LED on up to 8K tokens</a></td> <td align="left">How to fine-tune LED on pubmed for long-range summarization</td> <td align="left"><a href="https://github.com/patrickvonplaten" rel="nofollow">Patrick von Platen</a></td> <td align="right"><a href="https://colab.research.google.com/github/patrickvonplaten/notebooks/blob/master/Fine_tune_Longformer_Encoder_Decoder_(LED)_for_Summarization_on_pubmed.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/patrickvonplaten/notebooks/blob/master/LED_on_Arxiv.ipynb" rel="nofollow">Evaluate LED on Arxiv</a></td> <td align="left">How to effectively evaluate LED on long-range summarization</td> <td align="left"><a href="https://github.com/patrickvonplaten" rel="nofollow">Patrick von Platen</a></td> <td align="right"><a href="https://colab.research.google.com/github/patrickvonplaten/notebooks/blob/master/LED_on_Arxiv.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/NielsRogge/Transformers-Tutorials/blob/master/LayoutLM/Fine_tuning_LayoutLMForSequenceClassification_on_RVL_CDIP.ipynb" rel="nofollow">Fine-tune LayoutLM on RVL-CDIP (a document image classification dataset)</a></td> <td align="left">How to fine-tune <em>LayoutLMForSequenceClassification</em> on the RVL-CDIP dataset for scanned document classification</td> <td align="left"><a href="https://github.com/nielsrogge" rel="nofollow">Niels Rogge</a></td> <td align="right"><a href="https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/LayoutLM/Fine_tuning_LayoutLMForSequenceClassification_on_RVL_CDIP.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/voidful/huggingface_notebook/blob/main/xlsr_gpt.ipynb" rel="nofollow">Wav2Vec2 CTC decoding with GPT2 adjustment</a></td> <td align="left">How to decode CTC sequence with language model adjustment</td> <td align="left"><a href="https://github.com/voidful" rel="nofollow">Eric Lam</a></td> <td align="right"><a href="https://colab.research.google.com/drive/1e_z5jQHYbO2YKEaUgzb1ww1WwiAyydAj?usp=sharing" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/elsanns/xai-nlp-notebooks/blob/master/fine_tune_bart_summarization_two_langs.ipynb" rel="nofollow">Fine-tune BART for summarization in two languages with Trainer class</a></td> <td align="left">How to fine-tune BART for summarization in two languages with Trainer class</td> <td align="left"><a href="https://github.com/elsanns" rel="nofollow">Eliza Szczechla</a></td> <td align="right"><a href="https://colab.research.google.com/github/elsanns/xai-nlp-notebooks/blob/master/fine_tune_bart_summarization_two_langs.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/patrickvonplaten/notebooks/blob/master/Evaluating_Big_Bird_on_TriviaQA.ipynb" rel="nofollow">Evaluate Big Bird on Trivia QA</a></td> <td align="left">How to evaluate BigBird on long document question answering on Trivia QA</td> <td align="left"><a href="https://github.com/patrickvonplaten" rel="nofollow">Patrick von Platen</a></td> <td align="right"><a href="https://colab.research.google.com/github/patrickvonplaten/notebooks/blob/master/Evaluating_Big_Bird_on_TriviaQA.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/Muennighoff/ytclipcc/blob/main/wav2vec_youtube_captions.ipynb" rel="nofollow">Create video captions using Wav2Vec2</a></td> <td align="left">How to create YouTube captions from any video by transcribing the audio with Wav2Vec</td> <td align="left"><a href="https://github.com/Muennighoff" rel="nofollow">Niklas Muennighoff</a></td> <td align="right"><a href="https://colab.research.google.com/github/Muennighoff/ytclipcc/blob/main/wav2vec_youtube_captions.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/NielsRogge/Transformers-Tutorials/blob/master/VisionTransformer/Fine_tuning_the_Vision_Transformer_on_CIFAR_10_with_PyTorch_Lightning.ipynb" rel="nofollow">Fine-tune the Vision Transformer on CIFAR-10 using PyTorch Lightning</a></td> <td align="left">How to fine-tune the Vision Transformer (ViT) on CIFAR-10 using HuggingFace Transformers, Datasets and PyTorch Lightning</td> <td align="left"><a href="https://github.com/nielsrogge" rel="nofollow">Niels Rogge</a></td> <td align="right"><a href="https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/VisionTransformer/Fine_tuning_the_Vision_Transformer_on_CIFAR_10_with_PyTorch_Lightning.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/NielsRogge/Transformers-Tutorials/blob/master/VisionTransformer/Fine_tuning_the_Vision_Transformer_on_CIFAR_10_with_the_%F0%9F%A4%97_Trainer.ipynb" rel="nofollow">Fine-tune the Vision Transformer on CIFAR-10 using the 🤗 Trainer</a></td> <td align="left">How to fine-tune the Vision Transformer (ViT) on CIFAR-10 using HuggingFace Transformers, Datasets and the 🤗 Trainer</td> <td align="left"><a href="https://github.com/nielsrogge" rel="nofollow">Niels Rogge</a></td> <td align="right"><a href="https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/VisionTransformer/Fine_tuning_the_Vision_Transformer_on_CIFAR_10_with_the_%F0%9F%A4%97_Trainer.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/studio-ousia/luke/blob/master/notebooks/huggingface_open_entity.ipynb" rel="nofollow">Evaluate LUKE on Open Entity, an entity typing dataset</a></td> <td align="left">How to evaluate <em>LukeForEntityClassification</em> on the Open Entity dataset</td> <td align="left"><a href="https://github.com/ikuyamada" rel="nofollow">Ikuya Yamada</a></td> <td align="right"><a href="https://colab.research.google.com/github/studio-ousia/luke/blob/master/notebooks/huggingface_open_entity.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/studio-ousia/luke/blob/master/notebooks/huggingface_tacred.ipynb" rel="nofollow">Evaluate LUKE on TACRED, a relation extraction dataset</a></td> <td align="left">How to evaluate <em>LukeForEntityPairClassification</em> on the TACRED dataset</td> <td align="left"><a href="https://github.com/ikuyamada" rel="nofollow">Ikuya Yamada</a></td> <td align="right"><a href="https://colab.research.google.com/github/studio-ousia/luke/blob/master/notebooks/huggingface_tacred.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/studio-ousia/luke/blob/master/notebooks/huggingface_conll_2003.ipynb" rel="nofollow">Evaluate LUKE on CoNLL-2003, an important NER benchmark</a></td> <td align="left">How to evaluate <em>LukeForEntitySpanClassification</em> on the CoNLL-2003 dataset</td> <td align="left"><a href="https://github.com/ikuyamada" rel="nofollow">Ikuya Yamada</a></td> <td align="right"><a href="https://colab.research.google.com/github/studio-ousia/luke/blob/master/notebooks/huggingface_conll_2003.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/vasudevgupta7/bigbird/blob/main/notebooks/bigbird_pegasus_evaluation.ipynb" rel="nofollow">Evaluate BigBird-Pegasus on PubMed dataset</a></td> <td align="left">How to evaluate <em>BigBirdPegasusForConditionalGeneration</em> on PubMed dataset</td> <td align="left"><a href="https://github.com/vasudevgupta7" rel="nofollow">Vasudev Gupta</a></td> <td align="right"><a href="https://colab.research.google.com/github/vasudevgupta7/bigbird/blob/main/notebooks/bigbird_pegasus_evaluation.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github/m3hrdadfi/soxan/blob/main/notebooks/Emotion_recognition_in_Greek_speech_using_Wav2Vec2.ipynb" rel="nofollow">Speech Emotion Classification with Wav2Vec2</a></td> <td align="left">How to leverage a pretrained Wav2Vec2 model for Emotion Classification on the MEGA dataset</td> <td align="left"><a href="https://github.com/m3hrdadfi" rel="nofollow">Mehrdad Farahani</a></td> <td align="right"><a href="https://colab.research.google.com/github/m3hrdadfi/soxan/blob/main/notebooks/Emotion_recognition_in_Greek_speech_using_Wav2Vec2.ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/NielsRogge/Transformers-Tutorials/blob/master/DETR/DETR_minimal_example_(with_DetrFeatureExtractor).ipynb" rel="nofollow">Detect objects in an image with DETR</a></td> <td align="left">How to use a trained <em>DetrForObjectDetection</em> model to detect objects in an image and visualize attention</td> <td align="left"><a href="https://github.com/NielsRogge" rel="nofollow">Niels Rogge</a></td> <td align="right"><a href="https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/DETR/DETR_minimal_example_(with_DetrFeatureExtractor).ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/NielsRogge/Transformers-Tutorials/blob/master/DETR/Fine_tuning_DetrForObjectDetection_on_custom_dataset_(balloon).ipynb" rel="nofollow">Fine-tune DETR on a custom object detection dataset</a></td> <td align="left">How to fine-tune <em>DetrForObjectDetection</em> on a custom object detection dataset</td> <td align="left"><a href="https://github.com/NielsRogge" rel="nofollow">Niels Rogge</a></td> <td align="right"><a href="https://colab.research.google.com/github/NielsRogge/Transformers-Tutorials/blob/master/DETR/Fine_tuning_DetrForObjectDetection_on_custom_dataset_(balloon).ipynb" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr> <tr><td align="left"><a href="https://github.com/ToluClassics/Notebooks/blob/main/T5_Ner_Finetuning.ipynb" rel="nofollow">Finetune T5 for Named Entity Recognition</a></td> <td align="left">How to fine-tune <em>T5</em> on a Named Entity Recognition Task</td> <td align="left"><a href="https://github.com/ToluClassics" rel="nofollow">Ogundepo Odunayo</a></td> <td align="right"><a href="https://colab.research.google.com/drive/1obr78FY_cBmWY5ODViCmzdY6O1KB65Vc?usp=sharing" rel="nofollow"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a></td></tr></tbody>',C,u,F;return i=new B({props:{title:"Community",local:"community",headingTag:"h1"}}),g=new B({props:{title:"Community resources:",local:"community-resources",headingTag:"h2"}}),c=new B({props:{title:"Community notebooks:",local:"community-notebooks",headingTag:"h2"}}),{c(){l=f("meta"),p=n(),m=f("p"),_=n(),R(i.$$.fragment),w=n(),s=f("p"),s.textContent=O,T=n(),R(g.$$.fragment),y=n(),h=f("table"),h.innerHTML=S,v=n(),R(c.$$.fragment),k=n(),b=f("table"),b.innerHTML=N,C=n(),u=f("p"),this.h()},l(t){const e=j("svelte-u9bgzb",document.head);l=d(e,"META",{name:!0,content:!0}),e.forEach(o),p=r(t),m=d(t,"P",{}),M(m).forEach(o),_=r(t),E(i.$$.fragment,t),w=r(t),s=d(t,"P",{"data-svelte-h":!0}),A(s)!=="svelte-yr897k"&&(s.textContent=O),T=r(t),E(g.$$.fragment,t),y=r(t),h=d(t,"TABLE",{"data-svelte-h":!0}),A(h)!=="svelte-1hug07c"&&(h.innerHTML=S),v=r(t),E(c.$$.fragment,t),k=r(t),b=d(t,"TABLE",{"data-svelte-h":!0}),A(b)!=="svelte-i50k7e"&&(b.innerHTML=N),C=r(t),u=d(t,"P",{}),M(u).forEach(o),this.h()},h(){x(l,"name","hf:doc:metadata"),x(l,"content",W)},m(t,e){$(document.head,l),a(t,p,e),a(t,m,e),a(t,_,e),D(i,t,e),a(t,w,e),a(t,s,e),a(t,T,e),D(g,t,e),a(t,y,e),a(t,h,e),a(t,v,e),D(c,t,e),a(t,k,e),a(t,b,e),a(t,C,e),a(t,u,e),F=!0},p:G,i(t){F||(P(i.$$.fragment,t),P(g.$$.fragment,t),P(c.$$.fragment,t),F=!0)},o(t){L(i.$$.fragment,t),L(g.$$.fragment,t),L(c.$$.fragment,t),F=!1},d(t){t&&(o(p),o(m),o(_),o(w),o(s),o(T),o(y),o(h),o(v),o(k),o(b),o(C),o(u)),o(l),I(i,t),I(g,t),I(c,t)}}}const W='{"title":"Community","local":"community","sections":[{"title":"Community resources:","local":"community-resources","sections":[],"depth":2},{"title":"Community notebooks:","local":"community-notebooks","sections":[],"depth":2}],"depth":1}';function K(H){return V(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Z extends q{constructor(l){super(),Q(this,l,K,U,z,{})}}export{Z as component};