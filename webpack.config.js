const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
  devServer: {
      contentBase: path.resolve(__dirname, './dist'),
  },
  plugins: [
      new ExtractTextPlugin('bundle.css'),
      new CopyWebpackPlugin([
          { from: 'index.html', to: 'index.html' },
      ], {
          ignore: [
              // // Doesn't copy any files with a txt extension
              // '*.txt',
              //
              // // Doesn't copy any file, even if they start with a dot
              // '**/*',
              //
              // // Doesn't copy any file, except if they start with a dot
              // { glob: '**/*', dot: false }
          ],

          // By default, we only copy modified files during
          // a watch or webpack-dev-server build. Setting this
          // to `true` copies all files.
          copyUnmodified: true
      })
  ],
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
};
