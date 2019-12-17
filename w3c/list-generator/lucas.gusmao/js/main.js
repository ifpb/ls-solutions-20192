let numerolinhas = document.querySelector('.quantity')
let botão = document.querySelector('button')
let lista = document.querySelector('.list')
botão.addEventListener('click', function(){
    for(let i = 1; i<=numerolinhas.value; i++){
        lista.insertAdjacentHTML('beforeend', `<li>Item ${i}</li>`)
    }
} ) 