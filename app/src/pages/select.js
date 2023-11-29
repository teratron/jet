'use strict'

import {props} from '../templates/app.js'
import template from './select.hbs'

const context = {
    ...props,
    title: props['title'] + ' - Select'
}

export default template(context)
