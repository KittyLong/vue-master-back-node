import { join } from "../db/mysql.js";

class LoginService {
  // 获取客户权限菜单
  static async getUserMenu(where) {
    return join(
      "sys_right",
      {
        sys_user: {
          on: ["user_id", "user_id"],
          as: "b",
        },
        sys_menu: {
          on: ["menu_id", "menu_id"],
          as: "c",
        },
      },
      `b.user_id=${where.user_id}`
    );
  }
}

export default LoginService;
