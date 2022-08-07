import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";

export const useDesktop = (): boolean => {
  const { breakpoint } = useTheme();
  const isDesktop = useMediaQuery(`(min-width:${breakpoint}px)`);
  return isDesktop;
};
