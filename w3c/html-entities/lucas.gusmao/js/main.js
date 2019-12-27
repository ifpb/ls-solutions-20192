const container = document.querySelector('.entities')
for (let entity in entities){
    container.insertAdjacentHTML('beforeend', `
    <div class="box">
        <div class="caracter">${entity}</div>
        <div class="name">${entity.replace('&', '&amp')}</div>
    </div>`)
}
