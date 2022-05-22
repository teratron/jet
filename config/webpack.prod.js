'use strict';

const SemverWebpackPlugin = require('semver-extended-webpack-plugin');
//const CopyWebpackPlugin = require('copy-webpack-plugin');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
//const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {merge} = require('webpack-merge');
const common = require('./webpack.common');
const paths = require('./paths');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        //path: paths.build,
        filename: 'static/js/[name].[contenthash].bundle.js',
        //publicPath: '',
        //clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: false,
                            modules: false,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('autoprefixer')
                                ],
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
        ],
    },
    plugins: [
        //new CleanWebpackPlugin(),
        /*new CopyWebpackPlugin({
            patterns: [
                {
                    from: paths.public,
                    globOptions: {
                        ignore: [
                            '**!/!*.DS_Store',
                            '**!/!*.html',
                        ],
                    },
                    noErrorOnMissing: true,
                },
            ],
        }),
        new HtmlWebpackPlugin({
            title: 'Stress',
            template: paths.public + '/template.html',
            filename: 'index.html',
        }),*/
        new SemverWebpackPlugin({
            files: [paths.root + '/package.json'],
            incArgs: ['patch'],
            console: true,
            buildDate: true
        }),
    ],
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
});
