import Handlebars from 'handlebars'

import template from './select.hbs'
//import './select.scss'

/*let select = document.getElementsByClassName('select')
//console.log(dr)
for (const key in select) {
    if (Object.hasOwnProperty.call(select, key)) {
        const element = select[key];
        console.log(key, element.getElementsByClassName('dropdown-item'));

        element.addEventListener('click', e => {
            console.log(e.target.innerText)
        })
        //element.innerHTML = key
    }
}*/

//console.log(template({}))

export default Handlebars.compile(template({}))