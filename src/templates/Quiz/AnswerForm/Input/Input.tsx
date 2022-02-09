import { css } from "@emotion/react";
import React from "react";
import { useInput } from "./useInput";

type InputProps = {
  answer: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const Input: React.VoidFunctionComponent<InputProps> = (props) => {
  const { isDesktop } = useInput();

  return (
    <input
      autoComplete="off"
      css={(theme) => [
        css`
          background-color: #fff;
          border: none;
          border-radius: 4px;
          font-size: 2rem;
          min-height: 4rem;
          outline: none;
          padding-left: 8px;
          transition: outline 100ms;
          &:focus {
            outline: 3px solid ${theme.colors.blue};
          }
        `,
        !isDesktop &&
          css`
            font-size: 1.4rem;
          `,
      ]}
      name="answer"
      placeholder="ポケモンの名前を入力"
      type="text"
      value={props.answer}
      onChange={props.onChange}
    />
  );
};
