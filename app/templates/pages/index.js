'use strict'

import {props} from '../app'
import template from './index.hbs'

const context = {
    ...props,
    title: props['title'] + ' - Home',
    //page: props['page'].filter(fileName => fileName.title !== 'index')
}

export default template(context)
