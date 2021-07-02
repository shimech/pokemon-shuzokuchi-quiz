import { Pokemon, PokemonDriver } from '@/domain/pokemon';
import fetch from 'isomorphic-unfetch';

export class PokemonDriverImpl implements PokemonDriver {
  private url: string;

  constructor() {
    this.url =
      'https://raw.githubusercontent.com/shimech/pokemon-db-maker/master/output/pokemon_db.json';
  }

  async findAllIds(): Promise<string[]> {
    const response = await fetch(this.url);
    const pokemons: Pokemon[] = await response.json();
    return pokemons.map((pokemon) => pokemon.id);
  }

  async findById(id: string): Promise<Pokemon> {
    const response = await fetch(this.url);
    const pokemons: Pokemon[] = await response.json();
    const pokemon: Pokemon | undefined = pokemons.find(
      (pokemon) => pokemon.id === id,
    );

    return pokemon;
  }
}
