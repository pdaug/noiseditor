const ControllerHomepage = function () {
  const fileSource = Bun.file("src/view/index.html");
  return new Response(fileSource);
};

export default ControllerHomepage;
