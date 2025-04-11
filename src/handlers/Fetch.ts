const HandlerFetch = async function (request: Request) {
  const url = new URL(request.url);

  const dist = new Bun.Glob("view/**/*");
  const distScanned = dist.scan({ cwd: "src" });
  const allDistFiles = await Array.fromAsync(distScanned);

  for (const file of allDistFiles) {
    const fileName = file.replace("view", "");
    const filePath = file.replace("view", "src/view");
    if (fileName !== "/index.html" && url.pathname === fileName) {
      const fileSource = Bun.file(filePath);
      return new Response(fileSource);
    }
  }

  return new Response("Not Found", {
    status: 404,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    },
  });
};

export default HandlerFetch;
