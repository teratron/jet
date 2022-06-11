'use strict'

import {props} from '../app'
import template from './index.hbs'

const context = {
    ...props,
    title: props['title'] + ' - Home',
    pages: props['pages'].filter(fileName => fileName !== 'index')
}

export default template(context)
