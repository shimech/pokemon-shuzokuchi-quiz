import { GetStaticPaths, GetStaticProps } from "next";
import { POKEMONS } from "@/constants/pokemons";
import { Quiz, QuizProps } from "@/templates/Quiz";

type QuizPageProps = QuizProps;

export const getStaticPaths: GetStaticPaths = () => {
  const ids: string[] = POKEMONS.map((pokemon) => pokemon.id);
  const paths: { params: { id: string } }[] = ids.map((id) => ({
    params: { id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<QuizPageProps, { id: string }> = ({
  params: { id },
}) => {
  const pokemon = POKEMONS.find((pokemon) => pokemon.id === id);
  return { props: { pokemon } };
};

const QuizPage = ({ pokemon }: QuizPageProps): JSX.Element => (
  <Quiz pokemon={pokemon} />
);

export default QuizPage;
