import React from "react";
import { HintButtonOpensReducerContext } from "../HintPanel";
import { SetLoadingContext } from "../LoadingContextProvider";
import { ResultReducerContext } from "@/contexts/ResultContextProvider";
import { useDesktop } from "@/hooks/useDesktop";

export const useAnswerForm = (pokemonName: string) => {
  const isDesktop = useDesktop();

  const [answer, setAnswer] = React.useState("");
  const [isCorrect, setCorrect] = React.useState(false);
  const [isSuggestionOpen, setSuggestionOpen] = React.useState(false);
  const [isResultModalOpen, setResultModalOpen] = React.useState(false);
  const resultReducer = React.useContext(ResultReducerContext);
  const hintButtonOpensReducer = React.useContext(
    HintButtonOpensReducerContext,
  );
  const setLoading = React.useContext(SetLoadingContext);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setAnswer(event.target.value);
    setSuggestionOpen(true);
  };

  const handleSuggestionClick = (name: string) => {
    setAnswer(name);
    setSuggestionOpen(false);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const isCorrect = answer === pokemonName;
    setCorrect(isCorrect);
    if (isCorrect) {
      resultReducer.increment("correctCount");
    }
    setResultModalOpen(true);
  };

  const beforeTransition = () => {
    setResultModalOpen(false);
    setLoading(true);
    hintButtonOpensReducer.reset();
  };

  const afterTransition = () => {
    setAnswer("");
    setLoading(false);
  };

  return {
    afterTransition,
    answer,
    beforeTransition,
    handleInputChange,
    handleSubmit,
    handleSuggestionClick,
    isCorrect,
    isDesktop,
    isResultModalOpen,
    isSuggestionOpen,
  };
};
