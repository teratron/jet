import { props } from '../app'
import template from './blog.handlebars'

const context = {
    app: {
        ...props,
        title: props['title'] + ' - About'
    }
}

export default template(context)
