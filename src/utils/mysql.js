// node连接mysql的工具 比自己手写sql方便
// https://github.com/ffttpp/node-mysql-promise
// 具体使用可以直接github上文档
import Mysql from "node-mysql-promise";
var mysql = Mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123115",
  database: "masterdb",
});

// 单表查询所有
function select(table) {
  return mysql.table(table).select();
}
// 条件查询
function selectWhere(table, where) {
  return mysql.table(table).where(where).select();
}
// 单条数据插入
function insert(table, data) {
  return mysql.table(table).add(data);
}
// 条件插入
function insertWhere(table, where, data) {
  // data Object 要插入的数据
  // where String|Array|Object 检测的条件
  // returnDetail Boolean 是否返回详细的信息
  return mysql.table(table).thenAdd(data, where, true);
}
// 多条数据插入
function insertAll(table, arr) {
  return mysql.table(table).addAll(data);
}
export { select, insert };
