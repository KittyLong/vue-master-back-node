import { insert, insertAll, selectWhere, select, update } from "../db/mysql.js";
const table = "sys_role";

class UerService {
  static async insertRole(data) {
    return insert(table, data);
  }
  static async insertRoles(data) {
    return insertAll(table, data);
  }
  static async selectRoleWhere(where) {
    return selectWhere(table, where);
  }
  // 查询所有
  static async selectRoles() {
    return select(table);
  }
  static async updateRole(where, data) {
    return update(table, where, data);
  }
}

export default UerService;
