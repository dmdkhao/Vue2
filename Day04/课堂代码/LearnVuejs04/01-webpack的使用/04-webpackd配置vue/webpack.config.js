const path = require('path')

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
  }

};