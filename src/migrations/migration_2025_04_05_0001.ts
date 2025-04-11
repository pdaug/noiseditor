import type { Database } from "bun:sqlite";

const migration_2025_04_05_0001 = function (database: Database) {
  database.run(`
CREATE TABLE IF NOT EXISTS codes (
  id TEXT NOT NULL PRIMARY KEY,
  name TEXT NOT NULL DEFAULT '',
  extension TEXT NOT NULL DEFAULT 'ts',
  description TEXT NOT NULL DEFAULT '',
  source TEXT NOT NULL DEFAULT '',
  flowId TEXT,
  createDate DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updateDate DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (flowId) REFERENCES flows(id) ON DELETE CASCADE
);
  `);
};

export default migration_2025_04_05_0001;
