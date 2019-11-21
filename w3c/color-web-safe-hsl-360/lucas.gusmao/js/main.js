const colorsContainer = document.querySelector('.colors')
for(let i = 0; i < 360 ; i++){
    const color=`hsl(${i}, 50%, 50%`
    const colorView=`<div class=color style= "background-color: ${color} ">${i}</div>`
    colorsContainer.insertAdjacentHTML('beforeend',colorView)
}
