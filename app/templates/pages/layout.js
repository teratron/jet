'use strict'

import {props} from '../app'
import template from './layout.hbs'

const context = {
    ...props,
    title: props['title'] + ' - Layout'
}

export default template(context)
