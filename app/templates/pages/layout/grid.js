'use strict'

import {props} from '../../app'
import template from './grid.hbs'

const arrGrid = []
for (let i = 1; i <= 12; i++) arrGrid.push(i)

const context = {
    ...props,
    title: props['title'] + ' - Grid',
    debugGrid: arrGrid
}

export default template(context)
