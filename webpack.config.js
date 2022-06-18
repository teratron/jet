'use strict'

const dev = require('./config/webpack.dev')
const prod = require('./config/webpack.prod')

module.exports = (_env, argv) => {
    switch (argv.mode) {
        default:
        case 'development':
            return dev
        case 'production':
            return prod
    }
}
