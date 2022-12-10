import React from "react";
import type {
  HintButtonOpens,
  HintButtonOpensReducer,
} from "./HintButtonOpensContextProvider";
import type { Hint } from "@/types/Hint";

export const useHintButtonOpensContextProvider = (
  defaultValue: HintButtonOpens,
) => {
  const [isHintButtonOpens, setHintButtonOpens] = React.useState(defaultValue);

  const open = React.useCallback(
    (hint: Hint) =>
      setHintButtonOpens((prevHintButtonOpens) => ({
        ...prevHintButtonOpens,
        [hint]: true,
      })),
    [setHintButtonOpens],
  );

  const reset = React.useCallback(
    () => setHintButtonOpens({ ...defaultValue }),
    [defaultValue, setHintButtonOpens],
  );

  const hintButtonOpensReducer: HintButtonOpensReducer = React.useMemo(
    () => ({ open, reset }),
    [open, reset],
  );

  return { hintButtonOpensReducer, isHintButtonOpens };
};
