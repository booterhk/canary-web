const merge = require('webpack-merge')
const {resolve} = require('path');
const webpack = require('webpack')
const baseConfig = require('./webpack.base')
const uglify = require('uglifyjs-webpack-plugin');
module.exports  = merge(baseConfig, {
    mode: "production",
    devtool: 'source-map',
    Plugins:[
      new webpack.HashedModuleIdsPlugin()
    ]
  })