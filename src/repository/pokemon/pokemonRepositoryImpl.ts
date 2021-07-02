import { Pokemon, PokemonDriver, PokemonRepository } from '@/domain/pokemon';

export class PokemonRepositoryImpl implements PokemonRepository {
  private pokemonDriver: PokemonDriver;

  constructor(pokemonDriver: PokemonDriver) {
    this.pokemonDriver = pokemonDriver;
  }

  findAllIds(): string[] {
    return this.pokemonDriver.findAllIds();
  }

  findById(id: string): Pokemon {
    return this.pokemonDriver.findById(id);
  }
}
