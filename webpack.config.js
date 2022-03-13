const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    //devtool: false,
    entry: './src/index.js', // default - /src/index.js
    output: {
        path: path.resolve(__dirname, "dist"), // default dist
        filename: "bundle.js" // main.js
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: 'svg-inline-loader'
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(js)$/i,
                use: "babel-loader"
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin()]
}