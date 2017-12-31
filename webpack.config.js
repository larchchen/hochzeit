module.exports = {
  entry: './client-react/entry.js',
  output: {
    filename: './public/javascripts/bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.js|jsx$/,
      loader: 'babel-loader',
      query: {
        presets:['es2015', 'react']
      }
    }]
  },
  watch: true
};
