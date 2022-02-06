import { useRouter } from "next/router";
import React from "react";
import { ResultContext } from "@/contexts/ResultContextProvider";
import { useDesktop } from "@/hooks/useDesktop";

export const useNumQuiz = () => {
  const isDesktop = useDesktop();
  const { numQuiz } = React.useContext(ResultContext);
  const router = useRouter();

  React.useEffect(() => {
    if (numQuiz === 0) {
      router.push("/");
    }
  }, [numQuiz]);

  return { isDesktop, numQuiz };
};
