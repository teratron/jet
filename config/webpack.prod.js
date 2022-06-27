'use strict'

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const paths = require('./paths')
const SemverWebpackPlugin = require('./version')

const config = merge(
    common({
        styleLoader: MiniCssExtractPlugin.loader
    }),
    {
        mode: 'production',
        devtool: 'source-map',
        output: {
            filename: 'static/js/[name].[contenthash].bundle.js',
            path: paths.build,
            publicPath: 'auto',
            clean: true
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'static/css/[name].[contenthash].bundle.css'
            }),
            SemverWebpackPlugin
        ],
        performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        }
    })

module.exports = new Promise(resolve => {
    resolve(config)
})
