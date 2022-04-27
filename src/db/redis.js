import redis from "redis";
const client = redis.createClient(6379, "127.0.0.1");
function get(key) {
  return new Promise((resolve, reject) => {
    client.get(key, (err, val) => {
      err && reject(err);

      try {
        resolve(JSON.parse(val));
      } catch (error) {
        resolve(error);
      }
    });
  });
}
function set(key, value) {
  return new Promise((resolve, reject) => {
    if (typeof value === "object") {
      JSON.stringify(value);
    } else if (value === undefined) {
      reject("value不能为undefined");
    }
    client.set(key, value, (err, replay) => {
      err && reject(err);
      resolve(replay);
    });
  });
}

export { set, get };
