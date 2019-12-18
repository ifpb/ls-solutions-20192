const text = document.querySelector('.text')
const buttons = document.querySelectorAll('button')

buttons.forEach(b => b.addEventListener('click', (event) => {
        let target = event.target.innerHTML
        text.innerHTML = ''
        
        if (target === 'Lowercase'){
            text.value = text.value.toLowerCase()
        }

        else if (target === 'Uppercase'){
            text.value = text.value.toUpperCase()
        }

        else if (target === 'Capitalize'){
            text.value = capitalize()
        }

        else if (target === 'Snake case'){
            text.value = snake()
        }

        else if (target === 'Reverse'){
            text.value = reverse()
        }

        else if (target === 'Contar caracteres'){
            text.value = text.value.length 
        }

        else if (target === 'Contar palavras'){
            text.value = text.value.split(' ').length
        }

        else{
            text.value = text.value.split('\n').length || 0
        }
    })
);

function capitalize(){
    let palavras = text.value.split(' ')
    let result = []
    for (i of palavras){
        let first = i[0].toUpperCase()
        let resto = i.substr(1).toLowerCase()
        result.push(first + resto)
    }
    return result.join(' ')
}

function snake(){
    let palavras = text.value.split(' ')
    return palavras.join('_')
}

function reverse(){
    let palavras = text.value.split('')
    return palavras.reverse().join('')
}