const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './app'),
  entry: {
    app: './scripts/app.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'scripts/bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [{
      test: /\.css$/,
      exclude: /node_modules/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'postcss-loader',
            options: {
              plugins: (loader) => [
                require('autoprefixer')(),
                require('postcss-import-url'),
                require('postcss-import')(),
                require("postcss-custom-properties")({preserve: true}),
                // sass like mix-in
                require('postcss-mixins')(),
                require("postcss-custom-media")(),
                require('postcss-simple-vars')(),
                require('postcss-nested')(),
              ]
            }
          }
        ]
      })
    }],
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src/scripts'),
        loader: 'babel-loader',
        // Options to configure babel with
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0'],
        }
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin("styles/app.css"),
    new CopyWebpackPlugin([
      {
        from: 'index.html', to: 'index.html'
      },
    ],{
      ignore: [
        // // Doesn't copy any files with a txt extension
        // '*.txt',
        // // Doesn't copy any file, even if they start with a dot
        // '**/*',
        // // Doesn't copy any file, except if they start with a dot
        // { glob: '**/*', dot: false }
      ],
      // By default, we only copy modified files during
      // a watch or webpack-dev-server build. Setting this
      // to `true` copies all files.
      copyUnmodified: false
    }),
  ],
};
