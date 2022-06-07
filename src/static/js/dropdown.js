

const dropdown = {
    active: 0,
    items: [
        '111',
        '222',
        '333',
        '444'
    ]
}

class Dropdown {
    constructor(active = 0, items = []) {
        this.active = active
        this.items = items
        //this.listener = this.showTab.bind(this)
        this.init()
    }

    /*showTab(e) {
        e.preventDefault()
        e.stopImmediatePropagation()
        const target = e.target
        console.log('target: ', target)
    }*/

    init() {
        //console.log('init: ', this.active + 5)
        //console.log('init: ', this.items)
        this.render()
    }

    render() {
        //let abbr = document.createElement('abbr')
        //document.body.appendChild(abbr)
    }
}

let a = new Dropdown(0, ['111', '222', '333'])
console.log(a);


let dr = document.getElementsByClassName('dropdown')
//console.log(dr)
for (const key in dr) {
    if (Object.hasOwnProperty.call(dr, key)) {
        const element = dr[key];
        console.log(key, element.getElementsByClassName('dropdown-item'));

        element.addEventListener('click', e => {
            console.log(e.target.innerText)
        })
        //element.innerHTML = key
    }
}

/*for (const iterator of dr) {
    console.log(iterator);

}*/

