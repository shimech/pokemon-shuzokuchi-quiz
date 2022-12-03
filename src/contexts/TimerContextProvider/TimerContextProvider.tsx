import React from "react";
import { useTimerContextProvider } from "./useTimerContextProvider";
import type { WithChildren } from "@/types/WithChildren";

export type Time = { minute: number; second: number };

export const TimerContext = React.createContext<Time>({ minute: 0, second: 0 });

export const SetTimerContext = React.createContext<{
  start: () => void;
  end: () => void;
}>({ end: () => {}, start: () => {} });

type TimerContextProviderProps = WithChildren;

export const TimerContextProvider = (props: TimerContextProviderProps) => {
  const { time, end, start } = useTimerContextProvider();

  return (
    <TimerContext.Provider value={time}>
      <SetTimerContext.Provider value={{ end, start }}>
        {props.children}
      </SetTimerContext.Provider>
    </TimerContext.Provider>
  );
};
