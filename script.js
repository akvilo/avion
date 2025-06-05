const header = document.querySelector('.header')

const opacityWindow = document.getElementById('opacity-window')
const opacityShow = () => opacityWindow.style.display = 'flex';
const opacityHidden = () => opacityWindow.style.display = 'none';
const buttonExit = document.getElementById('button-exit')

function windowHidden() {
    const dataName = 'data-window'
    const dataValue = 'true'
    let dataObject = Array.from(document.querySelectorAll('*')).filter(el =>
        el.getAttribute(dataName) === dataValue
    );
    let indexObject = dataObject[0]
    document.getElementById(`${indexObject.id}`).remove()
    opacityHidden()
}

opacityWindow.onclick = () => windowHidden()

document.addEventListener('keydown', function(event) {
    if (event.code === 'Escape') {
        windowHidden()
    }
})

let shop = document.querySelector('.shop')
let productPage = document.querySelector('.product')
let cart
