## Feature: SQLite-Powered Prompt Storage

PromptForge uses a local SQLite database (`prompts.db`) to store prompt entries.  
This keeps everything lightweight, portable, and easy to demo without server setup.

---

### 🔍 Why SQLite?

- No setup or external server needed
- Great for local-first apps
- Easy to query and back up
- Electron-friendly for future packaging

---

### 🧱 Schema: `prompts` Table

```sql
CREATE TABLE prompts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  tags TEXT, -- comma-separated
  model TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
