import React from "react";
import {
  HintButtonOpensContext,
  HintButtonOpensReducerContext,
} from "../HintButtonOpensContextProvider";
import { ResultReducerContext } from "@/contexts/ResultContextProvider";
import { useDesktop } from "@/hooks/useDesktop";
import type { Hint } from "@/types/Hint";

export const useHintButton = (hint: Hint) => {
  const { [hint]: isOpen } = React.useContext(HintButtonOpensContext);
  const { open } = React.useContext(HintButtonOpensReducerContext);
  const resultReducer = React.useContext(ResultReducerContext);
  const isDesktop = useDesktop();

  const handleHintButtonClick = () => {
    open(hint);
    resultReducer.increment("hintCount");
  };

  return { handleHintButtonClick, isDesktop, isOpen };
};
