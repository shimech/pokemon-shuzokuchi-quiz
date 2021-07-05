import { Condition } from '@/domains/condition';

export type PokemonUseCase = {
  getAllIds: () => string[];
  selectQuizIds: (condition: Condition) => string[];
};
