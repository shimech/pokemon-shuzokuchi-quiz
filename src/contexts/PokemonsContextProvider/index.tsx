import React from "react";
import { QuizConditionContext } from "../QuizConditionContextProvider";
import { NUM_QUIZ_ALL } from "@/constants/numQuizAll";
import { POKEMONS } from "@/constants/pokemons";
import { REGION } from "@/constants/region";
import type { Pokemon } from "@/types/pokemon";
import { QuizCondition } from "@/types/quizCondition";

const initialValue: Pokemon[] = POKEMONS.splice(0, 10);

const randomPokemons = (quizCondition: QuizCondition): Pokemon[] => {
  let pokemons: Pokemon[] = POKEMONS;

  const regionNames = Object.entries(quizCondition.includeRegion)
    .map(([region, include]) => {
      if (include) {
        return REGION[region];
      }
    })
    .filter((regionName) => !!regionName);
  pokemons = pokemons.filter((pokemon) => regionNames.includes(pokemon.region));

  if (!quizCondition.includeMegaEvolution) {
    pokemons = pokemons.filter((pokemon) => !pokemon.isMegaEvolution);
  }

  if (!quizCondition.includeSameStatus) {
    pokemons = pokemons.filter((pokemon) => !pokemon.isSameStatus);
  }

  if (!quizCondition.includeBeforeEvolution) {
    pokemons = pokemons.filter((pokemon) => pokemon.isFinal);
  }

  const newPokemons: Pokemon[] = [];
  for (let i = 0; i < NUM_QUIZ_ALL; i++) {
    const index = Math.floor(Math.random() * pokemons.length);
    const pokemon = pokemons.splice(index, 1)[0];
    newPokemons.push(pokemon);
  }

  return newPokemons;
};

export const PokemonsContext = React.createContext<{
  value: Pokemon[];
  shuffle: VoidFunction;
}>({
  value: initialValue,
  shuffle: () => {},
});

export const PokemonsContextProvider: React.FunctionComponent = (props) => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>(initialValue);
  const quizCondition = React.useContext(QuizConditionContext);

  const shuffle = () => {
    const newPokemons = randomPokemons(quizCondition.value);
    setPokemons(newPokemons);
  };

  React.useEffect(() => {
    shuffle();
  }, [quizCondition.value]);

  const value = { value: pokemons, shuffle };

  return (
    <PokemonsContext.Provider value={value}>
      {props.children}
    </PokemonsContext.Provider>
  );
};
