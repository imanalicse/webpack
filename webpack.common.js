const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
                template: 'src/index.html'
        })
    ],
    module: {
        rules: [
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
            {
                 test: /\.html$/i,
                 use: ["html-loader"],
            },
            {
            test: /\.(svg|png|jpe?g|gif)$/i,
            use: [
              {
                 loader: 'file-loader',
                  options: {
                    name: "[name].[hash].[ext]",
                    outputPath: "imgs"
                  }
              },
            ],
          },
        ]
    }
}