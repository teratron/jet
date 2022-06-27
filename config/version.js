'use strict'

const SemverWebpackPlugin = require('semver-extended-webpack-plugin')
const paths = require('./paths')

const semver = new SemverWebpackPlugin({
    files: [paths.root + '/package.json'],
    incArgs: ['patch'],
    console: true,
    buildDate: true
})

module.exports = semver

