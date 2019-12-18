const poke = document.querySelector('#pokemons')
let result = ''
for(const pokemon of pokemons){
  const res = `<div class="pokemon-view">
    <img class="pokemon-view-img" src= ${pokemon.img} alt="Bulbasaur">
    <span class="pokemon-view-name">${pokemon.name}</span>
    <span class="pokemon-view-price">${pokemon.price}</span>
    <button class="pokemon-view-shop">COMPRAR</button>
  </div>`
  result += res
}

poke.innerHTML = result

button = document.querySelector('.fa-chevron-up')
button.addEventListener('click', function() {
    window.scrollTo({
        behavior: 'smooth',
        top: 0,
        left: 0
      })
  })

