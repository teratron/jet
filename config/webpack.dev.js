'use strict'

const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const paths = require('./paths')

module.exports = merge(common, { // TODO:
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: paths.build,
        port: 9000,
        historyApiFallback: true,
        compress: true,
        open: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    'autoprefixer'
                                ]
                            }
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    }
})
