import React from "react";
import { useUrl } from "./useUrl";
import { SetResultContext } from "@/contexts/ResultContextProvider";

export const useNextPageLink = (onClick?: VoidFunction) => {
  const url = useUrl();
  const setResult = React.useContext(SetResultContext);

  const handleLinkClick = () => {
    setResult.increment("numQuiz");
    if (onClick) {
      onClick();
    }
  };

  return { url, handleLinkClick };
};
