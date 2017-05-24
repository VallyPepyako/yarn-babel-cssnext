const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
      contentBase: path.resolve(__dirname, './src'),
  },
  plugins: [
      new CopyWebpackPlugin([
          { from: 'index.html', to: 'dist/index.html' },
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
  ]
};
