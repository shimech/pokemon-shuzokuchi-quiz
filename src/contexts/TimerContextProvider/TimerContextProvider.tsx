import React from "react";
import { useTimerContextProvider } from "./useTimerContextProvider";
import type { PropsWithChildren } from "@/types/PropsWithChildren";

export type Time = { minute: number; second: number };

export type TimerReducer = {
  start: VoidFunction;
  end: VoidFunction;
};

export const TimerContext = React.createContext<Time>({ minute: 0, second: 0 });

export const TimerReducerContext = React.createContext<TimerReducer>(null);

export const TimerContextProvider = (props: PropsWithChildren) => {
  const { time, timerReducer } = useTimerContextProvider();

  return (
    <TimerContext.Provider value={time}>
      <TimerReducerContext.Provider value={timerReducer}>
        {props.children}
      </TimerReducerContext.Provider>
    </TimerContext.Provider>
  );
};
