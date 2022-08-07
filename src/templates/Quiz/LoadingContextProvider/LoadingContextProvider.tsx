import React from "react";
import type { WithChildren } from "@/types/WithChildren";

export const LoadingContext = React.createContext(false);

export const SetLoadingContext = React.createContext<
  React.Dispatch<React.SetStateAction<boolean>>
>(() => {});

type LoadingContextProviderProps = WithChildren;

export const LoadingContextProvider = (props: LoadingContextProviderProps) => {
  const [isLoading, setLoading] = React.useState(false);

  return (
    <LoadingContext.Provider value={isLoading}>
      <SetLoadingContext.Provider value={setLoading}>
        {props.children}
      </SetLoadingContext.Provider>
    </LoadingContext.Provider>
  );
};
