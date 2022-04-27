import { insert, selectWhere,select } from "../db/mysql.js";
const table = "sys_user";

function insertUser(data) {
  return insert(table, data)
}
function selectUserWhere(where) {
  return selectWhere(table,where)
}
// 查询所有
function selectUsers() {
  return select(table)
}
export { selectUsers, selectUserWhere,insertUser };
