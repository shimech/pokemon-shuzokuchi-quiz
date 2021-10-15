import React from "react";
import type { Pokemon } from "@/types/pokemon";

export const fetchPokemons = async (): Promise<Pokemon[]> => {
  const response = await fetch(
    "https://raw.githubusercontent.com/shimech/pokemon-db-maker/master/output/pokemon_db.json",
  );
  const pokemons: Pokemon[] = await response.json();
  return pokemons;
};

export const usePokemon = (): Pokemon[] => {
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
