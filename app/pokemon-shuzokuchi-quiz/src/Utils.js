import * as data from "./database/pokemon_db.json";

export const maxNumQue = 10;

export const pokemonInformation = data.default;

export const generatePokemonList = (
  regionList,
  isOnlyFinal,
  isRemoveSameStatus
) => {
  let pokemonList = pokemonInformation;
  if (regionList.length > 0) {
    pokemonList = pokemonList.filter((item) =>
      regionList.includes(item.region)
    );
  }
  if (isOnlyFinal) {
    pokemonList = pokemonList.filter((item) => item.isFinal);
  }
  if (isRemoveSameStatus) {
    pokemonList = pokemonList.filter((item) => !item.isSameStatus);
  }
  return pokemonList;
};

export const randomPokemonList = (
  regionList,
  isOnlyFinal,
  isRemoveSameStatus
) => {
  const pokemonList = generatePokemonList(
    regionList,
    isOnlyFinal,
    isRemoveSameStatus
  );
  let randomPokemon = [];
  for (let i = 0; i < maxNumQue; i++) {
    const rand = Math.floor(Math.random() * pokemonList.length);
    randomPokemon.push(pokemonList[rand]);
    pokemonList.splice(rand, 1);
  }
  return randomPokemon;
};
