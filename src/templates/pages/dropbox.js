'use strict'

import {props} from '../app'
import template from './dropbox.hbs'

const context = {
    ...props,
    title: props['title'] + ' - Dropbox'
}

export default template(context)
