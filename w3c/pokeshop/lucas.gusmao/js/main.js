const listaPokemon = document.querySelector('#pokemons')
const botãotopo = document.querySelector('.nav-top')
const pokemonQuant = pokemons.length
const heigthPage = window.innerHeight
var carrinho = document.querySelector('.cart-count')
var count = 0

for (pokemon of pokemons){
    result = `<div class="pokemon-view">
    <img class="pokemon-view-img" src="${pokemon.img}" alt="Bulbasaur">
    <span class="pokemon-view-name">${pokemon.name}</span>
    <span class="pokemon-view-price">R$ ${pokemon.price.toFixed(2)}</span>
    <button class="pokemon-view-shop">COMPRAR</button>
    </div>`;
    listaPokemon.insertAdjacentHTML('beforeend', result);
}
var botoescompra = document.querySelectorAll('button')

for (escolhido of botoescompra){
  escolhido.addEventListener('click', () =>{
    count++
    carrinho.innerHTML = count
  })
}
document.addEventListener('scroll', () =>{
  if (window.scrollY > window.innerHeight * 1 / 3) {
      botãotopo.className = 'nav-top'
  } 
  else {
      botãotopo.className = 'nav-top hidden'
  }
})
botãotopo.addEventListener('click', () =>{
    window.scrollTo({
    behavior: 'smooth', top: 0, left: 0
  })
})

