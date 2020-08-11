var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
          loader: "style-loader" // 将 JS 字符串生成为 style 节点
      }, {
          loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
      }, {
          loader: "sass-loader" ,
          options:{
            implementation: require('dart-sass')
          }// 将 Sass 编译成 CSS
      }]
    }]
  },
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