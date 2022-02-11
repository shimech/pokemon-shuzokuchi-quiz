import { useDesktop } from "@/hooks/useDesktop";

export const useHeader = () => {
  const isDesktop = useDesktop();

  return { isDesktop };
};
