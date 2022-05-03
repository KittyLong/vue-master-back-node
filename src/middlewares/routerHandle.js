const roterHandle = (ctx, next) => {
  if (
    ctx.method === "GET" &&
    ctx.headers.accept.includes("text/html") &&
    !ctx.path.includes(".")
  ) {
    console.log("11111333");
    ctx.path = "../static/index.html";
  }
};

export default roterHandle;
