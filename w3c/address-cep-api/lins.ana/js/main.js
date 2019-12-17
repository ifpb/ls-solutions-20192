cep = document.querySelector('#cep')
addlocal = document.querySelector('#adlocal')


cep.addEventListener('blur', function () {
    getCEP(`https://viacep.com.br/ws/${cep.value}/json/`)
})

function getCEP(url) {
    fetch(url)
        .then(res => res.json())
        .then(json => showContent(json))
}

function showContent(cep) {
    addlocal.value = cep.localidade
}
