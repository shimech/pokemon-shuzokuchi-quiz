import { useDesktop } from "@/hooks/useDesktop";

export const useHintPanel = () => {
  const isDesktop = useDesktop();

  return { isDesktop };
};
