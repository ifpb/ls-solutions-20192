const container = document.querySelector('.entities')

for (let entity in entities){
    const aux = `<div class="box">
        <div class="caracter">${entity}</div>
        <div class="name">${entity.replace('&', '&amp')}</div>
    </div>`
    container.insertAdjacentHTML('beforeend', aux)
}