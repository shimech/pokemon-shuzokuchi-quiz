import React from "react";
import { TimerReducerContext } from "@/contexts/TimerContextProvider";
import { useDesktop } from "@/hooks/useDesktop";

export const useQuizStartLink = () => {
  const isDesktop = useDesktop();

  const timerReducer = React.useContext(TimerReducerContext);

  const afterTransition = () => timerReducer.start();

  return { afterTransition, isDesktop };
};
