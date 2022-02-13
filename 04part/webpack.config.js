const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin")
/*
 * @Description: 
 * @Author: gphper
 * @Date: 2022-02-12 14:51:34
 */
module.exports = {
    mode:'production',

    entry:'./src/index.js', //入口文件

    output:{
        filename:"build.js",
        path:resolve(__dirname,'build')
    }, //输出路径
    
    module:{
        rules:[
            {test:/\.css/,use:[MiniCssExtractPlugin.loader,'css-loader','postcss-loader']},
            {test:/\.less/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss/,use:['style-loader','css-loader','sass-loader']},
        ]
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
        new MiniCssExtractPlugin({
            filename:"index.css"
        }),
        new CssMinimizerWebpackPlugin()
    ]
}