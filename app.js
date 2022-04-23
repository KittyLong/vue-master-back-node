import express from "express";
import history from "connect-history-api-fallback";
import path from "path";
import { select } from "./src/utils/mysql.js";
const app = express();

// 解析表单数据
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(history({
  verbose: true,
  index:'/'
}));

app.listen(8088, () => {
  console.log("服务器启动！");
});

select('sys_user').then(res => {
  console.log(res)
})