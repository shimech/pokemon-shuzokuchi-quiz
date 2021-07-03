import { Pokemon, PokemonRepository, PokemonUseCase } from '@/domain/pokemon';

export class PokemonUseCaseImpl implements PokemonUseCase {
  private pokemonRepository: PokemonRepository;

  constructor(pokemonRepository: PokemonRepository) {
    this.pokemonRepository = pokemonRepository;
  }

  getAllIds(): string[] {
    const pokemons: Pokemon[] = this.pokemonRepository.findAll();
    return pokemons.map((pokemon) => pokemon.id);
  }
}
