const path = require('path');
const webpack = require('webpack');
module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './scripts/app.js',
  },
  output: {
    path: path.resolve(__dirname, './dist/scripts'),
    filename: 'bundle.js',
  },
};
