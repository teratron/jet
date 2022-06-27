'use strict'

const SemverWebpackPlugin = require('semver-extended-webpack-plugin')
const paths = require('./paths')

module.exports = new SemverWebpackPlugin({
    files: [paths.root + '/package.json'],
    incArgs: ['patch'],
    console: true,
    buildDate: true
})
