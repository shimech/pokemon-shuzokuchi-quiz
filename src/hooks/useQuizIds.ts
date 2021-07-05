import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { setQuizIds } from '@/store/quizIds';

import {
  PokemonDriver,
  PokemonRepository,
  PokemonUseCase,
} from '@/domains/pokemon';
import { PokemonDriverImpl } from '@/drivers/pokemon';
import { PokemonRepositoryImpl } from '@/repositories/pokemon';
import { PokemonUseCaseImpl } from '@/useCases/pokemon';

export const useQuizIds = (): string[] => {
  const { quizIds } = useSelector((state: RootState) => state.quizIds);
  const condition = useSelector((state: RootState) => state.condition);
  const dispatch = useDispatch();

  const pokemonDriver: PokemonDriver = new PokemonDriverImpl();
  const pokemonRepository: PokemonRepository = new PokemonRepositoryImpl(
    pokemonDriver,
  );
  const pokemonUseCase: PokemonUseCase = new PokemonUseCaseImpl(
    pokemonRepository,
  );

  useEffect(() => {
    const quizIds: string[] = pokemonUseCase.selectQuizIds(condition);
    dispatch(setQuizIds(quizIds));
  }, [condition]);

  return quizIds;
};
