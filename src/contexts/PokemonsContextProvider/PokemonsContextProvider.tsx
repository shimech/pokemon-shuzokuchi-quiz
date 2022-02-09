import React from "react";
import { usePokemons } from "./usePokemons";
import type { Pokemon } from "@/types/Pokemon";

export const PokemonsContext = React.createContext<Pokemon[]>([]);

export const PokemonsContextProvider: React.FunctionComponent = (props) => {
  const pokemons = usePokemons();

  return (
    <PokemonsContext.Provider value={pokemons}>
      {props.children}
    </PokemonsContext.Provider>
  );
};
