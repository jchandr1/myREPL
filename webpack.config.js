const path = require('path');

const webpackConfig = {
  entry: path.resolve(__dirname, './client/main.js'),
  output: {
    path: path.resolve(__dirname, './compiled'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
webpackConfig.module.loaders.push({
  test: /\.js[x]?$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  options: { presets: ['es2015', 'react'] },
});

module.exports = webpackConfig;