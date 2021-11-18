const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 开发环境
module.exports = Object.assign({},base,{
    mode: 'development', 
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
})