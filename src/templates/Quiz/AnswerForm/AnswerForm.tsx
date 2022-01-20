import { Input } from "@material-ui/core";
import React from "react";
import { useAnswerForm } from "./useAnswerForm";

export const AnswerForm: React.VoidFunctionComponent = () => {
  const { answer, handleInputChange } = useAnswerForm();

  return (
    <form>
      <Input
        autoFocus
        placeholder="ポケモンの名前を入力"
        type="text"
        value={answer}
        onChange={handleInputChange}
      />
    </form>
  );
};
