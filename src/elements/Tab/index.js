
class TabElement extends HTMLElement {
    connectedCallback() {
        this.listener = this.showTab.bind(this);
        this.init();
    }

    disconnectedCallback() {
        this.navs.forEach(nav => nav.removeEventListener('click', this.listener));
    }

    showTab(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        const target = e.target.closest('tab-nav-item')._target;
        [...this.tabs, ...this.navs].forEach(el => {
            if (el._target === target) el.classList.add('active');
            else el.classList.remove('active');
        });
    }

    init() {
        this.navs = this.querySelectorAll('tab-nav-item');
        this.tabs = this.querySelectorAll('tab-content-item');
        this.navs.forEach(nav => nav.addEventListener('click', this.listener));
    }
}

customElements.define('tab-element', TabElement);

class TabNavigationItem extends HTMLElement {
    constructor() {
        super();
        this._target = null;
    }

    static get observedAttributes() {
        return ['target'];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(attr, prev, next) {
        if (prev !== next) {
            this[`_${attr}`] = next;
            this.render();
        }
    }

    render() {
        if (!this.ownerDocument.defaultView) return;
        this.innerHTML = `
         <a href="#${this._target}">${this._target}</a>
        `;
    }
}

customElements.define('tab-nav-item', TabNavigationItem);

class TabContentItem extends HTMLElement {
    constructor() {
        super();
        this._target = null;
        this._content = null;
    }

    static get observedAttributes() {
        return ['target', 'content'];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(attr, prev, next) {
        if (prev !== next) {
            this[`_${attr}`] = next;
            this.render();
        }
    }

    render() {
        if (!this.ownerDocument.defaultView) return;
        this.innerHTML = `
         <div>${this._content}</div>
        `;
    }
}

customElements.define('tab-content-item', TabContentItem);
