import React from "react";
import { usePokemons } from "./usePokemons";
import type { Pokemon } from "@/types/Pokemon";
import type { PropsWithChildren } from "@/types/PropsWithChildren";

export const PokemonsContext = React.createContext<Pokemon[]>([]);

export const PokemonsContextProvider = (props: PropsWithChildren) => {
  const pokemons = usePokemons();

  return (
    <PokemonsContext.Provider value={pokemons}>
      {props.children}
    </PokemonsContext.Provider>
  );
};
