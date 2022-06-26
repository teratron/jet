'use strict'

import {props} from '../app'
import template from './button.hbs'

const context = {
    ...props,
    title: props['title'] + ' - Button'
}

export default template(context)
