const valor = document.querySelector('#valor')
const ul = document.querySelector('.lista')

function incremento(){
    valor.value++
    gerar()
}

function decremento(){
    if (valor.value > 0){
        valor.value--
        gerar()
    }  
}

function gerar(){
    ul.innerHTML = ''
    for(let i=1; i<=valor.value; i++){
        ul.innerHTML += `<li>Item ${i}</li>`
    } 
}

document.addEventListener('keyup', (event)=>{
    if(event.key == 'Enter' && valor.value >= 0){
        gerar()
    }
})