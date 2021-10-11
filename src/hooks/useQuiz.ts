import React from "react";
import { usePokemon } from "./usePokemon";
import { NUM_QUIZ_ALL } from "@/constants/numQuizAll";
import { REGION } from "@/constants/region";
import type { Pokemon } from "@/types/pokemon";
import type { QuizCondition } from "@/types/quizCondition";

export type Quiz = Pokemon[];

const selectRandomQuiz = (
  pokemons: Pokemon[],
  quizCondition: QuizCondition,
): Quiz => {
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

  const quiz: Pokemon[] = [];
  for (let i = 0; i < NUM_QUIZ_ALL; i++) {
    const index = Math.floor(Math.random() * candidates.length);
    const pokemon = candidates.splice(index, 1)[0];
    quiz.push(pokemon);
  }

  return quiz;
};

export const useQuiz = (quizCondition: QuizCondition): Quiz => {
  const [quiz, setQuiz] = React.useState<Quiz>([]);
  const pokemons = usePokemon();

  React.useEffect(() => {
    const quiz = selectRandomQuiz(pokemons, quizCondition);
    setQuiz(quiz);
  }, [pokemons, quizCondition]);

  return quiz;
};
