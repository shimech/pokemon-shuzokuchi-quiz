import * as React from 'react';
import Link from 'next/link';
import { PokemonRepository } from '@/domain/pokemon';
import { PokemonDriverImpl } from '@/driver/pokemon';
import { PokemonRepositoryImpl } from '@/repository/pokemon';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

export const GameStartButton: React.VFC<Props> = () => {
  const pokemonRepository: PokemonRepository = new PokemonRepositoryImpl(
    new PokemonDriverImpl(),
  );

  const ids: string[] = pokemonRepository.findAllIds();
  const id: string = ids[Math.floor(Math.random() * ids.length)];

  return (
    <Link href={`/quiz/${id}`}>
      <a>
        <button>ゲームスタート！</button>
      </a>
    </Link>
  );
};
