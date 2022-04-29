import { join } from "../db/mysql.js";
// const table = "sys_menu";

class LoginService {
  // 获取客户权限菜单
  static async getUserMenu() {
    return join("sys_user_role", {
      table: sys_role_menu,
      join: "inner",
      on: ["id", "id"],
    });
  }
  static async logOut() {}
}

export default MenuService;
