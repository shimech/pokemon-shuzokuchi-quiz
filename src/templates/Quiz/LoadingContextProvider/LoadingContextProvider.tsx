import React from "react";
import type { PropsWithChildren } from "@/types/PropsWithChildren";

export const LoadingContext = React.createContext(false);

export const SetLoadingContext =
  React.createContext<React.Dispatch<React.SetStateAction<boolean>>>(null);

export const LoadingContextProvider = (props: PropsWithChildren) => {
  const [isLoading, setLoading] = React.useState(false);

  return (
    <LoadingContext.Provider value={isLoading}>
      <SetLoadingContext.Provider value={setLoading}>
        {props.children}
      </SetLoadingContext.Provider>
    </LoadingContext.Provider>
  );
};
