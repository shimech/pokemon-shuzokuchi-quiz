import { css } from "@emotion/react";
import React from "react";
import { useAnswerForm } from "./useAnswerForm";
import { Button } from "@/components/Button";

export const AnswerForm: React.VoidFunctionComponent = () => {
  const { isDesktop, answer, handleInputChange, handleSubmit } =
    useAnswerForm();

  return (
    <form
      css={[
        css`
          display: flex;
          height: 4rem;
        `,
        !isDesktop &&
          css`
            max-width: calc(100vw - 30px);
          `,
      ]}
      onSubmit={handleSubmit}
    >
      <input
        autoComplete="off"
        css={(theme) => [
          css`
            background-color: #fff;
            border: none;
            border-radius: 4px;
            flex-grow: 1;
            font-size: 2rem;
            margin-right: 8px;
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
        value={answer}
        onChange={handleInputChange}
      />
      <Button
        css={(theme) =>
          css`
            background-color: ${theme.colors.blue};
            border-radius: 4px;
            height: 100%;
            transition: background-color ${theme.duration}ms;
            min-width: 6rem;
            & > span {
              color: ${theme.colors.white};
              font-size: 1.6rem;
              transition: color ${theme.duration}ms;
            }
            &:hover {
              & > span {
                color: ${theme.colors.blue};
              }
            }
          `
        }
      >
        解答
      </Button>
    </form>
  );
};
