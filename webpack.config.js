//const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
//const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
const webpack = require('webpack'); //to access built-in plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'node',
  entry: {
    index: './src/index.js',
    app: {
      dependOn: 'index',
      import: './src/index.js',
    }
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: 'css-loader'
      },
      {
        test: /\.txt$/,
        use: ['raw-loader',
          {
            loader: path.resolve('./loader/myloader.js'),
            options: {
              "name": 'Luis'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]

}