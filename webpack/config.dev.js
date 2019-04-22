import merge from 'webpack-merge';
import webpack from 'webpack';
import baseConfig from './config.base';

export default env =>
  merge(baseConfig(env), {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
      contentBase: "./public",//本地服务器所加载的页面所在的目录
      historyApiFallback: true,//不跳转
      inline: true,//实时刷新
    }
  });
