const quantidade = document.querySelector('.quantity')
const lista = document.querySelector('.list')
const botao = document.querySelector('button')

botao.addEventListener('click', function(){
    let quant = quantidade.value 
    let print = ''
    for(let i = 0; i < quant; i++){
        print += `<li> Item ${i+1}</li>`
    }
    lista.innerHTML = print
})