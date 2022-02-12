* npm初始化项目

`npm init --yes` 默认创建项目参数

* 安装包

`npm install jquery` -g 全局安装

* 移除包

`npm uninstall jquery`

* 查看包版本

`npm list jquery`

* 执行脚本

`npm run test` 执行test代表的命令

```json
{
  "name": "01part",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "dir"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

运行结果

```shell
PS F:\vuedemo\01part> npm run test

> 01part@1.0.0 test
> dir

 驱动器 F 中的卷是 资料
 卷的序列号是 1A85-D341

 F:\vuedemo\01part 的目录

2022/02/12  10:07    <DIR>          .
2022/02/12  10:07    <DIR>          ..
2022/02/12  10:04    <DIR>          node_modules
2022/02/12  10:04               199 package-lock.json
2022/02/12  10:07               180 package.json
2022/02/12  10:07               265 readme.md
               3 个文件            644 字节
               3 个目录 374,420,021,248 可用字节
```

