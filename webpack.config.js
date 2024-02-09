const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require ("path");


module.exports ={

    entry: './src/js/index.js',

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/bundle.js',
    },

    module: {
        rules: [
          {
            test: /\.(sass|css|scss)$/,
            use: [
              // Creates `style` nodes from JS strings
              MiniCssExtractPlugin.loader,
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: "images",
                },
              },
            ]
          },
              {
                test: /\.html$/i,
                loader: "html-loader",
              },
            ]
          },
      devServer: {
        contentBase: path.join(__dirname, "/dist"),
        port: 10000,
        overlay: true,//for errors
        writeToDisk: true,
        open:true
      
      },

    plugins: [
     
        new HtmlWebpackPlugin({
          template : './src/index.html',
          filename: 'index.html',
        }),
        new MiniCssExtractPlugin({filename: "css/style.css"}),
      ],
  
}