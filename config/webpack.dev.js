'use strict'

const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const paths = require('./paths')

module.exports = merge(common('style-loader'), {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: paths.build,
        port: 9000,
        historyApiFallback: true,
        compress: true,
        open: true,
        hot: true
    }
})
