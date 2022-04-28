import menu from "../service/menu.js";

class MenuController {
  static async getMenu(ctx) {
    let data = ctx.request.query;
    let res = [];
    if (data && data.menu_id) {
      // 存在就where查
      try {
        res = await menu.selectMenuWhere({ menu_id: data.menu_id });
        res = res.filter((item) => item.del_flag !== 1);
      } catch (error) {
        ctx.body = error;
      }
    } else {
      // 查全部
      res = await menu.selectMenus();
      res = res.filter((item) => item.del_flag !== 1);
    }
    ctx.body = res;
  }
  static async updateMenu(ctx) {
    let data = ctx.request.body;
    let res = {};
    if (data && data.menu_id) {
      try {
        let temp = await menu.updateMenu({ menu_id: data.menu_id }, data);
        temp > 0 ? (res = { msg: "ok" }) : (res = { msg: "failed" });
      } catch (error) {
        ctx.body = error;
      }
    } else {
      res = { satus: 200, msg: "menu_id为空!" };
    }
    ctx.body = res;
  }
  static async deleteMenu(ctx) {
    let data = ctx.request.body;
    let res = {};
    if (data && Array.isArray(data) && data.length > 0) {
      try {
        let temp = await Promise.all(
          data.map((item) => {
            return menu.updateMenu({ menu_id: item.menu_id }, { del_flag: 1 });
          })
        );
        temp.every((item) => item === 1)
          ? (res = { msg: "ok" })
          : (res = { msg: "部分成功!" });
      } catch (error) {
        ctx.body = error;
      }
    } else {
      // 错误返回最好要定义规范的错误编号,这里我直接写原因毕竟不是专业后台
      res = { msg: "请传入数组,数组不得为空!" };
    }
    ctx.body = res;
  }
  static async addMenu(ctx) {
    let data = ctx.request.body;
    let res = {};
    if (data && Array.isArray(data) && data.length > 0) {
      if (
        data.some((item) => {
          return !item.menu_id || !item.menu_name;
        })
      ) {
        res = { msg: "请参数传全menu_id,menu_name" };
      } else {
        try {
          await menu.insertMenus(data);
          res = { msg: "ok" };
        } catch (error) {
          res = error;
        }
      }
    } else {
      // 错误返回最好要定义规范的错误编号,这里我直接写原因
      res = { msg: "请传入数组,数组不得为空!" };
    }
    ctx.body = res;
  }
}

export default MenuController;
