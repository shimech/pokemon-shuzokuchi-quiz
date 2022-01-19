import { useDesktop } from "@/hooks/useDesktop";

export const useMain = () => {
  const isDesktop = useDesktop();

  return { isDesktop };
};
