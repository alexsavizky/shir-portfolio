# Shir Cohen — Radio Portfolio

A tiny, dependency-free portfolio site. No build step, no framework — just
HTML/CSS/JS, so it loads instantly and is free to host.

## Editing content

- **Bio / contact info**: edit the text directly in [index.html](index.html)
  (About section, and the email/social links in the Contact section).
- **Shows**: edit [js/shows-data.js](js/shows-data.js) — one object per show.
  Add or remove entries freely.
- **Cover art**: drop an image into `assets/images/` and set the show's
  `cover` field to the filename. Leave `cover: ""` to auto-generate a
  colored placeholder from the show title.
- **Audio**: drop an mp3 into `assets/audio/` and set the show's `audio`
  field to the filename, e.g. `"midnight-frequencies.mp3"`. Leave `audio: ""`
  to show a "coming soon" label instead of a player.

## Previewing locally

Because the page loads `js/shows-data.js` as a script (not `fetch`), you can
just double-click `index.html` to open it in a browser — no server required.

## Deploying for free — GitHub Pages

1. Create a new **public** GitHub repository (e.g. `shir-portfolio`).
2. Push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/shir-portfolio.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Source → Deploy from branch → `main` / `/(root)`**.
4. The site will be live at `https://<your-username>.github.io/shir-portfolio/`
   within a minute or two.
5. Optional: add a custom domain under **Settings → Pages → Custom domain**
   (you'd need to buy the domain separately, ~$10-15/year).

### A note on audio file sizes

GitHub Pages/repos work best when the whole repo stays well under ~1GB, and
GitHub will warn on individual files over 50MB. A typical 30–45 min mp3 at a
reasonable bitrate is usually 20–40MB, so a handful of shows is fine. If the
collection grows large, consider compressing episodes (e.g. 96–128kbps mono
is plenty for spoken-word radio) or moving audio to free object storage
(e.g. Cloudflare R2 free tier) and pointing the `audio` field at that URL
instead of a local filename.
