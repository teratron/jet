'use strict';

const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const SemverWebpackPlugin = require('semver-extended-webpack-plugin');

//console.log(webpack)

module.exports = {
    mode: 'development', // "production" | "development" | "none"
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'static/js/[name].bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    modules: false
                                },
                            ],
                        ],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
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
                test: /\.(scss|sass)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            /*{
                test: /\.svg$/,
                use: 'file-loader'
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            mimetype: 'image/png'
                        },
                    },
                ],
            },*/
            {
                test: /\.(jpe?g|gif|png|svg)$/i,
                //type: 'asset/resource',
                //use: 'file-loader',
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: `[name].[ext]`,
                            outputPath: "static/media",
                            publicPath: "public",
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Development",
            filename: 'index.html',
            template: './public/index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                //{from: "public/*.ico", to: "[name][ext]"}
                {from: 'public/**/*'}
            ],
        }),
        new SemverWebpackPlugin({
            files: [path.resolve(__dirname, 'package.json')],
            incArgs: ["patch"],
            console: true,
            buildDate: true
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        /*watchOptions: {
            ignored: /node_modules/,
        },*/
        port: 9000,
        compress: true,
        hot: true,
    },
};
