import * as data from "./data/pokemon_db.json";

export const pokemonInformation = data.default;

export const generateRandomId = () => {
  const numPokemon = pokemonInformation.length;
  return Math.floor(numPokemon * Math.random());
};
