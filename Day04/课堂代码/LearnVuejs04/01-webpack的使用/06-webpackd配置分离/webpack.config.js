const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.vue$/i,
        use: ['vue-loader']
      }
    ],
  },
  resolve: {
    alias:{
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
      new webpack.BannerPlugin('最终版权归ddk所有'),
      new HtmlWebpackPlugin({
        template: "index.html",
      }),
      new UglifyjsWebpackPlugin()
  ],
  devServer: {
    contentBase: './dist',
    inline: true
  }

};