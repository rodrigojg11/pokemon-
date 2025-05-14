import { searchPokemons } from "./fetch.js";
const pokemons = document.getElementById("pokemons");
const {results} = await searchPokemons()
// console.log(results);

const extractPokemon = async (url) => {
  const res = await fetch(url)
  const data = await res.json()
  console.log(data.sprites.front_default);
  const {sprites: {front_default}} = data;
  insertDom(front_default)
}

results.forEach( result =>  extractPokemon(result.url) );

const insertDom = (pokemonUrl) => {
  const cardPokemon = `
    <div class="pokemon col-4">
      <img src="${pokemonUrl}"
    </div>
  `
pokemons.insertAdjacentHTML("beforeend", cardPokemon);
}
