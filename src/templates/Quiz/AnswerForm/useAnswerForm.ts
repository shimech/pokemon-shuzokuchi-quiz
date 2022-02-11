import { useRouter } from "next/router";
import React from "react";
import { SetResultContext } from "@/contexts/ResultContextProvider";
import { useDesktop } from "@/hooks/useDesktop";

export const useAnswerForm = (pokemonName: string) => {
  const isDesktop = useDesktop();
  const [answer, setAnswer] = React.useState("");
  const [isSuggestionShow, setSuggestionShow] = React.useState(false);
  const [isCorrect, setCorrect] = React.useState(false);
  const setResult = React.useContext(SetResultContext);
  const [isResultModalOpen, setResultModalOpen] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);
  const router = useRouter();

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setAnswer(event.target.value);
    setSuggestionShow(true);
  };

  const handleSuggestionClick = (name: string) => {
    setAnswer(name);
    setSuggestionShow(false);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const isCorrect = answer === pokemonName;
    setCorrect(isCorrect);
    if (isCorrect) {
      setResult.increment("correctCount");
    }
    setResultModalOpen(true);
  };

  const toNextQuiz = () => {
    setAnswer("");
    setResultModalOpen(false);
    setLoading(true);
  };

  React.useEffect(() => {
    setLoading(false);
  }, [router.query]);

  return {
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
  };
};
