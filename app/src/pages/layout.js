'use strict'

import {props} from '../templates/app.js'
import template from './layout.hbs'

const arrGrid = []
for (let i = 1; i <= 12; i++) arrGrid.push(i)

const context = {
    ...props,
    title: props['title'] + ' - Layout',
    debugGrid: arrGrid
}

export default template(context)
