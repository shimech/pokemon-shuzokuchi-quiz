import React from "react";
import type { Pokemon } from "@/types/pokemon";

export type QuizProps = { pokemon: Pokemon };

export const Quiz: React.VoidFunctionComponent<QuizProps> = (props) => (
  <>{props.pokemon.name}</>
);
