const buttons = document.querySelectorAll('button')
const mostra = document.querySelector('h1')
buttons.forEach(button => button.addEventListener('click',clicar))
function clicar(event){
    let target = event.target.innerHTML

    if(mostra.innerHTML === '0'){
        mostra.innerHTML = ''
    }
    if(target == "AC"){
        mostra.innerHTML = "0"
    }
    if (target == "="){
        mostra.innerHTML = eval(`${mostra.innerHTML.replace("x", "*")}`)
    }
    if("0123456789+-/".includes(target)){
        mostra.innerHTML += target
    }
    if(target == "X"){
        mostra.innerHTML += "x"
    }
    if(target == "+/-"){
        mostra.innerHTML = mostra.innerHTML * -1
    }
    if(target == "%"){
        mostra.innerHTML = mostra.innerHTML / 100
    }
    if(target == "."){
        mostra.innerHTML += "."
    }
} 