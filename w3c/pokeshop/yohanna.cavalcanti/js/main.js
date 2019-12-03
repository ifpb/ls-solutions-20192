const poke = document.querySelector('#pokemons')
const button = document.querySelector('.fa-chevron-up')
const car = document.querySelector('.cart-count')
let  result =' '
let count = 0
for(const pokemon of pokemons){
    const coisa = `<div class="pokemon-view">
        <img class="pokemon-view-img" src="${pokemon.img}" alt="${pokemon.name}">
        <span class="pokemon-view-name">${pokemon.name}</span>
        <span class="pokemon-view-price">R$ ${pokemon.price}</span>
        <button class="pokemon-view-shop">COMPRAR</button>
   </div>`
   result += coisa
}
poke.innerHTML = result
const buttonCompra = document.querySelectorAll('button')
button.addEventListener('click',function(){
    window.scrollTo({
        behavior: 'smooth',
        top: 0,
        left: 0
      })
})
Array.from(buttonCompra).forEach(btn => {
    btn.addEventListener('click',function(){
        count+=1
        car.innerHTML = count
    })
})
