import type { Theme as EmotionTheme } from "@emotion/react";
import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  typography: {
    fontFamily: ["Kosugi Maru", "Otomanopee One", "sans-serif"].join(","),
  },
});

export const emotionTheme: EmotionTheme = {
  breakpoint: 768,
  colors: {
    black: "#003049",
    white: "#fefae0",
    gray: "#ced4da",
    darkGray: "#6c757d",
    red: "#e63946",
    blue: "#0077b6",
    purple: "#8338ec",
  },
  duration: 500,
  header: {
    height: 48,
  },
  footer: {
    height: 28,
  },
};
