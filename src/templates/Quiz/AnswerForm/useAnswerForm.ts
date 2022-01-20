import React from "react";

export const useAnswerForm = () => {
  const [answer, setAnswer] = React.useState("");

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    setAnswer(event.target.value);
  };

  return { answer, handleInputChange };
};
