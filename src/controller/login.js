import login from "../service/login.js";
import md5 from "md5";
class LoginController {
  static async login(ctx) {
    // console.log(ctx.request.query.a);
    // console.log(1111);
    // ctx.body = {
    //   a: 1,
    //   b: 2,
    // };
    let data = ctx.request.body;
    const { user_id, password } = data;
    if (!user_id) {
      ctx.throw(400, "用户名不能为空!");
    }
    if (!password) {
      ctx.throw(400, "密码不能为空!");
    }
    //校验密码
    try {
      // let res = await
    } catch (error) {}
  }
  // static async updateDict(ctx) {
  //   console.log(222);
  //   console.log("updatedict");
  //   console.log(ctx.request.body);
  //   ctx.body = {
  //     m:2
  //   };
  // }
  // static async deleteDict(ctx) {}

  // static async addDict(ctx) {}
}

export default LoginController;
