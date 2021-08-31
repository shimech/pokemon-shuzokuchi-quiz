import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { Quiz } from '@/components/templates/Quiz';

import {
  Pokemon,
  PokemonDriver,
  PokemonRepository,
  PokemonUseCase,
} from '@/domains/pokemon';
import { PokemonDriverImpl } from '@/drivers/pokemon';
import { PokemonRepositoryImpl } from '@/repositories/pokemon';
import { PokemonUseCaseImpl } from '@/useCases/pokemon';

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
