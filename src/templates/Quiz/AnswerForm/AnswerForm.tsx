import { css } from "@emotion/react";
import { Input } from "./Input";
import { ResultModal } from "./ResultModal";
import { Suggestion } from "./Suggestion";
import { useAnswerForm } from "./useAnswerForm";
import { Button } from "@/components/Button";

type AnswerFormProps = {
  pokemonName: string;
};

export const AnswerForm = (props: AnswerFormProps) => {
  const {
    isDesktop,
    answer,
    isSuggestionOpen,
    isCorrect,
    isResultModalOpen,
    handleInputChange,
    handleSuggestionClick,
    handleSubmit,
    beforeTransition,
    afterTransition,
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
            open={isSuggestionOpen}
            onClick={handleSuggestionClick}
          />
        </div>
        <Button
          css={(theme) =>
            css`
              min-width: 6rem;
              height: 4rem;
              font-size: 1.6rem;
              color: ${theme.colors.white};
              background-color: ${theme.colors.blue};
              border-radius: 4px;
              transition: background-color ${theme.duration}ms;
              transition: color ${theme.duration}ms;

              &:disabled {
                color: ${theme.colors.white};
                opacity: 0.7;
              }

              &:hover,
              &:active {
                color: ${theme.colors.blue};
                background-color: rgb(0 0 0 / 4%);
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
        afterTransition={afterTransition}
        answer={answer}
        beforeTransition={beforeTransition}
        correct={isCorrect}
        open={isResultModalOpen}
        pokemonName={props.pokemonName}
      />
    </>
  );
};
