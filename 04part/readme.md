* 使用 style-loader 和 css-loader

`npm install style-loader css-loader -D`

* 支持less编译使用 less 和 less-loader

`npm i less less-loader -D`

* 支持sass编译使用 node-sass和sass-loader

`npm i node-sass sass-loader`

```
//将css插入到js中
module:{
        rules:[
            {test:/\.css/,use:['style-loader','css-loader']},
            {test:/\.less/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss/,use:['style-loader','css-loader','sass-loader']},
        ]
}
```

* 导出css单个文件使用插件

  `npm i mini-css-extract-plugin -D`

添加到插件

```
module:{
        rules:[
            {test:/\.css/,use:[MiniCssExtractPlugin.loader,'css-loader']},
            {test:/\.less/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss/,use:['style-loader','css-loader','sass-loader']},
        ]
},
plugins:[
        new MiniCssExtractPlugin({
            filename:"index.css"
        })
]
```



* 浏览器兼容性

`npm install postcss-loader postcss-preset-env -D`

```pastcss.config.js
module.exports = {
    plugins:[
        require('postcss-preset-env')()
    ]
}
```

```package.json
"browserslist":[
    "> 0.2%",
    "last 2 versions",
    "not dead"
  ]
```

```webpack.config.js
{test:/\.css/,use:[MiniCssExtractPlugin.loader,'css-loader','postcss-loader']},
```



* 压缩css使用插件

` npm i css-minimizer-webpack-plugin -D`

