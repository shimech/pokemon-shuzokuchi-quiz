import React from "react";

export const useAnswerForm = () => {
  const [answer, setAnswer] = React.useState("");
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => setAnswer(event.target.value);
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setAnswer("");
  };

  return { answer, handleInputChange, handleSubmit };
};
