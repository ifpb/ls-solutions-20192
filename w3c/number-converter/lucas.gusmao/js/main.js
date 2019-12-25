const hexa = document.querySelector('#hexadecimal')
const deci = document.querySelector('#decimal')
const octa = document.querySelector('#octal')
const bin = document.querySelector('#binary')
const hexabt = document.querySelector('#converterHex')
const decibt = document.querySelector('#converterDec')
const octabt = document.querySelector('#converterOct')
const binbt = document.querySelector('#converterBin')

binbt.addEventListener('click',function(evento){
    evento.preventDefault()
    hexa.value = converterNumber(bin.value, 2, 16)
    octa.value = converterNumber(bin.value, 2, 8)
    deci.value = converterNumber(bin.value, 2, 10)
})

octabt.addEventListener('click',function(evento){
    evento.preventDefault()
    hexa.value = converterNumber(octa.value, 8, 16)
    deci.value = converterNumber(octa.value, 8, 10)
    bin.value = converterNumber(octa.value, 8, 2)
})

decibt.addEventListener('click',function(evento){
    evento.preventDefault()
    hexa.value = converterNumber(deci.value, 10, 16)
    octa.value = converterNumber(deci.value, 10, 8)
    bin.value = converterNumber(deci.value, 10, 2)
})

hexabt.addEventListener('click',function(evento){
    evento.preventDefault()
    deci.value = converterNumber(hexa.value, 16, 10)
    octa.value = converterNumber(hexa.value, 16, 8)
    bin.value = converterNumber(hexa.value, 16, 2)
})
function converterNumber(value, from, to) {
    return parseInt(value, from).toString(to)
  }