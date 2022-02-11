import React from "react";

export const useCircularProgress = () => {
  const [body, setBody] = React.useState<HTMLElement>();

  React.useEffect(() => {
    setBody(document.body);
  }, []);

  return body;
};
