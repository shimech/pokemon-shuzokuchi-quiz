import React from "react";
import { NUM_QUIZ_ALL } from "@/constants/numQuizAll";
import { POKEMONS } from "@/constants/pokemons";
import { REGION } from "@/constants/region";
import { QuizConditionContext } from "@/contexts/QuizConditionContextProvider";
import type { Pokemon } from "@/types/pokemon";

export const usePokemons = (): Pokemon[] => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);
  const quizCondition = React.useContext(QuizConditionContext);

  React.useEffect(() => {
    let pokemons: Pokemon[] = POKEMONS;

    const regionNames = Object.entries(quizCondition.value.includeRegion)
      .map(([region, include]) => {
        if (include) {
          return REGION[region];
        }
      })
      .filter((regionName) => !!regionName);
    pokemons = pokemons.filter((pokemon) =>
      regionNames.includes(pokemon.region),
    );

    if (!quizCondition.value.includeMegaEvolution) {
      pokemons = pokemons.filter((pokemon) => !pokemon.isMegaEvolution);
    }

    if (!quizCondition.value.includeSameStatus) {
      pokemons = pokemons.filter((pokemon) => !pokemon.isSameStatus);
    }

    if (!quizCondition.value.includeBeforeEvolution) {
      pokemons = pokemons.filter((pokemon) => pokemon.isFinal);
    }

    const newPokemons: Pokemon[] = [];
    for (let i = 0; i < NUM_QUIZ_ALL; i++) {
      const index = Math.floor(Math.random() * pokemons.length);
      const pokemon = pokemons.splice(index, 1)[0];
      newPokemons.push(pokemon);
    }

    setPokemons(newPokemons);
  }, [quizCondition.value]);

  return pokemons;
};
