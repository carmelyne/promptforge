import initSqlJs from 'sql.js';
import wasmURL from 'sql.js/dist/sql-wasm.wasm?url';

let SQL;
let db;

/**
 * Initialize or load the SQLite database from localStorage.
 * @returns {Promise<SQL.Database>} SQLite database instance
 */
export async function initDb() {
  if (!SQL) {
    SQL = await initSqlJs({ locateFile: () => wasmURL });
  }
  const saved = localStorage.getItem('promptforgeDb');
  if (saved) {
    const u8 = Uint8Array.from(atob(saved), c => c.charCodeAt(0));
    db = new SQL.Database(u8);
  } else {
    db = new SQL.Database();
    db.run(
      `CREATE TABLE IF NOT EXISTS prompts (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         title TEXT NOT NULL,
         content TEXT NOT NULL,
         tags TEXT,
         model TEXT,
         created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
         updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
       );`
    );
  }
  return db;
}

/**
 * Persist the current database to localStorage.
 */
export function saveDb() {
  const data = db.export();
  const b64 = btoa(String.fromCharCode(...data));
  localStorage.setItem('promptforgeDb', b64);
}