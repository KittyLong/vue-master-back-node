import jwt from 'jsonwebtoken'
// uuid唯一性动态加密token
import config from '../config.js'

//返回一个token
let privateKey = config.jwt.secret;
let expiresIn = config.jwt.exprisesIn;
//返回一个token
export default (data) => {
    const token = jwt.sign(
         data,
         privateKey,
         {expiresIn});
    return token;
};