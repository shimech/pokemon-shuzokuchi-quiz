import { useDesktop } from "@/hooks/useDesktop";

export const useQuizStartLink = () => {
  const isDesktop = useDesktop();

  return { isDesktop };
};
