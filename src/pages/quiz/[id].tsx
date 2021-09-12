import { GetStaticPaths, GetStaticProps } from 'next';
import {
  Pokemon,
  PokemonDriver,
  PokemonRepository,
  PokemonUseCase,
} from '@/domains/pokemon';
import { PokemonDriverImpl } from '@/drivers/pokemon';
import { PokemonRepositoryImpl } from '@/repositories/pokemon';
import { Quiz } from '@/templates/Quiz';
import { PokemonUseCaseImpl } from '@/usecases/pokemon';

type Props = { pokemon: Pokemon };

// TODO: install DI Container
const pokemonDriver: PokemonDriver = new PokemonDriverImpl();
const pokemonRepository: PokemonRepository = new PokemonRepositoryImpl(
  pokemonDriver,
);
const pokemonUseCase: PokemonUseCase = new PokemonUseCaseImpl(
  pokemonRepository,
);

export const getStaticPaths: GetStaticPaths = () => {
  const ids: string[] = pokemonUseCase.getAllIds();
  const paths: { params: { id: string } }[] = ids.map((id) => ({
    params: { id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = ({ params }) => {
  const id: string = params.id as string;
  const pokemon: Pokemon = pokemonRepository.findById(id);
  return { props: { pokemon } };
};

const QuizPage = ({ pokemon }: Props): JSX.Element => (
  <Quiz pokemon={pokemon} />
);

export default QuizPage;
