* webpack5 asset自动处理图片

```rules
{
                test:/\.(jpg|png|gif)$/,
                type:"asset",
                //解析
                parser: {
                  //转base64的条件
                  dataUrlCondition: {
                    maxSize: 25 * 1024, // 25kb
                  }
                },
                generator:{ 
                  filename:'[name].[hash:6][ext]',
                  publicPath:'./img/',
                  outputPath:'./img'
                },
},
```

* 注意这里的 css-loader 应替换成 5.0.1 否则css和html的图片打包不能同时满足

```
npm install css-loader@5.0.1 -D
```



###	检验JS

* 安装 `npm i eslint-loader eslint exlint-config-airbnb-base eslint-plugin-import -D`

```package.json
"eslintConfig":{
    "extends":"airbnb-base"
  }
```

```webpack.config.js
{
                test:/\.js$/,
                exclude:/node_modules/,
                loader:"eslint-loader",
                options:{
                    fix:true
                }
},
```



###	安装服务器

* npm install -D webpack-dev-server
* webpack server