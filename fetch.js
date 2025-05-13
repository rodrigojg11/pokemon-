export const pokemon = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`)
  const data = await res.json()
  return data;
  console.log(game_indices);
};
