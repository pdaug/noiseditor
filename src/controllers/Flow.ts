import type { BunRequest } from "bun";
import { GetCodes, LoadFlow, SaveFlow } from "../Database";

const ControllerFlow = {
  "/api/flow": {
    POST: async function (request: BunRequest) {
      const body = await request.json();
      const uuid = Bun.randomUUIDv7();
      const id = uuid.replaceAll("-", "");
      const datetime = new Date().toISOString();
      const data = {
        ...body,
        id,
        createDate: datetime,
        updateDate: datetime,
      };
      const flowId = SaveFlow(data);
      const result = LoadFlow(flowId);
      return Response.json(result, {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        },
      });
    },
  },
  "/api/flow/:id": {
    GET: function (request: BunRequest & { params: { id: string } }) {
      const flowId = request.params.id;
      const flows = LoadFlow(flowId);
      const codes = GetCodes(flowId);
      const result = { flows, codes };
      return Response.json(result, {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        },
      });
    },
  },
};

export default ControllerFlow;
