import { Pokemon } from './pokemon';

export type PokemonRepository = {
  findAll: () => Pokemon[];
  findById: (id: string) => Pokemon;
};
