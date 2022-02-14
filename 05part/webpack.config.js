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
            {
                test:/\.(woff|woff2|ttf)$/,
                type:"asset/resource",
                generator:{
                  filename:'[name].[hash:6][ext]',
                  publicPath:'./fonts/',
                  outputPath:'./fonts/'
                },
            },
            {test:/\.html$/,use:[{
                loader:'html-loader',
            }]},
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:"eslint-loader",
                options:{
                    fix:true
                }
            },
            {test:/\.css/,use:[{
                loader:MiniCssExtractPlugin.loader,
                options:{
                    esModule:false,
                    publicPath:'./img/'
                }
            },'css-loader']},
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
            filename:"index.css",
        }),
        new CssMinimizerWebpackPlugin()
    ]
}