import md5 from "md5";
// import login from "../service/login.js";
import user from "../service/user.js";
import createToken from "../utils/token.js";
import _ from "lodash";
class LoginController {
  static async login(ctx) {
    let data = ctx.request.body;
    const { user_account, password } = data;
    if (!user_account) {
      ctx.throw(400, "用户名不能为空!");
    }
    if (!password) {
      ctx.throw(400, "密码不能为空!");
    }
    try {
      let res = await user.selectUserWhere({ user_account });
      if (res.length > 0) {
        let userObj = res[0];
        //校验密码
        if (md5(data.password) === userObj.password) {
          userObj = _.omit(userObj, ["password"]);
          const token = createToken({ user_id: userObj.user_id });

          ctx.body = {
            ...userObj,
            msg: "登录成功",
            token,
            success: true,
          };
        } else {
          ctx.body = {
            msg: "密码错误",
            success: false,
          };
        }
        // 如果要做登录记录可以在此添加
      } else {
        ctx.body = {
          msg: "该用户不存在",
          success: false,
        };
      }
    } catch (error) {
      ctx.body = error;
    }
  }
}

export default LoginController;
