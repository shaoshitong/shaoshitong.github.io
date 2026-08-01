# Homepage Transparency and Seed Copy Design

## Goal

Make the anime video background visibly contribute to the homepage aesthetic while preserving comfortable reading, and update the research introduction to reflect Shitong Shao's current work at ByteDance Seed.

## Scope

- Update only the English and Chinese homepage presentation and introduction copy.
- Do not change the video asset, profile illustration, publication data, navigation, or page structure.

## Visual Design

- Change the homepage content container from approximately 91% opaque to 65% opaque on desktop.
- Preserve the existing dark surface color, border, rounded corners, and shadow.
- Apply a `3px` backdrop blur to soften moving detail beneath the content without hiding the animation.
- In dark mode, apply a restrained `0 1px 2px rgba(0, 0, 0, 0.35)` text shadow to homepage prose and headings. Do not apply a text shadow in light mode.
- Use a 74% opaque surface below the existing `575px` breakpoint because the content column covers more of the video and text wraps more frequently.
- Keep the existing reduced-motion poster fallback.

## English Copy

Replace the second introductory paragraph with:

> My work spans the full path from method design to deployment. At First-Intelligence and Hedra, I contributed to real-world video-generation products, including HYVideo-1.5 and Character-C3. I am currently a Research Intern at ByteDance Seed, where I work on GAN design and distillation for image generation models.

## Chinese Copy

Use the corresponding natural Chinese wording:

> 我的研究覆盖从方法设计到实际部署的完整链路。我曾在 First-Intelligence 和 Hedra 参与 HYVideo-1.5、Character-C3 等视频生成系统，目前在字节跳动 Seed 实习，研究面向图像生成模型的 GAN 架构设计与蒸馏。

## Verification

- Build the Jekyll site through the repository's deployment workflow.
- Confirm both homepages contain the new Seed wording.
- Confirm the deployed CSS contains the 65% desktop and 74% mobile surface opacity values and `backdrop-filter: blur(3px)`.
- Confirm computed styles apply `text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35)` in dark mode and `text-shadow: none` in light mode.
- Check that the video background and reduced-motion fallback remain intact.
- In both light and dark modes, visually inspect the homepage at a representative desktop width of `1440px` and mobile width of `390px`, pausing on both relatively bright and dark video frames. Headings, body copy, links, and publication metadata must remain comfortably readable without visible blending into the background.
