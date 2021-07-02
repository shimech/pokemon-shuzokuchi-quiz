import { Pokemon, PokemonDriver } from '@/domain/pokemon';
import pokemons from '@/database/pokemons.json';

export class PokemonDriverImpl implements PokemonDriver {
  private pokemons: Pokemon[];

  constructor() {
    this.pokemons = pokemons;
  }

  findAllIds(): string[] {
    return this.pokemons.map((pokemon) => pokemon.id);
  }

  findById(id: string): Pokemon {
    return pokemons.find((pokemon) => pokemon.id === id);
  }
}
