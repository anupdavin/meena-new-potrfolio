# Meena Kannan Portfolio

Static GitHub Pages portfolio for Meena Kannan.

## Local Preview

```bash
node preview-server.cjs
```

Then open:

```text
http://127.0.0.1:4173/
```

The site is intentionally static: HTML, CSS, JavaScript, and one resume PDF. This keeps it friendly to GitHub Pages free-plan limits.

You can also use any static server, for example `python -m http.server 4173`.

## GitHub Pages

This repository includes a GitHub Actions workflow that publishes the site as a static Pages artifact on every push to `main`, but deployment should be done deliberately after local review.

Expected Pages URL:

```text
https://anupdavin.github.io/meena-new-potrfolio/
```

## Content Sources

- Resume: `assets/MeenaKannan_Resume_2026.pdf`
- LinkedIn: <https://www.linkedin.com/in/meena-kannan-mk/>
- GitHub: <https://github.com/meenak95>
