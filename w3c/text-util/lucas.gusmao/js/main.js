
const text = document.querySelector('textarea')
const buttons = document.querySelectorAll('button')
buttons.forEach(addEventListener('click',function(event){
    let comando = event.target.innerHTML
    if(comando == 'Lowercase'){
        text.value = text.value.toLocaleLowerCase()
    }
    if(comando == 'Uppercase'){
        text.value = text.value.toLocaleUpperCase()
    }
    if(comando == 'Capitalize'){
        text.value = capitalize()
    }
    if(comando == 'Snake Case'){
        text.value = text.value.split(" ").join("_")
    }
    if(comando == 'Reverse'){
        text.value = text.value.split('').reverse().join('')
    }
    if(comando == 'Character count'){
        text.value = text.value.length 
    }
    if(comando == 'Word count'){
        text.value = text.value.split(' ').length
    }
    if(comando == 'Line count'){
        text.value = text.value.split('\n').length
    }
}))
function capitalize(){
    let palavras = text.value.split(' ')
    let resultado = []
    for (i of palavras){
        let a = i[0].toUpperCase()
        let b = i.substr(1).toLowerCase()
        resultado.push(a + b)
    }
    return resultado.join(' ')
}