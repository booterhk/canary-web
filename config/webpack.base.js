const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')

const website = {
  publicPath: 'http://localhost:8080'
}
module.exports = {
  entry: {
    main: './src/main.js',
    main2: './src/main2.js'
  },
  output: {
    path: resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.(jpg|png|gif|jpeg)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 500
            }
          }
        ]
      }
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
    new extractTextPlugin('css/index.css')
  ]
}