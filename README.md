# Floorplan Studio — Desktop & Mobile

This GitHub Pages package includes two views of the same browser-based application:

- `index.html`: Original desktop Floorplan Studio v3.2.1.
- `mobile.html`: Touch-first Floorplan Studio Mobile v3.2.2.

Deploy all files to the same repository root with GitHub Pages enabled.

**Desktop URL:** `https://USERNAME.github.io/REPO/`

**Mobile URL:** `https://USERNAME.github.io/REPO/mobile.html`

Because both pages are served from the same origin, they share the existing browser project library stored in localStorage. Projects are not automatically synced across different devices or browsers; use Export JSON and Import JSON to transfer. Avoid editing the same project simultaneously in two open tabs.

## Mobile controls

The phone interface has a full-screen canvas and bottom buttons for Tools, Select, Pan, Properties, and switching between 2D and 3D. Tools and Properties open slide-up sheets. Draw and select using taps and drags; use two-finger gestures only if your browser supports them in this drawing engine. The desktop page remains the recommended interface for complex editing, technical measurements, and printing.

## Saving and limits

Saving uses browser storage, not an online account. Export JSON backups regularly. This is conceptual design software, not compliant construction documentation.
