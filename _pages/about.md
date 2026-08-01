---
layout: about
title: about
permalink: /
subtitle: Generative AI Researcher · Ph.D. Student at HKUST(GZ)

profile:
  align: right
  image: shitong-shao-anime.png
  image_circular: false
  more_info: >
    <p>Hong Kong University of Science and Technology (Guangzhou)</p>
    <p>Guangzhou, China</p>

selected_papers: false
social: true

announcements:
  enabled: true
  scrollable: false
  limit: 5

latest_posts:
  enabled: false
---

<div class="anime-background" aria-hidden="true">
  <video autoplay muted loop playsinline preload="auto" poster="{{ '/assets/img/shitong-shao-anime.png' | relative_url }}">
    <source src="{{ '/assets/video/anime-background.mp4' | relative_url }}" type="video/mp4">
  </video>
  <div class="anime-background__overlay"></div>
</div>

I am **Shitong Shao (Sutton)**, a Ph.D. student in Data Science and Analytics at **HKUST(GZ)**, advised by Prof. Zeke Xie. My research focuses on efficient generative modeling, with an emphasis on video diffusion, model distillation, efficient sampling, and production-ready generation systems.

My work spans the full path from method design to deployment. At **First-Intelligence** and **Hedra**, I contributed to real-world video-generation products, including HYVideo-1.5 and Character-C3. I am currently a Research Intern at **ByteDance Seed**, where I work on GAN design and distillation for image generation models.

<div class="research-metric" aria-label="Google Scholar citations">
  <span class="research-metric__value">{{ site.citation_count }}</span>
  <span class="research-metric__label">Google Scholar citations</span>
</div>

<p class="language-link"><a href="{{ '/zh/' | relative_url }}">中文主页 →</a></p>

## Research {#research}

### Efficient generative modeling

I study video diffusion efficiency across step reduction, model compression, real-time inference, VAE acceleration, and sparse attention. Representative projects include **MagicDistillation**, **FastLightGen**, **AMD**, **PISA**, and **LIVEditor**.

### Sampling and generation quality

I explore how initial-noise design and sampling-trajectory optimization can improve generation quality while reducing inference cost. Representative works include **IV-Mixed Sampler**, **Golden Noise**, and **CoRe²**.

### Research-to-production translation

I turn research ideas into deployable video-generation systems, with experience across training, systems optimization, serving, and product integration.

## Selected publications

{% bibliography --query @*[selected=true]* %}

<p class="section-more"><a href="{{ '/publications/' | relative_url }}">View all 56 publications →</a></p>

## Experience {#experience}

**Research Intern · ByteDance Seed**<br>
_Apr. 22, 2026 – Present_<br>
Research on GAN distillation for efficient generative modeling.

**Research Scientist Intern · First-Intelligence**<br>
_Oct. 2025 – Apr. 1, 2026_<br>
Real-time generation and efficient deployment for HYVideo-1.5, including four-step video distillation and a 4.5×-accelerated VAE.

**Research Scientist Intern · Hedra**<br>
_Oct. 2024 – Jul. 2025_<br>
Built and productionized the distillation pipeline behind Character-C3 for few-step talking-video generation.

**Research Intern · MBZUAI, Zhiqiang Shen's Lab**<br>
_Jul. 2023 – Mar. 2024_<br>
Worked on large-scale dataset condensation and optimization, resulting in G-VBSM (CVPR Highlight) and EDC (NeurIPS).

**Research and Engineering Internships**<br>
Earlier roles at OPPO, Shanghai AI Laboratory, Beijing Institute of Technology, and Yiliu Technology covered dataset condensation, AI compilers, knowledge distillation, and model engineering.

<p class="section-more"><a href="{{ '/assets/pdf/Shitong_Shao_CV.pdf' | relative_url }}">Read the full CV →</a></p>
