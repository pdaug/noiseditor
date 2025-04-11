import type { Database } from "bun:sqlite";

const migration_2025_04_05_0002 = function (database: Database) {
  database.run(`
CREATE TRIGGER IF NOT EXISTS update_flows_timestamp
AFTER UPDATE ON flows
FOR EACH ROW
BEGIN
  UPDATE flows SET updateDate = CURRENT_TIMESTAMP WHERE id = OLD.id;
END;
  `);
};

export default migration_2025_04_05_0002;
