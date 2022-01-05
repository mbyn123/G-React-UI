const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 开发环境
module.exports = Object.assign({},base,{
    mode: 'development',
    entry: { // 项目的入口文件
        index: './example.tsx'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'G-React-UI',
            template: 'index.html'
        })
    ],
})