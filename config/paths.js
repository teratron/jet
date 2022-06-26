'use strict'

const path = require('path')

module.exports = {
    root: path.resolve(__dirname, '../'),
    src: path.resolve(__dirname, '../src'),
    dist: path.resolve(__dirname, '../dist'),
    build: path.resolve(__dirname, '../build'),
    app: path.resolve(__dirname, '../app'),
    public: path.resolve(__dirname, '../app/public')
}
