import Koa from "koa";
import path from "path";
import jwt from "koa-jwt";
import router from "./src/routes/index.js";
// //bodyParser中间件
import koaBodyparser from "koa-bodyparser";
import errorHandle from "./src/middlewares/errorHandle.js";
import roterHandle from "./src/middlewares/routerHandle.js";
const app = new Koa();

app.use(koaBodyparser());
app.use(router.routes()).use(router.allowedMethods());

app.use(
  jwt({
    secret: "aklong",
  }).unless({
    path: [/\/register/, /\/login/],
  })
);
app.use(errorHandle);
// 无效果处理h5router模式
app.use(roterHandle);

app.listen(8088, () => {
  console.log("服务器启动！");
});
