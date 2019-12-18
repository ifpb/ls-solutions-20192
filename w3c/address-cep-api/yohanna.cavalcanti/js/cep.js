input = document.querySelector(".text")
localidade = document.querySelector('p')
  input.addEventListener('blur',function(){
    b = input.value
    getCEP(`https://viacep.com.br/ws/${b}/json/`)
  })
  function getCEP(url) {
    fetch(url)
      .then(res => res.json())
      .then(json => showContent(json))
  }
  
  function showContent(cep) {
    localidade.innerHTML = cep.localidade
  }

