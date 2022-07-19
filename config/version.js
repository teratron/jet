'use strict'

const SemverWebpackPlugin = require('semver-extended-webpack-plugin')
const paths = require('./paths')

module.exports = props => new SemverWebpackPlugin({
    files: props.files ? props.files : [paths.root + '/package.json'],
    incArgs: ['patch'],
    console: true,
    buildDate: true
})
