import { Condition } from '@/domain/condition';

export type PokemonUseCase = {
  getAllIds: () => string[];
  selectQuizIds: (condition: Condition) => string[];
};
