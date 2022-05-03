# 用 node 简单写一个后台 vue-master-back-

1.service controller调用方法得实现只做简单增删改查
2.controller 处理所有请求并做一些校验工作比如登陆
3.router 请求路由得接收并调用controller
4.数据库设计(具体需要根据业务需求来,我这只是简单设计使用)
  1.sys_user:user_id,user_name,password,email,sex,phone,del_flag,user_type,status,creat_by,role_id(可再写一个表user_role),(time暂时不加比如登陆时间，修改时间等)
  2.sys_role:role_id,role.name,role_key,status,del_flag(time同上)
  3.sys_menu:menu_id,menu_name,parent_id,path,vue_path(前端路径),menu_type(父子级，功能,功能另写一个表比较好,我这里数据比较少,写到一个表里面),icon,status,del_flag(time等同上)
  4.sys_right:user_id,menu_id(记录user得菜单权限，功能权限)
  5.sys_dict:dict_code,dict_value,dict_type,status
  6.后面根据业务自己另建，比如员工管理后台:加部门，职位表，打卡表等

# 遇到的问题

1.Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
mysql 密码校验机制问题
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
或者
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';

2.ctx.request.body获取不到值
koa-bodyparser中间件要放在路由前面