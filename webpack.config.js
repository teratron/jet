'use strict'

const dev = require('./config/webpack.dev')
const prod = require('./config/webpack.prod')

module.exports = (_env, args) => {
    switch (args.mode) {
        case 'none':
        case 'development':
            return dev
        case 'production':
            return prod
        default:
            throw new Error('No matching configuration was found!')
    }
}
