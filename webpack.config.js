var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');


module.exports = mode => ({
  mode: mode,
  entry: {
    news: './src/News/index.js',
    welcome: './src/Welcome/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
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
      use: [
        { loader: "style-loader" },
        { loader: "css-loader" }
      ]
    },
  ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'news.html',
      template: './src/News/index.html',
      chunks: ['news'],
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/Welcome/index.html',
      chunks: ['welcome'],
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    compress: true,
    port: 9000
  },
});
