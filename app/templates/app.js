'use strict'

import fs from 'fs'
import packageJSON from '../package.json'

export const props = {
    title: 'Jettix',
    description: 'Web Framework etc.',
    keyword: 'web,framework,html,css,scss,js,javascript',
    publicURL: '',
    version: packageJSON.version,
    page: function () {
        let page = {}
        fs.readdirSync('./templates/pages')
            .filter(fileName => fileName.endsWith('.js'))
            .forEach(key => {
                key = key.replace(/.js/gi, '')
                let value = key
                if (key === 'index') value = 'home'
                page[key] = {
                    title: value.replace(/[_|-]/, ' ').trim(),
                    url: `./${key}.html`
                }
            })
        return page
    }()
}
