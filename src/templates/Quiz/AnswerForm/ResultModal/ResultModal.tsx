import { css } from "@emotion/react";
import { Dialog, type DialogProps } from "@mui/material";
import { useResultModal } from "./useResultModal";
import type { NextPageLinkProps } from "@/components/NextPageLink";
import { NextPageLink } from "@/components/NextPageLink";

type ResultModalProps = {
  answer: string;
  correct: boolean;
  pokemonName: string;
} & NextPageLinkProps &
  DialogProps;

export const ResultModal = (props: ResultModalProps) => {
  const { isDesktop } = useResultModal();
  const backgroundImageUrl = `/images/${
    props.correct ? "correct" : "incorrect"
  }.svg`;

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
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 480px;
            padding: 16px;
          `,
          !isDesktop &&
            css`
              width: 240px;
              padding: 8px;
            `,
        ]}
      >
        <p
          css={(theme) => [
            css`
              margin-bottom: 16px;
              font-size: 3.2rem;
              color: ${props.correct ? theme.colors.red : theme.colors.blue};
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
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              width: 320px;
              height: 320px;
              margin-bottom: 16px;
              background-color: rgb(255 255 255 / 70%);
              background-image: url(${backgroundImageUrl});
              background-repeat: no-repeat;
              background-size: 320px 320px;
              background-blend-mode: lighten;
            `,
            !isDesktop &&
              css`
                width: 160px;
                height: 160px;
                background-size: 160px 160px;
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
                margin-bottom: 16px;
                font-size: 1.8rem;
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
          afterTransition={props.afterTransition}
          beforeTransition={props.beforeTransition}
          css={[
            css`
              width: 320px;
              height: 4rem;
              font-size: 2rem;
              border-radius: 2rem;
            `,
            !isDesktop &&
              css`
                width: 160px;
                height: 2.8rem;
                font-size: 1.4rem;
              `,
          ]}
        >
          次の問題へ
        </NextPageLink>
      </div>
    </Dialog>
  );
};
