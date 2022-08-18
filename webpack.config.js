// const path = require("path");

// module.exports = {
//   entry: { index: path.resolve(__dirname, "source", "index.js") }
// }

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// module.exports = {
//     output: {
//       path: path.resolve(__dirname, "build")
//     }
//   };

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
         template: './src/index.html',
     }),

  ],
  mode: 'development'
};
