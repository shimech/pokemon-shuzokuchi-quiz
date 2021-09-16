import { NUM_QUIZ_ALL } from '@/constants/numQuizAll';
import { REGION } from '@/constants/region';
import { Condition } from '@/domains/condition';
import { Pokemon, PokemonRepository, PokemonUseCase } from '@/domains/pokemon';

export class PokemonUseCaseImpl implements PokemonUseCase {
  private pokemonRepository: PokemonRepository;

  constructor(pokemonRepository: PokemonRepository) {
    this.pokemonRepository = pokemonRepository;
  }

  getAllIds(): string[] {
    const pokemons: Pokemon[] = this.pokemonRepository.findAll();
    return pokemons.map((pokemon) => pokemon.id);
  }

  selectQuizIds(condition: Condition): string[] {
    let pokemons: Pokemon[] = this.pokemonRepository.findAll();
    const quizIds: string[] = [];

    const includeRegionNames: string[] = [];
    for (const region in REGION) {
      if (condition.includeRegion[region]) {
        includeRegionNames.push(REGION[region]);
      }
    }
    pokemons = pokemons.filter((pokemon) =>
      includeRegionNames.includes(pokemon.region),
    );

    if (!condition.includeMegaEvolution) {
      pokemons = pokemons.filter((pokemon) => !pokemon.isMegaEvolution);
    }

    if (!condition.includeSameStatus) {
      pokemons = pokemons.filter((pokemon) => !pokemon.isSameStatus);
    }

    if (!condition.includeBeforeEvolution) {
      pokemons = pokemons.filter((pokemon) => pokemon.isFinal);
    }

    for (let i = 0; i < NUM_QUIZ_ALL; i++) {
      const index: number = Math.floor(Math.random() * pokemons.length);
      quizIds.push(pokemons[index].id);
      pokemons.splice(index, 1);
    }

    return quizIds;
  }
}
