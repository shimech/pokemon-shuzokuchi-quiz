import { css } from "@emotion/react";
import Link from "next/link";
import React from "react";
import { Button } from "../Button";
import { QuizContext } from "@/contexts/QuizContextProvider";
import {
  ResultContext,
  SetResultContext,
} from "@/contexts/ResultContextProvider";

type NextPageLinkProps = {
  className?: string;
  onClick?: VoidFunction;
};

export const NextPageLink: React.FunctionComponent<NextPageLinkProps> = (
  props,
) => {
  const [url, setUrl] = React.useState("");
  const quiz = React.useContext(QuizContext);
  const result = React.useContext(ResultContext);
  const setResult = React.useContext(SetResultContext);

  React.useEffect(() => {
    if (result.numQuiz < 10) {
      if (quiz.length && quiz.every((pokemon) => !!pokemon)) {
        setUrl(`/quiz/${quiz[result.numQuiz].id}`);
      }
    } else {
      setUrl("/result");
    }
  }, [quiz, result]);

  return (
    <Link passHref href={url}>
      <a
        className={props.className}
        css={[
          css`
            display: block;
          `,
          url === "" &&
            css`
              pointer-events: none;
            `,
        ]}
        onClick={() => {
          setResult.increment("numQuiz");
          if (props.onClick) {
            props.onClick();
          }
        }}
      >
        <Button
          css={(theme) =>
            css`
              background-color: ${theme.colors.black};
              height: 100%;
              transition: background-color ${theme.transition}ms;
              width: 100%;
              &:hover {
                background-color: ${theme.colors.blue};
              }
              & > span {
                color: ${theme.colors.white};
                font-family: Kosugi Maru, sans-serif;
                font-weight: bold;
              }
            `
          }
        >
          {props.children}
        </Button>
      </a>
    </Link>
  );
};
