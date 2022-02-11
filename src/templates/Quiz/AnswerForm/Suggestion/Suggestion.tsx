import { css } from "@emotion/react";
import React from "react";
import { useSuggestion } from "./useSuggestion";
import { Button } from "@/components/Button";

const MAX_SUGGESTION = 5;

type SuggestionProps = {
  answer: string;
  className?: string;
  show: boolean;
  onClick: (name: string) => void;
};

export const Suggestion: React.VoidFunctionComponent<SuggestionProps> = (
  props,
) => {
  const { isDesktop, suggestions } = useSuggestion(props.answer);

  return (
    <div
      className={props.className}
      css={css`
        height: ${4 * MAX_SUGGESTION}rem;
        width: 100%;
      `}
    >
      {props.show && suggestions.length > 0 && (
        <ul
          css={css`
            height: 100%;
            overflow-y: scroll;
            width: 100%;
          `}
        >
          {suggestions.map((suggestion, i) => (
            <li
              key={i}
              css={css`
                background-color: #fff;
                min-height: 4rem;
                width: 100%;
              `}
            >
              <Button
                css={[
                  css`
                    height: 4rem;
                    justify-content: flex-start;
                    padding-left: 8px;
                    width: 100%;
                    & > span.MuiButton-label {
                      font-size: 1.6rem;
                    }
                  `,
                  !isDesktop &&
                    css`
                      & > span.MuiButton-label {
                        font-size: 1.2rem;
                      }
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
