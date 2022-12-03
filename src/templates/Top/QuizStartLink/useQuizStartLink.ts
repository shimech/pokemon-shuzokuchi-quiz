import React from "react";
import { SetTimerContext } from "@/contexts/TimerContextProvider";
import { useDesktop } from "@/hooks/useDesktop";

export const useQuizStartLink = () => {
  const isDesktop = useDesktop();

  const { start } = React.useContext(SetTimerContext);

  return { isDesktop, start };
};
