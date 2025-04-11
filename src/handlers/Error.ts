import type { ErrorLike } from "bun";

const HandlerError = function (err: ErrorLike) {
  console.error(err);
  return new Response(`Internal Server Error ${err.message}`, { status: 500 });
};

export default HandlerError;
