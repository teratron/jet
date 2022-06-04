'use strict'

// const { merge } = require('webpack-merge')
// const common = require('./config/webpack.common')
// const paths = require('./config/paths')

const dev = require('./config/webpack.dev')
const prod = require('./config/webpack.prod')

module.exports = (_env, args) => {
    let config
    if (args.mode === 'development') {
        dev.then((r) => {
            config = r
        })
    }

    if (args.mode === 'production') {
        prod.then((r) => {
            config = r
        })
    }
    switch (args.mode) {
        case 'none':
        case 'development':
            return //merge(commonConfig, developmentConfig);
        case 'production':
            return //merge(commonConfig, productionConfig);
        default:
            throw new Error('No matching configuration was found!');
    }

    //return config;
};
