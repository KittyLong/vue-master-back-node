# 用 node 简单写一个后台 vue-master-back-node

# 遇到的问题

1.Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
mysql 密码校验机制问题
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456';
或者
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
