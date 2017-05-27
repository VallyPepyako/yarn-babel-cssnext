module.exports = {
  parser: 'sugarss',
  plugins: {
    'postcss-import': {},
    'cssnext': {},
    'autoprefixer': {
      browsers: ['last 2 versions', '> 5%'],
    },
    'cssnano': {}
  }
}
