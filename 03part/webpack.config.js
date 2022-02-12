const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/*
 * @Description: 
 * @Author: gphper
 * @Date: 2022-02-12 14:51:34
 */
module.exports = {
    mode:'development',
    

    // 多入口多出口
    entry:{
        vendor:['./src/js/jquery.js','./src/js/comm.js'],
        list:'./src/js/list.js',
        detail:'./src/js/detail.js'
    },

    output:{
        filename:"[name].js",
        path:resolve(__dirname,'build')
    }, //输出路径
    
    module:{
        rules:[]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/list.html",
            filename:"list.html",
            chunks:['vendor','list'],
            minify:{
                collapseWhitespace:true,
                removeComments:true
            }
        }),
        new HtmlWebpackPlugin({
            template:"./src/detail.html",
            filename:"detail.html",
            chunks:['vendor','detail'],
            minify:{
                collapseWhitespace:true,
                removeComments:true
            }
        }),
    ]
}