import * as React from 'react';
import Link from 'next/link';
import {
  PokemonDriver,
  PokemonRepository,
  PokemonUseCase,
} from '@/domain/pokemon';
import { PokemonDriverImpl } from '@/driver/pokemon';
import { PokemonRepositoryImpl } from '@/repository/pokemon';
import { PokemonUseCaseImpl } from '@/useCase/pokemon';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

export const GameStartButton: React.VFC<Props> = () => {
  const pokemonDriver: PokemonDriver = new PokemonDriverImpl();
  const pokemonRepository: PokemonRepository = new PokemonRepositoryImpl(
    pokemonDriver,
  );
  const pokemonUseCase: PokemonUseCase = new PokemonUseCaseImpl(
    pokemonRepository,
  );

  const [id, setId] = React.useState('');

  React.useEffect(() => {
    const ids: string[] = pokemonUseCase.getAllIds();
    const id: string = ids[Math.floor(Math.random() * ids.length)];
    setId(id);
  }, []);

  return (
    <Link href={`/quiz/${id}`}>
      <a>
        <button>ゲームスタート！</button>
      </a>
    </Link>
  );
};
