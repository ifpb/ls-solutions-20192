const colorContainer = document.querySelector('.colors')

fetch('data/shades.json')
    .then(res => res.json())
    .then(shades => {
        for(const i in shades){
            const head = `<div class="head">${i}</div>`
            colorContainer.insertAdjacentHTML('beforeend', head)

            for (const color of shades[i]){
                console.log(color)
                const colorView = `<div class="color" style="background-color: ${color.color}">
                    <div class="name">${color.name}</div>
                    <div>${color.color}</div>
                </div>`
                colorContainer.insertAdjacentHTML('beforeend', colorView)
            }
        }
    })
