import { useRouter } from "next/router";
import React from "react";
import { QuizContext } from "@/contexts/QuizContextProvider";
import {
  SetResultContext,
  ResultContext,
} from "@/contexts/ResultContextProvider";
import type { Quiz } from "@/types/Quiz";
import { sleep } from "@/utils/sleep";

const SLEEP_MS = 150;

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
  const { increment } = React.useContext(SetResultContext);
  const router = useRouter();

  const toNextPage = async () => {
    await sleep(SLEEP_MS);
    await router.push(nextPagePath);
  };

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = async () => {
    setDisabled(true);
    increment("quizCount");
    beforeTransition?.();

    await toNextPage();

    afterTransition?.();
  };

  return { disabled, handleClick, isValidPath, nextPagePath };
};
