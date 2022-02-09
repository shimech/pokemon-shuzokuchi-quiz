import { css } from "@emotion/react";
import React from "react";
import { Input } from "./Input";
import { Suggestion } from "./Suggestion";
import { useAnswerForm } from "./useAnswerForm";
import { Button } from "@/components/Button";

export const AnswerForm: React.VoidFunctionComponent = () => {
  const {
    isDesktop,
    answer,
    isSuggestionShow,
    handleInputChange,
    handleSuggestionClick,
    handleSubmit,
  } = useAnswerForm();

  return (
    <form
      css={[
        css`
          display: flex;
        `,
        !isDesktop &&
          css`
            max-width: calc(100vw - 30px);
          `,
      ]}
      onSubmit={handleSubmit}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          margin-right: 8px;
        `}
      >
        <Input answer={answer} onChange={handleInputChange} />
        <Suggestion
          answer={answer}
          css={css`
            margin-top: 8px;
          `}
          show={isSuggestionShow}
          onClick={handleSuggestionClick}
        />
      </div>
      <Button
        css={(theme) =>
          css`
            background-color: ${theme.colors.blue};
            border-radius: 4px;
            height: 4rem;
            transition: background-color ${theme.duration}ms;
            min-width: 6rem;
            &:hover,
            &:active {
              background-color: rgba(0, 0, 0, 0.04);
            }
            & > span {
              color: ${theme.colors.white};
              font-size: 1.6rem;
              transition: color ${theme.duration}ms;
            }
            &:hover > span,
            &:active > span {
              color: ${theme.colors.blue};
            }
          `
        }
      >
        解答
      </Button>
    </form>
  );
};
