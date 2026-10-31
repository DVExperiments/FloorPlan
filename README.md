# Floorplan Studio v3.1.3

A self-contained, browser-based floor-plan and conceptual 3D house design application.

## Run locally

Open `index.html` in a modern desktop browser. No build, installation, dependencies, or server is required for basic use.

## Publish with GitHub Pages

1. Create a GitHub repository (or open your existing Floorplan Studio repository).
2. Upload the **contents** of this package to the repository root (including `index.html`). Do not upload just the ZIP.
3. Commit the files to your default branch (often `main`).
4. In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select your default branch and **/(root)**, then save.
5. Once GitHub Pages has deployed, visit the URL shown under **Settings → Pages**.

The app uses no external JavaScript libraries and no backend service.

## Saving projects

- **Save / My Projects** saves designs in the browser's local storage for the current website origin and browser profile. It is *not* a cloud account or multi-device sync.
- **Export JSON** creates a portable backup. Use **My Projects → Import JSON** on another device to add that design to its own local library.
- Publishing on GitHub Pages changes the site's origin compared with opening a local HTML file, so local projects do not automatically migrate. Export/import JSON to move them.
- Clearing site data or using private browsing can erase browser-saved designs. Keep JSON backups of important work.

## Important note

Floorplan Studio is for conceptual planning and visual experimentation, not construction-ready drawings, structural engineering, electrical design, or building-code certification.
