import { useRouter } from "next/router";
import React from "react";
import { ALL_QUIZ_COUNT } from "@/constants/allQuizCount";
import { ResultContext } from "@/contexts/ResultContextProvider";
import { useDesktop } from "@/hooks/useDesktop";

const MAX_SCORE = 100;

export const useResult = () => {
  const isDesktop = useDesktop();
  const result = React.useContext(ResultContext);
  const [score, setScore] = React.useState(0);
  const [title, setTitle] = React.useState("");
  const router = useRouter();

  React.useEffect(() => {
    if (result.quizCount < ALL_QUIZ_COUNT) {
      // router.push("/");
    }
  }, [result]);

  React.useEffect(() => {
    setScore(result.correctCount * (MAX_SCORE / ALL_QUIZ_COUNT));
  }, [result]);

  React.useEffect(() => {
    setTitle(
      [
        `ポケモン種族値クイズで${score}点を獲得しました！`,
        `(ヒント使用回数: ${result.hintCount}回)`,
      ].join("\n") + "\n",
    );
  }, [result.hintCount, score]);

  return { isDesktop, hintCount: result.hintCount, score, title };
};
