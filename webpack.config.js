const path = require("path");
const webpack = require("webpack");
const devServer = require("webpack-dev-server");
const UglifyJS = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('stylesheets/[name].css', {allChunks: true});
const extractLESS = new ExtractTextPlugin('stylesheets/[name].min.css', {allChunks: true});
// 导入配置文件
//const config = require("./config");
//const publicPath = config.publicPath;

const env = 'daliy';  // production

defaultPlugin = [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(env),
    }
  }),
  extractCSS,
  extractLESS,
  new HtmlWebpackPlugin({
    template: path.join(__dirname, "src/index.html"),
    inject: true,
  }),
  new webpack.HotModuleReplacementPlugin(),
];
if (env === 'production') {
  const Uglify = new UglifyJS({
    uglifyOptions: {
      compress: {
        warnings: false,
        comparisons: false,
        drop_console: false,
      },
      output: {
        comments: false,
        ascii_only: false,
      },
      sourceMap: true,
    }
  });
  defaultPlugin.push(Uglify);
}

module.exports = function(env){
  return{
    devtool: 'source-map',  // todo dev
    // 入口文件：src目录下的 main.js
    entry:{
      'main': './src/entry.js'//path.resolve(__dirname,"../src/entry.js"),
    },
    // 输出配置
    output: {
      path: path.resolve(__dirname,"dist/webpack"),
      filename: "[name].js",
      publicPath: '/'
    },
    resolve: {
      extensions: ['.js', '.jsx'],
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
              presets: ['es2015', 'react', 'stage-0'],
            }
          },
          exclude: /node_modules/
        },
        {
          test: /\.(html)$/,
          use: {
            loader: 'html-loader',
          }
        }
      ],
      loaders: [{
        test: /\.(png|jpg)$/,
        loader: 'url?limit=8192'
      }],
    },
    plugins: defaultPlugin,
    devServer: {
      historyApiFallback: true,  // todo 后端支持
      inline: true,
      contentBase: path.join(__dirname, "dist/webpack"),
      hot: true,
      port: 8081,
      compress: false,
    }
  }
};
