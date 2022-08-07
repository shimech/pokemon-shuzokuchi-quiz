import React from "react";
import { LoadingContext } from "../LoadingContextProvider";

export const useCircularProgress = () => {
  const isLoading = React.useContext(LoadingContext);
  const [body, setBody] = React.useState<HTMLElement>();

  React.useEffect(() => {
    setBody(document.body);
  }, []);

  return { body, isLoading };
};
