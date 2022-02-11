import type { Pokemon } from "@/types/Pokemon";

export const fetchPokemons = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/shimech/pokemon-shuzokuchi-quiz-neo/main/public/api/pokemons.json",
  );
  if (!response.ok) {
    throw new Error("Failed to fetch Pokémon picture book.");
  }
  const pokemons: Pokemon[] = await response.json();
  return pokemons;
};
