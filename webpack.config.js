'use strict'

const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SemverWebpackPlugin = require('semver-extended-webpack-plugin')

module.exports = {
    mode: 'development', // "production" | "development" | "none"
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'static/js/[name].bundle.js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    modules: false
                                }
                            ]
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-syntax-dynamic-import'
                        ]
                    }
                }
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
                                    'autoprefixer'
                                ]
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
                type: 'asset/inline',
                use: 'file-loader'
            },
            {
                test: /\.(?:ico|gif|png|jpe?g)$/i,
                type: 'asset/resource',
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'static/media',
                            publicPath: 'public'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        //new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public'),
                    globOptions: {
                        ignore: [
                            '**/*.DS_Store',
                            '**/*.html'
                        ]
                    },
                    noErrorOnMissing: true
                }
            ]
        }),
        new HtmlWebpackPlugin({
            title: 'Development',
            filename: 'index.html',
            template: './public/template.html'
        }),
        new SemverWebpackPlugin({
            files: [path.resolve(__dirname, 'package.json')],
            incArgs: ["patch"],
            console: true,
            buildDate: true
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        port: 9000,
        compress: true,
        hot: true
    }
}
