const local = document.querySelector('#local')
const cep = document.querySelector('#cep')

cep.addEventListener('blur',function(){
    fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
      .then(res => res.json())
      .then(json => showContent(json))
  })
function showContent(self) {
    local.value = self.localidade
}
  