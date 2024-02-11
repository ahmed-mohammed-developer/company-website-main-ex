const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require ("path");


module.exports ={

    entry: './src/js/index.js',

    output: {
        path: path.join(__dirname, 'build'),
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
            test: /\.(svg|eot|woff|woff2|ttf)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: "fonts",
                },
              },
            ]
          },
              {
                test: /\.html$/i,
                loader: "html-loader",
              },
              {
                test: require.resolve("jquery"),
                loader: "expose-loader",
                options: {
                  exposes: ["$", "jQuery"],
                },
              },
            ],
          },
          devServer: {
            static: {
              directory: path.join(__dirname, ' build'),
            },
            compress: true,
            port: 9000,
           open: true,
            devMiddleware: {
              writeToDisk: true,
            },
          },

    plugins: [
     
        new HtmlWebpackPlugin({
          template : './src/index.html',
          filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
          template : './src/projects.html',
          filename: 'projects.html',
        }),
        new HtmlWebpackPlugin({
          template : './src/project-detalis.html',
          filename: 'project-detalis.html',
        }),
        new MiniCssExtractPlugin({filename: "css/style.css"}),
      ],
  
}