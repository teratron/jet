'use strict'

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {merge} = require('webpack-merge')
const common = require('./webpack.common')
const semver = require('./version')
const paths = require('./paths')
// import MiniCssExtractPlugin from 'mini-css-extract-plugin'
// import {merge} from 'webpack-merge'
// import common from './webpack.common'
// import semver from './version'
// import paths from './paths'

const config = merge(
    common({
        styleLoader: MiniCssExtractPlugin.loader
    }),
    {
        mode: 'production',
        devtool: 'source-map',
        entry: {
            jettix: [
                paths.src + '/js/jettix.js',
                paths.src + '/scss/jettix.scss'
            ]
        },
        output: {
            filename: 'js/[name].bundle.js',
            path: paths.dist,
            publicPath: 'auto',
            clean: true
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'css/[name].bundle.css'
            }),
            semver({
                files: [paths.root + '/package.json']
            })
        ],
        performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        }
    }
)

module.exports = new Promise(resolve => {
    resolve(config)
})
