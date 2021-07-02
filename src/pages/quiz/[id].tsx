import { GetStaticPaths, GetStaticProps } from 'next';
import { Pokemon, PokemonRepository } from '@/domain/pokemon';
import { PokemonDriverImpl } from '@/driver/pokemon';
import { PokemonRepositoryImpl } from '@/repository/pokemon';

type Props = { pokemon: Pokemon };

const pokemonRepository: PokemonRepository = new PokemonRepositoryImpl(
  new PokemonDriverImpl(),
);

const Quiz = ({ pokemon }: Props): JSX.Element => {
  return <>{pokemon.name}</>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const ids: string[] = await pokemonRepository.findAllIds();
  const paths = ids.map((id) => {
    return {
      params: { id },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id: string = context.params?.id as string;
  const pokemon: Pokemon = await pokemonRepository.findById(id);

  return { props: { pokemon } };
};

export default Quiz;
