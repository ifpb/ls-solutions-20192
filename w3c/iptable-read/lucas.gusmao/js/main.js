const Button = document.querySelector('button')
const valorip = document.querySelector('#ip')
const valormask = document.querySelector('#mask')
const valorversao = document.querySelector('#version')
const tabela = document.querySelector('.table tbody')

Button.addEventListener('click', function(event){
    event.preventDefault()
    tabela.insertAdjacentHTML("beforeend",`
    <tr>
        <td>${valorip.value}</td>
        <td>${valormask.value}</td>
        <td>${valorversao.value}</td>
    </tr>`)
    valorip.value =''
    valormask.value =''
    valorversao.value =''
})