'use strict'

import {props} from '../app'
import template from './reset.hbs'

const context = {
    ...props,
    title: props['title'] + ' - Reset'
}

export default template(context)
