const listaPokemon = document.querySelector('#pokemons')

for (pokemon of pokemons){
    result = `<div class="pokemon-view">
    <img class="pokemon-view-img" src="${pokemon.img}" alt="Bulbasaur">
    <span class="pokemon-view-name">${pokemon.name}</span>
    <span class="pokemon-view-price">R$ ${pokemon.price}</span>
    <button class="pokemon-view-shop">COMPRAR</button>
  </div>`;
    listaPokemon.insertAdjacentHTML('beforeend', result);
}