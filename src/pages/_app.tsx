import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PokemonsContextProvider } from "@/contexts/PokemonsContextProvider";
import { QuizConditionContextProvider } from "@/contexts/QuizConditionContextProvider";
import { QuizContextProvider } from "@/contexts/QuizContextProvider";
import { ResultContextProvider } from "@/contexts/ResultContextProvider";
import { muiTheme, emotionTheme } from "@/styles/theme";
import "@/styles/reset.css";
import "@/styles/pokemon-font/pokemon-font.css";

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <MUIThemeProvider theme={muiTheme}>
    <EmotionThemeProvider theme={emotionTheme}>
      <PokemonsContextProvider>
        <QuizConditionContextProvider>
          <QuizContextProvider>
            <ResultContextProvider>
              <Header />
              <Component {...pageProps} />
            </ResultContextProvider>
          </QuizContextProvider>
        </QuizConditionContextProvider>
      </PokemonsContextProvider>
      <Footer />
    </EmotionThemeProvider>
  </MUIThemeProvider>
);

export default App;
