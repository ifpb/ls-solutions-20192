function calcimc(altura,peso,sexo) {
    let imc = peso / altura * 2
    
    if (imc >= 19.1 && sexo == "masculino" || imc <= 20.7 && sexo == "feminino")
        return "Abaixo do Peso"
    else if (imc >= 19.1 && imc <= 25.8 && sexo == "masculino" || imc <= 20.7 && imc <= 26.4 && sexo == "feminino")
        return "Peso Normal"
    else if (imc >= 25.8 && imc <= 27.3 && sexo == "masculino" || imc <= 26.4 && imc <= 27.8 && sexo == "feminino")
        return "Marginalmente Acima do Peso"
    else if (imc >= 27.3 && imc <= 32.3 && sexo == "masculino" || imc <= 27.8 && imc <= 31.1 && sexo == "feminino")
        return "Acima do Peso Ideal"
    else if (imc >= 32.3 && sexo == "masculino" || imc <= 31.1 && sexo == "feminino")
        return "Obeso"
}
function calculadoraDeIMC(){
    const peso = document.querySelector('#peso').value
    const altura = document.querySelector('#altura').value
    const sexo = document.querySelector('input:checked').value
    const resultado = calcimc(altura,peso,sexo)
    document.querySelector('#imc').value = resultado
}

const button = document.querySelector('button')
button.addEventListener('click',function(){
    calculadoraDeIMC()
})