'use strict'

import Handlebars from 'handlebars'

Handlebars.registerHelper(
    'ToUpperCase',
    aString => {
        return aString.toUpperCase()
    }
)
