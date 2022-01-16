import { GetStaticPaths, GetStaticProps } from "next";
import { fetchPokemons } from "@/hooks/usePokemon";
import { Quiz, QuizProps } from "@/templates/Quiz";

type QuizPageProps = QuizProps;

export const getStaticPaths: GetStaticPaths = async () => {
  const pokemons = await fetchPokemons();
  const ids: string[] = pokemons.map((pokemon) => pokemon.id);
  const paths: { params: { id: string } }[] = ids.map((id) => ({
    params: { id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<
  QuizPageProps,
  { id: string }
> = async ({ params: { id } }) => {
  const pokemons = await fetchPokemons();
  const pokemon = pokemons.find((pokemon) => pokemon.id === id);
  return { props: { pokemon } };
};

const QuizPage = (props: QuizPageProps): JSX.Element => <Quiz {...props} />;

export default QuizPage;
