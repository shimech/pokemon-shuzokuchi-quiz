import type { Pokemon } from "@/types/Pokemon";

const URL =
  process.env.NODE_ENV === "production"
    ? "https://raw.githubusercontent.com/shimech/pokemon-shuzokuchi-quiz-neo/main/public/api/pokemons.json"
    : "http://localhost:3000/api/pokemons.json";

export const fetchPokemons = async () => {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error("Failed to fetch a Pokémon picture book.");
  }
  const pokemons: Pokemon[] = await response.json();
  return pokemons;
};
