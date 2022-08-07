import { useDesktop } from "@/hooks/useDesktop";

export const useConditionButton = () => {
  const isDesktop = useDesktop();

  return { isDesktop };
};
