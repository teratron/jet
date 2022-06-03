import {props} from '../app'
import template from './index.handlebars'

const context = {
    app: {
        ...props,
        title: props['title'] + ' - Home'
    }
}

export default template(context)
