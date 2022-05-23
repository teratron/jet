'use strict'

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const SemverWebpackPlugin = require('semver-extended-webpack-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const paths = require('./paths')

module.exports = merge(common({ styleLoader: MiniCssExtractPlugin.loader }), {
    mode: 'production',
    devtool: 'source-map',
    output: {
        filename: 'static/js/[name].[contenthash].bundle.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash].bundle.css'
        }),
        new SemverWebpackPlugin({
            files: [paths.root + '/package.json'],
            incArgs: ['patch'],
            console: true,
            buildDate: true
        })
    ],
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
})
