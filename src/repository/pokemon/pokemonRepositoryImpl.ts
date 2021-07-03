import { Pokemon, PokemonDriver, PokemonRepository } from '@/domain/pokemon';

export class PokemonRepositoryImpl implements PokemonRepository {
  private pokemonDriver: PokemonDriver;

  constructor(pokemonDriver: PokemonDriver) {
    this.pokemonDriver = pokemonDriver;
  }

  findAll(): Pokemon[] {
    return this.pokemonDriver.findAll();
  }

  findById(id: string): Pokemon {
    return this.pokemonDriver.findById(id);
  }
}
