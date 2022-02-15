import { css } from "@emotion/react";
import React from "react";
import { CircularProgress } from "./CircularProgress";
import { Input } from "./Input";
import { ResultModal } from "./ResultModal";
import { Suggestion } from "./Suggestion";
import { useAnswerForm } from "./useAnswerForm";
import { Button } from "@/components/Button";

type AnswerFormProps = {
  pokemonName: string;
};

export const AnswerForm: React.VoidFunctionComponent<AnswerFormProps> = (
  props,
) => {
  const {
    isDesktop,
    answer,
    isSuggestionShow,
    isCorrect,
    isResultModalOpen,
    isLoading,
    handleInputChange,
    handleSuggestionClick,
    handleSubmit,
    toNextQuiz,
  } = useAnswerForm(props.pokemonName);

  return (
    <>
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
              &:disabled {
                opacity: 0.7;
              }
              &:hover,
              &:active {
                background-color: rgba(0, 0, 0, 0.04);
              }
              & > span.MuiButton-label {
                color: ${theme.colors.white};
                font-size: 1.6rem;
                transition: color ${theme.duration}ms;
              }
              &:hover > span.MuiButton-label,
              &:active > span.MuiButton-label {
                color: ${theme.colors.blue};
              }
            `
          }
          disabled={answer === ""}
          type="submit"
        >
          解答
        </Button>
      </form>
      <ResultModal
        answer={answer}
        correct={isCorrect}
        dependencies={[isResultModalOpen]}
        open={isResultModalOpen}
        pokemonName={props.pokemonName}
        onClick={toNextQuiz}
      />
      <CircularProgress open={isLoading} />
    </>
  );
};
