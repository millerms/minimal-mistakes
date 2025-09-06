```toml
[memory]
filetype = "activeContext"
priority = "high"
```

# Active Context

## Current Focus
- Initialize Memory Bank and point Codex config to repo-local guidance.
- Verify head/footer/scripts includes align with SEO and a11y patterns.
- Ensure dark theme styles load correctly and maintain contrast.

## Recent Changes
- Added Memory Bank core files under `.codex/memory-bank/`.
- Planning to reference repo-local `memory-bank.md` guidance in `.codex/config.toml`.

## Next Steps
- Audit `_includes/head.html` meta tags for completeness (title, description, OG/Twitter, canonical).
- Confirm `_data/navigation.yml` reflects desired IA; check ARIA labeling.
- Review `assets/js/reveal.js` and `assets/js/tactile.js` for defer/async and a11y.
- Run Lighthouse a11y and note follow-ups into `progress.md`.

## Decisions & Preferences
- Keep overrides minimal; prefer theme-supported hooks.
- Use conventional commits and document non-obvious choices here.

