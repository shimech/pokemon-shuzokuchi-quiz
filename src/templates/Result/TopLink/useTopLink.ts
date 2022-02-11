import { useDesktop } from "@/hooks/useDesktop";

export const useTopLink = () => {
  const isDesktop = useDesktop();

  return { isDesktop };
};
