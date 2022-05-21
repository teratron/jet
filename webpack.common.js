
'use strict';
/*
const path = require('path');

module.exports = ({ outputFile, assetFile }) => ({
    entry: {
        app: "./src/app.js",
        sub: "./src/sub.js",
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: `${outputFile}.js`,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    fix: true,
                },
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(jpe?g|gif|png|svg|woff2?|ttf|ept)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: `${assetFile}.[ext]`,
                            outputPath: "images",
                            publicPath: "images",
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `${outputFile}.css`,
        }),
    ],
});*/
