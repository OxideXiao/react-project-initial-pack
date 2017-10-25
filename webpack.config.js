const path = require("path");
const webpack = require("webpack");

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');
const extractLESS = new ExtractTextPlugin('stylesheets/[name]-two.css');
// 导入配置文件
//const config = require("./config");
//const publicPath = config.publicPath;

module.exports = function(env){
  return{
    // 入口文件：src目录下的 main.js
    entry:{
      main: './src/entry.js'//path.resolve(__dirname,"../src/entry.js"),
    },
    // 输出配置
    output: {
      path: path.resolve(__dirname,"dist/webpack"),
      filename: "output.js",
      publicPath: '/dist/webpack'
    },
    resolve: {
      extensions: [".js", ".json", ".less"],
      modules: ["node_modules"]
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: extractCSS.extract([ 'css-loader', 'postcss-loader' ])
        },
        {
          test: /\.less$/i,
          use: extractLESS.extract([ 'css-loader', 'less-loader' ])
        },
        {
          test: /(\.jsx|\.js)$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ['es2015', 'react'],
            }
          },
          exclude: /node_modules/
        }
      ],
      loaders: [{
        test: /\.(png|jpg)$/,
        loader: 'url?limit=8192'
      }, {
        test: /\.tpl$/,
        loader: 'html'
      }, {
        test: /\.json$/,
        loader: 'json'
      }]
    },
    plugins: [
      extractCSS,
      extractLESS
    ]
  }
}
