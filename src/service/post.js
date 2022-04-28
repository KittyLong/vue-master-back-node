// 职位
import { insert, insertAll, selectWhere, select, update } from "../db/mysql.js";
const table = "sys_post";

class PostService {
  static async insertPost(data) {
    return insert(table, data);
  }
  static async insertPosts(data) {
    return insertAll(table, data);
  }
  static async selectPostWhere(where) {
    return selectWhere(table, where);
  }
  // 查询所有
  static async selectPosts() {
    return select(table);
  }
  static async updatePost(where, data) {
    return update(table, where, data);
  }
}

export default PostService;
