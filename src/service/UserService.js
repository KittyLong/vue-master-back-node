import { insert, select, update } from "../methods/mysql.js";
const table = "user";

function insertInfo(params, values, callback) {
  insert(table, params, values, function (rows) {
    callback(rows);
  });
}
function selectInfo(params = [], values = [], callback) {
  select(table, params, values, function (rows) {
    callback(rows);
  });
}

export { insertInfo, selectInfo };
