const number1 = document.querySelector('#number1')
const number2 = document.querySelector('#number2')
const result = document.querySelector('#result')

const addiction = document.querySelector('#addition')
const soustraction = document.querySelector('#soustraction')
const multiplication = document.querySelector('#multiplication')
const division = document.querySelector('#division')

addiction.addEventListener('click', sum)
soustraction.addEventListener('click', soustract)
multiplication.addEventListener('click', multi)
division.addEventListener('click', divide)

function sum() {
    return result.innerHTML = Number(number1.value) + Number(number2.value)
}

function soustract() {
    return result.innerHTML = Number(number1.value) - Number(number2.value)
}

function multi() {
    return result.innerHTML = Number(number1.value) * Number(number2.value)
}

function divide() {
    return result.innerHTML = Number(number1.value) / Number(number2.value)
}

