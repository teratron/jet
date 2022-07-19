'use strict'

//const path = require('path')
import path from 'path'

const root = path.resolve(__dirname, '../')

module.exports = {
    root: root,
    src: path.resolve(root, 'src'),
    dist: path.resolve(root, 'dist'),
    app: path.resolve(root, 'app'),
    build: path.resolve(root, 'app', 'build'),
    public: path.resolve(root, 'app', 'public')
}
