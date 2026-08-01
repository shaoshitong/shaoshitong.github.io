---
layout: about
title: 中文
permalink: /zh/
nav: true
nav_order: 90
subtitle: 生成式人工智能研究者 · 香港科技大学（广州）博士生

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info: >
    <p>香港科技大学（广州）</p>
    <p>中国广州</p>

selected_papers: false
social: true
announcements:
  enabled: false
latest_posts:
  enabled: false
---

我是**邵士通（Sutton）**，香港科技大学（广州）数据科学与分析学域博士生，导师为 Zeke Xie 教授。我的研究聚焦高效生成建模，主要关注视频扩散模型、模型蒸馏、高效采样与可落地的生成系统。

我的工作覆盖从方法设计到产业部署的完整链路。近期研究与工程成果已应用于 **First-Intelligence** 和 **Hedra** 的真实视频生成产品，包括 HYVideo-1.5 与 Character-C3。

<div class="research-metric" aria-label="Google Scholar 引用次数">
  <span class="research-metric__value">{{ site.citation_count }}</span>
  <span class="research-metric__label">Google Scholar 引用</span>
</div>

<p class="language-link"><a href="{{ '/' | relative_url }}">English homepage →</a></p>

## 研究方向 {#research}

### 高效生成建模

我从采样步数、模型规模、实时推理、VAE 加速与稀疏注意力等多个维度研究视频扩散模型的效率。代表项目包括 **MagicDistillation、FastLightGen、AMD、PISA** 与 **LIVEditor**。

### 采样优化与生成质量

我研究初始噪声设计和采样轨迹优化如何在降低推理成本的同时提升生成质量，代表工作包括 **IV-Mixed Sampler、Golden Noise** 与 **CoRe²**。

### 从研究到产品

我致力于将研究方法转化为可部署的视频生成系统，在模型训练、系统优化、在线服务与产品集成方面具有完整实践经验。

## 精选论文

{% bibliography --query @*[selected=true]* %}

<p class="section-more"><a href="{{ '/zh/publications/' | relative_url }}">查看全部 56 篇论文 →</a></p>

## 研究与产业经历 {#experience}

**研究科学家实习生 · First-Intelligence**<br>
_2025 年 10 月至今_<br>
负责 HYVideo-1.5 的实时生成与高效部署研究，包括四步视频蒸馏和 4.5× 加速的 VAE。

**研究科学家实习生 · Hedra**<br>
_2024 年 10 月 – 2025 年 7 月_<br>
构建并产品化 Character-C3 的核心蒸馏流程，用于少步数说话视频生成。

**研究实习生 · MBZUAI，申志强研究组**<br>
_2023 年 7 月 – 2024 年 3 月_<br>
研究大规模数据浓缩与数据优化，成果包括 G-VBSM（CVPR Highlight）与 EDC（NeurIPS）。

**早期研究与工程实习**<br>
曾在 OPPO、上海人工智能实验室、北京理工大学与一流科技参与数据浓缩、AI 编译器、知识蒸馏与模型工程研究。

<p class="section-more"><a href="{{ '/assets/pdf/Shitong_Shao_CV.pdf' | relative_url }}">查看完整简历 →</a></p>
