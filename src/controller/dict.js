class DictController {
  static async getDict(ctx) {
    // console.log(ctx.request.query.a);
    // console.log(1111);
    // ctx.body = {
    //   a: 1,
    //   b: 2,
    // };
  }
  static async updateDict(ctx) {
    console.log(222);
    console.log("updatedict");
    console.log(ctx.request.body);
    ctx.body = {
      m:2
    };
  }
  static async deleteDict(ctx) { 
    console.log(333);
    console.log("updatedict");
    console.log(ctx.request.body);
    ctx.body = {
      m:3
    };
  }
  
  static async addDict(ctx) {}
}

export default DictController;
