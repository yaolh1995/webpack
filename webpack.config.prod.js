const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base =require('./webpack.config.base.js')

module.exports = {
  ...base,
  mode: 'production',

  module: {
    rules: [{
      test: /\.css$/i,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            // you can specify a publicPath here
            // by default it uses publicPath in webpackOptions.output
            publicPath: '../',
            hmr: process.env.NODE_ENV === 'development',
          },
        },
        'css-loader',
      ],
    }, ],

  },
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    })
  ],
};