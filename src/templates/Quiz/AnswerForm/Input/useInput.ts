import { useDesktop } from "@/hooks/useDesktop";

export const useInput = () => {
  const isDesktop = useDesktop();

  return { isDesktop };
};
