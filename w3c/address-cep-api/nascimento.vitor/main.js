const CampoCep = document.querySelector('#cep')
const CampoLoc = document.querySelector('#loc')
const CampoForm = document.querySelector('form')

CampoCep.addEventListener('blur', function(){
    getCEP(`https://viacep.com.br/ws/${cep.value}/json/`)
})

function getCEP(url) {
    fetch(url)
      .then(res => res.json())
      .then(json => showContent(json))
  }
  
  function showContent(cep) {
    CampoLoc.value = cep.localidade
  }
  
 