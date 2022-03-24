const path = require("path");
const common = require("./webpack.common");
 const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: 'images/[name].[hash][ext][query]'
    },
    optimization: {
        minimize: false,
    },
    devServer: {
        port: 9000,
        hot: true,
        watchFiles: ['dist/**/*'],
        liveReload: true,
        devMiddleware: {
            writeToDisk: true,
        },
    }
});