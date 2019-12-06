const poke = document.querySelector(".pokedex")
let result = ""

for(const pokemon of pokemons){
    const coisa =`<div class="pokemon" data-name="${pokemon.name}" data-type="${pokemon.type}" tabindex="${pokemon.id}">
        <img src="img/${pokemon.name}.png" alt="${pokemon.name}">
        <h1 class="pokemon-name">${pokemon.name}</h1>
        <div class="pokemon-types">${pokemon.type}</div>
    </div>`
    result += coisa
}
poke.innerHTML = result