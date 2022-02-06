import { useDesktop } from "@/hooks/useDesktop";

export const useRegionConditionButton = () => {
  const isDesktop = useDesktop();

  return { isDesktop };
};
