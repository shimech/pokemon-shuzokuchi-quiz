import React from "react";
import { useUrl } from "./useUrl";
import { SetResultContext } from "@/contexts/ResultContextProvider";

export const useNextPageLink = (onClick?: VoidFunction) => {
  const { url, isValidUrl } = useUrl();
  const setResult = React.useContext(SetResultContext);

  const handleLinkClick = () => {
    setResult.increment("numQuiz");
    if (onClick) {
      onClick();
    }
  };

  return { url, isValidUrl, handleLinkClick };
};
