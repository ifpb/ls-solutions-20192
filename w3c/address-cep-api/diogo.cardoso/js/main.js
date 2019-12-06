const cep = document.getElementById('cep')
const rua = document.getElementById('street')
const numero = document.getElementById('number')
const neighborhood = document.getElementById('neighborhood')
const estado = document.getElementById('state')
const cidade = document.getElementById('city')
const cepError = document.getElementById('cepError')

function getCEP(url) {
    fetch(url)
        .then(res => res.json())
        .then(json => showContent(json))
        .catch(() => showErro())
}

function showContent(cep) {
    cepError.setAttribute('class', 'hidden')
    rua.value = cep.logradouro
    street.value = cep.logradouro
    
    neighborhood.value = cep.bairro
    estado.value = cep.uf
    cidade.value = cep.localidade 

    numero.focus()
}

function showErro(){
    cep.setAttribute('class', 'input-cep-error')
    cepError.removeAttribute('class', 'hidden')
}

function cleanErro(){
    cepError.setAttribute('class', 'hidden')
    cep.removeAttribute('class', 'input-cep-error')
}

cep.addEventListener('focus', () => {
    cleanErro()
})

cep.addEventListener('blur', () => {
    if (cep.value != ''){
        getCEP(`https://viacep.com.br/ws/${cep.value}/json/`)
    }
    else{
        rua.value = ''
        street.value = ''
        neighborhood.value = '' 
        estado.value = ''
        cidade.value = '' 
    }
})
