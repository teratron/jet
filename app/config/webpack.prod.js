'use strict'

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {merge} = require('webpack-merge')
const common = require('./webpack.common')
const semver = require('../../config/version')
const paths = require('../../config/paths')
// import MiniCssExtractPlugin from 'mini-css-extract-plugin'
// import {merge} from 'webpack-merge'
// import common from './webpack.common'
// import semver from '../../config/version'
// import paths from '../../config/paths'

const isBuildDev = process.env.NODE_ENV === 'build-dev'

const config = merge(
    common({
        styleLoader: MiniCssExtractPlugin.loader,
        isBuildDev: isBuildDev
    }),
    {
        mode: 'production',
        output: {
            path: paths.build,
            publicPath: 'auto',
            clean: true
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: pathData => pathData.chunk.name === 'theme'
                    ? 'static/css/[name].css'
                    : isBuildDev
                        ? 'static/css/[name].bundle.css'
                        : 'static/css/[name].[contenthash].bundle.css'
            })
        ],
        performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        }
    },
    isBuildDev
        ? {
            devtool: 'hidden-source-map',
            output: {
                filename: 'static/js/[name].bundle.js'
            }
        }
        : {
            devtool: 'source-map',
            output: {
                filename: 'static/js/[name].[contenthash].bundle.js'
            },
            plugins: [
                semver({
                    files: [paths.app + '/package.json']
                })
            ]
        }
)

module.exports = new Promise(resolve => {
    resolve(config)
})
