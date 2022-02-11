import { useRouter } from "next/router";
import React from "react";
import { ResultContext } from "@/contexts/ResultContextProvider";
import { useDesktop } from "@/hooks/useDesktop";

export const useQuizCount = () => {
  const isDesktop = useDesktop();
  const { quizCount } = React.useContext(ResultContext);
  const router = useRouter();

  React.useEffect(() => {
    if (quizCount === 0) {
      router.push("/error");
    }
  }, [quizCount]);

  return { isDesktop, quizCount };
};
