const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
    entry: {
        vendor: './src/vendor.js',
        main: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'images/[name].[hash][ext][query]'
    },
    plugins: [
        new HtmlWebpackPlugin({
                template: 'src/index.html'
        }),
        new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader, // 3. Extract css into files
                    //"style-loader", // 3. Inject styles into DOM
                    "css-loader",   // 2. Turns css into commonjs
                    "sass-loader"   //1. Turns sass into css
                ]
            },
            {
                test: /\.(js)$/i,
                use: "babel-loader"
            },
            {
                 test: /\.html$/i,
                 use: ["html-loader"],
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                type: 'asset/resource'
          },
        ]
    }
}