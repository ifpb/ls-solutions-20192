const pokemons = document.querySelector('#pokemons')
const carrinho = document.querySelector('.cart-count')
const nav = document.querySelector('.nav-top')

fetch('./data/pokeshop.json')
    .then(res => res.json())
    .then(json => start(json))
function insert(pokemon) {
    let add = `<div class="pokemon-view">
        <img class="pokemon-view-img" src="${pokemon.img}" alt="${pokemon.name}">
        <span class="pokemon-view-name">${pokemon.name}</span>
        <span class="pokemon-view-price">R$ ${pokemon.price}</span>
        <button class="pokemon-view-shop">COMPRAR</button>
    </div>`
    return add
}

function start(json) {
    json.forEach(poke => {
        pokemons.insertAdjacentHTML('beforeend', insert(poke))
    });
    const comprar = Array.from(document.querySelectorAll('button'))

    comprar.forEach(btn => btn.addEventListener('click', () => {
        carrinho.className = 'cart-count'
        carrinho.innerHTML = Number(carrinho.innerHTML) + 1
    }))

    nav.addEventListener('click', () => {
        window.scrollTo({
            behavior: 'smooth',
            top: 0,
            left: 0
        })
    })

    document.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight * 1 / 3) {
            nav.className = 'nav-top'
        } 
        else {
            nav.className = 'nav-top hidden'
        }
    })
}