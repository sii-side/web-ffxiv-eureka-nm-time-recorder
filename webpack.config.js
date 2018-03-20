const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, './src/js/main.ts'),
  output: {
    path: path.resolve(__dirname, './docs'),
    filename: './js/bundle.js'
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './css/bundle.css'
    }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/index.ejs'
    })
  ],
  resolve: {
    extensions: [
      '.ts',
      '.js'
    ]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: './images/[name].[ext]',
            outputPath: './',
            publicPath: path => '.' + path
          }
        }
      },
      {
        test: /\.ejs$/,
        use: 'ejs-compiled-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'docs'),
    compress: true,
    open: 'Google Chrome',
    port: 9000
  }
}
