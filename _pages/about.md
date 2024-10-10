---
permalink: /
title: "Shitong Shao (邵世通)"
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>
<!-- 
<span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span> -->

My research interest includes Efficient Computer Vision and Inference/Training Scaling Laws. My google scholar: <a href='https://scholar.google.com/citations?user=hmUOaNcAAAAJ'>google scholar citations <strong><span id='total_cit'>120+</span></strong></a>

# ⏩ Research Highlight

- Efficient Dataset Condensation: &nbsp;🎉🎉: [[Elucidated Dataset Condensation]](https://arxiv.org/abs/2404.13733) and [[G-VBSM]](https://arxiv.org/abs/2311.17950).
- Knowledge Distillation: &nbsp;🎉🎉: [[CCD]](https://openaccess.thecvf.com/content/ACCV2022/html/Li_What_Role_Does_Data_Augmentation_Play_in_Knowledge_Distillation_ACCV_2022_paper.html) and [[TST]](https://arxiv.org/abs/2212.05422).
- Diffusion-Related Work: &nbsp;🎉🎉: [[IV-mixed Sampler]](https://arxiv.org/abs/2410.04171),  [[Catch-up Distillation]](https://arxiv.org/abs/2305.10769) and [[DiffuseExpand]](https://arxiv.org/abs/2304.13416).


# 📝 Selected Publications

## Dataset Condensation

### Generalized Large-Scale Data Condensation via Various Backbone and Statistical Matching [[CVPR 2024 Highlight]](https://arxiv.org/abs/2311.17950) [[Code]](https://github.com/shaoshitong/G_VBSM_Dataset_Condensation)

**Shitong Shao**, Zeyuan Yin, Muxin Zhou, Xindong Zhang, Zhiqiang Shen

> **TL;DR**: We suggest that sufficient and various "local-match-global" matching are more precise and effective than a single one and has the ability to create a distilled dataset with richer information and better generalization.

### Self-supervised Dataset Distillation: A Good Compression Is All You Need [[Arxiv]](https://arxiv.org/abs/2404.07976) [[Code]](https://github.com/VILA-Lab/SRe2L/tree/main/SCDD)

Muxin Zhou, Zeyuan Yin, **Shitong Shao**, Zhiqiang Shen

> **TL;DR**: We consider addressing statistical-based matching through the new lens of model informativeness in compression on the original dataset pretraining.

### Elucidating the Design Space of Dataset Condensation [[NeurIPS 2024]](https://arxiv.org/abs/2404.13733) [[Code]](https://github.com/shaoshitong/EDC)

**Shitong Shao**, Zikai Zhou, Huanran Chen, and Zhiqiang Shen

> **TL;DR**: We propose a comprehensive design framework that includes specific, effective strategies. These strategies establish a benchmark for both small and large-scale dataset condensation.


## Knowledge Condensation

### What Role Does Data Augmentation Play in Knowledge Distillation? [[ACCV 2022 oral]](https://openaccess.thecvf.com/content/ACCV2022/html/Li_What_Role_Does_Data_Augmentation_Play_in_Knowledge_Distillation_ACCV_2022_paper.html) [[Code]](https://github.com/shaoshitong/CCD)

Wei Li, **Shitong Shao**, Weiyan Liu, Ziming Qiu, Zhihao Zhu, Wei Huan (_The first-author is my supervisior_)

> **TL;DR**: The worth of data augmentation has always been overlooked by researchers in knowledge distillation, and no work analyzes its role in particular detail. To fix this gap, we analyze the effect of data augmentation on knowledge distillation from a multi-sided perspective.

### Bootstrap Generalization Ability from Loss Landscape Perspective [[ECCV 2022 workshop]](https://link.springer.com/chapter/10.1007/978-3-031-25075-0_34) [[Code]](https://github.com/shaoshitong/NICO) 

<span class='show_paper_citations' data='hmUOaNcAAAAJ:IjCSPb-OGe4C'></span>

Huanran Chen, **Shitong Shao**, Ziyi Wang, Zirui Shang, Jin Chen, Xiaofeng Ji and Xinxiao Wu

> **TL;DR**: We bootstrap the generalization ability of the deep learning model from the loss landscape perspective in four aspects, including backbone, regularization, training paradigm, and learning rate.

### Multi-perspective analysis on data augmentation in knowledge distillation [[Neurocomputing]](https://www.sciencedirect.com/science/article/abs/pii/S092523122400287X) [[Code]](https://github.com/shaoshitong/CCD)

Wei Li, **Shitong Shao**, Ziming Qiu, Aiguo Song (_The first-author is my supervisior_)

> **TL;DR**: Expansion of ACCV oral.

### Hybrid knowledge distillation from intermediate layers for efficient Single Image Super-Resolution [[Neurocomputing]](https://www.sciencedirect.com/science/article/abs/pii/S0925231223007154)

Jiao Xie, Linrui Gong, **Shitong Shao**, Shaohui Lin, Linkai Luo

> **TL;DR**: We propose a novel efficient SISR method via hybrid knowledge distillation from intermediate layers, termed HKDSR, which leverages the knowledge from frequency information into that RGB information.

### Teaching What You Should Teach: A Data-Based Distillation Method [[IJCAI2023 oral]](https://arxiv.org/abs/2212.05422) [[Code]](https://github.com/shaoshitong/TST)

**Shitong Shao**, Huanran Chen, Zhen Huang, Linrui Gong, Shuai Wang, Xinxiao Wu

> **TL;DR**: We introduce the "Teaching what you Should Teach" strategy into a knowledge distillation framework, and propose a data-based distillation method named "TST" that searches for desirable augmented samples to assist in distilling more efficiently and rationally.

### Precise Knowledge Transfer via Flow Matching [[Arxiv]](https://arxiv.org/abs/2402.02012)

**Shitong Shao**, Zhiqiang Shen, Linrui Gong, Huanran Chen and Xu Dai

> **TL;DR**: We propose a novel knowledge transfer framework that introduces continuous normalizing flows for progressive knowledge transformation and leverages multi-step sampling strategies to achieve precision knowledge transfer.

### Rethinking Centered Kernel Alignment in Knowledge Distillation [[IJCAI 2024 oral]](https://arxiv.org/abs/2401.11824)

Zikai Zhou, Yunhang Shen, **Shitong Shao**, Huanran Chen, Linrui Gong, Shaohui Lin

> **TL;DR**: This paper first provides a theoretical perspective to illustrate the effectiveness of CKA, which decouples CKA to the upper bound of Maximum Mean Discrepancy~(MMD) and a constant term.

### Auto-DAS: Automated Proxy Discovery for Training-free Distillation-aware Architecture Search [[ECCV]](https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/00676.pdf)

> **TL;DR**: This paper searches through evolutionary algorithms thereby determining the best matching function for knowledge distillation..

## Diffusion Model

### IV-Mixed Sampler: Leveraging Image Diffusion Models for Enhanced Video Synthesis [[Arxiv]](https://arxiv.org/abs/2410.04171) [[Code]](https://github.com/shaoshitong/IV-mixed-Sampler)

**Shitong Shao**, Zikai Zhou, Lichen Bai, Haoyi Xiong, Zeke Xie

> **TL;DR**: We propose IV-mixed Sampler, which leverages the strengths of image diffusion models (IDMs) to assist VDMs surpass their current capabilities.

### Expanding dataset for 2D medical image segmentation using diffusion models [[IJCAI 2023 workshop]](https://arxiv.org/abs/2304.13416) [[Code]](https://github.com/shaoshitong/DiffuseExpand).

**Shitong Shao**, Xiaohan Yuan, Zhen Huang, Ziming Qiu, Shuai Wang, Kevin Zhou

> **TL;DR**: We propose an approach called DiffuseExpand for expanding datasets for 2D medical image segmentation using DPM, which first samples a variety of masks from Gaussian noise to ensure the diversity, and then synthesizes images to ensure the alignment of images and masks.

### Catch-up distillation: You only need to train once for accelerating sampling [[Arxiv]](https://arxiv.org/abs/2305.10769) [[Code]](https://github.com/shaoshitong/Catch-Up-Distillation) 

<!-- <span class='show_paper_citations' data='hmUOaNcAAAAJ:ufrVoPGSRksC'>Citation</span> -->

**Shitong Shao**, Xu Dai, Shouyi Yin, Lujun Li, Huanran Chen, Yang Hu

> **TL;DR**: We propose the Catch-Up Distillation (CUD), which encourages the current moment output of the velocity estimation model ``catch up'' with its previous moment output. Specifically, CUD adjusts the original Ordinary Differential Equation training objective to align the current moment output with both the ground truth label and the previous moment output, utilizing Runge-Kutta-based multi-step alignment distillation for precise ODE estimation while preventing asynchronous updates.

### Your Diffusion Model is Secretly a Certifiably Robust Classifier [[NeurIPS 2024]](https://arxiv.org/abs/2402.02316) [[Code]](https://github.com/huanranchen/NoisedDiffusionClassifiers)

Huanran Chen, Yinpeng Dong, **Shitong Shao**, Zhongkai Hao, Xiao Yang, Hang Su, Jun Zhu

> **TL;DR**: We generalize the diffusion classifiers to classify Gaussian-corrupted data by deriving the evidence lower bounds (ELBOs) for these distributions, approximating the likelihood using the ELBO, and calculating classification probabilities via Bayes' theorem.

### Alignment of Diffusion Models: Fundamentals, Challenges, and Future [[Arxiv]](https://arxiv.org/abs/2409.07253) [[Code]](https://github.com/xie-lab-ml/awesome-alignment-of-diffusion-models)

Buhua Liu, **Shitong Shao**, Bao Li, Lichen Bai, Haoyi Xiong, James Kwok, Sumi Helal, Zeke Xie

> **TL;DR**: A survey of preference alignment in diffusion models.


# 📖 Educations

- *2024.09 - present*, Hong Kong University of Science and Technology (Guangzhou), PhD Student.
- *2021.09 - 2024.06*, Southeastern University, Master Student. 
- *2017.09 - 2021.06*, East China Normal University, Undergraduate Student.


# 💻 Internships

I have interned at Biren, PLCT, Oneflow, Shang Hai AI Lab and OPPO, including a year-long internship at Shang Hai AI Lab.

# 🔥 Links

Links to my friends and advisors.

- Advisors: [Zeke Xie](https://facultyprofiles.hkust-gz.edu.cn/faculty-personal-page/XIE-Zeke/zekexie), [Zhiqiang Shen](https://zhiqiangshen.com/) and [Xu Dai](https://scholar.google.com/citations?user=H_hso1AAAAAJ&hl=en).

- Friends: [Huanran Chen](https://huanranchen.github.io/), [Tian Ye](https://owen718.github.io/) and [Zikai Zhou](https://klayand.github.io/).