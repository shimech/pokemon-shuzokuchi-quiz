import { Pokemon } from './pokemon';

export type PokemonDriver = {
  findAll: () => Pokemon[];
  findById: (id: string) => Pokemon;
};
