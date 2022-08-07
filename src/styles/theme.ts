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
    blue: "#0077b6",
    darkGray: "#6c757d",
    gray: "#ced4da",
    purple: "#8338ec",
    red: "#e63946",
    white: "#fefae0",
  },
  duration: 500,
  footer: {
    height: 28,
  },
  header: {
    height: 48,
  },
};
