import {selectUserWhere,selectUsers,insertUser} from '../service/user.js'

class UserController {
  static async getUser(ctx) {
    let data = ctx.request.query
    let res;
    if (data && data.user_id) {
      // 存在就where查
      res = await selectUserWhere({ user_id: data.user_id })
    } else {
      // 查全部
      res = await selectUsers()
    }
    ctx.body=res
  }
  static async updateUser(ctx) {}
  static async deleteUser(ctx) {}
  static async addUser(ctx) {}
}

export default UserController;
