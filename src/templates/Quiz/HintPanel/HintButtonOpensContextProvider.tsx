import React from "react";
import { useHintButtonOpensContextProvider } from "./useHintButtonOpensContextProvider";
import type { Hint } from "@/types/Hint";
import type { PropsWithChildren } from "@/types/PropsWithChildren";

export type HintButtonOpens = { [key in Hint]: boolean };

export type HintButtonOpensReducer = {
  open: (hint: Hint) => void;
  reset: () => void;
};

const defaultValue: HintButtonOpens = {
  ability: false,
  region: false,
  type: false,
};

export const HintButtonOpensContext = React.createContext(defaultValue);

export const HintButtonOpensReducerContext =
  React.createContext<HintButtonOpensReducer>(null);

export const HintButtonOpensContextProvider = (props: PropsWithChildren) => {
  const { isHintButtonOpens, hintButtonOpensReducer } =
    useHintButtonOpensContextProvider(defaultValue);

  return (
    <HintButtonOpensContext.Provider value={isHintButtonOpens}>
      <HintButtonOpensReducerContext.Provider value={hintButtonOpensReducer}>
        {props.children}
      </HintButtonOpensReducerContext.Provider>
    </HintButtonOpensContext.Provider>
  );
};
