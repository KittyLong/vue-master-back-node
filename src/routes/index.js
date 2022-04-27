import Router from "koa-router";
import dict from "../controller/dict.js";
import menu from "../controller/menu.js";
import role from "../controller/role.js";
import user from "../controller/user.js";
import common from "../controller/common.js";
//   router = new Router({
//       prefix: '/api'
//   }),
const router = new Router();

// 字典
router
  .get("/system/dict/data", dict.getDict)
  .post("/system/dict/update", dict.updateDict)
  .delete("/system/dict/delete", dict.deleteDict)
  .put("/system/dict/add", dict.addDict)
// 用户
router
  .get("/system/user/data/:user_id", user.getUser)
  .post("/system/user/update", user.updateUser)
  .delete("/system/user/delete", user.deleteUser)
  .put("/system/user/add", user.addUser);

// 角色
router
  .get("/system/role/data/:role_id", role.getRole)
  .post("/system/role/update", role.updateRole)
  .delete("/system/role/delete", role.deleteRole)
  .put("/system/role/add", role.addRole);

// 菜单
router
  .get("/system/menu/data/:role_id", menu.getMenu)
  .post("/system/menu/update", menu.updateMenu)
  .delete("/system/menu/delete", menu.deleteMenu)
  .put("/system/menu/add", menu.addMenu);

export default router;
