'use strict'

import {props} from '../app'
import template from './select.hbs'

const context = {
    ...props,
    title: props['title'] + ' - Select'
}

export default template(context)
