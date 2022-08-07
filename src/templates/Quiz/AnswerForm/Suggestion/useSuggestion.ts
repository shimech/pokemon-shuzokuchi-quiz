import React from "react";
import { PokemonsContext } from "@/contexts/PokemonsContextProvider";
import { useDesktop } from "@/hooks/useDesktop";

export const useSuggestion = (answer: string) => {
  const isDesktop = useDesktop();
  const pokemons = React.useContext(PokemonsContext);
  const [suggestions, setSuggestions] = React.useState<string[]>([]);

  React.useEffect(() => {
    if (!answer) {
      setSuggestions([]);
      return;
    }
    const pokemonNames = pokemons.map((pokemon) => pokemon.name);
    setSuggestions(
      pokemonNames.filter((pokemonName) => pokemonName.includes(answer)),
    );
  }, [answer, pokemons]);

  return { isDesktop, suggestions };
};
