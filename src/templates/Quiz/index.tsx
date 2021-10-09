import React from "react";
import { NextPageLink } from "@/components/NextPageLink";
import type { Pokemon } from "@/types/pokemon";

export type QuizProps = { pokemon: Pokemon };

export const Quiz: React.VoidFunctionComponent<QuizProps> = (props) => (
  <>
    {props.pokemon.name}
    <NextPageLink>次へ</NextPageLink>
  </>
);
