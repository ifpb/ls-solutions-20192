const cep = document.querySelector('#cep')
const local = document.querySelector('#local')

function getCEP(url) {
    fetch(url)
      .then(res => res.json())
      .then(json => showContent(json))
}
  
function showContent(cep) {
    local.value = cep.localidade
}

cep.addEventListener('blur', function (event) {
    getCEP(`https://viacep.com.br/ws/${cep.value}/json/`)
})
