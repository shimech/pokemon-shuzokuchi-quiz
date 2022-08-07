import React from "react";
import { usePokemons } from "./usePokemons";
import type { Pokemon } from "@/types/Pokemon";
import type { WithChildren } from "@/types/WithChildren";

export const PokemonsContext = React.createContext<Pokemon[]>([]);

type PokemonsContextProviderProps = WithChildren;

export const PokemonsContextProvider = (
  props: PokemonsContextProviderProps,
) => {
  const pokemons = usePokemons();

  return (
    <PokemonsContext.Provider value={pokemons}>
      {props.children}
    </PokemonsContext.Provider>
  );
};
