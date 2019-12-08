const cep = document.querySelector('#cep')
const local = document.querySelector('#loca')


function agate(a){
    local.value = a.localidade
}

cep.addEventListener('blur', () => {
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
        .then(res => res.json())
        .then(a => agate(a))
})