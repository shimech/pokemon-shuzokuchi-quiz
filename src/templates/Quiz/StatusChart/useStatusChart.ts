import { useTheme } from "@emotion/react";
import { useDesktop } from "@/hooks/useDesktop";

export const useStatusChart = () => {
  const isDesktop = useDesktop();
  const theme = useTheme();

  return { isDesktop, theme };
};
