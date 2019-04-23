const merge = require('webpack-merge')
const {resolve} = require('path');
const baseConfig = require('./webpack.base')
const uglify = require('uglifyjs-webpack-plugin');
module.exports  = merge(baseConfig, {
    mode: "development",
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      contentBase: resolve(__dirname, '../dist'),
      host: 'localhost',
      compress: true,
      // port: 8080,
      open: true,
      hot: true,
    },
    plugins: [
      new uglify()
    ]
  })