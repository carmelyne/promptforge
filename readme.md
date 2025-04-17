# PromptForge 🔥🧠

PromptForge is a local-first AI prompt manager, built entirely from structured Markdown and a conversation with AI.

This project was created by documenting the app inside a `.ai/` folder, then letting an AI (Codex) read it and generate the full codebase.

Yes, it works. Yes, it's dark-mode ready. Yes, it was vibe-coded by a dev auntie with 20 years of web experience. 💅

## Features

- Built with Vue 3 + Vite
- Uses Tailwind CSS with class-based dark mode toggle
- Stores prompts in SQLite (via sql.js in the browser)
- LocalStorage-based persistence
- Add, edit, delete, and tag prompts
- All behavior driven from `.ai/` documentation

## The Magic

The real star of this project is the `.ai/` folder.

This directory contains:

- `goal.txt` — project intent
- `features.md` — functionality list
- `db-feature.md` — database specs
- `frontend-style.md` — UI/UX guidance
- `file-map.md` — folder structure
- Other Markdown docs that guided the AI

These files are what Codex read to generate the app without writing a single line of spec twice.

## Run Locally

npm install
npm run dev

Then open <http://localhost:5173>

About

Created as a vibe-coding experiment by @carmelyne
Full blog post coming soon!

With love,
Your auntie dev
