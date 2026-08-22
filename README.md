# Blue Lock Wiki

Fan wiki of *Blue Lock* — players, teams, selections, and weapons through the Neo Egoist League.

Click a player card for the full dossier (overview, stats, story, weapons). Search with ⌘K. Compare egoists. Bookmarks stay in this browser.

Spoilers through the Neo Egoist League are on every page.

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed in the terminal (port 8080).

```bash
npm run build
npm run preview
```

## Publish to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Blue Lock Wiki"
git branch -M main
git remote add origin git@github.com:NishithDas03/bluelock-wiki.git
git push -u origin main
```

Static player data lives in `src/data/`. Portraits and the hero live in `public/`.
