import React from "react";
import { PokemonsContext } from "@/contexts/PokemonsContextProvider";
import { useDesktop } from "@/hooks/useDesktop";

export const useSuggestion = (answer: string) => {
  const isDesktop = useDesktop();
  const pokemons = React.useContext(PokemonsContext);
  const [pokemonNames, setPokemonNames] = React.useState<string[]>([]);
  const [suggestions, setSuggestions] = React.useState<string[]>([]);

  React.useEffect(() => {
    setPokemonNames(pokemons.map((pokemon) => pokemon.name));
  }, [pokemons]);

  React.useEffect(() => {
    if (!answer) {
      setSuggestions([]);
      return;
    }
    setSuggestions(
      pokemonNames.filter(
        (pokemonName) => pokemonName.includes(answer) && pokemonName !== answer,
      ),
    );
  }, [answer, pokemonNames]);

  return { isDesktop, suggestions };
};
