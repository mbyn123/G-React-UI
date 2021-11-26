const path = require("path");

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
    entry: { // 项目的入口文件
        index: './lib/index.tsx'
    },
    output: { // 项目的输出打包文件
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'g-react-ui', // 项目名称
        libraryTarget: 'umd' // 使用的库规范格式，umd 是 commjs（Node.jS模块规范） 和 amd（浏览器模块规范）的统一
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            { // 配置tsx文件解析所需要的loader
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /icons.+\.svg$/,
                loader: 'svg-sprite-loader',
            },
            {
                test: /\.s([ac])ss$/,
                loader:['style-loader','css-loader','sass-loader'], 
                // 配置会从右向左执行，sass-loader将xxx.scss转换为字符串，css-loader将字符串转换为对象，style-loader会将对象变成 style标签，插入到head标签中
            },
        ]
    },
}