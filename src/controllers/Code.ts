import type { BunRequest } from "bun";
import { EditCode, FindCode, NewCode } from "../Database";

const ControllerCode = {
  "/api/code": {
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
      const codeId = NewCode(data);
      const code = FindCode(codeId);
      return Response.json(code, {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        },
      });
    },
  },
  "/api/code/:id": {
    PUT: async function (request: BunRequest & { params: { id: string } }) {
      const codeId = request.params.id;
      const codeData = await request.json();
      EditCode(codeId, codeData);
      const code = FindCode(codeId);
      return Response.json(code, {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        },
      });
    },
  },
};

export default ControllerCode;
