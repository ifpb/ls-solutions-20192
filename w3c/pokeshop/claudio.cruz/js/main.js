const listaPokemon = document.querySelector('#pokemons')
const topLista = document.querySelector('.nav-top')
const pokemonQuant = pokemons.length
const heigthPage = window.innerHeight


for (pokemon of pokemons){
    result = `<div class="pokemon-view">
    <img class="pokemon-view-img" src="${pokemon.img}" alt="Bulbasaur">
    <span class="pokemon-view-name">${pokemon.name}</span>
    <span class="pokemon-view-price">R$ ${pokemon.price.toFixed(2)}</span>
    <button class="pokemon-view-shop">COMPRAR</button>
    </div>`;
    listaPokemon.insertAdjacentHTML('beforeend', result);
    if (top.innerHeight >= (heigthPage)/3){
      topLista.innerHTML =
        `<svg class="fa-chevron-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
        </svg>`
    }
}
topLista.addEventListener('click', function(event){
  window.scrollTo({
  behavior: 'smooth',
  top: 0,
  left: 0
  })
})

var comprarPokemon = document.querySelectorAll('button')
var carroCompras = document.querySelector('.cart-count')
var cont = 0

for (escolhido of comprarPokemon){
  escolhido.addEventListener('click', function(event){
    cont++
    carroCompras.innerHTML = cont
    console.log(escolhido)
    console.log(cont)
  })
}