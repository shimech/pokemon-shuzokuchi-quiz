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

Quiz.getInitialProps = async (context) => {
  const id: string = context.query?.id as string;
  const pokemon: Pokemon = await pokemonRepository.findById(id);

  return { pokemon };
};

export default Quiz;
