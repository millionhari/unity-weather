const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    path.join(__dirname, '/client/index.js')
  ],
  output: {
    filename: 'build.bundle.js',
    path: path.join(__dirname, '/build'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        loaders: [ 'react-hot-loader', 'babel-loader' ]
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'client', 'scss'),
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  }
}
