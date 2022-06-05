import { props } from '../app'
import template from './button.handlebars'

const context = {
    app: {
        ...props,
        title: props['title'] + ' - Button'
    }
}

export default template(context)
