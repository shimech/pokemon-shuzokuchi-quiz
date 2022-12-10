import { useRouter } from "next/router";
import React from "react";
import { QuizContext } from "@/contexts/QuizContextProvider";
import {
  ResultReducerContext,
  ResultContext,
} from "@/contexts/ResultContextProvider";
import type { Quiz } from "@/types/Quiz";
import { sleep } from "@/utils/sleep";

const SLEEP_MS = 300;

const buildNextPagePath = (quizCount: number, quiz: Quiz) => {
  if (quizCount < 10) {
    return quiz.length ? `/quiz/${quiz[quizCount].id}` : null;
  } else {
    return "/result";
  }
};

export const useNextPageLink = (
  beforeTransition?: VoidFunction,
  afterTransition?: VoidFunction,
) => {
  const quiz = React.useContext(QuizContext);
  const { quizCount } = React.useContext(ResultContext);
  const nextPagePath = buildNextPagePath(quizCount, quiz);
  const isValidPath = !!nextPagePath;
  const [disabled, setDisabled] = React.useState(false);
  const resultReducer = React.useContext(ResultReducerContext);
  const router = useRouter();

  const toNextPage = async () => {
    await sleep(SLEEP_MS);
    await router.push(nextPagePath);
  };

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = async () => {
    setDisabled(true);
    resultReducer.increment("quizCount");

    beforeTransition?.();

    await toNextPage();

    afterTransition?.();
  };

  return { disabled, handleClick, isValidPath, nextPagePath };
};
