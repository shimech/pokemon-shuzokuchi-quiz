import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { setQuizIds } from '@/store/quizIds';

import {
  PokemonDriver,
  PokemonRepository,
  PokemonUseCase,
} from '@/domain/pokemon';
import { Condition } from '@/domain/condition';
import { PokemonDriverImpl } from '@/driver/pokemon';
import { PokemonRepositoryImpl } from '@/repository/pokemon';
import { PokemonUseCaseImpl } from '@/useCase/pokemon';
import { useEffect } from 'react';

export const useQuizIds = (): string[] => {
  const { quizIds } = useSelector((state: RootState) => state.quizIds);
  const dispatch = useDispatch();

  const pokemonDriver: PokemonDriver = new PokemonDriverImpl();
  const pokemonRepository: PokemonRepository = new PokemonRepositoryImpl(
    pokemonDriver,
  );
  const pokemonUseCase: PokemonUseCase = new PokemonUseCaseImpl(
    pokemonRepository,
  );

  const condition: Condition = {
    includeRegion: {
      kanto: true,
      johto: true,
      hoenn: true,
      sinnoh: true,
      unova: true,
      kalos: true,
      alola: true,
      galar: true,
    },
    includeMegaEvolution: true,
    includeSameStatus: true,
    includeBeforeEvolution: true,
  };

  useEffect(() => {
    const quizIds: string[] = pokemonUseCase.selectQuizIds(condition);
    dispatch(setQuizIds(quizIds));
  }, []);

  return quizIds;
};
