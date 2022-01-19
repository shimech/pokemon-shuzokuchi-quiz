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

export const HintButton: React.VoidFunctionComponent<HintButtonProps> = (
  props,
) => {
  const { open, handleHintButtonClick, isDesktop } = useHintButton();

  return (
    <Button
      className={props.className}
      css={(theme) => [
        css`
          background-color: ${theme.colors.black};
          border-radius: 8px;
          height: 192px;
          width: 100%;
          &:hover {
            background-color: ${theme.colors.black};
            opacity: 0.8;
          }
          & > span {
            flex-direction: column;
            font-size: 1.8rem;
          }
          & > span > p {
            color: ${theme.colors.white};
            font-size: 1.6rem;
          }
        `,
        open &&
          css`
            background-color: ${theme.colors.gray};
            & > span > p {
              color: ${theme.colors.darkGray};
            }
            &:hover {
              background-color: ${theme.colors.gray};
            }
          `,
        !isDesktop &&
          css`
            height: 96px;
            & > span > p {
              font-size: 1rem;
            }
          `,
      ]}
      onClick={handleHintButtonClick}
    >
      {open ? props.texts.content : props.texts.category}
    </Button>
  );
};