import { defineStore } from 'pinia';
import { initDb, saveDb } from '../utils/db';

/**
 * Pinia store for managing prompts in the SQLite database.
 */
export const usePromptStore = defineStore('prompts', {
  state: () => ({
    db: null,
    prompts: []
  }),
  actions: {
    /**
     * Initialize the DB and load existing prompts.
     */
    async init() {
      this.db = await initDb();
      this.loadPrompts();
    },
    /**
     * Load prompts from the DB into state.
     */
    loadPrompts() {
      const stmt = this.db.prepare('SELECT * FROM prompts ORDER BY created_at DESC');
      this.prompts = [];
      while (stmt.step()) {
        this.prompts.push(stmt.getAsObject());
      }
      stmt.free();
    },
    /**
     * Add a new prompt to the DB and refresh state.
     */
    addPrompt({ title, content, tags, model }) {
      const stmt = this.db.prepare(
        'INSERT INTO prompts (title, content, tags, model) VALUES (:title, :content, :tags, :model)'
      );
      stmt.bind({ ':title': title, ':content': content, ':tags': tags, ':model': model });
      stmt.step();
      stmt.free();
      saveDb();
      this.loadPrompts();
    },
    /**
     * Update an existing prompt by id.
     */
    updatePrompt(id, { title, content, tags, model }) {
      const stmt = this.db.prepare(
        'UPDATE prompts SET title = :title, content = :content, tags = :tags, model = :model, updated_at = CURRENT_TIMESTAMP WHERE id = :id'
      );
      stmt.bind({ ':id': id, ':title': title, ':content': content, ':tags': tags, ':model': model });
      stmt.step();
      stmt.free();
      saveDb();
      this.loadPrompts();
    },
    /**
     * Delete a prompt by id.
     */
    deletePrompt(id) {
      const stmt = this.db.prepare('DELETE FROM prompts WHERE id = :id');
      stmt.bind({ ':id': id });
      stmt.step();
      stmt.free();
      saveDb();
      this.loadPrompts();
    }
  }
});