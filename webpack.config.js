const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const SemverWebpackPlugin = require('semver-extended-webpack-plugin');

const config = {
    mode: "development", // "production" | "development" | "none"
    entry: {
        index: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        chunkFilename: "[id].[name].bundle.js",
        publicPath: "auto",
        //clean: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    "postcss-loader"
                ]
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.svg$/,
                use: "file-loader"
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            mimetype: "image/png"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        //new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development',
            filename: "index.html",
            template: "./public/index.html"
        }),
        new SemverWebpackPlugin({
            files: [path.resolve(__dirname, "package.json")],
            incArgs: ["patch"],
            console: true,
            buildDate: true
        }),
        new CopyWebpackPlugin({
            patterns: [
                //{from: "public/*.ico", to: "[name][ext]"}
            ],
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "dist")
        },
        port: 9000,
        historyApiFallback: true,
        compress: true,
        https: false,
        hot: true
    }
};

module.exports = config;
