import {  selectWhere, select } from "../db/mysql.js";
const table = "sys_dict";

class DictService {
  static async selectDictWhere(where) {
    return selectWhere(table, where);
  }
  // 查询所有
  static async selectDicts() {
    return select(table);
  }
}

export default DictService;
