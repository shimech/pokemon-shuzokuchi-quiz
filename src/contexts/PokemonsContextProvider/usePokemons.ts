import React from "react";
import { fetchPokemons } from "./fetchPokemons";
import type { Pokemon } from "@/types/Pokemon";

export const usePokemons = () => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);

  React.useEffect(() => {
    (async () => {
      const pokemons = await fetchPokemons();
      setPokemons(pokemons);
    })();
  }, []);

  return pokemons;
};
