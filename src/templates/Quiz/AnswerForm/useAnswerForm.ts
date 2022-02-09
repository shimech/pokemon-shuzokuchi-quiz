import React from "react";
import { useDesktop } from "@/hooks/useDesktop";

export const useAnswerForm = () => {
  const isDesktop = useDesktop();
  const [answer, setAnswer] = React.useState("");
  const [isSuggestionShow, setSuggestionShow] = React.useState(false);

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
    setAnswer("");
  };

  return {
    isDesktop,
    answer,
    isSuggestionShow,
    handleInputChange,
    handleSuggestionClick,
    handleSubmit,
  };
};
