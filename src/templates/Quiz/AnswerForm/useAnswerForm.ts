import React from "react";
import { useDesktop } from "@/hooks/useDesktop";

export const useAnswerForm = () => {
  const isDesktop = useDesktop();
  const [answer, setAnswer] = React.useState("");
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => setAnswer(event.target.value);
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setAnswer("");
  };

  return { isDesktop, answer, handleInputChange, handleSubmit };
};
