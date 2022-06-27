'use strict'

import fs from 'fs'
import packageJSON from '../../package.json'

export const props = {
    title: 'Jettix',
    description: 'Web Framework etc.',
    keyword: 'html,css,scss,js,javascript',
    publicURL: '',
    version: packageJSON.version,
    pages: fs.readdirSync('./app/templates/pages')
        .filter(fileName => fileName.endsWith('.js'))
        .map(page => page.replace(/.js/gi, ''))
}
