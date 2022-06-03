'use strict'

class Jet extends HTMLElement {
    constructor(...props) {
        super();
        // элемент создан
        this.props = props
        this.jetElement = this
    }

    // браузер вызывает этот метод при добавлении элемента в документ
    // (может вызываться много раз, если элемент многократно добавляется/удаляется)
    connectedCallback() {

    }

    // браузер вызывает этот метод при удалении элемента из документа
    // (может вызываться много раз, если элемент многократно добавляется/удаляется)
    disconnectedCallback() {

    }

    // массив имён атрибутов для отслеживания их изменений
    static get observedAttributes() {
        return []
    }

    // вызывается при изменении одного из перечисленных выше атрибутов
    attributeChangedCallback(name, oldValue, newValue) {

    }

    // вызывается, когда элемент перемещается в новый документ
    // (происходит в document.adoptNode, используется очень редко)
    adoptedCallback() {

    }

    // у элемента могут быть ещё другие методы и свойства

    // сообщим браузеру, что <my-element> обслуживается нашим новым классом
    then() {
        customElements.define("my-element", this.jetElement);
    }

    render(...props) {

    }
}

// сообщим браузеру, что <my-element> обслуживается нашим новым классом
customElements.define("my-element", Jet);

class JetButton extends HTMLElementButton {

}

export default Jet
export { JetButton }
