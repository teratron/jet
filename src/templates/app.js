'use strict'

import fs from 'fs'
import packageJSON from '../../package.json'

export const props = {
    title: 'Jet',
    description: 'Web Framework etc.',
    keyword: 'html,css,sass,scss,js,javascript',
    publicURL: '',
    version: packageJSON.version,
    pages: fs.readdirSync('./src/templates/pages')
        .filter(fileName => fileName.endsWith('.js'))
        .map(page => page.replace(/.js/gi, ''))
}
