import React from "react";
import type { Pokemon } from "@/types/Pokemon";

export const fetchPokemons = async (): Promise<Pokemon[]> => {
  const response = await fetch(
    "https://raw.githubusercontent.com/shimech/pokemon-shuzokuchi-quiz-neo/main/public/api/pokemons.json",
  );
  const pokemons: Pokemon[] = await response.json();
  return pokemons;
};

export const usePokemon = () => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);

  React.useEffect(() => {
    const fetchAndSetPokemons = async () => {
      const pokemons = await fetchPokemons();
      setPokemons(pokemons);
    };
    fetchAndSetPokemons();
  }, []);

  return pokemons;
};
