'use strict'

const { merge } = require('webpack-merge')
const common = require('./config/webpack.common')
const paths = require('./config/paths')

const dev = require('./config/webpack.dev')
const prod = require('./config/webpack.prod')

module.exports = (_env, argv) => {
    let config
    if (argv.mode === 'development') {
        dev.then((r) => {
            config = r
        })
    }

    if (argv.mode === 'production') {
        prod.then((r) => {
            config = r
        })
    }

    return config;
};
