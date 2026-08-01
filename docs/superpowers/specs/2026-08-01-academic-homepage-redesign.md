# Shitong Shao Academic Homepage Redesign

## Objective

Build a polished bilingual academic homepage for Shitong Shao (Sutton), a Generative AI researcher and Ph.D. student at HKUST(GZ). The site should serve academic peers, hiring reviewers, and industry collaborators without presenting Shitong as a faculty member or lab leader.

The implementation will adopt the established [`al-folio`](https://github.com/alshedivat/al-folio) theme rather than inventing a new visual system. Customization should remain restrained so the site feels like an authentic researcher homepage, preserves stable typography, and remains maintainable as the upstream theme evolves.

## Success Criteria

- The site clearly identifies Shitong as a Ph.D. student and Generative AI researcher.
- English and Chinese versions provide equivalent information through a visible language switcher.
- The homepage highlights research direction, selected publications, recent news, and concise industry experience without becoming a full CV dump.
- A separate Publications page lists all verified papers and is generated from a single BibTeX source.
- The homepage displays `994+ Citations`, sourced from one configuration field.
- The supplied five-page CV is downloadable from prominent navigation and profile links.
- The site builds successfully on GitHub Pages and works on desktop and mobile in light and dark modes.
- Typography, spacing, and components stay within the al-folio design system, with only small theme overrides.

## Audience and Positioning

Primary audiences are:

1. Academic peers and hiring or program reviewers assessing Shitong's research record.
2. Industry researchers and collaborators interested in efficient video generation and production deployment.

The lead identity is:

> Shitong Shao (Sutton)  
> Generative AI Researcher · Ph.D. Student at HKUST(GZ)

Faculty-oriented language such as “principal investigator,” “our lab,” “students,” “teaching,” or recruitment calls will not be used unless later requested.

## Visual Direction

The visual foundation is al-folio's native responsive grid, typography scale, publication cards, navigation, and dark mode. Enhancements are deliberately limited:

- Use a restrained deep navy primary color and low-saturation teal accent.
- Use a soft warm-white light background while preserving accessible contrast.
- Rely on whitespace, type hierarchy, and real research imagery rather than gradients, glass effects, oversized slogans, or decorative cards.
- Use a real portrait in the introduction and real teaser images for selected papers.
- Present `994+ Citations` as a compact academic metric, not a marketing counter.
- Minimize borders, shadows, and rounded containers.
- Keep typography and spacing tokens shared across English and Chinese; provide Chinese-compatible fallback fonts to prevent glyph or line-height issues.
- Preserve al-folio attribution where required.

## Information Architecture

### Navigation

- About
- Research
- Publications
- Experience
- CV
- English / 中文 language switcher

About, Research, and Experience link to sections on the language-specific homepage. Publications and CV are separate routes or assets. The navigation collapses to al-folio's existing mobile menu. The language switch should map corresponding pages rather than returning users to the homepage.

### Homepage

1. **Introduction** — portrait, name, student/researcher identity, concise research summary, and primary links.
2. **Academic links and metric** — Google Scholar, GitHub, email, CV, and `994+ Citations`.
3. **Research highlights** — three concise themes:
   - Efficient generative modeling and video diffusion distillation
   - Sampling optimization and generation quality
   - Production-ready generative systems
4. **Selected publications** — approximately six representative works, prioritizing MagicDistillation, FastLightGen, HYVideo-1.5, G-VBSM, and other works verified from Scholar and the CV. Each item may show title, full author list, venue/year, teaser, and only the links that exist.
5. **News** — admissions, publications, releases, and internships from the latest two years; older entries collapse or move to an archive.
6. **Experience** — concise entries for First-Intelligence, Hedra, MBZUAI, and other verified roles, each limited to date, role, organization, and one outcome.

### Publications Page

- Lists all verified papers from a single BibTeX file.
- Groups papers by year using al-folio's native bibliography rendering.
- Supports native publication filters if they remain reliable in the selected al-folio release.
- Marks selected or highlighted papers without duplicating their bibliographic data.
- Shows only available PDF, project, code, video, or dataset links; it never renders empty actions.

### CV

The provided `xLeaF_Lab_CV_Template_Shitong.pdf` is stored as a downloadable static asset and linked from navigation and the introduction. Its full text is not duplicated on the homepage.

## Bilingual Content Model

English is the default language at root routes. Chinese pages live under the `/zh/` prefix. English and Chinese use separate content pages while sharing layouts, components, bibliography data, design tokens, and assets.

Each translatable route has an explicit counterpart recorded in front matter. The switcher links to that counterpart, so `/publications/` maps to its Chinese equivalent rather than to the site root. Names, paper titles, venues, author lists, URLs, and BibTeX stay canonical and are not translated. Research summaries, navigation, section headings, news prose, and experience descriptions are localized.

If a translation is temporarily missing, the switcher falls back to the corresponding English page and visibly identifies the displayed language rather than generating a broken link.

## Data Sources and Verification

Sources of truth, in priority order, are:

1. Google Scholar profile supplied by the user for the complete publication inventory.
2. The supplied CV for identity, research themes, experience, and representative contributions.
3. Official paper/project pages, proceedings, arXiv, and code repositories for links, venue details, and teaser assets.

Publication import is followed by manual verification of title, author order, venue, and year. Scholar citation counts for individual papers are not baked into publication entries because they become stale quickly. The site-wide `994+` total is stored once in the site configuration and may be manually updated.

Image assets must be owned by Shitong or sourced from official paper/project materials. Each image receives useful alt text and fixed intrinsic dimensions.

## Component and File Boundaries

Implementation should prefer al-folio conventions and avoid a parallel custom framework:

- `_config.yml` (or the current al-folio equivalent): identity, canonical URLs, social profiles, and the single citation metric.
- `_bibliography/papers.bib`: canonical publication metadata.
- Publication metadata fields: selected state, teaser, and optional official links.
- Locale-specific pages/content collections: translated prose and paired-route metadata.
- Small includes/components: citation metric and language switcher only where native components are insufficient.
- A single small theme override stylesheet: palette and Chinese font fallback tokens; no broad reimplementation of base components.
- Static assets: portrait, publication teasers, and CV PDF.

## Failure and Edge-Case Behavior

- Missing optional publication links produce no button.
- Missing teaser images fall back to al-folio's text-only publication layout.
- Missing translated pages link to English rather than a 404.
- External Scholar, GitHub, project, and PDF links open safely and do not block core rendering.
- Long Chinese text, long paper titles, and full author lists wrap without horizontal overflow.
- Images reserve space before loading to avoid layout shift.
- JavaScript-disabled visitors can still read all core content and reach publications, CV, and contact links.

## Verification Plan

Before handoff:

1. Run the theme's production build and link checks.
2. Verify the deployed base URL and asset paths under the GitHub Pages repository name.
3. Check English and Chinese routes, counterpart language links, navigation, publication filters, and all PDF/project/code links.
4. Inspect representative desktop and mobile widths in both light and dark modes.
5. Test long titles, Chinese paragraphs, author lists, missing teaser images, and missing optional links.
6. Confirm portrait and teaser alt text, keyboard navigation, focus visibility, and sufficient color contrast.
7. Confirm the CV opens/downloads and `994+ Citations` appears from the single configuration value.
8. Review every displayed publication against Scholar and at least one authoritative paper source.

## Non-Goals

- A custom design system or JavaScript application.
- Faculty-oriented teaching, student recruitment, or lab-management sections.
- Live scraping of Google Scholar at page load.
- Animated backgrounds, glassmorphism, large marketing claims, or decorative dashboards.
- Duplicating the full CV on the homepage.
- Automatically inventing translations, publication links, or research claims that cannot be verified.

## Implementation Constraint

The initial implementation will pin a known working al-folio revision. Custom changes should be isolated and documented so upstream security or compatibility updates can be incorporated without rewriting the site.
