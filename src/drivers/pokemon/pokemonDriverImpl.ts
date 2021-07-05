import { Pokemon, PokemonDriver } from '@/domains/pokemon';
import pokemons from '@/database/pokemons.json';

export class PokemonDriverImpl implements PokemonDriver {
  private pokemons: Pokemon[];

  constructor() {
    this.pokemons = pokemons;
  }

  findAll(): Pokemon[] {
    return this.pokemons;
  }

  findById(id: string): Pokemon {
    return pokemons.find((pokemon) => pokemon.id === id);
  }
}
