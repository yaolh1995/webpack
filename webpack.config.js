var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.js',//路径名


      devtool: 'inline-source-map',
       devServer: {
          contentBase: './dist'
      },git
/*       module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
        
      }, */
      plugins: [new HtmlWebpackPlugin({
        title:'webpack',
        template:'src/index.html'
    })],
    plugins: [new MiniCssExtractPlugin()],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },
    output: {
        filename: 'index.[contenthash].js'
      },
    };
