function getCep(url){
    fetch(url)
        .then(res => res.json())
        .then(json => showContent(json))
}

function showContent(cep){
    localidade.value=cep.localidade
}

const cep = document.querySelector('#cep')
const localidade = document.querySelector('#loc')


cep.addEventListener('blur',function(event){
        getCep(`https://viacep.com.br/ws/${cep.value}/json/`)
    
})