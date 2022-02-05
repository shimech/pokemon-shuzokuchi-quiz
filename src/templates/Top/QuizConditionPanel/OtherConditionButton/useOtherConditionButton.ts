import { useDesktop } from "@/hooks/useDesktop";

export const useOtherConditionButton = () => {
  const isDesktop = useDesktop();

  return { isDesktop };
};
