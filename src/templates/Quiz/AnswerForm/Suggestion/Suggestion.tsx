import { css } from "@emotion/react";
import { useSuggestion } from "./useSuggestion";
import { Button } from "@/components/Button";

const MAX_SUGGESTION = 5;

type SuggestionProps = {
  answer: string;
  className?: string;
  show: boolean;
  onClick: (name: string) => void;
};

export const Suggestion = (props: SuggestionProps) => {
  const { isDesktop, suggestions } = useSuggestion(props.answer);

  return (
    <div
      className={props.className}
      css={css`
        width: 100%;
        height: ${4 * MAX_SUGGESTION}rem;
      `}
    >
      {props.show && suggestions.length > 0 && (
        <ul
          css={css`
            width: 100%;
            height: 100%;
            overflow-y: auto;
          `}
        >
          {suggestions.map((suggestion, i) => (
            <li
              key={i}
              css={css`
                width: 100%;
                min-height: 4rem;
                background-color: #fff;
              `}
            >
              <Button
                css={(theme) => [
                  css`
                    justify-content: flex-start;
                    width: 100%;
                    height: 4rem;
                    padding-left: 8px;
                    font-size: 1.6rem;
                    color: ${theme.colors.black};
                    transition: background-color ${theme.duration}ms;

                    &:hover {
                      background-color: rgb(0 0 0 / 4%);
                    }
                  `,
                  !isDesktop &&
                    css`
                      font-size: 1.2rem;
                    `,
                ]}
                onClick={() => props.onClick(suggestion)}
              >
                {suggestion}
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
