import * as data from "./database/pokemon_db.json";

export const maxNumQue = 10;

export const pokemonInformation = data.default;

export const generatePokemonList = (
  regionList,
  isMegaEvolution,
  isSameStatus,
  isBeforeEvolution
) => {
  let pokemonList = pokemonInformation;
  if (regionList.length > 0) {
    pokemonList = pokemonList.filter((item) =>
      regionList.includes(item.region)
    );
  }
  if (!isMegaEvolution) {
    pokemonList = pokemonList.filter((item) => !item.isMegaEvolution);
  }
  if (!isSameStatus) {
    pokemonList = pokemonList.filter((item) => !item.isSameStatus);
  }
  if (!isBeforeEvolution) {
    pokemonList = pokemonList.filter((item) => item.isFinal);
  }
  return pokemonList;
};

export const randomPokemonList = (
  regionList,
  isMegaEvolution,
  isSameStatus,
  isBeforeEvolution
) => {
  const pokemonList = generatePokemonList(
    regionList,
    isMegaEvolution,
    isSameStatus,
    isBeforeEvolution
  );
  let randomPokemon = [];
  for (let i = 0; i < maxNumQue; i++) {
    const rand = Math.floor(Math.random() * pokemonList.length);
    randomPokemon.push(pokemonList[rand]);
    pokemonList.splice(rand, 1);
  }
  return randomPokemon;
};
