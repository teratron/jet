'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
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
            title: 'Production',
            filename: 'index.html',
            template: './public/index.html'
        }),
    ],
};