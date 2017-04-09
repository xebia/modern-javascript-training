const path = require('path');
// const BabiliPlugin = require('babili-webpack-plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',
  entry: './main.js',
  // entry: './solution/main.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/static/'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    // new BabiliPlugin({
    //   deadcode: true,
    //   mangle: true
    // })
    new HtmlwebpackPlugin({
      title: 'Day2/Task2'
    })
  ]
};
