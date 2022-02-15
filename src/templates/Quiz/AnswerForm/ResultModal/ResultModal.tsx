import { css } from "@emotion/react";
import { Dialog, DialogProps } from "@material-ui/core";
import React from "react";
import { useResultModal } from "./useResultModal";
import { NextPageLink, NextPageLinkProps } from "@/components/NextPageLink";

type ResultModalProps = {
  answer: string;
  correct: boolean;
  pokemonName: string;
} & NextPageLinkProps &
  DialogProps;

export const ResultModal: React.VoidFunctionComponent<ResultModalProps> = (
  props,
) => {
  const { isDesktop } = useResultModal();

  return (
    <Dialog
      css={css`
        div.MuiPaper-rounded {
          border-radius: 16px;
        }
      `}
      open={props.open}
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
              color: ${props.correct ? theme.colors.red : theme.colors.blue};
              font-size: 3.2rem;
              margin-bottom: 16px;
            `,
            !isDesktop &&
              css`
                font-size: 2.4rem;
              `,
          ]}
        >
          {props.correct ? "せいかい！" : "ざんねん..."}
        </p>
        <div
          css={[
            css`
              align-items: center;
              background-blend-mode: lighten;
              background-color: rgba(255, 255, 255, 0.7);
              background-image: url(/images/${props.correct
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
            {props.pokemonName}
          </p>
        </div>
        {!props.correct && (
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
            あなたのこたえ: {props.answer}
          </p>
        )}
        <NextPageLink
          css={[
            css`
              border-radius: 2rem;
              height: 4rem;
              width: 320px;
              & > span.MuiButton-label {
                font-size: 2rem;
              }
            `,
            !isDesktop &&
              css`
                height: 2.8rem;
                width: 160px;
                & > span.MuiButton-label {
                  font-size: 1.4rem;
                }
              `,
          ]}
          dependencies={props.dependencies}
          onClick={props.onClick}
        >
          次の問題へ
        </NextPageLink>
      </div>
    </Dialog>
  );
};
