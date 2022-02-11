import { css } from "@emotion/react";
import React from "react";
import { AnswerForm } from "./AnswerForm";
import { HintPanel } from "./HintPanel";
import { QuizCount } from "./QuizCount";
import { StatusChart } from "./StatusChart";
import { TwitterLink } from "./TwitterLink";
import { useQuiz } from "./useQuiz";
import { Main } from "@/components/Main";
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
            align-items: center;
            display: flex;
            margin-bottom: 32px;
          `}
        >
          <QuizCount
            css={css`
              margin-right: auto;
            `}
          />
          <TwitterLink
            iconSize={isDesktop ? 36 : 24}
            status={props.pokemon.status}
          />
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
              css={[
                css`
                  margin-bottom: 56px;
                `,
                !isDesktop &&
                  css`
                    margin-bottom: 32px;
                  `,
              ]}
              pokemon={props.pokemon}
            />
            <AnswerForm pokemonName={props.pokemon.name} />
          </div>
        </div>
      </div>
    </Main>
  );
};
