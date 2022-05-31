class Jet extends HTMLElement {
    constructor(...props) {
        super();
        // элемент создан
        this.params = props
        this.jetElement = this
    }

    // браузер вызывает этот метод при добавлении элемента в документ

    // массив имён атрибутов для отслеживания их изменений
    static get observedAttributes() {
        return []
    }

    // браузер вызывает этот метод при удалении элемента из документа

    // (может вызываться много раз, если элемент многократно добавляется/удаляется)
    connectedCallback() {

    }

    // (может вызываться много раз, если элемент многократно добавляется/удаляется)
    disconnectedCallback() {

    }

    // вызывается при изменении одного из перечисленных выше атрибутов
    attributeChangedCallback(name, oldValue, newValue) {

    }

    // вызывается, когда элемент перемещается в новый документ
    // (происходит в document.adoptNode, используется очень редко)
    adoptedCallback() {

    }

    // сообщим браузеру, что <my-element> обслуживается нашим новым классом
    then() {
        customElements.define("my-element", this.jetElement);
    }

    render(...params) {

    }
}

// сообщим браузеру, что <my-element> обслуживается нашим новым классом
customElements.define("my-element", Jet);

export default Jet
export {}