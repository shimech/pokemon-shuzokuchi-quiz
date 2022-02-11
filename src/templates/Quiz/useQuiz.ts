import { useDesktop } from "@/hooks/useDesktop";

export const useQuiz = () => {
  const isDesktop = useDesktop();

  return { isDesktop };
};
