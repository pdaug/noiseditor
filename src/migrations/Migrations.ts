import { Database } from "bun:sqlite";

// migrations
import migration_2025_04_02 from "./migration_2025_04_02";
import migration_2025_04_05_0001 from "./migration_2025_04_05_0001";
import migration_2025_04_05_0002 from "./migration_2025_04_05_0002";
import migration_2025_04_05_0003 from "./migration_2025_04_05_0003";

const Migrations = async function (database: Database) {
  migration_2025_04_02(database);
  migration_2025_04_05_0001(database);
  migration_2025_04_05_0002(database);
  migration_2025_04_05_0003(database);
  return;
};

export default Migrations;
