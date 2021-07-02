import { Pokemon } from './pokemon';

export type PokemonDriver = {
  findAllIds: () => string[];
  findById: (id: string) => Pokemon;
};
