import { css } from "@emotion/react";
import { Dialog, DialogProps } from "@material-ui/core";
import React from "react";
import { useResultModal } from "./useResultModal";
import { NextPageLink } from "@/components/NextPageLink";

type ResultModalProps = {
  answer: string;
  correct: boolean;
  pokemonName: string;
  toNextQuiz: VoidFunction;
} & DialogProps;

export const ResultModal: React.VoidFunctionComponent<ResultModalProps> = (
  props,
) => {
  const { answer, correct, pokemonName, toNextQuiz, ...dialogProps } = props;
  const { isDesktop } = useResultModal();

  return (
    <Dialog
      css={css`
        div.MuiPaper-rounded {
          border-radius: 16px;
        }
      `}
      {...dialogProps}
    >
      <div
        css={[
          css`
            align-items: center;
            display: flex;
            flex-direction: column;
            padding: 16px;
            width: 480px;
          `,
          !isDesktop &&
            css`
              padding: 8px;
              width: 240px;
            `,
        ]}
      >
        <p
          css={(theme) => [
            css`
              color: ${correct ? theme.colors.red : theme.colors.blue};
              font-size: 3.2rem;
              margin-bottom: 16px;
            `,
            !isDesktop &&
              css`
                font-size: 2.4rem;
              `,
          ]}
        >
          {correct ? "せいかい！" : "ざんねん..."}
        </p>
        <div
          css={[
            css`
              align-items: center;
              background-blend-mode: lighten;
              background-color: rgba(255, 255, 255, 0.7);
              background-image: url(/images/${correct
                ? "correct"
                : "incorrect"}.svg);
              background-repeat: no-repeat;
              background-size: 320px 320px;
              display: flex;
              flex-direction: column;
              height: 320px;
              justify-content: center;
              margin-bottom: 16px;
              width: 320px;
            `,
            !isDesktop &&
              css`
                background-size: 160px 160px;
                height: 160px;
                width: 160px;
              `,
          ]}
        >
          <p
            css={[
              css`
                font-size: 4rem;
              `,
              !isDesktop &&
                css`
                  font-size: 2.8rem;
                `,
            ]}
          >
            {pokemonName}
          </p>
        </div>
        {!correct && (
          <p
            css={[
              css`
                font-size: 1.8rem;
                margin-bottom: 16px;
              `,
              !isDesktop &&
                css`
                  font-size: 1.2rem;
                `,
            ]}
          >
            あなたのこたえ: {answer}
          </p>
        )}
        <NextPageLink
          css={[
            css`
              height: 4rem;
              width: 320px;
              & > button.MuiButton-root {
                border-radius: 2rem;
              }
              & > button.MuiButton-root > span.MuiButton-label {
                font-size: 2rem;
              }
            `,
            !isDesktop &&
              css`
                height: 2.8rem;
                width: 160px;
                & > button.MuiButton-root > span.MuiButton-label {
                  font-size: 1.4rem;
                }
              `,
          ]}
          onClick={toNextQuiz}
        >
          次の問題へ
        </NextPageLink>
      </div>
    </Dialog>
  );
};
