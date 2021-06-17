var button = document.querySelector('button')
var model = document.querySelector('.model-box')

button.onclick = () => {
    console.log('mr me')
    if (model.classList.contains('open')) {
        model.classList.remove('open')
    } else {
        model.classList.add('open')
    }
    
}

window.onclick = (event) => {
    if (event.target !== model && event.target !== button) {
        model.classList.remove('open')
    }
}