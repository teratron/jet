export const stress = () => `Web Framework`

function component() {
    const element = document.createElement('pre');

    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + 5
    ].join('\n\n');

    return element;
}

document.body.appendChild(component());