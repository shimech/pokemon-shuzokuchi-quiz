import { Pokemon } from './pokemon';

export type PokemonDriver = {
  findAllIds: () => Promise<string[]>;
  findById: (id: string) => Promise<Pokemon>;
};
