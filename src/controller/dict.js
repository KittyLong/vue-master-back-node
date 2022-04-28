import dict from "../service/dict.js";

class DictController {
  // 数据字典脚本打入 基本不动 所以只写查
  static async getDict(ctx) {
    let data = ctx.request.query;
    let res = [];
    if (data && data.dict_code) {
      // 存在就where查
      try {
        res = await dict.selectDictWhere({ dict_code: data.dict_code });
        res = res.filter((item) => item.del_flag !== 1);
      } catch (error) {
        ctx.body = error;
      }
    } else {
      // 查全部
      res = await dict.selectDicts();
      res = res.filter((item) => item.del_flag !== 1);
    }
    ctx.body = res;
  }
}

export default DictController;
