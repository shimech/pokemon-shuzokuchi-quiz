import React from "react";
import type { Time } from "./TimerContextProvider";

const ONE_SECOND_MS = 1000;
const ONE_MINUTE_MS = 60 * ONE_SECOND_MS;

export const useTimerContextProvider = () => {
  const [startTime, setStartTime] = React.useState<number | null>(null);
  const [endTime, setEndTime] = React.useState<number | null>(null);
  const [time, setTime] = React.useState<Time>();

  const start = React.useCallback(() => {
    setStartTime(new Date().getTime());
    setEndTime(null);
  }, [setStartTime, setEndTime]);

  const end = React.useCallback(
    () => setEndTime(new Date().getTime()),
    [setEndTime],
  );

  React.useEffect(
    () =>
      setTime(() => {
        if (!startTime || !endTime) {
          return;
        }
        const delta = endTime - startTime;
        if (delta < 0) {
          return;
        }
        const minute = Math.floor(delta / ONE_MINUTE_MS);
        const second = Math.floor((delta % ONE_MINUTE_MS) / ONE_SECOND_MS);
        return { minute, second };
      }),
    [startTime, endTime],
  );

  return { end, start, time };
};
