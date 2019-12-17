const alturaElemento = document.querySelector('input[name=altura]')
const pesoElemento = document.querySelector('input[name=peso]')
const sexoElemento = document.querySelector('input:checked')
const warning = document.querySelector('#warning')
const imcElemento = document.querySelector('#imc')
const button = document.querySelector('button')

const back = {
    'Abaixo do Peso': 'border border-warning bg-warning text-white'
}



const border = {
    'Abaixo do Peso': 'border border-warning bg-warning text-white',
    'Peso Normal': 'border border-sucess bg-success text-white',
    'Marginalmente Acima do Peso': 'border border-warning bg-warning text-white',
    'Acima do Peso Ideal': 'border border-warning bg-warning text-white',
    'Obeso': 'border border-danger bg-danger text-white'
}

const warningAlert = 
`<div class="alert alert-warning" role="alert">
    <strong>Informe o peso e/ou a altura corretamente.</strong>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>`

function calcImc (alt, peso, sexo){
    let imc = peso/alt**2 || 0
    console.log(imc)
    let resultado = ''

    if (sexo === 'feminino'){
        if (imc < 19.1)
            resultado = 'Abaixo do Peso'
        else if (imc < 25.8)
            resultado = 'Peso Normal'
        else if (imc < 27.3)
            resultado = 'Marginalmente Acima do Peso'
        else if (imc < 32.3)
            resultado = 'Acima do Peso Ideal'
        else
            resultado = 'Obeso'
    }
    else{
        if (imc < 20.7)
            resultado = 'Abaixo do Peso'
        else if (imc < 26.4)
            resultado = 'Peso Normal'
        else if (imc < 27.8)
            resultado = 'Marginalmente Acima do Peso'
        else if (imc < 31.1)
            resultado = 'Acima do Peso Ideal'
        else
            resultado = 'Obeso'
    }
    return resultado
}

function valida(altura, peso){
    return !(isNaN(altura) || altura == 0 || isNaN(peso) || peso == 0)
}

button.addEventListener('click', function() {
    calculadoraDeIMC()
})

document.addEventListener('keyup', (event) => {
    inputs = Array.from(document.querySelectorAll('.form-control'))

    if (event.key == 'Escape'){
        inputs.map(i => i.value = "")
        imcElemento.setAttribute('class', 'form-control form-control-lg')
    }
    else if (event.key == 'Enter') {
        calculadoraDeIMC()
    }
})

function esconderMensagem(){
    warning.innerHTML = ''
    imcElemento.className = 'form-control form-control-lg text-black'
}

function exibirMensagem(){
    warning.innerHTML = warningAlert
    imcElemento.className = 'form-control form-control-lg'
}

function calculadoraDeIMC(){
    let altura = alturaElemento.value
    let peso = pesoElemento.value
    let sexo = sexoElemento.value
    if (valida(peso, altura)){
        result = calcImc(altura,peso, sexo)
        esconderMensagem()
        imcElemento.setAttribute('class', `${border[result]}`)
        imcElemento.value = result
    }
    else{
        exibirMensagem()
    }    
}



