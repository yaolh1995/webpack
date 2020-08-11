var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js', //路径名



  plugins: [new HtmlWebpackPlugin({
      title: 'webpack',
      template: 'src/index.html'
    }),
  ],

  output: {
    filename: 'index.[contenthash].js'
  },
};