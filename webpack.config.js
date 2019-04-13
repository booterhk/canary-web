module.export = {
  entry: {
    app: './src/index.js',
    // vendors: './src/vendors.js'
  },
  output: {
    filename: 'index.js',
    path: __dirname + '/dist'
  }
}