import React from "react";
import {
  HintButtonOpensContext,
  SetHintButtonOpensContext,
} from "../HintButtonOpensContextProvider";
import { SetResultContext } from "@/contexts/ResultContextProvider";
import { useDesktop } from "@/hooks/useDesktop";
import type { Hint } from "@/types/Hint";

export const useHintButton = (hint: Hint) => {
  const { [hint]: isOpen } = React.useContext(HintButtonOpensContext);
  const { open } = React.useContext(SetHintButtonOpensContext);
  const { increment } = React.useContext(SetResultContext);
  const isDesktop = useDesktop();

  const handleHintButtonClick = () => {
    open(hint);
    increment("hintCount");
  };

  return { handleHintButtonClick, isDesktop, isOpen };
};
