const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CleanWebpackPlugin = require('clean-webpack-plugin'); // 指南写法有误
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js",
    print: "./src/print.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "管理输出"
    })
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/'
  }
};
