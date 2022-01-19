import { css } from "@emotion/react";
import React from "react";
import { HintPanel } from "./HintPanel";
import { NumQuiz } from "./NumQuiz";
import { StatusChart } from "./StatusChart";
import { useQuiz } from "./useQuiz";
import { Main } from "@/components/Main";
import { NextPageLink } from "@/components/NextPageLink";
import type { Pokemon } from "@/types/Pokemon";

export type QuizProps = { pokemon: Pokemon };

export const Quiz: React.VoidFunctionComponent<QuizProps> = (props) => {
  const { isDesktop } = useQuiz();

  return (
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
        <div
          css={[
            css`
              display: flex;
            `,
            !isDesktop &&
              css`
                flex-direction: column;
              `,
          ]}
        >
          <StatusChart
            css={
              isDesktop &&
              css`
                margin-right: 32px;
                width: 50%;
              `
            }
            name={props.pokemon.name}
            {...props.pokemon.status}
          />
          <div
            css={
              isDesktop &&
              css`
                margin-left: 32px;
                width: 50%;
              `
            }
          >
            <HintPanel
              css={css`
                margin-bottom: 24px;
              `}
              pokemon={props.pokemon}
            />
            {props.pokemon.name}
          </div>
        </div>
        <NextPageLink>次へ</NextPageLink>
      </div>
    </Main>
  );
};
