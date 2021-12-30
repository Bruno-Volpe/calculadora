const display = document.querySelector('#display')
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let clickSinal = true
let egualClicked = false

document.addEventListener('click', (e) => {
    // Zera apos =, se o user digitar um numero
    if (e.target.id in numbers && egualClicked) {
        display.placeholder = e.target.id
        clickSinal = true
        egualClicked = false
        return
    }

    //Digita numero
    if (e.target.id in numbers) {
        display.placeholder += e.target.id
        clickSinal = true
        return
    }

    //Digita sinal
    if (display.placeholder.length > 0 && clickSinal && e.target.id != 'resolve') {
        clickSinal = false
        egualClicked = false
        display.placeholder += e.target.id
        return
    }

    if (e.target.id === 'resolve') {
        egualClicked = true
        clickSinal = true

        const result = eval(display.placeholder)
        display.placeholder = result
        return
    }
})

function clean() {
    const display = document.querySelector('#display')
    display.placeholder = ''
}

function cleanOne() {
    display.placeholder = display.placeholder.substring(0, display.placeholder.length - 1)
}
