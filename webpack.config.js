var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = mode => ({
  mode: mode,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'news.js'
  },
  module: {
    rules: [
    { 
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader' 
    },
    { 
      test: /\.css$/, 
      loader: 'css-loader' 
    },
  ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    compress: true,
    port: 9000
  },
});
