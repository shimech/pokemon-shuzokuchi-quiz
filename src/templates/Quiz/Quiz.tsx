import { css } from "@emotion/react";
import React from "react";
import { NumQuiz } from "./NumQuiz/NumQuiz";
import { Main } from "@/components/Main";
import { NextPageLink } from "@/components/NextPageLink";
import type { Pokemon } from "@/types/Pokemon";

export type QuizProps = { pokemon: Pokemon };

export const Quiz: React.VoidFunctionComponent<QuizProps> = (props) => (
  <Main
    css={css`
      padding: 24px 0 40px;
    `}
  >
    <div
      css={css`
        display: flex;
        flex-direction: column;
        margin: 0 24px;
        width: 100%;
      `}
    >
      <div
        css={css`
          display: flex;
          margin-bottom: 8px;
        `}
      >
        <NumQuiz />
      </div>
      {props.pokemon.name}
      <NextPageLink>次へ</NextPageLink>
    </div>
  </Main>
);
