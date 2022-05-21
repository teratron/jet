'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: "./src/index.js",
        vendor: './src/vendor.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            filename: 'index2.html',
            template: './public/index.html'
        }),
    ],
};