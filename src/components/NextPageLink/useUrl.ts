import React from "react";
import { QuizContext } from "@/contexts/QuizContextProvider";
import { ResultContext } from "@/contexts/ResultContextProvider";

export const useUrl = () => {
  const [url, setUrl] = React.useState("#");
  const [isValidUrl, setValidUrl] = React.useState(false);
  const quiz = React.useContext(QuizContext);
  const result = React.useContext(ResultContext);

  React.useEffect(() => {
    if (result.numQuiz < 10) {
      if (quiz.length && quiz.every((pokemon) => !!pokemon)) {
        setUrl(`/quiz/${quiz[result.numQuiz].id}`);
      }
    } else {
      setUrl("/result");
    }
  }, [quiz, result]);

  React.useEffect(() => {
    if (!url || url === "#") {
      setValidUrl(false);
    }
    setValidUrl(true);
  });

  return { url, isValidUrl };
};
