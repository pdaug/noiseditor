import { Database } from "bun:sqlite";

import Migrations from "./migrations/Migrations";
import type { FlowWithProps } from "./types/Flow";
import type { CodeData, CodeDataWithProps } from "./types/Code";

const database = new Database("mydb.sqlite", { create: true });

Migrations(database);

const SaveFlow = function (data: FlowWithProps) {
  const queryInsert = database.query(
    `INSERT INTO flows(id, edges, nodes, createDate, updateDate) VALUES($id, $edges, $nodes, $createDate, $updateDate);`,
  );
  queryInsert.all({
    $id: data.id,
    $edges: JSON.stringify(data.edges),
    $nodes: JSON.stringify(data.nodes),
    $createDate: data.createDate,
    $updateDate: data.updateDate,
  });
  return data.id;
};

const LoadFlow = function (id: string) {
  const query = database.query(`SELECT * FROM flows WHERE id = $id;`);
  const result = query.get({ $id: id });
  return result;
};

const NewCode = function (data: CodeDataWithProps) {
  const queryInsert = database.query(
    `INSERT INTO codes(id, name, extension, description, source, flowId, createDate, updateDate) VALUES($id, $name, $extension, $description, $source, $flowId, $createDate, $updateDate);`,
  );
  queryInsert.all({
    $id: data.id,
    $name: data.name,
    $extension: data.extension,
    $description: data.description,
    $source: data.source,
    $flowId: data.flowId,
    $createDate: data.createDate,
    $updateDate: data.updateDate,
  });
  return data.id;
};

const GetCodes = function (flowId: string) {
  const query = database.query(`SELECT * FROM codes WHERE flowId = $flowId;`);
  const result = query.all({
    $flowId: flowId,
  });
  return result;
};

const FindCode = function (id: string) {
  const query = database.query(`SELECT * FROM codes WHERE id = $id;`);
  const result = query.get({ $id: id });
  return result;
};

const EditCode = function (id: string, data: Partial<Omit<CodeData, "id">>) {
  const dataKeys = Object.keys(data)
    ?.map(function (key) {
      return `${key} = $${key}`;
    })
    ?.join(", ");
  const dataValues = Object.fromEntries(
    Object.entries(data)?.map(function ([key, value]) {
      return [`$${key}`, value];
    }),
  );
  const query = database.query(`UPDATE codes SET ${dataKeys} WHERE id = $id;`);
  const result = query.all({
    ...dataValues,
    $id: id,
  });
  return result;
};

export { NewCode, GetCodes, FindCode, EditCode, LoadFlow, SaveFlow };
