import { css } from "@emotion/react";
import React from "react";
import { useHintButton } from "./useHintButton";
import { Button } from "@/components/Button";
import type { Hint } from "@/types/Hint";

export type Texts = {
  category: React.ReactElement;
  content: React.ReactElement;
};

type HintButtonProps = {
  className?: string;
  hint: Hint;
  texts: Texts;
};

export const HintButton = (props: HintButtonProps) => {
  const { open, handleHintButtonClick, isDesktop } = useHintButton();

  return (
    <Button
      className={props.className}
      css={(theme) => [
        css`
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 192px;
          font-size: 1.8rem;
          background-color: ${theme.colors.black};
          border-radius: 8px;
          transition: opacity ${theme.duration}ms;

          &:hover {
            background-color: ${theme.colors.black};
            opacity: 0.8;
          }

          & > p {
            margin: 8px 0;
            font-size: 1.6rem;
            line-height: 1;
            color: ${theme.colors.white};
          }
        `,
        open &&
          css`
            background-color: ${theme.colors.gray};

            & > p {
              color: ${theme.colors.darkGray};
            }

            &:hover {
              background-color: ${theme.colors.gray};
            }
          `,
        !isDesktop &&
          css`
            height: 96px;

            & > p {
              font-size: 1rem;
            }
          `,
      ]}
      disabled={open}
      onClick={handleHintButtonClick}
    >
      {open ? props.texts.content : props.texts.category}
    </Button>
  );
};
