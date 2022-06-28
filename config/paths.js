'use strict'

const path = require('path')
const root = path.resolve(__dirname, '../')

module.exports = {
    root: root,
    src: path.resolve(root, 'src'),
    dist: path.resolve(root, 'dist'),
    build: path.resolve(root, 'build'),
    app: path.resolve(root, 'app'),
    public: path.resolve(root, 'app', 'public')
}
