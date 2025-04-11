import type { Database } from "bun:sqlite";

const migration_2025_04_02 = function (database: Database) {
  database.run(`
CREATE TABLE IF NOT EXISTS flows (
  id TEXT NOT NULL PRIMARY KEY,
  edges TEXT NOT NULL DEFAULT '[]',
  nodes TEXT NOT NULL DEFAULT '[]',
  createDate DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updateDate DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
  `);
};

export default migration_2025_04_02;
