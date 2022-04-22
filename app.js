import express from "express";
import history from "connect-history-api-fallback";
import path from "path";
const app = express();

// 解析表单数据
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(history({}));
app.use(express.static(path.resolve("/static")));

app.listen(8088, () => {
  console.log("服务器启动！");
});
