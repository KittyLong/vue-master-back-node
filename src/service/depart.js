// 部门
import { insert, insertAll, selectWhere, select, update } from "../db/mysql.js";
const table = "sys_dept";

class DepartService {
  static async insertDepart(data) {
    return insert(table, data);
  }
  static async insertDeparts(data) {
    return insertAll(table, data);
  }
  static async selectDepartWhere(where) {
    return selectWhere(table, where);
  }
  // 查询所有
  static async selectDeparts() {
    return select(table);
  }
  static async updateDepart(where, data) {
    return update(table, where, data);
  }
}

export default DepartService;
