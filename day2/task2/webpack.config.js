const path = require('path');
// const BabiliPlugin = require('babili-webpack-plugin');

module.exports = {
  target: 'web',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/static/'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
  // plugins: [
  //   new BabiliPlugin({
  //     deadcode: true,
  //     mangle: true
  //   })
  // ]
};
