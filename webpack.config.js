const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),

  entry: {
    app: './scripts/app.js',
  },
  output: {
    path: path.resolve(__dirname, './dist/scripts'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader?importLoaders=1!postcss-loader'
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
  ],
};
