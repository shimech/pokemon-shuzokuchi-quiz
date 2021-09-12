import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@material-ui/core';

export const useDesktop = (): boolean => {
  const { breakpoint } = useTheme();
  const isDesktop = useMediaQuery(`(min-width:${breakpoint}px)`);
  return isDesktop;
};
