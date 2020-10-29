// const HtmlWebpackPlugin = require('html-webpack-plugin')
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpackmerge = require('webpack-merge')
const baseConfig = require('./base.config.js')

module.exports = webpackmerge.merge(baseConfig,{
  plugins:[
    new uglifyJsPlugin()
  ]
})
