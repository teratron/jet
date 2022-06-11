'use strict'

import {props} from '../app'
import template from './dropdown.hbs'

const context = {
    ...props,
    title: props['title'] + ' - Dropdown'
}

export default template(context)
