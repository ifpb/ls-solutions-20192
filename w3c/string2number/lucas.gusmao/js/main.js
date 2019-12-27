
const string = document.querySelector('#string')
const num = document.querySelector('#number')
const hexabt = document.querySelector('#str-hex')
const decbt = document.querySelector('#str-dec')
const octalbt = document.querySelector('#str-oct')
const binbt = document.querySelector('#str-bin')

function converte(str, base) {
  return str
    .split('')
    .map(char => char.charCodeAt().toString(base))
    .join(' ')
}
hexabt.addEventListener('click', function(event) {
  event.preventDefault()
  num.value = converte(string.value, 16)
})

decbt.addEventListener('click', function (event) {
  event.preventDefault()
  num.value = converte(string.value, 10)
})

octalbt.addEventListener('click', function(event) {
  event.preventDefault()
  num.value = converte(string.value, 8)
})

binbt.addEventListener('click', function(event) {
  event.preventDefault()
  num.value = converte(string.value, 2)
})