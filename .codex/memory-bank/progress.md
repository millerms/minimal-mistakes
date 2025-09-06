```toml
[memory]
filetype = "progress"
priority = "medium"
```

# Progress

## What Works
- Minimal Mistakes theme configured; site structure in place.
- Custom assets exist (`theme.css`, `custom.css`, `reveal.js`, `tactile.js`).

## In Progress
- Memory Bank initialized and linked in config.
- Meta, SEO, and a11y audit to verify compliance.

## Blockers
- None identified yet.

## Upcoming
- Validate dark mode styles across key pages.
- Ensure JS loads non-blocking and remains accessible.

## Known Issues
- Resolved duplicate `custom.css` inclusion by removing `css: "custom"` from
  `_config.yml` defaults. Global include in `_includes/head.html` is authoritative.
