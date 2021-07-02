import { Pokemon, PokemonDriver, PokemonRepository } from '@/domain/pokemon';

export class PokemonRepositoryImpl implements PokemonRepository {
  private pokemonDriver: PokemonDriver;

  constructor(pokemonDriver: PokemonDriver) {
    this.pokemonDriver = pokemonDriver;
  }

  async findAllIds(): Promise<string[]> {
    return await this.pokemonDriver.findAllIds();
  }

  async findById(id: string): Promise<Pokemon> {
    return await this.pokemonDriver.findById(id);
  }
}
