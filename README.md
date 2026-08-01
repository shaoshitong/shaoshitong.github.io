# Shitong Shao — Academic Homepage

Bilingual academic homepage built with [al-folio](https://github.com/alshedivat/al-folio) and deployed through GitHub Pages.

## Content maintenance

- Update the site-wide citation label in `_config.yml` (`citation_count`).
- Update publications in `_bibliography/papers.bib`; add `selected = {true}` to show a paper on the homepage.
- Add short dated updates under `_news/`.
- Replace `assets/pdf/Shitong_Shao_CV.pdf` when the CV changes.
- Edit the English homepage in `_pages/about.md` and the Chinese homepage in `_pages/zh.md`.

## Local preview

The site is pinned to the Ruby and gem versions in `Gemfile.lock`.

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.
