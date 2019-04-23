const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: './src/main.js',
    main2: './src/main2.js'
  },
  output: {
    path: resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        {loader: 'style-loader'},
        {loader: 'css-loader'}
      ]
    },
  ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: `公寓运营平台`,
      hash: true,
      minify: {
        removeAttributeQuotes: true
      }
    }),
  ]
}