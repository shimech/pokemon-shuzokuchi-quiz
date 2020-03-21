import * as data from "./data/pokemon_db.json";

export const pokemonInformation = data.default;

export const filterByRegion = (pokemonInformation, regions) =>
  pokemonInformation.filter(item => regions.includes(item.region));

export const filterByIsFinal = pokemonInformation =>
  pokemonInformation.filter(item => item.isFinal);

export const generateRandomId = pokemonInformation => {
  pokemonInformation = filterByIsFinal(pokemonInformation);

  const Ids = pokemonInformation.map(item => item.id);
  const randomIndex = Math.floor(Ids.length * Math.random());

  return Ids[randomIndex];
};
