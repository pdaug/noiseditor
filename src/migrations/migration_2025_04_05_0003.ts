import type { Database } from "bun:sqlite";

const migration_2025_04_05_0003 = function (database: Database) {
  database.run(`
CREATE TRIGGER IF NOT EXISTS update_codes_timestamp
AFTER UPDATE ON codes
FOR EACH ROW
BEGIN
  UPDATE codes SET updateDate = CURRENT_TIMESTAMP WHERE id = OLD.id;
END;
  `);
};

export default migration_2025_04_05_0003;
