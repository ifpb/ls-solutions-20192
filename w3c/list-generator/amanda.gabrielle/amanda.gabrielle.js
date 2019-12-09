const button = document.querySelector('button')
const input = document.querySelector('input')
const lista = document.querySelector('ul')

button.addEventListener('click', function(event){
    event.preventDefault();
    listgenerator()
})

function listgenerator(){
    let result = ''
    const quantidade = input.value;
    for (let i = 1; i<=quantidade; i++)
        result+=`<li>Item ${i}</li>`;
    lista.innerHTML = result
    
}