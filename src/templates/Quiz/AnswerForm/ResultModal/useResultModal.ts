import { useDesktop } from "@/hooks/useDesktop";

export const useResultModal = () => {
  const isDesktop = useDesktop();

  return { isDesktop };
};
