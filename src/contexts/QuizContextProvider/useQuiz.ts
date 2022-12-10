import React from "react";
import { PokemonsContext } from "../PokemonsContextProvider";
import { ALL_QUIZ_COUNT } from "@/constants/allQuizCount";
import { REGION } from "@/constants/region";
import type { Pokemon } from "@/types/Pokemon";
import type { Quiz } from "@/types/Quiz";
import type { QuizCondition } from "@/types/QuizCondition";

const selectRandomQuiz = (
  pokemons: Pokemon[],
  quizCondition: QuizCondition,
) => {
  let candidates = pokemons;

  const regionNames = Object.entries(quizCondition.includeRegion)
    .map(([region, include]) => {
      if (include) {
        return REGION[region];
      }
    })
    .filter((regionName) => !!regionName);
  candidates = candidates.filter((pokemon) =>
    regionNames.includes(pokemon.region),
  );

  if (!quizCondition.includeMegaEvolution) {
    candidates = candidates.filter((pokemon) => !pokemon.isMegaEvolution);
  }

  if (!quizCondition.includeSameStatus) {
    candidates = candidates.filter((pokemon) => !pokemon.isSameStatus);
  }

  if (!quizCondition.includeBeforeEvolution) {
    candidates = candidates.filter((pokemon) => pokemon.isFinal);
  }

  const quiz: Quiz = [];
  for (let i = 0; i < ALL_QUIZ_COUNT; i++) {
    const index = Math.floor(Math.random() * candidates.length);
    const pokemon = candidates.splice(index, 1)[0];
    quiz.push(pokemon);
  }

  return quiz;
};

export const useQuiz = (quizCondition: QuizCondition) => {
  const [quiz, setQuiz] = React.useState<Quiz>([]);
  const pokemons = React.useContext(PokemonsContext);

  React.useEffect(() => {
    if (pokemons.length === 0) {
      return;
    }
    const quiz = selectRandomQuiz(pokemons, quizCondition);
    setQuiz(quiz);
  }, [pokemons, quizCondition]);

  return quiz;
};
