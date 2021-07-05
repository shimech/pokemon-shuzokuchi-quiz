import { Quiz } from '@/component/template/Quiz';

import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';

import {
  Pokemon,
  PokemonDriver,
  PokemonRepository,
  PokemonUseCase,
} from '@/domain/pokemon';
import { PokemonDriverImpl } from '@/driver/pokemon';
import { PokemonRepositoryImpl } from '@/repository/pokemon';
import { PokemonUseCaseImpl } from '@/useCase/pokemon';

type Props = { pokemon: Pokemon };

const pokemonDriver: PokemonDriver = new PokemonDriverImpl();
const pokemonRepository: PokemonRepository = new PokemonRepositoryImpl(
  pokemonDriver,
);
const pokemonUseCase: PokemonUseCase = new PokemonUseCaseImpl(
  pokemonRepository,
);

export const getStaticPaths: GetStaticPaths = () => {
  const ids: string[] = pokemonUseCase.getAllIds();
  const paths: { params: { id: string } }[] = ids.map((id) => {
    return {
      params: { id },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = (
  context: GetStaticPropsContext,
) => {
  const id: string = context.params?.id as string;
  const pokemon: Pokemon = pokemonRepository.findById(id);
  return { props: { pokemon } };
};

const QuizPage = ({ pokemon }: Props): JSX.Element => (
  <Quiz pokemon={pokemon} />
);

export default QuizPage;
