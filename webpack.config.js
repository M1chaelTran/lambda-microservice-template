var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    first: './functions/first.js',
    second: './functions/second.js'
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  externals: [
    'aws-sdk'
  ],
  target: 'node',
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
        drop_debugger: true
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: __dirname,
      exclude: /node_modules/,
    }]
  }
};
