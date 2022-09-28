/* eslint-disable linebreak-style */
/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable indent */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'lib',
      type: 'umd',
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
         template: './src/index.html',
     }),

  ],
  mode: 'development',
};
