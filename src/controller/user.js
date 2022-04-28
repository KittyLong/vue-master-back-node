import user from "../service/user.js";

class UserController {
  static async getUser(ctx) {
    let data = ctx.request.query;
    let res = [];
    if (data && data.user_id) {
      // 存在就where查
      try {
        res = await user.selectUserWhere({ user_id: data.user_id });
        res = res.filter((item) => item.del_flag !== 1);
      } catch (error) {
        ctx.body = error;
      }
    } else {
      // 查全部
      res = await user.selectUsers();
      res = res.filter((item) => item.del_flag !== 1);
    }
    ctx.body = res;
  }
  static async updateUser(ctx) {
    let data = ctx.request.body;
    let res = {};
    if (data && data.user_id) {
      try {
        let temp = await user.updateUser({ user_id: data.user_id }, data);
        temp > 0 ? (res = { msg: "ok" }) : (res = { msg: "failed" });
      } catch (error) {
        ctx.body = error;
      }
    } else {
      res = { satus: 200, msg: "user_id为空!" };
    }
    ctx.body = res;
  }
  static async deleteUser(ctx) {
    let data = ctx.request.body;
    let res = {};
    if (data && Array.isArray(data) && data.length > 0) {
      try {
        let temp = await Promise.all(
          data.map((item) => {
            return user.updateUser({ user_id: item.user_id }, { del_flag: 1 });
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
  static async addUser(ctx) {
    let data = ctx.request.body;
    let res = {};
    if (data && Array.isArray(data) && data.length > 0) {
      if (
        data.some((item) => {
          return !item.user_id || !item.user_name || !item.nick_name;
        })
      ) {
        res = { msg: "请参数传全user_id,user_name,nick_name" };
      } else {
        try {
          await user.insertUsers(data);
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

export default UserController;
