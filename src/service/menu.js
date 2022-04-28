import { insert, insertAll, selectWhere, select, update } from "../db/mysql.js";
const table = "sys_menu";

class MenuService {
  static async insertMenu(data) {
    return insert(table, data);
  }
  static async insertMenus(data) {
    return insertAll(table, data);
  }
  static async selectMenuWhere(where) {
    return selectWhere(table, where);
  }
  // 查询所有
  static async selectMenus() {
    return select(table);
  }
  static async updateMenu(where, data) {
    return update(table, where, data);
  }
}

export default MenuService;
