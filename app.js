import Koa from "koa";
import path from "path";
import router from "./src/routes/index.js";
// //bodyParser中间件
import koaBodyparser from "koa-bodyparser";
const app = new Koa();

app.use(koaBodyparser());
app.use(router.routes()).use(router.allowedMethods());


app.on("error", (err, ctx) => {
  console.error("server error111", err, ctx);
});

app.listen(8088, () => {
  console.log("服务器启动！");
});
