'use strict'

import {props} from '../templates/app.js'
import template from './index.hbs'

const context = {
    ...props,
    title: props['title'] + ' - Home'
}

export default template(context)
