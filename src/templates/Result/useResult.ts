import { useRouter } from "next/router";
import React from "react";
import { ALL_QUIZ_COUNT } from "@/constants/allQuizCount";
import { ResultContext } from "@/contexts/ResultContextProvider";
import { useDesktop } from "@/hooks/useDesktop";

const MAX_SCORE = 100;

export const useResult = () => {
  const isDesktop = useDesktop();
  const result = React.useContext(ResultContext);
  const score = result.correctCount * (MAX_SCORE / ALL_QUIZ_COUNT);
  const title =
    [
      `ポケモン種族値クイズで${score}点を獲得しました！`,
      `(ヒント使用回数: ${result.hintCount}回)`,
    ].join("\n") + "\n";
  const router = useRouter();

  React.useEffect(() => {
    if (result.quizCount < ALL_QUIZ_COUNT) {
      router.push("/error");
    }
  }, [router, result.quizCount]);

  return { hintCount: result.hintCount, isDesktop, score, title };
};
