import { css } from "@emotion/react";
import { AnswerForm } from "./AnswerForm";
import { CircularProgress } from "./CircularProgress";
import { HintPanel, HintButtonOpensContextProvider } from "./HintPanel";
import { LoadingContextProvider } from "./LoadingContextProvider";
import { QuizCount } from "./QuizCount";
import { StatusChart } from "./StatusChart";
import { TwitterLink } from "./TwitterLink";
import { useQuiz } from "./useQuiz";
import { Main } from "@/components/Main";
import type { Pokemon } from "@/types/Pokemon";

export type QuizProps = { pokemon: Pokemon };

export const Quiz = (props: QuizProps) => {
  const { isDesktop } = useQuiz();

  return (
    <LoadingContextProvider>
      <Main
        css={css`
          padding: 24px 0 40px;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            width: 100%;
            margin: 0 24px;
          `}
        >
          <div
            css={css`
              display: flex;
              align-items: center;
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
                  width: 50%;
                  margin-right: 32px;
                `
              }
              name={props.pokemon.name}
              {...props.pokemon.status}
            />
            <div
              css={
                isDesktop &&
                css`
                  width: 50%;
                  margin-left: 32px;
                `
              }
            >
              <HintButtonOpensContextProvider>
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
              </HintButtonOpensContextProvider>
            </div>
          </div>
        </div>
      </Main>
      <CircularProgress />
    </LoadingContextProvider>
  );
};
