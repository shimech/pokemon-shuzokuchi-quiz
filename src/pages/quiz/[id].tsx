import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { Pokemon, PokemonRepository } from '@/domain/pokemon';
import { PokemonDriverImpl } from '@/driver/pokemon';
import { PokemonRepositoryImpl } from '@/repository/pokemon';

type Props = { pokemon: Pokemon };

const pokemonRepository: PokemonRepository = new PokemonRepositoryImpl(
  new PokemonDriverImpl(),
);

const QuizPage = ({ pokemon }: Props): JSX.Element => {
  return <>{pokemon.name}</>;
};

export const getStaticPaths: GetStaticPaths = () => {
  const ids: string[] = pokemonRepository.findAllIds();
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

export default QuizPage;
