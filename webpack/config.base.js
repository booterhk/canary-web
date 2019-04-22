const {resolve} = require('path')
module.exports = {
  context: resolve(__dirname, '../'),
  devtool: 'eval-source-map',
  entry: __dirname + './app/main.js',
  output: {
    path: __dirname + './public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
    ]
  }
}