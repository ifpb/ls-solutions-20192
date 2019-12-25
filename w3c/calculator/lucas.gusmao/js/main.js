const display = document.querySelector('h1')
const buttons = Array.from(document.querySelectorAll("button"));

buttons.forEach(b => b.addEventListener("click", clique));
function clique(event) {
    let cont = event.target.innerHTML
    if (display.innerHTML == '0'){
        display.innerHTML = ''
    }
    if (cont == '='){
        display.innerHTML = eval(display.innerHTML)
    }
    if (display.innerHTML == 'undefined'){
        display.innerHTML = '0'
    }
    if (cont == 'AC'){
        display.innerHTML = '0'
    }
    if (cont == '+/-'){
        if(display.innerHTML == ''){
            display.innerHTML = '0'
        }else{
            display.innerHTML = eval('-1*'+display.innerHTML)
        }
    }
    if (cont == '%'){
        display.innerHTML = eval(display.innerHTML)/100
    }
    if ("0123456789+-X/".includes(cont)){
        if(cont == 'X'){
            display.innerHTML += '*'
        }else{
            display.innerHTML += cont
        }
    }
    if (cont == '.'){
        if(display.innerHTML == '' || display.innerHTML == '0.'){
            display.innerHTML = '0.'
        }else{
            display.innerHTML += cont
        }
    }
}