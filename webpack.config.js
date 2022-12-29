var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const outputPath = path.resolve(__dirname, 'dist');
console.log('CodeSajilo output path:::', outputPath)
module.exports = {
    mode: 'development',
    entry: {
        mainFile: "./src/index.js"
    },
    output: {
        path: outputPath,
        filename: '[name].js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "CodeSajilo Webpack App",
            filename: "index.html",
            template: "public/index.html"
        })
    ],
    devServer: {
        port: 9000,
        hot: true
    },
    devtool: 'source-map'
}