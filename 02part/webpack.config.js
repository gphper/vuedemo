const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/*
 * @Description: 
 * @Author: gphper
 * @Date: 2022-02-12 14:51:34
 */
module.exports = {
    mode:'production',
    
    // 输出一个chunk 一个bundle
    // entry:[
    //     './src/index.js',
    //     './src/main.js'
    // ],

    // 多入口多出口
    // entry:{
    //     one:'./src/index.js',
    //     two:'./src/main.js'
    // }
    // output:{
    //     filename:"[name].js",
    //     path:resolve(__dirname,'build')
    // }, //输出路径

    entry:'./src/index.js', //入口文件

    output:{
        filename:"build.js",
        path:resolve(__dirname,'build')
    }, //输出路径
    
    module:{
        rules:[]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            filename:"demo.html",
            minify:{
                collapseWhitespace:true,
                removeComments:true
            }
        }),
    ]
}