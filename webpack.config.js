'use strict'

const dev = require('./config/app/webpack.dev')
const prod = require('./config/app/webpack.prod')

module.exports = (_env, argv) => {
    switch (argv.mode) {
        case 'none':
        case 'development':
            return dev
        case 'production':
            return prod
        default:
            throw new Error('No matching configuration was found!')
    }
}
