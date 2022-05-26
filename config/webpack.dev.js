'use strict'

const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const paths = require('./paths')

const config = merge(common({ styleLoader: 'style-loader' }), {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: 'static/js/[name].bundle.js'
    },
    devServer: {
        static: paths.build,
        contentBase: paths.build,
        port: 9000,
        overlay: {
            warnings: true,
            errors: true
        },
        clientLogLevel: 'silent',
        historyApiFallback: true,
        compress: true,
        open: true,
        hot: true
    }
})

module.exports = new Promise((resolve) => {
    resolve(config)
})
