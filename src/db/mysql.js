// node连接mysql的工具 比自己手写sql方便
// https://github.com/ffttpp/node-mysql-promise
// 具体使用可以直接github上文档
import Mysql from "node-mysql-promise";
var mysql = Mysql.createConnection({
  host: "101.43.9.13",
  user: "root",
  password: "12311560",
  database: "masterdb",
});

// 所有增删改按理需要事务处理
// 单表查询所有
export function select(table) {
  return mysql.table(table).select();
}
// 条件查询
export function selectWhere(table, where) {
  return mysql.table(table).where(where).select();
}
// 单条数据插入,感觉多余了
export function insert(table, data) {
  return mysql.table(table).add(data);
}
// 条件插入
export function insertWhere(table, where, data) {
  // data Object 要插入的数据
  // where String|Array|Object 检测的条件
  // returnDetail Boolean 是否返回详细的信息
  return mysql.table(table).thenAdd(data, where, true);
}
// 多条数据插入
export function insertAll(table, data) {
  return mysql.table(table).addAll(data);
}
// 条件更新
export function update(table, where, data) {
  return mysql.table(table).where(where).update(data);
}
// 分页查询
export function page(table, page = 1, count = 20) {
  return mysql.table(table).page(page, count).select();
}
// 组合查询(默认左连接)
export function join(table,on, where) {
  return mysql.table(table).join(on).where(where).select();
}
// 暂时这么几个就够用了 删除只是修改del_flag就不写了
