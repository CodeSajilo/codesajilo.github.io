var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const outputPath = path.resolve(__dirname, 'dist');

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
            },
            {
                test: /.nep$/,
                // use: {
                //     loader: path.resolve('./config/cs-loader.js')
                // }
                use: ['cs-loader']
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