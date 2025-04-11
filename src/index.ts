import Bun from "bun";

// routes
import routes from "./Routes";

// handlers
import error from "./handlers/Error";
import fetch from "./handlers/Fetch";

const port = process.env.PORT || 5005;
const hostname = process.env.HOSTNAME || "localhost";

const serverOptions = {
  port,
  hostname,
  routes,
  error,
  fetch,
};

const Server = Bun.serve(serverOptions);

console.log(`SERVER ON ${Server.url}`);
