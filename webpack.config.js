const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    //devtool: false,
    entry: './src/index.js', // default - /src/index.js
    output: {
        path: path.resolve(__dirname, "dist"), // default dist
        filename: "main.[contenthash].js" // main.js
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: 'svg-inline-loader'
            },
            {
                test: /\.scss$/i,
                use: [
                    "style-loader", // 3. Inject styles into DOM
                    "css-loader",   // 2. Turns css into commonjs
                    "sass-loader"   //1. Turns sass into css
                ]
            },
            {
                test: /\.(js)$/i,
                use: "babel-loader"
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'src/index.html'
    })]
}