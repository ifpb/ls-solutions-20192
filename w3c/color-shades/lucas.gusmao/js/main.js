const view = document.querySelector('.colors')
for(i in shade){
    view.insertAdjacentHTML('beforeend', `<div class = "shade">${i}</div>`)
    for(color of shade[i]){
        view.insertAdjacentHTML('beforeend', `
        <div class = "color" style = "background-color: ${color.color}">
            <div>${color.name}</div>
            <div>${color.color}</div>
        </div>`)
    }
}