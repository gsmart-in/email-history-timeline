const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/script/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          'sass-loader'
        ]
      })
    }]
  },
  devServer: {
     contentBase: './docs'
  },
  plugins: [
    new ExtractTextPlugin('css/styles.css'),
    new CopyPlugin([
        'src/index.html'
      ])
  ]
};