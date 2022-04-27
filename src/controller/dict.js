class DictController {
  static async getDict(ctx) {
    console.log(ctx.request.query.a);
    console.log(ctx.request);
    ctx.body = {
      a: 1,
      b: 2,
    };
  }
  static async updateDict(ctx) {
    console.log(222);
    console.log("updatedict");
    console.log(ctx.request.query.a);
  }
  static async deleteDict(ctx) {}
  static async addDict(ctx) {}
}

export default DictController;
