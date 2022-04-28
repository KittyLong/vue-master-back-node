import { insert, insertAll, selectWhere, select, update } from "../db/mysql.js";
const table = "sys_user";

class UerService {
  static async insertUser(data) {
    return insert(table, data);
  }
  static async insertUsers(data) {
    return insertAll(table, data);
  }
  static async selectUserWhere(where) {
    return selectWhere(table, where);
  }
  // 查询所有
  static async selectUsers() {
    return select(table);
  }
  static async updateUser(where, data) {
    return update(table, where, data);
  }
}

export default UerService;
