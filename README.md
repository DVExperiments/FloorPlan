# Floorplan Studio v3.2.3 — Desktop + Mobile PWA

Upload the **contents** of this folder to the root of your GitHub Pages repository (not the ZIP itself). Keep the relative file paths exactly as supplied.

- `index.html` — Desktop app and shared Home page
- `mobile.html` — Touch-friendly editor; PWA launch page
- `manifest.webmanifest` — Android/Chromium installation metadata
- `service-worker.js` — Application file caching for offline reopening
- `favicon.ico`, `favicon.png` — Browser-tab icons
- `icons/` — 192 and 512px app icons, maskable icon, and iOS touch icon
- `.nojekyll` — GitHub Pages helper

## Install on a phone

Open `https://USERNAME.github.io/REPOSITORY/mobile.html` on your phone or use the **Install Mobile App** button on the Home screen.

**Android Chrome:** If an install prompt is available, the Home button opens it. Otherwise, open Chrome's three-dot menu → Install app (or Add to Home screen). For the full app experience, prefer Install app when available.

**iPhone:** Open the site in Safari → Share → Add to Home Screen → Add. iOS does not provide the same web-install prompt.

The app uses a custom icon and opens without the ordinary browser tab chrome when installed as a PWA. Actual behaviour can vary by browser and operating system. GitHub Pages (HTTPS) is necessary for the service worker; opening the HTML directly from your computer does not register it.

## Saving

Desktop and Mobile share browser localStorage **only on the same device, browser and GitHub Pages origin**. No cloud sync is provided. Export JSON backups before clearing browser storage or switching devices. The service worker caches application files, **not user projects**.

## Updating an existing deployment

Replace all files with this release, retaining their folder structure. The service worker is network-first for HTML and versioned to allow updated pages to replace cached pages. Reload once after GitHub Pages finishes deployment.

This is a conceptual design tool, not construction documentation or a building code compliance check.
