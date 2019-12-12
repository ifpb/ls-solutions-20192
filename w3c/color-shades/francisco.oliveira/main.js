const view = document.querySelector('.colors')

for(i in shade){
    const shadeview0 = `<div class = "shade">${i}</div>`
    view.insertAdjacentHTML('beforeend', shadeview0)
    for(cor of shade[i]){
        const shadeview = `<div class = "color" style = "background-color: ${cor.color}">
        <div>${cor.name}</div>
        <div>${cor.color}</div>
        </div>`
        view.insertAdjacentHTML('beforeend', shadeview)
    }
}