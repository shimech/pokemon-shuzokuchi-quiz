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
import { isStaging } from '@/utils';

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

  const [url, setUrl] = React.useState('');

  React.useEffect(() => {
    const ids: string[] = pokemonUseCase.getAllIds();
    const id: string = ids[Math.floor(Math.random() * ids.length)];

    const url: string = isStaging(location.hostname)
      ? `/pokemon-shuzokuchi-quiz-neo/quiz/${id}`
      : `/quiz/${id}`;
    setUrl(url);
  }, []);

  return (
    <Link href={url}>
      <a>
        <button>ゲームスタート！</button>
      </a>
    </Link>
  );
};
