import React from "react";
import type { Hint } from "@/types/Hint";
import type { WithChildren } from "@/types/WithChildren";

type HintButtonOpens = { [key in Hint]: boolean };

const initialValue: HintButtonOpens = {
  ability: false,
  region: false,
  type: false,
};

export const HintButtonOpensContext = React.createContext(initialValue);

export const SetHintButtonOpensContext = React.createContext<{
  open: (hint: Hint) => void;
  reset: () => void;
}>({
  open: () => {},
  reset: () => {},
});

type HintButtonOpensContextProviderProps = WithChildren;

export const HintButtonOpensContextProvider = (
  props: HintButtonOpensContextProviderProps,
) => {
  const [isHintButtonOpens, setHintButtonOpens] = React.useState(initialValue);

  const open = React.useCallback(
    (hint: Hint) =>
      setHintButtonOpens((prevHintButtonOpens) => ({
        ...prevHintButtonOpens,
        [hint]: true,
      })),
    [setHintButtonOpens],
  );

  const reset = React.useCallback(
    () => setHintButtonOpens({ ...initialValue }),
    [setHintButtonOpens],
  );

  return (
    <HintButtonOpensContext.Provider value={isHintButtonOpens}>
      <SetHintButtonOpensContext.Provider value={{ open, reset }}>
        {props.children}
      </SetHintButtonOpensContext.Provider>
    </HintButtonOpensContext.Provider>
  );
};
