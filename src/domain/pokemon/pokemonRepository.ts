import { Pokemon } from './pokemon';

export type PokemonRepository = {
  findAllIds: () => Promise<string[]>;
  findById: (id: string) => Promise<Pokemon>;
};
