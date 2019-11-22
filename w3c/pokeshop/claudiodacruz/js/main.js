const listaPokemon = document.querySelector('#pokemons')

for (pokemon in pokemons){

    result = `${pokemon['img']} ${pokemon['name']} ${pokemon['price']}`;
    listaPokemon.insertAdjacentHTML('beforeend', result);
}