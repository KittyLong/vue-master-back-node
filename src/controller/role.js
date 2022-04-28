import role from "../service/role.js";

class RoleController {
  static async getRole(ctx) {
    let data = ctx.request.query;
    let res = [];
    if (data && data.role_id) {
      // 存在就where查
      try {
        res = await role.selectRoleWhere({ role_id: data.role_id });
        res = res.filter((item) => item.del_flag !== 1);
      } catch (error) {
        ctx.body = error;
      }
    } else {
      // 查全部
      res = await role.selectRoles();
      res = res.filter((item) => item.del_flag !== 1);
    }
    ctx.body = res;
  }
  static async updateRole(ctx) {
    let data = ctx.request.body;
    let res = {};
    if (data && data.role_id) {
      try {
        let temp = await role.updateRole({ role_id: data.role_id }, data);
        temp > 0 ? (res = { msg: "ok" }) : (res = { msg: "failed" });
      } catch (error) {
        ctx.body = error;
      }
    } else {
      res = { satus: 200, msg: "role_id为空!" };
    }
    ctx.body = res;
  }
  static async deleteRole(ctx) {
    let data = ctx.request.body;
    let res = {};
    if (data && Array.isArray(data) && data.length > 0) {
      try {
        let temp = await Promise.all(
          data.map((item) => {
            return role.updateRole({ role_id: item.role_id }, { del_flag: 1 });
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
  static async addRole(ctx) {
    let data = ctx.request.body;
    let res = {};
    if (data && Array.isArray(data) && data.length > 0) {
      if (
        data.some((item) => {
          return (
            !item.role_id ||
            !item.role_name ||
            !item.role_key ||
            !role_sort ||
            !role_status
          );
        })
      ) {
        res = { msg: "请参数传全role_id,role_name,role_key,role_sort,status" };
      } else {
        try {
          await role.insertRoles(data);
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

export default RoleController;
