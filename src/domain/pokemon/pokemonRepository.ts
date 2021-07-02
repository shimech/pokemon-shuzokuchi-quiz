import { Pokemon } from './pokemon';

export type PokemonRepository = {
  findAllIds: () => string[];
  findById: (id: string) => Pokemon;
};
